/*
 * 함수명 : jQuery 메서드 모음
 * 설명   : jQuery cookie 메서드
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
				//0
				if(c < 1){
					c = 0;
					$this.find('.ucn-num.on').removeClass('on');
				}
				else if(c > 0){
					$this.find('.ucn-num').addClass('on');
				}

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

				$this.find('.ucn-num').text(c);
			}
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
}(window.jQuery, window, document));

/* 함수명 : rangeSliderUI (jQuery plugin)
 * 설명   : 범위 슬라이더
 * 사용법 : 가격범위 슬라이더
 * REFS  : /html_mobile/pkg/B000_PU03.html
 */
(function($){
	$.fn.rangeSliderUI = function(options){
		var _opt = $.extend({
			minVal :0, 
			maxVal :100
		},options);	

		return this.each(function(){
			var _this = this;
			var minVal = _opt.minVal;
			var maxVal = _opt.maxVal;

			//초기값 셋팅
			$(".set-init-range .min .num", _this).html(numberSetComma(minVal));
			$(".set-init-range .max .num", _this).html(numberSetComma(maxVal));
			$(".rangeMin", _this).val(minVal);
			$(".rangeMax", _this).val(maxVal);
			$(".rangeMin", _this).prop("min", minVal);
			$(".rangeMax", _this).prop("min", minVal);
			$(".rangeMin", _this).prop("max", maxVal);
			$(".rangeMax", _this).prop("max", maxVal);
			$(".range-slider", _this).rangeslider('refresh');    

			//슬라이드 event
			$(".rangeMin", _this).change(function(){
				$(".set-init-range .min .num", _this).html(numberSetComma($(this).val()));
			});		
			$(".rangeMax", _this).change(function(){
				$(".set-init-range .max .num", _this).html(numberSetComma($(this).val()));
			});
		});

		function numberSetComma(val){
			while (/(\d+)(\d{3})/ .test(val.toString())){
				val = val.toString().replace( /(\d+)(\d{3})/, '$1' + ',' + '$2' );
			}
			return val;
		}
	};
})(jQuery);

/* 함수명 : updownRoll (jQuery plugin)
 * 설명   : 공지사항 롤링
 * 사용법 : 공지사항 게시물이 1개씩 위아래 롤링
 * REFS  : /html_mobile/customer/PTM_R0001.html
 */
(function($){
	$.fn.updownRoll = function(options){
		var defaults = $.extend({
			autoPlayTime :3000,
			aniSpeed :500
		},options);		
		return this.each(function(){
			var $this       = $(this),
				$mask       = $this.find('.mask'),
				$rollWrap   = $mask.find('ol'),
				$unit       = $rollWrap.find('li'),
				$unitH      = $unit.eq(0).outerHeight(),
				$cloneUnit  = $unit.eq(0).clone().addClass('add-last'),
				unitMaxH    = $unit.size() * $unitH,
				rollWrapH   = 0,
				isoverCheck = false,
				interT,
				$autoPlayTime = defaults.autoPlayTime,
				$aniSpeed = defaults.aniSpeed;
			
			if ($unit.length < 2 == true) {return;} //2개 이상부터 롤링시작
			$mask.css({overflow:'hidden',height:$unitH});
						
			$rollWrap.append($cloneUnit);
			$($this).hover(function(){
				isoverCheck = true;
				$this.addClass('on');
			},function(){
				if(isoverCheck) $rollWrap.css('margin-top',rollWrapH);
				isoverCheck = false;
				$this.removeClass('on');
			}); 

			function autoPlay(){
				if(!isoverCheck) next();
			}

			function next(){				
				if($unit.is(':animated')) return false;
				rollWrapH = parseInt($rollWrap.css('margin-top'));
				if(rollWrapH <= -unitMaxH){
					rollWrapH = 0;
					$rollWrap.css('margin-top',rollWrapH);
				}
				rollWrapH = rollWrapH-$unitH
				$rollWrap.stop().animate({'margin-top':rollWrapH},$aniSpeed);
			}
			interT = setInterval(autoPlay,$autoPlayTime);
		});
	}
})(jQuery);

//	$(window).hashchange( function(){
/* 전체 공통(항공+호텔) script --------------------------------------------------------------- */
//CSS3 애니메이션 지원 체크
var testBrowserProp = function(opt) {
	var prfx;
	switch (opt) {
		case 'transition' :
			prfx = 'webkitTransition oTransition msTransition transition'.split(' ');
		break;
		case 'transform'  :
			prfx = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
		break;
		case 'animation'  :
			prfx = 'webkitAnimation oanimation msAnimation animation'.split(' ');
		break;
		default:
			//
		break;
	}
    for(var i = 0; i < prfx.length; i++) {
        if(document.createElement('div').style[prfx[i]] !== undefined) {
            return prfx[i];
        }
    }
    return false;
}
//모바일 구분 체크 : 모바일일 경우 불리언값(true 반환)
var mobileCheck = function(){
	var ua = navigator.userAgent.toLowerCase(),
	device = ['iphone','ipod','ipad','android'],
	isMobile;
	for(var i=0; i<device.length; i++){
		if(ua.indexOf(device[i]) > -1) isMobile = true;
	};
	return isMobile;
};
var androidCheck = function(){
	var ua = navigator.userAgent.toLowerCase(),
	isAndroid;
	if(ua.indexOf('android') > -1) isAndroid = true;
	return isAndroid;
};
//안드로이드 input[type="number"] placeholder 버그 회피
var inputNumberFix = function(){
	$("input[type='number']").each(function(index, element) {
		element.type = "text";
		element.onfocus = function(){this.type="number";};
		element.onblur = function(){this.type="text";};
	});
};

