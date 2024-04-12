"use strict";
cc._RF.push(module, '63c1ej4tzdI66hlcNzoZsv6', 'popupEvent');
// Script/Model/MiniPanel/popup/popupEvent.js

"use strict";

cc.Class({
    extends: cc.Component,

    onLoad: function onLoad() {
        cc.RedT.setting.popupEvent = cc.RedT.setting.popupEvent || {};
        this.ttOffset = null;
        this.ttOffset2 = null;
        if (void 0 !== cc.RedT.setting.popupEvent.position) {
            this.node.position = cc.RedT.setting.popupEvent.position;
        }
    },

    onEnable: function onEnable() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
        //    this.node.on(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);
    },
    onDisable: function onDisable() {
        this.node.off(cc.Node.EventType.TOUCH_START, this.eventStart, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this.eventMove, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this.eventEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.eventEnd, this);
        //    this.node.off(cc.Node.EventType.MOUSE_ENTER,  this.setTop,     this);
    },
    eventStart: function eventStart(e) {
        this.setTop();
        this.ttOffset = cc.v2(e.touch.getLocationX() - this.node.position.x, e.touch.getLocationY() - this.node.position.y);
        this.ttOffset2 = cc.v2(e.touch.getLocationX() - (e.touch.getLocationX() - this.node.position.x), e.touch.getLocationY() - (e.touch.getLocationY() - this.node.position.y));
    },
    eventMove: function eventMove(e) {
        var x = e.touch.getLocationX() - this.ttOffset.x;
        var y = e.touch.getLocationY() - this.ttOffset.y;
        if (Math.abs(x) > cc.RedT.inGame.node.width / 2 - 100) {
            x = x < 0 ? -cc.RedT.inGame.node.width / 2 + 100 : cc.RedT.inGame.node.width / 2 - 100;
        }
        if (Math.abs(y) > cc.RedT.inGame.node.height / 2 - 50) {
            y = y < 0 ? -cc.RedT.inGame.node.height / 2 + 50 : cc.RedT.inGame.node.height / 2 - 50;
        }
        this.node.position = cc.v2(x, y);
    },
    eventEnd: function eventEnd(e) {
        cc.RedT.setting.popupEvent.position = this.node.position;
        this.xChanger = this.ttOffset2.x - (e.touch.getLocationX() - this.ttOffset.x);
        this.yChanger = this.ttOffset2.y - (e.touch.getLocationY() - this.ttOffset.y);
        if (this.xChanger < 5 && this.xChanger > -5 && this.yChanger < 5 && this.yChanger > -5) {
            this.show();
        }
    },
    setTop: function setTop() {
        this.node.parent.insertChild(this.node);
    },
    show: function show() {
        if (cc.RedT.IS_LOGIN) {
            cc.RedT.MiniPanel.Dialog.showVipPoint();
        } else {
            cc.RedT.inGame.dialog.showSignIn();
        }
    }
});

cc._RF.pop();