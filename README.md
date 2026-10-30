# 年年の小天地｜GitHub Pages 整合入口

這個版本採用「網站入口 + iframe 載入原網站」的方式整合，目的是完整保留兩個原網站各自的版面、字體、圖片、動畫、互動功能與 Google 試算表連線程式。

## 瀏覽器分頁小魚圖示

整合入口已加入原本 NIAN 網站的小魚 SVG 作為 Favicon。因為歌單與存鑽頁面是透過 iframe 顯示，瀏覽器分頁圖示由最外層整合入口控制；切換兩個功能時，分頁會持續顯示小魚圖示。

## 兩個原網站

- 年年の歌單：<https://lionliontomato.github.io/NIAN/>
- 年年の存鑽存歌：<https://lionliontomato.github.io/nm/>

## 重要：資料來源完全分開

- 歌單仍由原本 NIAN 網站讀取原本的 Google 試算表。
- 存鑽存歌仍由原本 nm 網站讀取另一份 Google 試算表。
- 不會合併、搬移或修改任何試算表。
- 原網站既有的資料更新頻率與讀取程式都不變。
- 這個整合入口不保存任何試算表資料，也不需要 Google API 金鑰。

## 上傳到 GitHub Pages

1. 將 ZIP 解壓縮。
2. 在 GitHub 建立一個新的 Public Repository，例如 `nian-home`。
3. 將解壓縮後的 `index.html`、`style.css`、`app.js`、`README.md`、`.nojekyll` 全部上傳到 Repository 根目錄。
4. 開啟 Repository 的 **Settings → Pages**。
5. 在 **Build and deployment** 選擇 **Deploy from a branch**。
6. Branch 選 `main`，資料夾選 `/(root)`，按 **Save**。
7. 等待 GitHub Pages 部署完成後，開啟：`https://lionliontomato.github.io/nian-home/`（若 Repository 名稱不同，網址也要換成相同名稱）。

## 為什麼這次歌單版面會和原本完全一致？

歌單與存鑽頁面不是把兩套 CSS 混在同一個頁面，而是各自載入原本已發布的網站。每個 iframe 有獨立的 HTML、CSS、JavaScript 與資產路徑，因此不會互相覆蓋字體、背景、卡片樣式或按鈕設定。

## 注意事項

- 這個 ZIP 是整合入口，不是兩個原網站原始碼的複製備份。兩個原網站必須繼續維持在上述網址，整合入口才能顯示內容。
- 若日後原網站網址改變，請同步修改 `app.js` 中的兩個網址。
- 若瀏覽器或原網站未來新增禁止 iframe 嵌入的安全政策，可能無法在入口內顯示；此時可先使用右上角「在原網站開啟」連結。GitHub Pages 發布後，請用電腦與手機各測試一次。
