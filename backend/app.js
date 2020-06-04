const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // Logging

const app = express();

//Routes
const createRoutes = require('./api/routes/create');
const voteRoutes = require('./api/routes/vote');
const loginRoutes = require('./api/routes/login');

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(cors());

//Initialize routes
app.use('/create',createRoutes);
app.use('/vote',voteRoutes);
app.use('/login',loginRoutes);

//Express serving images
app.use('/static',express.static('Pictures'))

//Errors
app.use((req,res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error,req,res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
})


module.exports = app;