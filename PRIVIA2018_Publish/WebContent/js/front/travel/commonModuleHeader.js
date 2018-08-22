/**********************************************************************
  navData 관련
   
   1. 기본 : AS IS와 동일구조
   2. 2dep : TO BE에서 2dep는 해외패키지만 존재함 나머지는 전체메뉴
   3. 3dep : 해외패키지 페이지에만 3dep가 존재함(AS IS와는 다르게 구성 해외패키지 2dep에서 구분값 필요)
   4. airtel -> free 변경, dprs - > freetour 변경
   
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
			//$('.hs-search-menu .hss-menu [data-tabsub="shuttle"]').trigger('click');
			break;
		case QUICK_CODE_HOTEL:
			$('#header-sec').addClass('o-search-hotel');
			$('.hs-search-menu .hss-menu [data-tabmain="hotel"]').trigger('click');
			//$('.hs-search-menu .hss-menu [data-tabsub="inth"]').trigger('click');
			break;
		case QUICK_CODE_FREE:	
			$('#header-sec').addClass('o-search-free');
			$('.hs-search-menu .hss-menu [data-tabmain="free"]').trigger('click');
			break;
		case QUICK_CODE_DPRS_ITEM:
			$('#header-sec').addClass('o-search-freetour');
			$('.hs-search-menu .hss-menu [data-tabmain="freetour"]').trigger('click');
			//$('.hs-search-menu .hss-menu [data-tabsub="rentv"]').trigger('click');
			break;
		default :
			$('#header-sec').addClass('o-search-all');
			$('.hs-search-menu .hss-menu [data-tabmain="air"]').trigger('click');
			//$('.hs-search-menu .hss-menu [data-tabsub="shuttle"]').trigger('click');
	}
}


//로컬 전용 입니다!
var _isCallAir = false, _isCallHotel = false, _isCallFree = false, _isCallFreetour = false;

//검색 공통(tab 메뉴)
function comSearchEvent(){
	//검색 메인 tab click
	$(document).on('click', '.hs-search-menu .hss-menu [data-tabmain]', function(e){
        //로컬 전용으로 편집되었습니다.
		if(!$(this).closest('.hss-menu').hasClass('on')){
            var code = $(this).data('tabmain');
            var target = $(this);
            var callback = function() {
	            $('.hs-search-menu .hss-menu.on').removeClass('on');
	            target.closest('.hss-menu').addClass('on');
	            
	            //섹션 체인지    
	            $('.hs-search-cont .hss-inner-cont.on').removeClass('on');
	            $('.hs-search-cont .hss-inner-cont.sc-'+code).addClass('on');
	            
	            //배경색상 체인지(존재하면 삭제)
	            $('#header-sec .header-sec').removeClass(function (index, css) {
	                return (css.match (/\bo-bg-\S+/g) || []).join(' ');
	            }); 
	            $('#header-sec .header-sec').addClass('o-bg-'+code);
	            
	            //서브메뉴 활성화(아무것도 선택이 없으면 처음메뉴 클릭)
	            if(target.closest('.hss-menu').find('.hss-sub .on').length <= 0){
	                target.closest('.hss-menu').find('.hss-sub li:first-child [data-tabsub]').trigger('click');
	            }
	            else if(target.closest('.hss-menu').find('.hss-sub .on').length > 0){
	                target.closest('.hss-menu').find('.hss-sub .on [data-tabsub]').trigger('click');
	            }
            }
            
            var quickUrl = null;
            var quickContainer = null;            
            switch(code){
                
                case "air" : 
                    //quickUrl = "//dwww.priviatravel.com/quick/air.ajax";
                    quickContainer = $('#SC-AIR');
                    break;
                case "hotel" :
                    //quickUrl = "//dwww.priviatravel.com/quick/htl.ajax";
                    quickContainer = $('#SC-HOTEL');
                    break;
                case "free" : 
                    //quickUrl = "//dairtel.priviatravel.com/airtelQuickSearch2.lts";
                    quickContainer = $('#SC-FREE');
                    break;
                case "freetour" : 
                    //quickUrl = "//dairtel.priviatravel.com/dprsItemQuickSearch.lts";
                    quickContainer = $('#SC-FREETOUR');
                    break;
            }
			
			if(quickContainer){
				switch(code){
					case "air" : 
						if(comSearchAir && !_isCallAir){
							comSearchAir(); _isCallAir = true;	
						} 
						break;
					case "hotel" :
						if(comSearchHotel && !_isCallHotel){
							comSearchHotel(); _isCallHotel = true;	
						} 
						break;
					case "free" : 
						if(comSearchFree && !_isCallFree){
							comSearchFree(); _isCallFree = true;	
						} 
						break;
					case "freetour" : 
						if(comSearchFreetour && !_isCallFreetour){
							comSearchFreetour(); _isCallFreetour = true;	
						} 
						break;
				}
				
				callback();
				_applyQuickCallback();
			}
            
			/*
            if( $.trim(quickContainer.html()).length == 0 ){
                
                $.ajax({
                    type:'post'
                    , url:quickUrl
                    , dataType:"html"
                    , success:function(data){
                        quickContainer.html(data);
                        
                        switch(code){
                            case "air" : 
                                if(comSearchAir) comSearchAir();
                                break;
                            case "hotel" :
                                if(comSearchHotel) comSearchHotel();
                                break;
                            case "free" : 
                                if(comSearchFree) comSearchFree();
                                break;
                            case "freetour" : 
                                if(comSearchFreetour) comSearchFreetour();
                                break;
                        }
                        
                        callback();
                        _applyQuickCallback();
                    }
                    , error: function(request,status,error) {
                        if(window.console) console.log( "[headerManager : Error] : 퀵서치 " + code + "\ncode:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error );
                    }
                    , beforeSend: function(xhr) {
                        xhr.withCredentials = true;
                    }
                });
            } else {
                callback();
                _applyQuickCallback();
            }
			*/
        }       
        e.preventDefault();
    }); 
    
    //검색 서브 tab click
	$(document).on('click', '.hs-search-menu .hss-menu [data-tabsub]', function(e){
        var code = $(this).data('tabsub');
        if(!$(this).closest('li').hasClass('on')){
            $(this).closest('.hss-sub').find('.on').removeClass('on');
            $(this).closest('li').addClass('on');
            //서브 체인지    
            $('.hs-search-cont .o-'+code).closest('.hss-inner-cont').find('.sc-search-box.on').removeClass('on');   
            $('.hs-search-cont .o-'+code).addClass('on');
        }           
        e.preventDefault();
    }); 
    
    //document 클릭시 옵션 팝업 닫힘
    $(document).on('mousedown', function(e){
        //fakeselect option
        if($(e.target).closest('.select-option').length > 0){
            return false;
        }
        else{
            //검색팝업
            if($(e.target).closest('.sc-ui-search-panel.on').length <= 0){
                $('.w-header-search .sc-ui-search-panel.on').removeClass('on');
            }
        }
    }); 
}

