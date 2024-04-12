"use strict";
cc._RF.push(module, '0faf5dS7zpEdoBIck7+SPhQ', 'PushNohu');
// Script/Util/PushNohu.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		prefab: cc.Prefab,
		isPush: false
	},
	onLoad: function onLoad() {
		this.list = [];
	},

	pushNotice: function pushNotice() {
		if (this.list.length > 0) {
			this.isPush = true;
			var data = this.list[0];
			this.addNotice(data);
			this.list.splice(0, 1);
		} else {
			this.isPush = false;
		}
	},
	onData: function onData(data) {
		if (this.isPush) {
			this.list.push(data);
		} else {
			this.addNotice(data);
		}
		this.isPush = true;
		this.addNews(data);
	},
	addNotice: function addNotice(data) {
		var notice = cc.instantiate(this.prefab);
		var notice = notice.getComponent('ThongBaoNoHu');
		notice.title.string = data.title;
		notice.users.string = data.name;
		notice.bet.string = helper.numberWithCommas(data.bet);

		notice.init(this);
		this.node.addChild(notice.node);
	},
	addNews: function addNews(data) {
		cc.RedT.inGame.newsContents.NewsAddText({ users: data.name, bet: data.bet, game: data.title, status: 1 });
	}
});

cc._RF.pop();