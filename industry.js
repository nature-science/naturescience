// industry.js - UI controller for Industry Mode
// Connects to the main save data in script.js and the automation loop.

// Setup UI hooks for script.js
window.renderIndustryPlants = renderPlants;
window.renderIndustryInventory = renderInventory;

let indDataUI = { plants: {}, currentGoalIndex: 0 };

function initIndustryUI() {
    console.log("🏭 工業モード 初期化");

    // Attempt to load industry data
    const indSaveStr = localStorage.getItem('nature_science_ind_save');
    if (indSaveStr) {
        try { indDataUI = Object.assign(indDataUI, JSON.parse(indSaveStr)); } catch (e) { }
    }

    // Set recipe count
    document.getElementById('ind-recipes-count').innerText = typeof discovered !== 'undefined' ? discovered.size : 0;

    renderPlants();
    renderInventory();
    renderGoal();

    document.getElementById('return-science-btn').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    // We also need a periodic UI update for progress bars (if any) or goals
    setInterval(() => {
        if (indDataUI.currentGoalIndex < GOALS.length) renderGoal();
    }, 1000);

    // Smooth UI updater for progress bars
    setInterval(() => {
        if (typeof IND_PLANTS === 'undefined') return;
        const indSaveStr = localStorage.getItem('nature_science_ind_save');
        if (indSaveStr) {
            try {
                let latestData = JSON.parse(indSaveStr);
                let now = Date.now();
                let elapsed = now - (latestData.lastTick || now);

                IND_PLANTS.forEach(p => {
                    let state = latestData.plants[p.id];
                    let progEl = document.getElementById('prog-' + p.id);
                    if (state && state.active && progEl) {
                        let currentProg = (state.progress || 0) + elapsed;
                        let percent = (currentProg / p.cycleMs) * 100;
                        if (percent > 100) percent = 100;
                        if (percent < 0) percent = 0;
                        progEl.style.width = percent + '%';
                    } else if (progEl) {
                        progEl.style.width = '0%';
                    }
                });
            } catch (e) { }
        }
    }, 50); // 20fps for smooth visual update
}

// Start industry UI once script.js is fully loaded and initialized
// (Initialization is now triggered by script.js's window.onload after loadGame)

// Helper to get element data from ELEMENTS global object
function getEl(id) {
    if (typeof ELEMENTS !== 'undefined' && ELEMENTS[id]) return ELEMENTS[id];
    return { name: 'Unknown', emoji: '?' };
}

function saveIndDataUI() {
    let existingStr = localStorage.getItem('nature_science_ind_save');
    let existing = {};
    if (existingStr) {
        try { existing = JSON.parse(existingStr); } catch (e) { }
    }
    existing.plants = indDataUI.plants;
    existing.currentGoalIndex = indDataUI.currentGoalIndex;
    localStorage.setItem('nature_science_ind_save', JSON.stringify(existing));
}

// --- Goal System ---
const GOALS = [
    { title: "🏭 産業革命の基盤", targetItem: "iron", targetAmount: 50, rewardDesc: "資金 +500 G", onComplete: () => { playerMoney += 500; } }
];

