var console = window.console || {log:function(){}};

var serverIP      = myip;
//var socket        = io.connect("http://117.52.96.14:8080",{
var socket        = io.connect(serverIP+':8080',{
    'reconnect': true,
    'reconnection delay': 500,
    'max reconnection attempts': 50
});
var projectName   = location.href.split('/')[location.href.split('/').length-1];
var cr;
var filterCheck   = '';
var hot2;
var cc_re         = />완료<\/a>/;
var firstCheck    = false;
var prefix        = codingmapServerPrefix
var statColNum;
var container     = document.getElementById('example2');
var headerLists   = [loadcolumn[0],loadcolumn[1],loadcolumn[2],loadcolumn[3],loadcolumn[4],loadcolumn[5],loadcolumn[6],'화면ID','상태','Description'];
var newWindowLink = false;
var previewType   = "type1";
var isStandAlone  = !(window.location == window.parent.location);
var isAdmin       = false;
var colLists      = [];    
var nullCheck     = false;
var sequence_row    = new Array(),
	get_db_row      = new Array(),
	get_db_col      = new Array(),
	get_db_order    = new Array(),
	update_db_row   = new Array(),
	update_db_col   = new Array(),
	update_db_order = new Array(),
	row_count       = 0,
	row_seq         = 0,
	selectionInfo   = '',
	default_line_create = true,
	queryResult     = {};

//var globalHeader  = ['1dpeth','2depth','3depth','4depth','5depth','6depth','7depth','화면ID','상태','Description'];
var globalColumns = [
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer},
    {renderer:safeHtmlRenderer}
]

var originalColWidths = [];
var colWidths = [];
var bool_removeCheck = true;
var bool_createCheck = true;
var bool_isEditing = false;
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};


socket.on('connect_error', function(err) {
  // handle server error here
  alert('서버와의 소켓통신이 끊겼습니다. \n서버가 꺼져있을 가능성이 높습니다. \n\n 새로고침 후에도 문제가 있다면 서버 담당자에게 문의하시기 바랍니다.')
  socket.close();
});

socket.on('updateMember', function (users) {        
    $('#currentJoin').empty();
    //console.log(users)
    var listHTML = ''
    for(var NameKey in users){
        listHTML += '<span data-onlineUser="'+NameKey+'"><img src="/images/ico-user-type-'+users[NameKey].gender+'.png" class="ico-user"></span>'
    }
    $('#currentJoin').html(listHTML)
});


socket.on('updaterooms', function(routers, current_room,current_router) {
    cr = current_router; 
    //console.log(routers)
    projectName = current_router;
    $('#rooms').empty();        
    $('#currentRoom').text(current_room);
    if(isStandAlone) window.parent.postMessage('{"pjtName":"'+current_room+'","pjtRouter":"'+current_router+'"}', '*');
	var thisID = 0;
    $.each(routers,function(key,value){
        if(!isAdmin){
            if(routers[key].private == '0'){
                $('#rooms').append('<li><input type="radio" id="cb_'+thisID+'" name="pjtNm"'+(routers[key].name==current_room ? ' checked':'')+' value="'+key+'"><label for="cb_'+thisID+'">'+routers[key].name+'</label></li>');
            thisID++;
            }
        } else {
            $('#rooms').append('<li><input type="radio" id="cb_'+thisID+'" name="pjtNm"'+(routers[key].name==current_room ? ' checked':'')+' value="'+key+'"><label for="cb_'+thisID+'">'+routers[key].name+'</label></li>');
            thisID++;
        }
        
        
    });
	
    $('input[name=pjtNm]').on('click',function(){      
        //location.href = '/codingmap/'+this.value;
        $.post('/fromProjectList',{destination:this.value},function(){
            location.href='/codingmap/list';
        })
    });
	
    getModiList();
});

socket.on('toUpdateStatus',function(targetObj){        
    $('#uploadList li').each(function(){
        var curText = $(this).find('a').text();
        if(curText == targetObj.name){
            $(this).find('select').val(targetObj.status);
            var status = targetObj.status;
            var updateStatus;
            if(status == '1'){
                $(this).addClass('done');
            } else if(status == '0'){
                $(this).removeClass('done');
            }else if(status == '2'){
				$(this).closest('li').remove();
				if($('#uploadList li').size() == 0){
					$('#uploadList').html('<li class="empty">현재 수정요청된 파일이 없습니다.</li>');
				}
			}
            updateReqNum();
            console.log('typeof status : '+typeof status)
            switch(status){
                case "0":
                    updateStatus = '요청중'
                    break;
                case "1":
                    updateStatus = '수정확인완료'
                    break;
            }
            if(status != '2') displayNotification(targetObj.author+' says :"',targetObj.name+'" 파일을\n "'+updateStatus+'"(으)로 업데이트 했습니다.');
            return false;
        }
    });
});

