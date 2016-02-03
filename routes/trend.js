var express = require('express');
var router = express.Router();
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
var textParser = bodyParser.json();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trends');

var connectStatus = mongoose.connection;
connectStatus.on('error', console.error.bind(console, 'connection error:'));
connectStatus.once('open', function(){
  console.log('MONGOOSE CONNECTED');
});

var db = mongoose.connection;

<!--Schema -->
var Schema = mongoose.Schema;
var trendsSchema = new Schema({
  name: { type: String, required: true },
  info: { type: String, required: true }

});

var trends = mongoose.model('trends', trendsSchema);

// var trending = new trends({
//   name: 'Cronut',
//   info: 'Cronut is a croissant-doughnut pastry invented by Chef Dominique Ansel and trademarked by his Bakery in New York City. The pastry is made by frying a laminated dough in grape seed oil. The fried pastry is then sugared, filled, and glazed.  The Boston Globe described the Cronut as a "food portmanteau". In December 2013, Time magazine named the cronut as one of the "25 Best Inventions" of 2013.'
// });
// trending.save();
// <!--End Schema -->

router.get('/trends', function(req, res){
  trends.find({}, function(err, data){
    if(err) console.error;
    res.send(data);
    // console.log(data);
  });
  
});

module.exports = router;






