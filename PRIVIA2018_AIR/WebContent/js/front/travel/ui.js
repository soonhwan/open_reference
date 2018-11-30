/*  
 * 문서명 : ui.js 
 * 설명 : front-end 공통 스크립트
 * 작성자 : 이영재 mulue@adcapsule.co.kr, 양현민 mosberato@adcapsule.co.kr
 */

/*
 * 함수명 rszFrame 
 * 
 *  
 */
try {
	var travelDomain = configTravelDomain;	
} catch (e) {
	var travelDomain = "https://www.priviatravel.com/";	
}

try {
	var httpsDomain = configHttpsUrl;	
} catch (e) {
	var httpsDomain = "https://www.priviatravel.com/";
}

if(typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, ''); 
	};
}

var rszFrame = function(id,h){
	$("#" + id).height(h);
};

/*
* 함수명 : commify
* 설명   : 천단위 콤마생성
* 사용법 : commify(number)
*/
function commify(n) {
	var reg = /(^[+-]?\d+)(\d{3})/;// 정규식
	n += '';// 숫자를 문자열로 변환

	while (reg.test(n))
    n = n.replace(reg, '$1' + ',' + '$2');
    return n;
}

/*
* 함수명 : jQscroller
* 설명   : 다양한 갯수의 슬라이드형 롤링 가능
* 사용법 : $('selecter').JQscroller()
*/

(function($){
	$.fn.JQscroller = function(option){
		var params = jQuery.extend({			
			animate : true,		
			displayNum : 5,
			interval : 1000,
			paging : false,
			ajaxCall : false,			
			animateDirection : {xy : 'horizontal', direction : 'left'},
			slideSpeed : 500,
			controller : true,
			prev : '.prev',
			next : '.next',
			mask : '.scrollMask',
			unit : '.scrollMask li',
            dimm : false,
			expand : false
		}, option);

		$(this).each(function(){
			var $this = this;
			var $thisId = "#"+this.id;
			var $thisWrap = $thisId+' '+params.mask;
			var $thisUnit = $thisId+' '+params.unit;
			var isover = false;
			var pd = params.animateDirection;
			var ml = $($thisUnit).css('marginLeft');
			var mr = $($thisUnit).css('marginRight');
			var mt = $($thisUnit).css('marginTop');
			var mb = $($thisUnit).css('marginBottom');
			var unitWidth = $($thisUnit+':first').width()+parseInt(ml)+parseInt(mr);
			var unitHeight = $($thisUnit+':first').height()+parseInt(mt)+parseInt(mb);
			
			$($thisId).css('position','relative');
			$($thisWrap).parent().css('overflow','hidden');
			$($thisWrap).css({'position':'relative','overflow':'hidden','_zoom':1});			
			
			if(pd.xy == 'horizontal')$($thisUnit,$thisWrap).css('float','left');
			
			if(params.displayNum > $($thisUnit).size()) {
				//alert("Please check displayNum's value ('"+$thisId+"')");
				params.displayNum = $($thisUnit).size();
			}			
			
			if(params.displayNum < $($thisUnit).size()) $($thisUnit+':last').prependTo($thisWrap);
			if(pd.xy == 'horizontal'){
				$($thisWrap).css('width','9999px');
				if(params.displayNum < $($thisUnit).size()) $($thisWrap).css('left',-unitWidth+'px');
                if(params.expand == 'airtel'){
                    $($thisWrap).css('left',-160+'px');
                }
				$($thisId+' .mask').css({
					'width'    : function(){return unitWidth*params.displayNum+'px'},
					//'height'   : function(){return unitHeight+'px'},					
					'overflow' : 'hidden',
					'position' : 'relative'
				})				
			} else if(pd.xy == 'vertical'){				
				$($thisWrap).css('top',-unitHeight+'px');			
				$($thisId+' .mask').css({
					'width'    : function(){return unitWidth+'px'},
					'height'   : function(){return unitHeight*params.displayNum+'px'},					
					'overflow' : 'hidden',
					'position' : 'relative'
				});
			}

			$($this).hover(function(){isover=true;},function(){isover=false;});

			if((params.displayNum < $($thisUnit).size()) && params.controller) {
				$($thisId+' '+params.next).click(next);
				$($thisId+' '+params.prev).click(prev);
			} else if((params.displayNum == $($thisUnit).size()) || !params.controller){
				if(params.next) $($thisId+' '+params.next).css('display','none');
				if(params.prev) $($thisId+' '+params.prev).css('display','none');				
			}
			
			if((params.displayNum < $($thisUnit).size()) && params.interval > 0) setInterval(autoScroll,params.interval);
			
			function autoScroll(){
				if(!isover){					
					switch(pd.xy){
						case 'horizontal' : 
							pd.direction == 'left' ? next() : prev();
							break;
						case 'vertical' : 
							pd.direction == 'top' ? next() : prev();
							break;
					}
				}
			}
            
            if(params.dimm == true){
				$($thisUnit).find('.hover-wrap').append('<div class="hover-dimm"></div>');
				$($thisUnit).find('.hover-wrap').append('<div class="hover-content"></div>');
				$($thisUnit).find('.hover-content').each(function(){
					$(this).append($(this).parent().find('a'));
				});
				$($thisUnit).find('.hover-wrap').find('a').each(function(){
					var name = $(this).attr('ho-name');
					var state = $(this).attr('ho-state');
					var price = $(this).attr('ho-price');
					var color = $(this).attr('ho-color');
					$(this).append('<p class="ho-name ellipsis">'+name+'</p>');
					$(this).append('<div class="ho-other"><p class="ho-state '+color+'">'+state+'</p><p class="ho-price">'+price+'</p></div>')
				});

				$($thisUnit).on('mouseenter', function(){
					$(this).find('div.origin-info').hide();
					$(this).find('div.hover-wrap').stop(true, true).fadeIn(300);

				});
				$($thisUnit).on('mouseleave', function(){
					$(this).find('div.origin-info').show();
					$(this).find('div.hover-wrap').stop(true, true).fadeOut(300);
				});
			}
            
            if(params.expand == 'airtel'){
				$($thisUnit).on('mouseenter', function(){
                    $(this).siblings().removeClass('active');
					$(this).addClass('active');
				});
			}

			if(params.expand == true){
				$($thisUnit).on('mouseenter', function(){
					$(this).addClass('active');
					if($($thisUnit).index(this) == params.displayNum){
                        $($thisUnit).stop(true).css('left', -unitWidth);
					}
				});
				$($thisUnit).on('mouseleave', function(){
					$(this).removeClass('active');
					$($thisUnit).stop(true).css('left', 0);
				});
			}
            
			function next(){
				if($($thisWrap).is(':animated')) return false;
				if(pd.xy == 'horizontal'){
                    if(params.expand == 'airtel'){
                        $($thisWrap).css('left',0);
                        if(params.animate) $($thisWrap).animate({'left':-160+'px'},params.slideSpeed,params.easing);
                        else $($thisWrap).css({'left':-160+'px'});
                    }else{
                        $($thisWrap).css('left',0);
                        if(params.animate) $($thisWrap).animate({'left':-unitWidth+'px'},params.slideSpeed,params.easing);
                        else $($thisWrap).css({'left':-unitWidth+'px'});
                    }
				}else if(pd.xy == 'vertical'){
					$($thisWrap).css('top',0);
					if(params.animate) $($thisWrap).animate({'top':-unitHeight+'px'},params.slideSpeed,params.easing);
					else $($thisWrap).css({'top':-unitHeight+'px'});
				}				
				var $clone = $($thisUnit+':first').clone(true);
                if(params.expand == 'airtel'){
                    $($thisUnit).removeClass('active');
                    $($thisUnit).eq(6).addClass('active');
                    
                }
				$clone.appendTo($thisWrap);
				$($thisUnit+':first').remove();	
			}			
			
			function prev(){	
				if($($thisWrap).is(':animated')) return false;
				var $clone = (params.animate) ? $($thisUnit+':last').clone(true) : $($thisUnit+':last');
                
                if(params.expand == 'airtel'){
                    $($thisWrap).css('left',-160*2+'px');
                    $($thisUnit).removeClass('active');
                    $($thisUnit).eq(0).addClass('active'); 
                    $($thisWrap).animate({'left':-160+'px'},params.slideSpeed,params.easing,function(){
                        $($thisUnit+':last').remove();
                    });                            
                    $clone.prependTo($thisWrap);
                    return false;
                }else{
				    $clone.prependTo($thisWrap);			
                }
				
				if(pd.xy == 'horizontal'){
					$($thisWrap).css('left',-unitWidth*2+'px');
					if(params.animate){
						$($thisWrap).animate({'left':-unitWidth+'px'},params.slideSpeed,params.easing,function(){
							$($thisUnit+':last').remove();
						});
					} else {
						$($thisWrap).css({'left':-unitWidth+'px'},function(){
							$($thisUnit+':last').remove();
						});
					}
				}else if(pd.xy == 'vertical'){
					$($thisWrap).css('top',-unitHeight*2+'px');
					if(params.animate){
						$($thisWrap).animate({'top':-unitHeight+'px'},params.slideSpeed,params.easing,function(){
							$($thisUnit+':last').remove();
						});
					} else {
						$($thisWrap).css({'top':-unitHeight+'px'},function(){
							$($thisUnit+':last').remove();
						});
					}
				}
			}				
		});		
	}
})(jQuery);

/*
 * 함수명 : scrollTopThis
 * 설명 : 타겟 엘리먼트의 위치로 페이지 스크롤 처리
 * 사용법 : scrollTopThis($("#id")); scrollTopThis($(".class")); scrollTopThis($(this));
 */
var scrollTopThis = function($element, $elGap){
	var target = "body",
	speed = 500,
	timeout = 300,	
	gap = $elGap || 0,	
	top = $element.offset(),
	top = top.top - gap;
	if($.browser.msie){
		target = "html";
	}else if($.browser.mozilla || $.browser.webkit){
		target = "body,html";
	}
	setTimeout(function(){
		if($('.commonHeaderObject').length > 0){
			$(target).animate({scrollTop:top-120},speed);	
		}
		else{
			$(target).animate({scrollTop:top},speed);	
		}
	},timeout);	
};

/*
 * 함수명 : initGnb
 * 작성자 : 이영재
 * 설명 : gnb 동작 처리(mouse focus 동작 처리되어 있으므로 수정시 주의)
 * 사용법 : dom ready 호출
 * 변경일 : 20131017
 * 변경내용 : 특정 2뎁쓰 메뉴를 미리 뿌려지게 처리, 동작시 예외 적용 / 마우스 오버시 하위뎁스 노출 동작을 클릭으로 수정 / 디자인 변경 반영
 */
var initGnb = function(){
	var gnbDiv = $("#gnb"),
	gnb = $("#gnbNav"),
	//btnToggle = gnbDiv.find("h2"),
	btnToggle = gnbDiv.find(".gnb_btn"),
	menuSide = $(".hidden_menu_guide");
	gnbHeightDef = gnb.find("> ul").outerHeight(),
	flag = 0;
	
	gnb.find("> ul > li").addClass("dep1").find("> ul > li").addClass("dep2").find("> ul > li").addClass("dep3").find("> ul > li").addClass("dep4");
	gnb.append('<span class="hidden_menu_guide" tabindex="0">메뉴 끝입니다.</span>').prepend('<span class="hidden_menu_guide" tabindex="0">메뉴 시작입니다.</span>');
	
	var gnbToggle = function(i,event){ //gnb 토글 : 토글 버튼 클릭 혹은 gnb에 포커스 인 되거나 아웃될때 실행
		if(i == 0){
			gnb.css("top","-9999px");
			gnbDiv.removeClass("gnb_opened");
			$("#header").removeClass("header_gnb_open");
			gnb.find("a").removeClass("active").removeClass("hover");
			gnb.find("> ul").find("ul").not(".exception").hide();
			gnb.width(154).height(gnbHeightDef - 2);
			$("#viewSearch").height(27); //20131025 추가 - gnb 열릴 때 줄인 서치 버튼 크기 원복
		}else{
			gnb.css("top","80px");
			gnbDiv.addClass("gnb_opened");
			$("#header").addClass("header_gnb_open");
			$("#viewSearch").height(26); //20131025 추가 - 기존 z-index 값을 변경하지 않기 위해 서치 버튼 크기를 1px 줄인다
			/*if($("#totalSearch").is(":visible") && $("#viewSearch").is(":visible")){
				toggleTotalSearch();
			}*/
			var posTopSearch = parseInt($("#totalSearch").css("top"));
			if(posTopSearch != -3000 && $("#viewSearch").is(":visible")){
				toggleTotalSearch();
			}
		}
		flag = i;
	};
	
	var gnbDimension = function($elem){ //gnb bg 좌우 상하 확장 처리
		var gnbWidth = 0,
		gnbHeight = 0;
		
		if($elem.parent("li").find("> ul").length > 0 && !$elem.parent("li").find("> ul").hasClass("exception")){
			if($elem.parent("li").hasClass("dep1")){ //투뎁쓰 펼쳐질때
				var parentPos = $elem.parent("li.dep1").position();
				parentPos = parentPos.top;
				if(parentPos + $elem.parent("li").find("> ul").outerHeight() <= gnbHeightDef){
					gnbHeight = gnbHeightDef - 2;
				}else{
					gnbHeight = parentPos + $elem.parent("li.dep1").find("> ul").outerHeight() - 2 - 9;
				}
				gnbWidth = 309;
			}else if($elem.parent("li").hasClass("dep2")){ //쓰리뎁쓰 펼쳐질때
				var currentHeight = 0;
				var dep1pos = $elem.parent("li.dep2").parents("li.dep1").position();
				var dep2pos = $elem.parent("li.dep2").position();
				var dep3Height = $elem.parent("li").find("> ul").outerHeight();
				var parentPos = $elem.parents("li.dep1").position();
				parentPos = parentPos.top;
				if(parentPos + $elem.parents("li.dep1").find("> ul").outerHeight() < gnbHeightDef){
					currentHeight = currentHeight + gnbHeightDef - 2;
				}else{
					currentHeight = currentHeight + parentPos + $elem.parents("li.dep1").find("> ul").outerHeight() - 2 - 9;
				}
				
				if(dep1pos.top + dep2pos.top + dep3Height > currentHeight){
					gnbHeight = dep1pos.top + dep2pos.top + dep3Height - 2 - 18;
				}else{
					gnbHeight = currentHeight;
				}
				gnbWidth = 464;
			}
		}else{
			gnbWidth = 154; //원뎁쓰(+featured,전체상품몰 하위 펼쳐질때 - 이쪽 투뎁스 메뉴는 종으로 미리 펼쳐져 있으므로 로직에서 제외
		}
		
		gnb.width(gnbWidth).height(gnbHeight);
	};
	
	var gnbAction = function($elem,event){ //gnb 하위메뉴 처리

		$elem.parent("li").siblings("li").find("a").removeClass("active").removeClass("hover");
		$elem.parent("li").siblings("li").find("ul").not(".exception").hide();
		$elem.parent("li").find("> ul").show();
		$elem.removeClass("hover").addClass("active");
		if(!$elem.parent("li").find("> ul").hasClass("exception")){
			gnbDimension($elem);
		}
		return false;
	};
	
	btnToggle.click(function(){
		if(flag == 0){
			gnbToggle(1);
			btnToggle.addClass("on");
		}else{
			gnbToggle(0);
			btnToggle.removeClass("on");
		}
	});
	
	//이벤트 바인딩
	gnbDiv.find("a").bind({
		focus : function(){
			gnbToggle(1,"focus");
			if($(this).parent("li").find("> ul").length > 0 && !$(this).parent("li").find("> ul").hasClass("exception") && !$(this).hasClass("active")){
				$(this).addClass("hover");
			}
		},
		blur : function(event){
			$(this).removeClass("hover");
		},
		mouseover : function(){
			if($(this).parent("li").find("> ul").length > 0 && !$(this).parent("li").find("> ul").hasClass("exception") && !$(this).hasClass("active")){
				$(this).addClass("hover");
			}
		},
		mouseout : function(){
			$(this).removeClass("hover");
		},
		click : function(){
			if($(this).parent("li").find("> ul").length > 0 && !$(this).parent("li").find("> ul").hasClass("exception")){				
				gnbAction($(this));
				return false;
			}else if($(this).parent("li").find("> ul").hasClass("exception")){
				return false;
			}
		}
	});
	menuSide.live('focus',function(){
		gnbToggle(0);
	});
	$(document).mousedown(function(e){
	    if (gnbDiv.has(e.target).length === 0){
	    	gnbToggle(0);
	    	btnToggle.removeClass("on");
	    }
	});

};


