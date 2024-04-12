
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/XoSo_KetQua.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05eacVPi8xBKbT1lt1xSw6v', 'XoSo_KetQua');
// Script/Game/XoSo/XoSo_KetQua.js

'use strict';

var MienBac = require('kq_xsmb');

cc.Class({
    extends: cc.Component,

    properties: {
        MienBac: MienBac
    },
    onData: function onData(data) {
        if (void 0 !== data.mb) {
            this.MienBac.onData(data.mb);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxYb1NvX0tldFF1YS5qcyJdLCJuYW1lcyI6WyJNaWVuQmFjIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uRGF0YSIsImRhdGEiLCJtYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVQyxRQUFRLFNBQVIsQ0FBZDs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JOLGlCQUFTQTtBQURELEtBSFA7QUFNTE8sWUFBUSxnQkFBU0MsSUFBVCxFQUFlO0FBQ25CLFlBQUksS0FBSyxDQUFMLEtBQVdBLEtBQUtDLEVBQXBCLEVBQXdCO0FBQ3BCLGlCQUFLVCxPQUFMLENBQWFPLE1BQWIsQ0FBb0JDLEtBQUtDLEVBQXpCO0FBQ0g7QUFDSjtBQVZJLENBQVQiLCJmaWxlIjoiWG9Tb19LZXRRdWEuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU28iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIE1pZW5CYWMgPSByZXF1aXJlKCdrcV94c21iJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIE1pZW5CYWM6IE1pZW5CYWMsXHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gZGF0YS5tYikge1xyXG4gICAgICAgICAgICB0aGlzLk1pZW5CYWMub25EYXRhKGRhdGEubWIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=