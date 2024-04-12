"use strict";
cc._RF.push(module, '9972eRTCvJEwony+DM8Ery0', 'Candy_top');
// Script/Game/Candy/Candy_top/Candy_top.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        item: cc.Prefab,
        content: cc.Node
    },
    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { candy: { top: true } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        data.forEach(function (obj, index) {
            var item = cc.instantiate(this.item);
            var itemComponent = item.getComponent('VQRed_history_item');
            itemComponent.time.string = helper.getStringDateByTime(obj.time);
            itemComponent.phien.string = obj.name;
            itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
            itemComponent.line.string = helper.numberWithCommas(obj.win);
            itemComponent.win.string = obj.type == 2 ? "Nổ Hũ" : "Thắng lớn";
            item.children[0].active = !(index & 1);
            this.content.addChild(item);
        }.bind(this));
    }
});

cc._RF.pop();