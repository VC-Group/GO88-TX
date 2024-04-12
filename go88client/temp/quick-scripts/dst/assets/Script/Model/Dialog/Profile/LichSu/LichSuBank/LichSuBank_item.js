
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSuBank/LichSuBank_item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '907c0wFO7lM9YafdKBVYX1S', 'LichSuBank_item');
// Script/Model/Dialog/Profile/LichSu/LichSuBank/LichSuBank_item.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        bg: cc.Node,
        time: {
            default: null,
            type: cc.Label
        },
        bank: {
            default: null,
            type: cc.Label
        },
        act: {
            default: null,
            type: cc.Label
        },
        money: {
            default: null,
            type: cc.Label
        },
        info: {
            default: null,
            type: cc.Label
        },
        status: {
            default: null,
            type: cc.Label
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdUJhbmsvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1QmFuay9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VCYW5rXFxMaWNoU3VCYW5rX2l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmciLCJOb2RlIiwidGltZSIsImRlZmF1bHQiLCJ0eXBlIiwiTGFiZWwiLCJiYW5rIiwiYWN0IiwibW9uZXkiLCJpbmZvIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsWUFBSUwsR0FBR00sSUFEQztBQUVSQyxjQUFNO0FBQ0ZDLHFCQUFTLElBRFA7QUFFRkMsa0JBQVNULEdBQUdVO0FBRlYsU0FGRTtBQU1SQyxjQUFNO0FBQ0ZILHFCQUFTLElBRFA7QUFFRkMsa0JBQVNULEdBQUdVO0FBRlYsU0FORTtBQVVSRSxhQUFLO0FBQ0RKLHFCQUFTLElBRFI7QUFFREMsa0JBQVNULEdBQUdVO0FBRlgsU0FWRztBQWNSRyxlQUFPO0FBQ0hMLHFCQUFTLElBRE47QUFFSEMsa0JBQVNULEdBQUdVO0FBRlQsU0FkQztBQWtCUkksY0FBTTtBQUNGTixxQkFBUyxJQURQO0FBRUZDLGtCQUFTVCxHQUFHVTtBQUZWLFNBbEJFO0FBc0JSSyxnQkFBUTtBQUNKUCxxQkFBUyxJQURMO0FBRUpDLGtCQUFTVCxHQUFHVTtBQUZSO0FBdEJBO0FBSFAsQ0FBVCIsImZpbGUiOiJMaWNoU3VCYW5rX2l0ZW0uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1QmFuayIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJnOiBjYy5Ob2RlLFxyXG4gICAgICAgIHRpbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiYW5rOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWN0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW9uZXk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhdHVzOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG59KTtcclxuIl19