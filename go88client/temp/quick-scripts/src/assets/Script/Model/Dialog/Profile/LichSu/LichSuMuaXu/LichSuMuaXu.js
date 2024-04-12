"use strict";
cc._RF.push(module, 'b2292sqRptHdJi8HS34a///', 'LichSuMuaXu');
// Script/Model/Dialog/Profile/LichSu/LichSuMuaXu/LichSuMuaXu.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		content: {
			default: null,
			type: cc.Node
		}
	},
	onLoad: function onLoad() {
		var _this = this;

		Promise.all(this.content.children.map(function (obj) {
			return obj.getComponent('LichSuNap_item');
		})).then(function (resulf) {
			_this.content = resulf;
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ user: { history: { mua_xu: { page: page } } } });
	},
	onData: function onData(data) {
		Promise.all(this.content.map(function (obj, index) {
			var dataT = data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.GD.string = !!dataT.id ? dataT.id : '';
				obj.Time.string = Helper.getStringDateByTime(dataT.time);
				obj.NhaMang.string = Helper.numberWithCommas(dataT.red);
				obj.MenhGia.string = Helper.numberWithCommas(dataT.xu);
			} else {
				obj.node.active = false;
			}
		}));
	}
});

cc._RF.pop();