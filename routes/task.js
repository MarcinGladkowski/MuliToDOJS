const express = require('express');
const router = express.Router();
const Task = require('../model/Task.js');

router.get('/task', (req, res) => {
    Task.find({}, function(err, tasks) {
        res.status(200).send(tasks);  
    });
});

router.post('/task', (req, res) => {

    let newTask = new Task();

    newTask.title = req.body.title;
    newTask.completed = req.body.completed;

    newTask.save(function (err, task) {
        if (err) return res.send(500, { error: err });
        return res.status(200).send('ok');
      });
});

router.delete('/task/:taskId', (req, res) => {

    Task.remove({ _id: req.params.taskId }, function (err) {
        if (err) return res.send(500, { error: err });
        return res.status(200).send('ok');
      });   
});

router.put('/task', (req, res) => {
    Task.findByIdAndUpdate(req.body._id, req.body, {new: true}, function(err, model){
        if (err) return res.send(500, { error: err });
        return res.status(200).send('ok');
    }); 
});

module.exports = router