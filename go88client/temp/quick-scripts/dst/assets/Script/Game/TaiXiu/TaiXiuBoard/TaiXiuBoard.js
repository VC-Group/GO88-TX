
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuBoard/TaiXiuBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71423kGPWNLUrUcOrvZ688E', 'TaiXiuBoard');
// Script/Game/TaiXiu/TaiXiuBoard/TaiXiuBoard.js

"use strict";

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		textType: {
			default: null,
			type: cc.Label
		},
		nodeChonTien: {
			default: null,
			type: cc.Node
		},
		nodeChonSo: {
			default: null,
			type: cc.Node
		}
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	ChonTienClick: function ChonTienClick(event, value) {
		this.RedT.input.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.RedT.input.string) * 1 + value * 1);
	},
	ChonSoClick: function ChonSoClick(event, value) {
		this.RedT.input.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.RedT.input.string + value));
	},
	onBackClick: function onBackClick() {
		var number = helper.getOnlyNumberInString(this.RedT.input.string);
		this.RedT.input.string = helper.numberWithCommas(number.slice(0, number.length - 1));
	},
	onCleanClick: function onCleanClick() {
		this.RedT.input.string = "";
	},
	onAllClick: function onAllClick() {
		this.RedT.input.string = helper.numberWithCommas(cc.RedT.user.red);
	},
	onChangerTypeClick: function onChangerTypeClick() {
		if (this.nodeChonTien.active) {
			this.nodeChonTien.active = false;
			this.nodeChonSo.active = true;
			this.textType.string = "CHỌN";
		} else {
			this.nodeChonSo.active = false;
			this.nodeChonTien.active = true;
			this.textType.string = "SỐ KHÁC";
		}
	},
	onCuocClick: function onCuocClick() {
		this.RedT.onCuocClick();
		this.RedT.btnLTxt.active = true;
		this.RedT.btnRTxt.active = true;
	},
	onCloseClick: function onCloseClick() {
		this.node.active = false;
		this.RedT.input.string = this.RedT.RedT.board ? '' : '0';

		this.RedT.btnLTxt.active = true;
		this.RedT.btnRTxt.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVCb2FyZC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdVxcVGFpWGl1Qm9hcmQvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdVxcVGFpWGl1Qm9hcmRcXFRhaVhpdUJvYXJkLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0VHlwZSIsImRlZmF1bHQiLCJ0eXBlIiwiTGFiZWwiLCJub2RlQ2hvblRpZW4iLCJOb2RlIiwibm9kZUNob25TbyIsImluaXQiLCJvYmoiLCJSZWRUIiwiQ2hvblRpZW5DbGljayIsImV2ZW50IiwidmFsdWUiLCJpbnB1dCIsInN0cmluZyIsIm51bWJlcldpdGhDb21tYXMiLCJnZXRPbmx5TnVtYmVySW5TdHJpbmciLCJDaG9uU29DbGljayIsIm9uQmFja0NsaWNrIiwibnVtYmVyIiwic2xpY2UiLCJsZW5ndGgiLCJvbkNsZWFuQ2xpY2siLCJvbkFsbENsaWNrIiwidXNlciIsInJlZCIsIm9uQ2hhbmdlclR5cGVDbGljayIsImFjdGl2ZSIsIm9uQ3VvY0NsaWNrIiwiYnRuTFR4dCIsImJ0blJUeHQiLCJvbkNsb3NlQ2xpY2siLCJub2RlIiwiYm9hcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLFlBQVU7QUFDQUMsWUFBUyxJQURUO0FBRUFDLFNBQVNQLEdBQUdRO0FBRlosR0FEQztBQUtMQyxnQkFBYztBQUNWSCxZQUFTLElBREM7QUFFVkMsU0FBU1AsR0FBR1U7QUFGRixH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QTtBQTFETyxDQUFUIiwiZmlsZSI6IlRhaVhpdUJvYXJkLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVCb2FyZCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHR0ZXh0VHlwZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiAgICBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9kZUNob25UaWVuOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vZGVDaG9uU286IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblx0fSxcclxuXHRpbml0IChvYmopIHtcclxuXHRcdHRoaXMuUmVkVCA9IG9iajtcclxuXHR9LFxyXG5cdENob25UaWVuQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50LCB2YWx1ZSkge1xyXG5cdFx0dGhpcy5SZWRULmlucHV0LnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5SZWRULmlucHV0LnN0cmluZykqMSt2YWx1ZSoxKTtcclxuXHR9LFxyXG5cdENob25Tb0NsaWNrOiBmdW5jdGlvbihldmVudCwgdmFsdWUpIHtcclxuXHRcdHRoaXMuUmVkVC5pbnB1dC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuUmVkVC5pbnB1dC5zdHJpbmcrdmFsdWUpKTtcclxuXHR9LFxyXG5cdG9uQmFja0NsaWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIG51bWJlciA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5SZWRULmlucHV0LnN0cmluZyk7XHJcblx0XHR0aGlzLlJlZFQuaW5wdXQuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMobnVtYmVyLnNsaWNlKDAsIG51bWJlci5sZW5ndGgtMSkpO1xyXG5cdH0sXHJcblx0b25DbGVhbkNsaWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5SZWRULmlucHV0LnN0cmluZyA9IFwiXCI7XHJcblx0fSxcclxuXHRvbkFsbENsaWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5SZWRULmlucHV0LnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGNjLlJlZFQudXNlci5yZWQpO1xyXG5cdH0sXHJcblx0b25DaGFuZ2VyVHlwZUNsaWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYgKHRoaXMubm9kZUNob25UaWVuLmFjdGl2ZSkge1xyXG5cdFx0XHR0aGlzLm5vZGVDaG9uVGllbi5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5ub2RlQ2hvblNvLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMudGV4dFR5cGUuc3RyaW5nID0gXCJDSOG7jE5cIjtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm5vZGVDaG9uU28uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubm9kZUNob25UaWVuLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMudGV4dFR5cGUuc3RyaW5nID0gXCJT4buQIEtIw4FDXCI7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkN1b2NDbGljazogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuUmVkVC5vbkN1b2NDbGljaygpO1xyXG5cdFx0dGhpcy5SZWRULmJ0bkxUeHQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMuUmVkVC5idG5SVHh0LmFjdGl2ZSA9IHRydWU7XHJcblx0fSxcclxuXHRvbkNsb3NlQ2xpY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLlJlZFQuaW5wdXQuc3RyaW5nID0gdGhpcy5SZWRULlJlZFQuYm9hcmQgPyAnJyA6ICcwJztcclxuXHRcdFxyXG5cdFx0dGhpcy5SZWRULmJ0bkxUeHQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMuUmVkVC5idG5SVHh0LmFjdGl2ZSA9IHRydWU7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==