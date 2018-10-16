/*
 * 함수명   : lazyLoad
 * 설명     : 서브프로모션(중배너,카드형배너), 쿠폰 프로모션의 이미지가 화면(뷰포트)에 등장하기 전 200px전에 로드시작
 * 실행위치 : document.ready 구문 내
 * 작성자   : 정일영
 */
/*function lazyLoad(){
	$('#sub-promotion-scrolling img.js-lazy-load').lazyload({skip_invisible : true});
	$('#sub-promotion-card img.js-lazy-load').lazyload({skip_invisible : true});
	$('#coupon-promotion img.js-lazy-load').lazyload({skip_invisible : true});
}*/

// 데이터 추가 시 유의점 : 중복되는 날짜 key 값이 존재할 경우 year에 || 처리한다.
// ex) 2016년 9월 14일이 공휴일(추석연휴)이고 2019년 9월 14일도 공휴일(추석연휴)일 경우
//     "0914":{title:"추석연휴",year:"2016 || 2019"},
var holidays = {
	"0606":{title:"현충일",year:""},
	"0505":{title:"어린이날",year:""},
	"0301":{title:"3.1절",year:""},
	"0101":{title:"신정",year:""},
	"0815":{title:"광복절",year:""},
	"1003":{title:"개천절",year:""},
	"1225":{title:"크리스마스",year:""},
	"1009":{title:"한글날",year:""},
	"20140130":{title:"설연휴",year:"2014"},
	"20140131":{title:"설날",year:"2014"},
	"20140201":{title:"설연휴",year:"2014"},
	"20140506":{title:"석가탄신일",year:"2014"},
	"20140907":{title:"추석연휴",year:"2014"},
	"20140908":{title:"추석",year:"2014"},
	"20140909":{title:"추석연휴",year:"2014"},
	"20150219":{title:"설날",year:"2015"},
	"20150218":{title:"설연휴",year:"2015"},
	"20150928":{title:"추석연휴",year:"2015"},
	"20150927":{title:"추석",year:"2015"},
	"20150926":{title:"추석연휴",year:"2015"},
	"20150525":{title:"석가탄신일",year:"2015"},
	"20150220":{title:"설연휴",year:"2015"},
	"20160915":{title:"추석",year:"2016"},
	"20160914":{title:"추석연휴",year:"2016"},
	"20160916":{title:"추석연휴",year:"2016"},
	"20160514":{title:"석가탄신일",year:"2016"},
	"20160210":{title:"설연휴",year:"2016"},
	"20160209":{title:"설날",year:"2016"},
	"20160208":{title:"설연휴",year:"2016"},
	"20160413":{title:"제 20대 국회의원선거일",year:"2016"},
	"20170128":{title:"설날",year:"2017"},
	"20171005":{title:"추석연휴",year:"2017"},
	"20170129":{title:"설연휴",year:"2017"},
	"20170127":{title:"설연휴",year:"2017"},
    "20170501":{title:"근로자의날",year:"2017"},
	"20170503":{title:"석가탄신일",year:"2017"},
    "20170509":{title:"19대 대통령 선거",year:"2017"},
	"20171002":{title:"임시공휴일",year:"2017"},
	"20171003":{title:"추석연휴",year:"2017"},
	"20171004":{title:"추석",year:"2017"},
	"20171006":{title:"대체휴일",year:"2017"},
	"20180924":{title:"추석",year:"2018"},
	"20180215":{title:"설연휴",year:"2018"},
	"20180216":{title:"설날",year:"2018"},
	"20180217":{title:"설연휴",year:"2018"},
	"20180501":{title:"근로자의날",year:"2018"},
	"20180507":{title:"대체휴가",year:"2018"},
	"20180522":{title:"석가탄신일",year:"2018"},
	"20180613":{title:"지방선거",year:"2018"},
	"20180925":{title:"추석연휴",year:"2018"},
	"20180923":{title:"추석연휴",year:"2018"},
    "20180926":{title:"대체휴일",year:"2018"},
	"20190205":{title:"설날",year:"2019"},
	"20190512":{title:"석가탄신일",year:"2019"},
	"20190204":{title:"설연휴",year:"2019"},
	"20190912":{title:"추석연휴",year:"2019"},
	"20190913":{title:"추석",year:"2019"},
	"20190914":{title:"추석연휴",year:"2019"},
	"20190206":{title:"설연휴",year:"2019"},
	"20200430":{title:"석가탄신일",year:"2020"},
	"20200125":{title:"설날",year:"2020"},
	"20200124":{title:"설연휴",year:"2020"},
	"20200126":{title:"설연휴",year:"2020"},
	"20201002":{title:"추석연휴",year:"2020"},
	"20201001":{title:"추석",year:"2020"},
	"20200930":{title:"추석연휴",year:"2020"}
};
/* 데이트피커 일부 옵션 초기화(공휴일 처리 및 달력 2개 기본 스타일 처리 */
$.datepicker.regional['ko'] = {
	prevText: '이전달',
	nextText: '다음달',
	currentText: '오늘',
	numberOfMonths: 2,
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
	beforeShow: function(input, inst){
        if(checkMobile()){
			var calendar = inst.dpDiv;
			setTimeout(function() {
				calendar.position({
					my: 'left top',
					at: 'left bottom',
					collision: 'none',
					of: input
				});
			}, 1);
		}
    }
};
$.datepicker.setDefaults($.datepicker.regional['ko']);

