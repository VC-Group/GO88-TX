
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Model/Dialog/Shop/NapRed/NapRed.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41eebjrhpBCuYVy5G92Kdy9', 'NapRed');
// Script/Model/Dialog/Shop/NapRed/NapRed.js

'use strict';

var NapThe = require('NapThe');

cc.Class({
	extends: cc.Component,

	properties: {
		NapThe: NapThe,
		nodeHinhThuc: cc.Node,
		nodeNapThe: cc.Node,
		nodeMoMo: cc.Node,
		nodeBank: cc.Node,
		ChuyenRED: cc.Node,

		momoSTK: cc.Label,
		momoNAME: cc.Label,
		nickname: cc.Label,

		bankSTK: cc.Label,
		bankNAME: cc.Label,
		NganHang: cc.Label,
		NoiDung: cc.Label,

		isLoaded: false
	},
	init: function init() {
		this.NapThe.init();
	},

	onEnable: function onEnable() {
		this.onBackHinhThuc();
		if (!this.isLoaded) {
			cc.RedT.send({ shop: { info_nap: true } });
		}
	},
	onDisable: function onDisable() {
		this.onBackHinhThuc();
	},
	onData: function onData(data) {
		if (void 0 !== data.info && !this.isLoaded) {
			this.isLoaded = true;
			if (void 0 !== data.info.nhamang) {
				this.NapThe.infoSet(data.info.nhamang, 'nhamangList', 'NhanhMang', true);
			}
			if (void 0 !== data.info.menhgia) {
				this.NapThe.infoSet(data.info.menhgia, 'menhgiaList', 'MenhGia');
			}
		}
	},
	onSelecHinhThuc: function onSelecHinhThuc(e) {
		this.nodeHinhThuc.active = false;

		var hinhthuc = e;
		if (hinhthuc == 'Momo') {
			this.nodeNapThe.active = false;
			this.nodeMoMo.active = true;
			this.nodeBank.active = false;
			this.ChuyenRED.active = false;
			cc.RedT.send({ shop: { info_momo: true } });
		} else if (hinhthuc == 'Banking') {
			this.nodeBank.active = true;
			this.nodeNapThe.active = false;
			this.nodeMoMo.active = false;
			this.ChuyenRED.active = false;
			cc.RedT.send({ shop: { info_bank: true } });
		} else if (hinhthuc == 'NapRed') {
			this.nodeNapThe.active = true;
			this.nodeMoMo.active = false;
			this.nodeBank.active = false;
			this.ChuyenRED.active = false;
			var list = this.NapThe.scrollviewNhaMang.content.children.filter(function (obj) {
				var a = obj.getComponent('NapRed_itemOne');
				var text = a.text.string.toLowerCase();
				return hinhthuc == text;
			});
			if (list.length) {
				var objTele = list[0].getComponent('NapRed_itemOne');
				hinhthuc = objTele.text.string;
				this.NapThe.nhamangList.forEach(function (obj) {
					if (obj === objTele) {
						obj.onSelect();
					} else {
						obj.unSelect();
					}
				});
			}
			this.NapThe.NhanhMang.string = hinhthuc;
		} else {
			this.nodeBank.active = false;
			this.nodeNapThe.active = false;
			this.nodeMoMo.active = false;
			this.ChuyenRED.active = true;
		}
	},
	onBackHinhThuc: function onBackHinhThuc(e) {
		this.nodeHinhThuc.active = false;
		this.nodeNapThe.active = true;
		this.nodeMoMo.active = false;
		this.nodeBank.active = false;
	},
	MOMO: function MOMO(_MOMO) {
		if (_MOMO) {
			this.momoSTK.string = _MOMO.phone;
			this.momoNAME.string = _MOMO.name;
			this.nickname.string = _MOMO.syntax;
		}
	},
	BANK: function BANK(_BANK) {
		if (_BANK) {
			this.bankSTK.string = _BANK.bank_number;
			this.bankNAME.string = _BANK.bank_accname;
			this.NganHang.string = _BANK.bank_name;
			this.NoiDung.string = _BANK.syntax;
		}
	},
	onCopyNumber: function onCopyNumber() {
		cc.RedT.CopyToClipboard(this.momoSTK.string);
		cc.RedT.inGame.noticeCopy();
	},
	onCopyName: function onCopyName() {
		cc.RedT.CopyToClipboard(this.nickname.string);
		cc.RedT.inGame.noticeCopy();
	},
	onCopyBankSTK: function onCopyBankSTK() {
		cc.RedT.CopyToClipboard(this.bankSTK.string);
		cc.RedT.inGame.noticeCopy();
	},
	onCopyND: function onCopyND() {
		cc.RedT.CopyToClipboard(this.NoiDung.string);
		cc.RedT.inGame.noticeCopy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXE5hcFJlZC8uLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFzc2V0c1xcU2NyaXB0XFxNb2RlbFxcRGlhbG9nXFxTaG9wXFxOYXBSZWQvYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXE5hcFJlZFxcTmFwUmVkLmpzIl0sIm5hbWVzIjpbIk5hcFRoZSIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiZXh0ZW5kcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJub2RlSGluaFRodWMiLCJOb2RlIiwibm9kZU5hcFRoZSIsIm5vZGVNb01vIiwibm9kZUJhbmsiLCJDaHV5ZW5SRUQiLCJtb21vU1RLIiwiTGFiZWwiLCJtb21vTkFNRSIsIm5pY2tuYW1lIiwiYmFua1NUSyIsImJhbmtOQU1FIiwiTmdhbkhhbmciLCJOb2lEdW5nIiwiaXNMb2FkZWQiLCJpbml0Iiwib25FbmFibGUiLCJvbkJhY2tIaW5oVGh1YyIsIlJlZFQiLCJzZW5kIiwic2hvcCIsImluZm9fbmFwIiwib25EaXNhYmxlIiwib25EYXRhIiwiZGF0YSIsImluZm8iLCJuaGFtYW5nIiwiaW5mb1NldCIsIm1lbmhnaWEiLCJvblNlbGVjSGluaFRodWMiLCJlIiwiYWN0aXZlIiwiaGluaHRodWMiLCJpbmZvX21vbW8iLCJpbmZvX2JhbmsiLCJsaXN0Iiwic2Nyb2xsdmlld05oYU1hbmciLCJjb250ZW50IiwiY2hpbGRyZW4iLCJmaWx0ZXIiLCJvYmoiLCJhIiwiZ2V0Q29tcG9uZW50IiwidGV4dCIsInN0cmluZyIsInRvTG93ZXJDYXNlIiwibGVuZ3RoIiwib2JqVGVsZSIsIm5oYW1hbmdMaXN0IiwiZm9yRWFjaCIsIm9uU2VsZWN0IiwidW5TZWxlY3QiLCJOaGFuaE1hbmciLCJNT01PIiwicGhvbmUiLCJuYW1lIiwic3ludGF4IiwiQkFOSyIsImJhbmtfbnVtYmVyIiwiYmFua19hY2NuYW1lIiwiYmFua19uYW1lIiwib25Db3B5TnVtYmVyIiwiQ29weVRvQ2xpcGJvYXJkIiwiaW5HYW1lIiwibm90aWNlQ29weSIsIm9uQ29weU5hbWUiLCJvbkNvcHlCYW5rU1RLIiwib25Db3B5TkQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBY0MsUUFBUSxRQUFSLENBQWxCOztBQUVBQyxHQUFHQyxLQUFILENBQVM7QUFDUkMsVUFBU0YsR0FBR0csU0FESjs7QUFHUkMsYUFBWTtBQUNYTixVQUFRQSxNQURHO0FBRVhPLGdCQUFjTCxHQUFHTSxJQUZOO0FBR1hDLGNBQVlQLEdBQUdNLElBSEo7QUFJWEUsWUFBVVIsR0FBR00sSUFKRjtBQUtYRyxZQUFVVCxHQUFHTSxJQUxGO0FBTVhJLGFBQVdWLEdBQUdNLElBTkg7O0FBUVhLLFdBQVVYLEdBQUdZLEtBUkY7QUFTWEMsWUFBVWIsR0FBR1ksS0FURjtBQVVYRSxZQUFVZCxHQUFHWSxLQVZGOztBQVlYRyxXQUFVZixHQUFHWSxLQVpGO0FBYVhJLFlBQVVoQixHQUFHWSxLQWJGO0FBY1hLLFlBQVVqQixHQUFHWSxLQWRGO0FBZVhNLFdBQVNsQixHQUFHWSxLQWZEOztBQWlCWE8sWUFBVTtBQWpCQyxFQUhKO0FBc0JSQyxLQXRCUSxrQkFzQkY7QUFDTCxPQUFLdEIsTUFBTCxDQUFZc0IsSUFBWjtBQUNBLEVBeEJPOztBQXlCUkMsV0FBVSxvQkFBWTtBQUNyQixPQUFLQyxjQUFMO0FBQ0EsTUFBSSxDQUFDLEtBQUtILFFBQVYsRUFBb0I7QUFDbkJuQixNQUFHdUIsSUFBSCxDQUFRQyxJQUFSLENBQWEsRUFBQ0MsTUFBSyxFQUFDQyxVQUFTLElBQVYsRUFBTixFQUFiO0FBQ0E7QUFDRCxFQTlCTztBQStCUkMsWUFBVyxxQkFBWTtBQUNoQixPQUFLTCxjQUFMO0FBQ0gsRUFqQ0k7QUFrQ1JNLFNBQVEsZ0JBQVNDLElBQVQsRUFBYztBQUNyQixNQUFJLEtBQUssQ0FBTCxLQUFXQSxLQUFL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QUFVO0FBQ3ZCbEUsS0FBR3VCLElBQUgsQ0FBUTRDLGVBQVIsQ0FBd0IsS0FBS3hELE9BQUwsQ0FBYXNDLE1BQXJDO0FBQ0FqRCxLQUFHdUIsSUFBSCxDQUFRNkMsTUFBUixDQUFlQyxVQUFmO0FBQ0EsRUFwSE87QUFxSFJDLGFBQVksc0JBQVU7QUFDckJ0RSxLQUFHdUIsSUFBSCxDQUFRNEMsZUFBUixDQUF3QixLQUFLckQsUUFBTCxDQUFjbUMsTUFBdEM7QUFDQWpELEtBQUd1QixJQUFILENBQVE2QyxNQUFSLENBQWVDLFVBQWY7QUFDQSxFQXhITztBQXlIUkUsZ0JBQWUseUJBQVU7QUFDeEJ2RSxLQUFHdUIsSUFBSCxDQUFRNEMsZUFBUixDQUF3QixLQUFLcEQsT0FBTCxDQUFha0MsTUFBckM7QUFDQWpELEtBQUd1QixJQUFILENBQVE2QyxNQUFSLENBQWVDLFVBQWY7QUFDQSxFQTVITztBQTZIUkcsV0FBVSxvQkFBVTtBQUNuQnhFLEtBQUd1QixJQUFILENBQVE0QyxlQUFSLENBQXdCLEtBQUtqRCxPQUFMLENBQWErQixNQUFyQztBQUNBakQsS0FBR3VCLElBQUgsQ0FBUTZDLE1BQVIsQ0FBZUMsVUFBZjtBQUNBO0FBaElPLENBQVQiLCJmaWxlIjoiTmFwUmVkLmpzIiwic291cmNlUm9vdCI6Ii4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHRcXE1vZGVsXFxEaWFsb2dcXFNob3BcXE5hcFJlZCIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgTmFwVGhlICAgICAgPSByZXF1aXJlKCdOYXBUaGUnKTtcclxuXHJcbmNjLkNsYXNzKHtcclxuXHRleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdE5hcFRoZTogTmFwVGhlLFxyXG5cdFx0bm9kZUhpbmhUaHVjOiBjYy5Ob2RlLFxyXG5cdFx0bm9kZU5hcFRoZTogY2MuTm9kZSxcclxuXHRcdG5vZGVNb01vOiBjYy5Ob2RlLFxyXG5cdFx0bm9kZUJhbms6IGNjLk5vZGUsXHJcblx0XHRDaHV5ZW5SRUQ6IGNjLk5vZGUsXHJcblxyXG5cdFx0bW9tb1NUSzogIGNjLkxhYmVsLFxyXG5cdFx0bW9tb05BTUU6IGNjLkxhYmVsLFxyXG5cdFx0bmlja25hbWU6IGNjLkxhYmVsLFxyXG5cclxuXHRcdGJhbmtTVEs6ICBjYy5MYWJlbCxcclxuXHRcdGJhbmtOQU1FOiBjYy5MYWJlbCxcclxuXHRcdE5nYW5IYW5nOiBjYy5MYWJlbCxcclxuXHRcdE5vaUR1bmc6IGNjLkxhYmVsLFxyXG5cclxuXHRcdGlzTG9hZGVkOiBmYWxzZSxcclxuXHR9LFxyXG5cdGluaXQoKXtcclxuXHRcdHRoaXMuTmFwVGhlLmluaXQoKTtcclxuXHR9LFxyXG5cdG9uRW5hYmxlOiBmdW5jdGlvbiAoKSB7XHJcblx0XHR0aGlzLm9uQmFja0hpbmhUaHVjKCk7XHJcblx0XHRpZiAoIXRoaXMuaXNMb2FkZWQpIHtcclxuXHRcdFx0Y2MuUmVkVC5zZW5kKHtzaG9wOntpbmZvX25hcDp0cnVlfX0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25EaXNhYmxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5vbkJhY2tIaW5oVGh1YygpO1xyXG4gICAgfSxcclxuXHRvbkRhdGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5pbmZvICYmICF0aGlzLmlzTG9hZGVkKXtcclxuXHRcdFx0dGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGEuaW5mby5uaGFtYW5nKXtcclxuXHRcdFx0XHR0aGlzLk5hcFRoZS5pbmZvU2V0KGRhdGEuaW5mby5uaGFtYW5nLCAnbmhhbWFuZ0xpc3QnLCAnTmhhbmhNYW5nJywgdHJ1ZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5pbmZvLm1lbmhnaWEpe1xyXG5cdFx0XHRcdHRoaXMuTmFwVGhlLmluZm9TZXQoZGF0YS5pbmZvLm1lbmhnaWEsICdtZW5oZ2lhTGlzdCcsICdNZW5oR2lhJyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uU2VsZWNIaW5oVGh1YzogZnVuY3Rpb24oZSl7XHJcblx0XHR0aGlzLm5vZGVIaW5oVGh1Yy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFxyXG5cdFx0bGV0IGhpbmh0aHVjID0gZTtcclxuXHRcdGlmIChoaW5odGh1YyA9PSAnTW9tbycpIHtcclxuXHRcdFx0dGhpcy5ub2RlTmFwVGhlLmFjdGl2ZSA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLm5vZGVNb01vLmFjdGl2ZSAgID0gdHJ1ZTtcclxuXHRcdFx0dGhpcy5ub2RlQmFuay5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5DaHV5ZW5SRUQuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdGNjLlJlZFQuc2VuZCh7c2hvcDp7aW5mb19tb21vOnRydWV9fSk7XHJcblx0XHR9ZWxzZSBpZihoaW5odGh1YyA9PSAnQmFua2luZycpe1xyXG5cdFx0XHR0aGlzLm5vZGVCYW5rLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMubm9kZU5hcFRoZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5ub2RlTW9Nby5hY3RpdmUgICA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLkNodXllblJFRC5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0Y2MuUmVkVC5zZW5kKHtzaG9wOntpbmZvX2Jhbms6dHJ1ZX19KTtcclxuXHRcdH1lbHNlIGlmKGhpbmh0aHVjID09ICdOYXBSZWQnKXtcclxuXHRcdFx0dGhpcy5ub2RlTmFwVGhlLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRcdHRoaXMubm9kZU1vTW8uYWN0aXZlICAgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5ub2RlQmFuay5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5DaHV5ZW5SRUQuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdGxldCBsaXN0ID0gdGhpcy5OYXBUaGUuc2Nyb2xsdmlld05oYU1hbmcuY29udGVudC5jaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24ob2JqKXtcclxuXHRcdFx0XHRsZXQgYSA9IG9iai5nZXRDb21wb25lbnQoJ05hcFJlZF9pdGVtT25lJyk7XHJcblx0XHRcdFx0bGV0IHRleHQgPSBhLnRleHQuc3RyaW5nLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0cmV0dXJuIGhpbmh0aHVjID09IHRleHQ7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAobGlzdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRsZXQgb2JqVGVsZSA9IGxpc3RbMF0uZ2V0Q29tcG9uZW50KCdOYXBSZWRfaXRlbU9uZScpO1xyXG5cdFx0XHRcdGhpbmh0aHVjID0gb2JqVGVsZS50ZXh0LnN0cmluZztcclxuXHRcdFx0XHR0aGlzLk5hcFRoZS5uaGFtYW5nTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKG9iail7XHJcblx0XHQgICAgXHRcdGlmIChvYmogPT09IG9ialRlbGUpIHtcclxuXHRcdCAgICBcdFx0XHRvYmoub25TZWxlY3QoKTtcclxuXHRcdCAgICBcdFx0fWVsc2V7XHJcblx0XHQgICAgXHRcdFx0b2JqLnVuU2VsZWN0KCk7XHJcblx0XHQgICAgXHRcdH1cclxuXHRcdCAgICBcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHQgICAgdGhpcy5OYXBUaGUuTmhhbmhNYW5nLnN0cmluZyA9IGhpbmh0aHVjO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMubm9kZUJhbmsuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdHRoaXMubm9kZU5hcFRoZS5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5ub2RlTW9Nby5hY3RpdmUgICA9IGZhbHNlO1xyXG5cdFx0XHR0aGlzLkNodXllblJFRC5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0b25CYWNrSGluaFRodWM6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0dGhpcy5ub2RlSGluaFRodWMuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm5vZGVOYXBUaGUuYWN0aXZlICAgPSB0cnVlO1xyXG5cdFx0dGhpcy5ub2RlTW9Nby5hY3RpdmUgICAgID0gZmFsc2U7XHJcblx0XHR0aGlzLm5vZGVCYW5rLmFjdGl2ZSAgICAgPSBmYWxzZTtcclxuXHR9LFxyXG5cdE1PTU86IGZ1bmN0aW9uKE1PTU8pe1xyXG5cdFx0aWYoTU9NTyl7XHJcblx0XHRcdHRoaXMubW9tb1NUSy5zdHJpbmcgPSBNT01PLnBob25lO1xyXG5cdFx0XHR0aGlzLm1vbW9OQU1FLnN0cmluZyA9IE1PTU8ubmFtZTtcclxuXHRcdFx0dGhpcy5uaWNrbmFtZS5zdHJpbmcgPSBNT01PLnN5bnRheDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0QkFOSzogZnVuY3Rpb24oQkFOSyl7XHJcblx0XHRpZihCQU5LKXtcclxuXHRcdFx0dGhpcy5iYW5rU1RLLnN0cmluZyA9IEJBTksuYmFua19udW1iZXI7XHJcblx0XHRcdHRoaXMuYmFua05BTUUuc3RyaW5nID0gQkFOSy5iYW5rX2FjY25hbWU7XHJcblx0XHRcdHRoaXMuTmdhbkhhbmcuc3RyaW5nID0gQkFOSy5iYW5rX25hbWU7XHJcblx0XHRcdHRoaXMuTm9pRHVuZy5zdHJpbmcgPSBCQU5LLnN5bnRheDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0b25Db3B5TnVtYmVyOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5Db3B5VG9DbGlwYm9hcmQodGhpcy5tb21vU1RLLnN0cmluZyk7XHJcblx0XHRjYy5SZWRULmluR2FtZS5ub3RpY2VDb3B5KCk7XHJcblx0fSxcclxuXHRvbkNvcHlOYW1lOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5Db3B5VG9DbGlwYm9hcmQodGhpcy5uaWNrbmFtZS5zdHJpbmcpO1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUubm90aWNlQ29weSgpO1xyXG5cdH0sXHJcblx0b25Db3B5QmFua1NUSzogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuQ29weVRvQ2xpcGJvYXJkKHRoaXMuYmFua1NUSy5zdHJpbmcpO1xyXG5cdFx0Y2MuUmVkVC5pbkdhbWUubm90aWNlQ29weSgpO1xyXG5cdH0sXHJcblx0b25Db3B5TkQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULkNvcHlUb0NsaXBib2FyZCh0aGlzLk5vaUR1bmcuc3RyaW5nKTtcclxuXHRcdGNjLlJlZFQuaW5HYW1lLm5vdGljZUNvcHkoKTtcclxuXHR9LFxyXG59KTtcclxuIl19