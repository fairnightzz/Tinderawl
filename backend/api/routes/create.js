const express = require('express');

const router = express.Router();

const sqlite3 = require('sqlite3').verbose();

router.post('/', (req, res, next) => {

    //Check if the user has already signed up
    const request = {
        discordID: req.body.id
    }
    
    let db = new sqlite3.Database('./databases/database.db', function(error){
        if (error){
            console.log(error);
        }
        else{
            console.log("Made database");
        }
    })




    //If good: Generate code
    const charac = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var code = "";
    for (var i = 0; i<7;i++){
        code+=charac.charAt(Math.round(Math.random()*(charac.length-1)));
    }

    res.status(201).json({
        code: code
    })
})

module.exports = router;