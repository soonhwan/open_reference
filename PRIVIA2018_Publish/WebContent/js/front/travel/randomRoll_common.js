/*
 * IPL Ver 1.0
 */
var Hcard = Hcard || {};
(function() {
	Hcard.nameSpace = function(_str){
		var parts = _str.split("."),
			parent = Hcard,
			i, iTotal;
		if(parts[0]==="Hcard"){
			parts = parts.slice(1);
		}
		iTotal = parts.length;
		for( i=0; i<iTotal; ++i ){
			if( typeof parent[parts[i]] === "undefined" ){
				parent[parts[i]] = {};
			}
			parent = parent[parts[i]];
		}
		return parent;
	}
	
	Hcard.nameSpace("Hcard.util.Classes");
	Hcard.util.Classes = (function(){
		var F = function () {};
		return function(Parent, props){
			var Child, i;
			//1. construct apply
			Child = function() {
				if (Child.uber && Child.uber.hasOwnProperty('__construct')) {
					Child.uber.__construct.apply(this, arguments);
				}
				if(Child.prototype.hasOwnProperty('__construct')) {
					Child.prototype.__construct.apply(this, arguments);
				}
			}
			
			//2. 상속
			Parent = Parent || {};
			F.prototype = Parent.prototype;
			Child.prototype = new F();
			Child.uber = Parent.prototype;
			Child.prototype.constructor = Child;
			
			//3. 구현 메서드를 추가한다.
			for (i in props) {
				if (props.hasOwnProperty(i)) {
					Child.prototype[i] = props[i];
				}
			}
			return Child;
		}
	})();
})();
