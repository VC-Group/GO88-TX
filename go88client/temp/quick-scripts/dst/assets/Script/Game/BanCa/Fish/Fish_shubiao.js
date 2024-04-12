
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/Fish/Fish_shubiao.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '06e28j9YVVPwYFkB3JOakxn', 'Fish_shubiao');
// Script/Game/BanCa/Fish/Fish_shubiao.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		collider: cc.CircleCollider,
		dragonBones: dragonBones.ArmatureDisplay,
		isSelect: false
	},
	init: function init(obj) {
		this.RedT = obj;
	},
	offLock: function offLock() {
		this.collider.enabled = false;
	},
	onCollisionEnter: function onCollisionEnter(other) {
		if (other.node.group !== 'tuong') {
			if (this.isSelect === false) {
				this.isSelect = true;
				if (this.RedT.player.fish) {
					this.RedT.player.fish.suoMe.active = false;
					this.RedT.player.fish.unLock(this.RedT.player.map);
					cc.RedT.send({ g: { fish: { unlock: true } } });
				}
				var fish = this.RedT.fish[other.node.id];
				if (fish !== void 0) {
					fish['player' + this.RedT.player.map] = this.RedT.player;
					this.RedT.player.fish = fish;
					this.RedT.player.isLock = true;
					this.RedT.player.fish.updateGroup();
					this.RedT.player.fish.suoMe.active = true;
					this.RedT.player.onFire();
					cc.RedT.send({ g: { fish: { lock: fish.id } } });
				}
			}
		} else {
			this.isSelect = false;
			if (this.RedT.player.fish) {
				this.RedT.player.fish.suoMe.active = false;
				this.RedT.player.fish.unLock(this.RedT.player.map);
				cc.RedT.send({ g: { fish: { unlock: true } } });
			}
		}
		this.offLock();
	},
	fire: function fire(position) {
		if (this.RedT.isLock) {
			this.collider.enabled = true;
			this.RedT.angleSung(position);
			this.RedT.shubiao.dragonBones.playAnimation('newAnimation', 1);
		} else {
			this.RedT.angleSung(position, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2gvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYVxcRmlzaC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEZpc2hfc2h1Ymlhby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb2xsaWRlciIsIkNpcmNsZUNvbGxpZGVyIiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJpc1NlbGVjdCIsImluaXQiLCJvYmoiLCJSZWRUIiwib2ZmTG9jayIsImVuYWJsZWQiLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJub2RlIiwiZ3JvdXAiLCJwbGF5ZXIiLCJmaXNoIiwic3VvTWUiLCJhY3RpdmUiLCJ1bkxvY2siLCJtYXAiLCJzZW5kIiwiZyIsInVubG9jayIsImlkIiwiaXNMb2NrIiwidXBkYXRlR3JvdXAiLCJvbkZpcmUiLCJsb2NrIiwiZmlyZSIsInBvc2l0aW9uIiwiYW5nbGVTdW5nIiwic2h1YmlhbyIsInBsYXlBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKOztBQUdSQyxhQUFZO0FBQ1hDLFlBQWFMLEdBQUdNLGNBREw7QUFFWEMsZUFBYUEsWUFBWUMsZUFGZDtBQUdYQyxZQUFhO0FBSEYsRUFISjtBQVFSQyxPQUFLLGNBQVNDLEdBQVQsRUFBYTtBQUNqQixPQUFLQyxJQUFMLEdBQVlELEdBQVo7QUFDQSxFQVZPO0FBV1JFLFVBQVMsbUJBQVU7QUFDbEIsT0FBS1IsUUFBTCxDQUFjUyxPQUFkLEdBQXdCLEtBQXhCO0FBQ0EsRUFiTztBQWNSQyxtQkFBa0IsMEJBQVVDLEtBQVYsRUFBaUI7QUFDbEMsTUFBSUEsTUFBTUMsSUFBTixDQUFXQyxLQUFYLEtBQXFCLE9BQXpCLEVBQWtDO0FBQ2pDLE9BQUksS0FBS1QsUUFBTCxLQUFrQixLQUF0QixFQUE2QjtBQUM1QixTQUFLQSxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsUUFBSSxLQUFLRyxJQUFMLENBQVVPLE1BQVYsQ0FBaUJDLElBQXJCLEVBQTJCO0FBQzFCLFVBQUtSLElBQUwsQ0FBVU8sTUFBVixDQUFpQkMsSUFBakIsQ0FBc0JDLEtBQXRCLENBQTRCQyxNQUE1QixHQUFxQyxLQUFyQztBQUNBLFVBQUtWLElBQUwsQ0FBVU8sTUFBVixDQUFpQkMsSUFBakIsQ0FBc0JHLE1BQXRCLENBQTZCLEtBQUtYLElBQUwsQ0FBVU8sTUFBVixDQUFpQkssR0FBOUM7QUFDQXhCLFFBQUdZLElBQUgsQ0FBUWEsSUFBUixDQUFhLEVBQUNDLEdBQUUsRUFBQ04sTUFBSyxFQUFDTyxRQUFPLElBQVIsRUFBTixFQUFILEVBQWI7QUFDQTtBQUNELFFBQUlQLE9BQU8sS0FBS1IsSUFBTCxDQUFVUSxJQUFWLENBQWVKLE1BQU1DLElBQU4sQ0FBV1csRUFBMUIsQ0FBWDtBQUNBLFFBQUlSLFNBQVMsS0FBSyxDQUFsQixFQUFxQjtBQUNwQkEsVUFBSyxXQUFTLEtBQUtSLElBQUwsQ0FBVU8sTUFBVixDQUFpQkssR0FBL0IsSUFBc0MsS0FBS1osSUFBTCxDQUFVTyxNQUFoRDtBQUNBLFVBQUtQLElBQUwsQ0FBVU8sTUFBVixDQUFpQkMsSUFBakIsR0FBd0JBLElBQXhCO0FBQ0EsVUFBS1IsSUFBTCxDQUFVTyxNQUFWLENBQWlCVSxNQUFqQixHQUEwQixJQUExQjtBQUNBLFVBQUtqQixJQUFMLENBQVVPLE1BQVYsQ0FBaUJDLElBQWpCLENBQXNCVSxXQUF0QjtBQUNBLFVBQUtsQixJQUFMLENBQVVPLE1BQVYsQ0FBaUJDLElBQWpCLENBQXNCQyxLQUF0QixDQUE0QkMsTUFBNUIsR0FBcUMsSUFBckM7QUFDQSxVQUFLVixJQUFMLENBQVVPLE1BQVYsQ0FBaUJZLE1BQWpCO0FBQ0EvQixRQUFHWSxJQUFILENBQVFhLElBQVIsQ0FBYSxFQUFDQyxHQUFFLEVBQUNOLE1BQUssRUFBQ1ksTUFBS1osS0FBS1EsRUFBWCxFQUFOLEVBQUgsRUFBYjtBQUNBO0FBQ0Q7QUFDRCxHQW5CRCxNQW1CSztBQUNKLFFBQUtuQixRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsT0FBSSxLQUFLRyxJQUFMLENBQVVPLE1BQVYsQ0FBaUJDLElBQXJCLEVBQTJCO0FBQzFCLFNBQUtSLElBQUwsQ0FBVU8sTUFBVixDQUFpQkMsSUFBakIsQ0FBc0JDLEtBQXRCLENBQTRCQyxNQUE1QixHQUFxQyxLQUFyQztBQUNBLFNBQUtWLElBQUwsQ0FBVU8sTUFBVixDQUFpQkMsSUFBakIsQ0FBc0JHLE1BQXRCLENBQTZCLEtBQUtYLElBQUwsQ0FBVU8sTUFBVixDQUFpQkssR0FBOUM7QUFDQXhCLE9BQUdZLElBQUgsQ0FBUWEsSUFBUixDQUFhLEVBQUNDLEdBQUUsRUFBQ04sTUFBSyxFQUFDTyxRQUFPLElBQVIsRUFBTixFQUFILEVBQWI7QUFDQTtBQUNEO0FBQ0QsT0FBS2QsT0FBTDtBQUNBLEVBM0NPO0FBNENSb0IsT0FBTSxjQUFTQyxRQUFULEVBQWtCO0FBQ3ZCLE1BQUksS0FBS3RCLElBQUwsQ0FBVWlCLE1BQWQsRUFBc0I7QUFDckIsUUFBS3hCLFFBQUwsQ0FBY1MsT0FBZCxHQUF3QixJQUF4QjtBQUNBLFFBQUtGLElBQUwsQ0FBVXVCLFNBQVYsQ0FBb0JELFFBQXBCO0FBQ0EsUUFBS3RCLElBQUwsQ0FBVXdCLE9BQVYsQ0FBa0I3QixXQUFsQixDQUE4QjhCLGFBQTlCLENBQTRDLGNBQTVDLEVBQTRELENBQTVEO0FBQ0EsR0FKRCxNQUlLO0FBQ0osUUFBS3pCLElBQUwsQ0FBVXVCLFNBQVYsQ0FBb0JELFFBQXBCLEVBQThCLElBQTlCO0FBQ0E7QUFDRDtBQXBETyxDQUFUIiwiZmlsZSI6IkZpc2hfc2h1Ymlhby5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGNvbGxpZGVyOiAgICBjYy5DaXJjbGVDb2xsaWRlcixcclxuXHRcdGRyYWdvbkJvbmVzOiBkcmFnb25Cb25lcy5Bcm1hdHVyZURpc3BsYXksXHJcblx0XHRpc1NlbGVjdDogICAgZmFsc2UsXHJcblx0fSxcclxuXHRpbml0OmZ1bmN0aW9uKG9iail7XHJcblx0XHR0aGlzLlJlZFQgPSBvYmo7XHJcblx0fSxcclxuXHRvZmZMb2NrOiBmdW5jdGlvbigpe1xyXG5cdFx0dGhpcy5jb2xsaWRlci5lbmFibGVkID0gZmFsc2U7XHJcblx0fSxcclxuXHRvbkNvbGxpc2lvbkVudGVyOiBmdW5jdGlvbiAob3RoZXIpIHtcclxuXHRcdGlmIChvdGhlci5ub2RlLmdyb3VwICE9PSAndHVvbmcnKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzU2VsZWN0ID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdHRoaXMuaXNTZWxlY3QgPSB0cnVlO1xyXG5cdFx0XHRcdGlmICh0aGlzLlJlZFQucGxheWVyLmZpc2gpIHtcclxuXHRcdFx0XHRcdHRoaXMuUmVkVC5wbGF5ZXIuZmlzaC5zdW9NZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuUmVkVC5wbGF5ZXIuZmlzaC51bkxvY2sodGhpcy5SZWRULnBsYXllci5tYXApO1xyXG5cdFx0XHRcdFx0Y2MuUmVkVC5zZW5kKHtnOntmaXNoOnt1bmxvY2s6dHJ1ZX19fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBmaXNoID0gdGhpcy5SZWRULmZpc2hbb3RoZXIubm9kZS5pZF07XHJcblx0XHRcdFx0aWYgKGZpc2ggIT09IHZvaWQgMCkge1xyXG5cdFx0XHRcdFx0ZmlzaFsncGxheWVyJyt0aGlzLlJlZFQucGxheWVyLm1hcF0gPSB0aGlzLlJlZFQucGxheWVyO1xyXG5cdFx0XHRcdFx0dGhpcy5SZWRULnBsYXllci5maXNoID0gZmlzaDtcclxuXHRcdFx0XHRcdHRoaXMuUmVkVC5wbGF5ZXIuaXNMb2NrID0gdHJ1ZTtcclxuXHRcdFx0XHRcdHRoaXMuUmVkVC5wbGF5ZXIuZmlzaC51cGRhdGVHcm91cCgpO1xyXG5cdFx0XHRcdFx0dGhpcy5SZWRULnBsYXllci5maXNoLnN1b01lLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdFx0XHR0aGlzLlJlZFQucGxheWVyLm9uRmlyZSgpO1xyXG5cdFx0XHRcdFx0Y2MuUmVkVC5zZW5kKHtnOntmaXNoOntsb2NrOmZpc2guaWR9fX0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuaXNTZWxlY3QgPSBmYWxzZTtcclxuXHRcdFx0aWYgKHRoaXMuUmVkVC5wbGF5ZXIuZmlzaCkge1xyXG5cdFx0XHRcdHRoaXMuUmVkVC5wbGF5ZXIuZmlzaC5zdW9NZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLlJlZFQucGxheWVyLmZpc2gudW5Mb2NrKHRoaXMuUmVkVC5wbGF5ZXIubWFwKTtcclxuXHRcdFx0XHRjYy5SZWRULnNlbmQoe2c6e2Zpc2g6e3VubG9jazp0cnVlfX19KTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5vZmZMb2NrKCk7XHJcblx0fSxcclxuXHRmaXJlOiBmdW5jdGlvbihwb3NpdGlvbil7XHJcblx0XHRpZiAodGhpcy5SZWRULmlzTG9jaykge1xyXG5cdFx0XHR0aGlzLmNvbGxpZGVyLmVuYWJsZWQgPSB0cnVlO1xyXG5cdFx0XHR0aGlzLlJlZFQuYW5nbGVTdW5nKHBvc2l0aW9uKTtcclxuXHRcdFx0dGhpcy5SZWRULnNodWJpYW8uZHJhZ29uQm9uZXMucGxheUFuaW1hdGlvbignbmV3QW5pbWF0aW9uJywgMSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5SZWRULmFuZ2xlU3VuZyhwb3NpdGlvbiwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==