"use strict";
cc._RF.push(module, '3bf1do9lYJMTYqfuawCCr7t', 'NapRed_itemOne');
// Script/Model/Dialog/Shop/NapRed/NapRed_itemOne.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        background: {
            default: null,
            type: cc.Node
        },
        text: {
            default: null,
            type: cc.Label
        }
    },

    init: function init(obj, i_arg, i_text) {
        var fclick = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        this.controll = obj;
        this.local_arg = i_arg;
        this.local_text = i_text;
        fclick !== null && (this.local_click = fclick);
    },
    onClickChanger: function onClickChanger() {
        cc.RedT.audio.playClick();
        this.controll[this.local_text].string = this.text.string;
        this.controll[this.local_arg].forEach(function (obj) {
            if (obj === this) {
                obj.onSelect();
            } else {
                obj.unSelect();
            }
        }.bind(this));
        if (!!this.controll.backT) {
            this.controll.backT(this.data);
        }
        if (this.local_click !== void 0) {
            this.controll[this.local_click](this);
        }
    },
    onSelect: function onSelect() {
        this.background.active = true;
        this.node.pauseSystemEvents();
    },
    unSelect: function unSelect() {
        this.background.active = false;
        this.node.resumeSystemEvents();
    }
});

cc._RF.pop();