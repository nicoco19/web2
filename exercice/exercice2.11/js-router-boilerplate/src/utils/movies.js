const films = [{
  title: 'Harry...',
  duration: "01:20",
  budget: 111,
  link: 'https://amazing-javascript.world',
}];


function addMovies(title,duration,budget,link){

  const newMovie = {
    title,
    duration,
    budget,
    link
  };
  films.push(newMovie);
}

module.exports = {films,addMovies};