"use strict";
cc._RF.push(module, '1b515XdufZBFaOcG7quJClg', 'miniBigWin');
// Script/Helper/ef/notice/miniBigWin.js

'use strict';

var numberTo = require('Helper').numberTo;
cc.Class({
    extends: cc.Component,
    properties: {
        bet: cc.Label
    },
    onLoad: function onLoad() {
        this.bet.font = cc.RedT.util.fontCong;
        this.node.runAction(cc.sequence(cc.delayTime(0.2), cc.callFunc(function () {
            cc.RedT.audio.playEf('moneywin');
            numberTo(this.bet, 0, this.node.bet, 1000, true);
        }, this)));
    }
});

cc._RF.pop();