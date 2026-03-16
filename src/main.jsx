import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```
กด **Commit changes**

---

**2. Upload `src/App.jsx`**

กด **Add file → Upload files** แล้วลาก `App.jsx` (ไฟล์ต้นฉบับ) ขึ้นไป — แต่ต้องอยู่ใน path `src/` ก่อน

วิธีง่ายสุดคือ: กด **Add file → Create new file** พิมพ์ชื่อ `src/App.jsx` แล้ว **copy โค้ดทั้งหมดจากไฟล์ต้นฉบับวางลงไป** แล้ว Commit

---

**3. สร้างไฟล์ `.github/workflows/deploy.yml`**

กด **Add file → Create new file** พิมพ์ชื่อ:
```
.github/workflows/deploy.yml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm install
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
