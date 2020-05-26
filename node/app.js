const http = require('http');
const port  = 3000;
const sqlite3 = require('sqlite3').verbose();
const server = http.createServer(function(req, res){
    res.write('This is the code')
    res.end()


})


server.listen(port, function(error){
    if (error){
        console.log('Something went wrong',error)

    }
    else{
        console.log('Server is listening on port' + port)
    }
})



function onCreate(){
    let db = new sqlite3.Database("./db/database.db", function(error){
        if (error){
            console.log(error);
        }
        else{
            console.log("Connected");
        } 
    });
    
    db.run('CREATE TABLE IF NOT EXISTS users(name,remaining,like)',function(error){
        if(error){
            console.log (error);
            return;
        }
        db.run('INSERT INTO users(name,remaining,like) VALUES(?,?,?)',["Zhehai","1,3,5","2"])

    })
    
    
    
    db.close(function(error){
        if (error){
            console.log(error)
        }
        else{
            console.log("DB successfully closed")
        }
    })
}

onCreate();

/*
TO DO:

1. Function that creates an id and adds it to users table
2. Download all pictures and name them 1-N
3. Function get_pic(id) sends a pic num in remaining
4. Function send_pic(id,likeB) removes the pic from remaining and if like true, add to like in users table
5. Function display for when get_pic is empty, access user id and all the pics that are liked are sent
6. Function done: Make a list N long and add 1 every time a pic is found in like in users




*/

