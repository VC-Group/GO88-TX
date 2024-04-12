
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/AngryBirds/AngryBird_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35ab39NsE9AhaEAoAbzTFqx', 'AngryBird_top');
// Script/Game/AngryBirds/AngryBird_top.js

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

        cc.RedT.send({ g: { angrybird: { top: this.red } } });
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
            item.node.children[0].active = index & 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzXFxBbmdyeUJpcmRfdG9wLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtIiwiUHJlZmFiIiwiY29udGVudCIsIk5vZGUiLCJyZWQiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwicGFnZSIsIlJlZFQiLCJzZW5kIiwiZyIsImFuZ3J5YmlyZCIsInRvcCIsIm9uRGF0YSIsImRhdGEiLCJkZXN0cm95QWxsQ2hpbGRyZW4iLCJmb3JFYWNoIiwib2JqIiwiaW5kZXgiLCJpbnN0YW50aWF0ZSIsImdldENvbXBvbmVudCIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwicGhpZW4iLCJuYW1lIiwiY3VvYyIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJsaW5lIiwid2luIiwidHlwZSIsIm5vZGUiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImFkZENoaWxkIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7QUFFTEMsZ0JBQVk7QUFDUkMsY0FBVUwsR0FBR00sTUFETDtBQUVSQyxpQkFBVVAsR0FBR1EsSUFGTDtBQUdSQyxhQUFVO0FBSEYsS0FGUDtBQU9MQyxjQUFVLG9CQUFXO0FBQ2pCLGFBQUtDLFFBQUw7QUFDSCxLQVRJO0FBVUxBLGNBQVUsb0JBQWtCO0FBQUEsWUFBVEMsSUFBUyx1RUFBRixDQUFFOztBQUN4QlosV0FBR2EsSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxXQUFVLEVBQUNDLEtBQUksS0FBS1IsR0FBVixFQUFYLEVBQUgsRUFBYjtBQUNILEtBWkk7QUFhTFMsWUFBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ2xCLGFBQUtaLE9BQUwsQ0FBYWEsa0JBQWI7QUFDQUQsYUFBS0UsT0FBTCxDQUFhLFVBQVNDLEdBQVQsRUFBY0MsS0FBZCxFQUFvQjtBQUM3QixnQkFBSWxCLE9BQU9MLEdBQUd3QixXQUFILENBQWUsS0FBS25CLElBQXBCLENBQVg7QUFDQUEsbUJBQU9BLEtBQUtvQixZQUFMLENBQWtCLG9CQUFsQixDQUFQO0FBQ0FwQixpQkFBS3FCLElBQUwsQ0FBVUMsTUFBVixHQUFvQjdCLE9BQU84QixtQkFBUCxDQUEyQk4sSUFBSUksSUFBL0IsQ0FBcEI7QUFDQXJCLGlCQUFLd0IsS0FBTCxDQUFXRixNQUFYLEdBQW9CTCxJQUFJUSxJQUF4QjtBQUNBekIsaUJBQUswQixJQUFMLENBQVVKLE1BQVYsR0FBb0I3QixPQUFPa0MsZ0JBQVAsQ0FBd0JWLElBQUlXLEdBQTVCLENBQXBCO0FBQ0E1QixpQkFBSzZCLElBQUwsQ0FBVVAsTUFBVixHQUFvQjdCLE9BQU9rQyxnQkFBUCxDQUF3QlYsSUFBSWEsR0FBNUIsQ0FBcEI7QUFDQTlCLGlCQUFLOEIsR0FBTCxDQUFTUixNQUFULEdBQW9CTCxJQUFJYyxJQUFKLEtBQWEsQ0FBYixHQUFpQixPQUFqQixHQUEyQixXQUEvQztBQUNBL0IsaUJBQUtnQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQWdDaEIsUUFBTSxDQUF0QztBQUNBLGlCQUFLaEIsT0FBTCxDQUFhaUMsUUFBYixDQUFzQm5DLEtBQUtnQyxJQUEzQjtBQUNILFNBVlksQ0FVWEksSUFWVyxDQVVOLElBVk0sQ0FBYjtBQVdIO0FBMUJJLENBQVQiLCJmaWxlIjoiQW5ncnlCaXJkX3RvcC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQW5ncnlCaXJkcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXRlbTogICAgIGNjLlByZWZhYixcclxuICAgICAgICBjb250ZW50OiAgY2MuTm9kZSxcclxuICAgICAgICByZWQ6ICAgICAgdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nZXRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcbiAgICAgICAgY2MuUmVkVC5zZW5kKHtnOnthbmdyeWJpcmQ6e3RvcDp0aGlzLnJlZH19fSk7XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICBsZXQgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSk7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtLmdldENvbXBvbmVudCgnVlFSZWRfaGlzdG9yeV9pdGVtJyk7XHJcbiAgICAgICAgICAgIGl0ZW0udGltZS5zdHJpbmcgID0gaGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUob2JqLnRpbWUpO1xyXG4gICAgICAgICAgICBpdGVtLnBoaWVuLnN0cmluZyA9IG9iai5uYW1lO1xyXG4gICAgICAgICAgICBpdGVtLmN1b2Muc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai5iZXQpO1xyXG4gICAgICAgICAgICBpdGVtLmxpbmUuc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai53aW4pO1xyXG4gICAgICAgICAgICBpdGVtLndpbi5zdHJpbmcgICA9IG9iai50eXBlID09PSAyID8gXCJO4buUIEjFqFwiIDogXCJUSOG6rk5HIEzhu5pOXCI7XHJcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSAoaW5kZXgmMSk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19