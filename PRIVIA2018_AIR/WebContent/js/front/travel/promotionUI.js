//신규회원 가입 이벤트 js


//모바일 프로모션
/*
function imageMap(rimg,rwidth,x1,y1,x2,y2,mapid){
     var rxsize = document.getElementById(rimg).width;
     var xp1 	= rxsize / rwidth * x1;
     var yp1 	= rxsize / rwidth * y1;
     var xp2 	= rxsize / rwidth * x2;
     var yp2 	= rxsize / rwidth * y2;
     
     document.getElementById(mapid).coords = xp1 + "," + yp1 + "," + xp2 + "," + yp2;
}

$(document).live('pageshow','.ui-page-active', function(){
	if($('.ui-page-active .promotionView img').attr('id') == 'event_img'){
		imageMap('event_img', 560,	 26,	1763,	532,	1869,	'ar1');
		imageMap('event_img',	560,	 26,	1882,	273,	1988,	'ar2');
		imageMap('event_img',	560,	288,	1882,	530,	1987,	'ar3');
		imageMap('event_img',	560,	 28,	2003,	272,	2108,	'ar4');
		imageMap('event_img',	560,	288,	2002,	531,	2108,	'ar5');
		imageMap('event_img',	560,	 30,	2247,	254,	2337,	'ar6');
		imageMap('event_img',	560,	266,	2247,	532,	2337,	'ar7');
		imageMap('event_img',	560,	118,	2837,	258,	2885,	'ar8');
	}
});
*/
/**
 * [프로모션] 쿠폰번호를 이용해 다운로드 요청하기  
 */
function getPromotion( couponNo, promoNo ) {
	var pattern 	= /(m|mw).priviatravel.com/;
	var thisHost 	= "" + document.location.host;
	var strPosition	= "CHANNEL0001"; //PC
	var strUrl 		= "/mypage/benefit/eventCouponProc.json";
	var rtnUrl 		= "http://" + thisHost + "/promotion/sectionEvent/" + promoNo + "/"; 
	
	if ( pattern.test( thisHost ) ) {
		strPosition	= "CHANNEL0002"; //MOBILE
		strUrl = "/customer/benefits/eventCouponProc.json";
		rtnUrl = "http://" + thisHost + "/promotion/promotionView?seq=" + promoNo;
	}	
	
	$.ajax({
		  type		: "POST"
		, url		: strUrl
		, data		: { "couponNo":couponNo, "strPositon":strPosition }
		, async		: false
		, success	: function( resultJson ) {			
			if (resultJson.R_CD == undefined ) {
				alert( "잠시후에 다시 시도해주세요." );	
			} else if (resultJson.R_CD == 8888 ) {
				var r=confirm('로그인 후 쿠폰다운로드 가능합니다.\n로그인 페이지로 이동하시겠습니까?');
			    if (r==true) { 
			    	window.parent.location.href = "/common/sso/login/?returnUrl=" + rtnUrl; 
			    }
			} else {
				alert( resultJson.R_MSG.replace("//n","\n") );
			}			
		}, error	: function(request, status, error){
			alert( "잠시후에 다시 시도해주세요." );
		} 
	});
	return false;
}

function downloadCoupon(couponNo){
	
	var loginForm = $("#downloadCouponForm");
	if(loginForm.length < 1) {
		loginForm = $("<form></form>").attr({id:"downloadCouponForm", action:'https://' + document.location.host + '/common/sso/loginMember/', method:'POST'});
		$(document.body).append(loginForm);
		loginForm.append($('<input type="hidden" value="" name="returnUrl"/>'));
	}
	var returnUrl = document.location.href;
	if( top ){
		returnUrl = top.document.location.href;
		loginForm.attr("target", "_top");
	}
	loginForm.find("input[name='returnUrl']").val(returnUrl);
	
	if("${authInfoVO.isLogin}" == "false" || "${authInfoVO.isLogin}" == "" ){
		
		loginForm.submit();
	} else {
		
		if(!confirm("선택하신 쿠폰을 다운로드 하시겠습니까?")){
			return false;
		}
		
		$.ajax({
			type:'POST'
			, url:"/customer/benefits/insertCouponIssueInfo.json"
			, data:{"couponNo":couponNo}
			, async:false
			, dataType:"json"
			, success:function(data){
				if(data.CODE == "0000"){
					
					if( (document.location+"").indexOf("mw") == -1 ){
						if(!confirm("쿠폰이 다운로드 되었습니다.\n다운된 쿠폰을 확인 하시겠습니까?")){
							return false;
						}else{
							loginForm.attr("action", "/mypage/index/benefit?menu=Coupon");
							loginForm.submit();
						}
					}else{
						alert("쿠폰이 다운로드 되었습니다.");
					}
					
				} else if(data.CODE == "9999"){
					if(confirm("로그인이 필요한 서비스입니다.\n로그인 하시겠습니까?")){
						loginForm.submit();
					}
				} else {
					alert(data.MESSAGE);
				}
				return false;
			}
		});
	}
}
