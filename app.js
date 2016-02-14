/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , config = require('./app/config/config')
  , loggerApp = require('./app/config/logs').loggerApp;

// express settings
require('./app/config/express')(app, config);

var env = process.env.NODE_ENV || 'dev';
var port = process.env.PORT || 3050;

app.listen(port);

console.log("pid=" + process.pid + "|env=" + env + "|port=" + port);
loggerApp.info("pid=" + process.pid + "|env=" + env + "|port=" + port);
// expose app
exports = module.exports = app;


