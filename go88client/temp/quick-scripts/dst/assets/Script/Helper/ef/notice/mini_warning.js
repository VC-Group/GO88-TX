
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/ef/notice/mini_warning.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c832drPwXtFyrxiOXSF7olJ', 'mini_warning');
// Script/Helper/ef/notice/mini_warning.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        text: {
            default: null,
            type: cc.Label
        }
    },
    onEnable: function onEnable() {
        this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(0.09, 1), cc.fadeTo(0.09, 255)), cc.delayTime(2.5), cc.spawn(cc.scaleTo(0.09, 1.5), cc.fadeTo(0.09, 0)), cc.callFunc(function () {
            this.node.destroyAllChildren();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxlZlxcbm90aWNlLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxlZlxcbm90aWNlL2Fzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXGVmXFxub3RpY2VcXG1pbmlfd2FybmluZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0ZXh0IiwiZGVmYXVsdCIsInR5cGUiLCJMYWJlbCIsIm9uRW5hYmxlIiwibm9kZSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwic3Bhd24iLCJzY2FsZVRvIiwiZmFkZVRvIiwiZGVsYXlUaW1lIiwiY2FsbEZ1bmMiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJkZXN0cm95Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsY0FBTTtBQUNGQyxxQkFBUyxJQURQO0FBRUZDLGtCQUFNUCxHQUFHUTtBQUZQO0FBREUsS0FIUDtBQVNMQyxjQUFVLG9CQUFZO0FBQ2xCLGFBQUtDLElBQUwsQ0FBVUMsU0FBVixDQUFvQlgsR0FBR1ksUUFBSCxDQUNoQlosR0FBR2EsS0FBSCxDQUNJYixHQUFHYyxPQUFILENBQVcsSUFBWCxFQUFpQixDQUFqQixDQURKLEVBRUlkLEdBQUdlLE1BQUgsQ0FBVSxJQUFWLEVBQWdCLEdBQWhCLENBRkosQ0FEZ0IsRUFLaEJmLEdBQUdnQixTQUFILENBQWEsR0FBYixDQUxnQixFQU1oQmhCLEdBQUdhLEtBQUgsQ0FDSWIsR0FBR2MsT0FBSCxDQUFXLElBQVgsRUFBaUIsR0FBakIsQ0FESixFQUVJZCxHQUFHZSxNQUFILENBQVUsSUFBVixFQUFnQixDQUFoQixDQUZKLENBTmdCLEVBVWhCZixHQUFHaUIsUUFBSCxDQUFZLFlBQVU7QUFDbEIsaUJBQUtQLElBQUwsQ0FBVVEsa0JBQVY7QUFDQSxpQkFBS1IsSUFBTCxDQUFVUyxPQUFWO0FBQ0gsU0FIRCxFQUdHLElBSEgsQ0FWZ0IsQ0FBcEI7QUFlSDtBQXpCSSxDQUFUIiwiZmlsZSI6Im1pbmlfd2FybmluZy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcZWZcXG5vdGljZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRleHQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICBjYy5zcGF3bihcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4wOSwgMSksXHJcbiAgICAgICAgICAgICAgICBjYy5mYWRlVG8oMC4wOSwgMjU1KVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjYy5kZWxheVRpbWUoMi41KSxcclxuICAgICAgICAgICAgY2Muc3Bhd24oXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMDksIDEuNSksXHJcbiAgICAgICAgICAgICAgICBjYy5mYWRlVG8oMC4wOSwgMClcclxuICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpXHJcbiAgICAgICAgKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19