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
 * 함수명 : comFixPromotionCrt
 * 설명   : 하단 프로모션 열기/닫기
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
function comFixPromotionCrt(){
	if($('.s-fix-promotion').length > 0){
		$('.s-fix-promotion .b-open').on('click', function(e){
			$('.s-fix-promotion .fpromo-box').fadeIn('fast');
			e.preventDefault();
		});
		$('.s-fix-promotion .b-close').on('click', function(e){
			$('.s-fix-promotion .fpromo-box').fadeOut('fast');
			e.preventDefault();
		});
	}
}

/*
 * 함수명 : comChkTasp
 * 설명   : 상단리본 쿠키 체크
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
function comChkTasp(){
	if($('#closeToday').length > 0){
		var topAreaSecId = $.getCookie("topAreaSec");
		if(topAreaSecId == 'Y') {
			$('#top-area-sec').addClass('close');
			$('#top-area-sec').hide();
		}
		else{
			$('#top-area-sec').show();
		}
	}
}

/*
 * 함수명 : comHeaderCrt
 * 설명   : 공통 헤더 컨트롤(상단리본, 공지사항, 스크롤 헤더반응형, 검색UI)
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
function comHeaderCrt(){
	if($('#header-sec').length > 0){
		//리본 프로모션 열고 닫기
		$('.w-header-util .hu-control .bc-open a, #top-area-sec .tasp-list .tasp-tit .tit a').on('click', function(e){
			if($('#top-area-sec').hasClass('close') == false){
				var btn = $('.w-header-util .hu-control .bc-open a');
				if($('#top-area-sec .tasp-list').hasClass('on')){
					$('#top-area-sec .tasp-detail').slideUp('fast');
					$('#top-area-sec .tasp-list').removeClass('on');
					btn.find('.txt').text('상단리본 열기 버튼');
					btn.parent().removeClass('on');
				}
				else{
					$('#top-area-sec .tasp-detail').slideDown('fast');
					$('#top-area-sec .tasp-list').addClass('on');
					btn.find('.txt').text('상단리본 닫기 버튼');
					btn.parent().addClass('on');
				}			
			}
			e.preventDefault();
		});
		
		//상단 리본 닫기
		$('.w-header-util .hu-control .bc-close a').on('click', function(e){
			$('#top-area-sec').slideUp('fast', function(){
				var btn = $('.w-header-util .hu-control .bc-open a');
				$('#top-area-sec .tasp-list').removeClass('on');
				btn.find('.txt').text('상단리본 열기 버튼');
				btn.parent().removeClass('on');
				$('#top-area-sec').addClass('close');
			});
			
			//오늘 하루 열지 않기 체크시
			if($('#closeToday').is(':checked')){
				$.setCookie('topAreaSec', "Y", 1);
			}
			e.preventDefault();
		});
		
		//오늘 하루 열지 않기 체크
		$('.w-header-util .hu-control .c-chk .closeToday').on('click', function(){
			if($(this).hasClass('on')){
				$(this).removeClass('on');   
			}
			else{
				$(this).addClass('on');   

			}			
		});
		
		//공지사항 롤링
		var headerNoticeRoll = $('.w-header-util .hu-notice ul').slick({
			draggable: false,
			arrows:false,
			dots: false,
			pauseOnHover: true,
			vertical: true,
			autoplay: true,
			autoplaySpeed: 5000
		});	
	}	
}

/*
 * document ready시 실행함수모음(공통)
 */
$(function(){	
	comChkTasp(); //상단리본 쿠키 체크
	comFixPromotionCrt(); //하단 프로모션 열기/닫기
	comHeaderCrt(); //공통 헤더 컨트롤(상단리본, 공지사항, 스크롤 헤더반응형, 검색UI)
});

/*
 * document ready시 실행함수모음(메인전용)
 */
$(function(){
	if($('.w-content-sec.ws-main-cont').length > 0){		
		//메인 추천 프로모션
		var mainSlickSettings, rlcLeftMain, rlcLeftSub1, rlcLeftSub2, rlcRightMain, rlcRightsub1, rlcRightsub2, bannerCont;
		//기본셋팅
		mainSlickSettings = {
			draggable: false,
			arrows:false,
			dots: false,
			pauseOnHover: false,
			pauseOnFocus: false,
			autoplaySpeed: 8000,
			speed: 800
		};
		
		//main left
		rlcLeftMain = $('.rlc-left .rlc-list-main ul').on('init', function(event, slick){
			slick.slickSetOption({
				dots: true,
				appendDots: $('.rlc-left .rlc-list-main .c-slick-dots'),
				customPaging : function(slider, i) {
					var className, title;
					className = $(slider.$slides[i]).data('classname');
					title = $(slider.$slides[i]).data('title');
					return '<button type="button" data-role="none" role="button" tabindex="'+i+'" class="'+className+'">'+title+'</button>';
				}
			}, true);
		}).slick(mainSlickSettings);
		
		//main right
		rlcRightMain = $('.rlc-right .rlc-list-main ul').on('init', function(event, slick){
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
		}).slick(mainSlickSettings);
		
		//main sub
		rlcLeftSub1 = $('.rlc-left .rlc-ls-left ul').slick(mainSlickSettings);
		rlcLeftSub2 = $('.rlc-left .rlc-ls-right ul').slick(mainSlickSettings);
		rlcRightsub1 = $('.rlc-right .rlc-ls-left ul').slick(mainSlickSettings);
		rlcRightsub2 = $('.rlc-right .rlc-ls-right ul').slick(mainSlickSettings);
		
		//메인 slick 컨트롤
		var mSlickPrevBtn, mSlickNextBtn, mSlickCrt, mslickArr;
		mSlickPrevBtn =  $('.s-rec-list-cont .cb-crt .bc-prev a');
		mSlickNextBtn = $('.s-rec-list-cont .cb-crt .bc-next a');
		mSlickCrt = $('.rlc-right .rlc-list-main .b-slick-crt');
		mslickArr = [rlcLeftMain, rlcRightMain, rlcLeftSub1, rlcLeftSub2, rlcRightsub1, rlcRightsub2];
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
		});
				
		//메인 slick 모션
		function mainSlickMotion(opt){
			$('.s-rec-list-cont .slick-slider').each(function(index){
				var _this = $(this);
				if(opt == 'slickPause'){
					_this.slick(opt);   
				}
				else{
					setTimeout(function(){
						_this.slick(opt);
					}, 300*index);
				}
			});
		}

		mainSlickMotion('slickPlay'); //autoplay
		$('.s-rec-list-cont .rlc-list-main .slick-dots button').on('click', function(e){e.stopPropagation();}); // slick dots disable click
		
		//상시 프로모션
		bannerCont = $('.s-banner-cont .bc-list').on('init', function(event, slick){
			slick.slickSetOption({
				pauseOnHover: true,
				dots: true,
				appendDots: $('.s-banner-cont .c-slick-dots'),
				arrows: true,
				prevArrow: false,
				nextArrow: $('.s-banner-cont .cb-crt .bc-next a'),
				autoplay: true
			}, true);
			utilSlickCrt($('.s-banner-cont .b-slick-crt'), slick); //autoplay control
		}).slick(mainSlickSettings);
	}
});