"use strict";
cc._RF.push(module, 'ec1292CT1ZJL5oAGF36VfTW', 'BaoMat');
// Script/Model/Dialog/Profile/BaoMat/BaoMat.js

'use strict';

var DangKyOTP = require('DangKyOTP'),
    DoiMatKhau = require('DoiMatKhau'),
    BaoMatGame = require('BaoMatGame'),
    BaoMatTaiKhoan = require('BaoMatTaiKhoan');

cc.Class({
	extends: cc.Component,

	properties: {
		header: {
			default: null,
			type: cc.Node
		},
		DangKyOTP: DangKyOTP,
		DoiMatKhau: DoiMatKhau,
		BaoMatGame: BaoMatGame,
		BaoMatTaiKhoan: BaoMatTaiKhoan
	},
	init: function init() {
		var _this = this;

		this.body = [this.DangKyOTP.node, this.DoiMatKhau.node, this.BaoMatGame.node, this.BaoMatTaiKhoan.node];
		Promise.all(this.header.children.map(function (obj) {
			return obj.getComponent('itemContentMenu');
		})).then(function (result) {
			_this.header = result;
		});
	},

	onSelectHead: function onSelectHead(event, name) {
		Promise.all(this.header.map(function (header) {
			if (header.node.name == name) {
				header.select();
			} else {
				header.unselect();
			}
		}));
		Promise.all(this.body.map(function (body) {
			if (body.name == name) {
				body.active = true;
			} else {
				body.active = false;
			}
		}));
	}
});

cc._RF.pop();