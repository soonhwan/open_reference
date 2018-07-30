
var pvmSearch = window.pvmSearch || (function(){
	var searchData = {};
	
	return {
		init: function(){},
		comSearchEvent: function(){
			//상단 검색 tab 메뉴 click
			$('.hs-search-menu .hss-menu [data-tabsub]').on('click', function(e){
				var code = $(this).data('tabsub');
				if(!$(this).closest('li').hasClass('on')){
					if($(this).closest('.hss-menu').find('.hss-sub').length <= 0){
						$('.hs-search-menu .hss-menu.on').removeClass('on');
						$(this).closest('.hss-menu').addClass('on');
					}
					else{
						$(this).closest('.hss-sub').find('.on').removeClass('on');
						$(this).closest('li').addClass('on');
					}
					
					//서브 체인지    
					$('.hs-search-cont .o-'+code).closest('.hss-inner-cont').find('.sc-search-box.on').removeClass('on');   
					$('.hs-search-cont .o-'+code).addClass('on');
				}           
				e.preventDefault();
			}); 			
		},
		comSearchAir: function(){
			//상단 검색 tab 메뉴
			pvmSearch.comSearchEvent();
			
			//출발 click
			$('.sc-air .places-exit [data-panel="mainsel"]').on('click', function(e){
				//pvmSearch.setAirData('출발', 1);
				$.mobile.changePage('air-lpu-shuttle.html', {transition: 'slideup'});
				e.preventDefault();
			});
			
			//도착 click
			$('.sc-air .places-entry [data-panel="mainsel"]').on('click', function(e){
				//pvmSearch.setAirData('도착', 2);
				$.mobile.changePage('air-lpu-shuttle.html', {transition: 'slideup'});
				e.preventDefault();
			});			
			
			//출발,도착 체인지
			$('.sc-air .b-change-places button').on('click', function(){			
				var $exit = $(this).closest('.qsb-places').find('.places-exit .qsb-area');
				var $entry = $(this).closest('.qsb-places').find('.places-entry .qsb-area');
				var exitHtml = null, entryHtml = null;

				//출발
				if($exit.closest('.qsb-area').hasClass('on')){
					exitHtml = $exit.html();
				}		
				//도착
				if($entry.closest('.qsb-area').hasClass('on')){
					entryHtml = $entry.html();
				}

				//출발 체인지
				if(exitHtml){
					if(!$entry.closest('.qsb-area').hasClass('on')){
						$entry.closest('.qsb-area').addClass('on');
					}
					$entry.html(exitHtml);
				}
				else{
					if($entry.closest('.qsb-area').hasClass('on')){
						$entry.closest('.qsb-area').removeClass('on');
					}
				}

				//도착 체인지
				if(entryHtml){
					if(!$exit.closest('.qsb-area').hasClass('on')){
						$exit.closest('.qsb-area').addClass('on');
					}
					$exit.html(entryHtml);
				}
				else{
					if($exit.closest('.qsb-area').hasClass('on')){
						$exit.closest('.qsb-area').removeClass('on');
					}
				}
				
				$exit.find('span').each(function(){
					$(this).text($(this).text().replace('도착', '출발'));
				});				
				$entry.find('span').each(function(){
					$(this).text($(this).text().replace('출발', '도착'));
				});
			});
			
			//여행날짜
			$('.sc-air  [data-panel="calendar"]').on('click', function(e){
				//pvmSearch.setAirData('여행날짜', 3);
				$.mobile.changePage('air-lpu-shuttle.html', {transition: 'slideup'});
				e.preventDefault();
			});
			
			//인원, 좌석등급
			$('.sc-air  [data-panel="capacity"]').on('click', function(e){
				//pvmSearch.setAirData('인원, 좌석등급', 4);
				$.mobile.changePage('air-lpu-shuttle.html', {transition: 'slideup'});
				e.preventDefault();
			});			
		},
		setAirData: function($type, $panel){
			var tempData = {};
			var type = $type;
			
			tempData = {
				type: 'shuttle',
				places:{
					exit: {
						code: 'INC',
						city: '인천'
					},
					entry: {
						code: '',
						city: ''
					}
				},
				dates: {
					chkin: '2018/08/10',
					chkout: '2018/08/15'
				},
				capacity:{
					adt: 1,
					chd: 0,
					inf: 0,
					seat: 'Y'
				}
			}
			
			searchData = tempData;
		},
		getAirData: function(){
			return searchData;
		},
		comSearchAirLpu: function(){
			var $currentCity = null; // 도시영역 저장
			
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 가져오기
			//console.log('가져오기 = ', pvmSearch.getAirData())
			//도시
			
			//인원,좌석
			
			//캘린더 datepicker - 왕복
			//캘린더 datepicker - 편도
			//캘린더 datepicker - 다구간
			
			
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 셋팅
			//타이틀 셋팅
			function changeTitle(tit){
				$('.ui-page-active .w-header-sec .whs-title').text(tit);
			}
			
			//도시
			
			//인원,좌석
			
			//캘린더 datepicker - 왕복
			//캘린더 datepicker - 편도
			//캘린더 datepicker - 다구간
						
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 컨트롤 event
			//하단 검색 박스 설정
			$('.sc-search-tab .list-tab [data-tab]').on('click', function(){
				var _this = $(this);
				var type = $(this).data('tab');
				
				//상단 tab on, off
				if(!_this.hasClass('on')){
					_this.closest('.list-tab').find('.slt-area.on').removeClass('on');
					_this.addClass('on');
				}
				
				//하단 검색 박스 on, off
				if(!$('.sc-search-area .uis-'+type).hasClass('on')){
					$('.sc-search-area .ssa-ui-box.on').removeClass('on');
					$('.sc-search-area .uis-'+type).addClass('on');
					$(document).scrollTop(0);
				}
				
				//주요도시 셋팅
				if(type == 'mainsel'){
				  	$currentCity = _this;
					$('.sc-search-area .uis-mainsel .uis-input .inp-search').val($currentCity.find('.slt-input').data('city'));
					
					//출,도착 placeholder 텍스트 변경
					if($currentCity.closest('.places-exit').hasClass('places-exit')){
						$('.sc-search-area .uis-mainsel .uis-input .inp-search').attr('placeholder','어디서 출발 하시나요?');
						changeTitle('출발 도시 선택');
					}
					else if($currentCity.closest('.places-entry').hasClass('places-entry')){
						$('.sc-search-area .uis-mainsel .uis-input .inp-search').attr('placeholder','어디에 도착 하시나요?');
						changeTitle('도착 도시 선택');
					}	
				}
				
				//달력 셋팅
				if(type == 'calendar'){
					changeTitle('여행 날짜 선택');
				}
				
				//인원,좌석 셋팅
				if(type == 'capacity'){
					//국내선인 경우
					changeTitle('인원 및 좌석 선택');
				}
			});		
			
			
			//----------------------------------- 도시			
			//도시 검색하기 click
			$('.sc-search-area .uis-mainsel .uis-list a').on('click', function(e){
				if(!$(this).hasClass('tit-rec')){
					var city = $(this).find('.name').text(); //도시 이름(임시)
					var code = $(this).find('.code').text(); //도시 코드(임시)

					//data input 
					$('.sc-search-area .uis-mainsel .uis-input .inp-search').val(city);

					//panel input
					if(!$currentCity.find('.slt-input').hasClass('on')){
						$currentCity.find('.slt-input').addClass('on')
					}
					$currentCity.find('.slt-input').data('city', city);
					$currentCity.find('.slt-input').text(code);
					
					//sbox input
			   	}
				e.preventDefault();
			});
			
			//도시 검색하기 keyup
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('keyup', function(){
				if(!$(this).closest('.uis-input').hasClass('isVal')){
					$(this).closest('.uis-input').addClass('isVal');
				}
			});

			//도시 검색하기 focusin
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('focusin', function(){
				if($(this).val() != ''){
					$(this).val('');
				}
				
				if(!$(this).closest('.uis-input').hasClass('isVal')){
					$(this).closest('.uis-input').addClass('isVal');
				}
			});

			//도시 검색하기 focusout
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('focusout', function(){
				if($(this).closest('.uis-input').hasClass('isVal')){
					$(this).closest('.uis-input').removeClass('isVal');
				}
				$(this).val($currentCity.find('.slt-input').data('city'));
			});
			
			//검색어 삭제
			$('.sc-search-area .uis-mainsel .uis-input .b-clear').on('mousedown', function(){
				$(this).closest('.uis-input').find('.inp-search').val('');
			});			
			
			//----------------------------------- 캘린더
			//캘린더 datepicker - 왕복
			$('.ui-page-active .ot-shuttle .uis-datepicker').datepicker({
				showMonthAfterYear: true,
				yearSuffix: '<span class="ui-datepicker-dot">.</span>',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
				minDate: '0',
				maxDate: '+362',
				numberOfMonths: [13,1],
				dateFormat: 'yy/mm/dd',
				beforeShowDay: function(date) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkin[data-day]').data('day'));
					var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkout[data-day]').data('day'));
					return pvmFrontScript.beforeShowDayMark(date, date1, date2);
				},
				onSelect: function(dateText, inst) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkin[data-day]').data('day'));
					var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkout[data-day]').data('day'));
					var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
					var txtDay = pvmFrontScript.onSelectTxtDay($(this), dateText);
					var txtDayVer2 = pvmFrontScript.onSelectTxtDayVer2($(this), dateText);

					//출발, 도착 모두 선택인 경우, 아무것도 선택이 없는 경우(출발)
					if (!date1 || date2) {
						//data input
						$('.ot-shuttle .slt-chkin[data-day]').data('day', dateText);
						$('.ot-shuttle .slt-chkout[data-day]').data('day', '');
						//panel input
						$('.ot-shuttle .slt-chkin').html(txtDayVer2);
						$('.ot-shuttle .slt-chkout').html('도착일');
						//sbox input

					} else {
						//출발 보다 이전 날짜 선택
						if( selectedDate.getTime() < date1.getTime() ) {
							//출발 -> 도착 이동
							//data input 
							$('.ot-shuttle .slt-chkout[data-day]').data('day', $('.ot-shuttle .slt-chkin[data-day]').data('day'));
							//panel input
							$('.ot-shuttle .slt-chkout').html($('.ot-shuttle .slt-chkin').html());
							//sbox input


							//출발 셋팅
							//data input 
							$('.ot-shuttle .slt-chkin[data-day]').data('day', dateText);
							//panel input
							$('.sc-air .o-shuttle .uis-date-chkin .txt-day').html(txtDayVer2);
							//sbox input

						} 
						else {
							//출발이후 선택시(도착)
							//data input 		
							$('.ot-shuttle .slt-chkout[data-day]').data('day', dateText);
							//panel input
							$('.ot-shuttle .slt-chkout').html(txtDayVer2);
							//sbox input

						}
					}
				}
			});
			
			//캘린더 datepicker - 편도
			$('.ui-page-active .ot-oneway .uis-datepicker').datepicker({
				showMonthAfterYear: true,
				yearSuffix: '<span class="ui-datepicker-dot">.</span>',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
				minDate: '0',
				maxDate: '+362',
				numberOfMonths: [13,1],
				dateFormat: 'yy/mm/dd',
				onSelect: function(dateText, inst) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-oneway .slt-chkin[data-day]').data('day'));
					var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
					var txtDay = pvmFrontScript.onSelectTxtDay($(this), dateText);
					var txtDayVer2 = pvmFrontScript.onSelectTxtDayVer2($(this), dateText);

					//data input
					$('.ot-oneway .slt-chkin[data-day]').data('day', dateText);
					//panel input
					$('.ot-oneway .slt-chkin').html(txtDayVer2);
					//sbox input

				}
			});
			
			//캘린더 datepicker - 다구간
			$('.ui-page-active .ot-multiway .uis-datepicker').datepicker({
				showMonthAfterYear: true,
				yearSuffix: '<span class="ui-datepicker-dot">.</span>',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
				minDate: '0',
				maxDate: '+362',
				numberOfMonths: [13,1],
				dateFormat: 'yy/mm/dd',
				onSelect: function(dateText, inst) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-multiway .slt-chkin[data-day]').data('day'));
					var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
					var txtDay = pvmFrontScript.onSelectTxtDay($(this), dateText);
					var txtDayVer2 = pvmFrontScript.onSelectTxtDayVer2($(this), dateText);

					//data input
					$('.ot-multiway .slt-chkin[data-day]').data('day', dateText);
					//panel input
					$('.ot-multiway .slt-chkin').html(txtDayVer2);
					//sbox input

				}
			});
			
			
			//----------------------------------- 인원,좌석
			//인원 컨트롤
			function setCapacity(type, action){
				var cType = type;
				var cAction = action;
				var adtCnt = parseInt($('.uis-capacity-number .num-adt').text()); //성인
				var chdCnt = parseInt($('.uis-capacity-number .num-chd').text()); //아동
				var infCnt = parseInt($('.uis-capacity-number .num-inf').text()); //유아
				//console.log('setCapacity click = ', cType, cAction, adtCnt, chdCnt, infCnt);

				//성인
				if(cType == 'adt'){
					if(cAction == 'minus'){
						adtCnt--;
						if(adtCnt < 1){
							adtCnt = 1;
							alert('성인은 최소 1명 이상 탑승해야 합니다.');
							return false;
						}
					}
					else if(cAction == 'plus'){
						adtCnt++;
						if(adtCnt > 9){
							adtCnt = 9;
							return false;
						}
					}
					$('.uis-capacity-number .num-adt').text(adtCnt);
				}

				//아동
				if(cType == 'chd'){
					if(cAction == 'minus'){
						chdCnt--;
						if(chdCnt < 0){
							chdCnt = 0;
							return false;
						}
					}
					else if(cAction == 'plus'){
						chdCnt++;
						if(chdCnt > 9){
							chdCnt = 9;
							return false;
						}
					}
					$('.uis-capacity-number .num-chd').text(chdCnt);
				}

				//유아
				if(cType == 'inf'){
					if(cAction == 'minus'){
						infCnt--;
						if(infCnt < 0){
							infCnt = 0;
							return false;
						}
					}
					else if(cAction == 'plus'){
						infCnt++;
						if(infCnt > 9){
							infCnt = 9;
							return false;
						}
					}
					$('.uis-capacity-number .num-inf').text(infCnt);
				}
			}
			
			//인원 minus, plus click
			$('.uis-custom-number .ucn-crt button').on('click', function(e){
				var type = $(this).data('type').split('-')[0];
				var action = $(this).data('type').split('-')[1];
				setCapacity(type, action);
				e.preventDefault();
			});
			
			//좌석 선택
			$('.uis-capacity-select li a').on('click', function(e){
				var opt = $(this).data('option');
				var name = $(this).find('.name').text();
				console.log(opt, name);
				e.preventDefault();
			});

			//event 바인딩
			pvmFrontScript.comSearchEvtBind($('.ui-page-active .w-search-lp'));
		},
		comSearchHotel: function(){
			//상단 검색 tab 메뉴
			pvmSearch.comSearchEvent();
			
			
		}
	}	
}());
