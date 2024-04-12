
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/ChuyenRed/ChuyenRed_daily.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1af2XufuNBepY7+fdeCQxa', 'ChuyenRed_daily');
// Script/Model/Dialog/Shop/ChuyenRed/ChuyenRed_daily.js

"use strict";

cc.Class({
	extends: cc.Component,

	properties: {
		bg: cc.Node,
		STT: cc.Label,
		DaiLy: cc.Label,
		NICKNAME: cc.Label,
		Phone: cc.Label,
		Location: cc.Label,
		FB: ""
	},
	init: function init(obj, data, index) {
		this.controll = obj;
		this.STT.string = index + 1;
		this.DaiLy.string = data.name;
		this.NICKNAME.string = data.nickname;
		this.Phone.string = data.phone;
		this.Location.string = data.location;
		this.FB = "https://facebook.com/" + data.fb;
	},
	onChuyenClick: function onChuyenClick() {
		cc.RedT.audio.playClick();
		this.controll.selectDaiLy(this);
	},
	onFBClick: function onFBClick() {
		if (cc.sys.isBrowser) {
			window.open(this.FB, '_blank');
		} else {
			cc.sys.openURL(this.FB);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXENodXllblJlZC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxDaHV5ZW5SZWQvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXENodXllblJlZFxcQ2h1eWVuUmVkX2RhaWx5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJnIiwiTm9kZSIsIlNUVCIsIkxhYmVsIiwiRGFpTHkiLCJOSUNLTkFNRSIsIlBob25lIiwiTG9jYXRpb24iLCJGQiIsImluaXQiLCJvYmoiLCJkYXRhIiwiaW5kZXgiLCJjb250cm9sbCIsInN0cmluZyIsIm5hbWUiLCJuaWNrbmFtZSIsInBob25lIiwibG9jYXRpb24iLCJmYiIsIm9uQ2h1eWVuQ2xpY2siLCJSZWRUIiwiYXVkaW8iLCJwbGF5Q2xpY2siLCJzZWxlY3REYWlMeSIsIm9uRkJDbGljayIsInN5cyIsImlzQnJvd3NlciIsIndpbmRvdyIsIm9wZW4iLCJvcGVuVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNMQyxNQUFJTCxHQUFHTSxJQURGO0FBRUxDLE9BQUtQLEdBQUdRLEtBRkg7QUFHWEMsU0FBT1QsR0FBR1EsS0FIQztBQUlYRSxZQUFVVixHQUFHUSxLQUpGO0FBS1hHLFNBQU9YLEdBQUdRLEtBTEM7QUFNTEksWUFBVVosR0FBR1EsS0FOUjtBQU9YSyxNQUFJO0FBUE8sRUFISjtBQVlSQyxPQUFNLGNBQVNDLEdBQVQsRUFBY0MsSUFBZCxFQUFvQkMsS0FBcEIsRUFBMkI7QUFDMUIsT0FBS0MsUUFBTCxHQUFnQkgsR0FBaEI7QUFDTixPQUFLUixHQUFMLENBQVNZLE1BQVQsR0FBdUJGLFFBQU0sQ0FBN0I7QUFDQSxPQUFLUixLQUFMLENBQVdVLE1BQVgsR0FBb0JILEtBQUtJLElBQXpCO0FBQ0EsT0FBS1YsUUFBTCxDQUFjUyxNQUFkLEdBQXVCSCxLQUFLSyxRQUE1QjtBQUNNLE9BQUtWLEtBQUwsQ0FBV1EsTUFBWCxHQUFvQkgsS0FBS00sS0FBekI7QUFDQSxPQUFLVixRQUFMLENBQWNPLE1BQWQsR0FBdUJILEtBQUtPLFFBQTVCO0FBQ04sT0FBS1YsRUFBTCxHQUFVLDBCQUEwQkcsS0FBS1EsRUFBekM7QUFDQSxFQXBCTztBQXFCUkMsZ0JBQWUseUJBQVU7QUFDeEJ6QixLQUFHMEIsSUFBSCxDQUFRQyxLQUFSLENBQWNDLFNBQWQ7QUFDQSxPQUFLVixRQUFMLENBQWNXLFdBQWQsQ0FBMEIsSUFBMUI7QUFDQSxFQXhCTztBQXlCUkMsWUFBVyxxQkFBVTtBQUNwQixNQUFHOUIsR0FBRytCLEdBQUgsQ0FBT0MsU0FBVixFQUFxQjtBQUNwQkMsVUFBT0MsSUFBUCxDQUFZLEtBQUtyQixFQUFqQixFQUFxQixRQUFyQjtBQUNBLEdBRkQsTUFFSztBQUNKYixNQUFHK0IsR0FBSCxDQUFPSSxPQUFQLENBQWUsS0FBS3RCLEVBQXBCO0FBQ0E7QUFFRDtBQWhDTyxDQUFUIiwiZmlsZSI6IkNodXllblJlZF9kYWlseS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxDaHV5ZW5SZWQiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG5cdGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcblx0cHJvcGVydGllczoge1xyXG4gICAgICAgIGJnOiBjYy5Ob2RlLFxyXG4gICAgICAgIFNUVDogY2MuTGFiZWwsXHJcblx0XHREYWlMeTogY2MuTGFiZWwsXHJcblx0XHROSUNLTkFNRTogY2MuTGFiZWwsXHJcblx0XHRQaG9uZTogY2MuTGFiZWwsXHJcbiAgICAgICAgTG9jYXRpb246IGNjLkxhYmVsLFxyXG5cdFx0RkI6IFwiXCIsXHJcblx0fSxcclxuXHRpbml0OiBmdW5jdGlvbihvYmosIGRhdGEsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5jb250cm9sbCA9IG9iajtcclxuXHRcdHRoaXMuU1RULnN0cmluZyAgICAgID0gaW5kZXgrMTtcclxuXHRcdHRoaXMuRGFpTHkuc3RyaW5nID0gZGF0YS5uYW1lO1xyXG5cdFx0dGhpcy5OSUNLTkFNRS5zdHJpbmcgPSBkYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgIHRoaXMuUGhvbmUuc3RyaW5nID0gZGF0YS5waG9uZTtcclxuICAgICAgICB0aGlzLkxvY2F0aW9uLnN0cmluZyA9IGRhdGEubG9jYXRpb247XHJcblx0XHR0aGlzLkZCID0gXCJodHRwczovL2ZhY2Vib29rLmNvbS9cIiArIGRhdGEuZmI7XHJcblx0fSxcclxuXHRvbkNodXllbkNsaWNrOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5hdWRpby5wbGF5Q2xpY2soKTtcclxuXHRcdHRoaXMuY29udHJvbGwuc2VsZWN0RGFpTHkodGhpcyk7XHJcblx0fSxcclxuXHRvbkZCQ2xpY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHRpZihjYy5zeXMuaXNCcm93c2VyICl7XHJcblx0XHRcdHdpbmRvdy5vcGVuKHRoaXMuRkIsICdfYmxhbmsnKTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRjYy5zeXMub3BlblVSTCh0aGlzLkZCKVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxufSk7XHJcbiJdfQ==