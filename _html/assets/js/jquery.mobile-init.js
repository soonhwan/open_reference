$(document).bind('mobileinit', function(){
	$.mobile.keepNative = "a, button, select, input, textarea";
	$.mobile.page.prototype.options.domCache = true;
});