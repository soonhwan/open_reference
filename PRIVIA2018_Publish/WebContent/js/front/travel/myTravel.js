/*******************************************************************************
 * @param in_s
 * @param in_e
 * @param limit
 *                yang hyun min 2013-01-24
 ******************************************************************************/

// 2013 - 05 -02 수정
var openclosestate = "open";// mytravel의 활성화 여부
var slidingW = 194;// 슬라이딩 넓이
var position_slide = 0;// 슬라이딩 목표값
var itemNum = 0;//초기 전체 아이템 숫자
var able = "1";
var spotcity;


var myTravelDomain = configTravelDomain;
var httpDomain = configHttpUrl;
var httpsDomain = configHttpsUrl;

var loaded_num = 5;
var msgObj;
var posit = 0;
var del_count = 0;//삭제된 아이템 숫자
var tit = new Array();
var kindStats ="";
var dy_msg;//삭제시 hotspot관련 정보
//config.js에서 가져온다
//항공 예약 및 결제 하기 url
var airReserveUrl = congfigAirReserveUrl;
//호텔 예약 및 결제 하기 url 
var hotelReserveUrl = congfigHotelReserveUrl;
//에어텔 예약 및 결제 하기 url
var airTelReserveUrl = congfigAirTelReserveUrl;
//항공 상세내역 url-국제선
var airDtlViewUrl = congfigAirDtlViewUrl;
//호텔 상세내역 url-해외호텔
var hotelDtlViewUrl = congfigHotelDtlViewUrl;
//에어텔 상세내역 url
var airTelDtlViewUrl = congfigAirTelDtlViewUrl;
//재 검색 파라미터 
var researchParam = "";
//재 검색 seq
var researchSeq = "";

//예약/결제 2중클릭 방지를 위한 플래그
var devIsPossibleOfEvacasCheck 	= true;
//호텔객실타입에 대한 한글명
var devMapHsfBedTypeNm 			= { "SG" : "1인실", "DB" : "2인실", "TR" : "3인실" };
//호텔객실타입에 대한 한글명 카운트 이후 표시 문자열
var devVarHsfBedTypeNmSuffix 	= "개";

function openMyTravel() {
    if (openclosestate == "open") {
    	openclosestate = "close";
	$('#myTravel').animate({bottom : '-127'}, 300, function() {});
    } else {
    	openclosestate = "open";
    	$('#myTravel').animate({bottom : '0'}, 300, function() {});
    }
}

//애바카스 비회원 쿠키 제거하기 위함
function searchSetCookie(name, value, expires, path, domain, secure){
    document.cookie = name + "="
       + escape(value)
       + ((expires) ? "; expires=" + expires.toGMTString() : "")
       + ((path) ? "; path=" + path : "")
       + ((domain) ? "; domain=" + domain : "")
       + ((secure) ? "; secure" : "");
}

