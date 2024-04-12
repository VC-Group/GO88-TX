"use strict";
cc._RF.push(module, 'efa70M1TdBLHa9pSAAOj37L', 'AngryBirds-item');
// Script/Game/AngryBirds/AngryBirds-item.js

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

		var icon = Math.random() * 6 >> 0;
		this.setIcon(icon);
		if (data) {
			this.data = icon;
		}
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		this.icon.spriteFrame = this.RedT.icons[icon];
		if (data) {
			this.data = icon;
		}
	}
});

cc._RF.pop();