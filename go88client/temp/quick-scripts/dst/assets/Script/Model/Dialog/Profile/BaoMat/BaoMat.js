
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/BaoMat/BaoMat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec1292CT1ZJL5oAGF36VfTW', 'BaoMat');
// Script/Model/Dialog/Profile/BaoMat/BaoMat.js

'use strict';

var DangKyOTP = require('DangKyOTP'),
    DoiMatKhau = require('DoiMatKhau'),
    BaoMatGame = require('BaoMatGame'),
    BaoMatTaiKhoan = require('BaoMatTaiKhoan');

cc.Class({
	extends: cc.Component,

	properties: {
		header: {
			default: null,
			type: cc.Node
		},
		DangKyOTP: DangKyOTP,
		DoiMatKhau: DoiMatKhau,
		BaoMatGame: BaoMatGame,
		BaoMatTaiKhoan: BaoMatTaiKhoan
	},
	init: function init() {
		var _this = this;

		this.body = [this.DangKyOTP.node, this.DoiMatKhau.node, this.BaoMatGame.node, this.BaoMatTaiKhoan.node];
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
			if (body.name == name) {
				body.active = true;
			} else {
				body.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEJhb01hdC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxCYW9NYXQvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEJhb01hdFxcQmFvTWF0LmpzIl0sIm5hbWVzIjpbIkRhbmdLeU9UUCIsInJlcXVpcmUiLCJEb2lNYXRLaGF1IiwiQmFvTWF0R2FtZSIsIkJhb01hdFRhaUtob2FuIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaGVhZGVyIiwiZGVmYXVsdCIsInR5cGUiLCJOb2RlIiwiaW5pdCIsImJvZHkiLCJub2RlIiwiUHJvbWlzZSIsImFsbCIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwiZ2V0Q29tcG9uZW50IiwidGhlbiIsInJlc3VsdCIsIm9uU2VsZWN0SGVhZCIsImV2ZW50IiwibmFtZSIsInNlbGVjdCIsInVuc2VsZWN0IiwiYWN0aXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFlBQWlCQyxRQUFRLFdBQVIsQ0FBckI7QUFBQSxJQUNDQyxhQUFpQkQsUUFBUSxZQUFSLENBRGxCO0FBQUEsSUFFQ0UsYUFBaUJGLFFBQVEsWUFBUixDQUZsQjtBQUFBLElBR0NHLGlCQUFpQkgsUUFBUSxnQkFBUixDQUhsQjs7QUFLQUksR0FBR0MsS0FBSCxDQUFTO0FBQ0xDLFVBQVNGLEdBQUdHLFNBRFA7O0FBR0xDLGFBQVk7QUFDWEMsVUFBUTtBQUNWQyxZQUFTLElBREM7QUFFVkMsU0FBU1AsR0FBR1E7QUFGRixHQURHO0FBS1hiLGFBQWdCQSxTQUxMO0FBTVhFLGNBQWdCQSxVQU5MO0FBT1hDLGNBQWdCQSxVQVBMO0FBUVhDLGtCQUFnQkE7QUFSTCxFQUhQO0FBYUxVLEtBYkssa0JBYUM7QUFBQTs7QUFDTCxPQUFLQyxJQUFMLEdBQVksQ0FBQyxLQUFLZixTQUFMLENBQWVnQixJQUFoQixFQUFzQixLQUFLZCxVQUFMLENBQWdCYyxJQUF0QyxFQUE0QyxLQUFLYixVQUFMLENBQWdCYSxJQUE1RCxFQUFrRSxLQUFLWixjQUFMLENBQW9CWSxJQUF0RixDQUFaO0FBQ0FDLFVBQVFDLEdBQVIsQ0FBWSxLQUFLUixNQUFMLENBQVlTLFFBQVosQ0FBcUJDLEdBQXJCLENBQXlCLFVBQVNDLEdBQVQsRUFBYztBQUNyRCxVQUFPQSxJQUFJQyxZQUFKLENBQWlCLGlCQUFqQixDQUFQO0FBQ0EsR0FGYyxDQUFaLEVBR0ZDLElBSEUsQ0FHRyxrQkFBVTtBQUNmLFNBQUtiLE1BQUwsR0FBY2MsTUFBZDtBQUNBLEdBTEU7QUFNQSxFQXJCSTs7QUFzQkxDLGVBQWMsc0JBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXFCO0FBQ3JDVixVQUFRQyxHQUFSLENBQVksS0FBS1IsTUFBTCxDQUFZVSxHQUFaLENBQWdCLFVBQVNWLE1BQVQsRUFBaUI7QUFDNUMsT0FBSUEsT0FBT00sSUFBUCxDQUFZVyxJQUFaLElBQW9CQSxJQUF4QixFQUE4QjtBQUM3QmpCLFdBQU9rQixNQUFQO0FBQ0EsSUFGRCxNQUVLO0FBQ0psQixXQUFPbUIsUUFBUDtBQUNBO0FBQ0QsR0FOVyxDQUFaO0FBT0FaLFVBQVFDLEdBQVIsQ0FBWSxLQUFLSCxJQUFMLENBQVVLLEdBQVYsQ0FBYyxVQUFTTCxJQUFULEVBQWU7QUFDeEMsT0FBSUEsS0FBS1ksSUFBTCxJQUFhQSxJQUFqQixFQUF1QjtBQUN0QlosU0FBS2UsTUFBTCxHQUFjLElBQWQ7QUFDQSxJQUZELE1BRUs7QUFDSmYsU0FBS2UsTUFBTCxHQUFjLEtBQWQ7QUFDQTtBQUNELEdBTlcsQ0FBWjtBQU9BO0FBckNPLENBQVQiLCJmaWxlIjoiQmFvTWF0LmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEJhb01hdCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgRGFuZ0t5T1RQICAgICAgPSByZXF1aXJlKCdEYW5nS3lPVFAnKSxcclxuXHREb2lNYXRLaGF1ICAgICA9IHJlcXVpcmUoJ0RvaU1hdEtoYXUnKSxcclxuXHRCYW9NYXRHYW1lICAgICA9IHJlcXVpcmUoJ0Jhb01hdEdhbWUnKSxcclxuXHRCYW9NYXRUYWlLaG9hbiA9IHJlcXVpcmUoJ0Jhb01hdFRhaUtob2FuJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgXHRoZWFkZXI6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogICAgY2MuTm9kZSxcclxuXHRcdH0sXHJcbiAgICBcdERhbmdLeU9UUDogICAgICBEYW5nS3lPVFAsXHJcbiAgICBcdERvaU1hdEtoYXU6ICAgICBEb2lNYXRLaGF1LFxyXG4gICAgXHRCYW9NYXRHYW1lOiAgICAgQmFvTWF0R2FtZSxcclxuICAgIFx0QmFvTWF0VGFpS2hvYW46IEJhb01hdFRhaUtob2FuLFxyXG4gICAgfSxcclxuICAgIGluaXQoKXtcclxuICAgIFx0dGhpcy5ib2R5ID0gW3RoaXMuRGFuZ0t5T1RQLm5vZGUsIHRoaXMuRG9pTWF0S2hhdS5ub2RlLCB0aGlzLkJhb01hdEdhbWUubm9kZSwgdGhpcy5CYW9NYXRUYWlLaG9hbi5ub2RlXTtcclxuICAgIFx0UHJvbWlzZS5hbGwodGhpcy5oZWFkZXIuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gb2JqLmdldENvbXBvbmVudCgnaXRlbUNvbnRlbnRNZW51Jyk7XHJcblx0XHR9KSlcclxuXHRcdC50aGVuKHJlc3VsdCA9PiB7XHJcblx0XHRcdHRoaXMuaGVhZGVyID0gcmVzdWx0O1xyXG5cdFx0fSk7XHJcbiAgICB9LFxyXG4gICAgb25TZWxlY3RIZWFkOiBmdW5jdGlvbihldmVudCwgbmFtZSl7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLmhlYWRlci5tYXAoZnVuY3Rpb24oaGVhZGVyKSB7XHJcblx0XHRcdGlmIChoZWFkZXIubm9kZS5uYW1lID09IG5hbWUpIHtcclxuXHRcdFx0XHRoZWFkZXIuc2VsZWN0KCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGhlYWRlci51bnNlbGVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KSk7XHJcblx0XHRQcm9taXNlLmFsbCh0aGlzLmJvZHkubWFwKGZ1bmN0aW9uKGJvZHkpIHtcclxuXHRcdFx0aWYgKGJvZHkubmFtZSA9PSBuYW1lKSB7XHJcblx0XHRcdFx0Ym9keS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRib2R5LmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KSk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==