// const mhs = ['Ahmad Junaedi','Enjun'];

// For of
// for(const m of mhs){
//     console.log(m);
// }

// string
// const mhs = 'Enjun';
// for(const n of mhs){
//     console.log(n); 
// }

// mhs.forEach((m, i) => {
//     console.log(`${m} adalah mahasiswa ke-${i+1}`);
// });

// const li = document.querySelectorAll('.nama');
// li.forEach(n => console.log(n.textContent));


// arguments

// function jumlahAngka(){
//     let jumlah = 0;
//     for(a of arguments) {
//         jumlah += a;
//     }
//     return jumlah;
// }

// console.log(jumlahAngka(1, 2, 3, 4, 5));

// FOR In

const mhs = {
    nama: 'Enjun',
    umur: 20,
    email: 'ahmadjunaedi1412@gmail.com'
}

for (m in mhs){
    console.log(mhs[m]);
}
