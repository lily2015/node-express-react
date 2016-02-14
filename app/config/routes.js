var indexRouters = require('../routes/index')
  , searchRouters = require('../routes/search')
  , detailRouters = require('../routes/detail')
  , apiRouters = require('../routes/api')
  , loggerApp = require('./logs').loggerApp;


module.exports = function(app) {
  // Root
  app.get('/', function(req, res){
    console.log('path should be add "/mall"');
    loggerApp.warn('path should be add "/mall"');
  });

  // 商城首页
  app.use('/mall', indexRouters);

  // 搜索相关页面
  app.use('/mall/search', searchRouters);

  // 商品详情页相关页面 
  app.use('/mall/detail', detailRouters);

  // API
  app.use('/mall/api', apiRouters);

}
