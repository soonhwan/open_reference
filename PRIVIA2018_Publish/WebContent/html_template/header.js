function injectionNavMenu(){

	//gnb sub메뉴 삽입
	var code = new Array();
	$('#gnb-nav > li').each(function(i){
		code[i] = $(this).attr('id').split('-')[2]; //gnb-item-{key}
	});
	var totalNav = '';
	for(key in navData){
		totalNav += '<li class="'+key+'" >';
		totalNav += '<h3><a href="'+navData[key].link+'">'+navData[key].title+'</a></h3>';
		if(navData[key].subNav.length > 0){
			totalNav += '<ul>';
			for(i=0;i<navData[key].subNav.length;i++){
				totalNav += '<li><a href="'+navData[key].subNav[i].link+'">'+navData[key].subNav[i].title+'</a></li>';
			}
			totalNav += '</ul>';
		}
		totalNav += '</li>';
		
		for(i=0;i<code.length;i++){			
			if(key == code[i]){
				if(navData[key].subNav.length > 0 && navData[key].subNavDisplayToGNB == true){
					var subnav = '<ul class="gnb-sub">';
					for(j=0;j<navData[key].subNav.length;j++){
						subnav += '<li><a href="'+navData[key].subNav[j].link+'">'+navData[key].subNav[j].title+'</a></li>';
					}
					subnav += '</ul>';
					
				}
				$('#gnb-item-'+key).append(subnav);
				subnav = '';
			}
		}
	}

	$('.total-nav-list').append(totalNav);

}

function eventBindNavMenu(){	
	var isOpenType = $('#header-new').hasClass('gnb-open');
	if(isOpenType) $('#gnb-nav > li > a.on').siblings('.gnb-sub').show();
	//전체메뉴
	$('.btn-total-nav').on({
		'click' : function(e){
			e.preventDefault();
			if($('#quickSearch-holder').is(':visible')){
				$('.btn-quickSearch').trigger('click')
			} 
			if($('.l-total-nav-layer').is(':visible')){
				$('.l-total-nav-layer').hide();
				$('.l-total-nav-open.on').removeClass('on');
			}
			var $this = $('.btn-total-nav');
			var layer = $('.total-nav-layer');
			if(layer.is(':hidden')){
				$this.addClass('on');
				$('.total-nav-layer').show();
			}
			else{
				$('.total-nav-layer').hide();
				$(this).removeClass('on');
			};
			$('#gnb-nav > li.ov').removeClass('ov');
			$('.gnb-sub-wrap').hide();
			
		},
		'mouseenter' : function(){
			$(this).addClass('ov');
		},
		'mouseleave' : function(){
			$(this).removeClass('ov');
		}
	});

	//GNB
	/*
	$('#gnb-nav > li > a').on('mouseenter focusin',function(){
		var _this = this;
		if(menuleave) clearTimeout(menuleave)
		memuenter = setTimeout(function(){
			$(_this).parent().siblings('li.ov').removeClass('ov').end().addClass('ov');		
			if($(_this).parent().children('.gnb-sub').length || (isOpenType && !$(_this).parent().hasClass('on'))) $('.gnb-sub-wrap').show();
			else $('.gnb-sub-wrap').hide();

			if($('.total-nav-layer').is(':visible')){
				$('.total-nav-layer').hide();
				$('.btn-total-nav').removeClass('on');
			}
			if($('#quickSearch-holder').is(':visible')){
				$('.btn-quickSearch').trigger('click');
			}
			if($('.l-total-nav-open').hasClass('on')){
				$('.l-total-nav-open').removeClass('on');
				$('.l-total-nav-layer').hide();
			}
		},220);

		$(this).on('mouseleave  focusout',function(){
			if(memuon) clearTimeout(memuenter);	
		});
	});

	$('#gnb-nav').on('mouseleave',function(){
		menuleave = setTimeout(function(){
			$('#gnb-nav > li.ov').removeClass('ov');
			$('.gnb-sub-wrap').hide();
		},200)
		
	});
	*/
	var menu_over,menu_leave,submenu_leave;
	var allLen = $('#gnb-nav > li').length;
	$('#gnb-nav > li > a').on('mouseenter focusin',function(){
		var _this = this;
		if(submenu_leave) clearTimeout(submenu_leave);
		if(menu_leave) clearTimeout(menu_leave);
		if(menu_over) clearTimeout(menu_over);
		menu_over = setTimeout(function(){
			$(_this).parent().siblings('li.ov').removeClass('ov').end().addClass('ov');		
			if($(_this).parent().children('.gnb-sub').length || (isOpenType && !$(_this).parent().hasClass('on'))) $('.gnb-sub-wrap').show();
			else $('.gnb-sub-wrap').hide();
			if($('.total-nav-layer').is(':visible')){
				$('.total-nav-layer').hide();
				$('.btn-total-nav').removeClass('on');
			}
			if($('.btn-quickSearch').hasClass('on')){
				$('.btn-quickSearch').trigger('click');
				$('#ui-datepicker-div').hide();
			}
			
			if($('.l-total-nav-open').hasClass('on')){
				$('.l-total-nav-open').removeClass('on');
				$('.l-total-nav-layer').hide();
				$('.l-total-nav-open').css('z-index','0')
			}
		},200);
		
	});
	$('#gnb-nav').on('mouseleave',function(){
		var _this = this;
		if(menu_over) clearTimeout(menu_over)
		menu_leave = setTimeout(function(){
			$('>li.ov',_this).removeClass('ov')
			$('.gnb-sub-wrap').hide();
		},200);
	});
	$('.gnb-sub').on('mouseenter',function(){
		var _this = this;
		if(menu_over) clearTimeout(menu_over);
		if(menu_leave) clearTimeout(menu_leave);
		if(submenu_leave) clearTimeout(submenu_leave);
	});
	$('.gnb-sub').on('mouseleave',function(){
		var _this = this;
		submenu_leave = setTimeout(function(){
			$(_this).parent().removeClass('ov');
			$('.gnb-sub-wrap').hide();
		},200);
	});
	$('#gnb-nav > li').eq(allLen-1).children('a').on('focusout',function(){
		$(this).parent().removeClass('ov');
		if($('#header-new').hasClass('gnb-open')){
			$('#gnb-nav').trigger('mouseleave');
		}
	});
}

