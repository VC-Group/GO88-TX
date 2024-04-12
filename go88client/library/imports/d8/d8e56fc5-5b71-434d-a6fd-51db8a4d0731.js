"use strict";
cc._RF.push(module, 'd8e56/FW3FDTab9UduKTQcx', 'hoverScale');
// Script/Helper/ef/hoverScale.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {
		pressedScale: 1,
		transDuration: 0
	},
	onLoad: function onLoad() {
		this.initScale = this.node.scale;
		this.scaleOnAction = cc.scaleTo(this.transDuration, this.pressedScale);
		this.scaleOffAction = cc.scaleTo(this.transDuration, this.initScale);
	},

	onEnable: function onEnable() {
		this.node.on(cc.Node.EventType.MOUSE_ENTER, this.eventOnHover, this);
		this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.eventOffHover, this);
	},
	onDisable: function onDisable() {
		this.node.off(cc.Node.EventType.MOUSE_ENTER, this.eventOnHover, this);
		this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.eventOffHover, this);
	},
	eventOnHover: function eventOnHover(e) {
		this.node.stopAllActions();
		this.node.runAction(this.scaleOnAction);
	},
	eventOffHover: function eventOffHover(e) {
		this.node.stopAllActions();
		this.node.runAction(this.scaleOffAction);
	}
});

cc._RF.pop();