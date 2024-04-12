"use strict";
cc._RF.push(module, '550c9nAtbJCb6ippMUD/2+b', 'Card');
// Script/Helper/Game/Card.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        card1: {
            default: [],
            type: cc.SpriteFrame
        },
        card2: {
            default: [],
            type: cc.SpriteFrame
        },
        card3: {
            default: [],
            type: cc.SpriteFrame
        },
        card4: {
            default: [],
            type: cc.SpriteFrame
        },
        card5: {
            default: [],
            type: cc.SpriteFrame
        },
        card6: {
            default: [],
            type: cc.SpriteFrame
        },
        card7: {
            default: [],
            type: cc.SpriteFrame
        },
        card8: {
            default: [],
            type: cc.SpriteFrame
        },
        card9: {
            default: [],
            type: cc.SpriteFrame
        },
        card10: {
            default: [],
            type: cc.SpriteFrame
        },
        card11: {
            default: [],
            type: cc.SpriteFrame
        },
        card12: {
            default: [],
            type: cc.SpriteFrame
        },
        card13: {
            default: [],
            type: cc.SpriteFrame
        },
        cardB1: {
            default: null,
            type: cc.SpriteFrame
        },
        cardB2: {
            default: null,
            type: cc.SpriteFrame
        },
        red: false
    },
    init: function init() {
        this.card = [this.card1, this.card2, this.card3, this.card4, this.card5, this.card6, this.card7, this.card8, this.card9, this.card10, this.card11, this.card12, this.card13];
    },
    config: function config() {
        if (void 0 === cc.RedT.util.card) {
            cc.RedT.util.card = this;
            if (!this.red) {
                this.red = true;
                this.init();
            }
        }
    },
    getCard: function getCard() {
        var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        return this.card[card][type];
    },
    random: function random() {
        var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 13;

        return this.card[~~(Math.random() * number)][~~(Math.random() * 4)];
    }
});

cc._RF.pop();