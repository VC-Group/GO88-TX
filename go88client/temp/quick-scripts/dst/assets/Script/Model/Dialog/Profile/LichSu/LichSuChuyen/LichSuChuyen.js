
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSuChuyen/LichSuChuyen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '943527q5XpHKJiZmmGFO1UX', 'LichSuChuyen');
// Script/Model/Dialog/Profile/LichSu/LichSuChuyen/LichSuChuyen.js

'use strict';

var Helper = require('Helper');

cc.Class({
	extends: cc.Component,

	properties: {
		content: {
			default: null,
			type: cc.Node
		}
	},
	onLoad: function onLoad() {
		var _this = this;

		Promise.all(this.content.children.map(function (obj) {
			return obj.getComponent('LichSuChuyen_item');
		})).then(function (resulf) {
			_this.content = resulf;
		});
	},

	onEnable: function onEnable() {
		this.get_data();
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		cc.RedT.send({ user: { history: { chuyen_red: { page: page } } } });
	},
	onData: function onData(data) {
		Promise.all(this.content.map(function (obj, index) {
			var dataT = data[index];
			if (void 0 !== dataT) {
				obj.node.active = true;
				obj.Time.string = Helper.getStringDateByTime(dataT.time);
				obj.uFrom.string = dataT.from;
				obj.uTo.string = dataT.to;
				obj.Chuyen.string = Helper.numberWithCommas(dataT.red);
				obj.Nhan.string = Helper.numberWithCommas(dataT.red_c);
				if (void 0 !== dataT.message) {
					obj.nodeMesenger.active = true;
					obj.mesenger = dataT.message;
				} else {
					obj.nodeMesenger.active = false;
					obj.mesenger = null;
				}
			} else {
				obj.node.active = false;
			}
		}));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3VcXExpY2hTdUNodXllbi8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZVxcTGljaFN1XFxMaWNoU3VDaHV5ZW4vYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1Q2h1eWVuXFxMaWNoU3VDaHV5ZW4uanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNvbnRlbnQiLCJkZWZhdWx0IiwidHlwZSIsIk5vZGUiLCJvbkxvYWQiLCJQcm9taXNlIiwiYWxsIiwiY2hpbGRyZW4iLCJtYXAiLCJvYmoiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwicmVzdWxmIiwib25FbmFibGUiLCJnZXRfZGF0YSIsInBhZ2UiLCJSZWRUIiwic2VuZCIsInVzZXIiLCJoaXN0b3J5IiwiY2h1eWVuX3JlZCIsIm9uRGF0YSIsImRhdGEiLCJpbmRleCIsImRhdGFUIiwibm9kZSIsImFjdGl2ZSIsIlRpbWUiLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwidGltZSIsInVGcm9tIiwiZnJvbSIsInVUbyIsInRvIiwiQ2h1eWVuIiwibnVtYmVyV2l0aENvbW1hcyIsInJlZCIsIk5oYW4iLCJyZWRfYyIsIm1lc3NhZ2UiLCJub2RlTWVzZW5nZXIiLCJtZXNlbmdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxTQUFTQyxRQUFRLFFBQVIsQ0FBYjs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsV0FBUztBQUNSQyxZQUFTLElBREQ7QUFFUkMsU0FBU1AsR0FBR1E7QUFGSjtBQURFLEVBSEo7QUFTUkMsT0FUUSxvQkFTRTtBQUFBOztBQUNUQyxVQUFRQyxHQUFSLENBQVksS0FBS04sT0FBTCxDQUFhTyxRQUFiLENBQXNCQyxHQUF0QixDQUEwQixVQUFTQyxHQUFULEVBQWE7QUFDbEQsVUFBT0EsSUFBSUMsWUFBSixDQUFpQixtQkFBakIsQ0FBUDtBQUNBLEdBRlcsQ0FBWixFQUdDQyxJQUhELENBR00sa0JBQVU7QUFDZixTQUFLWCxPQUFMLEdBQWVZLE1BQWY7QUFDQSxHQUxEO0FBTUEsRUFoQk87O0FBaUJSQyxXQUFVLG9CQUFZO0FBQ3JCLE9BQUtDLFFBQUw7QUFDQSxFQW5CTztBQW9CUkEsV0FBVSxvQkFBa0I7QUFBQSxNQUFUQyxJQUFTLHVFQUFGLENBQUU7O0FBQzNCcEIsS0FBR3FCLElBQUgsQ0FBUUMsSUFBUixDQUFhLEVBQUNDLE1BQUssRUFBQ0MsU0FBUSxFQUFDQyxZQUFXLEVBQUNMLE1BQUtBLElBQU4sRUFBWixFQUFULEVBQU4sRUFBYjtBQUNBLEVBdEJPO0FBdUJSTSxTQUFRLGdCQUFTQyxJQUFULEVBQWM7QUFDckJqQixVQUFRQyxHQUFSLENBQVksS0FBS04sT0FBTCxDQUFhUSxHQUFiLENBQWlCLFVBQVNDLEdBQVQsRUFBY2MsS0FBZCxFQUFvQjtBQUNoRCxPQUFJQyxRQUFRRixLQUFLQyxLQUFMLENBQVo7QUFDQSxPQUFJLEtBQUssQ0FBTCxLQUFXQyxLQUFmLEVBQXNCO0FBQ3JCZixRQUFJZ0IsSUFBSixDQUFTQyxNQUFULEdBQW9CLElBQXBCO0FBQ0FqQixRQUFJa0IsSUFBSixDQUFTQyxNQUFULEdBQW9CbkMsT0FBT29DLG1CQUFQLENBQTJCTCxNQUFNTSxJQUFqQyxDQUFwQjtBQUNBckIsUUFBSXNCLEtBQUosQ0FBVUgsTUFBVixHQUFvQkosTUFBTVEsSUFBMUI7QUFDQXZCLFFBQUl3QixHQUFKLENBQVFMLE1BQVIsR0FBb0JKLE1BQU1VLEVBQTFCO0FBQ0F6QixRQUFJMEIsTUFBSixDQUFXUCxNQUFYLEdBQW9CbkMsT0FBTzJDLGdCQUFQLENBQXdCWixNQUFNYSxHQUE5QixDQUFwQjtBQUNBNUIsUUFBSTZCLElBQUosQ0FBU1YsTUFBVCxHQUFvQm5DLE9BQU8yQyxnQkFBUCxDQUF3QlosTUFBTWUsS0FBOUIsQ0FBcEI7QUFDQSxRQUFJLEtBQUssQ0FBTCxLQUFXZixNQUFNZ0IsT0FBckIsRUFBOEI7QUFDN0IvQixTQUFJZ0MsWUFBSixDQUFpQmYsTUFBakIsR0FBMEIsSUFBMUI7QUFDQWpCLFNBQUlpQyxRQUFKLEdBQWVsQixNQUFNZ0IsT0FBckI7QUFDQSxLQUhELE1BR0s7QUFDSi9CLFNBQUlnQyxZQUFKLENBQWlCZixNQUFqQixHQUEwQixLQUExQjtBQUNBakIsU0FBSWlDLFFBQUosR0FBZSxJQUFmO0FBQ0E7QUFDRCxJQWRELE1BY0s7QUFDSmpDLFFBQUlnQixJQUFKLENBQVNDLE1BQVQsR0FBa0IsS0FBbEI7QUFDQTtBQUNELEdBbkJXLENBQVo7QUFvQkE7QUE1Q08sQ0FBVCIsImZpbGUiOiJMaWNoU3VDaHV5ZW4uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1Q2h1eWVuIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGNvbnRlbnQ6IHtcclxuXHRcdFx0ZGVmYXVsdDogbnVsbCxcclxuXHRcdFx0dHlwZTogICAgY2MuTm9kZSxcclxuXHRcdH0sXHJcblx0fSxcclxuXHRvbkxvYWQgKCkge1xyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5jb250ZW50LmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmope1xyXG5cdFx0XHRyZXR1cm4gb2JqLmdldENvbXBvbmVudCgnTGljaFN1Q2h1eWVuX2l0ZW0nKTtcclxuXHRcdH0pKVxyXG5cdFx0LnRoZW4ocmVzdWxmID0+IHtcclxuXHRcdFx0dGhpcy5jb250ZW50ID0gcmVzdWxmO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvbkVuYWJsZTogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5nZXRfZGF0YSgpO1xyXG5cdH0sXHJcblx0Z2V0X2RhdGE6IGZ1bmN0aW9uKHBhZ2UgPSAxKXtcclxuXHRcdGNjLlJlZFQuc2VuZCh7dXNlcjp7aGlzdG9yeTp7Y2h1eWVuX3JlZDp7cGFnZTpwYWdlfX19fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0UHJvbWlzZS5hbGwodGhpcy5jb250ZW50Lm1hcChmdW5jdGlvbihvYmosIGluZGV4KXtcclxuXHRcdFx0dmFyIGRhdGFUID0gZGF0YVtpbmRleF07XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGFUKSB7XHJcblx0XHRcdFx0b2JqLm5vZGUuYWN0aXZlICAgPSB0cnVlO1xyXG5cdFx0XHRcdG9iai5UaW1lLnN0cmluZyAgID0gSGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoZGF0YVQudGltZSk7XHJcblx0XHRcdFx0b2JqLnVGcm9tLnN0cmluZyAgPSBkYXRhVC5mcm9tO1xyXG5cdFx0XHRcdG9iai51VG8uc3RyaW5nICAgID0gZGF0YVQudG87XHJcblx0XHRcdFx0b2JqLkNodXllbi5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhVC5yZWQpO1xyXG5cdFx0XHRcdG9iai5OaGFuLnN0cmluZyAgID0gSGVscGVyLm51bWJlcldpdGhDb21tYXMoZGF0YVQucmVkX2MpO1xyXG5cdFx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGFULm1lc3NhZ2UpIHtcclxuXHRcdFx0XHRcdG9iai5ub2RlTWVzZW5nZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0XHRcdG9iai5tZXNlbmdlciA9IGRhdGFULm1lc3NhZ2U7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRvYmoubm9kZU1lc2VuZ2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0b2JqLm1lc2VuZ2VyID0gbnVsbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KSk7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==