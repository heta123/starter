var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


var logger = function(req, res, next){
    console.log('logging..');
    next();
}

app.use(logger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//set static path
app.use(express.static(path.join(__dirname, 'public')))
app.get('/',function(req,res){
    res.send('Hello World');
})
app.listen(8080,function(req,res){
    console.log('listening to port 8080...');
});
    
   

