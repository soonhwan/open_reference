(function ($) {
    //지역변수
	var _arrDatePickerStorage = [];

    //달력 플러그인
    $.fn.calendar = function (opt) {
        if( $(this).length < 1 ) return;
        var $wrap = null;
        var $info = null;
        var $contents = null;
        var _obj = this;
        var _opt = opt;
        var _scroll_y = false;
        var _topGap  = _opt.topGap || 5;
        //#20525 해외패키지 관련
        var _resState  = _opt.resState || false;
        var _fixday  = _opt.fixDay || null;
        var _startday  = _opt.startDay || null;
        var _waitingday  = _opt.waitingDay || null;
        //#24414(열어두기, 다중 선택)
        var _isOpen  = _opt.isOpen || false;
        var _isMultiple  = _opt.isMultiple || false;
        var _dateList = _opt.dateList || null;

        var Fn = {
            Init: function () {
                Fn.Draw();

                //날짜설정
                if (typeof (_opt.initCallback) == 'function') {
                    $(_obj).val(_opt.date);
                    _opt.initCallback(_opt.date);
                } else {
                    $(_obj).val(_opt.date);
                }

                //읽기전용 설정
                $(_obj).attr('readonly', 'readonly');
			                
                //#24414(열어두기)
                if(_isOpen === true){           
                    Fn.Opened();
                }
                else {
                    //달력클릭
                    jQuery(_obj).on('click', function (e) {
                        Fn.Open();
                    });
                }
            },
            Draw: function () {
                if ($wrap == null) {                    
                    var html = '';
                    html += '<div class="datepicker-wrap" id="mcalendar-' + _obj.attr('id') + '" style="display:none; "><div class="datepicker-container">';
                    if (_opt.title != null) {
                        html += '<div class="datepicker-header"><span class="h_title"></span>';
                        if (_opt.close != false) {
                            html += '<button type="button" class="close_datepicker" title="달력 레이어 닫기"><span class="blind">닫기</span></button>';
                        }
                        html += '</div>';
                    }
                    html += '    <div class="this-month-wrap">';
                    html += '		<span class="this-month">----.--</span>';
                    html += '		<a href="#" id="date-prev" class="date-month" title="이전 달"><span class="blind">이전 달</span></a>';
                    html += '		<a href="#" id="date-next" class="date-month" title="다음 달"><span class="blind">다음 달</span></a>';
                    html += '   </div>';
                    html += '   <div class="contents" style="position:relative; overflow-x:hidden; height:285px"></div>';
                    
                    //#20525 해외패키지 관련
                    if (_resState === true) {
                        html += '<div class="res-state">';
                        html += '   <ul><li class="fix">예약가능</li><li class="start">출발가능</li><li class="waiting">대기예약</li></ul>';
                        html += '</div>';
                    }
                    
                    //#24414(다중 선택)
                    if (_isMultiple === true) {
                        html += '<div class="noti-multiple"><em>출발일</em> 선택 (중복가능)</div>';
                        html += '<a href="#" class="btn-all-month" title="월 전체 선택">월 전체</a>';
                    }
                    
                    html += '</div></div>';

                    if ($('mcalendar-' + _obj.attr('id')).length == 0) {
                        if (_opt.parent == null || _opt.parent == undefined) {
                            $('body').append(html);
                        } else {
                            $(_opt.parent).append(html);
                        }
                    }
                    $wrap = $('#mcalendar-' + _obj.attr('id'));
                    $info = $wrap.find('.datepicker-container > .this-month-wrap');
                    $contents = $wrap.find('.datepicker-container > .contents');

                    if (_opt.inline != undefined && _opt.inline == true) {
                        $wrap.addClass('datepicker-inline');
                    }
                    Fn.Event();
                }
            },
            Event: function () {
                $info.on('click', '#date-prev', function (e) {
                    e.preventDefault();
                    if($wrap.find('table').eq(1).is(":animated")) { return; }
                    
                    var year = parseInt($info.attr('year'));
                    var month = parseInt($info.attr('month')) - 1;
 
                    //var l = $wrap.width();
                    var l = '100%';
                    $wrap.find('table').stop();
                    Fn.Change(year, month);
                    $wrap.find('table').eq(0).animate({ left: 0 });
                    $wrap.find('table').eq(1).animate({ left: l }, function () {
                        //$info.attr('t_start_w', ''); //touchmove
                        $(this).next().remove();
                        //$wrap.find('.contents').prepend(Fn.DrawMonth(year, month - 1, -$wrap.width()));
                        $wrap.find('.contents').prepend(Fn.DrawMonth(year, month - 1, '-100%'));
                    });
                });
                $info.on('click', '#date-next', function (e) {
                    e.preventDefault();
                    if($wrap.find('table').eq(1).is(":animated")) { return; }
                    
                    var year = parseInt($info.attr('year'));
                    var month = parseInt($info.attr('month')) + 1;

                    //var l = -$wrap.width();
                    var l = '-100%';
                    $wrap.find('table').stop();
                    Fn.Change(year, month);
                    $wrap.find('table').eq(1).animate({ left: l });
                    $wrap.find('table').eq(2).animate({ left: 0 }, function () {
                        //$info.attr('t_start_w', ''); //touchmove
                        $wrap.find('table').eq(0).remove();
                        //$wrap.find('.contents').append(Fn.DrawMonth(year, month + 1, $wrap.width()));
                        $wrap.find('.contents').append(Fn.DrawMonth(year, month + 1, '100%'));
                    });
                });
                $wrap.on('click', 'tr > td > a', function (e) {
                    e.preventDefault();                    
                    
                    //#24414(다중 선택)
                    if(_isMultiple === true){
                        if(!$(this).hasClass('no') && !$(this).closest('td').hasClass('disable')){
                            var date = $(this).attr('date');                            
                            if($(this).closest('td').hasClass('current')){
                                $(this).closest('td').removeClass('current');   
                                SetDateListDelete(date);
                            }
                            else {
                                $(this).closest('td').addClass('current');
                                SetDateListAdd(date);
                            }                                                                                    
                        }
                    }
                    else{
                        if (!$(this).hasClass('no')) {
                            if(_obj.attr("chk_fix_date") != 'Y') _obj.attr("chk_fix_date", "Y");
                            var date = $(this).attr('date');
                            $('#' + $info.attr('obj')).val(date);
                            $('#' + $info.attr('obj')).trigger('change');
                            $(this).closest('tbody').find('tr > td').removeClass('current');
                            $(this).closest('td').addClass('current');
                            if (typeof (_opt.sCallback) == 'function') {
                                _opt.sCallback(date);
                            }
                            Fn.Close();
                        }
                    }
                });
                
                //#24414(월 전체 선택)
                if(_isMultiple === true){
                    $wrap.on('click', '.btn-all-month', function (e) {
                        if($wrap.find('table').eq(1).is(":animated")) { return; }
                        
                        var target = $wrap.find('table').eq(1);
                        var lastIndex = target.find('tbody > tr > td').length - 1;
                        var currentCnt = 0;
                        target.find('tbody > tr > td').each(function(index){
                            if(!$(this).find('a').hasClass('no') && !$(this).hasClass('disable') && !$(this).hasClass('current')){
                                currentCnt++;
                                $(this).addClass('current');
                                var date = $(this).find('a').attr('date');
                                SetDateListAdd(date);
                            }                               
                            if(index == lastIndex && currentCnt == 0){
                                target.find('.current').each(function(){
                                    var date = $(this).find('a').attr('date');
                                    SetDateListDelete(date);
                                    $(this).removeClass('current');                                
                                });
                            }
                        });
                        
                    });
                }
                    
                $wrap.on('click', '.close_datepicker', function () {
                    Fn.Close();
                });
                /*
                $contents.on('touchmove', function (e) {
                    e.preventDefault();
                    var t_start_w = $info.attr('t_start_w');
                    var t_now_w = e.originalEvent.touches[0].pageX;
                    if (t_start_w == '' || t_start_w == undefined) {
                        t_start_w = t_now_w;
                        $info.attr('t_start_w', t_now_w);
                    }
                    var l = $wrap.width();
                    var m = t_now_w - t_start_w;

                    var t_start_s = $info.attr('t_start_s');
                    if (t_start_s == '' || t_start_s == undefined) {
                        t_start_s = $('body').scrollTop();
                        $info.attr('t_start_s', t_start_s);
                    }

                    var t_now_h = e.originalEvent.touches[0].screenY;
                    var t_start_h = $info.attr('t_start_h');
                    if (t_start_h == '' || t_start_h == undefined) {
                        t_start_h = t_now_h;
                        $info.attr('t_start_h', t_now_h);
                    }

                    //if ((Math.abs(parseInt(t_start_h) - t_now_h) > ($contents.height() * 1 / 3)) && !_scroll_y) {
                    _scroll_y = true;
                    //}

                    if (Math.abs(m) > ($contents.height() * 1 / 4)) {
                        $wrap.find('table').eq(0).css({ left: -l + m });
                        $wrap.find('table').eq(1).css({ left: 0 + m });
                        $wrap.find('table').eq(2).css({ left: l + m });
                    } else {
                        $('body').scrollTop(parseInt(t_start_s) + (parseInt(t_start_h) - t_now_h));
                    }

                    $info.attr('t_now_w', t_now_w);
                    $info.attr('t_now_h', t_now_h);
                });
                $contents.on('touchend', function (e) {
                    var l = $wrap.width();
                    var v = parseInt($wrap.find('table').eq(1).css('left'));
                    var w = parseInt($wrap.width() / 3);
                    _scroll_y = false; $info.attr('t_start_s', ''); $info.attr('t_start_h', '');
                    if (w > Math.abs(v)) {
                        $wrap.find('table').eq(0).animate({ left: -l });
                        $wrap.find('table').eq(1).animate({ left: 0 });
                        $wrap.find('table').eq(2).animate({ left: l });

                    }
                    else {
                        if (v < 0) { $info.find('#date-next').trigger('click'); }
                        else { $info.find('#date-prev').trigger('click'); }
                    }
                });
				*/
            },
            Opened: function () {
                // #30254(_obj.attr("min") 값이 없으면 _opt.min 값을 찾는다 결국 2군데 값이 존재 <- attr은 값이 수정 될 수가 있다)
                var max = null, min = null;
                if( _obj.attr("min") != null){
                    min = GetDate(_obj.attr("min"));
                }
                else{
                    if (_opt.min != null) {
                        min = (typeof (_opt.min) == 'object') ? GetDate($(_opt.min).val()) : ((typeof (_opt.min) == 'string') ? GetDate(_opt.min) : null);
                    }
                }
                if( _obj.attr("max") != null){
                    max= GetDate(_obj.attr("max"));
                }
                else{
                    if (_opt.max != null) {
                        max = (typeof (_opt.max) == 'number') ? AddDay(GetDate($(_opt.min).val()), _opt.max) : GetDate(_opt.max);
                    }
                }

                $info.attr('obj', _obj.attr('id'));
                $info.attr('min', GetDateStr(min)); // #30254(최종 $info.attr("min") 값이 담긴다)
                $info.attr('max', GetDateStr(max)); // #30254(최종 $info.attr("max") 값이 담긴다)
                var date = GetDate(_obj.val());
                var year = date.getFullYear();
                var month = date.getMonth() + 1;

                Fn.Change(year, month);
                Fn.BeforeDraw(year, month);             
                
                $wrap.show(1,function () {
                    $wrap.attr('state', 'o');
                });
            },
            Open: function () {
                if ($info.attr('obj') != _obj.attr('id') && $wrap.css('display') == 'none') {
                    Fn.Close();
                    $wrap.stop();
                    
                    // #30254(_obj.attr("min") 값이 없으면 _opt.min 값을 찾는다 결국 2군데 값이 존재 <- attr은 값이 수정 될 수가 있다)
                    var max = null, min = null, enableDays = null;
                    var chk_disp_date1 = null, chk_disp_date2 =null, chk_disp_date3 =null, chk_disp_date4 =null;
                    if( _obj.attr("min") != null){
                    	min = GetDate(_obj.attr("min"));
                    }
                    else{
	                    if (_opt.min != null) {
	                        min = (typeof (_opt.min) == 'object') ? GetDate($(_opt.min).val()) : ((typeof (_opt.min) == 'string') ? GetDate(_opt.min) : null);
	                    }
                    }
                    if( _obj.attr("max") != null){
                    	max= GetDate(_obj.attr("max"));
                    }
                    else{
	                    if (_opt.max != null) {
	                        max = (typeof (_opt.max) == 'number') ? AddDay(GetDate($(_opt.min).val()), _opt.max) : GetDate(_opt.max);
	                    }
                    }
                    
                    if( _obj.attr("chk_disp_date1") != null){
                    	chk_disp_date1 = GetDate(_obj.attr("chk_disp_date1"));
                    }
                    else{
	                    if (_opt.chk_disp_date1 != null) {
	                    	chk_disp_date1 = (typeof (_opt.chk_disp_date1) == 'object') ? GetDate($(_opt.chk_disp_date1).val()) : ((typeof (_opt.chk_disp_date1) == 'string') ? GetDate(_opt.chk_disp_date1) : null);
	                    }
                    }
                    if( _obj.attr("chk_disp_date2") != null){
                    	chk_disp_date2= GetDate(_obj.attr("chk_disp_date2"));
                    }
                    else{
	                    if (_opt.chk_disp_date2 != null) {
	                    	chk_disp_date2 = (typeof (_opt.chk_disp_date2) == 'number') ? AddDay(GetDate($(_opt.chk_disp_date2).val()), _opt.chk_disp_date2) : GetDate(_opt.chk_disp_date2);
	                    }
                    }
                    
                    if( _obj.attr("chk_disp_date3") != null){
                    	chk_disp_date3= GetDate(_obj.attr("chk_disp_date3"));
                    }
                    else{
	                    if (_opt.chk_disp_date3 != null) {
	                    	chk_disp_date3 = (typeof (_opt.chk_disp_date3) == 'number') ? AddDay(GetDate($(_opt.chk_disp_date3).val()), _opt.chk_disp_date3) : GetDate(_opt.chk_disp_date3);
	                    }
                    }
                    
                    if( _obj.attr("chk_disp_date4") != null){
                    	chk_disp_date4= GetDate(_obj.attr("chk_disp_date4"));
                    }
                    else{
	                    if (_opt.chk_disp_date4 != null) {
	                    	chk_disp_date4 = (typeof (_opt.chk_disp_date4) == 'number') ? AddDay(GetDate($(_opt.chk_disp_date4).val()), _opt.chk_disp_date4) : GetDate(_opt.chk_disp_date4);
	                    }
                    }
                    
                    if( _obj.attr("enableDays") != null){
                    	enableDays = _obj.attr("enableDays");
                    }
                    else{
	                    if (_opt.enableDays != null) {
	                    	enableDays = ((typeof (_opt.enableDays) == 'string') ? _opt.enableDays : null);
	                    }
                    }

                    $info.attr('obj', _obj.attr('id'));
                    $info.attr('min', GetDateStr(min)); // #30254(최종 $info.attr("min") 값이 담긴다)
                    $info.attr('max', GetDateStr(max)); // #30254(최종 $info.attr("max") 값이 담긴다)
                    $info.attr('chk_disp_date1', GetDateStr(chk_disp_date1));
                    $info.attr('chk_disp_date2', GetDateStr(chk_disp_date2));
                    $info.attr('chk_disp_date3', GetDateStr(chk_disp_date3));
                    $info.attr('chk_disp_date4', GetDateStr(chk_disp_date4));
                    $info.attr('enableDays', enableDays);
                    var date = GetDate(_obj.val());
                    var year = date.getFullYear();
                    var month = date.getMonth() + 1;
                    //console.log(date+','+year+','+month)

                    //강조표시 클래스 적용
                    if (_opt.activeClass != null) {
                        $(_obj).addClass(_opt.activeClass);
                    }

                    Fn.Change(year, month);
                    Fn.BeforeDraw(year, month);
                    Fn.Show();
                }
                else{
                    Fn.Close();
                }
            },
            Close: function () {
                $info.attr('obj', '');
                $info.attr('min', '');
                $info.attr('max', '');
                $info.attr('enableDays', '');
                _obj.closest('lable').removeClass('activate');
                //강조표시 클래스 삭제
                if (_opt.activeClass != null) {
                    $(_obj).removeClass(_opt.activeClass);
                }
				/*
                $wrap.slideUp(200, function () {
                    $wrap.find('table').remove();
                    $wrap.attr('state', 'c');
                });
				*/
				$wrap.hide(1, function () {
                    $wrap.find('table').remove();
                    $wrap.attr('state', 'c');
                });
				$('#'+_obj.attr('id')).parents('.input.on').removeClass('on');
            },
            Show: function () {
                var top = _obj.offset().top;
                var inputH = _obj.height();
                var top_result = (_opt.inline) ? 0 : top + inputH + 5;
                
                var inputTop = $('#'+_obj.attr('id')).parents('.input').offset().top;
                
				
				$wrap.css('top', top_result).show(1,function () {
                    $wrap.attr('state', 'o');     //달력 외 클릭시 닫기
                    $(document).one('click', function (e) {
                        e.stopPropagation();
                        var calendar = $(e.target).closest('.datepicker-wrap');
                        if (calendar.length == 0 && calendar.attr('state') != 'c') {
                            Fn.Close();
                        }
                    });
                });
				$('html,body').animate({
						scrollTop : inputTop - _topGap
					},400);

				/*$wrap.css('top', top_result).slideDown(400, function () {
                    $wrap.attr('state', 'o');     //달력 외 클릭시 닫기
                    $(document).one('click', function (e) {
                        e.stopPropagation();
                        var calendar = $(e.target).closest('.datepicker-wrap');
                        if (calendar.length == 0 && calendar.attr('state') != 'c') {
                            Fn.Close();
                        }
                    });
                });*/
                _obj.closest('lable').removeClass('activate');
                
                for( var i = 0; i < _arrDatePickerStorage.length; i++ ){
                	
                	if( _arrDatePickerStorage[i] !== Fn ){
                		_arrDatePickerStorage[i].Close();
                	}
                }

				$('#'+_obj.attr('id')).parent('.input').addClass('on');
            },
            Change: function (year, month) {
                var info = GetMonth(year, month);
                var min = GetDate($info.attr('min'));
                var max = GetDate($info.attr('max'));
                
                $info.find('.this-month').text(info.year + '.' + ((info.month < 10) ? ('0' + info.month) : info.month));
                $info.attr('year', info.year);
                $info.attr('month', info.month);
                 
                //#25837 
                // #30254(최종 $info.attr("min") 값을 가져와서 좌,우 버튼 컨트롤)
                //min 
                if (min != null) {
                    if(year <= min.getFullYear() && month <= min.getMonth()+1){
                        $info.find('#date-prev').addClass('off'); 
                    }
                    else{
                        $info.find('#date-prev').removeClass('off'); 
                    }
                 }

                //max
                if (max != null) {
                    if(year >= max.getFullYear() && month >= max.getMonth()+1){
                        $info.find('#date-next').addClass('off'); 
                    }
                    else{
                        $info.find('#date-next').removeClass('off'); 
                    }
                }
            },
            BeforeDraw: function (year, month) {
                if (_opt.title != null) {
                	if( _obj.attr("title") != null){
                		_opt.title = _obj.attr("title");
                    }
                    $wrap.find('.datepicker-header .h_title').text(_opt.title);
                }
                
                /*$wrap.find('.contents').append(Fn.DrawMonth(year, month - 1, -$wrap.width()));
                $wrap.find('.contents').append(Fn.DrawMonth(year, month, 0));
                $wrap.find('.contents').append(Fn.DrawMonth(year, month + 1, $wrap.width()));*/
                $wrap.find('.contents').append(Fn.DrawMonth(year, month - 1, '-100%'));
                $wrap.find('.contents').append(Fn.DrawMonth(year, month, 0));
                $wrap.find('.contents').append(Fn.DrawMonth(year, month + 1, '100%'));
            },
            DrawMonth: function (year, month, left) {
                var info = GetMonth(year, month);
                var s_date = GetDate($('#' + $info.attr('obj')).val());
                var start = 1 - new Date(info.year, info.month - 1, 1).getDay();
                var end = new Date(info.year, info.month, 0).getDate();
                
                if (start == 1) { start = start - 7; }

                var html = '';
                html += '	    <table style="top:0; position:absolute; width: 100%;">';
                html += '		    <thead>';
                html += '			    <tr>';
                html += '				    <th scope="col">Su</th>';
                html += '				    <th scope="col">Mo</th>';
                html += '				    <th scope="col">Tu</th>';
                html += '				    <th scope="col">We</th>';
                html += '				    <th scope="col">Th</th>';
                html += '				    <th scope="col">Fr</th>';
                html += '				    <th scope="col">Sa</th>';
                html += '			    </tr>';
                html += '		    </thead>';
                html += '		    <tbody></tbody>';
                html += '	    </table>';

                $table = $(html);
                $table.css('left', left);

                $tbody = $table.find('tbody');

                var min = GetDate($info.attr('min'));
                var max = GetDate($info.attr('max'));
                var enableDays = $info.attr('enableDays');
                var chk_disp_date1 = GetDate($info.attr('chk_disp_date1'));
                var chk_disp_date2 = GetDate($info.attr('chk_disp_date2'));
                var chk_disp_date3 = GetDate($info.attr('chk_disp_date3'));
                var chk_disp_date4 = GetDate($info.attr('chk_disp_date4'));
                
                for (var i = 0; i < 6; i++) {
                    var $tr = jQuery('<tr></tr>');
                    for (var j = 0; j < 7; j++) {
                        var d = new Date(info.year, info.month - 1, start);

                        var $td = jQuery('<td><a href="#"><span class="number">' + d.getDate() + '</span></a></td>');
                        $td.find('a').attr('date', GetDateStr(d));
                        if (_obj.attr("chk_fix_date") == 'Y' && s_date.getFullYear() == d.getFullYear() && s_date.getMonth() == d.getMonth() && d.getDate() == s_date.getDate()) { $td.addClass('current'); }
                       
                        if (info.month != (d.getMonth() + 1)) { $td.addClass('disable'); }

                        var no_flag = false;
                        if (min != null) {
                            if (d.getFullYear() < min.getFullYear()) {
                                no_flag = true;
                            } else if (d.getFullYear() == min.getFullYear() && d.getMonth() < min.getMonth()) {
                                no_flag = true;
                            } else if (d.getFullYear() == min.getFullYear() && d.getMonth() == min.getMonth() && d.getDate() <= min.getDate()) {
                                no_flag = true;
                            }
                        }

                        if (max != null) {
                            if (d.getFullYear() > max.getFullYear()) {
                                no_flag = true;
                            } else if (d.getFullYear() == max.getFullYear() && d.getMonth() > max.getMonth()) {
                                no_flag = true;
                            } else if (d.getFullYear() == max.getFullYear() && d.getMonth() == max.getMonth() && d.getDate() > max.getDate()) {
                                no_flag = true;
                            }
                        }
                        
                        if( chk_disp_date1 != null){
                        	if( d.getFullYear() == chk_disp_date1.getFullYear() && d.getMonth() == chk_disp_date1.getMonth() && d.getDate() == chk_disp_date1.getDate()){
                        		if( _obj.attr("chk_fix_date") == 'Y' && s_date.getFullYear() == chk_disp_date1.getFullYear() && s_date.getMonth() == chk_disp_date1.getMonth() && s_date.getDate() == chk_disp_date1.getDate()){
									$td.addClass('current');
								}
                        		else{
                        			$td.addClass('current selected-day');
                        		}
                        	}
                        }
                        
                        if( chk_disp_date2 != null){
                        	if( d.getFullYear() == chk_disp_date2.getFullYear() && d.getMonth() == chk_disp_date2.getMonth() && d.getDate() == chk_disp_date2.getDate()){
                        		if( _obj.attr("chk_fix_date") == 'Y' && s_date.getFullYear() == chk_disp_date2.getFullYear() && s_date.getMonth() == chk_disp_date2.getMonth() && s_date.getDate() == chk_disp_date2.getDate()){
									$td.addClass('current');
								}
                        		else{
                        			$td.addClass('current selected-day');	
                        		}
                        	}
                        }
                        
                        if( chk_disp_date3 != null){
                        	if( d.getFullYear() == chk_disp_date3.getFullYear() && d.getMonth() == chk_disp_date3.getMonth() && d.getDate() == chk_disp_date3.getDate()){
                        		if( _obj.attr("chk_fix_date") == 'Y' && s_date.getFullYear() == chk_disp_date3.getFullYear() && s_date.getMonth() == chk_disp_date3.getMonth() && s_date.getDate() == chk_disp_date3.getDate()){
									$td.addClass('current');
								}
                        		else{
                        			$td.addClass('current selected-day');	
                        		}
                        	}
                        }
                        
                        if( chk_disp_date4 != null){
                        	if( d.getFullYear() == chk_disp_date4.getFullYear() && d.getMonth() == chk_disp_date4.getMonth() && d.getDate() == chk_disp_date4.getDate()){
                        		if( _obj.attr("chk_fix_date") == 'Y' && s_date.getFullYear() == chk_disp_date4.getFullYear() && s_date.getMonth() == chk_disp_date4.getMonth() && s_date.getDate() == chk_disp_date4.getDate()){
									$td.addClass('current');
								}
                        		else{
                        			$td.addClass('current selected-day');	
                        		}
                        	}
                        }
                        
                        //공휴일
                        if( !$td.hasClass('disable') && isHoliday(GetDateStr(d)) ){
                        	$td.addClass('holiday');
                        }
                        
                        //#20525 해외패키지 관련
                        if (_resState === true) {
                            //예약가능
                            if(_fixday != null){
                                if( !$td.hasClass('disable') && MarkDay(GetDateStr(d), _fixday)){
                                    $td.addClass('fix');
                                }
                            }

                            //출발가능
                            if(_startday != null){
                                if( !$td.hasClass('disable') && MarkDay(GetDateStr(d), _startday) ){
                                    $td.addClass('start');
                                }
                            }

                            //대기예약
                            if(_waitingday != null){
                                if( !$td.hasClass('disable') && MarkDay(GetDateStr(d), _waitingday) ){
                                    $td.addClass('waiting');
                                }
                            }
                        }
                        
                        //#24414(다중 선택)
                        if(_isMultiple === true && _dateList != null){
                            if( !$td.hasClass('disable') && MarkDay(GetDateStr(d), _dateList) ){
                                $td.addClass('current');
                            }
                        }
                        
                    	// enableDays : "0,6"등으로 주말 날짜만 활성화를 시킴
                    	// 2015.10.13 hubang 추가
                        if( enableDays != null ){
                        	
                        	if( enableDays.indexOf( d.getDay() + "" ) < 0 ){
                        		no_flag = true;
                        	}
                        }
                        
                        if (no_flag) {
                            $td.addClass('disable');
                            $td.find('a').addClass('no').css('cursor', 'default');
                        }

                        $tr.append($td);
                        start++;
                    }
                    $tbody.append($tr);
                }

                return $table;
            }
        };
        
        _arrDatePickerStorage.push(Fn);
        
        //#24414(다중 선택 리스트)
        this.getDateList = function(){return _dateList;};
        
        function SetDateListAdd(date){
            var targetYeardays = date.split("-")[0]; 
            
            if(_dateList == null){
                _dateList = {}; //init
            }

            if(targetYeardays in _dateList){
                if(_dateList[targetYeardays].indexOf(date) == -1){
                    _dateList[targetYeardays].push(date); //add
                }
            }
            else{
                _dateList[targetYeardays] = [];
                _dateList[targetYeardays].push(date); //add key
            }                            
            _dateList[targetYeardays].sort(); //range
        }        
        function SetDateListDelete(date){
            var targetYeardays = date.split("-")[0]; 
            
            if(targetYeardays in _dateList){
                _dateList[targetYeardays].splice(_dateList[targetYeardays].indexOf(date),1); //delete
                
                if(_dateList[targetYeardays].length <= 0){
                    delete(_dateList[targetYeardays]); //delete key
                    
                    var obj_length = Object.keys(_dateList).length;
                    if(obj_length <= 0){
                       _dateList = null; //null
                    }
                }
            }
        }
        function GetMonth(year, month) {
            if (month > 12) {
                year++;
                month = month - 12;
            }
            if (month <= 0) {
                year--;
                month = 12 + month;
            }
            return { 'year': year, 'month': month };
        }
        function GetDateStr(date) {
            try {
                if (date == null || date == 'null')
                    return null;

                date = new Date(date);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();

                return (year + '-' + ((month < 10) ? '0' : '') + month + '-' + ((day < 10) ? '0' : '') + day);
            } catch (e) {
                return getDateStr(new Date());
            }
        }
        function GetDate(str) {
            try {
                if (str == null || str == 'null')
                    return null;

                var str_split = str.split('-');

                var year = parseInt(str_split[0]);
                var month = parseInt(str_split[1], 10) - 1;
                var day = parseInt(str_split[2], 10);

                return new Date(year, month, day);
            } catch (e) {
                return new Date();
            }
        }
        function DiffDate(date1, date2) {
            try {
                date1 = getDate(date1);
                date2 = getDate(date2);
                return (date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24;
            } catch (e) {
                return 0;
            }
        }
        function GetDateYear(date) {
            return date.getFullYear();
        }
        function GetDateMonth(date) {
            return date.getMonth() + 1;
        }
        function GetDateDay(date) {
            return date.getDate();
        }
        function AddDay(date, day) {
            try {
                var result = date;
                result.setDate(result.getDate() + parseInt(day));
                return result;
            } catch (e) {
                return date;
            }
        }
        function MarkDay(yyyymmdd, date){
            try{
				var targetYeardays = date[ yyyymmdd.split("-")[0] ];     
				for( var i = 0; i < targetYeardays.length; i++ ){ 
					if( yyyymmdd == targetYeardays[i] ) return true;
				}
				return false;
			}
			catch(e){
				return false;
			}
        }
        
        /**
         * 입력한 날짜가 공유일인지 검사를 한다.
         * 공휴일인 경우에는 경고창 후 멈춘다.
         * 입력형식 : 2004년 3월 1일 --> 20040301
         *
         * @param string
         */
		function isHoliday( yyyymmdd ) {
			var holidays = {					
				"2014" : [
					"2014-01-01"
					, "2014-01-30"
					, "2014-01-31"
					, "2014-02-01"
					, "2014-03-01"
					, "2014-05-05"
					, "2014-05-06"
					, "2014-06-04"
					, "2014-06-06"
					, "2014-08-15"
					, "2014-09-07"
					, "2014-09-08"
					, "2014-09-09"
					, "2014-09-10"
					, "2014-10-03"
					, "2014-10-09"
					, "2014-12-25"
				]
				, "2015" : [
					"2015-01-01"
					, "2015-02-18"
					, "2015-02-19"
					, "2015-02-20"
					, "2015-03-01"
					, "2015-05-05"
					, "2015-05-25"
					, "2015-06-06"
					, "2015-08-14"
					, "2015-08-15"
					, "2015-09-26"
					, "2015-09-27"
					, "2015-09-28"
					, "2015-09-29"
					, "2015-10-03"
					, "2015-10-09"
					, "2015-12-25"
				]
				, "2016" : [
					"2016-01-01"
					, "2016-02-07"
					, "2016-02-08"
					, "2016-02-09"
					, "2016-02-10"
					, "2016-03-01"
					, "2016-05-05"
					, "2016-05-14"
					, "2016-06-06"
					, "2016-08-15"
					, "2016-09-14"
					, "2016-09-15"
					, "2016-09-16"
					, "2016-10-03"
					, "2016-12-25"
				]
				, "2017" : [
					"2017-01-01"
					, "2017-01-27"
					, "2017-01-28"
					, "2017-01-29"
					, "2017-01-30"
					, "2017-03-01"
					, "2017-05-01"
					, "2017-05-03"
					, "2017-05-05"
					, "2017-05-09"
					, "2017-06-06"
					, "2017-08-15"
					, "2017-10-02"
					, "2017-10-03"
					, "2017-10-04"
					, "2017-10-05"
					, "2017-10-06"
					, "2017-10-09"
					, "2017-12-25"
				]
				, "2018" : [
					"2018-01-01"
					, "2018-02-15"
					, "2018-02-16"
					, "2018-02-17"
					, "2018-03-01"
					, "2018-05-01"
					, "2018-05-05"
					, "2018-05-07"
					, "2018-05-22"
					, "2018-06-06"
					, "2018-06-13"
					, "2018-08-15"
					, "2018-09-23"
					, "2018-09-24"
					, "2018-09-25"
                    , "2018-09-26"
					, "2018-10-03"
					, "2018-10-09"
					, "2018-12-25"
				]
				, "2019" : [
					"2019-01-01"
					, "2019-02-04"
					, "2019-02-05"
					, "2019-02-06"
					, "2019-03-01"
                    , "2019-05-01"
					, "2019-05-05"
					, "2019-05-06"
					, "2019-05-12"
					, "2019-06-06"
					, "2019-08-15"
					, "2019-09-12"
					, "2019-09-13"
					, "2019-09-14"
					, "2019-10-03"
					, "2019-10-09"
					, "2019-12-25"
				]
				, "2020" : [
					"2020-01-01"
					, "2020-01-24"
					, "2020-01-25"
					, "2020-01-26"
					, "2020-03-01"
					, "2020-04-15"
					, "2020-04-30"
					, "2020-05-01"
					, "2020-05-05"
					, "2020-06-06"
					, "2020-08-15"
					, "2020-09-30"
					, "2020-10-01"
					, "2020-10-02"
					, "2020-10-03"
					, "2020-10-09"
					, "2020-12-25"
				]
			};		
            
            return MarkDay(yyyymmdd, holidays);
		}  
        
        jQuery.extend(_opt, opt);
        return this.each(function () {
            Fn.Init();
        });
    };
})(jQuery);