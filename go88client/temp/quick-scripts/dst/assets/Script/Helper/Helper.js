
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Helper/Helper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ea8443jZShFSboJocQ6Ztdo', 'Helper');
// Script/Helper/Helper.js

"use strict";

function isEmpty(str) {
	return !str || 0 === str.length;
}
function validateEmail(t) {
	return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)
	);
}
function checkPhoneValid(phone) {
	return (/^[\+]?(?:[(][0-9]{1,3}[)]|(?:84|0))[0-9]{7,10}$/im.test(phone)
	);
}
function nFormatter(t, e) {
	for (var i = [{
		value: 1e18,
		symbol: "E"
	}, {
		value: 1e15,
		symbol: "P"
	}, {
		value: 1e12,
		symbol: "T"
	}, {
		value: 1e9,
		symbol: "G"
	}, {
		value: 1e6,
		symbol: "M"
	}, {
		value: 1e3,
		symbol: "k"
	}], o = /\.0+$|(\.[0-9]*[1-9])0+$/, n = 0; n < i.length; n++) {
		if (t >= i[n].value) return (t / i[n].value).toFixed(e).replace(o, "$1") + i[n].symbol;
	}return t.toFixed(e).replace(o, "$1");
}
function numberWithCommas(number) {
	if (number) {
		var result = (number = parseInt(number)).toString().split(".");
		return result[0] = result[0].replace(/\B(?=(\d{3})+(?!\d))/g, "."), result.join(".");
	}
	return "0";
}
function getOnlyNumberInString(t) {
	var e = t.match(/\d+/g);
	return e ? e.join("") : "";
}

function numberToTime(t) {
	t < 0 && (t = 0), t = parseInt(t);
	var e = parseInt(t / 60),
	    i = t % 60;
	return e < 10 && (e = "0" + e), i < 10 && (i = "0" + i), e + ":" + i;
}
function numberPad(number, length) {
	var str = '' + number;
	while (str.length < length) {
		str = '0' + str;
	}return str;
}

function inputNumber(obj) {
	var onShift = false;
	obj.addEventListener('keydown', function (e) {
		if (e.keyCode === 16) {
			e.preventDefault();onShift = true;
		}
	});
	obj.addEventListener('keyup', function (e) {
		if (e.keyCode === 16) {
			e.preventDefault();onShift = false;
		}
	});
	obj.addEventListener('keydown', function (e) {
		if (!onShift && (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 96 && e.keyCode <= 105 || e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 189 || e.keyCode === 8 || e.keyCode === 13)) {} else {
			e.preventDefault();
		}
	});
}
function numberTo(obj, start, end, duration) {
	var currency = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	clearInterval(obj.timer);
	var range = end - start;
	var minTimer = 50;
	var stepTime = Math.abs(Math.floor(duration / range));
	stepTime = Math.max(stepTime, minTimer);
	var startTime = new Date().getTime();
	var endTime = startTime + duration;

	obj.timer = setInterval(function () {
		if (!!obj.node) {
			var now = new Date().getTime();
			var remaining = Math.max((endTime - now) / duration, 0);
			var value = end - remaining * range >> 0;
			obj.string = currency ? numberWithCommas(value) : value;
			if (value == end) {
				clearInterval(obj.timer);
			}
		} else clearInterval(obj.timer);
	}, stepTime);
}
function getStringDateByTime(t) {
	var e = new Date(t),
	    i = e.getHours(),
	    o = e.getMinutes(),
	    n = e.getDate(),
	    s = e.getMonth() + 1;
	return i < 10 && (i = "0" + i), o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), s < 10 && (s = "0" + s), i + ":" + o + " " + n + "/" + s + "/" + e.getFullYear();
}
function getDateByTime(t) {
	var e = new Date(t);
	return e.getDate() + "/" + (e.getMonth() + 1) + "/" + e.getFullYear();
}
function getStringHourByTime(t) {
	var e = new Date(t),
	    i = e.getHours(),
	    o = e.getMinutes(),
	    n = e.getSeconds();
	return i < 10 && (i = "0" + i), o < 10 && (o = "0" + o), n < 10 && (n = "0" + n), i + ":" + o + ":" + n;
}

