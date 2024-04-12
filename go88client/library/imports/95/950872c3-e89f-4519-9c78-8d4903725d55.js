"use strict";
cc._RF.push(module, '95087LD6J9FGZx4jUkDcl1V', 'MienBac_lo');
// Script/Game/XoSo/MienBac/Lo/MienBac_lo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        header: cc.Node,
        body: cc.Node
    },
    onLoad: function onLoad() {},

    onSelectType: function onSelectType(event) {
        var name = event.target.name;
        this.header.children.forEach(function (obj) {
            if (obj.name === name) {
                obj.pauseSystemEvents();
                obj.opacity = 255;
            } else {
                obj.resumeSystemEvents();
                obj.opacity = 99;
            }
        });
        this.body.children.forEach(function (obj) {
            if (obj.name === name) {
                obj.active = true;
            } else {
                obj.active = false;
            }
        });
    }
});

cc._RF.pop();