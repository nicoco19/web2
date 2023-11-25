const express = require('express');

const router = express.Router();

const{
    readAllFilms,
    readOneFilms,
    creatFilms,
    deleteOneFilms,
    updateOneFilm,
    updateAllPropertiesOrCreate,
} = require('../models/films');

// eslint-disable-next-line consistent-return
router.get('/', (req, res) => {
  const orderByDuration = req?.query['minimum-duration']
    ? req.query['minimum-duration']
    : undefined;

  const allPizzasPotentiallyOrdered = readAllFilms(orderByDuration);
  return res.json(allPizzasPotentiallyOrdered);
});

// for finding film
// eslint-disable-next-line consistent-return
router.get('/:id', (req, res) => {

  // eslint-disable-next-line no-console
  console.log(`GET /films/${req.params.id}`);

const foundFilms = readOneFilms(req.params.id);

  if (!foundFilms) return res.sendStatus(404);

   return res.json(foundFilms);
});

// eslint-disable-next-line consistent-return
router.post('/', (req, res) => {

  const title = req?.body?.title.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration.length !== 0 ? req.body.duration : undefined;
  const budget = req?.body.budget.length !== 0 ? req.body.budget : undefined;
  const link = req?.body?.link.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.status(400);

  const createFilm = creatFilms(title, duration, budget, link);
  return res.json(createFilm);
});

// eslint-disable-next-line consistent-return
router.delete('/:id', (req, res) => {

  const deleteFilm = deleteOneFilms(parseInt(req.params.id, 2));

  if (!deleteFilm) return res.sendStatus(404);

  return res.json(deleteFilm);
});

// eslint-disable-next-line consistent-return
router.patch('/:id', (req, res) => {

const title = req?.body?.title;
const duration = req?.body?.duration;
const budget = req?.body?.budget;
const link = req?.body?.link;

const updateFilm = updateOneFilm(req.params.id, {title, duration,budget, link});

if (!updateFilm) return res.sendStatus(404);

 return res.json(updateFilm);
});

// eslint-disable-next-line consistent-return
router.put('/:id', (req, res) => {
  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;
  
  const updateFilm = updateAllPropertiesOrCreate(req.params.id, {title, duration,budget, link});
  
  if (!updateFilm) return res.sendStatus(404);
  
   return res.json(updateFilm);

});

module.exports = router;