$(document).ready( function() {
	
    $("#content>div.loginr_wrap").find("input.text").keydown (function (e) {
    	if ( e.keyCode === 13 ) {
	    	//비회원 예약내역 조회 폼 / 회원 로그인 폼 validation 체크 
    		if ( ( typeof( $("input[name='devNomemberYn']") ) == "object" ) 
    				&& ( $("input[name='devNomemberYn']").val() == "Y" ) ) {
    			//비회원 예약내역 조회 폼 validation 체크
	            $("#btnLoginOrder").trigger("click");
    		} else {
    			//회원 로그인 폼 validation 체크
    			$("#btnLogin").trigger("click");
    			//$('#frmLogin').submit ();
    		}
	    }
    });
    
    $("#divLogin div.content div.login_wrap").find("input.text").keydown (function (e) {
    	if ( e.keyCode === 13 ) {
	            $("#btnLogin").trigger("click");
	            //$('#frmLogin').submit ();
	    }
    });
    
	//가이드북 막기
	$(function() {
		$( "#rservHopeDdTravel" ).datepicker();
	});
	
	//예약결제관리
	$('.my_travel .my_list .btn li a.reserv').click(function() {
		if(!$(this).hasClass('on')){
			return false;
		}
		$("#frmPost").attr({
			method: "post", 
			action: httpDomain+"/mypage/mytravel/list/"
		}).submit();
		return false;
	});
	
	//가이드북 만들기
	$('.my_travel .my_list .btn li a.make').click(function() {
		if(!$(this).hasClass('on')){
			return false;
		}
		$("#frmPost").attr({
			method: "post", 
			action: httpDomain+"/guide/guideBook/"
		}).submit();
		return false;
	});
	
	//이용 매뉴얼 이동하기
	$('.guideinfo_btn').click(function(){
		location.href=httpDomain+'/etc/myTravelTab';
	});
	
	//안내 화면 보여주기
	$('.bnt_help').click(function() {
		dimmLayerPop('InfoLayerPop',1,$(this));
	});
	
	
	/* 재검색 버튼 */
	//2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
	$("#airRsAction").click(function () {
		var seq = researchSeq;
		var $elem = $(this);
		$.getJSON (httpsDomain + "/mypage/mytravel/myTravelDelete.json?callback=?",{"seqs": seq}).done (function (msg) {
			//삭제 추가
			de_item_ex(seq);
			dimmLayerPop("airReSearch",0);
			if(intnlForgnDivn == "EX"){
				location.href = configAirSearchUrl+researchParam;
			}else{
				location.href = configAirDomSearchUrl+researchParam;
			}
			return false;
			
		});	
		$elem.focus();
		return false;			
	});
	
	/* 재검색 버튼 */
	//2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
	$("#hotelRsAction").click(function () {
		var seq = researchSeq;
		var $elem = $(this);
		$.getJSON (httpsDomain + "/mypage/mytravel/myTravelDelete.json?callback=?", {"seqs": seq} ).done (function (msg) {
			//삭제 추가
			de_item_ex(seq);
			dimmLayerPop("hotelReSearch",0);
			//재검색을 위해 페이지 이동, 검색용 파라미터 전달
			//조건식 처리후 해외호텔[INT]/국내숙박[DOM]
			if(intnlForgnDivn == "INT"){
				location.href = configHotelSearchUrl	+ researchParam;
			}else{
				location.href = configHotelDomSearchUrl	+ researchParam;
			}			
			return false;
			
		});	
		$elem.focus();
		return false;			
	});	
	/* 재검색 팝업 닫기 버튼 */
	$("#airRsCancel").click(function () {
		dimmLayerPop("airReSearch",0);
		return false;
	});
	/* 재검색 팝업 닫기 버튼 */
	$("#hotelRsCancel").click(function () {
		dimmLayerPop("hotelReSearch",0);
		return false;
	});
	
	/* 예약및 결제 버튼 클릭, 레이어(www.~, air.~, hotel.~ 등) 및 페이지(~/mypage/mytravel/list)에서 공통 사용중. 3323/6202/7012.2015.01.21 */
	evacasCheck = function( kind, state, searchCd, spotSeq, spcExpCitySeq, gubunCd, seq ){
		//예약/결제 2중클릭 방지를 위한 플래그가 true 이면서 레이어가(항공/호텔)가 off인경우만 수행
		if ( devIsPossibleOfEvacasCheck && devFnCheckDimmLayerPopOff ()) {
			devIsPossibleOfEvacasCheck = false;
			
			searchSetCookie("noMemberOrder", "", 0, "/", ".priviatravel.com", false);
	
			if( kind == "FB" ){
				$("#inpSpotSeq").val(spotSeq);
				location.href = searchCd;
				//goSpotView(spcExpCitySeq,spotSeq,gubunCd);
			} else {
				var cnt =0;
				var checkParam = "";
				var searchParam = "";
				var reserveUrl = "";
				var returnUrl = "";
				var dtlViewUrl = "";	//상세보기URL
				var checkCancelDeadlineUrl = "";	//호텔 - 취소마감일 체크 URL
				var divn = "";
				cnt = searchCd.indexOf('?');
				if (cnt > 0) {
					checkParam = searchCd.substr(cnt+1);
				} else {
					checkParam = searchCd;
				}
				
				//searchParam = searchCd.substr(cnt);
				//2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
				searchParam = searchCd;
				if( kind == "air" ){
					divn = "AIR";
					reserveUrl = airReserveUrl;
					returnUrl = httpsDomain + "/mypage/mytravel/reSearchView.json?callback=?";
				} else if( kind == "hotel" ) {
					divn = "HOTEL";
					reserveUrl = hotelReserveUrl;
					returnUrl = httpsDomain + "/mypage/mytravel/reSearchHotellView.json?callback=?";
				}else if( kind == "airTel" ) {
					divn = "AIRTEL";
					reserveUrl = airTelReserveUrl;
				}
				
				var confromMsg = ""; 
				if ( state == "rev_bofore" ) {
					confromMsg = "해당 상품을 예약하시겠습니까?";
				//} else if ( state == "pay_before" ) {	//TODO : [호텔] 결제전(결제후 취소상태)인경우 참조하는 필수 필드값 때문에 상세페이지로 이동시킴. hotel.priviatravel.com 에서 보완처리하면 원복예정임. 7102.2015.01.29 by kjy. 3-1
				} else if ( kind != "hotel" && state == "pay_before" ) {	//TODO : hotel.priviatravel.com 에서 보완처리하면 삭제하고 위 주석 해제 할 것. 7102.2015.01.29 by kjy. 3-2
					confromMsg = "해당 상품을 결제하시겠습니까?";
				} else {
					//결제 완료이면 상세페이지로 이동				//TODO : 임시적으로 호텔의 경우 결제전인 상태도 상세페이지로 이동시킴. 하위로직은 수정된것 없음. hotel.priviatravel.com 에서 보완처리하면 본 주석은 삭제할 것. 7102.2015.01.29 by kjy. 3-3
					if( kind == "air" ) {
						dtlViewUrl = airDtlViewUrl;
					} else if ( kind == "hotel" ) {
						dtlViewUrl = hotelDtlViewUrl;
					} else if ( kind == "airTel" ) {
						dtlViewUrl = airTelDtlViewUrl;
					}
	
					location.href = dtlViewUrl + "?" + checkParam;
					devIsPossibleOfEvacasCheck = true;
					return false;
				}
				
				//2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
				$.getJSON (httpsDomain + "/mypage/mytravel/isValidReservation.json?callback=?",{"param" : checkParam, "kind" : kind, "divn" : divn, "seq" : seq}).done (function (msg) {
					
					//if(msg.result =="N"){//테스트용
					if(msg.result =="Y"){
						
						//2015-01-06 결제전이면서 호텔이라면 "취소마감일 체크 기능 추가".6202
						//호텔이 아닌경우는 바로 $("#frmLinkToSubmit").submit(); 처리함
						if( kind == "hotel" ){
							
							//"My Travel" 페이지[해외/국내] 및 레이어 동일로직
							//호텔 상품이 존재하는 경우 취소마감일 체크하여 취소가감일이 지난경우(result =="Y") 취소마감 확인 메세지로 대체. 2015/01/07. #6202
							//크로스 도메인 처리 오류로 내부서버에서 크로스 도메인 호출 하는것으로 수정함. 2015/01/07. #6202
							var resultCheckVal 	= "-1";
							var addCheckParam 	= "&mytravel_yn=Y&" + checkParam;
							
							$.getJSON ( httpsDomain + "/mypage/mytravel/htl/bk/checkCancelDeadline.json?callback=?" + "&seq=" + seq).done (function ( jsonData ) {
								//$.getJSON ( configHotelSearchUrl + "?callback=?" + addCheckParam ).done (function ( jsonData ) {
								//$.post("/mypage/mytravel/htl/bk/checkCancelDeadline.json?", addCheckParam, function ( jsonData ) {
								if ( jsonData != null ) {
									//console.log( "		정상처리됨. jsonData.result : [" + jsonData.result + "]" );
									resultCheckVal = jsonData.result;
								} else {
									resultCheckVal = "E";
								}
								
								//alert( "	done	정상처리됨. jsonData.result : [" + jsonData.result + "]" );
								
								//취소마감일이 지난경우에는 메세지를 교체함. 취소마감일 확인에 실패한경우는 메세지 처리후 즉시 리턴함. 
								if ( resultCheckVal == "Y" ) {
									var cancelDeadlineMsg = "해당 예약은 취소마감일이 지난 예약으로 예약 확정 후에는 취소나 변경이 불가능하고, 취소시 금액 전체가 취소료로 발생하여 환불이 불가합니다. 호텔 및 일정, 이름 변경 등 어떠한 변경도 불가합니다.\n동의하시고 예약 진행 하시겠습니까?";
									
									confromMsg = cancelDeadlineMsg;
									
								} else if ( resultCheckVal == "E" || resultCheckVal == "-1" ) {
									alert("상품정보 호출에 실패하였습니다.[done]");
									devIsPossibleOfEvacasCheck = true;
									return false;
								}

								//예약/결제 submit 동일로직 2-1 (ajax 처리 때문에 중복 작성됨)
								//상품이 존재하는 경우 예약/결제페이지로 이동시킴. 단 호텔의 경우는 취소마감여부를 확인하여 메세지가 교체될 수 있음. 2015/01/12. #6202
								if (confirm (confromMsg)){
									//ajax에서 properties에서 값을 가져오도록 수정
									$("#inpLinkToSubmitReturnUrl").val(msg.resultURL + "?" + "seq=" + seq + "&linkSeq=" + seq);
									$("#frmLinkToSubmit").submit();
								}
								
								//alert( "	confromMsg  submit(). resultCheckVal : [" + resultCheckVal + "]" );
								
								devIsPossibleOfEvacasCheck = true;
								return false;
								
							}).fail( function (xhr, status, error) {//취소마감일 확인에 실패한경우는 메세지 처리후 즉시 리턴함.
								resultCheckVal = "E";
								//console.log ( "error. xhr : [" + xhr + "], status : [" + status + "], error : [" + error + "]" );
								alert("상품정보 호출에 실패하였습니다.[fail]");
								devIsPossibleOfEvacasCheck = true;
								return false;
								
							});

						} else {
							
							//예약/결제 submit 동일로직 2-2 (ajax 처리 때문에 중복 작성됨)
							//상품이 존재하는 경우 예약/결제페이지로 이동시킴. 단 호텔의 경우는 취소마감여부를 확인하여 메세지가 교체될 수 있음. 2015/01/12. #6202
							if (confirm (confromMsg)){
								//ajax에서 properties에서 값을 가져오도록 수정
								$("#inpLinkToSubmitReturnUrl").val(msg.resultURL+"?"+checkParam+"&linkSeq="+seq);
								$("#frmLinkToSubmit").submit();
							}
							
							devIsPossibleOfEvacasCheck = true;
							return false;
						}
						
					} else {
						if(kind=="airTel"){
							
							//2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
							if (confirm ("해당 상품이 존재 하지 않습니다 삭제하시겠습니까?")){
								$.getJSON (httpsDomain + "/mypage/mytravel/myTravelDelete.json?callback=?",{"seqs": seq}).done (function (msg) {
									alert("해당 상품이 삭제 되었습니다.");
									//삭제 추가
							    	de_item_ex(seq);
								});	
								devIsPossibleOfEvacasCheck = true;
								return false;
							}
						}
						$.getJSON (returnUrl, {"seq": seq} ).done (function (data) {
							if(data.length == 0) {
								alert("상세데이터가 존재하지 않습니다.");
								
							} else {
								researchSeq = seq;
								researchParam = "";
								
								 if(kind=="air"){
									intnlForgnDivn = data.result[0].intnlForgnDivn;
									researchParam = "?trip="+data.result[0].trip+"&dep0="+data.result[0].firDptAirPortCd+"&arr0="+data.result[0].firArvAirPortCd;
									researchParam+="&depdate0="+data.result[0].firDptAirPortDate+"&comp="+data.result[0].seatGradeCd+"&adt="+data.result[0].adultCnt;
									$("#rsSearchAir").text("["+data.result[0].gubunNm+"] "+data.result[0].smryInfo);
									$("#rsSearchAirDay").text(data.result[0].dptDate+" ~ "+data.result[0].arvDate);
									$("#rsSearchSeatGrade").text(data.result[0].seatGrade);
									$("#rsSearchAirPerson").text("성인 "+data.result[0].adultCnt+"명, 아동 "+data.result[0].childCnt+"명, 유아 "+data.result[0].childCnt+"명"); //
									
									dimmLayerPop("airReSearch");
									
								 }else if(kind=="hotel"){
									intnlForgnDivn = data.result[0].intnlForgnDivn;	//해외/국내 구분
									
									var devMapOfParam	= null;
									
									devMapOfParam = devFnParameterSplit( checkParam );
									//재검색을 위한 실시간 검색 셋팅
									//[호텔]재검색용 파라미터 셋팅. 변경된 파라미터 반영. 3323.2015.01.12 
									researchParam =    "?" 
										 			+  "location="		+ devMapOfParam.value[ "location" 		]
										 			+ "&city_code="		+ devMapOfParam.value[ "htl_ct_code" 	]
										 			+ "&city_name="		+ devMapOfParam.value[ "htl_ct_lcl" 	]
										 			+ "&htl_name="		+ devMapOfParam.value[ "hssp_htl_name" 	]
										 			+ "&hsf_bed_type="	+ devMapOfParam.value[ "hsf_bed_type" 	]
										 			+ "&room_cnt="		+ devMapOfParam.value[ "room_cnt" 		]
										 		//  + "&checkin_date="	+ devMapOfParam.value[ "htl_check_in" 	]			//&htl_check_in=2015-02-26120000
										 		//	+ "&checkin_date="	+ data.result[0].paRamDptDate.replace(/-/gi, "/") 	//&checkin_date=2015/02/26
										 			+ "&checkin_date="	+ data.result[0].paRamDptDate					 	//&checkin_date=2015/02/26
										 		//	+ "&checkout_date="	+ devMapOfParam.value[ "htl_check_out" 	]			//&htl_check_out=2015-02-27120000
										 		//	+ "&checkout_date="	+ data.result[0].paRamArvDate.replace(/-/gi, "/")	//&checkout_date=2015/02/27
										 			+ "&checkout_date="	+ data.result[0].paRamArvDate						//&checkout_date=2015/02/27
										 			+ "&stay_adult="	+ devMapOfParam.value[ "stay_adult" 	]
										 			+ "&stayAdult1_1="	+ devMapOfParam.value[ "adult1" 		]
													+ "&week="			+ devFnGetInputDayLabel( data.result[0].paRamDptDate )
										 			+ "&stayDay="		+ devFnBetweenDay( data.result[0].paRamDptDate, data.result[0].paRamArvDate, "/" );
									//최근 검색에서 값이 없는경우(==0) 노출되지 않도록 조건처리 추가함.
									if ( $.trim( devMapOfParam.value[ "adult2" ] )!= '' && devMapOfParam.value[ "adult2" ] > 0 ) {
									  researchParam +="&stayAdult1_2="	+ devMapOfParam.value[ "adult2" 		]
									}
						
									if ( $.trim( devMapOfParam.value[ "adult3" ] )!= '' && devMapOfParam.value[ "adult3" ] > 0 ) {
									  researchParam +="&stayAdult1_3="	+ devMapOfParam.value[ "adult3" 		]
									}
									
									$("#seq").val(data.result[0].seq);
									$("#rsSearchHotelCityNm").text(data.result[0].cityNm);
									$("#rsSearchHotelDay").text(data.result[0].dptDate+" ~ "+data.result[0].arvDate);
									//[호텔]호텔객실타입에 대한 한글명 카운트 문자열로 변환하여 가져오기. 3323.2015.01.20
									$("#rsSearchHotelRoomCnt").text( devFnGetHotelRoomCntSring ( devMapOfParam.value[ "hsf_bed_type" ] ) );
									$("#rsSearchHotelName").text(data.result[0].hotelNm);
									
									dimmLayerPop("hotelReSearch");
								 }
								 
								 devIsPossibleOfEvacasCheck = true;
								 return false;
							}
						});	
						
						devIsPossibleOfEvacasCheck = true;
						return false;	
					}
				}).fail(function() { 
					alert("오류가 발생하였습니다.");
					devIsPossibleOfEvacasCheck = true;
					return false;
				});
	
			}// end : if(kind =="FB"){} else {
			
			devIsPossibleOfEvacasCheck = true;
			return false;
		}// end : if ( devIsPossibleOfEvacasCheck && devFnCheckDimmLayerPopOff ()) {
	};
	
	initHotspot();
	//reload("open");
	$('.my_travel .hot_spot').hide();
    // 열기 닫기
    $('#myTravel .btn_open').css('cursor', 'pointer');
    $('#myTravel .btn_open').click(function() {
    	openMyTravel();
    });
    // 이전 버튼
    $('#myTravel .my_list .prev').css('cursor', 'pointer');
    $('#myTravel .my_list .prev').click(function() {
		if ((Math.abs(position_slide / 202)) == 0) {
		    return;
		} else {
		    $('.my_list .next').show();
		    if (posit == 1) {
		    	$('.my_list .prev').hide();
		    }
		}
		posit--;
		position_slide = position_slide + slidingW;
		$('#myTravel .pro_list_target').stop();
		$('#myTravel .pro_list_target').animate({'margin-left' : position_slide}, 400, function() {});
		checkState();
	});
    // 다음 버튼
    $('#myTravel .my_list .next').css('cursor', 'pointer');
    $('#myTravel .my_list .next').click(function() {
		if ((posit + 4) < (itemNum - del_count)) {
		    posit++;
		    position_slide = position_slide - slidingW;
		    $('#myTravel .pro_list_target').stop();
		    $('#myTravel .pro_list_target').animate({'margin-left' : position_slide}, 400, function() {});
		    $('.my_list .next').show();
		    $('.my_list .prev').show();
		    if ((posit + 5) > (itemNum - del_count)) {
		    	$('.my_list .next').hide();
		    }
		} else {
		}
		if (loaded_num <= itemNum) {
		    cutItem(loaded_num);
		    loaded_num++;
		}
		checkState();
    });
	// 객체 삭제하기
	$('#myTravel .del_item').live('click', function() {
		
		var seq = $(this).val();
		
		if (able == "0") {return;}
		able = "0";
		/*
		if (confirm("My Travel에서 삭제하시겠습니까?")) {
		*/
			//2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
		    $.getJSON(httpsDomain + "/mypage/mytravel/myTravelDelete.json?callback=?", { "seqs" : seq}).done(function(msg) {
		    	tit = [];
		    	if ( msg.spCdList.length > 0 ) {
		    	    for ( var j = 0; j < msg.spCdList.length; j++) {
		    	    	tit[j] = msg.spCdList[j].cityNm;
		    	    }
		    	}
		    	showHotspot();
			});
		    $(this).parent().animate({opacity : '0'},200,function() {
				$(this).animate({width : '0',padding : '0',margin : '0'},300,function() {
					$(this).remove();
					able = "1";
					$('span.won > strong').text(myAddComma(rtnnumber($('#myTravel span.won > strong').text())- rtnnumber($(this).find('.price').text())));
					checkState();
					if ($('#myTravel .total .items > strong').text() == "0") {
						$('.my_travel .my_list .btn li a.reserv').removeClass('on');
						$('.my_travel .my_list .btn li a.make').removeClass('on');
						/*
						$('#managementBtn_on').hide();
						$('#managementBtn_off').show();
						$('#makeBook_on').hide();
						$('#makeBook_off').show();
						*/
					}
				});
			});
		    $('#myTravel .items').html('<strong>' + (eval($('#myTravel .items').text()) - 1)+ '</strong>');
		    if (loaded_num < itemNum) {
		    	cutItem(loaded_num);
		    	loaded_num++;
		    }
		    del_count++;
		    /*
		} else {
		    able = "1";
		}
		*/
		$('#myTravel .empty').show();
		checkState();
		return false;
	});
});

