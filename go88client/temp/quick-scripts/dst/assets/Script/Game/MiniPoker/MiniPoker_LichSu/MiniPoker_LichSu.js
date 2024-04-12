
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/MiniPoker/MiniPoker_LichSu/MiniPoker_LichSu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a12b3BIWQdNzY/UVnylxq9K', 'MiniPoker_LichSu');
// Script/Game/MiniPoker/MiniPoker_LichSu/MiniPoker_LichSu.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node,
        red: true,
        isLoad: false
    },
    onLoad: function onLoad() {
        var page = cc.instantiate(this.page);
        page.y = -294;
        this.node.addChild(page);
        this.page = page.getComponent('Pagination');
        this.content = this.content.children.map(function (obj) {
            return obj.getComponent('MiniPoker_LichSu_item');
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        !this.isLoad && this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        this.isLoad = true;
        cc.RedT.send({ g: { mini_poker: { log: { red: this.red, page: page } } } });
    },
    onData: function onData(data) {
        this.page.onSet(data.page, data.kmess, data.total);
        this.content.forEach(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.bg.active = i % 2;
                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.id;
                obj.bet.string = Helper.numberWithCommas(dataT.bet);
                obj.card.forEach(function (card, index) {
                    card.spriteFrame = cc.RedT.util.card.getCard(dataT.kq[index].card, dataT.kq[index].type);
                });
                obj.win.string = Helper.numberWithCommas(dataT.win);
            } else {
                obj.node.active = false;
            }
        }.bind(this));
    },
    reset: function reset() {
        this.isLoad = false;
        Promise.all(this.content.children.map(function (obj) {
            obj.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaVBva2VyXFxNaW5pUG9rZXJfTGljaFN1Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaVBva2VyXFxNaW5pUG9rZXJfTGljaFN1L2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxNaW5pUG9rZXJcXE1pbmlQb2tlcl9MaWNoU3VcXE1pbmlQb2tlcl9MaWNoU3UuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInJlZCIsImlzTG9hZCIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiaW5pdCIsIm9uRW5hYmxlIiwiZ2V0X2RhdGEiLCJSZWRUIiwic2VuZCIsImciLCJtaW5pX3Bva2VyIiwibG9nIiwib25EYXRhIiwiZGF0YSIsIm9uU2V0Iiwia21lc3MiLCJ0b3RhbCIsImZvckVhY2giLCJpIiwiZGF0YVQiLCJhY3RpdmUiLCJiZyIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwicGhpZW4iLCJpZCIsImJldCIsIm51bWJlcldpdGhDb21tYXMiLCJjYXJkIiwiaW5kZXgiLCJzcHJpdGVGcmFtZSIsInV0aWwiLCJnZXRDYXJkIiwia3EiLCJ0eXBlIiwid2luIiwiYmluZCIsInJlc2V0IiwiUHJvbWlzZSIsImFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JD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QUFSLENBQVksS0FBS2pELE9BQUwsQ0FBYVUsUUFBYixDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBU0MsR0FBVCxFQUFhO0FBQy9DQSxnQkFBSWlCLE1BQUosR0FBYSxLQUFiO0FBQ0gsU0FGVyxDQUFaO0FBR0g7QUFsREksQ0FBVCIsImZpbGUiOiJNaW5pUG9rZXJfTGljaFN1LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaVBva2VyXFxNaW5pUG9rZXJfTGljaFN1Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYWdlOiAgICAgY2MuUHJlZmFiLFxyXG4gICAgICAgIGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG4gICAgICAgIHJlZDogICAgICB0cnVlLFxyXG4gICAgICAgIGlzTG9hZDogICBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHZhciBwYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wYWdlKTtcclxuICAgICAgICBwYWdlLnkgPSAtMjk0O1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwYWdlKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlLmdldENvbXBvbmVudCgnUGFnaW5hdGlvbicpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ01pbmlQb2tlcl9MaWNoU3VfaXRlbScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFnZS5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAhdGhpcy5pc0xvYWQgJiYgdGhpcy5nZXRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcbiAgICAgICAgdGhpcy5pc0xvYWQgPSB0cnVlO1xyXG4gICAgICAgIGNjLlJlZFQuc2VuZCh7Zzp7bWluaV9wb2tlcjp7bG9nOntyZWQ6dGhpcy5yZWQsIHBhZ2U6cGFnZX19fX0pO1xyXG4gICAgfSxcclxuICAgIG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdGhpcy5wYWdlLm9uU2V0KGRhdGEucGFnZSwgZGF0YS5rbWVzcywgZGF0YS50b3RhbClcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZm9yRWFjaChmdW5jdGlvbihvYmosIGkpe1xyXG4gICAgICAgICAgICB2YXIgZGF0YVQgPSBkYXRhLmRhdGFbaV07XHJcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGRhdGFUKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb2JqLmJnLmFjdGl2ZSA9IGklMjtcclxuICAgICAgICAgICAgICAgIG9iai50aW1lLnN0cmluZyA9IEhlbHBlci5nZXRTdHJpbmdEYXRlQnlUaW1lKGRhdGFULnRpbWUpO1xyXG4gICAgICAgICAgICAgICAgb2JqLnBoaWVuLnN0cmluZyA9IGRhdGFULmlkO1xyXG4gICAgICAgICAgICAgICAgb2JqLmJldC5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5iZXQpO1xyXG4gICAgICAgICAgICAgICAgb2JqLmNhcmQuZm9yRWFjaChmdW5jdGlvbihjYXJkLCBpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZC5zcHJpdGVGcmFtZSA9IGNjLlJlZFQudXRpbC5jYXJkLmdldENhcmQoZGF0YVQua3FbaW5kZXhdLmNhcmQsIGRhdGFULmtxW2luZGV4XS50eXBlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgb2JqLndpbi5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC53aW4pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbiAgICByZXNldDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmlzTG9hZCAgICA9IGZhbHNlO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMuY29udGVudC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfSkpXHJcbiAgICB9LFxyXG59KTtcclxuIl19