
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/DisableClick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0680bUBBRNNZFsRV8g5DR/', 'DisableClick');
// Script/Helper/DisableClick.js

'use strict';

cc.Class({
    extends: cc.Component,
    onEnable: function onEnable() {
        this.node.on('touchstart', function (event) {
            event.stopPropagation();
        });
        this.node.on('touchend', function (event) {
            event.stopPropagation();
        });
    },

    onDisable: function onDisable() {
        this.node.off('touchstart', function (event) {
            event.stopPropagation();
        });
        this.node.off('touchend', function (event) {
            event.stopPropagation();
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcRGlzYWJsZUNsaWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50Iiwib25FbmFibGUiLCJub2RlIiwib24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm9uRGlzYWJsZSIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7QUFFTEMsY0FBVSxvQkFBVTtBQUNoQixhQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYSxZQUFiLEVBQTJCLFVBQVNDLEtBQVQsRUFBZTtBQUN0Q0Esa0JBQU1DLGVBQU47QUFDSCxTQUZEO0FBR0EsYUFBS0gsSUFBTCxDQUFVQyxFQUFWLENBQWEsVUFBYixFQUF5QixVQUFTQyxLQUFULEVBQWU7QUFDcENBLGtCQUFNQyxlQUFOO0FBQ0gsU0FGRDtBQUdILEtBVEk7O0FBV0xDLGVBQVcscUJBQVU7QUFDakIsYUFBS0osSUFBTCxDQUFVSyxHQUFWLENBQWMsWUFBZCxFQUE0QixVQUFTSCxLQUFULEVBQWU7QUFDdkNBLGtCQUFNQyxlQUFOO0FBQ0gsU0FGRDtBQUdBLGFBQUtILElBQUwsQ0FBVUssR0FBVixDQUFjLFVBQWQsRUFBMEIsVUFBU0gsS0FBVCxFQUFlO0FBQ3JDQSxrQkFBTUMsZUFBTjtBQUNILFNBRkQ7QUFHSDtBQWxCSSxDQUFUIiwiZmlsZSI6IkRpc2FibGVDbGljay5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZigndG91Y2hzdGFydCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKCd0b3VjaGVuZCcsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSk7XHJcbiJdfQ==