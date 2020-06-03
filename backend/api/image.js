


var randoList = function(callback){
    const picpath = './Pictures';
    const fs = require('fs');
    var l = 0;
    fs.readdir(picpath, (err,files) => {
        console.log(files.length,"length");
        l = files.length;
        var llist = [];
        for (var i = 1;i<l+1;i++){
            llist.push(i);
        }
        llist.sort(() => Math.random() - 0.5);
        return callback(llist);
    })
    

}

module.exports.randoList = randoList;