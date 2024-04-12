"use strict";
cc._RF.push(module, '9e5a3gmlfZAEZBJ1mCqGYsC', 'Zeus');
// Script/Game/Zeus/Zeus.js

'use strict';

var helper = require('Helper'),
    reel = require('Zeus_reel'),
    Line = require('Zeus_lines'),
    gameBonus = require('Zeus_playBonus'),
    notice = require('Notice'),
    dialog = require('Zeus_dialog');
cc.Class({
	extends: cc.Component,
	properties: {
		gameBonus: gameBonus,
		audioBG: cc.AudioSource,
		audioClickSpin: {
			default: null,
			type: cc.AudioClip
		},
		audioClick: {
			default: null,
			type: cc.AudioClip
		},
		audioWin: {
			default: null,
			type: cc.AudioClip
		},
		audioBigWin: {
			default: null,
			type: cc.AudioClip
		},
		audioJackpot: {
			default: null,
			type: cc.AudioClip
		},
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
		betString: {
			default: [],
			type: cc.String
		},
		audioIcons: {
			default: [],
			type: cc.SpriteFrame
		},
		audioIcon: cc.Sprite,
		nodeNotice: cc.Node,
		prefabNotice: cc.Prefab,
		MiniPanel: cc.Prefab,
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
		phien: cc.Label,
		BigWin: cc.Animation,
		BigWin_Label: cc.Label,
		NoHu_close: cc.Node,
		NoHu: cc.Animation,
		NoHu_Label: cc.Label,
		EF_Bonus: cc.Animation,
		EF_Free: cc.Animation,
		buttonLine: cc.Node,
		buttonSpin: cc.Node,
		buttonSpinSpeed: cc.Node,
		buttonBet: cc.Node,
		buttonAuto: cc.Node,
		Game: cc.Node,
		ChonCuoc: cc.Node,
		hu100: cc.Label,
		hu1000: cc.Label,
		hu10000: cc.Label,
		isSpeed: false,
		isForceSpeed: false,
		isAuto: false,
		isSpin: false,
		isFreeSpin: false,
		red: true,
		betSelect: 0
	},

	onLoad: function onLoad() {
		cc.RedT.inGame = this;
		cc.RedT.MiniPanel.node.parent = this.redhat;
		var self = this;
		this.Line.init(this);
		this.BigWin.on('finished', this.BigWinFinish, this);
		this.BigWin.on('play', this.BigWinPlay, this);
		this.EF_Free.on('finished', this.EF_FreeFinish, this);
		this.NoHu.on('play', this.NoHuPlay, this);
		this.EF_Bonus.on('finished', this.EF_BonusFinish, this);
		this.gameBonus.init(this);
		this.dialog.init();
		Promise.all(this.reels.map(function (reel) {
			reel.init(self);
		}));
		this.Game.active = false;
		this.ChonCuoc.active = true;
		this.onGetAllHu();
		cc.RedT.send({ scene: "zeus" });
		this.taikhoan.string = helper.numberWithCommas(cc.RedT.user.red);
		this.speed = 400;
		this.resetSpin();
		cc.RedT.audio.bg.pause();
		if (cc.RedT.isSoundBackground()) {
			this.playMusic();
			this.audioIcon.spriteFrame = this.audioIcons[1];
		} else {
			this.audioIcon.spriteFrame = this.audioIcons[0];
		}
	},

	_playSFX: function _playSFX(clip) {
		if (cc.RedT.IS_SOUND) {
			cc.audioEngine.playEffect(clip, false);
		}
	},
	playClick: function playClick() {
		this._playSFX(this.audioClick);
	},
	BigWinPlay: function BigWinPlay() {
		var huong = cc.callFunc(function () {
			this._playSFX(this.audioBigWin);
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
			this._playSFX(this.audioJackpot);
			helper.numberTo(this.NoHu_Label, 0, this.H_win, 2000, true);
		}, this);
		this.NoHu.node.runAction(cc.sequence(cc.delayTime(0.3), huong));

		var huongT = cc.callFunc(function () {
			this.NoHu_close.active = true;
		}, this);
		this.NoHu.node.runAction(cc.sequence(cc.delayTime(4), huongT));
	},
	NoHuFinish: function NoHuFinish() {
		this.isNoHu = false;
		if (this.isAuto) {
			this.onAuto();
		}
		this.showLineWin(false);
		this.hieuUng();
	},
	NoHuClose: function NoHuClose() {
		this.NoHu.node.active = this.NoHu_close.active = false;
		this.NoHuFinish();
	},
	EF_BonusFinish: function EF_BonusFinish() {
		this.EF_Bonus.node.active = false;
		this.gameBonus.onPlay(this.isBonus);
		this.isBonus = 0;
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
		if (void 0 !== data.Zeus) {
			this.Zeus(data.Zeus);
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
		if (this.red) {
			this.taikhoan.string = helper.numberWithCommas(data.red);
		}
	},
	Zeus: function Zeus(data) {
		var self = this;
		if (void 0 !== data.status) {
			if (data.status === 1) {
				Promise.all(data.cel.map(function (cel, cel_index) {
					Promise.all(cel.map(function (icon, index) {
						self.reels[cel_index].icons[index].setIcon(icon, true);
					}));
				}));
				this.runReels(this.isSpeed);
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
		if (!!data.phien) {
			this.phien.string = "#" + data.phien;
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
		this.buttonSpin.active = !this.H_free;
		this.buttonSpinSpeed.active = !this.H_free;
		this.freeLabel.string = 'Free: ' + this.H_free;
		this.freeLabel.node.active = !!this.H_free;
	},
	onLineWin: function onLineWin(bool) {
		var self = this;
		Promise.all(this.H_line_win.map(function (obj) {
			var TRed = self.Line.mainLines[obj.line - 1];
			if (bool) {
				TRed.ef = true;
				TRed.onShow();
			} else {
				TRed.ef = false;
				TRed.onHidden();
			}
		}));
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
			var self = this;

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
		var self = this;
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
			this.oldBigWin = true;
		} else if (this.isNoHu) {
			// Nổ Hũ
			this.NoHu.node.active = true;
			this.NoHu.play();
		} else if (!!this.isBonus) {
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
			!this.oldBigWin && this._playSFX(this.audioWin);
			temp.node.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 105)), cc.callFunc(function () {
				this.speed = 0;
				temp.node.destroy();
				this.hieuUng();
				this.showLineWin(false);
			}, this)));
			this.H_win = 0;
			this.oldBigWin = false;
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
	onChangerBet: function onChangerBet(event, customEventData) {
		this._playSFX(this.audioClick);
		this.betSelect++;
		if (this.betSelect > 2) this.betSelect = 0;
		this.bet.string = customEventData;
		this.tong.string = helper.numberWithCommas(this.Line.data.length * helper.getOnlyNumberInString(this.bet.string));
		this.Game.active = true;
		this.ChonCuoc.active = false;
		this.resetSpin();
		this.onGetHu();
	},
	onSelectBet: function onSelectBet() {
		this.Game.active = false;
		this.ChonCuoc.active = true;
		this.onGetAllHu();
		this.onGetHu();
	},
	changerCoint: function changerCoint() {
		this.red = !this.red;
		this.nodeRed.active = !this.nodeRed.active;
		this.nodeXu.active = !this.nodeXu.active;
		this.userData(cc.RedT.user);
		this.onGetHu();
	},
	onClickAuto: function onClickAuto() {
		this._playSFX(this.audioClick);
		this.onAuto();
	},
	onAuto: function onAuto() {
		this.isAuto = !this.isAuto;
		if (this.isAuto) {
			this.buttonAuto.color = cc.Color.WHITE;
		} else {
			this.buttonAuto.color = this.buttonAuto.color.fromHEX('#8A8A8A');
		}
	},
	onClickSpin: function onClickSpin() {
		this.isSpeed = false;
		this.onSpin();
	},
	onClickSpinSpeed: function onClickSpinSpeed() {
		this.isSpeed = true;
		if (this.isAuto) this.isForceSpeed = true;
		this.onSpin();
	},
	onAutoSpin: function onAutoSpin() {
		this._playSFX(this.audioClickSpin);
		this.onGetSpin();
	},
	onSpin: function onSpin() {
		if (this.Line.data.length < 1) {
			this.addNotice('Chọn ít nhất 1 dòng');
		} else {
			if (!this.isSpin) {
				this._playSFX(this.audioClickSpin);
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
		this.buttonSpinSpeed.pauseSystemEvents();
		this.buttonBet.pauseSystemEvents();
	},
	resetSpin: function resetSpin() {
		if (this.isAuto) {
			this.onAuto();
		}
		this.isSpin = false;
		this.isForceSpeed = false;
		this.buttonLine.resumeSystemEvents();
		this.buttonSpin.resumeSystemEvents();
		this.buttonSpinSpeed.resumeSystemEvents();
		this.buttonBet.resumeSystemEvents();
	},
	runReels: function runReels(isSpeed) {
		var self = this;
		Promise.all(this.reels.map(function (reel, index) {
			if (isSpeed || self.isForceSpeed) reel.spin(index, 0.25);else reel.spin(index, 1);
		}));
		this.isSpeed = false;
	},
	copy: function copy() {
		Promise.all(this.reels.map(function (reel) {
			reel.icons[reel.icons.length - 1].setIcon(reel.icons[2].data);
			reel.icons[reel.icons.length - 2].setIcon(reel.icons[1].data);
			reel.icons[reel.icons.length - 3].setIcon(reel.icons[0].data);
		}));
	},
	random: function random() {
		Promise.all(this.reels.map(function (reel) {
			Promise.all(reel.icons.map(function (icon, index) {
				if (index > 2 && index < reel.icons.length - 3) {
					icon.random();
				}
			}));
		}));
	},
	onGetSpin: function onGetSpin() {
		cc.RedT.send({ g: { zeus: { spin: { cuoc: helper.getOnlyNumberInString(this.bet.string), line: this.Line.data } } } });
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
		cc.director.loadScene('MainGame', function () {
			cc.RedT.inGame.signOut();
		});
	},
	onGetHu: function onGetHu() {
		var _this = this;

		if (void 0 !== cc.RedT.setting.topHu.data) {
			var self = this;
			var cuoc = helper.getOnlyNumberInString(self.bet.string);
			Promise.all(cc.RedT.setting.topHu.data['zeus'].filter(function (temp) {
				return temp.type == cuoc;
			})).then(function (result) {
				var s = helper.getOnlyNumberInString(_this.hu.string);
				var bet = result[0].bet;
				if (s - bet != 0) helper.numberTo(_this.hu, s, bet, 2000, true);
			});
		}
	},
	onGetAllHu: function onGetAllHu() {
		var _this2 = this;

		if (void 0 !== cc.RedT.setting.topHu.data) {
			var self = this;
			var cuoc = helper.getOnlyNumberInString(self.bet.string);
			Promise.all(cc.RedT.setting.topHu.data['zeus'].filter(function (temp) {
				return temp.red == true;
			})).then(function (result) {
				var h100 = result.filter(function (temp) {
					return temp.type == 100;
				});
				var h1k = result.filter(function (temp) {
					return temp.type == 1000;
				});
				var h10k = result.filter(function (temp) {
					return temp.type == 10000;
				});

				var r100 = helper.getOnlyNumberInString(_this2.hu100.string);
				var r1k = helper.getOnlyNumberInString(_this2.hu1000.string);
				var r10k = helper.getOnlyNumberInString(_this2.hu10000.string);

				if (r100 - h100[0].bet != 0) {
					helper.numberTo(_this2.hu100, helper.getOnlyNumberInString(_this2.hu100.string), h100[0].bet, 4900, true);
				}
				if (r1k - h1k[0].bet != 0) {
					helper.numberTo(_this2.hu1000, helper.getOnlyNumberInString(_this2.hu1000.string), h1k[0].bet, 4900, true);
				}
				if (r10k - h10k[0].bet != 0) {
					helper.numberTo(_this2.hu10000, helper.getOnlyNumberInString(_this2.hu10000.string), h10k[0].bet, 4900, true);
				}
			});
		}
	},
	playMusic: function playMusic() {
		this.audioBG.play();
	},
	pauseMusic: function pauseMusic() {
		this.audioBG.pause();
	},
	onSetAudio: function onSetAudio() {
		if (cc.RedT.isSoundBackground()) {
			cc.RedT.setSoundBackground(false);
			this.pauseMusic();
			cc.RedT.IS_SOUND = false;
			cc.RedT.setSoundGame(false);
			this.audioIcon.spriteFrame = this.audioIcons[0];
		} else {
			cc.RedT.setSoundBackground(true);
			this.playMusic();
			cc.RedT.IS_SOUND = true;
			cc.RedT.setSoundGame(true);
			this.audioIcon.spriteFrame = this.audioIcons[1];
		}
	}
});

cc._RF.pop();