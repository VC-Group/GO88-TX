
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/VuongQuocRed_reel/VuongQuocRed_reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd81dcoZgsNLupexKbEe58JH', 'VuongQuocRed_reel');
// Script/Game/VuongQuocRed/VuongQuocRed_reel/VuongQuocRed_reel.js

'use strict';

cc.Class({
	extends: cc.Component,
	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		this.icons = [];
		var self = this;
		var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		Promise.all(data.map(function (obj, index) {
			var icon = cc.instantiate(self.RedT.iconPrefab);
			self.node.addChild(icon);
			icon = icon.getComponent('VuongQuocRed_items');
			icon.init(self.RedT);
			if (index > 2 && index < data.length - 3) {
				//icon.stop();
				icon.random();
			}
			return icon;
		})).then(function (result) {
			_this.icons = result;
			_this.icons[_this.icons.length - 1].setIcon(_this.icons[4].random());
			_this.icons[_this.icons.length - 2].setIcon(_this.icons[3].random());
			_this.icons[_this.icons.length - 3].setIcon(_this.icons[2].random());
			_this.icons[_this.icons.length - 4].setIcon(_this.icons[1].random());
			_this.icons[_this.icons.length - 5].setIcon(_this.icons[0].random());
		});
	},

	spin: function spin(index) {
		this.node.stopAllActions();
		var self = this;
		var d = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 472))).easing(cc.easeInOut(3));
		var p2 = cc.callFunc(function () {
			if (index === 0) {
				this.RedT.copy();
			}
			this.node.y = 0;
		}, this);

		if (index === 4) {
			var EF = cc.callFunc(function () {
				this.RedT.EF_vuathang();
				this.node.y = 0;
				this.RedT.random();
				this.RedT.hieuUng();
			}, this);
			this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, EF));
		} else this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p2));
	},
	stop: function stop() {
		this.node.stopAllActions();
		this.RedT.copy();
		this.node.y = 0;
	}
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxWdW9uZ1F1b2NSZWRfcmVlbC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcVnVvbmdRdW9jUmVkX3JlZWwvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcVnVvbmdRdW9jUmVkX3JlZWxcXFZ1b25nUXVvY1JlZF9yZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJpY29ucyIsInNlbGYiLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImluZGV4IiwiaWNvbiIsImluc3RhbnRpYXRlIiwiaWNvblByZWZhYiIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImxlbmd0aCIsInJhbmRvbSIsInRoZW4iLCJyZXN1bHQiLCJzZXRJY29uIiwic3BpbiIsInN0b3BBbGxBY3Rpb25zIiwiZCIsIm1vdmVUbyIsInYyIiwieCIsImhlaWdodCIsImVhc2luZyIsImVhc2VJbk91dCIsInAyIiwiY2FsbEZ1bmMiLCJjb3B5IiwieSIsIkVGIiwiRUZfdnVhdGhhbmciLCJoaWV1VW5nIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjtBQUVSQyxLQUZRLGdCQUVIQyxHQUZHLEVBRUM7QUFBQTs7QUFDUixPQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQSxPQUFLRSxLQUFMLEdBQWEsRUFBYjtBQUNBLE1BQUlDLE9BQVEsSUFBWjtBQUNBLE1BQUlDLE9BQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFB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QUFMLENBQVVrQyxPQUFWO0FBQ0EsSUFMUSxFQUtOLElBTE0sQ0FBVDtBQU1BLFFBQUt2QixJQUFMLENBQVV3QixTQUFWLENBQW9CekMsR0FBRzBDLFFBQUgsQ0FBWTFDLEdBQUcyQyxTQUFILENBQWE5QixRQUFNLEdBQW5CLENBQVosRUFBcUNjLENBQXJDLEVBQXdDVyxFQUF4QyxDQUFwQjtBQUNBLEdBUkQsTUFTQyxLQUFLckIsSUFBTCxDQUFVd0IsU0FBVixDQUFvQnpDLEdBQUcwQyxRQUFILENBQVkxQyxHQUFHMkMsU0FBSCxDQUFhOUIsUUFBTSxHQUFuQixDQUFaLEVBQXFDYyxDQUFyQyxFQUF3Q08sRUFBeEMsQ0FBcEI7QUFDRCxFQWhETztBQWlEUlUsT0FBTSxnQkFBVTtBQUNmLE9BQUszQixJQUFMLENBQVVTLGNBQVY7QUFDQSxPQUFLcEIsSUFBTCxDQUFVOEIsSUFBVjtBQUNBLE9BQUtuQixJQUFMLENBQVVvQixDQUFWLEdBQWMsQ0FBZDtBQUNBO0FBckRPLENBQVQiLCJmaWxlIjoiVnVvbmdRdW9jUmVkX3JlZWwuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXFZ1b25nUXVvY1JlZF9yZWVsIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblx0aW5pdChvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdFx0dGhpcy5pY29ucyA9IFtdO1xyXG5cdFx0dmFyIHNlbGYgID0gdGhpcztcclxuXHRcdHZhciBkYXRhID0gWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXTtcclxuXHRcdFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG5cdFx0XHR2YXIgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuUmVkVC5pY29uUHJlZmFiKTtcclxuXHRcdFx0c2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xyXG5cdFx0XHRpY29uID0gaWNvbi5nZXRDb21wb25lbnQoJ1Z1b25nUXVvY1JlZF9pdGVtcycpO1xyXG5cdFx0XHRpY29uLmluaXQoc2VsZi5SZWRUKTtcclxuXHRcdFx0aWYgKGluZGV4ID4gMiAmJiBpbmRleCA8IGRhdGEubGVuZ3RoLTMpIHtcclxuXHRcdFx0XHQvL2ljb24uc3RvcCgpO1xyXG5cdFx0XHRcdGljb24ucmFuZG9tKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGljb247XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMuaWNvbnMgPSByZXN1bHQ7XHJcblx0XHRcdHRoaXMuaWNvbnNbdGhpcy5pY29ucy5sZW5ndGgtMV0uc2V0SWNvbih0aGlzLmljb25zWzRdLnJhbmRvbSgpKTtcclxuXHRcdFx0dGhpcy5pY29uc1t0aGlzLmljb25zLmxlbmd0aC0yXS5zZXRJY29uKHRoaXMuaWNvbnNbM10ucmFuZG9tKCkpO1xyXG5cdFx0XHR0aGlzLmljb25zW3RoaXMuaWNvbnMubGVuZ3RoLTNdLnNldEljb24odGhpcy5pY29uc1syXS5yYW5kb20oKSk7XHJcblx0XHRcdHRoaXMuaWNvbnNbdGhpcy5pY29ucy5sZW5ndGgtNF0uc2V0SWNvbih0aGlzLmljb25zWzFdLnJhbmRvbSgpKTtcclxuXHRcdFx0dGhpcy5pY29uc1t0aGlzLmljb25zLmxlbmd0aC01XS5zZXRJY29uKHRoaXMuaWNvbnNbMF0ucmFuZG9tKCkpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRzcGluOiBmdW5jdGlvbihpbmRleCl7XHJcblx0XHR0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHZhciBkID0gY2MubW92ZVRvKDEsIGNjLnYyKHRoaXMubm9kZS54LC0odGhpcy5ub2RlLmhlaWdodC00NzIpKSkuZWFzaW5nKGNjLmVhc2VJbk91dCgzKSk7XHJcblx0XHR2YXIgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XHJcblx0XHRcdFx0dGhpcy5SZWRULmNvcHkoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm5vZGUueSA9IDA7XHJcblx0XHR9LCB0aGlzKTtcclxuXHJcblx0XHRpZiAoaW5kZXggPT09IDQpe1xyXG5cdFx0XHR2YXIgRUYgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aGlzLlJlZFQuRUZfdnVhdGhhbmcoKTtcclxuXHRcdFx0XHR0aGlzLm5vZGUueSA9IDA7XHJcblx0XHRcdFx0dGhpcy5SZWRULnJhbmRvbSgpO1xyXG5cdFx0XHRcdHRoaXMuUmVkVC5oaWV1VW5nKCk7XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBFRikpO1xyXG5cdFx0fSBlbHNlXHJcblx0XHRcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KjAuMSksIGQsIHAyKSk7XHJcblx0fSxcclxuXHRzdG9wOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblx0XHR0aGlzLlJlZFQuY29weSgpO1xyXG5cdFx0dGhpcy5ub2RlLnkgPSAwO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=