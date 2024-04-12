
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MainGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '280c3rsZJJKnZ9RqbALVwtK', 'MainGame');
// Script/MainGame.js

'use strict';

var helper = require('Helper');
var baseControll = require('BaseControll');
var header = require('Header'),
    dialog = require('Dialog'),
    ThongBaoNoHu = require('PushNohu'),
    newsContents = require('NewsContents'),
    bgLoading = require('bgLoading'),
    MenuRoom = require('MenuRoom'),
    notice = require('Notice');

cc.Class({
	extends: cc.Component,
	properties: {
		MenuRoom: MenuRoom,
		avatars: {
			default: [],
			type: cc.SpriteFrame
		},
		PrefabT: {
			default: [],
			type: cc.Prefab
		},
		header: header,
		news: cc.Node,
		newsContents: newsContents,
		bgLoading: bgLoading,
		iconVQRed: cc.Node,
		iconVQRedTemp: cc.Node,
		iconCandy: cc.Node,
		iconCandyTemp: cc.Node,
		iconLongLan: cc.Node,
		iconLongLanTemp: cc.Node,
		iconZeus: cc.Node,
		iconZeusTemp: cc.Node,
		iconMegaJ: cc.Node,
		redhat: cc.Node,
		dialog: dialog,
		loading: cc.Node,
		notice: notice,
		ThongBaoNoHu: ThongBaoNoHu,
		wssCacert: {
			type: cc.Asset,
			default: null
		},
		url: '',
		fileAPK: '',
		dataOn: true,
		newsOn: true,
		iconTxtTai: cc.Label,
		iconTxtXiu: cc.Label
	},
	onLoad: function onLoad() {
		this.dialog.init();
		this.newsContents.init(this);
		if (void 0 === cc.RedT) {
			cc.RedT = baseControll;
			cc.RedT.sslPem = this.wssCacert;
			cc.RedT.init();
			cc.RedT.inGame = this;
			cc.RedT.audio = this.PrefabT[0].data.getComponent('MainAudio');
			cc.RedT.audio.bg = cc.RedT.audio.mainBackground;
			cc.RedT.avatars = this.avatars;
			cc.RedT.MiniPanel = cc.instantiate(this.PrefabT[1]);
			cc.RedT.MiniPanel = cc.RedT.MiniPanel.getComponent('MiniPanel');
		} else {
			cc.RedT.inGame = this;
			cc.RedT.audio.bg.pause();

			cc.RedT.audio.bg = cc.RedT.audio.mainBackground;
		}
		cc.RedT.MiniPanel.node.parent = this.redhat;
		cc.RedT.reconnect();
		this.iconCandy = this.iconCandy.getComponent('iconGameHu');
		this.iconVQRed = this.iconVQRed.getComponent('iconGameHu');
		this.iconLongLan = this.iconLongLan.getComponent('iconGameHu');
		this.iconZeus = this.iconZeus.getComponent('iconGameHu');
		this.iconMegaJ = this.iconMegaJ.getComponent('iconGameHu');
		this.iconCandyTemp = this.iconCandyTemp.getComponent('iconGameHu');
		this.iconVQRedTemp = this.iconVQRedTemp.getComponent('iconGameHu');
		this.iconLongLanTemp = this.iconLongLanTemp.getComponent('iconGameHu');
		this.iconZeusTemp = this.iconZeusTemp.getComponent('iconGameHu');
		if (cc.RedT.IS_LOGIN) {
			cc.RedT.send({ scene: 'home' });
			this.header.reset();
			this.header.userName.string = cc.RedT.user.name;
			this.dialog.profile.CaNhan.username.string = cc.RedT.user.name;
			this.header.userRed.string = this.dialog.profile.KetSat.redHT.string = helper.numberWithCommas(cc.RedT.user.red);
			this.dialog.profile.KetSat.redKet.string = helper.numberWithCommas(cc.RedT.user.ketSat);
			this.dialog.profile.CaNhan.UID.string = cc.RedT.user.UID;
			this.dialog.profile.CaNhan.joinedOn.string = helper.getStringDateByTime(cc.RedT.user.joinedOn);
			this.dialog.profile.CaNhan.phone.string = cc.RedT.user.phone;
			this.dialog.profile.BaoMat.DangKyOTP.statusOTP(!helper.isEmpty(cc.RedT.user.phone));
			if (!helper.isEmpty(cc.RedT.user.phone)) {
				this.dialog.profile.BaoMat.DangKyOTP.labelPhone.string = cc.RedT.user.phone;
				if (cc.RedT.user.veryphone) {
					this.dialog.profile.CaNhan.phoneStatus.string = 'Đã Xác Thực';
					this.dialog.profile.CaNhan.phoneStatus.node.color = this.dialog.profile.CaNhan.phoneStatus.node.color.fromHEX('06B30D');
				} else {
					this.dialog.profile.CaNhan.phoneStatus.string = 'Chưa Xác Thực';
					this.dialog.profile.CaNhan.phoneStatus.node.color = this.dialog.profile.CaNhan.phoneStatus.node.color.fromHEX('FF0000');
				}
			} else {
				this.dialog.profile.CaNhan.phoneStatus.string = '';
			}
			this.setAvatar(cc.RedT.user.avatar);
		} else {
			this.dialog.settings.setMusic();
		}

		var check = localStorage.getItem('SOUND_BACKGROUND');
		if (check == null || cc.RedT.isSoundBackground()) {
			cc.RedT.setSoundBackground(true);

			//	cc.RedT.audio.current = cc.audioEngine.play(cc.RedT.audio.bg.clip, true, 1);
			cc.RedT.audio.bg.play();
			var t = setInterval(function () {
				console.log(cc.RedT.audio.bg.clip.loaded);
				if (cc.RedT.audio.bg.clip.loaded) {
					clearInterval(t);
					cc.RedT.audio.bg.play();
				}
			}.bind(this), 100);
		}

		if (cc.sys.isBrowser) {
			history.pushState(null, null, location.href);
			window.onpopstate = function () {
				history.go(1);
			};
		}
	},
	start: function start() {
		if (cc.RedT.IS_LOGIN == false) {
			var remember_me = localStorage.getItem("remember_me");
			if (remember_me && remember_me == "true") {
				setTimeout(function () {
					var checkT = localStorage.getItem('TH'); // UID
					var checkH = localStorage.getItem('HT'); // token
					if (!!checkT && !!checkH) {
						var t = setInterval(function () {

							if (cc.RedT._socket != null && cc.RedT._socket.readyState == 1) {
								clearInterval(t);
								this.autoAuth({ authentication: { id: checkT, token: checkH } });
								t = null;
							}
						}.bind(this), 50);
					}
				}.bind(this), 300);
			}
		}
	},
	autoAuth: function autoAuth(obj) {
		this.loading.active = true;
		if (cc.RedT._socket == null || cc.RedT._socket.readyState != 1) {
			setTimeout(function () {
				cc.RedT.send(obj);
			}, 300);
		} else {
			cc.RedT.send(obj);
		}
	},
	resetAuth: function resetAuth() {
		localStorage.removeItem('TH');
		localStorage.removeItem('HT');
	},
	auth: function auth(obj) {
		this.loading.active = true;
		if (cc.RedT._socket == null || cc.RedT._socket.readyState != 1) {
			setTimeout(function () {
				cc.RedT.send(obj);
			}, 300);
		} else {
			cc.RedT.send(obj);
		}
	},
	unAuthorized: function unAuthorized(data) {
		this.loading.active = false;
		cc.RedT.inGame.resetAuth();
		if (void 0 !== data['message']) {
			this.notice.show({ title: 'ĐĂNG KÝ', text: 'Có lỗi sảy ra, xin vui lòng thử lại...' });
		} else {
			this.notice.show(data);
		}
	},
	Authorized: function Authorized(_Authorized) {
		this.loading.active = false;
		if (!_Authorized) {
			this.dialog.showSignName();
		} else {
			this.signIn();
		}
	},
	onData: function onData(data) {
		if (this.dataOn) {
			if (void 0 !== data['unauth']) {
				this.unAuthorized(data['unauth']);
			}
			if (void 0 !== data.Authorized) {
				this.Authorized(data.Authorized);
			}
			if (void 0 !== data.user) {
				cc.RedT.userData(data.user);
				this.dataUser(data.user);
			}
			if (void 0 !== data.mini) {
				cc.RedT.MiniPanel.onData(data.mini);
			}
			if (void 0 !== data.TopHu) {
				cc.RedT.MiniPanel.TopHu.onData(data.TopHu);
				this.dialog.DEvent.onHU(data.TopHu);
			}
			if (void 0 !== data.taixiu) {

				if (this.iconTxtTai && data.taixiu.hasOwnProperty("taixiu") && data.taixiu.taixiu.red_tai) {
					helper.numberTo(this.iconTxtTai, helper.getOnlyNumberInString(this.iconTxtTai.string), data.taixiu.taixiu.red_tai, 4900, true);
				}
				if (this.iconTxtXiu && data.taixiu.hasOwnProperty("taixiu") && data.taixiu.taixiu.red_xiu) {
					helper.numberTo(this.iconTxtXiu, helper.getOnlyNumberInString(this.iconTxtXiu.string), data.taixiu.taixiu.red_xiu, 4900, true);
				}
				cc.RedT.MiniPanel.TaiXiu.TX_Main.onData(data.taixiu);
			}
			if (void 0 !== data.shop) {
				this.dialog.shop.onData(data.shop);
			}
			if (void 0 !== data.profile) {
				this.dialog.profile.onData(data.profile);
			}
			if (void 0 !== data.notice) {
				this.notice.show(data.notice);
			}
			if (void 0 !== data.news && this.newsOn) {
				this.newsContents.onData(data.news);
			}
			if (void 0 !== data.captcha) {
				this.captcha(data.captcha);
			}
			if (void 0 !== data.pushnohu) {
				this.ThongBaoNoHu.onData(data.pushnohu);
			}
			if (void 0 !== data.loading) {
				this.bgLoading.onData(data.loading);
			}
			if (void 0 !== data.event) {
				this.dialog && this.dialog.DEvent.onData(data.event);
			}
			if (void 0 !== data.vipp) {
				cc.RedT.MiniPanel.Dialog.VipPoint.onData(data.vipp);
			}
			if (!!data.toGame) {
				this.MenuRoom.onData(data.toGame);
			}
			if (!!data.message) {
				this.dialog.iMessage.onData(data.message);
			}
		}
	},
	captcha: function captcha(data) {
		switch (data.name) {
			case 'signUp':
				this.dialog.signUp.initCaptcha(data.data);
				break;

			case 'signIn':
				this.dialog.signIn.initCaptcha(data.data);
				break;

			case 'giftcode':
				this.dialog.GiftCode.initCaptcha(data.data);
				break;

			case 'forgotpass':
				this.dialog.ForGotPass.initCaptcha(data.data);
				break;

			case 'signname':
				this.dialog.signName.initCaptcha(data.data);
				break;

			case 'chargeCard':
				this.dialog.shop.NapRed.NapThe.initCaptcha(data.data);
				break;

			case 'regOTP':
				this.dialog.profile.BaoMat.DangKyOTP.initCaptcha(data.data);
				break;
		}
	},
	setAvatar: function setAvatar(data) {
		data = data >> 0;
		if (cc.RedT.avatars[data] !== void 0) {
			this.header.avatar.spriteFrame = cc.RedT.avatars[data];
			this.dialog.profile.CaNhan.avatar.spriteFrame = cc.RedT.avatars[data];
		} else {
			this.header.avatar.spriteFrame = cc.RedT.avatars[0];
			this.dialog.profile.CaNhan.avatar.spriteFrame = cc.RedT.avatars[0];
		}
	},
	dataUser: function dataUser(data) {
		if (void 0 !== data.avatar) {
			this.setAvatar(data.avatar);
		}
		if (void 0 !== data.name) {
			this.header.userName.string = data.name;
			this.dialog.profile.CaNhan.username.string = data.name;
		}
		if (void 0 !== data.red) {
			this.header.userRed.string = this.dialog.profile.KetSat.redHT.string = helper.numberWithCommas(data.red);
		}
		if (void 0 !== data.ketSat) {
			this.dialog.profile.KetSat.redKet.string = helper.numberWithCommas(data.ketSat);
		}
		if (void 0 !== data.UID) {
			this.dialog.profile.CaNhan.UID.string = data.UID;
		}
		if (void 0 !== data.phone) {
			this.dialog.profile.CaNhan.phone.string = data.phone;
			this.dialog.profile.BaoMat.DangKyOTP.statusOTP(!helper.isEmpty(data.phone));
			if (!helper.isEmpty(data.phone)) {
				this.dialog.profile.BaoMat.DangKyOTP.labelPhone.string = data.phone;
				if (cc.RedT.user.veryphone) {
					this.dialog.profile.CaNhan.phoneStatus.string = 'Đã Xác Thực';
					this.dialog.profile.CaNhan.phoneStatus.node.color = this.dialog.profile.CaNhan.phoneStatus.node.color.fromHEX('06B30D');
				} else {
					this.dialog.profile.CaNhan.phoneStatus.string = 'Chưa Xác Thực';
					this.dialog.profile.CaNhan.phoneStatus.node.color = this.dialog.profile.CaNhan.phoneStatus.node.color.fromHEX('FF0000');
				}
			} else {
				this.dialog.profile.CaNhan.phoneStatus.string = '';
			}
		}
		if (void 0 !== data.joinedOn) {
			this.dialog.profile.CaNhan.joinedOn.string = helper.getStringDateByTime(data.joinedOn);
		}
		if (void 0 !== data.level) {
			this.header.level(data.level);
			this.header.updateEXP(data.vipHT, data.vipNext);
		}
	},
	signOut: function signOut() {
		cc.RedT.user = {};
		cc.RedT.IS_LOGIN = false;
		this.AllReset();
	},
	signIn: function signIn() {
		cc.RedT.IS_LOGIN = true;
		this.header.isSignIn();

		this.dialog.onBack();
		this.dialog.showEventX2();

		cc.RedT.MiniPanel.signIn();
	},
	AllReset: function AllReset() {
		this.loading.active = false;
		this.newsContents.reset();
		this.header.isSignOut();
		this.dialog.onCloseDialog();
		this.MenuRoom.onBack();
		cc.RedT.MiniPanel.newGame();
		this.dialog.iMessage.reset();
	},
	noticeCopy: function noticeCopy() {
		var notice = cc.instantiate(cc.RedT.MiniPanel.prefabMiniNotice);
		var noticeComponent = notice.getComponent('mini_warning');
		noticeComponent.text.string = 'Đã copy nội dung được chọn';
		this.node.addChild(notice);
	},
	audioClick: function audioClick() {
		cc.RedT.audio.playClick();
	},
	audioUnClick: function audioUnClick() {
		cc.RedT.audio.playUnClick();
	},
	fanpage: function fanpage() {
		cc.sys.openURL('https://www.facebook.com/');
	},
	ios: function ios() {
		cc.sys.openURL(this.url + 'https://t.me/game88pro_bot');
	},
	android: function android() {
		cc.sys.openURL(this.url + '/download/android/' + this.fileAPK);
	},
	telegram: function telegram() {
		cc.sys.openURL('http://hotro.game88.pro');
	},
	onGetHu: function onGetHu() {
		var _this = this;

		if (void 0 !== cc.RedT.setting.topHu.data) {
			var self = this;
			// Vương Quốc Red
			Promise.all(cc.RedT.setting.topHu.data['vq_red'].filter(function (temp) {
				return temp.red == true;
			})).then(function (result) {
				var h100 = result.filter(function (temp) {
					return temp.type == 100;
				});
				var h1k = result.filter(function (temp) {
					return temp.type == 1000;
				});
				var h10k = result.filter(function (temp) {
					return temp.type == 10000;
				});

				var r100 = helper.getOnlyNumberInString(_this.iconVQRed.hu100.string);
				var r1k = helper.getOnlyNumberInString(_this.iconVQRed.hu1k.string);
				var r10k = helper.getOnlyNumberInString(_this.iconVQRed.hu10k.string);

				if (r100 - h100[0].bet != 0) {
					helper.numberTo(_this.iconVQRed.hu100, helper.getOnlyNumberInString(_this.iconVQRed.hu100.string), h100[0].bet, 4900, true);
					helper.numberTo(_this.iconVQRedTemp.hu100, helper.getOnlyNumberInString(_this.iconVQRedTemp.hu100.string), h100[0].bet, 4900, true);
				}
				if (r1k - h1k[0].bet != 0) {
					helper.numberTo(_this.iconVQRed.hu1k, helper.getOnlyNumberInString(_this.iconVQRed.hu1k.string), h1k[0].bet, 4900, true);
					helper.numberTo(_this.iconVQRedTemp.hu1k, helper.getOnlyNumberInString(_this.iconVQRedTemp.hu1k.string), h1k[0].bet, 4900, true);
				}
				if (r10k - h10k[0].bet != 0) {
					helper.numberTo(_this.iconVQRed.hu10k, helper.getOnlyNumberInString(_this.iconVQRed.hu10k.string), h10k[0].bet, 4900, true);
					helper.numberTo(_this.iconVQRedTemp.hu10k, helper.getOnlyNumberInString(_this.iconVQRedTemp.hu10k.string), h10k[0].bet, 4900, true);
				}
			});

			// Candy
			Promise.all(cc.RedT.setting.topHu.data['candy'].filter(function (temp) {
				return temp.red == true;
			})).then(function (result) {
				var h100 = result.filter(function (temp) {
					return temp.type == 100;
				});
				var h1k = result.filter(function (temp) {
					return temp.type == 1000;
				});
				var h10k = result.filter(function (temp) {
					return temp.type == 10000;
				});

				var r100 = helper.getOnlyNumberInString(_this.iconCandy.hu100.string);
				var r1k = helper.getOnlyNumberInString(_this.iconCandy.hu1k.string);
				var r10k = helper.getOnlyNumberInString(_this.iconCandy.hu10k.string);

				if (r100 - h100[0].bet != 0) {
					helper.numberTo(_this.iconCandy.hu100, helper.getOnlyNumberInString(_this.iconCandy.hu100.string), h100[0].bet, 4900, true);
					helper.numberTo(_this.iconCandyTemp.hu100, helper.getOnlyNumberInString(_this.iconCandyTemp.hu100.string), h100[0].bet, 4900, true);
				}
				if (r1k - h1k[0].bet != 0) {
					helper.numberTo(_this.iconCandy.hu1k, helper.getOnlyNumberInString(_this.iconCandy.hu1k.string), h1k[0].bet, 4900, true);
					helper.numberTo(_this.iconCandyTemp.hu1k, helper.getOnlyNumberInString(_this.iconCandyTemp.hu1k.string), h1k[0].bet, 4900, true);
				}
				if (r10k - h10k[0].bet != 0) {
					helper.numberTo(_this.iconCandy.hu10k, helper.getOnlyNumberInString(_this.iconCandy.hu10k.string), h10k[0].bet, 4900, true);
					helper.numberTo(_this.iconCandyTemp.hu10k, helper.getOnlyNumberInString(_this.iconCandyTemp.hu10k.string), h10k[0].bet, 4900, true);
				}
			});
			//Zeus
			Promise.all(cc.RedT.setting.topHu.data['zeus'].filter(function (temp) {
				return temp.red == true;
			})).then(function (result) {
				var h100 = result.filter(function (temp) {
					return temp.type == 100;
				});
				var h1k = result.filter(function (temp) {
					return temp.type == 1000;
				});
				var h10k = result.filter(function (temp) {
					return temp.type == 10000;
				});

				var r100 = helper.getOnlyNumberInString(_this.iconZeus.hu100.string);
				var r1k = helper.getOnlyNumberInString(_this.iconZeus.hu1k.string);
				var r10k = helper.getOnlyNumberInString(_this.iconZeus.hu10k.string);

				if (r100 - h100[0].bet != 0) {
					helper.numberTo(_this.iconZeus.hu100, helper.getOnlyNumberInString(_this.iconZeus.hu100.string), h100[0].bet, 4900, true);
					helper.numberTo(_this.iconZeusTemp.hu100, helper.getOnlyNumberInString(_this.iconZeusTemp.hu100.string), h100[0].bet, 4900, true);
				}
				if (r1k - h1k[0].bet != 0) {
					helper.numberTo(_this.iconZeus.hu1k, helper.getOnlyNumberInString(_this.iconZeus.hu1k.string), h1k[0].bet, 4900, true);
					helper.numberTo(_this.iconZeusTemp.hu1k, helper.getOnlyNumberInString(_this.iconZeusTemp.hu1k.string), h1k[0].bet, 4900, true);
				}
				if (r10k - h10k[0].bet != 0) {
					helper.numberTo(_this.iconZeus.hu10k, helper.getOnlyNumberInString(_this.iconZeus.hu10k.string), h10k[0].bet, 4900, true);
					helper.numberTo(_this.iconZeusTemp.hu10k, helper.getOnlyNumberInString(_this.iconZeusTemp.hu10k.string), h10k[0].bet, 4900, true);
				}
			});
			// Long Lan
			Promise.all(cc.RedT.setting.topHu.data['long'].filter(function (temp) {
				return temp.red == true;
			})).then(function (result) {
				var h100 = result.filter(function (temp) {
					return temp.type == 100;
				});
				var h1k = result.filter(function (temp) {
					return temp.type == 1000;
				});
				var h10k = result.filter(function (temp) {
					return temp.type == 10000;
				});

				var r100 = helper.getOnlyNumberInString(_this.iconLongLan.hu100.string);
				var r1k = helper.getOnlyNumberInString(_this.iconLongLan.hu1k.string);
				var r10k = helper.getOnlyNumberInString(_this.iconLongLan.hu10k.string);

				if (r100 - h100[0].bet != 0) {
					helper.numberTo(_this.iconLongLan.hu100, helper.getOnlyNumberInString(_this.iconLongLan.hu100.string), h100[0].bet, 4900, true);
					helper.numberTo(_this.iconLongLanTemp.hu100, helper.getOnlyNumberInString(_this.iconLongLanTemp.hu100.string), h100[0].bet, 4900, true);
				}
				if (r1k - h1k[0].bet != 0) {
					helper.numberTo(_this.iconLongLan.hu1k, helper.getOnlyNumberInString(_this.iconLongLan.hu1k.string), h1k[0].bet, 4900, true);
					helper.numberTo(_this.iconLongLanTemp.hu1k, helper.getOnlyNumberInString(_this.iconLongLanTemp.hu1k.string), h1k[0].bet, 4900, true);
				}
				if (r10k - h10k[0].bet != 0) {
					helper.numberTo(_this.iconLongLan.hu10k, helper.getOnlyNumberInString(_this.iconLongLan.hu10k.string), h10k[0].bet, 4900, true);
					helper.numberTo(_this.iconLongLanTemp.hu10k, helper.getOnlyNumberInString(_this.iconLongLanTemp.hu10k.string), h10k[0].bet, 4900, true);
				}
			});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXFNjcmlwdC8uLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHQvYXNzZXRzXFxTY3JpcHRcXE1haW5HYW1lLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsInJlcXVpcmUiLCJiYXNlQ29udHJvbGwiLCJoZWFkZXIiLCJkaWFsb2ciLCJUaG9uZ0Jhb05vSHUiLCJuZXdzQ29udGVudHMiLCJiZ0xvYWRpbmciLCJNZW51Um9vbSIsIm5vdGljZSIsImNjIiwiQ2xhc3MiLCJleHRlbmRzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImF2YXRhcnMiLCJkZWZhdWx0IiwidHlwZSIsIlNwcml0ZUZyYW1lIiwiUHJlZmFiVCIsIlByZWZhYiIsIm5ld3MiLCJOb2RlIiwiaWNvblZRUmVkIiwiaWNvblZRUmVkVGVtcCIsImljb25DYW5keSIsImljb25DYW5keVRlbXAiLCJpY29uTG9uZ0xhbiIsImljb25Mb25nTGFuVGVtcCIsImljb25aZXVzIiwiaWNvblpldXNUZW1wIiwiaWNvbk1lZ2FKIiwicmVkaGF0IiwibG9hZGluZyIsIndzc0NhY2VydCIsIkFzc2V0IiwidXJsIiwiZmlsZUFQSyIsImRhdGFPbiIsIm5ld3NPbiIsImljb25UeHRUYWkiLCJMYWJlbCIsImljb25UeHRYaXUiLCJvbkxvYWQiLCJpbml0IiwiUmVkVCIsInNzbFBlbSIsImluR2FtZSIsImF1ZGlvIiwiZGF0YSIsImdldENvbXBvbmVudCIsImJnIiwibWFpbkJhY2tncm91bmQiLCJNaW5pUGFuZWwiLCJpbnN0YW50aWF0ZSIsInBhdXNlIiwibm9kZSIsInBhcmVudCIsInJlY29ubmVjdCIsIklTX0xPR0lOIiwic2VuZCIsInNjZW5lIiwicmVzZXQiLCJ1c2VyTmFtZSIsInN0cmluZyIsInVzZXIiLCJuYW1lIiwicHJvZmlsZSIsIkNhTmhhbiIsInVzZXJuYW1lIiwidXNlclJlZCIsIktldFNhdCIsInJlZEhUIiwibnVtYmVyV2l0aENvbW1hcyIsInJlZCIsInJlZEtldCIsImtldFNhdCIsIlVJRCIsImpvaW5lZE9uIiwiZ2V0U3RyaW5nRGF0ZUJ5VGltZSIsInBob25lIiwiQmFvTWF0IiwiRGFuZ0t5T1RQIiwic3RhdHVzT1RQIiwiaXNFbXB0eSIsImxhYmVsUGhvbmUiLCJ2ZXJ5cGhvbmUiLCJwaG9uZVN0YXR1cyIsImNvbG9yIiwiZnJvbUhFWCIsInNldEF2YXRhciIsImF2YXRhciIsInNldHRpbmdzIiwic2V0TXVzaWMiLCJjaGVjayIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpc1NvdW5kQmFja2dyb3VuZCIsInNldFNvdW5kQmFja2dyb3VuZCIsInBsYXkiLCJ0Iiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY2xpcCIsImxvYWRlZCIsImNsZWFySW50ZXJ2YWwiLCJiaW5kIiwic3lzIiwiaXNCcm93c2VyIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImxvY2F0aW9uIiwiaHJlZiIsIndpbmRvdyIsIm9ucG9wc3RhdGUiLCJnbyIsInN0YXJ0IiwicmVtZW1iZXJfbWUiLCJzZXRUaW1lb3V0IiwiY2hlY2tUIiwiY2hlY2tIIiwiX3NvY2tldCIsInJlYWR5U3RhdGUiLCJhdXRvQXV0aCIsImF1dGhlbnRpY2F0aW9uIiwiaWQiLCJ0b2tlbiIsIm9iaiIsImFjdGl2ZSIsInJlc2V0QXV0aCIsInJlbW92ZUl0ZW0iLCJhdXRoIiwidW5BdXRob3JpemVkIiwic2hvdyIsInRpdGxlIiwidGV4dCIsIkF1dGhvcml6ZWQiLCJzaG93U2lnbk5hbWUiLCJzaWduSW4iLCJvbkRhdGEiLCJ1c2VyRGF0YSIsImRhdGFVc2VyIiwibWluaSIsIlRvcEh1IiwiREV2ZW50Iiwib25IVSIsInRhaXhpdSIsImhhc093blByb3BlcnR5IiwicmVkX3RhaSIsIm51bWJlclRvIiwiZ2V0T25seU51bWJlckluU3RyaW5nIiwicmVkX3hpdSIsIlRhaVhpdSIsIlRYX01haW4iLCJzaG9wIiwiY2FwdGNoYSIsInB1c2hub2h1IiwiZXZlbnQiLCJ2aXBwIiwiRGlhbG9nIiwiVmlwUG9pbnQiLCJ0b0dhbWUiLCJtZXNzYWdlIiwiaU1lc3NhZ2UiLCJzaWduVXAiLCJpbml0Q2FwdGNoYSIsIkdpZnRDb2RlIiwiRm9yR290UGFzcyIsInNpZ25OYW1lIiwiTmFwUmVkIiwiTmFwVGhlIiwic3ByaXRlRnJhbWUiLCJsZXZlbCIsInVwZGF0ZUVYUCIsInZpcEhUIiwidmlwTmV4dCIsInNpZ25PdXQiLCJBbGxSZXNldCIsImlzU2lnbkluIiwib25CYWNrIiwic2hvd0V2ZW50WDIiLCJpc1NpZ25PdXQiLCJvbkNsb3NlRGlhbG9nIiwibmV3R2FtZSIsIm5vdGljZUNvcHkiLCJwcmVmYWJNaW5pTm90aWNlIiwibm90aWNlQ29tcG9uZW50IiwiYWRkQ2hpbGQiLCJhdWRpb0NsaWNrIiwicGxheUNsaWNrIiwiYXVkaW9VbkNsaWNrIiwicGxheVVuQ2xpY2siLCJmYW5wYWdlIiwib3BlblVSTCIsImlvcyIsImFuZHJvaWQiLCJ0ZWxlZ3JhbSIsIm9uR2V0SHUiLCJzZXR0aW5nIiwidG9wSHUiLCJzZWxmIiwiUHJvbWlzZSIsImFsbCIsImZpbHRlciIsInRlbXAiLCJ0aGVuIiwiaDEwMCIsInJlc3VsdCIsImgxayIsImgxMGsiLCJyMTAwIiwiaHUxMDAiLCJyMWsiLCJodTFrIiwicjEwayIsImh1MTBrIiwiYmV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFNBQVNDLFFBQVEsUUFBUixDQUFiO0FBQ0EsSUFBSUMsZUFBZUQsUUFBUSxjQUFSLENBQW5CO0FBQ0EsSUFBSUUsU0FBZUYsUUFBUSxRQUFSLENBQW5CO0FBQUEsSUFDQ0csU0FBZUgsUUFBUSxRQUFSLENBRGhCO0FBQUEsSUFFQ0ksZUFBZUosUUFBUSxVQUFSLENBRmhCO0FBQUEsSUFHQ0ssZUFBZUwsUUFBUSxjQUFSLENBSGhCO0FBQUEsSUFJQ00sWUFBZU4sUUFBUSxXQUFSLENBSmhCO0FBQUEsSUFLQ08sV0FBZVAsUUFBUSxVQUFSLENBTGhCO0FBQUEsSUFNQ1EsU0FBZVIsUUFBUSxRQUFSLENBTmhC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LFdBQUwsQ0FBaUIyTCxJQUFqQixDQUFzQnRKLE1BQW5ELENBQXZDLEVBQW1HaUosSUFBSSxDQUFKLEVBQU9RLEdBQTFHLEVBQStHLElBQS9HLEVBQXFILElBQXJIO0FBQ0F6TixZQUFPc0osUUFBUCxDQUFnQixNQUFLMUgsZUFBTCxDQUFxQjBMLElBQXJDLEVBQTJDdE4sT0FBT3VKLHFCQUFQLENBQTZCLE1BQUszSCxlQUFMLENBQXFCMEwsSUFBckIsQ0FBMEJ0SixNQUF2RCxDQUEzQyxFQUEyR2lKLElBQUksQ0FBSixFQUFPUSxHQUFsSCxFQUF1SCxJQUF2SCxFQUE2SCxJQUE3SDtBQUNBO0FBQ0QsUUFBSUYsT0FBT0wsS0FBSyxDQUFMLEVBQVFPLEdBQWYsSUFBc0IsQ0FBMUIsRUFBNkI7QUFDNUJ6TixZQUFPc0osUUFBUCxDQUFnQixNQUFLM0gsV0FBTCxDQUFpQjZMLEtBQWpDLEVBQXdDeE4sT0FBT3VKLHFCQUFQLENBQTZCLE1BQUs1SCxXQUFMLENBQWlCNkwsS0FBakIsQ0FBdUJ4SixNQUFwRCxDQUF4QyxFQUFxR2tKLEtBQUssQ0FBTCxFQUFRTyxHQUE3RyxFQUFrSCxJQUFsSCxFQUF3SCxJQUF4SDtBQUNBek4sWUFBT3NKLFFBQVAsQ0FBZ0IsTUFBSzFILGVBQUwsQ0FBcUI0TCxLQUFyQyxFQUE0Q3hOLE9BQU91SixxQkFBUCxDQUE2QixNQUFLM0gsZUFBTCxDQUFxQjRMLEtBQXJCLENBQTJCeEosTUFBeEQsQ0FBNUMsRUFBNkdrSixLQUFLLENBQUwsRUFBUU8sR0FBckgsRUFBMEgsSUFBMUgsRUFBZ0ksSUFBaEk7QUFDQTtBQUNELElBeEJGO0FBeUJBO0FBQ0Q7QUExZU8sQ0FBVCIsImZpbGUiOiJNYWluR2FtZS5qcyIsInNvdXJjZVJvb3QiOiIuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxTY3JpcHQiLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIGhlbHBlciA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG52YXIgYmFzZUNvbnRyb2xsID0gcmVxdWlyZSgnQmFzZUNvbnRyb2xsJyk7XHJcbnZhciBoZWFkZXIgICAgICAgPSByZXF1aXJlKCdIZWFkZXInKSxcclxuXHRkaWFsb2cgICAgICAgPSByZXF1aXJlKCdEaWFsb2cnKSxcclxuXHRUaG9uZ0Jhb05vSHUgPSByZXF1aXJlKCdQdXNoTm9odScpLFxyXG5cdG5ld3NDb250ZW50cyA9IHJlcXVpcmUoJ05ld3NDb250ZW50cycpLFxyXG5cdGJnTG9hZGluZyAgICA9IHJlcXVpcmUoJ2JnTG9hZGluZycpLFxyXG5cdE1lbnVSb29tICAgICA9IHJlcXVpcmUoJ01lbnVSb29tJyksXHJcblx0bm90aWNlICAgICAgID0gcmVxdWlyZSgnTm90aWNlJyk7XHJcblxyXG5jYy5DbGFzcyh7XHJcblx0ZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cdHByb3BlcnRpZXM6IHtcclxuXHRcdE1lbnVSb29tOiBNZW51Um9vbSxcclxuXHRcdGF2YXRhcnM6IHtcclxuXHRcdFx0ZGVmYXVsdDogW10sXHJcblx0XHRcdHR5cGU6IGNjLlNwcml0ZUZyYW1lXHJcblx0XHR9LFxyXG5cdFx0UHJlZmFiVDoge1xyXG5cdFx0XHRkZWZhdWx0OiBbXSxcclxuXHRcdFx0dHlwZTogY2MuUHJlZmFiXHJcblx0XHR9LFxyXG5cdFx0aGVhZGVyOiBoZWFkZXIsXHJcblx0XHRuZXdzOiBjYy5Ob2RlLFxyXG5cdFx0bmV3c0NvbnRlbnRzOiBuZXdzQ29udGVudHMsXHJcblx0XHRiZ0xvYWRpbmc6ICAgIGJnTG9hZGluZyxcclxuXHRcdGljb25WUVJlZDogICAgY2MuTm9kZSxcclxuXHRcdGljb25WUVJlZFRlbXA6IGNjLk5vZGUsXHJcblx0XHRpY29uQ2FuZHk6ICAgIGNjLk5vZGUsXHJcblx0XHRpY29uQ2FuZHlUZW1wOiBjYy5Ob2RlLFxyXG5cdFx0aWNvbkxvbmdMYW46ICBjYy5Ob2RlLFxyXG5cdFx0aWNvbkxvbmdMYW5UZW1wOiBjYy5Ob2RlLFxyXG5cdFx0aWNvblpldXM6IFx0ICBjYy5Ob2RlLFxyXG5cdFx0aWNvblpldXNUZW1wOiBcdCAgY2MuTm9kZSxcclxuXHRcdGljb25NZWdhSjogICAgY2MuTm9kZSxcclxuXHRcdHJlZGhhdDogICAgICAgY2MuTm9kZSxcclxuXHRcdGRpYWxvZzogICAgICAgZGlhbG9nLFxyXG5cdFx0bG9hZGluZzogICAgICBjYy5Ob2RlLFxyXG5cdFx0bm90aWNlOiAgICAgICBub3RpY2UsXHJcblx0XHRUaG9uZ0Jhb05vSHU6IFRob25nQmFvTm9IdSxcclxuXHRcdHdzc0NhY2VydDoge1xyXG5cdFx0XHR0eXBlOiBjYy5Bc3NldCxcclxuXHRcdFx0ZGVmYXVsdDogbnVsbFxyXG5cdFx0fSxcclxuXHRcdHVybDogICAgICAgICAgJycsXHJcblx0XHRmaWxlQVBLOiAgICAgICcnLFxyXG5cdFx0ZGF0YU9uOiB0cnVlLFxyXG5cdFx0bmV3c09uOiB0cnVlLFxyXG5cdFx0aWNvblR4dFRhaTpjYy5MYWJlbCxcclxuXHRcdGljb25UeHRYaXU6Y2MuTGFiZWwsXHJcblx0fSxcclxuXHRvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdHRoaXMuZGlhbG9nLmluaXQoKTtcclxuXHRcdHRoaXMubmV3c0NvbnRlbnRzLmluaXQodGhpcyk7XHJcblx0XHRpZiAodm9pZCAwID09PSBjYy5SZWRUKSB7XHJcblx0XHRcdGNjLlJlZFQgPSBiYXNlQ29udHJvbGw7XHJcblx0XHRcdGNjLlJlZFQuc3NsUGVtID0gdGhpcy53c3NDYWNlcnQ7XHJcblx0XHRcdGNjLlJlZFQuaW5pdCgpO1xyXG5cdFx0XHRjYy5SZWRULmluR2FtZSA9IHRoaXM7XHJcblx0XHRcdGNjLlJlZFQuYXVkaW8gICAgPSB0aGlzLlByZWZhYlRbMF0uZGF0YS5nZXRDb21wb25lbnQoJ01haW5BdWRpbycpO1xyXG5cdFx0XHRjYy5SZWRULmF1ZGlvLmJnID0gY2MuUmVkVC5hdWRpby5tYWluQmFja2dyb3VuZDtcclxuXHRcdFx0Y2MuUmVkVC5hdmF0YXJzICA9IHRoaXMuYXZhdGFycztcclxuXHRcdFx0Y2MuUmVkVC5NaW5pUGFuZWwgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYlRbMV0pO1xyXG5cdFx0XHRjYy5SZWRULk1pbmlQYW5lbCA9IGNjLlJlZFQuTWluaVBhbmVsLmdldENvbXBvbmVudCgnTWluaVBhbmVsJyk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2MuUmVkVC5pbkdhbWUgPSB0aGlzO1xyXG5cdFx0XHRjYy5SZWRULmF1ZGlvLmJnLnBhdXNlKCk7XHJcblx0XHRcdCBcclxuXHRcdFx0Y2MuUmVkVC5hdWRpby5iZyA9IGNjLlJlZFQuYXVkaW8ubWFpbkJhY2tncm91bmQ7XHJcblx0XHR9XHJcblx0XHRjYy5SZWRULk1pbmlQYW5lbC5ub2RlLnBhcmVudCA9IHRoaXMucmVkaGF0O1xyXG5cdFx0Y2MuUmVkVC5yZWNvbm5lY3QoKTtcclxuXHRcdHRoaXMuaWNvbkNhbmR5ICAgICA9IHRoaXMuaWNvbkNhbmR5LmdldENvbXBvbmVudCgnaWNvbkdhbWVIdScpO1xyXG5cdFx0dGhpcy5pY29uVlFSZWQgICAgID0gdGhpcy5pY29uVlFSZWQuZ2V0Q29tcG9uZW50KCdpY29uR2FtZUh1Jyk7XHJcblx0XHR0aGlzLmljb25Mb25nTGFuICAgPSB0aGlzLmljb25Mb25nTGFuLmdldENvbXBvbmVudCgnaWNvbkdhbWVIdScpO1xyXG5cdFx0dGhpcy5pY29uWmV1cyBcdCAgID0gdGhpcy5pY29uWmV1cy5nZXRDb21wb25lbnQoJ2ljb25HYW1lSHUnKTtcclxuXHRcdHRoaXMuaWNvbk1lZ2FKICAgICA9IHRoaXMuaWNvbk1lZ2FKLmdldENvbXBvbmVudCgnaWNvbkdhbWVIdScpO1xyXG5cdFx0dGhpcy5pY29uQ2FuZHlUZW1wID0gdGhpcy5pY29uQ2FuZHlUZW1wLmdldENvbXBvbmVudCgnaWNvbkdhbWVIdScpO1xyXG5cdFx0dGhpcy5pY29uVlFSZWRUZW1wID0gdGhpcy5pY29uVlFSZWRUZW1wLmdldENvbXBvbmVudCgnaWNvbkdhbWVIdScpO1xyXG5cdFx0dGhpcy5pY29uTG9uZ0xhblRlbXAgPSB0aGlzLmljb25Mb25nTGFuVGVtcC5nZXRDb21wb25lbnQoJ2ljb25HYW1lSHUnKTtcclxuXHRcdHRoaXMuaWNvblpldXNUZW1wID0gdGhpcy5pY29uWmV1c1RlbXAuZ2V0Q29tcG9uZW50KCdpY29uR2FtZUh1Jyk7XHJcblx0XHRpZiAoY2MuUmVkVC5JU19MT0dJTil7XHJcblx0XHRcdGNjLlJlZFQuc2VuZCh7c2NlbmU6J2hvbWUnfSk7XHJcblx0XHRcdHRoaXMuaGVhZGVyLnJlc2V0KCk7XHJcblx0XHRcdHRoaXMuaGVhZGVyLnVzZXJOYW1lLnN0cmluZyA9IGNjLlJlZFQudXNlci5uYW1lO1xyXG5cdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi51c2VybmFtZS5zdHJpbmcgPSBjYy5SZWRULnVzZXIubmFtZTtcclxuXHRcdFx0dGhpcy5oZWFkZXIudXNlclJlZC5zdHJpbmcgPSB0aGlzLmRpYWxvZy5wcm9maWxlLktldFNhdC5yZWRIVC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhjYy5SZWRULnVzZXIucmVkKTtcclxuXHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5LZXRTYXQucmVkS2V0LnN0cmluZyA9IGhlbHBlci5udW1iZXJXaXRoQ29tbWFzKGNjLlJlZFQudXNlci5rZXRTYXQpO1xyXG5cdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5VSUQuc3RyaW5nID0gY2MuUmVkVC51c2VyLlVJRDtcclxuXHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5DYU5oYW4uam9pbmVkT24uc3RyaW5nID0gaGVscGVyLmdldFN0cmluZ0RhdGVCeVRpbWUoY2MuUmVkVC51c2VyLmpvaW5lZE9uKTtcclxuXHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5DYU5oYW4ucGhvbmUuc3RyaW5nID0gY2MuUmVkVC51c2VyLnBob25lO1xyXG5cdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkJhb01hdC5EYW5nS3lPVFAuc3RhdHVzT1RQKCFoZWxwZXIuaXNFbXB0eShjYy5SZWRULnVzZXIucGhvbmUpKTtcclxuXHRcdFx0aWYgKCFoZWxwZXIuaXNFbXB0eShjYy5SZWRULnVzZXIucGhvbmUpKSB7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5CYW9NYXQuRGFuZ0t5T1RQLmxhYmVsUGhvbmUuc3RyaW5nID0gY2MuUmVkVC51c2VyLnBob25lO1xyXG5cdFx0XHRcdGlmIChjYy5SZWRULnVzZXIudmVyeXBob25lKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZVN0YXR1cy5zdHJpbmcgPSAnxJDDoyBYw6FjIFRo4buxYyc7XHJcblx0XHRcdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZVN0YXR1cy5ub2RlLmNvbG9yICA9IHRoaXMuZGlhbG9nLnByb2ZpbGUuQ2FOaGFuLnBob25lU3RhdHVzLm5vZGUuY29sb3IuZnJvbUhFWCgnMDZCMzBEJyk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZVN0YXR1cy5zdHJpbmcgPSAnQ2jGsGEgWMOhYyBUaOG7sWMnO1xyXG5cdFx0XHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5DYU5oYW4ucGhvbmVTdGF0dXMubm9kZS5jb2xvciAgPSB0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZVN0YXR1cy5ub2RlLmNvbG9yLmZyb21IRVgoJ0ZGMDAwMCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5DYU5oYW4ucGhvbmVTdGF0dXMuc3RyaW5nID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5zZXRBdmF0YXIoY2MuUmVkVC51c2VyLmF2YXRhcik7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5kaWFsb2cuc2V0dGluZ3Muc2V0TXVzaWMoKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgY2hlY2sgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnU09VTkRfQkFDS0dST1VORCcpO1xyXG5cdFx0aWYoY2hlY2sgPT0gbnVsbCB8fCBjYy5SZWRULmlzU291bmRCYWNrZ3JvdW5kKCkpe1xyXG5cdFx0XHRjYy5SZWRULnNldFNvdW5kQmFja2dyb3VuZCh0cnVlKTtcclxuXHRcdFx0XHJcblx0XHQvL1x0Y2MuUmVkVC5hdWRpby5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShjYy5SZWRULmF1ZGlvLmJnLmNsaXAsIHRydWUsIDEpO1xyXG5cdFx0XHRjYy5SZWRULmF1ZGlvLmJnLnBsYXkoKTtcclxuXHRcdFx0bGV0IHQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGNjLlJlZFQuYXVkaW8uYmcuY2xpcC5sb2FkZWQpO1xyXG5cdFx0XHRcdGlmKGNjLlJlZFQuYXVkaW8uYmcuY2xpcC5sb2FkZWQpe1xyXG5cdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbCh0KTtcclxuXHRcdFx0XHRcdGNjLlJlZFQuYXVkaW8uYmcucGxheSgpO1xyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHR9LmJpbmQodGhpcyksMTAwKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2Muc3lzLmlzQnJvd3Nlcikge1xyXG5cdFx0XHRoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCBsb2NhdGlvbi5ocmVmKTtcclxuXHRcdFx0d2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0aGlzdG9yeS5nbygxKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdHN0YXJ0OiBmdW5jdGlvbigpe1xyXG5cdFx0aWYoY2MuUmVkVC5JU19MT0dJTiA9PSBmYWxzZSl7XHJcblx0XHRcdHZhciByZW1lbWJlcl9tZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVtZW1iZXJfbWVcIik7XHJcblx0XHRcdGlmKHJlbWVtYmVyX21lICYmIHJlbWVtYmVyX21lID09IFwidHJ1ZVwiKXtcclxuXHRcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRsZXQgY2hlY2tUID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1RIJyk7IC8vIFVJRFxyXG5cdFx0XHRcdFx0bGV0IGNoZWNrSCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdIVCcpOyAvLyB0b2tlblxyXG5cdFx0XHRcdFx0aWYgKCEhY2hlY2tUICYmICEhY2hlY2tIKSB7XHJcblx0XHRcdFx0XHRcdHZhciB0ID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdFx0XHQgXHJcblx0XHRcdFx0XHRcdFx0aWYoY2MuUmVkVC5fc29ja2V0ICE9IG51bGwgJiYgY2MuUmVkVC5fc29ja2V0LnJlYWR5U3RhdGUgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hdXRvQXV0aCh7YXV0aGVudGljYXRpb246e2lkOmNoZWNrVCwgdG9rZW46Y2hlY2tIfX0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0dCA9IG51bGw7XHJcblx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdH0uYmluZCh0aGlzKSw1MClcclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fS5iaW5kKHRoaXMpLCAzMDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LFxyXG5cdGF1dG9BdXRoOiBmdW5jdGlvbihvYmopIHtcclxuXHRcdHRoaXMubG9hZGluZy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0aWYgKGNjLlJlZFQuX3NvY2tldCA9PSBudWxsIHx8IGNjLlJlZFQuX3NvY2tldC5yZWFkeVN0YXRlICE9IDEpIHtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGNjLlJlZFQuc2VuZChvYmopO1xyXG5cdFx0XHR9LCAzMDApO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGNjLlJlZFQuc2VuZChvYmopXHJcblx0XHR9XHJcblx0fSxcclxuXHRyZXNldEF1dGg6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ1RIJyk7XHJcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnSFQnKTtcclxuXHR9LFxyXG5cdGF1dGg6IGZ1bmN0aW9uKG9iaikge1xyXG5cdFx0dGhpcy5sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XHJcblx0XHRpZiAoY2MuUmVkVC5fc29ja2V0ID09IG51bGwgfHwgY2MuUmVkVC5fc29ja2V0LnJlYWR5U3RhdGUgIT0gMSkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0Y2MuUmVkVC5zZW5kKG9iaik7XHJcblx0XHRcdH0sIDMwMCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0Y2MuUmVkVC5zZW5kKG9iailcclxuXHRcdH1cclxuXHR9LFxyXG5cdHVuQXV0aG9yaXplZDogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHR0aGlzLmxvYWRpbmcuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRjYy5SZWRULmluR2FtZS5yZXNldEF1dGgoKTtcclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGFbJ21lc3NhZ2UnXSkge1xyXG5cdFx0XHR0aGlzLm5vdGljZS5zaG93KHt0aXRsZTogJ8SQxIJORyBLw50nLCB0ZXh0OiAnQ8OzIGzhu5dpIHPhuqN5IHJhLCB4aW4gdnVpIGzDsm5nIHRo4butIGzhuqFpLi4uJ30pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5ub3RpY2Uuc2hvdyhkYXRhKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdEF1dGhvcml6ZWQ6ZnVuY3Rpb24oQXV0aG9yaXplZCl7XHJcblx0XHR0aGlzLmxvYWRpbmcuYWN0aXZlID0gZmFsc2U7XHJcblx0XHRpZiAoIUF1dGhvcml6ZWQpIHtcclxuXHRcdFx0dGhpcy5kaWFsb2cuc2hvd1NpZ25OYW1lKCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zaWduSW4oKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdG9uRGF0YTogZnVuY3Rpb24oZGF0YSl7XHJcblx0XHRpZiAodGhpcy5kYXRhT24pIHtcclxuXHRcdFx0aWYgKHZvaWQgMCAhPT0gZGF0YVsndW5hdXRoJ10pe1xyXG5cdFx0XHRcdHRoaXMudW5BdXRob3JpemVkKGRhdGFbJ3VuYXV0aCddKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLkF1dGhvcml6ZWQpe1xyXG5cdFx0XHRcdHRoaXMuQXV0aG9yaXplZChkYXRhLkF1dGhvcml6ZWQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGEudXNlcil7XHJcblx0XHRcdFx0Y2MuUmVkVC51c2VyRGF0YShkYXRhLnVzZXIpO1xyXG5cdFx0XHRcdHRoaXMuZGF0YVVzZXIoZGF0YS51c2VyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm1pbmkpe1xyXG5cdFx0XHRcdGNjLlJlZFQuTWluaVBhbmVsLm9uRGF0YShkYXRhLm1pbmkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGEuVG9wSHUpe1xyXG5cdFx0XHRcdGNjLlJlZFQuTWluaVBhbmVsLlRvcEh1Lm9uRGF0YShkYXRhLlRvcEh1KTtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZy5ERXZlbnQub25IVShkYXRhLlRvcEh1KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnRhaXhpdSl7XHJcblx0XHRcdCBcclxuXHRcdFx0XHRpZih0aGlzLmljb25UeHRUYWkgJiYgZGF0YS50YWl4aXUuaGFzT3duUHJvcGVydHkoXCJ0YWl4aXVcIikgJiYgZGF0YS50YWl4aXUudGFpeGl1LnJlZF90YWkpe1xyXG5cdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvblR4dFRhaSwgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25UeHRUYWkuc3RyaW5nKSwgZGF0YS50YWl4aXUudGFpeGl1LnJlZF90YWksIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZih0aGlzLmljb25UeHRYaXUgJiYgZGF0YS50YWl4aXUuaGFzT3duUHJvcGVydHkoXCJ0YWl4aXVcIikgJiYgZGF0YS50YWl4aXUudGFpeGl1LnJlZF94aXUpe1xyXG5cdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvblR4dFhpdSwgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25UeHRYaXUuc3RyaW5nKSwgZGF0YS50YWl4aXUudGFpeGl1LnJlZF94aXUsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5UYWlYaXUuVFhfTWFpbi5vbkRhdGEoZGF0YS50YWl4aXUpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGEuc2hvcCl7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cuc2hvcC5vbkRhdGEoZGF0YS5zaG9wKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnByb2ZpbGUpe1xyXG5cdFx0XHRcdHRoaXMuZGlhbG9nLnByb2ZpbGUub25EYXRhKGRhdGEucHJvZmlsZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5ub3RpY2Upe1xyXG5cdFx0XHRcdHRoaXMubm90aWNlLnNob3coZGF0YS5ub3RpY2UpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh2b2lkIDAgIT09IGRhdGEubmV3cyAmJiB0aGlzLm5ld3NPbil7XHJcblx0XHRcdFx0dGhpcy5uZXdzQ29udGVudHMub25EYXRhKGRhdGEubmV3cyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5jYXB0Y2hhKSB7XHJcblx0XHRcdFx0dGhpcy5jYXB0Y2hhKGRhdGEuY2FwdGNoYSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5wdXNobm9odSkge1xyXG5cdFx0XHRcdHRoaXMuVGhvbmdCYW9Ob0h1Lm9uRGF0YShkYXRhLnB1c2hub2h1KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmxvYWRpbmcpIHtcclxuXHRcdFx0XHR0aGlzLmJnTG9hZGluZy5vbkRhdGEoZGF0YS5sb2FkaW5nKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmV2ZW50KSB7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cgJiYgdGhpcy5kaWFsb2cuREV2ZW50Lm9uRGF0YShkYXRhLmV2ZW50KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAodm9pZCAwICE9PSBkYXRhLnZpcHApIHtcclxuXHRcdFx0XHRjYy5SZWRULk1pbmlQYW5lbC5EaWFsb2cuVmlwUG9pbnQub25EYXRhKGRhdGEudmlwcCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCEhZGF0YS50b0dhbWUpIHtcclxuXHRcdFx0XHR0aGlzLk1lbnVSb29tLm9uRGF0YShkYXRhLnRvR2FtZSk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCEhZGF0YS5tZXNzYWdlKSB7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cuaU1lc3NhZ2Uub25EYXRhKGRhdGEubWVzc2FnZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdGNhcHRjaGE6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0c3dpdGNoKGRhdGEubmFtZSl7XHJcblx0XHRcdGNhc2UgJ3NpZ25VcCc6XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cuc2lnblVwLmluaXRDYXB0Y2hhKGRhdGEuZGF0YSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdzaWduSW4nOlxyXG5cdFx0XHRcdHRoaXMuZGlhbG9nLnNpZ25Jbi5pbml0Q2FwdGNoYShkYXRhLmRhdGEpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZ2lmdGNvZGUnOlxyXG5cdFx0XHRcdHRoaXMuZGlhbG9nLkdpZnRDb2RlLmluaXRDYXB0Y2hhKGRhdGEuZGF0YSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdmb3Jnb3RwYXNzJzpcclxuXHRcdFx0XHR0aGlzLmRpYWxvZy5Gb3JHb3RQYXNzLmluaXRDYXB0Y2hhKGRhdGEuZGF0YSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHJcblx0XHRcdGNhc2UgJ3NpZ25uYW1lJzpcclxuXHRcdFx0XHR0aGlzLmRpYWxvZy5zaWduTmFtZS5pbml0Q2FwdGNoYShkYXRhLmRhdGEpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnY2hhcmdlQ2FyZCc6XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cuc2hvcC5OYXBSZWQuTmFwVGhlLmluaXRDYXB0Y2hhKGRhdGEuZGF0YSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdyZWdPVFAnOlxyXG5cdFx0XHRcdHRoaXMuZGlhbG9nLnByb2ZpbGUuQmFvTWF0LkRhbmdLeU9UUC5pbml0Q2FwdGNoYShkYXRhLmRhdGEpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0c2V0QXZhdGFyOiBmdW5jdGlvbihkYXRhKXtcclxuXHRcdGRhdGEgPSBkYXRhPj4wO1xyXG5cdFx0aWYgKGNjLlJlZFQuYXZhdGFyc1tkYXRhXSAhPT0gdm9pZCAwKSB7XHJcblx0XHRcdHRoaXMuaGVhZGVyLmF2YXRhci5zcHJpdGVGcmFtZSA9IGNjLlJlZFQuYXZhdGFyc1tkYXRhXTtcclxuXHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5DYU5oYW4uYXZhdGFyLnNwcml0ZUZyYW1lID0gY2MuUmVkVC5hdmF0YXJzW2RhdGFdO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHRoaXMuaGVhZGVyLmF2YXRhci5zcHJpdGVGcmFtZSA9IGNjLlJlZFQuYXZhdGFyc1swXTtcclxuXHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5DYU5oYW4uYXZhdGFyLnNwcml0ZUZyYW1lID0gY2MuUmVkVC5hdmF0YXJzWzBdO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YVVzZXI6IGZ1bmN0aW9uKGRhdGEpe1xyXG5cdFx0aWYgKHZvaWQgMCAhPT0gZGF0YS5hdmF0YXIpe1xyXG5cdFx0XHR0aGlzLnNldEF2YXRhcihkYXRhLmF2YXRhcik7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLm5hbWUpe1xyXG5cdFx0XHR0aGlzLmhlYWRlci51c2VyTmFtZS5zdHJpbmcgPSBkYXRhLm5hbWU7XHJcblx0XHRcdHRoaXMuZGlhbG9nLnByb2ZpbGUuQ2FOaGFuLnVzZXJuYW1lLnN0cmluZyA9IGRhdGEubmFtZTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEucmVkKXtcclxuXHRcdFx0dGhpcy5oZWFkZXIudXNlclJlZC5zdHJpbmcgPSB0aGlzLmRpYWxvZy5wcm9maWxlLktldFNhdC5yZWRIVC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLnJlZCk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLmtldFNhdCl7XHJcblx0XHRcdHRoaXMuZGlhbG9nLnByb2ZpbGUuS2V0U2F0LnJlZEtldC5zdHJpbmcgPSBoZWxwZXIubnVtYmVyV2l0aENvbW1hcyhkYXRhLmtldFNhdCk7XHJcblx0XHR9XHJcblx0XHRpZiAodm9pZCAwICE9PSBkYXRhLlVJRCl7XHJcblx0XHRcdHRoaXMuZGlhbG9nLnByb2ZpbGUuQ2FOaGFuLlVJRC5zdHJpbmcgPSBkYXRhLlVJRDtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEucGhvbmUpe1xyXG5cdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZS5zdHJpbmcgPSBkYXRhLnBob25lO1xyXG5cdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkJhb01hdC5EYW5nS3lPVFAuc3RhdHVzT1RQKCFoZWxwZXIuaXNFbXB0eShkYXRhLnBob25lKSk7XHJcblx0XHRcdGlmICghaGVscGVyLmlzRW1wdHkoZGF0YS5waG9uZSkpIHtcclxuXHRcdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkJhb01hdC5EYW5nS3lPVFAubGFiZWxQaG9uZS5zdHJpbmcgPSBkYXRhLnBob25lO1xyXG5cdFx0XHRcdGlmIChjYy5SZWRULnVzZXIudmVyeXBob25lKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZVN0YXR1cy5zdHJpbmcgPSAnxJDDoyBYw6FjIFRo4buxYyc7XHJcblx0XHRcdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZVN0YXR1cy5ub2RlLmNvbG9yICA9IHRoaXMuZGlhbG9nLnByb2ZpbGUuQ2FOaGFuLnBob25lU3RhdHVzLm5vZGUuY29sb3IuZnJvbUhFWCgnMDZCMzBEJyk7XHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZVN0YXR1cy5zdHJpbmcgPSAnQ2jGsGEgWMOhYyBUaOG7sWMnO1xyXG5cdFx0XHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5DYU5oYW4ucGhvbmVTdGF0dXMubm9kZS5jb2xvciAgPSB0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5waG9uZVN0YXR1cy5ub2RlLmNvbG9yLmZyb21IRVgoJ0ZGMDAwMCcpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0dGhpcy5kaWFsb2cucHJvZmlsZS5DYU5oYW4ucGhvbmVTdGF0dXMuc3RyaW5nID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEuam9pbmVkT24pe1xyXG5cdFx0XHR0aGlzLmRpYWxvZy5wcm9maWxlLkNhTmhhbi5qb2luZWRPbi5zdHJpbmcgPSBoZWxwZXIuZ2V0U3RyaW5nRGF0ZUJ5VGltZShkYXRhLmpvaW5lZE9uKTtcclxuXHRcdH1cclxuXHRcdGlmICh2b2lkIDAgIT09IGRhdGEubGV2ZWwpe1xyXG5cdFx0XHR0aGlzLmhlYWRlci5sZXZlbChkYXRhLmxldmVsKTtcclxuXHRcdFx0dGhpcy5oZWFkZXIudXBkYXRlRVhQKGRhdGEudmlwSFQsIGRhdGEudmlwTmV4dCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRzaWduT3V0OiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC51c2VyICAgICA9IHt9O1xyXG5cdFx0Y2MuUmVkVC5JU19MT0dJTiA9IGZhbHNlO1xyXG5cdFx0dGhpcy5BbGxSZXNldCgpO1xyXG5cdFx0IFxyXG5cdH0sXHJcblx0c2lnbkluOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2MuUmVkVC5JU19MT0dJTiA9IHRydWU7XHJcblx0XHR0aGlzLmhlYWRlci5pc1NpZ25JbigpO1xyXG5cclxuXHRcclxuXHRcdHRoaXMuZGlhbG9nLm9uQmFjaygpO1xyXG5cdCBcdHRoaXMuZGlhbG9nLnNob3dFdmVudFgyKCk7XHJcblx0XHQgXHJcblx0XHRjYy5SZWRULk1pbmlQYW5lbC5zaWduSW4oKTtcclxuXHR9LFxyXG5cdEFsbFJlc2V0OmZ1bmN0aW9uKCl7XHJcblx0XHR0aGlzLmxvYWRpbmcuYWN0aXZlID0gZmFsc2U7XHJcblx0XHR0aGlzLm5ld3NDb250ZW50cy5yZXNldCgpO1xyXG5cdFx0dGhpcy5oZWFkZXIuaXNTaWduT3V0KCk7XHJcblx0XHR0aGlzLmRpYWxvZy5vbkNsb3NlRGlhbG9nKCk7XHJcblx0XHR0aGlzLk1lbnVSb29tLm9uQmFjaygpO1xyXG5cdFx0Y2MuUmVkVC5NaW5pUGFuZWwubmV3R2FtZSgpO1xyXG5cdFx0dGhpcy5kaWFsb2cuaU1lc3NhZ2UucmVzZXQoKTtcclxuXHR9LFxyXG5cdG5vdGljZUNvcHk6IGZ1bmN0aW9uKCl7XHJcblx0XHRsZXQgbm90aWNlID0gY2MuaW5zdGFudGlhdGUoY2MuUmVkVC5NaW5pUGFuZWwucHJlZmFiTWluaU5vdGljZSk7XHJcblx0XHRsZXQgbm90aWNlQ29tcG9uZW50ID0gbm90aWNlLmdldENvbXBvbmVudCgnbWluaV93YXJuaW5nJyk7XHJcblx0XHRub3RpY2VDb21wb25lbnQudGV4dC5zdHJpbmcgPSAnxJDDoyBjb3B5IG7hu5lpIGR1bmcgxJHGsOG7o2MgY2jhu41uJztcclxuXHRcdHRoaXMubm9kZS5hZGRDaGlsZChub3RpY2UpO1xyXG5cdH0sXHJcblx0YXVkaW9DbGljazogZnVuY3Rpb24oKXtcclxuXHRcdGNjLlJlZFQuYXVkaW8ucGxheUNsaWNrKCk7XHJcblx0fSxcclxuXHRhdWRpb1VuQ2xpY2s6IGZ1bmN0aW9uKCl7XHJcblx0XHRjYy5SZWRULmF1ZGlvLnBsYXlVbkNsaWNrKCk7XHJcblx0fSxcclxuXHRmYW5wYWdlOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2Muc3lzLm9wZW5VUkwoJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8nKTtcclxuXHR9LFxyXG5cdGlvczogZnVuY3Rpb24oKXtcclxuXHRcdGNjLnN5cy5vcGVuVVJMKHRoaXMudXJsICsgJ2h0dHBzOi8vdC5tZS9nYW1lODhwcm9fYm90Jyk7XHJcblx0fSxcclxuXHRhbmRyb2lkOiBmdW5jdGlvbigpe1xyXG5cdFx0Y2Muc3lzLm9wZW5VUkwodGhpcy51cmwgKyAnL2Rvd25sb2FkL2FuZHJvaWQvJyArIHRoaXMuZmlsZUFQSyk7XHJcblx0fSxcclxuXHR0ZWxlZ3JhbTogZnVuY3Rpb24oKXtcclxuXHRcdGNjLnN5cy5vcGVuVVJMKCdodHRwOi8vaG90cm8uZ2FtZTg4LnBybycpO1xyXG5cdH0sXHJcblx0b25HZXRIdTogZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKHZvaWQgMCAhPT0gY2MuUmVkVC5zZXR0aW5nLnRvcEh1LmRhdGEpIHtcclxuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHQvLyBWxrDGoW5nIFF14buRYyBSZWRcclxuXHRcdFx0UHJvbWlzZS5hbGwoY2MuUmVkVC5zZXR0aW5nLnRvcEh1LmRhdGFbJ3ZxX3JlZCddLmZpbHRlcihmdW5jdGlvbiAodGVtcCkge1xyXG5cdFx0XHRcdHJldHVybiB0ZW1wLnJlZCA9PSB0cnVlO1xyXG5cdFx0XHR9KSlcclxuXHRcdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGgxMDAgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uICh0ZW1wKSB7IHJldHVybiB0ZW1wLnR5cGUgPT0gMTAwIH0pO1xyXG5cdFx0XHRcdFx0bGV0IGgxayA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKHRlbXApIHsgcmV0dXJuIHRlbXAudHlwZSA9PSAxMDAwIH0pO1xyXG5cdFx0XHRcdFx0bGV0IGgxMGsgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uICh0ZW1wKSB7IHJldHVybiB0ZW1wLnR5cGUgPT0gMTAwMDAgfSk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IHIxMDAgPSBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvblZRUmVkLmh1MTAwLnN0cmluZyk7XHJcblx0XHRcdFx0XHRsZXQgcjFrID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25WUVJlZC5odTFrLnN0cmluZyk7XHJcblx0XHRcdFx0XHRsZXQgcjEwayA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uVlFSZWQuaHUxMGsuc3RyaW5nKTtcclxuXHJcblx0XHRcdFx0XHRpZiAocjEwMCAtIGgxMDBbMF0uYmV0ICE9IDApIHtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvblZRUmVkLmh1MTAwLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvblZRUmVkLmh1MTAwLnN0cmluZyksIGgxMDBbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvblZRUmVkVGVtcC5odTEwMCwgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25WUVJlZFRlbXAuaHUxMDAuc3RyaW5nKSwgaDEwMFswXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChyMWsgLSBoMWtbMF0uYmV0ICE9IDApIHtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvblZRUmVkLmh1MWssIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uVlFSZWQuaHUxay5zdHJpbmcpLCBoMWtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvblZRUmVkVGVtcC5odTFrLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvblZRUmVkVGVtcC5odTFrLnN0cmluZyksIGgxa1swXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHIxMGsgLSBoMTBrWzBdLmJldCAhPSAwKSB7XHJcblx0XHRcdFx0XHRcdGhlbHBlci5udW1iZXJUbyh0aGlzLmljb25WUVJlZC5odTEwaywgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25WUVJlZC5odTEway5zdHJpbmcpLCBoMTBrWzBdLmJldCwgNDkwMCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdGhlbHBlci5udW1iZXJUbyh0aGlzLmljb25WUVJlZFRlbXAuaHUxMGssIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uVlFSZWRUZW1wLmh1MTBrLnN0cmluZyksIGgxMGtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdC8vIENhbmR5XHJcblx0XHRcdFByb21pc2UuYWxsKGNjLlJlZFQuc2V0dGluZy50b3BIdS5kYXRhWydjYW5keSddLmZpbHRlcihmdW5jdGlvbiAodGVtcCkge1xyXG5cdFx0XHRcdHJldHVybiB0ZW1wLnJlZCA9PSB0cnVlO1xyXG5cdFx0XHR9KSlcclxuXHRcdFx0XHQudGhlbihyZXN1bHQgPT4ge1xyXG5cdFx0XHRcdFx0bGV0IGgxMDAgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uICh0ZW1wKSB7IHJldHVybiB0ZW1wLnR5cGUgPT0gMTAwIH0pO1xyXG5cdFx0XHRcdFx0bGV0IGgxayA9IHJlc3VsdC5maWx0ZXIoZnVuY3Rpb24gKHRlbXApIHsgcmV0dXJuIHRlbXAudHlwZSA9PSAxMDAwIH0pO1xyXG5cdFx0XHRcdFx0bGV0IGgxMGsgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uICh0ZW1wKSB7IHJldHVybiB0ZW1wLnR5cGUgPT0gMTAwMDAgfSk7XHJcblxyXG5cdFx0XHRcdFx0bGV0IHIxMDAgPSBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvbkNhbmR5Lmh1MTAwLnN0cmluZyk7XHJcblx0XHRcdFx0XHRsZXQgcjFrID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25DYW5keS5odTFrLnN0cmluZyk7XHJcblx0XHRcdFx0XHRsZXQgcjEwayA9IGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uQ2FuZHkuaHUxMGsuc3RyaW5nKTtcclxuXHJcblx0XHRcdFx0XHRpZiAocjEwMCAtIGgxMDBbMF0uYmV0ICE9IDApIHtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvbkNhbmR5Lmh1MTAwLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvbkNhbmR5Lmh1MTAwLnN0cmluZyksIGgxMDBbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvbkNhbmR5VGVtcC5odTEwMCwgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25DYW5keVRlbXAuaHUxMDAuc3RyaW5nKSwgaDEwMFswXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHIxayAtIGgxa1swXS5iZXQgIT0gMCkge1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5pY29uQ2FuZHkuaHUxaywgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25DYW5keS5odTFrLnN0cmluZyksIGgxa1swXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5pY29uQ2FuZHlUZW1wLmh1MWssIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uQ2FuZHlUZW1wLmh1MWsuc3RyaW5nKSwgaDFrWzBdLmJldCwgNDkwMCwgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAocjEwayAtIGgxMGtbMF0uYmV0ICE9IDApIHtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvbkNhbmR5Lmh1MTBrLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvbkNhbmR5Lmh1MTBrLnN0cmluZyksIGgxMGtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvbkNhbmR5VGVtcC5odTEwaywgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25DYW5keVRlbXAuaHUxMGsuc3RyaW5nKSwgaDEwa1swXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHQvL1pldXNcclxuXHRcdFx0UHJvbWlzZS5hbGwoY2MuUmVkVC5zZXR0aW5nLnRvcEh1LmRhdGFbJ3pldXMnXS5maWx0ZXIoZnVuY3Rpb24gKHRlbXApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGVtcC5yZWQgPT0gdHJ1ZTtcclxuXHRcdFx0fSkpXHJcblx0XHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHRcdGxldCBoMTAwID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAodGVtcCkgeyByZXR1cm4gdGVtcC50eXBlID09IDEwMCB9KTtcclxuXHRcdFx0XHRcdGxldCBoMWsgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uICh0ZW1wKSB7IHJldHVybiB0ZW1wLnR5cGUgPT0gMTAwMCB9KTtcclxuXHRcdFx0XHRcdGxldCBoMTBrID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAodGVtcCkgeyByZXR1cm4gdGVtcC50eXBlID09IDEwMDAwIH0pO1xyXG5cclxuXHRcdFx0XHRcdGxldCByMTAwID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25aZXVzLmh1MTAwLnN0cmluZyk7XHJcblx0XHRcdFx0XHRsZXQgcjFrID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25aZXVzLmh1MWsuc3RyaW5nKTtcclxuXHRcdFx0XHRcdGxldCByMTBrID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25aZXVzLmh1MTBrLnN0cmluZyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHIxMDAgLSBoMTAwWzBdLmJldCAhPSAwKSB7XHJcblx0XHRcdFx0XHRcdGhlbHBlci5udW1iZXJUbyh0aGlzLmljb25aZXVzLmh1MTAwLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvblpldXMuaHUxMDAuc3RyaW5nKSwgaDEwMFswXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5pY29uWmV1c1RlbXAuaHUxMDAsIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uWmV1c1RlbXAuaHUxMDAuc3RyaW5nKSwgaDEwMFswXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHIxayAtIGgxa1swXS5iZXQgIT0gMCkge1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5pY29uWmV1cy5odTFrLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvblpldXMuaHUxay5zdHJpbmcpLCBoMWtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvblpldXNUZW1wLmh1MWssIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uWmV1c1RlbXAuaHUxay5zdHJpbmcpLCBoMWtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChyMTBrIC0gaDEwa1swXS5iZXQgIT0gMCkge1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5pY29uWmV1cy5odTEwaywgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25aZXVzLmh1MTBrLnN0cmluZyksIGgxMGtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvblpldXNUZW1wLmh1MTBrLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvblpldXNUZW1wLmh1MTBrLnN0cmluZyksIGgxMGtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0Ly8gTG9uZyBMYW5cclxuXHRcdFx0UHJvbWlzZS5hbGwoY2MuUmVkVC5zZXR0aW5nLnRvcEh1LmRhdGFbJ2xvbmcnXS5maWx0ZXIoZnVuY3Rpb24gKHRlbXApIHtcclxuXHRcdFx0XHRyZXR1cm4gdGVtcC5yZWQgPT0gdHJ1ZTtcclxuXHRcdFx0fSkpXHJcblx0XHRcdFx0LnRoZW4ocmVzdWx0ID0+IHtcclxuXHRcdFx0XHRcdGxldCBoMTAwID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAodGVtcCkgeyByZXR1cm4gdGVtcC50eXBlID09IDEwMCB9KTtcclxuXHRcdFx0XHRcdGxldCBoMWsgPSByZXN1bHQuZmlsdGVyKGZ1bmN0aW9uICh0ZW1wKSB7IHJldHVybiB0ZW1wLnR5cGUgPT0gMTAwMCB9KTtcclxuXHRcdFx0XHRcdGxldCBoMTBrID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAodGVtcCkgeyByZXR1cm4gdGVtcC50eXBlID09IDEwMDAwIH0pO1xyXG5cclxuXHRcdFx0XHRcdGxldCByMTAwID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25Mb25nTGFuLmh1MTAwLnN0cmluZyk7XHJcblx0XHRcdFx0XHRsZXQgcjFrID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25Mb25nTGFuLmh1MWsuc3RyaW5nKTtcclxuXHRcdFx0XHRcdGxldCByMTBrID0gaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25Mb25nTGFuLmh1MTBrLnN0cmluZyk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKHIxMDAgLSBoMTAwWzBdLmJldCAhPSAwKSB7XHJcblx0XHRcdFx0XHRcdGhlbHBlci5udW1iZXJUbyh0aGlzLmljb25Mb25nTGFuLmh1MTAwLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvbkxvbmdMYW4uaHUxMDAuc3RyaW5nKSwgaDEwMFswXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5pY29uTG9uZ0xhblRlbXAuaHUxMDAsIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uTG9uZ0xhblRlbXAuaHUxMDAuc3RyaW5nKSwgaDEwMFswXS5iZXQsIDQ5MDAsIHRydWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHIxayAtIGgxa1swXS5iZXQgIT0gMCkge1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5pY29uTG9uZ0xhbi5odTFrLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvbkxvbmdMYW4uaHUxay5zdHJpbmcpLCBoMWtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvbkxvbmdMYW5UZW1wLmh1MWssIGhlbHBlci5nZXRPbmx5TnVtYmVySW5TdHJpbmcodGhpcy5pY29uTG9uZ0xhblRlbXAuaHUxay5zdHJpbmcpLCBoMWtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChyMTBrIC0gaDEwa1swXS5iZXQgIT0gMCkge1xyXG5cdFx0XHRcdFx0XHRoZWxwZXIubnVtYmVyVG8odGhpcy5pY29uTG9uZ0xhbi5odTEwaywgaGVscGVyLmdldE9ubHlOdW1iZXJJblN0cmluZyh0aGlzLmljb25Mb25nTGFuLmh1MTBrLnN0cmluZyksIGgxMGtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0aGVscGVyLm51bWJlclRvKHRoaXMuaWNvbkxvbmdMYW5UZW1wLmh1MTBrLCBoZWxwZXIuZ2V0T25seU51bWJlckluU3RyaW5nKHRoaXMuaWNvbkxvbmdMYW5UZW1wLmh1MTBrLnN0cmluZyksIGgxMGtbMF0uYmV0LCA0OTAwLCB0cnVlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG59KTtcclxuIl19