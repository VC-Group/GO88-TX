
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/MienBac/XoSo_MienBac.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '479d04nY+1D8at8J2cAuNJP', 'XoSo_MienBac');
// Script/Game/XoSo/MienBac/XoSo_MienBac.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        header: cc.Node,
        body: cc.Node
    },
    onSelectType: function onSelectType(event) {
        var name = event.target.name;
        this.header.children.forEach(function (obj) {
            if (obj.name === name) {
                obj.pauseSystemEvents();
                obj.opacity = 255;
            } else {
                obj.resumeSystemEvents();
                obj.opacity = 99;
            }
        });
        this.body.children.forEach(function (obj) {
            if (obj.name === name) {
                obj.active = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhYy8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWMvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXFhvU29fTWllbkJhYy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFkZXIiLCJOb2RlIiwiYm9keSIsIm9uU2VsZWN0VHlwZSIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsIm9iaiIsInBhdXNlU3lzdGVtRXZlbnRzIiwib3BhY2l0eSIsInJlc3VtZVN5c3RlbUV2ZW50cyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1hDLGdCQUFRTCxHQUFHTSxJQURBO0FBRVhDLGNBQVFQLEdBQUdNO0FBRkEsS0FIUDtBQU9MRSxrQkFBYyxzQkFBU0MsS0FBVCxFQUFnQjtBQUM3QixZQUFJQyxPQUFPRCxNQUFNRSxNQUFOLENBQWFELElBQXhCO0FBQ0EsYUFBS0wsTUFBTCxDQUFZTyxRQUFaLENBQXFCQyxPQUFyQixDQUE2QixVQUFTQyxHQUFULEVBQWE7QUFDekMsZ0JBQUlBLElBQUlKLElBQUosS0FBYUEsSUFBakIsRUFBdUI7QUFDdEJJLG9CQUFJQyxpQkFBSjtBQUNBRCxvQkFBSUUsT0FBSixHQUFjLEdBQWQ7QUFDQSxhQUhELE1BR0s7QUFDSkYsb0JBQUlHLGtCQUFKO0FBQ0FILG9CQUFJRSxPQUFKLEdBQWMsRUFBZDtBQUNBO0FBQ0QsU0FSRDtBQVNBLGFBQUtULElBQUwsQ0FBVUssUUFBVixDQUFtQkMsT0FBbkIsQ0FBMkIsVUFBU0MsR0FBVCxFQUFhO0FBQ3ZDLGdCQUFJQSxJQUFJSixJQUFKLEtBQWFBLElBQWpCLEVBQXVCO0FBQ3RCSSxvQkFBSUksTUFBSixHQUFhLElBQWI7QUFDQSxhQUZELE1BRUs7QUFDSkosb0JBQUlJLE1BQUosR0FBYSxLQUFiO0FBQ0E7QUFDRCxTQU5EO0FBT0E7QUF6QkksQ0FBVCIsImZpbGUiOiJYb1NvX01pZW5CYWMuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHRoZWFkZXI6IGNjLk5vZGUsXHJcbiAgICBcdGJvZHk6ICAgY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdFR5cGU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBcdGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICBcdHRoaXMuaGVhZGVyLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuICAgIFx0XHRpZiAob2JqLm5hbWUgPT09IG5hbWUpIHtcclxuICAgIFx0XHRcdG9iai5wYXVzZVN5c3RlbUV2ZW50cygpO1xyXG4gICAgXHRcdFx0b2JqLm9wYWNpdHkgPSAyNTU7XHJcbiAgICBcdFx0fWVsc2V7XHJcbiAgICBcdFx0XHRvYmoucmVzdW1lU3lzdGVtRXZlbnRzKCk7XHJcbiAgICBcdFx0XHRvYmoub3BhY2l0eSA9IDk5O1xyXG4gICAgXHRcdH1cclxuICAgIFx0fSk7XHJcbiAgICBcdHRoaXMuYm9keS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcbiAgICBcdFx0aWYgKG9iai5uYW1lID09PSBuYW1lKSB7XHJcbiAgICBcdFx0XHRvYmouYWN0aXZlID0gdHJ1ZTtcclxuICAgIFx0XHR9ZWxzZXtcclxuICAgIFx0XHRcdG9iai5hY3RpdmUgPSBmYWxzZTtcclxuICAgIFx0XHR9XHJcbiAgICBcdH0pO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==