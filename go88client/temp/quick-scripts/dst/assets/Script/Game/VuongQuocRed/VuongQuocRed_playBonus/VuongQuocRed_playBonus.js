
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/VuongQuocRed_playBonus/VuongQuocRed_playBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f4a82MExGBOZIu6dvi480mF', 'VuongQuocRed_playBonus');
// Script/Game/VuongQuocRed/VuongQuocRed_playBonus/VuongQuocRed_playBonus.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        numberBonus: cc.Label,
        listBox: cc.Node,
        notice: cc.Node,
        numberWin: cc.Label
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    onPlay: function onPlay() {
        this.reset();
        this.node.active = true;
        this.numberBonus.string = 10;
    },
    onClickBox: function onClickBox(e, box) {
        if (!!this.numberBonus.string) {
            cc.RedT.audio.playClick();
            this.onSend(box);
        }
    },
    closeNotice: function closeNotice() {
        this.notice.active = this.node.active = false;
        this.RedT.hieuUng();
    },
    onData: function onData(data) {
        if (void 0 !== data.box) {
            var node = this.listBox.children[data.box];
            node.children[0].active = false;
            node.children[1].active = node.children[2].active = true;
            var text = node.children[2].getComponent(cc.Label);
            text.string = helper.numberWithCommas(data.bet);
            this.numberBonus.string = data.bonus;
        }
        if (void 0 !== data.win) {
            this.notice.active = true;
            this.numberWin.string = helper.numberWithCommas(data.win);
            this.RedT.vuathang.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.RedT.vuathang.string) * 1 + data.win);
        }
    },
    onSend: function onSend(box) {
        cc.RedT.send({ g: { vq_red: { bonus: { box: box } } } });
    },
    reset: function reset() {
        Promise.all(this.listBox.children.map(function (obj) {
            obj.children[0].active = true;
            obj.children[1].active = obj.children[2].active = false;
        }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxWdW9uZ1F1b2NSZWRfcGxheUJvbnVzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxWdW9uZ1F1b2NSZWRfcGxheUJvbnVzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXFZ1b25nUXVvY1JlZF9wbGF5Qm9udXNcXFZ1b25nUXVvY1JlZF9wbGF5Qm9udXMuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm51bWJlckJvbnVzIiwiTGFiZWwiLCJsaXN0Qm94IiwiTm9kZSIsIm5vdGljZSIsIm51bWJlcldpbiIsImluaXQiLCJvYmoiLCJSZWRUIiwib25QbGF5IiwicmVzZXQiLCJub2RlIiwiYWN0aXZlIiwic3RyaW5nIiwib25DbGlja0JveCIsImUiLCJib3giLCJhdWRpbyIsInBsYXlDbGljayIsIm9uU2VuZCIsImNsb3NlTm90aWNlIiwiaGlldVVuZyIsIm9uRGF0YSIsImRhdGEiLCJjaGlsZHJlbiIsInRleHQiLCJnZXRDb21wb25lbnQiLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0IiwiYm9udXMiLCJ3aW4iLCJ2dWF0aGFuZyIsImdldE9ubHlOdW1iZXJJblN0cmluZyIsInNlbmQiLCJnIiwidnFfcmVkIiwiUHJvbWlzZSIsImFsbCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1hDLHFCQUFhTCxHQUFHTSxLQURMO0FBRVJDLGlCQUFhUCxHQUFHUSxJQUZSO0FBR1JD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ZmlsZSI6IlZ1b25nUXVvY1JlZF9wbGF5Qm9udXMuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXFZ1b25nUXVvY1JlZF9wbGF5Qm9udXMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIFx0bnVtYmVyQm9udXM6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxpc3RCb3g6ICAgICBjYy5Ob2RlLFxyXG4gICAgICAgIG5vdGljZTogICAgICBjYy5Ob2RlLFxyXG4gICAgICAgIG51bWJlcldpbjogICBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgXHR0aGlzLlJlZFQgPSBvYmpcclxuICAgIH0sXHJcbiAgICBvblBsYXk6IGZ1bmN0aW9uKCl7XHJcbiAgICBcdHRoaXMucmVzZXQoKTtcclxuICAgIFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICBcdHRoaXMubnVtYmVyQm9udXMuc3RyaW5nID0gMTA7XHJcbiAgICB9LFxyXG4gICAgb25DbGlja0JveDogZnVuY3Rpb24oZSwgYm94KSB7XHJcbiAgICBcdGlmICghIXRoaXMubnVtYmVyQm9udXMuc3RyaW5nKSB7XHJcbiAgICBcdCAgIGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcbiAgICBcdFx0dGhpcy5vblNlbmQoYm94KTtcclxuICAgIFx0fVxyXG4gICAgfSxcclxuICAgIGNsb3NlTm90aWNlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm90aWNlLmFjdGl2ZSA9IHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlJlZFQuaGlldVVuZygpO1xyXG4gICAgfSxcclxuICAgIG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gZGF0YS5ib3gpIHtcclxuICAgICAgICAgICAgdmFyIG5vZGUgPSB0aGlzLmxpc3RCb3guY2hpbGRyZW5bZGF0YS5ib3hdO1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IG5vZGUuY2hpbGRyZW5bMl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBub2RlLmNoaWxkcmVuWzJdLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIHRleHQuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5iZXQpO1xyXG4gICAgICAgICAgICB0aGlzLm51bWJlckJvbnVzLnN0cmluZyA9IGRhdGEuYm9udXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2b2lkIDAgIT09IGRhdGEud2luKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm90aWNlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyV2luLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEud2luKTtcclxuICAgICAgICAgICAgdGhpcy5SZWRULnZ1YXRoYW5nLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5SZWRULnZ1YXRoYW5nLnN0cmluZykqMSArIGRhdGEud2luKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25TZW5kOiBmdW5jdGlvbihib3gpe1xyXG4gICAgXHRjYy5SZWRULnNlbmQoe2c6e3ZxX3JlZDp7Ym9udXM6e2JveDogYm94fX19fSk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICBcdFByb21pc2UuYWxsKHRoaXMubGlzdEJveC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuICAgIFx0XHRvYmouY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIFx0XHRvYmouY2hpbGRyZW5bMV0uYWN0aXZlID0gb2JqLmNoaWxkcmVuWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgXHR9KSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19