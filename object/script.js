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

function watashi(nama,uang){
    this.nama = nama;
    this.uang = uang;

    this.kerja = function(gaji){
        this.uang += gaji;
        console.log(`terimakasih ${this.nama}`);
    }

    this.belanja = function(uang){
        this.uang -= uang;
        console.log(`uang telah berkurang`);
    }
}

let enjun = new watashi('Enjun',5000);



// Object.create


