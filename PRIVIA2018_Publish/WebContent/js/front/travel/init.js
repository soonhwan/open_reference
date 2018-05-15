//document.domain = 'priviatravel.com';
/* 
 * 문서명 : init.js 
 * 설명 : 공통 실행 
 */
$(function () {
	initGnb();
	
	$(document).on('touchstart',function(){
		if(iosCheck()){
			if($("#searchFrame").size() > 0){
				var dest = document.getElementById('searchFrame');
				dest.contentWindow.postMessage('isParentDomClick','*');
			}
		}
	})
	
});

var updateSearchFrm = function(height,width){
	$("#searchFrame").height(height).width(width);
};


(function ($) {
	if (!Array.prototype.some) {
	  Array.prototype.some = function(fun /*, thisp*/) {
	    var len = this.length;
	    if (typeof fun != "function")
	      throw new TypeError();

	    var thisp = arguments[1];
	    for (var i = 0; i < len; i++) {
	      if (i in this &&
	          fun.call(thisp, this[i], i, this))
	        return true;
	    }

	    return false;
	  };
	}
	
	/**
	 * IE7 trim 
	 * */
	if (!String.prototype.trim) {
	    String.prototype.trim = function () {
	        return this.replace(/(^\s*)|(\s*$)/gi, "");
	    };
	};
	
})(jQuery);


