"use strict";
cc._RF.push(module, '43178FyrtFOhKXVCK9EK0Dk', 'TaiXiuMain_logTips');
// Script/Game/TaiXiu/TaiXiuMain/TaiXiuMain_logTips.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        text: {
            default: null,
            type: cc.Label
        },
        tips: {
            default: null,
            type: cc.Node
        }
    },
    onLoad: function onLoad() {
        this.sprite = this.getComponent(cc.Sprite);
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
        this.tips.active = !0;
    },
    eventOnLEAVE: function eventOnLEAVE() {
        this.tips.active = !1;
    }
});

cc._RF.pop();