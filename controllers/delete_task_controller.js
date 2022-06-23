//acquring the Todo model
const Todo = require('../models/todo');

module.exports.deleteTask = function (req, res) {  

    //collecting the id's to delete
    let ids = req.body.selectedIds;

    //looping on all selected ids
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