
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Menu/Menu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1763c2/MDpCQ4oC+FaHXfWh', 'Menu');
// Script/Model/Menu/Menu.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		games: cc.Node,
		adsContent: cc.PageView,
		adsTimeNext: 0,
		tabGameArr: {
			default: [],
			type: cc.Node
		}
	},
	/**
 onLoad() {
 	this.games = this.games.children.map(function(obj){
 		return obj.getComponent('iconGame');
 	});
 	this.setTimeAds();
 	this.node._onPreDestroy = function(){
 		clearTimeout(this.adsTime);
 	}.bind(this);
 },
 onEnable: function() {
 	this.adsContent.content.on(cc.Node.EventType.TOUCH_START,  this.eventStart, this);
 	this.adsContent.content.on(cc.Node.EventType.TOUCH_END,    this.setTimeAds, this);
 	this.adsContent.content.on(cc.Node.EventType.TOUCH_CANCEL, this.setTimeAds,   this);
 	this.adsContent.content.on(cc.Node.EventType.MOUSE_ENTER,  this.eventStart, this);
 	this.adsContent.content.on(cc.Node.EventType.MOUSE_LEAVE,  this.setTimeAds, this);
 },
 onDisable: function() {
 	this.adsContent.content.off(cc.Node.EventType.TOUCH_START,  this.eventStart, this);
 	this.adsContent.content.off(cc.Node.EventType.TOUCH_END,    this.setTimeAds, this);
 	this.adsContent.content.off(cc.Node.EventType.TOUCH_CANCEL, this.setTimeAds,   this);
 	this.adsContent.content.off(cc.Node.EventType.MOUSE_ENTER,  this.eventStart, this);
 	this.adsContent.content.off(cc.Node.EventType.MOUSE_LEAVE,  this.setTimeAds, this);
 },
 nextAds: function(){
 	var self = this;
 	if (this.adsContent._curPageIdx == this.adsContent._pages.length-1) {
 		this.adsContent.scrollToPage(0, 1.5);
 
 	}else{
 		this.adsContent.scrollToPage(this.adsContent._curPageIdx+1, 0.85);
 	}
 	this.setTimeAds();
 },
 eventStart: function(){
 	clearTimeout(this.adsTime);
 },
 setTimeAds: function(){
 	this.eventStart();
 	this.adsTime =  setTimeout(function(){
 		this.nextAds();
 	}
 	.bind(this), this.adsTimeNext*1000);
 },
 onHeadSelect: function(e) {
 	this.header.children.forEach(function(obj){
 		if (obj == e.target) {
 			obj.children[0].active = false;
 			obj.pauseSystemEvents();
 		}else{
 			obj.children[0].active = true;
 			obj.resumeSystemEvents();
 		}
 	});
 	this.games.forEach(function(game){
 		if (e.target.name == 'all' || game[e.target.name]) {
 			game.node.active = true;
 		}else{
 			game.node.active = false;
 		}
 	});
 },*/
	onBtnChoseTabGame: function onBtnChoseTabGame(event, data) {
		for (var i = 0; i < this.tabGameArr.length; i++) {
			this.tabGameArr[i].active = false;
		}
		this.tabGameArr[data].active = true;
	},

	onWait: function onWait() {
		cc.RedT.audio.playClick();
		if (cc.RedT.IS_LOGIN) {
			cc.RedT.inGame.notice.show({ title: '', text: 'Game đang bảo trì...' });
		} else {
			cc.RedT.inGame.dialog.showSignIn();
		}
	},
	openMiniGame: function openMiniGame(e, name) {
		cc.RedT.MiniPanel[name].openGame();
	},
	openMegaJ: function openMegaJ(e, name) {
		cc.RedT.MiniPanel.MegaJackpot.openGame(name);
	},
	regGame: function regGame(e, name) {
		cc.RedT.audio.playClick();
		if (cc.RedT.IS_LOGIN) {
			cc.RedT.inGame.loading.active = true;
			cc.RedT.send({ g: { reg: name } });
		} else {
			cc.RedT.inGame.dialog.showSignIn();
		}
	},
	openGame: function openGame(e, name) {
		cc.RedT.audio.playClick();
		if (cc.RedT.IS_LOGIN) {
			cc.RedT.MiniPanel.node.parent = null;
			cc.RedT.inGame.dataOn = false;
			cc.RedT.inGame.loading.active = true;
			cc.director.loadScene(name);
		} else {
			cc.RedT.inGame.dialog.showSignIn();
		}
	},
	openTXCL: function openTXCL(e, taixiu) {
		cc.RedT.MiniPanel.TaiXiu.openGame(null, taixiu);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcTWVudS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXE1lbnUvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxNZW51XFxNZW51LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImhlYWRlciIsIk5vZGUiLCJnYW1lcyIsImFkc0NvbnRlbnQiLCJQYWdlVmlldyIsImFkc1RpbWVOZXh0IiwidGFiR2FtZUFyciIsImRlZmF1bHQiLCJ0eXBlIiwib25CdG5DaG9zZVRhYkdhbWUiLCJldmVudCIsImRhdGEiLCJpIiwibGVuZ3RoIiwiYWN0aXZlIiwib25XYWl0IiwiUmVkVCIsImF1ZGlvIiwicGxheUNsaWNrIiwiSVNfTE9HSU4iLCJpbkdhbWUiLCJub3RpY2UiLCJzaG93IiwidGl0bGUiLCJ0ZXh0IiwiZGlhbG9nIiwic2hvd1NpZ25JbiIsIm9wZW5NaW5pR2FtZSIsImUiLCJuYW1lIiwiTWluaVBhbmVsIiwib3BlbkdhbWUiLCJvcGVuTWVnYUoiLCJNZWdhSmFja3BvdCIsInJlZ0dhbWUiLCJsb2FkaW5nIiwic2VuZCIsImciLCJyZWciLCJub2RlIiwicGFyZW50IiwiZGF0YU9uIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJvcGVuVFhDTCIsInRhaXhpdSIsIlRhaVhpdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsVUFBYUwsR0FBR00sSUFETDtBQUVYQyxTQUFhUCxHQUFHTSxJQUZMO0FBR1hFLGNBQWFSLEdBQUdTLFFBSEw7QUFJTEMsZUFBYSxDQUpSO0FBS0xDLGNBQVk7QUFDUkMsWUFBUyxFQUREO0FBRVJDLFNBQU1iLEdBQUdNO0FBRkQ7QUFMUCxF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InNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXE1lbnUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0aGVhZGVyOiAgICAgIGNjLk5vZGUsXHJcblx0XHRnYW1lczogICAgICAgY2MuTm9kZSxcclxuXHRcdGFkc0NvbnRlbnQ6ICBjYy5QYWdlVmlldyxcclxuICAgICAgICBhZHNUaW1lTmV4dDogMCxcclxuICAgICAgICB0YWJHYW1lQXJyOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfVxyXG5cdH0sXHJcblx0LyoqXHJcblx0b25Mb2FkKCkge1xyXG5cdFx0dGhpcy5nYW1lcyA9IHRoaXMuZ2FtZXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHJldHVybiBvYmouZ2V0Q29tcG9uZW50KCdpY29uR2FtZScpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLnNldFRpbWVBZHMoKTtcclxuXHRcdHRoaXMubm9kZS5fb25QcmVEZXN0cm95ID0gZnVuY3Rpb24oKXtcclxuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMuYWRzVGltZSk7XHJcblx0XHR9LmJpbmQodGhpcyk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmFkc0NvbnRlbnQuY29udGVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgIHRoaXMuZXZlbnRTdGFydCwgdGhpcyk7XHJcblx0XHR0aGlzLmFkc0NvbnRlbnQuY29udGVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsICAgIHRoaXMuc2V0VGltZUFkcywgdGhpcyk7XHJcblx0XHR0aGlzLmFkc0NvbnRlbnQuY29udGVudC5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuc2V0VGltZUFkcywgICB0aGlzKTtcclxuXHRcdHRoaXMuYWRzQ29udGVudC5jb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCAgdGhpcy5ldmVudFN0YXJ0LCB0aGlzKTtcclxuXHRcdHRoaXMuYWRzQ29udGVudC5jb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCAgdGhpcy5zZXRUaW1lQWRzLCB0aGlzKTtcclxuXHR9LFxyXG5cdG9uRGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmFkc0NvbnRlbnQuY29udGVudC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsICB0aGlzLmV2ZW50U3RhcnQsIHRoaXMpO1xyXG5cdFx0dGhpcy5hZHNDb250ZW50LmNvbnRlbnQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgICAgdGhpcy5zZXRUaW1lQWRzLCB0aGlzKTtcclxuXHRcdHRoaXMuYWRzQ29udGVudC5jb250ZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMuc2V0VGltZUFkcywgICB0aGlzKTtcclxuXHRcdHRoaXMuYWRzQ29udGVudC5jb250ZW50Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgIHRoaXMuZXZlbnRTdGFydCwgdGhpcyk7XHJcblx0XHR0aGlzLmFkc0NvbnRlbnQuY29udGVudC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsICB0aGlzLnNldFRpbWVBZHMsIHRoaXMpO1xyXG5cdH0sXHJcblx0bmV4dEFkczogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdGlmICh0aGlzLmFkc0NvbnRlbnQuX2N1clBhZ2VJZHggPT0gdGhpcy5hZHNDb250ZW50Ll9wYWdlcy5sZW5ndGgtMSkge1xyXG5cdFx0XHR0aGlzLmFkc0NvbnRlbnQuc2Nyb2xsVG9QYWdlKDAsIDEuNSk7XHJcblxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuYWRzQ29udGVudC5zY3JvbGxUb1BhZ2UodGhpcy5hZHNDb250ZW50Ll9jdXJQYWdlSWR4KzEsIDAuODUpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5zZXRUaW1lQWRzKCk7XHJcblx0fSxcclxuXHRldmVudFN0YXJ0OiBmdW5jdGlvbigpe1xyXG5cdFx0Y2xlYXJUaW1lb3V0KHRoaXMuYWRzVGltZSk7XHJcblx0fSxcclxuXHRzZXRUaW1lQWRzOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5ldmVudFN0YXJ0KCk7XHJcblx0XHR0aGlzLmFkc1RpbWUgPSAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHR0aGlzLm5leHRBZHMoKTtcclxuXHRcdH1cclxuXHRcdC5iaW5kKHRoaXMpLCB0aGlzLmFkc1RpbWVOZXh0KjEwMDApO1xyXG5cdH0sXHJcblx0b25IZWFkU2VsZWN0OiBmdW5jdGlvbihlKSB7XHJcblx0XHR0aGlzLmhlYWRlci5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdGlmIChvYmogPT0gZS50YXJnZXQpIHtcclxuXHRcdFx0XHRvYmouY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0b2JqLnBhdXNlU3lzdGVtRXZlbnRzKCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdG9iai5yZXN1bWVTeXN0ZW1FdmVudHMoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmdhbWVzLmZvckVhY2goZnVuY3Rpb24oZ2FtZSl7XHJcblx0XHRcdGlmIChlLnRhcmdldC5uYW1lID09ICdhbGwnIHx8IGdhbWVbZS50YXJnZXQubmFtZV0pIHtcclxuXHRcdFx0XHRnYW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Z2FtZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LCovXHJcbiAgICBvbkJ0bkNob3NlVGFiR2FtZShldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50YWJHYW1lQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFiR2FtZUFycltpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWJHYW1lQXJyW2RhdGFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cdG9uV2FpdDogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcblx0XHRpZiAoY2MuUmVkVC5JU19MT0dJTil7XHJcblx0XHQgICBjYy5SZWRULmluR2FtZS5ub3RpY2Uuc2hvdyh7dGl0bGU6JycsIHRleHQ6J0dhbWUgxJFhbmcgYuG6o28gdHLDrC4uLid9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5kaWFsb2cuc2hvd1NpZ25JbigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b3Blbk1pbmlHYW1lOiBmdW5jdGlvbihlLCBuYW1lKXtcclxuXHRcdGNjLlJlZFQuTWluaVBhbmVsW25hbWVdLm9wZW5HYW1lKCk7XHJcblx0fSxcclxuXHRvcGVuTWVnYUo6IGZ1bmN0aW9uKGUsIG5hbWUpe1xyXG5cdFx0Y2MuUmVkVC5NaW5pUGFuZWwuTWVnYUphY2twb3Qub3BlbkdhbWUobmFtZSk7XHJcblx0fSxcclxuXHRyZWdHYW1lOiBmdW5jdGlvbihlLCBuYW1lKXtcclxuXHRcdGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcblx0XHRpZiAoY2MuUmVkVC5JU19MT0dJTil7XHJcblx0XHRcdGNjLlJlZFQuaW5HYW1lLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0Y2MuUmVkVC5zZW5kKHtnOntyZWc6bmFtZX19KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5kaWFsb2cuc2hvd1NpZ25JbigpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b3BlbkdhbWU6IGZ1bmN0aW9uKGUsIG5hbWUpe1xyXG5cdFx0Y2MuUmVkVC5hdWRpby5wbGF5Q2xpY2soKTtcclxuXHRcdGlmIChjYy5SZWRULklTX0xPR0lOKXtcclxuXHRcdFx0Y2MuUmVkVC5NaW5pUGFuZWwubm9kZS5wYXJlbnQgPSBudWxsO1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5kYXRhT24gPSBmYWxzZTtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRjYy5kaXJlY3Rvci5sb2FkU2NlbmUobmFtZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuZGlhbG9nLnNob3dTaWduSW4oKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9wZW5UWENMOiBmdW5jdGlvbihlLCB0YWl4aXUpe1xyXG5cdFx0Y2MuUmVkVC5NaW5pUGFuZWwuVGFpWGl1Lm9wZW5HYW1lKG51bGwsIHRhaXhpdSk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==