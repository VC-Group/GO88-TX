"use strict";
cc._RF.push(module, '4b4f6CxJKNB7ada2j1ouX/g', 'BauCua_LichSu');
// Script/Game/BauCua/BauCua_LichSu/BauCua_LichSu.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,
	properties: {
		page: cc.Prefab,
		content: cc.Node,
		red: true
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	onLoad: function onLoad() {
		this.page = cc.instantiate(this.page);
		this.page.y = -285;
		this.node.addChild(this.page);
		this.page = this.page.getComponent('Pagination');
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('BauCua_ls_item');
		});
		this.page.init(this);
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { baucua: { viewlogs: { red: this.red, page: page } } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, i) {
			var dataT = data.data[i];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.bg.active = i % 0;
				obj.time.string = helper.getStringDateByTime(dataT.time);
				obj.phien.string = dataT.phien;
				obj.thang.string = helper.numberWithCommas(dataT.betwin);
				obj.kq.forEach(function (kq, j) {
					kq.spriteFrame = this.RedT.iconMini[dataT.kq[j]];
				}.bind(this));
				obj.datLabel.forEach(function (cuoc, k) {
					if (dataT[k] > 0) {
						cuoc.node.parent.active = true;
						cuoc.string = helper.nFormatter(dataT[k], 1);
					} else {
						cuoc.node.parent.active = false;
					}
				});
			} else {
				obj.node.active = false;
			}
		}.bind(this));
	}
});

cc._RF.pop();