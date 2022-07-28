const testArr = [
    {
      title: 'Paths of Glory',
      year: 1957,
      director: 'Stanley Kubrick',
      duration: '1h 28min',
      genre: ['Drama', 'War'],
      score: 8.4
    },
    {
      title: 'Django Unchained',
      year: 2012,
      director: 'Quentin Tarantino',
      duration: '2h 45min',
      genre: ['Drama', 'Western'],
      score: 8.4
    }
]

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((iterador) => iterador.director)
    return directors
}

getAllDirectors(testArr)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
    let answer = movies.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama"));
    return answer.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    
    if (moviesArray.length == 0) {
        return 0
    }

    else {
        const avgsum = moviesArray.reduce(function (acumulator, currentValue){
            return acumulator + currentValue.score
        },0 );
        let total = avgsum/moviesArray.length
        return Number(total.toFixed(2))
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let dramaMovies = moviesArray.filter((movie) => movie.genre.includes("Drama"));
    let dramaScore = dramaMovies.reduce(function (acumulator, currentValue){
        return acumulator + currentValue.score
    }, 0);
    let dramaAvg = dramaScore/dramaMovies.length
    return Number(dramaAvg.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
