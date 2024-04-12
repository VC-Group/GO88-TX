"use strict";
cc._RF.push(module, '359e3FxWmpPGarLjvZuJIkS', 'NewsContents');
// Script/Model/News/NewsContents.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,
	properties: {
		prefabItem: cc.Prefab
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	update: function update(t) {
		this.node.position = cc.v2(this.node.position.x - 100 * t, 0);
		if (-this.node.width > this.node.position.x) {
			this.reset();
		}
	},
	setNews: function setNews() {
		this.node.active = true;
		this.node.position = cc.v2(this.RedT.node.width + 200, 0);
	},
	reset: function reset() {
		this.node.destroyAllChildren();
		this.node.active = false;
	},
	onData: function onData(data) {
		if (void 0 !== data.a) {
			this.NewsAddArray(data.a);
		}

		if (void 0 !== data.t) {
			this.NewsAddText(data.t);
		}
	},
	NewsAddArray: function NewsAddArray(arr) {
		var _this = this;

		var self = this;
		Promise.all(arr.map(function (text) {
			var item = cc.instantiate(self.prefabItem);
			item = item.getComponent('NewsItem');

			item.users.string = text.users;
			item.bet.string = helper.numberWithCommas(text.bet);
			item.game.string = text.game;

			self.node.addChild(item.node);
			return item;
		})).then(function (result) {
			if (!_this.node.active) {
				_this.setNews();
			}
		});
	},
	NewsAddText: function NewsAddText(text) {
		var item = cc.instantiate(this.prefabItem);
		item = item.getComponent('NewsItem');

		if (!!text.status) {
			item.status.node.active = true;
			if (text.status == 1) {
				item.status.string = "(Nổ Hũ)";
				item.win.string = "nổ hũ";
			} else {
				item.status.string = "(Thắng Lớn)";
			}
		}
		item.users.string = text.users;
		item.bet.string = helper.numberWithCommas(text.bet);
		item.game.string = text.game;

		this.node.addChild(item.node);

		if (!this.node.active) {
			this.setNews();
		}
	}
});

cc._RF.pop();