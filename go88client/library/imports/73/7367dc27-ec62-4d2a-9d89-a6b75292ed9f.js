"use strict";
cc._RF.push(module, '7367dwn7GJNKp2JprdSku2f', 'Fish_nap');
// Script/Game/BanCa/dialog/Fish_nap.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		touch: cc.Node,
		mask: cc.Node,
		toggle: cc.Toggle,
		labelBet: cc.Label,
		labelMin: cc.Label,
		labelMax: cc.Label,
		min: '',
		max: '',
		outGame: false
	},
	init: function init() {
		var room = cc.RedT.inGame.room[cc.RedT.inGame.regGame];
		this.betMin = room * this.min;
		this.betMax = room * this.max;
		this.h = this.betMin < 20000 ? 1000 : this.betMin < 200000 ? 10000 : 100000;

		this.labelMin.string = this.labelBet.string = Helper.numberWithCommas(this.betMin);
		this.labelMax.string = Helper.numberWithCommas(this.betMax);
		this.betMin = this.betMin / this.h;
		this.betMax = this.betMax / this.h;

		this.toggle.isChecked = true;
	},
	onEnable: function onEnable() {
		this.init();
		this.node.runAction(cc.RedT.inGame.dialog.actionShow);
		this.touch.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.touch.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.touch.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.touch.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
	},
	onDisable: function onDisable() {
		cc.RedT.inGame.dialog.resetSizeDialog(this.node);
		this.touch.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.touch.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.touch.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.touch.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);

		this.outGame = false;
		this.mask.width = 0;
		this.touch.position = cc.v2(0, 0);
	},
	eventStart: function eventStart(e) {
		this.touch.runAction(cc.scaleTo(0.1, 0.7));
		this.offsetX = { localX: e.touch.getLocationX(), x: this.touch.position.x };
	},
	eventMove: function eventMove(e) {
		var x = e.touch.getLocationX() - this.offsetX.localX + this.offsetX.x;
		if (x < 0) {
			x = 0;
		} else if (x > 401) {
			x = 401;
		}
		this.mask.width = x;
		this.touch.position = cc.v2(x, 0);
		var bet = x / 401 * (this.betMax - this.betMin) + this.betMin >> 0;
		this.labelBet.string = Helper.numberWithCommas(bet * this.h);
	},
	eventEnd: function eventEnd() {
		this.touch.runAction(cc.scaleTo(0.1, 0.6));
	},
	onOkClick: function onOkClick() {
		cc.RedT.inGame.loading.active = true;
		if (this.outGame === true) {
			cc.RedT.send({ g: { fish: { nap: Helper.getOnlyNumberInString(this.labelBet.string) } } });
		} else {
			cc.RedT.send({ g: { fish: { reg: { room: cc.RedT.inGame.regGame, balans: Helper.getOnlyNumberInString(this.labelBet.string) } } } });
		}
	},
	onCancelClick: function onCancelClick() {
		if (this.outGame === true) {
			cc.RedT.inGame.Game.onClickOutGame();
		}
		cc.RedT.inGame.dialog.onClickBack();
	}
});

cc._RF.pop();