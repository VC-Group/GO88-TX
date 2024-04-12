
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nL2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxEaWFsb2cuanMiXSwibmFtZXMiOlsic2lnbkluIiwicmVxdWlyZSIsInNpZ25VcCIsImZvckdvdFBhc3MiLCJzaWduTmFtZSIsInNob3AiLCJTaG9wUnV0IiwicHJvZmlsZSIsIlNldHRpbmdzIiwidGhlX2NhbyIsIkdpZnRDb2RlIiwiREV2ZW50IiwiUG9rZXJOYXAiLCJ4Mk5hcCIsImlNZXNzYWdlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiRm9yR290UGFzcyIsInNob3BSdXQiLCJzZXR0aW5ncyIsImluaXQiLCJhY3Rpb25TaG93Iiwic3Bhd24iLCJzY2FsZVRvIiwiZWFzaW5nIiwiZWFzZUJhY2tPdXQiLCJmYWRlVG8iLCJvYmpTaG93Iiwib2JqVG1wIiwib25DbGlja0JhY2siLCJSZWRUIiwiYXVkaW8iLCJwbGF5VW5DbGljayIsIm9uQmFjayIsInByZXZpb3VzIiwiYWN0aXZlIiwibm9kZSIsIm9uQ2xvc2VQcmV2aW91cyIsIm9iaiIsIm9uQ2xvc2VEaWFsb2ciLCJyZXNldFNpemVEaWFsb2ciLCJzdG9wQWxsQWN0aW9ucyIsInNjYWxlIiwib3BhY2l0eSIsInNob3dTaWduSW4iLCJzaG93U2lnbkluVG9VcCIsInNob3dTaWduVXAiLCJzaG93Rm9yR290UGFzcyIsInNob3dTaWduTmFtZSIsInNob3dTaG9wIiwiZXZlbnQiLCJuYW1lIiwiSVNfTE9HSU4iLCJzdXBlclZpZXciLCJzaG93U2hvcFJ1dCIsInNob3dQcm9maWxlIiwic2hvd1NldHRpbmciLCJzaG93R2lmdENvZGUiLCJzaG93REV2ZW50Iiwic2hvd1Bva2VyTmFwIiwic2hvd2lNZXNzYWdl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QVQsRUFBYTtBQUMxQixPQUFLRixJQUFMLENBQVVELE1BQVYsR0FBbUIsS0FBS3hCLFFBQUwsQ0FBY3lCLElBQWQsQ0FBbUJELE1BQW5CLEdBQTRCLElBQS9DO0FBQ0EsT0FBS1IsT0FBTCxHQUFtQixLQUFLaEIsUUFBTCxDQUFjeUIsSUFBakM7QUFDQSxFQWxLTztBQW1LUnlCLFlBbktRLHlCQW1LSztBQUNaLE1BQUlqRCxHQUFHa0IsSUFBSCxDQUFRc0IsUUFBWixFQUFzQjtBQUNyQixRQUFLaEIsSUFBTCxDQUFVRCxNQUFWLEdBQW1CLEtBQUt6QixLQUFMLENBQVcwQixJQUFYLENBQWdCRCxNQUFoQixHQUF5QixJQUE1QztBQUNBLFFBQUtSLE9BQUwsR0FBbUIsS0FBS2pCLEtBQUwsQ0FBVzBCLElBQTlCO0FBQ0E7QUFDRDtBQXhLTyxDQUFUIiwiZmlsZSI6IkRpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgc2lnbkluICAgICA9IHJlcXVpcmUoJ1NpZ25JbicpLFxyXG5cdHNpZ25VcCAgICAgPSByZXF1aXJlKCdTaWduVXAnKSxcclxuXHRmb3JHb3RQYXNzID0gcmVxdWlyZSgnRm9yR290UGFzcycpLFxyXG5cdHNpZ25OYW1lICAgPSByZXF1aXJlKCdTaWduTmFtZScpLFxyXG5cdHNob3AgICAgICAgPSByZXF1aXJlKCdTaG9wJyksXHJcblx0U2hvcFJ1dCAgICAgICA9IHJlcXVpcmUoJ1Nob3BSdXQnKSxcclxuXHRwcm9maWxlICAgID0gcmVxdWlyZSgnUHJvZmlsZScpLFxyXG5cdFNldHRpbmdzICAgPSByZXF1aXJlKCdTZXR0aW5ncycpLFxyXG5cdHRoZV9jYW8gICAgPSByZXF1aXJlKCdUaGVDYW8nKSxcclxuXHRHaWZ0Q29kZSAgID0gcmVxdWlyZSgnR2lmdENvZGUnKSxcclxuXHRERXZlbnQgICAgID0gcmVxdWlyZSgnREV2ZW50JyksXHJcblx0UG9rZXJOYXAgICA9IHJlcXVpcmUoJ1Bva2VyTmFwJyksXHJcblx0eDJOYXAgICA9IHJlcXVpcmUoJ3gyTmFwJyksXHJcblx0aU1lc3NhZ2UgID0gcmVxdWlyZSgnaU1lc3NhZ2UnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0c2lnbkluOiAgICAgc2lnbkluLFxyXG5cdFx0c2lnblVwOiAgICAgc2lnblVwLFxyXG5cdFx0Rm9yR290UGFzczogZm9yR290UGFzcyxcclxuXHRcdHNpZ25OYW1lOiAgIHNpZ25OYW1lLFxyXG5cdFx0c2hvcDogICAgICAgc2hvcCxcclxuXHRcdHNob3BSdXQ6ICAgIFNob3BSdXQsXHJcblx0XHRwcm9maWxlOiAgICBwcm9maWxlLFxyXG5cdFx0dGhlX2NhbzogICAgdGhlX2NhbyxcclxuXHRcdHNldHRpbmdzOiAgIFNldHRpbmdzLFxyXG5cdFx0R2lmdENvZGU6ICAgR2lmdENvZGUsXHJcblx0XHRERXZlbnQ6ICAgICBERXZlbnQsXHJcblx0XHRQb2tlck5hcDogICBQb2tlck5hcCxcclxuXHRcdGlNZXNzYWdlOiAgaU1lc3NhZ2UsXHJcblx0XHR4Mk5hcDp4Mk5hcFxyXG5cdH0sXHJcblx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmFjdGlvblNob3cgPSBjYy5zcGF3bihjYy5zY2FsZVRvKDAuNSwgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KDIuNSkpLCBjYy5mYWRlVG8oMC41LCAyNTUpKTtcclxuXHRcdHRoaXMub2JqU2hvdyAgICA9IG51bGw7XHJcblx0XHR0aGlzLm9ialRtcCAgICAgPSBudWxsO1xyXG5cdFx0dGhpcy5zaG9wLmluaXQoKTtcclxuXHRcdHRoaXMuc2hvcFJ1dC5pbml0KCk7XHJcblx0XHR0aGlzLnByb2ZpbGUuaW5pdCgpO1xyXG5cdFx0dGhpcy50aGVfY2FvLmluaXQoKTtcclxuXHQgICAgIFxyXG5cdFx0XHJcblx0fSxcclxuXHJcblx0b25DbGlja0JhY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlVbkNsaWNrKCk7XHJcblx0XHR0aGlzLm9uQmFjaygpO1xyXG5cdH0sXHJcblx0b25CYWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5vYmpTaG93ICE9IG51bGwpe1xyXG5cdFx0XHRpZih2b2lkIDAgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzIHx8IG51bGwgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzKXtcclxuXHRcdFx0XHR0aGlzLm9ialNob3cuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSAgICA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMub2JqU2hvdyAgICAgICAgPSBudWxsO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLm9ialRtcCAgICAgICAgICAgICAgPSB0aGlzLm9ialNob3c7XHJcblx0XHRcdFx0dGhpcy5vYmpTaG93ICAgICAgICAgICAgID0gdGhpcy5vYmpTaG93LnByZXZpb3VzO1xyXG5cdFx0XHRcdHRoaXMub2JqVG1wLnByZXZpb3VzICAgICA9IG51bGw7XHJcblx0XHRcdFx0dGhpcy5vYmpUbXAuYWN0aXZlICAgICAgID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5vYmpTaG93LmFjdGl2ZSAgICAgID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLm9ialRtcCAgICAgICAgICAgICAgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25DbG9zZVByZXZpb3VzOiBmdW5jdGlvbihvYmope1xyXG5cdFx0aWYodm9pZCAwICE9PSBvYmoucHJldmlvdXMgJiYgbnVsbCAhPT0gb2JqLnByZXZpb3VzKXtcclxuXHRcdFx0dGhpcy5vbkNsb3NlUHJldmlvdXMob2JqLnByZXZpb3VzKTtcclxuXHRcdFx0ZGVsZXRlIG9iai5wcmV2aW91cztcclxuXHRcdFx0Ly9vYmoucHJldmlvdXMgPSBudWxsO1xyXG5cdFx0fVxyXG5cdFx0b2JqLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdH0sXHJcblx0b25DbG9zZURpYWxvZzogZnVuY3Rpb24oKXtcclxuXHRcdGlmKHRoaXMub2JqU2hvdyAhPSBudWxsKXtcclxuXHRcdFx0aWYodm9pZCAwID09IHRoaXMub2JqU2hvdy5wcmV2aW91cyB8fCBudWxsID09IHRoaXMub2JqU2hvdy5wcmV2aW91cyl7XHJcblx0XHRcdFx0dGhpcy5vYmpTaG93LmFjdGl2ZSA9IHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm9ialNob3cgICAgICAgID0gbnVsbDtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5vbkNsb3NlUHJldmlvdXModGhpcy5vYmpTaG93LnByZXZpb3VzKTtcclxuXHRcdFx0XHR0aGlzLm9ialNob3cuYWN0aXZlICAgICAgICAgID0gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLm9ialNob3cucHJldmlvdXM7XHJcblx0XHRcdFx0Ly90aGlzLm9ialNob3cucHJldmlvdXMgICAgICAgID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLm9ialNob3cgICAgICAgICAgICAgICAgID0gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdHJlc2V0U2l6ZURpYWxvZzogZnVuY3Rpb24obm9kZSl7XHJcblx0XHRub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblx0XHRub2RlLnNjYWxlICAgPSAwLjU7XHJcblx0XHRub2RlLm9wYWNpdHkgPSAwO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uIFNob3cgRGlhbG9nXHJcblx0Ki9cclxuXHRzaG93U2lnbkluOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuc2lnbkluLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLnNpZ25Jbi5ub2RlO1xyXG5cdH0sXHJcblx0c2hvd1NpZ25JblRvVXA6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm9ialNob3cuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLnNpZ25VcC5ub2RlLnByZXZpb3VzID0gdGhpcy5vYmpTaG93O1xyXG5cdFx0dGhpcy5zaG93U2lnblVwKCk7XHJcblx0fSxcclxuXHRzaG93U2lnblVwOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuc2lnblVwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLnNpZ25VcC5ub2RlO1xyXG5cdH0sXHJcblx0c2hvd0ZvckdvdFBhc3M6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm9ialNob3cuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLkZvckdvdFBhc3Mubm9kZS5wcmV2aW91cyA9IHRoaXMub2JqU2hvdztcclxuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSB0aGlzLkZvckdvdFBhc3Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5vYmpTaG93ICAgICA9IHRoaXMuRm9yR290UGFzcy5ub2RlO1xyXG5cdH0sXHJcblx0c2hvd1NpZ25OYW1lOiBmdW5jdGlvbigpe1xyXG5cdFx0XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlICAgICAgICA9IHRoaXMuc2lnbk5hbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5zaWduVXAubm9kZS5hY3RpdmUgPSB0aGlzLnNpZ25Jbi5ub2RlLmFjdGl2ZSAgID0gZmFsc2U7XHJcblx0XHR0aGlzLm9ialNob3cgICAgICAgICAgICA9IHRoaXMuc2lnbk5hbWUubm9kZTtcclxuXHR9LFxyXG4gICAgc2hvd1Nob3A6IGZ1bmN0aW9uIChldmVudCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChjYy5SZWRULklTX0xPR0lOKSB7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5zaG9wLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLnNob3Aubm9kZTtcclxuICAgICAgICAgICAgdGhpcy5zaG9wLnN1cGVyVmlldyhuYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTaWduSW4oKTtcclxuICAgICAgICB9XHJcblx0fSxcclxuXHRzaG93U2hvcFJ1dDogZnVuY3Rpb24gKGV2ZW50LCBuYW1lKSB7XHJcbiAgICAgICAgaWYgKGNjLlJlZFQuSVNfTE9HSU4pIHtcclxuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSB0aGlzLnNob3BSdXQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5vYmpTaG93ICAgICA9IHRoaXMuc2hvcFJ1dC5ub2RlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3BSdXQuc3VwZXJWaWV3KG5hbWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZ25JbigpO1xyXG4gICAgICAgIH1cclxuXHR9LFxyXG5cdHNob3dQcm9maWxlOiBmdW5jdGlvbihldmVudCwgbmFtZSl7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5wcm9maWxlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLnByb2ZpbGUubm9kZTtcclxuXHRcdHRoaXMucHJvZmlsZS5zdXBlclZpZXcobmFtZSk7XHJcblx0fSxcclxuXHRzaG93U2V0dGluZzogZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuc2V0dGluZ3Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5vYmpTaG93ICAgICA9IHRoaXMuc2V0dGluZ3Mubm9kZTtcclxuXHR9LFxyXG5cdHNob3dHaWZ0Q29kZTogZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0aWYgKGNjLlJlZFQuSVNfTE9HSU4pIHtcclxuXHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuR2lmdENvZGUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm9ialNob3cgICAgID0gdGhpcy5HaWZ0Q29kZS5ub2RlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuc2hvd1NpZ25JbigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2hvd0RFdmVudDogZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0aWYgKGNjLlJlZFQuSVNfTE9HSU4pIHtcclxuXHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuREV2ZW50Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5vYmpTaG93ICAgICA9IHRoaXMuREV2ZW50Lm5vZGU7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zaG93U2lnbkluKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzaG93UG9rZXJOYXA6IGZ1bmN0aW9uKG9iail7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5Qb2tlck5hcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLm9ialNob3cgICAgID0gdGhpcy5Qb2tlck5hcC5ub2RlO1xyXG5cdFx0dGhpcy5Qb2tlck5hcC5pbml0KG9iaik7XHJcblx0fSxcclxuXHRzaG93aU1lc3NhZ2U6IGZ1bmN0aW9uKG9iail7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5pTWVzc2FnZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLm9ialNob3cgICAgID0gdGhpcy5pTWVzc2FnZS5ub2RlO1xyXG5cdH0sXHJcblx0c2hvd0V2ZW50WDIoKXtcclxuXHRcdGlmIChjYy5SZWRULklTX0xPR0lOKSB7XHJcblx0XHRcdHRoaXMubm9kZS5hY3RpdmUgPSB0aGlzLngyTmFwLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5vYmpTaG93ICAgICA9IHRoaXMueDJOYXAubm9kZTtcclxuXHRcdH1cclxuXHR9XHJcbn0pO1xyXG4iXX0=