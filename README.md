# Dokumentasi Sistem Manajemen Gudang CLI

Sistem Manajemen Gudang CLI adalah aplikasi berbasis Command Line Interface (CLI) yang dibangun menggunakan **Node.js (JavaScript)**. Aplikasi ini dirancang untuk mempermudah petugas gudang dalam pencatatan barang masuk, pengelolaan status pemrosesan barang, pencarian barang, hingga pengaturan posisi rak penyimpanan dan tingkat prioritas penanganan.

---

## 📋 Penjelasan Detail Sistem & Arsitektur

Aplikasi ini mengintegrasikan berbagai konsep dasar JavaScript untuk mengelola data inventaris gudang secara interaktif melalui terminal.

### 1. Struktur Data Barang (Object & Array)
Setiap data barang disimpan dalam bentuk **Object** dengan struktur atribut sebagai berikut:
- `id` (Number): Identitas unik untuk setiap barang yang digenerate otomatis secara berurutan.
- `namaBarang` (String): Nama atau deskripsi item yang masuk ke gudang.
- `diproses` (Boolean): Status pemrosesan barang (`false` berarti belum diproses, `true` berarti sudah selesai diproses).
- `prioritas` (String): Tingkat penanganan barang (`tinggi`, `sedang`, atau `rendah`).
- `lokasiRak` (String): Kode titik lokasi penyimpanan barang di dalam gudang (contoh: `A-12`, `B-05`).

Seluruh objek barang ditampung di dalam sebuah **Array** bernama `daftarBarang`.

### 2. Pengelolaan State (Object Method & Keywords `this`)
Pengelolaan data barang dipusatkan di dalam objek `gudangManager`. Objek ini memiliki beberapa **Object Method** yang memanfaatkan kata kunci `this` untuk mengakses dan memanipulasi array `daftarBarang`:
- `tambah()`: Menambahkan objek barang baru ke dalam array menggunakan method `.push()`.
- `tampilkan()`: Menampilkan daftar barang dengan filter (`semua`, `belum`, atau `selesai`).
- `prosesBarang()`: Mencari ID barang menggunakan `.find()` dan memperbarui properti `diproses` menjadi `true`.
- `hapus()`: Mencari indeks barang dengan `.findIndex()` dan menghapusnya menggunakan method `.splice()`.
- `cari()`: Menyaring barang menggunakan `.filter()` dan `.includes()` secara *case-insensitive*.
- `inspeksiBarang()`: Mengiterasi dan menampilkan seluruh properti barang menggunakan perulangan `for...in`.

---

## 🖥️ Alur Kerja & Fitur Aplikasi

Saat aplikasi dijalankan, menu utama akan ditampilkan secara berulang menggunakan perulangan `while` hingga pengguna memilih opsi keluar.

```text
====================================
      SISTEM MANAJEMEN GUDANG
====================================
1. Tambah Barang
2. Lihat Semua Barang
3. Selesaikan Proses Barang
4. Hapus Barang
5. Cari Barang
6. Lihat Barang Belum Diproses
7. Lihat Barang Sudah Diproses
8. Lihat Detail Properti Barang
9. Keluar
====================================
```

---

## 🚀 Cara Menjalankan Aplikasi

Berikut adalah panduan untuk mengunduh, menyiapkan, dan menjalankan aplikasi di komputer lokal Anda:

### 1. Prasyarat
Pastikan komputer Anda sudah terinstall:
- **Node.js** (versi 14.x atau lebih baru)
- **Git**

---

### 2. Panduan Instalasi & Jalankan Aplikasi

#### A. Opsi 1: Menjalankan Langsung di Lokal
1. Buka Terminal / Command Prompt / Git Bash.
2. Masuk ke direktori tempat folder project berada:
   ```bash
   cd path/to/gudang-app
   ```
3. Jalankan file utama aplikasi menggunakan perintah Node.js:
   ```bash
   node gudang.js
   ```

#### B. Opsi 2: Kloning dari Repositori Git
1. Clone repositori ke komputer lokal Anda:
   ```bash
   git clone https://github.com/username-anda/sistem-gudang.git
   ```
2. Masuk ke direktori folder project setelah clone selesai:
   ```bash
   cd sistem-gudang
   ```
3. Jalankan aplikasi:
   ```bash
   node gudang.js
   ```

---

## 🔄 Panduan Sinkronisasi Git (Upstream)

Jika project ini dikembangkan secara tim atau berasal dari repositori utama (*fork*), Anda perlu menyinkronkan pembaruan data dari sumber utama.

### Langkah 1: Menambahkan Remote Upstream
1. Periksa koneksi remote saat ini:
   ```bash
   git remote -v
   ```
2. Tambahkan URL repositori utama sebagai `upstream`:
   ```bash
   git remote add upstream https://github.com/repositori-utama/sistem-gudang.git
   ```
3. Verifikasi kembali remote yang terhubung:
   ```bash
   git remote -v
   ```

### Langkah 2: Mengambil dan Menggabungkan Kode (Fetch & Merge)
1. Pindah ke branch utama lokal Anda (misalnya `main`):
   ```bash
   git checkout main
   ```
2. Ambil data terbaru dari remote upstream:
   ```bash
   git fetch upstream
   ```
3. Gabungkan (*merge*) perubahan dari branch `main` milik upstream ke branch lokal:
   ```bash
   git merge upstream/main
   ```
4. Jika terdapat konflik (*merge conflict*), perbaiki kode pada file terkait, lalu simpan dan commit:
   ```bash
   git add .
   git commit -m "Menyelesaikan konflik merge dari upstream"
   ```
5. Unggah kode hasil penggabungan terbaru ke repositori GitHub Anda (`origin`):
   ```bash
   git push origin main
   ```