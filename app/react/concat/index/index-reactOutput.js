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

module.exports = FilmTicketBox;;var BoxOfficeTitle = React.createClass({
  render: function (){
    return (
      <header className="header">
        <div className="header_title">实时票房</div>
        <a href="javascript:;" className="btn_back"></a>
        <a href="javascript:;" className="btn_position"></a>
      </header>
    );
  }
});
;var BoxOfficeDateChoose = React.createClass({
  render: function (){
    return (
      <div className="container_box">
        <ul className="date">
          <li className="pre_day">
            <p className="btn_pre">12-22</p>
          </li>
          <li className="now_day">
            <p className="btn_now">2015-12-23</p>
            <div className="img_now"></div>
            <p className="time_yet">上次更新时间 11:30</p>
          </li>
          <li className="next_day">
            <p className="btn_next remove-after">12-24</p>
            <div className="img_next"></div>
          </li>
        </ul>
      </div>
    );
  }
});