
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/AngryBirds/AngryBirds_reelsR.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77651BdeG5Cw5a2bw3wvZf0', 'AngryBirds_reelsR');
// Script/Game/AngryBirds/AngryBirds_reelsR.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    init: function init(obj) {
        var _this = this;

        this.RedT = obj;
        this.icons = [];
        var self = this;
        Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
            var icon = cc.instantiate(self.RedT.iconRPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('AngryBirds-itemR');
            icon.init(self.RedT);
            if (index > 2 && index < 20) {
                icon.random();
            }
            return icon;
        })).then(function (result) {
            _this.icons = result;
            _this.icons[22].setIcon(_this.icons[2].random(!0));
            _this.icons[21].setIcon(_this.icons[1].random(!0));
            _this.icons[20].setIcon(_this.icons[0].random(!0));
        });
    },

    copy: function copy() {
        this.icons[22].setIcon(this.icons[2].data);
        this.icons[21].setIcon(this.icons[1].data);
        this.icons[20].setIcon(this.icons[0].data);
        this.node.y = 0;
    },
    spin: function spin(index) {
        this.node.stopAllActions();
        var self = this;
        var d = cc.moveTo(1.5, cc.v2(this.node.x, -(this.node.height - 270))).easing(cc.easeInOut(3));
        var p = cc.callFunc(function () {
            this.copy();
            if (index === 4) {
                this.RedT.labelWin.string = 0;
                this.RedT.hieuUng();
            }
        }, this);

        this.node.runAction(cc.sequence(cc.delayTime(index * 0.15), d, p));
    },
    stop: function stop() {
        this.node.stopAllActions();
        this.copy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzXFxBbmdyeUJpcmRzX3JlZWxzUi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0Iiwib2JqIiwiUmVkVCIsImljb25zIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsImljb25SUHJlZmFiIiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwicmFuZG9tIiwidGhlbiIsInJlc3VsdCIsInNldEljb24iLCJjb3B5IiwiZGF0YSIsInkiLCJzcGluIiwic3RvcEFsbEFjdGlvbnMiLCJkIiwibW92ZVRvIiwidjIiLCJ4IiwiaGVpZ2h0IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicCIsImNhbGxGdW5jIiwibGFiZWxXaW4iLCJzdHJpbmciLCJoaWV1VW5nIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVksRUFIUDs7QUFNTEMsUUFOSyxnQkFNQUMsR0FOQSxFQU1JO0FBQUE7O0FBQ0wsYUFBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0EsYUFBS0UsS0FBTCxHQUFhLEVBQWI7QUFDQSxZQUFJQyxPQUFRLElBQVo7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFB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O0FBK0NMUSxVQUFNLGdCQUFVO0FBQ1osYUFBSzNCLElBQUwsQ0FBVVcsY0FBVjtBQUNBLGFBQUtKLElBQUw7QUFDSDtBQWxESSxDQUFUIiwiZmlsZSI6IkFuZ3J5QmlyZHNfcmVlbHNSLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQob2JqKXtcclxuICAgICAgICB0aGlzLlJlZFQgPSBvYmo7XHJcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xyXG4gICAgICAgIHZhciBzZWxmICA9IHRoaXM7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoWzAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMF0ubWFwKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuUmVkVC5pY29uUlByZWZhYik7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgaWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdBbmdyeUJpcmRzLWl0ZW1SJyk7XHJcbiAgICAgICAgICAgIGljb24uaW5pdChzZWxmLlJlZFQpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAyICYmIGluZGV4IDwgMjApIHtcclxuICAgICAgICAgICAgICAgIGljb24ucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGljb247XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pY29ucyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1syMl0uc2V0SWNvbih0aGlzLmljb25zWzJdLnJhbmRvbSghMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmljb25zWzIxXS5zZXRJY29uKHRoaXMuaWNvbnNbMV0ucmFuZG9tKCEwKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnNbMjBdLnNldEljb24odGhpcy5pY29uc1swXS5yYW5kb20oITApKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjb3B5OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuaWNvbnNbMjJdLnNldEljb24odGhpcy5pY29uc1syXS5kYXRhKTtcclxuICAgICAgICB0aGlzLmljb25zWzIxXS5zZXRJY29uKHRoaXMuaWNvbnNbMV0uZGF0YSk7XHJcbiAgICAgICAgdGhpcy5pY29uc1syMF0uc2V0SWNvbih0aGlzLmljb25zWzBdLmRhdGEpO1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgIH0sXHJcbiAgICBzcGluOiBmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBkID0gY2MubW92ZVRvKDEuNSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LTI3MCkpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDMpKTtcclxuICAgICAgICB2YXIgcCA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvcHkoKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSA0KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5sYWJlbFdpbi5zdHJpbmcgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWRULmhpZXVVbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjE1KSwgZCwgcCkpO1xyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5jb3B5KCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19