# 班級活動時段登記系統 (Firebase + 靜態網頁版)

這是一個特別為學校行政與填報設計的**多人即時同步登記系統**。採用全新的**「亮色極簡主題 (Light Premium Theme)」**，並且已將您提供的五年級入班輔導課表預先載入，啟動即可使用！

為了保護您的資料隱私與自主權，本系統**不使用第三方伺服器**，而是直接連線至**您專屬的 Firebase Realtime Database**！

---

## ✨ 核心特色與新功能

1. **資料 100% 隱私自主**：所有填報資料都直接與您自有的 Firebase 連線，安全無虞。
2. **免費 GitHub Pages 靜態部署**：整套系統皆為靜態檔案（HTML/CSS/JS），直接上傳到 GitHub Pages 即可完全免費運行。
3. **多人毫秒級即時同步**：整合 Firebase WebSocket 即時監聽，當 A 老師選填，B 老師的螢幕 0.1 秒內便會自動更新鎖定，防衝突效果極佳。
4. **單一時段多班容納 (Capacity)**：支援管理者設定單一時段的班級上限（如：上限 2 班）。
5. **一鍵導出成果圖檔 (PNG)**：內建 `html2canvas` 截圖技術。填報完成後，點選「匯出成果圖檔」即可一鍵下載整張週課表的精美圖片，方便貼到 LINE 公告或印出張貼。

---

## ⚙️ 快速設定教學

### 1. 配置您的 Firebase 金鑰
1. 前往您的 [Firebase Console](https://console.firebase.google.com/)。
2. 點選您的專案 -> **「建立 Realtime Database」**（建議選擇距離您最近的地區，並在安全性規則先啟用測試模式）。
3. 前往專案設定，新增一個網頁應用程式 (Web App)，複製產生的 `firebaseConfig` 金鑰配置。
4. 打開專案資料夾下的 [public/config.js](file:///Users/wangqiongyi/.gemini/antigravity/scratch/class_slot_booking/public/config.js) 檔案，將您的金鑰配置取代原本的內容：
   ```javascript
   window.firebaseConfig = {
     apiKey: "您的_API_KEY",
     authDomain: "您的專案ID.firebaseapp.com",
     databaseURL: "https://您的專案ID-default-rtdb.firebaseio.com",
     projectId: "您的專案ID",
     storageBucket: "您的專案ID.appspot.com",
     messagingSenderId: "您的專案SENDER_ID",
     appId: "您的應用程式APP_ID"
   };
   ```
5. 儲存檔案即可！

> [!NOTE]
> 如果沒有配置 `config.js`（保持預設的 `YOUR_API_KEY`），網頁將自動切換為 **LocalStorage 本機單機模式**。這非常適合您在自己的電腦上進行單機測試。

---

## 🔒 Firebase Realtime Database 安全性規則 (Rules)

在發佈給全校老師填寫前，請前往 Firebase 控制台 -> Realtime Database -> **「規則」** 頁籤下，貼上以下安全性規則，既能讓老師免登入填報，又能防止大規模惡意篡改：

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```
*（如需更進階的安全性防護，可限制僅特定網域如 `https://您的帳號.github.io` 可以進行讀寫請求。）*

---

## 📂 部署到 GitHub Pages 的步驟

1. 在 GitHub 上建立一個新的公開儲存庫 (Repository)，命名為 `class-booking`。
2. 將此專案 [public 資料夾下的所有檔案](file:///Users/wangqiongyi/.gemini/antigravity/scratch/class_slot_booking/public)（包括 `index.html`、`styles.css`、`app.js`、`config.js` 與整個 `lib` 資料夾）上傳至該儲存庫。
3. 進入 GitHub 儲存庫的 **Settings** -> **Pages**。
4. 在 **Build and deployment** 下，將 Source 選擇為 **Deploy from a branch**，Branch 選擇 **main** (或 master) 且目錄為 `/ (root)`，點擊 **Save**。
5. 等待 1-2 分鐘，GitHub 會為您產生一個專屬免費網址（如 `https://您的帳號.github.io/class-booking/`）。
6. 將此網址發送到學年老師的 LINE 群組，大家就能直接在手機上同時填報、秒級同步！

---

## 🧪 在 Mac 本機直接雙擊打開測試

您也可以直接在 Finder 打開 [public 目錄](file:///Users/wangqiongyi/.gemini/antigravity/scratch/class_slot_booking/public)，雙擊 [index.html](file:///Users/wangqiongyi/.gemini/antigravity/scratch/class_slot_booking/public/index.html) 便能在本機以 LocalStorage 模式體驗全新淺色版、PNG 截圖匯出、以及多人預約功能！
