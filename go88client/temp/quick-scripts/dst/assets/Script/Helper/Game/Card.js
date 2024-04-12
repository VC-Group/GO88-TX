
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/Game/Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '550c9nAtbJCb6ippMUD/2+b', 'Card');
// Script/Helper/Game/Card.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        card1: {
            default: [],
            type: cc.SpriteFrame
        },
        card2: {
            default: [],
            type: cc.SpriteFrame
        },
        card3: {
            default: [],
            type: cc.SpriteFrame
        },
        card4: {
            default: [],
            type: cc.SpriteFrame
        },
        card5: {
            default: [],
            type: cc.SpriteFrame
        },
        card6: {
            default: [],
            type: cc.SpriteFrame
        },
        card7: {
            default: [],
            type: cc.SpriteFrame
        },
        card8: {
            default: [],
            type: cc.SpriteFrame
        },
        card9: {
            default: [],
            type: cc.SpriteFrame
        },
        card10: {
            default: [],
            type: cc.SpriteFrame
        },
        card11: {
            default: [],
            type: cc.SpriteFrame
        },
        card12: {
            default: [],
            type: cc.SpriteFrame
        },
        card13: {
            default: [],
            type: cc.SpriteFrame
        },
        cardB1: {
            default: null,
            type: cc.SpriteFrame
        },
        cardB2: {
            default: null,
            type: cc.SpriteFrame
        },
        red: false
    },
    init: function init() {
        this.card = [this.card1, this.card2, this.card3, this.card4, this.card5, this.card6, this.card7, this.card8, this.card9, this.card10, this.card11, this.card12, this.card13];
    },
    config: function config() {
        if (void 0 === cc.RedT.util.card) {
            cc.RedT.util.card = this;
            if (!this.red) {
                this.red = true;
                this.init();
            }
        }
    },
    getCard: function getCard() {
        var card = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        return this.card[card][type];
    },
    random: function random() {
        var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 13;

        return this.card[~~(Math.random() * number)][~~(Math.random() * 4)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXEdhbWUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcR2FtZS9hc3NldHNcXFNjcmlwdFxcSGVscGVyXFxHYW1lXFxDYXJkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNhcmQxIiwiZGVmYXVsdCIsInR5cGUiLCJTcHJpdGVGcmFtZSIsImNhcmQyIiwiY2FyZDMiLCJjYXJkNCIsImNhcmQ1IiwiY2FyZDYiLCJjYXJkNyIsImNhcmQ4IiwiY2FyZDkiLCJjYXJkMTAiLCJjYXJkMTEiLCJjYXJkMTIiLCJjYXJkMTMiLCJjYXJkQjEiLCJjYXJkQjIiLCJyZWQiLCJpbml0IiwiY2FyZCIsImNvbmZpZyIsIlJlZFQiLCJ1dGlsIiwiZ2V0Q2FyZCIsInJhbmRvbSIsIm51bWJlciIsIk1hdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxlQUFPO0FBQ05DLHFCQUFTLEVBREg7QUFFTkMsa0JBQU1QLEdBQUdRO0FBRkgsU0FEQztBQUtSQyxlQUFPO0FBQ05ILHFCQUFTLEVBREg7QUFFTkMsa0JBQU1QLEdBQUdRO0FBRkgsU0FMQztBQVNSRSxlQUFPO0FBQ05KLHFCQUFTLEVBREg7QUFFTkMsa0JBQU1QLEdBQUdRO0FBRkgsU0FUQztBQWFSRyxlQUFPO0FBQ05MLHFCQUFTLEVBREg7QUFFTkMsa0JBQU1QLEdBQUdRO0FBRkgsU0FiQztBQWlCUkksZUFBTztBQUNOTixxQkFBUyxFQURIO0FBRU5DLGtCQUFNUCxHQUFHUTtBQUZILFNBakJDO0FBcUJSSyxlQUFPO0FBQ05QLHFCQUFTLEVBREg7QUFFTkMsa0JBQU1QLEdBQUdRO0FBRkgsU0FyQkM7QUF5QlJNLGVBQU87QUFDTlIscUJBQVMsRUFESDtBQUVOQyxrQkFBTVAsR0FBR1E7QUFGSCxTQXpCQztBQTZCUk8sZUFBTztBQUNOVCxxQkFBUyxFQURIO0FBRU5DLGtCQUFNUCxHQUFHUTtBQUZILFNBN0JDO0FBaUNSUSxlQUFPO0FBQ05WLHFCQUFTLEVBREg7QUFFTkMsa0JBQU1QLEdBQUdRO0FBRkgsU0FqQ0M7QUFxQ1JTLGdCQUFRO0FBQ1BYLHFCQUFTLEVBREY7QUFFUEMsa0JBQU1QLEdBQUdRO0FBRkYsU0FyQ0E7QUF5Q1JVLGdCQUFRO0FBQ1BaLHFCQUFTLEVBREY7QUFFUEMsa0JBQU1QLEdBQUdRO0FBRkYsU0F6Q0E7QUE2Q1JXLGdCQUFRO0FBQ1BiLHFCQUFTLEVBREY7QUFFUEMsa0JBQU1QLEdBQUdRO0FBRkYsU0E3Q0E7QUFpRFJZLGdCQUFRO0FBQ1BkLHFCQUFTLEVBREY7QUFFUEMsa0JBQU1QLEdBQUdRO0FBRkYsU0FqREE7QUFxRFJhLGdCQUFRO0FBQ1BmLHFCQUFTLElBREY7QUFFUEMsa0JBQU1QLEdBQUdRO0FBRkYsU0FyREE7QUF5RFJjLGdCQUFRO0FBQ1BoQixxQkFBUyxJQURGO0FBRVBDLGtCQUFNUCxHQUFHUTtBQUZGLFNBekRBO0FBNkRSZSxhQUFLO0FBN0RHLEtBSFA7QUFrRUxDLFVBQU0sZ0JBQVc7QUFDaEIsYUFBS0MsSUFBTCxHQUFZLENBQ0wsS0FBS3BCLEtBREEsRUFFTCxLQUFLSSxLQUZBLEVBR0wsS0FBS0MsS0FIQSxFQUlMLEtBQUtDLEtBSkEsRUFLTCxLQUFLQyxLQUxBLEVBTUwsS0FBS0MsS0FOQSxFQU9MLEtBQUtDLEtBUEEsRUFRTCxLQUFLQyxLQVJBLEVBU0wsS0FBS0MsS0FUQSxFQVVMLEtBQUtDLE1BVkEsRUFXTCxLQUFLQyxNQVhBLEVBWUwsS0FBS0MsTUFaQSxFQWFMLEtBQUtDLE1BYkEsQ0FBWjtBQWVBLEtBbEZJO0FBbUZMTSxZQUFRLGtCQUFVO0FBQ2QsWUFBSSxLQUFLLENBQUwsS0FBVzFCLEdBQUcyQixJQUFILENBQVFDLElBQVIsQ0FBYUgsSUFBNUIsRUFBa0M7QUFDOUJ6QixlQUFHMkIsSUFBSCxDQUFRQyxJQUFSLENBQWFILElBQWIsR0FBb0IsSUFBcEI7QUFDSCxnQkFBSSxDQUFDLEtBQUtGLEdBQVYsRUFBZTtBQUNkLHFCQUFLQSxHQUFMLEdBQVcsSUFBWDtBQUNBLHFCQUFLQyxJQUFMO0FBQ0E7QUFDRDtBQUNKLEtBM0ZJO0FBNEZMSyxhQUFTLG1CQUE0QjtBQUFBLFlBQW5CSixJQUFtQix1RUFBWixDQUFZO0FBQUEsWUFBVGxCLElBQVMsdUVBQUYsQ0FBRTs7QUFDcEMsZUFBTyxLQUFLa0IsSUFBTCxDQUFVQSxJQUFWLEVBQWdCbEIsSUFBaEIsQ0FBUDtBQUNBLEtBOUZJO0FBK0ZMdUIsWUFBUSxrQkFBcUI7QUFBQSxZQUFaQyxNQUFZLHVFQUFILEVBQUc7O0FBQzVCLGVBQU8sS0FBS04sSUFBTCxDQUFVLENBQUMsRUFBRU8sS0FBS0YsTUFBTCxLQUFjQyxNQUFoQixDQUFYLEVBQW9DLENBQUMsRUFBRUMsS0FBS0YsTUFBTCxLQUFjLENBQWhCLENBQXJDLENBQVA7QUFDQTtBQWpHSSxDQUFUIiwiZmlsZSI6IkNhcmQuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcR2FtZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNhcmQxOiB7XHJcbiAgICAgICAgXHRkZWZhdWx0OiBbXSxcclxuICAgICAgICBcdHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZDI6IHtcclxuICAgICAgICBcdGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgIFx0dHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkMzoge1xyXG4gICAgICAgIFx0ZGVmYXVsdDogW10sXHJcbiAgICAgICAgXHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmQ0OiB7XHJcbiAgICAgICAgXHRkZWZhdWx0OiBbXSxcclxuICAgICAgICBcdHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZDU6IHtcclxuICAgICAgICBcdGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgIFx0dHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkNjoge1xyXG4gICAgICAgIFx0ZGVmYXVsdDogW10sXHJcbiAgICAgICAgXHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmQ3OiB7XHJcbiAgICAgICAgXHRkZWZhdWx0OiBbXSxcclxuICAgICAgICBcdHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZDg6IHtcclxuICAgICAgICBcdGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgIFx0dHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjYXJkOToge1xyXG4gICAgICAgIFx0ZGVmYXVsdDogW10sXHJcbiAgICAgICAgXHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmQxMDoge1xyXG4gICAgICAgIFx0ZGVmYXVsdDogW10sXHJcbiAgICAgICAgXHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmQxMToge1xyXG4gICAgICAgIFx0ZGVmYXVsdDogW10sXHJcbiAgICAgICAgXHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmQxMjoge1xyXG4gICAgICAgIFx0ZGVmYXVsdDogW10sXHJcbiAgICAgICAgXHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmQxMzoge1xyXG4gICAgICAgIFx0ZGVmYXVsdDogW10sXHJcbiAgICAgICAgXHR0eXBlOiBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNhcmRCMToge1xyXG4gICAgICAgIFx0ZGVmYXVsdDogbnVsbCxcclxuICAgICAgICBcdHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2FyZEIyOiB7XHJcbiAgICAgICAgXHRkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIFx0dHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgXHR0aGlzLmNhcmQgPSBbXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDEsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDIsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDMsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDQsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDUsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDYsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDcsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDgsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDksXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDEwLFxyXG4gICAgICAgICAgICB0aGlzLmNhcmQxMSxcclxuICAgICAgICAgICAgdGhpcy5jYXJkMTIsXHJcbiAgICAgICAgICAgIHRoaXMuY2FyZDEzXHJcbiAgICAgICAgXTtcclxuICAgIH0sXHJcbiAgICBjb25maWc6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gY2MuUmVkVC51dGlsLmNhcmQpIHtcclxuICAgICAgICAgICAgY2MuUmVkVC51dGlsLmNhcmQgPSB0aGlzO1xyXG4gICAgICAgIFx0aWYgKCF0aGlzLnJlZCkge1xyXG4gICAgICAgIFx0XHR0aGlzLnJlZCA9IHRydWU7XHJcbiAgICAgICAgXHRcdHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIFx0fVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRDYXJkOiBmdW5jdGlvbihjYXJkID0gMCwgdHlwZSA9IDApe1xyXG4gICAgXHRyZXR1cm4gdGhpcy5jYXJkW2NhcmRdW3R5cGVdO1xyXG4gICAgfSxcclxuICAgIHJhbmRvbTogZnVuY3Rpb24obnVtYmVyID0gMTMpe1xyXG4gICAgXHRyZXR1cm4gdGhpcy5jYXJkW35+KE1hdGgucmFuZG9tKCkqbnVtYmVyKV1bfn4oTWF0aC5yYW5kb20oKSo0KV07XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=