/*
	선택 대화상자 전용(하드코딩 or url 로드) : 항공/호텔 검색결과 리스트 필터에서 사용(/html_mobile/dialogue.html)
	
	#28838 내부팝업호출(/html_mobile/pkg/PTM_B003.html)
	#1 : DOM 내부 호출인 경우 팝업의 위치를 body 영역으로 보낸다
	#2 : opt == false(내부 팝업) 경우 html 삭제하지 않는다, url은 다시 DOM을 불러오기 때문에 html 삭제
	#3 : .dialogue_pop 자신이 선택되어지면 close 실행
*/
var oriPopup = null; //내부팝업 위치 저장
var popContScrollMode = null; //팝업 isscroll 저장
var beforePopSC = $(window).scrollTop(); //팝업 scroll 위치 저장
var selectPop = {
	init : function(id,url){
		var popup = $("#" + id);
		
		//팝업 scroll 위치 저장
		beforePopSC = $(window).scrollTop(); 
		
		//내부팝업 위치 저장
		if(oriPopup != null){
			oriPopup = null;
		}
		oriPopup = popup.parent();
		
		if(popup.length == 0){
			$("body").append($('<div id="'+id+'" class="popWrap"/>'));
		}
		else{
			$("body").append(popup); //#1
		}
		
		popup.show();
		
		if(url){
			selectPop.draw(id,url);
		}
		
		selectPop.open(id);
		
		var btn_close = popup.find(".btnClose > a");
		btn_close.die("click").live("click",function(){
			if(url){
				selectPop.close(id,true);
			}else{
				selectPop.close(id);
			}
			return false;
		});
		
		$(".dialogue_pop").off('mouseup').on('mouseup',function(e){
			//console.log(e.target === this, e.target);
			//if (popup.has(e.target).length === 0){
			if (e.target === this || $(e.target).hasClass('popWrap-mfix')){ //#3
				if(url){
					selectPop.close(id,true);
				}else{
					selectPop.close(id);
				}
			}
		});
	},
	open : function(id){
		var popup = $("#" + id);
		popup.wrap('<div class="dialogue_pop"/>');
		popup.parent(".dialogue_pop").show(function(){
			if(popup.hasClass('popWrap-fix')){
				$(this).addClass('dialogue_pop_fix');
			}
			if(popup.hasClass('popWrap-mfix')){
				$(this).addClass('dialogue_pop_mfix');
			}
			popup.show();
			selectPop.position(id);
			$(this).fadeTo(200,1);
		});
	},
	draw : function(id,url){
		var popup = $("#" + id);
		popup.empty().load(url,function(){
			var html = popup.find(".popWrap").html();
			if(popup.find(".popWrap-sec").length > 0){
				popup.addClass('popWrap-sec');
			}
			if(popup.find(".popWrap-secV2").length > 0){
				popup.addClass('popWrap-secV2');
			}
			if(popup.find(".popWrap-fix").length > 0){
				popup.addClass('popWrap-fix');
			}
			if(popup.find(".popWrap-mfix").length > 0){
				popup.addClass('popWrap-mfix');
			}
			popup.empty().html(html);
			selectPop.position(id);
			$('.input_text').removeRequired();
		});
		/*
		$.ajax({
			url: url,
			type: "post",
			dataType: "html",
			success: function (data) {
				popup.empty().html(data);
				var html = popup.find(".popWrap").html();
				popup.empty().html(html);
				selectPop.position(id);
			},
			error : function(xhr, status, error){
				alert("데이터를 불러오지 못했습니다.")
			}
		});
		*/
	},
	position : function(id){
		var popup = $("#" + id),
		winHeight = window.innerHeight || $(window).height();
		docHeight = Math.max($(document).height(), $("body").height(), winHeight),
		popHeight = popup.outerHeight(),
		docScroll = $("html,body").scrollTop() || $("body").scrollTop(),
		paddingTop = (winHeight - popHeight) / 2 + docScroll;
		popup.parent(".dialogue_pop").height(docHeight).css("padding-top",paddingTop);
		
		//fix 모드인경우 화면 중앙에 위치
		if(popup.hasClass('popWrap-fix')){
			popup.css("margin-top",-(popHeight / 2));
		}
		
		//팝업 스크롤 적용		
		if(popup.find(".popCont-iscroll").length > 0){
			//$('.ui-page-active').css({overflow:'hidden',position:'fixed',width:'100%'}).bind('touchmove', function(e){e.preventDefault();});
			//$('body').bind('touchmove', function(e){e.preventDefault()});
			//$(document).bind('touchmove', function(e){e.preventDefault()});
			//$(document).on('scrollstop');
			//$(document).on('scrollstop', function(e){e.preventDefault()});
			setTimeout(function(){$('.popWrap-mfix').addClass('loaded');},300);
		}
		
		//iscroll
		/*if(popup.find(".popCont-iscroll").length > 0){
			$('.ui-page-active').css({overflow:'hidden',position:'fixed',width:'100%',height:'100%'}).bind('touchmove', function(e){e.preventDefault();});
			setTimeout(function(){
				popContScrollMode = new IScroll('#' + id + ' .popCont-iscroll', {
					mouseWheel: true,
    				scrollbars: true,
    				interactiveScrollbars: true,
					shrinkScrollbars: 'scale'
				});
			}, 250);
		}*/

	},
	close : function(id, opt){
		var popup = $("#" + id);
		
		//팝업 스크롤 이벤트 제거
		if(popup.find(".popCont-iscroll").length > 0){
			$('.popWrap-mfix').removeClass('loaded');
			//$('.ui-page-active').attr('style','');
			//$('.ui-page-active').unbind('touchmove');
			//$('body').unbind('touchmove');
			//$(document).unbind('touchmove', function(e){e.preventDefault()});
			//$(document).off('scrollstop');
			//$(document).off('scrollstop');
		}
		
		//iscroll
		/*if(popup.find(".popCont-iscroll").length > 0){
			$('.ui-page-active').attr('style','');
			$('.ui-page-active').unbind('touchmove');
			popContScrollMode.destroy();
			popContScrollMode = null;
		}*/
		
		$(window).scrollTop(beforePopSC); //이전 스크롤 재위치
		
		popup.parent(".dialogue_pop").fadeTo(200,0,function(){
			popup.parent(".dialogue_pop").hide();
			//if(opt){
			//	popup.parent(".dialogue_pop").remove();
			//}else{
			//	popup.hide().unwrap().html("");
			//}
			
			//#2
			if(!opt){
				popup.hide().unwrap();
				oriPopup.append(popup); //내부팝업 위치 원복
				
			}else{
				popup.hide().unwrap().html("");
			}
		});
	}
};
//선택 대화상자 생성 
//'selectAireLine','항공사 선택', 'checkbox', ['전체','아시아나항공','대한항공','진에어','제주항공'], ['val1', 'val2', 'val3', 'val4', 'val5'],  0, true, 'functionName','functionVar'
//예: 항공/호텔 검색결과 필터 레이어팝업 그려주는 함수 (/html_mobile/dialogue.html)
var selectDialogue = function(popid, title, type, label, vars, checkednum, initialization, func, var1, var2, var3, var4, var5, researchnum){
	var idCheck,
	nameCheck,
	value,
	checked = checkednum,
	alreadyOpen = false;
	
	if(!initialization && $("#" + popid).attr("data-role-checked")){ //초기화가 false고 data-role-checked 값이 비어있지 않은 경우
		checked = $("#" + popid).attr("data-role-checked").split(",").map(Number);
		alreadyOpen = true;
	}
    
    //결과내재검색 체크된 값 표시 추가
    if(researchnum != null && typeof(researchnum) != "undefined"){
        checked = researchnum;
        alreadyOpen = true;
    }
    
	var html = '';
	html += '<header class="popHead">';
	html += '	<h1 class="tit">'+ title +'</h1>';
	html += '	<span class="btnClose"><a href="#">닫기</a></span>';
	html += '</header>';
	html += '<section class="popCont">';
	html += '	<div class="itemSelect">';
	html += '		<ul>';
	for(var i=0; i<label.length; i++){
		idCheck = popid + "Chk" + i;
		type == 'radio' ? nameCheck = popid + "Chk" : nameCheck = popid + "Chk" + i;
		vars ? value = vars[i] : value = i;
		if(alreadyOpen){
			if(checked[i]){
				html += '		<li><input type="'+ type +'" id="'+ idCheck +'" name="'+ nameCheck +'" class="chk" value="'+ value +'" checked /><label for="'+ idCheck +'">'+label[i]+'</label></li>';
			}else{
				html += '		<li><input type="'+ type +'" id="'+ idCheck +'" name="'+ nameCheck +'" class="chk" value="'+ value +'" /><label for="'+ idCheck +'">'+label[i]+'</label></li>';	
			}
		}else{
			if(checked != false && checked == i + 1 && !alreadyOpen){
				html += '		<li><input type="'+ type +'" id="'+ idCheck +'" name="'+ nameCheck +'" class="chk" value="'+ value +'" checked /><label for="'+ idCheck +'">'+label[i]+'</label></li>';
			}else{
				html += '		<li><input type="'+ type +'" id="'+ idCheck +'" name="'+ nameCheck +'" class="chk" value="'+ value +'" /><label for="'+ idCheck +'">'+label[i]+'</label></li>';	
			}
		}
	}
	html += '		</ul>';
	html += '	</div>';
	html += '	<div class="btnArea">';
	html += '		<span class="btn medium action"><input type="button" value="적용" /></span>';
	html += '	</div>';
	html += '</section>';
	
	if($("#" + popid).length == 0){
		$("body").append($('<div id="'+popid+'" class="popWrap"/>').html(html));
	}else{
		$("#" + popid).html(html);
	}
	
	//내부팝업 위치 저장
	if(oriPopup != null){
		oriPopup = null;
	}
	oriPopup = $("#" + popid).parent();

	//전체선택 동작
	if(type == "checkbox" && (label[0].indexOf("전체") == 0 || vars[0] == "all")){	 //타입이 체크박스이고, 라벨 첫번째 값에 '전체' 단어가 포함되거나, 변수 첫번째 값이 0일 경우 동작 처리(당연히 전체선택은 첫번째 체크박스)
		//초기화가 true이거나 팝업이 처음 생성되었을 경우, checked값이 첫번째일 경우 전체 체크박스 checked 처리
		if((initialization || !$("#" + popid).attr("data-role-checked")) && checked == 1){
			$("#" + popid).find("input[type='checkbox']").prop("checked", true);
		}
		$("#" + popid).find("input[type='checkbox']").change(function(){
			if($(this).parent("li").index() == 0){
				$(this).prop("checked") ? $("#" + popid).find("input[type='checkbox']").prop("checked", true) : $("#" + popid).find("input[type='checkbox']").prop("checked", false);
			}else{
				$(this).parents("ul").find("> li").eq(0).find("input[type='checkbox']").prop("checked", false)
			}
		});
	}
	selectPop.open(popid);
	
	//닫기 버튼 클릭
	var btnClose = $("#" + popid).find(".btnClose > a"),
	btnConfirm = $("#" + popid).find(".btnArea input");
	btnClose.one("click",function(){
		if(!initialization){
			var checkedBool = new Array();
			$("#" + popid).find(".itemSelect input").each(function(index, element) {
				$(this).is(":checked") ? checkedBool.push(1) : checkedBool.push(0);
			});
			$("#" + popid).attr("data-role-checked",checkedBool)
		}
		initialization ? selectPop.close(popid,true) : selectPop.close(popid);
		return false;
	});
	$(".dialogue_pop").one('mouseup',function(e){
		if ($("#" + popid).has(e.target).length === 0){
			if(!initialization){
				var checkedBool = new Array();
				$("#" + popid).find(".itemSelect input").each(function(index, element) {
					$(this).is(":checked") ? checkedBool.push(1) : checkedBool.push(0);
				});
				$("#" + popid).attr("data-role-checked",checkedBool)
			}
			initialization ? selectPop.close(popid,true) : selectPop.close(popid);
		}
	});
	
	//적용 버튼 클릭
	btnConfirm.one("click",function(){
		var valueCheck;
		if(type == 'radio'){
			valueCheck = $("#" + popid).find(".itemSelect input.chk:checked").val();
		}else{
			valueCheck = new Array();
			$("#" + popid).find(".itemSelect input.chk:checked").each(function(index, element) {
				valueCheck.push($(this).val());
			});
		}
		var customFunc = '',
		customFunc = func;
		window[customFunc](valueCheck, var1, var2, var3, var4, var5);
		if(!initialization){
			var checkedBool = new Array();
			$("#" + popid).find(".itemSelect input").each(function(index, element) {
				$(this).is(":checked") ? checkedBool.push(1) : checkedBool.push(0);
			});
			$("#" + popid).attr("data-role-checked",checkedBool)
		}
		initialization ? selectPop.close(popid,true) : selectPop.close(popid);
		return false;
	});
	
};
//전체화면 레이어 팝업
var layerPopup = {
	open : function(id){
		var elem = $("#" + id),
		winHeight = window.innerHeight || $(window).height();
		docHeight = Math.max($(document).height(), $("body").height()),
		docScroll = $("html,body").scrollTop() || $("body").scrollTop(),
		popHeight = 0,
		btnClose = elem.find('.headWrap .leftArea > a'),
		bgModal = $('.bg_layerpop');
		elem.addClass('layerPopWrapper').show(function(){
			popHeight = elem.height();
			if(popHeight < docHeight - docScroll){
				elem.height(docHeight - docScroll)
			}
			bgModal.height(Math.max(docHeight, winHeight)).show().fadeTo(500,1);
			
			elem.css({
				opacity : 1,
				top : docScroll + winHeight + 10
			}).animate({scrollTop:0},300,function(){
				$(this).attr("style","")
				$(this).css({
					height : docHeight + docScroll,
					scrollTop : 0,
					opacity : 1
				})
			});
		});
		//btnClose.one('click',function(){
			//layerPopup.close(id);
			//return false;
		//});
	},
	close : function(id){
		var elem = $("#" + id),
		winHeight = window.innerHeight || $(window).height(),
		docScroll = $("html,body").scrollTop() || $("body").scrollTop(),
		closeTop = winHeight + docScroll + 10;
		bgModal.fadeTo(500,0,function(){$(this).hide().css("height","0")});
		elem.animate({top:closeTop},300,function(){
			$(this).attr("style","").css({top:closeTop}).hide().removeClass('layerPopWrapperAni');
		});
	}
};
//required 스타일 삭제 - 추후 디테일한 기능 변경 가능
//예:서식요소의 class 제어 (/html_mobile/sample.html 서식요소 참고)
$.fn.removeRequired = function(option){
	return $(this).each(function(){
		var _this = $(this),
		obj,
		req,
		cls = _this.attr("class"),
		tag = _this.children()[0].tagName.toLowerCase();
		if(_this.find("input, select").hasClass("required")){
			req = true;
		}
		if(tag == "select"){
			obj = _this.find("select");
			obj.change(function(){
				_this.removeClass('required');
				if(req) $(this).removeClass("required");
			});
		}else{
			obj = _this.find("input[type='text'], input[type='tel'], input[type='email'], input[type='number'], input[type='password'], textarea")	
			obj.focus(function(){
				if(_this.hasClass("blank")) _this.removeClass("blank");
				if(req) $(this).removeClass("required");
			});
			obj.blur(function(){
				if($(this).val() == ""){
					if(_this.hasClass("lnk")){
						_this.removeClass("blank");
					}else{
						_this.removeClass("blank").addClass("blank");
					}
					if(req) $(this).addClass("required");
				}
			});
		}
	});
}
//예약상세,결제정보 펼치기
//예:주로 예약/결제화면에서 사용(/html_mobile/air/PTM_I0017.html) 
$.fn.reserveToggle = function(){		
	return $(this).each(function(){		
		var $this = $(this);
		var $launcher = $this.find('.launcher >a');
		$launcher.off().on('click',function(){
			var $thisHref = $(this).attr('href');
			if($(this).parents('.section').hasClass('open')){
				$($thisHref).slideToggle(200,function(){
					$(this).parents('.section').removeClass('open');
				});
			}else{
				$($thisHref).slideToggle(200);
				$(this).parents('.section').addClass('open');
			}
			return false;
		});
	});
}
// 최근검색레이어(항공/호텔)
function schHistory(){
	var $wrap = $('.schHistory');
	var $launcher = $wrap.find('.tit > a');
	var $list = $wrap.find('#history');
	var contentsSpace = $('.contentWrap').css('padding-bottom').split('px')[0];
	var headerSpace = $('.headWrap').height();
	var isopen = false;
	var screenH;
	var docH;
	$launcher.off('click').on('click',function(){
		var $item = $list.find('> ul > li').size();
		screenH = $.mobile.getScreenHeight();
		docH = $.mobile.getScreenHeight() - headerSpace - contentsSpace;
			//console.log(docH);

		//$wrap.css({'z-index':91});
		if(isopen == true){
			closeLayer();
		}else{
			if($item == 0){
				$('> ul',$list).append('<li class="nodata">최근 검색한 내용이 없습니다.</li>');
			}
			$('.bg_layerpop').css({'z-index':'89',height:screenH+'px'}).fadeTo(300,1);
			$wrap.addClass('open');
			$('.ui-page-active .contentWrap').css({height:docH+'px',overflow:'hidden',position:'fixed',width:'100%',height:'100%'}).bind('touchmove',function(e){e.preventDefault();});
			isopen = true;
		}	
		$('.bg_layerpop').off('click').on('click',function(){
			if($('.schHistory').hasClass('open')){closeLayer();}
		});
		return false;
	});
	$(document).bind('pagebeforeshow','[class$="ui-page-active"]',function(){
		closeLayer();
	});		
	function closeLayer(){
		$('.ui-page-active .contentWrap').attr('style','');
		$('.ui-page-active .contentWrap').unbind('touchmove');
		time_off = setTimeout(function(){
			$wrap.removeClass('open');
			$('.bg_layerpop').fadeTo(300,0,function(){
				$(this).hide();	
				$('.bg_layerpop').css({'z-index':'90'});
			});
		},200);
		isopen = false;
	}
}
//토글리스트
//예:FAQ 또는 공지사항에서 사용(/html_mobile/customer/PTM_F0001.html)
$.fn.toggle = function(){		
	return $(this).each(function(){		
		var $this = $(this);
		var $launcher = $this.find('.launcher');
		$launcher.off().on('click',function(){
			var $thisHref = $(this).attr('href');
			$($thisHref).slideToggle(200);
			$(this).toggleClass('open');
			return false;
		});
	});
}
/* imgPreload 함수 / 인자에 이미지 경로를 배열 형태로 던진다 preload(['경로1','경로2']) */
var imgPreload = function(imgArray) {
    $(imgArray).each(function(){
        $('<img/>')[0].src = this;
    });
}
/* preLoader 함수
 * 프리로더 호출 - preLoader.load();
 * 프리로더 중지(삭제) - preLoader.remove();*/
