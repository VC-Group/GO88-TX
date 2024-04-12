
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/Menu/iconGameBai.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXE1lbnUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcTWVudS9hc3NldHNcXFNjcmlwdFxcSGVscGVyXFxNZW51XFxpY29uR2FtZUJhaS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aXRsZSIsImdhbWUiLCJ0YWJsZTIiLCJvcGVuR2FtZSIsIlJlZFQiLCJJU19MT0dJTiIsImluR2FtZSIsIk1lbnVSb29tIiwiZGlhbG9nIiwic2hvd1NpZ25JbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGVBQU8sRUFEQztBQUVSQyxjQUFPLEVBRkM7QUFHUkMsZ0JBQVE7QUFIQSxLQUhQO0FBUUxDLGNBQVUsb0JBQVU7QUFDaEIsWUFBSVIsR0FBR1MsSUFBSCxDQUFRQyxRQUFaLEVBQXFCO0FBQ2pCVixlQUFHUyxJQUFILENBQVFFLE1BQVIsQ0FBZUMsUUFBZixDQUF3QkosUUFBeEIsQ0FBaUMsSUFBakM7QUFDSCxTQUZELE1BRU87QUFDSFIsZUFBR1MsSUFBSCxDQUFRRSxNQUFSLENBQWVFLE1BQWYsQ0FBc0JDLFVBQXRCO0FBQ0g7QUFDSjtBQWRJLENBQVQiLCJmaWxlIjoiaWNvbkdhbWVCYWkuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcTWVudSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGdhbWU6ICBcIlwiLFxyXG4gICAgICAgIHRhYmxlMjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBvcGVuR2FtZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAoY2MuUmVkVC5JU19MT0dJTil7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLk1lbnVSb29tLm9wZW5HYW1lKHRoaXMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLmRpYWxvZy5zaG93U2lnbkluKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==