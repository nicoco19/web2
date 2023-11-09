import { clearPage } from '../../utils/render';
import ViewMoviePage from './ViewMoviePage';
import { addMovies } from '../../utils/movies';

const AddMoviePage  = () => {
  clearPage();
  addMovie();
  add();
};

function addMovie(){

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
};

function add(){

  const form = document.querySelector('#formAddFilm');
  
  form.addEventListener('submit', (e) =>{
  const title = document.querySelector('#title');
  const duration = document.querySelector('#duration');
  const budget = document.querySelector('#budget');
  const link = document.querySelector('#link');

  addMovies(title.value, duration.value, budget.value, link.value);
  
   ViewMoviePage()
    e.preventDefault();
  }); 
  
}

export default AddMoviePage ;
