
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/Top/VQRed_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f06e8UHmbpN76XdRUrDkJvM', 'VQRed_top');
// Script/Game/VuongQuocRed/Top/VQRed_top.js

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
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { vq_red: { top: this.red } } });
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
            item.win.string = obj.type === 2 ? "Nổ Hũ" : "Thắng lớn";
            item.node.children[0].active = index % 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxUb3AvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXFRvcC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxUb3BcXFZRUmVkX3RvcC5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXRlbSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwicmVkIiwib25FbmFibGUiLCJnZXRfZGF0YSIsInBhZ2UiLCJSZWRUIiwic2VuZCIsImciLCJ2cV9yZWQiLCJ0b3AiLCJvbkRhdGEiLCJkYXRhIiwiZGVzdHJveUFsbENoaWxkcmVuIiwiZm9yRWFjaCIsIm9iaiIsImluZGV4IiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJ0aW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInBoaWVuIiwibmFtZSIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0IiwibGluZSIsIndpbiIsInR5cGUiLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJhZGRDaGlsZCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1JDLGNBQVVMLEdBQUdNLE1BREw7QUFFUkMsaUJBQVVQLEdBQUdRLElBRkw7QUFHUkMsYUFBVTtBQUhGLEtBRlA7QUFPTEMsY0FBVSxvQkFBVztBQUNqQixhQUFLQyxRQUFMO0FBQ0gsS0FUSTtBQVVMQSxjQUFVLG9CQUFrQjtBQUFBLFlBQVRDLElBQVMsdUVBQUYsQ0FBRTs7QUFDeEJaLFdBQUdhLElBQUgsQ0FBUUMsSUFBUixDQUFhLEVBQUNDLEdBQUUsRUFBQ0MsUUFBTyxFQUFDQyxLQUFJLEtBQUtSLEdBQVYsRUFBUixFQUFILEVBQWI7QUFDSCxLQVpJO0FBYUxTLFlBQVEsZ0JBQVNDLElBQVQsRUFBYztBQUNsQixhQUFLWixPQUFMLENBQWFhLGtCQUFiO0FBQ0FELGFBQUtFLE9BQUwsQ0FBYSxVQUFTQyxHQUFULEVBQWNDLEtBQWQsRUFBb0I7QUFDN0IsZ0JBQUlsQixPQUFPTCxHQUFHd0IsV0FBSCxDQUFlLEtBQUtuQixJQUFwQixDQUFYO0FBQ0FBLG1CQUFPQSxLQUFLb0IsWUFBTCxDQUFrQixvQkFBbEIsQ0FBUDtBQUNBcEIsaUJBQUtxQixJQUFMLENBQVVDLE1BQVYsR0FBb0I3QixPQUFPOEIsbUJBQVAsQ0FBMkJOLElBQUlJLElBQS9CLENBQXBCO0FBQ0FyQixpQkFBS3dCLEtBQUwsQ0FBV0YsTUFBWCxHQUFvQkwsSUFBSVEsSUFBeEI7QUFDQXpCLGlCQUFLMEIsSUFBTCxDQUFVSixNQUFWLEdBQW9CN0IsT0FBT2tDLGdCQUFQLENBQXdCVixJQUFJVyxHQUE1QixDQUFwQjtBQUNBNUIsaUJBQUs2QixJQUFMLENBQVVQLE1BQVYsR0FBb0I3QixPQUFPa0MsZ0JBQVAsQ0FBd0JWLElBQUlhLEdBQTVCLENBQXBCO0FBQ0E5QixpQkFBSzhCLEdBQUwsQ0FBU1IsTUFBVCxHQUFvQkwsSUFBSWMsSUFBSixLQUFhLENBQWIsR0FBaUIsT0FBakIsR0FBMkIsV0FBL0M7QUFDQS9CLGlCQUFLZ0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxNQUF0QixHQUErQmhCLFFBQU0sQ0FBckM7QUFDQSxpQkFBS2hCLE9BQUwsQ0FBYWlDLFFBQWIsQ0FBc0JuQyxLQUFLZ0MsSUFBM0I7QUFDSCxTQVZZLENBVVhJLElBVlcsQ0FVTixJQVZNLENBQWI7QUFXSDtBQTFCSSxDQUFUIiwiZmlsZSI6IlZRUmVkX3RvcC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFZ1b25nUXVvY1JlZFxcVG9wIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtOiAgICAgY2MuUHJlZmFiLFxyXG4gICAgICAgIGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG4gICAgICAgIHJlZDogICAgICB0cnVlLFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldF9kYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2c6e3ZxX3JlZDp7dG9wOnRoaXMucmVkfX19KTtcclxuICAgIH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdWUVJlZF9oaXN0b3J5X2l0ZW0nKTtcclxuICAgICAgICAgICAgaXRlbS50aW1lLnN0cmluZyAgPSBoZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShvYmoudGltZSk7XHJcbiAgICAgICAgICAgIGl0ZW0ucGhpZW4uc3RyaW5nID0gb2JqLm5hbWU7XHJcbiAgICAgICAgICAgIGl0ZW0uY3VvYy5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMob2JqLmJldCk7XHJcbiAgICAgICAgICAgIGl0ZW0ubGluZS5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMob2JqLndpbik7XHJcbiAgICAgICAgICAgIGl0ZW0ud2luLnN0cmluZyAgID0gb2JqLnR5cGUgPT09IDIgPyBcIk7hu5UgSMWpXCIgOiBcIlRo4bqvbmcgbOG7m25cIjtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGluZGV4JTI7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19