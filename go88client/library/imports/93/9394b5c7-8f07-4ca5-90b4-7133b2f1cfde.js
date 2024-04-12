"use strict";
cc._RF.push(module, '9394bXHjwdMpZC0cTOy8c/e', 'BigBabol_reel_item');
// Script/Game/BigBabol/BigBabol_reel_item.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		item: cc.Sprite
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	stop: function stop() {
		this.node.children.forEach(function (node) {
			var animation = node.getComponents(cc.Animation);
			animation.forEach(function (k) {
				node.removeComponent(k);
			});
		});
	},
	random: function random() {
		var icon = ~~(Math.random() * 6);
		this.setIcon(icon);
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		this.item.spriteFrame = this.RedT.icons[icon];
		if (data) {
			this.data = icon;
		}
	}
});

cc._RF.pop();