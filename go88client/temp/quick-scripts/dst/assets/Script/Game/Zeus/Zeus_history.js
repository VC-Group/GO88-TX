
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Zeus/Zeus_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '341aezoH1lK1IIq/VUivU/o', 'Zeus_history');
// Script/Game/Zeus/Zeus_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node,
        cointRed: cc.Node,
        cointXu: cc.Node,
        red: true
    },
    onLoad: function onLoad() {
        var _this = this;

        var page = cc.instantiate(this.page);
        page.y = -211;
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

        cc.RedT.send({ g: { zeus: { log: { red: this.red, page: page } } } });
    },
    changerCoint: function changerCoint() {
        this.red = !this.red;
        this.cointRed.active = !this.cointRed.active;
        this.cointXu.active = !this.cointXu.active;
        this.get_data();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxaZXVzX2hpc3RvcnkuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsImNvaW50UmVkIiwiY29pbnRYdSIsInJlZCIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsInRoZW4iLCJ0YWIiLCJpbml0Iiwib25FbmFibGUiLCJnZXRfZGF0YSIsIlJlZFQiLCJzZW5kIiwiZyIsInpldXMiLCJsb2ciLCJjaGFuZ2VyQ29pbnQiLCJhY3RpdmUiLCJvbkRhdGEiLCJkYXRhIiwic2VsZiIsIm9uU2V0Iiwia21lc3MiLCJ0b3RhbCIsImkiLCJkYXRhVCIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwicGhpZW4iLCJpZCIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0Iiwid2luIiwibGluZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGNBQVVMLEdBQUdNLE1BREw7QUFFUkMsaUJBQVVQLEdBQUdRLElBRkw7QUFHUkMsa0JBQVVULEdBQUdRLElBSEw7QUFJUkUsaUJBQVVWLEdBQUdRLElBSkw7QUFLUkcsYUFBVTtBQUxGLEtBSFA7QUFVTEMsVUFWSyxvQkFVSztBQUFBOztBQUNOLFlBQUlQLE9BQU9MLEdBQUdhLFdBQUgsQ0FBZSxLQUFLUixJQUFwQixDQUFYO0FBQ0FBLGFBQUtTLENBQUwsR0FBUyxDQUFDLEdBQVY7QUFDQSxhQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJYLElBQW5CO0FBQ0EsYUFBS0EsSUFBTCxHQUFZQSxLQUFLWSxZQUFMLENBQWtCLFlBQWxCLENBQVo7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLWixPQUFMLENBQWFhLFFBQWIsQ0FBc0JDLEdBQXRCLENBQTBCLFVBQVNDLEdBQVQsRUFBYTtBQUMvQyxtQkFBT0EsSUFBSUwsWUFBSixDQUFpQixvQkFBakIsQ0FBUDtBQUNILFNBRlcsQ0FBWixFQUdDTSxJQUhELENBR00sZUFBTztBQUNULGtCQUFLaEIsT0FBTCxHQUFlaUIsR0FBZjtBQUNILFNBTEQ7QUFNQSxhQUFLbkIsSUFBTCxDQUFVb0IsSUFBVixDQUFlLElBQWY7QUFDSCxLQXRCSTs7QUF1QkxDLGNBQVUsb0JBQVc7QUFDakIsYUFBS0MsUUFBTDtBQUNILEtBekJJO0FBMEJMQSxjQUFVLG9CQUFrQjtBQUFBLFlBQVR0QixJQUFTLHVFQUFGLENBQUU7O0FBQ3hCTCxXQUFHNEIsSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxNQUFLLEVBQUNDLEtBQUksRUFBQ3JCLEtBQUssS0FBS0EsR0FBWCxFQUFnQk4sTUFBTUEsSUFBdEIsRUFBTCxFQUFOLEVBQUgsRUFBYjtBQUNILEtBNUJJO0FBNkJMNEIsa0JBQWMsd0JBQVU7QUFDcEIsYUFBS3RCLEdBQUwsR0FBdUIsQ0FBQyxLQUFLQSxHQUE3QjtBQUNBLGFBQUtGLFFBQUwsQ0FBY3lCLE1BQWQsR0FBdUIsQ0FBQyxLQUFLekIsUUFBTCxDQUFjeUIsTUFBdEM7QUFDQSxhQUFLeEIsT0FBTCxDQUFhd0IsTUFBYixHQUF1QixDQUFDLEtBQUt4QixPQUFMLENBQWF3QixNQUFyQztBQUNBLGFBQUtQLFFBQUw7QUFDSCxLQWxDSTtBQW1DTFEsWUFBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ2xCLFlBQUlDLE9BQU8sSUFBWDtBQUNBLGFBQUtoQyxJQUFMLENBQVVpQyxLQUFWLENBQWdCRixLQUFLL0IsSUFBckIsRUFBMkIrQixLQUFLRyxLQUFoQyxFQUF1Q0gsS0FBS0ksS0FBNUM7QUFDQXRCLGdCQUFRQyxHQUFSLENBQVksS0FBS1osT0FBTCxDQUFhYyxHQUFiLENBQWlCLFVBQVNDLEdBQVQsRUFBY21CLENBQWQsRUFBZ0I7QUFDekMsZ0JBQUlDLFFBQVFOLEtBQUtBLElBQUwsQ0FBVUssQ0FBVixDQUFaO0FBQ0EsZ0JBQUksS0FBSyxDQUFMLEtBQVdDLEtBQWYsRUFBc0I7QUFDbEJwQixvQkFBSVAsSUFBSixDQUFTbUIsTUFBVCxHQUFtQixJQUFuQjtBQUNBWixvQkFBSXFCLElBQUosQ0FBU0MsTUFBVCxHQUFtQjlDLE9BQU8rQyxtQkFBUCxDQUEyQkgsTUFBTUMsSUFBakMsQ0FBbkI7QUFDQXJCLG9CQUFJd0IsS0FBSixDQUFVRixNQUFWLEdBQW1CRixNQUFNSyxFQUF6QjtBQUNBekIsb0JBQUkwQixJQUFKLENBQVNKLE1BQVQsR0FBbUI5QyxPQUFPbUQsZ0JBQVAsQ0FBd0JQLE1BQU1RLEdBQTlCLENBQW5CO0FBQ0E1QixvQkFBSTZCLEdBQUosQ0FBUVAsTUFBUixHQUFtQkYsTUFBTVUsSUFBTixHQUFhLE9BQWhDO0FBQ0E5QixvQkFBSThCLElBQUosQ0FBU1IsTUFBVCxHQUFtQjlDLE9BQU9tRCxnQkFBUCxDQUF3QlAsTUFBTVMsR0FBOUIsQ0FBbkI7QUFDSCxhQVBELE1BT0s7QUFDRDdCLG9CQUFJUCxJQUFKLENBQVNtQixNQUFULEdBQWtCLEtBQWxCO0FBQ0g7QUFDSixTQVpXLENBQVo7QUFhSDtBQW5ESSxDQUFUIiwiZmlsZSI6IlpldXNfaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1cyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBhZ2U6ICAgICBjYy5QcmVmYWIsXHJcbiAgICAgICAgY29udGVudDogIGNjLk5vZGUsXHJcbiAgICAgICAgY29pbnRSZWQ6IGNjLk5vZGUsXHJcbiAgICAgICAgY29pbnRYdTogIGNjLk5vZGUsXHJcbiAgICAgICAgcmVkOiAgICAgIHRydWUsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgcGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZSk7XHJcbiAgICAgICAgcGFnZS55ID0gLTIxMTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQocGFnZSk7XHJcbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZS5nZXRDb21wb25lbnQoJ1BhZ2luYXRpb24nKTtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmNvbnRlbnQuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdWUVJlZF9oaXN0b3J5X2l0ZW0nKTtcclxuICAgICAgICB9KSlcclxuICAgICAgICAudGhlbih0YWIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSB0YWI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnBhZ2UuaW5pdCh0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nZXRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcbiAgICAgICAgY2MuUmVkVC5zZW5kKHtnOnt6ZXVzOntsb2c6e3JlZDogdGhpcy5yZWQsIHBhZ2U6IHBhZ2V9fX19KTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VyQ29pbnQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5yZWQgICAgICAgICAgICAgPSAhdGhpcy5yZWQ7XHJcbiAgICAgICAgdGhpcy5jb2ludFJlZC5hY3RpdmUgPSAhdGhpcy5jb2ludFJlZC5hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5jb2ludFh1LmFjdGl2ZSAgPSAhdGhpcy5jb2ludFh1LmFjdGl2ZTtcclxuICAgICAgICB0aGlzLmdldF9kYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5wYWdlLm9uU2V0KGRhdGEucGFnZSwgZGF0YS5rbWVzcywgZGF0YS50b3RhbCk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5jb250ZW50Lm1hcChmdW5jdGlvbihvYmosIGkpe1xyXG4gICAgICAgICAgICB2YXIgZGF0YVQgPSBkYXRhLmRhdGFbaV07XHJcbiAgICAgICAgICAgIGlmICh2b2lkIDAgIT09IGRhdGFUKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG9iai50aW1lLnN0cmluZyAgPSBIZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShkYXRhVC50aW1lKTtcclxuICAgICAgICAgICAgICAgIG9iai5waGllbi5zdHJpbmcgPSBkYXRhVC5pZDtcclxuICAgICAgICAgICAgICAgIG9iai5jdW9jLnN0cmluZyAgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5iZXQpO1xyXG4gICAgICAgICAgICAgICAgb2JqLndpbi5zdHJpbmcgICA9IGRhdGFULmxpbmUgKyBcIiBEw7JuZ1wiO1xyXG4gICAgICAgICAgICAgICAgb2JqLmxpbmUuc3RyaW5nICA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULndpbik7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=