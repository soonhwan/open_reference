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
			e.preventDefault();
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
	comFixPromotionCrt(); //하단 프로모션 열기/닫기
	comHeaderCrt(); //공통 헤더 컨트롤(상단리본, 공지사항, 스크롤 헤더반응형, 검색UI)
});

/*
 * document ready시 실행함수모음(메인전용)
 */
$(function(){
	if($('.w-content-sec.ws-main-cont').length > 0){
		var mainSlickSettings, rlcLeftMain, rlcLeftSub, rlcRightMain, rlcRightsub, bannerCont;
		mainSlickSettings = {
			draggable: false,
			arrows:false,
			dots: false,
			pauseOnHover: false,
			autoplay: true,
			autoplaySpeed: 5000
		};
		
		//메인 추천 프로모션
		rlcLeftMain = $('.rlc-left .rlc-list-main ul').on('init', function(event, slick){
			slick.slickSetOption({
				dots: true,
				appendDots: $('.rlc-left .rlc-list-main .c-slick-dots'),
				customPaging : function(slider, i) {
					var className, title 
					className = $(slider.$slides[i]).data('classname');
					title = $(slider.$slides[i]).data('title');
					return '<button type="button" data-role="none" role="button" tabindex="'+i+'" class="'+className+'">'+title+'</button>';
				}
			}, true);
		}).slick(mainSlickSettings);
		
		rlcRightMain = $('.rlc-right .rlc-list-main ul').on('init', function(event, slick){
			slick.slickSetOption({
				dots: true,
				appendDots: $('.rlc-right .rlc-list-main .c-slick-dots'),
				customPaging : function(slider, i) {
					var className, title 
					className = $(slider.$slides[i]).data('classname');
					title = $(slider.$slides[i]).data('title');
					return '<button type="button" data-role="none" role="button" tabindex="'+i+'" class="'+className+'">'+title+'</button>';
				}
			}, true);
		}).slick(mainSlickSettings);
		
		rlcLeftSub = $('.rlc-left .rlc-list-sub ul').slick(mainSlickSettings);
		rlcRightsub = $('.rlc-right .rlc-list-sub ul').slick(mainSlickSettings);
		
		//상시 프로모션
		bannerCont = $('.s-banner-cont .bc-list').on('init', function(event, slick){
			slick.slickSetOption({
				pauseOnHover: true,
				dots: true,
				appendDots: $('.s-banner-cont .c-slick-dots'),
				arrows: true,
				prevArrow: false,
				nextArrow: $('.s-banner-cont .cb-crt .bc-next a'),
				autoplaySpeed: 10000,
				speed: 1000
			}, true);
			utilSlickCrt($('.s-banner-cont .b-slick-crt'), slick);
		}).slick(mainSlickSettings);
	}
});