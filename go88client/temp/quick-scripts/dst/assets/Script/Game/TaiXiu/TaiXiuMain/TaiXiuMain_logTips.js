
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuMain/TaiXiuMain_logTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '43178FyrtFOhKXVCK9EK0Dk', 'TaiXiuMain_logTips');
// Script/Game/TaiXiu/TaiXiuMain/TaiXiuMain_logTips.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        text: {
            default: null,
            type: cc.Label
        },
        tips: {
            default: null,
            type: cc.Node
        }
    },
    onLoad: function onLoad() {
        this.sprite = this.getComponent(cc.Sprite);
    },

    onEnable: function onEnable() {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.eventOnENTER, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.eventOnLEAVE, this);
    },
    onDisable: function onDisable() {
        this.node.off(cc.Node.EventType.MOUSE_ENTER, this.eventOnENTER, this);
        this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.eventOnLEAVE, this);
    },
    eventOnENTER: function eventOnENTER() {
        this.tips.active = !0;
    },
    eventOnLEAVE: function eventOnLEAVE() {
        this.tips.active = !1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdU1haW5cXFRhaVhpdU1haW5fbG9nVGlwcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0IiwiZGVmYXVsdCIsInR5cGUiLCJMYWJlbCIsInRpcHMiLCJOb2RlIiwib25Mb2FkIiwic3ByaXRlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwib25FbmFibGUiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJNT1VTRV9FTlRFUiIsImV2ZW50T25FTlRFUiIsIk1PVVNFX0xFQVZFIiwiZXZlbnRPbkxFQVZFIiwib25EaXNhYmxlIiwib2ZmIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsY0FBTTtBQUNGQyxxQkFBUyxJQURQO0FBRUZDLGtCQUFTUCxHQUFHUTtBQUZWLFNBREU7QUFLUkMsY0FBTTtBQUNGSCxxQkFBUyxJQURQO0FBRUZDLGtCQUFTUCxHQUFHVTtBQUZWO0FBTEUsS0FIUDtBQWFMQyxVQWJLLG9CQWFLO0FBQ04sYUFBS0MsTUFBTCxHQUFjLEtBQUtDLFlBQUwsQ0FBa0JiLEdBQUdjLE1BQXJCLENBQWQ7QUFDSCxLQWZJOztBQWdCTEMsY0FBVSxvQkFBVztBQUNqQixhQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWpCLEdBQUdVLElBQUgsQ0FBUVEsU0FBUixDQUFrQkMsV0FBL0IsRUFBNEMsS0FBS0MsWUFBakQsRUFBK0QsSUFBL0Q7QUFDQSxhQUFLSixJQUFMLENBQVVDLEVBQVYsQ0FBYWpCLEdBQUdVLElBQUgsQ0FBUVEsU0FBUixDQUFrQkcsV0FBL0IsRUFBNEMsS0FBS0MsWUFBakQsRUFBK0QsSUFBL0Q7QUFDSCxLQW5CSTtBQW9CTEMsZUFBVyxxQkFBVztBQUNsQixhQUFLUCxJQUFMLENBQVVRLEdBQVYsQ0FBY3hCLEdBQUdVLElBQUgsQ0FBUVEsU0FBUixDQUFrQkMsV0FBaEMsRUFBNkMsS0FBS0MsWUFBbEQsRUFBZ0UsSUFBaEU7QUFDQSxhQUFLSixJQUFMLENBQVVRLEdBQVYsQ0FBY3hCLEdBQUdVLElBQUgsQ0FBUVEsU0FBUixDQUFrQkcsV0FBaEMsRUFBNkMsS0FBS0MsWUFBbEQsRUFBZ0UsSUFBaEU7QUFDSCxLQXZCSTtBQXdCTEYsa0JBQWMsd0JBQVU7QUFDcEIsYUFBS1gsSUFBTCxDQUFVZ0IsTUFBVixHQUFtQixDQUFDLENBQXBCO0FBQ0gsS0ExQkk7QUEyQkxILGtCQUFjLHdCQUFVO0FBQ3BCLGFBQUtiLElBQUwsQ0FBVWdCLE1BQVYsR0FBbUIsQ0FBQyxDQUFwQjtBQUNIO0FBN0JJLENBQVQiLCJmaWxlIjoiVGFpWGl1TWFpbl9sb2dUaXBzLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiAgICBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGlwczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiAgICBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gdGhpcy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLmV2ZW50T25FTlRFUiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLmV2ZW50T25MRUFWRSwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLmV2ZW50T25FTlRFUiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5ldmVudE9uTEVBVkUsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50T25FTlRFUjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnRpcHMuYWN0aXZlID0gITA7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRPbkxFQVZFOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMudGlwcy5hY3RpdmUgPSAhMTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=