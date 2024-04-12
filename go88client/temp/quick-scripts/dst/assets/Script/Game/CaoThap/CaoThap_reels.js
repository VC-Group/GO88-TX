
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CaoThap/CaoThap_reels.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '858b3VPVxxI44+/QaauFb0O', 'CaoThap_reels');
// Script/Game/CaoThap/CaoThap_reels.js

"use strict";

cc.Class({
	extends: cc.Component,
	init: function init(obj) {
		var _this = this;

		this.RedT = obj;
		this.card = [];
		var self = this;
		Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
			var ooT = cc.instantiate(self.RedT.cardf);
			ooT.width = 99.44;
			ooT.height = 141.68;
			self.node.addChild(ooT);
			return ooT.getComponent(cc.Sprite);
		})).then(function (result) {
			_this.card = result;
			_this.random(true);
		});
	},
	random: function random() {
		var newG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		this.card.forEach(function (obj, index) {
			if (newG) {
				if (index == 12) {
					obj.spriteFrame = cc.RedT.util.card.cardB1;
				} else {
					obj.spriteFrame = cc.RedT.util.card.random();
				}
			} else if (index !== 0 && index !== 12) {
				obj.spriteFrame = cc.RedT.util.card.random();
			}
		});
	},
	spin: function spin() {
		this.node.stopAllActions();
		var self = this;
		var d = cc.moveTo(1, cc.v2(0, -(this.node.height - 141.68))).easing(cc.easeInOut(3));
		var p = cc.callFunc(function () {
			this.card[12].spriteFrame = this.card[0].spriteFrame;
			this.node.y = 0;
		}, this);
		var EF = cc.callFunc(function () {
			this.RedT.resumeGame();
			this.RedT.addMainLog();
		}, this);
		this.node.runAction(cc.sequence(d, p, cc.delayTime(0.1), EF));
	},
	stop: function stop() {
		this.node.stopAllActions();
		/**
  if (void 0 !== this.card &&
  	void 0 !== this.card[12] &&
  	void 0 !== this.card[12].spriteFrame)
  {
  	this.card[12].spriteFrame = this.card[0].spriteFrame;
  }
  */
		this.node.y = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwXFxDYW9UaGFwX3JlZWxzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJjYXJkIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsIm9vVCIsImluc3RhbnRpYXRlIiwiY2FyZGYiLCJ3aWR0aCIsImhlaWdodCIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInRoZW4iLCJyZXN1bHQiLCJyYW5kb20iLCJuZXdHIiwiZm9yRWFjaCIsInNwcml0ZUZyYW1lIiwidXRpbCIsImNhcmRCMSIsInNwaW4iLCJzdG9wQWxsQWN0aW9ucyIsImQiLCJtb3ZlVG8iLCJ2MiIsImVhc2luZyIsImVhc2VJbk91dCIsInAiLCJjYWxsRnVuYyIsInkiLCJFRiIsInJlc3VtZUdhbWUiLCJhZGRNYWluTG9nIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjtBQUVSQyxPQUFNLGNBQVNDLEdBQVQsRUFBYTtBQUFBOztBQUNsQixPQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQSxPQUFLRSxJQUFMLEdBQVksRUFBWjtBQUNBLE1BQUlDLE9BQVEsSUFBWjtBQUNBQyxVQUFRQyxHQUFSLENBQVksQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixDQUF2QixFQUF5QixDQUF6QixFQUE0QkMsR0FBNUIsQ0FBZ0MsVUFBU04sR0FBVCxFQUFjTyxLQUFkLEVBQW9CO0FBQy9ELE9BQUlDLE1BQU1iLEdBQUdjLFdBQUgsQ0FBZU4sS0FBS0YsSUFBTCxDQUFVUyxLQUF6QixDQUFWO0FBQ0FGLE9BQUlHLEtBQUosR0FBYSxLQUFiO0FBQ0FILE9BQUlJLE1BQUosR0FBYSxNQUFiO0FBQ0FULFFBQUtVLElBQUwsQ0FBVUMsUUFBVixDQUFtQk4sR0FBbkI7QUFDQSxVQUFPQSxJQUFJTyxZQUFKLENBQWlCcEIsR0FBR3FCLE1BQXBCLENBQVA7QUFDQSxHQU5XLENBQVosRUFPQ0MsSUFQRCxDQU9NLGtCQUFVO0FBQ2YsU0FBS2YsSUFBTCxHQUFZZ0IsTUFBWjtBQUNBLFNBQUtDLE1BQUwsQ0FBWSxJQUFaO0FBQ0EsR0FWRDtBQVdBLEVBakJPO0FBa0JSQSxTQUFRLGtCQUFzQjtBQUFBLE1BQWJDLElBQWEsdUVBQU4sS0FBTTs7QUFDN0IsT0FBS2xCLElBQUwsQ0FBVW1CLE9BQVYsQ0FBa0IsVUFBU3JCLEdBQVQsRUFBY08sS0FBZCxFQUFvQjtBQUNyQyxPQUFJYSxJQUFKLEVBQVU7QUFDVCxRQUFJYixTQUFTLEVBQWIsRUFBaUI7QUFDaEJQLFNBQUlzQixXQUFKLEdBQWtCM0IsR0FBR00sSUFBSCxDQUFRc0IsSUFBUixDQUFhckIsSUFBYixDQUFrQnNCLE1BQXBDO0FBQ0EsS0FGRCxNQUVLO0FBQ0p4QixTQUFJc0IsV0FBSixHQUFrQjNCLEdBQUdNLElBQUgsQ0FBUXNCLElBQVIsQ0FBYXJCLElBQWIsQ0FBa0JpQixNQUFsQixFQUFsQjtBQUNBO0FBQ0QsSUFORCxNQU1NLElBQUlaLFVBQVUsQ0FBVixJQUFlQSxVQUFVLEVBQTdCLEVBQWdDO0FBQ3JDUCxRQUFJc0IsV0FBSixHQUFrQjNCLEdBQUdNLElBQUgsQ0FBUXNCLElBQVIsQ0FBYXJCLElBQWIsQ0FBa0JpQixNQUFsQixFQUFsQjtBQUNBO0FBQ0QsR0FWRDtBQVdBLEVBOUJPO0FBK0JSTSxPQUFNLGdCQUFVO0FBQ2YsT0FBS1osSUFBTCxDQUFVYSxjQUFWO0FBQ0EsTUFBSXZCLE9BQU8sSUFBWDtBQUNBLE1BQUl3QixJQUFJaEMsR0FBR2lDLE1BQUgsQ0FBVSxDQUFWLEVBQWFqQyxHQUFHa0MsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFFLEtBQUtoQixJQUFMLENBQVVELE1BQVYsR0FBaUIsTUFBbkIsQ0FBVCxDQUFiLEVBQW1Ea0IsTUFBbkQsQ0FBMERuQyxHQUFHb0MsU0FBSCxDQUFhLENBQWIsQ0FBMUQsQ0FBUjtBQUNBLE1BQUlDLElBQUlyQyxHQUFHc0MsUUFBSCxDQUFZLFlBQVc7QUFDOUIsUUFBSy9CLElBQUwsQ0FBVSxFQUFWLEVBQWNvQixXQUFkLEdBQTRCLEtBQUtwQixJQUFMLENBQVUsQ0FBVixFQUFhb0IsV0FBekM7QUFDQSxRQUFLVCxJQUFMLENBQVVxQixDQUFWLEdBQWMsQ0FBZDtBQUNBLEdBSE8sRUFHTCxJQUhLLENBQVI7QUFJQSxNQUFJQyxLQUFLeEMsR0FBR3NDLFFBQUgsQ0FBWSxZQUFXO0FBQy9CLFFBQUtoQyxJQUFMLENBQVVtQyxVQUFWO0FBQ0EsUUFBS25DLElBQUwsQ0FBVW9DLFVBQVY7QUFDQSxHQUhRLEVBR04sSUFITSxDQUFUO0FBSUEsT0FBS3hCLElBQUwsQ0FBVXlCLFNBQVYsQ0FBb0IzQyxHQUFHNEMsUUFBSCxDQUFZWixDQUFaLEVBQWVLLENBQWYsRUFBa0JyQyxHQUFHNkMsU0FBSCxDQUFhLEdBQWIsQ0FBbEIsRUFBcUNMLEVBQXJDLENBQXBCO0FBQ0EsRUE1Q087QUE2Q1JNLE9BQU0sZ0JBQVU7QUFDZixPQUFLNUIsSUFBTCxDQUFVYSxjQUFWO0FBQ0E7Ozs7Ozs7O0FBUUEsT0FBS2IsSUFBTCxDQUFVcUIsQ0FBVixHQUFjLENBQWQ7QUFDQTtBQXhETyxDQUFUIiwiZmlsZSI6IkNhb1RoYXBfcmVlbHMuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhb1RoYXAiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRpbml0OiBmdW5jdGlvbihvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdFx0dGhpcy5jYXJkID0gW107XHJcblx0XHR2YXIgc2VsZiAgPSB0aGlzO1xyXG5cdFx0UHJvbWlzZS5hbGwoWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdLm1hcChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuXHRcdFx0dmFyIG9vVCA9IGNjLmluc3RhbnRpYXRlKHNlbGYuUmVkVC5jYXJkZik7XHJcblx0XHRcdG9vVC53aWR0aCAgPSA5OS40NDtcclxuXHRcdFx0b29ULmhlaWdodCA9IDE0MS42ODtcclxuXHRcdFx0c2VsZi5ub2RlLmFkZENoaWxkKG9vVCk7XHJcblx0XHRcdHJldHVybiBvb1QuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMuY2FyZCA9IHJlc3VsdDtcclxuXHRcdFx0dGhpcy5yYW5kb20odHJ1ZSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHJhbmRvbTogZnVuY3Rpb24obmV3RyA9IGZhbHNlKXtcclxuXHRcdHRoaXMuY2FyZC5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG5cdFx0XHRpZiAobmV3Rykge1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAxMikge1xyXG5cdFx0XHRcdFx0b2JqLnNwcml0ZUZyYW1lID0gY2MuUmVkVC51dGlsLmNhcmQuY2FyZEIxO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0b2JqLnNwcml0ZUZyYW1lID0gY2MuUmVkVC51dGlsLmNhcmQucmFuZG9tKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZSBpZiAoaW5kZXggIT09IDAgJiYgaW5kZXggIT09IDEyKXtcclxuXHRcdFx0XHRvYmouc3ByaXRlRnJhbWUgPSBjYy5SZWRULnV0aWwuY2FyZC5yYW5kb20oKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRzcGluOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR2YXIgZCA9IGNjLm1vdmVUbygxLCBjYy52MigwLCAtKHRoaXMubm9kZS5oZWlnaHQtMTQxLjY4KSkpLmVhc2luZyhjYy5lYXNlSW5PdXQoMykpO1xyXG5cdFx0dmFyIHAgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5jYXJkWzEyXS5zcHJpdGVGcmFtZSA9IHRoaXMuY2FyZFswXS5zcHJpdGVGcmFtZTtcclxuXHRcdFx0dGhpcy5ub2RlLnkgPSAwO1xyXG5cdFx0fSwgdGhpcyk7XHJcblx0XHR2YXIgRUYgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuXHRcdFx0dGhpcy5SZWRULnJlc3VtZUdhbWUoKTtcclxuXHRcdFx0dGhpcy5SZWRULmFkZE1haW5Mb2coKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShkLCBwLCBjYy5kZWxheVRpbWUoMC4xKSwgRUYpKTtcclxuXHR9LFxyXG5cdHN0b3A6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdC8qKlxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gdGhpcy5jYXJkICYmXHJcblx0XHRcdHZvaWQgMCAhPT0gdGhpcy5jYXJkWzEyXSAmJlxyXG5cdFx0XHR2b2lkIDAgIT09IHRoaXMuY2FyZFsxMl0uc3ByaXRlRnJhbWUpXHJcblx0XHR7XHJcblx0XHRcdHRoaXMuY2FyZFsxMl0uc3ByaXRlRnJhbWUgPSB0aGlzLmNhcmRbMF0uc3ByaXRlRnJhbWU7XHJcblx0XHR9XHJcblx0XHQqL1xyXG5cdFx0dGhpcy5ub2RlLnkgPSAwO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=