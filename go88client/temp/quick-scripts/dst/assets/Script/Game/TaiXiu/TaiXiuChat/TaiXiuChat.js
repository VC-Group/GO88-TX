
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuChat/TaiXiuChat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e4b59QQx49GyaeME6czSwsj', 'TaiXiuChat');
// Script/Game/TaiXiu/TaiXiuChat/TaiXiuChat.js

'use strict';

var helper = require('Helper');
var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,
	properties: {
		content: {
			default: null,
			type: cc.ScrollView
		},
		item: {
			default: null,
			type: cc.Prefab
		},
		input: {
			default: null,
			type: cc.EditBox
		},
		layout: {
			default: null,
			type: cc.Layout
		},
		isLoad: false
	},
	init: function init(obj) {
		this.RedT = obj;
		if (void 0 !== cc.RedT.setting.taixiu.chat_active) {
			this.node.active = cc.RedT.setting.taixiu.chat_active;
		}
	},
	onLoad: function onLoad() {
		var self = this;
		this.keyHandle = function (t) {
			return t.keyCode === cc.macro.KEY.tab ? (t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onChatClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
		};
	},

	onEnable: function onEnable() {
		cc.sys.isBrowser && this.addEvent();
		if (!this.isLoad) {
			this.getData();
		} else {
			this.content.scrollToBottom(0);
		}
	},
	onDisable: function onDisable() {
		cc.sys.isBrowser && this.removeEvent();
		this.clean();
	},
	addEvent: function addEvent() {
		BrowserUtil.getHTMLElementByEditBox(this.input).addEventListener("keydown", this.keyHandle, !1);
	},
	removeEvent: function removeEvent() {
		BrowserUtil.getHTMLElementByEditBox(this.input).removeEventListener("keydown", this.keyHandle, !1);
	},
	getData: function getData() {
		this.isLoad = true;
		cc.RedT.send({ taixiu: { getLogChat: true } });
	},
	message: function message(data) {
		var tobot = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

		var item = cc.instantiate(this.item);

		var itemComponent = item.getComponent(cc.Label);
		if (data.top > 0 && data.top < 4) itemComponent.string = data.user + ' (TOP ' + data.top + ') ' + ': ' + data.value;else itemComponent.string = data.user + ': ' + data.value;
		var name = item.children[0].getComponent(cc.Label);
		if (data.top > 0 && data.top < 4) {
			name.string = data.user + ' (TOP ' + data.top + ') ';
			if (data.top == 1) {
				name.node.color = new cc.Color(255, 0, 0);
			} else if (data.top == 2) {
				name.node.color = new cc.Color(0, 255, 42);
			} else if (data.top == 3) {
				name.node.color = new cc.Color(0, 156, 255);
			}
		} else {
			name.string = data.user;
		}

		this.content.content.addChild(item);
		if (tobot && this.layout.node.height > 300 && this.layout.node.height - this.layout.node.position.y - 134 < 70) {
			setTimeout(function () {
				this.content.scrollToBottom(0);
			}.bind(this), 100);
		}
	},
	logs: function logs(_logs) {
		var _this = this;

		if (_logs.length) {
			var self = this;
			Promise.all(_logs.map(function (message) {
				return self.message(message);
			})).then(function (result) {
				setTimeout(function () {
					this.content.scrollToBottom(0);
				}.bind(_this), 100);
			});
		}
	},
	onData: function onData(data) {
		if (void 0 !== data.message) {
			this.message(data.message, true);
		}
		if (void 0 !== data.logs) {
			this.logs(data.logs);
		}
	},
	onChatClick: function onChatClick() {
		if (helper.isEmpty(this.input.string)) {
			this.RedT.onData({ err: "Nhập nội dung để chat..." });
		} else {
			cc.RedT.send({ taixiu: { chat: this.input.string } });
			this.onData({ message: { user: cc.RedT.user.name, value: this.input.string } });
			this.clean();
		}
	},
	toggle: function toggle() {
		this.RedT.setTop();
		cc.RedT.audio.playClick();
		this.node.active = cc.RedT.setting.taixiu.chat_active = !this.node.active;
	},
	clean: function clean() {
		this.input.string = "";
	},
	reset: function reset() {
		this.content.content.destroyAllChildren();
		this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVDaGF0Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVDaGF0L2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdUNoYXRcXFRhaVhpdUNoYXQuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsIkJyb3dzZXJVdGlsIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsImRlZmF1bHQiLCJ0eXBlIiwiU2Nyb2xsVmlldyIsIml0ZW0iLCJQcmVmYWIiLCJpbnB1dCIsIkVkaXRCb3giLCJsYXlvdXQiLCJMYXlvdXQiLCJpc0xvYWQiLCJpbml0Iiwib2JqIiwiUmVkVCIsInNldHRpbmciLCJ0YWl4aXUiLCJjaGF0X2FjdGl2ZSIsIm5vZGUiLCJhY3RpdmUiLCJvbkxvYWQiLCJzZWxmIiwia2V5SGFuZGxlIiwidCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInRhYiIsInByZXZlbnREZWZhdWx0IiwiZW50ZXIiLCJmb2N1c0dhbWUiLCJvbkNoYXRDbGljayIsIm9uRW5hYmxlIiwic3lzIiwiaXNCcm93c2VyIiwiYWRkRXZlbnQiLCJnZXREYXRhIiwic2Nyb2xsVG9Cb3R0b20iLCJvbkRpc2FibGUiLCJyZW1vdmVFdmVudCIsImNsZWFuIiwiZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNlbmQiLCJnZXRMb2dDaGF0IiwibWVzc2FnZSIsImRhdGEiLCJ0b2JvdCIsImluc3RhbnRpYXRlIiwiaXRlbUNvbXBvbmVudCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwidG9wIiwic3RyaW5nIiwidXNlciIsInZhbHVlIiwibmFtZSIsImNoaWxkcmVuIiwiY29sb3IiLCJDb2xvciIsImFkZENoaWxkIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ5Iiwic2V0VGltZW91dCIsImJpbmQiLCJsb2dzIiwibGVuZ3RoIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsInRoZW4iLCJvbkRhdGEiLCJpc0VtcHR5IiwiZXJyIiwiY2hhdCIsInRvZ2dsZSIsInNldFRvcCIsImF1ZGlvIiwicGxheUNsaWNrIiwicmVzZXQiLCJkZXN0cm95QWxsQ2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBY0MsUUFBUSxRQUFSLENBQWxCO0FBQ0EsSUFBSUMsY0FBY0QsUUFBUSxhQUFSLENBQWxCOztBQUVBRSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjtBQUVSQyxhQUFZO0FBQ1hDLFdBQVM7QUFDUkMsWUFBUyxJQUREO0FBRVJDLFNBQU1QLEdBQUdRO0FBRkQsR0FERTtBQUtYQyxRQUFNO0FBQ0xILFlBQVMsSUFESjtBQUVMQyxTQUFNUCxHQUFHVTtBQUZKLEdBTEs7QUFTWEMsU0FBTztBQUNOTCxZQUFTLElBREg7QUFFTkMsU0FBTVAsR0FBR1k7QUFGSCxHQVRJO0FBYVhDLFVBQVE7QUFDUFAsWUFBUyxJQURGO0FBRVBDLFNBQU1QLEdBQUdjO0FBRkYsR0FiRztBQWlCWEMsVUFBUTtBQWpCRyxFQUZKO0FBcUJSQyxLQXJCUSxnQkFxQkhDLEdBckJHLEVBcUJDO0FBQ1IsT0FBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsTUFBSSxLQUFLLENBQUwsS0FBV2pCLEdBQUdrQixJQUFILENBQVFDLE9BQVIsQ0FBZ0JDLE1BQWhCLENBQXVCQyxXQUF0QyxFQUFtRDtBQUNsRCxRQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUJ2QixHQUFHa0IsSUFBSCxDQUFRQyxPQUFSLENBQWdCQyxNQUFoQixDQUF1QkMsV0FBMUM7QUFDQTtBQUNELEVBMUJPO0FBMkJSRyxPQTNCUSxvQkEyQkU7QUFDVCxNQUFJQyxPQUFPLElB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QUFSLENBQWNDLFNBQWQ7QUFDQSxPQUFLOUQsSUFBTCxDQUFVQyxNQUFWLEdBQW1CdkIsR0FBR2tCLElBQUgsQ0FBUUMsT0FBUixDQUFnQkMsTUFBaEIsQ0FBdUJDLFdBQXZCLEdBQXFDLENBQUMsS0FBS0MsSUFBTCxDQUFVQyxNQUFuRTtBQUNBLEVBNUhPO0FBNkhScUIsUUFBTyxpQkFBVTtBQUNoQixPQUFLakMsS0FBTCxDQUFXK0MsTUFBWCxHQUFvQixFQUFwQjtBQUNBLEVBL0hPO0FBZ0lSMkIsUUFBTyxpQkFBVTtBQUNoQixPQUFLaEYsT0FBTCxDQUFhQSxPQUFiLENBQXFCaUYsa0JBQXJCO0FBQ0EsT0FBS2hFLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNBO0FBbklPLENBQVQiLCJmaWxlIjoiVGFpWGl1Q2hhdC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdVxcVGFpWGl1Q2hhdCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyICAgICAgPSByZXF1aXJlKCdIZWxwZXInKTtcclxudmFyIEJyb3dzZXJVdGlsID0gcmVxdWlyZSgnQnJvd3NlclV0aWwnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0Y29udGVudDoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5TY3JvbGxWaWV3XHJcblx0XHR9LFxyXG5cdFx0aXRlbToge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5QcmVmYWJcclxuXHRcdH0sXHJcblx0XHRpbnB1dDoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5FZGl0Qm94XHJcblx0XHR9LFxyXG5cdFx0bGF5b3V0OiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLkxheW91dFxyXG5cdFx0fSxcclxuXHRcdGlzTG9hZDogZmFsc2UsXHJcblx0fSxcclxuXHRpbml0KG9iail7XHJcblx0XHR0aGlzLlJlZFQgPSBvYmo7XHJcblx0XHRpZiAodm9pZCAwICE9PSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmNoYXRfYWN0aXZlKSB7XHJcblx0XHRcdHRoaXMubm9kZS5hY3RpdmUgPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmNoYXRfYWN0aXZlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25Mb2FkICgpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdHRoaXMua2V5SGFuZGxlID0gZnVuY3Rpb24odCkge1xyXG5cdFx0XHRyZXR1cm4gdC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkudGFiID8gKHQucHJldmVudERlZmF1bHQgJiYgdC5wcmV2ZW50RGVmYXVsdCgpLFxyXG5cdFx0XHRcdCExKSA6IHQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmVudGVyID8gKEJyb3dzZXJVdGlsLmZvY3VzR2FtZSgpLCBzZWxmLm9uQ2hhdENsaWNrKCksXHJcblx0XHRcdFx0dC5wcmV2ZW50RGVmYXVsdCAmJiB0LnByZXZlbnREZWZhdWx0KCksXHJcblx0XHRcdFx0ITEpIDogdm9pZCAwXHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLmFkZEV2ZW50KCk7XHJcblx0XHRpZiAoIXRoaXMuaXNMb2FkKSB7XHJcblx0XHRcdHRoaXMuZ2V0RGF0YSgpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuY29udGVudC5zY3JvbGxUb0JvdHRvbSgwKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLnJlbW92ZUV2ZW50KCk7XHJcblx0XHR0aGlzLmNsZWFuKCk7XHJcblx0fSxcclxuXHRhZGRFdmVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRCcm93c2VyVXRpbC5nZXRIVE1MRWxlbWVudEJ5RWRpdEJveCh0aGlzLmlucHV0KS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZSwgITEpO1xyXG5cdH0sXHJcblx0cmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0QnJvd3NlclV0aWwuZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3godGhpcy5pbnB1dCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlIYW5kbGUsICExKTtcclxuXHR9LFxyXG5cdGdldERhdGE6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmlzTG9hZCA9IHRydWU7XHJcblx0XHRjYy5SZWRULnNlbmQoe3RhaXhpdTp7Z2V0TG9nQ2hhdDogdHJ1ZX19KTtcclxuXHR9LFxyXG5cdG1lc3NhZ2U6IGZ1bmN0aW9uKGRhdGEsIHRvYm90ID0gZmFsc2Upe1xyXG5cdFx0dmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pO1xyXG5cdFx0IFxyXG5cdFx0dmFyIGl0ZW1Db21wb25lbnQgPSBpdGVtLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblx0XHRpZihkYXRhLnRvcCA+IDAgJiYgZGF0YS50b3A8NCApXHJcblx0XHRpdGVtQ29tcG9uZW50LnN0cmluZyA9IGRhdGEudXNlciArICcgKFRPUCAnKyhkYXRhLnRvcCkrJykgJysgJzogJyArIGRhdGEudmFsdWU7XHJcblx0XHRlbHNlXHJcblx0XHRpdGVtQ29tcG9uZW50LnN0cmluZyA9IGRhdGEudXNlciArICc6ICcgKyBkYXRhLnZhbHVlO1xyXG5cdFx0dmFyIG5hbWUgPSBpdGVtLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcblx0XHRpZihkYXRhLnRvcCA+IDAgJiYgZGF0YS50b3A8NCApe1xyXG5cdFx0XHRuYW1lLnN0cmluZyA9IGRhdGEudXNlcisnIChUT1AgJysoZGF0YS50b3ApKycpICc7XHJcblx0XHRcdGlmKGRhdGEudG9wID09IDEpe1xyXG5cdFx0XHRcdG5hbWUubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigyNTUsIDAsIDApO1xyXG5cdFx0XHR9ZWxzZSBpZihkYXRhLnRvcCA9PSAyKXtcclxuXHRcdFx0XHRuYW1lLm5vZGUuY29sb3IgPSBuZXcgY2MuQ29sb3IoMCwgMjU1LCA0Mik7XHJcblx0XHRcdH1lbHNlIGlmKGRhdGEudG9wID09IDMpe1xyXG5cdFx0XHRcdG5hbWUubm9kZS5jb2xvciA9IG5ldyBjYy5Db2xvcigwLCAxNTYsIDI1NSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bmFtZS5zdHJpbmcgPSBkYXRhLnVzZXI7XHJcblx0XHR9XHJcblx0XHRcclxuXHJcblx0XHR0aGlzLmNvbnRlbnQuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuXHRcdGlmKHRvYm90ICYmIHRoaXMubGF5b3V0Lm5vZGUuaGVpZ2h0ID4gMzAwICYmIHRoaXMubGF5b3V0Lm5vZGUuaGVpZ2h0LXRoaXMubGF5b3V0Lm5vZGUucG9zaXRpb24ueS0xMzQgPCA3MCl7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR0aGlzLmNvbnRlbnQuc2Nyb2xsVG9Cb3R0b20gKDApO1xyXG5cdFx0XHRcdCBcclxuXHRcdFx0fS5iaW5kKHRoaXMpLCAxMDApO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0bG9nczogZnVuY3Rpb24obG9ncyl7XHJcblx0XHRpZiAobG9ncy5sZW5ndGgpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRQcm9taXNlLmFsbChsb2dzLm1hcChmdW5jdGlvbihtZXNzYWdlKXtcclxuXHRcdFx0XHRyZXR1cm4gc2VsZi5tZXNzYWdlKG1lc3NhZ2UpO1xyXG5cdFx0XHR9KSlcclxuXHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHR0aGlzLmNvbnRlbnQuc2Nyb2xsVG9Cb3R0b20oMCk7XHJcblx0XHRcdFx0fS5iaW5kKHRoaXMpLCAxMDApO1xyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubWVzc2FnZSkge1xyXG5cdFx0XHR0aGlzLm1lc3NhZ2UoZGF0YS5tZXNzYWdlLCB0cnVlKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubG9ncykge1xyXG5cdFx0XHR0aGlzLmxvZ3MoZGF0YS5sb2dzKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uQ2hhdENsaWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmKGhlbHBlci5pc0VtcHR5KHRoaXMuaW5wdXQuc3RyaW5nKSl7XHJcblx0XHRcdHRoaXMuUmVkVC5vbkRhdGEoe2VycjogXCJOaOG6rXAgbuG7mWkgZHVuZyDEkeG7gyBjaGF0Li4uXCJ9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy5SZWRULnNlbmQoe3RhaXhpdTp7Y2hhdDogdGhpcy5pbnB1dC5zdHJpbmd9fSk7XHJcblx0XHRcdHRoaXMub25EYXRhKHttZXNzYWdlOnt1c2VyOmNjLlJlZFQudXNlci5uYW1lLCB2YWx1ZTp0aGlzLmlucHV0LnN0cmluZ319KTtcclxuXHRcdFx0dGhpcy5jbGVhbigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0dG9nZ2xlOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5SZWRULnNldFRvcCgpO1xyXG5cdFx0Y2MuUmVkVC5hdWRpby5wbGF5Q2xpY2soKTtcclxuXHRcdHRoaXMubm9kZS5hY3RpdmUgPSBjYy5SZWRULnNldHRpbmcudGFpeGl1LmNoYXRfYWN0aXZlID0gIXRoaXMubm9kZS5hY3RpdmU7XHJcblx0fSxcclxuXHRjbGVhbjogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuaW5wdXQuc3RyaW5nID0gXCJcIjtcclxuXHR9LFxyXG5cdHJlc2V0OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5jb250ZW50LmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcblx0XHR0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==