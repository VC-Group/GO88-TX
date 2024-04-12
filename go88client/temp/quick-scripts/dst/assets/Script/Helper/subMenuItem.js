
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/subMenuItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19618U18J5J55/yKtlBzkGh', 'subMenuItem');
// Script/Helper/subMenuItem.js

"use strict";

cc.Class({
    extends: cc.Component,
    properties: {
        background: cc.Node,
        background2: cc.Node,
        text: cc.Node
    },
    onSelect: function onSelect() {
        this.background.active = false;
        this.background2.active = true;
        this.text.color = cc.Color.BLACK;
    },
    offSelect: function offSelect() {
        this.background.active = true;
        this.background2.active = false;
        this.text.color = cc.Color.WHITE;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcc3ViTWVudUl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmFja2dyb3VuZCIsIk5vZGUiLCJiYWNrZ3JvdW5kMiIsInRleHQiLCJvblNlbGVjdCIsImFjdGl2ZSIsImNvbG9yIiwiQ29sb3IiLCJCTEFDSyIsIm9mZlNlbGVjdCIsIldISVRFIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDtBQUVMQyxnQkFBWTtBQUNSQyxvQkFBYUwsR0FBR00sSUFEUjtBQUVSQyxxQkFBYVAsR0FBR00sSUFGUjtBQUdSRSxjQUFhUixHQUFHTTtBQUhSLEtBRlA7QUFPTEcsY0FBVSxvQkFBVTtBQUNuQixhQUFLSixVQUFMLENBQWdCSyxNQUFoQixHQUEwQixLQUExQjtBQUNBLGFBQUtILFdBQUwsQ0FBaUJHLE1BQWpCLEdBQTBCLElBQTFCO0FBQ0EsYUFBS0YsSUFBTCxDQUFVRyxLQUFWLEdBQWtCWCxHQUFHWSxLQUFILENBQVNDLEtBQTNCO0FBQ0EsS0FYSTtBQVlMQyxlQUFXLHFCQUFVO0FBQ3BCLGFBQUtULFVBQUwsQ0FBZ0JLLE1BQWhCLEdBQTBCLElBQTFCO0FBQ0EsYUFBS0gsV0FBTCxDQUFpQkcsTUFBakIsR0FBMEIsS0FBMUI7QUFDQSxhQUFLRixJQUFMLENBQVVHLEtBQVYsR0FBa0JYLEdBQUdZLEtBQUgsQ0FBU0csS0FBM0I7QUFDQTtBQWhCSSxDQUFUIiwiZmlsZSI6InN1Yk1lbnVJdGVtLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlciIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIGNjLk5vZGUsXHJcbiAgICAgICAgYmFja2dyb3VuZDI6IGNjLk5vZGUsXHJcbiAgICAgICAgdGV4dDogICAgICAgIGNjLk5vZGUsXHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3Q6IGZ1bmN0aW9uKCl7XHJcbiAgICBcdHRoaXMuYmFja2dyb3VuZC5hY3RpdmUgID0gZmFsc2VcclxuICAgIFx0dGhpcy5iYWNrZ3JvdW5kMi5hY3RpdmUgPSB0cnVlXHJcbiAgICBcdHRoaXMudGV4dC5jb2xvciA9IGNjLkNvbG9yLkJMQUNLXHJcbiAgICB9LFxyXG4gICAgb2ZmU2VsZWN0OiBmdW5jdGlvbigpe1xyXG4gICAgXHR0aGlzLmJhY2tncm91bmQuYWN0aXZlICA9IHRydWVcclxuICAgIFx0dGhpcy5iYWNrZ3JvdW5kMi5hY3RpdmUgPSBmYWxzZVxyXG4gICAgXHR0aGlzLnRleHQuY29sb3IgPSBjYy5Db2xvci5XSElURVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==