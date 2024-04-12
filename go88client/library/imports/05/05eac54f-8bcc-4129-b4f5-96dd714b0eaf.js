"use strict";
cc._RF.push(module, '05eacVPi8xBKbT1lt1xSw6v', 'XoSo_KetQua');
// Script/Game/XoSo/XoSo_KetQua.js

'use strict';

var MienBac = require('kq_xsmb');

cc.Class({
    extends: cc.Component,

    properties: {
        MienBac: MienBac
    },
    onData: function onData(data) {
        if (void 0 !== data.mb) {
            this.MienBac.onData(data.mb);
        }
    }
});

cc._RF.pop();