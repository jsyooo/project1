$(function(){
  // https로 링크걸린 a태그 새창으로 열게하기
  $("a[href^='https://']").attr("target","_blank");
  // 책갈피(상영시간표) fold/unfold
  $('.bookmark').click(function(){
    $('.timetable').toggleClass('show')
    if($('.timetable').hasClass('show')){
      $('.timetable').animate({right : 0},500)
    }
    else{
      $('.timetable').animate({right : '-327px'},500)
    }
  })
  // main>이벤트 배너 hover
  $('.event-box').hover(function(){
    $(this).find('.event-hover').toggleClass('display-none')
  })
  // menu창 열기
  $('.menu-icon').click(function(){
    $('.menu-page').removeClass('display-none')
  })
  // menu창 닫기
  $('.menu-close').click(function(){
    $('.menu-page').addClass('display-none')
  })
  // 영화정보>영화 hover 효과
  $('.nowshowing-movie').hover(function(){
    $(this).find('.nowshowing-hover').toggleClass('display-none')
    if($(this).hasClass('ranking')){
    
    }
  })
  // 영화예매>각 항목(날짜,영화,시간) 선택할때
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
