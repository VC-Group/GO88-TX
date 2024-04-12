
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Zeus/reels/Zeus_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2ae4rWXqlM36UY11Ju7VVp', 'Zeus_item');
// Script/Game/Zeus/reels/Zeus_item.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {
		//icon:  cc.Node,
		icons: {
			default: [],
			type: cc.Prefab
		}
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	random: function random() {
		var icon = Math.random() * 11 >> 0;
		this.setIcon(icon);
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		// if (icon == 10) {
		// 	this.wind.active = true;
		// 	this.icon.node.active = this.free.active = this.bonus.active = this.hu.active = false;
		// }else if (icon == 9) {
		// 	this.hu.active = true;
		// 	this.icon.node.active = this.free.active = this.bonus.active = this.wind.active = false;
		// }else if (icon == 8) {
		// 	this.bonus.active = true;
		// 	this.icon.node.active = this.free.active = this.wind.active = this.hu.active = false;
		// }else if (icon == 7) {
		// 	this.free.active = true;
		// 	this.icon.node.active = this.wind.active = this.bonus.active = this.hu.active = false;
		// }else{
		// 	this.icon.node.active = true;
		// 	this.icon.spriteFrame = this.RedT.icons[icon];
		// 	this.free.active = this.wind.active = this.bonus.active = this.hu.active = false;
		// }
		this.node.removeAllChildren();
		var child = cc.instantiate(this.icons[icon]);
		child.setScale(cc.v2(0.9, 0.9));
		this.node.addChild(child);
		if (data) {
			this.data = icon;
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1c1xccmVlbHMvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxyZWVscy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1c1xccmVlbHNcXFpldXNfaXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpY29ucyIsImRlZmF1bHQiLCJ0eXBlIiwiUHJlZmFiIiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJyYW5kb20iLCJpY29uIiwiTWF0aCIsInNldEljb24iLCJkYXRhIiwibm9kZSIsInJlbW92ZUFsbENoaWxkcmVuIiwiY2hpbGQiLCJpbnN0YW50aWF0ZSIsInNldFNjYWxlIiwidjIiLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7QUFFUkMsYUFBWTtBQUNYO0FBQ0FDLFNBQU87QUFDTkMsWUFBUyxFQURIO0FBRU5DLFNBQU1QLEdBQUdRO0FBRkg7QUFGSSxFQUZKO0FBU1JDLEtBVFEsZ0JBU0hDLEdBVEcsRUFTQztBQUNSLE9BQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNBLEVBWE87O0FBWVJFLFNBQVEsa0JBQVU7QUFDakIsTUFBSUMsT0FBUUMsS0FBS0YsTUFBTCxLQUFjLEVBQWYsSUFBb0IsQ0FBL0I7QUFDQSxPQUFLRyxPQUFMLENBQWFGLElBQWI7QUFDQSxTQUFPQSxJQUFQO0FBQ0EsRUFoQk87QUFpQlJFLFVBQVMsaUJBQVNGLElBQVQsRUFBNEI7QUFBQSxNQUFiRyxJQUFhLHVFQUFOLEtBQU07O0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFLQyxJQUFMLENBQVVDLGlCQUFWO0FBQ0EsTUFBSUMsUUFBUW5CLEdBQUdvQixXQUFILENBQWUsS0FBS2YsS0FBTCxDQUFXUSxJQUFYLENBQWYsQ0FBWjtBQUNBTSxRQUFNRSxRQUFOLENBQWVyQixHQUFHc0IsRUFBSCxDQUFNLEdBQU4sRUFBVyxHQUFYLENBQWY7QUFDQSxPQUFLTCxJQUFMLENBQVVNLFFBQVYsQ0FBbUJKLEtBQW5CO0FBQ0EsTUFBSUgsSUFBSixFQUFVO0FBQ1QsUUFBS0EsSUFBTCxHQUFZSCxJQUFaO0FBQ0E7QUFDRDtBQTFDTyxDQUFUIiwiZmlsZSI6IlpldXNfaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFpldXNcXHJlZWxzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0Ly9pY29uOiAgY2MuTm9kZSxcclxuXHRcdGljb25zOiB7XHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0eXBlOiBjYy5QcmVmYWIsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0aW5pdChvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdH0sXHJcblx0cmFuZG9tOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIGljb24gPSAoTWF0aC5yYW5kb20oKSoxMSk+PjA7XHJcblx0XHR0aGlzLnNldEljb24oaWNvbik7XHJcblx0XHRyZXR1cm4gaWNvbjtcclxuXHR9LFxyXG5cdHNldEljb246IGZ1bmN0aW9uKGljb24sIGRhdGEgPSBmYWxzZSl7XHJcblx0XHQvLyBpZiAoaWNvbiA9PSAxMCkge1xyXG5cdFx0Ly8gXHR0aGlzLndpbmQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vIFx0dGhpcy5pY29uLm5vZGUuYWN0aXZlID0gdGhpcy5mcmVlLmFjdGl2ZSA9IHRoaXMuYm9udXMuYWN0aXZlID0gdGhpcy5odS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdC8vIH1lbHNlIGlmIChpY29uID09IDkpIHtcclxuXHRcdC8vIFx0dGhpcy5odS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gXHR0aGlzLmljb24ubm9kZS5hY3RpdmUgPSB0aGlzLmZyZWUuYWN0aXZlID0gdGhpcy5ib251cy5hY3RpdmUgPSB0aGlzLndpbmQuYWN0aXZlID0gZmFsc2U7XHJcblx0XHQvLyB9ZWxzZSBpZiAoaWNvbiA9PSA4KSB7XHJcblx0XHQvLyBcdHRoaXMuYm9udXMuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vIFx0dGhpcy5pY29uLm5vZGUuYWN0aXZlID0gdGhpcy5mcmVlLmFjdGl2ZSA9IHRoaXMud2luZC5hY3RpdmUgPSB0aGlzLmh1LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0Ly8gfWVsc2UgaWYgKGljb24gPT0gNykge1xyXG5cdFx0Ly8gXHR0aGlzLmZyZWUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdC8vIFx0dGhpcy5pY29uLm5vZGUuYWN0aXZlID0gdGhpcy53aW5kLmFjdGl2ZSA9IHRoaXMuYm9udXMuYWN0aXZlID0gdGhpcy5odS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdC8vIH1lbHNle1xyXG5cdFx0Ly8gXHR0aGlzLmljb24ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Ly8gXHR0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLlJlZFQuaWNvbnNbaWNvbl07XHJcblx0XHQvLyBcdHRoaXMuZnJlZS5hY3RpdmUgPSB0aGlzLndpbmQuYWN0aXZlID0gdGhpcy5ib251cy5hY3RpdmUgPSB0aGlzLmh1LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0Ly8gfVxyXG5cdFx0dGhpcy5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcblx0XHR2YXIgY2hpbGQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmljb25zW2ljb25dKTtcclxuXHRcdGNoaWxkLnNldFNjYWxlKGNjLnYyKDAuOSwgMC45KSk7XHJcblx0XHR0aGlzLm5vZGUuYWRkQ2hpbGQoY2hpbGQpO1xyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5kYXRhID0gaWNvbjtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19