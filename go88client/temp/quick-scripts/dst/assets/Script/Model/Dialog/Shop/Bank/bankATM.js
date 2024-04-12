
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/Bank/bankATM.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXEJhbmsvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcQmFuay9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcQmFua1xcYmFua0FUTS5qcyJdLCJuYW1lcyI6WyJCcm93c2VyVXRpbCIsInJlcXVpcmUiLCJoZWxwZXIiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsYWJlbEFUTUJhbmsiLCJMYWJlbCIsIkFUTUlEIiwiU3RyaW5nIiwicHJlZmFiIiwiUHJlZmFiIiwibW9yZUJhbmsiLCJOb2RlIiwiY29udGVudEFUTUJhbmsiLCJpbnB1dFRpZW4iLCJFZGl0Qm94IiwiZWRpdE9UUCIsImxvYWRMaXN0IiwidHlwZU9UUCIsIm9uRW5hYmxlIiwiZ2V0TGlzdCIsIm9uRGlzYWJsZSIsIlJlZFQiLCJzZW5kIiwib25EYXRhIiwiZGF0YSIsImxpc3QiLCJvbkxpc3RBVE0iLCJtYXAiLCJvYmoiLCJpbmRleCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsImNvbXAiLCJnZXRDb21wb25lbnQiLCJpbml0IiwiaWQiLCJ0ZXh0Iiwic3RyaW5nIiwibmFtZSIsImFkZENoaWxkIiwiYmluZCIsIm9uTGlzdENsaWNrIiwidG9nZ2xlTW9yZUJhbmsiLCJhY3RpdmUiLCJvbkNoYW5nZXJSZWQiLCJ2YWx1ZSIsIm51bWJlcldpdGhDb21tYXMiLCJnZXRPbmx5TnVtYmVySW5TdHJpbmciLCJjaGFuZ2VyVHlwZU9UUCIsImUiLCJub2RlIiwib25DbGlja09UUCIsIm90cCIsInR5cGUiLCJvbkNsaWNrVGllcCIsImFtb3VudCIsImluR2FtZSIsIm5vdGljZSIsInNob3ciLCJ0aXRsZSIsImxlbmd0aCIsImJnTG9hZGluZyJd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LEVBQVYsRUFBUCxFQUFSLEVBQVIsRUFBYjtBQUNBO0FBQ0Q7QUF0RU8sQ0FBVCIsImZpbGUiOiJiYW5rQVRNLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXEJhbmsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEJyb3dzZXJVdGlsID0gcmVxdWlyZSgnQnJvd3NlclV0aWwnKTtcclxudmFyIGhlbHBlciAgICAgID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRsYWJlbEFUTUJhbms6ICAgY2MuTGFiZWwsXHJcblx0XHRBVE1JRDogICAgICAgICAgY2MuU3RyaW5nLFxyXG5cdFx0cHJlZmFiOiAgICAgICAgIGNjLlByZWZhYixcclxuXHRcdG1vcmVCYW5rOiAgICAgICBjYy5Ob2RlLFxyXG5cdFx0Y29udGVudEFUTUJhbms6IGNjLk5vZGUsXHJcblx0XHRpbnB1dFRpZW46ICAgICAgY2MuRWRpdEJveCxcclxuXHRcdGVkaXRPVFA6ICAgICAgICBjYy5FZGl0Qm94LFxyXG5cdFx0bG9hZExpc3Q6ICAgICAgIGZhbHNlLFxyXG5cdFx0dHlwZU9UUDogICAgICAgICcnLFxyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMubG9hZExpc3QgPT09IGZhbHNlICYmIHRoaXMuZ2V0TGlzdCgpO1xyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcclxuXHRcdC8vdGhpcy5jbGVhbigpO1xyXG5cdH0sXHJcblx0Z2V0TGlzdDogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7J3Nob3AnOnsnYmFuayc6eydhdG0nOnsnbGlzdCc6dHJ1ZX19fX0pO1xyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubGlzdCkge1xyXG5cdFx0XHR0aGlzLm9uTGlzdEFUTShkYXRhLmxpc3QpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25MaXN0QVRNOmZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5sb2FkTGlzdCA9IHRydWU7XHJcblx0XHR0aGlzWydpX2FyZyddID0gZGF0YS5tYXAoZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcblx0XHRcdGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWIpO1xyXG5cdFx0XHRsZXQgY29tcCA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdOYXBSZWRfaXRlbU9uZScpO1xyXG5cdFx0XHRjb21wLmluaXQodGhpcywgJ2lfYXJnJywgJ2xhYmVsQVRNQmFuaycsICdvbkxpc3RDbGljaycpXHJcblx0XHRcdGNvbXAuaWQgICAgICAgICAgPSBvYmouaWQ7XHJcblx0XHRcdGNvbXAudGV4dC5zdHJpbmcgPSBvYmoubmFtZTtcclxuXHRcdFx0dGhpcy5jb250ZW50QVRNQmFuay5hZGRDaGlsZChpdGVtKTtcclxuXHRcdFx0Y29tcC5kYXRhID0gb2JqO1xyXG5cdFx0XHRyZXR1cm4gY29tcDtcclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fSxcclxuXHRvbkxpc3RDbGljazogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLkFUTUlEID0gZGF0YS5pZDtcclxuXHR9LFxyXG5cdHRvZ2dsZU1vcmVCYW5rOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5tb3JlQmFuay5hY3RpdmUgPSAhdGhpcy5tb3JlQmFuay5hY3RpdmU7XHJcblx0fSxcclxuXHRvbkNoYW5nZXJSZWQ6IGZ1bmN0aW9uKHZhbHVlID0gMCl7XHJcblx0XHR2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodmFsdWUpKTtcclxuXHRcdHRoaXMuaW5wdXRUaWVuLnN0cmluZyA9IHZhbHVlID09IDAgPyAnJyA6IHZhbHVlO1xyXG5cdH0sXHJcblx0Y2hhbmdlclR5cGVPVFA6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0dGhpcy50eXBlT1RQID0gZS5ub2RlLm5hbWU7XHJcblx0fSxcclxuXHRvbkNsaWNrT1RQOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtvdHA6e3R5cGU6dGhpcy50eXBlT1RQfX0pO1xyXG5cdH0sXHJcblx0b25DbGlja1RpZXA6IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgYW1vdW50ID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmlucHV0VGllbi5zdHJpbmcpPj4wO1xyXG5cdFx0aWYgKGFtb3VudCA8IDUwMDAwKSB7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLm5vdGljZS5zaG93KHt0aXRsZTonJywgdGV4dDonTuG6oXAgdOG7kWkgdGhp4buDdSA1MC4wMDAnfSk7XHJcblx0XHR9ZWxzZSBpZiAodGhpcy5BVE1JRC5sZW5ndGggPT09IDApIHtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUubm90aWNlLnNob3coe3RpdGxlOicnLCB0ZXh0OidWdWkgbMOybmcgY2jhu41uIHRo4bq7IEFUTSB0aHXhu5ljIE5nw6JuIEjDoG5nIGLhuqFuIG114buRbiBu4bqhcC4nfSk7XHJcblx0XHR9ZWxzZSBpZih0aGlzLmVkaXRPVFAuc3RyaW5nLmxlbmd0aCA8IDQpe1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5ub3RpY2Uuc2hvdyh7dGl0bGU6JycsIHRleHQ6J03DoyBPVFAga2jDtG5nIGjhu6NwIGzhu4cuJ30pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmJnTG9hZGluZy5vbkRhdGEoe2FjdGl2ZTp0cnVlLCB0ZXh0OifEkGFuZyBn4butaSB5w6p1IGPhuqd1Li4uJ30pO1xyXG5cdFx0XHRjYy5SZWRULnNlbmQoeydzaG9wJzp7J2JhbmsnOnsnYXRtJzp7J3NlbGVjdCc6eydpZCc6dGhpcy5BVE1JRCwgJ25hbWUnOnRoaXMubGFiZWxBVE1CYW5rLnN0cmluZywgJ2Ftb3VudCc6YW1vdW50LCAnb3RwJzp0aGlzLmVkaXRPVFAuc3RyaW5nfX19fX0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=