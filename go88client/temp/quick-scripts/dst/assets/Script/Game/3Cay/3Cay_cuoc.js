
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/3Cay/3Cay_cuoc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c89d4XDpzdPUKGADHNe7YYg', '3Cay_cuoc');
// Script/Game/3Cay/3Cay_cuoc.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        nodeC: cc.Node,
        touch: cc.Node,
        mask: cc.Node,
        labelBet: cc.Label,
        labelMin: cc.Label,
        labelMax: cc.Label,
        min: '',
        max: ''
    },
    init: function init(bet) {
        this.betMin = bet * this.min;
        this.betMax = bet * this.max;
        this.h = this.betMin < 10000 ? 10 : 100;

        this.labelMin.string = this.labelBet.string = Helper.numberWithCommas(this.betMin);
        this.labelMax.string = Helper.numberWithCommas(this.betMax);
        this.betMin = this.betMin / this.h;
        this.betMax = this.betMax / this.h;
    },
    onEnable: function onEnable() {
        this.touch.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.touch.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.touch.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.touch.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
    },
    onDisable: function onDisable() {
        this.touch.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.touch.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.touch.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.touch.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);

        this.mask.width = 0;
        this.touch.position = cc.v2(0, 0);
        this.labelBet.string = Helper.numberWithCommas(this.betMin * this.h);
    },
    eventStart: function eventStart(e) {
        this.touch.runAction(cc.scaleTo(0.1, 0.7));
        this.offsetX = { localX: e.touch.getLocationX(), x: this.touch.position.x };
    },
    eventMove: function eventMove(e) {
        var x = e.touch.getLocationX() - this.offsetX.localX + this.offsetX.x;
        if (x < 0) {
            x = 0;
        } else if (x > this.nodeC.width) {
            x = this.nodeC.width;
        }
        this.mask.width = x;
        this.touch.position = cc.v2(x, 0);
        var bet = x / this.nodeC.width * (this.betMax - this.betMin) + this.betMin >> 0;
        this.labelBet.string = Helper.numberWithCommas(bet * this.h);
    },
    eventEnd: function eventEnd() {
        this.touch.runAction(cc.scaleTo(0.1, 0.6));
    },
    onOkClick: function onOkClick() {
        cc.RedT.send({ g: { bacay: { cuocC: Helper.getOnlyNumberInString(this.labelBet.string) } } });
        this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFwzQ2F5Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFwzQ2F5L2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFwzQ2F5XFwzQ2F5X2N1b2MuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5vZGVDIiwiTm9kZSIsInRvdWNoIiwibWFzayIsImxhYmVsQmV0IiwiTGFiZWwiLCJsYWJlbE1pbiIsImxhYmVsTWF4IiwibWluIiwibWF4IiwiaW5pdCIsImJldCIsImJldE1pbiIsImJldE1heCIsImgiLCJzdHJpbmciLCJudW1iZXJXaXRoQ29tbWFzIiwib25FbmFibGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiZXZlbnRTdGFydCIsIlRPVUNIX01PVkUiLCJldmVudE1vdmUiLCJUT1VDSF9FTkQiLCJldmVudEVuZCIsIlRPVUNIX0NBTkNFTCIsIm9uRGlzYWJsZSIsIm9mZiIsIndpZHRoIiwicG9zaXRpb24iLCJ2MiIsImUiLCJydW5BY3Rpb24iLCJzY2FsZVRvIiwib2Zmc2V0WCIsImxvY2FsWCIsImdldExvY2F0aW9uWCIsIngiLCJvbk9rQ2xpY2siLCJSZWRUIiwic2VuZCIsImciLCJiYWNheSIsImN1b2NDIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwibm9kZSIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGVBQVVMLEdBQUdNLElBREw7QUFFUkMsZUFBVVAsR0FBR00sSUFGTDtBQUdSRSxjQUFVUixHQUFHTSxJQUhMO0FBSVJHLGtC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QUEzQyxDQUFQLEVBQVAsRUFBSCxFQUFiO0FBQ0EsYUFBSytCLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNIO0FBN0RJLENBQVQiLCJmaWxlIjoiM0NheV9jdW9jLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFwzQ2F5Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbm9kZUM6ICAgIGNjLk5vZGUsXHJcbiAgICAgICAgdG91Y2g6ICAgIGNjLk5vZGUsXHJcbiAgICAgICAgbWFzazogICAgIGNjLk5vZGUsXHJcbiAgICAgICAgbGFiZWxCZXQ6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxhYmVsTWluOiBjYy5MYWJlbCxcclxuICAgICAgICBsYWJlbE1heDogY2MuTGFiZWwsXHJcbiAgICAgICAgbWluOiAnJyxcclxuICAgICAgICBtYXg6ICcnLFxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKGJldCl7XHJcbiAgICAgICAgdGhpcy5iZXRNaW4gPSBiZXQqdGhpcy5taW47XHJcbiAgICAgICAgdGhpcy5iZXRNYXggPSBiZXQqdGhpcy5tYXg7XHJcbiAgICAgICAgdGhpcy5oICAgICAgPSB0aGlzLmJldE1pbiA8IDEwMDAwID8gMTAgOiAxMDA7XHJcblxyXG4gICAgICAgIHRoaXMubGFiZWxNaW4uc3RyaW5nID0gdGhpcy5sYWJlbEJldC5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLmJldE1pbik7XHJcbiAgICAgICAgdGhpcy5sYWJlbE1heC5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLmJldE1heCk7XHJcbiAgICAgICAgdGhpcy5iZXRNaW4gPSB0aGlzLmJldE1pbi90aGlzLmg7XHJcbiAgICAgICAgdGhpcy5iZXRNYXggPSB0aGlzLmJldE1heC90aGlzLmg7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMudG91Y2gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICB0aGlzLmV2ZW50U3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgICB0aGlzLmV2ZW50TW92ZSwgIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAgICB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICB0aGlzLmV2ZW50U3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudG91Y2gub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICAgdGhpcy5ldmVudE1vdmUsICB0aGlzKTtcclxuICAgICAgICB0aGlzLnRvdWNoLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICAgIHRoaXMuZXZlbnRFbmQsICAgdGhpcyk7XHJcbiAgICAgICAgdGhpcy50b3VjaC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm1hc2sud2lkdGggICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy50b3VjaC5wb3NpdGlvbiAgPSBjYy52MigwLCAwKTtcclxuICAgICAgICB0aGlzLmxhYmVsQmV0LnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuYmV0TWluKnRoaXMuaCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTdGFydDogZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdGhpcy50b3VjaC5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDAuNykpO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IHtsb2NhbFg6IGUudG91Y2guZ2V0TG9jYXRpb25YKCksIHg6IHRoaXMudG91Y2gucG9zaXRpb24ueH07XHJcbiAgICB9LFxyXG4gICAgZXZlbnRNb3ZlOiBmdW5jdGlvbihlKXtcclxuICAgICAgICBsZXQgeCA9IGUudG91Y2guZ2V0TG9jYXRpb25YKCktdGhpcy5vZmZzZXRYLmxvY2FsWCt0aGlzLm9mZnNldFgueDtcclxuICAgICAgICBpZiAoeCA8IDApIHtcclxuICAgICAgICAgICAgeCA9IDA7XHJcbiAgICAgICAgfWVsc2UgaWYoeCA+IHRoaXMubm9kZUMud2lkdGgpe1xyXG4gICAgICAgICAgICB4ID0gdGhpcy5ub2RlQy53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tYXNrLndpZHRoID0geDtcclxuICAgICAgICB0aGlzLnRvdWNoLnBvc2l0aW9uID0gY2MudjIoeCwgMCk7XHJcbiAgICAgICAgbGV0IGJldCA9ICgoKHgvdGhpcy5ub2RlQy53aWR0aCkqKHRoaXMuYmV0TWF4LXRoaXMuYmV0TWluKSkrdGhpcy5iZXRNaW4pPj4wO1xyXG4gICAgICAgIHRoaXMubGFiZWxCZXQuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoYmV0KnRoaXMuaCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRFbmQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy50b3VjaC5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDAuNikpO1xyXG4gICAgfSxcclxuICAgIG9uT2tDbGljazogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2c6e2JhY2F5OntjdW9jQzpIZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMubGFiZWxCZXQuc3RyaW5nKX19fSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==