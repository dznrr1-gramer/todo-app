Dokumentasi Aplikasi Todo List CLI
Aplikasi Todo List CLI adalah aplikasi berbasis Command Line Interface (CLI) yang dibangun menggunakan Node.js (JavaScript). Aplikasi ini dirancang untuk membantu pengguna dalam mencatat, memantau, menyelesaikan, hingga mencari tugas harian secara interaktif melalui terminal.

📋 Penjelasan Detail Sistem & Arsitektur
Aplikasi ini mengintegrasikan berbagai konsep dasar JavaScript untuk mengelola data todo secara interaktif.

1. Struktur Data Todo (Object & Array)
Setiap data todo disimpan dalam bentuk Object dengan struktur atribut sebagai berikut:

id (Number): Identitas unik untuk setiap tugas yang digenerate otomatis menggunakan nextId.

judul (String): Deskripsi atau nama tugas yang diinput oleh pengguna.

selesai (Boolean): Status penyelesaian tugas (false berarti belum selesai, true berarti sudah selesai).

Seluruh objek tugas ditampung di dalam sebuah Array bernama todos.

2. Pengelolaan State (Object Method & Keywords this)
Pengelolaan data todo dipusatkan di dalam objek todoManager. Objek ini menggunakan Object Method dan memanfaatkan kata kunci this untuk mengelola array todos:

tambahTodo(): Meminta input pengguna, membuat objek todo baru, dan memasukkannya ke array menggunakan method .push().

lihatTodo(): Mengiterasi dan menampilkan seluruh daftar todo menggunakan perulangan for...of.

selesaikanTodo(): Mencari tugas berdasarkan ID via for...of, mengubah status selesai menjadi true, dan menampilkan rincian properti objek menggunakan for...in.

hapusTodo(): Mencari indeks tugas berdasarkan ID menggunakan .findIndex() dan menghapusnya menggunakan .splice().

cariTodo(): Menyaring daftar tugas berdasarkan kata kunci menggunakan .includes() dan .toLowerCase().

🖥️ Alur Kerja & Fitur Aplikasi
Aplikasi berjalan dalam perulangan do...while yang menampilkan menu interaktif menggunakan struktur kontrol switch-case hingga pengguna memilih opsi keluar.

Plaintext
==============================
        TODO LIST APP         
==============================
1. Tambah Todo
2. Lihat Todo
3. Selesaikan Todo
4. Hapus Todo
5. Cari Todo
6. Keluar
==============================
🚀 Cara Menjalankan Aplikasi
Berikut adalah panduan untuk menyiapkan dan menjalankan aplikasi di komputer lokal Anda:

1. Prasyarat
Pastikan komputer Anda sudah terinstall:

Node.js (versi 14.x atau lebih baru)

npm (Node Package Manager)

Git

2. Panduan Instalasi & Jalankan Aplikasi
Buka Terminal / Command Prompt / Git Bash.

Masuk ke direktori folder project:

Bash
cd path/to/todo-app
Install package prompt-sync yang dibutuhkan aplikasi:

Bash
npm install prompt-sync
Jalankan aplikasi menggunakan perintah Node.js:

Bash
node index.js
(Sesuaikan index.js dengan nama file JavaScript Anda, misal app.js atau todo.js)

🔄 Panduan Sinkronisasi Git (Upstream)
Jika project ini dikembangkan secara tim atau merupakan hasil fork dari repositori utama, ikuti langkah berikut untuk menyinkronkan pembaruan:

Langkah 1: Menambahkan Remote Upstream
Periksa koneksi remote saat ini:

Bash
git remote -v
Tambahkan URL repositori utama sebagai upstream:

Bash
git remote add upstream https://github.com/repositori-utama/todo-app.git
Verifikasi kembali remote yang terhubung:

Bash
git remote -v
Langkah 2: Mengambil dan Menggabungkan Kode (Fetch & Merge)
Pindah ke branch utama lokal Anda (misalnya main):

Bash
git checkout main
Ambil data terbaru dari remote upstream:

Bash
git fetch upstream
Gabungkan (merge) perubahan dari branch main milik upstream:

Bash
git merge upstream/main
Jika terjadi merge conflict, perbaiki file terkait, lalu simpan dan commit:

Bash
git add .
git commit -m "Menyelesaikan konflik merge dari upstream"
Unggah kode terbaru ke repositori personal Anda (origin):

Bash
git push origin main