require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const mongoose = require('mongoose');
mongoose.connect(process.env.DBURL, {useNewUrlParser: true});

app.use(cors());
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', routes);
app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});