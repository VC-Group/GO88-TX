
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Zeus/Zeus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxaZXVzLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJyZWVsIiwiTGluZSIsImdhbWVCb251cyIsIm5vdGljZSIsImRpYWxvZyIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF1ZGlvQkciLCJBdWRpb1NvdXJjZSIsImF1ZGlvQ2xpY2tTcGluIiwiZGVmYXVsdCIsInR5cGUiLCJBdWRpb0NsaXAiLCJhdWRpb0NsaWNrIiwiYXVkaW9XaW4iLCJhdWRpb0JpZ1dpbiIsImF1ZGlvSmFja3BvdCIsInJlZGhhdCIsIk5vZGUiLCJyZWVscyIsImljb24iLCJQcmVmYWIiLCJpY29ucyIsIlNwcml0ZUZyYW1lIiwiYmV0U3RyaW5nIiwiU3RyaW5nIiwiYXVkaW9JY29ucyIsImF1ZGlvSWNvbiIsIlNwcml0ZSIsIm5vZGVOb3RpY2UiLCJwcmVmYWJOb3RpY2UiLCJNaW5pUGFuZWwiLCJsb2FkaW5nIiwiaHUiLCJMYWJlbCIsInRhaWtob2FuIiwidG9uZyIsInZ1YXRoYW5nIiwibGFiZWxMaW5lIiwiYmV0IiwiZnJlZUxhYmVsIiwicGhpZW4iLCJCaWdXaW4iLCJBbmltYXRpb24iLCJCaWdXaW5fTGFiZWwiLCJOb0h1X2Nsb3NlIiwiTm9IdSIsIk5vSHVfTGFiZWwiLCJFRl9Cb251cyIsIkVGX0ZyZWUiLCJidXR0b25MaW5lIiwiYnV0dG9uU3BpbiIsImJ1dHRvblNwaW5TcGVlZCIsImJ1dHRvbkJldCIsImJ1dHRvbkF1dG8iLCJHYW1lIiwiQ2hvbkN1b2MiLCJodTEwMCIsImh1MTAwMCIsImh1MTAwMDAiLCJpc1NwZWVkIiwiaXNGb3JjZVNwZWVkIiwiaXNBdXRvIiwiaXNTcGluIiwiaXNGcmVlU3BpbiIsInJlZCIsImJldFNlbGVjdCIsIm9uTG9hZCIsIlJlZFQiLCJpbkdhbWUiLCJub2RlIiwicGFyZW50Iiwic2VsZiIsImluaXQiLCJvbiIsIkJpZ1dpbkZpbmlzaCIsIkJpZ1dpblBsYXkiLCJFRl9GcmVlRmluaXNoIiwiTm9IdVBsYXkiLCJFRl9Cb251c0ZpbmlzaCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJhY3RpdmUiLCJvbkdldEFsbEh1Iiwic2VuZCIsInNjZW5lIiwic3RyaW5nIiwibnVtYmVyV2l0aENvbW1hcyIsInVzZXIiLCJzcGVlZCIsInJlc2V0U3BpbiIsImF1ZGlvIiwiYmciLCJwYXVzZSIsImlzU291bmRCYWNrZ3JvdW5kIiwicGxheU11c2ljIiwic3ByaXRlRnJhbWUiLCJfcGxheVNGWCIsImNsaXAiLCJJU19TT1VORCIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsInBsYXlDbGljayIsImh1b25nIiwiY2FsbEZ1bmMiLCJudW1iZXJUbyIsIkhfd2luIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJpc0JpZ1dpbiIsInNob3dMaW5lV2luIiwiaGlldVVuZyIsImh1b25nVCIsIk5vSHVGaW5pc2giLCJpc05vSHUiLCJvbkF1dG8iLCJOb0h1Q2xvc2UiLCJvblBsYXkiLCJpc0JvbnVzIiwiaXNGcmVlIiwib25EYXRhIiwiZGF0YSIsInVzZXJEYXRhIiwiWmV1cyIsIm1pbmkiLCJUb3BIdSIsInRhaXhpdSIsIlRhaVhpdSIsIlRYX01haW4iLCJ2aXBwIiwiRGlhbG9nIiwiVmlwUG9pbnQiLCJzdGF0dXMiLCJjZWwiLCJjZWxfaW5kZXgiLCJpbmRleCIsInNldEljb24iLCJydW5SZWVscyIsIkhfbGluZV93aW4iLCJsaW5lX3dpbiIsIndpbiIsIkhfZnJlZSIsImZyZWUiLCJib251cyIsImxvZyIsImhpc3RvcnkiLCJ0b3AiLCJhZGROb3RpY2UiLCJFRl92dWF0aGFuZyIsIm9uTGluZVdpbiIsImJvb2wiLCJvYmoiLCJUUmVkIiwibWFpbkxpbmVzIiwibGluZSIsImVmIiwib25TaG93Iiwib25IaWRkZW4iLCJlZmxpbmVOIiwiZWZMaW5lV2luIiwibGVuZ3RoIiwic3RvcEFsbEFjdGlvbnMiLCJlZk9uZUxpbmVXaW4iLCJuZXh0IiwibnVtYmVyIiwicGxheSIsIm9sZEJpZ1dpbiIsInBsYXlFZiIsInRlbXAiLCJhZGRDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJmb250IiwidXRpbCIsImZvbnRDb25nIiwibGluZUhlaWdodCIsImZvbnRTaXplIiwicG9zaXRpb24iLCJ2MiIsImFkZENoaWxkIiwibW92ZVRvIiwiZGVzdHJveSIsInRpbWVPdXQiLCJzZXRUaW1lb3V0Iiwib25BdXRvU3BpbiIsImJpbmQiLCJvbkNoYW5nZXJCZXQiLCJldmVudCIsImN1c3RvbUV2ZW50RGF0YSIsImdldE9ubHlOdW1iZXJJblN0cmluZyIsIm9uR2V0SHUiLCJvblNlbGVjdEJldCIsImNoYW5nZXJDb2ludCIsIm5vZGVSZWQiLCJub2RlWHUiLCJvbkNsaWNrQXV0byIsImNvbG9yIiwiQ29sb3IiLCJXSElURSIsImZyb21IRVgiLCJvbkNsaWNrU3BpbiIsIm9uU3BpbiIsIm9uQ2xpY2tTcGluU3BlZWQiLCJvbkdldFNwaW4iLCJlZmxpbmVPIiwic2V0U3BpbiIsInBhdXNlU3lzdGVtRXZlbnRzIiwicmVzdW1lU3lzdGVtRXZlbnRzIiwic3BpbiIsImNvcHkiLCJyYW5kb20iLCJnIiwiemV1cyIsImN1b2MiLCJ0ZXh0IiwiaW5zdGFudGlhdGUiLCJub3RpY2VDb21wb25lbnQiLCJiYWNrR2FtZSIsImNsZWFyVGltZW91dCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic2lnbk91dCIsInNldHRpbmciLCJ0b3BIdSIsImZpbHRlciIsInRoZW4iLCJzIiwicmVzdWx0IiwiaDEwMCIsImgxayIsImgxMGsiLCJyMTAwIiwicjFrIiwicjEwayIsInBhdXNlTXVzaWMiLCJvblNldEF1ZGlvIiwic2V0U291bmRCYWNrZ3JvdW5kIiwic2V0U291bmRHYW1lIl0sIm1h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bkI7QUFDQWxHLE1BQUdrRSxJQUFILENBQVEwSyxZQUFSLENBQXFCLEtBQXJCO0FBQ1QsUUFBS25OLFNBQUwsQ0FBZXNFLFdBQWYsR0FBNkIsS0FBS3ZFLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBN0I7QUFDRyxHQU5ELE1BTUs7QUFDSnhCLE1BQUdrRSxJQUFILENBQVF5SyxrQkFBUixDQUEyQixJQUEzQjtBQUNNLFFBQUs3SSxTQUFMO0FBQ0E5RixNQUFHa0UsSUFBSCxDQUFRZ0MsUUFBUixHQUFtQixJQUFuQjtBQUNBbEcsTUFBR2tFLElBQUgsQ0FBUTBLLFlBQVIsQ0FBcUIsSUFBckI7QUFDQSxRQUFLbk4sU0FBTCxDQUFlc0UsV0FBZixHQUE2QixLQUFLdkUsVUFBTCxDQUFnQixDQUFoQixDQUE3QjtBQUNOO0FBQ0Q7QUF2aEJJLENBQVQiLCJmaWxlIjoiWmV1cy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1cyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyICAgID0gcmVxdWlyZSgnSGVscGVyJyksXHJcblx0cmVlbCAgICAgID0gcmVxdWlyZSgnWmV1c19yZWVsJyksXHJcblx0TGluZSAgICAgID0gcmVxdWlyZSgnWmV1c19saW5lcycpLFxyXG5cdGdhbWVCb251cyA9IHJlcXVpcmUoJ1pldXNfcGxheUJvbnVzJyksXHJcblx0bm90aWNlICAgID0gcmVxdWlyZSgnTm90aWNlJyksXHJcblx0ZGlhbG9nICAgID0gcmVxdWlyZSgnWmV1c19kaWFsb2cnKTtcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRnYW1lQm9udXM6IGdhbWVCb251cyxcclxuXHRcdGF1ZGlvQkc6ICBjYy5BdWRpb1NvdXJjZSxcclxuXHRcdGF1ZGlvQ2xpY2tTcGluOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG5cdFx0fSxcclxuXHRcdGF1ZGlvQ2xpY2s6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogY2MuQXVkaW9DbGlwXHJcblx0XHR9LFxyXG5cdFx0YXVkaW9XaW46IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogY2MuQXVkaW9DbGlwXHJcblx0XHR9LFxyXG5cdFx0YXVkaW9CaWdXaW46IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogY2MuQXVkaW9DbGlwXHJcblx0XHR9LFxyXG5cdFx0YXVkaW9KYWNrcG90OiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG5cdFx0fSxcclxuXHRcdHJlZGhhdDogY2MuTm9kZSxcclxuXHRcdHJlZWxzOiB7XHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0eXBlOiByZWVsLFxyXG5cdFx0fSxcclxuXHRcdGljb246IGNjLlByZWZhYixcclxuXHRcdGljb25zOiB7XHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdH0sXHJcblx0XHRiZXRTdHJpbmc6IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6IGNjLlN0cmluZyxcclxuXHRcdH0sXHJcblx0XHRhdWRpb0ljb25zOiB7XHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdH0sXHJcblx0XHRhdWRpb0ljb246IGNjLlNwcml0ZSxcclxuXHRcdG5vZGVOb3RpY2U6ICAgY2MuTm9kZSxcclxuXHRcdHByZWZhYk5vdGljZTogY2MuUHJlZmFiLFxyXG5cdFx0TWluaVBhbmVsOiAgICBjYy5QcmVmYWIsXHJcblx0XHRsb2FkaW5nOiAgICAgIGNjLk5vZGUsXHJcblx0XHRub3RpY2U6ICAgICBub3RpY2UsXHJcblx0XHRkaWFsb2c6ICAgICBkaWFsb2csXHJcblx0XHRMaW5lOiAgICAgICBMaW5lLFxyXG5cdFx0aHU6ICAgICAgICAgY2MuTGFiZWwsXHJcblx0XHR0YWlraG9hbjogICBjYy5MYWJlbCxcclxuXHRcdHRvbmc6ICAgICAgIGNjLkxhYmVsLFxyXG5cdFx0dnVhdGhhbmc6ICAgY2MuTGFiZWwsXHJcblx0XHRsYWJlbExpbmU6ICBjYy5MYWJlbCxcclxuXHRcdGJldDogICAgICAgIGNjLkxhYmVsLFxyXG5cdFx0ZnJlZUxhYmVsOiAgY2MuTGFiZWwsXHJcblx0XHRwaGllbjogICAgICBjYy5MYWJlbCxcclxuXHRcdEJpZ1dpbjogICAgICAgY2MuQW5pbWF0aW9uLFxyXG5cdFx0QmlnV2luX0xhYmVsOiBjYy5MYWJlbCxcclxuXHRcdE5vSHVfY2xvc2U6ICAgY2MuTm9kZSxcclxuXHRcdE5vSHU6ICAgICAgICAgY2MuQW5pbWF0aW9uLFxyXG5cdFx0Tm9IdV9MYWJlbDogICBjYy5MYWJlbCxcclxuXHRcdEVGX0JvbnVzOiAgICAgY2MuQW5pbWF0aW9uLFxyXG5cdFx0RUZfRnJlZTogICAgICBjYy5BbmltYXRpb24sXHJcblx0XHRidXR0b25MaW5lOiAgIGNjLk5vZGUsXHJcblx0XHRidXR0b25TcGluOiAgIGNjLk5vZGUsXHJcblx0XHRidXR0b25TcGluU3BlZWQ6ICAgY2MuTm9kZSxcclxuXHRcdGJ1dHRvbkJldDogICAgY2MuTm9kZSxcclxuXHRcdGJ1dHRvbkF1dG86ICAgY2MuTm9kZSxcclxuXHRcdEdhbWU6ICAgY2MuTm9kZSxcclxuXHRcdENob25DdW9jOiAgIGNjLk5vZGUsXHJcblx0XHRodTEwMDogICAgICAgIGNjLkxhYmVsLFxyXG5cdFx0aHUxMDAwOiAgY2MuTGFiZWwsXHJcblx0XHRodTEwMDAwOiAgICAgIGNjLkxhYmVsLFxyXG5cdFx0aXNTcGVlZDogZmFsc2UsXHJcblx0XHRpc0ZvcmNlU3BlZWQ6IGZhbHNlLFxyXG5cdFx0aXNBdXRvOiAgICAgZmFsc2UsXHJcblx0XHRpc1NwaW46ICAgICBmYWxzZSxcclxuXHRcdGlzRnJlZVNwaW46IGZhbHNlLFxyXG5cdFx0cmVkOiAgICAgICAgdHJ1ZSxcclxuXHRcdGJldFNlbGVjdDogIDAsXHJcblx0fSxcclxuXHJcblx0b25Mb2FkICgpIHtcclxuXHRcdGNjLlJlZFQuaW5HYW1lID0gdGhpcztcclxuXHRcdGNjLlJlZFQuTWluaVBhbmVsLm5vZGUucGFyZW50ID0gdGhpcy5yZWRoYXQ7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLkxpbmUuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuQmlnV2luLm9uKCdmaW5pc2hlZCcsICB0aGlzLkJpZ1dpbkZpbmlzaCwgdGhpcyk7XHJcblx0XHR0aGlzLkJpZ1dpbi5vbigncGxheScsICAgICAgdGhpcy5CaWdXaW5QbGF5LCAgIHRoaXMpO1xyXG5cdFx0dGhpcy5FRl9GcmVlLm9uKCdmaW5pc2hlZCcsIHRoaXMuRUZfRnJlZUZpbmlzaCwgIHRoaXMpO1xyXG5cdFx0dGhpcy5Ob0h1Lm9uKCdwbGF5JywgICAgIHRoaXMuTm9IdVBsYXksICAgdGhpcyk7XHJcblx0XHR0aGlzLkVGX0JvbnVzLm9uKCdmaW5pc2hlZCcsIHRoaXMuRUZfQm9udXNGaW5pc2gsIHRoaXMpO1xyXG5cdFx0dGhpcy5nYW1lQm9udXMuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuZGlhbG9nLmluaXQoKTtcclxuXHRcdFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwpIHtcclxuXHRcdFx0cmVlbC5pbml0KHNlbGYpO1xyXG5cdFx0fSkpO1xyXG5cdFx0dGhpcy5HYW1lLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5DaG9uQ3VvYy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5vbkdldEFsbEh1KCk7XHJcblx0XHRjYy5SZWRULnNlbmQoe3NjZW5lOlwiemV1c1wifSk7XHJcblx0XHR0aGlzLnRhaWtob2FuLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGNjLlJlZFQudXNlci5yZWQpO1xyXG5cdFx0dGhpcy5zcGVlZCA9IDQwMDtcclxuXHRcdHRoaXMucmVzZXRTcGluKCk7XHJcblx0XHRjYy5SZWRULmF1ZGlvLmJnLnBhdXNlKCk7XHJcblx0XHRpZihjYy5SZWRULmlzU291bmRCYWNrZ3JvdW5kKCkpe1xyXG5cdFx0XHR0aGlzLnBsYXlNdXNpYygpO1xyXG4gICAgICAgICAgICB0aGlzLmF1ZGlvSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuYXVkaW9JY29uc1sxXTtcclxuICAgIFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuYXVkaW9JY29uLnNwcml0ZUZyYW1lID0gdGhpcy5hdWRpb0ljb25zWzBdO1xyXG4gICAgXHR9XHJcblx0fSxcclxuXHRfcGxheVNGWDogZnVuY3Rpb24oY2xpcCkge1xyXG5cdFx0aWYgKGNjLlJlZFQuSVNfU09VTkQpe1xyXG5cdFx0XHRjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KGNsaXAsIGZhbHNlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHBsYXlDbGljazogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuX3BsYXlTRlgodGhpcy5hdWRpb0NsaWNrKTtcclxuXHR9LFxyXG5cdEJpZ1dpblBsYXk6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgaHVvbmcgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLl9wbGF5U0ZYKHRoaXMuYXVkaW9CaWdXaW4pO1xyXG5cdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5CaWdXaW5fTGFiZWwsIDAsIHRoaXMuSF93aW4sIDIwMDAsIHRydWUpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblx0XHR0aGlzLkJpZ1dpbi5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4zKSwgaHVvbmcpKTtcclxuXHR9LFxyXG5cdEJpZ1dpbkZpbmlzaDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuaXNCaWdXaW4gPSBmYWxzZTtcclxuXHRcdHRoaXMuQmlnV2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLkJpZ1dpbl9MYWJlbC5zdHJpbmcgPSBcIlwiO1xyXG5cdFx0dGhpcy5zaG93TGluZVdpbihmYWxzZSk7XHJcblx0XHR0aGlzLmhpZXVVbmcoKTtcclxuXHR9LFxyXG5cdE5vSHVQbGF5OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5Ob0h1X0xhYmVsLnN0cmluZyA9IFwiXCI7XHJcblx0XHR2YXIgaHVvbmcgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLl9wbGF5U0ZYKHRoaXMuYXVkaW9KYWNrcG90KTtcclxuXHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuTm9IdV9MYWJlbCwgMCwgdGhpcy5IX3dpbiwgMjAwMCwgdHJ1ZSk7XHJcblx0XHR9LCB0aGlzKTtcclxuXHRcdHRoaXMuTm9IdS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4zKSwgaHVvbmcpKTtcclxuXHJcblx0XHR2YXIgaHVvbmdUID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5Ob0h1X2Nsb3NlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9LCB0aGlzKTtcclxuXHRcdHRoaXMuTm9IdS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoNCksIGh1b25nVCkpO1xyXG5cdH0sXHJcblx0Tm9IdUZpbmlzaDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuaXNOb0h1ID0gZmFsc2U7XHJcblx0XHRpZiAodGhpcy5pc0F1dG8pIHtcclxuXHRcdFx0dGhpcy5vbkF1dG8oKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xyXG5cdFx0dGhpcy5oaWV1VW5nKCk7XHJcblx0fSxcclxuXHROb0h1Q2xvc2U6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLk5vSHUubm9kZS5hY3RpdmUgPSB0aGlzLk5vSHVfY2xvc2UuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLk5vSHVGaW5pc2goKTtcclxuXHR9LFxyXG5cdEVGX0JvbnVzRmluaXNoOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5FRl9Cb251cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5nYW1lQm9udXMub25QbGF5KHRoaXMuaXNCb251cyk7XHJcblx0XHR0aGlzLmlzQm9udXMgPSAwO1xyXG5cdFx0dGhpcy5zaG93TGluZVdpbihmYWxzZSk7XHJcblx0fSxcclxuXHRFRl9GcmVlRmluaXNoOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5pc0ZyZWUgPSBmYWxzZTtcclxuXHRcdHRoaXMuRUZfRnJlZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zaG93TGluZVdpbihmYWxzZSk7XHJcblx0XHR0aGlzLmhpZXVVbmcoKTtcclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS51c2VyKXtcclxuXHRcdFx0dGhpcy51c2VyRGF0YShkYXRhLnVzZXIpO1xyXG5cdFx0XHRjYy5SZWRULnVzZXJEYXRhKGRhdGEudXNlcik7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLlpldXMpe1xyXG5cdFx0XHR0aGlzLlpldXMoZGF0YS5aZXVzKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubWluaSl7XHJcblx0XHRcdGNjLlJlZFQuTWluaVBhbmVsLm9uRGF0YShkYXRhLm1pbmkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5Ub3BIdSl7XHJcblx0XHRcdGNjLlJlZFQuTWluaVBhbmVsLlRvcEh1Lm9uRGF0YShkYXRhLlRvcEh1KTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEudGFpeGl1KXtcclxuXHRcdFx0Y2MuUmVkVC5NaW5pUGFuZWwuVGFpWGl1LlRYX01haW4ub25EYXRhKGRhdGEudGFpeGl1KTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEudmlwcCkge1xyXG5cdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5EaWFsb2cuVmlwUG9pbnQub25EYXRhKGRhdGEudmlwcCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHR1c2VyRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRpZiAodGhpcy5yZWQpIHtcclxuXHRcdFx0dGhpcy50YWlraG9hbi5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRaZXVzOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuc3RhdHVzKSB7XHJcblx0XHRcdGlmIChkYXRhLnN0YXR1cyA9PT0gMSkge1xyXG5cdFx0XHRcdFByb21pc2UuYWxsKGRhdGEuY2VsLm1hcChmdW5jdGlvbihjZWwsIGNlbF9pbmRleCl7XHJcblx0XHRcdFx0XHRQcm9taXNlLmFsbChjZWwubWFwKGZ1bmN0aW9uKGljb24sIGluZGV4KXtcclxuXHRcdFx0XHRcdFx0c2VsZi5yZWVsc1tjZWxfaW5kZXhdLmljb25zW2luZGV4XS5zZXRJY29uKGljb24sIHRydWUpO1xyXG5cdFx0XHRcdFx0fSkpO1xyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0XHR0aGlzLnJ1blJlZWxzKHRoaXMuaXNTcGVlZCk7XHJcblx0XHRcdFx0dGhpcy5IX2xpbmVfd2luID0gZGF0YS5saW5lX3dpbjtcclxuXHRcdFx0XHR0aGlzLkhfd2luICAgICAgPSBkYXRhLndpbjtcclxuXHRcdFx0XHR0aGlzLkhfZnJlZSAgICAgPSBkYXRhLmZyZWU7XHJcblx0XHRcdFx0dGhpcy5pc0JvbnVzICAgID0gZGF0YS5pc0JvbnVzO1xyXG5cdFx0XHRcdHRoaXMuaXNOb0h1ICAgICA9IGRhdGEuaXNOb0h1O1xyXG5cdFx0XHRcdHRoaXMuaXNCaWdXaW4gICA9IGRhdGEuaXNCaWdXaW47XHJcblx0XHRcdFx0dGhpcy5pc0ZyZWUgICAgID0gZGF0YS5pc0ZyZWU7XHJcblx0XHRcdFx0dGhpcy5pc0ZyZWVTcGluID0gISFkYXRhLmZyZWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMucmVzZXRTcGluKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEucGhpZW4pIHtcclxuXHRcdFx0dGhpcy5waGllbi5zdHJpbmcgPSBcIiNcIiArIGRhdGEucGhpZW47XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLmJvbnVzKSB7XHJcblx0XHRcdHRoaXMuZ2FtZUJvbnVzLm9uRGF0YShkYXRhLmJvbnVzKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEubG9nKSB7XHJcblx0XHRcdHRoaXMuZGlhbG9nLmhpc3Rvcnkub25EYXRhKGRhdGEubG9nKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEudG9wKSB7XHJcblx0XHRcdHRoaXMuZGlhbG9nLnRvcC5vbkRhdGEoZGF0YS50b3ApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5ub3RpY2UpIHtcclxuXHRcdFx0dGhpcy5hZGROb3RpY2UoZGF0YS5ub3RpY2UpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0RUZfdnVhdGhhbmc6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnNob3dMaW5lV2luKHRydWUpO1xyXG5cdFx0dGhpcy52dWF0aGFuZy5zdHJpbmcgICAgICAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLkhfd2luKTtcclxuXHRcdHRoaXMuYnV0dG9uU3Bpbi5hY3RpdmUgICAgID0gIXRoaXMuSF9mcmVlO1xyXG5cdFx0dGhpcy5idXR0b25TcGluU3BlZWQuYWN0aXZlICAgICA9ICF0aGlzLkhfZnJlZTtcclxuXHRcdHRoaXMuZnJlZUxhYmVsLnN0cmluZyAgICAgID0gJ0ZyZWU6ICcgKyB0aGlzLkhfZnJlZTtcclxuXHRcdHRoaXMuZnJlZUxhYmVsLm5vZGUuYWN0aXZlID0gISF0aGlzLkhfZnJlZVxyXG5cdH0sXHJcblx0b25MaW5lV2luOiBmdW5jdGlvbihib29sKXtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFByb21pc2UuYWxsKHRoaXMuSF9saW5lX3dpbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0bGV0IFRSZWQgPSBzZWxmLkxpbmUubWFpbkxpbmVzW29iai5saW5lLTFdO1xyXG5cdFx0XHRpZiAoYm9vbCkge1xyXG5cdFx0XHRcdFRSZWQuZWYgPSB0cnVlO1xyXG5cdFx0XHRcdFRSZWQub25TaG93KCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFRSZWQuZWYgPSBmYWxzZTtcclxuXHRcdFx0XHRUUmVkLm9uSGlkZGVuKCk7XHJcblx0XHRcdH1cclxuXHRcdH0pKVxyXG5cdH0sXHJcblx0c2hvd0xpbmVXaW46IGZ1bmN0aW9uKGJvb2wpe1xyXG5cdFx0dGhpcy5vbkxpbmVXaW4oYm9vbCk7XHJcblx0XHRpZiAoIWJvb2wgJiYgIXRoaXMuaXNOb0h1ICYmICF0aGlzLmlzQmlnV2luICYmICF0aGlzLmlzQXV0byAmJiAhdGhpcy5pc0ZyZWVTcGluKSB7XHJcblx0XHRcdHRoaXMuZWZsaW5lTiA9IDA7XHJcblx0XHRcdHRoaXMuZWZMaW5lV2luKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRlZkxpbmVXaW46IGZ1bmN0aW9uKGJvb2wpe1xyXG5cdFx0aWYgKHRoaXMuSF9saW5lX3dpbi5sZW5ndGgpIHtcclxuXHRcdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHRcdGlmICh2b2lkIDAgPT09IHRoaXMuSF9saW5lX3dpblt0aGlzLmVmbGluZU5dKSB7XHJcblx0XHRcdFx0dGhpcy5lZmxpbmVOID0gMDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmVmT25lTGluZVdpbih0aGlzLmVmbGluZU4sIHRydWUpO1xyXG5cdFx0XHR2YXIgbmV4dCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMuZWZPbmVMaW5lV2luKHRoaXMuZWZsaW5lTiwgZmFsc2UpO1xyXG5cdFx0XHRcdHRoaXMuZWZsaW5lTiArPSAxO1xyXG5cdFx0XHRcdHRoaXMuZWZMaW5lV2luKCk7XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjUpLCBuZXh0KSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRlZk9uZUxpbmVXaW46IGZ1bmN0aW9uKG51bWJlciwgYm9vbCl7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRudW1iZXIgPSB0aGlzLkhfbGluZV93aW5bdGhpcy5lZmxpbmVOXS5saW5lO1xyXG5cdFx0bGV0IFRSZWQgPSB0aGlzLkxpbmUubWFpbkxpbmVzW251bWJlci0xXTtcclxuXHRcdGlmIChib29sKSB7XHJcblx0XHRcdFRSZWQuZWYgPSB0cnVlO1xyXG5cdFx0XHRUUmVkLm9uU2hvdygpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdFRSZWQuZWYgPSBmYWxzZTtcclxuXHRcdFx0VFJlZC5vbkhpZGRlbigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aGlldVVuZzogZnVuY3Rpb24oKXtcclxuXHRcdGlmICh0aGlzLmlzQmlnV2luICYmICF0aGlzLmlzTm9IdSkge1xyXG5cdFx0XHQvLyBCaWcgV2luXHJcblx0XHRcdHRoaXMuQmlnV2luLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5CaWdXaW4ucGxheSgpO1xyXG5cdFx0XHR0aGlzLm9sZEJpZ1dpbiA9IHRydWU7XHJcblx0XHR9ZWxzZSBpZiAodGhpcy5pc05vSHUpe1xyXG5cdFx0XHQvLyBO4buVIEjFqVxyXG5cdFx0XHR0aGlzLk5vSHUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLk5vSHUucGxheSgpO1xyXG5cdFx0fWVsc2UgaWYgKCEhdGhpcy5pc0JvbnVzKXtcclxuXHRcdFx0Ly8gQm9udXNcclxuXHRcdFx0dGhpcy5FRl9Cb251cy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuRUZfQm9udXMucGxheSgpO1xyXG5cdFx0XHRjYy5SZWRULmF1ZGlvLnBsYXlFZignYm9udXMnKTtcclxuXHRcdH1lbHNlIGlmICh0aGlzLmlzRnJlZSl7XHJcblx0XHRcdC8vIEZyZWVcclxuXHRcdFx0dGhpcy5FRl9GcmVlLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5FRl9GcmVlLnBsYXkoKTtcclxuXHRcdH1lbHNlIGlmICh0aGlzLkhfd2luID4gMCl7XHJcblx0XHRcdHZhciB0ZW1wID0gbmV3IGNjLk5vZGU7XHJcblx0XHRcdHRlbXAuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHRcdFx0dGVtcCA9IHRlbXAuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHRcdFx0dGVtcC5zdHJpbmcgPSAnKycrIGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuSF93aW4pO1xyXG5cdFx0XHR0ZW1wLmZvbnQgPSBjYy5SZWRULnV0aWwuZm9udENvbmc7XHJcblx0XHRcdHRlbXAubGluZUhlaWdodCA9IDEzMDtcclxuXHRcdFx0dGVtcC5mb250U2l6ZSAgID0gMjU7XHJcblx0XHRcdHRlbXAubm9kZS5wb3NpdGlvbiA9IGNjLnYyKDAsIDIxKTtcclxuXHRcdFx0dGhpcy5ub2RlTm90aWNlLmFkZENoaWxkKHRlbXAubm9kZSk7XHJcblx0XHRcdCF0aGlzLm9sZEJpZ1dpbiAmJiB0aGlzLl9wbGF5U0ZYKHRoaXMuYXVkaW9XaW4pO1xyXG5cdFx0XHR0ZW1wLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxLjIsIGNjLnYyKDAsIDEwNSkpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRoaXMuc3BlZWQgPSAwO1xyXG5cdFx0XHRcdHRlbXAubm9kZS5kZXN0cm95KCk7XHJcblx0XHRcdFx0dGhpcy5oaWV1VW5nKCk7XHJcblx0XHRcdFx0dGhpcy5zaG93TGluZVdpbihmYWxzZSk7XHJcblx0XHRcdH0sIHRoaXMpKSk7XHJcblx0XHRcdHRoaXMuSF93aW4gPSAwO1xyXG5cdFx0XHR0aGlzLm9sZEJpZ1dpbiA9IGZhbHNlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGlmICh0aGlzLmlzQXV0byB8fCB0aGlzLmlzRnJlZVNwaW4pIHtcclxuXHRcdFx0XHR0aGlzLnRpbWVPdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHR0aGlzLm9uQXV0b1NwaW4oKTtcclxuXHRcdFx0XHRcdHRoaXMuc3BlZWQgPSA0MDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5iaW5kKHRoaXMpLCB0aGlzLnNwZWVkKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5yZXNldFNwaW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25DaGFuZ2VyQmV0OiBmdW5jdGlvbihldmVudCwgY3VzdG9tRXZlbnREYXRhKXtcclxuXHRcdHRoaXMuX3BsYXlTRlgodGhpcy5hdWRpb0NsaWNrKTtcclxuXHRcdHRoaXMuYmV0U2VsZWN0Kys7XHJcblx0XHRpZiAodGhpcy5iZXRTZWxlY3Q+MikgdGhpcy5iZXRTZWxlY3QgPSAwO1xyXG5cdFx0dGhpcy5iZXQuc3RyaW5nICA9IGN1c3RvbUV2ZW50RGF0YTtcclxuXHRcdHRoaXMudG9uZy5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLkxpbmUuZGF0YS5sZW5ndGggKiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuYmV0LnN0cmluZykpO1xyXG5cdFx0dGhpcy5HYW1lLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLkNob25DdW9jLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5yZXNldFNwaW4oKTtcclxuXHRcdHRoaXMub25HZXRIdSgpO1xyXG5cdH0sXHJcblx0b25TZWxlY3RCZXQ6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLkdhbWUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLkNob25DdW9jLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLm9uR2V0QWxsSHUoKTtcclxuXHRcdHRoaXMub25HZXRIdSgpO1xyXG5cdH0sXHJcblx0Y2hhbmdlckNvaW50OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5yZWQgICAgICAgICAgICA9ICF0aGlzLnJlZDtcclxuXHRcdHRoaXMubm9kZVJlZC5hY3RpdmUgPSAhdGhpcy5ub2RlUmVkLmFjdGl2ZTtcclxuXHRcdHRoaXMubm9kZVh1LmFjdGl2ZSAgPSAhdGhpcy5ub2RlWHUuYWN0aXZlO1xyXG5cdFx0dGhpcy51c2VyRGF0YShjYy5SZWRULnVzZXIpO1xyXG5cdFx0dGhpcy5vbkdldEh1KCk7XHJcblx0fSxcclxuXHRvbkNsaWNrQXV0bzogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuX3BsYXlTRlgodGhpcy5hdWRpb0NsaWNrKTtcclxuXHRcdHRoaXMub25BdXRvKCk7XHJcblx0fSxcclxuXHRvbkF1dG86IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmlzQXV0byA9ICF0aGlzLmlzQXV0bztcclxuXHRcdGlmICh0aGlzLmlzQXV0bykge1xyXG5cdFx0XHR0aGlzLmJ1dHRvbkF1dG8uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLmJ1dHRvbkF1dG8uY29sb3IgPSB0aGlzLmJ1dHRvbkF1dG8uY29sb3IuZnJvbUhFWCgnIzhBOEE4QScpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25DbGlja1NwaW46IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmlzU3BlZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMub25TcGluKCk7XHJcblx0fSxcclxuXHRvbkNsaWNrU3BpblNwZWVkOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5pc1NwZWVkID0gdHJ1ZTtcclxuXHRcdGlmKHRoaXMuaXNBdXRvKSB0aGlzLmlzRm9yY2VTcGVlZCA9IHRydWU7XHJcblx0XHR0aGlzLm9uU3BpbigpO1xyXG5cdH0sXHJcblx0b25BdXRvU3BpbjogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuX3BsYXlTRlgodGhpcy5hdWRpb0NsaWNrU3Bpbik7XHJcblx0XHR0aGlzLm9uR2V0U3BpbigpO1xyXG5cdH0sXHJcblx0b25TcGluOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYgKHRoaXMuTGluZS5kYXRhLmxlbmd0aCA8IDEpIHtcclxuXHRcdFx0dGhpcy5hZGROb3RpY2UoJ0No4buNbiDDrXQgbmjhuqV0IDEgZMOybmcnKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRpZiAoIXRoaXMuaXNTcGluKSB7XHJcblx0XHRcdFx0dGhpcy5fcGxheVNGWCh0aGlzLmF1ZGlvQ2xpY2tTcGluKTtcclxuXHRcdFx0XHR0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdFx0XHR2b2lkIDAgIT09IHRoaXMuZWZsaW5lTiAmJiB2b2lkIDAgIT09IHRoaXMuSF9saW5lX3dpbiAmJiB0aGlzLkhfbGluZV93aW4ubGVuZ3RoICYmIHRoaXMuZWZPbmVMaW5lV2luKHRoaXMuZWZsaW5lTiwgZmFsc2UpO1xyXG5cdFx0XHRcdHRoaXMuZWZsaW5lTyA9IHRoaXMuZWZsaW5lTiA9IDA7XHJcblx0XHRcdFx0dGhpcy5pc1NwaW4gPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuc2V0U3BpbigpO1xyXG5cdFx0XHRcdHRoaXMub25HZXRTcGluKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdHNldFNwaW46IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmJ1dHRvbkxpbmUucGF1c2VTeXN0ZW1FdmVudHMoKTtcclxuXHRcdHRoaXMuYnV0dG9uU3Bpbi5wYXVzZVN5c3RlbUV2ZW50cygpO1xyXG5cdFx0dGhpcy5idXR0b25TcGluU3BlZWQucGF1c2VTeXN0ZW1FdmVudHMoKTtcclxuXHRcdHRoaXMuYnV0dG9uQmV0LnBhdXNlU3lzdGVtRXZlbnRzKCk7XHJcblx0fSxcclxuXHRyZXNldFNwaW46IGZ1bmN0aW9uKCl7XHJcblx0XHRpZiAodGhpcy5pc0F1dG8pIHtcclxuXHRcdFx0dGhpcy5vbkF1dG8oKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuaXNTcGluID0gZmFsc2U7XHJcblx0XHR0aGlzLmlzRm9yY2VTcGVlZCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5idXR0b25MaW5lLnJlc3VtZVN5c3RlbUV2ZW50cygpO1xyXG5cdFx0dGhpcy5idXR0b25TcGluLnJlc3VtZVN5c3RlbUV2ZW50cygpO1xyXG5cdFx0dGhpcy5idXR0b25TcGluU3BlZWQucmVzdW1lU3lzdGVtRXZlbnRzKCk7XHJcblx0XHR0aGlzLmJ1dHRvbkJldC5yZXN1bWVTeXN0ZW1FdmVudHMoKTtcclxuXHR9LFxyXG5cdHJ1blJlZWxzOiBmdW5jdGlvbihpc1NwZWVkKXtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwsIGluZGV4KSB7XHJcblx0XHRcdGlmKGlzU3BlZWQgfHwgc2VsZi5pc0ZvcmNlU3BlZWQpXHJcblx0XHRcdFx0cmVlbC5zcGluKGluZGV4LDAuMjUpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0cmVlbC5zcGluKGluZGV4LDEpO1xyXG5cdFx0fSkpO1xyXG5cdFx0dGhpcy5pc1NwZWVkID0gZmFsc2U7XHJcblx0fSxcclxuXHRjb3B5OiBmdW5jdGlvbigpe1xyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCl7XHJcblx0XHRcdHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtMV0uc2V0SWNvbihyZWVsLmljb25zWzJdLmRhdGEpO1xyXG5cdFx0XHRyZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTJdLnNldEljb24ocmVlbC5pY29uc1sxXS5kYXRhKTtcclxuXHRcdFx0cmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0zXS5zZXRJY29uKHJlZWwuaWNvbnNbMF0uZGF0YSk7XHJcblx0XHR9KSk7XHJcblx0fSxcclxuXHRyYW5kb206IGZ1bmN0aW9uKCl7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsKXtcclxuXHRcdFx0UHJvbWlzZS5hbGwocmVlbC5pY29ucy5tYXAoZnVuY3Rpb24oaWNvbiwgaW5kZXgpe1xyXG5cdFx0XHRcdGlmIChpbmRleCA+IDIgJiYgaW5kZXggPCByZWVsLmljb25zLmxlbmd0aC0zKSB7XHJcblx0XHRcdFx0XHRpY29uLnJhbmRvbSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkpO1xyXG5cdFx0fSkpO1xyXG5cdH0sXHJcblx0b25HZXRTcGluOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtnOnt6ZXVzOntzcGluOntjdW9jOiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuYmV0LnN0cmluZyksIGxpbmU6IHRoaXMuTGluZS5kYXRhfX19fSk7XHJcblx0fSxcclxuXHRhZGROb3RpY2U6ZnVuY3Rpb24odGV4dCl7XHJcblx0XHR2YXIgbm90aWNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJOb3RpY2UpXHJcblx0XHR2YXIgbm90aWNlQ29tcG9uZW50ID0gbm90aWNlLmdldENvbXBvbmVudCgnbWluaV93YXJuaW5nJylcclxuXHRcdG5vdGljZUNvbXBvbmVudC50ZXh0LnN0cmluZyA9IHRleHQ7XHJcblx0XHR0aGlzLm5vZGVOb3RpY2UuYWRkQ2hpbGQobm90aWNlKTtcclxuXHR9LFxyXG5cdGJhY2tHYW1lOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5NaW5pUGFuZWwubm9kZS5wYXJlbnQgPSBudWxsO1xyXG5cdFx0dGhpcy5sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR2b2lkIDAgIT09IHRoaXMudGltZU91dCAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0KTtcclxuXHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbkdhbWUnKTtcclxuXHR9LFxyXG5cdHNpZ25PdXQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW5HYW1lJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuc2lnbk91dCgpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvbkdldEh1OiBmdW5jdGlvbigpe1xyXG5cdFx0aWYgKHZvaWQgMCAhPT0gY2MuUmVkVC5zZXR0aW5nLnRvcEh1LmRhdGEpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHR2YXIgY3VvYyA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcoc2VsZi5iZXQuc3RyaW5nKTtcclxuXHRcdFx0UHJvbWlzZS5hbGwoY2MuUmVkVC5zZXR0aW5nLnRvcEh1LmRhdGFbJ3pldXMnXS5maWx0ZXIoZnVuY3Rpb24odGVtcCl7XHJcblx0XHRcdFx0cmV0dXJuIHRlbXAudHlwZSA9PSBjdW9jO1xyXG5cdFx0XHR9KSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHR2YXIgcyA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5odS5zdHJpbmcpO1xyXG5cdFx0XHRcdHZhciBiZXQgPSByZXN1bHRbMF0uYmV0O1xyXG5cdFx0XHRcdGlmIChzLWJldCAhPSAwKVxyXG5cdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaHUsIHMsIGJldCwgMjAwMCwgdHJ1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25HZXRBbGxIdTogZnVuY3Rpb24oKXtcclxuXHRcdGlmICh2b2lkIDAgIT09IGNjLlJlZFQuc2V0dGluZy50b3BIdS5kYXRhKSB7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0dmFyIGN1b2MgPSBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHNlbGYuYmV0LnN0cmluZyk7XHJcblx0XHRcdFByb21pc2UuYWxsKGNjLlJlZFQuc2V0dGluZy50b3BIdS5kYXRhWyd6ZXVzJ10uZmlsdGVyKGZ1bmN0aW9uICh0ZW1wKSB7XHJcblx0XHRcdFx0cmV0dXJuIHRlbXAucmVkID09IHRydWU7XHJcblx0XHRcdH0pKVxyXG5cdFx0XHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdFx0XHRsZXQgaDEwMCA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKHRlbXApIHsgcmV0dXJuIHRlbXAudHlwZSA9PSAxMDAgfSk7XHJcblx0XHRcdFx0XHRsZXQgaDFrID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAodGVtcCkgeyByZXR1cm4gdGVtcC50eXBlID09IDEwMDAgfSk7XHJcblx0XHRcdFx0XHRsZXQgaDEwayA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKHRlbXApIHsgcmV0dXJuIHRlbXAudHlwZSA9PSAxMDAwMCB9KTtcclxuXHJcblx0XHRcdFx0XHRsZXQgcjEwMCA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5odTEwMC5zdHJpbmcpO1xyXG5cdFx0XHRcdFx0bGV0IHIxayA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5odTEwMDAuc3RyaW5nKTtcclxuXHRcdFx0XHRcdGxldCByMTBrID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmh1MTAwMDAuc3RyaW5nKTtcclxuXHJcblx0XHRcdFx0XHRpZiAocjEwMCAtIGgxMDBbMF0uYmV0ICE9IDApIHtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaHUxMDAsIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5odTEwMC5zdHJpbmcpLCBoMTAwWzBdLmJldCwgNDkwMCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAocjFrIC0gaDFrWzBdLmJldCAhPSAwKSB7XHJcblx0XHRcdFx0XHRcdGhlbHBlci5udW1iZXJUbyh0aGlzLmh1MTAwMCwgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmh1MTAwMC5zdHJpbmcpLCBoMWtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChyMTBrIC0gaDEwa1swXS5iZXQgIT0gMCkge1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5odTEwMDAwLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaHUxMDAwMC5zdHJpbmcpLCBoMTBrWzBdLmJldCwgNDkwMCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRwbGF5TXVzaWM6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9CRy5wbGF5KCk7XHJcbiAgICB9LFxyXG4gICAgcGF1c2VNdXNpYzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb0JHLnBhdXNlKCk7XHJcbiAgICB9LFxyXG4gICAgb25TZXRBdWRpbzogZnVuY3Rpb24oKXtcclxuICAgIFx0aWYoY2MuUmVkVC5pc1NvdW5kQmFja2dyb3VuZCgpKXtcclxuICAgICAgICBcdGNjLlJlZFQuc2V0U291bmRCYWNrZ3JvdW5kKGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuSVNfU09VTkQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2MuUmVkVC5zZXRTb3VuZEdhbWUoZmFsc2UpO1xyXG5cdFx0XHR0aGlzLmF1ZGlvSWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuYXVkaW9JY29uc1swXTtcclxuICAgIFx0fWVsc2V7XHJcbiAgICBcdFx0Y2MuUmVkVC5zZXRTb3VuZEJhY2tncm91bmQodHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMucGxheU11c2ljKCk7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuSVNfU09VTkQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYy5SZWRULnNldFNvdW5kR2FtZSh0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb0ljb24uc3ByaXRlRnJhbWUgPSB0aGlzLmF1ZGlvSWNvbnNbMV07XHJcbiAgICBcdH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=