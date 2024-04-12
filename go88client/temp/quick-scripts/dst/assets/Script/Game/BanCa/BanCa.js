
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/BanCa.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b34005eh71HPbT5/RyPr16x', 'BanCa');
// Script/Game/BanCa/BanCa.js

'use strict';

var helper = require('Helper');
var notice = require('Notice');
var dialog = require('BanCa_dialog');

var Player = require('Fish_player');
var Game = require('Fish_game');

cc.Class({
	extends: cc.Component,

	properties: {
		avatar: cc.Sprite,

		audioClick: cc.AudioSource,
		audioPhao: cc.AudioSource,
		audioFire: cc.AudioSource,

		audioJiaqian: cc.AudioSource,
		audioReward1: cc.AudioSource,
		audioReward2: cc.AudioSource,
		audioReward3: cc.AudioSource,

		nodeHome: cc.Node,
		nodeGame: cc.Node,
		nick: cc.Label,
		balans: cc.Label,
		loading: cc.Node,
		notice: notice,
		dialog: dialog,
		Game: Game,
		players: {
			default: [],
			type: Player
		},
		typeBet1: {
			default: [],
			type: cc.String
		},
		typeBet2: {
			default: [],
			type: cc.String
		},
		typeBet3: {
			default: [],
			type: cc.String
		},

		anim_canh: {
			default: [],
			type: cc.String
		},
		anim_sung: {
			default: [],
			type: cc.String
		},
		cointMe: cc.SpriteFrame,
		cointOther: cc.SpriteFrame
	},
	onLoad: function onLoad() {
		this.volumeNhacNen = 0;
		this.volumeHieuUng = 0;

		cc.RedT.audio.bg.pause();
		cc.RedT.audio.bg = cc.RedT.audio.fishHall;

		cc.RedT.inGame = this;
		cc.RedT.send({ scene: 'bc' });

		this.nick.string = cc.RedT.user.name;
		this.balans.string = helper.numberWithCommas(cc.RedT.user.red);
		this.players.forEach(function (obj) {
			obj.init(this);
		}.bind(this));
		this.Game.init(this);

		this.PhysicsManager = cc.director.getPhysicsManager();
		this.PhysicsManager.enabled = true;
		this.PhysicsManager.gravity = cc.v2();

		this.CollisionManager = cc.director.getCollisionManager();
		this.CollisionManager.enabled = true;

		this.dialog.init();
		this.room = { 1: 100, 2: 500, 3: 1000 }; // phòng 100 - 500 - 1000

		this.setAvatar(cc.RedT.user.avatar);
	},
	setAvatar: function setAvatar(data) {
		data = data >> 0;
		if (cc.RedT.avatars[data] !== void 0) {
			this.avatar.spriteFrame = cc.RedT.avatars[data];
		} else {
			this.avatar.spriteFrame = cc.RedT.avatars[0];
		}
	},
	onRegGame: function onRegGame(event) {
		this.playClick();
		this.regGame = event.target.name;
		this.dialog.showNap();
	},
	onData: function onData(data) {
		if (void 0 !== data.fish) {
			this.fishData(data.fish);
		}
		if (void 0 !== data.fishs) {
			this.fishsData(data.fishs);
		}
		if (void 0 !== data.round) {
			this.round();
		}
		if (void 0 !== data.scene) {
			this.scene(data.scene);
		}
		if (void 0 !== data.meMap) {
			this.MeMap = data.meMap;
			this.dataMeMap(data.meMap);
		}
		if (void 0 !== data.infoGhe) {
			this.dataInfoGhe(data.infoGhe);
		}
		if (void 0 !== data.ingame) {
			this.dataIngame(data.ingame);
		}
		if (void 0 !== data.outgame) {
			this.dataOutGame(data.outgame);
		}
		if (void 0 !== data.other) {
			this.dataOther(data.other);
		}
		if (void 0 !== data.me) {
			this.dataMe(data.me);
		}
		if (void 0 !== data.otherEat) {
			this.otherEat(data.otherEat);
		}
		if (void 0 !== data.meEat) {
			this.meEat(data.meEat);
		}
		if (void 0 !== data.lock) {
			this.fishLock(data.lock);
		}
		if (void 0 !== data.unlock) {
			this.fishUnLock(data.unlock);
		}
		if (void 0 !== data.notice) {
			this.notice.show(data.notice);
		}
		if (void 0 !== data.log) {
			this.dialog.Fish_history.onData(data.log);
		}
		if (void 0 !== data.user) {
			cc.RedT.userData(data.user);
		}
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
	},
	round: function round() {
		this.fish = {};
		this.Game.nodeFish.destroyAllChildren();
		var hailang = cc.instantiate(this.Game.ef_hailang);
		hailang = hailang.getComponent(dragonBones.ArmatureDisplay);
		this.Game.nodeFish.addChild(hailang.node);
		hailang.playAnimation('hailang', 1);
		hailang.on(dragonBones.EventObject.COMPLETE, function () {
			this.node.destroy();
		}, hailang);
	},
	otherEat: function otherEat(data) {
		var fish = this.Game.fish[data.id];
		if (void 0 !== fish) {
			var position = fish.node.position;
			if (fish.inGroup) {
				var scaleX = fish.node.parent.scaleX;
				var angle = fish.node.parent.angle;
				position = fish.getPosition();
				this.Game.nodeFish.insertChild(fish.node);
				fish.node.position = position;
				fish.node.scaleX = scaleX;
				fish.node.angle = angle;
			}
			fish.PhaHuy();
			var player = this.players[data.map - 1];
			var efcoint = this.Game.efcoint[fish.node.fish];
			var ef = Math.floor(Math.random() * (efcoint.max - efcoint.min + 1)) + efcoint.min;
			for (var i = 0; i < ef; i++) {
				var coint = cc.instantiate(this.Game.cointOther);
				coint = coint.getComponent('fish_EFcoint');
				coint.init(player, position, efcoint);
			}
			var money = cc.instantiate(this.Game.labelOther);
			money = money.getComponent(cc.Label);
			money.string = helper.numberWithCommas(data.money);
			money.node.position = position;
			this.Game.nodeLabel.addChild(money.node);
			player.balans.string = helper.numberWithCommas(data.m);
			fish.node.runAction(cc.sequence(cc.delayTime(0.6), cc.spawn(cc.scaleTo(0.1, fish.node.scaleX * 0.3, 0.3), cc.fadeTo(0.1, 50)), cc.callFunc(function () {
				this.onDelete();
			}, fish)));

			// Audio
			var copy = cc.instantiate(this.audioJiaqian.node);
			copy = copy.getComponent(cc.AudioSource);
			copy.volume = this.volumeHieuUng;
			this.Game.nodeAudio.addChild(copy.node);
			copy.play();
			this.EFBom(efcoint.ef, position);
		}
	},
	meEat: function meEat(data) {
		var fish = this.Game.fish[data.id];
		if (void 0 !== fish) {
			var position = fish.node.position;
			if (fish.inGroup) {
				var scaleX = fish.node.parent.scaleX;
				var angle = fish.node.parent.angle;
				position = fish.getPosition();
				this.Game.nodeFish.insertChild(fish.node);
				fish.node.position = position;
				fish.node.scaleX = scaleX;
				fish.node.angle = angle;
			}
			fish.PhaHuy();
			var efcoint = this.Game.efcoint[fish.node.fish];
			var ef = Math.floor(Math.random() * (efcoint.max - efcoint.min + 1)) + efcoint.min;
			for (var i = 0; i < ef; i++) {
				var coint = cc.instantiate(this.Game.cointMe);
				coint = coint.getComponent('fish_EFcoint');
				coint.init(this.Game.player, position, efcoint);
			}
			var money = cc.instantiate(this.Game.labelMe);
			money = money.getComponent(cc.Label);
			money.string = helper.numberWithCommas(data.money);
			money.node.position = position;
			this.Game.nodeLabel.addChild(money.node);
			this.Game.player.money = data.m;
			this.Game.player.balans.string = helper.numberWithCommas(data.m);
			fish.node.runAction(cc.sequence(cc.delayTime(0.7), cc.spawn(cc.scaleTo(0.2, fish.node.scaleX * 0.3, 0.3), cc.fadeTo(0.2, 50)), cc.callFunc(function () {
				this.onDelete();
			}, fish)));

			// Audio
			var copy = cc.instantiate(this.audioReward1.node);
			copy = copy.getComponent(cc.AudioSource);
			copy.volume = this.volumeHieuUng;
			this.Game.nodeAudio.addChild(copy.node);
			copy.play();
			this.EFBom(efcoint.ef, position);
		}
	},
	fishData: function fishData(data) {
		var fishs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		if (data) {
			if (void 0 !== data.g) {
				var fish = cc.instantiate(this.Game['x' + data.g]);
				fish = fish.getComponent('Fish_fish_group');
				fish.init(this.Game, data);
				this.Game.nodeFish.addChild(fish.node);
			} else {
				var fish = cc.instantiate(this.Game.fishPrefab[data.f - 1]);
				fish = fish.getComponent('Fish_fish');
				fish.init(this.Game, data);
				this.Game.fish[data.id] = fish;
				this.Game.nodeFish.addChild(fish.node);
			}
			if (fishs && fishs.t !== void 0) {
				fish.node.runAction(cc.sequence(cc.delayTime(fishs.t), cc.callFunc(function () {
					fishs.c++;
					if (fishs.c < fishs.f.length) {
						this.fishData(fishs.f[fishs.c], fishs);
					}
				}, this)));
			}
		}
	},
	fishsData: function fishsData(data) {
		if (data.t !== void 0) {
			this.fishsComp(data);
		} else if (!!data.fs) {
			data.fs.forEach(function (fish) {
				if (fish.t !== void 0) {
					this.fishsComp(fish);
				} else {
					this.fishData(fish);
				}
			}.bind(this));
		} else {
			data.f.forEach(function (fish) {
				this.fishData(fish);
			}.bind(this));
		}
	},
	fishsComp: function fishsComp(data) {
		data.c = 0;
		this.fishData(data.f[0], data);
	},
	EFBom: function EFBom(ef, position) {
		if (ef === 2) {
			var Audio2 = cc.instantiate(this.audioReward2.node);
			Audio2 = Audio2.getComponent(cc.AudioSource);
			Audio2.volume = this.volumeHieuUng;
			this.Game.nodeAudio.addChild(Audio2.node);
			Audio2.play();
			var EF2 = cc.instantiate(this.Game.ef_bom);
			EF2.position = position;
			this.Game.nodeEF.addChild(EF2);
			///**
			if (!cc.sys.isBrowser) {
				jsb.reflection.callStaticMethod('org/cocos2dx/javascript/Rumble', 'once', '(I)V', 200);
			}
			//*/
			this.Game.boxAnim.play('Rung2');
		} else if (ef === 3) {
			var Audio3 = cc.instantiate(this.audioReward3.node);
			Audio3 = Audio3.getComponent(cc.AudioSource);
			Audio3.volume = this.volumeHieuUng;
			this.Game.nodeAudio.addChild(Audio3.node);
			Audio3.play();
			var EF3 = cc.instantiate(this.Game.ef_gold_bom);
			EF3.position = position;
			this.Game.nodeEF.addChild(EF3);
			///**
			if (!cc.sys.isBrowser) {
				jsb.reflection.callStaticMethod('org/cocos2dx/javascript/Rumble', 'once', '(I)V', 500);
			}
			//*/
			this.Game.boxAnim.play('Rung1');
		}
	},
	otherBullet: function otherBullet(data) {
		this.players[data.map - 1].otherBullet(data);
	},
	dataOther: function dataOther(data) {
		if (!!data.money) {
			var player = this.players[data.map - 1];
			player.balans.string = helper.numberWithCommas(data.money);
		}
		if (!!data.updateType) {
			this.updateType(data.updateType);
		}
		if (!!data.bulllet) {
			this.otherBullet(data.bulllet);
		}
	},
	dataMe: function dataMe(data) {
		if (void 0 !== data.money) {
			this.Game.player.money = data.money;
			this.Game.player.balans.string = helper.numberWithCommas(data.money);
		}
		if (!!data.nap) {
			this.loading.active = false;
			this.dialog.onBack();
		}
	},
	updateType: function updateType(data) {
		this.players[data.map - 1].onChangerTypeBet(data.type);
	},
	dataInfoGhe: function dataInfoGhe(data) {
		this.loading.active = false;
		this.dialog.onBack();
		this.players.forEach(function (obj, index) {
			var dataT = data[index];
			if (void 0 === dataT || dataT.data === null) {
				obj.node.active = false;
			} else {
				if (this.MeMap === dataT.ghe) {
					this.Game.player = obj;
					obj.iconCoint.spriteFrame = this.cointMe;
					obj.nodeChangerbet.active = true;
					obj.isMe = true;
				}
				if (dataT.ghe === 1 || dataT.ghe === 2) {
					obj.sungFix = 1;
				} else {
					obj.sungFix = 2;
				}
				obj.node.active = true;
				obj.onInfo(dataT.data);
			}
		}.bind(this));
		this.volumeHieuUng !== 0 && this.Game.addAudioPhao();
	},
	dataMeMap: function dataMeMap(data) {
		if (data === 1 || data === 2) {
			this.Game.sungFix = 1;
		} else {
			this.Game.sungFix = 2;
		}
		this.nodeHome.active = false;
		this.nodeGame.active = true;
		this.nodeGame.y = 0;
		this.nodeGame.x = 0;
	},
	dataIngame: function dataIngame(data) {
		var obj = this.players[data.ghe - 1];
		obj.iconCoint.spriteFrame = this.cointOther;
		obj.node.active = true;
		obj.onInfo(data.data);
		if (data.ghe === 1 || data.ghe === 2) {
			obj.sungFix = 1;
		} else {
			obj.sungFix = 2;
		}

		var fishs = this.Game.nodeFish.children.map(function (fish) {
			var h = {};
			if (fish.g !== void 0) {
				fish = fish.getComponent('Fish_fish_group');
				if (!fish || !fish.animState || !fish.fish) {
					return void 0;
				}
				h.g = fish.g;
				h.a = fish.animState.name;
				h.t = fish.animState.time;
				h.f = fish.fish.map(function (obj) {
					if (!!obj.node) {
						return { id: obj.node.id, f: obj.node.fish };
					}
					return void 0;
				});
			} else {
				fish = fish.getComponent('Fish_fish');
				if (!fish || !fish.animState || !fish.node) {
					return void 0;
				}
				h.id = fish.id;
				h.a = fish.animState.name;
				h.t = fish.animState.time;
				h.f = fish.node.fish;
			}
			return h;
		});

		var bullets = this.Game.nodeDan.children.map(function (bulllet) {
			bulllet = bulllet.getComponent('Fish_bullet');
			if (!bulllet) {
				return void 0;
			}
			return { a: bulllet.node.angle, x: bulllet.node.x, y: bulllet.node.y, type: bulllet.node.name, vx: bulllet.body.linearVelocity.x, vy: bulllet.body.linearVelocity.y };
		});
		cc.RedT.send({ g: { fish: { getScene: { f: fishs, b: bullets, g: data.ghe } } } });
	},
	dataOutGame: function dataOutGame(data) {
		this.players[data - 1].node.active = false;
	},
	backGame: function backGame() {
		this.playClick();
		this.loading.active = true;
		void 0 !== this.timeOut && clearTimeout(this.timeOut);
		cc.director.loadScene('MainGame');
	},
	fishLock: function fishLock(data) {
		var fish = this.Game.fish[data.f];
		var player = this.players[data.map - 1];
		if (void 0 !== fish) {
			fish['player' + data.map] = player;
			player.fish = fish;
			fish.updateGroup();
		}
	},
	fishUnLock: function fishUnLock(data) {
		var player = this.players[data - 1];
		if (!!player.fish) {
			player.fish.unLock(data);
		}
	},
	signOut: function signOut() {
		void 0 !== this.timeOut && clearTimeout(this.timeOut);
		cc.director.loadScene('MainGame', function () {
			cc.RedT.inGame.signOut();
		});
	},
	playClick: function playClick() {
		this.volumeHieuUng !== 0 && this.audioClick.play();
	},
	scene: function scene(data) {
		data.f.forEach(function (fish) {
			this.fishData(fish);
		}.bind(this));
		data.b.forEach(function (bulllet) {
			!!bulllet && this.sceneBullet(bulllet);
		}.bind(this));
	},
	sceneBullet: function sceneBullet(data) {
		var a = data.a >> 0;
		var x = data.x >> 0;
		var y = data.x >> 0;
		var type = data.type >> 0;
		var vx = data.vx >> 0;
		var vy = data.vy >> 0;

		var bullet = this.Game.bullet[type - 1];
		if (void 0 !== bullet) {
			bullet = cc.instantiate(bullet);
			bullet = bullet.getComponent('Fish_bullet');
			bullet.node.x = x;
			bullet.node.y = y;
			bullet.node.angle = a;
			bullet.bullet = type - 1;
			bullet.body.linearVelocity = cc.v2(vx, vy);
			bullet.RedT = this.Game.player;
			this.Game.nodeDan.addChild(bullet.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2EvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxCYW5DYS5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwibm90aWNlIiwiZGlhbG9nIiwiUGxheWVyIiwiR2FtZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF2YXRhciIsIlNwcml0ZSIsImF1ZGlvQ2xpY2siLCJBdWRpb1NvdXJjZSIsImF1ZGlvUGhhbyIsImF1ZGlvRmlyZSIsImF1ZGlvSmlhcWlhbiIsImF1ZGlvUmV3YXJkMSIsImF1ZGlvUmV3YXJkMiIsImF1ZGlvUmV3YXJkMyIsIm5vZGVIb21lIiwiTm9kZSIsIm5vZGVHYW1lIiwibmljayIsIkxhYmVsIiwiYmFsYW5zIiwibG9hZGluZyIsInBsYXllcnMiLCJkZWZhdWx0IiwidHlwZSIsInR5cGVCZXQxIiwiU3RyaW5nIiwidHlwZUJldDIiLCJ0eXBlQmV0MyIsImFuaW1fY2FuaCIsImFuaW1fc3VuZyIsImNvaW50TWUiLCJTcHJpdGVGcmFtZSIsImNvaW50T3RoZXIiLCJvbkxvYWQiLCJ2b2x1bWVOaGFjTmVuIiwidm9sdW1lSGlldVVuZyIsIlJlZFQiLCJhdWRpbyIsImJnIiwicGF1c2UiLCJmaXNoSGFsbCIsImluR2FtZSIsInNlbmQiLCJzY2VuZSIsInN0cmluZyIsInVzZXIiLCJuYW1lIiwibnVtYmVyV2l0aENvbW1hcyIsInJlZCIsImZvckVhY2giLCJvYmoiLCJpbml0IiwiYmluZCIsIlBoeXNpY3NNYW5hZ2VyIiwiZGlyZWN0b3IiLCJnZXRQaHlzaWNzTWFuYWdlciIsImVuYWJsZWQiLCJncmF2aXR5IiwidjIiLCJDb2xsaXNpb25NYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsInJvb20iLCJzZXRBdmF0YXIiLCJkYXRhIiwiYXZhdGFycyIsInNwcml0ZUZyYW1lIiwib25SZWdHYW1lIiwiZXZlbnQiLCJwbGF5Q2xpY2siLCJyZWdHYW1lIiwidGFyZ2V0Iiwic2hvd05hcCIsIm9uRGF0YSIsImZpc2giLCJmaXNoRGF0YSIsImZpc2hzIiwiZmlzaHNEYXRhIiwicm91bmQiLCJtZU1hcCIsIk1lTWFwIiwiZGF0YU1lTWFwIiwiaW5mb0doZSIsImRhdGFJbmZvR2hlIiwiaW5nYW1lIiwiZGF0YUluZ2FtZSIsIm91dGdhbWUiLCJkYXRhT3V0R2FtZSIsIm90aGVyIiwiZGF0YU90aGVyIiwibWUiLCJkYXRhTWUiLCJvdGhlckVhdCIsIm1lRWF0IiwibG9jayIsImZpc2hMb2NrIiwidW5sb2NrIiwiZmlzaFVuTG9jayIsInNob3ciLCJsb2ciLCJGaXNoX2hpc3RvcnkiLCJ1c2VyRGF0YSIsIm1pbmkiLCJNaW5pUGFuZWwiLCJUb3BIdSIsInRhaXhpdSIsIlRhaVhpdSIsIlRYX01haW4iLCJ2aXBwIiwiRGlhbG9nIiwiVmlwUG9pbnQiLCJub2RlRmlzaCIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImhhaWxhbmciLCJpbnN0YW50aWF0ZSIsImVmX2hhaWxhbmciLCJnZXRDb21wb25lbnQiLCJkcmFnb25Cb25lcyIsIkFybWF0dXJlRGlzcGxheSIsImFkZENoaWxkIiwibm9kZSIsInBsYXlBbmltYXRpb24iLCJvbiIsIkV2ZW50T2JqZWN0IiwiQ09NUExFVEUiLCJkZXN0cm95IiwiaWQiLCJwb3NpdGlvbiIsImluR3JvdXAiLCJzY2FsZVgiLCJwYXJlbnQiLCJhbmdsZSIsImdldFBvc2l0aW9uIiwiaW5zZXJ0Q2hpbGQiLCJQaGFIdXkiLCJwbGF5ZXIiLCJtYXAiLCJlZmNvaW50IiwiZWYiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJtYXgiLCJtaW4iLCJpIiwiY29pbnQiLCJtb25leSIsImxhYmVsT3RoZXIiLCJub2RlTGFiZWwiLCJtIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzcGF3biIsInNjYWxlVG8iLCJmYWRlVG8iLCJjYWxsRnVuYyIsIm9uRGVsZXRlIiwiY29weSIsInZvbHVtZSIsIm5vZGVBdWRpbyIsInBsYXkiLCJFRkJvbSIsImxhYmVsTWUiLCJnIiwiZmlzaFByZWZhYiIsImYiLCJ0IiwiYyIsImxlbmd0aCIsImZpc2hzQ29tcCIsImZzIiwiQXVkaW8yIiwiRUYyIiwiZWZfYm9tIiwibm9kZUVGIiwic3lzIiwiaXNCcm93c2VyIiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiLCJib3hBbmltIiwiQXVkaW8zIiwiRUYzIiwiZWZfZ29sZF9ib20iLCJvdGhlckJ1bGxldCIsInVwZGF0ZVR5cGUiLCJidWxsbGV0IiwibmFwIiwiYWN0aXZlIiwib25CYWNrIiwib25DaGFuZ2VyVHlwZUJldCIsImluZGV4IiwiZGF0YVQiLCJnaGUiLCJpY29uQ29pbnQiLCJub2RlQ2hhbmdlcmJldCIsImlzTWUiLCJzdW5nRml4Iiwib25JbmZvIiwiYWRkQXVkaW9QaGFvIiwieSIsIngiLCJjaGlsZHJlbiIsImgiLCJhbmltU3RhdGUiLCJhIiwidGltZSIsImJ1bGxldHMiLCJub2RlRGFuIiwidngiLCJib2R5IiwibGluZWFyVmVsb2NpdHkiLCJ2eSIsImdldFNjZW5lIiwiYiIsImJhY2tHYW1lIiwidGltZU91dCIsImNsZWFyVGltZW91dCIsImxvYWRTY2VuZSIsInVwZGF0ZUdyb3VwIiwidW5Mb2NrIiwic2lnbk91dCIsInNjZW5lQnVsbGV0IiwiYnVsbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxRQUFSLENBQWI7QUFDQSxJQUFJRSxTQUFTRixRQUFRLGNBQVIsQ0FBYjs7QUFFQSxJQUFJRyxTQUFTSCxRQUFRLGFBQVIsQ0FBYjtBQUNBLElBQUlJLE9BQVNKLFFBQVEsV0FBUixDQUFiOztBQUVBSyxHQUFHQyxLQUFILENBQVM7QUFDUkMs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QUFPd0MsS0FBS3hDLElBQUwsSUFBVyxDQUF0QjtBQUNBLE1BQUkwTCxLQUFPbEosS0FBS2tKLEVBQUwsSUFBUyxDQUFwQjtBQUNBLE1BQUlHLEtBQU9ySixLQUFLcUosRUFBTCxJQUFTLENBQXBCOztBQUVBLE1BQUlXLFNBQVMsS0FBS2pPLElBQUwsQ0FBVWlPLE1BQVYsQ0FBaUJ4TSxPQUFLLENBQXRCLENBQWI7QUFDQSxNQUFJLEtBQUssQ0FBTCxLQUFXd00sTUFBZixFQUF1QjtBQUN0QkEsWUFBU2hPLEdBQUdrSCxXQUFILENBQWU4RyxNQUFmLENBQVQ7QUFDQUEsWUFBU0EsT0FBTzVHLFlBQVAsQ0FBb0IsYUFBcEIsQ0FBVDtBQUNBNEcsVUFBT3hHLElBQVAsQ0FBWWtGLENBQVosR0FBZ0JBLENBQWhCO0FBQ0FzQixVQUFPeEcsSUFBUCxDQUFZaUYsQ0FBWixHQUFnQkEsQ0FBaEI7QUFDQXVCLFVBQU94RyxJQUFQLENBQVlXLEtBQVosR0FBb0IyRSxDQUFwQjtBQUNBa0IsVUFBT0EsTUFBUCxHQUFnQnhNLE9BQUssQ0FBckI7QUFDQXdNLFVBQU9iLElBQVAsQ0FBWUMsY0FBWixHQUE2QnBOLEdBQUcyRCxFQUFILENBQU11SixFQUFOLEVBQVVHLEVBQVYsQ0FBN0I7QUFDQVcsVUFBTzNMLElBQVAsR0FBYyxLQUFLdEMsSUFBTCxDQUFVd0ksTUFBeEI7QUFDQSxRQUFLeEksSUFBTCxDQUFVa04sT0FBVixDQUFrQjFGLFFBQWxCLENBQTJCeUcsT0FBT3hHLElBQWxDO0FBQ0E7QUFDRDtBQXhmTyxDQUFUIiwiZmlsZSI6IkJhbkNhLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcbnZhciBub3RpY2UgPSByZXF1aXJlKCdOb3RpY2UnKTtcclxudmFyIGRpYWxvZyA9IHJlcXVpcmUoJ0JhbkNhX2RpYWxvZycpO1xyXG5cclxudmFyIFBsYXllciA9IHJlcXVpcmUoJ0Zpc2hfcGxheWVyJyk7XHJcbnZhciBHYW1lICAgPSByZXF1aXJlKCdGaXNoX2dhbWUnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGF2YXRhcjogY2MuU3ByaXRlLFxyXG5cclxuXHRcdGF1ZGlvQ2xpY2s6IGNjLkF1ZGlvU291cmNlLFxyXG5cdFx0YXVkaW9QaGFvOiAgY2MuQXVkaW9Tb3VyY2UsXHJcblx0XHRhdWRpb0ZpcmU6ICBjYy5BdWRpb1NvdXJjZSxcclxuXHJcblx0XHRhdWRpb0ppYXFpYW46IGNjLkF1ZGlvU291cmNlLFxyXG5cdFx0YXVkaW9SZXdhcmQxOiBjYy5BdWRpb1NvdXJjZSxcclxuXHRcdGF1ZGlvUmV3YXJkMjogY2MuQXVkaW9Tb3VyY2UsXHJcblx0XHRhdWRpb1Jld2FyZDM6IGNjLkF1ZGlvU291cmNlLFxyXG5cclxuXHRcdG5vZGVIb21lOiBjYy5Ob2RlLFxyXG5cdFx0bm9kZUdhbWU6IGNjLk5vZGUsXHJcblx0XHRuaWNrOiAgICAgY2MuTGFiZWwsXHJcblx0XHRiYWxhbnM6ICAgY2MuTGFiZWwsXHJcblx0XHRsb2FkaW5nOiAgY2MuTm9kZSxcclxuXHRcdG5vdGljZTogICBub3RpY2UsXHJcblx0XHRkaWFsb2c6ICAgZGlhbG9nLFxyXG5cdFx0R2FtZTogICAgIEdhbWUsXHJcblx0XHRwbGF5ZXJzOiB7XHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0eXBlOiBQbGF5ZXIsXHJcblx0XHR9LFxyXG5cdFx0dHlwZUJldDE6IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6IGNjLlN0cmluZyxcclxuXHRcdH0sXHJcblx0XHR0eXBlQmV0Mjoge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogY2MuU3RyaW5nLFxyXG5cdFx0fSxcclxuXHRcdHR5cGVCZXQzOiB7XHJcblx0XHRcdGRlZmF1bHQ6IFtdLFxyXG5cdFx0XHR0eXBlOiBjYy5TdHJpbmcsXHJcblx0XHR9LFxyXG5cclxuXHRcdGFuaW1fY2FuaDoge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogY2MuU3RyaW5nLFxyXG5cdFx0fSxcclxuXHRcdGFuaW1fc3VuZzoge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogY2MuU3RyaW5nLFxyXG5cdFx0fSxcclxuXHRcdGNvaW50TWU6ICAgIGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0Y29pbnRPdGhlcjogY2MuU3ByaXRlRnJhbWUsXHJcblx0fSxcclxuXHRvbkxvYWQ6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnZvbHVtZU5oYWNOZW4gPSAwO1xyXG5cdFx0dGhpcy52b2x1bWVIaWV1VW5nID0gMDtcclxuXHJcblx0XHRjYy5SZWRULmF1ZGlvLmJnLnBhdXNlKCk7XHJcblx0XHRjYy5SZWRULmF1ZGlvLmJnID0gY2MuUmVkVC5hdWRpby5maXNoSGFsbDtcclxuXHJcblx0XHRjYy5SZWRULmluR2FtZSA9IHRoaXM7XHJcblx0XHRjYy5SZWRULnNlbmQoe3NjZW5lOidiYyd9KTtcclxuXHJcblx0XHR0aGlzLm5pY2suc3RyaW5nICAgPSBjYy5SZWRULnVzZXIubmFtZTtcclxuXHRcdHRoaXMuYmFsYW5zLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGNjLlJlZFQudXNlci5yZWQpO1xyXG5cdFx0dGhpcy5wbGF5ZXJzLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0b2JqLmluaXQodGhpcyk7XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0dGhpcy5HYW1lLmluaXQodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5QaHlzaWNzTWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCk7XHJcblx0XHR0aGlzLlBoeXNpY3NNYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0dGhpcy5QaHlzaWNzTWFuYWdlci5ncmF2aXR5ID0gY2MudjIoKTtcclxuXHJcblx0XHR0aGlzLkNvbGxpc2lvbk1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XHJcblx0XHR0aGlzLkNvbGxpc2lvbk1hbmFnZXIuZW5hYmxlZCA9IHRydWU7XHJcblxyXG5cdFx0dGhpcy5kaWFsb2cuaW5pdCgpO1xyXG5cdFx0dGhpcy5yb29tID0gezE6MTAwLDI6NTAwLCAzOjEwMDB9OyAvLyBwaMOybmcgMTAwIC0gNTAwIC0gMTAwMFxyXG5cclxuXHRcdHRoaXMuc2V0QXZhdGFyKGNjLlJlZFQudXNlci5hdmF0YXIpO1xyXG5cdH0sXHJcblx0c2V0QXZhdGFyOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGRhdGEgPSBkYXRhPj4wO1xyXG5cdFx0aWYgKGNjLlJlZFQuYXZhdGFyc1tkYXRhXSAhPT0gdm9pZCAwKSB7XHJcblx0XHRcdHRoaXMuYXZhdGFyLnNwcml0ZUZyYW1lID0gY2MuUmVkVC5hdmF0YXJzW2RhdGFdO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuYXZhdGFyLnNwcml0ZUZyYW1lID0gY2MuUmVkVC5hdmF0YXJzWzBdO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25SZWdHYW1lOiBmdW5jdGlvbihldmVudCl7XHJcblx0XHR0aGlzLnBsYXlDbGljaygpO1xyXG5cdFx0dGhpcy5yZWdHYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcblx0XHR0aGlzLmRpYWxvZy5zaG93TmFwKCk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuZmlzaCl7XHJcblx0XHRcdHRoaXMuZmlzaERhdGEoZGF0YS5maXNoKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuZmlzaHMpe1xyXG5cdFx0XHR0aGlzLmZpc2hzRGF0YShkYXRhLmZpc2hzKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEucm91bmQpe1xyXG5cdFx0XHR0aGlzLnJvdW5kKCk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnNjZW5lKXtcclxuXHRcdFx0dGhpcy5zY2VuZShkYXRhLnNjZW5lKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubWVNYXApe1xyXG5cdFx0XHR0aGlzLk1lTWFwID0gZGF0YS5tZU1hcDtcclxuXHRcdFx0dGhpcy5kYXRhTWVNYXAoZGF0YS5tZU1hcCk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmluZm9HaGUpe1xyXG5cdFx0XHR0aGlzLmRhdGFJbmZvR2hlKGRhdGEuaW5mb0doZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmluZ2FtZSl7XHJcblx0XHRcdHRoaXMuZGF0YUluZ2FtZShkYXRhLmluZ2FtZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm91dGdhbWUpe1xyXG5cdFx0XHR0aGlzLmRhdGFPdXRHYW1lKGRhdGEub3V0Z2FtZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm90aGVyKXtcclxuXHRcdFx0dGhpcy5kYXRhT3RoZXIoZGF0YS5vdGhlcik7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm1lKXtcclxuXHRcdFx0dGhpcy5kYXRhTWUoZGF0YS5tZSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm90aGVyRWF0KXtcclxuXHRcdFx0dGhpcy5vdGhlckVhdChkYXRhLm90aGVyRWF0KTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubWVFYXQpe1xyXG5cdFx0XHR0aGlzLm1lRWF0KGRhdGEubWVFYXQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5sb2NrKXtcclxuXHRcdFx0dGhpcy5maXNoTG9jayhkYXRhLmxvY2spO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS51bmxvY2spe1xyXG5cdFx0XHR0aGlzLmZpc2hVbkxvY2soZGF0YS51bmxvY2spO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5ub3RpY2Upe1xyXG5cdFx0XHR0aGlzLm5vdGljZS5zaG93KGRhdGEubm90aWNlKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubG9nKXtcclxuXHRcdFx0dGhpcy5kaWFsb2cuRmlzaF9oaXN0b3J5Lm9uRGF0YShkYXRhLmxvZyk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnVzZXIpe1xyXG5cdFx0XHRjYy5SZWRULnVzZXJEYXRhKGRhdGEudXNlcik7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLm1pbmkpe1xyXG5cdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5vbkRhdGEoZGF0YS5taW5pKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEuVG9wSHUpe1xyXG5cdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5Ub3BIdS5vbkRhdGEoZGF0YS5Ub3BIdSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLnRhaXhpdSl7XHJcblx0XHRcdGNjLlJlZFQuTWluaVBhbmVsLlRhaVhpdS5UWF9NYWluLm9uRGF0YShkYXRhLnRhaXhpdSk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnZpcHApIHtcclxuXHRcdFx0Y2MuUmVkVC5NaW5pUGFuZWwuRGlhbG9nLlZpcFBvaW50Lm9uRGF0YShkYXRhLnZpcHApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0cm91bmQ6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmZpc2ggPSB7fTtcclxuXHRcdHRoaXMuR2FtZS5ub2RlRmlzaC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHRcdGxldCBoYWlsYW5nID0gY2MuaW5zdGFudGlhdGUodGhpcy5HYW1lLmVmX2hhaWxhbmcpO1xyXG5cdFx0aGFpbGFuZyA9IGhhaWxhbmcuZ2V0Q29tcG9uZW50KGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSk7XHJcblx0XHR0aGlzLkdhbWUubm9kZUZpc2guYWRkQ2hpbGQoaGFpbGFuZy5ub2RlKTtcclxuXHRcdGhhaWxhbmcucGxheUFuaW1hdGlvbignaGFpbGFuZycsIDEpO1xyXG5cdFx0aGFpbGFuZy5vbihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHRcdH0sIGhhaWxhbmcpO1xyXG5cdH0sXHJcblx0b3RoZXJFYXQ6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0bGV0IGZpc2ggPSB0aGlzLkdhbWUuZmlzaFtkYXRhLmlkXTtcclxuXHRcdGlmICh2b2lkIDAgIT09IGZpc2gpIHtcclxuXHRcdFx0bGV0IHBvc2l0aW9uID0gZmlzaC5ub2RlLnBvc2l0aW9uO1xyXG5cdFx0XHRpZiAoZmlzaC5pbkdyb3VwKSB7XHJcblx0XHRcdFx0bGV0IHNjYWxlWCA9IGZpc2gubm9kZS5wYXJlbnQuc2NhbGVYO1xyXG5cdFx0XHRcdGxldCBhbmdsZSAgPSBmaXNoLm5vZGUucGFyZW50LmFuZ2xlO1xyXG5cdFx0XHRcdHBvc2l0aW9uID0gZmlzaC5nZXRQb3NpdGlvbigpO1xyXG5cdFx0XHRcdHRoaXMuR2FtZS5ub2RlRmlzaC5pbnNlcnRDaGlsZChmaXNoLm5vZGUpO1xyXG5cdFx0XHRcdGZpc2gubm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cdFx0XHRcdGZpc2gubm9kZS5zY2FsZVggICA9IHNjYWxlWDtcclxuXHRcdFx0XHRmaXNoLm5vZGUuYW5nbGUgICAgPSBhbmdsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmaXNoLlBoYUh1eSgpO1xyXG5cdFx0XHRsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJzW2RhdGEubWFwLTFdO1xyXG5cdFx0XHRsZXQgZWZjb2ludCA9IHRoaXMuR2FtZS5lZmNvaW50W2Zpc2gubm9kZS5maXNoXTtcclxuXHRcdFx0bGV0IGVmID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihlZmNvaW50Lm1heC1lZmNvaW50Lm1pbisxKSkrZWZjb2ludC5taW47XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWY7IGkrKykge1xyXG5cdFx0XHRcdHZhciBjb2ludCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuR2FtZS5jb2ludE90aGVyKTtcclxuXHRcdFx0XHRjb2ludCA9IGNvaW50LmdldENvbXBvbmVudCgnZmlzaF9FRmNvaW50Jyk7XHJcblx0XHRcdFx0Y29pbnQuaW5pdChwbGF5ZXIsIHBvc2l0aW9uLCBlZmNvaW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgbW9uZXkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkdhbWUubGFiZWxPdGhlcik7XHJcblx0XHRcdG1vbmV5ID0gbW9uZXkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuXHRcdFx0bW9uZXkuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5tb25leSk7XHJcblx0XHRcdG1vbmV5Lm5vZGUucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHRcdFx0dGhpcy5HYW1lLm5vZGVMYWJlbC5hZGRDaGlsZChtb25leS5ub2RlKTtcclxuXHRcdFx0cGxheWVyLmJhbGFucy5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLm0pO1xyXG5cdFx0XHRmaXNoLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjYpLCBjYy5zcGF3bihjYy5zY2FsZVRvKDAuMSwgZmlzaC5ub2RlLnNjYWxlWCowLjMsIDAuMyksIGNjLmZhZGVUbygwLjEsIDUwKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhpcy5vbkRlbGV0ZSgpO1xyXG5cdFx0XHR9LCBmaXNoKSkpO1xyXG5cclxuXHRcdFx0Ly8gQXVkaW9cclxuXHRcdFx0bGV0IGNvcHkgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmF1ZGlvSmlhcWlhbi5ub2RlKTtcclxuXHRcdFx0Y29weSA9IGNvcHkuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuXHRcdFx0Y29weS52b2x1bWUgPSB0aGlzLnZvbHVtZUhpZXVVbmc7XHJcblx0XHRcdHRoaXMuR2FtZS5ub2RlQXVkaW8uYWRkQ2hpbGQoY29weS5ub2RlKTtcclxuXHRcdFx0Y29weS5wbGF5KCk7XHJcblx0XHRcdHRoaXMuRUZCb20oZWZjb2ludC5lZiwgcG9zaXRpb24pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWVFYXQ6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0bGV0IGZpc2ggPSB0aGlzLkdhbWUuZmlzaFtkYXRhLmlkXTtcclxuXHRcdGlmICh2b2lkIDAgIT09IGZpc2gpIHtcclxuXHRcdFx0bGV0IHBvc2l0aW9uID0gZmlzaC5ub2RlLnBvc2l0aW9uO1xyXG5cdFx0XHRpZiAoZmlzaC5pbkdyb3VwKSB7XHJcblx0XHRcdFx0bGV0IHNjYWxlWCA9IGZpc2gubm9kZS5wYXJlbnQuc2NhbGVYO1xyXG5cdFx0XHRcdGxldCBhbmdsZSAgPSBmaXNoLm5vZGUucGFyZW50LmFuZ2xlO1xyXG5cdFx0XHRcdHBvc2l0aW9uID0gZmlzaC5nZXRQb3NpdGlvbigpO1xyXG5cdFx0XHRcdHRoaXMuR2FtZS5ub2RlRmlzaC5pbnNlcnRDaGlsZChmaXNoLm5vZGUpO1xyXG5cdFx0XHRcdGZpc2gubm9kZS5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG5cdFx0XHRcdGZpc2gubm9kZS5zY2FsZVggICA9IHNjYWxlWDtcclxuXHRcdFx0XHRmaXNoLm5vZGUuYW5nbGUgICAgPSBhbmdsZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmaXNoLlBoYUh1eSgpO1xyXG5cdFx0XHRsZXQgZWZjb2ludCA9IHRoaXMuR2FtZS5lZmNvaW50W2Zpc2gubm9kZS5maXNoXTtcclxuXHRcdFx0bGV0IGVmID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihlZmNvaW50Lm1heC1lZmNvaW50Lm1pbisxKSkrZWZjb2ludC5taW47XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWY7IGkrKykge1xyXG5cdFx0XHRcdHZhciBjb2ludCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuR2FtZS5jb2ludE1lKTtcclxuXHRcdFx0XHRjb2ludCA9IGNvaW50LmdldENvbXBvbmVudCgnZmlzaF9FRmNvaW50Jyk7XHJcblx0XHRcdFx0Y29pbnQuaW5pdCh0aGlzLkdhbWUucGxheWVyLCBwb3NpdGlvbiwgZWZjb2ludCk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIG1vbmV5ID0gY2MuaW5zdGFudGlhdGUodGhpcy5HYW1lLmxhYmVsTWUpO1xyXG5cdFx0XHRtb25leSA9IG1vbmV5LmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblx0XHRcdG1vbmV5LnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEubW9uZXkpO1xyXG5cdFx0XHRtb25leS5ub2RlLnBvc2l0aW9uID0gcG9zaXRpb247XHJcblx0XHRcdHRoaXMuR2FtZS5ub2RlTGFiZWwuYWRkQ2hpbGQobW9uZXkubm9kZSk7XHJcblx0XHRcdHRoaXMuR2FtZS5wbGF5ZXIubW9uZXkgPSBkYXRhLm07XHJcblx0XHRcdHRoaXMuR2FtZS5wbGF5ZXIuYmFsYW5zLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEubSk7XHJcblx0XHRcdGZpc2gubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDAuNyksIGNjLnNwYXduKGNjLnNjYWxlVG8oMC4yLCBmaXNoLm5vZGUuc2NhbGVYKjAuMywgMC4zKSwgY2MuZmFkZVRvKDAuMiwgNTApKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR0aGlzLm9uRGVsZXRlKCk7XHJcblx0XHRcdH0sIGZpc2gpKSk7XHJcblxyXG5cdFx0XHQvLyBBdWRpb1xyXG5cdFx0XHRsZXQgY29weSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXVkaW9SZXdhcmQxLm5vZGUpO1xyXG5cdFx0XHRjb3B5ID0gY29weS5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG5cdFx0XHRjb3B5LnZvbHVtZSA9IHRoaXMudm9sdW1lSGlldVVuZztcclxuXHRcdFx0dGhpcy5HYW1lLm5vZGVBdWRpby5hZGRDaGlsZChjb3B5Lm5vZGUpO1xyXG5cdFx0XHRjb3B5LnBsYXkoKTtcclxuXHRcdFx0dGhpcy5FRkJvbShlZmNvaW50LmVmLCBwb3NpdGlvbik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRmaXNoRGF0YTogZnVuY3Rpb24oZGF0YSwgZmlzaHMgPSBudWxsKSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmcpIHtcclxuXHRcdFx0XHR2YXIgZmlzaCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuR2FtZVsneCcrZGF0YS5nXSk7XHJcblx0XHRcdFx0ZmlzaCA9IGZpc2guZ2V0Q29tcG9uZW50KCdGaXNoX2Zpc2hfZ3JvdXAnKTtcclxuXHRcdFx0XHRmaXNoLmluaXQodGhpcy5HYW1lLCBkYXRhKTtcclxuXHRcdFx0XHR0aGlzLkdhbWUubm9kZUZpc2guYWRkQ2hpbGQoZmlzaC5ub2RlKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dmFyIGZpc2ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkdhbWUuZmlzaFByZWZhYltkYXRhLmYtMV0pO1xyXG5cdFx0XHRcdGZpc2ggPSBmaXNoLmdldENvbXBvbmVudCgnRmlzaF9maXNoJyk7XHJcblx0XHRcdFx0ZmlzaC5pbml0KHRoaXMuR2FtZSwgZGF0YSk7XHJcblx0XHRcdFx0dGhpcy5HYW1lLmZpc2hbZGF0YS5pZF0gPSBmaXNoO1xyXG5cdFx0XHRcdHRoaXMuR2FtZS5ub2RlRmlzaC5hZGRDaGlsZChmaXNoLm5vZGUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChmaXNocyAmJiBmaXNocy50ICE9PSB2b2lkIDApIHtcclxuXHRcdFx0XHRmaXNoLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShmaXNocy50KSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGZpc2hzLmMrKztcclxuXHRcdFx0XHRcdGlmIChmaXNocy5jIDwgZmlzaHMuZi5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5maXNoRGF0YShmaXNocy5mW2Zpc2hzLmNdLCBmaXNocyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgdGhpcykpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZmlzaHNEYXRhOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRpZihkYXRhLnQgIT09IHZvaWQgMCl7XHJcblx0XHRcdHRoaXMuZmlzaHNDb21wKGRhdGEpO1xyXG5cdFx0fSBlbHNlIGlmKCEhZGF0YS5mcyl7XHJcblx0XHRcdGRhdGEuZnMuZm9yRWFjaChmdW5jdGlvbihmaXNoKXtcclxuXHRcdFx0XHRpZihmaXNoLnQgIT09IHZvaWQgMCl7XHJcblx0XHRcdFx0XHR0aGlzLmZpc2hzQ29tcChmaXNoKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuZmlzaERhdGEoZmlzaCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGRhdGEuZi5mb3JFYWNoKGZ1bmN0aW9uKGZpc2gpe1xyXG5cdFx0XHRcdHRoaXMuZmlzaERhdGEoZmlzaCk7XHJcblx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRmaXNoc0NvbXA6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGRhdGEuYyA9IDA7XHJcblx0XHR0aGlzLmZpc2hEYXRhKGRhdGEuZlswXSwgZGF0YSk7XHJcblx0fSxcclxuXHRFRkJvbTogZnVuY3Rpb24oZWYsIHBvc2l0aW9uKXtcclxuXHRcdGlmIChlZiA9PT0gMikge1xyXG5cdFx0XHRsZXQgQXVkaW8yID0gY2MuaW5zdGFudGlhdGUodGhpcy5hdWRpb1Jld2FyZDIubm9kZSk7XHJcblx0XHRcdEF1ZGlvMiA9IEF1ZGlvMi5nZXRDb21wb25lbnQoY2MuQXVkaW9Tb3VyY2UpO1xyXG5cdFx0XHRBdWRpbzIudm9sdW1lID0gdGhpcy52b2x1bWVIaWV1VW5nO1xyXG5cdFx0XHR0aGlzLkdhbWUubm9kZUF1ZGlvLmFkZENoaWxkKEF1ZGlvMi5ub2RlKTtcclxuXHRcdFx0QXVkaW8yLnBsYXkoKTtcclxuXHRcdFx0bGV0IEVGMiA9IGNjLmluc3RhbnRpYXRlKHRoaXMuR2FtZS5lZl9ib20pO1xyXG5cdFx0XHRFRjIucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHRcdFx0dGhpcy5HYW1lLm5vZGVFRi5hZGRDaGlsZChFRjIpO1xyXG5cdFx0XHQvLy8qKlxyXG5cdFx0XHRpZiAoIWNjLnN5cy5pc0Jyb3dzZXIpIHtcclxuXHRcdFx0XHRqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9SdW1ibGUnLCAnb25jZScsICcoSSlWJywgMjAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyovXHJcblx0XHRcdHRoaXMuR2FtZS5ib3hBbmltLnBsYXkoJ1J1bmcyJyk7XHJcblx0XHR9ZWxzZSBpZiAoZWYgPT09IDMpIHtcclxuXHRcdFx0bGV0IEF1ZGlvMyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYXVkaW9SZXdhcmQzLm5vZGUpO1xyXG5cdFx0XHRBdWRpbzMgPSBBdWRpbzMuZ2V0Q29tcG9uZW50KGNjLkF1ZGlvU291cmNlKTtcclxuXHRcdFx0QXVkaW8zLnZvbHVtZSA9IHRoaXMudm9sdW1lSGlldVVuZztcclxuXHRcdFx0dGhpcy5HYW1lLm5vZGVBdWRpby5hZGRDaGlsZChBdWRpbzMubm9kZSk7XHJcblx0XHRcdEF1ZGlvMy5wbGF5KCk7XHJcblx0XHRcdGxldCBFRjMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkdhbWUuZWZfZ29sZF9ib20pO1xyXG5cdFx0XHRFRjMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuXHRcdFx0dGhpcy5HYW1lLm5vZGVFRi5hZGRDaGlsZChFRjMpO1xyXG5cdFx0XHQvLy8qKlxyXG5cdFx0XHRpZiAoIWNjLnN5cy5pc0Jyb3dzZXIpIHtcclxuXHRcdFx0XHRqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKCdvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9SdW1ibGUnLCAnb25jZScsICcoSSlWJywgNTAwKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyovXHJcblx0XHRcdHRoaXMuR2FtZS5ib3hBbmltLnBsYXkoJ1J1bmcxJyk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvdGhlckJ1bGxldDogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLnBsYXllcnNbZGF0YS5tYXAtMV0ub3RoZXJCdWxsZXQoZGF0YSk7XHJcblx0fSxcclxuXHRkYXRhT3RoZXI6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmICghIWRhdGEubW9uZXkpIHtcclxuXHRcdFx0bGV0IHBsYXllciA9IHRoaXMucGxheWVyc1tkYXRhLm1hcC0xXTtcclxuXHRcdFx0cGxheWVyLmJhbGFucy5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLm1vbmV5KTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEudXBkYXRlVHlwZSkge1xyXG5cdFx0XHR0aGlzLnVwZGF0ZVR5cGUoZGF0YS51cGRhdGVUeXBlKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEuYnVsbGxldCkge1xyXG5cdFx0XHR0aGlzLm90aGVyQnVsbGV0KGRhdGEuYnVsbGxldCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRkYXRhTWU6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubW9uZXkpIHtcclxuXHRcdFx0dGhpcy5HYW1lLnBsYXllci5tb25leSA9IGRhdGEubW9uZXk7XHJcblx0XHRcdHRoaXMuR2FtZS5wbGF5ZXIuYmFsYW5zLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEubW9uZXkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5uYXApIHtcclxuXHRcdFx0dGhpcy5sb2FkaW5nLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmRpYWxvZy5vbkJhY2soKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHVwZGF0ZVR5cGU6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5wbGF5ZXJzW2RhdGEubWFwLTFdLm9uQ2hhbmdlclR5cGVCZXQoZGF0YS50eXBlKTtcclxuXHR9LFxyXG5cdGRhdGFJbmZvR2hlOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHR0aGlzLmxvYWRpbmcuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLmRpYWxvZy5vbkJhY2soKTtcclxuXHRcdHRoaXMucGxheWVycy5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG5cdFx0XHRsZXQgZGF0YVQgPSBkYXRhW2luZGV4XTtcclxuXHRcdFx0aWYgKHZvaWQgMCA9PT0gZGF0YVQgfHwgZGF0YVQuZGF0YSA9PT0gbnVsbCkge1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRpZiAodGhpcy5NZU1hcCA9PT0gZGF0YVQuZ2hlKSB7XHJcblx0XHRcdFx0XHR0aGlzLkdhbWUucGxheWVyID0gb2JqO1xyXG5cdFx0XHRcdFx0b2JqLmljb25Db2ludC5zcHJpdGVGcmFtZSA9IHRoaXMuY29pbnRNZTtcclxuXHRcdFx0XHRcdG9iai5ub2RlQ2hhbmdlcmJldC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0b2JqLmlzTWUgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoZGF0YVQuZ2hlID09PSAxIHx8IGRhdGFULmdoZSA9PT0gMikge1xyXG5cdFx0XHRcdFx0b2JqLnN1bmdGaXggPSAxO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0b2JqLnN1bmdGaXggPSAyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRvYmoubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdG9iai5vbkluZm8oZGF0YVQuZGF0YSk7XHJcblx0XHRcdH1cclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHR0aGlzLnZvbHVtZUhpZXVVbmcgIT09IDAgJiYgdGhpcy5HYW1lLmFkZEF1ZGlvUGhhbygpO1xyXG5cdH0sXHJcblx0ZGF0YU1lTWFwOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRpZiAoZGF0YSA9PT0gMSB8fCBkYXRhID09PSAyKSB7XHJcblx0XHRcdHRoaXMuR2FtZS5zdW5nRml4ID0gMTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLkdhbWUuc3VuZ0ZpeCA9IDI7XHJcblx0XHR9XHJcblx0XHR0aGlzLm5vZGVIb21lLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5ub2RlR2FtZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5ub2RlR2FtZS55ID0gMDtcclxuXHRcdHRoaXMubm9kZUdhbWUueCA9IDA7XHJcblx0fSxcclxuXHRkYXRhSW5nYW1lOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRsZXQgb2JqID0gdGhpcy5wbGF5ZXJzW2RhdGEuZ2hlLTFdO1xyXG5cdFx0b2JqLmljb25Db2ludC5zcHJpdGVGcmFtZSA9IHRoaXMuY29pbnRPdGhlcjtcclxuXHRcdG9iai5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRvYmoub25JbmZvKGRhdGEuZGF0YSk7XHJcblx0XHRpZiAoZGF0YS5naGUgPT09IDEgfHwgZGF0YS5naGUgPT09IDIpIHtcclxuXHRcdFx0b2JqLnN1bmdGaXggPSAxO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdG9iai5zdW5nRml4ID0gMjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgZmlzaHMgPSB0aGlzLkdhbWUubm9kZUZpc2guY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGZpc2gpe1xyXG5cdFx0XHRsZXQgaCA9IHt9O1xyXG5cdFx0XHRpZiAoZmlzaC5nICE9PSB2b2lkIDApIHtcclxuXHRcdFx0XHRmaXNoID0gZmlzaC5nZXRDb21wb25lbnQoJ0Zpc2hfZmlzaF9ncm91cCcpO1xyXG5cdFx0XHRcdGlmICghZmlzaCB8fCAhZmlzaC5hbmltU3RhdGUgfHwgIWZpc2guZmlzaCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHZvaWQgMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aC5nID0gZmlzaC5nO1xyXG5cdFx0XHRcdGguYSA9IGZpc2guYW5pbVN0YXRlLm5hbWU7XHJcblx0XHRcdFx0aC50ID0gZmlzaC5hbmltU3RhdGUudGltZTtcclxuXHRcdFx0XHRoLmYgPSBmaXNoLmZpc2gubWFwKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdFx0XHRpZiAoISFvYmoubm9kZSkge1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4ge2lkOm9iai5ub2RlLmlkLCBmOm9iai5ub2RlLmZpc2h9O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0cmV0dXJuIHZvaWQgMDtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ZmlzaCA9IGZpc2guZ2V0Q29tcG9uZW50KCdGaXNoX2Zpc2gnKTtcclxuXHRcdFx0XHRpZiAoIWZpc2ggfHwgIWZpc2guYW5pbVN0YXRlIHx8ICFmaXNoLm5vZGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiB2b2lkIDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGguaWQgPSBmaXNoLmlkO1xyXG5cdFx0XHRcdGguYSAgPSBmaXNoLmFuaW1TdGF0ZS5uYW1lO1xyXG5cdFx0XHRcdGgudCAgPSBmaXNoLmFuaW1TdGF0ZS50aW1lO1xyXG5cdFx0XHRcdGguZiAgPSBmaXNoLm5vZGUuZmlzaDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gaDtcclxuXHRcdH0pO1xyXG5cclxuXHRcdGxldCBidWxsZXRzID0gdGhpcy5HYW1lLm5vZGVEYW4uY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGJ1bGxsZXQpe1xyXG5cdFx0XHRidWxsbGV0ID0gYnVsbGxldC5nZXRDb21wb25lbnQoJ0Zpc2hfYnVsbGV0Jyk7XHJcblx0XHRcdGlmKCFidWxsbGV0KXtcclxuXHRcdFx0XHRyZXR1cm4gdm9pZCAwO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB7YTpidWxsbGV0Lm5vZGUuYW5nbGUsIHg6YnVsbGxldC5ub2RlLngsIHk6YnVsbGxldC5ub2RlLnksIHR5cGU6YnVsbGxldC5ub2RlLm5hbWUsIHZ4OmJ1bGxsZXQuYm9keS5saW5lYXJWZWxvY2l0eS54LCB2eTpidWxsbGV0LmJvZHkubGluZWFyVmVsb2NpdHkueX07XHJcblx0XHR9KTtcclxuXHRcdGNjLlJlZFQuc2VuZCh7Zzp7ZmlzaDp7Z2V0U2NlbmU6e2Y6ZmlzaHMsIGI6YnVsbGV0cywgZzpkYXRhLmdoZX19fX0pO1xyXG5cdH0sXHJcblx0ZGF0YU91dEdhbWU6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdHRoaXMucGxheWVyc1tkYXRhLTFdLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0fSxcclxuXHRiYWNrR2FtZTogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMucGxheUNsaWNrKCk7XHJcblx0XHR0aGlzLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHZvaWQgMCAhPT0gdGhpcy50aW1lT3V0ICYmIGNsZWFyVGltZW91dCh0aGlzLnRpbWVPdXQpO1xyXG5cdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKCdNYWluR2FtZScpO1xyXG5cdH0sXHJcblx0ZmlzaExvY2s6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0bGV0IGZpc2ggPSB0aGlzLkdhbWUuZmlzaFtkYXRhLmZdO1xyXG5cdFx0bGV0IHBsYXllciA9IHRoaXMucGxheWVyc1tkYXRhLm1hcC0xXTtcclxuXHRcdGlmICh2b2lkIDAgIT09IGZpc2gpIHtcclxuXHRcdFx0ZmlzaFsncGxheWVyJytkYXRhLm1hcF0gPSBwbGF5ZXI7XHJcblx0XHRcdHBsYXllci5maXNoID0gZmlzaDtcclxuXHRcdFx0ZmlzaC51cGRhdGVHcm91cCgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZmlzaFVuTG9jazogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRsZXQgcGxheWVyID0gdGhpcy5wbGF5ZXJzW2RhdGEtMV07XHJcblx0XHRpZiAoISFwbGF5ZXIuZmlzaCkge1xyXG5cdFx0XHRwbGF5ZXIuZmlzaC51bkxvY2soZGF0YSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzaWduT3V0OiBmdW5jdGlvbigpe1xyXG5cdFx0dm9pZCAwICE9PSB0aGlzLnRpbWVPdXQgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZU91dCk7XHJcblx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW5HYW1lJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuc2lnbk91dCgpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRwbGF5Q2xpY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnZvbHVtZUhpZXVVbmcgIT09IDAgJiYgdGhpcy5hdWRpb0NsaWNrLnBsYXkoKTtcclxuXHR9LFxyXG5cdHNjZW5lOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGRhdGEuZi5mb3JFYWNoKGZ1bmN0aW9uKGZpc2gpe1xyXG5cdFx0XHR0aGlzLmZpc2hEYXRhKGZpc2gpO1xyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdGRhdGEuYi5mb3JFYWNoKGZ1bmN0aW9uKGJ1bGxsZXQpe1xyXG5cdFx0XHQhIWJ1bGxsZXQgJiYgdGhpcy5zY2VuZUJ1bGxldChidWxsbGV0KTtcclxuXHRcdH0uYmluZCh0aGlzKSk7XHJcblx0fSxcclxuXHRzY2VuZUJ1bGxldDogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRsZXQgYSAgICA9IGRhdGEuYT4+MDtcclxuXHRcdGxldCB4ICAgID0gZGF0YS54Pj4wO1xyXG5cdFx0bGV0IHkgICAgPSBkYXRhLng+PjA7XHJcblx0XHRsZXQgdHlwZSA9IGRhdGEudHlwZT4+MDtcclxuXHRcdGxldCB2eCAgID0gZGF0YS52eD4+MDtcclxuXHRcdGxldCB2eSAgID0gZGF0YS52eT4+MDtcclxuXHJcblx0XHRsZXQgYnVsbGV0ID0gdGhpcy5HYW1lLmJ1bGxldFt0eXBlLTFdO1xyXG5cdFx0aWYgKHZvaWQgMCAhPT0gYnVsbGV0KSB7XHJcblx0XHRcdGJ1bGxldCA9IGNjLmluc3RhbnRpYXRlKGJ1bGxldCk7XHJcblx0XHRcdGJ1bGxldCA9IGJ1bGxldC5nZXRDb21wb25lbnQoJ0Zpc2hfYnVsbGV0Jyk7XHJcblx0XHRcdGJ1bGxldC5ub2RlLnggPSB4O1xyXG5cdFx0XHRidWxsZXQubm9kZS55ID0geTtcclxuXHRcdFx0YnVsbGV0Lm5vZGUuYW5nbGUgPSBhO1xyXG5cdFx0XHRidWxsZXQuYnVsbGV0ID0gdHlwZS0xO1xyXG5cdFx0XHRidWxsZXQuYm9keS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKHZ4LCB2eSk7XHJcblx0XHRcdGJ1bGxldC5SZWRUID0gdGhpcy5HYW1lLnBsYXllcjtcclxuXHRcdFx0dGhpcy5HYW1lLm5vZGVEYW4uYWRkQ2hpbGQoYnVsbGV0Lm5vZGUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=