socket.on('toclient', function(data) {
    if (data.msg) { // data.msg === 1개이상의 셀 정보 array
        $.each(data.msg, function(i) {
            hot2.setDataAtCell(data.msg[i][0], data.msg[i][1], data.msg[i][3], 'socket');
        });
		get_db_row = data.db_row;
		get_db_order = data.db_order;
    } else if (data.loca) {
        selectionInfo = data.loca;
        user = data.ip;
		hot2.render();
		
		/*	
        hot2.updateSettings({
            cell : [
                {row: data.loca[0], col: data.loca[1], renderer: selectionDelegateRenderer}
            ]
        });
		*/
    }
    completePage(hot2.getData());
});

socket.on('toNewDoc', function(data) {
	$('#uploadList li.empty').remove();
	$('#uploadList').prepend(data);
	var docSize = $('#uploadList li').size();
	$('#mcount').html(docSize);
});
socket.on('toNotiNewDoc',function(doc){
    console.log(JSON.stringify(doc));
    var pubuser = doc.data.username;
    var body    = doc.data.name;
    var pubdate = doc.data.pubdate;
    var status  = doc.data.status;
    switch(status){
        case 0:
            status = '업로드'
            break;
        case 1:
            status = '수정확인완료 처리'
    }    
    displayNotification(pubuser+' says :','수정요청 리스트에 "'+body+'" 파일을\n "'+status+'" 했습니다.');
});

socket.on('deleteCell',function(outUser){
    $('td[data-user='+outUser+'].otherSelected').removeClass('otherSelected')
});

socket.on('toOtherDeselect',function(){
    //console.log('other deselected!!')
    $('td.otherSelected').removeClass('otherSelected')
	selectionInfo = '';
});

socket.on('toDepthChange',function(rangeObj){   
	var rangeValue = rangeObj.range-1;
	$configDepth.eq(rangeValue).toggleClass('removeDepth');
	toggleColumnAt(parseInt($configDepth.eq(rangeValue).attr('data-column')));
});

socket.on('tocRemoveRow',function(data){   
	console.log("삭제소켓 받음")
	
	$.each(data.row,function(i){
		bool_removeCheck = false;
		get_db_row.splice(data.row[0],1);
		get_db_order.splice(data.row[0],1);
		console.log("소켓받은 order : " + get_db_order)
		hot2.alter('remove_row',data.row[0]);
	})
});

socket.on('toCreateRow',function(data){   
	bool_createCheck = false;
	hot2.alter('insert_row',data.row)
});

socket.on('toEditing',function(data){ 
	bool_isEditing = data.edit;
});

$(document).on('click',function(){
    $('.menu-btn.on').removeClass('on');
    $('.menu-list').hide();
});

function getAdmin(){
	$.get('/getAdmin',function(data){
		if(data.admin == "Y"){
			$('.adm-hidden').removeClass('adm-hidden');
			isAdmin = true;
		}
		else{
			hot2.updateSettings({contextMenu: false});
			$('.wrapper-outer').on('contextmenu',function(){
				return false;
			})
			isAdmin = false;
		}
	})
}
getAdmin();

$('#toggleModifyWrap').on('click',function(e){
    e.stopPropagation();
});

$('.menu-btn').live('click',function(e){
    e.stopPropagation();
    $('.menu-btn.on').not(this).removeClass('on');
    $(this).toggleClass('on')
    $(this).next().toggle();
});

$('.menu-btn,.menu-list').on('mousedown',function(e){
    e.stopPropagation();
});

$('.menu-btn').on('mouseenter',function(){
    var clicked = $('.menu-btn.on').length;
    if(clicked){
        $('.menu-list:visible').hide();
        $('.menu-btn.on').removeClass('on');
        $(this).addClass('on');
        $(this).next().show();
    }
});

$('.menu-list').on('click',function(e){
   e.stopPropagation(); 
});

function updateReqNum(){
    var num = $('#uploadList li').not('.done, .empty').length;
    $('#mcount').text(num);
    if(num == 0)$('#mcount').addClass('cleared');
    else $('#mcount').removeClass('cleared');
}

function checkFile() {
    var fileElement = document.getElementById("upload");
    var fileExtension = "";
    if (fileElement.value.lastIndexOf(".") > 0) {
        fileExtension = fileElement.value.substring(fileElement.value.lastIndexOf(".") + 1, fileElement.value.length);
    }
    if (fileExtension == "ppt" || fileExtension == "pptx" || fileExtension == "xlsx" || fileExtension == "xls") {
        return true;
    }
    else {             
        return false;
    }
}

function checkSameFile(){
    var founded = false;
	var filePath = $('#upload').val();
	var standbyFile = filePath.substr(filePath.lastIndexOf('\\')+1); 
    $('#uploadList a').each(function(){
        if($(this).text()==standbyFile){
            founded = true;
            return false;
        }
    });
    return founded;        
}