function anPhanTram(bet, so_nhan, ti_le) {
	var type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

	// so_nhan: số nhân
	// ti_le: tỉ lệ thuế
	// type: Thuế tổng, thuế gốc
	var vV = bet * so_nhan;
	var vT = !!type ? v1 : bet;
	return vV - Math.ceil(vT * ti_le / 100);
}

function addZero10(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

module.exports = {
	checkPhoneValid: checkPhoneValid,
	nFormatter: nFormatter,
	numberWithCommas: numberWithCommas,
	isEmpty: isEmpty,
	getOnlyNumberInString: getOnlyNumberInString,
	numberPad: numberPad,
	inputNumber: inputNumber,
	anPhanTram: anPhanTram,
	numberTo: numberTo,
	getStringDateByTime: getStringDateByTime,
	getStringHourByTime: getStringHourByTime,
	numberToTime: numberToTime,
	validateEmail: validateEmail,
	addZero10: addZero10
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEhlbHBlci8uLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIvYXNzZXRzXFxTY3JpcHRcXEhlbHBlclxcSGVscGVyLmpzIl0sIm5hbWVzIjpbImlzRW1wdHkiLCJzdHIiLCJsZW5ndGgiLCJ2YWxpZGF0ZUVtYWlsIiwidCIsInRlc3QiLCJjaGVja1Bob25lVmFsaWQiLCJwaG9uZSIsIm5Gb3JtYXR0ZXIiLCJlIiwiaSIsInZhbHVlIiwic3ltYm9sIiwibyIsIm4iLCJ0b0ZpeGVkIiwicmVwbGFjZSIsIm51bWJlcldpdGhDb21tYXMiLCJudW1iZXIiLCJyZXN1bHQiLCJwYXJzZUludCIsInRvU3RyaW5nIiwic3BsaXQiLCJqb2luIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwibWF0Y2giLCJudW1iZXJUb1RpbWUiLCJudW1iZXJQYWQiLCJpbnB1dE51bWJlciIsIm9iaiIsIm9uU2hpZnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwibnVtYmVyVG8iLCJzdGFydCIsImVuZCIsImR1cmF0aW9uIiwiY3VycmVuY3kiLCJjbGVhckludGVydmFsIiwidGltZXIiLCJyYW5nZSIsIm1pblRpbWVyIiwic3RlcFRpbWUiLCJNYXRoIiwiYWJzIiwiZmxvb3IiLCJtYXgiLCJzdGFydFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImVuZFRpbWUiLCJzZXRJbnRlcnZhbCIsIm5vZGUiLCJub3ciLCJyZW1haW5pbmciLCJzdHJpbmciLCJnZXRTdHJpbmdEYXRlQnlUaW1lIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0RGF0ZSIsInMiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZ2V0RGF0ZUJ5VGltZSIsImdldFN0cmluZ0hvdXJCeVRpbWUiLCJnZXRTZWNvbmRzIiwiYW5QaGFuVHJhbSIsImJldCIsInNvX25oYW4iLCJ0aV9sZSIsInR5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Q0FBckIsQ0FETyxFQUVQQyxJQUFJLEVBQUosS0FBV0EsSUFBSSxNQUFNQSxDQUFyQixDQUZPLEVBR1BKLElBQUksR0FBSixHQUFVRyxDQUFWLEdBQWMsR0FBZCxHQUFvQkMsQ0FIcEI7QUFJQTs7QUFFRCxTQUFTcUQsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUJDLE9BQXpCLEVBQWtDQyxLQUFsQyxFQUFzRDtBQUFBLEtBQWJDLElBQWEsdUVBQU4sS0FBTTs7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsS0FBSUMsS0FBS0osTUFBSUMsT0FBYjtBQUNBLEtBQUlJLEtBQUssQ0FBQyxDQUFDRixJQUFGLEdBQVNHLEVBQVQsR0FBY04sR0FBdkI7QUFDQSxRQUFPSSxLQUFHNUIsS0FBSytCLElBQUwsQ0FBVUYsS0FBR0gsS0FBSCxHQUFTLEdBQW5CLENBQVY7QUFDQTs7QUFFRCxTQUFTTSxTQUFULENBQW1CbEUsQ0FBbkIsRUFBc0I7QUFDckIsS0FBSUEsSUFBSSxFQUFSLEVBQVk7QUFDWEEsTUFBSSxNQUFNQSxDQUFWO0FBQ0E7QUFDRCxRQUFPQSxDQUFQO0FBQ0E7O0FBRURtRSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2hCeEUsa0JBQXVCQSxlQURQO0FBRWhCRSxhQUF1QkEsVUFGUDtBQUdoQlMsbUJBQXVCQSxnQkFIUDtBQUloQmpCLFVBQXVCQSxPQUpQO0FBS2hCd0Isd0JBQXVCQSxxQkFMUDtBQU1oQkcsWUFBdUJBLFNBTlA7QUFPaEJDLGNBQXVCQSxXQVBQO0FBUWhCdUMsYUFBdUJBLFVBUlA7QUFTaEJqQyxXQUF1QkEsUUFUUDtBQVVoQnVCLHNCQUF1QkEsbUJBVlA7QUFXaEJRLHNCQUF1QkEsbUJBWFA7QUFZaEJ2QyxlQUF1QkEsWUFaUDtBQWFoQnZCLGdCQUF1QkEsYUFiUDtBQWNoQnlFLFlBQXVCQTtBQWRQLENBQWpCIiwiZmlsZSI6IkhlbHBlci5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxIZWxwZXIiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZnVuY3Rpb24gaXNFbXB0eShzdHIpIHtcclxuXHRyZXR1cm4gKCFzdHIgfHwgMCA9PT0gc3RyLmxlbmd0aClcclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKHQpIHtcclxuXHRyZXR1cm4gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8udGVzdCh0KTtcclxufVxyXG5mdW5jdGlvbiBjaGVja1Bob25lVmFsaWQocGhvbmUpIHtcclxuXHRyZXR1cm4gL15bXFwrXT8oPzpbKF1bMC05XXsxLDN9WyldfCg/Ojg0fDApKVswLTldezcsMTB9JC9pbS50ZXN0KHBob25lKTtcclxufVxyXG5mdW5jdGlvbiBuRm9ybWF0dGVyKHQsIGUpIHtcclxuXHRmb3IgKHZhciBpID0gW3tcclxuXHRcdHZhbHVlOiAxZTE4LFxyXG5cdFx0c3ltYm9sOiBcIkVcIlxyXG5cdH0sIHtcclxuXHRcdHZhbHVlOiAxZTE1LFxyXG5cdFx0c3ltYm9sOiBcIlBcIlxyXG5cdH0sIHtcclxuXHRcdHZhbHVlOiAxZTEyLFxyXG5cdFx0c3ltYm9sOiBcIlRcIlxyXG5cdH0sIHtcclxuXHRcdHZhbHVlOiAxZTksXHJcblx0XHRzeW1ib2w6IFwiR1wiXHJcblx0fSwge1xyXG5cdFx0dmFsdWU6IDFlNixcclxuXHRcdHN5bWJvbDogXCJNXCJcclxuXHR9LCB7XHJcblx0XHR2YWx1ZTogMWUzLFxyXG5cdFx0c3ltYm9sOiBcImtcIlxyXG5cdH1dLCBvID0gL1xcLjArJHwoXFwuWzAtOV0qWzEtOV0pMCskLywgbiA9IDA7IG4gPCBpLmxlbmd0aDsgbisrKVxyXG5cdFx0aWYgKHQgPj0gaVtuXS52YWx1ZSlcclxuXHRcdFx0cmV0dXJuICh0IC8gaVtuXS52YWx1ZSkudG9GaXhlZChlKS5yZXBsYWNlKG8sIFwiJDFcIikgKyBpW25dLnN5bWJvbDtcclxuXHRyZXR1cm4gdC50b0ZpeGVkKGUpLnJlcGxhY2UobywgXCIkMVwiKVxyXG59XHJcbmZ1bmN0aW9uIG51bWJlcldpdGhDb21tYXMobnVtYmVyKSB7XHJcblx0aWYgKG51bWJlcikge1xyXG5cdFx0dmFyIHJlc3VsdCA9IChudW1iZXIgPSBwYXJzZUludChudW1iZXIpKS50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcclxuXHRcdHJldHVybiByZXN1bHRbMF0gPSByZXN1bHRbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIuXCIpLFxyXG5cdFx0cmVzdWx0LmpvaW4oXCIuXCIpXHJcblx0fVxyXG5cdHJldHVybiBcIjBcIlxyXG59XHJcbmZ1bmN0aW9uIGdldE9ubHlOdW1iZXJJblN0cmluZyh0KSB7XHJcblx0dmFyIGUgPSB0Lm1hdGNoKC9cXGQrL2cpO1xyXG5cdHJldHVybiBlID8gZS5qb2luKFwiXCIpIDogXCJcIlxyXG59XHJcblxyXG5mdW5jdGlvbiBudW1iZXJUb1RpbWUodCkge1xyXG5cdHQgPCAwICYmICh0ID0gMCksXHJcblx0dCA9IHBhcnNlSW50KHQpO1xyXG5cdGxldCBlID0gcGFyc2VJbnQodCAvIDYwKVxyXG5cdCwgaSA9IHQgJSA2MDtcclxuXHRyZXR1cm4gZSA8IDEwICYmIChlID0gXCIwXCIgKyBlKSxcclxuXHRpIDwgMTAgJiYgKGkgPSBcIjBcIiArIGkpLFxyXG5cdGUgKyBcIjpcIiArIGlcclxufVxyXG5mdW5jdGlvbiBudW1iZXJQYWQobnVtYmVyLCBsZW5ndGgpIHtcclxuXHRsZXQgc3RyID0gJycgKyBudW1iZXI7XHJcblx0d2hpbGUoc3RyLmxlbmd0aCA8IGxlbmd0aClcclxuXHRcdHN0ciA9ICcwJyArIHN0cjtcclxuXHRyZXR1cm4gc3RyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnB1dE51bWJlcihvYmope1xyXG5cdHZhciBvblNoaWZ0ID0gZmFsc2VcclxuXHRvYmouYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpe2lmIChlLmtleUNvZGUgPT09IDE2KSB7ZS5wcmV2ZW50RGVmYXVsdCgpO29uU2hpZnQgPSB0cnVlO319KTtcclxuXHRvYmouYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAgIGZ1bmN0aW9uKGUpe2lmIChlLmtleUNvZGUgPT09IDE2KSB7ZS5wcmV2ZW50RGVmYXVsdCgpO29uU2hpZnQgPSBmYWxzZTt9fSk7XHJcblx0b2JqLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKXtcclxuXHRcdGlmICghb25TaGlmdCAmJiAoKGUua2V5Q29kZSA+PSA0OCAmJiBlLmtleUNvZGUgPD0gNTcpICB8fFxyXG5cdFx0XHQoZS5rZXlDb2RlID49IDk2ICYmIGUua2V5Q29kZSA8PSAxMDUpIHx8XHJcblx0XHRcdChlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9IDQwKSB8fFxyXG5cdFx0XHRlLmtleUNvZGUgPT09IDEwNyB8fFxyXG5cdFx0XHRlLmtleUNvZGUgPT09IDEwOSB8fFxyXG5cdFx0XHRlLmtleUNvZGUgPT09IDE4OSB8fFxyXG5cdFx0XHRlLmtleUNvZGUgPT09IDggfHxcclxuXHRcdFx0ZS5rZXlDb2RlID09PSAxMykpIHtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH1cclxuXHR9KTtcclxufVxyXG5mdW5jdGlvbiBudW1iZXJUbyhvYmosIHN0YXJ0LCBlbmQsIGR1cmF0aW9uLCBjdXJyZW5jeSA9IGZhbHNlKXtcclxuXHRjbGVhckludGVydmFsKG9iai50aW1lcik7XHJcblx0dmFyIHJhbmdlID0gZW5kIC0gc3RhcnQ7XHJcblx0dmFyIG1pblRpbWVyID0gNTA7XHJcblx0dmFyIHN0ZXBUaW1lID0gTWF0aC5hYnMoTWF0aC5mbG9vcihkdXJhdGlvbiAvIHJhbmdlKSk7XHJcblx0c3RlcFRpbWUgPSBNYXRoLm1heChzdGVwVGltZSwgbWluVGltZXIpO1xyXG5cdHZhciBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuXHR2YXIgZW5kVGltZSA9IHN0YXJ0VGltZSArIGR1cmF0aW9uO1xyXG5cclxuXHRvYmoudGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0aWYgKCEhb2JqLm5vZGUpIHtcclxuXHRcdFx0dmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cdFx0XHR2YXIgcmVtYWluaW5nID0gTWF0aC5tYXgoKGVuZFRpbWUgLSBub3cpIC8gZHVyYXRpb24sIDApO1xyXG5cdFx0XHR2YXIgdmFsdWUgPSAoZW5kIC0gKHJlbWFpbmluZyAqIHJhbmdlKSk+PjA7XHJcblx0XHRcdG9iai5zdHJpbmcgPSBjdXJyZW5jeSA/IG51bWJlcldpdGhDb21tYXModmFsdWUpIDogdmFsdWU7XHJcblx0XHRcdGlmICh2YWx1ZSA9PSBlbmQpIHtcclxuXHRcdFx0XHRjbGVhckludGVydmFsKG9iai50aW1lcik7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNlIGNsZWFySW50ZXJ2YWwob2JqLnRpbWVyKTtcclxuXHR9LCBzdGVwVGltZSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U3RyaW5nRGF0ZUJ5VGltZSh0KSB7XHJcblx0dmFyIGUgPSBuZXcgRGF0ZSh0KVxyXG5cdCAgLCBpID0gZS5nZXRIb3VycygpXHJcblx0ICAsIG8gPSBlLmdldE1pbnV0ZXMoKVxyXG5cdCAgLCBuID0gZS5nZXREYXRlKClcclxuXHQgICwgcyA9IGUuZ2V0TW9udGgoKSArIDE7XHJcblx0cmV0dXJuIGkgPCAxMCAmJiAoaSA9IFwiMFwiICsgaSksXHJcblx0byA8IDEwICYmIChvID0gXCIwXCIgKyBvKSxcclxuXHRuIDwgMTAgJiYgKG4gPSBcIjBcIiArIG4pLFxyXG5cdHMgPCAxMCAmJiAocyA9IFwiMFwiICsgcyksXHJcblx0aSArIFwiOlwiICsgbyArIFwiIFwiICsgbiArIFwiL1wiICsgcyArIFwiL1wiICsgZS5nZXRGdWxsWWVhcigpXHJcbn1cclxuZnVuY3Rpb24gZ2V0RGF0ZUJ5VGltZSh0KSB7XHJcblx0dmFyIGUgPSBuZXcgRGF0ZSh0KTtcclxuXHRyZXR1cm4gZS5nZXREYXRlKCkgKyBcIi9cIiArIChlLmdldE1vbnRoKCkgKyAxKSArIFwiL1wiICsgZS5nZXRGdWxsWWVhcigpXHJcbn1cclxuZnVuY3Rpb24gZ2V0U3RyaW5nSG91ckJ5VGltZSh0KSB7XHJcblx0dmFyIGUgPSBuZXcgRGF0ZSh0KVxyXG5cdCAgLCBpID0gZS5nZXRIb3VycygpXHJcblx0ICAsIG8gPSBlLmdldE1pbnV0ZXMoKVxyXG5cdCAgLCBuID0gZS5nZXRTZWNvbmRzKCk7XHJcblx0cmV0dXJuIGkgPCAxMCAmJiAoaSA9IFwiMFwiICsgaSksXHJcblx0byA8IDEwICYmIChvID0gXCIwXCIgKyBvKSxcclxuXHRuIDwgMTAgJiYgKG4gPSBcIjBcIiArIG4pLFxyXG5cdGkgKyBcIjpcIiArIG8gKyBcIjpcIiArIG5cclxufVxyXG5cclxuZnVuY3Rpb24gYW5QaGFuVHJhbShiZXQsIHNvX25oYW4sIHRpX2xlLCB0eXBlID0gZmFsc2Upe1xyXG5cdC8vIHNvX25oYW46IHPhu5EgbmjDom5cclxuXHQvLyB0aV9sZTogdOG7iSBs4buHIHRodeG6v1xyXG5cdC8vIHR5cGU6IFRodeG6vyB04buVbmcsIHRodeG6vyBn4buRY1xyXG5cdHZhciB2ViA9IGJldCpzb19uaGFuO1xyXG5cdHZhciB2VCA9ICEhdHlwZSA/IHYxIDogYmV0O1xyXG5cdHJldHVybiB2Vi1NYXRoLmNlaWwodlQqdGlfbGUvMTAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkWmVybzEwKGkpIHtcclxuXHRpZiAoaSA8IDEwKSB7XHJcblx0XHRpID0gXCIwXCIgKyBpO1xyXG5cdH1cclxuXHRyZXR1cm4gaTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcblx0Y2hlY2tQaG9uZVZhbGlkOiAgICAgICBjaGVja1Bob25lVmFsaWQsXHJcblx0bkZvcm1hdHRlcjogICAgICAgICAgICBuRm9ybWF0dGVyLFxyXG5cdG51bWJlcldpdGhDb21tYXM6ICAgICAgbnVtYmVyV2l0aENvbW1hcyxcclxuXHRpc0VtcHR5OiAgICAgICAgICAgICAgIGlzRW1wdHksXHJcblx0Z2V0T25seU51bWJlckluU3RyaW5nOiBnZXRPbmx5TnVtYmVySW5TdHJpbmcsXHJcblx0bnVtYmVyUGFkOiAgICAgICAgICAgICBudW1iZXJQYWQsXHJcblx0aW5wdXROdW1iZXI6ICAgICAgICAgICBpbnB1dE51bWJlcixcclxuXHRhblBoYW5UcmFtOiAgICAgICAgICAgIGFuUGhhblRyYW0sXHJcblx0bnVtYmVyVG86ICAgICAgICAgICAgICBudW1iZXJUbyxcclxuXHRnZXRTdHJpbmdEYXRlQnlUaW1lOiAgIGdldFN0cmluZ0RhdGVCeVRpbWUsXHJcblx0Z2V0U3RyaW5nSG91ckJ5VGltZTogICBnZXRTdHJpbmdIb3VyQnlUaW1lLFxyXG5cdG51bWJlclRvVGltZTogICAgICAgICAgbnVtYmVyVG9UaW1lLFxyXG5cdHZhbGlkYXRlRW1haWw6ICAgICAgICAgdmFsaWRhdGVFbWFpbCxcclxuXHRhZGRaZXJvMTA6ICAgICAgICAgICAgIGFkZFplcm8xMCxcclxufVxyXG4iXX0=