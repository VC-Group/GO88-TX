
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSuBank/LichSuBank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfe16ZuJ1pCdIWy4Ytc2scR', 'LichSuBank');
// Script/Model/Dialog/Profile/LichSu/LichSuBank/LichSuBank.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node
    },
    onLoad: function onLoad() {
        this.content = this.content.children.map(function (obj) {
            return obj.getComponent('LichSuBank_item');
        });
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ user: { history: { bank: { page: page } } } });
    },
    onData: function onData(data) {
        this.content.forEach(function (obj, index) {
            var dataT = data[index];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.bg.active = index % 2;
                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.bank.string = dataT.bank.toUpperCase();
                obj.act.string = dataT.type == 0 ? 'NẠP' : 'RÚT';

                obj.money.string = Helper.numberWithCommas(dataT.money);
                obj.money.node.color = dataT.type == 0 ? cc.color(199, 39, 39, 255) : cc.color(201, 16, 178, 255);

                obj.info.string = !!dataT.info ? dataT.info : '';
                obj.status.string = dataT.status == 0 ? "Chờ Duyệt" : dataT.status == 1 ? "Thành Công" : dataT.status == 2 ? "Thất Bại" : "";
                obj.status.node.color = dataT.status == 0 ? cc.color(195, 130, 14, 255) : dataT.status == 1 ? cc.color(0, 129, 6, 255) : dataT.status == 2 ? cc.color(236, 6, 6, 255) : cc.color(45, 171, 255, 255);
            } else {
                obj.node.active = false;
            }
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdUJhbmsvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1QmFuay9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VCYW5rXFxMaWNoU3VCYW5rLmpzIl0sIm5hbWVzIjpbIkhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsIm9uTG9hZCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiZ2V0Q29tcG9uZW50Iiwib25FbmFibGUiLCJnZXRfZGF0YSIsInBhZ2UiLCJSZWRUIiwic2VuZCIsInVzZXIiLCJoaXN0b3J5IiwiYmFuayIsIm9uRGF0YSIsImRhdGEiLCJmb3JFYWNoIiwiaW5kZXgiLCJkYXRhVCIsIm5vZGUiLCJhY3RpdmUiLCJiZyIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwidG9VcHBlckNhc2UiLCJhY3QiLCJ0eXBlIiwibW9uZXkiLCJudW1iZXJXaXRoQ29tbWFzIiwiY29sb3IiLCJpbmZvIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsaUJBQVNMLEdBQUdNO0FBREosS0FIUDtBQU1MQyxVQU5LLG9CQU1LO0FBQ04sYUFBS0YsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUcsUUFBYixDQUFzQkMsR0FBdEIs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QUNKLFNBbEJEO0FBbUJIO0FBckNJLENBQVQiLCJmaWxlIjoiTGljaFN1QmFuay5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VCYW5rIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY29udGVudDogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ0xpY2hTdUJhbmtfaXRlbScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcbiAgICAgICAgY2MuUmVkVC5zZW5kKHt1c2VyOntoaXN0b3J5OntiYW5rOntwYWdlOnBhZ2V9fX19KTtcclxuICAgIH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuY29udGVudC5mb3JFYWNoKGZ1bmN0aW9uKG9iaiwgaW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgZGF0YVQgPSBkYXRhW2luZGV4XTtcclxuICAgICAgICAgICAgaWYgKHZvaWQgMCAhPT0gZGF0YVQpIHtcclxuICAgICAgICAgICAgICAgIG9iai5ub2RlLmFjdGl2ZSAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb2JqLmJnLmFjdGl2ZSAgICA9IGluZGV4JTI7XHJcbiAgICAgICAgICAgICAgICBvYmoudGltZS5zdHJpbmcgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcbiAgICAgICAgICAgICAgICBvYmouYmFuay5zdHJpbmcgID0gZGF0YVQuYmFuay50b1VwcGVyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgb2JqLmFjdC5zdHJpbmcgICA9IGRhdGFULnR5cGUgPT0gMCA/ICdO4bqgUCcgOiAnUsOaVCc7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqLm1vbmV5LnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULm1vbmV5KTtcclxuICAgICAgICAgICAgICAgIG9iai5tb25leS5ub2RlLmNvbG9yID0gZGF0YVQudHlwZSA9PSAwID8gY2MuY29sb3IoMTk5LCAzOSwgMzksIDI1NSkgOiBjYy5jb2xvcigyMDEsIDE2LCAxNzgsIDI1NSk7XHJcblxyXG4gICAgICAgICAgICAgICAgb2JqLmluZm8uc3RyaW5nICA9ICEhZGF0YVQuaW5mbyA/IGRhdGFULmluZm8gOiAnJztcclxuICAgICAgICAgICAgICAgIG9iai5zdGF0dXMuc3RyaW5nICAgICA9IGRhdGFULnN0YXR1cyA9PSAwID8gXCJDaOG7nSBEdXnhu4d0XCIgOiAoZGF0YVQuc3RhdHVzID09IDEgPyBcIlRow6BuaCBDw7RuZ1wiIDogKGRhdGFULnN0YXR1cyA9PSAyID8gXCJUaOG6pXQgQuG6oWlcIiA6IFwiXCIpKTtcclxuICAgICAgICAgICAgICAgIG9iai5zdGF0dXMubm9kZS5jb2xvciA9IGRhdGFULnN0YXR1cyA9PSAwID8gY2MuY29sb3IoMTk1LCAxMzAsIDE0LCAyNTUpIDogKGRhdGFULnN0YXR1cyA9PSAxID8gY2MuY29sb3IoMCwgMTI5LCA2LCAyNTUpIDogKGRhdGFULnN0YXR1cyA9PSAyID8gY2MuY29sb3IoMjM2LCA2LCA2LCAyNTUpIDogY2MuY29sb3IoNDUsIDE3MSwgMjU1LCAyNTUpKSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=