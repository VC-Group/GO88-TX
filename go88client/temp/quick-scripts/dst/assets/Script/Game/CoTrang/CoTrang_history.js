
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/CoTrang/CoTrang_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '89676Zx8oRO4KIzkpkCy5Hq', 'CoTrang_history');
// Script/Game/CoTrang/CoTrang_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node,
        red: true
    },
    onLoad: function onLoad() {
        var _this = this;

        var page = cc.instantiate(this.page);
        page.y = -232;
        this.node.addChild(page);
        this.page = page.getComponent('Pagination');
        Promise.all(this.content.children.map(function (obj) {
            return obj.getComponent('VQRed_history_item');
        })).then(function (tab) {
            _this.content = tab;
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { longlan: { log: { red: this.red, page: page } } } });
    },
    onData: function onData(data) {
        var self = this;
        this.page.onSet(data.page, data.kmess, data.total);
        Promise.all(this.content.map(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.id;
                obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
                obj.win.string = dataT.line + " Dòng";
                obj.line.string = Helper.numberWithCommas(dataT.win);
            } else {
                obj.node.active = false;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxDb1RyYW5nXFxDb1RyYW5nX2hpc3RvcnkuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsInJlZCIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsInRoZW4iLCJ0YWIiLCJpbml0Iiwib25FbmFibGUiLCJnZXRfZGF0YSIsIlJlZFQiLCJzZW5kIiwiZyIsImxvbmdsYW4iLCJsb2ciLCJvbkRhdGEiLCJkYXRhIiwic2VsZiIsIm9uU2V0Iiwia21lc3MiLCJ0b3RhbCIsImkiLCJkYXRhVCIsImFjdGl2ZSIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwicGhpZW4iLCJpZCIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0Iiwid2luIiwibGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGNBQVVMLEdBQUdNLE1BREw7QUFFUkMsaUJBQVVQLEdBQUdRLElBRkw7QUFHUkMsYUFBVTtBQUhGLEtBSFA7QUFRTEMsVUFSSyxvQkFRSztBQUFBOztBQUNOLFlBQUlMLE9BQU9MLEdBQUdXLFdBQUgsQ0FBZSxLQUFLTixJQUFwQixDQUFYO0FBQ0FBLGFBQUtPLENBQUwsR0FBUyxDQUFDLEdBQVY7QUFDQSxhQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJULElBQW5CO0FBQ0EsYUFBS0EsSUFBTCxHQUFZQSxLQUFLVSxZQUFMLENBQWtCLFlBQWxCLENBQVo7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLVixPQUFMLENBQWFXLFFBQWIsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQVNDLEdBQVQsRUFBYTtBQUMvQyxtQkFBT0EsSUFBSUwsWUFBSixDQUFpQixvQkFBakIsQ0FBUDtBQUNILFNBRlcsQ0FBWixFQUdDTSxJQUhELENBR00sZUFBTztBQUNULGtCQUFLZCxPQUFMLEdBQWVlLEdBQWY7QUFDSCxTQUxEO0FBTUEsYUFBS2pCLElBQUwsQ0FBVWtCLElBQVYsQ0FBZSxJQUFmO0FBQ0gsS0FwQkk7O0FBcUJMQyxjQUFVLG9CQUFXO0FBQ2pCLGFBQUtDLFFBQUw7QUFDSCxLQXZCSTtBQXdCTEEsY0FBVSxvQkFBa0I7QUFBQSxZQUFUcEIsSUFBUyx1RUFBRixDQUFFOztBQUN4QkwsV0FBRzBCLElBQUgsQ0FBUUMsSUFBUixDQUFhLEVBQUNDLEdBQUUsRUFBQ0MsU0FBUSxFQUFDQyxLQUFJLEVBQUNyQixLQUFJLEtBQUtBLEdBQVYsRUFBZUosTUFBS0EsSUFBcEIsRUFBTCxFQUFULEVBQUgsRUFBYjtBQUNILEtBMUJJO0FBMkJMMEIsWUFBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ2xCLFlBQUlDLE9BQU8sSUFBWDtBQUNBLGFBQUs1QixJQUFMLENBQVU2QixLQUFWLENBQWdCRixLQUFLM0IsSUFBckIsRUFBMkIyQixLQUFLRyxLQUFoQyxFQUF1Q0gsS0FBS0ksS0FBNUM7QUFDQXBCLGdCQUFRQyxHQUFSLENBQVksS0FBS1YsT0FBTCxDQUFhWSxHQUFiLENBQWlCLFVBQVNDLEdBQVQsRUFBY2lCLENBQWQsRUFBZ0I7QUFDekMsZ0JBQUlDLFFBQVFOLEtBQUtBLElBQUwsQ0FBVUssQ0FBVixDQUFaO0FBQ0EsZ0JBQUksS0FBSyxDQUFMLEtBQVdDLEtBQWYsRUFBc0I7QUFDbEJsQixvQkFBSVAsSUFBSixDQUFTMEIsTUFBVCxHQUFtQixJQUFuQjtBQUNBbkIsb0JBQUlvQixJQUFKLENBQVNDLE1BQVQsR0FBbUIzQyxPQUFPNEMsbUJBQVAsQ0FBMkJKLE1BQU1FLElBQWpDLENBQW5CO0FBQ0FwQixvQkFBSXVCLEtBQUosQ0FBVUYsTUFBVixHQUFtQkgsTUFBTU0sRUFBekI7QUFDQXhCLG9CQUFJeUIsSUFBSixDQUFTSixNQUFULEdBQW1CM0MsT0FBT2dELGdCQUFQLENBQXdCUixNQUFNUyxHQUE5QixDQUFuQjtBQUNBM0Isb0JBQUk0QixHQUFKLENBQVFQLE1BQVIsR0FBbUJILE1BQU1XLElBQU4sR0FBYSxPQUFoQztBQUNBN0Isb0JBQUk2QixJQUFKLENBQVNSLE1BQVQsR0FBbUIzQyxPQUFPZ0QsZ0JBQVAsQ0FBd0JSLE1BQU1VLEdBQTlCLENBQW5CO0FBQ0gsYUFQRCxNQU9LO0FBQ0Q1QixvQkFBSVAsSUFBSixDQUFTMEIsTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBQ0osU0FaVyxDQUFaO0FBYUg7QUEzQ0ksQ0FBVCIsImZpbGUiOiJDb1RyYW5nX2hpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENvVHJhbmciLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYWdlOiAgICAgY2MuUHJlZmFiLFxyXG4gICAgICAgIGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG4gICAgICAgIHJlZDogICAgICB0cnVlLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdmFyIHBhZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhZ2UpO1xyXG4gICAgICAgIHBhZ2UueSA9IC0yMzI7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKHBhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHBhZ2UuZ2V0Q29tcG9uZW50KCdQYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmdldENvbXBvbmVudCgnVlFSZWRfaGlzdG9yeV9pdGVtJyk7XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLnRoZW4odGFiID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gdGFiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5wYWdlLmluaXQodGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0X2RhdGEoKTtcclxuICAgIH0sXHJcbiAgICBnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG4gICAgICAgIGNjLlJlZFQuc2VuZCh7Zzp7bG9uZ2xhbjp7bG9nOntyZWQ6dGhpcy5yZWQsIHBhZ2U6cGFnZX19fX0pO1xyXG4gICAgfSxcclxuICAgIG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMucGFnZS5vblNldChkYXRhLnBhZ2UsIGRhdGEua21lc3MsIGRhdGEudG90YWwpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMuY29udGVudC5tYXAoZnVuY3Rpb24ob2JqLCBpKXtcclxuICAgICAgICAgICAgdmFyIGRhdGFUID0gZGF0YS5kYXRhW2ldO1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUuYWN0aXZlICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmoudGltZS5zdHJpbmcgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcbiAgICAgICAgICAgICAgICBvYmoucGhpZW4uc3RyaW5nID0gZGF0YVQuaWQ7XHJcbiAgICAgICAgICAgICAgICBvYmouY3VvYy5zdHJpbmcgID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQuYmV0KTtcclxuICAgICAgICAgICAgICAgIG9iai53aW4uc3RyaW5nICAgPSBkYXRhVC5saW5lICsgXCIgRMOybmdcIjtcclxuICAgICAgICAgICAgICAgIG9iai5saW5lLnN0cmluZyAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC53aW4pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICB9LFxyXG59KTtcclxuIl19