function quickShowHide(sectionName,callback){
	$('.btn-quickSearch').on('click',function(e){
		e.preventDefault();
		
		if($('.btn-total-nav').hasClass('on')){
			$('.btn-total-nav').removeClass('on');
			$('.total-nav-layer').hide();
		}
		if($('.l-total-nav-open').hasClass('on')){
			$('.l-total-nav-open').removeClass('on');
			$('.l-total-nav-layer').hide();
		}
		if($('.l-total-nav-open').hasClass('on')){
			$('.l-total-nav-open').removeClass('on');
			$('.l-total-nav-layer').hide();
		}
		if($('.l-gnb-sub').is(':visible')){
			$('.l-gnb-sub').hide();
		}
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$('#quickSearch-holder').hide();			
		} else {
			$(this).addClass('on');			
			$('#quickSearch-holder').show();
			if($('#QS-'+sectionName).find('.sch-1dep-cont').length==0)callback(sectionName);//ajax 담당함수
		}
		
	});

	$('#recently-search-close').live('click',function(){
		$('.btn-quickSearch').trigger('click');
	});
	
	//퀵서치 스크립트 내부 이벤트 바인딩
	quickSearchEvent();
	
	$('.quick-section-icon li a').on('click',function(){
		var idx = $(this).parent().index();
		var sectionName = $('.quick-section-cont').eq(idx).attr('id').split('-')[1];
		if($('#QS-'+sectionName).find('.sch-1dep-cont').length==0)callback(sectionName);//ajax 담당함수
	})
}

function initGNB(){
	injectionNavMenu();
	eventBindNavMenu();
}

$(function(){
	if($('#nav-wrap').size() > 0){
		initGNB();
	}
	quickShowHide('AIR',ajaxCallBackTest);
});