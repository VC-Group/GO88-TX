
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/TheCao/TheCao_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6bcb3yYhadCDJYjR6a7bVNL', 'TheCao_item');
// Script/Model/Dialog/TheCao/TheCao_item.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		NhaMang: {
			default: null,
			type: cc.Label
		},
		MenhGia: {
			default: null,
			type: cc.Label
		},
		SoThe: {
			default: null,
			type: cc.Label
		},
		Seri: {
			default: null,
			type: cc.Label
		},
		HetHan: {
			default: null,
			type: cc.Label
		}
	},
	CopyToClipboard: function CopyToClipboard() {
		cc.RedT.CopyToClipboard(this.NhaMang.string + ' - Mã thẻ: ' + this.SoThe.string + ' - Seri: ' + this.Seri.string + '');
		cc.RedT.inGame.noticeCopy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcVGhlQ2FvLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcVGhlQ2FvL2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxUaGVDYW9cXFRoZUNhb19pdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIk5oYU1hbmciLCJkZWZhdWx0IiwidHlwZSIsIkxhYmVsIiwiTWVuaEdpYSIsIlNvVGhlIiwiU2VyaSIsIkhldEhhbiIsIkNvcHlUb0NsaXBib2FyZCIsIlJlZFQiLCJzdHJpbmciLCJpbkdhbWUiLCJub3RpY2VDb3B5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxXQUFTO0FBQ1JDLFlBQVMsSUFERDtBQUVSQyxTQUFTUCxHQUFHUTtBQUZKLEdBREU7QUFLWEMsV0FBUztBQUNSSCxZQUFTLElBREQ7QUFFUkMsU0FBU1AsR0FBR1E7QUFGSixHQUxFO0FBU1hFLFNBQU87QUFDTkosWUFBUyxJQURIO0FBRU5DLFNBQVNQLEdBQUdRO0FBRk4sR0FUSTtBQWFYRyxRQUFNO0FBQ0xMLFlBQVMsSUFESjtBQUVMQyxTQUFTUCxHQUFHUTtBQUZQLEdBYks7QUFpQlhJLFVBQVE7QUFDUE4sWUFBUyxJQURGO0FBRVBDLFNBQVNQLEdBQUdRO0FBRkw7QUFqQkcsRUFISjtBQXlCUkssa0JBQWlCLDJCQUFVO0FBQzFCYixLQUFHYyxJQUFILENBQVFELGVBQVIsQ0FBd0IsS0FBS1IsT0FBTCxDQUFhVSxNQUFiLEdBQW9CLGFBQXBCLEdBQWtDLEtBQUtMLEtBQUwsQ0FBV0ssTUFBN0MsR0FBb0QsV0FBcEQsR0FBZ0UsS0FBS0osSUFBTCxDQUFVSSxNQUExRSxHQUFpRixFQUF6RztBQUNBZixLQUFHYyxJQUFILENBQVFFLE1BQVIsQ0FBZUMsVUFBZjtBQUNBO0FBNUJPLENBQVQiLCJmaWxlIjoiVGhlQ2FvX2l0ZW0uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxUaGVDYW8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0TmhhTWFuZzoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiAgICBjYy5MYWJlbCxcclxuXHRcdH0sXHJcblx0XHRNZW5oR2lhOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6ICAgIGNjLkxhYmVsLFxyXG5cdFx0fSxcclxuXHRcdFNvVGhlOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6ICAgIGNjLkxhYmVsLFxyXG5cdFx0fSxcclxuXHRcdFNlcmk6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogICAgY2MuTGFiZWwsXHJcblx0XHR9LFxyXG5cdFx0SGV0SGFuOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6ICAgIGNjLkxhYmVsLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdENvcHlUb0NsaXBib2FyZDogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuQ29weVRvQ2xpcGJvYXJkKHRoaXMuTmhhTWFuZy5zdHJpbmcrJyAtIE3DoyB0aOG6uzogJyt0aGlzLlNvVGhlLnN0cmluZysnIC0gU2VyaTogJyt0aGlzLlNlcmkuc3RyaW5nKycnKTtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLm5vdGljZUNvcHkoKTtcclxuXHR9LFxyXG59KTtcclxuIl19