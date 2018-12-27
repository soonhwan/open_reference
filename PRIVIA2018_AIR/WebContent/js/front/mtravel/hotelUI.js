$(function(){
  //초기 실행
  hotelFrontScript.init();

  //여행지 검색
  if($('.fs-search-wrap').length>0){
    $('.fs-input').each(function(){
      if($(this).val()!=0){
        $(this).addClass('active');
        $(this).parent().find('.fs-input-del').addClass('active');
        $(this).parent().find('.fs-input-exp').addClass('disabled');
      }
    });
    $('.fs-input-exp').on('click', function(){
      $(this).parent().find('.fs-input').focus();
    });
    $('.fs-input').on('focusin', function(){
      $(this).addClass('active');
      $(this).parent().find('.fs-input-exp').addClass('disabled');
      //$(this).parent().find('.fs-input-del').addClass('active');
    });
    $('.fs-input').on('blur', function(){
      if($(this).val()==0){
        $(this).removeClass('active');
        $(this).parent().find('.fs-input-exp').removeClass('disabled');
      }
    });
    $('.fs-input').on('keyup', function(){
      if($(this).val()!=0 || $(this).val()!=''){
        $(this).parent().find('.fs-input-del').addClass('active');
      }else{
        $(this).parent().find('.fs-input-del').removeClass('active');
      }
    });
    $('.fs-input-del').on('click', function(){
      $(this).removeClass('active');
      $(this).parent().find('.fs-input-exp').removeClass('disabled');
      $(this).parent().find('.fs-input').val('').focus();
    });
    $('.fs-item-wrap .recommend-city dt').on('click', function(){
      if(!$(this).hasClass('active')){
        $(this).closest('.recommend-city').find('dt').removeClass('active');
        $(this).closest('.recommend-city').find('dd').slideUp(300);
        $(this).addClass('active');
        $(this).next().slideDown(300);
      }else{
        $(this).removeClass('active');
        $(this).next().slideUp(300);
      }
    });
  }

  //여행날짜 선택
  if($('.fs-calendar-wrap').length>0){
    var $uisCalendar = $('.fs-calendar-wrap .uis-calendar');
    $('.uis-datepicker').datepicker({
  		showMonthAfterYear: true,
  		yearSuffix: '<span class="ui-datepicker-dot">.</span>',
  		monthNames: ['01','02','03','04','05','06','07','08','09','10','11','12'],
  		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  		minDate: '0',
  		maxDate: '+365',
  		numberOfMonths: [13,1],
  		dateFormat: 'yy/mm/dd',
  		beforeShowDay: function(date) {
  			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkin').data('day'));
  			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkout').data('day'));
  			return hotelFrontScript.beforeShowDayMark(date, date1, date2);
  		},
  		onSelect: function(dateText, inst) {
  			var date1 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkin').data('day'));
  			var date2 = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), $('.ot-shuttle .slt-chkout').data('day'));
  			var selectedDate = $.datepicker.parseDate($(this).datepicker('option', 'dateFormat'), dateText);
  			var txtDay = hotelFrontScript.onSelectTxtDay($(this), dateText);
  			var txtDayVer2 = hotelFrontScript.onSelectTxtDaySt2($(this), dateText);

  			//출발, 도착 모두 선택인 경우, 아무것도 선택이 없는 경우(출발)
  			if (!date1 || date2) {
  				//data input
  				$('.ot-shuttle .slt-chkin').data('day', dateText);
  				$('.ot-shuttle .slt-chkout').data('day', '');
  				//panel input
  				$('.ot-shuttle .slt-chkin').html(txtDayVer2);
  				$('.ot-shuttle .slt-chkin').addClass('on');
  				$('.ot-shuttle .slt-chkout').html('도착일');
  				$('.ot-shuttle .slt-chkout').removeClass('on');
  			} else {
  				//출발 보다 이전 날짜 선택
  				if( selectedDate.getTime() < date1.getTime() ) {
  					//출발 -> 도착 이동
  					//data input
  					$('.ot-shuttle .slt-chkout').data('day', $('.ot-shuttle .slt-chkin').data('day'));
  					//panel input
  					$('.ot-shuttle .slt-chkout').html($('.ot-shuttle .slt-chkin').html());
  					$('.ot-shuttle .slt-chkout').addClass('on');

  					//출발 셋팅
  					//data input
  					$('.ot-shuttle .slt-chkin').data('day', dateText);
  					//panel input
  					$('.ot-shuttle .slt-chkin').html(txtDayVer2);
  				}
  				else {
  					//출발이후 선택시(도착)
  					//data input
  					$('.ot-shuttle .slt-chkout').data('day', dateText);
  					//panel input
  					$('.ot-shuttle .slt-chkout').html(txtDayVer2);
  					$('.ot-shuttle .slt-chkout').addClass('on');
  				}
  			}
  		}
  	});
  }

  //인원, 객실 수
  if($('.fs-travelers-wrap').length>0){
    var $travelers = $('.fs-travelers-wrap');
    var $result = $travelers.find('.rooms-result');
    var $remote = $travelers.find('.rooms-remote');
    var $btnAdd = $travelers.find('.room-add');
    $travelers.css('height', $(window).height()-110);

    var _roomNum = 0;
    var roomArr = [];
    var minRoom = 1; //객실 수 (최소)
    var maxRoom = 3; //객실 수 (최대)
    var defaultAdult = 2; //성인 수 (기본)
    var minAdult = 1; //성인 수 (최소)
    var maxAdult = 10; //성인 수 (최대)
    var minChild = 0; //아동 수 (최소)
    var maxChild = 3; //아동 수 (최대)
    var defaultChildOld = 1; //아동 나이(기본)
    var minChildOld = 2; //아동 나이(최소)
    var maxChildOld = 11; //아동 나이(최대)
    var totalAdultNum; //전체 성인 수
    var totalChildNum; //전체 아동 수
    var dataResult = function(data){ console.log(data) }; //데이터 (json)
    var fsTravel = {
      Init: function(){
        _roomNum++;
        fsTravel.Create();
        fsTravel.Data();

        //객실 추가
        $btnAdd.on('click', function(e){
          _roomNum++;
          fsTravel.Create();
          fsTravel.Data();
          if(_roomNum >= maxRoom){
            _roomNum = maxRoom;
            $btnAdd.closest('.btn-wrap').hide();
            return false;
          }
          e.preventDefault();
        });
      },
      Create: function(setting){
        var adult, child, childOld;
        adult = defaultAdult;
        child = minChild;
        childOld = [];
        var obj = {};
        obj.roomNum = _roomNum;
        obj.adultNum = adult;
        obj.childNum = child;
        obj.childOld = childOld;
        obj.age = [];
        obj.ui = null;

        fsTravel.Draw(obj);
      },
      Draw: function(obj){
        var roomHtml = '';
            roomHtml += '<div class="roomUnit">';
            roomHtml +=   '<div class="roomArea">';
            roomHtml +=     '<p class="room">객실<span></span></p>'
          if(_roomNum>1){
            roomHtml +=     '<a href="#" class="btn-del">삭제</a>'
          }
            roomHtml +=   '</div>';
            roomHtml +=   '<div class="adultArea">';
            roomHtml +=     '<dl class="num-remote">';
            roomHtml +=       '<dt>성인</dt>';
            roomHtml +=       '<dd>';
            roomHtml +=         '<span class="num-ctn">';
            roomHtml +=           '<a href="#" class="btn-minus">-</a>';
            roomHtml +=           '<input type="text" value="'+obj.adultNum+'" readonly>';
            roomHtml +=           '<a href="#" class="btn-plus">+</a>';
            roomHtml +=         '</span>';
            roomHtml +=       '</dd>';
            roomHtml +=     '</dl>';
            roomHtml +=   '</div>';
            roomHtml +=   '<div class="childArea">';
            roomHtml +=     '<dl class="num-remote">';
            roomHtml +=       '<dt>아동 <span class="tip">(만2세~11세)</span><span class="btn-base bb-help bc-gray"><a href="#" onclick="selectPop.init(\'datLPop\'); return false;"><span class="a11y">현대카드 10% 청구 할인 안내</span></a></span></dt>';
            roomHtml +=       '<dd>';
            roomHtml +=         '<span class="num-ctn">';
            roomHtml +=           '<a href="#" class="btn-minus">-</a>';
            roomHtml +=           '<input type="text" value="'+obj.childNum+'" readonly>';
            roomHtml +=           '<a href="#" class="btn-plus">+</a>';
            roomHtml +=         '</span>';
            roomHtml +=       '</dd>';
            roomHtml +=     '</dl>';
            roomHtml +=   '</div>';
            roomHtml += '</div>';
        var roomCon = $(roomHtml);
        obj.ui = roomCon;
        $remote.append(obj.ui);
        fsTravel.Event(obj);
      },
      Event: function(obj){
        if(obj.adultNum > 0){
          obj.ui.find('.adultArea input').addClass('active');
        }else{
          obj.ui.find('.adultArea input').removeClass('active');
          obj.ui.find('.adultArea .btn-minus').addClass('disabled');
        }
        if(obj.childNum > 0){
          obj.ui.find('.childArea input').addClass('active');
        }else{
          obj.ui.find('.childArea input').removeClass('active');
          obj.ui.find('.childArea .btn-minus').addClass('disabled');
        }

        //성인 +
        obj.ui.find('.adultArea .btn-plus').on('click', function(){
          var num = obj.adultNum;
          num++;
          if(num < minAdult || num > maxAdult) return false;
          obj.adultNum = num;
          obj.ui.find('.adultArea input').val(parseInt(num));
          if(num > minAdult) obj.ui.find('.adultArea .btn-minus').removeClass('disabled');
          if(num == maxAdult) obj.ui.find('.adultArea .btn-plus').addClass('disabled');
          if(num > 0){
            obj.ui.find('.adultArea input').addClass('active');
          }else{
            obj.ui.find('.adultArea input').removeClass('active');
          }
          fsTravel.Data();
        });

        //성인 -
        obj.ui.find('.adultArea .btn-minus').on('click', function(){
          var num = obj.adultNum;
          num--;
          if(num < minAdult || num > maxAdult) return false;
          obj.adultNum = num;
          obj.ui.find('.adultArea input').val(parseInt(num));
          if(num < maxAdult) obj.ui.find('.adultArea .btn-plus').removeClass('disabled');
          if(num == minAdult) obj.ui.find('.adultArea .btn-minus').addClass('disabled');
          if(num > 0){
            obj.ui.find('.adultArea input').addClass('active');
          }else{
            obj.ui.find('.adultArea input').removeClass('active');
          }
          fsTravel.Data();
        });

        //아동 +
        obj.ui.find('.childArea .btn-plus').on('click', function(){
          var num = obj.childNum;
          num++;
          if(num < minChild || num > maxChild) return false;
          obj.childNum = num;
          obj.ui.find('.childArea input').val(parseInt(num));
          if(num > minChild) obj.ui.find('.childArea .btn-minus').removeClass('disabled');
          if(num == maxChild) obj.ui.find('.childArea .btn-plus').addClass('disabled');
          if(num > 0){
            obj.ui.find('.childArea input').addClass('active');
          }else{
            obj.ui.find('.childArea input').removeClass('active');
          }
          fsTravel.Age(obj, num);
          fsTravel.Data();
        });

        //아동 -
        obj.ui.find('.childArea .btn-minus').on('click', function(){
          var num = obj.childNum;
          num--;
          if(num < minChild || num > maxChild) return false;
          obj.childNum = num;
          obj.ui.find('.childArea input').val(parseInt(num));
          obj.age.pop();
          obj.childOld.pop();
          obj.ui.find('.age-remote.real li.item:last-child').remove();
          if(num <= 0) obj.ui.find('.age-remote').remove();
          if(num < maxChild) obj.ui.find('.childArea .btn-plus').removeClass('disabled');
          if(num == minChild) obj.ui.find('.childArea .btn-minus').addClass('disabled');
          if(num > 0){
            obj.ui.find('.childArea input').addClass('active');
          }else{
            obj.ui.find('.childArea input').removeClass('active');
          }
          fsTravel.Data();
        });

        //객실 삭제
        if(_roomNum > 1){
          obj.ui.find('.btn-del').on('click', function(){
            roomArr[obj.roomNum].ui.find('.btn-minus, .btn-plus').off('click');
            roomArr.splice(obj.roomNum, 1);
            $(obj.ui).remove();
            fsTravel.Change(roomArr);
            _roomNum--;
            if(_roomNum <= minRoom) _roomNum = minRoom;
            if($btnAdd.closest('.btn-wrap').css('display')=='none') $btnAdd.closest('.btn-wrap').show();
            $(this).off('click');
            fsTravel.Data();
          });
        }
        roomArr.push(obj);
        fsTravel.Change(roomArr);
      },
      Change: function(arr){
        for(var i in arr){
          var obj = arr[i];
          obj.roomNum = parseInt(i);
          obj.ui.find('.room span').text(obj.roomNum+1);
        }
      },
      Age: function(obj, num){
        var defaultChildOld;
        var ageHtml = '';
        if(num <= 1){
          ageHtml += '<ul class="age-remote trick">';
          ageHtml +=   '<li>';
          ageHtml +=     '<span class="select-box disabled">';
          ageHtml +=       '<span class="value">나이</span>';
          ageHtml +=     '</span>';
          ageHtml +=   '</li>';
          ageHtml +=   '<li>';
          ageHtml +=     '<span class="select-box disabled">';
          ageHtml +=       '<span class="value">나이</span>';
          ageHtml +=     '</span>';
          ageHtml +=   '</li>';
          ageHtml +=   '<li>';
          ageHtml +=     '<span class="select-box disabled">';
          ageHtml +=       '<span class="value">나이</span>';
          ageHtml +=     '</span>';
          ageHtml +=   '</li>';
          ageHtml += '</ul>';
          ageHtml += '<ul class="age-remote real">';
        }
          ageHtml +=  '<li class="item">';
          ageHtml +=    '<span class="select-box">';
          ageHtml +=      '<span class="value"></span>';
          ageHtml +=      '<select>';
          ageHtml +=        '<option value="0">나이</option>';
        for(var i=minChildOld; i<=maxChildOld; i++){
          ageHtml +=        '<option value='+i+'>만 '+i+' 세</option>';
        }
          ageHtml +=      '</select>';
          ageHtml +=    '</span>';
          ageHtml +=  '</li>';
        if(num <= 1){
          ageHtml += '</ul>';
        }
        var age = $(ageHtml);
        if(num <= 1){
          obj.ui.find('.childArea').append(age);
        }else{
          obj.ui.find('.age-remote.real').append(age);
        }

        if(obj.childOld.length > 0){
          defaultChildOld = (obj.childOld[num-1]) ? obj.childOld[num-1] : defaultChildOld;
        }else{
          defaultChildOld = defaultChildOld;
        }

        var selectBox = age.find(".select-box:not(.disabled):not(.on)").addClass("on").find(".value").html(function(){
          return $(this).next().find("option:selected").text();
        }).parent().find("select").on("change", function () {
          $(this).parent().find(".value").html($(this).find("option:selected").text());
          fsTravel.Data();
        });

        obj.age.push(selectBox);
      },
      Data: function(){
        totalAdultNum = 0;
        totalChildNum = 0;
        for(i in roomArr){
          totalAdultNum += roomArr[i].adultNum;
          totalChildNum += roomArr[i].childNum;
        }
        $result.find('span:eq(0)').text(roomArr.length);
        $result.find('span:eq(1)').text(totalAdultNum);
        $result.find('span:eq(2)').text(totalChildNum);
        var temp = {};
        for(i in roomArr){
          if(roomArr[i].age != null){
            for(j in roomArr[i].age){
              roomArr[i].childOld[j] = Number(roomArr[i].age[j].find("option:selected")[0].value);
            }
          }
          temp['room'+roomArr[i].roomNum] = {};
          temp['room'+roomArr[i].roomNum].adult = roomArr[i].adultNum;
          temp['room'+roomArr[i].roomNum].child = (roomArr[i].childOld.length < 1) ? null : roomArr[i].childOld;
        }
        dataResult(JSON.stringify(temp));
        //console.log(roomArr);
      }
    }
    fsTravel.Init();
  }

  //구글 맵
  if($('#gmapArea').length>0){
    $('#gmapArea').css('height', $(window).height()-50);
  }
});

