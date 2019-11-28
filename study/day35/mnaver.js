
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
  $('.menu-box').click(function(){
    var index = $('.menu-box').index(this);
    if(index > 5){
      $('.btn-menuplus').removeClass('display-none');
      $('.menu-list').removeClass('menu-list-change');
    }
    else{
      $('.btn-menuplus').addClass('display-none');
      $('.menu-list').addClass('menu-list-change');
    }
  })
  var tabMenu = new Swiper('.menu-list-container', {
    spaceBetween: 10,
    slidesPerView: 'auto',
    centeredSlides: true,
    // centeredSlidesBounds:true,
    touchRatio: 1,
    slideToClickedSlide: true,
    hashNavigation: true,
  });
  var tabContents = new Swiper('.tabContents', {
    spaceBetween: 10,
    hashNavigation: true,
  });
  // tabMenu와 tabContents를 연결해줌.
  tabContents.controller.control = tabMenu;
  tabMenu.controller.control = tabContents;

  tabMenu.slideTo(7,0);
  tabContents.slideTo(7,0);

  $('.btn-drama').click(function(){
    $(this).addClass('btn-drama2');
    $('.btn-show').removeClass('btn-show2');
    $(this).find('.dramai').addClass('dramai2');
    $('.btn-show').find('.showi').removeClass('showi2');
  })
  $('.btn-show').click(function(){
    $(this).addClass('btn-show2');
    $('.btn-drama').removeClass('btn-drama2');
    $(this).find('.showi').addClass('showi2');
    $('.btn-drama').find('.dramai').removeClass('dramai2');
  })
})