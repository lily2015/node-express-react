var Search = require('../controllers/search/search')
  , List = require('../controllers/search/search-list')
  , Filter = require('../controllers/search/search-filter');
var express = require('express');
var router = express.Router();

// 搜索首页
router.get('/', Search.searchIndex);

// 搜索列表/结果页
router.get('/list', List.searchList);

// 搜索列表筛选页
router.get('/filter', Filter.searchListFilter);


module.exports = router;
