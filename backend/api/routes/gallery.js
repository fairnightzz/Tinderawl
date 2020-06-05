const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const sqlite3 = require('sqlite3').verbose();

router.get('/',checkAuth,(req,res,next) =>{
    const request = {
        id: req.userData.id
    }

    let db = new sqlite3.Database('./databases/database.db', function(error){
        if (error){
            console.log(error);
        }
        else{
            console.log("Made database");
        }
    })
    let sql = 'SELECT like FROM user WHERE user.id = ?';
    db.get(sql,[request.id], (err,row) => {
        if (err){
            console.log(err,"lmao")
        }
        else{
            
            if (row){
                var numorder = row.like.split(",")
                numorder.shift()
                
                var namepicdict = {};
                var nameorder = [];
                
                let newsql = 'SELECT name,num FROM pic';
                db.all(newsql,[], (err,row1) =>{
                    if (err){
                        throw err;
                    }
                    row1.forEach((row2) =>{
                        namepicdict[row2.num] = row2.name;
                    })

                    for (var i = 0;i<numorder.length;i++){
                        console.log(numorder[i])
                        nameorder.push(process.env.SERVER_LINK+namepicdict[numorder[i].toString()]);
                    }
                        
                    db.close(function(error){
                        if (error){
                            console.log(error)
                        }
                        else{
                            console.log("DB successfully closed")
                        }
                    })

                    res.status(200).json({
                        pics:nameorder
                    })
                    
                    
                })

                
                
                
            }
            else{
                db.close()
                res.status(400).json({
                    pics:"nope"
                })
                
            }
        }
    })

})

module.exports = router;