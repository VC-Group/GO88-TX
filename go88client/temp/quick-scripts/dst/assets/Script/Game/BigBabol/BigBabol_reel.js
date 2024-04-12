
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BigBabol/BigBabol_reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c486/mpTFEsoXHhkW8UDhO', 'BigBabol_reel');
// Script/Game/BigBabol/BigBabol_reel.js

'use strict';

cc.Class({

	extends: cc.Component,

	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		this.icons = [];
		var self = this;
		Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
			var icon = cc.instantiate(self.RedT.iconPrefab);
			self.node.addChild(icon);
			icon = icon.getComponent('BigBabol_reel_item');
			icon.init(self.RedT);
			if (index > 2 && index < 23) {
				icon.stop();
				icon.random();
			}
			return icon;
		})).then(function (result) {
			_this.icons = result;
			_this.icons[25].setIcon(_this.icons[2].random());
			_this.icons[24].setIcon(_this.icons[1].random());
			_this.icons[23].setIcon(_this.icons[0].random());
		});
	},

	spin: function spin(index) {
		this.node.stopAllActions();
		var self = this;
		var d = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 380))).easing(cc.easeInOut(2));
		var p = cc.callFunc(function () {
			//this.RedT.copy();
			this.node.y = 0;
			this.RedT.random();
		}, this);
		var p2 = cc.callFunc(function () {
			if (index === 0) {
				this.RedT.copy();
			}
			this.node.y = 0;
		}, this);

		if (index === 2) {
			var onEf = cc.callFunc(function () {
				this.RedT.hieuUng();
			}, this);
			this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p, onEf));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCaWdCYWJvbC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmlnQmFib2wvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJpZ0JhYm9sXFxCaWdCYWJvbF9yZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJpY29ucyIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaW5kZXgiLCJpY29uIiwiaW5zdGFudGlhdGUiLCJpY29uUHJlZmFiIiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50Iiwic3RvcCIsInJhbmRvbSIsInRoZW4iLCJyZXN1bHQiLCJzZXRJY29uIiwic3BpbiIsInN0b3BBbGxBY3Rpb25zIiwiZCIsIm1vdmVUbyIsInYyIiwieCIsImhlaWdodCIsImVhc2luZyIsImVhc2VJbk91dCIsInAiLCJjYWxsRnVuYyIsInkiLCJwMiIsImNvcHkiLCJvbkVmIiwiaGlldVVuZyIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7O0FBRVJDLFVBQVNGLEdBQUdHLFNBRko7O0FBSVJDLEtBSlEsZ0JBSUhDLEdBSkcsRUFJQztBQUFBOztBQUNSLE9BQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNBLE9BQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0EsTUFBSUMsT0FBUSxJQUFaO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCLENBQXZCLEVB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QUFwQjtBQUNELEVBakRPO0FBa0RSakIsT0FBTSxnQkFBVTtBQUNmLE9BQUtILElBQUwsQ0FBVVMsY0FBVjtBQUNBLE9BQUtuQixJQUFMLENBQVUrQixJQUFWO0FBQ0EsT0FBS3JCLElBQUwsQ0FBVW1CLENBQVYsR0FBYyxDQUFkO0FBQ0E7QUF0RE8sQ0FBVCIsImZpbGUiOiJCaWdCYWJvbF9yZWVsLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCaWdCYWJvbCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblxyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0aW5pdChvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdFx0dGhpcy5pY29ucyA9IFtdO1xyXG5cdFx0dmFyIHNlbGYgID0gdGhpcztcclxuXHRcdFByb21pc2UuYWxsKFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLm1hcChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuXHRcdFx0dmFyIGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLlJlZFQuaWNvblByZWZhYik7XHJcblx0XHRcdHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcclxuXHRcdFx0aWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdCaWdCYWJvbF9yZWVsX2l0ZW0nKTtcclxuXHRcdFx0aWNvbi5pbml0KHNlbGYuUmVkVCk7XHJcblx0XHRcdGlmIChpbmRleCA+IDIgJiYgaW5kZXggPCAyMykge1xyXG5cdFx0XHRcdGljb24uc3RvcCgpO1xyXG5cdFx0XHRcdGljb24ucmFuZG9tKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGljb247XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMuaWNvbnMgPSByZXN1bHQ7XHJcblx0XHRcdHRoaXMuaWNvbnNbMjVdLnNldEljb24odGhpcy5pY29uc1syXS5yYW5kb20oKSk7XHJcblx0XHRcdHRoaXMuaWNvbnNbMjRdLnNldEljb24odGhpcy5pY29uc1sxXS5yYW5kb20oKSk7XHJcblx0XHRcdHRoaXMuaWNvbnNbMjNdLnNldEljb24odGhpcy5pY29uc1swXS5yYW5kb20oKSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHNwaW46IGZ1bmN0aW9uKGluZGV4KXtcclxuXHRcdHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dmFyIGQgPSBjYy5tb3ZlVG8oMSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LTM4MCkpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDIpKTtcclxuXHRcdHZhciBwID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdC8vdGhpcy5SZWRULmNvcHkoKTtcclxuXHRcdFx0dGhpcy5ub2RlLnkgPSAwO1xyXG5cdFx0XHR0aGlzLlJlZFQucmFuZG9tKCk7XHJcblx0XHR9LCB0aGlzKTtcclxuXHRcdHZhciBwMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHtcclxuXHRcdFx0XHR0aGlzLlJlZFQuY29weSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMubm9kZS55ID0gMDtcclxuXHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdGlmIChpbmRleCA9PT0gMil7XHJcblx0XHRcdHZhciBvbkVmID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5SZWRULmhpZXVVbmcoKTtcclxuXHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KjAuMSksIGQsIHAsIG9uRWYpKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBwMikpO1xyXG5cdH0sXHJcblx0c3RvcDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cdFx0dGhpcy5SZWRULmNvcHkoKTtcclxuXHRcdHRoaXMubm9kZS55ID0gMDtcclxuXHR9LFxyXG59KTtcclxuIl19