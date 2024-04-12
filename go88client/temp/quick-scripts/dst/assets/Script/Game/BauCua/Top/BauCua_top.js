
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BauCua/Top/BauCua_top.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6692a+IWv5GELCMBYie/TgO', 'BauCua_top');
// Script/Game/BauCua/Top/BauCua_top.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        item: cc.Prefab,
        content: cc.Node
    },
    init: function init(obj) {
        this.RedT = obj;
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { baucua: { tops: true } } });
    },
    onData: function onData(data) {
        this.content.destroyAllChildren();
        data.forEach(function (obj, index) {
            var item = cc.instantiate(this.item);
            item = item.getComponent('BauCua_top_item');
            item.stt.string = index + 1;
            item.nick.string = obj.name;
            item.win.string = helper.numberWithCommas(obj.bet);
            item.node.children[0].active = index % 2;
            this.content.addChild(item.node);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmF1Q3VhXFxUb3AvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYXVDdWFcXFRvcC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQmF1Q3VhXFxUb3BcXEJhdUN1YV90b3AuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW0iLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsImluaXQiLCJvYmoiLCJSZWRUIiwib25FbmFibGUiLCJnZXRfZGF0YSIsInBhZ2UiLCJzZW5kIiwiZyIsImJhdWN1YSIsInRvcHMiLCJvbkRhdGEiLCJkYXRhIiwiZGVzdHJveUFsbENoaWxkcmVuIiwiZm9yRWFjaCIsImluZGV4IiwiaW5zdGFudGlhdGUiLCJnZXRDb21wb25lbnQiLCJzdHQiLCJzdHJpbmciLCJuaWNrIiwibmFtZSIsIndpbiIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJhZGRDaGlsZCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1JDLGNBQVVMLEdBQUdNLE1BREw7QUFFUkMsaUJBQVVQLEdBQUdRO0FBRkwsS0FGUDtBQU1MQyxRQU5LLGdCQU1BQyxHQU5BLEVBTUk7QUFDTCxhQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDSCxLQVJJOztBQVNMRSxjQUFVLG9CQUFXO0FBQ2pCLGFBQUtDLFFBQUw7QUFDSCxLQVhJO0FBWUxBLGNBQVUsb0JBQWtCO0FBQUEsWUFBVEMsSUFBUyx1RUFBRixDQUFFOztBQUN4QmQsV0FBR1csSUFBSCxDQUFRSSxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxRQUFPLEVBQUNDLE1BQUssSUFBTixFQUFSLEVBQUgsRUFBYjtBQUNILEtBZEk7QUFlTEMsWUFBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ2xCLGFBQUtiLE9BQUwsQ0FBYWMsa0JBQWI7QUFDQUQsYUFBS0UsT0FBTCxDQUFhLFVBQVNaLEdBQVQsRUFBY2EsS0FBZCxFQUFvQjtBQUM3QixnQkFBSWxCLE9BQU9MLEdBQUd3QixXQUFILENBQWUsS0FBS25CLElBQXBCLENBQVg7QUFDQUEsbUJBQU9BLEtBQUtvQixZQUFMLENBQWtCLGlCQUFsQixDQUFQO0FBQ0FwQixpQkFBS3FCLEdBQUwsQ0FBU0MsTUFBVCxHQUFtQkosUUFBTSxDQUF6QjtBQUNBbEIsaUJBQUt1QixJQUFMLENBQVVELE1BQVYsR0FBbUJqQixJQUFJbUIsSUFBdkI7QUFDQXhCLGlCQUFLeUIsR0FBTCxDQUFTSCxNQUFULEdBQW1CN0IsT0FBT2lDLGdCQUFQLENBQXdCckIsSUFBSXNCLEdBQTVCLENBQW5CO0FBQ0EzQixpQkFBSzRCLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0JaLFFBQU0sQ0FBckM7QUFDQSxpQkFBS2hCLE9BQUwsQ0FBYTZCLFFBQWIsQ0FBc0IvQixLQUFLNEIsSUFBM0I7QUFDSCxTQVJZLENBUVhJLElBUlcsQ0FRTixJQVJNLENBQWI7QUFTSDtBQTFCSSxDQUFUIiwiZmlsZSI6IkJhdUN1YV90b3AuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYXVDdWFcXFRvcCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXRlbTogICAgIGNjLlByZWZhYixcclxuICAgICAgICBjb250ZW50OiAgY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBpbml0KG9iail7XHJcbiAgICAgICAgdGhpcy5SZWRUID0gb2JqO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldF9kYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2c6e2JhdWN1YTp7dG9wczp0cnVlfX19KTtcclxuICAgIH0sXHJcbiAgICBvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtKTtcclxuICAgICAgICAgICAgaXRlbSA9IGl0ZW0uZ2V0Q29tcG9uZW50KCdCYXVDdWFfdG9wX2l0ZW0nKTtcclxuICAgICAgICAgICAgaXRlbS5zdHQuc3RyaW5nICA9IGluZGV4KzE7XHJcbiAgICAgICAgICAgIGl0ZW0ubmljay5zdHJpbmcgPSBvYmoubmFtZTtcclxuICAgICAgICAgICAgaXRlbS53aW4uc3RyaW5nICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai5iZXQpO1xyXG4gICAgICAgICAgICBpdGVtLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gaW5kZXglMjtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0ubm9kZSk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=