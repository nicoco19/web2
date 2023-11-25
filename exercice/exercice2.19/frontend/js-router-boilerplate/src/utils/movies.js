// on crée le nouveau film avec les valeurs réccupérés
async function addMovies(title, duration, budget, link) {
  // on récupère la liste des livres avec la méthode getAllMovies
  const films = await getAllMovies();
  // avec les valeurs récupéré on crée une const newMovie
  const newMovie = {
    title,
    duration,
    budget,
    link,
  };
  // on push la variable qui contient les valeurs
  films.push(newMovie);
}

async function getAllMovies() {
  try {
    // on se connecte a API
    const reponse = await fetch('/api/films');
    if (!reponse.ok) throw new Error(`fetch error: ${reponse.status} : ${reponse.statusText}`);
    // on récupère la liste des films
    const movies = await reponse.json();
    // on renvoit les films
    return movies;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    throw err;
  }
}

module.exports = { getAllMovies, addMovies };
