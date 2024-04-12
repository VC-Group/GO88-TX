
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/NapRed/NapThe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7de7cl1cylKKYoILmVbposx', 'NapThe');
// Script/Model/Dialog/Shop/NapRed/NapThe.js

'use strict';

var BrowserUtil = require('BrowserUtil');
var helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        header: cc.Node,
        body: cc.Node,
        NhanhMang: {
            default: null,
            type: cc.Label
        },
        MenhGia: {
            default: null,
            type: cc.Label
        },
        SoThe: {
            default: null,
            type: cc.EditBox
        },
        SoSeri: {
            default: null,
            type: cc.EditBox
        },
        moreNhaMang: cc.Node,
        moreMenhGia: cc.Node,
        scrollviewNhaMang: {
            default: null,
            type: cc.ScrollView
        },
        scrollviewMenhGia: {
            default: null,
            type: cc.ScrollView
        },
        bangGia: {
            default: null,
            type: cc.ScrollView
        },
        prefabLeft: {
            default: null,
            type: cc.Prefab
        },
        prefabRight: {
            default: null,
            type: cc.Prefab
        },
        captcha: {
            default: null,
            type: cc.EditBox
        },
        capchaSprite: cc.Sprite
    },
    init: function init() {
        this.editboxs = [this.SoThe, this.SoSeri, this.captcha];
        this.keyHandle = function (t) {
            return t.keyCode === cc.macro.KEY.tab ? (this.isTop() && this.changeNextFocusEditBox(), t.preventDefault && t.preventDefault(), !1) : t.keyCode === cc.macro.KEY.enter ? (BrowserUtil.focusGame(), this.onNapClick(), t.preventDefault && t.preventDefault(), !1) : void 0;
        }.bind(this);
        this.header = this.header.children.map(function (obj) {
            return obj.getComponent('itemContentMenu');
        });
    },

    onEnable: function onEnable() {
        cc.sys.isBrowser && this.addEvent();
        this.reCaptcha();
    },
    onDisable: function onDisable() {
        this.moreNhaMang.active = this.moreMenhGia.active = false;
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
        return !this.moreNhaMang.active && !this.moreMenhGia.active && !cc.RedT.inGame.notice.node.active && !cc.RedT.inGame.loading.active;
    },
    clean: function clean() {
        this.SoThe.string = this.SoSeri.string = this.captcha.string = '';
    },
    onNapClick: function onNapClick() {
        if (this.SoThe.string.length < 11 || this.SoSeri.string.length < 11) {
            cc.RedT.inGame.notice.show({ title: "", text: "Thông Tin không hợp lệ..." });
        } else if (helper.isEmpty(this.captcha.string)) {
            cc.RedT.inGame.notice.show({ title: "", text: "Vui lòng nhập chính xác mã xác nhận." });
        } else {
            cc.RedT.inGame.bgLoading.onData({ active: true, text: 'Đang gửi dữ liệu...' });
            cc.RedT.send({ shop: { nap_the: { nhamang: this.NhanhMang.string, menhgia: helper.getOnlyNumberInString(this.MenhGia.string), mathe: this.SoThe.string, seri: this.SoSeri.string, captcha: this.captcha.string } } });
        }
    },
    onSelectHead: function onSelectHead(event, name) {
        this.header.forEach(function (header) {
            if (header.node.name === name) {
                header.select();
            } else {
                header.unselect();
            }
        });
        this.body.children.forEach(function (body) {
            if (body.name === name) {
                body.active = true;
            } else {
                body.active = false;
            }
        });
    },
    toggleMoreNhaMang: function toggleMoreNhaMang() {
        this.moreNhaMang.active = !this.moreNhaMang.active;
        this.moreMenhGia.active = !1;
    },
    toggleMoreMenhGia: function toggleMoreMenhGia() {
        this.moreMenhGia.active = !this.moreMenhGia.active;
    },
    infoSet: function infoSet(data, i_arg, i_text) {
        var nhamang = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (data.length > 0) {
            this[i_arg] = data.map(function (obj, index) {
                var item = cc.instantiate(this.prefabLeft);
                var componentLeft = item.getComponent('NapRed_itemOne');
                componentLeft.init(this, i_arg, i_text, nhamang ? 'toggleMoreNhaMang' : 'toggleMoreMenhGia');
                if (nhamang) {
                    if (index == 0) {
                        componentLeft.background.active = true;
                        this.NhanhMang.string = obj.name;
                    }
                    componentLeft.text.string = obj.name;
                    this.scrollviewNhaMang.content.addChild(item);
                } else {
                    var name = helper.numberWithCommas(obj.name);
                    var value = helper.numberWithCommas(obj.values);
                    if (index == 0) {
                        componentLeft.background.active = true;
                        this.MenhGia.string = name;
                    }
                    componentLeft.text.string = name;
                    this.scrollviewMenhGia.content.addChild(item);
                    var itemR = cc.instantiate(this.prefabRight);
                    itemR = itemR.getComponent('NapRed_itemTT');
                    itemR.init(name, value);
                    itemR.bg.active = index % 2;
                    this.bangGia.content.addChild(itemR.node);
                }
                return componentLeft;
            }.bind(this));
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
        cc.RedT.send({ captcha: 'chargeCard' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXE5hcFJlZC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxOYXBSZWQvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXE5hcFJlZFxcTmFwVGhlLmpzIl0sIm5hbWVzIjpbIkJyb3dzZXJVdGlsIiwicmVxdWlyZSIsImhlbHBlciIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhlYWRlciIsIk5vZGUiLCJib2R5IiwiTmhhbmhNYW5nIiwiZGVmYXVsdCIsInR5cGUiLCJMYWJlbCIsIk1lbmhHaWEiLCJTb1RoZSIsIkVkaXRCb3giLCJTb1NlcmkiLCJtb3JlTmhhTWFuZyIsIm1vcmVNZW5oR2lhIiwic2Nyb2xsdmlld05oYU1hbmciLCJTY3JvbGxWaWV3Iiwic2Nyb2xsdmlld01lbmhHaWEiLCJiYW5nR2lhIiwicHJlZmFiTGVmdCIsIlByZWZhYiIsInByZWZhYlJpZ2h0IiwiY2FwdGNoYSIsImNhcGNoYVNwcml0ZSIsIlNwcml0ZSIsImluaXQiLCJlZGl0Ym94cyIsImtleUhhbmRsZSIsInQiLCJrZXlDb2RlIiwibWFjcm8iLCJLRVkiLCJ0YWIiLCJpc1RvcCIsImNoYW5nZU5leHRGb2N1c0VkaXRCb3giLCJwcmV2ZW50RGVmYXVsdCIsImVudGVyIiwiZm9jdXNHYW1lIiwib25OYXBDbGljayIsImJpbmQiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsImdldENvbXBvbmVudCIsIm9uRW5hYmxlIiwic3lzIiwiaXNCcm93c2VyIiwiYWRkRXZlbnQiLCJyZUNhcHRjaGEiLCJvbkRpc2FibGUiLCJhY3RpdmUiLCJyZW1vdmVFdmVudCIsImNsZWFuIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJvbktleURvd24iLCJnZXRIVE1MRWxlbWVudEJ5RWRpdEJveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib2ZmIiwiZXZlbnQiLCJlIiwiaSIsImxlbmd0aCIsImNoZWNrRWRpdEJveEZvY3VzIiwiZm9jdXNFZGl0Qm94IiwiUmVkVCIsImluR2FtZSIsIm5vdGljZSIsIm5vZGUiLCJsb2FkaW5nIiwic3RyaW5nIiwic2hvdyIsInRpdGxlIiwidGV4dCIsImlzRW1wdHkiLCJiZ0xvYWRpbmciLCJvbkRhdGEiLCJzZW5kIiwic2hvcCIsIm5hcF90aGUiLCJuaGFtYW5nIiwibWVuaGdpYSIsImdldE9ubHlOdW1iZXJJblN0cmluZyIsIm1hdGhlIiwic2VyaSIsIm9uU2VsZWN0SGVhZCIsIm5hbWUiLCJmb3JFYWNoIiwic2VsZWN0IiwidW5zZWxlY3QiLCJ0b2dnbGVNb3JlTmhhTWFuZyIsInRvZ2dsZU1vcmVNZW5oR2lhIiwiaW5mb1NldCIsImRhdGEiLCJpX2FyZyIsImlfdGV4dCIsImluZGV4IiwiaXRlbSIsImluc3RhbnRpYXRlIiwiY29tcG9uZW50TGVmdCIsImJhY2tncm91bmQiLCJjb250ZW50IiwiYWRkQ2hpbGQiLCJudW1iZXJXaXRoQ29tbWFzIiwidmFsdWUiLCJ2YWx1ZXMiLCJpdGVtUiIsImJnIiwiaW5pdENhcHRjaGEiLCJvIiwiSW1hZ2UiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsInNldFRpbWVvdXQiLCJUZXh0dXJlMkQiLCJpbml0V2l0aEVsZW1lbnQiLCJoYW5kbGVMb2FkZWRUZXh0dXJlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxjQUFjQyxRQUFRLGFBQVIsQ0FBbEI7QUFDQSxJQUFJQyxTQUFjRCxRQUFRLFFBQVIsQ0FBbEI7O0FBRUFFLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxnQkFBUUwsR0FBR00sSUFESDtBQUVSQyxjQUFNUCxHQUFHTSxJQUZEO0FBR1JFLG1CQUFXO0FBQ1BDLHFCQUFTLElBREY7QUFFUEMsa0JBQU1WLEdBQUdXO0FBRkYsU0FISDtBQU9SQyxpQkFBUztBQUNMSCxxQkFBUyxJQURKO0FBRUxDLGtCQUFNVixHQUFHVztBQUZKLFNBUEQ7QUFXUkUsZUFBTztBQUNISixxQkFBUyxJQUROO0FBRUhDLGtCQUFNVixHQUFHYztBQUZOLFNBWEM7QUFlUkMsZ0JBQVE7QUFDSk4scUJBQVMsSUFETDtBQUVKQyxrQkFBTVYsR0FBR2M7QUFGTCxTQWZBO0FBbUJSRSxxQkFBYWhCLEdBQUdNLElBbkJSO0FBb0JSVyxxQkFBYWpCLEdBQUdNLElBcEJSO0FBcUJSWSwyQkFBbUI7QUFDZlQscUJBQVMsSUFETTtBQUVmQyxrQkFBTVYsR0FBR21CO0FBRk0sU0FyQlg7QUF5QlJDLDJCQUFtQjtBQUNmWCxxQkFBUyxJQURNO0FBRWZDLGtCQUFNVixHQUFHbUI7QUFGTSxTQXpCWDtBQTZCUkUsaUJBQVM7QUFDTFoscUJBQVMsSUFESjtBQUVMQyxrQkFBTVYsR0FBR21CO0FBRkosU0E3QkQ7QUFpQ1JHLG9CQUFZO0FBQ1JiLHFCQUFTLElBREQ7QUFFUkMsa0JBQU1WLEdBQUd1QjtBQUZELFNBakNKO0FBcUNSQyxxQkFBYTtBQUNUZixxQkFBUyxJQURBO0FBRVRDLGtCQUFNVixHQUFHdUI7QUFGQSxTQXJDTDtBQXlDUkUsaUJBQVM7QUFDTGhCLHFCQUFTLElBREo7QUFFTEMsa0JBQU1WLEdBQUdjO0FBRkosU0F6Q0Q7QUE2Q1JZLHNCQUFjMUIsR0FBRzJCO0FBN0NULEtBSFA7QUFrRExDLFFBbERLLGtCQWtEQztBQUNGLGFBQUtDLFFBQUwsR0FBZ0IsQ0FBQyxLQUFLaEIsS0FBTixFQUFhLEtBQUtFLE1BQWxCLEVBQTBCLEtBQUtVLE9BQS9CLENBQWhCO0FBQ0EsYUFBS0ssU0FBTCxHQUFpQixVQUFTQyxDQUFULEVBQVk7QUFDekIsbUJBQU9BLEVBQUVDLE9BQUYsS0FBY2hDLEdBQUdpQyxLQUFILENBQVNDLEdBQVQsQ0FBYUMsR0FBM0IsSUFBa0MsS0FBS0MsS0FBTCxNQUFnQixLQUFLQyxzQkFBTCxFQUFoQixFQUNyQ04sRUFBRU8sY0FBRixJQUFvQlAsRUFBRU8sY0FBRixFQURpQixFQUVyQyxDQUFDLENBRkUsSUFFR1AsRUFBRUMsT0FBRixLQUFjaEMsR0FBR2lDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhSyxLQUEzQixJQUFvQzFDLFlBQVkyQyxTQUFaLElBQXlCLEtBQUtDLFVBQUwsRUFBekIsRUFDMUNWLEVBQUVPLGNBQUYsSUFBb0JQLEVBQUVPLGNBQUYsRUFEc0IsRUFFMUMsQ0FBQyxDQUZLLElBRUEsS0FBSyxDQUpmO0FBS0gsU0FOZ0IsQ0FNZkksSUFOZSxDQU1WLElBTlUsQ0FBakI7QUFPQSxhQUFLckMsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWXNDLFFBQVosQ0FBcUJDLEdBQXJCLENBQXlCLFVBQVNDLEdBQVQsRUFBYztBQUNqRCxtQkFBT0EsSUFBSUMsWUFBSixDQUFpQixpQkFBakIsQ0FBUDtBQUNILFNBRmEsQ0FBZDtBQUdILEtBOURJOztBQStETEMsY0FBVSxvQkFBWTtBQUNsQi9DLFdBQUdnRCxHQUFILENBQU9DLFNBQVAsSUFBb0IsS0FBS0MsUUFBTCxFQUFwQjtBQUNBLGFBQUtDLFNBQUw7QUFDSCxLQWxFSTtBQW1FTEMsZUFBVyxxQkFBWTtBQUNuQixhQUFLcEMsV0FBTCxDQUFpQnFDLE1BQWpCLEdBQTBCLEtBQUtwQyxXQUFMLENBQWlCb0MsTUFBakIsR0FBMEIsS0FBcEQ7QUFDQXJELFdBQUdnRCxHQUFILENBQU9DLFNBQVAsSUFBb0IsS0FBS0ssV0FBTCxFQUFwQjtBQUNBLGFBQUtDLEtBQUw7QUFDSCxLQXZFSTtBQXdFTEwsY0FBVSxvQkFBVztBQUNqQmxELFdBQUd3RCxXQUFILENBQWVDLEVBQWYsQ0FBa0J6RCxHQUFHMEQsV0FBSCxDQUFlQyxTQUFmLENBQXlCQyxRQUEzQyxFQUFxRCxLQUFLQyxTQUExRCxFQUFxRSxJQUFyRTtBQUNBLGFBQUssSUFBSTlCLENBQVQsSUFBYyxLQUFLRixRQUFuQixFQUE2QjtBQUN6QmhDLHdCQUFZaUUsdUJBQVosQ0FBb0MsS0FBS2pDLFFBQUwsQ0FBY0UsQ0FBZCxDQUFwQyxFQUFzRGdDLGdCQUF0RCxDQUF1RSxTQUF2RSxFQUFrRixLQUFLakMsU0FBdkYsRUFBa0csQ0FBQyxDQUFuRztBQUNIO0FBQ0osS0E3RUk7QUE4RUx3QixpQkFBYSx1QkFBVztBQUNwQixhQUFLLElBQUl2QixDQUFULElBQWMsS0FBS0YsUUFBbkIsRUFBNkI7QUFDekJoQyx3QkFBWWlFLHVCQUFaLENBQW9DLEtBQUtqQyxRQUFMLENBQWNFLENBQWQsQ0FBcEMsRUFBc0RpQyxtQkFBdEQsQ0FBMEUsU0FBMUUsRUFBcUYsS0FBS2xDLFNBQTFGLEVBQXFHLENBQUMsQ0FBdEc7QUFDSDtBQUNEOUIsV0FBR3dELFdBQUgsQ0FBZVMsR0FBZixDQUFtQmpFLEdBQUcwRCxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTVDLEVBQXNELEtBQUtDLFNBQTNELEVBQXNFLElBQXRFO0FBQ0gsS0FuRkk7QUFvRkxBLGVBQVcsbUJBQVVLLEtBQVYsRUFBaUI7QUFDeEIsZ0JBQU9BLE1BQU1sQyxPQUFiO0FBQ0ksaUJBQUtoQyxHQUFHaUMsS0FBSCxDQUFTQyxHQUFULENBQWFDLEdBQWxCO0FBQ0kscUJBQUtDLEtBQUwsTUFBZ0IsS0FBS0Msc0JBQUwsRUFBaEI7QUFDQTtBQUNKLGlCQUFLckMsR0FBR2lDLEtBQUgsQ0FBU0MsR0FBVCxDQUFhSyxLQUFsQjtBQUNJLHFCQUFLSCxLQUFMLE1BQWdCLEtBQUtLLFVBQUwsRUFBaEI7QUFMUjtBQU9ILEtBNUZJO0FBNkZMSiw0QkFBd0Isa0NBQVc7QUFDL0IsYUFBSyxJQUFJTixJQUFJLENBQUMsQ0FBVCxFQUFZb0MsSUFBSSxDQUFoQixFQUFtQkMsSUFBSSxLQUFLdkMsUUFBTCxDQUFjd0MsTUFBMUMsRUFBa0RGLElBQUlDLENBQXRELEVBQXlERCxHQUF6RCxFQUE2RDtBQUN6RCxnQkFBSXRFLFlBQVl5RSxpQkFBWixDQUE4QixLQUFLekMsUUFBTCxDQUFjc0MsQ0FBZCxDQUE5QixDQUFKLEVBQXFEO0FBQ2pEdEUsNEJBQVkwRSxZQUFaLENBQXlCLEtBQUsxQyxRQUFMLENBQWNzQyxDQUFkLENBQXpCO0FBQ0FwQyxvQkFBSSxDQUFDLENBQUw7QUFDQTtBQUNIO0FBQ0o7QUFDRCxTQUFDQSxDQUFELElBQU0sSUFBSSxLQUFLRixRQUFMLENBQWN3QyxNQUF4QixJQUFrQ3hFLFlBQVkwRSxZQUFaLENBQXlCLEtBQUsxQyxRQUFMLENBQWMsQ0FBZCxDQUF6QixDQUFsQztBQUNILEtBdEdJO0FBdUdMTyxXQUFPLGlCQUFXO0FBQ2QsZUFBTyxDQUFDLEtBQUtwQixXQUFMLENBQWlCcUMsTUFBbEIsSUFBNEIsQ0FBQyxLQUFLcEMsV0FBTCxDQUFpQm9DLE1BQTlDLElBQXdELENBQUNyRCxHQUFHd0UsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JDLElBQXRCLENBQTJCdEIsTUFBcEYsSUFBOEYsQ0FBQ3JELEdBQUd3RSxJQUFILENBQVFDLE1BQVIsQ0FBZUcsT0FBZixDQUF1QnZCLE1BQTdIO0FBQ0gsS0F6R0k7QUEwR0xFLFdBQU8saUJBQVU7QUFDYixhQUFLMUMsS0FBTCxDQUFXZ0UsTUFBWCxHQUFvQixLQUFLOUQsTUFBTCxDQUFZOEQsTUFBWixHQUFxQixLQUFLcEQsT0FBTCxDQUFhb0QsTUFBYixHQUFzQixFQUEvRDtBQUNILEtBNUdJO0FBNkdMcEMsZ0JBQVksc0JBQVU7QUFDbEIsWUFBSSxLQUFLNUIsS0FBTCxDQUFXZ0UsTUFBWCxDQUFrQlIsTUFBbEIsR0FBMkIsRUFBM0IsSUFBaUMsS0FBS3RELE1BQUwsQ0FBWThELE1BQVosQ0FBbUJSLE1BQW5CLEdBQTRCLEVBQWpFLEVBQXFFO0FBQ2pFckUsZUFBR3dFLElBQUgsQ0FBUUMsTUFBUixDQUFlQyxNQUFmLENBQXNCSSxJQUF0QixDQUEyQixFQUFDQyxPQUFPLEVBQVIsRUFBWUMsTUFBTSwyQkFBbEIsRUFBM0I7QUFDSCxTQUZELE1BRU0sSUFBR2pGLE9BQU9rRixPQUFQLENBQWUsS0FBS3hELE9BQUwsQ0FBYW9ELE1BQTVCLENBQUgsRUFBdUM7QUFDekM3RSxlQUFHd0UsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JJLElBQXRCLENBQTJCLEVBQUNDLE9BQU8sRUFBUixFQUFZQyxNQUFNLHNDQUFsQixFQUEzQjtBQUNILFNBRkssTUFFRDtBQUNEaEYsZUFBR3dFLElBQUgsQ0FBUUMsTUFBUixDQUFlUyxTQUFmLENBQXlCQyxNQUF6QixDQUFnQyxFQUFDOUIsUUFBUSxJQUFULEVBQWUyQixNQUFNLHFCQUFyQixFQUFoQztBQUNBaEYsZUFBR3dFLElBQUgsQ0FBUVksSUFBUixDQUFhLEVBQUNDLE1BQUssRUFBQ0MsU0FBUSxFQUFDQyxTQUFTLEtBQUsvRSxTQUFMLENBQWVxRSxNQUF6QixFQUFpQ1csU0FBU3pGLE9BQU8wRixxQkFBUCxDQUE2QixLQUFLN0UsT0FBTCxDQUFhaUUsTUFBMUMsQ0FBMUMsRUFBNkZhLE9BQU8sS0FBSzdFLEtBQUwsQ0FBV2dFLE1BQS9HLEVBQXVIYyxNQUFLLEtBQUs1RSxNQUFMLENBQVk4RCxNQUF4SSxFQUFnSnBELFNBQVMsS0FBS0EsT0FBTCxDQUFhb0QsTUFBdEssRUFBVCxFQUFOLEVBQWI7QUFDSDtBQUNKLEtBdEhJO0FBdUhMZSxrQkFBYyxzQkFBUzFCLEtBQVQsRUFBZ0IyQixJQUFoQixFQUFxQjtBQUMvQixhQUFLeEYsTUFBTCxDQUFZeUYsT0FBWixDQUFvQixVQUFTekYsTUFBVCxFQUFpQjtBQUNqQyxnQkFBSUEsT0FBT3NFLElBQVAsQ0FBWWtCLElBQVosS0FBcUJBLElBQXpCLEVBQStCO0FBQzNCeEYsdUJBQU8wRixNQUFQO0FBQ0gsYUFGRCxNQUVLO0FBQ0QxRix1QkFBTzJGLFFBQVA7QUFDSDtBQUNKLFNBTkQ7QUFPQSxhQUFLekYsSUFBTCxDQUFVb0MsUUFBVixDQUFtQm1ELE9BQW5CLENBQTJCLFVBQVN2RixJQUFULEVBQWU7QUFDdEMsZ0JBQUlBLEtBQUtzRixJQUFMLEtBQWNBLElBQWxCLEVBQXdCO0FBQ3BCdEYscUJBQUs4QyxNQUFMLEdBQWMsSUFBZDtBQUNILGFBRkQsTUFFSztBQUNEOUMscUJBQUs4QyxNQUFMLEdBQWMsS0FBZDtBQUNIO0FBQ0osU0FORDtBQU9ILEtBdElJO0FBdUlMNEMsdUJBQW1CLDZCQUFVO0FBQ3pCLGFBQUtqRixXQUFMLENBQWlCcUMsTUFBakIsR0FBMEIsQ0FBQyxLQUFLckMsV0FBTCxDQUFpQnFDLE1BQTVDO0FBQ0EsYUFBS3BDLFdBQUwsQ0FBaUJvQyxNQUFqQixHQUEwQixDQUFDLENBQTNCO0FBQ0gsS0ExSUk7QUEySUw2Qyx1QkFBbUIsNkJBQVU7QUFDekIsYUFBS2pGLFdBQUwsQ0FBaUJvQyxNQUFqQixHQUEwQixDQUFDLEtBQUtwQyxXQUFMLENBQWlCb0MsTUFBNUM7QUFDSCxLQTdJSTtBQThJTDhDLGFBQVMsaUJBQVNDLElBQVQsRUFBZUMsS0FBZixFQUFzQkMsTUFBdEIsRUFBOEM7QUFBQSxZQUFoQmYsT0FBZ0IsdUVBQU4sS0FBTTs7QUFDbkQsWUFBSWEsS0FBSy9CLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNqQixpQkFBS2dDLEtBQUwsSUFBY0QsS0FBS3hELEdBQUwsQ0FBUyxVQUFTQyxHQUFULEVBQWMwRCxLQUFkLEVBQW9CO0FBQ3ZDLG9CQUFJQyxPQUFPeEcsR0FBR3lHLFdBQUgsQ0FBZSxLQUFLbkYsVUFBcEIsQ0FBWDtBQUNBLG9CQUFJb0YsZ0JBQWdCRixLQUFLMUQsWUFBTCxDQUFrQixnQkFBbEIsQ0FBcEI7QUFDQTRELDhCQUFjOUUsSUFBZCxDQUFtQixJQUFuQixFQUF5QnlFLEtBQXpCLEVBQWdDQyxNQUFoQyxFQUF1Q2YsVUFBUSxtQkFBUixHQUE0QixtQkFBbkU7QUFDQSxvQkFBSUEsT0FBSixFQUFhO0FBQ1Qsd0JBQUlnQixTQUFTLENBQWIsRUFBZ0I7QUFDWkcsc0NBQWNDLFVBQWQsQ0FBeUJ0RCxNQUF6QixHQUFrQyxJQUFsQztBQUNBLDZCQUFLN0MsU0FBTCxDQUFlcUUsTUFBZixHQUF3QmhDLElBQUlnRCxJQUE1QjtBQUNIO0FBQ0RhLGtDQUFjMUIsSUFBZCxDQUFtQkgsTUFBbkIsR0FBNEJoQyxJQUFJZ0QsSUFBaEM7QUFDQSx5QkFBSzNFLGlCQUFMLENBQXVCMEYsT0FBdkIsQ0FBK0JDLFFBQS9CLENBQXdDTCxJQUF4QztBQUNILGlCQVBELE1BT0s7QUFDRCx3QkFBSVgsT0FBUTlGLE9BQU8rRyxnQkFBUCxDQUF3QmpFLElBQUlnRCxJQUE1QixDQUFaO0FBQ0Esd0JBQUlrQixRQUFRaEgsT0FBTytHLGdCQUFQLENBQXdCakUsSUFBSW1FLE1BQTVCLENBQVo7QUFDQSx3QkFBSVQsU0FBUyxDQUFiLEVBQWdCO0FBQ1pHLHNDQUFjQyxVQUFkLENBQXlCdEQsTUFBekIsR0FBa0MsSUFBbEM7QUFDQSw2QkFBS3pDLE9BQUwsQ0FBYWlFLE1BQWIsR0FBc0JnQixJQUF0QjtBQUNIO0FBQ0RhLGtDQUFjMUIsSUFBZCxDQUFtQkgsTUFBbkIsR0FBNEJnQixJQUE1QjtBQUNBLHlCQUFLekUsaUJBQUwsQ0FBdUJ3RixPQUF2QixDQUErQkMsUUFBL0IsQ0FBd0NMLElBQXhDO0FBQ0Esd0JBQUlTLFFBQVFqSCxHQUFHeUcsV0FBSCxDQUFlLEtBQUtqRixXQUFwQixDQUFaO0FBQ0F5Riw0QkFBUUEsTUFBTW5FLFlBQU4sQ0FBbUIsZUFBbkIsQ0FBUjtBQUNBbUUsMEJBQU1yRixJQUFOLENBQVdpRSxJQUFYLEVBQWlCa0IsS0FBakI7QUFDQUUsMEJBQU1DLEVBQU4sQ0FBUzdELE1BQVQsR0FBa0JrRCxRQUFNLENBQXhCO0FBQ0EseUJBQUtsRixPQUFMLENBQWF1RixPQUFiLENBQXFCQyxRQUFyQixDQUE4QkksTUFBTXRDLElBQXBDO0FBQ0g7QUFDRCx1QkFBTytCLGFBQVA7QUFDSCxhQTNCc0IsQ0EyQnJCaEUsSUEzQnFCLENBMkJoQixJQTNCZ0IsQ0FBVCxDQUFkO0FBNEJIO0FBQ0osS0E3S0k7QUE4S0x5RSxpQkFBYSxxQkFBU3BGLENBQVQsRUFBWTtBQUNyQixZQUFJcUMsSUFBSSxJQUFSO0FBQUEsWUFDSWdELElBQUksSUFBSUMsS0FBSixFQURSO0FBRUFELFVBQUVFLEdBQUYsR0FBUXZGLENBQVIsRUFDQXFGLEVBQUVHLEtBQUYsR0FBVSxHQURWLEVBRUFILEVBQUVJLE1BQUYsR0FBVyxFQUZYLEVBR0FDLFdBQVcsWUFBVztBQUNsQixnQkFBSTFGLElBQUksSUFBSS9CLEdBQUcwSCxTQUFQLEVBQVI7QUFDQTNGLGNBQUU0RixlQUFGLENBQWtCUCxDQUFsQixHQUNBckYsRUFBRTZGLG1CQUFGLEVBREE7QUFFQSxnQkFBSXpELElBQUksSUFBSW5FLEdBQUc2SCxXQUFQLENBQW1COUYsQ0FBbkIsQ0FBUjtBQUNBcUMsY0FBRTFDLFlBQUYsQ0FBZW9HLFdBQWYsR0FBNkIzRCxDQUE3QjtBQUNILFNBTkQsRUFNRyxFQU5ILENBSEE7QUFVSCxLQTNMSTtBQTRMTGhCLGVBQVcscUJBQVU7QUFDakJuRCxXQUFHd0UsSUFBSCxDQUFRWSxJQUFSLENBQWEsRUFBQzNELFNBQVEsWUFBVCxFQUFiO0FBQ0g7QUE5TEksQ0FBVCIsImZpbGUiOiJOYXBUaGUuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcTmFwUmVkIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBCcm93c2VyVXRpbCA9IHJlcXVpcmUoJ0Jyb3dzZXJVdGlsJyk7XHJcbnZhciBoZWxwZXIgICAgICA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBoZWFkZXI6IGNjLk5vZGUsXHJcbiAgICAgICAgYm9keTogY2MuTm9kZSxcclxuICAgICAgICBOaGFuaE1hbmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBNZW5oR2lhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgU29UaGU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIFNvU2VyaToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9yZU5oYU1hbmc6IGNjLk5vZGUsXHJcbiAgICAgICAgbW9yZU1lbmhHaWE6IGNjLk5vZGUsXHJcbiAgICAgICAgc2Nyb2xsdmlld05oYU1hbmc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlldyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNjcm9sbHZpZXdNZW5oR2lhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYW5nR2lhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVmYWJMZWZ0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZWZhYlJpZ2h0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcHRjaGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuRWRpdEJveCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcGNoYVNwcml0ZTogY2MuU3ByaXRlLFxyXG4gICAgfSxcclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLmVkaXRib3hzID0gW3RoaXMuU29UaGUsIHRoaXMuU29TZXJpLCB0aGlzLmNhcHRjaGFdO1xyXG4gICAgICAgIHRoaXMua2V5SGFuZGxlID0gZnVuY3Rpb24odCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkudGFiID8gKHRoaXMuaXNUb3AoKSAmJiB0aGlzLmNoYW5nZU5leHRGb2N1c0VkaXRCb3goKSxcclxuICAgICAgICAgICAgICAgIHQucHJldmVudERlZmF1bHQgJiYgdC5wcmV2ZW50RGVmYXVsdCgpLFxyXG4gICAgICAgICAgICAgICAgITEpIDogdC5rZXlDb2RlID09PSBjYy5tYWNyby5LRVkuZW50ZXIgPyAoQnJvd3NlclV0aWwuZm9jdXNHYW1lKCksIHRoaXMub25OYXBDbGljaygpLFxyXG4gICAgICAgICAgICAgICAgdC5wcmV2ZW50RGVmYXVsdCAmJiB0LnByZXZlbnREZWZhdWx0KCksXHJcbiAgICAgICAgICAgICAgICAhMSkgOiB2b2lkIDBcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlci5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdpdGVtQ29udGVudE1lbnUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNjLnN5cy5pc0Jyb3dzZXIgJiYgdGhpcy5hZGRFdmVudCgpO1xyXG4gICAgICAgIHRoaXMucmVDYXB0Y2hhKCk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5tb3JlTmhhTWFuZy5hY3RpdmUgPSB0aGlzLm1vcmVNZW5oR2lhLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNjLnN5cy5pc0Jyb3dzZXIgJiYgdGhpcy5yZW1vdmVFdmVudCgpO1xyXG4gICAgICAgIHRoaXMuY2xlYW4oKTtcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICAgICAgZm9yICh2YXIgdCBpbiB0aGlzLmVkaXRib3hzKSB7XHJcbiAgICAgICAgICAgIEJyb3dzZXJVdGlsLmdldEhUTUxFbGVtZW50QnlFZGl0Qm94KHRoaXMuZWRpdGJveHNbdF0pLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMua2V5SGFuZGxlLCAhMSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvciAodmFyIHQgaW4gdGhpcy5lZGl0Ym94cykge1xyXG4gICAgICAgICAgICBCcm93c2VyVXRpbC5nZXRIVE1MRWxlbWVudEJ5RWRpdEJveCh0aGlzLmVkaXRib3hzW3RdKS5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmtleUhhbmRsZSwgITEpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sIHRoaXMub25LZXlEb3duLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbktleURvd246IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLnRhYjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUb3AoKSAmJiB0aGlzLmNoYW5nZU5leHRGb2N1c0VkaXRCb3goKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5lbnRlcjpcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNUb3AoKSAmJiB0aGlzLm9uTmFwQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlTmV4dEZvY3VzRWRpdEJveDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9ICExLCBlID0gMCwgaSA9IHRoaXMuZWRpdGJveHMubGVuZ3RoOyBlIDwgaTsgZSsrKXtcclxuICAgICAgICAgICAgaWYgKEJyb3dzZXJVdGlsLmNoZWNrRWRpdEJveEZvY3VzKHRoaXMuZWRpdGJveHNbZV0pKSB7XHJcbiAgICAgICAgICAgICAgICBCcm93c2VyVXRpbC5mb2N1c0VkaXRCb3godGhpcy5lZGl0Ym94c1tlXSk7XHJcbiAgICAgICAgICAgICAgICB0ID0gITA7XHJcbiAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICF0ICYmIDAgPCB0aGlzLmVkaXRib3hzLmxlbmd0aCAmJiBCcm93c2VyVXRpbC5mb2N1c0VkaXRCb3godGhpcy5lZGl0Ym94c1swXSk7XHJcbiAgICB9LFxyXG4gICAgaXNUb3A6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5tb3JlTmhhTWFuZy5hY3RpdmUgJiYgIXRoaXMubW9yZU1lbmhHaWEuYWN0aXZlICYmICFjYy5SZWRULmluR2FtZS5ub3RpY2Uubm9kZS5hY3RpdmUgJiYgIWNjLlJlZFQuaW5HYW1lLmxvYWRpbmcuYWN0aXZlO1xyXG4gICAgfSxcclxuICAgIGNsZWFuOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuU29UaGUuc3RyaW5nID0gdGhpcy5Tb1Nlcmkuc3RyaW5nID0gdGhpcy5jYXB0Y2hhLnN0cmluZyA9ICcnO1xyXG4gICAgfSxcclxuICAgIG9uTmFwQ2xpY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuU29UaGUuc3RyaW5nLmxlbmd0aCA8IDExIHx8IHRoaXMuU29TZXJpLnN0cmluZy5sZW5ndGggPCAxMSkge1xyXG4gICAgICAgICAgICBjYy5SZWRULmluR2FtZS5ub3RpY2Uuc2hvdyh7dGl0bGU6IFwiXCIsIHRleHQ6IFwiVGjDtG5nIFRpbiBraMO0bmcgaOG7o3AgbOG7hy4uLlwifSlcclxuICAgICAgICB9ZWxzZSBpZihoZWxwZXIuaXNFbXB0eSh0aGlzLmNhcHRjaGEuc3RyaW5nKSl7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLm5vdGljZS5zaG93KHt0aXRsZTogXCJcIiwgdGV4dDogXCJWdWkgbMOybmcgbmjhuq1wIGNow61uaCB4w6FjIG3DoyB4w6FjIG5o4bqtbi5cIn0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLmJnTG9hZGluZy5vbkRhdGEoe2FjdGl2ZTogdHJ1ZSwgdGV4dDogJ8SQYW5nIGfhu61pIGThu68gbGnhu4d1Li4uJ30pO1xyXG4gICAgICAgICAgICBjYy5SZWRULnNlbmQoe3Nob3A6e25hcF90aGU6e25oYW1hbmc6IHRoaXMuTmhhbmhNYW5nLnN0cmluZywgbWVuaGdpYTogaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLk1lbmhHaWEuc3RyaW5nKSwgbWF0aGU6IHRoaXMuU29UaGUuc3RyaW5nLCBzZXJpOnRoaXMuU29TZXJpLnN0cmluZywgY2FwdGNoYTogdGhpcy5jYXB0Y2hhLnN0cmluZ319fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0SGVhZDogZnVuY3Rpb24oZXZlbnQsIG5hbWUpe1xyXG4gICAgICAgIHRoaXMuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChoZWFkZXIubm9kZS5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmJvZHkuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihib2R5KSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5Lm5hbWUgPT09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9nZ2xlTW9yZU5oYU1hbmc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5tb3JlTmhhTWFuZy5hY3RpdmUgPSAhdGhpcy5tb3JlTmhhTWFuZy5hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5tb3JlTWVuaEdpYS5hY3RpdmUgPSAhMTtcclxuICAgIH0sXHJcbiAgICB0b2dnbGVNb3JlTWVuaEdpYTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm1vcmVNZW5oR2lhLmFjdGl2ZSA9ICF0aGlzLm1vcmVNZW5oR2lhLmFjdGl2ZTtcclxuICAgIH0sXHJcbiAgICBpbmZvU2V0OiBmdW5jdGlvbihkYXRhLCBpX2FyZywgaV90ZXh0LCBuaGFtYW5nID0gZmFsc2Upe1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpc1tpX2FyZ10gPSBkYXRhLm1hcChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJMZWZ0KTtcclxuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnRMZWZ0ID0gaXRlbS5nZXRDb21wb25lbnQoJ05hcFJlZF9pdGVtT25lJyk7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRMZWZ0LmluaXQodGhpcywgaV9hcmcsIGlfdGV4dCxuaGFtYW5nPyd0b2dnbGVNb3JlTmhhTWFuZyc6J3RvZ2dsZU1vcmVNZW5oR2lhJylcclxuICAgICAgICAgICAgICAgIGlmIChuaGFtYW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TGVmdC5iYWNrZ3JvdW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTmhhbmhNYW5nLnN0cmluZyA9IG9iai5uYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudExlZnQudGV4dC5zdHJpbmcgPSBvYmoubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbHZpZXdOaGFNYW5nLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhvYmoubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMob2JqLnZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50TGVmdC5iYWNrZ3JvdW5kLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWVuaEdpYS5zdHJpbmcgPSBuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRMZWZ0LnRleHQuc3RyaW5nID0gbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbHZpZXdNZW5oR2lhLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1SID0gY2MuaW5zdGFudGlhdGUodGhpcy5wcmVmYWJSaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbVIgPSBpdGVtUi5nZXRDb21wb25lbnQoJ05hcFJlZF9pdGVtVFQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUi5pbml0KG5hbWUsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtUi5iZy5hY3RpdmUgPSBpbmRleCUyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFuZ0dpYS5jb250ZW50LmFkZENoaWxkKGl0ZW1SLm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudExlZnQ7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRDYXB0Y2hhOiBmdW5jdGlvbih0KSB7XHJcbiAgICAgICAgdmFyIGkgPSB0aGlzXHJcbiAgICAgICAgICAsIG8gPSBuZXcgSW1hZ2U7XHJcbiAgICAgICAgby5zcmMgPSB0LFxyXG4gICAgICAgIG8ud2lkdGggPSAxNTAsXHJcbiAgICAgICAgby5oZWlnaHQgPSA1MCxcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IG5ldyBjYy5UZXh0dXJlMkQ7XHJcbiAgICAgICAgICAgIHQuaW5pdFdpdGhFbGVtZW50KG8pLFxyXG4gICAgICAgICAgICB0LmhhbmRsZUxvYWRlZFRleHR1cmUoKTtcclxuICAgICAgICAgICAgdmFyIGUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodCk7XHJcbiAgICAgICAgICAgIGkuY2FwY2hhU3ByaXRlLnNwcml0ZUZyYW1lID0gZVxyXG4gICAgICAgIH0sIDEwKVxyXG4gICAgfSxcclxuICAgIHJlQ2FwdGNoYTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2NhcHRjaGE6J2NoYXJnZUNhcmQnfSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19