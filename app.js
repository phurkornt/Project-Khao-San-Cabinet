const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');



const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use("/img",express.static('public/img'));
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false
}))


const Route = require('./routes/routes');

// ----------------------- Route --------------------------------

app.use('/', Route);


app.listen(3000);