// Default Preloaded Activity Data (五年級入班輔導)
const DEFAULT_DB = {
  adminPassword: 'admin',
  activities: [
    {
      id: "114-grade5-counseling",
      title: "114上學期入班輔導時段調查",
      subtitle: "五年級主題：多元性別氣質",
      description: "五年級老師們好：本學期的入班輔導由李允立老師進行，請老師們選擇藍色框中任選一節課填入您的班級；如因故必須修改入班時段，歡迎與授課老師聯繫。😊",
      classes: [
        "501", "502", "503", "504", "505", "506", "507", "508", "509", "510", "511", "512", "513", "514", "515", "516"
      ],
      dateRange: {
        start: "2025-11-10",
        end: "2025-12-05"
      },
      capacity: 1, // Max classes per slot
      sessions: [
        { id: "1", name: "1", time: "08:45~09:25" },
        { id: "2", name: "2", time: "09:35~10:15" },
        { id: "3", name: "3", time: "10:30~11:10" },
        { id: "4", name: "4", time: "11:20~12:00" },
        { id: "lunch", name: "午休", time: "12:40~13:10", alwaysBlocked: true },
        { id: "5", name: "5", time: "13:20~14:00" },
        { id: "6", name: "6", time: "14:10~14:50" }
      ],
      slots: {
        "2025-11-10_1": { status: "blocked", note: "" },
        "2025-11-10_2": { status: "blocked", note: "" },
        "2025-11-10_3": { status: "blocked", note: "聰明上網學生講座" },
        "2025-11-10_4": { status: "blocked", note: "" },
        "2025-11-10_5": { status: "blocked", note: "" },
        "2025-11-10_6": { status: "blocked", note: "" },
        "2025-11-11_1": { status: "blocked", note: "專輔校外研習" },
        "2025-11-11_2": { status: "blocked", note: "專輔校外研習" },
        "2025-11-11_3": { status: "blocked", note: "專輔校外研習" },
        "2025-11-11_4": { status: "blocked", note: "專輔校外研習" },
        "2025-11-11_5": { status: "blocked", note: "專輔校外研習" },
        "2025-11-11_6": { status: "blocked", note: "專輔校外研習" },
        "2025-11-12_1": { status: "blocked", note: "" },
        "2025-11-12_3": { status: "reserved", bookings: { "501": { pin: "1234" } } },
        "2025-11-12_4": { status: "blocked", note: "" },
        "2025-11-12_5": { status: "blocked", note: "" },
        "2025-11-12_6": { status: "blocked", note: "" },
        "2025-11-13_1": { status: "blocked", note: "" },
        "2025-11-13_2": { status: "reserved", bookings: { "503": { pin: "1234" } } },
        "2025-11-13_4": { status: "reserved", bookings: { "509": { pin: "1234" } } },
        "2025-11-13_5": { status: "blocked", note: "" },
        "2025-11-13_6": { status: "reserved", bookings: { "505": { pin: "1234" } } },
        "2025-11-14_1": { status: "blocked", note: "" },
        "2025-11-14_2": { status: "blocked", note: "" },
        "2025-11-14_3": { status: "blocked", note: "" },
        "2025-11-14_4": { status: "blocked", note: "" },
        "2025-11-14_5": { status: "blocked", note: "" },
        "2025-11-14_6": { status: "blocked", note: "" },
        "2025-11-17_1": { status: "blocked", note: "" },
        "2025-11-17_2": { status: "reserved", bookings: { "507": { pin: "1234" } } },
        "2025-11-17_3": { status: "reserved", bookings: { "504": { pin: "1234" } } },
        "2025-11-17_4": { status: "blocked", note: "" },
        "2025-11-17_5": { status: "blocked", note: "" },
        "2025-11-17_6": { status: "blocked", note: "" },
        "2025-11-18_1": { status: "blocked", note: "" },
        "2025-11-18_2": { status: "reserved", bookings: { "512": { pin: "1234" } } },
        "2025-11-18_3": { status: "reserved", bookings: { "502": { pin: "1234" } } },
        "2025-11-18_4": { status: "blocked", note: "" },
        "2025-11-18_5": { status: "blocked", note: "" },
        "2025-11-18_6": { status: "blocked", note: "" },
        "2025-11-19_1": { status: "blocked", note: "" },
        "2025-11-19_2": { status: "reserved", bookings: { "513": { pin: "1234" } } },
        "2025-11-19_4": { status: "blocked", note: "" },
        "2025-11-19_5": { status: "blocked", note: "" },
        "2025-11-19_6": { status: "blocked", note: "" },
        "2025-11-20_1": { status: "blocked", note: "" },
        "2025-11-20_4": { status: "blocked", note: "" },
        "2025-11-20_5": { status: "reserved", bookings: { "510": { pin: "1234" } } },
        "2025-11-20_6": { status: "reserved", bookings: { "407": { pin: "1234" } } },
        "2025-11-21_1": { status: "blocked", note: "" },
        "2025-11-21_2": { status: "reserved", bookings: { "514": { pin: "1234" } } },
        "2025-11-21_3": { status: "reserved", bookings: { "511": { pin: "1234" } } },
        "2025-11-21_4": { status: "blocked", note: "" },
        "2025-11-21_5": { status: "blocked", note: "" },
        "2025-11-21_6": { status: "blocked", note: "" },
        "2025-11-24_1": { status: "blocked", note: "" },
        "2025-11-24_2": { status: "reserved", bookings: { "508": { pin: "1234" } } },
        "2025-11-24_3": { status: "reserved", bookings: { "506": { pin: "1234" } } },
        "2025-11-24_4": { status: "blocked", note: "" },
        "2025-11-24_5": { status: "blocked", note: "" },
        "2025-11-24_6": { status: "blocked", note: "" },
        "2025-11-25_1": { status: "blocked", note: "" },
        "2025-11-25_2": { status: "blocked", note: "" },
        "2025-11-25_3": { status: "blocked", note: "" },
        "2025-11-25_4": { status: "blocked", note: "" },
        "2025-11-25_5": { status: "blocked", note: "" },
        "2025-11-25_6": { status: "blocked", note: "" },
        "2025-11-26_1": { status: "blocked", note: "" },
        "2025-11-26_2": { status: "blocked", note: "" },
        "2025-11-26_3": { status: "blocked", note: "" },
        "2025-11-26_4": { status: "blocked", note: "" },
        "2025-11-26_5": { status: "blocked", note: "" },
        "2025-11-26_6": { status: "blocked", note: "" },
        "2025-11-27_1": { status: "blocked", note: "" },
        "2025-11-27_2": { status: "blocked", note: "" },
        "2025-11-27_3": { status: "blocked", note: "" },
        "2025-11-27_4": { status: "blocked", note: "" },
        "2025-11-28_1": { status: "blocked", note: "" },
        "2025-11-28_2": { status: "blocked", note: "" },
        "2025-11-28_3": { status: "blocked", note: "" },
        "2025-11-28_4": { status: "blocked", note: "" },
        "2025-11-28_5": { status: "blocked", note: "" },
        "2025-11-28_6": { status: "blocked", note: "" },
        "2025-12-01_1": { status: "blocked", note: "" },
        "2025-12-01_2": { status: "blocked", note: "" },
        "2025-12-01_3": { status: "reserved", bookings: { "515": { pin: "1234" } } },
        "2025-12-01_4": { status: "reserved", bookings: { "516": { pin: "1234" } } },
        "2025-12-01_5": { status: "blocked", note: "" },
        "2025-12-01_6": { status: "blocked", note: "" },
        "2025-12-02_1": { status: "blocked", note: "" },
        "2025-12-02_2": { status: "blocked", note: "" },
        "2025-12-02_3": { status: "blocked", note: "" },
        "2025-12-02_4": { status: "blocked", note: "" },
        "2025-12-02_5": { status: "blocked", note: "" },
        "2025-12-02_6": { status: "blocked", note: "" },
        "2025-12-03_1": { status: "blocked", note: "" },
        "2025-12-03_2": { status: "blocked", note: "" },
        "2025-12-03_3": { status: "blocked", note: "" },
        "2025-12-03_4": { status: "blocked", note: "" },
        "2025-12-03_5": { status: "blocked", note: "" },
        "2025-12-03_6": { status: "blocked", note: "" },
        "2025-12-04_1": { status: "blocked", note: "" },
        "2025-12-04_2": { status: "blocked", note: "" },
        "2025-12-04_3": { status: "blocked", note: "" },
        "2025-12-04_4": { status: "blocked", note: "" },
        "2025-12-05_1": { status: "blocked", note: "" },
        "2025-12-05_2": { status: "blocked", note: "" },
        "2025-12-05_3": { status: "blocked", note: "" },
        "2025-12-05_4": { status: "blocked", note: "" },
        "2025-12-05_5": { status: "blocked", note: "" },
        "2025-12-05_6": { status: "blocked", note: "" }
      }
    }
  ]
};

