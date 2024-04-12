"use strict";
cc._RF.push(module, 'd12d5B1O+1B0Lp+cj0QY7BT', 'MegaJ_top');
// Script/Game/MegaJackpot/MegaJ_top.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    onLoad: function onLoad() {
        var _this = this;

        this.page = cc.instantiate(this.page);
        this.page.y = -245;
        this.node.addChild(this.page);
        this.page = this.page.getComponent('Pagination');

        Promise.all(this.content.children.map(function (obj) {
            return obj.getComponent('MegaJ_history_item');
        })).then(function (result) {
            _this.content = result;
        });

        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        if (!this.RedT.isSpin) {
            cc.RedT.send({ g: { megaj: { top: page } } });
        }
    },
    onData: function onData(data) {
        this.page.onSet(data.page, data.kmess, data.total);

        this.content.forEach(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.bg.active = i % 2;
                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.game.string = dataT.name;
                obj.kq.string = dataT.room === 100 ? 'Thanh đồng' : dataT.room === 100 ? 'Bạch kim' : 'Hoàng kim';
                obj.thuong.string = Helper.numberWithCommas(dataT.win);
            } else {
                obj.node.active = false;
            }
        }.bind(this));
    }
});

cc._RF.pop();