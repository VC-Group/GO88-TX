"use strict";
cc._RF.push(module, '69875aVuIhMXIrGxl2Od9Bs', 'EF_NoHu');
// Script/Util/EF_NoHu.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        close: cc.Node
    },
    onCloseClick: function onCloseClick() {
        this.node.active = false;
    }
});

cc._RF.pop();