/**
 * 호텔객실타입에 대한 한글명 카운트 문자열로 변환하여 가져오기
 * @param hsf_bed_type	호텔객실타입문자열 SG:1;DB:1;TR:1;
 * @returns {String} 응답 예) 2인실2개, 3인실1개
 */
function devFnGetHotelRoomCntSring ( hsf_bed_type ) {
	var rsSearchHotelRoomCntSring = "";
	
	if ( $.trim( hsf_bed_type )!= '' ) {
		//var devArrayHsfBedTypes = hsf_bed_type.split(';'); //search_cd의 hsf_bed_type에서 객실 타입별을 ";" 으로 구분함 
		var devArrayHsfBedTypes = hsf_bed_type.split('%3B'); //search_cd의 hsf_bed_type에서 객실 타입별을 ";" 으로 구분함	//URL encofing 하는 것으로 변경됨. 7102.2015.01.29 '%3B'을 기준으로 분리하기(참조 : url encoding 표) 

		for (var iBadType = 0; iBadType < (devArrayHsfBedTypes.length - 1); iBadType++) {
			//var devArrayHsfBedType = devArrayHsfBedTypes[iBadType].split(':');	//search_cd의 hsf_bed_type에서 객실수를 ":" 으로 구분함
			var devArrayHsfBedType = devArrayHsfBedTypes[iBadType].split('%3A');	//search_cd의 hsf_bed_type에서 객실수를 ":" 으로 구분함	//URL encofing 하는 것으로 변경됨. 7102.2015.01.29 '%3A'을 기준으로 분리하기(참조 : url encoding 표)
			
			rsSearchHotelRoomCntSring = rsSearchHotelRoomCntSring
										+ eval("devMapHsfBedTypeNm." + devArrayHsfBedType[0])	//호텔객실타입에 대한 한글명 = { "SG" : "1인실", "DB" : "2인실", "TR" : "3인실" };
										+ devArrayHsfBedType[1]									//호텔객실 카운트
										+ devVarHsfBedTypeNmSuffix								//호텔객실타입에 대한 한글명 카운트 이후 표시 문자열 = "개"
										+ ", ";
		} 
		
		if( rsSearchHotelRoomCntSring.length > 0 ) {
			rsSearchHotelRoomCntSring = rsSearchHotelRoomCntSring.substring(0, rsSearchHotelRoomCntSring.length - 2);
		}
	}	
	
	return rsSearchHotelRoomCntSring;
}

