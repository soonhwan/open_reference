/*
 * 함수명   : minMaxTopBanner
 * 설명     : 리본배너를 확장 또는 축소 할수 있는 버튼 이벤트 콘트롤
 * 실행위치 : 하단 document.ready구문 내
 * 작성자   : 정일영
 */
function minMaxTopBanner(){
	$('#tb-max-btn').on('click',function(){
		$(this).toggleClass('tb-status-min');
		$('#top-banner').toggleClass('tb-status-min');
		$('.tb-promotion-editor, .tb-link-btn, .tb-notice-editor').slideToggle(300);
		this.title = (this.title == '상단배너 확장하기') ? '상단배너 축소하기' : '상단배너 확장하기';
		window.scrollTo(0,0);
	});
}

/*
 * 함수명   : closeTopBanner
 * 설명     : 페이지 로드시 리본배너 show/hide 결정함수 실행 후, 리본배너를 닫거나 '오늘 하루 열지 않기'의 체크여부를 통한 닫기의 프로세스 실행.
 * 실행위치 : 하단 document.ready구문 내
 * 작성자   : 정일영
 */
function closeTopBanner_rb(){
	//페이지 로드될때 팝업 display셋팅
	checkCloseYn_rb();
	
	//팝업 닫기버튼 클릭 시
	$('#tb-hide-btn').on('click',function(){
		chkClose_rb('top-banner');
		var currentHeight = $('#top-banner').height();
		$('#top-banner').css({marginTop:'-'+currentHeight+'px'}).remove();
		window.scrollTo(0,0);
	});
}

/*
 * 함수명   : checkCloseYn
 * 설명     : 리본배너 쿠키값을 읽어 리본배너의 display여부를 결정
 * 실행위치 : 함수 closeTopBanner 구문 내
 * 작성자   : 정일영
 */
function checkCloseYn_rb() {
	var closeRibbonId = "";		
	closeRibbonId = getCookie("top-banner");
	if(closeRibbonId == "Y") {  // 가져온 쿠키값(리본배너id)의 숨김여부가 Y일때
		$("#top-banner").hide();
	} else {
		$("#top-banner").show();
	};
	
}

/*
 * 함수명   : chkClose
 * 설명     : '오늘하루 열지 않기'의 선택시 쿠키 설정
 * 실행위치 : 함수 closeTopBanner 닫기 클릭시 구문 내
 * 작성자   : 정일영
 */
function chkClose_rb(ribbonId) {
	if ($("#hide-one-day:checked").length > 0) {
		setCookie(ribbonId, "Y", 1);
	}
}

//setCookie
var setCookie = function (name, value, expiredays) {
	var today = new Date();
	today.setDate( today.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; expires=" + today.toGMTString() + "; path=/";
};

//getCookie
var getCookie = function (name) {
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);

	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) { return null;}
	} else {
		begin += 2;
	}

	var end = document.cookie.indexOf(";", begin);

	if (end == -1) {
		end = dc.length;
	}

	return unescape(dc.substring(begin + prefix.length, end));
};

/*
 * 함수명   : setBanner
 * 설명     : 해당함수 실행에 앞서 준비구문과 해당함수(setBanner)로 구성
 * params   : 해당함수 파라미터는 jqueryObject, 자동롤링불린, dtime, 정렬방식, 자동롤링시 롤링인터벌시간 으로 구성
 * 실행위치 : document.ready 구문 내
 * 작성자   : 서성우
 */
