"use strict";
cc._RF.push(module, '0f89dKGp89FS4A0zk0h6nwz', 'AngryBird_history');
// Script/Game/AngryBirds/AngryBird_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		page: cc.Prefab,
		content: cc.Node,
		red: true
	},
	onLoad: function onLoad() {
		var page = cc.instantiate(this.page);
		page.y = -250;
		this.node.addChild(page);
		this.page = page.getComponent('Pagination');
		this.page.init(this);

		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('AngryBird_history_item');
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { angrybird: { log: { red: this.red, page: page } } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, i) {
			var dataT = data.data[i];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.node.children[0].active = i % 2;
				obj.time.string = Helper.getStringDateByTime(dataT.time);
				obj.phien.string = dataT.id;
				obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
				obj.win.string = Helper.numberWithCommas(dataT.win);
			} else {
				obj.node.active = false;
			}
		});
	}
});

cc._RF.pop();