//예약/결제 2중클릭 방지를 위해 레이어가(항공/호텔)가 off인경우
function devFnCheckDimmLayerPopOff (){
	var devCheckResult = true;

	if ( $("#airReSearch").css("display") == "block"
			|| $("#hotelReSearch").css("display") == "block" ){
		devCheckResult = false;
	}
	
	return devCheckResult;
}

//별도 리스트 삭제
function de_item_ex( seq ) {
	var loof = $('#myTravel .del_item').length;
	for (var i = 0; i < loof; i++ ) {
		if ($('#myTravel .del_item').eq(i).val() == seq ) {
			$('#myTravel .del_item').eq(i).parent().animate({opacity : '0'},200,function() {
				$(this).animate({width : '0',padding : '0',margin : '0'},300,function() {
					$(this).remove();
					able = "1";
					$('span.won > strong').text(myAddComma(rtnnumber($('#myTravel span.won > strong').text())- $(this).find('#myTravel .price').text()));
					checkState();
					if ($('#myTravel .total .items > strong').text() == "0") {
						/*
						$('#managementBtn_on').hide();
						$('#managementBtn_off').show();
						$('#makeBook_on').hide();
						$('#makeBook_off').show();
						*/
						$('.my_travel .my_list .btn li a.reserv').removeClass('on');
						$('.my_travel .my_list .btn li a.make').removeClass('on');
					}
				});
			});
			break;
		}
	}
	$('#myTravel .items').html('<strong>' + (eval($('#myTravel .items').text()) - 1)+ '</strong>');
    if (loaded_num < itemNum) {
    	cutItem(loaded_num);
    	loaded_num++;
    }
    del_count++;
    checkState();
}

