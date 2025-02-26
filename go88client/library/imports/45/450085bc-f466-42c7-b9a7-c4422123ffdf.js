"use strict";
cc._RF.push(module, '45008W89GZCx7mnxEIhI//f', 'Fish_history');
// Script/Game/BanCa/dialog/Fish_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		page: cc.Prefab,
		content: cc.Node
	},
	onLoad: function onLoad() {
		var page = cc.instantiate(this.page);
		page.y = -289;
		this.node.addChild(page);
		this.page = page.getComponent('Pagination');
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('Fish_history_item');
		});
		this.page.init(this);
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { fish: { log: page } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, i) {
			var dataT = data.data[i];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.bg.active = i % 2;

				obj.labelTime.string = Helper.getStringDateByTime(dataT.time);
				obj.labelRoom.string = this.room(dataT.room);
				obj.labelFish.string = Helper.numberWithCommas(dataT.fish);
				obj.labelWin.string = (dataT.money < 0 ? '-' : dataT.money > 0 ? '+' : '') + Helper.numberWithCommas(Helper.getOnlyNumberInString('' + dataT.money));
				obj.labelWin.node.color = dataT.money < 0 ? obj.labelWin.node.color.fromHEX('#FF0000') : obj.labelWin.node.color.fromHEX('#139C19');
			} else {
				obj.node.active = false;
			}
		}.bind(this));
	},
	room: function room(_room) {
		switch (_room) {
			case 1:
				return 'Bình dân';
				break;

			case 2:
				return 'Đại gia';
				break;

			case 3:
				return 'VIP';
				break;
		}
	}
});

cc._RF.pop();