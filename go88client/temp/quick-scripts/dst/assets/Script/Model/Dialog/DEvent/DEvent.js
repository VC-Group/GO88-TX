
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/DEvent/DEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84193OGZrdD/YtGX/ttIqDX', 'DEvent');
// Script/Model/Dialog/DEvent/DEvent.js

'use strict';

var eventTaiXiu = require('EventTaiXiu');
var eventAngrybird = require('EventAngrybird');
var eventBigBabol = require('EventBigBabol');
var eventMiniPoker = require('EventMiniPoker');

cc.Class({
	extends: cc.Component,

	properties: {
		menu: cc.Node,
		content: cc.Node,
		eventAngrybird: eventAngrybird,
		eventBigBabol: eventBigBabol,
		eventMiniPoker: eventMiniPoker,
		eventTaiXiu: eventTaiXiu
	},
	selectEvent: function selectEvent(event) {
		this.menu.children.forEach(function (menu) {
			if (menu.name === event.target.name) {
				menu.children[0].active = false;
				menu.children[1].active = true;
			} else {
				menu.children[0].active = true;
				menu.children[1].active = false;
			}
		});
		this.content.children.forEach(function (content) {
			if (content.name === event.target.name) {
				content.active = true;
			} else {
				content.active = false;
			}
		});
	},
	onData: function onData(data) {
		if (!!data.taixiu) {
			this.eventTaiXiu.onData(data.taixiu);
		}
	},
	onHU: function onHU(hu) {
		this.eventMiniPoker.onData(hu.mini_poker);
		this.eventAngrybird.onData(hu.arb);
		this.eventBigBabol.onData(hu.big_babol);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50L2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxERXZlbnRcXERFdmVudC5qcyJdLCJuYW1lcyI6WyJldmVudFRhaVhpdSIsInJlcXVpcmUiLCJldmVudEFuZ3J5YmlyZCIsImV2ZW50QmlnQmFib2wiLCJldmVudE1pbmlQb2tlciIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm1lbnUiLCJOb2RlIiwiY29udGVudCIsInNlbGVjdEV2ZW50IiwiZXZlbnQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJuYW1lIiwidGFyZ2V0IiwiYWN0aXZlIiwib25EYXRhIiwiZGF0YSIsInRhaXhpdSIsIm9uSFUiLCJodSIsIm1pbmlfcG9rZXIiLCJhcmIiLCJiaWdfYmFib2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsY0FBaUJDLFFBQVEsYUFBUixDQUFyQjtBQUNBLElBQUlDLGlCQUFpQkQsUUFBUSxnQkFBUixDQUFyQjtBQUNBLElBQUlFLGdCQUFpQkYsUUFBUSxlQUFSLENBQXJCO0FBQ0EsSUFBSUcsaUJBQWlCSCxRQUFRLGdCQUFSLENBQXJCOztBQUVBSSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxRQUFTTCxHQUFHTSxJQUREO0FBRVhDLFdBQVNQLEdBQUdNLElBRkQ7QUFHWFQsa0JBQWdCQSxjQUhMO0FBSVhDLGlCQUFnQkEsYUFKTDtBQUtYQyxrQkFBZ0JBLGNBTEw7QUFNWEosZUFBZ0JBO0FBTkwsRUFISjtBQVdSYSxjQUFhLHFCQUFTQyxLQUFULEVBQWdCO0FBQzVCLE9BQUtKLElBQUwsQ0FBVUssUUFBVixDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBU04sSUFBVCxFQUFjO0FBQ3hDLE9BQUlBLEtBQUtPLElBQUwsS0FBY0gsTUFBTUksTUFBTixDQUFhRCxJQUEvQixFQUFxQztBQUNwQ1AsU0FBS0ssUUFBTCxDQUFjLENBQWQsRUFBaUJJLE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0FULFNBQUtLLFFBQUwsQ0FBYyxDQUFkLEVBQWlCSSxNQUFqQixHQUEwQixJQUExQjtBQUNBLElBSEQsTUFHSztBQUNKVCxTQUFLSyxRQUFMLENBQWMsQ0FBZCxFQUFpQkksTUFBakIsR0FBMEIsSUFBMUI7QUFDQVQsU0FBS0ssUUFBTCxDQUFjLENBQWQsRUFBaUJJLE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0E7QUFDRCxHQVJEO0FBU0EsT0FBS1AsT0FBTCxDQUFhRyxRQUFiLENBQXNCQyxPQUF0QixDQUE4QixVQUFTSixPQUFULEVBQWlCO0FBQzlDLE9BQUlBLFFBQVFLLElBQVIsS0FBaUJILE1BQU1JLE1BQU4sQ0FBYUQsSUFBbEMsRUFBd0M7QUFDdkNMLFlBQVFPLE1BQVIsR0FBaUIsSUFBakI7QUFDQSxJQUZELE1BRUs7QUFDSlAsWUFBUU8sTUFBUixHQUFpQixLQUFqQjtBQUNBO0FBQ0QsR0FORDtBQU9BLEVBNUJPO0FBNkJSQyxTQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDckIsTUFBSSxDQUFDLENBQUNBLEtBQUtDLE1BQVgsRUFBbUI7QUFDbEIsUUFBS3RCLFdBQUwsQ0FBaUJvQixNQUFqQixDQUF3QkMsS0FBS0MsTUFBN0I7QUFDQTtBQUNELEVBakNPO0FBa0NSQyxPQUFNLGNBQVNDLEVBQVQsRUFBWTtBQUNqQixPQUFLcEIsY0FBTCxDQUFvQmdCLE1BQXBCLENBQTJCSSxHQUFHQyxVQUE5QjtBQUNBLE9BQUt2QixjQUFMLENBQW9Ca0IsTUFBcEIsQ0FBMkJJLEdBQUdFLEdBQTlCO0FBQ0EsT0FBS3ZCLGFBQUwsQ0FBbUJpQixNQUFuQixDQUEwQkksR0FBR0csU0FBN0I7QUFDQTtBQXRDTyxDQUFUIiwiZmlsZSI6IkRFdmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXERFdmVudCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgZXZlbnRUYWlYaXUgICAgPSByZXF1aXJlKCdFdmVudFRhaVhpdScpO1xyXG52YXIgZXZlbnRBbmdyeWJpcmQgPSByZXF1aXJlKCdFdmVudEFuZ3J5YmlyZCcpO1xyXG52YXIgZXZlbnRCaWdCYWJvbCAgPSByZXF1aXJlKCdFdmVudEJpZ0JhYm9sJyk7XHJcbnZhciBldmVudE1pbmlQb2tlciA9IHJlcXVpcmUoJ0V2ZW50TWluaVBva2VyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRtZW51OiAgICBjYy5Ob2RlLFxyXG5cdFx0Y29udGVudDogY2MuTm9kZSxcclxuXHRcdGV2ZW50QW5ncnliaXJkOiBldmVudEFuZ3J5YmlyZCxcclxuXHRcdGV2ZW50QmlnQmFib2w6ICBldmVudEJpZ0JhYm9sLFxyXG5cdFx0ZXZlbnRNaW5pUG9rZXI6IGV2ZW50TWluaVBva2VyLFxyXG5cdFx0ZXZlbnRUYWlYaXU6ICAgIGV2ZW50VGFpWGl1LFxyXG5cdH0sXHJcblx0c2VsZWN0RXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHR0aGlzLm1lbnUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihtZW51KXtcclxuXHRcdFx0aWYgKG1lbnUubmFtZSA9PT0gZXZlbnQudGFyZ2V0Lm5hbWUpIHtcclxuXHRcdFx0XHRtZW51LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdG1lbnUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0bWVudS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdG1lbnUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5jb250ZW50LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oY29udGVudCl7XHJcblx0XHRcdGlmIChjb250ZW50Lm5hbWUgPT09IGV2ZW50LnRhcmdldC5uYW1lKSB7XHJcblx0XHRcdFx0Y29udGVudC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRjb250ZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRpZiAoISFkYXRhLnRhaXhpdSkge1xyXG5cdFx0XHR0aGlzLmV2ZW50VGFpWGl1Lm9uRGF0YShkYXRhLnRhaXhpdSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkhVOiBmdW5jdGlvbihodSl7XHJcblx0XHR0aGlzLmV2ZW50TWluaVBva2VyLm9uRGF0YShodS5taW5pX3Bva2VyKTtcclxuXHRcdHRoaXMuZXZlbnRBbmdyeWJpcmQub25EYXRhKGh1LmFyYik7XHJcblx0XHR0aGlzLmV2ZW50QmlnQmFib2wub25EYXRhKGh1LmJpZ19iYWJvbCk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==