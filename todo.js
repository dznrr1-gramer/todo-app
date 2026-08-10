const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const gudangManager = {
  daftarBarang: [],
  nextId: 1,

  tambah(namaBarang, prioritas = 'sedang', lokasiRak = '-') {
    const barangBaru = {
      id: this.nextId++,
      namaBarang: namaBarang,
      diproses: false,
      prioritas: prioritas.toLowerCase(),
      lokasiRak: lokasiRak
    };
    this.daftarBarang.push(barangBaru);
    console.log('\n✅ Barang berhasil ditambahkan ke gudang!');
  },

  tampilkan(filter = 'semua') {
    let listBarang = this.daftarBarang;

    if (filter === 'belum') {
      listBarang = this.daftarBarang.filter((b) => !b.diproses);
    } else if (filter === 'selesai') {
      listBarang = this.daftarBarang.filter((b) => b.diproses);
    }

    console.log('\n========== DAFTAR BARANG GUDANG ==========');
    if (listBarang.length === 0) {
      console.log(' (Tidak ada data barang) ');
    } else {
      for (const item of listBarang) {
        const status = item.diproses ? '[Sudah Diproses]' : '[Belum Diproses]';
        console.log(
          item.id + '. ' + item.namaBarang + ' ' + status + ' | Prioritas: ' + item.prioritas + ' | Lokasi Rak: ' + item.lokasiRak
        );
      }
    }
    console.log('===========================================\n');
  },

  prosesBarang(id) {
    const barang = this.daftarBarang.find((b) => b.id === Number(id));
    if (barang) {
      barang.diproses = true;
      console.log('\n✅ Barang ID ' + id + ' berhasil ditandai selesai diproses!');
    } else {
      console.log('\n❌ Barang dengan ID ' + id + ' tidak ditemukan.');
    }
  },

  hapus(id) {
    const index = this.daftarBarang.findIndex((b) => b.id === Number(id));
    if (index !== -1) {
      this.daftarBarang.splice(index, 1);
      console.log('\n✅ Barang ID ' + id + ' berhasil dihapus dari gudang!');
    } else {
      console.log('\n❌ Barang dengan ID ' + id + ' tidak ditemukan.');
    }
  },

  cari(kataKunci) {
    const query = kataKunci.toLowerCase();
    const hasil = this.daftarBarang.filter((b) =>
      b.namaBarang.toLowerCase().includes(query)
    );

    console.log('\n========== HASIL PENCARIAN BARANG ==========');
    if (hasil.length === 0) {
      console.log('Tidak ditemukan barang yang cocok.');
    } else {
      for (const item of hasil) {
        const status = item.diproses ? '[Sudah Diproses]' : '[Belum Diproses]';
        console.log(item.id + '. ' + item.namaBarang + ' ' + status);
      }
    }
    console.log('============================================\n');
  },

  inspeksiBarang(id) {
    const barang = this.daftarBarang.find((b) => b.id === Number(id));
    if (barang) {
      console.log('\n--- Detail Properti Barang ID ' + id + ' ---');
      for (const key in barang) {
        console.log(key + ': ' + barang[key]);
      }
      console.log('-------------------------------------\n');
    } else {
      console.log('\n❌ Barang dengan ID ' + id + ' tidak ditemukan.');
    }
  }
};

function tampilkanMenu() {
  console.log(
    '\n====================================\n' +
    '     SISTEM MANAJEMEN GUDANG\n' +
    '====================================\n' +
    '1. Tambah Barang\n' +
    '2. Lihat Semua Barang\n' +
    '3. Selesaikan Proses Barang\n' +
    '4. Hapus Barang\n' +
    '5. Cari Barang\n' +
    '6. Lihat Barang Belum Diproses\n' +
    '7. Lihat Barang Sudah Diproses\n' +
    '8. Lihat Detail Properti Barang\n' +
    '9. Keluar\n' +
    '===================================='
  );
}

async function tambahBarang() {
  const namaBarang = await askQuestion('Masukkan Nama Barang: ');
  if (!namaBarang.trim()) {
    console.log('❌ Nama barang tidak boleh kosong!');
    return;
  }
  const prioritas = await askQuestion('Masukkan Prioritas Penanganan (tinggi/sedang/rendah) [default: sedang]: ');
  const lokasiRak = await askQuestion('Masukkan Lokasi Rak (contoh: A-12) [default: -]: ');

  gudangManager.tambah(
    namaBarang,
    prioritas || 'sedang',
    lokasiRak || '-'
  );
}

function lihatBarang(filter = 'semua') {
  gudangManager.tampilkan(filter);
}

async function selesaikanProsesBarang() {
  const id = await askQuestion('Masukkan ID Barang: ');
  gudangManager.prosesBarang(id);
}

async function hapusBarang() {
  const id = await askQuestion('Masukkan ID Barang: ');
  gudangManager.hapus(id);
}

async function cariBarang() {
  const kataKunci = await askQuestion('Masukkan kata kunci nama barang: ');
  gudangManager.cari(kataKunci);
}

async function inspeksiBarang() {
  const id = await askQuestion('Masukkan ID Barang yang ingin diinspeksi: ');
  gudangManager.inspeksiBarang(id);
}

async function main() {
  let berjalan = true;

  while (berjalan) {
    tampilkanMenu();
    const pilihan = await askQuestion('Pilih menu: ');

    switch (pilihan.trim()) {
      case '1':
        await tambahBarang();
        break;
      case '2':
        lihatBarang('semua');
        break;
      case '3':
        await selesaikanProsesBarang();
        break;
      case '4':
        await hapusBarang();
        break;
      case '5':
        await cariBarang();
        break;
      case '6':
        lihatBarang('belum');
        break;
      case '7':
        lihatBarang('selesai');
        break;
      case '8':
        await inspeksiBarang();
        break;
      case '9':
        console.log('\nTerima kasih telah menggunakan Sistem Manajemen Gudang! 👋');
        berjalan = false;
        rl.close();
        break;
      default:
        console.log('\n❌ Pilihan tidak valid! Masukkan angka 1 - 9.');
        break;
    }
  }
}

main();