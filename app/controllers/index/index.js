var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , config = require('../../config/config')
  // , dataMall = require('./data-mall')
  , rq = require('../common/request')
  , FilmTicketBox = React.createFactory(require("../../react/build/index/index-reactOutput"));

exports.index = function(req, res, next) {
  // 页面的头部信息、config变量
  var docInfo = {
    "config": config,
    "title": "商城首页"
  };

  var params_mall = {};
  params_mall.apiName = 'Service/callback.mi/PageSubArea/MarketFirstPageNew.api';
  var res_data = new rq(params_mall);
  // 页面内容的react渲染出口
  res_data._rq(function(data){
    var reactHtml = ReactDOMServer.renderToString(React.createElement(FilmTicketBox, {data: data}));
    res.render('index', {
      docInfo: docInfo,
      reactOutput: reactHtml
    });
  });

}