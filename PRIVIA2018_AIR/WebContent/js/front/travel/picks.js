

/*
 * 문서명 : picks.js 
 * 설명 : 현대카드 Picks 스크립트
 * 
 * 
 * 
 * 
 * */
document.o
var flagViewCity = 0; //도시선택 드롭다운 초기화를 위한 값 - 0:파리, 1:뉴욕, 2:홍콩, 3:싱가폴, 4:도쿄
var flagViewStyle = 0; //리스트뷰, 맵뷰 구분용
var spotCategoryVal = ""; //ui 동작 처리에 사용하기 위한 카테고리값
var map; //배경지도 맵
var HmgUrl;

//카테고리클릭 이벤트
var drawMapCategory = function(seq,category,spotCategory){
   
   
  
	//배경지도 생성 후 마커생성
	fncMapView(spotCategory);	
	
	$("#curCategory").val(category);
	
	if($("#"+category+"List").find("li").length > 0){
		return;
	}else{
		//SPOT 리스트 
		
		$.ajax({
			type:'POST',
			url:"/special/spotList.json",
			data:{"seq":seq , "spotCategory":spotCategory},
			async:true,
			success: function(data){
			
			
				var objTarget = $("#"+category+"List");
				//objTarget.empty();
				var path = $("#inpPath").val();
			
				if(data.length > 0){
				
					
					$(data).each(function(index, el) {
						if(el.hotelTyp == null){
							el.hotelTyp = "";
						}
						
						if(index % 10 == 0){
							objTarget.append("<ul/>");
						}
						//var objUl = $("<ul/>");
						var objLi = $("<li/>");
						//var objA = $("<a/>").attr("href", "#");
						var objA = $("<a class='btn_go_spot_view'/>").attr("href", "#");
						objA.click(function () {
							goSpotView(seq, el.seq, spotCategory, this);
							return false;
						}).html("<img src=\"" + path + el.thumImg + "\" alt=\"" + el.korNm + " 사진\" style=\"width:120px\"/><strong>" + el.korNm + "</strong><span>" + el.engNm + "</span><span>"+ el.hotelTyp + "</span>");
						
					 
						objLi.append(objA);
						objTarget.find("ul:last").append(objLi);
						
						if(index + 1 == data.length){
							picksPaging(objTarget);
						}
					});
				} else {
					$("#"+category+"List").html("<ul><li>등록된 "+category+" 가 없습니다.</li></ul>");
				}
				
				
				
			}
		});
	}
};

//picks 페이징 처리
var picksPaging = function($elem){
	//var picksCategory = $("#categoryPicks");
	//picksCategory.find("div.set").each(function(index, element) {
		//var pickset = $(this).find(".wrap"),
		var picks = $elem.find("li").length,
		picksWidth = 320,
		picksHeight = 80,
		pages = parseInt(picks / 10),
		currentPage = 0,
		speed = 400;
		if(picks % 10 > 0){
			pages = pages + 1;
		}
		//console.log(picks)
		//$("#categoryPicks").find("div.pbtns").html("");
		//$elem.prev(".heading").find("div.pbtns").html("");
		//picks 종으로 정렬 처리
		/*
		 $(this).find("ul > li").each(function(idx, elem) {
			var thisTop = ($(this).index() % 5) * picksHeight,
			thisLeft = parseInt($(this).index() / 5) * picksWidth;
			$(this).css({
				top : thisTop,
				left: thisLeft
			});
		});
		*/
		
		//페이지가 2 이상이면 이전다음 버튼 생성
		if(pages > 1){
			var pbtn = '<button type="button" class="prev disable">이전</button><button type="button" class="next">다음</button>';
			$elem.prev(".heading").append($('<div class="pbtns"/>').html(pbtn));
		}
		
		//이전다음 버튼 이벤트
		//$elem.find("div.pbtns > button").click(function(){
		$elem.prev(".heading").find("div.pbtns > button").click(function(){
			if(flagViewStyle == 0){
				
			}
			//console.log("클릭");
			if($(this).hasClass("next") && !$(this).hasClass("disable")){
				currentPage = currentPage + 1;
				$(this).siblings("button.prev").removeClass("disable");
				if(currentPage == pages - 1){
					$(this).addClass("disable");
				}
			}else if($(this).hasClass("prev") && !$(this).hasClass("disable")){
				currentPage = currentPage - 1;
				$(this).siblings("button.next").removeClass("disable");
				if(currentPage == 0){
					$(this).addClass("disable");
				}
			}
			$elem.animate({marginLeft : picksWidth * 2 * -currentPage},speed);	
		});
	//});
};

var viewSoptList = function(n){
	
	picksCategory = $("#categoryPicks"),
	$this = picksCategory.find("> .set").eq(n);
	if(!$this.hasClass("expand") && flagViewStyle == 0){
		
		//if (typeof spotCategoryVal != "undefined" &&  spotCategoryVal != "") {
			picksCategory.css({paddingLeft:640,width:160});
		//}

		var tempLoopCnt = picksCategory.find("> .set").length;
		for (var i = 0; i < tempLoopCnt; i++) {
			if ( n == i ) {
				
				picksCategory.find("> .set").eq(i).find(".wrap").removeClass("hidden");
				picksCategory.find("> .set").eq(i).stop().css({'width':630, 'height':470}).addClass("expand");	
			} else {
				picksCategory.find("> .set").eq(i).find(".wrap").addClass("hidden");
				picksCategory.find("> .set").eq(i).stop().css({'width':150, 'height':150}).removeClass("expand");	
			}
		}
		//if ($this.find(".expand").length > 0) {
			//spotCategoryVal = $this.attr("rel");
		//}
		spotCategoryVal = $this.attr("rel");
		
		//console.log(spotCategoryVal);
		drawMapCategory($("#inpSeq").val(),$this.attr("id"),spotCategoryVal);
		
		/*if(spotCategoryVal=="SPT016"){
		alert("dd")
		//drawMapCategory($("#inpSeq").val(),$this.attr("id"),"SPT026");
		}*/
	}
};

