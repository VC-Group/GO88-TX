
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Util/PushNohu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0faf5dS7zpEdoBIck7+SPhQ', 'PushNohu');
// Script/Util/PushNohu.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		prefab: cc.Prefab,
		isPush: false
	},
	onLoad: function onLoad() {
		this.list = [];
	},

	pushNotice: function pushNotice() {
		if (this.list.length > 0) {
			this.isPush = true;
			var data = this.list[0];
			this.addNotice(data);
			this.list.splice(0, 1);
		} else {
			this.isPush = false;
		}
	},
	onData: function onData(data) {
		if (this.isPush) {
			this.list.push(data);
		} else {
			this.addNotice(data);
		}
		this.isPush = true;
		this.addNews(data);
	},
	addNotice: function addNotice(data) {
		var notice = cc.instantiate(this.prefab);
		var notice = notice.getComponent('ThongBaoNoHu');
		notice.title.string = data.title;
		notice.users.string = data.name;
		notice.bet.string = helper.numberWithCommas(data.bet);

		notice.init(this);
		this.node.addChild(notice.node);
	},
	addNews: function addNews(data) {
		cc.RedT.inGame.newsContents.NewsAddText({ users: data.name, bet: data.bet, game: data.title, status: 1 });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXFV0aWwvLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcVXRpbC9hc3NldHNcXFNjcmlwdFxcVXRpbFxcUHVzaE5vaHUuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByZWZhYiIsIlByZWZhYiIsImlzUHVzaCIsIm9uTG9hZCIsImxpc3QiLCJwdXNoTm90aWNlIiwibGVuZ3RoIiwiZGF0YSIsImFkZE5vdGljZSIsInNwbGljZSIsIm9uRGF0YSIsInB1c2giLCJhZGROZXdzIiwibm90aWNlIiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJ0aXRsZSIsInN0cmluZyIsInVzZXJzIiwibmFtZSIsImJldCIsIm51bWJlcldpdGhDb21tYXMiLCJpbml0Iiwibm9kZSIsImFkZENoaWxkIiwiUmVkVCIsImluR2FtZSIsIm5ld3NDb250ZW50cyIsIk5ld3NBZGRUZXh0IiwiZ2FtZSIsInN0YXR1cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsVUFBUUwsR0FBR00sTUFEQTtBQUVYQyxVQUFRO0FBRkcsRUFISjtBQU9SQyxPQVBRLG9CQU9FO0FBQ1QsT0FBS0MsSUFBTCxHQUFZLEVBQVo7QUFDQSxFQVRPOztBQVVSQyxhQUFZLHNCQUFXO0FBQ3RCLE1BQUksS0FBS0QsSUFBTCxDQUFVRSxNQUFWLEdBQW1CLENBQXZCLEVBQTBCO0FBQ3pCLFFBQUtKLE1BQUwsR0FBYyxJQUFkO0FBQ0EsT0FBSUssT0FBTyxLQUFLSCxJQUFMLENBQVUsQ0FBVixDQUFYO0FBQ0EsUUFBS0ksU0FBTCxDQUFlRCxJQUFmO0FBQ0EsUUFBS0gsSUFBTCxDQUFVSyxNQUFWLENBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBQ0EsR0FMRCxNQUtLO0FBQ0osUUFBS1AsTUFBTCxHQUFjLEtBQWQ7QUFDQTtBQUNELEVBbkJPO0FBb0JSUSxTQUFRLGdCQUFTSCxJQUFULEVBQWM7QUFDckIsTUFBSSxLQUFLTCxNQUFULEVBQWlCO0FBQ2hCLFFBQUtFLElBQUwsQ0FBVU8sSUFBVixDQUFlSixJQUFmO0FBQ0EsR0FGRCxNQUVLO0FBQ0osUUFBS0MsU0FBTCxDQUFlRCxJQUFmO0FBQ0E7QUFDRCxPQUFLTCxNQUFMLEdBQWMsSUFBZDtBQUNBLE9BQUtVLE9BQUwsQ0FBYUwsSUFBYjtBQUNBLEVBNUJPO0FBNkJSQyxZQUFXLG1CQUFTRCxJQUFULEVBQWM7QUFDeEIsTUFBSU0sU0FBU2xCLEdBQUdtQixXQUFILENBQWUsS0FBS2QsTUFBcEIsQ0FBYjtBQUNBLE1BQUlhLFNBQVNBLE9BQU9FLFlBQVAsQ0FBb0IsY0FBcEIsQ0FBYjtBQUNBRixTQUFPRyxLQUFQLENBQWFDLE1BQWIsR0FBc0JWLEtBQUtTLEtBQTNCO0FBQ0FILFNBQU9LLEtBQVAsQ0FBYUQsTUFBYixHQUFzQlYsS0FBS1ksSUFBM0I7QUFDQU4sU0FBT08sR0FBUCxDQUFXSCxNQUFYLEdBQXNCeEIsT0FBTzRCLGdCQUFQLENBQXdCZCxLQUFLYSxHQUE3QixDQUF0Qjs7QUFFQVAsU0FBT1MsSUFBUCxDQUFZLElBQVo7QUFDQSxPQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJYLE9BQU9VLElBQTFCO0FBQ0EsRUF0Q087QUF1Q1JYLFVBQVMsaUJBQVNMLElBQVQsRUFBYztBQUN0QlosS0FBRzhCLElBQUgsQ0FBUUMsTUFBUixDQUFlQyxZQUFmLENBQTRCQyxXQUE1QixDQUF3QyxFQUFDVixPQUFPWCxLQUFLWSxJQUFiLEVBQW1CQyxLQUFLYixLQUFLYSxHQUE3QixFQUFrQ1MsTUFBTXRCLEtBQUtTLEtBQTdDLEVBQW9EYyxRQUFRLENBQTVELEVBQXhDO0FBQ0E7QUF6Q08sQ0FBVCIsImZpbGUiOiJQdXNoTm9odS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxVdGlsIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHByZWZhYjogY2MuUHJlZmFiLFxyXG5cdFx0aXNQdXNoOiBmYWxzZSxcclxuXHR9LFxyXG5cdG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLmxpc3QgPSBbXTtcclxuXHR9LFxyXG5cdHB1c2hOb3RpY2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKHRoaXMubGlzdC5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoaXMuaXNQdXNoID0gdHJ1ZTtcclxuXHRcdFx0dmFyIGRhdGEgPSB0aGlzLmxpc3RbMF07XHJcblx0XHRcdHRoaXMuYWRkTm90aWNlKGRhdGEpO1xyXG5cdFx0XHR0aGlzLmxpc3Quc3BsaWNlKDAsIDEpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuaXNQdXNoID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0aWYgKHRoaXMuaXNQdXNoKSB7XHJcblx0XHRcdHRoaXMubGlzdC5wdXNoKGRhdGEpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuYWRkTm90aWNlKGRhdGEpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pc1B1c2ggPSB0cnVlO1xyXG5cdFx0dGhpcy5hZGROZXdzKGRhdGEpO1xyXG5cdH0sXHJcblx0YWRkTm90aWNlOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHZhciBub3RpY2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcblx0XHR2YXIgbm90aWNlID0gbm90aWNlLmdldENvbXBvbmVudCgnVGhvbmdCYW9Ob0h1Jyk7XHJcblx0XHRub3RpY2UudGl0bGUuc3RyaW5nID0gZGF0YS50aXRsZTtcclxuXHRcdG5vdGljZS51c2Vycy5zdHJpbmcgPSBkYXRhLm5hbWU7XHJcblx0XHRub3RpY2UuYmV0LnN0cmluZyAgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5iZXQpO1xyXG5cclxuXHRcdG5vdGljZS5pbml0KHRoaXMpO1xyXG5cdFx0dGhpcy5ub2RlLmFkZENoaWxkKG5vdGljZS5ub2RlKTtcclxuXHR9LFxyXG5cdGFkZE5ld3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUubmV3c0NvbnRlbnRzLk5ld3NBZGRUZXh0KHt1c2VyczogZGF0YS5uYW1lLCBiZXQ6IGRhdGEuYmV0LCBnYW1lOiBkYXRhLnRpdGxlLCBzdGF0dXM6IDF9KTtcclxuXHR9LFxyXG59KTtcclxuIl19