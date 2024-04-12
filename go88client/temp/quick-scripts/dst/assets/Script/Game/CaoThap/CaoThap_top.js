
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CaoThap/CaoThap_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ae1dSPK8VEcrHS1zJqrH8e', 'CaoThap_top');
// Script/Game/CaoThap/CaoThap_top.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        item: cc.Prefab,
        content: cc.Node,
        red: true
    },
    init: function init(obj) {
        this.RedT = obj;
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { caothap: { tops: this.red } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        data.forEach(function (obj, index) {
            var item = cc.instantiate(this.item);
            item = item.getComponent('VQRed_history_item');
            item.time.string = helper.getStringDateByTime(obj.time);
            item.phien.string = obj.name;
            item.cuoc.string = helper.numberWithCommas(obj.goc);
            item.line.string = helper.numberWithCommas(obj.bet);
            item.win.string = obj.a ? "NỔ HŨ" : "THẮNG LỚN";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwXFxDYW9UaGFwX3RvcC5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXRlbSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwicmVkIiwiaW5pdCIsIm9iaiIsIlJlZFQiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwicGFnZSIsInNlbmQiLCJnIiwiY2FvdGhhcCIsInRvcHMiLCJvbkRhdGEiLCJkYXRhIiwiZGVzdHJveUFsbENoaWxkcmVuIiwiZm9yRWFjaCIsImluZGV4IiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJ0aW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInBoaWVuIiwibmFtZSIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwiZ29jIiwibGluZSIsImJldCIsIndpbiIsImEiLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJhZGRDaGlsZCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1JDLGNBQVVMLEdBQUdNLE1BREw7QUFFUkMsaUJBQVVQLEdBQUdRLElBRkw7QUFHUkMsYUFBVTtBQUhGLEtBRlA7QUFPTEMsUUFQSyxnQkFPQUMsR0FQQSxFQU9JO0FBQ0wsYUFBS0MsSUFBTCxHQUFZRCxHQUFaO0FBQ0gsS0FUSTs7QUFVTEUsY0FBVSxvQkFBVztBQUNqQixhQUFLQyxRQUFMO0FBQ0gsS0FaSTtBQWFMQSxjQUFVLG9CQUFrQjtBQUFBLFlBQVRDLElBQVMsdUVBQUYsQ0FBRTs7QUFDeEJmLFdBQUdZLElBQUgsQ0FBUUksSUFBUixDQUFhLEVBQUNDLEdBQUUsRUFBQ0MsU0FBUSxFQUFDQyxNQUFLLEtBQUtWLEdBQVgsRUFBVCxFQUFILEVBQWI7QUFDSCxLQWZJO0FBZ0JMVyxZQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDbEIsYUFBS2QsT0FBTCxDQUFhZSxrQkFBYjtBQUNBRCxhQUFLRSxPQUFMLENBQWEsVUFBU1osR0FBVCxFQUFjYSxLQUFkLEVBQW9CO0FBQzdCLGdCQUFJbkIsT0FBT0wsR0FBR3lCLFdBQUgsQ0FBZSxLQUFLcEIsSUFBcEIsQ0FBWDtBQUNBQSxtQkFBT0EsS0FBS3FCLFlBQUwsQ0FBa0Isb0JBQWxCLENBQVA7QUFDQXJCLGlCQUFLc0IsSUFBTCxDQUFVQyxNQUFWLEdBQW9COUIsT0FBTytCLG1CQUFQLENBQTJCbEIsSUFBSWdCLElBQS9CLENBQXBCO0FBQ0F0QixpQkFBS3lCLEtBQUwsQ0FBV0YsTUFBWCxHQUFvQmpCLElBQUlvQixJQUF4QjtBQUNBMUIsaUJBQUsyQixJQUFMLENBQVVKLE1BQVYsR0FBb0I5QixPQUFPbUMsZ0JBQVAsQ0FBd0J0QixJQUFJdUIsR0FBNUIsQ0FBcEI7QUFDQTdCLGlCQUFLOEIsSUFBTCxDQUFVUCxNQUFWLEdBQW9COUIsT0FBT21DLGdCQUFQLENBQXdCdEIsSUFBSXlCLEdBQTVCLENBQXBCO0FBQ0EvQixpQkFBS2dDLEdBQUwsQ0FBU1QsTUFBVCxHQUFvQmpCLElBQUkyQixDQUFKLEdBQVEsT0FBUixHQUFrQixXQUF0QztBQUNBakMsaUJBQUtrQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEVBQUVqQixRQUFNLENBQVIsQ0FBL0I7QUFDQSxpQkFBS2pCLE9BQUwsQ0FBYW1DLFFBQWIsQ0FBc0JyQyxLQUFLa0MsSUFBM0I7QUFDSCxTQVZZLENBVVhJLElBVlcsQ0FVTixJQVZNLENBQWI7QUFXSDtBQTdCSSxDQUFUIiwiZmlsZSI6IkNhb1RoYXBfdG9wLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW9UaGFwIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtOiAgICAgY2MuUHJlZmFiLFxyXG4gICAgICAgIGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG4gICAgICAgIHJlZDogICAgICB0cnVlLFxyXG4gICAgfSxcclxuICAgIGluaXQob2JqKXtcclxuICAgICAgICB0aGlzLlJlZFQgPSBvYmo7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0X2RhdGEoKTtcclxuICAgIH0sXHJcbiAgICBnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG4gICAgICAgIGNjLlJlZFQuc2VuZCh7Zzp7Y2FvdGhhcDp7dG9wczp0aGlzLnJlZH19fSk7XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtLmdldENvbXBvbmVudCgnVlFSZWRfaGlzdG9yeV9pdGVtJyk7XHJcbiAgICAgICAgICAgIGl0ZW0udGltZS5zdHJpbmcgID0gaGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUob2JqLnRpbWUpO1xyXG4gICAgICAgICAgICBpdGVtLnBoaWVuLnN0cmluZyA9IG9iai5uYW1lO1xyXG4gICAgICAgICAgICBpdGVtLmN1b2Muc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai5nb2MpO1xyXG4gICAgICAgICAgICBpdGVtLmxpbmUuc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai5iZXQpO1xyXG4gICAgICAgICAgICBpdGVtLndpbi5zdHJpbmcgICA9IG9iai5hID8gXCJO4buUIEjFqFwiIDogXCJUSOG6rk5HIEzhu5pOXCI7XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSAhKGluZGV4JjEpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==