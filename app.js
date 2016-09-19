var express = require('express');
var app = express();
var yelpdb = require('./routes/yelpdb.js');
// var signUp = require('./routes/signUp.js');
// var trendDb = require('./routes/trend.js');
var path = require('path');

app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));

app.use('/info', yelpdb);
// app.use('/info', trendDb);

// app.get('/login', function(req, res) {
//   res.sendFile(path.join(__dirname + '/public/views/login.html'));
// });

app.get('/register', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/register.html'));
});

app.listen(process.env.PORT || 1337, function (){
  console.log('icrave is running on port 1337');
});