
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/dialog/Fish_setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3af62nlji9BdI0pcvYU8uOn', 'Fish_setting');
// Script/Game/BanCa/dialog/Fish_setting.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {
		touchNhacNen: cc.Node,
		maskNhacNen: cc.Node,

		touchHieuUng: cc.Node,
		maskHieuUng: cc.Node
	},
	init: function init() {
		if (cc.RedT.isSoundBackground()) {
			cc.RedT.audio.bg.play();
			var t = setInterval(function () {
				console.log(cc.RedT.audio.bg.clip.loaded);
				if (cc.RedT.audio.bg.clip.loaded) {
					clearInterval(t);
					cc.RedT.audio.bg.play();
				}
			}.bind(this), 100);

			this.setNhacNen(294);
		} else {
			this.setNhacNen(0);
		}
		if (cc.RedT.isSoundGame()) {
			this.setHieuUng(294);
		} else {
			this.setHieuUng(0);
		}
	},
	onEnable: function onEnable() {
		this.node.runAction(cc.RedT.inGame.dialog.actionShow);
		this.touchNhacNen.on(cc.Node.EventType.TOUCH_START, this.nhacNenStart, this);
		this.touchNhacNen.on(cc.Node.EventType.TOUCH_MOVE, this.nhacNenMove, this);
		this.touchNhacNen.on(cc.Node.EventType.TOUCH_END, this.nhacNenEnd, this);
		this.touchNhacNen.on(cc.Node.EventType.TOUCH_CANCEL, this.nhacNenEnd, this);

		this.touchHieuUng.on(cc.Node.EventType.TOUCH_START, this.hieuUngStart, this);
		this.touchHieuUng.on(cc.Node.EventType.TOUCH_MOVE, this.hieuUngMove, this);
		this.touchHieuUng.on(cc.Node.EventType.TOUCH_END, this.hieuUngEnd, this);
		this.touchHieuUng.on(cc.Node.EventType.TOUCH_CANCEL, this.hieuUngEnd, this);
	},
	onDisable: function onDisable() {
		cc.RedT.inGame.dialog.resetSizeDialog(this.node);
		this.touchHieuUng.off(cc.Node.EventType.TOUCH_START, this.hieuUngStart, this);
		this.touchHieuUng.off(cc.Node.EventType.TOUCH_MOVE, this.hieuUngMove, this);
		this.touchHieuUng.off(cc.Node.EventType.TOUCH_END, this.hieuUngEnd, this);
		this.touchHieuUng.off(cc.Node.EventType.TOUCH_CANCEL, this.hieuUngEnd, this);
	},
	nhacNenStart: function nhacNenStart(e) {
		this.touchNhacNen.runAction(cc.scaleTo(0.1, 1.1));
		this.nhacNenX = { localX: e.touch.getLocationX(), x: this.touchNhacNen.x };
	},
	nhacNenMove: function nhacNenMove(e) {
		var x = e.touch.getLocationX() - this.nhacNenX.localX + this.nhacNenX.x;
		if (x < 0) {
			x = 0;
		} else if (x > 294) {
			x = 294;
		}
		this.setNhacNen(x);
	},
	nhacNenEnd: function nhacNenEnd() {
		this.touchNhacNen.runAction(cc.scaleTo(0.1, 1));
	},
	setNhacNen: function setNhacNen(point) {
		this.maskNhacNen.width = point;
		this.touchNhacNen.x = point;
		var volume = point / 294;
		cc.RedT.audio.fishHall.volume = volume;
		cc.RedT.audio.fishBG1.volume = volume;
		cc.RedT.audio.fishBG2.volume = volume;
		cc.RedT.inGame.volumeNhacNen = volume;
		if (volume === 0) {
			cc.RedT.audio.bg.stop();
			cc.RedT.setSoundBackground(false);
		} else {
			cc.RedT.audio.bg.resume();
			cc.RedT.setSoundBackground(true);
			if (cc.RedT.audio.bg.isPlaying === false) {
				cc.RedT.audio.bg.play();
				var t = setInterval(function () {
					console.log(cc.RedT.audio.bg.clip.loaded);
					if (cc.RedT.audio.bg.clip.loaded) {
						clearInterval(t);
						cc.RedT.audio.bg.play();
					}
				}.bind(this), 100);
			}
		}
	},

	hieuUngStart: function hieuUngStart(e) {
		this.touchHieuUng.runAction(cc.scaleTo(0.1, 1.1));
		this.hieuUngX = { localX: e.touch.getLocationX(), x: this.touchHieuUng.x };
	},
	hieuUngMove: function hieuUngMove(e) {
		var x = e.touch.getLocationX() - this.hieuUngX.localX + this.hieuUngX.x;
		if (x < 0) {
			x = 0;
		} else if (x > 294) {
			x = 294;
		}
		this.setHieuUng(x);
	},
	hieuUngEnd: function hieuUngEnd() {
		this.touchHieuUng.runAction(cc.scaleTo(0.1, 1));
	},
	setHieuUng: function setHieuUng(point) {
		this.maskHieuUng.width = point;
		this.touchHieuUng.x = point;
		var volume = point / 294;
		cc.RedT.inGame.audioClick.volume = volume;
		cc.RedT.inGame.volumeHieuUng = volume;
		if (volume === 0) {
			cc.RedT.setSoundGame(false);
		} else {
			cc.RedT.setSoundGame(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXGRpYWxvZy8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxkaWFsb2cvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxkaWFsb2dcXEZpc2hfc2V0dGluZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0b3VjaE5oYWNOZW4iLCJOb2RlIiwibWFza05oYWNOZW4iLCJ0b3VjaEhpZXVVbmciLCJtYXNrSGlldVVuZyIsImluaXQiLCJSZWRUIiwiaXNTb3VuZEJhY2tncm91bmQiLCJhdWRpbyIsImJnIiwicGxheSIsInQiLCJzZXRJbnRlcnZhbCIsImNvbnNvbGUiLCJsb2ciLCJjbGlwIiwibG9hZGVkIiwiY2xlYXJJbnRlcnZhbCIsImJpbmQiLCJzZXROaGFjTmVuIiwiaXNTb3VuZEdhbWUiLCJzZXRIaWV1VW5nIiwib25FbmFibGUiLCJub2RlIiwicnVuQWN0aW9uIiwiaW5HYW1lIiwiZGlhbG9nIiwiYWN0aW9uU2hvdyIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJuaGFjTmVuU3RhcnQiLCJUT1VDSF9NT1ZFIiwibmhhY05lbk1vdmUiLCJUT1VDSF9FTkQiLCJuaGFjTmVuRW5kIiwiVE9VQ0hfQ0FOQ0VMIiwiaGlldVVuZ1N0YXJ0IiwiaGlldVVuZ01vdmUiLCJoaWV1VW5nRW5kIiwib25EaXNhYmxlIiwicmVzZXRTaXplRGlhbG9nIiwib2ZmIiwiZSIsInNjYWxlVG8iLCJuaGFjTmVuWCIsImxvY2FsWCIsInRvdWNoIiwiZ2V0TG9jYXRpb25YIiwieCIsInBvaW50Iiwid2lkdGgiLCJ2b2x1bWUiLCJmaXNoSGFsbCIsImZpc2hCRzEiLCJmaXNoQkcyIiwidm9sdW1lTmhhY05lbiIsInN0b3AiLCJzZXRTb3VuZEJhY2tncm91bmQiLCJyZXN1bWUiLCJpc1BsYXlpbmciLCJoaWV1VW5nWCIsImF1ZGlvQ2xpY2siLCJ2b2x1bWVIaWV1VW5nIiwic2V0U291bmRHYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjtBQUVSQyxhQUFZO0FBQ1hDLGdCQUFjTCxHQUFHTSxJQUROO0FBRVhDLGVBQWNQLEdBQUdNLElBRk47O0FBSVhFLGdCQUFjUixHQUFHTSxJQUpOO0FBS1hHLGVBQWNULEdBQUdNO0FBTE4sRUFGSjtBQVNSSSxPQUFNLGdCQUFXO0FBQ2hCLE1BQUlWLEdBQUdXLElBQUgsQ0FBUUMsaUJBQVIsRUFBSixFQUFpQztBQUNoQ1osTUFBR1csSUFBSCxDQUFRRSxLQUFSLENBQWNDLEVBQWQsQ0FBaUJDLElBQWpCO0FBQ0EsT0FBSUMsSUFBSUMsWUFBWSxZQUFVO0FBQzdCQyxZQUFRQyxHQUFSLENBQVluQixHQUFHVyxJQUFILENBQVFFLEtBQVIsQ0FBY0MsRUFBZCxDQUFpQk0sSUFBakIsQ0FBc0JDLE1BQWxDO0FBQ0EsUUFBR3JCLEdBQUdXLElBQUgsQ0FBUUUsS0FBUixDQUFjQyxFQUFkLENBQWlCTSxJQUFqQixDQUFzQkMsTUFBekIsRUFBZ0M7QUFDL0JDLG1CQUFjTixDQUFkO0FBQ0FoQixRQUFHVyxJQUFILENBQVFFLEtBQVIsQ0FBY0MsRUFBZCxDQUFpQkMsSUFBakI7QUFDQTtBQUNELElBTm1CLENBTWxCUSxJQU5rQixDQU1iLElBTmEsQ0FBWixFQU1LLEdBTkwsQ0FBUjs7QUFRQSxRQUFLQyxVQUFMLENBQWdCLEdBQWhCO0FBQ0EsR0FYRCxNQVdLO0FBQ0osUUFBS0EsVUFBTCxDQUFnQixDQUFoQjtBQUNBO0FBQ0QsTUFBSXhCLEdBQUdXLElBQUgsQ0FBUWMsV0FBUixFQUFKLEVBQTJCO0FBQzFCLFFBQUtDLFVBQUwsQ0FBZ0IsR0FBaEI7QUFDQSxHQUZELE1BRUs7QUFDSixRQUFLQSxVQUFMLENBQWdCLENBQWhC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LENBQUo7QUFDQSxHQUZELE1BRU0sSUFBR0EsSUFBSSxHQUFQLEVBQVc7QUFDaEJBLE9BQUksR0FBSjtBQUNBO0FBQ0QsT0FBSzVCLFVBQUwsQ0FBZ0I0QixDQUFoQjtBQUNBLEVBeEdPO0FBeUdSVixhQUFZLHNCQUFVO0FBQ3JCLE9BQUtwQyxZQUFMLENBQWtCcUIsU0FBbEIsQ0FBNEI3QixHQUFHaUQsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBNUI7QUFDQSxFQTNHTztBQTRHUnZCLGFBQVksb0JBQVM2QixLQUFULEVBQWU7QUFDMUIsT0FBSzlDLFdBQUwsQ0FBaUIrQyxLQUFqQixHQUF5QkQsS0FBekI7QUFDQSxPQUFLL0MsWUFBTCxDQUFrQjhDLENBQWxCLEdBQXNCQyxLQUF0QjtBQUNBLE1BQUlFLFNBQVNGLFFBQU0sR0FBbkI7QUFDQXZELEtBQUdXLElBQUgsQ0FBUW1CLE1BQVIsQ0FBZXFDLFVBQWYsQ0FBMEJWLE1BQTFCLEdBQW1DQSxNQUFuQztBQUNBekQsS0FBR1csSUFBSCxDQUFRbUIsTUFBUixDQUFlc0MsYUFBZixHQUErQlgsTUFBL0I7QUFDQSxNQUFJQSxXQUFXLENBQWYsRUFBa0I7QUFDakJ6RCxNQUFHVyxJQUFILENBQVEwRCxZQUFSLENBQXFCLEtBQXJCO0FBQ0EsR0FGRCxNQUVLO0FBQ0pyRSxNQUFHVyxJQUFILENBQVEwRCxZQUFSLENBQXFCLElBQXJCO0FBQ0E7QUFDRDtBQXZITyxDQUFUIiwiZmlsZSI6IkZpc2hfc2V0dGluZy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxkaWFsb2ciLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHR0b3VjaE5oYWNOZW46IGNjLk5vZGUsXHJcblx0XHRtYXNrTmhhY05lbjogIGNjLk5vZGUsXHJcblxyXG5cdFx0dG91Y2hIaWV1VW5nOiBjYy5Ob2RlLFxyXG5cdFx0bWFza0hpZXVVbmc6ICBjYy5Ob2RlLFxyXG5cdH0sXHJcblx0aW5pdDogZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoY2MuUmVkVC5pc1NvdW5kQmFja2dyb3VuZCgpKSB7XHJcblx0XHRcdGNjLlJlZFQuYXVkaW8uYmcucGxheSgpO1xyXG5cdFx0XHRsZXQgdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coY2MuUmVkVC5hdWRpby5iZy5jbGlwLmxvYWRlZCk7XHJcblx0XHRcdFx0aWYoY2MuUmVkVC5hdWRpby5iZy5jbGlwLmxvYWRlZCl7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHQpO1xyXG5cdFx0XHRcdFx0Y2MuUmVkVC5hdWRpby5iZy5wbGF5KCk7XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdH0uYmluZCh0aGlzKSwxMDApO1xyXG5cclxuXHRcdFx0dGhpcy5zZXROaGFjTmVuKDI5NCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zZXROaGFjTmVuKDApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGNjLlJlZFQuaXNTb3VuZEdhbWUoKSkge1xyXG5cdFx0XHR0aGlzLnNldEhpZXVVbmcoMjk0KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLnNldEhpZXVVbmcoMCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5hY3Rpb25TaG93KTtcclxuXHRcdHRoaXMudG91Y2hOaGFjTmVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAgdGhpcy5uaGFjTmVuU3RhcnQsIHRoaXMpO1xyXG5cdFx0dGhpcy50b3VjaE5oYWNOZW4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgICB0aGlzLm5oYWNOZW5Nb3ZlLCAgdGhpcyk7XHJcblx0XHR0aGlzLnRvdWNoTmhhY05lbi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICAgIHRoaXMubmhhY05lbkVuZCwgICB0aGlzKTtcclxuXHRcdHRoaXMudG91Y2hOaGFjTmVuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5uaGFjTmVuRW5kLCAgIHRoaXMpO1xyXG5cclxuXHRcdHRoaXMudG91Y2hIaWV1VW5nLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAgdGhpcy5oaWV1VW5nU3RhcnQsIHRoaXMpO1xyXG5cdFx0dGhpcy50b3VjaEhpZXVVbmcub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgICB0aGlzLmhpZXVVbmdNb3ZlLCAgdGhpcyk7XHJcblx0XHR0aGlzLnRvdWNoSGlldVVuZy5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICAgIHRoaXMuaGlldVVuZ0VuZCwgICB0aGlzKTtcclxuXHRcdHRoaXMudG91Y2hIaWV1VW5nLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5oaWV1VW5nRW5kLCAgIHRoaXMpO1xyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5yZXNldFNpemVEaWFsb2codGhpcy5ub2RlKTtcclxuXHRcdHRoaXMudG91Y2hIaWV1VW5nLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgIHRoaXMuaGlldVVuZ1N0YXJ0LCB0aGlzKTtcclxuXHRcdHRoaXMudG91Y2hIaWV1VW5nLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCAgIHRoaXMuaGlldVVuZ01vdmUsICB0aGlzKTtcclxuXHRcdHRoaXMudG91Y2hIaWV1VW5nLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICAgIHRoaXMuaGlldVVuZ0VuZCwgICB0aGlzKTtcclxuXHRcdHRoaXMudG91Y2hIaWV1VW5nLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuaGlldVVuZ0VuZCwgICB0aGlzKTtcclxuXHR9LFxyXG5cdG5oYWNOZW5TdGFydDogZnVuY3Rpb24oZSl7XHJcblx0XHR0aGlzLnRvdWNoTmhhY05lbi5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDEuMSkpO1xyXG5cdFx0dGhpcy5uaGFjTmVuWCA9IHtsb2NhbFg6ZS50b3VjaC5nZXRMb2NhdGlvblgoKSwgeDp0aGlzLnRvdWNoTmhhY05lbi54fTtcclxuXHR9LFxyXG5cdG5oYWNOZW5Nb3ZlOiBmdW5jdGlvbihlKXtcclxuXHRcdHZhciB4ID0gZS50b3VjaC5nZXRMb2NhdGlvblgoKS10aGlzLm5oYWNOZW5YLmxvY2FsWCt0aGlzLm5oYWNOZW5YLng7XHJcblx0XHRpZiAoeCA8IDApIHtcclxuXHRcdFx0eCA9IDA7XHJcblx0XHR9ZWxzZSBpZih4ID4gMjk0KXtcclxuXHRcdFx0eCA9IDI5NDtcclxuXHRcdH1cclxuXHRcdHRoaXMuc2V0TmhhY05lbih4KTtcclxuXHR9LFxyXG5cdG5oYWNOZW5FbmQ6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnRvdWNoTmhhY05lbi5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjEsIDEpKTtcclxuXHR9LFxyXG5cdHNldE5oYWNOZW46IGZ1bmN0aW9uKHBvaW50KXtcclxuXHRcdHRoaXMubWFza05oYWNOZW4ud2lkdGggPSBwb2ludDtcclxuXHRcdHRoaXMudG91Y2hOaGFjTmVuLnggPSBwb2ludDtcclxuXHRcdGxldCB2b2x1bWUgPSBwb2ludC8yOTQ7XHJcblx0XHRjYy5SZWRULmF1ZGlvLmZpc2hIYWxsLnZvbHVtZSA9IHZvbHVtZTtcclxuXHRcdGNjLlJlZFQuYXVkaW8uZmlzaEJHMS52b2x1bWUgPSB2b2x1bWU7XHJcblx0XHRjYy5SZWRULmF1ZGlvLmZpc2hCRzIudm9sdW1lID0gdm9sdW1lO1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUudm9sdW1lTmhhY05lbiA9IHZvbHVtZTtcclxuXHRcdGlmICh2b2x1bWUgPT09IDApIHtcclxuXHRcdFx0Y2MuUmVkVC5hdWRpby5iZy5zdG9wKCk7XHJcblx0XHRcdGNjLlJlZFQuc2V0U291bmRCYWNrZ3JvdW5kKGZhbHNlKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy5SZWRULmF1ZGlvLmJnLnJlc3VtZSgpO1xyXG5cdFx0XHRjYy5SZWRULnNldFNvdW5kQmFja2dyb3VuZCh0cnVlKTtcclxuXHRcdFx0aWYgKGNjLlJlZFQuYXVkaW8uYmcuaXNQbGF5aW5nID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdGNjLlJlZFQuYXVkaW8uYmcucGxheSgpO1xyXG5cdFx0XHRcdGxldCB0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGNjLlJlZFQuYXVkaW8uYmcuY2xpcC5sb2FkZWQpO1xyXG5cdFx0XHRcdFx0aWYoY2MuUmVkVC5hdWRpby5iZy5jbGlwLmxvYWRlZCl7XHJcblx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwodCk7XHJcblx0XHRcdFx0XHRcdGNjLlJlZFQuYXVkaW8uYmcucGxheSgpO1xyXG5cdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0fS5iaW5kKHRoaXMpLDEwMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRoaWV1VW5nU3RhcnQ6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0dGhpcy50b3VjaEhpZXVVbmcucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLCAxLjEpKTtcclxuXHRcdHRoaXMuaGlldVVuZ1ggPSB7bG9jYWxYOmUudG91Y2guZ2V0TG9jYXRpb25YKCksIHg6dGhpcy50b3VjaEhpZXVVbmcueH07XHJcblx0fSxcclxuXHRoaWV1VW5nTW92ZTogZnVuY3Rpb24oZSl7XHJcblx0XHR2YXIgeCA9IGUudG91Y2guZ2V0TG9jYXRpb25YKCktdGhpcy5oaWV1VW5nWC5sb2NhbFgrdGhpcy5oaWV1VW5nWC54O1xyXG5cdFx0aWYgKHggPCAwKSB7XHJcblx0XHRcdHggPSAwO1xyXG5cdFx0fWVsc2UgaWYoeCA+IDI5NCl7XHJcblx0XHRcdHggPSAyOTQ7XHJcblx0XHR9XHJcblx0XHR0aGlzLnNldEhpZXVVbmcoeCk7XHJcblx0fSxcclxuXHRoaWV1VW5nRW5kOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy50b3VjaEhpZXVVbmcucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4xLCAxKSk7XHJcblx0fSxcclxuXHRzZXRIaWV1VW5nOiBmdW5jdGlvbihwb2ludCl7XHJcblx0XHR0aGlzLm1hc2tIaWV1VW5nLndpZHRoID0gcG9pbnQ7XHJcblx0XHR0aGlzLnRvdWNoSGlldVVuZy54ID0gcG9pbnQ7XHJcblx0XHRsZXQgdm9sdW1lID0gcG9pbnQvMjk0O1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUuYXVkaW9DbGljay52b2x1bWUgPSB2b2x1bWU7XHJcblx0XHRjYy5SZWRULmluR2FtZS52b2x1bWVIaWV1VW5nID0gdm9sdW1lO1xyXG5cdFx0aWYgKHZvbHVtZSA9PT0gMCkge1xyXG5cdFx0XHRjYy5SZWRULnNldFNvdW5kR2FtZShmYWxzZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2MuUmVkVC5zZXRTb3VuZEdhbWUodHJ1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==