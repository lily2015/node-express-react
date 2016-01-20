var React = require('react')
  , ReactDOMServer = require('react-dom/server');

var FilmTicketBox = React.createClass({
  render: function () {
    return (
      <div>
        <BoxOfficeTitle />
        <div className="index_tab">
          <BoxOfficeDateChoose />
        </div>
      </div>
    );
  }
});

module.exports = FilmTicketBox;