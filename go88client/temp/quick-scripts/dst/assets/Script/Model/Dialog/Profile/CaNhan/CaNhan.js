
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/CaNhan/CaNhan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47772lCqUBB4owyBQc/Yrdt', 'CaNhan');
// Script/Model/Dialog/Profile/CaNhan/CaNhan.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		nodeAvatar: cc.Node,
		body: cc.Node,
		avatar: cc.Sprite,
		UID: cc.Label,
		username: cc.Label,
		phone: cc.Label,
		phoneStatus: cc.Label,
		joinedOn: cc.Label,
		nodeRank: cc.Node,
		nodeNhan: cc.Node,
		vipLevel: cc.Label,
		vipTong: cc.Label,
		vipHien: cc.Label,
		vipTiep: cc.Label
	},
	init: function init() {
		this.header = this.header.children.map(function (obj) {
			return obj.getComponent('itemContentMenu');
		});
	},

	onEnable: function onEnable() {
		this.getLevel();
	},
	onDisable: function onDisable() {
		this.nodeAvatar.active = false;
	},
	toggleNodeA: function toggleNodeA() {
		this.nodeAvatar.active = !this.nodeAvatar.active;
	},
	getLevel: function getLevel() {
		cc.RedT.send({ user: { getLevel: true } });
	},
	level: function level(data) {
		cc.RedT.userData(data);
		cc.RedT.user.vipHT = data.vipHT - data.vipPre;
		cc.RedT.user.vipNext = data.vipNext - data.vipPre;
		cc.RedT.inGame.header.level(data.level);
		cc.RedT.inGame.header.updateEXP(cc.RedT.user.vipHT, cc.RedT.user.vipNext);
		this.vipLevel.string = 'VIP' + data.level;
		this.vipTong.string = helper.numberWithCommas(data.vipTL);
		this.vipHien.string = helper.numberWithCommas(data.vipHT);
		this.vipTiep.string = helper.numberWithCommas(data.vipNext);
		this.nodeRank.children.forEach(function (rank, index) {
			if (rank.name <= data.level) {
				rank.opacity = 255;
				if (rank.name == data.level) {
					this.nodeNhan.children[index].children[3].active = true;
				} else {
					this.nodeNhan.children[index].children[3].active = false;
				}
			} else {
				rank.opacity = 99;
				this.nodeNhan.children[index].children[3].active = false;
			}
		}.bind(this));
	},
	onNhanThuong: function onNhanThuong() {
		cc.RedT.send({ user: { nhanthuong: true } });
	},
	onSelectHead: function onSelectHead(event, name) {
		this.header.forEach(function (header) {
			if (header.node.name === name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.body.children.forEach(function (body) {
			if (body.name === name) {
				body.active = true;
			} else {
				body.active = false;
			}
		});
	},
	selectAvatar: function selectAvatar(e) {
		this.toggleNodeA();
		var avatar = e.target.name;
		cc.RedT.inGame.setAvatar(avatar);
		cc.RedT.user.avatar = avatar;
		cc.RedT.send({ user: { avatar: avatar } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXENhTmhhbi8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxDYU5oYW4vYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXENhTmhhblxcQ2FOaGFuLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFkZXIiLCJOb2RlIiwibm9kZUF2YXRhciIsImJvZHkiLCJhdmF0YXIiLCJTcHJpdGUiLCJVSUQiLCJMYWJlbCIsInVzZXJuYW1lIiwicGhvbmUiLCJwaG9uZVN0YXR1cyIsImpvaW5lZE9uIiwibm9kZVJhbmsiLCJub2RlTmhhbiIsInZpcExldmVsIiwidmlwVG9uZyIsInZpcEhpZW4iLCJ2aXBUaWVwIiwiaW5pdCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiZ2V0Q29tcG9uZW50Iiwib25FbmFibGUiLCJnZXRMZXZlbCIsIm9uRGlzYWJsZSIsImFjdGl2ZSIsInRvZ2dsZU5vZGVBIiwiUmVkVCIsInNlbmQiLCJ1c2VyIiwibGV2ZWwiLCJkYXRhIiwidXNlckRhdGEiLCJ2aXBIVCIsInZpcFByZSIsInZpcE5leHQiLCJpbkdhbWUiLCJ1cGRhdGVFWFAiLCJzdHJpbmciLCJudW1iZXJXaXRoQ29tbWFzIiwidmlwVEwiLCJmb3JFYWNoIiwicmFuayIsImluZGV4IiwibmFtZSIsIm9wYWNpdHkiLCJiaW5kIiwib25OaGFuVGh1b25nIiwibmhhbnRodW9uZyIsIm9uU2VsZWN0SGVhZCIsImV2ZW50Iiwibm9kZSIsInNlbGVjdCIsInVuc2VsZWN0Iiwic2VsZWN0QXZhdGFyIiwiZSIsInRhcmdldCIsInNldEF2YXRhciJdLCJtYXBw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QixFQUF3QjtBQUN2QjFDLFNBQUt1QixNQUFMLEdBQWMsSUFBZDtBQUNBLElBRkQsTUFFSztBQUNKdkIsU0FBS3VCLE1BQUwsR0FBYyxLQUFkO0FBQ0E7QUFDRCxHQU5EO0FBT0EsRUEvRU87QUFnRlI2QixlQUFjLHNCQUFTQyxDQUFULEVBQVc7QUFDeEIsT0FBSzdCLFdBQUw7QUFDQSxNQUFJdkIsU0FBU29ELEVBQUVDLE1BQUYsQ0FBU1osSUFBdEI7QUFDQWxELEtBQUdpQyxJQUFILENBQVFTLE1BQVIsQ0FBZXFCLFNBQWYsQ0FBeUJ0RCxNQUF6QjtBQUNBVCxLQUFHaUMsSUFBSCxDQUFRRSxJQUFSLENBQWExQixNQUFiLEdBQXNCQSxNQUF0QjtBQUNBVCxLQUFHaUMsSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsTUFBSyxFQUFDMUIsUUFBT0EsTUFBUixFQUFOLEVBQWI7QUFDQTtBQXRGTyxDQUFUIiwiZmlsZSI6IkNhTmhhbi5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxDYU5oYW4iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0aGVhZGVyOiBjYy5Ob2RlLFxyXG5cdFx0bm9kZUF2YXRhcjogY2MuTm9kZSxcclxuXHRcdGJvZHk6ICAgY2MuTm9kZSxcclxuXHRcdGF2YXRhcjogY2MuU3ByaXRlLFxyXG5cdFx0VUlEOiBjYy5MYWJlbCxcclxuXHRcdHVzZXJuYW1lOiBjYy5MYWJlbCxcclxuXHRcdHBob25lOiAgICBjYy5MYWJlbCxcclxuXHRcdHBob25lU3RhdHVzOiBjYy5MYWJlbCxcclxuXHRcdGpvaW5lZE9uOiBjYy5MYWJlbCxcclxuXHRcdG5vZGVSYW5rOiBjYy5Ob2RlLFxyXG5cdFx0bm9kZU5oYW46IGNjLk5vZGUsXHJcblx0XHR2aXBMZXZlbDogY2MuTGFiZWwsXHJcblx0XHR2aXBUb25nOiAgY2MuTGFiZWwsXHJcblx0XHR2aXBIaWVuOiAgY2MuTGFiZWwsXHJcblx0XHR2aXBUaWVwOiAgY2MuTGFiZWwsXHJcblx0fSxcclxuXHRpbml0KCl7XHJcblx0XHR0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVyLmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ2l0ZW1Db250ZW50TWVudScpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZXRMZXZlbCgpO1xyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLm5vZGVBdmF0YXIuYWN0aXZlID0gZmFsc2U7XHJcblx0fSxcclxuXHR0b2dnbGVOb2RlQTogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMubm9kZUF2YXRhci5hY3RpdmUgPSAhdGhpcy5ub2RlQXZhdGFyLmFjdGl2ZTtcclxuXHR9LFxyXG5cdGdldExldmVsOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHt1c2VyOntnZXRMZXZlbDogdHJ1ZX19KTtcclxuXHR9LFxyXG5cdGxldmVsOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGNjLlJlZFQudXNlckRhdGEoZGF0YSk7XHJcblx0XHRjYy5SZWRULnVzZXIudmlwSFQgICA9IGRhdGEudmlwSFQtZGF0YS52aXBQcmU7XHJcblx0XHRjYy5SZWRULnVzZXIudmlwTmV4dCA9IGRhdGEudmlwTmV4dC1kYXRhLnZpcFByZTtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLmhlYWRlci5sZXZlbChkYXRhLmxldmVsKTtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLmhlYWRlci51cGRhdGVFWFAoY2MuUmVkVC51c2VyLnZpcEhULCBjYy5SZWRULnVzZXIudmlwTmV4dCk7XHJcblx0XHR0aGlzLnZpcExldmVsLnN0cmluZyA9ICdWSVAnK2RhdGEubGV2ZWw7XHJcblx0XHR0aGlzLnZpcFRvbmcuc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEudmlwVEwpO1xyXG5cdFx0dGhpcy52aXBIaWVuLnN0cmluZyAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnZpcEhUKTtcclxuXHRcdHRoaXMudmlwVGllcC5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS52aXBOZXh0KTtcclxuXHRcdHRoaXMubm9kZVJhbmsuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihyYW5rLCBpbmRleCl7XHJcblx0XHRcdGlmIChyYW5rLm5hbWUgPD0gZGF0YS5sZXZlbCkge1xyXG5cdFx0XHRcdHJhbmsub3BhY2l0eSA9IDI1NTtcclxuXHRcdFx0XHRpZihyYW5rLm5hbWUgPT0gZGF0YS5sZXZlbCl7XHJcblx0XHRcdFx0XHR0aGlzLm5vZGVOaGFuLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblszXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlTmhhbi5jaGlsZHJlbltpbmRleF0uY2hpbGRyZW5bM10uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRyYW5rLm9wYWNpdHkgPSA5OTtcclxuXHRcdFx0XHR0aGlzLm5vZGVOaGFuLmNoaWxkcmVuW2luZGV4XS5jaGlsZHJlblszXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9LFxyXG5cdG9uTmhhblRodW9uZzogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7dXNlcjp7bmhhbnRodW9uZzp0cnVlfX0pO1xyXG5cdH0sXHJcblx0b25TZWxlY3RIZWFkOiBmdW5jdGlvbihldmVudCwgbmFtZSl7XHJcblx0XHR0aGlzLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xyXG5cdFx0XHRpZiAoaGVhZGVyLm5vZGUubmFtZSA9PT0gbmFtZSkge1xyXG5cdFx0XHRcdGhlYWRlci5zZWxlY3QoKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aGVhZGVyLnVuc2VsZWN0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ib2R5LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYm9keSkge1xyXG5cdFx0XHRpZiAoYm9keS5uYW1lID09PSBuYW1lKSB7XHJcblx0XHRcdFx0Ym9keS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRib2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHNlbGVjdEF2YXRhcjogZnVuY3Rpb24oZSl7XHJcblx0XHR0aGlzLnRvZ2dsZU5vZGVBKCk7XHJcblx0XHRsZXQgYXZhdGFyID0gZS50YXJnZXQubmFtZTtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLnNldEF2YXRhcihhdmF0YXIpO1xyXG5cdFx0Y2MuUmVkVC51c2VyLmF2YXRhciA9IGF2YXRhcjtcclxuXHRcdGNjLlJlZFQuc2VuZCh7dXNlcjp7YXZhdGFyOmF2YXRhcn19KTtcclxuXHR9LFxyXG59KTtcclxuIl19