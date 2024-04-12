"use strict";
cc._RF.push(module, '19618U18J5J55/yKtlBzkGh', 'subMenuItem');
// Script/Helper/subMenuItem.js

"use strict";

cc.Class({
    extends: cc.Component,
    properties: {
        background: cc.Node,
        background2: cc.Node,
        text: cc.Node
    },
    onSelect: function onSelect() {
        this.background.active = false;
        this.background2.active = true;
        this.text.color = cc.Color.BLACK;
    },
    offSelect: function offSelect() {
        this.background.active = true;
        this.background2.active = false;
        this.text.color = cc.Color.WHITE;
    }
});

cc._RF.pop();