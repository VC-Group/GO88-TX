
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/XoSo/MienBac/Lo/Model/MienBac_lo4so.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '85972+toCZJjYJwO7NbxkcA', 'MienBac_lo4so');
// Script/Game/XoSo/MienBac/Lo/Model/MienBac_lo4so.js

'use strict';

var helper = require('Helper');
var BrowserUtil = require('BrowserUtil');

cc.Class({
	extends: cc.Component,

	properties: {
		inputSo: cc.EditBox,
		soCuoc: cc.Label,
		soDiem: cc.Label,
		tongTien: cc.Label,
		inputSoDiem: cc.EditBox,
		max: 10,
		countSelect: 0,
		giaDiem: 22000,
		diemToiDa: 1000000,
		game: ''
	},
	onEnable: function onEnable() {
		if (cc.sys.isBrowser) {
			BrowserUtil.inputAddEvent(this.inputSoDiem, 'input', this.onUpdateDiem.bind(this));
		}
	},
	onDisable: function onDisable() {
		if (cc.sys.isBrowser) {
			BrowserUtil.inputRemoveEvent(this.inputSoDiem, 'input', this.onUpdateDiem.bind(this));
		}
	},
	onClickChon: function onClickChon() {
		var str = this.inputSo.string;
		if (str.length > 4) {
			var arr = [];
			var arrC = str.split(' ');
			arrC.forEach(function (obj) {
				var arrC2 = obj.split(',');
				arrC2.forEach(function (obj2) {
					var arrC3 = obj2.split('.');
					arrC3.forEach(function (obj3) {
						var arrC4 = obj3.split(';');
						arrC4.forEach(function (obj4) {
							var arrC5 = obj4.split(':');
							arr = arr.concat(arrC5);
						});
					});
				});
			});
			arr.forEach(function (obj, i) {
				arr[i] = obj.trim();
			});
			arr = arr.filter(function (obj) {
				if (obj.length === 4) {
					obj = helper.getOnlyNumberInString(obj);
					if (obj.length === 4) {
						return true;
					}
				}
				return false;
			});
			var check = {};
			arr.forEach(function (datac) {
				if (void 0 === check[datac]) {
					check[datac] = datac;
				}
			});
			arr = Object.values(check);
			if (arr.length > 0) {
				if (arr.length > this.max) {
					cc.RedT.inGame.addNotice('1 Vé cược tối đa ' + this.max + ' số chọn...');
				} else {
					this.countSelect = arr.length;
					this.soCuoc.string = arr.join(', ');
					this.updateTien();
				}
			} else {
				this.countSelect = 0;
				cc.RedT.inGame.addNotice('Số chọn không hợp lệ.');
			}
		} else {
			str = helper.getOnlyNumberInString(str);
			if (str.length === 4) {
				this.countSelect = 1;
				this.soCuoc.string = str;
				this.updateTien();
			} else {
				this.countSelect = 0;
				cc.RedT.inGame.addNotice('Số chọn không hợp lệ.');
			}
		}
	},
	onChangerDiem: function onChangerDiem() {
		var value = helper.numberWithCommas(helper.getOnlyNumberInString(this.inputSoDiem.string));
		this.inputSoDiem.string = value == '0' ? '' : value;
	},
	onUpdateDiem: function onUpdateDiem(e) {
		var value = helper.numberWithCommas(helper.getOnlyNumberInString(e.target.value));
		value = value === '0' ? '' : value;
		var valueNumb = helper.getOnlyNumberInString(value) * 1;
		if (valueNumb > this.diemToiDa) {
			value = helper.numberWithCommas(this.diemToiDa);
			cc.RedT.inGame.addNotice('Tối đa ' + value + ' điểm cho mỗi Vé.');
		}
		e.target.value = value;
		this.soDiem.string = !!value ? value : '0';
		this.inputSoDiem.string = value;
		this.updateTien();
	},
	updateTien: function updateTien() {
		var diem = helper.getOnlyNumberInString(this.soDiem.string) * 1;
		this.tongTien.string = helper.numberWithCommas(diem * this.giaDiem * this.countSelect);
	},
	onClickHuy: function onClickHuy() {
		this.soCuoc.string = '';
		this.soDiem.string = '0';
		this.tongTien.string = '0';
		this.inputSoDiem.string = '';
		this.countSelect = 0;
	},
	onClickCuoc: function onClickCuoc() {
		if (helper.isEmpty(this.soCuoc.string)) {
			cc.RedT.inGame.addNotice('Vui lòng chọn số muốn cược..');
		} else if (this.soDiem.string === '0') {
			cc.RedT.inGame.addNotice('Vui lòng nhập điểm cược..');
		} else {
			var data = {};
			data[this.game] = { so: this.soCuoc.string, diem: helper.getOnlyNumberInString(this.soDiem.string) };
			cc.RedT.send({ g: { xs: { mb: data } } });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxHYW1lXFxYb1NvXFxNaWVuQmFjXFxMb1xcTW9kZWwvLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXEdhbWVcXFhvU29cXE1pZW5CYWNcXExvXFxNb2RlbC9hc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcTG9cXE1vZGVsXFxNaWVuQmFjX2xvNHNvLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJCcm93c2VyVXRpbCIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImlucHV0U28iLCJFZGl0Qm94Iiwic29DdW9jIiwiTGFiZWwiLCJzb0RpZW0iLCJ0b25nVGllbiIsImlucHV0U29EaWVtIiwibWF4IiwiY291bnRTZWxlY3QiLCJnaWFEaWVtIiwiZGllbVRvaURhIiwiZ2FtZSIsIm9uRW5hYmxlIiwic3lzIiwiaXNCcm93c2VyIiwiaW5wdXRBZGRFdmVudCIsIm9uVXBkYXRlRGllbSIsImJpbmQiLCJvbkRpc2FibGUiLCJpbnB1dFJlbW92ZUV2ZW50Iiwib25DbGlja0Nob24iLCJzdHIiLCJzdHJpbmciLCJsZW5ndGgiLCJhcnIiLCJhcnJDIiwic3BsaXQiLCJmb3JFYWNoIiwib2JqIiwiYXJyQzIiLCJvYmoyIiwiYXJyQzMiLCJvYmozIiwiYXJyQzQiLCJvYmo0IiwiYXJyQzUiLCJjb25jYXQiLCJpIiwidHJpbSIsImZpbHRlciIsImdldE9ubHlOdW1iZXJJblN0cmluZyIsImNoZWNrIiwiZGF0YWMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJSZWRUIiwiaW5HYW1lIiwiYWRkTm90aWNlIiwiam9pbiIsInVwZGF0ZVRpZW4iLCJvbkNoYW5nZXJEaWVtIiwidmFsdWUiLCJudW1iZXJXaXRoQ29tbWFzIiwiZSIsInRhcmdldCIsInZhbHVlTnVtYiIsImRpZW0iLCJvbkNsaWNrSHV5Iiwib25DbGlja0N1b2MiLCJpc0VtcHR5IiwiZGF0YSIsInNvIiwic2VuZCIsImciLCJ4cyIsIm1iIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBSUMsY0FBY0QsUUFBUSxhQUFSLENBQWxCOztBQUVBRSxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYQyxXQUFhTCxHQUFHTSxPQURMO0FBRVhDLFVBQWFQLEdBQUdRLEtBRkw7QUFHWEMsVUFBYVQsR0FBR1EsS0FITDtBQUlYRSxZQUFhVixHQUFHUSxLQUpMO0FBS1hHLGVBQWFYLEdBQUdNLE9BTEw7QUFNWE0sT0FBYSxFQU5GO0FBT1hDLGVBQWEsQ0FQRjtBQVFYQyxXQUFhLEtBUkY7QUFTWEMsYUFBYSxPQVRGO0FBVVhDLFFBQWE7QUFWRixFQUhKO0FBZVJDLFdBQVUsb0JBQVk7QUFDckIsTUFBSWpCLEdBQUdrQixHQUFILENBQU9DLFNBQVgsRUFBc0I7QUFDckJwQixlQUFZcUIsYUFBWixDQUEwQixLQUFLVCxXQUEvQixFQUE0QyxPQUE1QyxFQUFxRCxLQUFLVSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyRDtBQUNBO0FBQ0QsRUFuQk87QUFvQlJDLFlBQVcscUJBQVk7QUFDdEIsTUFBSXZCLEdBQUdrQixHQUFILENBQU9DLFNBQVgsRUFBc0I7QUFDckJwQixlQUFZeUIsZ0JBQVosQ0FBNkIsS0FBS2IsV0FBbEMsRUFBK0MsT0FBL0MsRUFBd0QsS0FBS1UsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBeEQ7QUFDQTtBQUNELEVBeEJPO0FBeUJSRyxjQUFhLHVCQUFVO0FBQ3RCLE1BQUlDLE1BQU0sS0FBS3JCLE9BQUwsQ0FBYXNCLE1BQXZCO0FBQ0EsTUFBSUQsSUFBSUUsTUFBSixHQUFhLENBQWpCLEVBQW9CO0FBQ25CLE9BQUlDLE1BQU0sRUFBVjtBQUNBLE9BQUlDLE9BQU9KLElBQUlLLEtBQUosQ0FBVSxHQUFWLENBQVg7QUFDQUQsUUFBS0UsT0FBTCxDQUFhLFVBQVNDLEdBQVQsRUFBYTtBQUN6QixRQUFJQyxRQUFRRCxJQUFJRixLQUFKLENBQVUsR0FBVixDQUFaO0FBQ0FHLFVBQU1GLE9BQU4sQ0FBYyxVQUFTRyxJQUFULEVBQWM7QUFDM0IsU0FBSUMsUUFBUUQsS0FBS0osS0FBTCxDQUFXLEdBQVgsQ0FBWjtBQUNBSyxXQUFNSixPQUFOLENBQWMsVUFBU0ssSUFBVCxFQUFjO0FBQzNCLFVBQUlDLFFBQVFELEtBQUtOLEtBQUwsQ0FBVyxHQUFYLENBQVo7QUFDQU8sWUFBTU4sT0FBTixDQUFjLFVBQVNPLElBQVQsRUFBYztBQUMzQixXQUFJQyxRQUFRRCxLQUFLUixLQUFMLENBQVcsR0FBWCxDQUFaO0FBQ0FGLGFBQU1BLElBQUlZLE1BQUosQ0FBV0QsS0FBWCxDQUFOO0FBQ0EsT0FIRDtBQUlBLE1BTkQ7QUFPQSxLQVREO0FBVUEsSUFaRDtBQWFBWCxPQUFJRyxPQUFKLENBQVksVUFBU0MsR0FBVCxFQUFjUyxDQUFkLEVBQWdCO0FBQzNCYixRQUFJYSxDQUFKLElBQVNULElBQUlVLElBQUosRUFBVDtBQUNBLElBRkQ7QUFHQWQsU0FBTUEsSUFBSWUsTUFBSixDQUFXLFVBQVNYLEdBQVQsRUFBYTtBQUM3QixRQUFJQSxJQUFJTCxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDckJLLFdBQU1wQyxPQUFPZ0QscUJBQVAsQ0FBNkJaLEdBQTdCLENBQU47QUFDQSxTQUFJQSxJQUFJTCxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDckIsYUFBTyxJQUFQO0FBQ0E7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNBLElBUkssQ0FBTjtBQVNBLE9BQUlrQixRQUFRLEVBQVo7QUFDQWpCLE9BQUlHLE9BQUosQ0FBWSxVQUFTZSxLQUFULEVBQWU7QUFDMUIsUUFBSSxLQUFLLENBQUwsS0FBV0QsTUFBTUMsS0FBTixDQUFmLEVBQTZCO0FBQzVCRCxXQUFNQyxLQUFOLElBQWVBLEtBQWY7QUFDQTtBQUNELElBSkQ7QUFLQWxCLFNBQU1tQixPQUFPQyxNQUFQLENBQWNILEtBQWQsQ0FBTjtBQUNBLE9BQUdqQixJQUFJRCxNQUFKLEdBQWEsQ0FBaEIsRUFBa0I7QUFDakIsUUFBSUMsSUFBSUQsTUFBSixHQUFhLEtBQUtoQixHQUF0QixFQUEyQjtBQUMxQlosUUFBR2tELElBQUgsQ0FBUUMsTUFBUixDQUFlQyxTQUFmLENBQXlCLHNCQUFzQixLQUFLeEMsR0FBM0IsR0FBaUMsYUFBMUQ7QUFDQSxLQUZELE1BRUs7QUFDSixVQUFLQyxXQUFMLEdBQW1CZ0IsSUFBSUQsTUFBdkI7QUFDQSxVQUFLckIsTUFBTCxDQUFZb0IsTUFBWixHQUFxQkUsSUFBSXdCLElBQUosQ0FBUyxJQUFULENBQXJCO0FBQ0EsVUFBS0MsVUFBTDtBQUNBO0FBQ0QsSUFSRCxNQVFLO0FBQ0osU0FBS3pDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQWIsT0FBR2tELElBQUgsQ0FBUUMsTUFBUixDQUFlQyxTQUFmLENBQXlCLHVCQUF6QjtBQUNBO0FBQ0QsR0EvQ0QsTUErQ0s7QUFDSjFCLFNBQU03QixPQUFPZ0QscUJBQVAsQ0FBNkJuQixHQUE3QixDQUFOO0FBQ0EsT0FBSUEsSUFBSUUsTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3JCLFNBQUtmLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxTQUFLTixNQUFMLENBQVlvQixNQUFaLEdBQXFCRCxHQUFyQjtBQUNBLFNBQUs0QixVQUFMO0FBQ0EsSUFKRCxNQUlLO0FBQ0osU0FBS3pDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQWIsT0FBR2tELElBQUgsQ0FBUUMsTUFBUixDQUFlQyxTQUFmLENBQXlCLHVCQUF6QjtBQUNBO0FBQ0Q7QUFDRCxFQXJGTztBQXNGUkcsZ0JBQWUseUJBQVU7QUFDeEIsTUFBSUMsUUFBUTNELE9BQU80RCxnQkFBUCxDQUF3QjVELE9BQU9nRCxxQkFBUCxDQUE2QixLQUFLbEMsV0FBTCxDQUFpQmdCLE1BQTlDLENBQXhCLENBQVo7QUFDQSxPQUFLaEIsV0FBTCxDQUFpQmdCLE1BQWpCLEdBQTBCNkIsU0FBUyxHQUFULEdBQWUsRUFBZixHQUFvQkEsS0FBOUM7QUFDQSxFQXpGTztBQTBGUm5DLGVBQWMsc0JBQVNxQyxDQUFULEVBQVc7QUFDeEIsTUFBSUYsUUFBUTNELE9BQU80RCxnQkFBUCxDQUF3QjVELE9BQU9nRCxxQkFBUCxDQUE2QmEsRUFBRUMsTUFBRixDQUFTSCxLQUF0QyxDQUF4QixDQUFaO0FBQ0FBLFVBQVFBLFVBQVUsR0FBVixHQUFnQixFQUFoQixHQUFxQkEsS0FBN0I7QUFDQSxNQUFJSSxZQUFZL0QsT0FBT2dELHFCQUFQLENBQTZCVyxLQUE3QixJQUFvQyxDQUFwRDtBQUNBLE1BQUlJLFlBQVksS0FBSzdDLFNBQXJCLEVBQWdDO0FBQy9CeUMsV0FBUTNELE9BQU80RCxnQkFBUCxDQUF3QixLQUFLMUMsU0FBN0IsQ0FBUjtBQUNBZixNQUFHa0QsSUFBSCxDQUFRQyxNQUFSLENBQWVDLFNBQWYsQ0FBeUIsWUFBWUksS0FBWixHQUFvQixtQkFBN0M7QUFDQTtBQUNERSxJQUFFQyxNQUFGLENBQVNILEtBQVQsR0FBaUJBLEtBQWpCO0FBQ0EsT0FBSy9DLE1BQUwsQ0FBWWtCLE1BQVosR0FBcUIsQ0FBQyxDQUFDNkIsS0FBRixHQUFVQSxLQUFWLEdBQWtCLEdBQXZDO0FBQ0EsT0FBSzdDLFdBQUwsQ0FBaUJnQixNQUFqQixHQUEwQjZCLEtBQTFCO0FBQ0EsT0FBS0YsVUFBTDtBQUNBLEVBdEdPO0FBdUdSQSxhQUFZLHNCQUFVO0FBQ3JCLE1BQUlPLE9BQU9oRSxPQUFPZ0QscUJBQVAsQ0FBNkIsS0FBS3BDLE1BQUwsQ0FBWWtCLE1BQXpDLElBQWlELENBQTVEO0FBQ0EsT0FBS2pCLFFBQUwsQ0FBY2lCLE1BQWQsR0FBdUI5QixPQUFPNEQsZ0JBQVAsQ0FBd0JJLE9BQUssS0FBSy9DLE9BQVYsR0FBa0IsS0FBS0QsV0FBL0MsQ0FBdkI7QUFDQSxFQTFHTztBQTJHUmlELGFBQVksc0JBQVU7QUFDckIsT0FBS3ZELE1BQUwsQ0FBWW9CLE1BQVosR0FBMEIsRUFBMUI7QUFDQSxPQUFLbEIsTUFBTCxDQUFZa0IsTUFBWixHQUEwQixHQUExQjtBQUNBLE9BQUtqQixRQUFMLENBQWNpQixNQUFkLEdBQTBCLEdBQTFCO0FBQ0EsT0FBS2hCLFdBQUwsQ0FBaUJnQixNQUFqQixHQUEwQixFQUExQjtBQUNBLE9BQUtkLFdBQUwsR0FBMEIsQ0FBMUI7QUFDQSxFQWpITztBQWtIUmtELGNBQWEsdUJBQVU7QUFDdEIsTUFBR2xFLE9BQU9tRSxPQUFQLENBQWUsS0FBS3pELE1BQUwsQ0FBWW9CLE1BQTNCLENBQUgsRUFBdUM7QUFDdEMzQixNQUFHa0QsSUFBSCxDQUFRQyxNQUFSLENBQWVDLFNBQWYsQ0FBeUIsOEJBQXpCO0FBQ0EsR0FGRCxNQUVPLElBQUcsS0FBSzNDLE1BQUwsQ0FBWWtCLE1BQVosS0FBdUIsR0FBMUIsRUFBOEI7QUFDcEMzQixNQUFHa0QsSUFBSCxDQUFRQyxNQUFSLENBQWVDLFNBQWYsQ0FBeUIsMkJBQXpCO0FBQ0EsR0FGTSxNQUVBO0FBQ04sT0FBSWEsT0FBTyxFQUFYO0FBQ0FBLFFBQUssS0FBS2pELElBQVYsSUFBa0IsRUFBQ2tELElBQUcsS0FBSzNELE1BQUwsQ0FBWW9CLE1BQWhCLEVBQXdCa0MsTUFBS2hFLE9BQU9nRCxxQkFBUCxDQUE2QixLQUFLcEMsTUFBTCxDQUFZa0IsTUFBekMsQ0FBN0IsRUFBbEI7QUFDQTNCLE1BQUdrRCxJQUFILENBQVFpQixJQUFSLENBQWEsRUFBQ0MsR0FBRSxFQUFDQyxJQUFHLEVBQUNDLElBQUdMLElBQUosRUFBSixFQUFILEVBQWI7QUFDQTtBQUNEO0FBNUhPLENBQVQiLCJmaWxlIjoiTWllbkJhY19sbzRzby5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdFxcR2FtZVxcWG9Tb1xcTWllbkJhY1xcTG9cXE1vZGVsIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBoZWxwZXIgPSByZXF1aXJlKCdIZWxwZXInKTtcclxudmFyIEJyb3dzZXJVdGlsID0gcmVxdWlyZSgnQnJvd3NlclV0aWwnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdGlucHV0U286ICAgICBjYy5FZGl0Qm94LFxyXG5cdFx0c29DdW9jOiAgICAgIGNjLkxhYmVsLFxyXG5cdFx0c29EaWVtOiAgICAgIGNjLkxhYmVsLFxyXG5cdFx0dG9uZ1RpZW46ICAgIGNjLkxhYmVsLFxyXG5cdFx0aW5wdXRTb0RpZW06IGNjLkVkaXRCb3gsXHJcblx0XHRtYXg6ICAgICAgICAgMTAsXHJcblx0XHRjb3VudFNlbGVjdDogMCxcclxuXHRcdGdpYURpZW06ICAgICAyMjAwMCxcclxuXHRcdGRpZW1Ub2lEYTogICAxMDAwMDAwLFxyXG5cdFx0Z2FtZTogICAgICAgICcnLFxyXG5cdH0sXHJcblx0b25FbmFibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XHJcblx0XHRcdEJyb3dzZXJVdGlsLmlucHV0QWRkRXZlbnQodGhpcy5pbnB1dFNvRGllbSwgJ2lucHV0JywgdGhpcy5vblVwZGF0ZURpZW0uYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkRpc2FibGU6IGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmIChjYy5zeXMuaXNCcm93c2VyKSB7XHJcblx0XHRcdEJyb3dzZXJVdGlsLmlucHV0UmVtb3ZlRXZlbnQodGhpcy5pbnB1dFNvRGllbSwgJ2lucHV0JywgdGhpcy5vblVwZGF0ZURpZW0uYmluZCh0aGlzKSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkNsaWNrQ2hvbjogZnVuY3Rpb24oKXtcclxuXHRcdGxldCBzdHIgPSB0aGlzLmlucHV0U28uc3RyaW5nO1xyXG5cdFx0aWYgKHN0ci5sZW5ndGggPiA0KSB7XHJcblx0XHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdFx0bGV0IGFyckMgPSBzdHIuc3BsaXQoJyAnKTtcclxuXHRcdFx0YXJyQy5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdFx0bGV0IGFyckMyID0gb2JqLnNwbGl0KCcsJyk7XHJcblx0XHRcdFx0YXJyQzIuZm9yRWFjaChmdW5jdGlvbihvYmoyKXtcclxuXHRcdFx0XHRcdGxldCBhcnJDMyA9IG9iajIuc3BsaXQoJy4nKTtcclxuXHRcdFx0XHRcdGFyckMzLmZvckVhY2goZnVuY3Rpb24ob2JqMyl7XHJcblx0XHRcdFx0XHRcdGxldCBhcnJDNCA9IG9iajMuc3BsaXQoJzsnKTtcclxuXHRcdFx0XHRcdFx0YXJyQzQuZm9yRWFjaChmdW5jdGlvbihvYmo0KXtcclxuXHRcdFx0XHRcdFx0XHRsZXQgYXJyQzUgPSBvYmo0LnNwbGl0KCc6Jyk7XHJcblx0XHRcdFx0XHRcdFx0YXJyID0gYXJyLmNvbmNhdChhcnJDNSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRhcnIuZm9yRWFjaChmdW5jdGlvbihvYmosIGkpe1xyXG5cdFx0XHRcdGFycltpXSA9IG9iai50cmltKCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRhcnIgPSBhcnIuZmlsdGVyKGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdFx0aWYgKG9iai5sZW5ndGggPT09IDQpIHtcclxuXHRcdFx0XHRcdG9iaiA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcob2JqKTtcclxuXHRcdFx0XHRcdGlmIChvYmoubGVuZ3RoID09PSA0KSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRsZXQgY2hlY2sgPSB7fTtcclxuXHRcdFx0YXJyLmZvckVhY2goZnVuY3Rpb24oZGF0YWMpe1xyXG5cdFx0XHRcdGlmICh2b2lkIDAgPT09IGNoZWNrW2RhdGFjXSkge1xyXG5cdFx0XHRcdFx0Y2hlY2tbZGF0YWNdID0gZGF0YWM7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0YXJyID0gT2JqZWN0LnZhbHVlcyhjaGVjayk7XHJcblx0XHRcdGlmKGFyci5sZW5ndGggPiAwKXtcclxuXHRcdFx0XHRpZiAoYXJyLmxlbmd0aCA+IHRoaXMubWF4KSB7XHJcblx0XHRcdFx0XHRjYy5SZWRULmluR2FtZS5hZGROb3RpY2UoJzEgVsOpIGPGsOG7o2MgdOG7kWkgxJFhICcgKyB0aGlzLm1heCArICcgc+G7kSBjaOG7jW4uLi4nKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuY291bnRTZWxlY3QgPSBhcnIubGVuZ3RoO1xyXG5cdFx0XHRcdFx0dGhpcy5zb0N1b2Muc3RyaW5nID0gYXJyLmpvaW4oJywgJyk7XHJcblx0XHRcdFx0XHR0aGlzLnVwZGF0ZVRpZW4oKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdHRoaXMuY291bnRTZWxlY3QgPSAwO1xyXG5cdFx0XHRcdGNjLlJlZFQuaW5HYW1lLmFkZE5vdGljZSgnU+G7kSBjaOG7jW4ga2jDtG5nIGjhu6NwIGzhu4cuJyk7XHJcblx0XHRcdH1cclxuXHRcdH1lbHNle1xyXG5cdFx0XHRzdHIgPSBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHN0cik7XHJcblx0XHRcdGlmIChzdHIubGVuZ3RoID09PSA0KSB7XHJcblx0XHRcdFx0dGhpcy5jb3VudFNlbGVjdCA9IDE7XHJcblx0XHRcdFx0dGhpcy5zb0N1b2Muc3RyaW5nID0gc3RyO1xyXG5cdFx0XHRcdHRoaXMudXBkYXRlVGllbigpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLmNvdW50U2VsZWN0ID0gMDtcclxuXHRcdFx0XHRjYy5SZWRULmluR2FtZS5hZGROb3RpY2UoJ1Phu5EgY2jhu41uIGtow7RuZyBo4bujcCBs4buHLicpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSxcclxuXHRvbkNoYW5nZXJEaWVtOiBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHZhbHVlID0gaGVscGVyLm51bWJlcldpdGhDb21tYXMoaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmlucHV0U29EaWVtLnN0cmluZykpO1xyXG5cdFx0dGhpcy5pbnB1dFNvRGllbS5zdHJpbmcgPSB2YWx1ZSA9PSAnMCcgPyAnJyA6IHZhbHVlO1xyXG5cdH0sXHJcblx0b25VcGRhdGVEaWVtOiBmdW5jdGlvbihlKXtcclxuXHRcdGxldCB2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcoZS50YXJnZXQudmFsdWUpKTtcclxuXHRcdHZhbHVlID0gdmFsdWUgPT09ICcwJyA/ICcnIDogdmFsdWU7XHJcblx0XHRsZXQgdmFsdWVOdW1iID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh2YWx1ZSkqMTtcclxuXHRcdGlmICh2YWx1ZU51bWIgPiB0aGlzLmRpZW1Ub2lEYSkge1xyXG5cdFx0XHR2YWx1ZSA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZGllbVRvaURhKTtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUuYWRkTm90aWNlKCdU4buRaSDEkWEgJyArIHZhbHVlICsgJyDEkWnhu4NtIGNobyBt4buXaSBWw6kuJyk7XHJcblx0XHR9XHJcblx0XHRlLnRhcmdldC52YWx1ZSA9IHZhbHVlO1xyXG5cdFx0dGhpcy5zb0RpZW0uc3RyaW5nID0gISF2YWx1ZSA/IHZhbHVlIDogJzAnO1xyXG5cdFx0dGhpcy5pbnB1dFNvRGllbS5zdHJpbmcgPSB2YWx1ZTtcclxuXHRcdHRoaXMudXBkYXRlVGllbigpO1xyXG5cdH0sXHJcblx0dXBkYXRlVGllbjogZnVuY3Rpb24oKXtcclxuXHRcdGxldCBkaWVtID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLnNvRGllbS5zdHJpbmcpKjE7XHJcblx0XHR0aGlzLnRvbmdUaWVuLnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGRpZW0qdGhpcy5naWFEaWVtKnRoaXMuY291bnRTZWxlY3QpO1xyXG5cdH0sXHJcblx0b25DbGlja0h1eTogZnVuY3Rpb24oKXtcclxuXHRcdHRoaXMuc29DdW9jLnN0cmluZyAgICAgID0gJyc7XHJcblx0XHR0aGlzLnNvRGllbS5zdHJpbmcgICAgICA9ICcwJztcclxuXHRcdHRoaXMudG9uZ1RpZW4uc3RyaW5nICAgID0gJzAnO1xyXG5cdFx0dGhpcy5pbnB1dFNvRGllbS5zdHJpbmcgPSAnJztcclxuXHRcdHRoaXMuY291bnRTZWxlY3QgICAgICAgID0gMDtcclxuXHR9LFxyXG5cdG9uQ2xpY2tDdW9jOiBmdW5jdGlvbigpe1xyXG5cdFx0aWYoaGVscGVyLmlzRW1wdHkodGhpcy5zb0N1b2Muc3RyaW5nKSkge1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5hZGROb3RpY2UoJ1Z1aSBsw7JuZyBjaOG7jW4gc+G7kSBtdeG7kW4gY8aw4bujYy4uJyk7XHJcblx0XHR9IGVsc2UgaWYodGhpcy5zb0RpZW0uc3RyaW5nID09PSAnMCcpe1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZS5hZGROb3RpY2UoJ1Z1aSBsw7JuZyBuaOG6rXAgxJFp4buDbSBjxrDhu6NjLi4nKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBkYXRhID0ge307XHJcblx0XHRcdGRhdGFbdGhpcy5nYW1lXSA9IHtzbzp0aGlzLnNvQ3VvYy5zdHJpbmcsIGRpZW06aGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLnNvRGllbS5zdHJpbmcpfTtcclxuXHRcdFx0Y2MuUmVkVC5zZW5kKHtnOnt4czp7bWI6ZGF0YX19fSk7XHJcblx0XHR9XHJcblx0fSxcclxufSk7XHJcbiJdfQ==