
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CoTrang/lines/CoTrang_iline.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '846ba+ck/5Ez62leZJ7v614', 'CoTrang_iline');
// Script/Game/CoTrang/lines/CoTrang_iline.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xcbGluZXMvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nXFxsaW5lcy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xcbGluZXNcXENvVHJhbmdfaWxpbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGluZSIsIk5vZGUiLCJlZiIsIm9uRW5hYmxlIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiTU9VU0VfRU5URVIiLCJvblNob3ciLCJNT1VTRV9MRUFWRSIsIm9uSGlkZGVuIiwib25EaXNhYmxlIiwib2ZmIiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsY0FBTUwsR0FBR00sSUFERDtBQUVSQyxZQUFNO0FBRkUsS0FIUDtBQU9MQyxjQUFVLG9CQUFXO0FBQ2pCLGFBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhVixHQUFHTSxJQUFILENBQVFLLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLE1BQWpELEVBQXlELElBQXpEO0FBQ0EsYUFBS0osSUFBTCxDQUFVQyxFQUFWLENBQWFWLEdBQUdNLElBQUgsQ0FBUUssU0FBUixDQUFrQkcsV0FBL0IsRUFBNEMsS0FBS0MsUUFBakQsRUFBMkQsSUFBM0Q7QUFDSCxLQVZJO0FBV0xDLGVBQVcscUJBQVc7QUFDbEIsYUFBS1AsSUFBTCxDQUFVUSxHQUFWLENBQWNqQixHQUFHTSxJQUFILENBQVFLLFNBQVIsQ0FBa0JDLFdBQWhDLEVBQTZDLEtBQUtDLE1BQWxELEVBQTBELElBQTFEO0FBQ0EsYUFBS0osSUFBTCxDQUFVUSxHQUFWLENBQWNqQixHQUFHTSxJQUFILENBQVFLLFNBQVIsQ0FBa0JHLFdBQWhDLEVBQTZDLEtBQUtDLFFBQWxELEVBQTRELElBQTVEO0FBQ0gsS0FkSTtBQWVMRixZQUFRLGtCQUFVO0FBQ2QsYUFBS1IsSUFBTCxDQUFVYSxNQUFWLEdBQW1CLElBQW5CO0FBQ0gsS0FqQkk7QUFrQkxILGNBQVUsb0JBQVU7QUFDaEIsU0FBQyxLQUFLUixFQUFOLEtBQWEsS0FBS0YsSUFBTCxDQUFVYSxNQUFWLEdBQW1CLEtBQWhDO0FBQ0g7QUFwQkksQ0FBVCIsImZpbGUiOiJDb1RyYW5nX2lsaW5lLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xcbGluZXMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaW5lOiBjYy5Ob2RlLFxyXG4gICAgICAgIGVmOiAgIGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMub25TaG93LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25IaWRkZW4sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vblNob3csIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub25IaWRkZW4sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uU2hvdzogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmxpbmUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBvbkhpZGRlbjogZnVuY3Rpb24oKXtcclxuICAgICAgICAhdGhpcy5lZiAmJiAodGhpcy5saW5lLmFjdGl2ZSA9IGZhbHNlKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=