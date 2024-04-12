
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Zeus/dialog/Zeus_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7db485hEaZD25qyYumOc6Cn', 'Zeus_dialog');
// Script/Game/Zeus/dialog/Zeus_dialog.js

'use strict';

var history = require('Zeus_history'),
    top = require('Zeus_top');

cc.Class({
    extends: cc.Component,
    properties: {
        history: history,
        top: top,
        help: cc.Node
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
    showHelp: function showHelp() {
        this.node.active = this.help.active = true;
        this.objShow = this.help;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1c1xcZGlhbG9nLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWmV1c1xcZGlhbG9nL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxkaWFsb2dcXFpldXNfZGlhbG9nLmpzIl0sIm5hbWVzIjpbImhpc3RvcnkiLCJyZXF1aXJlIiwidG9wIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaGVscCIsIk5vZGUiLCJpbml0IiwiYWN0aW9uU2hvdyIsInNwYXduIiwic2NhbGVUbyIsImVhc2luZyIsImVhc2VCYWNrT3V0IiwiZmFkZVRvIiwib2JqU2hvdyIsIm9ialRtcCIsIm9uQ2xpY2tCYWNrIiwiUmVkVCIsImF1ZGlvIiwicGxheVVuQ2xpY2siLCJvbkJhY2siLCJwcmV2aW91cyIsImFjdGl2ZSIsIm5vZGUiLCJvbkNsb3NlUHJldmlvdXMiLCJvYmoiLCJvbkNsb3NlRGlhbG9nIiwicmVzZXRTaXplRGlhbG9nIiwic3RvcEFsbEFjdGlvbnMiLCJzY2FsZSIsIm9wYWNpdHkiLCJzaG93SGlzdG9yeSIsInNob3dUb3AiLCJzaG93SGVscCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVQyxRQUFRLGNBQVIsQ0FBZDtBQUFBLElBQ0lDLE1BQVVELFFBQVEsVUFBUixDQURkOztBQUdBRSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxnQkFBWTtBQUNSUCxpQkFBU0EsT0FERDtBQUVSRSxhQUFTQSxHQUZEO0FBR1JNLGNBQVNMLEdBQUdNO0FBSEosS0FGUDtBQU9MQyxVQUFNLGdCQUFXO0FBQ2IsYUFBS0MsVUFBTCxHQUFrQlIsR0FBR1MsS0FBSCxDQUFTVCxHQUFHVSxPQUFILENBQVcsR0FBWCxFQUFnQixDQUFo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QUFMLEdBQXNCLEtBQUtqQixPQUFMLENBQWEwQixJQUFuQztBQUNILEtBeEVJO0FBeUVMUyxhQUFTLG1CQUFVO0FBQ2YsYUFBS1QsSUFBTCxDQUFVRCxNQUFWLEdBQW1CLEtBQUt2QixHQUFMLENBQVN3QixJQUFULENBQWNELE1BQWQsR0FBdUIsSUFBMUM7QUFDQSxhQUFLUixPQUFMLEdBQW1CLEtBQUtmLEdBQUwsQ0FBU3dCLElBQTVCO0FBQ0gsS0E1RUk7QUE2RUxVLGNBQVUsb0JBQVU7QUFDaEIsYUFBS1YsSUFBTCxDQUFVRCxNQUFWLEdBQW1CLEtBQUtqQixJQUFMLENBQVVpQixNQUFWLEdBQW1CLElBQXRDO0FBQ0EsYUFBS1IsT0FBTCxHQUFtQixLQUFLVCxJQUF4QjtBQUNIO0FBaEZJLENBQVQiLCJmaWxlIjoiWmV1c19kaWFsb2cuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxaZXVzXFxkaWFsb2ciLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhpc3RvcnkgPSByZXF1aXJlKCdaZXVzX2hpc3RvcnknKSxcclxuICAgIHRvcCAgICAgPSByZXF1aXJlKCdaZXVzX3RvcCcpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGhpc3Rvcnk6IGhpc3RvcnksXHJcbiAgICAgICAgdG9wOiAgICAgdG9wLFxyXG4gICAgICAgIGhlbHA6ICAgIGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5hY3Rpb25TaG93ID0gY2Muc3Bhd24oY2Muc2NhbGVUbygwLjUsIDEpLmVhc2luZyhjYy5lYXNlQmFja091dCgyLjUpKSwgY2MuZmFkZVRvKDAuNSwgMjU1KSk7XHJcbiAgICAgICAgdGhpcy5vYmpTaG93ICAgID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9ialRtcCAgICAgPSBudWxsO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkNsaWNrQmFjazogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5SZWRULmF1ZGlvLnBsYXlVbkNsaWNrKCk7XHJcbiAgICAgICAgdGhpcy5vbkJhY2soKTtcclxuICAgIH0sXHJcbiAgICBvbkJhY2s6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5vYmpTaG93ICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpZih2b2lkIDAgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzIHx8IG51bGwgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdyAgICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqVG1wICAgICAgICAgICAgICA9IHRoaXMub2JqU2hvdztcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdyAgICAgICAgICAgICA9IHRoaXMub2JqU2hvdy5wcmV2aW91cztcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqVG1wLnByZXZpb3VzICAgICA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialRtcC5hY3RpdmUgICAgICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdy5hY3RpdmUgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialRtcCAgICAgICAgICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZVByZXZpb3VzOiBmdW5jdGlvbihvYmope1xyXG4gICAgICAgIGlmKHZvaWQgMCAhPT0gb2JqLnByZXZpb3VzICYmIG51bGwgIT09IG9iai5wcmV2aW91cyl7XHJcbiAgICAgICAgICAgIHRoaXMub25DbG9zZVByZXZpb3VzKG9iai5wcmV2aW91cyk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvYmoucHJldmlvdXM7XHJcbiAgICAgICAgICAgIC8vb2JqLnByZXZpb3VzID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG9uQ2xvc2VEaWFsb2c6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5vYmpTaG93ICE9IG51bGwpe1xyXG4gICAgICAgICAgICBpZih2b2lkIDAgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzIHx8IG51bGwgPT0gdGhpcy5vYmpTaG93LnByZXZpb3VzKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdy5hY3RpdmUgPSB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cgICAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xvc2VQcmV2aW91cyh0aGlzLm9ialNob3cucHJldmlvdXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93LmFjdGl2ZSAgICAgICAgICA9IHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm9ialNob3cucHJldmlvdXM7XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMub2JqU2hvdy5wcmV2aW91cyAgICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93ICAgICAgICAgICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICByZXNldFNpemVEaWFsb2c6IGZ1bmN0aW9uKG5vZGUpe1xyXG4gICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBub2RlLnNjYWxlICAgPSAwLjU7XHJcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGdW5jdGlvbiBTaG93IERpYWxvZ1xyXG4gICAgKi9cclxuICAgIHNob3dIaXN0b3J5OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgICAgPSB0aGlzLmhpc3Rvcnkubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2JqU2hvdyAgICAgICAgPSB0aGlzLmhpc3Rvcnkubm9kZTtcclxuICAgIH0sXHJcbiAgICBzaG93VG9wOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0aGlzLnRvcC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmpTaG93ICAgICA9IHRoaXMudG9wLm5vZGU7XHJcbiAgICB9LFxyXG4gICAgc2hvd0hlbHA6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMuaGVscC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub2JqU2hvdyAgICAgPSB0aGlzLmhlbHA7XHJcbiAgICB9LFxyXG59KTtcclxuIl19