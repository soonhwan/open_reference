/*
 * 설명   : jQuery 메서드 모음
 * 사용처 : document.ready 구문에 실행함수 탑재
 * 작성자 : 권순환
 */
(function ($, window, document, undefined) {
	$.fn.customCheckbox = function(){
		return this.each(function(){
			var $this = $(this);
			var $chk = $this.find('[type="checkbox"]');
			var $label = $this.find('label');
			
			if(!$chk || $this.hasClass('chk-initialized')){return;}
			
			//checked 유효체크
			if($chk.prop('checked')){
				$label.addClass('on');
			}
			else{
				$label.removeClass('on');
			}
			
			//disabled
			if($chk.prop('disabled')){
			   $this.addClass('disabled');
			}
			
			//label click
			$label.on('click', function(){
				if($label.closest('.disabled').hasClass('disabled')){return;}
				if($label.hasClass('on')){
					$label.removeClass('on');
				}
				else{
					$label.addClass('on');
				}
			});
			
			//initialized
			$this.addClass('chk-initialized');
		});
	}
	$.fn.customRadio = function(){
		return this.each(function(){
			var $this = $(this);
			var $radio = $this.find('[type="radio"]');
			var $label = $this.find('label');
			var $name = $radio.attr('name');
			
			if(!$radio || $this.hasClass('radio-initialized')){return;}
			
			//name 저장
			$label.name = $name;
			
			//checked 유효체크
			if($radio.prop('checked')){
				$label.addClass('on');
			}
			else{
				$label.removeClass('on');
			}
			
			//disabled
			if($radio.prop('disabled')){
			   $this.addClass('disabled');
			}
			
			//label click
			$label.on('click', function(){
				if($label.closest('.disabled').hasClass('disabled')){return;}
				if(!$label.hasClass('on')){
					$('[name="'+$label.name+'"]').next('label.on').removeClass('on');
					$label.addClass('on');	
				}
			});
			
			//initialized
			$this.addClass('radio-initialized');
		});
	}
}(window.jQuery, window, document));

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
			//공통 UI
			pvmFrontScript.baseUI($(document));
		},
		baseUI: function($this){
			/* 설명   : 전역 공통으로 사용하는 UI 
			   사용처 : 기본 전역으로 1번 실행하고 나중에 다른곳에서 재실행 할때 방지되어 있는 구조 */
			
			var _ = $this;

			//체크박스(공통)
			_.find('.chk-base').customCheckbox();

			//라디오버튼(공통)
			_.find('.radio-base').customRadio();
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
		onSelectTxtDaySt2: function($this, dateText, inst){
			/* 설명   : 통합검색 - 선택된 날짜 형식 ex)02.04
			   사용처 : jQuery UI datepicker : onSelect 내부 */

			var sDate = $.datepicker.parseDate($this.datepicker('option', 'dateFormat'), dateText),
				month = (sDate.getMonth()+1) < 10 ? '0' + (sDate.getMonth()+1)  : sDate.getMonth()+1,
				day = sDate.getDate() < 10 ? '0' + sDate.getDate()  : sDate.getDate(),
				txt = month + '.' + day;
			return txt;
		},
		onSelectTxtDaySt3: function($this, dateText, inst){
			/* 설명   : 통합검색 - 선택된 날짜 형식 ex)02.04(목)
			   사용처 : jQuery UI datepicker : onSelect 내부 */

			var sDate = $.datepicker.parseDate($this.datepicker('option', 'dateFormat'), dateText),
				month = (sDate.getMonth()+1) < 10 ? '0' + (sDate.getMonth()+1)  : sDate.getMonth()+1,
				day = sDate.getDate() < 10 ? '0' + sDate.getDate()  : sDate.getDate(),
				dayName = sDate.getUTCDay() < 6 ? $this.datepicker('option', 'dayNamesMin')[sDate.getUTCDay()+1] : $this.datepicker('option', 'dayNamesMin')[0],
				txt = month + '.' + day + '('+dayName+')';
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
			if(!result) {
				switch (date.getDay()) {
					/*case 0:
						result = [true, "date-sunday"];
						break;
					case 6:
						result = [true, "date-saturday"];
						break;*/
					default:
						result = [true, ""];
						break;
				}
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
						result = [true, "dp-highlight dp-first", $.datepicker.formatDate('yy/mm/dd', date1)];
					}
					else{
						result = [true, "dp-highlight"];
					}
				}
				else if(date2){
					if(date.getTime() == date2.getTime()){
						result = [true, "dp-highlight dp-end", $.datepicker.formatDate('yy/mm/dd', date2)];
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
		},
		comSearchEvtBind: function($section){
			/* 설명   : 통합검색 - 섹션별 필요한 이벤트 제공
			   사용처 : 통합헤더 섹션별 UI Event 필요시 호출 */
			
			var section = $section;
			
			//공통 UI
			//pvFrontScript.baseUI(section);
			
			//추천 sub list 열고, 닫기
			if(section.find('.uis-list .tit-rec').length > 0){
				section.find('.uis-list .tit-rec').on('click', function(e){
					if(!$(this).parent('li').hasClass('on')){
						$(this).closest('.uis-list').find('> li.on .w-list-sub').height(0);
						$(this).closest('.uis-list').find('> li.on').removeClass('on');
						
						var h = $(this).parent('li').find('.w-list-sub').prop('scrollHeight');
						$(this).parent('li').find('.w-list-sub').height(h);
						$(this).parent('li').addClass('on');
					}
					else{
						$(this).closest('.uis-list').find('> li.on .w-list-sub').height(0);
						$(this).closest('.uis-list').find('> li.on').removeClass('on');
					}
					e.preventDefault();
				});
			}

			//캘린더 today 제거
			if(section.find('.uis-datepicker').length > 0){
				section.find('.uis-datepicker .ui-datepicker-today .ui-state-active').removeClass("ui-state-active"); 
			}
			
			//capacity uis-capacity-number click(클래스 on 추가, 삭제 기능)
			if(section.find('.uis-capacity .uis-capacity-number').length > 0){
				//minus
				section.find('.uis-capacity .uis-capacity-number .uis-custom-number .b-minus button').on('click', function(e){
					var c = parseInt($(this).closest('.uis-custom-number').find('.ucn-num').text());
					if(c < 1){
						if($(this).closest('.uis-custom-number').find('.ucn-num').hasClass('on')){
							$(this).closest('.uis-custom-number').find('.ucn-num.on').removeClass('on');
						}
					}
					e.preventDefault();
				});
				//plus
				section.find('.uis-capacity .uis-capacity-number .uis-custom-number .b-plus button').on('click', function(e){
					var c = parseInt($(this).closest('.uis-custom-number').find('.ucn-num').text());
					if(c > 0){
						if(!$(this).closest('.uis-custom-number').find('.ucn-num').hasClass('on')){
							$(this).closest('.uis-custom-number').find('.ucn-num').addClass('on');
						}
					}
					e.preventDefault();
				});
			}
			
			//capacity uis-capacity-select click(클래스 on 추가, 삭제 기능)
			if(section.find('.uis-capacity .uis-capacity-select').length > 0){
				section.find('.uis-capacity .uis-capacity-select li a').on('click', function(e){
					if(!$(this).closest('li').hasClass('on')){
						section.find('.uis-capacity .uis-capacity-select li.on').removeClass('on');
						$(this).closest('li').addClass('on');
					}
					e.preventDefault();
				});
			}
		}
	}	
}());

/*
 * document ready
 */
$(function(){	
	pvmFrontScript.init();
});
