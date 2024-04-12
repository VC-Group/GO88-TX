
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/SignName/SignName.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '428fapqUBNMxZBikn0+ylYv', 'SignName');
// Script/Model/Dialog/SignName/SignName.js

"use strict";

var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,

	properties: {
		username: {
			default: null,
			type: cc.EditBox
		}
	},
	onLoad: function onLoad() {
		var self = this;
		this.keyHandle = function (t) {
			return t.keyCode === cc.macro.KEY.tab ? (self.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onSignNameClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
		};
	},

	onEnable: function onEnable() {
		cc.sys.isBrowser && this.addEvent();
	},
	onDisable: function onDisable() {
		cc.sys.isBrowser && this.removeEvent();
		this.clean();
	},
	addEvent: function addEvent() {
		cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
		BrowserUtil.getHTMLElementByEditBox(this.username).addEventListener("keydown", this.keyHandle, !1);
	},
	removeEvent: function removeEvent() {
		BrowserUtil.getHTMLElementByEditBox(this.username).removeEventListener("keydown", this.keyHandle, !1);
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},
	onKeyDown: function onKeyDown(event) {
		switch (event.keyCode) {
			case cc.macro.KEY.tab:
				this.isTop() && this.changeNextFocusEditBox();
				break;
			case cc.macro.KEY.enter:
				this.isTop() && this.onSignNameClick();
		}
	},
	changeNextFocusEditBox: function changeNextFocusEditBox() {
		BrowserUtil.focusEditBox(this.username);
	},
	isTop: function isTop() {
		return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active;
	},
	clean: function clean() {
		this.username.string = '';
	},
	onSignNameClick: function onSignNameClick() {
		if (this.username.string.length > 14 || this.username.string.length < 3 || this.username.string.match(new RegExp("^[a-zA-Z0-9]+$")) === null) {
			cc.RedT.inGame.notice.show({ title: "", text: 'Tên Nhân vật từ 3 đến 14 ký tự và không chứa ký tự đặc biệt!!' });
		} else {
			cc.RedT.send({ signName: this.username.string });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2lnbk5hbWUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaWduTmFtZS9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2lnbk5hbWVcXFNpZ25OYW1lLmpzIl0sIm5hbWVzIjpbIkJyb3dzZXJVdGlsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInVzZXJuYW1lIiwiZGVmYXVsdCIsInR5cGUiLCJFZGl0Qm94Iiwib25Mb2FkIiwic2VsZiIsImtleUhhbmRsZSIsInQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJ0YWIiLCJjaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94IiwicHJldmVudERlZmF1bHQiLCJlbnRlciIsImZvY3VzR2FtZSIsIm9uU2lnbk5hbWVDbGljayIsIm9uRW5hYmxlIiwic3lzIiwiaXNCcm93c2VyIiwiYWRkRXZlbnQiLCJvbkRpc2FibGUiLCJyZW1vdmVFdmVudCIsImNsZWFuIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJnZXRIVE1MRWxlbWVudEJ5RWRpdEJveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2ZmIiwiZXZlbnQiLCJpc1RvcCIsImZvY3VzRWRpdEJveCIsIlJlZFQiLCJpbkdhbWUiLCJub3RpY2UiLCJub2RlIiwiYWN0aXZlIiwibG9hZGluZyIsInN0cmluZyIsImxlbmd0aCIsIm1hdGNoIiwiUmVnRXhwIiwic2hvdyIsInRpdGxlIiwidGV4dCIsInNlbmQiLCJzaWduTmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxjQUFjQyxRQUFR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QUFjMkMsTUFBZCxDQUFxQkMsTUFBckIsR0FBOEIsRUFBOUIsSUFBb0MsS0FBSzVDLFFBQUwsQ0FBYzJDLE1BQWQsQ0FBcUJDLE1BQXJCLEdBQThCLENBQWxFLElBQXVFLEtBQUs1QyxRQUFMLENBQWMyQyxNQUFkLENBQXFCRSxLQUFyQixDQUEyQixJQUFJQyxNQUFKLENBQVcsZ0JBQVgsQ0FBM0IsTUFBNkQsSUFBeEksRUFBNkk7QUFDNUluRCxNQUFHMEMsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JRLElBQXRCLENBQTJCLEVBQUNDLE9BQU0sRUFBUCxFQUFXQyxNQUFLLCtEQUFoQixFQUEzQjtBQUNBLEdBRkQsTUFFSztBQUNKdEQsTUFBRzBDLElBQUgsQ0FBUWEsSUFBUixDQUFhLEVBQUNDLFVBQVUsS0FBS25ELFFBQUwsQ0FBYzJDLE1BQXpCLEVBQWI7QUFDQTtBQUVEO0FBM0RPLENBQVQiLCJmaWxlIjoiU2lnbk5hbWUuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaWduTmFtZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgQnJvd3NlclV0aWwgPSByZXF1aXJlKCdCcm93c2VyVXRpbCcpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0dXNlcm5hbWU6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogY2MuRWRpdEJveCxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRvbkxvYWQgKCkge1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5rZXlIYW5kbGUgPSBmdW5jdGlvbih0KSB7XHJcblx0XHRcdHJldHVybiB0LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS50YWIgPyAoc2VsZi5jaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94KCksXHJcblx0XHRcdFx0dC5wcmV2ZW50RGVmYXVsdCAmJiB0LnByZXZlbnREZWZhdWx0KCksXHJcblx0XHRcdFx0ITEpIDogdC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZW50ZXIgPyAoQnJvd3NlclV0aWwuZm9jdXNHYW1lKCksIHNlbGYub25TaWduTmFtZUNsaWNrKCksXHJcblx0XHRcdFx0dC5wcmV2ZW50RGVmYXVsdCAmJiB0LnByZXZlbnREZWZhdWx0KCksXHJcblx0XHRcdFx0ITEpIDogdm9pZCAwXHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLmFkZEV2ZW50KCk7XHJcblx0fSxcclxuXHRvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNjLnN5cy5pc0Jyb3dzZXIgJiYgdGhpcy5yZW1vdmVFdmVudCgpO1xyXG5cdFx0dGhpcy5jbGVhbigpO1xyXG5cdH0sXHJcblx0YWRkRXZlbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcblx0XHRCcm93c2VyVXRpbC5nZXRIVE1MRWxlbWVudEJ5RWRpdEJveCh0aGlzLnVzZXJuYW1lKS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZSwgITEpXHJcblx0fSxcclxuXHRyZW1vdmVFdmVudDogZnVuY3Rpb24oKSB7XHJcblx0XHRCcm93c2VyVXRpbC5nZXRIVE1MRWxlbWVudEJ5RWRpdEJveCh0aGlzLnVzZXJuYW1lKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZSwgITEpXHJcblx0XHRjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcblx0fSxcclxuXHRvbktleURvd246IGZ1bmN0aW9uIChldmVudCkge1xyXG5cdFx0c3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuXHRcdFx0Y2FzZSBjYy5tYWNyby5LRVkudGFiOlxyXG5cdFx0XHRcdHRoaXMuaXNUb3AoKSAmJiB0aGlzLmNoYW5nZU5leHRGb2N1c0VkaXRCb3goKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBjYy5tYWNyby5LRVkuZW50ZXI6XHJcblx0XHRcdFx0dGhpcy5pc1RvcCgpICYmIHRoaXMub25TaWduTmFtZUNsaWNrKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRjaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94OiBmdW5jdGlvbigpIHtcclxuXHRcdEJyb3dzZXJVdGlsLmZvY3VzRWRpdEJveCh0aGlzLnVzZXJuYW1lKVxyXG5cdH0sXHJcblx0aXNUb3A6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICFjYy5SZWRULmluR2FtZS5ub3RpY2Uubm9kZS5hY3RpdmUgJiYgIWNjLlJlZFQuaW5HYW1lLmxvYWRpbmcuYWN0aXZlO1xyXG5cdH0sXHJcblx0Y2xlYW46IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLnVzZXJuYW1lLnN0cmluZyA9ICcnO1xyXG5cdH0sXHJcblx0b25TaWduTmFtZUNsaWNrOiBmdW5jdGlvbigpIHtcclxuXHRcdGlmICh0aGlzLnVzZXJuYW1lLnN0cmluZy5sZW5ndGggPiAxNCB8fCB0aGlzLnVzZXJuYW1lLnN0cmluZy5sZW5ndGggPCAzIHx8IHRoaXMudXNlcm5hbWUuc3RyaW5nLm1hdGNoKG5ldyBSZWdFeHAoXCJeW2EtekEtWjAtOV0rJFwiKSkgPT09IG51bGwpe1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5ub3RpY2Uuc2hvdyh7dGl0bGU6XCJcIiwgdGV4dDonVMOqbiBOaMOibiB24bqtdCB04burIDMgxJHhur9uIDE0IGvDvSB04buxIHbDoCBraMO0bmcgY2jhu6lhIGvDvSB04buxIMSR4bq3YyBiaeG7h3QhISd9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy5SZWRULnNlbmQoe3NpZ25OYW1lOiB0aGlzLnVzZXJuYW1lLnN0cmluZ30pO1xyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG59KTtcclxuIl19