 
// 셀렉트 박스에 디자인을 입히기 위한 대체 스크립트
// http://www.psyonline.kr/1268996171

// 안드로이드 브라우저의 select focus() 이벤트 오동작을 위한 추가 함수 패치
showDropdown = function (element) {
    var event;
    event = document.createEvent('MouseEvents');
    event.initMouseEvent('mousedown', true, true, window);
    element.dispatchEvent(event);
};

// 옵션설정
fakeselect.defaults = {
	targetclassname : '',
	ignoreclassname : 'ignore_select',
	usemultiple : true,
	title : {
		classname : 'selectbox_title',
		activeclassname : 'selectbox_title_active',
		focusclassname : 'selectbox_title_focus',
		disabledclassname : 'selectbox_title_disabled',
		innerhtml : '<strong></strong>'
	},
	option : {
		classname : 'selectbox_option',
		innerhtml : '<div class="scroll"></div>',
		position : -1,
		upperposition : 1,
		zindex : 100,
		maxitems : 5,
		onclassname : 'on'
	},
	multiple : {
		defaultsize : 5,
		classname : 'selectbox_multiple',
		focusclassname : 'selectbox_multiple_focus',
		disabledclassname : 'selectbox_multiple_disabled',
		innerhtml : '<div class="scroll"></div>',
		onclassname : 'on'
	}
}

fakeselect.initialize=function(options){	
	var settings = $.extend(true, fakeselect.defaults, options);
	fakeselect(settings);
}

