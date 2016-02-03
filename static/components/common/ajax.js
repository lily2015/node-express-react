/**
 * @return {[type]} [description]
 */
;var ajaxMain = function () {};

/* 主信息板块通用ajax事件 _d:{data:"响应的信息",callback:"回调设定的函数",param:"回调函数需要继承的参数值"} */
ajaxMain.prototype = {
  getAjax: function (dat) {
    var _d = {};
    _d.data = undefined;
    var _t = this;
    var p = [], k;
    var params = dat.Jparams && dat.Jdat.params ? JSON.parse(dat.Jdat.params) : {};
    for (k in params) {
      p.push(k + "=" + params[k]);
    };
    params = p.join('&');
    $.ajax({
      type: dat.Jtype || 'get',
      url: dat.Jurl,
      data: params,
      dataType: dat.JdataType || 'html',
      success: function (data) {
        _d.data = data;
        _d.obj = _t;
        if (dat.Jparams) {
          _d.param = dat.Jparams;
        }
        if (dat.Jback) {
          _d.callback = dat.Jback;
          dat.Jback.apply(_d);
        }
        if(dat.Jcall){
          dat.Jcall.apply(_d);
        };
      },
      error: function (xhr, status) {
        alert('请求发生错误，请稍后刷新！');
        // dialogs.alert('请求发生错误，请稍后刷新！', '刷新', function () {
        //   window.location.reload();
        // });
      }
    })
  }   
};
/* 事件初始化 */
var ajax = new ajaxMain();