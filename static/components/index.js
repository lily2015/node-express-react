!function(){
  $("#example").on('click', function(){
    $.ajax({
      url: '/mall/api/MarketFirstPageNew',
      data: {},
      success: function(data){
        if(data){  
            $("#example").html(data);
        }
      }
    })
  })
}();