function completePage(datas){
    currentComplete = 0;
	total = datas.length
	
    $.each(datas,function(i){
        var tr = datas[i];
        $.each(tr,function(j){
            var td = tr[j];
            if(cc_re.test(td) ==true){
                ++currentComplete;
            }
			if(td != null && td.trim() != ''){
				nullCheck = true;
			}
        });
		if(!nullCheck) total -= 1;
		nullCheck = false;
    });
	if(currentComplete == 0){
    	per = 0;
	}
	else{
		var per = ((currentComplete)*100) / total;
    	per = Math.round(per*10)/10;
	}
    $('#total').html(total) ;
    $('#ing').html(currentComplete);
    $('#per').html(per);
}

function getModiList(){    
    $.get('/'+projectName+'/modifyList',function(filesArray){ 
        if(filesArray.length){
            var join='';
            $.each(filesArray,function(i){				
                join+='<li class="'+(filesArray[i].status=='0'?'':'done')+'">';                
                join+='<a href="/data/'+cr+'/uploads/'+filesArray[i].name+'">'+filesArray[i].name+'</a> ';
                if(filesArray[i].username !== undefined) join+='<span class="comment">created by <span class="pub-user">'+(filesArray[i].username)+'</span>, '+filesArray[i].pubdate+'</span>';
                join+='<select>';
                join+='<option value="0" '+(filesArray[i].status=='0'?'selected':'')+'>요청중</option>';
                join+='<option value="1" '+(filesArray[i].status=='0'?'':'selected')+'>수정확인 완료</option>';
				join+='<option value="2">삭제</option>';
                join+='</select>';
                join+='</li>';
            });
            $('#uploadList').html(join);
            updateReqNum();
        } else {
            $('#uploadList').html('<li class="empty">현재 수정요청된 파일이 없습니다.</li>');
        }
    });
}
var prev_select = '';
$('#uploadList select').live('focus',function(){
	prev_select = $(this).val();
	console.log(prev_select);
})
$('#uploadList select').live('change',function(){ //0:진행중,1:확인완료,2:삭제    
    var curStatus = $(this).val();
    var curName = $(this).parent().find('a').text();
    var curAuthor = $(this).parent().find('.pub-user').text() || 'R2PC';
    var curUser = $('#currentUserName').text();    
    if(curStatus == '1'){
        if(curUser == curAuthor){
            $(this).parent().addClass('done');
            prev_select = $(this).val();  
        } else {
            $(this).val(prev_select);
            alert('파일등록자만 변경할 수 있습니다.');
            return false;
        }
              
    } else if(curStatus == '0'){
        if(curUser == curAuthor){
            $(this).parent().removeClass('done');
            prev_select = $(this).val();
        } else {
            $(this).val(prev_select);
            alert('파일등록자만 변경할 수 있습니다.');
            return false;
        }
    } else if(curStatus == '2'){
        if(!isAdmin){
            $(this).val(prev_select);
            alert('관리자만 삭제할 수 있습니다.')
			return false;
        } else {
            var delect_list = confirm("\""+curName +"\" 파일을 삭제하시겠습니까");
            if(delect_list){
                $(this).closest('li').remove();
                if($('#uploadList li').size() == 0){
                    $('#uploadList').html('<li class="empty">현재 수정요청된 파일이 없습니다.</li>');
                }
            }
        }
	}
    $.post('/'+projectName+'/updateMList',{name:curName,status:curStatus});
    socket.emit('fromUpdateStatus', {
        name : curName,
        status : curStatus,
        author : curAuthor
    });
    updateReqNum();
});

$('#uploadForm').submit(function(e){
    e.preventDefault();
    if($('#upload').val()!='' && checkFile() && !checkSameFile()){        
        $(this).ajaxSubmit({
			url : '/'+projectName+'/upload',
            error: function(xhr) {
                status('Error: ' + xhr.status);
            },
            success: function(response) {
                var data = JSON.parse(response)
                var $mcount = $('#mcount');
                var newDocs = '<li><a href="/data/'+projectName+'/uploads/'+data.name+'">'+data.name+'</a> <span class="comment">created by <span class="pub-user">'+data.username+'</span>, '+data.pubdate+'</span> <select><option value="0">요청중</option><option value="1">수정확인 완료</option><option value="2">삭제</option></select></li>';
				
                if($('#uploadList li').hasClass('empty')){
                    $('#uploadList').html(newDocs);
					
                } else {
                    $('#uploadList').prepend(newDocs);
                }
                $('#uploadList li:first').highlight();
                updateReqNum();

                socket.emit('fromNewDoc', {
                    data: newDocs
                });
                socket.emit('fromNotiNewDoc', {
                    data: data
                });
            }
        });
        $('#upload').val('');
    } else if($('#upload').val()!='' && !checkFile()){
        alert("파워포인트나 엑셀파일만 업로드 가능합니다.");        
    } else if($('#upload').val()!='' && checkSameFile()){
        alert('같은 이름의 수정파일이 이미 리스트에 존재합니다.\n다른이름으로 변경하여 업로드 해 주세요');
    } else {
        alert('파일을 먼저 선택하세요.')
    }
    return false;
});


