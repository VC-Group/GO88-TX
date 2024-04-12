
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuMain/TaiXiuMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1f5dGzy/ZDl7mqfiHNadfE', 'TaiXiuMain');
// Script/Game/TaiXiu/TaiXiuMain/TaiXiuMain.js

'use strict';

var TX_Board = require('TaiXiuBoard'),
    TX_Chat = require('TaiXiuChat'),
    BrowserUtil = require('BrowserUtil'),
    helper = require('Helper'),
    TaiXiu_efScale = require('TaiXiu_efScale');

cc.Class({
	extends: cc.Component,
	properties: {
		background: cc.Node,
		bg_Dice: cc.Animation,
		bg_efDice: cc.Node,
		inputL: cc.Node,
		inputR: cc.Node,
		inputLTxt: cc.Label,
		inputRTxt: cc.Label,
		inputLeft: cc.EditBox,
		inputRight: cc.EditBox,
		totalLeft: cc.Label,
		totalRight: cc.Label,
		myLeft: cc.Label,
		myRight: cc.Label,
		playerLeft: cc.Label,
		playerRight: cc.Label,
		nodeKetQua: cc.Node,
		labelKetQua: cc.Label,
		timeWait: cc.Label,
		nodeTimeWait: cc.Node,
		timeCuoc: cc.Label,
		timePopup: cc.Label,
		nodeTimePopup: cc.Node,
		labelPhien: cc.Label,
		diaNan: cc.Node,
		dice: {
			default: [],
			type: cc.Sprite
		},
		diceSF: {
			default: [],
			type: cc.SpriteFrame
		},
		dotLogs: cc.Node,
		diceAnimation: cc.Animation,
		efTai: TaiXiu_efScale,
		efXiu: TaiXiu_efScale,
		efTaiColor: TaiXiu_efScale,
		efXiuColor: TaiXiu_efScale,
		frameNan: {
			default: [],
			type: cc.SpriteFrame
		},
		spriteNan: cc.Sprite,
		dot_black: cc.SpriteFrame,
		dot_white: cc.SpriteFrame,
		dot_yellow: cc.SpriteFrame,
		notice: cc.Node,
		fontCong: cc.BitmapFont,
		fontTru: cc.BitmapFont,
		WIN_HT: cc.Label,
		WIN_DN: cc.Label,
		LOST_HT: cc.Label,
		LOST_DN: cc.Label,
		TX_Chat: TX_Chat,
		TX_Board: TX_Board,
		taixiu: true,
		btnLTxt: cc.Node,
		btnRTxt: cc.Node,
		audioWin: cc.AudioSource
	},
	DiaNan: function DiaNan() {
		this.dataLogs();

		this.nodeKetQua.active = true;
		if (this.diemSo > 10) {
			this.efTaiColor.node.active = true;
			this.efTai.node.active = false;

			this.efTaiColor.play();
		} else {
			this.efXiuColor.node.active = true;
			this.efXiu.node.active = false;
			this.efXiuColor.play();
		}

		if (void 0 !== this._results.win && this._results.win) {
			this.audioWin.play();
			if (this.isNan) {
				this.status();
			}
		}
	},
	init: function init(obj) {
		this.RedT = obj;
		cc.RedT.setting.taixiu.data = cc.RedT.setting.taixiu.data || { taixiu: {}, du_day: {} };
		this.isNan = false;
		if (void 0 === cc.RedT.util.fontCong) {
			cc.RedT.util.fontCong = this.fontCong;
			cc.RedT.util.fontTru = this.fontTru;
		}
		if (void 0 === cc.RedT.setting.taixiu.getLogs) {
			cc.RedT.setting.taixiu.getLogs = false;
		}
		if (void 0 === cc.RedT.setting.taixiu.isNan) {
			cc.RedT.setting.taixiu.isNan = false;
		}

		this.dotLogs = this.dotLogs.children.map(function (dot) {
			var temp = dot.getComponent(cc.Sprite);
			temp.mod = dot.getComponent('TaiXiuMain_logTips');
			return temp;
		});
		this.dotLogs.reverse();

		this.onDiceAnimationFinish = function (event) {
			this.setDice(true);

			if (this.isNan) {
				console.log("onDiceAnimationFinish");
			} else {
				this.DiaNan();
				// this.dataLogs();
				// this.nodeKetQua.active = true;
				// if (this.diemSo > 10) {
				// 	this.efTaiColor.play()
				// }else{
				// 	this.efXiuColor.play()
				// }
			}
			this.diceAnimation.node.active = false;
		};
		if (void 0 !== cc.RedT.setting.taixiu.position) {
			this.node.position = cc.RedT.setting.taixiu.position;
		}
		if (cc.RedT.setting.taixiu.getLogs) {
			if (void 0 !== cc.RedT.setting.taixiu.time_remain) {
				cc.RedT.setting.taixiu.time_remain++;
				this.nextRealTime();
			}
			this.reLoadGame();
		}
	},
	onLoad: function onLoad() {
		var self = this;
		this.ttOffset = null;
		this.editboxs = [this.inputLeft, this.inputRight];
		this.TX_Board.init(this);
		this.TX_Chat.init(this);
		this._results = {};
		this.diaNan.getComponent('TaiXiu_DiaNan').init(this);

		this.keyHandle = function (t) {
			return t.keyCode === cc.macro.KEY.tab ? (this.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), this.onCuocClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
		};

		this.diceAnimation.on('finished', this.onDiceAnimationFinish, this);
		this.onCuocClick = function () {
			var bet = helper.getOnlyNumberInString(this.input.string);
			bet = parseInt(bet);
			if (this.RedT.board) {
				this.input.string = '';
			} else {
				this.input.string = '0';
			}
			this.TX_Board.node.active = false;
			if (isNaN(bet) || bet < 1000) {
				var notice = cc.instantiate(this.RedT.RedT.prefabMiniNotice);
				var noticeComponent = notice.getComponent('mini_warning');
				noticeComponent.text.string = 'Tiền cược phải lớn hơn 1.000 Vinh';
				this.notice.addChild(notice);
			} else {
				cc.RedT.send({ taixiu: { cuoc: { select: this.inputOld == 'left', bet: bet } } });
			}
		};
		if (this.RedT.board) {
			this.inputL.active = this.inputR.active = false;
			this.inputLeft.node.active = this.inputRight.node.active = true;
		}
	},

	onEnable: function onEnable() {
		this.background.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.background.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.background.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.background.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
		//this.background.on(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);

		this.RedT.board && cc.sys.isBrowser && this.addEvent();
		this.nodeTimePopup.active = false;

		if (this.RedT.board) {
			BrowserUtil.inputAddEvent(this.inputLeft, 'input', this.updateValue);
			BrowserUtil.inputAddEvent(this.inputRight, 'input', this.updateValue);
		}
	},
	onDisable: function onDisable() {
		this.background.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.background.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.background.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.background.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
		//	this.background.off(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);

		this.RedT.board && cc.sys.isBrowser && this.removeEvent();
		this.clean();
		!!cc.RedT.IS_LOGIN && (this.nodeTimePopup.active = true);

		if (this.RedT.board) {
			BrowserUtil.inputRemoveEvent(this.inputLeft, 'input', this.updateValue);
			BrowserUtil.inputRemoveEvent(this.inputRight, 'input', this.updateValue);
		}
	},
	updateValue: function updateValue(e) {
		var value = helper.numberWithCommas(helper.getOnlyNumberInString(this.value));
		this.value = value == '0' ? '' : value;
	},
	addEvent: function addEvent() {
		for (var t in this.editboxs) {
			BrowserUtil.getHTMLElementByEditBox(this.editboxs[t]).addEventListener('keydown', this.keyHandle.bind(this), !1);
		}
	},
	removeEvent: function removeEvent() {
		for (var t in this.editboxs) {
			BrowserUtil.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener('keydown', this.keyHandle.bind(this), !1);
		}
	},
	changeNextFocusEditBox: function changeNextFocusEditBox() {
		for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++) {
			if (BrowserUtil.checkEditBoxFocus(this.editboxs[e])) {
				BrowserUtil.focusEditBox(this.editboxs[e]);
				t = !0;
				break;
			}
		}
		!t && 0 < this.editboxs.length && BrowserUtil.focusEditBox(this.editboxs[1]);
	},
	clean: function clean() {
		this.inputLeft.string = this.inputRight.string = '';
	},
	onChangerNan: function onChangerNan() {
		cc.RedT.setting.taixiu.isNan = this.isNan = !this.isNan;
		this.spriteNan.spriteFrame = this.isNan ? this.frameNan[1] : this.frameNan[0];
	},
	reLoadGame: function reLoadGame() {
		this.regTimeOut2 = setTimeout(function () {
			this.dataLogs();
			if (cc.RedT.setting.taixiu.isNan != this.isNan) {
				this.onChangerNan();
			}
			this.onDuDay(cc.RedT.setting.taixiu.data.du_day);
			this.onDataTaiXiu(cc.RedT.setting.taixiu.data.taixiu);
		}.bind(this), 50);
		this.setPhien();
	},
	eventStart: function eventStart(e) {
		this.setTop();
		this.ttOffset = cc.v2(e.touch.getLocationX() - this.node.position.x, e.touch.getLocationY() - this.node.position.y);
	},
	eventMove: function eventMove(e) {
		this.node.position = cc.v2(e.touch.getLocationX() - this.ttOffset.x, e.touch.getLocationY() - this.ttOffset.y);
	},
	eventEnd: function eventEnd() {
		cc.RedT.setting.taixiu.position = this.node.position;
	},
	setTop: function setTop() {
		this.node.parent.insertChild(this.node);
		this.RedT.setTop();
	},
	onSelectInput: function onSelectInput(event, select) {
		this.TX_Board.node.active = true;
		this.inputOld = select;
		switch (select) {
			case 'right':
				this.input = this.RedT.board ? this.inputRight : this.inputRTxt;
				this.btnRTxt.active = false;
				this.btnLTxt.active = true;
				break;

			case 'left':
				this.input = this.RedT.board ? this.inputLeft : this.inputLTxt;
				this.btnLTxt.active = false;
				this.btnRTxt.active = true;
				break;
		}
	},
	onChangerInput: function onChangerInput() {
		var value = helper.numberWithCommas(helper.getOnlyNumberInString(this.input.string));
		this.input.string = value == '0' ? '' : value;
	},
	setPhien: function setPhien() {
		var phien = cc.RedT.setting.taixiu.logs[0].phien + 1;
		this.labelPhien.string = '#' + phien;
	},
	setDice: function setDice() {
		var bool = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
		var sprite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

		var self = this;
		this.dice.forEach(function (dice, index) {
			sprite && (dice.spriteFrame = self.diceSF[cc.RedT.setting.taixiu.logs[0].dice[index] - 1]);
			dice.node.active = bool;
		});
	},
	onData: function onData(data) {

		if (void 0 !== data.get_phien) {
			this.RedT.TX_LichSuPhien.onData(data.get_phien);
		}
		if (void 0 !== data.err) {
			var notice = cc.instantiate(this.RedT.RedT.prefabMiniNotice);
			var noticeComponent = notice.getComponent('mini_warning');
			noticeComponent.text.string = data.err;
			this.notice.addChild(notice);
		}
		if (void 0 !== data.du_day) {
			Object.assign(cc.RedT.setting.taixiu.data.du_day, data.du_day);
			this.onDuDay(data.du_day);
		}
		if (void 0 !== data.taixiu) {
			Object.assign(cc.RedT.setting.taixiu.data.taixiu, data.taixiu);
			this.onDataTaiXiu(data.taixiu);
		}
		if (void 0 !== data.get_top) {
			this.RedT.TX_Top.onData(data.get_top);
		}
		if (void 0 !== data.chat) {
			this.TX_Chat.onData(data.chat);
		}
		if (void 0 !== data.status) {
			this.status(data.status);
		}
		if (void 0 !== data.get_log) {
			this.RedT.TX_LichSu.onData(data.get_log);
		}
		if (void 0 !== data.logs) {
			cc.RedT.setting.taixiu.logs = data.logs;
			this.dataLogs();
			this.setPhien();
			if (cc.RedT.setting.taixiu.time_remain > 60) {
				//60
				this.setDice(!0);
				this.nodeTimeWait.active = true;
				this.timeCuoc.node.active = false;
			}
			cc.RedT.setting.taixiu.getLogs = true;
		}
		if (void 0 !== data.time_remain) {
			cc.RedT.setting.taixiu.time_remain = data.time_remain;
			this.playTime();
		}
		if (void 0 !== data.finish) {
			if (cc.RedT.setting.taixiu.getLogs) {
				// Huỷ đếm
				void 0 !== this.timeInterval && clearInterval(this.timeInterval);
				// Thêm kết quả
				cc.RedT.setting.taixiu.logs.unshift({ dice: [data.finish.dices[0], data.finish.dices[1], data.finish.dices[2]], phien: data.finish.phien });
				cc.RedT.setting.taixiu.logs.length > 120 && cc.RedT.setting.taixiu.logs.pop();
				// Đặt dữ liệu
				this.diemSo = data.finish.dices[0] + data.finish.dices[1] + data.finish.dices[2];
				this.labelKetQua.string = this.diemSo;
				if (this.isNan) {
					this.diaNan.active = true;
					this.diaNan.position = cc.v2(0, -8);
					this.spriteNan.node.active = false;
					this.onDiceAnimationFinish();
				} else {
					this.diceAnimation.node.active = true;
					if (this.node.activeInHierarchy) {
						this.diceAnimation.play();
					} else {
						this.onDiceAnimationFinish();
					}
				}
				this.nodeTimeWait.active = true;
				this.timeCuoc.node.active = false;
			}
			cc.RedT.setting.taixiu.time_remain = 77;
			//	cc.RedT.setting.taixiu.time_remain = 77;
			//cc.RedT.setting.taixiu.time_remain = 82;
			this.playTime();
		}
	},
	efStop: function efStop() {

		this.efTaiColor.stop();
		this.efXiuColor.stop();

		this.efTai.node.active = true;
		this.efXiu.node.active = true;
	},
	playTime: function playTime() {
		void 0 !== this.timeInterval && clearInterval(this.timeInterval);

		this.audioWin.stop();
		this._results = {};

		this.timeInterval = setInterval(function () {
			if (cc.RedT.setting.taixiu.time_remain > 61) {
				//61
				if (this.bg_Dice._animator !== null && this.bg_Dice._animator.isPlaying) {
					this.bg_Dice.stop();
				}
				this.bg_efDice.active = false;
				var time = helper.numberPad(cc.RedT.setting.taixiu.time_remain - 62, 2); //62
				this.timePopup.node.active && (this.timePopup.string = time) && (this.timePopup.node.color = cc.color(255, 0, 0, 255));
				this.timeWait.string = '00:' + helper.numberPad(time, 2);
				if (cc.RedT.setting.taixiu.time_remain < 71) {
					//71 51
					this.efStop();
				}
				if (cc.RedT.setting.taixiu.time_remain < 66) {
					//66 46 
					this.nodeKetQua.active = false;
					this.isNan && (this.diaNan.active = false);
				}
			} else {
				if (this.bg_Dice._animator !== null && !this.bg_Dice._animator.isPlaying) {
					var state = this.bg_Dice.getAnimationState(this.bg_Dice._defaultClip.name);
					state.speed = 1;
					this.bg_Dice._animator.playState(state);
				}
				if (this.bg_Dice._animator !== null && this.bg_Dice._animator.isPlaying) {
					if (cc.RedT.setting.taixiu.time_remain < 7) {
						this.bg_Dice._animator._anims.array[0].speed = 10;
					} else if (cc.RedT.setting.taixiu.time_remain < 23) {
						this.bg_Dice._animator._anims.array[0].speed = 6;
					} else if (cc.RedT.setting.taixiu.time_remain < 33) {
						this.bg_Dice._animator._anims.array[0].speed = 3;
					}
				}

				this.bg_efDice.active = true;
				if (!!this.dice[0].node.active) {
					this.setDice(false, false);
					this.reset();
				}
				this.efStop();
				this.nodeTimeWait.active = this.nodeKetQua.active = this.diaNan.active = false;
				this.timeCuoc.node.active = this.spriteNan.node.active = true;
				if (cc.RedT.setting.taixiu.time_remain > 0) {
					var time = helper.numberPad(cc.RedT.setting.taixiu.time_remain - 1, 2);
					if (cc.RedT.setting.taixiu.getLogs) {
						this.timeCuoc.string = +time;
					}
					this.timePopup.node.active && (this.timePopup.string = time) && (this.timePopup.node.color = cc.color(155, 75, 2, 255));
					if (cc.RedT.setting.taixiu.time_remain <= 10) this.timeCuoc.node.color = cc.color(255, 69, 69, 255);else this.timeCuoc.node.color = cc.Color.WHITE;
				} else clearInterval(this.timeInterval);
			}
			cc.RedT.setting.taixiu.time_remain--;
		}.bind(this), 1000);
	},
	nextRealTime: function nextRealTime() {
		if (cc.RedT.setting.taixiu.time_remain > 61) {
			//61
			this.setDice(true);
			this.nodeTimeWait.active = true;
			this.timeCuoc.node.active = false;
			var time = helper.numberPad(cc.RedT.setting.taixiu.time_remain - 62, 2); //62 42
			this.timePopup.node.color = cc.color(255, 0, 0, 255);
			this.timePopup.string = time;
			this.timeWait.string = '00:' + helper.numberPad(time, 2);
		} else {
			this.nodeTimeWait.active = false;
			this.timeCuoc.node.active = true;
			if (cc.RedT.setting.taixiu.time_remain > 0) {
				var time = helper.numberPad(cc.RedT.setting.taixiu.time_remain - 1, 2);
				if (cc.RedT.setting.taixiu.getLogs) {
					this.timeCuoc.string = '00:' + time;
				}
				this.timePopup.node.color = cc.color(155, 75, 2, 255);
				this.timePopup.string = time;
				if (cc.RedT.setting.taixiu.time_remain <= 10) this.timeCuoc.node.color = cc.color(255, 69, 69, 255);else this.timeCuoc.node.color = cc.Color.WHITE;
			}
		}
	},
	onDataTaiXiu: function onDataTaiXiu(data) {
		void 0 !== data.red_tai && (this.totalLeft.string = helper.numberWithCommas(data.red_tai));
		void 0 !== data.red_xiu && (this.totalRight.string = helper.numberWithCommas(data.red_xiu));
		void 0 !== data.red_me_tai && (this.myLeft.string = helper.numberWithCommas(data.red_me_tai));
		void 0 !== data.red_me_xiu && (this.myRight.string = helper.numberWithCommas(data.red_me_xiu));
		void 0 !== data.red_player_tai && (this.playerLeft.string = helper.numberWithCommas(data.red_player_tai));
		void 0 !== data.red_player_xiu && (this.playerRight.string = helper.numberWithCommas(data.red_player_xiu));
	},
	onDuDay: function onDuDay(data) {
		this.WIN_HT.string = data.tLineWinRedH;
		this.WIN_DN.string = data.tLineWinRed;
		this.LOST_HT.string = data.tLineLostRedH;
		this.LOST_DN.string = data.tLineLostRed;
	},
	dataLogs: function dataLogs() {
		if (!!cc.RedT.setting.taixiu.logs.length) {
			var self = this;
			//Main log
			this.dotLogs.forEach(function (dot, index) {
				var data = cc.RedT.setting.taixiu.logs[index];
				if (void 0 !== data) {
					var point = data.dice[0] + data.dice[1] + data.dice[2];
					dot.node.active = true;
					dot.node.phien = data.phien;
					dot.mod.text.string = data.dice[0] + '-' + data.dice[1] + '-' + data.dice[2];
					dot.spriteFrame = point < 11 ? self.dot_white : self.dot_black;
				} else {
					dot.node.active = false;
				}
			});

			var line_dice1 = [];
			var line_dice2 = [];
			var line_dice3 = [];
			var line_tong = [];

			var tmp_DS = -1;
			var tmp_arrA = [];
			var tmp_arrB = [];
			var c_tai = 0;
			var c_xiu = 0;

			var sliced = cc.RedT.setting.taixiu.logs.slice(0, 19);
			sliced.reverse();
			// Line paint
			//var Paint = new Promise(function(resolve, reject){
			for (var i = 0; i < sliced.length; i++) {
				var data = sliced[i];
				if (void 0 !== data) {
					self.RedT.TX_ThongKe.lineAc(i, true);
					var dice1 = sliced[i].dice[0];
					var dice2 = sliced[i].dice[1];
					var dice3 = sliced[i].dice[2];
					var tong = dice1 + dice2 + dice3;

					line_dice1[i] = { x: i * 28, y: dice1 * 28 - 28, dice: dice1 };
					line_dice2[i] = { x: i * 28, y: dice2 * 28 - 28, dice: dice2 };
					line_dice3[i] = { x: i * 28, y: dice3 * 28 - 28, dice: dice3 };
					line_tong[i] = { x: i * 27.7, y: tong * 9.233 - 27.7, tong: tong };
				} else {
					self.RedT.TX_ThongKe.lineAc(i, false);
				}
			}
			self.RedT.TX_ThongKe.draw(self.RedT.TX_ThongKe.dice1_line, self.RedT.TX_ThongKe.dice1_dots, line_dice1);
			self.RedT.TX_ThongKe.draw(self.RedT.TX_ThongKe.dice2_line, self.RedT.TX_ThongKe.dice2_dots, line_dice2);
			self.RedT.TX_ThongKe.draw(self.RedT.TX_ThongKe.dice3_line, self.RedT.TX_ThongKe.dice3_dots, line_dice3);
			self.RedT.TX_ThongKe.draw_Tong(self.RedT.TX_ThongKe.tong_line, line_tong);
			//});

			// Ket Qua
			var KetQua = Promise.all(this.RedT.TX_ThongKe.KetQuaDot.map(function (dot, index) {
				var data = cc.RedT.setting.taixiu.logs[index];
				if (void 0 !== data) {
					dot.node.active = true;
					var point = data.dice[0] + data.dice[1] + data.dice[2];
					dot.spriteFrame = point < 11 ? self.dot_white : self.dot_black;
					return point > 10 ? 1 : 0;
				} else {
					dot.node.active = false;
					return -1;
				}
			}));

			// Diem So
			var diemSo = new Promise(function (resolve, reject) {
				var newArr = cc.RedT.setting.taixiu.logs.slice();
				newArr.reverse();
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = newArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var newDS = _step.value;

						var point = newDS.dice[0] + newDS.dice[1] + newDS.dice[2];
						var type = point > 10 ? 1 : 0;
						if (tmp_DS === -1) {
							tmp_DS = type;
						}
						if (type != tmp_DS || tmp_arrB.length > 4) {
							tmp_DS = type;
							tmp_arrA.push(tmp_arrB);
							tmp_arrB = [];
						}
						if (type == tmp_DS) {
							tmp_arrB.push(point);
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}

				tmp_arrA.push(tmp_arrB);
				resolve(tmp_arrA);
			});

			Promise.all([KetQua, diemSo]).then(function (values) {
				var newData = values[1];
				newData.reverse();
				newData = newData.slice(0, 20);
				newData.reverse();
				self.RedT.TX_ThongKe.KetQuaLeft.string = values[0].filter(function (i) {
					return i == 1;
				}).length;
				self.RedT.TX_ThongKe.KetQuaRight.string = values[0].filter(function (i) {
					return i == 0;
				}).length;
				Promise.all(self.RedT.TX_ThongKe.DiemSoCel.map(function (obj, i) {
					var data = newData[i];
					if (void 0 !== data) {
						obj.active = true;
						return Promise.all(obj.RedT.map(function (current, index) {
							var data_Cel = data[index];
							if (void 0 !== data_Cel) {
								var type = data_Cel > 10 ? true : false;
								c_tai = type ? c_tai + 1 : c_tai;
								c_xiu = !type ? c_xiu + 1 : c_xiu;
								current.node.active = true;
								current.node.color = type ? cc.color().fromHEX('#B3A1A1') : cc.Color.WHITE;
								current.text.string = data_Cel;
								current.text.node.color = type ? cc.Color.WHITE : cc.Color.BLACK;
								current.spriteFrame = type ? self.dot_black : self.dot_white;
							} else {
								current.node.active = false;
							}
							return void 0;
						}));
					} else {
						obj.active = false;
					}
					return void 0;
				})).then(function (varT) {
					self.RedT.TX_ThongKe.DiemSoLeft.string = c_tai;
					self.RedT.TX_ThongKe.DiemSoRight.string = c_xiu;
				});
			});
		}
	},
	reset: function reset() {
		this.efTaiColor.node.active = false;
		this.efXiuColor.node.active = false;
		this.setPhien();
		this.isNan && this.dataLogs();
		cc.RedT.setting.taixiu.data.taixiu.red_me_tai = cc.RedT.setting.taixiu.data.taixiu.red_me_xiu = cc.RedT.setting.taixiu.data.taixiu.red_player_tai = cc.RedT.setting.taixiu.data.taixiu.red_player_xiu = cc.RedT.setting.taixiu.data.taixiu.red_tai = cc.RedT.setting.taixiu.data.taixiu.red_xiu = this.totalLeft.string = this.totalRight.string = this.myLeft.string = this.myRight.string = this.playerLeft.string = this.playerRight.string = 0;
	},
	setDefautl: function setDefautl() {
		cc.RedT.setting.taixiu.getLogs = this.nodeTimePopup.active = false;
		void 0 !== this.timeInterval && clearInterval(this.timeInterval);
		clearTimeout(this.regTimeOut);
		clearTimeout(this.regTimeOut2);
		this.TX_Chat.reset();
	},
	status: function status(data) {
		var time = 10;
		var isNan = this.isNan;
		var send = true;
		if (void 0 !== data) {
			this._results = data;
			time = 2e3;
		} else {
			data = this._results;
			time = 10;
			isNan = false;send = false;
		}

		this.regTimeOut = setTimeout(function () {
			if (!isNan) {
				var temp = new cc.Node();
				temp.addComponent(cc.Label);
				temp = temp.getComponent(cc.Label);
				temp.string = (data.win ? '+' : '-') + helper.numberWithCommas(data.bet);
				temp.font = data.win ? this.fontCong : this.fontTru;
				temp.lineHeight = 130;
				temp.fontSize = 22;
				temp.node.position = cc.v2(data.select ? -252 : 252, -50);
				this.notice.addChild(temp.node);
				temp.node.runAction(cc.sequence(cc.moveTo(3, cc.v2(data.select ? -252 : 252, 130)), cc.callFunc(function () {
					this.node.destroy();
				}, temp)));
				if (void 0 !== data.thuong && data.thuong > 0) {
					var thuong = new cc.Node();
					thuong.addComponent(cc.Label);
					thuong = thuong.getComponent(cc.Label);
					thuong.string = (data.win ? '+' : '-') + helper.numberWithCommas(data.thuong);
					thuong.font = cc.RedT.util.fontEffect;
					thuong.lineHeight = 90;
					thuong.fontSize = 14;
					this.notice.addChild(thuong.node);
					thuong.node.runAction(cc.sequence(cc.moveTo(3, cc.v2(0, 100)), cc.callFunc(function () {
						this.node.destroy();
					}, thuong)));
				}
			}
			if (send) cc.RedT.send({ taixiu: { get_new: true } });
		}.bind(this), time);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdU1haW5cXFRhaVhpdU1haW4uanMiXSwibmFtZXMiOlsiVFhfQm9hcmQiLCJyZXF1aXJlIiwiVFhfQ2hhdCIsIkJyb3dzZXJVdGlsIiwiaGVscGVyIiwiVGFpWGl1X2VmU2NhbGUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrZ3JvdW5kIiwiTm9kZSIsImJnX0RpY2UiLCJBbmltYXRpb24iLCJiZ19lZkRpY2UiLCJpbnB1dEwiLCJpbnB1dFIiLCJpbnB1dExUeHQiLCJMYWJlbCIsImlucHV0UlR4dCIsImlucHV0TGVmdCIsIkVkaXRCb3giLCJpbnB1dFJpZ2h0IiwidG90YWxMZWZ0IiwidG90YWxSaWdodCIsIm15TGVmdCIsIm15UmlnaHQiLCJwbGF5ZXJMZWZ0IiwicGxheWVyUmlnaHQiLCJub2RlS2V0UXVhIiwibGFiZWxLZXRRdWEiLCJ0aW1lV2FpdCIsIm5vZGVUaW1lV2FpdCIsInRpbWVDdW9jIiwidGltZVBvcHVwIiwibm9kZVRpbWVQb3B1cCIsImxhYmVsUGhpZW4iLCJkaWFOYW4iLCJkaWNlIiwiZGVmYXVsdCIsInR5cGUiLCJTcHJpdGUiLCJkaWNlU0YiLCJTcHJpdGVGcmFtZSIsImRvdExvZ3MiLCJkaWNlQW5pbWF0aW9uIiwiZWZUYWkiLCJlZlhpdSIsImVmVGFpQ29sb3IiLCJlZlhpdUNvbG9yIiwiZnJhbWVOYW4iLCJzcHJpdGVOYW4iLCJkb3RfYmxhY2siLCJkb3Rfd2hpdGUiLCJkb3RfeWVsbG93Iiwibm90aWNlIiwiZm9udENvbmciLCJCaXRtYXBGb250IiwiZm9udFRydSIsIldJTl9IVCIsIldJTl9ETiIsIkxPU1RfSFQiLCJMT1NUX0ROIiwidGFpeGl1IiwiYnRuTFR4dCIsImJ0blJUeHQiLCJhdWRpb1dpbiIsIkF1ZGlvU291cmNlIiwiRGlhTmFuIiwiZGF0YUxvZ3MiLCJhY3RpdmUiLCJkaWVtU28iLCJub2RlIiwicGxheSIsIl9yZXN1bHRzIiwid2luIiwiaXNOYW4iLCJzdGF0dXMiLCJpbml0Iiwib2JqIiwiUmVkVCIsInNldHRpbmciLCJkYXRhIiwiZHVfZGF5IiwidXRpbCIsImdldExvZ3MiLCJjaGlsZHJlbiIsIm1hcCIsImRvdCIsInRlbXAiLCJnZXRDb21wb25lbnQiLCJtb2QiLCJyZXZlcnNlIiwib25EaWNlQW5pbWF0aW9uRmluaXNoIiwiZXZlbnQiLCJzZXREaWNlIiwiY29uc29sZSIsImxvZyIsInBvc2l0aW9uIiwidGltZV9yZW1haW4iLCJuZXh0UmVhbFRpbWUiLCJyZUxvYWRHYW1lIiwib25Mb2FkIiwic2VsZiIsInR0T2Zmc2V0IiwiZWRpdGJveHMiLCJrZXlIYW5kbGUiLCJ0Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwidGFiIiwiY2hhbmdlTmV4dEZvY3VzRWRpdEJveCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXIiLCJmb2N1c0dhbWUiLCJvbkN1b2NDbGljayIsIm9uIiwiYmV0IiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwiaW5wdXQiLCJzdHJpbmciLCJwYXJzZUludCIsImJvYXJkIiwiaXNOYU4iLCJpbnN0YW50aWF0ZSIsInByZWZhYk1pbmlOb3RpY2UiLCJub3RpY2VDb21wb25lbnQiLCJ0ZXh0IiwiYWRkQ2hpbGQiLCJzZW5kIiwiY3VvYyIsInNlbGVjdCIsImlucHV0T2xkIiwib25FbmFibGUiLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50U3RhcnQiLCJUT1VDSF9NT1ZFIiwiZXZlbnRNb3ZlIiwiVE9VQ0hfRU5EIiwiZXZlbnRFbmQiLCJUT1VDSF9DQU5DRUwiLCJzeXMiLCJpc0Jyb3dzZXIiLCJhZGRFdmVudCIsImlucHV0QWRkRXZlbnQiLCJ1cGRhdGVWYWx1ZSIsIm9uRGlzYWJsZSIsIm9mZiIsInJlbW92ZUV2ZW50IiwiY2xlYW4iLCJJU19MT0dJTiIsImlucHV0UmVtb3ZlRXZlbnQiLCJlIiwidmFsdWUiLCJudW1iZXJXaXRoQ29tbWFzIiwiZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3giLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpIiwibGVuZ3RoIiwiY2hlY2tFZGl0Qm94Rm9jdXMiLCJmb2N1c0VkaXRCb3giLCJvbkNoYW5nZXJOYW4iLCJzcHJpdGVGcmFtZSIsInJlZ1RpbWVPdXQyIiwic2V0VGltZW91dCIsIm9uRHVEYXkiLCJvbkRhdGFUYWlYaXUiLCJzZXRQaGllbiIsInNldFRvcCIsInYyIiwidG91Y2giLCJnZXRMb2NhdGlvblgiLCJ4IiwiZ2V0TG9jYXRpb25ZIiwieSIsInBhcmVudCIsImluc2VydENoaWxkIiwib25TZWxlY3RJbnB1dCIsIm9uQ2hhbmdlcklucHV0IiwicGhpZW4iLCJsb2dzIiwiYm9vbCIsInNwcml0ZSIsImZvckVhY2giLCJpbmRleCIsIm9uRGF0YSIsImdldF9waGllbiIsIlRYX0xpY2hTdVBoaWVuIiwiZXJyIiwiT2JqZWN0IiwiYXNzaWduIiwiZ2V0X3RvcCIsIlRYX1RvcCIsImNoYXQiLCJnZXRfbG9nIiwiVFhfTGljaFN1IiwicGxheVRpbWUiLCJmaW5pc2giLCJ0aW1lSW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwidW5zaGlmdCIsImRpY2VzIiwicG9wIiwiYWN0aXZlSW5IaWVyYXJjaHkiLCJlZlN0b3AiLCJzdG9wIiwic2V0SW50ZXJ2YWwiLCJfYW5pbWF0b3IiLCJpc1BsYXlpbmciLCJ0aW1lIiwibnVtYmVyUGFkIiwiY29sb3IiLCJzdGF0ZSIsImdldEFuaW1hdGlvblN0YXRlIiwiX2RlZmF1bHRDbGlwIiwibmFtZSIsInNwZWVkIiwicGxheVN0YXRlIiwiX2FuaW1zIiwiYXJyYXkiLCJyZXNldCIsIkNvbG9yIiwiV0hJVEUiLCJyZWRfdGFpIiwicmVkX3hpdSIsInJlZF9tZV90YWkiLCJyZWRfbWVfeGl1IiwicmVkX3BsYXllcl90YWkiLCJyZWRfcGxheWVyX3hpdSIsInRMaW5lV2luUmVkSCIsInRMaW5lV2luUmVkIiwidExpbmVMb3N0UmVkSCIsInRMaW5lTG9zdFJlZCIsInBvaW50IiwibGluZV9kaWNlMSIsImxpbmVfZGljZTIiLCJsaW5lX2RpY2UzIiwibGluZV90b25nIiwidG1wX0RTIiwidG1wX2FyckEiLCJ0bXBfYXJyQiIsImNfdGFpIiwiY194aXUiLCJzbGljZWQiLCJzbGljZSIsIlRYX1Rob25nS2UiLCJsaW5lQWMiLCJkaWNlMSIsImRpY2UyIiwiZGljZTMiLCJ0b25nIiwiZHJhdyIsImRpY2UxX2xpbmUiLCJkaWNlMV9kb3RzIiwiZGljZTJfbGluZSIsImRpY2UyX2RvdHMiLCJkaWNlM19saW5lIiwiZGljZTNfZG90cyIsImRyYXdfVG9uZyIsInRvbmdfbGluZSIsIktldFF1YSIsIlByb21pc2UiLCJhbGwiLCJLZXRRdWFEb3QiLCJyZXNvbHZlIiwicmVqZWN0IiwibmV3QXJyIiwibmV3RFMiLCJwdXNoIiwidGhlbiIsIm5ld0RhdGEiLCJ2YWx1ZXMiLCJLZXRRdWFMZWZ0IiwiZmlsdGVyIiwiS2V0UXVhUmlnaHQiLCJEaWVtU29DZWwiLCJjdXJyZW50IiwiZGF0YV9DZWwiLCJmcm9tSEVYIiwiQkxBQ0siLCJEaWVtU29MZWZ0IiwiRGllbVNvUmlnaHQiLCJzZXREZWZhdXRsIiwiY2xlYXJUaW1lb3V0IiwicmVnVGltZU91dCIsImFkZENvbXBvbmVudCIsImZvbnQiLCJsaW5lSGVpZ2h0IiwiZm9udFNpemUiLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsIm1vdmVUbyIsImNhbGxGdW5jIiwiZGVzdHJveSIsInRodW9uZyIsImZvbnRFZmZlY3QiLCJnZXRfbmV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQWNDLFFBQVEsYUFBUixDQUFsQjtBQUFBLElBQ0NDLFVBQWNE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XFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBUWF9Cb2FyZCAgICA9IHJlcXVpcmUoJ1RhaVhpdUJvYXJkJyksXHJcblx0VFhfQ2hhdCAgICAgPSByZXF1aXJlKCdUYWlYaXVDaGF0JyksXHJcblx0QnJvd3NlclV0aWwgPSByZXF1aXJlKCdCcm93c2VyVXRpbCcpLFxyXG5cdGhlbHBlciAgICAgID0gcmVxdWlyZSgnSGVscGVyJyksXHJcblx0VGFpWGl1X2VmU2NhbGUgPSByZXF1aXJlKCdUYWlYaXVfZWZTY2FsZScpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRiYWNrZ3JvdW5kOiBjYy5Ob2RlLFxyXG5cdFx0YmdfRGljZTogICBjYy5BbmltYXRpb24sXHJcblx0XHRiZ19lZkRpY2U6IGNjLk5vZGUsXHJcblx0XHRpbnB1dEw6IGNjLk5vZGUsXHJcblx0XHRpbnB1dFI6IGNjLk5vZGUsXHJcblx0XHRpbnB1dExUeHQ6IGNjLkxhYmVsLFxyXG5cdFx0aW5wdXRSVHh0OiBjYy5MYWJlbCxcclxuXHRcdGlucHV0TGVmdDogY2MuRWRpdEJveCxcclxuXHRcdGlucHV0UmlnaHQ6IGNjLkVkaXRCb3gsXHJcblx0XHR0b3RhbExlZnQ6IGNjLkxhYmVsLFxyXG5cdFx0dG90YWxSaWdodDogY2MuTGFiZWwsXHJcblx0XHRteUxlZnQ6IGNjLkxhYmVsLFxyXG5cdFx0bXlSaWdodDogY2MuTGFiZWwsXHJcblx0XHRwbGF5ZXJMZWZ0OiBjYy5MYWJlbCxcclxuXHRcdHBsYXllclJpZ2h0OiBjYy5MYWJlbCxcclxuXHRcdG5vZGVLZXRRdWE6IGNjLk5vZGUsXHJcblx0XHRsYWJlbEtldFF1YTogY2MuTGFiZWwsXHJcblx0XHR0aW1lV2FpdDogY2MuTGFiZWwsXHJcblx0XHRub2RlVGltZVdhaXQ6IGNjLk5vZGUsXHJcblx0XHR0aW1lQ3VvYzogY2MuTGFiZWwsXHJcblx0XHR0aW1lUG9wdXA6IGNjLkxhYmVsLFxyXG5cdFx0bm9kZVRpbWVQb3B1cDogY2MuTm9kZSxcclxuXHRcdGxhYmVsUGhpZW46IGNjLkxhYmVsLFxyXG5cdFx0ZGlhTmFuOiBjYy5Ob2RlLFxyXG5cdFx0ZGljZToge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogICAgY2MuU3ByaXRlXHJcblx0XHR9LFxyXG5cdFx0ZGljZVNGOiB7XHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0eXBlOiAgICBjYy5TcHJpdGVGcmFtZVxyXG5cdFx0fSxcclxuXHRcdGRvdExvZ3M6IGNjLk5vZGUsXHJcblx0XHRkaWNlQW5pbWF0aW9uOiBjYy5BbmltYXRpb24sXHJcblx0XHRlZlRhaTogVGFpWGl1X2VmU2NhbGUsXHJcblx0XHRlZlhpdTogVGFpWGl1X2VmU2NhbGUsXHJcblx0XHRlZlRhaUNvbG9yOiBUYWlYaXVfZWZTY2FsZSxcclxuXHRcdGVmWGl1Q29sb3I6IFRhaVhpdV9lZlNjYWxlLFxyXG5cdFx0ZnJhbWVOYW46IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6ICAgIGNjLlNwcml0ZUZyYW1lXHJcblx0XHR9LFxyXG5cdFx0c3ByaXRlTmFuOiBjYy5TcHJpdGUsXHJcblx0XHRkb3RfYmxhY2s6IGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0ZG90X3doaXRlOiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdGRvdF95ZWxsb3c6IGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0bm90aWNlOiBjYy5Ob2RlLFxyXG5cdFx0Zm9udENvbmc6IGNjLkJpdG1hcEZvbnQsXHJcblx0XHRmb250VHJ1OiBjYy5CaXRtYXBGb250LFxyXG5cdFx0V0lOX0hUOiBjYy5MYWJlbCxcclxuXHRcdFdJTl9ETjogY2MuTGFiZWwsXHJcblx0XHRMT1NUX0hUOiBjYy5MYWJlbCxcclxuXHRcdExPU1RfRE46IGNjLkxhYmVsLFxyXG5cdFx0VFhfQ2hhdDogVFhfQ2hhdCxcclxuXHRcdFRYX0JvYXJkOiBUWF9Cb2FyZCxcclxuXHRcdHRhaXhpdTogdHJ1ZSxcclxuXHRcdGJ0bkxUeHQ6IGNjLk5vZGUsXHJcblx0XHRidG5SVHh0OiBjYy5Ob2RlLFxyXG5cdFx0YXVkaW9XaW46Y2MuQXVkaW9Tb3VyY2VcclxuXHR9LFxyXG5cdERpYU5hbjpmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5kYXRhTG9ncygpO1xyXG5cdFx0XHJcblx0XHR0aGlzLm5vZGVLZXRRdWEuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdGlmICh0aGlzLmRpZW1TbyA+IDEwKSB7XHJcblx0XHRcdHRoaXMuZWZUYWlDb2xvci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZWZUYWkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcclxuXHRcdFx0dGhpcy5lZlRhaUNvbG9yLnBsYXkoKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLmVmWGl1Q29sb3Iubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmVmWGl1Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuZWZYaXVDb2xvci5wbGF5KCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYodm9pZCAwICE9PSB0aGlzLl9yZXN1bHRzLndpbiAmJiB0aGlzLl9yZXN1bHRzLndpbil7XHJcblx0XHRcdHRoaXMuYXVkaW9XaW4ucGxheSgpO1xyXG5cdFx0XHRpZiAodGhpcy5pc05hbikge1xyXG5cdFx0XHRcdHRoaXMuc3RhdHVzKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0aW5pdDogZnVuY3Rpb24ob2JqKSB7XHJcblx0XHR0aGlzLlJlZFQgPSBvYmo7XHJcblx0XHRjYy5SZWRULnNldHRpbmcudGFpeGl1LmRhdGEgPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmRhdGEgfHwge3RhaXhpdTp7fSxkdV9kYXk6e319O1xyXG5cdFx0dGhpcy5pc05hbiA9IGZhbHNlO1xyXG5cdFx0aWYgKHZvaWQgMCA9PT0gY2MuUmVkVC51dGlsLmZvbnRDb25nKSB7XHJcblx0XHRcdGNjLlJlZFQudXRpbC5mb250Q29uZyA9IHRoaXMuZm9udENvbmc7XHJcblx0XHRcdGNjLlJlZFQudXRpbC5mb250VHJ1ICA9IHRoaXMuZm9udFRydTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgPT09IGNjLlJlZFQuc2V0dGluZy50YWl4aXUuZ2V0TG9ncykge1xyXG5cdFx0XHRjYy5SZWRULnNldHRpbmcudGFpeGl1LmdldExvZ3MgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgPT09IGNjLlJlZFQuc2V0dGluZy50YWl4aXUuaXNOYW4pIHtcclxuXHRcdFx0Y2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5pc05hbiA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuZG90TG9ncyA9IHRoaXMuZG90TG9ncy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oZG90KXtcclxuXHRcdFx0bGV0IHRlbXAgPSBkb3QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblx0XHRcdHRlbXAubW9kID0gZG90LmdldENvbXBvbmVudCgnVGFpWGl1TWFpbl9sb2dUaXBzJyk7XHJcblx0XHRcdHJldHVybiB0ZW1wO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmRvdExvZ3MucmV2ZXJzZSgpO1xyXG5cclxuXHRcdHRoaXMub25EaWNlQW5pbWF0aW9uRmluaXNoID0gZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0XHR0aGlzLnNldERpY2UodHJ1ZSk7XHJcblxyXG5cdFx0XHRpZiAodGhpcy5pc05hbikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwib25EaWNlQW5pbWF0aW9uRmluaXNoXCIpXHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuRGlhTmFuKCk7XHJcblx0XHRcdFx0Ly8gdGhpcy5kYXRhTG9ncygpO1xyXG5cdFx0XHRcdC8vIHRoaXMubm9kZUtldFF1YS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdC8vIGlmICh0aGlzLmRpZW1TbyA+IDEwKSB7XHJcblx0XHRcdFx0Ly8gXHR0aGlzLmVmVGFpQ29sb3IucGxheSgpXHJcblx0XHRcdFx0Ly8gfWVsc2V7XHJcblx0XHRcdFx0Ly8gXHR0aGlzLmVmWGl1Q29sb3IucGxheSgpXHJcblx0XHRcdFx0Ly8gfVxyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuZGljZUFuaW1hdGlvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5wb3NpdGlvbikge1xyXG5cdFx0XHR0aGlzLm5vZGUucG9zaXRpb24gPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LnBvc2l0aW9uO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNjLlJlZFQuc2V0dGluZy50YWl4aXUuZ2V0TG9ncykge1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluKSB7XHJcblx0XHRcdFx0Y2MuUmVkVC5zZXR0aW5nLnRhaXhpdS50aW1lX3JlbWFpbisrO1xyXG5cdFx0XHRcdHRoaXMubmV4dFJlYWxUaW1lKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5yZUxvYWRHYW1lKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkxvYWQgKCkge1xyXG5cdFx0bGV0IHNlbGYgICAgICA9IHRoaXM7XHJcblx0XHR0aGlzLnR0T2Zmc2V0ID0gbnVsbDtcclxuXHRcdHRoaXMuZWRpdGJveHMgPSBbdGhpcy5pbnB1dExlZnQsIHRoaXMuaW5wdXRSaWdodF07XHJcblx0XHR0aGlzLlRYX0JvYXJkLmluaXQodGhpcyk7XHJcblx0XHR0aGlzLlRYX0NoYXQuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuX3Jlc3VsdHMgPSB7fTtcclxuXHRcdHRoaXMuZGlhTmFuLmdldENvbXBvbmVudCgnVGFpWGl1X0RpYU5hbicpLmluaXQodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5rZXlIYW5kbGUgPSBmdW5jdGlvbih0KSB7XHJcblx0XHRcdHJldHVybiB0LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS50YWIgPyAodGhpcy5jaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94KCksXHJcblx0XHRcdFx0dC5wcmV2ZW50RGVmYXVsdCAmJiB0LnByZXZlbnREZWZhdWx0KCksXHJcblx0XHRcdFx0ITEpIDogdC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZW50ZXIgPyAoQnJvd3NlclV0aWwuZm9jdXNHYW1lKCksIHRoaXMub25DdW9jQ2xpY2soKSxcclxuXHRcdFx0XHR0LnByZXZlbnREZWZhdWx0ICYmIHQucHJldmVudERlZmF1bHQoKSxcclxuXHRcdFx0XHQhMSkgOiB2b2lkIDBcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmRpY2VBbmltYXRpb24ub24oJ2ZpbmlzaGVkJywgdGhpcy5vbkRpY2VBbmltYXRpb25GaW5pc2gsIHRoaXMpO1xyXG5cdFx0dGhpcy5vbkN1b2NDbGljayA9IGZ1bmN0aW9uKCl7XHJcblx0XHRcdGxldCBiZXQgPSBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaW5wdXQuc3RyaW5nKTtcclxuXHRcdFx0YmV0ID0gcGFyc2VJbnQoYmV0KTtcclxuXHRcdFx0aWYgKHRoaXMuUmVkVC5ib2FyZCkge1xyXG5cdFx0XHRcdHRoaXMuaW5wdXQuc3RyaW5nID0gJyc7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuaW5wdXQuc3RyaW5nID0gJzAnO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuVFhfQm9hcmQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0aWYgKGlzTmFOKGJldCkgfHwgYmV0IDwgMTAwMCkge1xyXG5cdFx0XHRcdGxldCBub3RpY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlJlZFQuUmVkVC5wcmVmYWJNaW5pTm90aWNlKTtcclxuXHRcdFx0XHRsZXQgbm90aWNlQ29tcG9uZW50ID0gbm90aWNlLmdldENvbXBvbmVudCgnbWluaV93YXJuaW5nJyk7XHJcblx0XHRcdFx0bm90aWNlQ29tcG9uZW50LnRleHQuc3RyaW5nID0gJ1Rp4buBbiBjxrDhu6NjIHBo4bqjaSBs4bubbiBoxqFuIDEuMDAwIFZpbmgnO1xyXG5cdFx0XHRcdHRoaXMubm90aWNlLmFkZENoaWxkKG5vdGljZSk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGNjLlJlZFQuc2VuZCh7dGFpeGl1OntjdW9jOntzZWxlY3Q6KHRoaXMuaW5wdXRPbGQgPT0gJ2xlZnQnKSwgYmV0OmJldH19fSk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRpZiAodGhpcy5SZWRULmJvYXJkKSB7XHJcblx0XHRcdHRoaXMuaW5wdXRMLmFjdGl2ZSA9IHRoaXMuaW5wdXRSLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmlucHV0TGVmdC5ub2RlLmFjdGl2ZSA9IHRoaXMuaW5wdXRSaWdodC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAgdGhpcy5ldmVudFN0YXJ0LCB0aGlzKTtcclxuXHRcdHRoaXMuYmFja2dyb3VuZC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAgIHRoaXMuZXZlbnRNb3ZlLCAgdGhpcyk7XHJcblx0XHR0aGlzLmJhY2tncm91bmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAgICB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5ldmVudEVuZCwgICB0aGlzKTtcclxuXHRcdC8vdGhpcy5iYWNrZ3JvdW5kLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCAgdGhpcy5zZXRUb3AsICAgICB0aGlzKTtcclxuXHJcblx0XHR0aGlzLlJlZFQuYm9hcmQgJiYgY2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLmFkZEV2ZW50KCk7XHJcblx0XHR0aGlzLm5vZGVUaW1lUG9wdXAuYWN0aXZlID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKHRoaXMuUmVkVC5ib2FyZCkge1xyXG5cdFx0XHRCcm93c2VyVXRpbC5pbnB1dEFkZEV2ZW50KHRoaXMuaW5wdXRMZWZ0LCAnaW5wdXQnLCB0aGlzLnVwZGF0ZVZhbHVlKTtcclxuXHRcdFx0QnJvd3NlclV0aWwuaW5wdXRBZGRFdmVudCh0aGlzLmlucHV0UmlnaHQsICdpbnB1dCcsIHRoaXMudXBkYXRlVmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLmJhY2tncm91bmQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAgdGhpcy5ldmVudFN0YXJ0LCB0aGlzKTtcclxuXHRcdHRoaXMuYmFja2dyb3VuZC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgICB0aGlzLmV2ZW50TW92ZSwgIHRoaXMpO1xyXG5cdFx0dGhpcy5iYWNrZ3JvdW5kLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICAgIHRoaXMuZXZlbnRFbmQsICAgdGhpcyk7XHJcblx0XHR0aGlzLmJhY2tncm91bmQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5ldmVudEVuZCwgICB0aGlzKTtcclxuXHQvL1x0dGhpcy5iYWNrZ3JvdW5kLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgIHRoaXMuc2V0VG9wLCAgICAgdGhpcyk7XHJcblxyXG5cdFx0dGhpcy5SZWRULmJvYXJkICYmIGNjLnN5cy5pc0Jyb3dzZXIgJiYgdGhpcy5yZW1vdmVFdmVudCgpO1xyXG5cdFx0dGhpcy5jbGVhbigpO1xyXG5cdFx0ISFjYy5SZWRULklTX0xPR0lOICYmICh0aGlzLm5vZGVUaW1lUG9wdXAuYWN0aXZlID0gdHJ1ZSk7XHJcblxyXG5cdFx0aWYgKHRoaXMuUmVkVC5ib2FyZCkge1xyXG5cdFx0XHRCcm93c2VyVXRpbC5pbnB1dFJlbW92ZUV2ZW50KHRoaXMuaW5wdXRMZWZ0LCAnaW5wdXQnLCB0aGlzLnVwZGF0ZVZhbHVlKTtcclxuXHRcdFx0QnJvd3NlclV0aWwuaW5wdXRSZW1vdmVFdmVudCh0aGlzLmlucHV0UmlnaHQsICdpbnB1dCcsIHRoaXMudXBkYXRlVmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dXBkYXRlVmFsdWU6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0bGV0IHZhbHVlID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLnZhbHVlKSk7XHJcblx0XHR0aGlzLnZhbHVlID0gdmFsdWUgPT0gJzAnID8gJycgOiB2YWx1ZTtcclxuXHR9LFxyXG5cdGFkZEV2ZW50OiBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAobGV0IHQgaW4gdGhpcy5lZGl0Ym94cykge1xyXG5cdFx0XHRCcm93c2VyVXRpbC5nZXRIVE1MRWxlbWVudEJ5RWRpdEJveCh0aGlzLmVkaXRib3hzW3RdKS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5rZXlIYW5kbGUuYmluZCh0aGlzKSwgITEpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yIChsZXQgdCBpbiB0aGlzLmVkaXRib3hzKSB7XHJcblx0XHRcdEJyb3dzZXJVdGlsLmdldEhUTUxFbGVtZW50QnlFZGl0Qm94KHRoaXMuZWRpdGJveHNbdF0pLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmtleUhhbmRsZS5iaW5kKHRoaXMpLCAhMSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRjaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94OiBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAodmFyIHQgPSAhMSwgZSA9IDAsIGkgPSB0aGlzLmVkaXRib3hzLmxlbmd0aDsgZSA8IGk7IGUrKyl7XHJcblx0XHRcdGlmIChCcm93c2VyVXRpbC5jaGVja0VkaXRCb3hGb2N1cyh0aGlzLmVkaXRib3hzW2VdKSkge1xyXG5cdFx0XHRcdEJyb3dzZXJVdGlsLmZvY3VzRWRpdEJveCh0aGlzLmVkaXRib3hzW2VdKTtcclxuXHRcdFx0XHR0ID0gITA7XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0IXQgJiYgMCA8IHRoaXMuZWRpdGJveHMubGVuZ3RoICYmIEJyb3dzZXJVdGlsLmZvY3VzRWRpdEJveCh0aGlzLmVkaXRib3hzWzFdKTtcclxuXHR9LFxyXG5cdGNsZWFuOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5pbnB1dExlZnQuc3RyaW5nID0gdGhpcy5pbnB1dFJpZ2h0LnN0cmluZyA9ICcnO1xyXG5cdH0sXHJcblx0b25DaGFuZ2VyTmFuOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5pc05hbiA9IHRoaXMuaXNOYW4gPSAhdGhpcy5pc05hbjtcclxuXHRcdHRoaXMuc3ByaXRlTmFuLnNwcml0ZUZyYW1lICAgPSB0aGlzLmlzTmFuID8gdGhpcy5mcmFtZU5hblsxXSA6IHRoaXMuZnJhbWVOYW5bMF07XHJcblx0fSxcclxuXHRyZUxvYWRHYW1lOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5yZWdUaW1lT3V0MiA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5kYXRhTG9ncygpO1xyXG5cdFx0XHRpZiAoY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5pc05hbiAhPSB0aGlzLmlzTmFuKSB7XHJcblx0XHRcdFx0dGhpcy5vbkNoYW5nZXJOYW4oKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9uRHVEYXkoY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5kYXRhLmR1X2RheSk7XHJcblx0XHRcdHRoaXMub25EYXRhVGFpWGl1KGNjLlJlZFQuc2V0dGluZy50YWl4aXUuZGF0YS50YWl4aXUpO1xyXG5cdFx0fVxyXG5cdFx0LmJpbmQodGhpcyksIDUwKTtcclxuXHRcdHRoaXMuc2V0UGhpZW4oKTtcclxuXHR9LFxyXG5cdGV2ZW50U3RhcnQ6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0dGhpcy5zZXRUb3AoKTtcclxuXHRcdHRoaXMudHRPZmZzZXQgID0gY2MudjIoZS50b3VjaC5nZXRMb2NhdGlvblgoKSAtIHRoaXMubm9kZS5wb3NpdGlvbi54LCBlLnRvdWNoLmdldExvY2F0aW9uWSgpIC0gdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG5cdH0sXHJcblx0ZXZlbnRNb3ZlOiBmdW5jdGlvbihlKXtcclxuXHRcdHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYyKGUudG91Y2guZ2V0TG9jYXRpb25YKCkgLSB0aGlzLnR0T2Zmc2V0LngsIGUudG91Y2guZ2V0TG9jYXRpb25ZKCkgLSB0aGlzLnR0T2Zmc2V0LnkpO1xyXG5cdH0sXHJcblx0ZXZlbnRFbmQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULnNldHRpbmcudGFpeGl1LnBvc2l0aW9uID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG5cdH0sXHJcblx0c2V0VG9wOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLnBhcmVudC5pbnNlcnRDaGlsZCh0aGlzLm5vZGUpO1xyXG5cdFx0dGhpcy5SZWRULnNldFRvcCgpO1xyXG5cdH0sXHJcblx0b25TZWxlY3RJbnB1dDogZnVuY3Rpb24oZXZlbnQsIHNlbGVjdCl7XHJcblx0XHR0aGlzLlRYX0JvYXJkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMuaW5wdXRPbGQgPSBzZWxlY3Q7XHJcblx0XHRzd2l0Y2goc2VsZWN0KSB7XHJcblx0XHRcdGNhc2UgJ3JpZ2h0JzpcclxuXHRcdFx0XHR0aGlzLmlucHV0ID0gdGhpcy5SZWRULmJvYXJkID8gdGhpcy5pbnB1dFJpZ2h0IDogdGhpcy5pbnB1dFJUeHQ7XHJcblx0XHRcdFx0dGhpcy5idG5SVHh0LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuYnRuTFR4dC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2xlZnQnOlxyXG5cdFx0XHRcdHRoaXMuaW5wdXQgPSB0aGlzLlJlZFQuYm9hcmQgPyB0aGlzLmlucHV0TGVmdCA6IHRoaXMuaW5wdXRMVHh0O1xyXG5cdFx0XHRcdHRoaXMuYnRuTFR4dC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmJ0blJUeHQuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkNoYW5nZXJJbnB1dDogZnVuY3Rpb24oKXtcclxuXHRcdHZhciB2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pbnB1dC5zdHJpbmcpKTtcclxuXHRcdHRoaXMuaW5wdXQuc3RyaW5nID0gdmFsdWUgPT0gJzAnID8gJycgOiB2YWx1ZTtcclxuXHR9LFxyXG5cdHNldFBoaWVuOmZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgcGhpZW4gPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmxvZ3NbMF0ucGhpZW4rMTtcclxuXHRcdHRoaXMubGFiZWxQaGllbi5zdHJpbmcgPSAnIycgKyBwaGllbjtcclxuXHR9LFxyXG5cdHNldERpY2U6IGZ1bmN0aW9uKGJvb2wgPSBmYWxzZSwgc3ByaXRlID0gdHJ1ZSl7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLmRpY2UuZm9yRWFjaChmdW5jdGlvbihkaWNlLCBpbmRleCl7XHJcblx0XHRcdHNwcml0ZSAmJiAoZGljZS5zcHJpdGVGcmFtZSA9IHNlbGYuZGljZVNGW2NjLlJlZFQuc2V0dGluZy50YWl4aXUubG9nc1swXS5kaWNlW2luZGV4XS0xXSk7XHJcblx0XHRcdGRpY2Uubm9kZS5hY3RpdmUgPSBib29sO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdCBcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuZ2V0X3BoaWVuKSB7XHJcblx0XHRcdHRoaXMuUmVkVC5UWF9MaWNoU3VQaGllbi5vbkRhdGEoZGF0YS5nZXRfcGhpZW4pO1xyXG5cdFx0fVxyXG5cdFx0aWYodm9pZCAwICE9PSBkYXRhLmVycil7XHJcblx0XHRcdHZhciBub3RpY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlJlZFQuUmVkVC5wcmVmYWJNaW5pTm90aWNlKVxyXG5cdFx0XHR2YXIgbm90aWNlQ29tcG9uZW50ID0gbm90aWNlLmdldENvbXBvbmVudCgnbWluaV93YXJuaW5nJylcclxuXHRcdFx0bm90aWNlQ29tcG9uZW50LnRleHQuc3RyaW5nID0gZGF0YS5lcnI7XHJcblx0XHRcdHRoaXMubm90aWNlLmFkZENoaWxkKG5vdGljZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmR1X2RheSkge1xyXG5cdFx0XHRPYmplY3QuYXNzaWduKGNjLlJlZFQuc2V0dGluZy50YWl4aXUuZGF0YS5kdV9kYXksIGRhdGEuZHVfZGF5KTtcclxuXHRcdFx0dGhpcy5vbkR1RGF5KGRhdGEuZHVfZGF5KTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEudGFpeGl1KSB7XHJcblx0XHRcdE9iamVjdC5hc3NpZ24oY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5kYXRhLnRhaXhpdSwgZGF0YS50YWl4aXUpO1xyXG5cdFx0XHR0aGlzLm9uRGF0YVRhaVhpdShkYXRhLnRhaXhpdSk7XHJcblx0XHR9XHJcblx0XHRpZih2b2lkIDAgIT09IGRhdGEuZ2V0X3RvcCl7XHJcblx0XHRcdHRoaXMuUmVkVC5UWF9Ub3Aub25EYXRhKGRhdGEuZ2V0X3RvcCk7XHJcblx0XHR9XHJcblx0XHRpZih2b2lkIDAgIT09IGRhdGEuY2hhdCl7XHJcblx0XHRcdHRoaXMuVFhfQ2hhdC5vbkRhdGEoZGF0YS5jaGF0KTtcclxuXHRcdH1cclxuXHRcdGlmKHZvaWQgMCAhPT0gZGF0YS5zdGF0dXMpe1xyXG5cdFx0XHR0aGlzLnN0YXR1cyhkYXRhLnN0YXR1cylcclxuXHRcdH1cclxuXHRcdGlmKHZvaWQgMCAhPT0gZGF0YS5nZXRfbG9nKXtcclxuXHRcdFx0dGhpcy5SZWRULlRYX0xpY2hTdS5vbkRhdGEoZGF0YS5nZXRfbG9nKTtcclxuXHRcdH1cclxuXHRcdGlmKHZvaWQgMCAhPT0gZGF0YS5sb2dzKXtcclxuXHRcdFx0Y2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5sb2dzICAgPSBkYXRhLmxvZ3M7XHJcblx0XHRcdHRoaXMuZGF0YUxvZ3MoKTtcclxuXHRcdFx0dGhpcy5zZXRQaGllbigpO1xyXG5cdFx0XHRpZihjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluID4gNjApey8vNjBcclxuXHRcdFx0XHR0aGlzLnNldERpY2UoITApO1xyXG5cdFx0XHRcdHRoaXMubm9kZVRpbWVXYWl0LmFjdGl2ZSAgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMudGltZUN1b2Mubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYy5SZWRULnNldHRpbmcudGFpeGl1LmdldExvZ3MgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYodm9pZCAwICE9PSBkYXRhLnRpbWVfcmVtYWluKXtcclxuXHRcdFx0Y2MuUmVkVC5zZXR0aW5nLnRhaXhpdS50aW1lX3JlbWFpbiA9IGRhdGEudGltZV9yZW1haW47XHJcblx0XHRcdHRoaXMucGxheVRpbWUoKTtcclxuXHRcdH1cclxuXHRcdGlmKHZvaWQgMCAhPT0gZGF0YS5maW5pc2gpe1xyXG5cdFx0XHRpZiAoY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5nZXRMb2dzKSB7XHJcblx0XHRcdFx0Ly8gSHXhu7cgxJHhur9tXHJcblx0XHRcdFx0dm9pZCAwICE9PSB0aGlzLnRpbWVJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMudGltZUludGVydmFsKTtcclxuXHRcdFx0XHQvLyBUaMOqbSBr4bq/dCBxdeG6o1xyXG5cdFx0XHRcdGNjLlJlZFQuc2V0dGluZy50YWl4aXUubG9ncy51bnNoaWZ0KHtkaWNlOiBbZGF0YS5maW5pc2guZGljZXNbMF0sIGRhdGEuZmluaXNoLmRpY2VzWzFdLCBkYXRhLmZpbmlzaC5kaWNlc1syXV0sIHBoaWVuOiBkYXRhLmZpbmlzaC5waGllbn0pO1xyXG5cdFx0XHRcdGNjLlJlZFQuc2V0dGluZy50YWl4aXUubG9ncy5sZW5ndGggPiAxMjAgJiYgY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5sb2dzLnBvcCgpO1xyXG5cdFx0XHRcdC8vIMSQ4bq3dCBk4buvIGxp4buHdVxyXG5cdFx0XHRcdHRoaXMuZGllbVNvID0gZGF0YS5maW5pc2guZGljZXNbMF0rZGF0YS5maW5pc2guZGljZXNbMV0rZGF0YS5maW5pc2guZGljZXNbMl07XHJcblx0XHRcdFx0dGhpcy5sYWJlbEtldFF1YS5zdHJpbmcgPSB0aGlzLmRpZW1TbztcclxuXHRcdFx0XHRpZih0aGlzLmlzTmFuKXtcclxuXHRcdFx0XHRcdHRoaXMuZGlhTmFuLmFjdGl2ZSAgICAgICAgID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuZGlhTmFuLnBvc2l0aW9uICAgICAgID0gY2MudjIoMCwtOCk7XHJcblx0XHRcdFx0XHR0aGlzLnNwcml0ZU5hbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5vbkRpY2VBbmltYXRpb25GaW5pc2goKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kaWNlQW5pbWF0aW9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGlmICh0aGlzLm5vZGUuYWN0aXZlSW5IaWVyYXJjaHkpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5kaWNlQW5pbWF0aW9uLnBsYXkoKTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0aGlzLm9uRGljZUFuaW1hdGlvbkZpbmlzaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLm5vZGVUaW1lV2FpdC5hY3RpdmUgID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnRpbWVDdW9jLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0Y2MuUmVkVC5zZXR0aW5nLnRhaXhpdS50aW1lX3JlbWFpbiA9IDc3O1xyXG5cdFx0Ly9cdGNjLlJlZFQuc2V0dGluZy50YWl4aXUudGltZV9yZW1haW4gPSA3NztcclxuXHRcdFx0Ly9jYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluID0gODI7XHJcblx0XHRcdHRoaXMucGxheVRpbWUoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGVmU3RvcDogZnVuY3Rpb24oKXtcclxuXHRcdCBcclxuXHRcdHRoaXMuZWZUYWlDb2xvci5zdG9wKCk7XHJcblx0XHR0aGlzLmVmWGl1Q29sb3Iuc3RvcCgpO1xyXG5cclxuXHRcdHRoaXMuZWZUYWkubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5lZlhpdS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0fSxcclxuXHRwbGF5VGltZTogZnVuY3Rpb24oKXtcclxuXHRcdHZvaWQgMCAhPT0gdGhpcy50aW1lSW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVJbnRlcnZhbCk7XHJcblxyXG5cdFx0dGhpcy5hdWRpb1dpbi5zdG9wKCk7XHJcblx0XHR0aGlzLl9yZXN1bHRzID0ge307XHJcblxyXG5cdFx0dGhpcy50aW1lSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKGNjLlJlZFQuc2V0dGluZy50YWl4aXUudGltZV9yZW1haW4gPiA2MSkgey8vNjFcclxuXHRcdFx0XHRpZiAodGhpcy5iZ19EaWNlLl9hbmltYXRvciAhPT0gbnVsbCAmJiB0aGlzLmJnX0RpY2UuX2FuaW1hdG9yLmlzUGxheWluZykge1xyXG5cdFx0XHRcdFx0dGhpcy5iZ19EaWNlLnN0b3AoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5iZ19lZkRpY2UuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0dmFyIHRpbWUgPSBoZWxwZXIubnVtYmVyUGFkKGNjLlJlZFQuc2V0dGluZy50YWl4aXUudGltZV9yZW1haW4tNjIsIDIpOy8vNjJcclxuXHRcdFx0XHR0aGlzLnRpbWVQb3B1cC5ub2RlLmFjdGl2ZSAmJiAodGhpcy50aW1lUG9wdXAuc3RyaW5nID0gdGltZSkgJiYgKHRoaXMudGltZVBvcHVwLm5vZGUuY29sb3IgPSBjYy5jb2xvcigyNTUsIDAsIDAsIDI1NSkpO1xyXG5cdFx0XHRcdHRoaXMudGltZVdhaXQuc3RyaW5nID0gJzAwOicgKyBoZWxwZXIubnVtYmVyUGFkKHRpbWUsIDIpO1xyXG5cdFx0XHRcdGlmIChjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluIDwgNzEpIHsvLzcxIDUxXHJcblx0XHRcdFx0XHR0aGlzLmVmU3RvcCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS50aW1lX3JlbWFpbiA8IDY2KSB7Ly82NiA0NiBcclxuXHRcdFx0XHRcdHRoaXMubm9kZUtldFF1YS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuaXNOYW4gJiYgKHRoaXMuZGlhTmFuLmFjdGl2ZSA9IGZhbHNlKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aWYgKHRoaXMuYmdfRGljZS5fYW5pbWF0b3IgIT09IG51bGwgJiYgIXRoaXMuYmdfRGljZS5fYW5pbWF0b3IuaXNQbGF5aW5nKSB7XHJcblx0XHRcdFx0XHRsZXQgc3RhdGUgPSB0aGlzLmJnX0RpY2UuZ2V0QW5pbWF0aW9uU3RhdGUodGhpcy5iZ19EaWNlLl9kZWZhdWx0Q2xpcC5uYW1lKTtcclxuXHRcdFx0XHRcdHN0YXRlLnNwZWVkID0gMTtcclxuXHRcdFx0XHRcdHRoaXMuYmdfRGljZS5fYW5pbWF0b3IucGxheVN0YXRlKHN0YXRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHRoaXMuYmdfRGljZS5fYW5pbWF0b3IgIT09IG51bGwgJiYgdGhpcy5iZ19EaWNlLl9hbmltYXRvci5pc1BsYXlpbmcpIHtcclxuXHRcdFx0XHRcdGlmIChjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluIDwgNykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmJnX0RpY2UuX2FuaW1hdG9yLl9hbmltcy5hcnJheVswXS5zcGVlZCA9IDEwO1xyXG5cdFx0XHRcdFx0fWVsc2UgaWYgKGNjLlJlZFQuc2V0dGluZy50YWl4aXUudGltZV9yZW1haW4gPCAyMykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmJnX0RpY2UuX2FuaW1hdG9yLl9hbmltcy5hcnJheVswXS5zcGVlZCA9IDY7XHJcblx0XHRcdFx0XHR9ZWxzZSBpZiAoY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS50aW1lX3JlbWFpbiA8IDMzKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuYmdfRGljZS5fYW5pbWF0b3IuX2FuaW1zLmFycmF5WzBdLnNwZWVkID0gMztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHRoaXMuYmdfZWZEaWNlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0aWYgKCEhdGhpcy5kaWNlWzBdLm5vZGUuYWN0aXZlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNldERpY2UoZmFsc2UsIGZhbHNlKTtcclxuXHRcdFx0XHRcdHRoaXMucmVzZXQoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy5lZlN0b3AoKTtcclxuXHRcdFx0XHR0aGlzLm5vZGVUaW1lV2FpdC5hY3RpdmUgID0gdGhpcy5ub2RlS2V0UXVhLmFjdGl2ZSAgICAgPSB0aGlzLmRpYU5hbi5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnRpbWVDdW9jLm5vZGUuYWN0aXZlID0gdGhpcy5zcHJpdGVOYW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdGlmIChjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluID4gMCkge1xyXG5cdFx0XHRcdFx0dmFyIHRpbWUgPSBoZWxwZXIubnVtYmVyUGFkKGNjLlJlZFQuc2V0dGluZy50YWl4aXUudGltZV9yZW1haW4tMSwgMik7XHJcblx0XHRcdFx0XHRpZihjYy5SZWRULnNldHRpbmcudGFpeGl1LmdldExvZ3Mpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRpbWVDdW9jLnN0cmluZyA9ICsgdGltZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRoaXMudGltZVBvcHVwLm5vZGUuYWN0aXZlICYmICh0aGlzLnRpbWVQb3B1cC5zdHJpbmcgPSB0aW1lKSAmJiAodGhpcy50aW1lUG9wdXAubm9kZS5jb2xvciA9IGNjLmNvbG9yKDE1NSwgNzUsIDIsIDI1NSkpXHJcblx0XHRcdFx0XHRpZiAoY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS50aW1lX3JlbWFpbiA8PSAxMClcclxuXHRcdFx0XHRcdFx0dGhpcy50aW1lQ3VvYy5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjU1LCA2OSwgNjksIDI1NSlcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0dGhpcy50aW1lQ3VvYy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEVcclxuXHRcdFx0XHR9ZWxzZSBjbGVhckludGVydmFsKHRoaXMudGltZUludGVydmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluLS07XHJcblx0XHR9XHJcblx0XHQuYmluZCh0aGlzKSwgMTAwMClcclxuXHR9LFxyXG5cdG5leHRSZWFsVGltZTogZnVuY3Rpb24oKXtcclxuXHRcdGlmIChjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluID4gNjEpIHsvLzYxXHJcblx0XHRcdHRoaXMuc2V0RGljZSh0cnVlKTtcclxuXHRcdFx0dGhpcy5ub2RlVGltZVdhaXQuYWN0aXZlICA9IHRydWU7XHJcblx0XHRcdHRoaXMudGltZUN1b2Mubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dmFyIHRpbWUgPSBoZWxwZXIubnVtYmVyUGFkKGNjLlJlZFQuc2V0dGluZy50YWl4aXUudGltZV9yZW1haW4tNjIsIDIpOy8vNjIgNDJcclxuXHRcdFx0dGhpcy50aW1lUG9wdXAubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMCwgMCwgMjU1KTtcclxuXHRcdFx0dGhpcy50aW1lUG9wdXAuc3RyaW5nICAgICA9IHRpbWU7XHJcblx0XHRcdHRoaXMudGltZVdhaXQuc3RyaW5nICAgICAgID0gJzAwOicgKyBoZWxwZXIubnVtYmVyUGFkKHRpbWUsIDIpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMubm9kZVRpbWVXYWl0LmFjdGl2ZSAgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy50aW1lQ3VvYy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGlmIChjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluID4gMCkge1xyXG5cdFx0XHRcdHZhciB0aW1lID0gaGVscGVyLm51bWJlclBhZChjYy5SZWRULnNldHRpbmcudGFpeGl1LnRpbWVfcmVtYWluLTEsIDIpO1xyXG5cdFx0XHRcdGlmKGNjLlJlZFQuc2V0dGluZy50YWl4aXUuZ2V0TG9ncyl7XHJcblx0XHRcdFx0XHR0aGlzLnRpbWVDdW9jLnN0cmluZyA9ICcwMDonICsgdGltZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy50aW1lUG9wdXAubm9kZS5jb2xvciA9IGNjLmNvbG9yKDE1NSwgNzUsIDIsIDI1NSlcclxuXHRcdFx0XHR0aGlzLnRpbWVQb3B1cC5zdHJpbmcgICAgID0gdGltZTtcclxuXHRcdFx0XHRpZiAoY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS50aW1lX3JlbWFpbiA8PSAxMClcclxuXHRcdFx0XHRcdHRoaXMudGltZUN1b2Mubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgNjksIDY5LCAyNTUpXHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0dGhpcy50aW1lQ3VvYy5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EYXRhVGFpWGl1OiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHZvaWQgMCAhPT0gZGF0YS5yZWRfdGFpICAgICAgICAmJiAodGhpcy50b3RhbExlZnQuc3RyaW5nICAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZF90YWkpKTtcclxuXHRcdHZvaWQgMCAhPT0gZGF0YS5yZWRfeGl1ICAgICAgICAmJiAodGhpcy50b3RhbFJpZ2h0LnN0cmluZyAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZF94aXUpKTtcclxuXHRcdHZvaWQgMCAhPT0gZGF0YS5yZWRfbWVfdGFpICAgICAmJiAodGhpcy5teUxlZnQuc3RyaW5nICAgICAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZF9tZV90YWkpKTtcclxuXHRcdHZvaWQgMCAhPT0gZGF0YS5yZWRfbWVfeGl1ICAgICAmJiAodGhpcy5teVJpZ2h0LnN0cmluZyAgICAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZF9tZV94aXUpKTtcclxuXHRcdHZvaWQgMCAhPT0gZGF0YS5yZWRfcGxheWVyX3RhaSAmJiAodGhpcy5wbGF5ZXJMZWZ0LnN0cmluZyAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZF9wbGF5ZXJfdGFpKSk7XHJcblx0XHR2b2lkIDAgIT09IGRhdGEucmVkX3BsYXllcl94aXUgJiYgKHRoaXMucGxheWVyUmlnaHQuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5yZWRfcGxheWVyX3hpdSkpO1xyXG5cdH0sXHJcblx0b25EdURheTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLldJTl9IVC5zdHJpbmcgID0gZGF0YS50TGluZVdpblJlZEg7XHJcblx0XHR0aGlzLldJTl9ETi5zdHJpbmcgID0gZGF0YS50TGluZVdpblJlZDtcclxuXHRcdHRoaXMuTE9TVF9IVC5zdHJpbmcgPSBkYXRhLnRMaW5lTG9zdFJlZEg7XHJcblx0XHR0aGlzLkxPU1RfRE4uc3RyaW5nID0gZGF0YS50TGluZUxvc3RSZWQ7XHJcblx0fSxcclxuXHRkYXRhTG9nczogZnVuY3Rpb24oKXtcclxuXHRcdGlmICghIWNjLlJlZFQuc2V0dGluZy50YWl4aXUubG9ncy5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHQvL01haW4gbG9nXHJcblx0XHRcdHRoaXMuZG90TG9ncy5mb3JFYWNoKGZ1bmN0aW9uKGRvdCwgaW5kZXgpe1xyXG5cdFx0XHRcdGxldCBkYXRhID0gY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5sb2dzW2luZGV4XTtcclxuXHRcdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhKSB7XHJcblx0XHRcdFx0XHRsZXQgcG9pbnQgPSBkYXRhLmRpY2VbMF0gKyBkYXRhLmRpY2VbMV0gKyBkYXRhLmRpY2VbMl07XHJcblx0XHRcdFx0XHRkb3Qubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZG90Lm5vZGUucGhpZW4gPSBkYXRhLnBoaWVuO1xyXG5cdFx0XHRcdFx0ZG90Lm1vZC50ZXh0LnN0cmluZyA9IGRhdGEuZGljZVswXSArICctJyArIGRhdGEuZGljZVsxXSArICctJyArIGRhdGEuZGljZVsyXTtcclxuXHRcdFx0XHRcdGRvdC5zcHJpdGVGcmFtZSA9IHBvaW50IDwgMTEgPyBzZWxmLmRvdF93aGl0ZSA6IHNlbGYuZG90X2JsYWNrO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0ZG90Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHZhciBsaW5lX2RpY2UxID0gW107XHJcblx0XHRcdHZhciBsaW5lX2RpY2UyID0gW107XHJcblx0XHRcdHZhciBsaW5lX2RpY2UzID0gW107XHJcblx0XHRcdHZhciBsaW5lX3RvbmcgID0gW107XHJcblxyXG5cdFx0XHR2YXIgdG1wX0RTID0gLTE7XHJcblx0XHRcdHZhciB0bXBfYXJyQSA9IFtdO1xyXG5cdFx0XHR2YXIgdG1wX2FyckIgPSBbXTtcclxuXHRcdFx0dmFyIGNfdGFpID0gMDtcclxuXHRcdFx0dmFyIGNfeGl1ID0gMDtcclxuXHJcblx0XHRcdHZhciBzbGljZWQgPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmxvZ3Muc2xpY2UoMCwgMTkpO1xyXG5cdFx0XHRzbGljZWQucmV2ZXJzZSgpO1xyXG5cdFx0XHQvLyBMaW5lIHBhaW50XHJcblx0XHRcdC8vdmFyIFBhaW50ID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcclxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlZC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBzbGljZWRbaV07XHJcblx0XHRcdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhKSB7XHJcblx0XHRcdFx0XHRcdHNlbGYuUmVkVC5UWF9UaG9uZ0tlLmxpbmVBYyhpLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0dmFyIGRpY2UxID0gc2xpY2VkW2ldLmRpY2VbMF07XHJcblx0XHRcdFx0XHRcdHZhciBkaWNlMiA9IHNsaWNlZFtpXS5kaWNlWzFdO1xyXG5cdFx0XHRcdFx0XHR2YXIgZGljZTMgPSBzbGljZWRbaV0uZGljZVsyXTtcclxuXHRcdFx0XHRcdFx0dmFyIHRvbmcgPSBkaWNlMStkaWNlMitkaWNlMztcclxuXHJcblx0XHRcdFx0XHRcdGxpbmVfZGljZTFbaV0gPSB7eDppKjI4LCB5OmRpY2UxKjI4LTI4LCBkaWNlOiBkaWNlMX07XHJcblx0XHRcdFx0XHRcdGxpbmVfZGljZTJbaV0gPSB7eDppKjI4LCB5OmRpY2UyKjI4LTI4LCBkaWNlOiBkaWNlMn07XHJcblx0XHRcdFx0XHRcdGxpbmVfZGljZTNbaV0gPSB7eDppKjI4LCB5OmRpY2UzKjI4LTI4LCBkaWNlOiBkaWNlM307XHJcblx0XHRcdFx0XHRcdGxpbmVfdG9uZ1tpXSAgPSB7eDppKjI3LjcsIHk6dG9uZyo5LjIzMy0yNy43LCB0b25nOiB0b25nfVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdHNlbGYuUmVkVC5UWF9UaG9uZ0tlLmxpbmVBYyhpLCBmYWxzZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNlbGYuUmVkVC5UWF9UaG9uZ0tlLmRyYXcoc2VsZi5SZWRULlRYX1Rob25nS2UuZGljZTFfbGluZSwgc2VsZi5SZWRULlRYX1Rob25nS2UuZGljZTFfZG90cywgbGluZV9kaWNlMSk7XHJcblx0XHRcdFx0c2VsZi5SZWRULlRYX1Rob25nS2UuZHJhdyhzZWxmLlJlZFQuVFhfVGhvbmdLZS5kaWNlMl9saW5lLCBzZWxmLlJlZFQuVFhfVGhvbmdLZS5kaWNlMl9kb3RzLCBsaW5lX2RpY2UyKTtcclxuXHRcdFx0XHRzZWxmLlJlZFQuVFhfVGhvbmdLZS5kcmF3KHNlbGYuUmVkVC5UWF9UaG9uZ0tlLmRpY2UzX2xpbmUsIHNlbGYuUmVkVC5UWF9UaG9uZ0tlLmRpY2UzX2RvdHMsIGxpbmVfZGljZTMpO1xyXG5cdFx0XHRcdHNlbGYuUmVkVC5UWF9UaG9uZ0tlLmRyYXdfVG9uZyhzZWxmLlJlZFQuVFhfVGhvbmdLZS50b25nX2xpbmUsIGxpbmVfdG9uZyk7XHJcblx0XHRcdC8vfSk7XHJcblxyXG5cdFx0XHQvLyBLZXQgUXVhXHJcblx0XHRcdHZhciBLZXRRdWEgPSBQcm9taXNlLmFsbCh0aGlzLlJlZFQuVFhfVGhvbmdLZS5LZXRRdWFEb3QubWFwKGZ1bmN0aW9uKGRvdCwgaW5kZXgpe1xyXG5cdFx0XHRcdHZhciBkYXRhID0gY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5sb2dzW2luZGV4XTtcclxuXHRcdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhKSB7XHJcblx0XHRcdFx0XHRkb3Qubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dmFyIHBvaW50ID0gZGF0YS5kaWNlWzBdICsgZGF0YS5kaWNlWzFdICtkYXRhLmRpY2VbMl07XHJcblx0XHRcdFx0XHRkb3Quc3ByaXRlRnJhbWUgPSBwb2ludCA8IDExID8gc2VsZi5kb3Rfd2hpdGUgOiBzZWxmLmRvdF9ibGFjaztcclxuXHRcdFx0XHRcdHJldHVybiAocG9pbnQgPiAxMCA/IDEgOiAwKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdGRvdC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkpO1xyXG5cclxuXHRcdFx0Ly8gRGllbSBTb1xyXG5cdFx0XHR2YXIgZGllbVNvID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdHZhciBuZXdBcnIgPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmxvZ3Muc2xpY2UoKTtcclxuXHRcdFx0XHRuZXdBcnIucmV2ZXJzZSgpO1xyXG5cdFx0XHRcdGZvciAodmFyIG5ld0RTIG9mIG5ld0Fycikge1xyXG5cdFx0XHRcdFx0dmFyIHBvaW50ID0gbmV3RFMuZGljZVswXStuZXdEUy5kaWNlWzFdK25ld0RTLmRpY2VbMl07XHJcblx0XHRcdFx0XHR2YXIgdHlwZSAgPSBwb2ludCA+IDEwID8gMSA6IDA7XHJcblx0XHRcdFx0XHRpZiAodG1wX0RTID09PSAtMSkge1xyXG5cdFx0XHRcdFx0XHR0bXBfRFMgPSB0eXBlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHR5cGUgIT0gdG1wX0RTIHx8IHRtcF9hcnJCLmxlbmd0aCA+IDQpIHtcclxuXHRcdFx0XHRcdFx0dG1wX0RTID0gdHlwZTtcclxuXHRcdFx0XHRcdFx0dG1wX2FyckEucHVzaCh0bXBfYXJyQik7XHJcblx0XHRcdFx0XHRcdHRtcF9hcnJCID0gW107XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodHlwZSA9PSB0bXBfRFMpIHtcclxuXHRcdFx0XHRcdFx0dG1wX2FyckIucHVzaChwb2ludClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dG1wX2FyckEucHVzaCh0bXBfYXJyQik7XHJcblx0XHRcdFx0cmVzb2x2ZSh0bXBfYXJyQSk7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0UHJvbWlzZS5hbGwoW0tldFF1YSwgZGllbVNvXSkudGhlbih2YWx1ZXMgPT4ge1xyXG5cdFx0XHRcdHZhciBuZXdEYXRhID0gdmFsdWVzWzFdO1xyXG5cdFx0XHRcdG5ld0RhdGEucmV2ZXJzZSgpO1xyXG5cdFx0XHRcdG5ld0RhdGEgPSBuZXdEYXRhLnNsaWNlKDAsIDIwKTtcclxuXHRcdFx0XHRuZXdEYXRhLnJldmVyc2UoKTtcclxuXHRcdFx0XHRzZWxmLlJlZFQuVFhfVGhvbmdLZS5LZXRRdWFMZWZ0LnN0cmluZyAgPSB2YWx1ZXNbMF0uZmlsdGVyKGkgPT4gaSA9PSAxKS5sZW5ndGg7XHJcblx0XHRcdFx0c2VsZi5SZWRULlRYX1Rob25nS2UuS2V0UXVhUmlnaHQuc3RyaW5nID0gdmFsdWVzWzBdLmZpbHRlcihpID0+IGkgPT0gMCkubGVuZ3RoO1xyXG5cdFx0XHRcdFByb21pc2UuYWxsKHNlbGYuUmVkVC5UWF9UaG9uZ0tlLkRpZW1Tb0NlbC5tYXAoZnVuY3Rpb24ob2JqLCBpKXtcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gbmV3RGF0YVtpXTtcclxuXHRcdFx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGEpIHtcclxuXHRcdFx0XHRcdFx0b2JqLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChvYmouUmVkVC5tYXAoZnVuY3Rpb24oY3VycmVudCwgaW5kZXgpe1xyXG5cdFx0XHRcdFx0XHRcdHZhciBkYXRhX0NlbCA9IGRhdGFbaW5kZXhdO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGFfQ2VsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdHlwZSA9IGRhdGFfQ2VsID4gMTAgPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRjX3RhaSA9IHR5cGUgID8gY190YWkrMSA6IGNfdGFpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y194aXUgPSAhdHlwZSA/IGNfeGl1KzEgOiBjX3hpdTtcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudC5ub2RlLmNvbG9yID0gdHlwZSA/IGNjLmNvbG9yKCkuZnJvbUhFWCgnI0IzQTFBMScpIDogY2MuQ29sb3IuV0hJVEU7XHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50LnRleHQuc3RyaW5nID0gZGF0YV9DZWw7XHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50LnRleHQubm9kZS5jb2xvciA9IHR5cGUgPyBjYy5Db2xvci5XSElURSA6IGNjLkNvbG9yLkJMQUNLO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudC5zcHJpdGVGcmFtZSA9IHR5cGUgPyBzZWxmLmRvdF9ibGFjayA6IHNlbGYuZG90X3doaXRlO1xyXG5cdFx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3VycmVudC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdm9pZCAwO1xyXG5cdFx0XHRcdFx0XHR9KSlcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRvYmouYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gdm9pZCAwO1xyXG5cdFx0XHRcdH0pKS50aGVuKHZhclQgPT4ge1xyXG5cdFx0XHRcdFx0c2VsZi5SZWRULlRYX1Rob25nS2UuRGllbVNvTGVmdC5zdHJpbmcgID0gY190YWk7XHJcblx0XHRcdFx0XHRzZWxmLlJlZFQuVFhfVGhvbmdLZS5EaWVtU29SaWdodC5zdHJpbmcgPSBjX3hpdTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlc2V0OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5lZlRhaUNvbG9yLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLmVmWGl1Q29sb3Iubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuc2V0UGhpZW4oKTtcclxuXHRcdHRoaXMuaXNOYW4gJiYgdGhpcy5kYXRhTG9ncygpO1xyXG5cdFx0Y2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5kYXRhLnRhaXhpdS5yZWRfbWVfdGFpID0gY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5kYXRhLnRhaXhpdS5yZWRfbWVfeGl1ID0gY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5kYXRhLnRhaXhpdS5yZWRfcGxheWVyX3RhaSA9IGNjLlJlZFQuc2V0dGluZy50YWl4aXUuZGF0YS50YWl4aXUucmVkX3BsYXllcl94aXUgPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmRhdGEudGFpeGl1LnJlZF90YWkgPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmRhdGEudGFpeGl1LnJlZF94aXUgPSB0aGlzLnRvdGFsTGVmdC5zdHJpbmcgPSB0aGlzLnRvdGFsUmlnaHQuc3RyaW5nID0gdGhpcy5teUxlZnQuc3RyaW5nID0gdGhpcy5teVJpZ2h0LnN0cmluZyA9IHRoaXMucGxheWVyTGVmdC5zdHJpbmcgPSB0aGlzLnBsYXllclJpZ2h0LnN0cmluZyA9IDA7XHJcblx0fSxcclxuXHRzZXREZWZhdXRsOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5nZXRMb2dzID0gdGhpcy5ub2RlVGltZVBvcHVwLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dm9pZCAwICE9PSB0aGlzLnRpbWVJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMudGltZUludGVydmFsKTtcclxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlZ1RpbWVPdXQpO1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmVnVGltZU91dDIpO1xyXG5cdFx0dGhpcy5UWF9DaGF0LnJlc2V0KCk7XHJcblx0fSxcclxuXHRzdGF0dXM6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dmFyIHRpbWUgPSAxMDtcclxuXHRcdHZhciBpc05hbiA9IHRoaXMuaXNOYW47XHJcblx0XHR2YXIgc2VuZCA9IHRydWU7XHJcblx0XHRpZih2b2lkIDAgIT09IGRhdGEpe1xyXG5cdFx0XHR0aGlzLl9yZXN1bHRzID0gZGF0YTtcclxuXHRcdFx0dGltZSA9IDJlMztcclxuXHRcdFx0IFxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGRhdGEgPSB0aGlzLl9yZXN1bHRzO1xyXG5cdFx0XHR0aW1lID0gMTA7XHJcblx0XHRcdGlzTmFuID0gZmFsc2U7c2VuZCA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0dGhpcy5yZWdUaW1lT3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYoIWlzTmFuKXtcclxuXHRcdFx0XHR2YXIgdGVtcCA9IG5ldyBjYy5Ob2RlO1xyXG5cdFx0XHRcdHRlbXAuYWRkQ29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHRcdFx0XHR0ZW1wID0gdGVtcC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cdFx0XHRcdHRlbXAuc3RyaW5nID0gKGRhdGEud2luID8gJysnIDogJy0nKSArIGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEuYmV0KTtcclxuXHRcdFx0XHR0ZW1wLmZvbnQgPSBkYXRhLndpbiA/IHRoaXMuZm9udENvbmcgOiB0aGlzLmZvbnRUcnU7XHJcblx0XHRcdFx0dGVtcC5saW5lSGVpZ2h0ID0gMTMwO1xyXG5cdFx0XHRcdHRlbXAuZm9udFNpemUgICA9IDIyO1xyXG5cdFx0XHRcdHRlbXAubm9kZS5wb3NpdGlvbiA9IGNjLnYyKGRhdGEuc2VsZWN0ID8gLTI1MiA6IDI1MiwgLTUwKTtcclxuXHRcdFx0XHR0aGlzLm5vdGljZS5hZGRDaGlsZCh0ZW1wLm5vZGUpO1xyXG5cdFx0XHRcdHRlbXAubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDMsIGNjLnYyKGRhdGEuc2VsZWN0ID8gLTI1MiA6IDI1MiwgMTMwKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7dGhpcy5ub2RlLmRlc3Ryb3koKX0sIHRlbXApKSk7XHJcblx0XHRcdFx0aWYodm9pZCAwICE9PSBkYXRhLnRodW9uZyAmJiBkYXRhLnRodW9uZyA+IDApe1xyXG5cdFx0XHRcdFx0dmFyIHRodW9uZyA9IG5ldyBjYy5Ob2RlO1xyXG5cdFx0XHRcdFx0dGh1b25nLmFkZENvbXBvbmVudChjYy5MYWJlbCk7XHJcblx0XHRcdFx0XHR0aHVvbmcgPSB0aHVvbmcuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHRcdFx0XHRcdHRodW9uZy5zdHJpbmcgPSAoZGF0YS53aW4gPyAnKycgOiAnLScpICsgaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS50aHVvbmcpO1xyXG5cdFx0XHRcdFx0dGh1b25nLmZvbnQgPSBjYy5SZWRULnV0aWwuZm9udEVmZmVjdDtcclxuXHRcdFx0XHRcdHRodW9uZy5saW5lSGVpZ2h0ID0gOTA7XHJcblx0XHRcdFx0XHR0aHVvbmcuZm9udFNpemUgICA9IDE0O1xyXG5cdFx0XHRcdFx0dGhpcy5ub3RpY2UuYWRkQ2hpbGQodGh1b25nLm5vZGUpO1xyXG5cdFx0XHRcdFx0dGh1b25nLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygzLCBjYy52MigwLCAxMDApKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXt0aGlzLm5vZGUuZGVzdHJveSgpfSwgdGh1b25nKSkpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmKHNlbmQpIGNjLlJlZFQuc2VuZCh7dGFpeGl1OntnZXRfbmV3OiB0cnVlfX0pXHJcblx0XHR9XHJcblx0XHQuYmluZCh0aGlzKSwgdGltZSlcclxuXHR9LFxyXG59KTtcclxuIl19