//예:/html_mobile/preloader.html 참고
var preLoader = {
	load : function(text,airpromoBool,type,url){
		var winHeight = window.innerHeight || $(window).height(),
		docHeight = Math.max($(document).height(), $("body").height(), winHeight),
		docScroll = $("html,body").scrollTop() || $("body").scrollTop(),
		loaderHeight = 480,
		posLoader = (winHeight - loaderHeight) / 2 + docScroll,
		speed = 300,
		url = url,
		text = text || '검색 결과 로딩중입니다.',
		tg = $("body");
		
		//$('html, body').addClass('no_scroll');
		$('body').bind('touchmove', function(e){e.preventDefault()});
		var html = '';
		if(airpromoBool == undefined || airpromoBool == false){
			html += '<div class="loader">';
			html += '	<span><img src="/images/front/mtravel/common/ico_loading.gif" alt="로딩중"></span>';
			html += '	<strong><img src="/images/front/mtravel/common/txt_loading.png" width="730" height="242" alt="현대카드 PRIVIA 여행"></strong>';
			html += '	<p>'+text+'</p>';
			html += '</div>';
			html += '<span class="va"></span>';
		} else {
			html += '<div class="loader">';
			
			if(type == 4){ //해외호텔(??)
				html += '	<p style="padding:0"><img src="/images/front/mtravel/cont/loading_int_hotel.png" alt="" style="width:229px;"></p>';
			}
			else if(type == 5){ //국내호텔(??)
				html += '	<p style="padding:0"><img src="/images/front/mtravel/cont/loading_dom_hotel.png" alt="" style="width:229px;"></p>';
			}
			else if(type == 6){ //해외패키지(??)
				html += '	<span><img src="/images/front/mtravel/common/ico_loading.gif" alt="로딩중"></span>';
				html += '	<strong><img src="/images/front/mtravel/common/txt_loading.png" width="730" height="242" alt="현대카드 PRIVIA 여행"></strong>';
				html += '	<p style="padding-top:10px;padding-bottom:10px;">'+text+'</p>';
				html += '	<p style="padding:0"><img src="/images/front/mtravel/cont/loading_int_pkg.png" alt="" style="width:229px;"></p>';
			}
			else if(type == 'urlOut'){ //이미지경로(static버전)
				html += '	<span><img src="http://static.priviatravel.com/images/front/mtravel/common/ico_loading.gif" alt="로딩중"></span>';
				html += '	<strong><img src="http://static.priviatravel.com/images/front/mtravel/common/txt_loading.png" width="730" height="242" alt="현대카드 PRIVIA 여행"></strong>';
				html += '	<p style="padding-top:10px;padding-bottom:10px;">'+text+'</p>';
				if(url != ''){
					html += '	<p style="padding:0"><img src="'+url+'" alt="" style="width:229px;"></p>';   
				}
			}
			else if(type == 'url'){ //이미지경로
				html += '	<span><img src="/images/front/mtravel/common/ico_loading.gif" alt="로딩중"></span>';
				html += '	<strong><img src="/images/front/mtravel/common/txt_loading.png" width="730" height="242" alt="현대카드 PRIVIA 여행"></strong>';
				html += '	<p style="padding-top:10px;padding-bottom:10px;">'+text+'</p>';
				html += '	<p style="padding:0"><img src="'+url+'" alt="" style="width:229px;"></p>';
			}
			else if(type == 'imgOnly'){ //오직 이미지
				html += '	<p style="padding:0"><img src="'+url+'" alt="" style="width:229px;"></p>';
			}
			else{
				html += '	<span><img src="/images/front/mtravel/common/ico_loading.gif" alt="로딩중"></span>';
				html += '	<strong><img src="/images/front/mtravel/common/txt_loading.png" width="730" height="242" alt="현대카드 PRIVIA 여행"></strong>';
				html += '	<p>'+text+'</p>';
			}
			
			html += '</div>';
			html += '<span class="va"></span>';
		}
        
        tg.append($('<div class="preLoaderDimm"/>').css("height",docHeight).show());
		tg.append($('<div class="preLoaderContainer"/>').html(html).css({top:posLoader}).show());
        
		/* 프리로더가 끝난 후에 스크롤 작동하고 멈추는 이슈 발생
			프리로더가 사라졌으면 스크롤 이벤트 끔 <- 왜 사용하는지 모르겠으나 우선 다른 이벤트에 영향을 주기 때문에 주석처리
		$(document).on("scrollstop",function(event){
			if(!$(".preLoaderContainer").is(":visible")){
				$(document).off("scrollstop");
				return false;
			}else{
				//preLoader.position($(".preLoaderContainer"),loaderHeight,speed);
			}
		});
		*/
	},
	remove : function(){
		var speed = 150;
		$('body').unbind('touchmove');
		/*
		$(".preLoaderContainer").fadeTo(speed,0,function(){
			$(this).remove();
		});
		$(".preLoaderDimm").fadeTo(speed,0,function(){
			$(this).remove();
		});
		*/
		$(".preLoaderContainer").hide(0,function(){
			$(this).remove();
		});
		$(".preLoaderDimm").hide(0,function(){
			$(this).remove();
		});
	},
	position : function(obj,loaderHeight,speed){
		var top = ((window.innerHeight || $(window).height()) - loaderHeight) / 2 + ($("html,body").scrollTop() || $("body").scrollTop());
		obj.stop();
		setTimeout(function(){
			obj.stop().animate({top:top},speed * 2)	
		},200);
	}
}
//메뉴보기
//예:상단 우측 메뉴 버튼(/html_mobile/layout.html 참고)
function gnb(){
	var $menuButton = $('.headWrap .btnMenu, .w-header-sec .ly-right .b-gnb');
	var $gnb = $('.gnbArea');
	var $closeGNB = $('.gnbArea .btnClose');
	var headAreaH = $('.headWrap').height();
	var isopen =false;
	var duration = 300;
	var time_off;
	var docH;
	
	// GNB 열기버튼 클릭
	/*if($('div#mIndex').length > 0){
		$menuButton = $('.styleMain .bx header > a');
	}*/
	$menuButton.live('click',function(){
		if(!isopen){	
			//if($('div#mIndex').length > 0 || $('.wrap-tsp .tab-search-pkg').length > 0){
			if($('.wrap-tsp .tab-search-pkg').length > 0){
				docH = $.mobile.getScreenHeight();
			}else{
				docH = $('div[class$="ui-page-active"]').height() + headAreaH;
			}
			var gnbH = $.mobile.getScreenHeight();
			$('.bg_layerpop').css({height:docH+'px'}).fadeTo(200,1);
			$gnb.css({height:gnbH+'px'}).show(0,function(){
				$(this).addClass('open');
				$(this).css({'min-height':'100px',height:'100%','overflow-y':'auto'});
				$(this).scrollTop(0);
				$('body').css({position:'relative'});
				/*if($('div#mIndex').length > 0){
					$('.main-wrap').css({overflow:'hidden',position:'fixed',width:'100%',height:'100%'}).bind('touchmove', function(e){e.preventDefault();});
				}
				else */
				if($('.wrap-tsp .tab-search-pkg').length > 0){
                    $('html,body').css({overflow:'hidden',position:'fixed',width:'100%',height:'100%'});
				}else{
                    $('.ui-page-active').css({overflow:'hidden',position:'fixed',width:'100%',height:'100%'}).bind('touchmove', function(e){e.preventDefault();});
				}
			});
			//isopen = true;
			$('.bg_layerpop').off('vclick').on('vclick',function(){
				if($('.gnbArea').hasClass('open')){
					closeGnb();
				}
			});
			return false;	
		}
	});
	// GNB 닫기버튼 클릭
	$closeGNB.off('click').on('click',function(){
		if($('.gnbArea').hasClass('open')){closeGnb();}
	});
	// 페이지이동하면 메뉴 숨기기
	$(document).bind('pagebeforeshow','[class$="ui-page-active"]',function(){
		if($('.gnbArea').hasClass('open')){closeGnb();}
	});		
	function closeGnb(){
		$('body').attr('style','');		
		/*if($('div#mIndex').length > 0){
			$('.main-wrap').attr('style','');
			$('.main-wrap').unbind('touchmove');
		}else */
		if($('.wrap-tsp .tab-search-pkg').length > 0){
			$('html,body').attr('style','');
		}else{
            $('.ui-page-active').attr('style','');
			$('.ui-page-active').unbind('touchmove');
		}
		$gnb.removeClass('open');
		time_off = setTimeout(function(){
			$('.gnbArea').hide();
			$('.bg_layerpop').fadeTo(200,0,function(){
				$(this).hide();	
			});
		},duration);
		$('.gnbHolder .gnb .suboff').removeClass('suboff').addClass('subon');
		$('.gnbHolder .gnb >li >ul').hide(1000);
		isopen = false;
	}
	// GNB 하위메뉴 펼치기
	var $dep1 = $('.gnbHolder .gnb .subon >a');
	$dep1.off().on('click',function(){
		var $thishref = $(this).attr('href');
		if($(this).parent().hasClass('suboff')){
			$(this).next('ul').slideUp(300);
			$(this).parent().removeClass('suboff').addClass('subon');
		}else{
			$(this).next('ul').slideDown(300);
			$(this).parent().removeClass('subon').addClass('suboff');
		}
		return false;
	});
}
//top버튼 : 일정 스크롤높이를 넘어가면 top 버튼 노출
function topBtn(){
	var scrolltop;
	var topHtml = '<a href="#top" class="btn_toppos" style="display:none;" title="맨위로 이동">TOP</a>'
	if($('.btn_toppos').size() > 0){
		$('.btn_toppos').remove();
		$('body').append(topHtml);
	}else{
		$('body').append(topHtml);
	}
	var checkTop = setInterval(top,100);
	function top(){
		scrolltop = $(window).scrollTop();
		if(scrolltop > 150){
			$('.btn_toppos').show();	
		}else{
			$('.btn_toppos').hide();	
		}
	}
	$('.btn_toppos').on('click',function(){
		//document.body.scrollTop = 0;
		$("html,body").scrollTop(0) || $("body").scrollTop(0);
		return false;
	});	
}
//모달처리 : 메뉴버튼 클릭 시 dimm처리
function bgLayerPop(){
	var bg = '<div class="bg_layerpop"/>'
	if($('.bg_layerpop').size() > 0){
		$('.bg_layerpop').remove();
		$('body').append(bg);
	}else{
		$('body').append(bg);
	}
}
//iOS인경우 입력박스 포커스 시 header fixed 버그
function adjust_ios_header(){
	if(navigator.userAgent.match(/(iPod|iPhone|iPad)/)){		
		var $targetEl = $('textarea, select, input:not([type="button"])');
		var headerH = $('.headWrap').height();
		var st;

		/*if($('div#mIndex').length > 0){
			headerH = $('.main-banner').height();
		}*/
		$targetEl.on('focus',function(){
			st = $("html,body").scrollTop() || $("body").scrollTop();
			/*if($('div#mIndex').length > 0){
                    $('.headWrap').parents('.main-header').css({position:'relative'});
			}else{
			}*/
				if(headerH < st){
					$('.headWrap').hide();
				}else{
					$('.headWrap header').css({position:'absolute'});
				}
		});
		$targetEl.on('blur',function(){
			/*if($('div#mIndex').length > 0){
                if(headerH < st){
                    $('.headWrap').parents('.main-header').removeAttr('style');
                }else{
                    $('.headWrap').parents('.main-header').removeAttr('style');
                }
			}else{
			}*/
				if(headerH < st){
					$('.headWrap').show();
				}else{
					$('.headWrap header').css({position:'fixed'});
				}
		});
	}else {
		return;
	}
}

