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
    let sql = 'SELECT name,pic FROM user WHERE user.id = ?';
    db.get(sql,[request.id], (err,row) => {
        if (err){
            console.log(err,"lmao")
        }
        else{
            
            if (row){
                db.close()
                res.status(200).json({
                    name:row.name,
                    pic:row.pic
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