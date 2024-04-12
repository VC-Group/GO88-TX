
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/XoSo_History.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6525embjElLuYUiOmITMU6B', 'XoSo_History');
// Script/Game/XoSo/XoSo_History.js

'use strict';

var MienBac = require('XoSo_MBHistory');

cc.Class({
    extends: cc.Component,

    properties: {
        MienBac: MienBac
    },
    onData: function onData(data) {
        if (void 0 !== data.mb) {
            this.MienBac.onData(data.mb);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxYb1NvX0hpc3RvcnkuanMiXSwibmFtZXMiOlsiTWllbkJhYyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkRhdGEiLCJkYXRhIiwibWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVUMsUUFBUSxnQkFBUixDQUFkOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUk4saUJBQVNBO0FBREQsS0FIUDtBQU1MTyxZQUFRLGdCQUFTQyxJQUFULEVBQWU7QUFDbkIsWUFBSSxLQUFLLENBQUwsS0FBV0EsS0FBS0MsRUFBcEIsRUFBd0I7QUFDcEIsaUJBQUtULE9BQUwsQ0FBYU8sTUFBYixDQUFvQkMsS0FBS0MsRUFBekI7QUFDSDtBQUNKO0FBVkksQ0FBVCIsImZpbGUiOiJYb1NvX0hpc3RvcnkuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU28iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIE1pZW5CYWMgPSByZXF1aXJlKCdYb1NvX01CSGlzdG9yeScpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBNaWVuQmFjOiBNaWVuQmFjLFxyXG4gICAgfSxcclxuICAgIG9uRGF0YTogZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICAgIGlmICh2b2lkIDAgIT09IGRhdGEubWIpIHtcclxuICAgICAgICAgICAgdGhpcy5NaWVuQmFjLm9uRGF0YShkYXRhLm1iKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19