
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/Menu/itemContentMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef328suSpdNvq+JTw+borMJ', 'itemContentMenu');
// Script/Helper/Menu/itemContentMenu.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        nodeUnSelect: cc.Node,
        nodeSelect: cc.Node,
        text: cc.Node
    },
    select: function select() {
        this.nodeUnSelect.active = false;
        this.nodeSelect.active = true;
        this.text.color = cc.color().fromHEX('#FAF578');
        this.node.pauseSystemEvents();
    },
    unselect: function unselect() {
        this.nodeUnSelect.active = true;
        this.nodeSelect.active = false;
        this.text.color = cc.Color.BLACK;
        this.node.resumeSystemEvents();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXE1lbnUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcTWVudS9hc3NldHNcXFNjcmlwdFxcSGVscGVyXFxNZW51XFxpdGVtQ29udGVudE1lbnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZVVuU2VsZWN0IiwiTm9kZSIsIm5vZGVTZWxlY3QiLCJ0ZXh0Iiwic2VsZWN0IiwiYWN0aXZlIiwiY29sb3IiLCJmcm9tSEVYIiwibm9kZSIsInBhdXNlU3lzdGVtRXZlbnRzIiwidW5zZWxlY3QiLCJDb2xvciIsIkJMQUNLIiwicmVzdW1lU3lzdGVtRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsc0JBQWNMLEdBQUdNLElBRFQ7QUFFUkMsb0JBQVlQLEdBQUdNLElBRlA7QUFHUkUsY0FBTVIsR0FBR007QUFIRCxLQUhQO0FBUUxHLFlBQVEsa0JBQVc7QUFDZixhQUFLSixZQUFMLENBQWtCSyxNQUFsQixHQUEyQixLQUEzQjtBQUNBLGFBQUtILFVBQUwsQ0FBZ0JHLE1BQWhCLEdBQTJCLElBQTNCO0FBQ0EsYUFBS0YsSUFBTCxDQUFVRyxLQUFWLEdBQTJCWCxHQUFHVyxLQUFILEdBQVdDLE9BQVgsQ0FBbUIsU0FBbkIsQ0FBM0I7QUFDQSxhQUFLQyxJQUFMLENBQVVDLGlCQUFWO0FBQ0gsS0FiSTtBQWNMQyxjQUFVLG9CQUFXO0FBQ2pCLGFBQUtWLFlBQUwsQ0FBa0JLLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsYUFBS0gsVUFBTCxDQUFnQkcsTUFBaEIsR0FBMkIsS0FBM0I7QUFDQSxhQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBMkJYLEdBQUdnQixLQUFILENBQVNDLEtBQXBDO0FBQ0EsYUFBS0osSUFBTCxDQUFVSyxrQkFBVjtBQUNIO0FBbkJJLENBQVQiLCJmaWxlIjoiaXRlbUNvbnRlbnRNZW51LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXE1lbnUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBub2RlVW5TZWxlY3Q6IGNjLk5vZGUsXHJcbiAgICAgICAgbm9kZVNlbGVjdDogY2MuTm9kZSxcclxuICAgICAgICB0ZXh0OiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIHNlbGVjdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlVW5TZWxlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlU2VsZWN0LmFjdGl2ZSAgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRleHQuY29sb3IgICAgICAgICAgPSBjYy5jb2xvcigpLmZyb21IRVgoJyNGQUY1NzgnKTtcclxuICAgICAgICB0aGlzLm5vZGUucGF1c2VTeXN0ZW1FdmVudHMoKTtcclxuICAgIH0sXHJcbiAgICB1bnNlbGVjdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlVW5TZWxlY3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGVTZWxlY3QuYWN0aXZlICAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRleHQuY29sb3IgICAgICAgICAgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICB0aGlzLm5vZGUucmVzdW1lU3lzdGVtRXZlbnRzKCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19