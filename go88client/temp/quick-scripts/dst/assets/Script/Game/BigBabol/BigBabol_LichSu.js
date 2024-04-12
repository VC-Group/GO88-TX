
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BigBabol/BigBabol_LichSu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9bdbaumrolLQrir/GNZ3N0S', 'BigBabol_LichSu');
// Script/Game/BigBabol/BigBabol_LichSu.js

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
		page.y = -281;
		this.node.addChild(page);
		this.page = page.getComponent('Pagination');
		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('BigBabol_LichSu_item');
		});
		this.page.init(this);
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { big_babol: { log: { red: this.red, page: page } } } });
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
				obj.bet.string = Helper.numberWithCommas(dataT.bet);
				obj.kq.string = dataT.kq + ' Dòng';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCaWdCYWJvbC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmlnQmFib2wvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJpZ0JhYm9sXFxCaWdCYWJvbF9MaWNoU3UuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInJlZCIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiaW5pdCIsIm9uRW5hYmxlIiwiZ2V0X2RhdGEiLCJSZWRUIiwic2VuZCIsImciLCJiaWdfYmFib2wiLCJsb2ciLCJvbkRhdGEiLCJkYXRhIiwib25TZXQiLCJrbWVzcyIsInRvdGFsIiwiZm9yRWFjaCIsImkiLCJkYXRhVCIsImFjdGl2ZSIsImJnIiwidGltZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJwaGllbiIsImlkIiwiYmV0IiwibnVtYmVyV2l0aENvbW1hcyIsImtxIiwid2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxRQUFTTCxHQUFHTSxNQUREO0FBRVhDLFdBQVNQLEdBQUdRLElBRkQ7QUFHWEMsT0FBUztBQUhFLEVBSEo7QUFRUkMsT0FSUSxvQkFRRTtBQUNULE1BQUlMLE9BQU9MLEdBQUdXLFdBQUgsQ0FBZSxLQUFLTixJQUFwQixDQUFYO0FBQ0FBLE9BQUtPLENBQUwsR0FBUyxDQUFDLEdBQVY7QUFDQSxPQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJULElBQW5CO0FBQ0EsT0FBS0EsSUFBTCxHQUFZQSxLQUFLVSxZQUFMLENBQWtCLFlBQWxCLENBQVo7QUFDQSxPQUFLUixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhUyxRQUFiLENBQXNCQyxHQUF0QixDQUEwQixVQUFTQyxHQUFULEVBQWE7QUFDckQsVUFBT0EsSUFBSUgsWUFBSixDQUFpQixzQkFBakIsQ0FBUDtBQUNBLEdBRmMsQ0FBZjtBQUdBLE9BQUtWLElBQUwsQ0FBVWMsSUFBVixDQUFlLElBQWY7QUFDQSxFQWpCTzs7QUFrQlJDLFdBQVUsb0JBQVc7QUFDcEIsT0FBS0MsUUFBTDtBQUNBLEVBcEJPO0FBcUJSQSxXQUFVLG9CQUFrQjtBQUFBLE1BQVRoQixJQUFTLHVFQUFGLENBQUU7O0FBQzNCTCxLQUFHc0IsSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxXQUFVLEVBQUNDLEtBQUksRUFBQ2pCLEtBQUssS0FBS0EsR0FBWCxFQUFnQkosTUFBTUEsSUFBdEIsRUFBTCxFQUFYLEVBQUgsRUFBYjtBQUNBLEVBdkJPO0FBd0JSc0IsU0FBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ3JCLE9BQUt2QixJQUFMLENBQVV3QixLQUFWLENBQWdCRCxLQUFLdkIsSUFBckIsRUFBMkJ1QixLQUFLRSxLQUFoQyxFQUF1Q0YsS0FBS0csS0FBNUM7QUFDQSxPQUFLeEIsT0FBTCxDQUFheUIsT0FBYixDQUFxQixVQUFTZCxHQUFULEVBQWNlLENBQWQsRUFBZ0I7QUFDcEMsT0FBSUMsUUFBUU4sS0FBS0EsSUFBTCxDQUFVSyxDQUFWLENBQVo7QUFDQSxPQUFJLEtBQUssQ0FBTCxLQUFXQyxLQUFmLEVBQXNCO0FBQ3JCaEIsUUFBSUwsSUFBSixDQUFTc0IsTUFBVCxHQUFrQixJQUFsQjtBQUNBakIsUUFBSWtCLEVBQUosQ0FBT0QsTUFBUCxHQUFnQkYsSUFBRSxDQUFsQjtBQUNBZixRQUFJbUIsSUFBSixDQUFTQyxNQUFULEdBQWtCeEMsT0FBT3lDLG1CQUFQLENBQTJCTCxNQUFNRyxJQUFqQyxDQUFsQjtBQUNNbkIsUUFBSXNCLEtBQUosQ0FBVUYsTUFBVixHQUFtQkosTUFBTU8sRUFBekI7QUFDQXZCLFFBQUl3QixHQUFKLENBQVFKLE1BQVIsR0FBaUJ4QyxPQUFPNkMsZ0JBQVAsQ0FBd0JULE1BQU1RLEdBQTlCLENBQWpCO0FBQ0F4QixRQUFJMEIsRUFBSixDQUFPTixNQUFQLEdBQWdCSixNQUFNVSxFQUFOLEdBQVcsT0FBM0I7QUFDQTFCLFFBQUkyQixHQUFKLENBQVFQLE1BQVIsR0FBaUJ4QyxPQUFPNkMsZ0JBQVAsQ0FBd0JULE1BQU1XLEdBQTlCLENBQWpCO0FBQ04sSUFSRCxNQVFLO0FBQ0ozQixRQUFJTCxJQUFKLENBQVNzQixNQUFULEdBQWtCLEtBQWxCO0FBQ0E7QUFDRCxHQWJEO0FBY0E7QUF4Q08sQ0FBVCIsImZpbGUiOiJCaWdCYWJvbF9MaWNoU3UuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJpZ0JhYm9sIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHBhZ2U6ICAgIGNjLlByZWZhYixcclxuXHRcdGNvbnRlbnQ6IGNjLk5vZGUsXHJcblx0XHRyZWQ6ICAgICB0cnVlLFxyXG5cdH0sXHJcblx0b25Mb2FkICgpIHtcclxuXHRcdHZhciBwYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wYWdlKTtcclxuXHRcdHBhZ2UueSA9IC0yODE7XHJcblx0XHR0aGlzLm5vZGUuYWRkQ2hpbGQocGFnZSk7XHJcblx0XHR0aGlzLnBhZ2UgPSBwYWdlLmdldENvbXBvbmVudCgnUGFnaW5hdGlvbicpO1xyXG5cdFx0dGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRyZXR1cm4gb2JqLmdldENvbXBvbmVudCgnQmlnQmFib2xfTGljaFN1X2l0ZW0nKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5wYWdlLmluaXQodGhpcyk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmdldF9kYXRhKCk7XHJcblx0fSxcclxuXHRnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHtnOntiaWdfYmFib2w6e2xvZzp7cmVkOiB0aGlzLnJlZCwgcGFnZTogcGFnZX19fX0pO1xyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHRoaXMucGFnZS5vblNldChkYXRhLnBhZ2UsIGRhdGEua21lc3MsIGRhdGEudG90YWwpO1xyXG5cdFx0dGhpcy5jb250ZW50LmZvckVhY2goZnVuY3Rpb24ob2JqLCBpKXtcclxuXHRcdFx0bGV0IGRhdGFUID0gZGF0YS5kYXRhW2ldO1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0b2JqLmJnLmFjdGl2ZSA9IGklMjtcclxuXHRcdFx0XHRvYmoudGltZS5zdHJpbmcgPSBIZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShkYXRhVC50aW1lKTtcclxuXHRcdCAgICAgICAgb2JqLnBoaWVuLnN0cmluZyA9IGRhdGFULmlkO1xyXG5cdFx0ICAgICAgICBvYmouYmV0LnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULmJldCk7XHJcblx0XHQgICAgICAgIG9iai5rcS5zdHJpbmcgPSBkYXRhVC5rcSArICcgRMOybmcnO1xyXG5cdFx0ICAgICAgICBvYmoud2luLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULndpbik7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=