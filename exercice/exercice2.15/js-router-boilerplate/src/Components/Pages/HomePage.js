const HomePage = () => {

 fetch('https://v2.jokeapi.dev/joke/Any?type=single')
 .then((response) => {
  if(!response.ok) throw Error(`il y a une erreur : ${response.status} : ${response.statusText}`);
  return response.json();
 })
 .then((jokes) => {
  addJoke(jokes);
 })
 .catch((err) => {
  // eslint-disable-next-line no-console
  console.log('il y a des erreurs !!!\n qui sont : ',err);
 });
};

function addJoke(joke){
const main = document.querySelector('main');
main.innerHTML =  `
<div class = "card text-center mb-3">
<div class="card-body">
<h5 class="card-title">Category : ${joke.category} </h5>
  <p class = "card-text">  
       Joke : ${joke.joke}</p>
</div>
</div>
`;
}

export default HomePage;
