/**
 * Module dependencies.
 */
var express = require('express')
  , logger = require('morgan')
  , cookieParser = require('cookie-parser')
  , bodyParser = require('body-parser');
// var template = require('./template');

module.exports = function (app, config, io) {
  
  //ejs 模板
  app.set('view engine', 'ejs');
  app.engine('.html', require('ejs').__express);
  app.set('views', config.templatePath);

  app.use(express.static(config.staticPath));
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  //router config
  require('./routes')(app);

  // io
  require('./io')(app, io);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });

}
