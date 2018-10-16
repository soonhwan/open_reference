/*
 * 문서명 : main.js 
 * 설명 : front-end 메인페이지 전용 스크립트
 */

var newsTicker = function(id){
	var $news = $("#" + id);
	var $list = $news.find("> ul");
	var _timer = '';
	var _intervaltime = 3500;
	var _speed = 400;
	var _clearRoll = function() {
		if(_timer) {
			clearTimeout(_timer);
			_timer = null;
		}
	};
	var _repeatRoll = function(){
		_clearRoll();
		_timer = setTimeout(_timeoutRoll, _intervaltime);
	};
	var _timeoutRoll = function(){
		$list.animate({top:-22},_speed,function(){
			$list.find("> li").eq(0).clone().appendTo($list);
			$list.find("> li").eq(0).remove();
			$list.css("top","0");
			_repeatRoll();
		});
	};
	$list.mouseenter(function(){
		_clearRoll();
	});
	$list.mouseleave(function(){
		_repeatRoll();
	});
	_timeoutRoll();
};


$(document).ready(function () {
	var randomBannerEq = [1000,2000];
	randomBannerEq.sort(function(){
        return Math.random() - Math.random();
    });
	
	setBanner( $('#bnr_event'), true, randomBannerEq[0] );	// 이벤트 배너 롤링
	setBanner( $('#bnr_special'), true, randomBannerEq[1] );	// 현카픽 배너 롤링

	// 메인에서 검색영역 고정 및 넓이 고정
	$(".total_search .search_form").width(308);
	$(".page_top").hide(); //상단 버튼 숨김
	setTimeout(function(){
		newsTicker('noticeMain');
	},2000);
});