$('.btn-update').on('click',function(){
    $.get('/svnUpdate'); 
});

if(!!localStorage.getItem('codingmap_whosPC')){       
    prefix = localStorage.getItem('codingmap_whosPC');        
}

$.get('/getServerList',function(response){       
    if(response.src != null) {
        $('#server').html(response.src);
        $('.btn-update').css('display','inline-block');
        $('td:contains("대기")').addClass('working');
        $('input[name=whosPC]').each(function(){
            if($(this).val() == prefix){
                $(this).click();
                $('#server-btn').attr('data-sn',$(this).next().text());
                return false;
            }                
        });
        $('input[name=whosPC]').on('click',function(e){            
            var serverName = $(this).next().text();
            $('#server-btn').attr('data-sn',serverName);
            prefix = $(this).val();           
            localStorage.setItem('codingmap_whosPC',prefix);
            $('#server').hide();
        });
    } else {
        $('#server').remove();
        $('#server-btn').on('click',function(){
            alert('죄송합니다.\n퍼블리셔만 서버변경목록이 보입니다.')
        });
    }
});

function resizeWrapper(){
    if($('input[name=view]:checked').attr('id') == 'view1' || $('input[name=view]:checked').attr('id') == 'view3'){
        var docH = window.innerHeight;
        var wrapperT = $('.wrapper').offset().top;
        var offset = docH-wrapperT-33;
        $('.wrapper').css('height',offset+'px');
    } else {
        resizePreview()
    }
    
}

function resizePreview(){
    var docH =  window.innerHeight;
    var wrapperT = $('.wrapper').offset().top;
    var wrapperH = $('.wrapper').outerHeight();
    var offset = docH-(wrapperT+wrapperH+60);
    console.log('docH : '+docH+', wrapperT : '+wrapperT)
    $('#previewIfm').css('height',offset+'px')
}

$(window).resize(resizeWrapper);
resizeWrapper();

function selectionDelegateRenderer(instance, td, row, col, prop, value, cellProperties) {
	//hot2.selectCell(row,col).addClass('a');
    //Handsontable.renderers.TextRenderer.apply(this, arguments);		
	
	if($(td).text() == "완료"){
    	$(td).addClass('tac complete otherSelected');
	}else if($(td).text() == "대기" || $(td).text() == "수정중"){
		$(td).addClass('tac working otherSelected');
	}else{
		$(td).addClass('otherSelected');
	}
	
	/*
	$(td).addClass('otherSelected');
	*/
    $(td).attr('data-user',user);	
}

function safeHtmlRenderer(instance, td, row, col, prop, value, cellProperties) {
    var escaped = Handsontable.helper.stringify(value);
    escaped = strip_tags(escaped, '<em><b><strong><a>'); 
    td.innerHTML = escaped;
	if(!selectionInfo == ''){
		if(row == selectionInfo[0] && col == selectionInfo[1]){
			if($(td).text() == "완료"){
				$(td).addClass('tac complete otherSelected');
			}else if($(td).text() == "대기" || $(td).text() == "수정중"){
				$(td).addClass('tac working otherSelected');
			}else{
				$(td).addClass('otherSelected');
			}
			$(td).attr('data-user',user);	
		}
	}
	if(queryResult.length > 0){
		for(v in queryResult){
			if(row == queryResult[v].row && col == queryResult[v].col){
				$(td).addClass('htSearchResult');
			}
		}
	}
    if(col == statColNum){
        //console.log(newWindowLink)
        $(td).addClass('tac');        
        if($(td).text() == '완료'){                 
            $(td).addClass('complete');
        } else if($(td).text() == '대기'/* && $('.configWrap').length*/){
            $(td).addClass('working');
			if(!isAdmin) $(td).find('a').addClass('adm-hidden');
        }
		else if($(td).text() == '수정중'){	
			$(td).addClass('working');
		}
    }
    return td;
}

function strip_tags(input, allowed) {
    var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
    commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

    // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');

    return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
    return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
}

function getHeaders(){	
	var rangedHeaderLists =[];    
    rangedHeaderLists = headerLists;
    
    return rangedHeaderLists;
}

function setColumns(){
    for(i=0;i<10;i++){
        colLists.push({renderer:safeHtmlRenderer})
    }
    return colLists;
}

function setColWidth(){
	/*
    var colWidths;
    if(projectName=='dprs'){
        colWidths = [100,100,100,100,100,100,100,100,40,40,200]
    } else if(projectName=='pkg'){
        colWidths = [100,100,100,100,100,100,40,100,100]
    }
	*/
	var colWidths = [100,100,100,100,100,100,100,100,40,200];
    return colWidths;

}

function array_check(arry,val){
	var result = false;
	$.each(arry,function(i){
		//console.log("배열 : " + arry[i] + "   값 : " + val)
		if(val == arry[i]){
			result = true;
			return false;
		}
	})
	return result;
}

