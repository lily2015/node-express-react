var request = require('../common/request');
// index page
exports.index = function(req, res, next) {
  res.render('index', {});
}
