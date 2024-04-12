
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Candy/Candy_history/Candy_history.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '17e0aDFKYhBNoHw5YygdT+w', 'Candy_history');
// Script/Game/Candy/Candy_history/Candy_history.js

'use strict';

var Helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        page: cc.Prefab,
        content: cc.Node
    },
    onLoad: function onLoad() {
        var page = cc.instantiate(this.page);
        page.y = -278;
        this.node.addChild(page);
        this.page = page.getComponent('Pagination');
        this.content = this.content.children.map(function (obj) {
            return obj.getComponent('VQRed_history_item');
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { candy: { log: { page: page } } } });
    },
    onData: function onData(data) {
        this.page.onSet(data.page, data.kmess, data.total);
        this.content.forEach(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.time.string = Helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.id;
                obj.cuoc.string = Helper.numberWithCommas(dataT.bet);
                obj.line.string = dataT.kq + " Dòng";
                obj.win.string = Helper.numberWithCommas(dataT.win);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X2hpc3RvcnkvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcQ2FuZHlfaGlzdG9yeS9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X2hpc3RvcnlcXENhbmR5X2hpc3RvcnkuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJjb250ZW50IiwiTm9kZSIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiaW5pdCIsIm9uRW5hYmxlIiwiZ2V0X2RhdGEiLCJSZWRUIiwic2VuZCIsImciLCJjYW5keSIsImxvZyIsIm9uRGF0YSIsImRhdGEiLCJvblNldCIsImttZXNzIiwidG90YWwiLCJmb3JFYWNoIiwiaSIsImRhdGFUIiwiYWN0aXZlIiwidGltZSIsInN0cmluZyIsImdldFN0cmluZ0RhdGVCeVRpbWUiLCJwaGllbiIsImlkIiwiY3VvYyIsIm51bWJlcldpdGhDb21tYXMiLCJiZXQiLCJsaW5lIiwia3EiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxjQUFVTCxHQUFHTSxNQURMO0FBRVJDLGlCQUFVUCxHQUFHUTtBQUZMLEtBSFA7QUFPTEMsVUFQSyxvQkFPSztBQUNOLFlBQUlKLE9BQU9MLEdBQUdVLFdBQUgsQ0FBZSxLQUFLTCxJQUFwQixDQUFYO0FBQ0FBLGFBQUtNLENBQUwsR0FBUyxDQUFDLEdBQVY7QUFDQSxhQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJSLElBQW5CO0FBQ0EsYUFBS0EsSUFBTCxHQUFZQSxLQUFLUyxZQUFMLENBQWtCLFlBQWxCLENBQVo7QUFDQSxhQUFLUCxPQUFMLEdBQWUsS0FBS0EsT0FBTCxDQUFhUSxRQUFiLENBQXNCQyxHQUF0QixDQUEwQixVQUFTQyxHQUFULEVBQWE7QUFDbEQsbUJBQU9BLElBQUlILFlBQUosQ0FBaUIsb0JBQWpCLENBQVA7QUFDSCxTQUZjLENBQWY7QUFHQSxhQUFLVCxJQUFMLENBQVVhLElBQVYsQ0FBZSxJQUFmO0FBQ0gsS0FoQkk7O0FBaUJMQyxjQUFVLG9CQUFXO0FBQ2pCLGFBQUtDLFFBQUw7QUFDSCxLQW5CSTtBQW9CTEEsY0FBVSxvQkFBa0I7QUFBQSxZQUFUZixJQUFTLHVFQUFGLENBQUU7O0FBQ3hCTCxXQUFHcUIsSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxPQUFNLEVBQUNDLEtBQUksRUFBQ3BCLE1BQUtBLElBQU4sRUFBTCxFQUFQLEVBQUgsRUFBYjtBQUNILEtBdEJJO0FBdUJMcUIsWUFBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ2xCLGFBQUt0QixJQUFMLENBQVV1QixLQUFWLENBQWdCRCxLQUFLdEIsSUFBckIsRUFBMkJzQixLQUFLRSxLQUFoQyxFQUF1Q0YsS0FBS0csS0FBNUM7QUFDQSxhQUFLdkIsT0FBTCxDQUFhd0IsT0FBYixDQUFxQixVQUFTZCxHQUFULEVBQWNlLENBQWQsRUFBZ0I7QUFDakMsZ0JBQUlDLFFBQVFOLEtBQUtBLElBQUwsQ0FBVUssQ0FBVixDQUFaO0FBQ0EsZ0JBQUksS0FBSyxDQUFMLEtBQVdDLEtBQWYsRUFBc0I7QUFDbEJoQixvQkFBSUwsSUFBSixDQUFTc0IsTUFBVCxHQUFtQixJQUFuQjtBQUNBakIsb0JBQUlrQixJQUFKLENBQVNDLE1BQVQsR0FBbUJ0QyxPQUFPdUMsbUJBQVAsQ0FBMkJKLE1BQU1FLElBQWpDLENBQW5CO0FBQ0FsQixvQkFBSXFCLEtBQUosQ0FBVUYsTUFBVixHQUFtQkgsTUFBTU0sRUFBekI7QUFDQXRCLG9CQUFJdUIsSUFBSixDQUFTSixNQUFULEdBQW1CdEMsT0FBTzJDLGdCQUFQLENBQXdCUixNQUFNUyxHQUE5QixDQUFuQjtBQUNBekIsb0JBQUkwQixJQUFKLENBQVNQLE1BQVQsR0FBbUJILE1BQU1XLEVBQU4sR0FBVyxPQUE5QjtBQUNBM0Isb0JBQUk0QixHQUFKLENBQVFULE1BQVIsR0FBbUJ0QyxPQUFPMkMsZ0JBQVAsQ0FBd0JSLE1BQU1ZLEdBQTlCLENBQW5CO0FBQ0gsYUFQRCxNQU9LO0FBQ0Q1QixvQkFBSUwsSUFBSixDQUFTc0IsTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBQ0osU0FaRDtBQWFIO0FBdENJLENBQVQiLCJmaWxlIjoiQ2FuZHlfaGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhbmR5XFxDYW5keV9oaXN0b3J5Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcGFnZTogICAgIGNjLlByZWZhYixcclxuICAgICAgICBjb250ZW50OiAgY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCBwYWdlID0gY2MuaW5zdGFudGlhdGUodGhpcy5wYWdlKTtcclxuICAgICAgICBwYWdlLnkgPSAtMjc4O1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwYWdlKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSBwYWdlLmdldENvbXBvbmVudCgnUGFnaW5hdGlvbicpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuY29udGVudC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ1ZRUmVkX2hpc3RvcnlfaXRlbScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucGFnZS5pbml0KHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmdldF9kYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuICAgICAgICBjYy5SZWRULnNlbmQoe2c6e2NhbmR5Ontsb2c6e3BhZ2U6cGFnZX19fX0pO1xyXG4gICAgfSxcclxuICAgIG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdGhpcy5wYWdlLm9uU2V0KGRhdGEucGFnZSwgZGF0YS5rbWVzcywgZGF0YS50b3RhbCk7XHJcbiAgICAgICAgdGhpcy5jb250ZW50LmZvckVhY2goZnVuY3Rpb24ob2JqLCBpKXtcclxuICAgICAgICAgICAgbGV0IGRhdGFUID0gZGF0YS5kYXRhW2ldO1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwICE9PSBkYXRhVCkge1xyXG4gICAgICAgICAgICAgICAgb2JqLm5vZGUuYWN0aXZlICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmoudGltZS5zdHJpbmcgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcbiAgICAgICAgICAgICAgICBvYmoucGhpZW4uc3RyaW5nID0gZGF0YVQuaWQ7XHJcbiAgICAgICAgICAgICAgICBvYmouY3VvYy5zdHJpbmcgID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQuYmV0KTtcclxuICAgICAgICAgICAgICAgIG9iai5saW5lLnN0cmluZyAgPSBkYXRhVC5rcSArIFwiIETDsm5nXCI7XHJcbiAgICAgICAgICAgICAgICBvYmoud2luLnN0cmluZyAgID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQud2luKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmoubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==