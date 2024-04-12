
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XocXoc/XocXoc_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4aaeEmL4tMTYKZKZDHN9hV', 'XocXoc_dialog');
// Script/Game/XocXoc/XocXoc_dialog.js

'use strict';

var history = require('XocXoc_history');
var top = require('XocXoc_top');

cc.Class({
    extends: cc.Component,

    properties: {
        history: history,
        top: top
    },

    init: function init() {
        this.actionShow = cc.spawn(cc.scaleTo(0.5, 1).easing(cc.easeBackOut(2.5)), cc.fadeTo(0.5, 255));
        this.objShow = null;
        this.objTmp = null;
    },

    onClickBack: function onClickBack() {
        cc.RedT.audio.playUnClick();
        this.onBack();
    },
    onBack: function onBack() {
        if (this.objShow != null) {
            if (void 0 == this.objShow.previous || null == this.objShow.previous) {
                this.objShow.active = false;
                this.node.active = false;
                this.objShow = null;
            } else {
                this.objTmp = this.objShow;
                this.objShow = this.objShow.previous;
                this.objTmp.previous = null;
                this.objTmp.active = false;
                this.objShow.active = true;
                this.objTmp = null;
            }
        } else {
            this.node.active = false;
        }
    },
    onClosePrevious: function onClosePrevious(obj) {
        if (void 0 !== obj.previous && null !== obj.previous) {
            this.onClosePrevious(obj.previous);
            delete obj.previous;
            //obj.previous = null;
        }
        obj.active = false;
    },
    onCloseDialog: function onCloseDialog() {
        if (this.objShow != null) {
            if (void 0 == this.objShow.previous || null == this.objShow.previous) {
                this.objShow.active = this.node.active = false;
                this.objShow = null;
            } else {
                this.onClosePrevious(this.objShow.previous);
                this.objShow.active = this.node.active = false;
                delete this.objShow.previous;
                //this.objShow.previous        = null;
                this.objShow = null;
            }
        } else {
            this.node.active = false;
        }
    },

    resetSizeDialog: function resetSizeDialog(node) {
        node.stopAllActions();
        node.scale = 0.5;
        node.opacity = 0;
    },

    /**
     * Function Show Dialog
    */
    showHistory: function showHistory() {
        this.node.active = this.history.node.active = true;
        this.objShow = this.history.node;
    },
    showTop: function showTop() {
        this.node.active = this.top.node.active = true;
        this.objShow = this.top.node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb2NYb2MvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvY1hvYy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9jWG9jXFxYb2NYb2NfZGlhbG9nLmpzIl0sIm5hbWVzIjpbImhpc3RvcnkiLCJyZXF1aXJlIiwidG9wIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdCIsImFjdGlvblNob3ciLCJzcGF3biIsInNjYWxlVG8iLCJlYXNpbmciLCJlYXNlQmFja091dCIsImZhZGVUbyIsIm9ialNob3ciLCJvYmpUbXAiLCJvbkNsaWNrQmFjayIsIlJlZFQiLCJhdWRpbyIsInBsYXlVbkNsaWNrIiwib25CYWNrIiwicHJldmlvdXMiLCJhY3RpdmUiLCJub2RlIiwib25DbG9zZVByZXZpb3VzIiwib2JqIiwib25DbG9zZURpYWxvZyIsInJlc2V0U2l6ZURpYWxvZyIsInN0b3BBbGxBY3Rpb25zIiwic2NhbGUiLCJvcGFjaXR5Iiwic2hvd0hpc3RvcnkiLCJzaG93VG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVVDLFFBQVEsZ0JBQVIsQ0FBZDtBQUNBLElBQUlDLE1BQVVELFFBQVEsWUFBUixDQUFkOztBQUVBRSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUlAsaUJBQVNBLE9BREQ7QUFFUkUsYUFBU0E7QUFGRCxLQUhQOztBQVFMTSxVQUFNLGdCQUFXO0FBQ2IsYUFBS0MsVUFBTCxHQUFrQk4sR0FBR08sS0FBSCxDQUFTUCxHQUFHUSxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixFQUFtQkMsTUFBbkIsQ0FBMEJULEdBQUdVLFdBQUgsQ0FBZSxHQUFmLENBQTFCLENBQVQsRUFBeURWLEdBQUdXLE1BQUgsQ0FBVSxHQUFWLEVBQWUsR0FBZixDQUF6RCxDQUFsQjtBQUNBLGFBQUtDLE9BQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLQyxNQUFMLEdBQWtCLElBQWxCO0FBQ0gsS0FaSTs7QUFjTEMsaUJBQWEsdUJBQVU7QUFDbkJkLFdBQUdlLElBQUgsQ0FBUUMsS0FBUixDQUFjQyxXQUFkO0FBQ0EsYUFBS0MsTUFBTDtBQUNILEtBakJJO0FBa0JMQSxZQUFRLGtCQUFVO0FBQ2QsWUFBRyxLQUFLTixPQUFMLElBQWdCLElBQW5CLEVBQXdCO0FBQ3BCLGdCQUFHLEtBQUssQ0FBTCxJQUFVLEtBQUtBLE9BQUwsQ0FBYU8sUUFBdkIsSUFBbUMsUUFBUSxLQUFLUCxPQUFMLENBQWFPLFFBQTNELEVBQW9FO0FBQ2hFLHFCQUFLUCxPQUFMLENBQWFRLE1BQWIsR0FBc0IsS0FBdEI7QUFDQSxxQkFBS0MsSUFBTCxDQUFVRCxNQUFWLEdBQXNCLEtBQXRCO0FBQ0EscUJBQUtSLE9BQUwsR0FBc0IsSUFBdEI7QUFDSCxhQUpELE1BSUs7QUFDRCxxQkFBS0MsTUFBTCxHQUEyQixLQUFLRCxPQUFoQztBQUNBLHFCQUFLQSxPQUFMLEdBQTJCLEtBQUtBLE9BQUwsQ0FBYU8sUUFBeEM7QUFDQSxxQkFBS04sTUFBTCxDQUFZTSxRQUFaLEdBQTJCLElBQTNCO0FBQ0EscUJBQUtOLE1BQUwsQ0FBWU8sTUFBWixHQUEyQixLQUEzQjtBQUNBLHFCQUFLUixPQUFMLENBQWFRLE1BQWIsR0FBMkIsSUFBM0I7QUFDQSxxQkFBS1AsTUFBTCxHQUEyQixJQUEzQjtBQUNIO0FBQ0osU0FiRCxNQWFLO0FBQ0QsaUJBQUtRLElBQUwsQ0FBVUQsTUFBVixHQUFtQixLQUFuQjtBQUNIO0FBQ0osS0FuQ0k7QUFvQ0xFLHFCQUFpQix5QkFBU0MsR0FBVCxFQUFhO0FBQzFCLFlBQUcsS0FBSyxDQUFMLEtBQVdBLElBQUlKLFFBQWYsSUFBMkIsU0FBU0ksSUFBSUosUUFBM0MsRUFBb0Q7QUFDaEQsaUJBQUtHLGVBQUwsQ0FBcUJDLElBQUlKLFFBQXpCO0FBQ0EsbUJBQU9JLElBQUlKLFFBQVg7QUFDQTtBQUNIO0FBQ0RJLFlBQUlILE1BQUosR0FBYSxLQUFiO0FBQ0gsS0EzQ0k7QUE0Q0xJLG1CQUFlLHlCQUFVO0FBQ3JCLFlBQUcsS0FBS1osT0FBTCxJQUFnQixJQUFuQixFQUF3QjtBQUNwQixnQkFBRyxLQUFLLENBQUwsSUFBVSxLQUFLQSxPQUFMLENBQWFPLFFBQXZCLElBQW1DLFFBQVEsS0FBS1AsT0FBTCxDQUFhTyxRQUEzRCxFQUFvRTtBQUNoRSxxQkFBS1AsT0FBTCxDQUFhUSxNQUFiLEdBQXNCLEtBQUtDLElBQUwsQ0FBVUQsTUFBVixHQUFtQixLQUF6QztBQUNBLHFCQUFLUixPQUFMLEdBQXNCLElBQXRCO0FBQ0gsYUFIRCxNQUdLO0FBQ0QscUJBQUtVLGVBQUwsQ0FBcUIsS0FBS1YsT0FBTCxDQUFhTyxRQUFsQztBQUNBLHFCQUFLUCxPQUFMLENBQWFRLE1BQWIsR0FBK0IsS0FBS0MsSUFBTCxDQUFVRCxNQUFWLEdBQW1CLEtBQWxEO0FBQ0EsdUJBQU8sS0FBS1IsT0FBTCxDQUFhTyxRQUFwQjtBQUNBO0FBQ0EscUJBQUtQLE9BQUwsR0FBK0IsSUFBL0I7QUFDSDtBQUNKLFNBWEQsTUFXSztBQUNELGlCQUFLUyxJQUFMLENBQVVELE1BQVYsR0FBbUIsS0FBbkI7QUFDSDtBQUNKLEtBM0RJOztBQTZETEsscUJBQWlCLHlCQUFTSixJQUFULEVBQWM7QUFDM0JBLGFBQUtLLGNBQUw7QUFDQUwsYUFBS00sS0FBTCxHQUFlLEdBQWY7QUFDQU4sYUFBS08sT0FBTCxHQUFlLENBQWY7QUFDSCxLQWpFSTs7QUFtRUw7OztBQUdBQyxpQkFBYSx1QkFBVTtBQUNuQixhQUFLUixJQUFMLENBQVVELE1BQVYsR0FBc0IsS0FBS3ZCLE9BQUwsQ0FBYXdCLElBQWIsQ0FBa0JELE1BQWxCLEdBQTJCLElBQWpEO0FBQ0EsYUFBS1IsT0FBTCxHQUFzQixLQUFLZixPQUFMLENBQWF3QixJQUFuQztBQUNILEtBekVJO0FBMEVMUyxhQUFTLG1CQUFVO0FBQ2YsYUFBS1QsSUFBTCxDQUFVRCxNQUFWLEdBQW1CLEtBQUtyQixHQUFMLENBQVNzQixJQUFULENBQWNELE1BQWQsR0FBdUIsSUFBMUM7QUFDQSxhQUFLUixPQUFMLEdBQW1CLEtBQUtiLEdBQUwsQ0FBU3NCLElBQTVCO0FBQ0g7QUE3RUksQ0FBVCIsImZpbGUiOiJYb2NYb2NfZGlhbG9nLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb2NYb2MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxubGV0IGhpc3RvcnkgPSByZXF1aXJlKCdYb2NYb2NfaGlzdG9yeScpO1xyXG5sZXQgdG9wICAgICA9IHJlcXVpcmUoJ1hvY1hvY190b3AnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGlzdG9yeTogaGlzdG9yeSxcclxuICAgICAgICB0b3A6ICAgICB0b3AsXHJcbiAgICB9LFxyXG5cclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWN0aW9uU2hvdyA9IGNjLnNwYXduKGNjLnNjYWxlVG8oMC41LCAxKS5lYXNpbmcoY2MuZWFzZUJhY2tPdXQoMi41KSksIGNjLmZhZGVUbygwLjUsIDI1NSkpO1xyXG4gICAgICAgIHRoaXMub2JqU2hvdyAgICA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vYmpUbXAgICAgID0gbnVsbDtcclxuICAgIH0sXHJcblxyXG4gICAgb25DbGlja0JhY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY2MuUmVkVC5hdWRpby5wbGF5VW5DbGljaygpO1xyXG4gICAgICAgIHRoaXMub25CYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgb25CYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMub2JqU2hvdyAhPSBudWxsKXtcclxuICAgICAgICAgICAgaWYodm9pZCAwID09IHRoaXMub2JqU2hvdy5wcmV2aW91cyB8fCBudWxsID09IHRoaXMub2JqU2hvdy5wcmV2aW91cyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlICAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cgICAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialRtcCAgICAgICAgICAgICAgPSB0aGlzLm9ialNob3c7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cgICAgICAgICAgICAgPSB0aGlzLm9ialNob3cucHJldmlvdXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialRtcC5wcmV2aW91cyAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpUbXAuYWN0aXZlICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cuYWN0aXZlICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpUbXAgICAgICAgICAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2xvc2VQcmV2aW91czogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICBpZih2b2lkIDAgIT09IG9iai5wcmV2aW91cyAmJiBudWxsICE9PSBvYmoucHJldmlvdXMpe1xyXG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2VQcmV2aW91cyhvYmoucHJldmlvdXMpO1xyXG4gICAgICAgICAgICBkZWxldGUgb2JqLnByZXZpb3VzO1xyXG4gICAgICAgICAgICAvL29iai5wcmV2aW91cyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9iai5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBvbkNsb3NlRGlhbG9nOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmKHRoaXMub2JqU2hvdyAhPSBudWxsKXtcclxuICAgICAgICAgICAgaWYodm9pZCAwID09IHRoaXMub2JqU2hvdy5wcmV2aW91cyB8fCBudWxsID09IHRoaXMub2JqU2hvdy5wcmV2aW91cyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cuYWN0aXZlID0gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93ICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlUHJldmlvdXModGhpcy5vYmpTaG93LnByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdy5hY3RpdmUgICAgICAgICAgPSB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5vYmpTaG93LnByZXZpb3VzO1xyXG4gICAgICAgICAgICAgICAgLy90aGlzLm9ialNob3cucHJldmlvdXMgICAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdyAgICAgICAgICAgICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgcmVzZXRTaXplRGlhbG9nOiBmdW5jdGlvbihub2RlKXtcclxuICAgICAgICBub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbm9kZS5zY2FsZSAgID0gMC41O1xyXG4gICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRnVuY3Rpb24gU2hvdyBEaWFsb2dcclxuICAgICovXHJcbiAgICBzaG93SGlzdG9yeTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlICAgID0gdGhpcy5oaXN0b3J5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9ialNob3cgICAgICAgID0gdGhpcy5oaXN0b3J5Lm5vZGU7XHJcbiAgICB9LFxyXG4gICAgc2hvd1RvcDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy50b3Aubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLnRvcC5ub2RlO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==