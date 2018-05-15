/*
 * 함수명 : 
 * 설명 : 모바일디바이스에서 PC웹으로 접근했을때 무조건 모바일웹으로 redirect 처리함 

//모바일기기 web접근여부 판단
$(function(){
	var devCheckLocationHref 	= location.href;
	var devIndexCheckStart 		= devCheckLocationHref.indexOf("//") + 2;
	var devStrCheckDomain 		= devCheckLocationHref.substring(devIndexCheckStart, devIndexCheckStart + 1);
	var devStrDomainHost 		= "";
	var devIsNotExcludeURL = true;
	
	//모바일기기에서 PC웹접근 리다이렉트 제외처리 URL
	var devExcludeURL = new Array("package.priviatravel.com/pkg/", "www.priviatravel.com/main/free/", "www.priviatravel.com/noticefaq/", "www.priviatravel.com/promotion/");
	
	//console.log(" console.log : 확인 도메인 prefix [" + devStrCheckDomain + "], 현재 URL [" + devCheckLocationHref + "], devExcludeURL.lenght [" + devExcludeURL.lenght + "]");
	
	for (var i = 0; i < devExcludeURL.length; i++) {
		if ( devCheckLocationHref.indexOf( devExcludeURL[i] ) > -1 ) {
			devIsNotExcludeURL = false;
			break;
		}
	}
	
	if( devIsNotExcludeURL ){
		if( "w" != devStrCheckDomain && "p" != devStrCheckDomain ){
			devStrDomainHost = devStrCheckDomain;
		}
		
		//console.log("devStrCheckDomain : [" + devStrCheckDomain + "]");
		//모바일기기여부 체크 
		if (navigator.userAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null
				|| navigator.userAgent.match(/LG|SAMSUNG|Samsung/) != null) {
			//alert("모바일환경에 맞는 서비스를 위하여 모바일 웹페이지로 이동합니다.");
			document.location.replace("http://" + devStrDomainHost + "m.priviatravel.com/mIndex.lts");
		} else {
			//alert("PC웹 페이지에서 서비스합니다.\n" + navigator.userAgent);
			//console.log("PC웹 페이지에서 서비스합니다.\n" + navigator.userAgent);
		}
	}
});
 */
