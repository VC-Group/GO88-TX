"use strict";
cc._RF.push(module, 'df8c85uzp9M6rkEtOxa9TjC', 'BigBabol_main_line');
// Script/Game/BigBabol/BigBabol_main_line.js

"use strict";

cc.Class({
	extends: cc.Component,

	init: function init(obj) {
		this.RedT = obj;
		return this;
	},

	onEnable: function onEnable() {
		this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
		this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
	},
	onDisable: function onDisable() {
		this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
		this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
	},
	onhover: function onhover() {
		this.node.children[0].active = true;
	},
	offhover: function offhover() {
		this.node.children[0].active = false;
	}
});

cc._RF.pop();