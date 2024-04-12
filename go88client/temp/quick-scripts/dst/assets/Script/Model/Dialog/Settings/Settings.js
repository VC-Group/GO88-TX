
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Settings/Settings.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75587hPL3NPGadq3k5zgG80', 'Settings');
// Script/Model/Dialog/Settings/Settings.js

'use strict';

var CkeckOut = require('CheckOut');

cc.Class({
	extends: cc.Component,

	properties: {
		NhacNen: CkeckOut,
		NhacGame: CkeckOut
	},
	onLoad: function onLoad() {
		if (!cc.RedT.isSoundBackground()) {
			this.NhacNen.OnChangerClick();
		}
		if (!cc.RedT.isSoundGame()) {
			this.NhacGame.OnChangerClick();
		}
	},

	onEnable: function onEnable() {
		this.node.runAction(cc.RedT.inGame.dialog.actionShow);
	},
	onDisable: function onDisable() {
		cc.RedT.inGame.dialog.resetSizeDialog(this.node);
	},
	setMusic: function setMusic() {
		var check = localStorage.getItem('SOUND_GAME');
		if (check == null) {
			cc.RedT.setSoundGame(true);
		} else {
			if (cc.RedT.isSoundGame()) {
				cc.RedT.IS_SOUND = true;
			} else {
				cc.RedT.IS_SOUND = false;
			}
		}
	},
	OnChangerNhacNen: function OnChangerNhacNen() {
		cc.RedT.setSoundBackground(this.NhacNen.isChecked);
		if (this.NhacNen.isChecked) {
			cc.RedT.audio.bg.play();
			var t = setInterval(function () {
				console.log(cc.RedT.audio.bg.clip.loaded);
				if (cc.RedT.audio.bg.clip.loaded) {
					clearInterval(t);
					cc.RedT.audio.bg.play();
				}
			}.bind(this), 100);
		} else {
			cc.RedT.audio.bg.stop();
		}
	},
	OnChangerNhacGame: function OnChangerNhacGame() {
		cc.RedT.setSoundGame(this.NhacGame.isChecked);
		if (this.NhacGame.isChecked) {
			cc.RedT.IS_SOUND = true;
		} else {
			cc.RedT.IS_SOUND = false;
		}
	},
	OnSignOutClick: function OnSignOutClick() {
		cc.RedT.inGame.notice.show({ title: "", text: "Xác nhận hành động.\nHành động thực hiện đăng xuất khỏi tài khoản này?", button: { type: "sign_out", text: "" } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2V0dGluZ3MvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTZXR0aW5ncy9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2V0dGluZ3NcXFNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIkNrZWNrT3V0IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIk5oYWNOZW4iLCJOaGFjR2FtZSIsIm9uTG9hZCIsIlJlZFQiLCJpc1NvdW5kQmFja2dyb3VuZCIsIk9uQ2hhbmdlckNsaWNrIiwiaXNTb3VuZEdhbWUiLCJvbkVuYWJsZSIsIm5vZGUiLCJydW5BY3Rpb24iLCJpbkdhbWUiLCJkaWFsb2ciLCJhY3Rpb25TaG93Iiwib25EaXNhYmxlIiwicmVzZXRTaXplRGlhbG9nIiwic2V0TXVzaWMiLCJjaGVjayIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRTb3VuZEdhbWUiLCJJU19TT1VORCIsIk9uQ2hhbmdlck5oYWNOZW4iLCJzZXRTb3VuZEJhY2tncm91bmQiLCJpc0NoZWNrZWQiLCJhdWRpbyIsImJnIiwicGxheSIsInQiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJjbGlwIiwibG9hZGVkIiwiY2xlYXJJbnRlcnZhbCIsImJpbmQiLCJzdG9wIiwiT25DaGFuZ2VyTmhhY0dhbWUiLCJPblNpZ25PdXRDbGljayIsIm5vdGljZSIsInNob3ciLCJ0aXRsZSIsInRleHQiLCJidXR0b24iLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQVdDLFFBQVEsVUFBUixDQUFmOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtB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b3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNldHRpbmdzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBDa2Vja091dCA9IHJlcXVpcmUoJ0NoZWNrT3V0JylcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdE5oYWNOZW46ICBDa2Vja091dCxcclxuXHRcdE5oYWNHYW1lOiBDa2Vja091dCxcclxuXHR9LFxyXG5cdG9uTG9hZCgpe1xyXG5cdFx0aWYgKCFjYy5SZWRULmlzU291bmRCYWNrZ3JvdW5kKCkpIHtcclxuXHRcdFx0dGhpcy5OaGFjTmVuLk9uQ2hhbmdlckNsaWNrKCk7XHJcblx0XHR9XHJcblx0XHRpZiAoIWNjLlJlZFQuaXNTb3VuZEdhbWUoKSkge1xyXG5cdFx0XHR0aGlzLk5oYWNHYW1lLk9uQ2hhbmdlckNsaWNrKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MuUmVkVC5pbkdhbWUuZGlhbG9nLmFjdGlvblNob3cpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5yZXNldFNpemVEaWFsb2codGhpcy5ub2RlKTtcclxuICAgIH0sXHJcblx0c2V0TXVzaWM6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgY2hlY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU09VTkRfR0FNRScpO1xyXG5cdFx0aWYoY2hlY2sgPT0gbnVsbCl7XHJcblx0XHRcdGNjLlJlZFQuc2V0U291bmRHYW1lKHRydWUpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmIChjYy5SZWRULmlzU291bmRHYW1lKCkpIHtcclxuXHRcdFx0XHRjYy5SZWRULklTX1NPVU5EID0gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Y2MuUmVkVC5JU19TT1VORCA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRPbkNoYW5nZXJOaGFjTmVuOiBmdW5jdGlvbigpIHtcclxuXHRcdGNjLlJlZFQuc2V0U291bmRCYWNrZ3JvdW5kKHRoaXMuTmhhY05lbi5pc0NoZWNrZWQpO1xyXG5cdFx0aWYgKHRoaXMuTmhhY05lbi5pc0NoZWNrZWQpIHtcclxuXHRcdFx0Y2MuUmVkVC5hdWRpby5iZy5wbGF5KCk7XHJcblx0XHRcdGxldCB0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhjYy5SZWRULmF1ZGlvLmJnLmNsaXAubG9hZGVkKTtcclxuXHRcdFx0XHRpZihjYy5SZWRULmF1ZGlvLmJnLmNsaXAubG9hZGVkKXtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodCk7XHJcblx0XHRcdFx0XHRjYy5SZWRULmF1ZGlvLmJnLnBsYXkoKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0fS5iaW5kKHRoaXMpLDEwMCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2MuUmVkVC5hdWRpby5iZy5zdG9wKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRPbkNoYW5nZXJOaGFjR2FtZTogZnVuY3Rpb24oKSB7XHJcblx0XHRjYy5SZWRULnNldFNvdW5kR2FtZSh0aGlzLk5oYWNHYW1lLmlzQ2hlY2tlZCk7XHJcblx0XHRpZiAodGhpcy5OaGFjR2FtZS5pc0NoZWNrZWQpIHtcclxuXHRcdFx0Y2MuUmVkVC5JU19TT1VORCA9IHRydWU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2MuUmVkVC5JU19TT1VORCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0T25TaWduT3V0Q2xpY2s6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUubm90aWNlLnNob3coe3RpdGxlOiBcIlwiLCB0ZXh0OiBcIljDoWMgbmjhuq1uIGjDoG5oIMSR4buZbmcuXFxuSMOgbmggxJHhu5luZyB0aOG7sWMgaGnhu4duIMSRxINuZyB4deG6pXQga2jhu49pIHTDoGkga2hv4bqjbiBuw6B5P1wiLCBidXR0b246e3R5cGU6IFwic2lnbl9vdXRcIiwgdGV4dDogXCJcIn19KVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=