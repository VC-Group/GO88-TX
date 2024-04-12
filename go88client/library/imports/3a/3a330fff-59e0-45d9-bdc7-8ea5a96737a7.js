"use strict";
cc._RF.push(module, '3a330//WeBF2b3HjqWpZzen', 'Fish_bullet EF');
// Script/Game/BanCa/Fish/Bullet/Fish_bullet EF.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		anim: dragonBones.ArmatureDisplay,
		typeBet: 0
	},
	onLoad: function onLoad() {
		this.onDie = function () {
			this.node.destroy();
		};
		this.anim.on(dragonBones.EventObject.COMPLETE, this.onDie, this);
		this.anim.playAnimation('kyby_zidan' + this.typeBet + '-hit', 1);
	}
});

cc._RF.pop();