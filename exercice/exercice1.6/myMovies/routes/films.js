var express = require('express');
var router = express.Router();

const FILMS = [
    {
        id : 1,
        title : "Harry Potter",
        duration : 120,
        budget : 362000,
        link : "https://"
    },
    {
        id : 2,
        title : "le seigneur des anneaux",
        duration : 180,
        budget : 529000,
        link : "https://"
    },
    {
        id : 3,
        title : "Indiana Jones",
        duration : 60,
        budget : 713000,
        link : "https://"
    }
]
  
  router.get('/', (req, res, next) => {

    const orderByDuration = req?.query['minimum-duration']? req.query['minimum-duration']: undefined;

    let orderedFILMS;

    if(orderByDuration){

      orderedFILMS = [...FILMS].filter(film => film.duration > orderByDuration);

    }

    if(orderByDuration <= 0){

      return res.status(400);

    }

    console.log("GET /films");
    res.json(orderedFILMS ?? FILMS);
  });

  //for finding film
  router.get('/:id', (req, res, next) => {

    console.log(`GET /films/${req.params.id}`);

    const indexOfFilmsFind = FILMS.findIndex((film) => film.id == req.params.id);

    if(indexOfFilmsFind < 0) return res.status(404);

    res.json(FILMS[indexOfFilmsFind]);

  });

  router.post('/', (req, res, next) => {

  const title = req?.body?.title.length != 0 ? req.body.title : undefined;
  const duration = req?.body?.duration.length != 0 ? req.body.duration : undefined;
  const budget = req?.body.budget.length != 0 ? req.body.budget : undefined;
  const link = req?.body?.link.length != 0 ? req.body.link : undefined;

  if(!title || !duration || !budget || !link) return res.status(400);

  const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id : nextId,
    title : title,
    duration : duration,
    budget: budget,
    link: link,

  };

  const result = FILMS.find(e => e.title === newFilm.title);

  if(result){

    return res.status(400);
  }
  

  FILMS.push(newFilm);
    res.json(newFilm);

  });


  router.delete('/:id', (req, res) => {

    console.log(`delete /films/ ${req.params.id}`);

    if(req.params.id < 0 || req.params.id > FILMS.length){

      return res.status(404);
    }

    const deltetfilmID = FILMS.findIndex(e => e.id === req.params.id);

    const filmDelete = FILMS.splice(deltetfilmID,1);
    const filmASupprimer = filmDelete[0];

    res.json(filmASupprimer);
  });

  router.patch('/:id', (req, res) => {

    const title = req?.body?.title;
    const duration = req?.body?.duration;
    const budget = req?.body?.budget;
    const link = req?.body?.link; 


   console.log( typeof req.params.id )

    const findIndex = FILMS.findIndex(e => e.id == req.params.id);

    if(findIndex < 0) {

      return res.status(404);
    }
    const updateFilm = {...FILMS[findIndex], ...req.body};

    FILMS[findIndex] = updateFilm;

    res.json(updateFilm);

  });

  router.put('/:id',(req, res) => {

    const id = req.params.id;
    const title = req?.body?.title;
    const duration = req?.body?.duration;
    const budget = req?.body?.budget;
    const link = req?.body?.link; 

    if(!title || !duration || !budget || !link) return res.sendStatus(400);

    if(id > FILMS.length){

  const newFilm = {
    id : id,
    title : title,
    duration : duration,
    budget: budget,
    link: link,

  };

  const result = FILMS.find(e => e.title === newFilm.title);

  if(result){

    return res.status(400);
    
  }

    FILMS.push(newFilm);
    return res.json(newFilm);

    }

    const findIndex = FILMS.findIndex(e => e.id == req.params.id);

    if(findIndex < 0) {

      return res.status(404);
    }

    const updateFilm = {...FILMS[findIndex], ...req.body};

    FILMS[findIndex] = updateFilm;

    res.json(updateFilm);

  });



module.exports = router;