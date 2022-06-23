//acquiring mongoose odm
const mongoose = require('mongoose');

//connecting to database
mongoose.connect('mongodb://localhost/todo_app');

//checking for connection
let db = mongoose.connection;

//error handling
db.on('error', console.error.bind(console, 'Error connecting to db'));

//if open
db.once('open', function(){
    console.log("Successfully connected to database");
});