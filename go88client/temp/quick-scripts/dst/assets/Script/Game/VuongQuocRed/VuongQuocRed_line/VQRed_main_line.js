
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/VuongQuocRed_line/VQRed_main_line.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a5fblcwjpEZ7XEnO1IJ3kk', 'VQRed_main_line');
// Script/Game/VuongQuocRed/VuongQuocRed_line/VQRed_main_line.js

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
		this.node.children[1].active = true;
	},
	offhover: function offhover() {
		this.node.children[1].active = false;
	},
	onEf: function onEf() {
		this.onhover();
		this.node.pauseSystemEvents();
	},
	offEf: function offEf() {
		this.offhover();
		this.node.resumeSystemEvents();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxWdW9uZ1F1b2NSZWRfbGluZS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcVnVvbmdRdW9jUmVkX2xpbmUvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcVnVvbmdRdW9jUmVkX2xpbmVcXFZRUmVkX21haW5fbGluZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsImluaXQiLCJvYmoiLCJSZWRUIiwib25FbmFibGUiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRU5URVIiLCJvbmhvdmVyIiwiTU9VU0VfTEVBVkUiLCJvZmZob3ZlciIsIm9uRGlzYWJsZSIsIm9mZiIsImNoaWxkcmVuIiwiYWN0aXZlIiwib25FZiIsInBhdXNlU3lzdGVtRXZlbnRzIiwib2ZmRWYiLCJyZXN1bWVTeXN0ZW1FdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxLQUhRLGdCQUdIQyxHQUhHLEVBR0M7QUFDUixPQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQSxTQUFPLElBQVA7QUFDQSxFQU5POztBQU9SRSxXQUFVLG9CQUFXO0FBQ3BCLE9BQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhVCxHQUFHVSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLE9BQWpELEVBQTBELElBQTFEO0FBQ0EsT0FBS0wsSUFBTCxDQUFVQyxFQUFWLENBQWFULEdBQUdVLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsV0FBL0IsRUFBNEMsS0FBS0MsUUFBakQsRUFBMkQsSUFBM0Q7QUFDQSxFQVZPO0FBV1JDLFlBQVcscUJBQVc7QUFDckIsT0FBS1IsSUFBTCxDQUFVUyxHQUFWLENBQWNqQixHQUFHVSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQWhDLEVBQTZDLEtBQUtDLE9BQWxELEVBQTJELElBQTNEO0FBQ0EsT0FBS0wsSUFBTCxDQUFVUyxHQUFWLENBQWNqQixHQUFHVSxJQUFILENBQVFDLFNBQVIsQ0FBa0JHLFdBQWhDLEVBQTZDLEtBQUtDLFFBQWxELEVBQTRELElBQTVEO0FBQ0EsRUFkTztBQWVSRixVQUFTLG1CQUFVO0FBQ2xCLE9BQUtMLElBQUwsQ0FBVVUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7QUFDQSxFQWpCTztBQWtCUkosV0FBVSxvQkFBVTtBQUNuQixPQUFLUCxJQUFMLENBQVVVLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsRUFwQk87QUFxQlJDLE9BQU0sZ0JBQVU7QUFDZixPQUFLUCxPQUFMO0FBQ0EsT0FBS0wsSUFBTCxDQUFVYSxpQkFBVjtBQUNBLEVBeEJPO0FBeUJSQyxRQUFPLGlCQUFVO0FBQ2hCLE9BQUtQLFFBQUw7QUFDQSxPQUFLUCxJQUFMLENBQVVlLGtCQUFWO0FBQ0E7QUE1Qk8sQ0FBVCIsImZpbGUiOiJWUVJlZF9tYWluX2xpbmUuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXFZ1b25nUXVvY1JlZF9saW5lIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdGluaXQob2JqKXtcclxuXHRcdHRoaXMuUmVkVCA9IG9iajtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xyXG5cdFx0dGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9mZmhvdmVyLCB0aGlzKTtcclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xyXG5cdFx0dGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vZmZob3ZlciwgdGhpcyk7XHJcblx0fSxcclxuXHRvbmhvdmVyOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcblx0fSxcclxuXHRvZmZob3ZlcjogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuXHR9LFxyXG5cdG9uRWY6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm9uaG92ZXIoKTtcclxuXHRcdHRoaXMubm9kZS5wYXVzZVN5c3RlbUV2ZW50cygpO1xyXG5cdH0sXHJcblx0b2ZmRWY6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm9mZmhvdmVyKCk7XHJcblx0XHR0aGlzLm5vZGUucmVzdW1lU3lzdGVtRXZlbnRzKCk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==