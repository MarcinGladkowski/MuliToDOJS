const express = require('express');
const router = express.Router();
const Task = require('../model/Task.js');

router.get('/task', (req, res) => {
   
    Task.find({}, function(err, tasks) {
        res.send(tasks);  
      });
 
});

router.post('/task', (req, res) => {

    let newTask = new Task();

    newTask.title = req.body.title;
    newTask.completed = req.body.completed;

    newTask.save(function (err, task) {
        if (err){
            res.send("Error");
        } else {
            res.json(task);
        }
      });
});

router.delete('/task', (req, res) => {
    Task.remove({ _id: req.body.id }, function (err) {
        if (err){
            res.send("Error");
        } else {
            res.send({"status" : "ok"});
        }
      });   
});

router.put('/task', (req, res) => {

    let eventTask = req.body;

});

module.exports = router