var hotelFrontScript = window.hotelFrontScript || (function(){
  // 데이터 추가 시 유의점 : 중복되는 날짜 key 값이 존재할 경우 year에 || 처리한다.
	// ex) 2016년 9월 14일이 공휴일(추석연휴)이고 2019년 9월 14일도 공휴일(추석연휴)일 경우
	//     "0914":{title:"추석연휴",year:"2016 || 2019"},
	var holidays = {
		"0606":{title:"현충일",year:""},
		"0501":{title:"근로자의날",year:""},
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
		"20180507":{title:"대체휴가",year:"2018"},
		"20180522":{title:"석가탄신일",year:"2018"},
		"20180613":{title:"지방선거",year:"2018"},
		"20180925":{title:"추석연휴",year:"2018"},
		"20180923":{title:"추석연휴",year:"2018"},
    "20180926":{title:"대체휴일",year:"2018"},
		"20190205":{title:"설날",year:"2019"},
		"20190512":{title:"석가탄신일",year:"2019"},
		"20190204":{title:"설연휴",year:"2019"},
		"20190506":{title:"대체휴가",year:"2019"},
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
      hotelFrontScript.topBtn();
      hotelFrontScript.comContentsV2();
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

			var result = hotelFrontScript.jqdHolidayMark(date);

			//날짜 마크
			var date1 = $date1;
			var date2 = $date2;

			if(date1){
				if(date.getTime() == date1.getTime()){
					if(date2){
						if(date1.getTime() == date2.getTime()){
							result = [true, "dp-highlight dp-same", $.datepicker.formatDate('yy/mm/dd', date1)];
						}
						else{
							result = [true, "dp-highlight dp-first", $.datepicker.formatDate('yy/mm/dd', date1)];
						}
					}
					else{
						result = [true, "dp-highlight", $.datepicker.formatDate('yy/mm/dd', date1)];
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
    topBtn: function(){
      var scrolltop;
    	var topHtml = '<a href="#top" class="btn_toppos" style="display:none;" title="맨위로 이동">TOP</a>'
    	if($('.btn_toppos').size() > 0){
    		$('.btn_toppos').remove();
    		$('body').append(topHtml);
    	}else{
    		$('body').append(topHtml);
    	}
    	var checkTop = setInterval(top,100);
    	function top(){
    		scrolltop = $(window).scrollTop();
    		if(scrolltop > 150){
    			$('.btn_toppos').show();
    		}else{
    			$('.btn_toppos').hide();
    		}
    	}
    	$('.btn_toppos').on('click',function(){
    		$("html,body").scrollTop(0) || $("body").scrollTop(0);
    		return false;
    	});
    },
    comContentsV2: function(){
      if($('.header-secV2.header-page-st').length > 0 && !$('.header-secV2.header-page-st').hasClass('isHeaderFixedOne')){

        var isFix = false;
        var scTop = null;
        var scUTarget = null;
        var headerMainH = $('.header-secV2.header-main-st').height();
        var $header = $('.header-secV2.header-page-st');
        $(document).off('scroll').on('scroll', function(){
          scTop = $(document).scrollTop() + headerMainH;
          scUTarget = $header.offset().top + $header.height();

          //fixed
          if(scUTarget < scTop && isFix == false){
            $header.addClass('is-fixed');
            isFix = true;
          }

          //relative
          if(scUTarget > scTop && isFix == true){
            $header.removeClass('is-fixed');
            isFix = false;
          }
        });

        //서브 페이지 헤더먼저 보여준다
        $('.header-secV2.header-main-st').hide();
        $('.header-secV2.header-main-st').delay(500).show(0, function(){
          $(window).scrollTop(headerMainH);
        });
        $header.addClass('isHeaderFixedOne');
      }
    }
  }
}());

var oriPopup = null; //내부팝업 위치 저장
var popContScrollMode = null; //팝업 isscroll 저장
var beforePopSC = $(window).scrollTop(); //팝업
var selectPop = {
  init : function(id,url){
    var popup = $("#" + id);

    //팝업 scroll 위치 저장
    beforePopSC = $(window).scrollTop();

    //내부팝업 위치 저장
    if(oriPopup != null){
      oriPopup = null;
    }
    oriPopup = popup.parent();

    if(popup.length == 0){
      $("body").append($('<div id="'+id+'" class="popWrap"/>'));
    }else{
      $("body").append(popup); //#1
    }

    popup.show();

    if(url){
      selectPop.draw(id,url);
    }

    selectPop.open(id);

    var btn_close = popup.find(".btnClose > a");
    btn_close.die("click").live("click",function(){
      if(url){
        selectPop.close(id,true);
      }else{
        selectPop.close(id);
      }
      return false;
    });

    $(".dialogue_pop, .popWrap-mfix").off('mouseup').on('mouseup',function(e){
      //console.log(e.target === this);
      //if (popup.has(e.target).length === 0){
      if (e.target === this){ //#3
        if(url){
          selectPop.close(id,true);
        }else{
          selectPop.close(id);
        }
      }
    });
  },
  open : function(id){
    var popup = $("#" + id);
    popup.wrap('<div class="dialogue_pop"/>');
    popup.parent(".dialogue_pop").show(function(){
      if(popup.hasClass('popWrap-fix')){
        $(this).addClass('dialogue_pop_fix');
      }
      if(popup.hasClass('popWrap-mfix')){
        $(this).addClass('dialogue_pop_mfix');
      }
      popup.show();
      selectPop.position(id);
      $(this).fadeTo(200,1);
    });
  },
  draw : function(id,url){
    var popup = $("#" + id);
    popup.empty().load(url,function(){
      var html = popup.find(".popWrap").html();
      if(popup.find(".popWrap-sec").length > 0){
        popup.addClass('popWrap-sec');
      }
      if(popup.find(".popWrap-secV2").length > 0){
				popup.addClass('popWrap-secV2');
			}
      if(popup.find(".popWrap-fix").length > 0){
        popup.addClass('popWrap-fix');
      }
      if(popup.find(".popWrap-mfix").length > 0){
        popup.addClass('popWrap-mfix');
      }
      popup.empty().html(html);
      selectPop.position(id);
      $('.input_text').removeRequired();
    });
    /*
    $.ajax({
      url: url,
      type: "post",
      dataType: "html",
      success: function (data) {
        popup.empty().html(data);
        var html = popup.find(".popWrap").html();
        popup.empty().html(html);
        selectPop.position(id);
      },
      error : function(xhr, status, error){
        alert("데이터를 불러오지 못했습니다.")
      }
    });
    */
  },
  position : function(id){
    var popup = $("#" + id),
    winHeight = window.innerHeight || $(window).height();
    docHeight = Math.max($(document).height(), $("body").height(), winHeight),
    popHeight = popup.outerHeight(),
    docScroll = $("html,body").scrollTop() || $("body").scrollTop(),
    paddingTop = (winHeight - popHeight) / 2 + docScroll;
    popup.parent(".dialogue_pop").height(docHeight).css("padding-top",paddingTop);

    //fix 모드인경우 화면 중앙에 위치
    if(popup.hasClass('popWrap-fix')){
      popup.css("margin-top",-(popHeight / 2));
    }

    //팝업 스크롤 적용
    if(popup.find(".popCont-iscroll").length > 0){
      $('.ui-page-active').css({overflow:'hidden',position:'fixed',width:'100%',height:'100%'}).bind('touchmove', function(e){e.preventDefault();});
      setTimeout(function(){$('.popWrap-mfix').addClass('loaded');},250);
    }
    /*if(popup.find(".popCont-iscroll").length > 0){
      $('.ui-page-active').css({overflow:'hidden',position:'fixed',width:'100%',height:'100%'}).bind('touchmove', function(e){e.preventDefault();});
      setTimeout(function(){
        popContScrollMode = new IScroll('#' + id + ' .popCont-iscroll', {
          mouseWheel: true,
            scrollbars: true,
            interactiveScrollbars: true,
          shrinkScrollbars: 'scale'
        });
      }, 250);
    }*/

  },
  close : function(id, opt){
    var popup = $("#" + id);

    //팝업 스크롤 이벤트 제거
    if(popup.find(".popCont-iscroll").length > 0){
      $('.popWrap-mfix').removeClass('loaded');
      $('.ui-page-active').attr('style','');
      $('.ui-page-active').unbind('touchmove');
      $(window).scrollTop(beforePopSC); //이전 스크롤 재위치
    }
    /*if(popup.find(".popCont-iscroll").length > 0){
      $('.ui-page-active').attr('style','');
      $('.ui-page-active').unbind('touchmove');
      popContScrollMode.destroy();
      popContScrollMode = null;
    }*/

    popup.parent(".dialogue_pop").fadeTo(200,0,function(){
      popup.parent(".dialogue_pop").hide();
      //if(opt){
      //	popup.parent(".dialogue_pop").remove();
      //}else{
      //	popup.hide().unwrap().html("");
      //}

      //#2
      if(!opt){
        popup.hide().unwrap();
        oriPopup.append(popup); //내부팝업 위치 원복

      }else{
        popup.hide().unwrap().html("");
      }
    });
  }
};
