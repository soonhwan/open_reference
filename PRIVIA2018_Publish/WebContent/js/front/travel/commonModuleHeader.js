//navData
var navData = {}
//QUICK_CODE
var QUICK_CODE_AIR = "AIR";
var QUICK_CODE_HOTEL = "HOTEL";
var QUICK_CODE_FREE = "FREE";
var QUICK_CODE_DPRS = "DPRS";
//GNB_CODE
var GNB_CODE_AIR = "AIR";
var GNB_CODE_HOTEL = "HOTEL";
var GNB_CODE_FREE = "FREE";
var GNB_CODE_DPRS = "DPRS";
var GNB_CODE_PACKAGE = "PACKAGE";
var GNB_CODE_DOMESTIC = "DOMESTIC";
var GNB_CODE_PROMOTION = "PROMOTION";
//CODE int
var QUICK_CODE = null;
var GNB_CODE = null;

function _scSearchInt(quickCode){
	var _quickCode = quickCode ? quickCode : QUICK_CODE;
	
	$('#header-sec').attr('class','');
	
	switch (_quickCode) {
		case QUICK_CODE_AIR:
			$('#header-sec').addClass('o-bg-air');
			break;
		case QUICK_CODE_HOTEL:
			$('#header-sec').addClass('o-bg-hotel');
			break;
		case QUICK_CODE_FREE:
			$('#header-sec').addClass('o-bg-free');
			break;
		case QUICK_CODE_DPRS_ITEM:
			$('#header-sec').addClass('o-bg-freetour');
			break;
		default :
			$('#header-sec').attr('class','o-bg-base');
	}
}

function comSearchEvent(){
	
}

function comSearchInit(){
	//검색섹션 메인 click event
	$('.hs-search-menu .hss-menu [data-main]').on('click', function(e){
		var code = $(this).data('main');
		console.log(code);
		//$('.hs-search-menu .hss-menu.on').hasClass('on').removeClass('on');
		
		e.preventDefault();
	});	
	
	if (QUICK_CODE == null || QUICK_CODE == "") {
		QUICK_CODE = '';
	}	
	_scSearchInt(QUICK_CODE);
}

function comHeaderInit(){
	
}