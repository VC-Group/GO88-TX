"use strict";
cc._RF.push(module, '688ad1Awp1CHq7rXjPwOiyM', 'EventTaiXiu_itemDay');
// Script/Model/Dialog/DEvent/TaiXiu/EventTaiXiu_itemDay.js

"use strict";

cc.Class({
    extends: cc.Component,
    properties: {
        bg: cc.Node,
        day: cc.Label
    },
    onClickSelect: function onClickSelect() {
        this.RedT.dateView(this.day);
    }
});

cc._RF.pop();