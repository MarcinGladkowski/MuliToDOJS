const mongoose   = require('mongoose');
const express        = require('express');
const bodyParser     = require('body-parser');
const path           = require('path');
const db             = require('./config/db');
const app            = express();
const port = 3000;
const task = require('./routes/task');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

app.use('/', task);

mongoose.connect(db.url);

app.listen(port);
console.log('server starts at 127.0.0.1::' + port);