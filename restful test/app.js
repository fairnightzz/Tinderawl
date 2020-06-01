const express = require('express');
//npm install --save express
//npm install --save-dev nodemon
//npm install --save morgan
//npm install --save body-parser
//to run, do npm start
const app = express();
const cors = require('cors');
const morgan = require('morgan'); // For logging

//For parsing
//const bodyParser = require('body-parser');

//Express should use 

//Routes
const voteRoutes = require('./api/routes/vote');

app.use(morgan('dev'));
//For body parser
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(bodyParser.json());

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use(cors());


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