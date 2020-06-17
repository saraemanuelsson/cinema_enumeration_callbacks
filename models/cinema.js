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

module.exports = Cinema;
