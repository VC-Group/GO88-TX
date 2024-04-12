
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Candy/Candy_top/Candy_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9972eRTCvJEwony+DM8Ery0', 'Candy_top');
// Script/Game/Candy/Candy_top/Candy_top.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        item: cc.Prefab,
        content: cc.Node
    },
    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { candy: { top: true } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        data.forEach(function (obj, index) {
            var item = cc.instantiate(this.item);
            var itemComponent = item.getComponent('VQRed_history_item');
            itemComponent.time.string = helper.getStringDateByTime(obj.time);
            itemComponent.phien.string = obj.name;
            itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
            itemComponent.line.string = helper.numberWithCommas(obj.win);
            itemComponent.win.string = obj.type == 2 ? "Nổ Hũ" : "Thắng lớn";
            item.children[0].active = !(index & 1);
            this.content.addChild(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X3RvcC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhbmR5XFxDYW5keV90b3AvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhbmR5XFxDYW5keV90b3BcXENhbmR5X3RvcC5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXRlbSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwib25FbmFibGUiLCJnZXRfZGF0YSIsInBhZ2UiLCJSZWRUIiwic2VuZCIsImciLCJjYW5keSIsInRvcCIsIm9uRGF0YSIsImRhdGEiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJmb3JFYWNoIiwib2JqIiwiaW5kZXgiLCJpbnN0YW50aWF0ZSIsIml0ZW1Db21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJ0aW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInBoaWVuIiwibmFtZSIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0IiwibGluZSIsIndpbiIsInR5cGUiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImFkZENoaWxkIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7QUFFTEMsZ0JBQVk7QUFDUkMsY0FBVUwsR0FBR00sTUFETDtBQUVSQyxpQkFBVVAsR0FBR1E7QUFGTCxLQUZQO0FBTUxDLGNBQVUsb0JBQVc7QUFDakIsYUFBS0MsUUFBTDtBQUNILEtBUkk7QUFTTEEsY0FBVSxvQkFBa0I7QUFBQSxZQUFUQyxJQUFTLHVFQUFGLENBQUU7O0FBQ3hCWCxXQUFHWSxJQUFILENBQVFDLElBQVIsQ0FBYSxFQUFDQyxHQUFFLEVBQUNDLE9BQU0sRUFBQ0MsS0FBSSxJQUFMLEVBQVAsRUFBSCxFQUFiO0FBQ0gsS0FYSTtBQVlMQyxZQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDbEIsYUFBS1gsT0FBTCxDQUFhWSxrQkFBYjtBQUNBRCxhQUFLRSxPQUFMLENBQWEsVUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQW9CO0FBQzdCLGdCQUFJakIsT0FBT0wsR0FBR3VCLFdBQUgsQ0FBZSxLQUFLbEIsSUFBcEIsQ0FBWDtBQUNBLGdCQUFJbUIsZ0JBQWdCbkIsS0FBS29CLFlBQUwsQ0FBa0Isb0JBQWxCLENBQXBCO0FBQ0FELDBCQUFjRSxJQUFkLENBQW1CQyxNQUFuQixHQUE2QjdCLE9BQU84QixtQkFBUCxDQUEyQlAsSUFBSUssSUFBL0IsQ0FBN0I7QUFDQUYsMEJBQWNLLEtBQWQsQ0FBb0JGLE1BQXBCLEdBQTZCTixJQUFJUyxJQUFqQztBQUNBTiwwQkFBY08sSUFBZCxDQUFtQkosTUFBbkIsR0FBNkI3QixPQUFPa0MsZ0JBQVAsQ0FBd0JYLElBQUlZLEdBQTVCLENBQTdCO0FBQ0FULDBCQUFjVSxJQUFkLENBQW1CUCxNQUFuQixHQUE2QjdCLE9BQU9rQyxnQkFBUCxDQUF3QlgsSUFBSWMsR0FBNUIsQ0FBN0I7QUFDQVgsMEJBQWNXLEdBQWQsQ0FBa0JSLE1BQWxCLEdBQTZCTixJQUFJZSxJQUFKLElBQVksQ0FBWixHQUFnQixPQUFoQixHQUEwQixXQUF2RDtBQUNBL0IsaUJBQUtnQyxRQUFMLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsR0FBNkIsRUFBRWhCLFFBQU0sQ0FBUixDQUE3QjtBQUNBLGlCQUFLZixPQUFMLENBQWFnQyxRQUFiLENBQXNCbEMsSUFBdEI7QUFDSCxTQVZZLENBVVhtQyxJQVZXLENBVU4sSUFWTSxDQUFiO0FBV0g7QUF6QkksQ0FBVCIsImZpbGUiOiJDYW5keV90b3AuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcQ2FuZHlfdG9wIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBpdGVtOiAgICAgY2MuUHJlZmFiLFxyXG4gICAgICAgIGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldF9kYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2c6e2NhbmR5Ont0b3A6dHJ1ZX19fSk7XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtQ29tcG9uZW50ID0gaXRlbS5nZXRDb21wb25lbnQoJ1ZRUmVkX2hpc3RvcnlfaXRlbScpO1xyXG4gICAgICAgICAgICBpdGVtQ29tcG9uZW50LnRpbWUuc3RyaW5nICA9IGhlbHBlci5nZXRTdHJpbmdEYXRlQnlUaW1lKG9iai50aW1lKTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC5waGllbi5zdHJpbmcgPSBvYmoubmFtZTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC5jdW9jLnN0cmluZyAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhvYmouYmV0KTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC5saW5lLnN0cmluZyAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhvYmoud2luKTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC53aW4uc3RyaW5nICAgPSBvYmoudHlwZSA9PSAyID8gXCJO4buVIEjFqVwiIDogXCJUaOG6r25nIGzhu5tuXCI7XHJcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW5bMF0uYWN0aXZlICAgID0gIShpbmRleCYxKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19