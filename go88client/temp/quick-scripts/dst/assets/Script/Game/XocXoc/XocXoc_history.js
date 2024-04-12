
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XocXoc/XocXoc_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '358d0RyfQlNvKbc/4deKLy1', 'XocXoc_history');
// Script/Game/XocXoc/XocXoc_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node,
        cointRed: cc.Node,
        cointXu: cc.Node,

        iconRed: cc.SpriteFrame,
        iconWhite: cc.SpriteFrame,

        red: true
    },
    onLoad: function onLoad() {
        var _this = this;

        var page = cc.instantiate(this.page);
        page.y = -263;
        this.node.addChild(page);
        this.page = page.getComponent('Pagination');
        Promise.all(this.content.children.map(function (obj) {
            return obj.getComponent('XocXoc_history_item');
        })).then(function (tab) {
            _this.content = tab;
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { xocxoc: { log: { red: this.red, page: page } } } });
    },
    changerCoint: function changerCoint() {
        this.red = !this.red;
        this.cointRed.active = !this.cointRed.active;
        this.cointXu.active = !this.cointXu.active;
        this.get_data();
    },
    onData: function onData(data) {
        var self = this;
        this.page.onSet(data.page, data.kmess, data.total);

        Promise.all(this.content.map(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;

                obj.bg.active = i % 2;

                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.phien;

                var numb = 0;
                dataT.kq.forEach(function (dot) {
                    if (dot) {
                        numb++;
                    }
                });
                obj.kqSprite.spriteFrame = numb === 0 ? self.iconRed : !(numb % 2) ? self.iconWhite : self.iconRed;
                obj.kqLabel.string = numb === 0 ? 4 : numb;

                obj.chan.string = Helper.numberWithCommas(dataT.chan);
                obj.le.string = Helper.numberWithCommas(dataT.le);
                obj.red3.string = Helper.numberWithCommas(dataT.red3);
                obj.red4.string = Helper.numberWithCommas(dataT.red4);
                obj.white3.string = Helper.numberWithCommas(dataT.white3);
                obj.white4.string = Helper.numberWithCommas(dataT.white4);
                obj.win.string = Helper.numberWithCommas(dataT.betwin);

                if (!(numb % 2)) {
                    obj.chan.node.color = cc.Color.YELLOW;
                    obj.le.node.color = cc.Color.WHITE;
                } else {
                    obj.le.node.color = cc.Color.YELLOW;
                    obj.chan.node.color = cc.Color.WHITE;
                }

                if (numb === 0) {
                    obj.white4.node.color = cc.Color.YELLOW;
                } else {
                    obj.white4.node.color = cc.Color.WHITE;
                }
                if (numb === 1) {
                    obj.white3.node.color = cc.Color.YELLOW;
                } else {
                    obj.white3.node.color = cc.Color.WHITE;
                }
                if (numb === 3) {
                    obj.red3.node.color = cc.Color.YELLOW;
                } else {
                    obj.red3.node.color = cc.Color.WHITE;
                }
                if (numb === 4) {
                    obj.red4.node.color = cc.Color.YELLOW;
                } else {
                    obj.red4.node.color = cc.Color.WHITE;
                }
            } else {
                obj.node.active = false;
            }
        }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb2NYb2MvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvY1hvYy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9jWG9jXFxYb2NYb2NfaGlzdG9yeS5qcyJdLCJuYW1lcyI6WyJIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGFnZSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwiY29pbnRSZWQiLCJjb2ludFh1IiwiaWNvblJlZCIsIlNwcml0ZUZyYW1lIiwiaWNvbldoaXRlIiwicmVkIiwib25Mb2FkIiwiaW5zdGFudGlhdGUiLCJ5Iiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiUHJvbWlzZSIsImFsbCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwidGhlbiIsInRhYiIsImluaXQiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwiUmVkVCIsInNlbmQiLCJnIiwieG9jeG9jIiwibG9nIiwiY2hhbmdlckNvaW50IiwiYWN0aXZlIiwib25EYXRhIiwiZGF0YSIsInNlbGYiLCJvblNldCIsImttZXNzIiwidG90YWwiLCJpIiwiZGF0YVQiLCJiZyIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwicGhpZW4iLCJudW1iIiwia3EiLCJmb3JFYWNoIiwiZG90Iiwia3FTcHJpdGUiLCJzcHJpdGVGcmFtZSIsImtxTGFiZWwiLCJjaGFuIiwibnVtYmVyV2l0aENvbW1hcyIsImxlIiwicmVkMyIsInJlZDQiLCJ3aGl0ZTMiLCJ3aGl0ZTQiLCJ3aW4iLCJiZXR3aW4iLCJjb2xvciIsIkNvbG9yIiwiWUVMTE9XIiwiV0hJVEUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FB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aUJBRkQsTUFFSztBQUNENUMsd0JBQUlxQyxJQUFKLENBQVM1QyxJQUFULENBQWNpRCxLQUFkLEdBQXNCbkUsR0FBR29FLEtBQUgsQ0FBU0UsS0FBL0I7QUFDSDtBQUNKLGFBckRELE1BcURLO0FBQ0Q3QyxvQkFBSVAsSUFBSixDQUFTbUIsTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBQ0osU0ExRFcsQ0FBWjtBQTJESDtBQXRHSSxDQUFUIiwiZmlsZSI6IlhvY1hvY19oaXN0b3J5LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb2NYb2MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYWdlOiAgICAgY2MuUHJlZmFiLFxyXG4gICAgICAgIGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG4gICAgICAgIGNvaW50UmVkOiBjYy5Ob2RlLFxyXG4gICAgICAgIGNvaW50WHU6ICBjYy5Ob2RlLFxyXG5cclxuICAgICAgICBpY29uUmVkOiAgIGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIGljb25XaGl0ZTogY2MuU3ByaXRlRnJhbWUsXHJcblxyXG4gICAgICAgIHJlZDogICAgICB0cnVlLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgbGV0IHBhZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhZ2UpO1xyXG4gICAgICAgIHBhZ2UueSA9IC0yNjM7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2UuZ2V0Q29tcG9uZW50KCdQYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmdldENvbXBvbmVudCgnWG9jWG9jX2hpc3RvcnlfaXRlbScpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC50aGVuKHRhYiA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudCA9IHRhYjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucGFnZS5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldF9kYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2c6e3hvY3hvYzp7bG9nOntyZWQ6dGhpcy5yZWQsIHBhZ2U6cGFnZX19fX0pO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZXJDb2ludDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlZCAgICAgICAgICAgICA9ICF0aGlzLnJlZDtcclxuICAgICAgICB0aGlzLmNvaW50UmVkLmFjdGl2ZSA9ICF0aGlzLmNvaW50UmVkLmFjdGl2ZTtcclxuICAgICAgICB0aGlzLmNvaW50WHUuYWN0aXZlICA9ICF0aGlzLmNvaW50WHUuYWN0aXZlO1xyXG4gICAgICAgIHRoaXMuZ2V0X2RhdGEoKTtcclxuICAgIH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnBhZ2Uub25TZXQoZGF0YS5wYWdlLCBkYXRhLmttZXNzLCBkYXRhLnRvdGFsKTtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5jb250ZW50Lm1hcChmdW5jdGlvbihvYmosIGkpe1xyXG4gICAgICAgICAgICBsZXQgZGF0YVQgPSBkYXRhLmRhdGFbaV07XHJcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGRhdGFUKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBvYmouYmcuYWN0aXZlICAgID0gaSUyO1xyXG5cclxuICAgICAgICAgICAgICAgIG9iai50aW1lLnN0cmluZyAgPSBIZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShkYXRhVC50aW1lKTtcclxuICAgICAgICAgICAgICAgIG9iai5waGllbi5zdHJpbmcgPSBkYXRhVC5waGllbjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbnVtYiAgPSAwO1xyXG4gICAgICAgICAgICAgICAgZGF0YVQua3EuZm9yRWFjaChmdW5jdGlvbihkb3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb3QpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYisrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb2JqLmtxU3ByaXRlLnNwcml0ZUZyYW1lID0gbnVtYiA9PT0gMCA/IHNlbGYuaWNvblJlZCA6ICghKG51bWIlMikgPyBzZWxmLmljb25XaGl0ZSA6IHNlbGYuaWNvblJlZCk7XHJcbiAgICAgICAgICAgICAgICBvYmoua3FMYWJlbC5zdHJpbmcgPSBudW1iID09PSAwID8gNCA6IG51bWI7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqLmNoYW4uc3RyaW5nICAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5jaGFuKTtcclxuICAgICAgICAgICAgICAgIG9iai5sZS5zdHJpbmcgICAgID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQubGUpO1xyXG4gICAgICAgICAgICAgICAgb2JqLnJlZDMuc3RyaW5nICAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5yZWQzKTtcclxuICAgICAgICAgICAgICAgIG9iai5yZWQ0LnN0cmluZyAgID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQucmVkNCk7XHJcbiAgICAgICAgICAgICAgICBvYmoud2hpdGUzLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULndoaXRlMyk7XHJcbiAgICAgICAgICAgICAgICBvYmoud2hpdGU0LnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULndoaXRlNCk7XHJcbiAgICAgICAgICAgICAgICBvYmoud2luLnN0cmluZyAgICA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULmJldHdpbik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCEobnVtYiUyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jaGFuLm5vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmxlLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5sZS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jaGFuLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobnVtYiA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai53aGl0ZTQubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai53aGl0ZTQubm9kZS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG51bWIgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoud2hpdGUzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBvYmoud2hpdGUzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChudW1iID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnJlZDMubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5yZWQzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChudW1iID09PSA0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnJlZDQubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5yZWQ0Lm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==