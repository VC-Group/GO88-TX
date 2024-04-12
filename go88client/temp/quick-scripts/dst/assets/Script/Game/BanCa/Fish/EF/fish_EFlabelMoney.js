
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/Fish/EF/fish_EFlabelMoney.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97c8fPfWQNA06NAGRRSUoDf', 'fish_EFlabelMoney');
// Script/Game/BanCa/Fish/EF/fish_EFlabelMoney.js

"use strict";

cc.Class({
    extends: cc.Component,
    onLoad: function onLoad() {
        this.node.runAction(cc.sequence(cc.scaleTo(0.1, 1.5), cc.scaleTo(0.1, 1), cc.delayTime(0.7), cc.fadeTo(0.1, 50), cc.callFunc(function () {
            this.node.destroy();
        }, this)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoXFxFRi8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYVxcRmlzaFxcRUYvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoXFxFRlxcZmlzaF9FRmxhYmVsTW9uZXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJub2RlIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJzY2FsZVRvIiwiZGVsYXlUaW1lIiwiZmFkZVRvIiwiY2FsbEZ1bmMiLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxVQUZLLG9CQUVLO0FBQ1QsYUFBS0MsSUFBTCxDQUFVQyxTQUFWLENBQW9CTixHQUFHTyxRQUFILENBQVlQLEdBQUdRLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLENBQVosRUFBa0NSLEdBQUdRLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQWxDLEVBQXNEUixHQUFHUyxTQUFILENBQWEsR0FBYixDQUF0RCxFQUF5RVQsR0FBR1UsTUFBSCxDQUFVLEdBQVYsRUFBZSxFQUFmLENBQXpFLEVBQTZGVixHQUFHVyxRQUFILENBQVksWUFBVTtBQUN6SSxpQkFBS04sSUFBTCxDQUFVTyxPQUFWO0FBQ0EsU0FGbUgsRUFFakgsSUFGaUgsQ0FBN0YsQ0FBcEI7QUFHQTtBQU5JLENBQVQiLCJmaWxlIjoiZmlzaF9FRmxhYmVsTW9uZXkuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEVGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICBcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjEsIDEuNSksIGNjLnNjYWxlVG8oMC4xLCAxKSwgY2MuZGVsYXlUaW1lKDAuNyksIGNjLmZhZGVUbygwLjEsIDUwKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuXHRcdFx0dGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHRcdH0sIHRoaXMpKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19