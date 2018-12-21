/* HTML5 Placeholder jQuery Plugin - v2.3.1
 * Copyright (c)2015 Mathias Bynens
 * 2015-12-16
 * https://github.com/mathiasbynens/jquery-placeholder
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(this);if(d.value===f.attr(h?"placeholder-x":"placeholder")&&f.hasClass(n.customClass))if(d.value="",f.removeClass(n.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(this),i=f.id;if(!d||"blur"!==d.type||!g.hasClass(n.customClass))if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(j){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":i}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":i}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var k=g.data("placeholder-password");k&&(k[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(n.customClass),g[0].value=g.attr(h?"placeholder-x":"placeholder")}else g.removeClass(n.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h=!1,i="[object OperaMini]"===Object.prototype.toString.call(window.operamini),j="placeholder"in document.createElement("input")&&!i&&!h,k="placeholder"in document.createElement("textarea")&&!i&&!h,l=a.valHooks,m=a.propHooks,n={};j&&k?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return n=a.extend({},e,b),this.filter((j?"textarea":":input")+"["+(h?"placeholder-x":"placeholder")+"]").not("."+n.customClass).not(":radio, :checkbox, [type=hidden]").bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=j,g.textarea=k,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(n.customClass)?"":b.value},set:function(b,f){var g,h,i=a(b);return""!==f&&(g=i.data("placeholder-textinput"),h=i.data("placeholder-password"),g?(c.call(g[0],!0,f)||(b.value=f),g[0].value=f):h&&(c.call(b,!0,f)||(h[0].value=f),b.value=f)),i.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):(i.hasClass(n.customClass)&&c.call(b),b.value=f),i):(b.value=f,i)}},j||(l.input=f,m.value=f),k||(l.textarea=f,m.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+n.customClass,this).each(function(){c.call(this,!0,"")});setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){var b=!0;try{"javascript:void(0)"===document.activeElement.toString()&&(b=!1)}catch(c){}b&&a("."+n.customClass).each(function(){this.value=""})}))});

/*!
 * jquery.tooltip.js 0.0.1 - https://github.com/yckart/jquery.tooltip.js
 * The tooltip to use, ready for mobile!
 *
 * Copyright (c) 2013 Yannick Albert (http://yckart.com)
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php).
 * 2013/02/09
*/
(function ($, window, document) {
    'use strict';

    var pluginName = 'tooltip',
        defaults = {
            fade: {
				duration: 300,
				opacity: 1
			},
            fallback: '',
            align: 'autoTop',
            html: true,
            attr: 'title',
            trigger: {
                show: 'ontouchend' in document ? 'touchstart' : 'mouseenter',
                hide: 'ontouchend' in document ? 'touchend' : 'mouseleave'
            },
            delay: {
                show: 0,
                hide: 0
            }
        };

    function Plugin(el, options) {

        options = $.extend({}, defaults, options);

        var elem = $(el),
            timeout;

        elem.on('custom-tooltip:show ' + options.trigger.show, function(){
            $.data(this, 'cancel.custom-tooltip', true);

            var tip = $.data(this, 'active.custom-tooltip');
			var $selector = $(this).attr('class');
            if (!tip) {
                tip = $('<div class="custom-tooltip"><div class="custom-tooltip-inner"/></div>').css({position:'absolute', zIndex:100000});
                $.data(this, 'active.custom-tooltip', tip);
            }

            if (elem.attr('title') || typeof (elem.attr('original-title')) !== 'string') {
                elem.attr('original-title', elem.attr('title') || '').removeAttr('title');
            }

            var title;
            if (typeof options.attr === 'string') {
                title = elem.attr(options.attr === 'title' ? 'original-title' : options.attr);
            } else if (typeof options.attr == 'function') {
                title = options.attr.call(this);
            }
			
            tip.find('.custom-tooltip-inner')[options.html ? 'html' : 'text'](title || options.fallback);

            var pos = $.extend({}, elem.offset(), {width: this.offsetWidth, height: this.offsetHeight});

            tip[0].className = 'custom-tooltip';
            tip.remove().css({
                top: 0,
                left: 0,
                opacity: 0
            }).appendTo(document.body);
			tip.addClass($selector);

            var actualWidth = tip[0].offsetWidth,
                actualHeight = tip[0].offsetHeight,
                dir = options.align === 'autoTop' ?
                      pos.top > ($(document).scrollTop() + $(window).height() / 2) ? 't' : 'b' :
                      pos.left > ($(document).scrollLeft() + $(window).width() / 2) ? 'l' : 'r';

            switch (options.align.charAt(0) === 'a' ? dir : options.align.charAt(0)) {
                case 'b':
                    tip.css({top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('custom-tooltip-bottom');
                    break;
                case 't':
                    tip.css({top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}).addClass('custom-tooltip-top');
                    break;
                case 'l':
                    tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}).addClass('custom-tooltip-left');
                    break;
                case 'r':
                    tip.css({top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}).addClass('custom-tooltip-right');
                    break;
            }

            clearTimeout(timeout);
            tip.stop().delay(options.delay.show).fadeTo(options.fade ? options.fade.duration : 0, options.fade.opacity || 0.8, options.fade.complete);
        });

        elem.on('custom-tooltip:hide ' + options.trigger.hide, function(){
            $.data(this, 'cancel.custom-tooltip', false);
            var self = this;
            timeout = setTimeout(function () {
                if ($.data(self, 'cancel.custom-tooltip')) return;
                var tip = $.data(self, 'active.custom-tooltip');
                if (options.fade) {
                    tip.stop().fadeTo(options.fade.duration, 0, function () {
                        tip.remove();
                        if(options.fade.complete) options.fade.complete(true);
                    });
                } else {
                    tip.remove();
                }
            }, options.delay.hide);
        });
    }

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery, window, document));

