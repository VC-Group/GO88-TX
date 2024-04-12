"use strict";
cc._RF.push(module, '53591NaLdpJxoW9GVWXh0FR', 'Header');
// Script/Model/Header/Header.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
        nodeUsers: cc.Node,
        nodeGuest: cc.Node,
        exp: cc.Node,
        userName: cc.Label,
        vip: cc.Label,
        userRed: cc.Label,
        maskFull: 0
    },
    onLoad: function onLoad() {
        if (cc.RedT.IS_LOGIN) this.isSignIn();else this.isSignOut();
    },

    isSignIn: function isSignIn() {
        this.nodeUsers.active = true;
        this.nodeGuest.active = false;
    },
    isSignOut: function isSignOut() {
        this.userName.string = this.userRed.string = '';
        this.nodeUsers.active = false;
        this.nodeGuest.active = true;
    },
    level: function level(_level) {
        this.vip.string = "VIP" + _level;
    },
    updateEXP: function updateEXP(ht, next) {
        // this.exp.width = ht/next*this.maskFull;
    },
    reset: function reset() {
        this.level(cc.RedT.user.level);
        // this.updateEXP(cc.RedT.user.vipHT, cc.RedT.user.vipNext);
    }
});

cc._RF.pop();