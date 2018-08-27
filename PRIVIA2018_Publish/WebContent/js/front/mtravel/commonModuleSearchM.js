
var pvmSearch = window.pvmSearch || (function(){
	var searchData = null;
	
	return {
		init: function(){},
		getSearchData: function(){
			return searchData;
		},
		changePage: function(url){
			$.mobile.changePage(url, {transition: 'slideup', role:'dialog'});
		},
		comSearchEvent: function(){
			//상단 검색 tab 메뉴 click
			$(document).on('click', '.hs-search-menu .hss-menu [data-tabsub]', function(e){
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
			var _MDCnt = $('.sc-air .o-multiway [class*="air-md-"].on').length; // 다구간 on
			var _MDMax = $('.sc-air .o-multiway [class*="air-md-"]').length; //다구간 최대
			var _idx = '';	//다구간 index
			
			//상단 검색 tab 메뉴 event
			pvmSearch.comSearchEvent();
			
			//출발 click
			$('.sc-air .places-exit [data-panel="mainsel"]').on('click', function(e){
				if($(this).closest('.o-multiway').length > 0){
					_idx = $(this).closest('li[class*="air-md-"].on').index();
				}
				pvmSearch.setAirData('mainsel-exit', _idx);
				e.preventDefault();
			});
			
			//도착 click
			$('.sc-air .places-entry [data-panel="mainsel"]').on('click', function(e){
				if($(this).closest('.o-multiway').length > 0){
					_idx = $(this).closest('li[class*="air-md-"].on').index();
				}
				pvmSearch.setAirData('mainsel-entry', _idx);
				e.preventDefault();
			});			
			
			//출발,도착 체인지
			$('.sc-air .b-change-places button').on('click', function(){			
				var $exit = $(this).closest('.qsb-places').find('.places-exit .qsb-area');
				var $entry = $(this).closest('.qsb-places').find('.places-entry .qsb-area');
				var exitHtml = null, entryHtml = null;

				//출발 html
				if($exit.hasClass('on')){
					exitHtml = $exit.html();
				}		
				//도착 html
				if($entry.hasClass('on')){
					entryHtml = $entry.html();
				}

				//출발 체인지
				if(exitHtml){
					if(!$entry.hasClass('on')){
						$entry.addClass('on');
					}
					$entry.html(exitHtml);
				}
				else{
					if($entry.hasClass('on')){
						$entry.removeClass('on');
						$entry.find('.code').text('도착');
						$entry.find('.city').text('도착지 선택');
					}
				}

				//도착 체인지
				if(entryHtml){
					if(!$exit.hasClass('on')){
						$exit.addClass('on');
					}
					$exit.html(entryHtml);
				}
				else{
					if($exit.hasClass('on')){
						$exit.removeClass('on');
						$exit.find('.code').text('출발');
						$exit.find('.city').text('출발지 선택');
					}
				}
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
					$('.sc-air .o-multiway .air-md-'+_MDCnt).addClass('on');
					if(_MDCnt > _MDMinCnt){
						$('.sc-air .o-multiway .air-md-'+_MDMinCnt).find('.number').hide();
						$('.sc-air .o-multiway .air-md-'+_MDMinCnt).find('.remove-md').show();
					}
					
					if(_MDCnt == _MDMax){
					   $('.sc-air .o-multiway .add-md').hide();
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
					var removeIdx = $(this).closest('[class*="air-md-"].on').index();
					var openTotal = $('.sc-air .o-multiway .ol-list-qsb [class*="air-md-"].on').length;
					//console.log('삭제구간 = ', removeIdx, removeIdx+1, '노출된 총구간 = ', openTotal);

					//삭제구간 부터 데이터 초기화하고 한칸씩 옮김
					$('.sc-air .o-multiway .ol-list-qsb [class*="air-md-"].on').each(function(){
						var idx = $(this).index();
						if(idx >= removeIdx){
							//qsb 초기화
							$(this).find('.qsb-area.on, .qsb-chkin.on').removeClass('on');
							$(this).find('.qsb-places .places-exit .code').text('출발');
							$(this).find('.qsb-places .places-entry .code').text('도착');
							$(this).find('.qsb-places .places-exit .city').text('출발지 선택');
							$(this).find('.qsb-places .places-entry .city').text('도착지 선택');
							$(this).find('.qsb-chkin .txt').text('');
							$(this).find('.qsb-chkin').data('day', '');

							//다음 데이터 적용
							var exit = $(this).next().find('.places-exit .qsb-area'); //출발
							var entry = $(this).next().find('.places-entry .qsb-area'); //도착
							var chkin = $(this).next().find('.qsb-dates .qsb-area'); //날짜

							if(exit.hasClass('on')){
								$(this).find('.places-exit .qsb-area').addClass('on');					
								$(this).find('.places-exit .city').text($(this).next().find('.places-exit .city').text());
								$(this).find('.places-exit .code').text($(this).next().find('.places-exit .code').text());
							}

							if(entry.hasClass('on')){
								$(this).find('.places-entry .qsb-area').addClass('on');					
								$(this).find('.places-entry .city').text($(this).next().find('.places-entry .city').text());
								$(this).find('.places-entry .code').text($(this).next().find('.places-entry .code').text());
							}
							
							if(chkin.hasClass('on')){
								$(this).find('.qsb-dates .qsb-area').addClass('on');				
								$(this).find('.qsb-dates .qsb-chkin').addClass('on');				
								$(this).find('.qsb-dates .qsb-chkin .txt').text($(this).next().find('.qsb-dates .qsb-chkin .txt').text());				
								$(this).find('.qsb-dates .qsb-chkin').data('day', $(this).next().find('.qsb-dates .qsb-chkin').data('day'));				
							}
						}
					});
					
					//버튼 변경
					$('.sc-air .o-multiway .air-md-'+(openTotal-1)+' .qsb-btn-add').removeClass('on');		

					//버튼 변경 - 구간 2개 남을때
					if(openTotal <= _MDMinCnt+1){
						$('.sc-air .o-multiway .air-md-'+_MDMinCnt).find('.number').show();
						$('.sc-air .o-multiway .air-md-'+_MDMinCnt).find('.remove-md').hide();			
					}
					
					if(_MDCnt < _MDMax){
					   $('.sc-air .o-multiway .add-md').show();
					}

					//맨뒤에 있는 구간 숨김
					$('.sc-air .o-multiway .ol-list-qsb .air-md-'+openTotal).removeClass('on');
				}
				e.preventDefault();
			});
			
			//여행날짜
			$('.sc-air  [data-panel="calendar"]').on('click', function(e){
				if($(this).closest('.o-multiway').length > 0){
					_idx = $(this).closest('li[class*="air-md-"].on').index();
				}
				pvmSearch.setAirData('calendar', _idx);
				e.preventDefault();
			});
			
			//인원, 좌석등급
			$('.sc-air  [data-panel="capacity"]').on('click', function(e){
				pvmSearch.setAirData('capacity', _idx);
				e.preventDefault();
			});			
		},
		setAirData: function($area, $idx){
			var tempData = {};
			var type = $('.sc-search-box.on').data('sc'); //타입
			var area = $area; //클릭 영역
			var idx = $idx; //다구간 idx
			var plaExCode; //출발 코드
			var plaExCity; //출발 이름
			var plaEnCode; //도착 코드
			var plaEnCity; //도착 이름
			var chkin; //출발 날짜
			var chkout = $('.sc-search-box.on .qsb-dates .qsb-chkout').data('day') || ''; //도착 날짜
			var adt = $('.sc-search-box.on .qsb-capacity .qsb-input').data('adt'); //성인
			var chd = $('.sc-search-box.on .qsb-capacity .qsb-input').data('chd'); //아동
			var inf = $('.sc-search-box.on .qsb-capacity .qsb-input').data('inf'); //유아
			var comp = $('.sc-search-box.on .qsb-capacity .qsb-input').data('comp') || ''; //좌석
			
			if(type == 'multiway'){
				var mdLen = $('.o-multiway.on [class*="air-md-"].on').length;
				plaExCode = [], plaExCity = [], plaEnCode = [], plaEnCity = [], chkin = [];
				
				for(var i=0; i < mdLen; i++){
					plaExCode.push($('.sc-search-box.on .ol-list-qsb [class*="air-md-"]').eq(i).find('.places-exit .on .code').text() || '');
					plaExCity.push($('.sc-search-box.on .ol-list-qsb [class*="air-md-"]').eq(i).find('.places-exit .on .city').text() || '');
					plaEnCode.push($('.sc-search-box.on .ol-list-qsb [class*="air-md-"]').eq(i).find('.places-entry .on .code').text() || '');
					plaEnCity.push($('.sc-search-box.on .ol-list-qsb [class*="air-md-"]').eq(i).find('.places-entry .on .city').text() || '');
					chkin.push($('.sc-search-box.on .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin').data('day') || '');
				}
			}
			else{
				plaExCode = $('.sc-search-box.on .places-exit .on .code').text() || ''; 
				plaExCity = $('.sc-search-box.on .places-exit .on .city').text() || '';
				plaEnCode = $('.sc-search-box.on .places-entry .on .code').text() || '';
				plaEnCity = $('.sc-search-box.on .places-entry .on .city').text() || '';
				chkin = $('.sc-search-box.on .qsb-dates .qsb-chkin').data('day') || '';
			}
			
			tempData = {
				type: type,
				area: area,
				idx: idx,
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
			
			pvmSearch.changePage('air-lpu.html');
		},
		comSearchAirLpu: function(){
			var $currentCity = null; // 도시영역 저장
			var $currentDate = null; // 날짜영역 저장
			var settingData = pvmSearch.getSearchData(); 
			var _type; //타입
			var _path = '.sc-search-box.on'; //기본 path
			//다구간 관련
			var _MDMinCnt; //최소 구간
			var _MDCnt; // 다구간 on
			var _MDMax; //다구간 최대
			var _mdDateIdx; //다구간 index
			var _mdDateArr; //다중날짜 처리 array
			var timeAddTextToMD; //텍스트 삽입 중복 방지
			
			if(searchData == null){ return false; }
			//console.log('가져오기 = ', settingData);
			
			//타입 설정
			if(settingData){
				switch(settingData.type) {
					case 'shuttle':
						$('.w-search-lp').addClass('ot-shuttle');
						break;	
					case 'oneway':
						$('.w-search-lp').addClass('ot-oneway');
						break;	
					case 'multiway':
						$('.w-search-lp').addClass('ot-multiway');
						break;	
					default :
						$('.w-search-lp').addClass('ot-shuttle');
				}
			}
			
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 셋팅
			//reset height
			function resetMDHeight(){
				$('.ot-multiway .sc-search-tab').height($('.ot-multiway .ol-list-tab').height());
				$('.uis-datepicker-weekend .udw-inner').css({'top':$('.ot-multiway .ol-list-tab').height()+$('.uis-datepicker-weekend').height()});
			}
			
			//position date 
			function positionActiveDate(){
				setTimeout(function(){
					$('html,body').stop().animate({scrollTop:$('.ui-page-active .uis-datepicker .ui-state-active').offset().top-300},200);
				},250);
			}
			
			//settingData 셋팅
			function initSearchData(){
				var area = settingData.area; //클릭 영역
				var idx = settingData.idx; //다구간 idx
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
				var idxPath = '.sc-search-tab .lit-base';
				_type = settingData.type; //타입
				
				if(_type == 'multiway'){	
					_MDMinCnt = 2; //최소 구간
					_MDMax = $('.ot-multiway .ol-list-tab [class*="t-air-md-"]').length; //다구간 최대
					_mdDateArr = chkin; //다중날짜 처리 array
					timeAddTextToMD = null; //텍스트 삽입 중복 방지
					idxPath = '.ot-multiway .ol-list-tab [class*="t-air-md-"]:eq('+idx+')'; //다구간 index
					
					for(var i in plaExCode){
						//다구간 on
						if(i >= _MDMinCnt){
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).addClass('on');
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i*1-1).find('.slt-btn-add').addClass('on');
						}
						
						//reset MD height
						resetMDHeight();
						
						//출발
						if(plaExCode[i] != '' && plaExCity[i] != ''){
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-places .places-exit .slt-input').text(plaExCode[i]);
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-places .places-exit .slt-input').addClass('on');
						}

						//도착
						if(plaEnCode[i] != '' && plaEnCity[i] != ''){
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-places .places-entry .slt-input').text(plaEnCode[i]);
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-places .places-entry .slt-input').addClass('on');
						}

						//날짜
						if(chkin[i] != ''){
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin').data('day', chkin[i]);
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin').addClass('on');
						}
					}
					
					_MDCnt = $('.ot-multiway .ol-list-tab [class*="t-air-md-"].on').length; // 다구간 on
										
					initMDDate(); //다구간 날짜 셋팅
				}
				else{
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
							$('.sc-search-tab .slt-dates .slt-chkin').text(pvmFrontScript.onSelectTxtDaySt2($('.ui-page-active .uis-datepicker'), chkin));
							$('.ui-page-active .uis-datepicker').datepicker('setDate', new Date(chkin));
							$('.sc-search-tab .slt-dates .slt-chkin').addClass('on');
						}

						if(chkout != ''){
							$('.sc-search-tab .slt-dates .slt-chkout').data('day', chkout);
							$('.sc-search-tab .slt-dates .slt-chkout').text(pvmFrontScript.onSelectTxtDaySt2($('.ui-page-active .uis-datepicker'), chkout));
							$('.ui-page-active .uis-datepicker').datepicker('setDate', new Date(chkout));
							$('.sc-search-tab .slt-dates .slt-chkout').addClass('on');
						}
					}
				}

				//인원 셋팅
				$('.uis-custom-number-adt').uisCustomNumber({num: adt});
				$('.uis-custom-number-chd').uisCustomNumber({num: chd});
				$('.uis-custom-number-inf').uisCustomNumber({num: inf});
				
				//일반석
				if(comp == 'Y'){
					$('.sc-search-area .uis-capacity-select li').eq(0).addClass('on');
				}
				//프리미엄 이코노미석
				if(comp == 'P'){
					$('.sc-search-area .uis-capacity-select li').eq(1).addClass('on');
				}
				//비즈니스석
				if(comp == 'C'){
					$('.sc-search-area .uis-capacity-select li').eq(2).addClass('on');
				}
				//일등석
				if(comp == 'F'){
					$('.sc-search-area .uis-capacity-select li').eq(3).addClass('on');
				}		

				//국내선인 경우 셋팅(좌석 숨김)
				//$('.uis-capacity-select .ui-capacity .uis-capacity-select').hide();
				
				//인원,좌석 결과 셋팅				
				var sum = adt+chd+inf;
				if(sum > 0 ){
					$('.sc-search-tab .slt-capacity .slt-input').addClass('on');	
					$('.sc-search-tab .slt-capacity .slt-input .total-num').text(sum);	
				}				
				if(comp != ''){
					var c = $('.sc-search-area .uis-capacity-select li.on .name').text();
					$('.sc-search-tab .slt-capacity .slt-input').addClass('on');	
					$('.sc-search-tab .slt-capacity .slt-input .type-seat').text(c);	
				}
				
				//해당 탭 보여주기
				switch(area) {
					case 'mainsel-exit':
						$(idxPath).find('.places-exit [data-tab="mainsel"]').trigger('click');
						break;	   
					case 'mainsel-entry':
						$(idxPath).find('.places-entry [data-tab="mainsel"]').trigger('click');
						break;	   
					case 'calendar':
						$(idxPath).find('[data-tab="calendar"]').trigger('click');
						break;
					case 'capacity':
						if(_type == 'multiway'){	
							$('.sc-search-tab [data-tab="capacity"]').trigger('click');
						}
						else{
							$('.sc-search-tab .lit-base [data-tab="capacity"]').trigger('click');
						}
						break;
					default :
						$(idxPath).find('.places-exit [data-tab="mainsel"]').trigger('click');
				}
			}
									
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 컨트롤 event
			//하단 검색 박스 설정
			$(document).on('click', '.sc-search-tab .list-tab [data-tab]', function(e){
				var _this = $(this);
				var type = $(this).data('tab');
				
				//상단 tab on, off
				if(!_this.hasClass('on')){
					$('.sc-search-tab .list-tab .slt-area.on').removeClass('on');
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
						pvmFrontScript.changeTitle('출발 도시 선택');
					}
					else if($currentCity.closest('.places-entry').hasClass('places-entry')){
						$('.sc-search-area .uis-mainsel .uis-input .inp-search').attr('placeholder','어디에 도착 하시나요?');
						pvmFrontScript.changeTitle('도착 도시 선택');
					}	
				}
				
				//달력 셋팅
				if(type == 'calendar'){
					$currentDate = _this;
					_mdDateIdx = $currentDate.closest('li[class*="t-air-md-"].on').index();
					pvmFrontScript.changeTitle('여행 날짜 선택');

					if(_type == 'multiway'){
						if($currentDate.find('.slt-chkin').data('day') != ''){
							$(document).scrollTop($('.ui-page-active .uis-datepicker [title="'+$currentDate.find('.slt-chkin').data('day')+'"]').offset().top-300);
						}
					}
					else if($('.ui-page-active .uis-datepicker .ui-state-active').length > 0){
						$(document).scrollTop($('.ui-page-active .uis-datepicker .ui-state-active').offset().top-300);
					}
				}
				
				//인원,좌석 셋팅
				if(type == 'capacity'){
					//국내선인 경우 셋팅(좌석 숨김)
					//$('.uis-capacity-select .ui-capacity .uis-capacity-select').hide();
					pvmFrontScript.changeTitle('인원 및 좌석 선택');
				}
				
				e.preventDefault();
			});				
			
			//----------------------------------- 도시			
			//도시 검색 click
			$(document).on('click', '.sc-search-area .uis-mainsel .uis-list a', function(e){
				if(!$(this).hasClass('tit-rec')){
					var city = $(this).find('.name-det').text(); //도시 이름(임시)
					var code = $(this).find('.code').text(); //도시 코드(임시)
					
					if(_type == 'multiway'){
						var idx = $currentCity.closest('li[class*="t-air-md-"].on').index();
						_path = '.sc-search-box.on .ol-list-qsb [class*="air-md-"]:eq('+idx+')';
					}

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
						if(!$(_path).find('.places-exit .qsb-area').hasClass('on')){
							$(_path).find('.places-exit .qsb-area').addClass('on')
						}
						$(_path).find('.places-exit .code').text(code);
						$(_path).find('.places-exit .city').text(city);
					}
					else if($currentCity.closest('.places-entry').length > 0){
						if(!$(_path).find('.places-entry .qsb-area').hasClass('on')){
							$(_path).find('.places-entry .qsb-area').addClass('on')
						}
				   		$(_path).find('.places-entry .code').text(code);
						$(_path).find('.places-entry .city').text(city);
					}
					
			   	}
				e.preventDefault();
			});
			
			//도시 검색 input keyup
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('keyup', function(){
				if(!$(this).closest('.uis-input').hasClass('isFocus')){
					$(this).closest('.uis-input').addClass('isFocus');
				}
			});

			//도시 검색 input focusin
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('focusin', function(){
				if($(this).val() != ''){
					$(this).val('');
				}
				
				if(!$(this).closest('.uis-input').hasClass('isFocus')){
					$(this).closest('.uis-input').addClass('isFocus');
				}
			});

			//도시 검색 input focusout
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('focusout', function(){
				if($(this).closest('.uis-input').hasClass('isFocus')){
					$(this).closest('.uis-input').removeClass('isFocus');
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
				maxDate: '+365',
				numberOfMonths: [13,1],
				dateFormat: 'yy/mm/dd',
				beforeShowDay: function(date) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkin').data('day'));
					var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkout').data('day'));
					return pvmFrontScript.beforeShowDayMark(date, date1, date2);
				},
				onSelect: function(dateText, inst) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkin').data('day'));
					var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkout').data('day'));
					var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
					var txtDay = pvmFrontScript.onSelectTxtDay($(this), dateText);
					var txtDayVer2 = pvmFrontScript.onSelectTxtDaySt2($(this), dateText);

					//출발, 도착 모두 선택인 경우, 아무것도 선택이 없는 경우(출발)
					if (!date1 || date2) {
						//data input
						$('.ot-shuttle .slt-chkin').data('day', dateText);
						$('.ot-shuttle .slt-chkout').data('day', '');
						//panel input
						$('.ot-shuttle .slt-chkin').html(txtDayVer2);
						$('.ot-shuttle .slt-chkin').addClass('on');
						$('.ot-shuttle .slt-chkout').html('도착일');
						$('.ot-shuttle .slt-chkout').removeClass('on');
						//sbox input
						$('.o-shuttle .qsb-dates .qsb-area').addClass('on')
						$('.o-shuttle .qsb-dates .qsb-chkin').addClass('on');
						$('.o-shuttle .qsb-dates .qsb-chkin').data('day', dateText);
						$('.o-shuttle .qsb-dates .qsb-chkin .txt').html(txtDay);
						$('.o-shuttle .qsb-dates .qsb-chkout').removeClass('on');
						$('.o-shuttle .qsb-dates .qsb-chkout').data('day', '');
						$('.o-shuttle .qsb-dates .qsb-chkout .txt').html('');
					} else {
						//출발 보다 이전 날짜 선택
						if( selectedDate.getTime() < date1.getTime() ) {
							//출발 -> 도착 이동
							//data input 
							$('.ot-shuttle .slt-chkout').data('day', $('.ot-shuttle .slt-chkin').data('day'));
							//panel input
							$('.ot-shuttle .slt-chkout').html($('.ot-shuttle .slt-chkin').html());
							$('.ot-shuttle .slt-chkout').addClass('on');
							//sbox input
							$('.o-shuttle .qsb-dates .qsb-chkout').addClass('on');
							$('.o-shuttle .qsb-dates .qsb-chkout').data('day', $('.o-shuttle .qsb-dates .qsb-chkin').data('day'));
							$('.o-shuttle .qsb-dates .qsb-chkout .txt').html($('.o-shuttle .qsb-dates .qsb-chkin .txt').html());							

							//출발 셋팅
							//data input 
							$('.ot-shuttle .slt-chkin').data('day', dateText);
							//panel input
							$('.ot-shuttle .slt-chkin').html(txtDayVer2);
							//sbox input
							$('.o-shuttle .qsb-dates .qsb-chkin').data('day', dateText);
							$('.o-shuttle .qsb-dates .qsb-chkin .txt').html(txtDay);
						} 
						else {
							//출발이후 선택시(도착)
							//data input 		
							$('.ot-shuttle .slt-chkout').data('day', dateText);
							//panel input
							$('.ot-shuttle .slt-chkout').html(txtDayVer2);
							$('.ot-shuttle .slt-chkout').addClass('on');
							//sbox input
							$('.o-shuttle .qsb-dates .qsb-chkout').addClass('on');
							$('.o-shuttle .qsb-dates .qsb-chkout').data('day', dateText);
							$('.o-shuttle .qsb-dates .qsb-chkout .txt').html(txtDay);
						}
					}
					
					//position date 
					positionActiveDate();
				}
			});
			
			//캘린더 datepicker - 편도
			$('.ui-page-active .ot-oneway .uis-datepicker').datepicker({
				showMonthAfterYear: true,
				yearSuffix: '<span class="ui-datepicker-dot">.</span>',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
				minDate: '0',
				maxDate: '+365',
				numberOfMonths: [13,1],
				dateFormat: 'yy/mm/dd',
				beforeShowDay: function(date) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-oneway .slt-chkin').data('day'));
					return pvmFrontScript.beforeShowDayMark(date, date1);
				},
				onSelect: function(dateText, inst) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-oneway .slt-chkin').data('day'));
					var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
					var txtDay = pvmFrontScript.onSelectTxtDay($(this), dateText);
					var txtDayVer2 = pvmFrontScript.onSelectTxtDaySt2($(this), dateText);
					
					//data input
					$('.ot-oneway .slt-chkin').data('day', dateText);
					//panel input
					$('.ot-oneway .slt-chkin').html(txtDayVer2);
					$('.ot-oneway .slt-chkin').addClass('on');
					//sbox input
					$('.o-oneway .qsb-dates .qsb-area').addClass('on')
					$('.o-oneway .qsb-dates .qsb-chkin').addClass('on');
					$('.o-oneway .qsb-dates .qsb-chkin').data('day', dateText);
					$('.o-oneway .qsb-dates .qsb-chkin .txt').html(txtDay);
					
					//position date 
					positionActiveDate();
				}
			});
			
			//캘린더 datepicker - 다구간
			$('.ui-page-active .ot-multiway .uis-datepicker').datepicker({
				showMonthAfterYear: true,
				yearSuffix: '<span class="ui-datepicker-dot">.</span>',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
				minDate: '0',
				maxDate: '+365',
				numberOfMonths: [13,1],
				dateFormat: 'yy/mm/dd',
				onSelect: function(dateText, inst) {
					var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
					//다중날짜 체크
					checkMdDate(_mdDateIdx, selectedDate);
					
					//position date 
					positionActiveDate();
				}
			});
			
			//다구간 - 구간 추가 click
			$('.ot-multiway .b-add-multiway').on('click', function(){
				_MDCnt++;
				if(_MDCnt > _MDMax){
					_MDCnt = _MDMax;
					alert('여정은 총 ' + _MDCnt + '개 까지만 가능합니다.\n' + _MDCnt + '개 이상의 여정이 있으시다면 1;1문의로 요청해 주시기 바랍니다.');
					return false;
				}
				else{
					$(this).parent('.slt-btn-add').addClass('on');
					$('.ot-multiway .t-air-md-'+_MDCnt).addClass('on');
					_mdDateArr.push(""); //다중날짜 추가
					//sbox trigger
					$('.sc-air .o-multiway .add-md').trigger('click');
					//reset height
					resetMDHeight();
				}
			});
			
			//다구간 - 구간 제거 click
			$('.ot-multiway .b-remove-multiway').on('click', function(){
				_MDCnt--;
				if(_MDCnt < _MDMinCnt){
					_MDCnt = _MDMinCnt;
					alert('출발 및 귀국 여정은 삭제하실 수 없습니다.');
					return false;
				}
				else{
					var removeIdx = $(this).closest('[class*="t-air-md-"].on').index();
					var openTotal = $('.ot-multiway .ol-list-tab [class*="t-air-md-"].on').length;
					//console.log('삭제구간 = ', removeIdx, removeIdx+1, '노출된 총구간 = ', openTotal);

					//삭제구간 부터 데이터 초기화하고 한칸씩 옮김
					$('.ot-multiway .ol-list-tab [class*="t-air-md-"].on').each(function(){
						var idx = $(this).index();
						if(idx >= removeIdx){
							//qsb 초기화
							$(this).find('.slt-places .slt-area.on, .slt-places .slt-input.on, .slt-dates .slt-input.on').removeClass('on');
							$(this).find('.slt-places .places-exit .slt-input').text('출발');
							$(this).find('.slt-places .places-entry .slt-input').text('도착');
							$(this).find('.slt-dates .slt-chkin').text('출발일');
							$(this).find('.slt-dates .slt-chkin').data('day','');

							//다음 데이터 적용
							var exit = $(this).next().find('.places-exit .slt-input'); //출발
							var entry = $(this).next().find('.places-entry .slt-input'); //도착

							if(exit.hasClass('on')){
								$(this).find('.places-exit .slt-input').addClass('on');					
								$(this).find('.places-exit .slt-input').text($(this).next().find('.places-exit .slt-input').text());
							}

							if(entry.hasClass('on')){
								$(this).find('.places-entry .slt-input').addClass('on');					
								$(this).find('.places-entry .slt-input').text($(this).next().find('.places-entry .slt-input').text());
							}
						}
					});
					
					//버튼 변경
					$('.ot-multiway .t-air-md-'+(openTotal-1)+' .slt-btn-add').removeClass('on');

					//맨뒤에 있는 구간 숨김
					$('.ot-multiway .t-air-md-'+openTotal).removeClass('on');
					
					//sbox trigger
					$('.sc-air .o-multiway .air-md-'+(removeIdx*1+1)+' .remove-md a').trigger('click');
					
					//다중날짜 리셋
					_mdDateArr.splice(removeIdx, 1);
					initMDDate();
					
					//reset height
					resetMDHeight();
				}
			});
			
			//다구간 - 다중날짜 셋팅
			function initMDDate(){
				//console.log('s initMDDate = ', _mdDateArr);

				//여행 날짜 표시 리셋
				for(var i in _mdDateArr){
					if(_mdDateArr[i] != ""){
						var txtDay = pvmFrontScript.onSelectTxtDaySt2($('.ui-page-active .ot-multiway .uis-datepicker'), _mdDateArr[i]);
						var txtDayVer3 = pvmFrontScript.onSelectTxtDaySt3($('.ui-page-active .ot-multiway .uis-datepicker'), _mdDateArr[i]);
						
						//data input
						$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin').data('day', _mdDateArr[i]);
						
						//panel input
						if(!$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin').hasClass('on')){
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin').addClass('on');
						}
						$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin').text(txtDay);	
						
						//sbox input
						$('.o-multiway .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-area').addClass('on');
						$('.o-multiway .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin').addClass('on');
						$('.o-multiway .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin .txt').text(txtDayVer3);
						$('.o-multiway .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin').data('day', _mdDateArr[i]);
					}
					else{
						//data input
						$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin').data('day', '');
						//panel input
						$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin.on').removeClass('on');
						$('.ot-multiway .ol-list-tab [class*="t-air-md-"]').eq(i).find('.slt-dates .slt-chkin').text('출발일');	
						//sbox input
						$('.o-multiway .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-area.on').removeClass('on');
						$('.o-multiway .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin.on').removeClass('on');
						$('.o-multiway .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin .txt').text('');
						$('.o-multiway .ol-list-qsb [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin').data('day', '');
					}
				}

				//캘린더 마크 리셋
				var tempParseDateArr = [];
				for(var i in _mdDateArr){
					//날짜만 모아서 넘김
					if(_mdDateArr[i] != ""){
						tempParseDateArr.push($.datepicker.parseDate('yy/mm/dd', _mdDateArr[i]));
					}
				}
				//console.log('tempParseDateArr = ', tempParseDateArr);

				//캘린더 마크 표시
				//datepicker - beforeShowDay
				$('.ui-page-active .ot-multiway .uis-datepicker').datepicker('option', 'beforeShowDay', function(date) {
					return pvmFrontScript.beforeShowDayMarkMD(date, tempParseDateArr);
				}).find('.ui-state-active').removeClass("ui-state-active"); 

				//텍스트 삽입
				addTextToMD($('.ui-page-active .ot-multiway .uis-datepicker'));
			}

			//다구간 - 텍스트 삽입
			function addTextToMD($this) {
				if(timeAddTextToMD){
				   clearTimeout(timeAddTextToMD);
					timeAddTextToMD = null;
				}		
				timeAddTextToMD = setTimeout(function(){
					//console.log('addTextToMD = ', _mdDateArr);
					for(var i in _mdDateArr){
						if(_mdDateArr[i] != ""){
							if($this.find('.isMD[title="'+_mdDateArr[i]+'"] .txt').length > 0){
								var t = $this.find('.isMD[title="'+_mdDateArr[i]+'"] .txt').text() + ','+(i*1+1);
								$this.find('.isMD[title="'+_mdDateArr[i]+'"] .txt').text(t);
							}
							else{
								$this.find('.isMD[title="'+_mdDateArr[i]+'"]').append('<em class="txt">여정'+(i*1+1)+'</em>');
							}
						}
					}
				},1);
			}

			//다구간 - 다중날짜 체크
			function checkMdDate(num, date){
				var mdDateArrGetTime = [],
					newDate = date.getTime(),
					isDelete = false;

				//getTime 셋팅
				for(var i in _mdDateArr){
					if(_mdDateArr[i] != ""){
						mdDateArrGetTime.push($.datepicker.parseDate('yy/mm/dd', _mdDateArr[i]).getTime());
					}
					else{
						mdDateArrGetTime.push(_mdDateArr[i]);
					}
				}

				//console.log('s _mdDateArr = ', _mdDateArr);
				//console.log('s mdDateArrGetTime = ', mdDateArrGetTime);

				//날짜 체크
				for(var i=0; i<mdDateArrGetTime.length; i++){
					if(!isDelete){
						if(i < num){
							//console.log('기준보다 작은 구간 탐색 = ', i);
							if(mdDateArrGetTime[i] != "" && mdDateArrGetTime[i] > newDate){
								//console.log('기준보다 작은 구간 탐색 - 선택보다 더 작음 이후 전부 비우기! = ', mdDateArrGetTime[i], i);
								_mdDateArr.splice(i, 1, $.datepicker.formatDate('yy/mm/dd', date));
								isDelete = true;
							}
						}
						else if(i > num){
							//console.log('기준보다 큰 구간 탐색 = ', i);
							if(mdDateArrGetTime[i] != "" && mdDateArrGetTime[i] < newDate){
								//console.log('기준보다 큰 구간 탐색 - 선택보다 더 큼 이후 전부 비우기! = ', mdDateArrGetTime[i], i);
								_mdDateArr.splice(i, 1, "");
								_mdDateArr.splice(num, 1, $.datepicker.formatDate('yy/mm/dd', date));
								isDelete = true;
							}
						}
						else{
							//console.log('비어있거나, 범위유효', i);
							_mdDateArr.splice(num, 1, $.datepicker.formatDate('yy/mm/dd', date));
						}
					}
					else{
						//console.log('날짜 비우기!', i);
						_mdDateArr.splice(i, 1, "");
					}
				}

				initMDDate(); //다중날짜 리셋
				
				//다음 구간 표시
				for(var i in _mdDateArr){
					if(_mdDateArr[i] == ""){
						setTimeout(function(){
							$('.ot-multiway .ol-list-tab [class*="t-air-md-"]:eq('+i+')').find('[data-tab="calendar"]').trigger('click');
						}, 100);
						return false;
					}
				}

				//console.log('e _mdDateArr = ', _mdDateArr);
			}
			
						
			//event 바인딩
			pvmFrontScript.comSearchEvtBind($('.ui-page-active .w-search-lp'));
			
			////----------------------------------- event 바인딩 이후 event
			//searchData 셋팅
			initSearchData();
			
			//----------------------------------- 인원,좌석	
			//인원 컨트롤
			function setCapacity(type, action){
				var cType = type;
				var cAction = action;
				var adtCnt = parseInt($('.uis-capacity-number .num-adt').text()); //성인
				var chdCnt = parseInt($('.uis-capacity-number .num-chd').text()); //아동
				var infCnt = parseInt($('.uis-capacity-number .num-inf').text()); //유아
				//console.log('setCapacity click = ', cType, cAction, adtCnt, chdCnt, infCnt);
				
				//조건
				
				//인원 결과 셋팅
				var sum = adtCnt+chdCnt+infCnt;
				//panel input
				$('.sc-search-tab .slt-capacity .slt-input .total-num').text(sum);	
				//sbox input
				$('.sc-search-box.on .qsb-capacity .qsb-input').data('adt', adtCnt);
				$('.sc-search-box.on .qsb-capacity .qsb-input').data('chd', chdCnt);
				$('.sc-search-box.on .qsb-capacity .qsb-input').data('inf', infCnt);
				$('.sc-search-box.on .qsb-capacity .adt-txt .num').text(adtCnt);
				$('.sc-search-box.on .qsb-capacity .chd-txt .num').text(chdCnt);
				$('.sc-search-box.on .qsb-capacity .inf-txt .num').text(infCnt);
				
				if(chdCnt > 0){$('.sc-search-box.on .qsb-capacity .chd-txt').show();}
				else{$('.sc-search-box.on .qsb-capacity .chd-txt').hide();}
				
				if(infCnt > 0){$('.sc-search-box.on .qsb-capacity .inf-txt').show();}
				else{$('.sc-search-box.on .qsb-capacity .inf-txt').hide();}
			}
			
			//인원 minus, plus click
			$('.uis-custom-number .ucn-crt button').on('click', function(e){
				var type = $(this).data('type').split('-')[0];
				var action = $(this).data('type').split('-')[1];
				setCapacity(type, action);
				e.preventDefault();
			});
					
			//좌석 선택
			$(document).on('click', '.uis-capacity-select li a', function(e){
				var opt = $(this).data('option');
				var name = $(this).find('.name').text();
				
				//좌석 결과 셋팅
				//
				$('.sc-search-tab .slt-capacity .slt-input .type-seat').text(name);	
				//
				$('.sc-search-box.on .qsb-capacity .qsb-input').data('data-comp', opt);
				$('.sc-search-box.on .qsb-capacity .type-seat').text(name);
				e.preventDefault();
			});
		},
		comSearchHotel: function(){
			//상단 검색 tab 메뉴 event
			pvmSearch.comSearchEvent();
			
			//여행지 click
			$('.sc-hotel .places-exit [data-panel="mainsel"]').on('click', function(e){
				pvmSearch.setHotelData('mainsel-exit');
				pvmSearch.changePage('hotel-lpu.html');
				e.preventDefault();
			});		
			
			//여행날짜
			$('.sc-hotel  [data-panel="calendar"]').on('click', function(e){
				pvmSearch.setHotelData('calendar');
				pvmSearch.changePage('hotel-lpu.html');
				e.preventDefault();
			});
			
			//객실
			$('.sc-hotel  [data-panel="capacity"]').on('click', function(e){
				pvmSearch.setHotelData('capacity');
				pvmSearch.changePage('hotel-lpu.html');
				e.preventDefault();
			});	
			
		},
		setHotelData: function($area){
			var tempData = {};
			var type = $('.sc-search-box.on').data('sc') || ''; //타입
			var area = $area || ''; //클릭 영역
			var plaExCity = $('.sc-search-box.on .qsb-places .on .city .txt').text() || ''; //여행지
			var chkin = $('.sc-search-box.on .qsb-dates .qsb-chkin').data('day') || ''; //체크인
			var chkout = $('.sc-search-box.on .qsb-dates .qsb-chkout').data('day') || ''; //체크아웃
			var rDays = parseInt($('.sc-search-box.on .qsb-dates .qsb-result-days num').text()); //박
			var room1 = $('.sc-search-box.on .qsb-capacity .qsb-input').data('room1'); //1인실
			var room2d = $('.sc-search-box.on .qsb-capacity .qsb-input').data('room2d'); //2인실 더블
			var room2t = $('.sc-search-box.on .qsb-capacity .qsb-input').data('room2t'); //2인실 트윈
			var room3 = $('.sc-search-box.on .qsb-capacity .qsb-input').data('room3'); //3인실
			
			tempData = {
				type: type,
				area: area,
				places: plaExCity,
				dates: {
					chkin: chkin,
					chkout: chkout,
					rDays: rDays
				},
				capacity:{
					room1: room1,
					room2d: room2d,
					room2t: room2t,
					room3: room3
				}
			}
			
			searchData = tempData;
		},
		comSearchHotelLpu: function(){
			var $currentCity = null; // 도시,호텔 영역 저장
			var settingData = pvmSearch.getSearchData(); 
			
			if(searchData == null){ return false; }
			//console.log('가져오기 = ', settingData);
			
			//타입 설정
			if(settingData){
				switch(settingData.type) {
				case 'inth':
					$('.w-search-lp').addClass('ot-inth');
					break;	
				case 'domh':
					$('.w-search-lp').addClass('ot-domh');
					break;	
				default :
					$('.w-search-lp').addClass('ot-inth');
			}
			}
			
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 셋팅
			//settingData 셋팅
			function initSearchData(){
				var type = settingData.type; //타입
				var area = settingData.area; //클릭 영역
				var plaExCity = settingData.places; //여행지
				var chkin = settingData.dates.chkin; //체크인
				var chkout = settingData.dates.chkout; //체크아웃
				var rDays = settingData.dates.rDays; //박
				var room1 = settingData.capacity.room1; //1인실
				var room2d = settingData.capacity.room2d; //2인실 더블
				var room2t = settingData.capacity.room2t; //2인실 트윈
				var room3 = settingData.capacity.room3; //3인실

				//목적지
				if(plaExCity != ''){
					$('.sc-search-tab .slt-places .slt-input').text(plaExCity);
					$('.sc-search-tab .slt-places .slt-input').addClass('on');
				}
				
				//날짜
				if(chkin != '' || chkout != ''){
					$('.sc-search-tab .slt-dates .slt-area').addClass('on');
					
					if(chkin != ''){
						$('.sc-search-tab .slt-dates .slt-chkin').data('day', chkin);
						$('.sc-search-tab .slt-dates .slt-chkin').text(pvmFrontScript.onSelectTxtDaySt2($('.ui-page-active .uis-datepicker'), chkin));
						$('.ui-page-active .uis-datepicker').datepicker('setDate', new Date(chkin));
						$('.sc-search-tab .slt-dates .slt-chkin').addClass('on');
					}
					
					if(chkout != ''){
						$('.sc-search-tab .slt-dates .slt-chkout').data('day', chkout);
						$('.sc-search-tab .slt-dates .slt-chkout').text(pvmFrontScript.onSelectTxtDaySt2($('.ui-page-active .uis-datepicker'), chkout));
						$('.ui-page-active .uis-datepicker').datepicker('setDate', new Date(chkout));
						$('.sc-search-tab .slt-dates .slt-chkout').addClass('on');
					}
				}

				//객실 셋팅					
				$('.uis-custom-number-room1').uisCustomNumber({num: room1});
				$('.uis-custom-number-room2d').uisCustomNumber({num: room2d});
				$('.uis-custom-number-room2t').uisCustomNumber({num: room2t});
				$('.uis-custom-number-room3').uisCustomNumber({num: room3});
				
				//객실 결과 셋팅
				var txt = '', roomArr = [];
				if(room1 > 0){
					roomArr.push('<span class="type-room">1인실</span><span><em class="num"> '+room1+'</em>개</span>');
				}

				if(room2d > 0){
					roomArr.push('<span class="type-room">2인실(더블요청)</span><span><em class="num"> '+room2d+'</em>개</span>');
				}

				if(room2t > 0){
					roomArr.push('<span class="type-room">2인실(트윈요청)</span><span><em class="num"> '+room2t+'</em>개</span>');
				}

				if(room3 > 0){
					roomArr.push('<span class="type-room">3인실</span><span><em class="num"> '+room3+'</em>개</span>');
				}

				for(var i in roomArr){
					if(i > 0){
						txt += ', ';
					}
					txt += roomArr[i];
				}
				
				//panel input
				$('.sc-search-tab .slt-capacity .slt-input').empty();
				$('.sc-search-tab .slt-capacity .slt-input').html(txt);	
				
				if(txt == ''){
					//panel input	
					$('.sc-search-tab .slt-capacity .slt-input.on').removeClass('on');	
					$('.sc-search-tab .slt-capacity .slt-input').text('객실타입');	
				}
				else{
					//panel input
					$('.sc-search-tab .slt-capacity .slt-input').addClass('on');	
				}
				
				//해당 탭 보여주기
				switch(area) {
					case 'mainsel-exit':
						$('.sc-search-tab [data-tab="mainsel"]').trigger('click');
						break;		   
					case 'calendar':
						$('.sc-search-tab [data-tab="calendar"]').trigger('click');
						break;
					case 'capacity':
						$('.sc-search-tab [data-tab="capacity"]').trigger('click');
						break;
					default :
						$('.sc-search-tab [data-tab="mainsel"]').trigger('click');
				}
			}
									
			//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 컨트롤 event
			//하단 검색 박스 설정
			$(document).on('click', '.sc-search-tab .list-tab [data-tab]', function(e){
				var _this = $(this);
				var type = $(this).data('tab');
				
				//상단 tab on, off
				if(!_this.hasClass('on')){
					$('.sc-search-tab .list-tab .slt-area.on').removeClass('on');
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
					pvmFrontScript.changeTitle('여행지 검색');	
					$('.sc-search-area .uis-mainsel .uis-input .inp-search').val($currentCity.find('.slt-input').data('city'));
				}
				
				//달력 셋팅
				if(type == 'calendar'){
					pvmFrontScript.changeTitle('숙박 날짜 선택');
					if($('.ui-page-active .uis-datepicker .ui-state-active').length > 0){
						$(document).scrollTop($('.ui-page-active .uis-datepicker .ui-state-active').offset().top-300);
					}
				}
				
				//객실 셋팅
				if(type == 'capacity'){
					pvmFrontScript.changeTitle('객실 타입 선택');
				}
				
				e.preventDefault();
			});				
			
			//----------------------------------- 도시			
			//도시 검색 click
			$(document).on('click', '.sc-search-area .uis-mainsel .uis-list a', function(e){
				if(!$(this).hasClass('tit-rec')){
					var city = $(this).find('.name').text(); //도시 이름(임시)

					//data input 
					$('.sc-search-area .uis-mainsel .uis-input .inp-search').val(city);

					//panel input
					if(!$currentCity.find('.slt-input').hasClass('on')){
						$currentCity.find('.slt-input').addClass('on')
					}
					$currentCity.find('.slt-input').text(city);
					
					//sbox input
					if(!$('.sc-search-box.on .places-exit .qsb-area').hasClass('on')){
						$('.sc-search-box.on .places-exit .qsb-area').addClass('on')
					}
					$('.sc-search-box.on .places-exit .city .txt').text(city);
					
					$('.uis-mainsel .inp-exp').hide();
			   	}
				e.preventDefault();
			});
			
			//도시 검색 input keyup
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('keyup', function(){
				if(!$(this).closest('.uis-input').hasClass('isFocus')){
					$(this).closest('.uis-input').addClass('isFocus');
				}
			});

			//도시 검색 input focusin
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('focusin', function(){
				if($(this).val() != ''){
					$(this).val('');
				}
				
				if(!$(this).closest('.uis-input').hasClass('isFocus')){
					$(this).closest('.uis-input').addClass('isFocus');
				}
			});

			//도시 검색 input focusout
			$('.sc-search-area .uis-mainsel .uis-input .inp-search').on('focusout', function(){
				if($(this).closest('.uis-input').hasClass('isFocus')){
					$(this).closest('.uis-input').removeClass('isFocus');
				}
				$(this).val($currentCity.find('.slt-input').data('city'));
				
				if($(this).val() != ''){
					$('.uis-mainsel .inp-exp').hide();
				}
				else{
					$('.uis-mainsel .inp-exp').show();
				}				
			});
			
			//검색어 input 삭제
			$('.sc-search-area .uis-mainsel .uis-input .b-clear').on('mousedown', function(){
				$(this).closest('.uis-input').find('.inp-search').val('');
			});			
			
			//----------------------------------- 캘린더
			//캘린더 datepicker
			$('.ui-page-active .uis-datepicker').datepicker({
				showMonthAfterYear: true,
				yearSuffix: '<span class="ui-datepicker-dot">.</span>',
				monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
				dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
				minDate: '0',
				maxDate: '+365',
				numberOfMonths: [13,1],
				dateFormat: 'yy/mm/dd',
				beforeShowDay: function(date) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ui-page-active .slt-chkin').data('day'));
					var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ui-page-active .slt-chkout').data('day'));
					return pvmFrontScript.beforeShowDayMark(date, date1, date2);
				},
				onSelect: function(dateText, inst) {
					var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ui-page-active .slt-chkin').data('day'));
					var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ui-page-active .slt-chkout').data('day'));
					var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
					var txtDay = pvmFrontScript.onSelectTxtDay($(this), dateText);
					var txtDayVer2 = pvmFrontScript.onSelectTxtDaySt2($(this), dateText);

					//체크인, 체크아웃 모두 선택인 경우, 아무것도 선택이 없는 경우(체크인)
					if (!date1 || date2) {
						//data input
						$('.ui-page-active .slt-chkin').data('day', dateText);
						$('.ui-page-active .slt-chkout').data('day', '');
						//panel input
						$('.ui-page-active .slt-chkin').html(txtDayVer2);
						$('.ui-page-active .slt-chkin').addClass('on');
						$('.ui-page-active .slt-chkout').html('');
						$('.ui-page-active .slt-chkout').removeClass('on');
						//sbox input
						$('.sc-search-box.on .qsb-dates .qsb-area').addClass('on')
						$('.sc-search-box.on .qsb-dates .qsb-chkin .txt').addClass('on');
						$('.sc-search-box.on .qsb-dates .qsb-chkin').data('day', dateText);
						$('.sc-search-box.on .qsb-dates .qsb-chkin .txt').html(txtDay);
						$('.sc-search-box.on .qsb-dates .qsb-chkout').removeClass('on');
						$('.sc-search-box.on .qsb-dates .qsb-chkout').data('day', '');
						$('.sc-search-box.on .qsb-dates .qsb-chkout .txt').html('');		
						
						$('.sc-search-box.on .qsb-dates .qsb-result-days').removeClass('on');

					} else {
						//체크인 보다 이전 날짜 선택
						
						// 박수 계산
						var duration = Math.abs(selectedDate.getTime() - date1.getTime());
						duration = Math.ceil(duration/(1000*3600*24));
						if(duration>15){
							$('.ui-page-active .uis-datepicker').datepicker('setDate', new Date($('.ui-page-active .slt-chkin').data('day')));
							alert("15박까지 예약할 수 있습니다.");
							return false;
						}
						
						if( selectedDate.getTime() < date1.getTime() ) {
							//체크인 -> 체크아웃 이동
							//data input 
							$('.ui-page-active .slt-chkout').data('day', $('.ui-page-active .slt-chkin').data('day'));
							//panel input
							$('.ui-page-active .slt-chkout').html($('.ui-page-active .slt-chkin').html());
							$('.ui-page-active .slt-chkout').addClass('on');
							//sbox input
							$('.sc-search-box.on .qsb-dates .qsb-chkout').addClass('on');
							$('.sc-search-box.on .qsb-dates .qsb-chkout').data('day', $('.sc-search-box.on .qsb-dates .qsb-chkin').data('day'));
							$('.sc-search-box.on .qsb-dates .qsb-chkout .txt').html($('.sc-search-box.on .qsb-dates .qsb-chkin .txt').html());

							//체크인 셋팅
							//data input 
							$('.ui-page-active .slt-chkin').data('day', dateText);
							//panel input
							$('.ui-page-active .slt-chkin').html(txtDayVer2);
							//sbox input
							$('.sc-search-box.on .qsb-dates .qsb-chkin').data('day', dateText);
							$('.sc-search-box.on .qsb-dates .qsb-chkin .txt').html(txtDay);
						} 
						else {
							if($('.sc-search-box.on .qsb-dates .qsb-chkin').data('day') == dateText){return false;} //같은날짜는 return
							
							//체크인이후 선택시(체크아웃)
							//data input 		
							$('.ui-page-active .slt-chkout').data('day', dateText);
							//panel input
							$('.ui-page-active .slt-chkout').html(txtDayVer2);
							$('.ui-page-active .slt-chkout').addClass('on');
							//sbox input
							$('.sc-search-box.on .qsb-dates .qsb-chkout').addClass('on');
							$('.sc-search-box.on .qsb-dates .qsb-chkout').data('day', dateText);
							$('.sc-search-box.on .qsb-dates .qsb-chkout .txt').html(txtDay);
						}
						
						//박수 표시
						if(!$('.sc-search-box.on .qsb-dates .qsb-result-days').hasClass('on')){
							$('.sc-search-box.on .qsb-dates .qsb-result-days').addClass('on');
						}
						$('.sc-search-box.on .qsb-dates .qsb-result-days .num').text(duration);
					}
				}
			});
			
			//event 바인딩
			pvmFrontScript.comSearchEvtBind($('.ui-page-active .w-search-lp'));
						
			////----------------------------------- event 바인딩 이후 event
			//searchData 셋팅
			initSearchData();
			
			//----------------------------------- 객실타입, 객실수
			//객실타입, 객실수 컨트롤
			function setCapacity(type, action){
				var cType = type;
				var cAction = action;
				var room1Cnt = parseInt($('.uis-capacity-number .num-room1').text()); //1인실
				var room2dCnt = parseInt($('.uis-capacity-number .num-room2d').text()); //2인실 더블
				var room2tCnt = parseInt($('.uis-capacity-number .num-room2t').text()); //2인실 트윈
				var room3Cnt = parseInt($('.uis-capacity-number .num-room3').text()); //3인실
				var roomArr = [];
				//console.log('setCapacity click = ', cType, cAction, room1Cnt, room2dCnt, room2tCnt, room3Cnt);

				//조건
								
				//객실 결과 셋팅
				var txt = '';
				if(room1Cnt > 0){
					roomArr.push('<span class="type-room">1인실</span><span><em class="num"> '+room1Cnt+'</em>개</span>');
				}

				if(room2dCnt > 0){
					roomArr.push('<span class="type-room">2인실(더블요청)</span><span><em class="num"> '+room2dCnt+'</em>개</span>');
				}

				if(room2tCnt > 0){
					roomArr.push('<span class="type-room">2인실(트윈요청)</span><span><em class="num"> '+room2tCnt+'</em>개</span>');
				}

				if(room3Cnt > 0){
					roomArr.push('<span class="type-room">3인실</span><span><em class="num"> '+room3Cnt+'</em>개</span>');
				}

				for(var i in roomArr){
					if(i > 0){
						txt += ', ';
					}
					txt += roomArr[i];
				}
				
				//panel input
				$('.sc-search-tab .slt-capacity .slt-input').empty();
				$('.sc-search-tab .slt-capacity .slt-input').html(txt);				
				//sbox input
				$('.sc-search-box.on .qsb-capacity .qsb-input').data('room1', room1Cnt);
				$('.sc-search-box.on .qsb-capacity .qsb-input').data('room2d', room2dCnt);
				$('.sc-search-box.on .qsb-capacity .qsb-input').data('room2t', room2tCnt);
				$('.sc-search-box.on .qsb-capacity .qsb-input').data('room3', room3Cnt);
				$('.sc-search-box.on .qsb-capacity .qsb-area').find('.qsb-input').empty();
				$('.sc-search-box.on .qsb-capacity .qsb-area').find('.qsb-input').html(txt);
				
				if(txt == ''){
					//panel input	
					if($('.sc-search-tab .slt-capacity .slt-input').hasClass('on')){
						$('.sc-search-tab .slt-capacity .slt-input').removeClass('on');	
						$('.sc-search-tab .slt-capacity .slt-input').text('객실타입');	
					}
					//sbox input
					if($('.sc-search-box.on .qsb-capacity .qsb-area').hasClass('on')){
						$('.sc-search-box.on .qsb-capacity .qsb-area').removeClass('on');
					}
				}
				else{
					//panel input
					if(!$('.sc-search-tab .slt-capacity .slt-input').hasClass('on')){
						$('.sc-search-tab .slt-capacity .slt-input').addClass('on');	
					}		
					//sbox input
					if(!$('.sc-search-box.on .qsb-capacity .qsb-area').hasClass('on')){
						$('.sc-search-box.on .qsb-capacity .qsb-area').addClass('on');
					}
				}	
			}
			
			//객실 minus, plus click
			$('.uis-custom-number .ucn-crt button').on('click', function(e){
				var type = $(this).data('type').split('-')[0];
				var action = $(this).data('type').split('-')[1];
				setCapacity(type, action);
				e.preventDefault();
			});
		}
	}	
}());