var ugeragent_this = navigator.userAgent;
ugeragent_this = ugeragent_this.toLowerCase();
var not_chrome = false;
if(-1 < ugeragent_this.indexOf('chrome')){
	not_chrome = true;
}
var window_focus = 'focus';
if(not_chrome == true){
	if ( window.addEventListener ) {
		window.addEventListener('focus', function() {
			window_focus = 'focus';
		},false);
		window.addEventListener('blur', function() {
			window_focus = 'blur';
		},false);	
	}
	// IE 8 이하 버전
	else if ( window.attachEvent ) {
		window.attachEvent('onfocus', function() {
			window_focus = 'focus';
		});
		window.attachEvent('onblur', function() {
			window_focus = 'blur';
		});	
	}
}
function setBanner( obj, autorolling, dtime, align, duration, interval) {
	var w = obj.find('.roll_img > ul > li').width(),
	leng = obj.find('.roll_img > ul > li').length,
	btns = '',
	autoplayclass = '',
	autoplay = autorolling,
	flag = 0,
	interval = parseInt(interval || 4000), //자동롤링 인터벌
	speed = parseInt(duration || 600), //롤링 소요시간
	delay = dtime,
	_timer,
	play_posX = leng * 13 + 20;
	
	var promotiomain = false;
	if(obj.parent("li").parent("ul").hasClass("promo_item")){
		promotiomain = true;
	}
	
	if(leng < 2){
		return;
	}	
	
	var clearRoll = function() {
		if(_timer) {
			clearTimeout(_timer);
			_timer = null;
		}
	};
	var repeatRoll = function(){
		clearRoll();
		_timer = setTimeout(timeoutRoll, interval);
	};
	/*var timeoutRoll = function(){
		//console.log(window_focus);
		if(window_focus == "focus"){
			if(flag == leng - 1){			
				obj.find('.roll_btn').find('em').eq(0).trigger("click");
			}else{
				obj.find('.roll_btn').find('em').eq(flag + 1).trigger("click");
			}
			repeatRoll();
		}else{
			repeatRoll();
			return;
		}
	};*/
	
	var timeoutRoll = function(){
		//console.log(window_focus);
		if(window_focus == "focus"){
			if(flag == leng - 1){			
				for(var x = 0; x < leng; x++){
					obj.find('.roll_img > ul').find("li").eq(x).clone(true).addClass("copied").appendTo(obj.find('.roll_img > ul'));
				}
				obj.find('.roll_btn').find('em').removeClass("on");
				obj.find('.roll_btn').find('em').eq(0).addClass("on");
				obj.find('.roll_img > ul').animate({'margin-left':leng * - w}, speed,function(){
					var count = 0;
					obj.find('.roll_img > ul').find("li").each(function(){
						count = count + 1;
						if(!$(this).hasClass("copied")){
							$(this).remove();
							obj.find('.roll_img > ul').css("margin-left","0");
							flag = 0;
						}
						if(count == leng * 2){
							obj.find('.roll_img > ul').find("li").removeClass("copied");
						}
					});
				});
			}else{
				obj.find('.roll_btn').find('em').eq(flag + 1).trigger("click");
			}
			repeatRoll();
		}else{
			repeatRoll();
			return;
		}
	};
	
	if(autoplay == true){
		_timer = setTimeout(function(){
			timeoutRoll();
		},delay);
	}
	for(var x = 0; x < leng; x++){
		if(x == 0){
			btns += '<em class="on"></em>\n';
		}else{
			btns += '<em></em>\n';
		}
	}
	if(leng > 1){
		if(autoplay == true){
			if(align == "right"){
				obj.prepend($("<span class='btn_move' />").html('일시정지').css("right", play_posX));
			}else{
				obj.prepend($("<span class='btn_move' />").html('일시정지'));
			}
		}else{
			if(align == "right"){
				obj.prepend($("<span class='btn_move btn_play' />").html('재생').css("right", play_posX));
			}else{
				obj.prepend($("<span class='btn_move btn_play' />").html('재생'));
			}
		}
		autoplayclass = " roll_btn_autoplay";
		if((/safari/i).test(navigator.userAgent) == true && (/version/i).test(navigator.userAgent) == true && (/windows/i).test(navigator.userAgent) == true && promotiomain == true){
			obj.prepend($("<span class='roll_btn_safari roll_btn"+ autoplayclass +"' />").html(btns));	
		}else{
			obj.prepend($("<span class='roll_btn"+ autoplayclass +"' />").html(btns));			
		}
	}
	
	
	obj.find('.roll_btn').find('em').click(function(i) {
		flag = $(this).index();
		for (var i = 0; i < eval( obj.find('.roll_btn').children().length ); i++ ) {
			if ( i == $(this).index() ) {
				obj.find('.roll_btn').find('em').eq(i).addClass("on");
			} else {
				obj.find('.roll_btn').find('em').eq(i).removeClass("on");
			}
		}
		if(autoplay == true){
			clearRoll();
		}
		obj.find('.roll_img > ul').animate({
			'margin-left': eval( $(this).index() ) * ( -w )
			}, speed, function() {
			if(autoplay == true){
				repeatRoll();
			}
		});
		return false;
	});	
	
	/*obj.find('.BannerButton').find('em').click(function(){
		flag = $(this).index();
		for (var i = 0; i < eval( obj.find('.BannerButton').find("em").length ); i++ ) {
			if ( i == $(this).index() ) {
				obj.find('.BannerButton').find('em').eq(i).addClass("on");
			} else {
				obj.find('.BannerButton').find('em').eq(i).removeClass("on");
			}
		}
		obj.find('.BannerScreen').animate( { 'margin-left': eval( $(this).index() ) * ( -w ) }, speed, function(){
		});
	});*/
	
	obj.find('.btn_move').click(function(){
		if(autoplay == true){
			autoplay = false;
			$(this).addClass("btn_play").text("재생");
			clearRoll();
		}else{
			autoplay = true;
			$(this).removeClass("btn_play").text("일시정지");
			repeatRoll();
		}
	});
	if(autoplay == true){
		obj.mouseenter(function(){
			if(autoplay == true){
				clearRoll();
			}
		});
		obj.mouseleave(function(){
			if(autoplay == true){
				repeatRoll();
			}
		});
		obj.find("li > a").bind({
			focus: function(){
				idx = $(this).parent("li").index();
				//$("#testFocus").val("포커스됨, 인덱스값은 " + idx);
				//console.log(flag)
				obj.find('.roll_btn').find('em').removeClass("on");
				obj.find('.roll_btn').find('em').eq(idx).addClass("on");
				/*for (var i = 0; i < eval( obj.find('.roll_btn').children().length ); i++ ) {
					if ( i == $(this).parent("li").index() ) {
						obj.find('.roll_btn').find('em').eq(i).addClass("on");
					} else {
						obj.find('.roll_btn').find('em').eq(i).removeClass("on");
					}
				}*/
				//obj.find('.roll_img > ul').css({ 'margin-left': idx * -w });
			},
			blur: function(){
				//$("#testFocus").val("");
				/*if(autoplay == true){
					setTimeout(repeatRoll, 1000);
				}*/
			}
		});
	}
	
	
	
	
	/*
	if(leng > 1){
		obj.prepend($("<span class='roll_btn' />").html(btns));
	}
	obj.find('.roll_btn').find('em').click(function(i) {
		for ( i = 0; i < eval( obj.find('.roll_btn').children().length ); i++ ) {
			if ( i == $(this).index() ) {
				obj.find('.roll_btn').find('em').eq(i).addClass("on");
			} else {
				obj.find('.roll_btn').find('em').eq(i).removeClass("on");
			}
		}
		obj.find('.roll_img > ul').animate( { 'margin-left': eval( $(this).index() ) * ( -w ) }, 600, function() {} );
		return false;
	});	
	*/
}

