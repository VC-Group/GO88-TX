
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/DaiLy/DaiLy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b34d9AiZuRD2apbYes7Z3Zz', 'DaiLy');
// Script/Model/Dialog/Shop/DaiLy/DaiLy.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        header: cc.Node,
        body: cc.Node,
        isLoaded: false,
        content: cc.Node,
        prefabDaiLy: cc.Prefab
    },
    init: function init(obj) {
        this.RedT = obj;
        this.daily_list = [];
    },

    onLoad: function onLoad() {
        this.header = this.header.children.map(function (obj) {
            return obj.getComponent('itemContentMenu');
        });
    },
    onEnable: function onEnable() {
        this.RedT.DaiLy.loadDaiLy();
    },
    loadDaiLy: function loadDaiLy() {
        if (!this.isLoaded) {
            cc.RedT.send({ shop: { get_daily: true } });
        }
    },
    onSelectHead: function onSelectHead(event) {
        var name = event.target.name;
        Promise.all(this.header.map(function (header) {
            if (header.node.name == name) {
                header.select();
            } else {
                header.unselect();
            }
        }));
        Promise.all(this.body.children.map(function (body) {
            if (body.name == name) {
                body.active = true;
            } else {
                body.active = false;
            }
        }));
    },
    onData: function onData(data) {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.onDaiLy(data);
        }
    },
    onDaiLy: function onDaiLy(data) {
        var self = this;
        var regex = new RegExp("^" + cc.RedT.user.name + "$", 'i');
        this.daily_list = data.map(function (daily, index) {
            !self.RedT.ChuyenRed.meDaily && (self.RedT.ChuyenRed.meDaily = regex.test(daily.nickname));
            var item = cc.instantiate(self.prefabDaiLy);
            item = item.getComponent('ChuyenRed_daily');
            item.init(self.RedT.ChuyenRed, daily, index);
            item.bg.active = index % 2;
            self.content.addChild(item.node);
            return item;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXERhaUx5Ly4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXERhaUx5L2Fzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxEYWlMeVxcRGFpTHkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaGVhZGVyIiwiTm9kZSIsImJvZHkiLCJpc0xvYWRlZCIsImNvbnRlbnQiLCJwcmVmYWJEYWlMeSIsIlByZWZhYiIsImluaXQiLCJvYmoiLCJSZWRUIiwiZGFpbHlfbGlzdCIsIm9uTG9hZCIsImNoaWxkcmVuIiwibWFwIiwiZ2V0Q29tcG9uZW50Iiwib25FbmFibGUiLCJEYWlMeSIsImxvYWREYWlMeSIsInNlbmQiLCJzaG9wIiwiZ2V0X2RhaWx5Iiwib25TZWxlY3RIZWFkIiwiZXZlbnQiLCJuYW1lIiwidGFyZ2V0IiwiUHJvbWlzZSIsImFsbCIsIm5vZGUiLCJzZWxlY3QiLCJ1bnNlbGVjdCIsImFjdGl2ZSIsIm9uRGF0YSIsImRhdGEiLCJvbkRhaUx5Iiwic2VsZiIsInJlZ2V4IiwiUmVnRXhwIiwidXNlciIsImRhaWx5IiwiaW5kZXgiLCJDaHV5ZW5SZWQiLCJtZURhaWx5IiwidGVzdCIsIm5pY2tuYW1lIiwiaXRlbSIsImluc3RhbnRpYXRlIiwiYmciLCJhZGRDaGlsZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLGFBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGdCQUFZO0FBQ1JDLGdCQUFXTCxHQUFHTSxJQUROO0FBRVJDLGNBQVdQLEdBQUdNLElBRk47QUFHUkUsa0JBQVUsS0FIRjtBQUlSQyxpQkFBU1QsR0FBR00sSUFK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Q0FBbEI7QUFTSDtBQTlESSxDQUFUIiwiZmlsZSI6IkRhaUx5LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXERhaUx5Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgaGVhZGVyOiAgICBjYy5Ob2RlLFxyXG4gICAgICAgIGJvZHk6ICAgICAgY2MuTm9kZSxcclxuICAgICAgICBpc0xvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgY29udGVudDogY2MuTm9kZSxcclxuICAgICAgICBwcmVmYWJEYWlMeTogY2MuUHJlZmFiXHJcbiAgICB9LFxyXG4gICAgaW5pdChvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgICAgICB0aGlzLmRhaWx5X2xpc3QgPSBbXTtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5oZWFkZXIgPSB0aGlzLmhlYWRlci5jaGlsZHJlbi5tYXAoZnVuY3Rpb24ob2JqKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdpdGVtQ29udGVudE1lbnUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuUmVkVC5EYWlMeS5sb2FkRGFpTHkoKTtcclxuICAgIH0sXHJcbiAgICBsb2FkRGFpTHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLmlzTG9hZGVkKSB7XHJcbiAgICAgICAgICAgIGNjLlJlZFQuc2VuZCh7c2hvcDp7Z2V0X2RhaWx5OnRydWV9fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uU2VsZWN0SGVhZDogZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGxldCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5oZWFkZXIubWFwKGZ1bmN0aW9uKGhlYWRlcikge1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyLm5vZGUubmFtZSA9PSBuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXIuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ib2R5LmNoaWxkcmVuLm1hcChmdW5jdGlvbihib2R5KSB7XHJcbiAgICAgICAgICAgIGlmIChib2R5Lm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYm9keS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGJvZHkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgb25EYXRhOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTG9hZGVkKXtcclxuICAgICAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMub25EYWlMeShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EYWlMeTogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgbGV0IHNlbGYgID0gdGhpcztcclxuICAgICAgICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKFwiXlwiICsgY2MuUmVkVC51c2VyLm5hbWUgKyBcIiRcIiwgJ2knKTtcclxuICAgICAgICB0aGlzLmRhaWx5X2xpc3QgPSBkYXRhLm1hcChmdW5jdGlvbihkYWlseSwgaW5kZXgpe1xyXG4gICAgICAgICAgICAhc2VsZi5SZWRULkNodXllblJlZC5tZURhaWx5ICYmIChzZWxmLlJlZFQuQ2h1eWVuUmVkLm1lRGFpbHkgPSByZWdleC50ZXN0KGRhaWx5Lm5pY2tuYW1lKSk7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gY2MuaW5zdGFudGlhdGUoc2VsZi5wcmVmYWJEYWlMeSk7XHJcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtLmdldENvbXBvbmVudCgnQ2h1eWVuUmVkX2RhaWx5Jyk7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5pdChzZWxmLlJlZFQuQ2h1eWVuUmVkLCBkYWlseSwgaW5kZXgpO1xyXG4gICAgICAgICAgICBpdGVtLmJnLmFjdGl2ZSA9IGluZGV4JTI7XHJcbiAgICAgICAgICAgIHNlbGYuY29udGVudC5hZGRDaGlsZChpdGVtLm5vZGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=