$('.search-button').on('click', function() {
    
    $.ajax({
        url: "http://www.omdbapi.com/?apikey=3bea8a2a&s=" + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            movies.forEach(m => {
                cards += showCards(m);
            });
    
            $('.movie-container').html(cards);
    
            // ambil data id ketika detainBtn diklik
            $('.detailBtn').on('click', function() {
                $.ajax({
                    url: "http://www.omdbapi.com/?apikey=3bea8a2a&i=" + $(this).data('imdbid'),
                    success: m => {
                        const movieDetail = showMovieDetail(m);
                        $('.modal-body').html(movieDetail);
                    }
                });
            });
        },
        error: (e) => {
            console.log(e.responseText);
        }
    });
});



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