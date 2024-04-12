
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Notice/Notice.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55b77gHOPlJAY+OiMpR3w95', 'Notice');
// Script/Model/Notice/Notice.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		nodeButton: {
			default: null,
			type: cc.Node
		},
		title: {
			default: null,
			type: cc.Label
		},
		text: {
			default: null,
			type: cc.Label
		},
		button: {
			default: null,
			type: cc.Label
		}
	},
	onDisable: function onDisable() {
		this.clean();
	},
	show: function show(data) {
		this.node.active = true;
		if (void 0 !== data.load) {
			cc.RedT.inGame.loading.active = !1;
		}
		if (void 0 !== data.title) {
			this.title.string = data.title;
		}
		if (void 0 !== data.text) {
			this.text.string = data.text;
		}
		if (void 0 !== data.button) {
			this.text.node.y = 8;
			this.type = data.button.type;
			this.button.string = data.button.text;
			this.nodeButton.active = true;
		} else {
			this.nodeButton.active = false;
			this.text.node.y = -14;
		}
	},
	close: function close() {
		cc.RedT.audio.playUnClick();
		this.node.active = false;
	},
	onClickButton: function onClickButton() {
		cc.RedT.audio.playClick();
		switch (this.type) {
			case 'sign_out':
				this.node.active = false;
				cc.RedT.send({ user: { signOut: true } });
				cc.RedT.inGame.resetAuth();
				setTimeout(function () {
					cc.RedT._socket.close();
				}, 100);
				break;
			case 'reg_otp':
				this.node.active = false;
				if (cc.RedT.inGame.dialog.objShow != null) {
					cc.RedT.inGame.dialog.profile.node.previous = cc.RedT.inGame.dialog.objShow;
					cc.RedT.inGame.dialog.objShow.active = false;
				}
				cc.RedT.inGame.dialog.showProfile(null, 'BaoMat');
				cc.RedT.inGame.dialog.profile.BaoMat.onSelectHead(null, 'DangKyOTP');
				break;
		}
	},
	clean: function clean() {
		this.title.string = this.text.string = this.button.string = '';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTm90aWNlLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTm90aWNlL2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTm90aWNlXFxOb3RpY2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZUJ1dHRvbiIsImRlZmF1bHQiLCJ0eXBlIiwiTm9kZSIsInRpdGxlIiwiTGFiZWwiLCJ0ZXh0IiwiYnV0dG9uIiwib25EaXNhYmxlIiwiY2xlYW4iLCJzaG93IiwiZGF0YSIsIm5vZGUiLCJhY3RpdmUiLCJsb2FkIiwiUmVkVCIsImluR2FtZSIsImxvYWRpbmciLCJzdHJpbmciLCJ5IiwiY2xvc2UiLCJhdWRpbyIsInBsYXlVbkNsaWNrIiwib25DbGlja0J1dHRvbiIsInBsYXlDbGljayIsInNlbmQiLCJ1c2VyIiwic2lnbk91dCIsInJlc2V0QXV0aCIsInNldFRpbWVvdXQiLCJfc29ja2V0IiwiZGlhbG9nIiwib2JqU2hvdyIsInByb2ZpbGUiLCJwcmV2aW91cyIsInNob3dQcm9maWxlIiwiQmFvTWF0Iiwib25TZWxlY3RIZWFkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxjQUFZO0FBQ1hDLFlBQVMsSUFERTtBQUVYQyxTQUFNUCxHQUFHUTtBQUZFLEdBREQ7QUFLWEMsU0FBTztBQUNOSCxZQUFTLElBREg7QUFFTkMsU0FBTVAsR0FBR1U7QUFGSCxHQUxJO0FBU1hDLFFBQU07QUFDTEwsWUFBUyxJQURKO0FBRUxDLFNBQU1QLEdBQUdVO0FBRkosR0FUSztBQWFYRSxVQUFRO0FBQ1BOLFlBQVMsSUFERjtBQUVQQyxTQUFNUCxHQUFHVTtBQUZGO0FBYkcsRUFISjtBQXFCUkcsWUFBVyxxQkFBWTtBQUN0QixPQUFLQyxLQUFMO0FBQ0EsRUF2Qk87QUF3QlJDLE9BQU0sY0FBU0MsSUFBVCxFQUFlO0FBQ3BCLE9BQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixJQUFuQjtBQUNBLE1BQUksS0FBSyxDQUFMLEtBQVdGLEtBQUtHLElBQXBCLEVBQTBCO0FBQ3pCbkIsTUFBR29CLElBQUgsQ0FBUUMsTUFBUixDQUFlQyxPQUFmLENBQXVCSixNQUF2QixHQUFnQyxDQUFDLENBQWpDO0FBQ0E7QUFDRCxNQUFJLEtBQUssQ0FBTCxLQUFXRixLQUFLUCxLQUFwQixFQUEyQjtBQUMxQixRQUFLQSxLQUFMLENBQVdjLE1BQVgsR0FBb0JQLEtBQUtQLEtBQXpCO0FBQ0E7QUFDRCxNQUFJLEtBQUssQ0FBTCxLQUFXTyxLQUFLTCxJQUFwQixFQUEwQjtBQUN6QixRQUFLQSxJQUFMLENBQVVZLE1BQVYsR0FBbUJQLEtBQUtMLElBQXhCO0FBQ0E7QUFDRCxNQUFJLEtBQUssQ0FBTCxLQUFXSyxLQUFLSixNQUFwQixFQUE0QjtBQUMzQixRQUFLRCxJQUFMLENBQVVNLElBQVYsQ0FBZU8sQ0FBZixHQUFxQixDQUFyQjtBQUNBLFFBQUtqQixJQUFMLEdBQXFCUyxLQUFLSixNQUFMLENBQVlMLElBQWpDO0FBQ0EsUUFBS0ssTUFBTCxDQUFZVyxNQUFaLEdBQXFCUCxLQUFLSixNQUFMLENBQVlELElBQWpDO0FBQ0EsUUFBS04sVUFBTCxDQUFnQmEsTUFBaEIsR0FBeUIsSUFBekI7QUFDQSxHQUxELE1BS0s7QUFDSixRQUFLYixVQUFMLENBQWdCYSxNQUFoQixHQUF5QixLQUF6QjtBQUNBLFFBQUtQLElBQUwsQ0FBVU0sSUFBVixDQUFlTyxDQUFmLEdBQW1CLENBQUMsRUFBcEI7QUFDQTtBQUNELEVBNUNPO0FBNkNSQyxRQUFPLGlCQUFVO0FBQ2hCekIsS0FBR29CLElBQUgsQ0FBUU0sS0FBUixDQUFjQyxXQUFkO0FBQ0EsT0FBS1YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0EsRUFoRE87QUFpRFJVLGdCQUFlLHlCQUFVO0FBQ3hCNUIsS0FBR29CLElBQUgsQ0FBUU0sS0FBUixDQUFjRyxTQUFkO0FBQ0EsVUFBTyxLQUFLdEIsSUFBWjtBQUNDLFFBQUssVUFBTDtBQUNDLFNBQUtVLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNBbEIsT0FBR29CLElBQUgsQ0FBUVUsSUFBUixDQUFhLEVBQUNDLE1BQUssRUFBQ0MsU0FBUSxJQUFULEVBQU4sRUFBYjtBQUNBaEMsT0FBR29CLElBQUgsQ0FBUUMsTUFBUixDQUFlWSxTQUFmO0FBQ0FDLGVBQVcsWUFBVTtBQUNwQmxDLFFBQUdvQixJQUFILENBQVFlLE9BQVIsQ0FBZ0JWLEtBQWhCO0FBQ0EsS0FGRCxFQUVHLEdBRkg7QUFHRDtBQUNBLFFBQUssU0FBTDtBQUNDLFNBQUtSLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNBLFFBQUlsQixHQUFHb0IsSUFBSCxDQUFRQyxNQUFSLENBQWVlLE1BQWYsQ0FBc0JDLE9BQXRCLElBQWlDLElBQXJDLEVBQTJDO0FBQzFDckMsUUFBR29CLElBQUgsQ0FBUUMsTUFBUixDQUFlZSxNQUFmLENBQXNCRSxPQUF0QixDQUE4QnJCLElBQTlCLENBQW1Dc0IsUUFBbkMsR0FBOEN2QyxHQUFHb0IsSUFBSCxDQUFRQyxNQUFSLENBQWVlLE1BQWYsQ0FBc0JDLE9BQXBFO0FBQ0FyQyxRQUFHb0IsSUFBSCxDQUFRQyxNQUFSLENBQWVlLE1BQWYsQ0FBc0JDLE9BQXRCLENBQThCbkIsTUFBOUIsR0FBdUMsS0FBdkM7QUFDQTtBQUNEbEIsT0FBR29CLElBQUgsQ0FBUUMsTUFBUixDQUFlZSxNQUFmLENBQXNCSSxXQUF0QixDQUFrQyxJQUFsQyxFQUF3QyxRQUF4QztBQUNBeEMsT0FBR29CLElBQUgsQ0FBUUMsTUFBUixDQUFlZSxNQUFmLENBQXNCRSxPQUF0QixDQUE4QkcsTUFBOUIsQ0FBcUNDLFlBQXJDLENBQWtELElBQWxELEVBQXdELFdBQXhEO0FBQ0Q7QUFqQkQ7QUFtQkEsRUF0RU87QUF1RVI1QixRQUFPLGlCQUFVO0FBQ2hCLE9BQUtMLEtBQUwsQ0FBV2MsTUFBWCxHQUFvQixLQUFLWixJQUFMLENBQVVZLE1BQVYsR0FBbUIsS0FBS1gsTUFBTCxDQUFZVyxNQUFaLEdBQXFCLEVBQTVEO0FBQ0E7QUF6RU8sQ0FBVCIsImZpbGUiOiJOb3RpY2UuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxOb3RpY2UiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0bm9kZUJ1dHRvbjoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5Ob2RlLFxyXG5cdFx0fSxcclxuXHRcdHRpdGxlOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLkxhYmVsLFxyXG5cdFx0fSxcclxuXHRcdHRleHQ6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogY2MuTGFiZWwsXHJcblx0XHR9LFxyXG5cdFx0YnV0dG9uOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLkxhYmVsLFxyXG5cdFx0fSxcclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5jbGVhbigpO1xyXG5cdH0sXHJcblx0c2hvdzogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmxvYWQpIHtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUubG9hZGluZy5hY3RpdmUgPSAhMTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEudGl0bGUpIHtcclxuXHRcdFx0dGhpcy50aXRsZS5zdHJpbmcgPSBkYXRhLnRpdGxlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS50ZXh0KSB7XHJcblx0XHRcdHRoaXMudGV4dC5zdHJpbmcgPSBkYXRhLnRleHQ7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmJ1dHRvbikge1xyXG5cdFx0XHR0aGlzLnRleHQubm9kZS55ICAgPSA4O1xyXG5cdFx0XHR0aGlzLnR5cGUgICAgICAgICAgPSBkYXRhLmJ1dHRvbi50eXBlO1xyXG5cdFx0XHR0aGlzLmJ1dHRvbi5zdHJpbmcgPSBkYXRhLmJ1dHRvbi50ZXh0O1xyXG5cdFx0XHR0aGlzLm5vZGVCdXR0b24uYWN0aXZlID0gdHJ1ZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm5vZGVCdXR0b24uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMudGV4dC5ub2RlLnkgPSAtMTQ7XHJcblx0XHR9XHJcblx0fSxcclxuXHRjbG9zZTogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuYXVkaW8ucGxheVVuQ2xpY2soKTtcclxuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHR9LFxyXG5cdG9uQ2xpY2tCdXR0b246IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlDbGljaygpO1xyXG5cdFx0c3dpdGNoKHRoaXMudHlwZSkge1xyXG5cdFx0XHRjYXNlICdzaWduX291dCc6XHJcblx0XHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdGNjLlJlZFQuc2VuZCh7dXNlcjp7c2lnbk91dDp0cnVlfX0pO1xyXG5cdFx0XHRcdGNjLlJlZFQuaW5HYW1lLnJlc2V0QXV0aCgpO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdGNjLlJlZFQuX3NvY2tldC5jbG9zZSgpO1xyXG5cdFx0XHRcdH0sIDEwMCk7XHJcblx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlICdyZWdfb3RwJzpcclxuXHRcdFx0XHR0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0aWYgKGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5vYmpTaG93ICE9IG51bGwpIHtcclxuXHRcdFx0XHRcdGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5wcm9maWxlLm5vZGUucHJldmlvdXMgPSBjYy5SZWRULmluR2FtZS5kaWFsb2cub2JqU2hvdztcclxuXHRcdFx0XHRcdGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5vYmpTaG93LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYy5SZWRULmluR2FtZS5kaWFsb2cuc2hvd1Byb2ZpbGUobnVsbCwgJ0Jhb01hdCcpO1xyXG5cdFx0XHRcdGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5wcm9maWxlLkJhb01hdC5vblNlbGVjdEhlYWQobnVsbCwgJ0RhbmdLeU9UUCcpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNsZWFuOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy50aXRsZS5zdHJpbmcgPSB0aGlzLnRleHQuc3RyaW5nID0gdGhpcy5idXR0b24uc3RyaW5nID0gJyc7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==