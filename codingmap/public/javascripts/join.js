$(function(){
	
	$('.btn-join input').on('click',function(){
		dimmLayerPop('join-layer');
		$('#name, #email, #id, #pw').val('');
		$('#name').focus();
	})
	
	$('#join-layer .btnWrap input').on('click',function(e){
		e.preventDefault();
		if($('#name').val().trim() == ''){
			alert("이름을 입력해주세요");
			return false;
		}
		if($('#email').val().trim() == ''){
			alert("이메일을 입력해주세요.");
			return false;
		}
		if($('#id').val().trim() == ''){
			alert("아이디를 입력해주세요.");
			return false;
		}
		if($('#pw').val().trim() == ''){
			alert("패스워드를 입력해주세요.");
			return false;
		}
		var patternName = /\d+/;
		var patternMail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; 
		var patternId = /[^(a-zA-Z0-9)]/;

		if(patternName.test($('#name').val())){
			alert('이름에 숫자가 있습니다.');
			$('#name').focus();
			return false;
		}
		if($('#name').val() == "undefined" && $('#name').val() == "null"){
			alert('이름은 null이나 undefined으로 할 수 없습니다.');
		}
		if(!patternMail.test($('#email').val())){
			alert('이메일 형식이 일치하지 않습니다.');
			$('#email').focus();
			return false;
		}

		if(patternId.test($('#id').val())){
			alert("아이디는 영문과 숫자 조합만 가능합니다.");
			$('#id').focus();
			return false;
		}
		var accData = $('#accountApp').serialize();
		$.post('/accountApp',accData,function(data){
			if(data.status == 'Y'){
				dimmLayerPop('join-layer',0);
				if(isApp) $('.project-list').empty();
				$('.project-list').append('<li>'+$('#name').val()+'<input type="submit" class="confirm_user" value="승인"></li>');
				if(isAdmin){
					$('.confirm_user').show();
				}
			}
			alert(data.message);
		})
	})
	
	var isAdmin = false;
	var isApp = true;
	$.get('/getAdmin',function(data){
		console.log(data)
		if(data.admin == "Y"){
			isAdmin = true;
			$('.adm-hidden').removeClass('adm-hidden');
			$('.go-login').hide();
		}
	})
	
	$.get('/getAccountApp',function(data){
		if(data == ""){
			$('.project-list').append('<li>계정을 신청한 대기자가 없습니다.</li>');
		}
		else{
			isApp = false;
			$('.project-list').empty();
			$.each(data,function(i){
				$('.project-list').append('<li>'+data[i].name+'<input type="submit" name="confirm_user" class="confirm_user" value="승인"></li>');
			});
			
			if(isAdmin){
				$('.confirm_user').show();
			}
		}
		
		$(document).on('click','.confirm_user',function(){
			var confirmValue = $('.project-list li').size();
			var $this = $(this);
			var searchName = $this.parent().text();
			$.post('/confirmUser',{name:searchName},function(data){
				$this.parent().remove();
				if(confirmValue <= 1){
					$('.project-list').append('<li>계정을 신청한 대기자가 없습니다.</li>');
				}
			});
		})
	});
})

