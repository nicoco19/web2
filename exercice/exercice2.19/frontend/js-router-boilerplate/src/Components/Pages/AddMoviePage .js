import { clearPage } from '../../utils/render';
import Navigate from '../Router/Navigate';

const AddMoviePage = () => {
  clearPage();
  addMovie();
};

function addMovie() {
  const main = document.querySelector('main');

  main.innerHTML = `<form id="formAddFilm">
  <div class="form-group">
    <label for="formGroupExampleInput" >title : </label>
    <input type="text" class="form-control" id="title" required >
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">duration : </label>
    <input type="time" class="form-control" id="duration" min="00:30" max="10:00" required >
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">budget : </label>
    <input type="number" class="form-control" id="budget" required min="1" >
  </div>
  <div class="form-group">
    <label for="formGroupExampleInput2">link : </label>
    <input type="text" class="form-control" id="link" required> <br>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>`;
  const formulaire = document.querySelector('form');
  formulaire.addEventListener('submit', add);
}

async function add(e) {
  // pour le pas raffrechir la page pour ne pas perdre les valeurs
  e.preventDefault();
  // pour récupérer les valeurs
  const title = document.querySelector('#title').value;
  const duration = document.querySelector('#duration').value;
  const budget = document.querySelector('#budget').value;
  const link = document.querySelector('#link').value;

  // on  met les valeur récupéré plus haut dans une vatiable
  const newMovie = {
    method: 'POST',
    body: JSON.stringify({
      title,
      duration,
      budget,
      link,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  //  crée le nouveau film
  const reponse = await fetch('/api/films', newMovie);
  if (!reponse.ok) throw new Error(`fetch error: ${reponse.status} : ${reponse.statusText}`);
  // on redirige vers la page ou sont affichés les films
  Navigate('/ViewMoviePage');
}

export default AddMoviePage;
