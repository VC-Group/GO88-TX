
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuLichSu/TaiXiuLichSu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80da9UrNe9D45tJEXBxj5Wd', 'TaiXiuLichSu');
// Script/Game/TaiXiu/TaiXiuLichSu/TaiXiuLichSu.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,
	properties: {
		content: cc.Node,
		page: cc.Prefab
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	onLoad: function onLoad() {
		this.page = cc.instantiate(this.page);
		this.page.y = -239;
		this.node.addChild(this.page);
		this.page = this.page.getComponent('Pagination');
		this.page.init(this);

		this.content = this.content.children.map(function (obj) {
			return obj.getComponent('TaiXiuLichSu_item');
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	onDisable: function onDisable() {},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ taixiu: { get_log: { page: page } } });
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);
		this.content.forEach(function (obj, index) {
			var dataT = data.data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				var tong = dataT.dice1 + dataT.dice2 + dataT.dice3;
				obj.phien.string = dataT.phien;
				obj.time.string = Helper.getStringDateByTime(dataT.time);
				obj.dat.string = dataT.taixiu ? dataT.select ? 'Chẵn' : 'Lẻ' : dataT.select ? 'Tài' : 'Xỉu';
				obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
				obj.tralai.string = Helper.numberWithCommas(dataT.tralai);
				obj.ketqua.string = dataT.dice1 + '-' + dataT.dice2 + '-' + dataT.dice3 + '  ' + tong;
				if (dataT.betwin > 0) obj.nhan.string = Helper.numberWithCommas(dataT.betwin + dataT.bet);else obj.nhan.string = Helper.numberWithCommas(dataT.betwin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVMaWNoU3UvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdUxpY2hTdS9hc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVMaWNoU3VcXFRhaVhpdUxpY2hTdS5qcyJdLCJuYW1lcyI6WyJIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwYWdlIiwiUHJlZmFiIiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJvbkxvYWQiLCJpbnN0YW50aWF0ZSIsInkiLCJub2RlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJjaGlsZHJlbiIsIm1hcCIsIm9uRW5hYmxlIiwiZ2V0X2RhdGEiLCJvbkRpc2FibGUiLCJzZW5kIiwidGFpeGl1IiwiZ2V0X2xvZyIsIm9uRGF0YSIsImRhdGEiLCJvblNldCIsImttZXNzIiwidG90YWwiLCJmb3JFYWNoIiwiaW5kZXgiLCJkYXRhVCIsImFjdGl2ZSIsInRvbmciLCJkaWNlMSIsImRpY2UyIiwiZGljZTMiLCJwaGllbiIsInN0cmluZyIsInRpbWUiLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwiZGF0Iiwic2VsZWN0IiwiY3VvYyIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJ0cmFsYWkiLCJrZXRxdWEiLCJiZXR3aW4iLCJuaGFuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjtBQUVSQyxhQUFZO0FBQ1hDLFdBQVNMLEdBQUdNLElBREQ7QUFFWEMsUUFBU1AsR0FBR1E7QUFGRCxFQUZKO0FB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TUFBOUIsQ0FBcEI7QUFDQSxJQWJELE1BYUs7QUFDSnhDLFFBQUlLLElBQUosQ0FBU21CLE1BQVQsR0FBa0IsS0FBbEI7QUFDQTtBQUNELEdBbEJEO0FBbUJBO0FBakRPLENBQVQiLCJmaWxlIjoiVGFpWGl1TGljaFN1LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVMaWNoU3UiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRjb250ZW50OiBjYy5Ob2RlLFxyXG5cdFx0cGFnZTogICAgY2MuUHJlZmFiLFxyXG5cdH0sXHJcblx0aW5pdChvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdH0sXHJcblx0b25Mb2FkICgpIHtcclxuXHRcdHRoaXMucGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZSk7XHJcbiAgICAgICAgdGhpcy5wYWdlLnkgPSAtMjM5O1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnBhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZS5nZXRDb21wb25lbnQoJ1BhZ2luYXRpb24nKTtcclxuXHRcdHRoaXMucGFnZS5pbml0KHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKSB7XHJcblx0XHRcdHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdUYWlYaXVMaWNoU3VfaXRlbScpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZXRfZGF0YSgpO1xyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0fSxcclxuXHRnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG5cdFx0Y2MuUmVkVC5zZW5kKHt0YWl4aXU6e2dldF9sb2c6e3BhZ2U6cGFnZX19fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5wYWdlLm9uU2V0KGRhdGEucGFnZSwgZGF0YS5rbWVzcywgZGF0YS50b3RhbCk7XHJcblx0XHR0aGlzLmNvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuXHRcdFx0dmFyIGRhdGFUID0gZGF0YS5kYXRhW2luZGV4XTtcclxuXHRcdFx0aWYgKHZvaWQgMCAhPT0gZGF0YVQpIHtcclxuXHRcdFx0XHRvYmoubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHZhciB0b25nID0gZGF0YVQuZGljZTErZGF0YVQuZGljZTIrZGF0YVQuZGljZTM7XHJcblx0XHRcdFx0b2JqLnBoaWVuLnN0cmluZyAgPSBkYXRhVC5waGllbjtcclxuXHRcdFx0XHRvYmoudGltZS5zdHJpbmcgICA9IEhlbHBlci5nZXRTdHJpbmdEYXRlQnlUaW1lKGRhdGFULnRpbWUpO1xyXG5cdFx0XHRcdG9iai5kYXQuc3RyaW5nICAgID0gZGF0YVQudGFpeGl1ID8gKGRhdGFULnNlbGVjdCA/ICdDaOG6tW4nIDogJ0zhursnKSA6IChkYXRhVC5zZWxlY3QgPyAnVMOgaScgOiAnWOG7iXUnKTtcclxuXHRcdFx0XHRvYmouY3VvYy5zdHJpbmcgICA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULmJldCk7XHJcblx0XHRcdFx0b2JqLnRyYWxhaS5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC50cmFsYWkpO1xyXG5cdFx0XHRcdG9iai5rZXRxdWEuc3RyaW5nID0gZGF0YVQuZGljZTEgKyAnLScgKyBkYXRhVC5kaWNlMiArICctJyArIGRhdGFULmRpY2UzICsgJyAgJyArIHRvbmc7XHJcblx0XHRcdFx0aWYoZGF0YVQuYmV0d2luID4gMClcclxuXHRcdFx0XHRvYmoubmhhbi5zdHJpbmcgICA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULmJldHdpbitkYXRhVC5iZXQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRvYmoubmhhbi5zdHJpbmcgICA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULmJldHdpbik7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG59KTtcclxuIl19