hot2 = new Handsontable(container, {
    data: null,        
    //debug:true,
    //outsideClickDeselects:false,
    rowHeaders: true,
    colHeaders: true,
	search: true,
    fixedColumnsLeft: 0,
    fixedRowsTop: 0,
    //colWidths : setColWidth(),
    //readOnly:true,
    currentRowClassName: 'currentRow',
    //currentColClassName: 'currentCol',
    minSpareRows: 1,
    startCols: 2,
    startRows: 2,
    manualColumnMove: true,
    manualColumnResize: true,
    //nativeScrollbars: true, //http://whitelight.no/test/table/demo/scroll_native_div.html
    stretchH: 'all',
    colHeaders :getHeaders(),
    columns : setColumns(),   
    afterChange: function(change, source) {
        if (source === 'loadData') return;
        if (source === 'socket') return;          
        hot2.selectCell(change[0][0],change[0][1]);            
        //console.log(JSON.stringify(hot2.getData()));
        
		if(change != null){
			$.each(change,function(idx){
				var row_max = get_db_row.length;
				if(row_max < change[idx][0] + 1){
					get_db_row[row_max] = row_seq;
					get_db_order[row_max] = row_seq;
					row_seq++;
				}

				var arry = array_check(update_db_row,get_db_row[change[idx][0]]);
				if(!arry){
					update_db_row.push(get_db_row[change[idx][0]]);
					update_db_order.push(get_db_order[change[idx][0]]);
				}
				update_db_col[update_db_row.length-1] = JSON.stringify(hot2.getDataAtRow(change[idx][0]));
			})
		}
		$.post('/'+projectName+'/update', {
			row: update_db_row,
			col : update_db_col,
			order : update_db_order
		},function(response){
        });

		update_db_row = new Array();
		update_db_col = new Array();
		update_db_order = new Array();
        socket.emit('fromclient', {
            msg: change,
			db_row: get_db_row,
			db_order: get_db_order
        });
		completePage(hot2.getData());
    },   

    afterRemoveRow: function(index, amount) {
		if(bool_removeCheck){
			var del_row = new Array();
			var index_array = new Array();
			for(i=0;i<amount;i++){
				//삭제될 db상의 row 배열
				del_row[i] = get_db_row[index];
				get_db_row.splice(index,1);
				get_db_order.splice(index,1);
				console.log(get_db_row)
				console.log(get_db_order)
				//삭제될 index 값 배열
				index_array[i] = index+i;
			}
			$.post('/'+projectName+'/remove',{
				row: del_row
			});
			socket.emit('fromRemoveRow', {
				row: index_array,
				db_row: get_db_row,
				db_order: get_db_order
			});
		}
		else{
			bool_removeCheck = true;
		}
    },	

    afterCreateRow: function(index, amount) {
		if(get_db_row.length == 0){
			get_db_row.push(row_seq);
			get_db_order.push(row_seq);
		}
		else{
			var order_cal = get_db_order[index-1] + 1
			get_db_row.splice(index,0,row_seq);
			get_db_order.splice(index,0,order_cal);
		}
		row_seq++;
		update_db_row[0] = get_db_row[index];
		update_db_col[0] = JSON.stringify(hot2.getDataAtRow(index))
		update_db_order[0] = get_db_order[index];
		if(!default_line_create){
			$.post('/'+projectName+'/update', {
				row: update_db_row,
				col: update_db_col,
				order: update_db_order
			})
		}
		update_db_row = new Array();
		update_db_col = new Array();
		update_db_order = new Array();

		$.each(get_db_order,function(i){
			if(i > index){
				get_db_order[i] = get_db_order[i] + 1;
			}
			else{
				get_db_order[i] = get_db_order[i];
			}
		})
		if(bool_createCheck){
			if(get_db_row.length > 1){
				$.post('/'+projectName+'/sort', {
					row: get_db_row,
					order: get_db_order
				})
				if(!default_line_create){
					socket.emit('fromCreateRow', {
						row: index,
						db_row: get_db_row,
						db_order: get_db_order
					});
				}
			}
		}
		else{
			bool_createCheck = true;
		}	
		default_line_create = true;
		//console.log("생성완료 order : " + get_db_order)
    },
	
    afterSelection: function(r,c,r2,c2) {        
        var loca = [r,c, r2, c2];   
        socket.emit('fromclient', {loca : loca});
		
    },
    afterDeselect : function(){
        socket.emit('fromOtherDeselect')
    }
});

statColNum = $('.htCore:eq(0) th:contains("상태")').index()-1;

