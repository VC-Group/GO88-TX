
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Mini3Cay/Mini3Cay_reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8defcIVF4lEJoEox0Os2KJA', 'Mini3Cay_reel');
// Script/Game/Mini3Cay/Mini3Cay_reel.js

"use strict";

cc.Class({
    extends: cc.Component,
    init: function init(obj) {
        var _this = this;

        this.RedT = obj;
        this.card = [];
        var self = this;
        Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
            var ooT = cc.instantiate(self.RedT.cardf);
            ooT.width = 73.45;
            ooT.height = 104.65;
            self.node.addChild(ooT);
            return ooT.getComponent(cc.Sprite);
        })).then(function (result) {
            _this.card = result;
            _this.random(true);
        });
    },
    random: function random() {
        var newG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        var self = this;
        Promise.all(this.card.map(function (obj, index) {
            if (newG) {
                obj.spriteFrame = cc.RedT.util.card.random(9);
            } else if (index !== 0 && index !== 20) {
                obj.spriteFrame = cc.RedT.util.card.random(9);
            }
        }));
    },
    spin: function spin(index) {
        this.node.stopAllActions();
        var self = this;
        var d = cc.moveTo(this.RedT.speed(), cc.v2(this.node.x, -(this.node.height - 104.65))).easing(cc.easeInOut(3));
        var p = cc.callFunc(function () {
            this.card[20].spriteFrame = this.card[0].spriteFrame;
            this.node.y = 0;
        }, this);

        if (index === 2) {
            var e = cc.callFunc(function () {
                if (this.RedT.isAuto) this.RedT.sendSpin();else this.RedT.offSpin();
            }, this);

            var EF = cc.callFunc(function () {
                this.RedT.hieuUng();
            }, this);
            this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p, cc.delayTime(0.1), EF));
        } else this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p));
    },
    stop: function stop() {
        this.node.stopAllActions();
        if (void 0 !== this.card && void 0 !== this.card[20] && void 0 !== this.card[20].spriteFrame) {
            this.card[20].spriteFrame = this.card[0].spriteFrame;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxNaW5pM0NheS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaTNDYXkvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1pbmkzQ2F5XFxNaW5pM0NheV9yZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJjYXJkIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsIm9vVCIsImluc3RhbnRpYXRlIiwiY2FyZGYiLCJ3aWR0aCIsImhlaWdodCIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInRoZW4iLCJyZXN1bHQiLCJyYW5kb20iLCJuZXdHIiwic3ByaXRlRnJhbWUiLCJ1dGlsIiwic3BpbiIsInN0b3BBbGxBY3Rpb25zIiwiZCIsIm1vdmVUbyIsInNwZWVkIiwidjIiLCJ4IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicCIsImNhbGxGdW5jIiwieSIsImUiLCJpc0F1dG8iLCJzZW5kU3BpbiIsIm9mZlNwaW4iLCJFRiIsImhpZXVVbmciLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLFVBQU0sY0FBU0MsR0FBVCxFQUFhO0FBQUE7O0FBQ2YsYUFBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsYUFBS0UsSUFBTCxHQUFZLEVBQVo7QUFDQSxZQUFJQyxPQUFRLElBQVo7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxD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LEdBQUcrQyxRQUFILENBQVkvQyxHQUFHZ0QsU0FBSCxDQUFhcEMsUUFBTSxHQUFuQixDQUFaLEVBQXFDa0IsQ0FBckMsRUFBd0NPLENBQXhDLEVBQTJDckMsR0FBR2dELFNBQUgsQ0FBYSxHQUFiLENBQTNDLEVBQThESixFQUE5RCxDQUFwQjtBQUNILFNBWkQsTUFhSSxLQUFLMUIsSUFBTCxDQUFVNEIsU0FBVixDQUFvQjlDLEdBQUcrQyxRQUFILENBQVkvQyxHQUFHZ0QsU0FBSCxDQUFhcEMsUUFBTSxHQUFuQixDQUFaLEVBQXFDa0IsQ0FBckMsRUFBd0NPLENBQXhDLENBQXBCO0FBQ1AsS0FuREk7QUFvRExZLFVBQU0sZ0JBQVU7QUFDWixhQUFLL0IsSUFBTCxDQUFVVyxjQUFWO0FBQ0EsWUFBSSxLQUFLLENBQUwsS0FBVyxLQUFLdEIsSUFBaEIsSUFDQSxLQUFLLENBQUwsS0FBVyxLQUFLQSxJQUFMLENBQVUsRUFBVixDQURYLElBRUEsS0FBSyxDQUFMLEtBQVcsS0FBS0EsSUFBTCxDQUFVLEVBQVYsRUFBY21CLFdBRjdCLEVBR0E7QUFDSSxpQkFBS25CLElBQUwsQ0FBVSxFQUFWLEVBQWNtQixXQUFkLEdBQTRCLEtBQUtuQixJQUFMLENBQVUsQ0FBVixFQUFhbUIsV0FBekM7QUFDSDtBQUNELGFBQUtSLElBQUwsQ0FBVXFCLENBQVYsR0FBYyxDQUFkO0FBQ0g7QUE3REksQ0FBVCIsImZpbGUiOiJNaW5pM0NheV9yZWVsLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxNaW5pM0NheSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgICAgICB0aGlzLmNhcmQgPSBbXTtcclxuICAgICAgICB2YXIgc2VsZiAgPSB0aGlzO1xyXG4gICAgICAgIFByb21pc2UuYWxsKFswLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0ubWFwKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgb29UID0gY2MuaW5zdGFudGlhdGUoc2VsZi5SZWRULmNhcmRmKTtcclxuICAgICAgICAgICAgb29ULndpZHRoICA9IDczLjQ1O1xyXG4gICAgICAgICAgICBvb1QuaGVpZ2h0ID0gMTA0LjY1O1xyXG4gICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQob29UKTtcclxuICAgICAgICAgICAgcmV0dXJuIG9vVC5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICB9KSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9tKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJhbmRvbTogZnVuY3Rpb24obmV3RyA9IGZhbHNlKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5jYXJkLm1hcChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuICAgICAgICAgICAgaWYgKG5ld0cpIHtcclxuICAgICAgICAgICAgICAgIG9iai5zcHJpdGVGcmFtZSA9IGNjLlJlZFQudXRpbC5jYXJkLnJhbmRvbSg5KTtcclxuICAgICAgICAgICAgfWVsc2UgaWYgKGluZGV4ICE9PSAwICYmIGluZGV4ICE9PSAyMCl7XHJcbiAgICAgICAgICAgICAgICBvYmouc3ByaXRlRnJhbWUgPSBjYy5SZWRULnV0aWwuY2FyZC5yYW5kb20oOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgIH0sXHJcbiAgICBzcGluOiBmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBkID0gY2MubW92ZVRvKHRoaXMuUmVkVC5zcGVlZCgpLCBjYy52Mih0aGlzLm5vZGUueCwgLSh0aGlzLm5vZGUuaGVpZ2h0LTEwNC42NSkpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDMpKTtcclxuICAgICAgICB2YXIgcCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRbMjBdLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkWzBdLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMil7XHJcbiAgICAgICAgICAgIHZhciBlID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5SZWRULmlzQXV0bylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLlJlZFQuc2VuZFNwaW4oKVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5vZmZTcGluKClcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgRUYgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5oaWV1VW5nKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBwLCBjYy5kZWxheVRpbWUoMC4xKSwgRUYpKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqMC4xKSwgZCwgcCkpO1xyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gdGhpcy5jYXJkICYmXHJcbiAgICAgICAgICAgIHZvaWQgMCAhPT0gdGhpcy5jYXJkWzIwXSAmJlxyXG4gICAgICAgICAgICB2b2lkIDAgIT09IHRoaXMuY2FyZFsyMF0uc3ByaXRlRnJhbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNhcmRbMjBdLnNwcml0ZUZyYW1lID0gdGhpcy5jYXJkWzBdLnNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICB9LFxyXG59KTtcclxuIl19