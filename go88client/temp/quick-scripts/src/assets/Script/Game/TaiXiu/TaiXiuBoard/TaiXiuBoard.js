"use strict";
cc._RF.push(module, '71423kGPWNLUrUcOrvZ688E', 'TaiXiuBoard');
// Script/Game/TaiXiu/TaiXiuBoard/TaiXiuBoard.js

"use strict";

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		textType: {
			default: null,
			type: cc.Label
		},
		nodeChonTien: {
			default: null,
			type: cc.Node
		},
		nodeChonSo: {
			default: null,
			type: cc.Node
		}
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	ChonTienClick: function ChonTienClick(event, value) {
		this.RedT.input.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.RedT.input.string) * 1 + value * 1);
	},
	ChonSoClick: function ChonSoClick(event, value) {
		this.RedT.input.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.RedT.input.string + value));
	},
	onBackClick: function onBackClick() {
		var number = helper.getOnlyNumberInString(this.RedT.input.string);
		this.RedT.input.string = helper.numberWithCommas(number.slice(0, number.length - 1));
	},
	onCleanClick: function onCleanClick() {
		this.RedT.input.string = "";
	},
	onAllClick: function onAllClick() {
		this.RedT.input.string = helper.numberWithCommas(cc.RedT.user.red);
	},
	onChangerTypeClick: function onChangerTypeClick() {
		if (this.nodeChonTien.active) {
			this.nodeChonTien.active = false;
			this.nodeChonSo.active = true;
			this.textType.string = "CHỌN";
		} else {
			this.nodeChonSo.active = false;
			this.nodeChonTien.active = true;
			this.textType.string = "SỐ KHÁC";
		}
	},
	onCuocClick: function onCuocClick() {
		this.RedT.onCuocClick();
		this.RedT.btnLTxt.active = true;
		this.RedT.btnRTxt.active = true;
	},
	onCloseClick: function onCloseClick() {
		this.node.active = false;
		this.RedT.input.string = this.RedT.RedT.board ? '' : '0';

		this.RedT.btnLTxt.active = true;
		this.RedT.btnRTxt.active = true;
	}
});

cc._RF.pop();