var indexApi = require('../controllers/api/indexApi');
var express = require('express')
  , router = express.Router();

//首页
router.get('/MarketFirstPageNew', indexApi.MarketFirstPageNew);

module.exports = router;
