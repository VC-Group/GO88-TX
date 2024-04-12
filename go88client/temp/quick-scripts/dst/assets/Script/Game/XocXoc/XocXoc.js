
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XocXoc/XocXoc.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '24723lmj75OaaA5CAEsELDw', 'XocXoc');
// Script/Game/XocXoc/XocXoc.js

'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var helper = require('Helper');
var notice = require('Notice');

var dialog = require('XocXoc_dialog');

cc.Class({
	extends: cc.Component,

	properties: {
		audioMoBat: cc.AudioSource,
		audioSingleChip: cc.AudioSource,
		audioMultiChip: cc.AudioSource,
		audioXocDia: cc.AudioSource,

		audioMultiChip2: cc.AudioSource,
		audioMultiChip3: cc.AudioSource,
		audioMultiChip4: cc.AudioSource,
		audioMultiChip5: cc.AudioSource,

		box_chan: cc.Node,
		box_le: cc.Node,
		box_red3: cc.Node,
		box_red4: cc.Node,
		box_white3: cc.Node,
		box_white4: cc.Node,

		total_chan: cc.Label,
		total_le: cc.Label,
		total_red3: cc.Label,
		total_red4: cc.Label,
		total_white3: cc.Label,
		total_white4: cc.Label,

		me_chan: cc.Label,
		me_le: cc.Label,
		me_red3: cc.Label,
		me_red4: cc.Label,
		me_white3: cc.Label,
		me_white4: cc.Label,

		me_name: cc.Label,
		me_balans: cc.Label,

		labelTime: cc.Label,
		timeWait: cc.Label,
		nodeWait: cc.Node,

		box_chip: cc.Node,

		users_bg: cc.Node,
		users_count: cc.Label,

		nodeBat: cc.Node,

		chip_1000: cc.SpriteFrame,
		chip_10000: cc.SpriteFrame,
		chip_50000: cc.SpriteFrame,
		chip_100000: cc.SpriteFrame,
		chip_1000000: cc.SpriteFrame,

		dot_red: cc.SpriteFrame,
		dot_white: cc.SpriteFrame,

		dot: {
			default: [],
			type: cc.Sprite
		},

		log_chan: cc.Label,
		log_le: cc.Label,
		log_top: cc.Node,
		logMain: cc.Node,

		redH: cc.Node,
		miniNotice: cc.Node,

		Animation: cc.Animation,

		prefabNotice: cc.Prefab,

		bet: cc.Node,

		loading: cc.Node,
		notice: notice,
		dialog: dialog
	},
	ctor: function ctor() {
		this.logs = [];
		this.nan = false;
		this.cuoc = '1000';
		this.actionBatOpen = cc.moveTo(0.5, cc.v2(121, 222));
		this.actionBatClose = cc.sequence(cc.callFunc(function () {
			this.resetData();
		}, this), cc.moveTo(0.5, cc.v2(0, 0)), cc.delayTime(0.5), cc.callFunc(function () {
			this.audioXocDia.play();
			this.Animation.play();
		}, this));
		this.maxDot = { x: 39, y: 19 };

		this.maxBox1_3 = { x: -10, y: 0 };
		this.maxBox1_1 = { x: -10, y: 0 };

		this.clients = {
			'red': {
				'chan': 0,
				'le': 0,
				'red3': 0,
				'red4': 0,
				'white3': 0,
				'white4': 0
			}
		};

		this.users = {
			'red': {
				'chan': 0,
				'le': 0,
				'red3': 0,
				'red4': 0,
				'white3': 0,
				'white4': 0
			}
		};
	},
	onLoad: function onLoad() {
		cc.RedT.inGame = this;
		cc.RedT.MiniPanel.node.parent = this.redH;

		this.logMain = this.logMain.children.map(function (obj) {
			return obj.children[0].getComponent(cc.Sprite);
		});

		this.logMain.reverse();

		this.log_top = this.log_top.children.map(function (obj) {
			var data = { 'cell': obj };
			var cell = obj.children.map(function (obj) {
				return { c: obj.children[0].getComponent(cc.Sprite), t: obj.children[1].getComponent(cc.Label) };
			});
			cell.reverse();
			data.data = cell;
			return data;
		});

		this.log_top.reverse();

		this.me_name.string = cc.RedT.user.name;
		this.me_balans.string = helper.numberWithCommas(cc.RedT.user.red);

		cc.RedT.send({ scene: "xocxoc", g: { xocxoc: { ingame: true } } });
	},

	onData: function onData(data) {
		if (void 0 !== data.user) {
			this.userData(data.user);
			cc.RedT.userData(data.user);
		}
		if (void 0 !== data.xocxoc) {
			this.xocxoc(data.xocxoc);
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
	backGame: function backGame() {
		cc.RedT.MiniPanel.node.parent = null;
		clearInterval(this.timeInterval);
		cc.RedT.send({ g: { xocxoc: { outgame: true } } });
		this.loading.active = true;
		clearTimeout(this.timeOut);
		clearTimeout(this.regTimeOut1);
		clearTimeout(this.regTimeOut2);
		clearTimeout(this.regTimeOut3);
		cc.director.loadScene('MainGame');
	},
	signOut: function signOut() {
		cc.RedT.MiniPanel.node.parent = null;
		clearInterval(this.timeInterval);
		clearTimeout(this.timeOut);
		clearTimeout(this.regTimeOut1);
		clearTimeout(this.regTimeOut2);
		clearTimeout(this.regTimeOut3);
		cc.director.loadScene('MainGame', function () {
			cc.RedT.inGame.signOut();
		});
	},
	userData: function userData(data) {
		this.me_balans.string = helper.numberWithCommas(data.red);
	},
	xocxoc: function xocxoc(data) {
		//console.log(data);
		if (!!data.ingame) {
			this.xocxocIngame(data.ingame);
		}
		if (!!data.finish) {
			this.xocxocFinish(data.finish);
		}
		if (!!data.history) {
			this.dialog.history.onData(data.history);
		}
		if (!!data.top) {
			//top win
		}
		if (!!data.status) {
			this.status(data.status);
		}
		if (!!data.chip) {
			this.clientsChip(data.chip);
		}
		if (!!data.mechip) {
			this.meChip(data.mechip);
		}
		if (!!data.client) {
			this.updateClient(data.client);
		}
		if (!!data.me) {
			this.updateMe(data.me);
		}
		if (void 0 !== data.notice) {
			this.addNotice(data.notice);
		}
	},
	xocxocIngame: function xocxocIngame(data) {
		if (data.client) {
			this.countClient(data.client);
		}
		if (!!data.chip) {
			this.ingameChip(data.chip);
		}
		if (!!data.time) {
			this.time_remain = data.time - 1;
			this.playTime();
			if (this.time_remain > 32 && data.logs.length) {
				this.nodeBat.position = cc.v2(0, 246);
				this.setDot([data.logs[0].red1, data.logs[0].red2, data.logs[0].red3, data.logs[0].red4]);
			}
		}
		if (!!data.data) {
			this.updateData(data.data);
		}
		if (!!data.logs) {
			this.logs = data.logs;
			this.setLogs();
		}
		if (!!data.me) {
			this.updateMe(data.me);
		}
		if (!!data.chats) {}
	},
	ingameChip: function ingameChip(data) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = Object.entries(data)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var _ref = _step.value;

				var _ref2 = _slicedToArray(_ref, 2);

				var key = _ref2[0];
				var value = _ref2[1];

				var max = this.maxBox1_3;
				switch (data.box) {
					case 'chan':
						max = this.maxBox1_1;
						break;

					case 'le':
						max = this.maxBox1_1;
						break;
				}
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = Object.entries(value)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _ref3 = _step2.value;

						var _ref4 = _slicedToArray(_ref3, 2);

						var keyT = _ref4[0];
						var valueT = _ref4[1];

						if (valueT > 0) {
							while (valueT) {
								var x = Math.random() * (max.x + 1) >> 0;
								var y = Math.random() * (max.y + 1) >> 0;

								var newN = new cc.Node();
								newN = newN.addComponent(cc.Sprite);
								newN.spriteFrame = this['chip_' + keyT];
								newN.node.position = cc.v2(x, y);
								newN.node.scale = 0.3;
								this['box_' + key].children[1].addChild(newN.node);
								valueT--;
							}
						}
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
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
	},
	xocxocFinish: function xocxocFinish(data) {
		var dice = { red1: data[0], red2: data[1], red3: data[2], red4: data[3] };
		this.logs.unshift(dice);
		this.logs.length > 48 && this.logs.pop();
		this.setDot(data);
		this.labelTime.node.active = false;
		this.time_remain = 43;
		this.playTime();

		if (!this.nan) {
			this.FinishTT();
		}
	},
	FinishTT: function FinishTT() {
		this.audioMoBat.play();
		this.nodeBat.runAction(cc.sequence(this.actionBatOpen, cc.callFunc(this.showKQ, this), cc.delayTime(1), cc.callFunc(this.showKQ2, this)));
		this.setLogs();
	},
	showKQ: function showKQ() {
		var data = Object.values(this.logs[0]);
		var numb = 0;
		data.forEach(function (dot) {
			if (dot) {
				numb++;
			}
		});

		if (!(numb % 2)) {
			this.box_chan.children[0].active = true;
		} else {
			this.box_le.children[0].active = true;
		}

		switch (numb) {
			case 0:
				this.box_white4.children[0].active = true;
				break;

			case 1:
				this.box_white3.children[0].active = true;
				break;

			case 3:
				this.box_red3.children[0].active = true;
				break;

			case 4:
				this.box_red4.children[0].active = true;
				break;
		}
	},
	showKQ2: function showKQ2() {
		var audioLost = 0;
		var audioWin = 0;
		var node1 = null;
		var node2 = null;
		var data = Object.values(this.logs[0]);
		var numb = 0;
		data.forEach(function (dot) {
			if (dot) {
				numb++;
			}
		});

		var position = this.box_chip.parent.convertToWorldSpaceAR(this.box_chip.position);
		var centerMid = null;
		var centerLR = null;

		if (!(numb % 2)) {
			node1 = this.box_chan.children[1];
			audioLost += this.box_le.children[1].children.length;
			centerMid = this.box_le.children[1].convertToNodeSpaceAR(position);
			this.box_le.children[1].children.forEach(function (chip) {
				chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, centerMid)));
			});
		} else {
			node1 = this.box_le.children[1];
			audioLost += this.box_chan.children[1].children.length;
			centerMid = this.box_chan.children[1].convertToNodeSpaceAR(position);
			this.box_chan.children[1].children.forEach(function (chip) {
				chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, centerMid)));
			});
		}

		var red3 = this.box_red3.children[1].convertToNodeSpaceAR(position);
		var red4 = this.box_red4.children[1].convertToNodeSpaceAR(position);
		var white3 = this.box_white3.children[1].convertToNodeSpaceAR(position);
		var white4 = this.box_white4.children[1].convertToNodeSpaceAR(position);

		switch (numb) {
			case 0:
				node2 = this.box_white4.children[1];
				audioLost += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white3.children[1].children.length;
				this.box_red3.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, red3)));
				});
				this.box_red4.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, red4)));
				});
				this.box_white3.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, white3)));
				});
				break;

			case 1:
				node2 = this.box_white3.children[1];
				audioLost += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white4.children[1].children.length;
				this.box_red3.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, red3)));
				});
				this.box_red4.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, red4)));
				});
				this.box_white4.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, white4)));
				});
				break;

			case 2:
				audioLost += this.box_red3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white3.children[1].children.length + this.box_white4.children[1].children.length;
				this.box_red3.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, red3)));
				});
				this.box_red4.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, red4)));
				});
				this.box_white3.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, white4)));
				});
				this.box_white4.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, white4)));
				});
				break;

			case 3:
				node2 = this.box_red3.children[1];
				audioLost += this.box_white3.children[1].children.length + this.box_red4.children[1].children.length + this.box_white4.children[1].children.length;
				this.box_white3.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, white3)));
				});
				this.box_red4.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, red4)));
				});
				this.box_white4.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, white4)));
				});
				break;

			case 4:
				node2 = this.box_red4.children[1];
				audioLost += this.box_white3.children[1].children.length + this.box_red3.children[1].children.length + this.box_white4.children[1].children.length;
				this.box_white3.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, white3)));
				});
				this.box_red3.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, red3)));
				});
				this.box_white4.children[1].children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.scaleTo(0.4, 0.5), cc.moveTo(0.4, white4)));
				});
				break;
		}
		!!audioLost && this.audioMultiChip.play();
		this.regTimeOut1 = setTimeout(function () {
			audioWin += node1.children.length;
			node1.children.forEach(function (chip) {
				var copy = cc.instantiate(chip);
				copy.position = centerMid;
				copy.scale = 0.5;

				var x = Math.random() * (this.maxBox1_1.x + 1) >> 0;
				var y = Math.random() * (this.maxBox1_1.y + 1) >> 0;

				node1.addChild(copy);
				copy.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.4, 0.3), cc.moveTo(0.4, cc.v2(x, y))), cc.sequence(cc.moveTo(0.1, cc.v2(x, y - 6)), cc.moveTo(0.1, cc.v2(x, y)))));
			}.bind(this));

			if (node2) {
				audioWin += node2.children.length;
				var node2red = node2.convertToNodeSpaceAR(position);
				node2.children.forEach(function (chip) {
					var copy = cc.instantiate(chip);
					copy.position = node2red;
					copy.scale = 0.5;

					var x = Math.random() * (this.maxBox1_3.x + 1) >> 0;
					var y = Math.random() * (this.maxBox1_3.y + 1) >> 0;

					node2.addChild(copy);
					copy.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.4, 0.3), cc.moveTo(0.4, cc.v2(x, y))), cc.sequence(cc.moveTo(0.1, cc.v2(x, y - 6)), cc.moveTo(0.1, cc.v2(x, y)))));
				}.bind(this));
			}
			if (!!audioWin) {
				[1, 2, 3, 4, 5].forEach(function (audio) {
					if (audio !== 1) {
						this['audioMultiChip' + audio].play();
					} else {
						this.audioMultiChip.play();
					}
				}.bind(this));
			}
			this.regTimeOut2 = setTimeout(function () {
				var positionUser = this.users_bg.parent.convertToWorldSpaceAR(this.users_bg.position);
				var position1_1 = node1.convertToNodeSpaceAR(positionUser);

				node1.children.forEach(function (chip) {
					chip.runAction(cc.spawn(cc.fadeTo(0.4, 0), cc.moveTo(0.4, position1_1)));
				});
				if (node2) {
					var position1_3 = node2.convertToNodeSpaceAR(positionUser);
					node2.children.forEach(function (chip) {
						chip.runAction(cc.spawn(cc.fadeTo(0.4, 0), cc.moveTo(0.4, position1_3)));
					});
				}
			}.bind(this), 3000);
		}.bind(this), 1500);
	},
	setDot: function setDot(data) {
		var Dot_x = Math.random() * (this.maxDot.x + 1) >> 0;
		var Dot_y = Math.random() * (this.maxDot.y + 1) >> 0;
		var DotCheck = Dot_y - Dot_x;
		if (DotCheck > 22) {
			Dot_y = Dot_y - Dot_y / 1.4;
		}
		this.dot[0].node.position = cc.v2(Dot_x, Dot_y);

		Dot_x = Math.random() * (this.maxDot.x + 1) >> 0;
		Dot_y = Math.random() * (this.maxDot.y + 1) >> 0;
		DotCheck = Dot_y - Dot_x;
		if (DotCheck > 22) {
			Dot_y = Dot_y - Dot_y / 1.4;
		}
		this.dot[1].node.position = cc.v2(Dot_x, Dot_y);

		Dot_x = Math.random() * (this.maxDot.x + 1) >> 0;
		Dot_y = Math.random() * (this.maxDot.y + 1) >> 0;
		DotCheck = Dot_y - Dot_x;
		if (DotCheck > 22) {
			Dot_y = Dot_y - Dot_y / 1.4;
		}
		this.dot[2].node.position = cc.v2(Dot_x, Dot_y);

		Dot_x = Math.random() * (this.maxDot.x + 1) >> 0;
		Dot_y = Math.random() * (this.maxDot.y + 1) >> 0;
		DotCheck = Dot_y - Dot_x;
		if (DotCheck > 22) {
			Dot_y = Dot_y - Dot_y / 1.4;
		}
		this.dot[3].node.position = cc.v2(Dot_x, Dot_y);

		this.dot.forEach(function (dot, index) {
			var check = data[index];
			if (check) {
				dot.spriteFrame = this.dot_red;
			} else {
				dot.spriteFrame = this.dot_white;
			}
		}.bind(this));
	},
	playTime: function playTime() {
		void 0 !== this.timeInterval && clearInterval(this.timeInterval);
		this.timeInterval = setInterval(function () {
			if (this.time_remain > 32) {
				var time = helper.numberPad(this.time_remain - 33, 2);
				this.timeWait.string = time;
				this.labelTime.node.active = false;
				this.nodeWait.active = true;
			} else if (this.time_remain > 30) {
				// Xoc Dia
				this.labelTime.node.active = false;
				this.nodeWait.active = false;
				this.time_remain === 32 && this.nodeBat.runAction(this.actionBatClose);
			} else {
				if (this.time_remain > -1) {
					var time = helper.numberPad(this.time_remain, 2);
					this.labelTime.node.active = true;
					this.nodeWait.active = false;
					this.labelTime.string = time;

					if (this.time_remain < 11) {
						this.labelTime.node.color = cc.Color.RED;
					} else {
						this.labelTime.node.color = cc.Color.WHITE;
					}
				} else clearInterval(this.timeInterval);
			}
			this.time_remain--;
		}.bind(this), 1000);
	},
	countClient: function countClient(client) {
		this.users_count.string = client;
	},
	updateData: function updateData(data) {
		this.total_chan.string = data.red.chan > 0 ? helper.numberWithCommas(data.red.chan) : '';
		this.total_le.string = data.red.le > 0 ? helper.numberWithCommas(data.red.le) : '';
		this.total_red3.string = data.red.red3 > 0 ? helper.numberWithCommas(data.red.red3) : '';
		this.total_red4.string = data.red.red4 > 0 ? helper.numberWithCommas(data.red.red4) : '';
		this.total_white3.string = data.red.white3 > 0 ? helper.numberWithCommas(data.red.white3) : '';
		this.total_white4.string = data.red.white4 > 0 ? helper.numberWithCommas(data.red.white4) : '';
	},
	resetData: function resetData() {
		this.box_chan.children[1].destroyAllChildren();
		this.box_le.children[1].destroyAllChildren();
		this.box_white4.children[1].destroyAllChildren();
		this.box_white3.children[1].destroyAllChildren();
		this.box_red3.children[1].destroyAllChildren();
		this.box_red4.children[1].destroyAllChildren();

		this.box_chan.children[0].active = false;
		this.box_le.children[0].active = false;
		this.box_white4.children[0].active = false;
		this.box_white3.children[0].active = false;
		this.box_red3.children[0].active = false;
		this.box_red4.children[0].active = false;

		this.total_chan.string = '';
		this.total_le.string = '';
		this.total_red3.string = '';
		this.total_red4.string = '';
		this.total_white3.string = '';
		this.total_white4.string = '';

		this.me_chan.string = '';
		this.me_le.string = '';
		this.me_red3.string = '';
		this.me_red4.string = '';
		this.me_white3.string = '';
		this.me_white4.string = '';

		this.users.red.chan = 0;
		this.users.red.le = 0;
		this.users.red.red3 = 0;
		this.users.red.red4 = 0;
		this.users.red.white3 = 0;
		this.users.red.white4 = 0;

		this.clients.red.chan = 0;
		this.clients.red.le = 0;
		this.clients.red.red3 = 0;
		this.clients.red.red4 = 0;
		this.clients.red.white3 = 0;
		this.clients.red.white4 = 0;
	},
	setLogs: function setLogs() {
		var self = this;
		this.logMain.forEach(function (obj, index) {
			var data = self.logs[index];
			if (data) {
				obj.node.active = true;
				data = Object.values(data);
				var gameChan = 0; // Là chẵn
				data.forEach(function (kqH) {
					if (kqH) {
						gameChan++;
					}
				});
				if (!(gameChan % 2)) {
					obj.spriteFrame = self.dot_white;
				} else {
					obj.spriteFrame = self.dot_red;
				}
			} else {
				obj.node.active = false;
			}
		});

		var tmp_DS = -1;
		var tmp_arrA = [];
		var tmp_arrB = [];
		var c_chan = 0;
		var c_le = 0;

		var newArr = self.logs.slice();
		newArr.reverse();
		newArr.forEach(function (newDS) {
			var data = Object.values(newDS);
			var gameChan = 0;
			data.forEach(function (kqH) {
				if (kqH) {
					gameChan++;
				}
			});

			var type = !(gameChan % 2);
			if (tmp_DS === -1) {
				tmp_DS = type;
			}
			if (type !== tmp_DS || tmp_arrB.length > 3) {
				tmp_DS = type;
				//tmp_arrB.reverse();
				tmp_arrA.push(tmp_arrB);
				tmp_arrB = [];
			}
			if (type === tmp_DS) {
				tmp_arrB.push(gameChan);
			}
		});

		//tmp_arrB.reverse();
		tmp_arrA.push(tmp_arrB);
		tmp_arrA.reverse();
		tmp_arrA = tmp_arrA.slice(0, 12);

		this.log_top.forEach(function (obj, index) {
			var data = tmp_arrA[index];
			if (data) {
				obj.cell.active = true;

				obj.data.forEach(function (cell, j) {
					var jD = data[j];
					if (void 0 !== jD) {
						cell.c.node.parent.active = true;
						cell.c.spriteFrame = !(jD % 2) ? jD === 4 ? self.dot_red : self.dot_white : self.dot_red;
						cell.t.string = jD === 0 ? 4 : jD;

						if (!(jD % 2)) {
							c_chan++;
						} else {
							c_le++;
						}
					} else {
						cell.c.node.parent.active = false;
					}
				});
			} else {
				obj.cell.active = false;
			}
		});

		this.log_chan.string = c_chan;
		this.log_le.string = c_le;
	},
	changerBet: function changerBet(event, bet) {
		var target = event.target;
		this.cuoc = target.name;
		this.bet.children.forEach(function (obj) {
			if (obj == target) {
				obj.children[0].active = false;
				obj.children[1].active = true;
				obj.pauseSystemEvents();
				obj.opacity = 255;
			} else {
				obj.children[0].active = true;
				obj.children[1].active = false;
				obj.resumeSystemEvents();
				obj.opacity = 99;
			}
		});
	},
	onCuoc: function onCuoc(event, box) {
		cc.RedT.send({ g: { xocxoc: { cuoc: { cuoc: this.cuoc, box: box } } } });
	},
	addNotice: function addNotice(text) {
		var notice = cc.instantiate(this.prefabNotice);
		var noticeComponent = notice.getComponent('mini_warning');
		noticeComponent.text.string = text;
		this.miniNotice.addChild(notice);
	},
	clientsChip: function clientsChip(data) {
		var nodeBox = null;
		var max = this.maxBox1_3;

		switch (data.box) {
			case 'chan':
				nodeBox = this.box_chan;
				max = this.maxBox1_1;
				break;

			case 'le':
				nodeBox = this.box_le;
				max = this.maxBox1_1;
				break;

			case 'red3':
				nodeBox = this.box_red3;
				break;

			case 'red4':
				nodeBox = this.box_red4;
				break;

			case 'white3':
				nodeBox = this.box_white3;
				break;

			case 'white4':
				nodeBox = this.box_white4;
				break;
		}

		var position = this.users_bg.parent.convertToWorldSpaceAR(this.users_bg.position);
		position = nodeBox.children[1].convertToNodeSpaceAR(position);

		var newN = new cc.Node();
		newN = newN.addComponent(cc.Sprite);
		newN.spriteFrame = this['chip_' + data.cuoc];
		newN.node.position = position;
		newN.node.scale = 0.67;

		var x = Math.random() * (max.x + 1) >> 0;
		var y = Math.random() * (max.y + 1) >> 0;

		nodeBox.children[1].addChild(newN.node);

		var copy = cc.instantiate(this.audioSingleChip.node);
		newN.node.addChild(copy);
		copy = copy.getComponent(cc.AudioSource);

		newN.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.4, 0.3), cc.moveTo(0.4, cc.v2(x, y))), cc.callFunc(function () {
			this.play();
		}, copy), cc.sequence(cc.moveTo(0.1, cc.v2(x, y - 6)), cc.moveTo(0.1, cc.v2(x, y)))));
	},
	meChip: function meChip(data) {
		var nodeBet = null;
		var nodeBox = null;
		var max = this.maxBox1_3;

		this.bet.children.forEach(function (bet) {
			if (bet.name == data.cuoc) {
				nodeBet = bet;
			}
		});

		switch (data.box) {
			case 'chan':
				nodeBox = this.box_chan;
				max = this.maxBox1_1;
				break;

			case 'le':
				nodeBox = this.box_le;
				max = this.maxBox1_1;
				break;

			case 'red3':
				nodeBox = this.box_red3;
				break;

			case 'red4':
				nodeBox = this.box_red4;
				break;

			case 'white3':
				nodeBox = this.box_white3;
				break;

			case 'white4':
				nodeBox = this.box_white4;
				break;
		}

		var position = nodeBet.parent.convertToWorldSpaceAR(nodeBet.position);
		position = nodeBox.children[1].convertToNodeSpaceAR(position);

		var newN = new cc.Node();
		newN = newN.addComponent(cc.Sprite);
		newN.spriteFrame = this['chip_' + data.cuoc];
		newN.node.position = position;

		var x = Math.random() * (max.x + 1) >> 0;
		var y = Math.random() * (max.y + 1) >> 0;

		// this.audioSingleChip.node
		nodeBox.children[1].addChild(newN.node);
		var copy = cc.instantiate(this.audioSingleChip.node);
		newN.node.addChild(copy);
		copy = copy.getComponent(cc.AudioSource);
		newN.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.3, 0.3), cc.moveTo(0.3, cc.v2(x, y))), cc.callFunc(function () {
			this.play();
		}, copy), cc.sequence(cc.moveTo(0.1, cc.v2(x, y + 6)), cc.moveTo(0.1, cc.v2(x, y)))));
	},
	updateMe: function updateMe(data) {
		!!data.red && this.updateMeRed(data.red);
	},
	updateMeRed: function updateMeRed(data) {
		if (data.chan > 0) {
			this.users.red.chan = data.chan;
			this.me_chan.string = helper.numberWithCommas(data.chan);
		}
		if (data.le > 0) {
			this.users.red.le = data.le;
			this.me_le.string = helper.numberWithCommas(data.le);
		}
		if (data.red3 > 0) {
			this.users.red.red3 = data.red3;
			this.me_red3.string = helper.numberWithCommas(data.red3);
		}
		if (data.red4 > 0) {
			this.users.red.red4 = data.red4;
			this.me_red4.string = helper.numberWithCommas(data.red4);
		}
		if (data.white3 > 0) {
			this.users.red.white3 = data.white3;
			this.me_white3.string = helper.numberWithCommas(data.white3);
		}
		if (data.white4 > 0) {
			this.users.red.white4 = data.white4;
			this.me_white4.string = helper.numberWithCommas(data.white4);
		}
	},
	updateClient: function updateClient(data) {
		!!data.red && this.updateClientRed(data.red);
	},
	updateClientRed: function updateClientRed(data) {
		if (data.chan > 0) {
			this.clients.red.chan = data.chan;
			this.total_chan.string = helper.numberWithCommas(data.chan);
		}
		if (data.le > 0) {
			this.clients.red.le = data.le;
			this.total_le.string = helper.numberWithCommas(data.le);
		}
		if (data.red3 > 0) {
			this.clients.red.red3 = data.red3;
			this.total_red3.string = helper.numberWithCommas(data.red3);
		}
		if (data.red4 > 0) {
			this.clients.red.red4 = data.red4;
			this.total_red4.string = helper.numberWithCommas(data.red4);
		}
		if (data.white3 > 0) {
			this.clients.red.white3 = data.white3;
			this.total_white3.string = helper.numberWithCommas(data.white3);
		}
		if (data.white4 > 0) {
			this.clients.red.white4 = data.white4;
			this.total_white4.string = helper.numberWithCommas(data.white4);
		}
	},
	updateMeCoint: function updateMeCoint() {
		this.me_chan.string = this.users.red.chan > 0 ? helper.numberWithCommas(this.users.red.chan) : '';
		this.me_le.string = this.users.red.le > 0 ? helper.numberWithCommas(this.users.red.le) : '';
		this.me_red3.string = this.users.red.red3 > 0 ? helper.numberWithCommas(this.users.red.red3) : '';
		this.me_red4.string = this.users.red.red4 > 0 ? helper.numberWithCommas(this.users.red.red4) : '';
		this.me_white3.string = this.users.red.white3 > 0 ? helper.numberWithCommas(this.users.red.white3) : '';
		this.me_white4.string = this.users.red.white4 > 0 ? helper.numberWithCommas(this.users.red.white4) : '';

		this.total_chan.string = this.clients.red.chan > 0 ? helper.numberWithCommas(this.clients.red.chan) : '';
		this.total_le.string = this.clients.red.le > 0 ? helper.numberWithCommas(this.clients.red.le) : '';
		this.total_red3.string = this.clients.red.red3 > 0 ? helper.numberWithCommas(this.clients.red.red3) : '';
		this.total_red4.string = this.clients.red.red4 > 0 ? helper.numberWithCommas(this.clients.red.red4) : '';
		this.total_white3.string = this.clients.red.white3 > 0 ? helper.numberWithCommas(this.clients.red.white3) : '';
		this.total_white4.string = this.clients.red.white4 > 0 ? helper.numberWithCommas(this.clients.red.white4) : '';
	},
	status: function status(data) {
		this.regTimeOut3 = setTimeout(function () {
			var temp = new cc.Node();
			temp.addComponent(cc.Label);
			temp = temp.getComponent(cc.Label);
			temp.string = (data.win ? '+' : '-') + helper.numberWithCommas(data.bet);
			temp.font = data.win ? cc.RedT.util.fontCong : cc.RedT.util.fontTru;
			temp.lineHeight = 130;
			temp.fontSize = 25;
			temp.node.position = cc.v2(0, 90);
			this.miniNotice.addChild(temp.node);
			temp.node.runAction(cc.sequence(cc.moveTo(4, cc.v2(0, 200)), cc.callFunc(function () {
				this.node.destroy();
			}, temp)));
			data.win && cc.RedT.send({ user: { updateCoint: true } });
			if (void 0 !== data.thuong && data.thuong > 0) {
				var thuong = new cc.Node();
				thuong.addComponent(cc.Label);
				thuong = thuong.getComponent(cc.Label);
				thuong.string = '+' + helper.numberWithCommas(data.thuong);
				thuong.font = cc.RedT.util.fontEffect;
				thuong.lineHeight = 90;
				thuong.fontSize = 14;
				this.miniNotice.addChild(thuong.node);
				thuong.node.runAction(cc.sequence(cc.moveTo(4, cc.v2(0, 100)), cc.callFunc(function () {
					this.node.destroy();
				}, thuong)));
			}
		}.bind(this), 4e3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb2NYb2MvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvY1hvYy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9jWG9jXFxYb2NYb2MuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsIm5vdGljZSIsImRpYWxvZyIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF1ZGlvTW9CYXQiLCJBdWRpb1NvdXJjZSIsImF1ZGlvU2luZ2xlQ2hpcCIsImF1ZGlvTXVsdGlDaGlwIiwiYXVkaW9Yb2NEaWEiLCJhdWRpb011bHRpQ2hpcDIiLCJhdWRpb011bHRpQ2hpcDMiLCJhdWRpb011bHRpQ2hpcDQiLCJhdWRpb011bHRpQ2hpcDUiLCJib3hfY2hhbiIsIk5vZGUiLCJib3hfbGUiLCJib3hfcmVkMyIsImJveF9yZWQ0IiwiYm94X3doaXRlMyIsImJveF93aGl0ZTQiLCJ0b3RhbF9jaGFuIiwiTGFiZWwiLCJ0b3RhbF9sZSIsInRvdGFsX3JlZDMiLCJ0b3RhbF9yZWQ0IiwidG90YWxfd2hpdGUzIiwidG90YWxfd2hpdGU0IiwibWVfY2hhbiIsIm1lX2xlIiwibWVfcmVkMyIsIm1lX3JlZDQiLCJtZV93aGl0ZTMiLCJtZV93aGl0ZTQiLCJtZV9uYW1lIiwibWVfYmFsYW5zIiwibGFiZWxUaW1lIiwidGltZVdhaXQiLCJub2RlV2FpdCIsImJveF9jaGlwIiwidXNlcnNfYmciLCJ1c2Vyc19jb3VudCIsIm5vZGVCYXQiLCJjaGlwXzEwMDAiLCJTcHJpdGVGcmFtZSIsImNoaXBfMTAwMDAiLCJjaGlwXzUwMDAwIiwiY2hpcF8xMDAwMDAiLCJjaGlwXzEwMDAwMDAiLCJkb3RfcmVkIiwiZG90X3doaXRlIiwiZG90IiwiZGVmYXVsdCIsInR5cGUiLCJTcHJpdGUiLCJsb2dfY2hhbiIsImxvZ19sZSIsImxvZ190b3AiLCJsb2dNYWluIiwicmVkSCIsIm1pbmlOb3RpY2UiLCJBbmltYXRpb24iLCJwcmVmYWJOb3RpY2UiLCJQcmVmYWIiLCJiZXQiLCJsb2FkaW5nIiwiY3RvciIsImxvZ3MiLCJuYW4iLCJjdW9jIiwiYWN0aW9uQmF0T3BlbiIsIm1vdmVUbyIsInYyIiwiYWN0aW9uQmF0Q2xvc2UiLCJzZXF1ZW5jZSIsImNhbGxGdW5jIiwicmVzZXREYXRhIiwiZGVsYXlUaW1lIiwicGxheSIsIm1heERvdCIsIngiLCJ5IiwibWF4Qm94MV8zIiwibWF4Qm94MV8xIiwiY2xpZW50cyIsInVzZXJzIiwib25Mb2FkIiwiUmVkVCIsImluR2FtZSIsIk1pbmlQYW5lbCIsIm5vZGUiLCJwYXJlbnQiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsImdldENvbXBvbmVudCIsInJldmVyc2UiLCJkYXRhIiwiY2VsbCIsImMiLCJ0Iiwic3RyaW5nIiwidXNlciIsIm5hbWUiLCJudW1iZXJXaXRoQ29tbWFzIiwicmVkIiwic2VuZCIsInNjZW5lIiwiZyIsInhvY3hvYyIsImluZ2FtZSIsIm9uRGF0YSIsInVzZXJEYXRhIiwibWluaSIsIlRvcEh1IiwidGFpeGl1IiwiVGFpWGl1IiwiVFhfTWFpbiIsInZpcHAiLCJEaWFsb2ciLCJWaXBQb2ludCIsImJhY2tHYW1lIiwiY2xlYXJJbnRlcnZhbCIsInRpbWVJbnRlcnZhbCIsIm91dGdhbWUiLCJhY3RpdmUiLCJjbGVhclRpbWVvdXQiLCJ0aW1lT3V0IiwicmVnVGltZU91dDEiLCJyZWdUaW1lT3V0MiIsInJlZ1RpbWVPdXQzIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJzaWduT3V0IiwieG9jeG9jSW5nYW1lIiwiZmluaXNoIiwieG9jeG9jRmluaXNoIiwiaGlzdG9yeSIsInRvcCIsInN0YXR1cyIsImNoaXAiLCJjbGllbnRzQ2hpcCIsIm1lY2hpcCIsIm1lQ2hpcCIsImNsaWVudCIsInVwZGF0ZUNsaWVudCIsIm1lIiwidXBkYXRlTWUiLCJhZGROb3RpY2UiLCJjb3VudENsaWVudCIsImluZ2FtZUNoaXAiLCJ0aW1lIiwidGltZV9yZW1haW4iLCJwbGF5VGltZSIsImxlbmd0aCIsInBvc2l0aW9uIiwic2V0RG90IiwicmVkMSIsInJlZDIiLCJyZWQzIiwicmVkNCIsInVwZGF0ZURhdGEiLCJzZXRMb2dzIiwiY2hhdHMiLCJPYmplY3QiLCJlbnRyaWVzIiwia2V5IiwidmFsdWUiLCJtYXgiLCJib3giLCJrZXlUIiwidmFsdWVUIiwiTWF0aCIsInJhbmRvbSIsIm5ld04iLCJhZGRDb21wb25lbnQiLCJzcHJpdGVGcmFtZSIsInNjYWxlIiwiYWRkQ2hpbGQiLCJkaWNlIiwidW5zaGlmdCIsInBvcCIsIkZpbmlzaFRUIiwicnVuQWN0aW9uIiwic2hvd0tRIiwic2hvd0tRMiIsInZhbHVlcyIsIm51bWIiLCJmb3JFYWNoIiwiYXVkaW9Mb3N0IiwiYXVkaW9XaW4iLCJub2RlMSIsIm5vZGUyIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwiY2VudGVyTWlkIiwiY2VudGVyTFIiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNwYXduIiwic2NhbGVUbyIsIndoaXRlMyIsIndoaXRlNCIsInNldFRpbWVvdXQiLCJjb3B5IiwiaW5zdGFudGlhdGUiLCJiaW5kIiwibm9kZTJyZWQiLCJhdWRpbyIsInBvc2l0aW9uVXNlciIsInBvc2l0aW9uMV8xIiwiZmFkZVRvIiwicG9zaXRpb24xXzMiLCJEb3RfeCIsIkRvdF95IiwiRG90Q2hlY2siLCJpbmRleCIsImNoZWNrIiwic2V0SW50ZXJ2YWwiLCJudW1iZXJQYWQiLCJjb2xvciIsIkNvbG9yIiwiUkVEIiwiV0hJVEUiLCJjaGFuIiwibGUiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJzZWxmIiwiZ2FtZUNoYW4iLCJrcUgiLCJ0bXBfRFMiLCJ0bXBfYXJyQSIsInRtcF9hcnJCIiwiY19jaGFuIiwiY19sZSIsIm5ld0FyciIsInNsaWNlIiwibmV3RFMiLCJwdXNoIiwiaiIsImpEIiwiY2hhbmdlckJldCIsImV2ZW50IiwidGFyZ2V0IiwicGF1c2VTeXN0ZW1FdmVudHMiLCJvcGFjaXR5IiwicmVzdW1lU3lzdGVtRXZlbnRzIiwib25DdW9jIiwidGV4dCIsIm5vdGljZUNvbXBvbmVudCIsIm5vZGVCb3giLCJub2RlQmV0IiwidXBkYXRlTWVSZWQiLCJ1cGRhdGVDbGllbnRSZWQiLCJ1cGRhdGVNZUNvaW50IiwidGVtcCIsIndpbiIsImZvbnQiLCJ1dGlsIiwiZm9udENvbmciLCJmb250VHJ1IiwibGluZUhlaWdodCIsImZvbnRTaXplIiwiZGVzdHJveSIsInVwZGF0ZUNvaW50IiwidGh1b25nIiwiZm9udEVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxRQUFSLENBQWI7O0FBRUEsSUFBSUUsU0FBU0YsUUFBUSxlQUFSLENBQWI7O0FBRUFHLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLGNBQWlCTCxHQUFHTSxXQURUO0FBRVhDLG1CQUFpQlAsR0FBR00sV0FGVDtBQUdYRSxrQkFBaUJSLEdBQUdNLFdBSFQ7QUFJWEcsZUFBaUJULEdBQUdNLFdBSlQ7O0FBTVhJLG1CQUFpQlYsR0FBR00sV0FOVDtBQU9YSyxtQkFBaUJYLEdBQUdNLFdBUFQ7QUFRWE0sbUJBQWlCWixHQUFHTSxXQVJUO0FBU1hPLG1CQUFpQmIsR0FBR00sV0FUVDs7QUFXWFEsWUFBWWQsR0FBR2UsSUFYSjtBQVlYQyxVQUFZaEIsR0FBR2UsSUFaSjtBQWFYRSxZQUFZakIsR0FBR2UsSUFiSjtBQWNYRyxZQUFZbEIsR0FBR2UsSUFkSjtBQWVYSSxjQUFZbkIsR0FBR2UsSUFmSjtBQWdCWEssY0FBWXBCLEdBQUdlLElBaEJKOztBQWtCWE0sY0FBY3JCLEdBQUdzQixLQWxCTjtBQW1CWEMsWUFBY3ZCLEdBQUdzQixLQW5CTjtBQW9CWEUsY0FBY3hCLEdBQUdzQixLQXBCTjtBQXFCWEcsY0FBY3pCLEdBQUdzQixLQXJC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Q0EsU0FBS3hNLFVBQUwsQ0FBZ0JzSCxRQUFoQixDQUF5QnFGLE9BQU83SyxJQUFoQztBQUNBNkssV0FBTzdLLElBQVAsQ0FBWTZGLFNBQVosQ0FBc0J2TCxHQUFHMEUsUUFBSCxDQUFZMUUsR0FBR3VFLE1BQUgsQ0FBVSxDQUFWLEVBQWF2RSxHQUFHd0UsRUFBSCxDQUFNLENBQU4sRUFBUyxHQUFULENBQWIsQ0FBWixFQUF5Q3hFLEdBQUcyRSxRQUFILENBQVksWUFBVTtBQUFDLFVBQUtlLElBQUwsQ0FBVTJLLE9BQVY7QUFBb0IsS0FBM0MsRUFBNkNFLE1BQTdDLENBQXpDLENBQXRCO0FBQ0E7QUFDRCxHQXZCNkIsQ0F3QjdCM0QsSUF4QjZCLENBd0J4QixJQXhCd0IsQ0FBWCxFQXdCTixHQXhCTSxDQUFuQjtBQXlCQTtBQTVrQ08sQ0FBVCIsImZpbGUiOiJYb2NYb2MuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvY1hvYyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcbmxldCBub3RpY2UgPSByZXF1aXJlKCdOb3RpY2UnKTtcclxuXHJcbmxldCBkaWFsb2cgPSByZXF1aXJlKCdYb2NYb2NfZGlhbG9nJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRhdWRpb01vQmF0OiAgICAgIGNjLkF1ZGlvU291cmNlLFxyXG5cdFx0YXVkaW9TaW5nbGVDaGlwOiBjYy5BdWRpb1NvdXJjZSxcclxuXHRcdGF1ZGlvTXVsdGlDaGlwOiAgY2MuQXVkaW9Tb3VyY2UsXHJcblx0XHRhdWRpb1hvY0RpYTogICAgIGNjLkF1ZGlvU291cmNlLFxyXG5cclxuXHRcdGF1ZGlvTXVsdGlDaGlwMjogY2MuQXVkaW9Tb3VyY2UsXHJcblx0XHRhdWRpb011bHRpQ2hpcDM6IGNjLkF1ZGlvU291cmNlLFxyXG5cdFx0YXVkaW9NdWx0aUNoaXA0OiBjYy5BdWRpb1NvdXJjZSxcclxuXHRcdGF1ZGlvTXVsdGlDaGlwNTogY2MuQXVkaW9Tb3VyY2UsXHJcblxyXG5cdFx0Ym94X2NoYW46ICAgY2MuTm9kZSxcclxuXHRcdGJveF9sZTogICAgIGNjLk5vZGUsXHJcblx0XHRib3hfcmVkMzogICBjYy5Ob2RlLFxyXG5cdFx0Ym94X3JlZDQ6ICAgY2MuTm9kZSxcclxuXHRcdGJveF93aGl0ZTM6IGNjLk5vZGUsXHJcblx0XHRib3hfd2hpdGU0OiBjYy5Ob2RlLFxyXG5cclxuXHRcdHRvdGFsX2NoYW46ICAgY2MuTGFiZWwsXHJcblx0XHR0b3RhbF9sZTogICAgIGNjLkxhYmVsLFxyXG5cdFx0dG90YWxfcmVkMzogICBjYy5MYWJlbCxcclxuXHRcdHRvdGFsX3JlZDQ6ICAgY2MuTGFiZWwsXHJcblx0XHR0b3RhbF93aGl0ZTM6IGNjLkxhYmVsLFxyXG5cdFx0dG90YWxfd2hpdGU0OiBjYy5MYWJlbCxcclxuXHJcblx0XHRtZV9jaGFuOiAgIGNjLkxhYmVsLFxyXG5cdFx0bWVfbGU6ICAgICBjYy5MYWJlbCxcclxuXHRcdG1lX3JlZDM6ICAgY2MuTGFiZWwsXHJcblx0XHRtZV9yZWQ0OiAgIGNjLkxhYmVsLFxyXG5cdFx0bWVfd2hpdGUzOiBjYy5MYWJlbCxcclxuXHRcdG1lX3doaXRlNDogY2MuTGFiZWwsXHJcblxyXG5cdFx0bWVfbmFtZTogICBjYy5MYWJlbCxcclxuXHRcdG1lX2JhbGFuczogY2MuTGFiZWwsXHJcblxyXG5cdFx0bGFiZWxUaW1lOiBjYy5MYWJlbCxcclxuXHRcdHRpbWVXYWl0OiAgY2MuTGFiZWwsXHJcblx0XHRub2RlV2FpdDogIGNjLk5vZGUsXHJcblxyXG5cdFx0Ym94X2NoaXA6ICAgIGNjLk5vZGUsXHJcblxyXG5cdFx0dXNlcnNfYmc6ICAgIGNjLk5vZGUsXHJcblx0XHR1c2Vyc19jb3VudDogY2MuTGFiZWwsXHJcblxyXG5cdFx0bm9kZUJhdDogY2MuTm9kZSxcclxuXHJcblx0XHRjaGlwXzEwMDA6ICAgIGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0Y2hpcF8xMDAwMDogICBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdGNoaXBfNTAwMDA6ICAgY2MuU3ByaXRlRnJhbWUsXHJcblx0XHRjaGlwXzEwMDAwMDogIGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0Y2hpcF8xMDAwMDAwOiBjYy5TcHJpdGVGcmFtZSxcclxuXHJcblx0XHRkb3RfcmVkOiAgIGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0ZG90X3doaXRlOiBjYy5TcHJpdGVGcmFtZSxcclxuXHJcblx0XHRkb3Q6IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6IGNjLlNwcml0ZSxcclxuXHRcdH0sXHJcblxyXG5cdFx0bG9nX2NoYW46IGNjLkxhYmVsLFxyXG5cdFx0bG9nX2xlOiAgIGNjLkxhYmVsLFxyXG5cdFx0bG9nX3RvcDogIGNjLk5vZGUsXHJcblx0XHRsb2dNYWluOiAgY2MuTm9kZSxcclxuXHJcblx0XHRyZWRIOiAgICBjYy5Ob2RlLFxyXG5cdFx0bWluaU5vdGljZTogY2MuTm9kZSxcclxuXHJcblx0XHRBbmltYXRpb246IGNjLkFuaW1hdGlvbixcclxuXHJcblx0XHRwcmVmYWJOb3RpY2U6IGNjLlByZWZhYixcclxuXHJcblx0XHRiZXQ6ICAgICBjYy5Ob2RlLFxyXG5cclxuXHRcdGxvYWRpbmc6ICAgY2MuTm9kZSxcclxuXHRcdG5vdGljZTogICAgbm90aWNlLFxyXG5cdFx0ZGlhbG9nOiAgICBkaWFsb2csXHJcblx0fSxcclxuXHRjdG9yOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5sb2dzID0gW107XHJcblx0XHR0aGlzLm5hbiAgPSBmYWxzZTtcclxuXHRcdHRoaXMuY3VvYyA9ICcxMDAwJztcclxuXHRcdHRoaXMuYWN0aW9uQmF0T3BlbiAgPSBjYy5tb3ZlVG8oMC41LCBjYy52MigxMjEsIDIyMikpO1xyXG5cdFx0dGhpcy5hY3Rpb25CYXRDbG9zZSA9IGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRoaXMucmVzZXREYXRhKCk7XHJcblx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHRjYy5tb3ZlVG8oMC41LCBjYy52MigwLCAwKSksXHJcblx0XHRcdGNjLmRlbGF5VGltZSgwLjUpLFxyXG5cdFx0XHRjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRoaXMuYXVkaW9Yb2NEaWEucGxheSgpO1xyXG5cdFx0XHRcdHRoaXMuQW5pbWF0aW9uLnBsYXkoKTtcclxuXHRcdFx0fSwgdGhpcykpO1xyXG5cdFx0dGhpcy5tYXhEb3QgPSB7eDozOSwgeToxOX07XHJcblxyXG5cdFx0dGhpcy5tYXhCb3gxXzMgPSB7eDotMTAsIHk6MH07XHJcblx0XHR0aGlzLm1heEJveDFfMSA9IHt4Oi0xMCwgeTowfTtcclxuXHJcblx0XHR0aGlzLmNsaWVudHMgPSB7XHJcblx0XHRcdCdyZWQnOiB7XHJcblx0XHRcdFx0J2NoYW4nOiAgIDAsXHJcblx0XHRcdFx0J2xlJzogICAgIDAsXHJcblx0XHRcdFx0J3JlZDMnOiAgIDAsXHJcblx0XHRcdFx0J3JlZDQnOiAgIDAsXHJcblx0XHRcdFx0J3doaXRlMyc6IDAsXHJcblx0XHRcdFx0J3doaXRlNCc6IDAsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cclxuXHRcdHRoaXMudXNlcnMgPSB7XHJcblx0XHRcdCdyZWQnOiB7XHJcblx0XHRcdFx0J2NoYW4nOiAgIDAsXHJcblx0XHRcdFx0J2xlJzogICAgIDAsXHJcblx0XHRcdFx0J3JlZDMnOiAgIDAsXHJcblx0XHRcdFx0J3JlZDQnOiAgIDAsXHJcblx0XHRcdFx0J3doaXRlMyc6IDAsXHJcblx0XHRcdFx0J3doaXRlNCc6IDAsXHJcblx0XHRcdH0sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0b25Mb2FkICgpIHtcclxuXHRcdGNjLlJlZFQuaW5HYW1lID0gdGhpcztcclxuXHRcdGNjLlJlZFQuTWluaVBhbmVsLm5vZGUucGFyZW50ID0gdGhpcy5yZWRIO1xyXG5cclxuXHRcdHRoaXMubG9nTWFpbiA9IHRoaXMubG9nTWFpbi5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0cmV0dXJuIG9iai5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMubG9nTWFpbi5yZXZlcnNlKCk7XHJcblxyXG5cdFx0dGhpcy5sb2dfdG9wID0gdGhpcy5sb2dfdG9wLmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRsZXQgZGF0YSA9IHsnY2VsbCc6b2JqfTtcclxuXHRcdFx0bGV0IGNlbGwgPSBvYmouY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdFx0cmV0dXJuIHtjOm9iai5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgdDpvYmouY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKX07XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRjZWxsLnJldmVyc2UoKTtcclxuXHRcdFx0ZGF0YS5kYXRhID0gY2VsbDtcclxuXHRcdFx0cmV0dXJuIGRhdGE7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLmxvZ190b3AucmV2ZXJzZSgpO1xyXG5cclxuXHRcdHRoaXMubWVfbmFtZS5zdHJpbmcgPSBjYy5SZWRULnVzZXIubmFtZTtcclxuXHRcdHRoaXMubWVfYmFsYW5zLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGNjLlJlZFQudXNlci5yZWQpO1xyXG5cclxuXHRcdGNjLlJlZFQuc2VuZCh7c2NlbmU6XCJ4b2N4b2NcIiwgZzp7eG9jeG9jOntpbmdhbWU6dHJ1ZX19fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEudXNlcil7XHJcblx0XHRcdHRoaXMudXNlckRhdGEoZGF0YS51c2VyKTtcclxuXHRcdFx0Y2MuUmVkVC51c2VyRGF0YShkYXRhLnVzZXIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS54b2N4b2Mpe1xyXG5cdFx0XHR0aGlzLnhvY3hvYyhkYXRhLnhvY3hvYyk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm1pbmkpe1xyXG5cdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5vbkRhdGEoZGF0YS5taW5pKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuVG9wSHUpe1xyXG5cdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5Ub3BIdS5vbkRhdGEoZGF0YS5Ub3BIdSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnRhaXhpdSl7XHJcblx0XHRcdGNjLlJlZFQuTWluaVBhbmVsLlRhaVhpdS5UWF9NYWluLm9uRGF0YShkYXRhLnRhaXhpdSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnZpcHApIHtcclxuXHRcdFx0Y2MuUmVkVC5NaW5pUGFuZWwuRGlhbG9nLlZpcFBvaW50Lm9uRGF0YShkYXRhLnZpcHApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0YmFja0dhbWU6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULk1pbmlQYW5lbC5ub2RlLnBhcmVudCA9IG51bGw7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMudGltZUludGVydmFsKTtcclxuXHRcdGNjLlJlZFQuc2VuZCh7Zzp7eG9jeG9jOntvdXRnYW1lOnRydWV9fX0pO1xyXG5cdFx0dGhpcy5sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRjbGVhclRpbWVvdXQodGhpcy50aW1lT3V0KTtcclxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlZ1RpbWVPdXQxKTtcclxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlZ1RpbWVPdXQyKTtcclxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnJlZ1RpbWVPdXQzKTtcclxuXHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbkdhbWUnKTtcclxuXHR9LFxyXG5cdHNpZ25PdXQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULk1pbmlQYW5lbC5ub2RlLnBhcmVudCA9IG51bGw7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMudGltZUludGVydmFsKTtcclxuXHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVPdXQpO1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmVnVGltZU91dDEpO1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmVnVGltZU91dDIpO1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMucmVnVGltZU91dDMpO1xyXG5cdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWluR2FtZScsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLnNpZ25PdXQoKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0dXNlckRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5tZV9iYWxhbnMuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5yZWQpO1xyXG5cdH0sXHJcblx0eG9jeG9jOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdC8vY29uc29sZS5sb2coZGF0YSk7XHJcblx0XHRpZiAoISFkYXRhLmluZ2FtZSkge1xyXG5cdFx0XHR0aGlzLnhvY3hvY0luZ2FtZShkYXRhLmluZ2FtZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLmZpbmlzaCkge1xyXG5cdFx0XHR0aGlzLnhvY3hvY0ZpbmlzaChkYXRhLmZpbmlzaCk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLmhpc3RvcnkpIHtcclxuXHRcdFx0dGhpcy5kaWFsb2cuaGlzdG9yeS5vbkRhdGEoZGF0YS5oaXN0b3J5KTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEudG9wKSB7XHJcblx0XHRcdC8vdG9wIHdpblxyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5zdGF0dXMpIHtcclxuXHRcdFx0dGhpcy5zdGF0dXMoZGF0YS5zdGF0dXMpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5jaGlwKSB7XHJcblx0XHRcdHRoaXMuY2xpZW50c0NoaXAoZGF0YS5jaGlwKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEubWVjaGlwKSB7XHJcblx0XHRcdHRoaXMubWVDaGlwKGRhdGEubWVjaGlwKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEuY2xpZW50KSB7XHJcblx0XHRcdHRoaXMudXBkYXRlQ2xpZW50KGRhdGEuY2xpZW50KTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEubWUpIHtcclxuXHRcdFx0dGhpcy51cGRhdGVNZShkYXRhLm1lKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubm90aWNlKSB7XHJcblx0XHRcdHRoaXMuYWRkTm90aWNlKGRhdGEubm90aWNlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHhvY3hvY0luZ2FtZTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRpZiAoZGF0YS5jbGllbnQpIHtcclxuXHRcdFx0dGhpcy5jb3VudENsaWVudChkYXRhLmNsaWVudCk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLmNoaXApIHtcclxuXHRcdFx0dGhpcy5pbmdhbWVDaGlwKGRhdGEuY2hpcCk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLnRpbWUpIHtcclxuXHRcdFx0dGhpcy50aW1lX3JlbWFpbiA9IGRhdGEudGltZS0xO1xyXG5cdFx0XHR0aGlzLnBsYXlUaW1lKCk7XHJcblx0XHRcdGlmICh0aGlzLnRpbWVfcmVtYWluID4gMzIgJiYgZGF0YS5sb2dzLmxlbmd0aCkge1xyXG5cdFx0XHRcdHRoaXMubm9kZUJhdC5wb3NpdGlvbiA9IGNjLnYyKDAsIDI0Nik7XHJcblx0XHRcdFx0dGhpcy5zZXREb3QoW2RhdGEubG9nc1swXS5yZWQxLCBkYXRhLmxvZ3NbMF0ucmVkMiwgZGF0YS5sb2dzWzBdLnJlZDMsIGRhdGEubG9nc1swXS5yZWQ0XSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEuZGF0YSkge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZURhdGEoZGF0YS5kYXRhKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEubG9ncykge1xyXG5cdFx0XHR0aGlzLmxvZ3MgPSBkYXRhLmxvZ3M7XHJcblx0XHRcdHRoaXMuc2V0TG9ncygpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5tZSkge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZU1lKGRhdGEubWUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5jaGF0cykge1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5nYW1lQ2hpcDogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcclxuXHRcdFx0bGV0IG1heCA9IHRoaXMubWF4Qm94MV8zO1xyXG5cdFx0XHRzd2l0Y2goZGF0YS5ib3gpIHtcclxuXHRcdFx0XHRjYXNlICdjaGFuJzpcclxuXHRcdFx0XHRcdG1heCA9IHRoaXMubWF4Qm94MV8xO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdsZSc6XHJcblx0XHRcdFx0XHRtYXggPSB0aGlzLm1heEJveDFfMTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IgKGxldCBba2V5VCwgdmFsdWVUXSBvZiBPYmplY3QuZW50cmllcyh2YWx1ZSkpIHtcclxuXHRcdFx0XHRpZiAodmFsdWVUID4gMCkge1xyXG5cdFx0XHRcdFx0d2hpbGUgKHZhbHVlVCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgeCA9IChNYXRoLnJhbmRvbSgpKihtYXgueCsxKSk+PjA7XHJcblx0XHRcdFx0XHRcdGxldCB5ID0gKE1hdGgucmFuZG9tKCkqKG1heC55KzEpKT4+MDtcclxuXHJcblx0XHRcdFx0XHRcdGxldCBuZXdOID0gbmV3IGNjLk5vZGU7XHJcblx0XHRcdFx0XHRcdG5ld04gPSBuZXdOLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cdFx0XHRcdFx0XHRuZXdOLnNwcml0ZUZyYW1lID0gdGhpc1snY2hpcF8nK2tleVRdO1xyXG5cdFx0XHRcdFx0XHRuZXdOLm5vZGUucG9zaXRpb24gPSBjYy52Mih4LCB5KTtcclxuXHRcdFx0XHRcdFx0bmV3Ti5ub2RlLnNjYWxlID0gMC4zO1xyXG5cdFx0XHRcdFx0XHR0aGlzWydib3hfJytrZXldLmNoaWxkcmVuWzFdLmFkZENoaWxkKG5ld04ubm9kZSk7XHJcblx0XHRcdFx0XHRcdHZhbHVlVC0tO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0eG9jeG9jRmluaXNoOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGxldCBkaWNlID0ge3JlZDE6ZGF0YVswXSwgcmVkMjpkYXRhWzFdLCByZWQzOmRhdGFbMl0sIHJlZDQ6ZGF0YVszXX07XHJcblx0XHR0aGlzLmxvZ3MudW5zaGlmdChkaWNlKTtcclxuXHRcdHRoaXMubG9ncy5sZW5ndGggPiA0OCAmJiB0aGlzLmxvZ3MucG9wKCk7XHJcblx0XHR0aGlzLnNldERvdChkYXRhKTtcclxuXHRcdHRoaXMubGFiZWxUaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLnRpbWVfcmVtYWluID0gNDM7XHJcblx0XHR0aGlzLnBsYXlUaW1lKCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLm5hbikge1xyXG5cdFx0XHR0aGlzLkZpbmlzaFRUKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRGaW5pc2hUVDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuYXVkaW9Nb0JhdC5wbGF5KCk7XHJcblx0XHR0aGlzLm5vZGVCYXQucnVuQWN0aW9uKFxyXG5cdFx0XHRjYy5zZXF1ZW5jZShcclxuXHRcdFx0XHR0aGlzLmFjdGlvbkJhdE9wZW4sXHJcblx0XHRcdFx0Y2MuY2FsbEZ1bmModGhpcy5zaG93S1EsIHRoaXMpLFxyXG5cdFx0XHRcdGNjLmRlbGF5VGltZSgxKSxcclxuXHRcdFx0XHRjYy5jYWxsRnVuYyh0aGlzLnNob3dLUTIsIHRoaXMpLFxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdFx0dGhpcy5zZXRMb2dzKCk7XHJcblx0fSxcclxuXHRzaG93S1E6IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgZGF0YSA9IE9iamVjdC52YWx1ZXModGhpcy5sb2dzWzBdKTtcclxuXHRcdGxldCBudW1iID0gMDtcclxuXHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihkb3Qpe1xyXG5cdFx0XHRpZiAoZG90KSB7XHJcblx0XHRcdFx0bnVtYisrO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRpZiAoIShudW1iJTIpKSB7XHJcblx0XHRcdHRoaXMuYm94X2NoYW4uY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLmJveF9sZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHN3aXRjaChudW1iKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHR0aGlzLmJveF93aGl0ZTQuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0dGhpcy5ib3hfd2hpdGUzLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHRoaXMuYm94X3JlZDMuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0dGhpcy5ib3hfcmVkNC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNob3dLUTI6IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgYXVkaW9Mb3N0ID0gMDtcclxuXHRcdGxldCBhdWRpb1dpbiAgPSAwO1xyXG5cdFx0bGV0IG5vZGUxID0gbnVsbDtcclxuXHRcdGxldCBub2RlMiA9IG51bGw7XHJcblx0XHRsZXQgZGF0YSAgPSBPYmplY3QudmFsdWVzKHRoaXMubG9nc1swXSk7XHJcblx0XHRsZXQgbnVtYiAgPSAwO1xyXG5cdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGRvdCl7XHJcblx0XHRcdGlmIChkb3QpIHtcclxuXHRcdFx0XHRudW1iKys7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBwb3NpdGlvbiA9IHRoaXMuYm94X2NoaXAucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUih0aGlzLmJveF9jaGlwLnBvc2l0aW9uKTtcclxuXHRcdGxldCBjZW50ZXJNaWQgPSBudWxsO1xyXG5cdFx0bGV0IGNlbnRlckxSICA9IG51bGw7XHJcblxyXG5cdFx0aWYgKCEobnVtYiUyKSkge1xyXG5cdFx0XHRub2RlMSA9IHRoaXMuYm94X2NoYW4uY2hpbGRyZW5bMV07XHJcblx0XHRcdGF1ZGlvTG9zdCArPSB0aGlzLmJveF9sZS5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdGNlbnRlck1pZCA9IHRoaXMuYm94X2xlLmNoaWxkcmVuWzFdLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uKTtcclxuXHRcdFx0dGhpcy5ib3hfbGUuY2hpbGRyZW5bMV0uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlwKXtcclxuXHRcdFx0XHRjaGlwLnJ1bkFjdGlvbihcclxuXHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRjYy5zY2FsZVRvKDAuNCwgMC41KSxcclxuXHRcdFx0XHRcdFx0Y2MubW92ZVRvKDAuNCwgY2VudGVyTWlkKVxyXG5cdFx0XHRcdFx0KSxcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRub2RlMSA9IHRoaXMuYm94X2xlLmNoaWxkcmVuWzFdO1xyXG5cdFx0XHRhdWRpb0xvc3QgKz0gdGhpcy5ib3hfY2hhbi5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdGNlbnRlck1pZCA9IHRoaXMuYm94X2NoYW4uY2hpbGRyZW5bMV0uY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG5cdFx0XHR0aGlzLmJveF9jaGFuLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpcCl7XHJcblx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdFx0Y2Muc2NhbGVUbygwLjQsIDAuNSksXHJcblx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIGNlbnRlck1pZClcclxuXHRcdFx0XHRcdCksXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJlZDMgICA9IHRoaXMuYm94X3JlZDMuY2hpbGRyZW5bMV0uY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG5cdFx0bGV0IHJlZDQgICA9IHRoaXMuYm94X3JlZDQuY2hpbGRyZW5bMV0uY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG5cdFx0bGV0IHdoaXRlMyA9IHRoaXMuYm94X3doaXRlMy5jaGlsZHJlblsxXS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NpdGlvbik7XHJcblx0XHRsZXQgd2hpdGU0ID0gdGhpcy5ib3hfd2hpdGU0LmNoaWxkcmVuWzFdLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uKTtcclxuXHJcblx0XHRzd2l0Y2gobnVtYikge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0bm9kZTIgPSB0aGlzLmJveF93aGl0ZTQuY2hpbGRyZW5bMV07XHJcblx0XHRcdFx0YXVkaW9Mb3N0ICs9IHRoaXMuYm94X3JlZDMuY2hpbGRyZW5bMV0uY2hpbGRyZW4ubGVuZ3RoK3RoaXMuYm94X3JlZDQuY2hpbGRyZW5bMV0uY2hpbGRyZW4ubGVuZ3RoK3RoaXMuYm94X3doaXRlMy5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5ib3hfcmVkMy5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHJlZDMpXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuYm94X3JlZDQuY2hpbGRyZW5bMV0uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlwKXtcclxuXHRcdFx0XHRcdGNoaXAucnVuQWN0aW9uKFxyXG5cdFx0XHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdFx0XHRjYy5zY2FsZVRvKDAuNCwgMC41KSxcclxuXHRcdFx0XHRcdFx0XHRjYy5tb3ZlVG8oMC40LCByZWQ0KVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLmJveF93aGl0ZTMuY2hpbGRyZW5bMV0uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlwKXtcclxuXHRcdFx0XHRcdGNoaXAucnVuQWN0aW9uKFxyXG5cdFx0XHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdFx0XHRjYy5zY2FsZVRvKDAuNCwgMC41KSxcclxuXHRcdFx0XHRcdFx0XHRjYy5tb3ZlVG8oMC40LCB3aGl0ZTMpXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0XHRub2RlMiA9IHRoaXMuYm94X3doaXRlMy5jaGlsZHJlblsxXTtcclxuXHRcdFx0XHRhdWRpb0xvc3QgKz0gdGhpcy5ib3hfcmVkMy5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGgrdGhpcy5ib3hfcmVkNC5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGgrdGhpcy5ib3hfd2hpdGU0LmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aDtcclxuXHRcdFx0XHR0aGlzLmJveF9yZWQzLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpcCl7XHJcblx0XHRcdFx0XHRjaGlwLnJ1bkFjdGlvbihcclxuXHRcdFx0XHRcdFx0Y2Muc3Bhd24oXHJcblx0XHRcdFx0XHRcdFx0Y2Muc2NhbGVUbygwLjQsIDAuNSksXHJcblx0XHRcdFx0XHRcdFx0Y2MubW92ZVRvKDAuNCwgcmVkMylcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5ib3hfcmVkNC5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHJlZDQpXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuYm94X3doaXRlNC5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHdoaXRlNClcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdGF1ZGlvTG9zdCArPSB0aGlzLmJveF9yZWQzLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCt0aGlzLmJveF9yZWQ0LmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCt0aGlzLmJveF93aGl0ZTMuY2hpbGRyZW5bMV0uY2hpbGRyZW4ubGVuZ3RoK3RoaXMuYm94X3doaXRlNC5jaGlsZHJlblsxXS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdFx0dGhpcy5ib3hfcmVkMy5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHJlZDMpXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuYm94X3JlZDQuY2hpbGRyZW5bMV0uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlwKXtcclxuXHRcdFx0XHRcdGNoaXAucnVuQWN0aW9uKFxyXG5cdFx0XHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdFx0XHRjYy5zY2FsZVRvKDAuNCwgMC41KSxcclxuXHRcdFx0XHRcdFx0XHRjYy5tb3ZlVG8oMC40LCByZWQ0KVxyXG5cdFx0XHRcdFx0XHQpLFxyXG5cdFx0XHRcdFx0KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHR0aGlzLmJveF93aGl0ZTMuY2hpbGRyZW5bMV0uY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlwKXtcclxuXHRcdFx0XHRcdGNoaXAucnVuQWN0aW9uKFxyXG5cdFx0XHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdFx0XHRjYy5zY2FsZVRvKDAuNCwgMC41KSxcclxuXHRcdFx0XHRcdFx0XHRjYy5tb3ZlVG8oMC40LCB3aGl0ZTQpXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuYm94X3doaXRlNC5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHdoaXRlNClcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdG5vZGUyID0gdGhpcy5ib3hfcmVkMy5jaGlsZHJlblsxXTtcclxuXHRcdFx0XHRhdWRpb0xvc3QgKz0gdGhpcy5ib3hfd2hpdGUzLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCt0aGlzLmJveF9yZWQ0LmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCt0aGlzLmJveF93aGl0ZTQuY2hpbGRyZW5bMV0uY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdHRoaXMuYm94X3doaXRlMy5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHdoaXRlMylcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5ib3hfcmVkNC5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHJlZDQpXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuYm94X3doaXRlNC5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHdoaXRlNClcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdG5vZGUyID0gdGhpcy5ib3hfcmVkNC5jaGlsZHJlblsxXTtcclxuXHRcdFx0XHRhdWRpb0xvc3QgKz0gdGhpcy5ib3hfd2hpdGUzLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCt0aGlzLmJveF9yZWQzLmNoaWxkcmVuWzFdLmNoaWxkcmVuLmxlbmd0aCt0aGlzLmJveF93aGl0ZTQuY2hpbGRyZW5bMV0uY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdHRoaXMuYm94X3doaXRlMy5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHdoaXRlMylcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5ib3hfcmVkMy5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHJlZDMpXHJcblx0XHRcdFx0XHRcdCksXHJcblx0XHRcdFx0XHQpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHRoaXMuYm94X3doaXRlNC5jaGlsZHJlblsxXS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjUpLFxyXG5cdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHdoaXRlNClcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0ISFhdWRpb0xvc3QgJiYgdGhpcy5hdWRpb011bHRpQ2hpcC5wbGF5KCk7XHJcblx0XHR0aGlzLnJlZ1RpbWVPdXQxID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRhdWRpb1dpbiArPSBub2RlMS5jaGlsZHJlbi5sZW5ndGg7XHJcblx0XHRcdG5vZGUxLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY2hpcCl7XHJcblx0XHRcdFx0bGV0IGNvcHkgPSBjYy5pbnN0YW50aWF0ZShjaGlwKTtcclxuXHRcdFx0XHRjb3B5LnBvc2l0aW9uID0gY2VudGVyTWlkO1xyXG5cdFx0XHRcdGNvcHkuc2NhbGUgICAgPSAwLjU7XHJcblxyXG5cdFx0XHRcdGxldCB4ID0gKE1hdGgucmFuZG9tKCkqKHRoaXMubWF4Qm94MV8xLngrMSkpPj4wO1xyXG5cdFx0XHRcdGxldCB5ID0gKE1hdGgucmFuZG9tKCkqKHRoaXMubWF4Qm94MV8xLnkrMSkpPj4wO1xyXG5cclxuXHRcdFx0XHRub2RlMS5hZGRDaGlsZChjb3B5KTtcclxuXHRcdFx0XHRjb3B5LnJ1bkFjdGlvbihcclxuXHRcdFx0XHRcdGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdFx0XHRjYy5zY2FsZVRvKDAuNCwgMC4zKSxcclxuXHRcdFx0XHRcdFx0XHRjYy5tb3ZlVG8oMC40LCBjYy52Mih4LCB5KSlcclxuXHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0Y2Muc2VxdWVuY2UoXHJcblx0XHRcdFx0XHRcdFx0Y2MubW92ZVRvKDAuMSwgY2MudjIoeCwgeS02KSksXHJcblx0XHRcdFx0XHRcdFx0Y2MubW92ZVRvKDAuMSwgY2MudjIoeCwgeSkpXHJcblx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdCkpO1xyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cclxuXHRcdFx0aWYgKG5vZGUyKSB7XHJcblx0XHRcdFx0YXVkaW9XaW4gKz0gbm9kZTIuY2hpbGRyZW4ubGVuZ3RoO1xyXG5cdFx0XHRcdGxldCBub2RlMnJlZCA9IG5vZGUyLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uKTtcclxuXHRcdFx0XHRub2RlMi5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGNoaXApe1xyXG5cdFx0XHRcdFx0bGV0IGNvcHkgPSBjYy5pbnN0YW50aWF0ZShjaGlwKTtcclxuXHRcdFx0XHRcdGNvcHkucG9zaXRpb24gPSBub2RlMnJlZDtcclxuXHRcdFx0XHRcdGNvcHkuc2NhbGUgICAgPSAwLjU7XHJcblxyXG5cdFx0XHRcdFx0bGV0IHggPSAoTWF0aC5yYW5kb20oKSoodGhpcy5tYXhCb3gxXzMueCsxKSk+PjA7XHJcblx0XHRcdFx0XHRsZXQgeSA9IChNYXRoLnJhbmRvbSgpKih0aGlzLm1heEJveDFfMy55KzEpKT4+MDtcclxuXHJcblx0XHRcdFx0XHRub2RlMi5hZGRDaGlsZChjb3B5KTtcclxuXHRcdFx0XHRcdGNvcHkucnVuQWN0aW9uKFxyXG5cdFx0XHRcdFx0XHRjYy5zZXF1ZW5jZShcclxuXHRcdFx0XHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjMpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2MubW92ZVRvKDAuNCwgY2MudjIoeCwgeSkpXHJcblx0XHRcdFx0XHRcdFx0KSxcclxuXHRcdFx0XHRcdFx0XHRjYy5zZXF1ZW5jZShcclxuXHRcdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjEsIGNjLnYyKHgsIHktNikpLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2MubW92ZVRvKDAuMSwgY2MudjIoeCwgeSkpXHJcblx0XHRcdFx0XHRcdFx0KVxyXG5cdFx0XHRcdFx0XHQpKTtcclxuXHRcdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghIWF1ZGlvV2luKSB7XHJcblx0XHRcdFx0WzEsMiwzLDQsNV0uZm9yRWFjaChmdW5jdGlvbihhdWRpbyl7XHJcblx0XHRcdFx0XHRpZiAoYXVkaW8gIT09IDEpIHtcclxuXHRcdFx0XHRcdFx0dGhpc1snYXVkaW9NdWx0aUNoaXAnK2F1ZGlvXS5wbGF5KCk7XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhpcy5hdWRpb011bHRpQ2hpcC5wbGF5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLnJlZ1RpbWVPdXQyID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGxldCBwb3NpdGlvblVzZXIgPSB0aGlzLnVzZXJzX2JnLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy51c2Vyc19iZy5wb3NpdGlvbik7XHJcblx0XHRcdFx0bGV0IHBvc2l0aW9uMV8xID0gbm9kZTEuY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb25Vc2VyKTtcclxuXHJcblx0XHRcdFx0bm9kZTEuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlwKXtcclxuXHRcdFx0XHRcdGNoaXAucnVuQWN0aW9uKFxyXG5cdFx0XHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdFx0XHRjYy5mYWRlVG8oMC40LCAwKSxcclxuXHRcdFx0XHRcdFx0XHRjYy5tb3ZlVG8oMC40LCBwb3NpdGlvbjFfMSlcclxuXHRcdFx0XHRcdFx0KSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKG5vZGUyKSB7XHJcblx0XHRcdFx0XHRsZXQgcG9zaXRpb24xXzMgPSBub2RlMi5jb252ZXJ0VG9Ob2RlU3BhY2VBUihwb3NpdGlvblVzZXIpO1xyXG5cdFx0XHRcdFx0bm9kZTIuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihjaGlwKXtcclxuXHRcdFx0XHRcdFx0Y2hpcC5ydW5BY3Rpb24oXHJcblx0XHRcdFx0XHRcdFx0Y2Muc3Bhd24oXHJcblx0XHRcdFx0XHRcdFx0XHRjYy5mYWRlVG8oMC40LCAwKSxcclxuXHRcdFx0XHRcdFx0XHRcdGNjLm1vdmVUbygwLjQsIHBvc2l0aW9uMV8zKVxyXG5cdFx0XHRcdFx0XHRcdCkpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LmJpbmQodGhpcyksIDMwMDApO1xyXG5cdFx0fS5iaW5kKHRoaXMpLCAxNTAwKTtcclxuXHR9LFxyXG5cdHNldERvdDogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRsZXQgRG90X3ggPSAoTWF0aC5yYW5kb20oKSoodGhpcy5tYXhEb3QueCsxKSk+PjA7XHJcblx0XHRsZXQgRG90X3kgPSAoTWF0aC5yYW5kb20oKSoodGhpcy5tYXhEb3QueSsxKSk+PjA7XHJcblx0XHRsZXQgRG90Q2hlY2sgPSBEb3RfeS1Eb3RfeDtcclxuXHRcdGlmIChEb3RDaGVjayA+IDIyKSB7XHJcblx0XHRcdERvdF95ID0gRG90X3ktRG90X3kvMS40O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kb3RbMF0ubm9kZS5wb3NpdGlvbiA9IGNjLnYyKERvdF94LCBEb3RfeSk7XHJcblxyXG5cdFx0RG90X3ggPSAoTWF0aC5yYW5kb20oKSoodGhpcy5tYXhEb3QueCsxKSk+PjA7XHJcblx0XHREb3RfeSA9IChNYXRoLnJhbmRvbSgpKih0aGlzLm1heERvdC55KzEpKT4+MDtcclxuXHRcdERvdENoZWNrID0gRG90X3ktRG90X3g7XHJcblx0XHRpZiAoRG90Q2hlY2sgPiAyMikge1xyXG5cdFx0XHREb3RfeSA9IERvdF95LURvdF95LzEuNDtcclxuXHRcdH1cclxuXHRcdHRoaXMuZG90WzFdLm5vZGUucG9zaXRpb24gPSBjYy52MihEb3RfeCwgRG90X3kpO1xyXG5cclxuXHRcdERvdF94ID0gKE1hdGgucmFuZG9tKCkqKHRoaXMubWF4RG90LngrMSkpPj4wO1xyXG5cdFx0RG90X3kgPSAoTWF0aC5yYW5kb20oKSoodGhpcy5tYXhEb3QueSsxKSk+PjA7XHJcblx0XHREb3RDaGVjayA9IERvdF95LURvdF94O1xyXG5cdFx0aWYgKERvdENoZWNrID4gMjIpIHtcclxuXHRcdFx0RG90X3kgPSBEb3RfeS1Eb3RfeS8xLjQ7XHJcblx0XHR9XHJcblx0XHR0aGlzLmRvdFsyXS5ub2RlLnBvc2l0aW9uID0gY2MudjIoRG90X3gsIERvdF95KTtcclxuXHJcblx0XHREb3RfeCA9IChNYXRoLnJhbmRvbSgpKih0aGlzLm1heERvdC54KzEpKT4+MDtcclxuXHRcdERvdF95ID0gKE1hdGgucmFuZG9tKCkqKHRoaXMubWF4RG90LnkrMSkpPj4wO1xyXG5cdFx0RG90Q2hlY2sgPSBEb3RfeS1Eb3RfeDtcclxuXHRcdGlmIChEb3RDaGVjayA+IDIyKSB7XHJcblx0XHRcdERvdF95ID0gRG90X3ktRG90X3kvMS40O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kb3RbM10ubm9kZS5wb3NpdGlvbiA9IGNjLnYyKERvdF94LCBEb3RfeSk7XHJcblxyXG5cdFx0dGhpcy5kb3QuZm9yRWFjaChmdW5jdGlvbihkb3QsIGluZGV4KXtcclxuXHRcdFx0bGV0IGNoZWNrID0gZGF0YVtpbmRleF07XHJcblx0XHRcdGlmIChjaGVjaykge1xyXG5cdFx0XHRcdGRvdC5zcHJpdGVGcmFtZSA9IHRoaXMuZG90X3JlZDtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ZG90LnNwcml0ZUZyYW1lID0gdGhpcy5kb3Rfd2hpdGU7XHJcblx0XHRcdH1cclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fSxcclxuXHRwbGF5VGltZTogZnVuY3Rpb24oKXtcclxuXHRcdHZvaWQgMCAhPT0gdGhpcy50aW1lSW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVJbnRlcnZhbCk7XHJcblx0XHR0aGlzLnRpbWVJbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdGlmICh0aGlzLnRpbWVfcmVtYWluID4gMzIpIHtcclxuXHRcdFx0XHR2YXIgdGltZSA9IGhlbHBlci5udW1iZXJQYWQodGhpcy50aW1lX3JlbWFpbi0zMywgMik7XHJcblx0XHRcdFx0dGhpcy50aW1lV2FpdC5zdHJpbmcgPSB0aW1lO1xyXG5cdFx0XHRcdHRoaXMubGFiZWxUaW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5ub2RlV2FpdC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9ZWxzZSBpZih0aGlzLnRpbWVfcmVtYWluID4gMzApe1xyXG5cdFx0XHRcdC8vIFhvYyBEaWFcclxuXHRcdFx0XHR0aGlzLmxhYmVsVGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMubm9kZVdhaXQuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy50aW1lX3JlbWFpbiA9PT0gMzIgJiYgdGhpcy5ub2RlQmF0LnJ1bkFjdGlvbih0aGlzLmFjdGlvbkJhdENsb3NlKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZV9yZW1haW4gPiAtMSkge1xyXG5cdFx0XHRcdFx0dmFyIHRpbWUgPSBoZWxwZXIubnVtYmVyUGFkKHRoaXMudGltZV9yZW1haW4sIDIpO1xyXG5cdFx0XHRcdFx0dGhpcy5sYWJlbFRpbWUubm9kZS5hY3RpdmUgID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMubm9kZVdhaXQuYWN0aXZlICA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5sYWJlbFRpbWUuc3RyaW5nID0gdGltZTtcclxuXHJcblx0XHRcdFx0XHRpZiAodGhpcy50aW1lX3JlbWFpbiA8IDExKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMubGFiZWxUaW1lLm5vZGUuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0dGhpcy5sYWJlbFRpbWUubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fWVsc2UgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVJbnRlcnZhbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy50aW1lX3JlbWFpbi0tO1xyXG5cdFx0fS5iaW5kKHRoaXMpLCAxMDAwKTtcclxuXHR9LFxyXG5cdGNvdW50Q2xpZW50OiBmdW5jdGlvbihjbGllbnQpe1xyXG5cdFx0dGhpcy51c2Vyc19jb3VudC5zdHJpbmcgPSBjbGllbnQ7XHJcblx0fSxcclxuXHR1cGRhdGVEYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHRoaXMudG90YWxfY2hhbi5zdHJpbmcgICA9IGRhdGEucmVkLmNoYW4gICA+IDAgPyBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZC5jaGFuKSAgIDogJyc7XHJcblx0XHR0aGlzLnRvdGFsX2xlLnN0cmluZyAgICAgPSBkYXRhLnJlZC5sZSAgICAgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5yZWQubGUpICAgICA6ICcnO1xyXG5cdFx0dGhpcy50b3RhbF9yZWQzLnN0cmluZyAgID0gZGF0YS5yZWQucmVkMyAgID4gMCA/IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEucmVkLnJlZDMpICAgOiAnJztcclxuXHRcdHRoaXMudG90YWxfcmVkNC5zdHJpbmcgICA9IGRhdGEucmVkLnJlZDQgICA+IDAgPyBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZC5yZWQ0KSAgIDogJyc7XHJcblx0XHR0aGlzLnRvdGFsX3doaXRlMy5zdHJpbmcgPSBkYXRhLnJlZC53aGl0ZTMgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5yZWQud2hpdGUzKSA6ICcnO1xyXG5cdFx0dGhpcy50b3RhbF93aGl0ZTQuc3RyaW5nID0gZGF0YS5yZWQud2hpdGU0ID4gMCA/IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEucmVkLndoaXRlNCkgOiAnJztcclxuXHR9LFxyXG5cdHJlc2V0RGF0YTogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuYm94X2NoYW4uY2hpbGRyZW5bMV0uZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcblx0XHR0aGlzLmJveF9sZS5jaGlsZHJlblsxXS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHRcdHRoaXMuYm94X3doaXRlNC5jaGlsZHJlblsxXS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHRcdHRoaXMuYm94X3doaXRlMy5jaGlsZHJlblsxXS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHRcdHRoaXMuYm94X3JlZDMuY2hpbGRyZW5bMV0uZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcblx0XHR0aGlzLmJveF9yZWQ0LmNoaWxkcmVuWzFdLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG5cclxuXHRcdHRoaXMuYm94X2NoYW4uY2hpbGRyZW5bMF0uYWN0aXZlICAgPSBmYWxzZTtcclxuXHRcdHRoaXMuYm94X2xlLmNoaWxkcmVuWzBdLmFjdGl2ZSAgICAgPSBmYWxzZTtcclxuXHRcdHRoaXMuYm94X3doaXRlNC5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuYm94X3doaXRlMy5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuYm94X3JlZDMuY2hpbGRyZW5bMF0uYWN0aXZlICAgPSBmYWxzZTtcclxuXHRcdHRoaXMuYm94X3JlZDQuY2hpbGRyZW5bMF0uYWN0aXZlICAgPSBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnRvdGFsX2NoYW4uc3RyaW5nICAgPSAnJztcclxuXHRcdHRoaXMudG90YWxfbGUuc3RyaW5nICAgICA9ICcnO1xyXG5cdFx0dGhpcy50b3RhbF9yZWQzLnN0cmluZyAgID0gJyc7XHJcblx0XHR0aGlzLnRvdGFsX3JlZDQuc3RyaW5nICAgPSAnJztcclxuXHRcdHRoaXMudG90YWxfd2hpdGUzLnN0cmluZyA9ICcnO1xyXG5cdFx0dGhpcy50b3RhbF93aGl0ZTQuc3RyaW5nID0gJyc7XHJcblxyXG5cdFx0dGhpcy5tZV9jaGFuLnN0cmluZyAgID0gJyc7XHJcblx0XHR0aGlzLm1lX2xlLnN0cmluZyAgICAgPSAnJztcclxuXHRcdHRoaXMubWVfcmVkMy5zdHJpbmcgICA9ICcnO1xyXG5cdFx0dGhpcy5tZV9yZWQ0LnN0cmluZyAgID0gJyc7XHJcblx0XHR0aGlzLm1lX3doaXRlMy5zdHJpbmcgPSAnJztcclxuXHRcdHRoaXMubWVfd2hpdGU0LnN0cmluZyA9ICcnO1xyXG5cclxuXHRcdHRoaXMudXNlcnMucmVkLmNoYW4gICA9IDA7XHJcblx0XHR0aGlzLnVzZXJzLnJlZC5sZSAgICAgPSAwO1xyXG5cdFx0dGhpcy51c2Vycy5yZWQucmVkMyAgID0gMDtcclxuXHRcdHRoaXMudXNlcnMucmVkLnJlZDQgICA9IDA7XHJcblx0XHR0aGlzLnVzZXJzLnJlZC53aGl0ZTMgPSAwO1xyXG5cdFx0dGhpcy51c2Vycy5yZWQud2hpdGU0ID0gMDtcclxuXHJcblx0XHR0aGlzLmNsaWVudHMucmVkLmNoYW4gICA9IDA7XHJcblx0XHR0aGlzLmNsaWVudHMucmVkLmxlICAgICA9IDA7XHJcblx0XHR0aGlzLmNsaWVudHMucmVkLnJlZDMgICA9IDA7XHJcblx0XHR0aGlzLmNsaWVudHMucmVkLnJlZDQgICA9IDA7XHJcblx0XHR0aGlzLmNsaWVudHMucmVkLndoaXRlMyA9IDA7XHJcblx0XHR0aGlzLmNsaWVudHMucmVkLndoaXRlNCA9IDA7XHJcblx0fSxcclxuXHRzZXRMb2dzOiBmdW5jdGlvbigpe1xyXG5cdFx0bGV0IHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5sb2dNYWluLmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcblx0XHRcdGxldCBkYXRhID0gc2VsZi5sb2dzW2luZGV4XTtcclxuXHRcdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0XHRvYmoubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xyXG5cdFx0XHRcdGxldCBnYW1lQ2hhbiA9IDA7ICAgICAvLyBMw6AgY2jhurVuXHJcblx0XHRcdFx0ZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGtxSCl7XHJcblx0XHRcdFx0XHRpZiAoa3FIKSB7XHJcblx0XHRcdFx0XHRcdGdhbWVDaGFuKys7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aWYgKCEoZ2FtZUNoYW4lMikpIHtcclxuXHRcdFx0XHRcdG9iai5zcHJpdGVGcmFtZSA9IHNlbGYuZG90X3doaXRlO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0b2JqLnNwcml0ZUZyYW1lID0gc2VsZi5kb3RfcmVkO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0b2JqLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCB0bXBfRFMgPSAtMTtcclxuXHRcdGxldCB0bXBfYXJyQSA9IFtdO1xyXG5cdFx0bGV0IHRtcF9hcnJCID0gW107XHJcblx0XHRsZXQgY19jaGFuID0gMDtcclxuXHRcdGxldCBjX2xlID0gMDtcclxuXHJcblx0XHRsZXQgbmV3QXJyID0gc2VsZi5sb2dzLnNsaWNlKCk7XHJcblx0XHRuZXdBcnIucmV2ZXJzZSgpO1xyXG5cdFx0bmV3QXJyLmZvckVhY2goZnVuY3Rpb24obmV3RFMpe1xyXG5cdFx0XHRsZXQgZGF0YSA9IE9iamVjdC52YWx1ZXMobmV3RFMpO1xyXG5cdFx0XHRsZXQgZ2FtZUNoYW4gPSAwO1xyXG5cdFx0XHRkYXRhLmZvckVhY2goZnVuY3Rpb24oa3FIKXtcclxuXHRcdFx0XHRpZiAoa3FIKSB7XHJcblx0XHRcdFx0XHRnYW1lQ2hhbisrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRsZXQgdHlwZSAgPSAhKGdhbWVDaGFuJTIpO1xyXG5cdFx0XHRpZiAodG1wX0RTID09PSAtMSkge1xyXG5cdFx0XHRcdHRtcF9EUyA9IHR5cGU7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHR5cGUgIT09IHRtcF9EUyB8fCB0bXBfYXJyQi5sZW5ndGggPiAzKSB7XHJcblx0XHRcdFx0dG1wX0RTID0gdHlwZTtcclxuXHRcdFx0XHQvL3RtcF9hcnJCLnJldmVyc2UoKTtcclxuXHRcdFx0XHR0bXBfYXJyQS5wdXNoKHRtcF9hcnJCKTtcclxuXHRcdFx0XHR0bXBfYXJyQiA9IFtdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0eXBlID09PSB0bXBfRFMpIHtcclxuXHRcdFx0XHR0bXBfYXJyQi5wdXNoKGdhbWVDaGFuKVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL3RtcF9hcnJCLnJldmVyc2UoKTtcclxuXHRcdHRtcF9hcnJBLnB1c2godG1wX2FyckIpO1xyXG5cdFx0dG1wX2FyckEucmV2ZXJzZSgpO1xyXG5cdFx0dG1wX2FyckEgPSB0bXBfYXJyQS5zbGljZSgwLCAxMik7XHJcblxyXG5cdFx0dGhpcy5sb2dfdG9wLmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcblx0XHRcdGxldCBkYXRhID0gdG1wX2FyckFbaW5kZXhdO1xyXG5cdFx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRcdG9iai5jZWxsLmFjdGl2ZSA9IHRydWU7XHJcblxyXG5cdFx0XHRcdG9iai5kYXRhLmZvckVhY2goZnVuY3Rpb24oY2VsbCwgail7XHJcblx0XHRcdFx0XHRsZXQgakQgPSBkYXRhW2pdO1xyXG5cdFx0XHRcdFx0aWYgKHZvaWQgMCAhPT0gakQpIHtcclxuXHRcdFx0XHRcdFx0Y2VsbC5jLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGNlbGwuYy5zcHJpdGVGcmFtZSA9ICEoakQlMikgPyAoakQgPT09IDQgPyBzZWxmLmRvdF9yZWQgOiBzZWxmLmRvdF93aGl0ZSkgOiBzZWxmLmRvdF9yZWQ7XHJcblx0XHRcdFx0XHRcdGNlbGwudC5zdHJpbmcgPSBqRCA9PT0gMCA/IDQgOiBqRDtcclxuXHJcblx0XHRcdFx0XHRcdGlmICghKGpEJTIpKSB7XHJcblx0XHRcdFx0XHRcdFx0Y19jaGFuKys7XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGNfbGUrKztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdGNlbGwuYy5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0b2JqLmNlbGwuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMubG9nX2NoYW4uc3RyaW5nID0gY19jaGFuO1xyXG5cdFx0dGhpcy5sb2dfbGUuc3RyaW5nICAgPSBjX2xlO1xyXG5cdH0sXHJcblx0Y2hhbmdlckJldDogZnVuY3Rpb24oZXZlbnQsIGJldCl7XHJcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0dGhpcy5jdW9jID0gdGFyZ2V0Lm5hbWU7XHJcblx0XHR0aGlzLmJldC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdGlmIChvYmogPT0gdGFyZ2V0KSB7XHJcblx0XHRcdFx0b2JqLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdG9iai5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdG9iai5wYXVzZVN5c3RlbUV2ZW50cygpO1xyXG5cdFx0XHRcdG9iai5vcGFjaXR5ID0gMjU1O1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRvYmouY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRvYmouY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0b2JqLnJlc3VtZVN5c3RlbUV2ZW50cygpO1xyXG5cdFx0XHRcdG9iai5vcGFjaXR5ID0gOTk7XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fSxcclxuXHRvbkN1b2M6IGZ1bmN0aW9uKGV2ZW50LCBib3gpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtnOnt4b2N4b2M6e2N1b2M6e2N1b2M6dGhpcy5jdW9jLCBib3g6Ym94fX19fSk7XHJcblx0fSxcclxuXHRhZGROb3RpY2U6ZnVuY3Rpb24odGV4dCl7XHJcblx0XHR2YXIgbm90aWNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJOb3RpY2UpXHJcblx0XHR2YXIgbm90aWNlQ29tcG9uZW50ID0gbm90aWNlLmdldENvbXBvbmVudCgnbWluaV93YXJuaW5nJylcclxuXHRcdG5vdGljZUNvbXBvbmVudC50ZXh0LnN0cmluZyA9IHRleHQ7XHJcblx0XHR0aGlzLm1pbmlOb3RpY2UuYWRkQ2hpbGQobm90aWNlKTtcclxuXHR9LFxyXG5cdGNsaWVudHNDaGlwOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGxldCBub2RlQm94ID0gbnVsbDtcclxuXHRcdGxldCBtYXggICAgID0gdGhpcy5tYXhCb3gxXzM7XHJcblxyXG5cdFx0c3dpdGNoKGRhdGEuYm94KSB7XHJcblx0XHRcdGNhc2UgJ2NoYW4nOlxyXG5cdFx0XHRcdG5vZGVCb3ggPSB0aGlzLmJveF9jaGFuO1xyXG5cdFx0XHRcdG1heCA9IHRoaXMubWF4Qm94MV8xO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2xlJzpcclxuXHRcdFx0XHRub2RlQm94ID0gdGhpcy5ib3hfbGU7XHJcblx0XHRcdFx0bWF4ID0gdGhpcy5tYXhCb3gxXzE7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAncmVkMyc6XHJcblx0XHRcdFx0bm9kZUJveCA9IHRoaXMuYm94X3JlZDM7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAncmVkNCc6XHJcblx0XHRcdFx0bm9kZUJveCA9IHRoaXMuYm94X3JlZDQ7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnd2hpdGUzJzpcclxuXHRcdFx0XHRub2RlQm94ID0gdGhpcy5ib3hfd2hpdGUzO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3doaXRlNCc6XHJcblx0XHRcdFx0bm9kZUJveCA9IHRoaXMuYm94X3doaXRlNDtcclxuXHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHBvc2l0aW9uID0gdGhpcy51c2Vyc19iZy5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMudXNlcnNfYmcucG9zaXRpb24pO1xyXG5cdFx0cG9zaXRpb24gPSBub2RlQm94LmNoaWxkcmVuWzFdLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uKTtcclxuXHJcblx0XHRsZXQgbmV3TiA9IG5ldyBjYy5Ob2RlO1xyXG5cdFx0bmV3TiA9IG5ld04uYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblx0XHRuZXdOLnNwcml0ZUZyYW1lID0gdGhpc1snY2hpcF8nK2RhdGEuY3VvY107XHJcblx0XHRuZXdOLm5vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHRcdG5ld04ubm9kZS5zY2FsZSAgICA9IDAuNjc7XHJcblxyXG5cdFx0bGV0IHggPSAoTWF0aC5yYW5kb20oKSoobWF4LngrMSkpPj4wO1xyXG5cdFx0bGV0IHkgPSAoTWF0aC5yYW5kb20oKSoobWF4LnkrMSkpPj4wO1xyXG5cclxuXHRcdG5vZGVCb3guY2hpbGRyZW5bMV0uYWRkQ2hpbGQobmV3Ti5ub2RlKTtcclxuXHJcblx0XHRsZXQgY29weSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXVkaW9TaW5nbGVDaGlwLm5vZGUpO1xyXG5cdFx0bmV3Ti5ub2RlLmFkZENoaWxkKGNvcHkpO1xyXG5cdFx0Y29weSA9IGNvcHkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuXHJcblx0XHRuZXdOLm5vZGUucnVuQWN0aW9uKFxyXG5cdFx0XHRjYy5zZXF1ZW5jZShcclxuXHRcdFx0XHRjYy5zcGF3bihcclxuXHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjMpLFxyXG5cdFx0XHRcdFx0Y2MubW92ZVRvKDAuNCwgY2MudjIoeCwgeSkpXHJcblx0XHRcdFx0KSxcclxuXHRcdFx0XHRjYy5jYWxsRnVuYyhmdW5jdGlvbigpe3RoaXMucGxheSgpfSwgY29weSksXHJcblx0XHRcdFx0Y2Muc2VxdWVuY2UoXHJcblx0XHRcdFx0XHRjYy5tb3ZlVG8oMC4xLCBjYy52Mih4LCB5LTYpKSxcclxuXHRcdFx0XHRcdGNjLm1vdmVUbygwLjEsIGNjLnYyKHgsIHkpKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0KSk7XHJcblx0fSxcclxuXHRtZUNoaXA6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0bGV0IG5vZGVCZXQgPSBudWxsO1xyXG5cdFx0bGV0IG5vZGVCb3ggPSBudWxsO1xyXG5cdFx0bGV0IG1heCAgICAgPSB0aGlzLm1heEJveDFfMztcclxuXHJcblx0XHR0aGlzLmJldC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGJldCl7XHJcblx0XHRcdGlmIChiZXQubmFtZSA9PSBkYXRhLmN1b2MpIHtcclxuXHRcdFx0XHRub2RlQmV0ID0gYmV0O1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRzd2l0Y2goZGF0YS5ib3gpIHtcclxuXHRcdFx0Y2FzZSAnY2hhbic6XHJcblx0XHRcdFx0bm9kZUJveCA9IHRoaXMuYm94X2NoYW47XHJcblx0XHRcdFx0bWF4ID0gdGhpcy5tYXhCb3gxXzE7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnbGUnOlxyXG5cdFx0XHRcdG5vZGVCb3ggPSB0aGlzLmJveF9sZTtcclxuXHRcdFx0XHRtYXggPSB0aGlzLm1heEJveDFfMTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdyZWQzJzpcclxuXHRcdFx0XHRub2RlQm94ID0gdGhpcy5ib3hfcmVkMztcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdyZWQ0JzpcclxuXHRcdFx0XHRub2RlQm94ID0gdGhpcy5ib3hfcmVkNDtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICd3aGl0ZTMnOlxyXG5cdFx0XHRcdG5vZGVCb3ggPSB0aGlzLmJveF93aGl0ZTM7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnd2hpdGU0JzpcclxuXHRcdFx0XHRub2RlQm94ID0gdGhpcy5ib3hfd2hpdGU0O1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcG9zaXRpb24gPSBub2RlQmV0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIobm9kZUJldC5wb3NpdGlvbik7XHJcblx0XHRwb3NpdGlvbiA9IG5vZGVCb3guY2hpbGRyZW5bMV0uY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG5cclxuXHRcdGxldCBuZXdOID0gbmV3IGNjLk5vZGU7XHJcblx0XHRuZXdOID0gbmV3Ti5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHRcdG5ld04uc3ByaXRlRnJhbWUgPSB0aGlzWydjaGlwXycrZGF0YS5jdW9jXTtcclxuXHRcdG5ld04ubm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cclxuXHRcdGxldCB4ID0gKE1hdGgucmFuZG9tKCkqKG1heC54KzEpKT4+MDtcclxuXHRcdGxldCB5ID0gKE1hdGgucmFuZG9tKCkqKG1heC55KzEpKT4+MDtcclxuXHJcblx0XHQvLyB0aGlzLmF1ZGlvU2luZ2xlQ2hpcC5ub2RlXHJcblx0XHRub2RlQm94LmNoaWxkcmVuWzFdLmFkZENoaWxkKG5ld04ubm9kZSk7XHJcblx0XHRsZXQgY29weSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXVkaW9TaW5nbGVDaGlwLm5vZGUpO1xyXG5cdFx0bmV3Ti5ub2RlLmFkZENoaWxkKGNvcHkpO1xyXG5cdFx0Y29weSA9IGNvcHkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuXHRcdG5ld04ubm9kZS5ydW5BY3Rpb24oXHJcblx0XHRcdGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdGNjLnNwYXduKFxyXG5cdFx0XHRcdFx0Y2Muc2NhbGVUbygwLjMsIDAuMyksXHJcblx0XHRcdFx0XHRjYy5tb3ZlVG8oMC4zLCBjYy52Mih4LCB5KSlcclxuXHRcdFx0XHQpLFxyXG5cdFx0XHRcdGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7dGhpcy5wbGF5KCl9LCBjb3B5KSxcclxuXHRcdFx0XHRjYy5zZXF1ZW5jZShcclxuXHRcdFx0XHRcdGNjLm1vdmVUbygwLjEsIGNjLnYyKHgsIHkrNikpLFxyXG5cdFx0XHRcdFx0Y2MubW92ZVRvKDAuMSwgY2MudjIoeCwgeSkpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpKTtcclxuXHR9LFxyXG5cdHVwZGF0ZU1lOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdCEhZGF0YS5yZWQgJiYgdGhpcy51cGRhdGVNZVJlZChkYXRhLnJlZCk7XHJcblx0fSxcclxuXHR1cGRhdGVNZVJlZDogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRpZiAoZGF0YS5jaGFuID4gMCkge1xyXG5cdFx0XHR0aGlzLnVzZXJzLnJlZC5jaGFuID0gZGF0YS5jaGFuO1xyXG5cdFx0XHR0aGlzLm1lX2NoYW4uc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5jaGFuKTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLmxlID4gMCkge1xyXG5cdFx0XHR0aGlzLnVzZXJzLnJlZC5sZSA9IGRhdGEubGU7XHJcblx0XHRcdHRoaXMubWVfbGUuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5sZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5yZWQzID4gMCkge1xyXG5cdFx0XHR0aGlzLnVzZXJzLnJlZC5yZWQzID0gZGF0YS5yZWQzO1xyXG5cdFx0XHR0aGlzLm1lX3JlZDMuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5yZWQzKTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLnJlZDQgPiAwKSB7XHJcblx0XHRcdHRoaXMudXNlcnMucmVkLnJlZDQgPSBkYXRhLnJlZDQ7XHJcblx0XHRcdHRoaXMubWVfcmVkNC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZDQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEud2hpdGUzID4gMCkge1xyXG5cdFx0XHR0aGlzLnVzZXJzLnJlZC53aGl0ZTMgPSBkYXRhLndoaXRlMztcclxuXHRcdFx0dGhpcy5tZV93aGl0ZTMuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS53aGl0ZTMpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEud2hpdGU0ID4gMCkge1xyXG5cdFx0XHR0aGlzLnVzZXJzLnJlZC53aGl0ZTQgPSBkYXRhLndoaXRlNDtcclxuXHRcdFx0dGhpcy5tZV93aGl0ZTQuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS53aGl0ZTQpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dXBkYXRlQ2xpZW50OiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdCEhZGF0YS5yZWQgJiYgdGhpcy51cGRhdGVDbGllbnRSZWQoZGF0YS5yZWQpO1xyXG5cdH0sXHJcblx0dXBkYXRlQ2xpZW50UmVkOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmIChkYXRhLmNoYW4gPiAwKSB7XHJcblx0XHRcdHRoaXMuY2xpZW50cy5yZWQuY2hhbiA9IGRhdGEuY2hhbjtcclxuXHRcdFx0dGhpcy50b3RhbF9jaGFuLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEuY2hhbik7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5sZSA+IDApIHtcclxuXHRcdFx0dGhpcy5jbGllbnRzLnJlZC5sZSA9IGRhdGEubGU7XHJcblx0XHRcdHRoaXMudG90YWxfbGUuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5sZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5yZWQzID4gMCkge1xyXG5cdFx0XHR0aGlzLmNsaWVudHMucmVkLnJlZDMgPSBkYXRhLnJlZDM7XHJcblx0XHRcdHRoaXMudG90YWxfcmVkMy5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZDMpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEucmVkNCA+IDApIHtcclxuXHRcdFx0dGhpcy5jbGllbnRzLnJlZC5yZWQ0ID0gZGF0YS5yZWQ0O1xyXG5cdFx0XHR0aGlzLnRvdGFsX3JlZDQuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5yZWQ0KTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLndoaXRlMyA+IDApIHtcclxuXHRcdFx0dGhpcy5jbGllbnRzLnJlZC53aGl0ZTMgPSBkYXRhLndoaXRlMztcclxuXHRcdFx0dGhpcy50b3RhbF93aGl0ZTMuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS53aGl0ZTMpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEud2hpdGU0ID4gMCkge1xyXG5cdFx0XHR0aGlzLmNsaWVudHMucmVkLndoaXRlNCA9IGRhdGEud2hpdGU0O1xyXG5cdFx0XHR0aGlzLnRvdGFsX3doaXRlNC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLndoaXRlNCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHR1cGRhdGVNZUNvaW50OiBmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLm1lX2NoYW4uc3RyaW5nICAgPSB0aGlzLnVzZXJzLnJlZC5jaGFuICAgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy51c2Vycy5yZWQuY2hhbikgICA6ICcnO1xyXG5cdFx0XHR0aGlzLm1lX2xlLnN0cmluZyAgICAgPSB0aGlzLnVzZXJzLnJlZC5sZSAgICAgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy51c2Vycy5yZWQubGUpICAgICA6ICcnO1xyXG5cdFx0XHR0aGlzLm1lX3JlZDMuc3RyaW5nICAgPSB0aGlzLnVzZXJzLnJlZC5yZWQzICAgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy51c2Vycy5yZWQucmVkMykgICA6ICcnO1xyXG5cdFx0XHR0aGlzLm1lX3JlZDQuc3RyaW5nICAgPSB0aGlzLnVzZXJzLnJlZC5yZWQ0ICAgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy51c2Vycy5yZWQucmVkNCkgICA6ICcnO1xyXG5cdFx0XHR0aGlzLm1lX3doaXRlMy5zdHJpbmcgPSB0aGlzLnVzZXJzLnJlZC53aGl0ZTMgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy51c2Vycy5yZWQud2hpdGUzKSA6ICcnO1xyXG5cdFx0XHR0aGlzLm1lX3doaXRlNC5zdHJpbmcgPSB0aGlzLnVzZXJzLnJlZC53aGl0ZTQgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy51c2Vycy5yZWQud2hpdGU0KSA6ICcnO1xyXG5cclxuXHRcdFx0dGhpcy50b3RhbF9jaGFuLnN0cmluZyAgID0gdGhpcy5jbGllbnRzLnJlZC5jaGFuICAgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5jbGllbnRzLnJlZC5jaGFuKSAgIDogJyc7XHJcblx0XHRcdHRoaXMudG90YWxfbGUuc3RyaW5nICAgICA9IHRoaXMuY2xpZW50cy5yZWQubGUgICAgID4gMCA/IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuY2xpZW50cy5yZWQubGUpICAgICA6ICcnO1xyXG5cdFx0XHR0aGlzLnRvdGFsX3JlZDMuc3RyaW5nICAgPSB0aGlzLmNsaWVudHMucmVkLnJlZDMgICA+IDAgPyBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLmNsaWVudHMucmVkLnJlZDMpICAgOiAnJztcclxuXHRcdFx0dGhpcy50b3RhbF9yZWQ0LnN0cmluZyAgID0gdGhpcy5jbGllbnRzLnJlZC5yZWQ0ICAgPiAwID8gaGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5jbGllbnRzLnJlZC5yZWQ0KSAgIDogJyc7XHJcblx0XHRcdHRoaXMudG90YWxfd2hpdGUzLnN0cmluZyA9IHRoaXMuY2xpZW50cy5yZWQud2hpdGUzID4gMCA/IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuY2xpZW50cy5yZWQud2hpdGUzKSA6ICcnO1xyXG5cdFx0XHR0aGlzLnRvdGFsX3doaXRlNC5zdHJpbmcgPSB0aGlzLmNsaWVudHMucmVkLndoaXRlNCA+IDAgPyBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLmNsaWVudHMucmVkLndoaXRlNCkgOiAnJztcclxuXHR9LFxyXG5cdHN0YXR1czogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLnJlZ1RpbWVPdXQzID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0dmFyIHRlbXAgPSBuZXcgY2MuTm9kZTtcclxuXHRcdFx0dGVtcC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cdFx0XHR0ZW1wID0gdGVtcC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cdFx0XHR0ZW1wLnN0cmluZyA9IChkYXRhLndpbiA/ICcrJyA6ICctJykgKyBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLmJldCk7XHJcblx0XHRcdHRlbXAuZm9udCA9IGRhdGEud2luID8gY2MuUmVkVC51dGlsLmZvbnRDb25nIDogY2MuUmVkVC51dGlsLmZvbnRUcnU7XHJcblx0XHRcdHRlbXAubGluZUhlaWdodCA9IDEzMDtcclxuXHRcdFx0dGVtcC5mb250U2l6ZSAgID0gMjU7XHJcblx0XHRcdHRlbXAubm9kZS5wb3NpdGlvbiA9IGNjLnYyKDAsIDkwKTtcclxuXHRcdFx0dGhpcy5taW5pTm90aWNlLmFkZENoaWxkKHRlbXAubm9kZSk7XHJcblx0XHRcdHRlbXAubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDQsIGNjLnYyKDAsIDIwMCkpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe3RoaXMubm9kZS5kZXN0cm95KCl9LCB0ZW1wKSkpO1xyXG5cdFx0XHRkYXRhLndpbiAmJiBjYy5SZWRULnNlbmQoe3VzZXI6e3VwZGF0ZUNvaW50OiB0cnVlfX0pO1xyXG5cdFx0XHRpZih2b2lkIDAgIT09IGRhdGEudGh1b25nICYmIGRhdGEudGh1b25nID4gMCl7XHJcblx0XHRcdFx0dmFyIHRodW9uZyA9IG5ldyBjYy5Ob2RlO1xyXG5cdFx0XHRcdHRodW9uZy5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cdFx0XHRcdHRodW9uZyA9IHRodW9uZy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cdFx0XHRcdHRodW9uZy5zdHJpbmcgPSAnKycgKyBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnRodW9uZyk7XHJcblx0XHRcdFx0dGh1b25nLmZvbnQgPSBjYy5SZWRULnV0aWwuZm9udEVmZmVjdDtcclxuXHRcdFx0XHR0aHVvbmcubGluZUhlaWdodCA9IDkwO1xyXG5cdFx0XHRcdHRodW9uZy5mb250U2l6ZSAgID0gMTQ7XHJcblx0XHRcdFx0dGhpcy5taW5pTm90aWNlLmFkZENoaWxkKHRodW9uZy5ub2RlKTtcclxuXHRcdFx0XHR0aHVvbmcubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDQsIGNjLnYyKDAsIDEwMCkpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe3RoaXMubm9kZS5kZXN0cm95KCl9LCB0aHVvbmcpKSlcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0LmJpbmQodGhpcyksIDRlMylcclxuXHR9LFxyXG59KTtcclxuIl19