/*
 * 함수명 : iosCheck
 * 설명 : ios 여부만을 체크, ios일 경우 true 반환
 */
var iosCheck = function(){
	var iosDetect = false;
	var uaCheck = navigator.userAgent.toLowerCase();
	var iosDevice = new Array('iphone','ipod','ipad');
	for(var i=0;i<iosDevice.length;i++){
		if(uaCheck.indexOf(iosDevice[i]) != -1){
			iosDetect = true;
		}
	}
	return iosDetect;
};

/*
 * 함수명 : repositionThisPop
 * 설명 : 레이어팝업 내 높이 변경될 경우 호출하여 포지션 재조정
 * 사용법 : repositionThisPop('아이디');
 */
var repositionThisPop = function(id){

	var winheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
		winwidth = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
		posy = "50%",
		posx = "50%",
		$this =$("#" + id),
		mgt = $this.height() / 2 * -1,
		mgl = $this.width() / 2 * -1,
		adjML = $('#'+id).hasClass('for-C2-LPU') ? -12 : 0,
		docheight = $(document).height();
	if(winheight < $this.height() + 100){
		posy = 50; //레이어 팝업 높이보다 창 높이가 작을 경우 레이어 팝업과 문서의 위아래 간격
		mgt = 0;
		$this.prev(".dimm").height(posy + (posy + 100) + $this.height());
	/* 레이어수정
	if(winheight <= $this.height()){
		posy = 50; //레이어 팝업 높이보다 창 높이가 작을 경우 레이어 팝업과 문서의 위아래 간격
		mgt = 0;
		$this.prev(".dimm").height(winheight);	
	*/	
		
	}else{
		$this.prev(".dimm").height(winheight);	
	}
	if(frameLayer){
		posy = 50;
		mgt = 0;
	}
	
	if($this.prev(".dimm").attr("call-one") != "true"){
		$this.css({top : posy, left : posx, marginTop : mgt, marginLeft  : mgl+adjML, visibility : "visible"});
		$this.prev(".dimm").attr("call-one","true");
	}else{
		$this.css({top : posy, marginTop : mgt});
	}
	if(winwidth > $this.width()){
		$this.parent(".modal_window").addClass("modal_window_ie7");
	}else{
		$this.parent(".modal_window").removeClass("modal_window_ie7");
	}
};

/*
 * 함수명 : dimmLayerPop
 * 설명 : 레이어팝업을 띄우고 dimm 처리. 레이어팝업의 사이즈 고려해서 스크롤링
 * 사용법 : dimmLayerPop('레이어팝업 아이디') 혹은 dimmLayerPop('레이어팝업 아이디',1,$(this)) 닫기 버튼 외에 닫기 처리시 dimmLayerPop('레이어팝업 아이디',0)으로 호출
 * 2013.05.15 수정 : 접근성 향상을 위해 esc 닫기 기능 추가. 탭,shift + 탭 키 브라우징시 레이어팝업 내 키보드 포커스 순환 처리
 * boll_dimmClose : true로 설정시 dimm 처리된 검정배경을 클릭해도 닫히지 않음
 */
