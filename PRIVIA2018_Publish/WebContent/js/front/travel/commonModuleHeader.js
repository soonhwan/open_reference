var navData = {};


/**********************************************************************
  GNB와 Quick서치 관련
   
   1. 퀵서치와 메뉴의 활성화 상태를 지정한다.
   2. 각 페이지 별로 아래의 상수를 이용하여 설정
   3. 샘플 
        <script type="text/javascript">
            setActiveCode(QUICK_CODE_HOTEL, GNB_CODE_AIR);
        </script>
**********************************************************************/
var QUICK_CODE_AIR = "AIR";
var QUICK_CODE_HOTEL = "HOTEL";
var QUICK_CODE_FREE = "FREE";
var QUICK_CODE_DPRS_ITEM = "DPRS_ITEM";

var GNB_CODE_AIR = "AIR";
var GNB_CODE_HOTEL = "HOTEL";
var GNB_CODE_FREE = "FREE";
var GNB_CODE_DPRS = "DPRS";
var GNB_CODE_PACKAGE = "PACKAGE";
var GNB_CODE_DOMESTIC = "DOMESTIC";
var GNB_CODE_PROMOTION = "PROMOTION";









//document.domain = "priviatravel.com";

var QUICK_CODE = null;
var GNB_CODE = null;


// 활성화
function setActiveSearch(searchCode, gnbCode) {

	if (searchCode) QUICK_CODE = searchCode;
	if (gnbCode) GNB_CODE = gnbCode;

	comGbnFocus();
}

$(function(){
	comSearchInit();
	comGbnInit();
});

function showSearchTap(searchCode){
	var _searchCode = searchCode ? searchCode : QUICK_CODE;
	
	$('#header-sec').attr('class','');
	
	switch (_searchCode) {
		case QUICK_CODE_AIR:
			$('#header-sec').addClass('o-bg-air');
			$('.hs-search-menu .hss-menu [data-tabmain="air"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="shuttle"]').trigger('click');
			break;
		case QUICK_CODE_HOTEL:
			$('#header-sec').addClass('o-bg-hotel');
			$('.hs-search-menu .hss-menu [data-tabmain="hotel"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="inth"]').trigger('click');
			break;
		case QUICK_CODE_FREE:
			$('#header-sec').addClass('o-bg-free');
			$('.hs-search-menu .hss-menu [data-tabmain="free"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="free"]').trigger('click');
			break;
		case QUICK_CODE_DPRS_ITEM:
			$('#header-sec').addClass('o-bg-freetour');
			$('.hs-search-menu .hss-menu [data-tabmain="freetour"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="rentv"]').trigger('click');
			break;
		default :
			$('#header-sec').attr('class','o-bg-base');
			$('.hs-search-menu .hss-menu [data-tabmain="air"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="shuttle"]').trigger('click');
	}
}

//검색 공통 이벤트
function comSearchEvent(){
	//검색(도시) 리스트 스크롤
	$(".uis-citysearch-list .list").mCustomScrollbar({theme:"minimal-dark"});
		
	//검색 메인 tab click
	$('.hs-search-menu .hss-menu [data-tabmain]').on('click', function(e){
		if(!$(this).closest('.hss-menu').hasClass('on')){
			var code = $(this).data('tabmain');
			$('.hs-search-menu .hss-menu.on').removeClass('on');
			$(this).closest('.hss-menu').addClass('on');
			$('.hs-search-cont .hss-inner-cont.on').removeClass('on');
			$('.hs-search-cont .hss-inner-cont.sc-'+code).addClass('on');
			
			//서브메뉴 첫번째메뉴 활성화
			if($(this).closest('.hss-menu').find('.hss-sub .on').length <= 0){
				$(this).closest('.hss-menu').find('.hss-sub li:first-child [data-tabsub]').trigger('click');
			}
		}		
		e.preventDefault();
	});	
	
	//검색 서브 tab click
	$('.hs-search-menu .hss-menu [data-tabsub]').on('click', function(e){
		if(!$(this).closest('li').hasClass('on')){
			var code = $(this).data('tabsub');
			$(this).closest('.hss-sub').find('.on').removeClass('on');
			$(this).closest('li').addClass('on');
			$('.hs-search-cont .o-'+code).closest('.hss-inner-cont').find('.sc-search-box.on').removeClass('on');	
			$('.hs-search-cont .o-'+code).addClass('on');
		}	
		e.preventDefault();
	});	
	
	//document 클릭시 옵션 팝업 닫힘
	$(document).on('mousedown', function(e){
		if($(e.target).closest(".sc-ui-search-box.on").length <= 0){
			$('.hss-inner-cont .sc-ui-search-box.on').removeClass('on');
		}
	});
	
	//인원,좌석,객실 취소 click
	$('.hss-inner-cont .ui-capacity .b-cancel a').on('click', function(e){
		$(document).mousedown();
		e.preventDefault();
	});
	
	//캘린더 참고 (priviaMainUI.js 기반 -> var holidays, $.datepicker.regional['ko'] = {}, checkMobile())
}