var searchFiled = document.getElementById('handson-search')
$(document).on('keydown',function(e){
	if(e.ctrlKey == true && (e.keyCode == 70 || e.keyCode == 102)){
		e.preventDefault();
		$('.handson-search-layer').slideDown(200,function(){
			$('#handson-search').focus();
            hot2.deselectCell();
		});
		if(isStandAlone){
			$('.handson-search-layer').addClass('for-app');
		}
		
	}
	else if(e.keyCode == 8){
		if(e.target.tagName != "INPUT" && e.target.tagName != "TEXTAREA"){
			e.preventDefault();
		}
	}
})
$('.handson-search-layer .btn-close').on('click',function(){
	$('#handson-search').val('');
	queryResult = {};
	$('.htSearchResult').removeClass();
	$('.search-count').html(0);
	$('.handson-search-layer').slideUp(200);
})
function onlyExactMatch(queryStr, value) {
	return queryStr.toString() === value.toString();
}

Handsontable.Dom.addEvent(searchFiled, 'keyup', function (event) {
	queryResult = hot2.search.query(this.value);
	$('.search-count').html(queryResult.length);
	hot2.render();
	/*
	if(event.keyCode == 13){
		queryResult = hot2.search.query(this.value);
		hot2.render();
	}
	*/
});

hot2.updateSettings({
  contextMenu: {
    callback: function (key, options) {
        var r = options.start.row;
        var c = options.start.col; 
        if (key === 'link' && c == statColNum) {				
            var currentCell = this.getCell( r,c );
            if($(currentCell).find('a').length){
                var linkText = $(currentCell).find('a').text() || '대기';                    
                var linkHref = $(currentCell).find('a').attr('href');
            }				
            $('body').append('<div id="configWrap"><div id="configLink"><div><label for="lt">Status</label><select id="lt"><option value="대기" '+(linkText=='대기'?'selected':'')+'>대기</option><option value="완료" '+(linkText=='완료'?'selected':'')+'>완료</option><option value="수정중" '+(linkText=='수정중'?'selected':'')+'>수정중</option></select></div><div><label for="lh">URL</label><input title="url" style="color:-webkit-link;" placeholder="링크URL를 입력하세요." type="text" value="'+(linkHref==undefined?'':linkHref)+'" id="lh" /></div><div><button id="confirm">적용</button> <button id="cancel">취소</button></div></div></div>');
            hot2.deselectCell();
            $('#configWrap').css({
                height:$(document).height()+'px'
            }).hide().fadeIn(250);
            $('#confirm').on('click',function(){
                if(!$('#lt').val()){
                    alert('링크텍스트를 입력해 주세요.');
                    $('#lt').focus();
                    return;
                } else if(linkHref == ''){
                    $('#lh').val('#');
                }
                hot2.setDataAtCell(r, c, '<a href="'+$('#lh').val()+'">'+$('#lt').val()+'</a>');
                completePage(hot2.getData());
                $('#configWrap').remove();
            });
            $('#cancel').on('click',function(){
                $('#configWrap').remove();
            });	
        } else {
            setTimeout(function () {				 
              alert("[상태변경]은 '상태'컬럼에서만 사용가능합니다.");
            }, 100);
        }
    },
    items: {
      "row_above": {
        disabled: function () {
          //if first row, disable this option
          return (hot2.getSelected()[0]===0 || bool_isEditing)
        },
		callback: function (key, selection) {
			default_line_create = false;
        	hot2.alter("insert_row", selection.start.row);
        }
      },		  
      "row_below": {
		disabled: function () {
          return (bool_isEditing)
        },
		callback: function (key, selection) {
			default_line_create = false;
        	hot2.alter("insert_row", selection.end.row + 1);
        },
	  },
      //"col_left": {},
      //"col_right": {},
      "hsep1": "---------",
      "remove_row": {
		disabled: function () {
          return (bool_isEditing)
        }
	  },
      "hsep2": "---------",
      "link": {name: '상태변경하기'}
    }
  },
  cells: function (row, col, prop) {
      var cellProperties = {};
	  if(!isAdmin && col !== 9){
      	cellProperties.readOnly = true;
	  }
      return cellProperties;
  }
});

$.get('/'+projectName+'/getDatas', function(response) {
	row_seq = response.count;
	for(var i = 0;i<response.cell.length;i++){
		if(response.cell[i].row != null){
			get_db_row[i] = JSON.parse(response.cell[i].row)
			get_db_col[i] = JSON.parse(response.cell[i].col)
			get_db_order[i] = JSON.parse(response.cell[i].order)
		}
	}
    hot2.loadData(get_db_col);

    $('#example2 tbody tr').hover(function(){
        $(this).addClass('on');
    },function(){
        $(this).removeClass('on');
    });        
    completePage(hot2.getData());
});

$('.handsontable tbody td a').live('click',function(e){
    e.preventDefault();
    e.stopPropagation();
    var url = $(this).attr('href').indexOf('http')>-1 ? $(this).attr('href') : prefix+$(this).attr('href'); 
    if(previewType=='type2'){        
        $('#previewIfm').attr('src',url);            
        $('#previewIfm').attr('data-info',$(this).parent().prev().text());
        $('#tab li.on').removeClass('on');
        //newWin.opener.focus();
    } else if(previewType=='type1'){
        //location.href = url;        
        $('#previewFullscreen').parent().removeClass('content-full').show().end().attr('src',url);
        $('#previewFullscreen-prev').hide();
    } else {
        if(isStandAlone){
            window.parent.postMessage(url,'*');
        } else {
            window.open(url);     
        }   
    }
});

