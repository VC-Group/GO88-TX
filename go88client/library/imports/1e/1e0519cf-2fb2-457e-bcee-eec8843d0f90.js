"use strict";
cc._RF.push(module, '1e051nPL7JFfrzu7siEPQ+Q', 'Mini3Cay_history');
// Script/Game/Mini3Cay/Mini3Cay_history.js

'use strict';

var helper = require('Helper');

cc.Class({
    extends: cc.Component,
    properties: {
        page: cc.Prefab,
        content: cc.Node,
        cointRed: cc.Node,
        cointXu: cc.Node,
        red: true
    },
    init: function init(obj) {
        this.RedT = obj;
    },
    onLoad: function onLoad() {
        var _this = this;

        this.page = cc.instantiate(this.page);
        this.page.y = -307;
        this.node.addChild(this.page);
        this.page = this.page.getComponent('Pagination');
        Promise.all(this.content.children.map(function (obj) {
            return obj.getComponent('Mini3Cay_ihistory');
        })).then(function (result) {
            _this.content = result;
        });
        this.page.init(this);
    },

    onEnable: function onEnable() {
        this.get_data();
    },
    //onDisable: function() {
    //},
    get_data: function get_data() {
        var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

        cc.RedT.send({ g: { mini3cay: { logs: { red: this.red, page: page } } } });
    },
    changerCoint: function changerCoint() {
        this.red = !this.red;
        this.cointRed.active = !this.cointRed.active;
        this.cointXu.active = !this.cointXu.active;
        this.get_data();
    },
    onData: function onData(data) {
        var self = this;
        this.page.onSet(data.page, data.kmess, data.total);
        Promise.all(this.content.map(function (obj, i) {
            var dataT = data.data[i];
            if (void 0 !== dataT) {
                obj.node.active = true;
                obj.time.string = helper.getStringDateByTime(dataT.time);
                obj.phien.string = dataT.id;
                obj.cuoc.string = helper.numberWithCommas(dataT.bet);
                obj.win.string = helper.numberWithCommas(dataT.win);
                Promise.all(obj.kq.map(function (kq, index) {
                    kq.spriteFrame = cc.RedT.util.card.getCard(dataT.kq[index].card, dataT.kq[index].type);
                }));
            } else {
                obj.node.active = false;
            }
        }));
    }
    /**
    reset: function(){
        Promise.all(this.content.children.map(function(obj){
            obj.node.active = false;
        }))
    },
    */
});

cc._RF.pop();