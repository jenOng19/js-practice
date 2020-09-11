function canTwoMoviesFillFlight(movies, flightLength){
    const moviesSeen = new Set();
    for(let i = 0; i < movies.length; i++){
        const firstMovie = movies[i];
        const secondMovie = flightLength-firstMovie;
        if(moviesSeen.has(secondMovie)){
            return true;
        }
        moviesSeen.add(firstMovie)
    }
    return false;
}

const flightTime = 100;
const movies = [50,24,75,25];
canTwoMoviesFillFlight(movies,flightTime);

