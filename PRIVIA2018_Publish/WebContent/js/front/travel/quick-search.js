/*  
 * 문서명 : quick-search.js 
 * 설명 : 퀵검색 전용 스크립트
 * 함수 : quickSearchInit() - AJAX 호출 마다 실행되는 함수. 동적으로 들어오는 컨텐츠 중 reload가 필요한 개체들
                              이나 클릭시 default로 보여질 컨텐츠의 초기값 셋팅에 사용.
		 
		 quickSearchEvent() - 퀵검색 최초 로드 시 1회만 실행되는 함수(첫번째 AJAX에만 실행).
		                      각종 컨텐츠에 이벤트를 바인딩 시키는 역할.
		                      동적으로 들어오는 컨텐츠에 상관없이 이벤트를 할당할 수 있는 구문으로 구성.
 */

function quickSearchInit(defaultNum){
	//탭 내부 라디오 버튼
	$('.sch-2dep').buttonset();
	
	//퀵검색 내부 달력
	$('.datepicker').datepicker();
	
	//셀렉트 박스 디자인
	fakeselect.initialize();
	
	//출발도시 선택 초기 실행
	$('#departure-city .departure-city-dep1 li a').eq(0).trigger('click');
	
	//출발도시 선택 컨텐츠 스크롤
	$("#departure-city-list").mCustomScrollbar({theme:"minimal-dark"})
	
	//최근검색 스크롤
	$(".recently-search-cont").mCustomScrollbar({theme:"minimal-dark"})		
	
	//섹션 아이콘 클릭(0~5) 0:항공, 1:호텔 ...
	$('.quick-section-icon li a').eq(defaultNum).trigger('click');
	
}

