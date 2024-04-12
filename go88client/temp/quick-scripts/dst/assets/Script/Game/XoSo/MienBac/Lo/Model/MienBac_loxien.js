
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/MienBac/Lo/Model/MienBac_loxien.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '939fbzgGFhCHInPOAJ2Nm9g', 'MienBac_loxien');
// Script/Game/XoSo/MienBac/Lo/Model/MienBac_loxien.js

'use strict';

var helper = require('Helper');
var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,

	properties: {
		node_select: cc.Node,
		item_select: cc.Prefab,
		soCuoc: cc.Label,
		soDiem: cc.Label,
		tongTien: cc.Label,
		inputSoDiem: cc.EditBox,
		max: 10,
		countSelect: 0,
		giaDiem: 22000,
		diemToiDa: 1000000,
		game: ''
	},
	onLoad: function onLoad() {
		var arr = [];
		for (var i = 0; i < 100; i++) {
			var ooT = cc.instantiate(this.item_select);
			ooT = ooT.getComponent('XoSo_select_item');
			ooT.init(this);
			ooT.text.string = helper.addZero10(i);
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
	refresh: function refresh() {
		var text = '';
		this.node_select.forEach(function (obj) {
			if (obj.select) {
				text += obj.text.string + ', ';
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
		var temp = 0;
		if (this.countSelect === this.max) {
			temp = 1;
		}
		var diem = helper.getOnlyNumberInString(this.soDiem.string) * 1;
		this.tongTien.string = helper.numberWithCommas(diem * this.giaDiem * temp);
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
	},
	onClickCuoc: function onClickCuoc() {
		if (this.countSelect !== this.max) {
			cc.RedT.inGame.addNotice('Vui lòng chọn đủ ' + this.max + ' số muốn cược...');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxMb1xcTW9kZWwvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvXFxNb2RlbC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcTG9cXE1vZGVsXFxNaWVuQmFjX2xveGllbi5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiQnJvd3NlclV0aWwiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJub2RlX3NlbGVjdCIsIk5vZGUiLCJpdGVtX3NlbGVjdCIsIlByZWZhYiIsInNvQ3VvYyIsIkxhYmVsIiwic29EaWVtIiwidG9uZ1RpZW4iLCJpbnB1dFNvRGllbSIsIkVkaXRCb3giLCJtYXgiLCJjb3VudFNlbGVjdCIsImdpYURpZW0iLCJkaWVtVG9pRGEiLCJnYW1lIiwib25Mb2FkIiwiYXJyIiwiaSIsIm9vVCIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsInRleHQiLCJzdHJpbmciLCJhZGRaZXJvMTAiLCJhZGRDaGlsZCIsIm5vZGUiLCJvbkVuYWJsZSIsInN5cyIsImlzQnJvd3NlciIsImlucHV0QWRkRXZlbnQiLCJvblVwZGF0ZURpZW0iLCJiaW5kIiwib25EaXNhYmxlIiwiaW5wdXRSZW1vdmVFdmVudCIsInJlZnJlc2giLCJmb3JFYWNoIiwib2JqIiwic2VsZWN0IiwidXBkYXRlVGllbiIsInJlZnJlc2hIIiwib25DaGFuZ2VyIiwiUmVkVCIsImluR2FtZSIsImFkZE5vdGljZSIsIm9uQ2hhbmdlckRpZW0iLCJ2YWx1ZSIsIm51bWJlcldpdGhDb21tYXMiLCJnZXRPbmx5TnVtYmVySW5TdHJpbmciLCJlIiwidGFyZ2V0IiwidmFsdWVOdW1iIiwidGVtcCIsImRpZW0iLCJvbkNsaWNrSHV5Iiwib25DbGlja0N1b2MiLCJkYXRhIiwic28iLCJzZW5kIiwiZyIsInhzIiwibWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFJQyxjQUFjRCxRQUFRLGFBQVIsQ0FBbEI7O0FBRUFFLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLGVBQWFMLEdBQUdNLElBREw7QUFFWEMsZUFBYVAsR0FBR1EsTUFGTDtBQUdYQyxVQUFhVCxHQUFHVSxLQUhMO0FBSVhDLFVBQWFYLEdBQUdVLEtBSkw7QUFLWEUsWUFBYVosR0FBR1UsS0FMTDtBQU1YRyxlQUFhYixHQUFHYyxPQU5MO0FBT1hDLE9BQWEsRUFQRjtBQVFYQyxlQUFhLENBUkY7QUFTWEMsV0FBYSxLQVRGO0FBVVhDLGFBQWEsT0FWRjtBQVdYQyxRQUFhO0FBWEYsRUFISjtBQWdCUkMsT0FoQlEsb0JBZ0JDO0FBQ1IsTUFBSUMsTUFBTSxFQUFWO0FBQ0EsT0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksR0FBcEIsRUFBeUJBLEdBQXpCLEVBQThCO0FBQzdCLE9BQUlDLE1BQU12QixHQUFHd0IsV0FBSCxDQUFlLEtBQUtqQixXQUFwQixDQUFWO0FBQ0FnQixTQUFNQSxJQUFJRSxZQUFKLENBQWlCLGtCQUFqQixDQUFOO0FBQ0FGLE9BQUlHLElBQUosQ0FBUyxJQUFUO0FBQ0FILE9BQUlJLElBQUosQ0FBU0MsTUFBVCxHQUFrQi9CLE9BQU9nQyxTQUFQLENBQWlCUCxDQUFqQixDQUFsQjtBQUNBLFFBQUtqQixXQUFMLENBQWlCeUIsUUFBakIsQ0FBMEJQLElBQUlRLElBQTlCO0FBQ0FWLE9BQUlDLENBQUosSUFBU0MsR0FBVDtBQUNBO0FBQ0QsT0FBS2xCLFdBQUwsR0FBbUJnQixHQUFuQjtBQUNBQSxRQUFNLElBQU47QUFDQSxFQTVCTzs7QUE2QlJXLFdBQVUsb0JB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LEtBQUsxQyxJQUFWLElBQWtCLEVBQUMyQyxJQUFHLEtBQUtyRCxNQUFMLENBQVltQixNQUFoQixFQUF3QjhCLE1BQUs3RCxPQUFPd0QscUJBQVAsQ0FBNkIsS0FBSzFDLE1BQUwsQ0FBWWlCLE1BQXpDLENBQTdCLEVBQWxCO0FBQ0E1QixNQUFHK0MsSUFBSCxDQUFRZ0IsSUFBUixDQUFhLEVBQUNDLEdBQUUsRUFBQ0MsSUFBRyxFQUFDQyxJQUFHTCxJQUFKLEVBQUosRUFBSCxFQUFiO0FBQ0E7QUFDRDtBQWhITyxDQUFUIiwiZmlsZSI6Ik1pZW5CYWNfbG94aWVuLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxMb1xcTW9kZWwiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG52YXIgQnJvd3NlclV0aWwgPSByZXF1aXJlKCdCcm93c2VyVXRpbCcpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0bm9kZV9zZWxlY3Q6IGNjLk5vZGUsXHJcblx0XHRpdGVtX3NlbGVjdDogY2MuUHJlZmFiLFxyXG5cdFx0c29DdW9jOiAgICAgIGNjLkxhYmVsLFxyXG5cdFx0c29EaWVtOiAgICAgIGNjLkxhYmVsLFxyXG5cdFx0dG9uZ1RpZW46ICAgIGNjLkxhYmVsLFxyXG5cdFx0aW5wdXRTb0RpZW06IGNjLkVkaXRCb3gsXHJcblx0XHRtYXg6ICAgICAgICAgMTAsXHJcblx0XHRjb3VudFNlbGVjdDogMCxcclxuXHRcdGdpYURpZW06ICAgICAyMjAwMCxcclxuXHRcdGRpZW1Ub2lEYTogICAxMDAwMDAwLFxyXG5cdFx0Z2FtZTogICAgICAgICcnLFxyXG5cdH0sXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0bGV0IGFyciA9IFtdO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xyXG5cdFx0XHRsZXQgb29UID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3NlbGVjdCk7XHJcblx0XHRcdG9vVCA9IG9vVC5nZXRDb21wb25lbnQoJ1hvU29fc2VsZWN0X2l0ZW0nKTtcclxuXHRcdFx0b29ULmluaXQodGhpcyk7XHJcblx0XHRcdG9vVC50ZXh0LnN0cmluZyA9IGhlbHBlci5hZGRaZXJvMTAoaSk7XHJcblx0XHRcdHRoaXMubm9kZV9zZWxlY3QuYWRkQ2hpbGQob29ULm5vZGUpO1xyXG5cdFx0XHRhcnJbaV0gPSBvb1Q7XHJcblx0XHR9XHJcblx0XHR0aGlzLm5vZGVfc2VsZWN0ID0gYXJyO1xyXG5cdFx0YXJyID0gbnVsbDtcclxuXHR9LFxyXG5cdG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xyXG5cdFx0XHRCcm93c2VyVXRpbC5pbnB1dEFkZEV2ZW50KHRoaXMuaW5wdXRTb0RpZW0sICdpbnB1dCcsIHRoaXMub25VcGRhdGVEaWVtLmJpbmQodGhpcykpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xyXG5cdFx0XHRCcm93c2VyVXRpbC5pbnB1dFJlbW92ZUV2ZW50KHRoaXMuaW5wdXRTb0RpZW0sICdpbnB1dCcsIHRoaXMub25VcGRhdGVEaWVtLmJpbmQodGhpcykpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVmcmVzaDogZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdGV4dCA9ICcnO1xyXG5cdFx0dGhpcy5ub2RlX3NlbGVjdC5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdGlmIChvYmouc2VsZWN0KSB7XHJcblx0XHRcdFx0dGV4dCArPSBvYmoudGV4dC5zdHJpbmcgKyAnLCAnO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc29DdW9jLnN0cmluZyA9IHRleHQ7XHJcblx0XHR0aGlzLnVwZGF0ZVRpZW4oKTtcclxuXHR9LFxyXG5cdHJlZnJlc2hIOiBmdW5jdGlvbihvYmopIHtcclxuXHRcdGlmIChvYmouc2VsZWN0ID09PSB0cnVlKSB7XHJcblx0XHRcdHRoaXMuY291bnRTZWxlY3QrKztcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLmNvdW50U2VsZWN0LS07XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5jb3VudFNlbGVjdCA+IHRoaXMubWF4KSB7XHJcblx0XHRcdG9iai5vbkNoYW5nZXIoKTtcclxuXHRcdFx0dGhpcy5jb3VudFNlbGVjdCA9IHRoaXMubWF4O1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5hZGROb3RpY2UoJzEgVsOpIGPGsOG7o2MgdOG7kWkgxJFhICcgKyB0aGlzLm1heCArICcgU+G7kS4uLicpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY291bnRTZWxlY3QgPCAwKSB7XHJcblx0XHRcdHRoaXMuY291bnRTZWxlY3QgPSAwO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0fSxcclxuXHRvbkNoYW5nZXJEaWVtOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHZhbHVlID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmlucHV0U29EaWVtLnN0cmluZykpO1xyXG5cdFx0dGhpcy5pbnB1dFNvRGllbS5zdHJpbmcgPSB2YWx1ZSA9PSAnMCcgPyAnJyA6IHZhbHVlO1xyXG5cdH0sXHJcblx0b25VcGRhdGVEaWVtOiBmdW5jdGlvbihlKXtcclxuXHRcdGxldCB2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcoZS50YXJnZXQudmFsdWUpKTtcclxuXHRcdHZhbHVlID0gdmFsdWUgPT09ICcwJyA/ICcnIDogdmFsdWU7XHJcblx0XHRsZXQgdmFsdWVOdW1iID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh2YWx1ZSkqMTtcclxuXHRcdGlmICh2YWx1ZU51bWIgPiB0aGlzLmRpZW1Ub2lEYSkge1xyXG5cdFx0XHR2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZGllbVRvaURhKTtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuYWRkTm90aWNlKCdU4buRaSDEkWEgJyArIHZhbHVlICsgJyDEkWnhu4NtIGNobyBt4buXaSBWw6kuJyk7XHJcblx0XHR9XHJcblx0XHRlLnRhcmdldC52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5zb0RpZW0uc3RyaW5nID0gISF2YWx1ZSA/IHZhbHVlIDogJzAnO1xyXG5cdFx0dGhpcy5pbnB1dFNvRGllbS5zdHJpbmcgPSB2YWx1ZTtcclxuXHRcdHRoaXMudXBkYXRlVGllbigpO1xyXG5cdH0sXHJcblx0dXBkYXRlVGllbjogZnVuY3Rpb24oKXtcclxuXHRcdGxldCB0ZW1wID0gMDtcclxuXHRcdGlmKHRoaXMuY291bnRTZWxlY3QgPT09IHRoaXMubWF4KSB7XHJcblx0XHRcdHRlbXAgPSAxO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGRpZW0gPSBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuc29EaWVtLnN0cmluZykqMTtcclxuXHRcdHRoaXMudG9uZ1RpZW4uc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGllbSp0aGlzLmdpYURpZW0qdGVtcCk7XHJcblx0fSxcclxuXHRvbkNsaWNrSHV5OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zb0N1b2Muc3RyaW5nICAgICAgPSAnJztcclxuXHRcdHRoaXMuc29EaWVtLnN0cmluZyAgICAgID0gJzAnO1xyXG5cdFx0dGhpcy50b25nVGllbi5zdHJpbmcgICAgPSAnMCc7XHJcblx0XHR0aGlzLmlucHV0U29EaWVtLnN0cmluZyA9ICcnO1xyXG5cdFx0dGhpcy5jb3VudFNlbGVjdCAgICAgICAgPSAwO1xyXG5cdFx0dGhpcy5ub2RlX3NlbGVjdC5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdGlmIChvYmouc2VsZWN0KSB7XHJcblx0XHRcdFx0b2JqLm9uQ2hhbmdlcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uQ2xpY2tDdW9jOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5jb3VudFNlbGVjdCAhPT0gdGhpcy5tYXgpIHtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuYWRkTm90aWNlKCdWdWkgbMOybmcgY2jhu41uIMSR4bunICcgKyB0aGlzLm1heCArICcgc+G7kSBtdeG7kW4gY8aw4bujYy4uLicpO1xyXG5cdFx0fSBlbHNlIGlmKHRoaXMuc29EaWVtLnN0cmluZyA9PT0gJzAnKXtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuYWRkTm90aWNlKCdWdWkgbMOybmcgbmjhuq1wIMSRaeG7g20gY8aw4bujYy4uJyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgZGF0YSA9IHt9O1xyXG5cdFx0XHRkYXRhW3RoaXMuZ2FtZV0gPSB7c286dGhpcy5zb0N1b2Muc3RyaW5nLCBkaWVtOmhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5zb0RpZW0uc3RyaW5nKX07XHJcblx0XHRcdGNjLlJlZFQuc2VuZCh7Zzp7eHM6e21iOmRhdGF9fX0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=