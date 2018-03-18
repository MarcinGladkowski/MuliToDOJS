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

    console.log(req.body);

    // let value = req.body.value;

    // Task.findById(req.body.id, function(err, task){

    //     if(err){
    //         res.send(err);
    //     } else {

    //         task.completed = value;
            
    //         task.save(function (err, task) {
    //             if (err){
    //                 res.send("Error");
    //             } else {
    //                 res.json(task);
    //             }
    //         });
    //     }

    // }); 
});

module.exports = router