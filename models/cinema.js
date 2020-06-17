const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function (films) {
  const filmTitles = films.map((film)=>{
    return film.title
  })

  return filmTitles
}

Cinema.prototype.getFilmByTitle = function (title) {
  const film = this.films.find((film) => {
    return film.title === title
  })
  return film
}

Cinema.prototype.getFilmsByGenre = function (genre) {
  const films = this.films.filter((film) => {
    return film.genre === genre
  })
  return films
}

Cinema.prototype.checkFilmsYear = function (year) {
  const result = this.films.some((film) => {
    return film.year === year
  })
  return result
}

Cinema.prototype.checkFilmsLength = function (length) {
  const films = this.films.filter((film) => {
    return film.length > length
  })
  return films
}

Cinema.prototype.totalRunningTime = function () {
  const total = this.films.reduce((runningTotal, film) => {
    return runningTotal + film.length
  }, 0)
  return total
}


module.exports = Cinema;
