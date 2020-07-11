// HTML Fragments
// const watashi = {
//     nama: 'Ahmad Junaedi',
//     umur : 20,
//     pendidikan : 'D3',
//     jurusan: 'Sistem Infromasi' 
// };

// const el = `<div class="mhs">
//     <h2>${watashi.nama}</h2>
//     <span class="jurusan">${watashi.jurusan}</span>
// </div>`;


// Looping

// const mhs = [
//     {
//         nama: 'Ahmad Junaedi',
//         nim: 12183766
//     },
//     {
//         nama: 'Fiore',
//         nim: 12183766
//     },
//     {
//         nama: 'Klotze',
//         nim: 12183766
//     },
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.nim}</li>
//     </ul>`).join('')}
// </div>`;


// Condition (ternary)

// const lagu = {
//     penyanyi: 'Kiyoe Yoshioka',
//     judul: 'My Sunshine Diary',
//     // feat: 'Ikimonogakari'
// };

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;



// Nested

const mhs  = {
    nama: 'Ahmad Junaedi',
    semester: 4,
    matakuliah: [
        'Manajemen Project Sistem Informasi',
        'Web Programming',
        'Perancangan Sistem Berorientasi Object'
    ]
};


function listMatkul(matkul) {
    return `
        <ol>
            ${mhs.matakuliah.map(m => `<li>${m}</li>`).join('')}
        </ol>
    `;
}

const el = `
    <div class="mhs">
        <h2>${mhs.nama}</h2>
        <span class="semester">Semester ${mhs.semester}</span>
        <h4>Matakuliah</h4>
        ${listMatkul()}
    </div>
`;

document.body.innerHTML = el;