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

    let sql = 'SELECT name,vote FROM pic ORDER BY vote DESC';
    db.all(sql,[], (err, rows) =>{
        var llist = []
        rows.forEach((row) =>{
            console.log(row.name)
            const thing = {
                pic:process.env.SERVER_LINK+row.name,
                vote:row.vote
            }
            llist.push(thing)
        })
        db.close()
        res.status(200).json({
            pics:llist
        })
    })







})

module.exports = router;