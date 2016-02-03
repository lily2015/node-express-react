var apiAjaxMain = function () {
  this.apiServer = '';
};

apiAjaxMain.prototype = { 
  pageLoad: function(cb){
    var _url = this.apiServer + '/mall/api/MarketFirstPageNew';
    ajax.getAjax({
      "Jurl": _url,
      "Jback": cb
    });
  },
  mustPath: function(){}
};

var apiAjax = new apiAjaxMain();