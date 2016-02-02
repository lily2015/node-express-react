var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , config = require('../../config/config')
  , rq = require('../common/request');

var FilmTicketBox = React.createFactory(require("../../react/build/index/index-reactOutput"));

var mainport = process.env.MAINPORT || '4050';

exports.index = function(app, io){
  app.use(function(err, req, res, next) {
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

    // 首页可能感兴趣的商品列表
    var params_mall_list = {};
    params_mall_list.apiName = 'Service/callback.mi/ECommerce/RecommendProducts.api';
    params_mall_list.apiParams = {};
    var res_mall_list = new rq(params_mall_list);
    io.sockets.on('connection', function(socket){
      /*socket.on('more list', function(params){
        params_mall_list.apiParams = params;
        res_mall_list._rq(function(d_mall_list){
          var reactMallList = ReactDOMServer.renderToString(React.createElement(FilmTicketBox, {data: d_mall_list}));
        });
        io.emit('more list', 'reactMallList');
      });*/
      socket.emit('news', { hello: 'world' });
      socket.on('my other event', function (data) {
        console.log(data);
      });
      socket.broadcast.emit('message','kan  your hole family');
    });
  });
}


