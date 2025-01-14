"use strict";
cc._RF.push(module, 'b065113djNNPr4/ETwvQMGU', 'PokerTo');
// Script/Game/Poker/PokerTo.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        touch: cc.Node,
        mask: cc.Node,
        labelBet: cc.Label,
        labelMin: cc.Label,
        labelMax: cc.Label
    },
    onEnable: function onEnable() {
        var player = cc.RedT.inGame.player[cc.RedT.inGame.meMap];
        var mainBet = Helper.getOnlyNumberInString(cc.RedT.inGame.mainBet.string);
        var PBet = Helper.getOnlyNumberInString(player.bet.string);
        var PBalans = Helper.getOnlyNumberInString(player.balans.string);
        var debit = mainBet - PBet;
        this.betMax = PBalans - debit;
        if (this.betMax < 1) {
            this.node.active = false;
            cc.RedT.inGame.btm_to.active = false;
            return void 0;
        }

        var bet = Helper.getOnlyNumberInString(cc.RedT.inGame.labelRoom.string);
        this.betMin = bet >> 0;
        this.h = this.betMin <= 100 ? 50 : this.betMin <= 1000 ? 500 : this.betMin <= 10000 ? 1000 : this.betMin <= 100000 ? 10000 : 1000000;

        this.labelMin.string = this.labelBet.string = Helper.numberWithCommas(this.betMin);
        this.labelMax.string = Helper.numberWithCommas(this.betMax);
        this.betMin = this.betMin / this.h;
        this.betMax = this.betMax / this.h;

        this.touch.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.touch.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.touch.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.touch.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
    },
    onDisable: function onDisable() {
        this.touch.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.touch.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.touch.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.touch.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);

        this.mask.height = 0;
        this.touch.position = cc.v2(0, 0);
    },
    eventStart: function eventStart(e) {
        this.touch.runAction(cc.scaleTo(0.1, 1.18));
        this.offsetY = { localY: e.touch.getLocationY(), y: this.touch.position.y };
    },
    eventMove: function eventMove(e) {
        var y = e.touch.getLocationY() - this.offsetY.localY + this.offsetY.y;
        if (y < 0) {
            y = 0;
        } else if (y > 287) {
            y = 287;
        }
        this.mask.height = y;
        this.touch.position = cc.v2(0, y);
        var bet = y / 287 * (this.betMax - this.betMin) + this.betMin >> 0;
        this.labelBet.string = Helper.numberWithCommas(bet * this.h);
    },
    eventEnd: function eventEnd() {
        this.touch.runAction(cc.scaleTo(0.1, 1));
    },
    onOkClick: function onOkClick() {
        cc.RedT.send({ g: { poker: { to: Helper.getOnlyNumberInString(this.labelBet.string) } } });
    }
});

cc._RF.pop();