// State Variables
let isFirebaseMode = false;
let firebaseDbRef = null;
let db = null; // Used in LocalStorage fallback mode

let state = {
  activities: [],
  currentActivity: null,
  isAdmin: false,
  adminPassword: '',
  correctAdminPassword: 'admin',
  bookedSlotsLocal: JSON.parse(localStorage.getItem('booked_slots_local_v2')) || {}, // local registry key maps: { "actId_slotKey": "pin" }
  tempAiSlots: null
};

// DOM Elements
const lobbyView = document.getElementById('lobby-view');
const activityView = document.getElementById('activity-view');
const activitiesLobbyGrid = document.getElementById('activities-lobby-grid');
const breadcrumbCurrent = document.getElementById('breadcrumb-current');
const firebaseStatus = document.getElementById('firebase-status');
const firebaseStatusText = document.getElementById('status-text');

const activityTitle = document.getElementById('activity-title');
const activitySubtitle = document.getElementById('activity-subtitle');
const activityDescription = document.getElementById('activity-description');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const classesList = document.getElementById('classes-list');
const weeksContainer = document.getElementById('weeks-container');
const toastContainer = document.getElementById('toast-container');

// Modals
const adminPanel = document.getElementById('admin-panel');
const bookingModal = document.getElementById('booking-modal');
const releaseModal = document.getElementById('release-modal');
const manualModal = document.getElementById('manual-modal');
const verifyModal = document.getElementById('verify-modal');
const cellAdminModal = document.getElementById('cell-admin-modal');

// Page Load Initializer
window.addEventListener('DOMContentLoaded', async () => {
  setupEventListeners();
  initFirebaseOrLocal();
  updateAdminUI();
});

// 1. Initialize DB: Verify Firebase config or fallback to LocalStorage
function initFirebaseOrLocal() {
  const config = window.firebaseConfig;
  const hasValidConfig = config && config.apiKey && config.apiKey !== "YOUR_API_KEY" && config.databaseURL;

  if (hasValidConfig) {
    try {
      // Initialize Firebase App globally using local SDK compat libraries loaded in HTML
      firebase.initializeApp(config);
      firebaseDbRef = firebase.database().ref();
      isFirebaseMode = true;
      
      // Update UI Indicator
      firebaseStatus.className = 'status-indicator active';
      firebaseStatusText.textContent = 'Firebase 連線成功';
      document.getElementById('firebase-config-status-text').innerHTML = `
        <i class="fa-solid fa-circle-check" style="color:var(--success-color);"></i> 
        已成功連線至您的專屬 Firebase 雲端資料庫。資料安全有保障！
      `;
      
      // Start Realtime Listener (Bi-directional sync flow)
      syncWithFirebase();
      return;
    } catch (err) {
      console.error('Firebase 載入錯誤，改為本機模式:', err);
    }
  }

  // Fallback to LocalStorage Mode
  isFirebaseMode = false;
  firebaseStatus.className = 'status-indicator inactive';
  firebaseStatusText.textContent = '本機儲存模式';
  
  // Read local DB
  const localData = localStorage.getItem('class_slot_booking_db_v2');
  if (localData) {
    db = JSON.parse(localData);
  } else {
    db = JSON.parse(JSON.stringify(DEFAULT_DB));
    saveLocalDb();
  }
  
  // Directly load Lobby
  renderLobby();
}

function saveLocalDb() {
  if (db && !isFirebaseMode) {
    localStorage.setItem('class_slot_booking_db_v2', JSON.stringify(db));
  }
}

// 2. Firebase Live Listener
function syncWithFirebase() {
  // Sync the entire database
  firebaseDbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    
    // Auto-create defaults in Firebase if db is empty
    if (!data || !data.activities) {
      firebaseDbRef.set(DEFAULT_DB);
      return;
    }

    // Defensive check for array truncation (Principle 2)
    const syncedActivities = (data.activities || []).map(act => {
      act.classes = act.classes || [];
      act.sessions = act.sessions || [];
      act.slots = act.slots || {};
      // Ensure bookings array/objects are safe
      Object.keys(act.slots).forEach(k => {
        if (act.slots[k].status === 'reserved') {
          act.slots[k].bookings = act.slots[k].bookings || {};
        }
      });
      return act;
    });

    state.correctAdminPassword = data.adminPassword || 'admin';
    state.activities = syncedActivities;

    // Trigger UI updates
    renderLobby();
    
    if (state.currentActivity) {
      // Find updated state of active activity
      const updatedAct = syncedActivities.find(a => a.id === state.currentActivity.id);
      if (updatedAct) {
        state.currentActivity = updatedAct;
        renderActivityInfo();
        renderProgress();
        renderCalendar();
      }
    }
  });
}

