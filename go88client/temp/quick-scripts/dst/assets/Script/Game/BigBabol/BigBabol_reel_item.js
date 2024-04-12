
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BigBabol/BigBabol_reel_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9394bXHjwdMpZC0cTOy8c/e', 'BigBabol_reel_item');
// Script/Game/BigBabol/BigBabol_reel_item.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		item: cc.Sprite
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	stop: function stop() {
		this.node.children.forEach(function (node) {
			var animation = node.getComponents(cc.Animation);
			animation.forEach(function (k) {
				node.removeComponent(k);
			});
		});
	},
	random: function random() {
		var icon = ~~(Math.random() * 6);
		this.setIcon(icon);
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		this.item.spriteFrame = this.RedT.icons[icon];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCaWdCYWJvbC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmlnQmFib2wvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJpZ0JhYm9sXFxCaWdCYWJvbF9yZWVsX2l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXRlbSIsIlNwcml0ZSIsImluaXQiLCJvYmoiLCJSZWRUIiwic3RvcCIsIm5vZGUiLCJjaGlsZHJlbiIsImZvckVhY2giLCJhbmltYXRpb24iLCJnZXRDb21wb25lbnRzIiwiQW5pbWF0aW9uIiwiayIsInJlbW92ZUNvbXBvbmVudCIsInJhbmRvbSIsImljb24iLCJNYXRoIiwic2V0SWNvbiIsImRhdGEiLCJzcHJpdGVGcmFtZSIsImljb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxRQUFNTCxHQUFHTTtBQURFLEVBSEo7QUFNUkMsS0FOUSxnQkFNSEMsR0FORyxFQU1DO0FBQ1IsT0FBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsRUFSTzs7QUFTUkUsT0FBTSxnQkFBVztBQUNoQixPQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQVNGLElBQVQsRUFBYztBQUN4QyxPQUFJRyxZQUFZSCxLQUFLSSxhQUFMLENBQW1CZixHQUFHZ0IsU0FBdEIsQ0FBaEI7QUFDQUYsYUFBVUQsT0FBVixDQUFrQixVQUFTSSxDQUFULEVBQVc7QUFDNUJOLFNBQUtPLGVBQUwsQ0FBcUJELENBQXJCO0FBQ0EsSUFGRDtBQUdBLEdBTEQ7QUFNQSxFQWhCTztBQWlCUkUsU0FBUSxrQkFBVTtBQUNqQixNQUFJQyxPQUFPLENBQUMsRUFBRUMsS0FBS0YsTUFBTCxLQUFjLENBQWhCLENBQVo7QUFDQSxPQUFLRyxPQUFMLENBQWFGLElBQWI7QUFDQSxTQUFPQSxJQUFQO0FBQ0EsRUFyQk87QUFzQlJFLFVBQVEsaUJBQVNGLElBQVQsRUFBNEI7QUFBQSxNQUFiRyxJQUFhLHVFQUFOLEtBQU07O0FBQ25DLE9BQUtsQixJQUFMLENBQVVtQixXQUFWLEdBQXdCLEtBQUtmLElBQUwsQ0FBVWdCLEtBQVYsQ0FBZ0JMLElBQWhCLENBQXhCO0FBQ0EsTUFBSUcsSUFBSixFQUFVO0FBQ1QsUUFBS0EsSUFBTCxHQUFZSCxJQUFaO0FBQ0E7QUFDRDtBQTNCTyxDQUFUIiwiZmlsZSI6IkJpZ0JhYm9sX3JlZWxfaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmlnQmFib2wiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0aXRlbTogY2MuU3ByaXRlLFxyXG5cdH0sXHJcblx0aW5pdChvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdH0sXHJcblx0c3RvcDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihub2RlKXtcclxuXHRcdFx0bGV0IGFuaW1hdGlvbiA9IG5vZGUuZ2V0Q29tcG9uZW50cyhjYy5BbmltYXRpb24pO1xyXG5cdFx0XHRhbmltYXRpb24uZm9yRWFjaChmdW5jdGlvbihrKXtcclxuXHRcdFx0XHRub2RlLnJlbW92ZUNvbXBvbmVudChrKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHJhbmRvbTogZnVuY3Rpb24oKXtcclxuXHRcdGxldCBpY29uID0gfn4oTWF0aC5yYW5kb20oKSo2KTtcclxuXHRcdHRoaXMuc2V0SWNvbihpY29uKTtcclxuXHRcdHJldHVybiBpY29uO1xyXG5cdH0sXHJcblx0c2V0SWNvbjpmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xyXG5cdFx0dGhpcy5pdGVtLnNwcml0ZUZyYW1lID0gdGhpcy5SZWRULmljb25zW2ljb25dO1xyXG5cdFx0aWYgKGRhdGEpIHtcclxuXHRcdFx0dGhpcy5kYXRhID0gaWNvbjtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19