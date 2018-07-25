var SEARCH_TAB_FLAG    = getCookie("SEARCH_TAB_FLAG");
var SEARCH_HTL_TYPE    = getCookie("SEARCH_HTL_TYPE");
var SEARCH_FLIGHT_TYPE = getCookie("SEARCH_FLIGHT_TYPE");

var WWW_DOMAIN         = "";
var AIR_DOMAIN         = "";
var HOTEL_DOMAIN       = "";
var AIRTEL_DOMAIN      = "";
var tabFlag;

/*-----항공 관련 변수 start-----*/
var airCityFocus = "OUT";
var airCityLoc = "arr0";
var citySeq = 1;
var flightType = "INT";
var airTripType = "RT";
var airItinCnt_MD = 0;
var bookableDate;
var defaultDate = $("#defaultDate").val();
var selectedObj;
var selectedArea;
/*-----항공 관련 변수end-----*/

var numberPattern =  /[^0-9]/gi;

function searchSetCookie( name, value, expiredays ){
	var todayDate = new Date();
	todayDate.setDate( todayDate.getYear() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function getCookie(name){
 	var arg = name + "=";
 	var alen = arg.length;
 	var clen = document.cookie.length;
 	var i = 0;
 	while(i < clen){
 		var j = i + alen;
 		if(document.cookie.substring(i, j) == arg)
 		{
 			var end = document.cookie.indexOf(";", j);

 			if(end == -1) {
 			    end = document.cookie.length;
 			}
 			return unescape(document.cookie.substring(j, end));
 		}
 		i = document.cookie.indexOf(" ", i) + 1;
 		if(i == 0) break;
 	}
 	return null;
}
//요일 구하기
function getWeek(strDate) {
	strDate = strDate.split("/");
	var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var date = new Date(strDate[0], strDate[1]-1, strDate[2]);
    date.setDate(date.getDate());
    
    return week[date.getDay()];
}

function agreeTab(No){
	$.get("/template/kr/mobile/fr/PRIVIA/booking/findListTermsAndConditions.html", function( data ) {
		$("#commonLayer").html(data);
		$("#commonLayer").find(".agreement").each(function(){
			//console.log($(this).attr("id") + " = " + "agreeDiv"+No +"("+($(this).attr("id") == "agreeDiv"+No)+")");
			if($(this).attr("id") == "agreeDiv"+No){
				$(this).show();
			}else{
				$(this).remove();
			}
		});
		if(No == "2")
			$("#commonLayer").find("#titleAgreeDiv").html("예약관련 규정");
		else if(No == "3")
			$("#commonLayer").find("#titleAgreeDiv").html("결제 및 환불 규정");
		else if(No == "4")
			$("#commonLayer").find("#titleAgreeDiv").html("여권/비자 및 기타 규정");
		else if(No == "5")
			$("#commonLayer").find("#titleAgreeDiv").html("항공 이용약관");
		else if(No == "6")
			$("#commonLayer").find("#titleAgreeDiv").html("PRIVIA 이용약관");
		else if(No == "7")
			$("#commonLayer").find("#titleAgreeDiv").html("전자금융거래 이용약관");
		else if(No == "8")
			$("#commonLayer").find("#titleAgreeDiv").html("개인정보처리방침");//#26676
		else if(No == "9")
			$("#commonLayer").find("#titleAgreeDiv").html("업무위탁현황");
		else if(No == "10")
			$("#commonLayer").find("#titleAgreeDiv").html("제 3자 개인정보 제공 동의 (선택)");
		else if(No == "12")//#26950 모바일 항공예약하기 제3자동의 유지
			$("#commonLayer").find("#titleAgreeDiv").html("제 3자 개인정보 제공");
	});
	
	$.ajax({
        success	: function(result){
				$.mobile.changePage($("#commonLayer"),{role:"dialog",transition:"slideup"});
		},
        error : function(xhr, status, error){
			//alert(error)
	    }
	});
}

/*****************************************************************************************************************************************************************/
/**=============================================================================================================================================================**/
/**															[	공	통	스	크	립	트	]																		**/
/**=============================================================================================================================================================**/
/*****************************************************************************************************************************************************************/
var adtCntValue = 1;
var chdCntValue = 0;
var infCntValue = 0;
var commonSearch = {
		
		//날짜 선택
		selectDate : function(loc, obj, flag){
			var searchUrl = "/booking/findAirBookableDate.lts";
			var year,month,date="";
			var seldepdate1,seldepdate2="";
			if(typeof(obj) != "undefined") 		selectedObj = obj;
			if(typeof(flag) != "undefined" )	selectedArea = flag;
		
			// 현재 월을 가운데 표시해주기 위해 selMonth 를 -1 해준다
			var selDate = $("#defaultDate").val();
			
			var tmpSelDate = $("#defaultDate").val().substring(0,4)+"/"+$("#defaultDate").val().substring(4,6)+"/"+$("#defaultDate").val().substring(6);
			
			year = tmpSelDate.split("/")[0];	
			month = tmpSelDate.split("/")[1];
			if(flightType == "INT"){
				if(airTripType == 'RT'){
					seldepdate1 = $("#intRound").find("strong[name='depdate0Text']").text().replace(/\//g, '');
					seldepdate2 = $("#intRound").find("strong[name='depdate1Text']").text().replace(/\//g, '');
					if(seldepdate1 =='출발날짜' || seldepdate1=='귀국날짜' || seldepdate1=='오는날짜' || seldepdate1=='OPEN' || seldepdate1=='//' || seldepdate1==''){
						seldepdate1 = "";
					}
					if(seldepdate2 =='출발날짜' || seldepdate2=='귀국날짜' || seldepdate2=='오는날짜' || seldepdate2=='OPEN' || seldepdate2=='//' || seldepdate2==''){
						seldepdate2 = "";
					}
				}else if(airTripType == 'OW'){
					seldepdate1 = $("#intOne").find("strong[name='depdate0Text']").text().replace(/\//g, '');
					if(seldepdate1 =='출발날짜' || seldepdate1=='귀국날짜' || seldepdate1=='오는날짜' || seldepdate1=='OPEN' || seldepdate1=='//' || seldepdate1==''){
						seldepdate1 = "";
					}
				}else{
					seldepdate1 = selectedObj.text().replace(/\//g, '');
					if(seldepdate1 =='출발날짜' || seldepdate1=='귀국날짜' || seldepdate1=='오는날짜' || seldepdate1=='OPEN' || seldepdate1=='//' || seldepdate1==''){
						seldepdate1 = "";
					}
				}
			}else{
				if(airTripType == 'RT'){
					seldepdate1 = $("#domRound").find("strong[name='depDate']").text().replace(/\//g, '');
					seldepdate2 = $("#domRound").find("strong[name='arrDate']").text().replace(/\//g, '');
					if(seldepdate1 =='출발날짜' || seldepdate1=='귀국날짜' || seldepdate1=='오는날짜' || seldepdate1=='OPEN' || seldepdate1=='//' || seldepdate1==''){
						seldepdate1 = "";
					}
					if(seldepdate2 =='출발날짜' || seldepdate2=='귀국날짜' || seldepdate2=='오는날짜' || seldepdate2=='OPEN' || seldepdate2=='//' || seldepdate2==''){
						seldepdate2 = "";
					}
				}else if(airTripType == 'OW'){
					seldepdate1 = $("#domOne").find("strong[name='depDate']").text().replace(/\//g, '');
					if(seldepdate1 =='출발날짜' || seldepdate1=='귀국날짜' || seldepdate1=='오는날짜' || seldepdate1=='OPEN' || seldepdate1=='//' || seldepdate1==''){
						seldepdate1 = "";
					}
				}
			}
			try {
				$.ajax({
					type     	: "POST",
					data		: {
									cnt : "12",
									loc : loc,
									selYear : year,
									selMonth : month,
									selDate : selDate,
									selDepDate1 : seldepdate1,
									selDepDate2 : seldepdate2,
									tripType : airTripType,
									type : selectedArea
									},
					url      	: searchUrl,
					dataType : "html",
			        success	: function(result){
						$("#commonLayer").html(result);
						$.mobile.changePage($("#commonLayer"),{changeHash:true, reloadPage:true, role:"dialog",transition: "slideup"});
					},
			        error : function(xhr, status, error){
						//alert(error)
				    }
				});
			} catch(ee) {
			}
		},
		
		//국제선 항공 왕복 or 편도 or 다구간 선택시
		setTripType : function(fType, tType){
			if(fType != ""){
				flightType = fType;
			}
			
			airTripType = tType;
			$("#tripValue").val(tType);
			
			if (flightType == "INT") { //국제선
				$('#AT1').addClass('activated');
				$('#AT2').removeClass('activated');
				if(tType == "RT"){
					$('#notIntMd').show();
					$('#intRound').show();
					$('#intOne').hide();
					$('#intMd').hide();
					$('#inWay1').addClass('activated');
					$('#inWay2').removeClass('activated');
					$('#inWay3').removeClass('activated');
					if(airItinCnt_MD != 0){
						airSearch.resetSearchForm();
						airItinCnt_MD = 0;
						
					}
				}else if(tType == "OW"){
					$('#notIntMd').show();
					$('#intRound').hide();
					$('#intOne').show();
					$('#intMd').hide();
					$('#inWay1').removeClass('activated');
					$('#inWay2').addClass('activated');
					$('#inWay3').removeClass('activated');
					if(airItinCnt_MD != 0){
						airSearch.resetSearchForm();
						airItinCnt_MD = 0;
					}
				}else{
					airItinCnt_MD = 3;
					$('#notIntMd').hide();
					$('#intRound').hide();
					$('#intOne').hide();
					$('#intMd').show();
					$('#inWay1').removeClass('activated');
					$('#inWay2').removeClass('activated');
					$('#inWay3').addClass('activated');
					airSearch.resetSearchForm();
					$("#md_arr2Text").html("인천/김포");
					$("#arr2").val("SEL");
					$("#arr2_text").val("인천/김포");
				}
				
			} else { //국내선
				$('#AT2').addClass('activated');
				$('#AT1').removeClass('activated');
				if(tType == "RT"){
					$('#domRound').show();
					$('#domOne').hide();
					$('#dWay1').addClass('activated');
					$('#dWay2').removeClass('activated');
					
				}else{
					$('#domRound').hide();
					$('#domOne').show();
					$('#dWay2').addClass('activated');
					$('#dWay1').removeClass('activated');
				};
			
			}
		}
		
}

//[#7192 결제 수행 방식 변경에 따른 모바일 웹 페이지 수정 요청
var strNoticeMsg		= "원활한 PRIVIA 여행 서비스 이용을 위해서는 업데이트를 해주시기 바랍니다.";
var strCpsnUpdateYesMsg	= "원활한 PRIVIA 여행 서비스 이용을 위해서는 업데이트를 진행하여야 합니다.\n업데이트 페이지로 이동합니다.";
var strCpsnUpdateNoMsg	= "원활한 PRIVIA 여행 서비스 이용을 위해서는 업데이트를 진행하여야 합니다.\n업데이트 페이지로 이동하시겠습니까?";
//var appMarketUrl 		= "market://details?id=com.priviatravel";
var isConfigCpsnUpdate	= false;//설정정보에서의 강제업데이트
var isOldVersionApp		= false;//구버전 App여부

//[#7426 IOS 기능 추가에 따른 모바일 웹페이지 수정건
var appActionId 		= "";
var appMarketUrl 		= "market://details?id=com.priviatravel";
var appMarketUrl_i      = "https://ituens.apple.com/kr/app/priviatravel";
var isIOS = false;
var isAndroid = false;

/* 아이폰일 경우  */
function devCheckAppVersioniPhone(code,info){

	var isLowAppVersion 		= false;
	var isConfigCpsnUpdate      = false;
	
		
	var currentAppVersion_i = code;      //현재 앱 버전
	
	var configJson 	= JSON.parse(info);
  	var appVersion_i = configJson.version_iphone.ver;//json에서 앱 버전
	
	var tempAppMarketUrl_i = configJson.version_iphone.mktUrl;
	if ( tempAppMarketUrl_i != null && tempAppMarketUrl_i != "" ) {
		appMarketUrl_i = tempAppMarketUrl_i;
	}
	
	var ConfigCpsnUpdateYn_i = configJson.version_iphone.cpsnUpdateYn;
	if ( ConfigCpsnUpdateYn_i != null && ConfigCpsnUpdateYn_i == "Y" ) {
		isConfigCpsnUpdate	= true;
	}
		
	if ( appVersion_i > currentAppVersion_i ) {
		isLowAppVersion = true;
	}

	//강제/선택 업데이트 대상이라면
   /*   if ( isLowAppVersion ) {
		
		if ( isConfigCpsnUpdate ) {
			
			alert ( strCpsnUpdateYesMsg );	
	    	
		}else if ( !confirm ( strCpsnUpdateNoMsg ) ){
			return false;
		}
		
	     location.href = "priviatravel://gotoAppStore";
    }*/

}
//]

/* 안드로이드일 경우  */
/** app이 하위버전일 경우 마켓으로 이동 처리함 */
/** #6619 모바일 앱 서버점검 및 버전체크 다이얼로그 개선 - 마켓이동 처리는 하지않고 alret 창만 노출하도록 변경 */
/*#9163
function devCheckAppVersion() {
	
	var isLowAppVersion 		= false;
	//구버전 App은 강제업데이트여부
	var checkAppVersion 		= 102;
	var strCurrentAppVersion 	= "";
	var currentAppVersion 		= 0; 
	
	try {
		strCurrentAppVersion = PriviaTravelApp.getVersionCode();
		
		var configJson 	= JSON.parse( PriviaTravelApp.getVersionInfo() );
		
		try{
			var tempCheckAppVersion = configJson.version_android.ver;
			
			if ( tempCheckAppVersion != null && tempCheckAppVersion > checkAppVersion ) {
				checkAppVersion = tempCheckAppVersion;
			}
			
		}catch(e){
			//변경된 설정정보 셋팅 오류로 인해 강제 업데이트를 방지하기 위해 try-catch 처리함
			checkAppVersion = 102;
 		}
		
		try{
			var tempAppMarketUrl = configJson.version_android.mktUrl;
			
			if ( tempAppMarketUrl != null && tempAppMarketUrl != "" ) {
				appMarketUrl = tempAppMarketUrl;
			}
			
		}catch(e){
			//변경된 설정정보 셋팅 오류로 인해 강제 업데이트를 방지하기 위해 try-catch 처리함
			appMarketUrl = "market://details?id=com.priviatravel";
 		}
		
		try{
			var tempConfigCpsnUpdateYn = configJson.version_android.cpsnUpdateYn;
			
			if ( tempConfigCpsnUpdateYn != null && tempConfigCpsnUpdateYn == "Y" ) {
				isConfigCpsnUpdate	= true;
			}
			
		}catch(e){
			//변경된 설정정보 셋팅 오류로 인해 강제 업데이트를 방지하기 위해 try-catch 처리함
			isConfigCpsnUpdate = false;
 		}
		
		if ( isNaN( strCurrentAppVersion ) ) {
			isLowAppVersion = true;
			
		} else {
			currentAppVersion = Number( strCurrentAppVersion );
			//alert ("currentAppVersion = [" + currentAppVersion + "]");
			
			if ( checkAppVersion > currentAppVersion ) {
				isLowAppVersion = true;
			}
		}
		
	} catch (e) {
		isOldVersionApp = true;//isCpsnUpdate = true;
	}
	
	//강제/선택 업데이트 대상이라면
	if ( isOldVersionApp ) {
		alert ( strNoticeMsg );	//"사이드메뉴 > 해외호텔,국내숙박 클릭시" 메세지 노출이라 주석처리함.
		
	} else if ( isLowAppVersion ) {
		
		if ( isConfigCpsnUpdate ) {
			alert ( strCpsnUpdateYesMsg );	
			
		} else {
			//TODO: 104버전은 강제 업데이트만 있음. 105버전에서 선택 업데이트 고려가 필요함. 유선 선택 유지기간(앱/1일/다음version까지 등 고려). 7192.2015.01.21
			 //선택 업데이트 라면
			//if ( !confirm ( strCpsnUpdateNoMsg ) ) {//이동을 취소한경우만 즉시 리턴함
			//	return false;
			//} 
		}
		
		// MarketUrl보내지 않고 alert 처리만 함.7192.2015.01.21
		//location.href = appMarketUrl;
	}

	return true;
}
*/
/** [호텔서비스는] app에서만 모바일웹브라우저로 이동처리가 필요하여 confirm 창으로 이동확인 받음. 결제 정상화로 모바일웹브라우저 활성화 없어짐. 향후 필요시 재사용을 위해 유지함. 7192.2015.01.21 */
function devCheckOpenMobileWeb() {
	if ( isOldVersionApp ) {
		alert ( strNoticeMsg );
		
	} else {
		var msg = "PRIVIA 호텔 모바일 서비스는 모바일 웹 브라우저에서 최적화되어있습니다.\n모바일 웹 브라우저로 이동하시겠습니까?";
		if ( confirm(msg) ) {
			devFnOpenMobileWeb();
		}
	}	
	
	return false;
}

/** [호텔서비스는] app에서만 모바일웹브라우저로 보냄 */
function devFnOpenMobileWeb() {
	/*
	PriviaTravelApp.openBrowser("http://" + document.domain + "/mIndex.lts");
	*/
	if(isIOS){
		window.location ="http://" + document.domain + "/mIndex.lts";
	 }else if(isAndroid){
		PriviaTravelApp.openBrowser("http://" + document.domain + "/mIndex.lts");
	 }
}

//슬라이드 메뉴의 호텔검색 클릭시
function hotelSearch(flag) {
	
	//[#11179 [PRIVIA모바일] 항공/호텔 FRONT작업 요청 (투어소프트)
	if(flag == "INT") flag = "HTLINT";
	else if(flag == "DOM") flag = "HTLDOM";
	window.location.href = "/mIndex.lts?tab_flag="+flag;
	//window.location.href = "/mFrontIndex.lts?location="+flag;
	//]
	//#6855 프리비아 모바일웹 결제 오류 발생 - 주석처리함.
	/*
	//앱에서 실행된 경우 앱 버전체크
	if (typeof PriviaTravelApp  !== 'undefined') {
		if(!devCheckAppVersion()) {
			//구버전이면 마켓 업데이트 화면으로 이동
			return false;
		}
		else{
			window.location.href = "/mFrontIndex.lts?location="+flag;
		}
		//else {
		//	//최신버전이면 모바일웹브라우저로 이동
		//	devCheckOpenMobileWeb();
		//	return false;
		//}
		
	} else {
		//모바일웹에서 실행된경우 호텔검색 화면으로 이동
		window.location.href = "/mFrontIndex.lts?location="+flag;
	}
	*/
}
//]

/** checkAgreeCont
 *	num : 1 예약시 유의사항 
 *		: 2 취소 및 예약규정 
 *		: 3 호텔 이용안내
 *		: 4 privia 이용약관
 *		: 5 전자금융거래 이용약관
 *		: 6 개인정보수집이용규정
 *		: 7 제3자 개인정보 제공 업무 위탁 규정
*		: 8 개인정보처리방침 #26676
 *	이력 이름은 num_순번 ( ex. 6_1, 6_2 ..)
 *========================================
 *	Controller에 등록된 이력정보
 *========================================
 *  #개인정보수집 이용규정 6_1, 6_2
 *  #제3자 개인정보 제공 업무 위탁 규정 7_1, 7_2
 *  DIV id : prev_agree_layer+이력번호
 *  동적으로 생성하고 싶었으나.....연속 dialog 생성 후 close 시 모두 닫히는 현상으로 인해 main body에 div 선언 
*/
function checkAgreeCont(num) {
	var url = "/htl/bk/mBkAgreementPop.lts?agree_disp_no="+num;
	var prev_agree_layer = "";
	
	var layer_id = "prev_agree_layer"+num;
	$.ajax({
		async :false
    ,	type: "POST"
    ,	url : url
    ,	dataType:"html"
    ,	data: {}
    ,	success : function (msg){
			if(msg != "" || msg != null) {

				if( $('body').find("#"+layer_id).length >0 ){
					$('body').find("#"+layer_id).children().remove();	
				}
				else{
					$('body').append("<div id='"+layer_id+"' data-role='page'></div>");
				}
				prev_agree_layer += msg;
				$("#"+layer_id).append(prev_agree_layer);
				
            	$.mobile.changePage($("#"+layer_id),{changeHash:true, reloadPage:true, transition: "slideup", role:"dialog"});
            	
			} 
			else{
			}
    	}
	,	error   : function(jqXHR, textStatus, errorThrown) {
			
    	}
	});	
};

/*****************************************************************************************************************************************************************/
/**=============================================================================================================================================================**/
/**																		[	국	내	선	]																		**/
/**=============================================================================================================================================================**/
/*****************************************************************************************************************************************************************/
var domAirTripType = "RT";
var domairSearch = {
		//날짜 세팅
		setDate : function(dateArr,loc){
			if(airTripType =='RT'){
				if(loc == "depdate1"){ 			//도착날짜 눌렀을 때
					if(dateArr[1] != null){	
						$("#depdate0").val(dateArr[0]);			//출발, 도착날짜 선택
						$("strong[name='depDate']").each(function(){
							$(this).css("display","block");
							$(this).html(dateArr[0].slice(0,4)+"/"+dateArr[0].slice(4,6)+"/"+dateArr[0].slice(6,8));
							$("span[name='depDateStyle']").removeClass("default");
						});
						$("#depdate1").val(dateArr[1]);		
						$("strong[name='arrDate']").each(function(){
							$(this).css("display","block");
							$(this).html(dateArr[1].slice(0,4)+"/"+dateArr[1].slice(4,6)+"/"+dateArr[1].slice(6,8));
							$("span[name='arrDateStyle']").removeClass("default");
						});
							
					}else{
						$("#depdate1").val(dateArr[0]); 		//도착날짜만 선택
						$("strong[name='arrDate']").each(function(){
							$(this).css("display","block");
							$(this).html(dateArr[0].slice(0,4)+"/"+dateArr[0].slice(4,6)+"/"+dateArr[0].slice(6,8));
							$("span[name='arrDateStyle']").removeClass("default");
						});
					}
				}else if(loc == "depdate0"){		//출발날짜 눌렀을 때
					$("#depdate0").val(dateArr[0]);
					$("strong[name='depDate']").each(function(){
						$(this).css("display","block");
						$(this).html(dateArr[0].slice(0,4)+"/"+dateArr[0].slice(4,6)+"/"+dateArr[0].slice(6,8));
						$("span[name='depDateStyle']").removeClass("default");
						if(dateArr[1] != null){
							$("#depdate1").val(dateArr[1]);
							$("strong[name='arrDate']").each(function(){
								$(this).css("display","block");
								$(this).html(dateArr[1].slice(0,4)+"/"+dateArr[1].slice(4,6)+"/"+dateArr[1].slice(6,8));
								$("span[name='arrDateStyle']").removeClass("default");
							});
						}
					});
				}
			}else if(airTripType=='OW'){
				$("#depdate0").val(dateArr[0]);
				$("#depdate1").val("");
				$("span[name='arrDateStyle']").addClass("default");
				$("strong[name='arrDate']").css("display","none");
				$("strong[name='depDate']").each(function(){
					$(this).css("display","block");
					$(this).html(dateArr[0].slice(0,4)+"/"+dateArr[0].slice(4,6)+"/"+dateArr[0].slice(6,8));
					$("span[name='depDateStyle']").removeClass("default");
				});
				
			};
		},
	
			
		
		//국내선 출발도시/도착도시선택
		domSearchCity : function(airType,val) {
			cityCode = val;
			domAirTripType = airType;
			$('body').append($("#searchCity2"));
			if(domAirTripType == "dep"){
				$("#cityType").html("출발도시");
			}else{
				$("#cityType").html("도착도시");
			}
			$("input:radio[name='city']").each(function(){
				if($(this).val() == cityCode){ 
					$(this).attr("checked", true);
				}
			});
			
			$.ajax({
		        success	: function(result){
						$.mobile.changePage($("#searchCity2"),{changeHash:true, reloadPage:true, role:"dialog",transition: "slideup"});
				},
		        error : function(xhr, status, error){
					//alert(error)
			    }
			});
			return false;
		},
	
		domSetCity : function(code, desc){
			if(domAirTripType == "dep"){
				$("em[name='depCode']").each(function(){
					$(this).html(code);
					$("input[name='dep0']").val(code);
					$("input[name='depDesc0']").val(desc);
					if(airTripType == "RT"){
						$("input[name='arr1']").val(code);
						$("input[name='arrDesc1']").val(desc);
					}
				});
				$("span[name='depName']").each(function(){
					$(this).html(desc);
				});
				
				$("#searchCity2").find(".leftArea > a").trigger("click");
			
			}else{
				$("em[name='arrCode']").each(function(){
					$(this).html(code);
					$("input[name='arr0']").val(code);
					$("input[name='arrDesc0']").val(desc);
					if(airTripType == "RT"){
						$("input[name='dep1']").val(code);
						$("input[name='depDesc1']").val(desc);
					}
				});
				$("span[name='arrName']").each(function(){
					$(this).html(desc);
				});
				$("strong[name='domACIn']").each(function(){
					$(this).css("display","block");
				});
				$("span[name='domAC']").each(function(){
					$(this).removeClass("default");
				});
				
				$("#searchCity2").find(".leftArea > a").trigger("click");
				
			};
		},
		
		schHistory : function(seq, searchInd){
			var hf = eval("document.historyForm_"+seq);
			var dateSet = new Array();
			if(hf.trip.value == "RT"){
				commonSearch.setTripType("DOM","RT");
				dateSet[0] = hf.depdate0.value;
				dateSet[1] = hf.depdate1.value;
				domairSearch.setDate(dateSet,'depdate0');
				$("em[name='depCode']").each(function(){
					$(this).html(hf.dep0_1.value);
					$("input[name='dep0']").val(hf.dep0_1.value);
					$("input[name='depDesc0']").val(hf.depDesc0_1.value);
					$("input[name='arr1']").val(hf.dep0_1.value);
					$("input[name='arrDesc1']").val(hf.depDesc0_1.value);
				});
				$("span[name='depName']").each(function(){
					$(this).html(hf.depDesc0_1.value);
				});
				
				$("em[name='arrCode']").each(function(){
					$(this).html(hf.dep1_1.value);
					$("input[name='arr0']").val(hf.dep1_1.value);
					$("input[name='arrDesc0']").val(hf.arrDesc0_1.value);
					if(airTripType == "RT"){
						$("input[name='dep1']").val(hf.dep1_1.value);
						$("input[name='depDesc1']").val(hf.arrDesc0_1.value);
					}
				});
				$("span[name='arrName']").each(function(){
					$(this).html(hf.arrDesc0_1.value);
				});
				$("strong[name='domACIn']").each(function(){
					$(this).css("display","block");
				});
				$("span[name='domAC']").each(function(){
					$(this).removeClass("default");
				});
				
			}else{
				commonSearch.setTripType("DOM","OW");
				dateSet[0] = hf.depdate0.value;
				domairSearch.setDate(dateSet,'depdate0');
			
				$("em[name='depCode']").each(function(){
					$(this).html(hf.dep0_1.value);
					$("input[name='dep0']").val(hf.dep0_1.value);
					$("input[name='depDesc0']").val(hf.depDesc0_1.value);
				});	
				$("span[name='depName']").each(function(){
					$(this).html(hf.depDesc0_1.value);
				});
				
				$("em[name='arrCode']").each(function(){
					$(this).html(hf.arr0_1.value);
					$("input[name='arr0']").val(hf.arr0_1.value);
					$("input[name='arrDesc0']").val(hf.arrDesc0_1.value);
				});
				$("span[name='arrName']").each(function(){
					$(this).html(hf.arrDesc0_1.value);
				});
				$("strong[name='domACIn']").each(function(){
					$(this).css("display","block");
				});
				$("span[name='domAC']").each(function(){
					$(this).removeClass("default");
				});
				
				
			}
			
			$("#adt").val(hf.adt.value);
			$("#chd").val(hf.chd.value);
			$("#inf").val(hf.inf.value);
			$("#adult_count").val(hf.adt.value)
			$("#child_count").val(hf.chd.value)
			$("#baby_count").val(hf.inf.value)
			if(searchInd == "Y"){
				if(hf.adt.value == 0 && hf.chd.value > 0){
					alert("출발일 기준 대한항공/아시아나 만 5세 이상 ~ 만 13세 미만 소아가 혼자 여행하는 경우 해당 항공사로 비동반 소아(UM)서비스 신청 바랍니다.\n(단, 진에어는 소아 단독 예약 불가)");
				}
				$("#domAirForm").attr('action','/domair/findDomFareSearch.lts?').submit();
			}
		},
		
		submit : function(){
			
			var dep0 = $("input[name='dep0']").val();
			var arr0 = $("input[name='arr0']").val();
			
			if(dep0 == ""){
				alert("출발도시를 선택해주세요.");
				return;
			}
			if(arr0 == ""){
				alert("도착도시를 선택해주세요.");
				return;
			}
			//국내선 왕복/편도  - 출발지와 도착지가 동일
			if(dep0 == arr0){
				alert("출.도착지가 동일합니다.");	
				return;
			}
			//국내선 왕복/편도  - 출발지와 도착지 가능여부
			if(dep0 !=''){
				if(!domairSearch.check_arrival(dep0,arr0)){			
					alert("선택하신 구간은 없는 구간입니다.");
					return;			
				}
			}
			if($("#depdate0").val() == ""){
				alert("출발날짜를 입력하세요.");
				return;
			}
			if(airTripType =='RT'){
				if($("#depdate1").val() == ""){
					alert("오는날짜를 입력하세요.");
					return;
				}
				
				if($("#depdate0").val() != "" && $("#depdate1").val() != ""){
					var date1 = parseInt($("#depdate0").val());
					var date2 = parseInt($("#depdate1").val());
					if(date1 > date2){
						alert("오는날짜를 출발날짜 이후로 선택해 주세요.");
						return;
					}
				}
			}
			
			var adtCnt = $("#adult_count").val();
			var chdCnt = $("#child_count").val();
			var infCnt = $("#baby_count").val();
			
			if(adtCnt == 0 && chdCnt ==0 && infCnt ==0 ){ 
				alert("탑승객을 선택해 주세요.");
				return;
			}
			if(adtCnt == 0 && chdCnt > 0){
				alert("출발일 기준 대한항공/아시아나 만 5세 이상 ~ 만 13세 미만 소아가 혼자 여행하는 경우 해당 항공사로 비동반 소아(UM)서비스 신청 바랍니다.\n(단, 진에어는 소아 단독 예약 불가)");
			}
			if(adtCnt < infCnt){
				alert("유아 탑승객수보다 성인 탑승객수가 커야 합니다.");
				return;
			}
			var userRT = Number(adtCnt) + Number(chdCnt) + Number(infCnt);
			if(userRT > 9){
				alert("예약인원은 9명을 넘어갈 수 없습니다.");
				return;
			}
			$("#adt").val(adtCnt);
			$("#chd").val(chdCnt);
			$("#inf").val(infCnt);
			
			// alert($("#domAirForm").serialize())
			/*$.mobile.changePage('/domair/findDomFareSearch.lts?'), {
				type: "post",
				changeHash: true,
				reloadPage :true,
				data: $("#domAirForm").serialize()
			};*/
			$("#domAirForm").attr('action','/domair/findDomFareSearch.lts?').submit();
			
		
		},

		
		check_arrival : function(seg1,seg2){
			var arrival=new Array();

			arrival[0] ="GMP"
			arrival[1] ="ICN"
			arrival[2] ="PUS"
			arrival[3] ="TAE"
			arrival[4] ="CJU"
			arrival[5] ="KWJ"
			arrival[6] ="USN"
			arrival[7] ="KPO"
			arrival[8] ="MPK"
			arrival[9] ="HIN"
			arrival[10]="RSU"
			arrival[11]="YEC"
			arrival[12]="SHO"
			arrival[13]="KUV"
			arrival[14]="WJU"
			arrival[15]="KAG"
			arrival[16]="CJJ"
			arrival[17]="MWX"
			
			
			//출발이  대구 TAE 일경우
			var arrival_TAE=new Array();
			arrival_TAE[0]="CJU"
			arrival_TAE[1]="KAG"
			arrival_TAE[2]="GMP"
			arrival_TAE[3]="ICN"
			arrival_TAE[4]="SHO"
			
			
			//출발이  울산 USN 일경우
			var arrival_USN=new Array();
			arrival_USN[0]="CJU"
			arrival_USN[1]="GMP"
			arrival_USN[2]="ICN"
			
			
			//출발이 원주 WJU 일경우
			var arrival_WJU=new Array();
			arrival_WJU[0]="CJU"
			arrival_WJU[1]="PUS"
			
			
			
			//출발이  예천 YEC 일경우
			var arrival_YEC=new Array();
			arrival_YEC[0]="GMP"
			arrival_YEC[1]="ICN"
			
			
			
			//출발이  여수 RSU 일경우
			var arrival_RSU=new Array();
			arrival_RSU[0]="CJU"
			arrival_RSU[1]="KAG"
			arrival_RSU[2]="GMP"
			arrival_RSU[3]="ICN"
			arrival_RSU[4]="SHO"
			
			
			//출발이  속초 SHO 일경우
			var arrival_SHO=new Array();
			arrival_SHO[0]="CJU"
			arrival_SHO[1]="KUV"
			arrival_SHO[2]="KWJ"
			arrival_SHO[3]="MPK"
			arrival_SHO[4]="RSU"
			arrival_SHO[5]="TAE"
			
			
			//출발이  목포 MPK 일경우
			var arrival_MPK=new Array();
			arrival_MPK[0]="CJU"
			arrival_MPK[1]="KAG"
			arrival_MPK[2]="PUS"
			arrival_MPK[3]="GMP"
			arrival_MPK[4]="ICN"
			arrival_MPK[5]="SHO"
			
			//출발이  부산 PUS 일경우
			var arrival_PUS=new Array();
			arrival_PUS[0]="CJU"
			arrival_PUS[1]="KAG"
			arrival_PUS[2]="KWJ"
			arrival_PUS[3]="MPK"
			arrival_PUS[4]="GMP"
			arrival_PUS[5]="ICN"
			arrival_PUS[6]="WJU"
			arrival_PUS[7]="YNY"
			
			
			//출발이 군산 KUV 일경우
			var arrival_KUV=new Array();
			arrival_KUV[0]="CJU"
			arrival_KUV[1]="KAG"
			arrival_KUV[2]="GMP"
			arrival_KUV[3]="ICN"
			arrival_KUV[4]="SHO"
			
			//출발이 광주 KWJ 일경우
			var arrival_KWJ=new Array();
			arrival_KWJ[0]="CJU"
			arrival_KWJ[1]="KAG"
			arrival_KWJ[2]="PUS"
			arrival_KWJ[3]="GMP"
			arrival_KWJ[4]="ICN"
			arrival_KWJ[5]="SHO"
			
			
			//출발이 포항 KPO 일경우
			var arrival_KPO=new Array();
			arrival_KPO[0]="CJU"
			arrival_KPO[1]="GMP"
			arrival_KPO[2]="ICN"
			
			
			//출발이 강릉 KAG 일경우
			var arrival_KAG=new Array();
			
			arrival_KAG[0]="CJU"
			arrival_KAG[1]="KUV"
			arrival_KAG[2]="KWJ"
			arrival_KAG[3]="MPK"
			arrival_KAG[4]="PUS"
			arrival_KAG[5]="RSU"
			arrival_KAG[6]="TAE"
			
			
			//출발이 진주 HIN 일경우
			var arrival_HIN=new Array();
			arrival_HIN[0]="CJU"
			arrival_HIN[1]="GMP"
			arrival_HIN[2]="ICN"
			
			//출발이 제주 CJU 일경우
			var arrival_CJU=new Array();
			
			arrival_CJU[0] ="GMP"
			arrival_CJU[1] ="ICN"
			arrival_CJU[2] ="PUS"
			arrival_CJU[3] ="TAE"
			arrival_CJU[4] ="KWJ"
			arrival_CJU[5] ="USN"
			arrival_CJU[6] ="KPO"
			arrival_CJU[7] ="MPK"
			arrival_CJU[8] ="HIN"
			arrival_CJU[9] ="RSU"
			arrival_CJU[10]="SHO"
			arrival_CJU[11]="KUV"
			arrival_CJU[12]="WJU"
			arrival_CJU[13]="KAG"
			arrival_CJU[14]="CJJ"
			arrival_CJU[15]="MWX"
			
			
			//출발이 서울 SEL 일경우
			var arrival_SEL=new Array();
			
			arrival_SEL[0] ="PUS"
			arrival_SEL[1] ="TAE"
			arrival_SEL[2] ="CJU"
			arrival_SEL[3] ="KWJ"
			arrival_SEL[4] ="USN"
			arrival_SEL[5] ="KPO"
			arrival_SEL[6] ="MPK"
			arrival_SEL[7] ="HIN"
			arrival_SEL[8] ="RSU"
			arrival_SEL[9] ="YEC"
			arrival_SEL[10]="KUV"
			arrival_SEL[11]="YNY"
			arrival_SEL[12]="MWX"


			//출발이 서울 GMP 일경우
			var arrival_GMP=new Array();
			
			arrival_GMP[0] ="PUS"
			arrival_GMP[1] ="TAE"
			arrival_GMP[2] ="CJU"
			arrival_GMP[3] ="KWJ"
			arrival_GMP[4] ="USN"
			arrival_GMP[5] ="KPO"
			arrival_GMP[6] ="MPK"
			arrival_GMP[7] ="HIN"
			arrival_GMP[8] ="RSU"
			arrival_GMP[9] ="YEC"
			arrival_GMP[10]="KUV"
			arrival_GMP[11]="YNY"
			arrival_GMP[12]="MWX"

			//출발이 서울 ICN 일경우
			var arrival_ICN=new Array();
			
			arrival_ICN[0] ="PUS"
			arrival_ICN[1] ="TAE"
			arrival_ICN[2] ="CJU"
			arrival_ICN[3] ="KWJ"
			arrival_ICN[4] ="USN"
			arrival_ICN[5] ="KPO"
			arrival_ICN[6] ="MPK"
			arrival_ICN[7] ="HIN"
			arrival_ICN[8] ="RSU"
			arrival_ICN[9] ="YEC"
			arrival_ICN[10]="KUV"
			arrival_ICN[11]="YNY"
			arrival_ICN[12]="MWX"
			
			//출발이 청주 CJJ 일경우
			var arrival_CJJ=new Array();
			arrival_CJJ[0]="CJU"
			
			
			//출발이 양양 YNY 일경우
			var arrival_YNY=new Array();
			
			arrival_YNY[0] ="GMP"
			arrival_YNY[1] ="ICN"
			arrival_YNY[2] ="PUS"
			
			//출발이 무안 MWX 일경우
			var arrival_MWX=new Array();
			
			arrival_MWX[0]="GMP"
			arrival_MWX[1]="ICN"
			arrival_MWX[2]="CJU"


			if(seg1=='GMP'){
				for(var i=0;i<arrival_GMP.length;i++){
					var z0=arrival_GMP[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}
			
			if(seg1=='ICN'){
			
				for(var i=0;i<arrival_ICN.length;i++){
					var z0=arrival_ICN[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='PUS'){
			
				for(var i=0;i<arrival_PUS.length;i++){
					var z0=arrival_PUS[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='TAE'){
			
				for(var i=0;i<arrival_TAE.length;i++){
					var z0=arrival_TAE[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='CJU'){
			
				for(var i=0;i<arrival_CJU.length;i++){
					var z0=arrival_CJU[i];
					if(z0 == seg2)
						return true;
				}
			
			return false;
			
			}

			if(seg1=='KWJ'){
			
				for(var i=0;i<arrival_KWJ.length;i++){
					var z0=arrival_KWJ[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='USN'){
			
				for(var i=0;i<arrival_USN.length;i++){
					var z0=arrival_USN[i];
					if(z0 == seg2)
						return true;
				}
			
			return false;
			
			}

			if(seg1=='KPO'){
			
				for(var i=0;i<arrival_KPO.length;i++){
					var z0=arrival_KPO[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}


			if(seg1=='MPK'){
			
				for(var i=0;i<arrival_MPK.length;i++){
					var z0=arrival_MPK[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}



			if(seg1=='HIN'){
			
				for(var i=0;i<arrival_HIN.length;i++){
					var z0=arrival_HIN[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='RSU'){
			
				for(var i=0;i<arrival_RSU.length;i++){
					var z0=arrival_RSU[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}


			if(seg1=='YEC'){
			
				for(var i=0;i<arrival_YEC.length;i++){
					var z0=arrival_YEC[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}


			if(seg1=='SHO'){
			
				for(var i=0;i<arrival_SHO.length;i++){
					var z0=arrival_SHO[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}


			if(seg1=='KUV'){
			
				for(var i=0;i<arrival_KUV.length;i++){
					var z0=arrival_KUV[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='WJU'){
			
				for(var i=0;i<arrival_WJU.length;i++){
					var z0=arrival_WJU[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='KAG'){
			
				for(var i=0;i<arrival_KAG.length;i++){
					var z0= arrival_KAG[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='CJJ'){
			
				for(var i=0;i<arrival_CJJ.length;i++){
					var z0=arrival_CJJ[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='YNY'){
			
				for(var i=0;i<arrival_YNY.length;i++){
					var z0=arrival_YNY[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}

			if(seg1=='MWX'){
			
				for(var i=0;i<arrival_MWX.length;i++){
					var z0=arrival_MWX[i];
					if(z0 == seg2)
						return true;
				}
				
				return false;
			
			}
		},
}
/*****************************************************************************************************************************************************************/
/**=============================================================================================================================================================**/
/**																		[	국	제	선	]																		**/
/**=============================================================================================================================================================**/
/*****************************************************************************************************************************************************************/
//국제선 관련 변수
var compIndex = 1;	//좌석등급 chk 유무를 위한 index;
function setComp(returnvalue,var1,var2,var3,var4,var5){
	var fName = document.airSearchForm;
	var compDesc = "";
	if(returnvalue == 'Y'){
		compDesc = '일반석';
		//$("strong[name='compDesc']").html(compDesc);
		compIndex = 1;
		
	}else if(returnvalue == 'C'){
		compDesc = '비지니스석';
		//$("strong[name='compDesc']").html(compDesc);
		compIndex = 2;
	}else{
		compDesc = '일등석';
		//$("strong[name='compDesc']").html(compDesc);
		compIndex = 3;
	}
	$("#compDesc").html(compDesc);
	$("#compDesc2").html(compDesc);
	fName.comp.value = returnvalue;
	fName.comp_nm.value = compDesc;
}
function printConsoleItin(){
	console.log("--------------"+airItinCnt_MD+" 구간 ---------------");
	console.log("dep0 : " + $("#dep0").val() +"\ndep0_text : " + $("#dep0_text").val()+"\narr0 : " + $("#arr0").val() +"\narr0_text : " + $("#arr0_text").val()+"\ndepdate0 : " + $("#depdate0").val());
	console.log("dep1 : " + $("#dep1").val() +"\ndep1_text : " + $("#dep1_text").val()+"\narr1 : " + $("#arr1").val() +"\narr1_text : " + $("#arr1_text").val()+"\ndepdate1 : " + $("#depdate1").val());
	console.log("dep2 : " + $("#dep2").val() +"\ndep2_text : " + $("#dep2_text").val()+"\narr2 : " + $("#arr2").val() +"\narr2_text : " + $("#arr2_text").val()+"\ndepdate2 : " + $("#depdate2").val());
	console.log("dep3 : " + $("#dep3").val() +"\ndep3_text : " + $("#dep3_text").val()+"\narr3 : " + $("#arr3").val() +"\narr3_text : " + $("#arr3_text").val()+"\ndepdate3 : " + $("#depdate3").val());
	console.log("-------------------------------------");
}
var airSearch = {
	openCompTitle :function(){
		selectDialogue('selectComp','좌석등급 선택', 'radio', ['일반석','비지니스석','일등석'],['Y','C','F'], compIndex, false,'setComp',null,null,null,null,null); return false;
	},
	//다구간 여정 추가	
	addVia : function(){
		
		var maxLength = 4;
		// 임시 주석 var maxLength = 4;
		if(airItinCnt_MD == maxLength){
	    	alert("여정은 총 " + maxLength + "개 까지만 가능합니다.\n" + maxLength + "개 이상의 여정이 있으시다면 1;1문의로 요청해 주시기 바랍니다.");
			return;
		}else{
			$("#section"+airItinCnt_MD).next().show();
			if(airItinCnt_MD < 4){
				airItinCnt_MD++;
			}
		}
		if(airItinCnt_MD == 3){
			var firstDepDesc =$("#dep0_text").val();
			var firstDepVal =$("#dep0").val();
			var lastArrDesc =$("#arr1_text").val();
			var lastArrVal =$("#arr1").val();
				
			$("#section2").find("div.button").hide();
			$("#section3").find("div.button").show();
			$("#section4").find("div.button").hide();
			airSearch.setViaReset(3);
			$("#md_arr2Text").html(lastArrDesc);
			$("#arr2").val(lastArrVal);
			$("#arr2_text").val(lastArrDesc);
			
			$("#md_dep0Text").html(firstDepDesc);
			$("#dep0").val(firstDepVal);
			$("#dep0_text").val(firstDepDesc);
			$("#em_depdate2").html("귀국날짜");
			
		}else if(airItinCnt_MD == 4){
			var firstDepDesc =$("#dep0_text").val();
			var firstDepVal =$("#dep0").val();
			var lastArrDesc =$("#arr2_text").val();
			var lastArrVal =$("#arr2").val();
			
			$("#section2").find("div.button").hide();
			$("#section3").find("div.button").hide();
			$("#section4").find("div.button").show();
			airSearch.setViaReset(4);
			$("#md_arr3Text").html(lastArrDesc);
			$("#arr3").val(lastArrVal);
			$("#arr3_text").val(lastArrDesc);
			
			$("#md_dep0Text").html(firstDepDesc);
			$("#dep0").val(firstDepVal);
			$("#dep0_text").val(firstDepDesc);
			$("#em_depdate3").html("귀국날짜");
		}
	},
	setViaReset : function(num){
		for(var i = 0; i < num; i++){
			if(i != 0){
				$("#dep"+i).val("");
				$("#dep"+i+"_text").val("");				
				$("#md_dep"+i+"Text").html("");
			}
			$("span[name='md_depdate"+i+"Text']").html("");
			$("#depdate"+i).val("");
			if(i != (num-1)){
				$("#arr"+i).val("");
				$("#arr"+i+"_text").val("");
				$("#md_arr"+i+"Text").html("");
			}
		}
		$("em[name='em_depdate']").html('출발날짜');
		$("#retdate").val("");
	},
	
	//다구간 여정 삭제
	removeVia : function(){
		if(airItinCnt_MD == 2){
			alert("출발 및 귀국 여정은 삭제하실 수 없습니다.");
			return;
		}else{
			if(airItinCnt_MD == 3){
			}else if(airItinCnt_MD == 4){
			}
			
			$("#section"+airItinCnt_MD).hide();
			if(airItinCnt_MD > 2){
				airItinCnt_MD--;
			}
		}
		if(airItinCnt_MD == 2){
			var firstDepDesc =$("#dep0_text").val();
			var firstDepVal =$("#dep0").val();
			var lastArrDesc =$("#arr2_text").val();
			var lastArrVal =$("#arr2").val();
			
			$("#section2").find("div.button").show();
			$("#section3").find("div.button").hide();
			$("#section4").find("div.button").hide();
			airSearch.setViaReset(3);
			$("#md_arr1Text").html(lastArrDesc);
			$("#arr1").val(lastArrVal);
			$("#arr1_text").val(lastArrDesc);
			$("em[name='em_depdate']").html('출발날짜');
			$("#em_depdate1").html("귀국날짜");
		}else if(airItinCnt_MD == 3){
			var firstDepDesc =$("#dep0_text").val();
			var firstDepVal =$("#dep0").val();
			var lastArrDesc =$("#arr3_text").val();
			var lastArrVal =$("#arr3").val();
			
			$("#section2").find("div.button").hide();
			$("#section3").find("div.button").show();
			$("#section4").find("div.button").hide();
			airSearch.setViaReset(4);
			$("#md_arr2Text").html(lastArrDesc);
			$("#arr2").val(lastArrVal);
			$("#arr2_text").val(lastArrDesc);
			$("em[name='em_depdate']").html('출발날짜');
			$("#em_depdate2").html("귀국날짜");
		}
	},
	initCitySearchMobile : function(strAirCity, selectAirCity, searchInd){
		var searchUrl = "/booking/findListAirCity.lts";
		var mInd = typeof($("#mInd").val()) == "undefined" ? "" : $("#mInd").val();
		
		try {
			$.ajax({
				type     	: "POST",
				async 		: true,
				data		:{ "strAirCity" : strAirCity,
							   "selectAirCity" : selectAirCity,
							   "flag" : "AIR",
							   "mInd" : mInd
							},
				url      	: searchUrl,
				dataType : "html",
		        success	: function(result){
					$( "#commonLayer" ).html( result );
					
					if(searchInd == false){
						$.mobile.changePage($("#commonLayer"),{changeHash:true, reloadPage:true, role:"dialog",transition: "slideup"});
					}
				},
		        error : function(xhr, status, error){
					//alert(error)
			    }
			});
		} catch(ee) {			
		}	
		return false;
	},
	//도시검색 관련
	openCitySearchMoblie : function(loc,strAirCity,selectAirCity,searchInd){
		var searchUrl = "/booking/findListAirCity.lts";
		airCityLoc = loc;
		var selectCity = $("#"+loc).val();
		if(selectCity == ""){
			selectCity = "SEL";
		}
		if(loc == 'dep0'){
			$('body').append($("#searchCity1"));
			$("#searchCity1").find(":radio[value='"+selectCity+"']").attr("checked","checked");
			
			$.ajax({
		        success	: function(result){
						$.mobile.changePage($("#searchCity1"),{changeHash:true, reloadPage:true, role:"dialog",transition: "slideup"});
				},
		        error : function(xhr, status, error){
					//alert(error)
			    }
			});
		}else if(airTripType=='MD' && airItinCnt_MD == 2 && loc =='arr1'){
			$('body').append($("#searchCity1"));
			$("#searchCity1").find(".logo").html("도착도시");
			$("#searchCity1").find(":radio[value='"+selectCity+"']").attr("checked","checked");
			
			$.ajax({
		        success	: function(result){
						$.mobile.changePage($("#searchCity1"),{changeHash:true, reloadPage:true, role:"dialog",transition: "slideup"});
				},
		        error : function(xhr, status, error){
					//alert(error)
			    }
			});
		}else if(airTripType=='MD' && airItinCnt_MD == 3 && loc =='arr2'){
			$('body').append($("#searchCity1"));
			$("#searchCity1").find(".logo").html("도착도시");
			$("#searchCity1").find(":radio[value='"+selectCity+"']").attr("checked","checked");
			
			$.ajax({
		        success	: function(result){
						$.mobile.changePage($("#searchCity1"),{changeHash:true, reloadPage:true, role:"dialog",transition: "slideup"});
				},
		        error : function(xhr, status, error){
					//alert(error)
			    }
			});
		}else if(airTripType=='MD' && airItinCnt_MD == 4 && loc =='arr3'){
			$('body').append($("#searchCity1"));
			$("#searchCity1").find(".logo").html("도착도시");
			$("#searchCity1").find(":radio[value='"+selectCity+"']").attr("checked","checked");
			
			$.ajax({
		        success	: function(result){
						$.mobile.changePage($("#searchCity1"),{changeHash:true, reloadPage:true, role:"dialog",transition: "slideup"});
				},
		        error : function(xhr, status, error){
					//alert(error)
			    }
			});
		}else{
			airSearch.initCitySearchMobile(strAirCity, selectAirCity, searchInd);
		}
			
	},
	
	setAirCityMobile : function(code, desc){
		var loc = airCityLoc;
		if(airTripType =='OW' || airTripType =='RT'){			//편도/왕복
			$("span[name="+loc+"_span]").each(function(){$(this).removeClass("default");});
			$("em[name=" + airCityLoc+"Code]").html(code);
			$("span[name=" + airCityLoc+"_text]").html(desc);
			if(loc == 'dep0'){
				$("#dep0").val(code);
				$("#dep0_text").val(desc);
				if(airTripType =='RT'){
					$("#arr1").val(code);
					$("#arr1_text").val(desc);
				}
				$("#searchCity1").find(".leftArea > a").trigger("click");
			}else{
				$("#arr0").val(code);
				$("#arr0_text").val(desc);
				if(airTripType =='RT'){
					$("#dep1").val(code);
					$("#dep1_text").val(desc);
				}
				$("#commonLayer").find(".leftArea > a").trigger("click");
				//$.mobile.back();
			}
		}else{

			if(airItinCnt_MD == 2){			//다구간 2개 구간
				if(loc == 'dep0'){
					$("#dep0").val(code);
					$("#dep0_text").val(desc);
					$("#md_dep0Text").html(desc);
					$("#arr1").val(code);
					$("#arr1_text").val(desc);
					$("#md_arr1Text").html(desc);
					$("#searchCity1").find(".leftArea > a").trigger("click");
				}else if(loc =='arr0' || loc =='dep1'){
					$("#dep1").val(code);
					$("#dep1_text").val(desc);
					$("#md_dep1Text").html(desc);
					if(loc == 'arr0'){
						$("#arr0").val(code);
						$("#arr0_text").val(desc);
						$("#md_arr0Text").html(desc);
					}
					$("#commonLayer").find(".leftArea > a").trigger("click");
					//$.mobile.back();
				}else{		
				//arr1
					$("#arr1").val(code);
					$("#arr1_text").val(desc);
					$("#md_arr1Text").html(desc);
					$("#searchCity1").find(".leftArea > a").trigger("click");
				}
			}else if(airItinCnt_MD == 3){			//다구간 3개 구간
				if(loc == 'dep0' || loc =='arr2'){
					if(loc=='dep0'){
						$("#dep0").val(code);
						$("#dep0_text").val(desc);
						$("#md_dep0Text").html(desc);
					}
					$("#arr2").val(code);
					$("#arr2_text").val(desc);
					$("#md_arr2Text").html(desc);
					$("#searchCity1").find(".leftArea > a").trigger("click");
				}else if(loc =='dep1' || loc =='arr0'){
					$("#dep1").val(code);
					$("#dep1_text").val(desc);
					$("#md_dep1Text").html(desc);
					if(loc == 'arr0'){
						$("#arr0").val(code);
						$("#arr0_text").val(desc);
						$("#md_arr0Text").html(desc);
					}
					$("#commonLayer").find(".leftArea > a").trigger("click");
					//$.mobile.back();
				}else if(loc =='dep2' || loc =='arr1'){
					$("#dep2").val(code);
					$("#dep2_text").val(desc);
					$("#md_dep2Text").html(desc);
					if(loc == 'arr1'){
						$("#arr1").val(code);
						$("#arr1_text").val(desc);
						$("#md_arr1Text").html(desc);
					}
					$("#commonLayer").find(".leftArea > a").trigger("click");
					//$.mobile.back();
				}
			}else if(airItinCnt_MD == 4){			//다구간 4개 구간
				if(loc == 'dep0' || loc =='arr3'){
					if(loc=='dep0'){
						$("#dep0").val(code);
						$("#dep0_text").val(desc);
						$("#md_dep0Text").html(desc);
					}
					$("#arr3").val(code);
					$("#arr3_text").val(desc);
					$("#md_arr3Text").html(desc);
					$("#searchCity1").find(".leftArea > a").trigger("click");
				}else if(loc =='dep1' || loc =='arr0'){
					$("#dep1").val(code);
					$("#dep1_text").val(desc);
					$("#md_dep1Text").html(desc);
					if(loc == 'arr0'){
						$("#arr0").val(code);
						$("#arr0_text").val(desc);
						$("#md_arr0Text").html(desc);
					}
					$("#commonLayer").find(".leftArea > a").trigger("click");
					//$.mobile.back();
				}else if(loc =='dep2' || loc =='arr1'){
					$("#dep2").val(code);
					$("#dep2_text").val(desc);
					$("#md_dep2Text").html(desc);
					if(loc == 'arr1'){
						$("#arr1").val(code);
						$("#arr1_text").val(desc);
						$("#md_arr1Text").html(desc);
					}
					$("#commonLayer").find(".leftArea > a").trigger("click");
					//$.mobile.back();
				}else if(loc =='dep3' || loc =='arr2'){
					$("#dep3").val(code);
					$("#dep3_text").val(desc);
					$("#md_dep3Text").html(desc);
					if(loc == 'arr2'){
						$("#arr2").val(code);
						$("#arr2_text").val(desc);
						$("#md_arr2Text").html(desc);
					}
					$("#commonLayer").find(".leftArea > a").trigger("click");
					//$.mobile.back();
				}
			}
		}
		//printConsoleItin();
	},
	setIntAirHistory : function(val,submitInd){
		var strCookie = val.split("&");
		var tripType;
		var dayInd = "N";
		var dep1Exist = false;
		var dep2Exist = false;
		//alert(val);
		
    	for(var j = 0; j < strCookie.length; j++){
    		var param = strCookie[j].split("=");
    		if(param[1] !=""){
	    		if( param[0] == "trip"){
	    			tripType = param[1];
	    			commonSearch.setTripType('INT', param[1]);
	    		}
	    		
	    		//------------------------------------------------------------------------------
	    		if(param[0] == "dep0"){
	    			$("#"+param[0]).val(param[1]);
	    			if(tripType !="MD"){
	    				$("#arr1").val(param[1]);
		    			$("span[name="+param[0]+"_span]").removeClass("default");
		    			$("em[name=" + param[0]+"Code]").html(param[1]);
	    			}else{
	    				
	    			}
	    		}
	    		if(param[0] == "dep0_text"){
	    			$("#"+param[0]).val(param[1]);
	    			if(tripType !="MD"){
	    				$("#arr1_text").val(param[1]);
	    				$("span[name="+param[0]+"]").html(param[1]);
	    			}else{
	    				$("#md_dep0Text").html(param[1]);
	    			}
	    		}
	    		if(param[0] == "arr0"){
	    			$("#"+param[0]).val(param[1]);
	    			if(tripType !="MD"){
	    				$("#dep1").val(param[1]);
		    			$("span[name="+param[0]+"_span]").removeClass("default");
		    			$("em[name=" + param[0]+"Code]").html(param[1]);
	    			}else{
	    				
	    			}
	    		}
	    		if(param[0] == "arr0_text"){
	    			$("#"+param[0]).val(param[1]);
	    			if(tripType !="MD"){
	    				$("#dep1_text").val(param[1]);
	    				$("span[name="+param[0]+"]").html(param[1]);
	    			}else{
	    				$("#md_arr0Text").html(param[1]);
	    			}
	    		}
	    		if(param[0] == "depdate0"){
	    			$('#'+param[0]).val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    			if(tripType !="MD"){
		    			$("#RT_"+param[0]+"_span").removeClass("default");
		    			$("#OW_"+param[0]+"_span").removeClass("default");
		    			$("strong[name="+param[0]+"Text]").html(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    			}else{
	    				$("span[name='md_depdate0Text']").html(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    			}
	    		}
	    		//------------------------------------------------------------------------------
	    		if(param[0] == "dep1"){
	    			$("#"+param[0]).val(param[1]);
	    			if(tripType !="MD"){
	    				$("#arr0").val(param[1]);
		    			$("span[name='arr0_span']").removeClass("default");
		    			$("em[name='arr0Code']").html(param[1]);
	    			}else{
	    				airItinCnt_MD = 2;
	    			}
	    		}
				if(param[0] == "dep1_text"){
					$("#"+param[0]).val(param[1]);
					if(tripType !="MD"){
						$("#arr0_text").val(param[1]);
						$("span[name='arr0_text']").html(param[1]);
					}else{
						$("#md_dep1Text").html(param[1]);
					}
	    		}
				if(param[0] == "arr1"){
					$("#"+param[0]).val(param[1]);
					if(tripType !="MD"){
						$("#dep0").val(param[1]);
						$("span[name='dep0_span']").removeClass("default");
		    			$("em[name='dep0Code']").html(param[1]);
					}else{
						
					}
	    		}
	    		if(param[0] == "arr1_text"){
	    			$("#"+param[0]).val(param[1]);
	    			if(tripType !="MD"){
	    				$("#dep0_text").val(param[1]);
	    				$("span[name='dep0_text']").html(param[1]);
	    			}else{
	    				$("#md_arr1Text").html(param[1]);
	    			}
	    		}
	    		if(param[0] == "depdate1"){
	    			$('#'+param[0]).val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    			if(tripType !="MD"){
		    			$("#"+tripType+"_"+param[0]+"_span").removeClass("default");	    			
		    			$("strong[name="+param[0]+"Text]").html(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    			}else{
	    				$("span[name='md_depdate1Text']").html(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    			}
	    		}
	    		//------------------------------------------------------------------------------
	    		if(param[0] == "strDateSearch"){
	    			$('#strDateSearch option[value=' + param[1] + ']').prop({selected: true});
	    		}
	    		
	    		//------------------------------------------------------------------------------
	    		if(param[0] == "returnUnfix"){
	    			if (param[1] == "Y") {
	    				$("#returnUnfix").val("Y");
	    				$('#retdate').val('OPEN');
	    				$("#"+tripType+"_depdate1_span").removeClass("default");
	    				$('strong[name="depdate1Text"]').html('OPEN');
	    			} else {
	    				$("#returnUnfix").val("N");
	    				
	    			}
	        	}
	    		if(param[0] == "retdate"){
	    			if (param[1] != "OPEN") { // returnUnfix 와 관련
	    				$('#'+param[0]).val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
		    			$('#depdate1').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    				if(tripType !="MD"){
		    				$("#"+tripType+"_depdate1_span").removeClass("default");
		    				$("strong[name=depdate1Text]").html(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    				}
	    			}
	        	}
	    		if(param[0] == "val"){
	    			$("#val").val(param[1]);
	        	}
	    		//------------------------------------------------------------------------------
	    		if(param[0] == "dep2"){
	    			airItinCnt_MD = 3;
	    			dep2Exist = true;
	    			
	    			$('#'+param[0]).val(param[1]);
	    		}
				if(param[0] == "dep2_text"){
	    			$('#'+param[0]).val(param[1]);
	    			$("#md_dep2Text").html(param[1]);
	    		}
				if(param[0] == "arr2"){
					$('#'+param[0]).val(param[1]);
	    		}
	    		if(param[0] == "arr2_text"){
	    			$('#'+param[0]).val(param[1]);
	    			$("#md_arr2Text").html(param[1]);
	    		}
	    		if(param[0] == "depdate2"){
	    			$('#'+param[0]).val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	    			$("span[name='md_depdate2Text']").html(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	        	}
	    		//------------------------------------------------------------------------------
	    		if(param[0] == "dep3"){
	    			airItinCnt_MD = 4;
	    			$('#'+param[0]).val(param[1]);
	    		}
				if(param[0] == "dep3_text"){
					$('#'+param[0]).val(param[1]);
					$("#md_dep3Text").html(param[1]);
	    		}
				if(param[0] == "arr3"){
					$('#'+param[0]).val(param[1]);
	    		}
	    		if(param[0] == "arr3_text"){
	    			$('#'+param[0]).val(param[1]);
	    			$("#md_arr3Text").html(param[1]);
	    		}
	    		if(param[0] == "depdate3"){
    				$('#'+param[0]).val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
    				$("span[name='md_depdate3Text']").html(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
	        	}

	    		//------------------------------------------------------------------------------
	    		if(param[0] == "comp"){
	    			$("#comp").val(param[1]);
	    			if(param[1] == "Y"){
	    				compIndex = 1 ;
	    			}else if(param[1] =="C"){
	    				compIndex = 2 ;
	    			}else if(param[1] =="F"){
	    				compIndex = 3 ;
	    			}
	    		}
	    		if(param[0] == "comp_nm"){
	    			if (tripType == "MD") {
	    				$("#compDesc2").html(param[1]);
	    			}else{
	    				$("#compDesc").html(param[1]);
	    			}
	    			$("#comp_nm").val(param[1]);
	    		}
	    		if(param[0] == "adt"){
	    			if (tripType == "MD") {
	    				$("#adult_count2").val(param[1]);
	    			}else{
	    				$("#adult_count").val(param[1]);
	    			}
	    			$("#adt").val(param[1]);
	    		}
	    		if(param[0] == "chd"){
	    			if (tripType == "MD") {
	    				$("#child_count2").val(param[1]);
	    			}else{
	    				$("#child_count").val(param[1]);
	    			}
	    			$("#chd").val(param[1]);
	    		}
	    		if(param[0] == "inf"){
	    			if (tripType == "MD") {
	    				$("#baby_count2").val(param[1]);
	    			}else{
	    				$("#baby_count").val(param[1]);
	    			}
	    			$("#inf").val(param[1]);
	    		}
	    		
	    	}
    	}
    	if (tripType == "MD") {
    		if(airItinCnt_MD == 2){
    			$("#section2").find("div.button").show();
    			$("#section3").find("div.button").hide();
    			$("#section4").find("div.button").hide();
    			$("#section2").show();
    			$("#section3").hide();
    			$("#section4").hide();
    			$("em[name='em_depdate']").html('출발날짜');
    			$("#em_depdate1").html("귀국날짜");
    		}else if(airItinCnt_MD == 3){
    			$("#section2").find("div.button").hide();
    			$("#section3").find("div.button").show();
    			$("#section4").find("div.button").hide();
    			$("#section2").show();
    			$("#section3").show();
    			$("#section4").hide();
    			$("em[name='em_depdate']").html('출발날짜');
    			$("#em_depdate2").html("귀국날짜");
    		}else if(airItinCnt_MD == 4){
    			$("#section2").find("div.button").hide();
    			$("#section3").find("div.button").hide();
    			$("#section4").find("div.button").show();
    			$("#section2").show();
    			$("#section3").show();
    			$("#section4").show();
    			$("em[name='em_depdate']").html('출발날짜');
    			$("#em_depdate3").html("귀국날짜");
    		}
    	}
    	if(submitInd =='Y'){
    		airSearch.airSubmit();
    	}
	},
	
	setDate : function(dateArr,loc,unfixInd,unfixVal){
		if(airTripType =='RT' || airTripType =='OW'){
			if(dateArr[1]==null){
				if(dateArr[0] != null){
					$("#"+airTripType+"_"+loc+"_span").removeClass("default");
					$("strong[name="+loc+"Text]").html(dateArr[0].substring(0,4)+"/"+dateArr[0].substring(4,6)+"/"+dateArr[0].substring(6));
					if(loc=='depdate0'){
						$("#depdate0").val(dateArr[0]);
					}else{
						$("#depdate1").val(dateArr[0]);
						$("#retdate").val(dateArr[0]);
						$("#returnUnfix").val("N");
						$("#val").val("");
					}
				}
				
			}else{
				$("#"+airTripType+"_depdate0_span").removeClass("default");
				$("#"+airTripType+"_depdate1_span").removeClass("default");
				$("strong[name=depdate0Text]").html(dateArr[0].substring(0,4)+"/"+dateArr[0].substring(4,6)+"/"+dateArr[0].substring(6));
				$("#depdate0").val(dateArr[0]);
				$("strong[name=depdate1Text]").html(dateArr[1].substring(0,4)+"/"+dateArr[1].substring(4,6)+"/"+dateArr[1].substring(6));
				$("#depdate1").val(dateArr[1]);
				$("#retdate").val(dateArr[1]);
				$("#returnUnfix").val("N");
				$("#val").val("");
			}
			
			if(unfixInd){
				$("strong[name=depdate1Text]").html("OPEN");
				$("#"+airTripType+"_depdate1_span").removeClass("default");
				$("#returnUnfix").val("Y");
				$("#val").val(unfixVal);
				$("#retdate").val("OPEN");
			}
		}else{
			if(dateArr[0] != null){
				$("span[name=md_"+loc+"Text]").html(dateArr[0].substring(0,4)+"/"+dateArr[0].substring(4,6)+"/"+dateArr[0].substring(6));
				$("#"+loc).val(dateArr[0]);
				
			}
		}
	},
	resetSearchForm : function(){
		/**왕복/편도 구간 초기화**/
		$("span[name='arr0_span']").addClass("default");
		$("em[name='dep0Code']").html("SEL");
		$("span[name='dep0_text']").html("인천/김포");
		$("em[name='arr0Code']").html("");
		$("span[name='arr0_text']").html("");
		$("strong[name='depdate0Text']").html("출발날짜");
		$("strong[name='depdate1Text']").html("귀국날짜");
		if(!$("#OW_depdate0_span").hasClass("default"))	$("#OW_depdate0_span").addClass("default");
		if(!$("#OW_depdate1_span").hasClass("default"))	$("#OW_depdate1_span").addClass("default");
		if(!$("#RT_depdate0_span").hasClass("default"))	$("#RT_depdate0_span").addClass("default");
		if(!$("#RT_depdate1_span").hasClass("default"))	$("#RT_depdate1_span").addClass("default");
		/**왕복/편도 구간 초기화 끝**/
		/**다구간 초기화**/
		$("span[name='md_depdate0Text']").html("");
		$("span[name='md_depdate1Text']").html("");
		$("span[name='md_depdate2Text']").html("");
		$("span[name='md_depdate3Text']").html("");
		$("#md_dep1Text").html("");
		$("#md_dep2Text").html("");
		$("#md_dep3Text").html("");
		$("#md_arr0Text").html("");
		$("#md_arr1Text").html("");
		$("#md_arr2Text").html("");
		$("#md_arr3Text").html("");
		$("#dep0").val("SEL");
		$("#dep0_text").val("인천/김포");
		$("#dep1").val("");
		$("#dep1_text").val("");
		$("#dep2").val("");
		$("#dep2_text").val("");
		$("#dep3").val("");
		$("#dep3_text").val("");
		$("#arr0").val("");
		$("#arr0_text").val("");
		$("#arr1").val("");
		$("#arr1_text").val("");
		$("#arr2").val("");
		$("#arr2_text").val("");
		$("#arr3").val("");
		$("#arr3_text").val("");
		$("#depdate0").val("");
		$("#depdate1").val("");
		$("#retdate").val("");
		$("#depdate2").val("");
		$("#depdate3").val("");
		/**다구간 초기화 끝**/
	},
	
	//항공(국제선, 국내선) 검색하기 버튼 클릭 시
	airSubmit : function(){
		AIR_DOMAIN = $('#domainForm input[name=AIR_DOMAIN]').val();
			
		var depdate = $('#depdate0').val().replace(/\//g, '');
		var retdate = $('#retdate').val().replace(/\//g, '');
		
		if(airTripType == "RT"){
			if($('#arr0').val() == ""){
				alert('도착도시를 선택해 주세요.');
				return;
			}
			if($('#dayInd').val() == "N" && (depdate.search(numberPattern) != -1 || depdate.length != 8)){
				alert('출발날짜를 선택해 주세요.');
				return;
			}
			if($('#dep1').val() == ""){
				alert('출발도시를 선택해 주세요.');
				return;
			}
			if($('#dayInd').val() == "N" && retdate != "OPEN" && (retdate.search(numberPattern) != -1 || retdate.length != 8)){
				alert('귀국날짜를 선택해 주세요.');
				return;
			}
			if($('#dayInd').val() == "N" && retdate != "OPEN" && (Number(depdate) > Number(retdate))){
				alert('귀국일을 출국일 이후로 선택해 주세요.');
				return;
			}
			if( $('#dayInd').val() == "N" && $('#returnUnfix').is(":checked") && $('#val').val() == ""){
				alert('귀국일 미정시 최대 체류기간을 선택해 주세요.');
				return;
			}
			if($('#arr0').val() == "SEL" || $('#arr0').val() == "ICN" || $('#arr0').val() == "GMP" || 
			   $('#arr0').val() == "PUS" || $('#arr0').val() == "TAE" || $('#arr0').val() == "CJU" || 
			   $('#arr0').val() == "KWJ" || $('#arr0').val() == "USN" || $('#arr0').val() == "KPO" || 
			   $('#arr0').val() == "MPK" || $('#arr0').val() == "HIN" || $('#arr0').val() == "RSU" || 
			   $('#arr0').val() == "YEC" || $('#arr0').val() == "SHO" || $('#arr0').val() == "KUV" || 
			   $('#arr0').val() == "WJU" || $('#arr0').val() == "KAG" || $('#arr0').val() == "CJJ"){
					alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요.');
					return;
			}
			if($('#arr1').val() == ""){
				$('#arr1').val($('#dep0').val());
			}
			$('#depdate0').val(depdate);
			$('#retdate').val(retdate);
			
			//$('#comp_nm').val("일반석");
			//$('#val_nm').val($('#val option:selected').text());
			//$('#day_nm').val($('#day option:selected').text());
			//$('#plusDate_nm').val($('#plusDate option:selected').text());
			//$('#air_int_RT').attr('target', '_top');
						
		}else if(airTripType == "OW"){
			var depdate = $('#depdate0').val().replace(/\//g, '');
			
			if($('#arr0').val() == ""){
				alert('도착도시를 선택해 주세요.');
				return;
			}
			if(depdate.search(numberPattern) != -1 || depdate.length != 8){
				alert('출발날짜를 선택해 주세요.');
				return;
			}
			if($('#arr0').val() == "SEL" || $('#arr0').val() == "ICN" || $('#arr0').val() == "GMP" || 
			   $('#arr0').val() == "PUS" || $('#arr0').val() == "TAE" || $('#arr0').val() == "CJU" || 
			   $('#arr0').val() == "KWJ" || $('#arr0').val() == "USN" || $('#arr0').val() == "KPO" || 
			   $('#arr0').val() == "MPK" || $('#arr0').val() == "HIN" || $('#arr0').val() == "RSU" || 
			   $('#arr0').val() == "YEC" || $('#arr0').val() == "SHO" || $('#arr0').val() == "KUV" || 
			   $('#arr0').val() == "WJU" || $('#arr0').val() == "KAG" || $('#arr0').val() == "CJJ"){
					alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요.');
					return;
			}
			
			$('#depdate0').val(depdate);
			
			//$('#dep0_text').val($('#dep0 option:selected').text());
			
			//$('#comp_nm').val("일반석");
			
		}else if(airTripType == "MD"){
			var depdate0 = $('#depdate0').val().replace(/\//g, '');
			var depdate1 = $('#depdate1').val().replace(/\//g, '');
			var depdate2 = $('#depdate2').val().replace(/\//g, '');
			var depdate3 = $('#depdate3').val().replace(/\//g, '');
			
			if($('#arr0').val() == "SEL" || $('#arr0').val() == "ICN" || $('#arr0').val() == "GMP" || 
			   $('#arr0').val() == "PUS" || $('#arr0').val() == "TAE" || $('#arr0').val() == "CJU" || 
			   $('#arr0').val() == "KWJ" || $('#arr0').val() == "USN" || $('#arr0').val() == "KPO" || 
			   $('#arr0').val() == "MPK" || $('#arr0').val() == "HIN" || $('#arr0').val() == "RSU" || 
			   $('#arr0').val() == "YEC" || $('#arr0').val() == "SHO" || $('#arr0').val() == "KUV" || 
			   $('#arr0').val() == "WJU" || $('#arr0').val() == "KAG" || $('#arr0').val() == "CJJ"){
					alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요.');
					return;
			}
			
			if($('#arr0').val() == ""){
				alert('첫번째 구간의 도착도시를 선택해 주세요.');
				return;
			}
			if(depdate0.search(numberPattern) != -1 || depdate0.length != 8){
				alert('첫번째 구간의 출발날짜를 선택해 주세요.');
				return;
			}
			
			if(airItinCnt_MD == 2){
				if($('#dep1').val() == ""){
					alert('두번째 구간의 출발도시를 선택해 주세요.');
					return;
				}
				if($('#arr1').val() == ""){
					alert('두번째 구간의 도착도시를 선택해 주세요.');
					return;
				}
				if(depdate1.search(numberPattern) != -1 || depdate1.length != 8){
					alert('두번째 구간의 귀국날짜를 선택해 주세요.');
					return;
				}
				if(Number(depdate0) > Number(depdate1)){
					alert('두번째 구간의 귀국일을 첫번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				$("#depdate0").val(depdate0);
				$("#depdate1").val(depdate1);
				
				$("#dep2").val("");
				$("#dep2_text").val("");
				$("#arr2").val("");
				$("#arr2_text").val("");
				$("#depdate2").val("");
				
				$("#dep3").val("");
				$("#dep3_text").val("");
				$("#arr3").val("");
				$("#arr3_text").val("");
				$("#depdate3").val("");
				
			}else if(airItinCnt_MD == 3){
				
				if($('#dep1').val() == ""){
					alert('두번째 구간의 출발도시를 선택해 주세요.');
					return;
				}
				if($('#arr1').val() == ""){
					alert('두번째 구간의 도착도시를 선택해 주세요.');
					return;
				}
				if(depdate1.search(numberPattern) != -1 || depdate1.length != 8){
					alert('두번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number(depdate0) > Number(depdate1)){
					alert('두번째 구간의 출발일을 첫번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				if($('#dep2').val() == ""){
					alert('세번째 구간의 출발도시를 선택해 주세요.');
					return;
				}
				if($('#arr2').val() == ""){
					alert('세번째 구간의 도착도시를 선택해 주세요.');
					return;
				}
				if(depdate2.search(numberPattern) != -1 || depdate2.length != 8){
					alert('세번째 구간의 귀국날짜를 선택해 주세요.');
					return;
				}
				if(Number(depdate1) > Number(depdate2)){
					alert('세번째 구간의 귀국일을 두번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				$("#depdate0").val(depdate0);
				$("#depdate1").val(depdate1);
				$("#depdate2").val(depdate2);
				
				$("#dep3").val("");
				$("#dep3_text").val("");
				$("#arr3").val("");
				$("#arr3_text").val("");
				$("#depdate3").val("");
				
			}else if(airItinCnt_MD == 4){
				
				if($('#dep1').val() == ""){
					alert('두번째 구간의 출발도시를 선택해 주세요.');
					return;
				}
				if($('#arr1').val() == ""){
					alert('두번째 구간의 도착도시를 선택해 주세요.');
					return;
				}
				if(depdate1.search(numberPattern) != -1 || depdate1.length != 8){
					alert('두번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number(depdate0) > Number(depdate1)){
					alert('두번째 구간의 출발일을 첫번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				if($('#dep2').val() == ""){
					alert('세번째 구간의 출발도시를 선택해 주세요.');
					return;
				}
				if($('#arr2').val() == ""){
					alert('세번째 구간의 도착도시를 선택해 주세요.');
					return;
				}
				if(depdate2.search(numberPattern) != -1 || depdate2.length != 8){
					alert('세번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number(depdate1) > Number(depdate2)){
					alert('세번째 구간의 출발일을 두번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				if($('#dep3').val() == ""){
					alert('네번째 구간의 출발도시를 선택해 주세요.');
					return;
				}
				if($('#arr3').val() == ""){
					alert('네번째 구간의 도착도시를 선택해 주세요.');
					return;
				}
				if(depdate3.search(numberPattern) != -1 || depdate3.length != 8){
					alert('네번째 구간의 귀국날짜를 선택해 주세요.');
					return;
				}
				if(Number(depdate2) > Number(depdate3)){
					alert('네번째 구간의 귀국일을 세번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				$("#depdate0").val(depdate0);
				$("#depdate1").val(depdate1);
				$("#depdate2").val(depdate2);
				$("#depdate3").val(depdate3);
				
			}
		}
		var adtCnt = 0;
		var chdCnt = 0;
		var infCnt = 0;
		if(airTripType != "MD"){
			adtCnt = $("#adult_count").val();
			chdCnt = $("#child_count").val();
			infCnt = $("#baby_count").val();
		}else{
			adtCnt = $("#adult_count2").val();
			chdCnt = $("#child_count2").val();
			infCnt = $("#baby_count2").val();
		}
		if(adtCnt < infCnt){
			alert("유아 탑승객수보다 성인 탑승객수가 커야 합니다.");
			return;
		}
		if(adtCnt < 1){
			alert("성인은 최소 1명 이상 탑승해야 합니다.");
			return;
		}
		var userRT = Number(adtCnt) + Number(chdCnt) + Number(infCnt);
		if(userRT > 9){
			alert("예약인원은 9명을 넘어갈 수 없습니다.");
			return;
		}
		$("#adt").val(adtCnt);
		$("#chd").val(chdCnt);
		$("#inf").val(infCnt);
		
		$('#airSearchForm').attr('action', '/booking/findSkdFare.lts').submit();
		/*$.mobile.changePage('/booking/findSkdFare.lts', {
		             type: "post",
		             changeHash: true,
		             reloadPage :false,
		             data: $("#airSearchForm").serialize()
		             alert("2");
		});*/

	}
};

