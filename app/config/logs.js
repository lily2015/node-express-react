var config = require('./config')
  , log4js = require('log4js')
  , log4js_config = require("./log4js.json");

log4js.configure(log4js_config, {
  cwd: config.logsPath
});
// getLogger
var _logApp = log4js.getLogger('logApp')
  , _logDaily = log4js.getLogger('logDaily');

module.exports = {
  loggerApp: _logApp,
  loggerDaily: _logDaily
};
