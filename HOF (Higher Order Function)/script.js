const angka = [-1, 2, 4, 5, 3, 6, 8, 7, -5, -1];
// const newAngka = [];
// // mencari angka > 3
// for (let i = 0; i<angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// }

// console.log(newAngka);


// menggunakan filter

// const newAngka = angka.filter(function(e) {
//     return e >= 3;
// });
// console.log(newAngka);

// arrow function

// const newAngka = angka.filter(a => a >= 3);
// console.log(newAngka);



// Map
// mengkalikan 2 semua nilai pada array angka

// const newAngka = angka.map(a => a*2);
// console.log(newAngka);



// Reduce
// Jumlahkan seluruh element pada array
// const newAngka = angka.reduce((accumulator,currentValue) => accumulator + currentValue);
// console.log(newAngka);


// Method chaining
// cari angka > 5
// dikali 3
// lalu di jumlahkan

const hasil = angka.filter(a => a > 3)
        .map(a => a*3)
        .reduce((acc, curr) => acc + curr);
    console.log(hasil);



