
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/NapRed/NapRed_itemOne.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bf1do9lYJMTYqfuawCCr7t', 'NapRed_itemOne');
// Script/Model/Dialog/Shop/NapRed/NapRed_itemOne.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        background: {
            default: null,
            type: cc.Node
        },
        text: {
            default: null,
            type: cc.Label
        }
    },

    init: function init(obj, i_arg, i_text) {
        var fclick = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        this.controll = obj;
        this.local_arg = i_arg;
        this.local_text = i_text;
        fclick !== null && (this.local_click = fclick);
    },
    onClickChanger: function onClickChanger() {
        cc.RedT.audio.playClick();
        this.controll[this.local_text].string = this.text.string;
        this.controll[this.local_arg].forEach(function (obj) {
            if (obj === this) {
                obj.onSelect();
            } else {
                obj.unSelect();
            }
        }.bind(this));
        if (!!this.controll.backT) {
            this.controll.backT(this.data);
        }
        if (this.local_click !== void 0) {
            this.controll[this.local_click](this);
        }
    },
    onSelect: function onSelect() {
        this.background.active = true;
        this.node.pauseSystemEvents();
    },
    unSelect: function unSelect() {
        this.background.active = false;
        this.node.resumeSystemEvents();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXE5hcFJlZC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxOYXBSZWQvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXE5hcFJlZFxcTmFwUmVkX2l0ZW1PbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJ0eXBlIiwiTm9kZSIsInRleHQiLCJMYWJlbCIsImluaXQiLCJvYmoiLCJpX2FyZyIsImlfdGV4dCIsImZjbGljayIsImNvbnRyb2xsIiwibG9jYWxfYXJnIiwibG9jYWxfdGV4dCIsImxvY2FsX2NsaWNrIiwib25DbGlja0NoYW5nZXIiLCJSZWRUIiwiYXVkaW8iLCJwbGF5Q2xpY2siLCJzdHJpbmciLCJmb3JFYWNoIiwib25TZWxlY3QiLCJ1blNlbGVjdCIsImJpbmQiLCJiYWNrVCIsImRhdGEiLCJhY3RpdmUiLCJub2RlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJyZXN1bWVTeXN0ZW1FdmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNYQyxvQkFBWTtBQUNMQyxxQkFBUyxJQURKO0FBRUxDLGtCQUFNUCxHQUFHUTtBQUZKLFNBREQ7QUFLUkMsY0FBTTtBQUNGSCxxQkFBUyxJQURQO0FBRUZDLGtCQUFNUCxHQUFHVTtBQUZQO0FBTEUsS0FIUDs7QUFjTEMsVUFBSyxjQUFTQyxHQUFULEVBQWNDLEtBQWQsRUFBcUJDLE1BQXJCLEVBQTRDO0FBQUEsWUFBZkMsTUFBZSx1RUFBTixJQUFNOztBQUNoRCxhQUFLQyxRQUFMLEdBQWtCSixHQUFsQjtBQUNBLGFBQUtLLFNBQUwsR0FBa0JKLEtBQWxCO0FBQ0EsYUFBS0ssVUFBTCxHQUFrQkosTUFBbEI7QUFDR0MsbUJBQVcsSUFBWCxLQUFvQixLQUFLSSxXQUFMLEdBQW1CSixNQUF2QztBQUNILEtBbkJJO0FBb0JMSyxvQkFBZ0IsMEJBQVU7QUFDekJwQixXQUFHcUIsSUFBSCxDQUFRQyxLQUFSLENBQWNDLFNBQWQ7QUFDQSxhQUFLUCxRQUFMLENBQWMsS0FBS0UsVUFBbkIsRUFBK0JNLE1BQS9CLEdBQXdDLEtBQUtmLElBQUwsQ0FBVWUsTUFBbEQ7QUFDQSxhQUFLUixRQUFMLENBQWMsS0FBS0MsU0FBbkIsRUFBOEJRLE9BQTlCLENBQXNDLFVBQVNiLEdBQVQsRUFBYTtBQUNsRCxnQkFBSUEsUUFBUSxJQUFaLEVBQWtCO0FBQ2pCQSxvQkFBSWMsUUFBSjtBQUNBLGFBRkQsTUFFSztBQUNKZCxvQkFBSWUsUUFBSjtBQUNBO0FBQ0QsU0FOcUMsQ0FNcENDLElBTm9DLENBTS9CLElBTitCLENBQXRDO0FBT0csWUFBSSxDQUFDLENBQUMsS0FBS1osUUFBTCxDQUFjYSxLQUFwQixFQUEyQjtBQUN2QixpQkFBS2IsUUFBTCxDQUFjYSxLQUFkLENBQW9CLEtBQUtDLElBQXpCO0FBQ0g7QUFDRCxZQUFJLEtBQUtYLFdBQUwsS0FBcUIsS0FBSyxDQUE5QixFQUFpQztBQUM3QixpQkFBS0gsUUFBTCxDQUFjLEtBQUtHLFdBQW5CLEVBQWdDLElBQWhDO0FBQ0g7QUFDSixLQXBDSTtBQXFDTE8sY0FBVSxvQkFBVTtBQUNoQixhQUFLckIsVUFBTCxDQUFnQjBCLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0gsYUFBS0MsSUFBTCxDQUFVQyxpQkFBVjtBQUNBLEtBeENJO0FBeUNMTixjQUFVLG9CQUFVO0FBQ2hCLGFBQUt0QixVQUFMLENBQWdCMEIsTUFBaEIsR0FBeUIsS0FBekI7QUFDSCxhQUFLQyxJQUFMLENBQVVFLGtCQUFWO0FBQ0E7QUE1Q0ksQ0FBVCIsImZpbGUiOiJOYXBSZWRfaXRlbU9uZS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxOYXBSZWQiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIFx0YmFja2dyb3VuZDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGV4dDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBpbml0OmZ1bmN0aW9uKG9iaiwgaV9hcmcsIGlfdGV4dCwgZmNsaWNrID0gbnVsbCkge1xyXG4gICAgXHR0aGlzLmNvbnRyb2xsICAgPSBvYmo7XHJcbiAgICBcdHRoaXMubG9jYWxfYXJnICA9IGlfYXJnO1xyXG4gICAgXHR0aGlzLmxvY2FsX3RleHQgPSBpX3RleHQ7XHJcbiAgICAgICAgZmNsaWNrICE9PSBudWxsICYmICh0aGlzLmxvY2FsX2NsaWNrID0gZmNsaWNrKVxyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tDaGFuZ2VyOiBmdW5jdGlvbigpe1xyXG4gICAgXHRjYy5SZWRULmF1ZGlvLnBsYXlDbGljaygpO1xyXG4gICAgXHR0aGlzLmNvbnRyb2xsW3RoaXMubG9jYWxfdGV4dF0uc3RyaW5nID0gdGhpcy50ZXh0LnN0cmluZztcclxuICAgIFx0dGhpcy5jb250cm9sbFt0aGlzLmxvY2FsX2FyZ10uZm9yRWFjaChmdW5jdGlvbihvYmope1xyXG4gICAgXHRcdGlmIChvYmogPT09IHRoaXMpIHtcclxuICAgIFx0XHRcdG9iai5vblNlbGVjdCgpXHJcbiAgICBcdFx0fWVsc2V7XHJcbiAgICBcdFx0XHRvYmoudW5TZWxlY3QoKVxyXG4gICAgXHRcdH1cclxuICAgIFx0fS5iaW5kKHRoaXMpKTtcclxuICAgICAgICBpZiAoISF0aGlzLmNvbnRyb2xsLmJhY2tUKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbGwuYmFja1QodGhpcy5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubG9jYWxfY2xpY2sgIT09IHZvaWQgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xsW3RoaXMubG9jYWxfY2xpY2tdKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvblNlbGVjdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQuYWN0aXZlID0gdHJ1ZTtcclxuICAgIFx0dGhpcy5ub2RlLnBhdXNlU3lzdGVtRXZlbnRzKCk7XHJcbiAgICB9LFxyXG4gICAgdW5TZWxlY3Q6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgXHR0aGlzLm5vZGUucmVzdW1lU3lzdGVtRXZlbnRzKCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19