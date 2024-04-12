
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CaoThap/CaoThap_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '025c7+UqBFBWKVKH56kQUN5', 'CaoThap_history');
// Script/Game/CaoThap/CaoThap_history.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        page: cc.Prefab,
        content: cc.Node,
        red: true
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    onLoad: function onLoad() {
        this.page = cc.instantiate(this.page);
        this.page.y = -272;
        this.node.addChild(this.page);
        this.page = this.page.getComponent('Pagination');
        this.content = this.content.children.map(function (obj) {
            return obj.getComponent('CaoThap_history_item');
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { caothap: { history: { red: this.red, page: page } } } });
    },
    onData: function onData(data) {
        var self = this;
        this.page.onSet(data.page, data.kmess, data.total);
        this.content.forEach(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.bg.active = i % 2;
                obj.time.string = helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.id;
                obj.buoc.string = dataT.buoc;
                obj.cuoc.string = helper.numberWithCommas(dataT.cuoc);
                obj.win.string = helper.numberWithCommas(dataT.bet);
                obj.card1.spriteFrame = cc.RedT.util.card.getCard(dataT.card1.card, dataT.card1.type);
                if (!!dataT.chon) {
                    obj.select.active = true;
                    if (dataT.chon == 2) {
                        obj.select.scaleY = -1; // Chọn Up
                    } else {
                        obj.select.scaleY = 1; // Chọn Down
                    }
                } else {
                    obj.select.active = false;
                }
                if (void 0 !== dataT.card2 && void 0 !== dataT.card2.card) {
                    obj.card2.node.active = true;
                    obj.card2.spriteFrame = cc.RedT.util.card.getCard(dataT.card2.card, dataT.card2.type);
                } else {
                    obj.card2.node.active = false;
                }
            } else {
                obj.node.active = false;
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwXFxDYW9UaGFwX2hpc3RvcnkuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInJlZCIsImluaXQiLCJvYmoiLCJSZWRUIiwib25Mb2FkIiwiaW5zdGFudGlhdGUiLCJ5Iiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJtYXAiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwic2VuZCIsImciLCJjYW90aGFwIiwiaGlzdG9yeSIsIm9uRGF0YSIsImRhdGEiLCJzZWxmIiwib25TZXQiLCJrbWVzcyIsInRvdGFsIiwiZm9yRWFjaCIsImkiLCJkYXRhVCIsImFjdGl2ZSIsImJnIiwidGltZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJwaGllbiIsImlkIiwiYnVvYyIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwid2luIiwiYmV0IiwiY2FyZDEiLCJzcHJpdGVGcmFtZSIsInV0aWwiLCJjYXJkIiwiZ2V0Q2FyZCIsInR5cGUiLCJjaG9uIiwic2VsZWN0Iiwic2NhbGVZIiwiY2FyZDIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1JDLGNBQVVMLEdBQUdNLE1BREw7QUFFUkMsaUJBQVVQLEdBQUdRLElBRkw7QUFHUkMsYUFBVTtBQUhGLEtB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TUFBWCxHQUFvQixDQUFwQixDQURDLENBQ3VCO0FBQzNCO0FBQ0osaUJBUEQsTUFPSztBQUNEN0Msd0JBQUk0QyxNQUFKLENBQVduQixNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7QUFDRCxvQkFBSSxLQUFLLENBQUwsS0FBV0QsTUFBTXNCLEtBQWpCLElBQTBCLEtBQUssQ0FBTCxLQUFXdEIsTUFBTXNCLEtBQU4sQ0FBWU4sSUFBckQsRUFBMkQ7QUFDdkR4Qyx3QkFBSThDLEtBQUosQ0FBVXpDLElBQVYsQ0FBZW9CLE1BQWYsR0FBd0IsSUFBeEI7QUFDQXpCLHdCQUFJOEMsS0FBSixDQUFVUixXQUFWLEdBQXdCakQsR0FBR1ksSUFBSCxDQUFRc0MsSUFBUixDQUFhQyxJQUFiLENBQWtCQyxPQUFsQixDQUEwQmpCLE1BQU1zQixLQUFOLENBQVlOLElBQXRDLEVBQTRDaEIsTUFBTXNCLEtBQU4sQ0FBWUosSUFBeEQsQ0FBeEI7QUFDSCxpQkFIRCxNQUdLO0FBQ0QxQyx3QkFBSThDLEtBQUosQ0FBVXpDLElBQVYsQ0FBZW9CLE1BQWYsR0FBd0IsS0FBeEI7QUFDSDtBQUNKLGFBekJELE1BeUJLO0FBQ0R6QixvQkFBSUssSUFBSixDQUFTb0IsTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBQ0osU0E5QkQ7QUErQkg7QUE1REksQ0FBVCIsImZpbGUiOiJDYW9UaGFwX2hpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhb1RoYXAiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBhZ2U6ICAgICBjYy5QcmVmYWIsXHJcbiAgICAgICAgY29udGVudDogIGNjLk5vZGUsXHJcbiAgICAgICAgcmVkOiAgICAgIHRydWUsXHJcbiAgICB9LFxyXG4gICAgaW5pdChvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZSk7XHJcbiAgICAgICAgdGhpcy5wYWdlLnkgPSAtMjcyO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnBhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZS5nZXRDb21wb25lbnQoJ1BhZ2luYXRpb24nKTtcclxuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmNvbnRlbnQuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdDYW9UaGFwX2hpc3RvcnlfaXRlbScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFnZS5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldF9kYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2c6e2Nhb3RoYXA6e2hpc3Rvcnk6e3JlZDp0aGlzLnJlZCwgcGFnZTpwYWdlfX19fSk7XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wYWdlLm9uU2V0KGRhdGEucGFnZSwgZGF0YS5rbWVzcywgZGF0YS50b3RhbCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmZvckVhY2goZnVuY3Rpb24ob2JqLCBpKXtcclxuICAgICAgICAgICAgdmFyIGRhdGFUID0gZGF0YS5kYXRhW2ldO1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUuYWN0aXZlICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmouYmcuYWN0aXZlICAgID0gaSUyO1xyXG4gICAgICAgICAgICAgICAgb2JqLnRpbWUuc3RyaW5nICA9IGhlbHBlci5nZXRTdHJpbmdEYXRlQnlUaW1lKGRhdGFULnRpbWUpO1xyXG4gICAgICAgICAgICAgICAgb2JqLnBoaWVuLnN0cmluZyA9IGRhdGFULmlkO1xyXG4gICAgICAgICAgICAgICAgb2JqLmJ1b2Muc3RyaW5nICA9IGRhdGFULmJ1b2M7XHJcbiAgICAgICAgICAgICAgICBvYmouY3VvYy5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQuY3VvYyk7XHJcbiAgICAgICAgICAgICAgICBvYmoud2luLnN0cmluZyAgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQuYmV0KTtcclxuICAgICAgICAgICAgICAgIG9iai5jYXJkMS5zcHJpdGVGcmFtZSA9IGNjLlJlZFQudXRpbC5jYXJkLmdldENhcmQoZGF0YVQuY2FyZDEuY2FyZCwgZGF0YVQuY2FyZDEudHlwZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoISFkYXRhVC5jaG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLnNlbGVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhVC5jaG9uID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLnNlbGVjdC5zY2FsZVkgID0gLTE7IC8vIENo4buNbiBVcFxyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouc2VsZWN0LnNjYWxlWSA9IDE7ICAvLyBDaOG7jW4gRG93blxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5zZWxlY3QuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkYXRhVC5jYXJkMiAmJiB2b2lkIDAgIT09IGRhdGFULmNhcmQyLmNhcmQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY2FyZDIubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai5jYXJkMi5zcHJpdGVGcmFtZSA9IGNjLlJlZFQudXRpbC5jYXJkLmdldENhcmQoZGF0YVQuY2FyZDIuY2FyZCwgZGF0YVQuY2FyZDIudHlwZSk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBvYmouY2FyZDIubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==