"use strict";
cc._RF.push(module, '70127RbBKFG06+Pa5WThYLM', 'VuongQuocRed_line');
// Script/Game/VuongQuocRed/VuongQuocRed_line/VuongQuocRed_line.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		nodeLine: cc.Node,
		mainLine: cc.Node
	},
	init: function init(obj) {
		this.RedT = obj;
		var self = this;;
		this.mainLine = this.mainLine.children.map(function (line) {
			return line.getComponent('VQRed_main_line').init(self.RedT);
		});
		this.selectAll(null, "1");
	},
	onOpen: function onOpen() {
		cc.RedT.audio.playClick();
		this.node.active = true;
	},
	onClose: function onClose() {
		cc.RedT.audio.playUnClick();
		if (this.node.active && this.data.length < 1) {
			this.RedT.addNotice('Chọn ít nhất 1 dòng');
		} else {
			this.node.active = false;
		}
	},
	select: function select(e) {
		var node = e.target;
		if (node.children[0].active) {
			node.children[0].active = false;
			node.children[1].active = true;
		} else {
			node.children[0].active = true;
			node.children[1].active = false;
		}
		this.check();
	},
	check: function check() {
		var _this = this;

		var self = this;
		Promise.all(this.nodeLine.children.map(function (line, index) {
			return line.children[0].active ? index + 1 : void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this.data = data;
				_this.RedT.labelLine.string = data.length + ' dòng';
				_this.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this.RedT.bet.string));
			});
		});
	},
	selectChan: function selectChan() {
		var _this2 = this;

		var self = this;
		Promise.all(this.nodeLine.children.map(function (line, index) {
			var i = index + 1;
			if (i % 2) {
				line.children[0].active = true;
				line.children[1].active = false;
			} else {
				line.children[0].active = false;
				line.children[1].active = true;
				return i;
			}
			return void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this2.data = data;
				_this2.RedT.labelLine.string = data.length + ' dòng';
				_this2.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this2.RedT.bet.string));
			});
		});
	},
	selectLe: function selectLe() {
		var _this3 = this;

		var self = this;
		Promise.all(this.nodeLine.children.map(function (line, index) {
			var i = index + 1;
			if (i % 2) {
				line.children[0].active = false;
				line.children[1].active = true;
				return i;
			} else {
				line.children[0].active = true;
				line.children[1].active = false;
			}
			return void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data) {
				return void 0 !== data;
			})).then(function (data) {
				_this3.data = data;
				_this3.RedT.labelLine.string = data.length + ' dòng';
				_this3.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this3.RedT.bet.string));
			});
		});
	},
	selectAll: function selectAll(e, select) {
		var _this4 = this;

		var self = this;
		Promise.all(this.nodeLine.children.map(function (line, index) {
			var check = select == "1";
			line.children[0].active = check;
			line.children[1].active = !check;
			return check ? index + 1 : void 0;
		})).then(function (result) {
			Promise.all(result.filter(function (data, index) {
				return void 0 !== data;
			})).then(function (data) {
				_this4.data = data;
				_this4.RedT.labelLine.string = data.length + ' dòng';
				_this4.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this4.RedT.bet.string));
			});
		});
	}
});

cc._RF.pop();