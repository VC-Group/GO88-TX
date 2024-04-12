
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CoTrang/reels/CoTrang_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fcb34krtXlN66KnmT4HIAyT', 'CoTrang_item');
// Script/Game/CoTrang/reels/CoTrang_item.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {
		icon: cc.Sprite,
		free: cc.Node,
		bonus: cc.Node,
		hu: cc.Node,
		wind: cc.Node
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
			this.wind.active = true;
			this.icon.node.active = this.free.active = this.bonus.active = this.hu.active = false;
		} else if (icon == 9) {
			this.hu.active = true;
			this.icon.node.active = this.free.active = this.bonus.active = this.wind.active = false;
		} else if (icon == 8) {
			this.bonus.active = true;
			this.icon.node.active = this.free.active = this.wind.active = this.hu.active = false;
		} else if (icon == 7) {
			this.free.active = true;
			this.icon.node.active = this.wind.active = this.bonus.active = this.hu.active = false;
		} else {
			this.icon.node.active = true;
			this.icon.spriteFrame = this.RedT.icons[icon];
			this.free.active = this.wind.active = this.bonus.active = this.hu.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xccmVlbHMvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nXFxyZWVscy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xccmVlbHNcXENvVHJhbmdfaXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpY29uIiwiU3ByaXRlIiwiZnJlZSIsIk5vZGUiLCJib251cyIsImh1Iiwid2luZCIsImluaXQiLCJvYmoiLCJSZWRUIiwicmFuZG9tIiwiTWF0aCIsInNldEljb24iLCJkYXRhIiwiYWN0aXZlIiwibm9kZSIsInNwcml0ZUZyYW1lIiwiaWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKO0FBRVJDLGFBQVk7QUFDWEMsUUFBT0wsR0FBR00sTUFEQztBQUVYQyxRQUFPUCxHQUFHUSxJQUZDO0FBR1hDLFNBQU9ULEdBQUdRLElBSEM7QUFJWEUsTUFBT1YsR0FBR1EsSUFKQztBQUtYRyxRQUFPWCxHQUFHUTtBQUxDLEVBRko7QUFTUkksS0FUUSxnQkFTSEMsR0FURyxFQVNDO0FBQ1IsT0FBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsRUFYTzs7QUFZUkUsU0FBUSxrQkFBVTtBQUNqQixNQUFJVixPQUFRVyxLQUFLRCxNQUFMLEtBQWMsRUFBZixJQUFvQixDQUEvQjtBQUNBLE9BQUtFLE9BQUwsQ0FBYVosSUFBYjtBQUNBLFNBQU9BLElBQVA7QUFDQSxFQWhCTztBQWlCUlksVUFBUyxpQkFBU1osSUFBVCxFQUE0QjtBQUFBLE1BQWJhLElBQWEsdUVBQU4sS0FBTTs7QUFDcEMsTUFBSWIsUUFBUSxFQUFaLEVBQWdCO0FBQ2YsUUFBS00sSUFBTCxDQUFVUSxNQUFWLEdBQW1CLElBQW5CO0FBQ0EsUUFBS2QsSUFBTCxDQUFVZSxJQUFWLENBQWVELE1BQWYsR0FBd0IsS0FBS1osSUFBTCxDQUFVWSxNQUFWLEdBQW1CLEtBQUtWLEtBQUwsQ0FBV1UsTUFBWCxHQUFvQixLQUFLVCxFQUFMLENBQVFTLE1BQVIsR0FBaUIsS0FBaEY7QUFDQSxHQUhELE1BR00sSUFBSWQsUUFBUSxDQUFaLEVBQWU7QUFDcEIsUUFBS0ssRUFBTCxDQUFRUyxNQUFSLEdBQWlCLElBQWpCO0FBQ0EsUUFBS2QsSUFBTCxDQUFVZSxJQUFWLENBQWVELE1BQWYsR0FBd0IsS0FBS1osSUFBTCxDQUFVWSxNQUFWLEdBQW1CLEtBQUtWLEtBQUwsQ0FBV1UsTUFBWCxHQUFvQixLQUFLUixJQUFMLENBQVVRLE1BQVYsR0FBbUIsS0FBbEY7QUFDQSxHQUhLLE1BR0EsSUFBSWQsUUFBUSxDQUFaLEVBQWU7QUFDcEIsUUFBS0ksS0FBTCxDQUFXVSxNQUFYLEdBQW9CLElBQXBCO0FBQ0EsUUFBS2QsSUFBTCxDQUFVZSxJQUFWLENBQWVELE1BQWYsR0FBd0IsS0FBS1osSUFBTCxDQUFVWSxNQUFWLEdBQW1CLEtBQUtSLElBQUwsQ0FBVVEsTUFBVixHQUFtQixLQUFLVCxFQUFMLENBQVFTLE1BQVIsR0FBaUIsS0FBL0U7QUFDQSxHQUhLLE1BR0EsSUFBSWQsUUFBUSxDQUFaLEVBQWU7QUFDcEIsUUFBS0UsSUFBTCxDQUFVWSxNQUFWLEdBQW1CLElBQW5CO0FBQ0EsUUFBS2QsSUFBTCxDQUFVZSxJQUFWLENBQWVELE1BQWYsR0FBd0IsS0FBS1IsSUFBTCxDQUFVUSxNQUFWLEdBQW1CLEtBQUtWLEtBQUwsQ0FBV1UsTUFBWCxHQUFvQixLQUFLVCxFQUFMLENBQVFTLE1BQVIsR0FBaUIsS0FBaEY7QUFDQSxHQUhLLE1BR0Q7QUFDSixRQUFLZCxJQUFMLENBQVVlLElBQVYsQ0FBZUQsTUFBZixHQUF3QixJQUF4QjtBQUNBLFFBQUtkLElBQUwsQ0FBVWdCLFdBQVYsR0FBd0IsS0FBS1AsSUFBTCxDQUFVUSxLQUFWLENBQWdCakIsSUFBaEIsQ0FBeEI7QUFDQSxRQUFLRSxJQUFMLENBQVVZLE1BQVYsR0FBbUIsS0FBS1IsSUFBTCxDQUFVUSxNQUFWLEdBQW1CLEtBQUtWLEtBQUwsQ0FBV1UsTUFBWCxHQUFvQixLQUFLVCxFQUFMLENBQVFTLE1BQVIsR0FBaUIsS0FBM0U7QUFDQTtBQUNELE1BQUlELElBQUosRUFBVTtBQUNULFFBQUtBLElBQUwsR0FBWWIsSUFBWjtBQUNBO0FBQ0Q7QUF0Q08sQ0FBVCIsImZpbGUiOiJDb1RyYW5nX2l0ZW0uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nXFxyZWVscyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGljb246ICBjYy5TcHJpdGUsXHJcblx0XHRmcmVlOiAgY2MuTm9kZSxcclxuXHRcdGJvbnVzOiBjYy5Ob2RlLFxyXG5cdFx0aHU6ICAgIGNjLk5vZGUsXHJcblx0XHR3aW5kOiAgY2MuTm9kZSxcclxuXHR9LFxyXG5cdGluaXQob2JqKXtcclxuXHRcdHRoaXMuUmVkVCA9IG9iajtcclxuXHR9LFxyXG5cdHJhbmRvbTogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBpY29uID0gKE1hdGgucmFuZG9tKCkqMTEpPj4wO1xyXG5cdFx0dGhpcy5zZXRJY29uKGljb24pO1xyXG5cdFx0cmV0dXJuIGljb247XHJcblx0fSxcclxuXHRzZXRJY29uOiBmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xyXG5cdFx0aWYgKGljb24gPT0gMTApIHtcclxuXHRcdFx0dGhpcy53aW5kLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRoaXMuZnJlZS5hY3RpdmUgPSB0aGlzLmJvbnVzLmFjdGl2ZSA9IHRoaXMuaHUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR9ZWxzZSBpZiAoaWNvbiA9PSA5KSB7XHJcblx0XHRcdHRoaXMuaHUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5pY29uLm5vZGUuYWN0aXZlID0gdGhpcy5mcmVlLmFjdGl2ZSA9IHRoaXMuYm9udXMuYWN0aXZlID0gdGhpcy53aW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fWVsc2UgaWYgKGljb24gPT0gOCkge1xyXG5cdFx0XHR0aGlzLmJvbnVzLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRoaXMuZnJlZS5hY3RpdmUgPSB0aGlzLndpbmQuYWN0aXZlID0gdGhpcy5odS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1lbHNlIGlmIChpY29uID09IDcpIHtcclxuXHRcdFx0dGhpcy5mcmVlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRoaXMud2luZC5hY3RpdmUgPSB0aGlzLmJvbnVzLmFjdGl2ZSA9IHRoaXMuaHUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5pY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5SZWRULmljb25zW2ljb25dO1xyXG5cdFx0XHR0aGlzLmZyZWUuYWN0aXZlID0gdGhpcy53aW5kLmFjdGl2ZSA9IHRoaXMuYm9udXMuYWN0aXZlID0gdGhpcy5odS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGljb247XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==