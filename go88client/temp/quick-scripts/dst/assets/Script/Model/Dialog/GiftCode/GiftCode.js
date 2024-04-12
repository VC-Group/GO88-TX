
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/GiftCode/GiftCode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ffeb6RH/gdFxI6pq25qidEr', 'GiftCode');
// Script/Model/Dialog/GiftCode/GiftCode.js

"use strict";

var BrowserUtil = require('BrowserUtil');

cc.Class({
    extends: cc.Component,

    properties: {
        giftcode: {
            default: null,
            type: cc.EditBox
        },
        captcha: {
            default: null,
            type: cc.EditBox
        },
        capchaSprite: cc.Sprite
    },
    onLoad: function onLoad() {
        var self = this;
        this.editboxs = [this.giftcode, this.captcha];
        this.keyHandle = function (t) {
            return t.keyCode === cc.macro.KEY.tab ? (self.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onSendClick(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.escape ? (cc.RedT.inGame.dialog.onClickBack(), t.preventDefault && t.preventDefault(), !1) : void 0;
        };
    },

    onEnable: function onEnable() {
        cc.sys.isBrowser && this.addEvent();
        this.node.runAction(cc.RedT.inGame.dialog.actionShow);
        this.reCaptcha();
    },
    onDisable: function onDisable() {
        cc.sys.isBrowser && this.removeEvent();
        this.clean();
        cc.RedT.inGame.dialog.resetSizeDialog(this.node);
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
            case cc.macro.KEY.escape:
                this.isTop() && cc.RedT.inGame.dialog.onClickBack();
                break;
            case cc.macro.KEY.tab:
                this.isTop() && this.changeNextFocusEditBox();
                break;
            case cc.macro.KEY.enter:
                this.isTop() && this.onSendClick();
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
        this.giftcode.string = this.captcha.string = '';
    },
    onSendClick: function onSendClick() {
        var error = null;

        if (this.giftcode.string.length > 32 || this.giftcode.string.length < 3) error = 'Mã Giftcode không hợp lệ...';else if (this.captcha.string.length < 4) error = 'Vui lòng nhập Captcha.';

        if (error) {
            cc.RedT.inGame.notice.show({ title: "GIFT CODE", text: error });
            return;
        } else {
            cc.RedT.send({ giftcode: { code: this.giftcode.string, captcha: this.captcha.string } });
        }
    },
    initCaptcha: function initCaptcha(t) {
        var i = this,
            o = new Image();
        o.src = t, o.width = 150, o.height = 50, setTimeout(function () {
            var t = new cc.Texture2D();
            t.initWithElement(o), t.handleLoadedTexture();
            var e = new cc.SpriteFrame(t);
            i.capchaSprite.spriteFrame = e;
        }, 10);
    },
    reCaptcha: function reCaptcha() {
        cc.RedT.send({ captcha: 'giftcode' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcR2lmdENvZGUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxHaWZ0Q29kZS9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcR2lmdENvZGVcXEdpZnRDb2RlLmpzIl0sIm5hbWVzIjpbIkJyb3dzZXJVdGlsIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImdpZnRjb2RlIiwiZGVmYXVsdCIsInR5cGUiLCJFZGl0Qm94IiwiY2FwdGNoYSIsImNhcGNoYVNwcml0ZSIsIlNwcml0ZSIsIm9uTG9hZCIsInNlbGYiLCJlZGl0Ym94cyIsImtleUhhbmRsZSIsInQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJ0YWIiLCJjaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94IiwicHJldmVudERlZmF1bHQiLCJlbnRlciIsImZvY3VzR2FtZSIsIm9uU2VuZENsaWNrIiwiZXNjYXBlIiwiUmVkVCIsImluR2FtZSIsImRpYWxvZyIsIm9uQ2xpY2tCYWNrIiwib25FbmFibGUiLCJzeXMiLCJpc0Jyb3dzZXIiLCJhZGRFdmVudCIsIm5vZGUiLCJydW5BY3Rpb24iLCJhY3Rpb25TaG93IiwicmVDYXB0Y2hhIiwib25EaXNhYmxlIiwicmVtb3ZlRXZlbnQiLCJjbGVhbiIsInJlc2V0U2l6ZURpYWxvZyIsInN5c3RlbUV2ZW50Iiwib24iLCJTeXN0ZW1FdmVudCIsIkV2ZW50VHlwZSIsIktFWV9ET1dOIiwib25LZXlEb3duIiwiZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3giLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9mZiIsImV2ZW50IiwiaXNUb3AiLCJlIiwiaSIsImxlbmd0aCIsImNoZWNrRWRpdEJveEZvY3VzIiwiZm9jdXNFZGl0Qm94Iiwibm90aWNlIiwiYWN0aXZlIiwibG9hZGluZyIsInN0cmluZyIsImVycm9yIiwic2hvdyIsInRpdGxlIiwidGV4dCIsInNlbmQiLCJjb2RlIiwiaW5pdENhcHRjaGEiLCJvIiwiSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInNldFRpbWVvdXQiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxjQUFjQyxRQUFRLGFBQVIsQ0FBbEI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxrQkFBVTtBQUNOQyxxQkFBUyxJQURIO0FBRU5DLGtCQUFNUCxHQUFHUTtBQUZILFNBREY7QUFLUkMsaUJBQVM7QUFDTEgscUJBQVMsSUFESjtBQUVMQyxrQkFBTVAsR0FBR1E7QUFGSixTQUxEO0FBU1JFLHNCQUFjVixHQUFHVztBQVRULEtBSFA7QUFjTEMsVUFkSyxvQkFjSztBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBLGFBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLVCxRQUFOLEVBQWdCLEtBQUtJLE9BQXJCLENBQWhCO0FBQ0EsYUFBS00sU0FBTCxHQUFpQixVQUFTQyxDQUFULEVBQVk7QUFDekIsbUJBQU9BLEVBQUVDLE9BQUYsS0FBY2pCLEdBQUdrQixLQUFILENBQVNDLEdBQVQsQ0FBYUMsR0FBM0IsSUFBa0NQLEtBQUtRLHNCQUFMLElBQ3JDTCxFQUFFTSxjQUFGLElBQW9CTixFQUFFTSxjQUFGLEVBRGlCLEVBRXJDLENBQUMsQ0FGRSxJQUVHTixFQUFFQyxPQUFGLEtBQWNqQixHQUFHa0IsS0FBSCxDQUFTQyxHQUFULENBQWFJLEtBQTNCLElBQW9DekIsWUFBWTBCLFNBQVosSUFBeUJYLEtBQUtZLFdBQUwsRUFBekIsRUFDMUNULEVBQUVNLGNB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QUhELE1BR0s7QUFDRGhFLGVBQUcyQixJQUFILENBQVF5QyxJQUFSLENBQWEsRUFBQy9ELFVBQVUsRUFBQ2dFLE1BQU0sS0FBS2hFLFFBQUwsQ0FBYzBELE1BQXJCLEVBQTZCdEQsU0FBUSxLQUFLQSxPQUFMLENBQWFzRCxNQUFsRCxFQUFYLEVBQWI7QUFDSDtBQUNKLEtBM0ZJO0FBNEZMTyxpQkFBYSxxQkFBU3RELENBQVQsRUFBWTtBQUNyQixZQUFJd0MsSUFBSSxJQUFSO0FBQUEsWUFDSWUsSUFBSSxJQUFJQyxLQUFKLEVBRFI7QUFFQUQsVUFBRUUsR0FBRixHQUFRekQsQ0FBUixFQUNBdUQsRUFBRUcsS0FBRixHQUFVLEdBRFYsRUFFQUgsRUFBRUksTUFBRixHQUFXLEVBRlgsRUFHQUMsV0FBVyxZQUFXO0FBQ2xCLGdCQUFJNUQsSUFBSSxJQUFJaEIsR0FBRzZFLFNBQVAsRUFBUjtBQUNBN0QsY0FBRThELGVBQUYsQ0FBa0JQLENBQWxCLEdBQ0F2RCxFQUFFK0QsbUJBQUYsRUFEQTtBQUVBLGdCQUFJeEIsSUFBSSxJQUFJdkQsR0FBR2dGLFdBQVAsQ0FBbUJoRSxDQUFuQixDQUFSO0FBQ0F3QyxjQUFFOUMsWUFBRixDQUFldUUsV0FBZixHQUE2QjFCLENBQTdCO0FBQ0gsU0FORCxFQU1HLEVBTkgsQ0FIQTtBQVVILEtBekdJO0FBMEdMakIsZUFBVyxxQkFBVTtBQUNqQnRDLFdBQUcyQixJQUFILENBQVF5QyxJQUFSLENBQWEsRUFBQzNELFNBQVMsVUFBVixFQUFiO0FBQ0g7QUE1R0ksQ0FBVCIsImZpbGUiOiJHaWZ0Q29kZS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXEdpZnRDb2RlIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBCcm93c2VyVXRpbCA9IHJlcXVpcmUoJ0Jyb3dzZXJVdGlsJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdpZnRjb2RlOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXB0Y2hhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXBjaGFTcHJpdGU6IGNjLlNwcml0ZSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmVkaXRib3hzID0gW3RoaXMuZ2lmdGNvZGUsIHRoaXMuY2FwdGNoYV07XHJcbiAgICAgICAgdGhpcy5rZXlIYW5kbGUgPSBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS50YWIgPyAoc2VsZi5jaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94KCksXHJcbiAgICAgICAgICAgICAgICB0LnByZXZlbnREZWZhdWx0ICYmIHQucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICAgICAgICAgICExKSA6IHQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmVudGVyID8gKEJyb3dzZXJVdGlsLmZvY3VzR2FtZSgpLCBzZWxmLm9uU2VuZENsaWNrKCksXHJcbiAgICAgICAgICAgICAgICB0LnByZXZlbnREZWZhdWx0ICYmIHQucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICAgICAgICAgICExKSA6IHQua2V5Q29kZSA9PT0gY2MubWFjcm8uS0VZLmVzY2FwZSA/IChjYy5SZWRULmluR2FtZS5kaWFsb2cub25DbGlja0JhY2soKSxcclxuICAgICAgICAgICAgICAgIHQucHJldmVudERlZmF1bHQgJiYgdC5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgICAgITEpIDogdm9pZCAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLmFkZEV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5SZWRULmluR2FtZS5kaWFsb2cuYWN0aW9uU2hvdyk7XHJcbiAgICAgICAgdGhpcy5yZUNhcHRjaGEoKTtcclxuICAgIH0sXHJcbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYy5zeXMuaXNCcm93c2VyICYmIHRoaXMucmVtb3ZlRXZlbnQoKTtcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgY2MuUmVkVC5pbkdhbWUuZGlhbG9nLnJlc2V0U2l6ZURpYWxvZyh0aGlzLm5vZGUpO1xyXG4gICAgfSxcclxuICAgIGFkZEV2ZW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBmb3IgKHZhciB0IGluIHRoaXMuZWRpdGJveHMpIHtcclxuICAgICAgICAgICAgQnJvd3NlclV0aWwuZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3godGhpcy5lZGl0Ym94c1t0XSkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlIYW5kbGUsICExKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVFdmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdCBpbiB0aGlzLmVkaXRib3hzKSB7XHJcbiAgICAgICAgICAgIEJyb3dzZXJVdGlsLmdldEhUTUxFbGVtZW50QnlFZGl0Qm94KHRoaXMuZWRpdGJveHNbdF0pLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5SGFuZGxlLCAhMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZXNjYXBlOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RvcCgpICYmIGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5vbkNsaWNrQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnRhYjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUb3AoKSAmJiB0aGlzLmNoYW5nZU5leHRGb2N1c0VkaXRCb3goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5lbnRlcjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUb3AoKSAmJiB0aGlzLm9uU2VuZENsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoYW5nZU5leHRGb2N1c0VkaXRCb3g6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIHQgPSAhMSwgZSA9IDAsIGkgPSB0aGlzLmVkaXRib3hzLmxlbmd0aDsgZSA8IGk7IGUrKyl7XHJcbiAgICAgICAgICAgIGlmIChCcm93c2VyVXRpbC5jaGVja0VkaXRCb3hGb2N1cyh0aGlzLmVkaXRib3hzW2VdKSkge1xyXG4gICAgICAgICAgICAgICAgQnJvd3NlclV0aWwuZm9jdXNFZGl0Qm94KHRoaXMuZWRpdGJveHNbZV0pO1xyXG4gICAgICAgICAgICAgICAgdCA9ICEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAhdCAmJiAwIDwgdGhpcy5lZGl0Ym94cy5sZW5ndGggJiYgQnJvd3NlclV0aWwuZm9jdXNFZGl0Qm94KHRoaXMuZWRpdGJveHNbMF0pO1xyXG4gICAgfSxcclxuICAgIGlzVG9wOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gIWNjLlJlZFQuaW5HYW1lLm5vdGljZS5ub2RlLmFjdGl2ZSAmJiAhY2MuUmVkVC5pbkdhbWUubG9hZGluZy5hY3RpdmU7XHJcbiAgICB9LFxyXG4gICAgY2xlYW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5naWZ0Y29kZS5zdHJpbmcgPSB0aGlzLmNhcHRjaGEuc3RyaW5nID0gJyc7XHJcbiAgICB9LFxyXG4gICAgb25TZW5kQ2xpY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBlcnJvciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdpZnRjb2RlLnN0cmluZy5sZW5ndGggPiAzMiB8fCB0aGlzLmdpZnRjb2RlLnN0cmluZy5sZW5ndGggPCAzKVxyXG4gICAgICAgICAgICBlcnJvciA9ICdNw6MgR2lmdGNvZGUga2jDtG5nIGjhu6NwIGzhu4cuLi4nO1xyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuY2FwdGNoYS5zdHJpbmcubGVuZ3RoIDwgNClcclxuICAgICAgICAgIGVycm9yID0gJ1Z1aSBsw7JuZyBuaOG6rXAgQ2FwdGNoYS4nO1xyXG5cclxuICAgICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY2MuUmVkVC5pbkdhbWUubm90aWNlLnNob3coe3RpdGxlOlwiR0lGVCBDT0RFXCIsIHRleHQ6ZXJyb3J9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5SZWRULnNlbmQoe2dpZnRjb2RlOiB7Y29kZTogdGhpcy5naWZ0Y29kZS5zdHJpbmcsIGNhcHRjaGE6dGhpcy5jYXB0Y2hhLnN0cmluZ319KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdENhcHRjaGE6IGZ1bmN0aW9uKHQpIHtcclxuICAgICAgICB2YXIgaSA9IHRoaXNcclxuICAgICAgICAgICwgbyA9IG5ldyBJbWFnZTtcclxuICAgICAgICBvLnNyYyA9IHQsXHJcbiAgICAgICAgby53aWR0aCA9IDE1MCxcclxuICAgICAgICBvLmhlaWdodCA9IDUwLFxyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gbmV3IGNjLlRleHR1cmUyRDtcclxuICAgICAgICAgICAgdC5pbml0V2l0aEVsZW1lbnQobyksXHJcbiAgICAgICAgICAgIHQuaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICB2YXIgZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0KTtcclxuICAgICAgICAgICAgaS5jYXBjaGFTcHJpdGUuc3ByaXRlRnJhbWUgPSBlXHJcbiAgICAgICAgfSwgMTApXHJcbiAgICB9LFxyXG4gICAgcmVDYXB0Y2hhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLlJlZFQuc2VuZCh7Y2FwdGNoYTogJ2dpZnRjb2RlJ30pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==