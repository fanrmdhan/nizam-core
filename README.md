# NizamCore — Sistem Informasi Akademik
(Prototype for Calon Staff COMPFEST 2026)

1. Deskripsi singkat proyek
2. Prasyarat (Node.js >= 18, npm >= 9)
3. Cara instalasi & menjalankan (npm install, npm run dev)
4. Tabel akun demo (email & password dosen + mahasiswa)
5. Cara build produksi (npm run build)
6. Struktur folder proyek
7. Tabel fitur per role (Dosen vs Mahasiswa)
8. Tech stack (React, React Router, Tailwind, Vite)
9. Panduan koneksi ke backend nyata

# NizamCore — Sistem Informasi Akademik

Frontend aplikasi akademik berbasis React Router + Tailwind CSS.

## Prasyarat
- Node.js >= 18.x
- npm >= 9.x

## Instalasi & Menjalankan
```bash
# 1. Clone repositori
git clone <repo-url>
cd nizamcore

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka browser di `http://localhost:5173`

## Akun Demo

| Role | Email | Password |
|------|-------|----------|
| Dosen | dosen@nizamcore.id | dosen123 |
| Mahasiswa | mahasiswa@nizamcore.id | mhs123 |

## Build Produksi
```bash
npm run build
npm run preview
```

## Struktur Proyek
```
src/
├── context/       # AuthContext (state login global)
├── components/    # ProtectedRoute, Sidebar, Layout, Modal, Skeleton
├── hooks/         # useMataKuliah (infinite scroll)
├── data/          # Mock data mata kuliah
└── pages/         # Login, Dashboard, MataKuliah, Unauthorized
