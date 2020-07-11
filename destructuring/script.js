// Destructuring Array

// const watashi = ['Ahmad Junaedi', 20 , 'Sistem Informasi', 'Single'];
// const [nama, umur, jurusan, status] = watashi;
// skipping items
// const [nama, , , status] = watashi;

// swap items
// let a = 1;
// let b = 3;
// [a , b] = [b, a];
// console.log(a);

// function jumlahKali(a, b){
//     return [a + b, a * b];
// }

// const [jumlah, kali] =  jumlahKali(2,3);
// console.log(jumlah);
// console.log(kali);


// function kalkulasi(a, b){
//     return{
//         tambah: a+b,
//         kali: a*b,
//         kurang: a-b
//     }
// }

// const {tambah, kali, kurang} = kalkulasi(2,3);
// console.log(kali);


// Destructuring Function Arguments

const mhs1 = {
    nama: 'Ahmad Junaedi',
    umur: 33,
    email: 'ahmadjuanedi1412@gmail.com',
    nilai: {
        tugas: 80,
        uas: 75,
        uts: 80
    }
}

function cetakMhs({nama, umur,email, nilai: {tugas,uas,uts}}){
    return `Halo nama saya ${nama}, saya berumur ${umur} tahun, kalian bisa hubungi email saya ${email}. Berikut adalah nilai UAS saya ${uas}`;
}

console.log(cetakMhs(mhs1));