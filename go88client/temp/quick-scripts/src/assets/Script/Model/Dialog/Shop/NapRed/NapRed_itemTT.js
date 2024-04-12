"use strict";
cc._RF.push(module, '692acli1tBGMJGB7Xh9IFJc', 'NapRed_itemTT');
// Script/Model/Dialog/Shop/NapRed/NapRed_itemTT.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		bg: cc.Node,
		menhgia: cc.Label,
		red: cc.Label
	},

	init: function init(menhgia, red) {
		this.menhgia.string = menhgia;
		this.red.string = red;
	}
});

cc._RF.pop();