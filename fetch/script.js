// Versi JQuery

// $('.search-button').on('click', function() {
    
//     $.ajax({
//         url: "http://www.omdbapi.com/?apikey=3bea8a2a&s=" + $('.input-keyword').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = '';
//             movies.forEach(m => {
//                 cards += showCards(m);
//             });
    
//             $('.movie-container').html(cards);
    
//             // ambil data id ketika detainBtn diklik
//             $('.detailBtn').on('click', function() {
//                 $.ajax({
//                     url: "http://www.omdbapi.com/?apikey=3bea8a2a&i=" + $(this).data('imdbid'),
//                     success: m => {
//                         const movieDetail = showMovieDetail(m);
//                         $('.modal-body').html(movieDetail);
//                     }
//                 });
//             });
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
//     });
// });

// END


// Versi Fetch
// const btnSearch = document.querySelector('.search-button');
// btnSearch.addEventListener('click', function() {
//     const inputKey = document.querySelector('.input-keyword');
//     fetch('http://www.omdbapi.com/?apikey=3bea8a2a&s=' + inputKey.value)
//         .then(Response => Response.json())
//         .then(Response => {
//             const movies = Response.Search;
//             let cards = '';

//             movies.forEach(m => cards += showCards(m));
//             const movieContainer = document.querySelector('.movie-container');
//             movieContainer.innerHTML = cards;

//             // ketika btn detail di klik
//             const btnDetail = document.querySelectorAll('.detailBtn');
//             btnDetail.forEach(btn => {
//                 btn.addEventListener('click', function() {
//                     const imdbID = this.dataset.imdbid;
//                     fetch('http://www.omdbapi.com/?apikey=3bea8a2a&i=' + imdbID)
//                         .then(Response => Response.json())
//                         .then(m => {
//                             const movieDetail = showMovieDetail(m);
//                             const modalBody = document.querySelector('.modal-body');
//                             modalBody.innerHTML = movieDetail; 
//                         });
//                 });
//             });
//         });
// });



// Refactor
const btnSearch = document.querySelector('.search-button');
btnSearch.addEventListener('click', async function() {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getAnime(inputKeyword.value);
    updateUI(movies);
});


// Event binding

document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('detailBtn')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetail(imdbid);
        updateUIDetail(movieDetail);
    }
});


function getMovieDetail(imdbid){
    return fetch('http://www.omdbapi.com/?apikey=3bea8a2a&i=' + imdbid)
        .then(response => response.json())
        .then(m => m);
}

function updateUIDetail(m) {
    const movieDetail = showMovieDetail(m);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


function getAnime(keyword){
    return fetch('http://www.omdbapi.com/?apikey=3bea8a2a&s=' + keyword)
        .then(response => response.json())
        .then(response => response.Search);
}

function updateUI(movies){
    let cards = '';
    movies.forEach(m => cards += showCards(m));
    const movieContainer = document.querySelector('.movie-container');
    movieContainer.innerHTML= cards;

}



function showCards(m){
    return `  <div class="col-md-4 my-3">
    <div class="card">
        <img src="${m.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${m.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
        <a href="#" class="btn btn-primary detailBtn" data-toggle="modal" data-target="#detail" data-imdbid="${m.imdbID}">Detail</a>
        </div>
    </div>
</div>`;
}

function showMovieDetail(m){
    return `<div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" alt="">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${m.Title}</h4></li>
                    <li class="list-group-item"><strong>Director : </strong>${m.Title}</li>
                    <li class="list-group-item"><strong>Rate : </strong>${m.Rated}</li>
                    <li class="list-group-item"><strong>Genre : </strong>${m.Genre}</li>
                    <li class="list-group-item"><strong>Sinopsis : </strong>${m.Plot}</li>
                </ul>
            </div>
        </div>
    </div>`;
}