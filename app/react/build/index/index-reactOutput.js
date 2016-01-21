var React = require('react')
  , ReactDOMServer = require('react-dom/server');

var BoxOfficeTitle = require('./elements/index-ele-item1')
  , BoxOfficeDateChoose = require('./elements/index-ele-item2');

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

module.exports = FilmTicketBox;