
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/XoSo_select_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '61675TPqG5KgLFHTaCss4/w', 'XoSo_select_item');
// Script/Game/XoSo/XoSo_select_item.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		nodeOn: cc.Node,
		nodeOff: cc.Node,
		text: cc.Label,
		select: false
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	onChanger: function onChanger() {
		this.select = !this.select;
		this.nodeOn.active = this.select;
		this.nodeOff.active = !this.select;
	},
	onClickSelect: function onClickSelect() {
		this.onChanger();
		this.RedT.refreshH(this);
	},
	selectOn: function selectOn() {
		this.select = true;
		this.nodeOn.active = true;
		this.nodeOff.active = false;
	},
	selectOff: function selectOff() {
		this.select = false;
		this.nodeOn.active = false;
		this.nodeOff.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxYb1NvX3NlbGVjdF9pdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5vZGVPbiIsIk5vZGUiLCJub2RlT2ZmIiwidGV4dCIsIkxhYmVsIiwic2VsZWN0IiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJvbkNoYW5nZXIiLCJhY3RpdmUiLCJvbkNsaWNrU2VsZWN0IiwicmVmcmVzaEgiLCJzZWxlY3RPbiIsInNlbGVjdE9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsVUFBU0wsR0FBR00sSUFERDtBQUVYQyxXQUFTUCxHQUFHTSxJQUZEO0FBR1hFLFFBQVNSLEdBQUdTLEtBSEQ7QUFJWEMsVUFBUztBQUpFLEVBSEo7QUFTUkMsT0FBTSxjQUFTQyxHQUFULEVBQWE7QUFDbEIsT0FBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsRUFYTztBQVlSRSxZQUFXLHFCQUFVO0FBQ3BCLE9BQUtKLE1BQUwsR0FBc0IsQ0FBQyxLQUFLQSxNQUE1QjtBQUNBLE9BQUtMLE1BQUwsQ0FBWVUsTUFBWixHQUFzQixLQUFLTCxNQUEzQjtBQUNBLE9BQUtILE9BQUwsQ0FBYVEsTUFBYixHQUFzQixDQUFDLEtBQUtMLE1BQTVCO0FBQ0EsRUFoQk87QUFpQlJNLGdCQUFlLHlCQUFXO0FBQ3pCLE9BQUtGLFNBQUw7QUFDQSxPQUFLRCxJQUFMLENBQVVJLFFBQVYsQ0FBbUIsSUFBbkI7QUFDQSxFQXBCTztBQXFCUkMsV0FBVSxvQkFBVTtBQUNuQixPQUFLUixNQUFMLEdBQXNCLElBQXRCO0FBQ0EsT0FBS0wsTUFBTCxDQUFZVSxNQUFaLEdBQXNCLElBQXRCO0FBQ0EsT0FBS1IsT0FBTCxDQUFhUSxNQUFiLEdBQXNCLEtBQXRCO0FBQ0EsRUF6Qk87QUEwQlJJLFlBQVcscUJBQVU7QUFDcEIsT0FBS1QsTUFBTCxHQUFzQixLQUF0QjtBQUNBLE9BQUtMLE1BQUwsQ0FBWVUsTUFBWixHQUFzQixLQUF0QjtBQUNBLE9BQUtSLE9BQUwsQ0FBYVEsTUFBYixHQUFzQixJQUF0QjtBQUNBO0FBOUJPLENBQVQiLCJmaWxlIjoiWG9Tb19zZWxlY3RfaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9TbyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRub2RlT246ICBjYy5Ob2RlLFxyXG5cdFx0bm9kZU9mZjogY2MuTm9kZSxcclxuXHRcdHRleHQ6ICAgIGNjLkxhYmVsLFxyXG5cdFx0c2VsZWN0OiAgZmFsc2UsXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbihvYmope1xyXG5cdFx0dGhpcy5SZWRUID0gb2JqO1xyXG5cdH0sXHJcblx0b25DaGFuZ2VyOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zZWxlY3QgICAgICAgICA9ICF0aGlzLnNlbGVjdDtcclxuXHRcdHRoaXMubm9kZU9uLmFjdGl2ZSAgPSB0aGlzLnNlbGVjdDtcclxuXHRcdHRoaXMubm9kZU9mZi5hY3RpdmUgPSAhdGhpcy5zZWxlY3Q7XHJcblx0fSxcclxuXHRvbkNsaWNrU2VsZWN0OiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMub25DaGFuZ2VyKCk7XHJcblx0XHR0aGlzLlJlZFQucmVmcmVzaEgodGhpcyk7XHJcblx0fSxcclxuXHRzZWxlY3RPbjogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc2VsZWN0ICAgICAgICAgPSB0cnVlO1xyXG5cdFx0dGhpcy5ub2RlT24uYWN0aXZlICA9IHRydWU7XHJcblx0XHR0aGlzLm5vZGVPZmYuYWN0aXZlID0gZmFsc2U7XHJcblx0fSxcclxuXHRzZWxlY3RPZmY6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnNlbGVjdCAgICAgICAgID0gZmFsc2U7XHJcblx0XHR0aGlzLm5vZGVPbi5hY3RpdmUgID0gZmFsc2U7XHJcblx0XHR0aGlzLm5vZGVPZmYuYWN0aXZlID0gdHJ1ZTtcclxuXHR9LFxyXG59KTtcclxuIl19