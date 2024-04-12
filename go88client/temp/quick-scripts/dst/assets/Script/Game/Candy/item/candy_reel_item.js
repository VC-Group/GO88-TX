
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Candy/item/candy_reel_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4e909CNdZP+6qJOWfTDfrb', 'candy_reel_item');
// Script/Game/Candy/item/candy_reel_item.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {
		icon: cc.Sprite,
		free: cc.Node,
		bonus: cc.Node,
		jacpot: cc.Node
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	random: function random() {
		var icon = Math.random() * 11 >> 0;
		this.setIcon(icon);
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		if (icon == 10) {
			this.icon.node.active = true;
			this.free.active = this.bonus.active = this.jacpot.active = false;
			this.icon.spriteFrame = this.RedT.icons[7];
		} else if (icon == 9) {
			this.free.active = true;
			this.icon.node.active = this.bonus.active = this.jacpot.active = false;
		} else if (icon == 8) {
			this.bonus.active = true;
			this.icon.node.active = this.free.active = this.jacpot.active = false;
		} else if (icon == 7) {
			this.jacpot.active = true;
			this.icon.node.active = this.free.active = this.bonus.active = false;
		} else {
			this.free.active = this.bonus.active = this.jacpot.active = false;
			this.icon.node.active = true;
			this.icon.spriteFrame = this.RedT.icons[icon];
		}
		if (data) {
			this.data = icon;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXGl0ZW0vLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcaXRlbS9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXGl0ZW1cXGNhbmR5X3JlZWxfaXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpY29uIiwiU3ByaXRlIiwiZnJlZSIsIk5vZGUiLCJib251cyIsImphY3BvdCIsImluaXQiLCJvYmoiLCJSZWRUIiwicmFuZG9tIiwiTWF0aCIsInNldEljb24iLCJkYXRhIiwibm9kZSIsImFjdGl2ZSIsInNwcml0ZUZyYW1lIiwiaWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKO0FBRVJDLGFBQVk7QUFDWEMsUUFBUUwsR0FBR00sTUFEQTtBQUVYQyxRQUFRUCxHQUFHUSxJQUZBO0FBR1hDLFNBQVFULEdBQUdRLElBSEE7QUFJWEUsVUFBUVYsR0FBR1E7QUFKQSxFQUZKO0FBUVJHLEtBUlEsZ0JBUUhDLEdBUkcsRUFRQztBQUNSLE9BQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNBLEVBVk87O0FBV1JFLFNBQVEsa0JBQVU7QUFDakIsTUFBSVQsT0FBUVUsS0FBS0QsTUFBTCxLQUFjLEVBQWYsSUFBb0IsQ0FBL0I7QUFDQSxPQUFLRSxPQUFMLENBQWFYLElBQWI7QUFDQSxTQUFPQSxJQUFQO0FBQ0EsRUFmTztBQWdCUlcsVUFBUyxpQkFBU1gsSUFBVCxFQUE0QjtBQUFBLE1BQWJZLElBQWEsdUVBQU4sS0FBTTs7QUFDcEMsTUFBSVosUUFBUSxFQUFaLEVBQWdCO0FBQ2YsUUFBS0EsSUFBTCxDQUFVYSxJQUFWLENBQWVDLE1BQWYsR0FBd0IsSUFBeEI7QUFDQSxRQUFLWixJQUFMLENBQVVZLE1BQVYsR0FBbUIsS0FBS1YsS0FBTCxDQUFXVSxNQUFYLEdBQW9CLEtBQUtULE1BQUwsQ0FBWVMsTUFBWixHQUFxQixLQUE1RDtBQUNBLFFBQUtkLElBQUwsQ0FBVWUsV0FBVixHQUF3QixLQUFLUCxJQUFMLENBQVVRLEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBeEI7QUFDQSxHQUpELE1BSU0sSUFBSWhCLFFBQVEsQ0FBWixFQUFlO0FBQ3BCLFFBQUtFLElBQUwsQ0FBVVksTUFBVixHQUFtQixJQUFuQjtBQUNBLFFBQUtkLElBQUwsQ0FBVWEsSUFBVixDQUFlQyxNQUFmLEdBQXdCLEtBQUtWLEtBQUwsQ0FBV1UsTUFBWCxHQUFvQixLQUFLVCxNQUFMLENBQVlTLE1BQVosR0FBcUIsS0FBakU7QUFDQSxHQUhLLE1BR0EsSUFBSWQsUUFBUSxDQUFaLEVBQWU7QUFDcEIsUUFBS0ksS0FBTCxDQUFXVSxNQUFYLEdBQW9CLElBQXBCO0FBQ0EsUUFBS2QsSUFBTCxDQUFVYSxJQUFWLENBQWVDLE1BQWYsR0FBd0IsS0FBS1osSUFBTCxDQUFVWSxNQUFWLEdBQW1CLEtBQUtULE1BQUwsQ0FBWVMsTUFBWixHQUFxQixLQUFoRTtBQUNBLEdBSEssTUFHQSxJQUFJZCxRQUFRLENBQVosRUFBZTtBQUNwQixRQUFLSyxNQUFMLENBQVlTLE1BQVosR0FBcUIsSUFBckI7QUFDQSxRQUFLZCxJQUFMLENBQVVhLElBQVYsQ0FBZUMsTUFBZixHQUF3QixLQUFLWixJQUFMLENBQVVZLE1BQVYsR0FBbUIsS0FBS1YsS0FBTCxDQUFXVSxNQUFYLEdBQW9CLEtBQS9EO0FBQ0EsR0FISyxNQUdEO0FBQ0osUUFBS1osSUFBTCxDQUFVWSxNQUFWLEdBQW1CLEtBQUtWLEtBQUwsQ0FBV1UsTUFBWCxHQUFvQixLQUFLVCxNQUFMLENBQVlTLE1BQVosR0FBcUIsS0FBNUQ7QUFDQSxRQUFLZCxJQUFMLENBQVVhLElBQVYsQ0FBZUMsTUFBZixHQUF3QixJQUF4QjtBQUNBLFFBQUtkLElBQUwsQ0FBVWUsV0FBVixHQUF3QixLQUFLUCxJQUFMLENBQVVRLEtBQVYsQ0FBZ0JoQixJQUFoQixDQUF4QjtBQUNBO0FBQ0QsTUFBSVksSUFBSixFQUFVO0FBQ1QsUUFBS0EsSUFBTCxHQUFZWixJQUFaO0FBQ0E7QUFDRDtBQXRDTyxDQUFUIiwiZmlsZSI6ImNhbmR5X3JlZWxfaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhbmR5XFxpdGVtIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0aWNvbjogICBjYy5TcHJpdGUsXHJcblx0XHRmcmVlOiAgIGNjLk5vZGUsXHJcblx0XHRib251czogIGNjLk5vZGUsXHJcblx0XHRqYWNwb3Q6IGNjLk5vZGUsXHJcblx0fSxcclxuXHRpbml0KG9iail7XHJcblx0XHR0aGlzLlJlZFQgPSBvYmo7XHJcblx0fSxcclxuXHRyYW5kb206IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgaWNvbiA9IChNYXRoLnJhbmRvbSgpKjExKT4+MDtcclxuXHRcdHRoaXMuc2V0SWNvbihpY29uKTtcclxuXHRcdHJldHVybiBpY29uO1xyXG5cdH0sXHJcblx0c2V0SWNvbjogZnVuY3Rpb24oaWNvbiwgZGF0YSA9IGZhbHNlKXtcclxuXHRcdGlmIChpY29uID09IDEwKSB7XHJcblx0XHRcdHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZnJlZS5hY3RpdmUgPSB0aGlzLmJvbnVzLmFjdGl2ZSA9IHRoaXMuamFjcG90LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLlJlZFQuaWNvbnNbN107XHJcblx0XHR9ZWxzZSBpZiAoaWNvbiA9PSA5KSB7XHJcblx0XHRcdHRoaXMuZnJlZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmljb24ubm9kZS5hY3RpdmUgPSB0aGlzLmJvbnVzLmFjdGl2ZSA9IHRoaXMuamFjcG90LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fWVsc2UgaWYgKGljb24gPT0gOCkge1xyXG5cdFx0XHR0aGlzLmJvbnVzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRoaXMuZnJlZS5hY3RpdmUgPSB0aGlzLmphY3BvdC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1lbHNlIGlmIChpY29uID09IDcpIHtcclxuXHRcdFx0dGhpcy5qYWNwb3QuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5pY29uLm5vZGUuYWN0aXZlID0gdGhpcy5mcmVlLmFjdGl2ZSA9IHRoaXMuYm9udXMuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5mcmVlLmFjdGl2ZSA9IHRoaXMuYm9udXMuYWN0aXZlID0gdGhpcy5qYWNwb3QuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuUmVkVC5pY29uc1tpY29uXTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGljb247XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==