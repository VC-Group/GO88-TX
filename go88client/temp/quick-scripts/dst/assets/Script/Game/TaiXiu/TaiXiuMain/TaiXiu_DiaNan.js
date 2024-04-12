
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuMain/TaiXiu_DiaNan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48692rupkxLUqFjhMjk6S43', 'TaiXiu_DiaNan');
// Script/Game/TaiXiu/TaiXiuMain/TaiXiu_DiaNan.js

"use strict";

cc.Class({
    extends: cc.Component,
    init: function init(obj) {
        this.RedT = obj;
    },
    onLoad: function onLoad() {
        this.ttOffset = null;
    },

    onEnable: function onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
        // this.node.on(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);
    },
    onDisable: function onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
        // this.node.off(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);
        this.RedT.DiaNan();
    },
    eventStart: function eventStart(e) {
        this.setTop();
        console.log("eventStart");
        this.stop = false;
        this.ttOffset = cc.v2(e.touch.getLocationX() - this.node.position.x, e.touch.getLocationY() - this.node.position.y);
    },
    eventMove: function eventMove(e) {

        this.node.position = cc.v2(e.touch.getLocationX() - this.ttOffset.x, e.touch.getLocationY() - this.ttOffset.y);

        if ((this.node.position.x >= 155 || this.node.position.x <= -155 || this.node.position.y >= 155 || this.node.position.y <= -155) && this.stop == false) {
            this.stop = true;
            this.RedT.DiaNan();
            this.node.active = false;
        }
    },
    eventEnd: function eventEnd() {},
    setTop: function setTop() {
        this.RedT.setTop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdU1haW5cXFRhaVhpdV9EaWFOYW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJpbml0Iiwib2JqIiwiUmVkVCIsIm9uTG9hZCIsInR0T2Zmc2V0Iiwib25FbmFibGUiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJldmVudFN0YXJ0IiwiVE9VQ0hfTU9WRSIsImV2ZW50TW92ZSIsIlRPVUNIX0VORCIsImV2ZW50RW5kIiwiVE9VQ0hfQ0FOQ0VMIiwib25EaXNhYmxlIiwib2ZmIiwiRGlhTmFuIiwiZSIsInNldFRvcCIsImNvbnNvbGUiLCJsb2ciLCJzdG9wIiwidjIiLCJ0b3VjaCIsImdldExvY2F0aW9uWCIsInBvc2l0aW9uIiwieCIsImdldExvY2F0aW9uWSIsInkiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLFFBRkssZ0JBRUFDLEdBRkEsRUFFSTtBQUNMLGFBQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNILEtBSkk7QUFLTEUsVUFMSyxvQkFLSztBQUNOLGFBQUtDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDSCxLQVBJOztBQVFMQyxjQUFVLG9CQUFZO0FBQ2xCLGFBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhWCxHQUFHWSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTZDLEtBQUtDLFVBQWxELEVBQThELElBQTlEO0FBQ0EsYUFBS0wsSUFB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LlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdU1haW4iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgaW5pdChvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMudHRPZmZzZXQgPSBudWxsO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAgdGhpcy5ldmVudFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgICB0aGlzLmV2ZW50TW92ZSwgIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICAgIHRoaXMuZXZlbnRFbmQsICAgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5ldmVudEVuZCwgICB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICB0aGlzLnNldFRvcCwgICAgIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICB0aGlzLmV2ZW50U3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgICB0aGlzLmV2ZW50TW92ZSwgIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAgICB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICB0aGlzLnNldFRvcCwgICAgIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuUmVkVC5EaWFOYW4oKTtcclxuICAgIH0sXHJcbiAgICBldmVudFN0YXJ0OiBmdW5jdGlvbihlKXtcclxuICAgICAgICB0aGlzLnNldFRvcCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnRTdGFydFwiKTtcclxuICAgICAgICB0aGlzLnN0b3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnR0T2Zmc2V0ICA9IGNjLnYyKGUudG91Y2guZ2V0TG9jYXRpb25YKCkgLSB0aGlzLm5vZGUucG9zaXRpb24ueCwgZS50b3VjaC5nZXRMb2NhdGlvblkoKSAtIHRoaXMubm9kZS5wb3NpdGlvbi55KTtcclxuXHJcbiAgICB9LFxyXG4gICAgZXZlbnRNb3ZlOiBmdW5jdGlvbihlKXtcclxuICAgICAgXHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjIoZS50b3VjaC5nZXRMb2NhdGlvblgoKSAtIHRoaXMudHRPZmZzZXQueCwgZS50b3VjaC5nZXRMb2NhdGlvblkoKSAtIHRoaXMudHRPZmZzZXQueSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoKHRoaXMubm9kZS5wb3NpdGlvbi54ID49IDE1NSB8fCB0aGlzLm5vZGUucG9zaXRpb24ueCA8PSAtMTU1IHx8IHRoaXMubm9kZS5wb3NpdGlvbi55ID49IDE1NSB8fCB0aGlzLm5vZGUucG9zaXRpb24ueSA8PSAtMTU1KSAmJiAgdGhpcy5zdG9wID09IGZhbHNlKXtcclxuICAgICAgICAgICAgdGhpcy5zdG9wID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5SZWRULkRpYU5hbigpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50RW5kOiBmdW5jdGlvbigpe30sXHJcbiAgICBzZXRUb3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5SZWRULnNldFRvcCgpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==