// 아이템 추가하는 함수
function creat_item(kind, date, tit, price, state, isState, searchCd, seq, rTotal, spotSeq, spcExpCitySeq, gubunCd) {
    var rAdd;
    if (rTotal == undefined) {
    	rAdd = "rAdd";
    } else {
    	rAdd = "initAdd";
    }
    var write_tit = getStringByte(tit);// 2013 - 05 -02 추가
    // 접근성 단어
    var accessibility_word;
    var appendTo;
    var unitClass = "unit";
    var priceClass = "show";
    var styleState;
	var dateTitle ="";
    if (kind == 'air') {
		accessibility_word = "항공";
		appendTo = $('#myTravel .cate_air');
    }
    if (kind == 'hotel') {
		accessibility_word = "호텔";
		appendTo = $('#myTravel .cate_hotel');
    }
    if (kind == 'airTel') {
		accessibility_word = "에어텔";
		appendTo = $('#myTravel .cate_airtel');
    }
    if (kind == 'picks') {
		unitClass = "blind";
		priceClass = "blind";
		accessibility_word = "현대 pick";
		appendTo = $('#myTravel .cate_pick');
    }
    if (kind == 'FB') {
		unitClass = "blind";
		priceClass = "blind";
		accessibility_word = "F&#38;B";
		appendTo = $('#myTravel .cate_pick');
    }
    if (kind == 'Stay') {
		unitClass = "blind";
		priceClass = "blind";
		accessibility_word = "Stay";
		appendTo = $('#myTravel .cate_pick');
		//날짜 데이터 있을 경우만 타이틀 넣어준다
		if(date.indexOf("/") != -1){
			dateTitle = date;
		}
    }
    if (kind == 'Culture') {
		unitClass = "blind";
		priceClass = "blind";
		accessibility_word = "Culture";
		appendTo = $('#myTravel .cate_pick');
    }
    if (kind == 'Shopping') {
		unitClass = "blind";
		priceClass = "blind";
		accessibility_word = "Shopping";
		appendTo = $('#myTravel .cate_pick');
    }
    if (kind == 'Airbnb') {
		unitClass = "blind";
		priceClass = "blind";
		accessibility_word = "Stay";
		appendTo = $('#myTravel .cate_pick');
    }
    // 결제 진행 상태
    var state_str;
    var state_class;
    if (state == 'rev_bofore') {
		// 예약전
		state_str = "예약전";
		state_class = "rev_bofore";
    }
    if (state == 'rev_call') {
		// 예약요청
		state_str = "예약요청";
		state_class = "rev_call";
    }
    if (state == 'rev_complete') {
		// 예약완료
		state_str = "예약완료";
		state_class = "rev_complete";
    }
    if (state == 'pay_before') {
		// 결제전
		state_str = "결제전";
		state_class = "pay_before";
    }
    if (state == 'pay_complete') {
		// 결제완료
		state_str = "결제완료";
		state_class = "pay_complete";
    }
    // 2013 - 05 -02 수정
    if (isState == "show") {
    	styleState = "block";
    } else {
    	styleState = "none";
    }
    var priceCom = myAddComma( price );
    //여기
	//console.log(date)
    var item = '<div class="product"><button class="ico del del_item" value="'
	    + seq + '" title="삭제(' + tit + ')"><em class="blind">삭제(' + tit
	    + ')</em></button><span class="transparencyBtn" title="'+ tit +'" style="display:' + styleState + '" onclick="evacasCheck(\''+kind+'\',\''+state_class+'\',\''+searchCd+'\',\''+spotSeq+'\',\''+spcExpCitySeq+'\',\''+gubunCd+'\',\''+seq+'\');"></span><span class="ico ' + kind
	    + '"><em class="blind">' + accessibility_word
	    //+ '</em></span><p class="info"><span class="date">' + getStringByte(date)
	    + '</em></span><p class="info"><span class="date" title="'+ dateTitle +'">' + getStringByte(date)
	    + '</span><strong class="ellipsis" title="'+ tit +'">' + write_tit + '</strong><span class="price '
	    + priceClass + '">' + priceCom + '</span><span class="' + unitClass
	    + '">원</span></p><div class="state" style="display:' + styleState
	    + ';"><a href="#" class="rev ' + state_class + '" onclick="evacasCheck(\''+kind+'\',\''+state_class+'\',\''+searchCd+'\',\''+spotSeq+'\',\''+spcExpCitySeq+'\',\''+gubunCd+'\',\''+seq+'\');"><em class="blind">'
	    + state_str + '</em></a></div></div>';
    
    appendTo.append(item);
    if (rAdd == "rAdd") {
    	itemNum++;
    }
    checkState();
}
// 글자 바이트 리턴
function getStringByte(str) {
    var chk = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_0123456789\~!@#$%^&*()_+| ";
    var length = 0;
    var substrDir = 0;
    for ( var i = 0; i < str.length; i++) {
		if (chk.indexOf(str.charAt(i)) >= 0) {
		    length++;
		    substrDir++;
		} else {
		    length += 2;
		    substrDir++;
		}
		if (length >= 25) {
		    break;
		}
    }
    return str.substr(0, substrDir) + '...';
}
// 이벤트 발생할때마다 호출하는 함수
function checkState() {
    if ( ( itemNum - del_count ) > 1) {
    	$(".my_travel > .my_head > .total > .items_img").attr('src', '/images/front/travel/common/txt_my_items.gif');
    } else {
    	$(".my_travel > .my_head > .total > .items_img").attr('src', '/images/front/travel/common/txt_my_item.gif');
    }
    if (itemNum != 0) {
    	//$('.empty').animate({opacity : '0'}, 200, function() {$('.empty').hide();});
    	/*
		$('#managementBtn_on').show();
		$('#managementBtn_off').hide();
		$('#makeBook_on').show();
		$('#makeBook_off').hide();
		*/
		$('.my_travel .my_list .btn li a.reserv').addClass('on');
		$('.my_travel .my_list .btn li a.make').addClass('on');
    } else {
		//$('.empty').animate({ opacity : '1'}, 200, function() {});
    	/*
		$('#managementBtn_on').hide();
		$('#managementBtn_off').show();
		$('#makeBook_on').hide();
		$('#makeBook_off').show();
		*/
		$('.my_travel .my_list .btn li a.reserv').removeClass('on');
		$('.my_travel .my_list .btn li a.make').removeClass('on');
    }
    if ( itemNum - del_count == 0 ) {
    	$('#myTravel .empty').show();
    } else {
    	$('#myTravel .empty').hide();
    }
}
function rtnnumber(n) {
    n = n.replace(/,/g, "");
    if (isNaN(n)) {
    	return 0;
    } else {
    	return n;
    }
}
function myAddComma(n) {
    if (isNaN(n)) {
    	return 0;
    }
    var reg = /(^[+-]?\d+)(\d{3})/;
    n += '';
    while (reg.test(n))
	n = n.replace(reg, '$1' + ',' + '$2');
    return n;
}
// 한글 한글자를 2byte로 인식하여, IE든 Netscape든
// 제대로 byte길이를 구해 줍니다.
function getByteLength(s) {
    var len = 0;
    if (s == null)
	return 0;
    for ( var i = 0; i < s.length; i++) {
    	var c = escape(s.charAt(i));
    	if (c.length == 1)
    		len++;
    	else if (c.indexOf("%u") != -1)
    		len += 2;
    	else if (c.indexOf("%") != -1)
    		len += c.length / 3;
    }
    return len;
}
function initHotspot() {
    var menuState = "close";
    $('.my_travel').mouseenter(function() {
    }).mouseleave(function() {
		menuState = "close";
		$('.pick_menu > ul').css('left', '-9999px');
		$('.pick_menu > .bot').hide();
    });
    $('.pick_menu > ul').css('left', '-9999px');
    $('.pick_menu > .bot').hide();
    $('.my_travel .btn_hotspot').bind('click', function() {
    	var chk;
    	if (tit.length == 1) {
    		if (tit[0] == "Paris") {
    			chk = 1;
    		}
    		if (tit[0] == "New York") {
    			chk = 2;
    		}
    		if (tit[0] == "Tokyo") {
    			chk = 3;
    		}
    		if (tit[0] == "Singapore") {
    			chk = 4;
    		}
    		if (tit[0] == "Hong Kong") {
    			chk = 5;
    		}
			
			if (tit[0] == "Bangkok") {
    			chk = 6;
    		}
			
			if (tit[0] == "London") {
    			chk = 7;
    		}
    		$("#frmPost").attr({
    			method: "post", 
    			action: httpDomain+"/special/main?seq="+chk
    		}).submit();
    		return false;
        }
		if (menuState == "close") {
		    menuState = "open";
		    $('.pick_menu > ul').css('left', '-48px');
		    $('.pick_menu > .bot').show();
		} else {
		    menuState = "close";
		    $('.pick_menu > ul').css('left', '-9999px');
		    $('.pick_menu > .bot').hide();
		}
    });
    $('.pick_menu > ul > li > a').live('mouseover focus',function() {
		$('.pick_menu > ul').css('left', '-48px');
		$('.pick_menu > .bot').show();
		/* 20111118 picks 도시추가 관련 수정, 반영 전에 주석처리 */
		/*for ( var i = 0; i < $('.pick_menu > ul > li').length; i++) {
		    $('.pick_menu > ul > li').eq(i).find('> a > img').attr('src', $('.pick_menu > ul > li').eq(i).find('> a > img').attr('src').replace('_on', '_off'));
		}*/
		/* 20111118 picks 도시추가 관련 수정, 반영 전에 주석처리 */
		/*$(this).find('> img').attr('src',$(this).find('> img').attr('src').replace('_off', '_on'));*/
	});
    /* 20111118 picks 도시추가 관련 수정, 반영 전에 주석처리 */
    /*$('.pick_menu > ul > li > a').live('mouseout blur',function() {
		for ( var i = 0; i < $('.pick_menu > ul > li').length; i++) {
		    $('.pick_menu > ul > li').eq(i).find('> a > img').attr('src', $('.pick_menu > ul > li').eq(i).find('> a > img').attr('src').replace('_on', '_off'));
		}
	});*/
    $('.pick_menu > ul > li > a').blur(function() {
		$('.pick_menu > ul').css('left', '-9999px');
		$('.pick_menu > .bot').hide();
    });
}

