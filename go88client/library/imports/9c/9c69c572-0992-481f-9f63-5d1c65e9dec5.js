"use strict";
cc._RF.push(module, '9c69cVyCZJIH59jXRxl6d7F', 'CoTrang_playBonus');
// Script/Game/CoTrang/playBonus/CoTrang_playBonus.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		numberBonus: cc.Label,
		listBox: cc.Node,
		notice: cc.Node,
		numberWin: cc.Label,
		icons: {
			default: [],
			type: cc.SpriteFrame
		}
	},
	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		Promise.all(this.listBox.children.map(function (box) {
			return box.getComponent('CoTrang_bonus_item');
		})).then(function (result) {
			_this.listBox = result;
		});
	},
	onPlay: function onPlay(box) {
		this.reset();
		this.node.active = true;
		this.numberBonus.string = box;
	},
	onClickBox: function onClickBox(e) {
		if (!!this.numberBonus.string) {
			this.RedT.playClick();
			this.onSend(e.target.name);
		}
	},
	closeNotice: function closeNotice() {
		this.notice.active = this.node.active = false;
		this.RedT.hieuUng();
	},
	onData: function onData(data) {
		if (void 0 !== data.box) {
			var obj = this.listBox[data.box];
			obj.open.active = true;
			obj.close.active = false;
			obj.text.string = helper.numberWithCommas(data.bet);
			this.numberBonus.string = data.bonus;
		}
		if (void 0 !== data.win) {
			this.notice.active = true;
			this.numberWin.string = helper.numberWithCommas(data.win);
			this.RedT.vuathang.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.RedT.vuathang.string) * 1 + data.win);
		}
	},
	onSend: function onSend(box) {
		cc.RedT.send({ g: { longlan: { bonus: { box: box } } } });
	},
	reset: function reset() {
		var self = this;
		Promise.all(this.listBox.map(function (box) {
			box.open.active = false;
			box.close.active = true;
			box.text.string = "";
		}));
	}
});

cc._RF.pop();