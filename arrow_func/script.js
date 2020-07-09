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

// let mahasiswa = ['Ahmad Junaedi','Enjun','Fiore','Klotze'];

// let jumChar = mahasiswa.map(function(nama) {
//     return nama.length;
// })

// console.log(jumChar);

// versi arrow
// let jumChar = mahasiswa.map(nama => nama.length);
// console.log(jumChar);

// mengembalikan dalam bentuk objek
// let jumChar = mahasiswa.map(nama => ({nama, jmlHrf: nama.length})); //jika nilai object sama dengan nama property nya, cukup masukan nilai property nya saja.
// console.table(jumChar);



// this pada arrow function

// const Watashi = function() {
//     this.nama = 'Ahmad Junaedi';
//     this.umur = 20;
//     this.status = 'Single';

//      this.introduce = function(){
//         console.log(`Halo nama saya ${this.nama}, umur ${this.umur}, saya ${this.status} hehe`);
//     }
// }

// const Enjun = new Watashi();


// const Watashi = function () {
//     this.nama = 'Enjun';
//     this.umur = 20;
//     this.sayHello = function () {
//         console.log(`Halo nama saya ${this.nama}, saya berumur ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         console.log(this.umur++);
//     },500);
// }

// const Enjun = new Watashi();







// implementasi arrow function
const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains(satu)){
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    },600);
    // if(this.classList.contains('size')){
    //     this.classList.toggle('caption')
    // } else this.classList.remove('caption');
});


