
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSuRut/LichSuRut_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9622W0MQ9AOJN08zkYjgg8', 'LichSuRut_item');
// Script/Model/Dialog/Profile/LichSu/LichSuRut/LichSuRut_item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        Time: cc.Label,
        NhaMang: cc.Label,
        MenhGia: cc.Label,
        SoLuong: cc.Label,
        Cost: cc.Label,
        Status: cc.Label
    },
    onInfoClick: function onInfoClick() {
        if (this.info) {
            cc.RedT.inGame.dialog.profile.LichSu.lichSuRut.isView = true;
            cc.RedT.inGame.dialog.the_cao.getData(this.idT);
            cc.RedT.audio.playClick();
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdVJ1dC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VSdXQvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1UnV0XFxMaWNoU3VSdXRfaXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJUaW1lIiwiTGFiZWwiLCJOaGFNYW5nIiwiTWVuaEdpYSIsIlNvTHVvbmciLCJDb3N0IiwiU3RhdHVzIiwib25JbmZvQ2xpY2siLCJpbmZvIiwiUmVkVCIsImluR2FtZSIsImRpYWxvZyIsInByb2ZpbGUiLCJMaWNoU3UiLCJsaWNoU3VSdXQiLCJpc1ZpZXciLCJ0aGVfY2FvIiwiZ2V0RGF0YSIsImlkVCIsImF1ZGlvIiwicGxheUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsY0FBU0wsR0FBR00sS0FESjtBQUVSQyxpQkFBU1AsR0FBR00sS0FGSjtBQUdSRSxpQkFBU1IsR0FBR00sS0FISjtBQUlSRyxpQkFBU1QsR0FBR00sS0FKSjtBQUtSSSxjQUFTVixHQUFHTSxLQUxKO0FBTVJLLGdCQUFTWCxHQUFHTTtBQU5KLEtBSFA7QUFXTE0saUJBQWEsdUJBQVc7QUFDcEIsWUFBSSxLQUFLQyxJQUFULEVBQWU7QUFDWGIsZUFBR2MsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JDLE9BQXRCLENBQThCQyxNQUE5QixDQUFxQ0MsU0FBckMsQ0FBK0NDLE1BQS9DLEdBQXdELElBQXhEO0FBQ0FwQixlQUFHYyxJQUFILENBQVFDLE1BQVIsQ0FBZUMsTUFBZixDQUFzQkssT0FBdEIsQ0FBOEJDLE9BQTlCLENBQXNDLEtBQUtDLEdBQTNDO0FBQ0F2QixlQUFHYyxJQUFILENBQVFVLEtBQVIsQ0FBY0MsU0FBZDtBQUNIO0FBQ0o7QUFqQkksQ0FBVCIsImZpbGUiOiJMaWNoU3VSdXRfaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VSdXQiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBUaW1lOiAgICBjYy5MYWJlbCxcclxuICAgICAgICBOaGFNYW5nOiBjYy5MYWJlbCxcclxuICAgICAgICBNZW5oR2lhOiBjYy5MYWJlbCxcclxuICAgICAgICBTb0x1b25nOiBjYy5MYWJlbCxcclxuICAgICAgICBDb3N0OiAgICBjYy5MYWJlbCxcclxuICAgICAgICBTdGF0dXM6ICBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBvbkluZm9DbGljazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5mbykge1xyXG4gICAgICAgICAgICBjYy5SZWRULmluR2FtZS5kaWFsb2cucHJvZmlsZS5MaWNoU3UubGljaFN1UnV0LmlzVmlldyA9IHRydWU7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuaW5HYW1lLmRpYWxvZy50aGVfY2FvLmdldERhdGEodGhpcy5pZFQpO1xyXG4gICAgICAgICAgICBjYy5SZWRULmF1ZGlvLnBsYXlDbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=