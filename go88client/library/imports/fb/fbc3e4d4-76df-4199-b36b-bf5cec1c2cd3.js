"use strict";
cc._RF.push(module, 'fbc3eTUdt9BmbNrv1zsHCzT', 'iconGameBai');
// Script/Helper/Menu/iconGameBai.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        title: "",
        game: "",
        table2: true
    },
    openGame: function openGame() {
        if (cc.RedT.IS_LOGIN) {
            cc.RedT.inGame.MenuRoom.openGame(this);
        } else {
            cc.RedT.inGame.dialog.showSignIn();
        }
    }
});

cc._RF.pop();