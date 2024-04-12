"use strict";
cc._RF.push(module, 'b32dagCeD1MVp59ygCz6Tsa', 'itemHeadMenu');
// Script/Helper/Menu/itemHeadMenu.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		nodeUnSelect: cc.Node,
		nodeSelect: cc.Node
	},
	select: function select() {
		this.nodeUnSelect.active = false;
		this.nodeSelect.active = true;
		this.node.pauseSystemEvents();
	},
	unselect: function unselect() {
		this.nodeUnSelect.active = true;
		this.nodeSelect.active = false;
		this.node.resumeSystemEvents();
	}
});

cc._RF.pop();