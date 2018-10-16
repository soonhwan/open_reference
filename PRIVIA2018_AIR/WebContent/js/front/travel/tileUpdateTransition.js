/*
 * IPL Ver 1.0
 */
(function($) {
	Hcard.nameSpace("Hcard.util.ControlUtil");
	Hcard.nameSpace("Hcard.util.MathUtil");
	Hcard.nameSpace("Hcard.util.ArrayUtil");
	Hcard.nameSpace("Hcard.util.StringUtil");
	Hcard.nameSpace("Hcard.util.NodeUtil");
	
	/*
	 * Hcard.util
	 */
	Hcard.util.ControlUtil.SimpleTimer = function(_gapTime, _callbackScope, _callbackFunc, _callbackFuncArgumentsArr) {
		var _this = this;

		//variables
		var gapTime = _gapTime;
		var callbackScope = _callbackScope;
		var callbackFunc = _callbackFunc;
		var callbackFuncArgumentsArr = _callbackFuncArgumentsArr;
		var _timer;
		
		//setTimeout
		var flag_protectRepeatTimeout = false;

		//---------------
		// PUBLIC 
		//---------------
		_this.destroy = function() {
			destroyInternalTimer();
			gapTime = null;
			callbackScope = null;
			callbackFunc = null;
			callbackFuncArgumentsArr = null;
			_timer = null;
			flag_protectRepeatTimeout = false;
		};

		_this.start = function() {
			destroyInternalTimer();
			_timer = setTimeout(performTimeout, gapTime);
			flag_protectRepeatTimeout = true;
		};

		_this.stop = function() {
			flag_protectRepeatTimeout = false;
			destroyInternalTimer();
		};
		
		//---------------
		// PRIVATE 
		//---------------
		function performTimeout() {
			if(!callbackFuncArgumentsArr) {
				_callbackFunc.call(callbackScope);
			} else {
				_callbackFunc.apply(callbackScope, callbackFuncArgumentsArr);
			}
			repeatTimeout();
		}

		function repeatTimeout() {
			if(!flag_protectRepeatTimeout)
				return;
			destroyInternalTimer();
			_timer = setTimeout(performTimeout, gapTime);
		}

		function destroyInternalTimer() {
			if(_timer) {
				clearTimeout(_timer);
				_timer = null;
			}
		}
		
		return _this;
	};
	
	Hcard.util.MathUtil.getRandomIntMinToMax = function(_minValueInt, _maxValueInt) {
		return _minValueInt + Math.floor( Math.random() * (_maxValueInt - _minValueInt + 1));
	};
	
	Hcard.util.ArrayUtil.randomSort = function(_array) {
		_array.sort(
			function( _elementA, _elementB) {
				var _num = Math.random() - 0.5;
				var value = ( _num > 0 )? 1 : -1;
				return value;
			}
		);
	};
	
	Hcard.util.StringUtil.getPrefixedTransformTransitionPropertyStr = function(_transitionOrTransformStr) {
		var i, s = document.createElement('p').style, v = ['ms','O','Moz','Webkit'];
	    if( s[_transitionOrTransformStr] == '' ) return _transitionOrTransformStr;
	    _transitionOrTransformStr = _transitionOrTransformStr.charAt(0).toUpperCase() + _transitionOrTransformStr.slice(1);
	    for( i = v.length; i--; )
	        if( s[v[i] + _transitionOrTransformStr] == '' )
	            return (v[i] + _transitionOrTransformStr);
	};
	
	Hcard.util.NodeUtil.removeChild = function(_elementNode){
		if(!_elementNode) return;
		if(_elementNode.parentNode) _elementNode.parentNode.removeChild(_elementNode);
	};
	
	/**
	 * Hcard.module.Tile
	 * @class Hcard.module.Tile
	 * @constructor
	 */
	Hcard.nameSpace("Hcard.module.Tile");
	var Tile = (function() {
		var Klass;
		Klass = function(_option) {};
		
		function getRandomTileFirstPosition() {
			var randomIndex = Hcard.util.MathUtil.getRandomIntMinToMax(1, 4);
			var positionStr;
			switch(randomIndex) {
				case 1 :
					positionStr = "left";
					break;	
				case 2 :
					positionStr = "right";
					break;
				case 3 :
					positionStr = "top";
					break;
				case 4 :
					positionStr = "bottom";
					break;
			}
			return positionStr;
		}
		
		Klass.prototype = {
			__construct:function(_option) {
				this.index = -1;
				this.tileNode = null;
				this.tileWidth = 100;
				this.tileHeight = 100;
				this.tileType = "normal" //normal, color, flip
				this.tileColors = null;
				this.imageContainerNodeArr = [];
				this.isAutoPlay = false;
				this.indicator = null;
				this.speedSwitchTileImage = 0.6;
				this.speedSwitchTileColor = 0.4;
				this.speedSwitchTileFlip = 0.9;
				this.autoPlayPauseBtnContainerNodeSelector = null;
				this.autoPlayPauseBtnSelectorInContainerNode = null;
				this.autoPlayPauseBtnContainerSwitchClassName = "";
				
				//private
				this.currentTileIndex;
				this.activateTileIndex;
				this._playPauseBtnContainer;
				this._playPauseBtn;
				
				this._colorIndex = -1;
				this._currentColorBg;
			},
			
			/**
			 * init instance 
			 *
			 * @method init
			 * @param {Object} _object Object include index, tileNode, tileWidth, tileHeight, tileType, tileColors, imageContainerNodeArr, isAutoPlay, indicator, speedSwitchTileImage, speedSwitchTileColor, speedSwitchTileFlip, autoPlayPauseBtnContainerNodeSelector, autoPlayPauseBtnContainerSwitchClassName properties.
			 * @param {Number} _object.index tile instance index
			 * @param {DOM} _object.tileNode Hcard.module.Tile Class instance의 직접적 제어 대상이 되는 node
			 * @param {Number} _object.tileWidth tile node width. default value is 100
			 * @param {Number} _object.tileHeight tile node height. default value is 100
			 * @param {String} _object.tileType "normal", "color", "flip". default value is "normal"
			 * @param {Array} _object.tileColors Array include color value. ex) ["#533690", "#db005c", "#585858"]
			 * @param {String} _object.imageContainerSelector _object.tileNode 내부의 image를 담고 있는 container node selector String
			 * @param {Boolean} _object.isAutoPlay Hcard.module.TileUpdateController instance에 의한 tile 내부의 image auto rolling 설정시 true. default value is false
			 * @param {Hcard.module.Indicator instance} _object.indicator Hcard.module.Indicator instance. default value is null
			 * @param {Number} _object.speedSwitchTileImage switch tile image speed(second) on normal, color type. default value is 0.6
			 * @param {Number} _object.speedSwitchTileColor switch tile color bg speed(second) on color type. default value is 0.4 (use when tileType property is "color")
			 * @param {Number} _object.speedSwitchTileFlip switch tile flip speed(second) on flip type. default value is 0.9 (use when tileType property is "flip")
			 * @param {String} _object.autoPlayPauseBtnContainerNodeSelector Hcard.module.TileUpdateController instance에 의해 tile 내부의 image auto rolling을 제어하기 위한 play/pause button container node selector String
			 * @param {String} _object.autoPlayPauseBtnSelectorInContainerNode Hcard.module.TileUpdateController _object.autoPlayPauseBtnContainerNodeSelector를 통해 선택된 button container node 내부의 button node selector String
			 * @param {String} _object.autoPlayPauseBtnContainerSwitchClassName _object.autoPlayPauseBtnContainerNodeSelector를 통해 선택한 play/pause button node의 활성화/비활성화 상태 변화시, button node에 추가/삭제할 class name String
			 */
			init:function(_object) {
				var _this = this;
				
				this.index = _object.index || this.index;
				this.tileNode = _object.tileNode || this.tileNode;
				this.tileWidth = _object.tileWidth || this.tileWidth;
				this.tileHeight = _object.tileHeight || this.tileHeight;
				this.tileType = _object.tileType || this.tileType;
				this.tileColors = _object.tileColors || this.tileColors;
				this.imageContainerNodeArr = $(_object.imageContainerSelector, this.tileNode);
				this.isAutoPlay = _object.isAutoPlay || this.isAutoPlay;
				this.indicator = _object.indicator || this.indicator;
				this.speedSwitchTileImage = _object.speedSwitchTileImage || this.speedSwitchTileImage;
				this.speedSwitchTileColor = _object.speedSwitchTileColor || this.speedSwitchTileColor;
				this.speedSwitchTileFlip = _object.speedSwitchTileFlip || this.speedSwitchTileFlip;
				this.autoPlayPauseBtnContainerNodeSelector = _object.autoPlayPauseBtnContainerNodeSelector || this.autoPlayPauseBtnContainerNodeSelector;
				this.autoPlayPauseBtnSelectorInContainerNode = _object.autoPlayPauseBtnSelectorInContainerNode || this.autoPlayPauseBtnSelectorInContainerNode;
				this.autoPlayPauseBtnContainerSwitchClassName = _object.autoPlayPauseBtnContainerSwitchClassName || this.autoPlayPauseBtnContainerSwitchClassName;
				
				this.currentTileIndex = 1;
				this.activateTileIndex = 1;
				this._colorIndex = 0;
				if(!this.imageContainerNodeArr) return;
				
				$(this.tileNode).bind("mouseover mouseout click", function($evt) {
					_this._tileNodeMouseInteraction($evt, _this);
				});
				
				var _imageContainerNode;
				for(var i=0, max=this.imageContainerNodeArr.length; i<max; i++) {
					_imageContainerNode = this.imageContainerNodeArr[i];
					$(_imageContainerNode).bind("focus", function($evt) {
						_this._focusImageContainer($evt, _this);
					});
				}
				
				if(this.autoPlayPauseBtnContainerNodeSelector) {
					this._playPauseBtnContainer = $(this.autoPlayPauseBtnContainerNodeSelector, this.tileNode).get(0);
					if(!this._playPauseBtnContainer) return;
					
					$(this._playPauseBtnContainer).bind("mouseover mouseout click", function($evt) {
						_this._playPauseBtnContainerMouseInteraction($evt, _this);
					});
					
					this._playPauseBtn = $(this.autoPlayPauseBtnSelectorInContainerNode, this._playPauseBtnContainer).get(0);
					if(this._playPauseBtn) {
						$(this._playPauseBtn).bind("focus blur", function($evt) {
							_this._playPauseBtnFocusBlurInteraction($evt, _this);
						});
					}
				}
				if(this.isAutoPlay == true) {
					if(this._playPauseBtnContainer) {
						$(this._playPauseBtnContainer).addClass(this.autoPlayPauseBtnContainerSwitchClassName);
					}
					if(this.imageContainerNodeArr.length <= 1) return;
				}else{
				}
				if(this.indicator) {
					this.indicator.activate(this.activateTileIndex);
					
					var _$indicator = $(_this.indicator);
					_$indicator.bind(Hcard.module.Indicator.ROLLOVER_BUTTON, function($evt) {
						_this._indicatorBtnMouseInteraction($evt, _this);
					});
					_$indicator.bind(Hcard.module.Indicator.ROLLOUT_BUTTON, function($evt) {
						_this._indicatorBtnMouseInteraction($evt, _this);
					});
					_$indicator.bind(Hcard.module.Indicator.CLICK_BUTTON, function($evt) {
						_this._indicatorBtnMouseInteraction($evt, _this);
					});
					_$indicator.bind(Hcard.module.Indicator.FOCUS_BUTTON, function($evt) {
						_this._indicatorBtnFocusBlurInteraction($evt, _this);
					});
					_$indicator.bind(Hcard.module.Indicator.BLUR_BUTTON, function($evt) {
						_this._indicatorBtnFocusBlurInteraction($evt, _this);
					});
				}
			},
			
			/**
			 * destroy instance 
			 *
			 * @method destroy
			 * @param {Object} _object Object 
			 */
			destroy:function(_object) {
			},
			
			//---------------
			// PRIVATE 
			//---------------
			_tileNodeMouseInteraction:function($evt, _scope) {
				var _this = _scope;
				var _targetTile = $evt.currentTarget;
				var tileIndex = _this.index;
				
				var paramObj;
				switch($evt.type) {
					case "mouseover" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.ROLLOVER_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
					
					case "mouseout" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.ROLLOUT_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
					
					case "click" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.CLICK_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
				}
			},
			_focusImageContainer:function($evt, _scope) {
				var _this = _scope;
				var _targetImage = $evt.currentTarget;
				var tileIndex = _this.index;
				
				switch($evt.type) {
					case "focus" :
						var _imageContaner;
						for(var i=0, max=_this.imageContainerNodeArr.length; i<max; i++) {
							_imageContaner = _this.imageContainerNodeArr[i];
							TweenMax.killTweensOf(_imageContaner);
							_imageContaner.style.position = "absolute";
							
							if(_imageContaner != _targetImage) {
								_imageContaner.style.top = _this.tileHeight + "px";
								_imageContaner.style.left = "0px";
							}else{
								_targetImage.style.top = "0px";
								_targetImage.style.left = "0px";
							}
						}
						
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.FOCUS_IN_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
					
					case "blur" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.BLUR_IN_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
				}
			},
			_indicatorBtnMouseInteraction:function($evt, _scope) {
				var _this = _scope;
				switch($evt.type) {
					case Hcard.module.Indicator.ROLLOVER_BUTTON :
					break;
					
					case Hcard.module.Indicator.ROLLOUT_BUTTON :
					break;
					
					case Hcard.module.Indicator.CLICK_BUTTON :
						var targetIndex = $evt.index;
						_this._switchTile(targetIndex);
					break;
				}
			},
			_indicatorBtnFocusBlurInteraction:function($evt, _scope) {
				var _this = _scope;
				var tileIndex = _this.index;
				
				switch($evt.type) {
					case Hcard.module.Indicator.FOCUS_BUTTON :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.FOCUS_IN_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
					
					case Hcard.module.Indicator.BLUR_BUTTON :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.BLUR_IN_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
				}
			},
			_playPauseBtnContainerMouseInteraction:function($evt, _scope) {
				var _this = _scope;
				
				switch($evt.type) {
					case "mouseover" :
						$(this._playPauseBtnContainer).addClass("on");
					break;
					
					case "mouseout" :
						$(this._playPauseBtnContainer).removeClass("on");
					break;
					
					case "click" :
						if(_this.isAutoPlay) { //play
							$(this._playPauseBtnContainer).removeClass(_this.autoPlayPauseBtnContainerSwitchClassName);
							_this.isAutoPlay = false;
						}else{ //pause
							$(this._playPauseBtnContainer).addClass(_this.autoPlayPauseBtnContainerSwitchClassName);
							_this.isAutoPlay = true;
						}
					break;
				}
			},
			_playPauseBtnFocusBlurInteraction:function($evt, _scope) {
				var _this = _scope;
				
				var _targetPlayPauseBtn = $evt.currentTarget;
				var tileIndex = _this.index;
				
				var paramObj;
				switch($evt.type) {
					case "focus" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.FOCUS_IN_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
					
					case "blur" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Tile.BLUR_IN_TILE,
							index:tileIndex
						};
						$(_this).trigger(paramObj);
					break;
				}
			},
			_switchTileImage:function(_tileObjIndex, _switchTargetImageIndex) {
				var _this = this;
				switch(_this.tileType) {
					case "normal" :
						_this._switchTileNormalType(_tileObjIndex, _switchTargetImageIndex);
					break;
					
					case "color" :
						_this._switchTileColorType(_tileObjIndex, _switchTargetImageIndex);
					break;
					
					case "flip" :
						if(Modernizr.csstransforms && Modernizr.csstransitions) {
							_this._switchTileFlipType(_tileObjIndex, _switchTargetImageIndex);
						}else{
							_this._switchTileNormalType(_tileObjIndex, _switchTargetImageIndex);
						}
					break;
				}
			},
			_switchTileNormalType:function(_tileObjIndex, _switchTargetImageIndex) {
				var _this = this;
				var _prevImage = _this.imageContainerNodeArr[_this.currentTileIndex - 1];
				var _currentImage = _this.imageContainerNodeArr[_switchTargetImageIndex - 1];
				
				TweenMax.killTweensOf(_prevImage);
				TweenMax.killTweensOf(_currentImage);
				
				_prevImage.style.position = "absolute";
				_prevImage.style.top = "0px";
				_prevImage.style.left = "0px";
			
				_currentImage.style.position = "absolute";
				_currentImage.style.top = "0px";
				_currentImage.style.left = "0px";
				
				var firstPositionStr = getRandomTileFirstPosition(); 
				switch(firstPositionStr) {
					case "left" : 
						_currentImage.style.left = -_this.tileWidth + "px";
						TweenMax.to(_prevImage, _this.speedSwitchTileImage, {css:{left:_this.tileWidth}, ease:Cubic.easeInOut});
						TweenMax.to(_currentImage, _this.speedSwitchTileImage, {css:{left:0}, ease:Cubic.easeInOut});
					break;	
					
					case "right" : 
						_currentImage.style.left = _this.tileWidth + "px";
						TweenMax.to(_prevImage, _this.speedSwitchTileImage, {css:{left:-_this.tileWidth}, ease:Cubic.easeInOut});
						TweenMax.to(_currentImage, _this.speedSwitchTileImage, {css:{left:0}, ease:Cubic.easeInOut});
					break;
					
					case "top" : 
						_currentImage.style.top = -_this.tileHeight + "px";
						TweenMax.to(_prevImage, _this.speedSwitchTileImage, {css:{top:_this.tileHeight}, ease:Cubic.easeInOut});
						TweenMax.to(_currentImage, _this.speedSwitchTileImage, {css:{top:0}, ease:Cubic.easeInOut});
					break;
					
					case "bottom" : 
						_currentImage.style.top = _this.tileHeight + "px";
						TweenMax.to(_prevImage, _this.speedSwitchTileImage, {css:{top:-_this.tileHeight}, ease:Cubic.easeInOut});
						TweenMax.to(_currentImage, _this.speedSwitchTileImage, {css:{top:0}, ease:Cubic.easeInOut});
					break;
				}
			},
			_switchTileColorType:function(_tileObjIndex, _switchTargetImageIndex) {
				var _this = this;
				var _prevImage = _this.imageContainerNodeArr[_this.currentTileIndex - 1];
				var _prevColorBg = _this._currentColorBg;
				var _currentImage = _this.imageContainerNodeArr[_switchTargetImageIndex - 1];
				
				if(_prevImage) {
					TweenMax.killTweensOf(_prevImage);
					_prevImage.style.position = "absolute";
					_prevImage.style.top = "0px";
					_prevImage.style.left = "0px";
				}
				if(_prevColorBg) {
					TweenMax.killTweensOf(_prevColorBg);
					_prevColorBg.style.position = "absolute";
					_prevColorBg.style.top = "0px";
					_prevColorBg.style.left = "0px";
				}
				if(_currentImage) {
					_currentImage.style.position = "absolute";
					_currentImage.style.top = "0px";
					_currentImage.style.left = "0px";
				}
				
				_this._colorIndex++;
				if(_this._colorIndex > _this.tileColors.length) _this._colorIndex = 1;
				var colorValueStr = _this.tileColors[_this._colorIndex - 1];
				
				_this._currentColorBg = document.createElement("div");
				_this._currentColorBg.style.position = "absolute";
				_this._currentColorBg.style.width = _this.tileWidth + "px";
				_this._currentColorBg.style.height = _this.tileHeight + "px";
				_this._currentColorBg.style.backgroundColor = colorValueStr;
				_this._currentColorBg.style.top = 0 + "px";
				_this._currentColorBg.style.left = 0 + "px";
				
				var _parentNode = _prevImage.parentNode;
				
				var firstPositionStr = "bottom"; //getRandomTileFirstPosition(); 
				switch(firstPositionStr) {
					case "left" : 
						if(_prevColorBg) {
							TweenMax.to(_prevColorBg, _this.speedSwitchTileColor, {css:{left:-_this.tileWidth}, ease:Quint.easeOut, onComplete:function() {
								TweenMax.killTweensOf(_prevColorBg);
								Hcard.util.NodeUtil.removeChild(_prevColorBg);
								_prevColorBg = null;
							}});
						}
						_this._currentColorBg.style.left = _this.tileWidth + "px";
						_parentNode.insertBefore(_this._currentColorBg, _parentNode.firstChild);
						TweenMax.to(_this._currentColorBg, _this.speedSwitchTileColor, {css:{left:0}, ease:Quint.easeOut});
					
						_currentImage.style.left = -_this.tileWidth + "px";
						TweenMax.to(_prevImage, _this.speedSwitchTileImage, {css:{left:_this.tileWidth}, ease:Cubic.easeInOut});
						TweenMax.to(_currentImage, _this.speedSwitchTileImage, {css:{left:0}, ease:Cubic.easeInOut});
					break;	
					
					case "right" : 
						if(_prevColorBg) {
							TweenMax.to(_prevColorBg, _this.speedSwitchTileColor, {css:{left:_this.tileWidth}, ease:Quint.easeOut, onComplete:function() {
								TweenMax.killTweensOf(_prevColorBg);
								Hcard.util.NodeUtil.removeChild(_prevColorBg);
								_prevColorBg = null;
							}});
						}
						_this._currentColorBg.style.left = -_this.tileWidth + "px";
						_parentNode.insertBefore(_this._currentColorBg, _parentNode.firstChild);
						TweenMax.to(_this._currentColorBg, _this.speedSwitchTileColor, {css:{left:0}, ease:Quint.easeOut});
					
						_currentImage.style.left = _this.tileWidth + "px";
						TweenMax.to(_prevImage, _this.speedSwitchTileImage, {css:{left:-_this.tileWidth}, ease:Cubic.easeInOut});
						TweenMax.to(_currentImage, _this.speedSwitchTileImage, {css:{left:0}, ease:Cubic.easeInOut});
					break;
					
					case "top" : 
						if(_prevColorBg) {
							TweenMax.to(_prevColorBg, _this.speedSwitchTileColor, {css:{top:-_this.tileHeight}, ease:Quint.easeOut, onComplete:function() {
								TweenMax.killTweensOf(_prevColorBg);
								Hcard.util.NodeUtil.removeChild(_prevColorBg);
								_prevColorBg = null;
							}});
						}
						_this._currentColorBg.style.top = _this.tileHeight + "px";
						_parentNode.insertBefore(_this._currentColorBg, _parentNode.firstChild);
						TweenMax.to(_this._currentColorBg, _this.speedSwitchTileColor, {css:{top:0}, ease:Quint.easeOut});
						
						_currentImage.style.top = -_this.tileHeight + "px";
						TweenMax.to(_prevImage, _this.speedSwitchTileImage, {css:{top:_this.tileHeight}, ease:Cubic.easeInOut});
						TweenMax.to(_currentImage, _this.speedSwitchTileImage, {css:{top:0}, ease:Cubic.easeInOut});
					break;
					
					case "bottom" : 
						if(_prevColorBg) {
							TweenMax.to(_prevColorBg, _this.speedSwitchTileColor, {css:{top:_this.tileHeight}, ease:Quint.easeOut, onComplete:function() {
								TweenMax.killTweensOf(_prevColorBg);
								Hcard.util.NodeUtil.removeChild(_prevColorBg);
								_prevColorBg = null;
							}});
						}
						_this._currentColorBg.style.top = -_this.tileHeight + "px";
						_parentNode.insertBefore(_this._currentColorBg, _parentNode.firstChild);
						TweenMax.to(_this._currentColorBg, _this.speedSwitchTileColor, {css:{top:0}, ease:Quint.easeOut});
					
						_currentImage.style.top = _this.tileHeight + "px";
						TweenMax.to(_prevImage, _this.speedSwitchTileImage, {css:{top:-_this.tileHeight}, ease:Cubic.easeInOut});
						TweenMax.to(_currentImage, _this.speedSwitchTileImage, {css:{top:0}, ease:Cubic.easeInOut});
					break;
				}
			},
			_switchTileFlipType:function(_tileObjIndex, _switchTargetImageIndex) {
				var _this = this;
				var _prevImage = _this.imageContainerNodeArr[_this.currentTileIndex - 1];
				var _currentImage = _this.imageContainerNodeArr[_switchTargetImageIndex - 1];
				var _container = _prevImage.parentNode;
				
				//prev left floor page
				var _prevLeftPageDiv = document.createElement("div");
				_prevLeftPageDiv.style.position = "absolute";
				_prevLeftPageDiv.style.top = "0px";
				_prevLeftPageDiv.style.left = "0px";
				_prevLeftPageDiv.style.width = parseInt(_this.tileWidth)/2 + "px";
				_prevLeftPageDiv.style.height = parseInt(_this.tileHeight)/2 + "px";
				_prevLeftPageDiv.style.overflow = "hidden";
				_prevLeftPageDiv.style.zIndex = 1;
				_container.appendChild(_prevLeftPageDiv);
				
					var _prevLeftPageA = _prevImage.cloneNode(true);
					_prevLeftPageA.style.top = "0px";
					_prevLeftPageA.style.left = "0px";
					_prevLeftPageDiv.appendChild(_prevLeftPageA);
				
				//current right floor page
				var _currentRightPageDiv = document.createElement("div");
				_currentRightPageDiv.style.position = "absolute";
				_currentRightPageDiv.style.top = "0px";
				_currentRightPageDiv.style.left = parseInt(_this.tileWidth)/2 + "px";
				_currentRightPageDiv.style.width = parseInt(_this.tileWidth)/2 + "px";
				_currentRightPageDiv.style.height = _this.tileHeight + "px";
				_currentRightPageDiv.style.overflow = "hidden";
				_currentRightPageDiv.style.zIndex = 1;
				_container.appendChild(_currentRightPageDiv); 
				
					var _currentRightPageA = _currentImage.cloneNode(true);
					_currentRightPageA.style.top = "0px";
					_currentRightPageA.style.left = -parseInt(_this.tileWidth)/2 + "px";
					_currentRightPageDiv.appendChild(_currentRightPageA);
				
				//prev right flip page
				var _prevRightFlipPageDiv = document.createElement("div");
				_prevRightFlipPageDiv.style.position = "absolute";
				_prevRightFlipPageDiv.style.top = "0px";
				_prevRightFlipPageDiv.style.left = "0px";
				_prevRightFlipPageDiv.style.width = _this.tileWidth + "px";
				_prevRightFlipPageDiv.style.height = _this.tileHeight + "px";
				_prevRightFlipPageDiv.style.overflow = "hidden";
				_prevRightFlipPageDiv.style.zIndex = 3;
				_container.appendChild(_prevRightFlipPageDiv);
					
					var _prevRightFlipPageContentsDiv = document.createElement("div");
					_prevRightFlipPageContentsDiv.style.position = "relative";
					_prevRightFlipPageContentsDiv.style.top = "0px";
					_prevRightFlipPageContentsDiv.style.left = parseInt(_this.tileWidth)/2 + "px";
					_prevRightFlipPageContentsDiv.style.width = parseInt(_this.tileWidth)/2 + "px";
					_prevRightFlipPageContentsDiv.style.height = _this.tileHeight + "px";
					_prevRightFlipPageContentsDiv.style.overflow = "hidden";
					_prevRightFlipPageDiv.appendChild(_prevRightFlipPageContentsDiv);
					
						var _prevRightFlipPageA = _prevImage.cloneNode(true);
						_prevRightFlipPageA.style.top = "0px";
						_prevRightFlipPageA.style.left = -parseInt(_this.tileWidth)/2 + "px";
						_prevRightFlipPageContentsDiv.appendChild(_prevRightFlipPageA);
				
				//current left flip page
				var _currentLeftFlipPageDiv = document.createElement("div");
				_currentLeftFlipPageDiv.style.position = "absolute";
				_currentLeftFlipPageDiv.style.top = "0px";
				_currentLeftFlipPageDiv.style.left = "0px";
				_currentLeftFlipPageDiv.style.width = _this.tileWidth + "px";
				_currentLeftFlipPageDiv.style.height = _this.tileHeight + "px";
				_currentLeftFlipPageDiv.style.overflow = "hidden";
				_currentLeftFlipPageDiv.style.zIndex = 2;
				
				var transformStr = Hcard.util.StringUtil.getPrefixedTransformTransitionPropertyStr("transform");
				_currentLeftFlipPageDiv.style[transformStr] = "rotateY(180deg)";
				_container.appendChild(_currentLeftFlipPageDiv);
				
					var _currentLeftFlipPageContentsDiv = document.createElement("div");
					_currentLeftFlipPageContentsDiv.style.position = "relative";
					_currentLeftFlipPageContentsDiv.style.top = "0px";
					_currentLeftFlipPageContentsDiv.style.left = "0px";
					_currentLeftFlipPageContentsDiv.style.width = parseInt(_this.tileWidth)/2 + "px";
					_currentLeftFlipPageContentsDiv.style.height = _this.tileHeight + "px";
					_currentLeftFlipPageContentsDiv.style.overflow = "hidden";
					_currentLeftFlipPageDiv.appendChild(_currentLeftFlipPageContentsDiv);
					
						var _currentLeftPageA = _currentImage.cloneNode(true);
						_currentLeftPageA.style.top = "0";
						_currentLeftPageA.style.left = "0";
						_currentLeftFlipPageContentsDiv.appendChild(_currentLeftPageA);
				
				//flip
				var flag_switchPageZindex = false;
				var transformStr = Hcard.util.StringUtil.getPrefixedTransformTransitionPropertyStr("transform");
				var transformObj = {
					rotateY:0
				};
				TweenMax.to(transformObj, this.speedSwitchTileFlip, {rotateY:-180, ease:Quad.easeInOut, onUpdate:updateSwitchPage, onComplete:completeSwitchPage });
				
				function updateSwitchPage() {
					var valueStr = "rotateY(" + transformObj.rotateY + "deg)";
					_prevRightFlipPageDiv.style[transformStr] = valueStr;
					
					valueStr = "rotateY(" + (parseFloat(transformObj.rotateY) + 180) + "deg)";
					_currentLeftFlipPageDiv.style[transformStr] = valueStr;
					
					if(flag_switchPageZindex) return;
					if(parseFloat(transformObj.rotateY) < -180/2) {
						switchPageZIndex(_prevRightFlipPageDiv, _currentLeftFlipPageDiv);
						flag_switchPageZindex = true;
					}
				}
				
				function completeSwitchPage() {
					if(_prevLeftPageDiv) {
						Hcard.util.NodeUtil.removeChild(_prevLeftPageDiv);
						_prevLeftPageDiv = null;
					}
					if(_currentRightPageDiv) {
						Hcard.util.NodeUtil.removeChild(_currentRightPageDiv);
						_currentRightPageDiv = null;
					}
					if(_prevRightFlipPageDiv) {
						Hcard.util.NodeUtil.removeChild(_prevRightFlipPageDiv);
						_prevRightFlipPageDiv = null;
					}
					if(_currentLeftFlipPageDiv) {
						Hcard.util.NodeUtil.removeChild(_currentLeftFlipPageDiv);
						_currentLeftFlipPageDiv = null;
					}
					
					//_prevImage, _currentImage position setting
					TweenMax.killTweensOf(_prevImage);
					_prevImage.style.position = "absolute";
					_prevImage.style.top = -_this.tileHeight + "px";
					_prevImage.style.left = -_this.tileWidth + "px";
					
					TweenMax.killTweensOf(_currentImage);
					_currentImage.style.position = "absolute";
					_currentImage.style.top = "0px";
					_currentImage.style.left = "0px";
				}
				
				function switchPageZIndex($currentRightFlipPageDiv, $nextLeftFlipPageDiv) {
					var _crfp = $currentRightFlipPageDiv;
					var _nlfp = $nextLeftFlipPageDiv;
					
					var crfpZIndex = $(_crfp).css("z-index");
					var nlfpZIndex = $(_nlfp).css("z-index");
					_crfp.style.zIndex = nlfpZIndex;
					_nlfp.style.zIndex = crfpZIndex;
				}
			},
			_switchTile:function(_index) {
				if(this.currentTileIndex == _index) return;
				
				this._switchTileImage.apply(this, [this.index, _index]);
				if(this.indicator) this.indicator.activate(_index);
				this.activateTileIndex = this.currentTileIndex = _index;
			},
			
			//---------------
			// GETTER 
			//---------------
			/**
			 * get tile instance index 
			 *
			 * @method getIndex
			 * @return {Number} Returns tile instance index
			 */
			getIndex:function() {
				return this.index;
			},
			
			/**
			 * get activated image index in tile instance 
			 *
			 * @method getActivateTileIndex
			 * @return {Number} Returns activated image index
			 */
			getActivateTileIndex:function() {
				return this.activateTileIndex;
			},
			
			/**
			 * get displayed current image index in tile instance 
			 *
			 * @method getCurrentTileIndex
			 * @return {Number} Returns displayed image index
			 */
			getCurrentTileIndex:function() {
				return this.currentTileIndex;
			},
			
			/**
			 * get indicator 
			 *
			 * @method getIndicator
			 * @return {Object} Returns indicator instance related tile instance
			 */
			getIndicator:function() {
				return this.indicator;
			},
			
			/**
			 * get image rolling status in tile
			 *
			 * @method getFlagAutoPlay
			 * @return {Boolean} Returns true or false
			 */
			getFlagAutoPlay:function() {
				return this.isAutoPlay;
			},
			
			/**
			 * get tile type string(normal, color, flip) 
			 *
			 * @method getTileType
			 * @return {String} Returns normal, color, flip
			 */
			getTileType:function() {
				return this.tileType;
			},
			
			//---------------
			// PUBLIC 
			//---------------
			/**
			 * initialize first image in tile instance
			 *
			 * @method entrance
			 * @param {Number} _speed first image apperance speed
			 * @param {Object} _scope tile instance
			 */
			entrance:function(_speed, _scope) {
				var _this = _scope;
				var _currentImage = _this.imageContainerNodeArr[_this.currentTileIndex - 1];
				if(!_currentImage) return;
				TweenMax.killTweensOf(_currentImage);
				
				switch(_this.tileType) {
					case "color" :
						_this._colorIndex++;
						if(_this._colorIndex > _this.tileColors.length) _this._colorIndex = 1;
						var colorValueStr = _this.tileColors[_this._colorIndex - 1];
					
						_this._currentColorBg = document.createElement("div");
						_this._currentColorBg.style.position = "absolute";
						_this._currentColorBg.style.width = _this.tileWidth + "px";
						_this._currentColorBg.style.height = _this.tileHeight + "px";
						_this._currentColorBg.style.backgroundColor = colorValueStr;
						_this._currentColorBg.style.top = _this.tileHeight + "px";
						_this._currentColorBg.style.left = 0 + "px";
						
						var _parentNode = _currentImage.parentNode;
						_parentNode.insertBefore(_this._currentColorBg, _parentNode.firstChild);
						
						TweenMax.to(_this._currentColorBg, _speed, {css:{top:0}, ease:Quint.easeOut});
					break;
				}
				
				_currentImage.style.top = _this.tileHeight + "px";
				_currentImage.style.left = 0 + "px";
				TweenMax.to(_currentImage, _speed, {css:{top:0}, ease:Quint.easeOut});
			},
			
			/**
			 * switch image in tile
			 *
			 * @method switchTile
			 * @param {Number} _index target image index
			 */
			switchTile:function(_index) {
				this._switchTile(_index);
			},
			
			/**
			 * activate button in indicator
			 *
			 * @method activateIndicator
			 * @param {Number} _index target button index in indicator
			 */
			activateIndicator:function(_index) {
				if(this.indicator) this.indicator.activate(_index);
			},
			
			/**
			 * switch current image to next image in tile
			 *
			 * @method update
			 * @param {Object} _scope tile instance
			 */
			update:function(_scope) {
				var _this = _scope;
				_this.activateTileIndex++;
				if(_this.imageContainerNodeArr.length < _this.activateTileIndex) _this.activateTileIndex = 1;
				_this._switchTile(_this.activateTileIndex);
			}
		};
		return Klass;
	})();
	Hcard.module.Tile = Hcard.util.Classes(null, Tile.prototype);
	
	/**
	 * rollover tile event string 
	 * 
	 * @property Hcard.module.Tile.ROLLOVER_TILE
	 * @type {String}
	 * @default "ROLLOVER_TILE"
	 */
	Hcard.module.Tile.ROLLOVER_TILE = "ROLLOVER_TILE";
	
	/**
	 * rollout tile event string 
	 * 
	 * @property Hcard.module.Tile.ROLLOUT_TILE
	 * @type {String}
	 * @default "ROLLOUT_TILE"
	 */
	Hcard.module.Tile.ROLLOUT_TILE = "ROLLOUT_TILE";
	
	/**
	 * click tile event string 
	 * 
	 * @property Hcard.module.Tile.CLICK_TILE
	 * @type {String}
	 * @default "CLICK_TILE"
	 */
	Hcard.module.Tile.CLICK_TILE = "CLICK_TILE";
	
	/**
	 * focus tile event string 
	 * 
	 * @property Hcard.module.Tile.FOCUS_IN_TILE
	 * @type {String}
	 * @default "FOCUS_IN_TILE"
	 */
	Hcard.module.Tile.FOCUS_IN_TILE = "FOCUS_IN_TILE";
	
	/**
	 * blur tile event string 
	 * 
	 * @property Hcard.module.Tile.BLUR_IN_TILE
	 * @type {String}
	 * @default "BLUR_IN_TILE"
	 */
	Hcard.module.Tile.BLUR_IN_TILE = "BLUR_IN_TILE";
	
	/**
	 * Hcard.module.Indicator
	 * @class Hcard.module.Indicator
	 * @constructor
	 */
	Hcard.nameSpace("Hcard.module.Indicator");
	var Indicator = (function() {
		var Klass;
		Klass = function(_option) {};
		
		//Constructor
		Klass.prototype = {
			__construct:function(_option) {
				this.containerNode = null;
				this.buttonContainersInContainerNodeSelector = "";
				this.buttonInbuttonContainerSelector = "";
				this.buttonContainerActivateClassName = "";
				this.buttonActivateClassName = "";
				
				//private
				this.buttonArr = [];
			},
			
			/**
			 * init instance 
			 *
			 * @method init
			 * @param {Object} _object Object include containerNode, buttonContainersInContainerNodeSelector, buttonActivateClassName properties
			 * @param {DOM} _object.containerNode indicator button으로 사용할 node를 내부에 가지는 container node
			 * @param {String} _object.buttonContainersInContainerNodeSelector _object.containerNode element 내부의 indicator button container selector String
			 * @param {String} _object.buttonInbuttonContainerSelector _object.buttonContainersInContainerNodeSelector로 선택된 indicator button container 내부의 button node selector String
			 * @param {String} _object.buttonContainerActivateClassName indicator button node 활성화/비활성화 상태 변화시, indicator button container node에 추가/삭제할 class name String
			 */
			init:function(_object) {
				var _this = this;
				
				this.containerNode = _object.containerNode;
				if(!this.containerNode) return;
				
				this.buttonContainersInContainerNodeSelector = _object.buttonContainersInContainerNodeSelector || this.buttonContainersInContainerNodeSelector;
				this.buttonInbuttonContainerSelector = _object.buttonInbuttonContainerSelector || this.buttonInbuttonContainerSelector;
				this.buttonContainerActivateClassName = _object.buttonContainerActivateClassName || this.buttonContainerActivateClassName;
				
				this._buttonContainerArr = $(this.buttonContainersInContainerNodeSelector, this.containerNode);
				var _$btnContainer;
				for(var i=0, max=this._buttonContainerArr.length; i<max; i++) {
					_$btnContainer = $(this._buttonContainerArr[i]);
					_$btnContainer.bind("mouseover mouseout click", function($evt){
						_this._btnContainerMouseInteraction($evt, _this);
					});
				}
				
				this._buttonArr = [];
				var _btn;
				for(var i=0, max=this._buttonContainerArr.length; i<max; i++) {
					_btn = $(this.buttonInbuttonContainerSelector, this._buttonContainerArr[i]).get(0);
					$(_btn).bind("focus blur", function($evt){
						_this._btnFocusBlurInteraction($evt, _this);
					});
					
					this._buttonArr.push(_btn);
				}
			},
			
			/**
			 * destroy instance 
			 *
			 * @method destroy
			 * @param {Object} _object Object
			 */
			destroy:function(_object) {
			},
			
			//---------------
			// PRIVATE 
			//---------------
			_btnContainerMouseInteraction:function($evt, _scope) {
				var _this = _scope;
				var _targetBtnContainer = $evt.currentTarget;
				
				var btnIndex = $.inArray(_targetBtnContainer, _this._buttonContainerArr) + 1;
				var paramObj;
				switch($evt.type) {
					case "mouseover" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Indicator.ROLLOVER_BUTTON,
							index:btnIndex
						};
						$(_this).trigger(paramObj);
					break;
					
					case "mouseout" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Indicator.ROLLOUT_BUTTON,
							index:btnIndex
						};
						$(_this).trigger(paramObj);
					break;
					
					case "click" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Indicator.CLICK_BUTTON,
							index:btnIndex
						};
						$(_this).trigger(paramObj);
					break;
				}
			},
			_btnFocusBlurInteraction:function($evt, _scope) {
				var _this = _scope;
				
				var _targetBtn = $evt.currentTarget;
				var btnIndex = $.inArray(_targetBtn, _this._buttonArr) + 1;
				
				var paramObj;
				switch($evt.type) {
					case "focus" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Indicator.FOCUS_BUTTON, 
							index:btnIndex
						};
						$(_this).trigger(paramObj);
					break;
					
					case "blur" :
						//$evt.preventDefault();
						paramObj = {
							type:Hcard.module.Indicator.BLUR_BUTTON,
							index:btnIndex
						};
						$(_this).trigger(paramObj);
					break;
				}
			},
			
			//---------------
			// GETTER 
			//---------------
			/**
			 * get activated button index 
			 *
			 * @method getActivateIndex
			 * @return {Number} Returns activated button index
			 */
			getActivateIndex:function() {
				return this.activateIndex;
			},
			
			/**
			 * get displayed button index 
			 *
			 * @method getCurrentIndex
			 * @return {Number} Returns displayed button index
			 */
			getCurrentIndex:function() {
				return this.currentIndex;
			},
			
			/**
			 * get Array include buttons 
			 *
			 * @method getBtnArr
			 * @return {Array} Returns Array include buttons
			 */
			getBtnArr:function() {
				return this.buttonArr;
			},
			
			//---------------
			// PUBLIC 
			//---------------
			/**
			 * activate button in indicator
			 *
			 * @method activate
			 * @param {Number} _index target button index
			 */
			activate:function(_index) {
				var _this = this;
				var _btnContainer;
				for(var i=0, max=_this._buttonContainerArr.length; i<max; i++) {
					_btnContainer = _this._buttonContainerArr[i];
					if(_btnContainer) $(_btnContainer).removeClass(_this.buttonContainerActivateClassName);
				}
				_btnContainer = _this._buttonContainerArr[_index - 1];
				if(_btnContainer) $(_btnContainer).addClass(_this.buttonContainerActivateClassName);
			}
		};
		return Klass;
	})();
	Hcard.module.Indicator = Hcard.util.Classes(null, Indicator.prototype);
	
	/**
	 * rollover indicator button event string 
	 * 
	 * @property Hcard.module.Indicator.ROLLOVER_BUTTON
	 * @type {String}
	 * @default "ROLLOVER_INDICATOR_BUTTON"
	 */
	Hcard.module.Indicator.ROLLOVER_BUTTON = "ROLLOVER_INDICATOR_BUTTON";
	
	/**
	 * rollout indicator button event string 
	 * 
	 * @property Hcard.module.Indicator.ROLLOUT_BUTTON
	 * @type {String}
	 * @default "ROLLOUT_INDICATOR_BUTTON"
	 */
	Hcard.module.Indicator.ROLLOUT_BUTTON = "ROLLOUT_INDICATOR_BUTTON";
	
	/**
	 * click indicator button event string 
	 * 
	 * @property Hcard.module.Indicator.CLICK_BUTTON
	 * @type {String}
	 * @default "CLICK_INDICATOR_BUTTON"
	 */
	Hcard.module.Indicator.CLICK_BUTTON = "CLICK_INDICATOR_BUTTON";
	
	/**
	 * focus indicator button event string 
	 * 
	 * @property Hcard.module.Indicator.FOCUS_BUTTON
	 * @type {String}
	 * @default "FOCUS_INDICATOR_BUTTON"
	 */
	Hcard.module.Indicator.FOCUS_BUTTON = "FOCUS_INDICATOR_BUTTON";
	
	/**
	 * blur indicator button event string 
	 * 
	 * @property Hcard.module.Indicator.BLUR_BUTTON
	 * @type {String}
	 * @default "BLUR_INDICATOR_BUTTON"
	 */
	Hcard.module.Indicator.BLUR_BUTTON = "BLUR_INDICATOR_BUTTON";
	
	
	/**
	 * Hcard.module.TileUpdateController
	 * @class Hcard.module.TileUpdateController
	 * @constructor
	 */
	Hcard.nameSpace("Hcard.module.TileUpdateController");
	var TileUpdateController = (function() {
		var Klass;
		Klass = function(_option) {};
		
		function setTimer(_scope) {
			var _this = _scope;
			removeTimer(_this);
			_this._timer = new Hcard.util.ControlUtil.SimpleTimer(_this._delayTimeUpdate, _this, timerInteraction, [_this]);
		}
		
		function removeTimer(_scope) {
			var _this = _scope;
			if(_this._timer) {
				_this._timer.destroy();
				_this._timer = null;
			}
		}
		
		function stopTimer(_scope) {
			var _this = _scope;
			if(_this._timer) _this._timer.stop();
		}
		
		function startTimer(_scope) {
			var _this = _scope;
			if(_this._timer) _this._timer.start();
		}
		
		function timerInteraction(_scope) {
			var _this = _scope;
			
			if(_this._tileArrUpdateOneRound.length <= 0) return;
			
			_this._delayTimeUpdate = Hcard.util.MathUtil.getRandomIntMinToMax(_this.minDelayUpdateTile*1000, _this.maxDelayUpdateTile*1000);
			setTimer(_this);
			startTimer(_this);
			
			//tile update cycle이 완료되었다면, tile update cycle을 초기화한다.
			if(_this._isCompleteUpdateTilesOneRound) {
				Hcard.util.ArrayUtil.randomSort(_this._tileArrUpdateOneRound);
				_this._updatedTilesIndex = 0;
				_this._isCompleteUpdateTilesOneRound = false;
			}
			if(_this._updatedTilesIndex >= _this._tileArrUpdateOneRound.length) {
				Hcard.util.ArrayUtil.randomSort(_this._tileArrUpdateOneRound);
				_this._updatedTilesIndex = 0;
				_this._isCompleteUpdateTilesOneRound = false;
			}
			
			//update될 tile의 갯수를 2개 이하의 숫자로 정한다.
			var updateTileNum;
			if(_this._tileArrUpdateOneRound.length <= 1) {
				updateTileNum = 1;
			}else{
				updateTileNum = Hcard.util.MathUtil.getRandomIntMinToMax(1, 2);
			}
			
			var tmpRollingStartIndex = _this._updatedTilesIndex;
			var count = 0;
			var _tmpTile;
			for(var i=tmpRollingStartIndex, max=_this._tileArrUpdateOneRound.length; i<max; i++) {
				_tmpTile = _this._tileArrUpdateOneRound[i];
				if(!_tmpTile.getFlagAutoPlay()) { //auto play 상태가 아닌 tile은 update하지 않는다.
					_this._updatedTilesIndex++;
					continue;
				}
				if(_tmpTile.getIndex() == _this._mouseRolloverTileIndex) { //mouseover된 tile은 update하지 않는다.
					_this._updatedTilesIndex++;
					continue;
				}
				if(_tmpTile.getIndex() == _this._focusInTileIndex) { //tile 내부의 indicator,imageContainer, playPauseBtn에 focus가 위치한 tile은 update하지 않는다.
					_this._updatedTilesIndex++;
					continue;
				}
				updateTileNum--;
				if(updateTileNum >= 0) {
					TweenMax.delayedCall(count * _this.gapTileUpdate, _tmpTile.update, [_tmpTile]);
					_this._updatedTilesIndex++;
					count++;
				}
			}
			
			if(_this._updatedTilesIndex >= _this._tileArrUpdateOneRound.length) { //tile update cycle 완료되었다면, cycle 완료를 알리는 변수인  _this._isCompleteUpdateTilesOneRound를 true로 설정한다.
				_this._isCompleteUpdateTilesOneRound = true;
			}
		}
		
		//Constructor
		Klass.prototype = {
			__construct:function(_option) {
				this.tileArr = null;
				this.minDelayUpdateTile = 4;
				this.maxDelayUpdateTile = 6;
				this.gapTileUpdate = 0.4;
				this.gapEntranceTile = 0.2;
				this.speedEntranceTile = 0.9;
				
				//private
				this._timer;
				this._delayTimeUpdate = 4000;
				
				this._mouseRolloverTileIndex = -1; //mouseover된 tile의 index
				this._focusInTileIndex = -1; //focus된 tile의 index
				
				this._tileArrUpdateOneRound = null; //tile들의 auto update cycle 순서를 나타내는 random sorted tile array
				this._isCompleteUpdateTilesOneRound = false; //tile들의 update cycle이 한번 완전히 완료되었는지의 여부
				this._updatedTilesIndex = 0; //update cycle 안에서 현재 auto update된 tile들의 array 내부 index
			},
			
			/**
			 * init instance 
			 *
			 * @method init
			 * @param {Object} _object Object include tiles, minDelayUpdateTile, maxDelayUpdateTile, gapTileUpdate properties.
			 * @param {Array} _object.tiles Hcard.module.Tile Class의 instance를 담고 있는 Array
			 * @param {Number} _object.minDelayUpdateTile tile instance들의 minimum auto rolling delay (second). default value is 4
			 * @param {Number} _object.maxDelayUpdateTile tile instance들의 maximum auto rolling delay (second). default value is 6
			 * @param {Number} _object.gapTileUpdate 복수의 tile instance들의 update가 이루어질 때, tile instance의 update() method 호출 간격 (second). default value is 0.4
			 */
			init:function(_object) {
				var _this = this;
				
				this.tileArr = _object.tiles;
				if(!this.tileArr) return;
				
				this._tileArrUpdateOneRound = this.tileArr.slice(0);
				Hcard.util.ArrayUtil.randomSort(this._tileArrUpdateOneRound);
				
				var _$tile;
				for(var i=0, max=this.tileArr.length; i<max; i++) {
					_$tile = $(this.tileArr[i]);
					if(_$tile) {
						_$tile.bind(Hcard.module.Tile.ROLLOVER_TILE, function($evt) {
							_this._tileMouseInteraction($evt, _this);
						});
						_$tile.bind(Hcard.module.Tile.ROLLOUT_TILE, function($evt) {
							_this._tileMouseInteraction($evt, _this);
						});
						_$tile.bind(Hcard.module.Tile.CLICK_TILE, function($evt) {
							_this._tileMouseInteraction($evt, _this);
						});
						
						_$tile.bind(Hcard.module.Tile.FOCUS_IN_TILE, function($evt) {
							_this._tilePlayPauseBtnFocusBlurInteraction($evt, _this);
						});
						_$tile.bind(Hcard.module.Tile.BLUR_IN_TILE, function($evt) {
							_this._tilePlayPauseBtnFocusBlurInteraction($evt, _this);
						});
					}
				}
				
				this.minDelayUpdateTile = _object.minDelayUpdateTile || this.minDelayUpdateTile;
				this.maxDelayUpdateTile = _object.maxDelayUpdateTile || this.maxDelayUpdateTile;
				this.gapTileUpdate = _object.gapTileUpdate || this.gapTileUpdate;
				this._delayTimeUpdate = Hcard.util.MathUtil.getRandomIntMinToMax(this.minDelayUpdateTile*1000, this.maxDelayUpdateTile*1000);
			},
			
			/**
			 * destroy instance 
			 *
			 * @method destroy
			 * @param {Object} _object Object
			 */
			destroy:function(_object) {
				removeTimer(this);
			},
			
			//---------------
			// PRIVATE 
			//---------------
			_tileMouseInteraction:function($evt, _scope) {
				var _this = _scope;
				var _targetTile = $evt.currentTarget;
				var tileIndex = _targetTile.getIndex();
				
				var paramObj;
				switch($evt.type) {
					case Hcard.module.Tile.ROLLOVER_TILE :
						//console.log("Controller ROLLOVER_TILE");
						_this._mouseRolloverTileIndex = tileIndex;
					break;
					
					case Hcard.module.Tile.ROLLOUT_TILE :
						//console.log("Controller ROLLOUT_TILE");
						_this._mouseRolloverTileIndex = -1;
					break;
					
					case Hcard.module.Tile.CLICK_TILE :
					break;
				}
			},
			_tilePlayPauseBtnFocusBlurInteraction:function($evt, _scope) {
				var _this = _scope;
				var tileIndex = $evt.index;
				
				var paramObj;
				switch($evt.type) {
					case Hcard.module.Tile.FOCUS_IN_TILE :
						//console.log("Controller FOCUS_IN_TILE");
						_this._focusInTileIndex = tileIndex;
					break;
					
					case Hcard.module.Tile.BLUR_IN_TILE :
						//console.log("Controller BLUR_IN_TILE");
						_this._focusInTileIndex = -1;
					break;
				}
			},
			
			//---------------
			// PUBLIC 
			//---------------
			/**
			 * init() method의 parameter _object.tiles에 담긴 tile instance들의 entrance() method 순차적 호출. tile instance의 첫번째 image 등장 motion 수행.
			 *
			 * @method entrance
			 * @param {Object} _object Object include gapEntranceTile, speedEntranceTile properties. 
			 * @param {Number} _object.gapEntranceTile init() method의 parameter _object.tiles에 담긴 tile instance들의 entrance() method 호출 간격 (second). default value is 0.2
			 * @param {Number} _object.speedEntranceTile tile instance의 entrance() method로 전달될 image 등장 speed (second). default value is 0.9
			 */
			entrance:function(_object) {
				this.gapEntranceTile = _object.gapEntranceTile || this.gapEntranceTile;
				this.speedEntranceTile = _object.speedEntranceTile || this.speedEntranceTile;
				
				var cloneTileArr = this.tileArr.slice(0);
				Hcard.util.ArrayUtil.randomSort(cloneTileArr);
				
				var _tileObj;
				for (var i = 0, max = cloneTileArr.length; i < max; i++) {
					_tileObj = cloneTileArr[i];
					TweenMax.delayedCall(this.gapEntranceTile * i, _tileObj.entrance, [this.speedEntranceTile, _tileObj]);
				}
			},
			
			/**
			 * init() method의 option Object.tiles로 전달된 Hcard.module.Tile instance들의 auto image update rolling를 시작합니다.
			 *
			 * @method start
			 */
			start:function() {
				setTimer(this);
				startTimer(this);
			},
			
			/**
			 * init() method의 option Object.tiles로 전달된 Hcard.module.Tile instance들의 auto image update rolling를 정지합니다.
			 *
			 * @method stop
			 */
			stop:function() {
				removeTimer(this);
			}
		};
		return Klass;
	})();
	Hcard.module.TileUpdateController = Hcard.util.Classes(null, TileUpdateController.prototype);
	
})(jQuery);
