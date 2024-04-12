
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/ef/notice/ThongBaoNoHu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2032a+ToBpAt7K48nuzmY5R', 'ThongBaoNoHu');
// Script/Helper/ef/notice/ThongBaoNoHu.js

'use strict';

var helper = require('ThongBaoNoHu');

cc.Class({
	extends: cc.Component,

	properties: {
		animation: cc.Animation,
		title: cc.Label,
		users: cc.Label,
		bet: cc.Label
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	onLoad: function onLoad() {
		this.node.y = -133;
		this.node.runAction(cc.sequence(cc.moveTo(2, cc.v2(0, 77)), cc.callFunc(function () {
			// Chơi âm thanh và nổ pháo hoa
			this.animation.play();
			cc.RedT.audio.playNoticeJackP();
		}, this), cc.delayTime(7), cc.callFunc(function () {
			// Hủy thông báo
			this.RedT.pushNotice();
			this.node.destroy();
		}, this)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxlZlxcbm90aWNlLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxlZlxcbm90aWNlL2Fzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXGVmXFxub3RpY2VcXFRob25nQmFvTm9IdS5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYW5pbWF0aW9uIiwiQW5pbWF0aW9uIiwidGl0bGUiLCJMYWJlbCIsInVzZXJzIiwiYmV0IiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJvbkxvYWQiLCJub2RlIiwieSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwibW92ZVRvIiwidjIiLCJjYWxsRnVuYyIsInBsYXkiLCJhdWRpbyIsInBsYXlOb3RpY2VKYWNrUCIsImRlbGF5VGltZSIsInB1c2hOb3RpY2UiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsY0FBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDTEMsVUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsYUFBWTtBQUNYQyxhQUFXTCxHQUFHTSxTQURIO0FBRVJDLFNBQVdQLEdBQUdRLEtBRk47QUFHUkMsU0FBV1QsR0FBR1EsS0FITjtBQUlSRSxPQUFXVixHQUFHUTtBQUpOLEVBSFA7QUFTTEcsT0FBTSxjQUFTQyxHQUFULEVBQWE7QUFDbEIsT0FBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsRUFYSTtBQVlMRSxPQVpLLG9CQVlLO0FBQ1QsT0FBS0MsSUFBTCxDQUFVQyxDQUFWLEdBQWMsQ0FBQyxHQUFmO0FBQ0gsT0FBS0QsSUFBTCxDQUFVRSxTQUFWLENBQ0NqQixHQUFHa0IsUUFBSCxDQUNDbEIsR0FBR21CLE1BQUgsQ0FBVSxDQUFWLEVBQWFuQixHQUFHb0IsRUFBSCxDQUFNLENBQU4sRUFBUyxFQUFULENBQWIsQ0FERCxFQUVDcEIsR0FBR3FCLFFBQUgsQ0FBWSxZQUFXO0FBQ3RCO0FBQ0EsUUFBS2hCLFNBQUwsQ0FBZWlCLElBQWY7QUFDQXRCLE1BQUdhLElBQUgsQ0FBUVUsS0FBUixDQUFjQyxlQUFkO0FBQ0EsR0FKRCxFQUlHLElBSkgsQ0FGRCxFQU9DeEIsR0FBR3lCLFNBQUgsQ0FBYSxDQUFiLENBUEQsRUFRQ3pCLEdBQUdxQixRQUFILENBQVksWUFBVztBQUN0QjtBQUNBLFFBQUtSLElBQUwsQ0FBVWEsVUFBVjtBQUNBLFFBQUtYLElBQUwsQ0FBVVksT0FBVjtBQUNBLEdBSkQsRUFJRyxJQUpILENBUkQsQ0FERDtBQWdCRztBQTlCSSxDQUFUIiwiZmlsZSI6IlRob25nQmFvTm9IdS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcZWZcXG5vdGljZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnVGhvbmdCYW9Ob0h1Jyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHRhbmltYXRpb246IGNjLkFuaW1hdGlvbixcclxuICAgICAgICB0aXRsZTogICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIHVzZXJzOiAgICAgY2MuTGFiZWwsXHJcbiAgICAgICAgYmV0OiAgICAgICBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgXHR0aGlzLlJlZFQgPSBvYmo7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgIFx0dGhpcy5ub2RlLnkgPSAtMTMzO1xyXG5cdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuXHRcdFx0Y2Muc2VxdWVuY2UoXHJcblx0XHRcdFx0Y2MubW92ZVRvKDIsIGNjLnYyKDAsIDc3KSksXHJcblx0XHRcdFx0Y2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQvLyBDaMahaSDDom0gdGhhbmggdsOgIG7hu5UgcGjDoW8gaG9hXHJcblx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XHJcblx0XHRcdFx0XHRjYy5SZWRULmF1ZGlvLnBsYXlOb3RpY2VKYWNrUCgpO1xyXG5cdFx0XHRcdH0sIHRoaXMpLFxyXG5cdFx0XHRcdGNjLmRlbGF5VGltZSg3KSxcclxuXHRcdFx0XHRjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdC8vIEjhu6d5IHRow7RuZyBiw6FvXHJcblx0XHRcdFx0XHR0aGlzLlJlZFQucHVzaE5vdGljZSgpO1xyXG5cdFx0XHRcdFx0dGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHRcdFx0XHR9LCB0aGlzKSxcclxuXHRcdFx0KVxyXG5cdFx0KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=