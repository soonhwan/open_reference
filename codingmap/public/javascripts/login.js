var isStandAlone  = !(window.location == window.parent.location);
$(function(){
	console.log(navigator.userAgent)
    if($.browser.msie || navigator.userAgent.indexOf('rv:11') > 0){ 
        $('.cert-IE').show();
        $.getJSON('https://redmine.tidesquare.com/users/current.json?callback=?',function(res){            
            $.post('/saveUser',{name:res.user.firstname,userId:res.user.id},function(data){
                if(data == "success"){
                    location.href = "/codingmap/list";
                }
                else{
                    alert(data)
                }
            });
        });
    } else {
        if(localStorage.getItem('id')){
            $('#id').val(localStorage.getItem('id'))
            $('.id-save input').attr('checked','checked');
        }
        $('.btn-login').on('click',function(e){
            e.preventDefault();
            if($('.id-save input:checked').size() > 0){
                localStorage.setItem('id',$('#id').val());
            }
            else{
                localStorage.removeItem("id");
            }
            var userID = encodeURIComponent($('#id').val());
            var userPW = encodeURIComponent($('#pw').val()); 
            //$.getJSON('https://redmine.tidesquare.com/users/current.json?callback=?',function(res){
            $.getJSON('https://'+userID+':'+userPW+'@redmine.tidesquare.com/users/current.json?callback=?',function(res){
                //console.log(JSON.stringify(res))
                $.post('/saveUser',{name:res.user.firstname,userId:res.user.id},function(data){
                    if(data == "success"){
                        location.href = "/codingmap/list";
                    }
                    else{
                        alert(data)
                    }
                });
            });
        });

        $('#pw').on('keydown',function(e){
            if(e.keyCode == 13 && $(this).val() != ''){
                $('.btn-login').trigger('click');
            }
        });
        
        $('#findPW').on('click',function(e){
            e.preventDefault();
            if(isStandAlone){
                window.parent.postMessage(this.href,'*');
            } else {
                window.open(this.href);
            }
        })
    }
})
