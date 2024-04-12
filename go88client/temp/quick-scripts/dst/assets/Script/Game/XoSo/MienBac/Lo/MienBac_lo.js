
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/MienBac/Lo/MienBac_lo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95087LD6J9FGZx4jUkDcl1V', 'MienBac_lo');
// Script/Game/XoSo/MienBac/Lo/MienBac_lo.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        header: cc.Node,
        body: cc.Node
    },
    onLoad: function onLoad() {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxMb1xcTWllbkJhY19sby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFkZXIiLCJOb2RlIiwiYm9keSIsIm9uTG9hZCIsIm9uU2VsZWN0VHlwZSIsImV2ZW50IiwibmFtZSIsInRhcmdldCIsImNoaWxkcmVuIiwiZm9yRWFjaCIsIm9iaiIsInBhdXNlU3lzdGVtRXZlbnRzIiwib3BhY2l0eSIsInJlc3VtZVN5c3RlbUV2ZW50cyIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGdCQUFRTCxHQUFHTSxJQURIO0FBRVJDLGNBQVFQLEdBQUdNO0FBRkgsS0FIUDtBQU9MRSxVQVBLLG9CQU9LLENBQ1QsQ0FSSTs7QUFTTEMsa0JBQWMsc0JBQVNDLEtBQVQsRUFBZ0I7QUFDMUIsWUFBSUMsT0FBT0QsTUFBTUUsTUFBTixDQUFhRCxJQUF4QjtBQUNBLGFBQUtOLE1BQUwsQ0FBWVEsUUFBWixDQUFxQkMsT0FBckIsQ0FBNkIsVUFBU0MsR0FBVCxFQUFhO0FBQ3RDLGdCQUFJQSxJQUFJSixJQUFKLEtBQWFBLElBQWpCLEVBQXVCO0FBQ25CSSxvQkFBSUMsaUJBQUo7QUFDQUQsb0JBQUlFLE9BQUosR0FBYyxHQUFkO0FBQ0gsYUFIRCxNQUdLO0FBQ0RGLG9CQUFJRyxrQkFBSjtBQUNBSCxvQkFBSUUsT0FBSixHQUFjLEVBQWQ7QUFDSDtBQUNKLFNBUkQ7QUFTQSxhQUFLVixJQUFMLENBQVVNLFFBQVYsQ0FBbUJDLE9BQW5CLENBQTJCLFVBQVNDLEdBQVQsRUFBYTtBQUNwQyxnQkFBSUEsSUFBSUosSUFBSixLQUFhQSxJQUFqQixFQUF1QjtBQUNuQkksb0JBQUlJLE1BQUosR0FBYSxJQUFiO0FBQ0gsYUFGRCxNQUVLO0FBQ0RKLG9CQUFJSSxNQUFKLEdBQWEsS0FBYjtBQUNIO0FBQ0osU0FORDtBQU9IO0FBM0JJLENBQVQiLCJmaWxlIjoiTWllbkJhY19sby5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxMbyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhlYWRlcjogY2MuTm9kZSxcclxuICAgICAgICBib2R5OiAgIGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgIH0sXHJcbiAgICBvblNlbGVjdFR5cGU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICB0aGlzLmhlYWRlci5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgb2JqLnBhdXNlU3lzdGVtRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBvYmoub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmoucmVzdW1lU3lzdGVtRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICBvYmoub3BhY2l0eSA9IDk5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgaWYgKG9iai5uYW1lID09PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmouYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=