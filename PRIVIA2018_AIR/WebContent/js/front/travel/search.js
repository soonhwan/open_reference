/*
 * 함수명 : tourSearch
 * 설명 : 실시간 호텔,항공,호텔+항공 검색
 * 작성자 : 이영재 mulue@adcalsule.co.kr
 * 기본 선언은 dom load시 아래와 같이 재정의해 사용
 *  var tSearch = new tourSearch();
 *	tSearch.init();
 */
/*var searchBox = $("#totalSearch"), //검색 박스
		searchTab = $("#totalSearchTab"), //검색 상위 항공,호텔,호텔+항공 구분 탭
		termsSetAir1 = $("#checkTerms1"), //항공 구분 라디오 그룹1
		termsSetAir2 = $("#checkTerms2"),
		termsSetStay = $("#checkTerms3"),
		optionAir = $("#optionAirline"),
		viaDiv = "#addVia",
		viaPlus = $("#addVia").find("a.plus"),
		viaMinus = $("#addVia").find("a.minus"),
		airLineLength = 0;*/

var tourSearch = {
		init : function(){ //초기 init
			this.initBtns();
		},

		initBtns : function(){ //버튼 이벤트 바인딩

			//호텔 검색시 룸 추가
			/*$("#numRoom").selectmenu({
			    select: function(e, object){
			        alert(object.value);
			    }
			});*/
			//alert($(this.viaDiv).html());
			
			//항공 다구간시 구간 추가,삭제
			$("#addVia").find("a.plus").click(function(){
				tourSearch.addVia();
				return false;
			});
			$("#addVia").find("a.minus").click(function(){
				tourSearch.removeVia();
				return false;
			});
		},
		initDefault : function(){ //모든 값 및 UI 초기화
			termsSetAir1.show();
			termsSetAir2.show();
			termsSetStay.hide();
			
		},
		resetTab : function(){
			
			
		},
		addVia : function(){
			var airLineLength = $("#optionAirline").find('div[class="item"]').length,
				maxLength = 4;
			if(airLineLength == 4){
				alert("여정은 총 "+maxLength+"개 까지만 추가가 가능합니다.");
				return;
			}else{
				$("#optionAirline").find("div.item").eq(airLineLength - 1).removeClass("none");
			}
		},
		removeVia : function(){
			var airLineLength = $("#optionAirline").find('div[class="item"]').length,
				numberDel = airLineLength - 2;
			if(airLineLength == 2){
				alert("출발 및 귀국 여정은 삭제하실 수 없습니다.");
				return;
			}else{
				$("#optionAirline").find("div.item").eq(numberDel).addClass("none");
			}
		},
		addRoom : function(num){
			//alert(num);
			/*
						<div class="item_room">
							<div class="item number"><strong><img src="/images/front/travel/common/txt_room1.gif" alt="객실 1" /></strong></div>
							<div class="item">
								<label for="stayAdult2"><img src="/images/front/travel/common/txt_search1.gif" alt="성인" /></label>
								<select name="" id="stayAdult2" style="width:83px;">
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
								</select>
							</div>
							<div class="item">
								<label for="stayKid2"><img src="/images/front/travel/common/txt_search7.gif" alt="아동 및 유아" /></label>
								<select name="" id="stayKid2" style="width:83px;">
									<option value="0">0</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
									<option value="5">5</option>
									<option value="6">6</option>
									<option value="7">7</option>
									<option value="8">8</option>
									<option value="9">9</option>
								</select>
							</div>
						</div>
						*/
		},
		setCities : function(areaname){
			$.ajax({
				url : '/html_travel/guide/area.json',
				dataType : "text",
				success : function(data) {
					json = eval("(" + data + ")");
					select = $('#selectCity2'),
					options = select.prop('options');
					select.selectmenu("destroy").find("option").remove();
					$.each(eval("json." + areaname), function(key,state){
						obj = state;
						//options += '<option value="'+obj.value+'">'+obj.value+'</option>\n';
						options[options.length] = new Option(obj.value, obj.value);

					});
					//$('#selectCity2').selectmenu("destroy").find("option").remove().end().selectmenu(); //셀렉트박스 옵션 수정 샘플
					select.selectmenu(); //셀렉트박스 옵션 수정 샘플
				}
			});		
		}
};

$(function(){
	//호텔,항공,호텔+항공 검색
	tourSearch.init();
	
});