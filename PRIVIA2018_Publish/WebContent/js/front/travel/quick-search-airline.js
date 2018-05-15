/*  
 * 문서명 : quick-search-airline.js 
 * 설명 : 항공 재검색 전용 스크립트
 * 함수 : quickSearchAirInit() - 항공 재검색 최초 로드 시 1회만 실행되는 함수(첫번째 AJAX에만 실행). 
 								컨텐츠의 초기값 셋팅에 사용.
		 
		 quickSearchAirEvent() - 항공 재검색 최초 로드 시 1회만 실행되는 함수(첫번째 AJAX에만 실행).		                      
 */

function quickSearchAirInit(defaultNum){
	//탭 내부 라디오 버튼
	$('.sch-2dep').buttonset();
	
	//퀵검색 내부 달력
	$('.datepicker').datepicker();
	
	//셀렉트 박스 디자인
	fakeselect.initialize();
	
	//출발도시 선택 초기 실행
	$('#departure-city-air .departure-city-dep1 li a').eq(0).trigger('click');
	
	//출발도시 선택 컨텐츠 스크롤
	$("#departure-city-list-air").mCustomScrollbar({theme:"minimal-dark"})
	
	//최근검색 스크롤
	$(".recently-search-cont").mCustomScrollbar({theme:"minimal-dark"})		
	
	//탭클릭
	$('.sch-2dep input[type="radio"]').eq(defaultNum).trigger('click');
}

function quickSearchAirEvent(){
	$(document).on('click','.sch-2dep input[type="radio"]',function(){
		var idx = $(this).parent().index();
		$(this).closest('.sch-1dep-cont').find('.sch-2dep-cont').hide();
		$(this).closest('.sch-1dep-cont').find('.sch-2dep-cont').eq(idx).show();
	})
	
	//귀국일 미정 클릭 시
	$(document).on('click','#undecided',function(){
		if($(this).attr('checked') != 'checked'){
			$('#undecided-select').hide();		
			$('#undecided-date').show()
		}
		else{
			$('#undecided-select').show();		
			$('#undecided-date').hide()
		}
	})
	  
	//출발인원 선택 셀렉트
	$(document).on('click','.i-select2',function(){
		if(!$(this).hasClass('selectbox_title_active')){
			$(this).addClass('selectbox_title_active');
			$(this).closest('.item').css('z-index','1').find('.i-select2-cont').show();	
		}
		else{
			$(this).removeClass('selectbox_title_active');
			$(this).closest('.item').css('z-index','0').find('.i-select2-cont').hide();	
		}
		return false;
	})
	
	//출발도시 선택 셀렉트
	$(document).on('click','.departure-select',function(){
		if(!$(this).hasClass('selectbox_title_active')){
			$(this).addClass('selectbox_title_active');
			$(this).closest('.item').css('z-index','1').find('.departure-select-cont').show();	
		}
		else{
			$(this).removeClass('selectbox_title_active');
			$(this).closest('.item').css('z-index','0').find('.departure-select-cont').hide();	
		}
		return false;		
	})
	
	//출발도시 선택 셀렉트 내 탭
	$(document).on('click','#departure-city-air .departure-city-dep1 li a',function(){
		var idx = $(this).parent().index();
		$('#departure-city-air .departure-city-dep1 li a').removeClass('on');
		$(this).addClass('on');
		
		$("#departure-city-air .departure-city-dep2").hide();
		$("#departure-city-air .departure-city-dep2").eq(idx).show();
		return false;
	})
	
	//출발도시 선택 및 닫기
	$(document).on('click','.departure-city-dep2 li a',function(){
		$(this).closest('.departure-city-list').find('a').removeClass('on');
		$(this).addClass('on');
		$(this).closest('.item').find('.departure-select strong').text($(this).text())
		$(this).closest('.item').find('.departure-select').trigger('click');
		return false;
	})	
	
	
	//항공 국제선 도시검색 레이어
	var pre_city_air = ''; //자동완성 시 pre_city_air 변수에 자동완성으로 선택된 값 넣어주세요
	var input_focus_air = null; //현재 포커스 되어 있는 인풋
	var close_time = null;
	$(document).on('focusin','input.air_city',function(){
		if(close_time != null){
			clearTimeout(close_time);
		}
		
		pre_city_air = $(this).val();
		
		//포커스되어 있는 위치밑에서 열림(도시검색 레이어)
		var thisTop = $(this).offset().top;
		var parentTop = thisTop - $(this).closest('.sch-1dep-cont').offset().top;
		var thisH = parentTop + $(this).innerHeight();
		$('.city-search-lpu-air').slideDown('fast');	
		$('.city-search-lpu-air').css({'top':thisH});
		input_focus_air = $(this);
	});	
	$(document).on('keydown','input.air_city',function(){
		$('.city-search-lpu-air').slideUp('fast');	
		
		//포커스되어 있는 위치밑에서 열림(자동완성 레이어)
		var thisTop = $(this).offset().top;
		var parentTop = thisTop - $(this).closest('.sch-1dep-cont').offset().top;
		var thisH = parentTop + $(this).innerHeight();
		$('.airline_autocomplete').slideDown('fast');	
		$('.airline_autocomplete').css({'top':thisH});
	});	
	$(document).on('focusout','input.air_city',function(){
		close_time = setTimeout(function(){
			if($('.airline_autocomplete').is(':hidden')){
				$(this).attr('value',pre_city_air);
				$('.airline_autocomplete').slideUp('fast');	
			}
			$('.city-search-lpu-air').slideUp('fast');	
		},300);
	});
	$(document).on('click','.city-search-lpu-air .table-li-mix a',function(){
		pre_city_air = $(this).text();
		input_focus_air.attr('value',pre_city_air);
	});
	$(document).on('click',function(){
		if(!$('.airline_autocomplete').is(':hidden')){
			$(this).attr('value',pre_city_air);
			$('.airline_autocomplete').slideUp('fast');	
		}
	});
}
   