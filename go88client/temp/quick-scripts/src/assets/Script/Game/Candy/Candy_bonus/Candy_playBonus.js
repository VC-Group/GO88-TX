"use strict";
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