function showHotspot() {
    $('.pick_menu > ul > li').remove();
    //console.log(tit)
    if (tit.length == 1) {
		if (tit[0] == "Paris") {
		    $('.my_travel .hot_spot > img').attr('src', '/images/front/travel/common/tit_my_1.gif');
		    //$('.my_travel .hot_spot > img').attr('alt', '현대카드가 추천하는 Paris의 Hot Spot과 함께 특별한 여행을 만들어보세요.');
		}
		if (tit[0] == "New York") {
		    $('.my_travel .hot_spot > img').attr('src', '/images/front/travel/common/tit_my_2.gif');
		    //$('.my_travel .hot_spot > img').attr('alt', '현대카드가 추천하는 New York의 Hot Spot과 함께 특별한 여행을 만들어보세요.');
		}
		if (tit[0] == "Tokyo") {
		    $('.my_travel .hot_spot > img').attr('src', '/images/front/travel/common/tit_my_3.gif');
		    //$('.my_travel .hot_spot > img').attr('alt', '현대카드가 추천하는 Tokyo의 Hot Spot과 함께 특별한 여행을 만들어보세요.');
		}
		if (tit[0] == "Singapore") {
		    $('.my_travel .hot_spot > img').attr('src', '/images/front/travel/common/tit_my_4.gif');
		    //$('.my_travel .hot_spot > img').attr('alt', '현대카드가 추천하는 Singapore의 Hot Spot과 함께 특별한 여행을 만들어보세요.');
		}
		if (tit[0] == "Hong Kong") {
		    $('.my_travel .hot_spot > img').attr('src', '/images/front/travel/common/tit_my_5.gif');
		    //$('.my_travel .hot_spot > img').attr('alt', '현대카드가 추천하는 Hong Kong의 Hot Spot과 함께 특별한 여행을 만들어보세요.');
		}
		
		if (tit[0] == "Bangkok") {
		    $('.my_travel .hot_spot > img').attr('src', '/images/front/travel/common/tit_my_6.gif');
		    //$('.my_travel .hot_spot > img').attr('alt', '현대카드가 추천하는 Hong Kong의 Hot Spot과 함께 특별한 여행을 만들어보세요.');
		}
		
		if (tit[0] == "London") {
		    $('.my_travel .hot_spot > img').attr('src', '/images/front/travel/common/tit_my_7.gif');
		}
		$('.my_travel .hot_spot > img').attr('alt', '현대카드가 추천하는 ' + tit[0] + '의 Hot Spot과 함께 특별한 여행을 만들어보세요.');
		$('.my_travel .hot_spot').show();
    } else if (tit.length > 1) {
		$('.my_travel .hot_spot > img').attr('src', '/images/front/travel/common/tit_my_s.gif');
		$('.my_travel .hot_spot > img').attr('alt', '현대카드가 추천하는 Hot Spot과 함께 특별한 여행을 만들어보세요.');
		$('.my_travel .hot_spot').show();
    } else {
		$('.pick_menu > ul').css('left', '-9999px');
		$('.pick_menu > .bot').hide();
		$('.my_travel .hot_spot').hide();
    }
    var chk;
    for ( var i = 0; i < tit.length; i++) {
		if (tit[i] == "Paris") {
		    chk = 1;
		}
		if (tit[i] == "New York") {
		    chk = 2;
		}
		if (tit[i] == "Tokyo") {
		    chk = 3;
		}
		if (tit[i] == "Singapore") {
		    chk = 4;
		}
		if (tit[i] == "Hong Kong") {
		    chk = 5;
		}
		
		if (tit[i] == "Bangkok") {
		    chk = 6;
		}
		
		if (tit[i] == "London") {
		    chk = 7;
		}
		/* 20131212  $('.pick_menu > ul').append('<li><a href="' + httpsDomain + '/special/main?seq=' + chk + '"><img src="/images/front/travel/common/mytravel_menu' + chk + '_off.gif" alt="' + tit[i] + ' picks로 바로 가기" /></a></li>'); */
		$('.pick_menu > ul').append('<li><a href="' + httpsDomain + '/special/main?seq=' + chk + '" title="' + tit[i] + ' picks로 바로 가기"><img src="/images/front/travel/common/mytravel_menu' + chk + '.png" alt="' + tit[i] + ' " /></a></li>');
    }
    var chk;
}
// 아이템 리셋 함수
function reload( open ) {
	if ( open != "open" ) {
		setMyTravelCookie("Y");
		$('#myTravel').find(".my_list").animate({height:112},300,function(){
			$('#myTravel').find(".btn_fold").removeClass("closed").text('닫기(my travel)');
			$('#myTravel').find(".btn_fold").attr('title', '닫기(my travel)');
		});
	}
	list_initialization();
    // json으로 데이터 가져오기
    _getMyTravelList();
}
/* myTravel 정보 가져오는 json */
var _getMyTravelList = function() {
	//var url = "/guide/getMyTravelList22222222.json?callback=?";
    var url = "/guide/getMyTravelList.json?callback=?";
    
  //2013-10-30일 httpDomain  ->  httpsDomain 수정   -- ks.kim
    $.getJSON(httpsDomain + url, function(msg) {
    //$.getJSON("http://lwww.priviatravel.com" + url, function(msg) {
    	list_initialization();
		if (msg.result.length > 0) {
		    msgObj = msg;
		    var forLen = 0;
		    if (msg.result.length > 4) {
		    	//아이템 전체 갯수가 4개 이상이면 4개만 뿌려주고
		    	forLen = 4;
		    	$('.my_list .next').show();
		    } else {
		    	//아이템 전체 갯수가 4개 이하면 갯수만큼 뿌려준다
		    	forLen = msg.result.length;
			$('.my_list .next').hide();
		    }
		    for ( var i = 0; i < forLen; i++) {
		    	cutItem(i);
		    }
		    var price = 0;
		    for ( var pri = 0; pri < msg.result.length; pri++) {	    
		    	price = price + Number(msg.result[pri].amt);
		    }
		    itemNum = msg.result.length;
		    $('.items').html('<strong>' + msg.result.length + '</strong>');
		    $('span.won > strong').text(myAddComma(price));
		    checkState();
		   
		}
		if (msg.spCdList.length > 0) {
		    for ( var j = 0; j < msg.spCdList.length; j++) {
		    	tit[j] = msg.spCdList[j].cityNm;
		    }
		}
		checkState();
		// 특별한 도시 추천
		showHotspot();
    }).success(function() {
    }).error(function() {
    });
};

