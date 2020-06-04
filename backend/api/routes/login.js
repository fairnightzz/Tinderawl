const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const jwt = require('jsonwebtoken')

router.post("/", (req,res,next) =>{
    //Check if code is right
    var passcode = req.body.passcode;
    console.log(passcode)
    let db = new sqlite3.Database('./databases/database.db', function(error){
        if (error){
            console.log(error);
        }
        else{
            console.log("Made database");
        }
    })

    let sql = 'SELECT id FROM user WHERE user.passcode = ?';
    db.get(sql,[passcode], (err,row) => {
        if (err){
            console.log(err,"lmao")
            
        }
        else{
                if (row){
                    console.log(row.id)
                    const token = jwt.sign({
                        id:row.id
                        
                    }, 
                    process.env.JWT_KEY,
                    {
                        expiresIn:"1h"
                    })
                    db.close(function(error){
                        if (error){
                            console.log(error)
                        }
                        else{
                            console.log("DB successfully closed")
                        }
                    })
                    res.status(200).json({
                        accessToken: token
                    });
                }
                else{
                    db.close(function(error){
                        if (error){
                            console.log(error)
                        }
                        else{
                            console.log("DB successfully closed")
                        }
                    })
                    res.status(409).json({
                        accessToken: null
                    })
                }
        }


    })




})



module.exports = router;