
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/Menu/itemHeadMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b32dagCeD1MVp59ygCz6Tsa', 'itemHeadMenu');
// Script/Helper/Menu/itemHeadMenu.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		nodeUnSelect: cc.Node,
		nodeSelect: cc.Node
	},
	select: function select() {
		this.nodeUnSelect.active = false;
		this.nodeSelect.active = true;
		this.node.pauseSystemEvents();
	},
	unselect: function unselect() {
		this.nodeUnSelect.active = true;
		this.nodeSelect.active = false;
		this.node.resumeSystemEvents();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXE1lbnUvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcTWVudS9hc3NldHNcXFNjcmlwdFxcSGVscGVyXFxNZW51XFxpdGVtSGVhZE1lbnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibm9kZVVuU2VsZWN0IiwiTm9kZSIsIm5vZGVTZWxlY3QiLCJzZWxlY3QiLCJhY3RpdmUiLCJub2RlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJ1bnNlbGVjdCIsInJlc3VtZVN5c3RlbUV2ZW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsZ0JBQWNMLEdBQUdNLElBRE47QUFFWEMsY0FBY1AsR0FBR007QUFGTixFQUhKO0FBT1JFLFNBQVEsa0JBQVc7QUFDbEIsT0FBS0gsWUFBTCxDQUFrQkksTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxPQUFLRixVQUFMLENBQWdCRSxNQUFoQixHQUEyQixJQUEzQjtBQUNBLE9BQUtDLElBQUwsQ0FBVUMsaUJBQVY7QUFDQSxFQVhPO0FBWVJDLFdBQVUsb0JBQVc7QUFDcEIsT0FBS1AsWUFBTCxDQUFrQkksTUFBbEIsR0FBMkIsSUFBM0I7QUFDQSxPQUFLRixVQUFMLENBQWdCRSxNQUFoQixHQUEyQixLQUEzQjtBQUNBLE9BQUtDLElBQUwsQ0FBVUcsa0JBQVY7QUFDQTtBQWhCTyxDQUFUIiwiZmlsZSI6Iml0ZW1IZWFkTWVudS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcSGVscGVyXFxNZW51Iiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdG5vZGVVblNlbGVjdDogY2MuTm9kZSxcclxuXHRcdG5vZGVTZWxlY3Q6ICAgY2MuTm9kZSxcclxuXHR9LFxyXG5cdHNlbGVjdDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLm5vZGVVblNlbGVjdC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdHRoaXMubm9kZVNlbGVjdC5hY3RpdmUgICA9IHRydWU7XHJcblx0XHR0aGlzLm5vZGUucGF1c2VTeXN0ZW1FdmVudHMoKTtcclxuXHR9LFxyXG5cdHVuc2VsZWN0OiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMubm9kZVVuU2VsZWN0LmFjdGl2ZSA9IHRydWU7XHJcblx0XHR0aGlzLm5vZGVTZWxlY3QuYWN0aXZlICAgPSBmYWxzZTtcclxuXHRcdHRoaXMubm9kZS5yZXN1bWVTeXN0ZW1FdmVudHMoKTtcclxuXHR9LFxyXG59KTtcclxuIl19