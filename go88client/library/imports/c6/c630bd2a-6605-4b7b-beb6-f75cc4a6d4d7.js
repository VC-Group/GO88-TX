"use strict";
cc._RF.push(module, 'c630b0qZgVLe76291zEptTX', 'CoTrang_top');
// Script/Game/CoTrang/CoTrang_top.js

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
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { longlan: { top: this.red } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        var self = this;
        Promise.all(data.map(function (obj, index) {
            var item = cc.instantiate(self.item);
            var itemComponent = item.getComponent('VQRed_history_item');
            itemComponent.time.string = helper.getStringDateByTime(obj.time);
            itemComponent.phien.string = obj.name;
            itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
            itemComponent.line.string = helper.numberWithCommas(obj.win);
            itemComponent.win.string = obj.type === 2 ? 'Nổ Hũ' : 'Thắng lớn';
            item.children[0].active = !(index & 1);
            self.content.addChild(item);
        }));
    }
});

cc._RF.pop();