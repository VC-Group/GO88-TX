"use strict";
cc._RF.push(module, '1dcc4TRp5REZa8M+IY8ljzM', 'TaiXiu_efScale');
// Script/Game/TaiXiu/TaiXiuMain/TaiXiu_efScale.js

"use strict";

cc.Class({
	extends: cc.Component,
	play: function play() {
		this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.4, 0.4), cc.scaleTo(0.4, 0.4))));
	},
	stop: function stop() {
		this.node.stopAllActions();
		this.node.scale = 0.4;
	}
});

cc._RF.pop();