//앱에서 메뉴버튼 클릭
function toggleGnb() {
	var $menuButton = $('.headWrap .btnMenu');
	$menuButton.trigger("click");
	return true;
};

/* 항공 script --------------------------------------------------------------- */
// 스케줄보기 : 항공 스케쥴 선택 자세히보기 (/html_mobile/air/PTM_I0013.html)
$.fn.lyExpand = function(openTxt,closeTxt,contHeight){		
	return $(this).each(function(){		
		var $this = $(this);
		var $expandBtn = $this.find('.btnMore > a');
		var $expandWrap = $this.find('.expand_ly');
		var $expandCont = $this.find('.expand_ly .expand_cont');
		var expandWraptH = parseInt(contHeight || 24);
		var expandContH;
		$expandBtn.off('click').on('click',function(){
			expandContH = $this.find('.expand_ly .expand_cont').outerHeight();
			if($(this).parents('.expand_ly').hasClass('opened')){
				$expandWrap.animate({
					height : expandWraptH+'px'
				},200,function(){
					$expandWrap.removeClass('opened');
					$expandCont.hide();
				});
				$(this).text(closeTxt);
			}else{
				$expandWrap.addClass('opened');
				$expandCont.show(0,function(){
					$expandWrap.animate({
						height : expandContH + expandWraptH	+'px'
					},200,function(){
						$expandWrap.focus();
					});
				});
				$(this).text(openTxt);
			}
		});
		$(document).bind('pagebeforeshow','[class$="ui-page-active"]',function(){
			$('.expand_ly').removeClass('opened').css({height:expandWraptH+'px'});
			$('.expand_ly .expand_cont').hide();
		});		
	});
}
// 항공검색 다구간인경우 전체보기
function intervalMore(){
	var $intervalWrap = $('.searchInfo .interval');
	var $intervalWrapUL = $intervalWrap.find(' > ul');
	var $intervalLine = $intervalWrapUL.find(' > li');
	var lineLength = $intervalLine.size();
	//var allHeight = $intervalWrapUL.height();
	var defaultHeight = $intervalWrap.height();
	var $moreBtn;
	var isopen = false;
	if($('.searchInfo .interval .more').size() > 0){
		$('.searchInfo .interval').find('.more').remove();
	}else{
		$intervalWrap.prepend('<span class="more"><button type="button">다구간 전체보기</button></span>');
	}
	if(lineLength > 2){
		$intervalWrap.addClass('open');
		$moreBtn = $intervalWrap.find('.more button');
		$moreBtn.on('click',function(){
			if(isopen == true){
				$intervalWrap.animate({
					height : defaultHeight	
				},150);
				$(this).parent().removeClass('close');
				isopen = false;
			}else{
				$intervalWrap.animate({
					height : $('.searchInfo .interval > ul').height()	
				},150);
				$(this).parent().addClass('close');
				isopen = true;	
			}
		});
	}
}
// 국제선 예약정보보기
function reserveInfo(){
	var defaulH = $('.subjAir').height();
	var allH = $('.subjAir .searchInfo').height();
	var isopen = false;
	$('.f_subjAir .searchInfo .interval').removeClass('open');
	$('.f_subjAir .searchInfo .head').on('click',function(){
		if(isopen == true){
			$(this).parents('.f_subjAir').animate({
				height : defaulH
			},200);
			$(this).removeClass('open');
			isopen = false;
		}else{
			$(this).parents('.f_subjAir').animate({
				height : allH
			},200);
			$(this).addClass('open');
			isopen = true;
		}
	});
}
// 탑승인원 
$.fn.pushMem = function(option){
	var params = $.extend({
		range : 1,
		minnum : 0,
		maxnum : 9
	},option);
	return $(this).find('.range').each(function(){
		var $this = $(this);
		var $value = $this.find('input[type="text"]');
		var $plus = $this.find('.plus');
		var $minus = $this.find('.minus');
		var sum;
		
		$value.removeAttr('disabled');
		$value.attr('readonly',true);
		$plus.off('click').on('click',function(){
			sum = parseInt($value.val()) + params.range;
			if(sum > params.maxnum){
				//alert('최대인원은 9명입니다.');
				return false
			}
			$value.val(sum);
		});
		$minus.off('click').on('click',function(){
			sum = parseInt($value.val()) - params.range;
			if($this.parent('li').hasClass('adult')){
				if(sum == 0){
					alert('성인은 최소 1명 이상 탑승해야 합니다.');
					return false;
				}
			}
			if(sum < params.minnum){
				//alert('최소인원은 0명입니다.');
				return false
			}
			$value.val(sum);
		});
	});
}
// 예약내용보기 
function reserveComplete(){
	var allH = $('.reserveComplete').height();
	var defaultH = 40;
	$('.reserveComplete').css({height:defaultH+'px'})
	$('.reserveComplete').on('click',function(){
		if($('.reserveComplete').hasClass('open')){
			$(this).animate({
				height : defaultH+'px' 	
			},300);
			$(this).removeClass('open');
		}else{
			$(this).animate({
				height : allH+'px' 	
			},300);
			$(this).addClass('open');
		}
	});		
}
//호텔
//class="htlholder" textarea placeholder 하위디바이스호환처리
function textareaCtrl(){
	var isWritten = false;
	$('.htlholder').focus(function(){
		if(isWritten == false){
			$(this).val('');
		}
	});
	$('.htlholder').blur(function(){
		if($(this).val() == ''){
			$(this).val('- 동반 아동의 이름, 나이를 기입해 주시고 예약 담당자의 확인을 받으시기 바랍니다.\n- 취소불가능 조건 예약의 경우 반드시 예약담당자와 확인 후 진행해 주시기 바랍니다. 예약후 아동 동반 규정으로 인한 취소/변경 불가하오니 유의 바랍니다.');
			$(this).parent().addClass('blank');
			isWritten = false;
		} else {
			isWritten = true;
		}
	});
}
//우편번호
function zipCode(){
	$('.zipcode .listType2 a').on('click',function(){
		if($(this).next().is(':hidden')){
			$('.zipcode-detail').hide();
			$(this).next().show();
		}
		else{
			$('.zipcode-detail').hide();
		}
	})
}


