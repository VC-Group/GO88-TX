
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/SignIn/SignIn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1c678NmitZCp6ybtgqTKrnQ', 'SignIn');
// Script/Model/Dialog/SignIn/SignIn.js

"use strict";

var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,

	properties: {
		username: cc.EditBox,
		password: cc.EditBox,
		captcha: cc.EditBox,
		capchaSprite: cc.Sprite,
		remember_me: cc.Toggle
	},
	onLoad: function onLoad() {
		var self = this;
		this.yName = this.username.node.y;
		this.yPass = this.password.node.y;
		this.editboxs = [this.username, this.password];
		this.editboxs_i = 0;
		this.keyHandle = function (t) {
			return t.keyCode === cc.macro.KEY.tab ? (self.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onLoginClick(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.escape ? (cc.RedT.inGame.dialog.onClickBack(), t.preventDefault && t.preventDefault(), !1) : void 0;
		};
	},

	onEnable: function onEnable() {
		cc.sys.isBrowser && this.addEvent();
		var remember_me = localStorage.getItem("remember_me");
		if (remember_me && remember_me == "true") {
			this.remember_me.isChecked = true;
		}
		this.node.runAction(cc.RedT.inGame.dialog.actionShow);
	},
	onDisable: function onDisable() {
		cc.sys.isBrowser && this.removeEvent();
		this.clean();
		cc.RedT.inGame.dialog.resetSizeDialog(this.node);
	},
	addEvent: function addEvent() {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
		for (var t in this.editboxs) {
			BrowserUtil.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1);
		}
	},
	removeEvent: function removeEvent() {
		for (var t in this.editboxs) {
			BrowserUtil.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
		}
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},
	onKeyDown: function onKeyDown(event) {
		switch (event.keyCode) {
			case cc.macro.KEY.escape:
				this.isTop() && cc.RedT.inGame.dialog.onClickBack();
				break;
			case cc.macro.KEY.tab:
				this.isTop() && this.changeNextFocusEditBox();
				break;
			case cc.macro.KEY.enter:
				this.isTop() && this.onLoginClick();
		}
	},
	changeNextFocusEditBox: function changeNextFocusEditBox() {
		for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++) {
			if (BrowserUtil.checkEditBoxFocus(this.editboxs[e])) {
				BrowserUtil.focusEditBox(this.editboxs[e]);
				t = !0;
				break;
			}
		}
		!t && 0 < this.editboxs.length && BrowserUtil.focusEditBox(this.editboxs[0]);
	},
	isTop: function isTop() {
		return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active;
	},
	clean: function clean() {
		this.username.node.y = this.yName;
		this.password.node.y = this.yPass;
		this.username.string = this.password.string = '';
		this.captcha.node.active = false;
	},
	onLoginClick: function onLoginClick() {
		if (this.username.string.length > 32 || this.username.string.length < 3 || this.username.string.match(new RegExp("^[a-zA-Z0-9]+$")) === null) {
			cc.RedT.inGame.notice.show({ title: "", text: 'Tên tài khoản không đúng!!' });
		} else if (this.password.string.length > 32 || this.password.string.length < 6) {
			cc.RedT.inGame.notice.show({ title: "", text: 'Mật khẩu không đúng!!' });
		} else {
			if (this.captcha.node.active === true) {
				if (this.captcha.string.length > 6 || this.captcha.string.length < 4) {
					cc.RedT.inGame.notice.show({ title: "", text: 'Captcha không đúng!!' });
				} else {
					cc.RedT.inGame.auth({ authentication: { username: this.username.string, password: this.password.string, captcha: this.captcha.string } });
				}
			} else {
				cc.RedT.inGame.auth({ authentication: { username: this.username.string, password: this.password.string } });
			}
		}
	},
	initCaptcha: function initCaptcha(t) {
		this.username.node.y = this.yName + 45;
		this.password.node.y = this.yPass + 52;
		this.captcha.node.active = true;
		var o = new Image();
		o.src = t;
		o.width = 150;
		o.height = 50;
		setTimeout(function () {
			var t = new cc.Texture2D();
			t.initWithElement(o);
			t.handleLoadedTexture();
			var e = new cc.SpriteFrame(t);
			this.capchaSprite.spriteFrame = e;
		}.bind(this), 10);
	},
	reCaptcha: function reCaptcha() {
		cc.RedT.send({ captcha: 'signIn' });
	},
	RememberMeSet: function RememberMeSet() {

		if (this.remember_me.isChecked) {
			localStorage.setItem('remember_me', true);
		} else {
			localStorage.setItem('remember_me', false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2lnbkluLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2lnbkluL2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaWduSW5cXFNpZ25Jbi5qcyJdLCJuYW1lcyI6WyJCcm93c2VyVXRpbCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ1c2VybmFtZSIsIkVkaXRCb3giLCJwYXNzd29yZCIsImNhcHRjaGEiLCJjYXBjaGFTcHJpdGUiLCJTcHJpdGUiLCJyZW1lbWJlcl9tZSIsIlRvZ2dsZSIsIm9uTG9hZCIsInNlbGYiLCJ5TmFtZSIsIm5vZGUiLCJ5IiwieVBhc3MiLCJlZGl0Ym94cyIsImVkaXRib3hzX2kiLCJrZXlIYW5kbGUiLCJ0Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwidGFiIiwiY2hhbmdlTmV4dEZvY3VzRWRpdEJveCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXIiLCJmb2N1c0dhbWUiLCJvbkxvZ2luQ2xpY2siLCJlc2NhcGUiLCJSZWRUIiwiaW5HYW1lIiwiZGlhbG9nIiwib25DbGlja0JhY2siLCJvbkVuYWJsZSIsInN5cyIsImlzQnJvd3NlciIsImFkZEV2ZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlzQ2hlY2tlZCIsInJ1bkFjdGlvbiIsImFjdGlvblNob3ciLCJvbkRpc2FibGUiLCJyZW1vdmVFdmVudCIsImNsZWFuIiwicmVzZXRTaXplRGlhbG9nIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJnZXRIVE1MRWxlbWVudEJ5RWRpdEJveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2ZmIiwiZXZlbnQiLCJpc1RvcCIsImUiLCJpIiwibGVuZ3RoIiwiY2hlY2tFZGl0Qm94Rm9jdXMiLCJmb2N1c0VkaXRCb3giLCJub3RpY2UiLCJhY3RpdmUiLCJsb2FkaW5nIiwic3RyaW5nIiwibWF0Y2giLCJSZWdFeHAiLCJzaG93IiwidGl0bGUiLCJ0ZXh0IiwiYXV0aCIsImF1dGhlbnRpY2F0aW9uIiwiaW5pdENhcHRjaGEiLCJvIiwiSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInNldFRpbWVvdXQiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSIsImJpbmQiLCJyZUNhcHRjaGEiLCJzZW5kIiwiUmVtZW1iZXJNZVNldCIsInNldEl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsY0FBY0MsUUFBUSxhQUFSLENBQWxCOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxZQUFVTCxHQUFHTSxPQURGO0FBRVhDLFlBQVVQLEdBQUdNLE9BRkY7QUFHWEUsV0FBVVIsR0FBR00sT0FIRjtBQUlYRyxnQkFBY1QsR0FBR1UsTUFKTjtBQUtYQyxlQUFZWCxHQUFHWTtBQUxKLEVBSEo7QUFVUkMsT0FWUSxvQkFVRTtBQUNULE1BQUlDLE9BQU8sSUFBWDtBQUNBLE9BQUtDLEtBQUwsR0FBYSxLQUFLVixRQUFMLENBQWNXLElBQWQsQ0FBbUJDLENBQWhDO0FBQ0EsT0FBS0MsS0FBTCxHQUFhLEtBQUtYLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQkMsQ0FBaEM7QUFDQSxPQUFLRSxRQUFMLEdBQWdCLENBQUMsS0FBS2QsUUFBTixFQUFnQixLQUFLRSxRQUFyQixDQUFoQjtBQUNBLE9BQUthLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLFVBQVNDLENBQVQsRUFBWTtBQUM1QixV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RSxlQUFGLENBQWtCUCxDQUFsQjtBQUNBekQsS0FBRWlFLG1CQUFGO0FBQ0EsT0FBSXpCLElBQUksSUFBSTlELEdBQUd3RixXQUFQLENBQW1CbEUsQ0FBbkIsQ0FBUjtBQUNBLFFBQUtiLFlBQUwsQ0FBa0JnRixXQUFsQixHQUFnQzNCLENBQWhDO0FBQ0EsR0FOVSxDQU1UNEIsSUFOUyxDQU1KLElBTkksQ0FBWCxFQU1jLEVBTmQ7QUFPQSxFQWxITztBQW1IUkMsWUFBVyxxQkFBVTtBQUNwQjNGLEtBQUdpQyxJQUFILENBQVEyRCxJQUFSLENBQWEsRUFBQ3BGLFNBQVMsUUFBVixFQUFiO0FBQ0EsRUFySE87QUFzSFJxRixnQkFBZSx5QkFBVTs7QUFFeEIsTUFBRyxLQUFLbEYsV0FBTCxDQUFpQmdDLFNBQXBCLEVBQThCO0FBQzdCRixnQkFBYXFELE9BQWIsQ0FBcUIsYUFBckIsRUFBbUMsSUFBbkM7QUFDQSxHQUZELE1BRUs7QUFDSnJELGdCQUFhcUQsT0FBYixDQUFxQixhQUFyQixFQUFtQyxLQUFuQztBQUNBO0FBQ0Q7QUE3SE8sQ0FBVCIsImZpbGUiOiJTaWduSW4uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaWduSW4iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEJyb3dzZXJVdGlsID0gcmVxdWlyZSgnQnJvd3NlclV0aWwnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHVzZXJuYW1lOiBjYy5FZGl0Qm94LFxyXG5cdFx0cGFzc3dvcmQ6IGNjLkVkaXRCb3gsXHJcblx0XHRjYXB0Y2hhOiAgY2MuRWRpdEJveCxcclxuXHRcdGNhcGNoYVNwcml0ZTogY2MuU3ByaXRlLFxyXG5cdFx0cmVtZW1iZXJfbWU6Y2MuVG9nZ2xlXHJcblx0fSxcclxuXHRvbkxvYWQgKCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy55TmFtZSA9IHRoaXMudXNlcm5hbWUubm9kZS55O1xyXG5cdFx0dGhpcy55UGFzcyA9IHRoaXMucGFzc3dvcmQubm9kZS55O1xyXG5cdFx0dGhpcy5lZGl0Ym94cyA9IFt0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkXTtcclxuXHRcdHRoaXMuZWRpdGJveHNfaSA9IDA7XHJcblx0XHR0aGlzLmtleUhhbmRsZSA9IGZ1bmN0aW9uKHQpIHtcclxuXHRcdFx0cmV0dXJuIHQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnRhYiA/IChzZWxmLmNoYW5nZU5leHRGb2N1c0VkaXRCb3goKSxcclxuXHRcdFx0XHR0LnByZXZlbnREZWZhdWx0ICYmIHQucHJldmVudERlZmF1bHQoKSxcclxuXHRcdFx0XHQhMSkgOiB0LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lbnRlciA/IChCcm93c2VyVXRpbC5mb2N1c0dhbWUoKSwgc2VsZi5vbkxvZ2luQ2xpY2soKSxcclxuXHRcdFx0XHR0LnByZXZlbnREZWZhdWx0ICYmIHQucHJldmVudERlZmF1bHQoKSxcclxuXHRcdFx0XHQhMSkgOiB0LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lc2NhcGUgPyAoY2MuUmVkVC5pbkdhbWUuZGlhbG9nLm9uQ2xpY2tCYWNrKCksXHJcblx0XHRcdFx0dC5wcmV2ZW50RGVmYXVsdCAmJiB0LnByZXZlbnREZWZhdWx0KCksXHJcblx0XHRcdFx0ITEpIDogdm9pZCAwXHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLmFkZEV2ZW50KCk7XHJcblx0XHR2YXIgcmVtZW1iZXJfbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlbWVtYmVyX21lXCIpO1xyXG5cdFx0aWYocmVtZW1iZXJfbWUgJiYgcmVtZW1iZXJfbWUgPT0gXCJ0cnVlXCIpe1xyXG5cdFx0XHR0aGlzLnJlbWVtYmVyX21lLmlzQ2hlY2tlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5hY3Rpb25TaG93KTtcclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLnJlbW92ZUV2ZW50KCk7XHJcblx0XHR0aGlzLmNsZWFuKCk7XHJcblx0XHRjYy5SZWRULmluR2FtZS5kaWFsb2cucmVzZXRTaXplRGlhbG9nKHRoaXMubm9kZSk7XHJcblx0fSxcclxuXHRhZGRFdmVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuXHRcdGZvciAodmFyIHQgaW4gdGhpcy5lZGl0Ym94cykge1xyXG5cdFx0XHRCcm93c2VyVXRpbC5nZXRIVE1MRWxlbWVudEJ5RWRpdEJveCh0aGlzLmVkaXRib3hzW3RdKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZSwgITEpXHJcblx0XHR9XHJcblx0fSxcclxuXHRyZW1vdmVFdmVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IgKHZhciB0IGluIHRoaXMuZWRpdGJveHMpIHtcclxuXHRcdFx0QnJvd3NlclV0aWwuZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3godGhpcy5lZGl0Ym94c1t0XSkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlIYW5kbGUsICExKVxyXG5cdFx0fVxyXG5cdFx0Y2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG5cdH0sXHJcblx0b25LZXlEb3duOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcblx0XHRcdGNhc2UgY2MubWFjcm8uS0VZLmVzY2FwZTpcclxuXHRcdFx0XHR0aGlzLmlzVG9wKCkgJiYgY2MuUmVkVC5pbkdhbWUuZGlhbG9nLm9uQ2xpY2tCYWNrKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgY2MubWFjcm8uS0VZLnRhYjpcclxuXHRcdFx0XHR0aGlzLmlzVG9wKCkgJiYgdGhpcy5jaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94KCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgY2MubWFjcm8uS0VZLmVudGVyOlxyXG5cdFx0XHRcdHRoaXMuaXNUb3AoKSAmJiB0aGlzLm9uTG9naW5DbGljaygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Y2hhbmdlTmV4dEZvY3VzRWRpdEJveDogZnVuY3Rpb24oKSB7XHJcblx0XHRmb3IgKHZhciB0ID0gITEsIGUgPSAwLCBpID0gdGhpcy5lZGl0Ym94cy5sZW5ndGg7IGUgPCBpOyBlKyspe1xyXG5cdFx0XHRpZiAoQnJvd3NlclV0aWwuY2hlY2tFZGl0Qm94Rm9jdXModGhpcy5lZGl0Ym94c1tlXSkpIHtcclxuXHRcdFx0XHRCcm93c2VyVXRpbC5mb2N1c0VkaXRCb3godGhpcy5lZGl0Ym94c1tlXSk7XHJcblx0XHRcdFx0dCA9ICEwO1xyXG5cdFx0XHRcdGJyZWFrXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdCF0ICYmIDAgPCB0aGlzLmVkaXRib3hzLmxlbmd0aCAmJiBCcm93c2VyVXRpbC5mb2N1c0VkaXRCb3godGhpcy5lZGl0Ym94c1swXSk7XHJcblx0fSxcclxuXHRpc1RvcDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gIWNjLlJlZFQuaW5HYW1lLm5vdGljZS5ub2RlLmFjdGl2ZSAmJiAhY2MuUmVkVC5pbkdhbWUubG9hZGluZy5hY3RpdmU7XHJcblx0fSxcclxuXHRjbGVhbjogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMudXNlcm5hbWUubm9kZS55ID0gdGhpcy55TmFtZTtcclxuXHRcdHRoaXMucGFzc3dvcmQubm9kZS55ID0gdGhpcy55UGFzcztcclxuXHRcdHRoaXMudXNlcm5hbWUuc3RyaW5nID0gdGhpcy5wYXNzd29yZC5zdHJpbmcgPSAnJztcclxuXHRcdHRoaXMuY2FwdGNoYS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdH0sXHJcblx0b25Mb2dpbkNsaWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLnVzZXJuYW1lLnN0cmluZy5sZW5ndGggPiAzMiB8fCB0aGlzLnVzZXJuYW1lLnN0cmluZy5sZW5ndGggPCAzIHx8IHRoaXMudXNlcm5hbWUuc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoXCJeW2EtekEtWjAtOV0rJFwiKSkgPT09IG51bGwpe1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5ub3RpY2Uuc2hvdyh7dGl0bGU6XCJcIiwgdGV4dDonVMOqbiB0w6BpIGtob+G6o24ga2jDtG5nIMSRw7puZyEhJ30pO1xyXG5cdFx0fSBlbHNlIGlmICh0aGlzLnBhc3N3b3JkLnN0cmluZy5sZW5ndGggPiAzMiB8fCB0aGlzLnBhc3N3b3JkLnN0cmluZy5sZW5ndGggPCA2KXtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUubm90aWNlLnNob3coe3RpdGxlOlwiXCIsIHRleHQ6J03huq10IGto4bqpdSBraMO0bmcgxJHDum5nISEnfSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0aWYgKHRoaXMuY2FwdGNoYS5ub2RlLmFjdGl2ZSA9PT0gdHJ1ZSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmNhcHRjaGEuc3RyaW5nLmxlbmd0aCA+IDYgfHwgdGhpcy5jYXB0Y2hhLnN0cmluZy5sZW5ndGggPCA0KXtcclxuXHRcdFx0XHRcdGNjLlJlZFQuaW5HYW1lLm5vdGljZS5zaG93KHt0aXRsZTpcIlwiLCB0ZXh0OidDYXB0Y2hhIGtow7RuZyDEkcO6bmchISd9KTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGNjLlJlZFQuaW5HYW1lLmF1dGgoe2F1dGhlbnRpY2F0aW9uOnt1c2VybmFtZTp0aGlzLnVzZXJuYW1lLnN0cmluZywgcGFzc3dvcmQ6dGhpcy5wYXNzd29yZC5zdHJpbmcsIGNhcHRjaGE6dGhpcy5jYXB0Y2hhLnN0cmluZ319KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGNjLlJlZFQuaW5HYW1lLmF1dGgoe2F1dGhlbnRpY2F0aW9uOnt1c2VybmFtZTp0aGlzLnVzZXJuYW1lLnN0cmluZywgcGFzc3dvcmQ6dGhpcy5wYXNzd29yZC5zdHJpbmd9fSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGluaXRDYXB0Y2hhOiBmdW5jdGlvbih0KSB7XHJcblx0XHR0aGlzLnVzZXJuYW1lLm5vZGUueSA9IHRoaXMueU5hbWUrNDU7XHJcblx0XHR0aGlzLnBhc3N3b3JkLm5vZGUueSA9IHRoaXMueVBhc3MrNTI7XHJcblx0XHR0aGlzLmNhcHRjaGEubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0bGV0IG8gPSBuZXcgSW1hZ2U7XHJcblx0XHRvLnNyYyA9IHQ7XHJcblx0XHRvLndpZHRoID0gMTUwO1xyXG5cdFx0by5oZWlnaHQgPSA1MDtcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdGxldCB0ID0gbmV3IGNjLlRleHR1cmUyRDtcclxuXHRcdFx0dC5pbml0V2l0aEVsZW1lbnQobyk7XHJcblx0XHRcdHQuaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG5cdFx0XHRsZXQgZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0KTtcclxuXHRcdFx0dGhpcy5jYXBjaGFTcHJpdGUuc3ByaXRlRnJhbWUgPSBlO1xyXG5cdFx0fS5iaW5kKHRoaXMpLCAxMClcclxuXHR9LFxyXG5cdHJlQ2FwdGNoYTogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7Y2FwdGNoYTogJ3NpZ25Jbid9KTtcclxuXHR9LFxyXG5cdFJlbWVtYmVyTWVTZXQ6IGZ1bmN0aW9uKCl7XHJcblx0XHQgXHJcblx0XHRpZih0aGlzLnJlbWVtYmVyX21lLmlzQ2hlY2tlZCl7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZW1lbWJlcl9tZScsdHJ1ZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbWVtYmVyX21lJyxmYWxzZSk7XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuIl19