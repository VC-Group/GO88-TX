"use strict";
cc._RF.push(module, 'bb46bQsB6lOkIXs9oBGBiCh', 'BauCua_linhVat');
// Script/Game/BauCua/BauCua_linhVat/BauCua_linhVat.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        xLabel: cc.Label,
        totall: cc.Label,
        me: cc.Label,
        nodeMe: cc.Node,
        nodeSelect: cc.Node
    },
    meCuoc: function meCuoc(cuoc) {
        if (!!cuoc) {
            this.nodeMe.active = true;
            this.me.string = helper.nFormatter(cuoc, 1);
        } else {
            this.nodeMe.active = false;
        }
    },
    totallCuoc: function totallCuoc(cuoc) {
        if (!!cuoc) {
            this.totall.string = helper.nFormatter(cuoc, 1);
        } else {
            this.totall.string = 0;
        }
    },
    Select: function Select(x) {
        this.nodeSelect.active = true;
        if (x > 1) {
            this.xLabel.node.active = true;
            this.xLabel.string = 'x' + x;
        } else this.xLabel.node.active = false;
    },
    unSelect: function unSelect() {
        this.nodeSelect.active = this.xLabel.node.active = false;
    }
});

cc._RF.pop();