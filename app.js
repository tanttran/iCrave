var express = require('express');
var app = express();
var yelpdb = require('./routes/yelpdb.js');
var signUp = require('./routes/signUp.js');
var trendDb = require('./routes/trend.js');
var path = require('path');


app.use(express.static('public'));

app.use('/info', yelpdb);
app.use('/info', trendDb);

app.listen(1337);
console.log('We are running');