$(function(){
  $('.menu-list li').hover(function(){
    $(this).toggleClass('mint')
  })
  $('.btn').hover(function(){
    $(this).toggleClass('btn-slct')
  })
  $('.photocard').hover(function(){
    $(this).toggleClass('selcted-photocard')
    $(this).find('.photo').toggleClass('selcted-photo')
    $(this).find('.detail').toggleClass('selected-detail')
    $(this).find('i').toggleClass('selected-down')
  })
  $('.traveltype').hover(function(){
    $(this).find('div').toggleClass('type-slct')
    $(this).find('i').toggleClass('type-slct')
  })
  $('.comment').hover(function(){
    $(this).find('.active-bar').toggleClass('display-none')
  })
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 30
  });
  var swiper2 = new Swiper('.CommentSlide', {
    slidesPerView: 3,
    spaceBetween: 30
  });
})