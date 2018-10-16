/***************************
 * @param in_s
 * @param in_e
 * @param limit
 * yang hyun min 2013-01-24
 ***************************/
 $(document).ready(function(){
	/*
	 var total = $('#mtg_tab').children().length;
	 var currentPage;
	//탭 메뉴 이벤트 생성
	setTravelGuideTabmenu();
	mtg_tab_click(0);
	function setTravelGuideTabmenu() {
		for ( var i = 0; i < total; i++ ){
			$( '#mtg_m' + (i+1) ).attr( "rel", i );
			$( '#mtg_m' + (i+1) ).click(function() {
				mtg_tab_click( $(this).attr('rel') );
			})
		}
		$('#tab_contents').css('position','relative');
		$('#tab_contents').children().css( 'position','absolute' );
	};
	//탭 메뉴 클릭 이벤트
	function mtg_tab_click( n ) {
		if ( currentPage == eval(n)+1 ) { return;}
		currentPage = eval(n)+1;
		for ( var i = 1; i < total+1; i++ ){
			if ( i == eval(n)+1 ) {
				$('#tab_con_'+i).css('top','0px');
			} else {
				$('#tab_con_'+i).css('top','-9999px');
			}
		}
		return false;
	}
	*/
	
	//요약정보에 삭제 클릭 이벤트
	setSection_1();
	function setSection_1() {
		$('#section_flight > .rect_flight > .btn_close, #section_hotel > .rect_hotel > .btn_close, #section_airtel > .rect_airtel > .btn_close, #section_pick > .rect_pick > .btn_close').click(function(){
			event_close(this);
			return false;
		});		
	}
	function event_close( obj ) {
		 
		console.log( obj.parentNode.className );
		//스텝1에 항목 지우는 것에 관한 얼렛 추가
		
		$(obj).parent().animate({ opacity: '0' }, 200, function() { 
			$(this).animate({ height: '0', padding: '0', margin: '0' }, 300, function() { 
				$(this).remove();
			});
		});
	}

})

 var mapData = [
                ]
//상세보기 클릭시 팝업 호출
