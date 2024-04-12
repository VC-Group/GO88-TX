
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/AngryBirds/AngryBirds-itemR.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '778daCpzslOUbNzvpIkVWDh', 'AngryBirds-itemR');
// Script/Game/AngryBirds/AngryBirds-itemR.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		icon: cc.Sprite
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	random: function random() {
		var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		var icon = Math.random() * 5 >> 0;
		this.setIcon(icon);
		if (data) {
			this.data = icon;
		}
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		if (icon === 0) {
			this.icon.spriteFrame = this.RedT.icons[0];
		} else {
			this.icon.spriteFrame = this.RedT.iconsX[icon - 1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzXFxBbmdyeUJpcmRzLWl0ZW1SLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImljb24iLCJTcHJpdGUiLCJpbml0Iiwib2JqIiwiUmVkVCIsInJhbmRvbSIsImRhdGEiLCJNYXRoIiwic2V0SWNvbiIsInNwcml0ZUZyYW1lIiwiaWNvbnMiLCJpY29uc1giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLFFBQU1MLEdBQUdNO0FBREUsRUFISjtBQU1SQyxLQU5RLGdCQU1IQyxHQU5HLEVBTUM7QUFDUixPQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQSxFQVJPOztBQVNSRSxTQUFRLGtCQUFzQjtBQUFBLE1BQWJDLElBQWEsdUVBQU4sS0FBTTs7QUFDN0IsTUFBSU4sT0FBUU8sS0FBS0YsTUFBTCxLQUFjLENBQWYsSUFBbUIsQ0FBOUI7QUFDQSxPQUFLRyxPQUFMLENBQWFSLElBQWI7QUFDQSxNQUFJTSxJQUFKLEVBQVU7QUFDVCxRQUFLQSxJQUFMLEdBQVlOLElBQVo7QUFDQTtBQUNELFNBQU9BLElBQVA7QUFDQSxFQWhCTztBQWlCUlEsVUFBUSxpQkFBU1IsSUFBVCxFQUE0QjtBQUFBLE1BQWJNLElBQWEsdUVBQU4sS0FBTTs7QUFDbkMsTUFBSU4sU0FBUyxDQUFiLEVBQWdCO0FBQ2YsUUFBS0EsSUFBTCxDQUFVUyxXQUFWLEdBQXdCLEtBQUtMLElBQUwsQ0FBVU0sS0FBVixDQUFnQixDQUFoQixDQUF4QjtBQUNBLEdBRkQsTUFFSztBQUNKLFFBQUtWLElBQUwsQ0FBVVMsV0FBVixHQUF3QixLQUFLTCxJQUFMLENBQVVPLE1BQVYsQ0FBaUJYLE9BQUssQ0FBdEIsQ0FBeEI7QUFDQTtBQUNELE1BQUlNLElBQUosRUFBVTtBQUNULFFBQUtBLElBQUwsR0FBWU4sSUFBWjtBQUNBO0FBQ0Q7QUExQk8sQ0FBVCIsImZpbGUiOiJBbmdyeUJpcmRzLWl0ZW1SLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGljb246IGNjLlNwcml0ZSxcclxuXHR9LFxyXG5cdGluaXQob2JqKXtcclxuXHRcdHRoaXMuUmVkVCA9IG9iajtcclxuXHR9LFxyXG5cdHJhbmRvbTogZnVuY3Rpb24oZGF0YSA9IGZhbHNlKXtcclxuXHRcdHZhciBpY29uID0gKE1hdGgucmFuZG9tKCkqNSk+PjA7XHJcblx0XHR0aGlzLnNldEljb24oaWNvbik7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR0aGlzLmRhdGEgPSBpY29uO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGljb247XHJcblx0fSxcclxuXHRzZXRJY29uOmZ1bmN0aW9uKGljb24sIGRhdGEgPSBmYWxzZSl7XHJcblx0XHRpZiAoaWNvbiA9PT0gMCkge1xyXG5cdFx0XHR0aGlzLmljb24uc3ByaXRlRnJhbWUgPSB0aGlzLlJlZFQuaWNvbnNbMF07XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5pY29uLnNwcml0ZUZyYW1lID0gdGhpcy5SZWRULmljb25zWFtpY29uLTFdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5kYXRhID0gaWNvbjtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19