// 여러개 한번에 롤링되는 타입의 carousel 배너
function setBannerMulti(obj, autorolling, dtime, items, circulation) {
	var w = obj.find('.roll_img > ul > li').outerWidth() * items,
	leng = obj.find('.roll_img > ul > li').length,
	retu = obj.find('.roll_img > ul > li').outerWidth() * leng,
	pages = parseInt(leng / items),
	btns = '',
	autoplayclass = '',
	autoplay = autorolling,
	flag = 0,
	interval = 4000, //자동롤링 인터벌
	speed = 600, //롤링 소요시간
	delay = dtime,
	_timer;
	
	speed = speed * items / 2;

	if(leng % items > 0){
		pages = pages + 1;
	}
	if(leng <= items){
		return;
	}
	
	obj.attr("checkAnimate","false");
	obj.find('.roll_img > ul').width(obj.find('.roll_img > ul > li').outerWidth() * (leng*2) + 100)
	
	var clearRoll = function() {
		if(_timer) {
			clearTimeout(_timer);
			_timer = null;
		}
	};
	var repeatRoll = function(){
		clearRoll();
		_timer = setTimeout(timeoutRoll, interval);
	};

	var _carousel = function(direction){
		if(direction == "left"){
			if(obj.attr("checkAnimate") == "true"){
				return;
			}
			obj.attr("checkAnimate","true");
			for(var x = 0; x < leng; x++){
				obj.find('.roll_img > ul').find("li").eq(x).clone().addClass("copied").appendTo(obj.find('.roll_img > ul'));
			}
			obj.find('.roll_img > ul').css("margin-left", retu * -1);
			obj.find('.roll_btn').find('em').removeClass("on");
			obj.find('.roll_btn').find('em').eq(pages - 1).addClass("on");
			obj.find('.roll_img > ul').animate({'margin-left': - retu + w}, speed, function(){
				var count = 0;
				obj.find('.roll_img > ul').find("li").each(function(){
					count = count + 1;
					if(!$(this).hasClass("copied")){
						$(this).remove();
					}
					if(count == leng * 2){
						obj.find('.roll_img > ul').find("li").removeClass("copied");
					}
				});
				flag = pages - 1;
				obj.attr("checkAnimate","false");
				if(autoplay == true){
					repeatRoll();
				}
			});			
		}else if(direction == "right"){
			if(obj.attr("checkAnimate") == "true"){
					return;
			}		
			obj.attr("checkAnimate","true");
			for(var x = 0; x < leng; x++){
				obj.find('.roll_img > ul').find("li").eq(x).clone().addClass("copied").appendTo(obj.find('.roll_img > ul'));
			}
			obj.find('.roll_btn').find('em').removeClass("on");
			obj.find('.roll_btn').find('em').eq(0).addClass("on");
			obj.find('.roll_img > ul').animate({'margin-left': - retu}, speed,function(){
				var count = 0;
				obj.find('.roll_img > ul').find("li").each(function(){
					count = count + 1;
					if(!$(this).hasClass("copied")){
						$(this).remove();
						flag = 0;
					}
					if(count == leng * 2){
						obj.find('.roll_img > ul').find("li").removeClass("copied");
					}
				});
				obj.find('.roll_img > ul').css("margin-left","0");
				obj.attr("checkAnimate","false");
				if(autoplay == true){
					repeatRoll();
				}
			});
		}
	}

	var timeoutRoll = function(){
		if(window_focus == "focus"){
			if(flag == pages - 1){
				_carousel("right");
			}else{
				obj.find('.roll_btn').find('em').eq(flag + 1).trigger("click");
			}
			repeatRoll();
		}else{
			repeatRoll();
			return;
		}
	};
	
	if(autoplay == true){
		_timer = setTimeout(function(){
			timeoutRoll();
		},delay);
	}
	for(var x = 0; x < pages; x++){
		if(x == 0){
			btns += '<em class="on"></em>\n';
		}else{
			btns += '<em></em>\n';
		}
	}
	
	if(circulation == false){
		obj.append($("<div class='roll_btn_center' />"));
	}else{
		if(autoplay == true){
			obj.append($("<div class='roll_btn_center' />").prepend($("<span class='btn_move' />").html('일시정지')));
		}else{
			obj.append($("<div class='roll_btn_center' />").prepend($("<span class='btn_move btn_play' />").html('재생')));
		}
	}

	obj.find(".roll_btn_center").append($("<span class='roll_btn' />").html(btns));
	if(circulation == false){
		obj.append('<span class="btn_side btn_side_left btn_off" />').append('<span class="btn_side btn_side_right" />');
	}else{
		obj.append('<span class="btn_side btn_side_left" />').append('<span class="btn_side btn_side_right" />');
	}
	
	obj.find('.roll_btn').find('em').click(function(i) {
		if(obj.attr("checkAnimate") == "true"){
			return;
		}
		//console.log(flag)
		obj.attr("checkAnimate","true");
		flag = $(this).index();
		if(autoplay == true){
			clearRoll();
		}
		if(circulation == false){
			if($(this).index() == 0){
				obj.find(".btn_side_left").addClass("btn_off");
			}else{
				obj.find(".btn_side_left").removeClass("btn_off");
			}
			if($(this).index() + 1 == pages){
				obj.find(".btn_side_right").addClass("btn_off");
			}else{
				obj.find(".btn_side_right").removeClass("btn_off");
			}
			
		}
		for (var i = 0; i < eval( obj.find('.roll_btn').children().length ); i++ ) {
			if ( i == $(this).index() ) {
				obj.find('.roll_btn').find('em').eq(i).addClass("on");
			} else {
				obj.find('.roll_btn').find('em').eq(i).removeClass("on");
			}
		}
		//console.log($(this).index())
		obj.find('.roll_img > ul').animate({ 'margin-left': eval( $(this).index() ) * ( -w ) }, speed, function() {
			obj.attr("checkAnimate","false");
			if(autoplay == true){
				repeatRoll();
			}
		});
		return false;
	});
	obj.find('.btn_side').click(function(){
		if(autoplay == true){
			clearRoll();
		}
		if($(this).hasClass("btn_side_left")){
			if(circulation == false){
				obj.find('.roll_btn').find('em').eq(flag - 1).trigger("click");
			}else{
				if(flag == 0){
					_carousel("left");
				}else{
					obj.find('.roll_btn').find('em').eq(flag - 1).trigger("click");
				}
			}
		}else if($(this).hasClass("btn_side_right")){
			if(circulation == false){
				obj.find('.roll_btn').find('em').eq(flag + 1).trigger("click");
			}else{
				if(flag == pages - 1){
					_carousel("right");
				}else{
					obj.find('.roll_btn').find('em').eq(flag + 1).trigger("click");
				}
			}
		}
	});
	
	obj.find('.btn_move').click(function(){
		if(autoplay == true){
			autoplay = false;
			$(this).addClass("btn_play").text("재생");
			clearRoll();
		}else{
			autoplay = true;
			$(this).removeClass("btn_play").text("일시정지");
			repeatRoll();
		}
	});
	if(autoplay == true){
		obj.mouseenter(function(){
			if(autoplay == true){
				clearRoll();
			}
		});
		obj.mouseleave(function(){
			if(autoplay == true){
				repeatRoll();
			}
		});
		obj.find("li > a").bind({
			focus: function(){
				idx = $(this).parent("li").index();

				obj.find('.roll_btn').find('em').removeClass("on");
				obj.find('.roll_btn').find('em').eq(idx).addClass("on");

			},
			blur: function(){

			}
		});
	}

}

