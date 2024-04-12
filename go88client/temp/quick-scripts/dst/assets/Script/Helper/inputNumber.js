
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/inputNumber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b256eN/SStPwZz/lPd3MUDm', 'inputNumber');
// Script/Helper/inputNumber.js

"use strict";

var BrowserUtil = require('BrowserUtil');

cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var self = this;
        this.editbox = this.node.getComponent(cc.EditBox);
        this.onShift = false;
        this.eventKeyDown = function (e) {
            if (e.keyCode === 16) {
                self.onShift = true;
                e.preventDefault();
            }
            if (!self.onShift && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 189 || e.keyCode === 8 || e.keyCode === 13)) {} else {
                e.preventDefault();
            }
        };
        this.eventKeyUp = function (e) {
            if (e.keyCode === 16) {
                e.preventDefault();
                self.onShift = false;
            }
        };
    },

    onEnable: function onEnable() {
        cc.sys.isBrowser && this.addEventTT();
    },
    onDisable: function onDisable() {
        cc.sys.isBrowser && this.removeEventTT();
    },
    addEventTT: function addEventTT() {
        BrowserUtil.getHTMLElementByEditBox(this.editbox).addEventListener("keydown", this.eventKeyDown, !1);
        BrowserUtil.getHTMLElementByEditBox(this.editbox).addEventListener("keyup", this.eventKeyUp, !1);
    },
    removeEventTT: function removeEventTT() {
        BrowserUtil.getHTMLElementByEditBox(this.editbox).removeEventListener("keydown", this.eventKeyDown, !1);
        BrowserUtil.getHTMLElementByEditBox(this.editbox).removeEventListener("keyup", this.eventKeyUp, !1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcaW5wdXROdW1iZXIuanMiXSwibmFtZXMiOlsiQnJvd3NlclV0aWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic2VsZiIsImVkaXRib3giLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiRWRpdEJveCIsIm9uU2hpZnQiLCJldmVudEtleURvd24iLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwiZXZlbnRLZXlVcCIsIm9uRW5hYmxlIiwic3lzIiwiaXNCcm93c2VyIiwiYWRkRXZlbnRUVCIsIm9uRGlzYWJsZSIsInJlbW92ZUV2ZW50VFQiLCJnZXRIVE1MRWxlbWVudEJ5RWRpdEJveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLGNBQWNDLFFBQVEsYUFBUixDQUFsQjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZLEVBSFA7O0FBTUw7O0FBRUFDLFVBUkssb0JBUUs7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQSxhQUFLQyxPQUFMLEdBQWUsS0FBS0MsSUFBTCxDQUFVQyxZQUFWLENBQXVCVCxHQUFHVSxPQUExQixDQUFmO0FBQ0EsYUFBS0MsT0FBTCxHQUFlLEtBQWY7QUFDQSxhQUFLQyxZQUFMLEdBQW9CLFVBQVNDLENBQVQsRUFBWTtBQUM1QixnQkFBSUEsRUFBRUMsT0FBRixLQUFjLEVBQWxCLEVBQXNCO0FBQ2xCUixxQkFBS0ssT0FBTCxHQUFlLElBQWY7QUFDQUUsa0JBQUVFLGNBQUY7QUFDSDtBQUNELGdCQUFJLENBQUNULEtBQUtLLE9BQU4sS0FBbUJFLEVBQUVDLE9BQUYsSUFBYSxFQUFiLElBQW1CRCxFQUFFQyxPQUFGLElBQWEsRUFBakMsSUFDakJELEVBQUVDLE9BQUYsSUFBYSxFQUFiLElBQW1CRCxFQUFFQyxPQUFGLElBQWEsR0FEZixJQUVqQkQsRUFBRUMsT0FBRixJQUFhLEVBQWIsSUFBbUJELEVBQUVDLE9BQUYsSUFBYSxFQUZmLElBR2xCRCxFQUFFQyxPQUFGLEtBQWMsR0FISSxJQUlsQkQsRUFBRUMsT0FBRixLQUFjLEdBSkksSUFLbEJELEVBQUVDLE9BQUYsS0FBYyxHQUxJLElBTWxCRCxFQUFFQyxPQUFGLEtBQWMsQ0FOSSxJQU9sQkQsRUFBRUMsT0FBRixLQUFjLEVBUGQsQ0FBSixFQU91QixDQUN0QixDQVJELE1BUU87QUFDSEQsa0JBQUVFLGNBQUY7QUFDSDtBQUNKLFNBaEJEO0FBaUJBLGFBQUtDLFVBQUwsR0FBa0IsVUFBU0gsQ0FBVCxFQUFXO0FBQ3pCLGdCQUFJQSxFQUFFQyxPQUFGLEtBQWMsRUFBbEIsRUFBc0I7QUFDbEJELGtCQUFFRSxjQUFGO0FBQ0FULHFCQUFLSyxPQUFMLEdBQWUsS0FBZjtBQUNIO0FBQ0osU0FMRDtBQU1ILEtBbkNJOztBQW9DTE0sY0FBVSxvQkFBVztBQUNqQmpCLFdBQUdrQixHQUFILENBQU9DLFNBQVAsSUFBb0IsS0FBS0MsVUFBTCxFQUFwQjtBQUNILEtBdENJO0FBdUNMQyxlQUFXLHFCQUFXO0FBQ2xCckIsV0FBR2tCLEdBQUgsQ0FBT0MsU0FBUCxJQUFvQixLQUFLRyxhQUFMLEVBQXBCO0FBQ0gsS0F6Q0k7QUEwQ0xGLGdCQUFZLHNCQUFXO0FBQ25CdEIsb0JBQVl5Qix1QkFBWixDQUFvQyxLQUFLaEIsT0FBekMsRUFBa0RpQixnQkFBbEQsQ0FBbUUsU0FBbkUsRUFBOEUsS0FBS1osWUFBbkYsRUFBaUcsQ0FBQyxDQUFsRztBQUNBZCxvQkFBWXlCLHVCQUFaLENBQW9DLEtBQUtoQixPQUF6QyxFQUFrRGlCLGdCQUFsRCxDQUFtRSxPQUFuRSxFQUE4RSxLQUFLUixVQUFuRixFQUErRixDQUFDLENBQWhHO0FBQ0gsS0E3Q0k7QUE4Q0xNLG1CQUFlLHlCQUFXO0FBQ3RCeEIsb0JBQVl5Qix1QkFBWixDQUFvQyxLQUFLaEIsT0FBekMsRUFBa0RrQixtQkFBbEQsQ0FBc0UsU0FBdEUsRUFBaUYsS0FBS2IsWUFBdEYsRUFBb0csQ0FBQyxDQUFyRztBQUNBZCxvQkFBWXlCLHVCQUFaLENBQW9DLEtBQUtoQixPQUF6QyxFQUFrRGtCLG1CQUFsRCxDQUFzRSxPQUF0RSxFQUFpRixLQUFLVCxVQUF0RixFQUFrRyxDQUFDLENBQW5HO0FBQ0g7QUFqREksQ0FBVCIsImZpbGUiOiJpbnB1dE51bWJlci5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEJyb3dzZXJVdGlsID0gcmVxdWlyZSgnQnJvd3NlclV0aWwnKVxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXNcclxuICAgICAgICB0aGlzLmVkaXRib3ggPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpXHJcbiAgICAgICAgdGhpcy5vblNoaWZ0ID0gZmFsc2VcclxuICAgICAgICB0aGlzLmV2ZW50S2V5RG93biA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTYpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYub25TaGlmdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzZWxmLm9uU2hpZnQgJiYgKChlLmtleUNvZGUgPj0gNDggJiYgZS5rZXlDb2RlIDw9IDU3KSAgfHxcclxuICAgICAgICAgICAgICAgIChlLmtleUNvZGUgPj0gOTYgJiYgZS5rZXlDb2RlIDw9IDEwNSkgfHxcclxuICAgICAgICAgICAgICAgIChlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9IDQwKSB8fFxyXG4gICAgICAgICAgICAgICAgZS5rZXlDb2RlID09PSAxMDcgfHxcclxuICAgICAgICAgICAgICAgIGUua2V5Q29kZSA9PT0gMTA5IHx8XHJcbiAgICAgICAgICAgICAgICBlLmtleUNvZGUgPT09IDE4OSB8fFxyXG4gICAgICAgICAgICAgICAgZS5rZXlDb2RlID09PSA4IHx8XHJcbiAgICAgICAgICAgICAgICBlLmtleUNvZGUgPT09IDEzKSkge1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRLZXlVcCA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAxNikge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vblNoaWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5zeXMuaXNCcm93c2VyICYmIHRoaXMuYWRkRXZlbnRUVCgpXHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjYy5zeXMuaXNCcm93c2VyICYmIHRoaXMucmVtb3ZlRXZlbnRUVCgpXHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnRUVDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgQnJvd3NlclV0aWwuZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3godGhpcy5lZGl0Ym94KS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCB0aGlzLmV2ZW50S2V5RG93biwgITEpXHJcbiAgICAgICAgQnJvd3NlclV0aWwuZ2V0SFRNTEVsZW1lbnRCeUVkaXRCb3godGhpcy5lZGl0Ym94KS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgICB0aGlzLmV2ZW50S2V5VXAsICExKVxyXG4gICAgfSxcclxuICAgIHJlbW92ZUV2ZW50VFQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIEJyb3dzZXJVdGlsLmdldEhUTUxFbGVtZW50QnlFZGl0Qm94KHRoaXMuZWRpdGJveCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5ldmVudEtleURvd24sICExKVxyXG4gICAgICAgIEJyb3dzZXJVdGlsLmdldEhUTUxFbGVtZW50QnlFZGl0Qm94KHRoaXMuZWRpdGJveCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsICAgdGhpcy5ldmVudEtleVVwLCAhMSlcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=