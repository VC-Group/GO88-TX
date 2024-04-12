
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/XoSo_Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '949d6KzSglCXrlqSMpvyQvX', 'XoSo_Main');
// Script/Game/XoSo/XoSo_Main.js

'use strict';

var History = require('XoSo_History');
var KetQua = require('XoSo_KetQua');

cc.Class({
    extends: cc.Component,

    properties: {
        right: cc.Node,
        History: History,
        KetQua: KetQua
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    showMain: function showMain() {
        this.right.children.forEach(function (obj) {
            if (obj.name === 'Main') {
                obj.active = true;
            } else {
                obj.active = false;
            }
        });
    },
    onHistoryClick: function onHistoryClick(event, name) {
        this.RedT.position = 'History';
        this.right.children.forEach(function (obj) {
            if (obj.name === 'History') {
                obj.active = true;
                obj.children.forEach(function (h) {
                    if (h.name === name) {
                        h.active = true;
                    } else {
                        h.active = false;
                    }
                });
            } else {
                obj.active = false;
            }
        });
    },
    onKetQuaClick: function onKetQuaClick(event, name) {
        this.RedT.position = 'KetQua';
        this.right.children.forEach(function (obj) {
            if (obj.name === 'KetQua') {
                obj.active = true;
                obj.children.forEach(function (h) {
                    if (h.name === name) {
                        h.active = true;
                    } else {
                        h.active = false;
                    }
                });
            } else {
                obj.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxYb1NvX01haW4uanMiXSwibmFtZXMiOlsiSGlzdG9yeSIsInJlcXVpcmUiLCJLZXRRdWEiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyaWdodCIsIk5vZGUiLCJpbml0Iiwib2JqIiwiUmVkVCIsInNob3dNYWluIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwibmFtZSIsImFjdGl2ZSIsIm9uSGlzdG9yeUNsaWNrIiwiZXZlbnQiLCJwb3NpdGlvbiIsImgiLCJvbktldFF1YUNsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVVDLFFBQVEsY0FBUixDQUFkO0FBQ0EsSUFBSUMsU0FBVUQsUUFBUSxhQUFSLENBQWQ7O0FBRUFFLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxlQUFTTCxHQUFHTSxJQURKO0FBRVJULGlCQUFTQSxPQUZEO0FBR1JFLGdCQUFTQTtBQUhELEtBSFA7QUFRTFEsVUFBTSxjQUFTQyxHQUFULEVBQWE7QUFDZixhQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDSCxLQVZJO0FBV0xFLGNBQVUsb0JBQVU7QUFDaEIsYUFBS0wsS0FBTCxDQUFXTSxRQUFYLENBQW9CQyxPQUFwQixDQUE0QixVQUFTSixHQUFULEVBQWE7QUFDckMsZ0JBQUlBLElBQUlLLElBQUosS0FBYSxNQUFqQixFQUF5QjtBQUNyQkwsb0JBQUlNLE1BQUosR0FBYSxJQUFiO0FBQ0gsYUFGRCxNQUVLO0FBQ0ROLG9CQUFJTSxNQUFKLEdBQWEsS0FBYjtBQUNIO0FBQ0osU0FORDtBQU9ILEtBbkJJO0FBb0JMQyxvQkFBZ0Isd0JBQVNDLEtBQVQsRUFBZ0JILElBQWhCLEVBQXNCO0FBQ2xDLGFBQUtKLElBQUwsQ0FBVVEsUUFBVixHQUFxQixTQUFyQjtBQUNBLGFBQUtaLEtBQUwsQ0FBV00sUUFBWCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBU0osR0FBVCxFQUFhO0FBQ3JDLGdCQUFJQSxJQUFJSyxJQUFKLEtBQWEsU0FBakIsRUFBNEI7QUFDeEJMLG9CQUFJTSxNQUFKLEdBQWEsSUFBYjtBQUNBTixvQkFBSUcsUUFBSixDQUFhQyxPQUFiLENBQXFCLFVBQVNNLENBQVQsRUFBVztBQUM1Qix3QkFBSUEsRUFBRUwsSUFBRixLQUFXQSxJQUFmLEVBQXFCO0FBQ2pCSywwQkFBRUosTUFBRixHQUFXLElBQVg7QUFDSCxxQkFGRCxNQUVLO0FBQ0RJLDBCQUFFSixNQUFGLEdBQVcsS0FBWDtBQUNIO0FBQ0osaUJBTkQ7QUFPSCxhQVRELE1BU0s7QUFDRE4sb0JBQUlNLE1BQUosR0FBYSxLQUFiO0FBQ0g7QUFDSixTQWJEO0FBY0gsS0FwQ0k7QUFxQ0xLLG1CQUFlLHVCQUFTSCxLQUFULEVBQWdCSCxJQUFoQixFQUFzQjtBQUNqQyxhQUFLSixJQUFMLENBQVVRLFFBQVYsR0FBcUIsUUFBckI7QUFDQSxhQUFLWixLQUFMLENBQVdNLFFBQVgsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQVNKLEdBQVQsRUFBYTtBQUNyQyxnQkFBSUEsSUFBSUssSUFBSixLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCTCxvQkFBSU0sTUFBSixHQUFhLElBQWI7QUFDQU4sb0JBQUlHLFFBQUosQ0FBYUMsT0FBYixDQUFxQixVQUFTTSxDQUFULEVBQVc7QUFDNUIsd0JBQUlBLEVBQUVMLElBQUYsS0FBV0EsSUFBZixFQUFxQjtBQUNqQkssMEJBQUVKLE1BQUYsR0FBVyxJQUFYO0FBQ0gscUJBRkQsTUFFSztBQUNESSwwQkFBRUosTUFBRixHQUFXLEtBQVg7QUFDSDtBQUNKLGlCQU5EO0FBT0gsYUFURCxNQVNLO0FBQ0ROLG9CQUFJTSxNQUFKLEdBQWEsS0FBYjtBQUNIO0FBQ0osU0FiRDtBQWNIO0FBckRJLENBQVQiLCJmaWxlIjoiWG9Tb19NYWluLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBIaXN0b3J5ID0gcmVxdWlyZSgnWG9Tb19IaXN0b3J5Jyk7XHJcbmxldCBLZXRRdWEgID0gcmVxdWlyZSgnWG9Tb19LZXRRdWEnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmlnaHQ6ICAgY2MuTm9kZSxcclxuICAgICAgICBIaXN0b3J5OiBIaXN0b3J5LFxyXG4gICAgICAgIEtldFF1YTogIEtldFF1YSxcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgIH0sXHJcbiAgICBzaG93TWFpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJpZ2h0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgaWYgKG9iai5uYW1lID09PSAnTWFpbicpIHtcclxuICAgICAgICAgICAgICAgIG9iai5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG9iai5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uSGlzdG9yeUNsaWNrOiBmdW5jdGlvbihldmVudCwgbmFtZSkge1xyXG4gICAgICAgIHRoaXMuUmVkVC5wb3NpdGlvbiA9ICdIaXN0b3J5JztcclxuICAgICAgICB0aGlzLnJpZ2h0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgaWYgKG9iai5uYW1lID09PSAnSGlzdG9yeScpIHtcclxuICAgICAgICAgICAgICAgIG9iai5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgb2JqLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oaCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGgubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGguYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25LZXRRdWFDbGljazogZnVuY3Rpb24oZXZlbnQsIG5hbWUpIHtcclxuICAgICAgICB0aGlzLlJlZFQucG9zaXRpb24gPSAnS2V0UXVhJztcclxuICAgICAgICB0aGlzLnJpZ2h0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgaWYgKG9iai5uYW1lID09PSAnS2V0UXVhJykge1xyXG4gICAgICAgICAgICAgICAgb2JqLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvYmouY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbihoKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaC5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGguYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmouYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=