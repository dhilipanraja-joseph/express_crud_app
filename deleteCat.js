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
        cats.splice(index,1);


      // console.log('index',index);
      // cats.push(catObj);

    }

    fs.writeFile(dataFilePath,JSON.stringify(cats),
      function(err){
        cb(err);
      }
    );
  });


    // cb(null , data);
    // console.log(data);

}
