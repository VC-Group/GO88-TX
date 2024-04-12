
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/TieuRed/MuaXu/shopMuaXu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3d68ruZCVJyZezBdPhX4eo', 'shopMuaXu');
// Script/Model/Dialog/Shop/TieuRed/MuaXu/shopMuaXu.js

'use strict';

var helper = require('Helper');
var BrowserUtil = require('BrowserUtil');

cc.Class({
    extends: cc.Component,

    properties: {
        xu: {
            default: null,
            type: cc.Label
        },
        red: {
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
        this.editboxs = [this.red, this.captcha];
        this.keyHandle = function (t) {
            return t.keyCode === cc.macro.KEY.tab ? (self.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), self.onClickMua(), t.preventDefault && t.preventDefault(), !1) : void 0;
        };
    },

    onEnable: function onEnable() {
        cc.sys.isBrowser && this.addEvent();
        this.reCaptcha();
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
                this.isTop() && this.onClickMua();
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
        this.red.string = this.xu.string = this.captcha.string = '';
    },
    onChanger: function onChanger(red) {
        var value = helper.getOnlyNumberInString(red);
        var valueRed = helper.numberWithCommas(value);

        this.xu.string = helper.numberWithCommas(value * 3);
        this.red.string = valueRed == "0" ? "" : valueRed;
    },
    onClickMua: function onClickMua() {
        if (parseInt(helper.isEmpty(this.red.string) || helper.getOnlyNumberInString(this.red.string)) < 1000) {
            cc.RedT.inGame.notice.show({ title: "", text: "Số RED mua XU tối thiểu là 1.000" });
        } else if (helper.isEmpty(this.captcha.string)) {
            cc.RedT.inGame.notice.show({ title: "", text: "Vui lòng nhập chính xác mã xác nhận." });
        } else {
            cc.RedT.send({ shop: { mua_xu: { red: helper.getOnlyNumberInString(this.red.string), captcha: this.captcha.string } } });
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
        cc.RedT.send({ captcha: 'withdrawXu' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxUaWV1UmVkXFxNdWFYdS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcVGlldVJlZFxcTXVhWHUvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXFRpZXVSZWRcXE11YVh1XFxzaG9wTXVhWHUuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsIkJyb3dzZXJVdGlsIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwieHUiLCJkZWZhdWx0IiwidHlwZSIsIkxhYmVsIiwicmVkIiwiRWRpdEJveCIsImNhcHRjaGEiLCJjYXBjaGFTcHJpdGUiLCJTcHJpdGUiLCJvbkxvYWQiLCJzZWxmIiwiZWRpdGJveHMiLCJrZXlIYW5kbGUiLCJ0Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwidGFiIiwiY2hhbmdlTmV4dEZvY3VzRWRpdEJveCIsInByZXZlbnREZWZhdWx0IiwiZW50ZXIiLCJmb2N1c0dhbWUiLCJvbkNsaWNrTXVhIiwib25FbmFibGUiLCJzeXMiLCJpc0Jyb3dzZXIiLCJhZGRFdmVudCIsInJlQ2FwdGNoYSIsIm9uRGlzYWJsZSIsInJlbW92ZUV2ZW50IiwiY2xlYW4iLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsImdldEhUTUxFbGVtZW50QnlFZGl0Qm94IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvZmYiLCJldmVudCIsImlzVG9wIiwiZSIsImkiLCJsZW5ndGgiLCJjaGVja0VkaXRCb3hGb2N1cyIsImZvY3VzRWRpdEJveCIsIlJlZFQiLCJpbkdhbWUiLCJub3RpY2UiLCJub2RlIiwiYWN0aXZlIiwibG9hZGluZyIsInN0cmluZyIsIm9uQ2hhbmdlciIsInZhbHVlIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwidmFsdWVSZWQiLCJudW1iZXJXaXRoQ29tbWFzIiwicGFyc2VJbnQiLCJpc0VtcHR5Iiwic2hvdyIsInRpdGxlIiwidGV4dCIsInNlbmQiLCJzaG9wIiwibXVhX3h1IiwiaW5pdENhcHRjaGEiLCJvIiwiSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInNldFRpbWVvdXQiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFjQyxRQUFRLFFBQVIsQ0FBbEI7QUFDQSxJQUFJQyxjQUFjRCxRQUFRLGFBQVIsQ0FBbEI7O0FBRUFFLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxZQUFJO0FBQ0FDLHFCQUFTLElBRFQ7QUFFQUMsa0JBQU1QLEdBQUdRO0FBRlQsU0FESTtBQUtSQyxhQUFLO0FBQ0RILHFCQUFTLElBRFI7QUFFREMsa0JBQU1QLEdBQUdVO0FBRlIsU0FMRztBQVNSQyxpQkFBUztBQUNMTCxxQkFBUyxJQURKO0FBRUxDLGtCQUFNUCxHQUFHVTtBQUZKLFNBVEQ7QUFhUkUsc0JBQWNaLEdBQUdhO0FBYlQsS0FIUDtBQWtCTEMsVUFsQkssb0JBa0JHO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0EsYUFBS0MsUUFBTCxHQUFnQixDQUFDLEtBQUtQLEdBQU4sRUFBVyxLQUFLRSxPQUFoQixDQUFoQjtBQUNBLGFBQUtNLFNBQUwsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3pCLG1CQUFPQSxFQUFFQyxPQUFGLEtBQWNuQixHQUFHb0IsS0FBSCxDQUFTQyxHQUFULENBQWFDLEdBQTNCLElBQWtDUCxLQUFLUSxz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SCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JZLElBQXRCLENBQTJCLEVBQUNDLE9BQU8sRUFBUixFQUFZQyxNQUFNLHNDQUFsQixFQUEzQjtBQUNILFNBRkssTUFFRDtBQUNEckUsZUFBR3FELElBQUgsQ0FBUWlCLElBQVIsQ0FBYSxFQUFDQyxNQUFLLEVBQUNDLFFBQU8sRUFBQy9ELEtBQUtaLE9BQU9pRSxxQkFBUCxDQUE2QixLQUFLckQsR0FBTCxDQUFTa0QsTUFBdEMsQ0FBTixFQUFxRGhELFNBQVMsS0FBS0EsT0FBTCxDQUFhZ0QsTUFBM0UsRUFBUixFQUFOLEVBQWI7QUFDSDtBQUNKLEtBekZJO0FBMEZMYyxpQkFBYSxxQkFBU3ZELENBQVQsRUFBWTtBQUNyQixZQUFJK0IsSUFBSSxJQUFSO0FBQUEsWUFDSXlCLElBQUksSUFBSUMsS0FBSixFQURSO0FBRUFELFVBQUVFLEdBQUYsR0FBUTFELENBQVIsRUFDQXdELEVBQUVHLEtBQUYsR0FBVSxHQURWLEVBRUFILEVBQUVJLE1BQUYsR0FBVyxFQUZYLEVBR0FDLFdBQVcsWUFBVztBQUNsQixnQkFBSTdELElBQUksSUFBSWxCLEdBQUdnRixTQUFQLEVBQVI7QUFDQTlELGNBQUUrRCxlQUFGLENBQWtCUCxDQUFsQixHQUNBeEQsRUFBRWdFLG1CQUFGLEVBREE7QUFFQSxnQkFBSWxDLElBQUksSUFBSWhELEdBQUdtRixXQUFQLENBQW1CakUsQ0FBbkIsQ0FBUjtBQUNBK0IsY0FBRXJDLFlBQUYsQ0FBZXdFLFdBQWYsR0FBNkJwQyxDQUE3QjtBQUNILFNBTkQsRUFNRyxFQU5ILENBSEE7QUFVSCxLQXZHSTtBQXdHTGhCLGVBQVcscUJBQVU7QUFDakJoQyxXQUFHcUQsSUFBSCxDQUFRaUIsSUFBUixDQUFhLEVBQUMzRCxTQUFTLFlBQVYsRUFBYjtBQUNIO0FBMUdJLENBQVQiLCJmaWxlIjoic2hvcE11YVh1LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxUaWV1UmVkXFxNdWFYdSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyICAgICAgPSByZXF1aXJlKCdIZWxwZXInKTtcclxudmFyIEJyb3dzZXJVdGlsID0gcmVxdWlyZSgnQnJvd3NlclV0aWwnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgeHU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcHRjaGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcGNoYVNwcml0ZTogY2MuU3ByaXRlLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmVkaXRib3hzID0gW3RoaXMucmVkLCB0aGlzLmNhcHRjaGFdO1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlID0gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkudGFiID8gKHNlbGYuY2hhbmdlTmV4dEZvY3VzRWRpdEJveCgpLFxyXG4gICAgICAgICAgICAgICAgdC5wcmV2ZW50RGVmYXVsdCAmJiB0LnByZXZlbnREZWZhdWx0KCksXHJcbiAgICAgICAgICAgICAgICAhMSkgOiB0LmtleUNvZGUgPT09IGNjLm1hY3JvLktFWS5lbnRlciA/IChCcm93c2VyVXRpbC5mb2N1c0dhbWUoKSwgc2VsZi5vbkNsaWNrTXVhKCksXHJcbiAgICAgICAgICAgICAgICB0LnByZXZlbnREZWZhdWx0ICYmIHQucHJldmVudERlZmF1bHQoKSxcclxuICAgICAgICAgICAgICAgICExKSA6IHZvaWQgMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLnN5cy5pc0Jyb3dzZXIgJiYgdGhpcy5hZGRFdmVudCgpO1xyXG4gICAgICAgIHRoaXMucmVDYXB0Y2hhKCk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLnJlbW92ZUV2ZW50KCk7XHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgfSxcclxuICAgIGFkZEV2ZW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgICAgICBmb3IgKHZhciB0IGluIHRoaXMuZWRpdGJveHMpIHtcclxuICAgICAgICAgICAgQnJvd3NlclV0aWwuZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3godGhpcy5lZGl0Ym94c1t0XSkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5rZXlIYW5kbGUsICExKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVFdmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdCBpbiB0aGlzLmVkaXRib3hzKSB7XHJcbiAgICAgICAgICAgIEJyb3dzZXJVdGlsLmdldEhUTUxFbGVtZW50QnlFZGl0Qm94KHRoaXMuZWRpdGJveHNbdF0pLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5SGFuZGxlLCAhMSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93bjogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkudGFiOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RvcCgpICYmIHRoaXMuY2hhbmdlTmV4dEZvY3VzRWRpdEJveCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmVudGVyOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1RvcCgpICYmIHRoaXMub25DbGlja011YSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGFuZ2VOZXh0Rm9jdXNFZGl0Qm94OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IgKHZhciB0ID0gITEsIGUgPSAwLCBpID0gdGhpcy5lZGl0Ym94cy5sZW5ndGg7IGUgPCBpOyBlKyspe1xyXG4gICAgICAgICAgICBpZiAoQnJvd3NlclV0aWwuY2hlY2tFZGl0Qm94Rm9jdXModGhpcy5lZGl0Ym94c1tlXSkpIHtcclxuICAgICAgICAgICAgICAgIEJyb3dzZXJVdGlsLmZvY3VzRWRpdEJveCh0aGlzLmVkaXRib3hzW2VdKTtcclxuICAgICAgICAgICAgICAgIHQgPSAhMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgIXQgJiYgMCA8IHRoaXMuZWRpdGJveHMubGVuZ3RoICYmIEJyb3dzZXJVdGlsLmZvY3VzRWRpdEJveCh0aGlzLmVkaXRib3hzWzBdKTtcclxuICAgIH0sXHJcbiAgICBpc1RvcDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuICFjYy5SZWRULmluR2FtZS5ub3RpY2Uubm9kZS5hY3RpdmUgJiYgIWNjLlJlZFQuaW5HYW1lLmxvYWRpbmcuYWN0aXZlO1xyXG4gICAgfSxcclxuICAgIGNsZWFuOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVkLnN0cmluZyA9IHRoaXMueHUuc3RyaW5nID0gdGhpcy5jYXB0Y2hhLnN0cmluZyA9ICcnO1xyXG4gICAgfSxcclxuICAgIG9uQ2hhbmdlcjogZnVuY3Rpb24ocmVkKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlICAgID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyhyZWQpO1xyXG4gICAgICAgIHZhciB2YWx1ZVJlZCA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHZhbHVlKTtcclxuXHJcbiAgICAgICAgdGhpcy54dS5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXModmFsdWUqMyk7XHJcbiAgICAgICAgdGhpcy5yZWQuc3RyaW5nID0gdmFsdWVSZWQgPT0gXCIwXCIgPyBcIlwiIDogdmFsdWVSZWQ7XHJcbiAgICB9LFxyXG4gICAgb25DbGlja011YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHBhcnNlSW50KGhlbHBlci5pc0VtcHR5KHRoaXMucmVkLnN0cmluZykgfHwgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLnJlZC5zdHJpbmcpKSA8IDEwMDApIHtcclxuICAgICAgICAgICAgY2MuUmVkVC5pbkdhbWUubm90aWNlLnNob3coe3RpdGxlOiBcIlwiLCB0ZXh0OiBcIlPhu5EgUkVEIG11YSBYVSB04buRaSB0aGnhu4N1IGzDoCAxLjAwMFwifSlcclxuICAgICAgICB9ZWxzZSBpZihoZWxwZXIuaXNFbXB0eSh0aGlzLmNhcHRjaGEuc3RyaW5nKSl7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLm5vdGljZS5zaG93KHt0aXRsZTogXCJcIiwgdGV4dDogXCJWdWkgbMOybmcgbmjhuq1wIGNow61uaCB4w6FjIG3DoyB4w6FjIG5o4bqtbi5cIn0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuc2VuZCh7c2hvcDp7bXVhX3h1OntyZWQ6IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5yZWQuc3RyaW5nKSwgY2FwdGNoYTogdGhpcy5jYXB0Y2hhLnN0cmluZ319fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRDYXB0Y2hhOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzXHJcbiAgICAgICAgICAsIG8gPSBuZXcgSW1hZ2U7XHJcbiAgICAgICAgby5zcmMgPSB0LFxyXG4gICAgICAgIG8ud2lkdGggPSAxNTAsXHJcbiAgICAgICAgby5oZWlnaHQgPSA1MCxcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IG5ldyBjYy5UZXh0dXJlMkQ7XHJcbiAgICAgICAgICAgIHQuaW5pdFdpdGhFbGVtZW50KG8pLFxyXG4gICAgICAgICAgICB0LmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodCk7XHJcbiAgICAgICAgICAgIGkuY2FwY2hhU3ByaXRlLnNwcml0ZUZyYW1lID0gZVxyXG4gICAgICAgIH0sIDEwKVxyXG4gICAgfSxcclxuICAgIHJlQ2FwdGNoYTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2NhcHRjaGE6ICd3aXRoZHJhd1h1J30pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==