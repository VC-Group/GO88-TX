
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/MienBac/Lo/Model/MienBac_lo2so.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c435paInNIALLfQ5bJgz3H', 'MienBac_lo2so');
// Script/Game/XoSo/MienBac/Lo/Model/MienBac_lo2so.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxMb1xcTW9kZWwvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvXFxNb2RlbC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcTG9cXE1vZGVsXFxNaWVuQmFjX2xvMnNvLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJCcm93c2VyVXRpbCIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5vZGVfc2VsZWN0IiwiTm9kZSIsIml0ZW1fc2VsZWN0IiwiUHJlZmFiIiwic29DdW9jIiwiTGFiZWwiLCJzb0RpZW0iLCJ0b25nVGllbiIsImlucHV0U29EaWVtIiwiRWRpdEJveCIsIm1heCIsImNvdW50U2VsZWN0IiwiZ2lhRGllbSIsImRpZW1Ub2lEYSIsImdhbWUiLCJvbkxvYWQiLCJhcnIiLCJpIiwib29UIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJpbml0IiwidGV4dCIsInN0cmluZyIsImFkZFplcm8xMCIsImFkZENoaWxkIiwibm9kZSIsIm9uRW5hYmxlIiwic3lzIiwiaXNCcm93c2VyIiwiaW5wdXRBZGRFdmVudCIsIm9uVXBkYXRlRGllbSIsImJpbmQiLCJvbkRpc2FibGUiLCJpbnB1dFJlbW92ZUV2ZW50IiwicmVmcmVzaCIsImZvckVhY2giLCJvYmoiLCJzZWxlY3QiLCJ1cGRhdGVUaWVuIiwicmVmcmVzaEgiLCJvbkNoYW5nZXIiLCJSZWRUIiwiaW5HYW1lIiwiYWRkTm90aWNlIiwib25DaGFuZ2VyRGllbSIsInZhbHVlIiwibnVtYmVyV2l0aENvbW1hcyIsImdldE9ubHlOdW1iZXJJblN0cmluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZU51bWIiLCJkaWVtIiwib25DbGlja0h1eSIsIm9uQ2xpY2tDdW9jIiwiaXNFbXB0eSIsImRhdGEiLCJzbyIsInNlbmQiLCJnIiwieHMiLCJtYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjtBQUNBLElBQUlDLGNBQWNELFFBQVEsYUFBUixDQUFsQjs7QUFFQUUsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsZUFBYUwsR0FBR00sSUFETDtBQUVYQyxlQUFhUCxHQUFHUSxNQUZMO0FBR1hDLFVBQWFULEdBQUdVLEtBSEw7QUFJWEMsVUFBYVgsR0FBR1UsS0FKTDtBQUtYRSxZQUFhWixHQUFHVSxLQUxMO0FBTVhHLGVBQWFiLEdBQUdjLE9BTkw7QUFPWEMsT0FBYSxFQVBGO0FBUVhDLGVBQWEsQ0FSRjtBQVNYQyxXQUFhLEtBVEY7QUFVWEMsYUFBYSxPQVZGO0FBV1hDLFFBQWE7QUFYRixFQUhKO0FBZ0JSQyxPQWhCUSxvQkFnQkM7QUFDUixNQUFJQyxNQUFNLEVBQVY7QUFDQSxPQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxHQUFwQixFQUF5QkEsR0FBekIsRUFBOEI7QUFDN0IsT0FBSUMsTUFBTXZCLEdBQUd3QixXQUFILENBQWUsS0FBS2pCLFdBQXBCLENBQVY7QUFDQWdCLFNBQU1BLElBQUlFLFlBQUosQ0FBaUIsa0JBQWpCLENBQU47QUFDQUYsT0FBSUcsSUFBSixDQUFTLElBQVQ7QUFDQUgsT0FBSUksSUFBSixDQUFTQyxNQUFULEdBQWtCL0IsT0FBT2dDLFNBQVAsQ0FBaUJQLENBQWpCLENBQWxCO0FBQ0EsUUFBS2pCLFdBQUwsQ0FBaUJ5QixRQUFqQixDQUEwQlAsSUFBSVEsSUFBOUI7QUFDQVYsT0FBSUMsQ0FBSixJQUFTQyxHQUFUO0FBQ0E7QUFDRCxPQUFLbEIsV0FBTCxHQUFtQmdCLEdBQW5CO0FBQ0FBLFFBQU0sSUFBTjtBQUNBLEVBNUJPOztBQTZCUlcsV0FBVSxv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QixLQUFLMUMsTUFBTCxDQUFZaUIsTUFBekMsQ0FBN0IsRUFBbEI7QUFDQTVCLE1BQUcrQyxJQUFILENBQVFnQixJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxJQUFHLEVBQUNDLElBQUdMLElBQUosRUFBSixFQUFILEVBQWI7QUFDQTtBQUNEO0FBNUdPLENBQVQiLCJmaWxlIjoiTWllbkJhY19sbzJzby5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcTG9cXE1vZGVsIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxudmFyIEJyb3dzZXJVdGlsID0gcmVxdWlyZSgnQnJvd3NlclV0aWwnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdG5vZGVfc2VsZWN0OiBjYy5Ob2RlLFxyXG5cdFx0aXRlbV9zZWxlY3Q6IGNjLlByZWZhYixcclxuXHRcdHNvQ3VvYzogICAgICBjYy5MYWJlbCxcclxuXHRcdHNvRGllbTogICAgICBjYy5MYWJlbCxcclxuXHRcdHRvbmdUaWVuOiAgICBjYy5MYWJlbCxcclxuXHRcdGlucHV0U29EaWVtOiBjYy5FZGl0Qm94LFxyXG5cdFx0bWF4OiAgICAgICAgIDEwLFxyXG5cdFx0Y291bnRTZWxlY3Q6IDAsXHJcblx0XHRnaWFEaWVtOiAgICAgMjIwMDAsXHJcblx0XHRkaWVtVG9pRGE6ICAgMTAwMDAwMCxcclxuXHRcdGdhbWU6ICAgICAgICAnJyxcclxuXHR9LFxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgMTAwOyBpKyspIHtcclxuXHRcdFx0bGV0IG9vVCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9zZWxlY3QpO1xyXG5cdFx0XHRvb1QgPSBvb1QuZ2V0Q29tcG9uZW50KCdYb1NvX3NlbGVjdF9pdGVtJyk7XHJcblx0XHRcdG9vVC5pbml0KHRoaXMpO1xyXG5cdFx0XHRvb1QudGV4dC5zdHJpbmcgPSBoZWxwZXIuYWRkWmVybzEwKGkpO1xyXG5cdFx0XHR0aGlzLm5vZGVfc2VsZWN0LmFkZENoaWxkKG9vVC5ub2RlKTtcclxuXHRcdFx0YXJyW2ldID0gb29UO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ub2RlX3NlbGVjdCA9IGFycjtcclxuXHRcdGFyciA9IG51bGw7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcclxuXHRcdFx0QnJvd3NlclV0aWwuaW5wdXRBZGRFdmVudCh0aGlzLmlucHV0U29EaWVtLCAnaW5wdXQnLCB0aGlzLm9uVXBkYXRlRGllbS5iaW5kKHRoaXMpKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKGNjLnN5cy5pc0Jyb3dzZXIpIHtcclxuXHRcdFx0QnJvd3NlclV0aWwuaW5wdXRSZW1vdmVFdmVudCh0aGlzLmlucHV0U29EaWVtLCAnaW5wdXQnLCB0aGlzLm9uVXBkYXRlRGllbS5iaW5kKHRoaXMpKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlZnJlc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHRleHQgPSAnJztcclxuXHRcdHRoaXMubm9kZV9zZWxlY3QuZm9yRWFjaChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRpZiAob2JqLnNlbGVjdCkge1xyXG5cdFx0XHRcdHRleHQgKz0gb2JqLnRleHQuc3RyaW5nICsgJywgJztcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNvQ3VvYy5zdHJpbmcgPSB0ZXh0O1xyXG5cdFx0dGhpcy51cGRhdGVUaWVuKCk7XHJcblx0fSxcclxuXHRyZWZyZXNoSDogZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRpZiAob2JqLnNlbGVjdCA9PT0gdHJ1ZSkge1xyXG5cdFx0XHR0aGlzLmNvdW50U2VsZWN0Kys7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5jb3VudFNlbGVjdC0tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuY291bnRTZWxlY3QgPiB0aGlzLm1heCkge1xyXG5cdFx0XHRvYmoub25DaGFuZ2VyKCk7XHJcblx0XHRcdHRoaXMuY291bnRTZWxlY3QgPSB0aGlzLm1heDtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuYWRkTm90aWNlKCcxIFbDqSBjxrDhu6NjIHThu5FpIMSRYSAnICsgdGhpcy5tYXggKyAnIFPhu5EuLi4nKTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmNvdW50U2VsZWN0IDwgMCkge1xyXG5cdFx0XHR0aGlzLmNvdW50U2VsZWN0ID0gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdH0sXHJcblx0b25DaGFuZ2VyRGllbTogZnVuY3Rpb24oKXtcclxuXHRcdHZhciB2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pbnB1dFNvRGllbS5zdHJpbmcpKTtcclxuXHRcdHRoaXMuaW5wdXRTb0RpZW0uc3RyaW5nID0gdmFsdWUgPT0gJzAnID8gJycgOiB2YWx1ZTtcclxuXHR9LFxyXG5cdG9uVXBkYXRlRGllbTogZnVuY3Rpb24oZSl7XHJcblx0XHRsZXQgdmFsdWUgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKGUudGFyZ2V0LnZhbHVlKSk7XHJcblx0XHR2YWx1ZSA9IHZhbHVlID09PSAnMCcgPyAnJyA6IHZhbHVlO1xyXG5cdFx0bGV0IHZhbHVlTnVtYiA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodmFsdWUpKjE7XHJcblx0XHRpZiAodmFsdWVOdW1iID4gdGhpcy5kaWVtVG9pRGEpIHtcclxuXHRcdFx0dmFsdWUgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLmRpZW1Ub2lEYSk7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnVOG7kWkgxJFhICcgKyB2YWx1ZSArICcgxJFp4buDbSBjaG8gbeG7l2kgVsOpLicpO1xyXG5cdFx0fVxyXG5cdFx0ZS50YXJnZXQudmFsdWUgPSB2YWx1ZTtcclxuXHRcdHRoaXMuc29EaWVtLnN0cmluZyA9ICEhdmFsdWUgPyB2YWx1ZSA6ICcwJztcclxuXHRcdHRoaXMuaW5wdXRTb0RpZW0uc3RyaW5nID0gdmFsdWU7XHJcblx0XHR0aGlzLnVwZGF0ZVRpZW4oKTtcclxuXHR9LFxyXG5cdHVwZGF0ZVRpZW46IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZGllbSA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5zb0RpZW0uc3RyaW5nKSoxO1xyXG5cdFx0dGhpcy50b25nVGllbi5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkaWVtKnRoaXMuZ2lhRGllbSp0aGlzLmNvdW50U2VsZWN0KTtcclxuXHR9LFxyXG5cdG9uQ2xpY2tIdXk6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnNvQ3VvYy5zdHJpbmcgICAgICA9ICcnO1xyXG5cdFx0dGhpcy5zb0RpZW0uc3RyaW5nICAgICAgPSAnMCc7XHJcblx0XHR0aGlzLnRvbmdUaWVuLnN0cmluZyAgICA9ICcwJztcclxuXHRcdHRoaXMuaW5wdXRTb0RpZW0uc3RyaW5nID0gJyc7XHJcblx0XHR0aGlzLmNvdW50U2VsZWN0ICAgICAgICA9IDA7XHJcblx0XHR0aGlzLm5vZGVfc2VsZWN0LmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0aWYgKG9iai5zZWxlY3QpIHtcclxuXHRcdFx0XHRvYmoub25DaGFuZ2VyKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0b25DbGlja0N1b2M6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihoZWxwZXIuaXNFbXB0eSh0aGlzLnNvQ3VvYy5zdHJpbmcpKSB7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnVnVpIGzDsm5nIGNo4buNbiBz4buRIG114buRbiBjxrDhu6NjLi4nKTtcclxuXHRcdH0gZWxzZSBpZih0aGlzLnNvRGllbS5zdHJpbmcgPT09ICcwJyl7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnVnVpIGzDsm5nIG5o4bqtcCDEkWnhu4NtIGPGsOG7o2MuLicpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIGRhdGEgPSB7fTtcclxuXHRcdFx0ZGF0YVt0aGlzLmdhbWVdID0ge3NvOnRoaXMuc29DdW9jLnN0cmluZywgZGllbTpoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuc29EaWVtLnN0cmluZyl9O1xyXG5cdFx0XHRjYy5SZWRULnNlbmQoe2c6e3hzOnttYjpkYXRhfX19KTtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19