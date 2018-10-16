	//google Analytics
	//통계분석
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-42792262-1', 'priviatravel.com');
	  ga('send', 'pageview');


$(document).ready(function(){
	
	$("a, area, input, button").live('click',function(e){
		
		var _this = $(this);
		var trkType 	= $.trim(_this.attr("ga_trk_type"));
		var action 		= $.trim(_this.attr("ga_action"));
		var category 	= $.trim(_this.attr("ga_category"));
		var label 		= $.trim(_this.attr("ga_label"));
		
		if( "event" == trkType && action.length > 0 && category.length > 0 && label.length > 0 ){
			ga('send', 'event', category, action, label);
		}
	});
});