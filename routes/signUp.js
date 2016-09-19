// var express = require('express');
// var router = express.Router();
// var request = require('request');
// var path = require('path');
// var bodyParser = require('body-parser');
// var textParser = bodyParser.json();
// var session = require('express-session');
// var mongoose = require('mongoose');

// var passport = require('passport');
// var localStrategy = require('passport-local').Strategy;

// var urlParser = bodyParser.urlencoded({ extended: false});

// mongoose.connect('mongodb://localhost/users');

// var connectStatus = mongoose.connection;
// connectStatus.on('error', console.error.bind(console, 'connection error:'));
// connectStatus.once('open', function(){
//   console.log('MONGOOSE CONNECTED');
// });

// // <!--User-->

// var Schema = mongoose.Schema;

// var userSchema = new Schema({
//   email = { type: String, required: true, unique: true },
//   username = { type: String, required: true, unique: true },
//   password = { type: String, required: true, }

// });

// mongoose.model('User', userSchema);
// var User = mongoose.model('User');

// var strategy = new localStrategy(function(username, password, done){
//   User.findOne({ username: username }, function(err, user){
//     if (err) {
//       return done(err);
//     }
//     if (!user) {
//       return done(null, false, { message: 'Invalid user'});
//     }
//     if (user.password != password) {
//       return done(null, false, { message: 'Invalid password'});
//     }
//     return done(null, username);
//   });
// });

// passport.use(strategy);

// passport.serializeUser(function(user, done) {
//   console.log(user);
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     console.log(user);
//     done(err, user);
//   });
// });

// router.use(session({ secret: 'crazy cat', resave: false, saveUninitialized: true }));

// var initializer = passport.initialize();

// router.use(initializer);
// router.use(passport.session());





// router.get('/', function(req, res){
//   res.sendFile(path.join(__dirname + '/../public/signUp.html'));
// });

// router.post('/', urlParser, function(req, res){
//   console.log(req.body);
//   var user = new User ({
//     email = req.body.email;
//     username = req.body.username;
//     password = req.body.password
//   });
//   user.save(function(err) {
//     if(err) {
//       var err = 'Error, try again!';
//       if(err.code === 11000) {
//         var error = 'Invalid';
//       }
//       res.redirect('/');
//     } else {
//       res.redirect('/');
//     }
//   });
//   // passport.authenticate('local-signup', function() {

//   // })
// });

// module.exports = router;