$(function(){
	
	$(['/images/front/travel/package/menu1_on.gif','/images/front/travel/package/menu2_on.gif','/images/front/travel/package/menu3_on.gif','/images/front/travel/package/menu4_on.gif','/images/front/travel/package/menu5_on.gif']).imgPreload();
	
	var current_menu_obj;
	window.getParameter=function(param) {
	    if (param)
	      var r="";
	    	  r=location.search.match(new RegExp("[&?]"+param+"=(.*?)(&|$)"));
	    return r&&r[1]?r[1]:null;
	  };
	 
	var pack_gnb_active=getParameter("currPage")-1;
	if ( pack_gnb_active != undefined && pack_gnb_active!=-1) {

		$('#header_wrap > #header #gnbPackage > ul > li:eq('+pack_gnb_active+')').find('img').attr('src', $('#header_wrap > #header #gnbPackage > ul > li:eq('+pack_gnb_active+')').find('img').attr('src').replace('_off', '_r_off') );
		$('#header_wrap > #header #gnbPackage > ul > li:eq('+pack_gnb_active+')').find('img.off').attr('src', $('#header_wrap > #header #gnbPackage > ul > li:eq('+pack_gnb_active+')').find('img.off').attr('src').replace('_off', '_on') );
	}
	
	//여행상품 검색
	$(".search_pack").toggle(function(){
		$(this).addClass("open");
		$("#searchTravel").show();
	}, function(){
		$(this).removeClass("open");
		$("#searchTravel").hide();
	});
	$('#gnbPackage > ul > li > a > img.off').hide();
	$('#gnbPackage > ul > li > a').bind('mouseover focus', function(){
		$('#gnbBanner').show();
		if( $(this).parent().hasClass('on') == true ){
			return;
		}
		//1뎁스 메뉴 이미지 활성화 (_on, _off) 및 배경 색
		packageGnb_reset();
		//리셋
		$('#gnbPackage > ul > li').css('background', '#fff');
		
		
		//1뎁스 활성화
		//$(this).find('> img').attr('src', $(this).find('> img').attr('src').replace('_off', '_on') );
		$(this).find('> img.on').hide();
		$(this).find('> img.off').show();
		$(this).parent().css('background', '#545454');
		
		$(this).parent().find('> ul').css('top' , '38px');
		current_menu_obj = $(this).parent().find('> ul');
		$(this).parent().css('background', '#545454');
		$(this).parent().find('> ul').show();
		$(this).parent().addClass('on');
		//$('.banner').show();
		$('#gnbBanner').css('top' , '185px');
		if ( $(this).parent().find('> ul').length == 0 ) {
			//$('.banner').hide();
			$('#gnbBanner').css('top' , '-9999px');
		}
		//높이값 계산
		$(this).parent().find('> ul').css('height', returnHeight( $(this).parent().find('> ul > li').length, 0, 0 ) );
		//2뎁 자동 활성화
		if ( $(this).parent().find('> ul > li').eq(0).find('ul > li').length == 0 ) {
			$(this).parent().find('> ul > li').eq(0).addClass('last');
		} else {
			$(this).parent().find('> ul > li').eq(0).addClass('on');
		}
		//3뎁 자동 활성화
		$(this).parent().find('> ul > li').eq(0).find('> ul').show();
		if ( $(this).parent().find('> ul > li').eq(0).find('> ul > li').eq(0).find('ul > li').length == 0 ) {
			$(this).parent().find('> ul > li').eq(0).find('> ul > li').eq(0).addClass('last');
		} else {
			$(this).parent().find('> ul > li').eq(0).find('> ul > li').eq(0).addClass('on');
		}
		//4뎁 자동 활성화
		$(this).parent().find('> ul > li').eq(0).find('> ul > li').eq(0).find('> ul').show();
		$(this).parent().find('> ul > li').eq(0).find('> ul > li').eq(0).find('> ul > li').eq(0).addClass('last');
		
	});
	//1뎁스 클릭
	$('#gnbPackage > ul > li > a').click(function(){
	});
	//2뎁스 오버
	$('#gnbPackage > ul > li > ul > li > a').bind('mouseover focus', function(){
		$('#gnbBanner').show();
		$('#gnbPackage > ul > li > ul > li > ul').hide();
		$('#gnbPackage > ul > li > ul > li > ul > li > ul').hide();
		$('#gnbPackage > ul > li > ul > li ').removeClass('on');
		$('#gnbPackage > ul > li > ul > li > ul > li').removeClass('on');
		$('#gnbPackage > ul > li > ul > li > ul > li > ul > li').removeClass('on');
		$('#gnbPackage > ul > li > ul > li ').removeClass('last');
		$('#gnbPackage > ul > li > ul > li > ul > li').removeClass('last');
		$('#gnbPackage > ul > li > ul > li > ul > li > ul > li').removeClass('last');
		//2뎁스 활성화
		$(this).parent().parent().css('top' , '38px');
		if ( $(this).parent().find('> ul > li').length == 0 ) {
			$(this).parent().addClass('last');
		} else {
			$(this).parent().addClass('on');
		}		
		$(this).parent().find('> ul').show();
		$(this).parent().find('> ul').css('top', '0px');
		//높이값 계산
		$(this).parent().parent().css('height', returnHeight( $(this).parent().parent().parent().find('> ul > li').length, $(this).parent().find('> ul > li').length, 0 ) );
	});
	//2뎁스 클릭
	$('#gnbPackage > ul > li > ul > li > a').click(function(){});
	//3뎁스 오버
	$('#gnbPackage > ul > li > ul > li > ul > li > a').bind('mouseover focus', function(){
		$('#gnbBanner').show();
		$('#gnbPackage > ul > li > ul > li > ul > li > ul').hide();
		$('#gnbPackage > ul > li > ul > li > ul > li').removeClass('on');
		$('#gnbPackage > ul > li > ul > li > ul > li > ul > li').removeClass('on');
		$('#gnbPackage > ul > li > ul > li > ul > li').removeClass('last');
		$('#gnbPackage > ul > li > ul > li > ul > li > ul > li').removeClass('last');
		//3뎁스 활성화
		//$(this).parent().parent().css('top' , '38px');
		if ( $(this).parent().find('> ul > li').length == 0 ) {
			$(this).parent().addClass('last');
		} else {
			$(this).parent().addClass('on');
		}
		$(this).parent().parent().parent().parent().css('top' , '38px');
		$(this).parent().find('> ul').show();
		//높이값 계산
		$(this).parent().parent().parent().parent().css('height', returnHeight( $(this).parent().parent().parent().parent().parent().find('> ul > li').length, $(this).parent().parent().parent().find('> ul > li').length, $(this).parent().find('> ul > li').length ) );
	});
	//3뎁스 클릭
	$('#gnbPackage > ul > li > ul > li > ul > li > a').click(function(){
	});
	
	//4뎁스 오버
	$('#gnbPackage > ul > li > ul > li > ul > li > ul > li > a').bind('mouseover focus', function(){
		$('#gnbBanner').show();
		$('#gnbPackage > ul > li > ul > li > ul > li > ul > li').removeClass('last');
		//4뎁스 활성화
		$(this).parent().parent().parent().parent().parent().parent().css('top' , '38px');
		$(this).parent().addClass('last');
		$(this).parent().find('> ul').show();
	});
	//4뎁스 클릭
	$('#gnbPackage > ul > li > ul > li > ul > li > ul > li > a').click(function(){
	});
	//마우스 아웃 판정
	$("#gnbPackage a").blur(function() {
		$('#gnbPackage > ul > li > ul').css('top' , '-9999px');
	});
	$('#gnbPackage').mouseenter(function(){
    }).mouseleave(function(){
    	//여기
    	packageGnb_reset();
    });
	$('#gnbPackage > ul > li > ul').show();
	$('#gnbPackage > ul > li > ul').css('position', 'absolute');
	$('#gnbPackage > ul > li > ul').css('top' , '-9999px');
	$('#gnbBanner').css('position', 'absolute');
	$('#gnbBanner').css('top' , '-9999px');
	$('.banner > p > a').bind('mouseover focus', function(){
		$('#gnbBanner').show();
		$('#gnbBanner').css('top' , '185px');
		current_menu_obj.css('top' , '38px');
	})
	$('.banner > p > a').blur(function() {
		console.log( );
		console.log(  );
		if ( $(this).parent().parent().find('> p').length == $(this).parent().index()+1 ) {
			packageGnb_reset();
		}
		
		//packageGnb_reset();
	});
});
//초기화
function packageGnb_reset(){
	$('#gnbPackage > ul > li ').css('background', '#ffffff');
	$('#gnbPackage > ul > li ').removeClass('on');
	$('#gnbPackage > ul > li > ul').css('top' , '-9999px');
	$('#gnbPackage > ul > li > ul > li > ul').hide();
	$('#gnbPackage > ul > li > ul > li > ul > li > ul').hide();
	$('#gnbPackage > ul > li > ul > li ').removeClass('on');
	$('#gnbPackage > ul > li > ul > li > ul > li').removeClass('on');
	$('#gnbPackage > ul > li > ul > li > ul > li > ul > li').removeClass('on');
	$('#gnbPackage > ul > li > ul > li').removeClass('last');
	$('#gnbPackage > ul > li > ul > li > ul > li').removeClass('last');
	$('#gnbPackage > ul > li > ul > li > ul > li > ul > li').removeClass('last');
	/*
	for( var i = 0; i < $('#gnbPackage > ul > li').length; i++ ) {
		$('#gnbPackage > ul > li:eq('+i+') > a > img').attr('src', $('#gnbPackage > ul > li:eq('+i+') > a > img').attr('src').replace('_on', '_off') );
	}
	*/
	
	$('#gnbPackage > ul > li > a > img.on').show();
	$('#gnbPackage > ul > li > a > img.off').hide();
	$('#gnbBanner').css('top' , '-9999px');
}
//높이값 비교하기
function returnHeight( n1, n2, n3 ){
	var compare = 0;
	var n1_num = ( n1 * 30 ) + 5;
	var n2_num = ( n2 * 30 ) + 5;
	var n3_num = ( n3 * 30 ) + 5;
	if ( ( n1_num - n2_num ) > 0 ) {
		compare = n1_num;
	} else {
		compare = n2_num;
	}
	if( compare - n3_num > 0 ){
		compare = compare;
	} else {
		compare = n3_num;
	}
	if ( compare - ( $('.banner').outerHeight() + 30 ) > 0 ) {
		compare = compare;
	} else {
		compare = $('.banner').outerHeight() + 30;
	}
	if ( compare > 327 ) {
		compare = compare;
	} else {
		compare = 327;
	}
	return compare;
}