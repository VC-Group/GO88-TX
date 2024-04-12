
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '72234cg0ORLl7lPDSiermrl', 'TaiXiu');
// Script/Game/TaiXiu/TaiXiu.js

'use strict';

var TX_Main = require('TaiXiuMain');
var TX_ThongKe = require('TaiXiuThongKe');

cc.Class({
	extends: cc.Component,
	properties: {
		TX_Main: TX_Main,
		TX_ThongKe: TX_ThongKe,
		board: true
	},
	init: function init(obj) {
		this.RedT = obj;
		this.node.runScale = false;
		cc.RedT.setting.taixiu = cc.RedT.setting.taixiu || { scale: 1, getLogs: false };
		this.TX_LichSu = obj.Dialog.TaiXiuLichSu;
		this.TX_Top = obj.Dialog.TaiXiuTop;
		this.TX_LichSuPhien = obj.Dialog.TaiXiuLichSuPhien;
		this.TX_Main.init(this);
		this.TX_ThongKe.init(this);

		var check = localStorage.getItem('taixiu');
		if (check == "true") {
			this.node.active = true;
		}
	},

	onEnable: function onEnable() {
		this.regEvent(true);
	},
	onDisable: function onDisable() {
		this.regEvent(false);
	},
	regEvent: function regEvent(bool) {
		cc.RedT.send({ taixiu: !cc.RedT.setting.taixiu.getLogs ? { view: bool, getLogs: true } : { view: bool } });
	},
	setTop: function setTop() {
		cc.RedT.setting.taixiu.scale = 1;
		this.node.parent.insertChild(this.node);
		this.RedT.setTop(this.node);
	},
	openGame: function openGame(e) {
		var taixiu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';

		cc.RedT.audio.playClick();
		if (cc.RedT.IS_LOGIN) {
			this.node.active = !0;
			localStorage.setItem('taixiu', true);
			this.setTop();
		} else {
			cc.RedT.inGame.dialog.showSignIn();
		}
	},
	closeGame: function closeGame() {
		cc.RedT.audio.playUnClick();
		this.node.active = this.TX_ThongKe.node.active = this.TX_Main.TX_Board.node.active = !1;
		localStorage.setItem('taixiu', false);
	},
	newGame: function newGame() {
		this.TX_ThongKe.node.active = this.TX_Main.TX_Board.node.active = false;
		this.TX_Main.setDefautl();
	},
	signIn: function signIn() {
		!this.node.active && (this.TX_Main.nodeTimePopup.active = true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdS9hc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXUuanMiXSwibmFtZXMiOlsiVFhfTWFpbiIsInJlcXVpcmUiLCJUWF9UaG9uZ0tlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYm9hcmQiLCJpbml0Iiwib2JqIiwiUmVkVCIsIm5vZGUiLCJydW5TY2FsZSIsInNldHRpbmciLCJ0YWl4aXUiLCJzY2FsZSIsImdldExvZ3MiLCJUWF9MaWNoU3UiLCJEaWFsb2ciLCJUYWlYaXVMaWNoU3UiLCJUWF9Ub3AiLCJUYWlYaXVUb3AiLCJUWF9MaWNoU3VQaGllbiIsIlRhaVhpdUxpY2hTdVBoaWVuIiwiY2hlY2siLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYWN0aXZlIiwib25FbmFibGUiLCJyZWdFdmVudCIsIm9uRGlzYWJsZSIsImJvb2wiLCJzZW5kIiwidmlldyIsInNldFRvcCIsInBhcmVudCIsImluc2VydENoaWxkIiwib3BlbkdhbWUiLCJlIiwiYXVkaW8iLCJwbGF5Q2xpY2siLCJJU19MT0dJTiIsInNldEl0ZW0iLCJpbkdhbWUiLCJkaWFsb2ciLCJzaG93U2lnbkluIiwiY2xvc2VHYW1lIiwicGxheVVuQ2xpY2siLCJUWF9Cb2FyZCIsIm5ld0dhbWUiLCJzZXREZWZhdXRsIiwic2lnbkluIiwibm9kZVRpbWVQb3B1cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFhQyxRQUFRLFlBQVIsQ0FBakI7QUFDQSxJQUFJQyxhQUFhRCxRQUFRLGVBQVIsQ0FBakI7O0FBRUFFLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKO0FBRVJDLGFBQVk7QUFDWFAs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LElBQWhCLENBQXFCZ0IsTUFBckIsR0FBOEIsS0FBSzVCLE9BQUwsQ0FBYWlELFFBQWIsQ0FBc0JyQyxJQUF0QixDQUEyQmdCLE1BQTNCLEdBQW9DLEtBQWxFO0FBQ0EsT0FBSzVCLE9BQUwsQ0FBYW1ELFVBQWI7QUFDQSxFQXRETztBQXVEUkMsU0FBTyxrQkFBVTtBQUNWLEdBQUMsS0FBS3hDLElBQUwsQ0FBVWdCLE1BQVgsS0FBc0IsS0FBSzVCLE9BQUwsQ0FBYXFELGFBQWIsQ0FBMkJ6QixNQUEzQixHQUFvQyxJQUExRDtBQUNIO0FBekRJLENBQVQiLCJmaWxlIjoiVGFpWGl1LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIFRYX01haW4gICAgPSByZXF1aXJlKCdUYWlYaXVNYWluJyk7XHJcbnZhciBUWF9UaG9uZ0tlID0gcmVxdWlyZSgnVGFpWGl1VGhvbmdLZScpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRUWF9NYWluOiAgICBUWF9NYWluLFxyXG5cdFx0VFhfVGhvbmdLZTogVFhfVGhvbmdLZSxcclxuXHRcdGJvYXJkOiAgICAgIHRydWUsXHJcblx0fSxcclxuXHRpbml0KG9iail7XHJcblx0XHR0aGlzLlJlZFQgPSBvYmo7XHJcblx0XHR0aGlzLm5vZGUucnVuU2NhbGUgPSBmYWxzZTtcclxuXHRcdGNjLlJlZFQuc2V0dGluZy50YWl4aXUgPSBjYy5SZWRULnNldHRpbmcudGFpeGl1IHx8IHtzY2FsZToxLCBnZXRMb2dzOiBmYWxzZX07XHJcblx0XHR0aGlzLlRYX0xpY2hTdSAgICAgID0gb2JqLkRpYWxvZy5UYWlYaXVMaWNoU3U7XHJcblx0XHR0aGlzLlRYX1RvcCAgICAgICAgID0gb2JqLkRpYWxvZy5UYWlYaXVUb3A7XHJcblx0XHR0aGlzLlRYX0xpY2hTdVBoaWVuID0gb2JqLkRpYWxvZy5UYWlYaXVMaWNoU3VQaGllbjtcclxuXHRcdHRoaXMuVFhfTWFpbi5pbml0KHRoaXMpO1xyXG5cdFx0dGhpcy5UWF9UaG9uZ0tlLmluaXQodGhpcyk7XHJcblxyXG5cdFx0bGV0IGNoZWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhaXhpdScpO1xyXG5cdFx0aWYgKGNoZWNrID09IFwidHJ1ZVwiKSB7XHJcblx0XHRcdHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucmVnRXZlbnQodHJ1ZSk7XHJcblx0fSxcclxuXHRvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucmVnRXZlbnQoZmFsc2UpO1xyXG5cdH0sXHJcblx0cmVnRXZlbnQ6IGZ1bmN0aW9uKGJvb2wpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHt0YWl4aXU6ICFjYy5SZWRULnNldHRpbmcudGFpeGl1LmdldExvZ3MgPyB7dmlldzpib29sLCBnZXRMb2dzOnRydWV9IDoge3ZpZXc6IGJvb2x9fSk7XHJcblx0fSxcclxuXHRzZXRUb3A6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULnNldHRpbmcudGFpeGl1LnNjYWxlID0gMTtcclxuXHRcdHRoaXMubm9kZS5wYXJlbnQuaW5zZXJ0Q2hpbGQodGhpcy5ub2RlKTtcclxuXHRcdHRoaXMuUmVkVC5zZXRUb3AodGhpcy5ub2RlKTtcclxuXHR9LFxyXG5cdG9wZW5HYW1lOiBmdW5jdGlvbiAoZSwgdGFpeGl1ID0gJzEnKSB7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlDbGljaygpO1xyXG5cdFx0aWYgKGNjLlJlZFQuSVNfTE9HSU4pe1xyXG5cdFx0XHR0aGlzLm5vZGUuYWN0aXZlID0gITA7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YWl4aXUnLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5zZXRUb3AoKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5kaWFsb2cuc2hvd1NpZ25JbigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y2xvc2VHYW1lOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlVbkNsaWNrKCk7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5UWF9UaG9uZ0tlLm5vZGUuYWN0aXZlID0gdGhpcy5UWF9NYWluLlRYX0JvYXJkLm5vZGUuYWN0aXZlID0gITE7XHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFpeGl1JywgZmFsc2UpO1xyXG5cdH0sXHJcblx0bmV3R2FtZTogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuVFhfVGhvbmdLZS5ub2RlLmFjdGl2ZSA9IHRoaXMuVFhfTWFpbi5UWF9Cb2FyZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5UWF9NYWluLnNldERlZmF1dGwoKTtcclxuXHR9LFxyXG5cdHNpZ25JbjpmdW5jdGlvbigpe1xyXG4gICAgICAgICF0aGlzLm5vZGUuYWN0aXZlICYmICh0aGlzLlRYX01haW4ubm9kZVRpbWVQb3B1cC5hY3RpdmUgPSB0cnVlKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=