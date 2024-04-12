
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/BaoMat/DoiMatKhau/DoiMatKhau.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99ffdd9WihFhpmOaK8H6Qen', 'DoiMatKhau');
// Script/Model/Dialog/Profile/BaoMat/DoiMatKhau/DoiMatKhau.js

'use strict';

var BrowserUtil = require('BrowserUtil');
var helper = require('Helper');
cc.Class({
    extends: cc.Component,

    properties: {
        OldPassword: {
            default: null,
            type: cc.EditBox
        },
        NewPassword: {
            default: null,
            type: cc.EditBox
        },
        ReNewPassword: {
            default: null,
            type: cc.EditBox
        }
    },
    onLoad: function onLoad() {
        var self = this;
        this.editboxs = [this.OldPassword, this.NewPassword, this.ReNewPassword];
        this.keyHandle = function (t) {
            return t.keyCode === cc.macro.KEY.tab ? (self.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onChangerClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
        };
    },

    onEnable: function onEnable() {
        cc.sys.isBrowser && this.addEvent();
    },
    onDisable: function onDisable() {
        cc.sys.isBrowser && this.removeEvent();
        this.clear();
    },
    addEvent: function addEvent() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        for (var t in this.editboxs) {
            BrowserUtil.getHTMLElementByEditBox(this.editboxs[t]).addEventListener("keydown", this.keyHandle, !1);
        }
    },
    removeEvent: function removeEvent() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        for (var t in this.editboxs) {
            BrowserUtil.getHTMLElementByEditBox(this.editboxs[t]).removeEventListener("keydown", this.keyHandle, !1);
        }
    },
    onKeyDown: function onKeyDown(event) {
        switch (event.keyCode) {
            case cc.macro.KEY.tab:
                this.isTop() && this.changeNextFocusEditBox();
                break;
            case cc.macro.KEY.enter:
                this.isTop() && this.onChangerClick();
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
    onChangerClick: function onChangerClick() {
        if (this.OldPassword.string.length < 6 || this.OldPassword.string.length > 32 || this.NewPassword.string.length < 6 || this.NewPassword.string.length > 32 || this.ReNewPassword.string.length < 6 || this.ReNewPassword.string.length > 32) {
            cc.RedT.inGame.notice.show({ title: "", text: "Mật khẩu từ 6 đến 32 ký tự.\n\nHãy kiểm tra lại các thông tin." });
        } else if (this.OldPassword.string == this.NewPassword.string) {
            cc.RedT.inGame.notice.show({ title: "", text: "Mật khẩu mới không trùng với mật khẩu cũ." });
        } else if (this.NewPassword.string != this.ReNewPassword.string) {
            cc.RedT.inGame.notice.show({ title: "", text: "Nhập lại mật khẩu mới không khớp." });
        } else {
            cc.RedT.inGame.loading.active = !0;
            cc.RedT.send({ user: { doi_pass: { passOld: this.OldPassword.string, passNew: this.NewPassword.string, passNew2: this.ReNewPassword.string } } });
        }
    },
    clear: function clear() {
        this.OldPassword.string = this.NewPassword.string = this.ReNewPassword.string = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxCYW9NYXRcXERvaU1hdEtoYXUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEJhb01hdFxcRG9pTWF0S2hhdS9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcQmFvTWF0XFxEb2lNYXRLaGF1XFxEb2lNYXRLaGF1LmpzIl0sIm5hbWVzIjpbIkJyb3dzZXJVdGlsIiwicmVxdWlyZSIsImhlbHBlciIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIk9sZFBhc3N3b3JkIiwiZGVmYXVsdCIsInR5cGUiLCJFZGl0Qm94IiwiTmV3UGFzc3dvcmQiLCJSZU5ld1Bhc3N3b3JkIiwib25Mb2FkIiwic2VsZiIsImVkaXRib3hzIiwia2V5SGFuZGxlIiwidCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsInRhYiIsImNoYW5nZU5leHRGb2N1c0VkaXRCb3giLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyIiwiZm9jdXNHYW1lIiwib25DaGFuZ2VyQ2xpY2siLCJvbkVuYWJsZSIsInN5cyIsImlzQnJvd3NlciIsImFkZEV2ZW50Iiwib25EaXNhYmxlIiwicmVtb3ZlRXZlbnQiLCJjbGVhciIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3giLCJhZGRFdmVudExpc3RlbmVyIiwib2ZmIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaXNUb3AiLCJlIiwiaSIsImxlbmd0aCIsImNoZWNrRWRpdEJveEZvY3VzIiwiZm9jdXNFZGl0Qm94IiwiUmVkVCIsImluR2FtZSIsIm5vdGljZSIsIm5vZGUiLCJhY3RpdmUiLCJsb2FkaW5nIiwic3RyaW5nIiwic2hvdyIsInRpdGxlIiwidGV4dCIsInNlbmQiLCJ1c2VyIiwiZG9pX3Bhc3MiLCJwYXNzT2xkIiwicGFzc05ldyIsInBhc3NOZXcyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLGNBQWNDLFFBQVEsYUFBUixDQUFsQjtBQUNBLElBQUlDLFNBQWNELFFBQVEsUUFBUixDQUFsQjtBQUNBRSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMscUJBQWE7QUFDVEMscUJBQVMsSUFEQTtBQUVUQyxrQkFBU1AsR0FBR1E7QUFGSCxTQURMO0FBS1JDLHFCQUFhO0FBQ1RILHFCQUFTLElBREE7QUFFVEMsa0JBQVNQLEdBQUdRO0FBRkgsU0FMTDtBQVNSRSx1QkFBZTtBQUNYSixxQkFBUyxJQURFO0FBRVhDLGtCQUFTUCxHQUFHUTtBQUZEO0FBVFAsS0FIUDtBQWlCTEcsVUFqQkssb0JBaUJLO0FBQ04sWUFBSUMsT0FBTyxJQUFYO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixDQUFDLEtBQUtSLFdBQU4sRUFBbUIsS0FBS0ksV0FBeEIsRUFBcUMsS0FBS0MsYUFBMUMsQ0FBaEI7QUFDQSxhQUFLSSxTQUFMLEdBQWlCLFVBQVNDLENBQVQsRUFBWTtBQUN6QixtQkFBT0EsRUFBRUMsT0FBRixLQUFjaEIsR0FBR2lCLEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxHQUEzQixJQUFrQ1AsS0FBS1Esc0JBQUwsSUFDckNMLEVBQUVNLGNBQUYsSUFBb0JOLEVBQUVNLGNBQUYsRUFEaUIsRUFFckMsQ0FBQyxDQUZFLElBRUdOLEVBQUVDLE9BQUYsS0FBY2hCLEdBQUdpQixLQUFILENBQVNDLEdBQVQsQ0FBYUksS0FBM0IsSUFBb0N6QixZQUFZMEIsU0FBWixJQUF5QlgsS0FBS1ksY0FBTCxFQUF6QixFQUMxQ1QsRUFBRU0sY0FBRixJQUFvQk4sRUFBRU0sY0FBRixF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UyxLQUFLekQsV0FBTCxDQUFpQmtELE1BQTNCLEVBQW1DUSxTQUFTLEtBQUt0RCxXQUFMLENBQWlCOEMsTUFBN0QsRUFBcUVTLFVBQVUsS0FBS3RELGFBQUwsQ0FBbUI2QyxNQUFsRyxFQUFYLEVBQVAsRUFBYjtBQUNIO0FBQ0osS0F0Rkk7QUF1Rkx4QixXQUFPLGlCQUFVO0FBQ2IsYUFBSzFCLFdBQUwsQ0FBaUJrRCxNQUFqQixHQUEwQixLQUFLOUMsV0FBTCxDQUFpQjhDLE1BQWpCLEdBQTBCLEtBQUs3QyxhQUFMLENBQW1CNkMsTUFBbkIsR0FBNEIsRUFBaEY7QUFDSDtBQXpGSSxDQUFUIiwiZmlsZSI6IkRvaU1hdEtoYXUuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEJhb01hdFxcRG9pTWF0S2hhdSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgQnJvd3NlclV0aWwgPSByZXF1aXJlKCdCcm93c2VyVXRpbCcpO1xyXG52YXIgaGVscGVyICAgICAgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBPbGRQYXNzd29yZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiAgICBjYy5FZGl0Qm94LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTmV3UGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuRWRpdEJveCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlTmV3UGFzc3dvcmQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuRWRpdEJveCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuZWRpdGJveHMgPSBbdGhpcy5PbGRQYXNzd29yZCwgdGhpcy5OZXdQYXNzd29yZCwgdGhpcy5SZU5ld1Bhc3N3b3JkXTtcclxuICAgICAgICB0aGlzLmtleUhhbmRsZSA9IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLnRhYiA/IChzZWxmLmNoYW5nZU5leHRGb2N1c0VkaXRCb3goKSxcclxuICAgICAgICAgICAgICAgIHQucHJldmVudERlZmF1bHQgJiYgdC5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgICAgITEpIDogdC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZW50ZXIgPyAoQnJvd3NlclV0aWwuZm9jdXNHYW1lKCksIHNlbGYub25DaGFuZ2VyQ2xpY2soKSxcclxuICAgICAgICAgICAgICAgIHQucHJldmVudERlZmF1bHQgJiYgdC5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgICAgITEpIDogdm9pZCAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLmFkZEV2ZW50KCk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLnJlbW92ZUV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgfSxcclxuICAgIGFkZEV2ZW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBmb3IgKHZhciB0IGluIHRoaXMuZWRpdGJveHMpIHtcclxuICAgICAgICAgICAgQnJvd3NlclV0aWwuZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3godGhpcy5lZGl0Ym94c1t0XSkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlIYW5kbGUsICExKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVFdmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGZvciAodmFyIHQgaW4gdGhpcy5lZGl0Ym94cykge1xyXG4gICAgICAgICAgICBCcm93c2VyVXRpbC5nZXRIVE1MRWxlbWVudEJ5RWRpdEJveCh0aGlzLmVkaXRib3hzW3RdKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZSwgITEpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudGFiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RvcCgpICYmIHRoaXMuY2hhbmdlTmV4dEZvY3VzRWRpdEJveCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmVudGVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RvcCgpICYmIHRoaXMub25DaGFuZ2VyQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTmV4dEZvY3VzRWRpdEJveDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9ICExLCBlID0gMCwgaSA9IHRoaXMuZWRpdGJveHMubGVuZ3RoOyBlIDwgaTsgZSsrKXtcclxuICAgICAgICAgICAgaWYgKEJyb3dzZXJVdGlsLmNoZWNrRWRpdEJveEZvY3VzKHRoaXMuZWRpdGJveHNbZV0pKSB7XHJcbiAgICAgICAgICAgICAgICBCcm93c2VyVXRpbC5mb2N1c0VkaXRCb3godGhpcy5lZGl0Ym94c1tlXSk7XHJcbiAgICAgICAgICAgICAgICB0ID0gITA7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICF0ICYmIDAgPCB0aGlzLmVkaXRib3hzLmxlbmd0aCAmJiBCcm93c2VyVXRpbC5mb2N1c0VkaXRCb3godGhpcy5lZGl0Ym94c1swXSk7XHJcbiAgICB9LFxyXG4gICAgaXNUb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAhY2MuUmVkVC5pbkdhbWUubm90aWNlLm5vZGUuYWN0aXZlICYmICFjYy5SZWRULmluR2FtZS5sb2FkaW5nLmFjdGl2ZTtcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZXJDbGljazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuT2xkUGFzc3dvcmQuc3RyaW5nLmxlbmd0aCA8IDYgfHxcclxuICAgICAgICAgICAgdGhpcy5PbGRQYXNzd29yZC5zdHJpbmcubGVuZ3RoID4gMzIgfHxcclxuICAgICAgICAgICAgdGhpcy5OZXdQYXNzd29yZC5zdHJpbmcubGVuZ3RoIDwgNiB8fFxyXG4gICAgICAgICAgICB0aGlzLk5ld1Bhc3N3b3JkLnN0cmluZy5sZW5ndGggPiAzMiB8fFxyXG4gICAgICAgICAgICB0aGlzLlJlTmV3UGFzc3dvcmQuc3RyaW5nLmxlbmd0aCA8IDYgfHxcclxuICAgICAgICAgICAgdGhpcy5SZU5ld1Bhc3N3b3JkLnN0cmluZy5sZW5ndGggPiAzMilcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLm5vdGljZS5zaG93KHt0aXRsZTogXCJcIiwgdGV4dDogXCJN4bqtdCBraOG6qXUgdOG7qyA2IMSR4bq/biAzMiBrw70gdOG7sS5cXG5cXG5Iw6N5IGtp4buDbSB0cmEgbOG6oWkgY8OhYyB0aMO0bmcgdGluLlwifSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuT2xkUGFzc3dvcmQuc3RyaW5nID09IHRoaXMuTmV3UGFzc3dvcmQuc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLm5vdGljZS5zaG93KHt0aXRsZTogXCJcIiwgdGV4dDogXCJN4bqtdCBraOG6qXUgbeG7m2kga2jDtG5nIHRyw7luZyB24bubaSBt4bqtdCBraOG6qXUgY8WpLlwifSk7XHJcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuTmV3UGFzc3dvcmQuc3RyaW5nICE9IHRoaXMuUmVOZXdQYXNzd29yZC5zdHJpbmcpIHtcclxuICAgICAgICAgICAgY2MuUmVkVC5pbkdhbWUubm90aWNlLnNob3coe3RpdGxlOiBcIlwiLCB0ZXh0OiBcIk5o4bqtcCBs4bqhaSBt4bqtdCBraOG6qXUgbeG7m2kga2jDtG5nIGto4bubcC5cIn0pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5SZWRULmluR2FtZS5sb2FkaW5nLmFjdGl2ZSA9ICEwO1xyXG4gICAgICAgICAgICBjYy5SZWRULnNlbmQoe3VzZXI6IHtkb2lfcGFzczoge3Bhc3NPbGQ6IHRoaXMuT2xkUGFzc3dvcmQuc3RyaW5nLCBwYXNzTmV3OiB0aGlzLk5ld1Bhc3N3b3JkLnN0cmluZywgcGFzc05ldzI6IHRoaXMuUmVOZXdQYXNzd29yZC5zdHJpbmd9fX0pXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsZWFyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuT2xkUGFzc3dvcmQuc3RyaW5nID0gdGhpcy5OZXdQYXNzd29yZC5zdHJpbmcgPSB0aGlzLlJlTmV3UGFzc3dvcmQuc3RyaW5nID0gXCJcIjtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=