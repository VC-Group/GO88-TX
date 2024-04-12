
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/MiniPoker/MiniPoker_reel/MiniPoker_reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9effbtyV3ZM8bEtkGsDTJkG', 'MiniPoker_reel');
// Script/Game/MiniPoker/MiniPoker_reel/MiniPoker_reel.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {},
	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		this.card = [];
		var self = this;
		Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
			var ooT = cc.instantiate(self.RedT.cardf);
			ooT.width = 95;
			ooT.height = 138;
			self.node.addChild(ooT);
			ooT = ooT.getComponent(cc.Sprite);
			return ooT;
		})).then(function (result) {
			_this.card = result;
			_this.random(true);
		});
	},
	random: function random() {
		var newG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		var self = this;
		this.card.forEach(function (obj, index) {
			if (newG) {
				obj.spriteFrame = cc.RedT.util.card.random();
			} else if (index !== 0 && index !== 25) {
				obj.spriteFrame = cc.RedT.util.card.random();
			}
		});
	},
	spin: function spin(index) {
		this.node.stopAllActions();
		var self = this;
		var i = index;
		var d = cc.moveTo(this.RedT.speed(), cc.v2(this.node.x, -(this.node.height - 138))).easing(cc.easeInOut(3));
		var p = cc.callFunc(function () {
			this.card[25].spriteFrame = this.card[0].spriteFrame;
			this.node.y = 0;
		}, this);

		if (i === 4) {
			var onEf = cc.callFunc(function () {
				this.RedT.hieuUng();
			}, this);
			this.node.runAction(cc.sequence(cc.delayTime(i * 0.1), d, p, onEf));
		} else this.node.runAction(cc.sequence(cc.delayTime(i * 0.1), d, p));
	},
	stop: function stop() {
		this.node.stopAllActions();
		if (void 0 !== this.card && void 0 !== this.card[25] && void 0 !== this.card[25].spriteFrame) {
			this.card[25].spriteFrame = this.card[0].spriteFrame;
		}
		this.node.y = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaVBva2VyXFxNaW5pUG9rZXJfcmVlbC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1pbmlQb2tlclxcTWluaVBva2VyX3JlZWwvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1pbmlQb2tlclxcTWluaVBva2VyX3JlZWxcXE1pbmlQb2tlcl9yZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXQiLCJvYmoiLCJSZWRUIiwiY2FyZCIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaW5kZXgiLCJvb1QiLCJpbnN0YW50aWF0ZSIsImNhcmRmIiwid2lkdGgiLCJoZWlnaHQiLCJub2RlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJ0aGVuIiwicmVzdWx0IiwicmFuZG9tIiwibmV3RyIsImZvckVhY2giLCJzcHJpdGVGcmFtZSIsInV0aWwiLCJzcGluIiwic3RvcEFsbEFjdGlvbnMiLCJpIiwiZCIsIm1vdmVUbyIsInNwZWVkIiwidjIiLCJ4IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicCIsImNhbGxGdW5jIiwieSIsIm9uRWYiLCJoaWV1VW5nIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjtBQUVSQyxhQUFZLEVBRko7QUFJUkMsT0FBTSxjQUFTQyxHQUFULEVBQWE7QUFBQTs7QUFDbEIsT0FBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsT0FBS0UsSUFBTCxHQUFZLEVBQVo7QUFDQSxNQUFJQyxPQUFRLElBQVo7QUFDQUMsVUFBUUMsR0FBUixDQUFZLENBQUMs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QWlDQyxDQUFqQyxFQUFvQ08sQ0FBcEMsRUFBdUNHLElBQXZDLENBQXBCO0FBQ0EsR0FMRCxNQU1DLEtBQUt4QixJQUFMLENBQVUwQixTQUFWLENBQW9CN0MsR0FBRzhDLFFBQUgsQ0FBWTlDLEdBQUcrQyxTQUFILENBQWFmLElBQUUsR0FBZixDQUFaLEVBQWlDQyxDQUFqQyxFQUFvQ08sQ0FBcEMsQ0FBcEI7QUFDRCxFQWhETztBQWlEUlEsT0FBTSxnQkFBVTtBQUNmLE9BQUs3QixJQUFMLENBQVVZLGNBQVY7QUFDQSxNQUFJLEtBQUssQ0FBTCxLQUFXLEtBQUt2QixJQUFoQixJQUNILEtBQUssQ0FBTCxLQUFXLEtBQUtBLElBQUwsQ0FBVSxFQUFWLENBRFIsSUFFSCxLQUFLLENBQUwsS0FBVyxLQUFLQSxJQUFMLENBQVUsRUFBVixFQUFjb0IsV0FGMUIsRUFHQTtBQUNDLFFBQUtwQixJQUFMLENBQVUsRUFBVixFQUFjb0IsV0FBZCxHQUE0QixLQUFLcEIsSUFBTCxDQUFVLENBQVYsRUFBYW9CLFdBQXpDO0FBQ0E7QUFDRCxPQUFLVCxJQUFMLENBQVV1QixDQUFWLEdBQWMsQ0FBZDtBQUNBO0FBMURPLENBQVQiLCJmaWxlIjoiTWluaVBva2VyX3JlZWwuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxNaW5pUG9rZXJcXE1pbmlQb2tlcl9yZWVsIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblx0cHJvcGVydGllczoge1xyXG5cdH0sXHJcblx0aW5pdDogZnVuY3Rpb24ob2JqKXtcclxuXHRcdHRoaXMuUmVkVCA9IG9iajtcclxuXHRcdHRoaXMuY2FyZCA9IFtdO1xyXG5cdFx0dmFyIHNlbGYgID0gdGhpcztcclxuXHRcdFByb21pc2UuYWxsKFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLm1hcChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuXHRcdFx0dmFyIG9vVCA9IGNjLmluc3RhbnRpYXRlKHNlbGYuUmVkVC5jYXJkZik7XHJcblx0XHRcdG9vVC53aWR0aCAgPSA5NTtcclxuXHRcdFx0b29ULmhlaWdodCA9IDEzODtcclxuXHRcdFx0c2VsZi5ub2RlLmFkZENoaWxkKG9vVCk7XHJcblx0XHRcdG9vVCA9IG9vVC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHRcdFx0cmV0dXJuIG9vVFxyXG5cdFx0fSkpXHJcblx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLmNhcmQgPSByZXN1bHQ7XHJcblx0XHRcdHRoaXMucmFuZG9tKHRydWUpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRyYW5kb206IGZ1bmN0aW9uKG5ld0cgPSBmYWxzZSl7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLmNhcmQuZm9yRWFjaChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuXHRcdFx0aWYgKG5ld0cpIHtcclxuXHRcdFx0XHRvYmouc3ByaXRlRnJhbWUgPSBjYy5SZWRULnV0aWwuY2FyZC5yYW5kb20oKTtcclxuXHRcdFx0fWVsc2UgaWYgKGluZGV4ICE9PSAwICYmIGluZGV4ICE9PSAyNSl7XHJcblx0XHRcdFx0b2JqLnNwcml0ZUZyYW1lID0gY2MuUmVkVC51dGlsLmNhcmQucmFuZG9tKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0c3BpbjogZnVuY3Rpb24oaW5kZXgpe1xyXG5cdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgaSA9IGluZGV4O1xyXG5cdFx0dmFyIGQgPSBjYy5tb3ZlVG8odGhpcy5SZWRULnNwZWVkKCksIGNjLnYyKHRoaXMubm9kZS54LCAtKHRoaXMubm9kZS5oZWlnaHQtMTM4KSkpLmVhc2luZyhjYy5lYXNlSW5PdXQoMykpO1xyXG5cdFx0dmFyIHAgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5jYXJkWzI1XS5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZFswXS5zcHJpdGVGcmFtZTtcclxuXHRcdFx0dGhpcy5ub2RlLnkgPSAwO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0aWYgKGkgPT09IDQpe1xyXG5cdFx0XHR2YXIgb25FZiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuUmVkVC5oaWV1VW5nKCk7XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpKjAuMSksIGQsIHAsIG9uRWYpKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpKjAuMSksIGQsIHApKTtcclxuXHR9LFxyXG5cdHN0b3A6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdGlmICh2b2lkIDAgIT09IHRoaXMuY2FyZCAmJlxyXG5cdFx0XHR2b2lkIDAgIT09IHRoaXMuY2FyZFsyNV0gJiZcclxuXHRcdFx0dm9pZCAwICE9PSB0aGlzLmNhcmRbMjVdLnNwcml0ZUZyYW1lKVxyXG5cdFx0e1xyXG5cdFx0XHR0aGlzLmNhcmRbMjVdLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkWzBdLnNwcml0ZUZyYW1lO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ub2RlLnkgPSAwO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=