var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , config = require('../../config/config')
  , indexOutput = require("../../react/build/index/index-reactOutput");

// index page
exports.index = function(req, res, next) {
  var docInfo = {
    "config": config,
    "title": "商城首页"
  };
  var reactHtml = ReactDOMServer.renderToString(React.createElement(indexOutput, null));
  var reactHtml2 = ReactDOMServer.renderToString(React.createElement('h1', null, 'part2'));
  res.render('index', {
    docInfo: docInfo,
    reactOutput: reactHtml,
    reactOutput2: reactHtml2
  });
}