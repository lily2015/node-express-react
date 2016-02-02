/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , config = require('./app/config/config')
  , http = require('http').Server(app)
  , io = require('socket.io')(http);

// express settings
require('./app/config/express')(app, config, io);

// logs
require('./app/config/logs').logApp(app);

var env = process.env.NODE_ENV || 'dev';

// Start the app by listening on <port>
var port = process.env.PORT || 3050;

http.listen(port);
console.log('Express app started on port ' + port + " || config environment is " + env); 
// expose app
exports = module.exports = app;


