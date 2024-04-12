
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/Fish/EF/fish_EF.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a77aSDxt5CnLbD8ehMPfQo', 'fish_EF');
// Script/Game/BanCa/Fish/EF/fish_EF.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        anim: dragonBones.ArmatureDisplay,
        ef: cc.String
    },
    onLoad: function onLoad() {
        this.onDie = function () {
            this.node.destroy();
        };
        this.anim.on(dragonBones.EventObject.COMPLETE, this.onDie, this);
        this.anim.playAnimation(this.ef, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoXFxFRi8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYVxcRmlzaFxcRUYvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoXFxFRlxcZmlzaF9FRi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhbmltIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJlZiIsIlN0cmluZyIsIm9uTG9hZCIsIm9uRGllIiwibm9kZSIsImRlc3Ryb3kiLCJvbiIsIkV2ZW50T2JqZWN0IiwiQ09NUExFVEUiLCJwbGF5QW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVk7QUFDUkMsY0FBTUMsWUFBWUMsZUFEVjtBQUVSQyxZQUFNUixHQUFHUztBQUZELEtBSFA7QUFPTEMsVUFQSyxvQkFPRztBQUNKLGFBQUtDLEtBQUwsR0FBYSxZQUFXO0FBQ3BCLGlCQUFLQyxJQUFMLENBQVVDLE9BQVY7QUFDSCxTQUZEO0FBR0EsYUFBS1IsSUFBTCxDQUFVUyxFQUFWLENBQWFSLFlBQVlTLFdBQVosQ0FBd0JDLFFBQXJDLEVBQStDLEtBQUtMLEtBQXBELEVBQTJELElBQTNEO0FBQ0EsYUFBS04sSUFBTCxDQUFVWSxhQUFWLENBQXdCLEtBQUtULEVBQTdCLEVBQWlDLENBQWpDO0FBQ0g7QUFiSSxDQUFUIiwiZmlsZSI6ImZpc2hfRUYuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEVGIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYW5pbTogZHJhZ29uQm9uZXMuQXJtYXR1cmVEaXNwbGF5LFxyXG4gICAgICAgIGVmOiAgIGNjLlN0cmluZyxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLm9uRGllID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYW5pbS5vbihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5DT01QTEVURSwgdGhpcy5vbkRpZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5hbmltLnBsYXlBbmltYXRpb24odGhpcy5lZiwgMSk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19