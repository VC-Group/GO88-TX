
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Candy/Candy_iLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca5891XEyBMXooOmHi4eVGy', 'Candy_iLine');
// Script/Game/Candy/Candy_iLine.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		line: cc.Node,
		ef: false
	},
	onEnable: function onEnable() {
		this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onShow, this);
		this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this);
	},
	onDisable: function onDisable() {
		this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onShow, this);
		this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this);
	},
	onShow: function onShow() {
		this.line.active = true;
	},
	onHidden: function onHidden() {
		!this.ef && (this.line.active = false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHkvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhbmR5XFxDYW5keV9pTGluZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaW5lIiwiTm9kZSIsImVmIiwib25FbmFibGUiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJNT1VTRV9FTlRFUiIsIm9uU2hvdyIsIk1PVVNFX0xFQVZFIiwib25IaWRkZW4iLCJvbkRpc2FibGUiLCJvZmYiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxVQUFTRixHQUFHRyxTQURQOztBQUdMQyxhQUFZO0FBQ1JDLFFBQU1MLEdBQUdNLElBREQ7QUFFUkMsTUFBTTtBQUZFLEVBSFA7QUFPTEMsV0FBVSxvQkFBVztBQUN2QixPQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVYsR0FBR00sSUFBSCxDQUFRSyxTQUFSLENBQWtCQyxXQUEvQixFQUE0QyxLQUFLQyxNQUFqRCxFQUF5RCxJQUF6RDtBQUNBLE9BQUtKLElBQUwsQ0FBVUMsRUFBVixDQUFhVixHQUFHTSxJQUFILENBQVFLLFNBQVIsQ0FBa0JHLFdBQS9CLEVBQTRDLEtBQUtDLFFBQWpELEVBQTJELElBQTNEO0FBQ0EsRUFWTztBQVdSQyxZQUFXLHFCQUFXO0FBQ3JCLE9BQUtQLElBQUwsQ0FBVVEsR0FBVixDQUFjakIsR0FBR00sSUFBSCxDQUFRSyxTQUFSLENBQWtCQyxXQUFoQyxFQUE2QyxLQUFLQyxNQUFsRCxFQUEwRCxJQUExRDtBQUNBLE9BQUtKLElBQUwsQ0FBVVEsR0FBVixDQUFjakIsR0FBR00sSUFBSCxDQUFRSyxTQUFSLENBQWtCRyxXQUFoQyxFQUE2QyxLQUFLQyxRQUFsRCxFQUE0RCxJQUE1RDtBQUNBLEVBZE87QUFlUkYsU0FBUSxrQkFBVTtBQUNqQixPQUFLUixJQUFMLENBQVVhLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxFQWpCTztBQWtCUkgsV0FBVSxvQkFBVTtBQUNuQixHQUFDLEtBQUtSLEVBQU4sS0FBYSxLQUFLRixJQUFMLENBQVVhLE1BQVYsR0FBbUIsS0FBaEM7QUFDQTtBQXBCTyxDQUFUIiwiZmlsZSI6IkNhbmR5X2lMaW5lLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpbmU6IGNjLk5vZGUsXHJcbiAgICAgICAgZWY6ICAgZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uU2hvdywgdGhpcyk7XHJcblx0XHR0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25IaWRkZW4sIHRoaXMpO1xyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMub25TaG93LCB0aGlzKTtcclxuXHRcdHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25IaWRkZW4sIHRoaXMpO1xyXG5cdH0sXHJcblx0b25TaG93OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5saW5lLmFjdGl2ZSA9IHRydWU7XHJcblx0fSxcclxuXHRvbkhpZGRlbjogZnVuY3Rpb24oKXtcclxuXHRcdCF0aGlzLmVmICYmICh0aGlzLmxpbmUuYWN0aXZlID0gZmFsc2UpO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=