"use strict";
cc._RF.push(module, '495d5jwe0pGBIw/joWKvc/9', 'dialogHuongDan');
// Script/Model/MiniPanel/dialog/HuongDan/dialogHuongDan.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        game: cc.Node,
        content: cc.Node
    },
    init: function init() {
        this.game = this.game.children.map(function (obj) {
            return obj.children[1].getComponent(cc.Label);
        });
    },
    selectGame: function selectGame(event, game) {
        this.select(game);
    },
    select: function select(game) {
        cc.RedT.audio.playClick();
        var self = this;
        this.game.forEach(function (obj) {
            var parent = obj.node.parent;
            if (parent.name == game) {
                parent.children[0].active = true;
                parent.pauseSystemEvents();
            } else {
                parent.children[0].active = false;
                parent.resumeSystemEvents();
            }
            return void 0;
        });

        this.content.children.forEach(function (obj) {
            if (obj.name == game) {
                obj.active = true;
            } else {
                obj.active = false;
            }
            return void 0;
        });
    }
});

cc._RF.pop();