/**
 * Module dependencies.
 */

var express = require('express');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// if test env, load example file
var config = require('./app/config/config');
var app = express();

// express settings
require('./app/config/express')(app, config);

// logs
require('./app/config/logs')(app);

var env = process.env.NODE_ENV || 'dev';

// Start the app by listening on <port>
var port = process.env.PORT || 3050;
app.listen(port);

console.log('Express app started on port ' + port + " || config environment is " + env);

// expose app
exports = module.exports = app;


