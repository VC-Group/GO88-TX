
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/XoSo_Main_Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e57d5GbJYdPJaTehdXI/JqM', 'XoSo_Main_Main');
// Script/Game/XoSo/XoSo_Main_Main.js

'use strict';

var numberPad = require('Helper').numberPad;

cc.Class({
	extends: cc.Component,

	properties: {
		time_mb: cc.Label
	},

	update: function update(dt) {
		// Đích đến
		var countDownDate = new Date();
		countDownDate.setHours(18, 0, 0, 0, 0);
		countDownDate = countDownDate.getTime();
		// Lấy thời gian hiện tại
		var now = new Date().getTime();

		// Lấy số thời gian chênh lệch
		var distance = countDownDate - now;

		// HIển thị chuỗi thời gian trong thẻ p
		if (distance < 0) {
			this.time_mb.string = '';
		} else {
			// Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
			var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
			var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
			var seconds = Math.floor(distance % (1000 * 60) / 1000);
			this.time_mb.string = numberPad(hours, 2) + ':' + numberPad(minutes, 2) + ':' + numberPad(seconds, 2);
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxYb1NvX01haW5fTWFpbi5qcyJdLCJuYW1lcyI6WyJudW1iZXJQYWQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGltZV9tYiIsIkxhYmVsIiwidXBkYXRlIiwiZHQiLCJjb3VudERvd25EYXRlIiwiRGF0ZSIsInNldEhvdXJzIiwiZ2V0VGltZSIsIm5vdyIsImRpc3RhbmNlIiwic3RyaW5nIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJtaW51dGVzIiwic2Vjb25kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxZQUFZQyxRQUFRLFFBQVIsRUFBa0JELFNBQWxDOztBQUVBRSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxXQUFTTCxHQUFHTTtBQURELEVBSEo7O0FBT1JDLE9BUFEsa0JBT0FDLEVBUEEsRUFPSTtBQUNYO0FBQ0EsTUFBSUMsZ0JBQWdCLElBQUlDLElBQUosRUFBcEI7QUFDQ0QsZ0JBQWNFLFFBQWQsQ0FBdUIsRUFBdkIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEM7QUFDREYsa0JBQWdCQSxjQUFjRyxPQUFkLEVBQWhCO0FBQ0E7QUFDQSxNQUFJQyxNQUFNLElBQUlILElBQUosR0FBV0UsT0FBWCxFQUFWOztBQUVBO0FBQ0EsTUFBSUUsV0FBV0wsZ0JBQWdCSSxHQUEvQjs7QUFFQTtBQUNBLE1BQUlDLFdBQVcsQ0FBZixFQUFrQjtBQUNqQixRQUFLVCxPQUFMLENBQWFVLE1BQWIsR0FBc0IsRUFBdEI7QUFDQSxHQUZELE1BRUs7QUFDSjtBQUNBLE9BQUlDLFFBQVFDLEtBQUtDLEtBQUwsQ0FBWUosWUFBWSxPQUFPLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQTdCLENBQUQsSUFBc0MsT0FBTyxFQUFQLEdBQVksRUFBbEQsQ0FBWCxDQUFaO0FBQ0EsT0FBSUssVUFBVUYsS0FBS0MsS0FBTCxDQUFZSixZQUFZLE9BQU8sRUFBUCxHQUFZLEVBQXhCLENBQUQsSUFBaUMsT0FBTyxFQUF4QyxDQUFYLENBQWQ7QUFDQSxPQUFJTSxVQUFVSCxLQUFLQyxLQUFMLENBQVlKLFlBQVksT0FBTyxFQUFuQixDQUFELEdBQTJCLElBQXRDLENBQWQ7QUFDQSxRQUFLVCxPQUFMLENBQWFVLE1BQWIsR0FBc0JqQixVQUFVa0IsS0FBVixFQUFpQixDQUFqQixJQUFzQixHQUF0QixHQUE0QmxCLFVBQVVxQixPQUFWLEVBQW1CLENBQW5CLENBQTVCLEdBQW9ELEdBQXBELEdBQTBEckIsVUFBVXNCLE9BQVYsRUFBbUIsQ0FBbkIsQ0FBaEY7QUFDQTtBQUNEO0FBNUJPLENBQVQiLCJmaWxlIjoiWG9Tb19NYWluX01haW4uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU28iLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IG51bWJlclBhZCA9IHJlcXVpcmUoJ0hlbHBlcicpLm51bWJlclBhZDtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdHRpbWVfbWI6IGNjLkxhYmVsLFxyXG5cdH0sXHJcblxyXG5cdHVwZGF0ZSAoZHQpIHtcclxuXHRcdC8vIMSQw61jaCDEkeG6v25cclxuXHRcdGxldCBjb3VudERvd25EYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0Y291bnREb3duRGF0ZS5zZXRIb3VycygxOCwgMCwgMCwgMCwgMCk7XHJcblx0XHRjb3VudERvd25EYXRlID0gY291bnREb3duRGF0ZS5nZXRUaW1lKCk7XHJcblx0XHQvLyBM4bqleSB0aOG7nWkgZ2lhbiBoaeG7h24gdOG6oWlcclxuXHRcdGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHQgXHJcblx0XHQvLyBM4bqleSBz4buRIHRo4budaSBnaWFuIGNow6puaCBs4buHY2hcclxuXHRcdGxldCBkaXN0YW5jZSA9IGNvdW50RG93bkRhdGUgLSBub3c7XHJcblx0IFxyXG5cdFx0Ly8gSEnhu4NuIHRo4buLIGNodeG7l2kgdGjhu51pIGdpYW4gdHJvbmcgdGjhursgcFxyXG5cdFx0aWYgKGRpc3RhbmNlIDwgMCkge1xyXG5cdFx0XHR0aGlzLnRpbWVfbWIuc3RyaW5nID0gJyc7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Ly8gVMOtbmggdG/DoW4gc+G7kSBuZ8OgeSwgZ2nhu50sIHBow7p0LCBnacOieSB04burIHRo4budaSBnaWFuIGNow6puaCBs4buHY2hcclxuXHRcdFx0bGV0IGhvdXJzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjAgKiAyNCkpIC8gKDEwMDAgKiA2MCAqIDYwKSk7XHJcblx0XHRcdGxldCBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcclxuXHRcdFx0bGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjApKSAvIDEwMDApO1xyXG5cdFx0XHR0aGlzLnRpbWVfbWIuc3RyaW5nID0gbnVtYmVyUGFkKGhvdXJzLCAyKSArICc6JyArIG51bWJlclBhZChtaW51dGVzLCAyKSArICc6JyArIG51bWJlclBhZChzZWNvbmRzLCAyKTtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19