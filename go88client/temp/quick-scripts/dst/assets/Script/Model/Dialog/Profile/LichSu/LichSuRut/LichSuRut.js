
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSuRut/LichSuRut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '725d0Pb9ORLDYbFhFG7zANv', 'LichSuRut');
// Script/Model/Dialog/Profile/LichSu/LichSuRut/LichSuRut.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		content: cc.Node
	},
	onLoad: function onLoad() {
		this.isView = false;
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('LichSuRut_item');
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		!this.isView && cc.RedT.send({ user: { history: { mua_the: { page: page } } } });
		this.isView = false;
	},
	onData: function onData(data) {
		this.content.forEach(function (obj, index) {
			var dataT = data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.Time.string = Helper.getStringDateByTime(dataT.time);
				obj.NhaMang.string = dataT.nhaMang;
				obj.MenhGia.string = Helper.numberWithCommas(dataT.menhGia);
				obj.SoLuong.string = dataT.soLuong;
				obj.Cost.string = Helper.numberWithCommas(dataT.Cost);
				obj.Status.string = dataT.status == 0 ? "Chờ duyệt" : dataT.status == 1 ? "Thành công" : dataT.status == 2 ? "Bị Huỷ" : "";
				obj.Status.node.color = dataT.status == 0 ? cc.color(9, 121, 195, 255) : dataT.status == 1 ? cc.color(14, 151, 2, 255) : dataT.status == 2 ? cc.color(195, 9, 9, 255) : cc.color(9, 121, 195, 255);
				if (dataT.status == 1) {
					obj.idT = dataT._id;
					obj.info = true;
				} else {
					obj.idT = null;
					obj.info = false;
				}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdVJ1dC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VSdXQvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1UnV0XFxMaWNoU3VSdXQuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNvbnRlbnQiLCJOb2RlIiwib25Mb2FkIiwiaXNWaWV3IiwiY2hpbGRyZW4iLCJtYXAiLCJvYmoiLCJnZXRDb21wb25lbnQiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwicGFnZSIsIlJlZFQiLCJzZW5kIiwidXNlciIsImhpc3RvcnkiLCJtdWFfdGhlIiwib25EYXRhIiwiZGF0YSIsImZvckVhY2giLCJpbmRleCIsImRhdGFUIiwibm9kZSIsImFjdGl2ZSIsIlRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwidGltZSIsIk5oYU1hbmciLCJuaGFNYW5nIiwiTWVuaEdpYSIsIm51bWJlcldpdGhDb21tYXMiLCJtZW5oR2lhIiwiU29MdW9uZyIsInNvTHVvbmciLCJDb3N0IiwiU3RhdHVzIiwic3RhdHVzIiwiY29sb3IiLCJpZFQiLCJfaWQiLCJpbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxXQUFTTCxHQUFHTTtBQURELEVBSEo7QUFNUkMsT0FOUSxv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LEtBQWxCO0FBQ0E7QUFDRCxHQXJCRDtBQXNCQTtBQTFDTyxDQUFUIiwiZmlsZSI6IkxpY2hTdVJ1dC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VSdXQiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0Y29udGVudDogY2MuTm9kZSxcclxuXHR9LFxyXG5cdG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLmlzVmlldyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRyZXR1cm4gb2JqLmdldENvbXBvbmVudCgnTGljaFN1UnV0X2l0ZW0nKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZ2V0X2RhdGEoKTtcclxuXHR9LFxyXG5cdGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcblx0XHQhdGhpcy5pc1ZpZXcgJiYgY2MuUmVkVC5zZW5kKHt1c2VyOntoaXN0b3J5OnttdWFfdGhlOntwYWdlOnBhZ2V9fX19KTtcclxuXHRcdHRoaXMuaXNWaWV3ID0gZmFsc2U7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5jb250ZW50LmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcblx0XHRcdHZhciBkYXRhVCA9IGRhdGFbaW5kZXhdO1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0b2JqLlRpbWUuc3RyaW5nICAgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcblx0XHRcdFx0b2JqLk5oYU1hbmcuc3RyaW5nID0gZGF0YVQubmhhTWFuZztcclxuXHRcdFx0XHRvYmouTWVuaEdpYS5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5tZW5oR2lhKTtcclxuXHRcdFx0XHRvYmouU29MdW9uZy5zdHJpbmcgPSBkYXRhVC5zb0x1b25nO1xyXG5cdFx0ICAgICAgICBvYmouQ29zdC5zdHJpbmcgICAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5Db3N0KTtcclxuXHRcdFx0XHRvYmouU3RhdHVzLnN0cmluZyAgICAgPSBkYXRhVC5zdGF0dXMgPT0gMCA/IFwiQ2jhu50gZHV54buHdFwiIDogKGRhdGFULnN0YXR1cyA9PSAxID8gXCJUaMOgbmggY8O0bmdcIiA6IChkYXRhVC5zdGF0dXMgPT0gMiA/IFwiQuG7iyBIdeG7t1wiIDogXCJcIikpO1xyXG5cdFx0XHRcdG9iai5TdGF0dXMubm9kZS5jb2xvciA9IGRhdGFULnN0YXR1cyA9PSAwID8gY2MuY29sb3IoOSwgMTIxLCAxOTUsIDI1NSkgOiAoZGF0YVQuc3RhdHVzID09IDEgPyBjYy5jb2xvcigxNCwgMTUxLCAyLCAyNTUpIDogKGRhdGFULnN0YXR1cyA9PSAyID8gY2MuY29sb3IoMTk1LCA5LCA5LCAyNTUpIDogY2MuY29sb3IoOSwgMTIxLCAxOTUsIDI1NSkpKTtcclxuXHRcdFx0XHRpZiAoZGF0YVQuc3RhdHVzID09IDEpIHtcclxuXHRcdFx0XHRcdG9iai5pZFQgID0gZGF0YVQuX2lkO1xyXG5cdFx0XHRcdFx0b2JqLmluZm8gPSB0cnVlO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0b2JqLmlkVCAgPSBudWxsO1xyXG5cdFx0XHRcdFx0b2JqLmluZm8gPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG59KTtcclxuIl19