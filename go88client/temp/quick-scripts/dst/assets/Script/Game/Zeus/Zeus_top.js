
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Zeus/Zeus_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '16e083VlxRHlYpusln5jRrS', 'Zeus_top');
// Script/Game/Zeus/Zeus_top.js

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

        cc.RedT.send({ g: { zeus: { top: this.red } } });
    },
    onData: function onData(data) {
        this.content.removeAllChildren();
        var self = this;
        Promise.all(data.map(function (obj, index) {
            var item = cc.instantiate(self.item);
            var itemComponent = item.getComponent('VQRed_history_item');
            itemComponent.time.string = helper.getStringDateByTime(obj.time);
            itemComponent.phien.string = obj.name;
            itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
            itemComponent.line.string = helper.numberWithCommas(obj.win);
            itemComponent.win.string = obj.type == 2 ? "Nổ Hũ" : "Thắng lớn";
            item.children[0].active = !(index & 1);
            self.content.addChild(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxaZXVzX3RvcC5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXRlbSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwicmVkIiwib25FbmFibGUiLCJnZXRfZGF0YSIsInBhZ2UiLCJSZWRUIiwic2VuZCIsImciLCJ6ZXVzIiwidG9wIiwib25EYXRhIiwiZGF0YSIsInJlbW92ZUFsbENoaWxkcmVuIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJvYmoiLCJpbmRleCIsImluc3RhbnRpYXRlIiwiaXRlbUNvbXBvbmVudCIsImdldENvbXBvbmVudCIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwicGhpZW4iLCJuYW1lIiwiY3VvYyIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJsaW5lIiwid2luIiwidHlwZSIsImNoaWxkcmVuIiwiYWN0aXZlIiwiYWRkQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1JDLGNBQVVMLEdBQUdNLE1BREw7QUFFUkMsaUJBQVVQLEdBQUdRLElBRkw7QUFHUkMsYUFBVTtBQUhGLEtBRlA7QUFPTEMsY0FBVSxvQkFBVztBQUNqQixhQUFLQyxRQUFMO0FBQ0gsS0FUSTtBQVVMQSxjQUFVLG9CQUFrQjtBQUFBLFlBQVRDLElBQVMsdUVBQUYsQ0FBRTs7QUFDeEJaLFdBQUdhLElBQUgsQ0FBUUMsSUFBUixDQUFhLEVBQUNDLEdBQUUsRUFBQ0MsTUFBSyxFQUFDQyxLQUFLLEtBQUtSLEdBQVgsRUFBTixFQUFILEVBQWI7QUFDSCxLQVpJO0FBYUxTLFlBQVEsZ0JBQVNDLElBQVQsRUFBYztBQUNsQixhQUFLWixPQUFMLENBQWFhLGlCQUFiO0FBQ0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVlKLEtBQUtLLEdBQUwsQ0FBUyxVQUFTQyxHQUFULEVBQWNDLEtBQWQsRUFBb0I7QUFDckMsZ0JBQUlyQixPQUFPTCxHQUFHMkIsV0FBSCxDQUFlTixLQUFLaEIsSUFBcEIsQ0FBWDtBQUNBLGdCQUFJdUIsZ0JBQWdCdkIsS0FBS3dCLFlBQUwsQ0FBa0Isb0JBQWxCLENBQXBCO0FBQ0FELDBCQUFjRSxJQUFkLENBQW1CQyxNQUFuQixHQUE2QmpDLE9BQU9rQyxtQkFBUCxDQUEyQlAsSUFBSUssSUFBL0IsQ0FBN0I7QUFDQUYsMEJBQWNLLEtBQWQsQ0FBb0JGLE1BQXBCLEdBQTZCTixJQUFJUyxJQUFqQztBQUNBTiwwQkFBY08sSUFBZCxDQUFtQkosTUFBbkIsR0FBNkJqQyxPQUFPc0MsZ0JBQVAsQ0FBd0JYLElBQUlZLEdBQTVCLENBQTdCO0FBQ0FULDBCQUFjVSxJQUFkLENBQW1CUCxNQUFuQixHQUE2QmpDLE9BQU9zQyxnQkFBUCxDQUF3QlgsSUFBSWMsR0FBNUIsQ0FBN0I7QUFDQVgsMEJBQWNXLEdBQWQsQ0FBa0JSLE1BQWxCLEdBQTZCTixJQUFJZSxJQUFKLElBQVksQ0FBWixHQUFnQixPQUFoQixHQUEwQixXQUF2RDtBQUNBbkMsaUJBQUtvQyxRQUFMLENBQWMsQ0FBZCxFQUFpQkMsTUFBakIsR0FBNkIsRUFBRWhCLFFBQU0sQ0FBUixDQUE3QjtBQUNBTCxpQkFBS2QsT0FBTCxDQUFhb0MsUUFBYixDQUFzQnRDLElBQXRCO0FBQ0gsU0FWVyxDQUFaO0FBV0g7QUEzQkksQ0FBVCIsImZpbGUiOiJaZXVzX3RvcC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1cyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXRlbTogICAgIGNjLlByZWZhYixcclxuICAgICAgICBjb250ZW50OiAgY2MuTm9kZSxcclxuICAgICAgICByZWQ6ICAgICAgdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nZXRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcbiAgICAgICAgY2MuUmVkVC5zZW5kKHtnOnt6ZXVzOnt0b3A6IHRoaXMucmVkfX19KTtcclxuICAgIH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBQcm9taXNlLmFsbChkYXRhLm1hcChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZShzZWxmLml0ZW0pO1xyXG4gICAgICAgICAgICB2YXIgaXRlbUNvbXBvbmVudCA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdWUVJlZF9oaXN0b3J5X2l0ZW0nKTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC50aW1lLnN0cmluZyAgPSBoZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShvYmoudGltZSk7XHJcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQucGhpZW4uc3RyaW5nID0gb2JqLm5hbWU7XHJcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQuY3VvYy5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMob2JqLmJldCk7XHJcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQubGluZS5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMob2JqLndpbik7XHJcbiAgICAgICAgICAgIGl0ZW1Db21wb25lbnQud2luLnN0cmluZyAgID0gb2JqLnR5cGUgPT0gMiA/IFwiTuG7lSBIxalcIiA6IFwiVGjhuq9uZyBs4bubblwiO1xyXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzBdLmFjdGl2ZSAgICA9ICEoaW5kZXgmMSk7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICB9KSlcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=