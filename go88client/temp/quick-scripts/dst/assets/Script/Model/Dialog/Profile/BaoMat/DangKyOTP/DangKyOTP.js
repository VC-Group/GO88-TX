
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/BaoMat/DangKyOTP/DangKyOTP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6aa41Wg701MCq0Vmi5zwJ+1', 'DangKyOTP');
// Script/Model/Dialog/Profile/BaoMat/DangKyOTP/DangKyOTP.js

'use strict';

var BrowserUtil = require('BrowserUtil');
var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		phone: cc.EditBox,
		nodeReg: cc.Node,
		nodeInfo: cc.Node,
		labelPhone: cc.Label,
		labelStatus: cc.Label,
		captcha: cc.EditBox,
		capchaSprite: cc.Sprite
	},
	onEnable: function onEnable() {
		this.reCaptcha();
	},
	onDisable: function onDisable() {
		this.clear();
	},
	onRegClick: function onRegClick() {
		if (!helper.checkPhoneValid(this.phone.string)) {
			cc.RedT.inGame.notice.show({ title: '', text: 'Số điện thoại không hợp lệ.' });
		} else if (this.captcha.string.length != 4) {
			cc.RedT.inGame.notice.show({ title: '', text: 'Captcha không hợp lệ.' });
		} else {
			cc.RedT.send({ user: { security: { regPhone: { phone: this.phone.string, captcha: this.captcha.string } } } });
		}
	},
	clear: function clear() {
		this.phone.string = '';
		this.captcha.string = '';
	},
	statusOTP: function statusOTP(status) {
		this.nodeReg.active = !status;
		this.nodeInfo.active = status;
		if (cc.RedT.user.veryphone) {
			this.labelStatus.string = 'Đã Xác Thực';
			this.labelStatus.node.color = this.labelStatus.node.color.fromHEX('06B30D');
		} else {
			this.labelStatus.string = 'Chưa Xác Thực';
			this.labelStatus.node.color = this.labelStatus.node.color.fromHEX('FF0000');
		}
	},
	initCaptcha: function initCaptcha(t) {
		var i = this,
		    o = new Image();
		o.src = t, o.width = 150, o.height = 50, setTimeout(function () {
			var t = new cc.Texture2D();
			t.initWithElement(o), t.handleLoadedTexture();
			var e = new cc.SpriteFrame(t);
			i.capchaSprite.spriteFrame = e;
		}, 10);
	},
	reCaptcha: function reCaptcha() {
		cc.RedT.send({ captcha: 'regOTP' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxCYW9NYXRcXERhbmdLeU9UUC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcQmFvTWF0XFxEYW5nS3lPVFAvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEJhb01hdFxcRGFuZ0t5T1RQXFxEYW5nS3lPVFAuanMiXSwibmFtZXMiOlsiQnJvd3NlclV0aWwiLCJyZXF1aXJlIiwiaGVscGVyIiwiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicGhvbmUiLCJFZGl0Qm94Iiwibm9kZVJlZyIsIk5vZGUiLCJub2RlSW5mbyIsImxhYmVsUGhvbmUiLCJMYWJlbCIsImxhYmVsU3RhdHVzIiwiY2FwdGNoYSIsImNhcGNoYVNwcml0ZSIsIlNwcml0ZSIsIm9uRW5hYmxlIiwicmVDYXB0Y2hhIiwib25EaXNhYmxlIiwiY2xlYXIiLCJvblJlZ0NsaWNrIiwiY2hlY2tQaG9uZVZhbGlkIiwic3RyaW5nIiwiUmVkVCIsImluR2FtZSIsIm5vdGljZSIsInNob3ciLCJ0aXRsZSIsInRleHQiLCJsZW5ndGgiLCJzZW5kIiwidXNlciIsInNlY3VyaXR5IiwicmVnUGhvbmUiLCJzdGF0dXNPVFAiLCJzdGF0dXMiLCJhY3RpdmUiLCJ2ZXJ5cGhvbmUiLCJub2RlIiwiY29sb3IiLCJmcm9tSEVYIiwiaW5pdENhcHRjaGEiLCJ0IiwiaSIsIm8iLCJJbWFnZSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic2V0VGltZW91dCIsIlRleHR1cmUyRCIsImluaXRXaXRoRWxlbWVudCIsImhhbmRsZUxvYWRlZFRleHR1cmUiLCJlIiwiU3ByaXRlRnJhbWUiLCJzcHJpdGVGcmFtZSJdLCJtYXBwaW5ncyI6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QUFQLEVBQVI7QUFDQVIsS0FBRVMsZUFBRixDQUFrQlAsQ0FBbEIsR0FDQUYsRUFBRVUsbUJBQUYsRUFEQTtBQUVBLE9BQUlDLElBQUksSUFBSXJELEdBQUdzRCxXQUFQLENBQW1CWixDQUFuQixDQUFSO0FBQ0FDLEtBQUU3QixZQUFGLENBQWV5QyxXQUFmLEdBQTZCRixDQUE3QjtBQUNBLEdBTkQsRUFNRyxFQU5ILENBSEE7QUFVQSxFQXhETztBQXlEUnBDLFlBQVcscUJBQVU7QUFDcEJqQixLQUFHdUIsSUFBSCxDQUFRTyxJQUFSLENBQWEsRUFBQ2pCLFNBQVEsUUFBVCxFQUFiO0FBQ0E7QUEzRE8sQ0FBVCIsImZpbGUiOiJEYW5nS3lPVFAuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXEJhb01hdFxcRGFuZ0t5T1RQIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBCcm93c2VyVXRpbCA9IHJlcXVpcmUoJ0Jyb3dzZXJVdGlsJyk7XHJcbnZhciBoZWxwZXIgICAgICA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5cclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0cGhvbmU6IGNjLkVkaXRCb3gsXHJcblx0XHRub2RlUmVnOiAgY2MuTm9kZSxcclxuXHRcdG5vZGVJbmZvOiBjYy5Ob2RlLFxyXG5cdFx0bGFiZWxQaG9uZTogIGNjLkxhYmVsLFxyXG5cdFx0bGFiZWxTdGF0dXM6IGNjLkxhYmVsLFxyXG5cdFx0Y2FwdGNoYTogY2MuRWRpdEJveCxcclxuXHRcdGNhcGNoYVNwcml0ZTogY2MuU3ByaXRlLFxyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMucmVDYXB0Y2hhKCk7XHJcblx0fSxcclxuXHRvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuY2xlYXIoKTtcclxuXHR9LFxyXG5cdG9uUmVnQ2xpY2s6IGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCFoZWxwZXIuY2hlY2tQaG9uZVZhbGlkKHRoaXMucGhvbmUuc3RyaW5nKSlcclxuXHRcdHtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUubm90aWNlLnNob3coe3RpdGxlOicnLCB0ZXh0OidT4buRIMSRaeG7h24gdGhv4bqhaSBraMO0bmcgaOG7o3AgbOG7hy4nfSk7XHJcblx0XHR9ZWxzZSBpZiAodGhpcy5jYXB0Y2hhLnN0cmluZy5sZW5ndGggIT0gNCkge1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5ub3RpY2Uuc2hvdyh7dGl0bGU6JycsIHRleHQ6J0NhcHRjaGEga2jDtG5nIGjhu6NwIGzhu4cuJ30pO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNjLlJlZFQuc2VuZCh7dXNlcjp7c2VjdXJpdHk6e3JlZ1Bob25lOntwaG9uZTp0aGlzLnBob25lLnN0cmluZywgY2FwdGNoYTp0aGlzLmNhcHRjaGEuc3RyaW5nfX19fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRjbGVhcjogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMucGhvbmUuc3RyaW5nICAgPSAnJztcclxuXHRcdHRoaXMuY2FwdGNoYS5zdHJpbmcgPSAnJztcclxuXHR9LFxyXG5cdHN0YXR1c09UUDogZnVuY3Rpb24oc3RhdHVzKXtcclxuXHRcdHRoaXMubm9kZVJlZy5hY3RpdmUgID0gIXN0YXR1cztcclxuXHRcdHRoaXMubm9kZUluZm8uYWN0aXZlID0gc3RhdHVzO1xyXG5cdFx0aWYgKGNjLlJlZFQudXNlci52ZXJ5cGhvbmUpIHtcclxuXHRcdFx0dGhpcy5sYWJlbFN0YXR1cy5zdHJpbmcgPSAnxJDDoyBYw6FjIFRo4buxYyc7XHJcblx0XHRcdHRoaXMubGFiZWxTdGF0dXMubm9kZS5jb2xvciAgPSB0aGlzLmxhYmVsU3RhdHVzLm5vZGUuY29sb3IuZnJvbUhFWCgnMDZCMzBEJyk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5sYWJlbFN0YXR1cy5zdHJpbmcgPSAnQ2jGsGEgWMOhYyBUaOG7sWMnO1xyXG5cdFx0XHR0aGlzLmxhYmVsU3RhdHVzLm5vZGUuY29sb3IgID0gdGhpcy5sYWJlbFN0YXR1cy5ub2RlLmNvbG9yLmZyb21IRVgoJ0ZGMDAwMCcpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0aW5pdENhcHRjaGE6IGZ1bmN0aW9uKHQpIHtcclxuXHRcdHZhciBpID0gdGhpc1xyXG5cdFx0ICAsIG8gPSBuZXcgSW1hZ2U7XHJcblx0XHRvLnNyYyA9IHQsXHJcblx0XHRvLndpZHRoID0gMTUwLFxyXG5cdFx0by5oZWlnaHQgPSA1MCxcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciB0ID0gbmV3IGNjLlRleHR1cmUyRDtcclxuXHRcdFx0dC5pbml0V2l0aEVsZW1lbnQobyksXHJcblx0XHRcdHQuaGFuZGxlTG9hZGVkVGV4dHVyZSgpO1xyXG5cdFx0XHR2YXIgZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0KTtcclxuXHRcdFx0aS5jYXBjaGFTcHJpdGUuc3ByaXRlRnJhbWUgPSBlXHJcblx0XHR9LCAxMCk7XHJcblx0fSxcclxuXHRyZUNhcHRjaGE6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULnNlbmQoe2NhcHRjaGE6J3JlZ09UUCd9KTtcclxuXHR9LFxyXG59KTtcclxuIl19