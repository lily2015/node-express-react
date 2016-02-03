var React = require('react')
  , ReactDOMServer = require('react-dom/server');

var BoxOfficeTitle = require('./elements/index-ele-item1')
  , BoxOfficeDateChoose = require('./elements/index-ele-item2');

var FilmTicketBox = React.createClass({
  render: function () {
    return (
      <div>
        <BoxOfficeTitle />
        <div id="example">{this.props.data.config.root}</div>
        <div className = "index_tab">
          <BoxOfficeDateChoose />
        </div>
      </div>
    );
  }
});

module.exports = FilmTicketBox;