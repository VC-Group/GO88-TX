"use strict";
cc._RF.push(module, '84193OGZrdD/YtGX/ttIqDX', 'DEvent');
// Script/Model/Dialog/DEvent/DEvent.js

'use strict';

var eventTaiXiu = require('EventTaiXiu');
var eventAngrybird = require('EventAngrybird');
var eventBigBabol = require('EventBigBabol');
var eventMiniPoker = require('EventMiniPoker');

cc.Class({
	extends: cc.Component,

	properties: {
		menu: cc.Node,
		content: cc.Node,
		eventAngrybird: eventAngrybird,
		eventBigBabol: eventBigBabol,
		eventMiniPoker: eventMiniPoker,
		eventTaiXiu: eventTaiXiu
	},
	selectEvent: function selectEvent(event) {
		this.menu.children.forEach(function (menu) {
			if (menu.name === event.target.name) {
				menu.children[0].active = false;
				menu.children[1].active = true;
			} else {
				menu.children[0].active = true;
				menu.children[1].active = false;
			}
		});
		this.content.children.forEach(function (content) {
			if (content.name === event.target.name) {
				content.active = true;
			} else {
				content.active = false;
			}
		});
	},
	onData: function onData(data) {
		if (!!data.taixiu) {
			this.eventTaiXiu.onData(data.taixiu);
		}
	},
	onHU: function onHU(hu) {
		this.eventMiniPoker.onData(hu.mini_poker);
		this.eventAngrybird.onData(hu.arb);
		this.eventBigBabol.onData(hu.big_babol);
	}
});

cc._RF.pop();