const express = require('express');
var image = require("../image");
const keys = require('../../keys');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose();

router.post('/', (req, res, next) => {

    //Check if the user has already signed up
    const request = {
        ID: req.body.id,
        name: req.body.name,
        avatar: req.body.avatar,
        key: req.body.key
    }

    if (request.key == keys.key()){
        var discordID = parseInt(request.ID);
    
        let db = new sqlite3.Database('./databases/database.db', function(error){
            if (error){
                console.log(error);
            }
            else{
                console.log("Made database");
            }
        })

        let sql = 'SELECT id,passcode FROM user WHERE user.id = ?';
        db.get(sql,[parseInt(discordID)], (err,row) => {
            if (err) {
                console.log(err)
            }
            else{
                if (row){
                    console.log("The user exists")
                    discordID = -1;
                    db.close(function(error){
                        if (error){
                            console.log(error)
                        }
                        else{
                            console.log("DB successfully closed")
                        }
                    })
                    res.status(409).json({
                        passcode: row.passcode
                    })
                    
                }
                else{
                    console.log("Adding the user to the database")
                    llist = image.randoList(function(response){
                        console.log(response,"hello");
                        const charac = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
                        var passcode = "";
                        for (var i = 0; i<7;i++){
                            passcode+=charac.charAt(Math.round(Math.random()*(charac.length-1)));
                        }

                        db.run('INSERT INTO user(id,passcode,name,pic,remaining,like) VALUES(?,?,?,?,?,?)',[discordID,passcode,request.name,request.avatar,response.join(),""],function(err){
                            if (err){
                                return console.log(err.message);
                            }
                        });
                        db.close(function(error){
                            if (error){
                                console.log(error)
                            }
                            else{
                                console.log("DB successfully closed")
                            }
                        })
                        res.status(201).json({
                            passcode: passcode
                        })
                    })
                }
            }

            
        })
    }
    else{
        res.status(401).json({
            passcode:"ERROR"
        })
    }
    
})

module.exports = router;