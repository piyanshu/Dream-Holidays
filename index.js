const express = require('express');
const bodyParser = require('body-parser');

const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

const db = require('./config/mongoose');
const user = require('./models/user');

app.get('/', function(req, res){
    res.redirect('/login');
});
app.get('/login', function(req, res){
    return res.render('login');
});
app.get('/register', function(req, res){
    return res.render('register');
})
app.listen(port, function(req, res){
    console.log('Server is up and running on port:', port);
});