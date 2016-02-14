/**
 * Module dependencies.
 */

var express = require('express')
  , app = express()
  , config = require('./app/config/config')
  , loggerApp = require('./app/config/logs').loggerApp;

// express settings
require('./app/config/express')(app, config);

// logs
// require('./app/config/logs').logApp(app);

var env = process.env.NODE_ENV || 'dev';

// Start the app by listening on <port>
var port = process.env.PORT || 3050;

app.listen(port);
console.log('Express app started on port ' + port + " || config environment is " + env);
loggerApp.info("pid=" + process.pid + "|env=" + env + "|port=" + port);
// expose app
exports = module.exports = app;


