
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/DEvent/EventBigBabol.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cc99A4PaNHspACLK1eSt4Y', 'EventBigBabol');
// Script/Model/Dialog/DEvent/EventBigBabol.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		text100: cc.Label,
		text1000: cc.Label,
		text10000: cc.Label
	},
	onData: function onData(data) {
		var bigbb100 = data.filter(function (obj) {
			return obj.type == 100 && obj.red == true;
		});
		this.text100.string = '* X' + bigbb100[0].x + ' hũ phòng 100, (sau ' + bigbb100[0].toX + ' hũ, ' + bigbb100[0].balans + ' hũ được X' + bigbb100[0].x + ')';

		var bigbb1000 = data.filter(function (obj) {
			return obj.type == 1000 && obj.red == true;
		});
		this.text1000.string = '* X' + bigbb1000[0].x + ' hũ phòng 1.000, (sau ' + bigbb1000[0].toX + ' hũ, ' + bigbb1000[0].balans + ' hũ được X' + bigbb1000[0].x + ')';

		var bigbb10000 = data.filter(function (obj) {
			return obj.type == 10000 && obj.red == true;
		});
		this.text10000.string = '* X' + bigbb10000[0].x + ' hũ phòng 10.000, (sau ' + bigbb10000[0].toX + ' hũ, ' + bigbb10000[0].balans + ' hũ được X' + bigbb10000[0].x + ')';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50L2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxERXZlbnRcXEV2ZW50QmlnQmFib2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dDEwMCIsIkxhYmVsIiwidGV4dDEwMDAiLCJ0ZXh0MTAwMDAiLCJvbkRhdGEiLCJkYXRhIiwiYmlnYmIxMDAiLCJmaWx0ZXIiLCJvYmoiLCJ0eXBlIiwicmVkIiwic3RyaW5nIiwieCIsInRvWCIsImJhbGFucyIsImJpZ2JiMTAwMCIsImJpZ2JiMTAwMDAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxVQUFTRixHQUFHRyxTQURQOztBQUdMQyxhQUFZO0FBQ1JDLFdBQVdMLEdBQUdNLEtBRE47QUFFZEMsWUFBV1AsR0FBR00sS0FGQTtBQUdkRSxhQUFXUixHQUFHTTtBQUhBLEVBSFA7QUFRTEcsU0FBUSxnQkFBU0MsSUFBVCxFQUFlO0FBQ3pCLE1BQUlDLFdBQVdELEtBQUtFLE1BQUwsQ0FBWSxVQUFTQyxHQUFULEVBQWE7QUFDdkMsVUFBT0EsSUFBSUMsSUFBSixJQUFZLEdBQVosSUFBbUJELElBQUlFLEdBQUosSUFBVyxJQUFyQztBQUNBLEdBRmMsQ0FBZjtBQUdBLE9BQUtWLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixRQUFRTCxTQUFTLENBQVQsRUFBWU0sQ0FBcEIsR0FBd0Isc0JBQXhCLEdBQWlETixTQUFTLENBQVQsRUFBWU8sR0FBN0QsR0FBbUUsT0FBbkUsR0FBNkVQLFNBQVMsQ0FBVCxFQUFZUSxNQUF6RixHQUFrRyxZQUFsRyxHQUFpSFIsU0FBUyxDQUFULEVBQVlNLENBQTdILEdBQWlJLEdBQXZKOztBQUVBLE1BQUlHLFlBQVlWLEtBQUtFLE1BQUwsQ0FBWSxVQUFTQyxHQUFULEVBQWE7QUFDeEMsVUFBT0EsSUFBSUMsSUFBSixJQUFZLElBQVosSUFBb0JELElBQUlFLEdBQUosSUFBVyxJQUF0QztBQUNBLEdBRmUsQ0FBaEI7QUFHQSxPQUFLUixRQUFMLENBQWNTLE1BQWQsR0FBdUIsUUFBUUksVUFBVSxDQUFWLEVBQWFILENBQXJCLEdBQXlCLHdCQUF6QixHQUFvREcsVUFBVSxDQUFWLEVBQWFGLEdBQWpFLEdBQXVFLE9BQXZFLEdBQWlGRSxVQUFVLENBQVYsRUFBYUQsTUFBOUYsR0FBdUcsWUFBdkcsR0FBc0hDLFVBQVUsQ0FBVixFQUFhSCxDQUFuSSxHQUF1SSxHQUE5Sjs7QUFFQSxNQUFJSSxhQUFhWCxLQUFLRSxNQUFMLENBQVksVUFBU0MsR0FBVCxFQUFhO0FBQ3pDLFVBQU9BLElBQUlDLElBQUosSUFBWSxLQUFaLElBQXFCRCxJQUFJRSxHQUFKLElBQVcsSUFBdkM7QUFDQSxHQUZnQixDQUFqQjtBQUdBLE9BQUtQLFNBQUwsQ0FBZVEsTUFBZixHQUF3QixRQUFRSyxXQUFXLENBQVgsRUFBY0osQ0FBdEIsR0FBMEIseUJBQTFCLEdBQXNESSxXQUFXLENBQVgsRUFBY0gsR0FBcEUsR0FBMEUsT0FBMUUsR0FBb0ZHLFdBQVcsQ0FBWCxFQUFjRixNQUFsRyxHQUEyRyxZQUEzRyxHQUEwSEUsV0FBVyxDQUFYLEVBQWNKLENBQXhJLEdBQTRJLEdBQXBLO0FBRUE7QUF4Qk8sQ0FBVCIsImZpbGUiOiJFdmVudEJpZ0JhYm9sLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dDEwMDogICBjYy5MYWJlbCxcclxuXHRcdHRleHQxMDAwOiAgY2MuTGFiZWwsXHJcblx0XHR0ZXh0MTAwMDA6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIG9uRGF0YTogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0dmFyIGJpZ2JiMTAwID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0cmV0dXJuIG9iai50eXBlID09IDEwMCAmJiBvYmoucmVkID09IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZXh0MTAwLnN0cmluZyA9ICcqIFgnICsgYmlnYmIxMDBbMF0ueCArICcgaMWpIHBow7JuZyAxMDAsIChzYXUgJyArIGJpZ2JiMTAwWzBdLnRvWCArICcgaMWpLCAnICsgYmlnYmIxMDBbMF0uYmFsYW5zICsgJyBoxakgxJHGsOG7o2MgWCcgKyBiaWdiYjEwMFswXS54ICsgJyknO1xyXG5cclxuXHRcdHZhciBiaWdiYjEwMDAgPSBkYXRhLmZpbHRlcihmdW5jdGlvbihvYmope1xyXG5cdFx0XHRyZXR1cm4gb2JqLnR5cGUgPT0gMTAwMCAmJiBvYmoucmVkID09IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZXh0MTAwMC5zdHJpbmcgPSAnKiBYJyArIGJpZ2JiMTAwMFswXS54ICsgJyBoxakgcGjDsm5nIDEuMDAwLCAoc2F1ICcgKyBiaWdiYjEwMDBbMF0udG9YICsgJyBoxaksICcgKyBiaWdiYjEwMDBbMF0uYmFsYW5zICsgJyBoxakgxJHGsOG7o2MgWCcgKyBiaWdiYjEwMDBbMF0ueCArICcpJztcclxuXHJcblx0XHR2YXIgYmlnYmIxMDAwMCA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHJldHVybiBvYmoudHlwZSA9PSAxMDAwMCAmJiBvYmoucmVkID09IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZXh0MTAwMDAuc3RyaW5nID0gJyogWCcgKyBiaWdiYjEwMDAwWzBdLnggKyAnIGjFqSBwaMOybmcgMTAuMDAwLCAoc2F1ICcgKyBiaWdiYjEwMDAwWzBdLnRvWCArICcgaMWpLCAnICsgYmlnYmIxMDAwMFswXS5iYWxhbnMgKyAnIGjFqSDEkcaw4bujYyBYJyArIGJpZ2JiMTAwMDBbMF0ueCArICcpJztcclxuXHJcblx0fSxcclxufSk7XHJcbiJdfQ==