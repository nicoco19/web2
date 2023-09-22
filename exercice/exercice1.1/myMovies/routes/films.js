var express = require('express');
var router = express.Router();

const FILMS = [
    {
        id : 1,
        title : "Harry Potter",
        duration : "2h",
        budget : 362000,
        link : "https://"
    },
    {
        id : 2,
        title : "le seigneur des anneaux",
        duration : "3h19",
        budget : 529000,
        link : "https://"
    },
    {
        id : 3,
        title : "Indiana Jones",
        duration : "2h12",
        budget : 713000,
        link : "https://"
    }
]
  
  router.get('/', (req, res, next) => {
    res.json(FILMS);
  });

module.exports = router;