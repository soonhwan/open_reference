
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
			var _MDMinCnt = 2; //최소 구간
			var _MDCnt = $('.sc-air .o-multiway li[class*="air-md-"].on').length; // 다구간 on
			var _MDMax = $('.sc-air .o-multiway li[class*="air-md-"]').length; //다구간 최대
						
			//상단 검색 tab 메뉴
			pvmSearch.comSearchEvent();
			
			//출발 click
			$('.sc-air .places-exit [data-panel="mainsel"]').on('click', function(e){
				pvmSearch.setAirData('mainsel-exit');
				$.mobile.changePage('air-lpu-shuttle.html', {transition: 'slideup', role :'dialog'});
				e.preventDefault();
			});
			
			//도착 click
			$('.sc-air .places-entry [data-panel="mainsel"]').on('click', function(e){
				pvmSearch.setAirData('mainsel-entry');
				$.mobile.changePage('air-lpu-shuttle.html', {transition: 'slideup', role :'dialog'});
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
			
			//다구간 - 구간 추가 click
			$('.sc-air .o-multiway .add-md').on('click', function(e){
				_MDCnt++;
				if(_MDCnt > _MDMax){
					_MDCnt = _MDMax;
					alert('여정은 총 ' + _MDCnt + '개 까지만 가능합니다.\n' + _MDCnt + '개 이상의 여정이 있으시다면 1;1문의로 요청해 주시기 바랍니다.');
					return false;
				}
				else{
					$(this).parent('.qsb-btn-add').addClass('on');
					$('.sc-air .o-multiway .air-md-'+_MDCnt).addClass('on');
					if(_MDCnt == _MDMax){
						$('.sc-air .o-multiway .air-md-'+_MDMax).find('.qsb-btn-add').addClass('on');
					}
				}
				e.preventDefault();
			});
			
			//다구간 - 구간 제거 click
			$('.sc-air .o-multiway .remove-md a').on('click', function(e){
				_MDCnt--;
				if(_MDCnt < _MDMinCnt){
					_MDCnt = _MDMinCnt;
					alert('출발 및 귀국 여정은 삭제하실 수 없습니다.');
					return false;
				}
				else{
					var removeIdx = $(this).closest('li[class*="air-md-"].on').index();
					var openTotal = $('.sc-air .o-multiway .list-qsb-cont li[class*="air-md-"].on').length;
					//console.log('삭제구간 = ', removeIdx, removeIdx+1, '노출된 총구간 = ', openTotal);

					//삭제구간 부터 데이터 초기화하고 한칸씩 옮김(날짜는 따로 리셋)
					$('.sc-air .o-multiway .list-qsb-cont li[class*="air-md-"].on').each(function(){
						var idx = $(this).index();
						if(idx >= removeIdx){
							/*
							//qsb 초기화
							$(this).find('.qsb-area.on, .uis-date-chkin .txt-day.on').removeClass('on');
							$(this).find('.qsb-places .city, .qsb-places .qsb-c').text('');

							//다음 데이터 적용
							var exit = $(this).next().find('.places-exit .qsb-area'); //출발
							var entry = $(this).next().find('.places-entry .qsb-area'); //도착

							if(exit.hasClass('on')){
								$(this).find('.places-exit .qsb-area').addClass('on');					
								$(this).find('.places-exit .city').text($(this).next().find('.places-exit .city').text());
								$(this).find('.places-exit .qsb-c').text($(this).next().find('.places-exit .qsb-c').text());
							}

							if(entry.hasClass('on')){
								$(this).find('.places-entry .qsb-area').addClass('on');					
								$(this).find('.places-entry .city').text($(this).next().find('.places-entry .city').text());
								$(this).find('.places-entry .qsb-c').text($(this).next().find('.places-entry .qsb-c').text());
							}*/
						}
					});

					//맨뒤에 있는 구간 숨김
					$('.sc-air .o-multiway .air-md-'+openTotal).removeClass('on');

					//버튼 변경
					/*if(openTotal >= _MDMax){
						$('.sc-air .o-multiway .air-md-'+(openTotal-1)+' .qsb-btn-add').removeClass('on');			
					}*/

					//버튼 변경 - 구간 2개 남을때
					/*if(openTotal <= _MDMinCnt+1){
						$('.sc-air .o-multiway .air-md-2 .qsb-btn-add').removeClass('on');			
					}*/
				}
			});
			
			//여행날짜
			$('.sc-air  [data-panel="calendar"]').on('click', function(e){
				pvmSearch.setAirData('calendar');
				$.mobile.changePage('air-lpu-shuttle.html', {transition: 'slideup', role :'dialog'});
				e.preventDefault();
			});
			
			//인원, 좌석등급
			$('.sc-air  [data-panel="capacity"]').on('click', function(e){
				pvmSearch.setAirData('capacity');
				$.mobile.changePage('air-lpu-shuttle.html', {transition: 'slideup', role :'dialog'});
				e.preventDefault();
			});			
		},
		setAirData: function($area){
			var tempData = {};
			var type = $('.sc-search-box.on').data('sc'); //타입
			var area = $area; //클릭 영역
			var plaExCode = $('.sc-search-box.on .places-exit .on .code').text(); //출발 코드
			var plaExCity = $('.sc-search-box.on .places-exit .on .city').text(); //출발 이름
			var plaEnCode = $('.sc-search-box.on .places-entry .on .code').text(); //도착 코드
			var plaEnCity = $('.sc-search-box.on .places-entry .on .city').text(); //도착 이름
			var chkin = $('.sc-search-box.on .qsb-dates .qsb-chkin').data('day'); //출발 날짜
			var chkout = $('.sc-search-box.on .qsb-dates .qsb-chkout').data('day'); //도착 날짜
			var adt = $('.sc-search-box.on .qsb-capacity .qsb-input').data('adt'); //성인
			var chd = $('.sc-search-box.on .qsb-capacity .qsb-input').data('chd'); //아동
			var inf = $('.sc-search-box.on .qsb-capacity .qsb-input').data('inf'); //유아
			var comp = $('.sc-search-box.on .qsb-capacity .qsb-input').data('comp'); //좌석
			
			tempData = {
				type: type,
				area: area,
				places:{
					exit: {
						code: plaExCode,
						city: plaExCity
					},
					entry: {
						code: plaEnCode,
						city: plaEnCity
					}
				},
				dates: {
					chkin: chkin,
					chkout: chkout
				},
				capacity:{
					adt: adt,
					chd: chd,
					inf: inf,
					seat: comp
				}
			}
			
			searchData = tempData;
		},
		getAirData: function(){
			return searchData;
		},
		changeTitle: function(title){
			$('.ui-page-active .w-header-sec .whs-title').html(title);
		},
		comSearchAirLpu: function(){
			var $currentCity = null; // 도시영역 저장
			var settingData = pvmSearch.getAirData(); 
			
			//타입 설정
			console.log('가져오기 = ', settingData);
			switch(settingData.type) {
				case 'shuttle':
					$('.w-search-lp').addClass('ot-shuttle');
					break;	
				case 'oneway':
					$('.w-search-lp').addClass('ot-oneway');
					break;	
				default :
					$('.w-search-lp').addClass('ot-shuttle');
			}
			
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 셋팅
			//data 셋팅
			function initSearchData(){
				var area = settingData.area; //클릭 영역
				var plaExCode = settingData.places.exit.code; //출발 코드
				var plaExCity = settingData.places.exit.city; //출발 이름
				var plaEnCode = settingData.places.entry.code; //도착 코드
				var plaEnCity = settingData.places.entry.city; //도착 이름
				var chkin = settingData.dates.chkin; //출발 날짜
				var chkout = settingData.dates.chkout; //도착 날짜
				var adt = settingData.capacity.adt; //성인
				var chd = settingData.capacity.chd; //아동
				var inf = settingData.capacity.inf; //유아
				var comp = settingData.capacity.seat; //좌석

				//출발
				if(plaExCode != '' && plaExCity != ''){
					$('.sc-search-tab .slt-places .places-exit .slt-input').text(plaExCode);
					$('.sc-search-tab .slt-places .places-exit .slt-input').addClass('on');
				}
				
				//도착
				if(plaEnCode != '' && plaEnCity != ''){
					$('.sc-search-tab .slt-places .places-entry .slt-input').text(plaEnCode);
					$('.sc-search-tab .slt-places .places-entry .slt-input').addClass('on');
				}
				
				//날짜
				if(chkin != '' || chkout != ''){
					$('.sc-search-tab .slt-dates .slt-area').addClass('on');
					
					if(chkin != ''){
						$('.sc-search-tab .slt-dates .slt-chkin').data('day', chkin);
						//$('.sc-search-tab .slt-dates .slt-chkin').text(chkin);
						$('.sc-search-tab .slt-dates .slt-chkin').addClass('on');
					}
					
					if(chkout != ''){
						$('.sc-search-tab .slt-dates .slt-chkout').data('day', chkout);
						//$('.sc-search-tab .slt-dates .slt-chkout').text(chkout);
						$('.sc-search-tab .slt-dates .slt-chkout').addClass('on');
					}
				}

				//인원 셋팅
				if(adt > 0){$('.sc-search-area .uis-capacity-number .num-adt').addClass('on');} 
				else{$('.sc-search-area .uis-capacity-number .num-adt').removeClass('on');}
				if(chd > 0){$('.sc-search-area .uis-capacity-number .num-chd').addClass('on');} 
				else{$('.sc-search-area .uis-capacity-number .num-chd').removeClass('on');}
				if(inf > 0){$('.sc-search-area .uis-capacity-number .num-inf').addClass('on');} 
				else{$('.sc-search-area .uis-capacity-number .num-inf').removeClass('on');}
				$('.sc-search-area .uis-capacity-number .num-adt').text(adt);
				$('.sc-search-area .uis-capacity-number .num-chd').text(chd);
				$('.sc-search-area .uis-capacity-number .num-inf').text(inf);
				
				//일반석
				if(comp == 'Y'){
					$('.sc-search-area .uis-capacity-select li').eq(0).addClass('on');
				}
				//프리미엄 이코노미석
				if(comp == 'P'){
					$('.sc-air .uis-capacity-select li').eq(1).addClass('on');
				}
				//비즈니스석
				if(comp == 'C'){
					$('.sc-air .uis-capacity-select li').eq(2).addClass('on');
				}
				//일등석
				if(comp == 'F'){
					$('.sc-air .uis-capacity-select li').eq(3).addClass('on');
				}		

				//국내선인 경우 셋팅(성인, 아동 나이텍스트 변경, 좌석 숨김)
				/*
				$('.uis-capacity-select .ui-capacity .uis-capacity-select').hide();
				$('.uis-capacity-select .uis-capacity-number .exp-int').hide();
				$('.uis-capacity-select .uis-capacity-number .exp-dom').show();
				*/
				
				//해당 탭 보여주기
				switch(area) {
					case 'mainsel-exit':
						$('.sc-search-tab .places-exit [data-tab="mainsel"]').trigger('click');
						break;	   
					case 'mainsel-entry':
						$('.sc-search-tab .places-entry [data-tab="mainsel"]').trigger('click');
						break;	   
					case 'calendar':
						$('.sc-search-tab [data-tab="calendar"]').trigger('click');
						break;
					case 'capacity':
						$('.sc-search-tab [data-tab="capacity"]').trigger('click');
						break;
					default :
						$('.sc-search-tab .places-exit [data-tab="mainsel"]').trigger('click');
				}
			}
									
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
						pvmSearch.changeTitle('출발 도시 선택');
					}
					else if($currentCity.closest('.places-entry').hasClass('places-entry')){
						$('.sc-search-area .uis-mainsel .uis-input .inp-search').attr('placeholder','어디에 도착 하시나요?');
						pvmSearch.changeTitle('도착 도시 선택');
					}	
				}
				
				//달력 셋팅
				if(type == 'calendar'){
					pvmSearch.changeTitle('여행 날짜 선택');
				}
				
				//인원,좌석 셋팅
				if(type == 'capacity'){
					//국내선인 경우
					pvmSearch.changeTitle('인원 및 좌석 선택');
				}
			});		
						
			//----------------------------------- 도시			
			//도시 검색 click
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
					if($currentCity.closest('.places-exit').length > 0){
						if(!$('.sc-search-box.on .places-exit .qsb-area').hasClass('on')){
							$('.sc-search-box.on .places-exit .qsb-area').addClass('on')
						}
						$('.sc-search-box.on .places-exit .code').text(code);
						$('.sc-search-box.on .places-exit .city').text(city);
					}
					else if($currentCity.closest('.places-entry').length > 0){
						if(!$('.sc-search-box.on .places-entry .qsb-area').hasClass('on')){
							$('.sc-search-box.on .places-entry .qsb-area').addClass('on')
						}
				   		$('.sc-search-box.on .places-entry .code').text(code);
						$('.sc-search-box.on .places-entry .city').text(city);
					}
					
			   	}
				e.preventDefault();
			});
			
			//도시 검색 input keyup
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('keyup', function(){
				if(!$(this).closest('.uis-input').hasClass('isVal')){
					$(this).closest('.uis-input').addClass('isVal');
				}
			});

			//도시 검색 input focusin
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('focusin', function(){
				if($(this).val() != ''){
					$(this).val('');
				}
				
				if(!$(this).closest('.uis-input').hasClass('isVal')){
					$(this).closest('.uis-input').addClass('isVal');
				}
			});

			//도시 검색 input focusout
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('focusout', function(){
				if($(this).closest('.uis-input').hasClass('isVal')){
					$(this).closest('.uis-input').removeClass('isVal');
				}
				$(this).val($currentCity.find('.slt-input').data('city'));
			});
			
			//검색어 input 삭제
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
			
			//data 셋팅
			initSearchData();
		},
		comSearchHotel: function(){
			//상단 검색 tab 메뉴
			pvmSearch.comSearchEvent();
			
			
		}
	}	
}());