/*
 * 설명   : jQuery 메서드 모음
 */
(function ($, window, document, undefined) {
	//탭메뉴
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
}(window.jQuery, window, document));

/*
 * 설명   : comUtil 메서드 모음
 */
var comUtil = window.comUtil || (function(){
	return {
		setCookie: function(name, value, expiredays){
			var today = new Date();
			today.setDate( today.getDate() + expiredays );
			document.cookie = name + "=" + escape( value ) + "; expires=" + today.toGMTString() + "; path=/";
		},
		getCookie: function(name){
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
		},
		checkMobile: function(){
			var isMobile = false;
			var ua = navigator.userAgent.toLowerCase();
			var mobileDevice = new Array('iphone','ipod','ipad','android','blackberry','windows ce','nokia','webos','opera mini','sonyericsson','opera mobi','iemobile');
			for(var i=0;i<mobileDevice.length;i++){
				if(ua.indexOf(mobileDevice[i]) != -1){
					isMobile = true;
				}
			}
			return isMobile;
		},
		checkIos: function(){
			var iosDetect = false;
			var uaCheck = navigator.userAgent.toLowerCase();
			var iosDevice = new Array('iphone','ipod','ipad');
			for(var i=0;i<iosDevice.length;i++){
				if(uaCheck.indexOf(iosDevice[i]) != -1){
					iosDetect = true;
				}
			}
			return iosDetect;
		},
		checkAndroid: function(){
			var ua = navigator.userAgent.toLowerCase(),
			isAndroid;
			if(ua.indexOf('android') > -1) isAndroid = true;
			return isAndroid;
		},
		getURLParameter: function(sParam){
			var sPageURL = window.location.search.substring(1); 
			var sURLVariables = sPageURL.split('&'); 
			for (var i = 0; i < sURLVariables.length; i++) { 
				var sParameterName = sURLVariables[i].split('='); 
				if (sParameterName[0] == sParam) { 
					return sParameterName[1]; 
				} 
			} 
		},
		loadScript: function(src){
			var tag = document.createElement('script');
			tag.src = src;
			var firstScriptTag = document.getElementsByTagName('script')[0];
			firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
		},
		getIframeContent: function(id){
			var ifrm = document.getElementById(id);
			return ifrm.contentWindow || ifrm.contentDocument;
		},
		getRandomInt: function(min, max){
			return Math.floor(Math.random() * (max - min)) + min;
		},
		addComma: function(value){
			$(value).each(function(index){
				$(this).text($(this).text().split(/(?=(?:\d{3})+(?:\.|$))/g).join(','));
			});
		},
		getRatePer: function(min, max, value){
			var range = max - min;
			var tg = value - min;
			var per = tg / range;
			return per * 100;
		},
		getRateValue: function(min, max, per){
			var range = max - min;
			var tg = range * per;
			var value = tg + min;
			return value / 100;
		},
		inpuOnlyNumber: function(obj){
			$(obj).keydown(function(e){
			// Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				// Allow: Ctrl+A
				(e.keyCode == 65 && e.ctrlKey === true) || 
				// Allow: home, end, left, right
				(e.keyCode >= 35 && e.keyCode <= 39)) {

					// let it happen, don't do anything
					return;
			}

			// Ensure that it is a number and stop the keypress
			if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
				e.preventDefault();
			}
		});
		},
		checkIEVersion: function(nnnnn){
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
			} else if(navigator.appName == "Netscape"){                       
				/// in IE 11 the navigator.appVersion says 'trident'
				/// in Edge the navigator.appVersion does not say trident
				if(navigator.appVersion.indexOf('Trident') === -1){ 
					rv = 12; 
				} else {
					rv = 11;	
					$('html').addClass('ie'+rv);
				} 
			} 
		}
	}
}());

