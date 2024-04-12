
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BigBabol/BigBabol_main_line.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df8c85uzp9M6rkEtOxa9TjC', 'BigBabol_main_line');
// Script/Game/BigBabol/BigBabol_main_line.js

"use strict";

cc.Class({
	extends: cc.Component,

	init: function init(obj) {
		this.RedT = obj;
		return this;
	},

	onEnable: function onEnable() {
		this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
		this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
	},
	onDisable: function onDisable() {
		this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
		this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
	},
	onhover: function onhover() {
		this.node.children[0].active = true;
	},
	offhover: function offhover() {
		this.node.children[0].active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCaWdCYWJvbC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmlnQmFib2wvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJpZ0JhYm9sXFxCaWdCYWJvbF9tYWluX2xpbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJpbml0Iiwib2JqIiwiUmVkVCIsIm9uRW5hYmxlIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0VOVEVSIiwib25ob3ZlciIsIk1PVVNFX0xFQVZFIiwib2ZmaG92ZXIiLCJvbkRpc2FibGUiLCJvZmYiLCJjaGlsZHJlbiIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLEtBSFEsZ0JBR0hDLEdBSEcsRUFHQztBQUNSLE9BQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNBLFNBQU8sSUFBUDtBQUNBLEVBTk87O0FBT1JFLFdBQVUsb0JBQVc7QUFDcEIsT0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFULEdBQUdVLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBL0IsRUFBNEMsS0FBS0MsT0FBakQsRUFBMEQsSUFBMUQ7QUFDQSxPQUFLTCxJQUFMLENBQVVDLEVBQVYsQ0FBYVQsR0FBR1UsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxXQUEvQixFQUE0QyxLQUFLQyxRQUFqRCxFQUEyRCxJQUEzRDtBQUNBLEVBVk87QUFXUkMsWUFBVyxxQkFBVztBQUNyQixPQUFLUixJQUFMLENBQVVTLEdBQVYsQ0FBY2pCLEdBQUdVLElBQUgsQ0FBUUMsU0FBUixDQUFrQkMsV0FBaEMsRUFBNkMsS0FBS0MsT0FBbEQsRUFBMkQsSUFBM0Q7QUFDQSxPQUFLTCxJQUFMLENBQVVTLEdBQVYsQ0FBY2pCLEdBQUdVLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsV0FBaEMsRUFBNkMsS0FBS0MsUUFBbEQsRUFBNEQsSUFBNUQ7QUFDQSxFQWRPO0FBZVJGLFVBQVMsbUJBQVU7QUFDbEIsT0FBS0wsSUFBTCxDQUFVVSxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxNQUF0QixHQUErQixJQUEvQjtBQUNBLEVBakJPO0FBa0JSSixXQUFVLG9CQUFVO0FBQ25CLE9BQUtQLElBQUwsQ0FBVVUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQTtBQXBCTyxDQUFUIiwiZmlsZSI6IkJpZ0JhYm9sX21haW5fbGluZS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmlnQmFib2wiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0aW5pdChvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMub25ob3ZlciwgdGhpcyk7XHJcblx0XHR0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMub25ob3ZlciwgdGhpcyk7XHJcblx0XHR0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9mZmhvdmVyLCB0aGlzKTtcclxuXHR9LFxyXG5cdG9uaG92ZXI6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuXHR9LFxyXG5cdG9mZmhvdmVyOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=