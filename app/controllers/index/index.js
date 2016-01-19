var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , config = require('../../config/config')
  , Loader = React.createFactory(require("../../react/index/demo"));

// index page
exports.index = function(req, res, next) {
  var docInfo = {
    "config": config,
    "title": "商城首页"
  };
  var reactHtml = ReactDOMServer.renderToString(React.createElement('h1', null, 'Hello, world!!'));
  res.render('index', {reactOutput: reactHtml, docInfo: docInfo});
}