//검색 - 항공 관련
function comSearchAir(){	
	var $currentCity = null; // 도시영역 저장
	var $currenCapacity = null; // 인원,좌석 저장
	var _MDMinCnt = 2; //최소 구간
	var _MDCnt = $('.sc-air .o-multiway li[class*="air-md-"].on').length; // 다구간 on
	var _MDMax = $('.sc-air .o-multiway li[class*="air-md-"]').length; //다구간 최대
	var _mdDateIdx; //다구간 index
	var _mdDateArr = []; //다중날짜 처리 array
	var timeAddTextToMD = null; //텍스트 삽입 중복 방지
	
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
		
		pvFrontScript.docuMoudownTrigger();
	}
	
	//출발, 도착 도시 팝업
	$('.sc-air [data-panel="mainsel"]').on('click', function(e){
		var panelName = $(this).data('panel-name');
		
		//places 저장
		$currentCity = $(this);
		
		//position
		pvFrontScript.panelPosition({
			target: $currentCity,
			area: 'air-mainsel'
		});
		
		//기존 검색리스트 삭제
		if($('.'+panelName).hasClass('ui-search-auto')){
		   $('.'+panelName).removeClass('ui-search-auto');
		}
		
		//출,도착 placeholder 텍스트 변경
		if($currentCity.closest('.places-exit').length > 0){
			$('.'+panelName).find('.ipu-search').attr('placeholder','출발 도시명을 검색하거나 아래 주요도시에서 선택하세요.');
		}
		else if($currentCity.closest('.places-entry').length > 0){
			$('.'+panelName).find('.ipu-search').attr('placeholder','도착 도시명을 검색하거나 아래 주요도시에서 선택하세요.');
		}		
		
		//도시가 있으면 팝업 인풋에 내용 표시
		if($currentCity.hasClass('on')){
			var city = $currentCity.find('.city').text();
			$('.'+panelName).find('.ipu-search').val(city);
		}
		else{
			$('.'+panelName).find('.ipu-search').val('');
		}
		e.preventDefault();
	});
	
	//주요도시 리스트, 자동완성 리스트 click
	$(document).on('click', '.ui-mainsel-air .list a', function(e){
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
			pvFrontScript.panelPosition({
				target: $currentCity,
				area: 'air-mainsel-auto'
			});

			//add auto
			$(this).attr('placeholder','도시 또는 공항을 검색하세요.');
			$(this).closest('.ui-mainsel-air').addClass('ui-search-auto');
			$(this).closest('.ui-mainsel-air .ipu-search').removeClass('placeholder'); //IE9
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
	
	//도시 체인지 click
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
		
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 인원,좌석
	//인원, 좌석등급 팝업
	$('.sc-air [data-panel="capacity"]').on('click', function(e){
		//capacity 저장
		$currenCapacity = $(this);
		
		//position
		pvFrontScript.panelPosition({
			target: $currenCapacity,
			area: 'air-capacity'
		});
		
		//값 가져오기
		var adt = $currenCapacity.find('[data-adt]').data('adt'); //성인
		var chd = $currenCapacity.find('[data-chd]').data('chd'); //아동
		var inf = $currenCapacity.find('[data-inf]').data('inf'); //유아
		var comp = $currenCapacity.find('[data-comp]').data('comp'); //좌석
		//console.log('가져오기 = ', adt, chd, inf, comp);
		
		//셋팅
		$('.sc-air .uis-custom-number-adt').uisCustomNumber({num: adt});
		$('.sc-air .uis-custom-number-chd').uisCustomNumber({num: chd});
		$('.sc-air .uis-custom-number-inf').uisCustomNumber({num: inf});
		
		$('.sc-air .select-comp li.on').removeClass('on');
		//일반석
		if(comp == 'Y'){
			$('.sc-air .select-comp li').eq(0).addClass('on');
		}
		//프리미엄 이코노미석
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
		
		//국내선인 경우 셋팅(좌석 숨김)
		/*
		$('.sc-air .ui-capacity .select-comp').hide();
		*/
		
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
		
		//data input
		$currenCapacity.find('[data-adt]').data('adt',adtCnt);
		$currenCapacity.find('[data-chd]').data('chd',chdCnt);
		$currenCapacity.find('[data-inf]').data('inf',infCnt);	
		$currenCapacity.find('[data-comp]').data('comp',compOpt);	
		
		//sbox input
		$currenCapacity.find('.total-num').text(adtCnt+chdCnt+infCnt);
		$currenCapacity.find('.type-seat').text(', '+comp);
		
		pvFrontScript.docuMoudownTrigger();
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 캘린더
	//캘린더 팝업
	$('.sc-air [data-panel="calendar"]').on('click', function(e){
		//position
		pvFrontScript.panelPosition({
			target: $(this),
			area: 'air-calendar'
		});
		
		//다구간인 경우 캘린더 팝업 1개 존재, 오픈시 날짜셋팅해준다
		if($(this).closest('.o-multiway').length > 0){
			_mdDateIdx = $(this).closest('li[class*="air-md-"].on').index();
			var day = $(this).find('.qsb-chkin').data('day');
			
			//console.log(_mdDateIdx, day);
			
			//캘린더 팝업에 날짜 표시
			if(day != ""){
				var txtDay = pvFrontScript.onSelectTxtDay($('.sc-air .o-multiway .uis-datepicker'), day);
				$('.sc-air .o-multiway .uis-datepicker').datepicker('setDate', new Date(day));
				addTextToMD($('.sc-air .o-multiway .uis-datepicker'));
			}
			
		}
		
		e.preventDefault();
	});
	
	//캘린더 datepicker - 왕복
	$('.sc-air .o-shuttle .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+365',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-air .o-shuttle .qsb-chkin').data('day'));
			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-air .o-shuttle .qsb-chkout').data('day'));
			return pvFrontScript.beforeShowDayMark(date, date1, date2);
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-air .o-shuttle .qsb-chkin').data('day'));
			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-air .o-shuttle .qsb-chkout').data('day'));
			var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
			var txtDay = pvFrontScript.onSelectTxtDay($(this), dateText);
						
			//출발, 도착 모두 선택인 경우, 아무것도 선택이 없는 경우(출발)
			if (!date1 || date2) {
				//sbox input
				$('.sc-air .o-shuttle .qsb-chkin').data('day',dateText);
				$('.sc-air .o-shuttle .qsb-chkout').data('day','');
				$('.sc-air .o-shuttle .qsb-dates .qsb-area').addClass('on');
				$('.sc-air .o-shuttle .qsb-chkin').html(txtDay);	
				$('.sc-air .o-shuttle .qsb-chkout').html('');
			} 
			else {
				//출발 보다 이전 날짜 선택
				if( selectedDate.getTime() < date1.getTime() ) {
					//출발 -> 도착 이동
					//sbox input
					$('.sc-air .o-shuttle .qsb-chkout').data('day',$('.sc-air .o-shuttle .qsb-chkin').data('day'));
					$('.sc-air .o-shuttle .qsb-chkout').html($('.sc-air .o-shuttle .qsb-chkin').html());	

					//출발 셋팅
					//sbox input
					$('.sc-air .o-shuttle .qsb-chkin').data('day',dateText);
					$('.sc-air .o-shuttle .qsb-chkin').html(txtDay);
				} 
				else {
					//출발이후 선택시(도착)
					//sbox input
					$('.sc-air .o-shuttle .qsb-chkout').data('day',dateText);
					$('.sc-air .o-shuttle .qsb-chkout').html(txtDay);
				}

				pvFrontScript.docuMoudownTrigger();
			}
		}
	});
	
	//캘린더 datepicker - 편도
	$('.sc-air .o-oneway .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+365',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-air .o-oneway .qsb-chkin').data('day'));
			return pvFrontScript.beforeShowDayMark(date, date1);
		},
		onSelect: function(dateText, inst) {
			var txtDay = pvFrontScript.onSelectTxtDay($(this), dateText);
			
			//sbox input
			$('.sc-air .o-oneway .qsb-chkin').data('day',dateText);
			$('.sc-air .o-oneway .qsb-dates .qsb-area').addClass('on');
			$('.sc-air .o-oneway .qsb-chkin').html(txtDay);	
			
			pvFrontScript.docuMoudownTrigger();
		}
	});
		
	//캘린더 datepicker - 다구간
	$('.sc-air .o-multiway .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+365',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		onSelect: function(dateText, inst) {
			var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
			var txtDay = pvFrontScript.onSelectTxtDay($(this), dateText);
			
			//다중날짜 체크
			checkMdDate(_mdDateIdx, selectedDate);
			
			pvFrontScript.docuMoudownTrigger();
		},
		onChangeMonthYear: function(year, month, inst) {
			//텍스트 삽입
			addTextToMD($(this));
		}
	});
	
	//다구간 - 구간 추가 click
	$('.sc-air .o-multiway .b-add-multiway').on('click', function(){
		_MDCnt++;
		if(_MDCnt > _MDMax){
			_MDCnt = _MDMax;
			//alert('여정은 총 ' + _MDCnt + '개 까지만 가능합니다.\n' + _MDCnt + '개 이상의 여정이 있으시다면 1;1문의로 요청해 주시기 바랍니다.');
			if($(this).hasClass('disabled')){ return false; }
		}
		else{
			$('.sc-air .o-multiway .air-md-'+_MDCnt).addClass('on');
			if(_MDCnt > _MDMinCnt){
				$('.sc-air .o-multiway .air-md-'+_MDMinCnt).find('.qsb-btn-add').show();
			}
			
			if(_MDCnt == _MDMax){
			   $('.sc-air .o-multiway .b-add-multiway').addClass('disabled');
			}
			_mdDateArr.push(""); //다중날짜 추가
		}
	});
	
	//다구간 - 구간 제거 click
	$('.sc-air .o-multiway .b-remove-multiway').on('click', function(){
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
									
			//삭제구간 부터 데이터 초기화하고 한칸씩 옮김
			$('.sc-air .o-multiway .list-qsb-cont li[class*="air-md-"].on').each(function(){
				var idx = $(this).index();
				if(idx >= removeIdx){
					//qsb 초기화
					$(this).find('.qsb-area.on').removeClass('on');
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
					}
				}
			});
			
			//맨뒤에 있는 구간 숨김
			$('.sc-air .o-multiway .air-md-'+openTotal).removeClass('on');
						
			//버튼 변경 - 구간 2개 남을때
			if(openTotal <= _MDMinCnt+1){
				$('.sc-air .o-multiway .air-md-2 .qsb-btn-add').hide();			
			}
			
			if(_MDCnt < _MDMax){
			   $('.sc-air .o-multiway .b-add-multiway').removeClass('disabled');
			}
			
			//다중날짜 리셋
			_mdDateArr.splice(removeIdx, 1);
			initMDDate();
		}
	});
	
	//다구간 - 다중날짜 셋팅
	function initMDDate(){
		//console.log('s initMDDate = ', _mdDateArr);
		
		//date array 리셋(날짜가 없는경우 "" 처리)
		if(_mdDateArr.length <= 0){
			$('.sc-air .o-multiway li[class*="air-md-"].on').each(function(){
				_mdDateArr.push($(this).find('.qsb-chkin').data('day'));
			});	
		}
		
		//qsb 여행 날짜 표시 리셋
		for(var i in _mdDateArr){
			if(_mdDateArr[i] != ""){
				//sbox input
				var txtDay = pvFrontScript.onSelectTxtDay($('.sc-air .o-multiway .uis-datepicker'), _mdDateArr[i]);
				if(!$('.sc-air .o-multiway [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-area').hasClass('on')){
					$('.sc-air .o-multiway [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-area').addClass('on');
					$('.sc-air .o-multiway [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-area').addClass('on');
				}
				$('.sc-air .o-multiway [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin').html(txtDay);		
				$('.sc-air .o-multiway [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin').data('day', _mdDateArr[i]);		
			}
			else{
				$('.sc-air .o-multiway [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-area.on').removeClass('on');
				$('.sc-air .o-multiway [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin').html('');		
				$('.sc-air .o-multiway [class*="air-md-"]').eq(i).find('.qsb-dates .qsb-chkin').data('day','');		
			}
		}
		
		//console.log('e initMDDate = ', _mdDateArr);
		
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
		$('.sc-air .o-multiway .uis-datepicker').datepicker('option', 'beforeShowDay', function(date) {
			return pvFrontScript.beforeShowDayMarkMD(date, tempParseDateArr);
		});	
		
		//텍스트 삽입
		addTextToMD($('.sc-air .o-multiway .uis-datepicker'));
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
		
		//다음 구간 팝업 열기
		/*for(var i in _mdDateArr){
			if(_mdDateArr[i] == ""){
				setTimeout(function(){
					$('.sc-air .o-multiway li').eq(i).find('.qsb-area[data-panel="calendar"]').trigger('click');
				}, 100);
				return false;
			}
		}*/
		
		//console.log('e _mdDateArr = ', _mdDateArr);
	}
	
	initMDDate();
	
	//event 바인딩
	pvFrontScript.comSearchEvtBind($('.sc-air'));
	
	//최근검색 존재하면 event 셋팅
	pvFrontScript.comSearchRecently($('.sc-air'));
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ event 바인딩 이후 event
	//인원 컨트롤(별도로 조건이 필요한 경우 실행)
	function setCapacity(type, action){
		var cType = type;
		var cAction = action;
		var adtCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-adt').text()); //성인
		var chdCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-chd').text()); //아동
		var infCnt = parseInt($('.sc-air .global-ui-capacity .uis-capacity-number .num-inf').text()); //유아
		//console.log('setCapacity click = ', cType, cAction, adtCnt, chdCnt, infCnt);
		
		//조건
	}
	
	//인원 minus, plus click(별도로 조건이 필요한 경우 실행)
	$('.sc-air .global-ui-capacity .uis-custom-number .ucn-crt button').on('click', function(e){
		var type = $(this).data('type').split('-')[0];
		var action = $(this).data('type').split('-')[1];
		setCapacity(type, action);
		e.preventDefault();
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
		pvFrontScript.docuMoudownTrigger();
	}
		
	//목적지 팝업
	$('.sc-hotel [data-panel="mainsel"]').on('click', function(e){
		var panelName = $(this).data('panel-name');

		//places 저장
		$currentCity = $(this);
		
		//position
		pvFrontScript.panelPosition({
			target: $currentCity,
			area: 'hotel-mainsel'
		});
		
		//기존 검색리스트 삭제
		if($('.'+panelName).hasClass('ui-search-auto')){
		   $('.'+panelName).removeClass('ui-search-auto');
		}
		
		//목적지가 있으면 팝업 인풋에 내용 표시
		if($currentCity.hasClass('on')){
			var city = $currentCity.find('.city').text();
			$('.'+panelName).find('.ipu-search').val(city);
		}
		else{
			$('.'+panelName).find('.ipu-search').val('');
		}
		e.preventDefault();
	});
	
	//주요도시 리스트, 자동완성 리스트 click
	$(document).on('click', '.ui-mainsel-hotel .list a', function(e){
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
			$(this).closest('.ui-mainsel-hotel .ipu-search').removeClass('placeholder'); //IE9
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
	//객실타입, 객실수 팝업
	$('.sc-hotel [data-panel="capacity"]').on('click', function(e){
		//capacity 저장
		$currenCapacity = $(this);
		
		//position
		pvFrontScript.panelPosition({
			target: $currenCapacity,
			area: 'hotel-capacity'
		});

		//값 가져오기
		var room1 = $currenCapacity.find('[data-room1]').data('room1'); //1인실
		var room2d = $currenCapacity.find('[data-room2d]').data('room2d'); //2인실 더블
		var room2t = $currenCapacity.find('[data-room2t]').data('room2t'); //2인실 트윈
		var room3 = $currenCapacity.find('[data-room3]').data('room3'); //3인실
		//console.log('가져오기 = ', room1, room2d, room2t, room3);
		
		//셋팅
		$('.sc-hotel .uis-custom-number-room1').uisCustomNumber({num: room1});
		$('.sc-hotel .uis-custom-number-room2d').uisCustomNumber({num: room2d});
		$('.sc-hotel .uis-custom-number-room2t').uisCustomNumber({num: room2t});
		$('.sc-hotel .uis-custom-number-room3').uisCustomNumber({num: room3});
				
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
		
		if(txt == ''){
			if($currenCapacity.hasClass('on')){
				$currenCapacity.removeClass('on');
			}
		}
		else{
			if(!$currenCapacity.hasClass('on')){
				$currenCapacity.addClass('on');
			}
		}
		
		$currenCapacity.find('.qsb-input').empty();
		$currenCapacity.find('.qsb-input').html(txt);
		pvFrontScript.docuMoudownTrigger();
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 캘린더
	//캘린더 팝업
	$('.sc-hotel [data-panel="calendar"]').on('click', function(e){
		//position
		pvFrontScript.panelPosition({
			target: $(this)
		});
		e.preventDefault();
	});
	
	//캘린더 datepicker - 해외호텔
	$('.sc-hotel .o-inth .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+365',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-hotel .o-inth .qsb-chkin').data('day'));
			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-hotel .o-inth .qsb-chkout').data('day'));
			return pvFrontScript.beforeShowDayMark(date, date1, date2);
		},
		onSelect: function(dateText, inst) {
            
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-hotel .o-inth .qsb-chkin').data('day'));
			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-hotel .o-inth .qsb-chkout').data('day'));
			var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
			var txtDay = pvFrontScript.onSelectTxtDay($(this), dateText);
			
			//체크인, 체크아웃 모두 선택인 경우, 아무것도 선택이 없는 경우(체크인)
			if (!date1 || date2) {
				//sbox input
				$('.sc-hotel .o-inth .qsb-chkin').data('day',dateText);
				$('.sc-hotel .o-inth .qsb-chkout').data('day','');			
				$('.sc-hotel .o-inth .qsb-dates .qsb-area').addClass('on');
				$('.sc-hotel .o-inth .qsb-chkin').html(txtDay);	
				$('.sc-hotel .o-inth .qsb-chkout').html('');
				
				$('.sc-hotel .o-inth .qsb-result-days').removeClass('on');
			} 
			else {
                //체크인 보다 이전 날짜 선택
                
				// 박수 계산
				var duration = Math.abs(selectedDate.getTime() - date1.getTime());
                duration = Math.ceil(duration/(1000*3600*24));
                if(duration>15){
					$('.sc-hotel .o-inth .uis-datepicker').datepicker('setDate', new Date($('.sc-hotel .o-inth .qsb-chkin').data('day')));
                    alert("15박까지 예약할 수 있습니다.");
                    return false;
                }
				
				if( selectedDate.getTime() < date1.getTime() ) {
					//체크인 -> 체크아웃 이동
					//sbox input
					$('.sc-hotel .o-inth .qsb-chkout').data('day',$('.sc-hotel .o-inth .qsb-chkin').data('day'));
					$('.sc-hotel .o-inth .qsb-chkout').html($('.sc-hotel .o-inth .qsb-chkin').html());	
					
					//체크인 셋팅
					//sbox input
					$('.sc-hotel .o-inth .qsb-chkin').data('day',dateText);
					$('.sc-hotel .o-inth .qsb-chkin').html(txtDay);
				} 
				else {
					if($('.sc-hotel .o-inth .qsb-chkin').data('day') == dateText){return false;} //같은날짜는 return
					
					//체크인이후 선택시(체크아웃)
					//sbox input
					$('.sc-hotel .o-inth .qsb-chkout').data('day',dateText);
					$('.sc-hotel .o-inth .qsb-dates .qsb-chkout').html(txtDay);
				}
				
				// 박수 표시
				if(!$('.sc-hotel .o-inth .qsb-result-days').hasClass('on')){
					$('.sc-hotel .o-inth .qsb-result-days').addClass('on');
				}
				$('.sc-hotel .o-inth .qsb-result-days .num').text(duration);
				
				pvFrontScript.docuMoudownTrigger();
			}
		}
	});
	
	//캘린더 datepicker - 국내호텔
	$('.sc-hotel .o-domh .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+365',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-hotel .o-domh .qsb-chkin').data('day'));
			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-hotel .o-domh .qsb-chkout').data('day'));
			return pvFrontScript.beforeShowDayMark(date, date1, date2);
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-hotel .o-domh .qsb-chkin').data('day'));
			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-hotel .o-domh .qsb-chkout').data('day'));
			var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
			var txtDay = pvFrontScript.onSelectTxtDay($(this), dateText);
			
			//체크인, 체크아웃 모두 선택인 경우, 아무것도 선택이 없는 경우(체크인)
			if (!date1 || date2) {
				//sbox input
				$('.sc-hotel .o-domh .qsb-chkin').data('day',dateText);
				$('.sc-hotel .o-domh .qsb-chkout').data('day','');
				$('.sc-hotel .o-domh .qsb-dates .qsb-area').addClass('on');
				$('.sc-hotel .o-domh .qsb-chkin').html(txtDay);	
				$('.sc-hotel .o-domh .qsb-chkout').html('');
				
				$('.sc-hotel .o-domh .qsb-result-days').removeClass('on');
			} 
			else {
				//체크인 보다 이전 날짜 선택
				
				// 박수 계산
                var duration = Math.abs(selectedDate.getTime() - date1.getTime());
                duration = Math.ceil(duration/(1000*3600*24));
                if(duration>15){
					$('.sc-hotel .o-domh .uis-datepicker').datepicker('setDate', new Date($('.sc-hotel .o-domh .qsb-chkin').data('day')));
                    alert("15박까지 예약할 수 있습니다.");
                    return false;
                }
                
				if( selectedDate.getTime() < date1.getTime() ) {
					//체크인 -> 체크아웃 이동
					//sbox input
					$('.sc-hotel .o-domh .qsb-chkout').data('day',$('.sc-hotel .o-domh .qsb-chkin').data('day'));
					$('.sc-hotel .o-domh .qsb-chkout').html($('.sc-hotel .o-domh .qsb-chkin').html());	
					
					//체크인 셋팅
					//sbox input
					$('.sc-hotel .o-domh .qsb-chkin').data('day',dateText);
					$('.sc-hotel .o-domh .qsb-chkin').html(txtDay);
				} 
				else {
					if($('.sc-hotel .o-domh .qsb-chkin').data('day') == dateText){return false;} //같은날짜는 return
					
					//체크인이후 선택시(체크아웃)
					//sbox input
					$('.sc-hotel .o-domh .qsb-chkout').data('day',dateText);
					$('.sc-hotel .o-domh .qsb-chkout').html(txtDay);
				}
				
				// 박수 표시
				if(!$('.sc-hotel .o-domh .qsb-result-days').hasClass('on')){
					$('.sc-hotel .o-domh .qsb-result-days').addClass('on');
				}
				$('.sc-hotel .o-domh .qsb-result-days .num').text(duration);
				
				pvFrontScript.docuMoudownTrigger();
			}
		}
	});
	
	//event 바인딩
	pvFrontScript.comSearchEvtBind($('.sc-hotel'));
	
	//최근검색 존재하면 event 셋팅
	pvFrontScript.comSearchRecently($('.sc-hotel'));
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ event 바인딩 이후 event
	//객실타입, 객실수 컨트롤(별도로 조건이 필요한 경우 실행)
	function setCapacity(type, action){
		var cType = type;
		var cAction = action;
		var room1Cnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room1').text()); //1인실
		var room2dCnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2d').text()); //2인실 더블
		var room2tCnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room2t').text()); //2인실 트윈
		var room3Cnt = parseInt($('.sc-hotel .global-ui-capacity .uis-capacity-number .num-room3').text()); //3인실
		//console.log('setCapacity click = ', cType, cAction, room1Cnt, room2dCnt, room2tCnt, room3Cnt);
		
		//조건
	}
	
	//객실수 minus, plus click(별도로 조건이 필요한 경우 실행)
	$('.sc-hotel .global-ui-capacity .uis-custom-number .ucn-crt button').on('click', function(e){
		var type = $(this).data('type').split('-')[0];
		var action = $(this).data('type').split('-')[1];
		setCapacity(type, action);
		e.preventDefault();
	});
}
//..검색 - 호텔 관련

