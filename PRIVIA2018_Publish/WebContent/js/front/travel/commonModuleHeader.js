/**********************************************************************
  navData 관련
   
   1. 기본 AS IS와 동일구조
   2. TO BE에서 2dep는 해외패키지만 존재함
   3. 해외패키지 페이지에서는 3dep가 존재함(AS IS와는 다르게 구성)
   
**********************************************************************/
var navData = {
	"air": {
		"link": "http://www.priviatravel.com/main/air/",
		"title": "항공",
		"subNavDisplayToGNB": true,
		"subNav": [{
			"link": "http://air.priviatravel.com/booking/findListSpcExhibition.lts?efcCodeList=RB0224&template_divn=A&efcCityCode=LAX",
			"title": "아시아나항공 미주 SUMMER 특가",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "https://www.priviatravel.com/promotion/sectionEvent/2281/",
			"title": "대한항공 특별혜택",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/promotion/sectionEvent/2309/",
			"title": "프리미엄 클래스 특가",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/promotion/sectionEvent/1879/",
			"title": "특별 할인 지역전용관",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"hotel": {
		"link": "http://www.priviatravel.com/main/hotel/",
		"title": "호텔",
		"subNavDisplayToGNB": true,
		"subNav": [{
			"link": "http://hotel.priviatravel.com/htl/bk/HtlSearchPromo.lts?phc_pmh_id=P0214HTL0821&template_divn=A",
			"title": "해외호텔핫딜",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "https://www.priviatravel.com/promotion/sectionEvent/2398/",
			"title": "여름 쿠폰 1만원/ 5만원 /10만원",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://hotel.priviatravel.com/htl/bk/HtlSearchPromo.lts?phc_pmh_id=P0518HTL0019144&template_divn=A",
			"title": "일본 소도시 5% 할인 쿠폰",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"free": {
		"link": "http://www.priviatravel.com/main/free/",
		"title": "자유여행",
		"subNavDisplayToGNB": true,
		"subNav": [{
			"link": "http://www.priviatravel.com/promotion/sectionEvent/2350/",
			"title": "조기 예약 10만원 쿠폰",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "https://www.priviatravel.com/promotion/sectionEvent/2401/",
			"title": "홍콩 자유여행 특별 혜택",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "https://www.priviatravel.com/promotion/sectionEvent/2076/",
			"title": "올 인크루시브 괌",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://airtel.priviatravel.com/dprs/fr/realtime/rcdCityList.lts?par_cat_id=8875",
			"title": "프리미엄 에어텔",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"freetour": {
		"link": "http://airtel.priviatravel.com/dprs/fr/freetour/freeTour.lts",
		"title": "투어&액티비티",
		"subNavDisplayToGNB": true,
		"subNav": [{
			"link": "https://www.priviatravel.com/promotion/sectionEvent/2343/",
			"title": "렌터카(해외, 국내) 할인",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "https://www.priviatravel.com/promotion/sectionEvent/2297/",
			"title": "유럽 유레일 할인",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "https://www.priviatravel.com/promotion/sectionEvent/2340/",
			"title": "다낭 현지투어 할인",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "https://www.priviatravel.com/promotion/sectionEvent/1759/",
			"title": "해외 여행자 보험",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://travel.maaltalk.com/id/privia",
			"title": "포켓WI-FI / 해외유심",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"pkg": {
		"link": "http://package.priviatravel.com/pkgRenewal/",
		"title": "해외패키지",
		"subNavDisplayToGNB": false,
		"subNav": [{
			"link": "http://package.priviatravel.com/pkgRenewal/sectionRecommend?regncd=A",
			"title": "동남아",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://package.priviatravel.com/pkgRenewal/sectionRecommend?regncd=C",
			"title": "홍콩/중국",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://package.priviatravel.com/pkgRenewal/sectionRecommend?regncd=J",
			"title": "일본",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://package.priviatravel.com/pkgRenewal/sectionRecommend?regncd=P",
			"title": "남태평양",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://package.priviatravel.com/pkgRenewal/sectionRecommend?regncd=E",
			"title": "유럽",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://package.priviatravel.com/pkgRenewal/sectionRecommend?regncd=H",
			"title": "미주/하와이",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://package.priviatravel.com/pkgRenewal/themaTreavelJaGoods",
			"title": "테마여행",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"domestic": {
		"link": "http://domestic.priviatravel.com/domestic/",
		"title": "국내여행",
		"subNavDisplayToGNB": true,
		"subNav": [{
			"link": "http://www.priviatravel.com/promotion/sectionEvent/2301/",
			"title": "제주호텔 2박 시 렌터카 무료",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://domestic.priviatravel.com/domestic/promotion/htmlPlan?PROMOTION_SEQ=39",
			"title": "남해 사우스 케이프 에어텔",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://domestic.priviatravel.com/domestic/searchList?goodsCd=GOODS001&agencyCd=&travelType=AIRCARTEL",
			"title": "제주도 에어텔",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "https://www.priviatravel.com/promotion/sectionEvent/2441/",
			"title": "국내숙박 1/2/3만원 할인 쿠폰",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"promotion": {
		"link": "http://www.priviatravel.com/promotion/promotionList",
		"title": "기획전",
		"subNavDisplayToGNB": false,
		"subNav": [{
			"link": "http://www.priviatravel.com/promotion/promotionList?recomDivn=AIR",
			"title": "항공",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/promotion/promotionList?recomDivn=HOTEL",
			"title": "호텔",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/promotion/promotionList?recomDivn=FREE",
			"title": "자유여행",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/promotion/promotionList?recomDivn=TAPROMO",
			"title": "투어&액티비티",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/promotion/promotionList?recomDivn=PACKAGE",
			"title": "해외패키지",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/promotion/promotionList?recomDivn=DOMESTIC ",
			"title": "국내여행",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"payment": {
		"link": "http://www.priviatravel.com/etc/aboutPRIVIA",
		"title": "혜택 및 서비스",
		"subNavDisplayToGNB": false,
		"subNav": [{
			"link": "http://www.priviatravel.com/etc/aboutAIR",
			"title": "항공",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/etc/aboutHOTEL",
			"title": "호텔",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/etc/aboutAIRTEL",
			"title": "자유여행",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/etc/aboutDPRS",
			"title": "투어&액티비티",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/etc/aboutPKG",
			"title": "해외패키지",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/etc/aboutDOMESTIC",
			"title": "국내여행",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/etc/aboutPurpleVoucher",
			"title": "the Purple 혜택",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"customer": {
		"link": "http://www.priviatravel.com/customer/main/counselMain",
		"title": "고객센터",
		"subNavDisplayToGNB": false,
		"subNav": [{
			"link": "http://www.priviatravel.com/noticefaq/noticeList",
			"title": "공지사항",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/noticefaq/faqList",
			"title": "FAQ",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/customer/inquire/form",
			"title": "1:1문의",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/customer/counsel/main",
			"title": "해외맞춤여행",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/customer/crop/main",
			"title": "법인/단체여행",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"mypage": {
		"link": "https://www.priviatravel.com/mypage/index/reserve",
		"title": "마이페이지",
		"subNavDisplayToGNB": false,
		"subNav": [{
			"link": "http://www.priviatravel.com/mypage/index/reserve",
			"title": "예약내역",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/inquiry?menu=Inquiry",
			"title": "1:1문의 내역",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/counsel?menu=Counsel",
			"title": "해외 맞춤여행 문의 내역",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/benefit?menu=Coupon",
			"title": "PRIVIA 쿠폰",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/benefit?menu=Gift",
			"title": "PRIVIA 이용권",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/benefit?menu=Voucher",
			"title": "the Purple Voucher",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/benefit?menu=Reward",
			"title": "the Purple 리워드 쿠폰",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/benefit?menu=Discount",
			"title": "현대카드 할인 혜택",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/traveler?menu=Traveler",
			"title": "나의 여행자 관리",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}, {
			"link": "http://www.priviatravel.com/mypage/index/member?menu=Member",
			"title": "회원정보변경",
			"subNavDisplayToGNB": false,
			"subNav": null,
			"newWindow": false
		}],
		"newWindow": false
	},
	"about": {
		"link": "http://www.priviatravel.com/etc/aboutPriviaTab",
		"title": "About PRIVIA 여행",
		"subNavDisplayToGNB": false,
		"subNav": [],
		"newWindow": false
	},
	"picks": {
		"link": "http://www.priviatravel.com/special/main?seq=8",
		"title": "현대카드 PICKS",
		"subNavDisplayToGNB": false,
		"subNav": [],
		"newWindow": false
	}
};


/**********************************************************************
  GNB와 Quick서치 관련(AS IS와 비슷)
   
   1. 퀵서치와 메뉴의 활성화 상태를 지정한다.
   2. 각 페이지 별로 아래의 상수를 이용하여 설정
   3. 샘플 (섹션메인, 퀵버전 추가)
        <script type="text/javascript">
            setActiveSearch(null, null, null); // 풀버전
			setActiveSearch(QUICK_CODE_AIR, GNB_CODE_AIR, HEADER_TYPE_SECTION); //섹션메인 버전(항공메인)
			setActiveSearch(QUICK_CODE_HOTEL, GNB_CODE_HOTEL, HEADER_TYPE_SECTION); //섹션메인 버전(호텔메인)
			setActiveSearch(QUICK_CODE_AIR, GNB_CODE_AIR, HEADER_TYPE_QUICK); // 퀵버전(항공 검색결과)
			setActiveSearch(null, GNB_CODE_PACKAGE, HEADER_TYPE_QUICK); // 퀵버전(해외패키지)
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

var HEADER_TYPE_SECTION = "HEADER_SECTION"; //섹션메인인 경우 (항공, 호텔, 자유, 투액)
var HEADER_TYPE_QUICK = "HEADER_QUICK"; //퀵모드인 경우(각섹션별 검색결과, 마이페이지, 로그인...)




//document.domain = "priviatravel.com";

var QUICK_CODE = null;
var GNB_CODE = null;
var HEADER_TYPE = null;

// 활성화
function setActiveSearch(searchCode, gnbCode, headerType) {

	if (searchCode) QUICK_CODE = searchCode;
	if (gnbCode) GNB_CODE = gnbCode;
	if (headerType) HEADER_TYPE = headerType;

	comGbnFocus();
}

$(function(){
	comSearchInit();
	comGbnInit();
});

//헤더 타입 셋팅
function settingHeaderType(headerType){
	var _headerType = headerType ? headerType : HEADER_TYPE;
	
	switch (_headerType) {
		case HEADER_TYPE_SECTION:
			$('.commonHeaderObject').addClass('o-CHO-section');
			break;
		case HEADER_TYPE_QUICK:
			$('.commonHeaderObject').addClass('o-CHO-quick');
			break;
		default :
			$('.commonHeaderObject').addClass('o-CHO-full');
			
	}
}

//검색 타입 셋팅
function showSearchTap(searchCode){
	var _searchCode = searchCode ? searchCode : QUICK_CODE;
	switch (_searchCode) {
		case QUICK_CODE_AIR:
			$('#header-sec').addClass('o-search-air');
			$('.hs-search-menu .hss-menu [data-tabmain="air"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="shuttle"]').trigger('click');
			break;
		case QUICK_CODE_HOTEL:
			$('#header-sec').addClass('o-search-hotel');
			$('.hs-search-menu .hss-menu [data-tabmain="hotel"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="inth"]').trigger('click');
			break;
		case QUICK_CODE_FREE:	
			$('#header-sec').addClass('o-search-free');
			$('.hs-search-menu .hss-menu [data-tabmain="free"]').trigger('click');
			break;
		case QUICK_CODE_DPRS_ITEM:
			$('#header-sec').addClass('o-search-freetour');
			$('.hs-search-menu .hss-menu [data-tabmain="freetour"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="rentv"]').trigger('click');
			break;
		default :
			$('#header-sec').addClass('o-search-all');
			$('.hs-search-menu .hss-menu [data-tabmain="air"]').trigger('click');
			$('.hs-search-menu .hss-menu [data-tabsub="shuttle"]').trigger('click');
	}
}




//검색 공통 이벤트
function comSearchEvent(){
	//검색(도시) 리스트, 최근검색 스크롤
	$(".hs-search-cont .o-customscrollbar").mCustomScrollbar({theme:"minimal-dark"});
		
	//검색 메인 tab click
	$('.hs-search-menu .hss-menu [data-tabmain]').on('click', function(e){
		if(!$(this).closest('.hss-menu').hasClass('on')){
			var code = $(this).data('tabmain');
			$('.hs-search-menu .hss-menu.on').removeClass('on');
			$(this).closest('.hss-menu').addClass('on');
			
			//섹션 영역 클래스			
			$('.hs-search-cont .hss-inner-cont.on').removeClass('on');
			$('.hs-search-cont .hss-inner-cont.sc-'+code).addClass('on');
			
			//배경 클래스
			$('#header-sec .header-sec').removeClass(function (index, css) {
				return (css.match (/\bo-bg-\S+/g) || []).join(' ');
			});	
			$('#header-sec .header-sec').addClass('o-bg-'+code);
			
			//하단옵션 제거
			$('.hss-inner-cont-bottom .opt-box.on').removeClass('on');	
			
			//서브메뉴 활성화
			if($(this).closest('.hss-menu').find('.hss-sub .on').length <= 0){
				$(this).closest('.hss-menu').find('.hss-sub li:first-child [data-tabsub]').trigger('click');
			}
			else if($(this).closest('.hss-menu').find('.hss-sub .on').length > 0){
				$(this).closest('.hss-menu').find('.hss-sub .on [data-tabsub]').trigger('click');
			}
		}		
		e.preventDefault();
	});	
	
	//검색 서브 tab click
	$('.hs-search-menu .hss-menu [data-tabsub]').on('click', function(e){
		var code = $(this).data('tabsub');
		if(!$(this).closest('li').hasClass('on')){
			$(this).closest('.hss-sub').find('.on').removeClass('on');
			$(this).closest('li').addClass('on');
			$('.hs-search-cont .o-'+code).closest('.hss-inner-cont').find('.sc-search-box.on').removeClass('on');	
			$('.hs-search-cont .o-'+code).addClass('on');
		}			
		//하단옵션
		$('.hss-inner-cont-bottom .opt-box.on').removeClass('on');	
		$('.hss-inner-cont-bottom .opt-box.ob-'+code).addClass('on');
		e.preventDefault();
	});	
	
	//document 클릭시 옵션 팝업 닫힘
	$(document).on('mousedown', function(e){
		//fakeselect
		if($(e.target).closest(".select-option").length > 0){
			return;
		}
		else{
			if($(e.target).closest(".sc-ui-search-box.on").length <= 0){
				$('.w-header-search .sc-ui-search-box.on').removeClass('on');
			}
		}
	});
	
	//팝업 닫기 클릭시 옵션 팝업 닫힘
	$('.w-header-search .b-scb-close').on('click', function(e){
		$(this).closest('.sc-ui-search-box.on').removeClass('on');
		e.preventDefault();
	});
	
	//인원,좌석,객실 취소 click
	$('.hss-inner-cont .ui-capacity .b-cancel a').on('click', function(e){
		$(document).mousedown();
		e.preventDefault();
	});
		
	//최근검색 열기 click
	$('.hss-recently-search .qrs-area').on('click', function(e){
		$('.hss-recently-search .ui-recently-search').addClass('on');
		e.preventDefault();
	});
	
	//최근검색 닫기 click
	$('.hss-recently-search .ui-recently-search .urs-tit a').on('click', function(e){
		$('.hss-recently-search .ui-recently-search').removeClass('on');
		e.preventDefault();
	});
	
	//캘린더 today 제거
	$('.sc-ui-search-box .uis-datepicker').find(".ui-state-active").removeClass("ui-state-active"); 
}

//검색 - 항공 관련
function comSearchAir(){	
	var $currentCity = null; // 도시영역 저장
	var $currenCapacity = null; // 인원,좌석 저장
	var _MDCnt = 2; // 다구간 기본
	var _MDMax = 4; //다구간 최대
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 도시
	//도시셋팅
	function setAirCity(city, code){		
		//도시가 선택됨 표시
		if(!$currentCity.hasClass('on')){
			$currentCity.addClass('on');   
		}

		//도시 텍스트 적용
		$currentCity.find('.city').text(city);
		$currentCity.find('.qsb-c').text(code);
		
		setTimeout(function(){$(document).mousedown();}, 100);
	}
	
	//출발, 도착 도시 팝업
	$('.sc-air [data-qsb-area="mainsel"]').on('click', function(e){
		//position
		var $p = $(this).closest('.hss-inner-cont').find('.ui-mainsel-air');
		$p.position({
			my: 'left top-10',
			at: 'left top',
			collision: 'none',
			of: $(this).closest('.qsb-cont-box')
		}).addClass('on');
		
		//기존 검색리스트 삭제
		if($p.hasClass('ui-search-auto')){
		   $p.removeClass('ui-search-auto');
		}
		
		//places 저장
		$currentCity = $(this);
		
		//도시가 있으면 팝업 인풋에 내용 표시
		if($currentCity.hasClass('on')){
			var city = $currentCity.find('.city').text();
			$p.find('.ipu-search').val(city);
		}
		else{
			$p.find('.ipu-search').val('');
		}
		e.preventDefault();
	});
	
	//주요도시 리스트, 자동완성 리스트 click
	$('.ui-mainsel-air .list a').on('click', function(e){
		var city = $(this).data('city'); //도시 이름(임시)
		var code = $(this).data('code'); //도시 코드(임시)
		
		//도시 input
		$(this).closest('.ui-mainsel-air').find('.uis-input .ipu-search').val(city);
		
		//도시 셋팅
		setAirCity(city, code);
		e.preventDefault();
	});
	
	//도시 검색하기(자동완성) keydown
	$('.ui-mainsel-air .uis-input .ipu-search').on('keydown', function(){
		if(!$(this).closest('.ui-mainsel-air').hasClass('ui-search-auto') && $(this).val('')){
			//position
			$(this).closest('.ui-mainsel-air').position({
				my: 'left-30 top-40',
				at: 'left top',
				collision: 'none',
				of: $currentCity
			});
			
			//add auto
			$(this).closest('.ui-mainsel-air').addClass('ui-search-auto');
		}
	});
		
	//도시 검색하기 focus
	$('.ui-mainsel-air .uis-input .ipu-search').on('focus', function(){
		$(this).val('');
	});
	
	//도시 검색하기 blur
	$('.ui-mainsel-air .uis-input .ipu-search').on('blur', function(){
		$(this).val($currentCity.find('.city').text());
	});
	
	//도시 체인지(왕복, 편도) click
	$('.sc-air .b-change-places button').on('click', function(e){
		var $exit = $(this).closest('.qsb-places').find('.places-exit .qsb-input');
		var $entry = $(this).closest('.qsb-places').find('.places-entry .qsb-input');
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
		
		//도착 체이지
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
		
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 인원,좌석
	//인원 컨트롤
	function setCapacity(type, action){
		var cType = type;
		var cAction = action;
		var adtCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-adt').text()); //성인
		var chdCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-chd').text()); //아동
		var infCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-inf').text()); //유아
		//console.log('setCapacity click = ', cType, cAction, adtCnt, chdCnt, infCnt);
		
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
			$('.sc-air .global-ui-capacity .uis-capacity-number .num-adt').text(adtCnt);
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
			
			if(chdCnt < 1){$('.sc-air .global-ui-capacity .uis-capacity-number .num-chd').removeClass('on');} 
			else{$('.sc-air .global-ui-capacity .uis-capacity-number .num-chd').addClass('on');}
			
			$('.sc-air .global-ui-capacity .uis-capacity-number .num-chd').text(chdCnt);
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
			
			if(infCnt < 1){$('.sc-air .global-ui-capacity .uis-capacity-number .num-inf').removeClass('on');} 
			else{$('.sc-air .global-ui-capacity .uis-capacity-number .num-inf').addClass('on');}
			
			$('.sc-air .global-ui-capacity .uis-capacity-number .num-inf').text(infCnt);
		}
	}
	
	//인원, 좌석등급 팝업
	$('.sc-air [data-qsb-area="capacity"]').on('click', function(e){
		//position
		$(this).closest('.hss-inner-cont').find('.ui-capacity').position({
			my: 'left-31 top-32',
			at: 'left top',
			collision: 'none',
			of: $(this)
		}).addClass('on');
		
		//capacity 저장
		$currenCapacity = $(this);

		//값 가져오기
		var adt = $currenCapacity.find('[data-adt]').data('adt'); //성인
		var chd = $currenCapacity.find('[data-chd]').data('chd'); //아동
		var inf = $currenCapacity.find('[data-inf]').data('inf'); //유아
		var comp = $currenCapacity.find('[data-comp]').data('comp'); //좌석
		//console.log('가져오기 = ', adt, chd, inf, comp);
		
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
		//일반석
		if(comp == 'Y'){
			$('.sc-air .select-comp li').eq(0).addClass('on');
		}
		//프리미엄 이코노미
		if(comp == 'P'){
			$('.sc-air .select-comp li').eq(1).addClass('on');
		}
		//비즈니스석
		if(comp == 'C'){
			$('.sc-air .select-comp li').eq(2).addClass('on');
		}
		//일등석
		if(comp == 'F'){
			$('.sc-air .select-comp li').eq(3).addClass('on');
		}		
		
		//국내선인 경우 좌석 숨김
		//$('.sc-air .ui-capacity .select-comp').hide();
		
		e.preventDefault();
	});
	
	//인원 minus, plus click
	$('.sc-air .global-ui-capacity .uis-custom-number .ucn-crt button').on('click', function(e){
		var type = $(this).data('type').split('-')[0];
		var action = $(this).data('type').split('-')[1];
		setCapacity(type, action);
		e.preventDefault();
	});
	
	//좌석등급 select click
	$('.sc-air .global-ui-capacity .select-comp li a').on('click', function(e){
		if(!$(this).closest('li').hasClass('on')){
			$('.sc-air .global-ui-capacity .select-comp li.on').removeClass('on');
			$(this).closest('li').addClass('on');
		}
		e.preventDefault();
	});
	
	//인원, 좌석등급 완료 click
	$('.sc-air .global-ui-capacity .b-complete a').on('click', function(e){
		var adtCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-adt').text()); //성인
		var chdCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-chd').text()); //아동
		var infCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-inf').text()); //유아
		var comp = $('.sc-air .global-ui-capacity  .select-comp li.on a').text(); //좌석
		var compOpt = $('.sc-air .global-ui-capacity  .select-comp li.on a').data('option');
		//console.log('완료 = ', adtCnt, chdCnt, infCnt, adtCnt+chdCnt+infCnt, compOpt, comp);
		
		//input
		$currenCapacity.find('[data-adt]').data('adt',adtCnt);
		$currenCapacity.find('[data-chd]').data('chd',chdCnt);
		$currenCapacity.find('[data-inf]').data('inf',infCnt);	
		$currenCapacity.find('[data-comp]').data('comp',compOpt);	
		
		//search input
		$currenCapacity.find('.total-num').text(adtCnt+chdCnt+infCnt);
		$currenCapacity.find('.type-seat').text(', '+comp);
		
		$(document).mousedown();
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 캘린더
	//캘린더 팝업
	$('.sc-air [data-qsb-area="calendar"]').on('click', function(e){
		//position
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
			
			//도착일 미정인경우
			if($('#unDayAir').is(':checked')){
				//input
				$(".sc-air .o-shuttle .uis-date-chkin [data-day]").data('day',dateText);
				//pop input
				$(".sc-air .o-shuttle .uis-date-chkin .txt-day").addClass('on');
				$(".sc-air .o-shuttle .uis-date-chkin .txt-day").html(txtDay+' 출발');
				//search input
				$(".sc-air .o-shuttle .qsb-dates .qsb-area").addClass('on');
				$(".sc-air .o-shuttle .qsb-dates .qsb-chkin").html(txtDay);	

				setTimeout(function(){$(document).mousedown();}, 100);   
			}else{
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
				}
			}
		}
	});
	
	//왕복 도착일 미정 체크
	$('.opt-box.ob-shuttle .chk-unday label').on('click', function(){
		if($('.opt-box.ob-shuttle #unDayAir').is(':checked')){
			$('.sc-air .o-shuttle .uis-date-chkout').show();
		}
		else{
			$('.sc-air .o-shuttle .uis-date-chkout').hide();
			if($('.sc-air .o-shuttle .uis-date-chkout .txt-day').hasClass('on')){
				$('.sc-air .o-shuttle .uis-date-chkout .txt-day').removeClass('on');
				$('.sc-air .o-shuttle .uis-date-chkout .txt-day').text('도착일을 선택해주세요.');
				$('.sc-air .o-shuttle .uis-date-chkout [data-day]').data('day', '');
				$('.sc-air .o-shuttle .qsb-dates .qsb-chkout').text('');
				$('.sc-air .o-shuttle .uis-datepicker').find(".ui-state-active").removeClass("ui-state-active");	
				$('.sc-air .o-shuttle .uis-datepicker').datepicker('setDate', new Date($('.sc-air .o-shuttle .uis-date-chkin [data-day]').data('day')));
			}
		}
	});
	
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
			//console.log('삭제구간 = ', removeIdx+1, '노출된 총구간 = ', openTotal);
									
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
}
//..검색 - 항공 관련

//검색 - 호텔 관련
function comSearchHotel(){	
	var $currentCity = null; // 목적지영역 저장
	var $currenCapacity = null; // 객실타입, 객실수 저장
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 도시
	//도시셋팅
	function setHotelCity(city){
		//도시가 선택됨 표시
		if(!$currentCity.hasClass('on')){
			$currentCity.addClass('on');   
		}

		//도시 텍스트 적용
		$currentCity.find('.city').text(city);
		setTimeout(function(){$(document).mousedown();}, 100);
	}
		
	//목적지 팝업
	$('.sc-hotel [data-qsb-area="mainsel"]').on('click', function(e){
		var $p = $(this).closest('.w-qsb-cont').find('.ui-mainsel-hotel')
		$p.position({
			my: 'left top-10',
			at: 'left top',
			collision: 'none',
			of: $(this).closest('.qsb-cont-box')
		}).addClass('on');
		
		//기존 검색리스트 삭제
		if($p.hasClass('ui-search-auto')){
		   $p.removeClass('ui-search-auto');
		}
		
		//places 저장
		$currentCity = $(this);
		
		//목적지가 있으면 팝업 인풋에 내용 표시
		if($currentCity.hasClass('on')){
			var city = $currentCity.find('.city').text();
			$p.find('.ipu-search').val(city);
		}
		else{
			$p.find('.ipu-search').val('');
		}
		e.preventDefault();
	});
	
	//주요도시 리스트, 자동완성 리스트 click
	$('.ui-mainsel-hotel .list a').on('click', function(e){
		var city = $(this).data('city'); //도시 이름(임시)
		
		//도시 input
		$(this).closest('.ui-mainsel-hotel').find('.uis-input .ipu-search').val(city);
				
		//도시 셋팅
		setHotelCity(city);
		e.preventDefault();
	});
		
	//도시 검색하기(자동완성) keydown
	$('.ui-mainsel-hotel .uis-input .ipu-search').on('keydown', function(){
		if(!$(this).closest('.ui-mainsel-hotel').hasClass('ui-search-auto') && $(this).val('')){
			//add auto
			$(this).closest('.ui-mainsel-hotel').addClass('ui-search-auto');
		}
	});
	
	//도시 검색하기 focus
	$('.ui-mainsel-hotel .uis-input .ipu-search').on('focus', function(){
		$(this).val('');
	});
	
	//도시 검색하기 blur
	$('.ui-mainsel-hotel .uis-input .ipu-search').on('blur', function(){
		$(this).val($currentCity.find('.city').text());
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 객실타입, 객실수
	//객실타입, 객실수 컨트롤
	function setCapacity(type, action){
		var cType = type;
		var cAction = action;
		var room1Cnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room1').text()); //1인실
		var room2dCnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2d').text()); //2인실 더블
		var room2tCnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2t').text()); //2인실 트윈
		var room3Cnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room3').text()); //3인실
		//console.log('setCapacity click = ', cType, cAction, room1Cnt, room2dCnt, room2tCnt, room3Cnt);
		
		//1인실
		if(cType == 'room1'){
			if(cAction == 'minus'){
				room1Cnt--;
				if(room1Cnt < 0){
					room1Cnt = 0;
					return false;
				}
			}
			else if(cAction == 'plus'){
				room1Cnt++;
				if(room1Cnt > 3){
					room1Cnt = 3;
					return false;
				}
			}
			
			if(room1Cnt < 1){$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room1').removeClass('on');} 
			else{$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room1').addClass('on');}
		
			$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room1').text(room1Cnt);
		}
		
		//2인실 더블
		if(cType == 'room2d'){
			if(cAction == 'minus'){
				room2dCnt--;
				if(room2dCnt < 0){
					room2dCnt = 0;
					return false;
				}
			}
			else if(cAction == 'plus'){
				room2dCnt++;
				if(room2dCnt > 3){
					room2dCnt = 3;
					return false;
				}
			}
			
			if(room2dCnt < 1){$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2d').removeClass('on');} 
			else{$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2d').addClass('on');}
		
			$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2d').text(room2dCnt);
		}
		
		//2인실 트윈
		if(cType == 'room2t'){
			if(cAction == 'minus'){
				room2tCnt--;
				if(room2tCnt < 0){
					room2tCnt = 0;
					return false;
				}
			}
			else if(cAction == 'plus'){
				room2tCnt++;
				if(room2tCnt > 3){
					room2tCnt = 3;
					return false;
				}
			}
			
			if(room2tCnt < 1){$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2t').removeClass('on');} 
			else{$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2t').addClass('on');}
		
			$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2t').text(room2tCnt);
		}
		
		//3인실
		if(cType == 'room3'){
			if(cAction == 'minus'){
				room3Cnt--;
				if(room3Cnt < 0){
					room3Cnt = 0;
					return false;
				}
			}
			else if(cAction == 'plus'){
				room3Cnt++;
				if(room3Cnt > 3){
					room3Cnt = 3;
					return false;
				}
			}
			
			if(room3Cnt < 1){$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room3').removeClass('on');} 
			else{$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room3').addClass('on');}
		
			$('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room3').text(room3Cnt);
		}
	}
	
	//객실타입, 객실수 팝업
	$('.sc-hotel [data-qsb-area="capacity"]').on('click', function(e){
		//position
		$(this).closest('.hss-inner-cont').find('.ui-capacity').position({
			my: 'left-31 top-32',
			at: 'left top',
			collision: 'none',
			of: $(this)
		}).addClass('on');
		
		//capacity 저장
		$currenCapacity = $(this);

		//값 가져오기
		var room1 = $currenCapacity.find('[data-room1]').data('room1'); //1인실
		var room2d = $currenCapacity.find('[data-room2d]').data('room2d'); //2인실 더블
		var room2t = $currenCapacity.find('[data-room2t]').data('room2t'); //2인실 트윈
		var room3 = $currenCapacity.find('[data-room3]').data('room3'); //3인실
		//console.log('가져오기 = ', room1, room2d, room2t, room3);
		
		//셋팅
		if(room1 > 0){$('.sc-hotel .uis-capacity-number .num-room1').addClass('on');} 
		else{$('.sc-hotel .uis-capacity-number .num-room1').removeClass('on');}
		if(room2d > 0){$('.sc-hotel .uis-capacity-number .num-room2d').addClass('on');} 
		else{$('.sc-hotel .uis-capacity-number .num-room2d').removeClass('on');}
		if(room2t > 0){$('.sc-hotel .uis-capacity-number .num-room2t').addClass('on');} 
		else{$('.sc-hotel .uis-capacity-number .num-room2t').removeClass('on');}
		if(room3 > 0){$('.sc-hotel .uis-capacity-number .num-room3').addClass('on');} 
		else{$('.sc-hotel .uis-capacity-number .num-room3').removeClass('on');}
		$('.sc-hotel .uis-capacity-number .num-room1').text(room1);
		$('.sc-hotel .uis-capacity-number .num-room2d').text(room2d);
		$('.sc-hotel .uis-capacity-number .num-room2t').text(room2t);
		$('.sc-hotel .uis-capacity-number .num-room3').text(room3);
				
		e.preventDefault();
	});
	
	//객실수 minus, plus click
	$('.sc-hotel .global-ui-capacity .uis-custom-number .ucn-crt button').on('click', function(e){
		var type = $(this).data('type').split('-')[0];
		var action = $(this).data('type').split('-')[1];
		setCapacity(type, action);
		e.preventDefault();
	});
		
	//객실타입, 객실수 완료 click
	$('.sc-hotel .global-ui-capacity .b-complete a').on('click', function(e){
		var room1Cnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room1').text()); //1인실
		var room2dCnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2d').text()); //2인실 더블
		var room2tCnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2t').text()); //2인실 트윈
		var room3Cnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room3').text()); //3인실
		var roomArr = [];
		//console.log('완료 = ', room1Cnt, room2dCnt, room2tCnt, room3Cnt);
		
		//input
		$currenCapacity.find('[data-room1]').data('room1',room1Cnt);
		$currenCapacity.find('[data-room2d]').data('room2d',room2dCnt);
		$currenCapacity.find('[data-room2t]').data('room2t',room2tCnt);	
		$currenCapacity.find('[data-room3]').data('room3',room3Cnt);	
		
		var txt = '';
		if(room1Cnt > 0){
			roomArr.push('<span class="type-room">1인실</span><span><em class="total-num"> '+room1Cnt+'</em>개</span>');
		}
		
		if(room2dCnt > 0){
			roomArr.push('<span class="type-room">2인실(더블요청)</span><span><em class="total-num"> '+room2dCnt+'</em>개</span>');
		}
		
		if(room2tCnt > 0){
			roomArr.push('<span class="type-room">2인실(트윈요청)</span><span><em class="total-num"> '+room2tCnt+'</em>개</span>');
		}
		
		if(room3Cnt > 0){
			roomArr.push('<span class="type-room">3인실</span><span><em class="total-num"> '+room3Cnt+'</em>개</span>');
		}
		
		for(var i in roomArr){
			if(i > 0){
				txt += ', ';
			}
			txt += roomArr[i];
		}
			
		$currenCapacity.find('.qsb-input').html('');
		$currenCapacity.find('.qsb-input').html(txt);
		$(document).mousedown();
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 캘린더
	//캘린더 팝업
	$('.sc-hotel [data-qsb-area="calendar"]').on('click', function(e){
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
	
	//캘린더 datepicker - 해외호텔
	$('.sc-hotel .o-inth .uis-datepicker').datepicker({
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

			var date1 = $.datepicker.parseDate('yy/mm/dd', $(".sc-hotel .o-inth .uis-date-chkin [data-day]").data('day'));
			var date2 = $.datepicker.parseDate('yy/mm/dd', $(".sc-hotel .o-inth .uis-date-chkout [data-day]").data('day'));
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
			var date1 = $.datepicker.parseDate('yy/mm/dd', $(".sc-hotel .o-inth .uis-date-chkin [data-day]").data('day'));
			var date2 = $.datepicker.parseDate('yy/mm/dd', $(".sc-hotel .o-inth .uis-date-chkout [data-day]").data('day'));
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//체크인, 체크아웃 모두 선택인 경우, 아무것도 선택이 없는 경우(체크인)
			if (!date1 || date2) {
				//input
				$(".sc-hotel .o-inth .uis-date-chkin [data-day]").data('day',dateText);
				$(".sc-hotel .o-inth .uis-date-chkout [data-day]").data('day','');
				//pop input
				$(".sc-hotel .o-inth .uis-date-chkin .txt-day").addClass('on');
				$(".sc-hotel .o-inth .uis-date-chkin .txt-day").html(txtDay+' 체크인');
				$(".sc-hotel .o-inth .uis-date-chkout .txt-day").removeClass('on');
				$(".sc-hotel .o-inth .uis-date-chkout .txt-day").html('체크아웃 날짜를 선택해주세요.');				
				//search input
				$(".sc-hotel .o-inth .qsb-dates .qsb-area").addClass('on');
				$(".sc-hotel .o-inth .qsb-dates .qsb-chkin").html(txtDay);	
				$(".sc-hotel .o-inth .qsb-dates .qsb-chkout").removeClass('on');
				$(".sc-hotel .o-inth .qsb-dates .qsb-chkout").html('');
				
				$('.sc-hotel .o-inth .qsb-result-days').hide();
			} else {
				//체크인 보다 이전 날짜 선택
				if( selectedDate < date1 ) {
					//체크인 -> 체크아웃 이동
					//input 
					$(".sc-hotel .o-inth .uis-date-chkout [data-day]").data('day',$(".sc-hotel .o-inth .uis-date-chkin [data-day]").data('day'));
					//pop input
					$(".sc-hotel .o-inth .uis-date-chkout .txt-day").addClass('on');
					$(".sc-hotel .o-inth .uis-date-chkout .txt-day").html($(".sc-hotel .o-inth .qsb-dates .qsb-chkin").html()+' 체크아웃');
					//search input
					$(".sc-hotel .o-inth .qsb-dates .qsb-chkout").addClass('on');
					$(".sc-hotel .o-inth .qsb-dates .qsb-chkout").html($(".sc-hotel .o-inth .qsb-dates .qsb-chkin").html());	
					
					//체크인 셋팅
					//input 
					$(".sc-hotel .o-inth .uis-date-chkin [data-day]").data('day',dateText);
					//pop input
					$(".sc-hotel .o-inth .uis-date-chkin .txt-day").html(txtDay+' 체크인');
					//search input
					$(".sc-hotel .o-inth .qsb-dates .qsb-chkin").html(txtDay);
				} else {
					if($(".sc-hotel .o-inth .uis-date-chkin [data-day]").data('day') == dateText){return} //같은날짜는 return
					
					//체크인이후 선택시(체크아웃)
					//input 				
					$(".sc-hotel .o-inth .uis-date-chkout [data-day]").data('day',dateText);
					//pop input
					$(".sc-hotel .o-inth .uis-date-chkout .txt-day").addClass('on');
					$(".sc-hotel .o-inth .uis-date-chkout .txt-day").html(txtDay+' 체크아웃');
					//search input
					$(".sc-hotel .o-inth .qsb-dates .qsb-chkout").addClass('on');
					$(".sc-hotel .o-inth .qsb-dates .qsb-chkout").html(txtDay);
				}
				
				var chkIn = $(".sc-hotel .o-inth .uis-date-chkin [data-day]").data('day').split('/');
				var chkOut = $(".sc-hotel .o-inth .uis-date-chkout [data-day]").data('day').split('/');
				var chkInDate = new Date(chkIn[0], chkIn[1], chkIn[2]);
				var chkOutDate = new Date(chkOut[0], chkOut[1], chkOut[2]);
				var duration = (chkOutDate-chkInDate)/1000/60/60/24;
				$('.sc-hotel .o-inth .qsb-result-days').show();
				$('.sc-hotel .o-inth .qsb-result-days .num').text(duration);
				
				setTimeout(function(){$(document).mousedown();}, 100);
			}
		}
	});
	
	//캘린더 datepicker - 국내호텔
	$('.sc-hotel .o-domh .uis-datepicker').datepicker({
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

			var date1 = $.datepicker.parseDate('yy/mm/dd', $(".sc-hotel .o-domh .uis-date-chkin [data-day]").data('day'));
			var date2 = $.datepicker.parseDate('yy/mm/dd', $(".sc-hotel .o-domh .uis-date-chkout [data-day]").data('day'));
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
			var date1 = $.datepicker.parseDate('yy/mm/dd', $(".sc-hotel .o-domh .uis-date-chkin [data-day]").data('day'));
			var date2 = $.datepicker.parseDate('yy/mm/dd', $(".sc-hotel .o-domh .uis-date-chkout [data-day]").data('day'));
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//체크인, 체크아웃 모두 선택인 경우, 아무것도 선택이 없는 경우(체크인)
			if (!date1 || date2) {
				//input
				$(".sc-hotel .o-domh .uis-date-chkin [data-day]").data('day',dateText);
				$(".sc-hotel .o-domh .uis-date-chkout [data-day]").data('day','');
				//pop input
				$(".sc-hotel .o-domh .uis-date-chkin .txt-day").addClass('on');
				$(".sc-hotel .o-domh .uis-date-chkin .txt-day").html(txtDay+' 체크인');
				$(".sc-hotel .o-domh .uis-date-chkout .txt-day").removeClass('on');
				$(".sc-hotel .o-domh .uis-date-chkout .txt-day").html('체크아웃 날짜를 선택해주세요.');				
				//search input
				$(".sc-hotel .o-domh .qsb-dates .qsb-area").addClass('on');
				$(".sc-hotel .o-domh .qsb-dates .qsb-chkin").html(txtDay);	
				$(".sc-hotel .o-domh .qsb-dates .qsb-chkout").removeClass('on');
				$(".sc-hotel .o-domh .qsb-dates .qsb-chkout").html('');
				
				$('.sc-hotel .o-domh .qsb-result-days').hide();
			} else {
				//체크인 보다 이전 날짜 선택
				if( selectedDate < date1 ) {
					//체크인 -> 체크아웃 이동
					//input 
					$(".sc-hotel .o-domh .uis-date-chkout [data-day]").data('day',$(".sc-hotel .o-domh .uis-date-chkin [data-day]").data('day'));
					//pop input
					$(".sc-hotel .o-domh .uis-date-chkout .txt-day").addClass('on');
					$(".sc-hotel .o-domh .uis-date-chkout .txt-day").html($(".sc-hotel .o-domh .qsb-dates .qsb-chkin").html()+' 체크아웃');
					//search input
					$(".sc-hotel .o-domh .qsb-dates .qsb-chkout").addClass('on');
					$(".sc-hotel .o-domh .qsb-dates .qsb-chkout").html($(".sc-hotel .o-domh .qsb-dates .qsb-chkin").html());	
					
					//체크인 셋팅
					//input 
					$(".sc-hotel .o-domh .uis-date-chkin [data-day]").data('day',dateText);
					//pop input
					$(".sc-hotel .o-domh .uis-date-chkin .txt-day").html(txtDay+' 체크인');
					//search input
					$(".sc-hotel .o-domh .qsb-dates .qsb-chkin").html(txtDay);
				} else {
					if($(".sc-hotel .o-domh .uis-date-chkin [data-day]").data('day') == dateText){return} //같은날짜는 return
					
					//체크인이후 선택시(체크아웃)
					//input 				
					$(".sc-hotel .o-domh .uis-date-chkout [data-day]").data('day',dateText);
					//pop input
					$(".sc-hotel .o-domh .uis-date-chkout .txt-day").addClass('on');
					$(".sc-hotel .o-domh .uis-date-chkout .txt-day").html(txtDay+' 체크아웃');
					//search input
					$(".sc-hotel .o-domh .qsb-dates .qsb-chkout").addClass('on');
					$(".sc-hotel .o-domh .qsb-dates .qsb-chkout").html(txtDay);
				}
				
				var chkIn = $(".sc-hotel .o-domh .uis-date-chkin [data-day]").data('day').split('/');
				var chkOut = $(".sc-hotel .o-domh .uis-date-chkout [data-day]").data('day').split('/');
				var chkInDate = new Date(chkIn[0], chkIn[1], chkIn[2]);
				var chkOutDate = new Date(chkOut[0], chkOut[1], chkOut[2]);
				var duration = (chkOutDate-chkInDate)/1000/60/60/24;
				$('.sc-hotel .o-domh .qsb-result-days').show();
				$('.sc-hotel .o-domh .qsb-result-days .num').text(duration);
				
				setTimeout(function(){$(document).mousedown();}, 100);
			}
		}
	});
}
//..검색 - 호텔 관련

//검색 - 자유여행 관련
function comSearchFree(){
	var $currentSelect = null; // select 저장
	
	//프리미엄 에어텔 보기 click 팝업
	$('.sc-free [data-qsb-area="mainsel"]').on('click', function(e){
		var $p;
		$p = $(this).closest('.hss-inner-cont').find('.ui-mainsel-airtel').addClass('on');
		e.preventDefault();
	});
	
	//select click 팝업
	$('.sc-free [data-qsb-sel]').on('click', function(e){
		//position
		var $sel = $(this).data('qsb-sel');
		var $p = $(this).closest('.hss-inner-cont').find('.'+$sel);
		$p.position({
			my: 'left top-12',
			at: 'left top',
			collision: 'none',
			of: $(this).closest('.qsb-select')
		}).addClass('on');
		
		//places 저장
		$currentSelect = $(this);
		
		e.preventDefault();
	});
		
	//select list click
	$('.sc-free .ui-select-list .uis-list .list li a').on('click', function(e){
		var v = $(this).text();
		
		//select list input
		if(!$currentSelect.hasClass('on')){
			$currentSelect.addClass('on');   
		}
		$currentSelect.find('.qsb-input').text(v);
		
		setTimeout(function(){$(document).mousedown();}, 100);
		e.preventDefault();
	});
}
//..검색 - 자유여행 관련

//검색 - 투액 관련
function comSearchFreetour(){
	var $currentCity = null; // 도시영역 저장
	var $currenCapacity = null; // 인원 저장
	var $currentSelect = null; // select 저장
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 도시
	//도시셋팅
	function setFreetourCity(city){
		//도시가 선택됨 표시
		if(!$currentCity.hasClass('on')){
			$currentCity.addClass('on');   
		}
		
		//도시 텍스트 적용
		$currentCity.find('.city').text(city);
		
		setTimeout(function(){$(document).mousedown();}, 100);
	}
	
	//대여, 반납 도시 팝업
	$('.sc-freetour [data-qsb-area="mainsel"]').on('click', function(e){
		//position
		var $p = $(this).closest('.w-qsb-cont').find('.ui-mainsel-freetour');
		$p.position({
			my: 'left top-10',
			at: 'left top',
			collision: 'none',
			of: $(this).closest('.qsb-cont-box')
		}).addClass('on');
		
		//기존 검색리스트 삭제
		if($p.hasClass('ui-search-auto')){
		   $p.removeClass('ui-search-auto');
		}
		
		//places 저장
		$currentCity = $(this);
		
		//도시가 있으면 팝업 인풋에 내용 표시
		if($currentCity.hasClass('on')){
			var city = $currentCity.find('.city').text();
			$p.find('.ipu-search').val(city);
		}
		else{
			$p.find('.ipu-search').val('');
		}
		
		//공항픽업
		if($currentCity.closest('.o-airpicup').hasClass('o-airpicup')){
			if($currentCity.closest('.places-exit').hasClass('places-exit')){
				$p.find('.opt-txt').text('픽업장소를 선택하세요.');
			}
			else if($currentCity.closest('.places-entry').hasClass('places-entry')){
				$p.find('.opt-txt').text('하차장소를 선택하세요.');	
			}
		}
		e.preventDefault();
	});
	
	//주요도시 리스트, 자동완성 리스트 click
	$('.ui-mainsel-freetour .list a').on('click', function(e){
		var city = $(this).data('city'); //도시 이름(임시)
		
		//도시 input
		$(this).closest('.ui-mainsel-freetour').find('.uis-input .ipu-search').val(city);
		
		//도시 셋팅
		setFreetourCity(city);
		e.preventDefault();
	});
	
	//도시 검색하기(자동완성) keydown
	$('.ui-mainsel-freetour .uis-input .ipu-search').on('keydown', function(){
		if(!$(this).closest('.ui-mainsel-freetour').hasClass('ui-search-auto') && $(this).val('')){
			//position
			$(this).closest('.ui-mainsel-freetour').position({
				my: 'left-30 top-40',
				at: 'left top',
				collision: 'none',
				of: $currentCity
			});
			
			//add auto
			$(this).closest('.ui-mainsel-freetour').addClass('ui-search-auto');
		}
	});
	
	//도시 검색하기 focus
	$('.ui-mainsel-freetour .uis-input .ipu-search').on('focus', function(){
		$(this).val('');
	});
	
	//도시 검색하기 blur
	$('.ui-mainsel-freetour .uis-input .ipu-search').on('blur', function(){
		$(this).val($currentCity.find('.city').text());
	});
	
	//렌터카 대여/반납 장소 동일 체크
	$('.opt-box.ob-rentv .chk-area-same label').on('click', function(){
		if($('.opt-box.ob-rentv #areaSameRent').is(':checked')){
			$('.sc-freetour .o-rentv .qsb-places').removeClass('area-same');
		}
		else{
			$('.sc-freetour .o-rentv .qsb-places').addClass('area-same');
		}
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 인원
	//인원 컨트롤
	function setCapacity(type, action){
		var cType = type;
		var cAction = action;
		var adtCnt = parseInt($('.sc-freetour .global-ui-capacity .uis-capacity-number .num-adt').text()); //성인
		var chdCnt = parseInt($('.sc-freetour .global-ui-capacity .uis-capacity-number .num-chd').text()); //아동
		//console.log('setCapacity click = ', cType, cAction, adtCnt, chdCnt);
		
		//성인
		if(cType == 'adt'){
			if(cAction == 'minus'){
				adtCnt--;
				if(adtCnt < 0){
					adtCnt = 0;
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
			
			if(adtCnt < 1){$('.sc-freetour .global-ui-capacity .uis-capacity-number .num-adt').removeClass('on');} 
			else{$('.sc-freetour .global-ui-capacity .uis-capacity-number .num-adt').addClass('on');}
			
			$('.sc-freetour .global-ui-capacity .uis-capacity-number .num-adt').text(adtCnt);
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
			
			if(chdCnt < 1){$('.sc-freetour .global-ui-capacity .uis-capacity-number .num-chd').removeClass('on');} 
			else{$('.sc-freetour .global-ui-capacity .uis-capacity-number .num-chd').addClass('on');}
			
			$('.sc-freetour .global-ui-capacity .uis-capacity-number .num-chd').text(chdCnt);
		}
	}
	
	//인원, 테마 팝업
	$('.sc-freetour [data-qsb-area="capacity"]').on('click', function(e){
		//position
		var $p = $(this).closest('.w-qsb-cont').find('.ui-capacity');
		if($p.length <= 0){
			$p = $(this).closest('.hss-inner-cont').find('.ui-capacity');
		}
		
		$p.position({
			my: 'left-31 top-32',
			at: 'left top',
			collision: 'none',
			of: $(this)
		}).addClass('on');
		
		//capacity 저장
		$currenCapacity = $(this);
		
		//인원
		if($currenCapacity.find('[data-adt]').length > 0){
			//값 가져오기
			var adt = $currenCapacity.find('[data-adt]').data('adt'); //성인
			var chd = $currenCapacity.find('[data-chd]').data('chd'); //아동
			//console.log('가져오기 = ', adt, chd);

			//셋팅
			if(adt > 0){$('.sc-freetour .uis-capacity-number .num-adt').addClass('on');} 
			else{$('.sc-freetour .uis-capacity-number .num-adt').removeClass('on');}
			if(chd > 0){$('.sc-freetour .uis-capacity-number .num-chd').addClass('on');} 
			else{$('.sc-freetour .uis-capacity-number .num-chd').removeClass('on');}
			$('.sc-freetour .uis-capacity-number .num-adt').text(adt);
			$('.sc-freetour .uis-capacity-number .num-chd').text(chd);
		}
		
		//테마
		if($currenCapacity.find('[data-chk]').length > 0){
			//체크값 가져오기
			var chk = $currenCapacity.find('[data-chk]').data('chk').split('-');
			//console.log('가져오기 = ', chk);
			$p.find('.uis-capacity-chk-list li [type="checkbox"]').prop('checked', false);
			$p.find('.uis-capacity-chk-list li label').removeClass('on');
			
			//셋팅
			for(var i=0;i<chk.length;i++){
				if(chk[i] == '1'){
				   $p.find('.uis-capacity-chk-list li').eq(i).find('[type="checkbox"]').prop('checked', true);
				   $p.find('.uis-capacity-chk-list li').eq(i).find('label').addClass('on');
				}
			}
		}
		
		e.preventDefault();
	});
	
	//인원 minus, plus click
	$('.sc-freetour .global-ui-capacity .uis-custom-number .ucn-crt button').on('click', function(e){
		var type = $(this).data('type').split('-')[0];
		var action = $(this).data('type').split('-')[1];
		setCapacity(type, action);
		e.preventDefault();
	});
		
	//인원 완료 click
	$('.sc-freetour .global-ui-capacity .b-complete a').on('click', function(e){
		var adtCnt = parseInt($('.sc-freetour .global-ui-capacity .uis-capacity-number .num-adt').text()); //성인
		var chdCnt = parseInt($('.sc-freetour .global-ui-capacity .uis-capacity-number .num-chd').text()); //아동
		//console.log('완료 = ', adtCnt, chdCnt);
		
		//input
		$currenCapacity.find('[data-adt]').data('adt',adtCnt);
		$currenCapacity.find('[data-chd]').data('chd',chdCnt);
		
		//search input
		$currenCapacity.find('.total-adt-num').text(adtCnt);
		$currenCapacity.find('.total-chd-num').text(chdCnt);
		
		$(document).mousedown();
		e.preventDefault();
	});
	
	//테마 완료 click
	$('.sc-freetour .o-actualtour .uis-capacity .b-complete a').on('click', function(e){
		var chk = $('.sc-freetour .o-actualtour .uis-capacity-chk-list li');
		var dataArr = [];
		var listArr = [];
		chk.each(function(index){
			var c = $(this).find('[type="checkbox"]');
			var l = $(this).find('label');
			if(c.is(':checked')){
				dataArr.push('1');
				listArr.push(l.text());
			}
			else{
				dataArr.push('0');
			}
		});
		//console.log('완료 = ', dataArr.join('-'), listArr.join(', '));
		
		if(listArr.length < 1){
			if($currenCapacity.hasClass('on')){
				$currenCapacity.removeClass('on');
			}
			//input
			$currenCapacity.find('[data-chk]').data('chk', '');
			//search input
			$currenCapacity.find('.txt-list').text('');
		}
		else{
			if(!$currenCapacity.hasClass('on')){
				$currenCapacity.addClass('on')
			}
			//input
			$currenCapacity.find('[data-chk]').data('chk', dataArr.join('-'));
			//search input
			$currenCapacity.find('.txt-list').text(listArr.join(', '));
		}
		
		
		$(document).mousedown();
		e.preventDefault();
	});
	
	//select click 팝업
	$('.sc-freetour [data-qsb-sel]').on('click', function(e){
		//position
		var $sel = $(this).data('qsb-sel');
		var $p = $(this).closest('.hss-inner-cont').find('.'+$sel);
		$p.position({
			my: 'left top-12',
			at: 'left top',
			collision: 'none',
			of: $(this).closest('.qsb-select')
		}).addClass('on');
		
		//places 저장
		$currentSelect = $(this);
		
		e.preventDefault();
	});
		
	//select list click
	$('.sc-freetour .ui-select-list .uis-list .list li a').on('click', function(e){
		var v = $(this).text();
		
		//select list input
		if(!$currentSelect.hasClass('on')){
			$currentSelect.addClass('on');   
		}
		$currentSelect.find('.qsb-input').text(v);
		
		setTimeout(function(){$(document).mousedown();}, 100);
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 캘린더
	//캘린더 팝업
	$('.sc-freetour [data-qsb-area="calendar"]').on('click', function(e){
		//position
		$(this).closest('.w-qsb-cont').find('.ui-date-calendar').addClass('on');
		e.preventDefault();
	});
	
	//캘린더 datepicker - 렌터카
	$('.sc-freetour .o-rentv .uis-datepicker').datepicker({
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
			
			var date1 = $.datepicker.parseDate('yy/mm/dd', $(".sc-freetour .o-rentv .uis-date-chkin [data-day]").data('day'));
			var date2 = $.datepicker.parseDate('yy/mm/dd', $(".sc-freetour .o-rentv .uis-date-chkout [data-day]").data('day'));
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
			var date1 = $.datepicker.parseDate('yy/mm/dd', $(".sc-freetour .o-rentv .uis-date-chkin [data-day]").data('day'));
			var date2 = $.datepicker.parseDate('yy/mm/dd', $(".sc-freetour .o-rentv .uis-date-chkout [data-day]").data('day'));
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//대여, 반납 모두 선택인 경우, 아무것도 선택이 없는 경우(대여)
			if (!date1 || date2) {
				//input
				$(".sc-freetour .o-rentv .uis-date-chkin [data-day]").data('day',dateText);
				$(".sc-freetour .o-rentv .uis-date-chkout [data-day]").data('day','');
				//pop input
				$(".sc-freetour .o-rentv .uis-date-chkin .txt-day").addClass('on');
				$(".sc-freetour .o-rentv .uis-date-chkin .txt-day").html(txtDay);
				$(".sc-freetour .o-rentv .uis-date-chkout .txt-day").removeClass('on');
				$(".sc-freetour .o-rentv .uis-date-chkout .txt-day").html('반납일을 선택해주세요.');				
				$(".sc-freetour .o-rentv .uis-date-chkin .set-time").addClass('on'); //time
				$(".sc-freetour .o-rentv .uis-date-chkout .set-time").removeClass('on'); //time
				//search input
				$(".sc-freetour .o-rentv .qsb-dates .qsb-area").addClass('on');
				$(".sc-freetour .o-rentv .qsb-dates .qsb-chkin .day").html(txtDay);	
				$(".sc-freetour .o-rentv .qsb-dates .qsb-chkin .time").html(
					$('.sc-freetour .o-rentv .uis-date-chkin .timeh option:selected').val()+':'+
					$('.sc-freetour .o-rentv .uis-date-chkin .timem option:selected').val()
				); //time
				$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout").removeClass('on');
				$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout .day").html('');
				$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout .time").html(''); //time
			} else {
				//대여 보다 이전 날짜 선택
				if( selectedDate < date1 ) {
					//대여 -> 반납 이동
					//input 
					$(".sc-freetour .o-rentv .uis-date-chkout [data-day]").data('day',$(".sc-freetour .o-rentv .uis-date-chkin [data-day]").data('day'));
					//pop input
					$(".sc-freetour .o-rentv .uis-date-chkout .txt-day").addClass('on');
					$(".sc-freetour .o-rentv .uis-date-chkout .txt-day").html($(".sc-freetour .o-rentv .uis-date-chkin .txt-day").html());
					$(".sc-freetour .o-rentv .uis-date-chkout .set-time").addClass('on'); //time
					//search input
					$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout").addClass('on');
					$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout .day").html($(".sc-freetour .o-rentv .qsb-dates .qsb-chkin .day").html());	
					$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout .time").html(
						$('.sc-freetour .o-rentv .uis-date-chkout .timeh option:selected').val()+':'+
						$('.sc-freetour .o-rentv .uis-date-chkout .timem option:selected').val()
					); //time

					//대여 셋팅
					//input 
					$(".sc-freetour .o-rentv .uis-date-chkin [data-day]").data('day',dateText);
					//pop input
					$(".sc-freetour .o-rentv .uis-date-chkin .txt-day").html(txtDay);
					//search input
					$(".sc-freetour .o-rentv .qsb-dates .qsb-chkin .day").html(txtDay);
					$(".sc-freetour .o-rentv .qsb-dates .qsb-chkin .time").html(
						$('.sc-freetour .o-rentv .uis-date-chkin .timeh option:selected').val()+':'+
						$('.sc-freetour .o-rentv .uis-date-chkin .timem option:selected').val()
					); //time
				} else {
					//대여이후 선택시(반납)
					//input 				
					$(".sc-freetour .o-rentv .uis-date-chkout [data-day]").data('day',dateText);
					//pop input
					$(".sc-freetour .o-rentv .uis-date-chkout .txt-day").addClass('on');
					$(".sc-freetour .o-rentv .uis-date-chkout .txt-day").html(txtDay);
					$(".sc-freetour .o-rentv .uis-date-chkout .set-time").addClass('on'); //time 
					//search input
					$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout").addClass('on');
					$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout .day").html(txtDay);
					$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout .time").html(
						$('.sc-freetour .o-rentv .uis-date-chkout .timeh option:selected').val()+':'+
						$('.sc-freetour .o-rentv .uis-date-chkout .timem option:selected').val()
					); //time
				}
			}
		}
	});
	
	//캘린더 렌터카 시간 change
	$('.sc-freetour .o-rentv .ui-date-calendar select').on('change', function(){
		var chkin = $(this).closest('.uis-date-chkin').hasClass('uis-date-chkin');
		var chkout = $(this).closest('.uis-date-chkout').hasClass('uis-date-chkout');
		var timeText = $(this).closest('.set-time').find('.timeh option:selected').val()+':'+$(this).closest('.set-time').find('.timem option:selected').val();
		//console.log(chkin, chkout, timeText);	
		if(chkin){
			$(".sc-freetour .o-rentv .qsb-dates .qsb-chkin .time").html(timeText);	
		}		
		if(chkout){
			$(".sc-freetour .o-rentv .qsb-dates .qsb-chkout .time").html(timeText);	
		}
	});
	
	//캘린더 렌터카 완료 click
	$('.sc-freetour .o-rentv .ui-date-calendar .b-complete a').on('click', function(e){
		$(document).mousedown();
		e.preventDefault();
	});
	
	//캘린더 datepicker - 공항픽업
	$('.sc-freetour .o-airpicup .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, inst) {
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText);
			var month = selectedDate.getMonth()+1;
			var day = selectedDate.getDate();
			var dayName = selectedDate.getUTCDay() < 6 ? $(this).datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $(this).datepicker('option', 'dayNamesMin')[0];
			var txtDay = month + '월 ' + day + '일 (' + dayName + ')';
			
			//input
			$(".sc-freetour .o-airpicup .uis-date-chkin [data-day]").data('day',dateText);
			//pop input
			$(".sc-freetour .o-airpicup .uis-date-chkin .txt-day").addClass('on');
			$(".sc-freetour .o-airpicup .uis-date-chkin .txt-day").html(txtDay);
			//search input
			$(".sc-freetour .o-airpicup .qsb-dates .qsb-area").addClass('on');
			$(".sc-freetour .o-airpicup .qsb-dates .qsb-chkin").html(txtDay);	
			
			setTimeout(function(){$(document).mousedown();}, 100);
		}
	});
	
}
//..검색 - 투액 관련




//검색, 헤더 초기화
function comSearchInit(){
	//검색 관련
	comSearchAir();
	comSearchHotel();
	comSearchFree();
	comSearchFreetour();
	comSearchEvent();
	
	//헤더 타입 셋팅
	if (HEADER_TYPE == null || HEADER_TYPE == "") {
		HEADER_TYPE = null;
	}	
	settingHeaderType(HEADER_TYPE);
	
	
	//검색 타입 셋팅
	if (QUICK_CODE == null || QUICK_CODE == "") {
		QUICK_CODE = null;
	}	
	showSearchTap(QUICK_CODE);
}

//GNB초기화
function comGbnInit(){
	if (navData) {

		$("#nav-gnb > li").each(function () {

			var gnbKey = $(this).attr("id");
			
			if(gnbKey){
				gnbKey = gnbKey.replace(/n-gnb-/g, "");
				
				var aTag = $(this).find("a:first");

				aTag.attr("href", navData[gnbKey].link);
			}
		});
	}
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
			$("#n-gnb-free").addClass("on");
			break;
		case GNB_CODE_DPRS:
			$("#n-gnb-freetour").addClass("on");
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

