"use strict";
cc._RF.push(module, '77651BdeG5Cw5a2bw3wvZf0', 'AngryBirds_reelsR');
// Script/Game/AngryBirds/AngryBirds_reelsR.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    init: function init(obj) {
        var _this = this;

        this.RedT = obj;
        this.icons = [];
        var self = this;
        Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
            var icon = cc.instantiate(self.RedT.iconRPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('AngryBirds-itemR');
            icon.init(self.RedT);
            if (index > 2 && index < 20) {
                icon.random();
            }
            return icon;
        })).then(function (result) {
            _this.icons = result;
            _this.icons[22].setIcon(_this.icons[2].random(!0));
            _this.icons[21].setIcon(_this.icons[1].random(!0));
            _this.icons[20].setIcon(_this.icons[0].random(!0));
        });
    },

    copy: function copy() {
        this.icons[22].setIcon(this.icons[2].data);
        this.icons[21].setIcon(this.icons[1].data);
        this.icons[20].setIcon(this.icons[0].data);
        this.node.y = 0;
    },
    spin: function spin(index) {
        this.node.stopAllActions();
        var self = this;
        var d = cc.moveTo(1.5, cc.v2(this.node.x, -(this.node.height - 270))).easing(cc.easeInOut(3));
        var p = cc.callFunc(function () {
            this.copy();
            if (index === 4) {
                this.RedT.labelWin.string = 0;
                this.RedT.hieuUng();
            }
        }, this);

        this.node.runAction(cc.sequence(cc.delayTime(index * 0.15), d, p));
    },
    stop: function stop() {
        this.node.stopAllActions();
        this.copy();
    }
});

cc._RF.pop();