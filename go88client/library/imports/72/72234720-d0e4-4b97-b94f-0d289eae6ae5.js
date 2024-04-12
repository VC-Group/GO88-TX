"use strict";
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