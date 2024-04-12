
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/MienBac/History/XoSo_MBHistory.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06a9fZAyFBBtKSyOPZt3z5t', 'XoSo_MBHistory');
// Script/Game/XoSo/MienBac/History/XoSo_MBHistory.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		page: cc.Prefab,
		content: cc.Node
	},
	onLoad: function onLoad() {
		var _this = this;

		var page = cc.instantiate(this.page);
		page.y = -324;
		this.node.addChild(page);
		this.page = page.getComponent('Pagination');
		this.page.init(this);

		Promise.all(this.content.children.map(function (obj) {
			return obj.getComponent('XoSo_MBHistory_item');
		})).then(function (tab) {
			_this.content = tab;
		});
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { xs: { mb: { history: page } } } });
	},
	onData: function onData(data) {
		var self = this;
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, i) {
			var dataT = data.data[i];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.bg.active = i % 2;
				obj.time.string = Helper.getStringDateByTime(dataT.time);
				obj.loai.string = self.getLoai(dataT.type);
				obj.so.string = dataT.so.join(', ');
				obj.diem.string = Helper.numberWithCommas(dataT.diem);
				obj.cuoc.string = Helper.numberWithCommas(dataT.cuoc);
				obj.win.string = Helper.numberWithCommas(dataT.win);
				obj.status.string = dataT.thanhtoan ? 'Đã Sổ' : 'Chờ Sổ';
				obj.status.node.color = dataT.thanhtoan ? cc.color(0, 255, 0, 255) : cc.color(255, 214, 0, 255);
			} else {
				obj.node.active = false;
			}
		});
	},
	getLoai: function getLoai(data) {
		switch (data) {
			case 'lo2':
				return 'Lô 2 Số';
				break;
			case 'lo21k':
				return 'Lô 2 Số 1k';
				break;
			case 'lo3':
				return 'Lô 3 Số';
				break;
			case 'lo4':
				return 'Lô 4 Số';
				break;
			case 'xien2':
				return 'Xiên 2';
				break;
			case 'xien3':
				return 'Xiên 3';
				break;
			case 'xien4':
				return 'Xiên 4';
				break;
			case 'de':
				return 'Đề';
				break;
			case 'daude':
				return 'Đầu Đề';
				break;
			case 'degiai7':
				return 'Đề Giải 7';
				break;
			case 'degiai1':
				return 'Đề Giải Nhất';
				break;
			case '3cang':
				return '3 Càng';
				break;
			case '4cang':
				return '4 Càng';
				break;
			case 'dau':
				return 'Đầu';
				break;
			case 'duoi':
				return 'Đuôi';
				break;
			case 'truot4':
				return 'Trượt 4';
				break;
			case 'truot8':
				return 'Trượt 8';
				break;
			case 'truot10':
				return 'Trượt 10';
				break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXEhpc3RvcnkvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcSGlzdG9yeS9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcSGlzdG9yeVxcWG9Tb19NQkhpc3RvcnkuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImluaXQiLCJQcm9taXNlIiwiYWxsIiwiY2hpbGRyZW4iLCJtYXAiLCJvYmoiLCJ0aGVuIiwidGFiIiwiZ2V0X2RhdGEiLCJSZWRUIiwic2VuZCIsImciLCJ4cyIsIm1iIiwiaGlzdG9yeSIsIm9uRGF0YSIsImRhdGEiLCJzZWxmIiwib25TZXQiLCJrbWVzcyIsInRvdGFsIiwiZm9yRWFjaCIsImkiLCJkYXRhVCIsImFjdGl2ZSIsImJnIiwidGltZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJsb2FpIiwiZ2V0TG9haSIsInR5cGUiLCJzbyIsImpvaW4iLCJkaWVtIiwibnVtYmVyV2l0aENvbW1hcyIsImN1b2MiLCJ3aW4iLCJzdGF0dXMiLCJ0aGFuaHRvYW4iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsUUFBUUwsR0FBR00sTUFEQTtBQUVYQyxXQUFT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O0FBQ0E7QUFDRCxHQWhCRDtBQWlCQSxFQTdDTztBQThDUk0sVUFBUyxpQkFBU2QsSUFBVCxFQUFjO0FBQ3RCLFVBQU9BLElBQVA7QUFDQyxRQUFLLEtBQUw7QUFDQyxXQUFPLFNBQVA7QUFDQTtBQUNELFFBQUssT0FBTDtBQUNDLFdBQU8sWUFBUDtBQUNBO0FBQ0QsUUFBSyxLQUFMO0FBQ0MsV0FBTyxTQUFQO0FBQ0E7QUFDRCxRQUFLLEtBQUw7QUFDQyxXQUFPLFNBQVA7QUFDQTtBQUNELFFBQUssT0FBTDtBQUNDLFdBQU8sUUFBUDtBQUNBO0FBQ0QsUUFBSyxPQUFMO0FBQ0MsV0FBTyxRQUFQO0FBQ0E7QUFDRCxRQUFLLE9BQUw7QUFDQyxXQUFPLFFBQVA7QUFDQTtBQUNELFFBQUssSUFBTDtBQUNDLFdBQU8sSUFBUDtBQUNBO0FBQ0QsUUFBSyxPQUFMO0FBQ0MsV0FBTyxRQUFQO0FBQ0E7QUFDRCxRQUFLLFNBQUw7QUFDQyxXQUFPLFdBQVA7QUFDQTtBQUNELFFBQUssU0FBTDtBQUNDLFdBQU8sY0FBUDtBQUNBO0FBQ0QsUUFBSyxPQUFMO0FBQ0MsV0FBTyxRQUFQO0FBQ0E7QUFDRCxRQUFLLE9BQUw7QUFDQyxXQUFPLFFBQVA7QUFDQTtBQUNELFFBQUssS0FBTDtBQUNDLFdBQU8sS0FBUDtBQUNBO0FBQ0QsUUFBSyxNQUFMO0FBQ0MsV0FBTyxNQUFQO0FBQ0E7QUFDRCxRQUFLLFFBQUw7QUFDQyxXQUFPLFNBQVA7QUFDQTtBQUNELFFBQUssUUFBTDtBQUNDLFdBQU8sU0FBUDtBQUNBO0FBQ0QsUUFBSyxTQUFMO0FBQ0MsV0FBTyxVQUFQO0FBQ0E7QUF0REY7QUF3REE7QUF2R08sQ0FBVCIsImZpbGUiOiJYb1NvX01CSGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxIaXN0b3J5Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHBhZ2U6ICAgY2MuUHJlZmFiLFxyXG5cdFx0Y29udGVudDogY2MuTm9kZSxcclxuXHR9LFxyXG5cdG9uTG9hZDogZnVuY3Rpb24oKXtcclxuXHRcdGxldCBwYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wYWdlKTtcclxuXHRcdHBhZ2UueSA9IC0zMjQ7XHJcblx0XHR0aGlzLm5vZGUuYWRkQ2hpbGQocGFnZSk7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlLmdldENvbXBvbmVudCgnUGFnaW5hdGlvbicpO1xyXG5cdFx0dGhpcy5wYWdlLmluaXQodGhpcyk7XHJcblxyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRyZXR1cm4gb2JqLmdldENvbXBvbmVudCgnWG9Tb19NQkhpc3RvcnlfaXRlbScpO1xyXG5cdFx0fSkpXHJcblx0XHQudGhlbih0YWIgPT4ge1xyXG5cdFx0XHR0aGlzLmNvbnRlbnQgPSB0YWI7XHJcblx0XHR9KVxyXG5cdFx0dGhpcy5nZXRfZGF0YSgpO1xyXG5cdH0sXHJcblx0Z2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7Zzp7eHM6e21iOntoaXN0b3J5OnBhZ2V9fX19KTtcclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5wYWdlLm9uU2V0KGRhdGEucGFnZSwgZGF0YS5rbWVzcywgZGF0YS50b3RhbCk7XHJcblx0XHR0aGlzLmNvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihvYmosIGkpe1xyXG5cdFx0XHRsZXQgZGF0YVQgPSBkYXRhLmRhdGFbaV07XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGFUKSB7XHJcblx0XHRcdFx0b2JqLm5vZGUuYWN0aXZlICAgPSB0cnVlO1xyXG5cdFx0XHRcdG9iai5iZy5hY3RpdmUgICAgID0gaSUyO1xyXG5cdFx0XHRcdG9iai50aW1lLnN0cmluZyAgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcblx0XHRcdFx0b2JqLmxvYWkuc3RyaW5nICAgPSBzZWxmLmdldExvYWkoZGF0YVQudHlwZSk7XHJcblx0XHRcdFx0b2JqLnNvLnN0cmluZyAgICAgPSBkYXRhVC5zby5qb2luKCcsICcpO1xyXG5cdFx0XHRcdG9iai5kaWVtLnN0cmluZyAgID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQuZGllbSk7XHJcblx0XHRcdFx0b2JqLmN1b2Muc3RyaW5nICAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5jdW9jKVxyXG5cdFx0XHRcdG9iai53aW4uc3RyaW5nICAgID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQud2luKVxyXG5cdFx0XHRcdG9iai5zdGF0dXMuc3RyaW5nID0gZGF0YVQudGhhbmh0b2FuID8gJ8SQw6MgU+G7lScgOiAnQ2jhu50gU+G7lSc7XHJcblx0XHRcdFx0b2JqLnN0YXR1cy5ub2RlLmNvbG9yID0gZGF0YVQudGhhbmh0b2FuID8gY2MuY29sb3IoMCwgMjU1LCAwLCAyNTUpIDogY2MuY29sb3IoMjU1LCAyMTQsIDAsIDI1NSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdGdldExvYWk6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0c3dpdGNoKGRhdGEpe1xyXG5cdFx0XHRjYXNlICdsbzInOlxyXG5cdFx0XHRcdHJldHVybiAnTMO0IDIgU+G7kSdcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG8yMWsnOlxyXG5cdFx0XHRcdHJldHVybiAnTMO0IDIgU+G7kSAxaydcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnbG8zJzpcclxuXHRcdFx0XHRyZXR1cm4gJ0zDtCAzIFPhu5EnXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2xvNCc6XHJcblx0XHRcdFx0cmV0dXJuICdMw7QgNCBT4buRJ1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICd4aWVuMic6XHJcblx0XHRcdFx0cmV0dXJuICdYacOqbiAyJ1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICd4aWVuMyc6XHJcblx0XHRcdFx0cmV0dXJuICdYacOqbiAzJ1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICd4aWVuNCc6XHJcblx0XHRcdFx0cmV0dXJuICdYacOqbiA0J1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdkZSc6XHJcblx0XHRcdFx0cmV0dXJuICfEkOG7gSdcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnZGF1ZGUnOlxyXG5cdFx0XHRcdHJldHVybiAnxJDhuqd1IMSQ4buBJ1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdkZWdpYWk3JzpcclxuXHRcdFx0XHRyZXR1cm4gJ8SQ4buBIEdp4bqjaSA3J1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdkZWdpYWkxJzpcclxuXHRcdFx0XHRyZXR1cm4gJ8SQ4buBIEdp4bqjaSBOaOG6pXQnXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzNjYW5nJzpcclxuXHRcdFx0XHRyZXR1cm4gJzMgQ8OgbmcnXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzRjYW5nJzpcclxuXHRcdFx0XHRyZXR1cm4gJzQgQ8OgbmcnXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2RhdSc6XHJcblx0XHRcdFx0cmV0dXJuICfEkOG6p3UnXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ2R1b2knOlxyXG5cdFx0XHRcdHJldHVybiAnxJB1w7RpJ1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICd0cnVvdDQnOlxyXG5cdFx0XHRcdHJldHVybiAnVHLGsOG7o3QgNCdcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAndHJ1b3Q4JzpcclxuXHRcdFx0XHRyZXR1cm4gJ1RyxrDhu6N0IDgnXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3RydW90MTAnOlxyXG5cdFx0XHRcdHJldHVybiAnVHLGsOG7o3QgMTAnXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==