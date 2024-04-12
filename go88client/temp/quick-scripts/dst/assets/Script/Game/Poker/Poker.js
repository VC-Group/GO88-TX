
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Poker/Poker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33055XFpShOdKT1xWNnrtNQ', 'Poker');
// Script/Game/Poker/Poker.js

'use strict';

var helper = require('Helper'),
    notice = require('Notice'),
    module_player = require('Poker_Player');
var player_nap = require('PokerNapGame');

cc.Class({
	extends: cc.Component,

	properties: {
		player_nap: player_nap,
		font1: cc.BitmapFont,
		font2: cc.BitmapFont,
		nodeNotice: cc.Node,
		prefabNotice: cc.Prefab,
		loading: cc.Node,
		redhat: cc.Node,
		bo_bai: cc.Node,
		nodeout: cc.Node,
		notice: notice,
		player: {
			default: [],
			type: module_player
		},
		labelRoom: cc.Label,
		mainBet: cc.Label,
		labelTimeStart: cc.Label,
		roomCard: cc.Node,
		prefabCard: cc.Node,

		botton: cc.Node,
		btm_bo: cc.Node,
		btm_xem: cc.Node,
		btm_theo: cc.Node,
		btm_to: cc.Node,
		btm_all: cc.Node,

		nodePanelCardMain: cc.Node,
		nodeBTNPane: cc.Node,

		nodeTo: cc.Node,

		spriteAll: cc.SpriteFrame,
		spriteHuy: cc.SpriteFrame,
		spriteTheo: cc.SpriteFrame,
		spriteXem: cc.SpriteFrame,
		spriteCuoc: cc.SpriteFrame,
		spriteWin: cc.SpriteFrame,
		spriteMeWin: cc.SpriteFrame,
		spriteLost: cc.SpriteFrame,
		spriteHoa: cc.SpriteFrame,

		titleCard: {
			default: [],
			type: cc.SpriteFrame
		},

		panel: false,
		dataOn: true
	},
	onLoad: function onLoad() {
		cc.RedT.inGame = this;
		cc.RedT.MiniPanel.node.parent = this.redhat;

		this.game_player = null;

		cc.RedT.audio.bg.pause();
		//cc.RedT.audio.bg = cc.RedT.audio.bgSlot1;

		//this.dialog.init();
		this.player.forEach(function (player) {
			player.init();
		});

		this.redTcard = this.nodePanelCardMain.children.map(function (item) {
			return item.getComponent(cc.Sprite);
		});

		cc.RedT.send({ scene: 'poker', g: { poker: { ingame: true } } });
		/**
  if(cc.RedT.isSoundBackground()){
  	this.playMusic();
  }
  */
		this.timeStop = 0;

		if (cc.RedT.user.rights == 1) {
			this.nodeBTNPane.active = true;
		}
	},

	onData: function onData(data) {
		if (!!data.mini) {
			cc.RedT.MiniPanel.onData(data.mini);
		}
		if (!!data.TopHu) {
			cc.RedT.MiniPanel.TopHu.onData(data.TopHu);
		}
		if (!!data.taixiu) {
			cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(data.taixiu);
		}
		if (void 0 !== data.vipp) {
			cc.RedT.MiniPanel.Dialog.VipPoint.onData(data.vipp);
		}
		if (void 0 !== data.user) {
			cc.RedT.userData(data.user);
		}
		if (this.dataOn) {
			if (!!data.viewCard) {
				this.viewCard(data.viewCard);
			}
			if (!!data.mainCard) {
				this.viewMainCard(data.mainCard);
			}
			if (!!data.meMap) {
				this.meMap = data.meMap;
			}
			if (!!data.infoGhe) {
				// thông tin các ghế
				this.infoGhe(data.infoGhe);
			}
			if (!!data.infoRoom) {
				// thông tin phòng
				this.infoRoom(data.infoRoom);
			}
			if (!!data.ingame) {
				// có người vào phòng
				this.ingame(data.ingame);
			}
			if (!!data.outgame) {
				// có người ra khỏi phòng
				this.outgame(data.outgame);
			}
			if (!!data.game) {
				this.game(data.game);
			}
			if (!!data.kick) {
				this.kick();
			}
			if (void 0 !== data.notice) {
				this.notice.show(data.notice);
			}
			if (void 0 !== data.load) {
				this.loading.active = data.load;
			}
			if (void 0 !== data.nap) {
				this.player_nap.node.active = data.nap;
			}
		}
	},
	gameStart: function gameStart(data) {
		data.forEach(function (player) {
			this.player[player.ghe].setInfo(player.data);
		}.bind(this));
	},
	gamePlayer: function gamePlayer(data) {
		var player = this.player[data.ghe];
		if (data.data !== void 0) {
			player.setInfo(data.data);
		}
		if (data.info !== void 0) {
			player.infoGame(data.info);
		}
	},
	resetGame: function resetGame() {
		this.timeStop = 0;
		//if (!!this.mainBet) {
		this.mainBet.string = '';
		this.roomCard.destroyAllChildren();
		this.nodeNotice.destroyAllChildren();
		Object.values(this.player).forEach(function (player) {
			player.resetGame();
		});
		//}
	},
	gameInfo: function gameInfo(data) {
		data.data.forEach(function (player) {
			var obj = this.player[player.ghe];
			if (player.data !== void 0) {
				obj.setInfo(player.data, !!data.win);
			}
			if (player.info !== void 0) {
				obj.infoGame(player.info);
			}
		}.bind(this));
		if (!!data.win) {
			this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function () {
				Object.values(this.player).forEach(function (player) {
					player.item.forEach(function (item) {
						item.node.color = item.node.color.fromHEX('999999');
					});
				});
				this.roomCard.children.forEach(function (item) {
					item.children[0].color = item.children[0].color.fromHEX('999999');
					data.win.bo.forEach(function (bo) {
						if (item.card.card == bo.card && item.card.type == bo.type) {
							item.children[0].color = item.children[0].color.fromHEX('FFFFFF');
						}
					});
				});
				var player = this.player[data.win.ghe];
				player.item.forEach(function (item) {
					if (!!item.bai) {
						data.win.bo.forEach(function (bo) {
							if (item.bai.card == bo.card && item.bai.type == bo.type) {
								item.node.color = item.node.color.fromHEX('FFFFFF');
							}
						});
					}
				});
				if (data.win.code == 2) {
					// Đôi
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[0];
				} else if (data.win.code == 3) {
					// 2 đôi (Thú)
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[1];
				} else if (data.win.code == 4) {
					// Sám
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[2];
				} else if (data.win.code == 5) {
					// Sảnh
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[3];
				} else if (data.win.code == 6) {
					// Thùng
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[4];
				} else if (data.win.code == 7) {
					// Cù Lũ
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[5];
				} else if (data.win.code == 8) {
					// Tứ Quý
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[6];
				} else if (data.win.code == 9) {
					// Sảnh Thùng
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[7];
				} else if (data.win.code == 10) {
					// Thùng Phá Sảnh
					player.titleCard.node.active = true;
					player.titleCard.spriteFrame = this.titleCard[8];
				}
			}, this)));
		}
	},
	gameStop: function gameStop() {
		this.offSelect();
		this.labelTimeStart.string = '';
		this.labelTimeStart.node.active = false;
		clearInterval(this.regTime1);
		this.timeStop = new Date().getTime();
	},
	offSelect: function offSelect() {
		if (!!this.game_player) {
			this.game_player.isUpdate = false;
			this.game_player.progressTime = 0;
			this.game_player.Progress.progress = 0;
		}
		this.botton.active = false;
		this.nodeTo.active = false;
	},
	game: function game(data) {
		if (!!data.start) {
			this.gameStart(data.start);
		}
		if (!!data.stop) {
			this.gameStop();
		}
		if (!!data.finish) {
			this.gameStop();
		}
		if (!!data.chia_bai) {
			this.ChiaBai(data.chia_bai);
		}
		if (!!data.turn) {
			this.LuotChoi(data.turn);
		}
		if (!!data.info) {
			this.gameInfo(data.info);
		}
		if (!!data.player) {
			this.gamePlayer(data.player);
		}
		if (!!data.offD) {}
		if (data.offSelect !== void 0) {
			this.offSelect();
		}
		if (!!data.card) {
			// thẻ bài trên bàn
			this.mainCard(data.card);
		}
	},
	LuotChoi: function LuotChoi(data) {
		var player = this.player[data.ghe];
		if (!!this.game_player) {
			this.game_player.isUpdate = false;
			this.game_player.progressTime = 0;
			this.game_player.Progress.progress = 0;
		}
		this.game_player = player;
		player.startProgress(data.progress);
		if (data.select !== void 0) {
			this.botton.active = true;
			if (data.select.xem) {
				this.btm_xem.active = true;
			} else {
				this.btm_xem.active = false;
			}
			if (data.select.theo) {
				this.btm_theo.active = true;
			} else {
				this.btm_theo.active = false;
			}
			if (data.select.to) {
				this.btm_to.active = true;
			} else {
				this.btm_to.active = false;
			}
			if (data.select.all) {
				this.btm_all.active = true;
			} else {
				this.btm_all.active = false;
			}
		} else {
			this.botton.active = false;
			this.nodeTo.active = false;
		}
	},
	mainCard: function mainCard(data) {
		var time = 0.1;
		var position = this.bo_bai.parent.convertToWorldSpaceAR(this.bo_bai.position);
		data.forEach(function (card) {
			var node = cc.instantiate(this.prefabCard);
			this.roomCard.addChild(node);
			var component = node.children[0].getComponent(cc.Sprite);
			component.node.runAction(cc.sequence(cc.delayTime(time), cc.callFunc(function () {
				component.node.position = component.node.parent.convertToNodeSpaceAR(position);
				component.node.scaleX = this.bo_bai.width / component.node.width;
				component.node.scaleY = this.bo_bai.height / component.node.height;
				component.spriteFrame = cc.RedT.util.card.cardB1;
			}, this), cc.spawn(cc.moveTo(0.1, cc.v2(0, 0)), cc.scaleTo(0.1, 1)), cc.delayTime(0.1), cc.scaleTo(0.1, 0, 1), cc.callFunc(function () {
				component.spriteFrame = cc.RedT.util.card.getCard(card.card, card.type);
				node.card = card;
				component = null;
				card = null;
				node = null;
			}, this), cc.scaleTo(0.1, 1, 1)));
			time += 0.1;
		}.bind(this));
	},
	ChiaBai: function ChiaBai(data) {
		var _this = this;

		var time = 0;

		var _loop = function _loop(card) {
			data.forEach(function (bai) {
				this.player[bai.id].ChiaBai(bai, card, time);
				time += 0.05;
			}.bind(_this));
		};

		for (var card = 0; card < 2; card++) {
			_loop(card);
		}
	},
	infoGhe: function infoGhe(info) {
		var player = {};
		var newGhe = [];
		if (this.meMap != 1) {
			var map = this.meMap - 1;
			newGhe = newGhe.concat(info.slice(map), info.slice(0, map));
		} else {
			newGhe = info;
		}
		newGhe.forEach(function (obj, index) {
			var item = this.player[index];
			item.map = obj.ghe;
			player[obj.ghe] = item;
			item.setInfo(obj.data);
			return void 0;
		}.bind(this));
		this.player = player;
		player = null;
		newGhe = null;
	},
	infoRoom: function infoRoom(data) {
		if (data.game !== void 0) {
			this.labelRoom.string = helper.numberWithCommas(data.game);
			this.player_nap.init(data.game);
		}
		if (data.bet !== void 0) {
			this.mainBet.string = helper.numberWithCommas(data.bet);
		}
		if (data.isStop !== void 0) {
			this.labelTimeStart.node.active = false;
			clearInterval(this.regTime1);
		}
		if (data.isPlay == true && data.time_start !== void 0) {
			this.resetGame();
			this.time_start = data.time_start >> 0;
			this.labelTimeStart.node.active = true;
			this.labelTimeStart.string = '';
			this.regTime1 = setInterval(function () {
				this.labelTimeStart.string = helper.numberPad(this.time_start, 2);
				if (this.time_start < 0) {
					this.labelTimeStart.node.active = false;
					clearInterval(this.regTime1);
				}
				this.time_start--;
			}.bind(this), 1000);
		}
		if (data.first !== void 0) {
			data.first.forEach(function (player) {
				var get_player = this.player[player.id];
				get_player.noticeBet(player.bet, '', 2, 22, cc.RedT.inGame.font1);
				get_player.bet.string = helper.numberWithCommas(player.bet);
			}.bind(this));
		}
		if (data.card !== void 0) {
			data.card.forEach(function (obj) {
				var player = this.player[obj.ghe];
				if (cc.RedT.inGame.player[cc.RedT.inGame.meMap] !== player) {
					player.item.forEach(function (item) {
						item.node.active = true;
						item.spriteFrame = cc.RedT.util.card.cardB1;
					});
				}
			}.bind(this));
		}
	},
	ingame: function ingame(data) {
		this.player[data.ghe].setInfo(data.data);
	},
	outgame: function outgame(data) {
		this.player[data].setInfo(null);
	},
	kick: function kick() {
		cc.RedT.MiniPanel.node.parent = null;
		this.dataOn = false;
		this.loading.active = true;
		clearInterval(this.regTime1);
		cc.director.loadScene('MainGame');
	},
	backGame: function backGame() {
		cc.RedT.MiniPanel.node.parent = null;
		this.dataOn = false;
		cc.RedT.send({ g: { poker: { outgame: true } } });
		this.loading.active = true;
		clearInterval(this.regTime1);
		cc.director.loadScene('MainGame');
	},
	signOut: function signOut() {
		cc.RedT.MiniPanel.node.parent = null;
		this.dataOn = false;
		clearInterval(this.regTime1);
		cc.director.loadScene('MainGame', function () {
			cc.RedT.inGame.signOut();
		});
	},
	onSelect: function onSelect(event, select) {
		cc.RedT.send({ g: { poker: { select: select } } });
	},
	toggleTo: function toggleTo() {
		this.nodeTo.active = !this.nodeTo.active;
	},
	toggleNap: function toggleNap() {
		this.player_nap.node.active = !this.player_nap.node.active;
	},
	toggleOut: function toggleOut() {
		this.nodeout.active = !this.nodeout.active;
	},
	togglePanel: function togglePanel() {
		if (this.panel) {
			this.panel = false;
			this.nodePanelCardMain.active = false;
		} else {
			cc.RedT.send({ g: { poker: { maincard: true } } });
			this.nodePanelCardMain.active = true;
			this.panel = true;
		}
	},
	viewCard: function viewCard(data) {
		var player = this.player[data.map];
		if (!!player && !!data.card && data.card.length == 2) {
			player.isOpen = true;
			player.item.forEach(function (item, index) {
				var card = data.card[index];
				item.spriteFrame = cc.RedT.util.card.getCard(card.card, card.type);
			});
		}
	},
	viewMainCard: function viewMainCard(data) {
		this.redTcard.forEach(function (item, index) {
			var card = data[index];
			if (!!card) {
				item.spriteFrame = cc.RedT.util.card.getCard(card.card, card.type);
			}
		});
	},
	update: function update() {
		if (this.timeStop != 0) {
			var date = new Date().getTime();
			date = date - this.timeStop;
			if (date >= 8000) {
				this.timeStop = 0;
				this.resetGame();
			}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxQb2tlci8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcUG9rZXIvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFBva2VyXFxQb2tlci5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwibm90aWNlIiwibW9kdWxlX3BsYXllciIsInBsYXllcl9uYXAiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJmb250MSIsIkJpdG1hcEZvbnQiLCJmb250MiIsIm5vZGVOb3RpY2UiLCJOb2RlIiwicHJlZmFiTm90aWNlIiwiUHJlZmFiIiwibG9hZGluZyIsInJlZGhhdCIsImJvX2JhaSIsIm5vZGVvdXQiLCJwbGF5ZXIiLCJkZWZhdWx0IiwidHlwZSIsImxhYmVsUm9vbSIsIkxhYmVsIiwibWFpbkJldCIsImxhYmVsVGltZVN0YXJ0Iiwicm9vbUNhcmQiLCJwcmVmYWJDYXJkIiwiYm90dG9uIiwiYnRtX2JvIiwiYnRtX3hlbSIsImJ0bV90aGVvIiwiYnRtX3RvIiwiYnRtX2FsbCIsIm5vZGVQYW5lbENhcmRNYWluIiwibm9kZUJUTlBhbmUiLCJub2RlVG8iLCJzcHJpdGVBbGwiLCJTcHJpdGVGcmFtZSIsInNwcml0ZUh1eSIsInNwcml0ZVRoZW8iLCJzcHJpdGVYZW0iLCJzcHJpdGVDdW9jIiwic3ByaXRlV2luIiwic3ByaXRlTWVXaW4iLCJzcHJpdGVMb3N0Iiwic3ByaXRlSG9hIiwidGl0bGVDYXJkIiwicGFuZWwiLCJkYXRhT24iLCJvbkxvYWQiLCJSZWRUIiwiaW5HYW1lIiwiTWluaVBhbmVsIiwibm9kZSIsInBhcmVudCIsImdhbWVfcGxheWVyIiwiYXVkaW8iLCJiZyIsInBhdXNlIiwiZm9yRWFjaCIsImluaXQiLCJyZWRUY2FyZCIsImNoaWxkcmVuIiwibWFwIiwiaXRlbSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNlbmQiLCJzY2VuZSIsImciLCJwb2tlciIsImluZ2FtZSIsInRpbWVTdG9wIiwidXNlciIsInJpZ2h0cyIsImFjdGl2ZSIsIm9uRGF0YSIsImRhdGEiLCJtaW5pIiwiVG9wSHUiLCJ0YWl4aXUiLCJUYWlYaXUiLCJUWF9NYWluIiwidmlwcCIsIkRpYWxvZyIsIlZpcFBvaW50IiwidXNlckRhdGEiLCJ2aWV3Q2FyZCIsIm1haW5DYXJkIiwidmlld01haW5DYXJkIiwibWVNYXAiLCJpbmZvR2hlIiwiaW5mb1Jvb20iLCJvdXRnYW1lIiwiZ2FtZSIsImtpY2siLCJzaG93IiwibG9hZCIsIm5hcCIsImdhbWVTdGFydCIsImdoZSIsInNldEluZm8iLCJiaW5kIiwiZ2FtZVBsYXllciIsImluZm8iLCJpbmZvR2FtZSIsInJlc2V0R2FtZSIsInN0cmluZyIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsImdhbWVJbmZvIiwib2JqIiwid2luIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJjYWxsRnVuYyIsImNvbG9yIiwiZnJvbUhFWCIsImJvIiwiY2FyZCIsImJhaSIsImNvZGUiLCJzcHJpdGVGcmFtZSIsImdhbWVTdG9wIiwib2ZmU2VsZWN0IiwiY2xlYXJJbnRlcnZhbCIsInJlZ1RpbWUxIiwiRGF0ZSIsImdldFRpbWUiLCJpc1VwZGF0ZSIsInByb2dyZXNzVGltZSIsIlByb2dyZXNzIiwicHJvZ3Jlc3MiLCJzdGFydCIsInN0b3AiLCJmaW5pc2giLCJjaGlhX2JhaSIsIkNoaWFCYWkiLCJ0dXJuIiwiTHVvdENob2kiLCJvZmZEIiwic3RhcnRQcm9ncmVzcyIsInNlbGVjdCIsInhlbSIsInRoZW8iLCJ0byIsImFsbCIsInRpbWUiLCJwb3NpdGlvbiIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJjb21wb25lbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNjYWxlWCIsIndpZHRoIiwic2NhbGVZIiwiaGVpZ2h0IiwidXRpbCIsImNhcmRCMSIsInNwYXduIiwibW92ZVRvIiwidjIiLCJzY2FsZVRvIiwiZ2V0Q2FyZCIsImlkIiwibmV3R2hlIiwiY29uY2F0Iiwic2xpY2UiLCJpbmRleCIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJpc1N0b3AiLCJpc1BsYXkiLCJ0aW1lX3N0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJudW1iZXJQYWQiLCJmaXJzdCIsImdldF9wbGF5ZXIiLCJub3RpY2VCZXQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImJhY2tHYW1lIiwic2lnbk91dCIsIm9uU2VsZWN0IiwiZXZlbnQiLCJ0b2dnbGVUbyIsInRvZ2dsZU5hcCIsInRvZ2dsZU91dCIsInRvZ2dsZVBhbmVsIiwibWFpbmNhcmQiLCJsZW5ndGgiLCJpc09wZW4iLCJ1cGRhdGUiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQWdCQyxRQUFRLFFBQVIsQ0FBcEI7QUFBQSxJQUNDQyxTQUFnQkQsUUFBUSxRQUFSLENBRGpCO0FBQUEsSUFFQ0UsZ0JBQWdCRixRQUFRLGNBQVIsQ0FGakI7QUFHQSxJQUFJRyxhQUFnQkgsUUFBUSxjQUFSLENBQXBCOztBQUVBSSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYTCxjQUFXQSxVQURBO0FBRVhNLFNBQU9MLEdBQUdNLFVBRkM7QUFHWEMsU0FBT1AsR0FBR00sVUFIQztBQUlYRSxjQUFZUixHQUFHUyxJQUpKO0FBS1hDLGdCQUFjVixHQUFHVyxNQUxOO0FBTVhDLFdBQVdaLEdBQUdTLElBTkg7QUFPWEksVUFBV2IsR0FBR1MsSUFQSDtBQVFYSyxVQUFXZCxHQUFHUyxJQVJIO0FBU1hNLFdBQVdmLEdBQUdTLElBVEg7QUFVWFosVUFBV0EsTUFWQTtBQVdYbUIsVUFBUTtBQUNQQyxZQUFTLEVBREY7QUFFUEMsU0FBTXBCO0FBRkMsR0FYRztBQWVYcUIsYUFBWW5CLEdBQUdvQixLQWZKO0FBZ0JYQyxXQUFZckIsR0FBR29CLEtBaEJKO0FBaUJYRSxrQkFBZ0J0QixHQUFHb0IsS0FqQlI7QUFrQlhHLFlBQVl2QixHQUFHUyxJQWxCSjtBQW1CWGUsY0FBWXhCLEdBQUdTLElBbkJKOztBQXFCWGdCLFVBQVV6QixHQUFHUyxJQXJCRjtBQXNCWGlCLFVBQVUxQixHQUFHUyxJQXRCRjtBQXVCWGtCLFdBQVUzQixHQUFHUyxJQXZCRjtBQXdCWG1CLFlBQVU1QixHQUFHUyxJQXhCRjtBQXlCWG9CLFVBQVU3QixHQUFHUyxJQXpCRjtBQTBCWHFCLFdBQVU5QixHQUFHUyxJQTFCRjs7QUE0QlhzQixxQkFBbUIvQixHQUFHUyxJQTVCWDtBQTZCWHVCLGVBQW1CaEMsR0FBR1MsSUE3Qlg7O0FBK0JYd0IsVUFBVWpDLEdBQUdTLElBL0JGOztBQWlDWHlCLGFBQVlsQyxHQUFHbUMsV0FqQ0o7QUFrQ1hDLGFBQVlwQyxHQUFHbUMsV0FsQ0o7QUFtQ1hFLGNBQVlyQyxHQUFHbUMsV0FuQ0o7QUFvQ1hHLGFBQVl0QyxHQUFHbUMsV0FwQ0o7QUFxQ1hJLGNBQVl2QyxHQUFHbUMsV0FyQ0o7QUFzQ1hLLGFBQVl4QyxHQUFHbUMsV0F0Q0o7QUF1Q1hNLGVBQVl6QyxHQUFHbUMsV0F2Q0o7QUF3Q1hPLGNBQVkxQyxHQUFHbUMsV0F4Q0o7QUF5Q1hRLGFBQVkzQyxHQUFHbUMsV0F6Q0o7O0FBMkNYUyxhQUFXO0FBQ1YzQixZQUFTLEVBREM7QUFFVkMsU0FBTWxCLEdBQUdtQztBQUZDLEdBM0NBOztBQWdEWFUsU0FBTyxLQWhESTtBQWlEWEMsVUFBUTtBQWpERyxFQUhKO0FBc0RSQyxPQXREUSxvQkFzREE7QUFDUC9DLEtBQUdnRCxJQUFILENBQVFDLE1BQVIsR0FBaUIsSUFBakI7QUFDQWpELEtBQUdnRCxJQUFILENBQVFFLFNBQVIsQ0FBa0JDLElBQWxCLENBQXVCQyxNQUF2QixHQUFnQyxLQUFLdkMsTUFBckM7O0FBRUEsT0FBS3dDLFdBQUwsR0FBbUIsSUFBbkI7O0FBRUFyRCxLQUFHZ0QsSUFBSCxDQUFRTSxLQUFSLENBQWNDLEVBQWQsQ0FBaUJDLEtBQWpCO0FBQ0E7O0FBRUE7QUFDQSxPQUFLeEMsTUFBTCxDQUFZeUMsT0FBWixDQUFvQixVQUFTekMsTUFBVCxFQUFnQjtBQUNuQ0EsVUFBTzBDLElBQVA7QUFDQSxHQUZEOztBQUlBLE9BQUtDLFFBQUwsR0FBZ0IsS0FBSzVCLGlCQUFMLENBQXVCNkIsUUFBdkIsQ0FBZ0NDLEdBQWhDLENBQW9DLFVBQVNDLElBQVQsRUFBYztBQUNqRSxVQUFPQSxLQUFLQyxZQUFMLENBQWtCL0QsR0FBR2dFLE1BQXJCLENBQVA7QUFDQSxHQUZlLENBQWhCOztBQUlBaEUsS0FBR2dELElBQUgsQ0FBUWlCLElBQVIsQ0FBYSxFQUFDQyxPQUFNLE9BQVAsRUFBZ0JDLEdBQUUsRUFBQ0MsT0FBTSxFQUFDQyxRQUFPLElBQVIsRUFBUCxFQUFsQixFQUFiO0FBQ0E7Ozs7O0FBS0EsT0FBS0MsUUFBTCxHQUFnQixDQUFoQjs7QUFFQSxNQUFJdEUsR0FBR2dELElBQUgsQ0FBUXVCLElBQVIsQ0FBYUMsTUFBYixJQUF1QixDQUEzQixFQUE4QjtBQUM3QixRQUFLeEMsV0FBTCxDQUFpQnlDLE1BQWpCLEdBQTBCLElBQTFCO0FBQ0E7QUFDRCxFQW5GTzs7QUFvRlJDLFNBQVEsZ0JBQVNDLElBQVQsRUFBZTtBQUN0QixNQUFJLENBQUMsQ0FBQ0EsS0FBS0MsSUFBWCxFQUFnQjtBQUNmNUUsTUFBR2dELElBQUgsQ0FBUUUsU0FBUixDQUFrQndCLE1BQWxCLENBQXlCQyxLQUFLQyxJQUE5QjtBQUNBO0FBQ0QsTUFBSSxDQUFDLENBQUNELEtBQUtFLEtBQVgsRUFBaUI7QUFDaEI3RSxNQUFHZ0QsSUFBSCxDQUFRRSxTQUFSLENBQWtCMkIsS0FBbEIsQ0FBd0JILE1BQXhCLENBQStCQyxLQUFLRSxLQUFwQztBQUNBO0FBQ0QsTUFBSSxDQUFDLENBQUNGLEtBQUtHLE1BQVgsRUFBa0I7QUFDakI5RSxNQUFHZ0QsSUFBSCxDQUFRRSxTQUFSLENBQWtCNkIsTUFBbEIsQ0FBeUJDLE9BQXpCLENBQWlDTixNQUFqQyxDQUF3Q0MsS0FBS0csTUFBN0M7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdILEtBQUtNLElBQXBCLEVBQTBCO0FBQ3pCakYsTUFBR2dELElBQUgsQ0FBUUUsU0FBUixDQUFrQmdDLE1BQWxCLENBQXlCQyxRQUF6QixDQUFrQ1QsTUFBbEMsQ0FBeUNDLEtBQUtNLElBQTlDO0FBQ0E7QUFDRCxNQUFJLEtBQUssQ0FBTCxLQUFXTixLQUFLSixJQUFwQixFQUF5QjtBQUN4QnZFLE1BQUdnRCxJQUFILENBQVFvQyxRQUFSLENBQWlCVCxLQUFLSixJQUF0QjtBQUNBO0FBQ0QsTUFBSSxLQUFLekIsTUFBVCxFQUFpQjtBQUNoQixPQUFJLENBQUMsQ0FBQzZCLEtBQUtVLFFBQVgsRUFBcUI7QUFDcEIsU0FBS0EsUUFBTCxDQUFjVixLQUFLVSxRQUFuQjtBQUNBO0FBQ0QsT0FBSSxDQUFDLENBQUNWLEtBQUtXLFFBQVgsRUFBcUI7QUFDcEIsU0FBS0MsWUFBTCxDQUFrQlosS0FBS1csUUFBdkI7QUFDQTtBQUNELE9BQUksQ0FBQyxDQUFDWCxLQUFLYSxLQUFYLEVBQWtCO0FBQ2pCLFNBQUtBLEtBQUwsR0FBYWIsS0FBS2EsS0FBbEI7QUFDQTtBQUNELE9BQUksQ0FBQyxDQUFDYixLQUFLYyxPQUFYLEVBQW9CO0FBQUc7QUFDdEIsU0FBS0EsT0FBTCxDQUFhZCxLQUFLYyxPQUFsQjtBQUNBO0FBQ0QsT0FBSSxDQUFDLENBQUNkLEtBQUtlLFFBQVgsRUFBcUI7QUFBRTtBQUN0QixTQUFLQSxRQUFMLENBQWNmLEtBQUtlLFFBQW5CO0FBQ0E7QUFDRCxPQUFJLENBQUMsQ0FBQ2YsS0FBS04sTUFBWCxFQUFtQjtBQUFHO0FBQ3JCLFNBQUtBLE1BQUwsQ0FBWU0sS0FBS04sTUFBakI7QUFDQTtBQUNELE9BQUksQ0FBQyxDQUFDTSxLQUFLZ0IsT0FBWCxFQUFvQjtBQUFHO0FBQ3RCLFNBQUtBLE9BQUwsQ0FBYWhCLEtBQUtnQixPQUFsQjtBQUNBO0FBQ0QsT0FBSSxDQUFDLENBQUNoQixLQUFLaUIsSUFBWCxFQUFpQjtBQUNoQixTQUFLQSxJQUFMLENBQVVqQixLQUFLaUIsSUFBZjtBQUNBO0FBQ0QsT0FBSSxDQUFDLENBQUNqQixLQUFLa0IsSUFBWCxFQUFpQjtBQUNoQixTQUFLQSxJQUFMO0FBQ0E7QUFDRCxPQUFJLEtBQUssQ0FBTCxLQUFXbEIsS0FBSzlFLE1BQXBCLEVBQTJCO0FBQzFCLFNBQUtBLE1BQUwsQ0FBWWlHLElBQVosQ0FBaUJuQixLQUFLOUUsTUFBdEI7QUFDQTtBQUNELE9BQUksS0FBSyxDQUFMLEtBQVc4RSxLQUFLb0IsSUFBcEIsRUFBeUI7QUFDeEIsU0FBS25GLE9BQUwsQ0FBYTZELE1BQWIsR0FBc0JFLEtBQUtvQixJQUEzQjtBQUNBO0FBQ0QsT0FBSSxLQUFLLENBQUwsS0FBV3BCLEtBQUtxQixHQUFwQixFQUF3QjtBQUN2QixTQUFLakcsVUFBTCxDQUFnQm9ELElBQWhCLENBQXFCc0IsTUFBckIsR0FBOEJFLEtBQUtxQixHQUFuQztBQUNBO0FBQ0Q7QUFDRCxFQTFJTztBQTJJUkMsWUFBVyxtQkFBU3RCLElBQVQsRUFBYztBQUN4QkEsT0FBS2xCLE9BQUwsQ0FBYSxVQUFTekMsTUFBVCxFQUFnQjtBQUM1QixRQUFLQSxNQUFMLENBQVlBLE9BQU9rRixHQUFuQixFQUF3QkMsT0FBeEIsQ0FBZ0NuRixPQUFPMkQsSUFBdkM7QUFDQSxHQUZZLENBRVh5QixJQUZXLENBRU4sSUFGTSxDQUFiO0FBR0EsRUEvSU87QUFnSlJDLGFBQVksb0JBQVMxQixJQUFULEVBQWM7QUFDekIsTUFBSTNELFNBQVMsS0FBS0EsTUFBTCxDQUFZMkQsS0FBS3VCLEdBQWpCLENBQWI7QUFDQSxNQUFJdkIsS0FBS0EsSUFBTCxLQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDekIzRCxVQUFPbUYsT0FBUCxDQUFleEIsS0FBS0EsSUFBcEI7QUFDQTtBQUNELE1BQUlBLEtBQUsyQixJQUFMLEtBQWMsS0FBSyxDQUF2QixFQUEwQjtBQUN6QnRGLFVBQU91RixRQUFQLENBQWdCNUIsS0FBSzJCLElBQXJCO0FBQ0E7QUFDRCxFQXhKTztBQXlKUkUsWUFBVyxxQkFBVTtBQUNwQixPQUFLbEMsUUFBTCxHQUFnQixDQUFoQjtBQUNBO0FBQ0MsT0FBS2pELE9BQUwsQ0FBYW9GLE1BQWIsR0FBc0IsRUFBdEI7QUFDQSxPQUFLbEYsUUFBTCxDQUFjbUYsa0JBQWQ7QUFDQSxPQUFLbEcsVUFBTCxDQUFnQmtHLGtCQUFoQjtBQUNBQyxTQUFPQyxNQUFQLENBQWMsS0FBSzVGLE1BQW5CLEVBQTJCeUMsT0FBM0IsQ0FBbUMsVUFBU3pDLE1BQVQsRUFBZ0I7QUFDbERBLFVBQU93RixTQUFQO0FBQ0EsR0FGRDtBQUdEO0FBQ0EsRUFuS087QUFvS1JLLFdBQVUsa0JBQVNsQyxJQUFULEVBQWM7QUFDdkJBLE9BQUtBLElBQUwsQ0FBVWxCLE9BQVYsQ0FBa0IsVUFBU3pDLE1BQVQsRUFBZ0I7QUFDakMsT0FBSThGLE1BQU0sS0FBSzlGLE1BQUwsQ0FBWUEsT0FBT2tGLEdBQW5CLENBQVY7QUFDQSxPQUFJbEYsT0FBTzJELElBQVAsS0FBZ0IsS0FBSyxDQUF6QixFQUE0QjtBQUMzQm1DLFFBQUlYLE9BQUosQ0FBWW5GLE9BQU8yRCxJQUFuQixFQUF5QixDQUFDLENBQUNBLEtBQUtvQyxHQUFoQztBQUNBO0FBQ0QsT0FBSS9GLE9BQU9zRixJQUFQLEtBQWdCLEtBQUssQ0FBekIsRUFBNEI7QUFDM0JRLFFBQUlQLFFBQUosQ0FBYXZGLE9BQU9zRixJQUFwQjtBQUNBO0FBQ0QsR0FSaUIsQ0FRaEJGLElBUmdCLENBUVgsSUFSVyxDQUFsQjtBQVNBLE1BQUcsQ0FBQyxDQUFDekIsS0FBS29DLEdBQVYsRUFBYztBQUNiLFFBQUs1RCxJQUFMLENBQVU2RCxTQUFWLENBQW9CaEgsR0FBR2lILFFBQUgsQ0FDbkJqSCxHQUFHa0gsU0FBSCxDQUFhLENBQWIsQ0FEbUIsRUFFbkJsSCxHQUFHbUgsUUFBSCxDQUFZLFlBQVc7QUFDdEJSLFdBQU9DLE1BQVAsQ0FBYyxLQUFLNUYsTUFBbkIsRUFBMkJ5QyxPQUEzQixDQUFtQyxVQUFTekMsTUFBVCxFQUFnQjtBQUNsREEsWUFBTzhDLElBQVAsQ0FBWUwsT0FBWixDQUFvQixVQUFTSyxJQUFULEVBQWM7QUFDakNBLFdBQUtYLElBQUwsQ0FBVWlFLEtBQVYsR0FBa0J0RCxLQUFLWCxJQUFMLENBQVVpRSxLQUFWLENBQWdCQyxPQUFoQixDQUF3QixRQUF4QixDQUFsQjtBQUNBLE1BRkQ7QUFHQSxLQUpEO0FBS0EsU0FBSzlGLFFBQUwsQ0FBY3FDLFFBQWQsQ0FBdUJILE9BQXZCLENBQStCLFVBQVNLLElBQVQsRUFBYztBQUM1Q0EsVUFBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJ3RCxLQUFqQixHQUF5QnRELEtBQUtGLFFBQUwsQ0FBYyxDQUFkLEVBQWlCd0QsS0FBakIsQ0FBdUJDLE9BQXZCLENBQStCLFFBQS9CLENBQXpCO0FBQ0ExQyxVQUFLb0MsR0FBTCxDQUFTTyxFQUFULENBQVk3RCxPQUFaLENBQW9CLFVBQVM2RCxFQUFULEVBQVk7QUFDL0IsVUFBSXhELEtBQUt5RCxJQUFMLENBQVVBLElBQVYsSUFBa0JELEdBQUdDLElBQXJCLElBQTZCekQsS0FBS3lELElBQUwsQ0FBVXJHLElBQVYsSUFBa0JvRyxHQUFHcEcsSUFBdEQsRUFBNEQ7QUFDM0Q0QyxZQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQndELEtBQWpCLEdBQXlCdEQsS0FBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJ3RCxLQUFqQixDQUF1QkMsT0FBdkIsQ0FBK0IsUUFBL0IsQ0FBekI7QUFDQTtBQUNELE1BSkQ7QUFLQSxLQVBEO0FBUUEsUUFBSXJHLFNBQVMsS0FBS0EsTUFBTCxDQUFZMkQsS0FBS29DLEdBQUwsQ0FBU2IsR0FBckIsQ0FBYjtBQUNBbEYsV0FBTzhDLElBQVAsQ0FBWUwsT0FBWixDQUFvQixVQUFTSyxJQUFULEVBQWM7QUFDakMsU0FBSSxDQUFDLENBQUNBLEtBQUswRCxHQUFYLEVBQWdCO0FBQ2Y3QyxXQUFLb0MsR0FBTCxDQUFTTyxFQUFULENBQVk3RCxPQUFaLENBQW9CLFVBQVM2RCxFQUFULEVBQVk7QUFDL0IsV0FBSXhELEtBQUswRCxHQUFMLENBQVNELElBQVQsSUFBaUJELEdBQUdDLElBQXBCLElBQTRCekQsS0FBSzBELEdBQUwsQ0FBU3RHLElBQVQsSUFBaUJvRyxHQUFHcEcsSUFBcEQsRUFBMEQ7QUFDekQ0QyxhQUFLWCxJQUFMLENBQVVpRSxLQUFWLEdBQWtCdEQsS0FBS1gsSUFBTCxDQUFVaUUsS0FBVixDQUFnQkMsT0FBaEIsQ0FBd0IsUUFBeEIsQ0FBbEI7QUFDQTtBQUNELE9BSkQ7QUFLQTtBQUNELEtBUkQ7QUFTQSxRQUFJMUMsS0FBS29DLEdBQUwsQ0FBU1UsSUFBVCxJQUFpQixDQUFyQixFQUF3QjtBQUN2QjtBQUNBekcsWUFBTzRCLFNBQVAsQ0FBaUJPLElBQWpCLENBQXNCc0IsTUFBdEIsR0FBK0IsSUFBL0I7QUFDQXpELFlBQU80QixTQUFQLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzlFLFNBQUwsQ0FBZSxDQUFmLENBQS9CO0FBQ0EsS0FKRCxNQUlNLElBQUkrQixLQUFLb0MsR0FBTCxDQUFTVSxJQUFULElBQWlCLENBQXJCLEVBQXdCO0FBQzdCO0FBQ0F6RyxZQUFPNEIsU0FBUCxDQUFpQk8sSUFBakIsQ0FBc0JzQixNQUF0QixHQUErQixJQUEvQjtBQUNBekQsWUFBTzRCLFNBQVAsQ0FBaUI4RSxXQUFqQixHQUErQixLQUFLOUUsU0FBTCxDQUFlLENBQWYsQ0FBL0I7QUFDQSxLQUpLLE1BSUEsSUFBSStCLEtBQUtvQyxHQUFMLENBQVNVLElBQVQsSUFBaUIsQ0FBckIsRUFBd0I7QUFDN0I7QUFDQXpHLFlBQU80QixTQUFQLENBQWlCTyxJQUFqQixDQUFzQnNCLE1BQXRCLEdBQStCLElBQS9CO0FBQ0F6RCxZQUFPNEIsU0FBUCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs5RSxTQUFMLENBQWUsQ0FBZixDQUEvQjtBQUNBLEtBSkssTUFJQSxJQUFJK0IsS0FBS29DLEdBQUwsQ0FBU1UsSUFBVCxJQUFpQixDQUFyQixFQUF3QjtBQUM3QjtBQUNBekcsWUFBTzRCLFNBQVAsQ0FBaUJPLElBQWpCLENBQXNCc0IsTUFBdEIsR0FBK0IsSUFBL0I7QUFDQXpELFlBQU80QixTQUFQLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzlFLFNBQUwsQ0FBZSxDQUFmLENBQS9CO0FBQ0EsS0FKSyxNQUlBLElBQUkrQixLQUFLb0MsR0FBTCxDQUFTVSxJQUFULElBQWlCLENBQXJCLEVBQXdCO0FBQzdCO0FBQ0F6RyxZQUFPNEIsU0FBUCxDQUFpQk8sSUFBakIsQ0FBc0JzQixNQUF0QixHQUErQixJQUEvQjtBQUNBekQsWUFBTzRCLFNBQVAsQ0FBaUI4RSxXQUFqQixHQUErQixLQUFLOUUsU0FBTCxDQUFlLENBQWYsQ0FBL0I7QUFDQSxLQUpLLE1BSUEsSUFBSStCLEtBQUtvQyxHQUFMLENBQVNVLElBQVQsSUFBaUIsQ0FBckIsRUFBd0I7QUFDN0I7QUFDQXpHLFlBQU80QixTQUFQLENBQWlCTyxJQUFqQixDQUFzQnNCLE1BQXRCLEdBQStCLElBQS9CO0FBQ0F6RCxZQUFPNEIsU0FBUCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs5RSxTQUFMLENBQWUsQ0FBZixDQUEvQjtBQUNBLEtBSkssTUFJQSxJQUFJK0IsS0FBS29DLEdBQUwsQ0FBU1UsSUFBVCxJQUFpQixDQUFyQixFQUF3QjtBQUM3QjtBQUNBekcsWUFBTzRCLFNBQVAsQ0FBaUJPLElBQWpCLENBQXNCc0IsTUFBdEIsR0FBK0IsSUFBL0I7QUFDQXpELFlBQU80QixTQUFQLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzlFLFNBQUwsQ0FBZSxDQUFmLENBQS9CO0FBQ0EsS0FKSyxNQUlBLElBQUkrQixLQUFLb0MsR0FBTCxDQUFTVSxJQUFULElBQWlCLENBQXJCLEVBQXdCO0FBQzdCO0FBQ0F6RyxZQUFPNEIsU0FBUCxDQUFpQk8sSUFBakIsQ0FBc0JzQixNQUF0QixHQUErQixJQUEvQjtBQUNBekQsWUFBTzRCLFNBQVAsQ0FBaUI4RSxXQUFqQixHQUErQixLQUFLOUUsU0FBTCxDQUFlLENBQWYsQ0FBL0I7QUFDQSxLQUpLLE1BSUEsSUFBSStCLEtBQUtvQyxHQUFMLENBQVNVLElBQVQsSUFBaUIsRUFBckIsRUFBeUI7QUFDOUI7QUFDQXpHLFlBQU80QixTQUFQLENBQWlCTyxJQUFqQixDQUFzQnNCLE1BQXRCLEdBQStCLElBQS9CO0FBQ0F6RCxZQUFPNEIsU0FBUCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs5RSxTQUFMLENBQWUsQ0FBZixDQUEvQjtBQUNBO0FBQ0QsSUE3REQsRUE2REcsSUE3REgsQ0FGbUIsQ0FBcEI7QUFpRUE7QUFDRCxFQWpQTztBQWtQUitFLFdBQVUsb0JBQVU7QUFDbkIsT0FBS0MsU0FBTDtBQUNBLE9BQUt0RyxjQUFMLENBQW9CbUYsTUFBcEIsR0FBNkIsRUFBN0I7QUFDQSxPQUFLbkYsY0FBTCxDQUFvQjZCLElBQXBCLENBQXlCc0IsTUFBekIsR0FBa0MsS0FBbEM7QUFDQW9ELGdCQUFjLEtBQUtDLFFBQW5CO0FBQ0EsT0FBS3hELFFBQUwsR0FBZ0IsSUFBSXlELElBQUosR0FBV0MsT0FBWCxFQUFoQjtBQUNBLEVBeFBPO0FBeVBSSixZQUFXLHFCQUFVO0FBQ3BCLE1BQUksQ0FBQyxDQUFDLEtBQUt2RSxXQUFYLEVBQXdCO0FBQ3ZCLFFBQUtBLFdBQUwsQ0FBaUI0RSxRQUFqQixHQUE0QixLQUE1QjtBQUNBLFFBQUs1RSxXQUFMLENBQWlCNkUsWUFBakIsR0FBZ0MsQ0FBaEM7QUFDQSxRQUFLN0UsV0FBTCxDQUFpQjhFLFFBQWpCLENBQTBCQyxRQUExQixHQUFxQyxDQUFyQztBQUNBO0FBQ0QsT0FBSzNHLE1BQUwsQ0FBWWdELE1BQVosR0FBcUIsS0FBckI7QUFDQSxPQUFLeEMsTUFBTCxDQUFZd0MsTUFBWixHQUFxQixLQUFyQjtBQUNBLEVBalFPO0FBa1FSbUIsT0FBTSxjQUFTakIsSUFBVCxFQUFjO0FBQ25CLE1BQUksQ0FBQyxDQUFDQSxLQUFLMEQsS0FBWCxFQUFrQjtBQUNqQixRQUFLcEMsU0FBTCxDQUFldEIsS0FBSzBELEtBQXBCO0FBQ0E7QUFDRCxNQUFJLENBQUMsQ0FBQzFELEtBQUsyRCxJQUFYLEVBQWlCO0FBQ2hCLFFBQUtYLFFBQUw7QUFDQTtBQUNELE1BQUksQ0FBQyxDQUFDaEQsS0FBSzRELE1BQVgsRUFBbUI7QUFDbEIsUUFBS1osUUFBTDtBQUNBO0FBQ0QsTUFBSSxDQUFDLENBQUNoRCxLQUFLNkQsUUFBWCxFQUFxQjtBQUNwQixRQUFLQyxPQUFMLENBQWE5RCxLQUFLNkQsUUFBbEI7QUFDQTtBQUNELE1BQUksQ0FBQyxDQUFDN0QsS0FBSytELElBQVgsRUFBaUI7QUFDaEIsUUFBS0MsUUFBTCxDQUFjaEUsS0FBSytELElBQW5CO0FBQ0E7QUFDRCxNQUFJLENBQUMsQ0FBQy9ELEtBQUsyQixJQUFYLEVBQWlCO0FBQ2hCLFFBQUtPLFFBQUwsQ0FBY2xDLEtBQUsyQixJQUFuQjtBQUNBO0FBQ0QsTUFBSSxDQUFDLENBQUMzQixLQUFLM0QsTUFBWCxFQUFtQjtBQUNsQixRQUFLcUYsVUFBTCxDQUFnQjFCLEtBQUszRCxNQUFyQjtBQUNBO0FBQ0QsTUFBSSxDQUFDLENBQUMyRCxLQUFLaUUsSUFBWCxFQUFpQixDQUNoQjtBQUNELE1BQUlqRSxLQUFLaUQsU0FBTCxLQUFtQixLQUFLLENBQTVCLEVBQStCO0FBQzlCLFFBQUtBLFNBQUw7QUFDQTtBQUNELE1BQUksQ0FBQyxDQUFDakQsS0FBSzRDLElBQVgsRUFBaUI7QUFDaEI7QUFDQSxRQUFLakMsUUFBTCxDQUFjWCxLQUFLNEMsSUFBbkI7QUFDQTtBQUNELEVBalNPO0FBa1NSb0IsV0FBVSxrQkFBU2hFLElBQVQsRUFBYztBQUN2QixNQUFJM0QsU0FBUyxLQUFLQSxNQUFMLENBQVkyRCxLQUFLdUIsR0FBakIsQ0FBYjtBQUNBLE1BQUksQ0FBQyxDQUFDLEtBQUs3QyxXQUFYLEVBQXdCO0FBQ3ZCLFFBQUtBLFdBQUwsQ0FBaUI0RSxRQUFqQixHQUE0QixLQUE1QjtBQUNBLFFBQUs1RSxXQUFMLENBQWlCNkUsWUFBakIsR0FBZ0MsQ0FBaEM7QUFDQSxRQUFLN0UsV0FBTCxDQUFpQjhFLFFBQWpCLENBQTBCQyxRQUExQixHQUFxQyxDQUFyQztBQUNBO0FBQ0QsT0FBSy9FLFdBQUwsR0FBbUJyQyxNQUFuQjtBQUNBQSxTQUFPNkgsYUFBUCxDQUFxQmxFLEtBQUt5RCxRQUExQjtBQUNBLE1BQUl6RCxLQUFLbUUsTUFBTCxLQUFnQixLQUFLLENBQXpCLEVBQTRCO0FBQzNCLFFBQUtySCxNQUFMLENBQVlnRCxNQUFaLEdBQXFCLElBQXJCO0FBQ0EsT0FBSUUsS0FBS21FLE1BQUwsQ0FBWUMsR0FBaEIsRUFBcUI7QUFDcEIsU0FBS3BILE9BQUwsQ0FBYThDLE1BQWIsR0FBc0IsSUFBdEI7QUFDQSxJQUZELE1BRUs7QUFDSixTQUFLOUMsT0FBTCxDQUFhOEMsTUFBYixHQUFzQixLQUF0QjtBQUNBO0FBQ0QsT0FBSUUsS0FBS21FLE1BQUwsQ0FBWUUsSUFBaEIsRUFBc0I7QUFDckIsU0FBS3BILFFBQUwsQ0FBYzZDLE1BQWQsR0FBdUIsSUFBdkI7QUFDQSxJQUZELE1BRUs7QUFDSixTQUFLN0MsUUFBTCxDQUFjNkMsTUFBZCxHQUF1QixLQUF2QjtBQUNBO0FBQ0QsT0FBSUUsS0FBS21FLE1BQUwsQ0FBWUcsRUFBaEIsRUFBb0I7QUFDbkIsU0FBS3BILE1BQUwsQ0FBWTRDLE1BQVosR0FBcUIsSUFBckI7QUFDQSxJQUZELE1BRUs7QUFDSixTQUFLNUMsTUFBTCxDQUFZNEMsTUFBWixHQUFxQixLQUFyQjtBQUNBO0FBQ0QsT0FBSUUsS0FBS21FLE1BQUwsQ0FBWUksR0FBaEIsRUFBcUI7QUFDcEIsU0FBS3BILE9BQUwsQ0FBYTJDLE1BQWIsR0FBc0IsSUFBdEI7QUFDQSxJQUZELE1BRUs7QUFDSixTQUFLM0MsT0FBTCxDQUFhMkMsTUFBYixHQUFzQixLQUF0QjtBQUNBO0FBQ0QsR0F0QkQsTUFzQks7QUFDSixRQUFLaEQsTUFBTCxDQUFZZ0QsTUFBWixHQUFxQixLQUFyQjtBQUNBLFFBQUt4QyxNQUFMLENBQVl3QyxNQUFaLEdBQXFCLEtBQXJCO0FBQ0E7QUFDRCxFQXJVTztBQXNVUmEsV0FBVSxrQkFBU1gsSUFBVCxFQUFjO0FBQ3ZCLE1BQUl3RSxPQUFPLEdBQVg7QUFDQSxNQUFJQyxXQUFXLEtBQUt0SSxNQUFMLENBQVlzQyxNQUFaLENBQW1CaUcscUJBQW5CLENBQXlDLEtBQUt2SSxNQUFMLENBQVlzSSxRQUFyRCxDQUFmO0FBQ0F6RSxPQUFLbEIsT0FBTCxDQUFhLFVBQVM4RCxJQUFULEVBQWM7QUFDMUIsT0FBSXBFLE9BQU9uRCxHQUFHc0osV0FBSCxDQUFlLEtBQUs5SCxVQUFwQixDQUFYO0FBQ0EsUUFBS0QsUUFBTCxDQUFjZ0ksUUFBZCxDQUF1QnBHLElBQXZCO0FBQ0EsT0FBSXFHLFlBQVlyRyxLQUFLUyxRQUFMLENBQWMsQ0FBZCxFQUFpQkcsWUFBakIsQ0FBOEIvRCxHQUFHZ0UsTUFBakMsQ0FBaEI7QUFDQXdGLGFBQVVyRyxJQUFWLENBQWU2RCxTQUFmLENBQ0NoSCxHQUFHaUgsUUFBSCxDQUNDakgsR0FBR2tILFNBQUgsQ0FBYWlDLElBQWIsQ0FERCxFQUVDbkosR0FBR21ILFFBQUgsQ0FBWSxZQUFVO0FBQ3JCcUMsY0FBVXJHLElBQVYsQ0FBZWlHLFFBQWYsR0FBMEJJLFVBQVVyRyxJQUFWLENBQWVDLE1BQWYsQ0FBc0JxRyxvQkFBdEIsQ0FBMkNMLFFBQTNDLENBQTFCO0FBQ0FJLGNBQVVyRyxJQUFWLENBQWV1RyxNQUFmLEdBQXdCLEtBQUs1SSxNQUFMLENBQVk2SSxLQUFaLEdBQWtCSCxVQUFVckcsSUFBVixDQUFld0csS0FBekQ7QUFDQUgsY0FBVXJHLElBQVYsQ0FBZXlHLE1BQWYsR0FBd0IsS0FBSzlJLE1BQUwsQ0FBWStJLE1BQVosR0FBbUJMLFVBQVVyRyxJQUFWLENBQWUwRyxNQUExRDtBQUNBTCxjQUFVOUIsV0FBVixHQUF3QjFILEdBQUdnRCxJQUFILENBQVE4RyxJQUFSLENBQWF2QyxJQUFiLENBQWtCd0MsTUFBMUM7QUFDQSxJQUxELEVBS0csSUFMSCxDQUZELEVBUUMvSixHQUFHZ0ssS0FBSCxDQUFTaEssR0FBR2lLLE1BQUgsQ0FBVSxHQUFWLEVBQWVqSyxHQUFHa0ssRUFBSCxDQUFNLENBQU4sRUFBUSxDQUFSLENBQWYsQ0FBVCxFQUFxQ2xLLEdBQUdtSyxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFyQyxDQVJELEVBU0NuSyxHQUFHa0gsU0FBSCxDQUFhLEdBQWIsQ0FURCxFQVVDbEgsR0FBR21LLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLENBVkQsRUFXQ25LLEdBQUdtSCxRQUFILENBQVksWUFBVTtBQUNyQnFDLGNBQVU5QixXQUFWLEdBQXdCMUgsR0FBR2dELElBQUgsQ0FBUThHLElBQVIsQ0FBYXZDLElBQWIsQ0FBa0I2QyxPQUFsQixDQUEwQjdDLEtBQUtBLElBQS9CLEVBQXFDQSxLQUFLckcsSUFBMUMsQ0FBeEI7QUFDQWlDLFNBQUtvRSxJQUFMLEdBQVlBLElBQVo7QUFDQWlDLGdCQUFZLElBQVo7QUFDQWpDLFdBQU8sSUFBUDtBQUNBcEUsV0FBTyxJQUFQO0FBQ0EsSUFORCxFQU1HLElBTkgsQ0FYRCxFQWtCQ25ELEdBQUdtSyxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQWxCRCxDQUREO0FBc0JBaEIsV0FBUSxHQUFSO0FBQ0EsR0EzQlksQ0EyQlgvQyxJQTNCVyxDQTJCTixJQTNCTSxDQUFiO0FBNEJBLEVBcldPO0FBc1dScUMsVUFBUyxpQkFBUzlELElBQVQsRUFBYztBQUFBOztBQUN0QixNQUFJd0UsT0FBTyxDQUFYOztBQURzQiw2QkFFYjVCLElBRmE7QUFHckI1QyxRQUFLbEIsT0FBTCxDQUFhLFVBQVMrRCxHQUFULEVBQWE7QUFDekIsU0FBS3hHLE1BQUwsQ0FBWXdHLElBQUk2QyxFQUFoQixFQUFvQjVCLE9BQXBCLENBQTRCakIsR0FBNUIsRUFBaUNELElBQWpDLEVBQXVDNEIsSUFBdkM7QUFDQUEsWUFBUSxJQUFSO0FBQ0EsSUFIWSxDQUdYL0MsSUFIVyxPQUFiO0FBSHFCOztBQUV0QixPQUFLLElBQUltQixPQUFPLENBQWhCLEVBQW1CQSxPQUFPLENBQTFCLEVBQTZCQSxNQUE3QixFQUFxQztBQUFBLFNBQTVCQSxJQUE0QjtBQUtwQztBQUNELEVBOVdPO0FBK1dSOUIsVUFBUyxpQkFBU2EsSUFBVCxFQUFjO0FBQ3RCLE1BQUl0RixTQUFTLEVBQWI7QUFDQSxNQUFJc0osU0FBUyxFQUFiO0FBQ0EsTUFBSSxLQUFLOUUsS0FBTCxJQUFjLENBQWxCLEVBQXFCO0FBQ3BCLE9BQUkzQixNQUFNLEtBQUsyQixLQUFMLEdBQVcsQ0FBckI7QUFDQThFLFlBQVNBLE9BQU9DLE1BQVAsQ0FBY2pFLEtBQUtrRSxLQUFMLENBQVczRyxHQUFYLENBQWQsRUFBOEJ5QyxLQUFLa0UsS0FBTCxDQUFXLENBQVgsRUFBYzNHLEdBQWQsQ0FBOUIsQ0FBVDtBQUNBLEdBSEQsTUFHSztBQUNKeUcsWUFBU2hFLElBQVQ7QUFDQTtBQUNEZ0UsU0FBTzdHLE9BQVAsQ0FBZSxVQUFTcUQsR0FBVCxFQUFjMkQsS0FBZCxFQUFvQjtBQUNsQyxPQUFJM0csT0FBTyxLQUFLOUMsTUFBTCxDQUFZeUosS0FBWixDQUFYO0FBQ0EzRyxRQUFLRCxHQUFMLEdBQVdpRCxJQUFJWixHQUFmO0FBQ0FsRixVQUFPOEYsSUFBSVosR0FBWCxJQUFrQnBDLElBQWxCO0FBQ0FBLFFBQUtxQyxPQUFMLENBQWFXLElBQUluQyxJQUFqQjtBQUNBLFVBQU8sS0FBSyxDQUFaO0FBQ0EsR0FOYyxDQU1ieUIsSUFOYSxDQU1SLElBTlEsQ0FBZjtBQU9BLE9BQUtwRixNQUFMLEdBQWNBLE1BQWQ7QUFDQUEsV0FBUyxJQUFUO0FBQ0FzSixXQUFTLElBQVQ7QUFDQSxFQWxZTztBQW1ZUjVFLFdBQVUsa0JBQVNmLElBQVQsRUFBYztBQUN2QixNQUFJQSxLQUFLaUIsSUFBTCxLQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFDekIsUUFBS3pFLFNBQUwsQ0FBZXNGLE1BQWYsR0FBd0I5RyxPQUFPK0ssZ0JBQVAsQ0FBd0IvRixLQUFLaUIsSUFBN0IsQ0FBeEI7QUFDQSxRQUFLN0YsVUFBTCxDQUFnQjJELElBQWhCLENBQXFCaUIsS0FBS2lCLElBQTFCO0FBQ0E7QUFDRCxNQUFJakIsS0FBS2dHLEdBQUwsS0FBYSxLQUFLLENBQXRCLEVBQXlCO0FBQ3hCLFFBQUt0SixPQUFMLENBQWFvRixNQUFiLEdBQXNCOUcsT0FBTytLLGdCQUFQLENBQXdCL0YsS0FBS2dHLEdBQTdCLENBQXRCO0FBQ0E7QUFDRCxNQUFJaEcsS0FBS2lHLE1BQUwsS0FBZ0IsS0FBSyxDQUF6QixFQUE0QjtBQUMzQixRQUFLdEosY0FBTCxDQUFvQjZCLElBQXBCLENBQXlCc0IsTUFBekIsR0FBa0MsS0FBbEM7QUFDQW9ELGlCQUFjLEtBQUtDLFFBQW5CO0FBQ0E7QUFDRCxNQUFJbkQsS0FBS2tHLE1BQUwsSUFBZSxJQUFmLElBQXVCbEcsS0FBS21HLFVBQUwsS0FBb0IsS0FBSyxDQUFwRCxFQUF1RDtBQUN0RCxRQUFLdEUsU0FBTDtBQUNBLFFBQUtzRSxVQUFMLEdBQWtCbkcsS0FBS21HLFVBQUwsSUFBaUIsQ0FBbkM7QUFDQSxRQUFLeEosY0FBTCxDQUFvQjZCLElBQXBCLENBQXlCc0IsTUFBekIsR0FBa0MsSUFBbEM7QUFDQSxRQUFLbkQsY0FBTCxDQUFvQm1GLE1BQXBCLEdBQTZCLEVBQTdCO0FBQ0EsUUFBS3FCLFFBQUwsR0FBZ0JpRCxZQUFZLFlBQVU7QUFDckMsU0FBS3pKLGNBQUwsQ0FBb0JtRixNQUFwQixHQUE2QjlHLE9BQU9xTCxTQUFQLENBQWlCLEtBQUtGLFVBQXRCLEVBQWtDLENBQWxDLENBQTdCO0FBQ0EsUUFBSSxLQUFLQSxVQUFMLEdBQWtCLENBQXRCLEVBQXlCO0FBQ3hCLFVBQUt4SixjQUFMLENBQW9CNkIsSUFBcEIsQ0FBeUJzQixNQUF6QixHQUFrQyxLQUFsQztBQUNBb0QsbUJBQWMsS0FBS0MsUUFBbkI7QUFDQTtBQUNELFNBQUtnRCxVQUFMO0FBQ0EsSUFQMkIsQ0FPMUIxRSxJQVAwQixDQU9yQixJQVBxQixDQUFaLEVBT0YsSUFQRSxDQUFoQjtBQVFBO0FBQ0QsTUFBSXpCLEtBQUtzRyxLQUFMLEtBQWUsS0FBSyxDQUF4QixFQUEyQjtBQUMxQnRHLFFBQUtzRyxLQUFMLENBQVd4SCxPQUFYLENBQW1CLFVBQVN6QyxNQUFULEVBQWdCO0FBQ2xDLFFBQUlrSyxhQUFhLEtBQUtsSyxNQUFMLENBQVlBLE9BQU9xSixFQUFuQixDQUFqQjtBQUNBYSxlQUFXQyxTQUFYLENBQXFCbkssT0FBTzJKLEdBQTVCLEVBQWlDLEVBQWpDLEVBQXFDLENBQXJDLEVBQXdDLEVBQXhDLEVBQTRDM0ssR0FBR2dELElBQUgsQ0FBUUMsTUFBUixDQUFlNUMsS0FBM0Q7QUFDQTZLLGVBQVdQLEdBQVgsQ0FBZWxFLE1BQWYsR0FBd0I5RyxPQUFPK0ssZ0JBQVAsQ0FBd0IxSixPQUFPMkosR0FBL0IsQ0FBeEI7QUFDQSxJQUprQixDQUlqQnZFLElBSmlCLENBSVosSUFKWSxDQUFuQjtBQUtBO0FBQ0QsTUFBSXpCLEtBQUs0QyxJQUFMLEtBQWMsS0FBSyxDQUF2QixFQUEwQjtBQUN6QjVDLFFBQUs0QyxJQUFMLENBQVU5RCxPQUFWLENBQWtCLFVBQVNxRCxHQUFULEVBQWE7QUFDOUIsUUFBSTlGLFNBQVMsS0FBS0EsTUFBTCxDQUFZOEYsSUFBSVosR0FBaEIsQ0FBYjtBQUNBLFFBQUlsRyxHQUFHZ0QsSUFBSCxDQUFRQyxNQUFSLENBQWVqQyxNQUFmLENBQXNCaEIsR0FBR2dELElBQUgsQ0FBUUMsTUFBUixDQUFldUMsS0FBckMsTUFBZ0R4RSxNQUFwRCxFQUE0RDtBQUMzREEsWUFBTzhDLElBQVAsQ0FBWUwsT0FBWixDQUFvQixVQUFTSyxJQUFULEVBQWM7QUFDakNBLFdBQUtYLElBQUwsQ0FBVXNCLE1BQVYsR0FBbUIsSUFBbkI7QUFDQVgsV0FBSzRELFdBQUwsR0FBbUIxSCxHQUFHZ0QsSUFBSCxDQUFROEcsSUFBUixDQUFhdkMsSUFBYixDQUFrQndDLE1BQXJDO0FBQ0EsTUFIRDtBQUlBO0FBQ0QsSUFSaUIsQ0FRaEIzRCxJQVJnQixDQVFYLElBUlcsQ0FBbEI7QUFTQTtBQUNELEVBL2FPO0FBZ2JSL0IsU0FBUSxnQkFBU00sSUFBVCxFQUFjO0FBQ3JCLE9BQUszRCxNQUFMLENBQVkyRCxLQUFLdUIsR0FBakIsRUFBc0JDLE9BQXRCLENBQThCeEIsS0FBS0EsSUFBbkM7QUFDQSxFQWxiTztBQW1iUmdCLFVBQVMsaUJBQVNoQixJQUFULEVBQWM7QUFDdEIsT0FBSzNELE1BQUwsQ0FBWTJELElBQVosRUFBa0J3QixPQUFsQixDQUEwQixJQUExQjtBQUNBLEVBcmJPO0FBc2JSTixPQUFNLGdCQUFVO0FBQ2Y3RixLQUFHZ0QsSUFBSCxDQUFRRSxTQUFSLENBQWtCQyxJQUFsQixDQUF1QkMsTUFBdkIsR0FBZ0MsSUFBaEM7QUFDQSxPQUFLTixNQUFMLEdBQWMsS0FBZDtBQUNBLE9BQUtsQyxPQUFMLENBQWE2RCxNQUFiLEdBQXNCLElBQXRCO0FBQ0FvRCxnQkFBYyxLQUFLQyxRQUFuQjtBQUNBOUgsS0FBR29MLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNBLEVBNWJPO0FBNmJSQyxXQUFVLG9CQUFVO0FBQ25CdEwsS0FBR2dELElBQUgsQ0FBUUUsU0FBUixDQUFrQkMsSUFBbEIsQ0FBdUJDLE1BQXZCLEdBQWdDLElBQWhDO0FBQ0EsT0FBS04sTUFBTCxHQUFjLEtBQWQ7QUFDQTlDLEtBQUdnRCxJQUFILENBQVFpQixJQUFSLENBQWEsRUFBQ0UsR0FBRSxFQUFDQyxPQUFNLEVBQUN1QixTQUFRLElBQVQsRUFBUCxFQUFILEVBQWI7QUFDQSxPQUFLL0UsT0FBTCxDQUFhNkQsTUFBYixHQUFzQixJQUF0QjtBQUNBb0QsZ0JBQWMsS0FBS0MsUUFBbkI7QUFDQTlILEtBQUdvTCxRQUFILENBQVlDLFNBQVosQ0FBc0IsVUFBdEI7QUFDQSxFQXBjTztBQXFjUkUsVUFBUyxtQkFBVTtBQUNsQnZMLEtBQUdnRCxJQUFILENBQVFFLFNBQVIsQ0FBa0JDLElBQWxCLENBQXVCQyxNQUF2QixHQUFnQyxJQUFoQztBQUNBLE9BQUtOLE1BQUwsR0FBYyxLQUFkO0FBQ0ErRSxnQkFBYyxLQUFLQyxRQUFuQjtBQUNBOUgsS0FBR29MLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QixFQUFrQyxZQUFVO0FBQzNDckwsTUFBR2dELElBQUgsQ0FBUUMsTUFBUixDQUFlc0ksT0FBZjtBQUNBLEdBRkQ7QUFHQSxFQTVjTztBQTZjUkMsV0FBVSxrQkFBU0MsS0FBVCxFQUFnQjNDLE1BQWhCLEVBQXVCO0FBQ2hDOUksS0FBR2dELElBQUgsQ0FBUWlCLElBQVIsQ0FBYSxFQUFDRSxHQUFFLEVBQUNDLE9BQU0sRUFBQzBFLFFBQU9BLE1BQVIsRUFBUCxFQUFILEVBQWI7QUFDQSxFQS9jTztBQWdkUjRDLFdBQVUsb0JBQVU7QUFDbkIsT0FBS3pKLE1BQUwsQ0FBWXdDLE1BQVosR0FBcUIsQ0FBQyxLQUFLeEMsTUFBTCxDQUFZd0MsTUFBbEM7QUFDQSxFQWxkTztBQW1kUmtILFlBQVcscUJBQVU7QUFDcEIsT0FBSzVMLFVBQUwsQ0FBZ0JvRCxJQUFoQixDQUFxQnNCLE1BQXJCLEdBQThCLENBQUMsS0FBSzFFLFVBQUwsQ0FBZ0JvRCxJQUFoQixDQUFxQnNCLE1BQXBEO0FBQ0EsRUFyZE87QUFzZFJtSCxZQUFXLHFCQUFVO0FBQ3BCLE9BQUs3SyxPQUFMLENBQWEwRCxNQUFiLEdBQXNCLENBQUMsS0FBSzFELE9BQUwsQ0FBYTBELE1BQXBDO0FBQ0EsRUF4ZE87QUF5ZFJvSCxjQUFhLHVCQUFVO0FBQ3RCLE1BQUksS0FBS2hKLEtBQVQsRUFBZ0I7QUFDZixRQUFLQSxLQUFMLEdBQWEsS0FBYjtBQUNBLFFBQUtkLGlCQUFMLENBQXVCMEMsTUFBdkIsR0FBZ0MsS0FBaEM7QUFDQSxHQUhELE1BR0s7QUFDSnpFLE1BQUdnRCxJQUFILENBQVFpQixJQUFSLENBQWEsRUFBQ0UsR0FBRSxFQUFDQyxPQUFNLEVBQUMwSCxVQUFTLElBQVYsRUFBUCxFQUFILEVBQWI7QUFDQSxRQUFLL0osaUJBQUwsQ0FBdUIwQyxNQUF2QixHQUFnQyxJQUFoQztBQUNBLFFBQUs1QixLQUFMLEdBQWEsSUFBYjtBQUNBO0FBQ0QsRUFsZU87QUFtZVJ3QyxXQUFVLGtCQUFTVixJQUFULEVBQWU7QUFDeEIsTUFBSTNELFNBQVMsS0FBS0EsTUFBTCxDQUFZMkQsS0FBS2QsR0FBakIsQ0FBYjtBQUNBLE1BQUksQ0FBQyxDQUFDN0MsTUFBRixJQUFZLENBQUMsQ0FBQzJELEtBQUs0QyxJQUFuQixJQUEyQjVDLEtBQUs0QyxJQUFMLENBQVV3RSxNQUFWLElBQW9CLENBQW5ELEVBQXNEO0FBQ3JEL0ssVUFBT2dMLE1BQVAsR0FBZ0IsSUFBaEI7QUFDQWhMLFVBQU84QyxJQUFQLENBQVlMLE9BQVosQ0FBb0IsVUFBU0ssSUFBVCxFQUFlMkcsS0FBZixFQUFxQjtBQUN4QyxRQUFJbEQsT0FBTzVDLEtBQUs0QyxJQUFMLENBQVVrRCxLQUFWLENBQVg7QUFDQTNHLFNBQUs0RCxXQUFMLEdBQW1CMUgsR0FBR2dELElBQUgsQ0FBUThHLElBQVIsQ0FBYXZDLElBQWIsQ0FBa0I2QyxPQUFsQixDQUEwQjdDLEtBQUtBLElBQS9CLEVBQXFDQSxLQUFLckcsSUFBMUMsQ0FBbkI7QUFDQSxJQUhEO0FBSUE7QUFDRCxFQTVlTztBQTZlUnFFLGVBQWMsc0JBQVNaLElBQVQsRUFBYztBQUMzQixPQUFLaEIsUUFBTCxDQUFjRixPQUFkLENBQXNCLFVBQVNLLElBQVQsRUFBZTJHLEtBQWYsRUFBc0I7QUFDM0MsT0FBSWxELE9BQU81QyxLQUFLOEYsS0FBTCxDQUFYO0FBQ0EsT0FBSSxDQUFDLENBQUNsRCxJQUFOLEVBQVc7QUFDVnpELFNBQUs0RCxXQUFMLEdBQW1CMUgsR0FBR2dELElBQUgsQ0FBUThHLElBQVIsQ0FBYXZDLElBQWIsQ0FBa0I2QyxPQUFsQixDQUEwQjdDLEtBQUtBLElBQS9CLEVBQXFDQSxLQUFLckcsSUFBMUMsQ0FBbkI7QUFDQTtBQUNELEdBTEQ7QUFNQSxFQXBmTztBQXFmUitLLFNBQVEsa0JBQVc7QUFDbEIsTUFBSSxLQUFLM0gsUUFBTCxJQUFpQixDQUFyQixFQUF3QjtBQUN2QixPQUFJNEgsT0FBTyxJQUFJbkUsSUFBSixHQUFXQyxPQUFYLEVBQVg7QUFDQWtFLFVBQU9BLE9BQUssS0FBSzVILFFBQWpCO0FBQ0EsT0FBSTRILFFBQVEsSUFBWixFQUFrQjtBQUNqQixTQUFLNUgsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtrQyxTQUFMO0FBQ0E7QUFDRDtBQUNEO0FBOWZPLENBQVQiLCJmaWxlIjoiUG9rZXIuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFBva2VyIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgICAgICAgID0gcmVxdWlyZSgnSGVscGVyJyksXHJcblx0bm90aWNlICAgICAgICA9IHJlcXVpcmUoJ05vdGljZScpLFxyXG5cdG1vZHVsZV9wbGF5ZXIgPSByZXF1aXJlKCdQb2tlcl9QbGF5ZXInKTtcclxudmFyIHBsYXllcl9uYXAgICAgPSByZXF1aXJlKCdQb2tlck5hcEdhbWUnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHBsYXllcl9uYXA6cGxheWVyX25hcCxcclxuXHRcdGZvbnQxOiBjYy5CaXRtYXBGb250LFxyXG5cdFx0Zm9udDI6IGNjLkJpdG1hcEZvbnQsXHJcblx0XHRub2RlTm90aWNlOiBjYy5Ob2RlLFxyXG5cdFx0cHJlZmFiTm90aWNlOiBjYy5QcmVmYWIsXHJcblx0XHRsb2FkaW5nOiAgIGNjLk5vZGUsXHJcblx0XHRyZWRoYXQ6ICAgIGNjLk5vZGUsXHJcblx0XHRib19iYWk6ICAgIGNjLk5vZGUsXHJcblx0XHRub2Rlb3V0OiAgIGNjLk5vZGUsXHJcblx0XHRub3RpY2U6ICAgIG5vdGljZSxcclxuXHRcdHBsYXllcjoge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogbW9kdWxlX3BsYXllcixcclxuXHRcdH0sXHJcblx0XHRsYWJlbFJvb206ICBjYy5MYWJlbCxcclxuXHRcdG1haW5CZXQ6ICAgIGNjLkxhYmVsLFxyXG5cdFx0bGFiZWxUaW1lU3RhcnQ6IGNjLkxhYmVsLFxyXG5cdFx0cm9vbUNhcmQ6ICAgY2MuTm9kZSxcclxuXHRcdHByZWZhYkNhcmQ6IGNjLk5vZGUsXHJcblxyXG5cdFx0Ym90dG9uOiAgIGNjLk5vZGUsXHJcblx0XHRidG1fYm86ICAgY2MuTm9kZSxcclxuXHRcdGJ0bV94ZW06ICBjYy5Ob2RlLFxyXG5cdFx0YnRtX3RoZW86IGNjLk5vZGUsXHJcblx0XHRidG1fdG86ICAgY2MuTm9kZSxcclxuXHRcdGJ0bV9hbGw6ICBjYy5Ob2RlLFxyXG5cclxuXHRcdG5vZGVQYW5lbENhcmRNYWluOiBjYy5Ob2RlLFxyXG5cdFx0bm9kZUJUTlBhbmU6ICAgICAgIGNjLk5vZGUsXHJcblxyXG5cdFx0bm9kZVRvOiAgIGNjLk5vZGUsXHJcblxyXG5cdFx0c3ByaXRlQWxsOiAgY2MuU3ByaXRlRnJhbWUsXHJcblx0XHRzcHJpdGVIdXk6ICBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdHNwcml0ZVRoZW86IGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0c3ByaXRlWGVtOiAgY2MuU3ByaXRlRnJhbWUsXHJcblx0XHRzcHJpdGVDdW9jOiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdHNwcml0ZVdpbjogIGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0c3ByaXRlTWVXaW46Y2MuU3ByaXRlRnJhbWUsXHJcblx0XHRzcHJpdGVMb3N0OiBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdHNwcml0ZUhvYTogIGNjLlNwcml0ZUZyYW1lLFxyXG5cclxuXHRcdHRpdGxlQ2FyZDoge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcblx0XHR9LFxyXG5cclxuXHRcdHBhbmVsOiBmYWxzZSxcclxuXHRcdGRhdGFPbjogdHJ1ZSxcclxuXHR9LFxyXG5cdG9uTG9hZCgpe1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUgPSB0aGlzO1xyXG5cdFx0Y2MuUmVkVC5NaW5pUGFuZWwubm9kZS5wYXJlbnQgPSB0aGlzLnJlZGhhdDtcclxuXHJcblx0XHR0aGlzLmdhbWVfcGxheWVyID0gbnVsbDtcclxuXHJcblx0XHRjYy5SZWRULmF1ZGlvLmJnLnBhdXNlKCk7XHJcblx0XHQvL2NjLlJlZFQuYXVkaW8uYmcgPSBjYy5SZWRULmF1ZGlvLmJnU2xvdDE7XHJcblxyXG5cdFx0Ly90aGlzLmRpYWxvZy5pbml0KCk7XHJcblx0XHR0aGlzLnBsYXllci5mb3JFYWNoKGZ1bmN0aW9uKHBsYXllcil7XHJcblx0XHRcdHBsYXllci5pbml0KCk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR0aGlzLnJlZFRjYXJkID0gdGhpcy5ub2RlUGFuZWxDYXJkTWFpbi5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oaXRlbSl7XHJcblx0XHRcdHJldHVybiBpdGVtLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y2MuUmVkVC5zZW5kKHtzY2VuZToncG9rZXInLCBnOntwb2tlcjp7aW5nYW1lOnRydWV9fX0pO1xyXG5cdFx0LyoqXHJcblx0XHRpZihjYy5SZWRULmlzU291bmRCYWNrZ3JvdW5kKCkpe1xyXG5cdFx0XHR0aGlzLnBsYXlNdXNpYygpO1xyXG5cdFx0fVxyXG5cdFx0Ki9cclxuXHRcdHRoaXMudGltZVN0b3AgPSAwO1xyXG5cclxuXHRcdGlmIChjYy5SZWRULnVzZXIucmlnaHRzID09IDEpIHtcclxuXHRcdFx0dGhpcy5ub2RlQlROUGFuZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRpZiAoISFkYXRhLm1pbmkpe1xyXG5cdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5vbkRhdGEoZGF0YS5taW5pKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEuVG9wSHUpe1xyXG5cdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5Ub3BIdS5vbkRhdGEoZGF0YS5Ub3BIdSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLnRhaXhpdSl7XHJcblx0XHRcdGNjLlJlZFQuTWluaVBhbmVsLlRhaVhpdS5UWF9NYWluLm9uRGF0YShkYXRhLnRhaXhpdSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnZpcHApIHtcclxuXHRcdFx0Y2MuUmVkVC5NaW5pUGFuZWwuRGlhbG9nLlZpcFBvaW50Lm9uRGF0YShkYXRhLnZpcHApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS51c2VyKXtcclxuXHRcdFx0Y2MuUmVkVC51c2VyRGF0YShkYXRhLnVzZXIpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuZGF0YU9uKSB7XHJcblx0XHRcdGlmICghIWRhdGEudmlld0NhcmQpIHtcclxuXHRcdFx0XHR0aGlzLnZpZXdDYXJkKGRhdGEudmlld0NhcmQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghIWRhdGEubWFpbkNhcmQpIHtcclxuXHRcdFx0XHR0aGlzLnZpZXdNYWluQ2FyZChkYXRhLm1haW5DYXJkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoISFkYXRhLm1lTWFwKSB7XHJcblx0XHRcdFx0dGhpcy5tZU1hcCA9IGRhdGEubWVNYXA7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCEhZGF0YS5pbmZvR2hlKSB7ICAvLyB0aMO0bmcgdGluIGPDoWMgZ2jhur9cclxuXHRcdFx0XHR0aGlzLmluZm9HaGUoZGF0YS5pbmZvR2hlKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoISFkYXRhLmluZm9Sb29tKSB7IC8vIHRow7RuZyB0aW4gcGjDsm5nXHJcblx0XHRcdFx0dGhpcy5pbmZvUm9vbShkYXRhLmluZm9Sb29tKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoISFkYXRhLmluZ2FtZSkgeyAgLy8gY8OzIG5nxrDhu51pIHbDoG8gcGjDsm5nXHJcblx0XHRcdFx0dGhpcy5pbmdhbWUoZGF0YS5pbmdhbWUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghIWRhdGEub3V0Z2FtZSkgeyAgLy8gY8OzIG5nxrDhu51pIHJhIGto4buPaSBwaMOybmdcclxuXHRcdFx0XHR0aGlzLm91dGdhbWUoZGF0YS5vdXRnYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoISFkYXRhLmdhbWUpIHtcclxuXHRcdFx0XHR0aGlzLmdhbWUoZGF0YS5nYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoISFkYXRhLmtpY2spIHtcclxuXHRcdFx0XHR0aGlzLmtpY2soKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm5vdGljZSl7XHJcblx0XHRcdFx0dGhpcy5ub3RpY2Uuc2hvdyhkYXRhLm5vdGljZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5sb2FkKXtcclxuXHRcdFx0XHR0aGlzLmxvYWRpbmcuYWN0aXZlID0gZGF0YS5sb2FkO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGEubmFwKXtcclxuXHRcdFx0XHR0aGlzLnBsYXllcl9uYXAubm9kZS5hY3RpdmUgPSBkYXRhLm5hcDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0Z2FtZVN0YXJ0OiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihwbGF5ZXIpe1xyXG5cdFx0XHR0aGlzLnBsYXllcltwbGF5ZXIuZ2hlXS5zZXRJbmZvKHBsYXllci5kYXRhKTtcclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fSxcclxuXHRnYW1lUGxheWVyOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllcltkYXRhLmdoZV07XHJcblx0XHRpZiAoZGF0YS5kYXRhICE9PSB2b2lkIDApIHtcclxuXHRcdFx0cGxheWVyLnNldEluZm8oZGF0YS5kYXRhKTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLmluZm8gIT09IHZvaWQgMCkge1xyXG5cdFx0XHRwbGF5ZXIuaW5mb0dhbWUoZGF0YS5pbmZvKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHJlc2V0R2FtZTogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMudGltZVN0b3AgPSAwO1xyXG5cdFx0Ly9pZiAoISF0aGlzLm1haW5CZXQpIHtcclxuXHRcdFx0dGhpcy5tYWluQmV0LnN0cmluZyA9ICcnO1xyXG5cdFx0XHR0aGlzLnJvb21DYXJkLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG5cdFx0XHR0aGlzLm5vZGVOb3RpY2UuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcblx0XHRcdE9iamVjdC52YWx1ZXModGhpcy5wbGF5ZXIpLmZvckVhY2goZnVuY3Rpb24ocGxheWVyKXtcclxuXHRcdFx0XHRwbGF5ZXIucmVzZXRHYW1lKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0Ly99XHJcblx0fSxcclxuXHRnYW1lSW5mbzogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRkYXRhLmRhdGEuZm9yRWFjaChmdW5jdGlvbihwbGF5ZXIpe1xyXG5cdFx0XHRsZXQgb2JqID0gdGhpcy5wbGF5ZXJbcGxheWVyLmdoZV07XHJcblx0XHRcdGlmIChwbGF5ZXIuZGF0YSAhPT0gdm9pZCAwKSB7XHJcblx0XHRcdFx0b2JqLnNldEluZm8ocGxheWVyLmRhdGEsICEhZGF0YS53aW4pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwbGF5ZXIuaW5mbyAhPT0gdm9pZCAwKSB7XHJcblx0XHRcdFx0b2JqLmluZm9HYW1lKHBsYXllci5pbmZvKTtcclxuXHRcdFx0fVxyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdGlmKCEhZGF0YS53aW4pe1xyXG5cdFx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdGNjLmRlbGF5VGltZSgxKSxcclxuXHRcdFx0XHRjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdE9iamVjdC52YWx1ZXModGhpcy5wbGF5ZXIpLmZvckVhY2goZnVuY3Rpb24ocGxheWVyKXtcclxuXHRcdFx0XHRcdFx0cGxheWVyLml0ZW0uZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuXHRcdFx0XHRcdFx0XHRpdGVtLm5vZGUuY29sb3IgPSBpdGVtLm5vZGUuY29sb3IuZnJvbUhFWCgnOTk5OTk5Jyk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR0aGlzLnJvb21DYXJkLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcblx0XHRcdFx0XHRcdGl0ZW0uY2hpbGRyZW5bMF0uY29sb3IgPSBpdGVtLmNoaWxkcmVuWzBdLmNvbG9yLmZyb21IRVgoJzk5OTk5OScpO1xyXG5cdFx0XHRcdFx0XHRkYXRhLndpbi5iby5mb3JFYWNoKGZ1bmN0aW9uKGJvKXtcclxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS5jYXJkLmNhcmQgPT0gYm8uY2FyZCAmJiBpdGVtLmNhcmQudHlwZSA9PSBiby50eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpdGVtLmNoaWxkcmVuWzBdLmNvbG9yID0gaXRlbS5jaGlsZHJlblswXS5jb2xvci5mcm9tSEVYKCdGRkZGRkYnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJbZGF0YS53aW4uZ2hlXTtcclxuXHRcdFx0XHRcdHBsYXllci5pdGVtLmZvckVhY2goZnVuY3Rpb24oaXRlbSl7XHJcblx0XHRcdFx0XHRcdGlmICghIWl0ZW0uYmFpKSB7XHJcblx0XHRcdFx0XHRcdFx0ZGF0YS53aW4uYm8uZm9yRWFjaChmdW5jdGlvbihibyl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoaXRlbS5iYWkuY2FyZCA9PSBiby5jYXJkICYmIGl0ZW0uYmFpLnR5cGUgPT0gYm8udHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpdGVtLm5vZGUuY29sb3IgPSBpdGVtLm5vZGUuY29sb3IuZnJvbUhFWCgnRkZGRkZGJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0aWYgKGRhdGEud2luLmNvZGUgPT0gMikge1xyXG5cdFx0XHRcdFx0XHQvLyDEkMO0aVxyXG5cdFx0XHRcdFx0XHRwbGF5ZXIudGl0bGVDYXJkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyLnRpdGxlQ2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMudGl0bGVDYXJkWzBdO1xyXG5cdFx0XHRcdFx0fWVsc2UgaWYgKGRhdGEud2luLmNvZGUgPT0gMykge1xyXG5cdFx0XHRcdFx0XHQvLyAyIMSRw7RpIChUaMO6KVxyXG5cdFx0XHRcdFx0XHRwbGF5ZXIudGl0bGVDYXJkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyLnRpdGxlQ2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMudGl0bGVDYXJkWzFdO1xyXG5cdFx0XHRcdFx0fWVsc2UgaWYgKGRhdGEud2luLmNvZGUgPT0gNCkge1xyXG5cdFx0XHRcdFx0XHQvLyBTw6FtXHJcblx0XHRcdFx0XHRcdHBsYXllci50aXRsZUNhcmQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRwbGF5ZXIudGl0bGVDYXJkLnNwcml0ZUZyYW1lID0gdGhpcy50aXRsZUNhcmRbMl07XHJcblx0XHRcdFx0XHR9ZWxzZSBpZiAoZGF0YS53aW4uY29kZSA9PSA1KSB7XHJcblx0XHRcdFx0XHRcdC8vIFPhuqNuaFxyXG5cdFx0XHRcdFx0XHRwbGF5ZXIudGl0bGVDYXJkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyLnRpdGxlQ2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMudGl0bGVDYXJkWzNdO1xyXG5cdFx0XHRcdFx0fWVsc2UgaWYgKGRhdGEud2luLmNvZGUgPT0gNikge1xyXG5cdFx0XHRcdFx0XHQvLyBUaMO5bmdcclxuXHRcdFx0XHRcdFx0cGxheWVyLnRpdGxlQ2FyZC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHBsYXllci50aXRsZUNhcmQuc3ByaXRlRnJhbWUgPSB0aGlzLnRpdGxlQ2FyZFs0XTtcclxuXHRcdFx0XHRcdH1lbHNlIGlmIChkYXRhLndpbi5jb2RlID09IDcpIHtcclxuXHRcdFx0XHRcdFx0Ly8gQ8O5IEzFqVxyXG5cdFx0XHRcdFx0XHRwbGF5ZXIudGl0bGVDYXJkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyLnRpdGxlQ2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMudGl0bGVDYXJkWzVdO1xyXG5cdFx0XHRcdFx0fWVsc2UgaWYgKGRhdGEud2luLmNvZGUgPT0gOCkge1xyXG5cdFx0XHRcdFx0XHQvLyBU4bupIFF1w71cclxuXHRcdFx0XHRcdFx0cGxheWVyLnRpdGxlQ2FyZC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdHBsYXllci50aXRsZUNhcmQuc3ByaXRlRnJhbWUgPSB0aGlzLnRpdGxlQ2FyZFs2XTtcclxuXHRcdFx0XHRcdH1lbHNlIGlmIChkYXRhLndpbi5jb2RlID09IDkpIHtcclxuXHRcdFx0XHRcdFx0Ly8gU+G6o25oIFRow7luZ1xyXG5cdFx0XHRcdFx0XHRwbGF5ZXIudGl0bGVDYXJkLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0cGxheWVyLnRpdGxlQ2FyZC5zcHJpdGVGcmFtZSA9IHRoaXMudGl0bGVDYXJkWzddO1xyXG5cdFx0XHRcdFx0fWVsc2UgaWYgKGRhdGEud2luLmNvZGUgPT0gMTApIHtcclxuXHRcdFx0XHRcdFx0Ly8gVGjDuW5nIFBow6EgU+G6o25oXHJcblx0XHRcdFx0XHRcdHBsYXllci50aXRsZUNhcmQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRwbGF5ZXIudGl0bGVDYXJkLnNwcml0ZUZyYW1lID0gdGhpcy50aXRsZUNhcmRbOF07XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgdGhpcyksXHJcblx0XHRcdCkpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0Z2FtZVN0b3A6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm9mZlNlbGVjdCgpO1xyXG5cdFx0dGhpcy5sYWJlbFRpbWVTdGFydC5zdHJpbmcgPSAnJztcclxuXHRcdHRoaXMubGFiZWxUaW1lU3RhcnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5yZWdUaW1lMSk7XHJcblx0XHR0aGlzLnRpbWVTdG9wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0fSxcclxuXHRvZmZTZWxlY3Q6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZiAoISF0aGlzLmdhbWVfcGxheWVyKSB7XHJcblx0XHRcdHRoaXMuZ2FtZV9wbGF5ZXIuaXNVcGRhdGUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5nYW1lX3BsYXllci5wcm9ncmVzc1RpbWUgPSAwO1xyXG5cdFx0XHR0aGlzLmdhbWVfcGxheWVyLlByb2dyZXNzLnByb2dyZXNzID0gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuYm90dG9uLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5ub2RlVG8uYWN0aXZlID0gZmFsc2U7XHJcblx0fSxcclxuXHRnYW1lOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmICghIWRhdGEuc3RhcnQpIHtcclxuXHRcdFx0dGhpcy5nYW1lU3RhcnQoZGF0YS5zdGFydCk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLnN0b3ApIHtcclxuXHRcdFx0dGhpcy5nYW1lU3RvcCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5maW5pc2gpIHtcclxuXHRcdFx0dGhpcy5nYW1lU3RvcCgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5jaGlhX2JhaSkge1xyXG5cdFx0XHR0aGlzLkNoaWFCYWkoZGF0YS5jaGlhX2JhaSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLnR1cm4pIHtcclxuXHRcdFx0dGhpcy5MdW90Q2hvaShkYXRhLnR1cm4pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5pbmZvKSB7XHJcblx0XHRcdHRoaXMuZ2FtZUluZm8oZGF0YS5pbmZvKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEucGxheWVyKSB7XHJcblx0XHRcdHRoaXMuZ2FtZVBsYXllcihkYXRhLnBsYXllcik7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLm9mZkQpIHtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhLm9mZlNlbGVjdCAhPT0gdm9pZCAwKSB7XHJcblx0XHRcdHRoaXMub2ZmU2VsZWN0KCk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLmNhcmQpIHtcclxuXHRcdFx0Ly8gdGjhursgYsOgaSB0csOqbiBiw6BuXHJcblx0XHRcdHRoaXMubWFpbkNhcmQoZGF0YS5jYXJkKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdEx1b3RDaG9pOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllcltkYXRhLmdoZV07XHJcblx0XHRpZiAoISF0aGlzLmdhbWVfcGxheWVyKSB7XHJcblx0XHRcdHRoaXMuZ2FtZV9wbGF5ZXIuaXNVcGRhdGUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5nYW1lX3BsYXllci5wcm9ncmVzc1RpbWUgPSAwO1xyXG5cdFx0XHR0aGlzLmdhbWVfcGxheWVyLlByb2dyZXNzLnByb2dyZXNzID0gMDtcclxuXHRcdH1cclxuXHRcdHRoaXMuZ2FtZV9wbGF5ZXIgPSBwbGF5ZXI7XHJcblx0XHRwbGF5ZXIuc3RhcnRQcm9ncmVzcyhkYXRhLnByb2dyZXNzKTtcclxuXHRcdGlmIChkYXRhLnNlbGVjdCAhPT0gdm9pZCAwKSB7XHJcblx0XHRcdHRoaXMuYm90dG9uLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGlmIChkYXRhLnNlbGVjdC54ZW0pIHtcclxuXHRcdFx0XHR0aGlzLmJ0bV94ZW0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5idG1feGVtLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnNlbGVjdC50aGVvKSB7XHJcblx0XHRcdFx0dGhpcy5idG1fdGhlby5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmJ0bV90aGVvLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnNlbGVjdC50bykge1xyXG5cdFx0XHRcdHRoaXMuYnRtX3RvLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuYnRtX3RvLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkYXRhLnNlbGVjdC5hbGwpIHtcclxuXHRcdFx0XHR0aGlzLmJ0bV9hbGwuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5idG1fYWxsLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5ib3R0b24uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubm9kZVRvLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWFpbkNhcmQ6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0bGV0IHRpbWUgPSAwLjE7XHJcblx0XHRsZXQgcG9zaXRpb24gPSB0aGlzLmJvX2JhaS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRoaXMuYm9fYmFpLnBvc2l0aW9uKTtcclxuXHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihjYXJkKXtcclxuXHRcdFx0bGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYkNhcmQpO1xyXG5cdFx0XHR0aGlzLnJvb21DYXJkLmFkZENoaWxkKG5vZGUpO1xyXG5cdFx0XHRsZXQgY29tcG9uZW50ID0gbm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuXHRcdFx0Y29tcG9uZW50Lm5vZGUucnVuQWN0aW9uKFxyXG5cdFx0XHRcdGNjLnNlcXVlbmNlKFxyXG5cdFx0XHRcdFx0Y2MuZGVsYXlUaW1lKHRpbWUpLFxyXG5cdFx0XHRcdFx0Y2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50Lm5vZGUucG9zaXRpb24gPSBjb21wb25lbnQubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG5cdFx0XHRcdFx0XHRjb21wb25lbnQubm9kZS5zY2FsZVggPSB0aGlzLmJvX2JhaS53aWR0aC9jb21wb25lbnQubm9kZS53aWR0aDtcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50Lm5vZGUuc2NhbGVZID0gdGhpcy5ib19iYWkuaGVpZ2h0L2NvbXBvbmVudC5ub2RlLmhlaWdodDtcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50LnNwcml0ZUZyYW1lID0gY2MuUmVkVC51dGlsLmNhcmQuY2FyZEIxO1xyXG5cdFx0XHRcdFx0fSwgdGhpcyksXHJcblx0XHRcdFx0XHRjYy5zcGF3bihjYy5tb3ZlVG8oMC4xLCBjYy52MigwLDApKSwgY2Muc2NhbGVUbygwLjEsIDEpKSxcclxuXHRcdFx0XHRcdGNjLmRlbGF5VGltZSgwLjEpLFxyXG5cdFx0XHRcdFx0Y2Muc2NhbGVUbygwLjEsIDAsIDEpLFxyXG5cdFx0XHRcdFx0Y2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0Y29tcG9uZW50LnNwcml0ZUZyYW1lID0gY2MuUmVkVC51dGlsLmNhcmQuZ2V0Q2FyZChjYXJkLmNhcmQsIGNhcmQudHlwZSk7XHJcblx0XHRcdFx0XHRcdG5vZGUuY2FyZCA9IGNhcmQ7XHJcblx0XHRcdFx0XHRcdGNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRcdFx0XHRcdGNhcmQgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRub2RlID0gbnVsbDtcclxuXHRcdFx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHRcdFx0Y2Muc2NhbGVUbygwLjEsIDEsIDEpXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aW1lICs9IDAuMTtcclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fSxcclxuXHRDaGlhQmFpOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGxldCB0aW1lID0gMDtcclxuXHRcdGZvciAobGV0IGNhcmQgPSAwOyBjYXJkIDwgMjsgY2FyZCsrKSB7XHJcblx0XHRcdGRhdGEuZm9yRWFjaChmdW5jdGlvbihiYWkpe1xyXG5cdFx0XHRcdHRoaXMucGxheWVyW2JhaS5pZF0uQ2hpYUJhaShiYWksIGNhcmQsIHRpbWUpO1xyXG5cdFx0XHRcdHRpbWUgKz0gMC4wNTtcclxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdGluZm9HaGU6IGZ1bmN0aW9uKGluZm8pe1xyXG5cdFx0bGV0IHBsYXllciA9IHt9O1xyXG5cdFx0bGV0IG5ld0doZSA9IFtdO1xyXG5cdFx0aWYgKHRoaXMubWVNYXAgIT0gMSkge1xyXG5cdFx0XHRsZXQgbWFwID0gdGhpcy5tZU1hcC0xO1xyXG5cdFx0XHRuZXdHaGUgPSBuZXdHaGUuY29uY2F0KGluZm8uc2xpY2UobWFwKSxpbmZvLnNsaWNlKDAsIG1hcCkpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdG5ld0doZSA9IGluZm87XHJcblx0XHR9XHJcblx0XHRuZXdHaGUuZm9yRWFjaChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuXHRcdFx0bGV0IGl0ZW0gPSB0aGlzLnBsYXllcltpbmRleF07XHJcblx0XHRcdGl0ZW0ubWFwID0gb2JqLmdoZTtcclxuXHRcdFx0cGxheWVyW29iai5naGVdID0gaXRlbTtcclxuXHRcdFx0aXRlbS5zZXRJbmZvKG9iai5kYXRhKTtcclxuXHRcdFx0cmV0dXJuIHZvaWQgMDtcclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHR0aGlzLnBsYXllciA9IHBsYXllcjtcclxuXHRcdHBsYXllciA9IG51bGw7XHJcblx0XHRuZXdHaGUgPSBudWxsO1xyXG5cdH0sXHJcblx0aW5mb1Jvb206IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0aWYgKGRhdGEuZ2FtZSAhPT0gdm9pZCAwKSB7XHJcblx0XHRcdHRoaXMubGFiZWxSb29tLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEuZ2FtZSk7XHJcblx0XHRcdHRoaXMucGxheWVyX25hcC5pbml0KGRhdGEuZ2FtZSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5iZXQgIT09IHZvaWQgMCkge1xyXG5cdFx0XHR0aGlzLm1haW5CZXQuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5iZXQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEuaXNTdG9wICE9PSB2b2lkIDApIHtcclxuXHRcdFx0dGhpcy5sYWJlbFRpbWVTdGFydC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMucmVnVGltZTEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEuaXNQbGF5ID09IHRydWUgJiYgZGF0YS50aW1lX3N0YXJ0ICE9PSB2b2lkIDApIHtcclxuXHRcdFx0dGhpcy5yZXNldEdhbWUoKTtcclxuXHRcdFx0dGhpcy50aW1lX3N0YXJ0ID0gZGF0YS50aW1lX3N0YXJ0Pj4wO1xyXG5cdFx0XHR0aGlzLmxhYmVsVGltZVN0YXJ0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5sYWJlbFRpbWVTdGFydC5zdHJpbmcgPSAnJztcclxuXHRcdFx0dGhpcy5yZWdUaW1lMSA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhpcy5sYWJlbFRpbWVTdGFydC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyUGFkKHRoaXMudGltZV9zdGFydCwgMik7XHJcblx0XHRcdFx0aWYgKHRoaXMudGltZV9zdGFydCA8IDApIHtcclxuXHRcdFx0XHRcdHRoaXMubGFiZWxUaW1lU3RhcnQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5yZWdUaW1lMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMudGltZV9zdGFydC0tO1xyXG5cdFx0XHR9LmJpbmQodGhpcyksIDEwMDApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEuZmlyc3QgIT09IHZvaWQgMCkge1xyXG5cdFx0XHRkYXRhLmZpcnN0LmZvckVhY2goZnVuY3Rpb24ocGxheWVyKXtcclxuXHRcdFx0XHRsZXQgZ2V0X3BsYXllciA9IHRoaXMucGxheWVyW3BsYXllci5pZF07XHJcblx0XHRcdFx0Z2V0X3BsYXllci5ub3RpY2VCZXQocGxheWVyLmJldCwgJycsIDIsIDIyLCBjYy5SZWRULmluR2FtZS5mb250MSk7XHJcblx0XHRcdFx0Z2V0X3BsYXllci5iZXQuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMocGxheWVyLmJldCk7XHJcblx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0XHRpZiAoZGF0YS5jYXJkICE9PSB2b2lkIDApIHtcclxuXHRcdFx0ZGF0YS5jYXJkLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0XHRsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJbb2JqLmdoZV07XHJcblx0XHRcdFx0aWYgKGNjLlJlZFQuaW5HYW1lLnBsYXllcltjYy5SZWRULmluR2FtZS5tZU1hcF0gIT09IHBsYXllcikge1xyXG5cdFx0XHRcdFx0cGxheWVyLml0ZW0uZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuXHRcdFx0XHRcdFx0aXRlbS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHRcdGl0ZW0uc3ByaXRlRnJhbWUgPSBjYy5SZWRULnV0aWwuY2FyZC5jYXJkQjE7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRpbmdhbWU6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5wbGF5ZXJbZGF0YS5naGVdLnNldEluZm8oZGF0YS5kYXRhKTtcclxuXHR9LFxyXG5cdG91dGdhbWU6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5wbGF5ZXJbZGF0YV0uc2V0SW5mbyhudWxsKTtcclxuXHR9LFxyXG5cdGtpY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULk1pbmlQYW5lbC5ub2RlLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGFPbiA9IGZhbHNlO1xyXG5cdFx0dGhpcy5sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMucmVnVGltZTEpO1xyXG5cdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWluR2FtZScpO1xyXG5cdH0sXHJcblx0YmFja0dhbWU6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULk1pbmlQYW5lbC5ub2RlLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGFPbiA9IGZhbHNlO1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtnOntwb2tlcjp7b3V0Z2FtZTp0cnVlfX19KTtcclxuXHRcdHRoaXMubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnJlZ1RpbWUxKTtcclxuXHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbkdhbWUnKTtcclxuXHR9LFxyXG5cdHNpZ25PdXQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULk1pbmlQYW5lbC5ub2RlLnBhcmVudCA9IG51bGw7XHJcblx0XHR0aGlzLmRhdGFPbiA9IGZhbHNlO1xyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLnJlZ1RpbWUxKTtcclxuXHRcdGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnTWFpbkdhbWUnLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5zaWduT3V0KCk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uU2VsZWN0OiBmdW5jdGlvbihldmVudCwgc2VsZWN0KXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7Zzp7cG9rZXI6e3NlbGVjdDpzZWxlY3R9fX0pO1xyXG5cdH0sXHJcblx0dG9nZ2xlVG86IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm5vZGVUby5hY3RpdmUgPSAhdGhpcy5ub2RlVG8uYWN0aXZlO1xyXG5cdH0sXHJcblx0dG9nZ2xlTmFwOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5wbGF5ZXJfbmFwLm5vZGUuYWN0aXZlID0gIXRoaXMucGxheWVyX25hcC5ub2RlLmFjdGl2ZTtcclxuXHR9LFxyXG5cdHRvZ2dsZU91dDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMubm9kZW91dC5hY3RpdmUgPSAhdGhpcy5ub2Rlb3V0LmFjdGl2ZTtcclxuXHR9LFxyXG5cdHRvZ2dsZVBhbmVsOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYgKHRoaXMucGFuZWwpIHtcclxuXHRcdFx0dGhpcy5wYW5lbCA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm5vZGVQYW5lbENhcmRNYWluLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNjLlJlZFQuc2VuZCh7Zzp7cG9rZXI6e21haW5jYXJkOnRydWV9fX0pO1xyXG5cdFx0XHR0aGlzLm5vZGVQYW5lbENhcmRNYWluLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMucGFuZWwgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dmlld0NhcmQ6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGxldCBwbGF5ZXIgPSB0aGlzLnBsYXllcltkYXRhLm1hcF07XHJcblx0XHRpZiAoISFwbGF5ZXIgJiYgISFkYXRhLmNhcmQgJiYgZGF0YS5jYXJkLmxlbmd0aCA9PSAyKSB7XHJcblx0XHRcdHBsYXllci5pc09wZW4gPSB0cnVlO1xyXG5cdFx0XHRwbGF5ZXIuaXRlbS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIGluZGV4KXtcclxuXHRcdFx0XHRsZXQgY2FyZCA9IGRhdGEuY2FyZFtpbmRleF07XHJcblx0XHRcdFx0aXRlbS5zcHJpdGVGcmFtZSA9IGNjLlJlZFQudXRpbC5jYXJkLmdldENhcmQoY2FyZC5jYXJkLCBjYXJkLnR5cGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHZpZXdNYWluQ2FyZDogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLnJlZFRjYXJkLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuXHRcdFx0bGV0IGNhcmQgPSBkYXRhW2luZGV4XTtcclxuXHRcdFx0aWYgKCEhY2FyZCl7XHJcblx0XHRcdFx0aXRlbS5zcHJpdGVGcmFtZSA9IGNjLlJlZFQudXRpbC5jYXJkLmdldENhcmQoY2FyZC5jYXJkLCBjYXJkLnR5cGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHVwZGF0ZTogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAodGhpcy50aW1lU3RvcCAhPSAwKSB7XHJcblx0XHRcdGxldCBkYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcblx0XHRcdGRhdGUgPSBkYXRlLXRoaXMudGltZVN0b3A7XHJcblx0XHRcdGlmIChkYXRlID49IDgwMDApIHtcclxuXHRcdFx0XHR0aGlzLnRpbWVTdG9wID0gMDtcclxuXHRcdFx0XHR0aGlzLnJlc2V0R2FtZSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59KTtcclxuIl19