/*
 * 함수명   : transFormIE7DisplayTable
 * 설명     : // ie7은 display:table미지원인 관계로 table td로 치환 (IE7에서만 동작됨)
 * 실행위치 : document.ready구문 내
 * 작성자   : 정일영
 */
function transFormIE7DisplayTable(){
	//console.log($.browser.msie)
	//console.log($.browser.version)
	if($.browser.msie && $.browser.version == '7.0'){
		
		//리본배너 
		$('.tb-group>ul>li').each(function(){
			$(this).replaceWith('<td class="'+this.className+' tfdt-td">'+$(this).html()+'</td>');
		});
		$('.tb-group>ul').each(function(){
			$(this).replaceWith('<table class="tfdt-table">'+$(this).html()+'</table>');
		});

		//상시프로모션
		$('.rp-list>li').each(function(){
			$(this).replaceWith('<td class="'+this.className+' tfdt-td">'+$(this).html()+'</td>');
		});
		$('.rp-list').each(function(){
			$(this).replaceWith('<table class="'+this.className+' tfdt-table">'+$(this).html()+'</table>');
		});
		
		//혜택/상담/공지사항
		$('.bn-group').each(function(){
			$(this).replaceWith('<td id="'+this.id+'" class="'+this.className+' tfdt-td">'+$(this).html()+'</td>');
		});
		$('#benefit-notice').each(function(){
			$(this).replaceWith('<table id="'+this.id+'" class="tfdt-table">'+$(this).html()+'</table>');
		});
	}
}

/*
 * 함수명   : injectionNavMenu
 * 설명     : GNB 및 전체보기의 하위메뉴를 DOM에 삽입
 * 실행위치 : initGNB함수 구문내
 * 작성자   : 서성우,정일영
 */
function injectionNavMenu(){
	//gnb sub메뉴 삽입
	var code = new Array();
	$('#gnb-nav > li').each(function(i){
		code[i] = $(this).attr('id').split('-')[2]; //gnb-item-{key}
	});
	var totalNav = '';
	for(key in navData){
		totalNav += '<li class="'+key+'" >';
		totalNav += '<h3><a href="'+navData[key].link+'">'+navData[key].title+'</a></h3>';
		if(navData[key].subNav.length > 0){
			totalNav += '<ul>';
			for(i=0;i<navData[key].subNav.length;i++){
				totalNav += '<li><a href="'+navData[key].subNav[i].link+'">'+navData[key].subNav[i].title+'</a></li>';
			}
			totalNav += '</ul>';
		}
		totalNav += '</li>';
		
		for(i=0;i<code.length;i++){			
			if(key == code[i]){
				if(navData[key].subNav.length > 0 && navData[key].subNavDisplayToGNB == true){
					var subnav = '<ul class="gnb-sub">';
					for(j=0;j<navData[key].subNav.length;j++){
						subnav += '<li><a href="'+navData[key].subNav[j].link+'">'+navData[key].subNav[j].title+'</a></li>';
					}
					subnav += '</ul>';
					
				}
				$('#gnb-item-'+key).append(subnav);
				subnav = '';
			}
		}
	}

	$('.total-nav-list').append(totalNav);

}

