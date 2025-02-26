"use strict";
cc._RF.push(module, '725d0Pb9ORLDYbFhFG7zANv', 'LichSuRut');
// Script/Model/Dialog/Profile/LichSu/LichSuRut/LichSuRut.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		content: cc.Node
	},
	onLoad: function onLoad() {
		this.isView = false;
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('LichSuRut_item');
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		!this.isView && cc.RedT.send({ user: { history: { mua_the: { page: page } } } });
		this.isView = false;
	},
	onData: function onData(data) {
		this.content.forEach(function (obj, index) {
			var dataT = data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.Time.string = Helper.getStringDateByTime(dataT.time);
				obj.NhaMang.string = dataT.nhaMang;
				obj.MenhGia.string = Helper.numberWithCommas(dataT.menhGia);
				obj.SoLuong.string = dataT.soLuong;
				obj.Cost.string = Helper.numberWithCommas(dataT.Cost);
				obj.Status.string = dataT.status == 0 ? "Chờ duyệt" : dataT.status == 1 ? "Thành công" : dataT.status == 2 ? "Bị Huỷ" : "";
				obj.Status.node.color = dataT.status == 0 ? cc.color(9, 121, 195, 255) : dataT.status == 1 ? cc.color(14, 151, 2, 255) : dataT.status == 2 ? cc.color(195, 9, 9, 255) : cc.color(9, 121, 195, 255);
				if (dataT.status == 1) {
					obj.idT = dataT._id;
					obj.info = true;
				} else {
					obj.idT = null;
					obj.info = false;
				}
			} else {
				obj.node.active = false;
			}
		});
	}
});

cc._RF.pop();