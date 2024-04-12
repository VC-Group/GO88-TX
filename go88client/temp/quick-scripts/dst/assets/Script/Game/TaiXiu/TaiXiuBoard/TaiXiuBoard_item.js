
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuBoard/TaiXiuBoard_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6c11CHYW1PjZKvnSwp1SEF', 'TaiXiuBoard_item');
// Script/Game/TaiXiu/TaiXiuBoard/TaiXiuBoard_item.js

'use strict';

cc.Class({
    extends: cc.Component,
    properties: {
        colorOn: '',
        colorOff: '',
        bgOn: {
            default: null,
            type: cc.SpriteFrame
        },
        bgOff: {
            default: null,
            type: cc.SpriteFrame
        },
        text: {
            default: null,
            type: cc.Node
        }
    },
    onLoad: function onLoad(obj) {
        this.sprite = this.node.getComponent(cc.Sprite);
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
        this.text.color = this.text.color.fromHEX(this.colorOn);
        this.sprite.spriteFrame = this.bgOn;
    },
    eventOnLEAVE: function eventOnLEAVE() {
        this.text.color = this.text.color.fromHEX(this.colorOff);
        this.sprite.spriteFrame = this.bgOff;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVCb2FyZC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdVxcVGFpWGl1Qm9hcmQvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdVxcVGFpWGl1Qm9hcmRcXFRhaVhpdUJvYXJkX2l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29sb3JPbiIsImNvbG9yT2ZmIiwiYmdPbiIsImRlZmF1bHQiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJiZ09mZiIsInRleHQiLCJOb2RlIiwib25Mb2FkIiwib2JqIiwic3ByaXRlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsIm9uRW5hYmxlIiwib24iLCJFdmVudFR5cGUiLCJNT1VTRV9FTlRFUiIsImV2ZW50T25FTlRFUiIsIk1PVVNFX0xFQVZFIiwiZXZlbnRPbkxFQVZFIiwib25EaXNhYmxlIiwib2ZmIiwiY29sb3IiLCJmcm9tSEVYIiwic3ByaXRlRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1hDLGlCQUFVLEVBREM7QUFFUkMsa0JBQVUsRUFGRjtBQUdSQyxjQUFNO0FBQ0ZDLHFCQUFTLElBRFA7QUFFRkMsa0JBQVNULEdBQUdVO0FBRlYsU0FIRTtBQU9SQyxlQUFPO0FBQ0hILHFCQUFTLElBRE47QUFFSEMsa0JBQVNULEdBQUdVO0FBRlQsU0FQQztBQVdSRSxjQUFNO0FBQ0ZKLHFCQUFTLElBRFA7QUFFRkMsa0JBQVNULEdBQUdhO0FBRlY7QUFYRSxLQUZQO0FBa0JMQyxZQUFRLGdCQUFTQyxHQUFULEVBQWE7QUFDcEIsYUFBS0MsTUFBTCxHQUFjLEtBQUtDLElBQUwsQ0FBVUMsWUFBVixDQUF1QmxCLEdBQUdtQixNQUExQixDQUFkO0FBQ0EsS0FwQkk7QUFxQkxDLGNBQVUsb0JBQVc7QUFDdkIsYUFBS0gsSUFBTCxDQUFVSSxFQUFWLENBQWFyQixHQUFHYSxJQUFILENBQVFTLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFlBQWpELEVBQStELElBQS9EO0FBQ00sYUFBS1AsSUFBTCxDQUFVSSxFQUFWLENBQWFyQixHQUFHYSxJQUFILENBQVFTLFNBQVIsQ0FBa0JHLFdBQS9CLEVBQTRDLEtBQUtDLFlBQWpELEVBQStELElBQS9EO0FBQ04sS0F4Qk87QUF5QlJDLGVBQVcscUJBQVc7QUFDckIsYUFBS1YsSUFBTCxDQUFVVyxHQUFWLENBQWM1QixHQUFHYSxJQUFILENBQVFTLFNBQVIsQ0FBa0JDLFdBQWhDLEVBQTZDLEtBQUtDLFlBQWxELEVBQWdFLElBQWhFO0FBQ00sYUFBS1AsSUFBTCxDQUFVVyxHQUFWLENBQWM1QixHQUFHYSxJQUFILENBQVFTLFNBQVIsQ0FBa0JHLFdBQWhDLEVBQTZDLEtBQUtDLFlBQWxELEVBQWdFLElBQWhFO0FBQ04sS0E1Qk87QUE2QlJGLGtCQUFjLHdCQUFVO0FBQ3ZCLGFBQUtaLElBQUwsQ0FBVWlCLEtBQVYsR0FBMEIsS0FBS2pCLElBQUwsQ0FBVWlCLEtBQVYsQ0FBZ0JDLE9BQWhCLENBQXdCLEtBQUt6QixPQUE3QixDQUExQjtBQUNBLGFBQUtXLE1BQUwsQ0FBWWUsV0FBWixHQUEwQixLQUFLeEIsSUFBL0I7QUFDQSxLQWhDTztBQWlDUm1CLGtCQUFjLHdCQUFVO0FBQ3ZCLGFBQUtkLElBQUwsQ0FBVWlCLEtBQVYsR0FBa0IsS0FBS2pCLElBQUwsQ0FBVWlCLEtBQVYsQ0FBZ0JDLE9BQWhCLENBQXdCLEtBQUt4QixRQUE3QixDQUFsQjtBQUNBLGFBQUtVLE1BQUwsQ0FBWWUsV0FBWixHQUEwQixLQUFLcEIsS0FBL0I7QUFDQTtBQXBDTyxDQUFUIiwiZmlsZSI6IlRhaVhpdUJvYXJkX2l0ZW0uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdUJvYXJkIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIFx0Y29sb3JPbjogICcnLFxyXG4gICAgICAgIGNvbG9yT2ZmOiAnJyxcclxuICAgICAgICBiZ09uOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLlNwcml0ZUZyYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiZ09mZjoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiAgICBjYy5TcHJpdGVGcmFtZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiAgICBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbihvYmope1xyXG4gICAgXHR0aGlzLnNwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMuZXZlbnRPbkVOVEVSLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMuZXZlbnRPbkxFQVZFLCB0aGlzKTtcclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLmV2ZW50T25FTlRFUiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5ldmVudE9uTEVBVkUsIHRoaXMpO1xyXG5cdH0sXHJcblx0ZXZlbnRPbkVOVEVSOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy50ZXh0LmNvbG9yICAgICAgICAgPSB0aGlzLnRleHQuY29sb3IuZnJvbUhFWCh0aGlzLmNvbG9yT24pO1xyXG5cdFx0dGhpcy5zcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmJnT247XHJcblx0fSxcclxuXHRldmVudE9uTEVBVkU6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnRleHQuY29sb3IgPSB0aGlzLnRleHQuY29sb3IuZnJvbUhFWCh0aGlzLmNvbG9yT2ZmKTtcclxuXHRcdHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5iZ09mZjtcclxuXHR9LFxyXG59KTtcclxuIl19