function cutItem(count) {
    var amt = "";
    var type = "";
    var dateInfo = "";
    var prodDivn = "";
    var title = "";
    var gubun = "";
    var gugan = "";
    var kind = "";
    var isState = "show";
    var searchCd = "";
    var statsCss = "";
    var seq = "";
    var gubunCd = "";
    var spotSeq = "";
    var spcExpCitySeq = "";
    seq = msgObj.result[count].seq;
    if (amt == "" || amt == null)
	amt = 0;
    amt = Number(msgObj.result[count].amt);
    prodDivn = msgObj.result[count].prodDivn;
    kind = msgObj.result[count].productCd;
    searchCd = msgObj.result[count].searchCd;
    gubunCd = msgObj.result[count].gubunCd;
    spotSeq = msgObj.result[count].spotSeq;
    spcExpCitySeq = msgObj.result[count].spcExpCitySeq;
    if (kind == "air" || kind == "hotel") {
    	//console.log(msgObj.result[count]);
    	//console.log(msgObj);
		if (msgObj.result[count].rservSts == "N") {
		    // 예약전
		    statsCss = "rev_bofore";
		} else if (msgObj.result[count].setlSts == "Y") {
		    // 결제완료
		    statsCss = "pay_complete";
		} else {
		    // 결제전
		    statsCss = "pay_before";
		}
    } else if (kind == "airTel" || kind == "picks") {
		if (msgObj.result[count].rservSts == "N") {
		    // 예약전
		    statsCss = "rev_bofore";
		} else if (msgObj.result[count].setlSts == "Y") {
		    // 예약완료
		    statsCss = "rev_complete";
		} else {
		    // 예약요청
		    statsCss = "rev_call";
		}
    }
    if (prodDivn == "MYT001") {
    	dateInfo = "[" + msgObj.result[count].rptAirPortNm + ', ' + msgObj.result[count].dptDate + "]";
    } else if (prodDivn == "MYT002") {
    	dateInfo = "[" + msgObj.result[count].dptDate + '~' + msgObj.result[count].arvDate + "]";
    } else if (prodDivn == "MYT003") {
    	dateInfo = msgObj.result[count].dptDate + '~' + msgObj.result[count].arvDate;
    } else {
    	dateInfo = "[" + msgObj.result[count].cityNm + "]";
    }
    if (prodDivn == "MYT001") {
		if (gubunCd == 'A') {
		    gubun = "[편도] ";
		    gugan = ">";
		} else if (gubunCd == 'B') {
		    gubun = "[왕복] ";
		    gugan = "<>";
		} else {
		    gubun = "[다구간] ";
		    gugan = "<" + msgObj.result[count].byeCnt + ">";
		}
		title = gubun + msgObj.result[count].departure + gugan + msgObj.result[count].destination;
    } else if (prodDivn == "MYT002") {
    	title = "[" + msgObj.result[count].cityNm + "] " + msgObj.result[count].hotelNm;
    } else if (prodDivn == "MYT003") {
    	title = "[" + msgObj.result[count].cityNm + "] " + msgObj.result[count].productNm;
    } else {
		title = msgObj.result[count].productNm;
		// isState show : 보여주기, none : 안보여주기
		// SPT016 stay SPT017 FB SPT018 culture SPT019 shopping
		if (gubunCd == 'SPT016') {
			//console.log(msgObj.result[count].dptDate)
			//20140104 stay의 경우 체크인아웃 날짜정보 있을 경우 체크인날짜 및 몇박인지 노출
			if(msgObj.result[count].dptDate != ""){
				var checkinDate = msgObj.result[count].dptDate;
				checkinDate = checkinDate.split("/");
				checkinDate = new Date(checkinDate[0], Number(checkinDate[1])-1, checkinDate[2]);  
				
				var checkoutDate = msgObj.result[count].arvDate;
				checkoutDate = checkoutDate.split("/");
				checkoutDate = new Date(checkoutDate[0], Number(checkoutDate[1])-1, checkoutDate[2]);  
				
				var betweenDay = (checkoutDate.getTime() - checkinDate.getTime()) / 1000 / 60 / 60 / 24;
				
				dateInfo = dateInfo + " " + msgObj.result[count].dptDate + ", " + betweenDay + "박";
			}
			/*  
			 * to_do!!!!!
			 * 이부분에 myTravel 날짜 뿌려주는 작업해주시면 됩니다!
			 * msgObj.result[count].dptDate  == 호텔 체크인
			 * msgObj.result[count].arvDate  == 호텔 체크아웃 날짜 입니다..
			 * 
			 * */
			//console.log(msgObj.result[count].dptDate)
		    kind = "Stay";
		    isState = "none";
		} else if (gubunCd == 'SPT026') {
		    kind = "Stay";
		    isState = "none";
		}else if (gubunCd == 'SPT017') {
		    kind = "FB";
		    if (msgObj.result[count].commDivn == "N") {
			isState = "none";
		    } else {
			isState = "show";
		    }
		} else if (gubunCd == 'SPT018') {
		    kind = "Culture";
		    isState = "none";
		} else if (gubunCd == 'SPT019') {
		    kind = "Shopping";
		    isState = "none";
		}
    }
	//console.log(dateInfo)
    creat_item(kind, dateInfo, title, amt, statsCss, isState, searchCd, seq, "add", spotSeq, spcExpCitySeq, gubunCd);
}
function list_initialization() {
	 itemNum = 0;
   position_slide = 0;
   posit = 0;
   del_count = 0;
   loaded_num = 4;
   $('.my_list .prev').hide();
   $('.my_list .next').hide();
   $('#myTravel .pro_list_target').css('margin-left', '0');
   $('span.won > strong').text('0');
   $('.total > .items').text('0');
   $('.cate_air > .product').remove();
   $('.cate_hotel > .product').remove();
   $('.cate_airtel > .product').remove();
   $('.cate_pick > .product').remove();
   $('.pro_list_target').stop();
   $('.pro_list_target').css('margin-left', '0px');
}

/**
 * 함수명 : devFnBetweenDay
 * 설  명 : 종료일에서 시작일을 차감하여 계산함(숙박or 여행 몇박수 계산) 
 * 사용법 : devFnBetweenDay( "2015-01-12", "2015-01-13", strSeperator  ); //결과확인 --> 요일 출력 : [월]
 * 참  고 : 종료일이나 시작일이 없을 경우는 0으로 반환함.
 */
var devFnBetweenDay = function( strStartDate, strEndDate, strSeperator ){
	var betweenDay = 0; 
	
	//체크인아웃 날짜정보와 체크인 날짜정보가 있을 경우 몇박인지 계산
	if( 	$.trim( strStartDate	) != ''
		&&	$.trim( strEndDate		) != '' ) {
		
		var arryStartDate 	= strStartDate.split( strSeperator );
		var startDate 		= new Date( arryStartDate[0], 	Number(arryStartDate[1])-1, arryStartDate[2] );  
		
		var arryEndDate 	= strEndDate.split( strSeperator );
		var endDate 		= new Date( arryEndDate[0], 	Number(arryEndDate[1])-1, 	arryEndDate[2]   ) ;  
		
		betweenDay = ( endDate.getTime() - startDate.getTime() ) / ( 1000 * 60 * 60 * 24 );
	}
	//console.log(" betweenDay	: [" + betweenDay + "]");
	
	return betweenDay;
}

/**
 * 함수명 : devFnSubStrBetweenToPrefixAndSuffix
 * 설  명 : 문자열에서 특정 문자열 기준으로 Between 하기(정규표현식 이용)
 * 사용법 : console.log ("요일 출력 : [" + devFnSubStrBetweenToPrefixAndSuffix("2015-01-12(월)", "\\(", "\\)" ) + "]"); //결과확인 --> 요일 출력 : [월]
 * 참  고 : 1. prefixStr, suffixStr 에는 정규표현식으로 사용될수 있는 문자열(특수문자의 경우 \\ 붙일 것)
 *          2. betweenStr 전체출력하면 --> [(월),월] 이라서 반환을 betweenStr[1] 으로 처리함. 
 */
