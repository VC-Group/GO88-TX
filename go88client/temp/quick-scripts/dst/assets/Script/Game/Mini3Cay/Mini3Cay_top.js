
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Mini3Cay/Mini3Cay_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c6da1F/j5K0YtLq6E2eBDu', 'Mini3Cay_top');
// Script/Game/Mini3Cay/Mini3Cay_top.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,
	properties: {
		item: cc.Prefab,
		content: cc.Node,
		cointRed: cc.Node,
		cointXu: cc.Node,
		red: true
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ g: { mini3cay: { tops: this.red } } });
	},
	changerCoint: function changerCoint() {
		this.red = !this.red;
		this.cointRed.active = !this.cointRed.active;
		this.cointXu.active = !this.cointXu.active;
		this.get_data();
	},
	onData: function onData(data) {
		this.content.destroyAllChildren();
		var self = this;
		Promise.all(data.map(function (obj, index) {
			var item = cc.instantiate(self.item);
			var itemComponent = item.getComponent('Mini3Cay_ihistory');
			itemComponent.time.string = helper.getStringDateByTime(obj.time);
			itemComponent.phien.string = obj.name;
			itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
			itemComponent.win.string = helper.numberWithCommas(obj.win);
			Promise.all(itemComponent.kq.map(function (kq, index) {
				kq.spriteFrame = cc.RedT.util.card.getCard(obj.kq[index].card, obj.kq[index].type);
			}));
			item.children[0].active = !(index & 1);
			self.content.addChild(item);
		}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxNaW5pM0NheS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaTNDYXkvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1pbmkzQ2F5XFxNaW5pM0NheV90b3AuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW0iLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsImNvaW50UmVkIiwiY29pbnRYdSIsInJlZCIsImluaXQiLCJvYmoiLCJSZWRUIiwib25FbmFibGUiLCJnZXRfZGF0YSIsInBhZ2UiLCJzZW5kIiwiZyIsIm1pbmkzY2F5IiwidG9wcyIsImNoYW5nZXJDb2ludCIsImFjdGl2ZSIsIm9uRGF0YSIsImRhdGEiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJzZWxmIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsImluZGV4IiwiaW5zdGFudGlhdGUiLCJpdGVtQ29tcG9uZW50IiwiZ2V0Q29tcG9uZW50IiwidGltZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJwaGllbiIsIm5hbWUiLCJjdW9jIiwibnVtYmVyV2l0aENvbW1hcyIsImJldCIsIndpbiIsImtxIiwic3ByaXRlRnJhbWUiLCJ1dGlsIiwiY2FyZCIsImdldENhcmQiLCJ0eXBlIiwiY2hpbGRyZW4iLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7QUFFUkMsYUFBWTtBQUNYQyxRQUFVTCxHQUFHTSxNQURGO0FBRVhDLFdBQVVQLEdBQUdRLElBRkY7QUFHWEMsWUFBVVQsR0FBR1EsSUFIRjtBQUlYRSxXQUFVVixHQUFHUSxJQUpGO0FBS1hHLE9BQVU7QUFMQyxFQUZKO0FBU1JDLEtBVFEsZ0JBU0hDLEdBVEcsRUFTQztBQUNSLE9BQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNBLEVBWE87O0FBWVJFLFdBQVUsb0JBQVc7QUFDcEIsT0FBS0MsUUFBTDtBQUNBLEVBZE87QUFlUkEsV0FBVSxvQkFBa0I7QUFBQSxNQUFUQyxJQUFTLHVFQUFGLENBQUU7O0FBQzNCakIsS0FBR2MsSUFBSCxDQUFRSSxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxVQUFTLEVBQUNDLE1BQU0sS0FBS1YsR0FBWixFQUFWLEVBQUgsRUFBYjtBQUNBLEVBakJPO0FBa0JSVyxlQUFjLHdCQUFVO0FBQ3ZCLE9BQUtYLEdBQUwsR0FBdUIsQ0FBQyxLQUFLQSxHQUE3QjtBQUNBLE9BQUtGLFFBQUwsQ0FBY2MsTUFBZCxHQUF1QixDQUFDLEtBQUtkLFFBQUwsQ0FBY2MsTUFBdEM7QUFDQSxPQUFLYixPQUFMLENBQWFhLE1BQWIsR0FBdUIsQ0FBQyxLQUFLYixPQUFMLENBQWFhLE1BQXJDO0FBQ0EsT0FBS1AsUUFBTDtBQUNBLEVBdkJPO0FBd0JSUSxTQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDckIsT0FBS2xCLE9BQUwsQ0FBYW1CLGtCQUFiO0FBQ0EsTUFBSUMsT0FBTyxJQUFYO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWUosS0FBS0ssR0FBTCxDQUFTLFVBQVNqQixHQUFULEVBQWNrQixLQUFkLEVBQW9CO0FBQ3hDLE9BQUkxQixPQUFPTCxHQUFHZ0MsV0FBSCxDQUFlTCxLQUFLdEIsSUFBcEIsQ0FBWDtBQUNBLE9BQUk0QixnQkFBZ0I1QixLQUFLNkIsWUFBTCxDQUFrQixtQkFBbEIsQ0FBcEI7QUFDQUQsaUJBQWNFLElBQWQsQ0FBbUJDLE1BQW5CLEdBQTZCdEMsT0FBT3VDLG1CQUFQLENBQTJCeEIsSUFBSXNCLElBQS9CLENBQTdCO0FBQ0FGLGlCQUFjSyxLQUFkLENBQW9CRixNQUFwQixHQUE2QnZCLElBQUkwQixJQUFqQztBQUNBTixpQkFBY08sSUFBZCxDQUFtQkosTUFBbkIsR0FBNkJ0QyxPQUFPMkMsZ0JBQVAsQ0FBd0I1QixJQUFJNkIsR0FBNUIsQ0FBN0I7QUFDQVQsaUJBQWNVLEdBQWQsQ0FBa0JQLE1BQWxCLEdBQTZCdEMsT0FBTzJDLGdCQUFQLENBQXdCNUIsSUFBSThCLEdBQTVCLENBQTdCO0FBQ0FmLFdBQVFDLEdBQVIsQ0FBWUksY0FBY1csRUFBZCxDQUFpQmQsR0FBakIsQ0FBcUIsVUFBU2MsRUFBVCxFQUFhYixLQUFiLEVBQW1CO0FBQ25EYSxPQUFHQyxXQUFILEdBQWlCN0MsR0FBR2MsSUFBSCxDQUFRZ0MsSUFBUixDQUFhQyxJQUFiLENBQWtCQyxPQUFsQixDQUEwQm5DLElBQUkrQixFQUFKLENBQU9iLEtBQVAsRUFBY2dCLElBQXhDLEVBQThDbEMsSUFBSStCLEVBQUosQ0FBT2IsS0FBUCxFQUFja0IsSUFBNUQsQ0FBakI7QUFDQSxJQUZXLENBQVo7QUFHQTVDLFFBQUs2QyxRQUFMLENBQWMsQ0FBZCxFQUFpQjNCLE1BQWpCLEdBQTBCLEVBQUVRLFFBQU0sQ0FBUixDQUExQjtBQUNBSixRQUFLcEIsT0FBTCxDQUFhNEMsUUFBYixDQUFzQjlDLElBQXRCO0FBQ0EsR0FaVyxDQUFaO0FBYUE7QUF4Q08sQ0FBVCIsImZpbGUiOiJNaW5pM0NheV90b3AuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1pbmkzQ2F5Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0aXRlbTogICAgIGNjLlByZWZhYixcclxuXHRcdGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG5cdFx0Y29pbnRSZWQ6IGNjLk5vZGUsXHJcblx0XHRjb2ludFh1OiAgY2MuTm9kZSxcclxuXHRcdHJlZDogICAgICB0cnVlLFxyXG5cdH0sXHJcblx0aW5pdChvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5nZXRfZGF0YSgpO1xyXG5cdH0sXHJcblx0Z2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7Zzp7bWluaTNjYXk6e3RvcHM6IHRoaXMucmVkfX19KTtcclxuXHR9LFxyXG5cdGNoYW5nZXJDb2ludDogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMucmVkICAgICAgICAgICAgID0gIXRoaXMucmVkO1xyXG5cdFx0dGhpcy5jb2ludFJlZC5hY3RpdmUgPSAhdGhpcy5jb2ludFJlZC5hY3RpdmU7XHJcblx0XHR0aGlzLmNvaW50WHUuYWN0aXZlICA9ICF0aGlzLmNvaW50WHUuYWN0aXZlO1xyXG5cdFx0dGhpcy5nZXRfZGF0YSgpO1xyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG5cdFx0XHR2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHNlbGYuaXRlbSk7XHJcblx0XHRcdHZhciBpdGVtQ29tcG9uZW50ID0gaXRlbS5nZXRDb21wb25lbnQoJ01pbmkzQ2F5X2loaXN0b3J5Jyk7XHJcblx0XHRcdGl0ZW1Db21wb25lbnQudGltZS5zdHJpbmcgID0gaGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUob2JqLnRpbWUpO1xyXG5cdFx0XHRpdGVtQ29tcG9uZW50LnBoaWVuLnN0cmluZyA9IG9iai5uYW1lO1xyXG5cdFx0XHRpdGVtQ29tcG9uZW50LmN1b2Muc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai5iZXQpO1xyXG5cdFx0XHRpdGVtQ29tcG9uZW50Lndpbi5zdHJpbmcgICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai53aW4pO1xyXG5cdFx0XHRQcm9taXNlLmFsbChpdGVtQ29tcG9uZW50LmtxLm1hcChmdW5jdGlvbihrcSwgaW5kZXgpe1xyXG5cdFx0XHRcdGtxLnNwcml0ZUZyYW1lID0gY2MuUmVkVC51dGlsLmNhcmQuZ2V0Q2FyZChvYmoua3FbaW5kZXhdLmNhcmQsIG9iai5rcVtpbmRleF0udHlwZSk7XHJcblx0XHRcdH0pKTtcclxuXHRcdFx0aXRlbS5jaGlsZHJlblswXS5hY3RpdmUgPSAhKGluZGV4JjEpO1xyXG5cdFx0XHRzZWxmLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcblx0XHR9KSlcclxuXHR9LFxyXG59KTtcclxuIl19