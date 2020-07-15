// Promise

// contoh 1
// let janji = true;
// const janji1 = new Promise((resolve, reject) => {
//     if(janji){
//         resolve('Janji ditepati');
//     } else {
//         reject('Ingkar Janji');
//     } 
// });

// janji1
// .then(respon => console.log('Ok ! : ' + respon))
// .catch(respon => console.log('Not Ok : ' + respon));

// contoh 2
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if(ditepati){
//         setTimeout(() => {
//             resolve('Ditepati, setelah menunggu');
//         },2000)
//     } else {
//         setTimeout(() => {
//             resolve('Tidak ditepati, setelah menunggu');
//         },2000)
//     }
// });

// console.log('mulai');

// janji2
// .finally(() => console.log('selesai menunggu'))
// .then(respon => console.log('Ok : ' + respon))
// .catch(respon => console.log('Not Ok : ' + respon));
// // console.log(janji2.then(() => console.log(janji2)));
// console.log('selesai');

// Promise All
const mahasiswa = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            nama: 'Ahmad Junaedi',
            nim: 12183766,
            jurusan: 'Sistem Informasi'
        }]);
    }, 1000);
});

const cuaca = new Promise(resolve => {
    setTimeout(() => {
        resolve([{
            kota: 'Karawang',
            temp: 26,
            kondisi: 'Cerah'
        }]);
    }, 500);
});

Promise.all([mahasiswa, cuaca])
    // .then(respon => console.log(respon));
    .then(respon => {
        const [mahasiswa, cuaca] = respon;
        console.log(mahasiswa);
        console.log(cuaca);
    });