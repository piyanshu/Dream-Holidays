const express = require('express');
const port = 8000;

const app = express();
app.get('/', function(req, res){
    res.send('Hello');
});
app.listen(port, function(req, res){
    console.log('Server is up and running on port:', port);
});