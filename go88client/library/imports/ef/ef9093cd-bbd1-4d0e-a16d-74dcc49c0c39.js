"use strict";
cc._RF.push(module, 'ef909PNu9FNDqFtdNzEnAw5', 'MiniPoker');
// Script/Game/MiniPoker/MiniPoker.js

'use strict';

var helper = require('Helper');
var MiniPoker_reel = require('MiniPoker_reel');

cc.Class({
	extends: cc.Component,

	properties: {
		background: cc.Node,
		buttonSpin: cc.Node,
		buttonAuto: cc.Node,
		buttonSpeed: cc.Node,
		buttonStop: cc.Node,
		reels: {
			default: [],
			type: MiniPoker_reel
		},
		font: cc.BitmapFont,
		bet: cc.Node,
		notice: cc.Node,
		card: cc.Prefab,
		cardf: cc.Prefab,
		phien: cc.Label,
		hu: cc.Label,
		cuoc: "",
		isAuto: false,
		isSpeed: false,
		isSpin: false
	},
	init: function init(obj) {
		this.RedT = obj;
		this.Top = obj.Dialog.MiniPoker_Top;
		this.LichSu = obj.Dialog.MiniPoker_LichSu;
		cc.RedT.setting.minipoker = cc.RedT.setting.minipoker || { scale: 1, bet: this.cuoc };

		this.node.runScale = false;

		this.card.data.getComponent('Card').config();

		var check = localStorage.getItem('minipoker');
		if (check == "true") {
			this.node.active = true;
		}

		if (void 0 === cc.RedT.util.fontEffect) {
			cc.RedT.util.fontEffect = this.font;
		}
		if (void 0 !== cc.RedT.setting.minipoker.position) {
			this.node.position = cc.RedT.setting.minipoker.position;
		}

		if (void 0 !== cc.RedT.setting.minipoker.bet && cc.RedT.setting.minipoker.bet != this.cuoc) {
			this.intChangerBet();
		}
		if (void 0 !== cc.RedT.setting.minipoker.isSpeed && this.isSpeed != cc.RedT.setting.minipoker.isSpeed) {
			this.onClickSpeed();
		}
		if (void 0 !== cc.RedT.setting.minipoker.isAuto && this.isAuto != cc.RedT.setting.minipoker.isAuto) {
			this.onClickAuto();
		}
	},
	onLoad: function onLoad() {
		var self = this;
		this.data = null;
		this.ttOffset = null;

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
		cc.RedT.setting.minipoker.position = this.node.position;
	},
	openGame: function openGame() {
		cc.RedT.audio.playClick();
		if (cc.RedT.IS_LOGIN) {
			this.node.active = !0;
			localStorage.setItem('minipoker', true);
			this.setTop();
		} else cc.RedT.inGame.dialog.showSignIn();
	},
	closeGame: function closeGame() {
		cc.RedT.audio.playUnClick();
		this.node.active = !1;
		localStorage.setItem('minipoker', false);
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
		this.isSpin = false;
		this.buttonStop.active = this.isSpin ? this.isAuto ? true : false : false;
		this.buttonSpin.resumeSystemEvents();
		this.bet.children.forEach(function (bet) {
			if (bet.children[0].active) {
				bet.resumeSystemEvents();
			}
		});
	},
	spin: function spin(event) {
		if (!this.isSpin) {
			this.isSpin = true;
			this.onSpin();
			this.onGetSpin();
		}
	},
	onClickSpeed: function onClickSpeed() {
		this.isSpeed = cc.RedT.setting.minipoker.isSpeed = !this.isSpeed;
		this.buttonSpeed.color = this.isSpeed ? cc.Color.WHITE : cc.color(136, 136, 136);
	},
	onClickAuto: function onClickAuto() {
		this.isAuto = cc.RedT.setting.minipoker.isAuto = !this.isAuto;
		this.buttonAuto.color = this.isAuto ? cc.Color.WHITE : cc.color(136, 136, 136);
		this.buttonStop.active = this.isSpin ? this.isAuto ? true : false : false;
	},
	onClickStop: function onClickStop() {
		this.onClickAuto();
		this.buttonStop.active = false;
	},
	intChangerBet: function intChangerBet() {
		this.bet.children.forEach(function (obj) {
			if (obj.name === cc.RedT.setting.minipoker.bet) {
				this.cuoc = obj.name;
				obj.children[0].active = false;
				obj.children[1].active = true;
				obj.pauseSystemEvents();
			} else {
				obj.children[0].active = true;
				obj.children[1].active = false;
				obj.resumeSystemEvents();
			}
		}.bind(this));
	},
	changerBet: function changerBet(event, bet) {
		this.cuoc = cc.RedT.setting.minipoker.bet = event.target.name;
		this.bet.children.forEach(function (obj) {
			if (obj.name === this.cuoc) {
				obj.children[0].active = false;
				obj.children[1].active = true;
				obj.pauseSystemEvents();
			} else {
				obj.children[0].active = true;
				obj.children[1].active = false;
				obj.resumeSystemEvents();
			}
		}.bind(this));
		this.onGetHu();
	},
	speed: function speed() {
		return this.isSpeed ? 1.2 : 2.5;
	},
	onData: function onData(data) {
		var self = this;
		if (void 0 !== data.status) {
			if (data.status === 1) {
				this.buttonStop.active = this.isAuto ? true : false;
				this.win = data.win;
				this.winT = data.text;
				this.winC = data.code;
				data.card.forEach(function (card, index) {
					self.reels[index].card[0].spriteFrame = cc.RedT.util.card.getCard(card.card, card.type);
				});
				this.autoSpin();
			} else {
				this.offSpin();
			}
		}
		if (void 0 !== data.phien) {
			this.phien.string = "#" + data.phien;
		}
		if (void 0 !== data.log) {
			this.LichSu.onData(data.log);
		}
		if (void 0 !== data.top) {
			this.Top.onData(data.top);
		}
		if (void 0 !== data.notice) {
			this.addNotice(data.notice);
		}
	},
	addNotice: function addNotice(text) {
		var notice = cc.instantiate(this.RedT.prefabMiniNotice);
		var noticeComponent = notice.getComponent('mini_warning');
		noticeComponent.text.string = text;
		this.notice.addChild(notice);
	},
	setTop: function setTop() {
		cc.RedT.setting.minipoker.scale = 1;
		this.node.parent.insertChild(this.node);
		this.RedT.setTop(this.node);
	},
	hieuUng: function hieuUng() {
		if (this.win > 0) {
			if (this.winC === 2) {
				// Nổ Hũ
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
			} else if (this.winC === 1) {
				// Thắng lớn
				var BigWin = cc.instantiate(this.RedT.prefabBigWin);
				BigWin = BigWin.getComponent(cc.Animation);
				var BigWinFinish = function BigWinFinish() {
					BigWin.node.destroy();
					this.hieuUng();
				};
				BigWin.on('finished', BigWinFinish, this);
				BigWin.node.bet = this.win;
				BigWin.node.position = cc.v2(0, 80);
				this.notice.addChild(BigWin.node);
				this.win = 0;
			} else {
				var temp = new cc.Node();
				temp.addComponent(cc.Label);
				temp = temp.getComponent(cc.Label);
				temp.string = '+' + helper.numberWithCommas(this.win);
				temp.font = cc.RedT.util.fontCong;
				temp.lineHeight = 130;
				temp.fontSize = 20;
				this.notice.addChild(temp.node);
				temp.node.runAction(cc.sequence(cc.moveTo(this.isSpeed ? 2 : 3.5, cc.v2(0, 140)), cc.callFunc(function () {
					temp.node.destroy();
					this.hieuUng();
				}, this)));
				this.addNotice(this.winT);
				this.win = 0;
			}
			this.winC = 0;
		} else {
			if (this.isAuto) {
				this.timeOut = setTimeout(function () {
					this.onGetSpin();
				}.bind(this), this.isSpeed ? 250 : 1000);
			} else {
				this.offSpin();
			}
		}
	},
	onGetHu: function onGetHu() {
		if (this.node.active && void 0 !== cc.RedT.setting.topHu.data) {
			var result = cc.RedT.setting.topHu.data['mini_poker'].filter(function (temp) {
				return temp.type == this.cuoc;
			}.bind(this));
			var s = helper.getOnlyNumberInString(this.hu.string);
			var bet = result[0].bet;
			if (s - bet != 0) {
				helper.numberTo(this.hu, s, bet, 2000, true);
			}
		}
	},
	onGetSpin: function onGetSpin() {
		cc.RedT.send({ g: { mini_poker: { spin: { cuoc: this.cuoc } } } });
	},
	onCloseGame: function onCloseGame() {
		this.isSpin = false;
		this.reels.forEach(function (reel) {
			reel.stop();
		});
		this.offSpin();
		void 0 !== this.timeOut && clearTimeout(this.timeOut);
	}
});

cc._RF.pop();