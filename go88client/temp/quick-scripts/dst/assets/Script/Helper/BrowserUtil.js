
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/BrowserUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3144b0EOb5M+JRv7V+30M1S', 'BrowserUtil');
// Script/Helper/BrowserUtil.js

"use strict";

module.exports = {
	showCursorText: function showCursorText() {
		this.isCursorAuto() || this.setCursor("text");
	},
	showCursorPointer: function showCursorPointer() {
		this.isCursorAuto() || this.setCursor("pointer");
	},
	showCursorMove: function showCursorMove() {
		this.isCursorAuto() || this.setCursor("move");
	},
	showCursorAuto: function showCursorAuto() {
		this.isCursorAuto() || this.setCursor("auto");
	},
	showCursorFish: function showCursorFish() {
		// /assets/fish_game_arrow.png
		// /app/editor/static/preview-templates/assets/fish_game_arrow.png
		cc.sys.isBrowser && (cc.game.canvas.style.cursor = "url('/assets/fish_game_arrow.png'), auto");
	},
	showCursorAutoForce: function showCursorAutoForce() {
		cc.sys.isBrowser && this.setCursor("auto");
	},
	isCursorAuto: function isCursorAuto() {
		return !!cc.sys.isBrowser && "auto" === document.getElementById("GameDiv").style.cursor;
	},
	setCursor: function setCursor(t) {
		cc.sys.isBrowser && (cc.game.canvas.style.cursor = t);
	},
	showTooltip: function showTooltip(t) {
		cc.sys.isBrowser && (document.body.title = t);
	},
	focusGame: function focusGame() {
		cc.sys.isBrowser && cc.game.canvas.focus();
	},
	getHTMLElementByEditBox: function getHTMLElementByEditBox(t) {
		return t._impl._elem;
	},
	checkEditBoxFocus: function checkEditBoxFocus(t) {
		return t.isFocused();
	},
	focusEditBox: function focusEditBox(t) {
		//t._impl._elem.style.display = "block";
		t._impl._elem.focus();
		t.focus();
	},
	unFocusEditBox: function unFocusEditBox(t) {
		//t._impl._elem.style.display = "none";
	},
	inputAddEvent: function inputAddEvent(input, event, callback) {
		input._impl._elem.addEventListener(event, callback);
	},
	inputRemoveEvent: function inputRemoveEvent(input, event, callback) {
		input._impl._elem.removeEventListener(event, callback);
	},
	readOnlyEditBox: function readOnlyEditBox(t) {
		t.readOnly = !0;
	}
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcQnJvd3NlclV0aWwuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInNob3dDdXJzb3JUZXh0IiwiaXNDdXJzb3JBdXRvIiwic2V0Q3Vyc29yIiwic2hvd0N1cnNvclBvaW50ZXIiLCJzaG93Q3Vyc29yTW92ZSIsInNob3dDdXJzb3JBdXRvIiwic2hvd0N1cnNvckZpc2giLCJjYyIsInN5cyIsImlzQnJvd3NlciIsImdhbWUiLCJjYW52YXMiLCJzdHlsZSIsImN1cnNvciIsInNob3dDdXJzb3JBdXRvRm9yY2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidCIsInNob3dUb29sdGlwIiwiYm9keSIsInRpdGxlIiwiZm9jdXNHYW1lIiwiZm9jdXMiLCJnZXRIVE1MRWxlbWVudEJ5RWRpdEJveCIsIl9pbXBsIiwiX2VsZW0iLCJjaGVja0VkaXRCb3hGb2N1cyIsImlzRm9jdXNlZCIsImZvY3VzRWRpdEJveCIsInVuRm9jdXNFZGl0Qm94IiwiaW5wdXRBZGRFdmVudCIsImlucHV0IiwiZXZlbnQiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbnB1dFJlbW92ZUV2ZW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWRPbmx5RWRpdEJveCIsInJlYWRPbmx5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2hCQyxpQkFBZ0IsMEJBQVc7QUFDMUIsT0FBS0MsWUFBTCxNQUF1QixLQUFLQyxTQUFMLENBQWUsTUFBZixDQUF2QjtBQUNBLEVBSGU7QUFJaEJDLG9CQUFtQiw2QkFBVztBQUM3QixPQUFLRixZQUFMLE1BQXVCLEtBQUtDLFNBQUwsQ0FBZSxTQUFmLENBQXZCO0FBQ0EsRUFOZTtBQU9oQkUsaUJBQWdCLDBCQUFXO0FBQzFCLE9BQUtILFlBQUwsTUFBdUIsS0FBS0MsU0FBTCxDQUFlLE1BQWYsQ0FBdkI7QUFDQSxFQVRlO0FBVWhCRyxpQkFBZ0IsMEJBQVc7QUFDMUIsT0FBS0osWUFBTCxNQUF1QixLQUFLQyxTQUFMLENBQWUsTUFBZixDQUF2QjtBQUNBLEVBWmU7QUFhaEJJLGlCQUFnQiwwQkFBVztBQUMxQjtBQUNBO0FBQ0FDLEtBQUdDLEdBQUgsQ0FBT0MsU0FBUCxLQUFxQkYsR0FBR0csSUFBSCxDQUFRQyxNQUFSLENBQWVDLEtBQWYsQ0FBcUJDLE1BQXJCLEdBQThCLDBDQUFuRDtBQUNBLEVBakJlO0FBa0JoQkMsc0JBQXFCLCtCQUFXO0FBQy9CUCxLQUFHQyxHQUFILENBQU9DLFNBQVAsSUFBb0IsS0FBS1AsU0FBTCxDQUFlLE1BQWYsQ0FBcEI7QUFDQSxFQXBCZTtBQXFCaEJELGVBQWMsd0JBQVc7QUFDeEIsU0FBTyxDQUFDLENBQUNNLEdBQUdDLEdBQUgsQ0FBT0MsU0FBVCxJQUFzQixXQUFXTSxTQUFTQyxjQUFULENBQXdCLFNBQXhCLEVBQW1DSixLQUFuQyxDQUF5Q0MsTUFBakY7QUFDQSxFQXZCZTtBQXdCaEJYLFlBQVcsbUJBQVNlLENBQVQsRUFBWTtBQUN0QlYsS0FBR0MsR0FBSCxDQUFPQyxTQUFQLEtBQXFCRixHQUFHRyxJQUFILENBQVFDLE1BQVIsQ0FBZUMsS0FBZixDQUFxQkMsTUFBckIsR0FBOEJJLENBQW5EO0FBQ0EsRUExQmU7QUEyQmhCQyxjQUFhLHFCQUFTRCxDQUFULEVBQVk7QUFDeEJWLEtBQUdDLEdBQUgsQ0FBT0MsU0FBUCxLQUFxQk0sU0FBU0ksSUFBVCxDQUFjQyxLQUFkLEdBQXNCSCxDQUEzQztBQUNBLEVBN0JlO0FBOEJoQkksWUFBVyxxQkFBVztBQUNyQmQsS0FBR0MsR0FBSCxDQUFPQyxTQUFQLElBQW9CRixHQUFHRyxJQUFILENBQVFDLE1BQVIsQ0FBZVcsS0FBZixFQUFwQjtBQUNBLEVBaENlO0FBaUNoQkMsMEJBQXlCLGlDQUFTTixDQUFULEVBQVk7QUFDcEMsU0FBT0EsRUFBRU8sS0FBRixDQUFRQyxLQUFmO0FBQ0EsRUFuQ2U7QUFvQ2hCQyxvQkFBbUIsMkJBQVNULENBQVQsRUFBWTtBQUM5QixTQUFPQSxFQUFFVSxTQUFGLEVBQVA7QUFDQSxFQXRDZTtBQXVDaEJDLGVBQWMsc0JBQVNYLENBQVQsRUFBWTtBQUN6QjtBQUNBQSxJQUFFTyxLQUFGLENBQVFDLEtBQVIsQ0FBY0gsS0FBZDtBQUNBTCxJQUFFSyxLQUFGO0FBQ0EsRUEzQ2U7QUE0Q2hCTyxpQkFBZ0Isd0JBQVNaLENBQVQsRUFBWTtBQUMzQjtBQUNBLEVBOUNlO0FBK0NoQmEsZ0JBQWUsdUJBQVNDLEtBQVQsRUFBZ0JDLEtBQWhCLEVBQXVCQyxRQUF2QixFQUFpQztBQUMvQ0YsUUFBTVAsS0FBTixDQUFZQyxLQUFaLENBQWtCUyxnQkFBbEIsQ0FBbUNGLEtBQW5DLEVBQTBDQyxRQUExQztBQUNBLEVBakRlO0FBa0RoQkUsbUJBQWtCLDBCQUFTSixLQUFULEVBQWdCQyxLQUFoQixFQUF1QkMsUUFBdkIsRUFBaUM7QUFDbERGLFFBQU1QLEtBQU4sQ0FBWUMsS0FBWixDQUFrQlcsbUJBQWxCLENBQXNDSixLQUF0QyxFQUE2Q0MsUUFBN0M7QUFDQSxFQXBEZTtBQXFEaEJJLGtCQUFpQix5QkFBU3BCLENBQVQsRUFBWTtBQUM1QkEsSUFBRXFCLFFBQUYsR0FBYSxDQUFDLENBQWQ7QUFDQTtBQXZEZSxDQUFqQiIsImZpbGUiOiJCcm93c2VyVXRpbC5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuXHRzaG93Q3Vyc29yVGV4dDogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmlzQ3Vyc29yQXV0bygpIHx8IHRoaXMuc2V0Q3Vyc29yKFwidGV4dFwiKVxyXG5cdH0sXHJcblx0c2hvd0N1cnNvclBvaW50ZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0dGhpcy5pc0N1cnNvckF1dG8oKSB8fCB0aGlzLnNldEN1cnNvcihcInBvaW50ZXJcIilcclxuXHR9LFxyXG5cdHNob3dDdXJzb3JNb3ZlOiBmdW5jdGlvbigpIHtcclxuXHRcdHRoaXMuaXNDdXJzb3JBdXRvKCkgfHwgdGhpcy5zZXRDdXJzb3IoXCJtb3ZlXCIpXHJcblx0fSxcclxuXHRzaG93Q3Vyc29yQXV0bzogZnVuY3Rpb24oKSB7XHJcblx0XHR0aGlzLmlzQ3Vyc29yQXV0bygpIHx8IHRoaXMuc2V0Q3Vyc29yKFwiYXV0b1wiKVxyXG5cdH0sXHJcblx0c2hvd0N1cnNvckZpc2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Ly8gL2Fzc2V0cy9maXNoX2dhbWVfYXJyb3cucG5nXHJcblx0XHQvLyAvYXBwL2VkaXRvci9zdGF0aWMvcHJldmlldy10ZW1wbGF0ZXMvYXNzZXRzL2Zpc2hfZ2FtZV9hcnJvdy5wbmdcclxuXHRcdGNjLnN5cy5pc0Jyb3dzZXIgJiYgKGNjLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwidXJsKCcvYXNzZXRzL2Zpc2hfZ2FtZV9hcnJvdy5wbmcnKSwgYXV0b1wiKTtcclxuXHR9LFxyXG5cdHNob3dDdXJzb3JBdXRvRm9yY2U6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiB0aGlzLnNldEN1cnNvcihcImF1dG9cIilcclxuXHR9LFxyXG5cdGlzQ3Vyc29yQXV0bzogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gISFjYy5zeXMuaXNCcm93c2VyICYmIFwiYXV0b1wiID09PSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkdhbWVEaXZcIikuc3R5bGUuY3Vyc29yXHJcblx0fSxcclxuXHRzZXRDdXJzb3I6IGZ1bmN0aW9uKHQpIHtcclxuXHRcdGNjLnN5cy5pc0Jyb3dzZXIgJiYgKGNjLmdhbWUuY2FudmFzLnN0eWxlLmN1cnNvciA9IHQpXHJcblx0fSxcclxuXHRzaG93VG9vbHRpcDogZnVuY3Rpb24odCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiAoZG9jdW1lbnQuYm9keS50aXRsZSA9IHQpXHJcblx0fSxcclxuXHRmb2N1c0dhbWU6IGZ1bmN0aW9uKCkge1xyXG5cdFx0Y2Muc3lzLmlzQnJvd3NlciAmJiBjYy5nYW1lLmNhbnZhcy5mb2N1cygpXHJcblx0fSxcclxuXHRnZXRIVE1MRWxlbWVudEJ5RWRpdEJveDogZnVuY3Rpb24odCkge1xyXG5cdFx0cmV0dXJuIHQuX2ltcGwuX2VsZW1cclxuXHR9LFxyXG5cdGNoZWNrRWRpdEJveEZvY3VzOiBmdW5jdGlvbih0KSB7XHJcblx0XHRyZXR1cm4gdC5pc0ZvY3VzZWQoKTtcclxuXHR9LFxyXG5cdGZvY3VzRWRpdEJveDogZnVuY3Rpb24odCkge1xyXG5cdFx0Ly90Ll9pbXBsLl9lbGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblx0XHR0Ll9pbXBsLl9lbGVtLmZvY3VzKCk7XHJcblx0XHR0LmZvY3VzKCk7XHJcblx0fSxcclxuXHR1bkZvY3VzRWRpdEJveDogZnVuY3Rpb24odCkge1xyXG5cdFx0Ly90Ll9pbXBsLl9lbGVtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHR9LFxyXG5cdGlucHV0QWRkRXZlbnQ6IGZ1bmN0aW9uKGlucHV0LCBldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdGlucHV0Ll9pbXBsLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxuXHR9LFxyXG5cdGlucHV0UmVtb3ZlRXZlbnQ6IGZ1bmN0aW9uKGlucHV0LCBldmVudCwgY2FsbGJhY2spIHtcclxuXHRcdGlucHV0Ll9pbXBsLl9lbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcclxuXHR9LFxyXG5cdHJlYWRPbmx5RWRpdEJveDogZnVuY3Rpb24odCkge1xyXG5cdFx0dC5yZWFkT25seSA9ICEwO1xyXG5cdH1cclxufVxyXG4iXX0=