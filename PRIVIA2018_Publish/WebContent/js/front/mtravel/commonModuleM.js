/*
 * 설명   : pvmFrontScript 메서드 모음
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
var pvmFrontScript = window.pvmFrontScript || (function(){
	// 데이터 추가 시 유의점 : 중복되는 날짜 key 값이 존재할 경우 year에 || 처리한다.
	// ex) 2016년 9월 14일이 공휴일(추석연휴)이고 2019년 9월 14일도 공휴일(추석연휴)일 경우
	//     "0914":{title:"추석연휴",year:"2016 || 2019"},
	var holidays = {
		"0606":{title:"현충일",year:""},
		"0505":{title:"어린이날",year:""},
		"0301":{title:"3.1절",year:""},
		"0101":{title:"신정",year:""},
		"0815":{title:"광복절",year:""},
		"1003":{title:"개천절",year:""},
		"1225":{title:"크리스마스",year:""},
		"1009":{title:"한글날",year:""},
		"20140130":{title:"설연휴",year:"2014"},
		"20140131":{title:"설날",year:"2014"},
		"20140201":{title:"설연휴",year:"2014"},
		"20140506":{title:"석가탄신일",year:"2014"},
		"20140907":{title:"추석연휴",year:"2014"},
		"20140908":{title:"추석",year:"2014"},
		"20140909":{title:"추석연휴",year:"2014"},
		"20150219":{title:"설날",year:"2015"},
		"20150218":{title:"설연휴",year:"2015"},
		"20150928":{title:"추석연휴",year:"2015"},
		"20150927":{title:"추석",year:"2015"},
		"20150926":{title:"추석연휴",year:"2015"},
		"20150525":{title:"석가탄신일",year:"2015"},
		"20150220":{title:"설연휴",year:"2015"},
		"20160915":{title:"추석",year:"2016"},
		"20160914":{title:"추석연휴",year:"2016"},
		"20160916":{title:"추석연휴",year:"2016"},
		"20160514":{title:"석가탄신일",year:"2016"},
		"20160210":{title:"설연휴",year:"2016"},
		"20160209":{title:"설날",year:"2016"},
		"20160208":{title:"설연휴",year:"2016"},
		"20160413":{title:"제 20대 국회의원선거일",year:"2016"},
		"20170128":{title:"설날",year:"2017"},
		"20171005":{title:"추석연휴",year:"2017"},
		"20170129":{title:"설연휴",year:"2017"},
		"20170127":{title:"설연휴",year:"2017"},
		"20170501":{title:"근로자의날",year:"2017"},
		"20170503":{title:"석가탄신일",year:"2017"},
		"20170509":{title:"19대 대통령 선거",year:"2017"},
		"20171002":{title:"임시공휴일",year:"2017"},
		"20171003":{title:"추석연휴",year:"2017"},
		"20171004":{title:"추석",year:"2017"},
		"20171006":{title:"대체휴일",year:"2017"},
		"20180924":{title:"추석",year:"2018"},
		"20180215":{title:"설연휴",year:"2018"},
		"20180216":{title:"설날",year:"2018"},
		"20180217":{title:"설연휴",year:"2018"},
		"20180501":{title:"근로자의날",year:"2018"},
		"20180507":{title:"대체휴가",year:"2018"},
		"20180522":{title:"석가탄신일",year:"2018"},
		"20180613":{title:"지방선거",year:"2018"},
		"20180925":{title:"추석연휴",year:"2018"},
		"20180923":{title:"추석연휴",year:"2018"},
		"20190205":{title:"설날",year:"2019"},
		"20190512":{title:"석가탄신일",year:"2019"},
		"20190204":{title:"설연휴",year:"2019"},
		"20190912":{title:"추석연휴",year:"2019"},
		"20190913":{title:"추석",year:"2019"},
		"20190914":{title:"추석연휴",year:"2019"},
		"20190206":{title:"설연휴",year:"2019"},
		"20200430":{title:"석가탄신일",year:"2020"},
		"20200125":{title:"설날",year:"2020"},
		"20200124":{title:"설연휴",year:"2020"},
		"20200126":{title:"설연휴",year:"2020"},
		"20201002":{title:"추석연휴",year:"2020"},
		"20201001":{title:"추석",year:"2020"},
		"20200930":{title:"추석연휴",year:"2020"}
	};
	
	
	return {
		init: function(){			
			
		},
		onSelectTxtDay: function($this, dateText, inst){
			/* 설명   : 통합검색 - 선택된 날짜 형식 ex)08월 07일 (화) dayNamesMin 옵션이 있어야함!
			   사용처 : jQuery UI datepicker : onSelect 내부 */

			var sDate = $.datepicker.parseDate($this.datepicker('option', 'dateFormat'), dateText),
				month = (sDate.getMonth()+1) < 10 ? '0' + (sDate.getMonth()+1)  : sDate.getMonth()+1,
				day = sDate.getDate() < 10 ? '0' + sDate.getDate()  : sDate.getDate(),
				dayName = sDate.getUTCDay() < 6 ? $this.datepicker('option', 'dayNamesMin')[sDate.getUTCDay()+1] : $this.datepicker('option', 'dayNamesMin')[0],
				txt = month + '월 ' + day + '일 (' + dayName + ')';
			return txt;
		},
		jqdHolidayMark: function(date){
			/* 설명   : jQuery Ui datepicker 주말, 휴일 표시
			   사용처 : 필요시 호출 ex) var result = pvmFrontScript.jqdHolidayMark(date); */
			
			//휴무일
			var result;
			var holiday = holidays[$.datepicker.formatDate("mmdd",date )];
			if(!holiday){
				holiday = holidays[$.datepicker.formatDate("yymmdd",date )];
			}
			var thisYear = $.datepicker.formatDate("yy", date);
			if (holiday) {
				if(thisYear == holiday.year || holiday.year == "") {
					result =  [true, "date-holiday", holiday.title];
				}
			}

			//주말
			/*if(!result) {
				switch (date.getDay()) {
					case 0:
						result = [true, "date-sunday"];
						break;
					case 6:
						result = [true, "date-saturday"];
						break;
					default:
						result = [true, ""];
						break;
				}
			}*/	
			
			if(!result) {
				result = [true, ""];
			}
			
			return result;
		},
		beforeShowDayMark: function(date, $date1, $date2){
			/* 설명   : 통합검색 - 출발, 도착지 스타일 구현
			   사용처 : jQuery UI datepicker : beforeShowDay 내부 */
			
			var result = pvmFrontScript.jqdHolidayMark(date);
			
			//날짜 마크
			var date1 = $date1;
			var date2 = $date2;
			
			if(date1){
				if(date.getTime() == date1.getTime()){
					if(date2){
						result = [true, "dp-highlight dp-first"];
					}
					else{
						result = [true, "dp-highlight"];
					}
				}
				else if(date2){
					if(date.getTime() == date2.getTime()){
						result = [true, "dp-highlight dp-end"];
					}
					else if(date.getTime() > date1.getTime() && date.getTime() < date2.getTime()){
						result = [true, "dp-highlight pd-between"];
					 }
				}
			}
						
			return result;
		},
		beforeShowDayMarkMD: function(date, $dateArr){
			/* 설명   : 통합검색 - 다구간 스타일 구현
			   사용처 : jQuery UI datepicker : beforeShowDay 내부 */

			var result = pvmFrontScript.jqdHolidayMark(date);
			
			if($dateArr.length > 0){
				if(date.getTime() > $dateArr[0].getTime() && date.getTime() < $dateArr[$dateArr.length-1].getTime()){
					result = [true, "dp-highlight-md pd-between"];
				}
			
				for(var i in $dateArr){
					var dmDate = $dateArr[i];				
					if(date.getTime() == dmDate.getTime()){
						result = [true, 'dp-highlight-md isMD', $.datepicker.formatDate('yy/mm/dd', dmDate)];
					}
				}
			}

			return result;	
		}
	}	
}());

/*
 * document ready
 */
$(function(){	
	pvmFrontScript.init();
});
