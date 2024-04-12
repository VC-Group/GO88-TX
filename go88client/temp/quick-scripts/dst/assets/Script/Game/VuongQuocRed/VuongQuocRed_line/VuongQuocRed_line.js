
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/VuongQuocRed_line/VuongQuocRed_line.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70127RbBKFG06+Pa5WThYLM', 'VuongQuocRed_line');
// Script/Game/VuongQuocRed/VuongQuocRed_line/VuongQuocRed_line.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		nodeLine: cc.Node,
		mainLine: cc.Node
	},
	init: function init(obj) {
		this.RedT = obj;
		var self = this;;
		this.mainLine = this.mainLine.children.map(function (line) {
			return line.getComponent('VQRed_main_line').init(self.RedT);
		});
		this.selectAll(null, "1");
	},
	onOpen: function onOpen() {
		cc.RedT.audio.playClick();
		this.node.active = true;
	},
	onClose: function onClose() {
		cc.RedT.audio.playUnClick();
		if (this.node.active && this.data.length < 1) {
			this.RedT.addNotice('Chọn ít nhất 1 dòng');
		} else {
			this.node.active = false;
		}
	},
	select: function select(e) {
		var node = e.target;
		if (node.children[0].active) {
			node.children[0].active = false;
			node.children[1].active = true;
		} else {
			node.children[0].active = true;
			node.children[1].active = false;
		}
		this.check();
	},
	check: function check() {
		var _this = this;

		var self = this;
		Promise.all(this.nodeLine.children.map(function (line, index) {
			return line.children[0].active ? index + 1 : void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this.data = data;
				_this.RedT.labelLine.string = data.length + ' dòng';
				_this.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this.RedT.bet.string));
			});
		});
	},
	selectChan: function selectChan() {
		var _this2 = this;

		var self = this;
		Promise.all(this.nodeLine.children.map(function (line, index) {
			var i = index + 1;
			if (i % 2) {
				line.children[0].active = true;
				line.children[1].active = false;
			} else {
				line.children[0].active = false;
				line.children[1].active = true;
				return i;
			}
			return void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this2.data = data;
				_this2.RedT.labelLine.string = data.length + ' dòng';
				_this2.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this2.RedT.bet.string));
			});
		});
	},
	selectLe: function selectLe() {
		var _this3 = this;

		var self = this;
		Promise.all(this.nodeLine.children.map(function (line, index) {
			var i = index + 1;
			if (i % 2) {
				line.children[0].active = false;
				line.children[1].active = true;
				return i;
			} else {
				line.children[0].active = true;
				line.children[1].active = false;
			}
			return void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this3.data = data;
				_this3.RedT.labelLine.string = data.length + ' dòng';
				_this3.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this3.RedT.bet.string));
			});
		});
	},
	selectAll: function selectAll(e, select) {
		var _this4 = this;

		var self = this;
		Promise.all(this.nodeLine.children.map(function (line, index) {
			var check = select == "1";
			line.children[0].active = check;
			line.children[1].active = !check;
			return check ? index + 1 : void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data, index) {
				return void 0 !== data;
			})).then(function (data) {
				_this4.data = data;
				_this4.RedT.labelLine.string = data.length + ' dòng';
				_this4.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this4.RedT.bet.string));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxWdW9uZ1F1b2NSZWRfbGluZS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcVnVvbmdRdW9jUmVkX2xpbmUvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcVnVvbmdRdW9jUmVkX2xpbmVcXFZ1b25nUXVvY1JlZF9saW5lLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJub2RlTGluZSIsIk5vZGUiLCJtYWluTGluZSIsImluaXQiLCJvYmoiLCJSZWRUIiwic2VsZiIsImNoaWxkcmVuIiwibWFwIiwibGluZSIsImdldENvbXBvbmVudCIsInNlbGVjdEFsbCIsIm9uT3BlbiIsImF1ZGlvIiwicGxheUNsaWNrIiwibm9kZSIsImFjdGl2ZSIsIm9uQ2xvc2UiLCJwbGF5VW5DbGljayIsImRhdGEiLCJsZW5ndGgiLCJhZGROb3RpY2UiLCJzZWxlY3QiLCJlIiwidGFyZ2V0IiwiY2hlY2siLCJQcm9taXNlIiwiYWxsIiwiaW5kZXgiLCJ0aGVuIiwicmVzdWx0IiwiZmlsdGVyIiwibGFiZWxMaW5lIiwic3RyaW5nIiwidG9uZyIsIm51bWJlcldpdGhDb21tYXMiLCJnZXRPbmx5TnVtYmVySW5TdHJpbmciLCJiZXQiLCJzZWxlY3RDaGFuIiwiaSIsInNlbGVjdExlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxZQUFZTCxHQUFHTSxJQURKO0FBRVhDLFlBQVlQLEdBQUdNO0FBRkosRUFI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UUFBTCxDQUFjTyxRQUFkLENBQXVCQyxHQUF2QixDQUEyQixVQUFTQyxJQUFULEVBQWVtQixLQUFmLEVBQXFCO0FBQzNELE9BQUlILFFBQVFILFVBQVUsR0FBdEI7QUFDQWIsUUFBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJTLE1BQWpCLEdBQTBCUyxLQUExQjtBQUNBaEIsUUFBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJTLE1BQWpCLEdBQTBCLENBQUNTLEtBQTNCO0FBQ0EsVUFBT0EsUUFBUUcsUUFBTSxDQUFkLEdBQWtCLEtBQUssQ0FBOUI7QUFDQSxHQUxXLENBQVosRUFNQ0MsSUFORCxDQU1NLGtCQUFVO0FBQ2ZILFdBQVFDLEdBQVIsQ0FBWUcsT0FBT0MsTUFBUCxDQUFjLFVBQVNaLElBQVQsRUFBZVMsS0FBZixFQUFxQjtBQUM5QyxXQUFPLEtBQUssQ0FBTCxLQUFXVCxJQUFsQjtBQUNBLElBRlcsQ0FBWixFQUdDVSxJQUhELENBR00sZ0JBQVE7QUFDYixXQUFLVixJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLZCxJQUFMLENBQVUyQixTQUFWLENBQW9CQyxNQUFwQixHQUE2QmQsS0FBS0MsTUFBTCxHQUFjLE9BQTNDO0FBQ0EsV0FBS2YsSUFBTCxDQUFVNkIsSUFBVixDQUFlRCxNQUFmLEdBQXdCeEMsT0FBTzBDLGdCQUFQLENBQXdCaEIsS0FBS0MsTUFBTCxHQUFjM0IsT0FBTzJDLHFCQUFQLENBQTZCLE9BQUsvQixJQUFMLENBQVVnQyxHQUFWLENBQWNKLE1BQTNDLENBQXRDLENBQXhCO0FBQ0EsSUFQRDtBQVFBLEdBZkQ7QUFnQkE7QUEzSE8sQ0FBVCIsImZpbGUiOiJWdW9uZ1F1b2NSZWRfbGluZS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcVnVvbmdRdW9jUmVkX2xpbmUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0bm9kZUxpbmU6ICAgY2MuTm9kZSxcclxuXHRcdG1haW5MaW5lOiAgIGNjLk5vZGUsXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbihvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzOztcclxuXHRcdHRoaXMubWFpbkxpbmUgPSB0aGlzLm1haW5MaW5lLmNoaWxkcmVuLm1hcChmdW5jdGlvbihsaW5lKXtcclxuXHRcdFx0cmV0dXJuIGxpbmUuZ2V0Q29tcG9uZW50KCdWUVJlZF9tYWluX2xpbmUnKVxyXG5cdFx0XHRcdC5pbml0KHNlbGYuUmVkVCk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuc2VsZWN0QWxsKG51bGwsIFwiMVwiKTtcclxuXHR9LFxyXG5cdG9uT3BlbjogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHR9LFxyXG5cdG9uQ2xvc2U6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlVbkNsaWNrKCk7XHJcblx0XHRpZiAodGhpcy5ub2RlLmFjdGl2ZSAmJiB0aGlzLmRhdGEubGVuZ3RoIDwgMSkge1xyXG5cdFx0XHR0aGlzLlJlZFQuYWRkTm90aWNlKCdDaOG7jW4gw610IG5o4bqldCAxIGTDsm5nJyk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2VsZWN0OiBmdW5jdGlvbihlKSB7XHJcblx0XHR2YXIgbm9kZSA9IGUudGFyZ2V0O1xyXG5cdFx0aWYgKG5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlKSB7XHJcblx0XHRcdG5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNoZWNrKCk7XHJcblx0fSxcclxuXHRjaGVjazogZnVuY3Rpb24oKSB7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLm5vZGVMaW5lLmNoaWxkcmVuLm1hcChmdW5jdGlvbihsaW5lLCBpbmRleCl7XHJcblx0XHRcdHJldHVybiBsaW5lLmNoaWxkcmVuWzBdLmFjdGl2ZSA/IGluZGV4KzEgOiB2b2lkIDA7XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdFByb21pc2UuYWxsKHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRcdFx0cmV0dXJuIHZvaWQgMCAhPT0gZGF0YTtcclxuXHRcdFx0fSkpXHJcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHRcdFx0dGhpcy5SZWRULmxhYmVsTGluZS5zdHJpbmcgPSBkYXRhLmxlbmd0aCArICcgZMOybmcnO1xyXG5cdFx0XHRcdHRoaXMuUmVkVC50b25nLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEubGVuZ3RoICogaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLlJlZFQuYmV0LnN0cmluZykpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9LFxyXG5cdHNlbGVjdENoYW46IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5ub2RlTGluZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xyXG5cdFx0XHR2YXIgaSA9IGluZGV4KzE7XHJcblx0XHRcdGlmIChpJTIpIHtcclxuXHRcdFx0XHRsaW5lLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0bGluZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0bGluZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRsaW5lLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0cmV0dXJuIGk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHZvaWQgMDtcclxuXHRcdH0pKVxyXG5cdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0UHJvbWlzZS5hbGwocmVzdWx0LmZpbHRlcihmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0XHRyZXR1cm4gdm9pZCAwICE9PSBkYXRhO1xyXG5cdFx0XHR9KSlcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdFx0XHR0aGlzLlJlZFQubGFiZWxMaW5lLnN0cmluZyA9IGRhdGEubGVuZ3RoICsgJyBkw7JuZyc7XHJcblx0XHRcdFx0dGhpcy5SZWRULnRvbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5sZW5ndGggKiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuUmVkVC5iZXQuc3RyaW5nKSk7XHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0c2VsZWN0TGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5ub2RlTGluZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xyXG5cdFx0XHR2YXIgaSA9IGluZGV4KzE7XHJcblx0XHRcdGlmIChpJTIpIHtcclxuXHRcdFx0XHRsaW5lLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGxpbmUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRyZXR1cm4gaTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0bGluZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdGxpbmUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHZvaWQgMDtcclxuXHRcdH0pKVxyXG5cdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0UHJvbWlzZS5hbGwocmVzdWx0LmZpbHRlcihmdW5jdGlvbihkYXRhKXtcclxuXHRcdFx0XHRyZXR1cm4gdm9pZCAwICE9PSBkYXRhO1xyXG5cdFx0XHR9KSlcclxuXHRcdFx0LnRoZW4oZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5kYXRhID0gZGF0YTtcclxuXHRcdFx0XHR0aGlzLlJlZFQubGFiZWxMaW5lLnN0cmluZyA9IGRhdGEubGVuZ3RoICsgJyBkw7JuZyc7XHJcblx0XHRcdFx0dGhpcy5SZWRULnRvbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5sZW5ndGggKiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuUmVkVC5iZXQuc3RyaW5nKSk7XHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH0sXHJcblx0c2VsZWN0QWxsOiBmdW5jdGlvbihlLCBzZWxlY3QpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFByb21pc2UuYWxsKHRoaXMubm9kZUxpbmUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGxpbmUsIGluZGV4KXtcclxuXHRcdFx0dmFyIGNoZWNrID0gc2VsZWN0ID09IFwiMVwiO1xyXG5cdFx0XHRsaW5lLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGNoZWNrO1xyXG5cdFx0XHRsaW5lLmNoaWxkcmVuWzFdLmFjdGl2ZSA9ICFjaGVjaztcclxuXHRcdFx0cmV0dXJuIGNoZWNrID8gaW5kZXgrMSA6IHZvaWQgMDtcclxuXHRcdH0pKVxyXG5cdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0UHJvbWlzZS5hbGwocmVzdWx0LmZpbHRlcihmdW5jdGlvbihkYXRhLCBpbmRleCl7XHJcblx0XHRcdFx0cmV0dXJuIHZvaWQgMCAhPT0gZGF0YTtcclxuXHRcdFx0fSkpXHJcblx0XHRcdC50aGVuKGRhdGEgPT4ge1xyXG5cdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XHJcblx0XHRcdFx0dGhpcy5SZWRULmxhYmVsTGluZS5zdHJpbmcgPSBkYXRhLmxlbmd0aCArICcgZMOybmcnO1xyXG5cdFx0XHRcdHRoaXMuUmVkVC50b25nLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEubGVuZ3RoICogaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLlJlZFQuYmV0LnN0cmluZykpO1xyXG5cdFx0XHR9KVxyXG5cdFx0fSk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==