// 3. Render Lobby Dashboard
function renderLobby() {
  let activitiesData = [];
  if (isFirebaseMode) {
    activitiesData = state.activities;
  } else {
    activitiesData = db.activities;
  }

  activitiesLobbyGrid.innerHTML = '';
  
  if (activitiesData.length === 0) {
    activitiesLobbyGrid.innerHTML = `
      <div class="glass-card text-center" style="grid-column: 1/-1; padding: 40px;">
        <i class="fa-solid fa-folder-open" style="font-size: 40px; color: var(--text-muted); margin-bottom: 12px;"></i>
        <p>目前大廳無任何填報活動。</p>
        ${state.isAdmin ? '<p style="margin-top: 10px; font-size: 13px;">請點擊控制台中的「手動建立填報活動」來新增一個吧！</p>' : '<p style="margin-top: 10px; font-size: 13px;">請通知管理員登入並建立登記表。</p>'}
      </div>
    `;
    return;
  }

  activitiesData.forEach(act => {
    // Calculate progress for each card
    const classes = act.classes || [];
    const slots = act.slots || {};
    
    const registeredClasses = {};
    Object.values(slots).forEach(slot => {
      if (slot.status === 'reserved' && slot.bookings) {
        Object.keys(slot.bookings).forEach(c => {
          registeredClasses[c] = true;
        });
      }
    });

    const bookedCount = Object.keys(registeredClasses).length;
    const totalCount = classes.length;
    const percent = totalCount > 0 ? Math.round((bookedCount / totalCount) * 100) : 0;

    let statusText = '填報中';
    let badgeClass = 'badge-active';

    if (percent === 100) {
      statusText = '已完成';
      badgeClass = 'badge-active';
    } else if (act.openRange && (act.openRange.start || act.openRange.end)) {
      const now = new Date();
      const start = parseDatetime(act.openRange.start);
      const end = parseDatetime(act.openRange.end);

      if (start && now < start) {
        statusText = '未開放';
        badgeClass = 'badge-not-started';
      } else if (end && now > end) {
        statusText = '已截止';
        badgeClass = 'badge-closed';
      }
    }

    const card = document.createElement('div');
    card.className = 'glass-card lobby-card';
    card.innerHTML = `
      <div class="lobby-card-header">
        <h3>${act.title}</h3>
        <span class="${badgeClass}" style="margin-bottom: 0; white-space: nowrap;">${statusText}</span>
      </div>
      <p class="lobby-card-subtitle">${act.subtitle}</p>
      <div class="lobby-card-dates">
        <i class="fa-regular fa-clock"></i> 填報區間：${formatDateLabelShort(act.dateRange.start)} ~ ${formatDateLabelShort(act.dateRange.end)}
      </div>
      
      <div class="progress-bar-container" style="margin-bottom: 12px; height: 6px;">
        <div class="progress-fill" style="width: ${percent}%;"></div>
      </div>

      <div class="lobby-card-footer">
        <span class="lobby-card-progress">${bookedCount} / ${totalCount} 班已登記 (${percent}%)</span>
        <div style="display: flex; gap: 8px; align-items: center;">
          ${state.isAdmin ? `<button class="btn btn-danger btn-sm btn-delete-lobby-card" style="padding: 5px 10px; height: auto;"><i class="fa-solid fa-trash-can"></i> 刪除</button>` : ''}
          <button class="btn btn-primary btn-sm">進入登記 <i class="fa-solid fa-chevron-right"></i></button>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      enterActivity(act.id);
    });

    if (state.isAdmin) {
      const deleteBtn = card.querySelector('.btn-delete-lobby-card');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', async (e) => {
          e.stopPropagation(); // prevent entering activity
          if (!confirm(`確定要刪除整個活動「${act.title}」嗎？所有班級登記將被抹除！`)) return;
          
          const actId = act.id;
          if (isFirebaseMode) {
            const actIndex = state.activities.findIndex(a => a.id === actId);
            try {
              const updatedList = [...state.activities];
              updatedList.splice(actIndex, 1);
              await firebaseDbRef.child('activities').set(updatedList);
              showToast('活動已從 Firebase 移除', 'success');
              // renderLobby is automatically called by Firebase onValue listener!
            } catch (err) {
              showToast('刪除失敗: ' + err.message, 'error');
            }
          } else {
            const idx = db.activities.findIndex(a => a.id === actId);
            if (idx !== -1) {
              db.activities.splice(idx, 1);
              saveLocalDb();
              renderLobby();
              showToast('活動已自本機移除', 'success');
            }
          }
        });
      }
    }

    activitiesLobbyGrid.appendChild(card);
  });
}

// 4. Enter Specific Activity Page
function enterActivity(activityId) {
  let act;
  if (isFirebaseMode) {
    act = state.activities.find(a => a.id === activityId);
  } else {
    act = db.activities.find(a => a.id === activityId);
  }

  if (!act) return;

  state.currentActivity = act;
  
  // Show / Hide Panels
  lobbyView.classList.remove('active');
  activityView.classList.add('active');
  
  breadcrumbCurrent.textContent = act.title;
  document.getElementById('admin-curr-act-name').textContent = act.title;
  document.getElementById('current-act-management').style.display = 'block';

  renderActivityInfo();
  renderProgress();
  renderCalendar();
}

function exitToLobby() {
  state.currentActivity = null;
  activityView.classList.remove('active');
  lobbyView.classList.add('active');
  document.getElementById('current-act-management').style.display = 'none';
  renderLobby();
}

// Render Details
function renderActivityInfo() {
  const act = state.currentActivity;
  activityTitle.textContent = act.title;
  activitySubtitle.textContent = act.subtitle;
  activityDescription.textContent = act.description || '無填寫說明。';

  const badge = document.getElementById('activity-status-badge');
  const timeRangeSpan = document.getElementById('activity-open-time-range');

  if (act.openRange && (act.openRange.start || act.openRange.end)) {
    const startStr = act.openRange.start ? act.openRange.start.replace('T', ' ') : '無限制';
    const endStr = act.openRange.end ? act.openRange.end.replace('T', ' ') : '無限制';
    timeRangeSpan.textContent = `開放時間：${startStr} ~ ${endStr}`;
    
    // Check status
    const now = new Date();
    const start = parseDatetime(act.openRange.start);
    const end = parseDatetime(act.openRange.end);

    if (start && now < start) {
      badge.className = 'badge-not-started';
      badge.textContent = '選填未開始';
    } else if (end && now > end) {
      badge.className = 'badge-closed';
      badge.textContent = '選填已截止';
    } else {
      badge.className = 'badge-active';
      badge.textContent = '活動選填中';
    }
  } else {
    timeRangeSpan.textContent = '開放時間：無時間限制';
    badge.className = 'badge-active';
    badge.textContent = '活動選填中';
  }
}

function isActivityOpen(act) {
  if (state.isAdmin) return { open: true }; // Admin always has access
  if (!act.openRange) return { open: true };
  
  const now = new Date();
  const start = parseDatetime(act.openRange.start);
  const end = parseDatetime(act.openRange.end);
  
  if (start && now < start) {
    const startStr = act.openRange.start.replace('T', ' ');
    return { open: false, reason: `本活動尚未開始開放選填！開放時間為：${startStr}` };
  }
  if (end && now > end) {
    return { open: false, reason: '本活動選填時間已截止！' };
  }
  return { open: true };
}

function renderProgress() {
  const act = state.currentActivity;
  const classes = act.classes || [];
  const slots = act.slots || {};
  
  const hasTypes = act.bookingTypes && act.bookingTypes.length > 0;
  
  // Track all bookings per class
  const classBookings = {};
  classes.forEach(c => {
    classBookings[c] = {};
    if (hasTypes) {
      act.bookingTypes.forEach(t => {
        classBookings[c][t] = null;
      });
    }
  });

  let totalBookingsCount = 0;
  Object.entries(slots).forEach(([slotKey, slot]) => {
    if (slot.status === 'reserved' && slot.bookings) {
      Object.entries(slot.bookings).forEach(([cls, b]) => {
        if (classBookings[cls] !== undefined) {
          if (hasTypes) {
            if (b.type) {
              classBookings[cls][b.type] = slotKey;
              totalBookingsCount++;
            }
          } else {
            classBookings[cls]['standard'] = slotKey;
            totalBookingsCount++;
          }
        }
      });
    }
  });

  const totalClasses = classes.length;
  const totalPossibleBookings = hasTypes ? (totalClasses * act.bookingTypes.length) : totalClasses;
  const percent = totalPossibleBookings > 0 ? Math.round((totalBookingsCount / totalPossibleBookings) * 100) : 0;
  
  if (hasTypes) {
    progressText.textContent = `${totalBookingsCount} / ${totalPossibleBookings} 項目已登記 (${percent}%)`;
  } else {
    progressText.textContent = `${totalBookingsCount} / ${totalClasses} 班已登記 (${percent}%)`;
  }
  progressFill.style.width = `${percent}%`;

  classesList.innerHTML = '';
  // Apply grid layout override if we have multiple items per class
  if (hasTypes) {
    classesList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(110px, 1fr))';
  } else {
    classesList.style.gridTemplateColumns = '';
  }

  classes.forEach(cls => {
    const badge = document.createElement('div');
    badge.className = 'class-badge';
    
    if (hasTypes) {
      badge.style.display = 'flex';
      badge.style.flexDirection = 'column';
      badge.style.alignItems = 'center';
      badge.style.gap = '4px';
      badge.style.padding = '6px 4px';
      badge.style.height = 'auto';

      const titleSpan = document.createElement('span');
      titleSpan.style.fontWeight = '800';
      titleSpan.style.fontSize = '12px';
      titleSpan.textContent = `${cls} 班`;
      badge.appendChild(titleSpan);

      const pillsContainer = document.createElement('div');
      pillsContainer.style.display = 'flex';
      pillsContainer.style.gap = '4px';
      pillsContainer.style.fontSize = '9px';
      pillsContainer.style.fontWeight = '700';

      let allCompleted = true;
      const tooltipLines = [];

      act.bookingTypes.forEach(t => {
        const slotKey = classBookings[cls][t];
        const isBooked = !!slotKey;
        if (!isBooked) allCompleted = false;

        const pill = document.createElement('span');
        pill.className = `type-indicator-pill ${isBooked ? 'booked' : 'unbooked'}`;
        
        // Show short name (生活 / 沙龍)
        const shortName = t.replace('照', '');
        pill.textContent = `${shortName}:${isBooked ? '✓' : '✗'}`;
        pillsContainer.appendChild(pill);

        if (isBooked) {
          const [date, sessId] = slotKey.split('_');
          const session = act.sessions.find(s => s.id === sessId);
          const sessName = session ? `第${session.name}節` : '';
          tooltipLines.push(`${t}：${formatDateLabelShort(date)} ${sessName}`);
        } else {
          tooltipLines.push(`${t}：尚未選填`);
        }
      });

      badge.appendChild(pillsContainer);
      badge.title = tooltipLines.join('\n');

      if (allCompleted) {
        badge.classList.add('completed');
      }
    } else {
      // Standard mode
      badge.textContent = cls;
      const slotKey = classBookings[cls]['standard'];
      if (slotKey) {
        badge.classList.add('completed');
        const [date, sessId] = slotKey.split('_');
        const session = act.sessions.find(s => s.id === sessId);
        const sessName = session ? `第${session.name}節` : '';
        badge.title = `已登記：${formatDateLabelShort(date)} ${sessName}`;
      } else {
        badge.title = '尚未登記';
      }
    }
    
    classesList.appendChild(badge);
  });
}

// Render Calendar Grid Tables (Clean Light Theme)
function renderCalendar() {
  const act = state.currentActivity;
  weeksContainer.innerHTML = '';
  
  const dates = getDatesArray(act.dateRange.start, act.dateRange.end);
  const weekdays = dates.filter(d => d.getDay() !== 0 && d.getDay() !== 6);
  
  if (weekdays.length === 0) {
    weeksContainer.innerHTML = '<p class="text-center" style="grid-column: 1/-1; padding: 20px;">無效日期區間。</p>';
    return;
  }
  
  const weeks = [];
  for (let i = 0; i < weekdays.length; i += 5) {
    weeks.push(weekdays.slice(i, i + 5));
  }
  
  const capacity = act.capacity || 1; // Load slot capacity configuration
  
  weeks.forEach((weekDates, weekIndex) => {
    const weekDiv = document.createElement('div');
    weekDiv.className = 'week-container';
    
    const wTitle = document.createElement('div');
    wTitle.className = 'week-title';
    wTitle.style.display = 'flex';
    wTitle.style.justifyContent = 'space-between';
    wTitle.style.alignItems = 'center';
    wTitle.style.flexWrap = 'wrap';
    wTitle.style.gap = '8px';
    
    wTitle.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px;">
        <i class="fa-solid fa-calendar-week" style="color:var(--primary-color);"></i> 
        第 ${weekIndex + 1} 週 (${formatDateLabelShort(weekDates[0])} ~ ${formatDateLabelShort(weekDates[weekDates.length - 1])})
      </div>
      <button class="btn btn-secondary-outline btn-sm btn-export-week" style="font-size:11px; padding:4px 8px; height:auto; display:inline-flex;" data-week-index="${weekIndex + 1}">
        <i class="fa-solid fa-download"></i> 下載此週圖檔
      </button>
    `;
    
    weekDiv.appendChild(wTitle);

    // Bind export week listener
    const exportBtn = wTitle.querySelector('.btn-export-week');
    exportBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      exportWeekToPng(weekDiv, weekIndex + 1);
    });
    
    const table = document.createElement('table');
    table.className = 'week-table';
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>節次 / 時間</th>';
    
    weekDates.forEach(date => {
      const th = document.createElement('th');
      th.innerHTML = `${formatDateLabelHeader(date)}`;
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    act.sessions.forEach(sess => {
      const row = document.createElement('tr');
      if (sess.id === 'lunch') {
        row.className = 'session-lunch-row';
      }
      
      const sessTh = document.createElement('td');
      sessTh.className = 'session-th';
      sessTh.innerHTML = `
        <span class="session-number">${sess.name}</span>
        <span class="session-time">${sess.time}</span>
      `;
      row.appendChild(sessTh);
      
      weekDates.forEach(date => {
        const dateStr = formatDateIso(date);
        const slotKey = `${dateStr}_${sess.id}`;
        const slot = act.slots[slotKey];
        
        const td = document.createElement('td');
        td.className = 'cell-slot';
        td.dataset.date = dateStr;
        td.dataset.sessId = sess.id;
        
        if (sess.alwaysBlocked) {
          // Lunch
          td.className += ' blocked';
          td.innerHTML = '<div class="blocked-content"><span class="blocked-text">午休</span></div>';
        } else if (slot && slot.status === 'blocked') {
          // Admin blocked
          td.className += ' blocked';
          td.innerHTML = `<div class="blocked-content"><span class="blocked-text">${slot.note || '不開放'}</span></div>`;
        } else {
          // Calculate bookings size
          const bookings = (slot && slot.bookings) ? slot.bookings : {};
          const bookedClasses = Object.keys(bookings);
          const currentCount = bookedClasses.length;
          
          if (currentCount === 0) {
            // 1. Available (Blue)
            td.className += ' available';
            td.innerHTML = `
              <div class="available-content">
                <i class="fa-solid fa-plus" style="font-size: 12px; margin-bottom: 2px;"></i>
                <span>可填報</span>
                ${capacity > 1 ? `<span class="available-cap">可容納 ${capacity} 班</span>` : ''}
              </div>
            `;
            td.addEventListener('click', () => openBookingModal(dateStr, sess.id));
          } else if (currentCount < capacity) {
            // 2. Partial (Yellow)
            td.className += ' partial';
            const classesLabel = bookedClasses.map(c => {
              const b = bookings[c];
              return c + (b && b.type ? `(${b.type.replace('照', '')})` : '');
            }).join(', ');
            
            // Check if device booked this slot
            const ownBookedClasses = bookedClasses.filter(c => !!state.bookedSlotsLocal[`${act.id}_${slotKey}_${c}`]);
            const editIcon = (ownBookedClasses.length > 0 || state.isAdmin) ? '<i class="fa-solid fa-lock-open" style="font-size:8px;"></i>' : '';
            
            td.innerHTML = `
              <div class="partial-content">
                <span class="partial-classes">${classesLabel} ${editIcon}</span>
                <span class="partial-info">(剩 ${capacity - currentCount} 名額)</span>
              </div>
            `;
            td.addEventListener('click', () => {
              if (state.isAdmin || ownBookedClasses.length > 0) {
                openReleaseModal(dateStr, sess.id, bookedClasses);
              } else {
                // If there's capacity, let other classes click to book
                openBookingModal(dateStr, sess.id);
              }
            });
          } else {
            // 3. Fully Reserved (Green)
            td.className += ' reserved';
            const classesLabel = bookedClasses.map(c => {
              const b = bookings[c];
              return c + (b && b.type ? `(${b.type.replace('照', '')})` : '');
            }).join(', ');
            
            const ownBookedClasses = bookedClasses.filter(c => !!state.bookedSlotsLocal[`${act.id}_${slotKey}_${c}`]);
            const editIcon = (ownBookedClasses.length > 0 || state.isAdmin) ? '<i class="fa-solid fa-lock-open" style="font-size:8px;"></i>' : '';
            
            td.innerHTML = `
              <div class="reserved-content">
                <span class="reserved-class">${classesLabel} ${editIcon}</span>
                <span class="reserved-info">已額滿</span>
              </div>
            `;
            td.addEventListener('click', () => openReleaseModal(dateStr, sess.id, bookedClasses));
          }
        }

        // Admin double click / click configuration
        td.addEventListener('dblclick', (e) => {
          if (state.isAdmin && !sess.alwaysBlocked) {
            e.preventDefault();
            openCellAdminModal(dateStr, sess.id);
          }
        });
        td.addEventListener('click', (e) => {
          if (state.isAdmin && !sess.alwaysBlocked) {
            if (slot && slot.status === 'reserved') return;
            openCellAdminModal(dateStr, sess.id);
          }
        });

        row.appendChild(td);
      });
      tbody.appendChild(row);
    });
    table.appendChild(tbody);
    weekDiv.appendChild(table);
    weeksContainer.appendChild(weekDiv);
  });
}