/*
 * 함수명   : gnbContent
 * 설명     : GNB 및 전체보기의 사용자 동작에 관한이벤트를 바인딩
 * 실행위치 : initGNB함수 구문내
 * 작성자   : 서성우,정일영
 */
function eventBindNavMenu(){	
	var isOpenType = $('#header-new').hasClass('gnb-open');
	if(isOpenType) $('#gnb-nav > li > a.on').siblings('.gnb-sub').show();
	//전체메뉴
	$('.btn-total-nav').on({
		'click' : function(e){
			e.preventDefault();
			if($('#quickSearch-holder').is(':visible')){
				$('.btn-quickSearch').trigger('click')
			} 
			if($('.l-total-nav-layer').is(':visible')){
				$('.l-total-nav-layer').hide();
				$('.l-total-nav-open.on').removeClass('on');
			}
			var $this = $('.btn-total-nav');
			var layer = $('.total-nav-layer');
			if(layer.is(':hidden')){
				$this.addClass('on');
				$('.total-nav-layer').show()
			}
			else{
				$('.total-nav-layer').hide();
				$(this).removeClass('on')
			};
			$('#gnb-nav > li.ov').removeClass('ov');
			$('.gnb-sub-wrap').hide();
			
		},
		'mouseenter' : function(){
			$(this).addClass('ov');
		},
		'mouseleave' : function(){
			$(this).removeClass('ov');
		}
	});

	//GNB
	var menu_over,menu_leave,submenu_leave;
	var allLen = $('#gnb-nav > li').length;
	$('#gnb-nav > li > a').on('mouseenter focusin',function(){
		var _this = this;
		if(submenu_leave) clearTimeout(submenu_leave);
		if(menu_leave) clearTimeout(menu_leave);
		if(menu_over) clearTimeout(menu_over);
		menu_over = setTimeout(function(){
			$(_this).parent().siblings('li.ov').removeClass('ov').end().addClass('ov');		
			if($(_this).parent().children('.gnb-sub').length || (isOpenType && !$(_this).parent().hasClass('on'))) $('.gnb-sub-wrap').show();
			else $('.gnb-sub-wrap').hide();
			if($('.total-nav-layer').is(':visible')){
				$('.total-nav-layer').hide();
				$('.btn-total-nav').removeClass('on');
			}
			if($('.btn-quickSearch').hasClass('on')){
				$('.btn-quickSearch').trigger('click');
				$('#ui-datepicker-div').hide();
			}
			
			if($('.l-total-nav-open').hasClass('on')){
				$('.l-total-nav-open').removeClass('on');
				$('.l-total-nav-layer').hide();
				$('.l-total-nav-open').css('z-index','0')
			}
		},200);
		
	});
	$('#gnb-nav').on('mouseleave',function(){
		var _this = this;
		if(menu_over) clearTimeout(menu_over)
		menu_leave = setTimeout(function(){
			
			$('>li.ov',_this).removeClass('ov')
			$('.gnb-sub-wrap').hide();
		},200);
	});
	$('.gnb-sub').on('mouseenter',function(){
		var _this = this;
		if(menu_over) clearTimeout(menu_over);
		if(menu_leave) clearTimeout(menu_leave);
		if(submenu_leave) clearTimeout(submenu_leave);
	});
	$('.gnb-sub').on('mouseleave',function(){
		var _this = this;
		submenu_leave = setTimeout(function(){
			$(_this).parent().removeClass('ov');
			$('.gnb-sub-wrap').hide();
		},200);
	});
	$('#gnb-nav > li').eq(allLen-1).children('a').on('focusout',function(){
		$(this).parent().removeClass('ov')
	});
	
}

/*
 * 함수명   : initGNB
 * 설명     : 로드시 gnb 및 전체보기의 하위메뉴를 DOM에 삽입후 사용자 동작에 관한이벤트를 바인딩
 * 실행위치 : document.ready구문내
 * 작성자   : 정일영
 */
function initGNB(){
	injectionNavMenu();
	eventBindNavMenu();
}



/*
 * 함수명   : lazyLoad
 * 설명     : 서브프로모션(중배너,카드형배너), 쿠폰 프로모션의 이미지가 화면(뷰포트)에 등장하기 전 200px전에 로드시작
 * 실행위치 : document.ready 구문 내
 * 작성자   : 정일영
 */
function lazyLoad(){
	$('#sub-promotion-scrolling img.js-lazy-load').lazyload({skip_invisible : true});
	$('#sub-promotion-card img.js-lazy-load').lazyload({skip_invisible : true});
	$('#coupon-promotion img.js-lazy-load').lazyload({skip_invisible : true});
}

/* 
 * 퀵서치내  공휴일 처리를 위한 data
 */
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
	"20180216":{title:"설날",year:"2018"},
	"20180217":{title:"설연휴",year:"2018"},
	"20180501":{title:"근로자의날",year:"2018"},
	"20180507":{title:"대체휴가",year:"2018"},
	"20180522":{title:"석가탄신일",year:"2018"},
	"20180215":{title:"설연휴",year:"2018"},
	"20180925":{title:"추석연휴",year:"2018"},
	"20180923":{title:"추석연휴",year:"2018"},
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
/* 
 * 퀵서치내 데이트피커 일부 옵션 초기화(공휴일 처리 및 달력 2개 기본 스타일 처리)
 */
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
 * 함수명 : placeHolder
 * 설명 : 검색 등 input text 필드의 기본 value값으로 html5의 플레이스홀더 기능처럼 처리
 * 사용법 : 사용하고자 하는 폼의 아이디 값으로 호출
 * 사용예 : $("#menuSearch").placeHolder();
 * 사용법 : $("#menuSearch").placeHolder({'focusclass':'focus'}); //포커스시 해당 input 클래스 변경 필요할 경우
 */

