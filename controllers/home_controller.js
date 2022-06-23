//acquring the Todo model
const Todo = require('../models/todo');

module.exports.home = function (req, res) {

    //Retrieving all the tasks present in db
    Todo.find({}, function (err, newTask) {
        if (err) {
            console.log('Error in fetching task from DB');
            return res.send("Error in fetching task from DB");
        }

        newTask.forEach(tasks=>{
            let myDate = new Date(tasks.due_date);
            tasks.due_date = myDate.toDateString();
        });
            
        //render the view
        return res.render('home', {
            title: "Todo App",
            task_lists: newTask
        });
    });

}