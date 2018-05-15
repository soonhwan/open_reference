/*
 * 문서명 : dprs.js 
 * 설명 : front-end 공통 스크립트 (DPRS 오픈 시 ui.js에 귀속 됨)
 * 작성자 : 서성우
 */


/*
 * 함수명 : adjustPayCalcWidth
 * 설명   : 결제요금의 계산식을 표현하는 UI에 쓰이며, 각 TD의 넓이를 동일하게 맞춰주는 스크립트로, 해당 UI가 나오는 페이지에 함수를 호출해준다.
 * REFS   : /html_dprs/search/rent_reserve_step2.html
 * 작성자 : 정일영
 */
function adjustPayCalcWidth(){
	$('.pay-calc').each(function(){
		var $addClassTarget = $(this).children('table');
		var totNum = $(this).find('thead th').length;
		$addClassTarget.addClass('item-num-'+totNum)
	});
}

/*
 * 함수명 : adjustNavNewWidth
 * 설명   : 페이지의 navi중 sub navi UI에 쓰이며, 각 li의 넓이를 동일하게 맞춰주는 스크립트로, 해당 UI가 나오는 페이지에 함수를 호출해준다.
 * REFS   : /html_dprs/html/PTF_5011-07.html
 * 작성자 : 박선희
 */
function adjustNavNewWidth(){
	$('.nav-new').each(function(){
		var $addClassTarget = $(this).find('> li > ul');
		var totNum = $(this).find('> li > ul > li').length;
		if($addClassTarget.length !=0){$(this).css({height:'92px'});}
		$addClassTarget.addClass('sub-item-'+totNum);
	});
}

/*
 * 함수명 : formHasValueBg
 * 설명   : input.text 또는 .textarea가 value가 있는 채로 focusout되었을 시 사선으로 된 백그라운드를 해지하는 함수(가독성 확보).
 * REFS   : /html_dprs/search/rent_reserve_step2.html
 * 작성자 : 정일영
 */
function formHasValueBg(){
	$('input.text,.textarea').each(function(){
		if($(this).val()){
			$(this).addClass('has-value')
		}
	});	
	$('input.text,.textarea').on('focusout',function(){		
		if($(this).val() != ''){
			$(this).addClass('has-value')
		} else {			
			$(this).removeClass('has-value')	
		}
	});
}

/* dprs오픈시점에 ui.js의 '전체 공통 스크립트(document.ready)'에 formHasValueBg()가 추가되어야 한다.  */
$(function(){
	formHasValueBg();
});
if(typeof(Cufon) == "function"){
	//Cufon.replace('.ymhb,.svc-title > b,.btn-wf,.layer_pop .heading,.digit-wf,.step-new li,.step-new2 li,.product-status, .section-title3 > b',{fontFamily:'ymhb',textShadow:'2px 2px black'});
	Cufon.replace('.ymhb,.svc-title > b,.btn-wf,.layer_pop .heading,.digit-wf,.step-new li,.step-new2 li,.product-status, .section-title3 > b',{fontFamily:'ymhb'});
	Cufon.replace('.ymhr,.content-title > b,.content-title2 > b',{fontFamily:'ymhr'});
	Cufon.replace('.ymhb-menu',{fontFamily:'ymhb',hover:true,hoverables:{span:true}});
}