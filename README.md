# 🎓 Joki Laporan - Modern Landing Page

Landing page modern, elegan, dan responsif yang dirancang khusus untuk layanan "Joki Laporan" dengan target audiens Gen-Z dan Siswa SMK. Proyek ini berfokus pada kecepatan, animasi yang *smooth*, dan pengalaman pengguna (UX) yang sangat baik.

## 🚀 Teknologi yang Digunakan

Proyek ini dibangun menggunakan *tech stack* modern untuk pengembangan antarmuka web:

- **[React](https://react.dev/) (via [Vite](https://vitejs.dev/))**: Framework UI dan *build tool* super cepat.
- **[Tailwind CSS v3](https://tailwindcss.com/)**: Framework CSS *utility-first* untuk *styling* kustom yang cepat dan responsif (*mobile-first*).
- **[Framer Motion](https://www.framer.com/motion/)**: Library animasi untuk React, memberikan efek transisi (*scroll reveal*, *hover effects*) yang elegan.
- **[Lucide React](https://lucide.dev/)**: Kumpulan ikon modern, konsisten, dan ringan.

## 📂 Struktur Proyek

```text
📦 Web_Joki Laporan
 ┣ 📂 public          # Aset statis yang tidak diproses oleh bundler Vite (misal: favicon)
 ┣ 📂 src             # Direktori utama kode sumber (Source Code)
 ┃ ┣ 📜 App.jsx       # Komponen utama: Berisi seluruh struktur UI Landing Page (SPA)
 ┃ ┣ 📜 index.css     # CSS Global, import Tailwind CSS, dan komponen utility kustom
 ┃ ┗ 📜 main.jsx      # Titik masuk utama (Entry point) React untuk merender App
 ┣ 📜 index.html      # Template HTML utama
 ┣ 📜 package.json    # Daftar dependensi dan script (npm scripts) proyek
 ┣ 📜 tailwind.config.js # Konfigurasi kustom tema Tailwind (Warna, Font, Animasi)
 ┗ 📜 vite.config.js  # Konfigurasi spesifik untuk Vite bundler
```

## 🛠️ Cara Menjalankan di Lokal (Development)

Jika Anda ingin mengembangkan atau mengubah kode, ikuti langkah-langkah berikut:

1. **Pastikan [Node.js](https://nodejs.org/) sudah terinstal di komputer Anda.**
2. **Buka terminal** di direktori proyek ini.
3. **Instal dependensi** (hanya perlu dilakukan sekali atau saat ada dependensi baru):
   ```bash
   npm install
   ```
4. **Jalankan *Development Server*:**
   ```bash
   npm run dev
   ```
5. Buka tautan `http://localhost:5173` di *browser* Anda.

## 📦 Build untuk Production

Untuk menghasilkan *file* yang siap diunggah ke layanan *hosting* (seperti Vercel, Netlify, atau Hostinger):

```bash
npm run build
```
Vite akan membuat direktori baru bernama `dist/` yang berisi kumpulan *file* statis siap *deploy*.

---
*Dibuat untuk memberikan pengalaman terbaik bagi pengguna layanan Joki Laporan.*
