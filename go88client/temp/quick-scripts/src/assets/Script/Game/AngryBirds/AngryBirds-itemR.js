"use strict";
cc._RF.push(module, '778daCpzslOUbNzvpIkVWDh', 'AngryBirds-itemR');
// Script/Game/AngryBirds/AngryBirds-itemR.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		icon: cc.Sprite
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	random: function random() {
		var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		var icon = Math.random() * 5 >> 0;
		this.setIcon(icon);
		if (data) {
			this.data = icon;
		}
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		if (icon === 0) {
			this.icon.spriteFrame = this.RedT.icons[0];
		} else {
			this.icon.spriteFrame = this.RedT.iconsX[icon - 1];
		}
		if (data) {
			this.data = icon;
		}
	}
});

cc._RF.pop();