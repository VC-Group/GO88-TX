
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/BanCa/Fish/EF/fish_EFcoint.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0523fq9zpdKS5b1accvj8bj', 'fish_EFcoint');
// Script/Game/BanCa/Fish/EF/fish_EFcoint.js

'use strict';

cc.Class({
	extends: cc.Component,

	properties: {
		coint: dragonBones.ArmatureDisplay
	},
	init: function init(player, fish, data) {
		this.coint.on(dragonBones.EventObject.LOOP_COMPLETE, this.COMPLETE, this);

		this.node.x = fish.x + Math.floor(Math.random() * (data.x * 2 + 1)) - data.x;
		this.node.y = fish.y + Math.floor(Math.random() * (data.y * 2 + 1)) - data.y;

		player.RedT.Game.nodeCoint.addChild(this.node);
		data = null;

		var position = player.iconCoint.node.parent.convertToWorldSpaceAR(player.iconCoint.node.position);
		this.position = this.node.parent.convertToNodeSpaceAR(position);
		this.changer = false;
	},
	COMPLETE: function COMPLETE() {
		if (this.changer === false) {
			this.coint.playAnimation('rotation', 0);
			var dist = this.node.position.sub(this.position).mag();
			dist = dist / 800;
			this.node.runAction(cc.sequence(cc.spawn(cc.scaleTo(dist, 0.4), cc.moveTo(dist, this.position)), cc.callFunc(function () {
				this.node.destroy();
			}, this)));
		}
		this.changer = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoXFxFRi8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYVxcRmlzaFxcRUYvYXNzZXRzXFxTY3JpcHRcXEdhbWVcXEJhbkNhXFxGaXNoXFxFRlxcZmlzaF9FRmNvaW50LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImNvaW50IiwiZHJhZ29uQm9uZXMiLCJBcm1hdHVyZURpc3BsYXkiLCJpbml0IiwicGxheWVyIiwiZmlzaCIsImRhdGEiLCJvbiIsIkV2ZW50T2JqZWN0IiwiTE9PUF9DT01QTEVURSIsIkNPTVBMRVRFIiwibm9kZSIsIngiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ5IiwiUmVkVCIsIkdhbWUiLCJub2RlQ29pbnQiLCJhZGRDaGlsZCIsInBvc2l0aW9uIiwiaWNvbkNvaW50IiwicGFyZW50IiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJjaGFuZ2VyIiwicGxheUFuaW1hdGlvbiIsImRpc3QiLCJzdWIiLCJtYWciLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsInNwYXduIiwic2NhbGVUbyIsIm1vdmVUbyIsImNhbGxGdW5jIiwiZGVzdHJveSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsR0FBR0MsS0FBSCxDQUFTO0FBQ1JDLFVBQVNGLEdBQUdHLFNBREo7O0FBR1JDLGFBQVk7QUFDWEMsU0FBT0MsWUFBWUM7QUFEUixFQUhKO0FBTVJDLE9BQU0sY0FBU0MsTUFBVCxFQUFpQkMsSUFBakIsRUFBdUJDLElBQXZCLEVBQTZCO0FBQ2xDLE9BQUtOLEtBQUwsQ0FBV08sRUFBWCxDQUFjTixZQUFZTyxXQUFaLENBQXdCQyxhQUF0QyxFQUFxRCxLQUFLQyxRQUExRCxFQUFvRSxJQUFwRTs7QUFFQSxPQUFLQyxJQUFMLENBQVVDLENBQVYsR0FBY1AsS0FBS08sQ0FBTCxHQUFTQyxLQUFLQyxLQUFMLENBQVdELEtBQUtFLE1BQUwsTUFBZVQsS0FBS00sQ0FBTCxHQUFPLENBQVAsR0FBUyxDQUF4QixDQUFYLENBQVQsR0FBZ0ROLEtBQUtNLENBQW5FO0FBQ0EsT0FBS0QsSUFBTCxDQUFVSyxDQUFWLEdBQWNYLEtBQUtXLENBQUwsR0FBU0gsS0FBS0MsS0FBTCxDQUFXRCxLQUFLRSxNQUFMLE1BQWVULEtBQUtVLENBQUwsR0FBTyxDQUFQLEdBQVMsQ0FBeEIsQ0FBWCxDQUFULEdBQWdEVixLQUFLVSxDQUFuRTs7QUFFQVosU0FBT2EsSUFBUCxDQUFZQyxJQUFaLENBQWlCQyxTQUFqQixDQUEyQkMsUUFBM0IsQ0FBb0MsS0FBS1QsSUFBekM7QUFDQUwsU0FBTyxJQUFQOztBQUVBLE1BQUllLFdBQVdqQixPQUFPa0IsU0FBUCxDQUFpQlgsSUFBakIsQ0FBc0JZLE1BQXRCLENBQTZCQyxxQkFBN0IsQ0FBbURwQixPQUFPa0IsU0FBUCxDQUFpQlgsSUFBakIsQ0FBc0JVLFFBQXpFLENBQWY7QUFDQSxPQUFLQSxRQUFMLEdBQWdCLEtBQUtWLElBQUwsQ0FBVVksTUFBVixDQUFpQkUsb0JBQWpCLENBQXNDSixRQUF0QyxDQUFoQjtBQUNBLE9BQUtLLE9BQUwsR0FBZSxLQUFmO0FBQ0EsRUFsQk87QUFtQlJoQixXQUFTLG9CQUFVO0FBQ2xCLE1BQUksS0FBS2dCLE9BQUwsS0FBaUIsS0FBckIsRUFBNEI7QUFDM0IsUUFBSzFCLEtBQUwsQ0FBVzJCLGFBQVgsQ0FBeUIsVUFBekIsRUFBcUMsQ0FBckM7QUFDQSxPQUFJQyxPQUFPLEtBQUtqQixJQUFMLENBQVVVLFFBQVYsQ0FBbUJRLEdBQW5CLENBQXVCLEtBQUtSLFFBQTVCLEVBQXNDUyxHQUF0QyxFQUFYO0FBQ0FGLFVBQU9BLE9BQUssR0FBWjtBQUNBLFFBQUtqQixJQUFMLENBQVVvQixTQUFWLENBQW9CcEMsR0FBR3FDLFFBQUgsQ0FBWXJDLEdBQUdzQyxLQUFILENBQVN0QyxHQUFHdUMsT0FBSCxDQUFXTixJQUFYLEVBQWlCLEdBQWpCLENBQVQsRUFBZ0NqQyxHQUFHd0MsTUFBSCxDQUFVUCxJQUFWLEVBQWdCLEtBQUtQLFFBQXJCLENBQWhDLENBQVosRUFBNkUxQixHQUFHeUMsUUFBSCxDQUFZLFlBQVU7QUFDdEgsU0FBS3pCLElBQUwsQ0FBVTBCLE9BQVY7QUFDQSxJQUZnRyxFQUU5RixJQUY4RixDQUE3RSxDQUFwQjtBQUdBO0FBQ0QsT0FBS1gsT0FBTCxHQUFlLElBQWY7QUFDQTtBQTdCTyxDQUFUIiwiZmlsZSI6ImZpc2hfRUZjb2ludC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxCYW5DYVxcRmlzaFxcRUYiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG5cdFx0Y29pbnQ6IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSxcclxuXHR9LFxyXG5cdGluaXQ6IGZ1bmN0aW9uKHBsYXllciwgZmlzaCwgZGF0YSkge1xyXG5cdFx0dGhpcy5jb2ludC5vbihkcmFnb25Cb25lcy5FdmVudE9iamVjdC5MT09QX0NPTVBMRVRFLCB0aGlzLkNPTVBMRVRFLCB0aGlzKTtcclxuXHJcblx0XHR0aGlzLm5vZGUueCA9IGZpc2gueCArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSooZGF0YS54KjIrMSkpLWRhdGEueDtcclxuXHRcdHRoaXMubm9kZS55ID0gZmlzaC55ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihkYXRhLnkqMisxKSktZGF0YS55O1xyXG5cclxuXHRcdHBsYXllci5SZWRULkdhbWUubm9kZUNvaW50LmFkZENoaWxkKHRoaXMubm9kZSk7XHJcblx0XHRkYXRhID0gbnVsbDtcclxuXHJcblx0XHRsZXQgcG9zaXRpb24gPSBwbGF5ZXIuaWNvbkNvaW50Lm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihwbGF5ZXIuaWNvbkNvaW50Lm5vZGUucG9zaXRpb24pO1xyXG5cdFx0dGhpcy5wb3NpdGlvbiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG5cdFx0dGhpcy5jaGFuZ2VyID0gZmFsc2U7XHJcblx0fSxcclxuXHRDT01QTEVURTpmdW5jdGlvbigpe1xyXG5cdFx0aWYgKHRoaXMuY2hhbmdlciA9PT0gZmFsc2UpIHtcclxuXHRcdFx0dGhpcy5jb2ludC5wbGF5QW5pbWF0aW9uKCdyb3RhdGlvbicsIDApO1xyXG5cdFx0XHRsZXQgZGlzdCA9IHRoaXMubm9kZS5wb3NpdGlvbi5zdWIodGhpcy5wb3NpdGlvbikubWFnKCk7XHJcblx0XHRcdGRpc3QgPSBkaXN0LzgwMDtcclxuXHRcdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5zcGF3bihjYy5zY2FsZVRvKGRpc3QsIDAuNCksIGNjLm1vdmVUbyhkaXN0LCB0aGlzLnBvc2l0aW9uKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuXHRcdFx0fSwgdGhpcykpKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2hhbmdlciA9IHRydWU7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==