var devFnSubStrBetweenToPrefixAndSuffix = function( str, prefixStr, suffixStr ){
	var betweenStr = ["", ""];
	
	//값이 있을 경우 검색
	if ( 	$.trim( str			) != ''
		&&	$.trim( prefixStr	) != ''
		&&	$.trim( suffixStr	) != '' ) {
		
		betweenStr = str.match( prefixStr + "(.*)" + suffixStr );
	}
	//console.log(" betweenStr	: [" + betweenStr + "]");
	
	return betweenStr[1];
}

/**
 * 함수명 : devFnGetInputDayLabel
 * 설  명 : 문자열에서 특정 문자열 기준으로 
 * 사용법 : console.log ("요일 출력 : [" + devFnGetInputDayLabel("2015-01-12", "{", "요일}" ) + "]"); //결과확인 --> 요일 출력 : {월요일}
 * 참  고 : ㅡ
 */
var devFnGetInputDayLabel = function( strDate, prefixStr, suffixStr ){
	var dayLabel 	= "";
	var strPre		= "";
	var strSuf		= "";
		
	if ( $.trim( strDate ) != '' ) {
	    var week = new Array("일", "월", "화", "수", "목", "금", "토");
	     
	    var today = new Date( strDate ).getDay();
	    var todayLabel = week[today];
	}
	
	if ( $.trim( prefixStr ) != '' ) {
		strPre = prefixStr;
	}
	
	if ( $.trim( suffixStr ) != '' ) {
		strSuf = suffixStr;
	}
	
	//console.log(" dayLabel	: [" + strPre + dayLabel + strSuf + "]");
	
	return strPre + todayLabel + strSuf;
}

/**
 * 함수명 : newMap
 * 설  명 : Map 객체화를 함수로 구현함. 출처 : http://sungkipyung.wordpress.com/
 * 사용법 : var devMapOfParam = newMap(); devMapOfParam.put( "mytravel", "hello world" ); devMapOfParam.value[ "mytravel" ];//devMapOfParam.value.mytravel
 */
var newMap = function(){
	var map   = {};
	map.value = {};
	
	map.getKey = function(id) {
		return id;
	};
	
	map.put = function(id, value) {
		var key = map.getKey(id);
		map.value[key] = value;
	};
	
	map.contains = function(id) {
		var key = map.getKey(id);
		
		if (map.value[key]) {
			return true;
		} else {
			return false;
		}
	};
	
	map.get = function(id) {
		var key = map.getKey(id);
		
		if (map.value[key]) {
			return map.value[key];
		}
		return null;
	};
	
	map.remove = function(id) {
		var key = map.getKey(id);
		
		if (map.contains(id)) {
			map.value[key] = undefined;
		}
	};

	return map;
}

/**
 * 함수명 : devFnParameterSplit
 * 설  명 : "&"으로 연결된 파라미터를 받아서 Map 객체화하여 반환하기
 * 사용법 : var devMapOfParam = devFnParameterSplit( ""&mytravel_yn=Y&htl_check_in=2015-02-05120000&htl_pay_dt=&hssp_fare_markup_amount=" );
 * @param params "&"으로 연결된 파라미터
 */
var devFnParameterSplit = function ( params ) {
    var devMapOfParam 		= newMap();				// javascript Map 만들기

	var devVarPramas = "&mytravel_yn=Y&htl_check_in=2015-02-05120000&htl_pay_dt=&hssp_fare_markup_amount=&hsf_hssp_ct_name=%EB%B0%A9%EC%BD%95&hsf_date_s=2015-02-05&org_currency=&hssp_fare_amount=129.0000&hsf_available_yn=OK&available_yn=OK&hsf_date_e=2015-02-06&hsf_hssp_code=W&rsv_return_time=&hsr_id=63&c_cnt=&room_cnt=1&room_grade_code=WONDERFUL+ROOM&currency_issue_date=&location=INT&SYS_SESSION_KEY=SF1420530236900000001&hsf_hssp_ct_code=THBKK&room_grade_code_name=WONDERFUL+ROOM&htl_check_out=2015-02-06120000&adult_detail=1%3B0%3B0%3B&exchange_rate=&b_cnt=0&hsf_promo_rule=152116&hsf_hssp_item_code=THBKK823SV015336&fare_key=&in_member_id=sjjh20&hssp_ct_code=THBKK&htl_rserv_sts=N&hssp_htl_name=%EB%8D%94%EB%B8%94%EC%9C%A0+%ED%98%B8%ED%85%94+%EB%B0%A9%EC%BD%95&adult1=1&promo_code=0%5E0%5E0&hsf_hssp_htl_code=THBKK823&hsf_hssp_fare_amount=129.0000&loc_type=INT&hsf_currency=USD&ssp_agt_code=&currency=USD&hssp_code=W&direct_yn=N&hsf_hsr_id=63&hsf_include_item=%EB%B6%88%ED%8F%AC%ED%95%A8&cxDeadline=20150105&adult2=0&hssp_htl_code=THBKK823&night_cnt=1&include_item=%EB%B6%88%ED%8F%AC%ED%95%A8&date_s=2015-02-05&hsf_hssp_htl_name=%EB%8D%94%EB%B8%94%EC%9C%A0+%ED%98%B8%ED%85%94+%EB%B0%A9%EC%BD%95&hsf_night_cnt=1&hsf_room_cnt=1&hssp_item_code=THBKK823SV015336&hsf_rsv_return_time=&hsf_bed_type=SG%3A1%3B&adult3=0&htl_ct_lcl=%EB%B0%A9%EC%BD%95&room_id=THBKK823SV015336&htl_code=THBKK823&fare_amount=129.0000&SYS_DATETIME=20150106164412&promotion_rule=152116&hsf_promo_code=0%5E0%5E0&htl_rsv_code=&a_cnt=1&date_e=2015-02-06&hsf_fare_amount=129.0000&htl_rsv_dt=&hsf_room_grade_code_name=WONDERFUL+ROOM&htl_nm_kr=%EB%8D%94%EB%B8%94%EC%9C%A0+%ED%98%B8%ED%85%94+%EB%B0%A9%EC%BD%95&stay_adult=1&hsf_room_grade_code=WONDERFUL+ROOM&promo_rule=152116&APP_UI=html&&callback=jQuery183036486574192531407_1420766103730&_=1420766181723";
	//값이 없을 경우 기본 파라미터 셋팅
	if ( params == null ){
		params = devVarPramas;
	}
	
	//값이 없을 경우 기본 파라미터 셋팅
	if ( params != null ){
		var devTempArray 		= params.split("&"); 	// '&'을 기준으로 분리하기
		var devArryKeyAndValue 	= null;
		var devCurrentValue 	= null;
		
		//파라미터를 Map 객체에 담기
		for(var i = 0; i < devTempArray.length ; i++) {
			
			if( devTempArray[i] != null && devTempArray[i].indexOf( "=" ) > -1 ){ // devArryKeyAndValue[0] : 파라미터 명
				devArryKeyAndValue = devTempArray[i].split('='); // '=' 을 기준으로 분리하기
				
				if ( devArryKeyAndValue.length > 1 ){
					devCurrentValue = devArryKeyAndValue[1];
				} else {
					devCurrentValue = "";
				}
				
				//파라미터를 Map 객체에 담기
				devMapOfParam.put( devArryKeyAndValue[0], devCurrentValue );
				
			}//end : if(devArryKeyAndValue[0] != null ~~~
			
		}//end : for
		
		//console.log( "devMapOfParam.value['hssp_fare_amount'] : [" + devMapOfParam.value[ "hssp_fare_amount" ] + "]" );
	}
	
    return devMapOfParam;
}

