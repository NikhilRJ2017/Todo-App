//acquring the mongoose odm
const mongoose = require('mongoose');

//collection schema
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

//creating model from schema
const Todo = mongoose.model('Todo_App', todoSchema);

//exporting model
module.exports = Todo;