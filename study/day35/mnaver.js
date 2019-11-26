
$(function(){
  $('.search-input>input').click(function(){
    $('.grey_container').removeClass('display-none');
  })
  $('.back-i').click(function(){
    $('.grey_container').addClass('display-none');
  })
  $('.rct-close').click(function(){
    $('.grey_container').addClass('display-none');
  })
  var selapi = $('.btn-api-select').text();
  $('.api-item').click(function(){
    $(this).toggleClass('api-select');
    $(this).find('.plus-icon').toggleClass('check-icon');
    if($('.api-select').length > 0){
      $('.btn-api-select').removeClass('display-none');
      $('.btn-api-select').text($('.api-select').length + selapi);
    }else{
      $('.btn-api-select').addClass('display-none');
    }
  })
})