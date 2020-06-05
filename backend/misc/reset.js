const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();

router.delete('/',(req,res,next) =>{
    const request = {
        key:req.body.key
    }
    console.log(request.key)
    console.log(process.env.RESET)
    if (request.key == process.env.RESET){
        let db = new sqlite3.Database('./databases/database.db', function(error){
            if (error){
                console.log(error);
            }
            else{
                console.log("Made database");
            }
        })
    
        let sql = 'UPDATE pic SET vote = 0';
        db.get(sql,[], (err,row) => {
            sql = 'DELETE FROM user';
            db.get(sql,[],(err,row1) => {
                if (err){
                    console.log(err)
                }
                db.close()
                console.log("yee")
                res.status(200).json({});
            })
        })
        
    }
    else{
        res.status(404).json({});
    }
    

})

module.exports = router;