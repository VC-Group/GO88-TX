
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/iMessage/iMessage_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '08764g9eU1CrrI+WH3GeclU', 'iMessage_item');
// Script/Model/Dialog/iMessage/iMessage_item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        dot: cc.Node,
        bg: cc.Node,
        title: cc.Label,
        time: cc.Label
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    onClick: function onClick() {
        this.RedT.onContentClick(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcaU1lc3NhZ2UvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxpTWVzc2FnZS9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcaU1lc3NhZ2VcXGlNZXNzYWdlX2l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZG90IiwiTm9kZSIsImJnIiwidGl0bGUiLCJMYWJlbCIsInRpbWUiLCJpbml0Iiwib2JqIiwiUmVkVCIsIm9uQ2xpY2siLCJvbkNvbnRlbnRDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGFBQU9MLEdBQUdNLElBREY7QUFFUkMsWUFBT1AsR0FBR00sSUFGRjtBQUdSRSxlQUFPUixHQUFHUyxLQUhGO0FBSVJDLGNBQU9WLEdBQUdTO0FBSkYsS0FIUDtBQVNMRSxVQUFNLGNBQVNDLEdBQVQsRUFBYTtBQUNmLGFBQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNILEtBWEk7QUFZTEUsYUFBUyxtQkFBVztBQUNoQixhQUFLRCxJQUFMLENBQVVFLGNBQVYsQ0FBeUIsSUFBekI7QUFDSDtBQWRJLENBQVQiLCJmaWxlIjoiaU1lc3NhZ2VfaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXGlNZXNzYWdlIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZG90OiAgIGNjLk5vZGUsXHJcbiAgICAgICAgYmc6ICAgIGNjLk5vZGUsXHJcbiAgICAgICAgdGl0bGU6IGNjLkxhYmVsLFxyXG4gICAgICAgIHRpbWU6ICBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLlJlZFQub25Db250ZW50Q2xpY2sodGhpcyk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19