const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const showCats = require('./showCats');
const dataFilePath = path.join(__dirname,'./data.json');

module.exports = function(arr,cb){

  showCats((err,cats) => {

    if(err) return cb(err);

    else {

      var id = arr[0], obj = arr[1];
      var index = cats.findIndex(x => x.id === id);
      obj['id'] = uuid.v4();
      cats[index] = obj;
      // cats.push(catObj);
      cb(err,cats);
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
