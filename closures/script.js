// Hoisting
// Menaikan suatu 




// console.log(hello()); Jika posisi console.log berada diatas dari deklarasi variable, maka nilai akan berisi "undefined";

// var nama = 'Enjun';
// var umur = 20;

// console.log(hello());

// function hello(){
//     return `halo nama saya ${this.nama}, umur saya ${this.umur} tahun.`;
// }

// Inner Function

// function init(){
//     let nama = 'Enjun';
//     function panggilNama(){
//         console.log(nama);
//     }
//     panggilNama();
// }
// init();

// function init(){
//     return function (nama){
//         console.log(nama);
//     }
// }

// let panggilNama = init();
// panggilNama('Enjun');
// panggilNama('Junaedi');


let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

let counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
