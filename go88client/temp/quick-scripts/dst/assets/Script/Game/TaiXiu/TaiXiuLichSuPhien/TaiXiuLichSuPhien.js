
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuLichSuPhien/TaiXiuLichSuPhien.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66490CKFvdK6JST1Zi6Whaj', 'TaiXiuLichSuPhien');
// Script/Game/TaiXiu/TaiXiuLichSuPhien/TaiXiuLichSuPhien.js

'use strict';

var helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		itemPrefab: {
			default: null,
			type: cc.Prefab
		},
		dice: {
			default: [],
			type: cc.Sprite
		},
		leftCuoc: {
			default: null,
			type: cc.Label
		},
		leftTraLai: {
			default: null,
			type: cc.Label
		},
		rightCuoc: {
			default: null,
			type: cc.Label
		},
		rightTraLai: {
			default: null,
			type: cc.Label
		},
		phien: {
			default: null,
			type: cc.Label
		},
		nodeTai: {
			default: null,
			type: cc.Node
		},
		nodeXiu: {
			default: null,
			type: cc.Node
		},
		scrollViewLeft: {
			default: null,
			type: cc.ScrollView
		},
		scrollViewRight: {
			default: null,
			type: cc.ScrollView
		},
		nodeNext: {
			default: null,
			type: cc.Node
		},
		nodePrevious: {
			default: null,
			type: cc.Node
		}
	},
	init: function init(obj) {
		this.RedT = obj;
	},

	onGetPhienClick: function onGetPhienClick(event) {
		this.getPhien(event.target.phien);
	},
	getPhien: function getPhien() {
		var phien = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		if (!!phien) {
			cc.RedT.inGame.loading.active = true;
			cc.RedT.send({ taixiu: { get_phien: { phien: phien } } });
		}
	},
	onNextClick: function onNextClick(event) {
		this.getPhien(this.isPhien + 1);
	},
	onPreviousClick: function onPreviousClick(event) {
		this.getPhien(this.isPhien - 1);
	},
	onData: function onData(data) {
		var self = this;
		this.setNew();
		cc.RedT.inGame.loading.active = false;
		cc.RedT.MiniPanel.Dialog.showTaiXiuLichSuPhien();
		this.leftCuoc.string = helper.numberWithCommas(data.tong_L);
		this.rightCuoc.string = helper.numberWithCommas(data.tong_R);
		this.leftTraLai.string = helper.numberWithCommas(data.tong_tralai_L);
		this.rightTraLai.string = helper.numberWithCommas(data.tong_tralai_R);
		this.phien.string = data.phien + '  -  ' + helper.getStringDateByTime(data.time);
		this.isPhien = data.phien;
		var total = data.dice[0] + data.dice[1] + data.dice[2];
		var phienT = cc.RedT.setting.taixiu.logs[0].phien - data.phien;
		if (phienT > 17) {
			this.nodePrevious.active = false;
		} else {
			this.nodePrevious.active = true;
		}
		if (phienT < 1) {
			this.nodeNext.active = false;
		} else {
			this.nodeNext.active = true;
		}

		this.dice.forEach(function (dice, index) {
			var point = data.dice[index];
			dice.spriteFrame = self.RedT.TX_Main.diceSF[point - 1];
		});

		this.nodeTai.active = total > 10 ? true : false;
		this.nodeXiu.active = total > 10 ? false : true;

		data.dataL.forEach(function (obj) {
			var item = cc.instantiate(self.itemPrefab);
			var itemComponent = item.getComponent('TaiXiuLichSuPhien_item');
			itemComponent.time.string = helper.getStringHourByTime(obj.time);
			itemComponent.user.string = obj.name;
			itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
			itemComponent.tralai.string = helper.numberWithCommas(obj.tralai);
			self.scrollViewLeft.content.addChild(item);
		});
		data.dataR.forEach(function (obj) {
			var item = cc.instantiate(self.itemPrefab);
			var itemComponent = item.getComponent('TaiXiuLichSuPhien_item');
			itemComponent.time.string = helper.getStringHourByTime(obj.time);
			itemComponent.user.string = obj.name;
			itemComponent.cuoc.string = helper.numberWithCommas(obj.bet);
			itemComponent.tralai.string = helper.numberWithCommas(obj.tralai);
			self.scrollViewRight.content.addChild(item);
		});
	},
	setNew: function setNew() {
		this.scrollViewLeft.content.destroyAllChildren();
		this.scrollViewRight.content.destroyAllChildren();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVMaWNoU3VQaGllbi8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdVxcVGFpWGl1TGljaFN1UGhpZW4vYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFRhaVhpdVxcVGFpWGl1TGljaFN1UGhpZW5cXFRhaVhpdUxpY2hTdVBoaWVuLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpdGVtUHJlZmFiIiwiZGVmYXVsdCIsInR5cGUiLCJQcmVmYWIiLCJkaWNlIiwiU3ByaXRlIiwibGVmdEN1b2MiLCJMYWJlbCIsImxlZnRUcmFMYWkiLCJyaWdodEN1b2MiLCJyaWdodFRyYUxhaSIsInBoaWVuIiwibm9kZVRhaSIsIk5vZGUiLCJub2RlWGl1Iiwic2Nyb2xsVmlld0xlZnQiLCJTY3JvbGxWaWV3Iiwic2Nyb2xsVmlld1JpZ2h0Iiwibm9kZU5leHQiLCJub2RlUHJldmlvdXMiLCJpbml0Iiwib2JqIiwiUmVkVCIsIm9uR2V0UGhpZW5DbGljayIsImV2ZW50IiwiZ2V0UGhpZW4iLCJ0YXJnZXQiLCJpbkdhbWUiLCJsb2FkaW5nIiwiYWN0aXZlIiwic2VuZCIsInRhaXhpdSIsImdldF9waGllbiIsIm9uTmV4dENsaWNrIiwiaXNQaGllbiIsIm9uUHJldmlvdXNDbGljayIsIm9uRGF0YSIsImRhdGEiLCJzZWxmIiwic2V0TmV3IiwiTWluaVBhbmVsIiwiRGlhbG9nIiwic2hvd1RhaVhpdUxpY2hTdVBoaWVuIiwic3RyaW5nIiwibnVtYmVyV2l0aENvbW1hcyIsInRvbmdfTCIsInRvbmdfUiIsInRvbmdfdHJhbGFpX0wiLCJ0b25nX3RyYWxhaV9SIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInRpbWUiLCJ0b3RhbCIsInBoaWVuVCIsInNldHRpbmciLCJsb2dzIiwiZm9yRWFjaCIsImluZGV4IiwicG9pbnQiLCJzcHJpdGVGcmFtZSIsIlRYX01haW4iLCJkaWNlU0YiLCJkYXRhTCIsIml0ZW0iLCJpbnN0YW50aWF0ZSIsIml0ZW1Db21wb25lbnQiLCJnZXRDb21wb25lbnQiLCJnZXRTdHJpbmdIb3VyQnlUaW1lIiwidXNlciIsIm5hbWUiLCJjdW9jIiwiYmV0IiwidHJhbGFpIiwiY29udGVudCIsImFkZENoaWxkIiwiZGF0YVIiLCJkZXN0cm95QWxsQ2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBU0MsUUFBUSxRQUFSLENBQWI7O0FBRUFDLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLGNBQVk7QUFDWEMsWUFBUyxJQURFO0FBRVhDLFNBQU1QLEdBQUdRO0FBRkUsR0FERDtBQUtYQyxRQUFNO0FBQ0xILFlBQVMsRUFESjtBQUVMQyxTQUFNUCxHQUFHVTtBQUZKLEdBTEs7QUFTWEMsWUFBVTtBQUNUTCxZQUFTLElBREE7QUFFVEMsU0FBTVAsR0FBR1k7QUFGQSxHQVRDO0FBYVhDLGNBQVk7QUFDWFAsWUFBUyxJQURFO0FBRVhDLFNBQU1QLEdBQUdZO0FBRkUsR0FiRDtBQWlCWEUsYUFBVztBQUNWUixZQUFTLElBREM7QUFFVkMsU0FBTVAsR0FBR1k7QUFGQyxHQWpCQTtBQXFCWEcsZUFBYTtBQUNaVCxZQUFTLElBREc7QUFFWkMsU0FBTVAsR0FBR1k7QUFGRyxHQXJCRjtBQXlCWEksU0FBTztBQUNOVixZQUFTLElBREg7QUFFTkMsU0FBTVAsR0FBR1k7QUFGSCxHQXpCSTtBQTZCWEssV0FBUztBQUNSWCxZQUFTLElBREQ7QUFFUkMsU0FBTVAsR0FBR2tCO0FBRkQsR0E3QkU7QUFpQ1hDLFdBQVM7QUFDUmIsWUFBUyxJQUREO0FBRVJDLFNBQU1QLEdBQUdrQjtBQUZELEdBakNFO0FBcUNYRSxrQkFBZ0I7QUFD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QU9tRCxnQkFBUCxDQUF3QnZCLElBQUlrRCxNQUE1QixDQUE5QjtBQUNBakMsUUFBS3ZCLGNBQUwsQ0FBb0J5RCxPQUFwQixDQUE0QkMsUUFBNUIsQ0FBcUNYLElBQXJDO0FBQ0EsR0FSRDtBQVNBekIsT0FBS3FDLEtBQUwsQ0FBV25CLE9BQVgsQ0FBbUIsVUFBU2xDLEdBQVQsRUFBYTtBQUMvQixPQUFJeUMsT0FBT25FLEdBQUdvRSxXQUFILENBQWV6QixLQUFLdEMsVUFBcEIsQ0FBWDtBQUNBLE9BQUlnRSxnQkFBZ0JGLEtBQUtHLFlBQUwsQ0FBa0Isd0JBQWxCLENBQXBCO0FBQ0FELGlCQUFjZCxJQUFkLENBQW1CUCxNQUFuQixHQUE0QmxELE9BQU95RSxtQkFBUCxDQUEyQjdDLElBQUk2QixJQUEvQixDQUE1QjtBQUNBYyxpQkFBY0csSUFBZCxDQUFtQnhCLE1BQW5CLEdBQThCdEIsSUFBSStDLElBQWxDO0FBQ0FKLGlCQUFjSyxJQUFkLENBQW1CMUIsTUFBbkIsR0FBOEJsRCxPQUFPbUQsZ0JBQVAsQ0FBd0J2QixJQUFJaUQsR0FBNUIsQ0FBOUI7QUFDQU4saUJBQWNPLE1BQWQsQ0FBcUI1QixNQUFyQixHQUE4QmxELE9BQU9tRCxnQkFBUCxDQUF3QnZCLElBQUlrRCxNQUE1QixDQUE5QjtBQUNBakMsUUFBS3JCLGVBQUwsQ0FBcUJ1RCxPQUFyQixDQUE2QkMsUUFBN0IsQ0FBc0NYLElBQXRDO0FBQ0EsR0FSRDtBQVNBLEVBN0hPO0FBOEhSdkIsU0FBUSxrQkFBVTtBQUNqQixPQUFLeEIsY0FBTCxDQUFvQnlELE9BQXBCLENBQTRCRyxrQkFBNUI7QUFDQSxPQUFLMUQsZUFBTCxDQUFxQnVELE9BQXJCLENBQTZCRyxrQkFBN0I7QUFDQTtBQWpJTyxDQUFUIiwiZmlsZSI6IlRhaVhpdUxpY2hTdVBoaWVuLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVMaWNoU3VQaGllbiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgaGVscGVyID0gcmVxdWlyZSgnSGVscGVyJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRpdGVtUHJlZmFiOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLlByZWZhYlxyXG5cdFx0fSxcclxuXHRcdGRpY2U6IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6IGNjLlNwcml0ZVxyXG5cdFx0fSxcclxuXHRcdGxlZnRDdW9jOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLkxhYmVsXHJcblx0XHR9LFxyXG5cdFx0bGVmdFRyYUxhaToge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5MYWJlbFxyXG5cdFx0fSxcclxuXHRcdHJpZ2h0Q3VvYzoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5MYWJlbFxyXG5cdFx0fSxcclxuXHRcdHJpZ2h0VHJhTGFpOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLkxhYmVsXHJcblx0XHR9LFxyXG5cdFx0cGhpZW46IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogY2MuTGFiZWxcclxuXHRcdH0sXHJcblx0XHRub2RlVGFpOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLk5vZGVcclxuXHRcdH0sXHJcblx0XHRub2RlWGl1OiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLk5vZGVcclxuXHRcdH0sXHJcblx0XHRzY3JvbGxWaWV3TGVmdDoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5TY3JvbGxWaWV3XHJcblx0XHR9LFxyXG5cdFx0c2Nyb2xsVmlld1JpZ2h0OiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuXHRcdH0sXHJcblx0XHRub2RlTmV4dDoge1xyXG5cdFx0XHRkZWZhdWx0OiBudWxsLFxyXG5cdFx0XHR0eXBlOiBjYy5Ob2RlXHJcblx0XHR9LFxyXG5cdFx0bm9kZVByZXZpb3VzOiB7XHJcblx0XHRcdGRlZmF1bHQ6IG51bGwsXHJcblx0XHRcdHR5cGU6IGNjLk5vZGVcclxuXHRcdH0sXHJcblx0fSxcclxuXHRpbml0KG9iail7XHJcblx0XHR0aGlzLlJlZFQgPSBvYmo7XHJcblx0fSxcclxuXHRvbkdldFBoaWVuQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KXtcclxuXHRcdHRoaXMuZ2V0UGhpZW4oZXZlbnQudGFyZ2V0LnBoaWVuKTtcclxuXHR9LFxyXG5cdGdldFBoaWVuOiBmdW5jdGlvbihwaGllbiA9IG51bGwpe1xyXG5cdFx0aWYgKCEhcGhpZW4pe1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdGNjLlJlZFQuc2VuZCh7dGFpeGl1OntnZXRfcGhpZW46e3BoaWVuOnBoaWVufX19KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uTmV4dENsaWNrOiBmdW5jdGlvbihldmVudCl7XHJcblx0XHR0aGlzLmdldFBoaWVuKHRoaXMuaXNQaGllbisxKTtcclxuXHR9LFxyXG5cdG9uUHJldmlvdXNDbGljazogZnVuY3Rpb24oZXZlbnQpe1xyXG5cdFx0dGhpcy5nZXRQaGllbih0aGlzLmlzUGhpZW4tMSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0dGhpcy5zZXROZXcoKTtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLmxvYWRpbmcuYWN0aXZlICA9IGZhbHNlO1xyXG5cdFx0Y2MuUmVkVC5NaW5pUGFuZWwuRGlhbG9nLnNob3dUYWlYaXVMaWNoU3VQaGllbigpO1xyXG5cdFx0dGhpcy5sZWZ0Q3VvYy5zdHJpbmcgICAgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnRvbmdfTCk7XHJcblx0XHR0aGlzLnJpZ2h0Q3VvYy5zdHJpbmcgICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRhdGEudG9uZ19SKTtcclxuXHRcdHRoaXMubGVmdFRyYUxhaS5zdHJpbmcgID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS50b25nX3RyYWxhaV9MKTtcclxuXHRcdHRoaXMucmlnaHRUcmFMYWkuc3RyaW5nID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YS50b25nX3RyYWxhaV9SKTtcclxuXHRcdHRoaXMucGhpZW4uc3RyaW5nICAgICAgID0gZGF0YS5waGllbiArICcgIC0gICcgKyBoZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShkYXRhLnRpbWUpO1xyXG5cdFx0dGhpcy5pc1BoaWVuICAgICAgICAgICAgPSBkYXRhLnBoaWVuO1xyXG5cdFx0dmFyIHRvdGFsICAgICAgICAgICAgICAgPSBkYXRhLmRpY2VbMF0gKyBkYXRhLmRpY2VbMV0gKyBkYXRhLmRpY2VbMl07XHJcblx0XHR2YXIgcGhpZW5UID0gY2MuUmVkVC5zZXR0aW5nLnRhaXhpdS5sb2dzWzBdLnBoaWVuIC0gZGF0YS5waGllbjtcclxuXHRcdGlmIChwaGllblQgPiAxNykge1xyXG5cdFx0XHR0aGlzLm5vZGVQcmV2aW91cy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm5vZGVQcmV2aW91cy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHBoaWVuVCA8IDEpIHtcclxuXHRcdFx0dGhpcy5ub2RlTmV4dC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm5vZGVOZXh0LmFjdGl2ZSA9IHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5kaWNlLmZvckVhY2goZnVuY3Rpb24oZGljZSwgaW5kZXgpe1xyXG5cdFx0XHR2YXIgcG9pbnQgPSBkYXRhLmRpY2VbaW5kZXhdO1xyXG5cdFx0XHRkaWNlLnNwcml0ZUZyYW1lID0gc2VsZi5SZWRULlRYX01haW4uZGljZVNGW3BvaW50LTFdO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0dGhpcy5ub2RlVGFpLmFjdGl2ZSA9IHRvdGFsID4gMTAgPyB0cnVlIDogZmFsc2U7XHJcblx0XHR0aGlzLm5vZGVYaXUuYWN0aXZlID0gdG90YWwgPiAxMCA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcblx0XHRkYXRhLmRhdGFMLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0dmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZShzZWxmLml0ZW1QcmVmYWIpXHJcblx0XHRcdHZhciBpdGVtQ29tcG9uZW50ID0gaXRlbS5nZXRDb21wb25lbnQoJ1RhaVhpdUxpY2hTdVBoaWVuX2l0ZW0nKVxyXG5cdFx0XHRpdGVtQ29tcG9uZW50LnRpbWUuc3RyaW5nID0gaGVscGVyLmdldFN0cmluZ0hvdXJCeVRpbWUob2JqLnRpbWUpXHJcblx0XHRcdGl0ZW1Db21wb25lbnQudXNlci5zdHJpbmcgICA9IG9iai5uYW1lXHJcblx0XHRcdGl0ZW1Db21wb25lbnQuY3VvYy5zdHJpbmcgICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai5iZXQpXHJcblx0XHRcdGl0ZW1Db21wb25lbnQudHJhbGFpLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai50cmFsYWkpXHJcblx0XHRcdHNlbGYuc2Nyb2xsVmlld0xlZnQuY29udGVudC5hZGRDaGlsZChpdGVtKVxyXG5cdFx0fSk7XHJcblx0XHRkYXRhLmRhdGFSLmZvckVhY2goZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0dmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZShzZWxmLml0ZW1QcmVmYWIpXHJcblx0XHRcdHZhciBpdGVtQ29tcG9uZW50ID0gaXRlbS5nZXRDb21wb25lbnQoJ1RhaVhpdUxpY2hTdVBoaWVuX2l0ZW0nKVxyXG5cdFx0XHRpdGVtQ29tcG9uZW50LnRpbWUuc3RyaW5nID0gaGVscGVyLmdldFN0cmluZ0hvdXJCeVRpbWUob2JqLnRpbWUpXHJcblx0XHRcdGl0ZW1Db21wb25lbnQudXNlci5zdHJpbmcgICA9IG9iai5uYW1lXHJcblx0XHRcdGl0ZW1Db21wb25lbnQuY3VvYy5zdHJpbmcgICA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai5iZXQpXHJcblx0XHRcdGl0ZW1Db21wb25lbnQudHJhbGFpLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKG9iai50cmFsYWkpXHJcblx0XHRcdHNlbGYuc2Nyb2xsVmlld1JpZ2h0LmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSlcclxuXHRcdH0pO1xyXG5cdH0sXHJcblx0c2V0TmV3OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5zY3JvbGxWaWV3TGVmdC5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG5cdFx0dGhpcy5zY3JvbGxWaWV3UmlnaHQuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuXHR9LFxyXG59KTtcclxuIl19