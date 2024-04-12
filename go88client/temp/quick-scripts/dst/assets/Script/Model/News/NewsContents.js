
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/News/NewsContents.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '359e3FxWmpPGarLjvZuJIkS', 'NewsContents');
// Script/Model/News/NewsContents.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,
	properties: {
		prefabItem: cc.Prefab
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	update: function update(t) {
		this.node.position = cc.v2(this.node.position.x - 100 * t, 0);
		if (-this.node.width > this.node.position.x) {
			this.reset();
		}
	},
	setNews: function setNews() {
		this.node.active = true;
		this.node.position = cc.v2(this.RedT.node.width + 200, 0);
	},
	reset: function reset() {
		this.node.destroyAllChildren();
		this.node.active = false;
	},
	onData: function onData(data) {
		if (void 0 !== data.a) {
			this.NewsAddArray(data.a);
		}

		if (void 0 !== data.t) {
			this.NewsAddText(data.t);
		}
	},
	NewsAddArray: function NewsAddArray(arr) {
		var _this = this;

		var self = this;
		Promise.all(arr.map(function (text) {
			var item = cc.instantiate(self.prefabItem);
			item = item.getComponent('NewsItem');

			item.users.string = text.users;
			item.bet.string = helper.numberWithCommas(text.bet);
			item.game.string = text.game;

			self.node.addChild(item.node);
			return item;
		})).then(function (result) {
			if (!_this.node.active) {
				_this.setNews();
			}
		});
	},
	NewsAddText: function NewsAddText(text) {
		var item = cc.instantiate(this.prefabItem);
		item = item.getComponent('NewsItem');

		if (!!text.status) {
			item.status.node.active = true;
			if (text.status == 1) {
				item.status.string = "(Nổ Hũ)";
				item.win.string = "nổ hũ";
			} else {
				item.status.string = "(Thắng Lớn)";
			}
		}
		item.users.string = text.users;
		item.bet.string = helper.numberWithCommas(text.bet);
		item.game.string = text.game;

		this.node.addChild(item.node);

		if (!this.node.active) {
			this.setNews();
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTmV3cy8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXE5ld3MvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxOZXdzXFxOZXdzQ29udGVudHMuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByZWZhYkl0ZW0iLCJQcmVmYWIiLCJpbml0Iiwib2JqIiwiUmVkVCIsInVwZGF0ZSIsInQiLCJub2RlIiwicG9zaXRpb24iLCJ2MiIsIngiLCJ3aWR0aCIsInJlc2V0Iiwic2V0TmV3cyIsImFjdGl2ZSIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsIm9uRGF0YSIsImRhdGEiLCJhIiwiTmV3c0FkZEFycmF5IiwiTmV3c0FkZFRleHQiLCJhcnIiLCJzZWxmIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInRleHQiLCJpdGVtIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJ1c2VycyIsInN0cmluZyIsImJldCIsIm51bWJlcldpdGhDb21tYXMiLCJnYW1lIiwiYWRkQ2hpbGQiLCJ0aGVuIiwic3RhdHVzIiwid2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjtBQUVSQyxhQUFZO0FBQ1hDLGNBQVlMLEdBQUdNO0FBREosRUFGSjtBQUtSQyxPQUFNLGNBQVNDLEdBQVQsRUFBYTtBQUNsQixPQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQSxFQVBPO0FBUVJFLFNBQVEsZ0JBQVNDLENBQVQsRUFBVztBQUNsQixPQUFLQyxJQUFMLENBQVVDLFFBQVYsR0FBcUJiLEdBQUdjLEVBQUgsQ0FBTSxLQUFLRixJQUFM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LElBQXpCOztBQUVBLE9BQUszQixJQUFMLENBQVU0QixRQUFWLENBQW1CUixLQUFLcEIsSUFBeEI7O0FBRUEsTUFBSSxDQUFDLEtBQUtBLElBQUwsQ0FBVU8sTUFBZixFQUF1QjtBQUN0QixRQUFLRCxPQUFMO0FBQ0E7QUFDRDtBQXZFTyxDQUFUIiwiZmlsZSI6Ik5ld3NDb250ZW50cy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXE5ld3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRwcmVmYWJJdGVtOiBjYy5QcmVmYWIsXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbihvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdH0sXHJcblx0dXBkYXRlOiBmdW5jdGlvbih0KXtcclxuXHRcdHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYyKHRoaXMubm9kZS5wb3NpdGlvbi54LSgxMDAqdCksIDApO1xyXG5cdFx0aWYgKC10aGlzLm5vZGUud2lkdGggPiB0aGlzLm5vZGUucG9zaXRpb24ueCkge1xyXG5cdFx0XHR0aGlzLnJlc2V0KCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzZXROZXdzOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSAgID0gdHJ1ZTtcclxuXHRcdHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYyKHRoaXMuUmVkVC5ub2RlLndpZHRoKzIwMCwgMCk7XHJcblx0fSxcclxuXHRyZXNldDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMubm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmEpe1xyXG5cdFx0XHR0aGlzLk5ld3NBZGRBcnJheShkYXRhLmEpXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS50KXtcclxuXHRcdFx0dGhpcy5OZXdzQWRkVGV4dChkYXRhLnQpXHJcblx0XHR9XHJcblx0fSxcclxuXHROZXdzQWRkQXJyYXk6IGZ1bmN0aW9uKGFycil7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXNcclxuXHRcdFByb21pc2UuYWxsKGFyci5tYXAoZnVuY3Rpb24odGV4dCl7XHJcblx0XHRcdHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUoc2VsZi5wcmVmYWJJdGVtKTtcclxuXHRcdFx0XHRpdGVtID0gaXRlbS5nZXRDb21wb25lbnQoJ05ld3NJdGVtJyk7XHJcblxyXG5cdFx0XHRpdGVtLnVzZXJzLnN0cmluZyA9IHRleHQudXNlcnM7XHJcblx0XHRcdGl0ZW0uYmV0LnN0cmluZyAgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXModGV4dC5iZXQpO1xyXG5cdFx0XHRpdGVtLmdhbWUuc3RyaW5nICA9IHRleHQuZ2FtZTtcclxuXHJcblx0XHRcdHNlbGYubm9kZS5hZGRDaGlsZChpdGVtLm5vZGUpO1xyXG5cdFx0XHRyZXR1cm4gaXRlbTtcclxuXHRcdH0pKS50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdGlmICghdGhpcy5ub2RlLmFjdGl2ZSkge1xyXG5cdFx0XHRcdHRoaXMuc2V0TmV3cygpXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuXHROZXdzQWRkVGV4dDogZnVuY3Rpb24odGV4dCl7XHJcblx0XHR2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiSXRlbSk7XHJcblx0XHRcdGl0ZW0gPSBpdGVtLmdldENvbXBvbmVudCgnTmV3c0l0ZW0nKTtcclxuXHJcblx0XHRpZiAoISF0ZXh0LnN0YXR1cykge1xyXG5cdFx0XHRpdGVtLnN0YXR1cy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGlmICh0ZXh0LnN0YXR1cyA9PSAxKSB7XHJcblx0XHRcdFx0aXRlbS5zdGF0dXMuc3RyaW5nICAgICAgPSBcIihO4buVIEjFqSlcIjtcclxuXHRcdFx0XHRpdGVtLndpbi5zdHJpbmcgICAgICAgICA9IFwibuG7lSBoxalcIjtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aXRlbS5zdGF0dXMuc3RyaW5nID0gXCIoVGjhuq9uZyBM4bubbilcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aXRlbS51c2Vycy5zdHJpbmcgPSB0ZXh0LnVzZXJzO1xyXG5cdFx0aXRlbS5iZXQuc3RyaW5nICAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0ZXh0LmJldCk7XHJcblx0XHRpdGVtLmdhbWUuc3RyaW5nICA9IHRleHQuZ2FtZTtcclxuXHJcblx0XHR0aGlzLm5vZGUuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcclxuXHJcblx0XHRpZiAoIXRoaXMubm9kZS5hY3RpdmUpIHtcclxuXHRcdFx0dGhpcy5zZXROZXdzKClcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19