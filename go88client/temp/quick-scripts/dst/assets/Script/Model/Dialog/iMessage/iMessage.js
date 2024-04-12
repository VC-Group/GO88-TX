
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/iMessage/iMessage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70701e+jWpDjIG4eqgLNgmQ', 'iMessage');
// Script/Model/Dialog/iMessage/iMessage.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		news: cc.Label,
		text: cc.Label,
		item: cc.Prefab,
		content: cc.Node,
		message: ''
	},
	onLoad: function onLoad() {},

	onEnable: function onEnable() {
		cc.RedT.send({ message: { update: true } });
	},
	onData: function onData(data) {
		if (!!data.list) {
			this.list(data.list);
			this.countNews(data.list);
		}
		if (!!data.text) {
			this.text.string = data.text;
		}
		if (!!data.news) {
			if (data.news > 0) {
				this.news.node.active = true;
				this.news.string = data.news;
			} else {
				this.news.node.active = false;
			}
		}
	},
	list: function list(_list) {
		this.content.destroyAllChildren();
		var self = this;
		Promise.all(_list.map(function (mail) {
			var item = cc.instantiate(self.item);
			item = item.getComponent('iMessage_item');
			item.init(self);
			item.title.string = mail.title;
			item.time.string = Helper.getStringDateByTime(mail.time);
			item.bg.active = !mail.read;
			item.dot.active = self.message == mail._id;
			item.message = mail._id;
			self.content.addChild(item.node);
		}));
	},
	onContentClick: function onContentClick(obj) {
		var _this = this;

		if (obj.message != this.message) {
			obj.bg.active = false;
			cc.RedT.audio.playClick();
			this.message = obj.message;
			this.getContent();

			obj.dot.active = true;

			Promise.all(this.content.children.filter(function (node) {
				if (node != obj.node) {
					node.children[0].active = false;
				}
				return node.children[1].active;
			})).then(function (result) {
				result = result.length;
				if (result > 0) {
					_this.news.node.active = true;
					_this.news.string = result;
				} else {
					_this.news.node.active = false;
				}
			});
		}
	},
	getContent: function getContent(obj) {
		cc.RedT.send({ message: { view: this.message } });
	},
	reset: function reset() {
		this.content.destroyAllChildren();
		this.text.string = this.news.string = "";
		this.news.node.active = false;
	},
	countNews: function countNews(data) {
		var count = data.filter(function (obj) {
			return !obj.read;
		});
		count = count.length;
		if (count > 0) {
			this.news.node.active = true;
			this.news.string = count;
		} else {
			this.news.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcaU1lc3NhZ2UvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxpTWVzc2FnZS9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcaU1lc3NhZ2VcXGlNZXNzYWdlLmpzIl0sIm5hbWVzIjpbIkhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJuZXdzIiwiTGFiZWwiLCJ0ZXh0IiwiaXRlbSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwibWVzc2FnZSIsIm9uTG9hZCIsIm9uRW5hYmxlIiwiUmVkVCIsInNlbmQiLCJ1cGRhdGUiLCJvbkRhdGEiLCJkYXRhIiwibGlzdCIsImNvdW50TmV3cyIsInN0cmluZyIsIm5vZGUiLCJhY3RpdmUiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJzZWxmIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIm1haWwiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsImluaXQiLCJ0aXRsZSIsInRpbWUiLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwiYmciLCJyZWFkIiwiZG90IiwiX2lkIiwiYWRkQ2hpbGQiLCJvbkNvbnRlbnRDbGljayIsIm9iaiIsImF1ZGlvIiwicGxheUNsaWNrIiwiZ2V0Q29udGVudCIsImNoaWxkcmVuIiwiZmlsdGVyIiwidGhlbiIsInJlc3VsdCIsImxlbmd0aCIsInZpZXciLCJyZXNldCIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxRQUFTTCxHQUFHTSxLQUREO0FBRVhDLFFBQVNQLEdBQUdNLEtBRkQ7QUFHWEUsUUFBU1IsR0FBR1MsTUFIRDtBQUlYQyxXQUFTVixHQUFHVyxJQUpEO0FBS1hDLFdBQVM7QUFMRSxFQUhKO0FBVVJDLE9BVlEsb0JBVUEsQ0FFUCxDQVpPOztBQWFSQyxXQUFVLG9CQUFZO0FBQ3JCZCxLQUFHZSxJQUFILENBQVFDLElBQVIsQ0FBYSxFQUFDSixTQUFRLEVBQUNLLFFBQVEsSUFBVCxFQUFULEVBQWI7QUFDQSxFQWZPO0FBZ0JSQyxTQUFRLGdCQUFTQyxJQUFULEVBQWU7QUFDdEIsTUFBSSxDQUFDLENBQUNBLEtBQUtDLElBQVgsRUFBaUI7QUFDaEIsUUFBS0EsSUFBTCxDQUFVRCxLQUFLQyxJQUFmO0FBQ0EsUUFBS0MsU0FBTCxDQUFlRixLQUFLQyxJQUFwQjtBQUNBO0FBQ0QsTUFBSSxDQUFDLENBQUNELEtBQUtaLElBQVgsRUFBaUI7QUFDaEIsUUFBS0EsSUFBTCxDQUFVZSxNQUFWLEdBQW1CSCxLQUFLWixJQUF4QjtBQUNBO0FBQ0QsTUFBSSxDQUFDLENBQUNZLEtBQUtkLElBQVgsRUFBaUI7QUFDaEIsT0FBSWMsS0FBS2QsSUFBTCxHQUFZLENBQWhCLEVBQW1CO0FBQ2xCLFNBQUtBLElBQUwsQ0FBVWtCLElBQVYsQ0FBZUMsTUFBZixHQUF3QixJQUF4QjtBQUNBLFNBQUtuQixJQUFMLENBQVVpQixNQUFWLEdBQW1CSCxLQUFLZCxJQUF4QjtBQUNBLElBSEQsTUFHSztBQUNKLFNBQUtBLElBQUwsQ0FBVWtCLElBQVYsQ0FBZUMsTUFBZixHQUF3QixLQUF4QjtBQUNBO0FBQ0Q7QUFDRCxFQWhDTztBQWlDUkosT0FBTSxjQUFTQSxLQUFULEVBQWM7QUFDbkIsT0FBS1YsT0FBTCxDQUFhZSxrQkFBYjtBQUNBLE1BQUlDLE9BQU8sSUFBWDtBQUNBQyxVQUFRQyxHQUFSLENBQVlSLE1BQUtTLEdBQUwsQ0FBUyxVQUFTQyxJQUFULEVBQWM7QUFDbEMsT0FBSXRCLE9BQU9SLEdBQUcrQixXQUFILENBQWVMLEtBQUtsQixJQUFwQixDQUFYO0FBQ0FBLFVBQU9BLEtBQUt3QixZQUFMLENBQWtCLGVBQWxCLENBQVA7QUFDQXhCLFFBQUt5QixJQUFMLENBQVVQLElBQVY7QUFDQWxCLFFBQUswQixLQUFMLENBQVdaLE1BQVgsR0FBb0JRLEtBQUtJLEtBQXpCO0FBQ0ExQixRQUFLMkIsSUFBTCxDQUFVYixNQUFWLEdBQW9CeEIsT0FBT3NDLG1CQUFQLENBQTJCTixLQUFLSyxJQUFoQyxDQUFwQjtBQUNBM0IsUUFBSzZCLEVBQUwsQ0FBUWIsTUFBUixHQUFvQixDQUFDTSxLQUFLUSxJQUExQjtBQUNBOUIsUUFBSytCLEdBQUwsQ0FBU2YsTUFBVCxHQUFxQkUsS0FBS2QsT0FBTCxJQUFnQmtCLEtBQUtVLEdBQTFDO0FBQ0FoQyxRQUFLSSxPQUFMLEdBQW9Ca0IsS0FBS1UsR0FBekI7QUFDQWQsUUFBS2hCLE9BQUwsQ0FBYStCLFFBQWIsQ0FBc0JqQyxLQUFLZSxJQUEzQjtBQUNBLEdBVlcsQ0FBWjtBQVdBLEVBL0NPO0FBZ0RSbUIsaUJBQWdCLHdCQUFTQyxHQUFULEVBQWE7QUFBQTs7QUFDNUIsTUFBSUEsSUFBSS9CLE9BQUosSUFBZSxLQUFLQSxPQUF4QixFQUFpQztBQUNoQytCLE9BQUlOLEVBQUosQ0FBT2IsTUFBUCxHQUFnQixLQUFoQjtBQUNBeEIsTUFBR2UsSUFBSCxDQUFRNkIsS0FBUixDQUFjQyxTQUFkO0FBQ0EsUUFBS2pDLE9BQUwsR0FBZStCLElBQUkvQixPQUFuQjtBQUNBLFFBQUtrQyxVQUFMOztBQUVBSCxPQUFJSixHQUFKLENBQVFmLE1BQVIsR0FBaUIsSUFBakI7O0FBRUFHLFdBQVFDLEdBQVIsQ0FBWSxLQUFLbEIsT0FBTCxDQUFhcUMsUUFBYixDQUFzQkMsTUFBdEIsQ0FBNkIsVUFBU3pCLElBQVQsRUFBYztBQUN0RCxRQUFJQSxRQUFRb0IsSUFBSXBCLElBQWhCLEVBQXNCO0FBQ3JCQSxVQUFLd0IsUUFBTCxDQUFjLENBQWQsRUFBaUJ2QixNQUFqQixHQUEwQixLQUExQjtBQUNBO0FBQ0QsV0FBT0QsS0FBS3dCLFFBQUwsQ0FBYyxDQUFkLEVBQWlCdkIsTUFBeEI7QUFDQSxJQUxXLENBQVosRUFNQ3lCLElBTkQsQ0FNTSxrQkFBVTtBQUNmQyxhQUFTQSxPQUFPQyxNQUFoQjtBQUNBLFFBQUlELFNBQVMsQ0FBYixFQUFnQjtBQUNmLFdBQUs3QyxJQUFMLENBQVVrQixJQUFWLENBQWVDLE1BQWYsR0FBd0IsSUFBeEI7QUFDQSxXQUFLbkIsSUFBTCxDQUFVaUIsTUFBVixHQUFtQjRCLE1BQW5CO0FBQ0EsS0FIRCxNQUdLO0FBQ0osV0FBSzdDLElBQUwsQ0FBVWtCLElBQVYsQ0FBZUMsTUFBZixHQUF3QixLQUF4QjtBQUNBO0FBQ0QsSUFkRDtBQWVBO0FBQ0QsRUF6RU87QUEwRVJzQixhQUFZLG9CQUFTSCxHQUFULEVBQWE7QUFDeEIzQyxLQUFHZSxJQUFILENBQVFDLElBQVIsQ0FBYSxFQUFDSixTQUFRLEVBQUN3QyxNQUFNLEtBQUt4QyxPQUFaLEVBQVQsRUFBYjtBQUNBLEVBNUVPO0FBNkVSeUMsUUFBTyxpQkFBVTtBQUNoQixPQUFLM0MsT0FBTCxDQUFhZSxrQkFBYjtBQUNBLE9BQUtsQixJQUFMLENBQVVlLE1BQVYsR0FBbUIsS0FBS2pCLElBQUwsQ0FBVWlCLE1BQVYsR0FBbUIsRUFBdEM7QUFDQSxPQUFLakIsSUFBTCxDQUFVa0IsSUFBVixDQUFlQyxNQUFmLEdBQXdCLEtBQXhCO0FBQ0EsRUFqRk87QUFrRlJILFlBQVcsbUJBQVNGLElBQVQsRUFBYztBQUN4QixNQUFJbUMsUUFBUW5DLEtBQUs2QixNQUFMLENBQVksVUFBU0wsR0FBVCxFQUFhO0FBQ3BDLFVBQU8sQ0FBQ0EsSUFBSUwsSUFBWjtBQUNBLEdBRlcsQ0FBWjtBQUdBZ0IsVUFBUUEsTUFBTUgsTUFBZDtBQUNBLE1BQUlHLFFBQVEsQ0FBWixFQUFlO0FBQ2QsUUFBS2pELElBQUwsQ0FBVWtCLElBQVYsQ0FBZUMsTUFBZixHQUF3QixJQUF4QjtBQUNBLFFBQUtuQixJQUFMLENBQVVpQixNQUFWLEdBQW1CZ0MsS0FBbkI7QUFDQSxHQUhELE1BR0s7QUFDSixRQUFLakQsSUFBTCxDQUFVa0IsSUFBVixDQUFlQyxNQUFmLEdBQXdCLEtBQXhCO0FBQ0E7QUFDRDtBQTdGTyxDQUFUIiwiZmlsZSI6ImlNZXNzYWdlLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcaU1lc3NhZ2UiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0bmV3czogICAgY2MuTGFiZWwsXHJcblx0XHR0ZXh0OiAgICBjYy5MYWJlbCxcclxuXHRcdGl0ZW06ICAgIGNjLlByZWZhYixcclxuXHRcdGNvbnRlbnQ6IGNjLk5vZGUsXHJcblx0XHRtZXNzYWdlOiAnJyxcclxuXHR9LFxyXG5cdG9uTG9hZCgpe1xyXG5cclxuXHR9LFxyXG5cdG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRjYy5SZWRULnNlbmQoe21lc3NhZ2U6e3VwZGF0ZTogdHJ1ZX19KTtcclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0aWYgKCEhZGF0YS5saXN0KSB7XHJcblx0XHRcdHRoaXMubGlzdChkYXRhLmxpc3QpO1xyXG5cdFx0XHR0aGlzLmNvdW50TmV3cyhkYXRhLmxpc3QpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS50ZXh0KSB7XHJcblx0XHRcdHRoaXMudGV4dC5zdHJpbmcgPSBkYXRhLnRleHQ7XHJcblx0XHR9XHJcblx0XHRpZiAoISFkYXRhLm5ld3MpIHtcclxuXHRcdFx0aWYgKGRhdGEubmV3cyA+IDApIHtcclxuXHRcdFx0XHR0aGlzLm5ld3Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMubmV3cy5zdHJpbmcgPSBkYXRhLm5ld3M7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMubmV3cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRsaXN0OiBmdW5jdGlvbihsaXN0KXtcclxuXHRcdHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFByb21pc2UuYWxsKGxpc3QubWFwKGZ1bmN0aW9uKG1haWwpe1xyXG5cdFx0XHRsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHNlbGYuaXRlbSk7XHJcblx0XHRcdGl0ZW0gPSBpdGVtLmdldENvbXBvbmVudCgnaU1lc3NhZ2VfaXRlbScpO1xyXG5cdFx0XHRpdGVtLmluaXQoc2VsZik7XHJcblx0XHRcdGl0ZW0udGl0bGUuc3RyaW5nID0gbWFpbC50aXRsZTtcclxuXHRcdFx0aXRlbS50aW1lLnN0cmluZyAgPSBIZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShtYWlsLnRpbWUpO1xyXG5cdFx0XHRpdGVtLmJnLmFjdGl2ZSAgICA9ICFtYWlsLnJlYWQ7XHJcblx0XHRcdGl0ZW0uZG90LmFjdGl2ZSAgID0gKHNlbGYubWVzc2FnZSA9PSBtYWlsLl9pZCk7XHJcblx0XHRcdGl0ZW0ubWVzc2FnZSAgICAgID0gbWFpbC5faWQ7XHJcblx0XHRcdHNlbGYuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xyXG5cdFx0fSkpO1xyXG5cdH0sXHJcblx0b25Db250ZW50Q2xpY2s6IGZ1bmN0aW9uKG9iail7XHJcblx0XHRpZiAob2JqLm1lc3NhZ2UgIT0gdGhpcy5tZXNzYWdlKSB7XHJcblx0XHRcdG9iai5iZy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0Y2MuUmVkVC5hdWRpby5wbGF5Q2xpY2soKTtcclxuXHRcdFx0dGhpcy5tZXNzYWdlID0gb2JqLm1lc3NhZ2U7XHJcblx0XHRcdHRoaXMuZ2V0Q29udGVudCgpO1xyXG5cclxuXHRcdFx0b2JqLmRvdC5hY3RpdmUgPSB0cnVlO1xyXG5cclxuXHRcdFx0UHJvbWlzZS5hbGwodGhpcy5jb250ZW50LmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbihub2RlKXtcclxuXHRcdFx0XHRpZiAobm9kZSAhPSBvYmoubm9kZSkge1xyXG5cdFx0XHRcdFx0bm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlO1xyXG5cdFx0XHR9KSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHRyZXN1bHQgPSByZXN1bHQubGVuZ3RoO1xyXG5cdFx0XHRcdGlmIChyZXN1bHQgPiAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLm5ld3Mubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy5uZXdzLnN0cmluZyA9IHJlc3VsdDtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMubmV3cy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9LFxyXG5cdGdldENvbnRlbnQ6IGZ1bmN0aW9uKG9iail7XHJcblx0XHRjYy5SZWRULnNlbmQoe21lc3NhZ2U6e3ZpZXc6IHRoaXMubWVzc2FnZX19KTtcclxuXHR9LFxyXG5cdHJlc2V0OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG5cdFx0dGhpcy50ZXh0LnN0cmluZyA9IHRoaXMubmV3cy5zdHJpbmcgPSBcIlwiO1xyXG5cdFx0dGhpcy5uZXdzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0fSxcclxuXHRjb3VudE5ld3M6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0bGV0IGNvdW50ID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0cmV0dXJuICFvYmoucmVhZDtcclxuXHRcdH0pO1xyXG5cdFx0Y291bnQgPSBjb3VudC5sZW5ndGg7XHJcblx0XHRpZiAoY291bnQgPiAwKSB7XHJcblx0XHRcdHRoaXMubmV3cy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMubmV3cy5zdHJpbmcgPSBjb3VudDtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm5ld3Mubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19