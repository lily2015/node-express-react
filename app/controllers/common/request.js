var rq = require('request-promise')
  , config = require('../../config/config')
  , loggerDaily = require('../../config/logs').loggerDaily;

module.exports = function(paramsObj) {
  var baseUrl = 'http://' + config.api_server;
  var options = {
    method: 'GET',
    baseUrl: paramsObj.baseUrl || baseUrl,
    uri: paramsObj.apiName,
    qs: paramsObj.apiParams || {},
    json: paramsObj.json || true,
    headers: paramsObj.headers || {}
  };

  this._rq = function(cb) {
    var _this = this;
    rq(options)
      .then(function(res){
        res.config = config;
        cb(res);
        _this._then(res);
        loggerDaily.info(options);
      })
      .catch(function(err){
        _this._err(err);
        console.log(err);
        loggerDaily.error(err);
      })
  };

  this._then = function(res){
    
  };

  this._err = function(err){
    
  };

};
