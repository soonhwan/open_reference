var priviaUtils = window.priviaUtils || (function(){
    
	var privateVar = "이 부분은 외부에서 접근못합니다.";
	
    return {
        getCookie : function (name) {
            var dc = document.cookie;
            var prefix = name + "=";
            var begin = dc.indexOf("; " + prefix);

            if (begin == -1) {
                begin = dc.indexOf(prefix);
                if (begin != 0) { return null;}
            } else {
                begin += 2;
            }

            var end = document.cookie.indexOf(";", begin);

            if (end == -1) {
                end = dc.length;
            }

            return unescape(dc.substring(begin + prefix.length, end));
        },
        setCookie : function (name, value, expiredays) {
            var today = new Date();
            today.setDate( today.getDate() + expiredays );
            document.cookie = name + "=" + escape( value ) + "; expires=" + today.toGMTString() + "; path=/";
        }
    }
}()); 