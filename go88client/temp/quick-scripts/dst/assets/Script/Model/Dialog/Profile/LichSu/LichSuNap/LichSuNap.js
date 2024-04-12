
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSuNap/LichSuNap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b3ba05EetBCV4Zd4FnrDzNm', 'LichSuNap');
// Script/Model/Dialog/Profile/LichSu/LichSuNap/LichSuNap.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		content: cc.Node
	},
	onLoad: function onLoad() {
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('LichSuNap_item');
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ user: { history: { nap_red: { page: page } } } });
	},
	onData: function onData(data) {
		this.content.forEach(function (obj, index) {
			var dataT = data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.Time.string = Helper.getStringDateByTime(dataT.time);
				obj.NhaMang.string = dataT.nhaMang;
				obj.MenhGia.string = Helper.numberWithCommas(dataT.menhGia);
				obj.Nhan.string = Helper.numberWithCommas(dataT.nhan);
				obj.pin.string = dataT.maThe;
				obj.seri.string = dataT.seri;

				obj.Status.string = dataT.status == 0 ? "Chờ duyệt" : dataT.status == 1 ? "Thành công" : dataT.status == 2 ? "Thẻ sai" : "";
				obj.Status.node.color = dataT.status == 0 ? cc.color(9, 121, 195, 255) : dataT.status == 1 ? cc.color(14, 151, 2, 255) : dataT.status == 2 ? cc.color(195, 9, 9, 255) : cc.color(9, 121, 195, 255);
			} else {
				obj.node.active = false;
			}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdU5hcC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VOYXAvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1TmFwXFxMaWNoU3VOYXAuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNvbnRlbnQiLCJOb2RlIiwib25Mb2FkIiwiY2hpbGRyZW4iLCJtYXAiLCJvYmoiLCJnZXRDb21wb25lbnQiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwicGFnZSIsIlJlZFQiLCJzZW5kIiwidXNlciIsImhpc3RvcnkiLCJuYXBfcmVkIiwib25EYXRhIiwiZGF0YSIsImZvckVhY2giLCJpbmRleCIsImRhdGFUIiwibm9kZSIsImFjdGl2ZSIsIlRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwidGltZSIsIk5oYU1hbmciLCJuaGFNYW5nIiwiTWVuaEdpYSIsIm51bWJlcldpdGhDb21tYXMiLCJtZW5oR2lhIiwiTmhhbiIsIm5oYW4iLCJwaW4iLCJtYVRoZSIsInNlcmkiLCJTdGF0dXMiLCJzdGF0dXMiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsV0FBU0wsR0FBR007QUFERCxFQUhKO0FBTVJDLE9BTlEsb0JBTUU7QUFDVCxPQUFLRixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhRyxRQUFiLENBQXNCQyxHQUF0QixDQUEwQixVQUFTQyxHQUFULEVBQWE7QUFDckQsVUFBT0EsSUFBSUMsWUFBSixDQUFpQixnQkFBakIsQ0FBUDtBQUNBLEdBRmMsQ0FBZjtBQUdBLEVBVk87O0FBV1JDLFdBQVUsb0JBQVk7QUFDckIsT0FBS0MsUUFBTDtBQUNBLEVBYk87QUFjUkEsV0FBVSxvQkFBa0I7QUFBQSxNQUFUQyxJQUFTLHVFQUFGLENBQUU7O0FBQzNCZCxLQUFHZSxJQUFILENBQVFDLElBQVIsQ0FBYSxFQUFDQyxNQUFLLEVBQUNDLFNBQVEsRUFBQ0MsU0FBUSxFQUFDTCxNQUFLQSxJQUFOLEVBQVQsRUFBVCxFQUFOLEVBQWI7QUFDQSxFQWhCTztBQWlCUk0sU0FBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ3JCLE9BQUtoQixPQUFMLENBQWFpQixPQUFiLENBQXFCLFVBQVNaLEdBQVQsRUFBY2EsS0FBZCxFQUFvQjtBQUN4QyxPQUFJQyxRQUFRSCxLQUFLRSxLQUFMLENBQVo7QUFDQSxPQUFJLEtBQUssQ0FBTCxLQUFXQyxLQUFmLEVBQXNCO0FBQ3JCZCxRQUFJZSxJQUFKLENBQVNDLE1BQVQsR0FBa0IsSUFBbEI7QUFDQWhCLFFBQUlpQixJQUFKLENBQVNDLE1BQVQsR0FBcUI5QixPQUFPK0IsbUJBQVAsQ0FBMkJMLE1BQU1NLElBQWpDLENBQXJCO0FBQ0FwQixRQUFJcUIsT0FBSixDQUFZSCxNQUFaLEdBQXFCSixNQUFNUSxPQUEzQjtBQUNBdEIsUUFBSXVCLE9BQUosQ0FBWUwsTUFBWixHQUFxQjlCLE9BQU9vQyxnQkFBUCxDQUF3QlYsTUFBTVcsT0FBOUIsQ0FBckI7QUFDQXpCLFFBQUkwQixJQUFKLENBQVNSLE1BQVQsR0FBcUI5QixPQUFPb0MsZ0JBQVAsQ0FBd0JWLE1BQU1hLElBQTlCLENBQXJCO0FBQ0EzQixRQUFJNEIsR0FBSixDQUFRVixNQUFSLEdBQXFCSixNQUFNZSxLQUEzQjtBQUNNN0IsUUFBSThCLElBQUosQ0FBU1osTUFBVCxHQUFxQkosTUFBTWdCLElBQTNCOztBQUVOOUIsUUFBSStCLE1BQUosQ0FBV2IsTUFBWCxHQUF3QkosTUFBTWtCLE1BQU4sSUFBZ0IsQ0FBaEIsR0FBb0IsV0FBcEIsR0FBbUNsQixNQUFNa0IsTUFBTixJQUFnQixDQUFoQixHQUFvQixZQUFwQixHQUFvQ2xCLE1BQU1rQixNQUFOLElBQWdCLENBQWhCLEdBQW9CLFNBQXBCLEdBQWdDLEVBQS9IO0FBQ0FoQyxRQUFJK0IsTUFBSixDQUFXaEIsSUFBWCxDQUFnQmtCLEtBQWhCLEdBQXdCbkIsTUFBTWtCLE1BQU4sSUFBZ0IsQ0FBaEIsR0FBb0IxQyxHQUFHMkMsS0FBSCxDQUFTLENBQVQsRUFBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBQXBCLEdBQWtEbkIsTUFBTWtCLE1BQU4sSUFBZ0IsQ0FBaEIsR0FBb0IxQyxHQUFHMkMsS0FBSCxDQUFTLEVBQVQsRUFBYSxHQUFiLEVBQWtCLENBQWxCLEVBQXFCLEdBQXJCLENBQXBCLEdBQWlEbkIsTUFBTWtCLE1BQU4sSUFBZ0IsQ0FBaEIsR0FBb0IxQyxHQUFHMkMsS0FBSCxDQUFTLEdBQVQsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEdBQXBCLENBQXBCLEdBQStDM0MsR0FBRzJDLEtBQUgsQ0FBUyxDQUFULEVBQVksR0FBWixFQUFpQixHQUFqQixFQUFzQixHQUF0QixDQUExSztBQUNBLElBWEQsTUFXSztBQUNKakMsUUFBSWUsSUFBSixDQUFTQyxNQUFULEdBQWtCLEtBQWxCO0FBQ0E7QUFDRCxHQWhCRDtBQWlCQTtBQW5DTyxDQUFUIiwiZmlsZSI6IkxpY2hTdU5hcC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VOYXAiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0Y29udGVudDogY2MuTm9kZSxcclxuXHR9LFxyXG5cdG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdMaWNoU3VOYXBfaXRlbScpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZXRfZGF0YSgpO1xyXG5cdH0sXHJcblx0Z2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7dXNlcjp7aGlzdG9yeTp7bmFwX3JlZDp7cGFnZTpwYWdlfX19fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5jb250ZW50LmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcblx0XHRcdHZhciBkYXRhVCA9IGRhdGFbaW5kZXhdO1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0b2JqLlRpbWUuc3RyaW5nICAgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcblx0XHRcdFx0b2JqLk5oYU1hbmcuc3RyaW5nID0gZGF0YVQubmhhTWFuZztcclxuXHRcdFx0XHRvYmouTWVuaEdpYS5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5tZW5oR2lhKTtcclxuXHRcdFx0XHRvYmouTmhhbi5zdHJpbmcgICAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5uaGFuKTtcclxuXHRcdFx0XHRvYmoucGluLnN0cmluZyAgICAgPSBkYXRhVC5tYVRoZTtcclxuICAgICAgICBcdFx0b2JqLnNlcmkuc3RyaW5nICAgID0gZGF0YVQuc2VyaTtcclxuXHJcblx0XHRcdFx0b2JqLlN0YXR1cy5zdHJpbmcgICAgID0gZGF0YVQuc3RhdHVzID09IDAgPyBcIkNo4budIGR1eeG7h3RcIiA6IChkYXRhVC5zdGF0dXMgPT0gMSA/IFwiVGjDoG5oIGPDtG5nXCIgOiAoZGF0YVQuc3RhdHVzID09IDIgPyBcIlRo4bq7IHNhaVwiIDogXCJcIikpO1xyXG5cdFx0XHRcdG9iai5TdGF0dXMubm9kZS5jb2xvciA9IGRhdGFULnN0YXR1cyA9PSAwID8gY2MuY29sb3IoOSwgMTIxLCAxOTUsIDI1NSkgOiAoZGF0YVQuc3RhdHVzID09IDEgPyBjYy5jb2xvcigxNCwgMTUxLCAyLCAyNTUpIDogKGRhdGFULnN0YXR1cyA9PSAyID8gY2MuY29sb3IoMTk1LCA5LCA5LCAyNTUpIDogY2MuY29sb3IoOSwgMTIxLCAxOTUsIDI1NSkpKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0b2JqLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=