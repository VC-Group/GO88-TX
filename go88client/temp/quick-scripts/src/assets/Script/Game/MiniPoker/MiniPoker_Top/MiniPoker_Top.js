"use strict";
cc._RF.push(module, 'f83d50BGs1JUopU47jiZRpB', 'MiniPoker_Top');
// Script/Game/MiniPoker/MiniPoker_Top/MiniPoker_Top.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        item: cc.Prefab,
        content: cc.Node,
        red: true
    },
    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        cc.RedT.send({ g: { mini_poker: { top: this.red } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        data.forEach(function (obj, index) {
            var item = cc.instantiate(this.item);
            item = item.getComponent('VQRed_history_item');
            item.time.string = helper.getStringDateByTime(obj.time);
            item.phien.string = obj.name;
            item.cuoc.string = helper.numberWithCommas(obj.bet);
            item.line.string = helper.numberWithCommas(obj.win);
            item.win.string = obj.type === 2 ? "NỔ HŨ" : "THẮNG LỚN";
            item.node.children[0].active = !(index & 1);
            this.content.addChild(item.node);
        }.bind(this));
    }
});

cc._RF.pop();