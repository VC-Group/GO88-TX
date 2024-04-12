"use strict";
cc._RF.push(module, '428fapqUBNMxZBikn0+ylYv', 'SignName');
// Script/Model/Dialog/SignName/SignName.js

"use strict";

var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,

	properties: {
		username: {
			default: null,
			type: cc.EditBox
		}
	},
	onLoad: function onLoad() {
		var self = this;
		this.keyHandle = function (t) {
			return t.keyCode === cc.macro.KEY.tab ? (self.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onSignNameClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
		};
	},

	onEnable: function onEnable() {
		cc.sys.isBrowser && this.addEvent();
	},
	onDisable: function onDisable() {
		cc.sys.isBrowser && this.removeEvent();
		this.clean();
	},
	addEvent: function addEvent() {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
		BrowserUtil.getHTMLElementByEditBox(this.username).addEventListener("keydown", this.keyHandle, !1);
	},
	removeEvent: function removeEvent() {
		BrowserUtil.getHTMLElementByEditBox(this.username).removeEventListener("keydown", this.keyHandle, !1);
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},
	onKeyDown: function onKeyDown(event) {
		switch (event.keyCode) {
			case cc.macro.KEY.tab:
				this.isTop() && this.changeNextFocusEditBox();
				break;
			case cc.macro.KEY.enter:
				this.isTop() && this.onSignNameClick();
		}
	},
	changeNextFocusEditBox: function changeNextFocusEditBox() {
		BrowserUtil.focusEditBox(this.username);
	},
	isTop: function isTop() {
		return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active;
	},
	clean: function clean() {
		this.username.string = '';
	},
	onSignNameClick: function onSignNameClick() {
		if (this.username.string.length > 14 || this.username.string.length < 3 || this.username.string.match(new RegExp("^[a-zA-Z0-9]+$")) === null) {
			cc.RedT.inGame.notice.show({ title: "", text: 'Tên Nhân vật từ 3 đến 14 ký tự và không chứa ký tự đặc biệt!!' });
		} else {
			cc.RedT.send({ signName: this.username.string });
		}
	}
});

cc._RF.pop();