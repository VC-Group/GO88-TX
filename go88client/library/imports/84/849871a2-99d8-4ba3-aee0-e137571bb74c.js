"use strict";
cc._RF.push(module, '84987GimdhLo67g4TdXG7dM', 'subMenuControll');
// Script/Helper/subMenuControll.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        items: {
            default: [],
            type: cc.Node
        },
        body: {
            default: [],
            type: cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        for (var index in this.items) {
            this.items[index] = this.items[index].getComponent('subMenuItem');
        }
    },

    onClickItem: function onClickItem(event) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = this.items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                if (i.node == event.target) {
                    i.onSelect();
                } else {
                    i.offSelect();
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = this.body[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var b = _step2.value;

                if (b.name === event.target.name) {
                    b.active = true;
                } else {
                    b.active = false;
                }
            }
        } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                    _iterator2.return();
                }
            } finally {
                if (_didIteratorError2) {
                    throw _iteratorError2;
                }
            }
        }
    }

    // update (dt) {},
});

cc._RF.pop();