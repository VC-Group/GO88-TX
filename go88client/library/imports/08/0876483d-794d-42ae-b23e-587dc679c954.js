"use strict";
cc._RF.push(module, '08764g9eU1CrrI+WH3GeclU', 'iMessage_item');
// Script/Model/Dialog/iMessage/iMessage_item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        dot: cc.Node,
        bg: cc.Node,
        title: cc.Label,
        time: cc.Label
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    onClick: function onClick() {
        this.RedT.onContentClick(this);
    }
});

cc._RF.pop();