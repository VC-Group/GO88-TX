"use strict";
cc._RF.push(module, 'a0680bUBBRNNZFsRV8g5DR/', 'DisableClick');
// Script/Helper/DisableClick.js

'use strict';

cc.Class({
    extends: cc.Component,
    onEnable: function onEnable() {
        this.node.on('touchstart', function (event) {
            event.stopPropagation();
        });
        this.node.on('touchend', function (event) {
            event.stopPropagation();
        });
    },

    onDisable: function onDisable() {
        this.node.off('touchstart', function (event) {
            event.stopPropagation();
        });
        this.node.off('touchend', function (event) {
            event.stopPropagation();
        });
    }
});

cc._RF.pop();