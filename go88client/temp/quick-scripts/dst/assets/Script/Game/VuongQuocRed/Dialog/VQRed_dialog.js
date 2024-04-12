
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/VuongQuocRed/Dialog/VQRed_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbbb3PXVVZETqpYijqFqO6r', 'VQRed_dialog');
// Script/Game/VuongQuocRed/Dialog/VQRed_dialog.js

'use strict';

var history = require('VQRed_history'),
    top = require('VQRed_top'),
    setting = require('VQRed_setting');

cc.Class({
    extends: cc.Component,
    properties: {
        history: history,
        top: top,
        setting: setting
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
    },
    showSetting: function showSetting() {
        this.node.active = this.setting.node.active = true;
        this.objShow = this.setting.node;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxEaWFsb2cvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxWdW9uZ1F1b2NSZWRcXERpYWxvZy9hc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxEaWFsb2dcXFZRUmVkX2RpYWxvZy5qcyJdLCJuYW1lcyI6WyJoaXN0b3J5IiwicmVxdWlyZSIsInRvcCIsInNldHRpbmciLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0IiwiYWN0aW9uU2hvdyIsInNwYXduIiwic2NhbGVUbyIsImVhc2luZyIsImVhc2VCYWNrT3V0IiwiZmFkZVRvIiwib2JqU2hvdyIsIm9ialRtcCIsIm9uQ2xpY2tCYWNrIiwiUmVkVCIsImF1ZGlvIiwicGxheVVuQ2xpY2siLCJvbkJhY2siLCJwcmV2aW91cyIsImFjdGl2ZSIsIm5vZGUiLCJvbkNsb3NlUHJldmlvdXMiLCJvYmoiLCJvbkNsb3NlRGlhbG9nIiwicmVzZXRTaXplRGlhbG9nIiwic3RvcEFsbEFjdGlvbnMiLCJzY2FsZSIsIm9wYWNpdHkiLCJzaG93SGlzdG9yeSIsInNob3dUb3AiLCJzaG93U2V0dGluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVQyxRQUFRLGVBQVIsQ0FBZDtBQUFBLElBQ0lDLE1BQVVELFFBQVEsV0FBUixDQURkO0FBQUEsSUFFSUUsVUFBVUYsUUFBUSxlQUFSLENBRmQ7O0FBSUFHLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1JSLGlCQUFTQSxPQUREO0FBRVJFLGFBQVNBLEdBRkQ7QUFHUkMsaUJBQVNBO0FBSEQsS0FGUDtBQU9MTSxVQUFNLGdCQUFXO0FBQ2IsYUFBS0MsVUFBTCxHQUFr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Q0FBYXlCLElBQWIsQ0FBa0JELE1BQWxCLEdBQTJCLElBQTlDO0FBQ0EsYUFBS1IsT0FBTCxHQUFtQixLQUFLaEIsT0FBTCxDQUFheUIsSUFBaEM7QUFDSCxLQXhFSTtBQXlFTFMsYUFBUyxtQkFBVTtBQUNmLGFBQUtULElBQUwsQ0FBVUQsTUFBVixHQUFtQixLQUFLdEIsR0FBTCxDQUFTdUIsSUFBVCxDQUFjRCxNQUFkLEdBQXVCLElBQTFDO0FBQ0EsYUFBS1IsT0FBTCxHQUFtQixLQUFLZCxHQUFMLENBQVN1QixJQUE1QjtBQUNILEtBNUVJO0FBNkVMVSxpQkFBYSx1QkFBVTtBQUNuQixhQUFLVixJQUFMLENBQVVELE1BQVYsR0FBbUIsS0FBS3JCLE9BQUwsQ0FBYXNCLElBQWIsQ0FBa0JELE1BQWxCLEdBQTJCLElBQTlDO0FBQ0EsYUFBS1IsT0FBTCxHQUFtQixLQUFLYixPQUFMLENBQWFzQixJQUFoQztBQUNIO0FBaEZJLENBQVQiLCJmaWxlIjoiVlFSZWRfZGlhbG9nLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVnVvbmdRdW9jUmVkXFxEaWFsb2ciLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhpc3RvcnkgPSByZXF1aXJlKCdWUVJlZF9oaXN0b3J5JyksXHJcbiAgICB0b3AgICAgID0gcmVxdWlyZSgnVlFSZWRfdG9wJyksXHJcbiAgICBzZXR0aW5nID0gcmVxdWlyZSgnVlFSZWRfc2V0dGluZycpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhpc3Rvcnk6IGhpc3RvcnksXHJcbiAgICAgICAgdG9wOiAgICAgdG9wLFxyXG4gICAgICAgIHNldHRpbmc6IHNldHRpbmcsXHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TaG93ID0gY2Muc3Bhd24oY2Muc2NhbGVUbygwLjUsIDEpLmVhc2luZyhjYy5lYXNlQmFja091dCgyLjUpKSwgY2MuZmFkZVRvKDAuNSwgMjU1KSk7XHJcbiAgICAgICAgdGhpcy5vYmpTaG93ICAgID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9ialRtcCAgICAgPSBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsaWNrQmFjazogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5SZWRULmF1ZGlvLnBsYXlVbkNsaWNrKCk7XHJcbiAgICAgICAgdGhpcy5vbkJhY2soKTtcclxuICAgIH0sXHJcbiAgICBvbkJhY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5vYmpTaG93ICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpZih2b2lkIDAgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzIHx8IG51bGwgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdyAgICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqVG1wICAgICAgICAgICAgICA9IHRoaXMub2JqU2hvdztcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdyAgICAgICAgICAgICA9IHRoaXMub2JqU2hvdy5wcmV2aW91cztcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqVG1wLnByZXZpb3VzICAgICA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialRtcC5hY3RpdmUgICAgICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdy5hY3RpdmUgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialRtcCAgICAgICAgICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZVByZXZpb3VzOiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIGlmKHZvaWQgMCAhPT0gb2JqLnByZXZpb3VzICYmIG51bGwgIT09IG9iai5wcmV2aW91cyl7XHJcbiAgICAgICAgICAgIHRoaXMub25DbG9zZVByZXZpb3VzKG9iai5wcmV2aW91cyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmoucHJldmlvdXM7XHJcbiAgICAgICAgICAgIC8vb2JqLnByZXZpb3VzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG9uQ2xvc2VEaWFsb2c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5vYmpTaG93ICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpZih2b2lkIDAgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzIHx8IG51bGwgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdy5hY3RpdmUgPSB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cgICAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2VQcmV2aW91cyh0aGlzLm9ialNob3cucHJldmlvdXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93LmFjdGl2ZSAgICAgICAgICA9IHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ialNob3cucHJldmlvdXM7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMub2JqU2hvdy5wcmV2aW91cyAgICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93ICAgICAgICAgICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldFNpemVEaWFsb2c6IGZ1bmN0aW9uKG5vZGUpe1xyXG4gICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBub2RlLnNjYWxlICAgPSAwLjU7XHJcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBTaG93IERpYWxvZ1xyXG4gICAgKi9cclxuICAgIHNob3dIaXN0b3J5OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0aGlzLmhpc3Rvcnkubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLmhpc3Rvcnkubm9kZTtcclxuICAgIH0sXHJcbiAgICBzaG93VG9wOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0aGlzLnRvcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmpTaG93ICAgICA9IHRoaXMudG9wLm5vZGU7XHJcbiAgICB9LFxyXG4gICAgc2hvd1NldHRpbmc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuc2V0dGluZy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmpTaG93ICAgICA9IHRoaXMuc2V0dGluZy5ub2RlO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==