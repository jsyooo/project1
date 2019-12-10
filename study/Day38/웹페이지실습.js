$(function(){
  $('.menu-list li').click(function(){
    $(this).addClass('mint').siblings().removeClass('mint');
  })
  $('.btn').hover(function(){
    $(this).toggleClass('btn-slct')
  })
  $(".when-input").datepicker({
    showMonthAfterYear:true //년도 먼저 나오고, 뒤에 월 표시
    ,changeYear: true //콤보박스에서 년 선택 가능
    ,changeMonth: true //콤보박스에서 월 선택 가능
    ,maxDate: "+1Y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)
    ,minDate: "0" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
  });
  $('.showonthemap').hover(function(){
    $(this).toggleClass('main-btn-hover')
  })
  $('.moreinfo').hover(function(){
    $(this).toggleClass('main-btn-hover')
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