"use strict";
cc._RF.push(module, 'ca5891XEyBMXooOmHi4eVGy', 'Candy_iLine');
// Script/Game/Candy/Candy_iLine.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		line: cc.Node,
		ef: false
	},
	onEnable: function onEnable() {
		this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onShow, this);
		this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this);
	},
	onDisable: function onDisable() {
		this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onShow, this);
		this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.onHidden, this);
	},
	onShow: function onShow() {
		this.line.active = true;
	},
	onHidden: function onHidden() {
		!this.ef && (this.line.active = false);
	}
});

cc._RF.pop();