import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

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
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error('Registration error', error);
            alert('アカウント作成に失敗しました: ' + error.message);
            return null;
        }
    },
    signInWithEmail: async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error('Email Login error', error);
            alert('ログインに失敗しました: メールアドレスかパスワードが間違っています。');
            return null;
        }
    },
    signOut: async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Logout error', error);
        }
    },
    onAuthStateChanged: (callback) => {
        onAuthStateChanged(auth, callback);
    },
    saveDataToCloud: async (uid, dataString) => {
        try {
            await setDoc(doc(db, "saves", uid), {
                saveData: dataString,
                timestamp: new Date()
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
    }
};
