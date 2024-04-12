
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/History/VQRed_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66e9cqNtPFCw6Q48VfYKZ/M', 'VQRed_history');
// Script/Game/VuongQuocRed/History/VQRed_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		page: cc.Prefab,
		content: cc.Node,
		red: true
	},
	onLoad: function onLoad() {
		var page = cc.instantiate(this.page);
		page.y = -284;
		this.node.addChild(page);
		this.page = page.getComponent('Pagination');
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('VQRed_history_item');
		});
		this.page.init(this);
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { vq_red: { log: { red: this.red, page: page } } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, i) {
			var dataT = data.data[i];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.bg.active = i % 2;
				obj.time.string = Helper.getStringDateByTime(dataT.time);
				obj.phien.string = dataT.id;
				obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
				obj.line.string = dataT.kq + ' dòng';
				obj.win.string = Helper.numberWithCommas(dataT.win);
			} else {
				obj.node.active = false;
			}
		});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxIaXN0b3J5Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxIaXN0b3J5L2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXEhpc3RvcnlcXFZRUmVkX2hpc3RvcnkuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInJlZCIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiaW5pdCIsIm9uRW5hYmxlIiwiZ2V0X2RhdGEiLCJSZWRUIiwic2VuZCIsImciLCJ2cV9yZWQiLCJsb2ciLCJvbkRhdGEiLCJkYXRhIiwib25TZXQiLCJrbWVzcyIsInRvdGFsIiwiZm9yRWFjaCIsImkiLCJkYXRhVCIsImFjdGl2ZSIsImJnIiwidGltZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJwaGllbiIsImlkIiwiY3VvYyIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJsaW5lIiwia3EiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLFFBQVVMLEdBQUdNLE1BREY7QUFFWEMsV0FBVVAsR0FBR1EsSUFGRjtBQUdYQyxPQUFVO0FBSEMsRUFISjtBQVFSQyxPQVJRLG9CQVFFO0FBQ1QsTUFBSUwsT0FBT0wsR0FBR1csV0FBSCxDQUFlLEtBQUtOLElBQXBCLENBQVg7QUFDQUEsT0FBS08sQ0FBTCxHQUFTLENBQUMsR0FBVjtBQUNBLE9BQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQlQsSUFBbkI7QUFDQSxPQUFLQSxJQUFMLEdBQVlBLEtBQUtVLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBWjtBQUNBLE9BQUtSLE9BQUwsR0FBZSxLQUFLQSxPQUFMLENBQWFTLFFBQWIsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQVNDLEdBQVQsRUFBYTtBQUNyRCxVQUFPQSxJQUFJSCxZQUFKLENBQWlCLG9CQUFqQixDQUFQO0FBQ0EsR0FGYyxDQUFmO0FBR0EsT0FBS1YsSUFBTCxDQUFVYyxJQUFWLENBQWUsSUFBZjtBQUNBLEVBakJPOztBQWtCUkMsV0FBVSxvQkFBVztBQUNwQixPQUFLQyxRQUFMO0FBQ0EsRUFwQk87QUFxQlJBLFdBQVUsb0JBQWtCO0FBQUEsTUFBVGhCLElBQVMsdUVBQUYsQ0FBRTs7QUFDM0JMLEtBQUdzQixJQUFILENBQVFDLElBQVIsQ0FBYSxFQUFDQyxHQUFFLEVBQUNDLFFBQU8sRUFBQ0MsS0FBSSxFQUFDakIsS0FBSyxLQUFLQSxHQUFYLEVBQWdCSixNQUFNQSxJQUF0QixFQUFMLEVBQVIsRUFBSCxFQUFiO0FBQ0EsRUF2Qk87QUF3QlJzQixTQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDckIsT0FBS3ZCLElBQUwsQ0FBVXdCLEtBQVYsQ0FBZ0JELEtBQUt2QixJQUFyQixFQUEyQnVCLEtBQUtFLEtBQWhDLEVBQXVDRixLQUFLRyxLQUE1QztBQUNBLE9BQUt4QixPQUFMLENBQWF5QixPQUFiLENBQXFCLFVBQVNkLEdBQVQsRUFBY2UsQ0FBZCxFQUFnQjtBQUNwQyxPQUFJQyxRQUFRTixLQUFLQSxJQUFMLENBQVVLLENBQVYsQ0FBWjtBQUNBLE9BQUksS0FBSyxDQUFMLEtBQVdDLEtBQWYsRUFBc0I7QUFDckJoQixRQUFJTCxJQUFKLENBQVNzQixNQUFULEdBQWtCLElBQWxCO0FBQ0FqQixRQUFJa0IsRUFBSixDQUFPRCxNQUFQLEdBQW1CRixJQUFFLENBQXJCO0FBQ0FmLFFBQUltQixJQUFKLENBQVNDLE1BQVQsR0FBbUJ4QyxPQUFPeUMsbUJBQVAsQ0FBMkJMLE1BQU1HLElBQWpDLENBQW5CO0FBQ0FuQixRQUFJc0IsS0FBSixDQUFVRixNQUFWLEdBQW1CSixNQUFNTyxFQUF6QjtBQUNBdkIsUUFBSXdCLElBQUosQ0FBU0osTUFBVCxHQUFtQnhDLE9BQU82QyxnQkFBUCxDQUF3QlQsTUFBTVUsR0FBOUIsQ0FBbkI7QUFDQTFCLFFBQUkyQixJQUFKLENBQVNQLE1BQVQsR0FBbUJKLE1BQU1ZLEVBQU4sR0FBVyxPQUE5QjtBQUNBNUIsUUFBSTZCLEdBQUosQ0FBUVQsTUFBUixHQUFtQnhDLE9BQU82QyxnQkFBUCxDQUF3QlQsTUFBTWEsR0FBOUIsQ0FBbkI7QUFDQSxJQVJELE1BUUs7QUFDSjdCLFFBQUlMLElBQUosQ0FBU3NCLE1BQVQsR0FBa0IsS0FBbEI7QUFDQTtBQUNELEdBYkQ7QUFjQTtBQXhDTyxDQUFUIiwiZmlsZSI6IlZRUmVkX2hpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXEhpc3RvcnkiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0cGFnZTogICAgIGNjLlByZWZhYixcclxuXHRcdGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG5cdFx0cmVkOiAgICAgIHRydWUsXHJcblx0fSxcclxuXHRvbkxvYWQgKCkge1xyXG5cdFx0dmFyIHBhZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhZ2UpO1xyXG5cdFx0cGFnZS55ID0gLTI4NDtcclxuXHRcdHRoaXMubm9kZS5hZGRDaGlsZChwYWdlKTtcclxuXHRcdHRoaXMucGFnZSA9IHBhZ2UuZ2V0Q29tcG9uZW50KCdQYWdpbmF0aW9uJyk7XHJcblx0XHR0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdWUVJlZF9oaXN0b3J5X2l0ZW0nKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5wYWdlLmluaXQodGhpcyk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmdldF9kYXRhKCk7XHJcblx0fSxcclxuXHRnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtnOnt2cV9yZWQ6e2xvZzp7cmVkOiB0aGlzLnJlZCwgcGFnZTogcGFnZX19fX0pO1xyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHRoaXMucGFnZS5vblNldChkYXRhLnBhZ2UsIGRhdGEua21lc3MsIGRhdGEudG90YWwpO1xyXG5cdFx0dGhpcy5jb250ZW50LmZvckVhY2goZnVuY3Rpb24ob2JqLCBpKXtcclxuXHRcdFx0dmFyIGRhdGFUID0gZGF0YS5kYXRhW2ldO1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0b2JqLmJnLmFjdGl2ZSAgICA9IGklMjtcclxuXHRcdFx0XHRvYmoudGltZS5zdHJpbmcgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcblx0XHRcdFx0b2JqLnBoaWVuLnN0cmluZyA9IGRhdGFULmlkO1xyXG5cdFx0XHRcdG9iai5jdW9jLnN0cmluZyAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5iZXQpO1xyXG5cdFx0XHRcdG9iai5saW5lLnN0cmluZyAgPSBkYXRhVC5rcSArICcgZMOybmcnO1xyXG5cdFx0XHRcdG9iai53aW4uc3RyaW5nICAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC53aW4pO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRvYmoubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==