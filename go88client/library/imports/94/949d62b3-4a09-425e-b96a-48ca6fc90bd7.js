"use strict";
cc._RF.push(module, '949d6KzSglCXrlqSMpvyQvX', 'XoSo_Main');
// Script/Game/XoSo/XoSo_Main.js

'use strict';

var History = require('XoSo_History');
var KetQua = require('XoSo_KetQua');

cc.Class({
    extends: cc.Component,

    properties: {
        right: cc.Node,
        History: History,
        KetQua: KetQua
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    showMain: function showMain() {
        this.right.children.forEach(function (obj) {
            if (obj.name === 'Main') {
                obj.active = true;
            } else {
                obj.active = false;
            }
        });
    },
    onHistoryClick: function onHistoryClick(event, name) {
        this.RedT.position = 'History';
        this.right.children.forEach(function (obj) {
            if (obj.name === 'History') {
                obj.active = true;
                obj.children.forEach(function (h) {
                    if (h.name === name) {
                        h.active = true;
                    } else {
                        h.active = false;
                    }
                });
            } else {
                obj.active = false;
            }
        });
    },
    onKetQuaClick: function onKetQuaClick(event, name) {
        this.RedT.position = 'KetQua';
        this.right.children.forEach(function (obj) {
            if (obj.name === 'KetQua') {
                obj.active = true;
                obj.children.forEach(function (h) {
                    if (h.name === name) {
                        h.active = true;
                    } else {
                        h.active = false;
                    }
                });
            } else {
                obj.active = false;
            }
        });
    }
});

cc._RF.pop();