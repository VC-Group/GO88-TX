
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Poker/PokerNapGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f8412okzzBPWojLjt3H0Peh', 'PokerNapGame');
// Script/Game/Poker/PokerNapGame.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		touch: cc.Node,
		mask: cc.Node,
		toggle: cc.Toggle,
		labelBet: cc.Label,
		labelMin: cc.Label,
		labelMax: cc.Label,
		min: '',
		max: ''
	},
	init: function init(bet) {
		this.betMin = bet * this.min;
		this.betMax = bet * this.max;
		this.h = this.betMin < 1000000 ? 1000 : 1000000;

		this.labelMin.string = this.labelBet.string = Helper.numberWithCommas(this.betMin);
		this.labelMax.string = Helper.numberWithCommas(this.betMax);
		this.betMin = this.betMin / this.h;
		this.betMax = this.betMax / this.h;

		this.toggle.isChecked = true;
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

		//this.mask.width     = 0;
		//this.touch.position = cc.v2(0, 0);
	},
	eventStart: function eventStart(e) {
		this.touch.runAction(cc.scaleTo(0.1, 0.7));
		this.offsetX = { localX: e.touch.getLocationX(), x: this.touch.position.x };
	},
	eventMove: function eventMove(e) {
		var x = e.touch.getLocationX() - this.offsetX.localX + this.offsetX.x;
		if (x < 0) {
			x = 0;
		} else if (x > 401) {
			x = 401;
		}
		this.mask.width = x;
		this.touch.position = cc.v2(x, 0);
		var bet = x / 401 * (this.betMax - this.betMin) + this.betMin >> 0;
		this.labelBet.string = Helper.numberWithCommas(bet * this.h);
	},
	eventEnd: function eventEnd() {
		this.touch.runAction(cc.scaleTo(0.1, 0.6));
	},
	onOkClick: function onOkClick() {
		cc.RedT.inGame.loading.active = true;
		cc.RedT.send({ g: { poker: { nap: {
						balans: Helper.getOnlyNumberInString(this.labelBet.string),
						auto: this.toggle.isChecked
					} } } });
	},
	onCancelClick: function onCancelClick() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxQb2tlci8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcUG9rZXIvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFBva2VyXFxQb2tlck5hcEdhbWUuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRvdWNoIiwiTm9kZSIsIm1hc2siLCJ0b2dnbGUiLCJUb2dnbGUiLCJsYWJlbEJldCIsIkxhYmVsIiwibGFiZWxNaW4iLCJsYWJlbE1heCIsIm1pbiIsIm1heCIsImluaXQiLCJiZXQiLCJiZXRNaW4iLCJiZXRNYXgiLCJoIiwic3RyaW5nIiwibnVtYmVyV2l0aENvbW1hcyIsImlzQ2hlY2tlZCIsIm9uRW5hYmxlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50U3RhcnQiLCJUT1VDSF9NT1ZFIiwiZXZlbnRNb3ZlIiwiVE9VQ0hfRU5EIiwiZXZlbnRFbmQiLCJUT1VDSF9DQU5DRUwiLCJvbkRpc2FibGUiLCJvZmYiLCJlIiwicnVuQWN0aW9uIiwic2NhbGVUbyIsIm9mZnNldFgiLCJsb2NhbFgiLCJnZXRMb2NhdGlvblgiLCJ4IiwicG9zaXRpb24iLCJ3aWR0aCIsInYyIiwib25Pa0NsaWNrIiwiUmVkVCIsImluR2FtZSIsImxvYWRpbmciLCJhY3RpdmUiLCJzZW5kIiwiZyIsInBva2VyIiwibmFwIiwiYmFsYW5zIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwiYXV0byIsIm9uQ2FuY2VsQ2xpY2siLCJub2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxTQUFVTCxHQUFHTSxJQURGO0FBRVhDLFFBQVVQLEdBQUdNLElBRkY7QUFHWEUsVUFBVVIsR0FBR1MsTUFIRjtBQUlYQyxZQUFVVixHQUFHVyxLQUpGO0FBS1hDLFlBQVVaLEdBQUdXLEtBTEY7QUFNWEUsWUFBVWIsR0FBR1csS0FORjtBQU9YRyxPQUFLLEVBUE07QUFRWEMsT0FBSztBQVJNLEVBSEo7QUFhUkMsT0FBTSxjQUFTQyxHQUFULEVBQWE7QUFDbEIsT0FBS0MsTUFBTCxHQUFjRCxNQUFJLEtBQUtILEdBQXZCO0FBQ0EsT0FBS0ssTUFBTCxHQUFjRixNQUFJLEtBQUtGLEdBQXZCO0FBQ0EsT0FBS0ssQ0FBTCxHQUFjLEtBQUtGLE1BQUwsR0FBYyxPQUFkLEdBQXdCLElBQXhCLEdBQStCLE9BQTdDOztBQUVBLE9BQUtOLFFBQUwsQ0FBY1MsTUFBZCxHQUF1QixLQUFLWCxRQUFMLENBQWNXLE1BQWQsR0FBdUJ2QixPQUFPd0IsZ0JBQVAsQ0FBd0IsS0FBS0osTUFBN0IsQ0FBOUM7QUFDQSxPQUFLTCxRQUFMLENBQWNRLE1BQWQsR0FBdUJ2QixPQUFPd0IsZ0JBQVAsQ0FBd0IsS0FBS0gsTUFBN0IsQ0FBdkI7QUFDQSxPQUFLRCxNQUFMLEdBQWMsS0FBS0EsTUFBTCxHQUFZLEtBQUtFLENBQS9CO0FBQ0EsT0FBS0QsTUFBTCxHQUFjLEtBQUtBLE1BQUwsR0FBWSxLQUFLQyxDQUEvQjs7QUFFQSxPQUFLWixNQUFMLENBQVllLFNBQVosR0FBd0IsSUFBeEI7QUFDQSxFQXhCTztBQXlCUkMsV0FBVSxvQkFBVztBQUNwQixPQUFLbkIsS0FBTCxDQUFXb0IsRUFBWCxDQUFjekIsR0FBR00sSUFBSCxDQUFRb0IsU0FBUixDQUFrQkMsV0FBaEMsRUFBOEMsS0FBS0MsVUFBbkQsRUFBK0QsSUFBL0Q7QUFDQSxPQUFLdkIsS0FBTCxDQUFXb0IsRUFBWCxDQUFjekIsR0FBR00sSUFBSCxDQUFRb0IsU0FBUixDQUFrQkcsVUFBaEMsRUFBOEMsS0FBS0MsU0FBbkQsRUFBK0QsSUFBL0Q7QUFDQSxPQUFLekIsS0FBTCxDQUFXb0IsRUFBWCxDQUFjekIsR0FBR00sSUFBSCxDQUFRb0IsU0FBUixDQUFrQkssU0FBaEMsRUFBOEMsS0FBS0MsUUFBbkQsRUFBK0QsSUFBL0Q7QUFDQSxPQUFLM0IsS0FBTCxDQUFXb0IsRUFBWCxDQUFjekIsR0FBR00sSUFBSCxDQUFRb0IsU0FBUixDQUFrQk8sWUFBaEMsRUFBOEMsS0FBS0QsUUFBbkQsRUFBK0QsSUFBL0Q7QUFDQSxFQTlCTztBQStCUkUsWUFBVyxxQkFBVztBQUNyQixPQUFLN0IsS0FBTCxDQUFXOEIsR0FBWCxDQUFlbkMsR0FBR00sSUFBSCxDQUFRb0IsU0FBUixDQUFrQkMsV0FBakMsRUFBK0MsS0FBS0MsVUFBcEQsRUFBZ0UsSUFBaEU7QUFDQSxPQUFLdkIsS0FBTCxDQUFXOEIsR0FBWCxDQUFlbkMsR0FBR00sSUFBSCxDQUFRb0IsU0FBUixDQUFrQkcsVUFBakMsRUFBK0MsS0FBS0MsU0FBcEQsRUFBZ0UsSUFBaEU7QUFDQSxPQUFLekIsS0FBTCxDQUFXOEIsR0FBWCxDQUFlbkMsR0FBR00sSUFBSCxDQUFRb0IsU0FBUixDQUFrQkssU0FBakMsRUFBK0MsS0FBS0MsUUFBcEQsRUFBZ0UsSUFBaEU7QUFDQSxPQUFLM0IsS0FBTCxDQUFXOEIsR0FBWCxDQUFlbkMsR0FBR00sSUFBSCxDQUFRb0IsU0FBUixDQUFrQk8sWUFBakMsRUFBK0MsS0FBS0QsUUFBcEQsRUFBZ0UsSUFBaEU7O0FBRUE7QUFDQTtBQUNBLEVBdkNPO0FBd0NSSixhQUFZLG9CQUFTUSxDQUFULEVBQVc7QUFDdEIsT0FBSy9CLEtBQUwsQ0FBV2dDLFNBQVgsQ0FBcUJyQyxHQUFHc0MsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FBckI7QUFDQSxPQUFLQyxPQUFMLEdBQWUsRUFBQ0MsUUFBUUosRUFBRS9CLEtBQUYsQ0FBUW9DLFlBQVIsRUFBVCxFQUFpQ0MsR0FBRyxLQUFLckMsS0FBTCxDQUFXc0MsUUFBWCxDQUFvQkQsQ0FBeEQsRUFBZjtBQUNBLEVBM0NPO0FBNENSWixZQUFXLG1CQUFTTSxDQUFULEVBQVc7QUFDckIsTUFBSU0sSUFBSU4sRUFBRS9CLEtBQUYsQ0FBUW9DLFlBQVIsS0FBdUIsS0FBS0YsT0FBTCxDQUFhQyxNQUFwQyxHQUEyQyxLQUFLRCxPQUFMLENBQWFHLENBQWhFO0FBQ0EsTUFBSUEsSUFBSSxDQUFSLEVBQVc7QUFDVkEsT0FBSSxDQUFKO0FBQ0EsR0FGRCxNQUVNLElBQUdBLElBQUksR0FBUCxFQUFXO0FBQ2hCQSxPQUFJLEdBQUo7QUFDQTtBQUNELE9BQUtuQyxJQUFMLENBQVVxQyxLQUFWLEdBQWtCRixDQUFsQjtBQUNBLE9BQUtyQyxLQUFMLENBQVdzQyxRQUFYLEdBQXNCM0MsR0FBRzZDLEVBQUgsQ0FBTUgsQ0FBTixFQUFTLENBQVQsQ0FBdEI7QUFDQSxNQUFJekIsTUFBU3lCLElBQUUsR0FBSCxJQUFTLEtBQUt2QixNQUFMLEdBQVksS0FBS0QsTUFBMUIsQ0FBRCxHQUFvQyxLQUFLQSxNQUExQyxJQUFtRCxDQUE3RDtBQUNBLE9BQUtSLFFBQUwsQ0FBY1csTUFBZCxHQUF1QnZCLE9BQU93QixnQkFBUCxDQUF3QkwsTUFBSSxLQUFLRyxDQUFqQyxDQUF2QjtBQUNBLEVBdkRPO0FBd0RSWSxXQUFVLG9CQUFVO0FBQ25CLE9BQUszQixLQUFMLENBQVdnQyxTQUFYLENBQXFCckMsR0FBR3NDLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLENBQXJCO0FBQ0EsRUExRE87QUEyRFJRLFlBQVcscUJBQVU7QUFDcEI5QyxLQUFHK0MsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE9BQWYsQ0FBdUJDLE1BQXZCLEdBQWdDLElBQWhDO0FBQ0FsRCxLQUFHK0MsSUFBSCxDQUFRSSxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxPQUFNLEVBQUNDLEtBQUk7QUFDM0JDLGNBQVF6RCxPQUFPMEQscUJBQVAsQ0FBNkIsS0FBSzlDLFFBQUwsQ0FBY1csTUFBM0MsQ0FEbUI7QUFFM0JvQyxZQUFNLEtBQUtqRCxNQUFMLENBQVllO0FBRlMsTUFBTCxFQUFQLEVBQUgsRUFBYjtBQUlBLEVBakVPO0FBa0VSbUMsZ0JBQWUseUJBQVU7QUFDeEIsT0FBS0MsSUFBTCxDQUFVVCxNQUFWLEdBQW1CLEtBQW5CO0FBQ0E7QUFwRU8sQ0FBVCIsImZpbGUiOiJQb2tlck5hcEdhbWUuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFBva2VyIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHRvdWNoOiAgICBjYy5Ob2RlLFxyXG5cdFx0bWFzazogICAgIGNjLk5vZGUsXHJcblx0XHR0b2dnbGU6ICAgY2MuVG9nZ2xlLFxyXG5cdFx0bGFiZWxCZXQ6IGNjLkxhYmVsLFxyXG5cdFx0bGFiZWxNaW46IGNjLkxhYmVsLFxyXG5cdFx0bGFiZWxNYXg6IGNjLkxhYmVsLFxyXG5cdFx0bWluOiAnJyxcclxuXHRcdG1heDogJycsXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbihiZXQpe1xyXG5cdFx0dGhpcy5iZXRNaW4gPSBiZXQqdGhpcy5taW47XHJcblx0XHR0aGlzLmJldE1heCA9IGJldCp0aGlzLm1heDtcclxuXHRcdHRoaXMuaCAgICAgID0gdGhpcy5iZXRNaW4gPCAxMDAwMDAwID8gMTAwMCA6IDEwMDAwMDA7XHJcblxyXG5cdFx0dGhpcy5sYWJlbE1pbi5zdHJpbmcgPSB0aGlzLmxhYmVsQmV0LnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuYmV0TWluKTtcclxuXHRcdHRoaXMubGFiZWxNYXguc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5iZXRNYXgpO1xyXG5cdFx0dGhpcy5iZXRNaW4gPSB0aGlzLmJldE1pbi90aGlzLmg7XHJcblx0XHR0aGlzLmJldE1heCA9IHRoaXMuYmV0TWF4L3RoaXMuaDtcclxuXHJcblx0XHR0aGlzLnRvZ2dsZS5pc0NoZWNrZWQgPSB0cnVlO1xyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy50b3VjaC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgIHRoaXMuZXZlbnRTdGFydCwgdGhpcyk7XHJcblx0XHR0aGlzLnRvdWNoLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICAgdGhpcy5ldmVudE1vdmUsICB0aGlzKTtcclxuXHRcdHRoaXMudG91Y2gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAgICB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG5cdFx0dGhpcy50b3VjaC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuZXZlbnRFbmQsICAgdGhpcyk7XHJcblx0fSxcclxuXHRvbkRpc2FibGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy50b3VjaC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICB0aGlzLmV2ZW50U3RhcnQsIHRoaXMpO1xyXG5cdFx0dGhpcy50b3VjaC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgICB0aGlzLmV2ZW50TW92ZSwgIHRoaXMpO1xyXG5cdFx0dGhpcy50b3VjaC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAgICB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG5cdFx0dGhpcy50b3VjaC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG5cclxuXHRcdC8vdGhpcy5tYXNrLndpZHRoICAgICA9IDA7XHJcblx0XHQvL3RoaXMudG91Y2gucG9zaXRpb24gPSBjYy52MigwLCAwKTtcclxuXHR9LFxyXG5cdGV2ZW50U3RhcnQ6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0dGhpcy50b3VjaC5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDAuNykpO1xyXG5cdFx0dGhpcy5vZmZzZXRYID0ge2xvY2FsWDogZS50b3VjaC5nZXRMb2NhdGlvblgoKSwgeDogdGhpcy50b3VjaC5wb3NpdGlvbi54fTtcclxuXHR9LFxyXG5cdGV2ZW50TW92ZTogZnVuY3Rpb24oZSl7XHJcblx0XHRsZXQgeCA9IGUudG91Y2guZ2V0TG9jYXRpb25YKCktdGhpcy5vZmZzZXRYLmxvY2FsWCt0aGlzLm9mZnNldFgueDtcclxuXHRcdGlmICh4IDwgMCkge1xyXG5cdFx0XHR4ID0gMDtcclxuXHRcdH1lbHNlIGlmKHggPiA0MDEpe1xyXG5cdFx0XHR4ID0gNDAxO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5tYXNrLndpZHRoID0geDtcclxuXHRcdHRoaXMudG91Y2gucG9zaXRpb24gPSBjYy52Mih4LCAwKTtcclxuXHRcdGxldCBiZXQgPSAoKCh4LzQwMSkqKHRoaXMuYmV0TWF4LXRoaXMuYmV0TWluKSkrdGhpcy5iZXRNaW4pPj4wO1xyXG5cdFx0dGhpcy5sYWJlbEJldC5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhiZXQqdGhpcy5oKTtcclxuXHR9LFxyXG5cdGV2ZW50RW5kOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy50b3VjaC5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDAuNikpO1xyXG5cdH0sXHJcblx0b25Pa0NsaWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtnOntwb2tlcjp7bmFwOntcclxuXHRcdFx0YmFsYW5zOiBIZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMubGFiZWxCZXQuc3RyaW5nKSxcclxuXHRcdFx0YXV0bzogdGhpcy50b2dnbGUuaXNDaGVja2VkLFxyXG5cdFx0fX19fSk7XHJcblx0fSxcclxuXHRvbkNhbmNlbENsaWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=