function fakeselect(v){
	
	var agt = navigator.userAgent.toLowerCase(); 
	var isie=(/msie/i).test(navigator.userAgent);
	var isie7=(/msie 7/i).test(navigator.userAgent);
	var isie8=(/msie 8/i).test(navigator.userAgent);
	var isie9=(/msie 9/i).test(navigator.userAgent);
	var isfirefox=(/firefox/i).test(navigator.userAgent);
	var isapple=(/applewebkit/i).test(navigator.userAgent);
	var isopera=(/opera/i).test(navigator.userAgent);
	var isopera2=(/opr/i).test(navigator.userAgent);
	var ismobile=(/(iphone|ipod|android)/i).test(navigator.userAgent);
	var isipad=(/ipad/i).test(navigator.userAgent);
	var isandroid=(/(android)/i).test(navigator.userAgent);
	var isandroid2 = ((agt.indexOf('mozilla/5.0') > -1 && agt.indexOf('android ') > -1 && agt.indexOf('applewebkit') > -1) && !(agt.indexOf('chrome') > -1));
	var ischrome =((/chrome/i).test(navigator.userAgent));
    var chrome61 = agt.indexOf('chrome/61');
	
	if(!v.title.defaultwidth) v.title.defaultwidth=75;
	if(!v.option.position) v.option.position=-1;
	if(!v.option.upperposition) v.option.upperposition=1;
	if(!v.option.zindex) v.option.zindex=1;

	var sels=document.getElementsByTagName('select');
    var selLength = sels.length;
    
	for(var i=0,max=sels.length; i<max; i++){
		if(!$(sels[i]).hasClass('select-base')){
			if(v.ignoreclassname && (new RegExp('\\b'+v.ignoreclassname+'\\b')).test(sels[i].className)) continue;
			if(!v.targetclassname || (new RegExp('\\b'+v.targetclassname+'\\b')).test(sels[i].className)){
				if(sels[i].multiple && !v.usemultiple) continue;
				if(!sels[i].ac){
					sels[i].ac=create(sels[i]);
					sels[i].change=function(){
						this.ac.ckdisable();
						if(this.ac.opt){
							if(this.selectedIndex < 0){
								this.ac.tg.innerHTML=(this.options.length)? this.options[0].text : '';
							}
							else{
								this.ac.tg.innerHTML=(this.options.length)? this.options[this.selectedIndex].text : '';
							}
						}
						else this.ac.setselected();
					}
					sels[i].sf_change=sels[i].onchange;
					sels[i].sf_mouseover=sels[i].onmouseover;
					sels[i].sf_mouseout=sels[i].onmouseout;
					sels[i].sf_click=sels[i].onclick;
					sels[i].onchange=function(){
						this.change();
						if(this.sf_change) this.sf_change();
					}
				}else sels[i].reset();
			}
		}
	}

	function rc(sel,v,f){
		sel.noww=getwidth(sel);
		
		if(v.widthminus==undefined){
			v.widthminus=0;
			var t=document.createElement((f=='option')? 'div' : 'span');
			
			t.className=v.classname;
			with(t.style){
				position='absolute';
				left='-9999px';
				top=0;
			}
			document.body.appendChild(t);
			
			var cklist=['paddingLeft','paddingRight','borderLeftWidth','borderRightWidth'];
			for(var i=0; i<4; i++) v.widthminus+=parseInt(getstyle(t,cklist[i]));
			document.body.removeChild(t);
			
		}
		
		var tagname,style,width=sel.noww-v.widthminus;
		
		if(f=='option'){
			tagname='div';
			
			if(sel.className){
				
				var ck=sel.className.match(/\b(selectbox-option-width\:([0-9]+)(px)?)\b/i);
				if(ck){
					width=sel.optionwidth=ck[2]-v.widthminus;
					sel.className=sel.className.replace(/\bselectbox-option-width\:[0-9]+(px)?\b/i,'');
				}
			}
			style='position:absolute;width:'+width+'px;display:none;z-index:'+v.zindex;
		}else{
			
			sel.style.position='absolute';
			sel.style.left='-10000px';
			tagname='span';
			style='width:'+width+'px;vertical-align:middle;display:';
			if(((sel.style.display)? sel.style.display : getstyle(sel,'display'))=='none'){
				style+='none;';
				sel.style.display='none';
			}else style+='inline-block;';
			style+=(f=='multiple')? 'cursor:default;' : 'cursor:pointer;';
		}
		var rv, occk=true;
		if(isie){
			try{
				occk=false;
				rv=document.createElement('<'+tagname+' class="'+((v.classname)? (sel.className)? v.classname+' '+sel.className : v.classname : '')+'" style="'+style+'">');
			}catch(e){
				occk=true;
			}
		}
		if(occk){
			rv=document.createElement(tagname);
			/* 크롬 렌더링 오류 관련 추가 */
			if(tagname == 'div'){
				var chromeDel = sel.className.split(' ');
				var newSelClass = '';
				for(var idx in chromeDel){
					if(chromeDel[idx] != 'chrome-block') {
						if((chromeDel.length-1) == idx){
							newSelClass += chromeDel[idx];
						}
						else{
							newSelClass += chromeDel[idx] + ' ';	
						}
					}
				}
				sel.className = newSelClass;
				newSelClass = '';
			}
			/* //크롬 렌더링 오류 관련 추가 */
			if(v.classname) rv.setAttribute('class',(sel.className)? v.classname+' '+sel.className : v.classname);
			
			rv.setAttribute('style',style);
		}
		if(v.innerhtml){
			rv.innerHTML=v.innerhtml;
			rv.tg=rv.childNodes[0];
			for(var i=0; i<1; i++){
				if((f=='option' || f=='multiple') && rv.tg.className=='scroll') rv.scrobj=rv.tg;
				if(rv.tg.childNodes[0]){
					rv.tg=rv.tg.childNodes[0];
					i--;
				}
			}
		}else rv.tg=rv;
		rv.onselectstart=function(){
			return false;
		}
		return rv;
	}

	function create(sel){

		var ac;

		if(!sel.multiple){//normal

			ac=rc(sel,v.title);
			if(sel.length){
				if(sel.selectedIndex < 0){
					ac.tg.innerHTML=sel.options[0].text;
				}
				else{
					ac.tg.innerHTML=sel.options[sel.selectedIndex].text;
				}
			}
			ac.onclick=function(){
				if(sel.disabled) return false;
				if(isandroid2){ //only 안드로이드 select focus 이벤트 미동작 우회처리
					showDropdown(sel);
					return false;
				}				
				if(ismobile && !isandroid){
					sel.focus();
					return false;
				}	
				if(isipad){
					var $ac = $(ac),
					selPos = $ac.position();
					$(sel).css({
						opacity : 0,
						left : selPos.left,
						top : selPos.top
					});
					sel.focus();
					return false;
				}
				if(this.opt.style.display=='block'){
					optclose();
					sel.focus();
					return false;
				}
				this.className+=' '+v.title.activeclassname;
				setoptions();
				var opts=(this.opt.tg)? ac.opt.tg.getElementsByTagName('a') : this.opt.getElementsByTagName('a');
				for(var i=0,max=opts.length; i<max; i++) opts[i].className=(i==sel.selectedIndex)? v.option.onclassname : '';
				this.opt.style.left=this.opt.style.top='-100000px';
				this.opt.style.display='block';
				if(this.opt.scrobj){
					if(sel.scroll){
						var sto=this.opt.getElementsByTagName('li')[0];
						this.opt.scrobj.style.height=sto.offsetHeight*v.option.maxitems+'px';
						this.opt.scrobj.scrollTop=sto.offsetHeight*sel.selectedIndex;
						this.opt.scrobj.style.overflow='auto';
						this.opt.scrobj.style.overflowX='hidden';
					}else{
						this.opt.scrobj.style.height='auto';
						this.opt.scrobj.style.overflow='hidden';
					}
				}
                
				/*
				var scl=(isapple)? document.body.scrollLeft : document.documentElement.scrollLeft;
				var sct=(isapple)? document.body.scrollTop : document.documentElement.scrollTop;
                */
                
				var scl = document.body.scrollLeft || document.documentElement.scrollLeft;
                var sct = document.body.scrollTop || document.documentElement.scrollTop;
				var domRect = (isie) ? document.body.getBoundingClientRect() : document.documentElement.getBoundingClientRect();
				var bcr=this.getBoundingClientRect();				
				var left=(ismobile) ? bcr.left-domRect.left : bcr.left+scl-document.documentElement.clientLeft;
				var top=(ismobile) ? bcr.top-domRect.top : bcr.top+sct-document.documentElement.clientTop;				
				
				var isupper=((top+this.offsetHeight+this.opt.offsetHeight)>(document.documentElement.clientHeight+sct));
				if(sel.optionwidth && (left+this.opt.offsetWidth)>(document.documentElement.clientWidth+scl)){
					left=left-(this.opt.offsetWidth-sel.noww);
				}
				this.opt.style.left=left+'px';
				this.opt.style.top=(isupper)? (top-this.opt.offsetHeight+v.option.upperposition)+'px' : (top+this.offsetHeight+v.option.position)+'px';
				if(sel.sf_click) sel.sf_click();
				return false;
			}

			function setoptions(){
				var max=sel.options.length;
				sel.scroll=(v.option.maxitems && (max>v.option.maxitems));
				var inhtml='<ul>';
				for(var i=0; i<max; i++) inhtml+='<li><a href="#">'+sel.options[i].text+'</a></li>';
				inhtml+='</ul>';
				if(ac.opt.tg){
					ac.opt.tg.innerHTML=inhtml;
					var opts=ac.opt.tg.getElementsByTagName('a');
				}else{
					ac.opt.innerHTML=inhtml;
					var opts=ac.opt.getElementsByTagName('a');
				}
				for(var i=0,max=opts.length; i<max; i++){
					opts[i].i=i;
					opts[i].onclick=function(){
						optclose();
						ac.tg.innerHTML=sel.options[this.i].text;
						sel.options[this.i].selected='selected';
						//sel.onchange();
						fireEvent(sel, 'change');
						sel.focus();
						return false;
					}
				}
			}

			function setselected(f){
				var changed=false;
				if(f=='up' && sel.selectedIndex>0){
					sel.options[sel.selectedIndex-1].selected='selected';
					changed=true;
				}else if(f=='down' && sel.selectedIndex<(sel.options.length-1)){
					sel.options[sel.selectedIndex+1].selected='selected';
					changed=true;
				}
				if(changed && ac.opt.scrobj && sel.scroll){
					var sto=ac.opt.getElementsByTagName('li')[0];
					ac.opt.scrobj.scrollTop=sto.offsetHeight*sel.selectedIndex;
				}
				sel.onchange();
			}

			if(!isie && !isopera){
				sel.onkeydown=function(e){
					var kc=e.keyCode;
					if(kc==38){
						setselected('up');
						return false;
					}else if(kc==40){
						setselected('down');
						return false;
					}
				}
			}

			function wheelaction(e){
				if(isie) e=window.event;
				if(sel.options.length>1){
					var wv=(e.wheelDelta)? e.wheelDelta : e.detail;
					wv=(isfirefox)? (wv<0)? 'up' : 'down' : (wv>0)? 'up' : 'down';
					setselected(wv);
				}
				if(e.preventDefault) e.preventDefault();
				return false;
			}

			ac.opt=rc(sel,v.option,'option');

			function optwheelaction(e){
				if(!sel.scroll) return false;
				if(isie) e=window.event;
				var wv=(e.wheelDelta)? e.wheelDelta : e.detail;
				wv=(isfirefox)? (wv<0)? 'up' : 'down' : (wv>0)? 'up' : 'down';
				var mv=this.getElementsByTagName('li')[0].offsetHeight*((v.option.maxitems>2)? 2 : 1);
				this.scrobj.scrollTop+=(wv=='up')? -mv : mv;
				if(e.preventDefault) e.preventDefault();
				return false;
			}

			if(isie) ac.opt.onmousewheel=optwheelaction;
			else ac.opt.addEventListener(((isfirefox)? 'DOMMouseScroll' : 'mousewheel'),optwheelaction,false);
			if(!ischrome){
				if(ac.opt.scrobj){
					ac.opt.scrobj.onscroll=function(){
						var stoh=this.getElementsByTagName('li')[0].offsetHeight;
						this.scrollTop=Math.round(this.scrollTop/stoh)*stoh;
					}
				}
			}
			var optclosetimer=null;
			ac.opt.onmouseover=function(){
				clearTimeout(optclosetimer);
			}
			ac.opt.onmouseout=function(){
				optclosetimer=setTimeout(optclose,100);
			}
			function optclose(){
				if(ac.opt.style.display=='block'){
					ac.opt.style.display='none';
					ac.className=ac.className.replace(' '+v.title.activeclassname, '');
					sel.focus();
				}
			}

		}else{//multiple

			ac=rc(sel,v.multiple,'multiple');

			ac.setoptions=function(){
				ac.tg.innerHTML='';
				var inhtml='<ul>';
				for(var i=0,max=sel.options.length; i<max; i++) inhtml+='<li>'+sel.options[i].text+'</li>';
				inhtml+='</ul>';
				ac.tg.innerHTML=inhtml;
				sel.parentNode.insertBefore(ac,sel);
				sel.size=(sel.size)? sel.size : v.multiple.defaultsize;
				sel.scroll=max>sel.size;
				ac.opts=ac.tg.getElementsByTagName('li');
				if(!ac.opts[0]) ac.tg.innerHTML='<ul><li>&nbsp;</li></ul>';
				ac.scrobj.style.height=(sel.size*ac.opts[0].offsetHeight)+'px';
				var last;
				for(var i=0,max=sel.options.length; i<max; i++){
					ac.opts[i].i=i;
					if(sel.options[i].selected) last=i;
					ac.opts[i].className=(sel.options[i].selected)? v.multiple.onclassname : '';
					ac.opts[i].onmousedown=mousedown;
				}
				ac.clickindex=sel.options.selectedIndex;
				var tnb=gettnbindex();
				if(last>tnb[1]) ac.scrobj.scrollTop=ac.scrobj.scrollTop+((last-tnb[1])*ac.opts[0].offsetHeight);
			}

			ac.setselected=function(){
				for(var i=0,max=sel.options.length; i<max; i++){
					ac.opts[i].className=(sel.options[i].selected)? v.multiple.onclassname : '';
				}
			}

			function mousedown(e){
				if(sel.disabled) return false;
				clearTimeout(ac.bluringtimer);
				if(!e) e=window.event;
				if(e.shiftKey && ac.clickindex>-1) multiselect(ac.clickindex,this.i);
				else{
					if(e.ctrlKey) this.className=(this.className=='on')? '' : v.multiple.onclassname;
					else{
						for(var i=0,max=ac.opts.length; i<max; i++){
							ac.opts[i].className=(i==this.i)? v.multiple.onclassname : '';
						}
					}
					ac.clickindex=this.i;
				}
				ac.clicky=e.clientY-((e.layerY)? e.layerY : e.offsetY);
				ac.fmy=ac.clicky;
				ac.mode=true;
				if(sel.scroll){
					ac.scrolly=ac.scrobj.scrollTop;
					var tnb=gettnbindex();
					ac.gap=[tnb[0]-ac.clickindex,tnb[1]-ac.clickindex];
				}
				addevent(document.documentElement,'mousemove',mousemove);
				addevent(document.documentElement,'mouseup',mouseup);
				sel.focus();
				return false;
			}

			function mousemove(e){
				if(isie8){
					ac.onselectstart=function(){
						return false;
					}
				}
				clearTimeout(ac.bluringtimer);
				if(!ac.mode) return false;
				if(!e) e.window.event;
				var y=e.clientY;
				var nindex=ac.clickindex+(Math.ceil((y-ac.fmy)/ac.opts[0].offsetHeight)-1);
				if(0>nindex) nindex=0;
				if(nindex>ac.opts.length-1) nindex=ac.opts.length-1;
				multiselect(ac.clickindex,nindex);
				if(sel.scroll){
					if(nindex>-1 || ac.opts.length-1>nindex){
						var tnb=gettnbindex();
						if(tnb[0]>nindex || nindex>tnb[1]){
							var cv=(nindex-ac.clickindex-((tnb[0]>nindex)? ac.gap[0] : ac.gap[1]))*ac.opts[0].offsetHeight;
							ac.scrobj.scrollTop=ac.scrolly+cv;
							ac.fmy=ac.clicky-cv;
						}
					}
				}
			}

			function gettnbindex(){
				var top=Math.ceil(ac.scrobj.scrollTop/ac.opts[0].offsetHeight);
				return [top,top+sel.size-1];
			}

			function multiselect(v1,v2){
				var imin=Math.min(v1,v2);
				var imax=Math.max(v1,v2);
				for(var i=0,max=ac.opts.length; i<max; i++){
					ac.opts[i].className=(imin<=i && imax>=i)? v.multiple.onclassname : '';
				}
			}

			function mouseup(e){
				if(!ac.mode) return false;
				for(var i=0,max=ac.opts.length; i<max; i++){
					sel.options[i].selected=(ac.opts[i].className)? 'selected' : false;
				}
				ac.mode=false;
				removeevent(document.documentElement,'mousemove',mousemove);
				removeevent(document.documentElement,'mouseup',mouseup);
				sel.focus();
			}

			function mwheelaction(e){
				if(sel.disabled || !sel.scroll) return false;
				clearTimeout(ac.bluringtimer);
				if(isie) e=window.event;
				var wv=(e.wheelDelta)? e.wheelDelta : e.detail;
				wv=(isfirefox)? (wv<0)? 'up' : 'down' : (wv>0)? 'up' : 'down';
				var mv=ac.opts[0].offsetHeight*((v.option.maxitems>2 && sel.size>1)? 2 : 1);
				this.scrollTop+=(wv=='up')? -mv : mv;
				if(e.preventDefault) e.preventDefault();
				return false;
			}

			if(isie) ac.scrobj.onmousewheel=mwheelaction;
			else ac.scrobj.addEventListener(((isfirefox)? 'DOMMouseScroll' : 'mousewheel'),mwheelaction,false);

			ac.scrobj.onscroll=function(){
				clearTimeout(ac.bluringtimer);
				var stoh=ac.opts[0].offsetHeight;
				this.scrollTop=Math.round(this.scrollTop/stoh)*stoh;
			}

			sel.onkeydown=function(e){
				if(!this.scroll) return;
				clearTimeout(ac.bluringtimer);
				if(!e) e=window.event;
				var f;
				if(!ac.clickindex) ac.clickindex=this.options.selectedIndex;
				if(e.keyCode==40 || e.keyCode==38){
					if(e.keyCode==40){
						f=='down';
						ac.clickindex=(ac.clickindex==ac.opts.length-1)? ac.opts.length-1 : (this.options.selectedIndex==-1)? (isie)? 1 : 0 : ac.clickindex+1;
					}else if(e.keyCode==38){
						f=='up';
						ac.clickindex=(ac.clickindex==0)? 0 : ac.clickindex-1;
					}
					var tnb=gettnbindex();
					var sv=(tnb[0]>ac.clickindex)? ac.clickindex-tnb[0] : (ac.clickindex>tnb[1])? ac.clickindex-tnb[1] : 0;
					this.ac.scrobj.scrollTop=this.ac.scrobj.scrollTop+(sv*this.ac.opts[0].offsetHeight);
				}
			}

			ac.setoptions();

		}

		ac.ckdisable=function(){
			if(sel.disabled){
				if(!sel.multiple && v.title.disabledclassname) this.className+=' '+v.title.disabledclassname;
				else if(sel.multiple && v.multiple.disabledclassname) this.className+=' '+v.multiple.disabledclassname;
				else setopacity(this,50);
			}else{
				if(!sel.multiple && v.title.disabledclassname) this.className=this.className.replace(new RegExp('\\b'+v.title.disabledclassname+'\\b','g'),'');
				else if(sel.multiple && v.multiple.disabledclassname) this.className=this.className.replace(new RegExp('\\b'+v.multiple.disabledclassname+'\\b','g'),'');
				else setopacity(this,100);
			}
			if(sel.multiple){
				this.scrobj.style.overflow=(sel.disabled)? 'hidden' : 'auto';
				this.scrobj.style.overflowX='hidden';
			}
		}
		ac.ckdisable();

		ac.bluringtimer=null;
		ac.focusing=function(){
			if(sel.disabled) return false;
			if(this.opt){
				this.className+=' '+v.title.focusclassname;
				if(isie) this.onmousewheel=wheelaction;
				else this.addEventListener(((isfirefox)? 'DOMMouseScroll' : 'mousewheel'),wheelaction,false);
			}else{
				clearTimeout(ac.bluringtimer);
				this.className+=' '+v.multiple.focusclassname;
			}
		}
		ac.bluring=function(){
			if(sel.disabled) return false;
			if(this.opt){
				this.className=this.className.replace(new RegExp(' '+v.title.focusclassname,'g'),'');
				if(isie) this.onmousewheel=null;
				else this.removeEventListener(((isfirefox)? 'DOMMouseScroll' : 'mousewheel'),wheelaction,false);
			}else{
				ac.bluringtimer=setTimeout(function(){
					ac.className=ac.className.replace(new RegExp(' '+v.multiple.focusclassname,'g'),'')
				},200);
			}
		}
		sel.onfocus=function(){
			ac.focusing();
		}
		sel.onblur=function(){
			ac.bluring();
		}

		sel.reset=function(){
			if(!sel.ac.opt) sel.ac.setoptions();
			this.change();
			this.style.height='auto'; //ie bug
			var noww=getwidth(this);
			if(noww!=this.noww){
				if(sel.ac.opt){
					sel.ac.style.width=(noww-v.title.widthminus)+'px';
					sel.ac.opt.style.width=(v.option.widthminus)? (noww-v.option.widthminus)+'px' : noww+'px';
				}else{
					sel.ac.style.width=(noww-v.multiple.widthminus)+'px';
				}
				sel.noww=noww;
			}
		}
		sel.show=function(){
			this.style.display='inline';
			this.ac.style.display='inline-block';
			this.reset();
		}
		sel.hide=function(){
			this.style.display='none';
			this.ac.style.display='none';
		}

		ac.onmouseover=function(e){
			if(this.opt) clearTimeout(optclosetimer);
			if(sel.sf_mouseover){
				if(!e) e=window.event;
				if(checkevents(e,this)) sel.sf_mouseover();
			}
		}
		ac.onmouseout=function(e){
			if(this.opt) optclosetimer=setTimeout(optclose,100);
			if(sel.sf_mouseout){
				if(!e) e=window.event;
				if(checkevents(e,this)) sel.sf_mouseout();
			}
		}

		if(ac.opt){
			sel.parentNode.insertBefore(ac,sel);
			document.body.appendChild(ac.opt);
		}

		return ac;

	}

	function getwidth(sel){
		var rv=(sel.style.width)? parseInt(sel.style.width) : sel.offsetWidth;
		if(!rv) rv=parseInt(getstyle(sel,'width'));
		if(!rv) rv=v.title.defaultwidth;
		return rv;
	}

	function getstyle(tg,p){
		return (tg.currentStyle)? tg.currentStyle[p] : window.getComputedStyle(tg,null)[p];
	}

	function setopacity(tg,v){
		if(isie) tg.style.filter='alpha(opacity='+v+')';
		else tg.style.opacity=v/100;
	}

	function addevent(tg,w,func){
		if(window.attachEvent) tg.attachEvent('on'+w,func);
		else tg.addEventListener(w,func,false);
	}

	function removeevent(tg,w,func){
		if(window.detachEvent) tg.detachEvent('on'+w,func);
		else tg.removeEventListener(w,func,false);
	}

	function checkevents(e,tg){
		var etg=(e.target)? e.target : e.srcElement;
		if(etg!=tg) return false;
		var ereltg=(e.relatedTarget)? e.relatedTarget : (e.type=='mouseover')? e.fromElement : e.toElement;
		if(ereltg){
			while(ereltg!=tg && !(/(body|html)/i).test(ereltg.tagName)) ereltg=ereltg.parentNode;
			if(ereltg==tg) return false;
		}
		return true;
	}
	
	function fireEvent(element, event){
	    if (document.createEventObject){
	    // dispatch for IE
	    	//if($.browser.version == "9.0"){
	    	//if($.browser.msie){
		    if(($.browser.msie && parseInt($.browser.version, 10) == 9) || ($.browser.msie && parseInt($.browser.version, 10) == 10)){
	    		var evt = document.createEvent("HTMLEvents");
		    	evt.initEvent(event, true, false);
		    	return element.dispatchEvent(evt);
	    	}else{
	    		var evt = document.createEventObject();
	    	    return element.fireEvent('on'+event,evt);
	    	}
	    }
	    else{
	    // dispatch for firefox + others
	    var evt = document.createEvent("HTMLEvents");
	    evt.initEvent(event, true, true ); // event type,bubbling,cancelable
	    return !element.dispatchEvent(evt);
	    }
	}
	
    if(ischrome){
		for(var i=0; i<selLength; i++){
			if(sels[i].previousSibling.textContent != ' '){
				//console.log(sels[i])
				sels[i].insertAdjacentHTML('beforeBegin', ' ');
			}
		}
	}
}

