// Object Literal

// let mahasiswa = {
//     nama: 'Enjun',
//     nim: 12183766,
//     nilai: 5,
//     ujian: function(hasil){
//         this.nilai = this.nilai + hasil;
//         console.log(`Halo ${this.nama}, nilai ditambahkan`);
//     }
// }




// function declaration

// function Mahasiswa (nama,nilai) {
//     // buat objek kosong
//     let mahasiswa = {};
//     // buat property menerima nilai argumen ke parameter
//     mahasiswa.nama = nama;
//     mahasiswa.nilai = nilai;

//     mahasiswa.ujian = function(hasil){
//         this.nilai += hasil;
//         console.log(`Halo ${this.nama}, nilai berhasil ditambahkan`);
//     }

//     return mahasiswa;
// }

// let enjun = Mahasiswa('Enjun',80);

// function Aku(nama,umur,status,uang){
//     let aku = {};
//     aku.nama = nama;
//     aku.umur = umur;
//     aku.status = status;
//     aku.uang = uang;

//     aku.kerja = function(gaji){
//         this.uang += gaji;
//         console.log(`Terimakasih ${this.nama}, gaji telah ditambahkan`);
//     }

//     aku.belanja = function(uang){
//         this.uang -= uang;
//         console.log(`Terimakasih ${this.nama}, uang anda berkurang`);
//     }

//     return aku;
// }

// let fiore = Aku('Enjun',18,'Single',3000);
// let klotze = Aku('klotze',20,'Single',5000);



// Constructor Function

// function watashi(nama,uang){
//     this.nama = nama;
//     this.uang = uang;

//     this.kerja = function(gaji){
//         this.uang += gaji;
//         console.log(`terimakasih ${this.nama}`);
//     }

//     this.belanja = function(uang){
//         this.uang -= uang;
//         console.log(`uang telah berkurang`);
//     }
// }

// let enjun = new watashi('Enjun',5000);



// Object.create

// const methodWatashi = {
//     kerja: function(gaji){
//         this.uang += gaji;
//         console.log(`gaji berhasil ditambahkan`);
//     },

//     shopping: function(harga){
//         this.uang -= harga;
//         console.log(`uang telah dikurangi`);
//     },

//     lembur: function(gaji){
//         this.uang += gaji*2;
//         console.log(`gaji telah ditambah lembur`);
//     }
// }

// function Aku (nama,uang) {
//     let aku = Object.create(methodWatashi);

//     aku.nama = nama;
//     aku.uang = uang;

//     return aku;
// }

// let Enjun = Aku('Enjun',30000);



// Prototype

// function watashi(nama,nilai,uang){
//     this.nama = nama;
//     this.nilai = nilai;
//     this.uang = uang;
// }

// watashi.prototype.ujian = function (nilai){
//     this.nilai += nilai;
//     return `Ujian selesai, nilai ditambahkan`;
// }

// watashi.prototype.kerja = function (gaji){
//     this.uang += gaji;
//     return 'Gaji telah ditambahkan';
// }

// watashi.prototype.belanja = function (harga){
//     if(this.uang < harga){
//         return 'Uang tidak cukup';
//     } else {
//     this.uang -= harga;
//     return 'Uang telah dipotong'; }
// }

// let enjun = new watashi('Enjun',60,5000);


// Versi Class

class Watashi {
    constructor(nama,uang){
        this.nama = nama;
        this.uang = uang;
    }

    kerja(gaji){
        this.uang += gaji;
        return `Hai ${this.nama}, gaji telah ditambahkan`;
    }
    
    lembur(gaji){
        this.uang += gaji*2;
        return `Hai ${this.nama}, gaji telah ditambahkan`;
    }

}

let klotze  = new Watashi('Enjun',8000);

