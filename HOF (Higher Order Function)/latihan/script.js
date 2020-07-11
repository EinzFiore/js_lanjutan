// Ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang bergenre Romance
let Romance = videos.filter(video => video.textContent.includes('Romance'))

// Ambil durasi video masing-masing
    .map(durasi => durasi.dataset.duration)

// ubah durasi video menjadi float, lalu ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1];
    })

// jumlahkan semua detik
    .reduce((total,detik) => total + detik);


// ubah formatnya jadi jam menit detik
    const jam = Math.floor(Romance / 3600);
    Romance = Romance - jam * 3600;

    const menit = Math.floor(Romance / 60);
    const detik = Romance - menit * 60;


// simpan di dom
const jumlahVideo = document.querySelector('.jumlah-video');
const jmlVideos = videos.filter(video => video.textContent.includes('Romance'));
jumlahVideo.textContent = `Total ${jmlVideos.length} Video.`;
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} Jam, ${menit} menit, ${detik} detik`;