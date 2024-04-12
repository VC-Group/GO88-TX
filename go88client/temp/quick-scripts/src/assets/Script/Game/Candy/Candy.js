"use strict";
cc._RF.push(module, '51097oLSzpFtZ9xj7eGzl0G', 'Candy');
// Script/Game/Candy/Candy.js

'use strict';

var helper = require('Helper'),
    reel = require('Candy_reel'),
    Line = require('Candy_line'),
    gameBonus = require('Candy_playBonus'),
    notice = require('Notice'),
    dialog = require('Candy_dialog');

cc.Class({
	extends: cc.Component,

	properties: {
		gameBonus: gameBonus,
		redhat: cc.Node,
		reels: {
			default: [],
			type: reel
		},
		icon: cc.Prefab,
		icons: {
			default: [],
			type: cc.SpriteFrame
		},
		FrameAuto: {
			default: [],
			type: cc.SpriteFrame
		},

		betString: {
			default: [],
			type: cc.String
		},

		nodeNotice: cc.Node,
		prefabNotice: cc.Prefab,
		loading: cc.Node,

		notice: notice,
		dialog: dialog,
		Line: Line,
		hu: cc.Label,
		taikhoan: cc.Label,
		tong: cc.Label,
		vuathang: cc.Label,
		labelLine: cc.Label,
		bet: cc.Label,
		freeLabel: cc.Label,
		nodeFree: cc.Node,

		BigWin: cc.Animation,
		BigWin_Label: cc.Label,
		NoHu_close: cc.Node,
		NoHu: cc.Animation,
		NoHu_Label: cc.Label,
		EF_Bonus: cc.Animation,
		EF_Free: cc.Animation,

		buttonLine: cc.Node,
		buttonSpin: cc.Node,
		nodeChangerBetL: cc.Node,
		nodeChangerBetR: cc.Node,

		skeleSpin: sp.Skeleton,

		buttonAuto: cc.Sprite,

		isAuto: false,
		isSpin: false,
		isFreeSpin: false,
		betSelect: 0
	},
	onLoad: function onLoad() {
		cc.RedT.inGame = this;
		cc.RedT.MiniPanel.node.parent = this.redhat;

		this.Line.init(this);
		this.gameBonus.init(this);
		//this.dialog.init();

		this.BigWin.on('finished', this.BigWinFinish, this);
		this.BigWin.on('play', this.BigWinPlay, this);
		this.NoHu.on('finished', this.NoHuFinish, this);
		this.NoHu.on('play', this.NoHuPlay, this);

		this.EF_Bonus.on('finished', this.EF_BonusFinish, this);
		this.EF_Free.on('finished', this.EF_FreeFinish, this);

		this.reels.forEach(function (reel) {
			reel.init(this);
		}.bind(this));

		cc.RedT.send({ scene: "candy" });
		this.taikhoan.string = helper.numberWithCommas(cc.RedT.user.red);
		this.speed = 400;

		//if(cc.RedT.isSoundBackground()){
		//cc.RedT.setSoundBackground(true);
		//this.playMusic();
		//}
	},

	BigWinPlay: function BigWinPlay() {
		var huong = cc.callFunc(function () {
			cc.RedT.audio.playEf('megaWin');
			helper.numberTo(this.BigWin_Label, 0, this.H_win, 2000, true);
		}, this);
		this.BigWin.node.runAction(cc.sequence(cc.delayTime(0.3), huong));
	},
	BigWinFinish: function BigWinFinish() {
		this.isBigWin = false;
		this.BigWin.node.active = false;
		this.BigWin_Label.string = "";
		this.showLineWin(false);
		this.hieuUng();
	},
	NoHuPlay: function NoHuPlay() {
		this.NoHu_Label.string = "";
		var huong = cc.callFunc(function () {
			cc.RedT.audio.playEf('jackpot');
			helper.numberTo(this.NoHu_Label, 0, this.H_win, 2000, true);
		}, this);
		this.NoHu.node.runAction(cc.sequence(cc.delayTime(0.3), huong));
	},
	NoHuFinish: function NoHuFinish() {
		this.isNoHu = false;
		this.NoHu_close.active = true;
		if (this.isAuto) {
			this.onAuto();
		}
		this.showLineWin(false);
		this.hieuUng();
	},
	NoHuClose: function NoHuClose() {
		this.NoHu.node.active = this.NoHu_close.active = false;
	},
	EF_BonusFinish: function EF_BonusFinish() {
		this.isBonus = false;
		this.EF_Bonus.node.active = false;
		this.gameBonus.onPlay();
		this.showLineWin(false);
	},
	EF_FreeFinish: function EF_FreeFinish() {
		this.isFree = false;
		this.EF_Free.node.active = false;
		this.showLineWin(false);
		this.hieuUng();
	},
	onData: function onData(data) {
		if (void 0 !== data.user) {
			this.userData(data.user);
			cc.RedT.userData(data.user);
		}
		if (void 0 !== data.candy) {
			this.Candy(data.candy);
		}
		if (void 0 !== data.mini) {
			cc.RedT.MiniPanel.onData(data.mini);
		}
		if (void 0 !== data.TopHu) {
			cc.RedT.MiniPanel.TopHu.onData(data.TopHu);
		}
		if (void 0 !== data.taixiu) {
			cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(data.taixiu);
		}
		if (void 0 !== data.vipp) {
			cc.RedT.MiniPanel.Dialog.VipPoint.onData(data.vipp);
		}
	},
	userData: function userData(data) {
		this.taikhoan.string = helper.numberWithCommas(data.red);
	},
	Candy: function Candy(data) {
		if (void 0 !== data.status) {
			if (data.status === 1) {
				data.cel.forEach(function (cel, cel_index) {
					cel.forEach(function (icon, index) {
						this.reels[cel_index].icons[index].setIcon(icon, true);
					}.bind(this));
				}.bind(this));
				this.runReels();
				this.H_line_win = data.line_win;
				this.H_win = data.win;
				this.H_free = data.free;
				this.isBonus = data.isBonus;
				this.isNoHu = data.isNoHu;
				this.isBigWin = data.isBigWin;
				this.isFree = data.isFree;
				this.isFreeSpin = !!data.free;
			} else {
				this.resetSpin();
			}
		}
		if (!!data.bonus) {
			this.gameBonus.onData(data.bonus);
		}
		if (!!data.log) {
			this.dialog.history.onData(data.log);
		}
		if (!!data.top) {
			this.dialog.top.onData(data.top);
		}
		if (!!data.notice) {
			this.addNotice(data.notice);
		}
	},
	EF_vuathang: function EF_vuathang() {
		this.showLineWin(true);
		this.vuathang.string = helper.numberWithCommas(this.H_win);
		this.freeLabel.string = this.H_free;
		this.buttonSpin.active = !this.H_free;
		this.nodeFree.active = !!this.H_free;
	},
	onLineWin: function onLineWin(bool) {
		this.H_line_win.map(function (obj) {
			var TRed = this.Line.mainLines[obj.line - 1];
			if (bool) {
				TRed.ef = true;
				TRed.onShow();
			} else {
				TRed.ef = false;
				TRed.onHidden();
			}
		}.bind(this));
	},
	showLineWin: function showLineWin(bool) {
		this.onLineWin(bool);
		if (!bool && !this.isNoHu && !this.isBigWin && !this.isAuto && !this.isFreeSpin) {
			this.eflineN = 0;
			this.efLineWin();
		}
	},
	efLineWin: function efLineWin(bool) {
		if (this.H_line_win.length) {
			this.node.stopAllActions();
			if (void 0 === this.H_line_win[this.eflineN]) {
				this.eflineN = 0;
			}
			this.efOneLineWin(this.eflineN, true);
			var next = cc.callFunc(function () {
				this.efOneLineWin(this.eflineN, false);
				this.eflineN += 1;
				this.efLineWin();
			}, this);
			this.node.runAction(cc.sequence(cc.delayTime(1.5), next));
		}
	},
	efOneLineWin: function efOneLineWin(number, bool) {
		number = this.H_line_win[this.eflineN].line;
		var TRed = this.Line.mainLines[number - 1];
		if (bool) {
			TRed.ef = true;
			TRed.onShow();
		} else {
			TRed.ef = false;
			TRed.onHidden();
		}
	},
	hieuUng: function hieuUng() {
		if (this.isBigWin && !this.isNoHu) {
			// Big Win
			this.BigWin.node.active = true;
			this.BigWin.play();
		} else if (this.isNoHu) {
			// Nổ Hũ
			this.NoHu.node.active = true;
			this.NoHu.play();
		} else if (this.isBonus) {
			// Bonus
			this.EF_Bonus.node.active = true;
			this.EF_Bonus.play();
			cc.RedT.audio.playEf('bonus');
		} else if (this.isFree) {
			// Free
			this.EF_Free.node.active = true;
			this.EF_Free.play();
		} else if (this.H_win > 0) {
			var temp = new cc.Node();
			temp.addComponent(cc.Label);
			temp = temp.getComponent(cc.Label);
			temp.string = '+' + helper.numberWithCommas(this.H_win);
			temp.font = cc.RedT.util.fontCong;
			temp.lineHeight = 130;
			temp.fontSize = 25;
			temp.node.position = cc.v2(0, 21);
			this.nodeNotice.addChild(temp.node);
			temp.node.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 105)), cc.callFunc(function () {
				this.speed = 0;
				temp.node.destroy();
				this.hieuUng();
				this.showLineWin(false);
			}, this)));
			this.H_win = 0;
		} else {
			if (this.isAuto || this.isFreeSpin) {
				this.timeOut = setTimeout(function () {
					this.onAutoSpin();
					this.speed = 400;
				}.bind(this), this.speed);
			} else {
				this.resetSpin();
			}
		}
	},
	onChangerBetR: function onChangerBetR() {
		cc.RedT.audio.playClick();
		this.betSelect++;
		if (this.betSelect > 2) this.betSelect = 0;
		this.bet.string = this.betString[this.betSelect];
		this.tong.string = helper.numberWithCommas(this.Line.data.length * helper.getOnlyNumberInString(this.bet.string));
		this.onGetHu();
	},
	onChangerBetL: function onChangerBetL() {
		cc.RedT.audio.playClick();
		this.betSelect--;
		if (this.betSelect < 0) this.betSelect = 2;
		this.bet.string = this.betString[this.betSelect];
		this.tong.string = helper.numberWithCommas(this.Line.data.length * helper.getOnlyNumberInString(this.bet.string));
		this.onGetHu();
	},
	onClickAuto: function onClickAuto() {
		cc.RedT.audio.playClick();
		this.onAuto();
	},
	onAuto: function onAuto() {
		this.isAuto = !this.isAuto;
		if (this.isAuto) {
			this.buttonAuto.spriteFrame = this.FrameAuto[1];
		} else {
			this.buttonAuto.spriteFrame = this.FrameAuto[0];
		}
	},
	onClickSpin: function onClickSpin() {
		//cc.RedT.audio.playClick();
		this.onSpin();
	},
	onAutoSpin: function onAutoSpin() {
		//cc.RedT.audio.playClick();
		this.onGetSpin();
	},
	onSpin: function onSpin() {
		if (this.Line.data.length < 1) {
			this.addNotice('Chọn ít nhất 1 dòng');
		} else {
			if (!this.isSpin) {
				this.node.stopAllActions();
				void 0 !== this.eflineN && void 0 !== this.H_line_win && this.H_line_win.length && this.efOneLineWin(this.eflineN, false);
				this.eflineO = this.eflineN = 0;
				this.isSpin = true;
				this.setSpin();
				this.onGetSpin();
			}
		}
	},
	setSpin: function setSpin() {
		this.buttonLine.pauseSystemEvents();
		this.buttonSpin.pauseSystemEvents();
		this.nodeChangerBetL.pauseSystemEvents();
		this.nodeChangerBetR.pauseSystemEvents();
		this.skeleSpin.setAnimation(0, 'animation', true);
		this.skeleSpin.paused = false;
	},
	resetSpin: function resetSpin() {
		if (this.isAuto) {
			this.onAuto();
		}
		this.isSpin = false;
		this.buttonLine.resumeSystemEvents();
		this.buttonSpin.resumeSystemEvents();
		this.nodeChangerBetL.resumeSystemEvents();
		this.nodeChangerBetR.resumeSystemEvents();
		this.skeleSpin.paused = true;
	},
	runReels: function runReels() {
		this.reels.forEach(function (reel, index) {
			reel.spin(index);
		});
	},
	copy: function copy() {
		this.reels.forEach(function (reel) {
			reel.icons[reel.icons.length - 1].setIcon(reel.icons[2].data);
			reel.icons[reel.icons.length - 2].setIcon(reel.icons[1].data);
			reel.icons[reel.icons.length - 3].setIcon(reel.icons[0].data);
		});
	},
	random: function random() {
		this.reels.forEach(function (reel) {
			reel.icons.forEach(function (icon, index) {
				if (index > 2 && index < reel.icons.length - 3) {
					icon.random();
				}
			});
		});
	},
	onGetSpin: function onGetSpin() {
		cc.RedT.send({ g: { candy: { spin: { cuoc: helper.getOnlyNumberInString(this.bet.string), line: this.Line.data } } } });
	},
	addNotice: function addNotice(text) {
		var notice = cc.instantiate(this.prefabNotice);
		var noticeComponent = notice.getComponent('mini_warning');
		noticeComponent.text.string = text;
		this.nodeNotice.addChild(notice);
	},
	backGame: function backGame() {
		cc.RedT.MiniPanel.node.parent = null;
		this.loading.active = true;
		void 0 !== this.timeOut && clearTimeout(this.timeOut);
		cc.director.loadScene('MainGame');
	},
	signOut: function signOut() {
		cc.RedT.MiniPanel.node.parent = null;
		void 0 !== this.timeOut && clearTimeout(this.timeOut);
		cc.director.loadScene('MainGame', function () {
			cc.RedT.inGame.signOut();
		});
	},
	onGetHu: function onGetHu() {
		var _this = this;

		if (void 0 !== cc.RedT.setting.topHu.data) {
			var cuoc = helper.getOnlyNumberInString(this.bet.string);
			Promise.all(cc.RedT.setting.topHu.data['candy'].filter(function (temp) {
				return temp.type == cuoc;
			})).then(function (result) {
				var s = helper.getOnlyNumberInString(_this.hu.string);
				var bet = result[0].bet;
				if (s - bet != 0) helper.numberTo(_this.hu, s, bet, 2000, true);
			});
		}
	}
});

cc._RF.pop();