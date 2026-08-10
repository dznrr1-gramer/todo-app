const prompt = require("prompt-sync")();

// Object Manager untuk mengelola Todo (Memenuhi kriteria Object Method & 'this')
const todoManager = {
    todos: [],

    tambahTodo() {
        console.clear();
        const judul = prompt("Masukkan Todo baru: ");

        if (judul.trim() === "") {
            console.log("❌ TODO tidak boleh kosong.");
        } else {
            // Data dalam bentuk Object sesuai ketentuan
            const todoBaru = {
                id: this.nextId++,
                judul: judul,
                selesai: false
            };
            this.todos.push(todoBaru);
            console.log("✅ Todo berhasil ditambahkan!");
        }
    },

    lihatTodo() {
        console.clear();
        console.log("========== TODO ==========");

        if (this.todos.length === 0) {
            console.log("📂 TODO masih kosong.");
        } else {
            // Wajib menggunakan loop for...of
            for (const todo of this.todos) {
                const status = todo.selesai ? "[Selesai]" : "[Belum selesai]";
                console.log(`${todo.id}. ${todo.judul} ${status}`);
            }
        }
        console.log("==========================");
    },

    selesaikanTodo() {
        console.clear();
        if (this.todos.length === 0) {
            console.log("📂 TODO masih kosong.");
            return;
        }

        this.lihatTodo();
        const idInput = Number(prompt("\nMasukkan ID Todo yang selesai: "));

        let ditemukan = false;
        // Contoh penggunaan for...of untuk mencari ID
        for (const todo of this.todos) {
            if (todo.id === idInput) {
                todo.selesai = true;
                ditemukan = true;
                console.log(`✅ Todo "${todo.judul}" berhasil diselesaikan!`);

                // Menggunakan for...in untuk memenuhi kriteria iterasi properti object
                console.log("\nDetail Todo (diperbarui):");
                for (let key in todo) {
                    console.log(`  ${key}: ${todo[key]}`);
                }
                break;
            }
        }

        if (!ditemukan) {
            console.log("❌ ID Todo tidak ditemukan.");
        }
    },

    hapusTodo() {
        console.clear();
        if (this.todos.length === 0) {
            console.log("📂 TODO masih kosong.");
            return;
        }

        this.lihatTodo();
        const idInput = Number(prompt("\nMasukkan ID Todo yang ingin dihapus: "));

        const index = this.todos.findIndex(todo => todo.id === idInput);

        if (index !== -1) {
            const todoHapus = this.todos.splice(index, 1);
            console.log(`✅ Todo "${todoHapus[0].judul}" berhasil dihapus!`);
        } else {
            console.log("❌ ID Todo tidak ditemukan.");
        }
    },

    cariTodo() {
        console.clear();
        if (this.todos.length === 0) {
            console.log("📂 TODO masih kosong.");
            return;
        }

        const kataKunci = prompt("Masukkan kata kunci: ").toLowerCase();
        console.log("\nHasil pencarian:");

        let ditemukan = false;
        for (const todo of this.todos) {
            if (todo.judul.toLowerCase().includes(kataKunci)) {
                const status = todo.selesai ? "[Selesai]" : "[Belum selesai]";
                console.log(`${todo.id}. ${todo.judul} ${status}`);
                ditemukan = true;
            }
        }

        if (!ditemukan) {
            console.log("❌ Todo tidak ditemukan.");
        }
    }
};

// Function menampilkan menu utama
function tampilkanMenu() {
    console.clear();
    console.log("==============================");
    console.log("        TODO LIST APP         ");
    console.log("==============================");
    console.log("1. Tambah Todo");
    console.log("2. Lihat Todo");
    console.log("3. Selesaikan Todo");
    console.log("4. Hapus Todo");
    console.log("5. Cari Todo");
    console.log("6. Keluar");
}

// Function Utama Alur Program
function main() {
    let pilihan;

    do {
        tampilkanMenu();
        pilihan = prompt("\nPilih menu (1-6): ");

        switch (pilihan) {
            case "1":
                todoManager.tambahTodo();
                prompt("\nTekan Enter untuk kembali...");
                break;
            case "2":
                todoManager.lihatTodo();
                prompt("\nTekan Enter untuk kembali...");
                break;
            case "3":
                todoManager.selesaikanTodo();
                prompt("\nTekan Enter untuk kembali...");
                break;
            case "4":
                todoManager.hapusTodo();
                prompt("\nTekan Enter untuk kembali...");
                break;
            case "5":
                todoManager.cariTodo();
                prompt("\nTekan Enter untuk kembali...");
                break;
            case "6":
                console.clear();
                console.log("👋 Terima kasih telah menggunakan Todo List!");
                break;
            default:
                console.log("❌ Menu tidak valid.");
                prompt("\nTekan Enter untuk kembali...");
        }

    } while (pilihan !== "6");
}

// Jalankan program
main();