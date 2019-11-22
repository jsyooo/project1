	//원래 메뉴의 배열
	var oriMenu = ["dic", "news", "stock", "deal", "map", 
	"movie", "music", "book", "comic"];
	var selMenu = [];			//확인버튼을 눌러 확정된 메뉴들
	var selMenuTmp = [];	//메뉴설정에서 선택된 메뉴들
	
	/* 메뉴설정 클릭 후 확인버튼을 눌렀을 때
		 메뉴 설정 클릭 후 초기화버튼을 눌렀을 때
		 메뉴 설정 클릭 후 취소 버튼을 눌렀을 때
		 x버튼을 눌렀을 때
		 접기버튼을 눌렀을 때
		 검은색 메뉴부분을 화면에 출력하는 함수 */
	function initBlackMenu(){
		var i = 0;
		//메뉴설정에서 선택된 메뉴가 있는 경우
		if(selMenu.length != 0){
			$('.black-container>a').each(function(){
				$(this).prop('class','') 	//클래스 비우기
				if(i<selMenu.length){
					$(this).addClass('black-box');	//클래스 추가 (메뉴배치)
					$(this).addClass('bg3');			  //클래스 추가 (bg-img)
					$(this).addClass(selMenu[i]);   //클래스 추가 (bg-position)
					//selMenu 배열 중 i번째 번지에 있는 클래스 이름 추가
				}else{
					$(this).addClass('display-none'); //확인누른다음 박스 빈박스들 안보이게
				}
				if(i<5){
					$(this).addClass('box-menu') //빈박스 메뉴 5개
				}
				i++;
		  })
		}else{ //초기화하거나 메뉴를 선택 안한 경우(기본설정메뉴) selMenu.length=0
			$('.black-container>a').each(function(){
				$(this).prop('class','') 	//클래스 비우기
				$(this).addClass('black-box');	//클래스 추가 
				$(this).addClass('bg3');			  //클래스 추가
				$(this).addClass(oriMenu[i]);   
				//oriMenu 배열 중 i번째 번지에 있는 클래스 이름 추가
				if(i<5){
					$(this).addClass('box-menu'); //박스메뉴 5개
				}
				i++; //i가 하나씩 커지면서 반복
		  })
		}
	}
	
	/* 메뉴설정을 눌렀을 때, 검은색 메뉴와 빈 박스를 출력하는 함수 
	arr를 기준으로 선택된 메뉴들을 빈 박스 또는 위 검은색 메뉴로 배치
	arr: 함수가 실행되기 위해 필요한 정보. */
	function drawMenu(arr){
		if(arr.length > 5){
			return; 	//작업중단. 다른 작업 안하게 하기 (예외처리!)
		}
		var i = 0;
		$('.black-container>a').each(function(){
			$(this).prop('class','') 			
			if(i < arr.length){
				$(this).addClass('black-box'); 
				$(this).addClass('bg3');			
				$(this).addClass(arr[i]);
			}
			$(this).addClass('box-menu');
		
			if(i>4){
				$(this).addClass('display-none');
			}
			i++;
		})
	}
	
	/* 메뉴설정을 눌렀을 때, arr를 기준으로 input checkbox의 checked 값과 
		체크이미지의 선택여부를 결정하는 함수. 선택된 메뉴와 체크박스를 일치시키는 함수
		호출되는 상황: 메뉴를 선택한 후 다시 메뉴설정을 눌렀을 때 */
	function setInputCheckbox(arr){
		$('.checkbox-input').each(function(){
			/* 체크박스의 value를 가져옴 */
			var value = $(this).val();
			/* value가 arr에 있는지 확인 */
			var pos = arr.indexOf(value);
			// 있으면 체크박스를 체크하고 (value가 arr에 있으면 indexOf(value) 값이 -1)
			if(pos != -1){
				$(this).prop('checked', true);
				$(this).parent().addClass('checked');
			}
			// 없으면 체크박스를 해제한다. (value가 arr에 없으면 indexOf(value) 값이 번지)
			else{
				$(this).prop('checked', false);
				$(this).parent().removeClass('checked');
			}
		})
	}
	/* 실시간 검색어 차트 올라가는 함수 */
	// function live(height){
	// 	$('.livesearch li').eq(0).animate({'margin-top': height},1000,
	// 	// animate에서 설정한 애니메이션을 다 실행한 후 실행되는 함수
	// 	function(){
	// 		$('.livesearch li').eq(0).detach().appendTo('.livesearch>ul').
	// 		removeAttr('style');
	// 		/* 
	// 		$(붙일곳).append(붙일애):
	// 		$(붙일애).appendTo(붙일곳):
	// 		*/
	// 	});
	// }
	/* 매개변수 c(클래스) 추가해서 검색어와 뉴스헤드에서 공통으로 사용가능하게 */
	function live(height,c,playtime){
		/* var heigth = $(c+' li').css('height);
			 height = '-' + heigth; */
		$(c+' li').eq(0).animate({'margin-top': height},playtime,
		function(){
			$(c+' li').eq(0).detach().appendTo(c+'>ul').
			removeAttr('style');
		});
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
			if(!$(this).hasClass('fold')){ //닫힌상태일 때, 검은색 메뉴 초기화기능
				initBlackMenu();
			}
		})
		//fold 있으면 열린상태 없으면 닫힌상태
		
		$('.sv-close').click(function(){
			$('.more').click();
			$('.cancel').click();
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
		
		/* 메뉴설정 버튼 클릭할 때 */
		$('.menu-setting').click(function(){ 
			$('.white-menu-sub1').toggleClass('display-none');
			$('.white-menu-sub2').toggleClass('display-none');
			// $('.black-container .black-box').each(function(){
			// 	if(!$(this).hasClass('box-menu')){
			// 		$(this).addClass('display-none')
			// 	}else{
			// 		$(this).prop('class','box-menu') //클래스에 box-menu만 남기려는 작업
			// 	}
			// })
			selMenuTmp = selMenu.slice(0);	//slice(똑같은 걸 복사본 만듦.)
			drawMenu(selMenuTmp);
			// $('.empty-container').toggleClass('display-none');
			// black-box 없어지고 네모박스
			// 서브메뉴 체크박스
			$('.box-menu').eq(selMenu.length).addClass('select');
			//빈 박스 선택된 곳에 초록색 테두리
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
			// closeWhiteBox();
			selMenuTmp = []; //메뉴설정에서 선택된 메뉴들을 적용하지 않음.
			setInputCheckbox(selMenu);
			initBlackMenu();
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
			/* 선택된 메뉴의 클래스명을 가져옴(=input태그의 value값 가져옴) */
			var value = $(this).find('.checkbox-input').val();
			$(this).find('.checkbox').toggleClass('checked');
			if($(this).find('.checkbox').hasClass('checked')){
				$(this).find('.checkbox-input').prop('checked', true);
			}else{
				$(this).find('.checkbox-input').prop('checked', false);
			}
			/* 선택된 메뉴를 selMenuTmp에 추가할지 삭제할지 결정 */
			/* selMenuTmp에 선택된 메뉴가 있는지 없는지 체크.
				 indexOf는 있으면 0보다 크거나 같은 값, 없으면 -1을 나타냄.*/
			var pos = selMenuTmp.indexOf(value);
			if(pos == -1){ //선택한 메뉴가 이미 체크가 된 경우
				// $('.box-menu').eq(selMenuTmp.length).addClass('bg3');
				// $('.box-menu').eq(selMenuTmp.length).addClass('black-box');
				// $('.box-menu').eq(selMenuTmp.length).addClass(value);
				selMenuTmp.push(value);		//위 클래스를 배열에 집어넣기
			}else{				 //선택된 메뉴가 체크 해제된 경우
				selMenuTmp.splice(pos,1);
				//selMenuTmp에 있는 배열에 맞춰 배치하기
			}
			drawMenu(selMenuTmp);
			$('.box-menu').eq(selMenuTmp.length).addClass('select');  //다음박스 테두리
		})
		// 확인버튼이 클릭되면
		$('.okay').click(function(){
			selMenu = selMenuTmp.splice(0);
			if(selMenu.length == 0){
				alert('선택된 메뉴가 없습니다. 초기설정으로 돌아갑니다.')
			}
			//white box, black box 닫고 
			$('.more').click();
			//메뉴 적용
			initBlackMenu();
		})
		$('.reset').click(function(){
			alert('초기설정으로 돌아갑니다.');
			selMenu = []; //메뉴설정에서 선택된 메뉴들을 적용하지 않음.
			setInputCheckbox(selMenu);
			initBlackMenu();
			$('.more').click();
		})
		// setInterval(함수,시간): 일정시간마다 함수를 동작시키는 함수
		setInterval(function(){
			var height = '-25px';
			live(height,'.livesearch',500);
			/* var height 지우고
				 live(height, '.livesearch',500);
				 live(heigth, '.hdlinelive',1000);
				 으로 통합해서 써도 됨. */
		},2000);
		setInterval(function(){
			var height = '-20px';
			live(height,'.hdlinelive',1000);
		},2000);
	})