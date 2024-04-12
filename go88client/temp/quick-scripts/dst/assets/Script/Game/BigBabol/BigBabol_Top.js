
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BigBabol/BigBabol_Top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d3a8Q9MRxEvadcBkolfb4n', 'BigBabol_Top');
// Script/Game/BigBabol/BigBabol_Top.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        item: cc.Prefab,
        content: cc.Node,
        red: true
    },
    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        cc.RedT.send({ g: { big_babol: { top: this.red } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        data.forEach(function (obj, index) {
            var item = cc.instantiate(this.item);
            item = item.getComponent('VQRed_history_item');
            item.time.string = helper.getStringDateByTime(obj.time);
            item.phien.string = obj.name;
            item.cuoc.string = helper.numberWithCommas(obj.bet);
            item.line.string = helper.numberWithCommas(obj.win);
            item.win.string = obj.type == 9 ? "NỔ HŨ" : "THẮNG LỚN";
            item.node.children[0].active = !(index & 1);
            this.content.addChild(item.node);
        }.bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCaWdCYWJvbC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmlnQmFib2wvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJpZ0JhYm9sXFxCaWdCYWJvbF9Ub3AuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW0iLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInJlZCIsIm9uRW5hYmxlIiwiZ2V0X2RhdGEiLCJSZWRUIiwic2VuZCIsImciLCJiaWdfYmFib2wiLCJ0b3AiLCJvbkRhdGEiLCJkYXRhIiwiZGVzdHJveUFsbENoaWxkcmVuIiwiZm9yRWFjaCIsIm9iaiIsImluZGV4IiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJ0aW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInBoaWVuIiwibmFtZSIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0IiwibGluZSIsIndpbiIsInR5cGUiLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJhZGRDaGlsZCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1JDLGNBQVVMLEdBQUdNLE1BREw7QUFFUkMsaUJBQVVQLEdBQUdRLElBRkw7QUFHUkMsYUFBVTtBQUhGLEtBRlA7QUFPTEMsY0FBVSxvQkFBVztBQUNqQixhQUFLQyxRQUFMO0FBQ0gsS0FUSTtBQVVMQSxjQUFVLG9CQUFVO0FBQ2hCWCxXQUFHWSxJQUFILENBQVFDLElBQVIsQ0FBYSxFQUFDQyxHQUFFLEVBQUNDLFdBQVUsRUFBQ0MsS0FBSSxLQUFLUCxHQUFWLEVBQVgsRUFBSCxFQUFiO0FBQ0gsS0FaSTtBQWFMUSxZQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDbEIsYUFBS1gsT0FBTCxDQUFhWSxrQkFBYjtBQUNBRCxhQUFLRSxPQUFMLENBQWEsVUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQW9CO0FBQzdCLGdCQUFJakIsT0FBT0wsR0FBR3VCLFdBQUgsQ0FBZSxLQUFLbEIsSUFBcEIsQ0FBWDtBQUNBQSxtQkFBT0EsS0FBS21CLFlBQUwsQ0FBa0Isb0JBQWxCLENBQVA7QUFDQW5CLGlCQUFLb0IsSUFBTCxDQUFVQyxNQUFWLEdBQW9CNUIsT0FBTzZCLG1CQUFQLENBQTJCTixJQUFJSSxJQUEvQixDQUFwQjtBQUNBcEIsaUJBQUt1QixLQUFMLENBQVdGLE1BQVgsR0FBb0JMLElBQUlRLElBQXhCO0FBQ0F4QixpQkFBS3lCLElBQUwsQ0FBVUosTUFBVixHQUFvQjVCLE9BQU9pQyxnQkFBUCxDQUF3QlYsSUFBSVcsR0FBNUIsQ0FBcEI7QUFDQTNCLGlCQUFLNEIsSUFBTCxDQUFVUCxNQUFWLEdBQW9CNUIsT0FBT2lDLGdCQUFQLENBQXdCVixJQUFJYSxHQUE1QixDQUFwQjtBQUNBN0IsaUJBQUs2QixHQUFMLENBQVNSLE1BQVQsR0FBb0JMLElBQUljLElBQUosSUFBWSxDQUFaLEdBQWdCLE9BQWhCLEdBQTBCLFdBQTlDO0FBQ0E5QixpQkFBSytCLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBa0MsRUFBRWhCLFFBQU0sQ0FBUixDQUFsQztBQUNBLGlCQUFLZixPQUFMLENBQWFnQyxRQUFiLENBQXNCbEMsS0FBSytCLElBQTNCO0FBQ0gsU0FWWSxDQVVYSSxJQVZXLENBVU4sSUFWTSxDQUFiO0FBV0g7QUExQkksQ0FBVCIsImZpbGUiOiJCaWdCYWJvbF9Ub3AuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJpZ0JhYm9sIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtOiAgICAgY2MuUHJlZmFiLFxyXG4gICAgICAgIGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG4gICAgICAgIHJlZDogICAgICB0cnVlLFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldF9kYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0X2RhdGE6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuUmVkVC5zZW5kKHtnOntiaWdfYmFib2w6e3RvcDp0aGlzLnJlZH19fSk7XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtLmdldENvbXBvbmVudCgnVlFSZWRfaGlzdG9yeV9pdGVtJyk7XHJcbiAgICAgICAgICAgIGl0ZW0udGltZS5zdHJpbmcgID0gaGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUob2JqLnRpbWUpO1xyXG4gICAgICAgICAgICBpdGVtLnBoaWVuLnN0cmluZyA9IG9iai5uYW1lO1xyXG4gICAgICAgICAgICBpdGVtLmN1b2Muc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai5iZXQpO1xyXG4gICAgICAgICAgICBpdGVtLmxpbmUuc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai53aW4pO1xyXG4gICAgICAgICAgICBpdGVtLndpbi5zdHJpbmcgICA9IG9iai50eXBlID09IDkgPyBcIk7hu5QgSMWoXCIgOiBcIlRI4bquTkcgTOG7mk5cIjtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSAgICA9ICEoaW5kZXgmMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19