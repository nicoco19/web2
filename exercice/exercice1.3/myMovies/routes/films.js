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

    console.log("GET /films");
    res.json(orderedFILMS ?? FILMS);
  });

  //for finding film
  router.get('/:id', (req, res, next) => {

    console.log(`GET /films/${req.params.id}`);

    const indexOfFilmsFind = FILMS.findIndex((film) => film.id == req.params.id);

    if(indexOfFilmsFind < 0) return res.status(400);

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

  FILMS.push(newFilm);
    res.json(newFilm);

  });



module.exports = router;