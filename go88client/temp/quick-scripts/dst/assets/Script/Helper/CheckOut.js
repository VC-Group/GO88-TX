
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/CheckOut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3988dLBD7VPLowq6ozkuvOs', 'CheckOut');
// Script/Helper/CheckOut.js

"use strict";

cc.Class({
	extends: cc.Sprite,

	properties: {
		nut: {
			default: null,
			type: cc.Sprite
		},
		NutOn: {
			default: null,
			type: cc.SpriteFrame
		},
		NutOff: {
			default: null,
			type: cc.SpriteFrame
		},
		BgOn: {
			default: null,
			type: cc.SpriteFrame
		},
		BgOff: {
			default: null,
			type: cc.SpriteFrame
		},
		isChecked: false
	},
	onLoad: function onLoad() {
		this.OnUpdate();
	},


	OnChangerClick: function OnChangerClick() {
		this.isChecked = !this.isChecked;
		this.OnUpdate();
	},
	OnUpdate: function OnUpdate() {
		if (!this.isChecked) {
			this.nut.node.stopAllActions();
			this.nut.node.runAction(cc.sequence(cc.moveTo(0.1, cc.v2(-30, 0)), cc.callFunc(function () {
				this.spriteFrame = this.BgOff;
				this.nut.spriteFrame = this.NutOff;
			}, this)));
		} else {
			this.nut.node.stopAllActions();
			this.nut.node.runAction(cc.sequence(cc.moveTo(0.1, cc.v2(30, 0)), cc.callFunc(function () {
				this.spriteFrame = this.BgOn;
				this.nut.spriteFrame = this.NutOn;
			}, this)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcQ2hlY2tPdXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJTcHJpdGUiLCJwcm9wZXJ0aWVzIiwibnV0IiwiZGVmYXVsdCIsInR5cGUiLCJOdXRPbiIsIlNwcml0ZUZyYW1lIiwiTnV0T2ZmIiwiQmdPbiIsIkJnT2ZmIiwiaXNDaGVja2VkIiwib25Mb2FkIiwiT25VcGRhdGUiLCJPbkNoYW5nZXJDbGljayIsIm5vZGUiLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwibW92ZVRvIiwidjIiLCJjYWxsRnVuYyIsInNwcml0ZUZyYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csTUFESjs7QUFHUkMsYUFBWTtBQUNYQyxPQUFLO0FBQ0pDLFlBQVMsSUFETDtBQUVKQyxTQUFNUCxHQUFHRztBQUZMLEdBRE07QUFLWEssU0FBTztBQUNORixZQUFTLElBREg7QUFFTkMsU0FBTVAsR0FBR1M7QUFGSCxHQUxJO0FBU1hDLFVBQVE7QUFDUEosWUFBUyxJQURGO0FBRVBDLFNBQU1QLEdBQUdTO0FBRkYsR0FURztBQWFYRSxRQUFNO0FBQ0xMLFlBQVMsSUFESjtBQUVMQyxTQUFNUCxHQUFHUztBQUZKLEdBYks7QUFpQlhHLFNBQU87QUFDTk4sWUFBUyxJQURIO0FBRU5DLFNBQU1QLEdBQUdTO0FBRkgsR0FqQkk7QUFxQlhJLGFBQVc7QUFyQkEsRUFISjtBQTBCUkMsT0ExQlEsb0JBMEJDO0FBQ1IsT0FBS0MsUUFBTDtBQUNBLEVBNUJPOzs7QUE4QlJDLGlCQUFnQiwwQkFBVztBQUMxQixPQUFLSCxTQUFMLEdBQWlCLENBQUMsS0FBS0EsU0FBdkI7QUFDQSxPQUFLRSxRQUFMO0FBQ0EsRUFqQ087QUFrQ1JBLFdBQVUsb0JBQVc7QUFDcEIsTUFBRyxDQUFDLEtBQUtGLFNBQVQsRUFBbUI7QUFDbEIsUUFBS1IsR0FBTCxDQUFTWSxJQUFULENBQWNDLGNBQWQ7QUFDQSxRQUFLYixHQUFMLENBQVNZLElBQVQsQ0FBY0UsU0FBZCxDQUF3Qm5CLEdBQUdvQixRQUFILENBQVlwQixHQUFHcUIsTUFBSCxDQUFVLEdBQVYsRUFBZXJCLEdBQUdzQixFQUFILENBQU0sQ0FBQyxFQUFQLEVBQVcsQ0FBWCxDQUFmLENBQVosRUFBMkN0QixHQUFHdUIsUUFBSCxDQUFZLFlBQVc7QUFDekYsU0FBS0MsV0FBTCxHQUFtQixLQUFLWixLQUF4QjtBQUNBLFNBQUtQLEdBQUwsQ0FBU21CLFdBQVQsR0FBdUIsS0FBS2QsTUFBNUI7QUFDQSxJQUhrRSxFQUdoRSxJQUhnRSxDQUEzQyxDQUF4QjtBQUlBLEdBTkQsTUFNSztBQUNKLFFBQUtMLEdBQUwsQ0FBU1ksSUFBVCxDQUFjQyxjQUFkO0FBQ0EsUUFBS2IsR0FBTCxDQUFTWSxJQUFULENBQWNFLFNBQWQsQ0FBd0JuQixHQUFHb0IsUUFBSCxDQUFZcEIsR0FBR3FCLE1BQUgsQ0FBVSxHQUFWLEVBQWVyQixHQUFHc0IsRUFBSCxDQUFNLEVBQU4sRUFBVSxDQUFWLENBQWYsQ0FBWixFQUEwQ3RCLEdBQUd1QixRQUFILENBQVksWUFBVztBQUN4RixTQUFLQyxXQUFMLEdBQW1CLEtBQUtiLElBQXhCO0FBQ0EsU0FBS04sR0FBTCxDQUFTbUIsV0FBVCxHQUF1QixLQUFLaEIsS0FBNUI7QUFDQSxJQUhpRSxFQUcvRCxJQUgrRCxDQUExQyxDQUF4QjtBQUlBO0FBQ0Q7QUFoRE8sQ0FBVCIsImZpbGUiOiJDaGVja091dC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLlNwcml0ZSxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0bnV0OiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLlNwcml0ZSxcclxuXHRcdH0sXHJcblx0XHROdXRPbjoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdH0sXHJcblx0XHROdXRPZmY6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcblx0XHR9LFxyXG5cdFx0QmdPbjoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdH0sXHJcblx0XHRCZ09mZjoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdH0sXHJcblx0XHRpc0NoZWNrZWQ6IGZhbHNlLFxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0dGhpcy5PblVwZGF0ZSgpO1xyXG5cdH0sXHJcblxyXG5cdE9uQ2hhbmdlckNsaWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuaXNDaGVja2VkID0gIXRoaXMuaXNDaGVja2VkO1xyXG5cdFx0dGhpcy5PblVwZGF0ZSgpO1xyXG5cdH0sXHJcblx0T25VcGRhdGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYoIXRoaXMuaXNDaGVja2VkKXtcclxuXHRcdFx0dGhpcy5udXQubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cdFx0XHR0aGlzLm51dC5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMC4xLCBjYy52MigtMzAsIDApKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5zcHJpdGVGcmFtZSA9IHRoaXMuQmdPZmY7XHJcblx0XHRcdFx0dGhpcy5udXQuc3ByaXRlRnJhbWUgPSB0aGlzLk51dE9mZjtcclxuXHRcdFx0fSwgdGhpcykpKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm51dC5ub2RlLnN0b3BBbGxBY3Rpb25zKClcclxuXHRcdFx0dGhpcy5udXQubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMSwgY2MudjIoMzAsIDApKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5zcHJpdGVGcmFtZSA9IHRoaXMuQmdPbjtcclxuXHRcdFx0XHR0aGlzLm51dC5zcHJpdGVGcmFtZSA9IHRoaXMuTnV0T247XHJcblx0XHRcdH0sIHRoaXMpKSk7XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==