/*	
 * 함수명 : GetURLParameter
 * 설명   : url 파라미터값 가져오기
 * 사용처 : GetURLParameter(parameter);
 * 작성자 : 권순환
 *
 */
function GetURLParameter(sParam){ 
	var sPageURL = window.location.search.substring(1); 
	var sURLVariables = sPageURL.split('&'); 
	for (var i = 0; i < sURLVariables.length; i++) { 
		var sParameterName = sURLVariables[i].split('='); 
		if (sParameterName[0] == sParam) { 
			return sParameterName[1]; 
		} 
	} 
}

/*	
 * 함수명 : setMoveTop
 * 설명   : 컨텐츠를 top위치시킨다
 * 사용처 : setMoveTop(, 갭);
 * 작성자 : 권순환
 *
 */ 
function setMoveTop($obj, $gap){
	try{
		var top = $($obj).offset().top;
		$('html, body').scrollTop(top - $gap);
	}catch(e){}
}

/*	
 * 함수명 : setPromotionEvent
 * 설명   : 모바일 프로모션에서 퀵검색, 앵커이동 처리 이벤트
 * 사용처 : document.ready 구문에 실행함수 탑재.
 * 작성자 : 권순환
 *
 */ 
$.fn.setPromotionEvent = function($offsetY){	
	var _offsetY = $('.headWrap .header').innerHeight();
	return $(this).each(function(){
		var href = $(this).attr('href');
		
		//퀵검색
		if(href == '#toggleTotalSearchAir' || href == '#toggleTotalSearchHotel'){
			$(this).click(function(){
				if(href == '#toggleTotalSearchAir'){
					//항공일때
					var comp = $(this).attr('comp');
					if(comp != null && comp.toUpperCase() == 'C'){
						//비즈니스석
						window.location = 'http://m.priviatravel.com/mIndex.lts?tab_flag=AIRINT';
					}
					else {
						//일반석
						window.location = 'http://m.priviatravel.com/mIndex.lts?tab_flag=AIRINT';
					}
				}else if(href == '#toggleTotalSearchHotel'){
					//호텔일때
                    var region = $(this).attr('region');
                    if(region == 'DOM'){
                        window.location = 'http://m.priviatravel.com/mIndex.lts?tab_flag=HTLDOM';    
                    }
                    else{
                        window.location = 'http://m.priviatravel.com/mIndex.lts?tab_flag=HTLINT';    
                    }
					
				}
				return false;
			});
		}
		else {
			//앵커처리
			if(href != null && href.indexOf('#') > -1){
				$(this).find('label').click(function(e){e.stopPropagation()});
				try{
					var top = $(href).offset().top;
					$(this).attr('data-ajax', 'false');	
					$(this).click(function(e){
						var t = $(href).offset().top;
						$('html, body').scrollTop(t - _offsetY);
						e.preventDefault();
					});
				}catch(e){}
			}
		}
	});
}

