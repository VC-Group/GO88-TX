
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/MiniPanel/MiniPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ccccah+dOlLRKuFndZetoIH', 'MiniPanel');
// Script/Model/MiniPanel/MiniPanel.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		minigame: cc.Node,
		Dialog: cc.Node,
		TaiXiu: cc.Node,
		MiniPoker: cc.Node,
		BigBabol: cc.Node,
		BauCua: cc.Node,
		BaCay: cc.Node,
		CaoThap: cc.Node,
		AngryBirds: cc.Node,
		MegaJackpot: cc.Node,

		TopHu: cc.Node,

		nodeEfect: cc.Node,
		// Prefab
		PrefabNoHu: cc.Prefab,
		prefabBigWin: cc.Prefab,
		prefabMiniNotice: cc.Prefab

	},
	onLoad: function onLoad() {
		var self = this;
		this.node._onPreDestroy = function () {
			self.onDestroy();
		};

		this.TaiXiu = this.TaiXiu.getComponent('TaiXiu');
		this.MiniPoker = this.MiniPoker.getComponent('MiniPoker');
		this.BigBabol = this.BigBabol.getComponent('BigBabol');
		this.BauCua = this.BauCua.getComponent('BauCua');
		this.BaCay = this.BaCay.getComponent('Mini3Cay');
		this.CaoThap = this.CaoThap.getComponent('CaoThap');
		this.AngryBirds = this.AngryBirds.getComponent('AngryBirds');
		this.TopHu = this.TopHu.getComponent('popupTopHu');
		this.Dialog = this.Dialog.getComponent('MiniDialog');
		this.MegaJackpot = this.MegaJackpot.getComponent('MegaJackpot');
		this.Dialog.init(this);
		this.TaiXiu.init(this);
		this.MiniPoker.init(this);
		this.BigBabol.init(this);
		this.BauCua.init(this);
		this.BaCay.init(this);
		this.CaoThap.init(this);
		this.AngryBirds.init(this);
		this.MegaJackpot.init(this);
		this.TopHu.init(this);

		if (cc.RedT.IS_LOGIN) {
			this.signIn();
		}
	},

	signIn: function signIn() {
		this.minigame.active = true;
		this.TaiXiu.signIn();
	},
	newGame: function newGame() {
		this.minigame.active = false;
		this.Dialog.onCloseDialog();
		this.TaiXiu.newGame();
		this.BauCua.newGame();
		this.CaoThap.newGame();
	},
	onData: function onData(data) {
		if (void 0 !== data.poker) {
			this.MiniPoker.onData(data.poker);
		}
		if (void 0 !== data.big_babol) {
			this.BigBabol.onData(data.big_babol);
		}
		if (void 0 !== data.baucua) {
			this.BauCua.onData(data.baucua);
		}
		if (void 0 !== data.bacay) {
			this.BaCay.onData(data.bacay);
		}
		if (void 0 !== data.caothap) {
			this.CaoThap.onData(data.caothap);
		}
		if (void 0 !== data.arb) {
			this.AngryBirds.onData(data.arb);
		}
		if (void 0 !== data.megaj) {
			this.MegaJackpot.onData(data.megaj);
		}
	},
	onDestroy: function onDestroy() {
		clearInterval(this.TaiXiu.TX_Main.timeInterval);
		clearTimeout(this.TaiXiu.regTimeOut);
		clearTimeout(this.TaiXiu.regTimeOut2);

		clearInterval(this.BauCua.timeInterval);
		clearTimeout(this.BauCua.regTimeOut);
		void 0 !== this.CaoThap.timeInterval && clearInterval(this.CaoThap.timeInterval);
	},
	playClick: function playClick() {
		cc.RedT.audio.playClick();
	},
	playUnClick: function playUnClick() {
		cc.RedT.audio.playUnClick();
	},
	setTop: function setTop(obj) {
		if (obj.runScale === false) {
			obj.stopAllActions();
			obj.runScale = true;
			var actionOn = cc.scaleTo(0.1, 1); //
			obj.runAction(cc.sequence(actionOn, cc.callFunc(function () {
				this.runScale = false;
			}, obj)));
		}
		this.minigame.children.forEach(function (game) {
			if (game.active && game !== obj) {
				game.stopAllActions();
				var actionUn = cc.scaleTo(0.1, 0.7);
				game.runAction(cc.sequence(actionUn, cc.callFunc(function () {
					this.runScale = false;
				}, game)));
			}
		});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTWluaVBhbmVsLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTWluaVBhbmVsL2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTWluaVBhbmVsXFxNaW5pUGFuZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWluaWdhbWUiLCJOb2RlIiwiRGlhbG9nIiwiVGFpWGl1IiwiTWluaVBva2VyIiwiQmlnQmFib2wiLCJCYXVDdWEiLCJCYUNheSIsIkNhb1RoYXAiLCJBbmdyeUJpcmRzIiwiTWVnYUphY2twb3QiLCJUb3BIdSIsIm5vZGVFZmVjdCIsIlByZWZhYk5vSHUiLCJQcmVmYWIiLCJwcmVmYWJCaWdXaW4iLCJwcmVmYWJNaW5pTm90aWNlIiwib25Mb2FkIiwic2VsZiIsIm5vZGUiLCJfb25QcmVEZXN0cm95Iiwib25EZXN0cm95IiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsIlJlZFQiLCJJU19MT0dJTiIsInNpZ25JbiIsImFjdGl2ZSIsIm5ld0dhbWUiLCJvbkNsb3NlRGlhbG9nIiwib25EYXRhIiwiZGF0YSIsInBva2VyIiwiYmlnX2JhYm9sIiwiYmF1Y3VhIiwiYmFjYXkiLCJjYW90aGFwIiwiYXJiIiwibWVnYWoiLCJjbGVhckludGVydmFsIiwiVFhfTWFpbiIsInRpbWVJbnRlcnZhbCIsImNsZWFyVGltZW91dCIsInJlZ1RpbWVPdXQiLCJyZWdUaW1lT3V0MiIsInBsYXlDbGljayIsImF1ZGlvIiwicGxheVVuQ2xpY2siLCJzZXRUb3AiLCJvYmoiLCJydW5TY2FsZSIsInN0b3BBbGxBY3Rpb25zIiwiYWN0aW9uT24iLCJzY2FsZVRvIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJjYWxsRnVuYyIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImdhbWUiLCJhY3Rpb25VbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsWUFBYUwsR0FBR00sSUFETDtBQUVYQyxVQUFhUCxHQUFHTSxJQUZMO0FBR1hFLFVBQWFSLEdBQUdNLElBSEw7QUFJWEcsYUFBYVQsR0FBR00sSUFKTDtBQUtYSSxZQUFhVixHQUFHTSxJQUxMO0FBTVhLLFVBQWFYLEdBQUdNLElBTkw7QUFPWE0sU0FBYVosR0FBR00sSUFQTDtBQVFYTyxXQUFhYixHQUFHTSxJQVJMO0FBU1hRLGNBQWFkLEdBQUdNLElBVEw7QUFVWFMsZUFBYWYsR0FBR00sSUFWTDs7QUFZWFUsU0FBYWhCLEdBQUdNLElBWkw7O0FBY1hXLGFBQWFqQixHQUFHTSxJQWRMO0FBZVg7QUFDQVksY0FBY2xCLEdBQUdtQixNQWhCTjtBQWlCWEMsZ0JBQWNwQixHQUFHbUIsTUFqQk47QUFrQlhFLG9CQUFrQnJCLEdBQUdtQjs7QUFsQlYsRUFISjtBQXdCUkcsT0F4QlEsb0JBd0JFO0FBQ1QsTUFBSUMsT0FBTyxJQUFYO0FBQ0EsT0FBS0MsSUFBTCxDQUFVQyxhQUFWLEdBQTBCLFlBQVU7QUFDbkNGLFFBQUtHLFNBQUw7QUFDQSxHQUZEOztBQUlBLE9BQUtsQixNQUFMLEdBQWtCLEtBQUtBLE1BQUwsQ0FBWW1CLFlBQVosQ0FBeUIsUUFBekIsQ0FBbEI7QUFDQSxPQUFLbEIsU0FBTCxHQUFrQixLQUFLQSxTQUFMLENBQWVrQixZQUFmLENBQTRCLFdBQTVCLENBQWxCO0FBQ0EsT0FBS2pCLFFBQUwsR0FBa0IsS0FBS0EsUUFBTCxDQUFjaUIsWUFBZCxDQUEyQixVQUEzQixDQUFsQjtBQUNBLE9BQUtoQixNQUFMLEdBQWtCLEtBQUtBLE1BQUwsQ0FBWWdCLFlBQVosQ0FBeUIsUUFBekIsQ0FBbEI7QUFDQSxPQUFLZixLQUFMLEdBQWtCLEtBQUtBLEtBQUwsQ0FBV2UsWUFBWCxDQUF3QixVQUF4QixDQUFsQjtBQUNBLE9BQUtkLE9BQUwsR0FBa0IsS0FBS0EsT0FBTCxDQUFhYyxZQUFiLENBQTBCLFNBQTFCLENBQWxCO0FBQ0EsT0FBS2IsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCYSxZQUFoQixDQUE2QixZQUE3QixDQUFsQjtBQUNBLE9BQUtYLEtBQUwsR0FBYyxLQUFLQSxLQUFMLENBQVdXLFlBQVgsQ0FBd0IsWUFBeEIsQ0FBZDtBQUNBLE9BQUtwQixNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZb0IsWUFBWixDQUF5QixZQUF6QixDQUFkO0FBQ0EsT0FBS1osV0FBTCxHQUFtQixLQUFLQSxXQUFMLENBQWlCWSxZQUFqQixDQUE4QixhQUE5QixDQUFuQjtBQUNBLE9BQUtwQixNQUFMLENBQVlxQixJQUFaLENBQWlCLElBQWpCO0FBQ0EsT0FBS3BCLE1BQUwsQ0FBWW9CLElBQVosQ0FBaUIsSUFBakI7QUFDQSxPQUFLbkIsU0FBTCxDQUFlbUIsSUFBZixDQUFvQixJQUFwQjtBQUNBLE9BQUtsQixRQUFMLENBQWNrQixJQUFkLENBQW1CLElBQW5CO0FBQ0EsT0FBS2pCLE1BQUwsQ0FBWWlCLElBQVosQ0FBaUIsSUFBakI7QUFDQSxPQUFLaEIsS0FBTCxDQUFXZ0IsSUFBWCxDQUFnQixJQUFoQjtBQUNBLE9BQUtmLE9BQUwsQ0FBYWUsSUFBYixDQUFrQixJQUFsQjtBQUNBLE9BQUtkLFVBQUwsQ0FBZ0JjLElBQWhCLENBQXFCLElBQXJCO0FBQ0EsT0FBS2IsV0FBTCxDQUFpQmEsSUFBakIsQ0FBc0IsSUFBdEI7QUFDQSxPQUFLWixLQUFMLENBQVdZLElBQVgsQ0FBZ0IsSUFBaEI7O0FBRUEsTUFBSTVCLEdBQUc2QixJQUFILENBQVFDLFFBQVosRUFBcUI7QUFDcEIsUUFBS0MsTUFBTDtBQUNBO0FBQ0QsRUF0RE87O0FBdURSQSxTQUFPLGtCQUFVO0FBQ2hCLE9BQUsxQixRQUFMLENBQWMyQixNQUFkLEdBQXVCLElBQXZCO0FBQ0EsT0FBS3hCLE1BQUwsQ0FBWXVCLE1BQVo7QUFDQSxFQTFETztBQTJEUkUsVUFBUyxtQkFBVztBQUNuQixPQUFLNUIsUUFBTCxDQUFjMkIsTUFBZCxHQUF1QixLQUF2QjtBQUNBLE9BQUt6QixNQUFMLENBQVkyQixhQUFaO0FBQ0EsT0FBSzFCLE1BQUwsQ0FBWXlCLE9BQVo7QUFDQSxPQUFLdEIsTUFBTCxDQUFZc0IsT0FBWjtBQUNBLE9BQUtwQixPQUFMLENBQWFvQixPQUFiO0FBQ0EsRUFqRU87QUFrRVJFLFNBQVEsZ0JBQVNDLElBQVQsRUFBYztBQUNyQixNQUFJLEtBQUssQ0FBTCxLQUFXQSxLQUFLQyxLQUFwQixFQUEwQjtBQUN6QixRQUFLNUIsU0FBTCxDQUFlMEIsTUFBZixDQUFzQkMsS0FBS0MsS0FBM0I7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdELEtBQUtFLFNBQXBCLEVBQThCO0FBQzdCLFFBQUs1QixRQUFMLENBQWN5QixNQUFkLENBQXFCQyxLQUFLRSxTQUExQjtBQUNBO0FBQ0QsTUFBSSxLQUFLLENBQUwsS0FBV0YsS0FBS0csTUFBcEIsRUFBMkI7QUFDMUIsUUFBSzVCLE1BQUwsQ0FBWXdCLE1BQVosQ0FBbUJDLEtBQUtHLE1BQXhCO0FBQ0E7QUFDRCxNQUFJLEtBQUssQ0FBTCxLQUFXSCxLQUFLSSxLQUFwQixFQUEwQjtBQUN6QixRQUFLNUIsS0FBTCxDQUFXdUIsTUFBWCxDQUFrQkMsS0FBS0ksS0FBdkI7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdKLEtBQUtLLE9BQXBCLEVBQTRCO0FBQzNCLFFBQUs1QixPQUFMLENBQWFzQixNQUFiLENBQW9CQyxLQUFLSyxPQUF6QjtBQUNBO0FBQ0QsTUFBSSxLQUFLLENBQUwsS0FBV0wsS0FBS00sR0FBcEIsRUFBd0I7QUFDdkIsUUFBSzVCLFVBQUwsQ0FBZ0JxQixNQUFoQixDQUF1QkMsS0FBS00sR0FBNUI7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdOLEtBQUtPLEtBQXBCLEVBQTBCO0FBQ3pCLFFBQUs1QixXQUFMLENBQWlCb0IsTUFBakIsQ0FBd0JDLEtBQUtPLEtBQTdCO0FBQ0E7QUFDRCxFQXhGTztBQXlGUmpCLFlBQVcscUJBQVU7QUFDcEJrQixnQkFBYyxLQUFLcEMsTUFBTCxDQUFZcUMsT0FBWixDQUFvQkMsWUFBbEM7QUFDQUMsZUFBYSxLQUFLdkMsTUFBTCxDQUFZd0MsVUFBekI7QUFDQUQsZUFBYSxLQUFLdkMsTUFBTCxDQUFZeUMsV0FBekI7O0FBRUFMLGdCQUFjLEtBQUtqQyxNQUFMLENBQVltQyxZQUExQjtBQUNBQyxlQUFhLEtBQUtwQyxNQUFMLENBQVlxQyxVQUF6QjtBQUNBLE9BQUssQ0FBTCxLQUFXLEtBQUtuQyxPQUFMLENBQWFpQyxZQUF4QixJQUF3Q0YsY0FBYyxLQUFLL0IsT0FBTCxDQUFhaUMsWUFBM0IsQ0FBeEM7QUFDQSxFQWpHTztBQWtHUkksWUFBVyxxQkFBVTtBQUNwQmxELEtBQUc2QixJQUFILENBQVFzQixLQUFSLENBQWNELFNBQWQ7QUFDQSxFQXBHTztBQXFHUkUsY0FBYSx1QkFBVTtBQUN0QnBELEtBQUc2QixJQUFILENBQVFzQixLQUFSLENBQWNDLFdBQWQ7QUFDQSxFQXZHTztBQXdHUkMsU0FBUSxnQkFBU0MsR0FBVCxFQUFhO0FBQ3BCLE1BQUlBLElBQUlDLFFBQUosS0FBaUIsS0FBckIsRUFBNEI7QUFDM0JELE9BQUlFLGNBQUo7QUFDQUYsT0FBSUMsUUFBSixHQUFlLElBQWY7QUFDQSxPQUFJRSxXQUFXekQsR0FBRzBELE9BQUgsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQWYsQ0FIMkIsQ0FHTztBQUNsQ0osT0FBSUssU0FBSixDQUFjM0QsR0FBRzRELFFBQUgsQ0FBWUgsUUFBWixFQUFzQnpELEdBQUc2RCxRQUFILENBQVksWUFBVztBQUMxRCxTQUFLTixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsSUFGbUMsRUFFakNELEdBRmlDLENBQXRCLENBQWQ7QUFHQTtBQUNELE9BQUtqRCxRQUFMLENBQWN5RCxRQUFkLENBQXVCQyxPQUF2QixDQUErQixVQUFTQyxJQUFULEVBQWM7QUFDNUMsT0FBSUEsS0FBS2hDLE1BQUwsSUFBZWdDLFNBQVNWLEdBQTVCLEVBQWlDO0FBQ2hDVSxTQUFLUixjQUFMO0FBQ0EsUUFBSVMsV0FBV2pFLEdBQUcwRCxPQUFILENBQVcsR0FBWCxFQUFnQixHQUFoQixDQUFmO0FBQ0FNLFNBQUtMLFNBQUwsQ0FBZTNELEdBQUc0RCxRQUFILENBQVlLLFFBQVosRUFBc0JqRSxHQUFHNkQsUUFBSCxDQUFZLFlBQVc7QUFDM0QsVUFBS04sUUFBTCxHQUFnQixLQUFoQjtBQUNBLEtBRm9DLEVBRWxDUyxJQUZrQyxDQUF0QixDQUFmO0FBR0E7QUFDRCxHQVJEO0FBU0E7QUExSE8sQ0FBVCIsImZpbGUiOiJNaW5pUGFuZWwuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxNaW5pUGFuZWwiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0bWluaWdhbWU6ICAgIGNjLk5vZGUsXHJcblx0XHREaWFsb2c6ICAgICAgY2MuTm9kZSxcclxuXHRcdFRhaVhpdTogICAgICBjYy5Ob2RlLFxyXG5cdFx0TWluaVBva2VyOiAgIGNjLk5vZGUsXHJcblx0XHRCaWdCYWJvbDogICAgY2MuTm9kZSxcclxuXHRcdEJhdUN1YTogICAgICBjYy5Ob2RlLFxyXG5cdFx0QmFDYXk6ICAgICAgIGNjLk5vZGUsXHJcblx0XHRDYW9UaGFwOiAgICAgY2MuTm9kZSxcclxuXHRcdEFuZ3J5QmlyZHM6ICBjYy5Ob2RlLFxyXG5cdFx0TWVnYUphY2twb3Q6IGNjLk5vZGUsXHJcblxyXG5cdFx0VG9wSHU6ICAgICAgIGNjLk5vZGUsXHJcblxyXG5cdFx0bm9kZUVmZWN0OiAgIGNjLk5vZGUsXHJcblx0XHQvLyBQcmVmYWJcclxuXHRcdFByZWZhYk5vSHU6ICAgY2MuUHJlZmFiLFxyXG5cdFx0cHJlZmFiQmlnV2luOiBjYy5QcmVmYWIsXHJcblx0XHRwcmVmYWJNaW5pTm90aWNlOiBjYy5QcmVmYWJcclxuXHRcdFxyXG5cdH0sXHJcblx0b25Mb2FkICgpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMubm9kZS5fb25QcmVEZXN0cm95ID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0c2VsZi5vbkRlc3Ryb3koKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLlRhaVhpdSAgICAgPSB0aGlzLlRhaVhpdS5nZXRDb21wb25lbnQoJ1RhaVhpdScpO1xyXG5cdFx0dGhpcy5NaW5pUG9rZXIgID0gdGhpcy5NaW5pUG9rZXIuZ2V0Q29tcG9uZW50KCdNaW5pUG9rZXInKTtcclxuXHRcdHRoaXMuQmlnQmFib2wgICA9IHRoaXMuQmlnQmFib2wuZ2V0Q29tcG9uZW50KCdCaWdCYWJvbCcpO1xyXG5cdFx0dGhpcy5CYXVDdWEgICAgID0gdGhpcy5CYXVDdWEuZ2V0Q29tcG9uZW50KCdCYXVDdWEnKTtcclxuXHRcdHRoaXMuQmFDYXkgICAgICA9IHRoaXMuQmFDYXkuZ2V0Q29tcG9uZW50KCdNaW5pM0NheScpO1xyXG5cdFx0dGhpcy5DYW9UaGFwICAgID0gdGhpcy5DYW9UaGFwLmdldENvbXBvbmVudCgnQ2FvVGhhcCcpO1xyXG5cdFx0dGhpcy5BbmdyeUJpcmRzID0gdGhpcy5BbmdyeUJpcmRzLmdldENvbXBvbmVudCgnQW5ncnlCaXJkcycpO1xyXG5cdFx0dGhpcy5Ub3BIdSAgPSB0aGlzLlRvcEh1LmdldENvbXBvbmVudCgncG9wdXBUb3BIdScpO1xyXG5cdFx0dGhpcy5EaWFsb2cgPSB0aGlzLkRpYWxvZy5nZXRDb21wb25lbnQoJ01pbmlEaWFsb2cnKTtcclxuXHRcdHRoaXMuTWVnYUphY2twb3QgPSB0aGlzLk1lZ2FKYWNrcG90LmdldENvbXBvbmVudCgnTWVnYUphY2twb3QnKTtcclxuXHRcdHRoaXMuRGlhbG9nLmluaXQodGhpcyk7XHJcblx0XHR0aGlzLlRhaVhpdS5pbml0KHRoaXMpO1xyXG5cdFx0dGhpcy5NaW5pUG9rZXIuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuQmlnQmFib2wuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuQmF1Q3VhLmluaXQodGhpcyk7XHJcblx0XHR0aGlzLkJhQ2F5LmluaXQodGhpcyk7XHJcblx0XHR0aGlzLkNhb1RoYXAuaW5pdCh0aGlzKTtcclxuXHRcdHRoaXMuQW5ncnlCaXJkcy5pbml0KHRoaXMpO1xyXG5cdFx0dGhpcy5NZWdhSmFja3BvdC5pbml0KHRoaXMpO1xyXG5cdFx0dGhpcy5Ub3BIdS5pbml0KHRoaXMpO1xyXG5cclxuXHRcdGlmIChjYy5SZWRULklTX0xPR0lOKXtcclxuXHRcdFx0dGhpcy5zaWduSW4oKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNpZ25JbjpmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5taW5pZ2FtZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0dGhpcy5UYWlYaXUuc2lnbkluKCk7XHJcblx0fSxcclxuXHRuZXdHYW1lOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMubWluaWdhbWUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLkRpYWxvZy5vbkNsb3NlRGlhbG9nKCk7XHJcblx0XHR0aGlzLlRhaVhpdS5uZXdHYW1lKCk7XHJcblx0XHR0aGlzLkJhdUN1YS5uZXdHYW1lKCk7XHJcblx0XHR0aGlzLkNhb1RoYXAubmV3R2FtZSgpO1xyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEucG9rZXIpe1xyXG5cdFx0XHR0aGlzLk1pbmlQb2tlci5vbkRhdGEoZGF0YS5wb2tlcik7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmJpZ19iYWJvbCl7XHJcblx0XHRcdHRoaXMuQmlnQmFib2wub25EYXRhKGRhdGEuYmlnX2JhYm9sKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuYmF1Y3VhKXtcclxuXHRcdFx0dGhpcy5CYXVDdWEub25EYXRhKGRhdGEuYmF1Y3VhKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuYmFjYXkpe1xyXG5cdFx0XHR0aGlzLkJhQ2F5Lm9uRGF0YShkYXRhLmJhY2F5KTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuY2FvdGhhcCl7XHJcblx0XHRcdHRoaXMuQ2FvVGhhcC5vbkRhdGEoZGF0YS5jYW90aGFwKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuYXJiKXtcclxuXHRcdFx0dGhpcy5BbmdyeUJpcmRzLm9uRGF0YShkYXRhLmFyYik7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm1lZ2FqKXtcclxuXHRcdFx0dGhpcy5NZWdhSmFja3BvdC5vbkRhdGEoZGF0YS5tZWdhaik7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkRlc3Ryb3k6IGZ1bmN0aW9uKCl7XHJcblx0XHRjbGVhckludGVydmFsKHRoaXMuVGFpWGl1LlRYX01haW4udGltZUludGVydmFsKTtcclxuXHRcdGNsZWFyVGltZW91dCh0aGlzLlRhaVhpdS5yZWdUaW1lT3V0KTtcclxuXHRcdGNsZWFyVGltZW91dCh0aGlzLlRhaVhpdS5yZWdUaW1lT3V0Mik7XHJcblxyXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLkJhdUN1YS50aW1lSW50ZXJ2YWwpO1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuQmF1Q3VhLnJlZ1RpbWVPdXQpO1xyXG5cdFx0dm9pZCAwICE9PSB0aGlzLkNhb1RoYXAudGltZUludGVydmFsICYmIGNsZWFySW50ZXJ2YWwodGhpcy5DYW9UaGFwLnRpbWVJbnRlcnZhbCk7XHJcblx0fSxcclxuXHRwbGF5Q2xpY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlDbGljaygpO1xyXG5cdH0sXHJcblx0cGxheVVuQ2xpY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlVbkNsaWNrKCk7XHJcblx0fSxcclxuXHRzZXRUb3A6IGZ1bmN0aW9uKG9iail7XHJcblx0XHRpZiAob2JqLnJ1blNjYWxlID09PSBmYWxzZSkge1xyXG5cdFx0XHRvYmouc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdFx0b2JqLnJ1blNjYWxlID0gdHJ1ZTtcclxuXHRcdFx0bGV0IGFjdGlvbk9uID0gY2Muc2NhbGVUbygwLjEsIDEpOy8vXHJcblx0XHRcdG9iai5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9uT24sIGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRoaXMucnVuU2NhbGUgPSBmYWxzZTtcclxuXHRcdFx0fSwgb2JqKSkpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5taW5pZ2FtZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGdhbWUpe1xyXG5cdFx0XHRpZiAoZ2FtZS5hY3RpdmUgJiYgZ2FtZSAhPT0gb2JqKSB7XHJcblx0XHRcdFx0Z2FtZS5zdG9wQWxsQWN0aW9ucygpO1xyXG5cdFx0XHRcdGxldCBhY3Rpb25VbiA9IGNjLnNjYWxlVG8oMC4xLCAwLjcpO1xyXG5cdFx0XHRcdGdhbWUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvblVuLCBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoaXMucnVuU2NhbGUgPSBmYWxzZTtcclxuXHRcdFx0XHR9LCBnYW1lKSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG59KTtcclxuIl19