"use strict";
cc._RF.push(module, '3988dLBD7VPLowq6ozkuvOs', 'CheckOut');
// Script/Helper/CheckOut.js

"use strict";

cc.Class({
	extends: cc.Sprite,

	properties: {
		nut: {
			default: null,
			type: cc.Sprite
		},
		NutOn: {
			default: null,
			type: cc.SpriteFrame
		},
		NutOff: {
			default: null,
			type: cc.SpriteFrame
		},
		BgOn: {
			default: null,
			type: cc.SpriteFrame
		},
		BgOff: {
			default: null,
			type: cc.SpriteFrame
		},
		isChecked: false
	},
	onLoad: function onLoad() {
		this.OnUpdate();
	},


	OnChangerClick: function OnChangerClick() {
		this.isChecked = !this.isChecked;
		this.OnUpdate();
	},
	OnUpdate: function OnUpdate() {
		if (!this.isChecked) {
			this.nut.node.stopAllActions();
			this.nut.node.runAction(cc.sequence(cc.moveTo(0.1, cc.v2(-30, 0)), cc.callFunc(function () {
				this.spriteFrame = this.BgOff;
				this.nut.spriteFrame = this.NutOff;
			}, this)));
		} else {
			this.nut.node.stopAllActions();
			this.nut.node.runAction(cc.sequence(cc.moveTo(0.1, cc.v2(30, 0)), cc.callFunc(function () {
				this.spriteFrame = this.BgOn;
				this.nut.spriteFrame = this.NutOn;
			}, this)));
		}
	}
});

cc._RF.pop();