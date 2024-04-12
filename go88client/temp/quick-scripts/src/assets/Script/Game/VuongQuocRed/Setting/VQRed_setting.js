"use strict";
cc._RF.push(module, '3d99bnmP4tPiIMEZDUmt8Ls', 'VQRed_setting');
// Script/Game/VuongQuocRed/Setting/VQRed_setting.js

'use strict';

var CkeckOut = require('CheckOut');

cc.Class({
    extends: cc.Component,

    properties: {
        NhacNen: CkeckOut,
        NhacGame: CkeckOut
    },
    onLoad: function onLoad() {
        if (!cc.RedT.isSoundBackground()) {
            this.NhacNen.OnChangerClick();
        }
        if (!cc.RedT.isSoundGame()) {
            this.NhacGame.OnChangerClick();
        }
    },

    onEnable: function onEnable() {
        this.node.runAction(cc.RedT.inGame.dialog.actionShow);
    },
    onDisable: function onDisable() {
        cc.RedT.inGame.dialog.resetSizeDialog(this.node);
    },
    OnChangerNhacNen: function OnChangerNhacNen() {
        cc.RedT.setSoundBackground(this.NhacNen.isChecked);
        if (this.NhacNen.isChecked) {
            cc.RedT.inGame.playMusic();
        } else {
            cc.RedT.inGame.pauseMusic();
        }
    },
    OnChangerNhacGame: function OnChangerNhacGame() {
        cc.RedT.setSoundGame(this.NhacGame.isChecked);
        if (this.NhacGame.isChecked) {
            cc.RedT.IS_SOUND = true;
        } else {
            cc.RedT.IS_SOUND = false;
        }
    }
});

cc._RF.pop();