var repositionThisPop = function(id){
	var winheight = $(window).height(),
		winwidth = $(window).width(),
		posy = "50%",
		posx = "50%",
		$this =$("#" + id),
		mgt = Math.round($this.height() / 2 * -1),
		mgl = Math.round($this.width() / 2 * -1),
		adjML = $('#'+id).hasClass('for-C2-LPU') ? -12 : 0,
		docheight = $(document).height();
	if(winheight < $this.height() + 100){
		posy = 50; //레이어 팝업 높이보다 창 높이가 작을 경우 레이어 팝업과 문서의 위아래 간격
		mgt = 0;
		$this.prev(".dimm").height(posy + (posy + 100) + $this.height());
	}else{
		$this.prev(".dimm").height(winheight);	
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
};
