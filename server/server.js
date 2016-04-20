// BASE SETUP
//============================================
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// SESSION & PASSPORT
//============================================
var session = require('express-session');
var passport = require('passport');

mongoose.connect('mongodb://localhost/borrow');

// MIDDLEWARE
//============================================
require('./config/middleware.js')(app, express);

var port = process.env.PORT || 3000;

// ROUTES FOR OUR API
//============================================
require('./routers/routes.js')(app, express);

// ROUTES FOR FACEBOOK CONFIG
//============================================
require('./config/facebookConfig.js')(app, session, passport);
require('./routers/routes.js')(app, express, passport);

// START THE SERVER
//============================================
app.listen(port, function(err) {
  if (err) {
    console.log(err);
  }
  console.log('Borrow App up and running on port: ' + port);
});