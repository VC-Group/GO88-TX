
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Zeus/reels/Zeus_reel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3ae4e1beQZEMZqnzzUxgnG9', 'Zeus_reel');
// Script/Game/Zeus/reels/Zeus_reel.js

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
            icon = icon.getComponent('Zeus_item');
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

    spin: function spin(index, speed) {
        this.node.stopAllActions();
        var self = this;
        var d = cc.moveTo(speed, cc.v2(this.node.x, -(this.node.height - 396))).easing(cc.easeInOut(3));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1c1xccmVlbHMvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxyZWVscy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1c1xccmVlbHNcXFpldXNfcmVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsImluaXQiLCJvYmoiLCJSZWRUIiwiaWNvbnMiLCJzZWxmIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImxlbmd0aCIsInJhbmRvbSIsInRoZW4iLCJyZXN1bHQiLCJzZXRJY29uIiwic3BpbiIsInNwZWVkIiwic3RvcEFsbEFjdGlvbnMiLCJkIiwibW92ZVRvIiwidjIiLCJ4IiwiaGVpZ2h0IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJFRl92dWF0aGFuZyIsImhpZXVVbmciLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLFFBRkssZ0JBRUFDLEdBRkEsRUFFSTtBQUFBOztBQUNMLGFBQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNBLGFBQUtFLEtBQUwsR0FBYSxFQUFiO0FBQ0EsWUFBSUMsT0FBUSxJQUFaO0FBQ0EsWUFBSUMsT0FBTyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLENBQW5CLEVB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LGlCQUFLeEIsSUFBTCxDQUFVeUIsU0FBVixDQUFvQnpDLEdBQUcwQyxRQUFILENBQVkxQyxHQUFHMkMsU0FBSCxDQUFhOUIsUUFBTSxHQUFuQixDQUFaLEVBQXFDYyxDQUFyQyxFQUF3Q1csRUFBeEMsQ0FBcEI7QUFDSCxTQVJELE1BU0ksS0FBS3RCLElBQUwsQ0FBVXlCLFNBQVYsQ0FBb0J6QyxHQUFHMEMsUUFBSCxDQUFZMUMsR0FBRzJDLFNBQUgsQ0FBYTlCLFFBQU0sR0FBbkIsQ0FBWixFQUFxQ2MsQ0FBckMsRUFBd0NPLEVBQXhDLENBQXBCO0FBQ1AsS0EvQ0k7QUFnRExVLFVBQU0sZ0JBQVU7QUFDWixhQUFLNUIsSUFBTCxDQUFVVSxjQUFWO0FBQ0EsYUFBS3BCLElBQUwsQ0FBVThCLElBQVY7QUFDQSxhQUFLcEIsSUFBTCxDQUFVcUIsQ0FBVixHQUFjLENBQWQ7QUFDSDtBQXBESSxDQUFUIiwiZmlsZSI6IlpldXNfcmVlbC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFpldXNcXHJlZWxzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIGluaXQob2JqKXtcclxuICAgICAgICB0aGlzLlJlZFQgPSBvYmo7XHJcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xyXG4gICAgICAgIHZhciBzZWxmICA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGRhdGEgPSBbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDBdO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuUmVkVC5pY29uKTtcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xyXG4gICAgICAgICAgICBpY29uID0gaWNvbi5nZXRDb21wb25lbnQoJ1pldXNfaXRlbScpO1xyXG4gICAgICAgICAgICBpY29uLmluaXQoc2VsZi5SZWRUKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMiAmJiBpbmRleCA8IGRhdGEubGVuZ3RoLTMpIHtcclxuICAgICAgICAgICAgICAgIGljb24ucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGljb247XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pY29ucyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1t0aGlzLmljb25zLmxlbmd0aC0xXS5zZXRJY29uKHRoaXMuaWNvbnNbNF0ucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmljb25zW3RoaXMuaWNvbnMubGVuZ3RoLTJdLnNldEljb24odGhpcy5pY29uc1szXS5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnNbdGhpcy5pY29ucy5sZW5ndGgtM10uc2V0SWNvbih0aGlzLmljb25zWzJdLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1t0aGlzLmljb25zLmxlbmd0aC00XS5zZXRJY29uKHRoaXMuaWNvbnNbMV0ucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmljb25zW3RoaXMuaWNvbnMubGVuZ3RoLTVdLnNldEljb24odGhpcy5pY29uc1swXS5yYW5kb20oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3BpbjogZnVuY3Rpb24oaW5kZXgsc3BlZWQpe1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZCA9IGNjLm1vdmVUbyhzcGVlZCwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LTM5NikpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDMpKTtcclxuICAgICAgICB2YXIgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQuY29weSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSA0KXtcclxuICAgICAgICAgICAgdmFyIEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQuRUZfdnVhdGhhbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5oaWV1VW5nKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBFRikpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjEpLCBkLCBwMikpO1xyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5SZWRULmNvcHkoKTtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICB9LFxyXG59KTtcclxuIl19