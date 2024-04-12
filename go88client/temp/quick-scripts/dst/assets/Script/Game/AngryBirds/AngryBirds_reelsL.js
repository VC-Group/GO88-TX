
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/AngryBirds/AngryBirds_reelsL.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '254d4+O0EJLmrFqrwJc7Bsf', 'AngryBirds_reelsL');
// Script/Game/AngryBirds/AngryBirds_reelsL.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},
    init: function init(obj) {
        var _this = this;

        this.RedT = obj;
        this.icons = [];
        var self = this;
        Promise.all([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map(function (obj, index) {
            var icon = cc.instantiate(self.RedT.iconLPrefab);
            self.node.addChild(icon);
            icon = icon.getComponent('AngryBirds-item');
            icon.init(self.RedT);
            if (index > 2 && index < 17) {
                icon.random();
            }
            return icon;
        })).then(function (result) {
            _this.icons = result;
            _this.icons[19].setIcon(_this.icons[2].random(!0));
            _this.icons[18].setIcon(_this.icons[1].random(!0));
            _this.icons[17].setIcon(_this.icons[0].random(!0));
        });
    },

    copy: function copy() {
        this.icons[19].setIcon(this.icons[2].data);
        this.icons[18].setIcon(this.icons[1].data);
        this.icons[17].setIcon(this.icons[0].data);
        this.node.y = 0;
    },
    spin: function spin(index) {
        this.node.stopAllActions();
        var self = this;
        var d = cc.moveTo(1.1, cc.v2(this.node.x, -(this.node.height - 270))).easing(cc.easeInOut(3));
        var p = cc.callFunc(function () {
            this.copy();
        }, this);
        this.node.runAction(cc.sequence(cc.delayTime(index * 0.1), d, p));
    },
    stop: function stop() {
        this.node.stopAllActions();
        this.copy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzXFxBbmdyeUJpcmRzX3JlZWxzTC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0Iiwib2JqIiwiUmVkVCIsImljb25zIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsImljb25MUHJlZmFiIiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwicmFuZG9tIiwidGhlbiIsInJlc3VsdCIsInNldEljb24iLCJjb3B5IiwiZGF0YSIsInkiLCJzcGluIiwic3RvcEFsbEFjdGlvbnMiLCJkIiwibW92ZVRvIiwidjIiLCJ4IiwiaGVpZ2h0IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicCIsImNhbGxGdW5jIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDTEMsYUFBU0YsR0FBR0csU0FEUDs7QUFHTEMsZ0JBQVksRUFIUDtBQUtMQyxRQUxLLGdCQUtBQyxHQUxBLEVBS0k7QUFBQTs7QUFDTCxhQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQSxhQUFLRSxLQUFMLEdBQWEsRUFBYjtBQUNBLFlBQUlDLE9BQVEsSUFBWjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsRUFBVyxDQUFYLEVBQWEsQ0FBYixFQUFlLENBQWYsRUFBaUIsQ0FBakIsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUIsQ0FBdkIsRUFBeUIsQ0FBekIsRUFBMkIsQ0FBM0IsRUFBNkIsQ0FBN0IsRUFBK0IsQ0FBL0IsRUFBaUMsQ0FBakMsRUFBbUMsQ0FBbkMsRUFBcUMsQ0FBckMsRUFBdUMsQ0FBdkMsRUFBMENDLEdBQTFDLENBQThDLFVBQVNOLEdBQVQsRUFBY08sS0FBZCxFQUFvQjtBQUMxRSxnQkFBSUMsT0FBT2QsR0FBR2UsV0FBSCxDQUFlTixLQUFLRixJQUFMLENBQVVTLFdBQXpCLENBQVg7QUFDQVAsaUJBQUtRLElBQUwsQ0FBVUMsUUFBVixDQUFtQkosSUFBbkI7QUFDQUEsbUJBQU9BLEtBQUtLLFlBQUwsQ0FBa0IsaUJBQWxCLENBQVA7QUFDQUwsaUJBQUtULElBQUwsQ0FBVUksS0FBS0YsSUFBZjtBQUNBLGdCQUFJTSxRQUFRLENBQVIsSUFBYUEsUUFBUSxFQUF6QixFQUE2QjtBQUN6QkMscUJBQUtNLE1BQUw7QUFDSDtBQUNELG1CQUFPTixJQUFQO0FBQ0gsU0FUVyxDQUFaLEVBVUNPLElBVkQsQ0FVTSxrQkFBVTtBQUNaLGtCQUFLYixLQUFMLEdBQWFjLE1BQWI7QUFDQSxrQkFBS2QsS0FBTCxDQUFXLEVBQVgsRUFBZWUsT0FBZixDQUF1QixNQUFLZixLQUFMLENBQVcsQ0FBWCxFQUFjWSxNQUFkLENBQXFCLENBQUMsQ0FBdEIsQ0FBdkI7QUFDQSxrQkFBS1osS0FBTCxDQUFXLEVBQVgsRUFBZWUsT0FBZixDQUF1QixNQUFLZixLQUFMLENBQVcsQ0FBWCxFQUFjWSxNQUFkLENBQXFCLENBQUMsQ0FBdEIsQ0FBdkI7QUFDQSxrQkFBS1osS0FBTCxDQUFXLEVBQVgsRUFBZWUsT0FBZixDQUF1QixNQUFLZixLQUFMLENBQVcsQ0FBWCxFQUFjWSxNQUFkLENBQXFCLENBQUMsQ0FBdEIsQ0FBdkI7QUFDSCxTQWZEO0FBZ0JILEtBekJJOztBQTBCTEksVUFBTSxnQkFBVTtBQUNaLGFBQUtoQixLQUFMLENBQVcsRUFBWCxFQUFlZSxPQUFmLENBQXVCLEtBQUtmLEtBQUwsQ0FBVyxDQUFYLEVBQWNpQixJQUFyQztBQUNBLGFBQUtqQixLQUFMLENBQVcsRUFBWCxFQUFlZSxPQUFmLENBQXVCLEtBQUtmLEtBQUwsQ0FBVyxDQUFYLEVBQWNpQixJQUFyQztBQUNBLGFBQUtqQixLQUFMLENBQVcsRUFBWCxFQUFlZSxPQUFmLENBQXVCLEtBQUtmLEtBQUwsQ0FBVyxDQUFYLEVBQWNpQixJQUFyQztBQUNBLGFBQUtSLElBQUwsQ0FBVVMsQ0FBVixHQUFjLENBQWQ7QUFDSCxLQS9CSTtBQWdDTEMsVUFBTSxjQUFTZCxLQUFULEVBQWU7QUFDakIsYUFBS0ksSUFBTCxDQUFVVyxjQUFWO0FBQ0EsWUFBSW5CLE9BQU8sSUFBWDtBQUNBLFlBQUlvQixJQUFJN0IsR0FBRzhCLE1BQUgsQ0FBVSxHQUFWLEVBQWU5QixHQUFHK0IsRUFBSCxDQUFNLEtBQUtkLElBQUwsQ0FBVWUsQ0FBaEIsRUFBbUIsRUFBRSxLQUFLZixJQUFMLENBQVVnQixNQUFWLEdBQWlCLEdBQW5CLENBQW5CLENBQWYsRUFBNERDLE1BQTVELENBQW1FbEMsR0FBR21DLFNBQUgsQ0FBYSxDQUFiLENBQW5FLENBQVI7QUFDQSxZQUFJQyxJQUFJcEMsR0FBR3FDLFFBQUgsQ0FBWSxZQUFXO0FBQzNCLGlCQUFLYixJQUFMO0FBQ0gsU0FGTyxFQUVMLElBRkssQ0FBUjtBQUdBLGFBQUtQLElBQUwsQ0FBVXFCLFNBQVYsQ0FBb0J0QyxHQUFHdUMsUUFBSCxDQUFZdkMsR0FBR3dDLFNBQUgsQ0FBYTNCLFFBQU0sR0FBbkIsQ0FBWixFQUFxQ2dCLENBQXJDLEVBQXdDTyxDQUF4QyxDQUFwQjtBQUNILEtBeENJO0FBeUNMSyxVQUFNLGdCQUFVO0FBQ1osYUFBS3hCLElBQUwsQ0FBVVcsY0FBVjtBQUNBLGFBQUtKLElBQUw7QUFDSDtBQTVDSSxDQUFUIiwiZmlsZSI6IkFuZ3J5QmlyZHNfcmVlbHNMLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxBbmdyeUJpcmRzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG4gICAgaW5pdChvYmope1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgICAgICB0aGlzLmljb25zID0gW107XHJcbiAgICAgICAgdmFyIHNlbGYgID0gdGhpcztcclxuICAgICAgICBQcm9taXNlLmFsbChbMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwLDAsMCwwXS5tYXAoZnVuY3Rpb24ob2JqLCBpbmRleCl7XHJcbiAgICAgICAgICAgIHZhciBpY29uID0gY2MuaW5zdGFudGlhdGUoc2VsZi5SZWRULmljb25MUHJlZmFiKTtcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xyXG4gICAgICAgICAgICBpY29uID0gaWNvbi5nZXRDb21wb25lbnQoJ0FuZ3J5QmlyZHMtaXRlbScpO1xyXG4gICAgICAgICAgICBpY29uLmluaXQoc2VsZi5SZWRUKTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID4gMiAmJiBpbmRleCA8IDE3KSB7XHJcbiAgICAgICAgICAgICAgICBpY29uLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMuaWNvbnNbMTldLnNldEljb24odGhpcy5pY29uc1syXS5yYW5kb20oITApKTtcclxuICAgICAgICAgICAgdGhpcy5pY29uc1sxOF0uc2V0SWNvbih0aGlzLmljb25zWzFdLnJhbmRvbSghMCkpO1xyXG4gICAgICAgICAgICB0aGlzLmljb25zWzE3XS5zZXRJY29uKHRoaXMuaWNvbnNbMF0ucmFuZG9tKCEwKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29weTogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLmljb25zWzE5XS5zZXRJY29uKHRoaXMuaWNvbnNbMl0uZGF0YSk7XHJcbiAgICAgICAgdGhpcy5pY29uc1sxOF0uc2V0SWNvbih0aGlzLmljb25zWzFdLmRhdGEpO1xyXG4gICAgICAgIHRoaXMuaWNvbnNbMTddLnNldEljb24odGhpcy5pY29uc1swXS5kYXRhKTtcclxuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICB9LFxyXG4gICAgc3BpbjogZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZCA9IGNjLm1vdmVUbygxLjEsIGNjLnYyKHRoaXMubm9kZS54LCAtKHRoaXMubm9kZS5oZWlnaHQtMjcwKSkpLmVhc2luZyhjYy5lYXNlSW5PdXQoMykpO1xyXG4gICAgICAgIHZhciBwID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29weSgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KjAuMSksIGQsIHApKTtcclxuICAgIH0sXHJcbiAgICBzdG9wOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuY29weSgpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==