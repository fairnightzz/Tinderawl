const http = require('http');
const port  = 3000;

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

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database("./db/database.db", function(error){
    if (error){
        console.log(error);
    }
    else{
        console.log("Connected");
    }

    db.close(function(error){
        if (error){
            console.log(error)
        }
        else{
            console.log("DB successfully closed")
        }
    })
});




