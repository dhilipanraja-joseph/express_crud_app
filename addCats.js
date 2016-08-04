const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const showCats = require('./showCats');
const dataFilePath = path.join(__dirname,'./data.json');

module.exports = function(catObj,cb){

  showCats((err,cats) => {

    if(err) return cb(err);

    else {

      catObj['id'] = uuid.v4();
      cats.push(catObj);

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
