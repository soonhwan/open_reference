var abacusSearchType = "AIR";
var abacusSearchSeq = 1;
var abacusSearchObj = null;
fakeselect.initialize(); 
var commonSearch = {
	showSearchLayer : function (strType, objInput, strSeq) {
		getVoteCity(strType);
		$("#layerSearchCity").find("input:radio").attr("checked", false);
		dimmLayerPop("layerSearchCity");
		if(typeof(str) == "undefined") str = "";
		if(typeof(obj) != "undefined") cityLocation = obj.id;
		if(typeof(seq) == "undefined") seq = strSeq;
		$("#strAirCity").focus();
		abacusSearchType = strType;
		abacusSearchSeq = strSeq;
		abacusSearchObj = objInput;
	}, 
	hideSearchLayer : function () {
		
	}
	, setCity : function (code, desc, nt, htlCd) {
		if (abacusSearchType == "AIR") {
			airSearch.setAirCity(code, desc, nt, htlCd);
		} else if (abacusSearchType == "HOTEL") {
			htlSearch.setHtlCity(code, desc, nt);
		} else if ((abacusSearchType == "AIRTEL.AIR")) {
			airHtlSearch.setAirCity(code, desc, nt, htlCd);
		} else if ((abacusSearchType == "AIRTEL.HOTEL")) {
			airHtlSearch.setHtlCity(code, desc, nt, htlCd);
		}
	}
	, getAirDates : function (type) {
		var $date = null;
		if (type == "RT") {
			$date = $("#AIR_RT_depdate0, #AIR_RT_retdate");
		} else if (type == "OW") {
			$date = $("#AIR_OW_depdate0");
		} else if (type == "MD") {
			$date = $("#AIR_MD_depdate0, #AIR_MD_depdate1, #AIR_MD_depdate2, #AIR_MD_depdate3");
		}
		return $date;
	}
	, getDomAirDates : function (type) {
		var $date = null;
		if (type == "RT") {
			$date = $("#DOM_RT_depdate0, #DOM_RT_depdate1");
		} else if (type == "OW") {
			$date = $("#DOM_OW_depdate0");
		}
		return $date;
	}
	, getAirtelDates : function (type) {
		var $date = null;
		if (type == "RT") {
			$date = $("#AIRHTL_RT_depdate0, #AIRHTL_RT_retdate");
		} else if (type == "OW") {
			$date = $("#AIRHTL_OW_depdate0");
		} else if (type == "MD") {
			$date = $("#AIRHTL_MD_depdate0, #AIRHTL_MD_depdate1, #AIRHTL_MD_depdate2, #AIRHTL_MD_depdate3");
		}
		return $date;
	}
	, setDomAirDate : function (type) {
		commonSearch.getDomAirDates(type).each(function (key, value){
			$(this).val(commonSearch.removeDateSeparator($(this).val()));
		});
	}
	, setAirDate : function (type) {
		commonSearch.getAirDates(type).each(function (key, value){
			$(this).val(commonSearch.removeDateSeparator($(this).val()));
		});
	}
	, setAirtelDate : function (type) {
		commonSearch.getAirtelDates(type).each(function (key, value){
			$(this).val(commonSearch.removeDateSeparator($(this).val()));
		});
	}
	, resetAirDate : function (type) {
		commonSearch.getAirDates(type).each(function (key, value){
			$(this).val(commonSearch.setDateSeparator($(this).val()));
		});
	}
	, resetDomAirDate : function (type) {
		commonSearch.getDomAirDates(type).each(function (key, value){
			$(this).val(commonSearch.setDateSeparator($(this).val()));
		});
	}
	, resetAirtelDate : function (type) {
		commonSearch.getAirtelDates(type).each(function (key, value){
			$(this).val(commonSearch.setDateSeparator($(this).val()));
		});
	}
	, removeDateSeparator : function (value) {
		if(value != "OPEN"){
			return value.replace(/\//g, '');
		}else {
			return value;
		}
	}, setDateSeparator : function (value) {
			if (value.length == 8 ) {
				var strSeparator = "/";
				return value.substr(0, 4) + strSeparator + value.substr(4, 2) + strSeparator + value.substr(6, 2);
			} else {
				return value;
			}
	}, convertDateToString : function (objDate) {
		
		var year = objDate.getFullYear();
		
	    var month = objDate.getMonth() +1;
	    var day = objDate.getDate();
	    if(month < "10") month = "0" + month;
	    if(day < "10") day = "0" + day;
	    
	    return commonSearch.setDateSeparator(year + "" + month + "" + day);
	}, validAirDate : function (value) {
		return $.isNumeric(value) && value.length == 8 ? true : false;  
	}
};

var tabFlag;
// config.js에서 가져온다
var airSearchUrl = configAirSearchUrl;
var airDomSearchUrl = configAirDomSearchUrl;
var hotelSearchUrl = configHotelSearchUrl;
var hotelDomSearchUrl = configHotelDomSearchUrl;
var airtelSearchUrl = configAirtelSearchUrl; 
/*-----항공 관련 변수 start-----*/
var airCityFocus = "IN";
var cityLocation = "AIR_RT_arr0";
var citySeq = 1;
var cityPlusPx = 2;
var flightType = "INT";
var tripType = "RT";
var ItinCnt_MD = 2;
var bookableDate;

/*-----항공 관련 변수 end-----*/
/*-----호텔 관련 변수 start-----*/
var htlType = "int";
var promoSeq = 0;
var htlMinStayDay = 1;
var htlMaxStayDay = 15;
var htlMaxDomStayDay = 6;
var currHtlStayDay = "1";
var htlNameFocus = "OUT";
var htlCityFocus = "OUT";
/*-----호텔 관련 변수end-----*/
/*-----항공+호텔 관련 변수 start-----*/
var airHtlCityLoc = "AIRHTL_RT_arr0";
var airHtlCitySeq = 1;
var airHtlTripType = "RT";
var airHtlItinCnt_MD = 2;
/*-----항공+호텔 관련 변수end-----*/
var airSearch = {
	copyComboChange : function(val, tId){
		$('#' + tId + ' option[value=' + val + ']').prop({selected: true});
		document.getElementById(tId).reset();
	},
		
	//국제선 항공 날짜 or 요일 기준 검색
	searchIntType : function(i){
		var idx = i - 1;
		$(".std").find("li").each(function(index){
			var thisImgSrc = $(this).find("img");
			if($(this).index() == idx){
				thisImgSrc.attr("src",thisImgSrc.attr("src").replace("_off","_on"));
			}else{
				thisImgSrc.attr("src",thisImgSrc.attr("src").replace("_on","_off"));
			}
		});
		if(i == 1){
			$('#AIR_RT_dayInd').val("N");
			$('#AIR_RT_depdate0').show();
			$('#AIR_RT_retdate').show();
			
			$('#AIR_RT_strDate_div').hide();
			$('#AIR_RT_day_div').hide();
			$('#AIR_RT_plusDate_div').hide();
			
			$('#AIR_returnUnfix').attr("disabled", false);
			$('#air_int_RT .check_bottom').css("visibility", "visible");
			if($('#AIR_returnUnfix').is(":checked")){
				$('#AIR_valCode').css('visibility', 'visible');
			}
		}else{
			$('#AIR_RT_dayInd').val("Y");
			$('#AIR_RT_depdate0').hide();
			$('#AIR_RT_retdate').hide();
			
			$('#AIR_RT_strDate_div').show();
			$('#AIR_RT_day_div').show();
			$('#AIR_RT_plusDate_div').show();
			$('#AIR_valCode').css('visibility', 'hidden');
			$('#AIR_returnUnfix').attr("disabled", true);
			$('#air_int_RT .check_bottom').css("visibility", "hidden");
		}
	},

	//국제선 항공 왕복 or 편도 or 다구간 선택시
	setTripType : function(fType, tType){
		var airClass = "search_area search_air_";
		if(fType != ""){
			flightType = fType;
		}
		
		tripType = tType;
		
		for (var i = 1; i < 6; i++) {
			$('#airSearch'+i).hide();
		}
		if (flightType == "INT") { //국제선
			$('label[for="trip_MD"]').show();
			$('#INT_AIR_historyList').show();
			$('#DOM_AIR_historyList').hide();
			$('#trip_INT').attr('checked', 'checked').click();
			if(tType == "RT") {
				$('#trip_RT').attr('checked', 'checked').click();
				$('#airSearch1').show();
				$('#AIR_SEARCH').find('#subSearchType').show().end().attr("class",airClass + "int1");
			} else if (tType == "OW") {
				$('#trip_OW').attr('checked', 'checked').click();
				$('#airSearch2').show();
				$('#AIR_SEARCH').find('#subSearchType').hide().end().attr("class",airClass + "int2");
			} else if (tType == "MD") {
				$('#trip_MD').attr('checked', 'checked').click();
				$('#airSearch3').show();
				$('#AIR_SEARCH').find('#subSearchType').hide().end().attr("class",airClass + "int3");
			}
		} else { //국내선
			$('label[for="trip_MD"]').hide();
			$('#INT_AIR_historyList').hide();
			$('#DOM_AIR_historyList').show();
			$('#trip_DOM').attr('checked', 'checked').click();
			
			
			if(tType == "RT"){
				$('#airSearch4').show();
				$('#AIR_SEARCH').find('#subSearchType').hide().end().attr("class",airClass + "dom1");
				$('#trip_RT').attr('checked', 'checked').click();
			} else if (tType == "OW") {
				$('#airSearch5').show();
				$('#AIR_SEARCH').find('#subSearchType').hide().end().attr("class",airClass + "dom2");
				$('#trip_OW').attr('checked', 'checked').click();
			}
		}
		$("#totalSearch .check_terms .terms").buttonset("refresh");
	},

	setOpenItin : function() {
		if ($("#AIR_returnUnfix").is(":checked")) {
			//document.Xform.Xretdate.value = document.air_int_RT.retdate.value;
			$('#AIR_RT_retdate').val("OPEN");
			//document.air_int_RT.retdate. value = "OPEN";
			$('#AIR_RT_retdate').attr("disabled", true);
			$('#AIR_valCode').css('visibility', 'visible');
		}else{
			//document.air_int_RT.retdate.value = document.Xform.Xretdate.value;
			$('#AIR_RT_retdate').removeAttr("disabled");
			document.air_int_RT.retdate.value = "귀국날짜";
			airSearch.copyComboChange('', 'AIR_RT_val');
			$('#AIR_valCode').css('visibility', 'hidden');
		}
	},
		
	//다구간 여정 추가	
	addVia : function(){
		var maxLength = 3;
		ItinCnt_MD = $("#airSearch3").find('div[class="item view"]').length;

		if(ItinCnt_MD == 3){
			//alert("여정은 총 " + maxLength + "개 까지만 추가가 가능합니다.");
			alert("여정은 총 " + maxLength + "개 까지 가능합니다. \n" + maxLength + "개 이상의 여정이 있으시다면 1:1문의로 요청해 주시기 바랍니다.");
			return;
		}else{
			
			$("#airSearch3").find('div[class="item view"]').next().attr('class');
			
			$("#airSearch3").find("div.item").eq(ItinCnt_MD - 1).addClass("view");
			$("#airSearch3").find("div.item").eq(ItinCnt_MD - 1).removeClass("none");
			$("#airSearch3").find("div.item").eq(ItinCnt_MD - 1).show();
		}
	},
	
	//다구간 여정 삭제
	removeVia : function(){
		ItinCnt_MD = $("#airSearch3").find('div[class="item view"]').length;
		
		if(ItinCnt_MD == 2){
			alert("출발 및 귀국 여정은 삭제하실 수 없습니다.");
			return;
		}else{
			$("#airSearch3").find("div.item").eq(ItinCnt_MD - 2).removeClass("view");
			$("#airSearch3").find("div.item").eq(ItinCnt_MD - 2).addClass("none");
			$("#airSearch3").find("div.item").eq(ItinCnt_MD - 2).hide();
		}
	},
	
	//도시검색 관련
	openCitySearch : function(str, obj, seq){
		commonSearch.showSearchLayer("AIR", obj, seq);
	},
	
	changeRTWeekDay : function() {
		var idx = $("#AIR_RT_day option:selected").index();
		switch ( parseInt(idx) ) {
			case 1 : {
				$("#AIR_RT_plusDate option").eq(1).text( "출발일+2(토)" );
				$("#AIR_RT_plusDate option").eq(2).text( "출발일+3(일)" );
				$("#AIR_RT_plusDate option").eq(3).text( "출발일+4(월)" );
				//$( "#AIR_RT_plusDate" ).selectmenu();
				fakeselect.initialize();
				break;
			}
			case 2 :   {
				$("#AIR_RT_plusDate option").eq(1).text( "출발일+2(일)" );
				$("#AIR_RT_plusDate option").eq(2).text( "출발일+3(월)" );
				$("#AIR_RT_plusDate option").eq(3).text( "출발일+4(화)" );
				//$( "#AIR_RT_plusDate" ).selectmenu();
				fakeselect.initialize();
				break;
			}
			case 3 :  {
				$("#AIR_RT_plusDate option").eq(1).text( "출발일+2(월)" );
				$("#AIR_RT_plusDate option").eq(2).text( "출발일+3(화)" );
				$("#AIR_RT_plusDate option").eq(3).text( "출발일+4(수)" );
				//$( "#AIR_RT_plusDate" ).selectmenu();
				fakeselect.initialize();
				break;
			}
			default : {
				$("#AIR_RT_plusDate option").eq(1).text( "출발일+2(화)" );
				$("#AIR_RT_plusDate option").eq(2).text( "출발일+3(수)" );
				$("#AIR_RT_plusDate option").eq(3).text( "출발일+4(목)" );
				//$( "#AIR_RT_plusDate" ).selectmenu();
				fakeselect.initialize();
				break;
			}
		};
	},
	//국제선 출도착지 동시변경
	changeAirDep : function(code, desc){
		var airstart = $('#AIR_RT_dep0 option:selected').val();
		$("#AIR_RT_arr1 option[value="+airstart+"]").prop({selected: true});
		var obj =document.getElementById("AIR_RT_arr1"); 
		obj.reset(); //fakeselect reset
	},
	changeAirArr : function(code, desc){
		var airEnd = $('#AIR_RT_arr1 option:selected').val();
		$("#AIR_RT_dep0 option[value="+airEnd+"]").prop({selected: true});
		var obj =document.getElementById("AIR_RT_dep0");
		obj.reset(); //fakeselect reset
	},
	//항공+호텔 출도착지 동시변경 
	changeAirtelDep : function(code, desc){
		var airtelstart = $('#AIRHTL_RT_dep0 option:selected').val();
		$("#AIRHTL_RT_arr1 option[value="+airtelstart+"]").prop({selected: true});
		var obj =document.getElementById("AIRHTL_RT_arr1");
		obj.reset(); //fakeselect reset
	},
	changeAirtelArr : function(code, desc){
		var airtelEnd = $('#AIRHTL_RT_arr1 option:selected').val();
		$("#AIRHTL_RT_dep0 option[value="+airtelEnd+"]").prop({selected: true});
		var obj =document.getElementById("AIRHTL_RT_dep0");
		obj.reset(); //fakeselect reset
	},
	changeDomDep : function(code, desc){
		var domEnd = $('#domEndArea1_4 option:selected').val();
		var domstart = $('#domStartArea1_4 option:selected').val();
		if(domstart == domEnd){
			alert("동일한 출, 도착지를 선택하셨습니다. 다시 선택해 주시기 바랍니다.");
			$("#domStartArea1_4 option[value='']").prop({selected: true});
			var obj =document.getElementById("domStartArea1_4");
			obj.reset(); //fakeselect reset
			$("#domEndArea2_4 option[value='']").prop({selected: true});
			var obj1 =document.getElementById("domEndArea2_4");
			obj1.reset(); //fakeselect reset
			$("#domEndArea1_4 option[value='']").prop({selected: true});
			var obj2 =document.getElementById("domEndArea1_4");
			obj2.reset(); //fakeselect reset
			$("#domStartArea2_4 option[value='']").prop({selected: true});
			var obj3 =document.getElementById("domStartArea2_4");
			obj3.reset(); //fakeselect reset
			return;
		}else{
			$("#domEndArea2_4 option[value="+domstart+"]").prop({selected: true});
			var obj =document.getElementById("domEndArea2_4");
			obj.reset(); //fakeselect reset
		}
	},
		
	changeDomArr : function(code, desc){
		var domEnd = $('#domEndArea1_4 option:selected').val();
		var domstart = $('#domStartArea1_4 option:selected').val();
		if(domstart == domEnd){
			alert("동일한 출, 도착지를 선택하셨습니다. 다시 선택해 주시기 바랍니다.");
			$("#domEndArea1_4 option[value='']").prop({selected: true});
			var obj =document.getElementById("domEndArea1_4");
			obj.reset(); //fakeselect reset
			$("#domStartArea2_4 option[value='']").prop({selected: true});
			var obj1 =document.getElementById("domStartArea2_4");
			obj1.reset(); //fakeselect reset
			$("#domStartArea1_4 option[value='']").prop({selected: true});
			var obj2 =document.getElementById("domStartArea1_4");
			obj2.reset(); //fakeselect reset
			$("#domEndArea2_4 option[value='']").prop({selected: true});
			var obj3 =document.getElementById("domEndArea2_4");
			obj3.reset(); //fakeselect reset
			return;
		}else{
			$("#domStartArea2_4 option[value="+domEnd+"]").prop({selected: true});
			var obj =document.getElementById("domStartArea2_4");
			obj.reset(); //fakeselect reset
		}
	},
	
	changeDomDep1 : function(){
		var domstart = $('#domStartArea1_4 option:selected').val();
		var domEnd = $('#domEndArea1_4 option:selected').val();
		if(domstart == domEnd){
			alert("동일한 출, 도착지를 선택하셨습니다. 다시 선택해 주시기 바랍니다.");
			$("#domStartArea1_4 option[value='']").prop({selected: true});
			var obj =document.getElementById("domStartArea1_4");
			obj.reset(); //fakeselect reset
			return;
		}else{
			$("#domEndArea2_4 option[value="+domstart+"]").prop({selected: true});
			var obj =document.getElementById("domEndArea2_4");
			obj.reset(); //fakeselect reset
		}
	},
	
	changeDomArr1 : function(){
		var domEnd = $('#domEndArea1_4 option:selected').val();
		var domstart = $('#domStartArea1_4 option:selected').val();
		if(domstart == domEnd){
			alert("동일한 출, 도착지를 선택하셨습니다. 다시 선택해 주시기 바랍니다.");
			$("#domEndArea1_4 option[value='']").prop({selected: true});
			var obj =document.getElementById("domEndArea1_4");
			obj.reset(); //fakeselect reset
			return;
		}else{
			$("#domStartArea2_4 option[value="+domEnd+"]").prop({selected: true});
			var obj =document.getElementById("domStartArea2_4");
			obj.reset(); //fakeselect reset
		}
	},
	
	changeDomDep2 : function(){
		var domstart = $('#domStartArea2_4 option:selected').val();
		var domEnd = $('#domEndArea2_4 option:selected').val();
		if(domstart == domEnd){
			alert("동일한 출, 도착지를 선택하셨습니다. 다시 선택해 주시기 바랍니다.");
			$("#domStartArea2_4 option[value='']").prop({selected: true});
			var obj =document.getElementById("domStartArea2_4");
			obj.reset(); //fakeselect reset
			$("#domEndArea1_4 option[value='']").prop({selected: true});
			var obj1 =document.getElementById("domEndArea1_4");
			obj1.reset(); //fakeselect reset
			$("#domStartArea1_4 option[value='']").prop({selected: true});
			var obj2 =document.getElementById("domStartArea1_4");
			obj2.reset(); //fakeselect reset
			$("#domEndArea2_4 option[value='']").prop({selected: true});
			var obj3 =document.getElementById("domEndArea2_4");
			obj3.reset(); //fakeselect reset
			return;
		}else{
			$("#domEndArea1_4 option[value="+domstart+"]").prop({selected: true});
			var obj =document.getElementById("domEndArea1_4");
			obj.reset(); //fakeselect reset
		}
	},
	
	changeDomArr2 : function(){
		var domEnd = $('#domEndArea2_4 option:selected').val();
		var domstart = $('#domStartArea2_4 option:selected').val();
		if(domstart == domEnd){
			alert("동일한 출, 도착지를 선택하셨습니다. 다시 선택해 주시기 바랍니다.");
			$("#domEndArea2_4 option[value='']").prop({selected: true});
			var obj =document.getElementById("domEndArea2_4");
			obj.reset(); //fakeselect reset
			$("#domStartArea1_4 option[value='']").prop({selected: true});
			var obj1 =document.getElementById("domStartArea1_4");
			obj1.reset(); //fakeselect reset
			$("#domEndArea1_4 option[value='']").prop({selected: true});
			var obj2 =document.getElementById("domEndArea1_4");
			obj2.reset(); //fakeselect reset
			$("#domStartArea2_4 option[value='']").prop({selected: true});
			var obj3 =document.getElementById("domStartArea2_4");
			obj3.reset(); //fakeselect reset
			return;
		}else{
			$("#domStartArea1_4 option[value="+domEnd+"]").prop({selected: true});
			var obj =document.getElementById("domStartArea1_4");
			obj.reset(); //fakeselect reset
		}
	},
	
	//도시 검색 set
	setAirCity : function(code, desc){
		//var loc = cityLocation.lastIndexOf("_");
		//var codeValueId = cityLocation.substring(0, loc);
		// 추가
		var intRowSeq = abacusSearchSeq ? abacusSearchSeq : 1;
		
		if (abacusSearchObj.id.indexOf("dep") > 0) {	// 출발도시 선택일경우
			$("#AIR_" + tripType + "_dep"+ (intRowSeq - 1) + "").val(code);
			$("#AIR_" + tripType + "_dep"+ (intRowSeq - 1) + "_text").val(desc);
			
			if (tripType == "MD") {
				if(intRowSeq == 2){
					//다구간의 경우 두번째 출발도시 선택 시 첫번째 도착도시 변경안되도록 변경.
//					$("#AIR_" + tripType + "_arr" + (intRowSeq -2)).val(code);
//					$("#AIR_" + tripType + "_arr"+ (intRowSeq -2) + "_text").val(desc);
				}else if(intRowSeq == 3){
					$("#AIR_" + tripType + "_arr" + (intRowSeq -2)).val(code);
					$("#AIR_" + tripType + "_arr"+ (intRowSeq -2) + "_text").val(desc);
				}else{
					if($("#item_none_air").is(":visible") == false){
						//다구간의 경우 두번째 출발도시 선택 시 첫번째 도착도시 변경안되도록 변경.
//						$("#AIR_" + tripType + "_arr" + (intRowSeq -3)).val(code);
//						$("#AIR_" + tripType + "_arr"+ (intRowSeq -3) + "_text").val(desc);
					}else{
						$("#AIR_" + tripType + "_arr" + (intRowSeq -2)).val(code);
						$("#AIR_" + tripType + "_arr"+ (intRowSeq -2) + "_text").val(desc);
					}
				}
			}else{
				$("#AIR_" + tripType + "_arr" + (intRowSeq -2)).val(code);
				$("#AIR_" + tripType + "_arr"+ (intRowSeq -2) + "_text").val(desc);
			}
		} else {	// 도착도시 선택일경우
			$("#AIR_" + tripType + "_arr" + (intRowSeq - 1)).val(code);
			$("#AIR_" + tripType + "_arr"+ (intRowSeq - 1) + "_text").val(desc);
			if (tripType == "MD") {
				if ($("#AIR_" + tripType + "_dep" + intRowSeq + "_text").parent("div").attr("class") == "item view") {
					$("#AIR_" + tripType + "_dep"+ (intRowSeq) + "").val(code);
					$("#AIR_" + tripType + "_dep"+ (intRowSeq) + "_text").val(desc);
				} else {
					$("#AIR_" + tripType + "_dep3").val(code);
					$("#AIR_" + tripType + "_dep3_text").val(desc);
				}
			} else {
				$("#AIR_" + tripType + "_dep"+ (intRowSeq) + "").val(code);
				$("#AIR_" + tripType + "_dep"+ (intRowSeq) + "_text").val(desc);
			}
			
		}
		dimmLayerPop("layerSearchCity", 0);
	},
	
	setIntAirHistory : function(val){
		var strCookie = val.split("&");
		var tripType = "RT";
		var dayInd = "N";
		var dep1Exist = false;
		var dep2Exist = false;
    	for(var j = 0; j < strCookie.length; j++){
    		var param = strCookie[j].split("=");
    		if( param[0] == "trip"){
    			tripType = param[1];
    			airSearch.setTripType('', param[1]);
    		}
    		//------------------------------------------------------------------------------
    		if(param[0] == "dep0"){
    			airSearch.copyComboChange(param[1], 'AIR_' + tripType + '_dep0');
    		}
    		if(param[0] == "dep0_text"){
    			$('#AIR_' + tripType + '_dep0_text').val(param[1]);
    		}
    		if(param[0] == "arr0"){
    			$('#AIR_' + tripType + '_arr0').val(param[1]);
    		}
    		if(param[0] == "arr0_text"){
    			$('#AIR_' + tripType + '_arr0_text').val(param[1]);
    		}
    		if(param[0] == "depdate0"){
    			$('#AIR_' + tripType + '_depdate0').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
    		}
    		//------------------------------------------------------------------------------
    		if(param[0] == "dep1"){
				$("#airSearch3").find("div.item").eq(1).addClass("view");
    			$("#airSearch3").find("div.item").eq(1).removeClass("none");
    			$("#airSearch3").find("div.item").eq(1).show();
    			dep1Exist = true;
    			
    			$('#AIR_' + tripType + '_dep1').val(param[1]);
    		}
			if(param[0] == "dep1_text"){
    			$('#AIR_' + tripType + '_dep1_text').val(param[1]);
    		}
			if(param[0] == "arr1"){
				if(tripType == 'RT'){
					airSearch.copyComboChange(param[1], 'AIR_' + tripType + '_arr1');
				}else{
					$('#AIR_' + tripType + '_arr1').val(param[1]);
				}
    		}
    		if(param[0] == "arr1_text"){
    			$('#AIR_' + tripType + '_arr1_text').val(param[1]);
    		}
    		if(param[0] == "depdate1"){
    			$('#AIR_' + tripType + '_depdate1').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate0').val(), "/", 1) );
    			$('#AIR_' + tripType + '_depdate1').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
    		}
    		//------------------------------------------------------------------------------
    		if(param[0] == "strDateSearch"){
    			airSearch.copyComboChange(param[1], 'strDateSearch');
    		}
    		
    		if(param[0] == "dayInd"){
    			$('#AIR_RT_dayInd').val(param[1]);
    			if(param[1] == "Y"){
    				dayInd = "Y";
    			}
    		}
    		
    		if(param[0] == "day"){
    			airSearch.copyComboChange(param[1], 'AIR_RT_day');
    			airSearch.changeRTWeekDay();
    		}
    		if(param[0] == "plusDate"){
    			airSearch.copyComboChange(param[1], 'AIR_RT_plusDate');
    		}
    		if(param[0] == "daySeq"){
    			$('#AIR_RT_daySeq').val(param[1]);
    		}
    		//------------------------------------------------------------------------------
    		if(param[0] == "returnUnfix"){
    			if (param[1] == "Y") {
    				$('#AIR_' + tripType + '_retdate').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate0').val(), "/", 1) );
    				$("#AIR_returnUnfix").attr("checked", "checked");
        			airSearch.setOpenItin();
    			} else {
    				$("#AIR_returnUnfix").removeAttr("checked");
        			airSearch.setOpenItin();
    			}
        	}
    		if(param[0] == "retdate"){
    			//alert("|"+param[1] + "|")
    			if (param[1] != "" && param[1] != "OPEN") { // returnUnfix 와 관련
    				$('#AIR_RT_retdate').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate0').val(), "/", 1) );
    				$('#AIR_RT_retdate').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));	
    			}
        	}
    		if(param[0] == "val"){
    			airSearch.copyComboChange(param[1], 'AIR_RT_val');
        	}
    		//------------------------------------------------------------------------------
    		if(param[0] == "dep2"){
    			$("#airSearch3").find("div.item").eq(2).addClass("view");
    			$("#airSearch3").find("div.item").eq(2).removeClass("none");
    			$("#airSearch3").find("div.item").eq(2).show();
    			dep2Exist = true;
    			
    			$('#AIR_' + tripType + '_dep2').val(param[1]);
    		}
			if(param[0] == "dep2_text"){
    			$('#AIR_' + tripType + '_dep2_text').val(param[1]);
    		}
			if(param[0] == "arr2"){
    			$('#AIR_' + tripType + '_arr2').val(param[1]);
    		}
    		if(param[0] == "arr2_text"){
    			$('#AIR_' + tripType + '_arr2_text').val(param[1]);
    		}
    		if(param[0] == "depdate2"){
    			$('#AIR_' + tripType + '_depdate2').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate1').val(), "/", 1) );
        		$('#AIR_' + tripType + '_depdate2').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
        	}
    		//------------------------------------------------------------------------------
    		if(param[0] == "dep3"){
    			$('#AIR_' + tripType + '_dep3').val(param[1]);
    		}
			if(param[0] == "dep3_text"){
    			$('#AIR_' + tripType + '_dep3_text').val(param[1]);
    		}
			if(param[0] == "arr3"){
				airSearch.copyComboChange(param[1], 'AIR_' + tripType + '_arr3');
    		}
    		if(param[0] == "arr3_text"){
    			$('#AIR_' + tripType + '_arr3_text').val(param[1]);
    		}
    		if(param[0] == "depdate3"){
    			if (dep2Exist && tripType == "MD") {
    				$('#AIR_' + tripType + '_depdate3').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate2').val(), "/", 1) );
    			} else if (dep1Exist && tripType == "MD") {
    				$('#AIR_' + tripType + '_depdate3').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate1').val(), "/", 1) );
    			} else if (tripType == "MD") {
    				$('#AIR_' + tripType + '_depdate3').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate0').val(), "/", 1) );
    			}
    			
        		$('#AIR_' + tripType + '_depdate3').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
        	}
    		//------------------------------------------------------------------------------
    		if(param[0] == "comp"){
    			airSearch.copyComboChange(param[1], 'AIR_' + tripType + '_comp');
    		}
    		if(param[0] == "adt"){
    			airSearch.copyComboChange(param[1], 'AIR_' + tripType + '_adt');
    		}
    		if(param[0] == "chd"){
    			airSearch.copyComboChange(param[1], 'AIR_' + tripType + '_chd');
    		}
    		if(param[0] == "inf"){
    			airSearch.copyComboChange(param[1], 'AIR_' + tripType + '_inf');
    		}
    	}
    	
    	if (!dep1Exist && tripType == "MD") {
    		$("#airSearch3").find("div.item").eq(1).removeClass("view");
			$("#airSearch3").find("div.item").eq(1).addClass("none");
			$("#airSearch3").find("div.item").eq(1).hide();
			
			$('#AIR_' + tripType + '_depdate1').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate0').val(), "/", 1) );
			$('#AIR_' + tripType + '_depdate1').val("출발날짜");
    	}
    	
    	if (!dep2Exist && tripType == "MD") {
    		$("#airSearch3").find("div.item").eq(2).removeClass("view");
			$("#airSearch3").find("div.item").eq(2).addClass("none");
			$("#airSearch3").find("div.item").eq(2).hide();
			
			if (dep1Exist) {
				$('#AIR_' + tripType + '_depdate2').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate1').val(), "/", 1) );	
			} else {
				$('#AIR_' + tripType + '_depdate2').datepicker( "option", "minDate", calculateDate($('#AIR_' + tripType + '_depdate0').val(), "/", 1) );
			}
			$('#AIR_' + tripType + '_depdate2').val("출발날짜");
    	}
    	
    	if(dayInd == "Y"){
			airSearch.searchIntType(2);
		}else{
			airSearch.searchIntType(1);
		}
	},
	history_submit : function(seq){
		var hf = eval("document.historyForm_"+seq);
		if(hf.trip.value == 'RT'){
			airSearch.setTripType("DOM","RT");
			//콤보박스 setting
			$("#domStartArea1_4 option[value='"+hf.dep0.value+"']").prop({selected: true});
			var obj1 =document.getElementById("domStartArea1_4");
			obj1.reset(); //fakeselect reset
			$("#domEndArea1_4 option[value='"+hf.arr0.value+"']").prop({selected: true});
			var obj2 =document.getElementById("domEndArea1_4");
			obj2.reset(); //fakeselect reset
			$("#domStartArea2_4 option[value='"+hf.dep1.value+"']").prop({selected: true});
			var obj3 =document.getElementById("domStartArea2_4");
			obj3.reset(); //fakeselect reset
			$("#domEndArea2_4 option[value='"+hf.arr1.value+"']").prop({selected: true});
			var obj4 =document.getElementById("domEndArea2_4");
			obj4.reset(); //fakeselect reset
			
			$("#numAdult4 option[value='"+hf.adt.value+"']").prop({selected: true});
			var obj5 =document.getElementById("numAdult4");
			obj5.reset(); //fakeselect reset
			$("#numKid4 option[value='"+hf.chd.value+"']").prop({selected: true});
			var obj6 =document.getElementById("numKid4");
			obj6.reset(); //fakeselect reset
			$("#numBaby4 option[value='"+hf.inf.value+"']").prop({selected: true});
			var obj7 =document.getElementById("numBaby4");
			obj7.reset(); //fakeselect reset
			
			$("#DOM_RT_depdate0").val(hf.depdate0.value);
			$("#DOM_RT_depdate1").val(hf.depdate1.value);
			
			
		}else{
			airSearch.setTripType("DOM","OW");
			
			//콤보박스 setting
			$("#domStartArea1_5 option[value='"+hf.dep0.value+"']").prop({selected: true});
			var obj1 =document.getElementById("domStartArea1_5");
			obj1.reset(); //fakeselect reset
			$("#domEndArea1_5 option[value='"+hf.arr0.value+"']").prop({selected: true});
			var obj2 =document.getElementById("domEndArea1_5");
			obj2.reset(); //fakeselect reset
			
			$("#numAdult5 option[value='"+hf.adt.value+"']").prop({selected: true});
			var obj3 =document.getElementById("numAdult5");
			obj3.reset(); //fakeselect reset
			$("#numKid5 option[value='"+hf.chd.value+"']").prop({selected: true});
			var obj4 =document.getElementById("numKid5");
			obj4.reset(); //fakeselect reset
			$("#numBaby5 option[value='"+hf.inf.value+"']").prop({selected: true});
			var obj5 =document.getElementById("numBaby5");
			obj5.reset(); //fakeselect reset
			
			$("#DOM_OW_depdate0").val(hf.depdate0.value);
		}
		
		//$('#historyForm').attr('action', '/domair/findDomFareSearch.lts').submit();
	},
	
	check_arrival : function(seg1,seg2){
		var arrival=new Array();

		arrival[0] ="GMP";
		arrival[1] ="ICN";
		arrival[2] ="PUS";
		arrival[3] ="TAE";
		arrival[4] ="CJU";
		arrival[5] ="KWJ";
		arrival[6] ="USN";
		arrival[7] ="KPO";
		arrival[8] ="MPK";
		arrival[9] ="HIN";
		arrival[10]="RSU";
		arrival[11]="YEC";
		arrival[12]="SHO";
		arrival[13]="KUV";
		arrival[14]="WJU";
		arrival[15]="KAG";
		arrival[16]="CJJ";
		arrival[17]="MWX";
		
		
		//출발이  대구 TAE 일경우
		var arrival_TAE=new Array();
		arrival_TAE[0]="CJU";
		arrival_TAE[1]="KAG";
		arrival_TAE[2]="GMP";
		arrival_TAE[3]="ICN";
		arrival_TAE[4]="SHO";
		
		
		//출발이  울산 USN 일경우
		var arrival_USN=new Array();
		arrival_USN[0]="CJU";
		arrival_USN[1]="GMP";
		arrival_USN[2]="ICN";
		
		
		//출발이 원주 WJU 일경우
		var arrival_WJU=new Array();
		arrival_WJU[0]="CJU";
		arrival_WJU[1]="PUS";
		
		
		
		//출발이  예천 YEC 일경우
		var arrival_YEC=new Array();
		arrival_YEC[0]="GMP";
		arrival_YEC[1]="ICN";
		
		//출발이  여수 RSU 일경우
		var arrival_RSU=new Array();
		arrival_RSU[0]="CJU";
		arrival_RSU[1]="KAG";
		arrival_RSU[2]="GMP";
		arrival_RSU[3]="ICN";
		arrival_RSU[4]="SHO";
		
		
		//출발이  속초 SHO 일경우
		var arrival_SHO=new Array();
		arrival_SHO[0]="CJU";
		arrival_SHO[1]="KUV";
		arrival_SHO[2]="KWJ";
		arrival_SHO[3]="MPK";
		arrival_SHO[4]="RSU";
		arrival_SHO[5]="TAE";
		
		
		//출발이  목포 MPK 일경우
		var arrival_MPK=new Array();
		arrival_MPK[0]="CJU";
		arrival_MPK[1]="KAG";
		arrival_MPK[2]="PUS";
		arrival_MPK[3]="GMP";
		arrival_MPK[4]="ICN";
		arrival_MPK[5]="SHO";
		
		//출발이  부산 PUS 일경우
		var arrival_PUS=new Array();
		arrival_PUS[0]="CJU";
		arrival_PUS[1]="KAG";
		arrival_PUS[2]="KWJ";
		arrival_PUS[3]="MPK";
		arrival_PUS[4]="GMP";
		arrival_PUS[5]="ICN";
		arrival_PUS[6]="WJU";
		arrival_PUS[7]="YNY";
		
		
		//출발이 군산 KUV 일경우
		var arrival_KUV=new Array();
		arrival_KUV[0]="CJU";
		arrival_KUV[1]="KAG";
		arrival_KUV[2]="GMP";
		arrival_KUV[3]="ICN";
		arrival_KUV[4]="SHO";
		
		//출발이 광주 KWJ 일경우
		var arrival_KWJ=new Array();
		arrival_KWJ[0]="CJU";
		arrival_KWJ[1]="KAG";
		arrival_KWJ[2]="PUS";
		arrival_KWJ[3]="GMP";
		arrival_KWJ[4]="ICN";
		arrival_KWJ[5]="SHO";
		
		
		//출발이 포항 KPO 일경우
		var arrival_KPO=new Array();
		arrival_KPO[0]="CJU";
		arrival_KPO[1]="GMP";
		arrival_KPO[2]="ICN";
		
		
		//출발이 강릉 KAG 일경우
		var arrival_KAG=new Array();
		arrival_KAG[0]="CJU";
		arrival_KAG[1]="KUV";
		arrival_KAG[2]="KWJ";
		arrival_KAG[3]="MPK";
		arrival_KAG[4]="PUS";
		arrival_KAG[5]="RSU";
		arrival_KAG[6]="TAE";
		
		
		//출발이 진주 HIN 일경우
		var arrival_HIN=new Array();
		arrival_HIN[0]="CJU";
		arrival_HIN[1]="GMP";
		arrival_HIN[2]="ICN";
		
		//출발이 제주 CJU 일경우
		var arrival_CJU=new Array();
		
		arrival_CJU[0] ="GMP";
		arrival_CJU[1] ="ICN";
		arrival_CJU[2] ="PUS";
		arrival_CJU[3] ="TAE";
		arrival_CJU[4] ="KWJ";
		arrival_CJU[5] ="USN";
		arrival_CJU[6] ="KPO";
		arrival_CJU[7] ="MPK";
		arrival_CJU[8] ="HIN";
		arrival_CJU[9] ="RSU";
		arrival_CJU[10]="SHO";
		arrival_CJU[11]="KUV";
		arrival_CJU[12]="WJU";
		arrival_CJU[13]="KAG";
		arrival_CJU[14]="CJJ";
		arrival_CJU[15]="MWX";
		
		
		//출발이 서울 SEL 일경우
		var arrival_SEL=new Array();
		
		arrival_SEL[0] ="PUS";
		arrival_SEL[1] ="TAE";
		arrival_SEL[2] ="CJU";
		arrival_SEL[3] ="KWJ";
		arrival_SEL[4] ="USN";
		arrival_SEL[5] ="KPO";
		arrival_SEL[6] ="MPK";
		arrival_SEL[7] ="HIN";
		arrival_SEL[8] ="RSU";
		arrival_SEL[9] ="YEC";
		arrival_SEL[10]="KUV";
		arrival_SEL[11]="YNY";
		arrival_SEL[12]="MWX";


		//출발이 서울 GMP 일경우
		var arrival_GMP=new Array();
		
		arrival_GMP[0] ="PUS";
		arrival_GMP[1] ="TAE";
		arrival_GMP[2] ="CJU";
		arrival_GMP[3] ="KWJ";
		arrival_GMP[4] ="USN";
		arrival_GMP[5] ="KPO";
		arrival_GMP[6] ="MPK";
		arrival_GMP[7] ="HIN";
		arrival_GMP[8] ="RSU";
		arrival_GMP[9] ="YEC";
		arrival_GMP[10]="KUV";
		arrival_GMP[11]="YNY";
		arrival_GMP[12]="MWX";

		//출발이 서울 ICN 일경우
		var arrival_ICN=new Array();
		
		arrival_ICN[0] ="PUS";
		arrival_ICN[1] ="TAE";
		arrival_ICN[2] ="CJU";
		arrival_ICN[3] ="KWJ";
		arrival_ICN[4] ="USN";
		arrival_ICN[5] ="KPO";
		arrival_ICN[6] ="MPK";
		arrival_ICN[7] ="HIN";
		arrival_ICN[8] ="RSU";
		arrival_ICN[9] ="YEC";
		arrival_ICN[10]="KUV";
		arrival_ICN[11]="YNY";
		arrival_ICN[12]="MWX";
		
		//출발이 청주 CJJ 일경우
		var arrival_CJJ=new Array();
		arrival_CJJ[0]="CJU";
		
		//출발이 양양 YNY 일경우
		var arrival_YNY=new Array();
		arrival_YNY[0] ="GMP";
		arrival_YNY[1] ="ICN";
		arrival_YNY[2] ="PUS";
		
		//출발이 무안 MWX 일경우
		var arrival_MWX=new Array();
		arrival_MWX[0]="GMP";
		arrival_MWX[1]="ICN";
		arrival_MWX[2]="CJU";


		if(seg1=='GMP'){
			for(var i=0;i<arrival_GMP.length;i++){
				var z0=arrival_GMP[i];
				if(z0 == seg2)
					return true;
			}
			
			return false;
		}
		
		if(seg1=='ICN'){
			for(var i=0;i<arrival_ICN.length;i++){
				var z0=arrival_ICN[i];
				if(z0 == seg2)
					return true;
			}
			
			return false;
		}

		if(seg1=='PUS'){
			for(var i=0;i<arrival_PUS.length;i++){
				var z0=arrival_PUS[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		
		}

		if(seg1=='TAE'){
		
			for(var i=0;i<arrival_TAE.length;i++){
				var z0=arrival_TAE[i];
				if(z0 == seg2)
					return true;
			}
			
			return false;
		}

		if(seg1=='CJU'){
		
			for(var i=0;i<arrival_CJU.length;i++){
				var z0=arrival_CJU[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}

		if(seg1=='KWJ'){
			for(var i=0;i<arrival_KWJ.length;i++){
				var z0=arrival_KWJ[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}

		if(seg1=='USN'){
		
			for(var i=0;i<arrival_USN.length;i++){
				var z0=arrival_USN[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}

		if(seg1=='KPO'){
			for(var i=0;i<arrival_KPO.length;i++){
				var z0=arrival_KPO[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}


		if(seg1=='MPK'){
			for(var i=0;i<arrival_MPK.length;i++){
				var z0=arrival_MPK[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}

		if(seg1=='HIN'){
		
			for(var i=0;i<arrival_HIN.length;i++){
				var z0=arrival_HIN[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		
		}

		if(seg1=='RSU'){
			for(var i=0;i<arrival_RSU.length;i++){
				var z0=arrival_RSU[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		
		}

		if(seg1=='YEC'){
			for(var i=0;i<arrival_YEC.length;i++){
				var z0=arrival_YEC[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}


		if(seg1=='SHO'){
		
			for(var i=0;i<arrival_SHO.length;i++){
				var z0=arrival_SHO[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}


		if(seg1=='KUV'){
		
			for(var i=0;i<arrival_KUV.length;i++){
				var z0=arrival_KUV[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}

		if(seg1=='WJU'){
			for(var i=0;i<arrival_WJU.length;i++){
				var z0=arrival_WJU[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		
		}

		if(seg1=='KAG'){
			for(var i=0;i<arrival_KAG.length;i++){
				var z0= arrival_KAG[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		
		}

		if(seg1=='CJJ'){
			for(var i=0;i<arrival_CJJ.length;i++){
				var z0=arrival_CJJ[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}

		if(seg1=='YNY'){
			for(var i=0;i<arrival_YNY.length;i++){
				var z0=arrival_YNY[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}

		if(seg1=='MWX'){
			for(var i=0;i<arrival_MWX.length;i++){
				var z0=arrival_MWX[i];
				if(z0 == seg2)
					return true;
			}
			return false;
		}
	},
	
	//항공(국제선, 국내선) 검색하기 버튼 클릭 시
	airSubmit : function(){
		if(flightType == "DOM"){
			var fName = eval("document.air_dom_" + tripType);
			var dep0 = fName.dep0.value;
			var arr0 = fName.arr0.value;
			var depdate0 = fName.depdate0.value.replace(/\//g, '');;
			
			var depDateOW = document.getElementById("DOM_OW_depdate0").value.replace(/\//g, '');
			var depDateRT1 = document.getElementById("DOM_RT_depdate0").value.replace(/\//g, '');
			var depDateRT2= document.getElementById("DOM_RT_depdate1").value.replace(/\//g, '');
			var adt = fName.adt.value;
			
			//국내선 왕복/편도 - 출발지를 선택 X
			if(dep0 == ''){
				commonSearch.resetDomAirDate(tripType);
				alert("출발도시를 선택해 주세요.");
				fName.dep0.focus();
				return;
			}
			//국내선 왕복/편도  - 도착지를 선택 X
			if(arr0 == ''){
				commonSearch.resetDomAirDate(tripType);
				alert("도착도시를 선택해 주세요.");
				fName.arr0.focus();
				return;
			}
			//국내선 왕복/편도  - 출발지와 도착지가 동일
			if(dep0 == arr0){
				commonSearch.resetDomAirDate(tripType);
				alert("출.도착지가 동일합니다.");	
				fName.arr0.focus();
				return;
			}
			//국내선 왕복/편도  - 출발지와 도착지 가능여부
			if(dep0 !=''){
				if(!airSearch.check_arrival(dep0,arr0)){			
					commonSearch.resetDomAirDate(tripType);
					alert('선택하신 구간은 없는 구간입니다.');
					fName.arr0.focus();
					return;			
				}
			}
			
			if(tripType=="RT"){
				var arr1 = fName.arr1.value;
				var dep1 = fName.dep1.value;
				var depdate1 = fName.depdate1.value.replace(/\//g, '');;
				//국내선 왕복 - 날짜를 선택 X
				if(depdate0.length != 8 ){
					commonSearch.resetDomAirDate(tripType);
					alert("출발날짜를 선택해 주세요.");
					fName.depdate0.focus();
					return;
				}
				if(depdate1.length != 8 ){
					commonSearch.resetDomAirDate(tripType);
					fName.depdate1.focus();
					alert("오는날짜를 선택해 주세요.");
					return;
				}
				
			}
			//국내선 편도 - 날짜를 선택 X
			if(depdate0.length != 8){
				commonSearch.resetDomAirDate(tripType);
				alert("출발날짜를 선택해 주세요.");
				fName.depdate0.focus();
				return;
			}
			//국내선 왕복 - 출발날짜가 도착날짜보다 나중일경우 
			if(tripType == "RT"){
				if(depDateRT1 > depDateRT2){
					commonSearch.resetDomAirDate(tripType);
					alert("첫번째 선택하신 출발일자가 틀렸습니다.");
					fName.depdate0.focus();
					return;
				}
			}
			//국내선 왕복/편도 - 성인 명수를 선택 X
			if(adt <= 0){
				commonSearch.resetDomAirDate(tripType);
				alert("탑승객을 선택해 주세요.");
				fName.adt.focus();
				return;
			}
			
			
			if(tripType == "RT"){
				var depDesc0 = $('#domStartArea1_4 option:selected').text();
				$("input[name=depDesc0]").val(depDesc0);
				var arrDesc0 = $('#domEndArea1_4 option:selected').text();
				$("input[name=arrDesc0]").val(arrDesc0);
				var depDesc1 = $('#domStartArea2_4 option:selected').text();
				$("input[name=depDesc1]").val(depDesc1);
				var arrDesc1 = $('#domEndArea2_4 option:selected').text();
				$("input[name=arrDesc1]").val(arrDesc1);
				//domSubmitCheck('RT');	
				$("#DOM_RT_depdate0").val(depdate0);
				$("#DOM_RT_depdate1").val(depdate1);
				
			}
			if(tripType == "OW"){			
				var depDesc0 = $('#domStartArea1_5 option:selected').text();
				$("input[name=depDesc0]").val(depDesc0);
				var arrDesc0 = $('#domEndArea1_5 option:selected').text();
				$("input[name=arrDesc0]").val(arrDesc0);
				//domSubmitCheck('OW');
				$("#DOM_OW_depdate0").val(depdate0);
			}
			
			//국내선 요금리스트로 submit
			$('#air_dom_' + tripType).attr('action', airDomSearchUrl).submit();
			
			
			
		/*
		if(flightType == "DOM"){
			
			// 전송전 일자변환
			commonSearch.setDomAirDate(tripType);
			
			var fName = eval("document.air_dom_" + tripType);
			var dep0 = fName.dep0.value;
			var arr0 = fName.arr0.value;
			var depDateRT1 = document.getElementById("DOM_RT_depdate0").value;
			var depDateRT2= document.getElementById("DOM_RT_depdate1").value;
			var adt = fName.adt.value;
			if(tripType=="RT"){
				var arr1 = fName.arr1.value;
				var dep1 = fName.dep1.value;
			}
			//국내선 왕복/편도 - 출발지를 선택 X
			if(dep0 == ''){
				commonSearch.resetDomAirDate(tripType);
				alert("출발도시를 선택해 주세요");
				fName.dep0.focus();
				return;
			}
			//국내선 왕복/편도  - 도착지를 선택 X
			if(arr0 == ''){
				commonSearch.resetDomAirDate(tripType);
				alert("도착도시를 선택해 주세요");
				fName.arr0.focus();
				return;
			}
			//국내선 왕복/편도  - 출발지와 도착지가 동일
			if(dep0 == arr0){
				commonSearch.resetDomAirDate(tripType);
				alert("출.도착지가 동일합니다");	
				fName.arr0.focus();
				return;
			}
			//국내선 왕복/편도  - 출발지와 도착지 가능여부
			if(dep0 !=''){
				if(!airSearch.check_arrival(dep0,arr0)){	
					commonSearch.resetDomAirDate(tripType);
					alert('선택하신 구간은 없는 구간입니다.');
					fName.arr0.focus();
					return;			
				}
			} 
			
			if(tripType=="RT"){
				var arr1 = fName.arr1.value;
				var dep1 = fName.dep1.value;
				var depdate1 = fName.depdate1.value.replace(/\//g, '');;
				//국내선 왕복 - 날짜를 선택 X
				if(depdate0.search(numberPattern) != -1 || depdate1.search(numberPattern) != -1){
					if(depdate0.search(numberPattern) != -1 ){
						commonSearch.resetDomAirDate(tripType);
						alert("출발날짜를 선택해 주세요.");
						fName.depdate0.focus();
					}else{
						commonSearch.resetDomAirDate(tripType);
						fName.depdate1.focus();
						alert("오는날짜를 선택해 주세요.");
					}
					return;
				}
			}
			//국내선 편도 - 날짜를 선택 X
			if(depdate0.search(numberPattern) != -1){
				commonSearch.resetDomAirDate(tripType);
				alert("출발날짜를 선택해 주세요.");
				fName.depdate0.focus();
				return;
			}
			//국내선 왕복 - 출발날짜가 도착날짜보다 나중일경우 
			if(airTripType == "RT"){
				if(depDateRT1 > depDateRT2){
					commonSearch.resetDomAirDate(tripType);
					alert("출발일자가 틀렸습니다.");
					fName.depdate0.focus();
					return;
				}
			}
			//국내선 왕복/편도 - 성인 명수를 선택 X
			if(adt <= 0){
				commonSearch.resetDomAirDate(tripType);
				alert("탑승객을 선택해 주세요.");
				fName.adt.focus();
				return;
			}
			
			//국내선 왕복/편도 - 성인 명수를 선택 X
			if(adt <= 0){
				commonSearch.resetDomAirDate(tripType);
				alert("탑승객을 선택해 주세요");
				fName.adt.focus();
				return;
			}
			
			
			if(tripType == "RT"){
				var depDesc0 = $('#domStartArea1_4 option:selected').text();
				$("input[name=depDesc0]").val(depDesc0);
				var arrDesc0 = $('#domEndArea1_4 option:selected').text();
				$("input[name=arrDesc0]").val(arrDesc0);
				var depDesc1 = $('#domStartArea2_4 option:selected').text();
				$("input[name=depDesc1]").val(depDesc1);
				var arrDesc1 = $('#domEndArea2_4 option:selected').text();
				$("input[name=arrDesc1]").val(arrDesc1);
				//domSubmitCheck('RT');	
				
			}
			if(tripType == "OW"){			
				var depDesc0 = $('#domStartArea1_5 option:selected').text();
				$("input[name=depDesc0]").val(depDesc0);
				var arrDesc0 = $('#domEndArea1_5 option:selected').text();
				$("input[name=arrDesc0]").val(arrDesc0);
				//domSubmitCheck('OW');
				
			}
			
			
			//국내선 요금리스트로 submit
			$('#air_dom_' + tripType).attr('action', airDomSearchUrl).submit();
		*/	
		}else if(flightType == "INT"){
			var user = Number($('#AIR_RT_adt').val()) + Number($('#AIR_RT_chd').val()) + Number($('#AIR_RT_inf').val());
			
			// 전송전 일자변환
			commonSearch.setAirDate(tripType);
						
			if(tripType == "RT"){
				if($('#AIR_RT_arr0').val() == ""){
					commonSearch.resetAirDate(tripType);
					alert('도착도시를 선택해 주세요');return;
				}
				if($('#AIR_RT_dayInd').val() == "N" && !commonSearch.validAirDate($('#AIR_RT_depdate0').val())) {
					commonSearch.resetAirDate(tripType);
					alert('출발날짜를 선택해 주세요.');return;
				}
				if($('#AIR_RT_dayInd').val() == "Y" && $('#AIR_RT_day').val() == ""){
					commonSearch.resetAirDate(tripType);
					alert('요일을 선택해 주세요');return;
				}
				if($('#AIR_RT_dep1').val() == ""){
					commonSearch.resetAirDate(tripType);
					alert('출발도시를 선택해 주세요');return;
				}
				if($('#AIR_RT_dayInd').val() == "N" && $('#AIR_RT_retdate').val() != "OPEN" && !commonSearch.validAirDate($('#AIR_RT_retdate').val())){
					commonSearch.resetAirDate(tripType);
					alert('귀국날짜를 선택해 주세요.');return;
				}
				if($('#AIR_RT_dayInd').val() == "N" && $('#AIR_RT_retdate').val() != "OPEN" && (Number($('#AIR_RT_depdate0').val()) > Number($('#AIR_RT_retdate').val()))){
					commonSearch.resetAirDate(tripType);
					alert('귀국일을 출국일 이후로 선택해 주세요.');
					return;
				}
				if($('#AIR_returnUnfix').is(":checked") && $('#AIR_RT_val').val() == ""){
					commonSearch.resetAirDate(tripType);
					alert('귀국일 미정시 최대 체류기간을 선택해 주세요');
					return;
				}
				if(user > 9){
					commonSearch.resetAirDate(tripType);
					alert('예약인원은 9명을 넘을수 없습니다.');
					return;
				}
				if($('#AIR_RT_arr0').val() == "SEL" || $('#AIR_RT_arr0').val() == "ICN" || $('#AIR_RT_arr0').val() == "GMP" || 
				   $('#AIR_RT_arr0').val() == "PUS" || $('#AIR_RT_arr0').val() == "TAE" || $('#AIR_RT_arr0').val() == "CJU" || 
				   $('#AIR_RT_arr0').val() == "KWJ" || $('#AIR_RT_arr0').val() == "USN" || $('#AIR_RT_arr0').val() == "KPO" || 
				   $('#AIR_RT_arr0').val() == "MPK" || $('#AIR_RT_arr0').val() == "HIN" || $('#AIR_RT_arr0').val() == "RSU" || 
				   $('#AIR_RT_arr0').val() == "YEC" || $('#AIR_RT_arr0').val() == "SHO" || $('#AIR_RT_arr0').val() == "KUV" || 
				   $('#AIR_RT_arr0').val() == "WJU" || $('#AIR_RT_arr0').val() == "KAG" || $('#AIR_RT_arr0').val() == "CJJ"){
						commonSearch.resetAirDate(tripType);
						alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');
						return;
				}
				
				if(($('#AIR_RT_arr0').val() != $('#AIR_RT_dep1').val()) || ($('#AIR_RT_dep0').val() != $('#AIR_RT_arr1').val())){
					commonSearch.resetAirDate(tripType);
					$('#AIR_RT_trip').val("MD");
				}
				
				$('#AIR_RT_dep0_text').val($('#AIR_RT_dep0 option:selected').text());
				$('#AIR_RT_arr1_text').val($('#AIR_RT_arr1 option:selected').text());
				$('#AIR_RT_comp_nm').val($('#AIR_RT_comp option:selected').text());
				$('#AIR_RT_val_nm').val($('#AIR_RT_val option:selected').text());
				$('#AIR_RT_day_nm').val($('#AIR_RT_day option:selected').text());
				$('#AIR_RT_plusDate_nm').val($('#AIR_RT_plusDate option:selected').text());
				$('#AIR_RT_retdate').removeAttr("disabled");
				$('#air_int_RT').attr('action', airSearchUrl).submit();				
			}else if(tripType == "OW"){
				commonSearch.setAirDate(tripType);
				if($('#AIR_OW_arr0').val() == ""){
					commonSearch.resetAirDate(tripType);
					alert('도착도시를 선택해 주세요');
					return;
				}
				if(!commonSearch.validAirDate($('#AIR_OW_depdate0').val())){
					commonSearch.resetAirDate(tripType);
					alert('출발날짜를 선택해 주세요.');
					return;
				}
				if(user > 9){
					commonSearch.resetAirDate(tripType);
					alert('예약인원은 9명을 넘을수 없습니다.');
					return;
				}
				if($('#AIR_RT_arr0').val() == "SEL" || $('#AIR_RT_arr0').val() == "ICN" || $('#AIR_RT_arr0').val() == "GMP" || 
				   $('#AIR_RT_arr0').val() == "PUS" || $('#AIR_RT_arr0').val() == "TAE" || $('#AIR_RT_arr0').val() == "CJU" || 
				   $('#AIR_RT_arr0').val() == "KWJ" || $('#AIR_RT_arr0').val() == "USN" || $('#AIR_RT_arr0').val() == "KPO" || 
				   $('#AIR_RT_arr0').val() == "MPK" || $('#AIR_RT_arr0').val() == "HIN" || $('#AIR_RT_arr0').val() == "RSU" || 
				   $('#AIR_RT_arr0').val() == "YEC" || $('#AIR_RT_arr0').val() == "SHO" || $('#AIR_RT_arr0').val() == "KUV" || 
				   $('#AIR_RT_arr0').val() == "WJU" || $('#AIR_RT_arr0').val() == "KAG" || $('#AIR_RT_arr0').val() == "CJJ"){
						commonSearch.resetAirDate(tripType);
						alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');
						return;
				}
				
				
				$('#AIR_OW_dep0_text').val($('#AIR_OW_dep0 option:selected').text());
				
				$('#AIR_OW_comp_nm').val($('#AIR_OW_comp option:selected').text());
				
				$('#air_int_OW').attr('action', airSearchUrl).submit();
				
			}else if(tripType == "MD"){
				
				//var f = document.air_int_MD;
				commonSearch.setAirDate(tripType);
				if(user > 9){
					alert('예약인원은 9명을 넘을수 없습니다.');
					return;
				}
				if($('#AIR_MD_arr0').val() == "SEL" || $('#AIR_MD_arr0').val() == "ICN" || $('#AIR_MD_arr0').val() == "GMP" || 
				   $('#AIR_MD_arr0').val() == "PUS" || $('#AIR_MD_arr0').val() == "TAE" || $('#AIR_MD_arr0').val() == "CJU" || 
				   $('#AIR_MD_arr0').val() == "KWJ" || $('#AIR_MD_arr0').val() == "USN" || $('#AIR_MD_arr0').val() == "KPO" || 
				   $('#AIR_MD_arr0').val() == "MPK" || $('#AIR_MD_arr0').val() == "HIN" || $('#AIR_MD_arr0').val() == "RSU" || 
				   $('#AIR_MD_arr0').val() == "YEC" || $('#AIR_MD_arr0').val() == "SHO" || $('#AIR_MD_arr0').val() == "KUV" || 
				   $('#AIR_MD_arr0').val() == "WJU" || $('#AIR_MD_arr0').val() == "KAG" || $('#AIR_MD_arr0').val() == "CJJ"){
						commonSearch.resetAirDate(tripType);
						alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');
						return;
				}
				
				if($('#AIR_MD_arr0').val() == ""){
					commonSearch.resetAirDate(tripType);
					alert('첫번째 구간의 도착도시를 선택해 주세요');
					return;
				}
				if(!commonSearch.validAirDate($('#AIR_MD_depdate0').val())){
					commonSearch.resetAirDate(tripType);
					alert('첫번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				
				ItinCnt_MD = $("#airSearch3").find('div[class="item view"]').length;
				
				if(ItinCnt_MD == 2){
					if($('#AIR_MD_dep3').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발도시를 선택해 주세요');
						return;
					}
					if(!commonSearch.validAirDate($('#AIR_MD_depdate3').val())){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발날짜를 선택해 주세요.');
						return;
					}
					if(Number($('#AIR_MD_depdate0').val()) > Number($('#AIR_MD_depdate3').val())){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발일을 첫번째 구간의 출발일 이후로 선택해 주세요.');
						return;
					}
					
					$("#AIR_MD_dep1_text").val($("#AIR_MD_dep3_text").val());
					$("#AIR_MD_dep1").val($("#AIR_MD_dep3").val());
					$("#AIR_MD_arr1_text").val($("#AIR_MD_arr3_text").val());
					$("#AIR_MD_arr1").val($("#AIR_MD_arr3").val());
					$("#AIR_MD_depdate1").val($('#AIR_MD_depdate3').val());
					
					$("#AIR_MD_dep2").val("");
					$("#AIR_MD_dep2_text").val("");
					$("#AIR_MD_arr2").val("");
					$("#AIR_MD_arr2_text").val("");
					$("#AIR_MD_depdate2").val("");
					
					$("#AIR_MD_dep3").val("");
					$("#AIR_MD_dep3_text").val("");
					$("#AIR_MD_arr3").val("");
					$("#AIR_MD_arr3_text").val("");
					$("#AIR_MD_depdate3").val("");
					
				}else if(ItinCnt_MD == 3){
					
					if($('#AIR_MD_dep1').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발도시를 선택해 주세요');
						return;
					}
					if($('#AIR_MD_arr1').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 도착도시를 선택해 주세요');
						return;
					}
					if(!commonSearch.validAirDate($('#AIR_MD_depdate1').val())){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발날짜를 선택해 주세요.');
						return;
					}
					if(Number($('#AIR_MD_depdate0').val()) > Number($('#AIR_MD_depdate1').val())){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발일을 첫번째 구간의 출발일 이후로 선택해 주세요.');
						return;
					}
					
					if($('#AIR_MD_dep3').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('세번째 구간의 출발도시를 선택해 주세요');
						return;
					}
					if(!commonSearch.validAirDate($('#AIR_MD_depdate3').val())){
						commonSearch.resetAirDate(tripType);
						alert('세번째 구간의 출발날짜를 선택해 주세요.');
						return;
					}
					if(Number($('#AIR_MD_depdate1').val()) > Number($('#AIR_MD_depdate3').val())){
						commonSearch.resetAirDate(tripType);
						alert('세번째 구간의 출발일을 두번째 구간의 출발일 이후로 선택해 주세요.');
						return;
					}
					
					
					$("#AIR_MD_dep2_text").val($("#AIR_MD_dep3_text").val());
					$("#AIR_MD_dep2").val($("#AIR_MD_dep3").val());
					$("#AIR_MD_arr2_text").val($('#AIR_MD_arr3 option:selected').text());
					$("#AIR_MD_arr2").val($("#AIR_MD_arr3").val());
					$("#AIR_MD_depdate2").val($('#AIR_MD_depdate3').val());
					
					
					
					$("#AIR_MD_dep3").val("");
					$("#AIR_MD_dep3_text").val("");
					$("#AIR_MD_arr3").val("");
					$("#AIR_MD_arr3_text").val("");
					$("#AIR_MD_depdate3").val("");
					
					
				}else if(ItinCnt_MD == 4){
					
					if($('#AIR_MD_dep1').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발도시를 선택해 주세요');
						return;
					}
					if($('#AIR_MD_arr1').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 도착도시를 선택해 주세요');
						return;
					}
					if(!commonSearch.validAirDate($('#AIR_MD_depdate1').val())){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발날짜를 선택해 주세요.');
						return;
					}
					if(Number($('#AIR_MD_depdate0').val()) > Number($('#AIR_MD_depdate1').val())){
						commonSearch.resetAirDate(tripType);
						alert('두번째 구간의 출발일을 첫번째 구간의 출발일 이후로 선택해 주세요.');
						return;
					}
					
					if($('#AIR_MD_dep2').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('세번째 구간의 출발도시를 선택해 주세요');
						return;
					}
					if($('#AIR_MD_arr2').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('세번째 구간의 도착도시를 선택해 주세요');
						return;
					}
					if(!commonSearch.validAirDate($('#AIR_MD_depdate2').val())){
						commonSearch.resetAirDate(tripType);
						alert('세번째 구간의 출발날짜를 선택해 주세요.');
						return;
					}
					if(Number($('#AIR_MD_depdate1').val()) > Number($('#AIR_MD_depdate2').val())){
						commonSearch.resetAirDate(tripType);
						alert('세번째 구간의 출발일을 두번째 구간의 출발일 이후로 선택해 주세요.');
						return;
					}
					
					if($('#AIR_MD_dep3').val() == ""){
						commonSearch.resetAirDate(tripType);
						alert('네번째 구간의 출발도시를 선택해 주세요');
						return;
					}
					if(!commonSearch.validAirDate($('#AIR_MD_depdate3').val())){
						commonSearch.resetAirDate(tripType);
						alert('네번째 구간의 출발날짜를 선택해 주세요.');
						return;
					}
					if(Number($('#AIR_MD_depdate2').val()) > Number($('#AIR_MD_depdate3').val())){
						commonSearch.resetAirDate(tripType);
						alert('네번째 구간의 출발일을 두번째 구간의 출발일 이후로 선택해 주세요.');
						return;
					}
					
					$("#AIR_MD_arr3_text").val($('#AIR_MD_arr3 option:selected').text());
				}
				
				$('#AIR_MD_dep0_text').val($('#AIR_MD_dep0 option:selected').text());
				
				$('#AIR_MD_comp_nm').val($('#AIR_MD_comp option:selected').text());
				
				$('#air_int_MD').attr('action', airSearchUrl).submit();
			}
		}
	}
	

};

//------------------------------------ 항공 스크립트 End ------------------------------------//



//------------------------------------ 호텔 스크립트 Start ------------------------------------//intHtl domHtl
var htlSearch = {
	
	//해외, 국내호텔 선택
	searchHtlType : function(type){
		htlType = type; // webprovider
		
		//해외호텔
		if(type == "int"){
			$("#intHtlDiv").show();
			$("#domHtlDiv").hide();
			$("#INT_AIR_historyList").hide();
			$("#DOM_AIR_historyList").hide();
			$("#INT_HTL_historyList").show();
			$("#DOM_HTL_historyList").hide(); // webprovider
			$("#intHtl").attr("checked","checked").click();
			$("#totalSearch .check_terms .terms").buttonset("refresh");
		//국내호텔
		}else if(type == "dom") {
			$("#intHtlDiv").hide();
			$("#domHtlDiv").show();
			$("#INT_AIR_historyList").hide();
			$("#DOM_AIR_historyList").hide();
			$("#INT_HTL_historyList").hide();
			$("#DOM_HTL_historyList").show(); // webprovider
			$("#domHtl").attr("checked","checked").click();
			$("#totalSearch .check_terms .terms").buttonset("refresh");
		}
		
	},

	//도시검색 관련
	openCitySearch : function(str, obj, seq){
		if(typeof(str) == "undefined" || str == "여행도시") str = "";
		commonSearch.showSearchLayer("HOTEL", obj, seq);
	},
	
	//도시 검색 set
	setAirCity : function(ct_code, ct_name, nt_name){
		tripType = tabFlag;
	},
	// 국내 도시 검색 
	setCities : function (value) {
		$.getJSON("/search/dom/" + value, "", function (resultList) {
			var oldValue = $("#DOM_city_code").val();
			var cboTownSelect = $("#DOM_city_code").empty();
			var option = new Option("시군별 전체", "");
			if ($.browser.msie) {
				cboTownSelect[0].add(option);
			}else{
				cboTownSelect[0].add(option,null);
			}
			$.each(resultList, function (key, value) {
				var option = new Option(value.townNm, value.townCd);
				if ($.browser.msie) {
					cboTownSelect[0].add(option);
				}else{
					cboTownSelect[0].add(option,null);
				}
			});
			
			if (oldValue == "") {
				cboTownSelect.find("option:first").prop("selected", true);
			} else {
				cboTownSelect.find("option[value='" + oldValue + "']").prop("selected", true);
			}
			fakeselect.initialize();
		});
		
		
	},
	//선택도시 set
	setHtlCity : function(ct_code, ct_name, nt_name){
		if (tabFlag == "HTL") {
			$("#city_code").val(ct_code);
			$("#city_name").val(ct_name);
			$("#nation_name").val(nt_name);
		} else {
			$("#AIRHTL_city_code").val(ct_code);
			$("#AIRHTL_city_name").val(ct_name);
			$("#AIRHTL_nation_name").val(nt_name);
		}
		dimmLayerPop("layerSearchCity", 0);
	},
	
	//체크아웃 날짜설정
	setCheckOutDateArr : function(days) {
		var checkin_date = $("#checkin_date").val();
		var checkout_date = $("#checkout_date").val();
		
		if (checkin_date == "체크인") {
			alert("체크인 일자를 선택해주세요.");
			return;
		}
		var checkin_dates = checkin_date.split("/");
		var checkout_dates = checkout_date.split("/");
	    var inDate = new Date(checkin_dates[0], parseInt(checkin_dates[1])-1, checkin_dates[2]);
	    var outDate = new Date(checkout_dates[0], parseInt(checkout_dates[1])-1, checkout_dates[2]);
	    var intDateDiff = parseInt((outDate - inDate) / (1000*60*60*24));
	    
		if (intDateDiff > 15) {
			alert("15박 이하로 선택해 주세요.");
			var newDate = new Date(checkin_dates[0], parseInt(checkin_dates[1]) - 1, parseInt(checkin_dates[2]) + 15);
			
			var year = newDate.getFullYear();
		    var month = newDate.getMonth() +1;
		    var day = newDate.getDate();
		    
		    if(month < 10) month = "0" + month;
		    if(day < 10) day = "0" + day;
			$("#checkout_date").val(year + "/" + month + "/" + day);
			$("#stayDay>option").eq(14).prop("selected", true);
		}else{
			$("#stayDay>option").eq(days - 1).prop("selected", true);
		}
		$("#stayDay")[0].reset();
	},
	// 체크인/박수 설정
	setCheckOutDate : function() {
		var checkin_date = $("#checkin_date").val();
		var stayDay = $("#stayDay").val();
		if (checkin_date == "체크인") {
			alert("체크인 일자를 선택해주세요.");
			return;
		}
		checkin_date = checkin_date.split("/");
	    var date = new Date(checkin_date[0], checkin_date[1]-1, checkin_date[2]);
	    date.setDate(date.getDate() + parseInt(stayDay));
	    var year = date.getFullYear();
	    var month = date.getMonth() +1;
	    var day = date.getDate();
	    if(month < 10) month = "0" + month;
	    if(day < 10) day = "0" + day;
	    $("#checkout_date").val(year + "/" + month + "/" + day);
	},
	//체크아웃 날짜설정
	setAirtelCheckOutDateArr : function(days) {
		var checkin_date = $("#AIRHTL_checkin_date").val();
		var checkout_date = $("#AIRHTL_checkout_date").val();
		
		if (checkin_date == "체크인") {
			alert("체크인 일자를 선택해주세요.");
			return;
		}
		var checkin_dates = checkin_date.split("/");
		var checkout_dates = checkout_date.split("/");
	    var inDate = new Date(checkin_dates[0], parseInt(checkin_dates[1])-1, checkin_dates[2]);
	    var outDate = new Date(checkout_dates[0], parseInt(checkout_dates[1])-1, checkout_dates[2]);
	    var intDateDiff = parseInt((outDate - inDate) / (1000*60*60*24));
	    
	    if (intDateDiff > 15) {
			alert("15박 이하로 선택해 주세요.");
			var newDate = new Date(checkin_dates[0], parseInt(checkin_dates[1]) - 1, parseInt(checkin_dates[2]) + 15);
			
			var year = newDate.getFullYear();
		    var month = newDate.getMonth() +1;
		    var day = newDate.getDate();
		    
		    if(month < 10) month = "0" + month;
		    if(day < 10) day = "0" + day;
			$("#AIRHTL_checkout_date").val(year + "/" + month + "/" + day);
			$("#AIRHTL_stayDay>option").eq(14).prop("selected", true);
			$("#AIRHTL_stayDay")[0].reset();
		}else{
			$("#AIRHTL_stayDay>option").eq(days - 1).prop("selected", true);
		}
	    $("#AIRHTL_stayDay")[0].reset();
	},
	setAirtelCheckOutDate : function() {
		var checkin_date = $("#AIRHTL_checkin_date").val();
		var stayDay = $("#AIRHTL_stayDay").val();
		if (checkin_date == "체크인") {
			alert("체크인 일자를 선택해주세요.");
			return;
		}
		checkin_date = checkin_date.split("/");

	    var date = new Date(checkin_date[0], checkin_date[1]-1, checkin_date[2]);

	    date.setDate(date.getDate() + parseInt(stayDay));
	    
	    var year = date.getFullYear();
	    var month = date.getMonth() +1;
	    var day = date.getDate();
	    
	    if(month < 10) month = "0" + month;
	    if(day < 10) day = "0" + day;
	    
	    $("#AIRHTL_checkout_date").val(year + "/" + month + "/" + day);
	},
	//체크아웃 날짜설정 (국내숙박) (webprovider)
	setDomCheckOutDate : function() {
		var checkin_date = $("#DOM_checkin_date").val();
		//alert(checkin_date);
		var stayDay = $("#DOM_stayDay").val();
		
		if (checkin_date == "체크인") {
			alert("체크인 일자를 선택해주세요.");
			return;
		}
		checkin_date = checkin_date.split("/");

	    var date = new Date(checkin_date[0], parseInt(checkin_date[1])-1, checkin_date[2]);

	    date.setDate(date.getDate() + parseInt(stayDay));
	    
	    var year = date.getFullYear();
	    var month = date.getMonth() +1;
	    var day = date.getDate();
	    
	    if(month < 10) month = "0" + month;
	    if(day < 10) day = "0" + day;
	    
	    $("#DOM_checkout_date").val(year + "/" + month + "/" + day);
	},
	setDomCheckOutDateArr : function(days) {
		var checkin_date = $("#DOM_checkin_date").val();
		var checkout_date = $("#DOM_checkout_date").val();
		
		if (checkin_date == "체크인") {
			alert("체크인 일자를 선택해주세요.");
			return;
		}
		var checkin_dates = checkin_date.split("/");
		var checkout_dates = checkout_date.split("/");
	    var inDate = new Date(checkin_dates[0], checkin_dates[1] - 1, checkin_dates[2]);
	    var outDate = new Date(checkout_dates[0], checkout_dates[1] - 1, checkout_dates[2]);
	    var intDateDiff = parseInt((outDate - inDate) / (1000*60*60*24));
	    
		if (intDateDiff > 6) {
			alert("6박 이하로 선택해 주세요.");
			var newDate = new Date(checkin_dates[0], parseInt(checkin_dates[1]) - 1, parseInt(checkin_dates[2]) + 6);
			
			var year = newDate.getFullYear();
		    var month = newDate.getMonth() + 1;
		    var day = newDate.getDate();
		    	
		    if(month < 10) month = "0" + month;
		    if(day < 10) day = "0" + day;
		    
			$("#DOM_checkout_date").val(year + "/" + month + "/" + day);
			$("#DOM_stayDay>option").eq(5).prop("selected", true);
		}else{
			$("#DOM_stayDay>option").eq(days - 1).prop("selected", true);
		}
		$("#DOM_stayDay")[0].reset();
	},
	//체크아웃 날짜설정 (국내숙박) (webprovider)
	setPromoCheckOutDate : function() {
		var checkin_date = $("#promo_checkin_date").val();
		var stayDay = $("#promo_stay_day").val();
		
		checkin_date = checkin_date.split("/");

	    var date = new Date(checkin_date[0], checkin_date[1]-1, checkin_date[2]);

	    date.setDate(date.getDate() + parseInt(stayDay));
	    
	    var year = date.getFullYear();
	    var month = date.getMonth() +1;
	    var day = date.getDate();
	    
	    if(month < 10) month = "0" + month;
	    if(day < 10) day = "0" + day;
	    
	    $("#promo_checkout_date").val(year + "/" + month + "/" + day);
	},
	closeCityLayer : function(){

	},
	
	//객실수 변경시 성인,아동 콤보박스 갯수 조절
	showComboBox : function(val) {
		var i = 0;
		
		for(i=2; i<=val; i++) {
			$("#item_room_int_"+i).show();
		}
		
		for(i=3; i>val; i--) {
			$("#item_room_int_"+i).hide();
		}
	},
	//검색하기
	htlSearch : function() {
		if (htlType == "int") {
			var strReturn = setRoomType();
			var week = "";
			if(strReturn && checkValid()) {
				if($("#htl_search #htl_name").val() == "한글 및 영문 호텔이름을 입력해주세요") {
					$("#htl_search #htl_name").val("");
				}
				
				week = getWeek($("#htl_search #checkin_date").val());

				$("#htl_search #week").val(week);
				$("#htl_search #hsf_bed_type").val(strReturn);
				$("#htl_search").attr("action", hotelSearchUrl);
				$("#htl_search").submit();
			}
		} else if (htlType == "dom") {
			var strReturn = setDomRoomType();
			var week = "";
			
			var cnt = $("#DOM_room_cnt1_1").val();
			if(strReturn && checkValid()) {
		    	if($("#dom_htl_search #hotelName2").val() == "한글 및 영문 호텔이름을 입력해주세요") {
					$("#dom_htl_search #hotelName2").val("");
				}

				week = getWeek($("#DOM_checkin_date").val());
				
				$("#dom_htl_search #ccc_sub_area_lcl").val($("#dom_htl_search #ccc_sub_area_code option:selected").text());
				$("#dom_htl_search #city_name").val($("#dom_htl_search #DOM_city_code option:selected").text());
				$("#dom_htl_search #week").val(week);
				$("#dom_htl_search #hsf_bed_type").val(strReturn);
				$("#dom_htl_search").attr("action", hotelDomSearchUrl);
				$("#dom_htl_search").submit();
			}
		}
		else if (htlType == "promo") {			
			var strReturn = setPromoRoomType();
			var week = "";
		    
			if(strReturn && checkValid()) {
				//week = getWeek($("#search #checkin").val());			
				//$("#search #hsf_bed_type").val(strReturn);
				
				week =  getWeek($("#search #checkin_"+promoSeq).val());								
				$("#search #week").val(week);
				$("#search input[name=hsf_bed_type]").val(strReturn);		
						
				//$("#search").attr("action", "/htl/bk/HtlSearchPromo.lts");
				//$("#search").submit();
			}
		}
	}, 
	//최근검색기록 클릭시 해당정보로 재검색
	//검색하지 않고 form에 값만 세팅하는걸로 변경됨
	history_submit : function(city_code,city_name,nation_name,checkin_date,checkout_date,week,hsf_bed_type,stayDay,stay_adult,room_cnt,location,stayAdult1_1,stayAdult1_2,stayAdult1_3, htl_name){
		/*
		$("#htlHistoryForm [name=city_code]").val(city_code);
		$("#htlHistoryForm [name=city_name]").val(city_name);
		$("#htlHistoryForm [name=nation_name]").val(nation_name);
		$("#htlHistoryForm [name=checkin_date]").val(checkin_date);
		$("#htlHistoryForm [name=checkout_date]").val(checkout_date);
		$("#htlHistoryForm [name=week]").val(week);
		$("#htlHistoryForm [name=hsf_bed_type]").val(hsf_bed_type);
		$("#htlHistoryForm [name=stayDay]").val(stayDay);
		$("#htlHistoryForm [name=stay_adult]").val(stay_adult);
		$("#htlHistoryForm [name=room_cnt]").val(room_cnt);
		$("#htlHistoryForm [name=location]").val(location);
		$("#htlHistoryForm [name=stayAdult1_1]").val(stayAdult1_1);
		$("#htlHistoryForm [name=stayAdult1_2]").val(stayAdult1_2);
		$("#htlHistoryForm [name=stayAdult1_3]").val(stayAdult1_3);

		$("#htlHistoryForm").submit();
		*/
		
		addRoom('roomSelectArea1','stayAdult1_',room_cnt,'');
		
		//체크아웃이 가능한 최소일, 최대일 변경
		$("#checkout_date").datepicker( "option", "minDate", calculateDate(checkin_date, "/", htlMinStayDay) );
		$("#checkout_date").datepicker( "option", "maxDate", calculateDate(checkin_date, "/", htlMaxStayDay) );
		
		$("#htl_search [name=city_name]").val(city_name);
		$("#htl_search [name=nation_name]").val(nation_name);
		$("#htl_search [name=checkin_date]").val(checkin_date);
		$("#htl_search [name=checkout_date]").val(checkout_date);
		$("#htl_search [name=week]").val(week);
		$("#htl_search [name=hsf_bed_type]").val(hsf_bed_type);
		$("#htl_search [name=stayDay]").val(stayDay);
		$("#htl_search [name=stay_adult]").val(stay_adult);
		$("#htl_search [name=room_cnt]").val(room_cnt);
		$("#htl_search [name=location]").val(location);
		$("#htl_search [name=stayAdult1_1]").val(stayAdult1_1);
		$("#htl_search [name=stayAdult1_2]").val(stayAdult1_2);
		$("#htl_search [name=stayAdult1_3]").val(stayAdult1_3);
		$("#htl_search [name=htl_name]").val(htl_name);
		$("#htl_search [name=city_code]").val(city_code);
		
		fakeselect.initialize();
		/*
		$("#room_cnt1_1").find("option").each(function(index){
			if(this.value == room_cnt) {
	    		$('#room_cnt1_1 option:eq(' + index + ')').prop({selected:true});
	    		document.getElementById('room_cnt1_1').reset();
			}
		});
		*/
		document.getElementById('room_cnt1_1').reset();
		
		for(var i=2; i<=room_cnt; i++) {
			document.getElementById('stayAdult1_'+i).reset();
		}
		
	},
	
	//최근검색기록 클릭시 해당정보로 재검색  (국내숙박)
	//검색하지 않고 form에 값만 세팅하는걸로 변경됨
	dom_history_submit : function(ccc_sub_area_code,ccc_sub_area_lcl,city_code,city_name,checkin_date,checkout_date,week,hsf_bed_type,stayDay,stay_adult,room_cnt,location,stayAdult1_1,stayAdult1_2,stayAdult1_3, htl_name){
		/*
		$("#domHtlHistoryForm [name=ccc_sub_area_code]").val(ccc_sub_area_code);
		$("#domHtlHistoryForm [name=ccc_sub_area_lcl]").val(ccc_sub_area_lcl);
		$("#domHtlHistoryForm [name=city_code]").val(city_code);
		$("#domHtlHistoryForm [name=city_name]").val(city_name);
		
		$("#domHtlHistoryForm [name=checkin_date]").val(checkin_date);
		$("#domHtlHistoryForm [name=checkout_date]").val(checkout_date);
		$("#domHtlHistoryForm [name=week]").val(week);
		$("#domHtlHistoryForm [name=hsf_bed_type]").val(hsf_bed_type);
		$("#domHtlHistoryForm [name=stayDay]").val(stayDay);
		$("#domHtlHistoryForm [name=stay_adult]").val(stay_adult);
		$("#domHtlHistoryForm [name=room_cnt]").val(room_cnt);
		$("#domHtlHistoryForm [name=location]").val(location);
		$("#domHtlHistoryForm [name=stayAdult1_1]").val(stayAdult1_1);
		$("#domHtlHistoryForm [name=stayAdult1_2]").val(stayAdult1_2);
		$("#domHtlHistoryForm [name=stayAdult1_3]").val(stayAdult1_3);
		
		$("#domHtlHistoryForm").submit();
		*/

		htlSearch.setCities(ccc_sub_area_code);
		
		addRoom('DOM_roomSelectArea1','stayAdult1_',room_cnt,'DOM_');
		
		//체크아웃이 가능한 최소일, 최대일 변경
		$("#DOM_checkout_date").datepicker( "option", "minDate", calculateDate(checkin_date, "/", htlMinStayDay) );
		$("#DOM_checkout_date").datepicker( "option", "maxDate", calculateDate(checkin_date, "/", htlMaxDomStayDay) );
		
		$("#dom_htl_search [name=ccc_sub_area_code]").val(ccc_sub_area_code);
		$("#dom_htl_search [name=ccc_sub_area_lcl]").val(ccc_sub_area_lcl);
		
		$("#dom_htl_search [name=city_name]").val(city_name);
		$("#dom_htl_search [name=checkin_date]").val(checkin_date);
		$("#dom_htl_search [name=checkout_date]").val(checkout_date);
		$("#dom_htl_search [name=week]").val(week);
		$("#dom_htl_search [name=hsf_bed_type]").val(hsf_bed_type);
		$("#dom_htl_search [name=stayDay]").val(stayDay);
		$("#dom_htl_search [name=stay_adult]").val(stay_adult);
		$("#dom_htl_search [name=room_cnt]").val(room_cnt);
		$("#dom_htl_search [name=location]").val(location);
		$("#dom_htl_search [name=stayAdult1_1]").val(stayAdult1_1);
		$("#dom_htl_search [name=stayAdult1_2]").val(stayAdult1_2);
		$("#dom_htl_search [name=stayAdult1_3]").val(stayAdult1_3);
		$("#dom_htl_search [name=htl_name]").val(htl_name);
		$("#dom_htl_search [name=city_code]").val(city_code);
		$("#DOM_city_code option[value='" + city_code + "']").prop("selected", true);
		
		fakeselect.initialize();
		
		/*
		$("#DOM_room_cnt1_1").find("option").each(function(index){
			if(this.value == room_cnt) {
	    		$('#DOM_room_cnt1_1 option:eq(' + index + ')').prop({selected:true});
	    		document.getElementById('DOM_room_cnt1_1').reset();
			}
		});
		*/
		document.getElementById('DOM_room_cnt1_1').reset();
		
		for(var i=2; i<=room_cnt; i++) {
			document.getElementById('DOM_stayAdult1_'+i).reset();
		}
	}
};

function checkValid() {	
	if (htlType == "int") {
		var city_code = $("#htl_search #city_code").val();
		var city_name = $("#htl_search #city_name").val();
		var checkin_date = $("#htl_search #checkin_date").val();
		var checkout_date = $("#htl_search #checkout_date").val();
		
		if(city_code == "" || city_name == "여행도시") {
			alert("여행도시를 선택해주세요.");
			return false;
		} else if (checkin_date == "체크인") {
			alert("체크인 날짜를 선택해주세요.");
			return false;
		}
	} else if (htlType == "dom") {
		var checkin_date = $("#dom_htl_search #DOM_checkin_date").val();
		var checkout_date = $("#dom_htl_search #DOM_checkout_date").val();
		
		if (checkin_date == "체크인") {
			alert("체크인 날짜를 선택해주세요.");
			return false;
		} else if (checkout_date == "체크아웃") {
			alert("체크아웃 날짜를 선택해주세요.");
			return false;
		}
	}
		
	return true;
}

function checkAirtelValid() {	
	var city_code = $("#AIRHTL_city_code").val();
	var city_name = $("#AIRHTL_city_name").val();
	var checkin_date = $("#AIRHTL_checkin_date").val();
	var checkout_date = $("#AIRHTL_checkout_date").val();
	
	if(city_code == "" || city_name == "여행도시") {
		alert("여행도시를 선택해주세요.");
		return false;
	} else if (checkin_date == "체크인") {
		alert("체크인 날짜를 선택해주세요.");
		return false;
	}
		
	return true;
}

//요일 구하기
function getWeek(strDate) {
	strDate = strDate.split("/");
	var week = new Array('일', '월', '화', '수', '목', '금', '토');
    var date = new Date(strDate[0], strDate[1]-1, strDate[2]);
    date.setDate(date.getDate());
    
    return week[date.getDay()];
}

function setRoomType() {
	var cnt = $("#room_cnt1_1").val();
	var adult = new Array();
	var roomInfo = new Array();
	var adult_cnt = 0;
	
	for(var i=0; i<cnt; i++) {
		adult[i] = $("#stayAdult1_"+(i+1)).val();
		
		adult_cnt += Number(adult[i]);
		
		if(adult[i] == "1") {
			roomInfo.push({type:"SG",cnt:1});
		} else if(adult[i] == "2") {
			roomInfo.push({type:"DB",cnt:1});
		} else if(adult[i] == "3") {
			roomInfo.push({type:"TR",cnt:1});
		}
	}
	
	$("#htl_search #stay_adult").val(adult_cnt);
	
	var rtnObj = {"SG":0, "DB":0, "TR":0};
	for(var i=0; i<roomInfo.length; i++) {
		for(var name in rtnObj) {
			if(roomInfo[i].type == name) {
				rtnObj[name]++;
				break;
			}
		}
	}
	
	var strReturn = "";
	if(rtnObj["SG"] != 0) strReturn += "SG:" + rtnObj["SG"] + ";";
	if(rtnObj["DB"] != 0) strReturn += "DB:" + rtnObj["DB"] + ";";
	if(rtnObj["TR"] != 0) strReturn += "TR:" + rtnObj["TR"] + ";";
	
	return strReturn;
	
}

function setAirtelRoomType() {
	var cnt = $("#AIRHTL_room_cnt").val();
	var adult = new Array();
	var roomInfo = new Array();
	var adult_cnt = 0;
	
	for(var i=0; i<cnt; i++) {
		adult[i] = $("#AIRHTL_stayAdult1_"+(i+1)).val();
		
		adult_cnt += Number(adult[i]);
		
		if(adult[i] == "1") {
			roomInfo.push({type:"SG",cnt:1});
		} else if(adult[i] == "2") {
			roomInfo.push({type:"DB",cnt:1});
		} else if(adult[i] == "3") {
			roomInfo.push({type:"TR",cnt:1});
		}
	}
	
	$("#AIRHTL_int_MD #AIRHTL_stay_adult").val(adult_cnt);
	
	var rtnObj = {"SG":0, "DB":0, "TR":0};
	for(var i=0; i<roomInfo.length; i++) {
		for(var name in rtnObj) {
			if(roomInfo[i].type == name) {
				rtnObj[name]++;
				break;
			}
		}
	}
	
	var strReturn = "";
	if(rtnObj["SG"] != 0) strReturn += "SG:" + rtnObj["SG"] + ";";
	if(rtnObj["DB"] != 0) strReturn += "DB:" + rtnObj["DB"] + ";";
	if(rtnObj["TR"] != 0) strReturn += "TR:" + rtnObj["TR"] + ";";
	
	return strReturn;
	
}

// webprovider
function setDomRoomType() {
	/* 아동이 빠지고 성인만 보여주게 되어서 성인수에 따라서 싱글(성인1명), 더블(2명), 트리플(3명)이 결정됨.
	var cnt = $("#DOM_room_cnt1_1").val();
	var adult = new Array();
	var adult_cnt = 0;
	
	for(var i=0; i<cnt; i++) {
		adult[i] = $("#DOM_stayAdult1_" + (i + 1)).val();
		
		adult_cnt += Number(adult[i]);
	}
	
	$("#DOM_htl_search #stay_adult").val(adult_cnt);
	
	var strReturn = ":" + cnt + ";";
	
	return strReturn;
	*/
	
	var cnt = $("#DOM_room_cnt1_1").val();
	var adult = new Array();
	var roomInfo = new Array();
	var adult_cnt = 0;
	
	for(var i=0; i<cnt; i++) {
		adult[i] = $("#DOM_stayAdult1_"+(i+1)).val();
		
		adult_cnt += Number(adult[i]);
		
		if(adult[i] == "1") {
			roomInfo.push({type:"SG",cnt:1});
		} else if(adult[i] == "2") {
			roomInfo.push({type:"DB",cnt:1});
		} else if(adult[i] == "3") {
			roomInfo.push({type:"TR",cnt:1});
		}
	}
	
	$("#DOM_htl_search #stay_adult").val(adult_cnt);
	var rtnObj = {"SG":0, "DB":0, "TR":0};
	for(var i=0; i<roomInfo.length; i++) {
		for(var name in rtnObj) {
			if(roomInfo[i].type == name) {
				rtnObj[name]++;
				break;
			}
		}
	}
	
	var strReturn = "";
	if(rtnObj["SG"] != 0) strReturn += "SG:" + rtnObj["SG"] + ";";
	if(rtnObj["DB"] != 0) strReturn += "DB:" + rtnObj["DB"] + ";";
	if(rtnObj["TR"] != 0) strReturn += "TR:" + rtnObj["TR"] + ";";
	
	return strReturn;
}

function setPromoRoomType() {
	var cnt = $("#numroom_"+promoSeq).val();
	var adult = new Array();
	var roomInfo = new Array();
	var adult_cnt = 0;
	
	for(var i=0; i<cnt; i++) {
		adult[i] = $("#adult_"+promoSeq+"_"+(i+1)).val();
		
		adult_cnt += Number(adult[i]);
		
		if(adult[i] == "1") {
			roomInfo.push({type:"SG",cnt:1});
		} else if(adult[i] == "2") {
			roomInfo.push({type:"DB",cnt:1});
		} else if(adult[i] == "3") {
			roomInfo.push({type:"TR",cnt:1});
		}
	}
	
	$("#search #stay_adult").val(adult_cnt);
	
	//예약을 위해 세팅 
	$("#htlBooking input[name=stay_adult]").val(adult_cnt);
	
	var rtnObj = {"SG":0, "DB":0, "TR":0};
	for(var i=0; i<roomInfo.length; i++) {
		for(var name in rtnObj) {
			if(roomInfo[i].type == name) {
				rtnObj[name]++;
				break;
			}
		}
	}
	
	var strReturn = "";
	if(rtnObj["SG"] != 0) strReturn += "SG:" + rtnObj["SG"] + ";";
	if(rtnObj["DB"] != 0) strReturn += "DB:" + rtnObj["DB"] + ";";
	if(rtnObj["TR"] != 0) strReturn += "TR:" + rtnObj["TR"] + ";";
	
	//예약을 위해 세팅 
	$("#htlBooking input[name=hsf_bed_type]").val(strReturn);
	$("#htlBooking input[name=hsf_room_cnt]").val(cnt);
	
	return strReturn;
	
}
//------------------------------------ 호텔 스크립트 End ------------------------------------//

//--------------------------------- 에어텔 스크립트 Start -----------------------------------//
var airHtlSearch = {
	copyComboChange : function(val, tId){
		$('#' + tId + ' option[value=' + val + ']').prop({selected: true});
		document.getElementById(tId).reset();
	},
	setTripType : function(tType){
		var typeClass = "search_area search_area_airtel search_airtel_";
		airHtlTripType = tType;
		if(tType == "RT"){
			$("#airHtl1").show();
			$("#airHtl2").hide();
			$("#airHtl3").hide();
		}else if(tType == "OW"){
			$("#airHtl1").hide();
			$("#airHtl2").show();
			$("#airHtl3").hide();
		}else{
			$("#airHtl1").hide();
			$("#airHtl2").hide();
			$("#airHtl3").show();
		}
		$('#airHtl_' + tType).attr('checked', 'checked').click();		
		$("#totalSearch .check_terms .terms").buttonset("refresh");
		$("#AIRHTL_SEARCH").attr("class", typeClass + tType.toLowerCase());
	},
	
	//다구간 여정 추가	
	addVia : function(){
		var maxLength = 3;
		airHtlItinCnt_MD = $("#airHtl3").find('div[class="item view"]').length;
		if(airHtlItinCnt_MD == maxLength){
//			/alert("여정은 총 " + maxLength + "개 까지만 추가가 가능합니다.");
			alert("여정은 총 " + maxLength + "개 까지 가능합니다. \n" + maxLength + "개 이상의 여정이 있으시다면 1:1문의로 요청해 주시기 바랍니다.");
			return;
		}else{
			
			$("#airHtl3").find('div[class="item view"]').next().attr('class');			
			$("#airHtl3").find("div.item").eq(airHtlItinCnt_MD - 1).addClass("view");
			$("#airHtl3").find("div.item").eq(airHtlItinCnt_MD - 1).removeClass("none");
			$("#airHtl3").find("div.item").eq(airHtlItinCnt_MD - 1).show();
		}
	},
	
	//다구간 여정 삭제
	removeVia : function(){
		airHtlItinCnt_MD = $("#airHtl3").find('div[class="item view"]').length;
		
		if(airHtlItinCnt_MD == 2){
			alert("출발 및 귀국 여정은 삭제하실 수 없습니다.");
			return;
		}else{
			$("#airHtl3").find("div.item").eq(airHtlItinCnt_MD - 2).removeClass("view");
			$("#airHtl3").find("div.item").eq(airHtlItinCnt_MD - 2).addClass("none");
			$("#airHtl3").find("div.item").eq(airHtlItinCnt_MD - 2).hide();
		}
	},
	setOpenItin : function() {
		if ($("#AIRHTL_returnUnfix").is(":checked")) {
			document.AIRHTL_int_RT.retdate.value = "OPEN";
			$("#AIRHTL_RT_retdate").prop("disabled", true);
			$('#AIRHTL_valCode').css('visibility', 'visible');
			$("#airHtl1").find(".set_num_return").height("auto");
		}else{
			$("#AIRHTL_RT_retdate").val("귀국날짜");
			$("#AIRHTL_RT_retdate").prop("disabled", false);
			$('#AIRHTL_valCode').css('visibility', 'hidden');
			$("#airHtl1").find(".set_num_return").height(19);
		}
	},
	//도시검색 관련
	openCitySearch : function(str, obj, seq){
		commonSearch.showSearchLayer("AIRTEL.AIR", obj, seq);
	},
	
	//도시 검색 set
	setAirCity : function(code, desc, ntDesc, hotelCd){
		//var loc = airHtlCityLoc.lastIndexOf("_");
		//var codeValueId = airHtlCityLoc.substring(0, loc);
		
		// ----------------------------------
		var intRowSeq = abacusSearchSeq ? abacusSearchSeq : 1;
		
		if (abacusSearchObj.id.indexOf("dep") > 0) {	// 출발도시 선택일경우
			$("#AIRHTL_" + airHtlTripType + "_dep"+ (intRowSeq - 1) + "").val(code);
			$("#AIRHTL_" + airHtlTripType + "_dep"+ (intRowSeq - 1) + "_text").val(desc);
			if (airHtlTripType == "MD") {
				if(intRowSeq == 2){
					//다구간의 경우 두번째 출발도시 선택 시 첫번째 도착도시 변경안되도록 변경.
//					$("#AIRHTL_" + airHtlTripType + "_arr" + (intRowSeq -2)).val(code);
//					$("#AIRHTL_" + airHtlTripType + "_arr"+ (intRowSeq -2) + "_text").val(desc);
				}else if(intRowSeq == 3){
					$("#AIRHTL_" + airHtlTripType + "_arr" + (intRowSeq -2)).val(code);
					$("#AIRHTL_" + airHtlTripType + "_arr"+ (intRowSeq -2) + "_text").val(desc);
				}else{
					if($("#dep3").is(":visible") == false){
						//다구간의 경우 두번째 출발도시 선택 시 첫번째 도착도시 변경안되도록 변경.
//						$("#AIRHTL_" + airHtlTripType + "_arr" + (intRowSeq -3)).val(code);
//						$("#AIRHTL_" + airHtlTripType + "_arr"+ (intRowSeq -3) + "_text").val(desc);
					}else{
						$("#AIRHTL_" + airHtlTripType + "_arr" + (intRowSeq -2)).val(code);
						$("#AIRHTL_" + airHtlTripType + "_arr"+ (intRowSeq -2) + "_text").val(desc);
					}
				}
			} else{
				$("#AIRHTL_" + airHtlTripType + "_arr" + (intRowSeq-2)).val(code);
				$("#AIRHTL_" + airHtlTripType + "_arr"+ (intRowSeq-2) + "_text").val(desc);
			}
		} else {	// 도착도시 선택일경우

			$("#AIRHTL_" + airHtlTripType + "_arr" + (intRowSeq - 1)).val(code);
			$("#AIRHTL_" + airHtlTripType + "_arr"+ (intRowSeq - 1) + "_text").val(desc);
			if (airHtlTripType == "MD") {
				
				if ($("#AIRHTL_" + airHtlTripType + "_dep" + intRowSeq + "_text").parent("div").attr("class") == "item view") {
					$("#AIRHTL_" + airHtlTripType + "_dep"+ (intRowSeq) + "").val(code);
					$("#AIRHTL_" + airHtlTripType + "_dep"+ (intRowSeq) + "_text").val(desc);
				} else {
					$("#AIRHTL_" + airHtlTripType + "_dep3").val(code);
					$("#AIRHTL_" + airHtlTripType + "_dep3_text").val(desc);
				}
			} else {
				$("#AIRHTL_" + airHtlTripType + "_dep"+ (intRowSeq) + "").val(code);
				$("#AIRHTL_" + airHtlTripType + "_dep"+ (intRowSeq) + "_text").val(desc);
			}
			
		}

		// ----------------------------------
		
		/*
		if(airHtlTripType == "RT"){
			if(airHtlCityLoc = "AIRHTL_RT_arr0"){
				$("#AIRHTL_RT_arr0").val(code);
				$("#AIRHTL_RT_arr0_text").val(desc);
				$("#AIRHTL_RT_dep1").val(code);
				$("#AIRHTL_RT_dep1_text").val(desc);
			}else{
				$("#" + codeValueId).val(code);
				$("#" + airHtlCityLoc).val(desc);
			}
		} else {
			$("#AIRHTL_" + airHtlTripType + "_arr" + abacusSearchSeq).val(code);
			$("#AIRHTL_" + airHtlTripType + "_arr" + abacusSearchSeq + "_text").val(desc);
			$("#AIRHTL_" + airHtlTripType + "_dep" + (abacusSearchSeq -1)).val(code);
			$("#AIRHTL_" + airHtlTripType + "_dep" + (abacusSearchSeq -1) + "_text").val(desc);
		} 
		*/

		$("#AIRHTL_city_code").val(hotelCd);
		$("#AIRHTL_city_name").val(desc);
		$("#AIRHTL_nation_name").val(ntDesc);
		dimmLayerPop("layerSearchCity", 0);
	},
	
	setHtlCity : function(ct_code, ct_name, nt_name){
		$("#AIRHTL_city_code").val(ct_code);
		$("#AIRHTL_city_name").val(ct_name);
		$("#AIRHTL_nation_name").val(nt_name);
		
		dimmLayerPop("layerSearchCity", 0);
	},
	
	closeCityLayer : function(){
		$("#airHtlLayerBg").css("display", "none");
		$("#" + airHtlTripType + '_airHtlCitySearchLayer').css("display", "none");
	},
	
	
	// 에어텔 최근검색 셋팅
	setAirtelHistory : function(val){
		var strCookie = val.split("&");
		var tripType = "RT";
		//var dayInd = "N";
		var dep1Exist = false;
		var dep2Exist = false;
		var room_cnt = 1;
    	for(var j = 0; j < strCookie.length; j++){
    		var param = strCookie[j].split("=");
    		
    		if( param[0] == "trip"){
    			tripType = param[1];
    			airHtlSearch.setTripType(param[1]);
    		}
    		
    		/* --------------- seg 1s ------------------------*/
    		if(param[0] == "dep0"){
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_' + tripType + '_dep0');
    		}
    		if(param[0] == "dep0_text"){
    			$('#AIRHTL_' + tripType + '_dep0_text').val(param[1]);
    		}
    		if(param[0] == "arr0"){
    			$('#AIRHTL_' + tripType + '_arr0').val(param[1]);
    		}
    		if(param[0] == "arr0_text"){
    			$('#AIRHTL_' + tripType + '_arr0_text').val(param[1]);
    		}
    		if(param[0] == "depdate0"){
    			$('#AIRHTL_' + tripType + '_depdate0').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
    		}
    		/* --------------- seg 1e ------------------------*/
    		
    		/* --------------- seg 2s ------------------------*/
			if(param[0] == "dep1"){
				$("#airHtl3").find("div.item").eq(1).addClass("view");
    			$("#airHtl3").find("div.item").eq(1).removeClass("none");
    			$("#airHtl3").find("div.item").eq(1).show();
    			dep1Exist = true;
    			
    			$('#AIRHTL_' + tripType + '_dep1').val(param[1]);
    		}
			if(param[0] == "dep1_text"){
    			$('#AIRHTL_' + tripType + '_dep1_text').val(param[1]);
    		}
			if(param[0] == "arr1"){
				if(tripType = 'RT'){
					airHtlSearch.copyComboChange(param[1], 'AIRHTL_' + tripType + '_arr1');
				}else{
					$('#AIRHTL_' + tripType + '_arr1').val(param[1]);
				}
    		}
    		if(param[0] == "arr1_text"){
    			$('#AIRHTL_' + tripType + '_arr1_text').val(param[1]);
    		}
    		if(param[0] == "depdate1"){
    			$('#AIRHTL_' + tripType + '_depdate1').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate0').val(), "/", 1) );
    			$('#AIRHTL_' + tripType + '_depdate1').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
    		}
    		/* --------------- seg 2e ------------------------*/
    		
    		if(param[0] == "returnUnfix"){
    			if (param[1] == "Y") {
    				$('#AIRHTL_RT_retdate').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate0').val(), "/", 1) );
    				$("#AIRHTL_returnUnfix").attr("checked", "checked");
    				airHtlSearch.setOpenItin();
    			} else {
    				$("#AIRHTL_returnUnfix").removeAttr("checked");
    				airHtlSearch.setOpenItin();
    			}
        	}
    		if(param[0] == "retdate"){
    			if (param[1] != "" && param[1] != "OPEN") { // returnUnfix 와 관련
    				$('#AIRHTL_RT_retdate').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate0').val(), "/", 1) );
    				$('#AIRHTL_RT_retdate').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
    			}
        	}
    		if(param[0] == "val"){
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_RT_val');
        	}
    		
    		/* --------------- seg 3s ------------------------*/
    		if(param[0] == "dep2"){
    			$("#airHtl3").find("div.item").eq(2).addClass("view");
    			$("#airHtl3").find("div.item").eq(2).removeClass("none");
    			$("#airHtl3").find("div.item").eq(2).show();
    			dep2Exist = true;
    			
    			$('#AIRHTL_' + tripType + '_dep2').val(param[1]);
    		}
			if(param[0] == "dep2_text"){
    			$('#AIRHTL_' + tripType + '_dep2_text').val(param[1]);
    		}
			if(param[0] == "arr2"){
    			$('#AIRHTL_' + tripType + '_arr2').val(param[1]);
    		}
    		if(param[0] == "arr2_text"){
    			$('#AIRHTL_' + tripType + '_arr2_text').val(param[1]);
    		}
    		if(param[0] == "depdate2"){
    			$('#AIRHTL_' + tripType + '_depdate2').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate1').val(), "/", 1) );
        		$('#AIRHTL_' + tripType + '_depdate2').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
        	}
    		/* --------------- seg 3e ------------------------*/
    		
    		/* --------------- seg 4e ------------------------*/
    		if(param[0] == "dep3"){
    			$('#AIRHTL_' + tripType + '_dep3').val(param[1]);
    		}
			if(param[0] == "dep3_text"){
    			$('#AIRHTL_' + tripType + '_dep3_text').val(param[1]);
    		}
			if(param[0] == "arr3"){
				airHtlSearch.copyComboChange(param[1], 'AIRHTL_' + tripType + '_arr3');
    		}
    		if(param[0] == "arr3_text"){
    			$('#AIRHTL_' + tripType + '_arr3_text').val(param[1]);
    		}
    		if(param[0] == "depdate3"){
    			if (dep2Exist && tripType == "MD") {
    				$('#AIRHTL_' + tripType + '_depdate3').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate2').val(), "/", 1) );
    			} else if (dep1Exist && tripType == "MD") {
    				$('#AIRHTL_' + tripType + '_depdate3').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate1').val(), "/", 1) );
    			} else if (tripType == "MD") {
    				$('#AIRHTL_' + tripType + '_depdate3').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate0').val(), "/", 1) );
    			}
    			
        		$('#AIRHTL_' + tripType + '_depdate3').val(param[1].substr(0, 4) + "/" + param[1].substr(4, 2) + "/" + param[1].substr(6, 2));
        	}
    		/* --------------- seg 4e ------------------------*/
    		
    		if(param[0] == "comp"){
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_' + tripType + '_comp');
    		}
    		if(param[0] == "adt"){
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_' + tripType + '_adt');
    		}
    		if(param[0] == "chd"){
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_' + tripType + '_chd');
    		}
    		if(param[0] == "inf"){
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_' + tripType + '_inf');
    		}
    		
    		
    		/** ------------------------------ hotel set ----------------------------*/
    		// hotel param setting
			if(param[0] == "city_code"){
    			$('#AIRHTL_int_' + tripType + " [name='city_code']").val(param[1]);
    			$('#AIRHTL_city_code').val(param[1]);
    		}
    		
    		if(param[0] == "city_name"){
    			$('#AIRHTL_int_' + tripType + " [name='city_name']").val(param[1]);
    			$('#AIRHTL_city_name').val(param[1]);
    		}
    		
    		if(param[0] == "checkin_date"){
    			$('#AIRHTL_int_' + tripType + " [name='checkin_date']").val(param[1]);
    			$('#AIRHTL_checkin_date').val(param[1]);
    		}
    		
    		if(param[0] == "checkout_date"){
    			$('#AIRHTL_int_' + tripType + " [name='checkout_date']").val(param[1]);
    			$('#AIRHTL_checkout_date').val(param[1]);
    		}
    		
    		if(param[0] == "stayDay"){
    			$('#AIRHTL_int_' + tripType + " [name='stayDay']").val(param[1]);
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_stayDay');
    		}
    		
    		if(param[0] == "room_cnt"){
    			$('#AIRHTL_int_' + tripType + " [name='room_cnt']").val(param[1]);
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_room_cnt');
    			
    			room_cnt = $('#AIRHTL_int_' + tripType + " [name='room_cnt']").val();
        		addRoom('roomSelectArea3','stayAdult1_',  room_cnt , 'AIRHTL_');		
    		}
    		
    		if(param[0] == "stayAdult1_1"){
    			$('#AIRHTL_int_' + tripType + " [name='stayAdult1_1']").val(param[1]);
    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_stayAdult1_1');
    		}
    		
    		if(param[0] == "stayAdult1_2"){
    			if (room_cnt > 1) {
    				$('#AIRHTL_int_' + tripType + " [name='stayAdult1_2']").val(param[1]);
    				airHtlSearch.copyComboChange(param[1], 'AIRHTL_stayAdult1_2');
    			}
    		}
    		
    		if(param[0] == "stayAdult1_3"){
    			if (room_cnt > 2) {
	    			$('#AIRHTL_int_' + tripType + " [name='stayAdult1_3']").val(param[1]);
	    			airHtlSearch.copyComboChange(param[1], 'AIRHTL_stayAdult1_3');
    			}
    		}
    		
    		if(param[0] == "htl_name"){
    			$('#AIRHTL_int_' + tripType + " [name='htl_name']").val(param[1]);
    			$('#AIRHTL_htl_name').val(param[1]);
    		}
    	}
    	
    	if (!dep1Exist && tripType == "MD") {
    		$("#airHtl3").find("div.item").eq(1).removeClass("view");
			$("#airHtl3").find("div.item").eq(1).addClass("none");
			$("#airHtl3").find("div.item").eq(1).hide();
			
			$('#AIRHTL_' + tripType + '_depdate1').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate0').val(), "/", 1) );
			$('#AIRHTL_' + tripType + '_depdate1').val("출발날짜");
    	}
    	
    	if (!dep2Exist && tripType == "MD") {
    		$("#airHtl3").find("div.item").eq(2).removeClass("view");
			$("#airHtl3").find("div.item").eq(2).addClass("none");
			$("#airHtl3").find("div.item").eq(2).hide();
			
			if (dep1Exist) {
				$('#AIRHTL_' + tripType + '_depdate2').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate1').val(), "/", 1) );	
			} else {
				$('#AIRHTL_' + tripType + '_depdate2').datepicker( "option", "minDate", calculateDate($('#AIRHTL_' + tripType + '_depdate0').val(), "/", 1) );
			}
			$('#AIRHTL_' + tripType + '_depdate2').val("출발날짜");
    	}
	},

	//항공(국제선, 국내선) 검색하기 버튼 클릭 시
	airtelSubmit : function(){
		//var numberPattern =  /[^0-9]/gi;
		
		var user = Number($('#AIRHTL_RT_adt').val()) + Number($('#AIRHTL_RT_chd').val()) + Number($('#AIRHTL_RT_inf').val());
		
		var strReturn = setAirtelRoomType();
		var week = "";
		
		if(strReturn && checkAirtelValid()) {
			if($("#AIRHTL_htl_name").val() == "한글 및 영문 호텔이름을 입력해주세요") {
				$("#AIRHTL_htl_name").val("");
			}
			
			week = getWeek($("#AIRHTL_checkin_date").val());

			$("#AIRHTL_week").val(week);
			$("#AIRHTL_hsf_bed_type").val(strReturn);
		} else { return; }
		
		// 전송전 일자변환
		commonSearch.setAirtelDate(airHtlTripType);
		
		if(airHtlTripType == "RT"){
			
			if($('#AIRHTL_RT_arr0').val() == ""){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('도착도시를 선택해 주세요');
				return;
			}
			if($('#AIRHTL_RT_dayInd').val() == "N" && !commonSearch.validAirDate($('#AIRHTL_RT_depdate0').val())) {
				commonSearch.resetAirtelDate(tripType);
				alert('출발날짜를 선택해 주세요.');return;
			}
			if($('#AIRHTL_RT_dep1').val() == ""){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('출발도시를 선택해 주세요');
				return;
			}
			if($('#AIRHTL_RT_retdate').val() != "OPEN" && !commonSearch.validAirDate($('#AIRHTL_RT_retdate').val())){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('귀국날짜를 선택해 주세요.');
				return;
			}
			if($('#AIRHTL_RT_retdate').val() != "OPEN" && (Number($('#AIRHTL_RT_depdate0').val()) > Number($('#AIRHTL_RT_retdate').val()))){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('귀국일을 출국일 이후로 선택해 주세요.');
				return;
			}
			if($('#AIRHTL_returnUnfix').is(":checked") && $('#AIRHTL_RT_val').val() == ""){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('귀국일 미정시 최대 체류기간을 선택해 주세요');
				return;
			}
			if(user > 9){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('예약인원은 9명을 넘을수 없습니다.');
				return;
			}
			if($('#AIRHTL_RT_arr0').val() == "SEL" || $('#AIRHTL_RT_arr0').val() == "ICN" || $('#AIRHTL_RT_arr0').val() == "GMP" || 
			   $('#AIRHTL_RT_arr0').val() == "PUS" || $('#AIRHTL_RT_arr0').val() == "TAE" || $('#AIRHTL_RT_arr0').val() == "CJU" || 
			   $('#AIRHTL_RT_arr0').val() == "KWJ" || $('#AIRHTL_RT_arr0').val() == "USN" || $('#AIRHTL_RT_arr0').val() == "KPO" || 
			   $('#AIRHTL_RT_arr0').val() == "MPK" || $('#AIRHTL_RT_arr0').val() == "HIN" || $('#AIRHTL_RT_arr0').val() == "RSU" || 
			   $('#AIRHTL_RT_arr0').val() == "YEC" || $('#AIRHTL_RT_arr0').val() == "SHO" || $('#AIRHTL_RT_arr0').val() == "KUV" || 
			   $('#AIRHTL_RT_arr0').val() == "WJU" || $('#AIRHTL_RT_arr0').val() == "KAG" || $('#AIRHTL_RT_arr0').val() == "CJJ"){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');
					return;
			}
			
			if(($('#AIRHTL_RT_arr0').val() != $('#AIRHTL_RT_dep1').val()) || ($('#AIRHTL_RT_dep0').val() != $('#AIRHTL_RT_arr1').val())){
				$('#AIRHTL_RT_trip').val("MD");
			}
			
			$('#AIRHTL_RT_dep0_text').val($('#AIRHTL_RT_dep0 option:selected').text());
			$('#AIRHTL_RT_arr1_text').val($('#AIRHTL_RT_arr1 option:selected').text());
			$('#AIRHTL_RT_comp_nm').val($('#AIRHTL_RT_comp option:selected').text());
			$('#AIRHTL_RT_val_nm').val($('#AIRHTL_RT_val option:selected').text());
			
			// hotel param setting
			$("#AIRHTL_int_RT  [name='nation_name']").val( $("#AIRHTL_nation_name").val() );
            $("#AIRHTL_int_RT  [name='city_code']").val( $("#AIRHTL_city_code").val() );
            $("#AIRHTL_int_RT  [name='city_name']").val( $("#AIRHTL_city_name").val() );
            $("#AIRHTL_int_RT  [name='hsf_bed_type']").val( $("#AIRHTL_hsf_bed_type").val() );
            $("#AIRHTL_int_RT  [name='stay_adult']").val( $("#AIRHTL_int_MD #AIRHTL_stay_adult").val() );
            $("#AIRHTL_int_RT  [name='stay_kid']").val( $("#AIRHTL_int_MD #AIRHTL_stay_kid").val() );
            $("#AIRHTL_int_RT  [name='kidFlag']").val( $("#AIRHTL_kidFlag").val() );
            $("#AIRHTL_int_RT  [name='week']").val( $("#AIRHTL_week").val() );
            $("#AIRHTL_int_RT  [name='location']").val( $("#AIRHTL_location").val() );
            $("#AIRHTL_int_RT  [name='stayDay']").val( $("#AIRHTL_stayDay").val() );
            $("#AIRHTL_int_RT  [name='checkout_date']").val( $("#AIRHTL_checkout_date").val() );
            $("#AIRHTL_int_RT  [name='checkin_date']").val( $("#AIRHTL_checkin_date").val() );
            $("#AIRHTL_int_RT  [name='room_cnt']").val( $("#AIRHTL_room_cnt").val() );
            $("#AIRHTL_int_RT  [name='stayAdult1_1']").val( $("#AIRHTL_stayAdult1_1").val() );
            $("#AIRHTL_int_RT  [name='stayAdult1_2']").val( $("#AIRHTL_stayAdult1_2").val() );
            $("#AIRHTL_int_RT  [name='stayAdult1_3']").val( $("#AIRHTL_stayAdult1_3").val() );
            $("#AIRHTL_int_RT  [name='stayKid1_1']").val( $("#AIRHTL_stayKid1_1").val() );
            $("#AIRHTL_int_RT  [name='stayKid1_2']").val( $("#AIRHTL_stayKid1_2").val() );
            $("#AIRHTL_int_RT  [name='stayKid1_3']").val( $("#AIRHTL_stayKid1_3").val() );
            $("#AIRHTL_int_RT  [name='htl_name']").val( $("#AIRHTL_htl_name").val() );
            $("#AIRHTL_RT_retdate").prop("disabled", false);
			$('#AIRHTL_int_RT').attr('action', airtelSearchUrl).submit();
			
		}else if(airHtlTripType == "OW"){
			if($('#AIRHTL_OW_arr0').val() == ""){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('도착도시를 선택해 주세요');
				return;
			}
			if(!commonSearch.validAirDate($('#AIRHTL_OW_depdate0').val())){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('출발날짜를 선택해 주세요.');
				return;
			}
			if(user > 9){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('예약인원은 9명을 넘을수 없습니다.');
				return;
			}
			if($('#AIRHTL_OW_arr0').val() == "SEL" || $('#AIRHTL_OW_arr0').val() == "ICN" || $('#AIRHTL_OW_arr0').val() == "GMP" || 
			   $('#AIRHTL_OW_arr0').val() == "PUS" || $('#AIRHTL_OW_arr0').val() == "TAE" || $('#AIRHTL_OW_arr0').val() == "CJU" || 
			   $('#AIRHTL_OW_arr0').val() == "KWJ" || $('#AIRHTL_OW_arr0').val() == "USN" || $('#AIRHTL_OW_arr0').val() == "KPO" || 
			   $('#AIRHTL_OW_arr0').val() == "MPK" || $('#AIRHTL_OW_arr0').val() == "HIN" || $('#AIRHTL_OW_arr0').val() == "RSU" || 
			   $('#AIRHTL_OW_arr0').val() == "YEC" || $('#AIRHTL_OW_arr0').val() == "SHO" || $('#AIRHTL_OW_arr0').val() == "KUV" || 
			   $('#AIRHTL_OW_arr0').val() == "WJU" || $('#AIRHTL_OW_arr0').val() == "KAG" || $('#AIRHTL_OW_arr0').val() == "CJJ"){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');
					return;
			}
			
			$('#AIRHTL_OW_dep0_text').val($('#AIRHTL_OW_dep0 option:selected').text());
			$('#AIRHTL_OW_comp_nm').val($('#AIRHTL_OW_comp option:selected').text());
			
			// hotel param setting
			$("#AIRHTL_int_OW  [name='nation_name']").val( $("#AIRHTL_nation_name").val() );
            $("#AIRHTL_int_OW  [name='city_code']").val( $("#AIRHTL_city_code").val() );
            $("#AIRHTL_int_OW  [name='city_name']").val( $("#AIRHTL_city_name").val() );
            $("#AIRHTL_int_OW  [name='hsf_bed_type']").val( $("#AIRHTL_hsf_bed_type").val() );
            $("#AIRHTL_int_OW  [name='stay_adult']").val( $("#AIRHTL_int_MD  #AIRHTL_stay_adult").val() );
            $("#AIRHTL_int_OW  [name='stay_kid']").val( $("#AIRHTL_int_MD  #AIRHTL_stay_kid").val() );
            $("#AIRHTL_int_OW  [name='kidFlag']").val( $("#AIRHTL_kidFlag").val() );
            $("#AIRHTL_int_OW  [name='week']").val( $("#AIRHTL_week").val() );
            $("#AIRHTL_int_OW  [name='location']").val( $("#AIRHTL_location").val() );
            $("#AIRHTL_int_OW  [name='stayDay']").val( $("#AIRHTL_stayDay").val() );
            $("#AIRHTL_int_OW  [name='checkout_date']").val( $("#AIRHTL_checkout_date").val() );
            $("#AIRHTL_int_OW  [name='checkin_date']").val( $("#AIRHTL_checkin_date").val() );
            $("#AIRHTL_int_OW  [name='room_cnt']").val( $("#AIRHTL_room_cnt").val() );
            $("#AIRHTL_int_OW  [name='stayAdult1_1']").val( $("#AIRHTL_stayAdult1_1").val() );
            $("#AIRHTL_int_OW  [name='stayAdult1_2']").val( $("#AIRHTL_stayAdult1_2").val() );
            $("#AIRHTL_int_OW  [name='stayAdult1_3']").val( $("#AIRHTL_stayAdult1_3").val() );
            $("#AIRHTL_int_OW  [name='stayKid1_1']").val( $("#AIRHTL_stayKid1_1").val() );
            $("#AIRHTL_int_OW  [name='stayKid1_2']").val( $("#AIRHTL_stayKid1_2").val() );
            $("#AIRHTL_int_OW  [name='stayKid1_3']").val( $("#AIRHTL_stayKid1_3").val() );
            $("#AIRHTL_int_OW  [name='htl_name']").val( $("#AIRHTL_htl_name").val() );
			
			$('#AIRHTL_int_OW').attr('action', airtelSearchUrl).submit();
			
		}else if(airHtlTripType == "MD"){
			if(user > 9){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('예약인원은 9명을 넘을수 없습니다.');
				return;
			}
			if($('#AIRHTL_MD_arr0').val() == "SEL" || $('#AIRHTL_MD_arr0').val() == "ICN" || $('#AIRHTL_MD_arr0').val() == "GMP" || 
			   $('#AIRHTL_MD_arr0').val() == "PUS" || $('#AIRHTL_MD_arr0').val() == "TAE" || $('#AIRHTL_MD_arr0').val() == "CJU" || 
			   $('#AIRHTL_MD_arr0').val() == "KWJ" || $('#AIRHTL_MD_arr0').val() == "USN" || $('#AIRHTL_MD_arr0').val() == "KPO" || 
			   $('#AIRHTL_MD_arr0').val() == "MPK" || $('#AIRHTL_MD_arr0').val() == "HIN" || $('#AIRHTL_MD_arr0').val() == "RSU" || 
			   $('#AIRHTL_MD_arr0').val() == "YEC" || $('#AIRHTL_MD_arr0').val() == "SHO" || $('#AIRHTL_MD_arr0').val() == "KUV" || 
			   $('#AIRHTL_MD_arr0').val() == "WJU" || $('#AIRHTL_MD_arr0').val() == "KAG" || $('#AIRHTL_MD_arr0').val() == "CJJ"){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('도착지가 국내 도시입니다. 도착지를 다시선택해 주세요');
					return;
			}
			
			if($('#AIRHTL_MD_arr0').val() == ""){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('첫번째 구간의 도착도시를 선택해 주세요');
				return;
			}
			if(!commonSearch.validAirDate($('#AIRHTL_MD_depdate0').val())){
				commonSearch.resetAirtelDate(airHtlTripType);
				alert('첫번째 구간의 출발날짜를 선택해 주세요.');
				return;
			}
			
			airHtlItinCnt_MD = $("#airHtl3").find('div[class="item view"]').length;
			if(airHtlItinCnt_MD == 2){
				if($('#AIRHTL_MD_dep3').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발도시를 선택해 주세요');
					return;
				}
				if(!commonSearch.validAirDate($('#AIRHTL_MD_depdate3').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number($('#AIRHTL_MD_depdate0').val()) > Number($('#AIRHTL_MD_depdate3').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발일을 첫번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				
				
				$("#AIRHTL_MD_dep1_text").val($("#AIRHTL_MD_dep3_text").val());
				$("#AIRHTL_MD_dep1").val($("#AIRHTL_MD_dep3").val());
				$("#AIRHTL_MD_arr1_text").val($("#AIRHTL_MD_arr3_text").val());
				$("#AIRHTL_MD_arr1").val($("#AIRHTL_MD_arr3").val());
				$("#AIRHTL_MD_depdate1").val($('#AIRHTL_MD_depdate3').val());
				
				$("#AIRHTL_MD_dep2").val("");
				$("#AIRHTL_MD_dep2_text").val("");
				$("#AIRHTL_MD_arr2").val("");
				$("#AIRHTL_MD_arr2_text").val("");
				$("#AIRHTL_MD_depdate2").val("");
				
				$("#AIRHTL_MD_dep3").val("");
				$("#AIRHTL_MD_dep3_text").val("");
				$("#AIRHTL_MD_arr3").val("");
				$("#AIRHTL_MD_arr3_text").val("");
				$("#AIRHTL_MD_depdate3").val("");
				
			}else if(airHtlItinCnt_MD == 3){
				
				if($('#AIRHTL_MD_dep1').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발도시를 선택해 주세요');
					return;
				}
				if($('#AIRHTL_MD_arr1').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 도착도시를 선택해 주세요');
					return;
				}
				if(!commonSearch.validAirDate($('#AIRHTL_MD_depdate1').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number($('#AIRHTL_MD_depdate0').val()) > Number($('#AIRHTL_MD_depdate1').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발일을 첫번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				if($('#AIRHTL_MD_dep3').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('세번째 구간의 출발도시를 선택해 주세요');
					return;
				}
				if(!commonSearch.validAirDate($('#AIRHTL_MD_depdate3').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('세번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number($('#AIRHTL_MD_depdate1').val()) > Number($('#AIRHTL_MD_depdate3').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('세번째 구간의 출발일을 두번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				$("#AIRHTL_MD_dep2_text").val($("#AIRHTL_MD_dep3_text").val());
				$("#AIRHTL_MD_dep2").val($("#AIRHTL_MD_dep3").val());
				$("#AIRHTL_MD_arr2_text").val($("#AIRHTL_MD_arr3_text").val());
				$("#AIRHTL_MD_arr2").val($("#AIRHTL_MD_arr3").val());
				$("#AIRHTL_MD_depdate2").val($('#AIRHTL_MD_depdate3').val());
				
				$("#AIRHTL_MD_dep3").val("");
				$("#AIRHTL_MD_dep3_text").val("");
				$("#AIRHTL_MD_arr3").val("");
				$("#AIRHTL_MD_arr3_text").val("");
				$("#AIRHTL_MD_depdate3").val("");
				
			}else if(airHtlItinCnt_MD == 4){
				if($('#AIRHTL_MD_dep1').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발도시를 선택해 주세요');
					return;
				}
				if($('#AIRHTL_MD_arr1').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 도착도시를 선택해 주세요');
					return;
				}
				if(!commonSearch.validAirDate($('#AIRHTL_MD_depdate1').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number($('#AIRHTL_MD_depdate0').val()) > Number($('#AIRHTL_MD_depdate1').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('두번째 구간의 출발일을 첫번째 구의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				if($('#AIRHTL_MD_dep2').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('세번째 구간의 출발도시를 선택해 주세요');
					return;
				}
				if($('#AIRHTL_MD_arr2').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('세번째 구간의 도착도시를 선택해 주세요');
					return;
				}
				if(!commonSearch.validAirDate($('#AIRHTL_MD_depdate2').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('세번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number($('#AIRHTL_MD_depdate1').val()) > Number($('#AIRHTL_MD_depdate2').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('세번째 구간의 출발일을 두번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				if($('#AIRHTL_MD_dep3').val() == ""){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('네번째 구간의 출발도시를 선택해 주세요');
					return;
				}
				if(!commonSearch.validAirDate($('#AIRHTL_MD_depdate3').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('네번째 구간의 출발날짜를 선택해 주세요.');
					return;
				}
				if(Number($('#AIRHTL_MD_depdate2').val()) > Number($('#AIRHTL_MD_depdate3').val())){
					commonSearch.resetAirtelDate(airHtlTripType);
					alert('네번째 구간의 출발일을 두번째 구간의 출발일 이후로 선택해 주세요.');
					return;
				}
				
				$("#AIRHTL_MD_arr3_text").val($('#AIRHTL_MD_arr3 option:selected').text());
			}
			
			$('#AIRHTL_MD_dep0_text').val($('#AIRHTL_MD_dep0 option:selected').text());
			$('#AIRHTL_MD_comp_nm').val($('#AIRHTL_MD_comp option:selected').text());
			
			// hotel param setting
			$("#AIRHTL_int_MD  [name='nation_name']").val( $("#AIRHTL_nation_name").val() );
            $("#AIRHTL_int_MD  [name='city_code']").val( $("#AIRHTL_city_code").val() );
            $("#AIRHTL_int_MD  [name='city_name']").val( $("#AIRHTL_city_name").val() );
            $("#AIRHTL_int_MD  [name='hsf_bed_type']").val( $("#AIRHTL_hsf_bed_type").val() );
            $("#AIRHTL_int_MD  [name='stay_adult']").val( $("#AIRHTL_int_MD #AIRHTL_stay_adult").val() );
            $("#AIRHTL_int_MD  [name='stay_kid']").val( $("#AIRHTL_int_MD #AIRHTL_stay_kid").val() );
            $("#AIRHTL_int_MD  [name='kidFlag']").val( $("#AIRHTL_kidFlag").val() );
            $("#AIRHTL_int_MD  [name='week']").val( $("#AIRHTL_week").val() );
            $("#AIRHTL_int_MD  [name='location']").val( $("#AIRHTL_location").val() );
            $("#AIRHTL_int_MD  [name='stayDay']").val( $("#AIRHTL_stayDay").val() );
            $("#AIRHTL_int_MD  [name='checkout_date']").val( $("#AIRHTL_checkout_date").val() );
            $("#AIRHTL_int_MD  [name='checkin_date']").val( $("#AIRHTL_checkin_date").val() );
            $("#AIRHTL_int_MD  [name='room_cnt']").val( $("#AIRHTL_room_cnt").val() );
            $("#AIRHTL_int_MD  [name='stayAdult1_1']").val( $("#AIRHTL_stayAdult1_1").val() );
            $("#AIRHTL_int_MD  [name='stayAdult1_2']").val( $("#AIRHTL_stayAdult1_2").val() );
            $("#AIRHTL_int_MD  [name='stayAdult1_3']").val( $("#AIRHTL_stayAdult1_3").val() );
            $("#AIRHTL_int_MD  [name='stayKid1_1']").val( $("#AIRHTL_stayKid1_1").val() );
            $("#AIRHTL_int_MD  [name='stayKid1_2']").val( $("#AIRHTL_stayKid1_2").val() );
            $("#AIRHTL_int_MD  [name='stayKid1_3']").val( $("#AIRHTL_stayKid1_3").val() );
            $("#AIRHTL_int_MD  [name='htl_name']").val( $("#AIRHTL_htl_name").val() );
			
			$('#AIRHTL_int_MD').attr('action', airtelSearchUrl).submit();
		}
	}
};
//--------------------------------- 에어텔 스크립트 End -----------------------------------//

//최상위 항공,호텔,항공+호텔 검색 탭
var searchType = function(i){
	var idx = i - 1;
	$("#totalSearchTab").find("label").each(function(index,element){
		var thisImgSrc = $(this).find("img");
		if($(this).index() == idx){
			thisImgSrc.attr("src",thisImgSrc.attr("src").replace("_off","_on"));
		}else{
			thisImgSrc.attr("src",thisImgSrc.attr("src").replace("_on","_off"));
		}
	});
	switch(i) {
		case 1 : 
			$("#AIR_SEARCH").show();
			$("#HTL_SEARCH").hide();
			$("#AIRHTL_SEARCH").hide();

			if($("#trip_DOM").is(":checked")){
				$("#INT_AIR_historyList").hide();
				$("#DOM_AIR_historyList").show();
			}else{
				$("#INT_AIR_historyList").show();
				$("#DOM_AIR_historyList").hide();
			}
			$("#INT_HTL_historyList").hide();
			$("#DOM_HTL_historyList").hide(); // webprovider
			$("#INT_AIRHTL_historyList").hide();
			tabFlag = "AIR";
		break;	
		case 2 : 
			$("#AIR_SEARCH").hide();
			$("#HTL_SEARCH").show();
			$("#AIRHTL_SEARCH").hide();
			
			$("#INT_AIR_historyList").hide();
			$("#DOM_AIR_historyList").hide();
			$("#INT_AIRHTL_historyList").hide();
			if ($("#intHtl").is(":checked")) { // webprovider
				$("#INT_HTL_historyList").show();
				$("#DOM_HTL_historyList").hide();
			} else {
				$("#INT_HTL_historyList").hide();
				$("#DOM_HTL_historyList").show();
			}
			tabFlag = "HTL";
		break;	
		case 3 : 
			$("#AIR_SEARCH").hide();
			$("#HTL_SEARCH").hide();
			$("#AIRHTL_SEARCH").show();
			
			$("#INT_AIR_historyList").hide();
			$("#DOM_AIR_historyList").hide();
			$("#INT_HTL_historyList").hide();
			$("#DOM_HTL_historyList").hide(); // webprovider
			$("#INT_AIRHTL_historyList").show();
			tabFlag = "AIRHTL";
		break;	
	}

};

var addRoom = function(target,idAdult,value, sType){
	var current = $("#" + target).find(".item_room").length;
	//console.log(current);
	//var roomnum = startnum,
	//roomLength = value - roomnum;
	if(current > value){
		$("#" + target).find(".item_room").each(function(index, element) {
			if($(this).index() > value){
				$(this).remove();
			}
		});
	}else if(current < value){
		for (var i = current + 1; i <= value; i++) {
			var html = '';
			html += '<div class="item number"><strong><img src="/images/front/travel/common/txt_room'+ i +'.gif" alt="객실 '+ i +'" /></strong></div>\n';
			html += '<div class="item">\n';
			html += '	<label for="'+sType+ idAdult + i +'" class="hidden"><img src="/images/front/travel/common/txt_search1.gif" alt="성인" /></label>\n';
			html += '	<select name="'+ idAdult + i +'" id="'+sType+ idAdult + i +'" style="width:102px;">\n';
			html += '		<option value="1">1인실</option>\n';
			html += '		<option value="2">2인실</option>\n';
			html += '		<option value="3">3인실</option>\n';
			html += '	</select>\n';
			html += '</div>\n';

			$("#" + target).append($('<div class="item_room item_room_add2"/>').html(html));
			
			fakeselect.initialize();
			document.getElementById(sType + idAdult + i).reset();
		}
	}
	
};

//국내숙박 객실수 추가
var addDomRoom = function(target,idAdult,value){
	var current = $("#" + target).find(".item_room").length;
	if(current > value){
		$("#" + target).find(".item_room").each(function(index, element) {
			if($(this).index() > value){
				$(this).remove();
			}
		});
	}else if(current < value){
		for (var i = current + 1; i <= value; i++) {
			var html = '';
			html += '<div class="item number"><strong><img src="/images/front/travel/common/txt_room'+ i +'.gif" alt="객실 '+ i +'" /></strong></div>\n';
			html += '<div class="item">\n';
			html += '	<label for="'+ idAdult + i +'" class="hidden"><img src="/images/front/travel/common/txt_search1.gif" alt="성인" /></label>\n';
			html += '	<select name="'+ idAdult + i +'" id="'+ idAdult + i +'" style="width:102px;">\n';
			html += '		<option value="1">1인실</option>\n';
			html += '		<option value="2">2인실</option>\n';
			html += '		<option value="3">3인실</option>\n';
			/*html += '		<option value="4">4</option>\n';
			html += '		<option value="5">5</option>\n';
			html += '		<option value="6">6</option>\n';
			html += '		<option value="7">7</option>\n';
			html += '		<option value="8">8</option>\n';
			html += '		<option value="9">9</option>\n';*/
			html += '	</select>\n';
			html += '</div>\n';
			$("#" + target).append($('<div class="item_room item_room_add2"/>').html(html));
		}
	}
	fakeselect.initialize();
};

// 아오  
$(function(){
	/** 호텔 국내 도시 */
	$.getJSON("/search/dom/", "", function (resultList) {
		var cboCitySelect = $("#ccc_sub_area_code").empty();
		$.each(resultList, function (key, value) {
			cboCitySelect.append("<option value='" + value.cityCd + "'>" + value.cityNm + "</option>");
		});
		htlSearch.setCities(cboCitySelect.find("option:first").val());
	});
	
	
	
	$("#totalSearch .btn_spr > a").click(function(){
		$(this).parent(".btn_spr").prev(".selspread").slideToggle();
		$(this).toggleClass("opened");
		if($(this).hasClass("opened")){
			$(this).text("상세검색 닫기");
		}else{
			$(this).text("상세검색 열기");
		}
		return false;
	});
});

/*
 * 날짜 계산
 * 사용법 calculateDate(날짜, 날짜구분자, 계산할 일수);
 * calculateDate('2014/01/01', '/', '1'); 
 * 결과 : 2014/01/02
 * delimiter의 유효성 검사는 대범하게 패스
*/
function calculateDate(inputDate, delimiter, calDate){
	inputDate = inputDate.split(delimiter);

    var date = new Date(inputDate[0], inputDate[1]-1, inputDate[2]);

    date.setDate(date.getDate() + parseInt(calDate));
    var year = date.getFullYear();
    var month = date.getMonth() +1;
    var day = date.getDate();
    
    if(month < 10) month = "0" + month;
    if(day < 10) day = "0" + day;
    
    return year + delimiter + month + delimiter + day;
}

function datepickerLoad(){
	var tmpBookableDate = $("#air_int_RT input[name='bookableDate']").val();
	bookableDate = tmpBookableDate.substr(0, 4) + "/" + tmpBookableDate.substr(4, 2) + "/" + tmpBookableDate.substr(6, 2);
	bookableDateHtl = 1;
	
	//국제선 왕복 datepicker set
	$('#AIR_RT_depdate0').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		/*onSelect: function(){	
			var a = $(this).val();
			$("#AIR_RT_retdate").datepicker( "option", "minDate", a );
			$("#AIR_RT_retdate").val("귀국날짜");
		},*/
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var newDate = new Date(selectedDate);
			if (!($("#AIR_returnUnfix").is(":checked"))) {
				//출발날짜 변경 시 귀국날짜가 셋팅되어있으면 변경하지 않음 20140106
				if($('#AIR_RT_depdate0').val().length > 8){
					$( "#AIR_RT_retdate" ).datepicker( "option", "minDate", newDate);
					//newDate.setDate( newDate.getDate() + 1 );
					newDate.setDate( newDate.getDate() );
				}
				if($("#AIR_RT_retdate").val().length < 8){
					$("#AIR_RT_retdate").val("귀국날짜");	
				}
        }	}
	});
	
	$('#AIR_RT_retdate').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	
	//국제선 편도 datepicker set
	$('#AIR_OW_depdate0').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	
	//국제선 다구간 datepicker set
	$('#AIR_MD_depdate0').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		/*onSelect: function(){	
			var a = $(this).val();
			$("#AIR_MD_depdate1, #AIR_MD_depdate3").datepicker( "option", "minDate", a );
			$("#AIR_MD_depdate1").val("귀국날짜");
			$("#AIR_MD_depdate3").val("귀국날짜");
		},*/
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var newDate = new Date(selectedDate);
        	//출발날짜 변경 시 귀국날짜가 셋팅되어있으면 변경하지 않음 20140106
			if($('#AIR_MD_depdate0').val().length > 8){
				newDate.setDate( newDate.getDate() + 1 );
				$("#AIR_MD_depdate1, #AIR_MD_depdate2").datepicker( "option", "minDate", newDate);
			}
	
			if($("#AIR_MD_depdate1").val().length < 8 ){
				$("#AIR_MD_depdate1, #AIR_MD_depdate2").val("출발날짜");
			}
			if($("#AIR_MD_depdate3").val().length < 8){
				$("#AIR_MD_depdate3").val("귀국날짜");
			}
        }
	});
	
	$('#AIR_MD_depdate1').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		/*onSelect: function(){	
			var a = $(this).val();
			$("#AIR_MD_depdate2").datepicker( "option", "minDate", a );	
			$("#AIR_MD_depdate2").val("귀국날짜");
		},*/
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var newDate = new Date(selectedDate);
        	//출발날짜 변경 시 귀국날짜가 셋팅되어있으면 변경하지 않음 20140106
			if($('#AIR_MD_depdate1').val().length > 8 ){
				newDate.setDate( newDate.getDate() + 1 );
				$( "#AIR_MD_depdate2, #AIR_MD_depdate3" ).datepicker( "option", "minDate", newDate);
			}
			if($("#AIR_MD_depdate2").val().length < 8 ){
				$("#AIR_MD_depdate2").val("출발날짜");
			}
			if($("#AIR_MD_depdate3").val().length < 8 ){
				$("#AIR_MD_depdate3").val("귀국날짜");
			}
        }
	});
	
	$('#AIR_MD_depdate2').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		/*onSelect: function(){	
			var a = $(this).val();
			$("#AIR_MD_depdate3").datepicker( "option", "minDate", a );
			$("#AIR_MD_depdate3").val("귀국날짜");
		},*/
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var newDate = new Date(selectedDate);
           	//출발날짜 변경 시 귀국날짜가 셋팅되어있으면 변경하지 않음 20140106
			if($('#AIR_MD_depdate2').val().length > 8){
				newDate.setDate( newDate.getDate() + 1 );
				$("#AIR_MD_depdate3" ).datepicker( "option", "minDate", newDate);
			}
			if($("#AIR_MD_depdate3").val().length < 8 ){
				$("#AIR_MD_depdate3").val("귀국날짜");
			}
        }
	});
	
	$('#AIR_MD_depdate3').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	
	//국제선 왕복 datepicker set
	$('#DOM_RT_depdate0').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: 0,
		maxDate: null,
		duration: 'fast',
		onSelect: function(){	
			//var a = $(this).val();
			//$("#DOM_RT_depdate1").datepicker( "option", "minDate", a );
			//$("#DOM_RT_depdate1").val("오는날짜");
		},
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
			var newDate = new Date(selectedDate);
			//출발날짜 변경 시 귀국날짜가 셋팅되어있으면 변경하지 않음 20140106
			if($('#DOM_RT_depdate0').val().length > 8){
	        	newDate.setDate( newDate.getDate());
				$( "#DOM_RT_depdate1" ).datepicker( "option", "minDate", newDate);
			}
			if($("#DOM_RT_depdate1").val().length < 8){
				$("#DOM_RT_depdate1").val("오는날짜");
			}
        }
	});
	
	$('#DOM_RT_depdate1, #DOM_OW_depdate0').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: 0,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	
	
	
	//호텔 checkin_date datepicker
	$('#checkin_date').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDateHtl,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var minDt = new Date(selectedDate);
        	var maxDt = new Date(selectedDate);
        	minDt.setDate( minDt.getDate() + 1 );
        	maxDt.setDate( maxDt.getDate() + 15 );
        	$( "#checkout_date" ).datepicker( "option", "minDate", commonSearch.convertDateToString(minDt) );
        	$( "#checkout_date" ).datepicker( "option", "maxDate", commonSearch.convertDateToString(maxDt) );
		},
		onSelect : function(){
			htlSearch.setCheckOutDate();
		}
	});
	
	//호텔 checkout_date datepicker
	$('#checkout_date').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDateHtl,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	$( "#checkin_date" ).datepicker( "option", "maxDate", selectedDate );
		},
		onSelect: function(dateText, inst) {
		       var d1=new Date($('#checkin_date').val());
		       var d2=new Date(dateText);
		       htlSearch.setCheckOutDateArr(Math.abs((d2-d1)/86400000));
		}
	});
	
	//호텔 DOM_checkin_date datepicker (webprovider)
	$('#DOM_checkin_date').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var minDt = new Date(selectedDate);
        	var maxDt = new Date(selectedDate);
        	minDt.setDate( minDt.getDate() + 1 );
        	maxDt.setDate( maxDt.getDate() + 6 );
        	$( "#DOM_checkout_date" ).datepicker( "option", "minDate", commonSearch.convertDateToString(minDt) );
        	$( "#DOM_checkout_date" ).datepicker( "option", "maxDate", commonSearch.convertDateToString(maxDt) );
		},
		onSelect : function(){
			htlSearch.setDomCheckOutDate();
		}
	});
	
	//호텔 DOM_checkout_date datepicker (webprovider)
	$('#DOM_checkout_date').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	$( "#DOM_checkin_date" ).datepicker( "option", "maxDate", selectedDate );
		},
		onSelect: function(dateText, inst) {
		       var d1=new Date($('#DOM_checkin_date').val());
		       var d2=new Date(dateText);
		       htlSearch.setDomCheckOutDateArr(Math.abs((d2-d1)/86400000));
		}
        	
	});
	
	
	//호텔 promo_checkin_date datepicker (webprovider)
	$('#checkin').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	
	//호텔 promo_checkout_date datepicker (webprovider)
	$('#checkout').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	
	//항공+호텔 왕복 datepicker set
	$('#AIRHTL_RT_depdate0').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		/*onSelect: function(){	
			var a = $(this).val();
			$("#AIRHTL_RT_retdate").datepicker( "option", "minDate", a );
			$("#AIRHTL_RT_retdate").val("귀국날짜");
		},*/
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var newDate = new Date(selectedDate);
			if (!($("#AIRHTL_returnUnfix").is(":checked"))) {
				//출발날짜 변경 시 귀국날짜가 셋팅되어있으면 변경하지 않음 20140106
				if($('#AIRHTL_RT_depdate0').val().length > 8){
					$("#AIRHTL_RT_retdate").datepicker( "option", "minDate", newDate);
					newDate.setDate( newDate.getDate() + 1 );
				}
				if($("#AIRHTL_RT_retdate").val().length < 8){
					$("#AIRHTL_RT_retdate").val("귀국날짜");
				}
			}
        }
	});
	
	$('#AIRHTL_RT_retdate').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	
	//항공+호텔 편도 datepicker set
	$('#AIRHTL_OW_depdate0').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	
	//항공+호텔 다구간 datepicker set
	$('#AIRHTL_MD_depdate0').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		/*onSelect: function(){	
			var a = $(this).val();
			$("#AIRHTL_MD_depdate1, #AIR_MD_depdate3").datepicker( "option", "minDate", a );
			$("#AIRHTL_MD_depdate1").val("귀국날짜");
			$("#AIRHTL_MD_depdate3").val("귀국날짜");
		},*/
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var newDate = new Date(selectedDate);
        	//출발날짜 변경 시 귀국날짜가 셋팅되어있으면 변경하지 않음 20140106
			if($('#AIRHTL_MD_depdate0').val().length > 8 ){
				newDate.setDate( newDate.getDate() + 1 );
				$( "#AIRHTL_MD_depdate1, #AIRHTL_MD_depdate2" ).datepicker( "option", "minDate", newDate);
			}
			if($("#AIRHTL_MD_depdate1").val().length < 8 ){
				$("#AIRHTL_MD_depdate1, #AIRHTL_MD_depdate2").val("출발날짜");
			}
			if($("#AIRHTL_MD_depdate3").val().length < 8 ){
				$("#AIRHTL_MD_depdate3").val("귀국날짜");
			}
		/*
			var newDate = new Date(selectedDate);
			newDate.setDate( newDate.getDate() + 1 );
			$( "#AIRHTL_MD_depdate1, #AIRHTL_MD_depdate2, #AIRHTL_MD_depdate3" ).datepicker( "option", "minDate", newDate);
			$("#AIRHTL_MD_depdate1, #AIRHTL_MD_depdate2").val("출발날짜");
			$("#AIRHTL_MD_depdate3").val("귀국날짜");
		 */
        }
	});
	
	$('#AIRHTL_MD_depdate1').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		/*onSelect: function(){	
			var a = $(this).val();
			$("#AIRHTL_MD_depdate2").datepicker( "option", "minDate", a );	
		},*/
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var newDate = new Date(selectedDate);
        	//출발날짜 변경 시 귀국날짜가 셋팅되어있으면 변경하지 않음 20140106
			if($('#AIRHTL_MD_depdate1').val().length > 8 ){
	        	newDate.setDate( newDate.getDate() + 1 );
				$("#AIRHTL_MD_depdate2, #AIRHTL_MD_depdate3").datepicker( "option", "minDate", newDate);
			}
			if($("#AIRHTL_MD_depdate2").val().length < 8 ){
				$("#AIRHTL_MD_depdate2").val("출발날짜");
			}
			if($("#AIRHTL_MD_depdate3").val().length < 8 ){
				$("#AIRHTL_MD_depdate3").val("귀국날짜");
			}
        }
	});
	
	$('#AIRHTL_MD_depdate2').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		/*onSelect: function(){	
			var a = $(this).val();
			$("#AIR_MD_depdate3").datepicker( "option", "minDate", a );
			$("#AIR_MD_depdate3").val("귀국날짜");
		},*/
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var newDate = new Date(selectedDate);
        	if($('#AIRHTL_MD_depdate2').val().length > 8 ){
	        	newDate.setDate( newDate.getDate() + 1 );
				$("#AIRHTL_MD_depdate3").datepicker( "option", "minDate", newDate);
        	}
        	if($("#AIRHTL_MD_depdate3").val().length < 8 ){
        		$("#AIRHTL_MD_depdate3").val("귀국날짜");
        	}
        }
	});
	
	$('#AIRHTL_MD_depdate3').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd'
	});
	$('#AIRHTL_checkin_date').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	var minDt = new Date(selectedDate);
        	var maxDt = new Date(selectedDate);
        	minDt.setDate( minDt.getDate() + 1 );
        	maxDt.setDate( maxDt.getDate() + 15 );
        	$( "#AIRHTL_checkout_date" ).datepicker( "option", "minDate", commonSearch.convertDateToString(minDt) );
        	$( "#AIRHTL_checkout_date" ).datepicker( "option", "maxDate", commonSearch.convertDateToString(maxDt) );
		},
		onSelect : function(){
			htlSearch.setAirtelCheckOutDate();
		}
	});
	
	$('#AIRHTL_checkout_date').datepicker({
		showOn: 'focus',
		showAnim: 'slideDown',
        showOptions: {},
        defaultDate: 0,
        yearRange: 'c-10:c+10',
        showOtherMonths: true,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: bookableDate,
		maxDate: null,
		duration: 'fast',
		onSelect: null,
        onChangeMonthYear: null,
        numberOfMonths: 2,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        constrainInput: true,
        showButtonPanel: false, 
        autoSize: false,
        dateFormat : 'yy/mm/dd',
        onClose: function( selectedDate ) {
        	$( "#AIRHTL_checkin_date" ).datepicker( "option", "maxDate", selectedDate );
		},
		onSelect: function(dateText, inst) {
		       var d1=new Date($('#AIRHTL_checkin_date').val());
		       var d2=new Date(dateText);
		       htlSearch.setAirtelCheckOutDateArr(Math.abs((d2-d1)/86400000));
		}
	});
}

$(function(){
	$("#htl_name").placeHolder2();
	$("#hotelName2").placeHolder2();
	$("#AIRHTL_htl_name").placeHolder2();
	
	/** 검색 History over 처리 */
	// 각각의 최상위 li active class 추가
	$("#divSearchHistory ul li:first-child").addClass("active");
	$("#divSearchHistory ul li").mouseover(function () {
		$(this).parent("ul").find("li").removeClass("active");
		$(this).addClass("active");
	});
});