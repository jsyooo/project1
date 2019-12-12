$(function(){
  $('.menu').click(function(){
    $(this).addClass('sel-menu').siblings().removeClass('sel-menu')
    $('.selected').addClass('display-none')
    $(this).find('.selected').removeClass('display-none')
  })
})