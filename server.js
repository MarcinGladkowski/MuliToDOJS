const mongoose   = require('mongoose');
const express        = require('express');
const bodyParser     = require('body-parser');
const path           = require('path');
const db             = require('./config/db');

const app            = express();
const port = 3000;
const task = require('./routes/task');
const Task = require('./model/Task.js');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next();
});

app.use('/', task);

mongoose.connect(db.url, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("connection successful");
    }
});

app.listen(port);
console.log('server starts at 127.0.0.1::' + port);