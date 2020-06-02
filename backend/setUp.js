const sqlite3 = require('sqlite3').verbose();
//Set up db linking pics to file names

let db = new sqlite3.Database('./databases/database.db', function(error){
    if (error){
        console.log(error);
    }
    else{
        console.log("Made database");
    }
})

db.run('CREATE TABLE IF NOT EXISTS pic(num int,name varchar(255))',function(error){
    if(error){
        console.log (error);
        return;
    }
    const picpath = './Pictures/';
    const fs = require('fs');
    fs.readdirSync(picpath).forEach(file => {
        console.log(file);
        db.run('INSERT INTO pic(num,name) VALUES(?,?)',[parseInt(file.substring(0,file.indexOf("."))),file],function(err){
            if (err){
                return console.log(err.message);
            }
        });
        console.log("inserted")

    })
            


    db.close(function(error){
        if (error){
            console.log(error)
        }
        else{
            console.log("DB successfully closed")
        }
    })

    
})



