"use strict";
cc._RF.push(module, '2c6da1F/j5K0YtLq6E2eBDu', 'Mini3Cay_top');
// Script/Game/Mini3Cay/Mini3Cay_top.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,
	properties: {
		item: cc.Prefab,
		content: cc.Node,
		cointRed: cc.Node,
		cointXu: cc.Node,
		red: true
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { mini3cay: { tops: this.red } } });
	},
	changerCoint: function changerCoint() {
		this.red = !this.red;
		this.cointRed.active = !this.cointRed.active;
		this.cointXu.active = !this.cointXu.active;
		this.get_data();
	},
	onData: function onData(data) {
		this.content.destroyAllChildren();
		var self = this;
		Promise.all(data.map(function (obj, index) {
			var item = cc.instantiate(self.item);
			var itemComponent = item.getComponent('Mini3Cay_ihistory');
			itemComponent.time.string = helper.getStringDateByTime(obj.time);
			itemComponent.phien.string = obj.name;
			itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
			itemComponent.win.string = helper.numberWithCommas(obj.win);
			Promise.all(itemComponent.kq.map(function (kq, index) {
				kq.spriteFrame = cc.RedT.util.card.getCard(obj.kq[index].card, obj.kq[index].type);
			}));
			item.children[0].active = !(index & 1);
			self.content.addChild(item);
		}));
	}
});

cc._RF.pop();