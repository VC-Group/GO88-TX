"use strict";
cc._RF.push(module, 'e57d5GbJYdPJaTehdXI/JqM', 'XoSo_Main_Main');
// Script/Game/XoSo/XoSo_Main_Main.js

'use strict';

var numberPad = require('Helper').numberPad;

cc.Class({
	extends: cc.Component,

	properties: {
		time_mb: cc.Label
	},

	update: function update(dt) {
		// Đích đến
		var countDownDate = new Date();
		countDownDate.setHours(18, 0, 0, 0, 0);
		countDownDate = countDownDate.getTime();
		// Lấy thời gian hiện tại
		var now = new Date().getTime();

		// Lấy số thời gian chênh lệch
		var distance = countDownDate - now;

		// HIển thị chuỗi thời gian trong thẻ p
		if (distance < 0) {
			this.time_mb.string = '';
		} else {
			// Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
			var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
			var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
			var seconds = Math.floor(distance % (1000 * 60) / 1000);
			this.time_mb.string = numberPad(hours, 2) + ':' + numberPad(minutes, 2) + ':' + numberPad(seconds, 2);
		}
	}
});

cc._RF.pop();