var indexRouters = require('../routes/index')
  , searchRouters = require('../routes/search')
  , detailRouters = require('../routes/detail')
  , apiRouters = require('../routes/api');


module.exports = function(app) {
  // 商城首页
  app.use('/mall', indexRouters);

  // 搜索相关页面
  app.use('/mall/search', searchRouters);

  // 商品详情页相关页面 
  app.use('/mall/detail', detailRouters);

  // API
  app.use('/mall/api', apiRouters);

}
