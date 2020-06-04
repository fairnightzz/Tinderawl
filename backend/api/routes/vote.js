const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const sqlite3 = require('sqlite3').verbose();


//Image
router.get('/',checkAuth,(req,res, next) => {
    const request = {
        id:req.userData.id
    }
    let db = new sqlite3.Database('./databases/database.db', function(error){
        if (error){
            console.log(error);
        }
        else{
            console.log("Made database");
        }
    })
    
    let sql = 'SELECT remaining FROM user WHERE user.id = ?';
    db.get(sql,[request.id], (err,row) => {
        if (err){
            console.log(err,"lmao")
            
        }
        else{
                if (row){
                    //Take the list and make it into file list
                    var nameorder = []
                    var order = row.remaining.split(",")
                    
                    let newsql = 'SELECT name,num FROM pic';
                    db.all(newsql,[], (err,row1) =>{
                        if (err){
                            throw err;
                        }
                        row1.forEach((row2) =>{
                            
                            if(order.includes(row2.num.toString())){
                                nameorder.push(row2.name);
                            }
                            
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
                            pic:nameorder
                        })
                        
                        
                    })
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
                        pic: null
                    })
                }
        }
    })
})


//Send vote
router.post('/',checkAuth,(req,res,next) => {
    const request = {
        id: req.userData.id,
        pic: req.body.pic,
        verdict: req.body.verdict
    }
    let db = new sqlite3.Database('./databases/database.db', function(error){
        if (error){
            console.log(error);
        }
        else{
            console.log("Made database");
        }
    })
    let sql = 'SELECT remaining,like FROM user WHERE user.id = ?';
    db.get(sql,[request.id], (err,row) => {
        if (err){
            console.log(err,"lmao")
        }
        else{
                if (row){
                    //Check if the first thing num is equal to the name of request
                    
                    sql = 'SELECT name FROM pic WHERE num = ?';
                    db.get(sql,[parseInt(row.remaining.split(",")[0])], (err,row1) =>{
                        if (row1){
                            if(row1.name == request.pic){
                                //Remove the pic from remaining


                                //If verdict right, add 1 to vote
                                let nextsql = 'UPDATE pic SET vote = vote+1 WHERE name = ?';
                                db.get(nextsql,[request.pic], (err,row3) => {
                                    if (err){
                                        console.log("error",err)
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
                                        res.status(200).json({
                                            pic:"updated"
                                        })
                                    }
                                })
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
                                    pic: "Not the pic that needs to be removed"
                                })
                            }
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
                                pic: "pic not found in db, shouldnt happen"
                            })
                        }
                    })
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
                        message:"User not found in database"
                    })
                }
        }
    })




})



module.exports = router;