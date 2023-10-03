var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var filmsRouter = require('./routes/films');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let compteur = 0;
let compteurUrl = 0;

app.use((req,res,next) => {

    if(req.method === 'GET'){

        compteur++;
        
    }

    if(req.path === '/films' && req.method === 'GET'){

        compteurUrl ++;
    }
   
    console.log("get / : " + compteur + "\n" + "get /films : " + compteurUrl);

    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films', filmsRouter);

module.exports = app;
