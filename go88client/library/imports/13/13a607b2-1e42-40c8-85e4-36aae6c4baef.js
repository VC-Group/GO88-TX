"use strict";
cc._RF.push(module, '13a60eyHkJAyIXkNqrmxLrv', 'Mini3Cay');
// Script/Game/Mini3Cay/Mini3Cay.js

'use strict';

var helper = require('Helper');
var Mini3Cay_reel = require('Mini3Cay_reel');

cc.Class({
	extends: cc.Component,

	properties: {
		background: cc.Node,
		buttonSpin: cc.Node,
		buttonAuto: cc.Node,
		buttonSpeed: cc.Node,
		buttonStop: cc.Node,
		buttonAutoDot: cc.Node,
		buttonSpeedDot: cc.Node,
		reels: {
			default: [],
			type: Mini3Cay_reel
		},

		bet: cc.Node,
		notice: cc.Node,
		prefabNotice: cc.Prefab,
		cardf: cc.Prefab,
		cuoc: "",
		hu: cc.Label,
		isAuto: false,
		isSpeed: false,
		isSpin: false
	},
	init: function init(obj) {
		this.RedT = obj;
		this.LichSu = obj.Dialog.Mini3Cay_history;
		this.Top = obj.Dialog.Mini3Cay_top;
		cc.RedT.setting.mini3cay = cc.RedT.setting.mini3cay || { scale: 1 };

		var check = localStorage.getItem('mini3cay');
		if (check == "true") {
			this.node.active = true;
		}
		if (void 0 !== cc.RedT.setting.mini3cay.position) {
			this.node.position = cc.RedT.setting.mini3cay.position;
		}
		if (void 0 !== cc.RedT.setting.mini3cay.bet && cc.RedT.setting.mini3cay.bet != this.cuoc) {
			this.intChangerBet();
		}
		if (void 0 !== cc.RedT.setting.mini3cay.isSpeed && this.isSpeed != cc.RedT.setting.mini3cay.isSpeed) {
			this.onClickSpeed();
		}
		if (void 0 !== cc.RedT.setting.mini3cay.isAuto && this.isAuto != cc.RedT.setting.mini3cay.isAuto) {
			this.onClickAuto();
		}
	},
	onLoad: function onLoad() {
		this.ttOffset = null;
		var self = this;
		this.reels.forEach(function (reel) {
			reel.init(self);
		});
	},

	onEnable: function onEnable() {
		this.onGetHu();
		this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
		// this.background.on(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);
	},
	onDisable: function onDisable() {
		this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
		// this.background.off(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);
		this.onCloseGame();
	},
	eventStart: function eventStart(e) {
		this.setTop();
		this.ttOffset = cc.v2(e.touch.getLocationX() - this.node.position.x, e.touch.getLocationY() - this.node.position.y);
	},
	eventMove: function eventMove(e) {
		this.node.position = cc.v2(e.touch.getLocationX() - this.ttOffset.x, e.touch.getLocationY() - this.ttOffset.y);
	},
	eventEnd: function eventEnd() {
		cc.RedT.setting.mini3cay.position = this.node.position;
	},
	openGame: function openGame() {
		this.playClick();
		if (cc.RedT.IS_LOGIN) {
			this.node.active = !0;
			localStorage.setItem('mini3cay', true);
			this.setTop();
		} else cc.RedT.inGame.dialog.showSignIn();
	},
	closeGame: function closeGame() {
		cc.RedT.audio.playUnClick();
		this.node.active = !1;
		localStorage.setItem('mini3cay', false);
	},
	setTop: function setTop() {
		cc.RedT.setting.mini3cay.scale = 1;
		this.node.parent.insertChild(this.node);
		this.RedT.setTop(this.node);
	},
	intChangerBet: function intChangerBet() {
		var self = this;
		this.bet.children.forEach(function (obj) {
			if (obj.name == cc.RedT.setting.mini3cay.bet) {
				self.cuoc = obj.name;
				obj.children[0].active = true;
				obj.pauseSystemEvents();
			} else {
				obj.children[0].active = false;
				obj.resumeSystemEvents();
			}
		});
	},
	changerBet: function changerBet(event, bet) {
		this.cuoc = cc.RedT.setting.mini3cay.bet = bet;
		var target = event.target;
		this.bet.children.forEach(function (obj) {
			if (obj == target) {
				obj.children[0].active = true;
				obj.pauseSystemEvents();
			} else {
				obj.children[0].active = false;
				obj.resumeSystemEvents();
			}
		});
		this.onGetHu();
	},
	playClick: function playClick() {
		cc.RedT.audio.playClick();
	},
	onClickSpeed: function onClickSpeed() {
		this.isSpeed = cc.RedT.setting.mini3cay.isSpeed = !this.isSpeed;
		this.buttonSpeedDot.active = !this.buttonSpeedDot.active;
		this.buttonSpeed.color = this.isSpeed ? cc.Color.WHITE : this.buttonSpeed.color.fromHEX('#A0A0A0');
	},
	onClickAuto: function onClickAuto() {
		this.isAuto = cc.RedT.setting.mini3cay.isAuto = !this.isAuto;
		this.buttonAutoDot.active = !this.buttonAutoDot.active;
		this.buttonAuto.color = this.isAuto ? cc.Color.WHITE : this.buttonAuto.color.fromHEX('#A0A0A0');
		this.buttonStop.active = this.isSpin ? this.isAuto ? true : false : false;
	},
	onClickStop: function onClickStop() {
		this.onClickAuto();
		this.buttonStop.active = false;
	},
	onClickSpin: function onClickSpin() {
		if (!this.isSpin) {
			this.isSpin = true;
			this.onSpin();
			this.sendSpin();
		}
	},
	sendSpin: function sendSpin() {
		cc.RedT.send({ g: { mini3cay: { spin: { cuoc: this.cuoc } } } });
	},
	random: function random() {
		var newG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		this.reels.forEach(function (reel) {
			reel.random(newG);
		});
	},
	autoSpin: function autoSpin() {
		this.random();
		this.reels.forEach(function (reel, index) {
			reel.spin(index);
		});
	},
	onSpin: function onSpin() {
		this.buttonSpin.pauseSystemEvents();
		this.bet.children.forEach(function (bet) {
			bet.pauseSystemEvents();
		});
	},
	offSpin: function offSpin() {
		this.isSpin = this.buttonStop.active = false;
		this.buttonSpin.resumeSystemEvents();
		this.bet.children.forEach(function (bet) {
			if (!bet.children[0].active) bet.resumeSystemEvents();
		});
	},
	addNotice: function addNotice(text) {
		var notice = cc.instantiate(this.prefabNotice);
		var noticeComponent = notice.getComponent('mini_warning');
		noticeComponent.text.string = text;
		this.notice.addChild(notice);
	},
	onCloseGame: function onCloseGame() {
		this.isSpin = false;
		this.reels.forEach(function (reel) {
			reel.stop();
		});
		this.offSpin();
		void 0 !== this.timeOut && clearTimeout(this.timeOut);
	},
	onData: function onData(data) {
		var self = this;
		if (void 0 !== data.status) {
			if (data.status === 1) {
				this.buttonStop.active = this.isAuto ? true : false;
				if (void 0 !== data.win && data.win > 0) {
					this.win = data.win;
					this.winC = data.code;
					this.winT = data.text;
				} else {
					this.win = 0;
				}
				data.card.forEach(function (card, index) {
					self.reels[index].card[0].spriteFrame = cc.RedT.util.card.getCard(card.card, card.type);
				});
				this.autoSpin();
			} else {
				this.offSpin();
			}
		}
		if (void 0 !== data.logs) {
			this.LichSu.onData(data.logs);
		}
		if (void 0 !== data.tops) {
			this.Top.onData(data.tops);
		}
		if (void 0 !== data.notice) {
			this.addNotice(data.notice);
		}
	},
	hieuUng: function hieuUng() {
		if (void 0 !== this.win && this.win > 0) {
			if (this.winC == 6) {
				// Nổ Hũ
				this.winC = 0;
				if (this.isAuto == true) {
					this.onClickStop();
				}

				var nohu = cc.instantiate(this.RedT.PrefabNoHu);
				nohu = nohu.getComponent(cc.Animation);
				var text = nohu.node.children[6].getComponent(cc.Label);

				var Play = function Play() {
					var huong = cc.callFunc(function () {
						cc.RedT.audio.playEf('winHu');
						helper.numberTo(text, 0, this.win, 1000, true);
						this.win = 0;
					}, this);
					nohu.node.runAction(cc.sequence(cc.delayTime(0.25), huong));
				};

				var Finish = function Finish() {
					nohu.node.destroy();
					this.hieuUng();
				};
				this.RedT.nodeEfect.addChild(nohu.node);
				nohu.on('play', Play, this);
				nohu.on('finished', Finish, this);
				nohu.play();
			} else if (this.winC == 5 || this.winC == 4) {
				// Thắng lớn
				var BigWin = cc.instantiate(this.RedT.prefabBigWin);
				BigWin = BigWin.getComponent(cc.Animation);
				var BigWinFinish = function BigWinFinish() {
					BigWin.node.destroy();
					this.hieuUng();
				};
				BigWin.on('finished', BigWinFinish, this);
				BigWin.node.bet = this.win;
				BigWin.node.position = cc.v2(0, 70);
				this.notice.addChild(BigWin.node);
				this.win = this.winC == 0;
			} else {
				var temp = new cc.Node();
				temp.addComponent(cc.Label);
				temp = temp.getComponent(cc.Label);
				temp.string = '+' + helper.numberWithCommas(this.win);
				temp.font = cc.RedT.util.fontCong;
				temp.lineHeight = 130;
				temp.fontSize = 23;
				temp.node.position = cc.v2(0, 37);
				this.notice.addChild(temp.node);
				temp.node.runAction(cc.sequence(cc.moveTo(this.isSpeed ? 2 : 3.5, cc.v2(0, 100)), cc.callFunc(function () {
					temp.node.destroy();
					this.hieuUng();
				}, this)));
				this.addNotice(this.winT);
				this.win = 0;
			}
		} else {
			if (this.isAuto) {
				this.timeOut = setTimeout(function () {
					this.sendSpin();
				}.bind(this), this.isSpeed ? 250 : 1000);
			} else {
				this.offSpin();
			}
		}
	},
	onGetHu: function onGetHu() {
		if (this.node.active && void 0 !== cc.RedT.setting.topHu.data) {
			var result = cc.RedT.setting.topHu.data['mini3cay'].filter(function (temp) {
				return temp.type == this.cuoc;
			}.bind(this));
			var s = helper.getOnlyNumberInString(this.hu.string);
			var bet = result[0].bet;
			if (s - bet != 0) {
				helper.numberTo(this.hu, s, bet, 2000, true);
			}
		}
	},
	speed: function speed() {
		return this.isSpeed ? 1.2 : 2.5;
	}
});

cc._RF.pop();