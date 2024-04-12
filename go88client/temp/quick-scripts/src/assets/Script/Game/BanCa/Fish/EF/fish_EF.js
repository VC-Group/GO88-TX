"use strict";
cc._RF.push(module, '3a77aSDxt5CnLbD8ehMPfQo', 'fish_EF');
// Script/Game/BanCa/Fish/EF/fish_EF.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        anim: dragonBones.ArmatureDisplay,
        ef: cc.String
    },
    onLoad: function onLoad() {
        this.onDie = function () {
            this.node.destroy();
        };
        this.anim.on(dragonBones.EventObject.COMPLETE, this.onDie, this);
        this.anim.playAnimation(this.ef, 1);
    }
});

cc._RF.pop();