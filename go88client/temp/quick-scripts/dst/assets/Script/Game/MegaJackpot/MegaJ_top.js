
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/MegaJackpot/MegaJ_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd12d5B1O+1B0Lp+cj0QY7BT', 'MegaJ_top');
// Script/Game/MegaJackpot/MegaJ_top.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    onLoad: function onLoad() {
        var _this = this;

        this.page = cc.instantiate(this.page);
        this.page.y = -245;
        this.node.addChild(this.page);
        this.page = this.page.getComponent('Pagination');

        Promise.all(this.content.children.map(function (obj) {
            return obj.getComponent('MegaJ_history_item');
        })).then(function (result) {
            _this.content = result;
        });

        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        if (!this.RedT.isSpin) {
            cc.RedT.send({ g: { megaj: { top: page } } });
        }
    },
    onData: function onData(data) {
        this.page.onSet(data.page, data.kmess, data.total);

        this.content.forEach(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.bg.active = i % 2;
                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.game.string = dataT.name;
                obj.kq.string = dataT.room === 100 ? 'Thanh đồng' : dataT.room === 100 ? 'Bạch kim' : 'Hoàng kim';
                obj.thuong.string = Helper.numberWithCommas(dataT.win);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxNZWdhSmFja3BvdC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWVnYUphY2twb3QvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXE1lZ2FKYWNrcG90XFxNZWdhSl90b3AuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsImluaXQiLCJvYmoiLCJSZWRUIiwib25Mb2FkIiwiaW5zdGFudGlhdGUiLCJ5Iiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwiUHJvbWlzZSIsImFsbCIsImNoaWxkcmVuIiwibWFwIiwidGhlbiIsInJlc3VsdCIsIm9uRW5hYmxlIiwiZ2V0X2RhdGEiLCJpc1NwaW4iLCJzZW5kIiwiZyIsIm1lZ2FqIiwidG9wIiwib25EYXRhIiwiZGF0YSIsIm9uU2V0Iiwia21lc3MiLCJ0b3RhbCIsImZvckVhY2giLCJpIiwiZGF0YVQiLCJhY3RpdmUiLCJiZyIsInRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwiZ2FtZSIsIm5hbWUiLCJrcSIsInJvb20iLCJ0aHVvbmciLCJudW1iZXJXaXRoQ29tbWFzIiwid2luIiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGNBQVNMLEdBQUdNLE1BREo7QUFFUkMsaUJBQVNQLEdBQUdRO0FBRkosS0FIUDtBQU9MQyxVQUFNLGNBQVNDLEdBQVQsRUFBYTtBQUNmLGFBQUtDLElBQUwsR0FBWUQsR0FBWjtBQUNILEtBVEk7QUFVTEUsVUFWSyxvQkFVSztBQUFBOztBQUNOLGFBQUtQLElBQUwsR0FBWUwsR0FBR2EsV0FBSCxDQUFlLEtBQUtSLElBQXBCLENBQVo7QUFDQSxhQUFLQSxJQUFMLENBQVVTLENBQVYsR0FBYyxDQUFDLEdBQWY7QUFDQSxhQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsS0FBS1gsSUFBeEI7QUFDQSxhQUFLQSxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVWSxZQUFWLENBQXVCLFlBQXZCLENBQVo7O0FBRUFDLGdCQUFRQyxHQUFSLENBQVksS0FBS1osT0FBTCxDQUFhYSxRQUFiLENBQXNCQyxHQUF0QixDQUEwQixVQUFTWCxHQUFULEVBQWE7QUFDL0MsbUJBQU9BLElBQUlPLFlBQUosQ0FBaUIsb0JBQWpCLENBQVA7QUFDSCxTQUZXLENBQVosRUFHQ0ssSUFIRCxDQUdNLGtCQUFVO0FBQ1osa0JBQUtmLE9BQUwsR0FBZWdCLE1BQWY7QUFDSCxTQUxEOztBQU9BLGFBQUtsQixJQUFMLENBQVVJLElBQVYsQ0FBZSxJQUFmO0FBQ0gsS0F4Qkk7O0FBeUJMZSxjQUFVLG9CQUFXO0FBQ2pCLGFBQUtDLFFBQUw7QUFDSCxLQTNCSTtBQTRCTEEsY0FBVSxvQkFBa0I7QUFBQSxZQUFUcEIsSUFBUyx1RUFBRixDQUFFOztBQUN4QixZQUFJLENBQUMsS0FBS00sSUFBTCxDQUFVZSxNQUFmLEVBQXVCO0FBQ25CMUIsZUFBR1csSUFBSCxDQUFRZ0IsSUFBUixDQUFhLEVBQUNDLEdBQUUsRUFBQ0MsT0FBTSxFQUFDQyxLQUFJekIsSUFBTCxFQUFQLEVBQUgsRUFBYjtBQUNIO0FBQ0osS0FoQ0k7QUFpQ0wwQixZQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDbEIsYUFBSzNCLElBQUwsQ0FBVTRCLEtBQVYsQ0FBZ0JELEtBQUszQixJQUFyQixFQUEyQjJCLEtBQUtFLEtBQWhDLEVBQXVDRixLQUFLRyxLQUE1Qzs7QUFFQSxhQUFLNUIsT0FBTCxDQUFhNkIsT0FBYixDQUFxQixVQUFTMUIsR0FBVCxFQUFjMkIsQ0FBZCxFQUFnQjtBQUNqQyxnQkFBSUMsUUFBUU4sS0FBS0EsSUFBTCxDQUFVSyxDQUFWLENBQVo7QUFDQSxnQkFBSSxLQUFLLENBQUwsS0FBV0MsS0FBZixFQUFzQjtBQUNsQjVCLG9CQUFJSyxJQUFKLENBQVN3QixNQUFULEdBQWtCLElBQWxCO0FBQ0E3QixvQkFBSThCLEVBQUosQ0FBT0QsTUFBUCxHQUFvQkYsSUFBRSxDQUF0QjtBQUNBM0Isb0JBQUkrQixJQUFKLENBQVNDLE1BQVQsR0FBb0I1QyxPQUFPNkMsbUJBQVAsQ0FBMkJMLE1BQU1HLElBQWpDLENBQXBCO0FBQ0EvQixvQkFBSWtDLElBQUosQ0FBU0YsTUFBVCxHQUFvQkosTUFBTU8sSUFBMUI7QUFDQW5DLG9CQUFJb0MsRUFBSixDQUFPSixNQUFQLEdBQW9CSixNQUFNUyxJQUFOLEtBQWUsR0FBZixHQUFxQixZQUFyQixHQUFxQ1QsTUFBTVMsSUFBTixLQUFlLEdBQWYsR0FBcUIsVUFBckIsR0FBa0MsV0FBM0Y7QUFDQXJDLG9CQUFJc0MsTUFBSixDQUFXTixNQUFYLEdBQW9CNUMsT0FBT21ELGdCQUFQLENBQXdCWCxNQUFNWSxHQUE5QixDQUFwQjtBQUNILGFBUEQsTUFPSztBQUNEeEMsb0JBQUlLLElBQUosQ0FBU3dCLE1BQVQsR0FBa0IsS0FBbEI7QUFDSDtBQUNKLFNBWm9CLENBWW5CWSxJQVptQixDQVlkLElBWmMsQ0FBckI7QUFhSDtBQWpESSxDQUFUIiwiZmlsZSI6Ik1lZ2FKX3RvcC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcTWVnYUphY2twb3QiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwYWdlOiAgICBjYy5QcmVmYWIsXHJcbiAgICAgICAgY29udGVudDogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZSk7XHJcbiAgICAgICAgdGhpcy5wYWdlLnkgPSAtMjQ1O1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGlzLnBhZ2UpO1xyXG4gICAgICAgIHRoaXMucGFnZSA9IHRoaXMucGFnZS5nZXRDb21wb25lbnQoJ1BhZ2luYXRpb24nKTtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmdldENvbXBvbmVudCgnTWVnYUpfaGlzdG9yeV9pdGVtJyk7XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50ID0gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2UuaW5pdCh0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5nZXRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIGdldF9kYXRhOiBmdW5jdGlvbihwYWdlID0gMSl7XHJcbiAgICAgICAgaWYgKCF0aGlzLlJlZFQuaXNTcGluKSB7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuc2VuZCh7Zzp7bWVnYWo6e3RvcDpwYWdlfX19KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB0aGlzLnBhZ2Uub25TZXQoZGF0YS5wYWdlLCBkYXRhLmttZXNzLCBkYXRhLnRvdGFsKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZW50LmZvckVhY2goZnVuY3Rpb24ob2JqLCBpKXtcclxuICAgICAgICAgICAgbGV0IGRhdGFUID0gZGF0YS5kYXRhW2ldO1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG9iai5iZy5hY3RpdmUgICAgID0gaSUyO1xyXG4gICAgICAgICAgICAgICAgb2JqLnRpbWUuc3RyaW5nICAgPSBIZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShkYXRhVC50aW1lKTtcclxuICAgICAgICAgICAgICAgIG9iai5nYW1lLnN0cmluZyAgID0gZGF0YVQubmFtZTtcclxuICAgICAgICAgICAgICAgIG9iai5rcS5zdHJpbmcgICAgID0gZGF0YVQucm9vbSA9PT0gMTAwID8gJ1RoYW5oIMSR4buTbmcnIDogKGRhdGFULnJvb20gPT09IDEwMCA/ICdC4bqhY2gga2ltJyA6ICdIb8Ogbmcga2ltJyk7XHJcbiAgICAgICAgICAgICAgICBvYmoudGh1b25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGFULndpbilcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19