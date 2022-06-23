const Todo = require('../models/todo');

module.exports.deleteTask = function (req, res) {  

    let ids = req.body.selectedIds;

    ids.forEach(id => {
        Todo.findByIdAndDelete(id, function(err){
            if(err){
                console.log("Error in deleting an contact from database");
                return res.send("Error in deleting an contact from database");
            }
        });
    });

    return res.redirect(200, '/')
}