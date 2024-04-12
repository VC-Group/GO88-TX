
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/AngryBirds/AngryBird_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f89dKGp89FS4A0zk0h6nwz', 'AngryBird_history');
// Script/Game/AngryBirds/AngryBird_history.js

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
		page.y = -250;
		this.node.addChild(page);
		this.page = page.getComponent('Pagination');
		this.page.init(this);

		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('AngryBird_history_item');
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { angrybird: { log: { red: this.red, page: page } } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, i) {
			var dataT = data.data[i];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.node.children[0].active = i % 2;
				obj.time.string = Helper.getStringDateByTime(dataT.time);
				obj.phien.string = dataT.id;
				obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzXFxBbmdyeUJpcmRfaGlzdG9yeS5qcyJdLCJuYW1lcyI6WyJIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGFnZSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwicmVkIiwib25Mb2FkIiwiaW5zdGFudGlhdGUiLCJ5Iiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiaW5pdCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwib25FbmFibGUiLCJnZXRfZGF0YSIsIlJlZFQiLCJzZW5kIiwiZyIsImFuZ3J5YmlyZCIsImxvZyIsIm9uRGF0YSIsImRhdGEiLCJvblNldCIsImttZXNzIiwidG90YWwiLCJmb3JFYWNoIiwiaSIsImRhdGFUIiwiYWN0aXZlIiwidGltZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJwaGllbiIsImlkIiwiY3VvYyIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLFFBQVNMLEdBQUdNLE1BREQ7QUFFWEMsV0FBU1AsR0FBR1EsSUFGRDtBQUdYQyxPQUFTO0FBSEUsRUFISjtBQVFSQyxPQVJRLG9CQVFFO0FBQ1QsTUFBSUwsT0FBT0wsR0FBR1csV0FBSCxDQUFlLEtBQUtOLElBQXBCLENBQVg7QUFDQUEsT0FBS08sQ0FBTCxHQUFTLENBQUMsR0FBVjtBQUNBLE9BQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQlQsSUFBbkI7QUFDQSxPQUFLQSxJQUFMLEdBQVlBLEtBQUtVLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBWjtBQUNBLE9BQUtWLElBQUwsQ0FBVVcsSUFBVixDQUFlLElBQWY7O0FBRUEsT0FBS1QsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYVUsUUFBYixDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBU0MsR0FBVCxFQUFhO0FBQ3JELFVBQU9BLElBQUlKLFlBQUosQ0FBaUIsd0JBQWpCLENBQVA7QUFDQSxHQUZjLENBQWY7QUFHQSxFQWxCTzs7QUFtQlJLLFdBQVUsb0JBQVc7QUFDcEIsT0FBS0MsUUFBTDtBQUNBLEVBckJPO0FBc0JSQSxXQUFVLG9CQUFrQjtBQUFBLE1BQVRoQixJQUFTLHVFQUFGLENBQUU7O0FBQzNCTCxLQUFHc0IsSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxXQUFVLEVBQUNDLEtBQUksRUFBQ2pCLEtBQUksS0FBS0EsR0FBVixFQUFlSixNQUFLQSxJQUFwQixFQUFMLEVBQVgsRUFBSCxFQUFiO0FBQ0EsRUF4Qk87QUF5QlJzQixTQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDckIsT0FBS3ZCLElBQUwsQ0FBVXdCLEtBQVYsQ0FBZ0JELEtBQUt2QixJQUFyQixFQUEyQnVCLEtBQUtFLEtBQWhDLEVBQXVDRixLQUFLRyxLQUE1QztBQUNBLE9BQUt4QixPQUFMLENBQWF5QixPQUFiLENBQXFCLFVBQVNiLEdBQVQsRUFBY2MsQ0FBZCxFQUFnQjtBQUNwQyxPQUFJQyxRQUFRTixLQUFLQSxJQUFMLENBQVVLLENBQVYsQ0FBWjtBQUNBLE9BQUksS0FBSyxDQUFMLEtBQVdDLEtBQWYsRUFBc0I7QUFDckJmLFFBQUlOLElBQUosQ0FBU3NCLE1BQVQsR0FBbUIsSUFBbkI7QUFDQWhCLFFBQUlOLElBQUosQ0FBU0ksUUFBVCxDQUFrQixDQUFsQixFQUFxQmtCLE1BQXJCLEdBQThCRixJQUFFLENBQWhDO0FBQ0FkLFFBQUlpQixJQUFKLENBQVNDLE1BQVQsR0FBbUJ2QyxPQUFPd0MsbUJBQVAsQ0FBMkJKLE1BQU1FLElBQWpDLENBQW5CO0FBQ0FqQixRQUFJb0IsS0FBSixDQUFVRixNQUFWLEdBQW1CSCxNQUFNTSxFQUF6QjtBQUNBckIsUUFBSXNCLElBQUosQ0FBU0osTUFBVCxHQUFtQnZDLE9BQU80QyxnQkFBUCxDQUF3QlIsTUFBTVMsR0FBOUIsQ0FBbkI7QUFDQXhCLFFBQUl5QixHQUFKLENBQVFQLE1BQVIsR0FBbUJ2QyxPQUFPNEMsZ0JBQVAsQ0FBd0JSLE1BQU1VLEdBQTlCLENBQW5CO0FBQ0EsSUFQRCxNQU9LO0FBQ0p6QixRQUFJTixJQUFKLENBQVNzQixNQUFULEdBQWtCLEtBQWxCO0FBQ0E7QUFDRCxHQVpEO0FBYUE7QUF4Q08sQ0FBVCIsImZpbGUiOiJBbmdyeUJpcmRfaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQW5ncnlCaXJkcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRwYWdlOiAgICBjYy5QcmVmYWIsXHJcblx0XHRjb250ZW50OiBjYy5Ob2RlLFxyXG5cdFx0cmVkOiAgICAgdHJ1ZSxcclxuXHR9LFxyXG5cdG9uTG9hZCAoKSB7XHJcblx0XHR2YXIgcGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZSk7XHJcblx0XHRwYWdlLnkgPSAtMjUwO1xyXG5cdFx0dGhpcy5ub2RlLmFkZENoaWxkKHBhZ2UpO1xyXG5cdFx0dGhpcy5wYWdlID0gcGFnZS5nZXRDb21wb25lbnQoJ1BhZ2luYXRpb24nKTtcclxuXHRcdHRoaXMucGFnZS5pbml0KHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0cmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ0FuZ3J5QmlyZF9oaXN0b3J5X2l0ZW0nKTtcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5nZXRfZGF0YSgpO1xyXG5cdH0sXHJcblx0Z2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7Zzp7YW5ncnliaXJkOntsb2c6e3JlZDp0aGlzLnJlZCwgcGFnZTpwYWdlfX19fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5wYWdlLm9uU2V0KGRhdGEucGFnZSwgZGF0YS5rbWVzcywgZGF0YS50b3RhbCk7XHJcblx0XHR0aGlzLmNvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihvYmosIGkpe1xyXG5cdFx0XHRsZXQgZGF0YVQgPSBkYXRhLmRhdGFbaV07XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGFUKSB7XHJcblx0XHRcdFx0b2JqLm5vZGUuYWN0aXZlICA9IHRydWU7XHJcblx0XHRcdFx0b2JqLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gaSUyO1xyXG5cdFx0XHRcdG9iai50aW1lLnN0cmluZyAgPSBIZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShkYXRhVC50aW1lKTtcclxuXHRcdFx0XHRvYmoucGhpZW4uc3RyaW5nID0gZGF0YVQuaWQ7XHJcblx0XHRcdFx0b2JqLmN1b2Muc3RyaW5nICA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULmJldCk7XHJcblx0XHRcdFx0b2JqLndpbi5zdHJpbmcgICA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULndpbik7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG59KTtcclxuIl19