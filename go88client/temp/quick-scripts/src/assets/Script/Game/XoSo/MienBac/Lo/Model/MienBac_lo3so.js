"use strict";
cc._RF.push(module, 'fe72b1SkeFD94urjeOCVDYz', 'MienBac_lo3so');
// Script/Game/XoSo/MienBac/Lo/Model/MienBac_lo3so.js

'use strict';

var helper = require('Helper');
var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,

	properties: {
		head_select: cc.Node,
		node_select: cc.Node,
		item_select: cc.Prefab,
		soCuoc: cc.Label,
		soDiem: cc.Label,
		tongTien: cc.Label,
		inputSoDiem: cc.EditBox,
		max: 8,
		countSelect: 0,
		giaDiem: 22000,
		diemToiDa: 1000000,
		game: '',
		head: '100'
	},
	onLoad: function onLoad() {
		var arr = [];
		for (var i = 0; i < 100; i++) {
			var ooT = cc.instantiate(this.item_select);
			ooT = ooT.getComponent('XoSo_select_item');
			ooT.init(this);
			ooT.text.string = helper.numberPad(i, 3);
			this.node_select.addChild(ooT.node);
			arr[i] = ooT;
		}
		this.node_select = arr;
		arr = null;
	},

	onEnable: function onEnable() {
		if (cc.sys.isBrowser) {
			BrowserUtil.inputAddEvent(this.inputSoDiem, 'input', this.onUpdateDiem.bind(this));
		}
	},
	onDisable: function onDisable() {
		if (cc.sys.isBrowser) {
			BrowserUtil.inputRemoveEvent(this.inputSoDiem, 'input', this.onUpdateDiem.bind(this));
		}
	},
	onSelectH: function onSelectH(event) {
		var self = this;
		var name = event.target.name;
		var number = name >> 0;
		this.head = name;
		this.head_select.children.forEach(function (obj) {
			if (obj.name === name) {
				obj.pauseSystemEvents();
				obj.opacity = 255;
			} else {
				obj.resumeSystemEvents();
				obj.opacity = 99;
			}
		});
		for (var i = 0; i < 100; i++) {
			this.node_select[i].text.string = helper.numberPad(i + number, 3);
		}
		self.node_select.forEach(function (node_select) {
			node_select.selectOff();
		});
		this.head_select.children.forEach(function (obj) {
			if (void 0 !== obj.data && obj.data.length > 0) {
				obj.data.forEach(function (select) {
					self.node_select.forEach(function (node_select) {
						if (node_select.text.string === select) {
							node_select.selectOn();
						}
					});
				});
			}
		});
	},
	refresh: function refresh() {
		var self = this;
		var arr = [];
		var text = '';
		this.node_select.forEach(function (obj) {
			if (obj.select) {
				arr.push(obj.text.string);
			}
		});
		this.head_select.children.forEach(function (obj) {
			if (obj.name === self.head) {
				obj.data = arr;
			}
			if (void 0 !== obj.data && obj.data.length > 0) {
				text += obj.data.join(', ') + ', ';
			}
		});
		this.soCuoc.string = text;
		this.updateTien();
	},
	refreshH: function refreshH(obj) {
		if (obj.select === true) {
			this.countSelect++;
		} else {
			this.countSelect--;
		}
		if (this.countSelect > this.max) {
			obj.onChanger();
			this.countSelect = this.max;
			cc.RedT.inGame.addNotice('1 Vé cược tối đa ' + this.max + ' Số...');
		}
		if (this.countSelect < 0) {
			this.countSelect = 0;
		}
		this.refresh();
	},
	onChangerDiem: function onChangerDiem() {
		var value = helper.numberWithCommas(helper.getOnlyNumberInString(this.inputSoDiem.string));
		this.inputSoDiem.string = value == '0' ? '' : value;
	},
	onUpdateDiem: function onUpdateDiem(e) {
		var value = helper.numberWithCommas(helper.getOnlyNumberInString(e.target.value));
		value = value === '0' ? '' : value;
		var valueNumb = helper.getOnlyNumberInString(value) * 1;
		if (valueNumb > this.diemToiDa) {
			value = helper.numberWithCommas(this.diemToiDa);
			cc.RedT.inGame.addNotice('Tối đa ' + value + ' điểm cho mỗi Vé.');
		}
		e.target.value = value;
		this.soDiem.string = !!value ? value : '0';
		this.inputSoDiem.string = value;
		this.updateTien();
	},
	updateTien: function updateTien() {
		var diem = helper.getOnlyNumberInString(this.soDiem.string) * 1;
		this.tongTien.string = helper.numberWithCommas(diem * this.giaDiem * this.countSelect);
	},
	onClickHuy: function onClickHuy() {
		this.soCuoc.string = '';
		this.soDiem.string = '0';
		this.tongTien.string = '0';
		this.inputSoDiem.string = '';
		this.countSelect = 0;
		this.node_select.forEach(function (obj) {
			if (obj.select) {
				obj.onChanger();
			}
		});
		this.head_select.children.forEach(function (obj) {
			obj.data = [];
		});
	},
	onClickCuoc: function onClickCuoc() {
		if (helper.isEmpty(this.soCuoc.string)) {
			cc.RedT.inGame.addNotice('Vui lòng chọn số muốn cược..');
		} else if (this.soDiem.string === '0') {
			cc.RedT.inGame.addNotice('Vui lòng nhập điểm cược..');
		} else {
			var data = {};
			data[this.game] = { so: this.soCuoc.string, diem: helper.getOnlyNumberInString(this.soDiem.string) };
			cc.RedT.send({ g: { xs: { mb: data } } });
		}
	}
});

cc._RF.pop();