var initGnb2 = function(){
	var gnbDiv = $("#gnb"),
	gnb = $("#gnbNav"),
	btnToggle = gnbDiv.find(".gnb_btn"),
	flag = 0;
	gnb.find("> ul > li").addClass("dep1").find("> ul > li").addClass("dep2").find("> ul > li").addClass("dep3");
	gnb.find("> ul").addClass("depth1").find("> li > ul").addClass("depth2").find("> li > ul").addClass("depth3");
	var gnbDimension = function(){ //gnb bg 확장
		var gnbWidth = 0,
		gnbHeight = 0,
		gnbHeightDef = gnb.find("ul.depth1").outerHeight();
		depthLehgth = gnb.find("ul:visible").length;
		gnb.find("ul:visible").each(function(idx,elem){
			gnbWidth = gnbWidth + ($(this).outerWidth() - 1);
			if($(this).hasClass("depth2")){
				var parentPos = $(this).parent("li.dep1").position();
				parentPos = parentPos.top;
				if(parentPos + $(this).outerHeight() < gnbHeightDef){
					gnbHeight = gnbHeight + gnbHeightDef;
				}else{
					gnbHeight = gnbHeight + (parentPos + $(this).outerHeight() - 2);
				}
			}else if($(this).hasClass("depth3")){
				var dep3pos = $(this).parent("li.dep2").position(),
				dep2pos = $(this).parents("ul.depth2").parents("li.dep1").position(),
				currentHeight = dep2pos.top + $(this).parents("ul.depth2").outerHeight() - 2;
				if(currentHeight < $(this).outerHeight() + dep3pos.top - 2 + dep2pos.top - 2){
					gnbHeight = $(this).outerHeight() + dep3pos.top - 2 + dep2pos.top;
				}
			}
		});
		gnb.width(gnbWidth).height(gnbHeight);
	};
	var gnbAction = function($elem){
		if($elem.parent("li").hasClass("dep1")){
			gnb.find("ul ul ul").hide();
			gnb.find("ul ul").hide();
			for (var i = 0; i < gnb.find('> ul > li').length; i++ ) {
				//gnb.find('> ul > li').eq(i).find('> a > img').attr('src', gnb.find('> ul > li').eq(i).find('> a > img').attr('src').replace('_on', '_off') );
				gnb.find('> ul > li').eq(i).find('> a > img.off').show ().siblings ('img').hide ();
			}
			//$elem.parent("li").find('> a > img').attr('src', $elem.parent("li").find('> a > img').attr('src').replace('_off', '_on') );
			$elem.parent("li").find('> a > img.on').show ().siblings ('img').hide ();
			gnb.find("ul a").removeClass("active1");
			gnb.find(".dep1 > a").removeClass("active1");
			gnb.find("ul a").removeClass("active2");
			gnb.find(".dep1 > a").removeClass("active2");
			$elem.parent("li").find('>ul').show();
			
			if ( $elem.parent().find('> ul > li').length == 0 ) {
				$elem.addClass("active1");
			} else {
				$elem.addClass("active2");
			}
		}else{
			$elem.parent().parent().find("> li > a").removeClass("active1");
			$elem.parent().parent().find("> li > a").removeClass("active2");
			$elem.parent().find('> ul > li > a').removeClass("active1");
			if($elem.next("ul").length > 0){
				$elem.addClass('active2');
				$elem.parent("li").siblings("li").find("ul").hide();
				$elem.parent("li").siblings("li").find("> a").removeClass("active");
				$elem.next("ul").show();
				$elem.next("ul").find("ul").hide();
				$elem.next("ul").find("a").removeClass("active");
				$elem.addClass("active");
			}else{
				$elem.addClass('active1');
				$elem.parent("li").siblings("li").find("ul").hide();
				$elem.parent("li").siblings("li").find("> a").removeClass("active");
			}
		}
		//gnbHeight = gnb.find("> ul").outerWidth() + gnb.find(".dep2:visible").outerWidth() + gnb.find(".dep3:visible").outerWidth(); 
		//console.log(gnbWidth)
		//gnb.width(gnbwidth);
		/*if(gnb.find(".dep2:visible").length == 0){
			gnb.width(152);
		}else{
			if(gnb.find(".dep3:visible").length > 0){
				gnb.width(464);
				gnb.height(355);
			}else{
				gnb.width(310);
				gnb.height(356);
			}
		}*/
		
	};
	var gnbToggle = function(i,$elem){
		if(i == 0){
			gnb.css("top","-9999px");
		}else{
			gnb.css("top","60px");
			/*if($("#totalSearch").is(":visible") && $("#viewSearch").is(":visible")){
				toggleTotalSearch();				
			}*/
			var posTopSearch = parseInt($("#totalSearch").css("top"));
			if(posTopSearch != -3000 && $("#viewSearch").is(":visible")){
				toggleTotalSearch();
			}
		}
		flag = i;
	};		
	gnbDiv.find("a").bind({
		focus : function(){
			gnbToggle(1);
			gnbAction($(this));
			gnbDimension();
		},
		blur : function(){
			gnbToggle(0);
			//gnbDimension();
		},
		mouseover : function(){
			gnbAction($(this));
			gnbDimension();
		},
		mouseout : function(){
			//gnbAction();
			//gnbDimension();
		}
	});
	btnToggle.click(function(){
		if(flag == 0){
			gnbToggle(1);
			btnToggle.addClass("on");
		}else{
			gnbToggle(0);
			btnToggle.removeClass("on");
		}
	});
	$(document).click(function(e){
	    if (gnbDiv.has(e.target).length === 0){
	    	gnbToggle(0);
	    	btnToggle.removeClass("on");
	    }
	});
};

/*
 * 함수명 : formMasking
 * 설명 : input 폼의 일부 마스킹 처리
 * 사용법 : inputCardNum1이 실제 사용자가 값 넣는 폼, inputCardNum1Hidden이 값이 넘어가는 폼, 앞에서부터 자르면 0 뒤에서부터 자르면 1, 자를 글자수
 * formMasking($("#inputCardNum1"),$("#inputCardNum1Hidden"),0,2);
 */
var formMasking = function(target,hidden,start,leng){
	var $this = target,
	$hidden = hidden,
	char = "●";
	if(navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('opera') != -1){
		char = "•";
	}
	$this.addClass("masking");
	var actionMasking = function(){
		var str = [];
		$hidden.val($this.val());
		for (var i = 0, len = $this.val().length; i < len; i++) {
			if(start == 0){
				if(i < leng){
					str.push($this.val()[i].replace($this.val()[i],char));
				}else{
					str.push($this.val()[i]);
				}
			}else if(start == 1){
				if(i >= $this.val().length - leng){
					str.push($this.val()[i].replace($this.val()[i],char));
				}else{
					str.push($this.val()[i]);
				}
			}
		}
		$this.val(str.join(""));
	};
	$this.bind({
		blur : function(){	
			actionMasking();
		},
		focus : function(){
			$this.val("");
			$hidden.val("");
		},
		keyup : function(){
			if($this.attr("maxlength") != "undefined"){
				for (var i = 0, len = $this.val().length; i < len; i++) {
					if(i == $this.attr("maxlength") * 1 - 1){
						actionMasking();
					}
				}
			}
		}
	});
};

/*
 * 함수명 : formMaskingBetween
 * 설명 : input 앞뒤 일정 갯수 제외하고 마스킹 처리
 * 사용법 : inputCardNum1이 실제 사용자가 값 넣는 폼, inputCardNum1Hidden이 값이 넘어가는 폼, 앞쪽 마스킹 안할 글자수, 뒷쪽 마스킹 안할 글자수
 * formMaskingBetween($("#inputCardNum1"),$("#inputCardNum1Hidden"),1,2);
 */
var formMaskingBetween = function(target,hidden,head,tail){
	var $this = target,
	$hidden = hidden,
	char = "●";
	if(navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('opera') != -1){
		char = "•";
	}
	$this.addClass("masking");
	var actionMasking = function(){
		var str = [];
		$hidden.val($this.val());
		for (var i = 0, len = $this.val().length; i < len; i++) {
			if(i < head || i >= $this.val().length - tail){
				str.push($this.val()[i]);
			}else{
				str.push($this.val()[i].replace($this.val()[i],char));
			}
		}
		$this.val(str.join(""));
	};
	$this.bind({
		blur : function(){	
			if($hidden.val() == ""){
				actionMasking();
			}
		},
		focus : function(){
			$this.val("");
			$hidden.val("");
		},
		keyup : function(){
			if($this.attr("maxlength") != "undefined"){
				for (var i = 0, len = $this.val().length; i < len; i++) {
					if(i == $this.attr("maxlength") * 1 - 1 && $hidden.val() == ""){
						actionMasking();
					}
				}
			}
		}
	});
};

/* 함수명 : formMaskingName
 * 설명 : 이름의 중간 마스킹 처리
 * 사용법 : inputCardNum1이 실제 사용자가 값 넣는 폼, inputCardNum1Hidden이 값이 넘어가는 폼
 * formMaskingBetween($("#inputCardNum1"),$("#inputCardNum1Hidden"));
 */
var formMaskingName = function(target,hidden){
	var $this = target,
	$hidden = hidden,
	char = "●";
	if(navigator.userAgent.toLowerCase().indexOf('webkit') != -1 || navigator.userAgent.toLowerCase().indexOf('chrome') != -1 || navigator.userAgent.toLowerCase().indexOf('opera') != -1){
		char = "•";
	}
	$this.addClass("masking");
	$this.bind({
		blur : function(){	
			var str = [];
			$hidden.val($this.val());
			for (var i = 0, len = $this.val().length; i < len; i++) {
				if(i == 0 || i == $this.val().length - 1 || $this.val()[i - 1] == " " || $this.val()[i - 1] == "-" || $this.val()[i + 1] == " " || $this.val()[i + 1] == "-" || $this.val()[i] == " " || $this.val()[i] == "-"){
					str.push($this.val()[i]);
				}else{
					str.push($this.val()[i].replace($this.val()[i],char));
				}
			}
			$this.val(str.join(""));
		},
		focus : function(){
			$this.val("");
			$hidden.val("");
		}
	});
};

/* GNB folding */
/*
var gnbToggle = function(){
	//변수 선언
	var focusable = $("#flotMenu *"),
		gnb = $("#flotMenu"),
		btn = gnb.find(".gnb_btn"),
		inset = $("#flotMenu .inset"),
		container = $("#content"),
		width = 150,
		speed = 300,
		openFlag = 0;
	
	//toggle
	var gnbOpen = function(i){
		if(i == 1){
			inset.stop().css("overflow","visible").animate({width : width, left : -width},speed,function(){
				openFlag = 1;
				btn.addClass("opened");
			});
			gnb.stop().animate({left : width},speed);
			container.stop().animate({marginLeft : width},speed);
		}else if(i == 0){
			inset.stop().animate({width : 0, left : 0},speed,function(){
				inset.css("overflow","hidden");
				openFlag = 0;
				btn.removeClass("opened");
			});
			gnb.stop().animate({left : 0},speed);
			container.stop().animate({marginLeft : 0},speed);
		}
	};
	
	//각각 이벤트 바인딩
	btn.bind("click",function(event){
		if(openFlag == 0){
			gnbOpen(1);
			return false;
		}else if(openFlag == 1){
			gnbOpen(0);
			return false;
		}
	});
	focusable.bind("focus",function(){
		gnbOpen(1);
	});
	focusable.bind("blur",function(){
		gnbOpen(0);
	});
	
};
*/

/*
 * 함수명 : totalOpen
 * 설명 : 통합검색 열기
 * 사용법 : onclick="totalOpen("searchForm2");" 또는 헤드에 totalOpen("searchForm2");
 */
function totalOpen(id){
	$("#viewSearch").addClass("on");
	$("#ptSearch").css("display","block");
	
	if (id == "searchForm1"){
		showTab('searchTab','searchForm','1');
	} else if  (id == "searchForm2"){
		showTab('searchTab','searchForm','2');
	} else {
		showTab('searchTab','searchForm','3');
	}
}

