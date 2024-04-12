
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Menu/MenuRoom.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4e69eoVuxHQo0om02/ZxFC', 'MenuRoom');
// Script/Model/Menu/MenuRoom.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		background: cc.Sprite,

		hall: {
			default: [],
			type: cc.SpriteFrame
		},
		rooms: {
			default: [],
			type: cc.Sprite
		},
		table1: {
			default: [],
			type: cc.SpriteFrame
		},
		table2: {
			default: [],
			type: cc.SpriteFrame
		},
		title: cc.Label
	},
	onBack: function onBack() {
		this.node.active = false;
	},
	openGame: function openGame(game) {
		this.game = game;
		switch (this.game.game) {
			case 'poker':
				this.background.spriteFrame = this.hall[0];
				break;
			case '3cay':
				this.background.spriteFrame = this.hall[1];
				break;
		}
		this.changerRoom();
		this.title.string = game.title;
		this.node.active = true;
	},
	changerRoom: function changerRoom() {
		if (this.game.table2) {
			this.rooms.forEach(function (room, index) {
				if (index < 4) {
					room.spriteFrame = this.table2[3];
				} else if (index < 8) {
					room.spriteFrame = this.table2[4];
				} else {
					room.spriteFrame = this.table2[5];
				}
			}.bind(this));
		} else {
			this.rooms.forEach(function (room, index) {
				if (index < 4) {
					room.spriteFrame = this.table1[3];
				} else if (index < 8) {
					room.spriteFrame = this.table1[4];
				} else {
					room.spriteFrame = this.table1[5];
				}
			}.bind(this));
		}
	},
	onClickRoom: function onClickRoom(event) {
		this.bet = event.target.name;
		cc.RedT.audio.playClick();
		switch (this.game.game) {
			case 'poker':
				cc.RedT.inGame.dialog.showPokerNap(this);
				break;
			case '3cay':
				cc.RedT.inGame.loading.active = true;
				cc.RedT.send({ g: { bacay: { reg: this.bet } } });
				break;
		}
	},
	onData: function onData(game) {
		cc.RedT.MiniPanel.node.parent = null;
		cc.director.loadScene(game);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTWVudS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXE1lbnUvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxNZW51XFxNZW51Um9vbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJiYWNrZ3JvdW5kIiwiU3ByaXRlIiwiaGFsbCIsImRlZmF1bHQiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJyb29tcyIsInRhYmxlMSIsInRhYmxlMiIsInRpdGxlIiwiTGFiZWwiLCJvbkJhY2siLCJub2RlIiwiYWN0aXZlIiwib3BlbkdhbWUiLCJnYW1lIiwic3ByaXRlRnJhbWUiLCJjaGFuZ2VyUm9vbSIsInN0cmluZyIsImZvckVhY2giLCJyb29tIiwiaW5kZXgiLCJiaW5kIiwib25DbGlja1Jvb20iLCJldmVudCIsImJldCIsInRhcmdldCIsIm5hbWUiLCJSZWRUIiwiYXVkaW8iLCJwbGF5Q2xpY2siLCJpbkdhbWUiLCJkaWFsb2ciLCJzaG93UG9rZXJOYXAiLCJsb2FkaW5nIiwic2VuZCIsImciLCJiYWNheSIsInJlZyIsIm9uRGF0YSIsIk1pbmlQYW5lbCIsInBhcmVudCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxjQUFZTCxHQUFHTSxNQURKOztBQUdYQyxRQUFNO0FBQ0xDLFlBQVMsRUFESjtBQUVMQyxTQUFNVCxHQUFHVTtBQUZKLEdBSEs7QUFPWEMsU0FBTztBQUNOSCxZQUFTLEVBREg7QUFFTkMsU0FBTVQsR0FBR007QUFGSCxHQVBJO0FBV1hNLFVBQVE7QUFDUEosWUFBUyxFQURGO0FBRVBDLFNBQU1ULEdBQUdV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QUFsQixDQUF1QjZCLE1BQXZCLEdBQWdDLElBQWhDO0FBQ0E5QyxLQUFHK0MsUUFBSCxDQUFZQyxTQUFaLENBQXNCNUIsSUFBdEI7QUFDQTtBQWhGTyxDQUFUIiwiZmlsZSI6Ik1lbnVSb29tLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTWVudSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRiYWNrZ3JvdW5kOiBjYy5TcHJpdGUsXHJcblxyXG5cdFx0aGFsbDoge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcblx0XHR9LFxyXG5cdFx0cm9vbXM6IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6IGNjLlNwcml0ZSxcclxuXHRcdH0sXHJcblx0XHR0YWJsZTE6IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG5cdFx0fSxcclxuXHRcdHRhYmxlMjoge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcblx0XHR9LFxyXG5cdFx0dGl0bGU6IGNjLkxhYmVsLFxyXG5cdH0sXHJcblx0b25CYWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdH0sXHJcblx0b3BlbkdhbWU6IGZ1bmN0aW9uKGdhbWUpe1xyXG5cdFx0dGhpcy5nYW1lID0gZ2FtZTtcclxuXHRcdHN3aXRjaCh0aGlzLmdhbWUuZ2FtZSl7XHJcblx0XHRcdGNhc2UgJ3Bva2VyJzpcclxuXHRcdFx0XHR0aGlzLmJhY2tncm91bmQuc3ByaXRlRnJhbWUgPSB0aGlzLmhhbGxbMF07XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJzNjYXknOlxyXG5cdFx0XHRcdHRoaXMuYmFja2dyb3VuZC5zcHJpdGVGcmFtZSA9IHRoaXMuaGFsbFsxXTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRoaXMuY2hhbmdlclJvb20oKTtcclxuXHRcdHRoaXMudGl0bGUuc3RyaW5nID0gZ2FtZS50aXRsZTtcclxuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdH0sXHJcblx0Y2hhbmdlclJvb206IGZ1bmN0aW9uKCl7XHJcblx0XHRpZiAodGhpcy5nYW1lLnRhYmxlMikge1xyXG5cdFx0XHR0aGlzLnJvb21zLmZvckVhY2goZnVuY3Rpb24ocm9vbSwgaW5kZXgpe1xyXG5cdFx0XHRcdGlmIChpbmRleCA8IDQpIHtcclxuXHRcdFx0XHRcdHJvb20uc3ByaXRlRnJhbWUgPSB0aGlzLnRhYmxlMlszXTtcclxuXHRcdFx0XHR9ZWxzZSBpZiAoaW5kZXggPCA4KSB7XHJcblx0XHRcdFx0XHRyb29tLnNwcml0ZUZyYW1lID0gdGhpcy50YWJsZTJbNF07XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRyb29tLnNwcml0ZUZyYW1lID0gdGhpcy50YWJsZTJbNV07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LmJpbmQodGhpcykpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMucm9vbXMuZm9yRWFjaChmdW5jdGlvbihyb29tLCBpbmRleCl7XHJcblx0XHRcdFx0aWYgKGluZGV4IDwgNCkge1xyXG5cdFx0XHRcdFx0cm9vbS5zcHJpdGVGcmFtZSA9IHRoaXMudGFibGUxWzNdO1xyXG5cdFx0XHRcdH1lbHNlIGlmIChpbmRleCA8IDgpIHtcclxuXHRcdFx0XHRcdHJvb20uc3ByaXRlRnJhbWUgPSB0aGlzLnRhYmxlMVs0XTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHJvb20uc3ByaXRlRnJhbWUgPSB0aGlzLnRhYmxlMVs1XTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkNsaWNrUm9vbTogZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0dGhpcy5iZXQgPSBldmVudC50YXJnZXQubmFtZTtcclxuXHRcdGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcblx0XHRzd2l0Y2godGhpcy5nYW1lLmdhbWUpe1xyXG5cdFx0XHRjYXNlICdwb2tlcic6XHJcblx0XHRcdFx0Y2MuUmVkVC5pbkdhbWUuZGlhbG9nLnNob3dQb2tlck5hcCh0aGlzKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnM2NheSc6XHJcblx0XHRcdFx0Y2MuUmVkVC5pbkdhbWUubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdGNjLlJlZFQuc2VuZCh7Zzp7YmFjYXk6e3JlZzp0aGlzLmJldH19fSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGdhbWUpe1xyXG5cdFx0Y2MuUmVkVC5NaW5pUGFuZWwubm9kZS5wYXJlbnQgPSBudWxsO1xyXG5cdFx0Y2MuZGlyZWN0b3IubG9hZFNjZW5lKGdhbWUpO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=