$('#previewFullscreen-close').on('mousedown click',function(e){    
    e.stopPropagation();
    e.preventDefault();
    $(this).prev().attr('src','').end().parent().hide()
});
$('#previewFullscreen-prev').on('mousedown click',function(e){    
    e.stopPropagation();
    e.preventDefault();
    $('#previewFullscreen').attr('src','http://tstatic.priviatravel.com/html_travel/')
})

$('input[name=view]').on('click',function(e){
    e.stopPropagation();
    $('#preview-btn').attr('data-pv',$(this).next().text().split('로')[0]);
    //$(this).toggleClass('on');    
    if(this.id == 'view2'){ //분할뷰      
        //$('#header').hide();
        $('.wrapper').css({height:'200px'});
        resizePreview();
        $('#previewWrap').show();        
        previewType = 'type2';
        if(!$('.current').length){
            var $first = $('td a:contains("완료"):first');
            var col = $first.parent().index()-1;
            var row = $first.parent().parent().index();
            $first.click();
            hot2.selectCell(row,col);
        }
    } else if(this.id == 'view1'){ // 단독뷰
        //$('#header').show();
        resizeWrapper();
        hot2.render();
        $('#previewWrap').hide()
        previewType = 'type1';
    } else if(this.id == 'view3'){ //새창        
        resizeWrapper();
        hot2.render();
        $('#previewWrap').hide()
        previewType = 'type3';
    }
    $('.menu-btn.on').removeClass('on');
    $('.menu-list:visible').hide();
}).eq(0).trigger('click');

$('#addPreview').live('click',function(){
    var info = $('#previewIfm').attr('data-info');
    var url = $('#previewIfm').attr('src');
    if(info != undefined){
       
        $('#tab').append('<li><a href="'+url+'">'+(info==''?'No 화면ID':info)+'</a> <i class="closeTab">x</i></li>');
    } else {
        alert('상단의 결과물 링크를 클릭하세요.\n\n 만약 없다면 결과물을 생성 후 이용하시기 바랍니다.')
    }
    
});
$('#addPreview').live('mousedown click',function(e){
    e.stopPropagation();
});
$('#tab li a').live('click',function(e){
    e.preventDefault();
    $('#previewIfm').attr('src',this.href);
    $('#tab li.on').removeClass('on');
    $(this).closest('li').addClass('on')
});
$('#tab li a').live('mousedown',function(e){
    e.stopPropagation();
})
$('#tab .closeTab').live('click',function(){
    $(this).closest('li').remove();
});

var p = document.querySelector('.wrapper');
var resizer = document.createElement('div');
resizer.className = 'resizer';
p.parentNode.appendChild(resizer);
resizer.addEventListener('mousedown', initDrag, false);



$('#goHome').on('click',function(){
    location.href = '/codingmap/list';
});

var startY, startHeight;

function initDrag(e) {
    startY = e.clientY;
    startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
    $('.wrapper').disableSelection();
    $('#previewIfm').disableSelection();
}

function doDrag(e) {
    var move = startHeight + e.clientY - startY;
    p.style.height = move + 'px';
    resizePreview();    
}

function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}

(function($){
    $.fn.disableSelection = function() {
        return this
                 .attr('unselectable', 'on')
                 .css('user-select', 'none')
                 .on('selectstart', false);
    };
})(jQuery);

var $configDepth = $('#configDepth input.toggleDepth');
$configDepth.on('click',function(){
	$(this).toggleClass('removeDepth');
	toggleColumnAt(parseInt($(this).attr('data-column')));
	var newDepth = rangeMod();
	$.post('/'+projectName+'/changeRange',{range:newDepth});
    socket.emit('fromDepthChange', {range:$(this).index()});
})

toggleColumnAt = function(column) {
  if ( colWidths[column] === 0.01 ) {
    colWidths[column] = originalColWidths[column];
  } else {
    colWidths[column] = 0.01;
  }
  hot2.updateSettings({colWidths: colWidths});
};

function rangeMod(){
	var depCal = [];
	$configDepth.each(function(i){
		if($(this).hasClass('removeDepth')){
			depCal[i] = false;
		}
		else{
			depCal[i] = true;
		}
	})
	return depCal;
}

function rangeInit(){
	$configDepth.removeClass('removeDepth');
	for (var i = 0; i < $configDepth.size(); i++) {
		if(!loadRange[i]){
			//$configDepth.eq(i).trigger('click');
			$configDepth.eq(i).toggleClass('removeDepth');
			toggleColumnAt(parseInt($configDepth.eq(i).attr('data-column')));
		}
	}
}

