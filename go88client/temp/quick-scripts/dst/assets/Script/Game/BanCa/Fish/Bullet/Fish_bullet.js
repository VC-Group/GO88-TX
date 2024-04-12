
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/Fish/Bullet/Fish_bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b002ckgsd9Ndr4/xSE5GpV3', 'Fish_bullet');
// Script/Game/BanCa/Fish/Bullet/Fish_bullet.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		body: cc.RigidBody,
		collider: cc.PhysicsCircleCollider,
		icon: cc.Node,
		isMe: false,
		isLock: false,
		bullet: 0
	},
	init: function init(obj, target) {
		this.RedT = obj;

		var x = target.x;
		var y = target.y;

		this.node.x = this.RedT.node.x;
		this.node.y = this.RedT.node.y;

		var selfX = this.node.x;
		var selfY = this.node.y;

		var velocity = cc.v2(x - selfX, y - selfY);
		velocity.normalizeSelf();
		velocity.mulSelf(this.RedT.RedT.Game.bulletVelocity);

		this.body.linearVelocity = velocity;

		var positionUser = this.RedT.node.parent.convertToWorldSpaceAR(target);
		var position1_1 = this.RedT.node.convertToNodeSpaceAR(positionUser);
		position1_1 = cc.misc.radiansToDegrees(Math.atan2(position1_1.x, position1_1.y));
		this.icon.angle = -position1_1;

		this.updateGroup();
	},
	onPostSolve: function onPostSolve() {
		var vecNew = this.body.linearVelocity;
		vecNew = cc.misc.radiansToDegrees(Math.atan2(vecNew.x, vecNew.y));
		this.icon.angle = -vecNew;
	},
	onCollisionEnter: function onCollisionEnter(other) {
		if (other.node.group !== 'tuong') {
			if (void 0 !== this.id) {
				delete this.RedT.bullet[this.id];
			}
			var ef_bullet = cc.instantiate(this.RedT.RedT.Game.ef_bullet[this.bullet]);
			ef_bullet.x = this.node.x;
			ef_bullet.y = this.node.y;
			this.RedT.RedT.Game.nodeDan.addChild(ef_bullet);
			this.node.destroy();
			if (this.isMe) {
				cc.RedT.send({ g: { fish: { collision: { id: this.id, f: other.node.id } } } });
			}
		}
	},
	updateGroup: function updateGroup() {
		var group = 'dan';
		if (this.node) {
			if (this.isLock) {
				group += this.RedT.map;
			}
			this.node.group = group;
			//console.log(this.node.group);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoXFxCdWxsZXQvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEJ1bGxldC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEJ1bGxldFxcRmlzaF9idWxsZXQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsImV4dGVuZHMiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYm9keSIsIlJpZ2lkQm9keSIsImNvbGxpZGVyIiwiUGh5c2ljc0NpcmNsZUNvbGxpZGVyIiwiaWNvbiIsIk5vZGUiLCJpc01lIiwiaXNMb2NrIiwiYnVsbGV0IiwiaW5pdCIsIm9iaiIsInRhcmdldCIsIlJlZFQiLCJ4IiwieSIsIm5vZGUiLCJzZWxmWCIsInNlbGZZIiwidmVsb2NpdHkiLCJ2MiIsIm5vcm1hbGl6ZVNlbGYiLCJtdWxTZWxmIiwiR2FtZSIsImJ1bGxldFZlbG9jaXR5IiwibGluZWFyVmVsb2NpdHkiLCJwb3NpdGlvblVzZXIiLCJwYXJlbnQiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJwb3NpdGlvbjFfMSIsImNvbnZlcnRUb05vZGVTcGFjZUFSIiwibWlzYyIsInJhZGlhbnNUb0RlZ3JlZXMiLCJNYXRoIiwiYXRhbjIiLCJhbmdsZSIsInVwZGF0ZUdyb3VwIiwib25Qb3N0U29sdmUiLCJ2ZWNOZXciLCJvbkNvbGxpc2lvbkVudGVyIiwib3RoZXIiLCJncm91cCIsImlkIiwiZWZfYnVsbGV0IiwiaW5zdGFudGlhdGUiLCJub2RlRGFuIiwiYWRkQ2hpbGQiLCJkZXN0cm95Iiwic2VuZCIsImciLCJmaXNoIiwiY29sbGlzaW9uIiwiZiIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdB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Q0FBYSxFQUFDQyxHQUFFLEVBQUNDLE1BQUssRUFBQ0MsV0FBVSxFQUFDVCxJQUFHLEtBQUtBLEVBQVQsRUFBYVUsR0FBRVosTUFBTXhCLElBQU4sQ0FBVzBCLEVBQTFCLEVBQVgsRUFBTixFQUFILEVBQWI7QUFDQTtBQUNEO0FBQ0UsRUF2REk7QUF3RFJOLGNBQWEsdUJBQVc7QUFDdkIsTUFBSUssUUFBUSxLQUFaO0FBQ0EsTUFBRyxLQUFLekIsSUFBUixFQUFjO0FBQ2IsT0FBSSxLQUFLUixNQUFULEVBQWdCO0FBQ2ZpQyxhQUFTLEtBQUs1QixJQUFMLENBQVV3QyxHQUFuQjtBQUNBO0FBQ0QsUUFBS3JDLElBQUwsQ0FBVXlCLEtBQVYsR0FBa0JBLEtBQWxCO0FBQ0E7QUFDQTtBQUNEO0FBakVPLENBQVQiLCJmaWxlIjoiRmlzaF9idWxsZXQuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcQmFuQ2FcXEZpc2hcXEJ1bGxldCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuXHRwcm9wZXJ0aWVzOiB7XHJcblx0XHRib2R5OiAgICAgY2MuUmlnaWRCb2R5LFxyXG5cdFx0Y29sbGlkZXI6IGNjLlBoeXNpY3NDaXJjbGVDb2xsaWRlcixcclxuXHRcdGljb246ICAgICBjYy5Ob2RlLFxyXG5cdFx0aXNNZTogICAgIGZhbHNlLFxyXG5cdFx0aXNMb2NrOiAgIGZhbHNlLFxyXG5cdFx0YnVsbGV0OiAgIDAsXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbihvYmosIHRhcmdldCl7XHJcblx0XHR0aGlzLlJlZFQgPSBvYmo7XHJcblxyXG4gICAgICAgIHZhciB4ID0gdGFyZ2V0Lng7XHJcbiAgICAgICAgdmFyIHkgPSB0YXJnZXQueTtcclxuXHJcblx0XHR0aGlzLm5vZGUueCA9IHRoaXMuUmVkVC5ub2RlLng7XHJcblx0XHR0aGlzLm5vZGUueSA9IHRoaXMuUmVkVC5ub2RlLnk7XHJcblxyXG4gICAgICAgIHZhciBzZWxmWCA9IHRoaXMubm9kZS54O1xyXG4gICAgICAgIHZhciBzZWxmWSA9IHRoaXMubm9kZS55O1xyXG5cclxuICAgICAgICB2YXIgdmVsb2NpdHkgPSBjYy52Mih4LXNlbGZYLCB5LXNlbGZZKTtcclxuICAgICAgICB2ZWxvY2l0eS5ub3JtYWxpemVTZWxmKCk7XHJcbiAgICAgICAgdmVsb2NpdHkubXVsU2VsZih0aGlzLlJlZFQuUmVkVC5HYW1lLmJ1bGxldFZlbG9jaXR5KTtcclxuXHJcbiAgICAgICAgdGhpcy5ib2R5LmxpbmVhclZlbG9jaXR5ID0gdmVsb2NpdHk7XHJcblxyXG4gICAgICAgIGxldCBwb3NpdGlvblVzZXIgPSB0aGlzLlJlZFQubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKHRhcmdldCk7XHJcblx0XHRsZXQgcG9zaXRpb24xXzEgID0gdGhpcy5SZWRULm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb25Vc2VyKTtcclxuXHRcdHBvc2l0aW9uMV8xID0gY2MubWlzYy5yYWRpYW5zVG9EZWdyZWVzKE1hdGguYXRhbjIocG9zaXRpb24xXzEueCwgcG9zaXRpb24xXzEueSkpO1xyXG5cdFx0dGhpcy5pY29uLmFuZ2xlID0gLXBvc2l0aW9uMV8xO1xyXG5cclxuXHRcdHRoaXMudXBkYXRlR3JvdXAoKTtcclxuXHR9LFxyXG4gICAgb25Qb3N0U29sdmU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGxldCB2ZWNOZXcgPSB0aGlzLmJvZHkubGluZWFyVmVsb2NpdHk7XHJcblx0XHR2ZWNOZXcgPSBjYy5taXNjLnJhZGlhbnNUb0RlZ3JlZXMoTWF0aC5hdGFuMih2ZWNOZXcueCwgdmVjTmV3LnkpKTtcclxuXHRcdHRoaXMuaWNvbi5hbmdsZSA9IC12ZWNOZXc7XHJcbiAgICB9LFxyXG5cdG9uQ29sbGlzaW9uRW50ZXI6IGZ1bmN0aW9uKG90aGVyKSB7XHJcblx0XHRpZiAob3RoZXIubm9kZS5ncm91cCAhPT0gJ3R1b25nJykge1xyXG5cdFx0XHRpZiAodm9pZCAwICE9PSB0aGlzLmlkKSB7XHJcblx0XHRcdFx0ZGVsZXRlIHRoaXMuUmVkVC5idWxsZXRbdGhpcy5pZF07XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGVmX2J1bGxldCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUmVkVC5SZWRULkdhbWUuZWZfYnVsbGV0W3RoaXMuYnVsbGV0XSk7XHJcblx0XHRcdGVmX2J1bGxldC54ID0gdGhpcy5ub2RlLng7XHJcblx0XHRcdGVmX2J1bGxldC55ID0gdGhpcy5ub2RlLnk7XHJcblx0XHRcdHRoaXMuUmVkVC5SZWRULkdhbWUubm9kZURhbi5hZGRDaGlsZChlZl9idWxsZXQpO1xyXG5cdFx0XHR0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG5cdFx0XHRpZiAodGhpcy5pc01lKSB7XHJcblx0XHRcdFx0Y2MuUmVkVC5zZW5kKHtnOntmaXNoOntjb2xsaXNpb246e2lkOnRoaXMuaWQsIGY6b3RoZXIubm9kZS5pZH19fX0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcbiAgICB9LFxyXG5cdHVwZGF0ZUdyb3VwOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCBncm91cCA9ICdkYW4nO1xyXG5cdFx0aWYodGhpcy5ub2RlKSB7XHJcblx0XHRcdGlmICh0aGlzLmlzTG9jayl7XHJcblx0XHRcdFx0Z3JvdXAgKz0gdGhpcy5SZWRULm1hcDtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm5vZGUuZ3JvdXAgPSBncm91cDtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZyh0aGlzLm5vZGUuZ3JvdXApO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn0pO1xyXG4iXX0=