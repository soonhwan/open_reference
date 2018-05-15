function showSMS(width,height){
	var iHtml = "";
	iHtml += '	<div class="layer_pop" style="width:"'+width+'px;">';
	iHtml += '		<div class="heading">';
	iHtml += '			<h2><img src="/images/front/travel/popup/h2_sms.gif" alt="SMS 보내기" /></h2>';
	iHtml += '			<a href="#" class="btn_close">닫기</a>';
	iHtml += '		</div>';
	iHtml += '		<div class="content">';
	iHtml += '	    	<h3><img src="/images/front/travel/popup/subTit_sms.gif" alt="sms 보내기" /></h3>';
	iHtml += '			<div class="m_event_noti">';
	iHtml += '	        <strong>PRIVIA 항공 모바일 서비스 m.priviatravel.com</strong><br />';
	iHtml += '	        안드로이드 http://fa.do/hpE<br />';
	iHtml += '	        아이폰(IOS) http://fa.do/2lU<br />';
	iHtml += '	        - 언제 어디서나 쉽고 빠르게 항공권 예약<br />';
	iHtml += '	        - 모바일 전용 특가<br />';
	iHtml += '	        - 카드별 최고 10% 할인 + 2 ~ 3개월 무이자할부<br /><br />';
	iHtml += '	        <strong>[국내선] 대한항공 PRIVIA 모바일 예약/결제 가능</strong><br />';
	iHtml += '	        이용 방법 : PRIVIA 여행 모바일 APP 또는 WEB(m.priviatravel.com) 접속 후<br />';
	iHtml += '	        대한항공 국내선 항공권 예약/결제 ';
	iHtml += '	        </div>';
	iHtml += '			<h3><img src="/images/front/travel/popup/subTit_receipt.gif" alt="받는 사람" /></h3>';
	iHtml += '			<table class="view" summary="모바일 특가 이벤트 SMS 전송을 위한 연락처 입력폼" style="margin-bottom:20px;">';
	iHtml += '	        <caption>SMS 보내기 입력폼</caption>';
	iHtml += '	        <colgroup>';
	iHtml += '	            <col width="100" /><col width="*" />';
	iHtml += '	        </colgroup>';
	iHtml += '	        <tbody>';
	iHtml += '	        <tr>';
	iHtml += '	            <th scope="row"><p><img src="/images/front/travel/popup/txt_th_sms.gif" alt="연락처" /></p></th>';
	iHtml += '	            <td>';
	iHtml += '	            	<p>';
	iHtml += '	                <label for="contact1" class="blind">휴대폰번호 첫번째 3자리</label>';
	iHtml += '					<select name="contact" id="contact1" style="width:80px;">';
	iHtml += '						<option>010</option>';
	iHtml += '						<option>011</option>';
	iHtml += '						<option>016</option>';
	iHtml += '						<option>017</option>';
	iHtml += '						<option>018</option>';
	iHtml += '						<option>019</option>';
	iHtml += '					</select>';
	iHtml += '					-';
	iHtml += '					<label for="contact2" class="blind">휴대폰번호 두번째 3 ~ 4자리</label>';
	iHtml += '					<input id="contact2" class="text" value="" style="width:48px;" title="휴대폰번호 중간 3 ~ 4자리"/>';
	iHtml += '					-';
	iHtml += '					<label for="contact3" class="blind">휴대폰번호 세번째 4자리</label>';
	iHtml += '					<input id="contact3" class="text" value="" style="width:49px;" title="휴대폰번호 끝 4자리" />';
	iHtml += '	            	</p>';
	iHtml += '	            </td>';
	iHtml += '	        </tr>';
	iHtml += '	        </tbody>';
	iHtml += '	        </table>';
	iHtml += '			<div class="pop_btn"><a href="#" class="smsSubmit"><img src="/images/front/travel/popup/btn_submit.gif" alt="보내기" /></a></div>';
	iHtml += '		</div>';
	iHtml += '	</div>';
	
	$('body',parent.document).append('<div id="layer-sms"></div>');
	$('body',parent.document).find('#layer-sms').css({'width':width+'px','height':height+'px','position':'absolute','left':'50%','top':($(parent.document).scrollTop()+parent.document.documentElement.clientHeight/2)+'px','margin-top':-(height/2)+'px','margin-left':-(width/2)+'px','border':'1px solid #666'});
	$('body',parent.document).find('#layer-sms').html(iHtml);
	
	//닫기버튼 클릭 시
	$('body',parent.document).find('#layer-sms a.btn_close').live('click',function(){
		$(this).parents('#layer-sms').remove();			
		return false;
	});
	
	//보내기버튼 클릭 시
	$('body',parent.document).find('#layer-sms .smsSubmit').click(function(){
		var locationURL = document.location.href.substring(0,document.location.href.indexOf("priviatravel"))
		var domainURL = "";
		
		if(locationURL.indexOf("tair")>0 || locationURL.indexOf("twww")>0){
			domainURL = "tair.";
		}else if(locationURL.indexOf("air") > 0|| locationURL.indexOf("www") >0){ 
			domainURL = "air.";
		}else{
			domainURL = "dair.";
		}
		if($('body',parent.document).find("#layer-sms #contact1").val() == "" || $('body',parent.document).find("#layer-sms #contact2").val() == "" || $('body',parent.document).find("#layer-sms #contact3").val() == ""){
			alert("휴대폰번호를 입력하세요");
			return false;
		}
		var cellNum = $('body',parent.document).find("#layer-sms #contact1").val() + $('body',parent.document).find("#layer-sms #contact2").val() + $('body',parent.document).find("#layer-sms #contact3").val();
		try {
			$.ajax({
				type     : "POST",
				data	 : "cellNum="+cellNum,
				url      : "//" + domainURL + "priviatravel.com/airSearchSendSMS.lts",
				dataType : "html",
				success	 : function(result){
					alert("정상적으로 SMS을 발송 하였습니다.");
					$('body',parent.document).find('#layer-sms').remove();
				},
				error : function(xhr, status, error){
					alert(error)
				}
			});
		} catch(ee) {
			alert("SMS 발송이 실패하였습니다.");
			$('body',parent.document).find('#layer-sms').remove();
		}
		return false;
	});
}

