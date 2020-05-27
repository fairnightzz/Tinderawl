const express = require('express');
//npm install --save express
const app = express();

//Routes
const voteRoutes = require('./api/routes/vote');

//For voting
app.use('/vote', voteRoutes);


/*
app.use((req, res, next) => {
    res.status(200).json({
        message: "It works"
    });
}); // Middleware

*/



module.exports = app;