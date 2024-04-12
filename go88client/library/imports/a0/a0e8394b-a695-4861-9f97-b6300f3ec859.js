"use strict";
cc._RF.push(module, 'a0e83lLppVIYZ+XtjAPPshZ', 'bankATM');
// Script/Model/Dialog/Shop/Bank/bankATM.js

'use strict';

var BrowserUtil = require('BrowserUtil');
var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		labelATMBank: cc.Label,
		ATMID: cc.String,
		prefab: cc.Prefab,
		moreBank: cc.Node,
		contentATMBank: cc.Node,
		inputTien: cc.EditBox,
		editOTP: cc.EditBox,
		loadList: false,
		typeOTP: ''
	},
	onEnable: function onEnable() {
		this.loadList === false && this.getList();
	},
	onDisable: function onDisable() {

		//this.clean();
	},
	getList: function getList() {
		cc.RedT.send({ 'shop': { 'bank': { 'atm': { 'list': true } } } });
	},
	onData: function onData(data) {
		if (void 0 !== data.list) {
			this.onListATM(data.list);
		}
	},
	onListATM: function onListATM(data) {
		this.loadList = true;
		this['i_arg'] = data.map(function (obj, index) {
			var item = cc.instantiate(this.prefab);
			var comp = item.getComponent('NapRed_itemOne');
			comp.init(this, 'i_arg', 'labelATMBank', 'onListClick');
			comp.id = obj.id;
			comp.text.string = obj.name;
			this.contentATMBank.addChild(item);
			comp.data = obj;
			return comp;
		}.bind(this));
	},
	onListClick: function onListClick(data) {
		this.ATMID = data.id;
	},
	toggleMoreBank: function toggleMoreBank() {
		this.moreBank.active = !this.moreBank.active;
	},
	onChangerRed: function onChangerRed() {
		var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		value = helper.numberWithCommas(helper.getOnlyNumberInString(value));
		this.inputTien.string = value == 0 ? '' : value;
	},
	changerTypeOTP: function changerTypeOTP(e) {
		this.typeOTP = e.node.name;
	},
	onClickOTP: function onClickOTP() {
		cc.RedT.send({ otp: { type: this.typeOTP } });
	},
	onClickTiep: function onClickTiep() {
		var amount = helper.getOnlyNumberInString(this.inputTien.string) >> 0;
		if (amount < 50000) {
			cc.RedT.inGame.notice.show({ title: '', text: 'Nạp tối thiểu 50.000' });
		} else if (this.ATMID.length === 0) {
			cc.RedT.inGame.notice.show({ title: '', text: 'Vui lòng chọn thẻ ATM thuộc Ngân Hàng bạn muốn nạp.' });
		} else if (this.editOTP.string.length < 4) {
			cc.RedT.inGame.notice.show({ title: '', text: 'Mã OTP không hợp lệ.' });
		} else {
			cc.RedT.inGame.bgLoading.onData({ active: true, text: 'Đang gửi yêu cầu...' });
			cc.RedT.send({ 'shop': { 'bank': { 'atm': { 'select': { 'id': this.ATMID, 'name': this.labelATMBank.string, 'amount': amount, 'otp': this.editOTP.string } } } } });
		}
	}
});

cc._RF.pop();