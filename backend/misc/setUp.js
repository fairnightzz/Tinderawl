const sqlite3 = require('sqlite3').verbose();
//Set up db linking pics to file names
const picpath = './Pictures/';
const fs = require('fs');

let db = new sqlite3.Database('./databases/database.db', function(error){
    if (error){
        console.log(error);
    }
    else{
        console.log("Made database");
    }
})



fs.readdirSync("./Pictures/").forEach(file => {
        
    //If good: Generate code
    const charac = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var code = "";
        for (var i = 0; i<10;i++){
            code+=charac.charAt(Math.round(Math.random()*(charac.length-1)));
        }
        var filename = code+file.substring(file.indexOf("."),file.length)
        fs.renameSync(picpath+file,picpath+filename,function(err){
            if (err){
                console.log(err);
            }
        })

})




db.run('CREATE TABLE IF NOT EXISTS pic(num int,name varchar(255),vote int)',function(error){
    if(error){
        console.log (error);
        return;
    }
    var count = 1;
    
    
    fs.readdirSync(picpath).forEach(file => {
        
        db.run('INSERT INTO pic(num,name,vote) VALUES(?,?,?)',[count,file,0],function(err){
            if (err){
                return console.log(err.message);
            }
        });
        console.log("inserted")
        count+=1;

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