// Helpers
function getDatesArray(startDateStr, endDateStr) {
  const dates = [];
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const curr = new Date(start);
  let limit = 0;
  while (curr <= end && limit < 100) {
    dates.push(new Date(curr));
    curr.setDate(curr.getDate() + 1);
    limit++;
  }
  return dates;
}
function formatDateIso(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
function formatDateLabelHeader(date) {
  const m = date.getMonth() + 1;
  const d = date.getDate();
  const dayIndex = date.getDay();
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
  return `${m}/${d} (${weekDays[dayIndex]})`;
}
function formatDateLabelShort(dateOrStr) {
  const date = typeof dateOrStr === 'string' ? new Date(dateOrStr.replace(/-/g, '/')) : dateOrStr;
  const m = date.getMonth() + 1;
  const d = date.getDate();
  return `${m}/${d}`;
}

function parseDatetime(str) {
  if (!str) return null;
  const formatted = str.replace('T', ' ').replace(/-/g, '/');
  return new Date(formatted);
}

// 5. Booking Modal Setup
function openBookingModal(date, sessionId) {
  if (state.isAdmin) {
    showToast('目前為管理員模式，測試預約請先關閉管理登入。', 'info');
    return;
  }

  const act = state.currentActivity;
  const openCheck = isActivityOpen(act);
  if (!openCheck.open) {
    showToast(openCheck.reason, 'warning');
    return;
  }

  const session = act.sessions.find(s => s.id === sessionId);
  const sessName = session ? `第 ${session.name} 節 (${session.time})` : '';
  const dateStr = formatDateLabelHeader(new Date(date));
  
  document.getElementById('booking-time-string').innerHTML = `${dateStr} <br> ${sessName}`;
  
  const typeGroup = document.getElementById('booking-type-group');
  const typeSelect = document.getElementById('booking-type-select');
  const classSelect = document.getElementById('booking-class-select');

  if (act.bookingTypes && act.bookingTypes.length > 0) {
    typeGroup.style.display = 'block';
    typeSelect.setAttribute('required', 'true');
    
    // Track booked types for each class
    const classBookedTypes = {};
    Object.values(act.slots || {}).forEach(slot => {
      if (slot.status === 'reserved' && slot.bookings) {
        Object.entries(slot.bookings).forEach(([c, b]) => {
          classBookedTypes[c] = classBookedTypes[c] || [];
          if (b.type) classBookedTypes[c].push(b.type);
        });
      }
    });

    // Populate class list: show classes that haven't booked all types
    classSelect.innerHTML = '<option value="" disabled selected>-- 請選擇班級 --</option>';
    act.classes.forEach(cls => {
      const bookedList = classBookedTypes[cls] || [];
      if (bookedList.length < act.bookingTypes.length) {
        const opt = document.createElement('option');
        opt.value = cls;
        opt.textContent = `${cls} 班`;
        classSelect.appendChild(opt);
      }
    });

    // Function to update type dropdown based on selected class
    const updateTypes = () => {
      const selectedClass = classSelect.value;
      if (!selectedClass) {
        typeSelect.innerHTML = '<option value="" disabled selected>-- 請先選擇班級 --</option>';
        return;
      }

      const slotKey = `${date}_${sessionId}`;
      const slot = act.slots ? act.slots[slotKey] : null;
      const typesInSlot = slot && slot.bookings ? Object.values(slot.bookings).map(b => b.type).filter(Boolean) : [];
      const typesByClass = classBookedTypes[selectedClass] || [];

      // Allowed types = act.bookingTypes - typesInSlot - typesByClass
      const allowedTypes = act.bookingTypes.filter(t => !typesInSlot.includes(t) && !typesByClass.includes(t));

      typeSelect.innerHTML = '';
      if (allowedTypes.length === 0) {
        const opt = document.createElement('option');
        opt.value = '';
        opt.textContent = '此時段無您可登記的項目（或已被選完）';
        opt.disabled = true;
        opt.selected = true;
        typeSelect.appendChild(opt);
      } else {
        allowedTypes.forEach(t => {
          const opt = document.createElement('option');
          opt.value = t;
          opt.textContent = t;
          typeSelect.appendChild(opt);
        });
      }
    };

    // Listen to selection change
    classSelect.onchange = updateTypes;
    updateTypes(); // initial call
  } else {
    // Standard mode (no bookingTypes)
    typeGroup.style.display = 'none';
    typeSelect.removeAttribute('required');
    typeSelect.innerHTML = '';

    const bookedClasses = {};
    Object.values(act.slots || {}).forEach(slot => {
      if (slot.status === 'reserved' && slot.bookings) {
        Object.keys(slot.bookings).forEach(c => {
          bookedClasses[c] = true;
        });
      }
    });

    classSelect.innerHTML = '<option value="" disabled selected>-- 請選擇班級 --</option>';
    act.classes.forEach(cls => {
      if (!bookedClasses[cls]) {
        const opt = document.createElement('option');
        opt.value = cls;
        opt.textContent = `${cls} 班`;
        classSelect.appendChild(opt);
      }
    });
    classSelect.onchange = null; // clear listener
  }

  document.getElementById('booking-pin').value = '';
  
  const form = document.getElementById('booking-form');
  form.dataset.date = date;
  form.dataset.sessionId = sessionId;
  
  openModal(bookingModal);
}

// 6. Release Modal Setup
function openReleaseModal(date, sessionId, bookedClasses) {
  const act = state.currentActivity;
  const openCheck = isActivityOpen(act);
  if (!openCheck.open) {
    showToast(openCheck.reason, 'warning');
    return;
  }

  const session = act.sessions.find(s => s.id === sessionId);
  const sessName = session ? `第 ${session.name} 節 (${session.time})` : '';
  const dateStr = formatDateLabelHeader(new Date(date));
  const slotKey = `${date}_${sessionId}`;
  
  document.getElementById('release-time-string').innerHTML = `${dateStr} <br> ${sessName}`;
  
  // Dropdown select of classes that are registered in this slot
  const classSelect = document.getElementById('release-class-select');
  classSelect.innerHTML = '';
  
  bookedClasses.forEach(cls => {
    const opt = document.createElement('option');
    opt.value = cls;
    opt.textContent = `${cls} 班`;
    classSelect.appendChild(opt);
  });

  const pinInput = document.getElementById('release-pin');
  pinInput.value = '';

  const passcodeArea = document.getElementById('release-passcode-area');
  const adminNotice = document.getElementById('release-admin-notice');
  
  if (state.isAdmin) {
    passcodeArea.style.display = 'none';
    adminNotice.style.display = 'block';
  } else {
    passcodeArea.style.display = 'block';
    adminNotice.style.display = 'none';
    
    // Listen to selection change to auto-fill PIN if saved locally on device
    classSelect.addEventListener('change', () => {
      const selectedClass = classSelect.value;
      const ownKey = `${act.id}_${slotKey}_${selectedClass}`;
      pinInput.value = state.bookedSlotsLocal[ownKey] || '';
    });
    
    // Trigger initial load auto-fill
    const initialClass = bookedClasses[0];
    const ownKey = `${act.id}_${slotKey}_${initialClass}`;
    pinInput.value = state.bookedSlotsLocal[ownKey] || '';
  }

  const submitBtn = document.getElementById('btn-release-submit');
  submitBtn.dataset.date = date;
  submitBtn.dataset.sessionId = sessionId;
  
  openModal(releaseModal);
}

// 7. Admin Cell Toggle Status
function openCellAdminModal(date, sessionId) {
  const act = state.currentActivity;
  const session = act.sessions.find(s => s.id === sessionId);
  const sessName = session ? `第 ${session.name} 節 (${session.time})` : '';
  const dateStr = formatDateLabelHeader(new Date(date));
  const slotKey = `${date}_${sessionId}`;
  
  document.getElementById('cell-admin-time').textContent = `${dateStr} ${sessName}`;
  
  const form = document.getElementById('cell-admin-form');
  form.dataset.date = date;
  form.dataset.sessionId = sessionId;
  
  const slot = act.slots[slotKey];
  const radios = form.elements['cell-status'];
  const noteInput = document.getElementById('cell-note');
  
  if (slot && slot.status === 'blocked') {
    radios.value = 'blocked';
    noteInput.value = slot.note || '';
    document.getElementById('cell-note-group').style.display = 'block';
  } else {
    radios.value = 'available';
    noteInput.value = '';
    document.getElementById('cell-note-group').style.display = 'none';
  }
  
  openModal(cellAdminModal);
}

// 8. PNG Image Export via html2canvas
function exportToPng() {
  const act = state.currentActivity;
  if (!act) return;

  showToast('正在生成課表圖檔，請稍候...', 'info');

  const captureArea = document.getElementById('calendar-capture-area');
  
  // Style configurations for clean PNG generation
  html2canvas(captureArea, {
    scale: 2.5, // High resolution output
    useCORS: true,
    backgroundColor: '#f8fafc',
    logging: false
  }).then(canvas => {
    const imgUrl = canvas.toDataURL("image/png");
    
    // Create download trigger anchor link
    const link = document.createElement('a');
    link.download = `${act.title}_時段登記最終結果.png`;
    link.href = imgUrl;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showToast('成果圖檔下載成功！', 'success');
  }).catch(err => {
    showToast('圖片生成失敗: ' + err.message, 'error');
  });
}

function exportWeekToPng(weekElement, weekNum) {
  const act = state.currentActivity;
  if (!act) return;

  showToast(`正在生成第 ${weekNum} 週課表圖檔...`, 'info');

  const exportBtn = weekElement.querySelector('.btn-export-week');
  if (exportBtn) exportBtn.style.display = 'none';

  html2canvas(weekElement, {
    scale: 2.5,
    useCORS: true,
    backgroundColor: '#ffffff',
    logging: false
  }).then(canvas => {
    const imgUrl = canvas.toDataURL("image/png");
    const link = document.createElement('a');
    link.download = `${act.title}_第${weekNum}週_時段登記結果.png`;
    link.href = imgUrl;
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    if (exportBtn) exportBtn.style.display = 'inline-flex';
    showToast(`第 ${weekNum} 週圖檔下載成功！`, 'success');
  }).catch(err => {
    if (exportBtn) exportBtn.style.display = 'inline-flex';
    showToast('圖片生成失敗: ' + err.message, 'error');
  });
}

// Bind event listeners
function setupEventListeners() {
  // Auto-format full-width numbers to half-width, limit to 4 digits
  const formatPinInput = (e) => {
    let val = e.target.value;
    val = val.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0));
    val = val.replace(/[^0-9]/g, '');
    if (val.length > 4) {
      val = val.substring(0, 4);
    }
    e.target.value = val;
  };
  document.getElementById('booking-pin').addEventListener('input', formatPinInput);
  document.getElementById('release-pin').addEventListener('input', formatPinInput);

  // Return to Lobby buttons
  document.getElementById('btn-back-lobby').addEventListener('click', exitToLobby);
  document.getElementById('logo-lobby-btn').addEventListener('click', exitToLobby);

  // Export to PNG trigger
  document.getElementById('btn-export-png').addEventListener('click', exportToPng);

  // Close modals
  document.querySelectorAll('.btn-close, .btn-secondary-outline').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) closeModal(modal);
    });
  });

  // Admin Log In button click
  document.getElementById('btn-admin-login').addEventListener('click', () => {
    openModal(verifyModal);
  });

  // Admin Create Activity button click
  document.getElementById('btn-admin-create-act').addEventListener('click', () => {
    document.getElementById('manual-modal-title').innerHTML = '<i class="fa-solid fa-file-invoice"></i> 手動建立填報活動';
    document.getElementById('edit-activity-id').value = '';
    document.getElementById('act-title').value = '';
    document.getElementById('act-subtitle').value = '';
    document.getElementById('act-desc').value = '';
    
    const today = new Date();
    const future = new Date();
    future.setDate(today.getDate() + 25);
    
    document.getElementById('act-start-date').value = formatDateIso(today);
    document.getElementById('act-end-date').value = formatDateIso(future);
    document.getElementById('act-classes').value = '501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516';
    document.getElementById('act-capacity').value = 1;
    
    openModal(manualModal);
  });

  // Admin Log Out button click
  document.getElementById('btn-admin-logout').addEventListener('click', () => {
    state.isAdmin = false;
    state.adminPassword = '';
    updateAdminUI();
    showToast('已安全登出管理控制台', 'info');
    renderLobby();
    renderCalendar();
  });

  // Close Admin controls sidebar
  document.getElementById('btn-admin-close').addEventListener('click', () => {
    closeModal(adminPanel);
  });

  // Verify Admin password
  document.getElementById('verify-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pwd = document.getElementById('admin-pwd').value;
    
    const correctPwd = isFirebaseMode ? state.correctAdminPassword : db.adminPassword;
    
    if (pwd === correctPwd) {
      state.isAdmin = true;
      state.adminPassword = pwd;
      
      closeModal(verifyModal);
      updateAdminUI();
      showToast('管理員登入成功', 'success');
      
      openModal(adminPanel);
      renderLobby();
      renderCalendar();
    } else {
      showToast('管理密碼驗證錯誤！(請輸入密碼)', 'error');
    }
  });

  // Change Admin Password Form submit
  document.getElementById('change-pwd-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newPwd = document.getElementById('new-admin-pwd').value.trim();
    if (!newPwd) {
      showToast('密碼不能為空', 'error');
      return;
    }

    if (isFirebaseMode) {
      // 1. Firebase update
      firebaseDbRef.child('adminPassword').set(newPwd)
        .then(() => {
          state.correctAdminPassword = newPwd;
          showToast('管理員密碼已更新並上傳雲端', 'success');
          document.getElementById('new-admin-pwd').value = '';
        })
        .catch(err => {
          showToast('更新密碼失敗: ' + err.message, 'error');
        });
    } else {
      // 2. LocalStorage update
      db.adminPassword = newPwd;
      saveLocalDb();
      state.correctAdminPassword = newPwd;
      showToast('本機管理員密碼已更新', 'success');
      document.getElementById('new-admin-pwd').value = '';
    }
  });

  // Book slot form submit
  document.getElementById('booking-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const form = document.getElementById('booking-form');
      const date = form.dataset.date;
      const sessionId = form.dataset.sessionId;
      const className = document.getElementById('booking-class-select').value;
      const pin = document.getElementById('booking-pin').value;
      const bookingType = document.getElementById('booking-type-select').value || '';
      
      if (!date || !sessionId) {
        showToast('無法讀取時段資訊', 'error');
        return;
      }

      const slotKey = `${date}_${sessionId}`;
      const act = state.currentActivity;
      const actId = act.id;

      const openCheck = isActivityOpen(act);
      if (!openCheck.open) {
        showToast(openCheck.reason, 'error');
        return;
      }

      if (isFirebaseMode) {
        // 1. Firebase Write Flow
        const slotRef = firebaseDbRef.child(`activities`).child(
          state.activities.findIndex(a => a.id === actId)
        ).child('slots').child(slotKey);

        const snapshot = await slotRef.once('value');
        let slotData = snapshot.val();

        if (!slotData) {
          slotData = { status: 'reserved', bookings: {} };
        } else if (slotData.status === 'blocked') {
          showToast('此時段已被屏蔽，不可預約！', 'error');
          return;
        } else {
          slotData.status = 'reserved';
          slotData.bookings = slotData.bookings || {};
        }

        if (act.bookingTypes && act.bookingTypes.length > 0) {
          if (!bookingType) {
            showToast('請選擇登記項目！', 'error');
            return;
          }
          const typeAlreadyTaken = Object.values(slotData.bookings).some(b => b.type === bookingType);
          if (typeAlreadyTaken) {
            showToast(`此時段已有人登記「${bookingType}」，請選擇其他項目！`, 'error');
            return;
          }
          let alreadyBookedType = false;
          Object.values(act.slots || {}).forEach(s => {
            if (s.bookings) {
              const classBooking = s.bookings[className];
              if (classBooking && classBooking.type === bookingType) {
                alreadyBookedType = true;
              }
            }
          });
          if (alreadyBookedType) {
            showToast(`貴班已在其他時段登記過「${bookingType}」！`, 'error');
            return;
          }
        }

        // Add class booking
        slotData.bookings[className] = { pin: pin, type: bookingType };
        await slotRef.set(slotData);

        // Save local key for device lock
        const ownKey = `${actId}_${slotKey}_${className}`;
        state.bookedSlotsLocal[ownKey] = pin;
        localStorage.setItem('booked_slots_local_v2', JSON.stringify(state.bookedSlotsLocal));

        closeModal(bookingModal);
        showToast(`${className} 班登記成功！`, 'success');
      } else {
        // 2. LocalStorage Write Flow
        const act = db.activities.find(a => a.id === actId);
        let slotData = act.slots[slotKey];
        
        if (!slotData) {
          slotData = { status: 'reserved', bookings: {} };
        } else {
          slotData.status = 'reserved';
          slotData.bookings = slotData.bookings || {};
        }

        if (act.bookingTypes && act.bookingTypes.length > 0) {
          if (!bookingType) {
            showToast('請選擇登記項目！', 'error');
            return;
          }
          const typeAlreadyTaken = Object.values(slotData.bookings).some(b => b.type === bookingType);
          if (typeAlreadyTaken) {
            showToast(`此時段已有人登記「${bookingType}」，請選擇其他項目！`, 'error');
            return;
          }
          let alreadyBookedType = false;
          Object.values(act.slots || {}).forEach(s => {
            if (s.bookings) {
              const classBooking = s.bookings[className];
              if (classBooking && classBooking.type === bookingType) {
                alreadyBookedType = true;
              }
            }
          });
          if (alreadyBookedType) {
            showToast(`貴班已在其他時段登記過「${bookingType}」！`, 'error');
            return;
          }
        }

        slotData.bookings[className] = { pin: pin, type: bookingType };
        act.slots[slotKey] = slotData;
        saveLocalDb();

        // Save local device lock keys
        const ownKey = `${actId}_${slotKey}_${className}`;
        state.bookedSlotsLocal[ownKey] = pin;
        localStorage.setItem('booked_slots_local_v2', JSON.stringify(state.bookedSlotsLocal));

        closeModal(bookingModal);
        showToast(`${className} 班登記成功！`, 'success');
        loadActivity(actId);
      }
    } catch (err) {
      console.error('Booking error:', err);
      showToast('登記失敗: ' + err.message, 'error');
    }
  });

  // Release booking click
  document.getElementById('btn-release-submit').addEventListener('click', async (e) => {
    try {
      const btn = document.getElementById('btn-release-submit');
      const date = btn.dataset.date;
      const sessionId = btn.dataset.sessionId;
      const className = document.getElementById('release-class-select').value;
      const pin = document.getElementById('release-pin').value;
      
      if (!date || !sessionId) {
        showToast('無法讀取時段資訊', 'error');
        return;
      }

      const slotKey = `${date}_${sessionId}`;
      const act = state.currentActivity;
      const actId = act.id;

      const openCheck = isActivityOpen(act);
      if (!openCheck.open) {
        showToast(openCheck.reason, 'error');
        return;
      }

      if (isFirebaseMode) {
        // 1. Firebase Release Flow
        const actIndex = state.activities.findIndex(a => a.id === actId);
        const slotRef = firebaseDbRef.child(`activities`).child(actIndex).child('slots').child(slotKey);

        const snapshot = await slotRef.once('value');
        const slotData = snapshot.val();
        
        if (!slotData || !slotData.bookings || !slotData.bookings[className]) {
          showToast('查無該班級登記紀錄', 'error');
          return;
        }

        const correctPin = slotData.bookings[className].pin;
        const isCorrectAdmin = state.isAdmin;

        if (correctPin !== pin && !isCorrectAdmin) {
          showToast('取消密碼驗證錯誤，無法取消他人登記！', 'error');
          return;
        }

        // Delete specific booking class
        delete slotData.bookings[className];

        // If no bookings remain, clean ref key or set status available
        if (Object.keys(slotData.bookings).length === 0) {
          await slotRef.remove();
        } else {
          await slotRef.set(slotData);
        }

        // Clean local keys
        const ownKey = `${actId}_${slotKey}_${className}`;
        delete state.bookedSlotsLocal[ownKey];
        localStorage.setItem('booked_slots_local_v2', JSON.stringify(state.bookedSlotsLocal));

        closeModal(releaseModal);
        showToast(`已釋放 ${className} 班時段`, 'success');
      } else {
        // 2. LocalStorage Release Flow
        const act = db.activities.find(a => a.id === actId);
        const slotData = act ? act.slots[slotKey] : null;
        
        if (!slotData || !slotData.bookings || !slotData.bookings[className]) {
          showToast('查無該班級登記紀錄', 'error');
          return;
        }

        const correctPin = slotData.bookings[className].pin;
        const isCorrectAdmin = state.isAdmin;

        if (correctPin !== pin && !isCorrectAdmin) {
          showToast('取消密碼驗證錯誤！', 'error');
          return;
        }

        delete slotData.bookings[className];
        if (Object.keys(slotData.bookings).length === 0) {
          delete act.slots[slotKey];
        }
        saveLocalDb();

        // Clean local keys
        const ownKey = `${actId}_${slotKey}_${className}`;
        delete state.bookedSlotsLocal[ownKey];
        localStorage.setItem('booked_slots_local_v2', JSON.stringify(state.bookedSlotsLocal));

        closeModal(releaseModal);
        showToast(`已釋放 ${className} 班時段`, 'success');
        loadActivity(actId);
      }
    } catch (err) {
      console.error('Release error:', err);
      showToast('釋放失敗: ' + err.message, 'error');
    }
  });

  // Cell Admin Block
  const cellAdminForm = document.getElementById('cell-admin-form');
  cellAdminForm.elements['cell-status'].forEach(radio => {
    radio.addEventListener('change', (e) => {
      const noteGroup = document.getElementById('cell-note-group');
      noteGroup.style.display = e.target.value === 'blocked' ? 'block' : 'none';
    });
  });

  cellAdminForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const date = form.dataset.date;
    const sessionId = form.dataset.sessionId;
    const status = form.elements['cell-status'].value;
    const note = document.getElementById('cell-note').value;
    const slotKey = `${date}_${sessionId}`;
    
    const actId = state.currentActivity.id;

    if (isFirebaseMode) {
      const actIndex = state.activities.findIndex(a => a.id === actId);
      const slotRef = firebaseDbRef.child(`activities`).child(actIndex).child('slots').child(slotKey);

      try {
        if (status === 'blocked') {
          await slotRef.set({ status: 'blocked', note: note || '' });
        } else {
          await slotRef.remove();
        }
        closeModal(cellAdminModal);
        showToast('時段狀態已儲存至 Firebase', 'success');
      } catch (err) {
        showToast('儲存失敗', 'error');
      }
    } else {
      // LocalStorage Mode
      const act = db.activities.find(a => a.id === actId);
      if (status === 'blocked') {
        act.slots[slotKey] = { status: 'blocked', note: note || '' };
      } else {
        delete act.slots[slotKey];
      }
      saveLocalDb();
      closeModal(cellAdminModal);
      showToast('時段狀態已儲存', 'success');
      loadActivity(actId);
    }
  });

  // Delete Current Activity
  document.getElementById('btn-delete-current').addEventListener('click', async () => {
    if (!state.currentActivity) return;
    if (!confirm(`確定要刪除整個活動「${state.currentActivity.title}」嗎？所有班級登記將被抹除！`)) return;
    
    const actId = state.currentActivity.id;

    if (isFirebaseMode) {
      const actIndex = state.activities.findIndex(a => a.id === actId);
      try {
        // Remove from list
        const updatedList = [...state.activities];
        updatedList.splice(actIndex, 1);
        await firebaseDbRef.child('activities').set(updatedList);
        
        exitToLobby();
        showToast('活動已成功從 Firebase 移除', 'success');
      } catch (err) {
        showToast('刪除失敗', 'error');
      }
    } else {
      // LocalStorage Mode
      const idx = db.activities.findIndex(a => a.id === actId);
      if (idx !== -1) {
        db.activities.splice(idx, 1);
        saveLocalDb();
        exitToLobby();
        showToast('活動已自本機移除', 'success');
      }
    }
  });

  // Edit / Create manual forms setup
  document.getElementById('btn-edit-current').addEventListener('click', () => {
    const act = state.currentActivity;
    if (!act) return;
    
    document.getElementById('manual-modal-title').innerHTML = '<i class="fa-solid fa-gear"></i> 編輯活動設定';
    document.getElementById('edit-activity-id').value = act.id;
    document.getElementById('act-title').value = act.title;
    document.getElementById('act-subtitle').value = act.subtitle;
    document.getElementById('act-desc').value = act.description || '';
    document.getElementById('act-start-date').value = act.dateRange.start;
    document.getElementById('act-end-date').value = act.dateRange.end;
    document.getElementById('act-open-start').value = (act.openRange && act.openRange.start) ? act.openRange.start : '';
    document.getElementById('act-open-end').value = (act.openRange && act.openRange.end) ? act.openRange.end : '';
    document.getElementById('act-classes').value = (act.classes || []).join(', ');
    document.getElementById('act-capacity').value = act.capacity || 1;
    
    closeModal(adminPanel);
    openModal(manualModal);
  });

  document.getElementById('btn-create-manual').addEventListener('click', () => {
    document.getElementById('manual-modal-title').innerHTML = '<i class="fa-solid fa-file-invoice"></i> 手動建立填報活動';
    document.getElementById('edit-activity-id').value = '';
    document.getElementById('act-title').value = '';
    document.getElementById('act-subtitle').value = '';
    document.getElementById('act-desc').value = '';
    
    const today = new Date();
    const future = new Date();
    future.setDate(today.getDate() + 25);
    
    document.getElementById('act-start-date').value = formatDateIso(today);
    document.getElementById('act-end-date').value = formatDateIso(future);
    document.getElementById('act-open-start').value = '';
    document.getElementById('act-open-end').value = '';
    document.getElementById('act-classes').value = '501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516';
    document.getElementById('act-capacity').value = 1;
    
    closeModal(adminPanel);
    openModal(manualModal);
  });

  // Save manual activity form
  document.getElementById('manual-activity-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('edit-activity-id').value;
    const title = document.getElementById('act-title').value;
    const subtitle = document.getElementById('act-subtitle').value;
    const description = document.getElementById('act-desc').value;
    const start = document.getElementById('act-start-date').value;
    const end = document.getElementById('act-end-date').value;
    const openStart = document.getElementById('act-open-start').value;
    const openEnd = document.getElementById('act-open-end').value;
    const classesStr = document.getElementById('act-classes').value;
    const capacity = parseInt(document.getElementById('act-capacity').value) || 1;
    
    const classes = classesStr.split(',').map(s => s.trim()).filter(Boolean);
    const sessions = [
      { id: "1", name: "1", time: "08:45~09:25" },
      { id: "2", name: "2", time: "09:35~10:15" },
      { id: "3", name: "3", time: "10:30~11:10" },
      { id: "4", name: "4", time: "11:20~12:00" },
      { id: "lunch", name: "午休", time: "12:40~13:10", alwaysBlocked: true },
      { id: "5", name: "5", time: "13:20~14:00" },
      { id: "6", name: "6", time: "14:10~14:50" }
    ];

    const actData = {
      id: id || 'act_' + Date.now(),
      title,
      subtitle,
      description,
      classes,
      dateRange: { start, end },
      openRange: { start: openStart, end: openEnd },
      capacity,
      sessions,
      slots: state.tempAiSlots || {}
    };

    if (isFirebaseMode) {
      try {
        const listCopy = [...state.activities];
        const index = listCopy.findIndex(a => a.id === actData.id);
        
        if (index >= 0) {
          actData.slots = Object.assign(listCopy[index].slots || {}, state.tempAiSlots || {}); // preserve bookings and merge AI slots
          listCopy[index] = actData;
        } else {
          listCopy.push(actData);
        }

        await firebaseDbRef.child('activities').set(listCopy);
        state.tempAiSlots = null; // clear
        closeModal(manualModal);
        showToast('活動已儲存至 Firebase', 'success');
        enterActivity(actData.id);
      } catch (err) {
        showToast('Firebase 儲存失敗: ' + err.message, 'error');
      }
    } else {
      // LocalStorage Mode
      const index = db.activities.findIndex(a => a.id === actData.id);
      if (index >= 0) {
        actData.slots = Object.assign(db.activities[index].slots || {}, state.tempAiSlots || {});
        db.activities[index] = actData;
      } else {
        db.activities.push(actData);
      }
      saveLocalDb();
      state.tempAiSlots = null; // clear
      closeModal(manualModal);
      showToast('活動已儲存至本機', 'success');
      enterActivity(actData.id);
    }
  });

  // Gemini API Key Modal Elements
  const geminiKeyModal = document.getElementById('gemini-key-modal');
  
  // Set Gemini Key button
  document.getElementById('btn-set-gemini-key').addEventListener('click', () => {
    const savedKey = localStorage.getItem('gemini_api_key') || '';
    document.getElementById('gemini-api-key').value = savedKey;
    openModal(geminiKeyModal);
  });
  
  // Close Gemini Key modal
  document.getElementById('btn-gemini-key-close').addEventListener('click', () => closeModal(geminiKeyModal));
  document.getElementById('btn-gemini-key-cancel').addEventListener('click', () => closeModal(geminiKeyModal));
  
  // Save Gemini Key
  document.getElementById('gemini-key-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const key = document.getElementById('gemini-api-key').value.trim();
    if (key) {
      localStorage.setItem('gemini_api_key', key);
      showToast('Gemini API 金鑰設定成功！', 'success');
      closeModal(geminiKeyModal);
    }
  });

  // AI File Upload Trigger
  const fileInput = document.getElementById('ai-file-input');
  document.getElementById('btn-ai-upload-trigger').addEventListener('click', () => {
    const key = localStorage.getItem('gemini_api_key');
    if (!key) {
      showToast('請先點選左側「設定 API 金鑰」！', 'error');
      openModal(geminiKeyModal);
      return;
    }
    fileInput.click();
  });

  // File selected handler
  fileInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const apiKey = localStorage.getItem('gemini_api_key');
    if (!apiKey) {
      showToast('請先設定 Gemini API 金鑰！', 'error');
      return;
    }

    // Show loading
    const loadingStatus = document.getElementById('ai-loading-status');
    const loadingText = document.getElementById('ai-loading-text');
    loadingStatus.style.display = 'flex';
    loadingText.textContent = '讀取課表圖片並轉換中...';

    // Convert file to base64
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64Url = reader.result;
        const base64Data = base64Url.split(',')[1];
        const mimeType = file.type;

        loadingText.textContent = '🤖 AI 正在辨識您的紙本課表（標題、日期、停用時段...），請稍候...';

        const prompt = `請分析這張學校班級時段登記調查表的照片，並將其解析為 JSON 格式。請注意：
1. 日期區間：請推算年份為 2025 年，並列出開始日期與結束日期，格式為 YYYY-MM-DD。
2. 停用與屏蔽時段：列出照片中被劃掉、屏蔽或有特別標註停用的時段（例如「專輔校外研習」、「講座」），格式為 'YYYY-MM-DD_節次'（節次為 1, 2, 3, 4, 5, 6 之一，如果是午休則為 lunch）。
3. 班級列表：列出此年級所有可登記的班級名單（例如 ["501", "502", ..., "516"]）。
請返回符合以下範例格式的 JSON，不要包含任何 markdown 標記（如 \`\`\`json）：
{
  "title": "時段登記活動標題",
  "subtitle": "副標題或主題說明",
  "description": "給老師看的引言或說明內容",
  "classes": ["501", "502", "503"],
  "dateRange": {"start": "YYYY-MM-DD", "end": "YYYY-MM-DD"},
  "slots": {
    "YYYY-MM-DD_節次": {"status": "blocked", "note": "停用原因"}
  }
}`;

        const payload = {
          contents: [{
            parts: [
              { text: prompt },
              {
                inlineData: {
                  mimeType: mimeType,
                  data: base64Data
                }
              }
            ]
          }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        };

        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error?.message || 'Gemini API 回傳錯誤');
        }

        const resData = await response.json();
        const responseText = resData.candidates[0].content.parts[0].text;
        const resJson = JSON.parse(responseText.trim());

        // Fill form fields
        document.getElementById('act-title').value = resJson.title || '';
        document.getElementById('act-subtitle').value = resJson.subtitle || '';
        document.getElementById('act-desc').value = resJson.description || '';
        if (resJson.dateRange) {
          if (resJson.dateRange.start) document.getElementById('act-start-date').value = resJson.dateRange.start;
          if (resJson.dateRange.end) document.getElementById('act-end-date').value = resJson.dateRange.end;
        }
        if (resJson.classes) {
          document.getElementById('act-classes').value = resJson.classes.join(', ');
        }

        // Store blocked slots to state
        state.tempAiSlots = resJson.slots || {};

        showToast('🤖 AI 智慧解析成功！已自動帶入表單欄位，請檢查後點選「儲存」。', 'success');
      } catch (err) {
        console.error(err);
        showToast('AI 辨識失敗: ' + err.message, 'error');
      } finally {
        loadingStatus.style.display = 'none';
        fileInput.value = ''; // clear input
      }
    };

    reader.onerror = () => {
      showToast('檔案讀取失敗', 'error');
      loadingStatus.style.display = 'none';
    };

    reader.readAsDataURL(file);
  });
}

function openModal(modal) {
  modal.classList.add('active');
}
function closeModal(modal) {
  modal.classList.remove('active');
}
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === 'error') icon = '<i class="fa-solid fa-circle-exclamation"></i>';
  if (type === 'info') icon = '<i class="fa-solid fa-circle-info"></i>';
  
  toast.innerHTML = `${icon} <span>${message}</span>`;
  toastContainer.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideIn 0.3s reverse forwards';
    toast.addEventListener('animationend', () => {
      toast.remove();
    });
  }, 4000);
}

function updateAdminUI() {
  const loginBtn = document.getElementById('btn-admin-login');
  const createBtn = document.getElementById('btn-admin-create-act');
  const logoutBtn = document.getElementById('btn-admin-logout');
  
  if (state.isAdmin) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (createBtn) createBtn.style.display = 'inline-flex';
    if (logoutBtn) logoutBtn.style.display = 'inline-flex';
    document.body.classList.add('admin-mode');
  } else {
    if (loginBtn) loginBtn.style.display = 'inline-flex';
    if (createBtn) createBtn.style.display = 'none';
    if (logoutBtn) logoutBtn.style.display = 'none';
    document.body.classList.remove('admin-mode');
  }
}