/*
 * 설명   : frontScript 메서드 모음
 */
var frontScript = window.frontScript || (function(){
	return {
		init: function(){
			//공통 UI
			frontScript.baseUI($(document));
			
			//공통 체크
			frontScript.comCheck();
			
			//컨텐츠 스크립트 모음
			frontScript.comContents();
		},
		baseUI: function($this){
			/* 설명   : 전역 공통으로 사용하는 UI 
			   사용처 : 기본 전역으로 1번 실행하고 나중에 다른곳에서 재실행 할때 방지되어 있는 구조 */
			
			var _ = $this;
			
			//placeholder(공통 - IE9 이하 부터 실행)
			_.find('.input-base input, .input-base textarea').placeholder();
		},
		comCheck: function(){
			// ios check
			if(comUtil.checkIos() == false){ $("html").addClass("no-ios-device"); }  
			
			//모바일 check
			if(comUtil.checkMobile() == true){ $("html").addClass("is-mobile"); }
			
			//ie 버전체크
			comUtil.checkIEVersion();												  
		},
		comContents: function(){		
			//탭메뉴(공통)
			$('.o-tab-menu').setTabMenu();	
			
			//외부팝업 ajax 호출
			if($('.ajax-popup-link').length > 0){
				$('.ajax-popup-link').magnificPopup({
					type: 'ajax',
					showCloseBtn: false,
					callbacks: {
						parseAjax: function(mfpResponse) {
							mfpResponse.data = $(mfpResponse.data).filter('.o-wrap-popup');
						},
						ajaxContentAdded: function() {
							//console.log('ajaxContentAdded = ', this.content);
						}
					}
				});
			}
			
			//내부팝업 호출
			if($('.ajax-popup-link').length > 0){
				$('.open-popup-link').magnificPopup({
					type:'inline',
					showCloseBtn: false
				});
			}
			
			//팝업 닫기
			$(document).on('click', '.o-wrap-popup .o-popup-close', function (e) {
			  e.preventDefault();
			  $.magnificPopup.close();
			});
		}
	}	
}());

/*
 * document ready
 */
$(function(){	
	frontScript.init();
});