/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 * https://github.com/mathiasbynens/jquery-placeholder
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(this);if(d.value===f.attr(h?"placeholder-x":"placeholder")&&f.hasClass(n.customClass))if(d.value="",f.removeClass(n.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(this),i=f.id;if(!d||"blur"!==d.type||!g.hasClass(n.customClass))if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(j){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":i}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var k=g.data("placeholder-password");k&&(k[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(n.customClass),g[0].value=g.attr(h?"placeholder-x":"placeholder")}else g.removeClass(n.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h=!1,i="[object OperaMini]"===Object.prototype.toString.call(window.operamini),j="placeholder"in document.createElement("input")&&!i&&!h,k="placeholder"in document.createElement("textarea")&&!i&&!h,l=a.valHooks,m=a.propHooks,n={};j&&k?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return n=a.extend({},e,b),this.filter((j?"textarea":":input")+"["+(h?"placeholder-x":"placeholder")+"]").not("."+n.customClass).not(":radio, :checkbox, [type=hidden]").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=j,g.textarea=k,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(n.customClass)?"":b.value},set:function(b,f){var g,h,i=a(b);return""!==f&&(g=i.data("placeholder-textinput"),h=i.data("placeholder-password"),g?(c.call(g[0],!0,f)||(b.value=f),g[0].value=f):h&&(c.call(b,!0,f)||(h[0].value=f),b.value=f)),i.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):(i.hasClass(n.customClass)&&c.call(b),b.value=f),i):(b.value=f,i)}},j||(l.input=f,m.value=f),k||(l.textarea=f,m.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+n.customClass,this).each(function(){c.call(this,!0,"")});setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){var b=!0;try{"javascript:void(0)"===document.activeElement.toString()&&(b=!1)}catch(c){}b&&a("."+n.customClass).each(function(){this.value=""})}))});

/*
 * 함수명 : $.setCookie(), $.getCookie()
 * 설명   : jQuery cookie 메서드(priviaMainUI.js 사용하는 버전을 제이쿼리에 등록)
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
(function ($, window, document, undefined) {
	$.setCookie = function (name, value, expiredays) {
		var today = new Date();
		today.setDate( today.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; expires=" + today.toGMTString() + "; path=/";
	};
	$.getCookie = function (name) {
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
}(window.jQuery, window, document));

/*
 * 함수명 : utilSlickCrt
 * 설명   : slick autoplay 컨트롤해주는 함수
 * 사용처 : slick event 'init' 내부
 * 작성자 : 권순환
 */
function utilSlickCrt(btn, slick){
	btn.click(function(){
		if(btn.hasClass('on')){
			slick.slickPause();
			btn.removeClass('on');
			btn.find('.txt').text('자동재생 버튼');
		}
		else{
			slick.slickPlay();
			btn.addClass('on');
			btn.find('.txt').text('일시정지 버튼');
		}
	});
}

/*
 * 함수명 : onHeaderPromRoll
 * 설명   : 헤더 기획전 롤링 실행
 * 사용처 : commonModuleHeader 내부
 * 작성자 : 권순환
 */
function onHeaderPromRoll(){
	//기획전 롤링
	$('.w-header-search .hs-prom-roll, .header-sec .hs-prom-roll-bg').addClass('on');
	$('.hs-prom-roll .list').on('init', function(event, slick){
		utilSlickCrt($('.w-header-search .hs-prom-roll .b-slick-crt'), slick); //autoplay control
	}).slick({
		draggable: false,
		arrows:false,
		pauseOnHover: true,
		dots: true,
		appendDots: $('.w-header-search .hs-prom-roll .c-slick-dots'),
		asNavFor: $('.hs-prom-roll-bg .list'),
		autoplay: true,
		autoplaySpeed: 5000
	});	

	//기획전 배경 롤링
	$('.hs-prom-roll-bg .list').slick({
		draggable: false,
		arrows:false,
		fade: true
	});	
}

/*
 * 함수명 : CHOScrollEvent
 * 설명   : 공통 헤더 스크롤 이벤트
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
function CHOScrollEvent(){
	var $CHO, scTop, isFix = false, scUTarget;
	$CHO = $('.commonHeaderObject');
	
	//fixed 모드에서 스크롤시 초기화
	function isFixed(){
		//리본영역
		if($('.header-sec-fixed #top-area-sec .top-area-sec').css('display') == 'block'){
			$('.header-sec-fixed #top-area-sec .top-area-sec .tasp-list').removeClass('on');
			$('.header-sec-fixed #top-area-sec .top-area-sec .tasp-detail').slideUp('fast'); 
			$('.header-sec-fixed #top-area-sec .top-area-sec').slideUp('fast');
		}

		//검색영역
		if($('.header-sec-fixed #header-sec .w-header-search').css('display') == 'block'){
			$('.header-sec-fixed #header-sec .w-header-search').slideUp('fast');
		}
	}
	
	function pos(){
		scTop = $(window).scrollTop();	
		
		//퀵버전
		if($('.commonHeaderObject').hasClass('o-CHO-quick')){
			isFixed();
		}
		else{
			scUTarget = $CHO.offset().top + $CHO.height();
			
			//fixed 모드
			if(scUTarget < scTop && isFix == false){
				//fixed, height 설정
				$('.commonHeaderObject').height($('.commonHeaderObject').height());
				$('.commonHeaderObject .o-CHO-inner').addClass('header-sec-fixed');
				$('.commonHeaderObject .o-CHO-inner').hide();
				$('.commonHeaderObject .o-CHO-inner').fadeIn();
				
				//리본영역
				$('.header-sec-fixed #top-area-sec .top-area-sec').hide();
				$('.header-sec-fixed #top-area-sec .top-area-sec .tasp-list').removeClass('on');

				//검색영역
				$('.header-sec-fixed #header-sec .w-header-search').hide();

				isFix = true;
			}

			//relative 모드
			if(scUTarget > scTop && isFix == true){
				//fixed, height 제거
				$('.commonHeaderObject').height('auto');
				$('.commonHeaderObject .o-CHO-inner').removeClass('header-sec-fixed');

				//리본
				$('#top-area-sec .top-area-sec .tasp-list').removeClass('on');
				$('#top-area-sec .top-area-sec .tasp-detail').hide(); 
				if($('#top-area-sec .top-area-sec').hasClass('on')){
					$('#top-area-sec .top-area-sec').show();
				}
				
				//검색
				$('#header-sec .w-header-search').show();

				isFix = false;
			}

			//fixed 모드가 아니고 스크롤시 초기화
			if(!isFix){
				//리본
				if($('#top-area-sec .top-area-sec .tasp-list').hasClass('on')){
					$('#top-area-sec .top-area-sec .tasp-list').removeClass('on');
					$('#top-area-sec .top-area-sec .tasp-detail').slideUp('fast');
				}
			}

			//fixed 모드에서 스크롤시 최기화
			if(isFix){
				isFixed();
			}		
		}
		
	}
	
	$(window).on('scroll load', pos);
}

/*
 * 함수명 : comHeaderControl
 * 설명   : 공통 헤더 컨트롤(상단리본, 공지사항, 스크롤 헤더반응형, 검색UI)
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
function comHeaderControl(){
	if($('.commonHeaderObject').length > 0){
		//리본 프로모션 닫기
		$('.w-header-util .hu-control .b-crt.bc-close a').on('click', function(e){
			//안쪽 부터 탐색
			if($('#top-area-sec .top-area-sec .tasp-list').hasClass('on')){
				$('#top-area-sec .top-area-sec .tasp-list').removeClass('on');
				$('#top-area-sec .top-area-sec .tasp-detail').slideUp('fast');
			}
			else{
				if($('#top-area-sec .top-area-sec').hasClass('on')){
					$('#top-area-sec .top-area-sec').slideUp('fast', function(){
						//fixed 모드에서는 클래스를 컨트롤 하지 않음
						if(!$('.header-sec-fixed').length > 0){
							$('#top-area-sec .top-area-sec').removeClass('on')
						}
					});
				}
			}
			e.preventDefault();
		});
		
		//리본 프로모션 열기
		$('.w-header-util .hu-control .b-crt.bc-open a').on('click', function(e){
			//맨위에서부터 탐색
			if($('#top-area-sec .top-area-sec').css('display') == 'none'){
				$('#top-area-sec .top-area-sec').slideDown('fast', function(){
					//fixed 모드에서는 클래스를 컨트롤 하지 않음
					if(!$('.header-sec-fixed').length > 0){
						$('#top-area-sec .top-area-sec').addClass('on')
					}
				});
			}
			else{
				if(!$('#top-area-sec .top-area-sec .tasp-list').hasClass('on')){
				   $('#top-area-sec .top-area-sec .tasp-detail').slideDown('fast', function(){
						$('#top-area-sec .top-area-sec .tasp-list').addClass('on');
					});
				}
			}
			e.preventDefault();
		});
		
		//리본 프로모션 열기(타이틀 클릭)
		$('.w-tas-promotion .tasp-list .tasp-tit .tit a').on('click', function(e){
			if($('#top-area-sec .top-area-sec .tasp-list').hasClass('on')){
				$('#top-area-sec .top-area-sec .tasp-list').removeClass('on');
				$('#top-area-sec .top-area-sec .tasp-detail').slideUp('fast');
			}
			else{
				$('#top-area-sec .top-area-sec .tasp-detail').slideDown('fast', function(){
					$('#top-area-sec .top-area-sec .tasp-list').addClass('on');
				});
			}
			e.preventDefault();
		});
			
		//하단 프로모션
		if($('.w-mobile-promotion').length > 0){
			$('.w-mobile-promotion .b-open').on('click', function(e){
				$('.w-mobile-promotion .fpromo-box').fadeIn('fast');
				e.preventDefault();
			});
			$('.w-mobile-promotion .b-close').on('click', function(e){
				$('.w-mobile-promotion .fpromo-box').fadeOut('fast');
				e.preventDefault();
			});
		}
		
		//공지사항 롤링
		$('.w-header-util .hu-notice .list').slick({
			draggable: false,
			arrows:false,
			dots: false,
			pauseOnHover: true,
			vertical: true,
			autoplay: true,
			autoplaySpeed: 5000
		});	
		
		//기획전 롤링
		onHeaderPromRoll(); 
		
		//헤더 퀵모드 검색영역 열기
		$('.w-header-gnb .b-open-search button').on('click', function(){
			$('.header-sec-fixed #header-sec .w-header-search').slideDown('fast');
		});
		
		//gnb 전체메뉴 열고 닫기
		$('.w-header-gnb .nav-gnb .b-total-nav > a').on('click', function(e){
			if($(this).hasClass('on')){
				$('.w-header-gnb .nav-gnb .w-nav-gnb-total').slideUp('fast');
				$(this).removeClass('on');
			}
			else{
				$('.w-header-gnb .nav-gnb .w-nav-gnb-total').slideDown('fast');
				$(this).addClass('on');
			}
			e.preventDefault();
		});
		
		//헤더 타입에 따른 설정
		//o-CHO-quick
		if($('.commonHeaderObject').hasClass('o-CHO-quick')){
			$('.commonHeaderObject .o-CHO-inner').addClass('header-sec-fixed');
		}
		
		//o-CHO-full
		if($('.commonHeaderObject').hasClass('o-CHO-full')){
			$('#top-area-sec .top-area-sec').addClass('on'); // 상단 리본 1단계 오픈
		}		
		
		//공통 헤더 스크롤 이벤트
		CHOScrollEvent();		
		
		/*setTimeout(function(){
			$('html, body').stop().animate({scrollTop:$('#header-sec').offset().top}, 800);
		}, 800);*/
	}//.if
}

/*
 * document ready시 실행함수모음(공통)
 */
$(function(){	
	//placeholder 공통(IE9 이하 부터 실행)
	if($('.input-base').length > 0){$('.input-base').placeholder();}
	//체크박스 공통
	if($('.chk-base').length > 0){
		$('.chk-base').each(function(){
			//checked 유효체크
			if($(this).find('[type="checkbox"]').prop('checked')){
				$(this).find('label').addClass('on');
			}
			else{
				$(this).find('label').removeClass('on');
			}
			//label click
			$(this).find('label').on('click', function(){
				if($(this).hasClass('on')){
					$(this).removeClass('on');
				}
				else{
					$(this).addClass('on');
				}
			});
		});
	}
	
	/*fakeselect.initialize({
		title : {classname : 'select-base selectbox_title'}
	});	*/
	
	//comHeaderControl(); //commonModuleHeader.js 에서 실행
});


//------------------------------------------------------------------------------// common

/*
 * contents
 */
$(function(){
	//메인전용
	if($('.w-content-sec.ws-main-sec').length > 0){		
		//메인 추천 프로모션
		var mainSlickSettings, rlcLeftMain, rlcLeftSub1, rlcLeftSub2, rlcRightMain, rlcRightsub1, rlcRightsub2, mSlickPrevBtn, mSlickNextBtn, mSlickCrt;
		//기본셋팅
		mainSlickSettings = {
			draggable: false,
			arrows:false,
			dots: false,
			pauseOnHover: false,
			pauseOnFocus: false,
			speed: 500
		};
		
		//main left
		rlcLeftMain = $('.rlc-left .rlc-list-main .list').on('init', function(event, slick){
			slick.slickSetOption({
				dots: true,
				autoplay: true,
				autoplaySpeed: 10000,
				appendDots: $('.rlc-left .rlc-list-main .c-slick-dots'),
				customPaging : function(slider, i) {
					var className, title;
					className = $(slider.$slides[i]).data('classname');
					title = $(slider.$slides[i]).data('title');
					return '<button type="button" data-role="none" role="button" tabindex="'+i+'" class="'+className+'">'+title+'</button>';
				}
			}, true);
		}).slick(mainSlickSettings).on('afterChange', function(event, slick, currentSlide, nextSlide){
		 	rlcLeftSub1.slick('slickNext');
		});
		
		//main right
		rlcRightMain = $('.rlc-right .rlc-list-main .list').on('init', function(event, slick){
			slick.slickSetOption({
				dots: true,
				appendDots: $('.rlc-right .rlc-list-main .c-slick-dots'),
				customPaging : function(slider, i) {
					var className, title;
					className = $(slider.$slides[i]).data('classname');
					title = $(slider.$slides[i]).data('title');
					return '<button type="button" data-role="none" role="button" tabindex="'+i+'" class="'+className+'">'+title+'</button>';
				}
			}, true);
		}).slick(mainSlickSettings).on('afterChange', function(event, slick, currentSlide, nextSlide){
		 	rlcRightsub1.slick('slickNext');
		});
		
		//main sub
		rlcLeftSub1 = $('.rlc-left .rlc-ls-left .list').slick(mainSlickSettings).on('afterChange', function(event, slick, currentSlide, nextSlide){
		 	rlcLeftSub2.slick('slickNext');
		});
		rlcLeftSub2 = $('.rlc-left .rlc-ls-right .list').slick(mainSlickSettings).on('afterChange', function(event, slick, currentSlide, nextSlide){
		 	rlcRightMain.slick('slickNext');
		});
		rlcRightsub1 = $('.rlc-right .rlc-ls-left .list').slick(mainSlickSettings).on('afterChange', function(event, slick, currentSlide, nextSlide){
		 	rlcRightsub2.slick('slickNext');
		});
		rlcRightsub2 = $('.rlc-right .rlc-ls-right .list').slick(mainSlickSettings);
		
		//메인 slick 컨트롤
		mSlickPrevBtn =  $('.s-rec-promotion .cb-crt .bb-prev button');
		mSlickNextBtn = $('.s-rec-promotion .cb-crt .bb-next button');
		mSlickCrt = $('.rlc-right .rlc-list-main .b-slick-crt');
		//이전
		mSlickPrevBtn.on('click', function(e){
			mainSlickMotion('slickPrev');
			e.preventDefault();
		});
		//다음
		mSlickNextBtn.on('click', function(e){
			mainSlickMotion('slickNext');
			e.preventDefault();
		});
		//autoplay control
		mSlickCrt.on('click', function(){
			if(!isMainSlickMotion){
				if($(this).hasClass('on')){
					mainSlickMotion('slickPause');
					$(this).removeClass('on');
					$(this).find('.txt').text('자동재생 버튼');
				}
				else{
					mainSlickMotion('slickPlay');			
					$(this).addClass('on');
					$(this).find('.txt').text('일시정지 버튼');
				}
			}
		});
		//slick opt
		function mainSlickMotion(opt){
			rlcLeftMain.slick(opt);
		}
		// slick dots disable click
		$('.s-rec-promotion .rlc-list-main .slick-dots button').on('click', function(e){e.stopPropagation();}); 
	}//.if
		
	//섹션 메인 프로모션
	if($('.s-rec-promotion-cont').length > 0){
		var sectionMainSlickSettings, srpcLeft, srpcRight;
		sectionMainSlickSettings = {
			draggable: false,
			arrows:false,
			dots: true,
			pauseOnHover: true,
			pauseOnFocus: false,
			speed: 1000,
			customPaging : function(slider, i) {
				var txt = $(slider.$slides[i]).find('.o-txt').attr('alt');
				return '<button type="button" data-role="none" role="button" tabindex="'+i+'" class="btn">'+txt+'</button>';
			}
		};
		srpcLeft = $('.srpc-prom .srpc-left .list').on('init', function(event, slick){
			slick.slickSetOption({
				fade: true
			});
		}).slick(sectionMainSlickSettings);
		srpcRight = $('.srpc-prom .srpc-right .list').on('init', function(event, slick){
			slick.slickSetOption({
				autoplaySpeed: 15000,
				autoplay: true,
				arrows: true,
				prevArrow: false,
				nextArrow: $('.srpc-right .bb-next button')
				//appendDots: $('.srpc-prom .srpc-right .c-slick-dots')
			}, true);
			//utilSlickCrt($('.srpc-prom .srpc-right .b-slick-crt'), slick); //autoplay control
		}).slick(sectionMainSlickSettings);
	}
	
	//상시 프로모션
	if($('.s-always-banner').length > 0){
		$('.s-always-banner .ab-list').on('init', function(event, slick){
			utilSlickCrt($('.s-always-banner .b-slick-crt'), slick); //autoplay control
		}).slick({
			draggable: false,
			pauseOnHover: true,
			dots: true,
			appendDots: $('.s-always-banner .c-slick-dots'),
			arrows: true,
			prevArrow: false,
			nextArrow: $('.s-always-banner .bb-next button'),
			speed: 1000,
			autoplaySpeed: 10000,
			autoplay: true
		});
	}
	
	//탭메뉴
	if($('.o-tab-menu').length > 0){
		$('.o-tab-menu').each(function(){
			var _this = $(this);
			$('.ui-tab-menu a', _this).on('click', function(e){
				if(!$(this).closest('li').hasClass('on')){
					var show = $(this).attr('href');
					_this.find('.tab-on').removeClass('tab-on');
					_this.find(show).addClass('tab-on');
					$('.ui-tab-menu .on', _this).removeClass('on');
					$(this).closest('li').addClass('on');
				}
				e.preventDefault();
			})
		})
		
		
	}
	
	//타이틀 오버시 풀
	if($('.srpc-list-sub .tit-over').length > 0){
		$('.srpc-list-sub .tit-over').each(function(){
			$(this).closest('li > a').hover(function(){
				if($('.tit-over span', this).height() > 30){
					$('.tit-over', this).next().addClass('srpc-hide');
				}
			},function(){
				if($('.tit-over', this).next().hasClass('srpc-hide')){
					$('.tit-over', this).next().removeClass('srpc-hide');
				}
			});
		});
	}
});