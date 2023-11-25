const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const filmsRouter = require('./routes/films');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let compteur = 0;
let compteurUrl = 0;

app.use((req,res,next) => {

    if(req.method === 'GET'){

        // eslint-disable-next-line no-plusplus
        compteur++;
        
    }

    if(req.path === '/films' && req.method === 'GET'){

        // eslint-disable-next-line no-plusplus
        compteurUrl ++;
    }
   
    // eslint-disable-next-line no-console, no-useless-concat
    console.log(`get / : ${  compteur  }\n` + `get /films : ${  compteurUrl}`);

    next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/films', filmsRouter);

module.exports = app;
