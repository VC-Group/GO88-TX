"use strict";
cc._RF.push(module, '67e4btO3klMDZ3ujws3/g2/', '3Cay_touchCard');
// Script/Game/3Cay/3Cay_touchCard.js

"use strict";

cc.Class({
    extends: cc.Component,
    onEnable: function onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
    },
    onDisable: function onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
    },
    eventStart: function eventStart(e) {
        this.ttOffset = cc.v2(e.touch.getLocationX() - this.node.position.x, e.touch.getLocationY() - this.node.position.y);
    },
    eventMove: function eventMove(e) {
        var x = e.touch.getLocationX() - this.ttOffset.x;
        var y = e.touch.getLocationY() - this.ttOffset.y;
        this.node.position = cc.v2(x, y);
    },
    eventEnd: function eventEnd() {}
});

cc._RF.pop();