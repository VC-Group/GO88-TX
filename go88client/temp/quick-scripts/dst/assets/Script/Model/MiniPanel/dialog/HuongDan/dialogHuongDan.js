
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/MiniPanel/dialog/HuongDan/dialogHuongDan.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '495d5jwe0pGBIw/joWKvc/9', 'dialogHuongDan');
// Script/Model/MiniPanel/dialog/HuongDan/dialogHuongDan.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        game: cc.Node,
        content: cc.Node
    },
    init: function init() {
        this.game = this.game.children.map(function (obj) {
            return obj.children[1].getComponent(cc.Label);
        });
    },
    selectGame: function selectGame(event, game) {
        this.select(game);
    },
    select: function select(game) {
        cc.RedT.audio.playClick();
        var self = this;
        this.game.forEach(function (obj) {
            var parent = obj.node.parent;
            if (parent.name == game) {
                parent.children[0].active = true;
                parent.pauseSystemEvents();
            } else {
                parent.children[0].active = false;
                parent.resumeSystemEvents();
            }
            return void 0;
        });

        this.content.children.forEach(function (obj) {
            if (obj.name == game) {
                obj.active = true;
            } else {
                obj.active = false;
            }
            return void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxNaW5pUGFuZWxcXGRpYWxvZ1xcSHVvbmdEYW4vLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXE1pbmlQYW5lbFxcZGlhbG9nXFxIdW9uZ0Rhbi9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXE1pbmlQYW5lbFxcZGlhbG9nXFxIdW9uZ0RhblxcZGlhbG9nSHVvbmdEYW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ2FtZSIsIk5vZGUiLCJjb250ZW50IiwiaW5pdCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJzZWxlY3RHYW1lIiwiZXZlbnQiLCJzZWxlY3QiLCJSZWRUIiwiYXVkaW8iLCJwbGF5Q2xpY2siLCJzZWxmIiwiZm9yRWFjaCIsInBhcmVudCIsIm5vZGUiLCJuYW1lIiwiYWN0aXZlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJyZXN1bWVTeXN0ZW1FdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNUQyxjQUFTTCxHQUFHTSxJQURIO0FBRVRDLGlCQUFTUCxHQUFHTTtBQUZILEtBSFA7QUFPTEUsVUFBTSxnQkFBVTtBQUNaLGFBQUtILElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVJLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQVNDLEdBQVQsRUFBYTtBQUM1QyxtQkFBT0EsSUFBSUYsUUFBSixDQUFhLENBQWIsRUFBZ0JHLFlBQWhCLENBQTZCWixHQUFHYSxLQUFoQyxDQUFQO0FBQ0gsU0FGVyxDQUFaO0FBR0gsS0FYSTtBQVlMQyxnQkFBWSxvQkFBU0MsS0FBVCxFQUFnQlYsSUFBaEIsRUFBc0I7QUFDOUIsYUFBS1csTUFBTCxDQUFZWCxJQUFaO0FBQ0gsS0FkSTtBQWVMVyxZQUFRLGdCQUFTWCxJQUFULEVBQWU7QUFDbkJMLFdBQUdpQixJQUFILENBQVFDLEtBQVIsQ0FBY0MsU0FBZDtBQUNBLFlBQUlDLE9BQU8sSUFBWDtBQUNBLGFBQUtmLElBQUwsQ0FBVWdCLE9BQVYsQ0FBa0IsVUFBU1YsR0FBVCxFQUFhO0FBQzNCLGdCQUFJVyxTQUFTWCxJQUFJWSxJQUFKLENBQVNELE1BQXRCO0FBQ0EsZ0JBQUlBLE9BQU9FLElBQVAsSUFBZW5CLElBQW5CLEVBQXlCO0FBQ3JCaUIsdUJBQU9iLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJnQixNQUFuQixHQUE0QixJQUE1QjtBQUNBSCx1QkFBT0ksaUJBQVA7QUFDSCxhQUhELE1BR0s7QUFDREosdUJBQU9iLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJnQixNQUFuQixHQUE0QixLQUE1QjtBQUNBSCx1QkFBT0ssa0JBQVA7QUFDSDtBQUNELG1CQUFPLEtBQUssQ0FBWjtBQUNILFNBVkQ7O0FBWUEsYUFBS3BCLE9BQUwsQ0FBYUUsUUFBYixDQUFzQlksT0FBdEIsQ0FBOEIsVUFBU1YsR0FBVCxFQUFhO0FBQ3ZDLGdCQUFJQSxJQUFJYSxJQUFKLElBQVluQixJQUFoQixFQUFzQjtBQUNsQk0sb0JBQUljLE1BQUosR0FBYSxJQUFiO0FBQ0gsYUFGRCxNQUVLO0FBQ0RkLG9CQUFJYyxNQUFKLEdBQWEsS0FBYjtBQUNIO0FBQ0QsbUJBQU8sS0FBSyxDQUFaO0FBQ0gsU0FQRDtBQVFIO0FBdENJLENBQVQiLCJmaWxlIjoiZGlhbG9nSHVvbmdEYW4uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXE1pbmlQYW5lbFxcZGlhbG9nXFxIdW9uZ0RhbiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgZ2FtZTogICAgY2MuTm9kZSxcclxuICAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmdhbWUgPSB0aGlzLmdhbWUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmouY2hpbGRyZW5bMV0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZWxlY3RHYW1lOiBmdW5jdGlvbihldmVudCwgZ2FtZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0KGdhbWUpXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiBmdW5jdGlvbihnYW1lKSB7XHJcbiAgICAgICAgY2MuUmVkVC5hdWRpby5wbGF5Q2xpY2soKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5nYW1lLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICAgICAgdmFyIHBhcmVudCA9IG9iai5ub2RlLnBhcmVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudC5uYW1lID09IGdhbWUpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnBhdXNlU3lzdGVtRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LnJlc3VtZVN5c3RlbUV2ZW50cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSBnYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBvYmouYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBvYmouYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHZvaWQgMDtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=