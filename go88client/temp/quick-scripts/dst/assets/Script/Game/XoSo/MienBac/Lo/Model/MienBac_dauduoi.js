
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/MienBac/Lo/Model/MienBac_dauduoi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '83b23eeLdtMUbFVBt1RFVz6', 'MienBac_dauduoi');
// Script/Game/XoSo/MienBac/Lo/Model/MienBac_dauduoi.js

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
		for (var i = 0; i < 10; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxMb1xcTW9kZWwvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvXFxNb2RlbC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcTG9cXE1vZGVsXFxNaWVuQmFjX2RhdWR1b2kuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsIkJyb3dzZXJVdGlsIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZV9zZWxlY3QiLCJOb2RlIiwiaXRlbV9zZWxlY3QiLCJQcmVmYWIiLCJzb0N1b2MiLCJMYWJlbCIsInNvRGllbSIsInRvbmdUaWVuIiwiaW5wdXRTb0RpZW0iLCJFZGl0Qm94IiwibWF4IiwiY291bnRTZWxlY3QiLCJnaWFEaWVtIiwiZGllbVRvaURhIiwiZ2FtZSIsIm9uTG9hZCIsImFyciIsImkiLCJvb1QiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsImluaXQiLCJ0ZXh0Iiwic3RyaW5nIiwiYWRkWmVybzEwIiwiYWRkQ2hpbGQiLCJub2RlIiwib25FbmFibGUiLCJzeXMiLCJpc0Jyb3dzZXIiLCJpbnB1dEFkZEV2ZW50Iiwib25VcGRhdGVEaWVtIiwiYmluZCIsIm9uRGlzYWJsZSIsImlucHV0UmVtb3ZlRXZlbnQiLCJyZWZyZXNoIiwiZm9yRWFjaCIsIm9iaiIsInNlbGVjdCIsInVwZGF0ZVRpZW4iLCJyZWZyZXNoSCIsIm9uQ2hhbmdlciIsIlJlZFQiLCJpbkdhbWUiLCJhZGROb3RpY2UiLCJvbkNoYW5nZXJEaWVtIiwidmFsdWUiLCJudW1iZXJXaXRoQ29tbWFzIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwiZSIsInRhcmdldCIsInZhbHVlTnVtYiIsImRpZW0iLCJvbkNsaWNrSHV5Iiwib25DbGlja0N1b2MiLCJpc0VtcHR5IiwiZGF0YSIsInNvIiwic2VuZCIsImciLCJ4cyIsIm1iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBSUMsY0FBY0QsUUFBUSxhQUFSLENBQWxCOztBQUVBRSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxlQUFhTCxHQUFHTSxJQURMO0FBRVhDLGVBQWFQLEdBQUdRLE1BRkw7QUFHWEMsVUFBYVQsR0FBR1UsS0FITDtBQUlYQyxVQUFhWCxHQUFHVSxLQUpMO0FBS1hFLFlBQWFaLEdBQUdVLEtBTEw7QUFNWEcsZUFBYWIsR0FBR2MsT0FOTDtBQU9YQyxPQUFhLEVBUEY7QUFRWEMsZUFBYSxDQVJGO0FBU1hDLFdBQWEsS0FURjtBQVVYQyxhQUFhLE9BVkY7QUFXWEMsUUFBYTtBQVhGLEVBSEo7QUFnQlJDLE9BaEJRLG9CQWdCQztBQUNSLE1BQUlDLE1BQU0sRUFBVjtBQUNBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJLEVBQXBCLEVBQXdCQSxHQUF4QixFQUE2QjtBQUM1QixPQUFJQyxNQUFNdkIsR0FBR3dCLFdBQUgsQ0FBZSxLQUFLakIsV0FBcEIsQ0FBVjtBQUNBZ0IsU0FBTUEsSUFBSUUsWUFBSixDQUFpQixrQkFBakIsQ0FBTjtBQUNBRixPQUFJRyxJQUFKLENBQVMsSUFBVDtBQUNBSCxPQUFJSSxJQUFKLENBQVNDLE1BQVQsR0FBa0IvQixPQUFPZ0MsU0FBUCxDQUFpQlAsQ0FBakIsQ0FBbEI7QUFDQSxRQUFLakIsV0FBTCxDQUFpQnlCLFFBQWpCLENBQTBCUCxJQUFJUSxJQUE5QjtBQUNBVixPQUFJQyxDQUFKLElBQVNDLEdBQVQ7QUFDQTtBQUNELE9BQUtsQixXQUFMLEdBQW1CZ0IsR0FBbkI7QUFDQUEsUUFBTSxJQUFOO0FBQ0EsRUE1Qk87O0FBNkJSVyxXQUFV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QTZCLEtBQUsxQyxNQUFMLENBQVlpQixNQUF6QyxDQUE3QixFQUFsQjtBQUNBNUIsTUFBRytDLElBQUgsQ0FBUWdCLElBQVIsQ0FBYSxFQUFDQyxHQUFFLEVBQUNDLElBQUcsRUFBQ0MsSUFBR0wsSUFBSixFQUFKLEVBQUgsRUFBYjtBQUNBO0FBQ0Q7QUE1R08sQ0FBVCIsImZpbGUiOiJNaWVuQmFjX2RhdWR1b2kuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvXFxNb2RlbCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcbnZhciBCcm93c2VyVXRpbCA9IHJlcXVpcmUoJ0Jyb3dzZXJVdGlsJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRub2RlX3NlbGVjdDogY2MuTm9kZSxcclxuXHRcdGl0ZW1fc2VsZWN0OiBjYy5QcmVmYWIsXHJcblx0XHRzb0N1b2M6ICAgICAgY2MuTGFiZWwsXHJcblx0XHRzb0RpZW06ICAgICAgY2MuTGFiZWwsXHJcblx0XHR0b25nVGllbjogICAgY2MuTGFiZWwsXHJcblx0XHRpbnB1dFNvRGllbTogY2MuRWRpdEJveCxcclxuXHRcdG1heDogICAgICAgICAxMCxcclxuXHRcdGNvdW50U2VsZWN0OiAwLFxyXG5cdFx0Z2lhRGllbTogICAgIDIyMDAwLFxyXG5cdFx0ZGllbVRvaURhOiAgIDEwMDAwMDAsXHJcblx0XHRnYW1lOiAgICAgICAgJycsXHJcblx0fSxcclxuXHRvbkxvYWQoKSB7XHJcblx0XHRsZXQgYXJyID0gW107XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuXHRcdFx0bGV0IG9vVCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9zZWxlY3QpO1xyXG5cdFx0XHRvb1QgPSBvb1QuZ2V0Q29tcG9uZW50KCdYb1NvX3NlbGVjdF9pdGVtJyk7XHJcblx0XHRcdG9vVC5pbml0KHRoaXMpO1xyXG5cdFx0XHRvb1QudGV4dC5zdHJpbmcgPSBoZWxwZXIuYWRkWmVybzEwKGkpO1xyXG5cdFx0XHR0aGlzLm5vZGVfc2VsZWN0LmFkZENoaWxkKG9vVC5ub2RlKTtcclxuXHRcdFx0YXJyW2ldID0gb29UO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ub2RlX3NlbGVjdCA9IGFycjtcclxuXHRcdGFyciA9IG51bGw7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcclxuXHRcdFx0QnJvd3NlclV0aWwuaW5wdXRBZGRFdmVudCh0aGlzLmlucHV0U29EaWVtLCAnaW5wdXQnLCB0aGlzLm9uVXBkYXRlRGllbS5iaW5kKHRoaXMpKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcclxuXHRcdFx0QnJvd3NlclV0aWwuaW5wdXRSZW1vdmVFdmVudCh0aGlzLmlucHV0U29EaWVtLCAnaW5wdXQnLCB0aGlzLm9uVXBkYXRlRGllbS5iaW5kKHRoaXMpKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHRleHQgPSAnJztcclxuXHRcdHRoaXMubm9kZV9zZWxlY3QuZm9yRWFjaChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRpZiAob2JqLnNlbGVjdCkge1xyXG5cdFx0XHRcdHRleHQgKz0gb2JqLnRleHQuc3RyaW5nICsgJywgJztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNvQ3VvYy5zdHJpbmcgPSB0ZXh0O1xyXG5cdFx0dGhpcy51cGRhdGVUaWVuKCk7XHJcblx0fSxcclxuXHRyZWZyZXNoSDogZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRpZiAob2JqLnNlbGVjdCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHR0aGlzLmNvdW50U2VsZWN0Kys7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5jb3VudFNlbGVjdC0tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY291bnRTZWxlY3QgPiB0aGlzLm1heCkge1xyXG5cdFx0XHRvYmoub25DaGFuZ2VyKCk7XHJcblx0XHRcdHRoaXMuY291bnRTZWxlY3QgPSB0aGlzLm1heDtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuYWRkTm90aWNlKCcxIFbDqSBjxrDhu6NjIHThu5FpIMSRYSAnICsgdGhpcy5tYXggKyAnIFPhu5EuLi4nKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNvdW50U2VsZWN0IDwgMCkge1xyXG5cdFx0XHR0aGlzLmNvdW50U2VsZWN0ID0gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdH0sXHJcblx0b25DaGFuZ2VyRGllbTogZnVuY3Rpb24oKXtcclxuXHRcdHZhciB2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pbnB1dFNvRGllbS5zdHJpbmcpKTtcclxuXHRcdHRoaXMuaW5wdXRTb0RpZW0uc3RyaW5nID0gdmFsdWUgPT0gJzAnID8gJycgOiB2YWx1ZTtcclxuXHR9LFxyXG5cdG9uVXBkYXRlRGllbTogZnVuY3Rpb24oZSl7XHJcblx0XHRsZXQgdmFsdWUgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKGUudGFyZ2V0LnZhbHVlKSk7XHJcblx0XHR2YWx1ZSA9IHZhbHVlID09PSAnMCcgPyAnJyA6IHZhbHVlO1xyXG5cdFx0bGV0IHZhbHVlTnVtYiA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodmFsdWUpKjE7XHJcblx0XHRpZiAodmFsdWVOdW1iID4gdGhpcy5kaWVtVG9pRGEpIHtcclxuXHRcdFx0dmFsdWUgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLmRpZW1Ub2lEYSk7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnVOG7kWkgxJFhICcgKyB2YWx1ZSArICcgxJFp4buDbSBjaG8gbeG7l2kgVsOpLicpO1xyXG5cdFx0fVxyXG5cdFx0ZS50YXJnZXQudmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMuc29EaWVtLnN0cmluZyA9ICEhdmFsdWUgPyB2YWx1ZSA6ICcwJztcclxuXHRcdHRoaXMuaW5wdXRTb0RpZW0uc3RyaW5nID0gdmFsdWU7XHJcblx0XHR0aGlzLnVwZGF0ZVRpZW4oKTtcclxuXHR9LFxyXG5cdHVwZGF0ZVRpZW46IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZGllbSA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5zb0RpZW0uc3RyaW5nKSoxO1xyXG5cdFx0dGhpcy50b25nVGllbi5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkaWVtKnRoaXMuZ2lhRGllbSp0aGlzLmNvdW50U2VsZWN0KTtcclxuXHR9LFxyXG5cdG9uQ2xpY2tIdXk6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnNvQ3VvYy5zdHJpbmcgICAgICA9ICcnO1xyXG5cdFx0dGhpcy5zb0RpZW0uc3RyaW5nICAgICAgPSAnMCc7XHJcblx0XHR0aGlzLnRvbmdUaWVuLnN0cmluZyAgICA9ICcwJztcclxuXHRcdHRoaXMuaW5wdXRTb0RpZW0uc3RyaW5nID0gJyc7XHJcblx0XHR0aGlzLmNvdW50U2VsZWN0ICAgICAgICA9IDA7XHJcblx0XHR0aGlzLm5vZGVfc2VsZWN0LmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0aWYgKG9iai5zZWxlY3QpIHtcclxuXHRcdFx0XHRvYmoub25DaGFuZ2VyKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0b25DbGlja0N1b2M6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihoZWxwZXIuaXNFbXB0eSh0aGlzLnNvQ3VvYy5zdHJpbmcpKSB7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnVnVpIGzDsm5nIGNo4buNbiBz4buRIG114buRbiBjxrDhu6NjLi4nKTtcclxuXHRcdH0gZWxzZSBpZih0aGlzLnNvRGllbS5zdHJpbmcgPT09ICcwJyl7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnVnVpIGzDsm5nIG5o4bqtcCDEkWnhu4NtIGPGsOG7o2MuLicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIGRhdGEgPSB7fTtcclxuXHRcdFx0ZGF0YVt0aGlzLmdhbWVdID0ge3NvOnRoaXMuc29DdW9jLnN0cmluZywgZGllbTpoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuc29EaWVtLnN0cmluZyl9O1xyXG5cdFx0XHRjYy5SZWRULnNlbmQoe2c6e3hzOnttYjpkYXRhfX19KTtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19