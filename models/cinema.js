const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getTitles = function (films) {
  const filmTitles = films.map((film)=>{
    return film.title
  })

  return filmTitles
}

module.exports = Cinema;
