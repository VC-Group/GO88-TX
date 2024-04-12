
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/Profile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd8d00YWIWBCb7SVNiYpGTax', 'Profile');
// Script/Model/Dialog/Profile/Profile.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		CaNhan: cc.Node,
		KetSat: cc.Node,
		LichSu: cc.Node,
		BaoMat: cc.Node
	},
	init: function init() {
		this.CaNhan = this.CaNhan.getComponent('CaNhan');
		this.KetSat = this.KetSat.getComponent('KetSat');
		this.LichSu = this.LichSu.getComponent('LichSu');
		this.BaoMat = this.BaoMat.getComponent('BaoMat');

		this.CaNhan.init();
		this.KetSat.init();
		this.BaoMat.init();

		this.body = [this.CaNhan, this.KetSat, this.LichSu, this.BaoMat];
		this.header = this.header.children.map(function (obj) {
			return obj.getComponent('itemHeadMenu');
		});
	},

	onSelectHead: function onSelectHead(event, name) {
		this.header.forEach(function (header) {
			if (header.node.name == name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.body.forEach(function (body) {
			if (body.node.name == name) {
				body.node.active = true;
			} else {
				body.node.active = false;
			}
		});
	},
	superView: function superView(name) {
		if (name == "CaNhan") {
			this.onSelectHead(null, "CaNhan");
		} else if (name == "KetSat") {
			this.onSelectHead(null, "KetSat");
		} else if (name == "LichSu") {
			this.onSelectHead(null, "LichSu");
		} else if (name == "BaoMat") {
			this.onSelectHead(null, "BaoMat");
		}
	},
	onData: function onData(data) {
		if (void 0 !== data.history) {
			this.LichSu.onData(data.history);
		}
		if (void 0 !== data.the_cao) {
			cc.RedT.inGame.dialog.the_cao.onData(data.the_cao);
		}
		if (void 0 !== data.level) {
			this.CaNhan.level(data.level);
		}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGUvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXFByb2ZpbGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaGVhZGVyIiwiTm9kZSIsIkNhTmhhbiIsIktldFNhdCIsIkxpY2hTdSIsIkJhb01hdCIsImluaXQiLCJnZXRDb21wb25lbnQiLCJib2R5IiwiY2hpbGRyZW4iLCJtYXAiLCJvYmoiLCJvblNlbGVjdEhlYWQiLCJldmVudCIsIm5hbWUiLCJmb3JFYWNoIiwibm9kZSIsInNlbGVjdCIsInVuc2VsZWN0IiwiYWN0aXZlIiwic3VwZXJWaWV3Iiwib25EYXRhIiwiZGF0YSIsImhpc3RvcnkiLCJ0aGVfY2FvIiwiUmVkVCIsImluR2FtZSIsImRpYWxvZyIsImxldmVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxVQUFRTCxHQUFHTSxJQURBO0FBRVhDLFVBQVFQLEdBQUdNLElBRkE7QUFHWEUsVUFBUVIsR0FBR00sSUFIQTtBQUlYRyxVQUFRVCxHQUFHTSxJQUpBO0FBS1hJLFVBQVFWLEdBQUdNO0FBTEEsRUFISjtBQVVSSyxLQVZRLGtCQVVGO0FBQ0wsT0FBS0osTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUssWUFBWixDQUF5QixRQUF6QixDQUFkO0FBQ0EsT0FBS0osTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUksWUFBWixDQUF5QixRQUF6QixDQUFkO0FBQ0EsT0FBS0gsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUcsWUFBWixDQUF5QixRQUF6QixDQUFkO0FBQ0EsT0FBS0YsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUUsWUFBWixDQUF5QixRQUF6QixDQUFkOztBQUVBLE9BQUtMLE1BQUwsQ0FBWUksSUFBWjtBQUNBLE9BQUtILE1BQUwsQ0FBWUcsSUFBWjtBQUNBLE9BQUtELE1BQUwsQ0FBWUMsSUFBWjs7QUFFQSxPQUFLRSxJQUFMLEdBQVksQ0FBQyxLQUFLTixNQUFOLEVBQWMsS0FBS0MsTUFBbkIsRUFBMkIsS0FBS0MsTUFBaEMsRUFBd0MsS0FBS0MsTUFBN0MsQ0FBWjtBQUNBLE9BQUtMLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlTLFFBQVosQ0FBcUJDLEdBQXJCLENBQXlCLFVBQVNDLEdBQVQsRUFBYztBQUNwRCxVQUFPQSxJQUFJSixZQUFKLENBQWlCLGNBQWpCLENBQVA7QUFDQSxHQUZhLENBQWQ7QUFHQSxFQXhCTzs7QUF5QlJLLGVBQWMsc0JBQVNDLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXFCO0FBQ2xDLE9BQUtkLE1BQUwsQ0FBWWUsT0FBWixDQUFvQixVQUFTZixNQUFULEVBQWlCO0FBQ3BDLE9BQUlBLE9BQU9nQixJQUFQLENBQVlGLElBQVosSUFBb0JBLElBQXhCLEVBQThCO0FBQzdCZCxXQUFPaUIsTUFBUDtBQUNBLElBRkQsTUFFSztBQUNKakIsV0FBT2tCLFFBQVA7QUFDQTtBQUNELEdBTkQ7QUFPQSxPQUFLVixJQUFMLENBQVVPLE9BQVYsQ0FBa0IsVUFBU1AsSUFBVCxFQUFlO0FBQ2hDLE9BQUlBLEtBQUtRLElBQUwsQ0FBVUYsSUFBVixJQUFrQkEsSUFBdEIsRUFBNEI7QUFDM0JOLFNBQUtRLElBQUwsQ0FBVUcsTUFBVixHQUFtQixJQUFuQjtBQUNBLElBRkQsTUFFSztBQUNKWCxTQUFLUSxJQUFMLENBQVVHLE1BQVYsR0FBbUIsS0FBbkI7QUFDQTtBQUNELEdBTkQ7QUFPQSxFQXhDTztBQXlDUkMsWUFBVSxtQkFBU04sSUFBVCxFQUFjO0FBQ3ZCLE1BQUdBLFFBQVEsUUFBWCxFQUFvQjtBQUNuQixRQUFLRixZQUFMLENBQWtCLElBQWxCLEVBQXdCLFFBQXhCO0FBQ0EsR0FGRCxNQUVNLElBQUdFLFFBQVEsUUFBWCxFQUFvQjtBQUN6QixRQUFLRixZQUFMLENBQWtCLElBQWxCLEVBQXdCLFFBQXhCO0FBQ0EsR0FGSyxNQUVBLElBQUdFLFFBQVEsUUFBWCxFQUFvQjtBQUN6QixRQUFLRixZQUFMLENBQWtCLElBQWxCLEVBQXdCLFFBQXhCO0FBQ0EsR0FGSyxNQUVBLElBQUdFLFFBQVEsUUFBWCxFQUFvQjtBQUN6QixRQUFLRixZQUFMLENBQWtCLElBQWxCLEVBQXdCLFFBQXhCO0FBQ0E7QUFDRCxFQW5ETztBQW9EUlMsU0FBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ3JCLE1BQUksS0FBSyxDQUFMLEtBQVdBLEtBQUtDLE9BQXBCLEVBQTRCO0FBQzNCLFFBQUtuQixNQUFMLENBQVlpQixNQUFaLENBQW1CQyxLQUFLQyxPQUF4QjtBQUNBO0FBQ0QsTUFBSSxLQUFLLENBQUwsS0FBV0QsS0FBS0UsT0FBcEIsRUFBNEI7QUFDM0I3QixNQUFHOEIsSUFBSCxDQUFRQyxNQUFSLENBQWVDLE1BQWYsQ0FBc0JILE9BQXRCLENBQThCSCxNQUE5QixDQUFxQ0MsS0FBS0UsT0FBMUM7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdGLEtBQUtNLEtBQXBCLEVBQTBCO0FBQ3pCLFFBQUsxQixNQUFMLENBQVkwQixLQUFaLENBQWtCTixLQUFLTSxLQUF2QjtBQUNBO0FBQ0Q7QUE5RE8sQ0FBVCIsImZpbGUiOiJQcm9maWxlLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcUHJvZmlsZSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRoZWFkZXI6IGNjLk5vZGUsXHJcblx0XHRDYU5oYW46IGNjLk5vZGUsXHJcblx0XHRLZXRTYXQ6IGNjLk5vZGUsXHJcblx0XHRMaWNoU3U6IGNjLk5vZGUsXHJcblx0XHRCYW9NYXQ6IGNjLk5vZGUsXHJcblx0fSxcclxuXHRpbml0KCl7XHJcblx0XHR0aGlzLkNhTmhhbiA9IHRoaXMuQ2FOaGFuLmdldENvbXBvbmVudCgnQ2FOaGFuJyk7XHJcblx0XHR0aGlzLktldFNhdCA9IHRoaXMuS2V0U2F0LmdldENvbXBvbmVudCgnS2V0U2F0Jyk7XHJcblx0XHR0aGlzLkxpY2hTdSA9IHRoaXMuTGljaFN1LmdldENvbXBvbmVudCgnTGljaFN1Jyk7XHJcblx0XHR0aGlzLkJhb01hdCA9IHRoaXMuQmFvTWF0LmdldENvbXBvbmVudCgnQmFvTWF0Jyk7XHJcblxyXG5cdFx0dGhpcy5DYU5oYW4uaW5pdCgpO1xyXG5cdFx0dGhpcy5LZXRTYXQuaW5pdCgpO1xyXG5cdFx0dGhpcy5CYW9NYXQuaW5pdCgpO1xyXG5cclxuXHRcdHRoaXMuYm9keSA9IFt0aGlzLkNhTmhhbiwgdGhpcy5LZXRTYXQsIHRoaXMuTGljaFN1LCB0aGlzLkJhb01hdF07XHJcblx0XHR0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVyLmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ2l0ZW1IZWFkTWVudScpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvblNlbGVjdEhlYWQ6IGZ1bmN0aW9uKGV2ZW50LCBuYW1lKXtcclxuXHRcdHRoaXMuaGVhZGVyLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XHJcblx0XHRcdGlmIChoZWFkZXIubm9kZS5uYW1lID09IG5hbWUpIHtcclxuXHRcdFx0XHRoZWFkZXIuc2VsZWN0KCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGhlYWRlci51bnNlbGVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYm9keS5mb3JFYWNoKGZ1bmN0aW9uKGJvZHkpIHtcclxuXHRcdFx0aWYgKGJvZHkubm9kZS5uYW1lID09IG5hbWUpIHtcclxuXHRcdFx0XHRib2R5Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Ym9keS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdHN1cGVyVmlldzpmdW5jdGlvbihuYW1lKXtcclxuXHRcdGlmKG5hbWUgPT0gXCJDYU5oYW5cIil7XHJcblx0XHRcdHRoaXMub25TZWxlY3RIZWFkKG51bGwsIFwiQ2FOaGFuXCIpO1xyXG5cdFx0fWVsc2UgaWYobmFtZSA9PSBcIktldFNhdFwiKXtcclxuXHRcdFx0dGhpcy5vblNlbGVjdEhlYWQobnVsbCwgXCJLZXRTYXRcIik7XHJcblx0XHR9ZWxzZSBpZihuYW1lID09IFwiTGljaFN1XCIpe1xyXG5cdFx0XHR0aGlzLm9uU2VsZWN0SGVhZChudWxsLCBcIkxpY2hTdVwiKTtcclxuXHRcdH1lbHNlIGlmKG5hbWUgPT0gXCJCYW9NYXRcIil7XHJcblx0XHRcdHRoaXMub25TZWxlY3RIZWFkKG51bGwsIFwiQmFvTWF0XCIpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuaGlzdG9yeSl7XHJcblx0XHRcdHRoaXMuTGljaFN1Lm9uRGF0YShkYXRhLmhpc3RvcnkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS50aGVfY2FvKXtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuZGlhbG9nLnRoZV9jYW8ub25EYXRhKGRhdGEudGhlX2Nhbyk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmxldmVsKXtcclxuXHRcdFx0dGhpcy5DYU5oYW4ubGV2ZWwoZGF0YS5sZXZlbCk7XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==