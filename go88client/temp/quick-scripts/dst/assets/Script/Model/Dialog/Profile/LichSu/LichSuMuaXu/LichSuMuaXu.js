
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSuMuaXu/LichSuMuaXu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2292sqRptHdJi8HS34a///', 'LichSuMuaXu');
// Script/Model/Dialog/Profile/LichSu/LichSuMuaXu/LichSuMuaXu.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		content: {
			default: null,
			type: cc.Node
		}
	},
	onLoad: function onLoad() {
		var _this = this;

		Promise.all(this.content.children.map(function (obj) {
			return obj.getComponent('LichSuNap_item');
		})).then(function (resulf) {
			_this.content = resulf;
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ user: { history: { mua_xu: { page: page } } } });
	},
	onData: function onData(data) {
		Promise.all(this.content.map(function (obj, index) {
			var dataT = data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.GD.string = !!dataT.id ? dataT.id : '';
				obj.Time.string = Helper.getStringDateByTime(dataT.time);
				obj.NhaMang.string = Helper.numberWithCommas(dataT.red);
				obj.MenhGia.string = Helper.numberWithCommas(dataT.xu);
			} else {
				obj.node.active = false;
			}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdU11YVh1Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdU11YVh1L2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdU11YVh1XFxMaWNoU3VNdWFYdS5qcyJdLCJuYW1lcyI6WyJIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsImRlZmF1bHQiLCJ0eXBlIiwiTm9kZSIsIm9uTG9hZCIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bGYiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwicGFnZSIsIlJlZFQiLCJzZW5kIiwidXNlciIsImhpc3RvcnkiLCJtdWFfeHUiLCJvbkRhdGEiLCJkYXRhIiwiaW5kZXgiLCJkYXRhVCIsIm5vZGUiLCJhY3RpdmUiLCJHRCIsInN0cmluZyIsImlkIiwiVGltZSIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJ0aW1lIiwiTmhhTWFuZyIsIm51bWJlcldpdGhDb21tYXMiLCJyZWQiLCJNZW5oR2lhIiwieHUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLFdBQVM7QUFDUkMsWUFBUyxJQUREO0FBRVJDLFNBQVNQLEdBQUdRO0FBRko7QUFERSxFQUhKO0FBU1JDLE9BVFEsb0JBU0U7QUFBQTs7QUFDVEMsVUFBUUMsR0FBUixDQUFZLEtBQUtOLE9BQUwsQ0FBYU8sUUFBYixDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBU0MsR0FBVCxFQUFhO0FBQ2xELFVBQU9BLElBQUlDLFlBQUosQ0FBaUIsZ0JBQWpCLENBQVA7QUFDQSxHQUZXLENBQVosRUFHQ0MsSUFIRCxDQUdNLGtCQUFVO0FBQ2YsU0FBS1gsT0FBTCxHQUFlWSxNQUFmO0FBQ0EsR0FMRDtBQU1BLEVBaEJPOztBQWlCUkMsV0FBVSxvQkFBWTtBQUNyQixPQUFLQyxRQUFMO0FBQ0EsRUFuQk87QUFvQlJBLFdBQVUsb0JBQWtCO0FBQUEsTUFBVEMsSUFBUyx1RUFBRixDQUFFOztBQUMzQnBCLEtBQUdxQixJQUFILENBQVFDLElBQVIsQ0FBYSxFQUFDQyxNQUFLLEVBQUNDLFNBQVEsRUFBQ0MsUUFBTyxFQUFDTCxNQUFLQSxJQUFOLEVBQVIsRUFBVCxFQUFOLEVBQWI7QUFDQSxFQXRCTztBQXVCUk0sU0FBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ3JCakIsVUFBUUMsR0FBUixDQUFZLEtBQUtOLE9BQUwsQ0FBYVEsR0FBYixDQUFpQixVQUFTQyxHQUFULEVBQWNjLEtBQWQsRUFBb0I7QUFDaEQsT0FBSUMsUUFBUUYsS0FBS0MsS0FBTCxDQUFaO0FBQ0EsT0FBSSxLQUFLLENBQUwsS0FBV0MsS0FBZixFQUFzQjtBQUNyQmYsUUFBSWdCLElBQUosQ0FBU0MsTUFBVCxHQUFxQixJQUFyQjtBQUNBakIsUUFBSWtCLEVBQUosQ0FBT0MsTUFBUCxHQUFxQixDQUFDLENBQUNKLE1BQU1LLEVBQVIsR0FBYUwsTUFBTUssRUFBbkIsR0FBd0IsRUFBN0M7QUFDQXBCLFFBQUlxQixJQUFKLENBQVNGLE1BQVQsR0FBcUJuQyxPQUFPc0MsbUJBQVAsQ0FBMkJQLE1BQU1RLElBQWpDLENBQXJCO0FBQ0F2QixRQUFJd0IsT0FBSixDQUFZTCxNQUFaLEdBQXFCbkMsT0FBT3lDLGdCQUFQLENBQXdCVixNQUFNVyxHQUE5QixDQUFyQjtBQUNBMUIsUUFBSTJCLE9BQUosQ0FBWVIsTUFBWixHQUFxQm5DLE9BQU95QyxnQkFBUCxDQUF3QlYsTUFBTWEsRUFBOUIsQ0FBckI7QUFDQSxJQU5ELE1BTUs7QUFDSjVCLFFBQUlnQixJQUFKLENBQVNDLE1BQVQsR0FBa0IsS0FBbEI7QUFDQTtBQUNELEdBWFcsQ0FBWjtBQVlBO0FBcENPLENBQVQiLCJmaWxlIjoiTGljaFN1TXVhWHUuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1TXVhWHUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiAgICBjYy5Ob2RlLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG9uTG9hZCAoKSB7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLmNvbnRlbnQuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdMaWNoU3VOYXBfaXRlbScpO1xyXG5cdFx0fSkpXHJcblx0XHQudGhlbihyZXN1bGYgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSByZXN1bGY7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmdldF9kYXRhKCk7XHJcblx0fSxcclxuXHRnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHt1c2VyOntoaXN0b3J5OnttdWFfeHU6e3BhZ2U6cGFnZX19fX0pO1xyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdFByb21pc2UuYWxsKHRoaXMuY29udGVudC5tYXAoZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcblx0XHRcdHZhciBkYXRhVCA9IGRhdGFbaW5kZXhdO1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSAgICA9IHRydWU7XHJcblx0XHRcdFx0b2JqLkdELnN0cmluZyAgICAgID0gISFkYXRhVC5pZCA/IGRhdGFULmlkIDogJyc7XHJcblx0XHRcdFx0b2JqLlRpbWUuc3RyaW5nICAgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcblx0XHRcdFx0b2JqLk5oYU1hbmcuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQucmVkKTtcclxuXHRcdFx0XHRvYmouTWVuaEdpYS5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC54dSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KSk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==