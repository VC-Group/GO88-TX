
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Candy/Candy_reel/Candy_reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ac84jBjYBJiZpTkOu4E3j8', 'Candy_reel');
// Script/Game/Candy/Candy_reel/Candy_reel.js

'use strict';

cc.Class({
    extends: cc.Component,
    init: function init(obj) {
        var _this = this;

        this.RedT = obj;
        this.icons = [];
        var data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        Promise.all(data.map(function (obj, index) {
            var icon = cc.instantiate(this.RedT.icon);
            this.node.addChild(icon);
            icon = icon.getComponent('candy_reel_item');
            icon.init(this.RedT);
            if (index > 2 && index < data.length - 3) {
                icon.random();
            }
            return icon;
        }.bind(this))).then(function (result) {
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
        var d = cc.moveTo(1, cc.v2(this.node.x, -(this.node.height - 489))).easing(cc.easeInOut(3));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X3JlZWwvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcQ2FuZHlfcmVlbC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X3JlZWxcXENhbmR5X3JlZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJpbml0Iiwib2JqIiwiUmVkVCIsImljb25zIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImxlbmd0aCIsInJhbmRvbSIsImJpbmQiLCJ0aGVuIiwicmVzdWx0Iiwic2V0SWNvbiIsInNwaW4iLCJzdG9wQWxsQWN0aW9ucyIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJoZWlnaHQiLCJlYXNpbmciLCJlYXNlSW5PdXQiLCJwMiIsImNhbGxGdW5jIiwiY29weSIsInkiLCJFRiIsIkVGX3Z1YXRoYW5nIiwiaGlldVVuZyIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7QUFFTEMsUUFGSyxnQkFFQUMsR0FGQSxFQUVJO0FBQUE7O0FBQ0wsYUFBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsYUFBS0UsS0FBTCxHQUFhLEVBQWI7QUFDQSxZQUFJQyxPQUFPLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIs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U0FBVixDQUFvQnhDLEdBQUd5QyxRQUFILENBQVl6QyxHQUFHMEMsU0FBSCxDQUFhOUIsUUFBTSxHQUFuQixDQUFaLEVBQXFDYyxDQUFyQyxFQUF3Q1csRUFBeEMsQ0FBcEI7QUFDSCxTQVJELE1BU0ksS0FBS3RCLElBQUwsQ0FBVXlCLFNBQVYsQ0FBb0J4QyxHQUFHeUMsUUFBSCxDQUFZekMsR0FBRzBDLFNBQUgsQ0FBYTlCLFFBQU0sR0FBbkIsQ0FBWixFQUFxQ2MsQ0FBckMsRUFBd0NPLEVBQXhDLENBQXBCO0FBQ1AsS0E3Q0k7QUE4Q0xVLFVBQU0sZ0JBQVU7QUFDWixhQUFLNUIsSUFBTCxDQUFVVSxjQUFWO0FBQ0EsYUFBS25CLElBQUwsQ0FBVTZCLElBQVY7QUFDQSxhQUFLcEIsSUFBTCxDQUFVcUIsQ0FBVixHQUFjLENBQWQ7QUFDSDtBQWxESSxDQUFUIiwiZmlsZSI6IkNhbmR5X3JlZWwuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcQ2FuZHlfcmVlbCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBpbml0KG9iail7XHJcbiAgICAgICAgdGhpcy5SZWRUID0gb2JqO1xyXG4gICAgICAgIHRoaXMuaWNvbnMgPSBbXTtcclxuICAgICAgICB2YXIgZGF0YSA9IFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF07XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoZGF0YS5tYXAoZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcbiAgICAgICAgICAgIHZhciBpY29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5SZWRULmljb24pO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgICAgIGljb24gPSBpY29uLmdldENvbXBvbmVudCgnY2FuZHlfcmVlbF9pdGVtJyk7XHJcbiAgICAgICAgICAgIGljb24uaW5pdCh0aGlzLlJlZFQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAyICYmIGluZGV4IDwgZGF0YS5sZW5ndGgtMykge1xyXG4gICAgICAgICAgICAgICAgaWNvbi5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcclxuICAgICAgICB9LmJpbmQodGhpcykpKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnNbdGhpcy5pY29ucy5sZW5ndGgtMV0uc2V0SWNvbih0aGlzLmljb25zWzRdLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1t0aGlzLmljb25zLmxlbmd0aC0yXS5zZXRJY29uKHRoaXMuaWNvbnNbM10ucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmljb25zW3RoaXMuaWNvbnMubGVuZ3RoLTNdLnNldEljb24odGhpcy5pY29uc1syXS5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnNbdGhpcy5pY29ucy5sZW5ndGgtNF0uc2V0SWNvbih0aGlzLmljb25zWzFdLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1t0aGlzLmljb25zLmxlbmd0aC01XS5zZXRJY29uKHRoaXMuaWNvbnNbMF0ucmFuZG9tKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNwaW46IGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB2YXIgZCA9IGNjLm1vdmVUbygxLCBjYy52Mih0aGlzLm5vZGUueCwgLSh0aGlzLm5vZGUuaGVpZ2h0LTQ4OSkpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDMpKTtcclxuICAgICAgICB2YXIgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQuY29weSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSA0KXtcclxuICAgICAgICAgICAgdmFyIEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQuRUZfdnVhdGhhbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5oaWV1VW5nKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBFRikpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBwMikpO1xyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5SZWRULmNvcHkoKTtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICB9LFxyXG59KTtcclxuIl19