"use strict";
cc._RF.push(module, '6525embjElLuYUiOmITMU6B', 'XoSo_History');
// Script/Game/XoSo/XoSo_History.js

'use strict';

var MienBac = require('XoSo_MBHistory');

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