
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/Pagination/Pagination.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a2298FO/xFF7KY+FwgkX4E6', 'Pagination');
// Script/Helper/Pagination/Pagination.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		nodeFirst: cc.Node,
		nodePrevious: cc.Node,
		nodePage1: cc.Node,
		nodePage2: cc.Node,
		nodePage3: cc.Node,
		nodePage4: cc.Node,
		nodePage5: cc.Node,
		nodeNext: cc.Node,
		nodeLast: cc.Node,

		page: 1,
		kmess: 10,
		totall: 0
	},

	// LIFE-CYCLE CALLBACKS:

	init: function init(obj) {
		this.controll = obj;

		this.objSelect = null;

		this.nodePage1 = this.nodePage1.getComponent('Pagination_item');
		this.nodePage2 = this.nodePage2.getComponent('Pagination_item');
		this.nodePage3 = this.nodePage3.getComponent('Pagination_item');
		this.nodePage4 = this.nodePage4.getComponent('Pagination_item');
		this.nodePage5 = this.nodePage5.getComponent('Pagination_item');

		this.arrO = [this.nodePage1, this.nodePage2, this.nodePage3, this.nodePage4, this.nodePage5];
	},

	select: function select(obj) {
		obj.number.string = this.page;
		obj.number.node.color = cc.Color.BLACK;

		obj.bg.active = false;
		obj.bg_select.active = true;

		this.objSelect = obj;

		obj.node.pauseSystemEvents();
		return void 0;
	},
	unSelect: function unSelect(obj, page) {
		obj.number.string = page;
		obj.number.node.color = cc.Color.WHITE;

		obj.bg.active = true;
		obj.bg_select.active = false;
		obj.node.page = page;

		obj.node.resumeSystemEvents();
	},

	onSet: function onSet(page, kmess, totall) {
		var _this = this;

		var self = this;
		this.page = page;
		this.kmess = kmess;
		this.totall = totall;
		this.totalPage = Math.ceil(this.totall / this.kmess);
		this.pageRed = this.totalPage - this.page;

		if (totall > 0) {
			this.node.active = true;
			Promise.all(this.arrO.map(function (obj, i) {

				if (self.totalPage > 4) {
					obj.node.active = true;
				} else {
					if (i < self.totalPage) {
						obj.node.active = true;
					} else {
						obj.node.active = false;
					}
				}

				if (self.page > 2) {
					self.nodeFirst.active = true;
				} else {
					self.nodeFirst.active = false;
				}
				if (self.pageRed > 1) {
					self.nodeLast.active = true;
				} else {
					self.nodeLast.active = false;
				}

				if (self.page > 1) {
					self.nodePrevious.active = true;
				} else {
					self.nodePrevious.active = false;
				}
				if (self.pageRed > 0) {
					self.nodeNext.active = true;
				} else {
					self.nodeNext.active = false;
				}

				if (i == 0 && self.page == 1) {
					return self.select(obj);
				} else if (i == 1 && self.page == 2) {
					return self.select(obj);
				} else if (i == 2 && (self.page == 3 || self.totalPage > 5 && self.page !== 1 && self.page !== 2 && self.totalPage - 2 >= self.page)) {
					return self.select(obj);
				} else if (i == 3 && (self.totalPage == 4 && self.page == 4 || self.totalPage > 4 && self.totalPage - 1 == self.page)) {
					return self.select(obj);
				} else if (i == 4 && self.totalPage > 4 && self.page == self.totalPage) {
					return self.select(obj);
				}
			})).then(function (va) {
				Promise.all(_this.arrO.map(function (obj, i) {
					if (obj !== self.objSelect) {
						if (i == 0) {
							if (self.objSelect.node.name == 'page2') {
								self.unSelect(obj, self.objSelect.number.string - 1);
							} else if (self.objSelect.node.name == 'page3') {
								self.unSelect(obj, self.objSelect.number.string - 2);
							} else if (self.objSelect.node.name == 'page4') {
								self.unSelect(obj, self.objSelect.number.string - 3);
							} else if (self.objSelect.node.name == 'page5') {
								self.unSelect(obj, self.objSelect.number.string - 4);
							}
						} else if (i == 1) {
							if (self.objSelect.node.name == 'page1') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 1);
							} else if (self.objSelect.node.name == 'page3') {
								self.unSelect(obj, self.objSelect.number.string - 1);
							} else if (self.objSelect.node.name == 'page4') {
								self.unSelect(obj, self.objSelect.number.string - 2);
							} else if (self.objSelect.node.name == 'page5') {
								self.unSelect(obj, self.objSelect.number.string - 3);
							}
						} else if (i == 2) {
							if (self.objSelect.node.name == 'page1') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 2);
							} else if (self.objSelect.node.name == 'page2') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 1);
							} else if (self.objSelect.node.name == 'page4') {
								self.unSelect(obj, self.objSelect.number.string - 1);
							} else if (self.objSelect.node.name == 'page5') {
								self.unSelect(obj, self.objSelect.number.string - 2);
							}
						} else if (i == 3) {
							if (self.objSelect.node.name == 'page1') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 3);
							} else if (self.objSelect.node.name == 'page2') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 2);
							} else if (self.objSelect.node.name == 'page3') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 1);
							} else if (self.objSelect.node.name == 'page5') {
								self.unSelect(obj, self.objSelect.number.string - 1);
							}
						} else if (i == 4) {
							if (self.objSelect.node.name == 'page1') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 4);
							} else if (self.objSelect.node.name == 'page2') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 3);
							} else if (self.objSelect.node.name == 'page3') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 2);
							} else if (self.objSelect.node.name == 'page4') {
								self.unSelect(obj, self.objSelect.number.string * 1 + 1);
							}
						}
					}
				}));
			});
		} else {
			this.node.active = false;
		}
	},

	onClickFirst: function onClickFirst() {
		this.controll.get_data();
		cc.RedT.audio.playClick();
	},
	onClickPrevious: function onClickPrevious() {
		var page = this.objSelect.number.string - 1;
		page > 0 && this.controll.get_data(page);
		cc.RedT.audio.playClick();
	},
	onClickPage: function onClickPage(event) {
		this.controll.get_data(event.target.page);
		cc.RedT.audio.playClick();
	},
	onClickNext: function onClickNext() {
		var page = this.objSelect.number.string * 1 + 1;
		var totall = Math.ceil(this.totall / this.kmess);
		page <= totall && this.controll.get_data(page);
		cc.RedT.audio.playClick();
	},
	onClickLast: function onClickLast() {
		this.controll.get_data(Math.ceil(this.totall / this.kmess));
		cc.RedT.audio.playClick();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXJcXFBhZ2luYXRpb24vLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcUGFnaW5hdGlvbi9hc3NldHNcXFNjcmlwdFxcSGVscGVyXFxQYWdpbmF0aW9uXFxQYWdpbmF0aW9uLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm5vZGVGaXJzdCIsIk5vZGUiLCJub2RlUHJldmlvdXMiLCJub2RlUGFnZTEiLCJub2RlUGFnZTIiLCJub2RlUGFnZTMiLCJub2RlUGFnZTQiLCJub2RlUGFnZTUiLCJub2RlTmV4dCIsIm5vZGVMYXN0IiwicGFnZSIsImttZXNzIiwidG90YWxsIiwiaW5pdCIsIm9iaiIsImNvbnRyb2xsIiwib2JqU2VsZWN0IiwiZ2V0Q29tcG9uZW50IiwiYXJyTyIsInNlbGVjdCIsIm51bWJlciIsInN0cmluZyIsIm5vZGUiLCJjb2xvciIsIkNvbG9yIiwiQkxBQ0siLCJiZyIsImFjdGl2ZSIsImJnX3NlbGVjdCIsInBhdXNlU3lzdGVtRXZlbnRzIiwidW5TZWxlY3QiLCJXSElURSIsInJlc3VtZVN5c3RlbUV2ZW50cyIsIm9uU2V0Iiwic2VsZiIsInRvdGFsUGFnZSIsIk1hdGgiLCJjZWlsIiwicGFnZVJlZCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpIiwidGhlbiIsIm5hbWUiLCJvbkNsaWNrRmlyc3QiLCJnZXRfZGF0YSIsIlJlZFQiLCJhdWRpbyIsInBsYXlDbGljayIsIm9uQ2xpY2tQcmV2aW91cyIsIm9uQ2xpY2tQYWdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJvbkNsaWNrTmV4dCIsIm9uQ2xpY2tMYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFB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S0FBS0MsSUFBTCxDQUFVLEtBQUt6QixNQUFMLEdBQVksS0FBS0QsS0FBM0IsQ0FBdkI7QUFDQWhCLEtBQUdvRCxJQUFILENBQVFDLEtBQVIsQ0FBY0MsU0FBZDtBQUNBOztBQXRNTyxDQUFUIiwiZmlsZSI6IlBhZ2luYXRpb24uanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcUGFnaW5hdGlvbiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRub2RlRmlyc3Q6ICAgIGNjLk5vZGUsXHJcblx0XHRub2RlUHJldmlvdXM6IGNjLk5vZGUsXHJcblx0XHRub2RlUGFnZTE6ICAgIGNjLk5vZGUsXHJcblx0XHRub2RlUGFnZTI6ICAgIGNjLk5vZGUsXHJcblx0XHRub2RlUGFnZTM6ICAgIGNjLk5vZGUsXHJcblx0XHRub2RlUGFnZTQ6ICAgIGNjLk5vZGUsXHJcblx0XHRub2RlUGFnZTU6ICAgIGNjLk5vZGUsXHJcblx0XHRub2RlTmV4dDogICAgIGNjLk5vZGUsXHJcblx0XHRub2RlTGFzdDogICAgIGNjLk5vZGUsXHJcblxyXG5cdFx0cGFnZTogICAxLFxyXG5cdFx0a21lc3M6ICAxMCxcclxuXHRcdHRvdGFsbDogMCxcclxuXHR9LFxyXG5cclxuXHQvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcblx0aW5pdDogZnVuY3Rpb24ob2JqKSB7XHJcblx0XHR0aGlzLmNvbnRyb2xsID0gb2JqXHJcblxyXG5cdFx0dGhpcy5vYmpTZWxlY3QgPSBudWxsXHJcblxyXG5cdFx0dGhpcy5ub2RlUGFnZTEgPSB0aGlzLm5vZGVQYWdlMS5nZXRDb21wb25lbnQoJ1BhZ2luYXRpb25faXRlbScpXHJcblx0XHR0aGlzLm5vZGVQYWdlMiA9IHRoaXMubm9kZVBhZ2UyLmdldENvbXBvbmVudCgnUGFnaW5hdGlvbl9pdGVtJylcclxuXHRcdHRoaXMubm9kZVBhZ2UzID0gdGhpcy5ub2RlUGFnZTMuZ2V0Q29tcG9uZW50KCdQYWdpbmF0aW9uX2l0ZW0nKVxyXG5cdFx0dGhpcy5ub2RlUGFnZTQgPSB0aGlzLm5vZGVQYWdlNC5nZXRDb21wb25lbnQoJ1BhZ2luYXRpb25faXRlbScpXHJcblx0XHR0aGlzLm5vZGVQYWdlNSA9IHRoaXMubm9kZVBhZ2U1LmdldENvbXBvbmVudCgnUGFnaW5hdGlvbl9pdGVtJylcclxuXHJcblx0XHR0aGlzLmFyck8gPSBbdGhpcy5ub2RlUGFnZTEsIHRoaXMubm9kZVBhZ2UyLCB0aGlzLm5vZGVQYWdlMywgdGhpcy5ub2RlUGFnZTQsIHRoaXMubm9kZVBhZ2U1XVxyXG5cdH0sXHJcblxyXG5cdHNlbGVjdDogZnVuY3Rpb24ob2JqKXtcclxuXHRcdG9iai5udW1iZXIuc3RyaW5nICAgICA9IHRoaXMucGFnZVxyXG5cdFx0b2JqLm51bWJlci5ub2RlLmNvbG9yID0gY2MuQ29sb3IuQkxBQ0tcclxuXHJcblx0XHRvYmouYmcuYWN0aXZlID0gZmFsc2VcclxuICAgIFx0b2JqLmJnX3NlbGVjdC5hY3RpdmUgPSB0cnVlXHJcblxyXG4gICAgXHR0aGlzLm9ialNlbGVjdCA9IG9ialxyXG5cclxuICAgIFx0b2JqLm5vZGUucGF1c2VTeXN0ZW1FdmVudHMoKVxyXG4gICAgXHRyZXR1cm4gdm9pZCAwO1xyXG5cdH0sXHJcblx0dW5TZWxlY3Q6IGZ1bmN0aW9uKG9iaiwgcGFnZSl7XHJcblx0XHRvYmoubnVtYmVyLnN0cmluZyAgICAgPSBwYWdlXHJcblx0XHRvYmoubnVtYmVyLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURVxyXG5cclxuXHRcdG9iai5iZy5hY3RpdmUgPSB0cnVlXHJcbiAgICBcdG9iai5iZ19zZWxlY3QuYWN0aXZlID0gZmFsc2VcclxuICAgIFx0b2JqLm5vZGUucGFnZSA9IHBhZ2VcclxuXHJcbiAgICBcdG9iai5ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cygpXHJcblx0fSxcclxuXHJcblx0b25TZXQ6IGZ1bmN0aW9uKHBhZ2UsIGttZXNzLCB0b3RhbGwpe1xyXG5cdFx0dmFyIHNlbGYgICAgPSB0aGlzXHJcblx0XHR0aGlzLnBhZ2UgICA9IHBhZ2VcclxuXHRcdHRoaXMua21lc3MgID0ga21lc3NcclxuXHRcdHRoaXMudG90YWxsID0gdG90YWxsXHJcblx0XHR0aGlzLnRvdGFsUGFnZSA9IE1hdGguY2VpbCh0aGlzLnRvdGFsbC90aGlzLmttZXNzKVxyXG5cdFx0dGhpcy5wYWdlUmVkICAgPSB0aGlzLnRvdGFsUGFnZS10aGlzLnBhZ2U7XHJcblxyXG5cdFx0aWYgKHRvdGFsbCA+IDApIHtcclxuXHRcdFx0dGhpcy5ub2RlLmFjdGl2ZSA9IHRydWVcclxuXHRcdFx0UHJvbWlzZS5hbGwodGhpcy5hcnJPLm1hcChmdW5jdGlvbihvYmosIGkpe1xyXG5cclxuXHRcdFx0XHRpZiAoc2VsZi50b3RhbFBhZ2UgPiA0KSB7XHJcblx0XHRcdFx0XHRvYmoubm9kZS5hY3RpdmUgPSB0cnVlXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRpZihpIDwgc2VsZi50b3RhbFBhZ2UpIHtcclxuXHRcdFx0XHRcdFx0b2JqLm5vZGUuYWN0aXZlID0gdHJ1ZVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdG9iai5ub2RlLmFjdGl2ZSA9IGZhbHNlXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoc2VsZi5wYWdlID4gMikge1xyXG5cdFx0XHRcdFx0c2VsZi5ub2RlRmlyc3QuYWN0aXZlID0gdHJ1ZVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0c2VsZi5ub2RlRmlyc3QuYWN0aXZlID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHNlbGYucGFnZVJlZCA+IDEpIHtcclxuXHRcdFx0XHRcdHNlbGYubm9kZUxhc3QuYWN0aXZlID0gdHJ1ZVxyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0c2VsZi5ub2RlTGFzdC5hY3RpdmUgPSBmYWxzZVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKHNlbGYucGFnZSA+IDEpIHtcclxuXHRcdFx0XHRcdHNlbGYubm9kZVByZXZpb3VzLmFjdGl2ZSA9IHRydWVcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHNlbGYubm9kZVByZXZpb3VzLmFjdGl2ZSA9IGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzZWxmLnBhZ2VSZWQgPiAwKSB7XHJcblx0XHRcdFx0XHRzZWxmLm5vZGVOZXh0LmFjdGl2ZSA9IHRydWVcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHNlbGYubm9kZU5leHQuYWN0aXZlID0gZmFsc2VcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmIChpID09IDAgJiYgc2VsZi5wYWdlID09IDEpIHtcclxuXHRcdFx0XHRcdHJldHVybiBzZWxmLnNlbGVjdChvYmopXHJcblx0XHRcdFx0fWVsc2UgaWYgKGkgPT0gMSAmJiBzZWxmLnBhZ2UgPT0gMikge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0KG9iailcclxuXHRcdFx0XHR9ZWxzZSBpZiAoaSA9PSAyICYmIChzZWxmLnBhZ2UgPT0gMyB8fCAoc2VsZi50b3RhbFBhZ2UgPiA1ICYmIHNlbGYucGFnZSAhPT0gMSAmJiBzZWxmLnBhZ2UgIT09IDIgJiYgc2VsZi50b3RhbFBhZ2UtMiA+PSBzZWxmLnBhZ2UpKSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNlbGYuc2VsZWN0KG9iailcclxuXHRcdFx0XHR9ZWxzZSBpZiAoaSA9PSAzICYmICgoc2VsZi50b3RhbFBhZ2UgPT0gNCAmJiBzZWxmLnBhZ2UgPT0gNCkgfHwgKHNlbGYudG90YWxQYWdlID4gNCAmJiAoc2VsZi50b3RhbFBhZ2UtMSA9PSBzZWxmLnBhZ2UpKSkpIHtcclxuXHRcdFx0XHRcdHJldHVybiBzZWxmLnNlbGVjdChvYmopXHJcblx0XHRcdFx0fWVsc2UgaWYgKGkgPT0gNCAmJiBzZWxmLnRvdGFsUGFnZSA+IDQgJiYgc2VsZi5wYWdlID09IHNlbGYudG90YWxQYWdlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gc2VsZi5zZWxlY3Qob2JqKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkpXHJcblx0XHRcdC50aGVuKHZhPT57XHJcblx0XHRcdFx0UHJvbWlzZS5hbGwodGhpcy5hcnJPLm1hcChmdW5jdGlvbihvYmosIGkpe1xyXG5cdFx0XHRcdFx0aWYgKG9iaiAhPT0gc2VsZi5vYmpTZWxlY3QpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChzZWxmLm9ialNlbGVjdC5ub2RlLm5hbWUgPT0gJ3BhZ2UyJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi51blNlbGVjdChvYmosIHNlbGYub2JqU2VsZWN0Lm51bWJlci5zdHJpbmctMSlcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlMycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nLTIpXHJcblx0XHRcdFx0XHRcdFx0fWVsc2UgaWYgKHNlbGYub2JqU2VsZWN0Lm5vZGUubmFtZSA9PSAncGFnZTQnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnVuU2VsZWN0KG9iaiwgc2VsZi5vYmpTZWxlY3QubnVtYmVyLnN0cmluZy0zKVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmIChzZWxmLm9ialNlbGVjdC5ub2RlLm5hbWUgPT0gJ3BhZ2U1Jykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi51blNlbGVjdChvYmosIHNlbGYub2JqU2VsZWN0Lm51bWJlci5zdHJpbmctNClcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmIChpID09IDEpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlMScpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nKjErMSlcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlMycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nLTEpXHJcblx0XHRcdFx0XHRcdFx0fWVsc2UgaWYgKHNlbGYub2JqU2VsZWN0Lm5vZGUubmFtZSA9PSAncGFnZTQnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnVuU2VsZWN0KG9iaiwgc2VsZi5vYmpTZWxlY3QubnVtYmVyLnN0cmluZy0yKVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmIChzZWxmLm9ialNlbGVjdC5ub2RlLm5hbWUgPT0gJ3BhZ2U1Jykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi51blNlbGVjdChvYmosIHNlbGYub2JqU2VsZWN0Lm51bWJlci5zdHJpbmctMylcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmIChpID09IDIpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlMScpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nKjErMilcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlMicpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nKjErMSlcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlNCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nLTEpXHJcblx0XHRcdFx0XHRcdFx0fWVsc2UgaWYgKHNlbGYub2JqU2VsZWN0Lm5vZGUubmFtZSA9PSAncGFnZTUnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnVuU2VsZWN0KG9iaiwgc2VsZi5vYmpTZWxlY3QubnVtYmVyLnN0cmluZy0yKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fWVsc2UgaWYgKGkgPT0gMykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChzZWxmLm9ialNlbGVjdC5ub2RlLm5hbWUgPT0gJ3BhZ2UxJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi51blNlbGVjdChvYmosIHNlbGYub2JqU2VsZWN0Lm51bWJlci5zdHJpbmcqMSszKVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmIChzZWxmLm9ialNlbGVjdC5ub2RlLm5hbWUgPT0gJ3BhZ2UyJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi51blNlbGVjdChvYmosIHNlbGYub2JqU2VsZWN0Lm51bWJlci5zdHJpbmcqMSsyKVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmIChzZWxmLm9ialNlbGVjdC5ub2RlLm5hbWUgPT0gJ3BhZ2UzJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi51blNlbGVjdChvYmosIHNlbGYub2JqU2VsZWN0Lm51bWJlci5zdHJpbmcqMSsxKVxyXG5cdFx0XHRcdFx0XHRcdH1lbHNlIGlmIChzZWxmLm9ialNlbGVjdC5ub2RlLm5hbWUgPT0gJ3BhZ2U1Jykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZi51blNlbGVjdChvYmosIHNlbGYub2JqU2VsZWN0Lm51bWJlci5zdHJpbmctMSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1lbHNlIGlmIChpID09IDQpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlMScpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nKjErNClcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlMicpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nKjErMylcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlMycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nKjErMilcclxuXHRcdFx0XHRcdFx0XHR9ZWxzZSBpZiAoc2VsZi5vYmpTZWxlY3Qubm9kZS5uYW1lID09ICdwYWdlNCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGYudW5TZWxlY3Qob2JqLCBzZWxmLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nKjErMSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KSlcclxuXHRcdFx0fSlcclxuXHRcdH1lbHNle1xyXG5cdFx0XHR0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2VcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRvbkNsaWNrRmlyc3Q6IGZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmNvbnRyb2xsLmdldF9kYXRhKCk7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlDbGljaygpO1xyXG5cdH0sXHJcblx0b25DbGlja1ByZXZpb3VzOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHBhZ2UgPSB0aGlzLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nLTE7XHJcblx0XHRwYWdlID4gMCAmJiB0aGlzLmNvbnRyb2xsLmdldF9kYXRhKHBhZ2UpO1xyXG5cdFx0Y2MuUmVkVC5hdWRpby5wbGF5Q2xpY2soKTtcclxuXHR9LFxyXG5cdG9uQ2xpY2tQYWdlOiBmdW5jdGlvbihldmVudCl7XHJcblx0XHR0aGlzLmNvbnRyb2xsLmdldF9kYXRhKGV2ZW50LnRhcmdldC5wYWdlKTtcclxuXHRcdGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcblx0fSxcclxuXHRvbkNsaWNrTmV4dDogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBwYWdlICAgPSB0aGlzLm9ialNlbGVjdC5udW1iZXIuc3RyaW5nKjErMTtcclxuXHRcdHZhciB0b3RhbGwgPSBNYXRoLmNlaWwodGhpcy50b3RhbGwvdGhpcy5rbWVzcyk7XHJcblx0XHRwYWdlIDw9IHRvdGFsbCAmJiB0aGlzLmNvbnRyb2xsLmdldF9kYXRhKHBhZ2UpO1xyXG5cdFx0Y2MuUmVkVC5hdWRpby5wbGF5Q2xpY2soKTtcclxuXHR9LFxyXG5cdG9uQ2xpY2tMYXN0OiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5jb250cm9sbC5nZXRfZGF0YShNYXRoLmNlaWwodGhpcy50b3RhbGwvdGhpcy5rbWVzcykpO1xyXG5cdFx0Y2MuUmVkVC5hdWRpby5wbGF5Q2xpY2soKTtcclxuXHR9LFxyXG5cclxufSk7XHJcbiJdfQ==