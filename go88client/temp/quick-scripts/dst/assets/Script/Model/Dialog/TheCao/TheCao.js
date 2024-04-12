
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/TheCao/TheCao.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '676e1K7f8tL+pOgcGRRKm5C', 'TheCao');
// Script/Model/Dialog/TheCao/TheCao.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {},

	init: function init() {
		this.TheCao = this.node.children.map(function (obj) {
			return obj.getComponent('TheCao_item');
		});
	},

	onEnable: function onEnable() {
		this.node.runAction(cc.RedT.inGame.dialog.actionShow);
	},
	onDisable: function onDisable() {
		cc.RedT.inGame.dialog.resetSizeDialog(this.node);
	},
	onData: function onData(data) {
		this.setData(data);
		cc.RedT.inGame.loading.active = false;
		if (cc.RedT.inGame.dialog.objShow) {
			cc.RedT.inGame.dialog.objShow.active = false;
			this.node.previous = cc.RedT.inGame.dialog.objShow;
		}
		this.node.active = cc.RedT.inGame.dialog.node.active = true;
		cc.RedT.inGame.dialog.objShow = this.node;
	},
	getData: function getData(id) {
		cc.RedT.inGame.loading.active = true;
		cc.RedT.send({ user: { history: { the_cao: id } } });
	},
	setData: function setData(data) {
		this.TheCao.forEach(function (TheCao, index) {
			var info = data[index];
			if (void 0 !== info) {
				TheCao.node.active = true;
				TheCao.NhaMang.string = info.nhaMang;
				TheCao.MenhGia.string = Helper.numberWithCommas(info.menhGia);
				TheCao.SoThe.string = info.maThe;
				TheCao.Seri.string = info.seri;
				TheCao.HetHan.string = info.time;
			} else {
				TheCao.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcVGhlQ2FvLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcVGhlQ2FvL2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxUaGVDYW9cXFRoZUNhby5qcyJdLCJuYW1lcyI6WyJIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdCIsIlRoZUNhbyIsIm5vZGUiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsImdldENvbXBvbmVudCIsIm9uRW5hYmxlIiwicnVuQWN0aW9uIiwiUmVkVCIsImluR2FtZSIsImRpYWxvZyIsImFjdGlvblNob3ciLCJvbkRpc2FibGUiLCJyZXNldFNpemVEaWFsb2ciLCJvbkRhdGEiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJhY3RpdmUiLCJvYmpTaG93IiwicHJldmlvdXMiLCJnZXREYXRhIiwiaWQiLCJzZW5kIiwidXNlciIsImhpc3RvcnkiLCJ0aGVfY2FvIiwiZm9yRWFjaCIsImluZGV4IiwiaW5mbyIsIk5oYU1hbmciLCJzdHJpbmciLCJuaGFNYW5nIiwiTWVuaEdpYSIsIm51bWJlcldpdGhDb21tYXMiLCJtZW5oR2lhIiwiU29UaGUiLCJtYVRoZSIsIlNlcmkiLCJzZXJpIiwiSGV0SGFuIiwidGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVksRUFISjs7QUFNUkMsS0FOUSxrQkFNRDtBQUNOLE9BQUtDLE1BQUwsR0FBYyxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQVNDLEdBQVQsRUFBYTtBQUNqRCxVQUFPQSxJQUFJQyxZQUFKLENBQWlCLGFBQWpCLENBQVA7QUFDQSxHQUZhLENBQWQ7QUFHQSxFQVZPOztBQVdSQyxXQUFVLG9CQUFZO0FBQ3JCLE9BQUtMLElBQUwsQ0FBVU0sU0FBVixDQUFvQmIsR0FBR2MsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JDLFVBQTFDO0FBQ0EsRUFiTztBQWNSQyxZQUFXLHFCQUFZO0FBQ3RCbEIsS0FBR2MsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JHLGVBQXRCLENBQXNDLEtBQUtaLElBQTNDO0FBQ0EsRUFoQk87QUFpQlJhLFNBQVEsZ0JBQVNDLElBQVQsRUFBYztBQUNyQixPQUFLQyxPQUFMLENBQWFELElBQWI7QUFDQXJCLEtBQUdjLElBQUgsQ0FBUUMsTUFBUixDQUFlUSxPQUFmLENBQXVCQyxNQUF2QixHQUFnQyxLQUFoQztBQUNBLE1BQUl4QixHQUFHYyxJQUFILENBQVFDLE1BQVIsQ0FBZUMsTUFBZixDQUFzQlMsT0FBMUIsRUFBbUM7QUFDbEN6QixNQUFHYyxJQUFILENBQVFDLE1BQVIsQ0FBZUMsTUFBZixDQUFzQlMsT0FBdEIsQ0FBOEJELE1BQTlCLEdBQXVDLEtBQXZDO0FBQ0EsUUFBS2pCLElBQUwsQ0FBVW1CLFFBQVYsR0FBcUIxQixHQUFHYyxJQUFILENBQVFDLE1BQVIsQ0FBZUMsTUFBZixDQUFzQlMsT0FBM0M7QUFDQTtBQUNELE9BQUtsQixJQUFMLENBQVVpQixNQUFWLEdBQW1CeEIsR0FBR2MsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JULElBQXRCLENBQTJCaUIsTUFBM0IsR0FBb0MsSUFBdkQ7QUFDQXhCLEtBQUdjLElBQUgsQ0FBUUMsTUFBUixDQUFlQyxNQUFmLENBQXNCUyxPQUF0QixHQUFnQyxLQUFLbEIsSUFBckM7QUFDQSxFQTFCTztBQTJCUm9CLFVBQVMsaUJBQVNDLEVBQVQsRUFBWTtBQUNwQjVCLEtBQUdjLElBQUgsQ0FBUUMsTUFBUixDQUFlUSxPQUFmLENBQXVCQyxNQUF2QixHQUFnQyxJQUFoQztBQUNBeEIsS0FBR2MsSUFBSCxDQUFRZSxJQUFSLENBQWEsRUFBQ0MsTUFBSyxFQUFDQyxTQUFRLEVBQUNDLFNBQVNKLEVBQVYsRUFBVCxFQUFOLEVBQWI7QUFDQSxFQTlCTztBQStCUk4sVUFBUyxpQkFBU0QsSUFBVCxFQUFjO0FBQ3RCLE9BQUtmLE1BQUwsQ0FBWTJCLE9BQVosQ0FBb0IsVUFBUzNCLE1BQVQsRUFBaUI0QixLQUFqQixFQUF1QjtBQUMxQyxPQUFJQyxPQUFPZCxLQUFLYSxLQUFMLENBQVg7QUFDQSxPQUFJLEtBQUssQ0FBTCxLQUFXQyxJQUFmLEVBQW9CO0FBQ25CN0IsV0FBT0MsSUFBUCxDQUFZaUIsTUFBWixHQUFxQixJQUFyQjtBQUNBbEIsV0FBTzhCLE9BQVAsQ0FBZUMsTUFBZixHQUF3QkYsS0FBS0csT0FBN0I7QUFDQWhDLFdBQU9pQyxPQUFQLENBQWVGLE1BQWYsR0FBd0J2QyxPQUFPMEMsZ0JBQVAsQ0FBd0JMLEtBQUtNLE9BQTdCLENBQXhCO0FBQ0FuQyxXQUFPb0MsS0FBUCxDQUFhTCxNQUFiLEdBQXdCRixLQUFLUSxLQUE3QjtBQUNBckMsV0FBT3NDLElBQVAsQ0FBWVAsTUFBWixHQUF3QkYsS0FBS1UsSUFBN0I7QUFDQXZDLFdBQU93QyxNQUFQLENBQWNULE1BQWQsR0FBd0JGLEtBQUtZLElBQTdCO0FBQ0EsSUFQRCxNQU9LO0FBQ0p6QyxXQUFPQyxJQUFQLENBQVlpQixNQUFaLEdBQXFCLEtBQXJCO0FBQ0E7QUFDRCxHQVpEO0FBYUE7QUE3Q08sQ0FBVCIsImZpbGUiOiJUaGVDYW8uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxUaGVDYW8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdH0sXHJcblxyXG5cdGluaXQoKSB7XHJcblx0XHR0aGlzLlRoZUNhbyA9IHRoaXMubm9kZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0cmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ1RoZUNhb19pdGVtJyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLm5vZGUucnVuQWN0aW9uKGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5hY3Rpb25TaG93KTtcclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUuZGlhbG9nLnJlc2V0U2l6ZURpYWxvZyh0aGlzLm5vZGUpO1xyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdHRoaXMuc2V0RGF0YShkYXRhKTtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLmxvYWRpbmcuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRpZiAoY2MuUmVkVC5pbkdhbWUuZGlhbG9nLm9ialNob3cpIHtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuZGlhbG9nLm9ialNob3cuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubm9kZS5wcmV2aW91cyA9IGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5vYmpTaG93O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRjYy5SZWRULmluR2FtZS5kaWFsb2cub2JqU2hvdyA9IHRoaXMubm9kZTtcclxuXHR9LFxyXG5cdGdldERhdGE6IGZ1bmN0aW9uKGlkKXtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdGNjLlJlZFQuc2VuZCh7dXNlcjp7aGlzdG9yeTp7dGhlX2NhbzogaWR9fX0pO1xyXG5cdH0sXHJcblx0c2V0RGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLlRoZUNhby5mb3JFYWNoKGZ1bmN0aW9uKFRoZUNhbywgaW5kZXgpe1xyXG5cdFx0XHR2YXIgaW5mbyA9IGRhdGFbaW5kZXhdO1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBpbmZvKXtcclxuXHRcdFx0XHRUaGVDYW8ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdFRoZUNhby5OaGFNYW5nLnN0cmluZyA9IGluZm8ubmhhTWFuZztcclxuXHRcdFx0XHRUaGVDYW8uTWVuaEdpYS5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhpbmZvLm1lbmhHaWEpO1xyXG5cdFx0XHRcdFRoZUNhby5Tb1RoZS5zdHJpbmcgICA9IGluZm8ubWFUaGU7XHJcblx0XHRcdFx0VGhlQ2FvLlNlcmkuc3RyaW5nICAgID0gaW5mby5zZXJpO1xyXG5cdFx0XHRcdFRoZUNhby5IZXRIYW4uc3RyaW5nICA9IGluZm8udGltZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0VGhlQ2FvLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=