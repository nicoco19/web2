const express = require('express');

const router = express.Router();
const { serialize, parse } = require('../utils/json');

const jsonDbPath = `${__dirname}/../data/films.json`;
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
router.get('/', (req, res) => {
  const orderByDuration = req?.query['minimum-duration']
    ? req.query['minimum-duration']
    : undefined;

  let orderedFILMS;

  const films = parse(jsonDbPath, FILMS);

  if (orderByDuration) {
    orderedFILMS = [...FILMS].filter((film) => film.duration > orderByDuration);
  }

  if (orderByDuration <= 0) {
    return res.status(400);
  }

  // eslint-disable-next-line no-console
  console.log('GET /films');
  res.json(orderedFILMS ?? films);
});

// for finding film
// eslint-disable-next-line consistent-return
router.get('/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(`GET /films/${req.params.id}`);

  const films = parse(jsonDbPath, FILMS);

  const indexOfFilmsFind = FILMS.findIndex((film) => film.id === req.params.id);

  if (indexOfFilmsFind < 0) return res.status(404);

  res.json(films[indexOfFilmsFind]);
});

// eslint-disable-next-line consistent-return
router.post('/', (req, res) => {
  const films = parse(jsonDbPath, FILMS);
  const title = req?.body?.title.length !== 0 ? req.body.title : undefined;
  const duration = req?.body?.duration.length !== 0 ? req.body.duration : undefined;
  const budget = req?.body.budget.length !== 0 ? req.body.budget : undefined;
  const link = req?.body?.link.length !== 0 ? req.body.link : undefined;

  if (!title || !duration || !budget || !link) return res.status(400);

  const lastItemIndex = FILMS?.length !== 0 ? FILMS.length - 1 : undefined;
  const lastId = lastItemIndex !== undefined ? FILMS[lastItemIndex]?.id : 0;
  const nextId = lastId + 1;

  const newFilm = {
    id: nextId,
    title,
    duration,
    budget,
    link,
  };

  const result = FILMS.find((e) => e.title === newFilm.title);

  if (result) {
    return res.status(400);
  }

  films.push(newFilm);
  serialize(jsonDbPath, films);
  res.json(newFilm);
});

// eslint-disable-next-line consistent-return
router.delete('/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(`delete /films/ ${req.params.id}`);

  const films = parse(jsonDbPath, FILMS);

  if (req.params.id < 0 || req.params.id > FILMS.length) {
    return res.status(404);
  }

  const deltetfilmID = FILMS.findIndex((e) => e.id === Number(req.params.id));

  const filmDelete = films.splice(deltetfilmID, 1);
  const filmASupprimer = filmDelete[0];

  serialize(jsonDbPath, films);
  res.json(filmASupprimer);
});

// eslint-disable-next-line consistent-return
router.patch('/:id', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(typeof req.params.id);

  const films = parse(jsonDbPath, FILMS);
  const findIndex = films.findIndex((e) => e.id === req.params.id);

  if (findIndex < 0) {
    return res.status(404);
  }

  const updateFilm = { ...films[findIndex], ...req.body };

  films[findIndex] = updateFilm;

  serialize(jsonDbPath, films);
  res.json(updateFilm);
});

// eslint-disable-next-line consistent-return
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const title = req?.body?.title;
  const duration = req?.body?.duration;
  const budget = req?.body?.budget;
  const link = req?.body?.link;

  if (!title || !duration || !budget || !link) return res.sendStatus(400);

  const films = parse(jsonDbPath, FILMS);
  if (id > films.length) {
    const newFilm = {
      id,
      title,
      duration,
      budget,
      link,
    };

    const result = films.find((e) => e.title === newFilm.title);

    if (result) {
      return res.status(400);
    }

    films.push(newFilm);
    serialize(jsonDbPath, films);
    return res.json(newFilm);
  }

  const findIndex = films.findIndex((e) => e.id === Number(req.params.id));

  if (findIndex < 0) {
    return res.status(404);
  }

  const updateFilm = { ...films[findIndex], ...req.body };

  films[findIndex] = updateFilm;

  serialize(jsonDbPath, films);
  res.json(updateFilm);
});

module.exports = router;
