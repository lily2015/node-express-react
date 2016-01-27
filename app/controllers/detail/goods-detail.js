var React = require('react')
  , ReactDOMServer = require('react-dom/server')
  , config = require('../../config/config');

exports.goodsDetail = function(req, res, next) {
  // 页面的头部信息、config变量
  var docInfo = {
    "config": config
  };

  // 页面内容的react渲染出口
  res.render('detail/goods-detail', {
    docInfo: docInfo
  });
}