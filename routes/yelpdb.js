var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
var textParser = bodyParser.text();
var Yelp = require ('yelp');

router.use(textParser);

var yelp = new Yelp({
  consumer_key: 'f_e2C1Ee9pGfTfjQ07xCQA',
  consumer_secret: '8e2b_9ihXwWUFsOnxy-sW9AONQk',
  token: 'XUwi4KzX_G8kwbmhKYBmsGS_wpejKAmO',
  token_secret: '7DLokJd-6pA4jiRUbHQ9meu-Ex0',
});

router.post('/search', function(req, res){
  var searchResponse = req.body;
  var searchInput = JSON.parse(searchResponse);
  
  yelp.search(searchInput)
  .then(function(result) {
    console.log(result);
    res.send(result);
  });
});


module.exports = router;