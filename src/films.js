
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(item => item.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let displayFilms = array.filter(film => film.director == director);
  return displayFilms;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let films = array.filter(film => film.director == director);
  let averageScore = films.reduce((total, next) => total + next.score, 0) / films.length;
  return averageScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let getTitles = array.map(item => item.title);
  let first20Titles = getTitles.sort((a, b) => a.localeCompare(b)).slice(0, 20);
  return first20Titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let sortedNewArray = array.map(item => item).sort((a,b) => (a.title > b.title)? 1 : (b.title > a.title) ? -1 :0);
  sortedNewArray.sort((a,b) => a.year - b.year); //sort by year 
  return sortedNewArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let sortGenre = array.map(film => film).filter(f => f.genre == genre).filter(fScore => fScore.score > 0);
  let getAverage = sortGenre.reduce((total, next) => total + next.score, 0)  / sortGenre.length; 
    return getAverage;
}


// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {

  let hours = 0, minuts = 0, newDuration;

  let newMovieList = array.map(function(film) {
    newDuration = film.duration.split(" ");  
    hours = parseInt(newDuration[0]);
    minuts = parseInt(newDuration[1]);
    if(newDuration.length == 1){
      minuts = 0;
    } 
    let result = hours * 60 + minuts;

    return {
      ...film,
      duration: result,
    };

  });
  return newMovieList;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array,year) {
  const selectByYear = array.filter(item => item.year == year)
	selectByYear.sort((a, b) => b.score - a.score);
	let bestFilmOfYear = [selectByYear[0]];
		
	return bestFilmOfYear;
  

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
