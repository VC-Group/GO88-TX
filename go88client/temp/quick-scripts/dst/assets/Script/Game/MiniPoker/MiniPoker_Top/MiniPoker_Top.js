
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/MiniPoker/MiniPoker_Top/MiniPoker_Top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f83d50BGs1JUopU47jiZRpB', 'MiniPoker_Top');
// Script/Game/MiniPoker/MiniPoker_Top/MiniPoker_Top.js

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
        cc.RedT.send({ g: { mini_poker: { top: this.red } } });
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
            item.win.string = obj.type === 2 ? "NỔ HŨ" : "THẮNG LỚN";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaVBva2VyXFxNaW5pUG9rZXJfVG9wLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaVBva2VyXFxNaW5pUG9rZXJfVG9wL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxNaW5pUG9rZXJcXE1pbmlQb2tlcl9Ub3BcXE1pbmlQb2tlcl9Ub3AuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW0iLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInJlZCIsIm9uRW5hYmxlIiwiZ2V0X2RhdGEiLCJSZWRUIiwic2VuZCIsImciLCJtaW5pX3Bva2VyIiwidG9wIiwib25EYXRhIiwiZGF0YSIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImZvckVhY2giLCJvYmoiLCJpbmRleCIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwidGltZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJwaGllbiIsIm5hbWUiLCJjdW9jIiwibnVtYmVyV2l0aENvbW1hcyIsImJldCIsImxpbmUiLCJ3aW4iLCJ0eXBlIiwibm9kZSIsImNoaWxkcmVuIiwiYWN0aXZlIiwiYWRkQ2hpbGQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxnQkFBWTtBQUNSQyxjQUFVTCxHQUFHTSxNQURMO0FBRVJDLGlCQUFVUCxHQUFHUSxJQUZMO0FBR1JDLGFBQVU7QUFIRixLQUZQO0FBT0xDLGNBQVUsb0JBQVc7QUFDakIsYUFBS0MsUUFBTDtBQUNILEtBVEk7QUFVTEEsY0FBVSxvQkFBVTtBQUNoQlgsV0FBR1ksSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxZQUFXLEVBQUNDLEtBQUksS0FBS1AsR0FBVixFQUFaLEVBQUgsRUFBYjtBQUNILEtBWkk7QUFhTFEsWUFBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ2xCLGFBQUtYLE9BQUwsQ0FBYVksa0JBQWI7QUFDQUQsYUFBS0UsT0FBTCxDQUFhLFVBQVNDLEdBQVQsRUFBY0MsS0FBZCxFQUFvQjtBQUM3QixnQkFBSWpCLE9BQU9MLEdBQUd1QixXQUFILENBQWUsS0FBS2xCLElBQXBCLENBQVg7QUFDQUEsbUJBQU9BLEtBQUttQixZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0FuQixpQkFBS29CLElBQUwsQ0FBVUMsTUFBVixHQUFvQjVCLE9BQU82QixtQkFBUCxDQUEyQk4sSUFBSUksSUFBL0IsQ0FBcEI7QUFDQXBCLGlCQUFLdUIsS0FBTCxDQUFXRixNQUFYLEdBQW9CTCxJQUFJUSxJQUF4QjtBQUNBeEIsaUJBQUt5QixJQUFMLENBQVVKLE1BQVYsR0FBb0I1QixPQUFPaUMsZ0JBQVAsQ0FBd0JWLElBQUlXLEdBQTVCLENBQXBCO0FBQ0EzQixpQkFBSzRCLElBQUwsQ0FBVVAsTUFBVixHQUFvQjVCLE9BQU9pQyxnQkFBUCxDQUF3QlYsSUFBSWEsR0FBNUIsQ0FBcEI7QUFDQTdCLGlCQUFLNkIsR0FBTCxDQUFTUixNQUFULEdBQW9CTCxJQUFJYyxJQUFKLEtBQWEsQ0FBYixHQUFpQixPQUFqQixHQUEyQixXQUEvQztBQUNBOUIsaUJBQUsrQixJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQWtDLEVBQUVoQixRQUFNLENBQVIsQ0FBbEM7QUFDQSxpQkFBS2YsT0FBTCxDQUFhZ0MsUUFBYixDQUFzQmxDLEtBQUsrQixJQUEzQjtBQUNILFNBVlksQ0FVWEksSUFWVyxDQVVOLElBVk0sQ0FBYjtBQVdIO0FBMUJJLENBQVQiLCJmaWxlIjoiTWluaVBva2VyX1RvcC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1pbmlQb2tlclxcTWluaVBva2VyX1RvcCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXRlbTogICAgIGNjLlByZWZhYixcclxuICAgICAgICBjb250ZW50OiAgY2MuTm9kZSxcclxuICAgICAgICByZWQ6ICAgICAgdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nZXRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLlJlZFQuc2VuZCh7Zzp7bWluaV9wb2tlcjp7dG9wOnRoaXMucmVkfX19KTtcclxuICAgIH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdWUVJlZF9oaXN0b3J5X2l0ZW0nKTtcclxuICAgICAgICAgICAgaXRlbS50aW1lLnN0cmluZyAgPSBoZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShvYmoudGltZSk7XHJcbiAgICAgICAgICAgIGl0ZW0ucGhpZW4uc3RyaW5nID0gb2JqLm5hbWU7XHJcbiAgICAgICAgICAgIGl0ZW0uY3VvYy5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMob2JqLmJldCk7XHJcbiAgICAgICAgICAgIGl0ZW0ubGluZS5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMob2JqLndpbik7XHJcbiAgICAgICAgICAgIGl0ZW0ud2luLnN0cmluZyAgID0gb2JqLnR5cGUgPT09IDIgPyBcIk7hu5QgSMWoXCIgOiBcIlRI4bquTkcgTOG7mk5cIjtcclxuICAgICAgICAgICAgaXRlbS5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSAgICA9ICEoaW5kZXgmMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19