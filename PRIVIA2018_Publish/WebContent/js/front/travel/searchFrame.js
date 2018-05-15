//기타 변수
//document.domain = 'priviatravel.com';
var isTargetPicker = false;
var isFrameExtend = false;

var thisFullLocation = window.location.host;
var thisPartsLocation = thisFullLocation.split('.');
var thisSubDomain = thisPartsLocation[0];

var resizeLocation = '';
if(thisSubDomain == "lwww" || thisSubDomain == "dair" || thisSubDomain == "dhotel" || thisSubDomain == "dairtel"){
	resizeLocation = "//dwww.priviatravel.com/resources/resizeSearchFrm.html";
}else if(thisSubDomain == "twww" || thisSubDomain == "tair" || thisSubDomain == "thotel" || thisSubDomain == "tairtel"){
	resizeLocation = "//twww.priviatravel.com/resources/resizeSearchFrm.html";
}else{
	resizeLocation = "//www.priviatravel.com/resources/resizeSearchFrm.html";
}
var iframeElement = '<iframe id="hiddenFrame" width="1" height="1" frameborder="0" src="'+ resizeLocation +'"></iframe>';

//데이트피커 활성화 등을 위한 최대 사이즈
var extFrmHeight = 700;
var extFrmWidth = 715;

var eventCatchElement = "input[type='checkbox'], input[type='radio'], .btn_addition a";

//부모 페이지 아이프레임 사이즈를 검색 영역 넓이로 돌린다.
var fitSearchFrame = function() {
	//console.log("프레임 축소");
	var height = $("#totalSearch").height() + 5;
	var width = $("#totalSearch").find(".search_form").outerWidth() + 5;
	if(height < 400){
		if($("body").hasClass("main")){
			height = 475;
		}else{
			height = 415;
		}
	}
	//$("#hiddenFrame").attr("src", resizeLocation + '?height='+height+'&width=' + width);
	$("#hiddenFrame")[0].contentWindow.location.replace(resizeLocation + '?height='+height+'&width=' + width); 
	//var iframe = document.getElementById( 'hiddenFrame' ); //resizeFrame.html 을 불러올 아이프레임 id
	//iframe.contentWindow.location.replace(resizeLocation + '?height='+height+'&width=' + width); 
	isFrameExtend = false;
}
// 부모 페이지 아이프레임 사이즈를 늘린다.
var extSearchFrame = function(height,width) {
	if(isFrameExtend == true){
		//console.log("이미 확장되어 있으므로 패스")
	}
	//console.log("프레임 확장");
	//$("#hiddenFrame").attr("src", resizeLocation + '?height='+height+'&width=' + width);
	$("#hiddenFrame")[0].contentWindow.location.replace(resizeLocation + '?height='+height+'&width=' + width); 
	//var iframe = document.getElementById( 'hiddenFrame' ); //resizeFrame.html 을 불러올 아이프레임 id
	//iframe.contentWindow.location.replace(resizeLocation + '?height='+height+'&width=' + width);  
	isFrameExtend = true;
}

