
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Notice/bgLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b29c3M7ShVDkKHKf+49LVQZ', 'bgLoading');
// Script/Model/Notice/bgLoading.js

'use strict';

cc.Class({
    extends: cc.Component,
    properties: {
        text: cc.Label
    },
    onDisable: function onDisable() {
        this.text.string = '';
    },
    onData: function onData(data) {
        if (void 0 !== data.active) {
            this.node.active = data.active;
        }
        if (void 0 !== data.text) {
            this.text.string = data.text;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTm90aWNlLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTm90aWNlL2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTm90aWNlXFxiZ0xvYWRpbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidGV4dCIsIkxhYmVsIiwib25EaXNhYmxlIiwic3RyaW5nIiwib25EYXRhIiwiZGF0YSIsImFjdGl2ZSIsIm5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1JDLGNBQU1MLEdBQUdNO0FBREQsS0FGUDtBQUtMQyxlQUFXLHFCQUFZO0FBQ25CLGFBQUtGLElBQUwsQ0FBVUcsTUFBVixHQUFtQixFQUFuQjtBQUNILEtBUEk7QUFRTEMsWUFBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ2xCLFlBQUksS0FBSyxDQUFMLEtBQVdBLEtBQUtDLE1BQXBCLEVBQTRCO0FBQ3hCLGlCQUFLQyxJQUFMLENBQVVELE1BQVYsR0FBbUJELEtBQUtDLE1BQXhCO0FBQ0g7QUFDRCxZQUFJLEtBQUssQ0FBTCxLQUFXRCxLQUFLTCxJQUFwQixFQUEwQjtBQUN0QixpQkFBS0EsSUFBTCxDQUFVRyxNQUFWLEdBQW1CRSxLQUFLTCxJQUF4QjtBQUNIO0FBQ0o7QUFmSSxDQUFUIiwiZmlsZSI6ImJnTG9hZGluZy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXE5vdGljZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGV4dDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9ICcnO1xyXG4gICAgfSxcclxuICAgIG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgaWYgKHZvaWQgMCAhPT0gZGF0YS5hY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGRhdGEuYWN0aXZlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodm9pZCAwICE9PSBkYXRhLnRleHQpIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0LnN0cmluZyA9IGRhdGEudGV4dDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19