/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 * https://github.com/mathiasbynens/jquery-placeholder
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(this);if(d.value===f.attr(h?"placeholder-x":"placeholder")&&f.hasClass(n.customClass))if(d.value="",f.removeClass(n.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(this),i=f.id;if(!d||"blur"!==d.type||!g.hasClass(n.customClass))if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(j){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":i}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var k=g.data("placeholder-password");k&&(k[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(n.customClass),g[0].value=g.attr(h?"placeholder-x":"placeholder")}else g.removeClass(n.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h=!1,i="[object OperaMini]"===Object.prototype.toString.call(window.operamini),j="placeholder"in document.createElement("input")&&!i&&!h,k="placeholder"in document.createElement("textarea")&&!i&&!h,l=a.valHooks,m=a.propHooks,n={};j&&k?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return n=a.extend({},e,b),this.filter((j?"textarea":":input")+"["+(h?"placeholder-x":"placeholder")+"]").not("."+n.customClass).not(":radio, :checkbox, [type=hidden]").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=j,g.textarea=k,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(n.customClass)?"":b.value},set:function(b,f){var g,h,i=a(b);return""!==f&&(g=i.data("placeholder-textinput"),h=i.data("placeholder-password"),g?(c.call(g[0],!0,f)||(b.value=f),g[0].value=f):h&&(c.call(b,!0,f)||(h[0].value=f),b.value=f)),i.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):(i.hasClass(n.customClass)&&c.call(b),b.value=f),i):(b.value=f,i)}},j||(l.input=f,m.value=f),k||(l.textarea=f,m.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+n.customClass,this).each(function(){c.call(this,!0,"")});setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){var b=!0;try{"javascript:void(0)"===document.activeElement.toString()&&(b=!1)}catch(c){}b&&a("."+n.customClass).each(function(){this.value=""})}))});

/*
 * 설명   : jQuery 메서드 모음
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
(function ($, window, document, undefined) {
	$.setCookie = function (name, value, expiredays) {
		var today = new Date();
		today.setDate( today.getDate() + expiredays );
		document.cookie = name + "=" + escape( value ) + "; expires=" + today.toGMTString() + "; path=/";
	}
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
	}
	$.fn.customCheckbox = function(){
		return this.each(function(){
			var $this = $(this);
			var $chk = $this.find('[type="checkbox"]');
			var $label = $this.find('label');
			
			if(!$chk){return;}
			
			//checked 유효체크
			if($chk.prop('checked')){
				$label.addClass('on');
			}
			else{
				$label.removeClass('on');
			}
			
			//disabled
			if($chk.prop('disabled')){
			   $this.addClass('disabled');
			}
			
			//label click
			$label.on('click', function(){
				if($label.closest('.disabled').hasClass('disabled')){return;}
				if($label.hasClass('on')){
					$label.removeClass('on');
				}
				else{
					$label.addClass('on');
				}
			});
		});
	}
	$.fn.customRadio = function(){
		return this.each(function(){
			var $this = $(this);
			var $chk = $this.find('[type="radio"]');
			var $label = $this.find('label');
			var $name = $chk.attr('name');
			
			if(!$chk){return;}
			
			//name 저장
			$label.name = $name;
			
			//checked 유효체크
			if($chk.prop('checked')){
				$label.addClass('on');
			}
			else{
				$label.removeClass('on');
			}
			
			//disabled
			if($chk.prop('disabled')){
			   $this.addClass('disabled');
			}
			
			//label click
			$label.on('click', function(){
				if($label.closest('.disabled').hasClass('disabled')){return;}
				if(!$label.hasClass('on')){
					$('[name="'+$label.name+'"]').next('label.on').removeClass('on');
					$label.addClass('on');	
				}
			});
		});
	}
}(window.jQuery, window, document));

/*
 * 설명   : pvFrontScript 메서드 모음
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
var pvFrontScript = window.pvFrontScript || (function(){
	return {
		init: function(){
			//placeholder(공통 - IE9 이하 부터 실행)
			$('.input-base').placeholder();

			//체크박스(공통)
			$('.chk-base').customCheckbox();

			//라디오버튼(공통)
			$('.radio-base').customRadio();

			//셀렉트박스(공통)
			$('.select-base').fakeselect();

			//공통 헤더 컨트롤(상단리본, 공지사항, 스크롤 헤더반응형, 검색UI)
			pvFrontScript.comHeaderControl(); 

			//컨텐츠 스크립트 모음
			pvFrontScript.comContents();
		},
		docuMoudownTrigger: function($delay){ 
			/* 설명   : document mousedown 트리거
			   사용처 : 주로 통합 헤더 검색 팝업을 닫을때 사용 */

			var delay = $delay || 0;
			setTimeout(function(){$(document).mousedown();}, delay);
		},
		panelPosition: function(options){
			/* 설명   : 통합 헤더 검색 팝업 노출시 위치 설정(팝업 사이즈, 위치 수정을 프론트에서 관리하기 위해)
			   사용처 : 통합 헤더 검색 팝업 호출시 */

			if(!options) {return false;}
			
			var defaults, opt, $this, $panel, $area, _my;
			defaults = {
				target : null,
				area : null
			}

			opt = $.extend(true, defaults, options);

			$this = opt.target;
			$area = opt.area;

			//내부부터 탐색
			if($this.closest('.w-qsb-cont').find('.'+$this.data('panel-name')).length > 0){
				 $panel = $this.closest('.w-qsb-cont').find('.'+$this.data('panel-name'));
			}
			else{
				$panel = $this.closest('.hss-inner-cont').find('.'+$this.data('panel-name'));										   
			}

			//항공 주요도시
			if($area == 'air-mainsel'){
				$panel.position({
					my: 'left top-10',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont-box')
				});		
			}
			//항공 도시 검색
			if($area == 'air-mainsel-auto'){
				if($this.closest('.places-entry').length > 0){
					$panel.position({
						my: 'left+7 top-32',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.places-entry')
					});	
				}
				else{
					$panel.position({
						my: 'left top-10',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.qsb-cont')
					});	
				}
					
			}
			//항공 인원,좌석
			if($area == 'air-capacity'){
				if($this.closest('.o-multiway').hasClass('on')){
					_my = 'left top-10';
				}
				else{
					_my = 'left-24 top-10';
				}
				$panel.position({
					my: _my,
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont')
				});		
			}
			
			//호텔 주요도시
			if($area == 'hotel-mainsel'){
				$panel.position({
					my: 'left top-10',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont-box')
				});	
			}
			//호텔 객실
			if($area == 'hotel-capacity'){
				$panel.position({
					my: 'left top-10',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont')
				});	
			}
			
			//자유여행 주요도시
			if($area == 'freetour-mainsel'){
				$panel.position({
					my: 'left top-10',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont-box')
				});
			}
			
			//투액 대여도시 검색
			if($area == 'freetour-mainsel-auto'){
				if($this.closest('.places-entry').length > 0){
					$panel.position({
						my: 'left+10 top-32',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.places-entry')
					});	
				}
				else{
					$panel.position({
						my: 'left top-10',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.qsb-cont')
					});	
				}
			}
			//투액 인원, 테마, 여행도시(유럽)
			if($area == 'freetour-capacity'){
				if($this.closest('.o-transpass').hasClass('on') && $this.data('panel-name') == 'global-ui-capacity'){
					_my = 'left-24 top-10';
				}
				else{
					_my = 'left top-10';
				}
				
				$panel.position({
					my: _my,
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont')
				});
			}
			
			//셀렉트 리스트
			if($area == 'panel-sel'){
				$panel.position({
					my: 'left top-10',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont')
				});
			}
			
			//캘린더
			if(!$panel.hasClass('on') || $area == null){
				$panel.addClass('on');
			}
		},
		onSelectTxtDay: function($this, dateText, inst){
			/* 설명   : 통합검색 - 선택된 날짜 형식 ex)08월 07일 (화)
			   사용처 : jQuery UI datepicker : onSelect 내부 */

			//console.log($this, dateText)
			var selectedDate = $.datepicker.parseDate('yy/mm/dd', dateText),
				month = (selectedDate.getMonth()+1) < 10 ? '0' + (selectedDate.getMonth()+1)  : selectedDate.getMonth()+1,
				day = selectedDate.getDate() < 10 ? '0' + selectedDate.getDate()  : selectedDate.getDate(),
				dayName = selectedDate.getUTCDay() < 6 ? $this.datepicker('option', 'dayNamesMin')[selectedDate.getUTCDay()+1] : $this.datepicker('option', 'dayNamesMin')[0],
				txt = month + '월 ' + day + '일 (' + dayName + ')';
			return txt;
		},
		jqdHolidayMark: function(date){
			/* 설명   : jQuery Ui datepicker 주말, 휴일 표시
			   사용처 : 필요시 호출 ex) var result = pvFrontScript.jqdHolidayMark(date); */
			
			//휴무일
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

			//주말
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
		beforeShowDayMark: function(date, $date1, $date2){
			/* 설명   : 통합검색 - 출발, 도착지 스타일 구현 - 주의!(onSelect 인터렉션이 비슷해야함)
			   사용처 : jQuery UI datepicker : beforeShowDay 내부 */
			
			var result = pvFrontScript.jqdHolidayMark(date);
			
			//날짜 마크
			var date1 = $date1;
			var date2 = $date2;
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
			return result;
		},
		beforeShowDayMarkMD: function(date, $date1, $date2, $date3, $date4){
			/* 설명   : 통합검색 - 다구간 스타일 구현
			   사용처 : jQuery UI datepicker : beforeShowDay 내부 */

			var result = pvFrontScript.jqdHolidayMark(date);

			//날짜 마크
			/*var date1 = $date1,
				date2 = $date2,
				date3 = $date3,	
				date4 = $date4;*/
			
			/*var date1 = $.datepicker.parseDate('yy/mm/dd', '2018/07/18');
			var date2 = $.datepicker.parseDate('yy/mm/dd', '2018/07/20');
			var date3 = $.datepicker.parseDate('yy/mm/dd', '2018/07/24');
			var date4 = $.datepicker.parseDate('yy/mm/dd', '2018/07/30');
			
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
			}*/
			
			return result;
		},
		comSearchEvtBind: function($section){
			/* 설명   : 통합검색 - 섹션별 필요한 이벤트 제공
			   사용처 : 통합헤더 섹션별 UI Evvent 필요시 호출 */
			
			var section = $section;
		
			//검색(도시) 리스트, 최근검색 커스텀스크롤
			if(section.find('.o-customscrollbar').length > 0){
				section.find('.o-customscrollbar').mCustomScrollbar({theme:"minimal-dark"});
			}

			//팝업 닫기 버튼
			if(section.find('.sc-ui-search-panel .b-scb-close').length > 0){
				section.find('.sc-ui-search-panel .b-scb-close').on('click', function(e){
					$(this).closest('.sc-ui-search-panel.on').removeClass('on');
					e.preventDefault();
				});
			}

			//인원,좌석,객실 취소 버튼
			if(section.find('.ui-capacity .b-cancel a').length > 0){
				section.find('.ui-capacity .b-cancel a').on('click', function(e){
					pvFrontScript.docuMoudownTrigger();
					e.preventDefault();
				});
			}

			//캘린더 today 제거
			if(section.find('.sc-ui-search-panel .uis-datepicker').length > 0){
				section.find('.sc-ui-search-panel .uis-datepicker').find(".ui-state-active").removeClass("ui-state-active"); 
			}
			
			//capacity uis-capacity-number click(클래스 on 추가, 삭제 기능)
			if(section.find('.sc-ui-search-panel .uis-capacity-number').length > 0){
				//minus
				section.find('.sc-ui-search-panel .uis-capacity-number .uis-custom-number .b-minus button').on('click', function(e){
					var c = parseInt($(this).closest('.uis-custom-number').find('.ucn-num').text());
					if(c < 1){
						if($(this).closest('.uis-custom-number').find('.ucn-num').hasClass('on')){
							$(this).closest('.uis-custom-number').find('.ucn-num.on').removeClass('on');
						}
					}
					e.preventDefault();
				});
				//plus
				section.find('.sc-ui-search-panel .uis-capacity-number .uis-custom-number .b-plus button').on('click', function(e){
					var c = parseInt($(this).closest('.uis-custom-number').find('.ucn-num').text());
					if(c > 0){
						if(!$(this).closest('.uis-custom-number').find('.ucn-num').hasClass('on')){
							$(this).closest('.uis-custom-number').find('.ucn-num').addClass('on');
						}
					}
					e.preventDefault();
				});
			}
			
			//capacity uis-capacity-select click(클래스 on 추가, 삭제 기능)
			if(section.find('.sc-ui-search-panel .uis-capacity-select').length > 0){
				section.find('.sc-ui-search-panel .uis-capacity-select li a').on('click', function(e){
					if(!$(this).closest('li').hasClass('on')){
						section.find('.sc-ui-search-panel .uis-capacity-select li.on').removeClass('on');
						$(this).closest('li').addClass('on');
					}
					e.preventDefault();
				});
			}
			
			//select list click(클래스 on 추가, 삭제 기능)
			if(section.find('.sc-ui-search-panel.ui-select-list').length > 0){
				section.find('.sc-ui-search-panel.ui-select-list .uis-list li a').on('click', function(e){
					if(!$(this).closest('li').hasClass('on')){
						section.find('.sc-ui-search-panel.ui-select-list .uis-list li.on').removeClass('on');
						$(this).closest('li').addClass('on');
					}
					e.preventDefault();
				});
			}
		},
		comSearchRecently: function($section){
			/* 설명   : 통합검색 - 최근검색에 필요한 이벤트 제공
			   사용처 : 통합헤더 섹션별 최근검색 Evvent 필요시 호출 */
			
			var section = $section;
	
			//최근검색이 있으면 노출
			section.find('.hss-recently-search').addClass('on');
			section.addClass('isRecently');

			//최근검색 열기 click
			section.find('.hss-recently-search [data-panel="recently"]').on('click', function(e){
				//position
				pvFrontScript.panelPosition({
					target: $(this)
				});
				e.preventDefault();
			});

			//event 바인딩
			pvFrontScript.comSearchEvtBind($section.find('.hss-recently-search'));
		},
		utilSlickCrt: function(btn, slick){
			/* 설명   : slick autoplay 컨트롤해주는 함수
			   사용처 : slick event 'init' 내부 */

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
		},
		onHeaderPromRoll: function(){
			/* 설명   : 헤더 롤링 실행
			   사용처 : pvFrontScript.comHeaderControl(); */

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
			if(!$('.hs-prom-roll').hasClass('hide')){
				$('.hs-prom-roll .list').on('init', function(event, slick){
					pvFrontScript.utilSlickCrt($('.w-header-search .hs-prom-roll .b-slick-crt'), slick); //autoplay control
				}).slick({
					draggable: false,
					arrows:false,
					pauseOnHover: true,
					dots: true,
					appendDots: $('.w-header-search .hs-prom-roll .c-slick-dots'),
					autoplay: true,
					autoplaySpeed: 5000
				});	
			}
		},
		comTopAreaInit: function(){
			/* 설명   : 헤더 리본
			   사용처 : pvFrontScript.comHeaderControl(); */

			//리본 프로모션 닫기
			$('.w-header-util .hu-control .b-crt.bc-close a').on('click', function(e){
				//안쪽부터 탐색
				if($('#top-area-sec .top-area-sec .tasp-list').hasClass('on')){
					$('#top-area-sec .top-area-sec .tasp-list').removeClass('on');
					$('#top-area-sec .top-area-sec .tasp-detail').slideUp('fast');
					$('.w-header-util .hu-control .b-crt.bc-open.hide').removeClass('hide'); //리본버튼
					return false;
				}

				if($('#top-area-sec .top-area-sec').hasClass('on')){
					$('#top-area-sec .top-area-sec').slideUp('fast', function(){
						//fixed 모드에서는 클래스를 컨트롤 하지 않음
						if(!$('.header-sec-fixed').length > 0){
							$('#top-area-sec .top-area-sec').removeClass('on')
						}
					});
					$('.w-header-util .hu-control .b-crt.bc-close').addClass('hide'); //리본버튼
					return false;
				}
				e.preventDefault();
			});

			//리본 프로모션 열기
			$('.w-header-util .hu-control .b-crt.bc-open a').on('click', function(e){
				//밖에서부터 탐색
				if($('#top-area-sec .top-area-sec').css('display') == 'none'){
					$('#top-area-sec .top-area-sec').slideDown('fast', function(){
						//fixed 모드에서는 클래스를 컨트롤 하지 않음
						if(!$('.header-sec-fixed').length > 0){
							$('#top-area-sec .top-area-sec').addClass('on')
						}
					});
					$('.w-header-util .hu-control .b-crt.bc-close.hide').removeClass('hide'); //리본버튼
					return false;
				}

				if(!$('#top-area-sec .top-area-sec .tasp-list').hasClass('on')){
					$('#top-area-sec .top-area-sec .tasp-detail').slideDown('fast', function(){
						$('#top-area-sec .top-area-sec .tasp-list').addClass('on');
					});
					$('.w-header-util .hu-control .b-crt.bc-open').addClass('hide'); //리본버튼
					return false;
				}
				e.preventDefault();
			});

			//리본 프로모션 열기(타이틀 클릭)
			$('.w-tas-promotion .tasp-list > li > a').on('click', function(e){
				if($('#top-area-sec .top-area-sec .tasp-list').hasClass('on')){
					$('#top-area-sec .top-area-sec .tasp-list').removeClass('on');
					$('#top-area-sec .top-area-sec .tasp-detail').slideUp('fast');
					$('.w-header-util .hu-control .b-crt.bc-open.hide').removeClass('hide'); //리본버튼
				}
				else{
					$('#top-area-sec .top-area-sec .tasp-detail').slideDown('fast', function(){
						$('#top-area-sec .top-area-sec .tasp-list').addClass('on');
					});
					$('.w-header-util .hu-control .b-crt.bc-open').addClass('hide'); //리본버튼
				}
				e.preventDefault();
			});
		},
		CHOScrollEvent: function(){
			/* 설명   : 공통 헤더 스크롤 이벤트
			   사용처 : pvFrontScript.comHeaderControl(); */

			var $CHO, scTop, isFix = false, isHs = false, isTopArea = false, headerSearchH, scUTarget;
			$CHO = $('.commonHeaderObject');

			//fixed 모드에서 스크롤시 초기화
			function isFixed(){
				//리본영역
				if($('.header-sec-fixed #top-area-sec .top-area-sec').css('display') == 'block' && isTopArea == false){
					isTopArea = true;
					$('.header-sec-fixed #top-area-sec .top-area-sec .tasp-list').removeClass('on');
					$('.header-sec-fixed #top-area-sec .top-area-sec .tasp-detail').slideUp('fast'); 
					$('.header-sec-fixed #top-area-sec .top-area-sec').slideUp('fast', function(){
						isTopArea = false;
					});
					//리본버튼
					$('.header-sec-fixed .w-header-util .hu-control .b-crt.bc-open.hide').removeClass('hide');
					$('.header-sec-fixed .w-header-util .hu-control .b-crt.bc-close').addClass('hide');
				}

				//검색영역
				if($('.header-sec-fixed #header-sec .w-header-search').css('display') == 'block' && isHs == false){
					isHs = true;
					//console.log('isFixed() = ', $('.w-header-search').height());
					if(headerSearchH != $('.w-header-search').height()){
						var h = $('.commonHeaderObject').height() + ($('.w-header-search').height() - headerSearchH);
						$('.commonHeaderObject').height(h);
						//console.log('commonHeaderObject = ', h);
					}

					$('.header-sec-fixed #header-sec .w-header-search').slideUp('fast', function(){
						isHs = false;
					});
					//퀵버전 검색버튼
					$('.w-header-gnb .b-open-search button.on').removeClass('on');

					//검색팝업
					if($('.sc-ui-search-panel.on').length > 0){
						$('.sc-ui-search-panel.on').removeClass('on');
					}
				}

				//전체메뉴
				if($('.header-sec-fixed .w-nav-gnb-total').height() > 0 && $('.w-header-gnb .nav-gnb .b-total-nav > a.on').length > 0){
					$('.w-header-gnb .nav-gnb .b-total-nav > a.on').removeClass('on');
					$('.header-sec-fixed .w-nav-gnb-total').height(0);
				}

				//해외패키지 3뎁스
				if($('.w-nav-gsub-ly').hasClass('on')){
					$('.w-nav-gsub-ly .on').removeClass('on');
					$('.w-nav-gsub-ly').removeClass('on');	
					$('#n-gnb-pkg .list-gsub .is3dep').removeClass('is3dep');
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

					//fixed 모드 시작
					if(scUTarget < scTop && isFix == false){
						//fixed, height 설정
						headerSearchH = $('.w-header-search').height();
						//console.log('fixed = ', $('.w-header-search').height());
						$('.commonHeaderObject').height($('.commonHeaderObject').height());
						$('.commonHeaderObject .o-CHO-inner').addClass('header-sec-fixed');
						$('.commonHeaderObject .o-CHO-inner').hide();
						$('.commonHeaderObject .o-CHO-inner').fadeIn();

						//리본영역
						$('.header-sec-fixed #top-area-sec .top-area-sec').hide();
						$('.header-sec-fixed #top-area-sec .top-area-sec .tasp-list').removeClass('on');
						//리본버튼
						$('.header-sec-fixed .w-header-util .hu-control .b-crt.bc-open.hide').removeClass('hide');
						$('.header-sec-fixed .w-header-util .hu-control .b-crt.bc-close').addClass('hide');

						//검색영역
						$('.header-sec-fixed #header-sec .w-header-search').hide();

						//전체메뉴
						if($('.header-sec-fixed .w-nav-gnb-total').height() > 0 && $('.w-header-gnb .nav-gnb .b-total-nav > a.on').length > 0){
							$('.w-header-gnb .nav-gnb .b-total-nav > a.on').removeClass('on');
							$('.header-sec-fixed .w-nav-gnb-total').height(0);
						}

						//검색팝업
						if($('.sc-ui-search-panel.on').length > 0){
							$('.sc-ui-search-panel.on').removeClass('on');
						}

						isFix = true;
					}

					//fixed 해제(relative 모드)
					if(scUTarget > scTop && isFix == true){
						//fixed, height 제거
						$('.commonHeaderObject').height('auto');
						$('.commonHeaderObject .o-CHO-inner').removeClass('header-sec-fixed');

						//리본
						$('#top-area-sec .top-area-sec .tasp-list').removeClass('on');
						$('#top-area-sec .top-area-sec .tasp-detail').hide(); 
						if($('#top-area-sec .top-area-sec').hasClass('on')){
							$('#top-area-sec .top-area-sec').show();
							//리본버튼
							$('.w-header-util .hu-control .b-crt.bc-open.hide, .w-header-util .hu-control .b-crt.bc-close.hide').removeClass('hide');
						}
						else{
							//리본버튼
							$('.header-sec-fixed .w-header-util .hu-control .b-crt.bc-open.hide').removeClass('hide');
							$('.header-sec-fixed .w-header-util .hu-control .b-crt.bc-close').addClass('hide');
						}

						//검색
						$('#header-sec .w-header-search').show();

						isFix = false;
						isHs = false;
						isTopArea = false;
					}

					//relative 모드 스크롤시 초기화
					if(!isFix){
						//리본
						if($('#top-area-sec .top-area-sec .tasp-list').hasClass('on')){
							$('.w-header-util .hu-control .b-crt.bc-close a').trigger('click');
						}
					}

					//fixed 모드에서 스크롤시 초기화
					if(isFix){
						isFixed();
					}		
				}

			}

			$(window).on('scroll load', pos);
		},
		comBottomPromInit: function(){
			/* 설명   : 하단 프로모션
			   사용처 : pvFrontScript.comHeaderControl(); */

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
		},
		beforeSettingNav: function(){
			/* 설명   : GNB, 전체메뉴 셋팅
			   사용처 : pvFrontScript.comGNBInit(); */

			//gnb sub메뉴 삽입
			var code = [];
			$('#nav-gnb > li').each(function(i){
				var gnbKey = $(this).attr('id');
				if(gnbKey){
					code[i] = gnbKey.split('-')[2]; //n-gnb-{key}
				}
			});

			var maxHeight;
			var totalNav = '';
			for(key in navData){
				totalNav += '<li class="'+key+'" >';
				totalNav += '<span class="tit"><a href="'+navData[key].link+'"'+(navData[key].newWindow?' target="_blank"':'')+'>'+navData[key].title+'</a></span>';
				if(navData[key].subNav.length > 0){
					totalNav += '<ul class="list">';
					for(i=0;i<navData[key].subNav.length;i++){
						totalNav += '<li><a href="'+navData[key].subNav[i].link+'"'+(navData[key].subNav[i].newWindow?' target="_blank"':'')+'>'+navData[key].subNav[i].title+'</a></li>';
					}
					totalNav += '</ul>';
				}
				totalNav += '</li>';

				//2dep 개편에는 없음
				/*for(i=0;i<code.length;i++){			
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
				}*/
			}

			$('.w-nav-gnb-total .nav-gnb-total').append(totalNav);

			//최대높이
			var mh = 0;
			var titH = $('.w-nav-gnb-total .nav-gnb-total .tit a').outerHeight()+20;
			$('.w-nav-gnb-total .nav-gnb-total > li ').each(function(index){
				var list = $(this).find('.list');
				mh = (mh < list.outerHeight()) ? list.outerHeight() : mh

				/*console.log((index+1) % 6 + ' = ', mh);
				if((index+1) % 6 == 0){
					console.log('index = ', index, mh);
					//console.log('index = ', index, mh);
					//list.parent('li').height(mh+titH);
					$(this).prevAll().css('border','5px solid red');
				}
				else{
					//console.log('else index = ', index, mh);
					//list.parent('li').height(mh+titH);
				}*/
			});
			$('.w-nav-gnb-total .nav-gnb-total > li').height(mh+titH);
		},
		comGNBInit: function(){
			/* 설명   : GNB, 전체메뉴 셋팅
			   사용처 : pvFrontScript.comHeaderControl(); */

			pvFrontScript.beforeSettingNav();

			//gnb 해외패키지 2dep, 3dep 설정
			if($('.w-header-gnb .nav-gnb #n-gnb-pkg.on').length > 0){
				$('.commonHeaderObject .o-CHO-inner').addClass('no-shadow');
			}

			//gnb 전체메뉴 열고 닫기
			$('.w-header-gnb .nav-gnb .b-total-nav > a').on('click', function(e){
				if($(this).hasClass('on')){
					//$('.w-header-gnb .nav-gnb .w-nav-gnb-total').slideUp('fast');
					$('.w-header-gnb .nav-gnb .w-nav-gnb-total').height(0);
					$(this).removeClass('on');
				}
				else{
					var h = $('.w-header-gnb .nav-gnb .w-nav-gnb-total').prop('scrollHeight');
					$('.w-header-gnb .nav-gnb .w-nav-gnb-total').height(h);
					//$('.w-header-gnb .nav-gnb .w-nav-gnb-total').slideDown('fast');
					$(this).addClass('on');
				}
				e.preventDefault();
			});

			//헤더 퀵모드 검색버튼 click
			if($('.w-header-gnb .b-open-search').length > 0){
				//퀵모드 검색버튼 숨김, 기획전 롤링 숨김(해외패키지, 국내여행)
				if($('.w-header-gnb .nav-gnb #n-gnb-pkg.on, .w-header-gnb .nav-gnb #n-gnb-domestic.on').length > 0){
					$('.w-header-gnb .b-open-search').addClass('hide'); 
					$('.w-header-search .hs-prom-roll').addClass('hide');
					$('.w-header-search .hs-prom-roll .list').slick('unslick');
				}
				else{
					$('.w-header-gnb .b-open-search button').on('click', function(){
						if($('.header-sec-fixed #header-sec .w-header-search').css('display') == 'block'){
						   $('.header-sec-fixed #header-sec .w-header-search').slideUp('fast');
							$(this).removeClass('on');
						}
						else{
						   $('.header-sec-fixed #header-sec .w-header-search').slideDown('fast');
							$(this).addClass('on');
						}
					});
				}
			}
		},
		comCHOTypeInit: function(){
			/* 설명   : 헤더 타입에 따른 설정
			   사용처 : comHeaderControl(); */

			//헤더 퀵모드
			if($('.commonHeaderObject').hasClass('o-CHO-quick')){
				$('.commonHeaderObject .o-CHO-inner').addClass('header-sec-fixed');
				//리본상태
				$('#top-area-sec .top-area-sec').addClass('on');
				$('.w-header-util .hu-control .b-crt.bc-close').addClass('hide'); //리본버튼
			}

			//헤더 풀버전
			if($('.commonHeaderObject').hasClass('o-CHO-full')){
				//리본상태
				$('.w-header-util .hu-control .b-crt.bc-open a').trigger('click'); // 상단 리본 1단계 오픈
			}	
		},
		comHeaderControl: function(){
			/* 설명   : 공통 헤더 컨트롤(상단리본, 공지사항, 스크롤 헤더반응형, 검색UI)
			   사용처 : pvFrontScript.init() 에서 실행 */

			if($('.commonHeaderObject').length > 0){
				//---------------- 헤더 리본
				pvFrontScript.comTopAreaInit();		

				//---------------- 하단 프로모션
				pvFrontScript.comBottomPromInit();				

				//---------------- 헤더 롤링		
				pvFrontScript.onHeaderPromRoll(); 

				//---------------- gnb, 전체메뉴 세팅
				pvFrontScript.comGNBInit();

				//---------------- 헤더 타입
				pvFrontScript.comCHOTypeInit();

				//---------------- commonHeaderObject scroll event
				pvFrontScript.CHOScrollEvent();
			}//..if
		},
		comContents: function(){
			//메인전용
			if($('.w-content-sec.ws-main-sec').length > 0){		
				//메인 추천 프로모션
				var mainSlickSettings, rlcLeftMain, rlcLeftSub1, rlcLeftSub2, rlcRightMain, rlcRightsub1, rlcRightsub2, mSlickPrevBtn, mSlickNextBtn, mSlickCrt, slickOpt = 'slickNext', slickMotionEnd = false, speedMSlick = 50;
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
				}).slick(mainSlickSettings).on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setTimeout(function(){rlcLeftSub1.slick(slickOpt);},speedMSlick);
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
				}).slick(mainSlickSettings).on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setTimeout(function(){rlcRightsub1.slick(slickOpt);},speedMSlick);
				});

				//main sub
				rlcLeftSub1 = $('.rlc-left .rlc-ls-left .list').slick(mainSlickSettings).on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setTimeout(function(){rlcLeftSub2.slick(slickOpt);},speedMSlick);
				});
				rlcLeftSub2 = $('.rlc-left .rlc-ls-right .list').slick(mainSlickSettings).on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setTimeout(function(){rlcRightMain.slick(slickOpt);},speedMSlick);
				});
				rlcRightsub1 = $('.rlc-right .rlc-ls-left .list').slick(mainSlickSettings).on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setTimeout(function(){rlcRightsub2.slick(slickOpt);},speedMSlick);
				});
				rlcRightsub2 = $('.rlc-right .rlc-ls-right .list').slick(mainSlickSettings).on('afterChange', function(event, slick, currentSlide, nextSlide){
					slickOpt = 'slickNext';
					slickMotionEnd = false;
				});

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
					if(!slickMotionEnd){
						if($(this).hasClass('on')){
							//mainSlickMotion('slickPause');
							rlcLeftMain.slick('slickPause');
							$(this).removeClass('on');
							$(this).find('.txt').text('자동재생 버튼');
						}
						else{
							//mainSlickMotion('slickPlay');	
							rlcLeftMain.slick('slickPlay');
							$(this).addClass('on');
							$(this).find('.txt').text('일시정지 버튼');
						}
					}
				});
				//slick opt
				function mainSlickMotion(opt){
					if(slickMotionEnd == false){
						slickMotionEnd = true;
						slickOpt = opt;
						rlcLeftMain.slick(slickOpt);
					}
				}
				// slick dots disable click
				$('.s-rec-promotion .rlc-list-main .slick-dots button').on('click', function(e){e.stopPropagation();}); 
			}//..if

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
					//pvFrontScript.utilSlickCrt($('.srpc-prom .srpc-right .b-slick-crt'), slick); //autoplay control
				}).slick(sectionMainSlickSettings);
			}

			//상시 프로모션
			if($('.s-always-banner').length > 0){
				$('.s-always-banner .ab-list').on('init', function(event, slick){
					pvFrontScript.utilSlickCrt($('.s-always-banner .b-slick-crt'), slick); //autoplay control
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
			if($('.list-item-st1 .tit-over').length > 0){
				$('.list-item-st1 .tit-over').each(function(){
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
		}
	}	
}());

/*
 * document ready
 */
$(function(){	
	pvFrontScript.init();
});
