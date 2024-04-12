"use strict";
cc._RF.push(module, 'e6c11CHYW1PjZKvnSwp1SEF', 'TaiXiuBoard_item');
// Script/Game/TaiXiu/TaiXiuBoard/TaiXiuBoard_item.js

'use strict';

cc.Class({
    extends: cc.Component,
    properties: {
        colorOn: '',
        colorOff: '',
        bgOn: {
            default: null,
            type: cc.SpriteFrame
        },
        bgOff: {
            default: null,
            type: cc.SpriteFrame
        },
        text: {
            default: null,
            type: cc.Node
        }
    },
    onLoad: function onLoad(obj) {
        this.sprite = this.node.getComponent(cc.Sprite);
    },
    onEnable: function onEnable() {
        this.node.on(cc.Node.EventType.MOUSE_ENTER, this.eventOnENTER, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.eventOnLEAVE, this);
    },
    onDisable: function onDisable() {
        this.node.off(cc.Node.EventType.MOUSE_ENTER, this.eventOnENTER, this);
        this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.eventOnLEAVE, this);
    },
    eventOnENTER: function eventOnENTER() {
        this.text.color = this.text.color.fromHEX(this.colorOn);
        this.sprite.spriteFrame = this.bgOn;
    },
    eventOnLEAVE: function eventOnLEAVE() {
        this.text.color = this.text.color.fromHEX(this.colorOff);
        this.sprite.spriteFrame = this.bgOff;
    }
});

cc._RF.pop();