$(document).ready(function(){
	
	//숫자만
	$(".only_num").css('imeMode','disabled').keypress(function(event) {
		if(event.which && (event.which < 48 || event.which > 57) ) {
			event.preventDefault();
		}
	}).keyup(function(){
		if( $(this).val() != null && $(this).val() != '' ) {
			$(this).val( $(this).val().replace(/[^0-9]/g, '') );
		}
	});
});


var sendAppInstallUrlHistory = {};
function sendAppInstallUrl(){
	var locationURL = document.location.href.substring(0,document.location.href.indexOf("priviatravel"))
	var domainURL = "";
	
	if(locationURL.indexOf("tair")>0 || locationURL.indexOf("thotel")>0 || locationURL.indexOf("tairtel")>0 || locationURL.indexOf("tpackage")>0 || locationURL.indexOf("twww")>0){
		domainURL = "twww.";
	}else if(locationURL.indexOf("lair") > 0 || locationURL.indexOf("lhotel") > 0 || locationURL.indexOf("lairtel") > 0 || locationURL.indexOf("lpackage") > 0 || locationURL.indexOf("lwww") >0){ 
		domainURL = "lwww.";
	}else if(locationURL.indexOf("air") > 0 || locationURL.indexOf("hotel") > 0 || locationURL.indexOf("airtel") > 0 || locationURL.indexOf("package") > 0 || locationURL.indexOf("www") >0){ 
		domainURL = "www.";
	}else{
		domainURL = "dwww.";
	}
	
	var cellNum = $('#inputCellNo').val();
	
	if( !sendAppInstallUrlHistory[cellNum] ){
		sendAppInstallUrlHistory[cellNum] = 0;
	}
	else if(parseInt(sendAppInstallUrlHistory[cellNum]) >= 5){
		alert("동일번호 문자 발송 건수가 초과되었습니다.");
		return;
	}
	
	$.ajax({
		type     : "get",
		data	 : "callTo="+cellNum,
		url      : "//" + domainURL + "priviatravel.com/promotion/sendAppInstallURL.json",
		dataType : "json",
		success	 : function(result){
			alert(result.MESSAGE);
			
			if( result.SUCCESS ){
				$('#inputCellNo').val("휴대폰 번호를 입력하세요");
				
				sendAppInstallUrlHistory[cellNum] = parseInt(sendAppInstallUrlHistory[cellNum]) + 1;	
			} else {
				$('#inputCellNo').focus();
			}
		},
		error : function(xhr, status, error){
			alert(error);
		}
	});
	
	return false;
}