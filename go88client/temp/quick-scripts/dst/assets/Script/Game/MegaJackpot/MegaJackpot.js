
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/MegaJackpot/MegaJackpot.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4a89726nBRKG4Pdyq0ZfjR6', 'MegaJackpot');
// Script/Game/MegaJackpot/MegaJackpot.js

"use strict";

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		background: sp.Skeleton,
		bg_move: cc.Node,
		menuGame: cc.Node,

		bgVQ: cc.Node,
		imgVQ: cc.Sprite,

		vqthanhdong: cc.SpriteFrame,
		vqbachkim: cc.SpriteFrame,
		vqhoangkim: cc.SpriteFrame,

		hu: cc.Label,
		luot: cc.Label,

		notice: cc.Node,

		spinNode: cc.Node,
		spinSprite: cc.Sprite,
		spinOn: cc.SpriteFrame,
		spinOff: cc.SpriteFrame,
		isSpin: false
	},
	init: function init(obj) {
		this.RedT = obj;
		cc.RedT.setting.MegaJackpot = cc.RedT.setting.MegaJackpot || { scale: 1, users: { 100: 0, 1000: 0, 10000: 0 } };
		this.game = 100;
		this.bgAnim = { 100: "thanhdong", 1000: "bachkim", 10000: "hoangkim" };

		var check = localStorage.getItem('MegaJackpot');
		if (check == "true") {
			this.node.active = true;
		}

		if (void 0 !== cc.RedT.setting.MegaJackpot.game) {
			if (cc.RedT.setting.MegaJackpot.game !== this.game) {
				this.changerGame(null, cc.RedT.setting.MegaJackpot.game);
			}
		} else {
			cc.RedT.setting.MegaJackpot.game = this.game = '100';
		}
		if (void 0 !== cc.RedT.setting.MegaJackpot.position) {
			this.node.position = cc.RedT.setting.MegaJackpot.position;
		}
	},
	onLoad: function onLoad() {
		this.RedT.Dialog.MegaJ_history.init(this);
		this.RedT.Dialog.MegaJ_top.init(this);
	},

	onEnable: function onEnable() {
		this.onGetHu();
		this.regUpdate();
		this.bg_move.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.bg_move.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.bg_move.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.bg_move.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
		// this.bg_move.on(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);
	},
	onDisable: function onDisable() {
		this.bg_move.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
		this.bg_move.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
		this.bg_move.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
		this.bg_move.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
		// this.bg_move.off(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);
	},
	eventStart: function eventStart(e) {
		this.setTop();
		this.ttOffset = cc.v2(e.touch.getLocationX() - this.node.position.x, e.touch.getLocationY() - this.node.position.y);
	},
	eventMove: function eventMove(e) {
		this.node.position = cc.v2(e.touch.getLocationX() - this.ttOffset.x, e.touch.getLocationY() - this.ttOffset.y);
	},
	eventEnd: function eventEnd() {
		cc.RedT.setting.MegaJackpot.position = this.node.position;
	},
	setTop: function setTop() {
		cc.RedT.setting.MegaJackpot.scale = 1;
		this.node.parent.insertChild(this.node);
		this.RedT.setTop(this.node);
	},
	changerGame: function changerGame(e, game) {
		cc.RedT.setting.MegaJackpot.game = this.game = game;
		if (this.bgAnim[game]) {
			this.background.setAnimation(0, this.bgAnim[game], true);
			this.imgVQ.spriteFrame = this['vq' + this.bgAnim[game]];
		}
		this.luot.string = cc.RedT.setting.MegaJackpot.users[game] + ' Lượt';
		this.menuGame.children.forEach(function (item) {
			if (item.name === game) {
				item.pauseSystemEvents();
				item.children[0].active = false;
				item.children[1].active = true;
			} else {
				item.resumeSystemEvents();
				item.children[0].active = true;
				item.children[1].active = false;
			}
		});
		this.onGetHu();
	},
	openGame: function openGame() {
		var game = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		cc.RedT.audio.playClick();
		if (cc.RedT.IS_LOGIN) {
			this.node.active = !0;
			localStorage.setItem('MegaJackpot', true);
			this.setTop();
			if (!!game) {
				this.changerGame(null, game);
			}
		} else cc.RedT.inGame.dialog.showSignIn();
	},
	closeGame: function closeGame() {
		this.node.active = !1;
		localStorage.setItem('MegaJackpot', false);
	},
	spin: function spin() {
		this.spinNode.pauseSystemEvents();
		this.spinSprite.spriteFrame = this.spinOff;
		if (!this.isSpin) {
			cc.RedT.send({ g: { megaj: { spin: this.game } } });
		}
	},
	onData: function onData(data) {
		if (!!data.status) {
			this.updateStatus(data.status);
		}
		if (!!data.notice) {
			this.addNotice(data.notice);
		}
		if (!!data.info) {
			this.info(data.info);
		}
		if (!!data.history) {
			this.RedT.Dialog.MegaJ_history.onData(data.history);
		}
		if (!!data.top) {
			this.RedT.Dialog.MegaJ_top.onData(data.top);
		}
	},
	info: function info(data) {
		cc.RedT.setting.MegaJackpot.users[100] = data[100];
		cc.RedT.setting.MegaJackpot.users[1000] = data[1000];
		cc.RedT.setting.MegaJackpot.users[10000] = data[10000];
		this.luot.string = data[this.game] + ' Lượt';
	},
	updateStatus: function updateStatus(data) {
		if (data.status === true) {
			this.isSpin = true;
			this.oldData = data;
			var action = cc.rotateTo(10, -(360 * 7 + data.data.position)).easing(cc.easeQuinticActionOut());
			var action2 = cc.rotateTo(10, -(360 * 7 + data.data.position)).easing(cc.easeQuinticActionOut());

			var p2 = cc.callFunc(function () {
				this.bgVQ.angle = -this.oldData.data.position;
				this.imgVQ.node.angle = -this.oldData.data.position;

				this.isSpin = false;
				this.spinNode.resumeSystemEvents();
				this.spinSprite.spriteFrame = this.spinOn;

				this.bgVQ.stopAllActions();
				this.imgVQ.node.stopAllActions();
				this.updateKQ();
			}, this);

			this.bgVQ.runAction(action);
			this.imgVQ.node.runAction(cc.sequence(action2, p2));
		} else {
			this.isSpin = false;
			this.spinNode.resumeSystemEvents();
			this.spinSprite.spriteFrame = this.spinOn;
		}
	},
	updateKQ: function updateKQ() {
		if (this.oldData.kq === 5) {
			// Thêm lượt
		} else if (this.oldData.kq === 12) {
			// Nổ hũ
		} else {
			/**
   if (this.oldData.data.thuong >= this.oldData.game*1000) {
   	// Thắng lớn
   }else{
   	// Thắng thường
   }
   */

			var temp = new cc.Node();
			temp.addComponent(cc.Label);
			temp = temp.getComponent(cc.Label);
			temp.string = helper.numberWithCommas(this.oldData.data.thuong);
			temp.font = cc.RedT.util.fontCong;
			temp.lineHeight = 130;
			temp.fontSize = 20;
			temp.node.position = cc.v2(0, 30);
			this.notice.addChild(temp.node);
			temp.node.runAction(cc.sequence(cc.moveTo(2.5, cc.v2(0, 150)), cc.callFunc(function () {
				temp.node.destroy();
			}, this)));
		}
	},
	regUpdate: function regUpdate() {
		cc.RedT.send({ g: { megaj: { update: true } } });
	},
	addNotice: function addNotice(text) {
		var notice = cc.instantiate(this.RedT.prefabMiniNotice);
		var noticeComponent = notice.getComponent('mini_warning');
		noticeComponent.text.string = text;
		this.notice.addChild(notice);
	},
	onGetHu: function onGetHu() {
		if (void 0 !== cc.RedT.setting.topHu.data && this.node.active) {
			var self = this;
			var data = cc.RedT.setting.topHu.data['megaj'].filter(function (temp) {
				return temp.type == self.game;
			});
			var s = helper.getOnlyNumberInString(this.hu.string);
			var bet = data[0].bet;
			if (s - bet !== 0) {
				helper.numberTo(this.hu, s, bet, 2000, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxNZWdhSmFja3BvdC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWVnYUphY2twb3QvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1lZ2FKYWNrcG90XFxNZWdhSmFja3BvdC5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja2dyb3VuZCIsInNwIiwiU2tlbGV0b24iLCJiZ19tb3ZlIiwiTm9kZSIsIm1lbnVHYW1lIiwiYmdWUSIsImltZ1ZRIiwiU3ByaXRlIiwidnF0aGFuaGRvbmciLCJTcHJpdGVGcmFtZSIsInZxYmFjaGtpbSIsInZxaG9hbmdraW0iLCJodSIsIkxhYmVsIiwibHVvdCIsIm5vdGljZSIsInNwaW5Ob2RlIiwic3BpblNwcml0ZSIsInNwaW5PbiIsInNwaW5PZmYiLCJpc1NwaW4iLCJpbml0Iiwib2JqIiwiUmVkVCIsInNldHRpbmciLCJNZWdhSmFja3BvdCIsInNjYWxlIiwidXNlcnMiLCJnYW1lIiwiYmdBbmltIiwiY2hlY2siLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibm9kZSIsImFjdGl2ZSIsImNoYW5nZXJHYW1lIiwicG9zaXRpb24iLCJvbkxvYWQiLCJEaWFsb2ciLCJNZWdhSl9oaXN0b3J5IiwiTWVnYUpfdG9wIiwib25FbmFibGUiLCJvbkdldEh1IiwicmVnVXBkYXRlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsImV2ZW50U3RhcnQiLCJUT1VDSF9NT1ZFIiwiZXZlbnRNb3ZlIiwiVE9VQ0hfRU5EIiwiZXZlbnRFbmQiLCJUT1VDSF9DQU5DRUwiLCJvbkRpc2FibGUiLCJvZmYiLCJlIiwic2V0VG9wIiwidHRPZmZzZXQiLCJ2MiIsInRvdWNoIiwiZ2V0TG9jYXRpb25YIiwieCIsImdldExvY2F0aW9uWSIsInkiLCJwYXJlbnQiLCJpbnNlcnRDaGlsZCIsInNldEFuaW1hdGlvbiIsInNwcml0ZUZyYW1lIiwic3RyaW5nIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiaXRlbSIsIm5hbWUiLCJwYXVzZVN5c3RlbUV2ZW50cyIsInJlc3VtZVN5c3RlbUV2ZW50cyIsIm9wZW5HYW1lIiwiYXVkaW8iLCJwbGF5Q2xpY2siLCJJU19MT0dJTiIsInNldEl0ZW0iLCJpbkdhbWUiLCJkaWFsb2ciLCJzaG93U2lnbkluIiwiY2xvc2VHYW1lIiwic3BpbiIsInNlbmQiLCJnIiwibWVnYWoiLCJvbkRhdGEiLCJkYXRhIiwic3RhdHVzIiwidXBkYXRlU3RhdHVzIiwiYWRkTm90aWNlIiwiaW5mbyIsImhpc3RvcnkiLCJ0b3AiLCJvbGREYXRhIiwiYWN0aW9uIiwicm90YXRlVG8iLCJlYXNpbmciLCJlYXNlUXVpbnRpY0FjdGlvbk91dCIsImFjdGlvbjIiLCJwMiIsImNhbGxGdW5jIiwiYW5nbGUiLCJzdG9wQWxsQWN0aW9ucyIsInVwZGF0ZUtRIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJrcSIsInRlbXAiLCJhZGRDb21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJudW1iZXJXaXRoQ29tbWFzIiwidGh1b25nIiwiZm9udCIsInV0aWwiLCJmb250Q29uZyIsImxpbmVIZWlnaHQiLCJmb250U2l6ZSIsImFkZENoaWxkIiwibW92ZVRvIiwiZGVzdHJveSIsInVwZGF0ZSIsInRleHQiLCJpbnN0YW50aWF0ZSIsInByZWZhYk1pbmlOb3RpY2UiLCJub3RpY2VDb21wb25lbnQiLCJ0b3BIdSIsInNlbGYiLCJmaWx0ZXIiLCJ0eXBlIiwicyIsImdldE9ubHlOdW1iZXJJblN0cmluZyIsImJldCIsIm51bWJlclRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMs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QUFMLENBQVl5RyxRQUFaLENBQXFCekcsTUFBckI7QUFDQSxFQXJOTztBQXNOUjJCLFVBQVMsbUJBQVU7QUFDbEIsTUFBSSxLQUFLLENBQUwsS0FBV2hELEdBQUc2QixJQUFILENBQVFDLE9BQVIsQ0FBZ0J3RyxLQUFoQixDQUFzQnZDLElBQWpDLElBQXlDLEtBQUt4RCxJQUFMLENBQVVDLE1BQXZELEVBQStEO0FBQzlELE9BQUkrRixPQUFPLElBQVg7QUFDQSxPQUFJeEMsT0FBTy9GLEdBQUc2QixJQUFILENBQVFDLE9BQVIsQ0FBZ0J3RyxLQUFoQixDQUFzQnZDLElBQXRCLENBQTJCLE9BQTNCLEVBQW9DeUMsTUFBcEMsQ0FBMkMsVUFBU3BCLElBQVQsRUFBYztBQUNuRSxXQUFPQSxLQUFLcUIsSUFBTCxJQUFhRixLQUFLckcsSUFBekI7QUFDQSxJQUZVLENBQVg7QUFHQSxPQUFJd0csSUFBSTVJLE9BQU82SSxxQkFBUCxDQUE2QixLQUFLekgsRUFBTCxDQUFRd0QsTUFBckMsQ0FBUjtBQUNBLE9BQUlrRSxNQUFNN0MsS0FBSyxDQUFMLEVBQVE2QyxHQUFsQjtBQUNBLE9BQUlGLElBQUVFLEdBQUYsS0FBVSxDQUFkLEVBQWdCO0FBQ2Y5SSxXQUFPK0ksUUFBUCxDQUFnQixLQUFLM0gsRUFBckIsRUFBeUJ3SCxDQUF6QixFQUE0QkUsR0FBNUIsRUFBaUMsSUFBakMsRUFBdUMsSUFBdkM7QUFDQTtBQUNEO0FBQ0Q7QUFsT08sQ0FBVCIsImZpbGUiOiJNZWdhSmFja3BvdC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWVnYUphY2twb3QiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0YmFja2dyb3VuZDogIHNwLlNrZWxldG9uLFxyXG5cdFx0YmdfbW92ZTogICAgIGNjLk5vZGUsXHJcblx0XHRtZW51R2FtZTogICAgY2MuTm9kZSxcclxuXHJcblx0XHRiZ1ZROiAgICAgICAgY2MuTm9kZSxcclxuXHRcdGltZ1ZROiAgICAgICBjYy5TcHJpdGUsXHJcblxyXG5cdFx0dnF0aGFuaGRvbmc6IGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0dnFiYWNoa2ltOiAgIGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0dnFob2FuZ2tpbTogIGNjLlNwcml0ZUZyYW1lLFxyXG5cclxuXHRcdGh1OiAgICAgICAgICBjYy5MYWJlbCxcclxuXHRcdGx1b3Q6ICAgICAgICBjYy5MYWJlbCxcclxuXHJcblx0XHRub3RpY2U6ICAgICAgIGNjLk5vZGUsXHJcblxyXG5cdFx0c3Bpbk5vZGU6ICAgICBjYy5Ob2RlLFxyXG5cdFx0c3BpblNwcml0ZTogICBjYy5TcHJpdGUsXHJcblx0XHRzcGluT246ICAgICAgIGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0c3Bpbk9mZjogICAgICBjYy5TcHJpdGVGcmFtZSxcclxuXHRcdGlzU3BpbjogICAgICAgZmFsc2UsXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbihvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdFx0Y2MuUmVkVC5zZXR0aW5nLk1lZ2FKYWNrcG90ID0gY2MuUmVkVC5zZXR0aW5nLk1lZ2FKYWNrcG90IHx8IHtzY2FsZToxLCB1c2Vyczp7MTAwOjAsIDEwMDA6MCwgMTAwMDA6MH19O1xyXG5cdFx0dGhpcy5nYW1lID0gMTAwO1xyXG5cdFx0dGhpcy5iZ0FuaW0gPSB7MTAwOlwidGhhbmhkb25nXCIsIDEwMDA6XCJiYWNoa2ltXCIsIDEwMDAwOlwiaG9hbmdraW1cIn07XHJcblxyXG5cdFx0bGV0IGNoZWNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ01lZ2FKYWNrcG90Jyk7XHJcblx0XHRpZiAoY2hlY2sgPT0gXCJ0cnVlXCIpIHtcclxuXHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gY2MuUmVkVC5zZXR0aW5nLk1lZ2FKYWNrcG90LmdhbWUpIHtcclxuXHRcdFx0aWYgKGNjLlJlZFQuc2V0dGluZy5NZWdhSmFja3BvdC5nYW1lICE9PSB0aGlzLmdhbWUpIHtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZXJHYW1lKG51bGwsIGNjLlJlZFQuc2V0dGluZy5NZWdhSmFja3BvdC5nYW1lKTtcclxuXHRcdFx0fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNjLlJlZFQuc2V0dGluZy5NZWdhSmFja3BvdC5nYW1lID0gdGhpcy5nYW1lID0gJzEwMCc7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBjYy5SZWRULnNldHRpbmcuTWVnYUphY2twb3QucG9zaXRpb24pIHtcclxuXHRcdFx0dGhpcy5ub2RlLnBvc2l0aW9uID0gY2MuUmVkVC5zZXR0aW5nLk1lZ2FKYWNrcG90LnBvc2l0aW9uO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25Mb2FkICgpIHtcclxuXHRcdHRoaXMuUmVkVC5EaWFsb2cuTWVnYUpfaGlzdG9yeS5pbml0KHRoaXMpO1xyXG5cdFx0dGhpcy5SZWRULkRpYWxvZy5NZWdhSl90b3AuaW5pdCh0aGlzKTtcclxuXHR9LFxyXG5cdG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMub25HZXRIdSgpO1xyXG5cdFx0dGhpcy5yZWdVcGRhdGUoKTtcclxuXHRcdHRoaXMuYmdfbW92ZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgIHRoaXMuZXZlbnRTdGFydCwgdGhpcyk7XHJcblx0XHR0aGlzLmJnX21vdmUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgICB0aGlzLmV2ZW50TW92ZSwgIHRoaXMpO1xyXG5cdFx0dGhpcy5iZ19tb3ZlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgICAgdGhpcy5ldmVudEVuZCwgICB0aGlzKTtcclxuXHRcdHRoaXMuYmdfbW92ZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuZXZlbnRFbmQsICAgdGhpcyk7XHJcblx0XHQvLyB0aGlzLmJnX21vdmUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsICB0aGlzLnNldFRvcCwgICAgIHRoaXMpO1xyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuYmdfbW92ZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICB0aGlzLmV2ZW50U3RhcnQsIHRoaXMpO1xyXG5cdFx0dGhpcy5iZ19tb3ZlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAgIHRoaXMuZXZlbnRNb3ZlLCAgdGhpcyk7XHJcblx0XHR0aGlzLmJnX21vdmUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgICAgdGhpcy5ldmVudEVuZCwgICB0aGlzKTtcclxuXHRcdHRoaXMuYmdfbW92ZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLmV2ZW50RW5kLCAgIHRoaXMpO1xyXG5cdFx0Ly8gdGhpcy5iZ19tb3ZlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgIHRoaXMuc2V0VG9wLCAgICAgdGhpcyk7XHJcblx0fSxcclxuXHRldmVudFN0YXJ0OiBmdW5jdGlvbihlKXtcclxuXHRcdHRoaXMuc2V0VG9wKCk7XHJcblx0XHR0aGlzLnR0T2Zmc2V0ID0gY2MudjIoZS50b3VjaC5nZXRMb2NhdGlvblgoKSAtIHRoaXMubm9kZS5wb3NpdGlvbi54LCBlLnRvdWNoLmdldExvY2F0aW9uWSgpIC0gdGhpcy5ub2RlLnBvc2l0aW9uLnkpO1xyXG5cdH0sXHJcblx0ZXZlbnRNb3ZlOiBmdW5jdGlvbihlKXtcclxuXHRcdHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYyKGUudG91Y2guZ2V0TG9jYXRpb25YKCkgLSB0aGlzLnR0T2Zmc2V0LngsIGUudG91Y2guZ2V0TG9jYXRpb25ZKCkgLSB0aGlzLnR0T2Zmc2V0LnkpO1xyXG5cdH0sXHJcblx0ZXZlbnRFbmQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULnNldHRpbmcuTWVnYUphY2twb3QucG9zaXRpb24gPSB0aGlzLm5vZGUucG9zaXRpb247XHJcblx0fSxcclxuXHRzZXRUb3A6ZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuc2V0dGluZy5NZWdhSmFja3BvdC5zY2FsZSA9IDE7XHJcblx0XHR0aGlzLm5vZGUucGFyZW50Lmluc2VydENoaWxkKHRoaXMubm9kZSk7XHJcblx0XHR0aGlzLlJlZFQuc2V0VG9wKHRoaXMubm9kZSk7XHJcblx0fSxcclxuXHRjaGFuZ2VyR2FtZTpmdW5jdGlvbihlLCBnYW1lKXtcclxuXHRcdGNjLlJlZFQuc2V0dGluZy5NZWdhSmFja3BvdC5nYW1lID0gdGhpcy5nYW1lID0gZ2FtZTtcclxuXHRcdGlmICh0aGlzLmJnQW5pbVtnYW1lXSkge1xyXG5cdFx0XHR0aGlzLmJhY2tncm91bmQuc2V0QW5pbWF0aW9uKDAsIHRoaXMuYmdBbmltW2dhbWVdLCB0cnVlKTtcclxuXHRcdFx0dGhpcy5pbWdWUS5zcHJpdGVGcmFtZSA9IHRoaXNbJ3ZxJyt0aGlzLmJnQW5pbVtnYW1lXV07XHJcblx0XHR9XHJcblx0XHR0aGlzLmx1b3Quc3RyaW5nID0gY2MuUmVkVC5zZXR0aW5nLk1lZ2FKYWNrcG90LnVzZXJzW2dhbWVdICsgJyBMxrDhu6N0JztcclxuXHRcdHRoaXMubWVudUdhbWUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihpdGVtKXtcclxuXHRcdFx0aWYgKGl0ZW0ubmFtZSA9PT0gZ2FtZSkge1xyXG5cdFx0XHRcdGl0ZW0ucGF1c2VTeXN0ZW1FdmVudHMoKTtcclxuXHRcdFx0XHRpdGVtLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGl0ZW0uY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aXRlbS5yZXN1bWVTeXN0ZW1FdmVudHMoKTtcclxuXHRcdFx0XHRpdGVtLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0aXRlbS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLm9uR2V0SHUoKTtcclxuXHR9LFxyXG5cdG9wZW5HYW1lOiBmdW5jdGlvbiAoZ2FtZSA9IG51bGwpIHtcclxuXHRcdGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcblx0XHRpZiAoY2MuUmVkVC5JU19MT0dJTil7XHJcblx0XHRcdHRoaXMubm9kZS5hY3RpdmUgPSAhMDtcclxuXHRcdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01lZ2FKYWNrcG90JywgdHJ1ZSk7XHJcblx0XHRcdHRoaXMuc2V0VG9wKCk7XHJcblx0XHRcdGlmICghIWdhbWUpIHtcclxuXHRcdFx0XHR0aGlzLmNoYW5nZXJHYW1lKG51bGwsIGdhbWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2UgY2MuUmVkVC5pbkdhbWUuZGlhbG9nLnNob3dTaWduSW4oKTtcclxuXHR9LFxyXG5cdGNsb3NlR2FtZTpmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9ICExO1xyXG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01lZ2FKYWNrcG90JywgZmFsc2UpO1xyXG5cdH0sXHJcblx0c3BpbjogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc3Bpbk5vZGUucGF1c2VTeXN0ZW1FdmVudHMoKTtcclxuXHRcdHRoaXMuc3BpblNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3Bpbk9mZjtcclxuXHRcdGlmICghdGhpcy5pc1NwaW4pIHtcclxuXHRcdFx0Y2MuUmVkVC5zZW5kKHtnOnttZWdhajp7c3Bpbjp0aGlzLmdhbWV9fX0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmICghIWRhdGEuc3RhdHVzKSB7XHJcblx0XHRcdHRoaXMudXBkYXRlU3RhdHVzKGRhdGEuc3RhdHVzKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEubm90aWNlKSB7XHJcblx0XHRcdHRoaXMuYWRkTm90aWNlKGRhdGEubm90aWNlKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEuaW5mbykge1xyXG5cdFx0XHR0aGlzLmluZm8oZGF0YS5pbmZvKTtcclxuXHRcdH1cclxuXHRcdGlmICghIWRhdGEuaGlzdG9yeSkge1xyXG5cdFx0XHR0aGlzLlJlZFQuRGlhbG9nLk1lZ2FKX2hpc3Rvcnkub25EYXRhKGRhdGEuaGlzdG9yeSk7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLnRvcCkge1xyXG5cdFx0XHR0aGlzLlJlZFQuRGlhbG9nLk1lZ2FKX3RvcC5vbkRhdGEoZGF0YS50b3ApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5mbzogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRjYy5SZWRULnNldHRpbmcuTWVnYUphY2twb3QudXNlcnNbMTAwXSAgID0gZGF0YVsxMDBdO1xyXG5cdFx0Y2MuUmVkVC5zZXR0aW5nLk1lZ2FKYWNrcG90LnVzZXJzWzEwMDBdICA9IGRhdGFbMTAwMF07XHJcblx0XHRjYy5SZWRULnNldHRpbmcuTWVnYUphY2twb3QudXNlcnNbMTAwMDBdID0gZGF0YVsxMDAwMF07XHJcblx0XHR0aGlzLmx1b3Quc3RyaW5nID0gZGF0YVt0aGlzLmdhbWVdICsgJyBMxrDhu6N0JztcclxuXHR9LFxyXG5cdHVwZGF0ZVN0YXR1czogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRpZiAoZGF0YS5zdGF0dXMgPT09IHRydWUpIHtcclxuXHRcdFx0dGhpcy5pc1NwaW4gPSB0cnVlO1xyXG5cdFx0XHR0aGlzLm9sZERhdGEgPSBkYXRhO1xyXG5cdFx0XHRsZXQgYWN0aW9uID0gY2Mucm90YXRlVG8oMTAsICAtKCgzNjAqNykrZGF0YS5kYXRhLnBvc2l0aW9uKSkuZWFzaW5nKGNjLmVhc2VRdWludGljQWN0aW9uT3V0KCkpO1xyXG5cdFx0XHRsZXQgYWN0aW9uMiA9IGNjLnJvdGF0ZVRvKDEwLCAtKCgzNjAqNykrZGF0YS5kYXRhLnBvc2l0aW9uKSkuZWFzaW5nKGNjLmVhc2VRdWludGljQWN0aW9uT3V0KCkpO1xyXG5cclxuXHRcdFx0dmFyIHAyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhpcy5iZ1ZRLmFuZ2xlICAgICAgID0gLXRoaXMub2xkRGF0YS5kYXRhLnBvc2l0aW9uO1xyXG5cdFx0XHRcdHRoaXMuaW1nVlEubm9kZS5hbmdsZSA9IC10aGlzLm9sZERhdGEuZGF0YS5wb3NpdGlvbjtcclxuXHJcblx0XHRcdFx0dGhpcy5pc1NwaW4gPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLnNwaW5Ob2RlLnJlc3VtZVN5c3RlbUV2ZW50cygpO1xyXG5cdFx0XHRcdHRoaXMuc3BpblNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3Bpbk9uO1xyXG5cclxuXHRcdFx0XHR0aGlzLmJnVlEuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdFx0XHR0aGlzLmltZ1ZRLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdFx0XHR0aGlzLnVwZGF0ZUtRKCk7XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cclxuXHRcdFx0dGhpcy5iZ1ZRLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG5cdFx0XHR0aGlzLmltZ1ZRLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbjIsIHAyKSk7XHJcblxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuaXNTcGluID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuc3Bpbk5vZGUucmVzdW1lU3lzdGVtRXZlbnRzKCk7XHJcblx0XHRcdHRoaXMuc3BpblNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuc3Bpbk9uO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dXBkYXRlS1E6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZiAodGhpcy5vbGREYXRhLmtxID09PSA1KSB7XHJcblx0XHRcdC8vIFRow6ptIGzGsOG7o3RcclxuXHRcdH1lbHNlIGlmICh0aGlzLm9sZERhdGEua3EgPT09IDEyKSB7XHJcblx0XHRcdC8vIE7hu5UgaMWpXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0LyoqXHJcblx0XHRcdGlmICh0aGlzLm9sZERhdGEuZGF0YS50aHVvbmcgPj0gdGhpcy5vbGREYXRhLmdhbWUqMTAwMCkge1xyXG5cdFx0XHRcdC8vIFRo4bqvbmcgbOG7m25cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Ly8gVGjhuq9uZyB0aMaw4budbmdcclxuXHRcdFx0fVxyXG5cdFx0XHQqL1xyXG5cclxuXHRcdFx0dmFyIHRlbXAgPSBuZXcgY2MuTm9kZTtcclxuXHRcdFx0dGVtcC5hZGRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cdFx0XHR0ZW1wID0gdGVtcC5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG5cdFx0XHR0ZW1wLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMub2xkRGF0YS5kYXRhLnRodW9uZyk7XHJcblx0XHRcdHRlbXAuZm9udCA9IGNjLlJlZFQudXRpbC5mb250Q29uZztcclxuXHRcdFx0dGVtcC5saW5lSGVpZ2h0ID0gMTMwO1xyXG5cdFx0XHR0ZW1wLmZvbnRTaXplICAgPSAyMDtcclxuXHRcdFx0dGVtcC5ub2RlLnBvc2l0aW9uID0gY2MudjIoMCwgMzApO1xyXG5cdFx0XHR0aGlzLm5vdGljZS5hZGRDaGlsZCh0ZW1wLm5vZGUpO1xyXG5cdFx0XHR0ZW1wLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygyLjUsIGNjLnYyKDAsIDE1MCkpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHRlbXAubm9kZS5kZXN0cm95KCk7XHJcblx0XHRcdH0sIHRoaXMpKSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRyZWdVcGRhdGU6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULnNlbmQoe2c6e21lZ2FqOnt1cGRhdGU6dHJ1ZX19fSk7XHJcblx0fSxcclxuXHRhZGROb3RpY2U6ZnVuY3Rpb24odGV4dCl7XHJcblx0XHR2YXIgbm90aWNlID0gY2MuaW5zdGFudGlhdGUodGhpcy5SZWRULnByZWZhYk1pbmlOb3RpY2UpO1xyXG5cdFx0dmFyIG5vdGljZUNvbXBvbmVudCA9IG5vdGljZS5nZXRDb21wb25lbnQoJ21pbmlfd2FybmluZycpO1xyXG5cdFx0bm90aWNlQ29tcG9uZW50LnRleHQuc3RyaW5nID0gdGV4dDtcclxuXHRcdHRoaXMubm90aWNlLmFkZENoaWxkKG5vdGljZSk7XHJcblx0fSxcclxuXHRvbkdldEh1OiBmdW5jdGlvbigpe1xyXG5cdFx0aWYgKHZvaWQgMCAhPT0gY2MuUmVkVC5zZXR0aW5nLnRvcEh1LmRhdGEgJiYgdGhpcy5ub2RlLmFjdGl2ZSkge1xyXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHRcdGxldCBkYXRhID0gY2MuUmVkVC5zZXR0aW5nLnRvcEh1LmRhdGFbJ21lZ2FqJ10uZmlsdGVyKGZ1bmN0aW9uKHRlbXApe1xyXG5cdFx0XHRcdHJldHVybiB0ZW1wLnR5cGUgPT0gc2VsZi5nYW1lO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0dmFyIHMgPSBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaHUuc3RyaW5nKTtcclxuXHRcdFx0dmFyIGJldCA9IGRhdGFbMF0uYmV0O1xyXG5cdFx0XHRpZiAocy1iZXQgIT09IDApe1xyXG5cdFx0XHRcdGhlbHBlci5udW1iZXJUbyh0aGlzLmh1LCBzLCBiZXQsIDIwMDAsIHRydWUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==