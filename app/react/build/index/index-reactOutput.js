var React = require('react')
  , ReactDOMServer = require('react-dom/server');

var FilmTicketBox = React.createClass({displayName: "FilmTicketBox",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(BoxOfficeTitle, null), 
        React.createElement("div", {className: "index_tab"}, 
          React.createElement(BoxOfficeDateChoose, null)
        )
      )
    );
  }
});

module.exports = FilmTicketBox;;var BoxOfficeTitle = React.createClass({displayName: "BoxOfficeTitle",
  render: function (){
    return (
      React.createElement("header", {className: "header"}, 
        React.createElement("div", {className: "header_title"}, "实时票房"), 
        React.createElement("a", {href: "javascript:;", className: "btn_back"}), 
        React.createElement("a", {href: "javascript:;", className: "btn_position"})
      )
    );
  }
});
;var BoxOfficeDateChoose = React.createClass({displayName: "BoxOfficeDateChoose",
  render: function (){
    return (
      React.createElement("div", {className: "container_box"}, 
        React.createElement("ul", {className: "date"}, 
          React.createElement("li", {className: "pre_day"}, 
            React.createElement("p", {className: "btn_pre"}, "12-22")
          ), 
          React.createElement("li", {className: "now_day"}, 
            React.createElement("p", {className: "btn_now"}, "2015-12-23"), 
            React.createElement("div", {className: "img_now"}), 
            React.createElement("p", {className: "time_yet"}, "上次更新时间 11:30")
          ), 
          React.createElement("li", {className: "next_day"}, 
            React.createElement("p", {className: "btn_next remove-after"}, "12-24"), 
            React.createElement("div", {className: "img_next"})
          )
        )
      )
    );
  }
});