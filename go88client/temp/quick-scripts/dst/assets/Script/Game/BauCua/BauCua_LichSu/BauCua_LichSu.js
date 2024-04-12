
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BauCua/BauCua_LichSu/BauCua_LichSu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b4f6CxJKNB7ada2j1ouX/g', 'BauCua_LichSu');
// Script/Game/BauCua/BauCua_LichSu/BauCua_LichSu.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,
	properties: {
		page: cc.Prefab,
		content: cc.Node,
		red: true
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	onLoad: function onLoad() {
		this.page = cc.instantiate(this.page);
		this.page.y = -285;
		this.node.addChild(this.page);
		this.page = this.page.getComponent('Pagination');
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('BauCua_ls_item');
		});
		this.page.init(this);
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { baucua: { viewlogs: { red: this.red, page: page } } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, i) {
			var dataT = data.data[i];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.bg.active = i % 0;
				obj.time.string = helper.getStringDateByTime(dataT.time);
				obj.phien.string = dataT.phien;
				obj.thang.string = helper.numberWithCommas(dataT.betwin);
				obj.kq.forEach(function (kq, j) {
					kq.spriteFrame = this.RedT.iconMini[dataT.kq[j]];
				}.bind(this));
				obj.datLabel.forEach(function (cuoc, k) {
					if (dataT[k] > 0) {
						cuoc.node.parent.active = true;
						cuoc.string = helper.nFormatter(dataT[k], 1);
					} else {
						cuoc.node.parent.active = false;
					}
				});
			} else {
				obj.node.active = false;
			}
		}.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmF1Q3VhXFxCYXVDdWFfTGljaFN1Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmF1Q3VhXFxCYXVDdWFfTGljaFN1L2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYXVDdWFcXEJhdUN1YV9MaWNoU3VcXEJhdUN1YV9MaWNoU3UuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInJlZCIsImluaXQiLCJvYmoiLCJSZWRUIiwib25Mb2FkIiwiaW5zdGFudGlhdGUiLCJ5Iiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJtYXAiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwic2VuZCIsImciLCJiYXVjdWEiLCJ2aWV3bG9ncyIsIm9uRGF0YSIsImRhdGEiLCJvblNldCIsImttZXNzIiwidG90YWwiLCJmb3JFYWNoIiwiaSIsImRhdGFUIiwiYWN0aXZlIiwiYmciLCJ0aW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInBoaWVuIiwidGhhbmciLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0d2luIiwia3EiLCJqIiwic3ByaXRlRnJhbWUiLCJpY29uTWluaSIsImJpbmQiLCJkYXRMYWJlbCIsImN1b2MiLCJrIiwicGFyZW50IiwibkZvcm1hdHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7QUFFUkMsYUFBWTtBQUNYQyxRQUFVTCxHQUFHTSxNQURGO0FBRVhDLFdBQVVQLEdBQUdR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O0FBUUEsSUFqQkQsTUFpQks7QUFDSnhCLFFBQUlLLElBQUosQ0FBU21CLE1BQVQsR0FBa0IsS0FBbEI7QUFDQTtBQUNELEdBdEJvQixDQXNCbkJhLElBdEJtQixDQXNCZCxJQXRCYyxDQUFyQjtBQXVCQTtBQW5ETyxDQUFUIiwiZmlsZSI6IkJhdUN1YV9MaWNoU3UuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYXVDdWFcXEJhdUN1YV9MaWNoU3UiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRwYWdlOiAgICAgY2MuUHJlZmFiLFxyXG5cdFx0Y29udGVudDogIGNjLk5vZGUsXHJcblx0XHRyZWQ6ICAgICAgdHJ1ZSxcclxuXHR9LFxyXG5cdGluaXQob2JqKXtcclxuXHRcdHRoaXMuUmVkVCA9IG9iajtcclxuXHR9LFxyXG5cdG9uTG9hZCAoKSB7XHJcblx0XHR0aGlzLnBhZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhZ2UpO1xyXG5cdFx0dGhpcy5wYWdlLnkgPSAtMjg1O1xyXG5cdFx0dGhpcy5ub2RlLmFkZENoaWxkKHRoaXMucGFnZSk7XHJcblx0XHR0aGlzLnBhZ2UgPSB0aGlzLnBhZ2UuZ2V0Q29tcG9uZW50KCdQYWdpbmF0aW9uJyk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdCYXVDdWFfbHNfaXRlbScpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnBhZ2UuaW5pdCh0aGlzKTtcclxuXHR9LFxyXG5cdG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuZ2V0X2RhdGEoKTtcclxuXHR9LFxyXG5cdGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcblx0XHRjYy5SZWRULnNlbmQoe2c6e2JhdWN1YTp7dmlld2xvZ3M6e3JlZDp0aGlzLnJlZCwgcGFnZTpwYWdlfX19fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6ZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLnBhZ2Uub25TZXQoZGF0YS5wYWdlLCBkYXRhLmttZXNzLCBkYXRhLnRvdGFsKTtcclxuXHRcdHRoaXMuY29udGVudC5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaSl7XHJcblx0XHRcdHZhciBkYXRhVCA9IGRhdGEuZGF0YVtpXVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSAgPSB0cnVlO1xyXG5cdFx0XHRcdG9iai5iZy5hY3RpdmUgICAgPSBpJTA7XHJcblx0XHRcdFx0b2JqLnRpbWUuc3RyaW5nICA9IGhlbHBlci5nZXRTdHJpbmdEYXRlQnlUaW1lKGRhdGFULnRpbWUpO1xyXG5cdFx0XHRcdG9iai5waGllbi5zdHJpbmcgPSBkYXRhVC5waGllbjtcclxuXHRcdFx0XHRvYmoudGhhbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQuYmV0d2luKTtcclxuXHRcdFx0XHRvYmoua3EuZm9yRWFjaChmdW5jdGlvbihrcSwgail7XHJcblx0XHRcdFx0XHRrcS5zcHJpdGVGcmFtZSA9IHRoaXMuUmVkVC5pY29uTWluaVtkYXRhVC5rcVtqXV07XHJcblx0XHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHRcdFx0XHRvYmouZGF0TGFiZWwuZm9yRWFjaChmdW5jdGlvbihjdW9jLCBrKXtcclxuXHRcdFx0XHRcdGlmIChkYXRhVFtrXSA+IDApIHtcclxuXHRcdFx0XHRcdFx0Y3VvYy5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRjdW9jLnN0cmluZyA9IGhlbHBlci5uRm9ybWF0dGVyKGRhdGFUW2tdLCAxKTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRjdW9jLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRvYmoubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG5cdFx0XHR9XHJcblx0XHR9LmJpbmQodGhpcykpO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=