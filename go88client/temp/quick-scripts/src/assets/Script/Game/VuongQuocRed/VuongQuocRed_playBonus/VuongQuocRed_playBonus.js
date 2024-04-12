"use strict";
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