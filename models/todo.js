const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    desc:{
        type: String,
        required: true
    },
    category:{
        type: String,
        default: "other",
        required: true
    },
    due_date: {
        type: String,
        required: true
    }
});

const Todo = mongoose.model('Todo_App', todoSchema);

module.exports = Todo;