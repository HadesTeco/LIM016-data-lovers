import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

const showMovies = (movies)=> {
    const divMovie = document.getElementById('movies');
    
    movies.films.forEach(movie => {
        let newImg = document.createElement("img");
        newImg.src = movie.poster;
        divMovie.appendChild(newImg);
        console.log(movie.poster)});
    //console.log(movies.films);    
    
}

showMovies(data);


