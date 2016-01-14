var config = require('./config');
var log4js = require('log4js');
var log4js_config = require("../../logs/log4js.json");
log4js.configure(log4js_config, {
  cwd: config.logsPath
});
// log info 
var _logApp = log4js.getLogger('logApp');

function logApp() {
  var _this = this;
  var port = process.env.PORT || 3050;
  var env = process.env.NODE_ENV || 'dev';

  // logs start info output
  _logApp.info("pid=" + process.pid + "|env=" + env + "|port=" + port);

  this.logApp_debug = function(mes) {
    _logApp.debug(mes);
  };
  this.logApp_info = function(mes) {
    _logApp.info(mes);
  };
  this.logApp_error = function(mes) {
    _logApp.error(mes);
  };
}

// log connect
var _logDaily = log4js.getLogger('logDaily');

function logDaily() {
  return log4js.connectLogger(_logDaily, {
    level: 'auto'
  });
}

module.exports = {
  logApp: logApp,
  logDaily: logDaily
};
