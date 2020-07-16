// const tes = new Promise(resolve => {
//     setTimeout(() => {
//         resolve('selesai')
//     }, 2000);
// });

// tes.then(() => console.log(tes));

function cobaPromise() {
    return new Promise((resolve, reject) => {
    const time = 6000;
    if(time < 5000){
            setTimeout(() => {
                resolve('selesai')
            }, time);
        } else {
            reject('Kelamaan!');
        }
    }); 
}

// const coba = cobaPromise();
// coba
//     .then(coba => console.log(coba))
//     .catch(coba => console.log(coba));

async function cobaAsync() {
    try{
        const coba = await cobaPromise();
        console.log(coba);
    } catch(err) {
        console.error(err);
    }
}
cobaAsync();