//reference : http://blog.outofhanwell.com/2006/06/08/the-windowonload-problem-revisited/
if(window.addEventListener){
	window.addEventListener('DOMContentLoaded',fakeselect.initialize,false);
	window.addEventListener('load',fakeselect.initialize,false);
}else if(window.attachEvent){
	//document.write('<script id="deferscript" defer="defer" src="//[]"></script>');
	document.write('<script id="deferscript" defer="defer" src="http://static.priviatravel.com/js/front/travel/empty.js"></script>');
	var deferscript=document.getElementById('deferscript');
	deferscript.onreadystatechange=function(){
		if(this.readyState==='complete'){
			deferscript=null;
			fakeselect.initialize();
		}
	};
	window.attachEvent('onload',fakeselect.initialize);
}
/*if(ismobile){
	setTimeout(function(){
		$("select").each(function(index,element){
			var $sels = $(this).prev(".selectbox_title"),
			selPos = $sels.position();
			$(this).css({
				opacity : 0,
				left : selPos.left,
				top : selPos.top
			});
		});
	},2000);
}*/

/*
* form 요소에 디자인을 입히기 위한 대체 스크립트
* Alternate script for form elements
* with jQuery
* Info - 
* Demo - 
* License - http://creativecommons.org/licenses/by-sa/2.0/kr/
*/
(function($) {


	// 기본 옵션 설정
	var defaultoptions = {
		// SELECT
		// $().fakeselect() 실행시 별도로 필요한 옵션 객체를 지정할 수 있고, 지정되지 않았을 경우 기본 옵션을 따름.
		'select': {

			// 타이틀
			title: {

				// 사용할 태그명
				tagname: 'span',

				// 내부에 넣을 HTML.
				// 지정되면 제일 안쪽 자식(childNodes[0])에 텍스트 지정.
				innerhtml: '<strong></strong>',

				// CSS 클래스명. base 클래스명에 나머지 클래스명이 추가 또는 제거.
				// 해당 select 태그에 별도 클래스명이 지정된 경우 해당 클래스명을 추가.
				classname: {
					base: 'select-title',
					focus: 'focus',
					active: 'active', // 옵션 레이어가 보일 때
					disabled: 'disabled'
				},

				// 대상 select 요소의 넓이를 확인할 수 없을 때 지정할 넓이
				defaultwidth: 100

			},

			// 옵션 레이어
			option: {

				// 사용할 태그명
				tagname: 'div',

				// CSS 클래스명. base 클래스명에 나머지 클래스명이 추가 또는 제거.
				// 해당 select 태그에 별도 클래스명이 지정된 경우 해당 클래스명을 추가.
				classname: {
					base: 'select-option',
					show: 'show',
					upper: 'upper', // 레이어가 타이틀 상단에 위치하는 경우 추가될 클래스명
					selected: 'selected', // 선택된 옵션의 span 태그에 지정되는 클래스명
					disabled: 'disabled' // disabled 속성이 지정된 옵션그룹에 지정되는 클래스명
				},

				// 내부에 넣을 HTML.
				// 지정되면 제일 안쪽 자식(childNodes[0])에 아래 형식으로 옵션 목록 지정.
				// <ul>
				// 	<li><span[ class="옵션 태그에 지정된 CSS 클래스명"]> option </span></li>
				// 	<li> 또는 <li>
				// 		<strong[ class="옵션그룹 태그에 지정된 CSS 클래스명"]> optgroup </strong>
				// 		<ul>
				// 			<li><span> option </span></li>
				// 		</ul>
				// 	</li>
				// </ul>
				// * tagname이 'ul'인 경우 최상위 ul 태그는 만들지 않음.
				innerhtml: '',

				// 레이어가 타이틀 하단에 위치하는 경우 포지션
				position: -1,
				// 레이어가 타이틀 상단에 위치하는 경우 포지션
				upperposition: 1,

				// 레이어 넓이를 글자 길이에 맞게 자동으로 지정할 것인지 여부.
				// true 인 경우 select 태그 넓이와, 레이어 넓이 중 큰 값으로 지정.
				// false 인 경우 select 태그 넓이 만큼만 지정.
				autowidth: true,

				// CSS z-index
				zindex: 10,

				// 최대 표시 개수. 이상일 경우 스크롤바 생성.
				maxlength: 5

			},

			// show|hide 효과 지정.
			// 'fade', 'slide', 'fade&slide' 또는 직접 함수 지정( ex) show: function() { ... } ).
			// 직접 지정함수 내 this는 visibility 속성이 'hidden' 처리 된 옵션 레이어 jQuery 객체.
			effect: {
				show: 'fade&slide',
				hide: 'fade&slide'
			},

			// 모바일 환경에서 사용 여부
			useinmobile: true

		}

	};



	'use strict';

	if (!$ || $.fn.fakeform) {
		return;
	};

	var
		ismobile = document.ontouchstart !== undefined,

		$win = $(window),
		$doc = $(document.documentElement),
		$body = null,

		checkisnumber = /^[0-9]+$/,
		indexdataname = 'data-fakeform-index',

		animator = 'animate', // $.fn._animate ? '_animate' : 'animate',

		boxsizingable = null;

	// select
	(function() {

		var
			$selects = [],
			$titles = [],
			$titleinners = [],
			$options = [],
			$optioninners = [],
			$optionitems = [],

			$focusedtitle = null,

			checkoptionnames = /^(reset|value|show|hide|remove|disable|enable)$/,
			checkeffectnames = /^(fade|slide|fade&slide)$/,

			options = [],
			displayed = [],
			displayedindex = -1,
			currentindex = -1,

			hidedataname = 'data-fakeselect-hide',
			widthdataname = 'data-option-width',
			lengthdataname = 'data-option-length',

			functions,

			anioption = {
				show: {duration: 175},
				hide: {duration: 100, complete: removeme}
			};


		$.fn.fakeselect = function(_option, value) {
			if (!_option || $.isPlainObject(_option)) {
				add(this, _option);
			} else if (typeof(_option) == 'string' && checkoptionnames.test(_option)) {
				this.each(function() {
					functions[_option].call(this, value);
					if (_option != 'reset') {
						functions.reset.call(this);
					}
				});
			}
			return this;
		}

		functions = {

			reset: function() {
				onselectchange.call(this, true);
			},

			value: function(_value) {
				this.value = _value;
			},

			show: function() {
				var index = getindex(this);
				$(this).show();
				if ($titles[index]) {
					settitletext(index);
					$titles[index].show();
				}
			},

			hide: function() {
				var index = getindex(this);
				$(this).hide();
				if ($titles[index]) {
					$titles[index].hide();
				}
			},

			remove: function() {
				var index = getindex(this);
				if ($titles[index]) {
					$titles[index].remove();
					$options[index].remove();
					$selects[index].removeAttr(indexdataname).css({position: '', left: ''});
					$selects[index] = $titles[index] = $titleinners[index] = $options[index] = $optioninners[index] = $optionitems[index] = null;
				}
			},

			disable: function() {
				this.disabled = 'disabled';
			},

			enable: function() {
				this.removeAttribute('disabled');
			}

		};

		$doc.bind('keydown', keydownaction);
		$doc.bind('click', closeopenedoption);
		$win.bind('resize', closeopenedoption);


		function add(_$selects, _option) {

			var defaultclass,
				currentoptions,
				i = 0, max = _$selects.length;

			setbody();

			for (; i < max; i++) {

				if (checkisnumber.test(_$selects[i].getAttribute(indexdataname))) {
					$(_$selects[i]).fakeselect('reset');
					continue;
				}
				
				defaultclass = _$selects[i].className;

				currentindex++;

				currentoptions = options[currentindex] = overrideoption('select', _option);

				if (ismobile && !currentoptions.useinmobile) {
					continue;
				}

				$selects[currentindex] = $(_$selects[i]).attr(indexdataname, currentindex)
					.css({position: 'absolute', left: '-999em'})
					.change(onselectchange)
					.focus(onselectfocus)
					.blur(onselectblur);

				$titles[currentindex] = $('<'+ currentoptions.title.tagname +' class="'+ currentoptions.title.classname.base + '" '+ indexdataname +'="'+ currentindex +'" />')
					.html(currentoptions.title.innerhtml)
					.bind('mouseover mousemove mouseout mousedown mouseup mouseenter mouseleave', selectactiontotitle)
					.click(ontitleclick)
					.insertBefore($selects[currentindex]);

				if ($selects[currentindex].css('display') == 'none') {
					$titles[currentindex].hide();
				}

				currentoptions.title.widthminus = getinfluencewidthvalue($titles[currentindex]);

				$titleinners[currentindex] = getdeepestchild($titles[currentindex]);

				$selects[currentindex].insertBefore($titles[currentindex]);
				$titles[currentindex].before(' ');

				$options[currentindex] = $('<'+ currentoptions.option.tagname +' class="'+ currentoptions.option.classname.base +'" '+ widthdataname +'="'+ ($selects[currentindex].attr(widthdataname) || (currentoptions.option.autowidth ? 'auto' : 0)) +'" '+ lengthdataname +'="'+ ($selects[currentindex].attr(lengthdataname) || currentoptions.option.maxlength) +'" />')
					.css({position: 'absolute', zIndex: currentoptions.option.zindex})
					.html(currentoptions.option.innerhtml);
				$optioninners[currentindex] = getdeepestchild($options[currentindex]);

				if (defaultclass) {
					$titles[currentindex].addClass(defaultclass);
					$options[currentindex].addClass(defaultclass);
				}

				$selects[currentindex].removeAttr(widthdataname).removeAttr(lengthdataname);

				settitletext(currentindex, true);
				checkdisabled($selects[currentindex][0]);
				checkreadonly($selects[currentindex][0]);
			}

		}

		function onselectchange(fromreset) {
			var index = getindex(this);
			if (checkisnumber.test(index)) {
				checkdisabled(this);
				checkreadonly(this);
				settitletext(index, fromreset === true);
			}
		}

		function setselected(index, selectedindex) {
			$selects[index][0].options[selectedindex].selected = 'selected';
			$selects[index].change();
		}

		function onselectfocus(e) {
			var index = getindex(this);
			if ($titles[index]) {
				$titles[index].addClass(options[index].title.classname.focus);
				$focusedtitle = $titles[index];
			}
		}

		function onselectblur(e) {
			var index = getindex(this);
			if ($titles[index]) {
				$titles[index].removeClass(options[index].title.classname.focus);
			}
			$focusedtitle = null;
		}

		function selectactiontotitle(e) {
			var index = getindex(this);
			$selects[index][e.type]();
		}

		function keydownaction(e) {
			var keycode = e.keyCode,
				index, selectoptions, selectedindex, newindex;
			if (keycode == 32) { // toggle open/close
				if ($focusedtitle) {
					$focusedtitle.click();
					return false;
				} else if (displayedindex > -1) {
					closeopenedoption();
					return false;
				}
			} else if (keycode == 38 || keycode == 40) {
				index = displayedindex > -1 ? displayedindex : $focusedtitle ? getindex($focusedtitle) : -1;
				if (index > -1 && !$selects[index][0].getAttribute('readonly')) {
					selectoptions = $selects[index][0].options;
					selectedindex = newindex = selectoptions.selectedIndex;
					if (keycode == 38 && selectedindex > 0) {
						newindex = selectedindex-1;
						while(newindex > -1 && (amidisabled(selectoptions[newindex]) || selectoptions[newindex].getAttribute(hidedataname))) {
							newindex--;
						}
					} else if (keycode == 40 && selectoptions.length-1 > selectedindex) {
						newindex = selectedindex+1;
						while(selectoptions.length > newindex && (amidisabled(selectoptions[newindex]) || selectoptions[newindex].getAttribute(hidedataname))) {
							newindex++;
						}
					}
					if (newindex != selectedindex && selectoptions[newindex]) {
						setselected(index, newindex);
						if (displayedindex > -1) {
							$optioninners[index].find('span').removeClass(options[index].option.classname.selected)
							setselectedoptionvisible(index, selectoptions.selectedIndex);
						}
					}
					return false;
				}
			} else if (keycode == 9 || keycode == 13 || keycode == 27) {
				closeopenedoption();
			}
		}

		function ontitleclick(e) {

			var index = getindex(this);

			if ($selects[index][0].disabled || $selects[index][0].getAttribute('readonly')) {
				return false;
			}

			if (displayed[index]) {
				optionclose(index);
				return false;
			}

			if (!$options[index][0].offsetWidth) {
				addoptionlayer(index);
			}

			$selects[index].click();

			optionshow(index);

			return false;

		}

		function optionshow(index) {

			var $currentoption = $options[index],
				effect = options[index].effect.show,
				height = $currentoption[0].clientHeight,
				animateto;

			$currentoption.css('height', '').stop(true);

			if (checkeffectnames.test(effect)) {
				$currentoption.css('visibility', 'visible');
				if (effect == 'fade') {
					animateto = {opacity: 1};
					$currentoption.css({height: height, opacity: 0});
				} else if (effect == 'slide') {
					animateto = {height: height};
					$currentoption.css({height: 0, opacity: 1});
				} else if (effect == 'fade&slide') {
					animateto = {height: height, opacity: 1};
					$currentoption.css({height: 0, opacity: 0});
				}
				if ($currentoption.hasClass(options[index].option.classname.upper) &&
					(effect == 'slide' || effect == 'fade&slide')) {
					animateto.top = parseInt($currentoption.css('top'));
					$currentoption.css('top', animateto.top+height);
				}
				$currentoption[animator](animateto, anioption.show);
			} else {
				$currentoption.css({height: height, visibility: 'visible'});
				if (typeof(effect) == 'function') {
					effect.call($currentoption);
				}
			}

			displayedindex = index;
			displayed[index] = true;
			$titles[index].addClass(options[index].title.classname.active);
			
		}

		function optionclose(index) {
			var $currentoption = $options[index].stop(true),
				effect = options[index].effect.hide || options[index].effect.show,
				animateto;
			if (checkeffectnames.test(effect)) {
				if (effect == 'fade') {
					animateto = {opacity: 0};
				} else if (effect == 'slide') {
					animateto = {height: 1};
				} else if (effect == 'fade&slide') {
					animateto = {height: 0, opacity: 0}
				}
				if ($currentoption.hasClass(options[index].option.classname.upper) &&
					(effect == 'slide' || effect == 'fade&slide')) {
					animateto.top = $currentoption[0].offsetTop+$currentoption[0].offsetHeight;
				}
				$currentoption[animator](animateto, anioption.hide);
			} else if (typeof(effect) == 'function') {
				effect.call($currentoption);
			} else {
				$currentoption.detach();
			}
			displayedindex = -1;
			displayed[index] = false;
			$titles[index].removeClass(options[index].title.classname.active);
			!ismobile && $selects[index].focus();
		}

		function closeopenedoption() {
			if (displayedindex > -1 && displayed[displayedindex]) {
				optionclose(displayedindex);
			}
		}

		function getinfluencewidthvalue($target) {
			return (boxsizingable && $target.css('boxSizing') == 'border-box')? 0 : (parseInt($target.css('borderLeftWidth')) || 0) + (parseInt($target.css('borderRightWidth')) || 0) + parseInt($target.css('paddingLeft')) + parseInt($target.css('paddingRight'));
		}

		function addoptionlayer(index) {

			var
				$currentoption = $options[index],
				selectedindex = $selects[index][0].options.selectedIndex,
				docwidth = $doc[0].clientWidth,
				docheight = $doc[0].clientHeight,
				scrollleft = $win.scrollLeft(),
				scrolltop = $win.scrollTop(),
				bounding = $titles[index][0].getBoundingClientRect(),
				titlewidth = $titles[index][0].offsetWidth,
				titleheight = $titles[index][0].offsetHeight,
				width = $currentoption.attr(widthdataname),
				height,
				left = bounding.left+scrollleft-$doc[0].clientLeft,
				top = bounding.top+scrolltop-$doc[0].clientTop,
				maxlength = parseInt($currentoption.attr(lengthdataname)),
				optionsizes;


			setoptions(index);
			$currentoption.css({width: '', visibility: 'hidden'}).appendTo($body);

			width = Math.max(titlewidth, width == 'auto' ? $currentoption[0].offsetWidth : parseInt(width));

			if (options[index].option.widthminus === undefined) {
				options[index].option.widthminus = getinfluencewidthvalue($currentoption); 
			}

			// $currentoption.css('width', width);
			if (maxlength >= $optionitems[index].length) {
				$currentoption.css({height: '', overflow: 'hidden'});
			} else {
				$currentoption.css('overflow', '').css('height', getoptionheight(index, selectedindex, maxlength));
			}

			height = $currentoption[0].offsetHeight;

			// check upper|lower position
			if (top+titleheight+height > docheight+scrolltop) {
				top = top-height+options[index].option.upperposition;
				$currentoption.addClass(options[index].option.classname.upper);
				$titles[index].addClass(options[index].option.classname.upper);
			} else {
				top = top+titleheight+options[index].option.position;
				$currentoption.removeClass(options[index].option.classname.upper);
				$titles[index].removeClass(options[index].option.classname.upper);
			}

			if (width > titlewidth && left+width > docwidth+scrollleft) {
				left -= width-titlewidth;
			}

			$currentoption.css({
					left: Math.max(0, left),
					top: top,
					width: width-options[index].option.widthminus
				});

			setselectedoptionvisible(index, selectedindex);

		}

		function getoptionheight(index, selectedindex, maxlength) {
			var $currentoptionitems = $optionitems[index],
				numoptions = $currentoptionitems.length,
				heights = 0, itemheight, i = 0, max, j = 0;
			for (; i < numoptions; i++) {
				if ($currentoptionitems[i].nodeName.toLowerCase() == 'span') {
					if (j == selectedindex) {
						i = Math.max(0, Math.min(i, numoptions-maxlength));
						max = Math.min(i+maxlength, numoptions);
						break;
					}
					j++;
				}
			}
			for (; i < max; i++) {
				itemheight = $currentoptionitems[i].offsetHeight;
				if (!itemheight) {
					i--;
					continue;
				}
				heights += itemheight;
			}
			return heights;
		}

		function setselectedoptionvisible(index, selectedindex) {
			
			var $currentoption = $options[index],
				$selectedoption = $optioninners[index].find('span').eq(selectedindex);

			$selectedoption.addClass(options[index].option.classname.selected);

			if (0 > $selectedoption[0].offsetTop-$currentoption[0].scrollTop) {
				$currentoption[0].scrollTop = $selectedoption[0].offsetTop;
			} else if ($selectedoption[0].offsetTop+$selectedoption[0].offsetHeight > $currentoption[0].offsetHeight+$currentoption[0].scrollTop) {
				$currentoption[0].scrollTop = $selectedoption[0].offsetTop+$selectedoption[0].offsetHeight-$currentoption[0].offsetHeight;
			}

		}

		function setoptions(index) {

			var selectedindex = $selects[index][0].options.selectedIndex,
				optionsoption = options[index].option,
				html = [];

			if (optionsoption.tagname.toLowerCase() != 'ul') {
				html = ['<ul>'];
			}
			html.push(getoptionhtml($selects[index]));
			if (optionsoption.tagname.toLowerCase() != 'ul') {
				html.push('</ul>');
			}
			$optioninners[index].html(html.join(''));

			$optioninners[index].find('span').each(function(i) {
				this.onclick = (function(index, i) {
					return function(e) {
						return onoptionclick(e, index, i);
					}
				})(index, i);
			});
			$optioninners[index].find('strong').click(stoppropagation);

			$optionitems[index] = $optioninners[index].find('strong, span');

		}

		function getoptionhtml($parent) {
			var $children = $parent.children('option, optgroup'),
				html = [], i = 0, max = $children.length;
			for (; i < max; i++) {
				html.push('<li');
				if ($children[i].disabled) {
					html.push(' class="disabled"');
				}
				if ($children[i].getAttribute(hidedataname)) {
					html.push(' style="display:none;"');
				}
				html.push('>');
				if ($children[i].nodeName.toLowerCase() == 'optgroup') {
					html.push('<strong class="', $children[i].className, '">', $children[i].label, '</strong>');
					html.push('<ul>');
						html.push(getoptionhtml($($children[i])));
					html.push('</ul>');
				} else {
					html.push('<span class="', $children[i].className, '">', $children[i].innerHTML, '</span>');
				}
				html.push('</li>');
			}
			return html.join('');
		}

		function onoptionclick(e, index, optionindex) {
			if (amidisabled($selects[index][0].options[optionindex])) {
				stoppropagation(e);
				return false;
			}
			setselected(index, optionindex);
			return false;
		}

		function stoppropagation(e) {
			e.stopPropagation();
		}

		function amidisabled(target) {
			while(target.nodeName.toLowerCase() != 'select') {
				if (target.disabled) {
					return true;
				}
				target = target.parentNode;
			}
			return false;
		}

		function settitletext(index, withwidth) {
			var $select, currentoptions;
			if ($titles[index]) {
				$select = $selects[index];
				currentoptions = $select[0].options;
				$titleinners[index].html((currentoptions.length)? currentoptions[currentoptions.selectedIndex].text.replace(/</g, '&lt;') : '');
				if (withwidth) {
					$titles[index].css('width', ($select[0].offsetWidth || getcsswidth($select[0]) || options[index].title.defaultwidth) - options[index].title.widthminus);
				}
			}
		}

		function getcsswidth(select) {
			var property = 'width',
				value = (select.currentStyle)? select.currentStyle[property] : document.defaultView.getComputedStyle(select, null)[property];
			return parseInt(value) || 0;
		}

		function checkdisabled(select) {
			var index = getindex(select);
			if ($titles[index]) {
				$titles[index][(select.disabled)? 'addClass' : 'removeClass'](options[index].title.classname.disabled);
			}
		}

		function checkreadonly(select) {
			var index = getindex(select);
			//제이쿼리 10버전 부터 적용됨 프비는 8버전이라 오류가 발생
			/*if ($titles[index]) {
				$titles[index][(select.getAttribute('readonly'))? 'addClass' : 'removeClass'](options[index].title.classname.readonly);
			}*/
		}

		function getdeepestchild($target) {
			while ($target.children().length) {
				$target = $target.children().eq(0);
			}
			return $target;
		}

	})();


	function removeme() {
		if (this.parentNode) {
			this.parentNode.removeChild(this);
		}
	}

	function getindex(target) {
		return parseInt((target.fakeform ? target[0] : target).getAttribute(indexdataname));
	}

	function overrideoption(flag, _option) {
		var key, inkey, defaultoption = defaultoptions[flag];
		if (!_option) {
			return defaultoption;
		}
		for (key in defaultoption) {
			if (typeof(defaultoption[key]) == 'string') {
				if (_option[key] === undefined) {
					_option[key] = _option[key] || defaultoption[key];
				}
			} else {
				_option[key] = _option[key] || {};
				for (inkey in defaultoption[key]) {
					if (_option[key][inkey] === undefined) {
						_option[key][inkey] = defaultoption[key][inkey];
					}
				}
			}
		}
		return _option;
	}

	function setbody() {
		if (!$body) {
			$body = $('<div style="width:100px;border:1px solid #fff;box-sizing:border-box;" />').appendTo(document.body);
			boxsizingable = $body[0].offsetWidth == 100;
			$body.remove();
			$body = $(document.body);
		}
	}

})(window.jQuery);