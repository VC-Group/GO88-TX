"use strict";
cc._RF.push(module, '5c979o56KBFA7IxEoBHBpgJ', 'TaiXiuTop');
// Script/Game/TaiXiu/TaiXiuTop/TaiXiuTop.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node
    },
    onLoad: function onLoad() {
        this.content = this.content.children.map(function (obj) {
            return obj.getComponent('TaiXiu_topItem');
        });
        this.get_data();
    },

    get_data: function get_data() {
        cc.RedT.send({ taixiu: { get_top: { red: true, taixiu: true } } });
    },
    onEnable: function onEnable() {
        if (!!this.content) {
            this.get_data();
        }
        console.log("0/,load ");
    },
    onData: function onData(data) {
        this.content.forEach(function (obj, index) {
            var dataH = data[index];
            if (void 0 !== dataH) {
                obj.node.active = true;
                if (index > 2) {
                    obj.top.node.active = true;
                    obj.top.string = index + 1;
                } else {
                    obj.top.node.active = false;
                }
                obj.nick.string = dataH.name;
                obj.win.string = helper.numberWithCommas(dataH.bet);
            } else {
                obj.node.active = false;
            }
        }.bind(this));
    }
});

cc._RF.pop();