"use strict";
cc._RF.push(module, '479d04nY+1D8at8J2cAuNJP', 'XoSo_MienBac');
// Script/Game/XoSo/MienBac/XoSo_MienBac.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        header: cc.Node,
        body: cc.Node
    },
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