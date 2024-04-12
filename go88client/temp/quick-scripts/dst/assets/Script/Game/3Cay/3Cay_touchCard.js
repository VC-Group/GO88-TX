
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/3Cay/3Cay_touchCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67e4btO3klMDZ3ujws3/g2/', '3Cay_touchCard');
// Script/Game/3Cay/3Cay_touchCard.js

"use strict";

cc.Class({
    extends: cc.Component,
    onEnable: function onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
    },
    onDisable: function onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
    },
    eventStart: function eventStart(e) {
        this.ttOffset = cc.v2(e.touch.getLocationX() - this.node.position.x, e.touch.getLocationY() - this.node.position.y);
    },
    eventMove: function eventMove(e) {
        var x = e.touch.getLocationX() - this.ttOffset.x;
        var y = e.touch.getLocationY() - this.ttOffset.y;
        this.node.position = cc.v2(x, y);
    },
    eventEnd: function eventEnd() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFwzQ2F5Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFwzQ2F5L2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFwzQ2F5XFwzQ2F5X3RvdWNoQ2FyZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsIm9uRW5hYmxlIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnRTdGFydCIsIlRPVUNIX01PVkUiLCJldmVudE1vdmUiLCJUT1VDSF9FTkQiLCJldmVudEVuZCIsIlRPVUNIX0NBTkNFTCIsIm9uRGlzYWJsZSIsIm9mZiIsImUiLCJ0dE9mZnNldCIsInYyIiwidG91Y2giLCJnZXRMb2NhdGlvblgiLCJwb3NpdGlvbiIsIngiLCJnZXRMb2NhdGlvblkiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxjQUFVLG9CQUFZO0FBQ2xCLGFBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhTixHQUFHTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTZDLEtBQUtDLFVBQWxELEVBQThELElBQTlEO0FBQ0EsYUFBS0wsSUFBTCxDQUFVQyxFQUFWLENBQWFOLEdBQUdPLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsVUFBL0IsRUFBNkMsS0FBS0MsU0FBbEQsRUFBOEQsSUFBOUQ7QUFDQSxhQUFLUCxJQUFMLENBQVVDLEVBQVYsQ0FBYU4sR0FBR08sSUFBSCxDQUFRQyxTQUFSLENBQWtCSyxTQUEvQixFQUE2QyxLQUFLQyxRQUFsRCxFQUE4RCxJQUE5RDtBQUNBLGFBQUtULElBQUwsQ0FBVUMsRUFBVixDQUFhTixHQUFHTyxJQUFILENBQVFDLFNBQVIsQ0FBa0JPLFlBQS9CLEVBQTZDLEtBQUtELFFBQWxELEVBQThELElBQTlEO0FBQ0gsS0FQSTtBQVFMRSxlQUFXLHFCQUFZO0FBQ25CLGFBQUtYLElBQUwsQ0FBVVksR0FBVixDQUFjakIsR0FBR08sSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUFoQyxFQUE4QyxLQUFLQyxVQUFuRCxFQUErRCxJQUEvRDtBQUNBLGFBQUtMLElBQUwsQ0FBVVksR0FBVixDQUFjakIsR0FBR08sSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxVQUFoQyxFQUE4QyxLQUFLQyxTQUFuRCxFQUErRCxJQUEvRDtBQUNBLGFBQUtQLElBQUwsQ0FBVVksR0FBVixDQUFjakIsR0FBR08sSUFBSCxDQUFRQyxTQUFSLENBQWtCSyxTQUFoQyxFQUE4QyxLQUFLQyxRQUFuRCxFQUErRCxJQUEvRDtBQUNBLGFBQUtULElBQUwsQ0FBVVksR0FBVixDQUFjakIsR0FBR08sSUFBSCxDQUFRQyxTQUFSLENBQWtCTyxZQUFoQyxFQUE4QyxLQUFLRCxRQUFuRCxFQUErRCxJQUEvRDtBQUNILEtBYkk7QUFjTEosZ0JBQVksb0JBQVNRLENBQVQsRUFBVztBQUNuQixhQUFLQyxRQUFMLEdBQWdCbkIsR0FBR29CLEVBQUgsQ0FBTUYsRUFBRUcsS0FBRixDQUFRQyxZQUFSLEtBQXVCLEtBQUtqQixJQUFMLENBQVVrQixRQUFWLENBQW1CQyxDQUFoRCxFQUFtRE4sRUFBRUcsS0FBRixDQUFRSSxZQUFSLEtBQXVCLEtBQUtwQixJQUFMLENBQVVrQixRQUFWLENBQW1CRyxDQUE3RixDQUFoQjtBQUNILEtBaEJJO0FBaUJMZCxlQUFXLG1CQUFTTSxDQUFULEVBQVc7QUFDbEIsWUFBSU0sSUFBSU4sRUFBRUcsS0FBRixDQUFRQyxZQUFSLEtBQXVCLEtBQUtILFFBQUwsQ0FBY0ssQ0FBN0M7QUFDQSxZQUFJRSxJQUFJUixFQUFFRyxLQUFGLENBQVFJLFlBQVIsS0FBdUIsS0FBS04sUUFBTCxDQUFjTyxDQUE3QztBQUNBLGFBQUtyQixJQUFMLENBQVVrQixRQUFWLEdBQXFCdkIsR0FBR29CLEVBQUgsQ0FBTUksQ0FBTixFQUFTRSxDQUFULENBQXJCO0FBQ0gsS0FyQkk7QUFzQkxaLGNBQVUsb0JBQVUsQ0FBRTtBQXRCakIsQ0FBVCIsImZpbGUiOiIzQ2F5X3RvdWNoQ2FyZC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcM0NheSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgIHRoaXMuZXZlbnRTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICAgdGhpcy5ldmVudE1vdmUsICB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAgICB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuZXZlbnRFbmQsICAgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgIHRoaXMuZXZlbnRTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAgIHRoaXMuZXZlbnRNb3ZlLCAgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICAgIHRoaXMuZXZlbnRFbmQsICAgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuZXZlbnRFbmQsICAgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTdGFydDogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGhpcy50dE9mZnNldCA9IGNjLnYyKGUudG91Y2guZ2V0TG9jYXRpb25YKCktdGhpcy5ub2RlLnBvc2l0aW9uLngsIGUudG91Y2guZ2V0TG9jYXRpb25ZKCktdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50TW92ZTogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgbGV0IHggPSBlLnRvdWNoLmdldExvY2F0aW9uWCgpLXRoaXMudHRPZmZzZXQueDtcclxuICAgICAgICBsZXQgeSA9IGUudG91Y2guZ2V0TG9jYXRpb25ZKCktdGhpcy50dE9mZnNldC55O1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYyKHgsIHkpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50RW5kOiBmdW5jdGlvbigpe30sXHJcbn0pO1xyXG4iXX0=