/*
 * 함수명 : changeMobileImg
 * 설명   : 모바일 프로모션에서 모바일 버전 이미지 교체
 * 사용처 : document.ready 구문에 실행함수 탑재.
 * 작성자 : 권순환
 *
 */ 
$.fn.changeMobileImg = function(){	
	if(mobileCheck() == true){
		$(this).each(function(){
			var $img = $(this);
			if($img.attr('data-mobile-src') != null){
				$img.attr('src', $(this).attr('data-mobile-src'));
			}
		});	
	}
}

/*
 * 함수명 : clickNewOpenUrl
 * 설명   : 모바일환경에서 새창열림 (관련일감참조 #11825)
 * 사용처 : document.ready 구문에 실행함수 탑재.
 * 작성자 : 권순환
 *
 */ 
$.fn.clickNewOpenUrl = function(){	
	return $(this).each(function(){
		$(this).off('click').click(function(e){
			//이미지를 새창에서 열고 이미지 클릭시 닫는 기능(현재 아이폰앱 에서 실행이 되지 않는다)
			//var url = "http://static.priviatravel.com/html_mobile/preview-img.html?src=" + $(this).attr('src'); 
			
			var url;			
			if($(this).attr('href')){
				url = $(this).attr('href');
			}
			else if($(this).attr('src')){
				url = $(this).attr('src');
			}
			
			/*if (typeof openMobileBrowser !== 'undefined') {
				openMobileBrowser(url,'');
			}
			else{				
				window.open(url, '_blank');
			}*/
			
			if( typeof(PriviaTravelApp) == "undefined") {
				window.open(url);
				return false;
			}else{
				if(isIOS){
					window.location ="priviatravel://openBrowser?url="+url;
				}else{
					PriviaTravelApp.openBrowser(url);
				}
			}
			
			e.preventDefault();
		});
	});	
}

/*
 * 함수명 : setPromotionSupport
 * 설명   : 모바일 프로모션뷰 이슈 처리
 * 사용처 : /html_mobile/promotion/PTM_P1002.html
 * 작성자 : 권순환
 *
 */ 
function setPromotionSupport(){
	//$('.promotionView .pb-switchable-img').changeMobileImg();
	$('.promotionView a').setPromotionEvent();
	$('.pb-enlargable-img, .pb-btn[target="_blank"]').clickNewOpenUrl();
}

/*
 * 함수명 : selectList
 * 설명   : 리스트 선택 UI(동작만을 위한것임)
 * 사용처 : /html_mobile/customer/PTM_C0003-1-new.html
 * 작성자 : 권순환
 *
 */
$.fn.selectList = function(option){
	return $(this).each(function(){
		var _this = $(this);
		var _select = _this.find('.select > a');
		var _list = _this.find('.list > li > a');
		_select.on('click', function(e){
			if($(this).parent().hasClass('on')){
				_this.find('.list').slideUp('fast');
				$(this).parent().removeClass('on');
			}
			else{
				_this.find('.list').slideDown('fast');
				$(this).parent().addClass('on');
			}
			e.preventDefault();
		});
		_list.on('click', function(e){
			var t = $('.info1',this).text();
			_select.text(t);
			_select.click();
			e.preventDefault();
		});
	});
}


//초기실행함수
function init(){	
	$('header').removeAttr('id');
	$('.contentWrap > div#contentArea').attr('id','');
	
	//#22927 제휴사에서 404에러, 이함수가 어디에 필요한지 모르겠음
	//imgPreload(['/images/front/mtravel/common/ico_loading.gif','/images/front/mtravel/common/txt_loading.png']) //프리로더 관련 이미지 프리로딩
	
	if(androidCheck()) inputNumberFix(); //안드로이드인 경우 input[type="number"] placeholder 버그 회피 함수 호출
	bgLayerPop(); //모달처리
	topBtn(); //TOP버튼
	gnb(); //메뉴보기
	zipCode(); //우편번호
	$('.input_text').removeRequired();
	adjust_ios_header();
	
	if(typeof AIR_HTL_FLAG == 'undefined'){
		AIR_HTL_FLAG = 'ETC';
	}
	
	switch(AIR_HTL_FLAG){
		case 'AIR' :
			airInit();
			break;
		case 'HTL' :
			hotelInit();
			break;
		case 'PKG' :
			pkgInit();
			break;
		case 'ETC' :
			etcInit();
			break;
	}
	
	pvmFrontScript.init();
}
//항공인 경우에 실행
function airInit(){
	$('#sortingArea ul > li').toggle(); //결과내 검색
	reserveInfo();
	//reserveComplete();
	intervalMore(); //항공 다구간인 경우 전체보기 
	var itemListClickable = $("section.list > section.item > header");
	$('.priceDetail').toggle(); //요금상세
	$('.reserveInfo .section').reserveToggle(); //예약상세내용 토글리스트
	schHistory() //최근검색
}
//호텔인 경우에 실행
function hotelInit(){
	$('#sortingArea ul > li').toggle(); //결과내 검색
	//reserveComplete();
	$('.priceDetail').toggle(); //요금상세
	$('.reserveInfo .section').reserveToggle(); //예약상세내용 토글리스트
	schHistory() //최근검색
	textareaCtrl();
}
//그외 경우에 실행
function etcInit(){
	$('#sortingArea ul > li').toggle(); //결과내 검색
	reserveInfo();
	$('.priceDetail').toggle(); //요금상세
	$('.reserveInfo .section').reserveToggle(); //예약상세내용 토글리스트
	$('.toggleList').toggle(); //토글리스트
}
//패키지 경우에 실행
function pkgInit(){
	$('#sortingArea ul > li').toggle(); //결과내 검색
	reserveInfo();
	$('.priceDetail').toggle(); //요금상세
	$('.reserveInfo .section').reserveToggle(); //예약상세내용 토글리스트
	$('.toggleList').toggle(); //토글리스트
	pkgSearchGnb();
}

