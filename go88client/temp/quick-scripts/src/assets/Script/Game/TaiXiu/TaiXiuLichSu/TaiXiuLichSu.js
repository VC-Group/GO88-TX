"use strict";
cc._RF.push(module, '80da9UrNe9D45tJEXBxj5Wd', 'TaiXiuLichSu');
// Script/Game/TaiXiu/TaiXiuLichSu/TaiXiuLichSu.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,
	properties: {
		content: cc.Node,
		page: cc.Prefab
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	onLoad: function onLoad() {
		this.page = cc.instantiate(this.page);
		this.page.y = -239;
		this.node.addChild(this.page);
		this.page = this.page.getComponent('Pagination');
		this.page.init(this);

		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('TaiXiuLichSu_item');
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	onDisable: function onDisable() {},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ taixiu: { get_log: { page: page } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, index) {
			var dataT = data.data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				var tong = dataT.dice1 + dataT.dice2 + dataT.dice3;
				obj.phien.string = dataT.phien;
				obj.time.string = Helper.getStringDateByTime(dataT.time);
				obj.dat.string = dataT.taixiu ? dataT.select ? 'Chẵn' : 'Lẻ' : dataT.select ? 'Tài' : 'Xỉu';
				obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
				obj.tralai.string = Helper.numberWithCommas(dataT.tralai);
				obj.ketqua.string = dataT.dice1 + '-' + dataT.dice2 + '-' + dataT.dice3 + '  ' + tong;
				if (dataT.betwin > 0) obj.nhan.string = Helper.numberWithCommas(dataT.betwin + dataT.bet);else obj.nhan.string = Helper.numberWithCommas(dataT.betwin);
			} else {
				obj.node.active = false;
			}
		});
	}
});

cc._RF.pop();