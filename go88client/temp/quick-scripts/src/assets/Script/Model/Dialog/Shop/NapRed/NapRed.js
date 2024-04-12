"use strict";
cc._RF.push(module, '41eebjrhpBCuYVy5G92Kdy9', 'NapRed');
// Script/Model/Dialog/Shop/NapRed/NapRed.js

'use strict';

var NapThe = require('NapThe');

cc.Class({
	extends: cc.Component,

	properties: {
		NapThe: NapThe,
		nodeHinhThuc: cc.Node,
		nodeNapThe: cc.Node,
		nodeMoMo: cc.Node,
		nodeBank: cc.Node,
		ChuyenRED: cc.Node,

		momoSTK: cc.Label,
		momoNAME: cc.Label,
		nickname: cc.Label,

		bankSTK: cc.Label,
		bankNAME: cc.Label,
		NganHang: cc.Label,
		NoiDung: cc.Label,

		isLoaded: false
	},
	init: function init() {
		this.NapThe.init();
	},

	onEnable: function onEnable() {
		this.onBackHinhThuc();
		if (!this.isLoaded) {
			cc.RedT.send({ shop: { info_nap: true } });
		}
	},
	onDisable: function onDisable() {
		this.onBackHinhThuc();
	},
	onData: function onData(data) {
		if (void 0 !== data.info && !this.isLoaded) {
			this.isLoaded = true;
			if (void 0 !== data.info.nhamang) {
				this.NapThe.infoSet(data.info.nhamang, 'nhamangList', 'NhanhMang', true);
			}
			if (void 0 !== data.info.menhgia) {
				this.NapThe.infoSet(data.info.menhgia, 'menhgiaList', 'MenhGia');
			}
		}
	},
	onSelecHinhThuc: function onSelecHinhThuc(e) {
		this.nodeHinhThuc.active = false;

		var hinhthuc = e;
		if (hinhthuc == 'Momo') {
			this.nodeNapThe.active = false;
			this.nodeMoMo.active = true;
			this.nodeBank.active = false;
			this.ChuyenRED.active = false;
			cc.RedT.send({ shop: { info_momo: true } });
		} else if (hinhthuc == 'Banking') {
			this.nodeBank.active = true;
			this.nodeNapThe.active = false;
			this.nodeMoMo.active = false;
			this.ChuyenRED.active = false;
			cc.RedT.send({ shop: { info_bank: true } });
		} else if (hinhthuc == 'NapRed') {
			this.nodeNapThe.active = true;
			this.nodeMoMo.active = false;
			this.nodeBank.active = false;
			this.ChuyenRED.active = false;
			var list = this.NapThe.scrollviewNhaMang.content.children.filter(function (obj) {
				var a = obj.getComponent('NapRed_itemOne');
				var text = a.text.string.toLowerCase();
				return hinhthuc == text;
			});
			if (list.length) {
				var objTele = list[0].getComponent('NapRed_itemOne');
				hinhthuc = objTele.text.string;
				this.NapThe.nhamangList.forEach(function (obj) {
					if (obj === objTele) {
						obj.onSelect();
					} else {
						obj.unSelect();
					}
				});
			}
			this.NapThe.NhanhMang.string = hinhthuc;
		} else {
			this.nodeBank.active = false;
			this.nodeNapThe.active = false;
			this.nodeMoMo.active = false;
			this.ChuyenRED.active = true;
		}
	},
	onBackHinhThuc: function onBackHinhThuc(e) {
		this.nodeHinhThuc.active = false;
		this.nodeNapThe.active = true;
		this.nodeMoMo.active = false;
		this.nodeBank.active = false;
	},
	MOMO: function MOMO(_MOMO) {
		if (_MOMO) {
			this.momoSTK.string = _MOMO.phone;
			this.momoNAME.string = _MOMO.name;
			this.nickname.string = _MOMO.syntax;
		}
	},
	BANK: function BANK(_BANK) {
		if (_BANK) {
			this.bankSTK.string = _BANK.bank_number;
			this.bankNAME.string = _BANK.bank_accname;
			this.NganHang.string = _BANK.bank_name;
			this.NoiDung.string = _BANK.syntax;
		}
	},
	onCopyNumber: function onCopyNumber() {
		cc.RedT.CopyToClipboard(this.momoSTK.string);
		cc.RedT.inGame.noticeCopy();
	},
	onCopyName: function onCopyName() {
		cc.RedT.CopyToClipboard(this.nickname.string);
		cc.RedT.inGame.noticeCopy();
	},
	onCopyBankSTK: function onCopyBankSTK() {
		cc.RedT.CopyToClipboard(this.bankSTK.string);
		cc.RedT.inGame.noticeCopy();
	},
	onCopyND: function onCopyND() {
		cc.RedT.CopyToClipboard(this.NoiDung.string);
		cc.RedT.inGame.noticeCopy();
	}
});

cc._RF.pop();