const fs = require('fs');
const path = require('path');
// const uuid = require('uuid');
const showCats = require('./showCats');
const dataFilePath = path.join(__dirname,'./data.json');

module.exports = function(id,cb){

  showCats((err,cats) => {

    if(err) return cb(err);

    else {

        var index = cats.findIndex(x => x.id === id);


        // return console.log(err,'invalid id');
        // cats.splice(index,1);
        cb(null,cats[index]);

      // console.log('index',index);
      // cats.push(catObj);

    }

  });


    // cb(null , data);
    // console.log(data);

}
