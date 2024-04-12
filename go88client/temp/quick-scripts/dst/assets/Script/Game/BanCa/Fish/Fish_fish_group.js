
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/Fish/Fish_fish_group.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '93eafuGlupJxI0wpNs4ofEh', 'Fish_fish_group');
// Script/Game/BanCa/Fish/Fish_fish_group.js

'use strict';

var fish = require('Fish_fish');

cc.Class({
	extends: cc.Component,

	properties: {
		anim: cc.Animation,
		fish: {
			default: [],
			type: fish
		}
	},
	init: function init(RedT, data) {
		this.g = data.g;
		this.node.g = data.g;
		if (data.z !== void 0) {
			this.node.zIndex = data.z;
		}

		this.anim.on('finished', this.onFinish, this);
		if (void 0 !== data.r) {
			var clip = this.anim.getClips()[data.r].name;
			this.anim.play(clip);
			this.animState = this.anim.getAnimationState(clip);
		}
		if (void 0 !== data.a) {
			this.anim.play(data.a);
			this.animState = this.anim.getAnimationState(data.a);
		}

		if (void 0 !== data.t) {
			this.animState.time = data.t;
		}

		this.fish = this.node.children.map(function (obj, i) {
			obj = obj.getComponent(fish);
			var check = data.f[i];
			if (!!check && check.id !== void 0) {
				RedT.fish[check.id] = obj;
				obj.init(RedT, check);
				obj.inGroup = true;
			} else {
				obj.node.active = false;
			}
			return obj;
		});
	},
	onFinish: function onFinish() {
		this.fish.forEach(function (obj) {
			obj.onFinish();
		});
		delete this.fish;
		this.node.destroy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2gvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYVxcRmlzaC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEZpc2hfZmlzaF9ncm91cC5qcyJdLCJuYW1lcyI6WyJmaXNoIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFuaW0iLCJBbmltYXRpb24iLCJkZWZhdWx0IiwidHlwZSIsImluaXQiLCJSZWRUIiwiZGF0YSIsImciLCJub2RlIiwieiIsInpJbmRleCIsIm9uIiwib25GaW5pc2giLCJyIiwiY2xpcCIsImdldENsaXBzIiwibmFtZSIsInBsYXkiLCJhbmltU3RhdGUiLCJnZXRBbmltYXRpb25TdGF0ZSIsImEiLCJ0IiwidGltZSIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiaSIsImdldENvbXBvbmVudCIsImNoZWNrIiwiZiIsImlkIiwiaW5Hcm91cCIsImFjdGl2ZSIsImZvckVhY2giLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLE9BQU9DLFFBQVEsV0FBUixDQUFYOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxRQUFNTCxHQUFHTSxTQURFO0FBRVhSLFFBQU07QUFDTFMsWUFBUyxFQURKO0FBRUxDLFNBQU1WO0FBRkQ7QUFGSyxFQUhKO0FBVVJXLE9BQU0sY0FBU0MsSUFBVCxFQUFlQyxJQUFmLEVBQW9CO0FBQ3pCLE9BQUtDLENBQUwsR0FBbUJELEtBQUtDLENBQXhCO0FBQ0EsT0FBS0MsSUFBTCxDQUFVRCxDQUFWLEdBQW1CRCxLQUFLQyxDQUF4QjtBQUNBLE1BQUlELEtBQUtHLENBQUwsS0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQ3RCLFFBQUtELElBQUwsQ0FBVUUsTUFBVixHQUFtQkosS0FBS0csQ0FBeEI7QUFDQTs7QUFFRCxPQUFLVCxJQUFMLENBQVVXLEVBQVYsQ0FBYSxVQUFiLEVBQXlCLEtBQUtDLFFBQTlCLEVBQXdDLElBQXhDO0FBQ0EsTUFBSSxLQUFLLENBQUwsS0FBV04sS0FBS08sQ0FBcEIsRUFBdUI7QUFDdEIsT0FBSUMsT0FBTyxLQUFLZCxJQUFMLENBQVVlLFFBQVYsR0FBcUJULEtBQUtPLENBQTFCLEVBQTZCRyxJQUF4QztBQUNBLFFBQUtoQixJQUFMLENBQVVpQixJQUFWLENBQWVILElBQWY7QUFDQSxRQUFLSSxTQUFMLEdBQWlCLEtBQUtsQixJQUFMLENBQVVtQixpQkFBVixDQUE0QkwsSUFBNUIsQ0FBakI7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdSLEtBQUtjLENBQXBCLEVBQXVCO0FBQ3RCLFFBQUtwQixJQUFMLENBQVVpQixJQUFWLENBQWVYLEtBQUtjLENBQXBCO0FBQ0EsUUFBS0YsU0FBTCxHQUFpQixLQUFLbEIsSUFBTCxDQUFVbUIsaUJBQVYsQ0FBNEJiLEtBQUtjLENBQWpDLENBQWpCO0FBQ0E7O0FBRUQsTUFBSSxLQUFLLENBQUwsS0FBV2QsS0FBS2UsQ0FBcEIsRUFBdUI7QUFDdEIsUUFBS0gsU0FBTCxDQUFlSSxJQUFmLEdBQXNCaEIsS0FBS2UsQ0FBM0I7QUFDQTs7QUFFRCxPQUFLNUIsSUFBTCxHQUFZLEtBQUtlLElBQUwsQ0FBVWUsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBU0MsR0FBVCxFQUFjQyxDQUFkLEVBQWdCO0FBQ2xERCxTQUFNQSxJQUFJRSxZQUFKLENBQWlCbEMsSUFBakIsQ0FBTjtBQUNBLE9BQUltQyxRQUFRdEIsS0FBS3VCLENBQUwsQ0FBT0gsQ0FBUCxDQUFaO0FBQ0EsT0FBSSxDQUFDLENBQUNFLEtBQUYsSUFBV0EsTUFBTUUsRUFBTixLQUFhLEtBQUssQ0FBakMsRUFBb0M7QUFDbkN6QixTQUFLWixJQUFMLENBQVVtQyxNQUFNRSxFQUFoQixJQUFzQkwsR0FBdEI7QUFDQUEsUUFBSXJCLElBQUosQ0FBU0MsSUFBVCxFQUFldUIsS0FBZjtBQUNBSCxRQUFJTSxPQUFKLEdBQWMsSUFBZDtBQUNBLElBSkQsTUFJSztBQUNKTixRQUFJakIsSUFBSixDQUFTd0IsTUFBVCxHQUFrQixLQUFsQjtBQUNBO0FBQ0QsVUFBT1AsR0FBUDtBQUNBLEdBWFcsQ0FBWjtBQVlBLEVBNUNPO0FBNkNSYixXQUFVLG9CQUFVO0FBQ25CLE9BQUtuQixJQUFMLENBQVV3QyxPQUFWLENBQWtCLFVBQVNSLEdBQVQsRUFBYTtBQUM5QkEsT0FBSWIsUUFBSjtBQUNBLEdBRkQ7QUFHQSxTQUFPLEtBQUtuQixJQUFaO0FBQ0EsT0FBS2UsSUFBTCxDQUFVMEIsT0FBVjtBQUNBO0FBbkRPLENBQVQiLCJmaWxlIjoiRmlzaF9maXNoX2dyb3VwLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2giLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IGZpc2ggPSByZXF1aXJlKCdGaXNoX2Zpc2gnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGFuaW06IGNjLkFuaW1hdGlvbixcclxuXHRcdGZpc2g6IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6IGZpc2gsXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0aW5pdDogZnVuY3Rpb24oUmVkVCwgZGF0YSl7XHJcblx0XHR0aGlzLmcgICAgICAgICAgID0gZGF0YS5nO1xyXG5cdFx0dGhpcy5ub2RlLmcgICAgICA9IGRhdGEuZztcclxuXHRcdGlmIChkYXRhLnogIT09IHZvaWQgMCkge1xyXG5cdFx0XHR0aGlzLm5vZGUuekluZGV4ID0gZGF0YS56O1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuYW5pbS5vbignZmluaXNoZWQnLCB0aGlzLm9uRmluaXNoLCB0aGlzKTtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEucikge1xyXG5cdFx0XHRsZXQgY2xpcCA9IHRoaXMuYW5pbS5nZXRDbGlwcygpW2RhdGEucl0ubmFtZTtcclxuXHRcdFx0dGhpcy5hbmltLnBsYXkoY2xpcCk7XHJcblx0XHRcdHRoaXMuYW5pbVN0YXRlID0gdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKGNsaXApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5hKSB7XHJcblx0XHRcdHRoaXMuYW5pbS5wbGF5KGRhdGEuYSk7XHJcblx0XHRcdHRoaXMuYW5pbVN0YXRlID0gdGhpcy5hbmltLmdldEFuaW1hdGlvblN0YXRlKGRhdGEuYSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS50KSB7XHJcblx0XHRcdHRoaXMuYW5pbVN0YXRlLnRpbWUgPSBkYXRhLnQ7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5maXNoID0gdGhpcy5ub2RlLmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmosIGkpe1xyXG5cdFx0XHRvYmogPSBvYmouZ2V0Q29tcG9uZW50KGZpc2gpO1xyXG5cdFx0XHRsZXQgY2hlY2sgPSBkYXRhLmZbaV07XHJcblx0XHRcdGlmICghIWNoZWNrICYmIGNoZWNrLmlkICE9PSB2b2lkIDApIHtcclxuXHRcdFx0XHRSZWRULmZpc2hbY2hlY2suaWRdID0gb2JqO1xyXG5cdFx0XHRcdG9iai5pbml0KFJlZFQsIGNoZWNrKTtcclxuXHRcdFx0XHRvYmouaW5Hcm91cCA9IHRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBvYmo7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uRmluaXNoOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5maXNoLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0b2JqLm9uRmluaXNoKCk7XHJcblx0XHR9KTtcclxuXHRcdGRlbGV0ZSB0aGlzLmZpc2g7XHJcblx0XHR0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=