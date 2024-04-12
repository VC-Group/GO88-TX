"use strict";
cc._RF.push(module, '3c486/mpTFEsoXHhkW8UDhO', 'BigBabol_reel');
// Script/Game/BigBabol/BigBabol_reel.js

'use strict';

cc.Class({

	extends: cc.Component,

	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		this.icons = [];
		var self = this;
		Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
			var icon = cc.instantiate(self.RedT.iconPrefab);
			self.node.addChild(icon);
			icon = icon.getComponent('BigBabol_reel_item');
			icon.init(self.RedT);
			if (index > 2 && index < 23) {
				icon.stop();
				icon.random();
			}
			return icon;
		})).then(function (result) {
			_this.icons = result;
			_this.icons[25].setIcon(_this.icons[2].random());
			_this.icons[24].setIcon(_this.icons[1].random());
			_this.icons[23].setIcon(_this.icons[0].random());
		});
	},

	spin: function spin(index) {
		this.node.stopAllActions();
		var self = this;
		var d = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 380))).easing(cc.easeInOut(2));
		var p = cc.callFunc(function () {
			//this.RedT.copy();
			this.node.y = 0;
			this.RedT.random();
		}, this);
		var p2 = cc.callFunc(function () {
			if (index === 0) {
				this.RedT.copy();
			}
			this.node.y = 0;
		}, this);

		if (index === 2) {
			var onEf = cc.callFunc(function () {
				this.RedT.hieuUng();
			}, this);
			this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p, onEf));
		} else this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p2));
	},
	stop: function stop() {
		this.node.stopAllActions();
		this.RedT.copy();
		this.node.y = 0;
	}
});

cc._RF.pop();