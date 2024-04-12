
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/KetSat/KetSat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4e75BUyTlCYKT+0A4g+bCK', 'KetSat');
// Script/Model/Dialog/Profile/KetSat/KetSat.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        header: {
            default: null,
            type: cc.Node
        },
        body: {
            default: null,
            type: cc.Node
        },
        redHT: {
            default: null,
            type: cc.Label
        },
        redKet: {
            default: null,
            type: cc.Label
        },
        buttonALL: {
            default: null,
            type: cc.Label
        },
        buttonAc: {
            default: null,
            type: cc.Label
        },
        inputGui: {
            default: null,
            type: cc.EditBox
        },
        inputRut: {
            default: null,
            type: cc.EditBox
        },
        inputOTP: {
            default: null,
            type: cc.EditBox
        },
        isGui: true
    },
    init: function init() {
        this.header = this.header.children.map(function (obj) {
            return obj.getComponent('itemContentMenu');
        });
    },

    onSelectHead: function onSelectHead(event, name) {
        this.header.forEach(function (header) {
            if (header.node.name == name) {
                header.select();
            } else {
                header.unselect();
            }
        });
        this.body.children.forEach(function (body) {
            if (body.name == name) {
                body.active = true;
            } else {
                body.active = false;
            }
        });
        this.clear();
        if (this.body.children[0].active) {
            this.isGui = true;
            this.buttonALL.string = 'GỬI TOÀN BỘ';
            this.buttonAc.string = 'GỬI';
        } else {
            this.isGui = false;
            this.buttonALL.string = 'RÚT TOÀN BỘ';
            this.buttonAc.string = 'RÚT';
        }
    },
    onClickHuy: function onClickHuy() {
        this.clear();
    },
    onClickAC: function onClickAC() {
        var data = {};
        if (this.isGui) {
            data.gui = helper.getOnlyNumberInString(this.inputGui.string);
            if (data.gui < 10000) {
                cc.RedT.inGame.notice.show({ title: 'GỬI RED', text: 'Số tiền gửi phải lớn hơn 10.000' });
                return void 0;
            }
        } else {
            data.rut = { red: helper.getOnlyNumberInString(this.inputRut.string), otp: this.inputOTP.string };
            if (data.rut < 10000) {
                cc.RedT.inGame.notice.show({ title: 'RÚT RED', text: 'Số tiền rút phải lớn hơn 10.000' });
                return void 0;
            }
        }
        cc.RedT.send({ user: { ket_sat: data } });
    },
    onClickALL: function onClickALL() {
        if (this.isGui) {
            this.inputGui.string = helper.numberWithCommas(cc.RedT.user.red);
        } else {
            this.inputRut.string = this.redKet.string;
        }
    },
    onClickAdd: function onClickAdd(event, value) {
        if (this.isGui) {
            this.inputGui.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.inputGui.string) * 1 + value * 1);
        } else {
            this.inputRut.string = helper.numberWithCommas(helper.getOnlyNumberInString(this.inputRut.string) * 1 + value * 1);
        }
    },
    onChangerInput: function onChangerInput(value) {
        value = helper.numberWithCommas(helper.getOnlyNumberInString(value));
        if (this.isGui) {
            this.inputGui.string = value == '0' ? '' : value;
        } else {
            this.inputRut.string = value == '0' ? '' : value;
        }
    },
    clear: function clear() {
        this.inputGui.string = this.inputRut.string = this.inputOTP.string = '';
    },
    onClickOTP: function onClickOTP() {
        cc.RedT.send({ otp: true });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEtldFNhdC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxLZXRTYXQvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEtldFNhdFxcS2V0U2F0LmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFkZXIiLCJkZWZhdWx0IiwidHlwZSIsIk5vZGUiLCJib2R5IiwicmVkSFQiLCJMYWJlbCIsInJlZEtldCIsImJ1dHRvbkFMTCIsImJ1dHRvbkFjIiwiaW5wdXRHdWkiLCJFZGl0Qm94IiwiaW5wdXRSdXQiLCJpbnB1dE9UUCIsImlzR3VpIiwiaW5pdCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiZ2V0Q29tcG9uZW50Iiwib25TZWxlY3RIZWFkIiwiZXZlbnQiLCJuYW1lIiwiZm9yRWFjaCIsIm5vZGUiLCJzZWxlY3QiLCJ1bnNlbGVjdCIsImFjdGl2ZSIsImNsZWFyIiwic3RyaW5nIiwib25DbGlja0h1eSIsIm9uQ2xpY2tBQyIsImRhdGEiLCJndWkiLCJnZXRPbmx5TnVtYmVySW5TdHJpbmciLCJSZWRUIiwiaW5HYW1lIiwibm90aWNlIiwic2hvdyIsInRpdGxlIiwidGV4dCIsInJ1dCIsInJlZCIsIm90cCIsInNlbmQiLCJ1c2VyIiwia2V0X3NhdCIsIm9uQ2xpY2tBTEwiLCJudW1iZXJXaXRoQ29tbWFzIiwib25DbGlja0FkZCIsInZhbHVlIiwib25DaGFuZ2VySW5wdXQiLCJvbkNsaWNrT1RQIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiOztBQUVBQyxH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M0MsSUFBbUQsQ0FBbkQsR0FBdURxQixRQUFNLENBQXJGLENBQXZCO0FBQ0EsU0FGRCxNQUVLO0FBQ0osaUJBQUt0QyxRQUFMLENBQWNpQixNQUFkLEdBQXVCcEMsT0FBT3VELGdCQUFQLENBQXdCdkQsT0FBT3lDLHFCQUFQLENBQTZCLEtBQUt0QixRQUFMLENBQWNpQixNQUEzQyxJQUFtRCxDQUFuRCxHQUF1RHFCLFFBQU0sQ0FBckYsQ0FBdkI7QUFDQTtBQUNELEtBMUdJO0FBMkdMQyxvQkFBZ0Isd0JBQVNELEtBQVQsRUFBZTtBQUM5QkEsZ0JBQVF6RCxPQUFPdUQsZ0JBQVAsQ0FBd0J2RCxPQUFPeUMscUJBQVAsQ0FBNkJnQixLQUE3QixDQUF4QixDQUFSO0FBQ0EsWUFBSSxLQUFLcEMsS0FBVCxFQUFnQjtBQUNmLGlCQUFLSixRQUFMLENBQWNtQixNQUFkLEdBQXVCcUIsU0FBUyxHQUFULEdBQWUsRUFBZixHQUFvQkEsS0FBM0M7QUFDQSxTQUZELE1BRUs7QUFDSixpQkFBS3RDLFFBQUwsQ0FBY2lCLE1BQWQsR0FBdUJxQixTQUFTLEdBQVQsR0FBZSxFQUFmLEdBQW9CQSxLQUEzQztBQUNBO0FBQ0QsS0FsSEk7QUFtSEx0QixXQUFPLGlCQUFVO0FBQ2hCLGFBQUtsQixRQUFMLENBQWNtQixNQUFkLEdBQXVCLEtBQUtqQixRQUFMLENBQWNpQixNQUFkLEdBQXVCLEtBQUtoQixRQUFMLENBQWNnQixNQUFkLEdBQXVCLEVBQXJFO0FBQ0EsS0FySEk7QUFzSEx1QixnQkFBWSxzQkFBVTtBQUNsQnpELFdBQUd3QyxJQUFILENBQVFTLElBQVIsQ0FBYSxFQUFDRCxLQUFJLElBQUwsRUFBYjtBQUNIO0FBeEhJLENBQVQiLCJmaWxlIjoiS2V0U2F0LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEtldFNhdCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHRoZWFkZXI6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlZEhUOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVkS2V0OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uQUxMOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLkxhYmVsLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnV0dG9uQWM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnB1dEd1aToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiAgICBjYy5FZGl0Qm94LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW5wdXRSdXQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogICAgY2MuRWRpdEJveCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlucHV0T1RQOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6ICAgIGNjLkVkaXRCb3gsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpc0d1aTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBpbml0KCl7XHJcbiAgICBcdHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXIuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqLmdldENvbXBvbmVudCgnaXRlbUNvbnRlbnRNZW51Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3RIZWFkOiBmdW5jdGlvbihldmVudCwgbmFtZSl7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcclxuICAgICAgICAgICAgaWYgKGhlYWRlci5ub2RlLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGhlYWRlci51bnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ib2R5LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYm9keSkge1xyXG4gICAgICAgICAgICBpZiAoYm9keS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBib2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgIGlmICh0aGlzLmJvZHkuY2hpbGRyZW5bMF0uYWN0aXZlKSB7XHJcbiAgICAgICAgXHR0aGlzLmlzR3VpID0gdHJ1ZTtcclxuICAgICAgICBcdHRoaXMuYnV0dG9uQUxMLnN0cmluZyA9ICdH4busSSBUT8OATiBC4buYJztcclxuXHQgICAgICAgIHRoaXMuYnV0dG9uQWMuc3RyaW5nID0gJ0fhu6xJJztcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICBcdHRoaXMuaXNHdWkgPSBmYWxzZTtcclxuICAgICAgICBcdHRoaXMuYnV0dG9uQUxMLnN0cmluZyA9ICdSw5pUIFRPw4BOIELhu5gnO1xyXG5cdCAgICAgICAgdGhpcy5idXR0b25BYy5zdHJpbmcgPSAnUsOaVCc7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tIdXk6IGZ1bmN0aW9uKCl7XHJcbiAgICBcdHRoaXMuY2xlYXIoKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrQUM6ICBmdW5jdGlvbigpe1xyXG4gICAgXHR2YXIgZGF0YSA9IHt9O1xyXG4gICAgXHRpZiAodGhpcy5pc0d1aSkge1xyXG4gICAgXHRcdGRhdGEuZ3VpID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmlucHV0R3VpLnN0cmluZyk7XHJcbiAgICBcdFx0aWYgKGRhdGEuZ3VpIDwgMTAwMDApIHtcclxuICAgIFx0XHRcdGNjLlJlZFQuaW5HYW1lLm5vdGljZS5zaG93KHt0aXRsZTogJ0fhu6xJIFJFRCcsIHRleHQ6ICdT4buRIHRp4buBbiBn4butaSBwaOG6o2kgbOG7m24gaMahbiAxMC4wMDAnfSk7XHJcbiAgICBcdFx0XHRyZXR1cm4gdm9pZCAwO1xyXG4gICAgXHRcdH1cclxuICAgIFx0fWVsc2V7XHJcbiAgICBcdFx0ZGF0YS5ydXQgPSB7cmVkOiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaW5wdXRSdXQuc3RyaW5nKSwgb3RwOiB0aGlzLmlucHV0T1RQLnN0cmluZ307XHJcbiAgICBcdFx0aWYgKGRhdGEucnV0IDwgMTAwMDApIHtcclxuICAgIFx0XHRcdGNjLlJlZFQuaW5HYW1lLm5vdGljZS5zaG93KHt0aXRsZTogJ1LDmlQgUkVEJywgdGV4dDogJ1Phu5EgdGnhu4FuIHLDunQgcGjhuqNpIGzhu5tuIGjGoW4gMTAuMDAwJ30pO1xyXG4gICAgXHRcdFx0cmV0dXJuIHZvaWQgMDtcclxuICAgIFx0XHR9XHJcbiAgICBcdH1cclxuICAgIFx0Y2MuUmVkVC5zZW5kKHt1c2VyOiB7a2V0X3NhdDogZGF0YX19KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrQUxMOiBmdW5jdGlvbigpe1xyXG4gICAgXHRpZiAodGhpcy5pc0d1aSkge1xyXG4gICAgXHRcdHRoaXMuaW5wdXRHdWkuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoY2MuUmVkVC51c2VyLnJlZCk7XHJcbiAgICBcdH1lbHNle1xyXG4gICAgXHRcdHRoaXMuaW5wdXRSdXQuc3RyaW5nID0gdGhpcy5yZWRLZXQuc3RyaW5nO1xyXG4gICAgXHR9XHJcbiAgICB9LFxyXG4gICAgb25DbGlja0FkZDogZnVuY3Rpb24oZXZlbnQsIHZhbHVlKXtcclxuICAgIFx0aWYgKHRoaXMuaXNHdWkpIHtcclxuICAgIFx0XHR0aGlzLmlucHV0R3VpLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pbnB1dEd1aS5zdHJpbmcpKjEgKyB2YWx1ZSoxKTtcclxuICAgIFx0fWVsc2V7XHJcbiAgICBcdFx0dGhpcy5pbnB1dFJ1dC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaW5wdXRSdXQuc3RyaW5nKSoxICsgdmFsdWUqMSk7XHJcbiAgICBcdH1cclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZXJJbnB1dDogZnVuY3Rpb24odmFsdWUpe1xyXG4gICAgXHR2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodmFsdWUpKTtcclxuICAgIFx0aWYgKHRoaXMuaXNHdWkpIHtcclxuICAgIFx0XHR0aGlzLmlucHV0R3VpLnN0cmluZyA9IHZhbHVlID09ICcwJyA/ICcnIDogdmFsdWU7XHJcbiAgICBcdH1lbHNle1xyXG4gICAgXHRcdHRoaXMuaW5wdXRSdXQuc3RyaW5nID0gdmFsdWUgPT0gJzAnID8gJycgOiB2YWx1ZTtcclxuICAgIFx0fVxyXG4gICAgfSxcclxuICAgIGNsZWFyOiBmdW5jdGlvbigpe1xyXG4gICAgXHR0aGlzLmlucHV0R3VpLnN0cmluZyA9IHRoaXMuaW5wdXRSdXQuc3RyaW5nID0gdGhpcy5pbnB1dE9UUC5zdHJpbmcgPSAnJztcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrT1RQOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLlJlZFQuc2VuZCh7b3RwOnRydWV9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=