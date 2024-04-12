
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/DEvent/EventMiniPoker.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7cc57Khr6xN25cbkkD7jvU8', 'EventMiniPoker');
// Script/Model/Dialog/DEvent/EventMiniPoker.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		text100: cc.Label,
		text1000: cc.Label,
		text10000: cc.Label
	},
	onData: function onData(data) {
		var miniPoker100 = data.filter(function (obj) {
			return obj.type == 100 && obj.red == true;
		});
		this.text100.string = '* X' + miniPoker100[0].x + ' hũ phòng 100, (sau ' + miniPoker100[0].toX + ' hũ, ' + miniPoker100[0].balans + ' hũ được X' + miniPoker100[0].x + ')';

		var miniPoker1000 = data.filter(function (obj) {
			return obj.type == 1000 && obj.red == true;
		});
		this.text1000.string = '* X' + miniPoker1000[0].x + ' hũ phòng 1.000, (sau ' + miniPoker1000[0].toX + ' hũ, ' + miniPoker1000[0].balans + ' hũ được X' + miniPoker1000[0].x + ')';

		var miniPoker10000 = data.filter(function (obj) {
			return obj.type == 10000 && obj.red == true;
		});
		this.text10000.string = '* X' + miniPoker10000[0].x + ' hũ phòng 10.000, (sau ' + miniPoker10000[0].toX + ' hũ, ' + miniPoker10000[0].balans + ' hũ được X' + miniPoker10000[0].x + ')';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50L2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxERXZlbnRcXEV2ZW50TWluaVBva2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHQxMDAiLCJMYWJlbCIsInRleHQxMDAwIiwidGV4dDEwMDAwIiwib25EYXRhIiwiZGF0YSIsIm1pbmlQb2tlcjEwMCIsImZpbHRlciIsIm9iaiIsInR5cGUiLCJyZWQiLCJzdHJpbmciLCJ4IiwidG9YIiwiYmFsYW5zIiwibWluaVBva2VyMTAwMCIsIm1pbmlQb2tlcjEwMDAwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxXQUFXTCxHQUFHTSxLQURIO0FBRVhDLFlBQVdQLEdBQUdNLEtBRkg7QUFHWEUsYUFBV1IsR0FBR007QUFISCxFQUhKO0FBUVJHLFNBQVEsZ0JBQVNDLElBQVQsRUFBZTtBQUN0QixNQUFJQyxlQUFlRCxLQUFLRSxNQUFMLENBQVksVUFBU0MsR0FBVCxFQUFhO0FBQzNDLFVBQU9BLElBQUlDLElBQUosSUFBWSxHQUFaLElBQW1CRCxJQUFJRSxHQUFKLElBQVcsSUFBckM7QUFDQSxHQUZrQixDQUFuQjtBQUdBLE9BQUtWLE9BQUwsQ0FBYVcsTUFBYixHQUFzQixRQUFRTCxhQUFhLENBQWIsRUFBZ0JNLENBQXhCLEdBQTRCLHNCQUE1QixHQUFxRE4sYUFBYSxDQUFiLEVBQWdCTyxHQUFyRSxHQUEyRSxPQUEzRSxHQUFxRlAsYUFBYSxDQUFiLEVBQWdCUSxNQUFyRyxHQUE4RyxZQUE5RyxHQUE2SFIsYUFBYSxDQUFiLEVBQWdCTSxDQUE3SSxHQUFpSixHQUF2Szs7QUFFQSxNQUFJRyxnQkFBZ0JWLEtBQUtFLE1BQUwsQ0FBWSxVQUFTQyxHQUFULEVBQWE7QUFDNUMsVUFBT0EsSUFBSUMsSUFBSixJQUFZLElBQVosSUFBb0JELElBQUlFLEdBQUosSUFBVyxJQUF0QztBQUNBLEdBRm1CLENBQXBCO0FBR0EsT0FBS1IsUUFBTCxDQUFjUyxNQUFkLEdBQXVCLFFBQVFJLGNBQWMsQ0FBZCxFQUFpQkgsQ0FBekIsR0FBNkIsd0JBQTdCLEdBQXdERyxjQUFjLENBQWQsRUFBaUJGLEdBQXpFLEdBQStFLE9BQS9FLEdBQXlGRSxjQUFjLENBQWQsRUFBaUJELE1BQTFHLEdBQW1ILFlBQW5ILEdBQWtJQyxjQUFjLENBQWQsRUFBaUJILENBQW5KLEdBQXVKLEdBQTlLOztBQUVBLE1BQUlJLGlCQUFpQlgsS0FBS0UsTUFBTCxDQUFZLFVBQVNDLEdBQVQsRUFBYTtBQUM3QyxVQUFPQSxJQUFJQyxJQUFKLElBQVksS0FBWixJQUFxQkQsSUFBSUUsR0FBSixJQUFXLElBQXZDO0FBQ0EsR0FGb0IsQ0FBckI7QUFHQSxPQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBd0IsUUFBUUssZUFBZSxDQUFmLEVBQWtCSixDQUExQixHQUE4Qix5QkFBOUIsR0FBMERJLGVBQWUsQ0FBZixFQUFrQkgsR0FBNUUsR0FBa0YsT0FBbEYsR0FBNEZHLGVBQWUsQ0FBZixFQUFrQkYsTUFBOUcsR0FBdUgsWUFBdkgsR0FBc0lFLGVBQWUsQ0FBZixFQUFrQkosQ0FBeEosR0FBNEosR0FBcEw7QUFFQTtBQXhCTyxDQUFUIiwiZmlsZSI6IkV2ZW50TWluaVBva2VyLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHRleHQxMDA6ICAgY2MuTGFiZWwsXHJcblx0XHR0ZXh0MTAwMDogIGNjLkxhYmVsLFxyXG5cdFx0dGV4dDEwMDAwOiBjYy5MYWJlbCxcclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0dmFyIG1pbmlQb2tlcjEwMCA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHJldHVybiBvYmoudHlwZSA9PSAxMDAgJiYgb2JqLnJlZCA9PSB0cnVlXHJcblx0XHR9KTtcclxuXHRcdHRoaXMudGV4dDEwMC5zdHJpbmcgPSAnKiBYJyArIG1pbmlQb2tlcjEwMFswXS54ICsgJyBoxakgcGjDsm5nIDEwMCwgKHNhdSAnICsgbWluaVBva2VyMTAwWzBdLnRvWCArICcgaMWpLCAnICsgbWluaVBva2VyMTAwWzBdLmJhbGFucyArICcgaMWpIMSRxrDhu6NjIFgnICsgbWluaVBva2VyMTAwWzBdLnggKyAnKSc7XHJcblxyXG5cdFx0dmFyIG1pbmlQb2tlcjEwMDAgPSBkYXRhLmZpbHRlcihmdW5jdGlvbihvYmope1xyXG5cdFx0XHRyZXR1cm4gb2JqLnR5cGUgPT0gMTAwMCAmJiBvYmoucmVkID09IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZXh0MTAwMC5zdHJpbmcgPSAnKiBYJyArIG1pbmlQb2tlcjEwMDBbMF0ueCArICcgaMWpIHBow7JuZyAxLjAwMCwgKHNhdSAnICsgbWluaVBva2VyMTAwMFswXS50b1ggKyAnIGjFqSwgJyArIG1pbmlQb2tlcjEwMDBbMF0uYmFsYW5zICsgJyBoxakgxJHGsOG7o2MgWCcgKyBtaW5pUG9rZXIxMDAwWzBdLnggKyAnKSc7XHJcblxyXG5cdFx0dmFyIG1pbmlQb2tlcjEwMDAwID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0cmV0dXJuIG9iai50eXBlID09IDEwMDAwICYmIG9iai5yZWQgPT0gdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRleHQxMDAwMC5zdHJpbmcgPSAnKiBYJyArIG1pbmlQb2tlcjEwMDAwWzBdLnggKyAnIGjFqSBwaMOybmcgMTAuMDAwLCAoc2F1ICcgKyBtaW5pUG9rZXIxMDAwMFswXS50b1ggKyAnIGjFqSwgJyArIG1pbmlQb2tlcjEwMDAwWzBdLmJhbGFucyArICcgaMWpIMSRxrDhu6NjIFgnICsgbWluaVBva2VyMTAwMDBbMF0ueCArICcpJztcclxuXHJcblx0fSxcclxufSk7XHJcbiJdfQ==