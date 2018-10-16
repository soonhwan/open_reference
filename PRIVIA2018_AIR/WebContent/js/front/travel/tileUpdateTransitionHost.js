(function($) {
	var indicatorObjArr=[],
		tileObjArr=[],
		_tileUpdateController = null,
		tileNodeArr;

	$(document).ready(function() {
		initialize();
	});

	function initialize() {
		tileNodeArr = $(".liveTile");
		createIndicatorAndTile();
		createTileUpdateController();
		
		//contents setting
		TweenMax.delayedCall(0.5, setContents);
	}
	
	function createIndicatorAndTile(){
		
		var options;
		var _indicatorObj;
		var _tileObj;
		for (var i=0,max=tileNodeArr.length; i<max; i++) {
			
			//set indicator instance
			options = {
				containerNode : tileNodeArr[i], //indicator button으로 사용할 node를 내부에 가지는 container node
				buttonContainersInContainerNodeSelector: ".indicator .buttonContainer", //containerNode element 내부의 indicator button container selector String
				buttonInbuttonContainerSelector : ".button", //containerNode element 내부에서 indicator button으로 사용할 node selector String
				buttonContainerActivateClassName : "on-button" //indicator button node 활성화/비활성화 상태 변화시, button node에 추가/삭제할 class name String
			};
			_indicatorObj = new Hcard.module.Indicator();
			_indicatorObj.init(options);
			indicatorObjArr.push(_indicatorObj);

			//set tile instance
			options = {
				index : i+1, //tile instance index
				tileNode : tileNodeArr[i], //Hcard.module.Tile Class instance의 직접적 제어 대상이 되는 node
				tileWidth : $(tileNodeArr[i]).data("width"), //tile node width. default value is 100
				tileHeight : $(tileNodeArr[i]).data("height"), //tile node height. default value is 100
				imageContainerSelector : ".imgContainer", //tileNode 내부의 image를 담고 있는 container node selector String
				tileType : $(tileNodeArr[i]).data("tile-type"), //must use png image file when set this property to color.
				tileColors : ["#533690", "#db005c", "#585858"], //use when tileType property is "color" 
				speedSwitchTileColor : 0.4, //use when tileType property is "color". switch tile color bg speed(second) on color type. default value is 0.4
				speedSwitchTileFlip : 0.9, //use when tileType property is "flip". switch tile flip speed(second) on flip type. default value is 0.9
				isAutoPlay : true, //Hcard.module.TileUpdateController instance에 의한 tile 내부의 image auto rolling 설정시 true. default value is false
				indicator : _indicatorObj, //Hcard.module.Indicator instance. default value is null
				speedSwitchTileImage : 0.6, //switch tile image speed(second) on normal, color type. default value is 0.6
				autoPlayPauseBtnContainerNodeSelector : ".playPauseBtnContainer", //Hcard.module.TileUpdateController instance에 의해 tile 내부의 image auto rolling을 제어하기 위한 play/pause button container node selector String
				autoPlayPauseBtnSelectorInContainerNode: ".playPauseBtn", //Hcard.module.TileUpdateController _object.autoPlayPauseBtnContainerNodeSelector를 통해 선택된 button container node 내부의 button node selector String
				autoPlayPauseBtnContainerSwitchClassName : "play" //_object.autoPlayPauseBtnContainerNodeSelector를 통해 선택한 play/pause button node의 활성화/비활성화 상태 변화시, button node에 추가/삭제할 class name String
			};
			_tileObj = new Hcard.module.Tile();
			_tileObj.init(options);
			tileObjArr.push(_tileObj);
		}
	}
	
	function createTileUpdateController(){
		//set tileUpdateController instance
		var options = {
			tiles : tileObjArr, //Hcard.module.Tile Class의 instance를 담고 있는 Array
			minDelayUpdateTile : 4, //tile instance들의 minimum auto rolling delay (second)
			maxDelayUpdateTile : 6, //tile instance들의 maximum auto rolling delay (second)
			gapTileUpdate : 0.4 //복수의 tile instance들의 update가 이루어질 때, tile instance의 update() method 호출 간격 (second)
		};
		_tileUpdateController = new Hcard.module.TileUpdateController();
		_tileUpdateController.init(options);
	}
	
	function setContents() {
		//set tileUpdateController entrance motion
		var options = {
			gapEntranceTile:0.2, //init() method의 parameter _object.tiles에 담긴 tile instance들의 entrance() method 호출 간격 (second)
			speedEntranceTile:0.9 //tile instance의 entrance() method로 전달될 image 등장 speed (second)
		}
		_tileUpdateController.entrance(options);
		_tileUpdateController.start();
	}
})(jQuery); 