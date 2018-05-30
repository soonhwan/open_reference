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
	$('.input-base').placeholder(); //IE9부터 실행
	
	$('.uis-datepicker').datepicker({
		minDate: '0',
		maxDate: '+362',
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		beforeShowDay: function(date) {
			//var date1 = $.datepicker.parseDate('yy-mm-dd', $(".chk-in .selectDay").val());
			//var date2 = $.datepicker.parseDate('yy-mm-dd', $(".chk-out .selectDay").val());
			
			var date1 = $.datepicker.parseDate('yy-mm-dd', '2018-06-10');
			var date2 = $.datepicker.parseDate('yy-mm-dd', '2018-06-15');
			var addClassName = '';
			if(date1){
				if(date.getTime() == date1.getTime()){
					if(date2){
						addClassName = 'dp-highlight dp-first';
					}
					else{
						addClassName = 'dp-highlight';
					}
				}
				else if(date2){
					if(date.getTime() == date2.getTime()){
					   addClassName = 'dp-highlight dp-end';
					}
					else if(date > date1 && date < date2){
						addClassName = 'dp-highlight pd-between';
					 }
				}
			}
			else{
				addClassName = '';
			}
			return [true, addClassName];
		},
		onSelect: function(dateText, inst) {
			/*var date1 = $.datepicker.parseDate('yy-mm-dd', $(".chk-in .selectDay").val());
			var date2 = $.datepicker.parseDate('yy-mm-dd', $(".chk-out .selectDay").val());
			var selectedDate = $.datepicker.parseDate('yy-mm-dd', dateText);
			var month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1;
			var day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate();

			if (!date1 || date2) {
				$(".chk-in .selectDay").val(dateText);
				$(".chk-out .selectDay").val('');
				$(".chk-in .cd-date").html('<em class="month">'+month+'</em>월 <em class="day">'+day+'</em>일');
				$(".chk-out .cd-date").html('');
				$('.wrap-select-date .c-fix-btn, .result-days').hide();
				$(this).datepicker();
			} else {
				if( selectedDate < date1 ) {
					$(".chk-out .selectDay").val( $(".chk-in .selectDay").val() );
					$(".chk-in .selectDay").val(dateText);							
					$(".chk-out .cd-date").html($(".chk-in .cd-date").html());
					$(".chk-in .cd-date").html('<em class="month">'+month+'</em>월 <em class="day">'+day+'</em>일');
				} else {
					if($(".chk-in .selectDay").val() == dateText){return}
					$(".chk-out .selectDay").val(dateText);
					$(".chk-out .cd-date").html('<em class="month">'+month+'</em>월 <em class="day">'+day+'</em>일');
				}

				var chkIn = $(".chk-in .selectDay").val().split('-');
				var chkOut = $(".chk-out .selectDay").val().split('-');
				var chkInDate = new Date(chkIn[0], chkIn[1], chkIn[2]);
				var chkOutDate = new Date(chkOut[0], chkOut[1], chkOut[2]);
				var duration = (chkOutDate-chkInDate)/1000/60/60/24;
				$('.result-days .days').text(duration);
				$('.wrap-select-date .c-fix-btn, .result-days').show();
				$(this).datepicker();
			}*/
		}
	});		
});

/*
 * document ready시 실행함수모음(메인전용)
 */
$(function(){
	if($('.w-content-sec.ws-main-cont').length > 0){		
		//메인 추천 프로모션
		var mainSlickSettings, rlcLeftMain, rlcLeftSub1, rlcLeftSub2, rlcRightMain, rlcRightsub1, rlcRightsub2, bannerCont, mSlickPrevBtn, mSlickNextBtn, mSlickCrt, mslickArr, isMainSlickMotion;
		//기본셋팅
		mainSlickSettings = {
			draggable: false,
			arrows:false,
			dots: false,
			pauseOnHover: false,
			pauseOnFocus: false,
			autoplaySpeed: 15000,
			speed: 1000
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
				
		//메인 slick 모션
		isMainSlickMotion = false;
		function mainSlickMotion(opt){
			if(!isMainSlickMotion){
				var total = $('.s-rec-list-cont .slick-slider').length;
				isMainSlickMotion = true;
				$('.s-rec-list-cont .slick-slider').each(function(index){
					var _this = $(this);
					if(opt == 'slickPause'){
						_this.slick(opt);   
						isMainSlickMotion = false;
					}
					else{
						setTimeout(function(){
							_this.slick(opt);
							if(total-1 == index){
							   isMainSlickMotion = false;
							}
							console.log(index, total);
						}, 500*index);
					}
				});
			   
			}
		}

		$('.s-rec-list-cont .rlc-list-main .slick-dots button').on('click', function(e){e.stopPropagation();}); // slick dots disable click
		mainSlickMotion('slickPlay'); //autoplay
		
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
				autoplay: true
			}, true);
			utilSlickCrt($('.s-banner-cont .b-slick-crt'), slick); //autoplay control
		}).slick(mainSlickSettings);
	}
});