
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/Bank/bankRut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6e82lXaWpFFKSeuqaCN4Qt', 'bankRut');
// Script/Model/Dialog/Shop/Bank/bankRut.js

'use strict';

var BrowserUtil = require('BrowserUtil');
var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		editBank: cc.EditBox,
		editNumber: cc.EditBox,
		editName: cc.EditBox,
		editRut: cc.EditBox,
		editOTP: cc.EditBox,
		typeOTP: ''
	},
	init: function init() {
		var self = this;
		this.editboxs = [this.editBank, this.editNumber, this.editName, this.editRut, this.editOTP];
		this.keyHandle = function (t) {
			return t.keyCode === cc.macro.KEY.tab ? (self.isTop() && self.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onNapClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
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
		for (var t in this.editboxs) {
			BrowserUtil.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1);
		}
	},
	removeEvent: function removeEvent() {
		for (var t in this.editboxs) {
			BrowserUtil.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
		}
		cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
	},
	onKeyDown: function onKeyDown(event) {
		switch (event.keyCode) {
			case cc.macro.KEY.tab:
				this.isTop() && this.changeNextFocusEditBox();
				break;
			case cc.macro.KEY.enter:
				this.isTop() && this.onNapClick();
		}
	},
	changeNextFocusEditBox: function changeNextFocusEditBox() {
		for (var t = !1, e = 0, i = this.editboxs.length; e < i; e++) {
			if (BrowserUtil.checkEditBoxFocus(this.editboxs[e])) {
				BrowserUtil.focusEditBox(this.editboxs[e]);
				t = !0;
				break;
			}
		}
		!t && 0 < this.editboxs.length && BrowserUtil.focusEditBox(this.editboxs[0]);
	},
	isTop: function isTop() {
		return !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active;
	},
	clean: function clean() {
		this.editBank.string = this.editNumber.string = this.editName.string = this.editRut.string = this.editOTP.string = '';
	},
	onClickOTP: function onClickOTP() {
		cc.RedT.send({ otp: { type: this.typeOTP } });
	},
	changerTypeOTP: function changerTypeOTP(e) {
		this.typeOTP = e.node.name;
	},
	onChangerRed: function onChangerRed() {
		var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

		value = helper.numberWithCommas(helper.getOnlyNumberInString(value));
		this.editRut.string = value == 0 ? "" : value;
	},
	onClick: function onClick() {
		var error = null;
		if (helper.isEmpty(this.editBank.string) || helper.isEmpty(this.editNumber.string) || helper.isEmpty(this.editName.string) || helper.isEmpty(this.editRut.string) || helper.isEmpty(this.editOTP.string)) {
			error = "Kiểm tra lại các thông tin...";
		} else if (helper.getOnlyNumberInString(this.editRut.string) < 10000) {
			error = "Số tiền RÚT tối thiểu là 100.000.";
		}
		if (error) {
			cc.RedT.inGame.notice.show({ title: "", text: error });
		} else {
			cc.RedT.send({ shop: { bank: { rut: { bank: this.editBank.string, number: this.editNumber.string, name: this.editName.string, rut: helper.getOnlyNumberInString(this.editRut.string), otp: this.editOTP.string } } } });
			//branch:this.editBranch.string,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXEJhbmsvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcQmFuay9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcQmFua1xcYmFua1J1dC5qcyJdLCJuYW1lcyI6WyJCcm93c2VyVXRpbCIsInJlcXVpcmUiLCJoZWxwZXIiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZGl0QmFuayIsIkVkaXRCb3giLCJlZGl0TnVtYmVyIiwiZWRpdE5hbWUiLCJlZGl0UnV0IiwiZWRpdE9UUCIsInR5cGVPVFAiLCJpbml0Iiwic2VsZiIsImVkaXRib3hzIiwia2V5SGFuZGxlIiwidCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInRhYiIsImlzVG9wIiwiY2hhbmdlTmV4dEZvY3VzRWRpdEJveCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXIiLCJmb2N1c0dhbWUiLCJvbk5hcENsaWNrIiwib25FbmFibGUiLCJzeXMiLCJpc0Jyb3dzZXIiLCJhZGRFdmVudCIsIm9uRGlzYWJsZSIsInJlbW92ZUV2ZW50IiwiY2xlYW4iLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsImdldEhUTUxFbGVtZW50QnlFZGl0Qm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvZmYiLCJldmVudCIsImUiLCJpIiwibGVuZ3RoIiwiY2hlY2tFZGl0Qm94Rm9jdXMiLCJmb2N1c0VkaXRCb3giLCJSZWRUIiwiaW5HYW1lIiwibm90aWNlIiwibm9kZSIsImFjdGl2ZSIsImxvYWRpbmciLCJzdHJpbmciLCJvbkNsaWNrT1RQIiwic2VuZCIsIm90cCIsInR5cGUiLCJjaGFuZ2VyVHlwZU9UUCIsIm5hbWUiLCJvbkNoYW5nZXJSZWQiLCJ2YWx1ZSIsIm51bWJlcldpdGhDb21tYXMiLCJnZXRPbmx5TnVtYmVySW5TdHJpbmciLCJvbkNsaWNrIiwiZXJyb3IiLCJpc0VtcHR5Iiwic2hvdyIsInRpdGxlIiwidGV4dCIsInNob3AiLCJiYW5rIiwicnV0IiwibnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLGNBQWNDLFFBQVEsYUFBUixDQUFsQjtBQUNBLElBQUlDLFNBQWNELFFBQVEsUUFBUixDQUFsQjs7QUFFQUUsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsWUFBWUwsR0FBR00sT0FESjtBQUVYQyxjQUFZUCxHQUFHTSxPQUZKO0FBR1hFLFlBQVlSLEdBQUdNLE9BSEo7QUFJWEcsV0FBWVQsR0FBR00sT0FKSjtBQUtYSSxXQUFZVixHQUFHTSxPQUxKO0FBTVhLLFdBQVM7QUFORSxFQUhKO0FBV1JDLEtBWFEsa0JBV0Y7QUFDTCxNQUFJQyxPQUFPLElBQVg7QUFDQSxPQUFLQyxRQUFMLEdBQWdCLENBQUMsS0FBS1QsUUFBTixFQUFnQixLQUFLRSxVQUFyQixFQUFpQyxLQUFLQyxRQUF0QyxFQUFnRCxLQUFLQyxPQUFyRCxFQUE4RCxLQUFLQyxPQUFuRSxDQUFoQjtBQUNBLE9BQUtLLFNBQUwsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzVCLFVBQU9BLEVBQUVDLE9BQUYsS0FBY2pCLEdBQUdrQixLQUFILENBQVNDLEdBQVQsQ0FBYUMsR0FBM0IsSUFBa0NQLEtBQUtRLEtBQUwsTUFBZ0JSLEtBQUtTLHNCQUFMLEVBQWhCLEVBQ3hDTixFQUFFTyxjQUFGLElBQW9CUCxFQUFFTyxjQUFGLEVBRG9CLEVBRXhDLENBQUMsQ0FGSyxJQUVBUCxFQUFFQyxPQUFGLEtBQWNqQixHQUFHa0IsS0FBSCxDQUFTQyxHQUFULENBQWFLLEtBQTNCLElBQW9DM0Is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QVBELE1BT08sSUFBR3JFLE9BQU9tRSxxQkFBUCxDQUE2QixLQUFLekQsT0FBTCxDQUFhK0MsTUFBMUMsSUFBb0QsS0FBdkQsRUFBNkQ7QUFDbkVZLFdBQVEsbUNBQVI7QUFDQTtBQUNELE1BQUlBLEtBQUosRUFBVTtBQUNUcEUsTUFBR2tELElBQUgsQ0FBUUMsTUFBUixDQUFlQyxNQUFmLENBQXNCa0IsSUFBdEIsQ0FBMkIsRUFBQ0MsT0FBTyxFQUFSLEVBQVlDLE1BQU1KLEtBQWxCLEVBQTNCO0FBQ0EsR0FGRCxNQUVPO0FBQ05wRSxNQUFHa0QsSUFBSCxDQUFRUSxJQUFSLENBQWEsRUFBQ2UsTUFBSyxFQUFDQyxNQUFLLEVBQUNDLEtBQUksRUFBQ0QsTUFBSyxLQUFLckUsUUFBTCxDQUFjbUQsTUFBcEIsRUFBNEJvQixRQUFPLEtBQUtyRSxVQUFMLENBQWdCaUQsTUFBbkQsRUFBMkRNLE1BQUssS0FBS3RELFFBQUwsQ0FBY2dELE1BQTlFLEVBQXNGbUIsS0FBSTVFLE9BQU9tRSxxQkFBUCxDQUE2QixLQUFLekQsT0FBTCxDQUFhK0MsTUFBMUMsQ0FBMUYsRUFBNklHLEtBQUksS0FBS2pELE9BQUwsQ0FBYThDLE1BQTlKLEVBQUwsRUFBTixFQUFOLEVBQWI7QUFDQTtBQUNBO0FBQ0Q7QUE5Rk8sQ0FBVCIsImZpbGUiOiJiYW5rUnV0LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXEJhbmsiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEJyb3dzZXJVdGlsID0gcmVxdWlyZSgnQnJvd3NlclV0aWwnKTtcclxudmFyIGhlbHBlciAgICAgID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRlZGl0QmFuazogICBjYy5FZGl0Qm94LFxyXG5cdFx0ZWRpdE51bWJlcjogY2MuRWRpdEJveCxcclxuXHRcdGVkaXROYW1lOiAgIGNjLkVkaXRCb3gsXHJcblx0XHRlZGl0UnV0OiAgICBjYy5FZGl0Qm94LFxyXG5cdFx0ZWRpdE9UUDogICAgY2MuRWRpdEJveCxcclxuXHRcdHR5cGVPVFA6ICcnLFxyXG5cdH0sXHJcblx0aW5pdCgpe1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5lZGl0Ym94cyA9IFt0aGlzLmVkaXRCYW5rLCB0aGlzLmVkaXROdW1iZXIsIHRoaXMuZWRpdE5hbWUsIHRoaXMuZWRpdFJ1dCwgdGhpcy5lZGl0T1RQXTtcclxuXHRcdHRoaXMua2V5SGFuZGxlID0gZnVuY3Rpb24odCkge1xyXG5cdFx0XHRyZXR1cm4gdC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkudGFiID8gKHNlbGYuaXNUb3AoKSAmJiBzZWxmLmNoYW5nZU5leHRGb2N1c0VkaXRCb3goKSxcclxuXHRcdFx0XHR0LnByZXZlbnREZWZhdWx0ICYmIHQucHJldmVudERlZmF1bHQoKSxcclxuXHRcdFx0XHQhMSkgOiB0LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lbnRlciA/IChCcm93c2VyVXRpbC5mb2N1c0dhbWUoKSwgc2VsZi5vbk5hcENsaWNrKCksXHJcblx0XHRcdFx0dC5wcmV2ZW50RGVmYXVsdCAmJiB0LnByZXZlbnREZWZhdWx0KCksXHJcblx0XHRcdFx0ITEpIDogdm9pZCAwXHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLmFkZEV2ZW50KCk7XHJcblx0fSxcclxuXHRvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGNjLnN5cy5pc0Jyb3dzZXIgJiYgdGhpcy5yZW1vdmVFdmVudCgpO1xyXG5cdFx0dGhpcy5jbGVhbigpO1xyXG5cdH0sXHJcblx0YWRkRXZlbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcblx0XHRmb3IgKHZhciB0IGluIHRoaXMuZWRpdGJveHMpIHtcclxuXHRcdFx0QnJvd3NlclV0aWwuZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3godGhpcy5lZGl0Ym94c1t0XSkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlIYW5kbGUsICExKVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0cmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Zm9yICh2YXIgdCBpbiB0aGlzLmVkaXRib3hzKSB7XHJcblx0XHRcdEJyb3dzZXJVdGlsLmdldEhUTUxFbGVtZW50QnlFZGl0Qm94KHRoaXMuZWRpdGJveHNbdF0pLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5SGFuZGxlLCAhMSlcclxuXHRcdH1cclxuXHRcdGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuXHR9LFxyXG5cdG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHRzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG5cdFx0XHRjYXNlIGNjLm1hY3JvLktFWS50YWI6XHJcblx0XHRcdFx0dGhpcy5pc1RvcCgpICYmIHRoaXMuY2hhbmdlTmV4dEZvY3VzRWRpdEJveCgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIGNjLm1hY3JvLktFWS5lbnRlcjpcclxuXHRcdFx0XHR0aGlzLmlzVG9wKCkgJiYgdGhpcy5vbk5hcENsaWNrKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRjaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94OiBmdW5jdGlvbigpIHtcclxuXHRcdGZvciAodmFyIHQgPSAhMSwgZSA9IDAsIGkgPSB0aGlzLmVkaXRib3hzLmxlbmd0aDsgZSA8IGk7IGUrKyl7XHJcblx0XHRcdGlmIChCcm93c2VyVXRpbC5jaGVja0VkaXRCb3hGb2N1cyh0aGlzLmVkaXRib3hzW2VdKSkge1xyXG5cdFx0XHRcdEJyb3dzZXJVdGlsLmZvY3VzRWRpdEJveCh0aGlzLmVkaXRib3hzW2VdKTtcclxuXHRcdFx0XHR0ID0gITA7XHJcblx0XHRcdFx0YnJlYWtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0IXQgJiYgMCA8IHRoaXMuZWRpdGJveHMubGVuZ3RoICYmIEJyb3dzZXJVdGlsLmZvY3VzRWRpdEJveCh0aGlzLmVkaXRib3hzWzBdKTtcclxuXHR9LFxyXG5cdGlzVG9wOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAhY2MuUmVkVC5pbkdhbWUubm90aWNlLm5vZGUuYWN0aXZlICYmICFjYy5SZWRULmluR2FtZS5sb2FkaW5nLmFjdGl2ZTtcclxuXHR9LFxyXG5cdGNsZWFuOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5lZGl0QmFuay5zdHJpbmcgPSB0aGlzLmVkaXROdW1iZXIuc3RyaW5nID0gdGhpcy5lZGl0TmFtZS5zdHJpbmcgPSB0aGlzLmVkaXRSdXQuc3RyaW5nID0gdGhpcy5lZGl0T1RQLnN0cmluZyA9ICcnO1xyXG5cdH0sXHJcblx0b25DbGlja09UUDogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7b3RwOnt0eXBlOnRoaXMudHlwZU9UUH19KTtcclxuXHR9LFxyXG5cdGNoYW5nZXJUeXBlT1RQOiBmdW5jdGlvbihlKXtcclxuXHRcdHRoaXMudHlwZU9UUCA9IGUubm9kZS5uYW1lO1xyXG5cdH0sXHJcblx0b25DaGFuZ2VyUmVkOiBmdW5jdGlvbih2YWx1ZSA9IDApe1xyXG5cdFx0dmFsdWUgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHZhbHVlKSk7XHJcblx0XHR0aGlzLmVkaXRSdXQuc3RyaW5nID0gdmFsdWUgPT0gMCA/IFwiXCIgOiB2YWx1ZTtcclxuXHR9LFxyXG5cdG9uQ2xpY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgZXJyb3IgPSBudWxsO1xyXG5cdFx0aWYoaGVscGVyLmlzRW1wdHkodGhpcy5lZGl0QmFuay5zdHJpbmcpIHx8XHJcblx0XHRcdGhlbHBlci5pc0VtcHR5KHRoaXMuZWRpdE51bWJlci5zdHJpbmcpIHx8XHJcblx0XHRcdGhlbHBlci5pc0VtcHR5KHRoaXMuZWRpdE5hbWUuc3RyaW5nKSB8fFxyXG5cdFx0XHRoZWxwZXIuaXNFbXB0eSh0aGlzLmVkaXRSdXQuc3RyaW5nKSB8fFxyXG5cdFx0XHRoZWxwZXIuaXNFbXB0eSh0aGlzLmVkaXRPVFAuc3RyaW5nKSlcclxuXHRcdHtcclxuXHRcdFx0ZXJyb3IgPSBcIktp4buDbSB0cmEgbOG6oWkgY8OhYyB0aMO0bmcgdGluLi4uXCJcclxuXHRcdH0gZWxzZSBpZihoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuZWRpdFJ1dC5zdHJpbmcpIDwgMTAwMDApe1xyXG5cdFx0XHRlcnJvciA9IFwiU+G7kSB0aeG7gW4gUsOaVCB04buRaSB0aGnhu4N1IGzDoCAxMDAuMDAwLlwiXHJcblx0XHR9XHJcblx0XHRpZiAoZXJyb3Ipe1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5ub3RpY2Uuc2hvdyh7dGl0bGU6IFwiXCIsIHRleHQ6IGVycm9yfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjYy5SZWRULnNlbmQoe3Nob3A6e2Jhbms6e3J1dDp7YmFuazp0aGlzLmVkaXRCYW5rLnN0cmluZywgbnVtYmVyOnRoaXMuZWRpdE51bWJlci5zdHJpbmcsIG5hbWU6dGhpcy5lZGl0TmFtZS5zdHJpbmcsIHJ1dDpoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuZWRpdFJ1dC5zdHJpbmcpLCBvdHA6dGhpcy5lZGl0T1RQLnN0cmluZ319fX0pO1xyXG5cdFx0XHQvL2JyYW5jaDp0aGlzLmVkaXRCcmFuY2guc3RyaW5nLFxyXG5cdFx0fVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=