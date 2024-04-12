
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Candy/Candy_bonus/Candy_playBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f5fd6x7T5GNJOs0sePV0JY', 'Candy_playBonus');
// Script/Game/Candy/Candy_bonus/Candy_playBonus.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        numberBonus: cc.Label,
        winBonus: cc.Label,
        listBox: cc.Node,
        notice: cc.Node,
        numberWin: cc.Label,
        iconsOpen: cc.SpriteFrame,
        iconsClose: cc.SpriteFrame
    },
    init: function init(obj) {
        this.RedT = obj;
        this.listBox = this.listBox.children.map(function (box) {
            return box.getComponent('Candy_bonus_item');
        });
    },
    onPlay: function onPlay() {
        this.reset();
        this.node.active = true;
        this.numberBonus.string = 10;
    },
    onClickBox: function onClickBox(e) {
        if (!!this.numberBonus.string) {
            cc.RedT.audio.playClick();
            this.onSend(e.target.name);
        }
    },
    closeNotice: function closeNotice() {
        this.notice.active = this.node.active = false;
        this.RedT.hieuUng();
    },
    onData: function onData(data) {
        if (void 0 !== data.box) {
            var obj = this.listBox[data.box];
            obj.text.string = helper.numberWithCommas(data.bet);
            this.numberBonus.string = data.bonus;
        }
        if (void 0 !== data.win) {
            this.notice.active = true;
            this.numberWin.string = helper.numberWithCommas(data.win);
            this.RedT.vuathang.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.RedT.vuathang.string) * 1 + data.win);
        }
    },
    onSend: function onSend(box) {
        cc.RedT.send({ g: { candy: { bonus: { box: box } } } });
    },
    reset: function reset() {
        this.listBox.forEach(function (box) {
            box.item.spriteFrame = this.iconsClose;
            box.text.string = "";
        }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X2JvbnVzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X2JvbnVzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcQ2FuZHlfYm9udXNcXENhbmR5X3BsYXlCb251cy5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibnVtYmVyQm9udXMiLCJMYWJlbCIsIndpbkJvbnVzIiwibGlzdEJveCIsIk5vZGUiLCJub3RpY2UiLCJudW1iZXJXaW4iLCJpY29uc09wZW4iLCJTcHJpdGVGcmFtZSIsImljb25zQ2xvc2UiLCJpbml0Iiwib2JqIiwiUmVkVCIsImNoaWxkcmVuIiwibWFwIiwiYm94IiwiZ2V0Q29tcG9uZW50Iiwib25QbGF5IiwicmVzZXQiLCJub2RlIiwiYWN0aXZlIiwic3RyaW5nIiwib25DbGlja0JveCIsImUiLCJhdWRpbyIsInBsYXlDbGljayIsIm9uU2VuZCIsInRhcmdldCIsIm5hbWUiLCJjbG9zZU5vdGljZSIsImhpZXVVbmciLCJvbkRhdGEiLCJkYXRhIiwidGV4dCIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJib251cyIsIndpbiIsInZ1YXRoYW5nIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwic2VuZCIsImciLCJjYW5keSIsImZvckVhY2giLCJpdGVtIiwic3ByaXRlRnJhbWUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMscUJBQWFMLEdBQUdNLEtBRFI7QUFF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Li5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcQ2FuZHlfYm9udXMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBudW1iZXJCb251czogY2MuTGFiZWwsXHJcbiAgICAgICAgd2luQm9udXM6ICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIGxpc3RCb3g6ICAgICBjYy5Ob2RlLFxyXG4gICAgICAgIG5vdGljZTogICAgICBjYy5Ob2RlLFxyXG4gICAgICAgIG51bWJlcldpbjogICBjYy5MYWJlbCxcclxuICAgICAgICBpY29uc09wZW46ICBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICBpY29uc0Nsb3NlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgICAgICB0aGlzLmxpc3RCb3ggPSB0aGlzLmxpc3RCb3guY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGJveCl7XHJcbiAgICAgICAgICAgIHJldHVybiBib3guZ2V0Q29tcG9uZW50KCdDYW5keV9ib251c19pdGVtJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25QbGF5OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzZXQoKTtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm51bWJlckJvbnVzLnN0cmluZyA9IDEwO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tCb3g6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoISF0aGlzLm51bWJlckJvbnVzLnN0cmluZykge1xyXG4gICAgICAgICAgIGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25TZW5kKGUudGFyZ2V0Lm5hbWUpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbG9zZU5vdGljZTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vdGljZS5hY3RpdmUgPSB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZWRULmhpZXVVbmcoKTtcclxuICAgIH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIGlmICh2b2lkIDAgIT09IGRhdGEuYm94KSB7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB0aGlzLmxpc3RCb3hbZGF0YS5ib3hdO1xyXG4gICAgICAgICAgICBvYmoudGV4dC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLmJldCk7XHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVyQm9udXMuc3RyaW5nID0gZGF0YS5ib251cztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gZGF0YS53aW4pIHtcclxuICAgICAgICAgICAgdGhpcy5ub3RpY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5udW1iZXJXaW4uc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS53aW4pO1xyXG4gICAgICAgICAgICB0aGlzLlJlZFQudnVhdGhhbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLlJlZFQudnVhdGhhbmcuc3RyaW5nKSoxICsgZGF0YS53aW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblNlbmQ6IGZ1bmN0aW9uKGJveCl7XHJcbiAgICAgICAgY2MuUmVkVC5zZW5kKHtnOntjYW5keTp7Ym9udXM6e2JveDpib3h9fX19KTtcclxuICAgIH0sXHJcbiAgICByZXNldDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmxpc3RCb3guZm9yRWFjaChmdW5jdGlvbihib3gpe1xyXG4gICAgICAgICAgICBib3guaXRlbS5zcHJpdGVGcmFtZSA9IHRoaXMuaWNvbnNDbG9zZTtcclxuICAgICAgICAgICAgYm94LnRleHQuc3RyaW5nICAgICAgPSBcIlwiO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19