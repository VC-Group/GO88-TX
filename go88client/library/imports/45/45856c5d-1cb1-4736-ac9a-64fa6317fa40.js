"use strict";
cc._RF.push(module, '45856xdHLFHNqyaZPpjF/pA', 'ChuyenRed');
// Script/Model/Dialog/Shop/ChuyenRed/ChuyenRed.js

'use strict';

var BrowserUtil = require('BrowserUtil');
var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		nickname: cc.EditBox,
		red: cc.EditBox,
		messenger: cc.EditBox,
		otp: cc.EditBox,
		redPhi: cc.Label,
		rednhan: cc.Label,
		shop: cc.Node,
		isdaily: false,
		meDaily: false
	},
	init: function init(obj) {
		this.RedT = obj;
		var self = this;

		this.editboxs = [this.nickname, this.red, this.messenger, this.otp];
		this.keyHandle = function (t) {
			return t.keyCode === cc.macro.KEY.tab ? (self.isTop() && self.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onChuyenClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
		};
	},

	onEnable: function onEnable() {
		this.reCheckMeDL();
		cc.sys.isBrowser && this.addEvent();
		this.RedT.DaiLy.loadDaiLy();
	},
	onDisable: function onDisable() {
		cc.sys.isBrowser && this.removeEvent();
		this.clean();
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
			case cc.macro.KEY.tab:
				this.isTop() && this.changeNextFocusEditBox();
				break;
			case cc.macro.KEY.enter:
				this.isTop() && this.onChuyenClick();
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
		this.nickname.string = this.red.string = this.messenger.string = this.rednhan.string = this.redPhi.string = "";
	},
	onChuyenClick: function onChuyenClick() {
		var error = null;
		if (helper.isEmpty(this.nickname.string) || helper.isEmpty(this.red.string)) {
			error = "Kiểm tra lại các thông tin...";
		} else if (helper.isEmpty(this.nickname.string)) {
			error = "Tên nhân vật không được bỏ trống";
		} else if (helper.getOnlyNumberInString(this.red.string) < 10000) {
			error = "Số tiền chuyển tối thiểu là 10.000.";
		} else if (helper.isEmpty(this.otp.string)) {
			error = "Vui lòng nhập mã OTP.";
		}
		if (error) cc.RedT.inGame.notice.show({ title: "", text: error });else {
			var data = { name: this.nickname.string, red: helper.getOnlyNumberInString(this.rednhan.string), otp: this.otp.string };
			if (!helper.isEmpty(this.messenger.string.trim())) {
				data = Object.assign(data, { message: this.messenger.string });
			}
			cc.RedT.send({ shop: { chuyen_red: data } });
		}
	},
	reCheckMeDL: function reCheckMeDL() {
		this.meDaily = false;
		if (this.RedT.DaiLy.daily_list.length) {
			var regex = new RegExp("^" + cc.RedT.user.name + "$", 'i');
			this.RedT.DaiLy.daily_list.forEach(function (daily) {
				!this.meDaily && (this.meDaily = regex.test(daily.NICKNAME.string));
			}.bind(this));
		}
	},
	selectDaiLy: function selectDaiLy(daily) {
		this.isdaily = true;
		this.nickname.string = daily.NICKNAME.string;
		this.onChangerRed(0, true);
		this.RedT.onSelectHead(null, 'ChuyenRed');
		this.dailyStatus();
	},
	onChangerNick: function onChangerNick(value) {
		this.isdaily = false;
		if (this.RedT.DaiLy.daily_list.length > 0) {
			this.RedT.DaiLy.daily_list.forEach(function (obj) {
				var regex = new RegExp("^" + value + "$", 'i');
				if (regex.test(obj.NICKNAME.string)) {
					this.isdaily = true;
				}
			}.bind(this));
		}
		this.onChangerRed(0, true);
		this.dailyStatus();
	},
	onChangerRed: function onChangerRed() {
		var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var superT = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		value = !!superT ? this.red.string : value;
		value = helper.numberWithCommas(helper.getOnlyNumberInString(value));
		this.red.string = value == 0 ? "" : value;
		if (this.isdaily || this.meDaily) {
			this.rednhan.string = value;
			this.redPhi.string = 0;
		} else {
			var valueT = helper.getOnlyNumberInString(value);
			var nhan = Math.floor(valueT);
			var phi = Math.ceil(valueT * 2 / 100);
			this.redPhi.string = helper.numberWithCommas(phi);
			this.rednhan.string = helper.numberWithCommas(nhan + phi);
		}
	},
	dailyStatus: function dailyStatus() {
		if (this.isdaily) {
			this.shop.active = true;
		} else {
			this.shop.active = false;
		}
	},
	onClickOTP: function onClickOTP() {
		cc.RedT.send({ otp: true });
	}
});

cc._RF.pop();