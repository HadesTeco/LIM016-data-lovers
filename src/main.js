import { example} from './data.js';

import data from './data/ghibli/ghibli.js';

//console.log(data.films[0].people[0].img);

const showMovies = (movies)=> {
    const divMovie = document.getElementById('movies');
        movies.films.forEach(movie => {
        let newImg = document.createElement("img");
        newImg.src = movie.poster;
        divMovie.appendChild(newImg);
        //console.log(newImg)       
    });  
}
showMovies(data);

const showCharacters = (all)=> {
   const divPersonajes = document.getElementById("personajes");
    all.films.forEach(movie =>{
        movie.people.forEach(character=> {
        let newPerson = document.createElement("img");
        newPerson.src = character.img
        //console.log(newPerson)
        divPersonajes.appendChild(newPerson);
    });
 });
}
showCharacters(data);

const showLocations = (all)=> {
    const divLocaciones = document.getElementById("locaciones");
    all.films.forEach(movie =>{
        movie.locations.forEach(locacionesT=> {
        let newLocation = document.createElement("img");
        newLocation.src = locacionesT.img
        //console.log(newLocation)
        divLocaciones.appendChild(newLocation);
    });
 });
}
showLocations(data);

const showDirectors = (all)=> {
    const divDirectors = document.getElementById('directores');
    all.films.forEach(movie => {
        let newDirectors = document.createElement("txt");
        newDirectors = movie.director;
        divDirectors.appendChild(newDirectors);
        console.log(newDirectors);       
    });  
}
showDirectors(data);

