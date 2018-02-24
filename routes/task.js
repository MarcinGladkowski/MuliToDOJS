const reader = require('../reader/reader.js');
const express = require('express');
const router = express.Router();

router.get('/task', (req, res) => {
    
    reader.readFile().then(
        val => res.send(val)
    );
    
});

router.post('/task', (req, res) => {

    let newTask = req.body;

    reader.readFile().then(
        (taskList) => {
            return JSON.stringify({ "tasks" : [...taskList.tasks, newTask]});
        }
    ).then((result) => {
        reader.writeFile(result).then(
            result => res.send(result)
        );
    });

});

router.delete('/task', (req, res) => {

    let eventTask = req.body;

    reader.readFile().then(
        (taskList) => {
            taskList.tasks.splice(eventTask.id, 1);
            return JSON.stringify({ "tasks" : [...taskList.tasks]});
        }
    ).then((result) => {
        reader.writeFile(result).then(
            result => res.send(result)
        );
    });

});

router.put('/task', (req, res) => {

    let eventTask = req.body;
    
    reader.readFile().then(
        (taskList) => {
            let finded = taskList.tasks[eventTask.id];
            finded.completed = eventTask.value;
            return JSON.stringify({ "tasks" : [...taskList.tasks]});
        }
    ).then((result) => {
        reader.writeFile(result).then(
            result => res.send(result)
        );
    });

   
});

module.exports = router