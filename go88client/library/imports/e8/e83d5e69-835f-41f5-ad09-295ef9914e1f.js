"use strict";
cc._RF.push(module, 'e83d55pg19B9a0JKV75kU4f', 'Bank');
// Script/Model/Dialog/Shop/Bank/Bank.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		nap: cc.Node,
		atm: cc.Node,
		rut: cc.Node
	},
	init: function init() {
		this.body = [];
		if (this.nap) {
			this.nap = this.nap.getComponent('bankNap');
			this.body.push(this.nap);
		}
		if (this.atm) {
			this.atm = this.atm.getComponent('bankATM');
			this.body.push(this.atm);
		}

		if (this.rut) {
			this.rut = this.rut.getComponent('bankRut');
			this.rut.init();
			this.body.push(this.rut);
		}
		console.log(this.body);

		this.header = this.header.children.map(function (obj) {
			return obj.getComponent('itemContentMenu');
		});
	},

	onSelectHead: function onSelectHead(event, name) {
		this.header.map(function (header) {
			if (header.node.name == name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.body.map(function (body) {
			if (body.node.name == name) {
				body.node.active = true;
			} else {
				body.node.active = false;
			}
		});
	},
	onData: function onData(data) {
		if (!!data.list && this.nap) {
			this.nap.onData(data.list);
		}
		if (void 0 !== data.atm && this.atm) {
			this.atm.onData(data.atm);
		}
	}
});

cc._RF.pop();