
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/MainAudio.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '738b2QcBnhOn7bLV2UFI4l9', 'MainAudio');
// Script/Helper/MainAudio.js

"use strict";

cc.Class({
    extends: cc.Component,
    properties: {
        audioClick: {
            default: null,
            type: cc.AudioClip
        },
        audioClick2: {
            default: null,
            type: cc.AudioClip
        },
        thongbao_jackpot: {
            default: null,
            type: cc.AudioClip
        },
        jackpot: {
            default: null,
            type: cc.AudioClip
        },
        bigWin: {
            default: null,
            type: cc.AudioClip
        },
        moneywin: {
            default: null,
            type: cc.AudioClip
        },
        bonus: {
            default: null,
            type: cc.AudioClip
        },
        megaWin: {
            default: null,
            type: cc.AudioClip
        },
        winHu: {
            default: null,
            type: cc.AudioClip
        },

        mainBackground: {
            default: null,
            type: cc.AudioSource
        },
        fishHall: {
            default: null,
            type: cc.AudioSource
        },
        fishBG1: {
            default: null,
            type: cc.AudioSource
        },
        fishBG2: {
            default: null,
            type: cc.AudioSource
        },

        bgSlot1: {
            default: null,
            type: cc.AudioSource
        },
        bgSlot2: {
            default: null,
            type: cc.AudioSource
        }
    },
    _playSFX: function _playSFX(clip) {
        if (cc.RedT.IS_SOUND) {
            cc.audioEngine.playEffect(clip, false);
        }
    },
    // Audio Effect
    playClick: function playClick() {
        this._playSFX(this.audioClick);
    },
    playUnClick: function playUnClick() {
        this._playSFX(this.audioClick2);
    },
    playNoticeJackP: function playNoticeJackP() {
        this._playSFX(this.thongbao_jackpot);
    },
    playEf: function playEf(audio) {
        this._playSFX(this[audio]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcTWFpbkF1ZGlvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF1ZGlvQ2xpY2siLCJkZWZhdWx0IiwidHlwZSIsIkF1ZGlvQ2xpcCIsImF1ZGlvQ2xpY2syIiwidGhvbmdiYW9famFja3BvdCIsImphY2twb3QiLCJiaWdXaW4iLCJtb25leXdpbiIsImJvbnVzIiwibWVnYVdpbiIsIndpbkh1IiwibWFpbkJhY2tncm91bmQiLCJBdWRpb1NvdXJjZSIsImZpc2hIYWxsIiwiZmlzaEJHMSIsImZpc2hCRzIiLCJiZ1Nsb3QxIiwiYmdTbG90MiIsIl9wbGF5U0ZYIiwiY2xpcCIsIlJlZFQiLCJJU19TT1VORCIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsInBsYXlDbGljayIsInBsYXlVbkNsaWNrIiwicGxheU5vdGljZUphY2tQIiwicGxheUVmIiwiYXVkaW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQO0FBRUxDLGdCQUFZO0FBQ1hDLG9CQUFZO0FBQ0xDLHFCQUFTLElBREo7QUFFTEMsa0JBQU1QLEdBQUdRO0FBRkosU0FERDtBQUtSQyxxQkFBYTtBQUNUSCxxQkFBUyxJQURBO0FBRVRDLGtCQUFNUCxHQUFHUTtBQUZBLFNBTEw7QUFTUkUsMEJBQWtCO0FBQ2RKLHFCQUFTLElBREs7QUFFZEMsa0JBQU1QLEdBQUdRO0FBRkssU0FUVjtBQWFYRyxpQkFBVTtBQUNITCxxQkFBUyxJQUROO0FBRUhDLGtCQUFNUCxHQUFHUTtBQUZOLFNBYkM7QUFpQlJJLGdCQUFVO0FBQ05OLHFCQUFTLElBREg7QUFFTkMsa0JBQU1QLEdBQUdRO0FBRkgsU0FqQkY7QUFxQlJLLGtCQUFZO0FBQ1JQLHFCQUFTLElBREQ7QUFFUkMsa0JBQU1QLEdBQUdRO0FBRkQsU0FyQko7QUF5QlJNLGVBQVM7QUFDTFIscUJBQVMsSUFESjtBQUVMQyxrQkFBTVAsR0FBR1E7QUFGSixTQXpCRDtBQTZCUk8saUJBQVc7QUFDUFQscUJBQVMsSUFERjtBQUVQQyxrQkFBTVAsR0FBR1E7QUFGRixTQTdCSDtBQWlDUlEsZUFBUztBQUNMVixxQkFBUyxJQURKO0FBRUxDLGtCQUFNUCxHQUFHUTtBQUZKLFNBakNEOztBQXNDUlMsd0JBQWtCO0FBQ2RYLHFCQUFTLElBREs7QUFFZEMsa0JBQU1QLEdBQUdrQjtBQUZLLFNBdENWO0FBMENSQyxrQkFBWTtBQUNSYixxQkFBUyxJQUREO0FBRVJDLGtCQUFNUCxHQUFHa0I7QUFGRCxTQTFDSjtBQThDUkUsaUJBQVc7QUFDUGQscUJBQVMsSUFERjtBQUVQQyxrQkFBTVAsR0FBR2tCO0FBRkYsU0E5Q0g7QUFrRFJHLGlCQUFXO0FBQ1BmLHFCQUFTLElBREY7QUFFUEMsa0JBQU1QLEdBQUdrQjtBQUZGLFNBbERIOztBQXVEUkksaUJBQVc7QUFDUGhCLHFCQUFTLElBREY7QUFFUEMsa0JBQU1QLEdBQUdrQjtBQUZGLFNBdkRIO0FBMkRSSyxpQkFBVztBQUNQakIscUJBQVMsSUFERjtBQUVQQyxrQkFBTVAsR0FBR2tCO0FBRkY7QUEzREgsS0FGUDtBQWtFTE0sY0FBVSxrQkFBU0MsSUFBVCxFQUFlO0FBQ3JCLFlBQUl6QixHQUFHMEIsSUFBSCxDQUFRQyxRQUFaLEVBQXFCO0FBQ2pCM0IsZUFBRzRCLFdBQUgsQ0FBZUMsVUFBZixDQUEwQkosSUFBMUIsRUFBZ0MsS0FBaEM7QUFDSDtBQUNKLEtBdEVJO0FBdUVMO0FBQ0FLLGVBQVcscUJBQVU7QUFDcEIsYUFBS04sUUFBTCxDQUFjLEtBQUtuQixVQUFuQjtBQUNBLEtBMUVJO0FBMkVMMEIsaUJBQWEsdUJBQVU7QUFDbkIsYUFBS1AsUUFBTCxDQUFjLEtBQUtmLFdBQW5CO0FBQ0gsS0E3RUk7QUE4RUx1QixxQkFBaUIsMkJBQVU7QUFDdkIsYUFBS1IsUUFBTCxDQUFjLEtBQUtkLGdCQUFuQjtBQUNILEtBaEZJO0FBaUZMdUIsWUFBUSxnQkFBU0MsS0FBVCxFQUFlO0FBQ25CLGFBQUtWLFFBQUwsQ0FBYyxLQUFLVSxLQUFMLENBQWQ7QUFDSDtBQW5GSSxDQUFUIiwiZmlsZSI6Ik1haW5BdWRpby5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHRhdWRpb0NsaWNrOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXVkaW9DbGljazI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aG9uZ2Jhb19qYWNrcG90OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICBcdGphY2twb3Q6ICB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYmlnV2luOiAgIHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb25leXdpbjogICB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9udXM6ICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lZ2FXaW46ICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpbkh1OiAgIHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgbWFpbkJhY2tncm91bmQ6ICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb1NvdXJjZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlzaEhhbGw6ICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb1NvdXJjZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlzaEJHMTogICB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvU291cmNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaXNoQkcyOiAgIHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9Tb3VyY2VcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBiZ1Nsb3QxOiAgIHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9Tb3VyY2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJnU2xvdDI6ICAge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb1NvdXJjZVxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgX3BsYXlTRlg6IGZ1bmN0aW9uKGNsaXApIHtcclxuICAgICAgICBpZiAoY2MuUmVkVC5JU19TT1VORCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvLyBBdWRpbyBFZmZlY3RcclxuICAgIHBsYXlDbGljazogZnVuY3Rpb24oKXtcclxuICAgIFx0dGhpcy5fcGxheVNGWCh0aGlzLmF1ZGlvQ2xpY2spO1xyXG4gICAgfSxcclxuICAgIHBsYXlVbkNsaWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuX3BsYXlTRlgodGhpcy5hdWRpb0NsaWNrMik7XHJcbiAgICB9LFxyXG4gICAgcGxheU5vdGljZUphY2tQOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMuX3BsYXlTRlgodGhpcy50aG9uZ2Jhb19qYWNrcG90KTtcclxuICAgIH0sXHJcbiAgICBwbGF5RWY6IGZ1bmN0aW9uKGF1ZGlvKXtcclxuICAgICAgICB0aGlzLl9wbGF5U0ZYKHRoaXNbYXVkaW9dKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=