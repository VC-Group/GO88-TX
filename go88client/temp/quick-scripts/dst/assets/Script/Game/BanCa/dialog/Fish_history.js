
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/dialog/Fish_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45008W89GZCx7mnxEIhI//f', 'Fish_history');
// Script/Game/BanCa/dialog/Fish_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		page: cc.Prefab,
		content: cc.Node
	},
	onLoad: function onLoad() {
		var page = cc.instantiate(this.page);
		page.y = -289;
		this.node.addChild(page);
		this.page = page.getComponent('Pagination');
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('Fish_history_item');
		});
		this.page.init(this);
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { fish: { log: page } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, i) {
			var dataT = data.data[i];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.bg.active = i % 2;

				obj.labelTime.string = Helper.getStringDateByTime(dataT.time);
				obj.labelRoom.string = this.room(dataT.room);
				obj.labelFish.string = Helper.numberWithCommas(dataT.fish);
				obj.labelWin.string = (dataT.money < 0 ? '-' : dataT.money > 0 ? '+' : '') + Helper.numberWithCommas(Helper.getOnlyNumberInString('' + dataT.money));
				obj.labelWin.node.color = dataT.money < 0 ? obj.labelWin.node.color.fromHEX('#FF0000') : obj.labelWin.node.color.fromHEX('#139C19');
			} else {
				obj.node.active = false;
			}
		}.bind(this));
	},
	room: function room(_room) {
		switch (_room) {
			case 1:
				return 'Bình dân';
				break;

			case 2:
				return 'Đại gia';
				break;

			case 3:
				return 'VIP';
				break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXGRpYWxvZy8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxkaWFsb2cvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxkaWFsb2dcXEZpc2hfaGlzdG9yeS5qcyJdLCJuYW1lcyI6WyJIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGFnZSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwib25Mb2FkIiwiaW5zdGFudGlhdGUiLCJ5Iiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJtYXAiLCJvYmoiLCJpbml0Iiwib25FbmFibGUiLCJnZXRfZGF0YSIsIlJlZFQiLCJzZW5kIiwiZyIsImZpc2giLCJsb2ciLCJvbkRhdGEiLCJkYXRhIiwib25TZXQiLCJrbWVzcyIsInRvdGFsIiwiZm9yRWFjaCIsImkiLCJkYXRhVCIsImFjdGl2ZSIsImJnIiwibGFiZWxUaW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInRpbWUiLCJsYWJlbFJvb20iLCJyb29tIiwibGFiZWxGaXNoIiwibnVtYmVyV2l0aENvbW1hcyIsImxhYmVsV2luIiwibW9uZXkiLCJnZXRPbmx5TnVtYmVySW5TdHJpbmciLCJjb2xvciIsImZyb21IRVgiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxRQUFTTCxHQUFHTSxNQUREO0FBRVhDLFdBQVNQLEdBQUdRO0FBRkQsRUFISjtBQU9SQyxPQVBRLG9CQU9FO0FBQ1QsTUFB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V0FBTyxLQUFQO0FBQ0E7QUFYRjtBQWFBO0FBdkRPLENBQVQiLCJmaWxlIjoiRmlzaF9oaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXGRpYWxvZyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRwYWdlOiAgICBjYy5QcmVmYWIsXHJcblx0XHRjb250ZW50OiBjYy5Ob2RlLFxyXG5cdH0sXHJcblx0b25Mb2FkICgpIHtcclxuXHRcdHZhciBwYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wYWdlKTtcclxuXHRcdHBhZ2UueSA9IC0yODk7XHJcblx0XHR0aGlzLm5vZGUuYWRkQ2hpbGQocGFnZSk7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlLmdldENvbXBvbmVudCgnUGFnaW5hdGlvbicpO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRyZXR1cm4gb2JqLmdldENvbXBvbmVudCgnRmlzaF9oaXN0b3J5X2l0ZW0nKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5wYWdlLmluaXQodGhpcyk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmdldF9kYXRhKCk7XHJcblx0fSxcclxuXHRnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtnOntmaXNoOntsb2c6cGFnZX19fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5wYWdlLm9uU2V0KGRhdGEucGFnZSwgZGF0YS5rbWVzcywgZGF0YS50b3RhbCk7XHJcblx0XHR0aGlzLmNvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihvYmosIGkpe1xyXG5cdFx0XHRsZXQgZGF0YVQgPSBkYXRhLmRhdGFbaV07XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGFUKSB7XHJcblx0XHRcdFx0b2JqLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRvYmouYmcuYWN0aXZlID0gaSUyO1xyXG5cclxuXHRcdFx0XHRvYmoubGFiZWxUaW1lLnN0cmluZyA9IEhlbHBlci5nZXRTdHJpbmdEYXRlQnlUaW1lKGRhdGFULnRpbWUpO1xyXG5cdFx0XHRcdG9iai5sYWJlbFJvb20uc3RyaW5nID0gdGhpcy5yb29tKGRhdGFULnJvb20pO1xyXG5cdFx0XHRcdG9iai5sYWJlbEZpc2guc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQuZmlzaCk7XHJcblx0XHRcdFx0b2JqLmxhYmVsV2luLnN0cmluZyA9IChkYXRhVC5tb25leSA8IDAgPyAnLScgOiAoZGF0YVQubW9uZXkgPiAwID8gJysnIDogJycpKSArIEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKEhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcoJycrZGF0YVQubW9uZXkpKTtcclxuXHRcdFx0XHRvYmoubGFiZWxXaW4ubm9kZS5jb2xvciA9IGRhdGFULm1vbmV5IDwgMCA/IG9iai5sYWJlbFdpbi5ub2RlLmNvbG9yLmZyb21IRVgoJyNGRjAwMDAnKSA6IG9iai5sYWJlbFdpbi5ub2RlLmNvbG9yLmZyb21IRVgoJyMxMzlDMTknKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0b2JqLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9LFxyXG5cdHJvb206IGZ1bmN0aW9uKHJvb20pe1xyXG5cdFx0c3dpdGNoKHJvb20pIHtcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHJldHVybiAnQsOsbmggZMOibic7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cmV0dXJuICfEkOG6oWkgZ2lhJztcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRyZXR1cm4gJ1ZJUCc7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==