//검색 항공 관련
function comSearchAir(){	
	var _currentAirCity = null; // 도시영역 저장
	var _currenCapacity = null; // 인원,좌석 저장
	var _MDCnt = 2; // 다구간 기본
	var _MDMax = 4; //다구간 최대
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 도시
	//도시셋팅
	function setAirCity(city, code){
		setTimeout(function(){$(document).mousedown();}, 100);

		//도시가 선택됨 표시
		if(!_currentAirCity.hasClass('on')){
			_currentAirCity.addClass('on');   
		}

		//도시,코드 텍스트 적용
		_currentAirCity.find('[data-city]').data('city', city);
		_currentAirCity.find('.city').text(city);
		_currentAirCity.find('.qsb-c').text(code);
	}
	
	//출발, 도착 도시 팝업
	$('.sc-air .qsb-places .qsb-area').on('click', function(e){
		//position
		var p = $(this).closest('.hss-inner-cont').find('.ui-maincity-air');
		p.position({
			my: 'left-30 top-42',
			at: 'left top',
			collision: 'none',
			of: this
		}).addClass('on');
		
		//기존 검색리스트 삭제
		if($('.ui-maincity-air').hasClass('ui-citysearch-auto')){
		   $('.ui-maincity-air').removeClass('ui-citysearch-auto');
		}
		
		//places 저장
		_currentAirCity = $(this);
		
		//도시가 있으면 팝업 인풋에 내용 표시
		if(_currentAirCity.hasClass('on')){
			var city = _currentAirCity.find('.city').text();
			p.find('.ipu-search').val(city);
		}
		else{
			$('.hs-search-cont .ui-maincity-air .uis-input .ipu-search').val('');
		}
		e.preventDefault();
	});
	
	//주요도시 리스트 click
	$('.ui-maincity-air .uis-maincity-table td .list a').on('click', function(e){
		var city = $(this).text(); //도시 이름
		var code = 'ICN';		   //도시 코드(임시)
		
		//도시 이름 보여주고 사라짐
		$('.hs-search-cont .ui-maincity-air .uis-input .ipu-search').val(city);
		
		
		//도시 셋팅
		setAirCity(city, code);
		e.preventDefault();
	});
	
	//도시 검색하기 focus
	$('.ui-maincity-air .uis-input .ipu-search').on('focus', function(){
		$(this).val('');
	});
	
	//도시 검색하기 blur
	$('.ui-maincity-air .uis-input .ipu-search').on('blur', function(){
		$(this).val(_currentAirCity.find('[data-city]').data('city'));
	});
	
	//도시 검색하기(자동완성) keydown
	$('.ui-maincity-air .uis-input .ipu-search').on('keydown', function(){
		if(!$('.ui-maincity-air').hasClass('ui-citysearch-auto') && $(this).val('')){
		   $('.ui-maincity-air').addClass('ui-citysearch-auto');
		}
	});
	
	//도시 검색 결과(자동완성) click
	$('.ui-maincity-air .uis-citysearch-list .list a').on('click', function(e){
		var city = '자동'; //도시 이름(임시)
		var code = 'AUTO'; //도시 코드(임시)
		
		//도시 셋팅
		setAirCity(city, code);
		e.preventDefault();
	});
	
	//도시 체인지(왕복, 편도) click
	$('.sc-air .b-change-places button').on('click', function(e){
		var exit = $(this).closest('.qsb-places').find('.places-exit .qsb-input');
		var entry = $(this).closest('.qsb-places').find('.places-entry .qsb-input');
		var exitHtml = exit.html();
		var entryHtml = entry.html();
		exit.html(entryHtml);
		entry.html(exitHtml);
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 인원,좌석
	//인원 컨트롤
	function setCapacity(type, action){
		var cType = type;
		var cAction = action;
		var adtCnt = parseInt($('.sc-air .uis-capacity-number .num-adt').text()); //성인
		var chdCnt = parseInt($('.sc-air .uis-capacity-number .num-chd').text()); //아이
		var infCnt = parseInt($('.sc-air .uis-capacity-number .num-inf').text()); //유아
		console.log('setCapacity click = ', cType, cAction, adtCnt, chdCnt, infCnt);
		
		//성인
		if(cType == 'adt'){
			if(cAction == 'minus'){
				adtCnt--;
				if(adtCnt < 1){
					adtCnt = 1;
					alert("성인은 최소 1명 이상 탑승해야 합니다.");
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
			$('.sc-air .uis-capacity-number .num-adt').text(adtCnt);
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
			
			if(chdCnt < 1){$('.sc-air .uis-capacity-number .num-chd').removeClass('on');} 
			else{$('.sc-air .uis-capacity-number .num-chd').addClass('on');}
			
			$('.sc-air .uis-capacity-number .num-chd').text(chdCnt);
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
			
			if(infCnt < 1){$('.sc-air .uis-capacity-number .num-inf').removeClass('on');} 
			else{$('.sc-air .uis-capacity-number .num-inf').addClass('on');}
			
			$('.sc-air .uis-capacity-number .num-inf').text(infCnt);
		}
	}
	
	//인원,좌석 팝업
	$('.sc-air .qsb-capacity .qsb-area').on('click', function(e){
		//position
		$(this).closest('.hss-inner-cont').find('.ui-capacity').position({
			my: 'left-30 top-32',
			at: 'left top',
			collision: 'none',
			of: this
		}).addClass('on');
		
		//capacity 저장
		_currenCapacity = $(this);

		//값 가져오기
		var adt = _currenCapacity.find('[data-adt]').data('adt'); //성인
		var chd = _currenCapacity.find('[data-chd]').data('chd'); //아이
		var inf = _currenCapacity.find('[data-inf]').data('inf'); //유아
		var comp = _currenCapacity.find('[data-comp]').data('comp'); //좌석
		console.log('가져오기 = ', adt, chd, inf, comp);
		
		//셋팅
		if(adt > 0){$('.sc-air .uis-capacity-number .num-adt').addClass('on');} 
		else{$('.sc-air .uis-capacity-number .num-adt').removeClass('on');}
		if(chd > 0){$('.sc-air .uis-capacity-number .num-chd').addClass('on');} 
		else{$('.sc-air .uis-capacity-number .num-chd').removeClass('on');}
		if(inf > 0){$('.sc-air .uis-capacity-number .num-inf').addClass('on');} 
		else{$('.sc-air .uis-capacity-number .num-inf').removeClass('on');}
		$('.sc-air .uis-capacity-number .num-adt').text(adt);
		$('.sc-air .uis-capacity-number .num-chd').text(chd);
		$('.sc-air .uis-capacity-number .num-inf').text(inf);
		$('.sc-air .select-comp li.on').removeClass('on');
		$('.sc-air .select-comp li').eq(comp).addClass('on');
		
		//국내선인 경우 좌석 숨김
		//$('.sc-air .ui-capacity .select-comp').hide();
		
		e.preventDefault();
	});
	
	//인원 minus, plus click
	$('.sc-air .uis-custom-number .ucn-crt button').on('click', function(e){
		var type = $(this).data('type').split('-')[0];
		var action = $(this).data('type').split('-')[1];
		setCapacity(type, action);
		e.preventDefault();
	});
	
	//좌석 select click
	$('.sc-air .uis-capacity .select-comp li a').on('click', function(e){
		if(!$(this).closest('li').hasClass('on')){
			$('.sc-air .uis-capacity .select-comp li.on').removeClass('on');
			$(this).closest('li').addClass('on');
		}
		e.preventDefault();
	});
	
	//인원,좌석,객실 완료 click
	$('.sc-air .uis-capacity .b-complete a').on('click', function(e){
		var adtCnt = parseInt($('.sc-air .uis-capacity-number .num-adt').text()); //성인
		var chdCnt = parseInt($('.sc-air .uis-capacity-number .num-chd').text()); //아이
		var infCnt = parseInt($('.sc-air .uis-capacity-number .num-inf').text()); //유아
		var compIdx = $('.sc-air .uis-capacity .select-comp li.on').index();
		var comp = $('.sc-air .uis-capacity .select-comp li.on a').text(); //좌석
		console.log('완료 = ', adtCnt, chdCnt, infCnt, adtCnt+chdCnt+infCnt, compIdx, comp);
		
		//input
		_currenCapacity.find('[data-adt]').data('adt',adtCnt);
		_currenCapacity.find('[data-chd]').data('chd',chdCnt);
		_currenCapacity.find('[data-inf]').data('inf',infCnt);	
		_currenCapacity.find('[data-comp]').data('comp',compIdx);	
		
		//search input
		_currenCapacity.find('.total-num').text(adtCnt+chdCnt+infCnt);
		_currenCapacity.find('.type-seat').text(', '+comp);
		$(document).mousedown();
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 캘린더
	//캘린더 팝업
	$('.sc-air .qsb-dates .qsb-area').on('click', function(e){
		//position
		/*$(this).closest('.hss-inner-cont').find('.ui-date-calendar').position({
			my: 'left-70 top-42',
			at: 'left top',
			collision: 'none',
			of: this
		}).addClass('on');*/
		$(this).closest('.w-qsb-cont').find('.ui-date-calendar').addClass('on');
		e.preventDefault();
	});
	
	//캘린더 datepicker - 왕복
	$('.sc-air .o-shuttle .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		beforeShowDay: function(date) {
			var result;
			var holiday = holidays[$.datepicker.formatDate("mmdd",date )];
			if(!holiday){
				holiday = holidays[$.datepicker.formatDate("yymmdd",date )];
			}
			var thisYear = $.datepicker.formatDate("yy", date);
			if (holiday) {
				if(thisYear == holiday.year || holiday.year == "") {
					result =  [true, "date-holiday", holiday.title];
				}
			}

			var date1 = $.datepicker.parseDate('yy/mm/dd', $(".sc-air .o-shuttle .uis-date-chkin [data-day]").data('day'));
			var date2 = $.datepicker.parseDate('yy/mm/dd', $(".sc-air .o-shuttle .uis-date-chkout [data-day]").data('day'));
			if(date1){
				if(date.getTime() == date1.getTime()){
					if(date2){
						result = [true, "dp-highlight dp-first"];
					}
					else{
						result = [true, "dp-highlight"];
					}
				}
				else if(date2){
					if(date.getTime() == date2.getTime()){
						result = [true, "dp-highlight dp-end"];
					}
					else if(date > date1 && date < date2){
						result = [true, "dp-highlight pd-between"];
					 }
				}
			}

			if(!result) {
				switch (date.getDay()) {
					case 0:
						result = [true, "date-sunday"];
						break;
					case 6:
						result = [true, "date-saturday"];
						break;
					default:
						result = [true, ""];
						break;
				}
			}		
			return result;	
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate('yy/mm/dd', $(".sc-air .o-shuttle .uis-date-chkin [data-day]").data('day'));
			var date2 = $.datepicker.parseDate('yy/mm/dd', $(".sc-air .o-shuttle .uis-date-chkout [data-day]").data('day'));
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//출발, 도착 모두 선택인 경우, 아무것도 선택이 없는 경우(출발)
			if (!date1 || date2) {
				//input
				$(".sc-air .o-shuttle .uis-date-chkin [data-day]").data('day',dateText);
				$(".sc-air .o-shuttle .uis-date-chkout [data-day]").data('day','');
				//pop input
				$(".sc-air .o-shuttle .uis-date-chkin .txt-day").addClass('on');
				$(".sc-air .o-shuttle .uis-date-chkin .txt-day").html(txtDay+' 출발');
				$(".sc-air .o-shuttle .uis-date-chkout .txt-day").removeClass('on');
				$(".sc-air .o-shuttle .uis-date-chkout .txt-day").html('도착일을 선택해주세요.');				
				//search input
				$(".sc-air .o-shuttle .qsb-dates .qsb-area").addClass('on');
				$(".sc-air .o-shuttle .qsb-dates .qsb-chkin").html(txtDay);	
				$(".sc-air .o-shuttle .qsb-dates .qsb-chkout").removeClass('on');
				$(".sc-air .o-shuttle .qsb-dates .qsb-chkout").html('');
			} else {
				//출발 보다 이전 날짜 선택
				if( selectedDate < date1 ) {
					//출발 -> 도착 이동
					//input 
					$(".sc-air .o-shuttle .uis-date-chkout [data-day]").data('day',$(".sc-air .o-shuttle .uis-date-chkin [data-day]").data('day'));
					//pop input
					$(".sc-air .o-shuttle .uis-date-chkout .txt-day").addClass('on');
					$(".sc-air .o-shuttle .uis-date-chkout .txt-day").html($(".sc-air .o-shuttle .qsb-dates .qsb-chkin").html()+' 도착');
					//search input
					$(".sc-air .o-shuttle .qsb-dates .qsb-chkout").addClass('on');
					$(".sc-air .o-shuttle .qsb-dates .qsb-chkout").html($(".sc-air .o-shuttle .qsb-dates .qsb-chkin").html());	
					
					//출발 셋팅
					//input 
					$(".sc-air .o-shuttle .uis-date-chkin [data-day]").data('day',dateText);
					//pop input
					$(".sc-air .o-shuttle .uis-date-chkin .txt-day").html(txtDay+' 출발');
					//search input
					$(".sc-air .o-shuttle .qsb-dates .qsb-chkin").html(txtDay);
					
					setTimeout(function(){$(document).mousedown();}, 100);
				} else {
					//출발이후 선택시(도착)
					//input 				
					$(".sc-air .o-shuttle .uis-date-chkout [data-day]").data('day',dateText);
					//pop input
					$(".sc-air .o-shuttle .uis-date-chkout .txt-day").addClass('on');
					$(".sc-air .o-shuttle .uis-date-chkout .txt-day").html(txtDay+' 도착');
					//search input
					$(".sc-air .o-shuttle .qsb-dates .qsb-chkout").addClass('on');
					$(".sc-air .o-shuttle .qsb-dates .qsb-chkout").html(txtDay);
					
					setTimeout(function(){$(document).mousedown();}, 100);
				}
				
				//if($(".sc-air .o-shuttle .uis-date-chkin .ipu-day").val() == dateText){return} //같은날짜는 return
				/*var chkIn = $(".chk-in .selectDay").val().split('/');
				var chkOut = $(".chk-out .selectDay").val().split('/');
				var chkInDate = new Date(chkIn[0], chkIn[1], chkIn[2]);
				var chkOutDate = new Date(chkOut[0], chkOut[1], chkOut[2]);
				var duration = (chkOutDate-chkInDate)/1000/60/60/24;
				$('.result-days .days').text(duration);
				$('.wrap-select-date .c-fix-btn, .result-days').show();*/
			}
		}
	});
	
	//$('.sc-air .o-shuttle .uis-datepicker').datepicker('refresh');
	
	//캘린더 datepicker - 편도
	$('.sc-air .o-oneway .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, inst) {
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//input
			$(".sc-air .o-oneway .uis-date-chkin [data-day]").data('day',dateText);
			//pop input
			$(".sc-air .o-oneway .uis-date-chkin .txt-day").addClass('on');
			$(".sc-air .o-oneway .uis-date-chkin .txt-day").html(txtDay+' 출발');
			//search input
			$(".sc-air .o-oneway .qsb-dates .qsb-area").addClass('on');
			$(".sc-air .o-oneway .qsb-dates .qsb-chkin").html(txtDay);	
			
			setTimeout(function(){$(document).mousedown();}, 100);
		}
	});
	
	//캘린더 datepicker - 다구간1
	$('.sc-air .o-multiway .air-md-1 .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, inst) {
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//input
			$(".sc-air .o-multiway .air-md-1 .uis-date-chkin [data-day]").data('day',dateText);
			//pop input
			$(".sc-air .o-multiway .air-md-1 .uis-date-chkin .txt-day").addClass('on');
			$(".sc-air .o-multiway .air-md-1 .uis-date-chkin .txt-day").html(txtDay+' 출발');
			//search input
			$(".sc-air .o-multiway .air-md-1 .qsb-dates .qsb-area").addClass('on');
			$(".sc-air .o-multiway .air-md-1 .qsb-dates .qsb-chkin").html(txtDay);	
			
			setTimeout(function(){$(document).mousedown();}, 100);
		}
	});
	
	//캘린더 datepicker - 다구간2
	$('.sc-air .o-multiway .air-md-2 .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, inst) {
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//input
			$(".sc-air .o-multiway .air-md-2 .uis-date-chkin [data-day]").data('day',dateText);
			//pop input
			$(".sc-air .o-multiway .air-md-2 .uis-date-chkin .txt-day").addClass('on');
			$(".sc-air .o-multiway .air-md-2 .uis-date-chkin .txt-day").html(txtDay+' 출발');
			//search input
			$(".sc-air .o-multiway .air-md-2 .qsb-dates .qsb-area").addClass('on');
			$(".sc-air .o-multiway .air-md-2 .qsb-dates .qsb-chkin").html(txtDay);	
			
			setTimeout(function(){$(document).mousedown();}, 100);
		}
	});
	
	//캘린더 datepicker - 다구간3
	$('.sc-air .o-multiway .air-md-3 .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, inst) {
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//input
			$(".sc-air .o-multiway .air-md-3 .uis-date-chkin [data-day]").data('day',dateText);
			//pop input
			$(".sc-air .o-multiway .air-md-3 .uis-date-chkin .txt-day").addClass('on');
			$(".sc-air .o-multiway .air-md-3 .uis-date-chkin .txt-day").html(txtDay+' 출발');
			//search input
			$(".sc-air .o-multiway .air-md-3 .qsb-dates .qsb-area").addClass('on');
			$(".sc-air .o-multiway .air-md-3 .qsb-dates .qsb-chkin").html(txtDay);	
			
			setTimeout(function(){$(document).mousedown();}, 100);
		}
	});
	
	//캘린더 datepicker - 다구간4
	$('.sc-air .o-multiway .air-md-4 .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, inst) {
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//input
			$(".sc-air .o-multiway .air-md-4 .uis-date-chkin [data-day]").data('day',dateText);
			//pop input
			$(".sc-air .o-multiway .air-md-4 .uis-date-chkin .txt-day").addClass('on');
			$(".sc-air .o-multiway .air-md-4 .uis-date-chkin .txt-day").html(txtDay+' 출발');
			//search input
			$(".sc-air .o-multiway .air-md-4 .qsb-dates .qsb-area").addClass('on');
			$(".sc-air .o-multiway .air-md-4 .qsb-dates .qsb-chkin").html(txtDay);	
			
			setTimeout(function(){$(document).mousedown();}, 100);
		}
	});
			
	//구간 추가 click
	$('.sc-search-box .qsb-btn-add .b-add-multiway').on('click', function(){
		_MDCnt++;
		if(_MDCnt > _MDMax){
			_MDCnt = _MDMax;
			alert("여정은 총 " + _MDCnt + "개 까지만 가능합니다.\n" + _MDCnt + "개 이상의 여정이 있으시다면 1;1문의로 요청해 주시기 바랍니다.");
			return false;
		}
		else{
			$(this).parent('.qsb-btn-add').addClass('on');
			$('.sc-air .o-multiway .air-md-'+_MDCnt).addClass('on');
		}
	});
	
	//구간 제거 click
	$('.sc-search-box .qsb-btn-add .b-remove-multiway').on('click', function(){
		_MDCnt--;
		if(_MDCnt < 2){
			_MDCnt = 2;
			alert("출발 및 귀국 여정은 삭제하실 수 없습니다.");
			return false;
		}
		else{
			var removeIdx = $(this).closest('li[class*="air-md-"].on').index();
			var openTotal = $('.sc-air .o-multiway .list-qsb-cont li[class*="air-md-"].on').length;
			console.log('삭제번호 = ', removeIdx+1, '노출된 총구간 = ', openTotal);
									
			//삭제구간 부터 데이터 초기화하고 한칸씩 옮김
			$('.sc-air .o-multiway .list-qsb-cont li[class*="air-md-"].on').each(function(){
				var idx = $(this).index();
				if(idx >= removeIdx){
					//초기화
					$(this).find('.qsb-area.on, .uis-date-chkin .txt-day.on').removeClass('on');
					$(this).find('.qsb-places .city, .qsb-places .qsb-c, .qsb-dates .qsb-chkin, .uis-date-chkin .txt-day').text('');
					$(this).find('.uis-date-chkin .txt-day').text('출발일을 선택해주세요.');
					$(this).find('.qsb-places [data-city]').data('city','');
					$(this).find('.uis-date-chkin [data-day]').data('day','');
					$(this).find('.ui-date-calendar .uis-datepicker').find(".ui-state-active").removeClass("ui-state-active");
					
					//다음 데이터 적용
					var exit = $(this).next().find('.places-exit .qsb-area'); //출발
					var entry = $(this).next().find('.places-entry .qsb-area'); //도착
					var dates = $(this).next().find('.qsb-dates .qsb-area'); //캘린더
					
					if(exit.hasClass('on')){
						$(this).find('.places-exit .qsb-area').addClass('on');					
						$(this).find('.places-exit .city').text($(this).next().find('.places-exit .city').text());
						$(this).find('.places-exit .qsb-c').text($(this).next().find('.places-exit .qsb-c').text());
						$(this).find('.places-exit [data-city]').data('city', $(this).next().find('.places-exit [data-city]').data('city'));
					}
					
					if(entry.hasClass('on')){
						$(this).find('.places-entry .qsb-area').addClass('on');					
						$(this).find('.places-entry .city').text($(this).next().find('.places-entry .city').text());
						$(this).find('.places-entry .qsb-c').text($(this).next().find('.places-entry .qsb-c').text());
						$(this).find('.places-entry [data-city]').data('city', $(this).next().find('.places-entry [data-city]').data('city'));
					}
					
					if(dates.hasClass('on')){
						$(this).find('.qsb-dates .qsb-area, .uis-date-chkin .txt-day').addClass('on');		
						$(this).find('.qsb-dates .qsb-chkin').text($(this).next().find('.qsb-dates .qsb-chkin').text());
						$(this).find('.uis-date-chkin .txt-day').text($(this).next().find('.uis-date-chkin .txt-day').text());
						$(this).find('.uis-date-chkin [data-day]').data('day', $(this).next().find('.uis-date-chkin [data-day]').data('day'));
						$(this).find('.ui-date-calendar .uis-datepicker').datepicker('setDate', new Date($(this).find('.uis-date-chkin [data-day]').data('day')));
					}
				}
			});
			
			//맨뒤에 있는 구간 숨김
			$('.sc-air .o-multiway .air-md-'+openTotal).removeClass('on');
			
			//버튼 변경
			if(openTotal >= _MDMax){
				$('.sc-air .o-multiway .air-md-'+(openTotal-1)+' .qsb-btn-add').removeClass('on');			
			}
			
			//버튼 변경 - 구간 2개 남을때
			if(openTotal <= 3){
				$('.sc-air .o-multiway .air-md-2 .qsb-btn-add').removeClass('on');			
			}
		}
	});
	
	//캘린더 today 제거
	$('.sc-air .uis-datepicker').find(".ui-state-active").removeClass("ui-state-active");
}

//검색 초기화
function comSearchInit(){
	comSearchEvent();
	comSearchAir();
	
	if (QUICK_CODE == null || QUICK_CODE == "") {
		QUICK_CODE = null;
	}	
	showSearchTap(QUICK_CODE);
}

//GNB활성화
function comGbnFocus(){
	switch (GNB_CODE) {
		case GNB_CODE_AIR:
			$("#n-gnb-air").addClass("on");
			break;
		case GNB_CODE_HOTEL:
			$("#n-gnb-hotel").addClass("on");
			break;
		case GNB_CODE_FREE:
			$("#n-gnb-airtel").addClass("on");
			break;
		case GNB_CODE_DPRS:
			$("#n-gnb-dprs").addClass("on");
			break;
		case GNB_CODE_PACKAGE:
			$("#n-gnb-pkg").addClass("on");
			break;
		case GNB_CODE_DOMESTIC:
			$("#n-gnb-domestic").addClass("on");
			break;
		case GNB_CODE_PROMOTION:
			$("#n-gnb-promotion").addClass("on");
			break;
	}
	
}

//GNB초기화
function comGbnInit(){
	
}