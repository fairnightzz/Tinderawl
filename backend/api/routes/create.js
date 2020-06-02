const express = require('express');

const router = express.Router();

const sqlite3 = require('sqlite3').verbose();

router.post('/', (req, res, next) => {

    //Check if the user has already signed up
    const request = {
        ID: req.body.id
    }
    var discordID = parseInt(request.ID);
    let db = new sqlite3.Database('./databases/database.db', function(error){
        if (error){
            console.log(error);
        }
        else{
            console.log("Made database");
        }
    })

    let sql = 'SELECT id FROM user WHERE user.id = ?';
    db.get(sql,[parseInt(discordID)], (err,row) => {
        if (err) {
            console.log(err)
        }
        else{
            if (row){
                console.log("The user exists")
                discordID = -1;

            }
            else{
                console.log("Adding the user to the database")
                
                db.run('INSERT INTO user(id,name,pic,remaining,like) VALUES(?,?,?,?,?)',[parseInt(discordID),"Zhehai","linktopic","adf","DASF"],function(err){
                    if (err){
                        return console.log(err.message);
                    }
                });
            }
        }

        db.close(function(error){
            if (error){
                console.log(error)
            }
            else{
                console.log("DB successfully closed")
            }
        })
    })


    

    res.status(201).json({
        code: discordID
    })
})

module.exports = router;