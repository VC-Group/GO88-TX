
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Candy/Candy_dialog/Candy_dialog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09680O6Rg9HML88fBtJFvh9', 'Candy_dialog');
// Script/Game/Candy/Candy_dialog/Candy_dialog.js

'use strict';

var history = require('Candy_history'),
    top = require('Candy_top');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X2RpYWxvZy8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhbmR5XFxDYW5keV9kaWFsb2cvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhbmR5XFxDYW5keV9kaWFsb2dcXENhbmR5X2RpYWxvZy5qcyJdLCJuYW1lcyI6WyJoaXN0b3J5IiwicmVxdWlyZSIsInRvcCIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhlbHAiLCJOb2RlIiwiaW5pdCIsImFjdGlvblNob3ciLCJzcGF3biIsInNjYWxlVG8iLCJlYXNpbmciLCJlYXNlQmFja091dCIsImZhZGVUbyIsIm9ialNob3ciLCJvYmpUbXAiLCJvbkNsaWNrQmFjayIsIlJlZFQiLCJhdWRpbyIsInBsYXlVbkNsaWNrIiwib25CYWNrIiwicHJldmlvdXMiLCJhY3RpdmUiLCJub2RlIiwib25DbG9zZVByZXZpb3VzIiwib2JqIiwib25DbG9zZURpYWxvZyIsInJlc2V0U2l6ZURpYWxvZyIsInN0b3BBbGxBY3Rpb25zIiwic2NhbGUiLCJvcGFjaXR5Iiwic2hvd0hpc3RvcnkiLCJzaG93VG9wIiwic2hvd0hlbHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVUMsUUFBUSxlQUFSLENBQWQ7QUFBQSxJQUNJQyxNQUFVRCxRQUFRLFdBQVIsQ0FEZDs7QUFHQUUsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7QUFFTEMsZ0JBQVk7QUFDUlAsaUJBQVNBLE9BREQ7QUFFUkUsYUFBU0EsR0FGRDtBQUdSTSxjQUFTTCxHQUFHTTtBQUhKLEtBRlA7QUFPTEMsVUFBTSxnQkFBVztBQUNiLGFBQUtDLFVBQUwsR0FBa0JSLEdBQUdTLEtBQUgsQ0FBU1QsR0FBR1UsT0FB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QTJCLElBQWpEO0FBQ0EsYUFBS1IsT0FBTCxHQUFzQixLQUFLakIsT0FBTCxDQUFhMEIsSUFBbkM7QUFDSCxLQXhFSTtBQXlFTFMsYUFBUyxtQkFBVTtBQUNmLGFBQUtULElBQUwsQ0FBVUQsTUFBVixHQUFtQixLQUFLdkIsR0FBTCxDQUFTd0IsSUFBVCxDQUFjRCxNQUFkLEdBQXVCLElBQTFDO0FBQ0EsYUFBS1IsT0FBTCxHQUFtQixLQUFLZixHQUFMLENBQVN3QixJQUE1QjtBQUNILEtBNUVJO0FBNkVMVSxjQUFVLG9CQUFVO0FBQ2hCLGFBQUtWLElBQUwsQ0FBVUQsTUFBVixHQUFtQixLQUFLakIsSUFBTCxDQUFVaUIsTUFBVixHQUFtQixJQUF0QztBQUNBLGFBQUtSLE9BQUwsR0FBbUIsS0FBS1QsSUFBeEI7QUFDSDtBQWhGSSxDQUFUIiwiZmlsZSI6IkNhbmR5X2RpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXENhbmR5XFxDYW5keV9kaWFsb2ciLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhpc3RvcnkgPSByZXF1aXJlKCdDYW5keV9oaXN0b3J5JyksXHJcbiAgICB0b3AgICAgID0gcmVxdWlyZSgnQ2FuZHlfdG9wJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGlzdG9yeTogaGlzdG9yeSxcclxuICAgICAgICB0b3A6ICAgICB0b3AsXHJcbiAgICAgICAgaGVscDogICAgY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmFjdGlvblNob3cgPSBjYy5zcGF3bihjYy5zY2FsZVRvKDAuNSwgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KDIuNSkpLCBjYy5mYWRlVG8oMC41LCAyNTUpKTtcclxuICAgICAgICB0aGlzLm9ialNob3cgICAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub2JqVG1wICAgICA9IG51bGw7XHJcbiAgICB9LFxyXG5cclxuICAgIG9uQ2xpY2tCYWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLlJlZFQuYXVkaW8ucGxheVVuQ2xpY2soKTtcclxuICAgICAgICB0aGlzLm9uQmFjaygpO1xyXG4gICAgfSxcclxuICAgIG9uQmFjazogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLm9ialNob3cgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmKHZvaWQgMCA9PSB0aGlzLm9ialNob3cucHJldmlvdXMgfHwgbnVsbCA9PSB0aGlzLm9ialNob3cucHJldmlvdXMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSAgICA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93ICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpUbXAgICAgICAgICAgICAgID0gdGhpcy5vYmpTaG93O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93ICAgICAgICAgICAgID0gdGhpcy5vYmpTaG93LnByZXZpb3VzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpUbXAucHJldmlvdXMgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqVG1wLmFjdGl2ZSAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93LmFjdGl2ZSAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqVG1wICAgICAgICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsb3NlUHJldmlvdXM6IGZ1bmN0aW9uKG9iail7XHJcbiAgICAgICAgaWYodm9pZCAwICE9PSBvYmoucHJldmlvdXMgJiYgbnVsbCAhPT0gb2JqLnByZXZpb3VzKXtcclxuICAgICAgICAgICAgdGhpcy5vbkNsb3NlUHJldmlvdXMob2JqLnByZXZpb3VzKTtcclxuICAgICAgICAgICAgZGVsZXRlIG9iai5wcmV2aW91cztcclxuICAgICAgICAgICAgLy9vYmoucHJldmlvdXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvYmouYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZURpYWxvZzogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZih0aGlzLm9ialNob3cgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGlmKHZvaWQgMCA9PSB0aGlzLm9ialNob3cucHJldmlvdXMgfHwgbnVsbCA9PSB0aGlzLm9ialNob3cucHJldmlvdXMpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpTaG93LmFjdGl2ZSA9IHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqU2hvdyAgICAgICAgPSBudWxsO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMub25DbG9zZVByZXZpb3VzKHRoaXMub2JqU2hvdy5wcmV2aW91cyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cuYWN0aXZlICAgICAgICAgID0gdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMub2JqU2hvdy5wcmV2aW91cztcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5vYmpTaG93LnByZXZpb3VzICAgICAgICA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialNob3cgICAgICAgICAgICAgICAgID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHJlc2V0U2l6ZURpYWxvZzogZnVuY3Rpb24obm9kZSl7XHJcbiAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIG5vZGUuc2NhbGUgICA9IDAuNTtcclxuICAgICAgICBub2RlLm9wYWNpdHkgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEZ1bmN0aW9uIFNob3cgRGlhbG9nXHJcbiAgICAqL1xyXG4gICAgc2hvd0hpc3Rvcnk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSAgICA9IHRoaXMuaGlzdG9yeS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmpTaG93ICAgICAgICA9IHRoaXMuaGlzdG9yeS5ub2RlO1xyXG4gICAgfSxcclxuICAgIHNob3dUb3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRoaXMudG9wLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9ialNob3cgICAgID0gdGhpcy50b3Aubm9kZTtcclxuICAgIH0sXHJcbiAgICBzaG93SGVscDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdGhpcy5oZWxwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vYmpTaG93ICAgICA9IHRoaXMuaGVscDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=