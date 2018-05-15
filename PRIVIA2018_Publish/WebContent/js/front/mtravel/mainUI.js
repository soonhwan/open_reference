// 검색항목 클릭 시 아래로 레이어 접기,닫기
function layerToggle(id){
    var target = $('#'+id);
    var layerholder = target.parents('.input').next('.layer-holder');
    var layerholderTop = target.offset().top;
    var speed = 400;
    if(target.parents('.input').hasClass('on')){
        target.parents('.input').removeClass('on');
		layerholder.hide(1,function(){
			$(this).hide();
		});
        /*layerholder.slideUp(200,function(){
			$(this).hide();
		});*/
    }else{
        target.parents('.input').addClass('on');
        layerholder.show();
        $('html,body').animate({
            scrollTop : layerholderTop - 5
        },speed);
    }
    return false;
}

// 주요도시 탭
var mainCityTab = function(tabwrap){
    var target = $('#'+tabwrap).find('.tab > li > a');
    target.on('click touchend',function(){
        var index = $(this).parent('li').index() + 1;
        $(this).attr('href','#'+tabwrap+'-'+index);
        var thishref = $(this).attr('href');
        $('#'+tabwrap).find('> .list ul:visible').hide();
        target.parent('li.activated').removeClass('activated');
        $(this).parent('li').addClass('activated');
        $(thishref).show();
	    return false;
    }).eq(0).trigger('click');
};
