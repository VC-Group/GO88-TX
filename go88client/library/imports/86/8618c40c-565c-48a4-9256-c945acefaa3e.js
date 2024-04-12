"use strict";
cc._RF.push(module, '8618cQMVlxIpJJWyUWs76o+', 'full_responsive');
// Script/Helper/full_responsive.js

"use strict";

cc.Class({
    extends: cc.Component,
    onEnable: function onEnable() {
        this.node.width = cc.RedT.inGame.node.width;
        this.node.height = cc.RedT.inGame.node.height;
    }
});

cc._RF.pop();