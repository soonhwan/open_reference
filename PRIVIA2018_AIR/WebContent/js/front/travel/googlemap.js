/***************************
 * @param in_s
 * @param in_e
 * @param limit
 * yang hyun min 2013-01-24
 ***************************/
var mapObj = [];
(function( $ ) {
$.widget("ui.drawPriviaMap", {
	//옵션 설정.
	options: { 
		data: null,
		coment:true,
		list: false,
		list_target:null,
		zoomLevel:null,
		isBounce:null,
		bounce_1:null,
		bounce_2:null,
		usePolygon:null,
		usePolygonTitle:null,
		pdfMode:null
	},
	//최초 실행 구문.
	_create: function() {
		//기본 변수 선언
		var self = this, o = this.options;
		var selectId = this.element.uniqueId().attr( "id" );
		this.target;
		//data 배열 선언
		this.data_name = [];//지명 정보
		this.data_lat = [];//위도 정보
		this.data_lng = [];//경보 정보
		this.data_detail = [];//상세 정보
		this.data_icon = [];//아이콘 url 정보
		this.data_image = [];//상세 이미지 정보
		this.data_icon_width = [];//아이콘 넓이값 정보
		this.data_icon_height = [];//아이콘 높이값 정보
		this.data_latlng = [];//위도경도 위치 오브젝트 생성 정보.
		this.data_address = [];//주소 정보
		$.each( o.data, function( key, val ) {
			self.data_name.push( self.dataAry( o.data[key], 'name' ) );
			self.data_lat.push( self.dataAry( o.data[key], 'lat' ) );
			self.data_lng.push( self.dataAry( o.data[key], 'lng' ) );
			self.data_detail.push( self.dataAry( o.data[key], 'detail' ) );
			self.data_icon.push( self.dataAry( o.data[key], 'icon' ) );
			self.data_image.push( self.dataAry( o.data[key], 'image' ) );
			self.data_icon_width.push( self.dataAry( o.data[key], 'iconWidth' ) );
			self.data_icon_height.push( self.dataAry( o.data[key], 'iconHeight' ) );
			self.data_address.push( self.dataAry( o.data[key], 'address' ) );
		});
		
		for ( var i = 0; i < self.data_icon.length; i++ ) {
			var latlng = new google.maps.LatLng(self.data_lat[i], self.data_lng[i]);
			self.data_latlng.push( latlng );
		}
		if ( o.zoomLevel != null ) {
			var myOptions = { zoom: o.zoomLevel, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP, panControl:false, mapTypeControl:false, zoomControl:true, zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT, style: google.maps.ZoomControlStyle.DEFAULT } };
		} else {
			var myOptions = { zoom: 12, center: latlng, mapTypeId: google.maps.MapTypeId.ROADMAP, panControl:false, mapTypeControl:false, zoomControl:true, zoomControlOptions: { position: google.maps.ControlPosition.TOP_RIGHT, style: google.maps.ZoomControlStyle.DEFAULT } };
		}
		
		var map = new google.maps.Map(document.getElementById(selectId), myOptions);
		google.maps.event.addListener(map, 'zoom_changed', function() {
			var zoomLevel = map.getZoom();
			if ( (zoomLevel == 1) ){
				map.setZoom(2);
			}
		});
		//////////////
		//mapObj = map;
		mapObj.push(map);
		///////////////
		self.target = map;
		var arrMarker = [];
		for( var i = 0; i < self.data_icon.length; i ++ ) {
			var markerImage = new google.maps.MarkerImage( self.data_icon[i], new google.maps.Size(500, 410 ), new google.maps.Point(0, 0), new google.maps.Point( self.data_icon_width[i], 42));
			var marker = new google.maps.Marker({
				position: self.data_latlng[i],
				map: map,
				icon:markerImage,
				title: self.data_name[i]});
			arrMarker.push(marker);
			if ( o.coment == true ) {
				google.maps.event.addListener(marker, 'click', function() {
					self.addMarker( this );
				});
			}
		}
		if ( o.list == true ) {
			google.maps.event.addListener ( map, 'idle', function () {
				var bounds = map.getBounds ();
				var arrContainMarker = [];
				for( var z = 0; z < arrMarker.length; z ++ ) {
					if( bounds.contains ( arrMarker[z].getPosition () ) == true ) {
						arrContainMarker.push( arrMarker[z] );
					}
				}
				$(o.list_target).find('> li').remove();
				for( var i = 0; i < arrContainMarker.length; i ++ ) {
					for ( var u = 0; u < self.data_name.length; u ++ ){
						if ( self.data_name[u] == arrContainMarker[i].getTitle() ) {
							var txt = arrContainMarker[i].getTitle();
							var tmp = txt.split("-");
							var txtCropNum = txt.replace(tmp[0] + '-',''); //기존 장소명 번호 split 처리 때문에 호텔명에 '-'가 들어갈 경우 잘리는 증상 수정
							if ( o.pdfMode == null ) {
								//o.list_target.append( '<li><div class="maplist_num"><span><img src="/images/front/travel/guide/guide_maplist_num'+(u+1)+'.gif" alt="'+(u+1)+'" /></span></div><dl class="map_spot"><dt>'+tmp[1]+'</dt><dd>'+self.data_address[u]+'</dd></dl></li>');
								o.list_target.append( '<li><div class="maplist_num"><span><img src="/images/front/travel/guide/guide_maplist_num'+(u+1)+'.gif" alt="'+(u+1)+'" /></span></div><dl class="map_spot"><dt>'+txtCropNum+'</dt><dd>'+self.data_address[u]+'</dd></dl></li>');
							} else {
								o.list_target.append( "<li><em>" + (u+1) +". "+ tmp[1] + "</em><br />"+self.data_address[u] + "</li>" );
							}
						}
					}
					
				}
			} );
		}
		
		//가져온 바운스 적용하기
		if ( o.isBounce == true ) {
			var temp1 = o.bounce_1;
			var tmp1 = temp1.split(",");
			   
			   var temp2 = o.bounce_2;
			   var tmp2 = temp2.split(",");
			   

			   map.panToBounds(new google.maps.LatLngBounds (
			   new google.maps.LatLng (tmp1[0], tmp1[1]), 
			   new google.maps.LatLng (tmp2[0], tmp2[1])
			   
			   ));
		}
		if ( o.usePolygon != null) {
			createOverlay( o.usePolygon, o.usePolygonTitle, map);
			//createOverlay( subAreaBound, title, map);
		};
		
/*
		var flightPlanCoordinates = [
	    new google.maps.LatLng(37.772323, -122.214897),
	    new google.maps.LatLng(21.291982, -157.821856),
	    new google.maps.LatLng(-18.142599, 178.431),
	    new google.maps.LatLng(-27.46758, 153.027892)
		  ];
		  var flightPath = new google.maps.Polyline({
		    path: flightPlanCoordinates,
		    strokeColor: "#FF0000",
		    strokeOpacity: 1.0,
		    strokeWeight: 20
		  });
		 
		  flightPath.setMap(map);
	  
	*/	
	},
	refresh: function() {
	},
	_init: function() {
	},
	destroy: function() {
	},
	dataAry: function( data, code ) {
		var item;		
		$.each( data, function( key, val ) {
			if ( key == code ) {
				item = val;
			}
		});
		return item;
	},
	
	addMarker: function( latlng ) {
		var self = this;
		var boxText = document.createElement("div-");
        boxText.innerHTML = '<div class="pick_view"><span class="t_cont"></span><span class="b_cont"></span><div class="m_cont"><img class="pic" src="'+self.data_image[ eval( latlng.__gm_id ) - 2 ]+'" alt="이미지" /><div class="info"><strong>'+self.data_name[ eval( latlng.__gm_id ) - 2 ]+'</strong><p>'+self.data_detail[ eval( latlng.__gm_id ) - 2 ]+'</p></div><a href="#" class="btn_view"><img src="/images/front/travel/special/btn_detail_view.gif" alt="상세보기"  onclick="mapPop(); return false;" /></a></div></div>';
        var myOptions = { content: boxText ,disableAutoPan: false ,maxWidth: 0 ,pixelOffset: new google.maps.Size( -395, -141) ,zIndex: null ,closeBoxURL: "/images/front/travel/special/btn_google_map_close.gif" ,infoBoxClearance: new google.maps.Size(1, 1) ,isHidden: false ,pane: "floatPane" ,enableEventPropagation: false };
        var ib = new InfoBox( myOptions );
        ib.open( self.target, latlng );
	}
})
})( jQuery );

function getZoomLevel(){
	return mapObj.zoom;
}
function getBounds(){
	return mapObj.getBounds();
}

//상세보기 클릭시 팝업 호출
function mapPop() {
	modalPopLayer( "39874398", "../popup_layer.html" );
	return false;
};