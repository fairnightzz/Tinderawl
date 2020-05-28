const express = require('express');
//npm install --save express
//npm install --save-dev nodemon
//npm install --save morgan

//to run, do npm start
const app = express();
const morgan = require('morgan'); // For logging

//Routes
const voteRoutes = require('./api/routes/vote');

app.use(morgan('dev'));

//Routes handling requests
app.use('/vote', voteRoutes);

//For handling errors --> Since it's after routes, if it reaches this line it means no route was able to handle the request
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;;
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



/*
app.use((req, res, next) => {
    res.status(200).json({
        message: "It works"
    });
}); // Middleware

*/



module.exports = app;