
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Candy/Candy_line/Candy_line.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6e0c4Ag8FpJQ6D5qWtj+OkS', 'Candy_line');
// Script/Game/Candy/Candy_line/Candy_line.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,

    properties: {
        lines: cc.Node,
        mainLines: cc.Node
    },
    init: function init(obj) {
        var _this = this;

        this.RedT = obj;
        var self = this;;
        Promise.all(this.mainLines.children.map(function (line) {
            return line.getComponent('Candy_iLine');
        })).then(function (result) {
            _this.mainLines = result;
        });
        this.selectAll(null, "1");
    },
    onOpen: function onOpen() {
        cc.RedT.audio.playClick();
        this.node.active = true;
    },
    onClose: function onClose() {
        cc.RedT.audio.playUnClick();
        if (this.node.active && this.data.length < 1) {
            this.RedT.notice.show({ title: 'CẢNH BÁO', text: 'Chọn ít nhất 1 dòng' });
        } else {
            this.node.active = false;
        }
    },
    select: function select(e) {
        var node = e.target;
        if (node.children[0].active) {
            node.children[0].active = false;
            node.children[1].active = true;
        } else {
            node.children[0].active = true;
            node.children[1].active = false;
        }
        this.check();
    },
    check: function check() {
        var _this2 = this;

        var self = this;
        Promise.all(this.lines.children.map(function (line, index) {
            return line.children[1].active ? index + 1 : void 0;
        })).then(function (result) {
            Promise.all(result.filter(function (data) {
                return void 0 !== data;
            })).then(function (data) {
                _this2.data = data;
                _this2.RedT.labelLine.string = data.length;
                _this2.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this2.RedT.bet.string));
            });
        });
    },
    selectChan: function selectChan() {
        var _this3 = this;

        var self = this;
        Promise.all(this.lines.children.map(function (line, index) {
            var i = index + 1;
            if (i % 2) {
                line.children[0].active = true;
                line.children[1].active = false;
            } else {
                line.children[0].active = false;
                line.children[1].active = true;
                return i;
            }
            return void 0;
        })).then(function (result) {
            Promise.all(result.filter(function (data) {
                return void 0 !== data;
            })).then(function (data) {
                _this3.data = data;
                _this3.RedT.labelLine.string = data.length;
                _this3.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this3.RedT.bet.string));
            });
        });
    },
    selectLe: function selectLe() {
        var _this4 = this;

        var self = this;
        Promise.all(this.lines.children.map(function (line, index) {
            var i = index + 1;
            if (i % 2) {
                line.children[0].active = false;
                line.children[1].active = true;
                return i;
            } else {
                line.children[0].active = true;
                line.children[1].active = false;
            }
            return void 0;
        })).then(function (result) {
            Promise.all(result.filter(function (data) {
                return void 0 !== data;
            })).then(function (data) {
                _this4.data = data;
                _this4.RedT.labelLine.string = data.length;
                _this4.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this4.RedT.bet.string));
            });
        });
    },
    selectAll: function selectAll(e, select) {
        var _this5 = this;

        var self = this;
        Promise.all(this.lines.children.map(function (line, index) {
            var check = select == "1";
            line.children[1].active = check;
            line.children[0].active = !check;
            return check ? index + 1 : void 0;
        })).then(function (result) {
            Promise.all(result.filter(function (data, index) {
                return void 0 !== data;
            })).then(function (data) {
                _this5.data = data;
                _this5.RedT.labelLine.string = data.length;
                _this5.RedT.tong.string = helper.numberWithCommas(data.length * helper.getOnlyNumberInString(_this5.RedT.bet.string));
            });
        });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X2xpbmUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcQ2FuZHlfbGluZS9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQ2FuZHlcXENhbmR5X2xpbmVcXENhbmR5X2xpbmUuanMiXSwibmFtZXMiOlsiaGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpbmVzIiwiTm9kZSIsIm1haW5MaW5lcyIsImluaXQiLCJvYmoiLCJSZWRUIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsImxpbmUiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwicmVzdWx0Iiwic2VsZWN0QWxsIiwib25PcGVuIiwiYXVkaW8iLCJwbGF5Q2xpY2siLCJub2RlIiwiYWN0aXZlIiwib25DbG9zZSIsInBsYXlVbkNsaWNrIiwiZGF0YSIsImxlbmd0aCIsIm5vdGljZSIsInNob3ciLCJ0aXRsZSIsInRleHQiLCJzZWxlY3QiLCJlIiwidGFyZ2V0IiwiY2hlY2siLCJpbmRleCIsImZpbHRlciIsImxhYmVsTGluZSIsInN0cmluZyIsInRvbmciLCJudW1iZXJXaXRoQ29tbWFzIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwiYmV0Iiwic2VsZWN0Q2hhbiIsImkiLCJzZWxlY3RMZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGVBQVdMLEdBQUdNLElBRE47QUFFUkMsbUJBQVdQLEdBQUdNO0FBRk4sS0FIUDtBQU9MRSxVQUFNLGNBQVNDLEdBQVQsRUFBYTtB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QUFaLEVBQW9CO0FBQUE7O0FBQzNCLFlBQUl2QixPQUFPLElBQVg7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFLUixLQUFMLENBQVdTLFFBQVgsQ0FBb0JDLEdBQXBCLENBQXdCLFVBQVNDLElBQVQsRUFBZXNCLEtBQWYsRUFBcUI7QUFDckQsZ0JBQUlELFFBQVFILFVBQVUsR0FBdEI7QUFDQWxCLGlCQUFLRixRQUFMLENBQWMsQ0FBZCxFQUFpQlcsTUFBakIsR0FBMEJZLEtBQTFCO0FBQ0FyQixpQkFBS0YsUUFBTCxDQUFjLENBQWQsRUFBaUJXLE1BQWpCLEdBQTBCLENBQUNZLEtBQTNCO0FBQ0EsbUJBQU9BLFFBQVFDLFFBQU0sQ0FBZCxHQUFrQixLQUFLLENBQTlCO0FBQ0gsU0FMVyxDQUFaLEVBTUNwQixJQU5ELENBTU0sa0JBQVU7QUFDWk4sb0JBQVFDLEdBQVIsQ0FBWU0sT0FBT29CLE1BQVAsQ0FBYyxVQUFTWCxJQUFULEVBQWVVLEtBQWYsRUFBcUI7QUFDM0MsdUJBQU8sS0FBSyxDQUFMLEtBQVdWLElBQWxCO0FBQ0gsYUFGVyxDQUFaLEVBR0NWLElBSEQsQ0FHTSxnQkFBUTtBQUNWLHVCQUFLVSxJQUFMLEdBQVlBLElBQVo7QUFDQSx1QkFBS2xCLElBQUwsQ0FBVThCLFNBQVYsQ0FBb0JDLE1BQXBCLEdBQTZCYixLQUFLQyxNQUFsQztBQUNBLHVCQUFLbkIsSUFBTCxDQUFVZ0MsSUFBVixDQUFlRCxNQUFmLEdBQXdCM0MsT0FBTzZDLGdCQUFQLENBQXdCZixLQUFLQyxNQUFMLEdBQWMvQixPQUFPOEMscUJBQVAsQ0FBNkIsT0FBS2xDLElBQUwsQ0FBVW1DLEdBQVYsQ0FBY0osTUFBM0MsQ0FBdEMsQ0FBeEI7QUFDSCxhQVBEO0FBUUgsU0FmRDtBQWdCSDtBQTdISSxDQUFUIiwiZmlsZSI6IkNhbmR5X2xpbmUuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxDYW5keVxcQ2FuZHlfbGluZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpbmVzOiAgICAgY2MuTm9kZSxcclxuICAgICAgICBtYWluTGluZXM6IGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24ob2JqKXtcclxuICAgICAgICB0aGlzLlJlZFQgPSBvYmo7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzOztcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm1haW5MaW5lcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSl7XHJcbiAgICAgICAgICAgIHJldHVybiBsaW5lLmdldENvbXBvbmVudCgnQ2FuZHlfaUxpbmUnKTtcclxuICAgICAgICB9KSlcclxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1haW5MaW5lcyA9IHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNlbGVjdEFsbChudWxsLCBcIjFcIik7XHJcbiAgICB9LFxyXG4gICAgb25PcGVuOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZTogZnVuY3Rpb24oKXtcclxuICAgICAgICBjYy5SZWRULmF1ZGlvLnBsYXlVbkNsaWNrKCk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUgJiYgdGhpcy5kYXRhLmxlbmd0aCA8IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5SZWRULm5vdGljZS5zaG93KHt0aXRsZTonQ+G6ok5IIELDgU8nLCB0ZXh0OidDaOG7jW4gw610IG5o4bqldCAxIGTDsm5nJ30pO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlbGVjdDogZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciBub2RlID0gZS50YXJnZXQ7XHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrKCk7XHJcbiAgICB9LFxyXG4gICAgY2hlY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihsaW5lLCBpbmRleCl7XHJcbiAgICAgICAgICAgIHJldHVybiBsaW5lLmNoaWxkcmVuWzFdLmFjdGl2ZSA/IGluZGV4KzEgOiB2b2lkIDA7XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocmVzdWx0LmZpbHRlcihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IGRhdGE7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQubGFiZWxMaW5lLnN0cmluZyA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWRULnRvbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5sZW5ndGggKiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuUmVkVC5iZXQuc3RyaW5nKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzZWxlY3RDaGFuOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saW5lcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgaSA9IGluZGV4KzE7XHJcbiAgICAgICAgICAgIGlmIChpJTIpIHtcclxuICAgICAgICAgICAgICAgIGxpbmUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGxpbmUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGluZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGxpbmUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB2b2lkIDA7XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwocmVzdWx0LmZpbHRlcihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2b2lkIDAgIT09IGRhdGE7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQubGFiZWxMaW5lLnN0cmluZyA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWRULnRvbmcuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS5sZW5ndGggKiBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuUmVkVC5iZXQuc3RyaW5nKSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBzZWxlY3RMZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubGluZXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGxpbmUsIGluZGV4KXtcclxuICAgICAgICAgICAgdmFyIGkgPSBpbmRleCsxO1xyXG4gICAgICAgICAgICBpZiAoaSUyKSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGluZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgbGluZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGluZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdm9pZCAwICE9PSBkYXRhO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5SZWRULmxhYmVsTGluZS5zdHJpbmcgPSBkYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC50b25nLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEubGVuZ3RoICogaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLlJlZFQuYmV0LnN0cmluZykpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0QWxsOiBmdW5jdGlvbihlLCBzZWxlY3QpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saW5lcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obGluZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICB2YXIgY2hlY2sgPSBzZWxlY3QgPT0gXCIxXCI7XHJcbiAgICAgICAgICAgIGxpbmUuY2hpbGRyZW5bMV0uYWN0aXZlID0gY2hlY2s7XHJcbiAgICAgICAgICAgIGxpbmUuY2hpbGRyZW5bMF0uYWN0aXZlID0gIWNoZWNrO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2sgPyBpbmRleCsxIDogdm9pZCAwO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24oZGF0YSwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZvaWQgMCAhPT0gZGF0YTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuUmVkVC5sYWJlbExpbmUuc3RyaW5nID0gZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlJlZFQudG9uZy5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLmxlbmd0aCAqIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5SZWRULmJldC5zdHJpbmcpKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=