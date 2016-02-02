/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , config = require('./app/config/config')
  , server = require('http').createServer(app)
  , io = require('socket.io')(server);

// express settings
require('./app/config/express')(app, config, io);

// logs
require('./app/config/logs').logApp(app);

var env = process.env.NODE_ENV || 'dev';

// Start the app by listening on <port>
var port = process.env.PORT || 3050;

server.listen(port);
console.log('Express app started on port ' + port + " || config environment is " + env); 
// expose app
exports = module.exports = app;


