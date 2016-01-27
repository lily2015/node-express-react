;var formateMain = function () {};
formateMain.prototype = {
  //对数据数据做快排
  dataSort: function (arr, kw) {
    function quickSort(arr) {
      if (arr.length <= 1) {
        return arr;
      };
      var num = Math.floor(arr.length / 2);
      var arrV = arr.splice(num, 1)[0];
      var numValue = arrV[kw];
      var left = [];
      var right = [];
      for (var i = 0; i < arr.length; i++) {
        if (arr[i][kw] < numValue) {
          left.push(arr[i]);
        }
        else {
          right.push(arr[i]);
        }
      }
      return quickSort(left).concat(arrV, quickSort(right));
    };
    return quickSort(arr);
  },
  //按字节截取
  byteCut: function (str, limit) {  
    var _c = str;
    var c = _c.replace(/[^\u0000-\u00ff]/g,"aa"),
      count = 0, i = 0;
    if(c.length > limit){
      for(i; i<str.length; i++){
        var _clen = str.charAt(i).replace(/[^\u0000-\u00ff]/g,"aa").length;
        if(_clen == 1){
          count ++;
        }else if(_clen == 2){
          count += 2;
        };
        if(count > limit){
          break;
        };
      };
    };
    return str.substring(0,i);
  }
};
exports.fmt = new formateMain();
