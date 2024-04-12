
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/DEvent/EventAngrybird.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3da1fygKJVLg6AhCJ4o8/B/', 'EventAngrybird');
// Script/Model/Dialog/DEvent/EventAngrybird.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		text100: cc.Label,
		text1000: cc.Label,
		text10000: cc.Label
	},
	onData: function onData(data) {
		var arb100 = data.filter(function (obj) {
			return obj.type == 100 && obj.red == true;
		});
		this.text100.string = '* X' + arb100[0].x + ' hũ phòng 100, (sau ' + arb100[0].toX + ' hũ, ' + arb100[0].balans + ' hũ được X' + arb100[0].x + ')';

		var arb1000 = data.filter(function (obj) {
			return obj.type == 1000 && obj.red == true;
		});
		this.text1000.string = '* X' + arb1000[0].x + ' hũ phòng 1.000, (sau ' + arb1000[0].toX + ' hũ, ' + arb1000[0].balans + ' hũ được X' + arb1000[0].x + ')';

		var arb10000 = data.filter(function (obj) {
			return obj.type == 10000 && obj.red == true;
		});
		this.text10000.string = '* X' + arb10000[0].x + ' hũ phòng 10.000, (sau ' + arb10000[0].toX + ' hũ, ' + arb10000[0].balans + ' hũ được X' + arb10000[0].x + ')';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcREV2ZW50L2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxERXZlbnRcXEV2ZW50QW5ncnliaXJkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRleHQxMDAiLCJMYWJlbCIsInRleHQxMDAwIiwidGV4dDEwMDAwIiwib25EYXRhIiwiZGF0YSIsImFyYjEwMCIsImZpbHRlciIsIm9iaiIsInR5cGUiLCJyZWQiLCJzdHJpbmciLCJ4IiwidG9YIiwiYmFsYW5zIiwiYXJiMTAwMCIsImFyYjEwMDAwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsVUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsYUFBWTtBQUNSQyxXQUFXTCxHQUFHTSxLQUROO0FBRWRDLFlBQVdQLEdBQUdNLEtBRkE7QUFHZEUsYUFBV1IsR0FBR007QUFIQSxFQUhQO0FBUUxHLFNBQVEsZ0JBQVNDLElBQVQsRUFBZTtBQUN6QixNQUFJQyxTQUFTRCxLQUFLRSxNQUFMLENBQVksVUFBU0MsR0FBVCxFQUFhO0FBQ3JDLFVBQU9BLElBQUlDLElBQUosSUFBWSxHQUFaLElBQW1CRCxJQUFJRSxHQUFKLElBQVcsSUFBckM7QUFDQSxHQUZZLENBQWI7QUFHQSxPQUFLVixPQUFMLENBQWFXLE1BQWIsR0FBc0IsUUFBUUwsT0FBTyxDQUFQLEVBQVVNLENBQWxCLEdBQXNCLHNCQUF0QixHQUErQ04sT0FBTyxDQUFQLEVBQVVPLEdBQXpELEdBQStELE9BQS9ELEdBQXlFUCxPQUFPLENBQVAsRUFBVVEsTUFBbkYsR0FBNEYsWUFBNUYsR0FBMkdSLE9BQU8sQ0FBUCxFQUFVTSxDQUFySCxHQUF5SCxHQUEvSTs7QUFFQSxNQUFJRyxVQUFVVixLQUFLRSxNQUFMLENBQVksVUFBU0MsR0FBVCxFQUFhO0FBQ3RDLFVBQU9BLElBQUlDLElBQUosSUFBWSxJQUFaLElBQW9CRCxJQUFJRSxHQUFKLElBQVcsSUFBdEM7QUFDQSxHQUZhLENBQWQ7QUFHQSxPQUFLUixRQUFMLENBQWNTLE1BQWQsR0FBdUIsUUFBUUksUUFBUSxDQUFSLEVBQVdILENBQW5CLEdBQXVCLHdCQUF2QixHQUFrREcsUUFBUSxDQUFSLEVBQVdGLEdBQTdELEdBQW1FLE9BQW5FLEdBQTZFRSxRQUFRLENBQVIsRUFBV0QsTUFBeEYsR0FBaUcsWUFBakcsR0FBZ0hDLFFBQVEsQ0FBUixFQUFXSCxDQUEzSCxHQUErSCxHQUF0Sjs7QUFFQSxNQUFJSSxXQUFXWCxLQUFLRSxNQUFMLENBQVksVUFBU0MsR0FBVCxFQUFhO0FBQ3ZDLFVBQU9BLElBQUlDLElBQUosSUFBWSxLQUFaLElBQXFCRCxJQUFJRSxHQUFKLElBQVcsSUFBdkM7QUFDQSxHQUZjLENBQWY7QUFHQSxPQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBd0IsUUFBUUssU0FBUyxDQUFULEVBQVlKLENBQXBCLEdBQXdCLHlCQUF4QixHQUFvREksU0FBUyxDQUFULEVBQVlILEdBQWhFLEdBQXNFLE9BQXRFLEdBQWdGRyxTQUFTLENBQVQsRUFBWUYsTUFBNUYsR0FBcUcsWUFBckcsR0FBb0hFLFNBQVMsQ0FBVCxFQUFZSixDQUFoSSxHQUFvSSxHQUE1SjtBQUVBO0FBeEJPLENBQVQiLCJmaWxlIjoiRXZlbnRBbmdyeWJpcmQuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxERXZlbnQiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB0ZXh0MTAwOiAgIGNjLkxhYmVsLFxyXG5cdFx0dGV4dDEwMDA6ICBjYy5MYWJlbCxcclxuXHRcdHRleHQxMDAwMDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHR2YXIgYXJiMTAwID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0cmV0dXJuIG9iai50eXBlID09IDEwMCAmJiBvYmoucmVkID09IHRydWVcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy50ZXh0MTAwLnN0cmluZyA9ICcqIFgnICsgYXJiMTAwWzBdLnggKyAnIGjFqSBwaMOybmcgMTAwLCAoc2F1ICcgKyBhcmIxMDBbMF0udG9YICsgJyBoxaksICcgKyBhcmIxMDBbMF0uYmFsYW5zICsgJyBoxakgxJHGsOG7o2MgWCcgKyBhcmIxMDBbMF0ueCArICcpJztcclxuXHJcblx0XHR2YXIgYXJiMTAwMCA9IGRhdGEuZmlsdGVyKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHJldHVybiBvYmoudHlwZSA9PSAxMDAwICYmIG9iai5yZWQgPT0gdHJ1ZVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnRleHQxMDAwLnN0cmluZyA9ICcqIFgnICsgYXJiMTAwMFswXS54ICsgJyBoxakgcGjDsm5nIDEuMDAwLCAoc2F1ICcgKyBhcmIxMDAwWzBdLnRvWCArICcgaMWpLCAnICsgYXJiMTAwMFswXS5iYWxhbnMgKyAnIGjFqSDEkcaw4bujYyBYJyArIGFyYjEwMDBbMF0ueCArICcpJztcclxuXHJcblx0XHR2YXIgYXJiMTAwMDAgPSBkYXRhLmZpbHRlcihmdW5jdGlvbihvYmope1xyXG5cdFx0XHRyZXR1cm4gb2JqLnR5cGUgPT0gMTAwMDAgJiYgb2JqLnJlZCA9PSB0cnVlXHJcblx0XHR9KTtcclxuXHRcdHRoaXMudGV4dDEwMDAwLnN0cmluZyA9ICcqIFgnICsgYXJiMTAwMDBbMF0ueCArICcgaMWpIHBow7JuZyAxMC4wMDAsIChzYXUgJyArIGFyYjEwMDAwWzBdLnRvWCArICcgaMWpLCAnICsgYXJiMTAwMDBbMF0uYmFsYW5zICsgJyBoxakgxJHGsOG7o2MgWCcgKyBhcmIxMDAwMFswXS54ICsgJyknO1xyXG5cclxuXHR9LFxyXG59KTtcclxuIl19