
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CoTrang/reels/CoTrang_reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46703d92yxJ94jTBiM3fuuV', 'CoTrang_reel');
// Script/Game/CoTrang/reels/CoTrang_reel.js

'use strict';

cc.Class({
    extends: cc.Component,
    init: function init(obj) {
        var _this = this;

        this.RedT = obj;
        this.icons = [];
        var self = this;
        var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Promise.all(data.map(function (obj, index) {
            var icon = cc.instantiate(self.RedT.icon);
            self.node.addChild(icon);
            icon = icon.getComponent('CoTrang_item');
            icon.init(self.RedT);
            if (index > 2 && index < data.length - 3) {
                icon.random();
            }
            return icon;
        })).then(function (result) {
            _this.icons = result;
            _this.icons[_this.icons.length - 1].setIcon(_this.icons[4].random());
            _this.icons[_this.icons.length - 2].setIcon(_this.icons[3].random());
            _this.icons[_this.icons.length - 3].setIcon(_this.icons[2].random());
            _this.icons[_this.icons.length - 4].setIcon(_this.icons[1].random());
            _this.icons[_this.icons.length - 5].setIcon(_this.icons[0].random());
        });
    },

    spin: function spin(index) {
        this.node.stopAllActions();
        var self = this;
        var d = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 396))).easing(cc.easeInOut(3));
        var p2 = cc.callFunc(function () {
            if (index === 0) {
                this.RedT.copy();
            }
            this.node.y = 0;
        }, this);

        if (index === 4) {
            var EF = cc.callFunc(function () {
                this.RedT.EF_vuathang();
                this.node.y = 0;
                this.RedT.random();
                this.RedT.hieuUng();
            }, this);
            this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, EF));
        } else this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p2));
    },
    stop: function stop() {
        this.node.stopAllActions();
        this.RedT.copy();
        this.node.y = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xccmVlbHMvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nXFxyZWVscy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQ29UcmFuZ1xccmVlbHNcXENvVHJhbmdfcmVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsImluaXQiLCJvYmoiLCJSZWRUIiwiaWNvbnMiLCJzZWxmIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImxlbmd0aCIsInJhbmRvbSIsInRoZW4iLCJyZXN1bHQiLCJzZXRJY29uIiwic3BpbiIsInN0b3BBbGxBY3Rpb25zIiwiZCIsIm1vdmVUbyIsInYyIiwieCIsImhlaWdodCIsImVhc2luZyIsImVhc2VJbk91dCIsInAyIiwiY2FsbEZ1bmMiLCJjb3B5IiwieSIsIkVGIiwiRUZfdnVhdGhhbmciLCJoaWV1VW5nIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxRQUZLLGdCQUVBQyxHQUZBLEVBRUk7QUFBQTs7QUFDTCxhQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQSxhQUFLRSxLQUFMLEdBQWEsRUFBYjtBQUNBLFlBQUlDLE9BQVEsSUFBWjtBQUNBLFlBQUlDLE9BQU8sQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFu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QUwsQ0FBVXdCLFNBQVYsQ0FBb0J4QyxHQUFHeUMsUUFBSCxDQUFZekMsR0FBRzBDLFNBQUgsQ0FBYTdCLFFBQU0sR0FBbkIsQ0FBWixFQUFxQ2EsQ0FBckMsRUFBd0NXLEVBQXhDLENBQXBCO0FBQ0gsU0FSRCxNQVNJLEtBQUtyQixJQUFMLENBQVV3QixTQUFWLENBQW9CeEMsR0FBR3lDLFFBQUgsQ0FBWXpDLEdBQUcwQyxTQUFILENBQWE3QixRQUFNLEdBQW5CLENBQVosRUFBcUNhLENBQXJDLEVBQXdDTyxFQUF4QyxDQUFwQjtBQUNQLEtBL0NJO0FBZ0RMVSxVQUFNLGdCQUFVO0FBQ1osYUFBSzNCLElBQUwsQ0FBVVMsY0FBVjtBQUNBLGFBQUtuQixJQUFMLENBQVU2QixJQUFWO0FBQ0EsYUFBS25CLElBQUwsQ0FBVW9CLENBQVYsR0FBYyxDQUFkO0FBQ0g7QUFwREksQ0FBVCIsImZpbGUiOiJDb1RyYW5nX3JlZWwuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nXFxyZWVscyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBpbml0KG9iail7XHJcbiAgICAgICAgdGhpcy5SZWRUID0gb2JqO1xyXG4gICAgICAgIHRoaXMuaWNvbnMgPSBbXTtcclxuICAgICAgICB2YXIgc2VsZiAgPSB0aGlzO1xyXG4gICAgICAgIHZhciBkYXRhID0gWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXTtcclxuICAgICAgICBQcm9taXNlLmFsbChkYXRhLm1hcChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuICAgICAgICAgICAgdmFyIGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLlJlZFQuaWNvbik7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgaWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdDb1RyYW5nX2l0ZW0nKTtcclxuICAgICAgICAgICAgaWNvbi5pbml0KHNlbGYuUmVkVCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDIgJiYgaW5kZXggPCBkYXRhLmxlbmd0aC0zKSB7XHJcbiAgICAgICAgICAgICAgICBpY29uLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnNbdGhpcy5pY29ucy5sZW5ndGgtMV0uc2V0SWNvbih0aGlzLmljb25zWzRdLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1t0aGlzLmljb25zLmxlbmd0aC0yXS5zZXRJY29uKHRoaXMuaWNvbnNbM10ucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmljb25zW3RoaXMuaWNvbnMubGVuZ3RoLTNdLnNldEljb24odGhpcy5pY29uc1syXS5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnNbdGhpcy5pY29ucy5sZW5ndGgtNF0uc2V0SWNvbih0aGlzLmljb25zWzFdLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1t0aGlzLmljb25zLmxlbmd0aC01XS5zZXRJY29uKHRoaXMuaWNvbnNbMF0ucmFuZG9tKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNwaW46IGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGQgPSBjYy5tb3ZlVG8oMSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LTM5NikpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDMpKTtcclxuICAgICAgICB2YXIgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQuY29weSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSA0KXtcclxuICAgICAgICAgICAgdmFyIEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQuRUZfdnVhdGhhbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5oaWV1VW5nKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBFRikpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBwMikpO1xyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5SZWRULmNvcHkoKTtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICB9LFxyXG59KTtcclxuIl19