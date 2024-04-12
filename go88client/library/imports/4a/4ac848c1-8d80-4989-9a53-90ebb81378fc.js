"use strict";
cc._RF.push(module, '4ac84jBjYBJiZpTkOu4E3j8', 'Candy_reel');
// Script/Game/Candy/Candy_reel/Candy_reel.js

'use strict';

cc.Class({
    extends: cc.Component,
    init: function init(obj) {
        var _this = this;

        this.RedT = obj;
        this.icons = [];
        var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Promise.all(data.map(function (obj, index) {
            var icon = cc.instantiate(this.RedT.icon);
            this.node.addChild(icon);
            icon = icon.getComponent('candy_reel_item');
            icon.init(this.RedT);
            if (index > 2 && index < data.length - 3) {
                icon.random();
            }
            return icon;
        }.bind(this))).then(function (result) {
            _this.icons = result;
            _this.icons[_this.icons.length - 1].setIcon(_this.icons[4].random());
            _this.icons[_this.icons.length - 2].setIcon(_this.icons[3].random());
            _this.icons[_this.icons.length - 3].setIcon(_this.icons[2].random());
            _this.icons[_this.icons.length - 4].setIcon(_this.icons[1].random());
            _this.icons[_this.icons.length - 5].setIcon(_this.icons[0].random());
        });
    },

    spin: function spin(index) {
        this.node.stopAllActions();
        var d = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 489))).easing(cc.easeInOut(3));
        var p2 = cc.callFunc(function () {
            if (index === 0) {
                this.RedT.copy();
            }
            this.node.y = 0;
        }, this);

        if (index === 4) {
            var EF = cc.callFunc(function () {
                this.RedT.EF_vuathang();
                this.node.y = 0;
                this.RedT.random();
                this.RedT.hieuUng();
            }, this);
            this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, EF));
        } else this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p2));
    },
    stop: function stop() {
        this.node.stopAllActions();
        this.RedT.copy();
        this.node.y = 0;
    }
});

cc._RF.pop();