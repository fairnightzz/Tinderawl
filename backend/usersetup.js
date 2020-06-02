const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./databases/database.db', function(error){
    if (error){
        console.log(error);
    }
    else{
        console.log("Made database");
    }
})


db.run('CREATE TABLE IF NOT EXISTS user(id int,name varchar(255),pic varchar(255), remaining varchar(255), like varchar(255))',function(error){
    if(error){
        console.log (error);
        return;
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