var express = require('express');
var router = express.Router();
var request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
var textParser = bodyParser.json();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://heroku_zzsgwjzr:6o9645sk79daeec34sb4d30e6o@ds035766.mlab.com:35766/heroku_zzsgwjzr');

var connectStatus = mongoose.connection;
connectStatus.on('error', console.error.bind(console, 'connection error:'));
connectStatus.once('open', function(){
  console.log('MONGOOSE CONNECTED');
});

var db = mongoose.connection;

<!--Schema -->
var Schema = mongoose.Schema;

var trendsSchema = new Schema({  
    food: {
      name: String,
      overview: String,
      votes: Number
    },
    fashion: {
      name: String,
      overview: String,
      votes: Number
    },
    fitness: {
      name: String,
      overview: String,
      votes: Number
    }
});

var trends = mongoose.model('trends', trendsSchema);

// var trending = new trends({
//   food: {
//       name: "Heirloom Beyond the Tomato",
//       overview: "You’ve probably heard of the word “heirloom,” before but have been wondering what it really means. Heirloom crops are essentially “old-world” plant breeds that existed long before conventional growing and breeding practices dominated U.S. agriculture, which means their distinct flavors and traits have been preserved for centuries. Until recently, finding heirloom ingredients — including the now mainstream heirloom tomatoes — in a national supermarket was a novelty. Now, packaged products with heirloom ingredients (think rice, tea, popcorn, cocoa and peppermint) are popping up in Whole Foods Market’s grocery aisle, and everyone is gobbling them up.",
//       votes: 0
//   },
//   fashion: {
//       name: "The New High Neckline",
//       overview: "Conservative dressing was an unexpected change for many fashion houses showing this season, and it couldn't have been more evident in the buttoned-up, high-collared looks that came down the runways. From dickies at Christian Dior to turtleneck dresses at Prada, it's not typically the direction designers take for a Spring season, but it's one that might be a welcome antidote to all the sheer that's becoming a style standard.",
//       votes: 0
//   },
//   fitness: {
//       name: "Outdoor activities",
//       overview: "Outdoor activities often include hiking, canoeing, kayaking, and games or sports. Outdoor activities also can include high-adventure programs such as overnight camping trips and mountain climbing. This more recent trend for health and fitness professionals to offer outdoor activities for their clients began in 2010. In that year, “outdoor activities” was no. 25 in the annual survey and, in 2011, it ranked no. 27. In 2012, “outdoor activities” was no. 14 and, in 2013, “outdoor activities” was ranked no. 13; in 2014, it was no. 14; and in 2015, it was no. 12. Outdoor activities can be done with family and friends, with a group, or by yourself. Some personal trainers use outdoor activities as a form of small-group personal training.",
//       votes: 0
//   }
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