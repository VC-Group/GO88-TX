
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/ShopRut.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c31c4AiiPZIAIuHq62sT4bb', 'ShopRut');
// Script/Model/Dialog/Shop/ShopRut.js

'use strict';

var Bank = require('Bank');

cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		Bank: Bank
	},
	init: function init() {

		this.Bank.init();
		this.body = [this.Bank];
		this.header = this.header.children.map(function (obj) {
			return obj.getComponent('itemHeadMenu');
		});
	},

	onSelectHead: function onSelectHead(event, name) {
		this.header.forEach(function (header) {
			if (header.node.name === name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.body.forEach(function (body) {
			if (body.node.name === name) {
				body.node.active = true;
			} else {
				body.node.active = false;
			}
		});
	},
	superView: function superView(name) {},
	onData: function onData(data) {
		if (!!data.bank) {
			this.Bank.onData(data.bank);
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3AvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXFNob3BSdXQuanMiXSwibmFtZXMiOlsiQmFuayIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFkZXIiLCJOb2RlIiwiaW5pdCIsImJvZHkiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsImdldENvbXBvbmVudCIsIm9uU2VsZWN0SGVhZCIsImV2ZW50IiwibmFtZSIsImZvckVhY2giLCJub2RlIiwic2VsZWN0IiwidW5zZWxlY3QiLCJhY3RpdmUiLCJzdXBlclZpZXciLCJvbkRhdGEiLCJkYXRhIiwiYmFuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPQyxRQUFRLE1BQVIsQ0FBWDs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsVUFBV0wsR0FBR00sSUFESDtBQUVYUixRQUFXQTtBQUZBLEVBSEo7QUFPUlMsS0FQUSxrQkFPRjs7QUFFTCxPQUFLVCxJQUFMLENBQVVTLElBQVY7QUFDQSxPQUFLQyxJQUFMLEdBQVksQ0FBQyxLQUFLVixJQUFOLENBQVo7QUFDQSxPQUFLTyxNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZSSxRQUFaLENBQXFCQyxHQUFyQixDQUF5QixVQUFTQyxHQUFULEVBQWM7QUFDcEQsVUFBT0EsSUFBSUMsWUFBSixDQUFpQixjQUFqQixDQUFQO0FBQ0EsR0FGYSxDQUFkO0FBR0EsRUFkTzs7QUFlUkMsZUFBYyxzQkFBU0MsS0FBVCxFQUFnQkMsSUFBaEIsRUFBcUI7QUFDbEMsT0FBS1YsTUFBTCxDQUFZVyxPQUFaLENBQW9CLFVBQVNYLE1BQVQsRUFBaUI7QUFDcEMsT0FBSUEsT0FBT1ksSUFBUCxDQUFZRixJQUFaLEtBQXFCQSxJQUF6QixFQUErQjtBQUM5QlYsV0FBT2EsTUFBUDtBQUNBLElBRkQsTUFFSztBQUNKYixXQUFPYyxRQUFQO0FBQ0E7QUFDRCxHQU5EO0FBT0EsT0FBS1gsSUFBTCxDQUFVUSxPQUFWLENBQWtCLFVBQVNSLElBQVQsRUFBZTtBQUNoQyxPQUFJQSxLQUFLUyxJQUFMLENBQVVGLElBQVYsS0FBbUJBLElBQXZCLEVBQTZCO0FBQzVCUCxTQUFLUyxJQUFMLENBQVVHLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxJQUZELE1BRUs7QUFDSlosU0FBS1MsSUFBTCxDQUFVRyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0E7QUFDRCxHQU5EO0FBT0EsRUE5Qk87QUErQlJDLFlBQVUsbUJBQVNOLElBQVQsRUFBYyxDQUV2QixDQWpDTztBQWtDUk8sU0FBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ3JCLE1BQUksQ0FBQyxDQUFDQSxLQUFLQyxJQUFYLEVBQWdCO0FBQ2YsUUFBSzFCLElBQUwsQ0FBVXdCLE1BQVYsQ0FBaUJDLEtBQUtDLElBQXRCO0FBQ0E7QUFDRDtBQXRDTyxDQUFUIiwiZmlsZSI6IlNob3BSdXQuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBCYW5rID0gcmVxdWlyZSgnQmFuaycpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0aGVhZGVyOiAgICBjYy5Ob2RlLFxyXG5cdFx0QmFuazogICAgICBCYW5rLFxyXG5cdH0sXHJcblx0aW5pdCgpe1xyXG5cdCBcclxuXHRcdHRoaXMuQmFuay5pbml0KCk7XHJcblx0XHR0aGlzLmJvZHkgPSBbdGhpcy5CYW5rXTtcclxuXHRcdHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXIuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gb2JqLmdldENvbXBvbmVudCgnaXRlbUhlYWRNZW51Jyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uU2VsZWN0SGVhZDogZnVuY3Rpb24oZXZlbnQsIG5hbWUpe1xyXG5cdFx0dGhpcy5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcclxuXHRcdFx0aWYgKGhlYWRlci5ub2RlLm5hbWUgPT09IG5hbWUpIHtcclxuXHRcdFx0XHRoZWFkZXIuc2VsZWN0KCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGhlYWRlci51bnNlbGVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYm9keS5mb3JFYWNoKGZ1bmN0aW9uKGJvZHkpIHtcclxuXHRcdFx0aWYgKGJvZHkubm9kZS5uYW1lID09PSBuYW1lKSB7XHJcblx0XHRcdFx0Ym9keS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGJvZHkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRzdXBlclZpZXc6ZnVuY3Rpb24obmFtZSl7XHJcblx0XHQgXHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0aWYgKCEhZGF0YS5iYW5rKXtcclxuXHRcdFx0dGhpcy5CYW5rLm9uRGF0YShkYXRhLmJhbmspO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=