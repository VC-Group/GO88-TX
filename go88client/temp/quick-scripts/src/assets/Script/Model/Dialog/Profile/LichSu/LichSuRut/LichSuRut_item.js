"use strict";
cc._RF.push(module, 'f9622W0MQ9AOJN08zkYjgg8', 'LichSuRut_item');
// Script/Model/Dialog/Profile/LichSu/LichSuRut/LichSuRut_item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        Time: cc.Label,
        NhaMang: cc.Label,
        MenhGia: cc.Label,
        SoLuong: cc.Label,
        Cost: cc.Label,
        Status: cc.Label
    },
    onInfoClick: function onInfoClick() {
        if (this.info) {
            cc.RedT.inGame.dialog.profile.LichSu.lichSuRut.isView = true;
            cc.RedT.inGame.dialog.the_cao.getData(this.idT);
            cc.RedT.audio.playClick();
        }
    }
});

cc._RF.pop();