const prompt = require("prompt-sync")();

let TODO = [];
let pilihan;

do {
    console.clear();
    console.log("==============================");
    console.log("Selamat datang di TODO APP");
    console.log("==============================");
    console.log("1. Lihat TODO");
    console.log("2. Tambah TODO");
    console.log("3. Hapus TODO");
    console.log("4. Cari TODO");
    console.log("5. Keluar");

    pilihan = prompt("\nPilih menu (1-5): ");

    if (pilihan === "1") {
        console.clear();
        console.log("===== TODO =====");

        if (TODO.length === 0) {
            console.log("📂 TODO masih kosong.");
        } else {
            for (let i = 0; i < TODO.length; i++) {
                console.log(i + 1 + ". " + TODO[i]);
            }
        }

        prompt("\nTekan Enter untuk kembali...");
    }

    else if (pilihan === "2") {
        console.clear();

        const todo = prompt("Masukkan TODO baru: ");

        if (todo === "") {
            console.log("❌ TODO tidak boleh kosong.");
        } else {
            TODO.push(todo);
            console.log("✅" + todo + " berhasil ditambahkan ke daftar TODO!");
        }
        
        prompt("\nTekan Enter untuk kembali...");
    }

    else if (pilihan === "3") {
        console.clear();

        if (TODO.length === 0) {
            console.log("TODO masih kosong.");
        } else {

            console.log("===== TODO =====");

            for (let i = 0; i < TODO.length; i++) {
                console.log(`${i + 1}. ${TODO[i]}`);
            }

            let nomor = Number(prompt("\nMasukkan nomor TODO yang ingin dihapus: "));

            if (nomor >= 1 && nomor <= TODO.length) {

                let todoHapus = TODO[nomor - 1];

                TODO.splice(nomor - 1, 1);

                console.log("✅" + todoHapus + " berhasil dihapus dari daftar TODO!");

            } else {
                console.log("❌ Nomor tidak valid.");
            }
        }

        prompt("\nTekan Enter untuk kembali...");
    }

    else if (pilihan === "4") {
        console.clear();

        if (TODO.length === 0) {
            console.log("TODO masih kosong.");
        } else {

            const cari = prompt("Masukkan TODO yang ingin dicari: ");

            let ditemukan = false;

            for (let i = 0; i < TODO.length; i++) {

                if (TODO[i].toLowerCase().includes(cari.toLowerCase())) {

                    console.log("\n✅ TODO ditemukan!");
                    console.log(i + 1 + ". " + TODO[i]);

                    ditemukan = true;
                }
            }

            if (!ditemukan) {
                console.log("❌ TODO tidak ditemukan.");
            }
        }

        prompt("\nTekan Enter untuk kembali...");
    }

    else if (pilihan === "5") {
        console.clear();
        console.log("👋 Terima kasih telah menggunakan CLI Spotify.");
    }

    else {
        console.log("❌ Menu tidak tersedia.");
        prompt("\nTekan Enter untuk kembali...");
    }

} while (pilihan !== "5");