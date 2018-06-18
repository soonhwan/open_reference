var navData = {};


/**********************************************************************
  GNB와 Quick서치 관련
   
   1. 서치와 메뉴의 활성화 상태를 지정한다.
   2. 각 페이지 별로 아래의 상수를 이용하여 설정
   3. 샘플 
        <script type="text/javascript">
            setActiveCode(SEARCH_CODE_HOTEL, GNB_CODE_AIR);
        </script>
**********************************************************************/
var SEARCH_CODE_AIR = "AIR";
var SEARCH_CODE_HOTEL = "HOTEL";
var SEARCH_CODE_FREE = "FREE";
var SEARCH_CODE_DPRS_ITEM = "DPRS_ITEM";

var GNB_CODE_AIR = "AIR";
var GNB_CODE_HOTEL = "HOTEL";
var GNB_CODE_FREE = "FREE";
var GNB_CODE_DPRS = "DPRS";
var GNB_CODE_PACKAGE = "PACKAGE";
var GNB_CODE_DOMESTIC = "DOMESTIC";
var GNB_CODE_PROMOTION = "PROMOTION";









//document.domain = "priviatravel.com";

var SEARCH_CODE = null;
var GNB_CODE = null;


// 활성화
function setActiveSearch(searchCode, gnbCode) {

	if (searchCode) SEARCH_CODE = searchCode;
	if (gnbCode) GNB_CODE = gnbCode;

	comGbnFocus();
}

$(function(){
	comSearchInit();
	comGbnInit();
});

function showSearchTap(searchCode){
	var _searchCode = searchCode ? searchCode : SEARCH_CODE;
	
	$('#header-sec').attr('class','');
	
	switch (_searchCode) {
		case SEARCH_CODE_AIR:
			$('#header-sec').addClass('o-bg-air');
			$('.hs-search-menu .hss-menu [data-tabmain="air"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="shuttle"]').trigger('click');
			break;
		case SEARCH_CODE_HOTEL:
			$('#header-sec').addClass('o-bg-hotel');
			$('.hs-search-menu .hss-menu [data-tabmain="hotel"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="inth"]').trigger('click');
			break;
		case SEARCH_CODE_FREE:
			$('#header-sec').addClass('o-bg-free');
			$('.hs-search-menu .hss-menu [data-tabmain="free"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="free"]').trigger('click');
			break;
		case SEARCH_CODE_DPRS_ITEM:
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
	//검색 리스트 스크롤
	$(".uis-citysearch-list .list").mCustomScrollbar({theme:"minimal-dark"});
		
	//캘린더 (priviaMainUI.js 기반 -> var holidays, $.datepicker.regional['ko'] = {}, checkMobile())
	var baseDatepicker = {
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy-mm-dd',
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

			var date1 = $.datepicker.parseDate('yy-mm-dd', $(".uis-date-chkin .ipu-day").val());
			var date2 = $.datepicker.parseDate('yy-mm-dd', $(".uis-date-chkout .ipu-day").val());
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
			var date1 = $.datepicker.parseDate('yy-mm-dd', $(".uis-date-chkin .ipu-day").val());
			var date2 = $.datepicker.parseDate('yy-mm-dd', $(".uis-date-chkout .ipu-day").val());
			var selectedDate = $.datepicker.parseDate('yy-mm-dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();

			if (!date1 || date2) {
				$(".uis-date-chkin .ipu-day").val(dateText);
				$(".uis-date-chkout .ipu-day").val('');
				//$(".chk-in .cd-date").html('<em class="month">'+month+'</em>월 <em class="day">'+day+'</em>일');
				//$(".chk-out .cd-date").html('');
				//$('.wrap-select-date .c-fix-btn, .result-days').hide();
				$(this).datepicker();
			} else {
				if( selectedDate < date1 ) {
					$(".uis-date-chkout .ipu-day").val( $(".uis-date-chkin .ipu-day").val() );
					$(".uis-date-chkin .ipu-day").val(dateText);							
					//$(".chk-out .cd-date").html($(".chk-in .cd-date").html());
					//$(".chk-in .cd-date").html('<em class="month">'+month+'</em>월 <em class="day">'+day+'</em>일');
				} else {
					if($(".uis-date-chkin .ipu-day").val() == dateText){return}
					$(".uis-date-chkout .ipu-day").val(dateText);
					//$(".chk-out .cd-date").html('<em class="month">'+month+'</em>월 <em class="day">'+day+'</em>일');
				}

				/*var chkIn = $(".chk-in .selectDay").val().split('-');
				var chkOut = $(".chk-out .selectDay").val().split('-');
				var chkInDate = new Date(chkIn[0], chkIn[1], chkIn[2]);
				var chkOutDate = new Date(chkOut[0], chkOut[1], chkOut[2]);
				var duration = (chkOutDate-chkInDate)/1000/60/60/24;
				$('.result-days .days').text(duration);
				$('.wrap-select-date .c-fix-btn, .result-days').show();*/
				$(this).datepicker();
			}
		}
	}		
	$('.uis-datepicker').datepicker(baseDatepicker).find(".ui-state-active").removeClass("ui-state-active");
	
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
}

//검색 항공 관련
function comSearchAir(){	
	//주요도시 팝업
	$('.hs-search-cont .sc-air .qsb-places .qsb-area').on('click', function(e){
		$(this).closest('.hss-inner-cont').find('.ui-maincity-air').position({
			my: 'left-30 top-42',
			at: 'left top',
			collision: 'none',
			of: this
		}).addClass('on');
		e.preventDefault();
	});
	
	//주요도시 리스트 click
	$('.sc-air .uis-maincity-table td .list a').on('click', function(e){
		var city = $(this).text();
		console.log(city);
		e.preventDefault();
	});
	
	$('.ui-maincity-air .uis-input .ipu-search').on('focus', function(){
		/*$('.ui-maincity-air').removeClass('on');
		$('.ui-citysearch-auto').position({
			my: 'left-30 top-42',
			at: 'left top',
			collision: 'none',
			of: $('.hs-search-cont .sc-air .qsb-places .places-exit .qsb-area')
		}).addClass('on')
		setTimeout(function(){}, 1000);*/
	})
	
	//---------------------- 왕복
	//캘린더
	$('.hs-search-cont .sc-air .qsb-dates .qsb-area').on('click', function(e){
		$(this).closest('.hss-inner-cont').find('.ui-date-calendar').position({
			my: 'left-60 top-42',
			at: 'left top',
			collision: 'none',
			of: this
		}).addClass('on');
		e.preventDefault();
	});
	
	//인원,좌석,객실
	$('.hs-search-cont .sc-air .qsb-capacity .qsb-area').on('click', function(e){
		$(this).closest('.hss-inner-cont').find('.ui-capacity').position({
			my: 'left-30 top-32',
			at: 'left top',
			collision: 'none',
			of: this
		}).addClass('on');
		e.preventDefault();
	});
	
	//도시 체인지
	$('.sc-air .b-change-places button').on('click', function(e){
		
		e.preventDefault();
	});
	
	//---------------------- 편도
	
	
	//---------------------- 다구간
}

//검색 초기화
function comSearchInit(){
	comSearchEvent();
	comSearchAir();
	
	if (SEARCH_CODE == null || SEARCH_CODE == "") {
		SEARCH_CODE = null;
	}	
	showSearchTap(SEARCH_CODE);
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