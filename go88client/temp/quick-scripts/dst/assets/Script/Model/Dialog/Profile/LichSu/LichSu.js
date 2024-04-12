
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Profile/LichSu/LichSu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '450a2pZkQ5Gvb6kVjtcW8zA', 'LichSu');
// Script/Model/Dialog/Profile/LichSu/LichSu.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		page: cc.Prefab,
		header: cc.Node,
		lichSuNap: cc.Node,
		lichSuRut: cc.Node,
		lichSuChuyen: cc.Node,
		lichSuBank: cc.Node
	},
	onLoad: function onLoad() {
		this.page = cc.instantiate(this.page);
		this.page.y = -279;
		this.page.active = false;
		this.node.addChild(this.page);
		this.page = this.page.getComponent('Pagination');
		this.page.init(this);

		this.history = "LichSuNap";
		this.lichSuNap = this.lichSuNap.getComponent('LichSuNap');
		this.lichSuRut = this.lichSuRut.getComponent('LichSuRut');
		this.lichSuChuyen = this.lichSuChuyen.getComponent('LichSuChuyen');
		this.lichSuBank = this.lichSuBank.getComponent('LichSuBank');

		this.body = [this.lichSuNap.node, this.lichSuRut.node, this.lichSuChuyen.node, this.lichSuBank.node];

		this.header = this.header.children.map(function (obj) {
			return obj.getComponent('itemContentMenu');
		});
	},

	onSelectHead: function onSelectHead(event, name) {
		this.history = name;
		this.header.forEach(function (header) {
			if (header.node.name == name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.body.forEach(function (body) {
			if (body.name == name) {
				body.active = true;
			} else {
				body.active = false;
			}
		});
	},
	get_data: function get_data() {
		var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

		switch (this.history) {
			case "LichSuNap":
				this.lichSuNap.get_data(page);
				break;

			case "LichSuRut":
				this.lichSuRut.get_data(page);
				break;

			case "LichSuChuyen":
				this.lichSuChuyen.get_data(page);
				break;

			case "LichSuBank":
				this.lichSuChuyen.get_data(page);
				break;
		}
	},
	onData: function onData(data) {
		this.page.onSet(data.page, data.kmess, data.total);

		if (void 0 !== data.nap_red) {
			this.lichSuNap.onData(data.nap_red);
		}
		if (void 0 !== data.mua_the) {
			this.lichSuRut.onData(data.mua_the);
		}
		if (void 0 !== data.chuyen_red) {
			this.lichSuChuyen.onData(data.chuyen_red);
		}
		if (void 0 !== data.bank) {
			this.lichSuBank.onData(data.bank);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdS8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3UvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFByb2ZpbGVcXExpY2hTdVxcTGljaFN1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBhZ2UiLCJQcmVmYWIiLCJoZWFkZXIiLCJOb2RlIiwibGljaFN1TmFwIiwibGljaFN1UnV0IiwibGljaFN1Q2h1eWVuIiwibGljaFN1QmFuayIsIm9uTG9hZCIsImluc3RhbnRpYXRlIiwieSIsImFjdGl2ZSIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsImluaXQiLCJoaXN0b3J5IiwiYm9keSIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwib25TZWxlY3RIZWFkIiwiZXZlbnQiLCJuYW1lIiwiZm9yRWFjaCIsInNlbGVjdCIsInVuc2VsZWN0IiwiZ2V0X2RhdGEiLCJvbkRhdGEiLCJkYXRhIiwib25TZXQiLCJrbWVzcyIsInRvdGFsIiwibmFwX3JlZCIsIm11YV90aGUiLCJjaHV5ZW5fcmVkIiwiYmFuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsUUFBY0wsR0FBR00sTUFETjtBQUVYQyxVQUFjUCxHQUFHUSxJQUZOO0FBR1hDLGFBQWNULEdBQUdRLElBSE47QUFJWEUsYUFBY1YsR0FBR1EsSUFKTjtBQUtYRyxnQkFBY1gsR0FBR1EsSUFMTjtBQU1YSSxjQUFjWixHQUFHUTtBQU5OLEVBSEo7QUFXUkssT0FYUSxvQkFXQTtB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N0IsU0FBTCxDQUFld0IsTUFBZixDQUFzQkMsS0FBS0ksT0FBM0I7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdKLEtBQUtLLE9BQXBCLEVBQTRCO0FBQzNCLFFBQUs3QixTQUFMLENBQWV1QixNQUFmLENBQXNCQyxLQUFLSyxPQUEzQjtBQUNBO0FBQ0QsTUFBSSxLQUFLLENBQUwsS0FBV0wsS0FBS00sVUFBcEIsRUFBK0I7QUFDOUIsUUFBSzdCLFlBQUwsQ0FBa0JzQixNQUFsQixDQUF5QkMsS0FBS00sVUFBOUI7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdOLEtBQUtPLElBQXBCLEVBQXlCO0FBQ3hCLFFBQUs3QixVQUFMLENBQWdCcUIsTUFBaEIsQ0FBdUJDLEtBQUtPLElBQTVCO0FBQ0E7QUFDRDtBQWxGTyxDQUFUIiwiZmlsZSI6IkxpY2hTdS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxQcm9maWxlXFxMaWNoU3UiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0cGFnZTogICAgICAgICBjYy5QcmVmYWIsXHJcblx0XHRoZWFkZXI6ICAgICAgIGNjLk5vZGUsXHJcblx0XHRsaWNoU3VOYXA6ICAgIGNjLk5vZGUsXHJcblx0XHRsaWNoU3VSdXQ6ICAgIGNjLk5vZGUsXHJcblx0XHRsaWNoU3VDaHV5ZW46IGNjLk5vZGUsXHJcblx0XHRsaWNoU3VCYW5rOiAgIGNjLk5vZGUsXHJcblx0fSxcclxuXHRvbkxvYWQoKXtcclxuXHRcdHRoaXMucGFnZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFnZSk7XHJcbiAgICAgICAgdGhpcy5wYWdlLnkgPSAtMjc5O1xyXG4gICAgICAgIHRoaXMucGFnZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQodGhpcy5wYWdlKTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSB0aGlzLnBhZ2UuZ2V0Q29tcG9uZW50KCdQYWdpbmF0aW9uJyk7XHJcbiAgICAgICAgdGhpcy5wYWdlLmluaXQodGhpcyk7XHJcblxyXG5cdFx0dGhpcy5oaXN0b3J5ICAgICAgPSBcIkxpY2hTdU5hcFwiO1xyXG5cdFx0dGhpcy5saWNoU3VOYXAgICAgPSB0aGlzLmxpY2hTdU5hcC5nZXRDb21wb25lbnQoJ0xpY2hTdU5hcCcpO1xyXG5cdFx0dGhpcy5saWNoU3VSdXQgICAgPSB0aGlzLmxpY2hTdVJ1dC5nZXRDb21wb25lbnQoJ0xpY2hTdVJ1dCcpO1xyXG5cdFx0dGhpcy5saWNoU3VDaHV5ZW4gPSB0aGlzLmxpY2hTdUNodXllbi5nZXRDb21wb25lbnQoJ0xpY2hTdUNodXllbicpO1xyXG5cdFx0dGhpcy5saWNoU3VCYW5rICAgPSB0aGlzLmxpY2hTdUJhbmsuZ2V0Q29tcG9uZW50KCdMaWNoU3VCYW5rJyk7XHJcblxyXG5cdFx0dGhpcy5ib2R5ID0gW3RoaXMubGljaFN1TmFwLm5vZGUsIHRoaXMubGljaFN1UnV0Lm5vZGUsIHRoaXMubGljaFN1Q2h1eWVuLm5vZGUsIHRoaXMubGljaFN1QmFuay5ub2RlXTtcclxuXHJcblx0XHR0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVyLmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ2l0ZW1Db250ZW50TWVudScpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvblNlbGVjdEhlYWQ6IGZ1bmN0aW9uKGV2ZW50LCBuYW1lKXtcclxuXHRcdHRoaXMuaGlzdG9yeSA9IG5hbWU7XHJcblx0XHR0aGlzLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xyXG5cdFx0XHRpZiAoaGVhZGVyLm5vZGUubmFtZSA9PSBuYW1lKSB7XHJcblx0XHRcdFx0aGVhZGVyLnNlbGVjdCgpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRoZWFkZXIudW5zZWxlY3QoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmJvZHkuZm9yRWFjaChmdW5jdGlvbihib2R5KSB7XHJcblx0XHRcdGlmIChib2R5Lm5hbWUgPT0gbmFtZSkge1xyXG5cdFx0XHRcdGJvZHkuYWN0aXZlID0gdHJ1ZTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0Ym9keS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRnZXRfZGF0YTogZnVuY3Rpb24ocGFnZSA9IDEpe1xyXG5cdFx0c3dpdGNoKHRoaXMuaGlzdG9yeSkge1xyXG5cdFx0ICBjYXNlIFwiTGljaFN1TmFwXCI6XHJcblx0XHRcdFx0dGhpcy5saWNoU3VOYXAuZ2V0X2RhdGEocGFnZSk7XHJcblx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBcIkxpY2hTdVJ1dFwiOlxyXG5cdFx0XHRcdHRoaXMubGljaFN1UnV0LmdldF9kYXRhKHBhZ2UpO1xyXG5cdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgXCJMaWNoU3VDaHV5ZW5cIjpcclxuXHRcdFx0XHR0aGlzLmxpY2hTdUNodXllbi5nZXRfZGF0YShwYWdlKTtcclxuXHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFwiTGljaFN1QmFua1wiOlxyXG5cdFx0XHRcdHRoaXMubGljaFN1Q2h1eWVuLmdldF9kYXRhKHBhZ2UpO1xyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLnBhZ2Uub25TZXQoZGF0YS5wYWdlLCBkYXRhLmttZXNzLCBkYXRhLnRvdGFsKTtcclxuXHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm5hcF9yZWQpe1xyXG5cdFx0XHR0aGlzLmxpY2hTdU5hcC5vbkRhdGEoZGF0YS5uYXBfcmVkKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubXVhX3RoZSl7XHJcblx0XHRcdHRoaXMubGljaFN1UnV0Lm9uRGF0YShkYXRhLm11YV90aGUpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5jaHV5ZW5fcmVkKXtcclxuXHRcdFx0dGhpcy5saWNoU3VDaHV5ZW4ub25EYXRhKGRhdGEuY2h1eWVuX3JlZCk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmJhbmspe1xyXG5cdFx0XHR0aGlzLmxpY2hTdUJhbmsub25EYXRhKGRhdGEuYmFuayk7XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==