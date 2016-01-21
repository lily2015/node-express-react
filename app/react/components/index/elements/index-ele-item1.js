var React = require('react')
  , ReactDOMServer = require('react-dom/server');

var BoxOfficeTitle = React.createClass({
  render: function (){
    return (
      <header className="header">
        <div className="header_title">实时vv票房</div>
        <a href="javascript:;" className="btn_back"></a>
        <a href="javascript:;" className="btn_position"></a>
      </header>
    );
  }
});

module.exports = BoxOfficeTitle;