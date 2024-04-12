"use strict";
cc._RF.push(module, 'cefe2VTU9FJuZ3eLrltioL8', 'LichSuChuyen_item');
// Script/Model/Dialog/Profile/LichSu/LichSuChuyen/LichSuChuyen_item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        Time: cc.Label,
        uFrom: cc.Label,
        uTo: cc.Label,
        Chuyen: cc.Label,
        Nhan: cc.Label,
        nodeMesenger: cc.Node
    },
    onShowMesenger: function onShowMesenger() {
        cc.RedT.inGame.notice.show({ title: "LỜI NHẮN", text: this.mesenger });
    }
});

cc._RF.pop();