//acquring the Todo model
const Todo = require('../models/todo');

module.exports.createTask = function (req, res) {
    //creating a task
    Todo.create({
        desc: req.body.task,
        category: req.body.category,
        due_date: req.body.date
    }, function (err, newTask) {

        if (err) {
            console.log("Error in creating task");
            return res.send('Error in creating task');
        }

        return res.redirect(200, '/');
    });

};