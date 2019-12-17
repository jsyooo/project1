$(function(){
  $('.bookmark').click(function(){
    $('.timetable').toggleClass('show')
    if($('.timetable').hasClass('show')){
      $('.timetable').animate({right : 0},500)
    }
    else{
      $('.timetable').animate({right : '-327px'},500)
    }
  })
  
  var swiper = new Swiper('.poster-swipe', {
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
})
