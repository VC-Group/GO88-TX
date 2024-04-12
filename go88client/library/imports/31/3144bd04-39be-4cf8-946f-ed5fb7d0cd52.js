"use strict";
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