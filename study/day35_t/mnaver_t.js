$(function(){
  $('.search-input>input').click(function(){
    $('.logo-icon').addClass('display-none');
    $('.back-icon').removeClass('display-none');
    $('.search-btn-group1').addClass('display-none');
    $('.search-btn-group2').removeClass('display-none');
    $('.search-input').addClass('search-input-focus');
    $('.body').addClass('display-none');
    $('.search-list-box').removeClass('display-none');
  })
  $('.logo').click(function(){
    if($(this).find('.back-icon').hasClass('display-none')){
      return;
    }
    else{
      $('.logo-icon').removeClass('display-none');
      $('.back-icon').addClass('display-none');
      $('.search-btn-group1').removeClass('display-none');
      $('.search-btn-group2').addClass('display-none');
      $('.search-input').removeClass('search-input-focus');
      $('.body').removeClass('display-none');
      $('.search-list-box').addClass('display-none');
    }
  })
  $('.card-item').click(function(){
    $(this).toggleClass('card-item-select');
    $(this).find('.card-subs').toggleClass('card-subs-select')
    var count = $('.card-subs-select').length;
  if(count == 0){
    $('.subs-count-box').addClass('display-none')
  }
  else{
    $('.subs-count-box').removeClass('display-none')
    var str = count + '개 언론사 구독';
    $('.subs-count-box').text(str);
  }
  })
  $('.menu-item').click(function(){
    if($(this).hasClass('sel-pink')){
      $('.menu-list').addClass('menu-list2');
      $('.menu-plus').addClass('display-none');
    }
    else{
      $('.menu-list').removeClass('menu-list2');
      $('.menu-plus').removeClass('display-none');
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

  $('.enter-menu-item').click(function(){
    $(this).addClass('select').siblings().removeClass('select');
  })
  // 클릭한 요소에 select추가 다른형제에는 select제거
})