//검색 - 자유여행 관련
function comSearchFree(){
	var $currentSelect = null; // select 저장
	
	//프리미엄 에어텔 보기 click 팝업
	$('.sc-free [data-panel="mainsel"]').on('click', function(e){
		//position
		pvFrontScript.panelPosition({
			target: $(this)
		});
		e.preventDefault();
	});
	
	//select click 팝업
	$('.sc-free [data-panel="select"]').on('click', function(e){
		//places 저장
		$currentSelect = $(this);
		
		//position
		pvFrontScript.panelPosition({
			target: $currentSelect,
			area: 'panel-sel'
		});
		
		e.preventDefault();
	});
		
	//select list click
	$(document).on('click', '.sc-free .ui-select-list .uis-list .list li a', function(e){
		var v = $(this).text();
		
		//select list input
		if(!$currentSelect.hasClass('on')){
			$currentSelect.addClass('on');   
		}
		$currentSelect.find('.qsb-input').text(v);
		
		pvFrontScript.docuMoudownTrigger();
		e.preventDefault();
	});
	
	//event 바인딩
	pvFrontScript.comSearchEvtBind($('.sc-free'));
	
	//최근검색 존재하면 event 셋팅
	pvFrontScript.comSearchRecently($('.sc-free'));
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
		
		pvFrontScript.docuMoudownTrigger();
	}
	
	//렌터카, 공항픽업 도시 팝업
	$('.sc-freetour [data-panel="mainsel"]').on('click', function(e){
		var panelName = $(this).data('panel-name');
		
		//places 저장
		$currentCity = $(this);
		
		//position
		pvFrontScript.panelPosition({
			target: $currentCity,
			area: 'freetour-mainsel'
		});
		
		//렌터카인 경우
		if($currentCity.closest('.o-rentv').length > 0){
			//기존 검색리스트 삭제
			if($('.o-rentv .'+panelName).hasClass('ui-search-auto')){
			   $('.o-rentv .'+panelName).removeClass('ui-search-auto');
			}
			
			//도시가 있으면 팝업 인풋에 내용 표시
			if($currentCity.hasClass('on')){
				var city = $currentCity.find('.city').text();
				$('.o-rentv .'+panelName).find('.ipu-search').val(city);
			}
			else{
				$('.o-rentv .'+panelName).find('.ipu-search').val('');
			}
		  	
			$('.o-rentv .'+panelName).find('.uis-input .ipu-search').show();
			$('.o-rentv .'+panelName).find('.uis-input .opt-txt').hide();
		}
		
		//공항픽업인 경우
		if($currentCity.closest('.o-airpicup').length > 0){
			if($currentCity.closest('.places-exit').length > 0){
				$('.o-airpicup .'+panelName).find('.opt-txt').text('픽업장소를 선택하세요.');
			}
			else if($currentCity.closest('.places-entry').length > 0){
				$('.o-airpicup .'+panelName).find('.opt-txt').text('하차장소를 선택하세요.');	
			}
		}
		
		e.preventDefault();
	});
		
	//주요도시 리스트 click
	$(document).on('click', '.ui-mainsel-freetour .list a', function(e){
		//렌터카 선택된 도시 리스트 클릭시 return
		if($(this).hasClass('sel-city')){ return false; }
		
		//렌터카 주요도시를 클릭하는 경우 대여장소 리스트 노출됨
		if($(this).closest('.uis-mainsel-table').length > 0){
			if(!$(this).closest('.ui-mainsel-freetour').hasClass('ui-search-auto')){			
				//position
				pvFrontScript.panelPosition({
					target: $currentCity,
					area: 'freetour-mainsel-auto'
				});

				//add auto
				$(this).closest('.ui-mainsel-freetour').addClass('ui-search-auto');
				
				//input 변경
				$(this).closest('.ui-mainsel-freetour').find('.uis-input .ipu-search').hide();
				$(this).closest('.ui-mainsel-freetour').find('.uis-input .opt-txt').show();
				
				//렌터카 auto로 검색된 리스트들 중에 클래스 sel-city 추가 시키고 대여장소 리스트 노출시킨다
				setTimeout( function () {
					$(this).find('.o-customscrollbar').mCustomScrollbar('scrollTo', '.sel-city');
				}, 100);
			}
		}
		else if($(this).closest('.uis-list-auto.is-rent').length > 0 && $(this).closest('.list-sub').length <= 0){
			//렌터카 auto로 검색된 리스트들 중에 클래스 sel-city 추가 시키고 대여장소 리스트 노출시킨다
			$(this).addClass('sel-city');
			$(this).next('.list-sub').show();
			setTimeout( function () {
				$(this).find('.o-customscrollbar').mCustomScrollbar('scrollTo', '.sel-city');
			}, 100);
		}
		else{
			var city = $(this).data('city'); //도시 이름(임시)

			//도시 input
			$(this).closest('.ui-mainsel-freetour').find('.uis-input .ipu-search').val(city);

			//도시 셋팅
			setFreetourCity(city);
		}
		
		e.preventDefault();
	});
	
	//도시 검색하기(자동완성) keydown
	$('.ui-mainsel-freetour .uis-input .ipu-search').on('keydown', function(){
		if(!$(this).closest('.ui-mainsel-freetour').hasClass('ui-search-auto') && $(this).val('')){			
			//position
			pvFrontScript.panelPosition({
				target: $currentCity,
				area: 'freetour-mainsel-auto'
			});
			
			//add auto
			$(this).closest('.ui-mainsel-freetour').addClass('ui-search-auto');
			$(this).closest('.ui-mainsel-freetour .ipu-search').removeClass('placeholder'); //IE9
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
	$('.sc-freetour .o-rentv .chk-area-same label').on('click', function(){
		if($('.sc-freetour .o-rentv #areaSameRent').is(':checked')){
			$('.sc-freetour .o-rentv .qsb-places').removeClass('area-same');
		}
		else{
			$('.sc-freetour .o-rentv .qsb-places').addClass('area-same');
		}
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 인원	
	//인원, 테마, 교통패스 팝업
	$('.sc-freetour [data-panel="capacity"]').on('click', function(e){
		var panelName = $(this).data('panel-name');
				
		//capacity 저장
		$currenCapacity = $(this);
		
		//position
		pvFrontScript.panelPosition({
			target: $currenCapacity,
			area: 'freetour-capacity'
		});
		
		//인원
		if(panelName == 'global-ui-capacity'){
			//값 가져오기
			var adt = $currenCapacity.find('[data-adt]').data('adt'); //성인
			var chd = $currenCapacity.find('[data-chd]').data('chd'); //아동
			//console.log('가져오기 = ', adt, chd);
			
			//셋팅
			$('.sc-freetour .uis-custom-number-adt').uisCustomNumber({num: adt});
			$('.sc-freetour .uis-custom-number-chd').uisCustomNumber({num: chd});
			
			if($(this).closest('.scbi-2').hasClass('on')){
				//값 가져오기
				var yth = $currenCapacity.find('[data-yth]').data('yth'); //유스
				var old = $currenCapacity.find('[data-old]').data('old'); //경로
				//console.log('가져오기 = ', adt, yth, chd, old);
				
				$('.sc-freetour .uis-capacity-number .yth').show();
				$('.sc-freetour .uis-capacity-number .old').show();
				
				//셋팅
				$('.sc-freetour .uis-custom-number-yth').uisCustomNumber({num: yth});
				$('.sc-freetour .uis-custom-number-old').uisCustomNumber({num: old});
			}
			else{
				$('.sc-freetour .uis-capacity-number .yth').hide();
				$('.sc-freetour .uis-capacity-number .old').hide();
			}
		}
		
		
		//테마
		if(panelName == 'ui-capacity-theme'){
			//값 가져오기
			var chk = $currenCapacity.find('[data-chk]').data('chk');
			//console.log('가져오기 = ', chk);
			$('.'+panelName).find('.uis-capacity-chk-list li [type="checkbox"]').prop('checked', false);
			$('.'+panelName).find('.uis-capacity-chk-list li label').removeClass('on');
			
			//셋팅
			for(var i=0;i<chk.length;i++){
				if(chk[i] == '1'){
				   $('.'+panelName).find('.uis-capacity-chk-list li').eq(i).find('[type="checkbox"]').prop('checked', true);
				   $('.'+panelName).find('.uis-capacity-chk-list li').eq(i).find('label').addClass('on');
				}
			}
		}
		
		//교통패스 - 여행도시 selectbox
		if(panelName == 'select-nation'){
			//값 가져오기
			var n1 = $currenCapacity.find('[data-n1]').data('n1');
			var n2 = $currenCapacity.find('[data-n2]').data('n2');
			var n3 = $currenCapacity.find('[data-n3]').data('n3');
			var n4 = $currenCapacity.find('[data-n4]').data('n4');
			//console.log('가져오기 = ', n1, n2, n3, n4);
			
			$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(0).find('option[value='+ n1 +']').prop('selected', true);
			$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(1).find('option[value='+ n2 +']').prop('selected', true);
			$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(2).find('option[value='+ n3 +']').prop('selected', true);
			$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(3).find('option[value='+ n4 +']').prop('selected', true);
			$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li select').fakeselect();
		}
		
		e.preventDefault();
	});
		
	//인원 완료 click
	$('.sc-freetour .global-ui-capacity .b-complete a').on('click', function(e){
		var adtCnt = parseInt($('.sc-freetour .global-ui-capacity .uis-capacity-number .num-adt').text()); //성인
		var ythCnt = parseInt($('.sc-freetour .global-ui-capacity .uis-capacity-number .num-yth').text()); //유스
		var chdCnt = parseInt($('.sc-freetour .global-ui-capacity .uis-capacity-number .num-chd').text()); //아동
		var oldCnt = parseInt($('.sc-freetour .global-ui-capacity .uis-capacity-number .num-old').text()); //경로
		//console.log('완료 = ', adtCnt, ythCnt, chdCnt, oldCnt);
		
		//data input
		$currenCapacity.find('[data-adt]').data('adt',adtCnt);
		$currenCapacity.find('[data-yth]').data('yth',ythCnt);
		$currenCapacity.find('[data-chd]').data('chd',chdCnt);
		$currenCapacity.find('[data-old]').data('old',oldCnt);
		
		//sbox input
		$currenCapacity.find('.total-adt-num').text(adtCnt);
		$currenCapacity.find('.total-yth-num').text(ythCnt);
		$currenCapacity.find('.total-chd-num').text(chdCnt);
		$currenCapacity.find('.total-old-num').text(oldCnt);
		
		pvFrontScript.docuMoudownTrigger();
		e.preventDefault();
	});
	
	//테마 완료 click
	$('.sc-freetour .ui-capacity-theme .b-complete a').on('click', function(e){
		var chk = $('.sc-freetour .ui-capacity-theme .uis-capacity-chk-list li');
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
		//console.log('완료 = ', dataArr, listArr.join(', '));
		
		if(listArr.length < 1){
			if($currenCapacity.hasClass('on')){
				$currenCapacity.removeClass('on');
			}
			//data input
			$currenCapacity.find('[data-chk]').data('chk', '');
			//sbox input
			$currenCapacity.find('.txt-list').text('');
		}
		else{
			if(!$currenCapacity.hasClass('on')){
				$currenCapacity.addClass('on')
			}
			//data input
			$currenCapacity.find('[data-chk]').data('chk', dataArr);
			//sbox input
			$currenCapacity.find('.txt-list').text(listArr.join(', '));
		}
		
		
		pvFrontScript.docuMoudownTrigger();
		e.preventDefault();
	});
	
	//select click 팝업
	$('.sc-freetour [data-panel="select"]').on('click', function(e){
		if($(this).closest('.qsb-disabled').length > 0){ return false; } //비활성화 처리
															  
		//select 저장
		$currentSelect = $(this);
		
		//position
		pvFrontScript.panelPosition({
			target: $currentSelect,
			area: 'panel-sel'
		});
		
		e.preventDefault();
	});
		
	//select list click
	$(document).on('click', '.sc-freetour .ui-select-list .uis-list .list li a', function(e){
		var o = $(this).data('option');
		var v = $(this).text();
		
		//select list input
		if(!$currentSelect.hasClass('on')){
			$currentSelect.addClass('on');   
		}
		$currentSelect.find('.qsb-input').text(v);
		
		//교통패스 - 여행지역 유럽 선택시
		if($(this).closest('.o-sel-transpass1').length > 0){
			$('.sc-freetour .o-transpass .qsb-cont-box-inner.on').removeClass('on');
			
			if(o == 'E1'){
				$('.sc-freetour .o-transpass .scbi-2').addClass('on');
			}
			else{
				$('.sc-freetour .o-transpass .scbi-1').addClass('on');
			}
		}
		
		//교통패스 - 패스타입 선택
		if($(this).closest('.o-sel-transpass4').length > 0){
			if(o == 'Type0'){
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(0).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(1).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(2).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(3).find('select').fakeselect('enable');
			}
			else if(o == 'Type1'){
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(0).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(1).find('select').fakeselect('disable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(2).find('select').fakeselect('disable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(3).find('select').fakeselect('disable');
			}
			else if(o == 'Type2'){
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(0).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(1).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(2).find('select').fakeselect('disable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(3).find('select').fakeselect('disable');
			}
			else if(o == 'Type3'){
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(0).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(1).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(2).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(3).find('select').fakeselect('disable');
			}
			else if(o == 'Type4'){
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(0).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(1).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(2).find('select').fakeselect('enable');
				$('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(3).find('select').fakeselect('enable');
			}
			
			//초기화
			if($('.sc-freetour .o-transpass [data-panel-name="select-nation"]').hasClass('on')){
				$('.sc-freetour .o-transpass [data-panel-name="select-nation"]').removeClass('on')
				$('.sc-freetour .o-transpass [data-panel-name="select-nation"] .qsb-input').text('');
				$('.sc-freetour .o-transpass [data-panel-name="select-nation"] .qsb-input').data('n1','');
				$('.sc-freetour .o-transpass [data-panel-name="select-nation"] .qsb-input').data('n2','');
				$('.sc-freetour .o-transpass [data-panel-name="select-nation"] .qsb-input').data('n3','');
				$('.sc-freetour .o-transpass [data-panel-name="select-nation"] .qsb-input').data('n4','');
			}
		}
		
		pvFrontScript.docuMoudownTrigger();
		e.preventDefault();
	});	
	
	//패스타입 국가 완료 click
	$('.sc-freetour .o-transpass .select-nation .b-complete').on('click', function(e){
		var n1 = $('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(0).find('option:selected');
		var n2 = $('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(1).find('option:selected');
		var n3 = $('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(2).find('option:selected');
		var n4 = $('.sc-freetour .o-transpass .select-nation .uis-set-selectbox li').eq(3).find('option:selected');
		var nArr = [];
		//console.log('완료 option = ', n1.val(), n2.val(), n3.val(), n4.val());
		//console.log('완료 txt = ', n1.text(), n2.text(), n3.text(), n4.text());
		
		//data input
		$currenCapacity.find('[data-n1]').data('n1',n1.val());
		$currenCapacity.find('[data-n2]').data('n2',n2.val());
		$currenCapacity.find('[data-n3]').data('n3',n3.val());
		$currenCapacity.find('[data-n4]').data('n4',n4.val());
		
		//sbox input	
		var txt = '';
		if(n1.val() != '' && !n1.closest('select').is(':disabled')){
			nArr.push(n1.text());
		}
		
		if(n2.val() != '' && !n2.closest('select').is(':disabled')){
			nArr.push(n2.text());
		}
		
		if(n3.val() != '' && !n3.closest('select').is(':disabled')){
			nArr.push(n3.text());
		}
		
		if(n4.val() != '' && !n4.closest('select').is(':disabled')){
			nArr.push(n4.text());
		}
		
		for(var i in nArr){
			if(i > 0){
				txt += ', ';
			}
			txt += nArr[i];
		}
		
		if(!$currenCapacity.hasClass('on') && nArr.length > 0){
			$currenCapacity.addClass('on');
		}
			
		$currenCapacity.find('.qsb-input').html('');
		$currenCapacity.find('.qsb-input').html(txt);
		
		pvFrontScript.docuMoudownTrigger();	
		e.preventDefault();
	});
	
	//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 캘린더
	//캘린더 팝업
	$('.sc-freetour [data-panel="calendar"]').on('click', function(e){
		//position
		pvFrontScript.panelPosition({
			target: $(this)
		});
		e.preventDefault();
	});
	
	//캘린더 datepicker - 렌터카
	$('.sc-freetour .o-rentv .uis-datepicker').datepicker({
		minDate: '+2',
		maxDate: '+365',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-freetour .o-rentv .qsb-chkin').data('day'));
			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-freetour .o-rentv .qsb-chkout').data('day'));
			return pvFrontScript.beforeShowDayMark(date, date1, date2);
		},
		onSelect: function(dateText, inst) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-freetour .o-rentv .qsb-chkin').data('day'));
			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-freetour .o-rentv .qsb-chkout').data('day'));
			var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
			var txtDay = pvFrontScript.onSelectTxtDay($(this), dateText);
			
			//대여, 반납 모두 선택인 경우, 아무것도 선택이 없는 경우(대여)
			if (!date1 || date2) {
				//panel input
				$('.sc-freetour .o-rentv .uis-date-chkout').addClass('on'); //반납 노출
				$('.sc-freetour .o-rentv .uis-date-chkin .txt-day').addClass('on');
				$('.sc-freetour .o-rentv .uis-date-chkin .txt-day').html(txtDay);
				$('.sc-freetour .o-rentv .uis-date-chkout .txt-day').removeClass('on');
				$('.sc-freetour .o-rentv .uis-date-chkout .txt-day').html('반납일을 선택해주세요.');				
				$('.sc-freetour .o-rentv .uis-date-chkin .uis-select').addClass('on'); //time
				$('.sc-freetour .o-rentv .uis-date-chkout .uis-select').removeClass('on'); //time
				//sbox input
				$('.sc-freetour .o-rentv .qsb-chkin').data('day',dateText);
				$('.sc-freetour .o-rentv .qsb-chkout').data('day','');
				$('.sc-freetour .o-rentv .qsb-dates .qsb-area').addClass('on');
				$('.sc-freetour .o-rentv .qsb-chkin .day').html(txtDay);	
				$('.sc-freetour .o-rentv .qsb-chkin .time').html(
					$('.sc-freetour .o-rentv .uis-date-chkin .timeh option:selected').val()+':'+
					$('.sc-freetour .o-rentv .uis-date-chkin .timem option:selected').val()
				); //time
				$('.sc-freetour .o-rentv .qsb-chkout .day').html('');
				$('.sc-freetour .o-rentv .qsb-chkout .time').html(''); //time
			} 
			else {
				//대여 보다 이전 날짜 선택
				if( selectedDate.getTime() < date1.getTime() ) {
					//대여 -> 반납 이동
					//panel input
					$('.sc-freetour .o-rentv .uis-date-chkout .txt-day').addClass('on');
					$('.sc-freetour .o-rentv .uis-date-chkout .txt-day').html($('.sc-freetour .o-rentv .uis-date-chkin .txt-day').html());
					$('.sc-freetour .o-rentv .uis-date-chkout .uis-select').addClass('on'); //time
					//sbox input
					$('.sc-freetour .o-rentv .qsb-chkout').data('day',$('.sc-freetour .o-rentv .qsb-chkin').data('day'));
					$('.sc-freetour .o-rentv .qsb-chkout .day').html($('.sc-freetour .o-rentv .qsb-chkin .day').html());	
					$('.sc-freetour .o-rentv .qsb-chkout .time').html(
						$('.sc-freetour .o-rentv .uis-date-chkout .timeh option:selected').val()+':'+
						$('.sc-freetour .o-rentv .uis-date-chkout .timem option:selected').val()
					); //time

					//대여 셋팅
					//panel input
					$('.sc-freetour .o-rentv .uis-date-chkin .txt-day').html(txtDay);
					//sbox input
					$('.sc-freetour .o-rentv .qsb-chkin').data('day',dateText);
					$('.sc-freetour .o-rentv .qsb-chkin .day').html(txtDay);
					$('.sc-freetour .o-rentv .qsb-chkin .time').html(
						$('.sc-freetour .o-rentv .uis-date-chkin .timeh option:selected').val()+':'+
						$('.sc-freetour .o-rentv .uis-date-chkin .timem option:selected').val()
					); //time
				} 
				else {
					//대여이후 선택시(반납)
					//panel input
					$('.sc-freetour .o-rentv .uis-date-chkout .txt-day').addClass('on');
					$('.sc-freetour .o-rentv .uis-date-chkout .txt-day').html(txtDay);
					$('.sc-freetour .o-rentv .uis-date-chkout .uis-select').addClass('on'); //time 
					//sbox input
					$('.sc-freetour .o-rentv .qsb-chkout').data('day',dateText);
					$('.sc-freetour .o-rentv .qsb-chkout .day').html(txtDay);
					$('.sc-freetour .o-rentv .qsb-chkout .time').html(
						$('.sc-freetour .o-rentv .uis-date-chkout .timeh option:selected').val()+':'+
						$('.sc-freetour .o-rentv .uis-date-chkout .timem option:selected').val()
					); //time
				}
			}
		}
	});
	
	//캘린더 렌터카 시간 change
	$(document).on('change', '.sc-freetour .o-rentv .ui-date-calendar select', function(){
		var chkin = $(this).closest('.uis-date-chkin').hasClass('uis-date-chkin');
		var chkout = $(this).closest('.uis-date-chkout').hasClass('uis-date-chkout');
		var timeText = $(this).closest('.uis-select').find('.timeh option:selected').val()+':'+$(this).closest('.uis-select').find('.timem option:selected').val();
		//console.log(chkin, chkout, timeText);	
		if(chkin){
			$('.sc-freetour .o-rentv .qsb-chkin .time').html(timeText);	
		}		
		if(chkout){
			$('.sc-freetour .o-rentv .qsb-chkout .time').html(timeText);	
		}
	});
	
	//캘린더 렌터카 완료 click
	$('.sc-freetour .o-rentv .ui-date-calendar .b-complete a').on('click', function(e){
		pvFrontScript.docuMoudownTrigger();
		e.preventDefault();
	});
	
	//캘린더 datepicker - 공항픽업
	$('.sc-freetour .o-airpicup .uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+365',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		dateFormat: 'yy/mm/dd',
		beforeShowDay: function(date) {
			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.sc-freetour .o-airpicup .qsb-chkin').data('day'));
			return pvFrontScript.beforeShowDayMark(date, date1);
		},
		onSelect: function(dateText, inst) {
			var txtDay = pvFrontScript.onSelectTxtDay($(this), dateText);
			
			//sbox input
			$('.sc-freetour .o-airpicup .qsb-chkin').data('day',dateText);
			$('.sc-freetour .o-airpicup .qsb-dates .qsb-area').addClass('on');
			$('.sc-freetour .o-airpicup .qsb-chkin').html(txtDay);	
			
			pvFrontScript.docuMoudownTrigger();
		}
	});
	
	//event 바인딩
	pvFrontScript.comSearchEvtBind($('.sc-freetour'));	
	
	//최근검색 존재하면 event 셋팅
	pvFrontScript.comSearchRecently($('.sc-freetour'));
}
//..검색 - 투액 관련


//검색, 헤더 초기화
function comSearchInit(){
	//검색 관련
	comSearchEvent();
	
	/*
	comSearchAir();
	comSearchHotel();
	comSearchFree();
	comSearchFreetour();
	*/
	
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

var _showCallback = null;
function _setQuickCallback(fn){

    try{
    
        if( typeof(fn) === 'function' ){
            _showCallback = fn;
        } else {
            _showCallback = null;
        }
        
    } catch(e) {
        if(window.console) console.log("파라미터가 function형태가 아닙니다."); 
    }
}

//퀵검색 로드 콜백
function _applyQuickCallback(){

    if( _showCallback ) _showCallback();
    
    _showCallback = null;
}


//재검색
function showQuick(quickCode, fn){

    _setQuickCallback(fn);
        
    showSearchTap(quickCode);
}
