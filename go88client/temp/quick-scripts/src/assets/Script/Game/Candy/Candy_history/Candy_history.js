"use strict";
cc._RF.push(module, '17e0aDFKYhBNoHw5YygdT+w', 'Candy_history');
// Script/Game/Candy/Candy_history/Candy_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node
    },
    onLoad: function onLoad() {
        var page = cc.instantiate(this.page);
        page.y = -278;
        this.node.addChild(page);
        this.page = page.getComponent('Pagination');
        this.content = this.content.children.map(function (obj) {
            return obj.getComponent('VQRed_history_item');
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { candy: { log: { page: page } } } });
    },
    onData: function onData(data) {
        this.page.onSet(data.page, data.kmess, data.total);
        this.content.forEach(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.id;
                obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
                obj.line.string = dataT.kq + " Dòng";
                obj.win.string = Helper.numberWithCommas(dataT.win);
            } else {
                obj.node.active = false;
            }
        });
    }
});

cc._RF.pop();