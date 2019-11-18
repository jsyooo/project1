$(function(){
	$('.keyboard').click(function(){
		$('.keyboard-icon').toggleClass('active');
	})
	$('.auto').click(function(){
		$('.auto-icon').toggleClass('active');
		$('.auto-box').toggle();
	})
	$('.more').click(function(){
		$(this).toggleClass('fold'); //접기를 더보기로 바꿈
		$('.more-box').toggle(); //박스 접는 역할
		$('.white-menu-sub1').removeClass('display-none');
		$('.white-menu-sub2').addClass('display-none'); //접을때 버튼 초기화
		$('.black-container').removeClass('display-none');
		$('.empty-container').addClass('display-none');
	})
	$('.r2-btn').click(function(){
		// 다음 페이지로 가야할지 이전페이지로 가야할지를 결정하는 변수
		// 1이면 다음페이지, -1이면 이전페이지.
		var addNum = 0;
		// 현재 페이지 번호 가져옴
		var currentPage = $('.page-current').text();
		// 가져온 페이지 번호는 문자열이어서 정수로 바꿈.
		currentPage = parseInt(currentPage);
		// 전체 페이지 번호 가져옴
		var totalPage = $('.page-total').text();
		// 가져온 페이지 번호는 문자열이어서 정수로 바꿈.
		totalPage = parseInt(totalPage);
		// 클릭한 버튼이 이전버튼이면
		if($(this).hasClass('prev')){
			addNum = -1;
		}
		// 클릭한 버튼이 다음버튼이면
		else{
			addNum = 1;
		}
		currentPage += addNum;
		// 현재페이지가 1페이지에서 total 페이지 사이가 아닌경우
		if(currentPage == 0){
			currentPage = totalPage;
		}else if(currentPage>totalPage){
			currentPage = 1;
		}
		$('.page-current').text(currentPage);
	})
	$('.api').hover(function(){
		$(this).find('.api-hover').toggle();
	})
	$('.subs').hover(function(){
		$('.viewnews').toggleClass('hover-border')
	})
	$('.more').click(function(){
		$('.service-btn').toggle();
	})
	$('.sv-close').click(function(){
		$('.more').click();
	})
	$('.menu-setting').click(function(){
		$('.white-menu-sub1').toggleClass('display-none');
		$('.white-menu-sub2').toggleClass('display-none');
		$('.black-container').toggleClass('display-none');
		$('.empty-container').toggleClass('display-none');
		// black-box 없어지고 네모박스
		// 서브메뉴 체크박스	
	})
	$('.cancel').click(function(){
		$('.white-menu-sub2').toggleClass('display-none');
		$('.white-menu-sub1').toggleClass('display-none');
		$('.black-container').toggleClass('display-none');
		$('.empty-container').toggleClass('display-none');
		// toggle();하면 display이 none <-> block 되므로 flex 해도 지워짐.
		// 태그의 style 속성으로 작업되므로 우선순위가 매우 높다.
		// toggle과 toggleClass를 잘못 사용하여 충돌되는 경우,
		// toggle에 있는 css가 적용된다. -> 원하지 않는 결과 
	})
	$('.menu-sub').hover(function(){
		$(this).toggleClass('hover-underline')
	})

})