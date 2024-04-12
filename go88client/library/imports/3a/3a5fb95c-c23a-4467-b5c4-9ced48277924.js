"use strict";
cc._RF.push(module, '3a5fblcwjpEZ7XEnO1IJ3kk', 'VQRed_main_line');
// Script/Game/VuongQuocRed/VuongQuocRed_line/VQRed_main_line.js

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
		this.node.children[1].active = true;
	},
	offhover: function offhover() {
		this.node.children[1].active = false;
	},
	onEf: function onEf() {
		this.onhover();
		this.node.pauseSystemEvents();
	},
	offEf: function offEf() {
		this.offhover();
		this.node.resumeSystemEvents();
	}
});

cc._RF.pop();