var frameLayer = false;
var focusableElems ="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var dimmLayerPop = function(id,opt,$elem,bool_dimmClose){
	var timerDimm = id + "timerDimm";
	var $this =$("#" + id),
		closebtn = $this.find(".btn_close");
	
	//ESC키 바인드
	var bindEscKey = function(obj,evt) {
		if (evt.which == 27){
			//closeThisPop();
			$this.prev(".dimm").trigger('click');
			evt.preventDefault();
		}
	};
	//tab, shift+tab 바인드
	var bindTabKey = function(obj,evt) {
		if ( evt.which == 9 ) {
			var o = obj.find('*');
			var focusableItems;
			focusableItems = o.filter(focusableElems).filter(':visible');
			var focusedItem;
			focusedItem = jQuery(':focus');
			var numberOfFocusableItems;
			numberOfFocusableItems = focusableItems.length;
			var focusedItemIndex;
			focusedItemIndex = focusableItems.index(focusedItem);	
			if (evt.shiftKey) {
				if(focusedItemIndex==0){
					focusableItems.get(numberOfFocusableItems-1).focus();
					evt.preventDefault();
				}
			} else {
				if(focusedItemIndex==numberOfFocusableItems-1){
					focusableItems.get(0).focus();
					evt.preventDefault();				
				}
			}
		}
	};

	var closeThisPop = function (){
		$this.attr("tabindex","-1").hide(0,function(){
			$this.css({visibility : "visible", position : "relative"});
		}).unwrap().prev(".dimm").remove();
		if($("body").find(".modal_window:visible").length == 0){
			$("body, html").removeClass("no_scroll");
		}
		try{
			$elem.focus();
		}catch(e){
		
		}
		/* 레이어수정 
		$('.layer_pop .content',parent.document).css('overflow','auto')
		*/
		
		if($("body").hasClass("special_exp")){
			$("body").addClass("special_exp_hidden");
		}
		if ($.browser.msie && parseInt($.browser.version, 10) < 8 && $("body").find(".modal_window:visible").length == 0) {
			$("#header, #header-new").css("z-index","");
			$("#footer, #footer-new").css("z-index","");
		}
		if($('.layout-center').size() > 0){
			if(!$('body').hasClass('no_scroll')){
				$('.layout-center').removeClass('zindex-none');
			}
		}
		clearInterval(timerDimm);
	};
	
	var openThisPop = function (){
		if($("body").find(".modal_window:visible").length == 0){
			$("body, html").addClass("no_scroll");
		}
		if($("body").hasClass("special_exp")){
			$("body").removeClass("special_exp_hidden");
		}
		if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
			$("#header, #header-new").css("z-index","-1");
			$("#footer, #footer-new").css("z-index","-1");
		}
		if($('.layout-center').size() > 0){
			$('.layout-center').addClass('zindex-none');
		}
		/*레이어수정
		var winheight = $(window).height();
		var $thish = $($this).height();
		var preDimm = $('.modal_window',parent.document).size();
		
		if(preDimm > 0){
			$('.layer_pop .content',parent.document).css('overflow','hidden')
		}
		if($thish >= winheight){
			if($('#'+id+',parent.document').find('iframe').size() < 1){
				$this.find('.content').css({height:winheight-150,overflow:'auto'})
				$('.layer_pop .content',parent.document).find('iframe').css('height','100%')
			}
			else{
				$this.find('.content').css({height:winheight-300,overflow:'auto'})	
			}
		}
		*/
		$this.css({visibility : "hidden", position : "absolute"}).attr("tabindex","0").show(0,function(){
				$this.wrap('<div class="modal_window"/>').before('<div class="dimm"/>');
				$this.prev(".dimm").attr("call-one","");
				repositionThisPop(id);
		}).focus();
		
		
		$this.children().one('load', function() {
			repositionThisPop(id);
		}).each(function() {
		  if(this.complete) $(this).load();
		});

		timerDimm = setInterval(function(){
			if($("#" + id).is(":visible")){
				repositionThisPop(id);
				//console.log(id + "리포지션 호출")
			}else{
				clearInterval(timerDimm);
				//console.log(id + "리포지션 클리어 : 인터벌 안쪽")
			}
			//console.log(id);
		},400); 
	};
	if(opt == 0){
		frameLayer = false;
		closeThisPop();
	}
	else if(opt == "top"){
		frameLayer = true; //레이어를 top으로 띄움
		openThisPop();
	}
	else{
		openThisPop();
	}
	
	closebtn.click(function(){
		//closeThisPop();
		$this.prev(".dimm").trigger('click');
		return false;
	});
	$this.prev(".dimm").click(function(){
		if(!bool_dimmClose){
			closeThisPop();
			return false;
		}
	});
	$(window).resize(function(){
		repositionThisPop(id);
	});
	
	if(checkMobile == false){
		//esc키 바인드
		$this.keydown(function(event){
			bindEscKey($(this),event);
		});
		//tab키 바인드
		$this.keydown(function(event){
			bindTabKey($(this),event);
		});
	}
};