function renderGoal() {
    const goalContainer = document.getElementById('industry-goal-container');
    if (!goalContainer) return;

    let g = GOALS[indDataUI.currentGoalIndex || 0];
    if (!g) {
        goalContainer.innerHTML = `<div style="padding:15px; background:rgba(76, 175, 80, 0.1); border:1px solid #4CAF50; border-radius:10px; text-align:center;">
            <h3 style="color:#2E7D32; font-size:1.1rem; margin-bottom:5px;">🏆 全目標達成！</h3>
            <p style="font-size:0.85rem; color:#4CAF50;">現在の工業目標をすべて完了しました。</p>
        </div>`;
        return;
    }

    let curr = (typeof inventoryCounts !== 'undefined') ? (inventoryCounts[g.targetItem] || 0) : 0;
    let pct = Math.min(100, (curr / g.targetAmount) * 100);

    goalContainer.innerHTML = `
        <div style="padding:15px; background:rgba(255, 255, 255, 0.8); border:1px solid #b0bec5; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
            <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-bottom:10px;">
                <div>
                    <div style="font-size:0.75rem; color:#78909c; font-weight:bold;">🎯 現在の目標</div>
                    <div style="font-size:1rem; color:#263238; font-weight:bold;">${g.title}</div>
                </div>
                <div style="font-size:0.85rem; color:#1976d2; font-weight:bold;">報酬: ${g.rewardDesc}</div>
            </div>
            <div style="font-size:0.85rem; color:#546e7a; margin-bottom:5px;">
                ${getEl(g.targetItem).emoji} ${getEl(g.targetItem).name} を ${g.targetAmount} 個生産・所持する (${Math.floor(curr)} / ${g.targetAmount})
            </div>
            <div style="width:100%; height:10px; background:rgba(0,0,0,0.1); border-radius:5px; overflow:hidden;">
                <div style="width:${pct}%; height:100%; background:linear-gradient(90deg, #42a5f5, #1e88e5); transition:width 0.3s;"></div>
            </div>
            ${curr >= g.targetAmount ? `<button id="claim-goal-btn" style="margin-top:10px; width:100%; padding:8px; background:#43a047; color:white; border:none; border-radius:5px; font-weight:bold; cursor:pointer;">受け取る</button>` : ''}
        </div>
    `;

    let btn = document.getElementById('claim-goal-btn');
    if (btn) {
        btn.addEventListener('click', () => {
            g.onComplete();
            inventoryCounts[g.targetItem] -= g.targetAmount;
            if (typeof saveGame === 'function') saveGame();
            indDataUI.currentGoalIndex = (indDataUI.currentGoalIndex || 0) + 1;
            saveIndDataUI();
            renderGoal();
            renderInventory();
        }, { once: true });
    }
}

function renderInventory() {
    const invContainer = document.getElementById('industry-inventory');
    if (!invContainer) return;

    invContainer.innerHTML = '';

    if (typeof inventoryCounts === 'undefined') return;

    let keys = Object.keys(inventoryCounts).sort((a, b) => inventoryCounts[b] - inventoryCounts[a]);

    // Check money specifically
    if (typeof playerMoney !== 'undefined') {
        let div = document.createElement('div');
        div.style.padding = '8px';
        div.style.background = 'rgba(255, 235, 59, 0.2)';
        div.style.border = '1px solid #fbc02d';
        div.style.borderRadius = '5px';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';
        div.style.fontSize = '0.9rem';
        div.innerHTML = `<span>💰 資金 (G)</span><span style="font-weight:bold; color:#f57f17;">${Math.floor(playerMoney)}</span>`;
        invContainer.appendChild(div);
    }

    for (let key of keys) {
        let count = inventoryCounts[key];
        if (count > 0 && ELEMENTS[key]) {
            let el = getEl(key);
            let div = document.createElement('div');
            div.style.padding = '8px';
            div.style.background = 'rgba(255,255,255,0.7)';
            div.style.border = '1px solid #cfd8dc';
            div.style.borderRadius = '5px';
            div.style.display = 'flex';
            div.style.justifyContent = 'space-between';
            div.style.alignItems = 'center';
            div.style.fontSize = '0.9rem';

            div.innerHTML = `<span>${el.emoji} ${el.name}</span><span style="font-weight:bold; color:#37474f;">${Math.floor(count)}</span>`;
            invContainer.appendChild(div);
        }
    }
}

