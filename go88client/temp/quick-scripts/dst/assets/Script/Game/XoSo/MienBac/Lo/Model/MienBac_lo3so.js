
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/MienBac/Lo/Model/MienBac_lo3so.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe72b1SkeFD94urjeOCVDYz', 'MienBac_lo3so');
// Script/Game/XoSo/MienBac/Lo/Model/MienBac_lo3so.js

'use strict';

var helper = require('Helper');
var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,

	properties: {
		head_select: cc.Node,
		node_select: cc.Node,
		item_select: cc.Prefab,
		soCuoc: cc.Label,
		soDiem: cc.Label,
		tongTien: cc.Label,
		inputSoDiem: cc.EditBox,
		max: 8,
		countSelect: 0,
		giaDiem: 22000,
		diemToiDa: 1000000,
		game: '',
		head: '100'
	},
	onLoad: function onLoad() {
		var arr = [];
		for (var i = 0; i < 100; i++) {
			var ooT = cc.instantiate(this.item_select);
			ooT = ooT.getComponent('XoSo_select_item');
			ooT.init(this);
			ooT.text.string = helper.numberPad(i, 3);
			this.node_select.addChild(ooT.node);
			arr[i] = ooT;
		}
		this.node_select = arr;
		arr = null;
	},

	onEnable: function onEnable() {
		if (cc.sys.isBrowser) {
			BrowserUtil.inputAddEvent(this.inputSoDiem, 'input', this.onUpdateDiem.bind(this));
		}
	},
	onDisable: function onDisable() {
		if (cc.sys.isBrowser) {
			BrowserUtil.inputRemoveEvent(this.inputSoDiem, 'input', this.onUpdateDiem.bind(this));
		}
	},
	onSelectH: function onSelectH(event) {
		var self = this;
		var name = event.target.name;
		var number = name >> 0;
		this.head = name;
		this.head_select.children.forEach(function (obj) {
			if (obj.name === name) {
				obj.pauseSystemEvents();
				obj.opacity = 255;
			} else {
				obj.resumeSystemEvents();
				obj.opacity = 99;
			}
		});
		for (var i = 0; i < 100; i++) {
			this.node_select[i].text.string = helper.numberPad(i + number, 3);
		}
		self.node_select.forEach(function (node_select) {
			node_select.selectOff();
		});
		this.head_select.children.forEach(function (obj) {
			if (void 0 !== obj.data && obj.data.length > 0) {
				obj.data.forEach(function (select) {
					self.node_select.forEach(function (node_select) {
						if (node_select.text.string === select) {
							node_select.selectOn();
						}
					});
				});
			}
		});
	},
	refresh: function refresh() {
		var self = this;
		var arr = [];
		var text = '';
		this.node_select.forEach(function (obj) {
			if (obj.select) {
				arr.push(obj.text.string);
			}
		});
		this.head_select.children.forEach(function (obj) {
			if (obj.name === self.head) {
				obj.data = arr;
			}
			if (void 0 !== obj.data && obj.data.length > 0) {
				text += obj.data.join(', ') + ', ';
			}
		});
		this.soCuoc.string = text;
		this.updateTien();
	},
	refreshH: function refreshH(obj) {
		if (obj.select === true) {
			this.countSelect++;
		} else {
			this.countSelect--;
		}
		if (this.countSelect > this.max) {
			obj.onChanger();
			this.countSelect = this.max;
			cc.RedT.inGame.addNotice('1 Vé cược tối đa ' + this.max + ' Số...');
		}
		if (this.countSelect < 0) {
			this.countSelect = 0;
		}
		this.refresh();
	},
	onChangerDiem: function onChangerDiem() {
		var value = helper.numberWithCommas(helper.getOnlyNumberInString(this.inputSoDiem.string));
		this.inputSoDiem.string = value == '0' ? '' : value;
	},
	onUpdateDiem: function onUpdateDiem(e) {
		var value = helper.numberWithCommas(helper.getOnlyNumberInString(e.target.value));
		value = value === '0' ? '' : value;
		var valueNumb = helper.getOnlyNumberInString(value) * 1;
		if (valueNumb > this.diemToiDa) {
			value = helper.numberWithCommas(this.diemToiDa);
			cc.RedT.inGame.addNotice('Tối đa ' + value + ' điểm cho mỗi Vé.');
		}
		e.target.value = value;
		this.soDiem.string = !!value ? value : '0';
		this.inputSoDiem.string = value;
		this.updateTien();
	},
	updateTien: function updateTien() {
		var diem = helper.getOnlyNumberInString(this.soDiem.string) * 1;
		this.tongTien.string = helper.numberWithCommas(diem * this.giaDiem * this.countSelect);
	},
	onClickHuy: function onClickHuy() {
		this.soCuoc.string = '';
		this.soDiem.string = '0';
		this.tongTien.string = '0';
		this.inputSoDiem.string = '';
		this.countSelect = 0;
		this.node_select.forEach(function (obj) {
			if (obj.select) {
				obj.onChanger();
			}
		});
		this.head_select.children.forEach(function (obj) {
			obj.data = [];
		});
	},
	onClickCuoc: function onClickCuoc() {
		if (helper.isEmpty(this.soCuoc.string)) {
			cc.RedT.inGame.addNotice('Vui lòng chọn số muốn cược..');
		} else if (this.soDiem.string === '0') {
			cc.RedT.inGame.addNotice('Vui lòng nhập điểm cược..');
		} else {
			var data = {};
			data[this.game] = { so: this.soCuoc.string, diem: helper.getOnlyNumberInString(this.soDiem.string) };
			cc.RedT.send({ g: { xs: { mb: data } } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxMb1xcTW9kZWwvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvXFxNb2RlbC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcTG9cXE1vZGVsXFxNaWVuQmFjX2xvM3NvLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJCcm93c2VyVXRpbCIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhlYWRfc2VsZWN0IiwiTm9kZSIsIm5vZGVfc2VsZWN0IiwiaXRlbV9zZWxlY3QiLCJQcmVmYWIiLCJzb0N1b2MiLCJMYWJlbCIsInNvRGllbSIsInRvbmdUaWVuIiwiaW5wdXRTb0RpZW0iLCJFZGl0Qm94IiwibWF4IiwiY291bnRTZWxlY3QiLCJnaWFEaWVtIiwiZGllbVRvaURhIiwiZ2FtZSIsImhlYWQiLCJvbkxvYWQiLCJhcnIiLCJpIiwib29UIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0IiwidGV4dCIsInN0cmluZyIsIm51bWJlclBhZCIsImFkZENoaWxkIiwibm9kZSIsIm9uRW5hYmxlIiwic3lzIiwiaXNCcm93c2VyIiwiaW5wdXRBZGRFdmVudCIsIm9uVXBkYXRlRGllbSIsImJpbmQiLCJvbkRpc2FibGUiLCJpbnB1dFJlbW92ZUV2ZW50Iiwib25TZWxlY3RIIiwiZXZlbnQiLCJzZWxmIiwibmFtZSIsInRhcmdldCIsIm51bWJlciIsImNoaWxkcmVuIiwiZm9yRWFjaCIsIm9iaiIsInBhdXNlU3lzdGVtRXZlbnRzIiwib3BhY2l0eSIsInJlc3VtZVN5c3RlbUV2ZW50cyIsInNlbGVjdE9mZiIsImRhdGEiLCJsZW5ndGgiLCJzZWxlY3QiLCJzZWxlY3RPbiIsInJlZnJlc2giLCJwdXNoIiwiam9pbiIsInVwZGF0ZVRpZW4iLCJyZWZyZXNoSCIsIm9uQ2hhbmdlciIsIlJlZFQiLCJpbkdhbWUiLCJhZGROb3RpY2UiLCJvbkNoYW5nZXJEaWVtIiwidmFsdWUiLCJudW1iZXJXaXRoQ29tbWFzIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwiZSIsInZhbHVlTnVtYiIsImRpZW0iLCJvbkNsaWNrSHV5Iiwib25DbGlja0N1b2MiLCJpc0VtcHR5Iiwic28iLCJzZW5kIiwiZyIsInhzIiwibWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFJQyxjQUFjRCxRQUFRLGFBQVIsQ0FBbEI7O0FBRUFFLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLGVBQWFMLEdBQUdNLElBREw7QUFFWEMsZUFBYVAsR0FBR00sSUFGTDtBQUdYRSxlQUFhUixHQUFHUyxNQUhMO0FBSVhDLFVBQWFWLEdBQUdXLEtBSkw7QUFLWEMsVUFBYVosR0FBR1csS0FMTDtBQU1YRSxZQUFhYixHQUFHVyxLQU5MO0FBT1hHLGVBQWFkLEdBQUdlLE9BUEw7QUFRWEMsT0FBYSxDQVJGO0FBU1hDLGVBQWEsQ0FURjtBQVVYQyxXQUFhLEtBVkY7QUFXWEMsYUFBYSxPQVhGO0FBWVhDLFFBQWEsRUFaRjtBQWFYQyxRQUFhO0FBYkYsRUFISjtBQWtCUkMsT0FsQlEsb0JBa0JDO0FBQ1IsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksR0FBcEIsRUFBeUJBLEdBQXpCLEVBQThCO0FBQzdCLE9BQUlDLE1BQU16QixHQUFHMEIsV0FBSCxDQUFlLEtBQUtsQixXQUFwQixDQUFWO0FBQ0FpQixTQUFNQSxJQUFJRSxZQUFKLENBQWlCLGtCQUFqQixDQUFOO0FBQ0FGLE9BQUlHLElBQUosQ0FBUyxJQUFUO0FBQ0FILE9BQUlJ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QWEsRUFBQ0MsR0FBRSxFQUFDQyxJQUFHLEVBQUNDLElBQUczQixJQUFKLEVBQUosRUFBSCxFQUFiO0FBQ0E7QUFDRDtBQTNKTyxDQUFUIiwiZmlsZSI6Ik1pZW5CYWNfbG8zc28uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvXFxNb2RlbCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcbnZhciBCcm93c2VyVXRpbCA9IHJlcXVpcmUoJ0Jyb3dzZXJVdGlsJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRoZWFkX3NlbGVjdDogY2MuTm9kZSxcclxuXHRcdG5vZGVfc2VsZWN0OiBjYy5Ob2RlLFxyXG5cdFx0aXRlbV9zZWxlY3Q6IGNjLlByZWZhYixcclxuXHRcdHNvQ3VvYzogICAgICBjYy5MYWJlbCxcclxuXHRcdHNvRGllbTogICAgICBjYy5MYWJlbCxcclxuXHRcdHRvbmdUaWVuOiAgICBjYy5MYWJlbCxcclxuXHRcdGlucHV0U29EaWVtOiBjYy5FZGl0Qm94LFxyXG5cdFx0bWF4OiAgICAgICAgIDgsXHJcblx0XHRjb3VudFNlbGVjdDogMCxcclxuXHRcdGdpYURpZW06ICAgICAyMjAwMCxcclxuXHRcdGRpZW1Ub2lEYTogICAxMDAwMDAwLFxyXG5cdFx0Z2FtZTogICAgICAgICcnLFxyXG5cdFx0aGVhZDogICAgICAgICcxMDAnLFxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0bGV0IGFyciA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG5cdFx0XHRsZXQgb29UID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3NlbGVjdCk7XHJcblx0XHRcdG9vVCA9IG9vVC5nZXRDb21wb25lbnQoJ1hvU29fc2VsZWN0X2l0ZW0nKTtcclxuXHRcdFx0b29ULmluaXQodGhpcyk7XHJcblx0XHRcdG9vVC50ZXh0LnN0cmluZyA9IGhlbHBlci5udW1iZXJQYWQoaSwgMyk7XHJcblx0XHRcdHRoaXMubm9kZV9zZWxlY3QuYWRkQ2hpbGQob29ULm5vZGUpO1xyXG5cdFx0XHRhcnJbaV0gPSBvb1Q7XHJcblx0XHR9XHJcblx0XHR0aGlzLm5vZGVfc2VsZWN0ID0gYXJyO1xyXG5cdFx0YXJyID0gbnVsbDtcclxuXHR9LFxyXG5cdG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xyXG5cdFx0XHRCcm93c2VyVXRpbC5pbnB1dEFkZEV2ZW50KHRoaXMuaW5wdXRTb0RpZW0sICdpbnB1dCcsIHRoaXMub25VcGRhdGVEaWVtLmJpbmQodGhpcykpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xyXG5cdFx0XHRCcm93c2VyVXRpbC5pbnB1dFJlbW92ZUV2ZW50KHRoaXMuaW5wdXRTb0RpZW0sICdpbnB1dCcsIHRoaXMub25VcGRhdGVEaWVtLmJpbmQodGhpcykpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25TZWxlY3RIOiBmdW5jdGlvbihldmVudCl7XHJcblx0XHRsZXQgc2VsZiAgID0gdGhpcztcclxuXHRcdGxldCBuYW1lICAgPSBldmVudC50YXJnZXQubmFtZTtcclxuXHRcdGxldCBudW1iZXIgPSBuYW1lPj4wO1xyXG5cdFx0dGhpcy5oZWFkICA9IG5hbWU7XHJcblx0XHR0aGlzLmhlYWRfc2VsZWN0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0aWYgKG9iai5uYW1lID09PSBuYW1lKSB7XHJcblx0XHRcdFx0b2JqLnBhdXNlU3lzdGVtRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBvYmoub3BhY2l0eSA9IDI1NTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0b2JqLnJlc3VtZVN5c3RlbUV2ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgb2JqLm9wYWNpdHkgPSA5OTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwMDsgaSsrKSB7XHJcblx0XHRcdHRoaXMubm9kZV9zZWxlY3RbaV0udGV4dC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyUGFkKGkrbnVtYmVyLCAzKTtcclxuXHRcdH1cclxuXHRcdHNlbGYubm9kZV9zZWxlY3QuZm9yRWFjaChmdW5jdGlvbihub2RlX3NlbGVjdCl7XHJcblx0XHRcdFx0bm9kZV9zZWxlY3Quc2VsZWN0T2ZmKCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuaGVhZF9zZWxlY3QuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBvYmouZGF0YSAmJiBvYmouZGF0YS5sZW5ndGggPiAwKSB7XHJcblx0XHRcdFx0b2JqLmRhdGEuZm9yRWFjaChmdW5jdGlvbihzZWxlY3Qpe1xyXG5cdFx0XHRcdFx0c2VsZi5ub2RlX3NlbGVjdC5mb3JFYWNoKGZ1bmN0aW9uKG5vZGVfc2VsZWN0KXtcclxuXHRcdFx0XHRcdFx0aWYgKG5vZGVfc2VsZWN0LnRleHQuc3RyaW5nID09PSBzZWxlY3QpIHtcclxuXHRcdFx0XHRcdFx0XHRub2RlX3NlbGVjdC5zZWxlY3RPbigpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRyZWZyZXNoOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBzZWxmID0gdGhpcztcclxuXHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdGxldCB0ZXh0ID0gJyc7XHJcblx0XHR0aGlzLm5vZGVfc2VsZWN0LmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0aWYgKG9iai5zZWxlY3QpIHtcclxuXHRcdFx0XHRhcnIucHVzaChvYmoudGV4dC5zdHJpbmcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuaGVhZF9zZWxlY3QuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRpZiAob2JqLm5hbWUgPT09IHNlbGYuaGVhZCkge1xyXG5cdFx0XHRcdG9iai5kYXRhID0gYXJyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IG9iai5kYXRhICYmIG9iai5kYXRhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHR0ZXh0ICs9IG9iai5kYXRhLmpvaW4oJywgJykgKyAnLCAnO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc29DdW9jLnN0cmluZyA9IHRleHQ7XHJcblx0XHR0aGlzLnVwZGF0ZVRpZW4oKTtcclxuXHR9LFxyXG5cdHJlZnJlc2hIOiBmdW5jdGlvbihvYmopIHtcclxuXHRcdGlmIChvYmouc2VsZWN0ID09PSB0cnVlKSB7XHJcblx0XHRcdHRoaXMuY291bnRTZWxlY3QrKztcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLmNvdW50U2VsZWN0LS07XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5jb3VudFNlbGVjdCA+IHRoaXMubWF4KSB7XHJcblx0XHRcdG9iai5vbkNoYW5nZXIoKTtcclxuXHRcdFx0dGhpcy5jb3VudFNlbGVjdCA9IHRoaXMubWF4O1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5hZGROb3RpY2UoJzEgVsOpIGPGsOG7o2MgdOG7kWkgxJFhICcgKyB0aGlzLm1heCArICcgU+G7kS4uLicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY291bnRTZWxlY3QgPCAwKSB7XHJcblx0XHRcdHRoaXMuY291bnRTZWxlY3QgPSAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0fSxcclxuXHRvbkNoYW5nZXJEaWVtOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHZhbHVlID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmlucHV0U29EaWVtLnN0cmluZykpO1xyXG5cdFx0dGhpcy5pbnB1dFNvRGllbS5zdHJpbmcgPSB2YWx1ZSA9PSAnMCcgPyAnJyA6IHZhbHVlO1xyXG5cdH0sXHJcblx0b25VcGRhdGVEaWVtOiBmdW5jdGlvbihlKXtcclxuXHRcdGxldCB2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcoZS50YXJnZXQudmFsdWUpKTtcclxuXHRcdHZhbHVlID0gdmFsdWUgPT09ICcwJyA/ICcnIDogdmFsdWU7XHJcblx0XHRsZXQgdmFsdWVOdW1iID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh2YWx1ZSkqMTtcclxuXHRcdGlmICh2YWx1ZU51bWIgPiB0aGlzLmRpZW1Ub2lEYSkge1xyXG5cdFx0XHR2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZGllbVRvaURhKTtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuYWRkTm90aWNlKCdU4buRaSDEkWEgJyArIHZhbHVlICsgJyDEkWnhu4NtIGNobyBt4buXaSBWw6kuJyk7XHJcblx0XHR9XHJcblx0XHRlLnRhcmdldC52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5zb0RpZW0uc3RyaW5nID0gISF2YWx1ZSA/IHZhbHVlIDogJzAnO1xyXG5cdFx0dGhpcy5pbnB1dFNvRGllbS5zdHJpbmcgPSB2YWx1ZTtcclxuXHRcdHRoaXMudXBkYXRlVGllbigpO1xyXG5cdH0sXHJcblx0dXBkYXRlVGllbjogZnVuY3Rpb24oKXtcclxuXHRcdGxldCBkaWVtID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLnNvRGllbS5zdHJpbmcpKjE7XHJcblx0XHR0aGlzLnRvbmdUaWVuLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRpZW0qdGhpcy5naWFEaWVtKnRoaXMuY291bnRTZWxlY3QpO1xyXG5cdH0sXHJcblx0b25DbGlja0h1eTogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc29DdW9jLnN0cmluZyAgICAgID0gJyc7XHJcblx0XHR0aGlzLnNvRGllbS5zdHJpbmcgICAgICA9ICcwJztcclxuXHRcdHRoaXMudG9uZ1RpZW4uc3RyaW5nICAgID0gJzAnO1xyXG5cdFx0dGhpcy5pbnB1dFNvRGllbS5zdHJpbmcgPSAnJztcclxuXHRcdHRoaXMuY291bnRTZWxlY3QgICAgICAgID0gMDtcclxuXHRcdHRoaXMubm9kZV9zZWxlY3QuZm9yRWFjaChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRpZiAob2JqLnNlbGVjdCkge1xyXG5cdFx0XHRcdG9iai5vbkNoYW5nZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmhlYWRfc2VsZWN0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0b2JqLmRhdGEgPSBbXTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0b25DbGlja0N1b2M6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihoZWxwZXIuaXNFbXB0eSh0aGlzLnNvQ3VvYy5zdHJpbmcpKSB7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnVnVpIGzDsm5nIGNo4buNbiBz4buRIG114buRbiBjxrDhu6NjLi4nKTtcclxuXHRcdH0gZWxzZSBpZih0aGlzLnNvRGllbS5zdHJpbmcgPT09ICcwJyl7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnVnVpIGzDsm5nIG5o4bqtcCDEkWnhu4NtIGPGsOG7o2MuLicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIGRhdGEgPSB7fTtcclxuXHRcdFx0ZGF0YVt0aGlzLmdhbWVdID0ge3NvOnRoaXMuc29DdW9jLnN0cmluZywgZGllbTpoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuc29EaWVtLnN0cmluZyl9O1xyXG5cdFx0XHRjYy5SZWRULnNlbmQoe2c6e3hzOnttYjpkYXRhfX19KTtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19