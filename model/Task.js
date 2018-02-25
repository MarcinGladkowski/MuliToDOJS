const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    }, 
    completed: {
        type: boolean,
        require: false
    }
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
