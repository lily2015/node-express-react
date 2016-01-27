var index = require('../controllers/index/index');
var express = require('express');
var router = express.Router();

//首页
router.get('/', index.index);

module.exports = router;
