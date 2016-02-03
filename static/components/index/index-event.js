;!function(){
  $("#example").on('click', function(){
    var $this = $(this);
    apiAjax.pageLoad(function(){
      $this.html(this.data);
    })
  })
}();