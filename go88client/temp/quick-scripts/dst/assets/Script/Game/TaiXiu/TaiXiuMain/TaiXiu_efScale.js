
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/TaiXiu/TaiXiuMain/TaiXiu_efScale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1dcc4TRp5REZa8M+IY8ljzM', 'TaiXiu_efScale');
// Script/Game/TaiXiu/TaiXiuMain/TaiXiu_efScale.js

"use strict";

cc.Class({
	extends: cc.Component,
	play: function play() {
		this.node.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(0.4, 0.4), cc.scaleTo(0.4, 0.4))));
	},
	stop: function stop() {
		this.node.stopAllActions();
		this.node.scale = 0.4;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluLy4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcVGFpWGl1XFxUYWlYaXVNYWluL2Fzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdU1haW5cXFRhaVhpdV9lZlNjYWxlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicGxheSIsIm5vZGUiLCJydW5BY3Rpb24iLCJyZXBlYXRGb3JldmVyIiwic2VxdWVuY2UiLCJzY2FsZVRvIiwic3RvcCIsInN0b3BBbGxBY3Rpb25zIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEdBQUdDLEtBQUgsQ0FBUztBQUNSQyxVQUFTRixHQUFHRyxTQURKO0FBRVJDLEtBRlEsa0JBRUQ7QUFDTixPQUFLQyxJQUFMLENBQVVDLFNBQVYsQ0FDQ04sR0FBR08sYUFBSCxDQUNDUCxHQUFHUSxRQUFILENBQ0NSLEdBQUdTLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLEdBQWhCLENBREQsRUFFQ1QsR0FBR1MsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsR0FBaEIsQ0FGRCxDQURELENBREQ7QUFRQSxFQVhPO0FBWVJDLEtBWlEsa0JBWUY7QUFDTCxPQUFLTCxJQUFMLENBQVVNLGNBQVY7QUFDQSxPQUFLTixJQUFMLENBQVVPLEtBQVYsR0FBa0IsR0FBbEI7QUFDQTtBQWZPLENBQVQiLCJmaWxlIjoiVGFpWGl1X2VmU2NhbGUuanMiLCJzb3VyY2VSb290IjoiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxUYWlYaXVcXFRhaVhpdU1haW4iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHRwbGF5KCkge1xyXG5cdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuXHRcdFx0Y2MucmVwZWF0Rm9yZXZlcihcclxuXHRcdFx0XHRjYy5zZXF1ZW5jZShcclxuXHRcdFx0XHRcdGNjLnNjYWxlVG8oMC40LCAwLjQpLFxyXG5cdFx0XHRcdFx0Y2Muc2NhbGVUbygwLjQsIDAuNCksXHJcblx0XHRcdFx0KVxyXG5cdFx0XHQpXHJcblx0XHQpO1xyXG5cdH0sXHJcblx0c3RvcCgpe1xyXG5cdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcblx0XHR0aGlzLm5vZGUuc2NhbGUgPSAwLjQ7XHJcblx0fSxcclxufSk7XHJcbiJdfQ==