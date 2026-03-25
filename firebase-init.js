import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut, 
    onAuthStateChanged, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
    deleteUser
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    addDoc, 
    collection, 
    serverTimestamp,
    query, 
    where, 
    getDocs, 
    onSnapshot, 
    updateDoc, 
    arrayUnion,
    deleteDoc,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBM1k0ZaGTXwL4VS4Aj10DgfL2F0HV3X6w",
    authDomain: "naturalscience-63138.firebaseapp.com",
    projectId: "naturalscience-63138",
    storageBucket: "naturalscience-63138.firebasestorage.app",
    messagingSenderId: "271857112004",
    appId: "1:271857112004:web:58dda620c5582106c70a91",
    measurementId: "G-6G03531HY6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.firebaseAuth = auth;
window.firebaseDb = db;
window.firebaseProviders = { Google: new GoogleAuthProvider() };

// Global API
window.firebaseAPI = {
    signInGoogle: async () => {
        try {
            const result = await signInWithPopup(auth, window.firebaseProviders.Google);
            return result.user;
        } catch (error) {
            console.error('Login error', error);
            alert('ログインに失敗しました: ' + error.message);
            return null;
        }
    },
    registerWithEmail: async (email, password) => {
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(result.user);
            await signOut(auth);
            alert('【仮登録完了】\nまだ登録は完了していません！\n\n入力したメールアドレスへ「確認メール」を送信しました。メール内のURLをクリックして本登録を完了させてください。\n\n※メールが届かない場合は「迷惑メールフォルダ」もあわせてご確認ください。');
            return null;
        } catch (error) {
            console.error('Email register error', error);
            alert('アカウントの作成に失敗しました: ' + error.message);
            return null;
        }
    },
    signInWithEmail: async (email, password) => {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            if (!result.user.emailVerified) {
                try { await sendEmailVerification(result.user); } catch (e) {}
                await signOut(auth);
                alert('メール認証が完了していません。確認メールを再送しましたので認証を完了させてください。');
                return null;
            }
            return result.user;
        } catch (error) {
            console.error('Email Login error', error);
            alert('ログインに失敗しました: メールアドレスかパスワードが間違っています。');
            return null;
        }
    },
    resetPasswordEmail: async (email) => {
        try {
            await sendPasswordResetEmail(auth, email);
            return true;
        } catch (error) {
            console.error('Password reset error', error);
            return false;
        }
    },
    signOut: async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Logout error', error);
        }
    },
    deleteAccount: async (user) => {
        try {
            await deleteDoc(doc(db, "users", user.uid));
            await deleteDoc(doc(db, "saves", user.uid));
            await deleteUser(user);
            return true;
        } catch (error) {
            console.error('Delete account error', error);
            return false;
        }
    },
    onAuthStateChanged: (callback) => {
        onAuthStateChanged(auth, callback);
    },
    saveDataToCloud: async (uid, dataString) => {
        try {
            await setDoc(doc(db, "saves", uid), {
                saveData: dataString,
                timestamp: serverTimestamp()
            }, { merge: true });
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    },
    loadDataFromCloud: async (uid) => {
        try {
            const snap = await getDoc(doc(db, "saves", uid));
            if (snap.exists()) {
                return snap.data().saveData;
            }
        } catch (e) {
            console.error(e);
        }
        return null;
    },
    
    // --- Science Friend Features ---
    updateUserProfile: async (uid, profile) => {
        try {
            await setDoc(doc(db, "users", uid), {
                ...profile,
                lastSeen: serverTimestamp()
            }, { merge: true });
            return true;
        } catch (e) { console.error(e); return false; }
    },
    searchUserByFriendCode: async (friendCode) => {
        try {
            const q = query(collection(db, "users"), where("friendCode", "==", friendCode));
            const snap = await getDocs(q);
            if (snap.empty) return null;
            const docItem = snap.docs[0];
            return { uid: docItem.id, ...docItem.data() };
        } catch (e) { console.error(e); return null; }
    },
    sendFriendRequest: async (fromUid, fromName, toUid) => {
        try {
            await addDoc(collection(db, "friendRequests"), {
                from: fromUid,
                fromName: fromName,
                to: toUid,
                status: "pending",
                timestamp: serverTimestamp()
            });
            return true;
        } catch (e) { console.error(e); return false; }
    },
    getFriendRequests: (uid, callback) => {
        const q = query(collection(db, "friendRequests"), where("to", "==", uid), where("status", "==", "pending"));
        return onSnapshot(q, (snap) => {
            const reqs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            callback(reqs);
        });
    },
    acceptFriendRequest: async (requestId, uidA, uidB) => {
        try {
            await deleteDoc(doc(db, "friendRequests", requestId));
            await updateDoc(doc(db, "users", uidA), { friends: arrayUnion(uidB) });
            await updateDoc(doc(db, "users", uidB), { friends: arrayUnion(uidA) });
            return true;
        } catch (e) { console.error(e); return false; }
    },
    getFriendsData: (uid, callback) => {
        return onSnapshot(doc(db, "users", uid), async (snap) => {
            if (!snap.exists()) return callback([]);
            const userData = snap.data();
            const friends = userData.friends || [];
            if (friends.length === 0) return callback([]);
            const q = query(collection(db, "users"), where("__name__", "in", friends.slice(0, 10)));
            const friendsSnap = await getDocs(q);
            const friendsData = friendsSnap.docs.map(d => ({ uid: d.id, ...d.data() }));
            callback(friendsData);
        });
    },
    sendMessage: async (chatId, senderId, senderName, text) => {
        try {
            await addDoc(collection(db, "chats", chatId, "messages"), {
                senderId: senderId,
                senderName: senderName,
                text: text,
                timestamp: serverTimestamp()
            });
            return true;
        } catch (e) { console.error(e); return false; }
    },
    listenToMessages: (chatId, callback) => {
        const q = query(
            collection(db, "chats", chatId, "messages"),
            orderBy("timestamp", "asc"),
            limit(50)
        );
        return onSnapshot(q, (snap) => {
            const msgs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
            callback(msgs);
        });
    },
    // --- Suggestion Box ---
    submitSuggestion: async (uid, name, text) => {
        try {
            const docRef = await addDoc(collection(db, "suggestions"), {
                uid: uid || 'anonymous',
                name: name || '匿名研究者',
                text: text || '',
                timestamp: serverTimestamp()
            });
            return true;
        } catch (e) {
            console.error(e);
            return false;
        }
    }
};