//패키지 검색 페이지
function pkgSearchGnb(){
	if($('.wrap-tsp .tab-search-pkg').length > 0){
		var isDialog = true;		
		var isFix = false;		
		var sp = 500;
		var scTop = null;
		var scUTarget = null;
		var scDTarget = null;		
		var headH = null;		
		
		$(document).off('scroll').on('scroll', function(){
			headH = $('.headWrap').height();
			scTop = $(document).scrollTop() + headH;
			scUTarget = $('.wrap-tsp .tab-search-pkg').offset().top;
			scDTarget = $('.wrap-tsp').offset().top + ($('.wrap-tsp').height() - $('.wrap-tsp .tab-search-pkg').height());
				
			//팝업 on
			if($('.ui-dialog').hasClass('ui-page-active') && isDialog == false){
				$('.wrap-tsp').addClass('tsp-ond');
				isDialog = true;
			}
			
			//팝업 off
			if(!$('.ui-dialog').hasClass('ui-page-active') && isDialog == true){
				$('.wrap-tsp').removeClass('tsp-ond');
				isDialog = false;
			}
			
			if(!$('.wrap-tsp').hasClass('tsp-onf')){
				//fixed
				if(scUTarget <= scTop && isFix == false){
					$('.wrap-tsp').addClass('tsp-on');
					$('.wrap-tsp .headWrap').removeClass('hdw-st2'); 
					
					if($('.f-point2').length > 0){
						$('.f-point2 .s-state-pkg').addClass('fix');
						$('.f-point2').css({'padding-top':'76px'});
					}
					isFix = true;
					
					//#30336
					if($('.wrap-tsp .swiper-container').hasClass('on')){
						$('.wrap-tsp .headWrap').show();
					}
				}

				//relative
				if(scDTarget > scTop && isFix == true){
					$('.wrap-tsp').removeClass('tsp-on');
					$('.wrap-tsp .headWrap').addClass('hdw-st2'); 
					
					if($('.f-point2').length > 0){
						$('.f-point2 .s-state-pkg').removeClass('fix');
						$('.f-point2').css({'padding-top':'0'});
					}
					isFix = false;
					
					if($('.wrap-tsp .swiper-container').hasClass('on')){
						$('.wrap-tsp .headWrap').hide();
					}
				}				
			}			
		});
		
		$('.wrap-tsp .tab-search-pkg li a').off('click').on('click', function(e){			
			//$('html,body').stop().animate({scrollTop:scUTarget-headH+1},sp);
			$('html,body').stop().animate({scrollTop:$('.ui-page-active').offset().top-96},sp);
			
			if(!$('.wrap-tsp').hasClass('tsp-onf')){
				if($('.wrap-tsp .headWrap').css('display') == 'none'){ $('.wrap-tsp .headWrap').show(); }
				
				if(isFix == false){
					$('.wrap-tsp h3.tit').stop().animate({'margin-top':'-100%'},sp);
					$('.wrap-tsp .btn-eme-inv').stop().animate({'top':'-100%'},sp);
					$('.wrap-tsp .btn-swiper-next').stop().animate({'top':'-100%'},sp);
					$('.wrap-tsp').stop().animate({'height':'97px'},sp);
					$('html,body').stop().animate({scrollTop:0},sp, function(){
						$('.wrap-tsp').addClass('tsp-on tsp-onf');
						$('.wrap-tsp .headWrap').removeClass('hdw-st2'); 
					});
				}
				
				if(isFix == true){
					$('.wrap-tsp').addClass('tsp-on tsp-onf');
					$('.wrap-tsp .headWrap').removeClass('hdw-st2'); 
					$('.wrap-tsp h3.tit').css({'margin-top':'-100%'});
					$('.wrap-tsp .btn-eme-inv').css({'top':'-100%'});
					$('.wrap-tsp .btn-swiper-next').css({'top':'-100%'});
					$('.wrap-tsp').css({'height':'97px'});
					$('html,body').stop().animate({scrollTop:0},sp);
				}
			}

			if(!$(this).hasClass('on')){
                var url = $(this).attr('href');
                $('.wrap-tsp .tab-search-pkg li a.on').removeClass('on');
                $(this).addClass('on');								
				$('.tab-search-pkg').width($(window).width());
				
				$.mobile.changePage(url, {
					transition : "slide"
				});
				
				/*setTimeout(function(){
					$.mobile.changePage(url, {
						transition : "slide"
					});
				}, 800);*/
            }
			e.preventDefault();
		});
		
		$('.wrap-tsp .headWrap .logo img, .wrap-tsp .headWrap .btn-pkg-back').off('click').on('click', function(e){
			if($('.wrap-tsp.tsp-onf').length > 0){
				$('.wrap-tsp .headWrap').addClass('hdw-st2'); 
				$('.wrap-tsp').removeClass('tsp-on tsp-onf');
				$('.wrap-tsp h3.tit').css({'margin-top':'0'});
				$('.wrap-tsp .btn-eme-inv').css({'top':'20px'});
				$('.wrap-tsp .btn-swiper-next').css({'top':'15.02732240437158%'});
				$('.wrap-tsp').css({'height':'90%'});
			}
			$('html,body').stop().animate({scrollTop:0},sp);
			e.preventDefault();
		});
		
		$('.wrap-tsp').addClass('tsp-ond');
		$('.tab-search-pkg').removeAttr('style');
		
		$('.tab-search-pkg li a.on').removeClass('on');
		if($('#pkgSearch01.ui-page-active').length > 0){
			$('.tab-search-pkg li').eq(0).find('a').addClass('on');
		}
		else if($('#pkgSearch02.ui-page-active').length > 0){
			$('.tab-search-pkg li').eq(1).find('a').addClass('on');
		}
		else if($('#pkgSearch03.ui-page-active').length > 0){
			$('.tab-search-pkg li').eq(2).find('a').addClass('on');
		}	
		
		if($('.wrap-tsp .swiper-container').length > 0 && $('.wrap-tsp .swiper-container .swiper-slide-active').length <= 0){
			var tspSwiper = new Swiper('.wrap-tsp .swiper-container', {
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 15,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				on: {
					slideChange: function(swiper, event){
						var s = $('.wrap-tsp h3.tit, .wrap-tsp .btn-eme-inv, .wrap-tsp .btn-swiper-next, .wrap-tsp .headWrap');
						if(tspSwiper.realIndex == 0){
							$('.wrap-tsp .swiper-container').removeClass('on');
							s.fadeIn('fast');
						}
						else{
							$('.wrap-tsp .swiper-container').addClass('on');
							s.fadeOut('fast');
						}
					}
				}
			});
			tspSwiper.prependSlide('<div class="swiper-slide"><span class="swiper-slide-empty"></span></div>');
			tspSwiper.slideTo(0, 0, false);
			$('.wrap-tsp .btn-swiper-next a').off('click').on('click', function(){
				tspSwiper.slideTo(1);
			});
		}
	}	
}

$(document).on('pageshow','.ui-page-active',init);

