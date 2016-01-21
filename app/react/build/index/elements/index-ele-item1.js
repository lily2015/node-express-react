var React = require('react')
  , ReactDOMServer = require('react-dom/server');

var BoxOfficeTitle = React.createClass({displayName: "BoxOfficeTitle",
  render: function (){
    return (
      React.createElement("header", {className: "header"}, 
        React.createElement("div", {className: "header_title"}, "实时vv票房"), 
        React.createElement("a", {href: "javascript:;", className: "btn_back"}), 
        React.createElement("a", {href: "javascript:;", className: "btn_position"})
      )
    );
  }
});

module.exports = BoxOfficeTitle;