
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/ef/hoverScale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8e56/FW3FDTab9UduKTQcx', 'hoverScale');
// Script/Helper/ef/hoverScale.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {
		pressedScale: 1,
		transDuration: 0
	},
	onLoad: function onLoad() {
		this.initScale = this.node.scale;
		this.scaleOnAction = cc.scaleTo(this.transDuration, this.pressedScale);
		this.scaleOffAction = cc.scaleTo(this.transDuration, this.initScale);
	},

	onEnable: function onEnable() {
		this.node.on(cc.Node.EventType.MOUSE_ENTER, this.eventOnHover, this);
		this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.eventOffHover, this);
	},
	onDisable: function onDisable() {
		this.node.off(cc.Node.EventType.MOUSE_ENTER, this.eventOnHover, this);
		this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.eventOffHover, this);
	},
	eventOnHover: function eventOnHover(e) {
		this.node.stopAllActions();
		this.node.runAction(this.scaleOnAction);
	},
	eventOffHover: function eventOffHover(e) {
		this.node.stopAllActions();
		this.node.runAction(this.scaleOffAction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXGVmLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXGVmL2Fzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXGVmXFxob3ZlclNjYWxlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByZXNzZWRTY2FsZSIsInRyYW5zRHVyYXRpb24iLCJvbkxvYWQiLCJpbml0U2NhbGUiLCJub2RlIiwic2NhbGUiLCJzY2FsZU9uQWN0aW9uIiwic2NhbGVUbyIsInNjYWxlT2ZmQWN0aW9uIiwib25FbmFibGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9FTlRFUiIsImV2ZW50T25Ib3ZlciIsIk1PVVNFX0xFQVZFIiwiZXZlbnRPZmZIb3ZlciIsIm9uRGlzYWJsZSIsIm9mZiIsImUiLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7QUFFUkMsYUFBWTtBQUNYQyxnQkFBYyxDQURIO0FBRVhDLGlCQUFlO0FBRkosRUFGSjtBQU1SQyxPQU5RLG9CQU1FO0FBQ1QsT0FBS0MsU0FBTCxHQUFpQixLQUFLQyxJQUFMLENBQVVDLEtBQTNCO0FBQ0EsT0FBS0MsYUFBTCxHQUFzQlgsR0FBR1ksT0FBSCxDQUFXLEtBQUtOLGFBQWhCLEVBQStCLEtBQUtELFlBQXBDLENBQXRCO0FBQ0EsT0FBS1EsY0FBTCxHQUFzQmIsR0FBR1ksT0FBSCxDQUFXLEtBQUtOLGFBQWhCLEVBQStCLEtBQUtFLFNBQXBDLENBQXRCO0FBQ0EsRUFWTzs7QUFXUk0sV0FBVSxvQkFBVztBQUNwQixPQUFLTCxJQUFMLENBQVVNLEVBQVYsQ0FBYWYsR0FBR2dCLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFBNEMsS0FBS0MsWUFBakQsRUFBZ0UsSUFBaEU7QUFDQSxPQUFLVixJQUFMLENBQVVNLEVBQVYsQ0FBYWYsR0FBR2dCLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsV0FBL0IsRUFBNEMsS0FBS0MsYUFBakQsRUFBZ0UsSUFBaEU7QUFDQSxFQWRPO0FBZVJDLFlBQVcscUJBQVc7QUFDckIsT0FBS2IsSUFBTCxDQUFVYyxHQUFWLENBQWN2QixHQUFHZ0IsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUFoQyxFQUE2QyxLQUFLQyxZQUFsRCxFQUFpRSxJQUFqRTtBQUNBLE9BQUtWLElBQUwsQ0FBVWMsR0FBVixDQUFjdkIsR0FBR2dCLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsV0FBaEMsRUFBNkMsS0FBS0MsYUFBbEQsRUFBaUUsSUFBakU7QUFDQSxFQWxCTztBQW1CUkYsZUFBYyxzQkFBU0ssQ0FBVCxFQUFXO0FBQ3hCLE9BQUtmLElBQUwsQ0FBVWdCLGNBQVY7QUFDQSxPQUFLaEIsSUFBTCxDQUFVaUIsU0FBVixDQUFvQixLQUFLZixhQUF6QjtBQUNBLEVBdEJPO0FBdUJSVSxnQkFBZSx1QkFBU0csQ0FBVCxFQUFXO0FBQ3pCLE9BQUtmLElBQUwsQ0FBVWdCLGNBQVY7QUFDQSxPQUFLaEIsSUFBTCxDQUFVaUIsU0FBVixDQUFvQixLQUFLYixjQUF6QjtBQUNBO0FBMUJPLENBQVQiLCJmaWxlIjoiaG92ZXJTY2FsZS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxlZiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHByZXNzZWRTY2FsZTogMSxcclxuXHRcdHRyYW5zRHVyYXRpb246IDBcclxuXHR9LFxyXG5cdG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLmluaXRTY2FsZSA9IHRoaXMubm9kZS5zY2FsZTtcclxuXHRcdHRoaXMuc2NhbGVPbkFjdGlvbiAgPSBjYy5zY2FsZVRvKHRoaXMudHJhbnNEdXJhdGlvbiwgdGhpcy5wcmVzc2VkU2NhbGUpO1xyXG5cdFx0dGhpcy5zY2FsZU9mZkFjdGlvbiA9IGNjLnNjYWxlVG8odGhpcy50cmFuc0R1cmF0aW9uLCB0aGlzLmluaXRTY2FsZSk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMuZXZlbnRPbkhvdmVyLCAgdGhpcyk7XHJcblx0XHR0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMuZXZlbnRPZmZIb3ZlciwgdGhpcyk7XHJcblx0fSxcclxuXHRvbkRpc2FibGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5ldmVudE9uSG92ZXIsICB0aGlzKTtcclxuXHRcdHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMuZXZlbnRPZmZIb3ZlciwgdGhpcyk7XHJcblx0fSxcclxuXHRldmVudE9uSG92ZXI6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKHRoaXMuc2NhbGVPbkFjdGlvbik7XHJcblx0fSxcclxuXHRldmVudE9mZkhvdmVyOiBmdW5jdGlvbihlKXtcclxuXHRcdHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLnNjYWxlT2ZmQWN0aW9uKTtcclxuXHR9LFxyXG59KTtcclxuIl19