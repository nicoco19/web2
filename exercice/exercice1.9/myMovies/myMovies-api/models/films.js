const path = require('node:path');
const { serialize, parse } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');
const FILMS = [
  {
    id: 1,
    title: 'Harry Potter',
    duration: 120,
    budget: 362000,
    link: 'https://',
  },
  {
    id: 2,
    title: 'le seigneur des anneaux',
    duration: 180,
    budget: 529000,
    link: 'https://',
  },
  {
    id: 3,
    title: 'Indiana Jones',
    duration: 60,
    budget: 713000,
    link: 'https://',
  },
];

// eslint-disable-next-line consistent-return
function readAllFilms(orderByDuration){

  let orderedFILMS;

  const films = parse(jsonDbPath, FILMS);

  if (orderByDuration) {
    orderedFILMS = [...FILMS].filter((film) => film.duration > orderByDuration);
  }

  if (orderByDuration <= 0) {
    return undefined;
  }

  // eslint-disable-next-line no-console
  const allFilmsPotentiallyOrderd = orderedFILMS ?? films;
  return allFilmsPotentiallyOrderd;
}

// for finding film
// eslint-disable-next-line consistent-return
function readOneFilms(id) {

  const idNumber = parseInt(id, 10);
  const films = parse(jsonDbPath, FILMS);

  const indexOfFilmsFind = FILMS.findIndex((film) => film.id === idNumber);

  if (indexOfFilmsFind < 0)  return undefined;

  return films[indexOfFilmsFind];
}

// eslint-disable-next-line consistent-return
function creatFilms(title,duration,budget, link) {

const films = parse(jsonDbPath, FILMS);

  const newFilm = {
    id: getNextId(),
    title,
    duration,
    budget,
    link,
  };


  films.push(newFilm);
  serialize(jsonDbPath, films);
  return newFilm;
};

function getNextId() {
    const pizzas = parse(jsonDbPath, FILMS);
    const lastItemIndex = pizzas?.length !== 0 ? pizzas.length - 1 : undefined;
    if (lastItemIndex === undefined) return 1;
    const lastId = pizzas[lastItemIndex]?.id;
    const nextId = lastId + 1;
    return nextId;
  };


function deleteOneFilms(id) {

  const films = parse(jsonDbPath, FILMS);

  if (id < 0 || id > FILMS.length) {
    return undefined;
  }

  const deltetfilmID = FILMS.findIndex((e) => e.id === Number(id));

  const filmDelete = films.splice(deltetfilmID, 1);
  const filmASupprimer = filmDelete[0];

  serialize(jsonDbPath, films);
  return filmASupprimer;
};


function updateOneFilm(id, propertiesToUpdate){

    const films = parse(jsonDbPath,FILMS);

    const idParam = Number(id);
    const indexFilm = films.findIndex(f => f.id === idParam); // vérification de l'ID (le triple égal vérifie le type en plus de la valeur => double égal = la valeur)
    if(indexFilm < 0)return undefined;

    const updatedFilm = {...films[indexFilm],...propertiesToUpdate}; // on écrase les anciennes valeurs dans une copie du tableau
    films[indexFilm] = updatedFilm; // on met à jour les nouvelles valeurs dans le tableau au bon index

    serialize(jsonDbPath,films);

    return updatedFilm;
}

function updateAllPropertiesOrCreate(id, propertiesToUpdate){

    const films = parse(jsonDbPath,FILMS);

    const idParam = Number(id);
    const findId = films.findIndex(f =>f.id === idParam); // si l'on trouve l'ID, on met à jour, sinon on ajoute
    if(findId >= 0){ // findIndex ressort -1 lorsqu'elle ne trouve rien 
        const update = {...films[findId],...propertiesToUpdate};
        films[findId] = update;

        serialize(jsonDbPath,films);

        return update;
    }

    const newFilm = {
        id : idParam, // on met l'ID entré dans l'URL lors de l'ajout
        title : propertiesToUpdate.title,
        duration : propertiesToUpdate.duration,
        budget : propertiesToUpdate.budget,
        link : propertiesToUpdate.link
    }
    
        films.push(newFilm);
    
        serialize(jsonDbPath,films);
    
      return newFilm;
    
}    

module.exports = {

    readAllFilms,
    readOneFilms,
    creatFilms,
    deleteOneFilms,
    updateOneFilm,
    updateAllPropertiesOrCreate,
};
