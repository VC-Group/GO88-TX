
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/BanCa_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b952dHT2VlLw4NR3GRh7bnP', 'BanCa_dialog');
// Script/Game/BanCa/BanCa_dialog.js

'use strict';

var Fish_nap = require('Fish_nap');
var Fish_history = require('Fish_history');
var Fish_setting = require('Fish_setting');

cc.Class({
	extends: cc.Component,
	properties: {
		Fish_nap: Fish_nap,
		Fish_history: Fish_history,
		Fish_fish: cc.Node,
		Fish_setting: Fish_setting
	},
	init: function init() {
		this.actionShow = cc.spawn(cc.scaleTo(0.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(0.5, 255));
		this.objShow = null;
		this.objTmp = null;
		this.Fish_setting.init();
	},

	onClickBack: function onClickBack() {
		cc.RedT.inGame.playClick();
		this.onBack();
	},
	onBack: function onBack() {
		if (this.objShow != null) {
			if (void 0 == this.objShow.previous || null == this.objShow.previous) {
				this.objShow.active = false;
				this.node.active = false;
				this.objShow = null;
			} else {
				this.objTmp = this.objShow;
				this.objShow = this.objShow.previous;
				this.objTmp.previous = null;
				this.objTmp.active = false;
				this.objShow.active = true;
				this.objTmp = null;
			}
		} else {
			this.node.active = false;
		}
	},
	onClosePrevious: function onClosePrevious(obj) {
		if (void 0 !== obj.previous && null !== obj.previous) {
			this.onClosePrevious(obj.previous);
			delete obj.previous;
			//obj.previous = null;
		}
		obj.active = false;
	},
	onCloseDialog: function onCloseDialog() {
		if (this.objShow != null) {
			if (void 0 == this.objShow.previous || null == this.objShow.previous) {
				this.objShow.active = this.node.active = false;
				this.objShow = null;
			} else {
				this.onClosePrevious(this.objShow.previous);
				this.objShow.active = this.node.active = false;
				delete this.objShow.previous;
				//this.objShow.previous        = null;
				this.objShow = null;
			}
		} else {
			this.node.active = false;
		}
	},

	resetSizeDialog: function resetSizeDialog(node) {
		node.stopAllActions();
		node.scale = 0.5;
		node.opacity = 0;
	},

	/**
  * Function Show Dialog
 */
	showNap: function showNap() {
		var back = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

		this.node.active = this.Fish_nap.node.active = true;
		this.objShow = this.Fish_nap.node;
		if (back === true) {
			this.Fish_nap.outGame = true;
		}
	},
	showHistory: function showHistory() {
		this.node.active = this.Fish_history.node.active = true;
		this.objShow = this.Fish_history.node;
	},
	showFish: function showFish() {
		this.node.active = this.Fish_fish.active = true;
		this.objShow = this.Fish_fish;
	},
	showSetting: function showSetting() {
		this.node.active = this.Fish_setting.node.active = true;
		this.objShow = this.Fish_setting.node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2EvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxCYW5DYV9kaWFsb2cuanMiXSwibmFtZXMiOlsiRmlzaF9uYXAiLCJyZXF1aXJlIiwiRmlzaF9oaXN0b3J5IiwiRmlzaF9zZXR0aW5nIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiRmlzaF9maXNoIiwiTm9kZSIsImluaXQiLCJhY3Rpb25TaG93Iiwic3Bhd24iLCJzY2FsZVRvIiwiZWFzaW5nIiwiZWFzZUJhY2tPdXQiLCJmYWRlVG8iLCJvYmpTaG93Iiwib2JqVG1wIiwib25DbGlja0JhY2siLCJSZWRUIiwiaW5HYW1lIiwicGxheUNsaWNrIiwib25CYWNrIiwicHJldmlvdXMiLCJhY3RpdmUiLCJub2RlIiwib25DbG9zZVByZXZpb3VzIiwib2JqIiwib25DbG9zZURpYWxvZyIsInJlc2V0U2l6ZURpYWxvZyIsInN0b3BBbGxBY3Rpb25zIiwic2NhbGUiLCJvcGFjaXR5Iiwic2hvd05hcCIsImJhY2siLCJvdXRHYW1lIiwic2hvd0hpc3RvcnkiLCJzaG93RmlzaCIsInNob3dTZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFdBQWVDLFFBQVEsVUFBUixDQUFuQjtBQUNBLElBQUlDLGVBQWVELFFBQVEsY0FBUixDQUFuQjtBQUNBLElBQUlFLGVBQWVGLFFBQVEsY0FBUixDQUFuQjs7QUFFQUcsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7QUFFUkMsYUFBWTtBQUNYUixZQUFjQSxRQURIO0FBRVhFLGdCQUFjQSxZQUZIO0FBR1hPLGFBQWNMLEdBQUdNLElBSE47QUFJWFAsZ0JBQWNBO0FBSkgsRUFGSjtBQVFS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QUFBLE1BQWJDLElBQWEsdUVBQU4sS0FBTTs7QUFDOUIsT0FBS1QsSUFBTCxDQUFVRCxNQUFWLEdBQW1CLEtBQUsxQixRQUFMLENBQWMyQixJQUFkLENBQW1CRCxNQUFuQixHQUE0QixJQUEvQztBQUNBLE9BQUtSLE9BQUwsR0FBbUIsS0FBS2xCLFFBQUwsQ0FBYzJCLElBQWpDO0FBQ0EsTUFBSVMsU0FBUyxJQUFiLEVBQW1CO0FBQ2xCLFFBQUtwQyxRQUFMLENBQWNxQyxPQUFkLEdBQXdCLElBQXhCO0FBQ0E7QUFDRCxFQTdFTztBQThFUkMsY0FBYSx1QkFBVTtBQUN0QixPQUFLWCxJQUFMLENBQVVELE1BQVYsR0FBbUIsS0FBS3hCLFlBQUwsQ0FBa0J5QixJQUFsQixDQUF1QkQsTUFBdkIsR0FBZ0MsSUFBbkQ7QUFDQSxPQUFLUixPQUFMLEdBQW1CLEtBQUtoQixZQUFMLENBQWtCeUIsSUFBckM7QUFDQSxFQWpGTztBQWtGUlksV0FBVSxvQkFBVTtBQUNuQixPQUFLWixJQUFMLENBQVVELE1BQVYsR0FBbUIsS0FBS2pCLFNBQUwsQ0FBZWlCLE1BQWYsR0FBd0IsSUFBM0M7QUFDQSxPQUFLUixPQUFMLEdBQW1CLEtBQUtULFNBQXhCO0FBQ0EsRUFyRk87QUFzRlIrQixjQUFhLHVCQUFVO0FBQ3RCLE9BQUtiLElBQUwsQ0FBVUQsTUFBVixHQUFtQixLQUFLdkIsWUFBTCxDQUFrQndCLElBQWxCLENBQXVCRCxNQUF2QixHQUFnQyxJQUFuRDtBQUNBLE9BQUtSLE9BQUwsR0FBbUIsS0FBS2YsWUFBTCxDQUFrQndCLElBQXJDO0FBQ0E7QUF6Rk8sQ0FBVCIsImZpbGUiOiJCYW5DYV9kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBGaXNoX25hcCAgICAgPSByZXF1aXJlKCdGaXNoX25hcCcpO1xyXG52YXIgRmlzaF9oaXN0b3J5ID0gcmVxdWlyZSgnRmlzaF9oaXN0b3J5Jyk7XHJcbnZhciBGaXNoX3NldHRpbmcgPSByZXF1aXJlKCdGaXNoX3NldHRpbmcnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0RmlzaF9uYXA6ICAgICBGaXNoX25hcCxcclxuXHRcdEZpc2hfaGlzdG9yeTogRmlzaF9oaXN0b3J5LFxyXG5cdFx0RmlzaF9maXNoOiAgICBjYy5Ob2RlLFxyXG5cdFx0RmlzaF9zZXR0aW5nOiBGaXNoX3NldHRpbmcsXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuYWN0aW9uU2hvdyA9IGNjLnNwYXduKGNjLnNjYWxlVG8oMC41LCAxKS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoMi41KSksIGNjLmZhZGVUbygwLjUsIDI1NSkpO1xyXG5cdFx0dGhpcy5vYmpTaG93ICAgID0gbnVsbDtcclxuXHRcdHRoaXMub2JqVG1wICAgICA9IG51bGw7XHJcblx0XHR0aGlzLkZpc2hfc2V0dGluZy5pbml0KCk7XHJcblx0fSxcclxuXHJcblx0b25DbGlja0JhY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULmluR2FtZS5wbGF5Q2xpY2soKTtcclxuXHRcdHRoaXMub25CYWNrKCk7XHJcblx0fSxcclxuXHRvbkJhY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZih0aGlzLm9ialNob3cgIT0gbnVsbCl7XHJcblx0XHRcdGlmKHZvaWQgMCA9PSB0aGlzLm9ialNob3cucHJldmlvdXMgfHwgbnVsbCA9PSB0aGlzLm9ialNob3cucHJldmlvdXMpe1xyXG5cdFx0XHRcdHRoaXMub2JqU2hvdy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm5vZGUuYWN0aXZlICAgID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy5vYmpTaG93ICAgICAgICA9IG51bGw7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMub2JqVG1wICAgICAgICAgICAgICA9IHRoaXMub2JqU2hvdztcclxuXHRcdFx0XHR0aGlzLm9ialNob3cgICAgICAgICAgICAgPSB0aGlzLm9ialNob3cucHJldmlvdXM7XHJcblx0XHRcdFx0dGhpcy5vYmpUbXAucHJldmlvdXMgICAgID0gbnVsbDtcclxuXHRcdFx0XHR0aGlzLm9ialRtcC5hY3RpdmUgICAgICAgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLm9ialNob3cuYWN0aXZlICAgICAgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMub2JqVG1wICAgICAgICAgICAgICA9IG51bGw7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkNsb3NlUHJldmlvdXM6IGZ1bmN0aW9uKG9iail7XHJcblx0XHRpZih2b2lkIDAgIT09IG9iai5wcmV2aW91cyAmJiBudWxsICE9PSBvYmoucHJldmlvdXMpe1xyXG5cdFx0XHR0aGlzLm9uQ2xvc2VQcmV2aW91cyhvYmoucHJldmlvdXMpO1xyXG5cdFx0XHRkZWxldGUgb2JqLnByZXZpb3VzO1xyXG5cdFx0XHQvL29iai5wcmV2aW91cyA9IG51bGw7XHJcblx0XHR9XHJcblx0XHRvYmouYWN0aXZlID0gZmFsc2U7XHJcblx0fSxcclxuXHRvbkNsb3NlRGlhbG9nOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYodGhpcy5vYmpTaG93ICE9IG51bGwpe1xyXG5cdFx0XHRpZih2b2lkIDAgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzIHx8IG51bGwgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzKXtcclxuXHRcdFx0XHR0aGlzLm9ialNob3cuYWN0aXZlID0gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMub2JqU2hvdyAgICAgICAgPSBudWxsO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLm9uQ2xvc2VQcmV2aW91cyh0aGlzLm9ialNob3cucHJldmlvdXMpO1xyXG5cdFx0XHRcdHRoaXMub2JqU2hvdy5hY3RpdmUgICAgICAgICAgPSB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMub2JqU2hvdy5wcmV2aW91cztcclxuXHRcdFx0XHQvL3RoaXMub2JqU2hvdy5wcmV2aW91cyAgICAgICAgPSBudWxsO1xyXG5cdFx0XHRcdHRoaXMub2JqU2hvdyAgICAgICAgICAgICAgICAgPSBudWxsO1xyXG5cdFx0XHR9XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0cmVzZXRTaXplRGlhbG9nOiBmdW5jdGlvbihub2RlKXtcclxuXHRcdG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHRcdG5vZGUuc2NhbGUgICA9IDAuNTtcclxuXHRcdG5vZGUub3BhY2l0eSA9IDA7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb24gU2hvdyBEaWFsb2dcclxuXHQqL1xyXG5cdHNob3dOYXA6IGZ1bmN0aW9uKGJhY2sgPSBmYWxzZSl7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5GaXNoX25hcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLm9ialNob3cgICAgID0gdGhpcy5GaXNoX25hcC5ub2RlO1xyXG5cdFx0aWYgKGJhY2sgPT09IHRydWUpIHtcclxuXHRcdFx0dGhpcy5GaXNoX25hcC5vdXRHYW1lID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHNob3dIaXN0b3J5OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuRmlzaF9oaXN0b3J5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLkZpc2hfaGlzdG9yeS5ub2RlO1xyXG5cdH0sXHJcblx0c2hvd0Zpc2g6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5GaXNoX2Zpc2guYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLkZpc2hfZmlzaDtcclxuXHR9LFxyXG5cdHNob3dTZXR0aW5nOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuRmlzaF9zZXR0aW5nLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLkZpc2hfc2V0dGluZy5ub2RlO1xyXG5cdH0sXHJcbn0pO1xyXG4iXX0=