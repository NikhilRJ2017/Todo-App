//acquring the Todo model
const Todo = require('../models/todo');

module.exports.getCount = function(req, res){

    //collecting total entries in db
    Todo.countDocuments({}, function(err, count){

        if(err){
            console.log("Error in getting the document count");
            return res.send("Error in getting the document count");
        }
        return res.send(`${count}`);
    });
    
};