$.fn.placeHolder = function(options){
	return this.each(function(){
		var $this = $(this),
			place = $this.val();
		if(!$this.hasClass('holder')) {
			return;
		}
		$this.css('color','#777');
		var settings = $.extend({
		      'focusclass' : ''
		    },options);
		$this.bind("focus", function(){
			if($(this).hasClass('holder') == false) {
				return;
			}
			if($this.val().replace(/\s*$/,'') == place){
				$this.val("").addClass(settings.focusclass);
				$(this).css('color','black');
			}
		});		
		$this.bind("blur", function(){
			if($this.val().replace(/\s*$/,'') == ""){
				$this.val(place).removeClass(settings.focusclass);
				$(this).css('color','#777');
			}
		});
	});
};
var inputText = $("input.text[type='text']");
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
 * 함수명 : initMytravel
 * 설명 : My travel 열고닫기 토글
 */

var initMytravel = function(){
	var initMytravel = $("#myTravel"),
		button = initMytravel.find(".btn_fold"),
		closeHeight = 0,
		openHeight = 112,
		speed = 300;
	button.click(function(){
		var $this = $(this);
		if($this.hasClass('closed')){
			//initMytravel.css("overflow","visible").find(".my_list").animate({height:openHeight},speed,function(){
			initMytravel.find(".my_list").animate({height:openHeight},speed,function(){
				button.removeClass("closed").text('닫기(my travel)');
				button.attr('title', '닫기(my travel)');
				setMyTravelCookie("Y");
			});
		}else{
			initMytravel.find(".my_list").animate({height:closeHeight},speed,function(){
				button.addClass("closed").text('열기(my travel)');
				button.attr('title', '열기(my travel)');
				//initMytravel.css("overflow","hidden");
				setMyTravelCookie("N");
			});
		}
		
		return false;
	});
	
	//쿠키값 확인하여 My Travel 기본 Open 상태설정
	//if (getMyTravelShowCookie() == null || getMyTravelShowCookie() == "Y") {
	if (getMyTravelShowCookie() == "Y") {
		setMyTravelCookie("Y");
		button.trigger("click");
	} else {
		
	}
};

var makeGuide = {
	write : function(seq){
		//2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
		$("#header").prepend($('<div class="load_guide"/>').html('<a href="https://www.priviatravel.com/guide/guideComplete?seq='+seq+'"><img src="'+ configCommonUrl4img +'/images/front/travel/guide/load_guide.gif" alt="가이드북 생성 중입니다"></a>'));
	},
	remove : function(){
		$("#header").find("div.load_guide").remove();
	}
};

//MY TRAVEL DISPLAY 상태 쿠키
var getMyTravelShowCookie = function () {
	var dc = document.cookie;
	var prefix = "MYTRAVELDISPLAY=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) { return null;}
	} else {begin += 2;}
	var end = document.cookie.indexOf(";", begin);
	if (end == -1) {end = dc.length;}
	return unescape(dc.substring(begin + prefix.length, end));
};
var setMyTravelCookie = function (value) {
	document.cookie = "MYTRAVELDISPLAY=" + escape( value ) + "; path=/; domain=.priviatravel.com;";
};


var getGuideStatus = function () {
	// 가이드북 생성 확인
	//2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
	$.getJSON(httpsDomain + "/pdf/hasMakePdf?callback=?", "" , function (result) {
		if (result.hasMakePdf == "S") {
			makeGuide.write(result.pdfFile);
		} else if (result.hasMakePdf == "Y"){
			clearInterval(guideInterval);
			if(confirm("PDF 생성이 완료되었습니다.\n가이드북 페이지로 이동 하시겠습니까?")) {
				top.location.href = travelDomain + "/guide/guideComplete?seq=" + result.pdfFile;
			} else {
				makeGuide.remove();
			}
		} else {
			makeGuide.remove();
		}
	}); 
};

/*
 * 함수명 : repositionThisPop
 * 설명 : 레이어팝업 내 높이 변경될 경우 호출하여 포지션 재조정
 * 사용법 : repositionThisPop('아이디');
 */
