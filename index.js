const express = require('express');
const bodyParser = require('body-parser');

const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.send('Hello');
});
app.listen(port, function(req, res){
    console.log('Server is up and running on port:', port);
});