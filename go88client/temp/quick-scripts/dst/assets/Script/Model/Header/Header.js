
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Header/Header.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '53591NaLdpJxoW9GVWXh0FR', 'Header');
// Script/Model/Header/Header.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        avatar: cc.Sprite,
        nodeUsers: cc.Node,
        nodeGuest: cc.Node,
        exp: cc.Node,
        userName: cc.Label,
        vip: cc.Label,
        userRed: cc.Label,
        maskFull: 0
    },
    onLoad: function onLoad() {
        if (cc.RedT.IS_LOGIN) this.isSignIn();else this.isSignOut();
    },

    isSignIn: function isSignIn() {
        this.nodeUsers.active = true;
        this.nodeGuest.active = false;
    },
    isSignOut: function isSignOut() {
        this.userName.string = this.userRed.string = '';
        this.nodeUsers.active = false;
        this.nodeGuest.active = true;
    },
    level: function level(_level) {
        this.vip.string = "VIP" + _level;
    },
    updateEXP: function updateEXP(ht, next) {
        // this.exp.width = ht/next*this.maskFull;
    },
    reset: function reset() {
        this.level(cc.RedT.user.level);
        // this.updateEXP(cc.RedT.user.vipHT, cc.RedT.user.vipNext);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcSGVhZGVyLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcSGVhZGVyL2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcSGVhZGVyXFxIZWFkZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXZhdGFyIiwiU3ByaXRlIiwibm9kZVVzZXJzIiwiTm9kZSIsIm5vZGVHdWVzdCIsImV4cCIsInVzZXJOYW1lIiwiTGFiZWwiLCJ2aXAiLCJ1c2VyUmVkIiwibWFza0Z1bGwiLCJvbkxvYWQiLCJSZWRUIiwiSVNfTE9HSU4iLCJpc1NpZ25JbiIsImlzU2lnbk91dCIsImFjdGl2ZSIsInN0cmluZyIsImxldmVsIiwidXBkYXRlRVhQIiwiaHQiLCJuZXh0IiwicmVzZXQiLCJ1c2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsZ0JBQVFMLEdBQUdNLE1BREg7QUFFUkMsbUJBQVdQLEdBQUdRLElBRk47QUFHUkMsbUJBQVdULEdBQUdRLElBSE47QUFJUkUsYUFBS1YsR0FBR1EsSUFKQTtBQUtSRyxrQkFBVVgsR0FBR1ksS0FMTDtBQU1SQyxhQUFVYixHQUFHWSxLQU5MO0FBT1JFLGlCQUFVZCxHQUFHWSxLQVBMO0FBUVJHLGtCQUFVO0FBUkYsS0FIUDtBQWFMQyxVQWJLLG9CQWFLO0FBQ04sWUFBSWhCLEdBQUdpQixJQUFILENBQVFDLFFBQVosRUFDSSxLQUFLQyxRQUFMLEdBREosS0FHSSxLQUFLQyxTQUFMO0FBQ1AsS0FsQkk7O0FBbUJMRCxjQUFVLG9CQUFXO0FBQ2pCLGFBQUtaLFNBQUwsQ0FBZWMsTUFBZixHQUF3QixJQUF4QjtBQUNBLGFBQUtaLFNBQUwsQ0FBZVksTUFBZixHQUF3QixLQUF4QjtBQUNILEtBdEJJO0FBdUJMRCxlQUFXLHFCQUFXO0FBQ2xCLGFBQUtULFFBQUwsQ0FBY1csTUFBZCxHQUF1QixLQUFLUixPQUFMLENBQWFRLE1BQWIsR0FBc0IsRUFBN0M7QUFDQSxhQUFLZixTQUFMLENBQWVjLE1BQWYsR0FBd0IsS0FBeEI7QUFDQSxhQUFLWixTQUFMLENBQWVZLE1BQWYsR0FBd0IsSUFBeEI7QUFDSCxLQTNCSTtBQTRCTEUsV0FBTyxlQUFTQSxNQUFULEVBQWU7QUFDbEIsYUFBS1YsR0FBTCxDQUFTUyxNQUFULEdBQWtCLFFBQU1DLE1BQXhCO0FBQ0gsS0E5Qkk7QUErQkxDLGVBQVcsbUJBQVNDLEVBQVQsRUFBYUMsSUFBYixFQUFrQjtBQUMxQjtBQUNGLEtBakNJO0FBa0NMQyxXQUFPLGlCQUFVO0FBQ2IsYUFBS0osS0FBTCxDQUFXdkIsR0FBR2lCLElBQUgsQ0FBUVcsSUFBUixDQUFhTCxLQUF4QjtBQUNEO0FBQ0Y7QUFyQ0ksQ0FBVCIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxIZWFkZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhdmF0YXI6IGNjLlNwcml0ZSxcclxuICAgICAgICBub2RlVXNlcnM6IGNjLk5vZGUsXHJcbiAgICAgICAgbm9kZUd1ZXN0OiBjYy5Ob2RlLFxyXG4gICAgICAgIGV4cDogY2MuTm9kZSxcclxuICAgICAgICB1c2VyTmFtZTogY2MuTGFiZWwsXHJcbiAgICAgICAgdmlwOiAgICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIHVzZXJSZWQ6ICBjYy5MYWJlbCxcclxuICAgICAgICBtYXNrRnVsbDogMCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGlmIChjYy5SZWRULklTX0xPR0lOKVxyXG4gICAgICAgICAgICB0aGlzLmlzU2lnbkluKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLmlzU2lnbk91dCgpO1xyXG4gICAgfSxcclxuICAgIGlzU2lnbkluOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5vZGVVc2Vycy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZUd1ZXN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGlzU2lnbk91dDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZS5zdHJpbmcgPSB0aGlzLnVzZXJSZWQuc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdGhpcy5ub2RlVXNlcnMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlR3Vlc3QuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBsZXZlbDogZnVuY3Rpb24obGV2ZWwpe1xyXG4gICAgICAgIHRoaXMudmlwLnN0cmluZyA9IFwiVklQXCIrbGV2ZWw7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRVhQOiBmdW5jdGlvbihodCwgbmV4dCl7XHJcbiAgICAgICAvLyB0aGlzLmV4cC53aWR0aCA9IGh0L25leHQqdGhpcy5tYXNrRnVsbDtcclxuICAgIH0sXHJcbiAgICByZXNldDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmxldmVsKGNjLlJlZFQudXNlci5sZXZlbCk7XHJcbiAgICAgICAvLyB0aGlzLnVwZGF0ZUVYUChjYy5SZWRULnVzZXIudmlwSFQsIGNjLlJlZFQudXNlci52aXBOZXh0KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=