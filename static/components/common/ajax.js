/**
 * @return {[type]} [description]
 */
var ajaxMain = function () {};

/* 主信息板块通用ajax事件 _d:{data:"响应的信息",callback:"回调设定的函数",param:"回调函数需要继承的参数值"} */
ajaxMain.prototype = {
  getAjax: function (dat) {
    var _d = {};
    _d.data = undefined;
    var _t = this;
    var p = [], k;
    var params = JSON.parse(dat.Jdat.params);
    for (k in params) {
      p.push(k + "=" + params[k]);
    };
    params = p.join('&');
    var _ajax = $.ajax({
      type: dat.Jtype || 'get',
      url: dat.Jurl,
      data: params,
      dataType: dat.JdataType || 'json'
    });
    _ajax.success(function (data) {
      _d.data = data;
      _d.obj = _t;
      if (dat.Param) {
        _d.param = dat.Param;
      }
      if (dat.Jback) {
        _d.callback = dat.Jback;
      }
      dat.Jcall.apply(_d);
    });
    if (!dat.Jerr) {
      _ajax.error(function (xhr, status) {
        alert('请求发生错误，请稍后刷新！');
        // dialogs.alert('请求发生错误，请稍后刷新！', '刷新', function () {
        //   window.location.reload();
        // });
      });
    };    
    return _ajax;
  }
};
/* 事件初始化 */
var ajax = new ajaxMain();