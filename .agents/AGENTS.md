# 講義版本控制規則 (Git Version Control Rules)

1. 當使用者說「開始工作」時，請先檢查目前專案是否已建立 Git 版本控制。
   如果尚未建立，請自動在專案根目錄初始化 Git，建立名為 output 的資料夾，並建立適合本專案的 .gitignore 檔案。
   之後產生的報告、文件、圖片、資料表與其他成果，優先放入 output 資料夾中。Git 版本控制必須涵蓋 output 資料夾。
   .gitignore 至少應排除：個人密碼、API Key、Token；.env 與機密設定檔；暫存檔與快取檔；Python 虛擬環境；Node.js 依賴套件；系統產生的隱藏檔；不需要納入版本控制的大型暫存資料。
   請保留原始檔案，不要直接覆寫或刪除原始資料。涉及刪除、移動、覆寫或執行外部指令時，請先說明影響並等待使用者確認。

2. 當使用者說「結案」、「收工」、「專案結束」、「開發完成」或「存檔並更新說明」時自動觸發。
   執行動作：
   - 檢查 Git 狀態：檢查當前專案是否有 Git 倉庫及未提交的變更（若無則詢問是否 git init）。
   - 自動建立／更新 README.md：在「開發歷史／Changelog」自動追加當天工作成果與日期記錄。
   - 自動 Git Commit：自動執行 git add . 與 git commit -m "docs: 專案結束存檔，更新 README 說明文件"。
   - 回報存檔摘要：向使用者報告 Commit 狀態與更新內容。


## 文件處理工具 (Core Document Processing Tools)

專案中內建了 doc_tool.py，它集成了講義推薦的三個核心文件處理工具：
1. **MarkItDown**：用於將 Word (.docx), Excel (.xlsx), PowerPoint (.pptx), PDF 轉換成 Markdown 文字。
   - 執行指令：`python3 doc_tool.py md [輸入檔案] [輸出檔案]`
2. **PyMuPDF**：用於精準提取 PDF 內部的文字、頁面資訊。
   - 執行指令：`python3 doc_tool.py pdf [輸入檔案] [輸出檔案]`
3. **PDF OCR (Tesseract)**：用於掃描型 PDF 或圖片的文字辨識（需要本機安裝 tesseract）。
   - 執行指令：`python3 doc_tool.py ocr [輸入檔案] [輸出檔案]`

當使用者要求讀取或整理 Word/Excel/PPT/PDF 檔案，或是要進行 OCR 辨識時，請優先調用該專案目錄下的 doc_tool.py 進行處理。
