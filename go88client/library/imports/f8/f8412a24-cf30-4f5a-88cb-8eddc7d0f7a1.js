"use strict";
cc._RF.push(module, 'f8412okzzBPWojLjt3H0Peh', 'PokerNapGame');
// Script/Game/Poker/PokerNapGame.js

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
		max: ''
	},
	init: function init(bet) {
		this.betMin = bet * this.min;
		this.betMax = bet * this.max;
		this.h = this.betMin < 1000000 ? 1000 : 1000000;

		this.labelMin.string = this.labelBet.string = Helper.numberWithCommas(this.betMin);
		this.labelMax.string = Helper.numberWithCommas(this.betMax);
		this.betMin = this.betMin / this.h;
		this.betMax = this.betMax / this.h;

		this.toggle.isChecked = true;
	},
	onEnable: function onEnable() {
		this.touch.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.touch.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.touch.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.touch.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
	},
	onDisable: function onDisable() {
		this.touch.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.touch.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.touch.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.touch.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);

		//this.mask.width     = 0;
		//this.touch.position = cc.v2(0, 0);
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
		cc.RedT.send({ g: { poker: { nap: {
						balans: Helper.getOnlyNumberInString(this.labelBet.string),
						auto: this.toggle.isChecked
					} } } });
	},
	onCancelClick: function onCancelClick() {
		this.node.active = false;
	}
});

cc._RF.pop();