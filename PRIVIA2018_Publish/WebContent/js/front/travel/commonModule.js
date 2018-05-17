/*
 * 함수명 : onSlickCrt
 * 설명   : slick autoplay 컨트롤해주는 함수
 * 사용처 : slick event 'init' 내부
 * 작성자 : 권순환
 */
function onSlickCrt(btn, slick){
	btn.click(function(){
		if(btn.hasClass('on')){
			slick.slickPause();
			btn.removeClass('on');
		}
		else{
			slick.slickPlay();
			btn.addClass('on');
		}
	});
}

//공통
$(function(){	
	//하단 프로모션 열기/닫기
	if($('.s-fix-promotion').length > 0){
		$('.s-fix-promotion .b-open').click(function(e){
			$('.s-fix-promotion .fpromo-box').fadeIn('fast');
			e.preventDefault();
		});
		$('.s-fix-promotion .b-close').click(function(e){
			$('.s-fix-promotion .fpromo-box').fadeOut('fast');
			e.preventDefault();
		});
	}
});

//메인
$(function(){
	if($('.w-content-sec.ws-main-cont').length > 0){
		var rlcSlickSetting, rlcLeftMain, rlcLeftSub, rlcRightMain, rlcRightsub, bannerCont;
		rlcSlickSetting = {
			draggable: false,
			arrows:false,
			dots: false,
			pauseOnHover: false,
			autoplay: true,
			autoplaySpeed: 5000
		};
		rlcLeftMain = $('.rlc-left .rlc-list-main ul').slick(rlcSlickSetting);
		rlcLeftSub = $('.rlc-left .rlc-list-sub ul').slick(rlcSlickSetting);
		rlcRightMain = $('.rlc-right .rlc-list-main ul').slick(rlcSlickSetting);
		rlcRightsub = $('.rlc-right .rlc-list-sub ul').slick(rlcSlickSetting);

		bannerCont = $('.s-banner-cont .bc-list').on('init', function(event, slick){
			onSlickCrt($('.s-banner-cont .b-slick-crt'), slick);
		}).slick({
			draggable: false,
			dots: true,
			pauseOnHover: false,
			dotsClass: 'slick-dots-w',
			appendDots: $('.s-banner-cont .w-slick-dots'),
			arrows: true,
			prevArrow: false,
			nextArrow: $('.s-banner-cont .c-b-crt .bc-next a'),
			autoplay: true,
			autoplaySpeed: 10000,
			speed: 1000
		});
	}
});