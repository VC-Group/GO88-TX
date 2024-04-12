"use strict";
cc._RF.push(module, '06f12JQ/QhHLrVF0oulw/q0', 'MiniPoker_LichSu_item');
// Script/Game/MiniPoker/MiniPoker_LichSu/MiniPoker_LichSu_item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bg: cc.Node,
        time: cc.Label,
        phien: cc.Label,
        bet: cc.Label,
        win: cc.Label,
        card: {
            default: [],
            type: cc.Sprite
        }
    }
});

cc._RF.pop();