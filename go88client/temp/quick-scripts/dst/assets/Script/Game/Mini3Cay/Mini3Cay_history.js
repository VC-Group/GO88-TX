
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Mini3Cay/Mini3Cay_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e051nPL7JFfrzu7siEPQ+Q', 'Mini3Cay_history');
// Script/Game/Mini3Cay/Mini3Cay_history.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        page: cc.Prefab,
        content: cc.Node,
        cointRed: cc.Node,
        cointXu: cc.Node,
        red: true
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    onLoad: function onLoad() {
        var _this = this;

        this.page = cc.instantiate(this.page);
        this.page.y = -307;
        this.node.addChild(this.page);
        this.page = this.page.getComponent('Pagination');
        Promise.all(this.content.children.map(function (obj) {
            return obj.getComponent('Mini3Cay_ihistory');
        })).then(function (result) {
            _this.content = result;
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    //onDisable: function() {
    //},
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { mini3cay: { logs: { red: this.red, page: page } } } });
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
                obj.time.string = helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.id;
                obj.cuoc.string = helper.numberWithCommas(dataT.bet);
                obj.win.string = helper.numberWithCommas(dataT.win);
                Promise.all(obj.kq.map(function (kq, index) {
                    kq.spriteFrame = cc.RedT.util.card.getCard(dataT.kq[index].card, dataT.kq[index].type);
                }));
            } else {
                obj.node.active = false;
            }
        }));
    }
    /**
    reset: function(){
        Promise.all(this.content.children.map(function(obj){
            obj.node.active = false;
        }))
    },
    */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxNaW5pM0NheS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWluaTNDYXkvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1pbmkzQ2F5XFxNaW5pM0NheV9oaXN0b3J5LmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwYWdlIiwiUHJlZmFiIiwiY29udGVudCIsIk5vZGUiLCJjb2ludFJlZCIsImNvaW50WHUiLCJyZWQiLCJpbml0Iiwib2JqIiwiUmVkVCIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsInRoZW4iLCJyZXN1bHQiLCJvbkVuYWJsZSIsImdldF9kYXRhIiwic2VuZCIsImciLCJtaW5pM2NheSIsImxvZ3MiLCJjaGFuZ2VyQ29pbnQiLCJhY3RpdmUiLCJvbkRhdGEiLCJkYXRhIiwic2VsZiIsIm9uU2V0Iiwia21lc3MiLCJ0b3RhbCIsImkiLCJkYXRhVCIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwicGhpZW4iLCJpZCIsImN1b2MiLCJudW1iZXJXaXRoQ29tbWFzIiwiYmV0Iiwid2luIiwia3EiLCJpbmRleCIsInNwcml0ZUZyYW1lIiwidXRpbCIsImNhcmQiLCJnZXRDYXJkIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7QUFFTEMsZ0JBQVk7QUFDUkMsY0FBVUwsR0FBR00sTUFETDtBQUVSQyxpQkFBVVAsR0FBR1EsSUFG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V0FBSCxHQUFpQnRELEdBQUdjLElBQUgsQ0FBUXlDLElBQVIsQ0FBYUMsSUFBYixDQUFrQkMsT0FBbEIsQ0FBMEJmLE1BQU1VLEVBQU4sQ0FBU0MsS0FBVCxFQUFnQkcsSUFBMUMsRUFBZ0RkLE1BQU1VLEVBQU4sQ0FBU0MsS0FBVCxFQUFnQkssSUFBaEUsQ0FBakI7QUFDSCxpQkFGVyxDQUFaO0FBR0gsYUFURCxNQVNLO0FBQ0Q3QyxvQkFBSUssSUFBSixDQUFTZ0IsTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBQ0osU0FkVyxDQUFaO0FBZUg7QUFDRDs7Ozs7OztBQTFESyxDQUFUIiwiZmlsZSI6Ik1pbmkzQ2F5X2hpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1pbmkzQ2F5Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYWdlOiAgICAgY2MuUHJlZmFiLFxyXG4gICAgICAgIGNvbnRlbnQ6ICBjYy5Ob2RlLFxyXG4gICAgICAgIGNvaW50UmVkOiBjYy5Ob2RlLFxyXG4gICAgICAgIGNvaW50WHU6ICBjYy5Ob2RlLFxyXG4gICAgICAgIHJlZDogICAgICB0cnVlLFxyXG4gICAgfSxcclxuICAgIGluaXQob2JqKXtcclxuICAgICAgICB0aGlzLlJlZFQgPSBvYmo7XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFnZS55ID0gLTMwNztcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5wYWdlKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2UuZ2V0Q29tcG9uZW50KCdQYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmdldENvbXBvbmVudCgnTWluaTNDYXlfaWhpc3RvcnknKTtcclxuICAgICAgICB9KSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnBhZ2UuaW5pdCh0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nZXRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIC8vb25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vfSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcbiAgICAgICAgY2MuUmVkVC5zZW5kKHtnOnttaW5pM2NheTp7bG9nczp7cmVkOiB0aGlzLnJlZCwgcGFnZTogcGFnZX19fX0pO1xyXG4gICAgfSxcclxuICAgIGNoYW5nZXJDb2ludDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlZCAgICAgICAgICAgICA9ICF0aGlzLnJlZDtcclxuICAgICAgICB0aGlzLmNvaW50UmVkLmFjdGl2ZSA9ICF0aGlzLmNvaW50UmVkLmFjdGl2ZTtcclxuICAgICAgICB0aGlzLmNvaW50WHUuYWN0aXZlICA9ICF0aGlzLmNvaW50WHUuYWN0aXZlO1xyXG4gICAgICAgIHRoaXMuZ2V0X2RhdGEoKTtcclxuICAgIH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnBhZ2Uub25TZXQoZGF0YS5wYWdlLCBkYXRhLmttZXNzLCBkYXRhLnRvdGFsKTtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmNvbnRlbnQubWFwKGZ1bmN0aW9uKG9iaiwgaSl7XHJcbiAgICAgICAgICAgIHZhciBkYXRhVCA9IGRhdGEuZGF0YVtpXVxyXG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUuYWN0aXZlICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmoudGltZS5zdHJpbmcgID0gaGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcbiAgICAgICAgICAgICAgICBvYmoucGhpZW4uc3RyaW5nID0gZGF0YVQuaWQ7XHJcbiAgICAgICAgICAgICAgICBvYmouY3VvYy5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQuYmV0KTtcclxuICAgICAgICAgICAgICAgIG9iai53aW4uc3RyaW5nICAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC53aW4pO1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwob2JqLmtxLm1hcChmdW5jdGlvbihrcSwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGtxLnNwcml0ZUZyYW1lID0gY2MuUmVkVC51dGlsLmNhcmQuZ2V0Q2FyZChkYXRhVC5rcVtpbmRleF0uY2FyZCwgZGF0YVQua3FbaW5kZXhdLnR5cGUpXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG4gICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KSlcclxuICAgIH0sXHJcbiAgICAqL1xyXG59KTtcclxuIl19