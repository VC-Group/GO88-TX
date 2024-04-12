"use strict";
cc._RF.push(module, 'e4b59QQx49GyaeME6czSwsj', 'TaiXiuChat');
// Script/Game/TaiXiu/TaiXiuChat/TaiXiuChat.js

'use strict';

var helper = require('Helper');
var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,
	properties: {
		content: {
			default: null,
			type: cc.ScrollView
		},
		item: {
			default: null,
			type: cc.Prefab
		},
		input: {
			default: null,
			type: cc.EditBox
		},
		layout: {
			default: null,
			type: cc.Layout
		},
		isLoad: false
	},
	init: function init(obj) {
		this.RedT = obj;
		if (void 0 !== cc.RedT.setting.taixiu.chat_active) {
			this.node.active = cc.RedT.setting.taixiu.chat_active;
		}
	},
	onLoad: function onLoad() {
		var self = this;
		this.keyHandle = function (t) {
			return t.keyCode === cc.macro.KEY.tab ? (t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onChatClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
		};
	},

	onEnable: function onEnable() {
		cc.sys.isBrowser && this.addEvent();
		if (!this.isLoad) {
			this.getData();
		} else {
			this.content.scrollToBottom(0);
		}
	},
	onDisable: function onDisable() {
		cc.sys.isBrowser && this.removeEvent();
		this.clean();
	},
	addEvent: function addEvent() {
		BrowserUtil.getHTMLElementByEditBox(this.input).addEventListener("keydown", this.keyHandle, !1);
	},
	removeEvent: function removeEvent() {
		BrowserUtil.getHTMLElementByEditBox(this.input).removeEventListener("keydown", this.keyHandle, !1);
	},
	getData: function getData() {
		this.isLoad = true;
		cc.RedT.send({ taixiu: { getLogChat: true } });
	},
	message: function message(data) {
		var tobot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		var item = cc.instantiate(this.item);

		var itemComponent = item.getComponent(cc.Label);
		if (data.top > 0 && data.top < 4) itemComponent.string = data.user + ' (TOP ' + data.top + ') ' + ': ' + data.value;else itemComponent.string = data.user + ': ' + data.value;
		var name = item.children[0].getComponent(cc.Label);
		if (data.top > 0 && data.top < 4) {
			name.string = data.user + ' (TOP ' + data.top + ') ';
			if (data.top == 1) {
				name.node.color = new cc.Color(255, 0, 0);
			} else if (data.top == 2) {
				name.node.color = new cc.Color(0, 255, 42);
			} else if (data.top == 3) {
				name.node.color = new cc.Color(0, 156, 255);
			}
		} else {
			name.string = data.user;
		}

		this.content.content.addChild(item);
		if (tobot && this.layout.node.height > 300 && this.layout.node.height - this.layout.node.position.y - 134 < 70) {
			setTimeout(function () {
				this.content.scrollToBottom(0);
			}.bind(this), 100);
		}
	},
	logs: function logs(_logs) {
		var _this = this;

		if (_logs.length) {
			var self = this;
			Promise.all(_logs.map(function (message) {
				return self.message(message);
			})).then(function (result) {
				setTimeout(function () {
					this.content.scrollToBottom(0);
				}.bind(_this), 100);
			});
		}
	},
	onData: function onData(data) {
		if (void 0 !== data.message) {
			this.message(data.message, true);
		}
		if (void 0 !== data.logs) {
			this.logs(data.logs);
		}
	},
	onChatClick: function onChatClick() {
		if (helper.isEmpty(this.input.string)) {
			this.RedT.onData({ err: "Nhập nội dung để chat..." });
		} else {
			cc.RedT.send({ taixiu: { chat: this.input.string } });
			this.onData({ message: { user: cc.RedT.user.name, value: this.input.string } });
			this.clean();
		}
	},
	toggle: function toggle() {
		this.RedT.setTop();
		cc.RedT.audio.playClick();
		this.node.active = cc.RedT.setting.taixiu.chat_active = !this.node.active;
	},
	clean: function clean() {
		this.input.string = "";
	},
	reset: function reset() {
		this.content.content.destroyAllChildren();
		this.node.active = false;
	}
});

cc._RF.pop();