/*
 * 함수명 : checkMobile
 * 작성자 : 이영재
 * 설명 : ios, 안드로이드 등 모바일 디바이스일 경우 true를 반환
 * 사용법 : if(checkMobile() == true) 등 모바일 체크 필요할 경우 사용
 */
var checkMobile = function(){
	var isMobile = false;
	var ua = navigator.userAgent.toLowerCase();
	var mobileDevice = new Array('iphone','ipod','ipad','android','blackberry','windows ce','nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
	for(var i=0;i<mobileDevice.length;i++){
		if(ua.indexOf(mobileDevice[i]) != -1){
			isMobile = true;
		}
	}
	return isMobile;
};

/* ie 하위버전 대응을 위해 html에 class 삽입하기 */
function lowIEVersion() {    
	 var rv = -1; 
	 var rv2 = -1; 
	 if (navigator.appName == 'Microsoft Internet Explorer') {        
		  var ua = navigator.userAgent;        
		  var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");        
		  if (re.exec(ua) != null){          
			  rv = parseFloat(RegExp.$1);   
		 	  if(rv == 7){
				var trident = navigator.userAgent.match(/Trident\/(\d)/i);
				var re2 = new RegExp("([0-9]{1,}[\.0-9]{0,})");        
				if (re2.exec(trident) != null){          
			  		rv2 = parseFloat(RegExp.$1)
					if(rv2 == 4){rv = 8}
					else if(rv2 == 5){rv = 9}
					else{}
			  	}
			  }
		 	  $('html').addClass('ie'+rv);
		 }  
	}
} 

/*
 * 함수명 : seoTitle
 * 설명   : PRIVIA 여행 정적페이지에 SEO 관련 title 과 description 삽입
 * 사용처 : PRIVIA 여행 정적페이지
 * 작성자 : 서성우
 */
/*
function seoTitle(){
	//실서버 반영 시 static으로 json 변경
	$.getJSON("//static.priviatravel.com/js/front/travel/seoData.json",function(){
	}).done(function(seoData){
		for(var i=0;i<seoData.headData.length;i++){
			if(seoData.headData[i].url == "priviaMain"){
				$('title').html(seoData.headData[i].title);
				if($('meta[name=description]').size() > 0){
					$('meta[name=description]').attr('content',seoData.headData[i].description)
				}
				else{
					$('title').after('<meta name="description" lang="ko" content="'+seoData.headData[i].description+'">');
				}
				break;
			}
		}
	})
}
*/

/*
 * 함수명 : preLoader
 * 설명 : 화면 전체 혹은 특정 영역에 프리로더 애니메이션 이미지 + dimm 처리
 * 사용법 : preLoader.load('#preLoader1', 0, '/images/front/travel/search/loading_air.png', '항공 검색결과 로딩중');
 */
var preLoaderTarget = '';
var preLoader = {
	//load : function('타겟', 투명도(1이면 불투명, 0이면 반투명), '로딩중 이미지 url', '로딩중 이미지에 대한 대체 텍스트'){
	load : function(target, opacity, imgsrc, txt, event_img, class2){
		var ext = 'gif',
		width = "100%",
		height = "100%",
		pos = 'absolute',
		alt = '',
		cls = '',
		cls2 = 'event';
		preLoaderTarget = target;
		if(txt == undefined){
			alt = '로딩 중...';
		}else{
			alt = txt;
		}
		if(class2){
			cls2 = class2;
		}
		if(opacity != 1){
			ext = 'png';
			if($.browser.msie && parseInt($.browser.version, 10) < 9){
				cls = " loading_box_png";
			}else{
				cls = " loading_box_color";
			}
		}
		var markup = '';
		markup += '	<div class="loding_cont">';
		markup += '		<img src="/images/front/travel/search/img_loading.gif" width="50" height="50" alt=""><img class="logo" width="154" height="51" src="/images/front/travel/search/loading_logo.'+ ext +'" alt="현대카드 PRIVIA 여행">';
		if(imgsrc == ''){
			markup += '		<p class="txt">'+ alt +'</p>';
		}else{
			markup += '		<p class="txt"><img src="'+ imgsrc +'" alt="'+ alt +'"></p>';
		}
		if(event_img){
			markup += '		<p class="'+ cls2 +'"><img src="'+ event_img +'" alt="이벤트 안내"></p>';
		}
		markup += '	</div>';
		markup += '	<span class="va"></span>';
		if(target != "body"){
			$(target).css("position","relative");
			height = $(target).outerHeight();
			if(parseInt($(target).css("border-top-width")) > 0){
				height = height - (parseInt($(target).css("border-top-width")));
			}
			if(parseInt($(target).css("border-bottom-width")) > 0){
				height = height - (parseInt($(target).css("border-bottom-width")));
			}
		}else{
			pos = 'fixed';
			if($.browser.msie && parseInt($.browser.version, 10) < 7){
				pos = 'absolute';
			}
			$("body, html").addClass("no_scroll");
		}
		$(target).append($('<div class="loading_box'+cls+'"/>'	).html(markup).height(height).width(width).css("z-index","10000").css("position", pos));
		if(typeof(Cufon) == "function"){
			Cufon.replace('.loding_cont .txt',{fontFamily:'ymhb'});
		}
		//$("div.loading_box").on("click",function(){
		//	preLoader.remove();
		//});
	},
	remove : function(target){
		//console.log($("body").find(".modal_window:visible").length);
		//console.log(target);
		if(target == undefined){
			$("body").find('.loading_box').remove();
		}else{
			$(target).find('.loading_box').remove();
		}
		if(target != "body"){
			$(target).css("position","inherit");
		}
		if($("body").find(".modal_window:visible").length == 0){	
			$("body, html").removeClass("no_scroll");
		}
		//preLoaderTarget = '';
	}
};

/*
 * document ready시 실행함수모음
 */
$(function(){
	if(iosCheck() == false){$("html").addClass("no_ios_device");}  // ios check	
	if(checkMobile() == true){ 										//모바일 check
		$("html").addClass("is_mobile");
        //기획전 iframe
		if($('#ifrmEventContent').length > 0){
			$('.is_mobile #content').css({'left':'auto','margin-left':'auto'});
		}
        //검색결과, 오른쪽 스카이배너
		if($('.commonHeaderObject.o-search-result').length > 0){
			$('.is_mobile body').css({'min-width':'1645px'});
		}
	}
	lowIEVersion();												   //ie 버전체크
	
	// 메인 레이어팝업 위치 수정
    var mainnotipop;
    if($('.pu_notice').length > 0){
        mainnotipop = $('.pu_notice').detach();
        $('body').append('<div id="pu-notice-origin" style="width:1200px;position:absolute;top:0;left:50%;margin-left:-600px"></div>');
        $('#pu-notice-origin').html(mainnotipop);
    }
    
    if($('.lp-area').length > 0){
		$('.lp-area').on('click', '.btn', function(e){
			e.preventDefault();
			$('.lp-area .lp-cont').css('z-index', 1);
			$(this).parent().find('.lp-cont').css('z-index', 2);
			$(this).parent().find('.lp-cont').show();
		});
		$('.lp-cont').on('click', '.btn-close', function(e){
			e.preventDefault();
			$(this).parent().css('z-index', 1);
			$(this).parent().hide();
			if($(this).parent().hasClass('room-tbl-session')) $('.room-tbl-dimm').hide();
		});
	}

	var htpPage = $('.commonHeaderObject.o-search-result').length>0;
	if(htpPage){
		$('.w-header-gnb .b-open-search').hide();
		$('.htp-top-sec .ly-inner a').on('click', function(e){
			e.preventDefault();
			$('.w-header-gnb .b-open-search button').trigger('click');
		});
		var $htpListSection = $('.htp-list-sec');
		var htpListPage = $htpListSection.length>0;
		var htpDetailPage = $('.htp-detail-sec').length>0;
		var $htpList = $htpListSection.find('.htp-res-list');

		var scTop;
		var isTopFix = false;
		var $htpTop = $('.htp-top-sec');
		var htpTopPos = $htpTop.offset().top;

		if(htpListPage){
			var _height = $htpTop.outerHeight();
			var $htpClose = $htpTop.find('.btn-close');
		}
		if(htpListPage || htpDetailPage){
			$('.hss-search-close').on('click', function(e){
				e.preventDefault();
				$('.w-header-gnb .b-open-search button').trigger('click');
			});
		}

		if(htpListPage){
			var $gmapWrap = $('.gmap-wrapper');
			var $setAccom = $('.sch-set-accomm');
			var $setAccomInner = $setAccom.find('.sch-set-inner');
			var $setAccomToggle = $setAccom.find('.sch-set-toggle');
			var $htpResInner = $('.htp-res-inner');
			var $accomPanel = $('.sch-set-accomm .filter-list dd');
			var $activePanel;
			var isFilterFix = false;
			$setAccomInner.mCustomScrollbar({theme:"minimal-dark"});
			$htpResInner.mCustomScrollbar({theme:"minimal-dark"});
			$('.gmap-view').on('click', function(e){
				e.preventDefault();
				setTimeout(function(){
					$('body').addClass('gmap-fix-mode');
					$htpTop.addClass('gmap-fix');
					$setAccomInner.css('height', $(window).height()-60);
					$htpResInner.css('height', $(window).height()-60);
				}, 1000);
				$gmapWrap.addClass('on');
			});
			$(window).on('resize', function(){
				if($('body').hasClass('gmap-fix-mode')){
					$setAccomInner.css('height', $(window).height()-60);
					$htpResInner.css('height', $(window).height()-60);
				}
			});
			$setAccomToggle.on('click', function(e){
				e.preventDefault();
				$setAccomToggle.toggleClass('on');
				$setAccom.toggleClass('on');
			});
			$htpClose.on('click', function(e){
				e.preventDefault();
				$('body').removeClass('gmap-fix-mode');
				$htpTop.removeClass('gmap-fix');
				$gmapWrap.addClass('change');
				$setAccomInner.css('height', 'inherit');
				$htpResInner.css('height', 'inherit');
				$setAccomToggle.removeClass('on');
				$setAccom.removeClass('on');
				setTimeout(function(){
					$gmapWrap.removeClass('on change');
				}, 1000);
			});
			$setAccom.find('.btn-toggle-arrow').on('click', function(e){
				e.preventDefault();
				$activePanel = $(this).closest('dt').next();
				if(!$(this).hasClass('on')){
					$(this).addClass('on');
					$activePanel.stop().slideUp(300);
				}else{
					$(this).removeClass('on');
					$activePanel.slideDown(300);
				}
			});
			$accomPanel.each(function(){
				if(!$(this).hasClass('hotel-grade')) $(this).find('li:nth-child(5) ~ li').hide();
			});
			$accomPanel.find('a.more').on('click', function(e){
				e.preventDefault();
				if($(this).text() == "+ 자세히 보기"){
					$(this).text("- 간단히 보기");
					$(this).prev().children('li:nth-child(5) ~ li').stop().fadeIn(300);
				}else{
					$(this).text("+ 자세히 보기");
					$(this).prev().children('li:nth-child(5) ~ li').hide();
				}
			});
			$setAccom.find('.btn-deselect').on('click', function(e){
				e.preventDefault();
				$activePanel = $(this).closest('dt').next();
				$activePanel.find('input').prop('checked', false);
				$activePanel.find('.label-base').removeClass('on');
			});
		}

		if(htpDetailPage){
			var htpVisSlick = $('.htp-vis').slick({
				//autoplay: true,
	      //autoplaySpeed: 3000,
				arrows: false,
				draggable: false,
			  slidesToShow: 4,
			  slidesToScroll: 1,
				variableWidth: true,
				initialSlide: -1
			});
			var $htpVisPrev = $('.htp-vis-btn.prev');
			var $htpVisNext = $('.htp-vis-btn.next');
			$htpVisPrev.on('click', function(e){
	      e.preventDefault();
	      htpVisSlick.slick('slickPrev');
	    });
	    $htpVisNext.on('click', function(e){
	      e.preventDefault();
	      htpVisSlick.slick('slickNext');
	    });
			var $htpVis = $('.htp-vis-sec');
			var $htpTab = $('.htp-detail-tab');
			var $htpPanel = $('.htp-detail-panel');
			var $htpCont = $('.htp-detail-cont');
			var $htpLi = $htpTab.find('li');
			var $htpLine = $htpTab.find('.tab-line');
			var htpTabPos = $htpTab.offset().top;
			var htpTabNum = $htpLi.length;
			var htpPanelPos = $htpPanel.offset().top;
			var htpContPos = function(i){
				return $htpCont.eq(i).offset().top;
			}
			var isTabInit = true, isTabFix = false;
			var _index, _left, _top;
			var _speed = 500;
			var _height = $htpTop.outerHeight() + $htpTab.outerHeight();
			var isActive = 0;
			var direction = null;
			var lastTop = 0;
		}

		$(window).on('load scroll', function(e){
			scTop = $(window).scrollTop();
			if(htpDetailPage) direction = (scTop > lastTop && scTop > _height) ? "down" : "up";
			if(htpTopPos < scTop && !isTopFix){
				$htpTop.addClass('fix');
				if(htpListPage) $htpListSection.addClass('on');
				if(htpDetailPage) $htpVis.addClass('on');
				isTopFix = true;
			}
			if(htpTopPos > scTop && isTopFix){
				$htpTop.removeClass('fix');
				if(htpListPage) $htpListSection.removeClass('on');
				if(htpDetailPage) $htpVis.removeClass('on');
				isTopFix = false;
			}
			if(htpDetailPage){
				if((htpTabPos-$htpTop.outerHeight()) < scTop && !isTabFix){
					$htpTab.addClass('fix');
					$htpPanel.addClass('on');
					isTabFix = true;
				}
				if((htpTabPos-$htpTop.outerHeight()) > scTop && isTabFix){
					$htpTab.removeClass('fix');
					$htpPanel.removeClass('on');
					isTabFix = false;
				}

				// 호텔 상세 탭
				if((htpContPos(0)-_height) > scTop){
					if(isTabInit){
						isActive = 0;
						isTabInit = false;
					}
					if(isActive == 0){
						$htpLi.removeClass('on');
						$htpLine.removeClass('on');
					}
					if(direction == "down") isActive = 1;
				}
				for(var i=0; i<htpTabNum-1; i++){
					if((htpContPos(i)-_height) <= scTop && (htpContPos(i+1)-_height) > scTop){
						if(isTabInit){
							isActive = i+1;
							isTabInit = false;
						}
						if(isActive == (i+1)){
							if(!$htpLine.hasClass('on')) $htpLine.addClass('on');
							$htpLi.removeClass('on');
							$htpLi.eq(i).addClass('on');
							$htpLine.stop(true).animate({'left': $htpLi.eq(i).position().left}, _speed);
						}
						isActive = (direction == "down") ? (i+2) : i;
					}
				}
				if((htpContPos(htpTabNum-1)-_height) <= scTop){
					if(isTabInit){
						isActive = htpTabNum;
						isTabInit = false;
					}
					if(isActive == htpTabNum){
						if(!$htpLine.hasClass('on')) $htpLine.addClass('on');
						$htpLi.removeClass('on');
						$htpLi.eq(htpTabNum-1).addClass('on');
						$htpLine.stop(true).animate({'left': $htpLi.eq(htpTabNum-1).position().left}, _speed);
					}
					if(direction == "up") isActive = htpTabNum-1;
				}
				lastTop = scTop;
			}
		});

		$('.htp-sinfo .btn-close').on('click', function(e){
			e.preventDefault();
			$(this).closest('.htp-sinfo').hide();
		});

		if(htpDetailPage){
			$htpLi.on('click', function(e){
				e.preventDefault();
				_index = $htpLi.index(this);
				_top = htpContPos(_index)-_height + 20;
				$('html, body').stop().animate({'scrollTop': _top}, _speed);
			});
			var relatedPro = $('.related-product .list-item-st1').slick({
	      dots: false,
	      infinite: false,
	      arrows:false,
	      variableWidth: true,
	      slidesToShow: 4,
	      slidesToScroll: 4,
	    });
	    var $relPrev = $('.related-product .bb-prev');
	    var $relNext = $('.related-product .bb-next');
	    $relPrev.on('click', function(e){
	      e.preventDefault();
	      relatedPro.slick('slickPrev');
	    });
	    $relNext.on('click', function(e){
	      e.preventDefault();
	      relatedPro.slick('slickNext');
	    });
			$('.tbl-list.faq').on('click', '.faq-before', function(){
				if(!$(this).hasClass('on')){
					$(this).siblings('.faq-before').removeClass('on');
					$(this).addClass('on');
					$(this).next('.faq-after').siblings('.faq-after').find('td').hide();
					$(this).next('.faq-after').find('td').show();
				}else{
					$(this).removeClass('on');
					$(this).next('.faq-after').find('td').hide();
				}
			});
		}
	}
});

/*
 * 함수명 : skyScraper
 * 설명   : content 우측 플로팅 메뉴
 * 작성자 : 권순환
 */
(function($){
	$.fn.skyScraper = function(options){
		var defaults = $.extend({
			fmTop :140,
			fmLeft :10,
			fmFixTop :140,
			contWid :1260,
			fmStop : $('#footer-sec')
		},options);

		return this.each(function(){
			var sc,winGap,winWid,innerleft,innerTop,fixedLeft;
			var $this = $(this);
			var inner = $this.find('.layout-right');
			var fmTop = defaults.fmTop;
			var fmLeft = defaults.fmLeft;
			var fmFixTop = defaults.fmFixTop;
			var fmStop = defaults.fmStop;
			var contWid = defaults.contWid;

			if(defaults.fmStop.length <= 0){ fmStop = null; }
			$this.css({'top':fmTop+'px','maring-right':-(innerleft+$this.width())+'px'});
			innerleft = contWid/2 + fmLeft;

			function fmPos(ml, t){
				inner.css({'margin-left':ml,'top':t});
			}

			function pos(){
				innerTop = $this.offset().top - fmFixTop;
				sc = $(window).scrollTop();
				if(innerTop < sc){
					if(fmStop != null){fmStop = defaults.fmStop.offset().top - defaults.fmStop.outerHeight(true) - inner.height()+240;}
					if(fmStop < sc && fmStop != null){
						$this.removeClass('fixed');
						var t = fmStop-$this.offset().top+fmFixTop;
						fmPos('',t+'px');
					}
					else{
						$this.addClass('fixed');
						if($('.is_mobile').length > 0){
							fixedLeft = innerleft;
						}
						else{
							winWid = $(window).width();
							if(winWid < contWid){
								winGap = contWid - winWid;
							} else {
								winGap = $('body').width() - winWid;
							}
							fixedLeft = innerleft - $(window).scrollLeft() + (winGap/2);
						}
						fmPos(fixedLeft+'px',fmFixTop+'px');
						//console.log('winWid =', winWid, 'contWid =', contWid, 'winGap =', winGap, 'scrollLeft =', $(window).scrollLeft(), 'fixedLeft =',fixedLeft);
					}
				}
				else {
					$this.removeClass('fixed');
					fmPos('','');
				}
			}

			//스크롤
			$(window).bind('scroll resize',pos);
		});
	}
})(jQuery);