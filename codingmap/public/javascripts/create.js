var isStandAlone  = !(window.location == window.parent.location);
if(isStandAlone) window.parent.postMessage('http','*');

$(function(){
	var isAdmin = false;
    var isSuperAdmin = false;
	var modListIdx = 0;
	$.get('/getAdmin',function(data){        
		if(data.admin == "Y"){
			isAdmin = true;
			$('.adm-hidden').removeClass('adm-hidden');
		}
        if(data.superAdmin == "Y"){
			isSuperAdmin = true;
			$('.superAdm-hidden').removeClass('superAdm-hidden');
		}
        
        $.get('/codingmap/getList',function(data){
            $.each(data,function(i){
                if(isAdmin){
                    $('.project-list>tbody').append('<tr><td class="tal"><a href="/codingmap/'+data[i].router+'" class="project-link"><b>'+data[i].name+'</b></a> <span class="ico-private'+(data[i].privateYN =='0' ? '':' private-type')+'">'+(data[i].privateYN =='0' ? '':'비공개')+'</span></td><td><button class="btn-project-modify btn-gray">컬럼편집</button></td><td><button class="remove-project btn-gray">삭제</button></td></tr>');
                }
                else{
                    if(data[i].privateYN == '0'){
                         $('.project-list>tbody').append('<tr><td class="tal"><a href="/codingmap/'+data[i].router+'"><b>'+data[i].name+'</b></a></td>');
                    }				
                }
            });
			//console.log(data[1])
            if(data == ""){
                $('.project-list>tbody').append('<tr><td colspan="3" class="no-project-list">등록된 프로젝트가 없습니다.</td><tr>');
            }
            if(destination != ''){
                location.href = "/codingmap/"+destination;
            }
            $('.project-wrapper .toggle').trigger('click')
        });
	});
    
    if(localStorage.getItem('lastNotice') == null){        
        $.post('/getNotice',function(response){
            if(response != ''){
                dimmLayerPop('notice-view');
                $('#notice-lastest').html(response.content);
                localStorage.setItem('lastNotice',response.pubDate)
            }            
        });
    } else {
        $.post('/getNotice',function(response){
            if(localStorage.getItem('lastNotice') !== response.pubDate){
              dimmLayerPop('notice-view');
              $('#notice-lastest').html(response.content);
              localStorage.setItem('lastNotice',response.pubDate)  
            }
        });
    }
    
    $('.create-notice').on('click',function(e){
        e.preventDefault();
		dimmLayerPop('notice-write');
	});
	
	
	$('.create-open').on('click',function(e){
        e.preventDefault();
		$('#name, #router').val('');
		$('#name').focus();
		$('#add-set').removeAttr('checked');
		$('.column-set').hide();
		$('.column-set li').each(function(i){
			if(i<7){
				$(this).find('input[type="text"]').val("depth"+(i+1));
			}
		})
		$('.column-set input[type="checkbox"]').attr('checked','checked');
		$('.column-hide').removeClass('column-hide');
		$('#mod-btn').hide();
		$('#create-btn').show();
		$('#create-tit').html("신규 프로젝트 생성하기")
		$('#name').val('').removeAttr('disabled')
		$('#router').val('').removeAttr('disabled')
		dimmLayerPop('p-list-create-layer');
	});
    
    $('.update-src').on('click',function(e){
        e.preventDefault();
        dimmLayerPop('dist-log');
        $('#dist-log-result').val('배포중입니다...').addClass('distributing');
        $.post('/updateSrc',function(data){            
            $('#dist-log-result').val(data).removeClass('distributing');
        });
    });
    
    $('.exclude-list').on('click',function(e){
        e.preventDefault();
        dimmLayerPop('exclude-log');        
        $.post('/getExcludeList',function(data){            
            $('#exclude-log-result').val(data);
        });
    });
    
    $('#update-exclude-list').on('click',function(){
        $.post('/updateExcludeList',{lists:$('#exclude-log-result').val()},function(response){
            if(response == 'OK') alert('개발계 배포 예외파일 리스트를 업데이트하였습니다.')
        });
    });
    
    $('#notice-dist').on('click',function(){
        $.post('/createNotice',{content:$('#notice-list').html()},function(response){
            if(response == 'OK') alert('저장이 완료되었습니다. 사용자가 접속을 시도하면 공지가 노출됩니다.')
        })
    });
	
	$('#create-btn').on('click',function(e){
		e.preventDefault();   
		if($('#name').val().trim() == ''){
			alert("프로젝트 명을 입력해주세요");
			return false;
		}
		if($('#router').val().trim() == ''){
			alert("프로젝트고유 ID를 입력해주세요");
			return false;
		}
		var pattern1 = /^[a-zA-Z]/;
		var pattern2 = /[^(A-Za-z0-9)]/;
		if(!pattern1.test($('#router').val())){
			alert("프로젝트 고유 ID의 첫글자는 영문만 가능합니다.");
			return false;
		}
		if(pattern2.test($('#router').val())){
			alert("프로젝트 고유 ID는 영문과 숫자 조합만 가능합니다.");
			return false;
		}
		var accData = $('#project-create').serialize();
		$.post('/projectCreate',accData,function(data){
			if(data.status == 'Y'){
				$.get('/codingmap/getList',function(data){
                    $('.project-list>tbody').empty();
                    $.each(data,function(i){
                        if(isAdmin){
                            $('.project-list>tbody').append('<tr><td class="tal"><a href="/codingmap/'+data[i].router+'" class="project-link"><b>'+data[i].name+'</b></a> <span class="ico-private'+(data[i].privateYN =='0' ? '':' private-type')+'">'+(data[i].privateYN =='0' ? '':'비공개')+'</span></td><td><button class="btn-project-modify btn-gray">컬럼편집</button></td><td><button class="remove-project btn-gray">삭제</button></td></tr>');
                        }
                        else{
                            if(data[i].privateYN == '0'){
                                 $('.project-list').append('<tr><td colspan="3" class="tal"><a href="/codingmap/'+data[i].router+'"><b>'+data[i].name+'</b></a></td>');
                            }				
                        }
                    });
                    //console.log(data[1])
                    if(data == ""){
                        $('.project-list>tbody').append('<tr><td colspan="3" class="no-project-list">등록된 프로젝트가 없습니다.</td><tr>');
                    }
                    if(destination != ''){
                        location.href = "/codingmap/"+destination;
                    }
                });
                $('.no-project-list').remove();
				dimmLayerPop('p-list-create-layer',0);
			}
			else{
				alert(data.message)
			}
		});
	});

	$(document).on('click','.project-list .remove-project',function(){
		var delete_project = $(this).closest('tr').find('.project-link').text();
		var confirmResult = confirm(delete_project+" 프로젝트를 삭제 하시겠습니까? \n삭제 시 해당 프로젝트의 모든 데이터베이스 정보가\n삭제됩니다.");
		if(confirmResult){
			var routerValue = $(this).closest('tr').find('.project-link').attr('href').split('codingmap/')[1];
			$.post('/projectRemove', {
				router: routerValue
			},function(){
				$.get('/codingmap/getList',function(data){
                    $('.project-list>tbody').empty();
                    $.each(data,function(i){
                        if(isAdmin){
                            $('.project-list>tbody').append('<tr><td class="tal"><a href="/codingmap/'+data[i].router+'" class="project-link"><b>'+data[i].name+'</b></a> <span class="ico-private'+(data[i].privateYN =='0' ? '':' private-type')+'">'+(data[i].privateYN =='0' ? '':'비공개')+'</span></td><td><button class="btn-project-modify btn-gray">컬럼편집</button></td><td><button class="remove-project btn-gray">삭제</button></td></tr>');
                        }
                        else{
                            if(data[i].privateYN == '0'){
                                 $('.project-list>tbody').append('<tr><td class="tal"><a href="/codingmap/'+data[i].router+'"><b>'+data[i].name+'</b></a></td>');
                            }				
                        }
                    });
                    //console.log(data[1])
                    if(data == ""){
                        $('.project-list>tbody').append('<tr><td colspan="3" class="no-project-list">등록된 프로젝트가 없습니다.</td><tr>');
                    }
                    if(destination != ''){
                        location.href = "/codingmap/"+destination;
                    }
                });
			});
			//$(this).parent().parent().remove();
		}
	})
	
	$(document).on('click','.project-list .btn-project-modify', function(){
		modListIdx = $(this).closest('tr').index()
		var routerValue = $(this).closest('tr').find('.project-link').attr('href').split('codingmap/')[1];
		var projectName = $(this).closest('tr').find('a b').text();
		var privateWrap = $(this).closest('tr').find('td');
		$('#modRouter').val(routerValue);
		var accData = $('#project-create').serialize();
		$.post('/getColumn',{router:routerValue},function(data){
			var changeColumn = $('.column-set input[type="text"]');
			var changeRange = $('.column-set input[type="checkbox"]');
			$.each(data.data_column,function(i){
				changeColumn.eq(i).val(data.data_column[i]);
				if(data.data_range[i] == "true"){
					changeRange.eq(i).attr('checked','checked');
					changeRange.eq(i).siblings('span').removeClass('column-hide');
				}
				else{
					changeRange.eq(i).removeAttr('checked');
					changeRange.eq(i).siblings('span').addClass('column-hide');
				}
			});
			if(data.data_private == '1'){
				$('#pyn2').trigger('click');
			}
			else{
				$('#pyn1').trigger('click');
			}
		});
		
		$('#add-set').attr('checked','checked');
		$('.column-set').show();
		$('#create-btn').hide();
		$('#mod-btn').show();
		$('#create-tit').html("컬럼 수정하기")
		$('#name').val(projectName).attr('disabled','disabled')
		$('#router').val(routerValue).attr('disabled','disabled')
		dimmLayerPop('p-list-create-layer');
	});
	$('#mod-btn').on('click',function(e){
		e.preventDefault();
		var accData = $('#project-create').serialize();		
		$.post('/columnModify',accData,function(data){
			if($('#pyn1').attr('checked') == "checked"){
				if($('.project-list tbody tr').eq(modListIdx).find('td .private-type').size() > 0){
					$('.project-list tbody tr').eq(modListIdx).find('td .private-type').remove();
				}
			}
			else{
				if($('.project-list tbody tr').eq(modListIdx).find('td .private-type').size() < 1){
					$('.project-list tbody tr').eq(modListIdx).find('td:first-child a').append('<span class="ico-private private-type">비공개</span>')
				}
			}
			dimmLayerPop('p-list-mod-layer',0);
		})
		alert("변경이 완료되었습니다");
	});
		
	$('#add-set').on('click',function(){
		if($(this).is(':checked')){
			$('.column-set').show();
		}
		else{
			$('.column-set').hide();
		}
	});
	$('.column-set input:checkbox').on('click',function(){
		if(!$(this).is(':checked')){
			$(this).removeAttr('checked');
			$(this).siblings('span').addClass('column-hide');
		}
		else{
			$(this).attr('checked','checked');
			$(this).siblings('span').removeClass('column-hide');
		}
	})
    $('.log-out').on('click',function(){
        location.href = "/logoutRequest";
    });
    
    $.getJSON('https://redmine.tidesquare.com/issues.json?assigned_to_id=me&callback=?',function(res){ 
        //console.log(JSON.stringify(res))
        var $dest = $('#my-issues>tbody');
        $('#issueCnt').text(res.total_count)
        if(res.total_count){
            $dest.empty();
            $.each(res.issues,function(i){
                $dest.prepend('<tr><td>'+this.id+'</td><td>'+this.project.name+'</td><td>'+this.tracker.name+'</td><td class="tal"><a href="https://redmine.tidesquare.com/issues/'+this.id+'" target="_blank">'+this.subject+'</a> ('+this.status.name+')</td><td>'+this.created_on.substr(0,10)+'</td></tr>')
            });
            $('#my-issues>tbody td.tal a').live('click',function(e){
                e.preventDefault();
                if(isStandAlone){
                    window.parent.postMessage(this.href,'*');
                } else {
                    window.open(this.href);
                }
            });
        } else {
            $dest.html('<tr><td colspan="5">표시할 데이터가 없습니다.</td></tr>')
        }
        
    });
    
    $('.toggle,.project-title').on('click',function(e){
        e.stopPropagation(); 
        $(this).siblings('.table-wrapper').toggle();
        var $selector = this.className == 'project-title' ? $(this).siblings('.toggle').children():$(this).children();
        $selector.attr('class',function(){
            return this.className == 'min' ? 'max' : 'min';
        });
    });  
    $('#join').mCustomScrollbar({theme:"minimal-dark"});
});

