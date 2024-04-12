"use strict";
cc._RF.push(module, 'b2ae4rWXqlM36UY11Ju7VVp', 'Zeus_item');
// Script/Game/Zeus/reels/Zeus_item.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {
		//icon:  cc.Node,
		icons: {
			default: [],
			type: cc.Prefab
		}
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	random: function random() {
		var icon = Math.random() * 11 >> 0;
		this.setIcon(icon);
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		// if (icon == 10) {
		// 	this.wind.active = true;
		// 	this.icon.node.active = this.free.active = this.bonus.active = this.hu.active = false;
		// }else if (icon == 9) {
		// 	this.hu.active = true;
		// 	this.icon.node.active = this.free.active = this.bonus.active = this.wind.active = false;
		// }else if (icon == 8) {
		// 	this.bonus.active = true;
		// 	this.icon.node.active = this.free.active = this.wind.active = this.hu.active = false;
		// }else if (icon == 7) {
		// 	this.free.active = true;
		// 	this.icon.node.active = this.wind.active = this.bonus.active = this.hu.active = false;
		// }else{
		// 	this.icon.node.active = true;
		// 	this.icon.spriteFrame = this.RedT.icons[icon];
		// 	this.free.active = this.wind.active = this.bonus.active = this.hu.active = false;
		// }
		this.node.removeAllChildren();
		var child = cc.instantiate(this.icons[icon]);
		child.setScale(cc.v2(0.9, 0.9));
		this.node.addChild(child);
		if (data) {
			this.data = icon;
		}
	}
});

cc._RF.pop();