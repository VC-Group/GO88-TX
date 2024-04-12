"use strict";
cc._RF.push(module, '89676Zx8oRO4KIzkpkCy5Hq', 'CoTrang_history');
// Script/Game/CoTrang/CoTrang_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node,
        red: true
    },
    onLoad: function onLoad() {
        var _this = this;

        var page = cc.instantiate(this.page);
        page.y = -232;
        this.node.addChild(page);
        this.page = page.getComponent('Pagination');
        Promise.all(this.content.children.map(function (obj) {
            return obj.getComponent('VQRed_history_item');
        })).then(function (tab) {
            _this.content = tab;
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { longlan: { log: { red: this.red, page: page } } } });
    },
    onData: function onData(data) {
        var self = this;
        this.page.onSet(data.page, data.kmess, data.total);
        Promise.all(this.content.map(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.id;
                obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
                obj.win.string = dataT.line + " Dòng";
                obj.line.string = Helper.numberWithCommas(dataT.win);
            } else {
                obj.node.active = false;
            }
        }));
    }
});

cc._RF.pop();