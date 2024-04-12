
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/full_responsive.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8618cQMVlxIpJJWyUWs76o+', 'full_responsive');
// Script/Helper/full_responsive.js

"use strict";

cc.Class({
    extends: cc.Component,
    onEnable: function onEnable() {
        this.node.width = cc.RedT.inGame.node.width;
        this.node.height = cc.RedT.inGame.node.height;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcZnVsbF9yZXNwb25zaXZlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50Iiwib25FbmFibGUiLCJub2RlIiwid2lkdGgiLCJSZWRUIiwiaW5HYW1lIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxjQUFVLG9CQUFVO0FBQ2hCLGFBQUtDLElBQUwsQ0FBVUMsS0FBVixHQUFtQk4sR0FBR08sSUFBSCxDQUFRQyxNQUFSLENBQWVILElBQWYsQ0FBb0JDLEtBQXZDO0FBQ0EsYUFBS0QsSUFBTCxDQUFVSSxNQUFWLEdBQW1CVCxHQUFHTyxJQUFILENBQVFDLE1BQVIsQ0FBZUgsSUFBZixDQUFvQkksTUFBdkM7QUFDSDtBQUxJLENBQVQiLCJmaWxlIjoiZnVsbF9yZXNwb25zaXZlLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlciIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUud2lkdGggID0gY2MuUmVkVC5pbkdhbWUubm9kZS53aWR0aDtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gY2MuUmVkVC5pbkdhbWUubm9kZS5oZWlnaHQ7XHJcbiAgICB9LFxyXG59KTtcclxuIl19