var config = require('./config');
var log4js = require('log4js');
var log4js_config = require("./log4js.json");
log4js.configure(log4js_config, {
  cwd: config.logsPath
});
// getLogger
var _logApp = log4js.getLogger('logApp');
var _logDaily = log4js.getLogger('logDaily');

function logApp() {
  var _this = this;
  var port = process.env.PORT || 3050;
  var env = process.env.NODE_ENV || 'dev';
  // logs start info output
  _logApp.info("pid=" + process.pid + "|env=" + env + "|port=" + port);
};

module.exports = {
  logApp: logApp,
  loggerApp: _logApp,
  loggerDaily: _logDaily
};
