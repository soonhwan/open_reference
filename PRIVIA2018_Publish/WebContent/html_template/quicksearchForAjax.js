var ajaxCallBackTest = function(sectionName){//블락내 소스는 더미. 구조를 설명하기 위한 소스
	var sectionDom = $('#QS-'+sectionName);
	sectionDom.load(sectionName+'.html',function(response){
		//alert('퀵서치내부요소들이 없을 경우 ajax를 요청함.\n\n로드시 최초만 ajax');
		
		var num = $('.quick-section-cont').index(sectionDom);
		quickSearchInit(num); 
	});
} 