
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/Setting/VQRed_setting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxTZXR0aW5nLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxTZXR0aW5nL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXFNldHRpbmdcXFZRUmVkX3NldHRpbmcuanMiXSwibmFtZXMiOlsiQ2tlY2tPdXQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTmhhY05lbiIsIk5oYWNHYW1lIiwib25Mb2FkIiwiUmVkVCIsImlzU291bmRCYWNrZ3JvdW5kIiwiT25DaGFuZ2VyQ2xpY2siLCJpc1NvdW5kR2FtZSIsIm9uRW5hYmxlIiwibm9kZSIsInJ1bkFjdGlvbiIsImluR2FtZSIsImRpYWxvZyIsImFjdGlvblNob3ciLCJvbkRpc2FibGUiLCJyZXNldFNpemVEaWFsb2ciLCJPbkNoYW5nZXJOaGFjTmVuIiwic2V0U291bmRCYWNrZ3JvdW5kIiwiaXNDaGVja2VkIiwicGxheU11c2ljIiwicGF1c2VNdXNpYyIsIk9uQ2hhbmdlck5oYWNHYW1lIiwic2V0U291bmRHYW1lIiwiSVNfU09VTkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBV0MsUUFBUSxVQUFSLENBQWY7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxpQkFBVVAsUUFERjtBQUVSUSxrQkFBVVI7QUFGRixLQUhQO0FBT0xTLFVBUEssb0JBT0c7QUFDSixZQUFJLENBQUNQLEdBQUdRLElBQUgsQ0FBUUMsaUJBQVIsRUFBTCxFQUFrQztBQUM5QixpQkFBS0osT0FBTCxDQUFhSyxjQUFiO0FBQ0g7QUFDRCxZQUFJLENBQUNWLEdBQUdRLElBQUgsQ0FBUUcsV0FBUixFQUFMLEVBQTRCO0FBQ3hCLGlCQUFLTCxRQUFMLENBQWNJLGNBQWQ7QUFDSDtBQUNKLEtBZEk7O0FBZUxFLGNBQVUsb0JBQVk7QUFDbEIsYUFBS0MsSUFBTCxDQUFVQyxTQUFWLENBQW9CZCxHQUFHUSxJQUFILENBQVFPLE1BQVIsQ0FBZUMsTUFBZixDQUFzQkMsVUFBMUM7QUFDSCxLQWpCSTtBQWtCTEMsZUFBVyxxQkFBWTtBQUNuQmxCLFdBQUdRLElBQUgsQ0FBUU8sTUFBUixDQUFlQyxNQUFmLENBQXNCRyxlQUF0QixDQUFzQyxLQUFLTixJQUEzQztBQUNILEtBcEJJO0FBcUJMTyxzQkFBa0IsNEJBQVc7QUFDekJwQixXQUFHUSxJQUFILENBQVFhLGtCQUFSLENBQTJCLEtBQUtoQixPQUFMLENBQWFpQixTQUF4QztBQUNBLFlBQUksS0FBS2pCLE9BQUwsQ0FBYWlCLFNBQWpCLEVBQTRCO0FBQ3hCdEIsZUFBR1EsSUFBSCxDQUFRTyxNQUFSLENBQWVRLFNBQWY7QUFDSCxTQUZELE1BRUs7QUFDRHZCLGVBQUdRLElBQUgsQ0FBUU8sTUFBUixDQUFlUyxVQUFmO0FBQ0g7QUFDSixLQTVCSTtBQTZCTEMsdUJBQW1CLDZCQUFXO0FBQzFCekIsV0FBR1EsSUFBSCxDQUFRa0IsWUFBUixDQUFxQixLQUFLcEIsUUFBTCxDQUFjZ0IsU0FBbkM7QUFDQSxZQUFJLEtBQUtoQixRQUFMLENBQWNnQixTQUFsQixFQUE2QjtBQUN6QnRCLGVBQUdRLElBQUgsQ0FBUW1CLFFBQVIsR0FBbUIsSUFBbkI7QUFDSCxTQUZELE1BRUs7QUFDRDNCLGVBQUdRLElBQUgsQ0FBUW1CLFFBQVIsR0FBbUIsS0FBbkI7QUFDSDtBQUNKO0FBcENJLENBQVQiLCJmaWxlIjoiVlFSZWRfc2V0dGluZy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcU2V0dGluZyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgQ2tlY2tPdXQgPSByZXF1aXJlKCdDaGVja091dCcpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBOaGFjTmVuOiAgQ2tlY2tPdXQsXHJcbiAgICAgICAgTmhhY0dhbWU6IENrZWNrT3V0LFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGlmICghY2MuUmVkVC5pc1NvdW5kQmFja2dyb3VuZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTmhhY05lbi5PbkNoYW5nZXJDbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWNjLlJlZFQuaXNTb3VuZEdhbWUoKSkge1xyXG4gICAgICAgICAgICB0aGlzLk5oYWNHYW1lLk9uQ2hhbmdlckNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5SZWRULmluR2FtZS5kaWFsb2cuYWN0aW9uU2hvdyk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2MuUmVkVC5pbkdhbWUuZGlhbG9nLnJlc2V0U2l6ZURpYWxvZyh0aGlzLm5vZGUpO1xyXG4gICAgfSxcclxuICAgIE9uQ2hhbmdlck5oYWNOZW46IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLlJlZFQuc2V0U291bmRCYWNrZ3JvdW5kKHRoaXMuTmhhY05lbi5pc0NoZWNrZWQpO1xyXG4gICAgICAgIGlmICh0aGlzLk5oYWNOZW4uaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLnBsYXlNdXNpYygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5SZWRULmluR2FtZS5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIE9uQ2hhbmdlck5oYWNHYW1lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5SZWRULnNldFNvdW5kR2FtZSh0aGlzLk5oYWNHYW1lLmlzQ2hlY2tlZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuTmhhY0dhbWUuaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuSVNfU09VTkQgPSB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5SZWRULklTX1NPVU5EID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==