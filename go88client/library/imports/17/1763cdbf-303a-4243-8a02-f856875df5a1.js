"use strict";
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