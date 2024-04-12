
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/VuongQuocRed_items/VuongQuocRed_items.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aab4d3N+XxIp75z3i5xXpS8', 'VuongQuocRed_items');
// Script/Game/VuongQuocRed/VuongQuocRed_items/VuongQuocRed_items.js

"use strict";

cc.Class({
	extends: cc.Component,
	properties: {
		icon: cc.Sprite,
		icon4: cc.Node,
		icon5: cc.Node,
		icon6: cc.Node
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	/**
 stop: function() {
 	this.node.children.forEach(function(node){
 		let animation = node.getComponents(cc.Animation);
 		animation.forEach(function(k){
 			node.removeComponent(k);
 		});
 	});
 },
 */
	random: function random() {
		var icon = Math.random() * 7 >> 0;
		this.setIcon(icon);
		return icon;
	},
	setIcon: function setIcon(icon) {
		var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		if (icon === 4) {
			this.icon4.active = true;
			this.icon.node.active = this.icon5.active = this.icon6.active = false;
		} else if (icon === 5) {
			this.icon5.active = true;
			this.icon.node.active = this.icon4.active = this.icon6.active = false;
		} else if (icon === 6) {
			this.icon6.active = true;
			this.icon.node.active = this.icon4.active = this.icon5.active = false;
		} else {
			this.icon.node.active = true;
			this.icon4.active = this.icon5.active = this.icon6.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxWdW9uZ1F1b2NSZWRfaXRlbXMvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXFZ1b25nUXVvY1JlZF9pdGVtcy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxWdW9uZ1F1b2NSZWRfaXRlbXNcXFZ1b25nUXVvY1JlZF9pdGVtcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpY29uIiwiU3ByaXRlIiwiaWNvbjQiLCJOb2RlIiwiaWNvbjUiLCJpY29uNiIsImluaXQiLCJvYmoiLCJSZWRUIiwicmFuZG9tIiwiTWF0aCIsInNldEljb24iLCJkYXRhIiwiYWN0aXZlIiwibm9kZSIsInNwcml0ZUZyYW1lIiwiaWNvbnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKO0FBRVJDLGFBQVk7QUFDWEMsUUFBT0wsR0FBR00sTUFEQztBQUVYQyxTQUFPUCxHQUFHUSxJQUZDO0FBR1hDLFNBQU9ULEdBQUdRLElBSEM7QUFJWEUsU0FBT1YsR0FBR1E7QUFKQyxFQUZKO0FBUVJHLEtBUlEsZ0JBUUhDLEdBUkcsRUFRQztBQUNSLE9BQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNBLEVBVk87O0FBV1I7Ozs7Ozs7Ozs7QUFVQUUsU0FBUSxrQkFBVTtBQUNqQixNQUFJVCxPQUFRVSxLQUFLRCxNQUFMLEtBQWMsQ0FBZixJQUFtQixDQUE5QjtBQUNBLE9BQUtFLE9BQUwsQ0FBYVgsSUFBYjtBQUNBLFNBQU9BLElBQVA7QUFDQSxFQXpCTztBQTBCUlcsVUFBUyxpQkFBU1gsSUFBVCxFQUE0QjtBQUFBLE1BQWJZLElBQWEsdUVBQU4sS0FBTTs7QUFDcEMsTUFBSVosU0FBUyxDQUFiLEVBQWdCO0FBQ2YsUUFBS0UsS0FBTCxDQUFXVyxNQUFYLEdBQW9CLElBQXBCO0FBQ0EsUUFBS2IsSUFBTCxDQUFVYyxJQUFWLENBQWVELE1BQWYsR0FBd0IsS0FBS1QsS0FBTCxDQUFXUyxNQUFYLEdBQW9CLEtBQUtSLEtBQUwsQ0FBV1EsTUFBWCxHQUFvQixLQUFoRTtBQUNBLEdBSEQsTUFHTSxJQUFJYixTQUFTLENBQWIsRUFBZ0I7QUFDckIsUUFBS0ksS0FBTCxDQUFXUyxNQUFYLEdBQW9CLElBQXBCO0FBQ0EsUUFBS2IsSUFBTCxDQUFVYyxJQUFWLENBQWVELE1BQWYsR0FBd0IsS0FBS1gsS0FBTCxDQUFXVyxNQUFYLEdBQW9CLEtBQUtSLEtBQUwsQ0FBV1EsTUFBWCxHQUFvQixLQUFoRTtBQUNBLEdBSEssTUFHQSxJQUFJYixTQUFTLENBQWIsRUFBZ0I7QUFDckIsUUFBS0ssS0FBTCxDQUFXUSxNQUFYLEdBQW9CLElBQXBCO0FBQ0EsUUFBS2IsSUFBTCxDQUFVYyxJQUFWLENBQWVELE1BQWYsR0FBd0IsS0FBS1gsS0FBTCxDQUFXVyxNQUFYLEdBQW9CLEtBQUtULEtBQUwsQ0FBV1MsTUFBWCxHQUFvQixLQUFoRTtBQUNBLEdBSEssTUFHQztBQUNOLFFBQUtiLElBQUwsQ0FBVWMsSUFBVixDQUFlRCxNQUFmLEdBQXdCLElBQXhCO0FBQ0EsUUFBS1gsS0FBTCxDQUFXVyxNQUFYLEdBQW9CLEtBQUtULEtBQUwsQ0FBV1MsTUFBWCxHQUFvQixLQUFLUixLQUFMLENBQVdRLE1BQVgsR0FBb0IsS0FBNUQ7QUFDQSxRQUFLYixJQUFMLENBQVVlLFdBQVYsR0FBd0IsS0FBS1AsSUFBTCxDQUFVUSxLQUFWLENBQWdCaEIsSUFBaEIsQ0FBeEI7QUFDQTtBQUNELE1BQUlZLElBQUosRUFBVTtBQUNULFFBQUtBLElBQUwsR0FBWVosSUFBWjtBQUNBO0FBQ0Q7QUE1Q08sQ0FBVCIsImZpbGUiOiJWdW9uZ1F1b2NSZWRfaXRlbXMuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXFZ1b25nUXVvY1JlZF9pdGVtcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGljb246ICBjYy5TcHJpdGUsXHJcblx0XHRpY29uNDogY2MuTm9kZSxcclxuXHRcdGljb241OiBjYy5Ob2RlLFxyXG5cdFx0aWNvbjY6IGNjLk5vZGUsXHJcblx0fSxcclxuXHRpbml0KG9iail7XHJcblx0XHR0aGlzLlJlZFQgPSBvYmo7XHJcblx0fSxcclxuXHQvKipcclxuXHRzdG9wOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG5vZGUpe1xyXG5cdFx0XHRsZXQgYW5pbWF0aW9uID0gbm9kZS5nZXRDb21wb25lbnRzKGNjLkFuaW1hdGlvbik7XHJcblx0XHRcdGFuaW1hdGlvbi5mb3JFYWNoKGZ1bmN0aW9uKGspe1xyXG5cdFx0XHRcdG5vZGUucmVtb3ZlQ29tcG9uZW50KGspO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0Ki9cclxuXHRyYW5kb206IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgaWNvbiA9IChNYXRoLnJhbmRvbSgpKjcpPj4wO1xyXG5cdFx0dGhpcy5zZXRJY29uKGljb24pO1xyXG5cdFx0cmV0dXJuIGljb247XHJcblx0fSxcclxuXHRzZXRJY29uOiBmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xyXG5cdFx0aWYgKGljb24gPT09IDQpIHtcclxuXHRcdFx0dGhpcy5pY29uNC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLmljb24ubm9kZS5hY3RpdmUgPSB0aGlzLmljb241LmFjdGl2ZSA9IHRoaXMuaWNvbjYuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR9ZWxzZSBpZiAoaWNvbiA9PT0gNSkge1xyXG5cdFx0XHR0aGlzLmljb241LmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuaWNvbi5ub2RlLmFjdGl2ZSA9IHRoaXMuaWNvbjQuYWN0aXZlID0gdGhpcy5pY29uNi5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1lbHNlIGlmIChpY29uID09PSA2KSB7XHJcblx0XHRcdHRoaXMuaWNvbjYuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5pY29uLm5vZGUuYWN0aXZlID0gdGhpcy5pY29uNC5hY3RpdmUgPSB0aGlzLmljb241LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5pY29uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5pY29uNC5hY3RpdmUgPSB0aGlzLmljb241LmFjdGl2ZSA9IHRoaXMuaWNvbjYuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMuaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuUmVkVC5pY29uc1tpY29uXTtcclxuXHRcdH1cclxuXHRcdGlmIChkYXRhKSB7XHJcblx0XHRcdHRoaXMuZGF0YSA9IGljb247XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==