// acquring the express
const express = require('express');

//firing up the express server
const app = express();

//defining port
const PORT = 8000;

//acquiring body parser middleware
const bodyParser = require('body-parser');

//acquiring mongoose odm
const db = require('./config/mongoose');

//for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//setting up the ejs view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//setting up the static files
app.use(express.static('assets'));

//routing the request towards the root route index.js
app.use('/', require('./routes/index'));

//listening on the port
app.listen(PORT, function (err) {  
    if(err){
        console.log("Error in connecting to the server");
        return;
    }
    console.log(`Server is up and running successfully on port ${PORT}`);
});