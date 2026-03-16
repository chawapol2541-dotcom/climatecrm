# Climate CRM — Wave BCG (v8.2)

ระบบ CRM สำหรับ Wave BCG สร้างด้วย React + Vite

---

## 🚀 วิธี Deploy ขึ้น GitHub Pages

### ขั้นตอนที่ 1 — สร้าง GitHub Repository

1. เปิด [github.com](https://github.com) แล้ว login
2. กด **New repository**
3. ตั้งชื่อ repo เช่น `climate-crm`
4. เลือก **Private** (สำคัญ — เพื่อความปลอดภัย)
5. กด **Create repository**

### ขั้นตอนที่ 2 — แก้ชื่อ repo ใน vite.config.js

เปิดไฟล์ `vite.config.js` แล้วแก้ `base` ให้ตรงกับชื่อ repo:

```js
base: '/climate-crm/',   // ← เปลี่ยนเป็นชื่อ repo ของคุณ
```

### ขั้นตอนที่ 3 — Push โค้ดขึ้น GitHub

```bash
# ใน terminal เปิด folder นี้แล้วรัน:
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/climate-crm.git
git push -u origin main
```

> แทน `USERNAME` ด้วย GitHub username ของคุณ

### ขั้นตอนที่ 4 — เปิดใช้ GitHub Pages

1. ไปที่ repo → **Settings** → **Pages**
2. ใต้ **Build and deployment** → Source เลือก **GitHub Actions**
3. รอประมาณ 2-3 นาที GitHub จะ build ให้อัตโนมัติ
4. URL จะเป็น: `https://USERNAME.github.io/climate-crm/`

---

## 💻 รันใน Local (สำหรับทดสอบ)

```bash
npm install
npm run dev
```

เปิด browser ไปที่ `http://localhost:5173`

---

## ⚠️ หมายเหตุด้านความปลอดภัย

- Repo ควรตั้งเป็น **Private** เสมอ เพราะ source code มีข้อมูล users
- URL ของ GitHub Pages จะเข้าถึงได้เฉพาะคนที่มี link (ถ้า repo เป็น Private)
- แนะนำให้ย้าย authentication ไปไว้ฝั่ง backend ในอนาคต