$('#logout').on('click',function(){
	location.href = "/logoutRequest";
});

$('#help').on('click',function(){
    $(this).removeClass('on');
    dimmLayerPop('help-content');    
    $('#help-ifm').attr('src','http://tstatic.priviatravel.com/r2pc/help/help.html');
});

$('#globalUI').on('click',function(){
    $('#previewFullscreen-wrapper').show();
    $('#previewFullscreen').attr('src','http://tstatic.priviatravel.com/privia_globalUI/');
    $('#previewFullscreen-prev').hide();
});

$('#archive').on('click',function(){
    $('#previewFullscreen-wrapper').show();
    $('#previewFullscreen').attr('src','http://tstatic.priviatravel.com/html_travel/');
    $('#previewFullscreen-prev').show();
});

function showDistLog(logData){
    $('.menu-list').hide();    
    dimmLayerPop('dist-log');
    $('#dist-log-result').val(logData);    
}

$('#svnToPub').on('click',function(){
    $('.menu-list').hide();    
    dimmLayerPop('dist-log');
     $('#dist-log-result').val('배포중입니다...').addClass('distributing');
	$.post('/svnToPub',function(data){
         $('#dist-log-result').val(data).removeClass('distributing');    
	});
})

$('#PubToDev').on('click',function(){
    $('.menu-list').hide();    
    dimmLayerPop('dist-log');
    $('#dist-log-result').val('배포중입니다...').addClass('distributing');
	$.post('/pubToDev',function(data){        
        $('#dist-log-result').val(data).removeClass('distributing');   
	});
})

$('#svnToPubAndDev').on('click',function(){
    $('.menu-list').hide();    
    dimmLayerPop('dist-log');
     $('#dist-log-result').val('배포중입니다...').addClass('distributing');
	$.post('/svnToPubAndDev',function(data){
         $('#dist-log-result').val(data).removeClass('distributing');   
	});
});

var Notification = window.Notification || window.mozNotification || window.webkitNotification;

if(Notification){
    Notification.requestPermission(function (permission) {
         //console.log(permission);
    });
}


function displayNotification(title_text,body_text) {
    if(!Notification) return false;
    window.setTimeout(function () {            
        var instance = new Notification(
            title_text, {
                body: body_text,
                icon: '/images/logo_1.png'
            }
        );
        instance.onclick = function () {
            window.focus();
        };
        instance.onerror = function () {
            alert('상대방에게 메시지 전달 요청 중 문제가 발생했습니다. 새로고침 후에도 문제가 있다면 관리자에게 문의하십시오.')
        };
        instance.onshow = function () {
            setTimeout(function(){
                instance.close(); //10초 후에 자동 사라짐.
            },10000);
        };
        instance.onclose = function () {
            // Something to do
        };
    }, 2000);
}

var myIssuesWorker,myIssueList;
function startworker(){
    if(typeof(Worker) !== "undefined") {        
        $('.menu li:last').before('<li><button id="myIssues" class="menu-btn">나의일감<span id="icount" class="badge"></span></button><div id="toggleIssueWrap" class="menu-list"><h3>내가 맡은 일감</h3><table id="my-issues" class="table2"><col width="7%"><col width="15%"><col width="10%"><col width="*"><col width="15%"><thead><tr><th>#</th><th>프로젝트</th><th>유형</th><th>제목</th><th>등록일</th></tr></thead><tbody></tbody></table></div></li>');
        var $icnt = $('#icount');
        if(typeof(myIssuesWorker) == "undefined") {
            myIssuesWorker = new Worker("/javascripts/issue_worker.js");
        }
        myIssuesWorker.onmessage = function(e) {
            myIssueList = e.data;
            var oldVal = parseInt(localStorage.getItem('oldIssueNum'));
            if(e.data.total_count == 0) $icnt.empty();
            else $icnt.text(e.data.total_count);
            localStorage.setItem('oldIssueNum',e.data.total_count)
            //console.log(parseInt(localStorage.getItem('oldIssueNum')))
            //console.log('old :'+oldVal+', newVal : '+e.data.total_count)
            if(oldVal < e.data.total_count){
                displayNotification('TS Redmine Says :','새로운 일감이 '+$('#currentUserName').text()+'님에게 할당되었습니다.');
            }
        }
    }
}

$('#myIssues').live('click',function(){
    var $dest = $('#my-issues>tbody');
    if(myIssueList.total_count){
        $dest.empty();
        $.each(myIssueList.issues,function(i){
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

$(function(){
	rangeInit();
	getAdmin();
    $('#previewFullscreen-wrapper').hide();
    startworker();
	
	$(document).on('focusin','.handsontableInputHolder textarea',function(){
		if(isAdmin){
			socket.emit('fromEditing',{edit:true});
		}
	})
	$(document).on('focusout','.handsontableInputHolder textarea',function(){
		if(isAdmin){
			socket.emit('fromEditing',{edit:false});
		}
	})
});