//ui 전체 동작
var specialExperience = function(){
	var baseTarget = $("body"),
	selectCities = $("#spExSection ul.cities");
	selectCityBtn = $("#spExSection ul.cities, #spExSection h3.city"),
	picksCategory = $("#categoryPicks");
	
	//picksPaging(); //카테고리별 picks 페이징 처리
	
	//baseTarget.attr("class","special_exp"); //개발단에서 넣어주는걸로
	//현재 선택된 도시를 드롭다운에서 가려주고 탭키 포커스 불가하게 설정
	selectCities.find("> li").eq(flagViewCity).attr("class","hidden").find("> a").attr("tabindex","-1"); 
	
	
	if(checkMobile() == true){
		$("#spExSection h3.city").click(function(){
			if(selectCities.height() * 1 == 0){
				selectCities.css({height : "auto"});
			}else{
				selectCities.css({height : "0"});
			}
		});
	}else{
		//도시 선택
		selectCityBtn.bind({
			mouseenter: function() {selectCities.css({height : "auto"});},
			mouseleave: function() {selectCities.css({height : "0"});}
		});
		//도시선택 키보드 접근
		selectCities.find("a").bind({
			focus: function() {selectCities.css({height : "auto"});},
			blur: function() {selectCities.css({height : "0"});}
		});
	}
	
	/* 카테고리별 ex */
	//picksCategory.find("ul > li:even").addClass("even");
	/*picksCategory.find('a').bind('focus',function(){
		$(this).parents("div.set").trigger('click');
	});
	picksCategory.find('button').live('focus',function(){
		$(this).parents("div.set").trigger('click');
	});*/
	picksCategory.find("> .set").each(function(index, element) {		
		$(this).click(function(){
			
			viewSoptList($(this).index());
		});
	});
	
	//카테고리별 버튼 이벤트 바인딩(맵뷰일때만 동작)
	picksCategory.find("button.category").bind("focus mouseover",function(){
		if(!$(this).siblings("h4").hasClass("active")){
			$(this).siblings("h4").addClass("over");
		}
	});
	picksCategory.find("button.category").bind("blur mouseout",function(){
		if(!$(this).siblings("h4").hasClass("active")){
			$(this).siblings("h4").removeClass("over");
		}
	});
	picksCategory.find("button.category").bind("click",function(){
		picksCategory.find("h4[class='active']").each(function(index, element) {
			$(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png","_off.png"));
		});
		picksCategory.find("h4").removeClass("active");
		$(this).siblings("h4").removeClass("over").addClass("active");
		$(this).siblings("h4").find("img").attr("src", $(this).siblings("h4").find("img").attr("src").replace("_off.png",".png"));
	});
	
};

//리스트,맵 뷰 전환
//리스트,맵 뷰 전환
var changeView = function(type){ 
	var sectionSPEX = $("#spExSection"),
	picksAll = $("#categoryPicks"),
	btnsViewType = $("#btnPicksView"),
	h2ViewType = $("#h2Picks");
	if(type == flagViewStyle){
		return;
	}else{
		if(type == 0){ //리스트뷰일때
			btnsViewType.removeClass("btns_map").addClass("btns_list");
			h2ViewType.removeClass("map");
			picksAll.removeClass("category_map");
			$("#imgCityArea").show();
			//$("#mapCityArea").css("top","-9999px");
			picksAll.find("> .set").find("h4").removeClass("active");
			picksAll.find("h4").each(function(index, element) {
				var num = index + 1;
				$(this).find("img").attr("src", "/images/front/travel/special/img_tit_"+num+".png");
			});
			flagViewStyle = 0;
			
			if(typeof spotCategoryVal != "undefined" && spotCategoryVal != ""){
				
				viewSoptList(picksAll.find("> .set[rel='"+spotCategoryVal+"']").index());
			};

		}else{ //맵뷰일때
			picksAll.attr("style","");
			picksAll.find("> .expand").find("ul").stop().fadeTo(1,0,function(){$(this).addClass("hidden").fadeTo(0,1);});
			picksAll.find("> .expand").stop().animate({'width':150, 'height':150}, 1, function(){
				$(this).removeClass("expand").removeAttr("style");
			});
			picksAll.find("> .set").removeAttr("style");
			picksAll.find("> .set").each(function(){
				$(this).find(".wrap").attr("class","wrap hidden");
			});

			btnsViewType.removeClass("btns_list").addClass("btns_map");
			h2ViewType.addClass("map");
			picksAll.addClass("category_map");
			$("#imgCityArea").hide();
			//$("#mapCityArea").css("top","inherit");
			
			if(spotCategoryVal == ""){
				/* 멍멍
				picksAll.find("> .set").eq(0).find("h4").addClass("active");
				spotCategoryVal = picksAll.find("> .set").eq(0).attr("rel");
				*/
			}else{
				picksAll.find("> .set[rel='"+spotCategoryVal+"']").find("h4").addClass("active");
			};
			picksAll.find("h4[class!='active']").each(function(index, element) {
				$(this).find("img").attr("src", $(this).find("img").attr("src").replace(".png","_off.png"));
			});
			
			flagViewStyle = 1;
			goMapView(spotCategoryVal);
		};
	};
};

//스팟 맵 뷰
var fncMapView = function(spotCategory){
	var seq = $("#inpSeq").val();
	spotCategoryVal = spotCategory;
	
	//맵뷰 - 배경지도 생성
	$.ajax({
		type:'POST',
		url:"/special/spcBgMap.json",
		data:{"seq":seq},
		async:true,
		success: function(data){
 			//배경지도 맵 생성
			GoogleMap = {  
			    initialize : function() {
			       //지도 생성.(위치 DATA뿌리기)  
			       var latlng = new google.maps.LatLng(data.xcoord ,data.ycoord);
			       var myOptions = { zoom: data.zoom, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP, panControl:false, mapTypeControl:false, zoomControl:true };
			       map = new google.maps.Map(document.getElementById("mapCityArea"), myOptions);
			   }
			};
		    GoogleMap.initialize();
		 
		    //맵뷰 기본 Stay카테고리
		    goMapView(spotCategory);
		}
	});
};

//20131120 추가 : 스팟의 마커 이미지를 로드해서 넓이값 구해둔다. 이후 스팟 시퀀스값과 대조해서 마커 변경시 좌표 치환
var iconMarkerWidth = new Object;
var markerDataLoad = function(){
	//preLoader.load('body', 0, '/images/front/travel/guide/loading_data.png', '항공 검색결과 로딩중');
	var path = $("#inpPath").val();
	var	spcExpCitySeq = $("#inpSeq").val();
	$.ajax({
		type:'POST',
		url:"/special/spotMapView.json",
		data:{"spcExpCitySeq":spcExpCitySeq},
		async:true,
		success: function(resultMap){
			
			
			//console.log(resultMap.mapViewList);
			$(resultMap.mapViewList).each(function(index, element) {
			
				//console.log("시퀀스는:" + element.seqId + "," + "네임은:" + element.korNm);
				//iconMarkerWidth["icoMarkerSeq" + element.seq] = 0;
				$("#markerAppendDiv").append($('<div />').html('<img id="icoMarkerSeq'+element.seq+'" src="'+ path + element.markerImg+'" />'))
			});
		}
	});
	setTimeout(function(){
		getMarkerWidth();
	},500);
};
var getMarkerWidth = function(){
	
	var checkMarkerWidth;
	checkMarkerWidth = setInterval(function(){
		var blankVal = 0;
		$("#markerAppendDiv").find("img").each(function(index, element) {
			var width = $(this).width();
			var id = $(this).attr("id");
			iconMarkerWidth[id] = width;
		});
		$("#markerAppendDiv").find("img").each(function(index, element) {
			var id = $(this).attr("id");
			if(iconMarkerWidth[id] == 0){
				blankVal = blankVal + 1;
			}
		});
		if(blankVal == 0){
			clearInterval(checkMarkerWidth);
			fncMapView();
			preLoader.remove();
			//console.log(iconMarkerWidth);
		}
	},100);
};



//맵뷰 화면
var goMapView = function(spotCategory){
	
	var path = $("#inpPath").val();
	var	spcExpCitySeq = $("#inpSeq").val();
	var	markerData=[];
	
	//맵뷰 마커 생성
	$.ajax({
		type:'POST',
		url:"/special/spotMapView.json",
		data:{"spcExpCitySeq":spcExpCitySeq , "spotCategory":spotCategory },
		async:true,
		success: function(resultMap){
			
		
		 
			var GoogleMap1 = {  
			    initialize : function() {  
					var	markers; // Marker Object를 담을 변수
					var infowindow = new google.maps.InfoWindow(); // infoWindow Object를 담을 변수
					var icoClass = "";
					var icoText = "";
					
					//구역리스트 
					$(resultMap.spcAreaList).each(function(index, el) {
						var subAreaBound = el.dmnStartXcoord+","+el.dmnEndXcoord+"|"+el.dmnStartYcoord+","+el.dmnEndYcoord;
						createOverlay(subAreaBound , el.dmnNm , map);  // setMap 함수로 기존 지도 위에 Polygon을 올려놓음
					});
					
					//마커데이터 (배열) 만들기
					$(resultMap.mapViewList).each(function(index, el) {
						if(el.spotCategory == "SPT016" || el.spotCategory =="SPT026"){
							icoClass = "hotelb";
							icoText = "Stay";
						}else if(el.spotCategory == "SPT017"){
							icoClass = "fnbb";
							icoText = "Food & Beverage";
						}else if(el.spotCategory == "SPT018"){
							icoClass = "cultureb";
							icoText = "Culture";
						}if(el.spotCategory == "SPT019"){
							icoClass = "shopb";
							icoText = "Shopping";
						}/*else if( el.spotCategory =="SPT026"){
							icoClass = "hotelb";
							icoText = "Stay";
							
							
						}*/
						
						markerData.push({
							seq : "icoMarkerSeq"+ el.seq,
							lat: el.xcoord , 
							lng: el.ycoord ,
							name: el.korNm ,
							type: el.spotCategory,
							icon: path+el.markerImg ,
							info: "<div class=\"pick_view\"><div class=\"m_cont\"><img class=\"pic\" src=\"" + path+el.mapThumImg + "\" alt=\"" + el.korNm + "\" 의 상세 이미지\" width=\"180\" height=\"120\" /><div class=\"info\"><div class=\"cate\"><span class=\"ico_guide " + icoClass + "\"><em class=\"blind\">" + icoText + "</em></span></div><strong><a href=\"#\" onclick=\"goSpotView('"+ spcExpCitySeq +"','"+ el.seq +"','"+ el.spotCategory +"');return false;\">" + el.korNm + "</a></strong><p class=\"txt\">" + el.addr + "</p><p>" + el.loca + "</p></div></div></div>"
						});
						
					});
					
					//데이터 정보로 마커찍기
					markers = markerData;
					//마커생성 for문
					for (index in markers) addMarker(markers[index],index);
					
					
					//마커생성
					function addMarker(data,index) {
						//console.log(data.icon)
						var icon_img = document.createElement('img');
						icon_img.src = data.icon;
						//마커 이미지 사이즈 구하기
				        //var icon_width = icon_img.width;
				        var icon_width = iconMarkerWidth[data.seq];
						//console.log(data.name);
						//console.log(icon_width);
						//아이콘과 텍스트가 있는 마커
						var markerImage = new google.maps.MarkerImage( data.icon, new google.maps.Size(icon_width, 55 ), new google.maps.Point(0, 0), new google.maps.Point(icon_width-15, 48) );
						var marker = new google.maps.Marker({
							position: new google.maps.LatLng(data.lat, data.lng) ,
							map: map ,
							icon : markerImage,//data.icon ,
							title: data.name
						});
						
						//image URL
						var iconMarker = "";
						if (data.type == "SPT016" ) iconMarker = "/images/front/travel/special/ico_marker_stay_s.png";
						if (data.type == "SPT017") iconMarker = "/images/front/travel/special/ico_marker_food_s.png";
						if (data.type == "SPT018") iconMarker = "/images/front/travel/special/ico_marker_culture_s.png";
						if (data.type == "SPT019") iconMarker = "/images/front/travel/special/ico_marker_shopping_s.png";
						if (data.type == "SPT026") iconMarker = "/images/front/travel/special/ico_marker_stay_s.png";
						//아이콘만 있는 마커
						var markerImage2 = new google.maps.MarkerImage( iconMarker, new google.maps.Size(30, 39), new google.maps.Point(0, 0), new google.maps.Point(25, 50) );
						var marker2 = new google.maps.Marker({
							position: new google.maps.LatLng(data.lat, data.lng) ,
							map: map ,
							icon : markerImage2,//iconMarker,
							title: data.name
						});
						
						//줌 조절 할때마다 줌 체크
						var zoomLevel = map.getZoom();
                        if ( (zoomLevel >=14) ){
                        	marker.setMap(map);
                        	marker2.setMap(null);
                        } else {
                        	marker.setMap(null);
                        	marker2.setMap(map);
                        }
                        google.maps.event.addListener(map, 'zoom_changed', function() {
	                        var zoomLevel =map.getZoom();
	                        if ( (zoomLevel >=14) ){
	                        	marker.setMap(map);
	                        	marker2.setMap(null);
	                        } else {
	                        	marker.setMap(null);
	                        	marker2.setMap(map);
	                        }
	                        if ( (zoomLevel == 1) ){
                    			map.setZoom(2);
                    		}
	                    });
                        
						//말풍선 정보와 이벤트
						google.maps.event.addListener(marker, "click", function() {
							infowindow.close();	//infowindow를 모두 닫는다.
							infowindow = new InfoBox({ content: markerData[index].info,disableAutoPan: false ,maxWidth: 0 ,pixelOffset: new google.maps.Size( -188, -236) ,zIndex: null ,closeBoxURL: "/images/front/travel/common/btn_google_map_close.gif" ,infoBoxClearance: new google.maps.Size(-100, -100) ,isHidden: false ,pane: "floatPane" ,enableEventPropagation: false });
							infowindow.open(map,marker);
						});
						google.maps.event.addListener(marker2, "click", function() {
							infowindow.close();	//infowindow를 모두 닫는다.
							infowindow = new InfoBox({ content: markerData[index].info,disableAutoPan: false ,maxWidth: 0 ,pixelOffset: new google.maps.Size( -188, -236) ,zIndex: null ,closeBoxURL: "/images/front/travel/common/btn_google_map_close.gif" ,infoBoxClearance: new google.maps.Size(-100, -100) ,isHidden: false ,pane: "floatPane" ,enableEventPropagation: false });
							infowindow.open(map,marker);
						});
					}
					
					var bounds = new google.maps.LatLngBounds();
					
					for (index in markers) {
						var data = markers[index];
						bounds.extend(new google.maps.LatLng(data.lat, data.lng));
					}
				}
			};
		    GoogleMap1.initialize();
		}
	});
};

//상세페이지 호출
var goSpotView = function(spcExpCitySeq, seq, spotCategory, $focus){
	var path = $("#inpPath").val(); //업로드경로
	$("#inpSpotSeq").val(seq); // 게시물순번
	//$("#inpSpotCategory").val(spotCategory); //카테고리
  
	
	
	//상세데이터
	$.ajax({
		type:'POST',
		url:"/special/spotView.json",
		data:{"spcExpCitySeq":spcExpCitySeq , "seq":seq , "spotCategory":spotCategory},
		async:true,
		success: function(data){
		
			
			if(data.houseType != null){
		    	spotCategory="SPT026";
		    }
			$("#inpSpotCategory").val(spotCategory); //카테고리
		
			var category = "";
			var snsCategory = "";
			var hmpg = "";
			
			if(spotCategory == "SPT016" || spotCategory=="SPT026"){
				category = "stay";
				snsCategory = "Stay";
			}else if(spotCategory == "SPT017"){
				category = "food";
				snsCategory = "F&B";
			}else if(spotCategory == "SPT018"){
				category = "culture";
				snsCategory = "Culture";
			}else if(spotCategory == "SPT019"){
				category = "shopping";
				snsCategory = "Shopping";
			}/*else if(spotCategory=="SPT026"){
				category = "stay";
				snsCategory = "Stay";
				
			}*/
			//모달레이어 스크롤탑으로 이동
			setTimeout(function(){
				if($.browser.msie){
					var target = "html";
				}else if($.browser.mozilla){
					var target = "body,html";
				}
				$(target).animate({scrollTop:0},1);
				$('.modal_window').animate({scrollTop:0},10);	
			},200);
			
			//미니맵 생성
			$("#inpXcoord").val(data.xcoord);
			$("#inpYcoord").val(data.ycoord);
			//
			var miniMap = {  
			    initialize : function() {  
			       this.input = document.getElementById("GoogleMap_input");  
			       this.address = document.getElementById("GoogleMap_addr");  
			       this.geocoder = new google.maps.Geocoder();  
			       this.infowindow = new google.maps.InfoWindow();  
			            
			       var xcoord = $("#inpXcoord").val();
			       var ycoord = $("#inpYcoord").val();
			       
			       //지도 생성.(위치 DATA뿌리기)  
			       var latlng = new google.maps.LatLng(xcoord,ycoord);
			       var myOptions = {  
			           zoom: 15, 
			           center: latlng,
			           panControl: false,	//로드뷰기능
			           zoomControl: false,
			           mapTypeId: google.maps.MapTypeId.ROADMAP
			       };  
			       minimap = new google.maps.Map(document.getElementById("miniMap"),myOptions);  
			            
			       //마커 생성.  
			       this.marker = new google.maps.Marker({  
			           position : latlng,
			    	   map : minimap,
			    	   icon : '/images/front/travel/special/ico_marker_'+category+'.png'
			       });
			   }
			};
			miniMap.initialize();
			
			//div하위요소 초기화
			$("#divTitleImgHtml").empty();
			$("#divRating").empty();
			$("#divInfo").empty();
			$("#divContent").empty();
			
			/** titleImg Start */
			var titleImgHtml = "";
				titleImgHtml += "<h2><img src=\"/images/front/travel/special/ico_big_" + category + ".gif\" alt=\"" + category + "\" /><img class=\"name\" src=\"" + path + data.dtlTtlImg + "\" alt=\""+ data.korNm +"\" /></h2>";
				$("#divTitleImgHtml").html(titleImgHtml);
			/** titleImg End */
				
			/** rating Start */
			var ratHtml = "";
				ratHtml += "<dt><img src=\"/images/front/travel/special/txt_dt_awarness.gif\" alt=\"awarness\" /></dt>";
				ratHtml += "<dd><span class=\"rate"+ data.awarness +"\"><img src=\"/images/front/travel/special/bg_rate.gif\" alt=\"3점 만점에 "+ data.awarness +"점\" /></span></dd>";
				ratHtml += "<dt><img src=\"/images/front/travel/special/txt_dt_uniqueness.gif\" alt=\"uniqueness\" /></dt>";
				ratHtml += "<dd><span class=\"rate" + data.uniqueness + "\"><img src=\"/images/front/travel/special/bg_rate.gif\" alt=\"3점 만점에 " + data.uniqueness + "점\" /></span></dd>";
				ratHtml += "<dt class=\"last\"><img src=\"/images/front/travel/special/txt_dt_price.gif\" alt=\"price\" /></dt>";
				ratHtml += "<dd class=\"last\"><span class=\"rate" + data.price + "\"><img src=\"/images/front/travel/special/bg_rate.gif\" alt=\"3점 만점에 " + data.price + "점\" /></span></dd>";
				$("#divRating").html(ratHtml);
			/** rating End */
			
			/** info Start */
			/*//링크 url변경
			if(data.hmpg != null){
				if((data.hmpg).substring(0,7) != "http://"){
					hmpg = "http://"+data.hmpg;
				}else{
					hmpg = data.hmpg;
				}
			}*/
			
			var infoHtml = "";
				infoHtml += "<ul class=\"info1\">";
				if(data.loca != null){
					infoHtml += "<li><span>장소</span>"+ data.loca +"</li>";
				}
				if(data.addr != null){
					infoHtml += "<li><span>주소</span>"+ data.addr +"</li>";
				}
				if(data.telno != null){
					infoHtml += "<li><span>전화번호</span>Tel. "+ data.telno +"</li>";
				}
				if(data.hmpg != null){
					infoHtml += "<li><span>홈페이지</span><a href=\""+ hmpg +"\" target=\"_blank\" title=\"업소명 홈페이지 바로가기\">"+ data.hmpg +"</a></li>";
				}
				infoHtml += "</ul>";
				infoHtml += "<dl class=\"info2\">";
				if(data.opertm != null){
					infoHtml += "<dt class=\"time\"><img src=\"/images/front/travel/special/ico_time.gif\" title=\"영업시간\" /></dt>";
					infoHtml += "<dd>"+ data.opertm +"</dd>";
				}
				if(data.hldy != null){
					if(category == "stay"){
						infoHtml += "<dt><img src=\"/images/front/travel/special/ico_check.gif\" title=\"체크인/체크아웃\" /></dt>";
					}else{
						infoHtml += "<dt class=\"off\"><img src=\"/images/front/travel/special/ico_close.gif\" title=\"휴무일\" /></dt>";
					}
					infoHtml += "<dd>"+ data.hldy +"</dd>";
				}
				if(data.crcdYn != null){
					infoHtml += "<dt class=\"credit\"><img src=\"/images/front/travel/special/ico_credit.gif\" title=\"신용카드 사용여부\" /></dt>";
					infoHtml += "<dd>신용카드 "+ data.crcdYn +"</dd>";
				}
				
				var facebookTitle = "현대카드 Picks - " + data.cityNm + " ["+snsCategory+": "+ data.korNm +"]";
				var twitterTitle = "현대카드 Picks - " + data.cityNm + " ["+snsCategory+": "+ data.korNm +"]";

				infoHtml += "</dl>";
				infoHtml += "<ul class=\"share\">";
				infoHtml += "<li class=\"print\"><div class=\"help_text\"><a href=\"#\" onclick=\"print('" + spcExpCitySeq + "','" + seq + "','" + spotCategory + "');return false;\"><em class=\"blind\">인쇄하기</em></a><div class=\"tip_box\"><div class=\"tip\" style=\"width:45px;\"><p>인쇄하기</p><span class=\"bot\"></span></div></div></div></li>";
				infoHtml += "<li class=\"email\"><div class=\"help_text\"><a href=\"#\" onclick=\"sendMail();return false;\"><em class=\"blind\">이메일 보내기</em></a><div class=\"tip_box\"><div class=\"tip\" style=\"width:70px;\"><p>이메일 보내기</p><span class=\"bot\"></span></div></div></div></li>";
				/**
				페이스북 오류로 인해 주석처리 2013-12-20 ks.kim
				infoHtml += "<li class=\"facebook\"><div class=\"help_text\"><a href=\"#\" onclick=\"facebook('" + data.spotSeq + "','" + spotCategory + "','현대카드 PRIVIA여행 | " + facebookTitle + "');return false;\"><em class=\"blind\">페이스북으로 공유하기</em></a><div class=\"tip_box\"><div class=\"tip\" style=\"width:104px;\"><p>Facebook 공유하기</p><span class=\"bot\"></span></div></div></div></li>";
				 */
				infoHtml += "<li class=\"twitter\"><div class=\"help_text\"><a href=\"#\" onclick=\"twitter('" + data.spotSeq + "','" + spotCategory + "','" + twitterTitle + "');return false;\"><em class=\"blind\">트위터로 공유하기</em></a><div class=\"tip_box\"><div class=\"tip\" style=\"width:87px;\"><p>Twitter 공유하기</p><span class=\"bot\"></span></div></div></div></li>";
				//infoHtml += "<li class=\"print\"><div class=\"help_text\"><a href=\"#\" onclick=\"print('" + spcExpCitySeq + "','" + seq + "','" + spotCategory + "');return false;\"><em class=\"blind\">인쇄하기</em></a><div class=\"tip_box\"><div class=\"tip\" style=\"width:45px;\"><p>인쇄하기</p><span class=\"bot\"></span></div></div></div></li>";
				//infoHtml += "<li class=\"email\"><div class=\"help_text\"><a href=\"#\" onclick=\"sendMail();return false;\"><em class=\"blind\">이메일 보내기</em></a><div class=\"tip_box\"><div class=\"tip\" style=\"width:70px;\"><p>이메일 보내기</p><span class=\"bot\"></span></div></div></div></li>";
				//infoHtml += "<li class=\"facebook\"><div class=\"help_text\"><a href=\"#\" onclick=\"facebook('" + data.spotSeq + "','" + spotCategory + "','현대카드 PRIVIA여행 | " + facebookTitle + "');return false;\"><em class=\"blind\">페이스북으로 공유하기</em></a><div class=\"tip_box\"><div class=\"tip\" style=\"width:104px;\"><p>Facebook 공유하기</p><span class=\"bot\"></span></div></div></div></li>";
				//infoHtml += "<li class=\"twitter\"><div class=\"help_text\"><a href=\"#\" onclick=\"twitter('" + data.spotSeq + "','" + spotCategory + "','" + twitterTitle + "');return false;\"><em class=\"blind\">트위터로 공유하기</em></a><div class=\"tip_box\"><div class=\"tip\" style=\"width:87px;\"><p>Twitter 공유하기</p><span class=\"bot\"></span></div></div></div></li>";
				infoHtml += "</ul>"; 
				$("#divInfo").html(infoHtml);
			/** info End */
			
			/** content Start */
			var contentHtml = "";
				contentHtml += "<p class=\"title\"><img src=\""+ path + data.kywrdImg +"\" alt=\"" + data.kywrdImgAlt + "\" /></p>";
				if(data.dtlindt != null){
					contentHtml += "<p class=\"text\">" + data.dtlindt + "</p>";
				}
				$("#divContent").html(contentHtml);
			/** content End */
			
			//Spot 예약정보 데이터 Set
			$("#spotNo", $("#bookingFrm2")).val(seq);
			$("#city", $("#bookingFrm2")).val(spcExpCitySeq);
			$("#category", $("#bookingFrm2")).val(spotCategory);
			$("#entpnmEng", $("#bookingFrm2")).val(data.engNm);
			$("#entpnmKor", $("#bookingFrm2")).val(data.korNm);
			$("#acceptAmt", $("#bookingFrm2")).val(data.acceptAmt);
			
			//My Travel 예약정보 데이터 Set
			$("#spotNo", $("#bookingFrm")).val(seq);
			$("#city", $("#bookingFrm")).val(spcExpCitySeq);
			$("#category", $("#bookingFrm")).val(spotCategory);
			$("#entpnmEng", $("#bookingFrm")).val(data.engNm);
			$("#entpnmKor", $("#bookingFrm")).val(data.korNm);
			$("#acceptAmt", $("#bookingFrm")).val(data.acceptAmt);
			
			$(".picks-htl").hide();
			$(".reserve").hide();
			$(".info_reserve").hide();
			$(".inq").hide();
			
			
			//stay : '룸타입별가격' 버튼 노출
			if(spotCategory == "SPT016"){
				
				//$(".picks-htl").show();
				$("#cityCode").val(data.htlCtCode);
				$("#hciHsspHtlCode").val(data.hotelCd);
				$("#hciHsspHtlName").val(data.korNm);
				$("#hciNameLcl").val(data.korNm);
				$("#checkin").val(data.checkin_date);
				$("#checkout").val(data.checkout_date);
				$(".airbnbReserveArea").hide();
				
				if($("#hciHsspHtlCode").val() == ""){
					
					$(".reserve").show();
					$(".picks-htl").hide();
					$("#airbnbbtn").hide();
					$(".airbnbReserveArea").hide();
				}else{
					
					$(".picks-htl").show();
					$(".reserve").hide();
					$("#airbnbbtn").hide();
					$(".airbnbReserveArea").hide();
				}
				
				
						
			//food&beverage : '예약대행 신청하기' 버튼노출
			}else if(spotCategory == "SPT017"){
				if(data.commDivn != "N"){
					$(".inq").show();
					
				}
			
			//airbnb
			}else if(spotCategory == "SPT026"){
				var YN="";
				var memberId=$("#memberId").val();
				$(".reserve").show();
				
				
				//쿠폰다운받기 버튼 노출여부
				$.ajax({
					type:'POST',
					url:"/special/couponBtn.json",
					data:{},
					async:false,
					success: function(result){
						YN=result;
					}
				});
				
			   	
				
				//기타에 입력된 정보 없을떄
				if(data.etc == null){
					data.etc="";
				}
				
				
				var airbnb_info="";
				airbnb_info+="<div id=\"airbnbArea\">";
				airbnb_info+="<form action=\"/special/codeDown2\" target=\"coupon\" method=\"post\" id=\"coupon\" >";
				airbnb_info+="<input type=\"hidden\" value="+seq+" id=\"searchLocation\" name=\"searchLocation\">";
				airbnb_info+="<input type=\"hidden\" value="+memberId+" id=\"searchIssuer\" name=\"searchIssuer\">";
				airbnb_info+="</form>";
				airbnb_info+="</br>";
				airbnb_info+="<div class=\"tbl_bnb\">";
				airbnb_info+="<h3><img src=\"/images/front/travel/special/h3_geksil.gif\" alt=\"객실안내\" /></h3>";
				airbnb_info+="<table summary=\"이 표는 객실안내의 표로써, 집유형, 침실, 객실유형, 침대 수, 숙박가능인원, 화장실 수, 기타 등으로 구성되어 있습니다.\" class=\"list_row\">";
				airbnb_info+="<caption>객실안내</caption><colgroup><col width=\"100\"><col width=\"260\"><col width=\"100\"><col width=\"*\"></colgroup>";
				airbnb_info+="<tbody>";
				airbnb_info+="<tr>";
				airbnb_info+="<th scope=\"row\"><img src=\"/images/front/travel/special/txt_th_type_house.gif\" alt=\"집유형\"></th><td><p>"+data.houseType+"</p></td>";
				airbnb_info+="<th scope="+'row'+"><img src=\"/images/front/travel/special/txt_th_chimsil.gif\" alt=\"침실\"></th><td><p>"+data.bedroomCnt+"</p></td>";
				airbnb_info+="</tr>";
				airbnb_info+="<tr>";
				airbnb_info+="<th scope="+'row'+"><img src=\"/images/front/travel/special/txt_th_type_room.gif\" alt=\"침실유형\"></th><td><p>"+data.roomType+"</p></td>";
				airbnb_info+="<th scope="+'row'+"><img src=\"/images/front/travel/special/txt_th_chimdesoo.gif\" alt=\"침대 수\"></th><td><p>"+data.bedCnt+"</p></td>";
				airbnb_info+="</tr>";
				airbnb_info+="<tr>";
				airbnb_info+="<th scope="+'row'+"><img src=\"/images/front/travel/special/txt_th_pos_man.gif\" alt=\"숙박가능인원\"></th><td><p>"+data.guestCnt+"</p></td>";
				airbnb_info+="<th scope="+'row'+"><img src=\"/images/front/travel/special/txt_th_bathroomsoo.gif\" alt=\"화장실 수\"></th><td><p>"+data.bathroomCnt+"</p></td>";
				airbnb_info+="</tr>";
				airbnb_info+="<tr>";
               	airbnb_info+="<th scope="+'row'+"><img src=\"/images/front/travel/special/txt_th_gita.gif\" alt=\"기타\"></th><td colspan=\"3\"><p>"+data.etc+"</p></td>";
               	airbnb_info+="</tr>";
				airbnb_info+="</tbody>";
				airbnb_info+="</table></br></br>";
				airbnb_info+="<div class=\"booking\"><div class=\"btn\" style=\"border-bottom:none;\">";
				if( YN == "Y"){
				 airbnb_info+="<input type=\"image\" src=\"/images/front/travel/special/btn_halincode.gif\" alt=\"10% 할인코드 다운로드\" onclick=\"codeDown();\"> ";
				}
				airbnb_info+="<input type=\"image\" src=\"/images/front/travel/special/btn_yeyak_1.gif\" alt=\"예약\" onclick=\"pageUrl(HmgUrl)\";></div></div><div>";
				
                airbnb_info+="<div class=\"bnb_list\">";
				
				airbnb_info+="<h3><img src=\"/images/front/travel/special/h3_iyonganne.gif\" alt=\"이용안내\"/></h3>";
				airbnb_info+="<ul><li><img src=\"/images/front/travel/special/txt_bnb1.gif\" alt=\"PRIVIA는 airbnb(에어비앤비)와의 제휴를 통해 회원님께 특별한 여행의 혜택을 드리고자, 에어비앤비 홈페이지에서 현대카드로 결제 시 사용할 수 있는 10% 할인쿠폰을 제공합니다.\" /></li>";
				airbnb_info+="<li><img src=\"/images/front/travel/special/txt_bnb2.gif\" alt=\"에어비앤비 공식 이용방법에 따라, 에어비앤비 홈페이지 방문 > 회원가입 > 숙소 검색 > 호스트와 연락 > 예약 및 결제하기 순으로 진행합니다.\" usemap=\"#Map\" border=\"0\" />";
				airbnb_info+="<map name=\"Map\" id=\"Map\"><area shape=\"rect\" coords=\"162,1,251,11\" href=\"http://www.airbnb.co.kr\" target=\"_blank\" />";
				airbnb_info+="<li><img src=\"/images/front/travel/special/txt_bnb3.gif\" alt=\"PRIVIA 홈페이지에서 발급받은 쿠폰번호는 에어비엔비 홈페이지 내 결제 시 결제단계 화면 우측영역(금액 합계 노출 영역)에 있는 ‘할인권 코드’ 클릭 후 나타나는 입력창에 기재하시고 적용버튼 클릭하시면 10% 할인된 합계 금액으로 결제하실 수 있습니다.\" usemap=\"#Map2\" border=\"0\" /></map></li>";
				airbnb_info+="<map name=\"Map2\" id=\"Map2\"><area shape=\"rect\" coords=\"11,1,191,12\" href=\"https://www.airbnb.co.kr/help/question/160\" target=\"_blank\" /></map></li>";
				airbnb_info+="<li><img src=\"/images/front/travel/special/txt_bnb4.gif\" alt=\"할인쿠폰 번호 입력 후 현대카드가 아닌 다른 카드 정보를 기재하여 결제하시는 경우 10% 할인금액 적용을 받으실 수 없습니다.\" /></li>";
				airbnb_info+="<li><img src=\"/images/front/travel/special/txt_bnb5.gif\" alt=\"예약 신청 후 쿠폰 번호 및 결제 정보를 입력하더라도 호스트가 예약 요청을 최종 수락 시에만 금액이 청구되며, 호스트가 예약 신청을 철회, 거절하거나 24시간의 호스트 응답시간이 만료되면 카드 승인이 취소되고, 승인된 금액을 환불 받을 수 있습니다.\"/></li>";	
				airbnb_info+="<li><img src=\"/images/front/travel/special/txt_bnb6.gif\" alt=\"체크인 후 24시간까지는 숙박 대금이 호스트에게 전달되지 않습니다. 따라서 예약한 숙소가 제공받은 정보와 실제로 동일하지 않은 경우, 게스트 보호 정책에 따라 숙박 대금을 환불 받을 수 있습니다. 자세한 사항은 에어비앤비 게스트 환불 정책을 확인해 주십시오.\" usemap=\"#Map3\" border=\"0\" /></map></li>";
				airbnb_info+="<map name=\"Map3\" id=\"Map3\"><area shape=\"rect\" coords=\"231,18,360,29\" href=\"https://www.airbnb.co.kr/home/cancellation_policies\" target=\"_blank\"/>";
				airbnb_info+="<li><img src=\"/images/front/travel/special/txt_bnb7.gif\" alt=\"보다 자세한 이용방법을 원하시면, 에어비앤비 홈페이지 고객센터를 참고해 주십시오. 전화 상담도 가능합니다.\" usemap=\"#Map4\" border=\"0\" />";
				airbnb_info+="<map name=\"Map4\" id=\"Map4\"><area shape=\"rect\" coords=\"158,2,295,11\" href=\"http://www.airbnb.co.kr/help\" target=\"_blank\" /></map></li></ul></div>";
				
				
				$("#airbnbReserveArea").html(airbnb_info); 
		    }
			
			//메일전송 내용
			$("#emailContent").text("["+ snsCategory +"] "+data.korNm+" "+data.engNm);
			$("#inpSpotContent").val(data.dtlindt);
			$("#inpBtnLink").val("/special/main?seq=" + spcExpCitySeq + "&spotSeq=" + seq + "&spotCategory=" + spotCategory);
			$("#inpEmailContent").val("["+ snsCategory +"] "+data.korNm+" "+data.engNm);
		}
	});
	
	//상단이미지
	$.ajax({
		type:'POST',
		url:"/special/spotUpImgList.json",
		data:{"spcExpCitySeq":spcExpCitySeq , "seq":seq , "spotCategory":spotCategory},
		async:true,
		success: function(data){
			$("#divUpImg").empty();
			var upImgHtml ="";
			if(data.length > 0){
				$(data).each(function(index, el) {
					upImgHtml += "<div class=\"img\"><img src=\"" + path + el.upImgPath + "\" alt=\""+ el.dtlDesc +"사진\" style=\"width:100%\"/><p class=\"desc\">" + el.dtlDesc + "</p></div>";
				});
				$("#divUpImg").append(upImgHtml);
			}
		}
	});
	
	//하단이미지
	$.ajax({
		type:'POST',
		url:"/special/spotDownImgList.json",
		data:{"spcExpCitySeq":spcExpCitySeq , "seq":seq , "spotCategory":spotCategory},
		async:true,
		success: function(data){
			$("#divDownImg").empty();
			var downHtml = "<div class=\"img img_min\"><img src=\"" + path + data.downImgPath + "\" alt=\""+data.dtlDesc+" 사진\" style=\"width:410px; height:300px\"/><p class=\"desc\">" + data.dtlDesc + "</p></div>";
			$("#divDownImg").append(downHtml);
		}
	});
	
	//layer 호출
	openDateCheck(0);
	dimmLayerPop('layerPopPicksView', 1, $focus);
};

//20131230 체크인아웃 날짜 선택
var openDateCheck = function(n){
	var div = $("#checkDateDiv");
	if(n == 1){
		div.show();
	}else{
		div.hide();
		$("#checkDateBtn").attr("onclick","addCartPicks()");
		$("#checkDateBtn").focus();
		$("#dateCheckin").val("");
		$("#dateCheckout").val("");
	}
};

//장바구니 담기 이벤트
var addCartPicks = function(returnVal, nextEvent){
	
	var spcExpCitySeq = $("#inpSeq").val(),
		cityNm = $("#inpCityNm").val(),
		spotSeq = $("#inpSpotSeq").val(),
		spotCategory = $("#inpSpotCategory").val(),
		returnType = returnVal,
		rservSts = "N",
		dptDate = "",
		arvDate = "",
		totalpersons = "";

	
	//20131230 추가 - 체크인 체크아웃 날짜 선택
	if(spotCategory == "SPT016"){
		
		if($("#checkDateDiv").is(":hidden")){
			$("#checkDateBtn").attr("onclick","");
			openDateCheck(1);
			return;
		}
		if($("#dateCheckin").val() == "" || $("#dateCheckout").val() == ""){
			alert("체크인,체크아웃 날짜를 선택해주세요");
			//$("#dateCheckin").focus();
		}else{
			dptDate = $("#dateCheckin").val().replace(/\//g,"")+'120000';
			arvDate = $("#dateCheckout").val().replace(/\//g,"")+'120000';
		}
	}
	
	//예약신청 후 담겨지는 상품(F&B)일 경우
	if(returnType == "rservHome"){
		rservSts = "Y";		//예약상태 변경(예약전->예약요청)
//		var mkusTm1 = $("#mkusTm1").val();
		var mkusTm2 = $("#mkusTm2").val();
//		if(mkusTm1 == "오후"){
//			if(mkusTm2 == "12"){
//				mkusTm2 = "24";
//			}else if(mkusTm2 == "00"){
//				mkusTm2 = "12";
//			}else{
//				mkusTm2 = (parseInt(mkusTm2)+12)+"";
//			}
//		}
		dptDate = parseInt($("#rservHopeDd").val().replace(/\//g,"") + mkusTm2 + $("#mkusTm3").val());
		totalpersons = parseInt($("#mkusPnumAdl").val()) + parseInt($("#mkusPnumBaby").val());
	}
	
	$.ajax({
		
		type:'POST',
		url:"/special/addCartPicks.json",
		data:{"spcExpCitySeq":spcExpCitySeq
			, "cityNm":cityNm
			, "spotSeq":spotSeq
			, "spotCategory":spotCategory
			, "rservSts":rservSts
			, "dptDate":dptDate
			, "arvDate":arvDate
			, "totalpersons":totalpersons },
		async:true,
		success: function(data){
		
			if(data > 0){
				reload();
				if(returnType == "rservHome"){
					if(nextEvent == "dimmClose"){
						dimmLayerPop('layerPopPicksView',0);
					} else {
						location.href = "/mypage/special/list";	
					}
				}else{
					if(spotCategory == "SPT016"){
						openDateCheck(0); //20131230 체크인아웃 날짜 선택창 닫고 초기화
						$("#checkDateBtn").attr("onclick","addCartPicks()");
					}
					return false;
				}
			}
		},
		error : function(){
			alert("상품담기 중 오류가 발생했습니다.");
		}
	});
};

//쿠폰 다운
var codeDown=function(){
	$.ajax({
		type:'POST',
		url:"/special/codeDown.json",
		data:{"searchLocation":$("#searchLocation").val() , "searchIssuer":$("#searchIssuer").val()},
	    async:true,
		success: function(data){
			  
			
			    var status=data.issued;
			     
			    if( status == "issued"){
			  	  $("#code").text('10% 할인 코드가 발급되었습니다.');
			    }else if(status == "not_issued"){
			  	  $("#code").text('이미 발급 받으신 코드가 존재합니다.');
			    }else if(status == "period"){
			  	  $("#code").text('현재 발급 기간이 아닙니다.');
			    }else if(status == "notUse"){
			  	  $("#code").text('당월은 사용이 중단되었습니다.');
			    }
			    
			   $("#couponNm").text(data.code);
			   $("#endDate").text(data.endDate);
			   
	        dimmLayerPop('layerPop06030'); return false;
		}
	});
	
};

// 호텔 상세 페이지 이동 URL 생성
var makeHtlDetailSearchURL = function(elementId) {
	var $form = $('#' + elementId);
	var params = '?roomSearchYn=Y';
	params += '&checkin_date=' + encodeURIComponent($form.find('input[name="checkin_date"]').val());
	params += '&checkout_date=' + encodeURIComponent($form.find('input[name="checkout_date"]').val());
	params += '&hsf_hssp_code=' + $form.find('input[name="hsf_hssp_code"]').val();
	params += '&hsf_hssp_htl_code=' + $form.find('input[name="hci_hssp_htl_code"]').val();
	return configHotelDetailSearchUrl + params;
}
	
//룸타입별 가격 버튼 클릭 시 
var openResev1 = function(){
	
	// #22903 #룸타입별 가격 클릭 시 상세 페이지로 이동
	window.open(makeHtlDetailSearchURL('frmRoom'), '_blank');
	return;
	
	// http://hotel.priviatravel.com/htl/bk/HtlDetailSearch.lts?roomSearchYn=Y&hsf_hssp_htl_code=331084&hsf_hssp_code=O
	var strHotelIframe = '<iframe id="frmRoomType" name="frmRoomType" title="룸타입별 가격 프레임" src="" height="500" width="720" style="background-color: #ffffff;" frameborder="0" marginheight="0" marginwidth="0" scrolling="no"></iframe>';
	
	$("#frmRoomType").remove();
	// IE 임시 스크롤링 처리
	if ( $.browser.msie  ) {
		 //$.browser.version
		strHotelIframe = '<iframe id="frmRoomType" name="frmRoomType" title="룸타입별 가격 프레임" src="" height="500" width="720" style="background-color: #ffffff;" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>';
	}
	$("#infoArea").append(strHotelIframe);
	
	var resevArea = $("#reservArea");
	//모달레이어 스크롤위치 신청폼으로 이동 09-12
	var TopHeight = 40 + $('#divTitleImgHtml').height() + 15 + $('.information').height() + 40 + $('#divContent').height() + 15 + 90;
	if(resevArea.hasClass("booking_closed") && !resevArea.is(":animated")){
		$("#frmRoom").attr({
			method : "post",
			target: "frmRoomType"
		}).submit();
		resevArea.stop().find("> div.info.info_room").slideDown("fast").end().removeClass("booking_closed");
		//모달레이어 스크롤위치 신청폼으로 이동 09-12 
		setTimeout(function(){
			$('.modal_window').animate({scrollTop:TopHeight},100);	
		},300);
	}else{
		resevArea.stop().find("> div.info.info_room").slideUp("fast",function(){
			resevArea.addClass("booking_closed");
			repositionThisPop('layerPopPicksView');
			//모달레이어
			setTimeout(function(){
				$('.modal_window').animate({scrollTop:0},100);	//최상단으로 초기화 해줘야한다.
			},200);
		});
	}
};

//예약하기 토글버튼
var toggleReseveGuide = function(){
	
	var spotcategory=$("#category", $("#bookingFrm2")).val(); 
	var div;
	if(spotcategory == "SPT026"){
		
		if($("#isLoginYn").val() == "false" || $("#isLoginYn").val() == "" ){
			alert("회원전용 서비스 입니다. 로그인 후 신청 가능합니다.");
			$("#returnUrl").val(location.href+"&spotSeq="+$("#inpSpotSeq").val()+"&spotCategory="+$("#inpSpotCategory").val());
			$("#frmNavi").attr({action : "bookingLoginCheck"}).submit();
			return false;
		}
		
		 div = $("#airbnbReserveArea");
		
	}else{
		 div = $("#infoReserveArea");
		
	}
	
	var resevArea = $("#reservArea"),
	btn = resevArea.find("a.reserve");
	div.slideToggle("fast");
	resevArea.toggleClass("booking_closed");
	
};


//예약대행 신청 버튼 클릭 시 
var openResev2 = function(){
	if($("#isLoginYn").val() == "false" || $("#isLoginYn").val() == "" ){
		alert("회원전용 서비스 입니다. 로그인 후 신청 가능합니다.");
		$("#returnUrl").val(location.href+"&spotSeq="+$("#inpSpotSeq").val()+"&spotCategory="+$("#inpSpotCategory").val());
		$("#frmNavi").attr({action : "bookingLoginCheck"}).submit();
		return false;
	}
	
	if($("#isLoginYnTravel").val() == ""){
		alert("회원전용 서비스 입니다. 로그인 후 신청 가능합니다.");
		$("#returnUrl").val(location.href+"&spotSeq="+$("#inpSpotSeq").val()+"&spotCategory="+$("#inpSpotCategory").val());
		$("#bookingFrm").attr({action : "/special/bookingLoginCheck"}).submit();
		return false;
	}
	
	var resevArea = $("#reservArea");
	if(resevArea.hasClass("booking_closed") && !resevArea.is(":animated")){
		var TopHeight = 90 + $('#divTitleImgHtml').height() + 15 + $('.information').outerHeight() + $('#divContent').outerHeight() + $("#reservArea").outerHeight();
		resevArea.stop().find("> div.info.booking").slideDown("fast").end().removeClass("booking_closed");
		//모달레이어 스크롤위치 신청폼으로 이동 09-12 
		setTimeout(function(){
			$('.modal_window').animate({scrollTop:TopHeight},100);	
		},300);
		//회원정보 셋팅
		authInfoSetting();
	}else{
		resevArea.stop().find("> div.info.booking").slideUp("fast",function(){
			resevArea.addClass("booking_closed");
			repositionThisPop('layerPopPicksView');
			//모달레이어
			setTimeout(function(){
				$('.modal_window').animate({scrollTop:0},100);	//최상단으로 초기화 해줘야한다.
			},200);	
		});
		//회원정보 클리어
		authInfoClear();
	}
};

//인쇄하기
var print = function (spcExpCitySeq, seq , spotCategory){
	window.open('/special/print?spcExpCitySeq='+spcExpCitySeq+'&spotSeq='+seq+'&spotCategory='+spotCategory,'현대카드Picks','scrollbars=yes,toolbar=yes,resizable=yes,width=795,height=1000,left=0,top=0');
};

//메일전송
var sendMail = function(){
	$("#toEmail1").val("");
	$("#toEmail2").val("");
	$("#selectEmail").val("");
	fakeselect.initialize();
	dimmLayerPop('layerPopSandEmail');return false;
};


var pageUrl=function(HmgUrl){

	
	window.open(HmgUrl);
}
//페이스북 퍼가기
var facebook = function(spotSeq, spotCategory, title){
	/**
	 * ShareUrl : 공유 링크
	 * title 	: 공유 제목
	 * content 	: 공유 내용 간략 설명
	 * DocImage : 공유 썸네일( 80x80 사이즈 추천 )
	*/
	var ShareUrl = location.href+"&spotSeq="+spotSeq+"&spotCategory="+spotCategory; //공유 주소 현재 페이지 또는 퍼갈 주소를 설정
	var content = $("#snsCopyContent").val();
	var DocImage = ConfigDocImage; 
	newwindow = window.open('http://www.facebook.com/sharer.php?s=100&p[url]='+encodeURIComponent(ShareUrl)+'&p[title]='+encodeURIComponent(title)+'&p[summary]='+encodeURIComponent(content)+'&p[images]='+encodeURIComponent(DocImage),'facebookpopup', 'toolbar=0, status=0, width=900, height=570');
	if (window.focus) {
		newwindow.focus();
	};
};

//트위터 퍼가기
var twitter = function(spotSeq, spotCategory, title){
	var from = " - 현대카드 PRIVIA 여행에서";
	var url = location.href+"&spotSeq="+spotSeq+"&spotCategory="+spotCategory; //공유 주소 현재 페이지 또는 퍼갈 주소를 설정
	//var href = "http://twitter.com/home?status=" + encodeURIComponent(title) + " " + encodeURIComponent(url) + encodeURIComponent(from);
	var href = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + " " + encodeURIComponent(url) + encodeURIComponent(from);
	var win = window.open(href, 'twitter', '');
	if (win){ 
	      win.focus();
	};
};