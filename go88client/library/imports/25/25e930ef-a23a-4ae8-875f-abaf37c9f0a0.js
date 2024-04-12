"use strict";
cc._RF.push(module, '25e93DvojpK6Idfq683yfCg', 'Dialog');
// Script/Model/Dialog/Dialog.js

'use strict';

var signIn = require('SignIn'),
    signUp = require('SignUp'),
    forGotPass = require('ForGotPass'),
    signName = require('SignName'),
    shop = require('Shop'),
    ShopRut = require('ShopRut'),
    profile = require('Profile'),
    Settings = require('Settings'),
    the_cao = require('TheCao'),
    GiftCode = require('GiftCode'),
    DEvent = require('DEvent'),
    PokerNap = require('PokerNap'),
    x2Nap = require('x2Nap'),
    iMessage = require('iMessage');

cc.Class({
	extends: cc.Component,
	properties: {
		signIn: signIn,
		signUp: signUp,
		ForGotPass: forGotPass,
		signName: signName,
		shop: shop,
		shopRut: ShopRut,
		profile: profile,
		the_cao: the_cao,
		settings: Settings,
		GiftCode: GiftCode,
		DEvent: DEvent,
		PokerNap: PokerNap,
		iMessage: iMessage,
		x2Nap: x2Nap
	},
	init: function init() {
		this.actionShow = cc.spawn(cc.scaleTo(0.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(0.5, 255));
		this.objShow = null;
		this.objTmp = null;
		this.shop.init();
		this.shopRut.init();
		this.profile.init();
		this.the_cao.init();
	},

	onClickBack: function onClickBack() {
		cc.RedT.audio.playUnClick();
		this.onBack();
	},
	onBack: function onBack() {
		if (this.objShow != null) {
			if (void 0 == this.objShow.previous || null == this.objShow.previous) {
				this.objShow.active = false;
				this.node.active = false;
				this.objShow = null;
			} else {
				this.objTmp = this.objShow;
				this.objShow = this.objShow.previous;
				this.objTmp.previous = null;
				this.objTmp.active = false;
				this.objShow.active = true;
				this.objTmp = null;
			}
		} else {
			this.node.active = false;
		}
	},
	onClosePrevious: function onClosePrevious(obj) {
		if (void 0 !== obj.previous && null !== obj.previous) {
			this.onClosePrevious(obj.previous);
			delete obj.previous;
			//obj.previous = null;
		}
		obj.active = false;
	},
	onCloseDialog: function onCloseDialog() {
		if (this.objShow != null) {
			if (void 0 == this.objShow.previous || null == this.objShow.previous) {
				this.objShow.active = this.node.active = false;
				this.objShow = null;
			} else {
				this.onClosePrevious(this.objShow.previous);
				this.objShow.active = this.node.active = false;
				delete this.objShow.previous;
				//this.objShow.previous        = null;
				this.objShow = null;
			}
		} else {
			this.node.active = false;
		}
	},

	resetSizeDialog: function resetSizeDialog(node) {
		node.stopAllActions();
		node.scale = 0.5;
		node.opacity = 0;
	},

	/**
  * Function Show Dialog
 */
	showSignIn: function showSignIn() {
		this.node.active = this.signIn.node.active = true;
		this.objShow = this.signIn.node;
	},
	showSignInToUp: function showSignInToUp() {
		this.objShow.active = false;
		this.signUp.node.previous = this.objShow;
		this.showSignUp();
	},
	showSignUp: function showSignUp() {
		this.node.active = this.signUp.node.active = true;
		this.objShow = this.signUp.node;
	},
	showForGotPass: function showForGotPass() {
		this.objShow.active = false;
		this.ForGotPass.node.previous = this.objShow;
		this.node.active = this.ForGotPass.node.active = true;
		this.objShow = this.ForGotPass.node;
	},
	showSignName: function showSignName() {

		this.node.active = this.signName.node.active = true;
		this.signUp.node.active = this.signIn.node.active = false;
		this.objShow = this.signName.node;
	},
	showShop: function showShop(event, name) {
		if (cc.RedT.IS_LOGIN) {
			this.node.active = this.shop.node.active = true;
			this.objShow = this.shop.node;
			this.shop.superView(name);
		} else {
			this.showSignIn();
		}
	},
	showShopRut: function showShopRut(event, name) {
		if (cc.RedT.IS_LOGIN) {
			this.node.active = this.shopRut.node.active = true;
			this.objShow = this.shopRut.node;
			this.shopRut.superView(name);
		} else {
			this.showSignIn();
		}
	},
	showProfile: function showProfile(event, name) {
		this.node.active = this.profile.node.active = true;
		this.objShow = this.profile.node;
		this.profile.superView(name);
	},
	showSetting: function showSetting(event) {
		this.node.active = this.settings.node.active = true;
		this.objShow = this.settings.node;
	},
	showGiftCode: function showGiftCode(event) {
		if (cc.RedT.IS_LOGIN) {
			this.node.active = this.GiftCode.node.active = true;
			this.objShow = this.GiftCode.node;
		} else {
			this.showSignIn();
		}
	},
	showDEvent: function showDEvent(event) {
		if (cc.RedT.IS_LOGIN) {
			this.node.active = this.DEvent.node.active = true;
			this.objShow = this.DEvent.node;
		} else {
			this.showSignIn();
		}
	},
	showPokerNap: function showPokerNap(obj) {
		this.node.active = this.PokerNap.node.active = true;
		this.objShow = this.PokerNap.node;
		this.PokerNap.init(obj);
	},
	showiMessage: function showiMessage(obj) {
		this.node.active = this.iMessage.node.active = true;
		this.objShow = this.iMessage.node;
	},
	showEventX2: function showEventX2() {
		if (cc.RedT.IS_LOGIN) {
			this.node.active = this.x2Nap.node.active = true;
			this.objShow = this.x2Nap.node;
		}
	}
});

cc._RF.pop();