function renderPlants() {
    const pContainer = document.getElementById('plants-container');
    if (!pContainer || typeof IND_PLANTS === 'undefined') return;

    // Refresh memory
    const indSaveStr = localStorage.getItem('nature_science_ind_save');
    if (indSaveStr) {
        try { indDataUI = Object.assign(indDataUI, JSON.parse(indSaveStr)); } catch (e) { }
    }

    pContainer.innerHTML = '';

    IND_PLANTS.forEach(p => {
        const unlocked = p.reqDiscover.every(req => {
            if (Array.isArray(req)) return req.some(r => discovered.has(r));
            return discovered.has(req);
        });

        let insHtml = '';
        if (Array.isArray(p.inputs)) {
            insHtml = p.inputs.map(req => {
                let optionsHtml = req.options.map(opt => getEl(opt).emoji).join('');
                return `<span title="${req.options.map(opt => getEl(opt).name).join(' or ')}">${optionsHtml}</span> ${req.name} x${req.amount}`;
            }).join('<br>');
        } else {
            insHtml = Object.keys(p.inputs).map(k => `${getEl(k).emoji} ${getEl(k).name} x${p.inputs[k]}`).join('<br>');
        }
        if (!insHtml) insHtml = '<em>なし</em>';
        let outsHtml = Object.keys(p.outputs).map(k => `${getEl(k).emoji} ${getEl(k).name} x${p.outputs[k]}`).join('<br>');

        let state = indDataUI.plants[p.id];

        let html = `
            <div style="background: ${unlocked ? 'rgba(255,255,255,0.9)' : 'rgba(200,200,200,0.3)'}; border: 1px solid #b0bec5; border-radius: 12px; padding: 20px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 20px; transition: transform 0.2s;">
                <div style="font-size: 3rem; opacity: ${unlocked ? '1' : '0.3'}; text-align: center;">
                    <div>${p.emoji}</div>
                    ${(state && state.active) ? '<div style="font-size: 1.5rem; animation: spin 2s linear infinite;">⚙️</div>' : ''}
                </div>
                <div style="flex: 1; opacity: ${unlocked ? '1' : '0.5'};">
                    <h3 style="color: #263238; margin-bottom: 5px;">${p.name}</h3>
                    <p style="font-size: 0.85rem; color: #546e7a; margin-bottom: 10px;">${p.desc}</p>
                    
                    <div style="display: flex; gap: 20px; font-size: 0.8rem; background: rgba(0,0,0,0.03); padding: 10px; border-radius: 5px;">
                        <div style="flex: 1;"><strong>🔻 消費:</strong><br>${insHtml}</div>
                        <div style="flex: 1;"><strong>🔺 生産:</strong><br>${outsHtml}</div>
                        <div style="flex: 1;">
                            <strong>⏱ サイクル:</strong><br>${p.cycleMs / 1000}秒
                            ${(state && state.built) ? `<div style="margin-top: 5px; width: 100%; height: 6px; background: #cfd8dc; border-radius: 3px; overflow: hidden;"><div id="prog-${p.id}" style="height: 100%; width: 0%; background: #4caf50; transition: width 0.1s linear;"></div></div>` : ''}
                        </div>
                    </div>
                </div>
                
                <div style="width: 150px; text-align: center;">
                    ${!unlocked ?
                `<div style="font-size: 0.8rem; color: #e53935; border: 1px dashed #e53935; padding: 10px; border-radius: 5px;">科学モードで発見して解放:<br>${p.reqDiscover.map(req => {
                    if (Array.isArray(req)) {
                        const isOptUnlocked = req.some(r => discovered.has(r));
                        const names = req.map(r => getEl(r).name).join(' または ');
                        return isOptUnlocked ? ('✅ ' + names) : ('❌ ' + names);
                    }
                    return discovered.has(req) ? ('✅ ' + getEl(req).name) : ('❌ ' + getEl(req).name);
                }).join('<br>')}</div>` :

                !(state && state.built) ?
                    `<button class="build-btn" data-id="${p.id}" style="width:100%; padding: 15px 10px; background: #fb8c00; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">建設する<br>(${p.cost} G)</button>` :

                    `<div style="display: flex; flex-direction: column; gap: 10px;">
                            <div style="font-size: 0.8rem; color: #43a047; font-weight: bold;">✅ 稼働可能</div>
                            <button class="toggle-btn" data-id="${p.id}" style="padding: 10px; background: ${state.active ? '#e53935' : '#4caf50'}; color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer;">
                                ${state.active ? '⏹ 停止する' : '▶️ 稼働する'}
                            </button>
                        </div>`
            }
                </div>
            </div>
        `;

        pContainer.insertAdjacentHTML('beforeend', html);
    });

    // Add Listeners
    document.querySelectorAll('.build-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let pid = e.currentTarget.getAttribute('data-id');
            let p = IND_PLANTS.find(x => x.id === pid);
            if (playerMoney >= p.cost) {
                playerMoney -= p.cost;
                if (!indDataUI.plants[p.id]) indDataUI.plants[p.id] = { built: true, active: false, progress: 0 };
                indDataUI.plants[p.id].built = true;
                saveIndDataUI();
                if (typeof saveGame === 'function') saveGame();
                renderPlants();
                renderInventory();
            } else {
                alert(`資金(G)が足りません！\n（必要: ${p.cost}G, 現在: ${playerMoney}G）`);
            }
        });
    });

    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            let pid = e.currentTarget.getAttribute('data-id');
            indDataUI.plants[pid].active = !indDataUI.plants[pid].active;
            saveIndDataUI();
            renderPlants();
        });
    });
}
