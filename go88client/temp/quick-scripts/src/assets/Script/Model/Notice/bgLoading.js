"use strict";
cc._RF.push(module, 'b29c3M7ShVDkKHKf+49LVQZ', 'bgLoading');
// Script/Model/Notice/bgLoading.js

'use strict';

cc.Class({
    extends: cc.Component,
    properties: {
        text: cc.Label
    },
    onDisable: function onDisable() {
        this.text.string = '';
    },
    onData: function onData(data) {
        if (void 0 !== data.active) {
            this.node.active = data.active;
        }
        if (void 0 !== data.text) {
            this.text.string = data.text;
        }
    }
});

cc._RF.pop();