var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , config = require('../../config/config')
  , rq = require('../common/request');

var FilmTicketBox = React.createFactory(require("../../react/build/index/index-reactOutput"));

exports.index = function(req, res, next){
  // 页面的头部信息、config变量
  var docInfo = {
    "config": config,
    "title": "商城首页"
  };

  // 首页分类模块信息
  var params_mall = {};
  params_mall.apiName = 'Service/callback.mi/PageSubArea/MarketFirstPageNew.api';
  var res_mall = new rq(params_mall);

  res_mall._rq(function(d_mall){
    var reactMall = ReactDOMServer.renderToString(React.createElement(FilmTicketBox, {data: d_mall}));
    res.render('index', {
      docInfo: docInfo,
      reactOutput: reactMall
    });
  });
}


