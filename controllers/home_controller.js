const Todo = require('../models/todo');

module.exports.home = function (req, res) {

    Todo.find({}, function (err, newTask) {
        if (err) {
            console.log('Error in fetching task from DB');
            return;
        }

        newTask.forEach(tasks=>{
            let myDate = new Date(tasks.due_date);
            tasks.due_date = myDate.toDateString();
        });
            
        return res.render('home', {
            title: "Todo App",
            task_lists: newTask
        });
    });

}