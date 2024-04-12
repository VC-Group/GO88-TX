
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CoTrang/lines/CoTrang_lines.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f0cc25QW1BBlrdxfkZq24z5', 'CoTrang_lines');
// Script/Game/CoTrang/lines/CoTrang_lines.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		lines: cc.Node,
		mainLines: cc.Node
	},
	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		var self = this;;
		Promise.all(this.mainLines.children.map(function (line) {
			return line.getComponent('CoTrang_iline');
		})).then(function (result) {
			_this.mainLines = result;
		});
		this.selectAll(null, "1");
	},
	onOpen: function onOpen() {
		this.node.active = true;
	},
	onClose: function onClose() {
		this.RedT.playClick();
		if (this.node.active && this.data.length < 1) {
			this.RedT.notice.show({ title: 'CẢNH BÁO', text: 'Chọn ít nhất 1 dòng' });
		} else {
			this.node.active = false;
		}
	},
	select: function select(e) {
		this.RedT.playClick();
		var node = e.target;
		if (node.color._val != cc.Color.WHITE._val) {
			node.color = cc.Color.WHITE;
		} else {
			node.color = node.color.fromHEX('#8A8A8A');
		}
		this.check();
	},
	check: function check() {
		var _this2 = this;

		var self = this;
		Promise.all(this.lines.children.map(function (line, index) {
			return line.color._val == cc.Color.WHITE._val ? index + 1 : void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this2.data = data;
				_this2.RedT.labelLine.string = data.length;
				_this2.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this2.RedT.bet.string));
			});
		});
	},
	selectChan: function selectChan() {
		var _this3 = this;

		var self = this;
		Promise.all(this.lines.children.map(function (line, index) {
			var i = index + 1;
			if (i % 2) {
				line.color = line.color.fromHEX('#8A8A8A');
			} else {
				line.color = cc.Color.WHITE;
				return i;
			}
			return void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this3.data = data;
				_this3.RedT.labelLine.string = data.length;
				_this3.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this3.RedT.bet.string));
			});
		});
	},
	selectLe: function selectLe() {
		var _this4 = this;

		var self = this;
		Promise.all(this.lines.children.map(function (line, index) {
			var i = index + 1;
			if (i % 2) {
				line.color = cc.Color.WHITE;
				return i;
			} else {
				line.color = line.color.fromHEX('#8A8A8A');
			}
			return void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this4.data = data;
				_this4.RedT.labelLine.string = data.length;
				_this4.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this4.RedT.bet.string));
			});
		});
	},
	selectAll: function selectAll(e, select) {
		var _this5 = this;

		var self = this;
		Promise.all(this.lines.children.map(function (line, index) {
			var check = select == "1";
			line.color = check ? cc.Color.WHITE : line.color.fromHEX('#8A8A8A');
			return check ? index + 1 : void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data, index) {
				return void 0 !== data;
			})).then(function (data) {
				_this5.data = data;
				_this5.RedT.labelLine.string = data.length;
				_this5.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this5.RedT.bet.string));
			});
		});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xcbGluZXMvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nXFxsaW5lcy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xcbGluZXNcXENvVHJhbmdfbGluZXMuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpbmVzIiwiTm9kZSIsIm1haW5MaW5lcyIsImluaXQiLCJvYmoiLCJSZWRUIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsImxpbmUiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwicmVzdWx0Iiwic2VsZWN0QWxsIiwib25PcGVuIiwibm9kZSIsImFjdGl2ZSIsIm9uQ2xvc2UiLCJwbGF5Q2xpY2siLCJkYXRhIiwibGVuZ3RoIiwibm90aWNlIiwic2hvdyIsInRpdGxlIiwidGV4dCIsInNlbGVjdCIsImUiLCJ0YXJnZXQiLCJjb2xvciIsIl92YWwiLCJDb2xvciIsIldISVRFIiwiZnJvbUhFWCIsImNoZWNrIiwiaW5kZXgiLCJmaWx0ZXIiLCJsYWJlbExpbmUiLCJzdHJpbmciLCJ0b25nIiwibnVtYmVyV2l0aENvbW1hcyIsImdldE9ubHlOdW1iZXJJblN0cmluZyIsImJldCIsInNlbGVjdENoYW4iLCJpIiwic2VsZWN0TGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLFNBQVdMLEdBQUdNLElBREg7QUFFWEMsYUFBV1AsR0FBR007QUFGSCxFQUhKO0FBT1JFLE9BQU0sY0FBU0Ms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QSxVQUFPQyxRQUFRQyxRQUFNLENBQWQsR0FBa0IsS0FBSyxDQUE5QjtBQUNBLEdBSlcsQ0FBWixFQUtDdkIsSUFMRCxDQUtNLGtCQUFVO0FBQ2ZOLFdBQVFDLEdBQVIsQ0FBWU0sT0FBT3VCLE1BQVAsQ0FBYyxVQUFTaEIsSUFBVCxFQUFlZSxLQUFmLEVBQXFCO0FBQzlDLFdBQU8sS0FBSyxDQUFMLEtBQVdmLElBQWxCO0FBQ0EsSUFGVyxDQUFaLEVBR0NSLElBSEQsQ0FHTSxnQkFBUTtBQUNiLFdBQUtRLElBQUwsR0FBWUEsSUFBWjtBQUNBLFdBQUtoQixJQUFMLENBQVVpQyxTQUFWLENBQW9CQyxNQUFwQixHQUE2QmxCLEtBQUtDLE1BQWxDO0FBQ0EsV0FBS2pCLElBQUwsQ0FBVW1DLElBQVYsQ0FBZUQsTUFBZixHQUF3QjlDLE9BQU9nRCxnQkFBUCxDQUF3QnBCLEtBQUtDLE1BQUwsR0FBYzdCLE9BQU9pRCxxQkFBUCxDQUE2QixPQUFLckMsSUFBTCxDQUFVc0MsR0FBVixDQUFjSixNQUEzQyxDQUF0QyxDQUF4QjtBQUNBLElBUEQ7QUFRQSxHQWREO0FBZUE7QUF0SE8sQ0FBVCIsImZpbGUiOiJDb1RyYW5nX2xpbmVzLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xcbGluZXMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0bGluZXM6ICAgICBjYy5Ob2RlLFxyXG5cdFx0bWFpbkxpbmVzOiBjYy5Ob2RlLFxyXG5cdH0sXHJcblx0aW5pdDogZnVuY3Rpb24ob2JqKXtcclxuXHRcdHRoaXMuUmVkVCA9IG9iajtcclxuXHRcdHZhciBzZWxmID0gdGhpczs7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLm1haW5MaW5lcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSl7XHJcblx0XHRcdHJldHVybiBsaW5lLmdldENvbXBvbmVudCgnQ29UcmFuZ19pbGluZScpO1xyXG5cdFx0fSkpXHJcblx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHR0aGlzLm1haW5MaW5lcyA9IHJlc3VsdDtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5zZWxlY3RBbGwobnVsbCwgXCIxXCIpO1xyXG5cdH0sXHJcblx0b25PcGVuOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0fSxcclxuXHRvbkNsb3NlOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5SZWRULnBsYXlDbGljaygpO1xyXG5cdFx0aWYgKHRoaXMubm9kZS5hY3RpdmUgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpIHtcclxuXHRcdFx0dGhpcy5SZWRULm5vdGljZS5zaG93KHt0aXRsZTonQ+G6ok5IIELDgU8nLCB0ZXh0OidDaOG7jW4gw610IG5o4bqldCAxIGTDsm5nJ30pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNlbGVjdDogZnVuY3Rpb24oZSkge1xyXG5cdFx0dGhpcy5SZWRULnBsYXlDbGljaygpO1xyXG5cdFx0dmFyIG5vZGUgPSBlLnRhcmdldDtcclxuXHRcdGlmIChub2RlLmNvbG9yLl92YWwgIT0gY2MuQ29sb3IuV0hJVEUuX3ZhbCkge1xyXG5cdFx0XHRub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bm9kZS5jb2xvciA9IG5vZGUuY29sb3IuZnJvbUhFWCgnIzhBOEE4QScpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jaGVjaygpO1xyXG5cdH0sXHJcblx0Y2hlY2s6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5saW5lcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xyXG5cdFx0XHRyZXR1cm4gbGluZS5jb2xvci5fdmFsID09IGNjLkNvbG9yLldISVRFLl92YWwgPyBpbmRleCsxIDogdm9pZCAwO1xyXG5cdFx0fSkpXHJcblx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRQcm9taXNlLmFsbChyZXN1bHQuZmlsdGVyKGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0XHRcdHJldHVybiB2b2lkIDAgIT09IGRhdGE7XHJcblx0XHRcdH0pKVxyXG5cdFx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHRcdHRoaXMuUmVkVC5sYWJlbExpbmUuc3RyaW5nID0gZGF0YS5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5SZWRULnRvbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5sZW5ndGggKiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuUmVkVC5iZXQuc3RyaW5nKSk7XHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0c2VsZWN0Q2hhbjogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLmxpbmVzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihsaW5lLCBpbmRleCl7XHJcblx0XHRcdHZhciBpID0gaW5kZXgrMTtcclxuXHRcdFx0aWYgKGklMikge1xyXG5cdFx0XHRcdGxpbmUuY29sb3IgPSBsaW5lLmNvbG9yLmZyb21IRVgoJyM4QThBOEEnKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0bGluZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG5cdFx0XHRcdHJldHVybiBpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2b2lkIDA7XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdFByb21pc2UuYWxsKHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0cmV0dXJuIHZvaWQgMCAhPT0gZGF0YTtcclxuXHRcdFx0fSkpXHJcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHRcdFx0dGhpcy5SZWRULmxhYmVsTGluZS5zdHJpbmcgPSBkYXRhLmxlbmd0aDtcclxuXHRcdFx0XHR0aGlzLlJlZFQudG9uZy5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLmxlbmd0aCAqIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5SZWRULmJldC5zdHJpbmcpKTtcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fSxcclxuXHRzZWxlY3RMZTogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLmxpbmVzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihsaW5lLCBpbmRleCl7XHJcblx0XHRcdHZhciBpID0gaW5kZXgrMTtcclxuXHRcdFx0aWYgKGklMikge1xyXG5cdFx0XHRcdGxpbmUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0bGluZS5jb2xvciA9IGxpbmUuY29sb3IuZnJvbUhFWCgnIzhBOEE4QScpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB2b2lkIDA7XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdFByb21pc2UuYWxsKHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0cmV0dXJuIHZvaWQgMCAhPT0gZGF0YTtcclxuXHRcdFx0fSkpXHJcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHRcdFx0dGhpcy5SZWRULmxhYmVsTGluZS5zdHJpbmcgPSBkYXRhLmxlbmd0aDtcclxuXHRcdFx0XHR0aGlzLlJlZFQudG9uZy5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLmxlbmd0aCAqIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5SZWRULmJldC5zdHJpbmcpKTtcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fSxcclxuXHRzZWxlY3RBbGw6IGZ1bmN0aW9uKGUsIHNlbGVjdCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5saW5lcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xyXG5cdFx0XHR2YXIgY2hlY2sgPSBzZWxlY3QgPT0gXCIxXCI7XHJcblx0XHRcdGxpbmUuY29sb3IgPSBjaGVjayA/IGNjLkNvbG9yLldISVRFIDogbGluZS5jb2xvci5mcm9tSEVYKCcjOEE4QThBJyk7XHJcblx0XHRcdHJldHVybiBjaGVjayA/IGluZGV4KzEgOiB2b2lkIDA7XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdFByb21pc2UuYWxsKHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oZGF0YSwgaW5kZXgpe1xyXG5cdFx0XHRcdHJldHVybiB2b2lkIDAgIT09IGRhdGE7XHJcblx0XHRcdH0pKVxyXG5cdFx0XHQudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xyXG5cdFx0XHRcdHRoaXMuUmVkVC5sYWJlbExpbmUuc3RyaW5nID0gZGF0YS5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5SZWRULnRvbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5sZW5ndGggKiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuUmVkVC5iZXQuc3RyaW5nKSk7XHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHR9LFxyXG59KTtcclxuIl19