function quickSearchEvent(){
	//퀵검색 메뉴 아이콘 클릭
	$(document).on('click','.quick-section-icon li a',function(){
		var idx = $(this).parent().index();
		$('.quick-section-icon li a').removeClass('on');
		$(this).addClass('on');
		$('.quick-section-cont').hide();
		$('.quick-section-cont').eq(idx).show()
		
		//클릭 시 하위 탭 초기화
		if($('.quick-section-cont').eq(idx).find('.sch-1dep').size() > 0){
			$('.quick-section-cont').eq(idx).find('.sch-1dep a').eq(0).trigger('click');
		}
		if($('.quick-section-cont').eq(idx).find('.sch-2dep').size() > 0){
			$('.quick-section-cont').eq(idx).find('.sch-2dep input[type="radio"]').eq(0).trigger('click');
		}
		
		
		//최근검색 유무 조사
		if($('.sub-quick').size() > 0){
			//자유여행이나 패키지 일 경우 보여주지 않음
			if(idx == 2 || idx == 5){
				$('.quick-section').removeClass('recently');
			}
			else{
				$('.quick-section').addClass('recently');

				//섹션의 첫번째 탭 최근검색 show
				$('.recently-search-list').hide();
				if($('.quick-section-cont').eq(idx).find('.recently-search-list').size() > 0){
					$('.quick-section-cont').eq(idx).find('.recently-search-list').eq(0).show();
				}
			}
		}
		else{
			$('.quick-section').removeClass('recently');
		}
		
		var sectionName = $('.quick-section-cont').eq(idx).attr('id').split('-')[1];
		if($('#QS-'+sectionName).find('.sch-1dep-cont').length==0)callback(sectionName);//ajax 담당함수
		return false;
	})
	
	//섹션 내 탭 메뉴
	$(document).on('click','.sch-1dep li a',function(){
		var idx = $(this).parent().index();
		$(this).closest('.sch-1dep').find('li a').removeClass('on');
		$(this).addClass('on');
		$(this).closest('.quick-section-cont').find('.sch-1dep-cont').hide();
		$(this).closest('.quick-section-cont').find('.sch-1dep-cont').eq(idx).show();
		
		//탭 클릭 시 하위 탭 초기화
		if($(this).closest('.quick-section-cont').find('.sch-1dep-cont').eq(idx).find('.sch-2dep ').size() > 0){
			$(this).closest('.quick-section-cont').find('.sch-1dep-cont').eq(idx).find('.sch-2dep input[type="radio"]').eq(0).trigger('click');
		}
		
		//각 탭 최근검색 show
		$('.recently-search-list').hide();
		if($(this).closest('.quick-section-cont').find('.recently-search-list').size() > 0){
			$(this).closest('.quick-section-cont').find('.recently-search-list').eq(idx).show();
		}
		return false;
	})
	
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
	$(document).on('click','#departure-city .departure-city-dep1 li a',function(){
		var idx = $(this).parent().index();
		$('#departure-city .departure-city-dep1 li a').removeClass('on');
		$(this).addClass('on');
		
		$("#departure-city .departure-city-dep2").hide();
		$("#departure-city .departure-city-dep2").eq(idx).show();
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
	
	//커스텀 셀렉트 전체 아웃 이벤트 
	$(document).on('mouseleave','.custom-select',function(){
		if(!$(this).find(' > div').is(':hidden')){
			$(this).find('.selectbox_title').trigger('click');
		}
	})

	//모바일 전용특가
	$(document).on('click','.quick-section .btn-layerpop',function(){
		if($(this).hasClass('on')){
			$('.smsholder .layer_pop').hide();
			$('.quick-section .btn-layerpop').removeClass('on');
			return false;
		}
		else{
			$(this).addClass('on')
			$(this).parent().next('.smsholder').find('.layer_pop').show();
			return false;
		}
	});
    
	$(document).on('click','.quick-section .layer_pop .btn_close',function(){
		$('.smsholder .layer_pop').hide();
		$('.quick-section .btn-layerpop').removeClass('on');
		return false;
	});
	
	//해외렌터카 도시검색 레이어
	var pre_city = ''; //자동완성 시 pre_city변수에 자동완성으로 선택된 값 넣어주세요
	$(document).on('focusin','#rent_city, #return_city, #htl-city-ov, #htl-city-in',function(){
		if($('.ui-autocomplete').is(':hidden')){
			pre_city = $(this).val();
			$(this).attr('value','');
			//$(this).after($('.city-search-lpu'))
			$(this).closest('.item').find('.city-search-lpu').stop().slideDown('fast');	
		}
	})
	
	$(document).on('keydown','#rent_city, #return_city, #htl-city-ov, #htl-city-ov2, #htl-city-in, #htl-city-in2',function(){
		$(this).closest('.item').find('.city-search-lpu').stop().slideUp('fast');
		//자동완성 샘플코드
		$(this).closest('.item').find('.ui-autocomplete').show()
	})
	
	$(document).on('focusout','#rent_city, #return_city, #htl-city-ov, #htl-city-in',function(){
		var $this = $(this)
		setTimeout(function(){
			if($('.ui-autocomplete').is(':hidden')){
				$this.attr('value',pre_city)
				$this.closest('.item').find('.city-search-lpu').slideUp('fast');	
			}
		},300)
	})
    
	$(document).on('click','#airtelUnit1 .city-search-lpu .table-li-mix a, #QS-HOTEL .city-search-lpu .table-li-mix a',function(){
		pre_city = $(this).text();
		$(this).closest('.item').find('input').eq(0).attr('value',pre_city)
	})
	
	$(document).on('mouseenter','#airtelUnit1 .ui-menu-item',function(){
		$('#airtelUnit1 .ui-menu-item').removeClass('gray-bg')
		$(this).addClass('gray-bg')
	})

	//렌터카 대여반납장소 동일
	$(document).on('click','#qu_rent_equal',function(){
		var rent_equal_cont = $('.rent-equal-cont');
		if(rent_equal_cont.is(':hidden')){
			rent_equal_cont.show();
		}
		else{
			rent_equal_cont.hide();
		}
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
	
	//자유여행 lnb
	initSectionLnb();
	
	//#24858 인풋 내용 삭제(임시용)
    $(document).on('focusin','.htl-i-input2 input.has-value',function(){
		if($(this).val() != ''){
            $(this).parent().find('.btn-input-clear').show();
        }		
    });
	$(document).on('focusout','.htl-i-input2 input.text',function(){
        $(this).parent().find('.btn-input-clear').hide();
    });
	$(document).on('keyup','.htl-i-input2 input.text',function(){
        if($(this).val() != ''){
            $(this).parent().find('.btn-input-clear').show();
        }
    });
	$(document).on('mousedown','.btn-input-clear',function(e){
        $(this).parent().find('input.text').val('');
        $(this).hide();
        e.preventDefault();
    });

}
   