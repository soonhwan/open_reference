/***************************
 * yang hyun min 2013-07-17
 ***************************/
/*
 * 20131014 이영재 수정
 * 경로찾기 맵이 여러개일 경우 마지막 경로찾기 맵 셀렉트박스 활성화 안되는 버그 개선
 * select id값 동적으로 뿌릴때 unique값으로 뿌리게끔 수정
 * 셀렉트박스 selector 접근시 class로 접근하게 수정 
 */
var calcRoute = function (bounceLeft,bounceRight,mapData,tar,gubunCd, autoMode, add) {
	var mapDataLength = mapData.length;
	
	var directionsDisplay;
	var map;
	var tarObj;
	var searchType = '0';
	var sPoint = '-30.8665433,151.1256356';
	var gPoint = '-31.8655434,152.3056346';
	var renderTime;// = setInterval( render, 100 );
	var ary = [];//길찾기 정보 배열
	var ap;//전역 맵 배열중 현재 길찾기 맵이 들어갈 순서
	var stateAdd = add;
	
	directionsDisplay = new google.maps.DirectionsRenderer();
	tarObj = tar.attr('id');
	//맵 생성 및 리스트 생성
	$('#directions-panel').append('<div id="directions-panel-'+tarObj+'"></div');
	$('#directions-panel-'+tarObj).append('<div class="directions-panel-head"><p class="points"><strong class="point starting"></strong> 부터 <strong class="point going"></strong> 까지의 경로</p><p class="distance">1,243Km ? 예상 소요시간 : 17시간 23분</p></div>');
	$('#directions-panel-'+tarObj+' .directions-panel-head').hide();
	var mapOptions = { zoom: 2, center: new google.maps.LatLng(24.12274926341406, 146.9755269916992), mapTypeId: google.maps.MapTypeId.ROADMAP, panControl:false, mapTypeControl:false, zoomControl:true, zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT, style: google.maps.ZoomControlStyle.DEFAULT } };
	map = new google.maps.Map(document.getElementById(tar.attr('id')), mapOptions);
	google.maps.event.addListener(map, 'zoom_changed', function() {
		var zoomLevel = map.getZoom();
		if ( (zoomLevel == 1) ){
			map.setZoom(2);
		}
	});
	directionsDisplay.setMap(map);
	directionsDisplay.setPanel( document.getElementById( 'directions-panel-'+tarObj ) );
	document.getElementById('directions-panel').style.display = 'block';
	mapObj.push(map);
	ap = mapObj.length - 1;
	var optionName = "";
	var optionStart = "";
	var optionEnd = "";
	var strIndexOf = 0;
	for(var i=0; i< mapDataLength; i++){
		strIndexOf = mapData[i].name.indexOf("#") +1;
		optionName += "<option value="+mapData[i].lat+","+mapData[i].lng+">"+mapData[i].name.substring(strIndexOf)+"</option>";
	}	
	var searchUI = '<div id="route_'+tar.attr('id')+'" class="search_load">'
					+'<div class="searchType">'
					+'<a href="#"><img src="/images/front/travel/guide/searchType_1_off.gif" alt="승용차"/></a>'
					+'<a href="#"><img src="/images/front/travel/guide/searchType_2_off.gif" alt="대중교통"/></a>'
					+'<a href="#"><img src="/images/front/travel/guide/searchType_3_off.gif" alt="도보"/></a>'
					+'<a href="#"><img src="/images/front/travel/guide/searchType_4_off.gif" alt="자전거"/></a>'
					+'</div><div class="searchPoint"><span class="tit"><img src="/images/front/travel/guide/tit_searchLod_1.gif" alt="출발지"/></span>'
					+'<select id="select_sp'+tar.attr('id')+'" class="select_sp" style="width:245px;" title="출발지를 선택 하세요."><option value="">출발지를 선택하세요.</option>'+optionName+'</select><span class="tit"><img src="/images/front/travel/guide/tit_searchLod_2.gif" alt="도착지" style="padding-left:16px;"/></span>'
					+'<select id="select_sp'+tar.attr('id')+'" class="select_gp" style="width:247px;" title="도착지를 선택 하세요."><option value="">도착지를 선택하세요.</option>'+optionName+'</select></div>'
					+'<a href="#" class="btn"><img src="/images/front/travel/guide/btn_searchLoad.gif" alt="경로찾기"/></a></div>'; 
	$('#search_load_wrap').append(searchUI);

	//fakeselect.initialize();

	$('#route_'+tar.attr('id')).find(".select_sp > option[value='"+bounceLeft+"']").attr("selected", "true");
	$('#route_'+tar.attr('id')).find(".select_gp > option[value='"+bounceRight+"']").attr("selected", "true");
	
	
	
	fakeselect.initialize();
	
	
	//길 타입 선택 이벤트(자동차, 대중교통, 걷기, 자전거)
	$('#route_'+tar.attr('id')+' > .searchType > a').click(function() {
		var loof = $('#route_'+tarObj+' > .searchType > a').length;
		for ( var i = 0; i < loof; i++) {
			$('#route_'+tarObj+' > .searchType > a:eq('+i+')').find('> img').attr( 'src', $('#route_'+tarObj+' > .searchType > a:eq('+i+')').find('> img').attr('src').replace('_on', '_off') );
			$('#route_'+tarObj+' > .searchType > a:eq('+i+')').css('border', '1px solid #d7d7d7');
		}
		$(this).find('> img').attr( 'src', $(this).find('> img').attr('src').replace('_off', '_on') );
		$(this).css('border', '1px solid #666');
		searchType = $(this).index();
		return false;
	});
		searchType = gubunCd; 
	$('#route_'+tar.attr('id')+' > .searchType > a:eq('+searchType+')').find('> img').attr( 'src', $('#route_'+tar.attr('id')+' > .searchType > a:eq('+searchType+')').find('> img').attr('src').replace('_off', '_on') );
	$('#route_'+tar.attr('id')+' > .searchType > a:eq('+searchType+')').css('border', '1px solid #666');
	
	//길찾기 버튼 클릭 이벤트
	$('#route_'+tar.attr('id')+' > a.btn').click(function(){
		sPoint = $('#route_'+tar.attr('id')).find('.select_sp option:selected').val();
		gPoint = $('#route_'+tar.attr('id')).find('.select_gp option:selected').val();
		
		if(sPoint =="" || gPoint==""){
			alert("출발지와 도착지를 모두 선택해 주세요.");
			return false;
		}
		
		ary = [];
		ary.push(sPoint);
		ary.push(gPoint);
		ary.push(searchType);
		mapObj[ap] = ary;
		
		//길찾기 시작
		var sp = sPoint.split(',');
		var gp = gPoint.split(',');
		var starting = new google.maps.LatLng(sp[0], sp[1]);
		var going = new google.maps.LatLng(gp[0], gp[1]);
		var  TravelMode;
		if (searchType == '0' ) {
			TravelMode = google.maps.TravelMode.DRIVING;
		}
		if (searchType == '1' ) {
			TravelMode = google.maps.TravelMode.TRANSIT;
		}
		if (searchType == '2' ) {
			TravelMode = google.maps.TravelMode.WALKING;
		}
		if (searchType == '3' ) {
			TravelMode = google.maps.TravelMode.BICYCLING;
		}
		var request = {
			origin: starting,
			destination: going,
			travelMode: TravelMode
		};
		var directionsService = new google.maps.DirectionsService();
		directionsService.route(request, function(response, status) {
			//길찾기 조회 성공
			if (status == google.maps.DirectionsStatus.OK) {
				$('#directions-panel-'+tarObj+' .adp_legal_data').remove();
				$('#directions-panel-'+tarObj+' .directions-panel-head .starting').text($("#route_"+tar.attr("id")).find(".select_sp option:selected").text().replace (/^([0-9]+)-/, ''));
				$('#directions-panel-'+tarObj+' .directions-panel-head .going').text($("#route_"+tar.attr("id")).find(".select_gp option:selected").text().replace (/^([0-9]+)-/, ''));
				directionsDisplay.setDirections(response);
			}
			if ( status == google.maps.DirectionsStatus.NOT_FOUND ) {
				alert('요청의 출발지, 목적지 또는 경유지점에 지정된 한 곳 이상의 위치를 지오코딩할 수 없음을 나타냅니다.');
			}
			if ( status == google.maps.DirectionsStatus.ZERO_RESULTS ) {
				clearInterval(renderTime);
				//$('#directions-panel-'+tarObj).hide();
				$('#directions-panel-'+tarObj+' .adp_legal_data').remove();
				$('#directions-panel-'+tarObj+' .zero_result').remove();
				$('#directions-panel-'+tarObj).show();
				$('#directions-panel-'+tarObj).find('> div.directions-panel-head').hide();
				$('#directions-panel-'+tarObj).find('> div.adp').remove();
				
				$('#directions-panel-'+tarObj).append('<div class="zero_result">'+$("#route_"+tar.attr("id")).find(".select_sp option:selected").text()+' 에서 '+$("#route_"+tar.attr("id")).find(".select_gp option:selected").text()+' 까지의 경로를 찾을 수 없습니다.</div>');
				
			}
			if ( status == google.maps.DirectionsStatus.INVALID_REQUEST ) {
				//alert('제공된 요청이 잘못되었음을 나타냅니다.');
			}
			if ( status == google.maps.DirectionsStatus.OVER_QUERY_LIMIT ) {
				//alert('서비스가 허용된 기간 동안 애플리케이션로부터 너무 많은 요청을 받았음을 나타냅니다.');
			}
			if ( status == google.maps.DirectionsStatus.REQUEST_DENIED ) {
				//alert('서비스가 애플리케이션의 길찾기 서비스 사용을 거부했음을 나타냅니다.');
			}
			if ( status == google.maps.DirectionsStatus.UNKNOWN_ERROR ) {
				//alert('서버 오류로 인해 길찾기 요청을 처리하지 못했음을 나타냅니다. 다시 시도하면 요청이 성공할 수도 있습니다.');
			}
			
		});
		clearInterval(renderTime);
		
		renderTime = setInterval( render, 100 );
		return false;
	});
	
	//인터발로 길찾기 리스트가 뿌려졌는지 확인
	function render(){
		$('#directions-panel-'+tarObj).hide();
		if ( $('#directions-panel-'+tarObj+' .adp-directions tr').length != 0 ) {
			clearInterval(renderTime);
			setDirectionsRenderer_style();
			if ( stateAdd == "add" ) { 
				stateAdd = "";
				tabClick($('#tabmap1 .sel'));
			}
		}
	}
	
	//리스트 조회 완료 시 호출(문자 replace 및 스타일 재 설정)
	function setDirectionsRenderer_style(){
		$('#directions-panel-'+tarObj+' .zero_result').remove();
		for ( var i = 0; i < $('#directions-panel-'+tarObj+' .adp-directions tr').length; i++ ) {
			$('#directions-panel-'+tarObj+' .adp-directions tr:eq('+i+') > .adp-substep').eq(0).addClass('number');
			$('#directions-panel-'+tarObj+' .adp-directions tr:eq('+i+') > .adp-substep').eq(1).addClass('content');
			$('#directions-panel-'+tarObj+' .adp-directions tr:eq('+i+') > .adp-substep').eq(2).addClass('distance');
			$('#directions-panel-'+tarObj+' .adp-directions tr:eq('+i+') > .adp-substep').eq(2).text( $('#directions-panel-'+tarObj+' .adp-directions tr:eq('+i+') > .adp-substep').eq(2).text().replace( '킬로미터', 'Km' ) );			
		}
		
		
		
		//$('#directions-panel-'+tarObj+' .directions-panel-head .starting').text( $('#directions-panel-'+tarObj+' .adp-placemark:eq(0)').text() );
		//$('#directions-panel-'+tarObj+' .directions-panel-head .going').text( $('#directions-panel-'+tarObj+' .adp-placemark:eq(1)').text() );
		$('#directions-panel-'+tarObj+' .directions-panel-head .distance').text( $('#directions-panel-'+tarObj+' .adp-summary').text().replace('정보','')+" 소요 예상" );
		$('#directions-panel-'+tarObj).append('<p class="adp_legal_data"><img src="/images/front/travel/guide/txt_adp_legal.gif" alt="본 길찾기는 계획용으로만 사용해 주시기 바랍니다. 공사 현장, 교통 상황, 날씨 등으로 인해 도로 상황이 지도와 달라질 수 있으므로, 이 점을 감안해서 이동 경로를 적절하게 계획하시기 바랍니다. 또한 경로와 관련된 모든 표지판이나 안내를 준수해야 합니다. 지도 데이터 ⓒ2013 Basarsoft, Google, ORION-ME"/></p>');
		$('#directions-panel-'+tarObj+' img.adp-marker').attr('src', '/images/front/travel/guide/img_going.gif');//도착 아이콘 변경
		$('#directions-panel-'+tarObj+' #adp-placemark img.adp-marker').attr('src', '/images/front/travel/guide/img_starting.gif');//시작 아이콘 변경
		$('#directions-panel-'+tarObj).show();
		$('#directions-panel-'+tarObj+' .directions-panel-head').show();
		
	}
	
	if ( autoMode == "auto" ) {
		$('#route_'+tar.attr('id')+' > a.btn').trigger('click');
		if(guideRole == "C"){
			$("#search_load_wrap > div").hide();
		}
	} 
	
};