//My travel 열고닫기 토글
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
/*
 * 함수명 : toggleShowTab
 * 설명 : 탭 클릭 시 해당 콘텐츠 block 처리 
 * 사용법 : 탭 각각에 넣어줄 링크 - <a href="javascript:toggleShowTab('pickTab','tabArea','1');"></a>
 		   첫번째값 탭을 감싸는 id, 두번째값 불러올 콘텐츠 영역 id의 영문명, 세번째값 두번째값불러올 콘텐츠 영역 id의 숫자
 */
var toggleShowTab = function(tabName,contId,num){
	var last = $("#"+tabName+">li").length;  //tab 개수
	if($("#"+tabName+">li>a>img").size() > 0){
		var toggleEvent = "off";
		if ( $("#"+tabName+">li").eq(num-1).find("img").hasClass('on') ) {
			toggleEvent = "on";
		}
		for(var i=1; i<=last;i++){
			if( toggleEvent == "on" ) {
				var order2 = i-1;
				var $tabImg = $("#"+tabName+">li").eq(order2).find("img");
				$("#"+contId+i).css("display","none");
				$tabImg.attr("src",$tabImg.attr("src").replace("_on","_off"));
				$tabImg.removeClass('on');

			} else {
				if (i == num){
					var order = num-1;
					var $eqImg = $("#"+tabName+">li").eq(order).find("img");
					$("#"+contId+num).css("display","block").attr("tabindex","0").focus().css("outline","0").removeAttr("tabindex"); //활성화된 탭으로 포커스 이동, div등은 포커스 가능한 엘리먼트가 아니므로 tabindex=0으로 포커스가 가능하게 하고 포커스 직흐 탭인덱스 속성 제거
					$eqImg.attr("src",$eqImg.attr("src").replace("_off","_on"));
					$eqImg.addClass('on');
					$("#"+contId+num).find(":focusable:last").bind("keydown",function(e){
						 if(e.keyCode == 9 && !e.shiftKey && num != last){
							 $("#"+tabName).find(">li").eq(num-1).find("a").focus();
						 }
					 });
				} else {
					var order2 = i-1;
					var $tabImg = $("#"+tabName+">li").eq(order2).find("img");
					$("#"+contId+i).css("display","none");
					$tabImg.attr("src",$tabImg.attr("src").replace("_on","_off"));
					$tabImg.removeClass('on');
				}
			}
		}
	}
	else{
		var toggleEvent = "off";
		if ( $("#"+tabName+">li").eq(num-1).find('a').hasClass('on') ) {
			toggleEvent = "on";
		}
		for(var i=1; i<=last;i++){
			if( toggleEvent == "on" ) {
				var order2 = i-1;
				var $tabCtrl = $("#"+tabName+">li").eq(order2).find('a');
				$("#"+contId+i).css("display","none");
				$tabCtrl.removeClass('on');

			} else {
				if (i == num){
					var order = num-1;
					var $eqCtrl = $("#"+tabName+">li").eq(order).find("a");
					$("#"+contId+num).css("display","block").attr("tabindex","0").focus().css("outline","0").removeAttr("tabindex"); //활성화된 탭으로 포커스 이동, div등은 포커스 가능한 엘리먼트가 아니므로 tabindex=0으로 포커스가 가능하게 하고 포커스 직흐 탭인덱스 속성 제거
					$eqCtrl.addClass('on');
					$("#"+contId+num).find(":focusable:last").bind("keydown",function(e){
						 if(e.keyCode == 9 && !e.shiftKey && num != last){
							 $("#"+tabName).find(">li").eq(num-1).find("a").focus();
						 }
					 });
				} else {
					var order2 = i-1;
					var $tabCtrl = $("#"+tabName+">li").eq(order2).find("a");
					$("#"+contId+i).css("display","none");
					$tabCtrl.removeClass('on');
				}
			}
		}
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
 * 함수명 : toggleView
 * 설명 : 상세검색 토글
 * 사용법 : onclick="toggleView("searchMore");"
 */
function toggleView(id){
	var $id = $("#"+id);
	if ($id.css("display") == "none"){
		$id.css("display","block");
	} else {
		$id.css("display","none");
	}
	//return false;
} 

/*
 * 함수명 : openWin
 * 설명 : 새창 팝업
 * 사용법 :onclick="openWin('경로','가로사이즈','세로사이즈','아이디'); return false;"
 */
function openWin(url,intWidth,intHeight,name) {
	window.open(url, name, "width="+intWidth+",height="+intHeight+",resizable=1,scrollbars=0") ;
}

function openWin1(url,intWidth,intHeight,name) {
	window.open(url, name, "width="+intWidth+",height="+intHeight+",resizable=1,scrollbars=1") ;
}


/*
 * 함수명 : toggleLayer
 * 설명 : 기본 레이어 핸들링
 * 사용법 : toggleLayer('startStyle5',1); 형태로 아이디값 + 1이면 열기 0이면 닫기
 */
function toggleLayer(id,n){
	 var tgL = jQuery("#" + id);
	 if(n == 1){
		 tgL.show();
	 }else{
		 tgL.hide();
	 }
}

/*
 * 함수명 : modalPopLayer
 * 설명 : dimm 처리된 레이어 팝업을 띄운다
 * 사용법 : modalPopLayer('메뉴코드','경로');
 * ex1)<a href="#" onclick="modalPopLayer('13400938','http://www.naver.com'); return false;">모달레이어1</a>
 */
var modalPopLayer = function(menuid,url,scrolling,height){
	var scrollOption = "no";
	var resizeOption = "yes";
	var iframeHeight = "100%";
	if(scrolling == 'yes'){
		scrollOption = "yes";
		resizeOption = "no";
		if(height != undefined){
			iframeHeight = height;
		}
	}
	
	$("body").append(
		$("<div id='modal"+menuid+"' class='modal_window'/>")
		.append("<div class='dimm'/>")
		.append(
			$("<div id='modalPopup"+menuid+"'  class='popup'/>")
			.append(
				$("<div class='inner'/>")
				.append("<a href='#' class='close'><img src='/images/admin/default/content/btn_ly_close.gif' alt='닫기'/></a>")
				.append("<iframe data-resizeoption='"+resizeOption+"' src='"+url+"' width='100%' height='"+iframeHeight+"' frameBorder='0' scrolling='"+scrollOption+"'/>")
			)
		)
	);
	$("#modalPopup" + menuid).find("a.close").live('click',function(){
		//console.log ($(this).parents('.modal_window'));
		$(this).parents('.modal_window').remove();
		return false;
	});
};

/*
 * dimmed 레이어 팝업 resize, reposition
 * 설명 : 레이어 팝업 아이프레임 사이즈 변경, 위치 변경 처리
 * 사용법 : 아이프레임으로 띄울 레이어 내부에서 호출 
*/
var modalPopLayerReset = function(id,width,height){
	var idPop = $("#modalPopup" + id);
	var idPopFrame = $("#modalPopup" + id);
	idPop.css({marginLeft:width / 2 * -1,marginTop:height / 2 * -1});
	idPopFrame.css({width:width,height:height});
};



/*
 * 함수명 : setBanner
 * 설명 : special expierience main 롤링 배너를 구현한다.
 * 사용법 : setBanner( 'jquery 객체' );
 * ex1)setBanner( $('#bnr_event') );
 */
/*function setBanner( obj ) {
	var w = obj.find('.roll_img > ul > li').width();
	obj.find('.roll_btn').find('li').click(function(i) {
		for ( i = 0; i < eval( obj.find('.roll_btn').children().length ); i++ ) {
			if ( i == $(this).index() ) {
				obj.find('.roll_btn').find('li').eq(i).find('a').addClass("on");
			} else {
				obj.find('.roll_btn').find('li').eq(i).find('a').removeClass("on");
			}
		}
		obj.find('.roll_img > ul').animate( { 'margin-left': eval( $(this).index() ) * ( -w ) }, 600, function() {} );
		return false;
	});	
}*/
/*
 * 크롬 탭 포커스 이벤트 캐치
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
function setBanner( obj, autorolling, dtime, align, duration, interval, isRandom) {
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
	
	//요소 랜덤
	if(isRandom){
		var ul = obj.find('.roll_img > ul'); 
		var liArr = ul.children('li'); 
		liArr.sort(function() { 
			var temp = parseInt(Math.random()*leng); 
			var temp1 = parseInt(Math.random()*leng); return temp1-temp; 
		}).appendTo(ul);
	}
	
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
 * 함수명 : repositionThisPop
 * 설명 : 레이어팝업 내 높이 변경될 경우 호출하여 포지션 재조정
 * 사용법 : repositionThisPop('아이디');
 */
var repositionThisPop = function(id){

	var winheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
		winwidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
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
	/* 레이어수정
	if(winheight <= $this.height()){
		posy = 50; //레이어 팝업 높이보다 창 높이가 작을 경우 레이어 팝업과 문서의 위아래 간격
		mgt = 0;
		$this.prev(".dimm").height(winheight);	
	*/	
		
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
 * boll_dimmClose : true로 설정시 dimm 처리된 검정배경을 클릭해도 닫히지 않음
 */
var frameLayer = false;
var focusableElems ="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var dimmLayerPop = function(id,opt,$elem,bool_dimmClose){
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
		/* 레이어수정 
		$('.layer_pop .content',parent.document).css('overflow','auto')
		*/
		
		if($("body").hasClass("special_exp")){
			$("body").addClass("special_exp_hidden");
		}
		if ($.browser.msie && parseInt($.browser.version, 10) < 8 && $("body").find(".modal_window:visible").length == 0) {
			$("#header, #header-new").css("z-index","");
			$("#footer, #footer-new").css("z-index","");
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
		}
		if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
			$("#header, #header-new").css("z-index","-1");
			$("#footer, #footer-new").css("z-index","-1");
		}
		if($('.layout-center').size() > 0){
			$('.layout-center').addClass('zindex-none');
		}
		/*레이어수정
		var winheight = $(window).height();
		var $thish = $($this).height();
		var preDimm = $('.modal_window',parent.document).size();
		
		if(preDimm > 0){
			$('.layer_pop .content',parent.document).css('overflow','hidden')
		}
		if($thish >= winheight){
			if($('#'+id+',parent.document').find('iframe').size() < 1){
				$this.find('.content').css({height:winheight-150,overflow:'auto'})
				$('.layer_pop .content',parent.document).find('iframe').css('height','100%')
			}
			else{
				$this.find('.content').css({height:winheight-300,overflow:'auto'})	
			}
		}
		*/
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
		if(!bool_dimmClose){
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
		}
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
 * 함수명 : boxshadow
 * 설명 : 9 미만 버전의 ie에 대해 css3 box shadow 처리
 */
$.fn.boxshadow = function(options){
	return this.each(function(){		
		var $this = $(this),
			pos = $this.position(),
			 settings = $.extend({
				boxcolor : "#000",
				boxblur : 1,
				boxalpha : 0.3,
				postop : 2,
				posleft : 4,
				targetpos : "relative"
			 }, options);
			 
			if ($.browser.msie && parseInt($.browser.version, 10) < 9) {
				$this.before(
					$('<div style="filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=\''+settings.boxblur+'\', MakeShadow=\'true\', ShadowOpacity=\''+settings.boxalpha+'\');"></div>').width($this.outerWidth())
					.height($this.outerHeight())
					.css({
						position: "absolute",
						left : pos.left + settings.posleft - settings.boxblur,
						top : pos.top + settings.postop - settings.boxblur,
						backgroundColor : settings.boxcolor
					})
				).css("position",settings.targetpos);
					
			}
				
	});
};
/*
 * 함수명 : setTab
 * 설명 : 탭 처리 
 * 사용법: setTab(탭메뉴 id이름, 컨텐츠 id이름 + i, init 활성화)
 */
function setTab( tab, con, initN ) {
	var tabObj = $('#'+tab);
	if (tabObj.length > 0) {
		tabObj.find('> li').find('> a').removeClass('on');
		for ( var i = 0; i < tabObj.find('> li').length; i++ ) {
			$('#'+con+(i+1)).hide();
			tabObj.find('> li').eq(i).find('> a > img').attr( 'src', tabObj.find('> li').eq(i).find('> a > img').attr('src').replace('_on','_off'));
		}
		$('#'+con+initN).show();
		tabObj.find('> li').click(function(){
			tabObj.find('> li').find('> a').removeClass('on');
			$(this).find('> a').addClass('on');
			for ( var i = 0; i < tabObj.find('> li').length; i++ ) {
				$('#'+con+(i+1)).hide();
				tabObj.find('> li').eq(i).find('> a > img').attr( 'src', tabObj.find('> li').eq(i).find('> a > img').attr('src').replace('_on','_off'));
			}
			$('#'+con+($(this).index()+1)).show();
			tabObj.find('> li').eq($(this).index()).find('> a > img').attr( 'src', tabObj.find('> li').eq($(this).index()).find('> a > img').attr('src').replace('_off','_on'));
			return false;
		});
		tabObj.find('> li').eq(initN-1).find('> a > img').attr( 'src', tabObj.find('> li').eq(initN-1).find('> a > img').attr('src').replace('_off','_on'));
		tabObj.find('> li').eq(initN-1).find('> a').addClass('on');
	}
}
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
$.fn.placeHolder2 = function(options){
	return this.each(function(){
		var $this = $(this),
		place = $this.val();
		var settings = $.extend({
		      'focusclass' : ''
		    },options);
		$this.bind("focus", function(){
			if($this.val().replace(/\s*$/,'') == place){
				$this.val("").addClass(settings.focusclass);
			}
		});		
		$this.bind("blur", function(){
			if($this.val().replace(/\s*$/,'') == ""){
				$this.val(place).removeClass(settings.focusclass);
			}
		});
	});
};

/* 실시간 검색 관련 스크립트(임시) */
var ServiceSectionName;
var dest;
var toggleTotalSearch = function(i){
	var posTopSearch = parseInt($("#totalSearch").css("top"));
	var isParent = (window.location == window.parent.location);
	//console.log(parseInt($("#totalSearch").css("top")))
	if(posTopSearch == -3000){
		$("#totalSearch").css("top","80px").show();
		$("#viewSearch").addClass("on");
		if(isParent == true){
			dest = document.getElementById('searchFrame');
			if(ServiceSectionName != undefined) dest.contentWindow.postMessage('{"ServiceNum":"'+ServiceSectionName+'"}','*');
		}
	}else{
		$("#totalSearch").css("top","-3000px").hide();
		$("#viewSearch").removeClass("on");
	}
	//$("#totalSearch").toggle();
	//$("#viewSearch").toggleClass("on");
};

//자유여행+해외패키지 탭에서 검색닫기 버튼 노출로 인해 추가(아이프레임인 경우 문제)

window.onmessage = function(e){
	var event = window.event || e;
	if(event.data == 'show'){
		$('.total_search .total_search_inset > a:last').hide();
	}
	else{
		$('.total_search .total_search_inset > a:last').show();
	}
}; 

/*
 * 함수명 resizeStr
 * 설명 : 이미지 리스트 리사이즈 처리 이전 소스 백업

var resizeStr = function(element,o_width,o_height){
	var target = element, //타겟 엘리먼트
	t_width = o_width, //최종 리사이즈될 넓이
	t_height = o_height, //최종 리사이즈될 높이
	t_ratio = t_width / t_height;
	target.find("> li").each(function(index, element) {
		var t = $(this);
		t.find("img").on('load', function(){
			var thumb = t.find("img"),
			width = thumb.width(),
			height = thumb.height(),
			ratio = width / height;
			//console.log("넓이 : "+ width + ", " + "높이 : " + height);
			if(width != t_width && height != t_height){
				if(ratio == t_ratio){ //비율이 같을 경우
					thumb.width(t_width).css({position:"relative",top:"auto"});	
				}else if(ratio > t_ratio){ //가로가 길 경우
					thumb.height(t_height).css({
						position:"relative",top:"auto",left:"auto",
						marginLeft: ((width * (t_height / height) / 2) - (t_width / 2))  * -1
					});	
				}else if(ratio < t_ratio){ //세로가 길 경우
					thumb.width(t_width).css({
						position:"relative",top:"auto",left:"auto",
						marginTop: ((height * (t_width / width) / 2) - (t_height / 2))  * -1
					});	
				}
			}else{
				thumb.css({position:"relative",top:"auto"});	
			}
		}).each(function(){
		  if(this.complete || !this.complete || this.complete === undefined){$(this).load()}
		});
	});
};
 */

/* 
 * 함수명 : galleryStr
 * 설명 : 호텔 상세 등의 이미지 상세보기 + 리스트 롤의 이전소스 백업
 * 

var galleryStr = {
	init : function($viewArea, $rollingArea){
		var $view = $viewArea,
		$rolling = $rollingArea,
		$thumbs = $rolling.find(".thumbs"),
		$btnP = $rolling.find("p.movel"),
		$btnN = $rolling.find("p.mover"),
		length = $thumbs.find("a").length,
		_this = this;
		if(length < 6){
			$rolling.find("> p").addClass("disable");
		}
		$thumbs.find("> li > a").live('click',function(){
			var url = $(this).attr("href"),
			alt = $(this).attr("alt");
			_this.show($view,url,alt);
			$thumbs.find("li").attr("class","");
			$(this).parent("li").attr("class","click");
			return false;
		});
		$thumbs.find("> li").eq(0).find("> a").trigger("click");
		this.rolling($thumbs, $btnP, $btnN);
	},
	resize : function($view){
		var t_width = $view.width(), //최종 리사이즈될 넓이
		t_height = $view.height(), //최종 리사이즈될 높이
		t_ratio = t_width / t_height;
		$view.find("img").one('load', function() {
			var thumb = $view.find("img"),
			width = thumb.width(),
			height = thumb.height(),
			ratio = width / height;

			//console.log(t_ratio + "," + ratio);
			
			if((width == t_width && height == t_height) || (ratio == t_ratio)){
				//console.log("원본이 뷰 영역과 같거나 비율이 같음");
				thumb.width(t_width).css({position:"relative",top:"auto"});	
			}else{
				
				if(ratio < t_ratio){
					//console.log("원본이 뷰 영역 대비 세로로 길어");
					thumb.width(t_width).css({
						position:"relative",top:"auto",left:"auto",
						marginTop: ((height * (t_width / width) / 2) - (t_height / 2))  * -1
					});	
				}else{
					//console.log("원본이 뷰 영역 대비 가로로 길어");
					thumb.height(t_height).css({
						position:"relative",top:"auto",left:"auto",
						marginLeft: ((width * (t_height / height) / 2) - (t_width / 2))  * -1
					});
				}
			}
			//console.log(t_width + "," + t_height)
			//console.log(width + "," + height)
			
			
			
		}).each(function() {
		  if(this.complete) $(this).load();
		});

	},
	rolling : function($thumbs, $btnP, $btnN){
		var width = $thumbs.find("> li").width(),
		speed = 300;
		$btnP.click(function(){
			if(!$(this).hasClass("disable")){
				$thumbs.find("li:last-child").clone().prependTo($thumbs);
				$thumbs.find("li:last-child").remove();
				$thumbs.css("margin-left",-width);
				$thumbs.animate({marginLeft:0},speed);
			}
		});
		$btnN.click(function(){
			if(!$(this).hasClass("disable")){
				$thumbs.animate({marginLeft:-width},speed,function(){
					$(this).find("li").eq(0).clone().appendTo($(this));
					$(this).find("li").eq(0).remove();
					$(this).css("margin-left","0");
				});
			}
		});
	},
	show : function($view,url,alt){
		$view.html('<img src="'+url+'" alt="'+alt+'" />');
		this.resize($view);
	}
};
*/

/*
 * 설명 : css3 background속성(position,size)을 가능하게 해주는 ie8용 polyfill
 */
(function(e,t,n,r,i){var s=e("<div>")[0],o=/url\(["']?(.*?)["']?\)/,u=[],a={top:0,left:0,bottom:1,right:1,center:.5};if("backgroundSize"in s.style&&!e.debugBGS){return}e.cssHooks.backgroundSize={set:function(t,n){var r=!e.data(t,"bgsImg"),i,s,o;e.data(t,"bgsValue",n);if(r){u.push(t);e.refreshBackgroundDimensions(t,true);s=e("<div>").css({position:"absolute",zIndex:-1,top:0,right:0,left:0,bottom:0,overflow:"hidden"});o=e("<img>").css({position:"absolute"}).appendTo(s),s.prependTo(t);e.data(t,"bgsImg",o[0]);i=(e.css(t,"backgroundPosition")||e.css(t,"backgroundPositionX")+" "+e.css(t,"backgroundPositionY")).split(" ");e.data(t,"bgsPos",[a[i[0]]||parseFloat(i[0])/100,a[i[1]]||parseFloat(i[1])/100]);e.css(t,"zIndex")=="auto"&&(t.style.zIndex=0);e.css(t,"position")=="static"&&(t.style.position="relative");e.refreshBackgroundImage(t)}else{e.refreshBackground(t)}},get:function(t){return e.data(t,"bgsValue")||""}};e.cssHooks.backgroundImage={set:function(t,n){return e.data(t,"bgsImg")?e.refreshBackgroundImage(t,n):n}};e.refreshBackgroundDimensions=function(t,n){var r=e(t),i={width:r.innerWidth(),height:r.innerHeight()},s=e.data(t,"bgsDim"),o=!s||i.width!=s.width||i.height!=s.height;e.data(t,"bgsDim",i);if(o&&!n){e.refreshBackground(t)}};e.refreshBackgroundImage=function(t,n){var r=e.data(t,"bgsImg"),i=(o.exec(n||e.css(t,"backgroundImage"))||[])[1],s=r&&r.src,u=i!=s,a,f;if(u){r.style.height=r.style.width="auto";r.onload=function(){var n={width:r.width,height:r.height};if(n.width==1&&n.height==1){return}e.data(t,"bgsImgDim",n);e.data(t,"bgsConstrain",false);e.refreshBackground(t);r.style.visibility="visible";r.onload=null};r.style.visibility="hidden";r.src=i;if(r.readyState||r.complete){r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";r.src=i}t.style.backgroundImage="none"}};e.refreshBackground=function(t){var n=e.data(t,"bgsValue"),i=e.data(t,"bgsDim"),s=e.data(t,"bgsImgDim"),o=e(e.data(t,"bgsImg")),u=e.data(t,"bgsPos"),a=e.data(t,"bgsConstrain"),f,l=i.width/i.height,c=s.width/s.height,h;if(n=="contain"){if(c>l){e.data(t,"bgsConstrain",f="width");h=r.floor((i.height-i.width/c)*u[1]);o.css({top:h});if(f!=a){o.css({width:"100%",height:"auto",left:0})}}else{e.data(t,"bgsConstrain",f="height");h=r.floor((i.width-i.height*c)*u[0]);o.css({left:h});if(f!=a){o.css({height:"100%",width:"auto",top:0})}}}else if(n=="cover"){if(c>l){e.data(t,"bgsConstrain",f="height");h=r.floor((i.height*c-i.width)*u[0]);o.css({left:-h});if(f!=a){o.css({height:"100%",width:"auto",top:0})}}else{e.data(t,"bgsConstrain",f="width");h=r.floor((i.width/c-i.height)*u[1]);o.css({top:-h});if(f!=a){o.css({width:"100%",height:"auto",left:0})}}}};var f=e.event,l,c={_:0},h=0,p,d;l=f.special.throttledresize={setup:function(){e(this).on("resize",l.handler)},teardown:function(){e(this).off("resize",l.handler)},handler:function(t,n){var r=this,i=arguments;p=true;if(!d){e(c).animate(c,{duration:Infinity,step:function(){h++;if(h>l.threshold&&p||n){t.type="throttledresize";f.dispatch.apply(r,i);p=false;h=0}if(h>9){e(c).stop();d=false;h=0}}});d=true}},threshold:1};e(t).on("throttledresize",function(){e(u).each(function(){e.refreshBackgroundDimensions(this)})})})(jQuery,window,document,Math)


/*
 * 함수명 resizeStr 
 * 설명 : 이미지 리스트 리사이즈 처리
 */
var resizeStr = function(element,o_width,o_height){
	var target = element; //타겟 엘리먼트

	target.find("> li a").each(function(){
		var targetImg = $(this).find('img'),
			targetImgSrc = targetImg.attr('src');
		
		$(this).css({backgroundImage:'url("'+targetImgSrc+'")',backgroundSize:'cover',backgroundPosition:'center center'});	
		targetImg.hide();
	});
};
/* 
 * 함수명 : galleryStr
 * 설명 : 호텔 상세 등의 이미지 상세보기 + 리스트 롤
 */
var galleryStr = {
	init : function($viewArea, $rollingArea,htlCheck){
		var $view = $viewArea,
		$rolling = $rollingArea,
		$thumbs = $rolling.find(".thumbs"),
		$btnP = $rolling.find("p.movel"),
		$btnN = $rolling.find("p.mover"),
		length = $thumbs.find("a").length,
		_this = this;
		if(length < 6){
			$rolling.find("> p").addClass("disable");
		}
		$thumbs.find("> li > a").live('click',function(e){
            e.preventDefault();
            if($('#testImgSample').size() > 0){
                $('#testImgSample').remove();
            }
            var c_imgPath = $(this).attr('href'),
                alt = $(this).attr("alt");
            if (htlCheck == "htl" && (c_imgPath.indexOf('expedia') != -1 || c_imgPath.indexOf('travelapi') != -1)){
                var errorType = ((c_imgPath.indexOf('_b.') != -1) ? 'b' : (c_imgPath.indexOf('_y.') != -1) ? 'y' : (c_imgPath.indexOf('_z.') != -1) ? 'z' : 'x');   
                var changeWord = '_' + errorType + '.';
                if (errorType.indexOf('y') == -1 || errorType.indexOf('b') == -1) {
                    c_imgPath = c_imgPath.replace(changeWord, '_z.');
                }else{}
                
                $('body').append('<img id="testImgSample" src="'+c_imgPath+'" style="width:1px;height:1px;display:none">');
               
                $('#testImgSample').error(function() {
                    console.log("c_imgPath 22222: " + c_imgPath)
                    if (c_imgPath.indexOf('_z.') != -1) {
                        c_imgPath = c_imgPath.replace('_z.', '_y.');
                        $(this).attr('src',c_imgPath);
                    }else if(c_imgPath.indexOf('_y.') != -1) {
                        c_imgPath = c_imgPath.replace('_y.', '_b.');
                        $(this).attr('src',c_imgPath);
                    }else{
                        c_imgPath = '/images/front/travel/search/img_no_detail.gif';
                        $(this).unbind('error');
                    }
                    _this.show($view,c_imgPath,alt);
                });
            }
            
            _this.show($view,c_imgPath,alt);
            $thumbs.find("li").attr("class","");
            $(this).parent("li").attr("class","click");
		});
		$thumbs.find("> li").eq(0).find("> a").trigger("click");
		this.rolling($thumbs, $btnP, $btnN);
	},
	rolling : function($thumbs, $btnP, $btnN){
		var width = $thumbs.find("> li").width(),
		speed = 300;
		$btnP.click(function(){
			if(!$(this).hasClass("disable")){
				$thumbs.find("li:last-child").clone().prependTo($thumbs);
				$thumbs.find("li:last-child").remove();
				$thumbs.css("margin-left",-width);
				$thumbs.animate({marginLeft:0},speed);
			}
		});
		$btnN.click(function(){
			if(!$(this).hasClass("disable")){
				$thumbs.animate({marginLeft:-width},speed,function(){
					$(this).find("li").eq(0).clone().appendTo($(this));
					$(this).find("li").eq(0).remove();
					$(this).css("margin-left","0");
				});
			}
		});
	},
	show : function($view,url,alt){
		$view.css({backgroundImage:'url("'+url+'")',backgroundSize:'cover',backgroundPosition:'center center'});	
		//$view.html('<img src="'+ url +'" style="width:100%;height:100%">');
	}
};


/* 
 * 함수명 : resizeThumbnail
 * 설명 : 검색결과 호텔리스트 썸네일 이미지 리사이징
 * 
 */
var resizeThumbnail = function(element,o_width,o_height){
	var target = element, //타겟 엘리먼트
	t_width = o_width, //최종 리사이즈될 넓이
	t_height = o_height, //최종 리사이즈될 높이
	t_ratio = t_width / t_height;
	target.find("> li").each(function(index, element) {
		var t = $(this);
		if(!t.hasClass("already")){
			t.find(".pic img").one('load', function() {
				var thumb = t.find(".pic img"),
				width = thumb.width(),
				height = thumb.height(),
				ratio = width / height;
				if((width == t_width && height == t_height) || (ratio == t_ratio)){
					//console.log("원본이 뷰 영역과 같거나 비율이 같음");
					thumb.width(t_width).css({position:"relative",top:"auto"});	
				}else{
					
					if(ratio < t_ratio){
						//console.log("원본이 뷰 영역 대비 세로로 길어");
						thumb.width(t_width).css({
							position:"relative",top:"auto",left:"auto",
							marginTop: ((height * (t_width / width) / 2) - (t_height / 2))  * -1
						});	
					}else{
						//console.log("원본이 뷰 영역 대비 가로로 길어");
						thumb.height(t_height).css({
							position:"relative",top:"auto",left:"auto",
							marginLeft: ((width * (t_height / height) / 2) - (t_width / 2))  * -1
						});
					}
				}
				t.addClass("already");
			}).each(function() {
			  if(this.complete) $(this).load();
			});
		}else{
			return;
		}
	});
};

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

// 
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
 * 함수명 : imgPreload
 * 설명 : 이미지 preload
 * 사용법 : dom load시 $([img1.jpg, img2.jpg]).imgPreload();
 */
$.fn.imgPreload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
};

/*
 * 함수명 : fitPopupHeight
 * 설명 : 팝업 자동 리사이즈. ie7 ~ ie10, chrome, firefox, safari, opera tested. osx, winXp, win& tested.
 * 사용법 : onload시 호출
 */
var fitPopupHeight = function() {
	setTimeout(function(){
		var elem = document.documentElement ? document.documentElement : document.body;
		var thisW = parseInt(elem.scrollWidth);
		var thisH = parseInt(elem.scrollHeight);
		var marginX = 0;
		var marginY = 0;
		var ua = navigator.userAgent.toLowerCase();
		if(ua.indexOf("macintosh") > -1 && ua.indexOf("os x") > -1){
			if(ua.indexOf("firefox") > -1){
				marginX = 0, marginY = 25;
			}else if(ua.indexOf("opr/") > -1){
				marginX = 0, marginY = 60;
			}else if(ua.indexOf("chrome") > -1){
				marginX = 0, marginY = 50;
			}else if(ua.indexOf("safari") > -1){
				marginX = 0, marginY = 22;
			}else{
				marginX = 10, marginY = 25;
			}
		}else{
			if(ua.indexOf("msie 7") > -1){
				marginX = 10, marginY = 75;
			}else if(ua.indexOf("msie 8") > -1){
				marginX = 10, marginY = 58;
			}else if(ua.indexOf("msie 9") > -1){
				marginX = 12, marginY = 37;
			}else if(ua.indexOf("msie 10") > -1){
				marginX = 12, marginY = 37;
			}else if(ua.indexOf("firefox") > -1){
				marginX = 18, marginY = 40;
			}else if(ua.indexOf("opera") > -1 || ua.indexOf("opr/") > -1){
				marginX = 20, marginY = 32;
			}else if(ua.indexOf("chrome") > -1){
				marginX = 16, marginY = 65;
			}else if(ua.indexOf("safari") > -1){
				marginX = 16, marginY = 37;
			}else{
				marginX = 10, marginY = 58;
			}
		}

		window.resizeTo(thisW + marginX, thisH+marginY);
		$("html,body").css("overflow","hidden");
	},100);
};

// 20131217 자유여행 lnb
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
			Cufon.refresh();
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
			Cufon.refresh();
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

// 20131218 탭 UI 처리
var initSectionTab = function(obj,elem, opacity){
	//console.log(opacity)
	var leng = obj.find(elem).length;
	var opac;
	obj.find(elem + ":first").find("> a").addClass("active");
	obj.find("div.cont").hide();
	obj.find("div.cont:first").show();
	if(obj.find("div.cont:first").hasClass("dom")){
		obj.find("div.head").addClass("dom");
	}else if(obj.find("div.cont:first").hasClass("ext")){
		obj.find("div.head").addClass("ext");
	}
	try{
		opac = opacity / 100;
		obj.find(elem + " > a").css({opacity:opac});
		obj.find(elem + ":first").find("> a").css({opacity:1.0});
	}catch(e){
		
	}
	obj.find(elem + "> a").bind("focus click",function(){
		obj.find(elem + " > a").removeClass("active");
		$(this).addClass("active");
		try{
			obj.find(elem + " > a").css({opacity:opac});
			$(this).css({opacity:1.0});
		}catch(e){
			
		}
		obj.find("div.cont").hide();
		$(this).parent(elem).next("div.cont").show();
		
		if($(this).parent(elem).next("div.cont").hasClass("dom")){
			obj.find("div.head").attr("class","head dom");
		}else if($(this).parent(elem).next("div.cont").hasClass("ext")){
			obj.find("div.head").attr("class","head ext");
		}else{
			obj.find("div.head").attr("class","head");
		}
		return false;
	});
	
};

var toggleTarget = function(target,button){
	var tg = $(target),
	btnOpen = button,
	btnClose = tg.find(".close");
	if(tg.is(":hidden")) tg.show();
	btnClose.click(function(){
		if(tg.is(":visible")) tg.hide();
		return false;
	});
};

var initHeadingTab = function(obj,elem){
	var pngfix = false;
	if(jQuery.browser.msie && jQuery.browser.version < 9){ 
		pngfix = true;
	}
	var leng = obj.find(elem).length;
	if(pngfix == false){
		obj.addClass("tab_heading_noie78");
	}
	obj.find(elem + ":first").addClass("active");
	obj.find("div.cont").hide();
	obj.find("div.cont:first").show();
	if(pngfix == true){
		obj.find(elem).each(function(index,element){
			if(!$(this).hasClass("active")){
				$(this).find("> a > img").attr("src",$(this).find("> a > img").attr("src").replace(".png","off.png"));
			}
		});
	}
	
	
	obj.find(elem + "> a").bind("focus click",function(){
		if($(this).parent(elem).hasClass("active")){
			return false;
		}
		if(pngfix == true){
			obj.find(".active img").attr("src",obj.find(".active img").attr("src").replace(".png","off.png"))
		}
		obj.find(elem + ".active").removeClass("active");
		$(this).parent(elem).addClass("active");
		if(pngfix == true){
			$(this).find("img").attr("src",$(this).find("img").attr("src").replace("off.png",".png"));
		}
		
		obj.find("div.cont").hide();
		$(this).parent(elem).next("div.cont").show();
		return false;
	});
	
};

//특정 영역 토글
var toggleRules = function($elem){
	if($elem.hasClass("closed")){
		$elem.removeClass("closed").find("a.more").html("닫기");
	}else{
		$elem.addClass("closed").find("a.more").html("더보기");
	}
};

//섹션메인 자유여행 lnb 토글
var toggleFreeNav = function(){
	var wrapper = $("#sectionLnbWrap"),
	toggleDiv = $("#sectionLnbArea"),
	toggleBtn = wrapper.find(".toggle"),
	lengthFrame = wrapper.next("#totalSearch").length;
	if(toggleDiv.is(":visible")){
		toggleDiv.hide();
		toggleBtn.removeClass("toggle_opened");
	}else{
		if(lengthFrame > 0){
			toggleDiv.height(wrapper.next("#totalSearch").find("iframe").outerHeight() - 59);
		}else{
			toggleDiv.height("auto");
		}
		toggleDiv.show();
		toggleBtn.addClass("toggle_opened");
	}
};

//
var initToolTip = function(){
	var boxhtml = '<div><p></p><span></span></div>';
	$("body").prepend($('<div id="icoToolTipBox" class="box_tooltip" />').html(boxhtml));
	var ico = $(".result_air li .cont_air .emblem > span, .promo_air li .cont_air .emblem > span, .list_dom .list_search tbody tr td span[class*=ico], .airline-result .list .inset .sale > span");
	var help = $(".result_air li .cont_air .comms .btn_air_fare_tasf");
	var tips = [];
	tips["point"]	   		= "프로모션 특가";
	tips["airtel"]	   		= "PRIVIA호텔+항공 동시구매 할인 특가";
	tips["timesale"]		= "특정 시간대 판매되는 할인 특가";
	tips["couponsale"]		= "PRIVIA 쿠폰 추가할인";
	tips["hot"]				= "PRIVIA 최고 할인 요금";
	tips["red"]				= "the Red 회원 전용 특가";
	tips["purple_red"]		= "the Purple, the Red 회원 전용 특가";
	tips["purpleonly"]		= "the Purple 회원 전용 특가";
	tips["mobile_sale"]		= "모바일 전용 특가";
	tips["fee_discount"]	= "추가할인 적용 특가<br />(할인은 요금에 반영되어 있음)";
	tips["mileage"]	= "항공사 추가마일 이벤트";
	tips["gift"]	= "프리비아 선물 이벤트";
	tips["premium"]	= "프리미엄 이코노미 특가";
	tips["promotion"]	= "할인 프로모션 특가";
	tips["best_sale"]	= "PRIVIA 추천 특가";
	tips["limousine"]	= "무료 리무진 서비스";
    tips["sale2per"]	= "결제 시 2% 즉시할인 이벤트 요금<br />(단, M포인트 사용 이벤트와 중복 적용 불가)";
    tips["rf_blue"]	= "할인 운임";
    tips["sf_red"]	= "특가 운임";
	//var tips2 = '4월 발권대행료 3%(7%→4%)인하 이벤트 진행 중입니다.<br />(단, 항공사별로 좌석 클래스에 따라 인하율 상이)<br />자세한 사항은 공지사항에서 확인 하실 수 있습니다.';
	//var tips2 = '5월 발권대행료 3%(7%→4%)인하 이벤트 진행 중이며,<br />현대카드 결제시에만 발권대행료 할인 적용 됩니다.<br />(단, 항공사별로 좌석 클래스에 따라 인하율 상이)<br />자세한 사항은 공지사항에서 확인 하실 수 있습니다.';
	var tips2 = '발권대행료는 항공권 예약, 상담, 발권 대행 업무에 대한 Service Fee입니다.<br/>항공요금(TAX, 유류할증료 제외)의 7%(국제선)가 별도 부과되며,<br/>이는 할인 대상에서는 제외됩니다. (단, 항공권 환불 시 100% 환원됩니다.)';
		
	ico.live("mouseenter",function(event){
		var $this = $(this),       
		cls,
		width = $this.outerWidth() / 2;
		offset = $this.offset(),
		offsetLeft = offset.left + width -10,
		offsetTop = offset.top - 44;
        var classArray = $this.attr("class").split(' ');
        $.each(classArray,function(i){
            if(classArray[i].indexOf('ico_')>-1){
                cls = classArray[i].replace('ico_','');
                return false;
            }
        });
		var tip = tips[cls];
        
		if(tip != undefined){
			//국내선 말풍선 항공사별(KE, OZ), 좌석별 구분
			if(cls === 'rf_blue' || cls === 'sf_red'){
				var sTClass;
				var classArray2 = $this.attr("class").split(' ');
				$.each(classArray2,function(i){
					if(classArray2[i].indexOf('sT_')>-1){
						sTClass = classArray2[i].replace('sT_','');
						return false;
					}
				});
				
				if(sTClass != undefined){
					var sTAirline = sTClass.split('_')[0].toUpperCase();
					var sT = sTClass.split('_')[1].toUpperCase();
					//console.log(sTClass, sTAirline, sT);
					if(cls == 'rf_blue' && sTAirline == 'KE'){
						if(sT == 'B' || sT == 'M' || sT == 'H' || sT == 'E'){
							tip = '탑승 마일리지 적립 가능';
						}
					}
					else if(cls == 'rf_blue' && sTAirline == 'OZ'){
						if(sT == 'B' || sT == 'M' || sT == 'H' || sT == 'E' || sT == 'Q' || sT == 'K' || sT == 'S'){
							tip = '탑승 마일리지 적립 가능, <em class="color-mgt">환불 수수료 1인 5천원 부과</em>';
						}
						else if(sT == 'V' ){
							tip = '탑승 마일리지 70% 적립 가능, <em class="color-mgt">환불 수수료 1인 5천원 부과</em>';
						}						
					}
					else if(cls == 'sf_red' && sTAirline == 'KE'){
						if(sT == 'K' || sT == 'L' || sT == 'U' || sT == 'N'){
							tip = '탑승 마일리지 적립 불가';
						}
					}
					else if(cls == 'sf_red' && sTAirline == 'OZ'){
						if(sT == 'L' || sT == 'W' || sT == 'T' || sT == 'G'){
							tip = '탑승 마일리지 적립 불가, <em class="color-mgt">환불 수수료 1인 8천원 부과</em>';
						}
					}
				}
			}//.국내선 말풍선 항공사별, 좌석별 구분
			
			$("#icoToolTipBox p").html(tip);
			$("#icoToolTipBox").css("left",offsetLeft).css("top",offsetTop).show();
		}
		
		//10095 리무진 링크 추가
		if(cls == 'limousine'){
			$(this).click(function(){
				$(location).attr('href','http://www.priviatravel.com/promotion/sectionEvent/528/');
			});	
		}
		
	});
	ico.live("mouseleave",function(event){
		$("#icoToolTipBox").hide().find("p").empty();
	});
	
	help.live("mouseover",function(event){
		var $this = $(this),
		width = $this.outerWidth() / 2;
		offset = $this.offset(),
		offsetLeft = offset.left + width -10,
		offsetTop = offset.top - 70;
		
		$("#icoToolTipBox p").html(tips2);
		$("#icoToolTipBox").css("left",offsetLeft).css("top",offsetTop).show();
	});
	help.live("click",function(event){
		$("#icoToolTipBox").hide().find("p").empty();
	});
	help.live("mouseout",function(event){
		$("#icoToolTipBox").hide().find("p").empty();
	});
	
	//33147
	if($('.result_air .cont_air .name-air').length > 0){
		$('.result_air .cont_air .name-air').live("mouseenter",function(event){
			var $this = $(this),       
			cls,
			width = $this.outerWidth() / 2;
			offset = $this.offset(),
			offsetLeft = offset.left,
			offsetTop = offset.top - 44;
			var tip = $this.text();
			if(tip != undefined && tip.length > 5){			
				$("#icoToolTipBox p").html(tip);
				$("#icoToolTipBox").css("left",offsetLeft).css("top",offsetTop).show();
			}
		});
		$('.result_air .cont_air .name-air').live("mouseleave",function(event){
			$("#icoToolTipBox").hide().find("p").empty();
		});
	}
};


//서치 토글 버튼 처리
var openSearchArea = function(type){
	var posTopSearch = parseInt($("#totalSearch").css("top"));
	var searchBtnLength = $("#viewSearch").length;
	var searchFrame = $("#searchFrame");
	var thisFullLocation = window.location.host;
	var thisPartsLocation = thisFullLocation.split('.');
	var thisSubDomain = thisPartsLocation[0];
	var subDomainSearch = '';
	var searchType = '';
	var scrollObj = "body";
	if($.browser.msie){
		scrollObj = "html";
	}else if($.browser.mozilla){
		scrollObj = "body,html";
	}
	if(thisSubDomain == "lwww" || thisSubDomain == "dair" || thisSubDomain == "dhotel" || thisSubDomain == "dairtel"){
		subDomainSearch = "//dair.priviatravel.com";
	}else if(thisSubDomain == "twww" || thisSubDomain == "tair" || thisSubDomain == "thotel" || thisSubDomain == "tairtel"){
		subDomainSearch = "//tair.priviatravel.com";
	}else{
		subDomainSearch = "//air.priviatravel.com";
	}
	if(type == 'air'){
		searchType = 'AIR';
	}else if(type == 'hotel'){
		searchType = 'HTL';
	}else if(type == 'free'){
		searchType = 'ATL';
	}
	var searchFrameSrc = subDomainSearch + '/commonTotalSearch.lts?tempType=&cover=Y&history=Y&searchType=' + searchType;
	searchFrame.attr("src",searchFrameSrc);
	if(searchBtnLength > 0 && posTopSearch == -3000){
		setTimeout(function(){
			toggleTotalSearch();
		},100);
	}
	setTimeout(function(){
		$(scrollObj).scrollTop(0);
	},200);
};
var styleFixPayment = function(){
	var heights = new Array();
	$("div.payment_info_box").each(function(index, element) {
		$(this).find(".paym_table table > tbody > tr").each(function(index, element) {
			heights.push($(this).height());
		});
		$(this).find(".paym_view .contents_tp").each(function(index, element) {
			$(this).height(heights[index] - 41)
		});
	});
}

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

/* 데이트피커 일부 옵션 초기화(공휴일 처리 및 달력 2개 기본 스타일 처리 */
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

//GUIDE 생성중 확인 
//var guideInterval = setInterval(getGuideStatus, 1000*20);
/* 전체 공통 스크립트 */
$(function(){
	if(iosCheck() == false){ $("html").addClass("no_ios_device"); } // ios check	
	if(checkMobile() == true){ //모바일 check
		$("html").addClass("is_mobile");
		if($('#ifrmEventContent').length > 0){
			$('.is_mobile #content').css({'left':'auto','margin-left':'auto'});
		}
	}
	
	//마이트레블 영역 init
	initMytravel();
		
	// GUIDE 생성중 확인	
	//getGuideStatus();	
	
	// 통합검색 radio button
	//$("#totalSearch .check_terms .terms").buttonset();


	//통합검색 열고 닫기
	/*$("#viewSearch").click(function(){
		if ($("#ptSearch").css("display") == "none"){
			$(this).addClass("on");
			$("#ptSearch").show();
			return false;
		} else {
			$(this).removeClass("on");
			$("#ptSearch").hide();
			return false;
		}
	});*/
	
	//focus check (로그인에 사용)
	var $focusForm = $(".focusChk");
	$focusForm.focus(function(){
		$(this).prev("label").hide();
	});
	$focusForm.focusout(function(){
		if ($(this).val()) {
			$(this).prev("label").hide();
		} else {
			$(this).prev("label").show();
		}
	});
	
	/* select box group */
	$('body').append( '<div class="select-group" style="position: absolute;top: 0; z-index: 5000;"></div>' );
	
	/* select box 호출 */
	/*
	if($(document).find("select").length > 0){
		$("select").selectmenu();
		
	}
	*/
	
	
	/* 모바일일 경우 툴팁을 클릭해서 닫게끔 처리 */ /* 2013.08.22 의심스러워 주석 처리 */
	/*if(checkMobile() == true){
		$(".help_text .tip_box").bind("click",function(){
			$(this).hide();
		});
	}*/
	var inputText = $("input.text[type='text']");
	var inputText2 = $("input.text[type='password']");
	var textArea = $("textArea.textarea");
    
    if(inputText != undefined && inputText.size() !== 0){
	   inputText.placeHolder();
    }
    if(textArea != undefined && textArea.size() !== 0){
	   textArea.placeHolder();
    }
    if(inputText2 != undefined && inputText2.size() !== 0){
	   inputText2.placeHolder();
    }
	
	$("#skipnav").find("a").focus(function(){
		$(".bnr_roll, .item_rolling, .pack_banner, .subpack_banner").each(function(idx,elem){
			if(!$(this).find('.btn_move').hasClass("btn_play")){				
				$(this).find('.btn_move').trigger('click');
			}
			$(this).find('.roll_img > ul').css({ 'margin-left': 0});
			$(this).find('.roll_btn').find('em').removeClass("on");
			$(this).find('.roll_btn').find('em').eq(0).addClass("on");
		});
	});
	/*
	
	obj.attr("tabindex","0");
	obj.focus(function(){
		if(autoplay == true){
			obj.find('.btn_move').trigger('click');
		}
		obj.find('.roll_img > ul').css({ 'margin-left': 0});
		obj.find('.roll_btn').find('em').removeClass("on");
		obj.find('.roll_btn').find('em').eq(0).addClass("on");
	});
	
	*/
	
	initToolTip();
	
	if($("div.payment_info_box").length > 0){
		$("div.payment_info_box").each(function(index, element) {
			var heights = new Array();
			$(this).find(".paym_table table > tbody > tr").each(function(index, element) {
				heights.push($(this).height());
			});
			$(this).find(".paym_view .contents_tp").each(function(index, element) {
				$(this).height(heights[index] - 41)
			});
		});
	}
	
});
/*
$(window).unload(function() {
  if($("body").hasClass("isolate")){
	  return window.location.replace(self.location);
  }
});
*/

$(window).load(function(){
	
	//결제 폼 스타일 fix
	if($("div.payment_info_box").length > 0){
		styleFixPayment();
	}
		
});

/* 함수명 : centerCrop (jQuery plugin)
 * 설명   : 이미지 crop
 * 사용법 : crop할 이미지에 class="centerCrop",
			crop할 부모에 width,height 기입
			호출은 $('.centerCrop').centerCrop();
 */     
(function($){
	$.fn.centerCrop = function(option){
		var params = $.extend({			
			
		}, option);

		return this.each(function(){
			var $this = $(this),
				$targetImgSrc = $this.attr('src');
				
			$this.parent().css({backgroundImage:'url("'+$targetImgSrc+'")',backgroundSize:'cover',backgroundPosition:'center center'});	
			$this.hide();
			
		});		
	}
})(jQuery);

/* 함수명 : imgCrop (jQuery plugin)
 * 설명   : 이미지 crop
 * 사용법 : 기본형 
           - crop할 이미지에 class="imgCrop",
		     crop할 부모에 width,height 기입(마스크는 width:100%, height:100%)
			 호출은 $('.imgCrop').imgCrop();
	       
		   부모 element가 없는 형 
		   - crop할 이미지에 특정 select를 부여 ex) id="cropImg1"
		     호출 시 $('선언한 셀렉터').imgCrop({w:100,h:100});  
			 매개변수 w,h 의 기본은 px값 이며, w:70%,h:80% 등의 퍼센트도 기입 가능
 */            

(function($){
	$.fn.imgCrop = function(option){
		var params = $.extend({			
			pos : 'center center',
			w : '100%',
			h : '100%'
		}, option);

		return this.each(function(i){
			var $this = $(this),
				$imgel = this;
			    unit = "px",
                imgWrap = null;
			loadCheck();
			function loadCheck(){
				if($imgel.complete){
					$this.wrap('<span class="imgCrop-wrap"></span>');
                    imgWrap = $this.closest('.imgCrop-wrap');
					if(params.w.indexOf('%')){
					   unit = "";
					}
					imgWrap.css({width:params.w+unit,height:params.h+unit});
					var cw = imgWrap.width();
					var ch = imgWrap.height();
					var iw = $this.width();
					var ih = $this.height();

					if(cw/ch  <= iw/ih){ //가로형
						var r = iw/ih;
						var ml = -(ch * r - cw)/2;
						ih = '100%';
						iw = 'auto';
						$this.css({width:iw,height:ih,marginLeft:ml});
					}
					else{
						var r = ih/iw;
						var mt = -(cw * r - ch)/2;
						ih = 'auto';
						iw = '100%';
						$this.css({width:iw,height:ih,marginTop:mt});
					}
					$this.show();
				}
				else{
					setTimeout(loadCheck,1000);
				}
			}
			/*
			$this.load(function(){
				$this.wrap('<span class="imgCrop-wrap"></span>');
				if(params.w.indexOf('%')){
				   unit = "";
				}
				$this.closest('.imgCrop-wrap').css({width:params.w+unit,height:params.h+unit});
				var cw = $this.closest('.imgCrop-wrap').width();
				var ch = $this.closest('.imgCrop-wrap').height();
				var iw = $this.width();
				var ih = $this.height();
				
				if(cw/ch  <= iw/ih){ //가로형
					var r = iw/ih;
					var ml = -(ch * r - cw)/2;
					ih = '100%';
					iw = 'auto';
					$this.css({width:iw,height:ih,marginLeft:ml});
				}
				else{
					var r = ih/iw;
					var mt = -(cw * r - ch)/2;
					ih = 'auto';
					iw = '100%';
					$this.css({width:iw,height:ih,marginTop:mt});
				}
				$this.show();
			})	
			*/
		});		
	}
})(jQuery);

/* 함수명 : slideUI (jQuery plugin)
 * 설명   : 좌우 슬라이딩 롤링 UI
 * 사용법 : 타임세일 UI에 현재 사용되고 있음.
 */    
(function($){
    $.fn.slideUI = function(options){
        var defaults = $.extend({
            animate       : true,
            slideSpeed    : 500,
            interval      : 3000,
            ctrlPrev      : '.prev',
            ctrlNext      : '.next',
			slideNav	  : '.slide-nav li',
            randomDisplay : false,
			otherLinkBtn  : false,
			otherLink     : '',
            displayNum    : 1,
            unit          : '.slide-item',
            mask          : {selector:'.slide-mask', width:'auto',height:'auto'}
            
        },options);
        return this.each(function(){
            var $this     = $(this);
            var $prev     = $this.find(defaults.ctrlPrev);
            var $next     = $this.find(defaults.ctrlNext); 
			var $nav      = $this.find(defaults.slideNav)
            var $mask     = $this.find(defaults.mask.selector);            
            var $unit     = $this.find(defaults.unit);
            var $unitLen  = $unit.length;
			var $navlen   = $nav.length;
            var unitW     = defaults.mask.width;
            var idx = defaults.randomDisplay ? Math.floor(Math.random() * $unit.length):0;            
            var isover = false; 
			var isnav = false;
			var $otherLink = '';
			
			if(defaults.otherLinkBtn){
				$otherLink = $this.find(defaults.otherLink);
			}
            if(!$unitLen){
				$this.remove()
			}
			if($unitLen == 1){
				$prev.hide();
				$next.hide();
			}
			if($navlen > 0){
				isnav = true;
			}
            $mask.css({width:unitW ,height:defaults.mask.height,position:'relative',margin:'0 auto',overflow:'hidden'});
            $unit.css({position:'absolute',width:unitW, left:unitW});            
            $unit.eq(idx).addClass('current').css('left','0');
            
            $($this).hover(function(){isover=true},function(){isover=false}); 
            if((defaults.displayNum < $unit.length) && defaults.interval > 0) setInterval(autoScroll,defaults.interval);
            
            $next.on('click',next);
            $prev.on('click',prev);
			if(isnav){
				$nav.on('click',nav);
			}
			
			
			if(defaults.otherLinkBtn) linkChange();
			
			function autoScroll(){
				if(!isover) next();
			}
            
            function next(){
                if($unit.is(':animated')) return false;
                standbyNext();
                idx = (idx+1 == $unitLen) ? 0 : ++idx;                
                $this.find('.current').animate({left:'-'+unitW}, defaults.slideSpeed, function(){
                    $(this).removeClass('current');
                });
                $unit.eq(idx).animate({left:0}, defaults.slideSpeed, function(){
                    $(this).addClass('current');
					if(defaults.otherLinkBtn) linkChange();
                });
				if(isnav){
					navActive()
				}
            }
            
            function prev(){
                if($unit.is(':animated')) return false;
                standbyPrev();
                idx = (idx == 0) ? $unitLen-1 : --idx;                
                $this.find('.current').animate({left:unitW}, defaults.slideSpeed, function(){
                    $(this).removeClass('current');
                });
                $unit.eq(idx).animate({left:0}, defaults.slideSpeed, function(){
                    $(this).addClass('current');
					if(defaults.otherLinkBtn) linkChange();
                });
				if(isnav){
					navActive()
				}
            }
			
            function nav(){
				var n_idx = $(this).index();
				if(idx == n_idx){
					return false;
				}
				else if(idx > n_idx){
					idx = n_idx+1;
					prev();
					return false;
				}
				else{
					idx = n_idx-1;
					next();
					return false;
				}
			}
			function navActive(){
				$nav.parent().attr('class','ac'+(idx+1));
				$nav.each(function(i){
					if(i==idx){
						$(this).addClass('on');
					}
					else{
						$(this).removeClass('on');
					}
				})
			}
            function standbyNext(){
                $unit.not('.current').css('left',unitW);
            }
			
            function standbyPrev(){
                $unit.not('.current').css('left','-'+unitW);
            }  
			
			function linkChange(){
				$otherLink.attr('href', $this.find('.current > a').attr('href'));
			}
        });
    }
})(jQuery);

/* 함수명 : mainVisual (jQuery plugin)
 * 설명   : 이미지 배너(fade형)
 * 사용법 : $('타겟').mainVisual({
				interval : 11000
			});
 */    
(function($){
	$.fn.mainVisual = function(option){
		var params = $.extend({			
			//thumbnail : true,	
			interval : 4000
		}, option);

		return this.each(function(){
			var $visualBox = $(this),
				$controller = $visualBox.find('.controller li a'),
				$listBox = $visualBox.find('.visualList'),
				$play = $visualBox.find('.play a');
				$stop = $visualBox.find('.stop a');
				$item = $listBox.find('li'),
				itemSize = $item.size(),
				count = 0,
				stopCheck = false;
				inv = '';

			$item.eq(0).fadeIn(2500);
			//$controller.eq(0).find('img').attr('src',$controller.eq(0).find('img').attr('src').replace('.png','_on.png'));
			$controller.on('click',function(){
				var idx = $(this).parent().index();
				if($item.eq(idx).is(':hidden')){
					count = idx;
					visualplay();
				}
			});
			$visualBox.on({
				'mouseenter focusin' : function(){
					clearInterval(inv);
				},
				'mouseleave focusout' : function(){
					if(!stopCheck){
						clearInterval(inv);
						inv = setInterval(visualAuto,params.interval);
					}
				}
			})
			$play.on('click',function(){
				stopCheck = false;
				clearInterval(inv);
				inv = setInterval(visualAuto,params.interval);
				return false;
			})
			$stop.on('click',function(){
				stopCheck = true
				clearInterval(inv);
				return false;
			})
			function visualAuto(){
				if(count == itemSize-1){count = 0}
				else{count++;}
				visualplay();
			}
			function visualplay(){
				$item.each(function(i){
					if(count == i){
						$(this).stop().fadeIn(2500);
					}
					else{
						$(this).stop().fadeOut(2500);
					}
				})
				$controller.each(function(i){
					if(count == i){
						$(this).find('img').attr('src',$(this).find('img').attr('src').replace('.png','_on.png'));
					}
					else{
						$(this).find('img').attr('src',$(this).find('img').attr('src').replace('_on.png','.png'));
					}
				})
			}
			inv = setInterval(visualAuto,params.interval);
		});
	}
})(jQuery);

/* 함수명 : fakeCheckbox (jQuery plugin)
 * 설명   : 디자인된 checkbox
 * 사용법 : checkbox 전체를 감사는 wrapper 생성 후
		   호출은 $('생성한 wrapperID').fakeCheckbox();
 */   

(function($){
	         

	$.fn.fakeCheckbox = function(option){
		var params = $.extend({			
		
		}, option);

		return this.each(function(){
			var $this = $(this),
			    $prevCheckbox = $this.find('input:checkbox'),
			    $label = $this.find('label');
			
			$prevCheckbox.css({position:'absolute',left:'-9999px'});
			
			$label.each(function(){
				$(this).before('<span class="fakeCheck"></span>');
			})
			$this.find('.fakeCheck').on('click',function(){
				$(this).next().focus();
				var idx = $(this).index('.fakeCheck');
				$label.eq(idx).toggleClass('selectLabel');
				$(this).toggleClass('fakeChecked');
				$prevCheckbox.eq(idx).trigger('click');
			})
			$prevCheckbox.on('keydown',function(e){
				if(e.keyCode == 13 || e.keyCode ==  32){
					$(this).next().next().toggleClass('selectLabel');
					$(this).next().toggleClass('fakeChecked');
				}
			})
			$prevCheckbox.on('focusin',function(){
				$(this).next().addClass('checkFocus');
			})
			$prevCheckbox.on('focusout',function(){
				$(this).next().removeClass('checkFocus');
			})
			$label.on('click',function(){
				$(this).prev().trigger('click');
				return false;
			})
		});		
	}
})(jQuery);

//패키지 탑 버튼
function topBtnCtrl(){
    return false;
	//내용 onload로 변경
}
$(function(){
    if($('#btn-top').size() > 0){
        $(window).scroll(function(){
            var t = $(window).scrollTop();
            var dh = $(document).height();
            var wh = $(window).height();
            //$('#btn-top').css('top',t+wh-50);
            if(t > 700 && t > (wh/2)){
                $('#btn-top').fadeIn(700);
            }
            else{
                $('#btn-top').stop().fadeOut(200);
            }
            if(t == 0){
                $('#btn-top').stop().fadeOut(0);
            }
        })

        $('#btn-top').on('click',function(){
            $(this).fadeOut(0);
            $("body").animate({scrollTop:0}, 200);
        })
    }
})


/*
 * 문서명 : dprs.js 
 * 설명 : front-end 공통 스크립트 (DPRS 오픈 시 ui.js에 귀속 됨)
 * 작성자 : 서성우
 */


/*
 * 함수명 : adjustPayCalcWidth
 * 설명   : 결제요금의 계산식을 표현하는 UI에 쓰이며, 각 TD의 넓이를 동일하게 맞춰주는 스크립트로, 해당 UI가 나오는 페이지에 함수를 호출해준다.
 * 작성자 : 정일영
 */
function adjustPayCalcWidth(){
	$('.pay-calc').each(function(){
		var $addClassTarget = $(this).children('table');
		var totNum = $(this).find('thead th').length;
		$addClassTarget.addClass('item-num-'+totNum)
	});
}

/*
 * 함수명 : adjustNavNewWidth
 * 설명   : 페이지의 navi중 sub navi UI에 쓰이며, 각 li의 넓이를 동일하게 맞춰주는 스크립트로, 해당 UI가 나오는 페이지에 함수를 호출해준다.
 * 작성자 : 박선희
 */
function adjustNavNewWidth(){
	$('.nav-new').each(function(){
		var $addClassItem1 = $(this);
		var totNum1 = $(this).find('> li').length;
		$addClassItem1.addClass('item-'+totNum1);
		if($(this).find('>li >ul').length != 0){
			var $addClassItem2 = $(this).find('> li > ul');
			var totNum2 = $(this).find('> li > ul > li').length;
			if($addClassItem2.length !=0){$(this).css({height:'92px'});}
			$addClassItem2.addClass('sub-item-'+totNum2);
		}
	});
}

/*
 * 함수명 : formHasValueBg
 * 설명   : input.text 또는 .textarea가 value가 있는 채로 focusout되었을 시 사선으로 된 백그라운드를 해지하는 함수(가독성 확보).
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
 * 함수명 : cufonReplace
 * 설명   : you&i폰트 사용(타이틀, 버튼)을 위해 처음 페이지 로드시 cufon replace 실행 (ajax처리하는 경우 그 후에 한번 더 호출해준다)
 * 작성자 : 박선희
*/
function cufonReplace(){
	if(typeof(Cufon) == "function"){
		//Cufon.replace('.ymhb,.svc-title > b,.btn-wf,.layer_pop .heading,.digit-wf,.step-new li,.step-new2 li,.product-status, .section-title3 > b',{fontFamily:'ymhb',textShadow:'2px 2px black'});
		Cufon.replace('.ymhb,.svc-title > b,.btn-wf,.btn-lg-gray,.btn-lg-magenta,.layer_pop .heading h1,.layer_pop .heading h2,.digit-wf,.step-new li,.step-new2 li,.product-status, .section-title3 > b, .pb-section-title1 p, .pb-section-title2 p, .topic-copy, .pb-section-title, .gt-tit, .nt-tit, .nt-text',{fontFamily:'ymhb'});
		Cufon.replace('.ymhr,.content-title > b,.content-title2 > b',{fontFamily:'ymhr'});
		Cufon.replace('.ymhb-menu',{fontFamily:'ymhb',hover:true,hoverables:{span:true}});
	}	
}

/*
 * 함수명 : shuffleRandom
 * 설명   : 0~N까지의 중복되지 않는 난수 집합 리턴
 * 사용처 : dummyImage함수 내부에서 사용 중.
 * 작성자 : 정일영
 */
function shuffleRandom(n){
    var ar = new Array();
    var temp;
    var rnum;
    for(var i=0; i<n; i++){
        ar.push(i);
    }
    for(var i=0; i< ar.length; i++){
        rnum = Math.floor(Math.random() *n);
        temp = ar[i];
        ar[i] = ar[rnum];
        ar[rnum] = temp;
    }
    return ar;
}
    
/*
 * 함수명 : drawImageProp
 * 설명   : dummyImage함수로부터 dependancy한 함수로서, canvas에 이미지를 비율조정과 center cropping하는 기능.
 * 사용처 : dummyImage함수내부에서 사용 중.
 * 작성자 : 정일영
 */
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
    if (arguments.length === 2){
        x = y = 0;
        w = ctx.canvas.width;
        h = ctx.canvas.height;
    }
    offsetX = offsetX ? offsetX : 0.5;
    offsetY = offsetY ? offsetY : 0.5;
    if (offsetX < 0) offsetX = 0;
    if (offsetY < 0) offsetY = 0;
    if (offsetX > 1) offsetX = 1;
    if (offsetY > 1) offsetY = 1;
    var iw = img.width,
        ih = img.height,
        r = Math.min(w / iw, h / ih),
        nw = iw * r,
        nh = ih * r,
        cx, cy, cw, ch, ar = 1;  
    if (nw < w) ar = w / nw;
    if (nh < h) ar = h / nh;
    nw *= ar;
    nh *= ar;
    cw = iw / (nw / w);
    ch = ih / (nh / h);
    cx = (iw - cw) * offsetX;
    cy = (ih - ch) * offsetY;
    if (cx < 0) cx = 0;
    if (cy < 0) cy = 0;
    if (cw > iw) cw = iw;
    if (ch > ih) ch = ih;
    ctx.drawImage(img, cx, cy, cw, ch,  x, y, w, h);
    ctx.font = "bold 17px Arial";
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(0,0,0,1)';
    ctx.shadowBlur = 10;
    ctx.fillStyle = 'rgba(255,255,255,.8)';
    ctx.fillText(w+" x "+h,w/2,h/2+10);
    var c = ctx.canvas;
    setTimeout(function(){
      var $targetImg = $(c).prev()
      $targetImg.attr({src:c.toDataURL()}).removeAttr('dummy-src').end().remove();
        
      if($targetImg.hasClass('centerCrop')){
        $targetImg.centerCrop();
      }
    },10);
}
    
/*
 * 함수명 : drawDummyImage
 * 설명   : 썸네일 이미지의 더미를 자동생산해서 사용자에게 지정받은 사이즈로 출력.
 * 사용처 : ui.js의 document.ready 구문에 실행함수 탑재.
 * 작성자 : 정일영
 */
function drawDummyImage(){
    var shuffleRandomNum = shuffleRandom(10);
    $('img[dummy-src]').each(function(i){
        var _this = this;
        var keyword = $(this).attr('dummy-src').split('/')[0];
        var filename;
        var imgPrefixPath = 'http://tstatic.priviatravel.com/images/front/travel/dummy-src/';
        var width = $(this).attr('dummy-src').split('/')[1];
        var height = $(this).attr('dummy-src').split('/')[2];
        if(keyword == 'hotel') filename = 'hotel'
        else filename = 'resort';
        if($.browser.msie && $.browser.version == '8.0'){ //ie8 canvas미지원으로 인한 처리
            this.src = imgPrefixPath+filename+'_'+shuffleRandomNum[i%10]+'.jpg';
            this.style.width=width+'px';
            this.style.Height=height+'px';
            this.removeAttribute('dummy-src');
        } else {            
            var c = document.createElement('canvas');
            c.width = width;        
            c.height = height;
            c.className ='dummy-canvas';
            $(this).after(c);
            var canvas = c;
            var ctx = canvas.getContext('2d');
            var imageObj = new Image();
            var w = canvas.width;
            var h = canvas.height;
            var x = w / 2;
            var y = h / 2 + 4;
            var ran = Math.floor(Math.random()*10);
            imageObj.setAttribute('crossOrigin', 'anonymous');
            imageObj.src=imgPrefixPath+filename+'_'+shuffleRandomNum[i%10]+'.jpg';
            imageObj.onload = function(){
                drawImageProp(ctx, this, 0, 0, w, h);
            }
        }
    });
} 
    
/*
 * 함수명 : dummyImage
 * 설명   : drawDummyImage()함수가 실행될 조건을 명시하는 함수로서, 리얼계가 아닐때만 drawDummyImage가 실행.
 * 사용처 : ui.js의 document.ready 구문에 실행함수 탑재.
 * 작성자 : 정일영
 */  
function dummyImage(){
    var thisFullLocation = window.location.host;
	var thisPartsLocation = thisFullLocation.split('.');
	var thisSubDomain = thisPartsLocation[0];
    var realSD = ['www','hotel','air','airtel','package'];
    var isReal = false;
    $.each(realSD,function(){
        if(this == thisSubDomain) isReal = true;        
    });
    if(isReal === false) drawDummyImage();
}

$(function(){
    dummyImage();
});	

/* 함수명 : rankUI (jQuery plugin)
 * 설명   : 실시간 검색어 순위 자동롤링
 * 사용법 : 패키지 검색결과 UI에 현재 사용되고 있음.
 */ 

(function($){
	$.fn.rankUI = function(options){
		var defaults = $.extend({
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
				setT,
				interT;

			$mask.css({overflow:'hidden',height:$unitH});
			$rollWrap.append($cloneUnit);
			$($this).hover(function(){
				setT = setTimeout(function(){
					isoverCheck = true;
					$this.addClass('on');
					$rollWrap.stop().animate({marginTop:'0'},0);
				},300);
			},function(){
				clearTimeout(setT);
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
				$rollWrap.animate({marginTop:rollWrapH},500);
			}
			interT = setInterval(autoPlay,3000);
		});
	}
})(jQuery);

/* 함수명 : updownRoll (jQuery plugin)
 * 설명   : 공지사항 롤링
 * 사용법 : 공지사항 게시물이 1개씩 위아래 롤링
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

/* 기획전 color 처리 element 생성*/
var promotion_element = {
	gray_element : document.createElement('gray'), 
	blue_element : document.createElement('blue'),
	magenta_element : document.createElement('magenta'),
	red_element : document.createElement('red')
}

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
/* 총요금 박스 height 조정 */
function priceWrapResize(){
	if($('.total-predict-fare-wrap').size() > 0){
		$('.total-predict-fare-wrap').each(function(){
			var innerH = parseInt($(this).find('.total-predict-fare-table table').height()) -55;
			if(innerH > $(this).find('.total-predict-fare-result .inner').height()){
				$(this).find('.total-predict-fare-result .inner').css('height',innerH);
			}
		})
	}
}

/*
 * 함수명 : toggleResultList
 * 설명   : 항공 요금표기 개선(리스트 열고 닫기)
 * 작성자 : 권순환
 */ 
function toggleResultList(){
	$('.airline_new .result_air > li .cont_air').click(function(e){
		if ( $(this).parent().hasClass('on') == true ) {
			$(this).parent().find('> .cont_detail').hide();
			$(this).parent().removeClass('on');
		}
		else{
			if ( $('.result_air > li.on').hasClass('on') == true ) {
				$('.result_air > li.on > .cont_detail').hide();
				$('.result_air > li.on').removeClass('on');
			}
			$(this).parent().addClass('on');
			$(this).parent().find('> .cont_detail').show();
			scrollTopThis($(this));
		}
		e.preventDefault();
	});
}

/*
 * 함수명 : toggleResultListAdd
 * 설명   : 항공 요금표기 개선(리스트 더보기 열고 닫기)
 * 작성자 : 권순환
 */ 
function toggleResultListAdd(){
	$('.airline_new .btn-more').click(function(){
		if($(this).closest('li').hasClass('on') == true){
			$(this).closest('li').find('> .cont_detail').hide();
			$(this).closest('li').removeClass('on');
		}
		
		if($(this).hasClass('on') == true){
			$(this).closest('li').find('.list_class_air').slideUp('fast');
			$(this).removeClass('on');
		}
		else{
			$(this).addClass('on');
			$(this).closest('li').find('.list_class_air').slideDown('fast');
		}
		
		return false;
	});
}

/*
 * 함수명 : openAirlineReload
 * 설명   : 항공 요금표기 개선(항공 재검색 열고 닫기)
 * 작성자 : 권순환
 */ 
function openAirlineReload(){
	$('.airline_new .search_title .section .btn').click(function(e){
		if($('.airline_new .airline_reload').css('display') == 'block'){
			$('.airline_new .airline_reload').hide();
		}
		else{
			$('.airline_new .airline_reload').show();
		}
		e.preventDefault();
	});
	
	$('.airline_new .recently-search-title > a').click(function(e){
		$('.airline_new .airline_reload').hide();
		e.preventDefault();
	});
}

/*
 * 함수명 : toggleTotalDetail
 * 설명   : 항공 요금표기 개선(요금표 상세 요금 열고 닫기)
 * 작성자 : 권순환
 */ 
function toggleTotalDetail(){
	$('.airline_new .total_detail dl dt a').click(function(e){
		if($(this).hasClass('on') == true){
			$(this).parent().next().slideUp('fast');
			$(this).removeClass('on');
		}
		else {
			$(this).parent().next().slideDown('fast');
			$(this).addClass('on');
		}
		e.preventDefault();
	});
}

/*
 * 함수명 : toggleListHeadFilter
 * 설명   : 항공 요금표기 개선(검색결과 리스트 헤더 필터메뉴 열고 닫기)
 * 작성자 : 권순환
 */ 
function toggleListHeadFilter(){
	$('.airline_new .header_select span.tit').click(function(e){
		if($(this).closest('li').hasClass('on') == true){
			$(this).closest('li').removeClass('on');
		}
		else{
			$(this).closest('li').addClass('on');
		}
		e.stopPropagation();
	});
	$('.airline_new .header_select span.tit a').click(function(e){e.preventDefault();});
	$('.airline_new .result_head .header_select > li').mouseleave(function(){
		if($(this).closest('li').hasClass('on') == true){
			$(this).closest('li').removeClass('on');
		}
	});
	
	/*$('.airline_new .select_multiple .option_list').click(function(e){e.stopPropagation();});
	$(document).click(function(e){
		$('.airline_new .header_select li.on').removeClass('on');
	});*/
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
 * 함수명 : oldVerClassRemove
 * 설명   : 기존 .old-ver css 충돌 때문에 제거
 * 작성자 : 권순환
 */ 
function oldVerClassRemove(){
	try{$('.old-ver').removeClass();}catch(e){}
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
 * 함수명 : floatMenuPosRe
 * 설명   : content 우측 플로팅 메뉴 
 * 작성자 : 권순환
 */
(function($){
	$.fn.floatMenuPosRe = function(options){
		var defaults = $.extend({
			fmTop :125, 
			fmLeft :20, 
			fmFixTop :140, 
			contWid :950, 
			fmStop : $('#footer-sec')
		},options);		
		
		return this.each(function(){
			var sc,winGap,winWid,innerleft,innerTop,fixedLeft;
			var $this = $(this);
			var inner = $this.find('.layout-right');
			var fmTop = defaults.fmTop;
			var fmLeft = defaults.fmLeft;
			var fmFixTop = defaults.fmFixTop;
			var fmStop = defaults.fmStop;
			var contWid = defaults.contWid;
			
			if(defaults.fmStop.length <= 0){ fmStop = null; }			
			$this.css({'top':fmTop+'px','maring-right':-(innerleft+$this.width())+'px'});
			innerleft = contWid/2 + fmLeft;

			function fmPos(ml, t){
				inner.css({'margin-left':ml,'top':t});
			}
			
			function pos(){
				innerTop = $this.offset().top - fmFixTop;
				sc = $(window).scrollTop();	
				if(innerTop < sc){
					if(fmStop != null){fmStop = defaults.fmStop.offset().top - defaults.fmStop.outerHeight(true) - inner.height()+240;}
					if(fmStop < sc && fmStop != null){
						$this.removeClass('fixed');
						var t = fmStop-$this.offset().top+fmFixTop;
						fmPos('',t+'px');
					}
					else{
						$this.addClass('fixed');
						if($('.is_mobile').length > 0){
							fixedLeft = innerleft;
						}
						else{
							winWid = $(window).width();
							if(winWid < contWid){
								winGap = contWid - winWid;
							} else {
								winGap = $('body').width() - winWid;
							}     
							fixedLeft = innerleft - $(window).scrollLeft() + (winGap/2);
						}
						fmPos(fixedLeft+'px',fmFixTop+'px');
						//console.log('winWid =', winWid, 'contWid =', contWid, 'winGap =', winGap, 'scrollLeft =', $(window).scrollLeft(), 'fixedLeft =',fixedLeft);
					}
				}
				else {
					$this.removeClass('fixed');
					fmPos('','');
				}
			}
			
			//스크롤
			$(window).bind('scroll resize',pos); 

			//롤오버효과
			$this.find('.section .vis').hover(function(){
				$(this).find('.over').stop().animate({top:'0'}, 400, 'easeOutExpo');
			},function(){
				$(this).find('.over').stop().animate({top:'100%'}, 400, 'easeOutExpo');
			});
			
			//슬라이드 실행
			if (typeof (defaults.sCallback) == 'function') {
				defaults.sCallback($this);
			}
			
		});
	}
})(jQuery);

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
		var thisUrl = document.location.href;
		var thisPkg = thisUrl.split('pkgRenewal/');
		if(thisUrl.indexOf('.lts?') > -1){
			return false;
		}
		for(var i=0;i<seoData.headData.length;i++){
			if(thisUrl.indexOf(seoData.headData[i].url) > -1){
				if(seoData.headData[i].url == "pkgRenewal/" && thisPkg[1].split(/\s/).join("")!=""){
					break;
				}
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
/* dprs오픈시점에 ui.js의 '전체 공통 스크립트(document.ready)'에 formHasValueBg()가 추가되어야 한다.  */
$(function(){
	formHasValueBg();
	cufonReplace();
	//seoTitle();
	//old-ver 
	if($('#lpuZipcode').size() > 0 || $('#layerPopSandEmail').size() || $('#divGiftReg').size()){
		if($('.old-ver').size() > 0){
			$('.old-ver').removeClass('old-ver');
			$('#wrap #content').wrap('<div class="old-ver">');
		}
	}
	
	if($('.imgCrop').length > 0 ){ $('.imgCrop').imgCrop(); }
	
	/*
	$('head').append('<meta name="google-site-verification" content="8lm4neGkIHHnzHD_x2qCvgG26Sm97YQh1m_nauytBtM" />')
	$('head').append('<meta name="naver-site-verification" content="a0340d5e2f26ce00a7adc6652c36c967fe563783"/>')
    */
	
    // 메인 레이어팝업 위치 수정
    var mainnotipop;
    if($('.pu_notice').length > 0){
        mainnotipop = $('.pu_notice').detach();
        $('body').append('<div id="pu-notice-origin" style="width:1200px;position:absolute;top:0;left:50%;margin-left:-600px"></div>');
        $('#pu-notice-origin').html(mainnotipop);
    }
	lowIEVersion()  // ie 버전별 대응을 위해 html에 class 삽입
    priceWrapResize() // 총요금 박스 height 조정
});

/* gnb 개편 */
function injectionNavMenu(){

	//gnb sub메뉴 삽입
	var code = new Array();
	$('#gnb-nav > li').each(function(i){
		code[i] = $(this).attr('id').split('-')[2]; //gnb-item-{key}
	});
	var totalNav = '';
	for(key in navData){
		totalNav += '<li class="'+key+'" >';
		totalNav += '<h3><a href="'+navData[key].link+'"'+(navData[key].newWindow?' target="_blank"':'')+'>'+navData[key].title+'</a></h3>';
		if(navData[key].subNav.length > 0){
			totalNav += '<ul>';
			for(i=0;i<navData[key].subNav.length;i++){
				totalNav += '<li><a href="'+navData[key].subNav[i].link+'"'+(navData[key].subNav[i].newWindow?' target="_blank"':'')+'>'+navData[key].subNav[i].title+'</a></li>';
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
				$('.total-nav-layer').show();
			}
			else{
				$('.total-nav-layer').hide();
				$(this).removeClass('on');
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
	/*
	$('#gnb-nav > li > a').on('mouseenter focusin',function(){
		var _this = this;
		if(menuleave) clearTimeout(menuleave)
		memuenter = setTimeout(function(){
			$(_this).parent().siblings('li.ov').removeClass('ov').end().addClass('ov');		
			if($(_this).parent().children('.gnb-sub').length || (isOpenType && !$(_this).parent().hasClass('on'))) $('.gnb-sub-wrap').show();
			else $('.gnb-sub-wrap').hide();

			if($('.total-nav-layer').is(':visible')){
				$('.total-nav-layer').hide();
				$('.btn-total-nav').removeClass('on');
			}
			if($('#quickSearch-holder').is(':visible')){
				$('.btn-quickSearch').trigger('click');
			}
			if($('.l-total-nav-open').hasClass('on')){
				$('.l-total-nav-open').removeClass('on');
				$('.l-total-nav-layer').hide();
			}
		},220);

		$(this).on('mouseleave  focusout',function(){
			if(memuon) clearTimeout(memuenter);	
		});
	});

	$('#gnb-nav').on('mouseleave',function(){
		menuleave = setTimeout(function(){
			$('#gnb-nav > li.ov').removeClass('ov');
			$('.gnb-sub-wrap').hide();
		},200)
		
	}); 
	*/
	var menu_over,menu_leave,submenu_leave;
	var allLen = $('#gnb-nav > li').length;
	$('#gnb-nav > li > a').on('mouseenter focusin',function(){
		var _this = this;
		if(submenu_leave) clearTimeout(submenu_leave);
		if(menu_leave) clearTimeout(menu_leave);
		if(menu_over) clearTimeout(menu_over);
		
		menu_over = setTimeout(function(){
			$(_this).parent().siblings('li.ov').removeClass('ov').end().addClass('ov');		
			if($(_this).parent().attr('id') == "gnb-item-promotion"){return false;}
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
			if($('.pkg-p-search').hasClass('on')){
				$('.pkg-p-search').removeClass('on');
				$('.l-pkg-sub-search-wrap').hide();
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
		$(this).parent().removeClass('ov');
		if($('#header-new').hasClass('gnb-open')){
			$('#gnb-nav').trigger('mouseleave');
		}
	});
}
 
function initGNB(){
	injectionNavMenu();
	eventBindNavMenu();
}
function btnSfToggle(btn,target){
    var bt = $(btn),
        tg = $(target);
    
	bt.on('click',function(){
		if(tg.is(":hidden")){
            bt.removeClass('closed').addClass('opened');
            tg.show();   
             
        }
        else{
            bt.removeClass('opened').addClass('closed');
            tg.hide();   
        }
		return false;
	});
}
$(function(){
	if($('#nav-wrap').size() > 0){
		initGNB();
	}
	
	$('.btn-quickSearch').on('click',function(e){
		
		if($('.btn-total-nav').hasClass('on')){
			$('.btn-total-nav').removeClass('on');
			$('.total-nav-layer').hide();
		}
		if($('.l-total-nav-open').hasClass('on')){
			$('.l-total-nav-open').removeClass('on');
			$('.l-total-nav-layer').hide();
		}
		if($('.l-total-nav-open').hasClass('on')){
			$('.l-total-nav-open').removeClass('on');
			$('.l-total-nav-layer').hide();
		}
		if($('.l-gnb-sub').is(':visible')){
			$('.l-gnb-sub').hide();
		}
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('#quickSearch-holder').hide();			
		} else {
			$(this).addClass('on');			
			$('#quickSearch-holder').show();
		}
	});

	$('#recently-search-close').live('click',function(){
		$('.btn-quickSearch').trigger('click');
	});
	
});

/* 디자인 라디오 버튼 
//실행방법 : $('.radioSet').radioSet();

(function($){
	$.fn.radioSet = function(option){
		var params = $.extend({			
		
		}, option);

		return this.each(function(){
			var $this = $(this),
			    $item = $this.find('input:radio'),
				$label = $this.find('input:radio + label')
			
			$label.eq(0).addClass('on');
			$item.on('click',function(){
				$label.removeClass('on')
				$(this).next().addClass('on')
			})
		});		
	}
})(jQuery);
*/

