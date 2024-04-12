
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Zeus/playBonus/Zeus_playBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc773mHzahMbLekW0+USdGD', 'Zeus_playBonus');
// Script/Game/Zeus/playBonus/Zeus_playBonus.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		numberBonus: cc.Label,
		listBox: cc.Node,
		notice: cc.Node,
		numberWin: cc.Label,
		icons: {
			default: [],
			type: cc.SpriteFrame
		}
	},
	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		Promise.all(this.listBox.children.map(function (box) {
			return box.getComponent('Zeus_bonus_item');
		})).then(function (result) {
			_this.listBox = result;
		});
	},
	onPlay: function onPlay(box) {
		this.reset();
		this.node.active = true;
		this.numberBonus.string = box;
	},
	onClickBox: function onClickBox(e) {
		if (!!this.numberBonus.string) {
			this.RedT.playClick();
			this.onSend(e.target.name);
		}
	},
	closeNotice: function closeNotice() {
		this.notice.active = this.node.active = false;
		this.RedT.hieuUng();
	},
	onData: function onData(data) {
		if (void 0 !== data.box) {
			var obj = this.listBox[data.box];
			obj.open.active = true;
			obj.close.active = false;
			obj.text.string = helper.numberWithCommas(data.bet);
			this.numberBonus.string = data.bonus;
			this.scheduleOnce(function () {
				obj.open.active = false;
			}, 1.5);
		}
		if (void 0 !== data.win) {
			this.notice.active = true;
			this.numberWin.string = helper.numberWithCommas(data.win);
			this.RedT.vuathang.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.RedT.vuathang.string) * 1 + data.win);
		}
	},
	onSend: function onSend(box) {
		cc.RedT.send({ g: { zeus: { bonus: { box: box } } } });
	},
	reset: function reset() {
		var self = this;
		Promise.all(this.listBox.map(function (box) {
			box.open.active = false;
			box.close.active = true;
			box.text.string = "";
		}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1c1xccGxheUJvbnVzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1c1xccGxheUJvbnVzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxwbGF5Qm9udXNcXFpldXNfcGxheUJvbnVzLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJudW1iZXJCb251cyIsIkxhYmVsIiwibGlzdEJveCIsIk5vZGUiLCJub3RpY2UiLCJudW1iZXJXaW4iLCJpY29ucyIsImRlZmF1bHQiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJpbml0Iiwib2JqIiwiUmVkVCIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsImJveCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJvblBsYXkiLCJyZXNldCIsIm5vZGUiLCJhY3RpdmUiLCJzdHJpbmciLCJvbkNsaWNrQm94IiwiZSIsInBsYXlDbGljayIsIm9uU2VuZCIsInRhcmdldCIsIm5hbWUiLCJjbG9zZU5vdGljZSIsImhpZXVVbmciLCJvbkRhdGEiLCJkYXRhIiwib3BlbiIsImNsb3NlIiwidGV4dCIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJib251cyIsInNjaGVkdWxlT25jZSIsIndpbiIsInZ1YXRoYW5nIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwic2VuZCIsImciLCJ6ZXVzIiwic2VsZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsZUFBYUwsR0FBR00sS0FETDtBQUVYQyxXQUFhUCxHQUFHUSxJQUZMO0FBR1hDLFVBQWFULEdBQUdRLElBSEw7QUFJWEUsYUFBYVYsR0FBR00sS0FKTDtBQUtYSyxTQUFPO0FBQ05DLFlBQVMsRUFESDtBQUVOQyxTQUFNYixHQUFHYztBQUZIO0FBTEksRUFISjtBQWFSQyxPQUFNLGNBQVNDLEdBQVQsRUFBYTtBQUFBOztBQUNsQixPQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQUUsVUFBUUMsR0FBUixDQUFZLEtBQUtaLE9BQUwsQ0FBYWEsUUFBYixDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBU0MsR0FBVCxFQUFhO0FBQ2xELFVBQU9BLElBQUlDLFlBQUosQ0FBaUIsaUJBQWpCLENBQVA7QUFDQSxHQUZXLENBQVosRUFHQ0MsSUFIRCxDQUdNLGtCQUFVO0FBQ2YsU0FBS2pCLE9BQUwsR0FBZWtCLE1BQWY7QUFDQSxHQUxEO0FBTUEsRUFyQk87QUFzQlJDLFNBQVEsZ0JBQVNKLEdBQVQsRUFBYTtBQUNwQixPQUFLSyxLQUFMO0FBQ0EsT0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLElBQW5CO0FBQ0EsT0FBS3hCLFdBQUwsQ0FBaUJ5QixNQUFqQixHQUEwQlIsR0FBMUI7QUFDQSxFQTFCTztBQTJCUlMsYUFBWSxvQkFBU0MsQ0FBVCxFQUFZO0FBQ3ZCLE1BQUksQ0FBQyxDQUFDLEtBQUszQixXQUFMLENBQWlCeUIsTUFBdkIsRUFBK0I7QUFDOUIsUUFBS2IsSUFBTCxDQUFVZ0IsU0FBVjtBQUNBLFFBQUtDLE1BQUwsQ0FBWUYsRUFBRUcsTUFBRixDQUFTQyxJQUFyQjtBQUNBO0FBQ0QsRUFoQ087QUFpQ1JDLGNBQWEsdUJBQVU7QUFDdEIsT0FBSzVCLE1BQUwsQ0FBWW9CLE1BQVosR0FBcUIsS0FBS0QsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQXhDO0FBQ0EsT0FBS1osSUFBTCxDQUFVcUIsT0FBVjtBQUNBLEVBcENPO0FBcUNSQyxTQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDckIsTUFBSSxLQUFLLENBQUwsS0FBV0EsS0FBS2xCLEdBQXBCLEVBQXlCO0FBQ3hCLE9BQUlOLE1BQU0sS0FBS1QsT0FBTCxDQUFhaUMsS0FBS2xCLEdBQWxCLENBQVY7QUFDQU4sT0FBSXlCLElBQUosQ0FBU1osTUFBVCxHQUFtQixJQUFuQjtBQUNBYixPQUFJMEIsS0FBSixDQUFVYixNQUFWLEdBQW1CLEtBQW5CO0FBQ0FiLE9BQUkyQixJQUFKLENBQVNiLE1BQVQsR0FBbUJoQyxPQUFPOEMsZ0JBQVAsQ0FBd0JKLEtBQUtLLEdBQTdCLENBQW5CO0FBQ0EsUUFBS3hDLFdBQUwsQ0FBaUJ5QixNQUFqQixHQUEwQlUsS0FBS00sS0FBL0I7QUFDQSxRQUFLQyxZQUFMLENBQWtCLFlBQVk7QUFDN0IvQixRQUFJeUIsSUFBSixDQUFTWixNQUFULEdBQW1CLEtBQW5CO0FBQ0EsSUFGRCxFQUVHLEdBRkg7QUFHQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdXLEtBQUtRLEdBQXBCLEVBQXlCO0FBQ3hCLFFBQUt2QyxNQUFMLENBQVlvQixNQUFaLEdBQXFCLElBQXJCO0FBQ0EsUUFBS25CLFNBQUwsQ0FBZW9CLE1BQWYsR0FBd0JoQyxPQUFPOEMsZ0JBQVAsQ0FBd0JKLEtBQUtRLEdBQTdCLENBQXhCO0FBQ0EsUUFBSy9CLElBQUwsQ0FBVWdDLFFBQVYsQ0FBbUJuQixNQUFuQixHQUE0QmhDLE9BQU84QyxnQkFBUCxDQUF3QjlDLE9BQU9vRCxxQkFBUCxDQUE2QixLQUFLakMsSUFBTCxDQUFVZ0MsUUFBVixDQUFtQm5CLE1BQWhELElBQXdELENBQXhELEdBQTREVSxLQUFLUSxHQUF6RixDQUE1QjtBQUNBO0FBQ0QsRUFyRE87QUFzRFJkLFNBQVEsZ0JBQVNaLEdBQVQsRUFBYTtBQUNwQnRCLEtBQUdpQixJQUFILENBQVFrQyxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxNQUFLLEVBQUNQLE9BQU0sRUFBQ3hCLEtBQUlBLEdBQUwsRUFBUCxFQUFOLEVBQUgsRUFBYjtBQUNBLEVBeERPO0FBeURSSyxRQUFPLGlCQUFVO0FBQ2hCLE1BQUkyQixPQUFPLElBQVg7QUFDQXBDLFVBQVFDLEdBQVIsQ0FBWSxLQUFLWixPQUFMLENBQWFjLEdBQWIsQ0FBaUIsVUFBU0MsR0FBVCxFQUFhO0FBQ3pDQSxPQUFJbUIsSUFBSixDQUFTWixNQUFULEdBQW1CLEtBQW5CO0FBQ0FQLE9BQUlvQixLQUFKLENBQVViLE1BQVYsR0FBbUIsSUFBbkI7QUFDQVAsT0FBSXFCLElBQUosQ0FBU2IsTUFBVCxHQUFtQixFQUFuQjtBQUNBLEdBSlcsQ0FBWjtBQUtBO0FBaEVPLENBQVQiLCJmaWxlIjoiWmV1c19wbGF5Qm9udXMuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxwbGF5Qm9udXMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0bnVtYmVyQm9udXM6IGNjLkxhYmVsLFxyXG5cdFx0bGlzdEJveDogICAgIGNjLk5vZGUsXHJcblx0XHRub3RpY2U6ICAgICAgY2MuTm9kZSxcclxuXHRcdG51bWJlcldpbjogICBjYy5MYWJlbCxcclxuXHRcdGljb25zOiB7XHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbihvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5saXN0Qm94LmNoaWxkcmVuLm1hcChmdW5jdGlvbihib3gpe1xyXG5cdFx0XHRyZXR1cm4gYm94LmdldENvbXBvbmVudCgnWmV1c19ib251c19pdGVtJyk7XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMubGlzdEJveCA9IHJlc3VsdDtcclxuXHRcdH0pXHJcblx0fSxcclxuXHRvblBsYXk6IGZ1bmN0aW9uKGJveCl7XHJcblx0XHR0aGlzLnJlc2V0KCk7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMubnVtYmVyQm9udXMuc3RyaW5nID0gYm94O1xyXG5cdH0sXHJcblx0b25DbGlja0JveDogZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCEhdGhpcy5udW1iZXJCb251cy5zdHJpbmcpIHtcclxuXHRcdFx0dGhpcy5SZWRULnBsYXlDbGljaygpO1xyXG5cdFx0XHR0aGlzLm9uU2VuZChlLnRhcmdldC5uYW1lKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNsb3NlTm90aWNlOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub3RpY2UuYWN0aXZlID0gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5SZWRULmhpZXVVbmcoKTtcclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmJveCkge1xyXG5cdFx0XHR2YXIgb2JqID0gdGhpcy5saXN0Qm94W2RhdGEuYm94XTtcclxuXHRcdFx0b2JqLm9wZW4uYWN0aXZlICA9IHRydWU7XHJcblx0XHRcdG9iai5jbG9zZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0b2JqLnRleHQuc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEuYmV0KTtcclxuXHRcdFx0dGhpcy5udW1iZXJCb251cy5zdHJpbmcgPSBkYXRhLmJvbnVzO1xyXG5cdFx0XHR0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0b2JqLm9wZW4uYWN0aXZlICA9IGZhbHNlO1xyXG5cdFx0XHR9LCAxLjUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS53aW4pIHtcclxuXHRcdFx0dGhpcy5ub3RpY2UuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5udW1iZXJXaW4uc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS53aW4pO1xyXG5cdFx0XHR0aGlzLlJlZFQudnVhdGhhbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLlJlZFQudnVhdGhhbmcuc3RyaW5nKSoxICsgZGF0YS53aW4pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25TZW5kOiBmdW5jdGlvbihib3gpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtnOnt6ZXVzOntib251czp7Ym94OmJveH19fX0pO1xyXG5cdH0sXHJcblx0cmVzZXQ6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLmxpc3RCb3gubWFwKGZ1bmN0aW9uKGJveCl7XHJcblx0XHRcdGJveC5vcGVuLmFjdGl2ZSAgPSBmYWxzZTtcclxuXHRcdFx0Ym94LmNsb3NlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGJveC50ZXh0LnN0cmluZyAgPSBcIlwiO1xyXG5cdFx0fSkpO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=