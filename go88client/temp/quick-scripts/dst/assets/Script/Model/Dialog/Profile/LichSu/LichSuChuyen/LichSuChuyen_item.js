
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSuChuyen/LichSuChuyen_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cefe2VTU9FJuZ3eLrltioL8', 'LichSuChuyen_item');
// Script/Model/Dialog/Profile/LichSu/LichSuChuyen/LichSuChuyen_item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        Time: cc.Label,
        uFrom: cc.Label,
        uTo: cc.Label,
        Chuyen: cc.Label,
        Nhan: cc.Label,
        nodeMesenger: cc.Node
    },
    onShowMesenger: function onShowMesenger() {
        cc.RedT.inGame.notice.show({ title: "LỜI NHẮN", text: this.mesenger });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdUNodXllbi8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VDaHV5ZW4vYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1Q2h1eWVuXFxMaWNoU3VDaHV5ZW5faXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJUaW1lIiwiTGFiZWwiLCJ1RnJvbSIsInVUbyIsIkNodXllbiIsIk5oYW4iLCJub2RlTWVzZW5nZXIiLCJOb2RlIiwib25TaG93TWVzZW5nZXIiLCJSZWRUIiwiaW5HYW1lIiwibm90aWNlIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIm1lc2VuZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsY0FBY0wsR0FBR00sS0FEVDtBQUVSQyxlQUFjUCxHQUFHTSxLQUZUO0FBR1JFLGFBQWNSLEdBQUdNLEtBSFQ7QUFJUkcsZ0JBQWNULEdBQUdNLEtBSlQ7QUFLUkksY0FBY1YsR0FBR00sS0FMVDtBQU1SSyxzQkFBY1gsR0FBR1k7QUFOVCxLQUhQO0FBV0xDLG9CQUFnQiwwQkFBVztBQUN2QmIsV0FBR2MsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JDLElBQXRCLENBQTJCLEVBQUNDLE9BQU8sVUFBUixFQUFvQkMsTUFBTSxLQUFLQyxRQUEvQixFQUEzQjtBQUNIO0FBYkksQ0FBVCIsImZpbGUiOiJMaWNoU3VDaHV5ZW5faXRlbS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VDaHV5ZW4iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBUaW1lOiAgICAgICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIHVGcm9tOiAgICAgICAgY2MuTGFiZWwsXHJcbiAgICAgICAgdVRvOiAgICAgICAgICBjYy5MYWJlbCxcclxuICAgICAgICBDaHV5ZW46ICAgICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIE5oYW46ICAgICAgICAgY2MuTGFiZWwsXHJcbiAgICAgICAgbm9kZU1lc2VuZ2VyOiBjYy5Ob2RlLFxyXG4gICAgfSxcclxuICAgIG9uU2hvd01lc2VuZ2VyOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5SZWRULmluR2FtZS5ub3RpY2Uuc2hvdyh7dGl0bGU6IFwiTOG7nEkgTkjhuq5OXCIsIHRleHQ6IHRoaXMubWVzZW5nZXJ9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=