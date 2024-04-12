
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuTop/TaiXiuTop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c979o56KBFA7IxEoBHBpgJ', 'TaiXiuTop');
// Script/Game/TaiXiu/TaiXiuTop/TaiXiuTop.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node
    },
    onLoad: function onLoad() {
        this.content = this.content.children.map(function (obj) {
            return obj.getComponent('TaiXiu_topItem');
        });
        this.get_data();
    },

    get_data: function get_data() {
        cc.RedT.send({ taixiu: { get_top: { red: true, taixiu: true } } });
    },
    onEnable: function onEnable() {
        if (!!this.content) {
            this.get_data();
        }
        console.log("0/,load ");
    },
    onData: function onData(data) {
        this.content.forEach(function (obj, index) {
            var dataH = data[index];
            if (void 0 !== dataH) {
                obj.node.active = true;
                if (index > 2) {
                    obj.top.node.active = true;
                    obj.top.string = index + 1;
                } else {
                    obj.top.node.active = false;
                }
                obj.nick.string = dataH.name;
                obj.win.string = helper.numberWithCommas(dataH.bet);
            } else {
                obj.node.active = false;
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVUb3AvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdVRvcC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVUb3BcXFRhaVhpdVRvcC5qcyJdLCJuYW1lcyI6WyJoZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJvbkxvYWQiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsImdldENvbXBvbmVudCIsImdldF9kYXRhIiwiUmVkVCIsInNlbmQiLCJ0YWl4aXUiLCJnZXRfdG9wIiwicmVkIiwib25FbmFibGUiLCJjb25zb2xlIiwibG9nIiwib25EYXRhIiwiZGF0YSIsImZvckVhY2giLCJpbmRleCIsImRhdGFIIiwibm9kZSIsImFjdGl2ZSIsInRvcCIsInN0cmluZyIsIm5pY2siLCJuYW1lIiwid2luIiwibnVtYmVyV2l0aENvbW1hcyIsImJldCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxpQkFBU0wsR0FBR007QUFESixLQUhQO0FBTUxDLFVBTkssb0JBTUs7QUFDTixhQUFLRixPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhRyxRQUFiLENBQXNCQyxHQUF0QixDQUEwQixVQUFTQyxHQUFULEVBQWE7QUFDbEQsbUJBQU9BLElBQUlDLFlBQUosQ0FBaUIsZ0JBQWpCLENBQVA7QUFDSCxTQUZjLENBQWY7QUFHTixhQUFLQyxRQUFMO0FBQ0EsS0FYTzs7QUFZTEEsY0FBVSxvQkFBVTtBQUNuQlosV0FBR2EsSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsUUFBTyxFQUFDQyxTQUFRLEVBQUNDLEtBQUksSUFBTCxFQUFVRixRQUFPLElBQWpCLEVBQVQsRUFBUixFQUFiO0FBQ0EsS0FkSTtBQWVMRyxjQUFVLG9CQUFZO0FBQ3hCLFlBQUcsQ0FBQyxDQUFDLEtBQUtiLE9BQVYsRUFBa0I7QUFDakIsaUJBQUtPLFFBQUw7QUFDQTtBQUNLTyxnQkFBUUMsR0FBUixDQUFZLFVBQVo7QUFDTixLQXBCTztBQXFCTEMsWUFBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ3hCLGFBQUtqQixPQUFMLENBQWFrQixPQUFiLENBQXFCLFVBQVNiLEdBQVQsRUFBY2MsS0FBZCxFQUFvQjtBQUMvQixnQkFBSUMsUUFBUUgsS0FBS0UsS0FBTCxDQUFaO0FBQ0EsZ0JBQUksS0FBSyxDQUFMLEtBQVdDLEtBQWYsRUFBc0I7QUFDbEJmLG9CQUFJZ0IsSUFBSixDQUFTQyxNQUFULEdBQWtCLElBQWxCO0FBQ0Esb0JBQUlILFFBQVEsQ0FBWixFQUFlO0FBQ1hkLHdCQUFJa0IsR0FBSixDQUFRRixJQUFSLENBQWFDLE1BQWIsR0FBc0IsSUFBdEI7QUFDQWpCLHdCQUFJa0IsR0FBSixDQUFRQyxNQUFSLEdBQXNCTCxRQUFNLENBQTVCO0FBQ0gsaUJBSEQsTUFHSztBQUNEZCx3QkFBSWtCLEdBQUosQ0FBUUYsSUFBUixDQUFhQyxNQUFiLEdBQXNCLEtBQXRCO0FBQ0g7QUFDRGpCLG9CQUFJb0IsSUFBSixDQUFTRCxNQUFULEdBQWtCSixNQUFNTSxJQUF4QjtBQUNBckIsb0JBQUlzQixHQUFKLENBQVFILE1BQVIsR0FBa0IvQixPQUFPbUMsZ0JBQVAsQ0FBd0JSLE1BQU1TLEdBQTlCLENBQWxCO0FBQ0gsYUFWRCxNQVVLO0FBQ0R4QixvQkFBSWdCLElBQUosQ0FBU0MsTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBQ0osU0FmYyxDQWViUSxJQWZhLENBZVIsSUFmUSxDQUFyQjtBQWdCRztBQXRDSSxDQUFUIiwiZmlsZSI6IlRhaVhpdVRvcC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdVxcVGFpWGl1VG9wIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgY29udGVudDogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ1RhaVhpdV90b3BJdGVtJyk7XHJcbiAgICAgICAgfSk7XHJcblx0XHR0aGlzLmdldF9kYXRhKCk7XHJcblx0fSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbigpe1xyXG4gICAgXHRjYy5SZWRULnNlbmQoe3RhaXhpdTp7Z2V0X3RvcDp7cmVkOnRydWUsdGFpeGl1OnRydWV9fX0pO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRpZighIXRoaXMuY29udGVudCl7XHJcblx0XHRcdHRoaXMuZ2V0X2RhdGEoKTtcclxuXHRcdH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcIjAvLGxvYWQgXCIpO1xyXG5cdH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dGhpcy5jb250ZW50LmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGxldCBkYXRhSCA9IGRhdGFbaW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkYXRhSCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmoudG9wLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBvYmoudG9wLnN0cmluZyAgICAgID0gaW5kZXgrMTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIG9iai50b3Aubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9iai5uaWNrLnN0cmluZyA9IGRhdGFILm5hbWU7XHJcbiAgICAgICAgICAgICAgICBvYmoud2luLnN0cmluZyAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhSC5iZXQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=