"use strict";
cc._RF.push(module, 'b952dHT2VlLw4NR3GRh7bnP', 'BanCa_dialog');
// Script/Game/BanCa/BanCa_dialog.js

'use strict';

var Fish_nap = require('Fish_nap');
var Fish_history = require('Fish_history');
var Fish_setting = require('Fish_setting');

cc.Class({
	extends: cc.Component,
	properties: {
		Fish_nap: Fish_nap,
		Fish_history: Fish_history,
		Fish_fish: cc.Node,
		Fish_setting: Fish_setting
	},
	init: function init() {
		this.actionShow = cc.spawn(cc.scaleTo(0.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(0.5, 255));
		this.objShow = null;
		this.objTmp = null;
		this.Fish_setting.init();
	},

	onClickBack: function onClickBack() {
		cc.RedT.inGame.playClick();
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
	showNap: function showNap() {
		var back = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		this.node.active = this.Fish_nap.node.active = true;
		this.objShow = this.Fish_nap.node;
		if (back === true) {
			this.Fish_nap.outGame = true;
		}
	},
	showHistory: function showHistory() {
		this.node.active = this.Fish_history.node.active = true;
		this.objShow = this.Fish_history.node;
	},
	showFish: function showFish() {
		this.node.active = this.Fish_fish.active = true;
		this.objShow = this.Fish_fish;
	},
	showSetting: function showSetting() {
		this.node.active = this.Fish_setting.node.active = true;
		this.objShow = this.Fish_setting.node;
	}
});

cc._RF.pop();