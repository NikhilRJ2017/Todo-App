const express = require('express');
const app = express();
const PORT = 8000;
const db = require('./config/mongoose');


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('assets'));
app.use('/', require('./routes/index'));

app.listen(PORT, function (err) {  
    if(err){
        console.log("Error in connecting to the server");
        return;
    }

    console.log(`Server is up and running successfully on port ${PORT}`);
});