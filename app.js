let api = "http://www.omdbapi.com/?apikey=61e576a4&t="

let movieTitle = document.getElementById('movieTitle');
let movieDescription = document.getElementById('description');
let movieYear = document.getElementById('year');
let movieGenre = document.getElementById('genre');
let movieActors = document.getElementById('actors');
let movieDirector = document.getElementById('director');
let movieAwards = document.getElementById('awards');
let movieBoxOffice = document.getElementById('boxOffice');
let movieRatings = document.getElementById('ratings');
let moviewriter = document.getElementById('writer');
let moviePoster = document.getElementById('poster-img');
let mainContainer = document.getElementById('main-container');

mainContainer.style.display = 'none';   

function searchMovie() {
    let name = document.getElementById('search-name');
    let movieSearchQuery = api + name.value;
    // console.log(movieSearchQuery)
    fetch(movieSearchQuery).then((data) =>{
        mainContainer.style.display = 'flex';
        return data.json();

    }).then((data) => {
        movieTitle.innerText = data.Title;
        movieDescription.innerText = data.Plot;
        movieGenre.innerText = data.Genre;
        movieYear.innerText = data.Released;
        movieActors.innerText = data.Actors;
        movieDirector.innerText = data.Director;
        movieAwards.innerText = data.Awards;
        movieBoxOffice.innerText = data.BoxOffice;
        moviewriter.innerText = data.Writer;
        movieRatings.innerText = data.imdbRating;
        moviePoster.src = data.Poster;
    })


}






