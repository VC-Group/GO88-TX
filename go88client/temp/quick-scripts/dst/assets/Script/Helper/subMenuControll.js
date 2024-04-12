
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/subMenuControll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '84987GimdhLo67g4TdXG7dM', 'subMenuControll');
// Script/Helper/subMenuControll.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        items: {
            default: [],
            type: cc.Node
        },
        body: {
            default: [],
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        for (var index in this.items) {
            this.items[index] = this.items[index].getComponent('subMenuItem');
        }
    },

    onClickItem: function onClickItem(event) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                if (i.node == event.target) {
                    i.onSelect();
                } else {
                    i.offSelect();
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = this.body[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var b = _step2.value;

                if (b.name === event.target.name) {
                    b.active = true;
                } else {
                    b.active = false;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }

    // update (dt) {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcc3ViTWVudUNvbnRyb2xsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIml0ZW1zIiwiZGVmYXVsdCIsInR5cGUiLCJOb2RlIiwiYm9keSIsIm9uTG9hZCIsImluZGV4IiwiZ2V0Q29tcG9uZW50Iiwib25DbGlja0l0ZW0iLCJldmVudCIsImkiLCJub2RlIiwidGFyZ2V0Iiwib25TZWxlY3QiLCJvZmZTZWxlY3QiLCJiIiwibmFtZSIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGVBQU87QUFDSEMscUJBQVMsRUFETjtBQUVIQyxrQkFBTVAsR0FBR1E7QUFGTixTQURDO0FBS1JDLGNBQU07QUFDRkgscUJBQVMsRUFEUDtBQUVGQyxrQkFBTVAsR0FBR1E7QUFGUDtBQUxFLEtBSFA7O0FBY0w7O0FBRUFFLFVBaEJLLG9CQWdCSztBQUNOLGFBQUssSUFBSUMsS0FBVCxJQUFrQixLQUFLTixLQUF2QixFQUE4QjtBQUMxQixpQkFBS0EsS0FBTCxDQUFXTSxLQUFYLElBQW9CLEtBQUtOLEtBQUwsQ0FBV00sS0FBWCxFQUFrQkMsWUFBbEIsQ0FBK0IsYUFBL0IsQ0FBcEI7QUFDSDtBQUNKLEtBcEJJOztBQXFCTEMsaUJBQWEscUJBQVNDLEtBQVQsRUFBZ0I7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFDekIsaUNBQWMsS0FBS1QsS0FBbkIsOEhBQTBCO0FBQUEsb0JBQWpCVSxDQUFpQjs7QUFDdEIsb0JBQUlBLEVBQUVDLElBQUYsSUFBVUYsTUFBTUcsTUFBcEIsRUFBNEI7QUFDeEJGLHNCQUFFRyxRQUFGO0FBQ0gsaUJBRkQsTUFFSztBQUNESCxzQkFBRUksU0FBRjtBQUNIO0FBQ0o7QUFQd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFRekIsa0NBQWMsS0FBS1YsSUFBbkIsbUlBQXlCO0FBQUEsb0JBQWhCVyxDQUFnQjs7QUFDckIsb0JBQUlBLEVBQUVDLElBQUYsS0FBV1AsTUFBTUcsTUFBTixDQUFhSSxJQUE1QixFQUFrQztBQUM5QkQsc0JBQUVFLE1BQUYsR0FBVyxJQUFYO0FBQ0gsaUJBRkQsTUFFSztBQUNERixzQkFBRUUsTUFBRixHQUFXLEtBQVg7QUFDSDtBQUNKO0FBZHdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlNUI7O0FBRUQ7QUF0Q0ssQ0FBVCIsImZpbGUiOiJzdWJNZW51Q29udHJvbGwuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaXRlbXM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggaW4gdGhpcy5pdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IHRoaXMuaXRlbXNbaW5kZXhdLmdldENvbXBvbmVudCgnc3ViTWVudUl0ZW0nKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsaWNrSXRlbTogZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICBmb3IgKHZhciBpIG9mIHRoaXMuaXRlbXMpIHtcclxuICAgICAgICAgICAgaWYgKGkubm9kZSA9PSBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIGkub25TZWxlY3QoKVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGkub2ZmU2VsZWN0KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBiIG9mIHRoaXMuYm9keSkge1xyXG4gICAgICAgICAgICBpZiAoYi5uYW1lID09PSBldmVudC50YXJnZXQubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYi5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19