/* --------------------- 개편 --------------------------------- */
/*
 * 설명   : pvmFrontScript 메서드 모음
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
var pvmFrontScript = window.pvmFrontScript || (function(){
	// 데이터 추가 시 유의점 : 중복되는 날짜 key 값이 존재할 경우 year에 || 처리한다.
	// ex) 2016년 9월 14일이 공휴일(추석연휴)이고 2019년 9월 14일도 공휴일(추석연휴)일 경우
	//     "0914":{title:"추석연휴",year:"2016 || 2019"},
	var holidays = {
		"0606":{title:"현충일",year:""},
		"0501":{title:"근로자의날",year:""},
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
		"20180507":{title:"대체휴가",year:"2018"},
		"20180522":{title:"석가탄신일",year:"2018"},
		"20180613":{title:"지방선거",year:"2018"},
		"20180925":{title:"추석연휴",year:"2018"},
		"20180923":{title:"추석연휴",year:"2018"},
        "20180926":{title:"대체휴일",year:"2018"},
		"20190205":{title:"설날",year:"2019"},
		"20190512":{title:"석가탄신일",year:"2019"},
		"20190204":{title:"설연휴",year:"2019"},
		"20190506":{title:"대체휴가",year:"2019"},
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
	
	return {
		init: function(){
			//공통 UI
			//pvmFrontScript.baseUI($(document));
			pvmFrontScript.comContentsV2();
		},
		baseUI: function($this){
			/* 설명   : 전역 공통으로 사용하는 UI 
			   사용처 : 기본 전역으로 1번 실행하고 나중에 다른곳에서 재실행 할때 방지되어 있는 구조 */
			
			var _ = $this;

			//체크박스(공통)
			//_.find('.chk-base').customCheckbox();

			//라디오버튼(공통)
			//_.find('.radio-base').customRadio();
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
		onSelectTxtDaySt2: function($this, dateText, inst){
			/* 설명   : 통합검색 - 선택된 날짜 형식 ex)02.04
			   사용처 : jQuery UI datepicker : onSelect 내부 */

			var sDate = $.datepicker.parseDate($this.datepicker('option', 'dateFormat'), dateText),
				month = (sDate.getMonth()+1) < 10 ? '0' + (sDate.getMonth()+1)  : sDate.getMonth()+1,
				day = sDate.getDate() < 10 ? '0' + sDate.getDate()  : sDate.getDate(),
				txt = month + '.' + day;
			return txt;
		},
		onSelectTxtDaySt3: function($this, dateText, inst){
			/* 설명   : 통합검색 - 선택된 날짜 형식 ex)02.04(목)
			   사용처 : jQuery UI datepicker : onSelect 내부 */

			var sDate = $.datepicker.parseDate($this.datepicker('option', 'dateFormat'), dateText),
				month = (sDate.getMonth()+1) < 10 ? '0' + (sDate.getMonth()+1)  : sDate.getMonth()+1,
				day = sDate.getDate() < 10 ? '0' + sDate.getDate()  : sDate.getDate(),
				dayName = sDate.getUTCDay() < 6 ? $this.datepicker('option', 'dayNamesMin')[sDate.getUTCDay()+1] : $this.datepicker('option', 'dayNamesMin')[0],
				txt = month + '.' + day + '('+dayName+')';
			return txt;
		},
		jqdHolidayMark: function(date){
			/* 설명   : jQuery Ui datepicker 주말, 휴일 표시
			   사용처 : 필요시 호출 ex) var result = pvmFrontScript.jqdHolidayMark(date); */
			
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
					/*case 0:
						result = [true, "date-sunday"];
						break;
					case 6:
						result = [true, "date-saturday"];
						break;*/
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
			
			var result = pvmFrontScript.jqdHolidayMark(date);
			
			//날짜 마크
			var date1 = $date1;
			var date2 = $date2;
			
			if(date1){
				if(date.getTime() == date1.getTime()){
					if(date2){
						if(date1.getTime() == date2.getTime()){
							result = [true, "dp-highlight dp-same", $.datepicker.formatDate('yy/mm/dd', date1)];
						}
						else{
							result = [true, "dp-highlight dp-first", $.datepicker.formatDate('yy/mm/dd', date1)];
						}
					}
					else{
						result = [true, "dp-highlight", $.datepicker.formatDate('yy/mm/dd', date1)];
					}
				}
				else if(date2){
					if(date.getTime() == date2.getTime()){
						result = [true, "dp-highlight dp-end", $.datepicker.formatDate('yy/mm/dd', date2)];
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

			var result = pvmFrontScript.jqdHolidayMark(date);
			
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
		changeTitle: function(title){
			$('.ui-page-active .w-header-sec .whs-title').html(title);
			//$('.ui-page-active .header-pop-st .ihg-title').html(title);
		},
		comSearchEvtBind: function($section){
			/* 설명   : 통합검색 - 섹션별 필요한 이벤트 제공
			   사용처 : 통합헤더 섹션별 UI Event 필요시 호출 */
			
			var section = $section;
			
			//공통 UI
			//pvFrontScript.baseUI(section);
			
			//추천 sub list 열고, 닫기
			if(section.find('.uis-list .tit-rec').length > 0){
				section.find('.uis-list .tit-rec').on('click', function(e){
					if(!$(this).parent('li').hasClass('on')){
						$(this).closest('.uis-list').find('> li.on .w-list-sub').height(0);
						$(this).closest('.uis-list').find('> li.on').removeClass('on');
						
						var h = $(this).parent('li').find('.w-list-sub').prop('scrollHeight');
						$(this).parent('li').find('.w-list-sub').height(h);
						$(this).parent('li').addClass('on');
					}
					else{
						$(this).closest('.uis-list').find('> li.on .w-list-sub').height(0);
						$(this).closest('.uis-list').find('> li.on').removeClass('on');
					}
					e.preventDefault();
				});
			}

			//캘린더 today 제거
			if(section.find('.uis-datepicker').length > 0){
				section.find('.uis-datepicker .ui-datepicker-today .ui-state-active').removeClass("ui-state-active"); 
				section.find('.uis-datepicker .ui-state-hover').removeClass("ui-state-hover"); 
			}
			
			//capacity uis-capacity-number click(카운팅 기능)
			if(section.find('.uis-capacity .uis-capacity-number').length > 0){
				section.find('.uis-custom-number').uisCustomNumber();
			}
			
			//capacity uis-capacity-select click(클래스 on 추가, 삭제 기능)
			if(section.find('.uis-capacity .uis-capacity-select').length > 0){
				section.find('.uis-capacity .uis-capacity-select li a').on('click', function(e){
					if(!$(this).closest('li').hasClass('on')){
						section.find('.uis-capacity .uis-capacity-select li.on').removeClass('on');
						$(this).closest('li').addClass('on');
					}
					e.preventDefault();
				});
			}
		},
		comContents: function(){
			//섹션메인에서 호출되고 있음 추후 개선 당분간 작성 금지
			//comContentsV2 이관
			
			//섹션메인 프로모션 리스트 슬라이드
			if($('.s-rec-promotion .w-list-item-st1').length > 0){
				var recPromSwiper = new Swiper('.s-rec-promotion .swiper-container', {
					slidesPerView: 'auto',
					autoplay: {
						delay: 5000,
					  }
				});
			}
		},
		comContentsV2: function(){
			//서브 페이지 헤더 fix event
			if($('.ui-page-active').length > 0){
				if($('.header-secV2.header-page-st').length > 0 && !$('.header-secV2.header-page-st').hasClass('isHeaderFixedOne')){		
					var isFix = false;
					var scTop = null;
					var scUTarget = null;
					var headerMainH = $('.header-secV2.header-main-st').height();	
					var $header = $('.header-secV2.header-page-st');	
					$(document).off('scroll').on('scroll', function(){
						scTop = $(document).scrollTop() + headerMainH;
						scUTarget = $header.offset().top + $header.height();

						//fixed
						if(scUTarget < scTop && isFix == false){
							$header.addClass('is-fixed');
							isFix = true;
						}

						//relative
						if(scUTarget > scTop && isFix == true){
							$header.removeClass('is-fixed');
							isFix = false;
						}
					});

					//서브 페이지 헤더먼저 보여준다
					$('.header-secV2.header-main-st').hide();
					$('.header-secV2.header-main-st').delay(500).show(0, function(){
						$.mobile.silentScroll(headerMainH);	
					});
					$header.addClass('isHeaderFixedOne');
				}
			}
			
			//심플 더보기 UI(무조건 닫힌상태(height:0) 에서만 사용 - 상세 스케줄 더보기, 공동운항 리스트 더보기, 필터 항목 더보기)
			if($('.o-expand-wrap').length > 0){
				$('.o-expand-wrap .o-expand-btn').die('click').live('click', function(e){
					var $wExpand = $(this).closest('.o-expand-wrap');
					var $expandCont = $wExpand.find('.o-expand-cont');
					if($wExpand.hasClass('o-expanded')){
						$wExpand.removeClass('o-expanded');
						$expandCont.removeAttr('style');
					}
					else{
						$wExpand.addClass('o-expanded');
						$expandCont.css({'height' : $expandCont.prop('scrollHeight')+'px'});
					}           
					e.stopPropagation();
				});
			}
			
			//Accordion UI
			if($('.o-acdi-click').length > 0){
				$('.o-acdi-click').off('click').on('click', function(){
					var $wExpand = $(this).closest('.o-acdi-wrap');
					var $expandCont = $wExpand.find('.o-acdi-cont');
					if($wExpand.hasClass('o-acdi-open')){
						$expandCont.slideUp('fast', function(){
							$wExpand.removeClass('o-acdi-open');
						});
					}
					else{
						$expandCont.slideDown('fast', function(){
							$wExpand.addClass('o-acdi-open');
						});
					}
				});	
			}
			
			//input-baseV2
			if($('.input-baseV2').length > 0){
				$('.input-baseV2 .input').on('focusout', function(){
					var inp = $(this).closest('.input-baseV2')
					if($(this).val() != '' && !inp.hasClass('typed')){
						inp.addClass('typed');
					}
					else if($(this).val() == '' && inp.hasClass('typed')){
						inp.removeClass('typed');
					}				
				});

				//input 내용 삭제
				$('.input-baseV2 .btn-clear').on('vclick', function(e){ 
					var inp = $(this).closest('.input-baseV2').find('.input');
					inp.val('');
					e.preventDefault(); 
					inp.focus(); 
				});	
				
			}
			
			//탭메뉴(공통)
			$('.o-tab-menu').setTabMenu();	
			
			//섹션메인 프로모션 리스트 슬라이드
			if($('.s-rec-promotion .w-list-item-st1').length > 0){
				var recPromSwiper = new Swiper('.s-rec-promotion .swiper-container', {
					slidesPerView: 'auto',
					autoplay: {
						delay: 5000,
					  }
				});
			}
		}
	}	
}());
