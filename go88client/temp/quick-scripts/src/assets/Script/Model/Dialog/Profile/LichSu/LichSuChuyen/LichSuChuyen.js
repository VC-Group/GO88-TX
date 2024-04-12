"use strict";
cc._RF.push(module, '943527q5XpHKJiZmmGFO1UX', 'LichSuChuyen');
// Script/Model/Dialog/Profile/LichSu/LichSuChuyen/LichSuChuyen.js

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
			return obj.getComponent('LichSuChuyen_item');
		})).then(function (resulf) {
			_this.content = resulf;
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ user: { history: { chuyen_red: { page: page } } } });
	},
	onData: function onData(data) {
		Promise.all(this.content.map(function (obj, index) {
			var dataT = data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.Time.string = Helper.getStringDateByTime(dataT.time);
				obj.uFrom.string = dataT.from;
				obj.uTo.string = dataT.to;
				obj.Chuyen.string = Helper.numberWithCommas(dataT.red);
				obj.Nhan.string = Helper.numberWithCommas(dataT.red_c);
				if (void 0 !== dataT.message) {
					obj.nodeMesenger.active = true;
					obj.mesenger = dataT.message;
				} else {
					obj.nodeMesenger.active = false;
					obj.mesenger = null;
				}
			} else {
				obj.node.active = false;
			}
		}));
	}
});

cc._RF.pop();