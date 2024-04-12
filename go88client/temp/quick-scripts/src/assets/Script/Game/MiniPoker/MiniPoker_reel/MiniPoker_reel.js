"use strict";
cc._RF.push(module, '9effbtyV3ZM8bEtkGsDTJkG', 'MiniPoker_reel');
// Script/Game/MiniPoker/MiniPoker_reel/MiniPoker_reel.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {},
	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		this.card = [];
		var self = this;
		Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
			var ooT = cc.instantiate(self.RedT.cardf);
			ooT.width = 95;
			ooT.height = 138;
			self.node.addChild(ooT);
			ooT = ooT.getComponent(cc.Sprite);
			return ooT;
		})).then(function (result) {
			_this.card = result;
			_this.random(true);
		});
	},
	random: function random() {
		var newG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		var self = this;
		this.card.forEach(function (obj, index) {
			if (newG) {
				obj.spriteFrame = cc.RedT.util.card.random();
			} else if (index !== 0 && index !== 25) {
				obj.spriteFrame = cc.RedT.util.card.random();
			}
		});
	},
	spin: function spin(index) {
		this.node.stopAllActions();
		var self = this;
		var i = index;
		var d = cc.moveTo(this.RedT.speed(), cc.v2(this.node.x, -(this.node.height - 138))).easing(cc.easeInOut(3));
		var p = cc.callFunc(function () {
			this.card[25].spriteFrame = this.card[0].spriteFrame;
			this.node.y = 0;
		}, this);

		if (i === 4) {
			var onEf = cc.callFunc(function () {
				this.RedT.hieuUng();
			}, this);
			this.node.runAction(cc.sequence(cc.delayTime(i * 0.1), d, p, onEf));
		} else this.node.runAction(cc.sequence(cc.delayTime(i * 0.1), d, p));
	},
	stop: function stop() {
		this.node.stopAllActions();
		if (void 0 !== this.card && void 0 !== this.card[25] && void 0 !== this.card[25].spriteFrame) {
			this.card[25].spriteFrame = this.card[0].spriteFrame;
		}
		this.node.y = 0;
	}
});

cc._RF.pop();