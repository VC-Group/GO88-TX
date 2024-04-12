"use strict";
cc._RF.push(module, '6692a+IWv5GELCMBYie/TgO', 'BauCua_top');
// Script/Game/BauCua/Top/BauCua_top.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        item: cc.Prefab,
        content: cc.Node
    },
    init: function init(obj) {
        this.RedT = obj;
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { baucua: { tops: true } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        data.forEach(function (obj, index) {
            var item = cc.instantiate(this.item);
            item = item.getComponent('BauCua_top_item');
            item.stt.string = index + 1;
            item.nick.string = obj.name;
            item.win.string = helper.numberWithCommas(obj.bet);
            item.node.children[0].active = index % 2;
            this.content.addChild(item.node);
        }.bind(this));
    }
});

cc._RF.pop();