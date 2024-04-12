
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BauCua/BauCua_linhVat/BauCua_linhVat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb46bQsB6lOkIXs9oBGBiCh', 'BauCua_linhVat');
// Script/Game/BauCua/BauCua_linhVat/BauCua_linhVat.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        xLabel: cc.Label,
        totall: cc.Label,
        me: cc.Label,
        nodeMe: cc.Node,
        nodeSelect: cc.Node
    },
    meCuoc: function meCuoc(cuoc) {
        if (!!cuoc) {
            this.nodeMe.active = true;
            this.me.string = helper.nFormatter(cuoc, 1);
        } else {
            this.nodeMe.active = false;
        }
    },
    totallCuoc: function totallCuoc(cuoc) {
        if (!!cuoc) {
            this.totall.string = helper.nFormatter(cuoc, 1);
        } else {
            this.totall.string = 0;
        }
    },
    Select: function Select(x) {
        this.nodeSelect.active = true;
        if (x > 1) {
            this.xLabel.node.active = true;
            this.xLabel.string = 'x' + x;
        } else this.xLabel.node.active = false;
    },
    unSelect: function unSelect() {
        this.nodeSelect.active = this.xLabel.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmF1Q3VhXFxCYXVDdWFfbGluaFZhdC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhdUN1YVxcQmF1Q3VhX2xpbmhWYXQvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhdUN1YVxcQmF1Q3VhX2xpbmhWYXRcXEJhdUN1YV9saW5oVmF0LmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ4TGFiZWwiLCJMYWJlbCIsInRvdGFsbCIsIm1lIiwibm9kZU1lIiwiTm9kZSIsIm5vZGVTZWxlY3QiLCJtZUN1b2MiLCJjdW9jIiwiYWN0aXZlIiwic3RyaW5nIiwibkZvcm1hdHRlciIsInRvdGFsbEN1b2MiLCJTZWxlY3QiLCJ4Iiwibm9kZSIsInVuU2VsZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxnQkFBWTtBQUNSQyxnQkFBWUwsR0FBR00sS0FEUDtBQUVSQyxnQkFBWVAsR0FBR00sS0FGUDtBQUdSRSxZQUFZUixHQUFHTSxLQUhQO0FBSVJHLGdCQUFZVCxHQUFHVSxJQUpQO0FBS1JDLG9CQUFZWCxHQUFHVTtBQUxQLEtBRlA7QUFTTEUsWUFBUSxnQkFBU0MsSUFBVCxFQUFlO0FBQ25CLFlBQUksQ0FBQyxDQUFDQSxJQUFOLEVBQVk7QUFDUixpQkFBS0osTUFBTCxDQUFZSyxNQUFaLEdBQXFCLElBQXJCO0FBQ0EsaUJBQUtOLEVBQUwsQ0FBUU8sTUFBUixHQUFpQmpCLE9BQU9rQixVQUFQLENBQWtCSCxJQUFsQixFQUF3QixDQUF4QixDQUFqQjtBQUNILFNBSEQsTUFHSztBQUNELGlCQUFLSixNQUFMLENBQVlLLE1BQVosR0FBcUIsS0FBckI7QUFDSDtBQUNKLEtBaEJJO0FBaUJMRyxnQkFBWSxvQkFBU0osSUFBVCxFQUFlO0FBQ3ZCLFlBQUksQ0FBQyxDQUFDQSxJQUFOLEVBQVk7QUFDUixpQkFBS04sTUFBTCxDQUFZUSxNQUFaLEdBQXFCakIsT0FBT2tCLFVBQVAsQ0FBa0JILElBQWxCLEVBQXdCLENBQXhCLENBQXJCO0FBQ0gsU0FGRCxNQUVLO0FBQ0QsaUJBQUtOLE1BQUwsQ0FBWVEsTUFBWixHQUFxQixDQUFyQjtBQUNIO0FBQ0osS0F2Qkk7QUF3QkxHLFlBQVEsZ0JBQVNDLENBQVQsRUFBVztBQUNmLGFBQUtSLFVBQUwsQ0FBZ0JHLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0EsWUFBSUssSUFBSSxDQUFSLEVBQVc7QUFDUCxpQkFBS2QsTUFBTCxDQUFZZSxJQUFaLENBQWlCTixNQUFqQixHQUEwQixJQUExQjtBQUNBLGlCQUFLVCxNQUFMLENBQVlVLE1BQVosR0FBcUIsTUFBTUksQ0FBM0I7QUFDSCxTQUhELE1BSUksS0FBS2QsTUFBTCxDQUFZZSxJQUFaLENBQWlCTixNQUFqQixHQUEwQixLQUExQjtBQUNQLEtBL0JJO0FBZ0NMTyxjQUFVLG9CQUFVO0FBQ2hCLGFBQUtWLFVBQUwsQ0FBZ0JHLE1BQWhCLEdBQXlCLEtBQUtULE1BQUwsQ0FBWWUsSUFBWixDQUFpQk4sTUFBakIsR0FBMEIsS0FBbkQ7QUFDSDtBQWxDSSxDQUFUIiwiZmlsZSI6IkJhdUN1YV9saW5oVmF0LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmF1Q3VhXFxCYXVDdWFfbGluaFZhdCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgeExhYmVsOiAgICAgY2MuTGFiZWwsXHJcbiAgICAgICAgdG90YWxsOiAgICAgY2MuTGFiZWwsXHJcbiAgICAgICAgbWU6ICAgICAgICAgY2MuTGFiZWwsXHJcbiAgICAgICAgbm9kZU1lOiAgICAgY2MuTm9kZSxcclxuICAgICAgICBub2RlU2VsZWN0OiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG1lQ3VvYzogZnVuY3Rpb24oY3VvYykge1xyXG4gICAgICAgIGlmICghIWN1b2MpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlTWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZS5zdHJpbmcgPSBoZWxwZXIubkZvcm1hdHRlcihjdW9jLCAxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlTWUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvdGFsbEN1b2M6IGZ1bmN0aW9uKGN1b2MpIHtcclxuICAgICAgICBpZiAoISFjdW9jKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxsLnN0cmluZyA9IGhlbHBlci5uRm9ybWF0dGVyKGN1b2MsIDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsbC5zdHJpbmcgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBTZWxlY3Q6IGZ1bmN0aW9uKHgpe1xyXG4gICAgICAgIHRoaXMubm9kZVNlbGVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmICh4ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnhMYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMueExhYmVsLnN0cmluZyA9ICd4JyArIHg7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgdGhpcy54TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICB1blNlbGVjdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGVTZWxlY3QuYWN0aXZlID0gdGhpcy54TGFiZWwubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=