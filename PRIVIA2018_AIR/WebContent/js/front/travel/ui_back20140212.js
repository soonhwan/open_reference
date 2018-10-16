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
 * 함수명 : scrollTopThis
 * 설명 : 타겟 엘리먼트의 위치로 페이지 스크롤 처리
 * 사용법 : scrollTopThis($("#id")); scrollTopThis($(".class")); scrollTopThis($(this));
 */
var scrollTopThis = function($element){
	var target = "body",
	speed = 500,
	timeout = 300,	
	top = $element.offset(),
	top = top.top;
	if($.browser.msie){
		target = "html";
	}else if($.browser.mozilla){
		target = "body,html";
	}
	setTimeout(function(){
		$(target).animate({scrollTop:top},speed);	
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
			gnb.css("top","26px");
			gnbDiv.addClass("gnb_opened");
			$("#header").addClass("header_gnb_open");
			$("#viewSearch").height(26); //20131025 추가 - 기존 z-index 값을 변경하지 않기 위해 서치 버튼 크기를 1px 줄인다
			/*if($("#totalSearch").is(":visible") && $("#viewSearch").is(":visible")){
				toggleTotalSearch();
			}*/
			var posTopSearch = parseInt($("#totalSearch").css("top"));
			if(posTopSearch != -1000 && $("#viewSearch").is(":visible")){
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
			if(posTopSearch != -1000 && $("#viewSearch").is(":visible")){
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
 * 사용법 : 탭 각각에 넣어줄 링크 - <a href="javascript:showTab('pickTab','tabArea','1');"></a>
 		   첫번째값 탭을 감싸는 id, 두번째값 불러올 콘텐츠 영역 id의 영문명, 세번째값 두번째값불러올 콘텐츠 영역 id의 숫자
 */
var toggleShowTab = function(tabName,contId,num){
	var last = $("#"+tabName+">li").length;  //tab 개수
	
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
};

/*
 * 함수명 : showTab
 * 설명 : 탭 클릭 시 해당 콘텐츠 block 처리 
 * 사용법 : 탭 각각에 넣어줄 링크 - <a href="javascript:showTab('pickTab','tabArea','1');"></a>
 			  첫번째값 탭을 감싸는 id, 두번째값 불러올 콘텐츠 영역 id의 영문명, 세번째값 두번째값불러올 콘텐츠 영역 id의 숫자
 */
var showTab = function(tabName,contId,num){
	var last = $("#"+tabName+">li").length;  //tab 개수
	
	for(var i=1; i<=last;i++){
		if (i == num){
			var order = num-1;
			var $eqImg = $("#"+tabName+">li").eq(order).find("img");
			$("#"+contId+num).css("display","block").attr("tabindex","0").focus().css("outline","0").removeAttr("tabindex"); //활성화된 탭으로 포커스 이동, div등은 포커스 가능한 엘리먼트가 아니므로 tabindex=0으로 포커스가 가능하게 하고 포커스 직흐 탭인덱스 속성 제거
			$eqImg.attr("src",$eqImg.attr("src").replace("_off","_on"));
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
function setBanner( obj, autorolling, dtime, align ) {
	var w = obj.find('.roll_img > ul > li').width(),
	leng = obj.find('.roll_img > ul > li').length,
	btns = '',
	autoplayclass = '',
	autoplay = autorolling,
	flag = 0,
	interval = 4000, //자동롤링 인터벌
	speed = 600, //롤링 소요시간
	delay = dtime,
	_timer,
	play_posX = leng * 13 + 20;
	
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
					obj.find('.roll_img > ul').find("li").eq(x).clone().addClass("copied").appendTo(obj.find('.roll_img > ul'));
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
	obj.find('.roll_img > ul').width(obj.find('.roll_img > ul > li').outerWidth() * leng + 100)
	
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
	var winheight = $(window).height(),
		winwidth = $(window).width(),
		posy = "50%",
		posx = "50%",
		$this =$("#" + id),
		mgt = $this.height() / 2 * -1,
		mgl = $this.width() / 2 * -1,
		docheight = $(document).height();
	if(winheight < $this.height() + 100){
		posy = 50; //레이어 팝업 높이보다 창 높이가 작을 경우 레이어 팝업과 문서의 위아래 간격
		mgt = 0;
		$this.prev(".dimm").height(posy + (posy + 100) + $this.height());
	}else{
		$this.prev(".dimm").height(winheight);	
	}
	if($this.prev(".dimm").attr("call-one") != "true"){
		$this.css({top : posy, left : posx, marginTop : mgt, marginLeft  : mgl, visibility : "visible"});
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
 */
var focusableElems ="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]";
var dimmLayerPop = function(id,opt,$elem){
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
		if($("body").hasClass("special_exp")){
			$("body").addClass("special_exp_hidden");
			if ($.browser.msie && parseInt($.browser.version, 10) < 8 && $("body").find(".modal_window:visible").length == 0) {
				$("#header").css("z-index","");
				$("#footer").css("z-index","");
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
			if ($.browser.msie && parseInt($.browser.version, 10) < 8) {
				$("#header").css("z-index","-1");
				$("#footer").css("z-index","-1");
			}
		}
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
	if(opt != 0){
		openThisPop();
	}else{
		closeThisPop();
	}
	
	closebtn.click(function(){
		//closeThisPop();
		$this.prev(".dimm").trigger('click');
		return false;
	});
	$this.prev(".dimm").click(function(){
		 
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
 * 사용법: box_shadow.html 참조 
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
var toggleTotalSearch = function(i){
	var posTopSearch = parseInt($("#totalSearch").css("top"));
	//console.log(parseInt($("#totalSearch").css("top")))
	if(posTopSearch == -1000){
		$("#totalSearch").css("top","80px");
		$("#viewSearch").addClass("on");
	}else{
		$("#totalSearch").css("top","-1000px");
		$("#viewSearch").removeClass("on");
	}
	//$("#totalSearch").toggle();
	//$("#viewSearch").toggleClass("on");
};

/*
 * 함수명 resizeStr
 * 설명 : 이미지 리스트 리사이즈 처리
 */
var resizeStr = function(element,o_width,o_height){
	var target = element, //타겟 엘리먼트
	t_width = o_width, //최종 리사이즈될 넓이
	t_height = o_height, //최종 리사이즈될 높이
	t_ratio = t_width / t_height;
	target.find("> li").each(function(index, element) {
		var t = $(this);
		t.find("img").one('load', function() {
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
		}).each(function() {
		  if(this.complete) $(this).load();
		});
	});
};

/* 
 * 함수명 : galleryStr
 * 설명 : 호텔 상세 등의 이미지 상세보기 + 리스트 롤
 * 
 */
var galleryStr = {
	init : function($viewArea, $rollingArea){
		var $view = $viewArea,
		$rolling = $rollingArea,
		$thumbs = $rolling.find(".thumbs"),
		$btnP = $rolling.find("p.movel"),
		$btnN = $rolling.find("p.mover"),
		length = $thumbs.find("img").length,
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
			
			
			/*if(width != t_width && height != t_height){
				if(ratio == t_ratio){
					console.log("원본 비율이 같은 경우")
					thumb.width(t_width).css({position:"relative",top:"auto"});	
				}else if(ratio > t_ratio){
					console.log("원본 가로가 길 경우")
					thumb.height(t_height).css({
						position:"relative",top:"auto",left:"auto",
						marginLeft: ((width * (t_height / height) / 2) - (t_width / 2))  * -1
					});	
				}else if(ratio < t_ratio){
					console.log("원본 세로가 길 경우")
					thumb.width(t_width).css({
						position:"relative",top:"auto",left:"auto",
						marginTop: ((height * (t_width / width) / 2) - (t_height / 2))  * -1
					});	
				}
			}else{
				
			}*/
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
	load : function(target, opacity, imgsrc, txt){
		var ext = 'gif',
		width = "100%",
		height = "100%",
		pos = 'absolute',
		alt = '',
		cls = '';
		preLoaderTarget = target;
		if(txt == undefined){
			alt = '로딩 중...';
		}else{
			alt = txt;
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
		markup += '		<p class="txt"><img src="'+ imgsrc +'" alt="'+ alt +'"></p>';
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
		//$("div.loading_box").on("click",function(){
		//	preLoader.remove();
		//});
	},
	remove : function(){
		//console.log($("body").find(".modal_window:visible").length);
		$("body").find("div.loading_box").remove();
		if(preLoaderTarget != "body"){
			$(preLoaderTarget).css("position","inherit");
		}
		if($("body").find(".modal_window:visible").length == 0){	
			$("body, html").removeClass("no_scroll");
		}
		preLoaderTarget = '';
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
			toggleDiv.height(wrapper.next("#totalSearch").find("iframe").outerHeight() - 61);
		}else{
			toggleDiv.height("auto");
		}
		toggleDiv.show();
		toggleBtn.addClass("toggle_opened");
	}
};

var holidays = {
	"0606":{title:"현충일",year:""},
	"0505":{title:"어린이날",year:""},
	"0301":{title:"3.1절",year:""},
	"0101":{title:"신정",year:""},
	"0815":{title:"광복절",year:""},
	"1003":{title:"개천절",year:""},
	"1225":{title:"크리스마스",year:""},
	"1009":{title:"한글날",year:""},
	"0130":{title:"설연휴",year:"2014"},
	"0131":{title:"설날",year:"2014"},
	"0201":{title:"설연휴",year:"2014"},
	"0506":{title:"석가탄신일",year:"2014"},
	"0907":{title:"추석연휴",year:"2014"},
	"0908":{title:"추석",year:"2014"},
	"0909":{title:"추석연휴",year:"2014"},
	"0219":{title:"설날",year:"2015"},
	"0218":{title:"설연휴",year:"2015"},
	"0928":{title:"추석연휴",year:"2015"},
	"0927":{title:"추석",year:"2015"},
	"0926":{title:"추석연휴",year:"2015"},
	"0525":{title:"석가탄신일",year:"2015"},
	"0220":{title:"설연휴",year:"2015"},
	"0915":{title:"추석",year:"2016"},
	"0914":{title:"추석연휴",year:"2016"},
	"0916":{title:"추석연휴",year:"2016"},
	"0514":{title:"석가탄신일",year:"2016"},
	"0210":{title:"설연휴",year:"2016"},
	"0209":{title:"설날",year:"2016"},
	"0208":{title:"설연휴",year:"2016"},
	"0128":{title:"설날",year:"2017"},
	"1005":{title:"추석연휴",year:"2017"},
	"0129":{title:"설연휴",year:"2017"},
	"0127":{title:"설연휴",year:"2017"},
	"0503":{title:"석가탄신일",year:"2017"},
	"1003":{title:"추석연휴",year:"2017"},
	"1004":{title:"추석",year:"2017"},
	"0924":{title:"추석",year:"2018"},
	"0216":{title:"설날",year:"2018"},
	"0217":{title:"설연휴",year:"2018"},
	"0522":{title:"석가탄신일",year:"2018"},
	"0215":{title:"설연휴",year:"2018"},
	"0925":{title:"추석연휴",year:"2018"},
	"0923":{title:"추석연휴",year:"2018"},
	"0205":{title:"설날",year:"2019"},
	"0512":{title:"석가탄신일",year:"2019"},
	"0204":{title:"설연휴",year:"2019"},
	"0912":{title:"추석연휴",year:"2019"},
	"0913":{title:"추석",year:"2019"},
	"0914":{title:"추석연휴",year:"2019"},
	"0206":{title:"설연휴",year:"2019"},
	"0430":{title:"석가탄신일",year:"2020"},
	"0125":{title:"설날",year:"2020"},
	"0124":{title:"설연휴",year:"2020"},
	"0126":{title:"설연휴",year:"2020"},
	"1002":{title:"추석연휴",year:"2020"},
	"1001":{title:"추석",year:"2020"},
	"0930":{title:"추석연휴",year:"2020"}
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
	}
};
$.datepicker.setDefaults($.datepicker.regional['ko']);

//GUIDE 생성중 확인 
var guideInterval = setInterval(getGuideStatus, 1000*20);
/* 전체 공통 스크립트 */
$(function(){
	if(iosCheck() == false){
		$("html").addClass("no_ios_device");
	}
	
	//마이트레블 영역 init
	initMytravel();
	
	// GUIDE 생성중 확인	
	getGuideStatus();	
	
	// 통합검색 radio button
	$("#totalSearch .check_terms .terms").buttonset();


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
	inputText.placeHolder();
	textArea.placeHolder();
	inputText2.placeHolder();
	
	
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
});
