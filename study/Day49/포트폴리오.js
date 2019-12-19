$(function(){
  $("a[href^='https://']").attr("target","_blank");
  // https로 링크걸린 a태그 새창으로 열게하기
  $('.bookmark').click(function(){
    $('.timetable').toggleClass('show')
    if($('.timetable').hasClass('show')){
      $('.timetable').animate({right : 0},500)
    }
    else{
      $('.timetable').animate({right : '-327px'},500)
    }
  })
  $('.menu-icon').click(function(){
    $('.menu-page').removeClass('display-none')
  })
  $('.menu-close').click(function(){
    $('.menu-page').addClass('display-none')
  })

  $('.nowshowing-movie').hover(function(){
    $(this).find('.nowshowing-hover').toggleClass('display-none')
    if($(this).hasClass('ranking')){
    
    }
  })
  $('.c-date').click(function(){
    $(this).addClass('c-date-hover').siblings().removeClass('c-date-hover')
  })
  

  var swiper = new Swiper('.poster-swipe', {
    autoplay: 3000,
    loop: true,
    navigation: {
      nextEl: '.btn-main-right',
      prevEl: '.btn-main-left',
    },
  });
  var swiper2 = new Swiper('.event-swipe', {
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.btn-event-right',
      prevEl: '.btn-event-left',
    },
  });
  var swiper3 = new Swiper('.movie-info', {
    slidesPerView: 'auto',
    spaceBetween: 30,
  });
  new fullpage('#fullpage', {
    navigation: true,
    parallax: true,
    anchors: ['page1', 'page2', 'page3'],
    navigationTooltips: ['영화순위', '현재상영작', '상영예정작'],
  });
})
