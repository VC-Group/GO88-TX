"use strict";
cc._RF.push(module, '47772lCqUBB4owyBQc/Yrdt', 'CaNhan');
// Script/Model/Dialog/Profile/CaNhan/CaNhan.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		nodeAvatar: cc.Node,
		body: cc.Node,
		avatar: cc.Sprite,
		UID: cc.Label,
		username: cc.Label,
		phone: cc.Label,
		phoneStatus: cc.Label,
		joinedOn: cc.Label,
		nodeRank: cc.Node,
		nodeNhan: cc.Node,
		vipLevel: cc.Label,
		vipTong: cc.Label,
		vipHien: cc.Label,
		vipTiep: cc.Label
	},
	init: function init() {
		this.header = this.header.children.map(function (obj) {
			return obj.getComponent('itemContentMenu');
		});
	},

	onEnable: function onEnable() {
		this.getLevel();
	},
	onDisable: function onDisable() {
		this.nodeAvatar.active = false;
	},
	toggleNodeA: function toggleNodeA() {
		this.nodeAvatar.active = !this.nodeAvatar.active;
	},
	getLevel: function getLevel() {
		cc.RedT.send({ user: { getLevel: true } });
	},
	level: function level(data) {
		cc.RedT.userData(data);
		cc.RedT.user.vipHT = data.vipHT - data.vipPre;
		cc.RedT.user.vipNext = data.vipNext - data.vipPre;
		cc.RedT.inGame.header.level(data.level);
		cc.RedT.inGame.header.updateEXP(cc.RedT.user.vipHT, cc.RedT.user.vipNext);
		this.vipLevel.string = 'VIP' + data.level;
		this.vipTong.string = helper.numberWithCommas(data.vipTL);
		this.vipHien.string = helper.numberWithCommas(data.vipHT);
		this.vipTiep.string = helper.numberWithCommas(data.vipNext);
		this.nodeRank.children.forEach(function (rank, index) {
			if (rank.name <= data.level) {
				rank.opacity = 255;
				if (rank.name == data.level) {
					this.nodeNhan.children[index].children[3].active = true;
				} else {
					this.nodeNhan.children[index].children[3].active = false;
				}
			} else {
				rank.opacity = 99;
				this.nodeNhan.children[index].children[3].active = false;
			}
		}.bind(this));
	},
	onNhanThuong: function onNhanThuong() {
		cc.RedT.send({ user: { nhanthuong: true } });
	},
	onSelectHead: function onSelectHead(event, name) {
		this.header.forEach(function (header) {
			if (header.node.name === name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.body.children.forEach(function (body) {
			if (body.name === name) {
				body.active = true;
			} else {
				body.active = false;
			}
		});
	},
	selectAvatar: function selectAvatar(e) {
		this.toggleNodeA();
		var avatar = e.target.name;
		cc.RedT.inGame.setAvatar(avatar);
		cc.RedT.user.avatar = avatar;
		cc.RedT.send({ user: { avatar: avatar } });
	}
});

cc._RF.pop();