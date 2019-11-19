	//원래 메뉴의 배열
	var oriMenu = ["dic", "news", "stock", "deal", "map", 
	"movie", "music", "book", "comic"];
	var selMenu = [];
	// 검은색 메뉴를 초기화하는 함수
	function initBlackMenu(){
		var i = 0;
		$('.black-container>a').each(function(){
			$(this).prop('class','') 			 //요소의 모든 클래스를 제거
			$(this).addClass('black-box'); //클래스 추가
			$(this).addClass('bg3');			 //클래스 추가
			$(this).addClass(oriMenu[i]);  //0번지의 oriMenu 배열 이름을 클래스로 추가
			if(i<5){
				$(this).addClass('box-menu') //박스메뉴 5개
			}
			i++;
		})
	}
	// 화이트박스가 닫히면서 해야할 작업들
	function closeWhiteBox(){
		//검은색 메뉴를 초기화할지 선택된 메뉴로 보여줄지 결정
		if(selMenu.length == 0){
			initBlackMenu(); // 원래 메뉴 호출하기(선택한 메뉴가 0개이면)
		}else{
			//선택된 메뉴들 호출하기
		}
	}
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
			$('.checkbox').addClass('display-none');
			if(!$(this).hasClass('fold')){ //fold클래스가 없어지면서 닫힘.
				closeWhiteBox();
			}
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
		$('.menu-setting').click(function(){ /* 메뉴설정 버튼 클릭할 때 */
			$('.white-menu-sub1').toggleClass('display-none');
			$('.white-menu-sub2').toggleClass('display-none');
			$('.black-container .black-box').each(function(){
				if(!$(this).hasClass('box-menu')){
					$(this).addClass('display-none')
				}else{
					$(this).prop('class','box-menu') //클래스에 box-menu만 남기려는 작업
				}
			})
			// $('.empty-container').toggleClass('display-none');
			// black-box 없어지고 네모박스
			// 서브메뉴 체크박스
			$('.checkbox').removeClass('display-none');
		})

		/* 취소버튼 누를때! */
		$('.cancel').click(function(){
			$('.white-menu-sub2').toggleClass('display-none');
			$('.white-menu-sub1').toggleClass('display-none');
			/* toggle();하면 display이 none <-> block 되므로 flex 해도 지워짐.
			 태그의 style 속성으로 작업되므로 우선순위가 매우 높다.
			 toggle과 toggleClass를 잘못 사용하여 충돌되는 경우,
			 toggle에 있는 css가 적용된다. -> 원하지 않는 결과 */
			$('.checkbox').addClass('display-none');
			closeWhiteBox();
		})
		// $('.menu-sub').hover(function(){
		// 	$(this).toggleClass('hover-underline');
		// })
		$('.menu-sub').click(function(){
			/*체크를 해제하는 상황은 신경 쓸 필요 없다.
			체크를 해야하는 상황은 신경써야함. 최대 선택 갯수는 5개이므로*/
			if(!$(this).find('.checkbox').hasClass('checked')){
				if($('.checked').length == 5){ // = checked된 항목의 갯수를 나타냄
					alert('최대 5개까지 선택 가능합니다.');
					return;
				}
			}
			/*  */
			$(this).find('.checkbox').toggleClass('checked');
			if($(this).find('.checkbox').hasClass('checked')){
				$(this).find('.checkbox-input').prop('checked', true);
			}else{
				$(this).find('.checkbox-input').prop('checked', false);
			}
			$('.okay').toggleClass('okay-act');
		})
	})