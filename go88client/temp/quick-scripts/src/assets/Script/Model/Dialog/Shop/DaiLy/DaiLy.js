"use strict";
cc._RF.push(module, 'b34d9AiZuRD2apbYes7Z3Zz', 'DaiLy');
// Script/Model/Dialog/Shop/DaiLy/DaiLy.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        header: cc.Node,
        body: cc.Node,
        isLoaded: false,
        content: cc.Node,
        prefabDaiLy: cc.Prefab
    },
    init: function init(obj) {
        this.RedT = obj;
        this.daily_list = [];
    },

    onLoad: function onLoad() {
        this.header = this.header.children.map(function (obj) {
            return obj.getComponent('itemContentMenu');
        });
    },
    onEnable: function onEnable() {
        this.RedT.DaiLy.loadDaiLy();
    },
    loadDaiLy: function loadDaiLy() {
        if (!this.isLoaded) {
            cc.RedT.send({ shop: { get_daily: true } });
        }
    },
    onSelectHead: function onSelectHead(event) {
        var name = event.target.name;
        Promise.all(this.header.map(function (header) {
            if (header.node.name == name) {
                header.select();
            } else {
                header.unselect();
            }
        }));
        Promise.all(this.body.children.map(function (body) {
            if (body.name == name) {
                body.active = true;
            } else {
                body.active = false;
            }
        }));
    },
    onData: function onData(data) {
        if (!this.isLoaded) {
            this.isLoaded = true;
            this.onDaiLy(data);
        }
    },
    onDaiLy: function onDaiLy(data) {
        var self = this;
        var regex = new RegExp("^" + cc.RedT.user.name + "$", 'i');
        this.daily_list = data.map(function (daily, index) {
            !self.RedT.ChuyenRed.meDaily && (self.RedT.ChuyenRed.meDaily = regex.test(daily.nickname));
            var item = cc.instantiate(self.prefabDaiLy);
            item = item.getComponent('ChuyenRed_daily');
            item.init(self.RedT.ChuyenRed, daily, index);
            item.bg.active = index % 2;
            self.content.addChild(item.node);
            return item;
        });
    }
});

cc._RF.pop();