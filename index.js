//STEP 1
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pc = require('./products_controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

//STEP 2
const massive = require('massive');
const port = 3000;

const connectionString = 'postgres://lgsjjohglcnstg:b294a1e4802853bd4653a91e800ae172e68d6276fcf7a38f00fec20972c12593@ec2-107-21-113-16.compute-1.amazonaws.com:5432/d77i3gffhool79?ssl=true';
massive( connectionString ).then( db => {
  app.set('db', db);
  app.listen( port, ()=> { console.log(`Listening on port: ${port}.`) })
});

//STEP 6
app.get('/api/products', pc.getAll);
app.get('/api/product/:id', pc.getOne);
app.put('/api/product/:id', pc.update);
app.post('/api/product', pc.create);
app.delete('/api/product/:id', pc.delete);


//STEP 4
module.exports = app;
