"use strict";
cc._RF.push(module, '61675TPqG5KgLFHTaCss4/w', 'XoSo_select_item');
// Script/Game/XoSo/XoSo_select_item.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		nodeOn: cc.Node,
		nodeOff: cc.Node,
		text: cc.Label,
		select: false
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	onChanger: function onChanger() {
		this.select = !this.select;
		this.nodeOn.active = this.select;
		this.nodeOff.active = !this.select;
	},
	onClickSelect: function onClickSelect() {
		this.onChanger();
		this.RedT.refreshH(this);
	},
	selectOn: function selectOn() {
		this.select = true;
		this.nodeOn.active = true;
		this.nodeOff.active = false;
	},
	selectOff: function selectOff() {
		this.select = false;
		this.nodeOn.active = false;
		this.nodeOff.active = true;
	}
});

cc._RF.pop();