var repositionThisPop = function(id){

	var winheight = $(window).height(),
		winwidth = $(window).width(),
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
 */
var frameLayer = false;
var focusableElems ="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var dimmLayerPop = function(id,opt,$elem){
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
		if($("body").hasClass("special_exp")){
			$("body").addClass("special_exp_hidden");
			if ($.browser.msie && parseInt($.browser.version, 10) < 8 && $("body").find(".modal_window:visible").length == 0) {
				$("#header").css("z-index","");
				$("#footer").css("z-index","");
			}
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
			if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
				$("#header").css("z-index","-1");
				$("#footer").css("z-index","-1");
			}
		}
		if($('.layout-center').size() > 0){
			$('.layout-center').addClass('zindex-none');
		}
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
		 
		if($this.selector == "#layerPopPicksView"){
			//div하위요소 초기화
			$("#divTitleImgHtml").empty();
			$("#divRating").empty();
			$("#divInfo").empty();
			$("#divContent").empty();
			
			var resevArea = $("#reservArea");
			//룸타입별가격 영역 닫기
			resevArea.stop().find("#infoArea.info_room").slideUp("fast",function(){
				resevArea.addClass("booking_closed");
			});
			//예약대행신청 영역 닫기
			resevArea.stop().find("#infoArea.booking").slideUp("fast",function(){
				//예약대행신청 초기화
				$("#rservHopeDd").val("");
				$("#mkusPnumAdl").val("1");
				$("#mkusPnumBaby").val("0");
				$("#plaCtadd").val("");
				$("#etcQstSbjt").val("");
				$("#mkusTm2:first").attr("selected", "selected");
				resevArea.addClass("booking_closed");
			});
			
			//공유링크로 들어온 경우 url setting
			var subUrl = (location.href).substr((location.href).indexOf('&'),(location.href).indexOf('&'));
			if(subUrl == '' || subUrl == "&viewType=0" || subUrl == "&viewType=1"){
			}else {
				location.href = (location.href).substr(0,(location.href).indexOf('&'))+ "&viewType="+flagViewStyle;
			}
		}else if($this.selector == "#layerPopGuideBook"){
			$("#guideBookPopSts").val("");
			location.href = (location.href).substr(0,(location.href).lastIndexOf('&'));
		}
		closeThisPop();
		return false;
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
 * 함수명 : initSectionLnb
 * 설명 : 퀵검색내 자유여행 상품 날개배너
 */
var initSectionLnb = function(){
	
	var sectionLnb = $("#sectionLnb"),
	depth1Lnb = $("#sectionLnb").find("> ul");
	/* #2667 */
	/* #4412 제주도 삭제 */	
//	var goJeju = '<a href="http://hotel.priviatravel.com/htl/bk/HtlSearchPromo.lts?phc_pmh_id=P0614HTL1181&template_divn=A" target="_blank"><span>제주도</span></a>'; 
//	$("#sectionLnb").find(">ul").append($('<li/>').html(goJeju))
	
	
	depth1Lnb.find("> li > a").bind({
		mouseover : function(){
			sectionLnb.find("a.active").removeClass("active");
			$(this).toggleClass("active");
			depth1Lnb.find("ul").hide();
			$(this).parent("li").find("ul").show();
			if($.browser.msie && parseInt($.browser.version, 10) < 8){
				depth1Lnb.find("li").css("z-index","1");
				$(this).parent("li").css("z-index","2");
			}
			//Cufon.refresh();
			return false;
		},
		focus : function(){
			sectionLnb.find("a.active").removeClass("active");
			$(this).toggleClass("active");
			depth1Lnb.find("ul").hide();
			$(this).parent("li").find("ul").show();
			if($.browser.msie && parseInt($.browser.version, 10) < 8){
				depth1Lnb.find("li").css("z-index","1");
				$(this).parent("li").css("z-index","2");
			}
			return false;
		}
	});
	depth1Lnb.bind({
		mouseleave : function(){
			sectionLnb.find("a.active").removeClass("active");
			depth1Lnb.find("ul").hide();
			//Cufon.refresh();
			return false;
		}
	});
	/*
	depth1Lnb.find("> li > a").bind("focus hover", function(){
		sectionLnb.find("a.active").removeClass("active");
		$(this).toggleClass("active");
		depth1Lnb.find("ul").hide();
		$(this).parent("li").find("ul").show();
		return false;
	});
	$(document).mousedown(function(e){
	    if (sectionLnb.has(e.target).length === 0){
	    	sectionLnb.find("a.active").removeClass("active");
			depth1Lnb.find("ul").hide();
	    }
	});
	*/
	
	/* 범인이 누군지 알수가 없음 
	$("#sectionLnb").find(">ul>li>ul>li").each(function () {
		var objThis = $(this);
		var firstChild = objThis.find(">ul>li:first>a");
		if (firstChild.length > 0) {	// 2Depth 메뉴일경우 3Depth 첫번째 href로 셋팅
			objThis.find(">a").prop("href", firstChild.prop("href"));
		}
	});
	*/
	$("#sectionLnb").find(">ul>li").each(function (no, val) {
		var objThis = $(this);
		objThis.addClass("li" + (no + 1));
        /*
        var firstChild = objThis.find(">ul>li:first>a");
        if (firstChild.length > 0) {    // 1Depth 메뉴일경우 2Depth 첫번째 href로 셋팅
                objThis.find(">a").prop("href", firstChild.prop("href"));
        }
        */
	});
	
	$(document).find(":focusable").focus(function(e){
	    if (sectionLnb.has(e.target).length === 0){
	    	sectionLnb.find("a.active").removeClass("active");
			depth1Lnb.find("ul").hide();
	    }
	});
};


function ribbonTrigger(){
	$('#tb-promotion .tb-tit, #tb-notice .tb-tit').on('click',function(e){
		e.preventDefault();
		$('#tb-max-btn').trigger('click');
	})
}

function mainRollCtrl(){
	$('.main-promotion-area .roll-banner').each(function(){
		var $this = $(this);
		var $item = $this.find('.viewport a');
		var $ctrlWrap = $this.find('.indicator');
		var ctrlHtml = '';
		if($item.size() <= 1){
			$this.find('.playPauseBtnContainer').hide();
			return false;
		}
		else{
			$item.each(function(){
				ctrlHtml += '<span class="buttonContainer"><button type="button" class="button"><span>'+$(this).find('img').attr('alt')+'보기</span></button></span>';
			})
		}
		$ctrlWrap.html(ctrlHtml);
	})
}

