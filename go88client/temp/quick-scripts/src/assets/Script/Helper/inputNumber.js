"use strict";
cc._RF.push(module, 'b256eN/SStPwZz/lPd3MUDm', 'inputNumber');
// Script/Helper/inputNumber.js

"use strict";

var BrowserUtil = require('BrowserUtil');

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var self = this;
        this.editbox = this.node.getComponent(cc.EditBox);
        this.onShift = false;
        this.eventKeyDown = function (e) {
            if (e.keyCode === 16) {
                self.onShift = true;
                e.preventDefault();
            }
            if (!self.onShift && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 189 || e.keyCode === 8 || e.keyCode === 13)) {} else {
                e.preventDefault();
            }
        };
        this.eventKeyUp = function (e) {
            if (e.keyCode === 16) {
                e.preventDefault();
                self.onShift = false;
            }
        };
    },

    onEnable: function onEnable() {
        cc.sys.isBrowser && this.addEventTT();
    },
    onDisable: function onDisable() {
        cc.sys.isBrowser && this.removeEventTT();
    },
    addEventTT: function addEventTT() {
        BrowserUtil.getHTMLElementByEditBox(this.editbox).addEventListener("keydown", this.eventKeyDown, !1);
        BrowserUtil.getHTMLElementByEditBox(this.editbox).addEventListener("keyup", this.eventKeyUp, !1);
    },
    removeEventTT: function removeEventTT() {
        BrowserUtil.getHTMLElementByEditBox(this.editbox).removeEventListener("keydown", this.eventKeyDown, !1);
        BrowserUtil.getHTMLElementByEditBox(this.editbox).removeEventListener("keyup", this.eventKeyUp, !1);
    }
});

cc._RF.pop();