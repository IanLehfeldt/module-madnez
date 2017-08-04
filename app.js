var express = require('express');
var bodyParser = require('body-parser');
var moduleThree = require('./moduleThree.js');

var app = express();
var port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
//var convertToDollars = require('./convertToDollars.js');
//var randomNumber = require('./randomNumber.js');

//Testing if randomNumber works in node.
//console.log(randomNumber(100, 1000000));

//Testing if convertToDollars works in node.
//console.log(convertToDollars(123456789));
var getMoney = moduleThree.accountBalance + moduleThree.currency;
//Testing if they both work together..

app.get('/module-madnez', function(req, res){
    res.send(getMoney);
});

console.log(moduleThree.accountBalance + moduleThree.currency);
app.listen(port, function() {
    console.log('Listening to port:', port);
})