function autoCompleteEmpty(){
	$('.ui-autocomplete-empty').each(function(){
		var autoCompleteInput = $(this).closest('.item').find('[name="rent_text"],[name="return_text"]');
		if(autoCompleteInput.size() > 0){
			var autoPos = autoCompleteInput.position();
			$(this).css({top:autoPos.top+autoCompleteInput.outerHeight()-1,left:autoPos.left});
		}
	})
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
 * 함수명 : formHasValueBg
 * 설명   : input.text 또는 .textarea가 value가 있는 채로 focusout되었을 시 사선으로 된 백그라운드를 해지하는 함수(가독성 확보).
 * REFS   : /html_dprs/search/rent_reserve_step2.html
 * 작성자 : 정일영
 */
function formHasValueBg(){
	$('input.text,.textarea').each(function(){
		if($(this).val()){
			if($(this).hasClass('holder')){
				return		
			}else{
				$(this).addClass('has-value');
			}
		}
	}); 
	$(document).on('focusout','input.text,.textarea',function(){		
		if($(this).val() != ''){
			if($(this).hasClass('input-pw')){
				$(this).prop('type','password');
			}
			$(this).addClass('has-value');
		} else {
			if($(this).hasClass('input-pw')){
				$(this).prop('type','text');
			}
			$(this).removeClass('has-value');
		}
	});		
	$(document).on('focusin','input.input-pw',function(){
		$(this).prop('type','password');
		if($(this).val()){
			if($(this).hasClass('holder')){
				return		
			}else{
				$(this).val('');			
				$(this).addClass('has-value');
			}
		}
	});
}

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
 * 함수명 : showTab
 * 설명 : 탭 클릭 시 해당 콘텐츠 block 처리 
 * 사용법 : 탭 각각에 넣어줄 링크 - <a href="javascript:showTab('pickTab','tabArea','1');"></a>
 			  첫번째값 탭을 감싸는 id, 두번째값 불러올 콘텐츠 영역 id의 영문명, 세번째값 두번째값불러올 콘텐츠 영역 id의 숫자
 */
var showTab = function(tabName,contId,num){
	var last = $("#"+tabName+">li").length;  //tab 개수
	if($("#"+tabName+">li>a>img").size() > 0){
		for(var i=1; i<=last;i++){
			if (i == num){
				var order = num-1;
				var $eqImg = $("#"+tabName+">li").eq(order).find("img");
				$eqImg.attr("src",$eqImg.attr("src").replace("_off","_on"));
				$("#"+contId+num).css("display","block") /* 포커싱 주석처리 .attr("tabindex","0").focus().css("outline","0").removeAttr("tabindex"); //활성화된 탭으로 포커스 이동, div등은 포커스 가능한 엘리먼트가 아니므로 tabindex=0으로 포커스가 가능하게 하고 포커스 직흐 탭인덱스 속성 제거
				$("#"+contId+num).find(":focusable:last").bind("keydown",function(e){
					 if(e.keyCode == 9 && !e.shiftKey && num != last){
						 $("#"+tabName).find(">li").eq(num-1).find("a").focus();
			         }
				 });
				*/
			} else {
				var order2 = i-1;
				var $tabImg = $("#"+tabName+">li").eq(order2).find("img");
				$("#"+contId+i).css("display","none");
				$tabImg.attr("src",$tabImg.attr("src").replace("_on","_off"));
			}
		}
	}
	else{
		for(var i=1; i<=last;i++){
			if (i == num){
				$("#"+tabName).find(">li").eq(i-1).find("a").addClass('on');
				$("#"+contId+num).css("display","block") /* 포커싱 주석처리 .attr("tabindex","0").focus().css("outline","0").removeAttr("tabindex");  
				$("#"+contId+num).find(":focusable:last").bind("keydown",function(e){
					 if(e.keyCode == 9 && !e.shiftKey && num != last){
						 $("#"+tabName).find(">li").eq(num-1).find("a").focus();
			         }
				 });
				*/
			}
			else{
				$("#"+tabName).find(">li").eq(i-1).find("a").removeClass('on');
				$("#"+contId+i).css("display","none");
			}
		}
	}
};

/*
 * document ready시 실행함수모음
 */
$(function(){
	formHasValueBg()
	if(iosCheck() == false){$("html").addClass("no_ios_device");}  // ios check	
	minMaxTopBanner();                                             // 리본배너 확장/축소
	closeTopBanner_rb();                                              // 리본배너 닫기(1일간열지않음 쿠키처리)
	initGNB();                                                     // GNB 및 전체보기의 이벤트 핸들링
	//lazyLoad();                                                    // 서브 프로모션(중배너,카드형배너), 쿠폰 프로모션의 이미지가 화면(뷰포트)에 등장하기 전 200px전에 로드시작
	transFormIE7DisplayTable();                                    // IE7용으로서, display:table을 사용한 엘리먼트를 table td로 치환하여 보정
	inputText.placeHolder();
	initMytravel();                                                //마이트레블 영역 init
	lowIEVersion();												   //ie 버전체크
	ribbonTrigger();											   //리본팝업 타이틀 자세히보기
	mainRollCtrl();                                                //메인 프로모션 배너 컨트롤러 생성
	//seoTitle();                                                    //seo 정적페이지 title, description삽입
	
	//setBanner($('#main-promotion'), true, '2000', "right");        // 메인 프로모션 롤링
	//setBanner($('#sub-promotion-rolling'), true, '4000', 'right', '6000'); // 서브 프로모션(중배너) 롤링
	//setBanner($('#sub-promotion-rolling2'), true, '7000', 'right','6000'); // 서브 프로모션(쿠폰 전시 관리) 롤링
});

