
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/Bank/Bank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e83d55pg19B9a0JKV75kU4f', 'Bank');
// Script/Model/Dialog/Shop/Bank/Bank.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		header: cc.Node,
		nap: cc.Node,
		atm: cc.Node,
		rut: cc.Node
	},
	init: function init() {
		this.body = [];
		if (this.nap) {
			this.nap = this.nap.getComponent('bankNap');
			this.body.push(this.nap);
		}
		if (this.atm) {
			this.atm = this.atm.getComponent('bankATM');
			this.body.push(this.atm);
		}

		if (this.rut) {
			this.rut = this.rut.getComponent('bankRut');
			this.rut.init();
			this.body.push(this.rut);
		}
		console.log(this.body);

		this.header = this.header.children.map(function (obj) {
			return obj.getComponent('itemContentMenu');
		});
	},

	onSelectHead: function onSelectHead(event, name) {
		this.header.map(function (header) {
			if (header.node.name == name) {
				header.select();
			} else {
				header.unselect();
			}
		});
		this.body.map(function (body) {
			if (body.node.name == name) {
				body.node.active = true;
			} else {
				body.node.active = false;
			}
		});
	},
	onData: function onData(data) {
		if (!!data.list && this.nap) {
			this.nap.onData(data.list);
		}
		if (void 0 !== data.atm && this.atm) {
			this.atm.onData(data.atm);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXEJhbmsvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcQmFuay9hc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcQmFua1xcQmFuay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJoZWFkZXIiLCJOb2RlIiwibmFwIiwiYXRtIiwicnV0IiwiaW5pdCIsImJvZHkiLCJnZXRDb21wb25lbnQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsImNoaWxkcmVuIiwibWFwIiwib2JqIiwib25TZWxlY3RIZWFkIiwiZXZlbnQiLCJuYW1lIiwibm9kZSIsInNlbGVjdCIsInVuc2VsZWN0IiwiYWN0aXZlIiwib25EYXRhIiwiZGF0YSIsImxpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLFVBQVFMLEdBQUdNLElBREE7QUFFWEMsT0FBUVAsR0FBR00sSUFGQTtBQUdYRSxPQUFRUixHQUFHTSxJQUhBO0FBSVhHLE9BQVFULEdBQUdNO0FBSkEsRUFISjtBQVNSSSxLQVRRLGtCQVNGO0FBQ0wsT0FBS0MsSUFBTCxHQUFjLEVBQWQ7QUFDQSxNQUFHLEtBQUtKLEdBQVIsRUFBWTtBQUNYLFFBQUtBLEdBQUwsR0FBVyxLQUFLQSxHQUFMLENBQVNLLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBWDtBQUNBLFFBQUtELElBQUwsQ0FBVUUsSUFBVixDQUFlLEtBQUtOLEdBQXBCO0FBQ0E7QUFDRCxNQUFHLEtBQUtDLEdBQVIsRUFBWTtBQUNYLFFBQUtBLEdBQUwsR0FBVyxLQUFLQSxHQUFMLENBQVNJLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBWDtBQUNBLFFBQUtELElBQUwsQ0FBVUUsSUFBVixDQUFlLEtBQUtMLEdBQXBCO0FBQ0E7O0FBRUQsTUFBRyxLQUFLQyxHQUFSLEVBQVk7QUFDWCxRQUFLQSxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTRyxZQUFULENBQXNCLFNBQXRCLENBQVg7QUFDQSxRQUFLSCxHQUFMLENBQVNDLElBQVQ7QUFDQSxRQUFLQyxJQUFMLENBQVVFLElBQVYsQ0FBZSxLQUFLSixHQUFwQjtBQUNBO0FBQ0RLLFVBQVFDLEdBQVIsQ0FBWSxLQUFLSixJQUFqQjs7QUFHQSxPQUFLTixNQUFMLEdBQWMsS0FBS0EsTUFBTCxDQUFZVyxRQUFaLENBQXFCQyxHQUFyQixDQUF5QixVQUFTQyxHQUFULEVBQWM7QUFDcEQsVUFBT0EsSUFBSU4sWUFBSixDQUFpQixpQkFBakIsQ0FBUDtBQUNBLEdBRmEsQ0FBZDtBQUdBLEVBL0JPOztBQWdDUk8sZUFBYyxzQkFBU0MsS0FBVCxFQUFnQkMsSUFBaEIsRUFBcUI7QUFDbEMsT0FBS2hCLE1BQUwsQ0FBWVksR0FBWixDQUFnQixVQUFTWixNQUFULEVBQWlCO0FBQ2hDLE9BQUlBLE9BQU9pQixJQUFQLENBQVlELElBQVosSUFBb0JBLElBQXhCLEVBQThCO0FBQzdCaEIsV0FBT2tCLE1BQVA7QUFDQSxJQUZELE1BRUs7QUFDSmxCLFdBQU9tQixRQUFQO0FBQ0E7QUFDRCxHQU5EO0FBT0EsT0FBS2IsSUFBTCxDQUFVTSxHQUFWLENBQWMsVUFBU04sSUFBVCxFQUFlO0FBQzVCLE9BQUlBLEtBQUtXLElBQUwsQ0FBVUQsSUFBVixJQUFrQkEsSUFBdEIsRUFBNEI7QUFDM0JWLFNBQUtXLElBQUwsQ0FBVUcsTUFBVixHQUFtQixJQUFuQjtBQUNBLElBRkQsTUFFSztBQUNKZCxTQUFLVyxJQUFMLENBQVVHLE1BQVYsR0FBbUIsS0FBbkI7QUFDQTtBQUNELEdBTkQ7QUFPQSxFQS9DTztBQWdEUkMsU0FBUSxnQkFBU0MsSUFBVCxFQUFjO0FBQ3JCLE1BQUksQ0FBQyxDQUFDQSxLQUFLQyxJQUFQLElBQWUsS0FBS3JCLEdBQXhCLEVBQTZCO0FBQzVCLFFBQUtBLEdBQUwsQ0FBU21CLE1BQVQsQ0FBZ0JDLEtBQUtDLElBQXJCO0FBQ0E7QUFDRCxNQUFJLEtBQUssQ0FBTCxLQUFXRCxLQUFLbkIsR0FBaEIsSUFBdUIsS0FBS0EsR0FBaEMsRUFBcUM7QUFDcEMsUUFBS0EsR0FBTCxDQUFTa0IsTUFBVCxDQUFnQkMsS0FBS25CLEdBQXJCO0FBQ0E7QUFDRDtBQXZETyxDQUFUIiwiZmlsZSI6IkJhbmsuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcTW9kZWxcXERpYWxvZ1xcU2hvcFxcQmFuayIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRoZWFkZXI6IGNjLk5vZGUsXHJcblx0XHRuYXA6ICAgIGNjLk5vZGUsXHJcblx0XHRhdG06ICAgIGNjLk5vZGUsXHJcblx0XHRydXQ6ICAgIGNjLk5vZGUsXHJcblx0fSxcclxuXHRpbml0KCl7XHJcblx0XHR0aGlzLmJvZHkgICA9IFtdO1xyXG5cdFx0aWYodGhpcy5uYXApe1xyXG5cdFx0XHR0aGlzLm5hcCA9IHRoaXMubmFwLmdldENvbXBvbmVudCgnYmFua05hcCcpO1xyXG5cdFx0XHR0aGlzLmJvZHkucHVzaCh0aGlzLm5hcCk7XHJcblx0XHR9XHJcblx0XHRpZih0aGlzLmF0bSl7XHJcblx0XHRcdHRoaXMuYXRtID0gdGhpcy5hdG0uZ2V0Q29tcG9uZW50KCdiYW5rQVRNJyk7XHJcblx0XHRcdHRoaXMuYm9keS5wdXNoKHRoaXMuYXRtKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYodGhpcy5ydXQpe1xyXG5cdFx0XHR0aGlzLnJ1dCA9IHRoaXMucnV0LmdldENvbXBvbmVudCgnYmFua1J1dCcpO1xyXG5cdFx0XHR0aGlzLnJ1dC5pbml0KCk7XHJcblx0XHRcdHRoaXMuYm9keS5wdXNoKHRoaXMucnV0KTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKHRoaXMuYm9keSk7XHJcblxyXG5cdFx0XHJcblx0XHR0aGlzLmhlYWRlciA9IHRoaXMuaGVhZGVyLmNoaWxkcmVuLm1hcChmdW5jdGlvbihvYmopIHtcclxuXHRcdFx0cmV0dXJuIG9iai5nZXRDb21wb25lbnQoJ2l0ZW1Db250ZW50TWVudScpO1xyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvblNlbGVjdEhlYWQ6IGZ1bmN0aW9uKGV2ZW50LCBuYW1lKXtcclxuXHRcdHRoaXMuaGVhZGVyLm1hcChmdW5jdGlvbihoZWFkZXIpIHtcclxuXHRcdFx0aWYgKGhlYWRlci5ub2RlLm5hbWUgPT0gbmFtZSkge1xyXG5cdFx0XHRcdGhlYWRlci5zZWxlY3QoKTtcclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0aGVhZGVyLnVuc2VsZWN0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5ib2R5Lm1hcChmdW5jdGlvbihib2R5KSB7XHJcblx0XHRcdGlmIChib2R5Lm5vZGUubmFtZSA9PSBuYW1lKSB7XHJcblx0XHRcdFx0Ym9keS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGJvZHkubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0aWYgKCEhZGF0YS5saXN0ICYmIHRoaXMubmFwKSB7XHJcblx0XHRcdHRoaXMubmFwLm9uRGF0YShkYXRhLmxpc3QpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5hdG0gJiYgdGhpcy5hdG0pIHtcclxuXHRcdFx0dGhpcy5hdG0ub25EYXRhKGRhdGEuYXRtKTtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19