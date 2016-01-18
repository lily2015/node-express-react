var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , Loader = React.createFactory(require("../../react/index/demo"));

// index page
exports.index = function(req, res, next) {

  var reactHtml = ReactDOMServer.renderToString(React.createElement('h1', null, 'Hello, world!!'));
  
  res.render('index', {reactOutput: reactHtml});
}
