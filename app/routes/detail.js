var detail = require('../controllers/detail/goods-detail')
  , detailCoupons = require('../controllers/detail/detail-coupons')
  , detailImg = require('../controllers/detail/detail-img');
var express = require('express');
var router = express.Router();

// 搜索首页
router.get('/', detail.goodsDetail);

// 搜索列表/结果页
router.get('/coupons', detailCoupons.detailCoupons);

// 搜索列表筛选页
router.get('/img', detailImg.detailImg);


module.exports = router;
