const express = require('express');
const router = express.Router();
const Task = require('./../model/Task.js');

router.get('/task', (req, res) => {
    
    reader.readFile().then(
        val => res.send(val)
    );
    
});

router.post('/task', (req, res) => {

    let newTask = req.body;

    Task.create(newTask, function(err){
        if (err) {
            throw err
        } else {
           console.log('GET API CALLED, Data Sent!');
            res.send(JSON.stringify({'status':'ok'}));
        }
    })

});

router.delete('/task', (req, res) => {

    let eventTask = req.body;

   
});

router.put('/task', (req, res) => {

    let eventTask = req.body;
    

});

module.exports = router