$(function(){
	
	$("body").append(iframeElement); //바디에 아이프레임 추가
	$("#totalSearch").find("a.close_search").remove(); //닫기버튼 삭제
	
	$("#btnSpread").click(function(){
		extSearchFrame(700,715);
		setTimeout(function(){fitSearchFrame()},400);
	});
	
	//데이트피커 세팅 초기화(열기 전, 닫은 후 동작 처리)
	$.datepicker.regional['ko'] = {
		/*
		beforeShow: function(){ //피커 열기 전
			extSearchFrame(extFrmHeight,extFrmWidth);
		}, */
		beforeShow: function (input, inst) {
			extSearchFrame(extFrmHeight,extFrmWidth);
			var rect = input.getBoundingClientRect();
			setTimeout(function () {
				inst.dpDiv.css({ top: rect.top + 30, left: rect.left + 0 });
			}, 25);
		},
		
		onClose: function() { //피커 닫은 후
			fitSearchFrame();
		}
	};
	$.datepicker.setDefaults($.datepicker.regional['ko']);
	
	//상단 탭 클릭
	$("#totalSearchTab").find("input[type='radio']").click(function(){
		extSearchFrame(extFrmHeight,extFrmWidth);
		setTimeout(function(){fitSearchFrame()},200);
	});
	/*
	$("#totalSearch").find(".check_terms").find("input[type='radio']").click(function(){
		extSearchFrame(extFrmHeight,extFrmWidth);
		setTimeout(function(){fitSearchFrame()},200);
	});
	*/
	$("#totalSearch").find(eventCatchElement).click(function(){
		extSearchFrame(extFrmHeight,extFrmWidth);
		setTimeout(function(){fitSearchFrame()},200);
	});
	$("#totalSearch").find("select").change(function(){
		extSearchFrame(extFrmHeight,extFrmWidth);
		setTimeout(function(){fitSearchFrame()},200);
	});
	/*
	 * 아이프레임 내외 불문 인풋 요소의 blur 이벤트는 체크 가능하고, 
	 * mousedown 이벤트가 blur이벤트보다 먼저 체크되지만 유의미한 간격 없이 연달아 발생하므로
	 * mousedown 이벤트 발생시 클릭된 요소가 캘린더 엘리먼트인지를 판별해서 "아닌" 경우에 한해 캘린더 인풋요소 blur 이벤트 발생시 캘린더 가려줌.
	 */
	
	/*
	if(iosCheck()){
		$(document).on('click',function(e){
			alert(e.target)
			if($("#ui-datepicker-div").has(e.target).length > 0){
				isTargetPicker = true;
			}
		});
	}
	else{
		$(document).mousedown(function(e){
			if($("#ui-datepicker-div").has(e.target).length > 0){
				isTargetPicker = true;
			}
		});
	}
	*/
	
	$(document).mousedown(function(e){
		if($("#ui-datepicker-div").has(e.target).length > 0){
			isTargetPicker = true;
		}
	});
	
	$(document).on('touchstart',function(e){
		if(iosCheck()){
			if($("#ui-datepicker-div").has(e.target).length > 0){
				isTargetPicker = true;
			}
			if(isTargetPicker == false){
				$(".text_cal").datepicker("hide");
			}
			isTargetPicker = false;
		}
	});
	window.onmessage = function(e){
		if(e.data == "isParentDomClick"){
			if(e.origin == "http://www.priviatravel.com" || e.origin == "http://twww.priviatravel.com" || e.origin == "http://dwww.priviatravel.com" || e.origin == "http://lwww.priviatravel.com" || e.origin == "https://www.priviatravel.com" || e.origin == "https://twww.priviatravel.com" || e.origin == "https://dwww.priviatravel.com" || e.origin == "https://lwww.priviatravel.com"){$(document).trigger('touchstart')}		
		} else if(e.data.indexOf('ServiceNum') > -1){
			var transData = JSON.parse(e.data);
			var serviceNum = transData.ServiceNum;		
			$('#totalSearchTab input[name=searchType]').eq(serviceNum-1).trigger('click');
		}
	}
	$("input.text_cal").blur(function(e){
		if(!iosCheck()){
			var id = $(this).attr("id");
			if(isTargetPicker == false){
				$("#" + id).datepicker("hide");
			}
			isTargetPicker = false;	
		}
	});
	
	if($("body").hasClass("section_main")){
		//$("#totalSearchTab").css("position","absolute").css("left","0").css("top","-9999px");
	}
});

$(window).load(function(){
	//fitSearchFrame(); //탭 활성화 값 등이 다를 수 있으므로 로드시 1회 실행
	//extSearchFrame(700,715);
		//setTimeout(function(){fitSearchFrame()},300);
		//setTimeout(function(){fitSearchFrame()},600);
});
