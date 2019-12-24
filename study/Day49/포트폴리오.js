$(function(){
  // https로 링크걸린 a태그 새창으로 열게하기
  $("a[href^='https://']").attr("target","_blank");
  // 인원수 증가 감소
  $('.plus').click(function(){
    var num = $( this ).parent().prev().val();
    num++;
    if(num>4){
      return;
    }
    $(this).parent().prev().val(num);
  })
  $('.minus').click(function(){
    var num = $( this ).parent().prev().val();
    num--;
    if(num<0){
      return;
    }
    $(this).parent().prev().val(num);
  })

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
  // 좌석선택 영화선택
  $('.gotoseats').click(function(){
    $('.body1').addClass('display-none')
    $('.body2').removeClass('display-none')
  })
  $('.gotomovie').click(function(){
    $('.body2').addClass('display-none')
    $('.body1').removeClass('display-none')
  })

  // 영화예매>인원수 선택
  
  $('.plus').click(function(){
    $('.white-box2').removeClass('display-none')
  var cnt1 = $('#adult').val();
    if(cnt1>0){
      $('.adult').removeClass('display-none')
      $('.adult-w').text(11000*cnt1+'원')
    }
  var cnt2 = $('#teenager').val();
    if(cnt2>0){
      $('.teen').removeClass('display-none')
      $('.teen-w').text(9000*cnt2+'원')
    }
  var cnt3 = $('#children').val();
    if(cnt3>0){
      $('.child').removeClass('display-none')
      $('.child-w').text(7000*cnt3+'원')
    }
  })
  $('.minus').click(function(){
    var cnt1 = $('#adult').val();
    if(cnt1==0){
      $('.adult').addClass('display-none')
    }
  var cnt2 = $('#teenager').val();
    if(cnt2==0){
      $('.teen').addClass('display-none')
    }
  var cnt3 = $('#children').val();
    if(cnt3==0){
      $('.child').addClass('display-none')
    }
  if(cnt1==0 && cnt2==0 && cnt3==0){
    $('.white-box2').addClass('display-none')
  }
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
