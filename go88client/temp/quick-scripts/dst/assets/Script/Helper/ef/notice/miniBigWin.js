
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/ef/notice/miniBigWin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1b515XdufZBFaOcG7quJClg', 'miniBigWin');
// Script/Helper/ef/notice/miniBigWin.js

'use strict';

var numberTo = require('Helper').numberTo;
cc.Class({
    extends: cc.Component,
    properties: {
        bet: cc.Label
    },
    onLoad: function onLoad() {
        this.bet.font = cc.RedT.util.fontCong;
        this.node.runAction(cc.sequence(cc.delayTime(0.2), cc.callFunc(function () {
            cc.RedT.audio.playEf('moneywin');
            numberTo(this.bet, 0, this.node.bet, 1000, true);
        }, this)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxlZlxcbm90aWNlLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxlZlxcbm90aWNlL2Fzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXGVmXFxub3RpY2VcXG1pbmlCaWdXaW4uanMiXSwibmFtZXMiOlsibnVtYmVyVG8iLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmV0IiwiTGFiZWwiLCJvbkxvYWQiLCJmb250IiwiUmVkVCIsInV0aWwiLCJmb250Q29uZyIsIm5vZGUiLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsImNhbGxGdW5jIiwiYXVkaW8iLCJwbGF5RWYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsV0FBV0MsUUFBUSxRQUFSLEVBQWtCRCxRQUFqQztBQUNBRSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxnQkFBWTtBQUNYQyxhQUFLTCxHQUFHTTtBQURHLEtBRlA7QUFLTEMsVUFMSyxvQkFLSztBQUNULGFBQUtGLEdBQUwsQ0FBU0csSUFBVCxHQUFnQlIsR0FBR1MsSUFBSCxDQUFRQyxJQUFSLENBQWFDLFFBQTdCO0FBQ0EsYUFBS0MsSUFBTCxDQUFVQyxTQUFWLENBQW9CYixHQUFHYyxRQUFILENBQVlkLEdBQUdlLFNBQUgsQ0FBYSxHQUFiLENBQVosRUFBK0JmLEdBQUdnQixRQUFILENBQVksWUFBVztBQUNuRWhCLGVBQUdTLElBQUgsQ0FBUVEsS0FBUixDQUFjQyxNQUFkLENBQXFCLFVBQXJCO0FBQ1RwQixxQkFBUyxLQUFLTyxHQUFkLEVBQW1CLENBQW5CLEVBQXNCLEtBQUtPLElBQUwsQ0FBVVAsR0FBaEMsRUFBcUMsSUFBckMsRUFBMkMsSUFBM0M7QUFDQSxTQUhxRCxFQUduRCxJQUhtRCxDQUEvQixDQUFwQjtBQUlBO0FBWEksQ0FBVCIsImZpbGUiOiJtaW5pQmlnV2luLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxlZlxcbm90aWNlIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmxldCBudW1iZXJUbyA9IHJlcXVpcmUoJ0hlbHBlcicpLm51bWJlclRvO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICBcdGJldDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgIFx0dGhpcy5iZXQuZm9udCA9IGNjLlJlZFQudXRpbC5mb250Q29uZztcclxuICAgIFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC4yKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuYXVkaW8ucGxheUVmKCdtb25leXdpbicpO1xyXG5cdFx0XHRudW1iZXJUbyh0aGlzLmJldCwgMCwgdGhpcy5ub2RlLmJldCwgMTAwMCwgdHJ1ZSk7XHJcblx0XHR9LCB0aGlzKSkpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==