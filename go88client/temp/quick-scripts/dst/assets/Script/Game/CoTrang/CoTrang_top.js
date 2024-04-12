
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CoTrang/CoTrang_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c630b0qZgVLe76291zEptTX', 'CoTrang_top');
// Script/Game/CoTrang/CoTrang_top.js

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

        cc.RedT.send({ g: { longlan: { top: this.red } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        var self = this;
        Promise.all(data.map(function (obj, index) {
            var item = cc.instantiate(self.item);
            var itemComponent = item.getComponent('VQRed_history_item');
            itemComponent.time.string = helper.getStringDateByTime(obj.time);
            itemComponent.phien.string = obj.name;
            itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
            itemComponent.line.string = helper.numberWithCommas(obj.win);
            itemComponent.win.string = obj.type === 2 ? 'Nổ Hũ' : 'Thắng lớn';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nXFxDb1RyYW5nX3RvcC5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaXRlbSIsIlByZWZhYiIsImNvbnRlbnQiLCJOb2RlIiwicmVkIiwib25FbmFibGUiLCJnZXRfZGF0YSIsInBhZ2UiLCJSZWRUIiwic2VuZCIsImciLCJsb25nbGFuIiwidG9wIiwib25EYXRhIiwiZGF0YSIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwib2JqIiwiaW5kZXgiLCJpbnN0YW50aWF0ZSIsIml0ZW1Db21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJ0aW1lIiwic3RyaW5nIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInBoaWVuIiwibmFtZSIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0IiwibGluZSIsIndpbiIsInR5cGUiLCJjaGlsZHJlbiIsImFjdGl2ZSIsImFkZENoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxnQkFBWTtBQUNSQyxjQUFVTCxHQUFHTSxNQURMO0FBRVJDLGlCQUFVUCxHQUFHUSxJQUZMO0FBR1JDLGFBQVU7QUFIRixLQUZQO0FBT0xDLGNBQVUsb0JBQVc7QUFDakIsYUFBS0MsUUFBTDtBQUNILEtBVEk7QUFVTEEsY0FBVSxvQkFBa0I7QUFBQSxZQUFUQyxJQUFTLHVFQUFGLENBQUU7O0FBQ3hCWixXQUFHYSxJQUFILENBQVFDLElBQVIsQ0FBYSxFQUFDQyxHQUFFLEVBQUNDLFNBQVEsRUFBQ0MsS0FBSyxLQUFLUixHQUFYLEVBQVQsRUFBSCxFQUFiO0FBQ0gsS0FaSTtBQWFMUyxZQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDbEIsYUFBS1osT0FBTCxDQUFhYSxrQkFBYjtBQUNBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSixLQUFLSyxHQUFMLENBQVMsVUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQW9CO0FBQ3JDLGdCQUFJckIsT0FBT0wsR0FBRzJCLFdBQUgsQ0FBZU4sS0FBS2hCLElBQXBCLENBQVg7QUFDQSxnQkFBSXVCLGdCQUFnQnZCLEtBQUt3QixZQUFMLENBQWtCLG9CQUFsQixDQUFwQjtBQUNBRCwwQkFBY0UsSUFBZCxDQUFtQkMsTUFBbkIsR0FBNkJqQyxPQUFPa0MsbUJBQVAsQ0FBMkJQLElBQUlLLElBQS9CLENBQTdCO0FBQ0FGLDBCQUFjSyxLQUFkLENBQW9CRixNQUFwQixHQUE2Qk4sSUFBSVMsSUFBakM7QUFDQU4sMEJBQWNPLElBQWQsQ0FBbUJKLE1BQW5CLEdBQTZCakMsT0FBT3NDLGdCQUFQLENBQXdCWCxJQUFJWSxHQUE1QixDQUE3QjtBQUNBVCwwQkFBY1UsSUFBZCxDQUFtQlAsTUFBbkIsR0FBNkJqQyxPQUFPc0MsZ0JBQVAsQ0FBd0JYLElBQUljLEdBQTVCLENBQTdCO0FBQ0FYLDBCQUFjVyxHQUFkLENBQWtCUixNQUFsQixHQUE2Qk4sSUFBSWUsSUFBSixLQUFhLENBQWIsR0FBaUIsT0FBakIsR0FBMkIsV0FBeEQ7QUFDQW5DLGlCQUFLb0MsUUFBTCxDQUFjLENBQWQsRUFBaUJDLE1BQWpCLEdBQTZCLEVBQUVoQixRQUFNLENBQVIsQ0FBN0I7QUFDQUwsaUJBQUtkLE9BQUwsQ0FBYW9DLFFBQWIsQ0FBc0J0QyxJQUF0QjtBQUNILFNBVlcsQ0FBWjtBQVdIO0FBM0JJLENBQVQiLCJmaWxlIjoiQ29UcmFuZ190b3AuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENvVHJhbmciLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGl0ZW06ICAgICBjYy5QcmVmYWIsXHJcbiAgICAgICAgY29udGVudDogIGNjLk5vZGUsXHJcbiAgICAgICAgcmVkOiAgICAgIHRydWUsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0X2RhdGEoKTtcclxuICAgIH0sXHJcbiAgICBnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG4gICAgICAgIGNjLlJlZFQuc2VuZCh7Zzp7bG9uZ2xhbjp7dG9wOiB0aGlzLnJlZH19fSk7XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB0aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHNlbGYuaXRlbSk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtQ29tcG9uZW50ID0gaXRlbS5nZXRDb21wb25lbnQoJ1ZRUmVkX2hpc3RvcnlfaXRlbScpO1xyXG4gICAgICAgICAgICBpdGVtQ29tcG9uZW50LnRpbWUuc3RyaW5nICA9IGhlbHBlci5nZXRTdHJpbmdEYXRlQnlUaW1lKG9iai50aW1lKTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC5waGllbi5zdHJpbmcgPSBvYmoubmFtZTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC5jdW9jLnN0cmluZyAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhvYmouYmV0KTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC5saW5lLnN0cmluZyAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhvYmoud2luKTtcclxuICAgICAgICAgICAgaXRlbUNvbXBvbmVudC53aW4uc3RyaW5nICAgPSBvYmoudHlwZSA9PT0gMiA/ICdO4buVIEjFqScgOiAnVGjhuq9uZyBs4bubbic7XHJcbiAgICAgICAgICAgIGl0ZW0uY2hpbGRyZW5bMF0uYWN0aXZlICAgID0gIShpbmRleCYxKTtcclxuICAgICAgICAgICAgc2VsZi5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIH0pKVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==