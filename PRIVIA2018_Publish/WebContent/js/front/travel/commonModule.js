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
			
			if(!$chk || $this.hasClass('chk-initialized')){return false;}
			
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
			
			//initialized
			$this.addClass('chk-initialized');
		});
	}
	$.fn.customRadio = function(){
		return this.each(function(){
			var $this = $(this);
			var $radio = $this.find('[type="radio"]');
			var $label = $this.find('label');
			var $name = $radio.attr('name');
			
			if(!$radio || $this.hasClass('radio-initialized')){return false;}
			
			//name 저장
			$label.name = $name;
			
			//checked 유효체크
			if($radio.prop('checked')){
				$label.addClass('on');
			}
			else{
				$label.removeClass('on');
			}
			
			//disabled
			if($radio.prop('disabled')){
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
			
			//initialized
			$this.addClass('radio-initialized');
		});
	}
	$.fn.setTabMenu = function(){
		return this.each(function(){
			var $this = $(this);
			$('.ui-tab-menu a', $this).on('click', function(e){
				if(!$(this).closest('li').hasClass('on')){
					var show = $(this).attr('href');
					$this.find('.tab-on').removeClass('tab-on');
					$this.find(show).addClass('tab-on');
					$('.ui-tab-menu .on', $this).removeClass('on');
					$(this).closest('li').addClass('on');
				}
				e.preventDefault();
			});
		});
	}
	$.fn.overListItemTitle = function(){
		var $this = $(this);
		var $p = $this.closest('ul').parent();
		$p.on('mouseenter', 'ul > li > a' ,function(){
			if($('.tit-over span', this).height() > 30){
				$('.tit-over', this).next().addClass('srpc-hide');
			}
		});
		$p.on('mouseleave', 'ul > li > a' ,function(){
			if($('.tit-over', this).next().hasClass('srpc-hide')){
				$('.tit-over', this).next().removeClass('srpc-hide');
			}
		});
	}
	$.fn.uisSelectList = function(){
		return this.each(function(){
			var $this = $(this);			
			$this.find('.list li a').on('click', function(e){
				if(!$(this).closest('li').hasClass('on')){
					$(this).closest('.uis-list').find('li.on').removeClass('on');
					$(this).closest('li').addClass('on');
				}
				e.preventDefault();
			});
		});
	}
	$.fn.uisCustomNumber = function(setting){
		return this.each(function(){
			var $this = $(this);	
			var type, min, max, $ucn;
			
			//data
			if($this.data('ucn') != undefined){
				type = $this.data('ucn').type || 'undefined';
				min = $this.data('ucn').min || 0;
				max = $this.data('ucn').max || 9999;
			}
			else{
				type = 'undefined';
				min = 0;
				max = 9999;
			}
			
			if(setting){
				chkNnum(setting.num);
			}
			else{
				if($this.hasClass('ucn-initialized')){return false;}
				
				//add class
				$this.addClass('ucn-initialized uis-custom-number-'+type);
				chkNnum(parseInt($this.find('.ucn-num').text()));
				
				//minus
				$this.find('.b-minus button').on('click', function(e){
					if($(this).closest('.ucn-disabled').length > 0){ return false; }
					var c = parseInt($this.find('.ucn-num').text());
					c--;
					chkNnum(c);				
					e.preventDefault();
				});
				//plus
				$this.find('.b-plus button').on('click', function(e){
					if($(this).closest('.ucn-disabled').length > 0){ return false; }
					var c = parseInt($this.find('.ucn-num').text());
					c++;
					chkNnum(c);				
					e.preventDefault();
				});
			}
			
			function chkNnum(c){
			//console.log(type, min, max);
				//min
				if(c <= min){
					c = min;
					$this.find('.b-minus').addClass('ucn-disabled');
				}
				else if(c > min){
					$this.find('.b-minus.ucn-disabled').removeClass('ucn-disabled');
				}

				//max
				if(c >= max){
					c = max;
					$this.find('.b-plus').addClass('ucn-disabled');
				}
				else if(c < max){
					$this.find('.b-plus.ucn-disabled').removeClass('ucn-disabled');
				}
				
				//0
				if(c < 1){
					c = 0;
					$this.find('.ucn-num.on').removeClass('on');
				}
				else if(c > 0){
					$this.find('.ucn-num').addClass('on');
				}

				$this.find('.ucn-num').text(c);
			}
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
			//공통 UI
			pvFrontScript.baseUI($(document));
			
			//공통 헤더 컨트롤(상단리본, 공지사항, 스크롤 헤더반응형, 검색UI)
			pvFrontScript.comHeaderControl(); 

			//컨텐츠 스크립트 모음
			pvFrontScript.comContents();
		},
		baseUI: function($this){
			/* 설명   : 전역 공통으로 사용하는 UI 
			   사용처 : 기본 전역으로 1번 실행하고 나중에 다른곳에서 재실행 할때 방지되어 있는 구조 */
			
			var _ = $this;
			
			//placeholder(공통 - IE9 이하 부터 실행)
			_.find('.input-base').placeholder();

			//체크박스(공통)
			_.find('.chk-base').customCheckbox();

			//라디오버튼(공통)
			_.find('.radio-base').customRadio();

			//셀렉트박스(공통)
			_.find('.select-base').fakeselect();						
		},
		docuMoudownTrigger: function($delay){ 
			/* 설명   : document mousedown 트리거
			   사용처 : 주로 통합 헤더 검색 팝업을 닫을때 사용 */

			var delay = $delay || 0;
			//setTimeout(function(){$(document).mousedown();}, delay);
			$(document).mousedown();
		},
		panelPosition: function(options){
			/* 설명   : 통합 헤더 검색 팝업 노출시 위치 설정(팝업 사이즈, 위치 수정을 프론트에서 관리하기 위해)
			   사용처 : 통합 헤더 검색 팝업 호출시 */
			
			var winBottom, panelPos;

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
			else if($this.closest('.sc-search-box').find('.'+$this.data('panel-name')).length > 0){
				$panel = $this.closest('.sc-search-box').find('.'+$this.data('panel-name'));
			}
			else{
				$panel = $this.closest('.hss-inner-cont').find('.'+$this.data('panel-name'));
			}

			//항공 주요도시
			if($area == 'air-mainsel'){
				$panel.position({
					my: 'left top+92',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont-box')
				});		
			}
			//항공 도시 검색
			if($area == 'air-mainsel-auto'){
				if($this.closest('.places-entry').length > 0){
					$panel.position({
						my: 'left+16 top+70',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.places-entry')
					});	
				}
				else{
					$panel.position({
						my: 'left top+92',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.qsb-cont')
					});	
				}
					
			}
			//항공 캘린더
			if($area == 'air-calendar'){
				//항공 다구간
				if($this.closest('.o-multiway').length > 0){
					$panel.position({
						my: 'left-338 top+92',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.qsb-cont')
					});
				}
			}
			
			//항공 인원,좌석
			if($area == 'air-capacity'){
				if($this.closest('.o-multiway').hasClass('on')){
					_my = 'left top+92';
				}
				else{
					_my = 'left-24 top+92';
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
					my: 'left top+92',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont-box')
				});	
			}
			//호텔 객실
			if($area == 'hotel-capacity'){
				$panel.position({
					my: 'left top+92',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont')
				});	
			}
			
			//투액 주요도시
			if($area == 'freetour-mainsel'){
				$panel.position({
					my: 'left top+92',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont-box')
				});
			}
			
			//투액 대여도시 검색
			if($area == 'freetour-mainsel-auto'){
				if($this.closest('.places-entry').length > 0){
					$panel.position({
						my: 'left-8 top+70',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.places-entry')
					});	
				}
				else{
					$panel.position({
						my: 'left top+92',
						at: 'left top',
						collision: 'none',
						of: $this.closest('.qsb-cont')
					});	
				}
			}
			//투액 인원, 테마, 여행도시(유럽)
			if($area == 'freetour-capacity'){
				if($this.closest('.o-transpass').hasClass('on') && $this.data('panel-name') == 'global-ui-capacity'){
					_my = 'left-24 top+92';
				}
				else{
					_my = 'left top+92';
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
					my: 'left top+92',
					at: 'left top',
					collision: 'none',
					of: $this.closest('.qsb-cont')
				});
			}
					
			if(!$panel.hasClass('on') || $area == null){
				$panel.addClass('on');
			}
			
			//fixed 모드에서 window 하단을 넘어간 경우
			if($('.header-sec-fixed').length > 0){
				winBottom = $(window).scrollTop() + $(window).height();
				panelPos = $panel.offset().top+$panel.height();
				if(panelPos > winBottom){
					var pt = parseInt($panel.css('top'));
					$panel.css('top', pt-(panelPos-winBottom));
				}
			}
			else{
				winBottom = $(window).scrollTop() + $(window).height();
				panelPos = $panel.offset().top+$panel.height();
				if(panelPos > winBottom){
					$('html, body').stop().animate({scrollTop:$(window).scrollTop()+(panelPos-winBottom)}, 500);
				}
			}
		},
		onSelectTxtDay: function($this, dateText, inst){
			/* 설명   : 통합검색 - 선택된 날짜 형식 ex)08월 07일 (화) dayNamesMin 옵션이 있어야함!
			   사용처 : jQuery UI datepicker : onSelect 내부 */

			var sDate = $.datepicker.parseDate($this.datepicker('option', 'dateFormat'), dateText),
				month = (sDate.getMonth()+1) < 10 ? '0' + (sDate.getMonth()+1)  : sDate.getMonth()+1,
				day = sDate.getDate() < 10 ? '0' + sDate.getDate()  : sDate.getDate(),
				dayName = sDate.getUTCDay() < 6 ? $this.datepicker('option', 'dayNamesMin')[sDate.getUTCDay()+1] : $this.datepicker('option', 'dayNamesMin')[0],
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
			/* 설명   : 통합검색 - 출발, 도착지 스타일 구현
			   사용처 : jQuery UI datepicker : beforeShowDay 내부 */
			
			var result = pvFrontScript.jqdHolidayMark(date);
			
			//날짜 마크
			var date1 = $date1;
			var date2 = $date2;
			
			if(date1){
				if(date.getTime() == date1.getTime()){
					if(date2){
						if(date1.getTime() == date2.getTime()){
							result = [true, "dp-highlight dp-same"];
						}
						else{
							result = [true, "dp-highlight dp-first"];
						}
					}
					else{
						result = [true, "dp-highlight"];
					}
				}
				else if(date2){
					if(date.getTime() == date2.getTime()){
						result = [true, "dp-highlight dp-end"];
					}
					else if(date.getTime() > date1.getTime() && date.getTime() < date2.getTime()){
						result = [true, "dp-highlight pd-between"];
					 }
				}
			}
						
			return result;
		},
		beforeShowDayMarkMD: function(date, $dateArr){
			/* 설명   : 통합검색 - 다구간 스타일 구현
			   사용처 : jQuery UI datepicker : beforeShowDay 내부 */

			var result = pvFrontScript.jqdHolidayMark(date);
			
			if($dateArr.length > 0){
				if(date.getTime() > $dateArr[0].getTime() && date.getTime() < $dateArr[$dateArr.length-1].getTime()){
					result = [true, "dp-highlight-md pd-between"];
				}
			
				for(var i in $dateArr){
					var dmDate = $dateArr[i];				
					if(date.getTime() == dmDate.getTime()){
						result = [true, 'dp-highlight-md isMD', $.datepicker.formatDate('yy/mm/dd', dmDate)];
					}
				}
			}

			return result;	
		},
		comSearchEvtBind: function($section){
			/* 설명   : 통합검색 - 섹션별 필요한 이벤트 제공
			   사용처 : 통합헤더 섹션별 UI Event 필요시 호출 */
			
			var section = $section;
			
			//공통 UI
			pvFrontScript.baseUI(section);
		
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

			//캘린더 active, hover 제거
			if(section.find('.sc-ui-search-panel .uis-datepicker').length > 0){
				section.find('.sc-ui-search-panel .uis-datepicker .ui-datepicker-today .ui-state-active').removeClass("ui-state-active"); 
				section.find('.sc-ui-search-panel .uis-datepicker .ui-state-hover').removeClass("ui-state-hover"); 
			}
			
			//capacity uis-capacity-number click(카운팅 기능)
			if(section.find('.sc-ui-search-panel .uis-capacity-number').length > 0){				
				section.find('.uis-custom-number').uisCustomNumber();
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
				section.find('.sc-ui-search-panel.ui-select-list .uis-list').uisSelectList();
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
			if($('.w-header-util .hu-notice .list').length > 0){
				$('.w-header-util .hu-notice .list').slick({
					draggable: false,
					arrows:false,
					dots: false,
					pauseOnHover: true,
					vertical: true,
					autoplay: true,
					autoplaySpeed: 5000
				});	
			}

			//기획전 롤링
			if($('.hs-prom-roll .list li').length <= 1){
				$('.hs-prom-roll .c-slick-dots').remove();
			}
			else{
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

				if($('#top-area-sec .top-area-sec').css('display') == 'block'){
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

			var $CHO, scTop, isFix = false, isHs = false, isTopArea = false, headerSearchH, scUTarget, isNoHeaderSearch = false;
			$CHO = $('.commonHeaderObject');
			
			//헤더 fixed 모드 사용 안하는 경우 
			if($CHO.find('.no-header-fixed').length > 0){ return false; }
			
			if($CHO.find('.no-header-search').length > 0){
				isNoHeaderSearch = true;
			}

			//fixed 모드에서 스크롤시 초기화
			function isFixed(){
				if($('.sc-ui-search-panel.on').length <= 0){
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
					if($('.header-sec-fixed #header-sec .w-header-search').css('display') == 'block' && isHs == false && isNoHeaderSearch == false){
						isHs = true;
						
						//console.log('isFixed() = ', $('.w-header-search').height());
						if(headerSearchH != $('.w-header-search').height() && $('.header-sec-fixed #header-sec .w-header-search').hasClass('is-hide') == false){
							var h = $('.commonHeaderObject').height() + ($('.w-header-search').height() - headerSearchH);
							$('.commonHeaderObject').height(h);
							//console.log('commonHeaderObject = ', h);
						}

						$('.header-sec-fixed #header-sec .w-header-search').slideUp('fast', function(){
							$('#header-sec .w-header-search').attr('style','');
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
					
				}
				
			}

			function pos(){
				scTop = $(window).scrollTop();	
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

					//전체메뉴
					if($('.header-sec-fixed .w-nav-gnb-total').height() > 0 && $('.w-header-gnb .nav-gnb .b-total-nav > a.on').length > 0){
						$('.w-header-gnb .nav-gnb .b-total-nav > a.on').removeClass('on');
						$('.header-sec-fixed .w-nav-gnb-total').height(0);
					}
					
					if(!isNoHeaderSearch){
						//검색영역
						$('.header-sec-fixed #header-sec .w-header-search').hide();

						//검색팝업
						if($('.sc-ui-search-panel.on').length > 0){
							$('.sc-ui-search-panel.on').removeClass('on');
						}
					}
					
					//해외패키지인경우
					if($('.w-header-gnb .nav-gnb #n-gnb-pkg.on').length > 0){
						$('.w-nav-gsub-ly').addClass('fixed-ngs-ly');
						$('.w-nav-gsub-ly').hide();
						$('.w-nav-gsub-ly').fadeIn('fast');
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
					
					if(!isNoHeaderSearch){
						//검색영역
						if($('#header-sec .w-header-search').hasClass('is-hide')){
							$('#header-sec .w-header-search').hide();	
						}
						else{
							$('#header-sec .w-header-search').show();
						}
						
						//퀵버전 검색버튼
						if($('.w-header-gnb .b-open-search button.on').length > 0){
							$('.w-header-gnb .b-open-search button.on').removeClass('on');
						}
					}
					
					//해외패키지인경우
					if($('.w-nav-gsub-ly.fixed-ngs-ly').length > 0){
						$('.w-nav-gsub-ly.fixed-ngs-ly').removeClass('fixed-ngs-ly');
					}

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
				
				//자유,해외패키지 상세페이지 스크롤시 헤더 처리
				if($('.w-header-gnb .nav-gnb #n-gnb-pkg.on').length > 0 || ('.w-header-gnb .nav-gnb #n-gnb-domestic.on').length > 0){
					var $hd = $('.commonHeaderObject .header-sec-fixed');
					var $hdH = $('.commonHeaderObject .header-sec-fixed').height();
					var $targetSub;
					if($('.freedirect-detail .search-pos').length > 0){
						$targetSub = $('.freedirect-detail .search-pos').offset().top;
					}				
					if($('#the_iframe').length > 0){
						$targetSub = $('#the_iframe').offset().top+882;
					}

					if($targetSub-$hdH > scTop){
						$hd.css({'top' : '0px'});
						if($('.w-header-gnb .nav-gnb #n-gnb-pkg.on').length > 0 && $('.w-nav-gsub-ly').css('display') == 'none'){
							$('.w-nav-gsub-ly').show();
						}
					}
					if($targetSub-$hdH < scTop && $targetSub > scTop){
						$hd.css({'top' : $targetSub-$hdH-scTop+'px'});
						if($('.w-header-gnb .nav-gnb #n-gnb-pkg.on').length > 0 && $('.w-nav-gsub-ly').css('display') == 'block'){
							$('.w-nav-gsub-ly').hide();
						}
					}
					if($targetSub < scTop){
						$hd.css({'top' : '-100%'});
						if($('.w-header-gnb .nav-gnb #n-gnb-pkg.on').length > 0 && $('.w-nav-gsub-ly').css('display') == 'block'){
							$('.w-nav-gsub-ly').hide();
						}
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
			}

			$('.w-nav-gnb-total .nav-gnb-total').append(totalNav);

			//높이설정
			var mh = 0;
			var titH = $('.w-nav-gnb-total .nav-gnb-total .tit a').outerHeight();
			$('.w-nav-gnb-total .nav-gnb-total > li ').each(function(index){
				var list = $(this).find('.list');
				mh = (mh < list.outerHeight()) ? list.outerHeight() : mh;
				if(index == 5){
					$('.w-nav-gnb-total .nav-gnb-total > li').height(mh+titH);	
				}
			});
			$('.w-nav-gnb-total .nav-gnb-total > li:eq(5)~').height(mh+titH);
		},
		comGNBInit: function(){
			/* 설명   : GNB, 전체메뉴 셋팅
			   사용처 : pvFrontScript.comHeaderControl(); */

			pvFrontScript.beforeSettingNav();

			//gnb 전체메뉴 열고 닫기
			$('.w-header-gnb .nav-gnb .b-total-nav > a').on('click', function(e){
				if($(this).hasClass('on')){
					$('.w-header-gnb .nav-gnb .w-nav-gnb-total').height(0);
					$(this).removeClass('on');
				}
				else{
					var h = $('.w-header-gnb .nav-gnb .w-nav-gnb-total').prop('scrollHeight');
					$('.w-header-gnb .nav-gnb .w-nav-gnb-total').height(h);
					$(this).addClass('on');
					
					if($('.w-header-gnb .b-open-search button.on').length > 0){
					   $('.w-header-gnb .b-open-search button.on').trigger('click');
					}
				}
				e.preventDefault();
			});

			//헤더 퀵모드 검색버튼 click
			if($('.w-header-gnb .b-open-search').length > 0){
				//퀵모드 검색버튼 숨김, 기획전 롤링 숨김(해외패키지, 국내여행)
				if($('.w-header-gnb .nav-gnb #n-gnb-pkg.on, .w-header-gnb .nav-gnb #n-gnb-domestic.on').length > 0){
					$('.commonHeaderObject .o-CHO-inner').addClass('no-header-search');
					$('.w-header-gnb .b-open-search').addClass('hide'); 
				}
				else{
					$('.w-header-gnb .b-open-search button').on('click', function(){
						if($('#header-sec .w-header-search').css('display') == 'block'){
							$('#header-sec .w-header-search').slideUp('fast');
							$(this).removeClass('on');
							if(!$('.commonHeaderObject.o-CHO-quick .o-CHO-inner').hasClass('header-sec-fixed')){ 
								$('.commonHeaderObject.o-CHO-quick .w-header-search').addClass('is-hide');
							}
						}
						else{
							$('#header-sec .w-header-search').slideDown('fast');
							$(this).addClass('on');
							if(!$('.commonHeaderObject.o-CHO-quick .o-CHO-inner').hasClass('header-sec-fixed')){ 
								$('.commonHeaderObject.o-CHO-quick .w-header-search.is-hide').removeClass('is-hide');
							}
							
							if($('.w-header-gnb .nav-gnb .b-total-nav > a.on').length > 0){
								$('.w-header-gnb .nav-gnb .b-total-nav > a.on').trigger('click');
							}
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
				$('.commonHeaderObject.o-CHO-quick .w-header-search').addClass('is-hide');
			}

			//헤더 풀버전
			if($('.commonHeaderObject').hasClass('o-CHO-full')){
				//리본상태
				$('.w-header-util .hu-control .b-crt.bc-open a').trigger('click'); // 상단 리본 1단계 오픈
			}	
			else{
				//리본상태
				$('.w-header-util .hu-control .b-crt.bc-close').addClass('hide'); //리본버튼
			}
		},
		comHeaderControl: function(){
			/* 설명   : 공통 헤더 컨트롤(상단리본, 공지사항, 스크롤 헤더반응형, 검색UI)
			   사용처 : pvFrontScript.init() 에서 실행 */

			if($('.commonHeaderObject').length > 0){
				//---------------- 헤더 리본
				pvFrontScript.comTopAreaInit();		

				//---------------- 헤더 타입
				pvFrontScript.comCHOTypeInit();
				
				//---------------- gnb, 전체메뉴 세팅
				pvFrontScript.comGNBInit();
				
				//---------------- 헤더 롤링		
				pvFrontScript.onHeaderPromRoll(); 

				//---------------- commonHeaderObject scroll event
				pvFrontScript.CHOScrollEvent();
				
				//---------------- 하단 프로모션
				pvFrontScript.comBottomPromInit();				
			}//..if
		},
		comContents: function(){
			//탭메뉴(공통)
			$('.o-tab-menu').setTabMenu();	
			
			//타이틀 오버시 텍스트2줄 노출
			$('.list-item-st1 .tit-over').overListItemTitle();
			
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
						return '<button type="button" data-role="none" role="button" tabindex="'+i+'" class="btn"><span>'+txt+'</span></button>';
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
				if($('.s-always-banner .ab-list li').length <= 1){
					$('.s-always-banner .ab-crt').remove();
				}
				else{
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
			}			
		},
		mainContents: function(){
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
						autoplay: true,
						autoplaySpeed: 15000
					});
				}).slick(mainSlickSettings).on('beforeChange', function(event, slick, currentSlide, nextSlide){
					setTimeout(function(){rlcLeftSub1.slick(slickOpt);},speedMSlick);
				});

				//main right
				rlcRightMain = $('.rlc-right .rlc-list-main .list').on('init', function(event, slick){
					slick.slickSetOption({
						dots: true,
						appendDots: $('.rlc-right .rlc-list-main .c-slick-dots'),
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
