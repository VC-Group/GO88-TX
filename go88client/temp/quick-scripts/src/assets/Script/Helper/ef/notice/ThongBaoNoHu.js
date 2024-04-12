"use strict";
cc._RF.push(module, '2032a+ToBpAt7K48nuzmY5R', 'ThongBaoNoHu');
// Script/Helper/ef/notice/ThongBaoNoHu.js

'use strict';

var helper = require('ThongBaoNoHu');

cc.Class({
	extends: cc.Component,

	properties: {
		animation: cc.Animation,
		title: cc.Label,
		users: cc.Label,
		bet: cc.Label
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	onLoad: function onLoad() {
		this.node.y = -133;
		this.node.runAction(cc.sequence(cc.moveTo(2, cc.v2(0, 77)), cc.callFunc(function () {
			// Chơi âm thanh và nổ pháo hoa
			this.animation.play();
			cc.RedT.audio.playNoticeJackP();
		}, this), cc.delayTime(7), cc.callFunc(function () {
			// Hủy thông báo
			this.RedT.pushNotice();
			this.node.destroy();
		}, this)));
	}
});

cc._RF.pop();