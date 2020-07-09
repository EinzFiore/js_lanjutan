// Function Expressions

// const tampilNama = function(nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Enjun'));



// Arrow Function

// const tampilNama = (nama) => {
//     return `halo, ${nama}`;
// }
// console.log(tampilNama('Enjun'));


// const salam = (nama,waktu) => {
//     return `Selamat ${waktu}, ${nama}`;
// }
// console.log(salam('Enjun','Pagi'));

// // Implisit return
// const hello = nama => `Ohayou ${nama}`;
// console.log(hello('Enjun'));

// // tanpa parameter
// const say = () => `Selamat Pagi Enjun ~!`;
// console.log(say());

let mahasiswa = ['Ahmad Junaedi','Enjun','Fiore','Klotze'];

// let jumChar = mahasiswa.map(function(nama) {
//     return nama.length;
// })

// console.log(jumChar);

// versi arrow
// let jumChar = mahasiswa.map(nama => nama.length);
// console.log(jumChar);

// mengembalikan dalam bentuk objek
let jumChar = mahasiswa.map(nama => ({nama, jmlHrf: nama.length})); //jika nilai object sama dengan nama property nya, cukup masukan nilai property nya saja.
console.table(jumChar);

