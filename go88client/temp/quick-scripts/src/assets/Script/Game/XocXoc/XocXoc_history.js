"use strict";
cc._RF.push(module, '358d0RyfQlNvKbc/4deKLy1', 'XocXoc_history');
// Script/Game/XocXoc/XocXoc_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node,
        cointRed: cc.Node,
        cointXu: cc.Node,

        iconRed: cc.SpriteFrame,
        iconWhite: cc.SpriteFrame,

        red: true
    },
    onLoad: function onLoad() {
        var _this = this;

        var page = cc.instantiate(this.page);
        page.y = -263;
        this.node.addChild(page);
        this.page = page.getComponent('Pagination');
        Promise.all(this.content.children.map(function (obj) {
            return obj.getComponent('XocXoc_history_item');
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

        cc.RedT.send({ g: { xocxoc: { log: { red: this.red, page: page } } } });
    },
    changerCoint: function changerCoint() {
        this.red = !this.red;
        this.cointRed.active = !this.cointRed.active;
        this.cointXu.active = !this.cointXu.active;
        this.get_data();
    },
    onData: function onData(data) {
        var self = this;
        this.page.onSet(data.page, data.kmess, data.total);

        Promise.all(this.content.map(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;

                obj.bg.active = i % 2;

                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.phien;

                var numb = 0;
                dataT.kq.forEach(function (dot) {
                    if (dot) {
                        numb++;
                    }
                });
                obj.kqSprite.spriteFrame = numb === 0 ? self.iconRed : !(numb % 2) ? self.iconWhite : self.iconRed;
                obj.kqLabel.string = numb === 0 ? 4 : numb;

                obj.chan.string = Helper.numberWithCommas(dataT.chan);
                obj.le.string = Helper.numberWithCommas(dataT.le);
                obj.red3.string = Helper.numberWithCommas(dataT.red3);
                obj.red4.string = Helper.numberWithCommas(dataT.red4);
                obj.white3.string = Helper.numberWithCommas(dataT.white3);
                obj.white4.string = Helper.numberWithCommas(dataT.white4);
                obj.win.string = Helper.numberWithCommas(dataT.betwin);

                if (!(numb % 2)) {
                    obj.chan.node.color = cc.Color.YELLOW;
                    obj.le.node.color = cc.Color.WHITE;
                } else {
                    obj.le.node.color = cc.Color.YELLOW;
                    obj.chan.node.color = cc.Color.WHITE;
                }

                if (numb === 0) {
                    obj.white4.node.color = cc.Color.YELLOW;
                } else {
                    obj.white4.node.color = cc.Color.WHITE;
                }
                if (numb === 1) {
                    obj.white3.node.color = cc.Color.YELLOW;
                } else {
                    obj.white3.node.color = cc.Color.WHITE;
                }
                if (numb === 3) {
                    obj.red3.node.color = cc.Color.YELLOW;
                } else {
                    obj.red3.node.color = cc.Color.WHITE;
                }
                if (numb === 4) {
                    obj.red4.node.color = cc.Color.YELLOW;
                } else {
                    obj.red4.node.color = cc.Color.WHITE;
                }
            } else {
                obj.node.active = false;
            }
        }));
    }
});

cc._RF.pop();