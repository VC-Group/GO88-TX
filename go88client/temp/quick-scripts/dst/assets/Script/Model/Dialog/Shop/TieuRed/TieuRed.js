
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/TieuRed/TieuRed.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00244bdHdZHHoauw7/tgQlF', 'TieuRed');
// Script/Model/Dialog/Shop/TieuRed/TieuRed.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        header: {
            default: null,
            type: cc.Node
        },
        MuaTheCao: {
            default: null,
            type: cc.Node
        }
    },
    init: function init() {
        var _this = this;

        this.MuaTheCao = this.MuaTheCao.getComponent('shopMuaTheCao');
        this.MuaTheCao.init();
        this.body = [this.MuaTheCao];
        Promise.all(this.header.children.map(function (obj) {
            return obj.getComponent('itemContentMenu');
        })).then(function (result) {
            _this.header = result;
        });
    },

    onSelectHead: function onSelectHead(event, name) {
        Promise.all(this.header.map(function (header) {
            if (header.node.name == name) {
                header.select();
            } else {
                header.unselect();
            }
        }));
        Promise.all(this.body.map(function (body) {
            if (body.node.name == name) {
                body.node.active = true;
            } else {
                body.node.active = false;
            }
        }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXFRpZXVSZWQvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcVGlldVJlZC9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcVGlldVJlZFxcVGlldVJlZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFkZXIiLCJkZWZhdWx0IiwidHlwZSIsIk5vZGUiLCJNdWFUaGVDYW8iLCJpbml0IiwiZ2V0Q29tcG9uZW50IiwiYm9keSIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsInRoZW4iLCJyZXN1bHQiLCJvblNlbGVjdEhlYWQiLCJldmVudCIsIm5hbWUiLCJub2RlIiwic2VsZWN0IiwidW5zZWxlY3QiLCJhY3RpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNMQyxhQUFTRixHQUFHRyxTQURQOztBQUdMQyxnQkFBWTtBQUNSQyxnQkFBUTtBQUNKQyxxQkFBUyxJQURMO0FBRUpDLGtCQUFNUCxHQUFHUTtBQUZMLFNBREE7QUFLUkMsbUJBQVc7QUFDUEgscUJBQVMsSUFERjtBQUVQQyxrQkFBTVAsR0FBR1E7QUFGRjtBQUxILEtBSFA7QUFhTEUsUUFiSyxrQkFhQztBQUFBOztBQUNGLGFBQUtELFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxDQUFlRSxZQUFmLENBQTRCLGVBQTVCLENBQWpCO0FBQ0EsYUFBS0YsU0FBTCxDQUFlQyxJQUFmO0FBQ0EsYUFBS0UsSUFBTCxHQUFZLENBQUMsS0FBS0gsU0FBTixDQUFaO0FBQ0FJLGdCQUFRQyxHQUFSLENBQVksS0FBS1QsTUFBTCxDQUFZVSxRQUFaLENBQXFCQyxHQUFyQixDQUF5QixVQUFTQyxHQUFULEVBQWM7QUFDL0MsbUJBQU9BLElBQUlOLFlBQUosQ0FBaUIsaUJBQWpCLENBQVA7QUFDSCxTQUZXLENBQVosRUFHQ08sSUFIRCxDQUdNLGtCQUFVO0FBQ1osa0JBQUtiLE1BQUwsR0FBY2MsTUFBZDtBQUNILFNBTEQ7QUFNSCxLQXZCSTs7QUF3QkxDLGtCQUFjLHNCQUFTQyxLQUFULEVBQWdCQyxJQUFoQixFQUFxQjtBQUMvQlQsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLVCxNQUFMLENBQVlXLEdBQVosQ0FBZ0IsVUFBU1gsTUFBVCxFQUFpQjtBQUN6QyxnQkFBSUEsT0FBT2tCLElBQVAsQ0FBWUQsSUFBWixJQUFvQkEsSUFBeEIsRUFBOEI7QUFDMUJqQix1QkFBT21CLE1BQVA7QUFDSCxhQUZELE1BRUs7QUFDRG5CLHVCQUFPb0IsUUFBUDtBQUNIO0FBQ0osU0FOVyxDQUFaO0FBT0FaLGdCQUFRQyxHQUFSLENBQVksS0FBS0YsSUFBTCxDQUFVSSxHQUFWLENBQWMsVUFBU0osSUFBVCxFQUFlO0FBQ3JDLGdCQUFJQSxLQUFLVyxJQUFMLENBQVVELElBQVYsSUFBa0JBLElBQXRCLEVBQTRCO0FBQ3hCVixxQkFBS1csSUFBTCxDQUFVRyxNQUFWLEdBQW1CLElBQW5CO0FBQ0gsYUFGRCxNQUVLO0FBQ0RkLHFCQUFLVyxJQUFMLENBQVVHLE1BQVYsR0FBbUIsS0FBbkI7QUFDSDtBQUNKLFNBTlcsQ0FBWjtBQU9IO0FBdkNJLENBQVQiLCJmaWxlIjoiVGlldVJlZC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxUaWV1UmVkIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBNdWFUaGVDYW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIGluaXQoKXtcclxuICAgICAgICB0aGlzLk11YVRoZUNhbyA9IHRoaXMuTXVhVGhlQ2FvLmdldENvbXBvbmVudCgnc2hvcE11YVRoZUNhbycpO1xyXG4gICAgICAgIHRoaXMuTXVhVGhlQ2FvLmluaXQoKTtcclxuICAgICAgICB0aGlzLmJvZHkgPSBbdGhpcy5NdWFUaGVDYW9dO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMuaGVhZGVyLmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmopIHtcclxuICAgICAgICAgICAgcmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ2l0ZW1Db250ZW50TWVudScpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0SGVhZDogZnVuY3Rpb24oZXZlbnQsIG5hbWUpe1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMuaGVhZGVyLm1hcChmdW5jdGlvbihoZWFkZXIpIHtcclxuICAgICAgICAgICAgaWYgKGhlYWRlci5ub2RlLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGhlYWRlci51bnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMuYm9keS5tYXAoZnVuY3Rpb24oYm9keSkge1xyXG4gICAgICAgICAgICBpZiAoYm9keS5ub2RlLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgYm9keS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==