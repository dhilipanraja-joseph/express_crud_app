const PORT = 8000;
const showCats = require('./showCats');
const addCats = require('./addCats');
const deleteCats = require('./deleteCat');
const getCat = require('./getCat');
const modifyCat = require('./modifyCat');
const express = require('express');
const morgan = require('morgan');

const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.route('/cats').get((req,res,err) => {

        showCats((err,data) => {

          if(err) return res.status(400).send(err);

          else res.send(data);

        });

    }).post((req,res,err)=>{

        addCats(req.body,(err)=>{

          if(err) return res.status(400).send(err);

          else res.send('Cat Added');
        });

    });

    app.put('/cats/:id',(req,res)=>{

        var reqA=[req.params.id,req.body];

        modifyCat(reqA,(err)=>{

          if(err) return res.status(400).send(err);

          else res.send('Cat Modified');
        });
    });

    app.delete('/cats/:id',(req,res)=>{

          deleteCats(req.params.id,(err)=>{

            if(err) return res.status(400).send(err);

            else res.send('Cat deleted');
          });

        // res.send('cat deleted');
    });

    app.get('/cats/:id',(req,res)=>{

        getCat(req.params.id,(err,data)=>{

          if(err) return res.status(400).send(err);

          else res.send(data);

        });

    });

app.listen(PORT , err => {

  console.log(err || `Server listening on port ${PORT}`);

});
