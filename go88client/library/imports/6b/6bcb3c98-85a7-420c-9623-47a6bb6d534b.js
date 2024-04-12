"use strict";
cc._RF.push(module, '6bcb3yYhadCDJYjR6a7bVNL', 'TheCao_item');
// Script/Model/Dialog/TheCao/TheCao_item.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		NhaMang: {
			default: null,
			type: cc.Label
		},
		MenhGia: {
			default: null,
			type: cc.Label
		},
		SoThe: {
			default: null,
			type: cc.Label
		},
		Seri: {
			default: null,
			type: cc.Label
		},
		HetHan: {
			default: null,
			type: cc.Label
		}
	},
	CopyToClipboard: function CopyToClipboard() {
		cc.RedT.CopyToClipboard(this.NhaMang.string + ' - Mã thẻ: ' + this.SoThe.string + ' - Seri: ' + this.Seri.string + '');
		cc.RedT.inGame.noticeCopy();
	}
});

cc._RF.pop();