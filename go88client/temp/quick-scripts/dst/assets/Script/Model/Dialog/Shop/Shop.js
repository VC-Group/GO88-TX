
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/Shop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7c3a2CceMBL14CXynIjq7O1', 'Shop');
// Script/Model/Dialog/Shop/Shop.js

'use strict';

var Bank = require('Bank');

cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		NapRed: cc.Node,
		TieuRed: cc.Node,
		ChuyenRed: cc.Node,
		DaiLy: cc.Node,
		Bank: Bank
	},
	init: function init() {
		this.NapRed = this.NapRed.getComponent('NapRed');
		this.TieuRed = this.TieuRed.getComponent('TieuRed');
		this.ChuyenRed = this.ChuyenRed.getComponent('ChuyenRed');
		this.DaiLy = this.DaiLy.getComponent('DaiLy');

		this.NapRed.init();
		this.TieuRed.init();
		this.ChuyenRed.init(this);
		this.Bank.init();
		this.DaiLy.init(this);

		this.body = [this.NapRed, this.TieuRed, this.ChuyenRed, this.DaiLy, this.Bank];
		this.header = this.header.children.map(function (obj) {
			return obj.getComponent('itemHeadMenu');
		});
	},

	onSelectHead: function onSelectHead(event, name) {
		this.header.forEach(function (header) {
			if (header.node.name === name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.body.forEach(function (body) {
			if (body.node.name === name) {
				body.node.active = true;
			} else {
				body.node.active = false;
			}
		});
	},
	onSelectHead2: function onSelectHead2(event, name) {
		this.header.forEach(function (header) {
			if (header.node.name === name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.NapRed.onSelecHinhThuc(name);
	},
	superView: function superView(name) {
		//if(name == 'NapRed' || name == 'ThongTinNapRed' || name == 'QuyDinhNapRed'){
		if (name == 'NapRed') {
			this.onSelectHead(null, 'NapRed');
			//if (name != 'NapRed') this.NapRed.onSelectHead(null, name);
		} else if (name == 'TieuRed' || name == 'MuaTheNap') {
			this.onSelectHead(null, 'TieuRed');
			if (name != 'TieuRed') this.TieuRed.onSelectHead(null, name);
		} else if (name == 'ChuyenRed') {
			this.onSelectHead(null, 'ChuyenRed');
		} else if (name == 'DaiLy') {
			this.onSelectHead(null, 'DaiLy');
		}
	},
	onData: function onData(data) {
		if (void 0 !== data.nap_red) {
			this.NapRed.onData(data.nap_red);
		}
		if (void 0 !== data.momo) {
			this.NapRed.MOMO(data.momo);
		}
		if (void 0 !== data.bank) {
			this.NapRed.BANK(data.bank);
		}
		if (void 0 !== data.mua_the_nap) {
			this.TieuRed.MuaTheCao.onData(data.mua_the_nap);
		}
		if (void 0 !== data.daily) {
			this.DaiLy.onData(data.daily);
		}
		if (!!data.bank) {
			this.Bank.onData(data.bank);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3AvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXFNob3AuanMiXSwibmFtZXMiOlsiQmFuayIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFkZXIiLCJOb2RlIiwiTmFwUmVkIiwiVGlldVJlZCIsIkNodXllblJlZCIsIkRhaUx5IiwiaW5pdCIsImdldENvbXBvbmVudCIsImJvZHkiLCJjaGlsZHJlbiIsIm1hcCIsIm9iaiIsIm9uU2VsZWN0SGVhZCIsImV2ZW50IiwibmFtZSIsImZvckVhY2giLCJub2RlIiwic2VsZWN0IiwidW5zZWxlY3QiLCJhY3RpdmUiLCJvblNlbGVjdEhlYWQyIiwib25TZWxlY0hpbmhUaHVjIiwic3VwZXJWaWV3Iiwib25EYXRhIiwiZGF0YSIsIm5hcF9yZWQiLCJtb21vIiwiTU9NTyIsImJhbmsiLCJCQU5LIiwibXVhX3RoZV9uYXAiLCJNdWFUaGVDYW8iLCJkYWlseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxPQUFPQyxRQUFRLE1BQVIsQ0FBWDs7QUFFQUMsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsVUFBV0wsR0FBR00sSUFESDtBQUVYQyxVQUFXUCxHQUFHTSxJQUZIO0FBR1hFLFdBQVdSLEdBQUdNLElBSEg7QUFJWEcsYUFBV1QsR0FBR00sSUFKSDtBQUtYSSxTQUFXVixHQUFHTSxJQUxIO0FBTVhSLFFBQVdBO0FBTkEsRUFISjtBQVdSYSxLQVhRLGtCQVdGO0FBQ0wsT0FBS0osTUFBTCxHQUFpQixLQUFLQSxNQUFMLENB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U0FBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ3JCLE1BQUksS0FBSyxDQUFMLEtBQVdBLEtBQUtDLE9BQXBCLEVBQTRCO0FBQzNCLFFBQUt2QixNQUFMLENBQVlxQixNQUFaLENBQW1CQyxLQUFLQyxPQUF4QjtBQUNBO0FBQ0QsTUFBSSxLQUFLLENBQUwsS0FBV0QsS0FBS0UsSUFBcEIsRUFBeUI7QUFDeEIsUUFBS3hCLE1BQUwsQ0FBWXlCLElBQVosQ0FBaUJILEtBQUtFLElBQXRCO0FBQ0E7QUFDRCxNQUFJLEtBQUssQ0FBTCxLQUFXRixLQUFLSSxJQUFwQixFQUF5QjtBQUN4QixRQUFLMUIsTUFBTCxDQUFZMkIsSUFBWixDQUFpQkwsS0FBS0ksSUFBdEI7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdKLEtBQUtNLFdBQXBCLEVBQWdDO0FBQy9CLFFBQUszQixPQUFMLENBQWE0QixTQUFiLENBQXVCUixNQUF2QixDQUE4QkMsS0FBS00sV0FBbkM7QUFDQTtBQUNELE1BQUksS0FBSyxDQUFMLEtBQVdOLEtBQUtRLEtBQXBCLEVBQTBCO0FBQ3pCLFFBQUszQixLQUFMLENBQVdrQixNQUFYLENBQWtCQyxLQUFLUSxLQUF2QjtBQUNBO0FBQ0QsTUFBSSxDQUFDLENBQUNSLEtBQUtJLElBQVgsRUFBZ0I7QUFDZixRQUFLbkMsSUFBTCxDQUFVOEIsTUFBVixDQUFpQkMsS0FBS0ksSUFBdEI7QUFDQTtBQUNEO0FBdkZPLENBQVQiLCJmaWxlIjoiU2hvcC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3AiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEJhbmsgPSByZXF1aXJlKCdCYW5rJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRoZWFkZXI6ICAgIGNjLk5vZGUsXHJcblx0XHROYXBSZWQ6ICAgIGNjLk5vZGUsXHJcblx0XHRUaWV1UmVkOiAgIGNjLk5vZGUsXHJcblx0XHRDaHV5ZW5SZWQ6IGNjLk5vZGUsXHJcblx0XHREYWlMeTogICAgIGNjLk5vZGUsXHJcblx0XHRCYW5rOiAgICAgIEJhbmssXHJcblx0fSxcclxuXHRpbml0KCl7XHJcblx0XHR0aGlzLk5hcFJlZCAgICA9IHRoaXMuTmFwUmVkLmdldENvbXBvbmVudCgnTmFwUmVkJyk7XHJcblx0XHR0aGlzLlRpZXVSZWQgICA9IHRoaXMuVGlldVJlZC5nZXRDb21wb25lbnQoJ1RpZXVSZWQnKTtcclxuXHRcdHRoaXMuQ2h1eWVuUmVkID0gdGhpcy5DaHV5ZW5SZWQuZ2V0Q29tcG9uZW50KCdDaHV5ZW5SZWQnKTtcclxuXHRcdHRoaXMuRGFpTHkgICAgID0gdGhpcy5EYWlMeS5nZXRDb21wb25lbnQoJ0RhaUx5Jyk7XHJcblxyXG5cdFx0dGhpcy5OYXBSZWQuaW5pdCgpO1xyXG5cdFx0dGhpcy5UaWV1UmVkLmluaXQoKTtcclxuXHRcdHRoaXMuQ2h1eWVuUmVkLmluaXQodGhpcyk7XHJcblx0XHR0aGlzLkJhbmsuaW5pdCgpO1xyXG5cdFx0dGhpcy5EYWlMeS5pbml0KHRoaXMpO1xyXG5cclxuXHRcdHRoaXMuYm9keSA9IFt0aGlzLk5hcFJlZCwgdGhpcy5UaWV1UmVkLCB0aGlzLkNodXllblJlZCwgdGhpcy5EYWlMeSwgdGhpcy5CYW5rXTtcclxuXHRcdHRoaXMuaGVhZGVyID0gdGhpcy5oZWFkZXIuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0XHRyZXR1cm4gb2JqLmdldENvbXBvbmVudCgnaXRlbUhlYWRNZW51Jyk7XHJcblx0XHR9KTtcclxuXHR9LFxyXG5cdG9uU2VsZWN0SGVhZDogZnVuY3Rpb24oZXZlbnQsIG5hbWUpe1xyXG5cdFx0dGhpcy5oZWFkZXIuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcclxuXHRcdFx0aWYgKGhlYWRlci5ub2RlLm5hbWUgPT09IG5hbWUpIHtcclxuXHRcdFx0XHRoZWFkZXIuc2VsZWN0KCk7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGhlYWRlci51bnNlbGVjdCgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHRoaXMuYm9keS5mb3JFYWNoKGZ1bmN0aW9uKGJvZHkpIHtcclxuXHRcdFx0aWYgKGJvZHkubm9kZS5uYW1lID09PSBuYW1lKSB7XHJcblx0XHRcdFx0Ym9keS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGJvZHkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvblNlbGVjdEhlYWQyOiBmdW5jdGlvbihldmVudCwgbmFtZSl7XHJcblx0XHR0aGlzLmhlYWRlci5mb3JFYWNoKGZ1bmN0aW9uKGhlYWRlcikge1xyXG5cdFx0XHRpZiAoaGVhZGVyLm5vZGUubmFtZSA9PT0gbmFtZSkge1xyXG5cdFx0XHRcdGhlYWRlci5zZWxlY3QoKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aGVhZGVyLnVuc2VsZWN0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5OYXBSZWQub25TZWxlY0hpbmhUaHVjKG5hbWUpO1xyXG5cdH0sXHJcblx0c3VwZXJWaWV3OmZ1bmN0aW9uKG5hbWUpe1xyXG5cdFx0Ly9pZihuYW1lID09ICdOYXBSZWQnIHx8IG5hbWUgPT0gJ1Rob25nVGluTmFwUmVkJyB8fCBuYW1lID09ICdRdXlEaW5oTmFwUmVkJyl7XHJcblx0XHRpZihuYW1lID09ICdOYXBSZWQnKXtcclxuXHRcdFx0dGhpcy5vblNlbGVjdEhlYWQobnVsbCwgJ05hcFJlZCcpO1xyXG5cdFx0XHQvL2lmIChuYW1lICE9ICdOYXBSZWQnKSB0aGlzLk5hcFJlZC5vblNlbGVjdEhlYWQobnVsbCwgbmFtZSk7XHJcblx0XHR9ZWxzZSBpZihuYW1lID09ICdUaWV1UmVkJyB8fCBuYW1lID09ICdNdWFUaGVOYXAnKXtcclxuXHRcdFx0dGhpcy5vblNlbGVjdEhlYWQobnVsbCwgJ1RpZXVSZWQnKTtcclxuXHRcdFx0aWYgKG5hbWUgIT0gJ1RpZXVSZWQnKSB0aGlzLlRpZXVSZWQub25TZWxlY3RIZWFkKG51bGwsIG5hbWUpO1xyXG5cdFx0fWVsc2UgaWYobmFtZSA9PSAnQ2h1eWVuUmVkJyl7XHJcblx0XHRcdHRoaXMub25TZWxlY3RIZWFkKG51bGwsICdDaHV5ZW5SZWQnKTtcclxuXHRcdH1lbHNlIGlmKG5hbWUgPT0gJ0RhaUx5Jyl7XHJcblx0XHRcdHRoaXMub25TZWxlY3RIZWFkKG51bGwsICdEYWlMeScpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EYXRhOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubmFwX3JlZCl7XHJcblx0XHRcdHRoaXMuTmFwUmVkLm9uRGF0YShkYXRhLm5hcF9yZWQpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5tb21vKXtcclxuXHRcdFx0dGhpcy5OYXBSZWQuTU9NTyhkYXRhLm1vbW8pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5iYW5rKXtcclxuXHRcdFx0dGhpcy5OYXBSZWQuQkFOSyhkYXRhLmJhbmspO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5tdWFfdGhlX25hcCl7XHJcblx0XHRcdHRoaXMuVGlldVJlZC5NdWFUaGVDYW8ub25EYXRhKGRhdGEubXVhX3RoZV9uYXApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5kYWlseSl7XHJcblx0XHRcdHRoaXMuRGFpTHkub25EYXRhKGRhdGEuZGFpbHkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCEhZGF0YS5iYW5rKXtcclxuXHRcdFx0dGhpcy5CYW5rLm9uRGF0YShkYXRhLmJhbmspO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=