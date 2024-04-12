
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/Fish/Bullet/Fish_bullet EF.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a330//WeBF2b3HjqWpZzen', 'Fish_bullet EF');
// Script/Game/BanCa/Fish/Bullet/Fish_bullet EF.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		anim: dragonBones.ArmatureDisplay,
		typeBet: 0
	},
	onLoad: function onLoad() {
		this.onDie = function () {
			this.node.destroy();
		};
		this.anim.on(dragonBones.EventObject.COMPLETE, this.onDie, this);
		this.anim.playAnimation('kyby_zidan' + this.typeBet + '-hit', 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoXFxCdWxsZXQvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEJ1bGxldC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEJ1bGxldFxcRmlzaF9idWxsZXQgRUYuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYW5pbSIsImRyYWdvbkJvbmVzIiwiQXJtYXR1cmVEaXNwbGF5IiwidHlwZUJldCIsIm9uTG9hZCIsIm9uRGllIiwibm9kZSIsImRlc3Ryb3kiLCJvbiIsIkV2ZW50T2JqZWN0IiwiQ09NUExFVEUiLCJwbGF5QW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxRQUFNQyxZQUFZQyxlQURQO0FBRVhDLFdBQVM7QUFGRSxFQUhKO0FBT1JDLE9BUFEsb0JBT0E7QUFDUCxPQUFLQyxLQUFMLEdBQWEsWUFBVztBQUN2QixRQUFLQyxJQUFMLENBQVVDLE9BQVY7QUFDQSxHQUZEO0FBR0EsT0FBS1AsSUFBTCxDQUFVUSxFQUFWLENBQWFQLFlBQVlRLFdBQVosQ0FBd0JDLFFBQXJDLEVBQStDLEtBQUtMLEtBQXBELEVBQTJELElBQTNEO0FBQ0EsT0FBS0wsSUFBTCxDQUFVVyxhQUFWLENBQXdCLGVBQWUsS0FBS1IsT0FBcEIsR0FBOEIsTUFBdEQsRUFBOEQsQ0FBOUQ7QUFDQTtBQWJPLENBQVQiLCJmaWxlIjoiRmlzaF9idWxsZXQgRUYuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEJ1bGxldCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRhbmltOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXksXHJcblx0XHR0eXBlQmV0OiAwLFxyXG5cdH0sXHJcblx0b25Mb2FkKCl7XHJcblx0XHR0aGlzLm9uRGllID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHRoaXMubm9kZS5kZXN0cm95KCk7XHJcblx0XHR9XHJcblx0XHR0aGlzLmFuaW0ub24oZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsIHRoaXMub25EaWUsIHRoaXMpO1xyXG5cdFx0dGhpcy5hbmltLnBsYXlBbmltYXRpb24oJ2t5YnlfemlkYW4nICsgdGhpcy50eXBlQmV0ICsgJy1oaXQnLCAxKTtcclxuXHR9LFxyXG59KTtcclxuIl19