
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/AngryBirds/AngryBirds-item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efa70M1TdBLHa9pSAAOj37L', 'AngryBirds-item');
// Script/Game/AngryBirds/AngryBirds-item.js

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

		var icon = Math.random() * 6 >> 0;
		this.setIcon(icon);
		if (data) {
			this.data = icon;
		}
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		this.icon.spriteFrame = this.RedT.icons[icon];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzXFxBbmdyeUJpcmRzLWl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaWNvbiIsIlNwcml0ZSIsImluaXQiLCJvYmoiLCJSZWRUIiwicmFuZG9tIiwiZGF0YSIsIk1hdGgiLCJzZXRJY29uIiwic3ByaXRlRnJhbWUiLCJpY29ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsUUFBTUwsR0FBR007QUFERSxFQUhKO0FBTVJDLEtBTlEsZ0JBTUhDLEdBTkcsRUFNQztBQUNSLE9BQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNBLEVBUk87O0FBU1JFLFNBQVEsa0JBQXNCO0FBQUEsTUFBYkMsSUFBYSx1RUFBTixLQUFNOztBQUM3QixNQUFJTixPQUFRTyxLQUFLRixNQUFMLEtBQWMsQ0FBZixJQUFtQixDQUE5QjtBQUNBLE9BQUtHLE9BQUwsQ0FBYVIsSUFBYjtBQUNBLE1BQUlNLElBQUosRUFBVTtBQUNULFFBQUtBLElBQUwsR0FBWU4sSUFBWjtBQUNBO0FBQ0QsU0FBT0EsSUFBUDtBQUNBLEVBaEJPO0FBaUJSUSxVQUFRLGlCQUFTUixJQUFULEVBQTRCO0FBQUEsTUFBYk0sSUFBYSx1RUFBTixLQUFNOztBQUNuQyxPQUFLTixJQUFMLENBQVVTLFdBQVYsR0FBd0IsS0FBS0wsSUFBTCxDQUFVTSxLQUFWLENBQWdCVixJQUFoQixDQUF4QjtBQUNBLE1BQUlNLElBQUosRUFBVTtBQUNULFFBQUtBLElBQUwsR0FBWU4sSUFBWjtBQUNBO0FBQ0Q7QUF0Qk8sQ0FBVCIsImZpbGUiOiJBbmdyeUJpcmRzLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEFuZ3J5QmlyZHMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0aWNvbjogY2MuU3ByaXRlLFxyXG5cdH0sXHJcblx0aW5pdChvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdH0sXHJcblx0cmFuZG9tOiBmdW5jdGlvbihkYXRhID0gZmFsc2Upe1xyXG5cdFx0dmFyIGljb24gPSAoTWF0aC5yYW5kb20oKSo2KT4+MDtcclxuXHRcdHRoaXMuc2V0SWNvbihpY29uKTtcclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGljb247XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaWNvbjtcclxuXHR9LFxyXG5cdHNldEljb246ZnVuY3Rpb24oaWNvbiwgZGF0YSA9IGZhbHNlKXtcclxuXHRcdHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuUmVkVC5pY29uc1tpY29uXTtcclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGljb247XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==