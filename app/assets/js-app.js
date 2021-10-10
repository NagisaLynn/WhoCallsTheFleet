"use strict";

var _this29 = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Ship = KC.Ship,
    Equipment = KC.Equipment,
    Entity = KC.Entity,
    Consumable = KC.Consumable,
    Formula = KC.formula;
if (!root) var root = self;
_g.animate_duration_delay = 320;
_g.inputIndex = 0;
_g.lang = KC.lang;
_g.joint = KC.joint;
_g.defaultHqLv = 90;
_g.shipMaxLv = Ship.lvlMax;
_g.hqMaxLv = KC.maxHqLv;
_g.resourcesTable = ['fuel', 'ammo', 'steel', 'bauxite'];
_g.isNWjs = typeof node != 'undefined' || typeof nw != 'undefined';
_g.isWebApp = navigator.standalone || _g.uriSearch('utm_source') == 'web_app_manifest';
_g.isUWP = typeof Windows !== 'undefined' && typeof Windows.UI !== 'undefined' && typeof Windows.UI.Notifications !== 'undefined';
_g.isClient = _g.isNWjs || _g.isWebApp || _g.isUWP;

function eventName(event, name) {
  name = name ? '.' + name : '';
  if (_g.event[event]) return _g.event[event].split(' ').map(function (value) {
    return value + name;
  }).join(' ');
  return event + name;
}

_g.updateDefaultHqLv = function (val) {
  val = parseInt(val) || _g.defaultHqLv;
  if (val <= 0) val = _g.defaultHqLv;

  if (val != Lockr.get('hqLvDefault', _g.defaultHqLv)) {
    Lockr.set('hqLvDefault', val);
    clearTimeout(_g.delay_updateDefaultHqLv);
    _g.delay_updateDefaultHqLv = setTimeout(function () {
      $body.trigger('update_defaultHqLv', [val]);
      clearTimeout(_g.delay_updateDefaultHqLv);
      _g.delay_updateDefaultHqLv = null;
    }, 200);
  }
};

_g.stats = [['fire', '火力'], ['torpedo', '雷装'], ['aa', '对空'], ['asw', '对潜'], ['bomb', '爆装'], ['hit', '命中'], ['armor', '装甲'], ['evasion', '回避'], ['los', '索敌'], ['range', '射程']];
_g.statSpeed = KC.statSpeed;
_g.statRange = KC.statRange;
_g.textRank = KC.textRank;
_g.getStatSpeed = KC.getStatSpeed;
_g.getStatRange = KC.getStatRange;

_g.getStatSpeedNumber = function (speed) {
  for (var i in _g.statSpeed) {
    if (_g.statSpeed[i] == speed) return i;
  }

  return -1;
};

_g.getSize = function (bytes, target) {
  target = target.toUpperCase();
  if (target[target.length - 1] == 'B') target = target.substr(0, target.length - 1);

  function _r(r) {
    return Math.floor(r * 100) / 100;
  }

  bytes = bytes / 1024;
  if (target == 'K') return _r(bytes) + 'KB';
  bytes = bytes / 1024;
  if (target == 'M') return _r(bytes) + 'MB';
  bytes = bytes / 1024;
  if (target == 'G') return _r(bytes) + 'GB';
  bytes = bytes / 1024;
  if (target == 'T') return _r(bytes) + 'TB';
};

var _l = {};
var Support = {};

Support._webp = function () {
  var elem = document.createElement('canvas');

  if (!!(elem.getContext && elem.getContext('2d'))) {
    return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
  } else {
    return false;
  }
};

Support['webp'] = _g.isClient ? true : Support._webp();
_g.imgExt = Support['webp'] ? 'web' + 'p' : 'png';

String.prototype.printf = function () {
  if (typeof vsprintf != 'undefined') return vsprintf(this, Array.prototype.slice.call(arguments));
  return this;
};

_g.badge = function (cont, t) {
  if (typeof t == 'string') t = t.toLowerCase();

  switch (t) {
    case 'error':
      return _g.badgeError(cont);
      break;

    default:
      return _g.badgeMsg(cont);
      break;
  }
};

_g.badgeMsg = function (cont) {
  _frame.dom.layout.attr('data-msgbadge', cont);

  clearTimeout(this.timeout_badgeMsg_hiding);
  this.timeout_badgeMsg_hiding = setTimeout(function () {
    _frame.dom.layout.removeAttr('data-msgbadge');

    delete _g.timeout_badgeMsg_hiding;
  }, 3000);
};

_g.badgeError = function (cont, persist) {
  _frame.dom.layout.attr('data-errorbadge', cont);

  clearTimeout(this.timeout_badgeError_hiding);
  if (!persist) this.timeout_badgeError_hiding = setTimeout(function () {
    _frame.dom.layout.removeAttr('data-errorbadge');

    delete _g.timeout_badgeError_hiding;
  }, 3000);
};

_g.pageChangeBefore = function () {
  _frame.dom.mobilemenu.prop('checked', false);

  _frame.modal.hide();
};

_g.title = function (t) {
  if (!t) {
    var f = document.title.split(' - ');
    if (f.length == 1) return f[0];
    f.pop();
    return f.join(' - ');
  }

  if (_frame.dom.title) _frame.dom.title.text(t === true ? '是谁呼叫舰队' : t);
  return t;
};

setTimeout(function () {
  $body.on('mousewheel', 'input[type="number"]', function (evt) {
    var el = evt.target;
  });
}, 0);
{
  _g.index = {
    ships: {},
    equipments: {}
  };

  _g.buildIndex = function () {
    var shipnamesuffix = {};

    function _build(datalist, n) {
      for (var i in datalist) {
        var ids = n == 'ships' ? datalist[i].getSeriesData().map(function (o) {
          return o.id;
        }) : [datalist[i].id];
        if (ids.push && ids.length == 0) ids = [datalist[i].id];

        for (var j in datalist[i].name) {
          if (datalist[i].name[j]) {
            var name = datalist[i].name[j];

            if (j != 'suffix') {
              (function () {
                var _n = name.toLowerCase();

                if (!_g.index[n][_n]) _g.index[n][_n] = [];
                ids.forEach(function (thisId) {
                  if (!_g.index[n][_n].some(function (thisObj) {
                    return thisObj.id == thisId;
                  })) {
                    _g.index[n][_n].push(datalist[thisId]);
                  }
                });
              })();
            } else if (n == 'ships') {
              if (!shipnamesuffix[name]) shipnamesuffix[name] = [];
              shipnamesuffix[name].push(datalist[i]);
            }
          }
        }
      }
    }

    _build(_g.data.ships, 'ships');

    _build(_g.data.items, 'equipments');

    var _loop = function _loop(i) {
      var suffix = _g.data.ship_namesuffix[i];
      var keys = ['ja_jp', 'ja_romaji', 'zh_cn'];
      keys.forEach(function (key) {
        _g.index.ships[suffix[key]] = shipnamesuffix[suffix.id];
      });
    };

    for (var i in _g.data.ship_namesuffix) {
      _loop(i);
    }
  };

  _g.search = function (q, t) {
    t = _g.index[t];
    var r = [],
        e = [];
    if (!t || !q) return r;
    q = q.trim().toLowerCase();

    function _concat(a) {
      r = r.concat(a.filter(function (v) {
        if (e.indexOf(t + v.id) > -1) return false;
        e.push(t + v.id);
        return true;
      }));
    }

    if (t[q]) _concat(t[q]);

    for (var i in t) {
      if (q !== i && i.indexOf(q) > -1) {
        _concat(t[i]);
      }
    }

    return r;
  };

  _g.searchTest = function (q, t) {
    var r = [];
    q = _g.search(q, t);

    for (var i in q) {
      r.push(q[i]._name || q[i].name[_g.lang]);
    }

    return r;
  };
}
{
  setTimeout(function () {
    document.body.addEventListener("scroll", function (e) {
      if (e.target.hasAttribute('scrollbody')) {
        e.target.setAttribute('scrollbody', e.target.scrollTop);
      }
    }, true);
  });
}
var _ga = {
  counter: function counter(path, title, screenName) {
    if (debugmode) return true;
    title = _frame.app_main.title;

    _frame.dom.hiddenIframe[0].contentWindow.location.replace(node.url.format('http://fleet.moe/ga.html' + path + (title ? '&title=' + encodeURIComponent(title) : '')));
  }
};
_g.kancolle_calc = {
  version: 4,
  max_fleets: 4,
  max_ships_per_fleet: 6,
  max_equipments_per_ship: 4,
  decode: function decode(data, version) {
    if (!data) return;
    if (typeof data == 'string') data = JSON.parse(data);
    if (_typeof(data) != 'object') return;
    version = parseInt(data.version) || this.version;
    var result,
        i = 0,
        j = 0,
        k = 0,
        data_fleet,
        data_ship,
        data_item,
        max_fleets = 4,
        max_ships_per_fleet = 6;

    switch (version) {
      case 3:
        result = [];
        i = 0;

        while (i < max_fleets) {
          data_fleet = data['f' + (i + 1)];
          result[i] = [];

          if (data_fleet) {
            j = 0;

            while (j < Math.max(max_ships_per_fleet, data_fleet._size)) {
              data_ship = data_fleet['s' + (j + 1)];

              if (data_ship && data_ship.id) {
                result[i][j] = [data_ship.id, [data_ship.lv || null, data_ship.luck || -1], [], [], []];

                if (data_ship.items) {
                  k = 0;

                  while (k < _g.kancolle_calc.max_equipments_per_ship) {
                    data_item = data_ship.items['i' + (k + 1)];

                    if (data_item && data_item.id) {
                      result[i][j][2][k] = data_item.id;
                      result[i][j][3][k] = data_item.rf || null;
                      result[i][j][4][k] = data_item.rp || null;
                    } else {
                      result[i][j][2][k] = null;
                      result[i][j][3][k] = null;
                      result[i][j][4][k] = null;
                    }

                    k++;
                  }
                }
              } else {
                result[i][j] = null;
              }

              j++;
            }
          }

          i++;
        }

        var data_airfields = data['fField'];

        if (data_airfields) {
          result[4] = [];
          j = 0;

          while (j < 3) {
            result[4][j] = [];
            var data_field = data_airfields['f' + (j + 1)] || {};
            k = 0;

            while (k < 4) {
              result[4][j][k] = [];
              var data_aircraft = data_field['i' + (k + 1)];

              if (data_aircraft) {
                result[4][j][k][0] = data_aircraft.id;
                result[4][j][k][1] = data_aircraft.rp;
                result[4][j][k][2] = data_aircraft.rf;
              }

              k++;
            }

            j++;
          }
        }

        break;

      case 4:
        result = [];
        i = 0;

        while (i < max_fleets) {
          data_fleet = data['f' + (i + 1)];

          var _fleet = result[i] = [];

          if (data_fleet) {
            j = 0;

            while (j < Math.max(max_ships_per_fleet, data_fleet._size)) {
              data_ship = data_fleet['s' + (j + 1)];

              if (data_ship && data_ship.id) {
                var ship = _g.data.ships[data_ship.id],
                    _ship = _fleet[j] = [data_ship.id, [data_ship.lv || null, data_ship.luck || -1], [], [], []];

                if (data_ship.items) {
                  k = 0;
                  var extraslot = void 0;

                  for (var key in data_ship.items) {
                    if (key === 'ix') {
                      extraslot = data_ship.items[key];
                      continue;
                    }

                    if (key.substr(0, 1) !== 'i' || !data_ship.items[key].id) {
                      continue;
                    }

                    var obj = data_ship.items[key];
                    var number = parseInt(key.substr(1));
                    var index = number < 5 ? number - 1 : number;

                    if (number > ship.slot.length) {
                      extraslot = obj;
                    } else {
                      _ship[2][index] = obj.id;
                      _ship[3][index] = obj.rf || null;
                      _ship[4][index] = obj.mas || null;
                    }
                  }

                  if (extraslot && extraslot.id) {
                    _ship[2][4] = extraslot.id;
                    _ship[3][4] = extraslot.rf || null;
                    _ship[4][4] = extraslot.mas || null;
                  }
                }

                _ship.forEach(function (v) {
                  if (Array.isArray(v)) {
                    for (var _i = 0; _i < v.length; _i++) {
                      if (!v[_i]) v[_i] = null;
                    }
                  }
                });
              } else {
                _fleet[j] = null;
              }

              j++;
            }
          }

          i++;
        }

        var data_airfields = data['fField'];

        if (data_airfields) {
          result[4] = [];
          j = 0;

          while (j < 3) {
            result[4][j] = [];
            var data_field = data_airfields['f' + (j + 1)] || {};
            k = 0;

            while (k < 4) {
              result[4][j][k] = [];
              var data_aircraft = data_field['i' + (k + 1)];

              if (data_aircraft) {
                result[4][j][k][0] = data_aircraft.id;
                result[4][j][k][1] = data_aircraft.mas;
                result[4][j][k][2] = data_aircraft.rf;
              }

              k++;
            }

            j++;
          }
        }

        break;
    }

    return result;
  },
  encode: function encode(data, version) {
    if (!data) return;
    if (!data.length || !data.push) data = JSON.parse(data);
    if (!data.length || !data.push) return;
    version = parseInt(version) || this.version;
    var result,
        max_fleets = this.max_fleets,
        empty;

    switch (version) {
      case 3:
        result = {
          'version': 3
        };
        data.forEach(function (data_fleet, i) {
          if (data_fleet) {
            if (i < max_fleets) {
              result['f' + (i + 1)] = {};
              data_fleet.forEach(function (data_ship, j) {
                if (data_ship && data_ship[0]) {
                  result['f' + (i + 1)]['s' + (j + 1)] = {
                    'id': parseInt(data_ship[0]),
                    'lv': parseInt(data_ship[1][0]) || null,
                    'luck': parseInt(data_ship[1][1]) || -1,
                    'items': {
                      'ix': {}
                    }
                  };
                  data_ship[2].forEach(function (id_item, k) {
                    if (id_item) {
                      var itemNo = k > 4 ? k : k + 1;
                      result['f' + (i + 1)]['s' + (j + 1)].items['i' + itemNo] = {
                        'id': parseInt(id_item)
                      };
                      if (data_ship[3]) result['f' + (i + 1)]['s' + (j + 1)].items['i' + itemNo].rf = parseInt(data_ship[3][k]) || 0;
                      if (data_ship[4]) result['f' + (i + 1)]['s' + (j + 1)].items['i' + itemNo].rp = parseInt(data_ship[4][k]) || 0;
                    }
                  });
                }
              });
            } else if (i == 4) {
              result['fField'] = {};
              data_fleet.forEach(function (data_field, j) {
                if (data_field) {
                  result['fField']['f' + (j + 1)] = {};
                  data_field.forEach(function (data_aircraft, k) {
                    if (data_aircraft && data_aircraft[0]) {
                      result['fField']['f' + (j + 1)]['i' + (k + 1)] = {
                        'id': data_aircraft[0],
                        'rp': data_aircraft[1],
                        'rf': data_aircraft[2]
                      };
                    }
                  });
                }
              });
            }
          }
        });
        break;

      case 4:
        result = {
          'version': 4
        };
        data.forEach(function (data_fleet, i) {
          if (data_fleet) {
            if (i < max_fleets) {
              var _fleet = result['f' + (i + 1)] = {};

              data_fleet.forEach(function (data_ship, j) {
                if (data_ship && data_ship[0]) {
                  var ship = _g.data.ships[parseInt(data_ship[0])],
                      _ship = _fleet['s' + (j + 1)] = {
                    'id': parseInt(data_ship[0]),
                    'lv': parseInt(data_ship[1][0]) || empty,
                    'luck': parseInt(data_ship[1][1]) || -1,
                    'items': {}
                  };

                  data_ship[2].forEach(function (id_item, k) {
                    if (id_item) {
                      var prop = k == 4 ? ship.slot.length < 4 ? ["i".concat(ship.slot.length + 1)] : 'ix' : ["i".concat(k > 4 ? k : k + 1)];
                      _ship.items[prop] = {
                        'id': parseInt(id_item)
                      };
                      var _item = _ship.items[prop];
                      if (data_ship[3]) _item.rf = parseInt(data_ship[3][k]) || 0;
                      if (data_ship[4]) _item.mas = parseInt(data_ship[4][k]) || 0;
                    }
                  });
                }
              });
            } else if (i == 4) {
              result['fField'] = {};
              data_fleet.forEach(function (data_field, j) {
                if (data_field) {
                  result['fField']['f' + (j + 1)] = {};
                  data_field.forEach(function (data_aircraft, k) {
                    if (data_aircraft && data_aircraft[0]) {
                      result['fField']['f' + (j + 1)]['i' + (k + 1)] = {
                        'id': data_aircraft[0],
                        'mas': data_aircraft[1],
                        'rf': data_aircraft[2]
                      };
                    }
                  });
                }
              });
            }
          }
        });
        break;
    }

    return result;
  }
};
_g.events = [{
  code: 'leyteB',
  title: {
    ja_jp: '捷号決戦！邀撃、レイテ沖海戦(後篇)',
    zh_cn: '捷号决战！迎击莱特湾海战（后篇）'
  },
  start: 1510844400000,
  end: 1521770400000
}, {
  code: 'hawaii2nd',
  title: {
    ja_jp: '発動！友軍救援「第二次ハワイ作戦」',
    zh_cn: '发动！友军救援“第二次夏威夷作战”'
  },
  historicalFleets: ['E1: 第四百战队', 'E2: 第二舰队 & 其他加强舰', 'E3: 第五战队 & 苏联友军', 'E4: 参与珍珠港空袭'],
  start: 1558364400000,
  end: 1561428000000
}];

_g.getCurrentEvent = function (now) {
  if (now instanceof Date) now = now.valueOf;else if (typeof now === 'string') now = parseInt(now);else if (!now) now = new Date().valueOf();
  return _g.events.filter(function (event) {
    return now >= event.start && now < event.end;
  });
};

var YuubariFrame = function () {
  function YuubariFrame() {
    _classCallCheck(this, YuubariFrame);

    _defineProperty(this, "enabled", false);

    _defineProperty(this, "iframe", undefined);

    _defineProperty(this, "frame", undefined);

    if (typeof node === 'undefined') return;
    if (!node.path) return;
    var localCheck = node.path.resolve(_g.root, '../Yuubari');

    if (node.fs.existsSync(localCheck)) {
      this.enabled = true;
      this.root = 'http://localhost:8703/';
    }
  }

  _createClass(YuubariFrame, [{
    key: "init",
    value: function init() {
      if (!this.enabled) return;
      _frame.dom.yuubariFrame = $('<div class="yuubari-frame"/>').appendTo(_frame.dom.main);
      _frame.dom.yuubariFrameIframe = $("<iframe src=\"".concat(this.root, "?v0\" allowTransparent />")).appendTo(_frame.dom.yuubariFrame);
      this.iframe = _frame.dom.yuubariFrameIframe;
      this.frame = _frame.dom.yuubariFrameIframe[0].contentWindow;
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.enabled) return;
    }
  }, {
    key: "hide",
    value: function hide() {
      if (!this.enabled) return;
    }
  }, {
    key: "go",
    value: function go(route) {
      if (!this.enabled) return;
    }
  }, {
    key: "replace",
    value: function replace(route) {
      if (!this.enabled) return;
    }
  }, {
    key: "message",
    value: function message(msg) {
      if (!this.enabled) return;
    }
  }]);

  return YuubariFrame;
}();

var canvas = {
  isSupport: window.CanvasRenderingContext2D ? true : false
};

(function (f) {
  if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object" && typeof module !== "undefined") {
    module.exports = f();
  } else if (typeof define === "function" && define.amd) {
    define([], f);
  } else {
    var g;

    if (typeof window !== "undefined") {
      g = window;
    } else if (typeof global !== "undefined") {
      g = global;
    } else if (typeof self !== "undefined") {
      g = self;
    } else {
      g = this;
    }

    g.canvas.blur = f();
  }
})(function () {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) return a(o, !0);
          if (i) return i(o, !0);
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }

        var l = n[o] = {
          exports: {}
        };
        t[o][0].call(l.exports, function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }

      return n[o].exports;
    }

    var i = typeof require == "function" && require;

    for (var o = 0; o < r.length; o++) {
      s(r[o]);
    }

    return s;
  }({
    1: [function (require, module, exports) {
      var mul_table = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259];
      var shg_table = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24];

      function processImage(img, canvas, radius, blurAlphaChannel) {
        if (typeof img == 'string') {
          var img = document.getElementById(img);
        } else if (!img instanceof HTMLImageElement) {
          return;
        }

        var w = img.naturalWidth;
        var h = img.naturalHeight;

        if (typeof canvas == 'string') {
          var canvas = document.getElementById(canvas);
        } else if (!canvas instanceof HTMLCanvasElement) {
          return;
        }

        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        canvas.width = w;
        canvas.height = h;
        var context = canvas.getContext('2d');
        context.clearRect(0, 0, w, h);
        context.drawImage(img, 0, 0);
        if (isNaN(radius) || radius < 1) return;
        if (blurAlphaChannel) processCanvasRGBA(canvas, 0, 0, w, h, radius);else processCanvasRGB(canvas, 0, 0, w, h, radius);
      }

      function getImageDataFromCanvas(canvas, top_x, top_y, width, height) {
        if (typeof canvas == 'string') var canvas = document.getElementById(canvas);else if (!canvas instanceof HTMLCanvasElement) return;
        var context = canvas.getContext('2d');
        var imageData;

        try {
          try {
            imageData = context.getImageData(top_x, top_y, width, height);
          } catch (e) {
            try {
              netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
              imageData = context.getImageData(top_x, top_y, width, height);
            } catch (e) {
              alert("Cannot access local image");
              throw new Error("unable to access local image data: " + e);
              return;
            }
          }
        } catch (e) {
          alert("Cannot access image");
          throw new Error("unable to access image data: " + e);
        }

        return imageData;
      }

      function processCanvasRGBA(canvas, top_x, top_y, width, height, radius) {
        if (isNaN(radius) || radius < 1) return;
        radius |= 0;
        var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);
        imageData = processImageDataRGBA(imageData, top_x, top_y, width, height, radius);
        canvas.getContext('2d').putImageData(imageData, top_x, top_y);
      }

      function processImageDataRGBA(imageData, top_x, top_y, width, height, radius) {
        var pixels = imageData.data;
        var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
        var div = radius + radius + 1;
        var w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack = stackStart;

        for (i = 1; i < div; i++) {
          stack = stack.next = new BlurStack();
          if (i == radiusPlus1) var stackEnd = stack;
        }

        stack.next = stackStart;
        var stackIn = null;
        var stackOut = null;
        yw = yi = 0;
        var mul_sum = mul_table[radius];
        var shg_sum = shg_table[radius];

        for (y = 0; y < height; y++) {
          r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          a_sum += sumFactor * pa;
          stack = stackStart;

          for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
          }

          for (i = 1; i < radiusPlus1; i++) {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
            a_sum += (stack.a = pa = pixels[p + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack = stack.next;
          }

          stackIn = stackStart;
          stackOut = stackEnd;

          for (x = 0; x < width; x++) {
            pixels[yi + 3] = pa = a_sum * mul_sum >> shg_sum;

            if (pa != 0) {
              pa = 255 / pa;
              pixels[yi] = (r_sum * mul_sum >> shg_sum) * pa;
              pixels[yi + 1] = (g_sum * mul_sum >> shg_sum) * pa;
              pixels[yi + 2] = (b_sum * mul_sum >> shg_sum) * pa;
            } else {
              pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            r_in_sum += stackIn.r = pixels[p];
            g_in_sum += stackIn.g = pixels[p + 1];
            b_in_sum += stackIn.b = pixels[p + 2];
            a_in_sum += stackIn.a = pixels[p + 3];
            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += 4;
          }

          yw += width;
        }

        for (x = 0; x < width; x++) {
          g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
          yi = x << 2;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          a_sum += sumFactor * pa;
          stack = stackStart;

          for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
          }

          yp = width;

          for (i = 1; i <= radius; i++) {
            yi = yp + x << 2;
            r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
            a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack = stack.next;

            if (i < heightMinus1) {
              yp += width;
            }
          }

          yi = x;
          stackIn = stackStart;
          stackOut = stackEnd;

          for (y = 0; y < height; y++) {
            p = yi << 2;
            pixels[p + 3] = pa = a_sum * mul_sum >> shg_sum;

            if (pa > 0) {
              pa = 255 / pa;
              pixels[p] = (r_sum * mul_sum >> shg_sum) * pa;
              pixels[p + 1] = (g_sum * mul_sum >> shg_sum) * pa;
              pixels[p + 2] = (b_sum * mul_sum >> shg_sum) * pa;
            } else {
              pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            r_sum += r_in_sum += stackIn.r = pixels[p];
            g_sum += g_in_sum += stackIn.g = pixels[p + 1];
            b_sum += b_in_sum += stackIn.b = pixels[p + 2];
            a_sum += a_in_sum += stackIn.a = pixels[p + 3];
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += width;
          }
        }

        return imageData;
      }

      function processCanvasRGB(canvas, top_x, top_y, width, height, radius) {
        if (isNaN(radius) || radius < 1) return;
        radius |= 0;
        var imageData = getImageDataFromCanvas(canvas, top_x, top_y, width, height);
        imageData = processImageDataRGB(imageData, top_x, top_y, width, height, radius);
        canvas.getContext('2d').putImageData(imageData, top_x, top_y);
      }

      function processImageDataRGB(imageData, top_x, top_y, width, height, radius) {
        var pixels = imageData.data;
        var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, r_out_sum, g_out_sum, b_out_sum, r_in_sum, g_in_sum, b_in_sum, pr, pg, pb, rbs;
        var div = radius + radius + 1;
        var w4 = width << 2;
        var widthMinus1 = width - 1;
        var heightMinus1 = height - 1;
        var radiusPlus1 = radius + 1;
        var sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2;
        var stackStart = new BlurStack();
        var stack = stackStart;

        for (i = 1; i < div; i++) {
          stack = stack.next = new BlurStack();
          if (i == radiusPlus1) var stackEnd = stack;
        }

        stack.next = stackStart;
        var stackIn = null;
        var stackOut = null;
        yw = yi = 0;
        var mul_sum = mul_table[radius];
        var shg_sum = shg_table[radius];

        for (y = 0; y < height; y++) {
          r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          stack = stackStart;

          for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
          }

          for (i = 1; i < radiusPlus1; i++) {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            stack = stack.next;
          }

          stackIn = stackStart;
          stackOut = stackEnd;

          for (x = 0; x < width; x++) {
            pixels[yi] = r_sum * mul_sum >> shg_sum;
            pixels[yi + 1] = g_sum * mul_sum >> shg_sum;
            pixels[yi + 2] = b_sum * mul_sum >> shg_sum;
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            p = yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1) << 2;
            r_in_sum += stackIn.r = pixels[p];
            g_in_sum += stackIn.g = pixels[p + 1];
            b_in_sum += stackIn.b = pixels[p + 2];
            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            stackOut = stackOut.next;
            yi += 4;
          }

          yw += width;
        }

        for (x = 0; x < width; x++) {
          g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;
          yi = x << 2;
          r_out_sum = radiusPlus1 * (pr = pixels[yi]);
          g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
          b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
          r_sum += sumFactor * pr;
          g_sum += sumFactor * pg;
          b_sum += sumFactor * pb;
          stack = stackStart;

          for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
          }

          yp = width;

          for (i = 1; i <= radius; i++) {
            yi = yp + x << 2;
            r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            stack = stack.next;

            if (i < heightMinus1) {
              yp += width;
            }
          }

          yi = x;
          stackIn = stackStart;
          stackOut = stackEnd;

          for (y = 0; y < height; y++) {
            p = yi << 2;
            pixels[p] = r_sum * mul_sum >> shg_sum;
            pixels[p + 1] = g_sum * mul_sum >> shg_sum;
            pixels[p + 2] = b_sum * mul_sum >> shg_sum;
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            p = x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width << 2;
            r_sum += r_in_sum += stackIn.r = pixels[p];
            g_sum += g_in_sum += stackIn.g = pixels[p + 1];
            b_sum += b_in_sum += stackIn.b = pixels[p + 2];
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            stackOut = stackOut.next;
            yi += width;
          }
        }

        return imageData;
      }

      function BlurStack() {
        this.r = 0;
        this.g = 0;
        this.b = 0;
        this.a = 0;
        this.next = null;
      }

      module.exports = {
        image: processImage,
        canvasRGBA: processCanvasRGBA,
        canvasRGB: processCanvasRGB,
        imageDataRGBA: processImageDataRGBA,
        imageDataRGB: processImageDataRGB
      };
    }, {}]
  }, {}, [1])(1);
});

canvas.downScale = function (img, scale) {
  function downScaleImage(img, scale) {
    var imgCV = document.createElement('canvas');
    imgCV.width = img.width;
    imgCV.height = img.height;
    var imgCtx = imgCV.getContext('2d');
    imgCtx.drawImage(img, 0, 0);
    return downScaleCanvas(imgCV, scale);
  }

  function downScaleCanvas(cv, scale) {
    if (!(scale < 1) || !(scale > 0)) throw 'scale must be a positive number <1 ';
    var sqScale = scale * scale;
    var sw = cv.width;
    var sh = cv.height;
    var tw = Math.floor(sw * scale);
    var th = Math.floor(sh * scale);
    var sx = 0,
        sy = 0,
        sIndex = 0;
    var tx = 0,
        ty = 0,
        yIndex = 0,
        tIndex = 0;
    var tX = 0,
        tY = 0;
    var w = 0,
        nw = 0,
        wx = 0,
        nwx = 0,
        wy = 0,
        nwy = 0;
    var crossX = false;
    var crossY = false;
    var sBuffer = cv.getContext('2d').getImageData(0, 0, sw, sh).data;
    var tBuffer = new Float32Array(3 * tw * th);
    var sR = 0,
        sG = 0,
        sB = 0;

    for (sy = 0; sy < sh; sy++) {
      ty = sy * scale;
      tY = 0 | ty;
      yIndex = 3 * tY * tw;
      crossY = tY != (0 | ty + scale);

      if (crossY) {
        wy = tY + 1 - ty;
        nwy = ty + scale - tY - 1;
      }

      for (sx = 0; sx < sw; sx++, sIndex += 4) {
        tx = sx * scale;
        tX = 0 | tx;
        tIndex = yIndex + tX * 3;
        crossX = tX != (0 | tx + scale);

        if (crossX) {
          wx = tX + 1 - tx;
          nwx = tx + scale - tX - 1;
        }

        sR = sBuffer[sIndex];
        sG = sBuffer[sIndex + 1];
        sB = sBuffer[sIndex + 2];

        if (!crossX && !crossY) {
          tBuffer[tIndex] += sR * sqScale;
          tBuffer[tIndex + 1] += sG * sqScale;
          tBuffer[tIndex + 2] += sB * sqScale;
        } else if (crossX && !crossY) {
          w = wx * scale;
          tBuffer[tIndex] += sR * w;
          tBuffer[tIndex + 1] += sG * w;
          tBuffer[tIndex + 2] += sB * w;
          nw = nwx * scale;
          tBuffer[tIndex + 3] += sR * nw;
          tBuffer[tIndex + 4] += sG * nw;
          tBuffer[tIndex + 5] += sB * nw;
        } else if (crossY && !crossX) {
          w = wy * scale;
          tBuffer[tIndex] += sR * w;
          tBuffer[tIndex + 1] += sG * w;
          tBuffer[tIndex + 2] += sB * w;
          nw = nwy * scale;
          tBuffer[tIndex + 3 * tw] += sR * nw;
          tBuffer[tIndex + 3 * tw + 1] += sG * nw;
          tBuffer[tIndex + 3 * tw + 2] += sB * nw;
        } else {
          w = wx * wy;
          tBuffer[tIndex] += sR * w;
          tBuffer[tIndex + 1] += sG * w;
          tBuffer[tIndex + 2] += sB * w;
          nw = nwx * wy;
          tBuffer[tIndex + 3] += sR * nw;
          tBuffer[tIndex + 4] += sG * nw;
          tBuffer[tIndex + 5] += sB * nw;
          nw = wx * nwy;
          tBuffer[tIndex + 3 * tw] += sR * nw;
          tBuffer[tIndex + 3 * tw + 1] += sG * nw;
          tBuffer[tIndex + 3 * tw + 2] += sB * nw;
          nw = nwx * nwy;
          tBuffer[tIndex + 3 * tw + 3] += sR * nw;
          tBuffer[tIndex + 3 * tw + 4] += sG * nw;
          tBuffer[tIndex + 3 * tw + 5] += sB * nw;
        }
      }
    }

    var resCV = document.createElement('canvas');
    resCV.width = tw;
    resCV.height = th;
    var resCtx = resCV.getContext('2d');
    var imgRes = resCtx.getImageData(0, 0, tw, th);
    var tByteBuffer = imgRes.data;
    var pxIndex = 0;

    for (sIndex = 0, tIndex = 0; pxIndex < tw * th; sIndex += 3, tIndex += 4, pxIndex++) {
      tByteBuffer[tIndex] = Math.ceil(tBuffer[sIndex]);
      tByteBuffer[tIndex + 1] = Math.ceil(tBuffer[sIndex + 1]);
      tByteBuffer[tIndex + 2] = Math.ceil(tBuffer[sIndex + 2]);
      tByteBuffer[tIndex + 3] = 255;
    }

    resCtx.putImageData(imgRes, 0, 0);
    return resCV;
  }

  return downScaleImage(img, scale);
};

node.require('fs');

node.require('nedb');

node.require('mkdirp');

try {
  node.require('request');
} catch (e) {}

node.require('request-progress');

node.require('semver');

node.require('url');

var Q = node.require('q'),
    markdown = node.require("markdown").markdown;

_g.event = {
  'animationend': 'webkitAnimationEnd',
  'animationiteration': 'webkitAnimationIteration',
  'transitionend': 'transitionend'
};
_g.path = {
  'db': node.path.join(_g.root, '/app-db/'),
  'page': node.path.join(_g.root, '/app/page/'),
  'bgimg_dir': node.path.join(_g.root, '/bgimgs/'),
  'bgimg_custom_dir': node.path.join(_g.root, '/app/assets/images/homebg-custom/'),
  'pics': {
    ships: node.path.join(_g.root, '/pics-ships'),
    shipsExtra: node.path.join(_g.root, '/pics-ships-extra'),
    items: node.path.join(_g.root, '/pics/items')
  }
};
KC.path.pics = _g.path.pics;

try {
  node.fs.accessSync(_g.path.bgimg_dir, node.fs.F_OK);
} catch (e) {
  _g.path.bgimg_dir = node.path.join(_g.root, '/app/assets/images/homebg/');
}

_g.pathMakeObj = function (obj) {
  for (var i in obj) {
    if (_typeof(obj[i]) == 'object') {
      _g.pathMakeObj(obj[i]);
    } else {
      node.mkdirp.sync(obj[i]);
    }
  }
};

_g.pathMakeObj(_g.path);

_g.data = {
  'entities': {},
  'items': {},
  'item_types': {},
  'ships': {},
  'ship_id_by_type': [],
  'ship_types': {},
  'ship_type_order': {},
  'ship_classes': {},
  consumables: {}
};
KC.db = _g.data;
var savedFleetFilePath = Lockr.get('fleets-builds-file');

if (!savedFleetFilePath) {
  var defaultFleetFilePath = node.path.join(node.gui.App.dataPath, '../../NeDB', 'fleets.json');

  if (!fs.existsSync(defaultFleetFilePath)) {
    defaultFleetFilePath = node.path.join(node.gui.App.dataPath, '../NeDB', 'fleets.json');
  }

  if (!fs.existsSync(defaultFleetFilePath)) {
    defaultFleetFilePath = node.path.join(node.gui.App.dataPath, 'NeDB', 'fleets.json');
  }

  savedFleetFilePath = defaultFleetFilePath;
}

var _db = {
  'fleets': new node.nedb({
    filename: savedFleetFilePath
  })
};
_g.ship_type_order = [];
_g.ship_type_order_full = [];
_g.ship_type_order_map = {};
_g.yuubariFrame = new YuubariFrame();

node.nedb.prototype.updateById = function (_id, docReplace, callback) {
  if (!this._updateByIdQueue) {
    this._updateByIdQueue = {};
    Object.defineProperty(this._updateByIdQueue, 'running', {
      enumerable: false,
      value: false,
      writable: true
    });
  }

  docReplace = docReplace || {};
  docReplace._id = _id;
  this._updateByIdQueue[_id] = {
    docReplace: docReplace,
    callback: callback || function () {}
  };

  this._updateById();
};

node.nedb.prototype._updateById = function () {
  if (!this._updateByIdQueue || this._updateByIdQueue.running) return false;

  var _id;

  for (var i in this._updateByIdQueue) {
    if (this._updateByIdQueue[i]) {
      _id = i;
      break;
    }
  }

  if (!_id) return false;
  var queue = this._updateByIdQueue[_id];
  this._updateByIdQueue[_id] = null;
  delete this._updateByIdQueue[_id];
  this._updateByIdQueue.running = true;
  this.update({
    _id: _id
  }, queue.docReplace, {}, function (err, numReplaced) {
    queue.callback.call(this, err, numReplaced);
    this._updateByIdQueue.running = false;

    this._updateById();
  }.bind(this));
};

_g.log = function () {
  if (debugmode) console.log.apply(console, arguments);
};

_g.save = function (url, n, callback) {
  _g.file_save_as(url, n, callback);
};

_g.getLink = function (t, id) {
  switch (t) {
    case 'ships':
      t = 'ship';
      break;
  }

  return "?infos=".concat(t, "&id=").concat(id);
};

_g.getImg = function (t, id, img) {
  if (t === 'ships' || t === 'shipsExtra') t = KC.getFolderGroup(_g.path.pics[t], id);else t = _g.path.pics[t];
  return "".concat(node.path.normalize(t), "/").concat(id, "/").concat(img, ".webp");
};

_frame.app_main = {
  page: {},
  page_dom: {},
  page_html: {},
  loading: ['dbs', 'bgimgs', 'db_namesuffix'],
  functions_on_ready: [],
  loaded: function loaded(item, is_instant) {
    if (item) {
      if (this.loading.indexOf(item) > -1) {
        this.loading.splice(this.loading.indexOf(item), 1);
        this.is_loaded = false;
      }
    }

    if (!this.loading.length && !this.is_loaded) {
      setTimeout(function () {
        if (_frame.app_main.is_loaded && !_frame.app_main.loading.length && !$html.hasClass('app-ready')) {
          _frame.dom.layout.addClass('ready');

          $html.addClass('app-ready');
          setTimeout(function () {
            var i = 0;

            while (_frame.app_main.functions_on_ready[i]) {
              _frame.app_main.functions_on_ready[i++]();
            }
          }, 1500);
        }
      }, is_instant ? 300 : 1000);

      if (!this.window_event_bound) {
        $window.on('popstate._global', function (e) {
          if (e.originalEvent && e.originalEvent.state) {
            _frame.app_main.state(e.originalEvent.state);
          } else {
            var _uriGet = location.search ? location.search.split('?')[1] : '',
                uriGet = {};

            _uriGet = _uriGet.split('&');

            for (var i = 0; i < _uriGet.length; i++) {
              var h = _uriGet[i].split('=');

              uriGet[h[0]] = h[1] || true;
            }

            if (!_frame.app_main.window_event_bound && !(uriGet['page'] || uriGet['infos'])) {
              _frame.app_main.load_page(Lockr.get('last_page', _frame.app_main.nav[0]['page']));
            }

            _frame.app_main.state(uriGet);
          }
        }).trigger('popstate._global');
        this.window_event_bound = true;
      }

      this.is_loaded = true;
    }
  },
  pushState: function pushState(stateObj, title, url) {
    history.pushState(stateObj, title, url);
    if (!stateObj['infos']) _frame.infos.hide();
  },
  state: function state(stateObj) {
    if (stateObj['infos']) {
      _frame.infos.show_func(stateObj['infos'], stateObj['id'], null, stateObj['infosHistoryIndex']);
    } else {
      _frame.infos.hide();
    }

    if (stateObj['page']) {
      this.load_page_func(stateObj['page']);
    }
  },
  loading_queue: [],
  loading_state: {},
  loading_start: function loading_start(url, callback_success, callback_error, callback_successAfter, callback_beforeSend, callback_complete) {
    url = url || location.pathname;
    var isUrl = true;

    if (_typeof(callback_success) == 'object') {
      isUrl = typeof callback_success.isUrl != 'undefined' ? callback_success.isUrl : true;
      callback_error = callback_success.error;
      callback_successAfter = callback_success.successAfter;
      callback_beforeSend = callback_success.beforeSend;
      callback_complete = callback_success.complete;
      callback_success = callback_success.success;
    } else if (callback_success === false) {
      isUrl = false;
    }

    callback_beforeSend = callback_beforeSend || function () {};

    callback_success = callback_success || function () {};

    callback_successAfter = callback_successAfter || function () {};

    callback_error = callback_error || function () {};

    callback_complete = callback_complete || function () {};

    this.loading_cur = url;

    if (typeof this.loading_state[url] == 'undefined' || this.loading_state[url] == 'fail') {
      if (this.loading_state[url] != 'fail') this.loading_state[url] = 'loading';
      this.loading_queue.push(url);

      _frame.dom.layout.addClass('is-loading');

      if (isUrl) {
        $.ajax({
          'url': url,
          'type': 'get',
          'dataType': 'html',
          'beforeSend': function beforeSend(jqXHR, settings) {
            callback_beforeSend(url, jqXHR, settings);
          },
          'success': function success(data) {
            var result_main = /\<main\>(.+)\<\/main\>/.exec(data),
                result_title = /\<title\>([^\<]+)\<\/title\>/.exec(data);

            if (result_title && result_title.length > 1) {
              _frame.app_main.page_title[url] = result_title[1];
            }

            callback_success(result_main && result_main.length > 1 ? result_main[1] : '');

            if (url == _frame.app_main.loading_cur) {
              callback_successAfter(result_main && result_main.length > 1 ? result_main[1] : '');
            }

            _frame.app_main.loading_state[url] = 'complete';
          },
          'error': function error(jqXHR, textStatus, errorThrown) {
            errorThrown = errorThrown || '';

            _g.log('Loading Fail: ' + url + ' [' + textStatus + '] (' + errorThrown + ')');

            if (_frame.app_main.loading_state[url] == 'fail' || ['Bad Request', 'Not Found', 'Forbidden'].indexOf(errorThrown) > -1) return _frame.app_main.loading_fail(url, textStatus, errorThrown, callback_error);
            _frame.app_main.loading_state[url] = 'fail';
          },
          'complete': function complete(jqXHR, textStatus) {
            _frame.app_main.loading_complete(url);

            callback_complete(url, jqXHR, textStatus);

            if (_frame.app_main.loading_state[url] == 'fail') {
              console.log('retry');

              _frame.app_main.loading_start(url, callback_success, callback_error, callback_successAfter, callback_beforeSend, callback_complete);
            }
          }
        });
      } else {}
    } else if (this.loading_state[url] == 'complete') {
      callback_success();
      callback_successAfter();
    }
  },
  loading_complete: function loading_complete(url) {
    if (!url) return;
    if (url == this.loading_cur) this.loading_cur = null;
    var i = this.loading_queue.indexOf(url);
    if (i >= 0) this.loading_queue.splice(i, 1);
    if (this.loading_queue.length) return;

    _frame.dom.layout.removeClass('is-loading');
  },
  loading_fail: function loading_fail(url, textStatus, errorThrown, callback_error) {
    if (!url) return;
    if (this.loading_state) delete this.loading_state[url];

    _frame.dom.layout.attr('data-errorbadge', url + ' 载入失败 (' + errorThrown + ')');

    clearTimeout(this.loading_fail_timeout_errorbadge);
    this.loading_fail_timeout_errorbadge = setTimeout(function () {
      _frame.dom.layout.removeAttr('data-errorbadge');

      delete _frame.app_main.loading_fail_timeout_errorbadge;
    }, 3000);
    console.log(callback_error);
    return callback_error(url, textStatus, errorThrown);
  },
  load_page: function load_page(page, options) {
    if (this.cur_page == page || !page) return page;
    options = options || {};
    this.pushState({
      'page': page
    }, null, '?page=' + page);
    this.load_page_func(page, options);

    if (options.callback_modeSelection_select) {
      this.page_dom[page].trigger('modeSelectionEnter', [options.callback_modeSelection_select || function () {}, options.callback_modeSelection_enter || function () {}]);
    } else {
      this.mode_selection_off();
    }
  },
  load_page_func: function load_page_func(page, options) {
    if (this.load_page_lock) return;
    this.load_page_lock = true;

    _g.pageChangeBefore();

    _g.log('PREPARE LOADING: ' + page);

    options = options || {};
    if (!page) return page;
    var checked = false;

    if (page == 'donate') {
      checked = true;
    }

    if (!this.cur_page) {
      this.nav.forEach(function (currentValue) {
        if (page == currentValue.page) checked = true;
      });
    } else {
      checked = true;
    }

    if (!checked) {
      page = this.nav[0].page;
      this.load_page(page, options);
      return page;
    }

    if (!this.page_dom[page]) {
      this.page_dom[page] = $('<div class="page-container" page="' + page + '"/>').appendTo(_frame.dom.main);
      this.page_html[page] = node.fs.readFileSync(_g.path.page + page + '.html', 'utf8');

      if (this.page_html[page]) {
        this.page_dom[page].html(this.page_html[page]);
        Page.init(page);
      }
    }

    if (!options.callback_modeSelection_select) {
      _g.title(this.navtitle[page] || true);

      _frame.infos.last = null;

      _ga.counter(location.search);
    }

    if (this.cur_page == page) {
      this.load_page_lock = false;
      return page;
    }

    Page.show(page);

    if (!options.callback_modeSelection_select) {
      if (_frame.dom.layout.hasClass('ready')) BgImg.change();
      if (page != 'about') Lockr.set('last_page', page);
    }

    _g.log('LOADED: ' + page);

    this.load_page_lock = false;
  },
  init: function init() {
    if (this.is_init) return true;
    _frame.dom.mobilemenu = $('<input type="checkbox" id="view-mobile-menu"/>').prependTo(_frame.dom.layout);
    _frame.dom.logo = $('<div class="logo"/>').on(_g.event.animationend, function () {
      _frame.dom.logo.addClass('ready-animated');
    }).appendTo(_frame.dom.layout);
    _frame.dom.nav = $('<nav/>').appendTo(_frame.dom.layout);
    _frame.dom.navlinks = $('<div class="pages"/>').appendTo(_frame.dom.nav);
    _frame.dom.globaloptions = $('<section class="options"/>').appendTo(_frame.dom.nav).append($('<button class="donate" icon="heart4"/>').on('click', function () {
      _frame.app_main.load_page('donate');
    })).append($('<button class="show_only_bg" icon="images"/>').on('click', function () {
      BgImg.controlsToggle();
    }));
    _frame.dom.btnsHistory = $('<div class="history"/>').insertBefore(_frame.dom.navlinks);
    _frame.dom.btnHistoryBack = $('<button class="button back" icon="arrow-set2-left"/>').on({
      'click': function click() {
        _frame.dom.btnHistoryForward.removeClass('disabled');

        history.back();
      }
    }).appendTo(_frame.dom.btnsHistory);
    _frame.dom.btnHistoryForward = $('<button class="button forward disabled" icon="arrow-set2-right"/>').on('click', function () {
      history.forward();
    }).appendTo(_frame.dom.btnsHistory);
    _frame.dom.navtitle = $('<span class="title"/>').append($('<label for="view-mobile-menu"/>').html('<i></i>')).append(_frame.dom.title = $('<span/>')).appendTo(_frame.dom.nav);
    _frame.dom.main = $('<main/>').appendTo(_frame.dom.layout);
    $('<div class="nav-mask"/>').appendTo(_frame.dom.layout).on('click', function () {
      _frame.dom.mobilemenu.prop('checked', false);
    });

    _g.yuubariFrame.init();

    var titlebar_btns = $('#titlebar > .buttons');

    if (titlebar_btns && titlebar_btns.length) {
      var o = $('<button/>', {
        'class': 'scale',
        'icon': 'zoomin',
        'html': Scale.get()
      }).on('click', function () {
        Scale.menuToggle(o);
      }).prependTo(titlebar_btns);
      Scale.doms.push(o);
    }

    if (this.nav && this.nav.length) {
      _frame.dom.navs = {};
      this.navtitle = {};
      this.nav.forEach(function (o, i) {
        _frame.app_main.navtitle[o.page] = o.title;

        _frame.dom.navs[o.page] = function (page) {
          return $('<button class="button" />').on('click', function () {
            Page.resetScroll(page);

            _frame.app_main.load_page(page);
          });
        }(o.page).html(o.title).appendTo(_frame.dom.navlinks);

        if (o.state) _frame.dom.navs[o.page].attr('mod-state', o.state);
      });
    }

    var promise_chain = Q.fcall(function () {});
    promise_chain.then(function () {
      var deferred = Q.defer();

      try {
        node.fs.readdir(_g.path.db, function (err, files) {
          if (err) {
            deferred.reject(new Error(err));
          } else {
            files.forEach(function (filename) {
              var _node$path$parse = node.path.parse(filename),
                  ext = _node$path$parse.ext;

              var file = node.path.resolve(_g.path.db, filename);

              if (ext === '.nedb~') {
                node.fs.unlinkSync(file);
              }
            });
          }

          deferred.resolve(files);
        });
      } catch (e) {
        console.trace(e);
      }

      return deferred.promise;
    }).then(function () {
      var deferred = Q.defer();

      try {
        node.fs.readdir(_g.path.db, function (err, files) {
          if (err) {
            deferred.reject(new Error(err));
          } else {
            files.forEach(function (filename) {
              var _node$path$parse2 = node.path.parse(filename),
                  name = _node$path$parse2.name;

              var file = node.path.resolve(_g.path.db, filename);
              _db[name] = new node.nedb({
                filename: file
              });
            });
          }

          deferred.resolve(files);
        });
      } catch (e) {
        console.trace(e);
      }

      return deferred.promise;
    }).then(BgImg.init).then(function () {
      _g.log('Preload All DBs: START');

      var the_promises = [],
          dbs = [],
          loaded_count = 0;

      for (var db_name in _db) {
        dbs.push(db_name);
      }

      dbs.forEach(function (db_name) {
        var deferred = Q.defer();

        function _done(_db_name) {
          _g.log('DB ' + _db_name + ' DONE');

          deferred.resolve();
          loaded_count++;

          if (loaded_count >= dbs.length) {
            _g.log('Preload All DBs: DONE');

            setTimeout(function () {
              _frame.app_main.loaded('dbs');
            }, 100);
          }
        }

        _db[db_name].loadDatabase(function (err) {
          if (err) {
            deferred.reject(new Error(err));
          } else {
            switch (db_name) {
              case 'ships':
              case 'fleets':
                _done(db_name);

                break;

              case 'ship_namesuffix':
                _db.ship_namesuffix.find({}).sort({
                  'id': 1
                }).exec(function (dberr, docs) {
                  if (dberr) {
                    deferred.reject(new Error(dberr));
                  } else {
                    _g.data.ship_namesuffix = [{}].concat(docs);

                    _frame.app_main.loaded('db_namesuffix');

                    _done(db_name);
                  }
                });

                break;

              case 'ship_type_order':
                _db.ship_type_order.find({}).sort({
                  'id': 1
                }).exec(function (dberr, docs) {
                  if (dberr) {
                    deferred.reject(new Error(dberr));
                  } else {
                    docs.forEach(function (doc, i) {
                      _g.ship_type_order.push(doc['types'].length > 1 ? doc['types'] : doc['types'][0]);

                      _g.ship_type_order_full = _g.ship_type_order_full.concat(doc['types']);
                      _g.data['ship_type_order'][i] = doc;
                    });

                    _g.ship_type_order.forEach(function (currentValue, i) {
                      if (_typeof(_g.ship_type_order[i]) == 'object') {
                        _g.ship_type_order[i].forEach(function (cur, j) {
                          _g.ship_type_order_map[_g.ship_type_order[i][j]] = i;
                        });
                      } else {
                        _g.ship_type_order_map[_g.ship_type_order[i]] = i;
                      }
                    });

                    _db.ships.find({}).sort({
                      'type': 1,
                      'class': 1,
                      'class_no': 1,
                      'time_created': 1,
                      'name.suffix': 1
                    }).exec(function (dberr2, docs) {
                      if (dberr2) {
                        deferred.reject(new Error(dberr));
                      } else {
                        var __ = function __(i) {
                          var j = 0;

                          while (_g.data.ship_id_by_type[i] && _g.data.ship_id_by_type[i][j]) {
                            var id = _g.data.ship_id_by_type[i][j],
                                i_remodel = void 0,
                                next_id = _g.data.ships[id].remodel ? _g.data.ships[id].remodel.next : null;

                            if (next_id && _g.data.ships[next_id] && next_id != _g.data.ship_id_by_type[i][j + 1] && (i_remodel = $.inArray(next_id, _g.data.ship_id_by_type[i])) > -1) {
                              _g.log(id + ', ' + next_id + ', ' + i_remodel);

                              _g.data.ship_id_by_type[i].splice(i_remodel, 1);

                              _g.data.ship_id_by_type[i].splice($.inArray(id, _g.data.ship_id_by_type[i]) + 1, 0, next_id);

                              __(i);

                              break;
                            }

                            if (j >= _g.data.ship_id_by_type[i].length - 2) {
                              i++;
                              j = 0;
                            } else {
                              j++;
                            }
                          }
                        };

                        docs.forEach(function (doc) {
                          _g.data.ships[doc['id']] = new Ship(doc);
                          if (typeof _g.data.ship_id_by_type[_g.ship_type_order_map[doc['type']]] == 'undefined') _g.data.ship_id_by_type[_g.ship_type_order_map[doc['type']]] = [];

                          _g.data.ship_id_by_type[_g.ship_type_order_map[doc['type']]].push(doc['id']);
                        });

                        __(0);

                        _done(db_name);
                      }
                    });
                  }
                });

                break;

              case 'updates':
                if (typeof _g.data[db_name] == 'undefined') _g.data[db_name] = {};

                _done(db_name);

                break;

              case 'arsenal_all':
                _g.data['arsenal_all'] = [];

                _db.arsenal_all.find({}).sort({
                  'sort': 1
                }).exec(function (err, docs) {
                  docs.forEach(function (doc) {
                    _g.data['arsenal_all'].push(doc['id']);
                  });

                  _done(db_name);
                });

                break;

              case 'arsenal_weekday':
                _g.data['arsenal_weekday'] = {};

                _db.arsenal_weekday.find({}).sort({
                  'weekday': 1
                }).exec(function (err, docs) {
                  docs.forEach(function (doc, i) {
                    _g.data['arsenal_weekday'][i] = doc.improvements;
                  });

                  _done(db_name);
                });

                break;

              default:
                _db[db_name].find({}, function (dberr, docs) {
                  if (dberr) {
                    deferred.reject(new Error(dberr));
                  } else {
                    if (typeof _g.data[db_name] == 'undefined') _g.data[db_name] = {};
                    docs.forEach(function (doc) {
                      switch (db_name) {
                        case 'items':
                          _g.data[db_name][doc['id']] = new Equipment(doc);
                          break;

                        case 'entities':
                          _g.data[db_name][doc['id']] = new Entity(doc);
                          break;

                        case 'consumables':
                          _g.data[db_name][doc['id']] = new Consumable(doc);
                          break;

                        default:
                          _g.data[db_name][doc['id']] = doc;
                          break;
                      }
                    });

                    _done(db_name);
                  }
                });

                break;
            }
          }
        });

        the_promises.push(deferred.promise);
      });
      return Q.all(the_promises);
    }).then(function () {
      var deferred = Q.defer();
      _g.data.item_id_by_type = [];
      _g.item_type_order = [];
      var type_by_collection = {},
          type_order_map = {};

      for (var i in _g.data.item_type_collections) {
        for (var j in _g.data.item_type_collections[i]['types']) {
          type_by_collection[_g.data.item_type_collections[i]['types'][j]] = i;

          _g.item_type_order.push(_g.data.item_type_collections[i]['types'][j]);

          type_order_map[_g.data.item_type_collections[i]['types'][j]] = _g.item_type_order.length - 1;
        }
      }

      for (var i in _g.data.items) {
        var order = type_order_map[_g.data.items[i]['type']];
        if (!_g.data.item_id_by_type[order]) _g.data.item_id_by_type[order] = {
          'collection': type_by_collection[_g.data.items[i]['type']],
          'equipments': [],
          'names': []
        };

        _g.data.item_id_by_type[order]['equipments'].push(_g.data.items[i]['id']);

        _g.data.item_id_by_type[order]['names'].push(_g.data.items[i].getName());
      }

      _g.data.item_id_by_type.forEach(function (currentValue) {
        currentValue['equipments'].sort(function (a, b) {
          var diff = _g.data.items[a].getPower() - _g.data.items[b].getPower();

          if (diff === 0) {
            var diff_aa = _g.data.items[a]['stat']['aa'] - _g.data.items[b]['stat']['aa'];

            if (diff_aa === 0) {
              return _g.data.items[a]['stat']['hit'] - _g.data.items[b]['stat']['hit'];
            }

            return diff_aa;
          }

          return diff;
        });
      });

      setTimeout(function () {
        deferred.resolve();
      }, 100);
      return deferred.promise;
    }).then(function () {
      _g.log('数据更新检查: START');

      if (launcherOptions && launcherOptions["dataUpdated"]) return launcherOptions["dataUpdated"];
      return {};
    }).then(function (dataUpdated) {
      var the_promises = [],
          updated = [],
          done_count = 0,
          doms = $();

      for (var i in dataUpdated) {
        var version = dataUpdated[i].split('.'),
            _version = '';

        for (var j = 0; j < Math.min(3, version.length); j++) {
          _version += '.' + version[j];
        }

        _version = _version.substr(1);
        updated.push({
          'type': i,
          'version': _version
        });
      }

      if (!updated.length) {
        _g.log('数据更新检查: DONE，无数据更新');

        return false;
      } else {
        updated.forEach(function (obj) {
          var deferred = Q.defer();

          function _done(item) {
            _g.log('数据更新检查: ' + item + ' DONE');

            deferred.resolve();
            done_count++;

            if (done_count >= updated.length) {
              if (doms.length) {
                _g.log('数据更新检查: DONE');

                _frame.app_main.functions_on_ready.push(function () {
                  _frame.modal.show($('<div class="updates"/>').append(doms).on('click.infosHideModal', '[data-infos], a[href^="?page="]', function () {
                    _frame.modal.hide();
                  }), '<span>更新日志</span>', {
                    'classname': 'update_journal'
                  });
                });
              } else {
                _g.log('数据更新检查: DONE，无更新日志');
              }
            }
          }

          _db.updates.find(obj).sort({
            'date': -1
          }).exec(function (err, docs) {
            if (err) {
              deferred.reject(new Error(err));
            } else {
              docs.forEach(function (doc) {
                var section = $('<section class="update_journal" data-version-' + doc['type'] + '="' + doc['version'] + '"/>').html(_frame.app_main.page['about'].journaltitle(doc));

                try {
                  $(_frame.app_main.page['about'].journal_parse(doc['journal'])).appendTo(section);
                } catch (e) {
                  _g.error(e);

                  section.remove();
                }

                doms = doms.add(section);
              });

              _done(obj['type'] + ' - ' + obj['version']);
            }
          });

          the_promises.push(deferred.promise);
        });
        return Q.all(the_promises);
      }
    }).then(function () {
      var link_page = function link_page(e) {
        e.preventDefault();

        _frame.app_main.load_page($(this).attr('href').substr('?page='.length));
      },
          link_infos = function link_infos(e) {
        e.preventDefault();
        var el = $(this);

        if (!el.attr('data-infos')) {
          var exp = /^[\?]{0,1}infos\=([^\&]+)\&id\=([^\&]+)/ig.exec(el.attr('href'));
          el.attr('data-infos', '[[' + exp[1].toUpperCase() + '::' + exp[2] + ']]');

          _frame.infos.click(el);
        }
      };

      $body.on('click.pagechange', 'a[href^="?page="]', link_page).on('click.pagechange', 'a[href^="?infos="]', link_infos).on('keydown', function (e) {
        switch (e.keyCode) {
          case 123:
            node.win.showDevTools();
            break;
        }
      });
      return true;
    }).then(function () {
      if (debugmode) {
        var hackHistory = function hackHistory(history) {
          var pushState = history.pushState;

          history.pushState = function (state) {
            if (typeof history.onpushstate == "function") {
              history.onpushstate({
                state: state
              });
            }

            setTimeout(function () {
              _frame.dom.hashbar.trigger('urlchanged');
            }, 1);
            return pushState.apply(history, arguments);
          };
        };

        _frame.dom.hashbar = $('<input type="text"/>').on({
          'urlchanged': function urlchanged() {
            $(this).val(location.href.substr((location.origin + location.pathname).length));
          },
          'change': function change() {
            location.replace(location.origin + location.pathname + _frame.dom.hashbar.blur().val());
          }
        }).appendTo($('<div class="debug_hashbar"/>').appendTo(_frame.dom.layout)).trigger('urlchanged');
        $window.on({
          'hashchange.debug_mode_hashbar': function hashchangeDebug_mode_hashbar() {
            _frame.dom.hashbar.trigger('urlchanged');
          },
          'popstate.debug_mode_hashbar': function popstateDebug_mode_hashbar() {
            _frame.dom.hashbar.trigger('urlchanged');
          }
        });
        hackHistory(window.history);

        if (titlebar_btns && titlebar_btns.length) {
          titlebar_btns.prepend($('<button/>', {
            'class': 'console',
            'html': 'Toggle Hashbar'
          }).on('click', function () {
            _frame.dom.layout.toggleClass('debug-hashbar');
          }));
          $.getScript('../dev-output/js-output/output.js', function () {
            titlebar_btns.prepend($('<button/>', {
              'class': 'console',
              'html': 'Output to Web'
            }).on('click', function () {
              _frame.modal.show(dev_output_form(), 'Output to Web', {
                'detach': true
              });
            }));
          });
        }
      }

      return true;
    }).then(function () {
      _frame.gg(_frame.dom.layout);
    })["catch"](function (err) {
      _g.error(err, '初始化进程');
    }).done(function () {
      _g.buildIndex();

      _g.log('Global initialization DONE');
    });
    this.is_init = true;
  }
};
var Scale = {
  cur: 1,
  doms: [],
  preset: [0.75, 1, 1.25, 1.5, 2],
  get: function get(value) {
    return (value || this.cur) * 100;
  },
  set: function set(value) {
    if (value < 0.5) value = 0.5;

    _g.zoom(value);

    this.cur = value;
    this.update();
    localforage.setItem('scale', value);
  },
  update: function update() {
    var value = this.get();
    this.doms.forEach(function ($el) {
      $el.html(value).val(value);
    });
  },
  getPresetIndex: function getPresetIndex(value) {
    value = value || this.cur;
    var index = 0;
    this.preset.some(function (v, i) {
      index = i;
      return value <= v;
    });
    return index;
  },
  menuShow: function menuShow($el) {
    if (!this.menu) {
      var setScale = function setScale(value, e) {
        if (e) {
          e.stopImmediatePropagation();
          e.stopPropagation();
        }

        Scale.set(value);
        setTimeout(function () {
          Scale.menu.position($el);
        }, 100);
        if (value <= Scale.preset[0]) decrease.attr('disabled', true);else decrease.removeAttr('disabled');
        if (value >= Scale.preset[Scale.preset.length - 1]) increase.attr('disabled', true);else increase.removeAttr('disabled');
      };

      var menuitems = [];
      var input = $('<input/>', {
        'type': 'number'
      }).val(this.get(this.cur)).on({
        'change': function change() {
          setScale(input.val() / 100);
        },
        'click': function click(e) {
          e.stopImmediatePropagation();
          e.stopPropagation();
        }
      });
      this.doms.push(input);
      var decrease = $('<menuitem/>', {
        'class': 'decrease',
        'html': '-'
      }).on('click', function (e) {
        var index = Scale.getPresetIndex();
        index = Math.max(index, 1);
        setScale(Scale.preset[index - 1], e);
      });
      var increase = $('<menuitem/>', {
        'class': 'increase',
        'html': '+'
      }).on('click', function (e) {
        var index = Scale.getPresetIndex();
        if (Scale.cur == Scale.preset[index]) index++;
        index = Math.min(index, Scale.preset.length - 1);
        setScale(Scale.preset[index], e);
      });
      menuitems.push($('<div class="item">窗口缩放</div>').add($('<div class="scale"/>').append(decrease).append(input).append($('<span>%</span>')).append(increase)));
      this.preset.forEach(function (value) {
        menuitems.push($('<menuitem/>', {
          'html': Scale.get(value) + '%'
        }).on('click', function (e) {
          setScale(value, e);
        }));
      });
      this.menu = new _menu({
        'className': 'contextmenu-scale',
        'items': menuitems
      });
    }

    this.menu.show($el);
  },
  menuToggle: function menuToggle($el) {
    if (this.menu && this.menu.showing) this.menu.hide();else this.menuShow($el);
  }
};
localforage.getItem('scale', function (err, value) {
  if (value) Scale.set(value);
});

_g.error = function (err, context) {
  if (!(err instanceof Error)) err = new Error(err);

  _g.badgeError(err instanceof Error ? err.message : err);

  _g.log(err);

  node.fs.appendFileSync(node.path.join(_g.execPath, 'errorlog.txt'), new Date() + "\r\n" + (context ? context + "\r\n" : '') + err.message + "\r\n" + "\r\n" + "========================================" + "\r\n" + "\r\n");
};

var _updater = {
  'local_versions': {},
  'remote_root': 'http://fleet.moe',
  'remote_path': '/versions.json',
  'remote_data': {},
  updatable: false
};

_updater.get_local_version = function () {
  if (_typeof(Lockr.get('__localVersions')) === 'object') {
    _updater.local_versions = Lockr.get('__localVersions');
  } else if (_updater.localVersionsFilePath && fs.existsSync(_updater.localVersionsFilePath)) {
    _updater.local_versions = JSON.parse(fs.readFileSync(_updater.localVersionsFilePath, 'utf-8'));
  } else if (localStorage['nwjs-data-version']) {
    _updater.local_versions = JSON.parse(localStorage['nwjs-data-version'] || '{}');
  } else if (launcherOptions && launcherOptions['nw-packager'] && launcherOptions['nw-packager'].dataVersion) _updater.local_versions = launcherOptions['nw-packager'].dataVersion;

  if (_updater.local_versions) {
    _g.log('本地版本: ', _updater.local_versions);

    _updater.updatable = true;
  }

  return _updater.local_versions;
};

_updater.get_remote = function () {
  var deferred = Q.defer();
  node.request({
    'uri': _updater.remote_root + _updater.remote_path,
    'method': 'GET'
  }, function (err, response, body) {
    if (err) {
      deferred.reject(new Error(err));
    } else if (response.statusCode != 200) {
      deferred.reject(new Error(response.statusCode));
    } else {
      _updater.remote_data = JSON.parse(body || '{}') || {};

      _g.log('服务器版本: ', _updater.remote_data);

      if (node.semver.lt(process.versions.nw, _updater.remote_data.core || '0.1.0')) {
        _g.badgeError('!! 主程序已更新，请访问 fleet.moe 手动下载最新版本 !!', true);

        deferred.reject();
      }

      _updater.remote_versions = {};

      for (var name in _updater.remote_data.packages) {
        _updater.remote_versions[name] = _updater.remote_data.packages[name].version;
      }

      deferred.resolve(_updater.remote_data);
    }
  });
  return deferred.promise;
};

_updater.get_packages_updated = function () {
  if (!_updater.updatable || !_updater.remote_data.packages) return [];

  function compareVersion(a, b) {
    var i;
    var len;

    if (_typeof(a) + _typeof(b) !== 'stringstring') {
      return false;
    }

    a = a.split('.');
    b = b.split('.');
    i = 0;
    len = Math.max(a.length, b.length);

    for (; i < len; i++) {
      if (a[i] && !b[i] && parseInt(a[i]) > 0 || parseInt(a[i]) > parseInt(b[i])) {
        return 1;
      } else if (b[i] && !a[i] && parseInt(b[i]) > 0 || parseInt(a[i]) < parseInt(b[i])) {
        return -1;
      }
    }

    return 0;
  }

  ;
  var updated = [];

  for (var i in _updater.remote_data.packages) {
    var remote_version = _updater.remote_data.packages[i].version ? _updater.remote_data.packages[i].version : _updater.remote_data.packages[i];
    if (!_updater.local_versions[i]) updated.push(i);else if (compareVersion(remote_version, _updater.local_versions[i]) > 0) updated.push(i);
  }

  return updated.sort(function (a, b) {
    return _updater.remote_data.packages[a].bytes - _updater.remote_data.packages[b].bytes;
  });
};

_updater.indicator = function (progress) {
  if (!_updater.indicatorEl) {
    _updater.indicatorEl = $('<button class="update_progress" icon="stairs-up" data-tip="检测到新版本<br>更新中..."/>').prependTo(_frame.dom.globaloptions).append(_updater.indicatorElBar = $('<s/>'));
  }

  if (typeof progress == 'number' && progress >= 0 && progress < 1) {
    progress = Math.floor(progress * 100);

    _updater.indicatorEl.addClass('on').attr('progress', progress);

    _updater.indicatorElBar.css('width', progress + '%');

    node.win.setProgressBar(progress / 100);
  } else if (progress) {
    _updater.indicatorEl.addClass('on').attr('progress', 100).data('tip', '更新完成<br>请重新启动程序');

    _updater.indicatorElBar.css('width', '');

    node.win.setProgressBar(1);
  } else {
    _updater.indicatorEl.removeClass('on').removeAttr('progress');

    node.win.setProgressBar(0);
  }
};

_updater.update = function () {
  var promise_chain = Q.fcall(function () {
    _g.log('');

    _g.log('========== 自动更新 - 开始 ==========');

    _g.log('');
  }),
      dirRoot = node.path.dirname(process.execPath).split(node.path.sep),
      dirData = '',
      datadir_exists = false,
      renamePair = [],
      size_total = 0,
      size_received = 0;
  dirRoot = process.platform == 'darwin' || dirRoot[dirRoot.length - 1] == 'nwjs' && node.path.basename(process.execPath) == 'nw.exe' ? process.cwd() : node.path.dirname(process.execPath);
  dirData = node.path.join(dirRoot, 'data');

  function err_handler(err, msg) {
    msg = msg || '';

    if (err.errno == -4048 || err.message.indexOf('not permitted') > -1) {
      _g.log('    ' + msg + '权限不足');
    } else {
      _g.log(err);

      _g.log('    ' + msg + '发生错误 [' + err.errno + ']: ' + err.message);
    }
  }

  if (process.versions && process.versions.nw) {
    var lastNwjsVer = Lockr.get('nwjs-ver', '0.12.2');
    Lockr.set('nwjs-ver', process.versions.nw);
  }

  _updater.localVersionsFilePath = node.path.resolve(node.gui.App.dataPath, '.localversions.json');
  promise_chain = promise_chain.then(function () {
    var deferred = Q.defer();
    node.fs.lstat(dirData, function (err, stats) {
      if (err || !stats.isDirectory()) {
        deferred.reject('数据包目录不存在, 不进行自动更新');
      } else {
        datadir_exists = true;
        deferred.resolve(true);
      }
    });
    return deferred.promise;
  }).then(function () {
    var deferred = Q.defer();
    node.fs.readdir(dirData, function (err, files) {
      if (err) {
        deferred.reject(err);
      } else {
        var selected = [];
        files.forEach(function (file) {
          if (node.path.extname(file) == '.updated') selected.push(file);
        });
        deferred.resolve(selected);
      }
    });
    return deferred.promise;
  }).then(function (files) {
    var the_promises = [];
    files.forEach(function (filename) {
      var deferred = Q.defer();
      node.fs.unlink(node.path.join(dirData, filename), function (err) {
        _g.log('已删除更新残留文件 ' + filename);

        deferred.resolve();
      });
      the_promises.push(deferred.promise);
    });
    return Q.all(the_promises);
  }).then(_updater.get_local_version).then(_updater.get_remote).then(_updater.get_packages_updated).then(function (updated) {
    var newVersions = Object.assign({}, _updater.local_versions);

    if (!updated.length) {
      _g.log('所有数据包均为最新');

      return true;
    }

    console.log('[自动更新] 开始');

    _g.log('更新开始: ' + updated.join(', '));

    var promise_chain_update = Q.fcall(function () {}),
        deferredUpdating = Q.defer();
    updated.forEach(function (package_name, index) {
      size_total += _updater.remote_data.packages[package_name].bytes;
      promise_chain_update = promise_chain_update.then(function () {
        var deferred = Q.defer(),
            savefile = false,
            filesize = _updater.remote_data.packages[package_name].bytes;
        var tempfile = node.path.join(dirData, package_name + node.path.extname(_updater.remote_data.packages[package_name].path) + '.updated'),
            targetFile = node.path.join(dirData, package_name + node.path.extname(_updater.remote_data.packages[package_name].path));

        function err_handler(err, msg) {
          msg = msg || '';

          if (err.errno == -4048 || err.message.indexOf('not permitted') > -1) {
            _g.log('    ' + msg + '权限不足');
          } else {
            _g.log(err);

            _g.log('    ' + msg + '发生错误 [' + err.errno + ']: ' + err.message);
          }
        }

        _g.log('');

        _g.log('========= ' + (index + 1) + '/' + updated.length + ' ==========');

        _g.log('    ' + package_name + ' | 本地版本: ' + _updater.local_versions[package_name] + ' | 服务器版本: ' + (_updater.remote_data.packages[package_name].version ? _updater.remote_data.packages[package_name].version : _updater.remote_data.packages[package_name]));

        node['request-progress'](node.request({
          'uri': node.url.format(_updater.remote_root + '/' + _updater.remote_data.packages[package_name].path),
          'method': 'GET'
        }).on('error', function (err) {
          _g.log('    下载数据包出错');

          node.fs.unlink(tempfile, function (err2) {
            deferred.reject(new Error(err));
          });
        }).on('response', function (response) {
          if (response.statusCode == 200 && parseInt(response.headers['content-length']) == filesize) savefile = true;
        })).on('error', function (err) {
          _g.log('    下载数据包出错');

          node.fs.unlink(tempfile, function (err2) {
            deferred.reject(new Error(err));
          });
        }).on('progress', function (state) {
          var received = typeof state.received !== 'undefined' ? state.received : state.size.transferred;
          var total = typeof state.total !== 'undefined' ? state.total : state.size.total;
          var percent = typeof state.percent === 'number' && state.percent > 1 ? state.percent : Math.round(state.percent * 10000) / 100;

          _g.log('    ' + received + ' / ' + total + ' (' + percent + '%)' + ' | ' + Math.floor((size_received + received) / size_total * 100) + '%');

          _updater.indicator((size_received + received) / size_total);
        }).pipe(node.fs.createWriteStream(tempfile).on('finish', function () {
          var complete = false;

          if (savefile) {
            var stat = node.fs.statSync(tempfile);
            if (stat.size == filesize) complete = true;
          }

          if (complete) {
            size_received += filesize;
            renamePair.push([package_name, tempfile, targetFile]);

            _g.log('[自动更新] ' + package_name + ' | 下载完成');

            newVersions[package_name] = _updater.remote_versions[package_name];
            deferred.resolve();
          } else {
            _g.error('[自动更新] ' + package_name + ' | 下载出现错误');

            node.fs.unlink(tempfile, function (err) {
              deferred.resolve();
            });
          }
        }).on('error', function (err) {
          err_handler(err, '写入文件');

          _g.log('    流程结束');

          deferred.reject(new Error(err));
        }));
        return deferred.promise;
      });
    });
    promise_chain_update = promise_chain_update.then(function () {
      Lockr.set('__localVersions', newVersions);
      fs.writeFileSync(_updater.localVersionsFilePath, JSON.stringify(newVersions), 'utf-8');
      deferredUpdating.resolve();
    })["catch"](function (err) {
      deferredUpdating.reject(err);
    });
    return deferredUpdating.promise;
  });
  promise_chain = promise_chain.then(function () {
    if (size_total > size_received) return true;

    _g.log('');

    _g.log('全部数据包下载完成');

    var deferred = Q.defer(),
        chain = Q.fcall(function () {});
    renamePair.forEach(function (pair) {
      chain = chain.then(function () {
        var deferred = Q.defer();
        node.fs.unlink(pair[2], function (err) {
          if (err) {
            err_handler(err, '删除原有数据包');

            _g.log('    ' + pair[0] + ' | 删除原有数据包出错');
          }

          node.fs.rename(pair[1], pair[2], function (err) {
            if (err) {
              err_handler(err, '重命名新数据包');

              _g.log('    ' + pair[0] + ' | 重命名新数据包出错');
            } else {
              _g.log('    ' + pair[0] + ' | 更新完成');
            }

            deferred.resolve();
          });
        });
        return deferred.promise;
      });
    });
    chain = chain.then(function () {
      deferred.resolve();
    })["catch"](function (err) {
      deferred.reject(err);
    });
    return deferred.promise;
  }).then(function () {
    if (size_received && size_received >= size_total) {
      _g.log('');

      _g.log('更新完成');

      console.log('[自动更新] 完成');

      _updater.indicator(1);
    } else if (_updater.indicatorEl) {
      _g.log('');

      _g.log('自动更新失败, 结束流程');

      console.log('[自动更新] 失败');

      _updater.indicator(false);

      _g.badgeError('自动更新失败，请访问 fleet.moe 手动下载最新版本');
    }
  })["catch"](function (err) {
    _g.log('自动更新失败');

    if (err == '数据包目录不存在, 不进行自动更新') console.warn(err);else {
      _g.error(err);

      _g.badgeError('自动更新失败，请访问 fleet.moe 手动下载最新版本');
    }
    if (_updater.indicatorEl) _updater.indicator(false);
  }).done(function () {
    _g.log('');

    _g.log('========== 自动更新 - 结束 ==========');

    _g.log('');
  });
};

_frame.app_main.functions_on_ready.push(_updater.update);

var ShareBar = function () {
  function ShareBar(options) {
    _classCallCheck(this, ShareBar);

    options = options || {};
    this.settings = $.extend(true, {}, ShareBar.defaults, options);
    this.el = this.create();
    return this;
  }

  _createClass(ShareBar, [{
    key: "create",
    value: function create() {
      this.el = $('<div class="sharebar"/>');
      this.settings.sites.forEach(function (site) {
        var link = $('<a/>', {
          'class': 'sharebar-share sharebar-site-' + site,
          'data-share-site': site,
          'href': 'javascript:;',
          'target': '_self',
          'icon': ShareBar.iconmap[site] || site
        }).appendTo(this.el);
        if (this.settings.modifyItem) this.settings.modifyItem(link);
      }.bind(this));
      this.el.on('click.sharebar-share', 'a[data-share-site]', function (e, is_to_launch) {
        var $el = $(e.target),
            site = $el.attr('data-share-site');
        $el.attr({
          'href': 'http://s.jiathis.com/?webid=' + site + '&url=' + encodeURIComponent(this.getContent('url', location.href)) + '&title=' + encodeURIComponent(this.getContent('title', document.title)) + '&summary=' + encodeURIComponent(this.getContent('summary', $('meta[name="description"]').attr('content'))) + (this.settings.uid ? '&uid=' + this.settings.uid : '') + (this.settings.appkey[site] ? '&appkey=' + this.settings.appkey[site] : '') + '&shortUrl=true',
          'target': '_blank'
        });
      }.bind(this));
      return this.el;
    }
  }, {
    key: "getContent",
    value: function getContent(t, fallback) {
      if (typeof this.settings[t] == 'function') return this.settings[t](this);
      if (this.settings[t]) return this.settings[t];
      return fallback;
    }
  }]);

  return ShareBar;
}();

ShareBar.defaults = {
  sites: ['tsina', 'tqq', 'cqq', 'twitter', 'tieba'],
  appkey: {}
};
ShareBar.iconmap = {
  'tsina': 'weibo',
  'tqq': 'tencent-weibo',
  'cqq': 'qq'
};

_tmpl.improvement = function (equipment, improvement_index, requirement_index, returnHTML) {
  if (typeof equipment == 'undefined') return false;
  if (_typeof(equipment) != 'object') if (!(equipment = _g.data.items[equipment])) return false;
  improvement_index = improvement_index || 0;
  requirement_index = requirement_index || [0];
  returnHTML = returnHTML || false;
  var improvement = equipment['improvement'][improvement_index],
      upgrade_to = improvement['upgrade'] ? _g.data.items[improvement['upgrade'][0]] : false,
      req_ships = [],
      requirement = '';
  requirement_index.forEach(function (currentValue) {
    var req = improvement['req'][currentValue];
    if (req[1]) req_ships.mergeFrom(req[1]);
  });

  if (req_ships.length) {
    var names = [];
    req_ships.forEach(function (id) {
      names.push('<a' + ' href="?infos=ship&id=' + id + '"' + ' data-infos="[[SHIP::' + id + ']]"' + ' data-tip="[[SHIP::' + id + ']]"' + '>' + _g.data.ships[id].getName() + '</a>');
    });
    requirement = '<font>' + names.join(' / ') + '</font>';
  } else {
    requirement = "<font class=\"no\">".concat(improvement.resource[0][0] >= 0 ? '无秘书舰' : '未知', "\u8981\u6C42</font>");
  }

  return _tmpl["export"]('<span class="improvement">' + _tmpl.improvement__title(equipment, upgrade_to, improvement['upgrade'][1]) + requirement + _tmpl.improvement__resource(improvement, upgrade_to ? true : false) + '</span>', returnHTML);
};

_tmpl.improvement_detail = function (equipment, returnHTML) {
  if (typeof equipment == 'undefined') return false;
  if (_typeof(equipment) != 'object') if (!(equipment = _g.data.items[equipment])) return false;
  var html = '',
      data = equipment['improvement'] || [];
  data.forEach(function (improvement) {
    var upgrade_to = improvement['upgrade'] ? _g.data.items[improvement['upgrade'][0]] : false,
        requirements = this.improvement__reqdetails(improvement.req, improvement.resource[0][0] >= 0);
    html += '<span class="improvement improvement-details">' + _tmpl.improvement__resource(improvement, upgrade_to ? true : false) + _tmpl.improvement__title(equipment, upgrade_to, improvement['upgrade'][1]) + requirements + '</span>';
  }, this);
  return _tmpl["export"](html, returnHTML);
};

_tmpl.improvement_inEquipmentInfos = function (equipment, returnHTML) {
  if (typeof equipment == 'undefined') return false;
  if (_typeof(equipment) != 'object') if (!(equipment = _g.data.items[equipment])) return false;
  var html = '',
      data = equipment['improvement'] || [];
  data.forEach(function (improvement) {
    var upgrade_to = improvement['upgrade'] ? _g.data.items[improvement['upgrade'][0]] : false,
        requirements = this.improvement__reqdetails(improvement.req, improvement.resource[0][0] >= 0);
    html += '<span class="unit improvement improvement-details">' + '<b>' + (upgrade_to ? '<span class="indicator true">可升级为</span>' + '<a class="equiptypeicon mod-left mod-' + upgrade_to.getIconId() + '"' + ' href="?infos=equipment&id=' + upgrade_to['id'] + '"' + ' data-infos="[[EQUIPMENT::' + upgrade_to['id'] + ']]"' + ' data-tip="[[EQUIPMENT::' + upgrade_to['id'] + ']]"' + '>' + upgrade_to.getName(true) + '</a>' + (improvement['upgrade'][1] ? '<i>+' + improvement['upgrade'][1] + '</i>' : '') : '<span class="indicator false">不可升级</span>') + '</b>' + requirements + _tmpl.improvement__resource(improvement, upgrade_to ? true : false) + '</span>';
  }, this);
  return _tmpl["export"](html, returnHTML);
};

_tmpl.improvement__title = function (equipment, upgrade_to, upgrade_to_star) {
  var name = function name(_name) {
    return _name.replace(/舰本/g, '');
  };

  return '<strong>' + '<a class="equiptypeicon mod-left mod-' + equipment.getIconId() + '"' + ' href="?infos=equipment&id=' + equipment['id'] + '"' + ' data-infos="[[EQUIPMENT::' + equipment['id'] + ']]"' + ' data-tip="[[EQUIPMENT::' + equipment['id'] + ']]"' + '>' + name(equipment.getName(true)) + '</a>' + (upgrade_to ? '<b></b>' + '<a class="equiptypeicon mod-left mod-' + upgrade_to.getIconId() + '"' + ' href="?infos=equipment&id=' + upgrade_to['id'] + '"' + ' data-infos="[[EQUIPMENT::' + upgrade_to['id'] + ']]"' + ' data-tip="[[EQUIPMENT::' + upgrade_to['id'] + ']]"' + '>' + name(upgrade_to.getName(true)) + '</a>' + (upgrade_to_star ? '<i>+' + upgrade_to_star + '</i>' : '') : '') + '</strong>';
};

_tmpl.improvement__resource = function (improvement, upgradable) {
  function getValue(v) {
    v = parseInt(v);
    if (v < 0) return '?';
    return v;
  }

  var resource = {};
  resource['all'] = '<span>' + '<em>必要资源</em>' + '<i class="fuel">' + getValue(improvement['resource'][0][0]) + '</i>' + '<i class="ammo">' + getValue(improvement['resource'][0][1]) + '</i>' + '<i class="steel">' + getValue(improvement['resource'][0][2]) + '</i>' + '<i class="bauxite">' + getValue(improvement['resource'][0][3]) + '</i>' + '</span>';

  for (var i = 1; i < 4; i++) {
    var title = '';

    switch (i) {
      case 1:
        title = '★+0 ~ +6';
        break;

      case 2:
        title = '★+6 ~ MAX';
        break;

      case 3:
        title = '升级';
        break;
    }

    var requiredItems = improvement['resource'][i][4] || [];
    if (!Array.isArray(improvement['resource'][i][4])) requiredItems = [[improvement['resource'][i][4], improvement['resource'][i][5] || 0]];
    requiredItems = requiredItems.filter(function (item) {
      return item[1];
    });

    if (requiredItems.length) {
      requiredItems = '<span class="items">' + requiredItems.map(function (requiredItem) {
        var itemId = requiredItem[0];
        var count = requiredItem[1];
        var result = '';

        if (isNaN(itemId)) {
          var match = /^consumable_([0-9]+)/.exec(itemId);

          if (match && match.length > 1) {
            var name = _g.data.consumables[match[1]]._name;
            var quantity = getValue(count);
            result = "<i class=\"consumable\">".concat(name, "<i>x").concat(quantity, "</i></i>");
          }
        } else {
          result = '<a class="equiptypeicon mod-left mod-' + _g.data.items[itemId].getIconId() + '"' + ' href="?infos=equipment&id=' + itemId + '"' + ' data-infos="[[EQUIPMENT::' + itemId + ']]"' + ' data-tip="[[EQUIPMENT::' + itemId + ']]"' + '>' + _g.data.items[itemId].getName(true) + '<i>x' + getValue(count) + '</i>' + '</a>';
        }

        return '<span class="item">' + result + '</span>';
      }).join('') + '</span>';
    } else {
      requiredItems = '';
    }

    resource[i] = '<span>' + '<em>' + title + '</em>' + (i == 3 && !upgradable ? '<i class="no">-</i>' : '<i class="dev_mat">' + getValue(improvement['resource'][i][0]) + '<i>(' + getValue(improvement['resource'][i][1]) + ')</i>' + '</i>' + '<i class="imp_mat">' + getValue(improvement['resource'][i][2]) + '<i>(' + getValue(improvement['resource'][i][3]) + ')</i>' + '</i>' + requiredItems) + '</span>';
  }

  return '<span>' + resource['all'] + resource['1'] + resource['2'] + resource['3'] + '</span>';
};

_tmpl.improvement__reqdetails = function (reqdata, dataready) {
  if (!reqdata || !reqdata.push || !reqdata.length) return '';
  var requirements = '<font>';
  reqdata.forEach(function (req) {
    var names = [],
        text;
    requirements += '<b>';

    for (var k = 0; k < 7; k++) {
      switch (k) {
        case 0:
          text = '日';
          break;

        case 1:
          text = '一';
          break;

        case 2:
          text = '二';
          break;

        case 3:
          text = '三';
          break;

        case 4:
          text = '四';
          break;

        case 5:
          text = '五';
          break;

        case 6:
          text = '六';
          break;
      }

      requirements += '<i' + (req[0][k] ? ' class="on"' : '') + '>' + text + '</i>';
    }

    if (req[1]) {
      req[1].forEach(function (shipid) {
        names.push('<a' + ' href="?infos=ship&id=' + shipid + '"' + ' data-infos="[[SHIP::' + shipid + ']]"' + ' data-tip="[[SHIP::' + shipid + ']]"' + '>' + _g.data.ships[shipid].getName() + '</a>');
      });
      requirements += names.join(' / ');
    } else {
      requirements += "<b>".concat(dataready ? '无秘书舰' : '未知', "\u8981\u6C42</b>");
    }

    requirements += '</b>';
  });
  requirements += '</font>';
  return requirements;
};

_tmpl.link_entity = function (entity, tagName, returnHTML, count) {
  if (!entity) return false;
  if (tagName && _typeof(tagName) == 'object') return _tmpl.link_entity(entity, tagName['tagName'] || null, tagName['returnHTML'] || null, tagName['count'] || null);
  tagName = tagName || 'a';
  returnHTML = returnHTML || false;
  count = typeof count == 'undefined' ? false : count;

  if (_typeof(entity) != 'object') {
    var entityId = parseInt(entity);
    entity = _g.data.entities[entityId];
  } else {
    var entityId = entity['id'];
  }

  return _tmpl["export"]('<' + tagName + (tagName == 'a' ? ' href="?infos=entity&id=' + entityId + '"' : '') + ' class="link_entity" data-entityid="' + entityId + '" data-infos="[[ENTITY::' + entityId + ']]">' + (entity.picture && entity.picture.avatar ? '<i style="background-image:url(' + entity.picture.avatar + ')"></i>' : '<i></i>') + '<span>' + entity._name + (typeof count == 'undefined' ? '' : ' <small>(' + count + ')</small>') + '</span>' + '</' + tagName + '>', returnHTML);
};

_tmpl.link_equipment = function (equipment, tagName, returnHTML, improvementStar) {
  if (!equipment) return false;
  if (tagName && _typeof(tagName) == 'object') return _tmpl.link_equipment(equipment, tagName['tagName'] || null, tagName['returnHTML'] || null, typeof tagName['improvementStar'] == 'undefined' ? null : tagName['improvementStar']);
  tagName = tagName || 'a';
  returnHTML = returnHTML || false;
  improvementStar = typeof improvementStar == 'undefined' ? null : improvementStar;

  if (_typeof(equipment) != 'object') {
    var equipmentId = parseInt(equipment);
    equipment = _g.data.items[equipmentId];
  } else {
    var equipmentId = equipment['id'];
  }

  return _tmpl["export"]('<' + tagName + (tagName == 'a' ? ' href="?infos=equipment&id=' + equipmentId + '"' : '') + ' class="link_equipment"' + ' data-equipmentid="' + equipmentId + '"' + ' data-tip-position="right"' + ' data-infos="[[EQUIPMENT::' + equipmentId + ']]"' + ' data-tip="[[EQUIPMENT::' + equipmentId + ']]"' + '>' + '<i style="background-image:url(assets/images/itemicon/' + equipment.getIconId() + '.png)"></i>' + '<span>' + equipment.getName(true) + '</span>' + function () {
    if (typeof improvementStar === 'undefined' || improvementStar === null) return '';
    if (improvementStar >= 10) return "<em class=\"max\"></em>";
    if (improvementStar <= 0) return "<em class=\"zero\">+0</em>";
    return "<em>+".concat(improvementStar, "</em>");
  }() + '</' + tagName + '>', returnHTML);
};

_tmpl.link_ship = function (ship, tagName, returnHTML, mode, extraIllust) {
  if (!ship) return false;
  if (tagName && _typeof(tagName) == 'object') return _tmpl.link_ship(ship, tagName['tagName'] || null, tagName['returnHTML'] || null, tagName['mode'] || null, tagName['extraIllust'] || null);
  tagName = tagName || 'a';
  returnHTML = returnHTML || false;
  mode = mode || 'default';

  if (_typeof(ship) != 'object') {
    var shipId = parseInt(ship);
    ship = _g.data.ships[shipId];
  } else {
    var shipId = ship['id'];
  }

  var content = '',
      shipType = ship.getType(),
      hasExtraIllust = false;

  switch (mode) {
    case 'names':
      var names = [];
      ship.getSeriesData().forEach(function (thisSeries) {
        var thisName = _g.data.ships[thisSeries.id].getNameNoSuffix();

        if ($.inArray(thisName, names) < 0) names.push(thisName);
      });
      content = names.join(' / ');
      break;

    default:
      content = (shipType ? '<small>' + shipType + '</small>' : '') + ship.getName(_g.joint);
      break;
  }

  if (extraIllust) {
    var seriesData = ship.getSeriesData();
    seriesData.forEach(function (data_cur, i) {
      hasExtraIllust = data_cur.illust_extra && data_cur.illust_extra.length && data_cur.illust_extra[0] ? true : false;

      if (!hasExtraIllust && data_cur.illust_delete) {
        var data_prev = i ? seriesData[i - 1] : null;
        if (data_prev) hasExtraIllust = data_prev.illust_extra && data_prev.illust_extra.length && data_prev.illust_extra[0] ? true : false;
      }
    });
  }

  return _tmpl["export"]("<".concat(tagName) + (tagName == 'a' ? " href=\"".concat(_g.getLink('ships', shipId), "\"") : '') + " class=\"link_ship\" data-shipid=\"".concat(shipId, "\" data-infos=\"[[SHIP::").concat(shipId, "]]\"") + (hasExtraIllust ? " icon=\"hanger\"" : '') + ">" + "<img src=\"".concat(_g.getImg('ships', shipId, 0), "\"/>") + "<span>".concat(content, "</span>") + "</".concat(tagName, ">"), returnHTML);
};

_tmpl.textlink_entity = function (entity, tagName, returnHTML) {
  if (!entity) return false;
  if (tagName && _typeof(tagName) == 'object') return _tmpl.textlink_entity(entity, tagName['tagName'] || null, tagName['returnHTML'] || null);
  tagName = tagName || 'a';
  returnHTML = returnHTML || false;

  if (_typeof(entity) != 'object') {
    var entityId = parseInt(entity);
    entity = _g.data.entities[entityId];
  } else {
    var entityId = entity['id'];
  }

  return _tmpl["export"]('<' + tagName + (tagName == 'a' ? ' href="?infos=entity&id=' + entityId + '"' : '') + ' data-entityid="' + entityId + '" data-infos="[[ENTITY::' + entityId + ']]">' + entity._name + '</' + tagName + '>', returnHTML);
};

_tmpl.textlink_ship = function (ship, tagName, returnHTML) {
  if (!ship) return false;
  if (tagName && _typeof(tagName) == 'object') return _tmpl.textlink_ship(ship, tagName['tagName'] || null, tagName['returnHTML'] || null);
  tagName = tagName || 'a';
  returnHTML = returnHTML || false;

  if (_typeof(ship) != 'object') {
    var shipId = parseInt(ship);
    ship = _g.data.ships[shipId];
  } else {
    var shipId = ship['id'];
  }

  var shipType = ship.getType();
  return _tmpl["export"]('<' + tagName + (tagName == 'a' ? ' href="?infos=ship&id=' + shipId + '"' : '') + ' data-shipid="' + shipId + '" data-infos="[[SHIP::' + shipId + ']]">' + (shipType ? '[' + shipType + '] ' : '') + ship.getName(_g.joint) + '</' + tagName + '>', returnHTML);
};

var Page = function () {
  function Page($page) {
    _classCallCheck(this, Page);

    this.lastScrollY = 0;
    $page.on({
      'pageHide': function () {
        this.modeSelectionExit();
      }.bind(this)
    });
  }

  _createClass(Page, [{
    key: "modeSelectionEnter",
    value: function modeSelectionEnter(callback_select, callback_enter) {
      var _callback_select;

      callback_select = callback_select || function () {};

      _callback_select = function () {
        callback_select(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5], arguments[6], arguments[7], arguments[8], arguments[9], arguments[10]);
        setTimeout(function () {
          this.modeSelectionExit();
        }.bind(this), 10);
      }.bind(this);

      _frame.app_main.mode_selection_callback = _callback_select;

      _frame.app_main.mode_selection_on(callback_enter);

      return _callback_select;
    }
  }, {
    key: "modeSelectionExit",
    value: function modeSelectionExit() {
      if (!_frame.dom.layout.hasClass('mode-selection')) return false;

      _frame.app_main.mode_selection_off();
    }
  }]);

  return Page;
}();

Page.hide = function (page) {
  page = page || _frame.app_main.cur_page;

  if (typeof page == 'string') {
    if (_frame.app_main.page_dom[page]) _frame.app_main.page_dom[page].addClass('off').trigger('pageHide').detach();
    if (_frame.dom.navs[page]) _frame.dom.navs[page].removeClass('on');
  } else {
    page.addClass('off').trigger('pageHide').detach();
    var p = page.attr('page');
    if (p && _frame.dom.navs[p]) _frame.dom.navs[p].removeClass('on');
  }

  _frame.app_main.cur_page = null;
};

Page.show = function (page) {
  page = page || _frame.app_main.cur_page;
  var p;

  if (typeof page == 'string') {
    if (_frame.app_main.page_dom[page]) _frame.app_main.page_dom[page].appendTo(_frame.dom.main).removeClass('off').trigger('pageShow');
    if (_frame.dom.navs[page]) _frame.dom.navs[page].addClass('on');
    p = page;
  } else {
    page.appendTo(_frame.dom.main).removeClass('off').trigger('pageShow');
    p = page.attr('page');
  }

  if (_frame.app_main.cur_page) Page.hide(_frame.app_main.cur_page);

  if (p) {
    if (_frame.dom.navs[p]) _frame.dom.navs[p].addClass('on');

    _frame.dom.layout.attr('data-theme', p);

    _frame.app_main.cur_page = p;
  }
};

Page.resetScroll = function (page) {
  page = page || _frame.app_main.cur_page;
  if (typeof page == 'string') page = _frame.app_main.page_dom[page];

  if (page && page.length) {
    page.attr('scrollbody', 0);
    page.find('[scrollbody]').each(function (i, el) {
      el.setAttribute('scrollbody', 0);
    });
  }
};

Page.init = function (page) {
  page = page || _frame.app_main.cur_page;
  var p;

  if (typeof page == 'string') {
    p = page;
    page = _frame.app_main.page_dom[page];
  } else {
    page.appendTo(_frame.dom.main).removeClass('off').trigger('pageShow');
    p = page.attr('page');
  }

  if (!page || !page.length) return;
  if (p && _frame.app_main.page[p] && _frame.app_main.page[p].init) _frame.app_main.page[p].init(page);

  _p.initDOM(page);

  page.on({
    'pageShow.scrollbody': function pageShowScrollbody() {
      page.scrollTop(page.attr('scrollbody') || 0);
      page.find('[scrollbody]').each(function (i, el) {
        el.scrollTop = el.getAttribute('scrollbody') || 0;
      });
    }
  });
};

_frame.app_main.page['fleets'] = {
  init: function init($page) {
    this.object = new (function (_Page) {
      _inherits(_class, _Page);

      var _super = _createSuper(_class);

      function _class($page) {
        var _this2;

        _classCallCheck(this, _class);

        _this2 = _super.call(this, $page);
        $page.on({
          'pageShow': function pageShow() {
            if (this.inited) {
              $page.children('.tablelist').data('tablelist').refresh();
            }

            this.inited = true;
          }
        });
        return _this2;
      }

      return _class;
    }(Page))($page);
  }
};
_frame.app_main.page['ships'] = {
  init: function init($page) {
    this.object = new (function (_Page2) {
      _inherits(_class2, _Page2);

      var _super2 = _createSuper(_class2);

      function _class2($page) {
        var _this3;

        _classCallCheck(this, _class2);

        _this3 = _super2.call(this, $page);
        _this3.tablelist = $page.find('.tablelist');
        _this3.tablelistObj = _this3.tablelist.data('tablelist');
        $page.on({
          'modeSelectionEnter': function (e, callback_select) {
            this.modeSelectionEnter(callback_select);
          }.bind(_assertThisInitialized(_this3)),
          'pageShow': function () {
            if (!this.tablelistObj) this.tablelistObj = this.tablelist.data('tablelist');
            this.tablelistObj.onEnter();
          }.bind(_assertThisInitialized(_this3)),
          'pageHide': function () {
            if (this.tablelistObj) {
              this.tablelistObj.search();
              this.tablelistObj.dom.searchInput.val('');
              this.tablelistObj.onExit();
            }
          }.bind(_assertThisInitialized(_this3))
        });
        return _this3;
      }

      return _class2;
    }(Page))($page);
  }
};
_frame.app_main.page['equipments'] = {
  init: function init($page) {
    this.object = new (function (_Page3) {
      _inherits(_class3, _Page3);

      var _super3 = _createSuper(_class3);

      function _class3($page) {
        var _this4;

        _classCallCheck(this, _class3);

        _this4 = _super3.call(this, $page);
        _this4.tablelist = $page.find('.tablelist');
        _this4.tablelistObj = _this4.tablelist.data('tablelist');
        $page.on({
          'modeSelectionEnter': function (e, callback_select, callback_enter) {
            this.modeSelectionEnter(callback_select, callback_enter);
          }.bind(_assertThisInitialized(_this4)),
          'pageShow': function () {
            if (!this.tablelistObj) this.tablelistObj = this.tablelist.data('tablelist');

            if (this.tablelistObj) {
              this.tablelistObj.thead_redraw();
              this.tablelistObj.apply_types();
            }
          }.bind(_assertThisInitialized(_this4)),
          'pageHide': function () {
            TablelistEquipments.types = [];
            TablelistEquipments.shipId = null;

            if (this.tablelistObj) {
              this.tablelistObj.apply_types();
            }
          }.bind(_assertThisInitialized(_this4))
        });
        return _this4;
      }

      return _class3;
    }(Page))($page);
  }
};
_frame.app_main.page['arsenal'] = {};

_frame.app_main.page['arsenal'].init = function (page) {
  $('<input/>', {
    'id': 'arsenal_headtab-1',
    'type': 'radio',
    'name': 'arsenal_headtab'
  }).prop('checked', true).appendTo(page);
  $('<input/>', {
    'id': 'arsenal_headtab-2',
    'type': 'radio',
    'name': 'arsenal_headtab'
  }).appendTo(page);
  var tabs = $('<div/>', {
    'class': 'tabs',
    'html': '<label for="arsenal_headtab-1" class="tab">' + '每日改修' + '</label>' + '<label for="arsenal_headtab-2" class="tab">' + '明细表' + '</label>'
  }).appendTo(page);
  var akashi = $('<span/>', {
    'animation': Math.floor(Math.random() * 3 + 1)
  }).on(_g.event.animationiteration, function () {
    akashi.attr('animation', Math.floor(Math.random() * 3 + 1));
  }).appendTo($('<div class="akashi"/>').prependTo(tabs));
  this.elMain = $('<div class="main" scrollbody/>').append(this.init_weekday()).append(this.init_all()).appendTo(page);
  page.find('input[type="radio"]').on('change', function () {
    _frame.app_main.page['arsenal'].elMain.scrollTop(0);
  });
};

_frame.app_main.page['arsenal'].init_weekday = function () {
  var body = $('<div class="body body-1 body-weekday"/>'),
      weekday = $('<div class="weekday"/>').appendTo(body),
      weekday_select = $('<div/>').html('<span>星期</span>').appendTo(weekday),
      radios = [],
      checkbox_showmeterials = $('<input/>', {
    'type': 'checkbox',
    'id': 'arsenal_weekday-showmeterials'
  }).prop('checked', Lockr.get('arsenal_weekday-showmeterials', true) ? true : false).on('change', function () {
    Lockr.set('arsenal_weekday-showmeterials', checkbox_showmeterials.prop('checked') ? 1 : 0);
  }).prependTo(body);

  for (var i = 0; i < 7; i++) {
    var text;

    switch (i) {
      case 0:
        text = '日';
        break;

      case 1:
        text = '一';
        break;

      case 2:
        text = '二';
        break;

      case 3:
        text = '三';
        break;

      case 4:
        text = '四';
        break;

      case 5:
        text = '五';
        break;

      case 6:
        text = '六';
        break;
    }

    radios[i] = $('<input/>', {
      'id': 'arsenal_weekday-' + i,
      'type': 'radio',
      'name': 'arsenal_weekday'
    }).prependTo(body);
    $('<label/>', {
      'html': text,
      'for': 'arsenal_weekday-' + i
    }).appendTo(weekday_select);
    $('<div class="content content-' + i + '"/>').append(_p.el.flexgrid.create().appendDOM(function () {
      var o = $();

      for (var j in _g.data.arsenal_weekday[i]) {
        var d = _g.data.arsenal_weekday[i][j];
        o = o.add(_tmpl.improvement(d[0], d[1], d[2]).addClass('unit'));
      }

      return o;
    })).appendTo(body);
  }

  $('<span/>', {
    'html': '<b>*</b>日本东京时间'
  }).appendTo(weekday);
  $('<label/>', {
    'for': 'arsenal_weekday-showmeterials',
    'html': '显示资源消耗'
  }).appendTo(weekday);
  var date = new Date();
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  date.setTime(date.getTime() + 9 * 60 * 60 * 1000);
  radios[date.getDay()].prop('checked', true);
  return body;
};

_frame.app_main.page['arsenal'].init_all = function () {
  var body = $('<div class="body body-2 body-all"/>');

  _g.data.arsenal_all.forEach(function (currentValue) {
    _tmpl.improvement_detail(currentValue).appendTo(body);
  });

  return body;
};

_frame.app_main.page['about'] = {};

_frame.app_main.page['about'].journal_parse = function (raw) {
  var searchRes,
      scrapePtrn = /\[\[([^\:]+)\:([0-9]+)\]\]/gi,
      resultHTML = markdown.toHTML(raw);

  while ((searchRes = scrapePtrn.exec(raw)) !== null) {
    try {
      resultHTML = resultHTML.replace(searchRes[0], _tmpl['link_' + searchRes[1].toLowerCase()](searchRes[2], null, true));
    } catch (e) {}
  }

  searchRes = null;
  scrapePtrn = /\[\[([^\:]+)\:([0-9]+)\:TEXT\]\]/gi;

  while ((searchRes = scrapePtrn.exec(raw)) !== null) {
    try {
      resultHTML = resultHTML.replace(searchRes[0], _tmpl['textlink_' + searchRes[1].toLowerCase()](searchRes[2], null, true));
    } catch (e) {}
  }

  return resultHTML;
};

_frame.app_main.page['about'].journaltitle = function (d, tagName) {
  d = d || {};
  tagName = tagName || 'h3';
  return '<h3>' + (d['hotfix'] ? 'HOTFIX - ' : '') + (d['type'] == 'app' ? '' : (d['type'] == 'app-db' ? 'DB' : d['type']).toUpperCase() + ' / ') + d['version'] + '<small>' + (d['date'] ? d['date'] : 'WIP') + '</small>' + '</h3>';
};

_frame.app_main.page['about'].init = function (page) {
  var i = 0;

  function addUpdateJournal(updateData) {
    var journal = new Journal(updateData);
    journal.genSection(i < 3).appendTo(page);
    i++;
  }

  var promise_chain = Q.fcall(function () {});
  promise_chain.then(function () {
    var deferred = Q.defer();

    _db.updates.find({
      'date': ""
    }).sort({
      'date': -1,
      'version': -1
    }).exec(function (err, docs) {
      docs.forEach(function (doc) {
        addUpdateJournal(doc);
      });
      deferred.resolve(err);
    });

    return deferred.promise;
  }).then(function () {
    var deferred = Q.defer();

    _db.updates.find({
      $not: {
        'date': ""
      }
    }).sort({
      'date': -1,
      'version': -1
    }).exec(function (err, docs) {
      docs.forEach(function (doc) {
        addUpdateJournal(doc);
      });
      deferred.resolve(err);
    });

    return deferred.promise;
  });
};

var Journal = function () {
  function Journal(data) {
    _classCallCheck(this, Journal);

    this.data = data;
  }

  _createClass(Journal, [{
    key: "genTitle",
    value: function genTitle() {
      var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'h3';
      return $("<".concat(tagName, ">") + (this.data.hotfix ? '[hotfix] ' : '') + (this.data.type == 'app' ? '' : (this.data.type == 'app-db' ? 'DB' : this.data.type).toUpperCase()) + (this.data.type == 'app' ? this.data.version : '') + '<small>' + (this.data.date ? this.data.date : 'WIP') + '</small>' + "</".concat(tagName, ">"));
    }
  }, {
    key: "genContent",
    value: function genContent() {
      var raw = this.data.journal,
          searchRes,
          scrapePtrn = /\[\[([^\:]+)\:([0-9]+)\]\]/gi,
          resultHTML = markdown.toHTML(raw);

      while ((searchRes = scrapePtrn.exec(raw)) !== null) {
        try {
          resultHTML = resultHTML.replace(searchRes[0], _tmpl['link_' + searchRes[1].toLowerCase()](searchRes[2], null, true));
        } catch (e) {}
      }

      searchRes = null;
      scrapePtrn = /\[\[([^\:]+)\:([0-9]+)\:TEXT\]\]/gi;

      while ((searchRes = scrapePtrn.exec(raw)) !== null) {
        try {
          resultHTML = resultHTML.replace(searchRes[0], _tmpl['textlink_' + searchRes[1].toLowerCase()](searchRes[2], null, true));
        } catch (e) {}
      }

      this.content = $(resultHTML);
      return this.content;
    }
  }, {
    key: "genSection",
    value: function genSection(defaultShow) {
      var _this5 = this;

      var id = 'update_journal_' + this.data._id,
          checkbox = $('<input type="checkbox" id="' + id + '"/>').prop('checked', defaultShow ? true : false).on('change', function (e) {
        if (e.target.checked) _this5.show();
      });
      this.section = $('<section class="update_journal" data-version-' + this.data.type + '="' + this.data.version + '"/>').append($("<label for=\"".concat(id, "\"/>")).append(this.genTitle()));
      if (defaultShow) this.show();
      return this.section.add(checkbox.insertBefore(this.section));
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.content) this.genContent().appendTo(this.section);
    }
  }]);

  return Journal;
}();

_frame.app_main.page['calctp'] = {
  'init': function init(page) {
    page.find('form.tpcalculator').each(function (i, form) {
      form = $(form);
      var resultA = form.find('.result_a'),
          resultS = form.find('.result_s');
      form.on('input', 'input', function () {
        form.trigger('submit');
      }).on('submit', function (e) {
        e.preventDefault();
        var d = form.serializeObject(),
            data = {
          ship: {},
          equipment: {}
        },
            rA = 0,
            rS = 0;

        for (var _i2 in d) {
          var count = parseInt(d[_i2]) || 0;

          switch (_i2) {
            case 'e75':
              data.equipment[75] = count;
              break;

            case 'e68':
              data.equipment[68] = count;
              break;

            case 'e145':
              data.equipment[145] = count;
              break;

            case 'e150':
              data.equipment[150] = count;
              break;

            case 'e166':
              data.equipment[166] = count;
              break;

            case 'e167':
              data.equipment[167] = count;
              break;

            case 'e26':
              data.equipment[26] = count;
              break;

            case 'e62':
              data.equipment[62] = count;
              break;

            default:
              data.ship[_i2] = count;
              break;
          }
        }

        rS = Math.floor(Formula.calc.TP(data));
        rA = rS * 0.7;
        resultS.html(rS);
        resultA.html(Math.floor(rA));
      });
    });
  }
};

_frame.gg = function () {
  $.ajax({
    'url': 'http://fleet.moe/!/g/',
    'method': 'get',
    'dataType': 'html',
    'success': function success(data) {
      _g.isOnline = true;

      if (data) {
        _frame.dom.layout.append($('<div class="g"/>').html(data).append($('<button type="button" class="close"/>').on('click', function () {
          _frame.dom.layout.css('padding-bottom', '').removeClass('mod-g');
        }))).addClass('mod-g');
      }
    }
  });
};

var BgImg = function () {
  function BgImg(options) {
    _classCallCheck(this, BgImg);

    options = options || {};
    $.extend(true, this, BgImg.defaults, options);
  }

  _createClass(BgImg, [{
    key: "show",
    value: function show() {
      return BgImg.change(this);
    }
  }, {
    key: "save",
    value: function save() {
      return BgImg.save(this);
    }
  }, {
    key: "append",
    value: function append() {
      if (this.isDefault) {
        if (BgImg.controlsEls.listDefault) this.elThumbnail.appendTo(BgImg.controlsEls.listDefault);
      } else {
        if (BgImg.controlsEls.listCustomAdd) this.elThumbnail.insertBefore(BgImg.controlsEls.listCustomAdd);
      }

      if (BgImg.cur && BgImg.cur.name === this.name) this.elThumbnail.addClass('on');
    }
  }, {
    key: "delete",
    value: function _delete() {
      BgImg["delete"](this);
    }
  }, {
    key: "filename",
    get: function get() {
      return this.isDefault ? this.name.substr(1) : this.name;
    }
  }, {
    key: "index",
    get: function get() {
      var i = -1;
      BgImg.list.some(function (o, index) {
        if (o.name === this.name) i = index;
        return o.name === this.name;
      }.bind(this));
      return i;
    }
  }, {
    key: "els",
    get: function get() {
      if (!this._els) {
        this._els = $('<s class="bgimg"/>').css('background-image', 'url(' + this.path + ')').add($('<s class="bgimg"/>').css('background-image', 'url(' + this.blur + ')')).add($('<s class="bgimg"/>').css('background-image', 'url(' + this.blur + ')')).add($('<s class="bgimg"/>').css('background-image', 'url(' + this.blur + ')'));
      }

      return this._els;
    }
  }, {
    key: "elThumbnail",
    get: function get() {
      if (!this._elThumbnail) {
        this._elThumbnail = $('<dd/>').on('click', function () {
          BgImg.change(this);
        }.bind(this)).append($('<s/>').css('background-image', 'url(' + this.thumbnail + ')')).append($('<i/>').on('click', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();
          this.visible = !this.visible;
        }.bind(this)));
        if (!this.isDefault) this._elThumbnail.append($('<del/>').on('click', function (e) {
          e.preventDefault();
          e.stopImmediatePropagation();
          e.stopPropagation();
          this["delete"]();
        }.bind(this)));
      }

      return this._elThumbnail;
    }
  }, {
    key: "path",
    get: function get() {
      if (!this._path) this._path = BgImg.getPath(this);
      return this._path;
    }
  }, {
    key: "blur",
    get: function get() {
      if (!this._blured) this._blured = BgImg.getPath(this, 'blured');
      return this._blured;
    }
  }, {
    key: "thumbnail",
    get: function get() {
      if (!this._thumbnail) this._thumbnail = BgImg.getPath(this, 'thumbnail');
      return this._thumbnail;
    }
  }, {
    key: "visible",
    get: function get() {
      return this.elThumbnail.hasClass('is-visible');
    },
    set: function set(v) {
      if (v) {
        if (!this.visible) {
          this.elThumbnail.addClass('is-visible');
          BgImg.listVisible.push(this);
          BgImg.namesHidden.forEach(function (n, i) {
            if (n === this.name) BgImg.namesHidden.splice(i, 1);
          }.bind(this));
        }
      } else {
        if (this.visible) {
          this.elThumbnail.removeClass('is-visible');
          BgImg.listVisible.forEach(function (o, i) {
            if (o === this) BgImg.listVisible.splice(i, 1);
          }.bind(this));
          BgImg.namesHidden.push(this.name);
        }
      }

      Lockr.set('BgImgHidden', BgImg.namesHidden);
    }
  }]);

  return BgImg;
}();

BgImg["default"] = {
  isEnable: true
};
BgImg.list = [];
BgImg.listVisible = [];
BgImg.countCustom = 0;

BgImg.init = function () {
  if (BgImg.isInit) return BgImg.list;

  _g.log('背景图: START');

  BgImg.controlsInit();
  _frame.dom.bgimg = $('<div class="bgimgs"/>').appendTo(_frame.dom.layout).on(_g.event.animationend, 's', function () {
    BgImg.changeAfter();
  });

  var deferred = Q.defer(),
      _new;

  BgImg.namesHidden = Lockr.get('BgImgHidden', []);
  Q.fcall(BgImg.getDefaultImgs).then(function () {
    BgImg.list.forEach(function (o) {
      if (BgImg.namesHidden.indexOf(o.name) > -1) {
        o.visible = false;
      } else {
        o.visible = true;
      }
    });
    BgImg.ensureVisible();
    BgImg.listVisible.some(function (o) {
      if (!_new && o.name != Lockr.get('BgImgLast', '')) _new = o;
      return o.name == Lockr.get('BgImgLast', '');
    });
    Lockr.set('BgImgLast', BgImg.listVisible[0].name);
    BgImg.change(_new);

    _frame.app_main.loaded('bgimgs');

    BgImg.isInit = true;

    _g.log('背景图: DONE');

    deferred.resolve();
  });
  return deferred.promise;
};

BgImg.getObj = function (o) {
  if (typeof o == 'string') {
    var r;
    BgImg.list.some(function (obj) {
      if (obj.name === o) r = obj;
      return obj.name === o;
    });
    return r;
  }

  if (typeof o == 'number') {
    return BgImg.list[o];
  }

  if (typeof o == 'undefined') {
    return BgImg.cur;
  }

  return o;
};

BgImg.change = function (o) {
  if (!BgImg.list.length) return;

  if (typeof o == 'undefined') {
    BgImg.ensureVisible();
    o = BgImg.listVisible[_g.randInt(BgImg.listVisible.length)];

    if (BgImg.cur && o.name === BgImg.cur.name) {
      if (BgImg.listVisible.length == 1) return o;
      return BgImg.change();
    }
  } else {
    o = BgImg.getObj(o);
    if (BgImg.cur && o.name === BgImg.cur.name) return o;
  }

  if (BgImg.cur) {
    BgImg.lastToHide = BgImg.cur;
    BgImg.cur.elThumbnail.removeClass('on');
  }

  o.els.addClass(BgImg.cur ? 'fadein' : '');
  o.els.eq(0).appendTo(_frame.dom.bgimg);
  o.els.eq(1).appendTo(_frame.dom.nav);
  o.els.eq(2).appendTo(_frame.dom.main);
  o.els.eq(3).appendTo(BgImg.controlsEls.bgimgs);
  o.elThumbnail.addClass('on');
  BgImg.cur = o;
  return o;
};

BgImg.changeAfter = function () {
  if (BgImg.lastToHide) {
    BgImg.lastToHide.els.detach();
    delete BgImg.lastToHide;
  }
};

BgImg.upload = function () {
  if (!BgImg.fileSelector) {
    BgImg.fileSelector = $('<input type="file" class="none"/>').on('change', function (e) {
      if (BgImg.fileSelector.val()) {
        var _done = function _done() {
          BgImg.controlsEls.body.removeClass('is-loading');
          BgImg.fileSelector.prop('disabled', false);
          BgImg.fileSelector.val('');

          _g.log('BgImg.add() complete');
        };

        var o,
            mime = e.target.files[0].type;

        if (!mime) {
          _g.badgeError('文件格式未知');

          _done();

          return;
        } else {
          mime = mime.split('/');

          if (mime[0].toLowerCase() != 'image') {
            _g.badgeError('请选择图片文件');

            _done();

            return;
          } else if (['bmp', 'jpg', 'jpeg', 'png', 'gif', 'tif', 'tiff', 'webp'].indexOf(mime[1].toLowerCase()) < 0) {
            _g.badgeError('当前仅支持以下格式: BMP、JPG、PNG、GIF、TIFF');

            _done();

            return;
          }
        }

        Q.fcall(function () {
          BgImg.controlsEls.body.addClass('is-loading');
          BgImg.fileSelector.prop('disabled', true);
          return BgImg.readFile(e);
        }).then(function (obj) {
          o = obj;
          BgImg.list.push(o);
          return BgImg.generate(o, 'thumbnail');
        }).then(function (canvas) {
          return BgImg.set(o, 'thumbnail', canvas);
        }).then(function () {
          return BgImg.generate(o, 'blured');
        }).then(function (canvas) {
          return BgImg.set(o, 'blured', canvas);
        }).then(function () {
          if (!BgImg.countCustom) {
            BgImg.list.forEach(function (obj) {
              if (obj.visible) obj.visible = false;
            });
          }

          o.append();
          o.show();
          o.visible = true;
          BgImg.countCustom++;
        })["catch"](function (err) {
          _g.error(err, '自定义背景图');

          if (o) o["delete"]();
        }).done(_done);
      }
    });
  }

  BgImg.fileSelector.trigger('click');
};

BgImg.generate = function (o, t) {
  o = BgImg.getObj(o);
  var deferred = Q.defer(),
      img;

  function _error(e) {
    deferred.reject('读取图片文件发生错误');
  }

  switch (t) {
    case 'thumbnail':
      img = $('<img/>', {
        'src': o.path
      }).on({
        'load': function load() {
          var cv = canvas.downScale(img[0], 150 / Math.min(img[0].width, img[0].height));
          img.remove();
          deferred.resolve(cv);
        },
        'error': _error
      }).appendTo($body);
      break;

    case 'blured':
      img = $('<img/>', {
        'src': o.path
      }).on({
        'load': function load() {
          var cv = $('<canvas/>');
          canvas.blur.image(img[0], cv[0], 20 * Math.min(img[0].width, img[0].height) / 1080);
          img.remove();
          deferred.resolve(cv[0]);
        },
        'error': _error
      }).appendTo($body);
      break;
  }

  return deferred.promise;
};

BgImg.getUniqueName = function (n) {
  var o,
      i = 1,
      n2 = n;
  if (typeof n == 'number') n = '' + n;

  while (o = BgImg.getObj(n2)) {
    n2 = n.split('.');
    var ext = n2.pop();
    n2 = n2.join('.') + '-' + i++ + '.' + ext;
  }

  return n2;
};

BgImg.ensureVisible = function () {
  if (!BgImg.listVisible.length) {
    BgImg.list.forEach(function (o) {
      if (BgImg.countCustom && !o.isDefault || !BgImg.countCustom && o.isDefault) {
        o.visible = true;
      }
    });
  }
};

BgImg.controlsInit = function () {
  if (BgImg.controlsEls) return BgImg.controlsEls.container;
  BgImg.controlsEls = {};
  BgImg.controlsEls.body = $('<div class="bgcontrols"/>').appendTo(_frame.dom.layout).on(_g.event.animationend, function (e) {
    if (e.currentTarget == e.target) {
      if (BgImg.controlsShowing) {
        BgImg.controlsHideAfter();
      } else {
        BgImg.controlsShowAfter();
      }
    }
  }).append(BgImg.controlsEls.container = $('<div class="wrapper"/>').append(BgImg.controlsEls.bgimgs = $('<div class="bgimgs"/>')));
  return BgImg.controlsEls.container;
};

BgImg.controlsShow = function () {
  if (!BgImg.controlsEls || BgImg.controlsShowing) return;

  if (!BgImg.controlsEls.listDefault) {
    $('<div class="controls"/>').appendTo(BgImg.controlsEls.container).append(BgImg.controlsEls.btnViewingToggle = $('<button icon="eye"/>').on('click', BgImg.controlsViewingToggle)).append($('<button icon="floppy-disk"/>').on('click', function () {
      BgImg.save();
    })).append($('<button icon="arrow-set2-right"/>').on('click', BgImg.controlsHide));
    $('<div class="list"/>').appendTo(BgImg.controlsEls.container).append($('<dl/>', {
      'class': 'notes',
      'html': '勾选的图片将会出现在背景图随机队列中'
    })).append(BgImg.controlsEls.listCustom = $('<dl/>', {
      'html': "<dt>\u81EA\u5B9A\u4E49</dt>"
    }).prepend(function () {
      if (BgImg.quota) return $('<small/>').append(BgImg.controlsEls.listCustomQuotaUsed = $("<span>".concat(_g.getSize(BgImg.quotaUsed, 'm'), "</span>"))).append(" / <span>".concat(_g.getSize(BgImg.quota, 'm'), "</span>"));
    }).append(BgImg.controlsEls.listCustomAdd = $('<dd/>', {
      'class': 'add',
      'html': '<s></s>'
    }).on('click', function () {
      BgImg.upload();
    }))).append(BgImg.controlsEls.listDefault = $('<dl/>', {
      'html': '<dt></dt>'
    }));
    BgImg.list.forEach(function (o) {
      o.append();
    });
  }

  _frame.dom.layout.addClass('mod-bgcontrols');
};

BgImg.controlsShowAfter = function () {
  if (!BgImg.controlsEls || BgImg.controlsShowing) return;
  BgImg.controlsEls.body.addClass('is-on');
  BgImg.controlsShowing = true;
};

BgImg.controlsHide = function () {
  if (!BgImg.controlsEls || !BgImg.controlsShowing) return;
  BgImg.controlsEls.body.addClass('is-hiding');
};

BgImg.controlsHideAfter = function () {
  if (!BgImg.controlsEls || !BgImg.controlsShowing) return;

  _frame.dom.layout.removeClass('mod-bgcontrols');

  BgImg.controlsEls.body.removeClass('is-on is-hiding');
  BgImg.controlsShowing = false;
};

BgImg.controlsToggle = function () {
  if (BgImg.controlsShowing) return BgImg.controlsHide();
  return BgImg.controlsShow();
};

BgImg.controlsViewingToggle = function () {
  BgImg.controlsEls.body.toggleClass('mod-viewing');
  BgImg.controlsEls.btnViewingToggle.toggleClass('on');
};

BgImg.getDefaultImgs = function () {
  function _list(p) {
    return node.fs.readdirSync(p).filter(function (file) {
      return !node.fs.lstatSync(node.path.join(p, file)).isDirectory();
    }).map(function (v) {
      return {
        name: v,
        time: node.fs.statSync(node.path.join(p, v)).mtime.getTime()
      };
    }).sort(function (a, b) {
      return b.time - a.time;
    }).map(function (v) {
      return v.name;
    });
  }

  _list(_g.path.bgimg_dir).forEach(function (name) {
    BgImg.list.push(new BgImg({
      'name': '*' + name,
      'isDefault': true
    }));
  });

  _list(_g.path.bgimg_custom_dir).forEach(function (name) {
    BgImg.countCustom++;
    BgImg.list.push(new BgImg({
      'name': name
    }));
  });

  return BgImg.list;
};

BgImg.getPath = function (o, t) {
  o = BgImg.getObj(o);
  var folder = o.isDefault ? _g.path.bgimg_dir : _g.path.bgimg_custom_dir;
  if (t) return 'file://' + encodeURI(node.path.join(folder, t, o.filename).replace(/\\/g, '/'));
  return 'file://' + encodeURI(node.path.join(folder, o.filename).replace(/\\/g, '/'));
};

BgImg.save = function (o) {
  o = BgImg.getObj(o);

  _g.save(node.path.join(o.isDefault ? _g.path.bgimg_dir : _g.path.bgimg_custom_dir, o.filename), o.filename);
};

BgImg.readFile = function (e) {
  node.mkdirp.sync(node.path.normalize(_g.path.bgimg_custom_dir));
  node.mkdirp.sync(node.path.join(_g.path.bgimg_custom_dir, 'blured'));
  node.mkdirp.sync(node.path.join(_g.path.bgimg_custom_dir, 'thumbnail'));
  var deferred = Q.defer(),
      path = BgImg.fileSelector.val(),
      pathParse = node.path.parse(path),
      streamRead = node.fs.createReadStream(path),
      streamWrite = node.fs.createWriteStream(node.path.join(_g.path.bgimg_custom_dir, pathParse.base));
  streamRead.on('error', function (err) {
    deferred.reject('文件载入失败', new Error(err));
  });
  streamRead.on('close', function (err) {
    deferred.resolve(new BgImg({
      'name': pathParse.base
    }));
  });
  streamRead.pipe(streamWrite);
  return deferred.promise;
};

BgImg.set = function (o, t, canvas) {
  o = BgImg.getObj(o);
  var base64 = canvas.toDataURL("image/jpeg", 0.4),
      deferred = Q.defer();

  function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (matches.length !== 3) {
      return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');
    return response;
  }

  var imageBuffer = decodeBase64Image(base64),
      folder = o.isDefault ? _g.path.bgimg_dir : _g.path.bgimg_custom_dir;
  node.fs.writeFile(node.path.join(folder, t, o.name), imageBuffer.data, function (err) {
    canvas.remove();
    deferred.resolve();
  });
  return deferred.promise;
};

BgImg["delete"] = function (o) {
  o = BgImg.getObj(o);
  var deferred = Q.defer();
  o.elThumbnail.remove();
  o.els.remove();
  BgImg.listVisible.forEach(function (obj, i) {
    if (obj === o) BgImg.listVisible.splice(i, 1);
  });
  BgImg.namesHidden.forEach(function (n, i) {
    if (n === o.name) BgImg.namesHidden.splice(i, 1);
  });
  Lockr.set('BgImgHidden', BgImg.namesHidden);
  Q.fcall(function () {
    var deferred = Q.defer();
    node.fs.unlink(node.path.join(_g.path.bgimg_custom_dir, o.name), function (err) {
      deferred.resolve();
    });
    return deferred.promise;
  }).then(function () {
    var deferred = Q.defer();
    node.fs.unlink(node.path.join(_g.path.bgimg_custom_dir, 'blured', o.name), function (err) {
      deferred.resolve();
    });
    return deferred.promise;
  }).then(function () {
    var deferred = Q.defer();
    node.fs.unlink(node.path.join(_g.path.bgimg_custom_dir, 'thumbnail', o.name), function (err) {
      deferred.resolve();
    });
    return deferred.promise;
  }).then(function () {
    BgImg.countCustom--;
    BgImg.list.forEach(function (obj, i) {
      if (obj === o) BgImg.list.splice(i, 1);
    });
    if (BgImg.cur === o) BgImg.change();
    deferred.resolve();
  });
  return deferred.promise;
};

_frame.infos = {
  historyLength: -1,
  historyCurrent: -1,
  contentCache: {},
  getContent: function getContent(type, id) {
    if (!this.contentCache[type]) this.contentCache[type] = {};

    function initcont($el) {
      return _p.initDOM($el.addClass('infosbody').attr({
        'data-infos-type': type,
        'data-infos-id': id
      }));
    }

    if (id == '__NEW__') return initcont(this['__' + type](id));
    if (id == '__OUTPUT__') this.contentCache[type][id] = initcont(this['__' + type + '__OUTPUT'](id)).removeAttr('data-infos-id');

    if (!this.contentCache[type][id]) {
      this.contentCache[type][id] = initcont(this['__' + type](id));
    }

    return this.contentCache[type][id];
  },
  show: function show(cont, el, doNotPushHistory) {
    var exp = /^\[\[([^:]+)::(.+)\]\]$/.exec(cont),
        infosType,
        infosId;

    if (exp && exp.length > 2) {
      infosType = exp[1].toLowerCase();
      if (isNaN(exp[2])) infosId = exp[2];else infosId = parseInt(exp[2]);

      switch (infosType) {
        case 'item':
        case 'equip':
          infosType = 'equipment';
          break;
      }
    } else {
      return;
    }

    if (this.curContent == infosType + '::' + infosId) return this.dom.container.children('div:first-child');

    if (!doNotPushHistory) {
      this.historyCurrent++;
      this.historyLength = this.historyCurrent;

      _frame.app_main.pushState({
        'infos': infosType,
        'id': infosId,
        'infosHistoryIndex': this.historyCurrent
      }, null, '?infos=' + infosType + '&id=' + infosId);
    }

    this.show_func(infosType, infosId, doNotPushHistory);
  },
  show_func: function show_func(type, id, doNotPushHistory, infosHistoryIndex) {
    if (!type || !id) return false;

    _g.pageChangeBefore();

    if (this.curContent == type + '::' + id) return this.dom.container.children('div:first-child');
    type = type.toLowerCase();
    if (isNaN(id)) id = id;else id = parseInt(id);
    var cont = '',
        title;

    if (!this.dom) {
      this.dom = {
        'main': $('<div class="page-container infos"/>').appendTo(_frame.dom.main)
      };
      this.dom.container = $('<div class="wrapper"/>').appendTo(this.dom.main);

      _frame.dom.btnHistoryBack.on(eventName('transitionend', 'infos_hide'), function (e) {
        if (e.currentTarget == e.target && e.originalEvent.propertyName == 'opacity' && parseFloat(_frame.dom.btnHistoryBack.css('opacity')) == 0) {
          _frame.infos.hide_finish();
        }
      });
    }

    infosHistoryIndex = typeof infosHistoryIndex != 'undefined' ? infosHistoryIndex : this.historyCurrent;
    this.historyCurrent = infosHistoryIndex;
    if (this.historyCurrent == this.historyLength && this.historyCurrent > -1) _frame.dom.btnHistoryForward.addClass('disabled');

    _frame.dom.layout.addClass('is-infos-show');

    switch (type) {
      case 'ship':
      case 'equipment':
      case 'entity':
        cont = this.getContent(type, id);
        this.dom.main.attr('data-infostype', type);
        title = cont.attr('data-infos-title');
        break;

      case 'fleet':
        cont = this.getContent(type, id);
        this.dom.main.attr('data-infostype', 'fleet');
        TablelistEquipments.types = [];
        break;
    }

    switch (type) {
      case 'ship':
        _g.title(_frame.app_main.navtitle.ships);

        break;

      case 'equipment':
        _g.title(_frame.app_main.navtitle.equipments);

        break;

      case 'entity':
        _g.title(_frame.app_main.navtitle.entities);

        break;

      case 'fleet':
        _g.title(_frame.app_main.navtitle.fleets);

        break;
    }

    var contentDOM = cont.append ? cont : $(cont),
        is_firstShow = !contentDOM.data('is_infosinit');

    if (!contentDOM.data('is_infosinit')) {
      if (_frame.infos['__' + type + '_init']) _frame.infos['__' + type + '_init'](contentDOM);
      contentDOM.data('is_infosinit', true).on(eventName('transitionend', 'hide'), function (e) {
        if (e.currentTarget == e.target && e.originalEvent.propertyName == 'opacity' && parseInt(contentDOM.css('opacity')) == 0) {
          contentDOM.detach().data('is_show', false).trigger('hidden');
        }
      });
    }

    contentDOM.prependTo(this.dom.container).trigger('show', [is_firstShow]).data('is_show', true);
    this.dom.main.scrollTop(0);
    this.curContent = type + '::' + id;

    if (_frame.app_main.cur_page) {
      Page.hide(_frame.app_main.cur_page);
    }

    _frame.dom.layout.attr('data-theme', cont.attr('data-theme') || type);

    setTimeout(function () {
      _frame.dom.layout.addClass('is-infos-on');

      if (_frame.infos.last != title) _ga.counter(location.search);
      _frame.infos.last = title;
    }, 1);
  },
  hide: function hide() {
    if (!this.dom || !this.curContent) return false;

    _frame.dom.layout.removeClass('is-infos-on');

    _frame.dom.btnHistoryForward.addClass('disabled');

    this.curContent = null;
  },
  hide_finish: function hide_finish() {
    if (this.curContent) return false;

    _frame.dom.layout.removeClass('is-infos-show');

    this.dom.main.attr({
      'data-infostype': '',
      'data-theme': ''
    });
    this.historyLength = -1;
    this.historyCurrent = -1;
  },
  click: function click(el) {
    this.show(el.attr('data-infos'), el, el.attr('data-infos-nohistory'));
  },
  init: function init() {
    if (this.is_init) return true;
    $body.on('click._infos', '[data-infos]', function (e) {
      if (!(e.target.tagName.toLowerCase() == 'input' && e.target.className == 'compare')) {
        _frame.infos.click($(this));

        if (e.target.tagName.toLowerCase() == 'a') e.preventDefault();
      }
    });
    this.is_init = true;
    return true;
  }
};

_frame.infos.__entity = function (id) {
  var d = _g.data.entities[id],
      dom = $('<div class="infos-entity"/>').attr('data-infos-title', d._name + ' - 声优&画师');

  _g.log(d);

  $('<div class="title"/>').html('<h2 data-content="' + d.getName() + '">' + d.getName() + '</h2>' + '<small>' + d.getName('ja_jp') + '</small>').appendTo(dom);

  if (d.picture && d.picture.avatar) {
    dom.addClass('is-hasavatar');
    $('<img/>', {
      'src': d.picture.avatar,
      'class': 'avatar'
    }).appendTo(dom);
  }

  var appendInfos = function appendInfos(title, t) {
    if (!d.relation || !d.relation[t] || !d.relation[t].length) return;

    var container = $('<div class="entity-info"/>').html('<h4 data-content="' + title + '">' + title + '<small>(' + d.relation[t].length + ')</small>' + '</h4>').appendTo(dom),
        flexgrid = _p.el.flexgrid.create().appendTo(container).addClass('list-ship');

    d.relation[t].forEach(function (seriesShipIds) {
      flexgrid.appendDOM(_tmpl.link_ship(seriesShipIds[seriesShipIds.length - 1], {
        mode: 'names',
        extraIllust: t == 'illustrator'
      }).addClass('unit'));
    });
  };

  appendInfos('配音', 'cv');
  appendInfos('绘制', 'illustrator');
  return dom;
};

_frame.infos.__equipment = function (id) {
  var d = _g.data.items[id],
      isAircraft = $.inArray(_g.data.items[id].type, _g.data.item_type_collections[3].types) > -1;

  _g.log(d);

  function _stat(stat, title, bonus) {
    if (d['stat'][stat]) {
      if (Formula.equipmentType.isInterceptor(d)) {
        switch (stat) {
          case 'hit':
            title = '对爆';
            break;

          case 'evasion':
            title = '迎击';
            break;
        }
      }

      var value = bonus ? bonus[stat] : d.stat[stat];
      if (!value && bonus) return undefined;
      var html = '<small class="stat-' + stat + '">' + (bonus ? '' : title) + '</small>';

      switch (stat) {
        case 'range':
          html += '<em>' + _g.getStatRange(value) + '</em>';
          break;

        case 'distance':
          html += '<em>' + value + '</em>';
          break;

        default:
          {
            var number = parseInt(value);
            html += '<em' + (number < 0 ? ' class="negative"' : '') + '>' + (number > 0 ? '+' : '') + number + '</em>';
            break;
          }
      }

      return $('<span/>').html(html).appendTo(stat_container);
    }
  }

  var dom = $('<div class="infos-equipment"/>').attr('data-infos-title', d._name + ' - 装备');
  var upgradable = d['upgrade_to'] && d['upgrade_to'].push && d['upgrade_to'].length ? true : false;
  var title = $('<div class="title right-gutter"/>').html('<h2 data-content="' + d.getName() + '">' + d.getName() + '</h2>' + '<small>' + '<span data-tip="图鉴编号">No.' + d['id'] + '</span>' + (d['type'] ? d.getType() : '') + '</small>' + '<small>' + '<small class="indicator ' + (d['craftable'] ? 'true' : 'false') + '">' + (d['craftable'] ? '可开发' : '不可开发') + '</small>' + "<small class=\"indicator ".concat(d['improvable'] ? 'true' : 'false', "\">").concat(d['improvable'] ? '可改修' : '不可改修', "</small>") + "<small class=\"indicator ".concat(upgradable ? 'true' : 'false', "\">").concat(upgradable ? '可升级' : '不可升级', "</small>") + (isAircraft ? '<small class="indicator ' + (d['rankupgradable'] ? 'true' : 'false') + '">' + (d['rankupgradable'] ? '可提升熟练度' : '无熟练度') + '</small>' : '') + '</small>').appendTo(dom);
  var stats = $('<div class="stats"/>').html('<h4 data-content="属性">属性</h4>').appendTo(dom),
      stat_container = $('<div class="stat right-gutter"/>').appendTo(stats);

  _stat('fire', '火力');

  _stat('torpedo', '雷装');

  _stat('aa', '对空');

  _stat('asw', '对潜');

  _stat('bomb', '爆装');

  _stat('hit', '命中');

  _stat('armor', '装甲');

  _stat('evasion', '回避');

  _stat('los', '索敌');

  _stat('range', '射程');

  if (isAircraft) {
    _stat('distance', '航程');
  }

  {
    if (Array.isArray(d.stat_bonus) && d.stat_bonus.length) {
      var container = $('<div class="bonus"/>').appendTo(stat_container);
      d.stat_bonus.forEach(function (item) {
        var el = $('<div class="bonus-item" />').appendTo(container);

        if (Array.isArray(item.ships) && item.ships.length) {
          var ships = $('<div class="bonus-item-ships" />').appendTo(el);
          item.ships.forEach(function (ship) {
            return $("<a\n                                class=\"bonus-item-ships-ship\"\n                                href=\"".concat(_g.getLink('ships', ship), "\"\n                                data-shipid=\"").concat(ship, "\"\n                            >") + "".concat(_g.data.ships[ship]._name) + "</a>").append($('<em class="pic"/>').css({
              backgroundImage: "url(".concat(_g.getImg('ships', ship, 0).replace(/\\/g, "/").replace(/\/\//g, "/"), ")")
            })).appendTo(ships);
          });
        }

        if (Array.isArray(item.ship_classes) && item.ship_classes.length) {
          $('<div class="bonus-item-shipclasses" />').html(item.ship_classes.map(function (shipClass) {
            return "<span class=\"bonus-item-shipclasses-class\">" + "".concat(_g.data.ship_classes[shipClass].name.zh_cn, "\u7EA7") + "".concat(_g.data.ship_types[_g.data.ship_classes[shipClass].ship_type_id].name.zh_cn) + "</span>";
          }).join(' / ')).appendTo(el);
        }

        var stats = $('<div class="bonus-item-stats"/>').append($('<span class="bonus-item-stats-title">额外收益</span>')).appendTo(el);

        var addStat = function addStat(stat, name) {
          var el = _stat(stat, name, item.bonus);

          if (el) return el.appendTo(stats);
        };

        addStat('fire', '火力');
        addStat('torpedo', '雷装');
        addStat('aa', '对空');
        addStat('asw', '对潜');
        addStat('bomb', '爆装');
        addStat('hit', '命中');
        addStat('armor', '装甲');
        addStat('evasion', '回避');
        addStat('los', '索敌');
        addStat('range', '射程');
      });

      if (d.stat_bonus.length > 1) {
        $('<div class="bonus-item bonus-note" />').html('如果存在满足多个条件的舰娘，额外收益取最大值').appendTo(container);
      }
    }
  }
  if (!stat_container.html()) stat_container.html('<div class="no-content">无...</div>');
  {
    var _container = $('<div class="additionals"/>').appendTo(stats);

    {
      $('<button />', {
        type: 'button',
        "class": 'button button-equipable',
        icon: 'search',
        html: '可装备于...',
        'data-equipment-type': d['type'],
        'data-equipment-id': d.id
      }).appendTo(_container);
    }
    {
      $('<button />', {
        type: 'button',
        "class": 'button button-viewbonuses',
        disabled: d.getBonuses().length <= 0,
        icon: 'search',
        html: '属性加成...',
        "data-equipment-id": d.id
      }).appendTo(_container);
    }
  }
  var dismantle = $('<div class="dismantle"/>').html('<h4 data-content="废弃获得资源">废弃获得资源</h4>').appendTo(dom);

  _g.resourcesTable.forEach(function (v, i) {
    $("<span class=\"".concat(v, "\">").concat(d.dismantle[i] || 0, "</span>")).appendTo(dismantle);
  });

  if (d['improvement'] && d['improvement'].push && d['improvement'].length) {
    _p.el.flexgrid.create().addClass('improvement-options').appendDOM(_tmpl.improvement_inEquipmentInfos(d)).prepend($('<h4 data-content="改修选项">改修选项</h4>')).appendTo(dom);
  }

  if (d['upgrade_for'] && d['upgrade_for'].push && d['upgrade_for'].length) {
    var upgrade_for = $('<div class="upgrade-for"/>').html('<h4 data-content="可用于改修其他装备">可用于改修其他装备</h4>').appendTo(dom),
        upgrade_for1 = $('<div class="stat upgrade"/>').appendTo(upgrade_for);
    d['upgrade_for'].forEach(function (currentValue) {
      _tmpl.link_equipment(currentValue).appendTo(upgrade_for1);
    });
  }

  if (d['upgrade_from'] && d['upgrade_from'].push && d['upgrade_from'].length) {
    var upgrade_from = $('<div class="upgrade-from"/>').html('<h4 data-content="可由以下装备升级获得">可由以下装备升级获得</h4>').appendTo(dom),
        upgrade_from1 = $('<div class="stat upgrade"/>').appendTo(upgrade_from);
    d['upgrade_from'].forEach(function (currentValue) {
      _tmpl.link_equipment(currentValue).appendTo(upgrade_from1);
    });
  }

  var equipped = $('<div class="equipped"/>').html('<h4 data-content="初始装备于">初始装备于</h4>').appendTo(dom),
      equipped_container = _p.el.flexgrid.create().appendTo(equipped).addClass('list-ship');

  if (d.default_equipped_on && d.default_equipped_on.length) {
    d.default_equipped_on.forEach(function (currentValue) {
      equipped_container.appendDOM(_tmpl.link_ship(currentValue).addClass('unit'));
    });
  } else {
    equipped_container.addClass('no no-content').html('暂无初始配置该装备的舰娘...');
  }

  var illusts = $('<aside class="illustrations"/>').appendTo(dom);

  try {
    var file = node.path.normalize(_g.path.pics.items) + '/' + d['id'] + '/card.webp',
        stat = node.fs.lstatSync(file);

    if (stat && stat.isFile()) {
      $('<img src="' + file + '" data-filename="' + d.getName() + '.webp"/>').appendTo(illusts);
    }
  } catch (e) {}

  return dom;
};

_frame.infos.__equipment_init = function ($el) {
  function showEquipable(e) {
    return modal.equipable.show(e.currentTarget.getAttribute('data-equipment-type'), e.currentTarget.getAttribute('data-equipment-id'));
  }

  $el.on('click.equipable', 'button[data-equipment-type]', showEquipable);
  {
    $el.on('click.viewbonuses', '.button-viewbonuses', function (evt) {
      evt.preventDefault();
      if (evt.target.disabled) return;
      modal.bonuses.show('equipment', evt.target.getAttribute('data-equipment-id'));
    });
  }
};

_frame.infos.__fleet = function (id, el, d) {
  var instance = new InfosFleet(id, el, d);
  var $el = instance.el.on({
    'show': function show() {
      InfosFleet.cur = instance;
    },
    'hide': function hide() {
      InfosFleet.cur = null;
    }
  });
  return $el;
};

var InfosFleetEditableTitle = function InfosFleetEditableTitle(settings) {
  _classCallCheck(this, InfosFleetEditableTitle);

  var options = $.extend(true, {}, InfosFleetEditableTitle.defaults, settings);
  var $el = $("<".concat(options.tagName, "/>"), {
    contenteditable: true,
    "class": 'title-editable ' + options.className,
    html: options.placeholder
  }).on({
    'input': function input() {
      $el.trigger('namechange');
    },
    'focus': function focus() {
      if ($el.text() == options.placeholder) $el.html('');
    },
    'blur': function blur() {
      if (!$el.text()) $el.html(options.placeholder);
    },
    'namechange': function namechange(e, content) {
      if (typeof content == 'undefined') {
        content = $el.text();
      }

      if (content != $el.text()) $el.text(content);
      options.onUpdate(content);

      if (content) {
        $el.attr('data-content', content);
      } else {
        $el.removeAttr('data-content');
      }

      return $el;
    },
    'keydown': function keydown(e) {
      if (e.keyCode == 13) {
        $el.blur();
        setTimeout(function () {
          $el.blur();
        }, 1);
      }

      setTimeout(function () {
        if (!$el.text() && options.targetObj) {
          options.onUpdate(content);
          $el.removeAttr('data-content');
        }
      }, 100);
    }
  });
  this.options = options;
  this.$el = $el;
  this.el = $el[0];
};

InfosFleetEditableTitle.defaults = {
  tagName: 'span',
  className: '',
  placeholder: '点击编辑',
  onUpdate: function onUpdate(newContent) {}
};

var InfosFleet = function () {
  function InfosFleet(id, el, d) {
    _classCallCheck(this, InfosFleet);

    this.el = el || $('<div/>');
    this.el.addClass('infos-fleet infosbody loading').attr({
      'data-infos-type': 'fleet',
      'data-infos-title': '舰队 (' + id + ')'
    });
    this.doms = {};
    this.fleets = [];
    this.tip_hqlv_input = '输入 0 表示采用默认等级 (Lv.%1$d)';

    if (d) {
      this.init(d);
    } else {
      if (id == '__NEW__') {
        _db.fleets.insert(_tablelist.prototype._fleets_new_data(), function (err, newDoc) {
          if (err) {
            _g.error(err);
          } else {
            if (_frame.infos.curContent == 'fleet::__NEW__') _frame.infos.show('[[FLEET::' + newDoc['_id'] + ']]');
          }
        }.bind(this));
      } else {
        _db.fleets.find({
          '_id': id
        }, function (err, docs) {
          if (err || !docs) {
            _g.error(err);
          } else {
            if (_frame.infos.curContent == 'fleet::' + id) {
              if (docs.length) {
                this.init(docs[0]);
              } else {
                try {
                  this._infos_state_id = id;
                  this.init(TablelistFleets.prototype.new_data(JSON.parse(LZString.decompressFromEncodedURIComponent(_g.uriSearch('d')))));
                } catch (e) {
                  _g.error(e);
                }
              }
            } else {
              el.remove();
              delete _frame.infos.contentCache.fleet[id];
            }
          }
        }.bind(this));
      }
    }

    InfosFleet.cur = this;
  }

  _createClass(InfosFleet, [{
    key: "init",
    value: function init(d) {
      var _this6 = this;

      if (!d) return false;
      this.el.on({
        'show': function (e, is_firstShow) {
          this.is_showing = true;
          if (InfosFleetShipEquipment.cur) InfosFleetShipEquipment.cur.trigger('blur');

          if (!is_firstShow) {
            var l = Lockr.get('hqLvDefault', _g.defaultHqLv);
            this.fleets.forEach(function (fleet) {
              fleet.summaryCalc(true);
              var scrollTop = fleet.el.attr('scrollbody');

              if (!isNaN(scrollTop)) {
                fleet.el.scrollTop(scrollTop);
              }
            });
            if (!this._hqlv) this.doms['hqlvOption'].val(l);
            this.doms['hqlvOptionLabel'].data('tip', this.tip_hqlv_input.printf(l));
            this.doms['hqlvOption'].attr('placeholder', l);
          }

          if (this.is_init) {
            this.updateURI();
          }
        }.bind(this),
        'hidden': function hidden() {
          this.is_showing = false;
          if (InfosFleetShipEquipment.cur) InfosFleetShipEquipment.cur.trigger('blur');
        }
      }).on('focus.number_input_select', 'input[type="number"]:not([readonly])', function (e) {
        e.currentTarget.select();
      });
      this.data = d;
      var i = 0,
          defaultHqLv = Lockr.get('hqLvDefault', _g.defaultHqLv);
      this.el.attr({
        'data-fleetid': d._id,
        'data-infos-id': d._id
      }).removeClass('loading');
      this.el.find('.loading-msg').remove();
      $('<header/>').append(this.doms['name'] = new InfosFleetEditableTitle({
        tagName: 'h3',
        placeholder: '点击编辑标题',
        onUpdate: function onUpdate(newContent) {
          _this6._name = newContent;
        }
      }).$el).append(this.doms['preview'] = $('<div class="preview"/>')).appendTo(this.el);
      $('<div class="fleets"/>').append(this.doms['tabs'] = $('<div class="tabs"/>')).append(this.doms['options'] = $('<div class="options"/>').append(this.doms['hqlvOptionLabel'] = $('<label/>', {
        'class': 'option option-hqlv',
        'html': '司令部等级',
        'data-tip': this.tip_hqlv_input.printf(defaultHqLv)
      }).on({
        'mouseenter mouseleave': function (e) {
          if (_p.tip.is_showing && !_p.tip.timeout_fade && this.doms['hqlvOption'].is(':focus')) {
            e.stopImmediatePropagation();
            e.stopPropagation();
          }
        }.bind(this)
      }).append(this.doms['hqlvOption'] = $('<input/>', {
        'type': 'number',
        'min': 0,
        'max': _g.hqMaxLv,
        'placeholder': defaultHqLv
      }).val(this._hqlv || defaultHqLv).on({
        'input': function () {
          this._hqlv = this.doms['hqlvOption'].val();
        }.bind(this),
        'focus.tipshow': function () {
          this.doms['hqlvOption'].trigger('tipshow');
        }.bind(this),
        'blur.tiphide': function () {
          this.doms['hqlvOption'].trigger('tiphide');

          if (this.doms['hqlvOption'].val() > _g.hqMaxLv) {
            this.doms['hqlvOption'].val(_g.hqMaxLv);
            this.doms['hqlvOption'].trigger('input');
          }
        }.bind(this),
        'click': function click(e) {
          e.stopImmediatePropagation();
          e.stopPropagation();
        }
      }))).append(this.doms['theme'] = $('<select class="option option-theme-value"/>').on('change', function () {
        this._theme = this.doms['theme'].val();
      }.bind(this)).append(function () {
        var els = $();

        for (var j = 1; j < 11; j++) {
          els = els.add($('<option/>', {
            'value': j,
            'html': '主题-' + j
          }));
        }

        return els;
      })).append(this.doms['themeOption'] = $('<button class="option option-theme mod-dropdown"/>').html('主题').on('click', function () {
        var _this7 = this;

        if (!InfosFleet.menuTheme) {
          InfosFleet.menuThemeItems = $('<div/>');

          var _loop2 = function _loop2(_i3) {
            $('<button class="theme-' + _i3 + '"/>').html(_i3).on('click', function () {
              InfosFleet.menuCur._theme = _i3;
              this.el.attr('data-theme', this._theme);
            }.bind(_this7)).appendTo(InfosFleet.menuThemeItems);
          };

          for (var _i3 = 1; _i3 < 11; _i3++) {
            _loop2(_i3);
          }

          InfosFleet.menuTheme = new _menu({
            'className': 'contextmenu-infos_fleet_themes',
            'items': [InfosFleet.menuThemeItems]
          });
        }

        InfosFleet.menuCur = this;
        InfosFleet.menuTheme.show(this.doms['themeOption']);
      }.bind(this))).append(this.doms['exportOption'] = $('<button class="option mod-dropdown"/>').html('分享').on('click', function () {
        if (!InfosFleet.menuExport) {
          var menuitems = [];

          if (!_g.isClient || _g.isOnline) {
            menuitems.push($('<div class="item"/>').html('分享当前配置' + (!_g.isClient ? '<small>可直接分享网址</small>' : '')).add(new ShareBar({
              title: function title() {
                return InfosFleet.menuCur.data.name;
              },
              summary: '分享自 是谁呼叫舰队（ http://fleet.moe ）',
              sites: ['tsina', 'tqq', 'cqq', 'twitter', 'tieba'],
              uid: 1552359,
              modifyItem: function modifyItem(el) {
                el.addClass('menuitem');
              },
              url: function url() {
                return InfosFleet.menuCur.url;
              }
            }).el.addClass('item')).add($('<hr/>')));
          }

          if (_g.isClient) {
            menuitems.push($('<menuitem/>', {
              'html': '在浏览器中打开当前配置'
            }).on('click', function () {
              node.gui.Shell.openExternal(InfosFleet.menuCur.url);
            }));
          }

          menuitems = menuitems.concat([$('<menuitem/>', {
            'html': '导出配置代码'
          }).on('click', function () {
            InfosFleet.menuCur.modalExport_show();
          }), $('<menuitem/>', {
            'html': '导出配置文本'
          }).on('click', function () {
            InfosFleet.menuCur.modalExportText_show();
          })]);

          if (_g.isNWjs) {
            menuitems.push($('<menuitem/>', {
              'html': '生成图片'
            }).on('click', function () {
              InfosFleet.menuCur.exportPic();
            }));
          }

          InfosFleet.menuExport = new _menu({
            'className': 'contextmenu-infos_fleet_themes',
            'items': menuitems
          });
        }

        InfosFleet.menuCur = this;
        InfosFleet.menuExport.show(this.doms['exportOption']);
      }.bind(this))).append(this.doms['optionOptions'] = $('<button class="icon" icon="cog"/>').on('click', function () {
        TablelistFleets.menuOptions_show(this.doms['optionOptions']);
      }.bind(this)))).appendTo(this.el);
      this.doms['ships'] = $('<div class="ships"/>').appendTo(this.el);
      this.subfleetinputs = [];

      while (i < 4) {
        this.subfleetinputs[i] = $('<input/>', {
          'type': 'radio',
          'name': 'fleet_' + d._id + '_tab',
          'id': 'fleet_' + d._id + '_tab_' + i,
          'value': i
        }).prop('checked', i == 0).prependTo(this.el);
        this.fleets[i] = new InfosFleetSubFleet(this, [], i, $('<label/>', {
          'for': 'fleet_' + d._id + '_tab_' + i,
          'data-fleet': i,
          'html': '#' + (i + 1)
        }).appendTo(this.doms['tabs']));
        this.fleets[i].el.attr('data-fleet', i).appendTo(this.doms['ships']);
        i++;
      }

      $('<input/>', {
        'type': 'radio',
        'name': 'fleet_' + d._id + '_tab',
        'id': 'fleet_' + d._id + '_tab_airfileds',
        'value': 4
      }).prop('checked', false).prependTo(this.el);
      this.fleet_airfileds = new InfosFleetSubAirfield(this, [], $('<label/>', {
        'for': 'fleet_' + d._id + '_tab_airfileds',
        'data-fleet': 4,
        'html': '基地'
      }).appendTo(this.doms['tabs']));
      this.fleet_airfileds.el.attr('data-fleet', 4).appendTo(this.doms['ships']);

      if (!this.data._id) {
        this.el.addClass('mod-preview');
        this.doms['preview'].html('若要编辑配置或保存以备日后查看，请').append($('<button/>', {
          'html': '保存配置'
        }).on('click', function () {
          this.previewSave();
        }.bind(this)));
        this.doms['name'].removeAttr('contenteditable');
        this.doms['hqlvOptionLabel'].data('tip', '若要编辑配置或保存以备日后查看，<br/>请点击上方的“保存配置”按钮');
        this.doms['hqlvOption'].prop('readonly', true);
      }

      this.update(d);
      this._theme = this._theme;

      if (Array.isArray(d.data)) {
        d.data.some(function (data, index) {
          if (Array.isArray(data) && data.some(function (ship) {
            return Array.isArray(ship) && ship[0];
          })) {
            if (_this6.subfleetinputs[index]) {
              _this6.subfleetinputs[index].prop('checked', true).trigger('change');
            }

            return true;
          }

          return false;
        });
      }

      $body.on('update_defaultHqLv.fleet' + this.data._id, function (e, val) {
        if (this.is_showing) {
          if (!this._hqlv) this.doms['hqlvOption'].val(val);
          this.doms['hqlvOptionLabel'].data('tip', this.tip_hqlv_input.printf(val));
          this.doms['hqlvOption'].attr('placeholder', val);
        }
      }.bind(this));
    }
  }, {
    key: "update",
    value: function update(d) {
      this._updating = true;
      d = d || {};
      d['data'] = InfosFleet.decompress(d['data']);

      if (typeof d['theme'] != 'undefined') {
        _frame.infos.dom.main.attr('data-theme', d['theme']);

        this.doms['theme'].val(d['theme']).attr('value', d['theme']);
      }

      if (typeof d['name'] != 'undefined') this.doms['name'].html(d['name']).trigger('namechange', [d['name']]).trigger('blur');

      if (d['data'] && d['data'].push) {
        d['data'].forEach(function (currentValue, i) {
          if (i == 4) {
            this.fleet_airfileds.updateEl(currentValue);
          } else {
            this.fleets[i].updateEl(currentValue);
          }
        }, this);
      }

      this._updating = false;
    }
  }, {
    key: "update_data",
    value: function update_data(d) {
      d = d || {};
      this.update(d);
    }
  }, {
    key: "previewSave",
    value: function previewSave() {
      _db.fleets.insert(TablelistFleets.prototype.new_data(this.data), function (err, newDoc) {
        if (err) {
          _g.error(err);
        } else {
          this.el.attr({
            'data-infos-id': newDoc._id
          });
          _frame.infos.curContent = 'fleet::' + newDoc._id;

          var newEl = _frame.infos.__fleet(newDoc._id, null, newDoc);

          _frame.infos.contentCache.fleet[newDoc._id] = newEl;
          _frame.infos.contentCache.fleet[this._infos_state_id] = newEl;
          newEl.insertBefore(this.el);
          this.el.remove();
          delete this;

          _g.badgeMsg('舰队配置已保存');
        }
      }.bind(this));
    }
  }, {
    key: "updateURI",
    value: function updateURI() {
      if (!_g.isNWjs && this.data._id && _g.uriSearch()) {
        var d = $.extend(true, {}, this.data),
            _id = d._id;
        delete d._id;
        delete d.time_create;
        delete d.time_modify;
        delete d.rating;
        delete d.user;
        history.replaceState(history.state, document.title, location.pathname + '?i=' + _id + '&d=' + LZString.compressToEncodedURIComponent(JSON.stringify(d)));
      }
    }
  }, {
    key: "save",
    value: function save(not_save_to_file) {
      if (this._updating) return this;

      if (this.is_init) {
        this.data.data = [];
        this.fleets.forEach(function (currentValue, i) {
          if (Array.isArray(currentValue.data) && currentValue.data.length > InfosFleet.minSubFleetShipsCount) {
            var dataShips = _toConsumableArray(currentValue.data);

            var index = InfosFleet.minSubFleetShipsCount;

            while (index < dataShips.length) {
              if (Array.isArray(dataShips[index]) && !!dataShips[index][0]) {
                index++;
              } else {
                dataShips.splice(index, 1);
              }
            }

            currentValue.data = dataShips;
          }

          this.data.data[i] = currentValue.data;
        }, this);
        this.data.data[4] = this.fleet_airfileds.data;
        InfosFleet.clean(this.data.data);
        this.data.time_modify = _g.timeNow();
        this.updateURI();

        if (!not_save_to_file) {
          clearTimeout(this.delay_updateDb);
          this.delay_updateDb = setTimeout(function () {
            _db.fleets.updateById(this.data._id, InfosFleet.compressMetaData(this.data), function () {
              _g.log('saved');

              InfosFleet.decompressMetaData(this.data);
            }.bind(this));

            clearTimeout(this.delay_updateDb);
            this.delay_updateDb = null;
          }.bind(this), 200);
        }
      } else {
        InfosFleet.clean(this.data.data);
        this.updateURI();
      }

      this.is_init = true;
      return this;
    }
  }, {
    key: "modalExport_show",
    value: function modalExport_show() {
      InfosFleet.modalExport_show(this.data);
    }
  }, {
    key: "modalExportText_show",
    value: function modalExportText_show() {
      InfosFleet.modalExportText_show(this.data);
    }
  }, {
    key: "exportPic",
    value: function exportPic() {
      if (!InfosFleet.fileDialog_export) {
        InfosFleet.fileDialog_export = $('<input type="file" accept=".png" nwsaveas/>').on({
          'click': function click(e, windowWidth, windowHeight, isMaxmize) {
            InfosFleet.fileDialog_export.data({
              'windowWidth': windowWidth,
              'windowHeight': windowHeight,
              'isMaxmize': isMaxmize
            });
            InfosFleet.fileDialog_export_showing = true;
          },
          'change': function change() {
            var path = InfosFleet.fileDialog_export.val();
            InfosFleet.fileDialog_export.val('');

            _g.log('changed');

            setTimeout(function () {
              node.win.capturePage(function (buffer) {
                var wstream = node.fs.createWriteStream(path);
                wstream.write(buffer);
                wstream.end();
              }, {
                format: 'png',
                datatype: 'buffer'
              });
            }, 0);
          },
          'resetCaptureMode': function resetCaptureMode() {
            if (!InfosFleet.fileDialog_export.val() && $body.hasClass('mod-capture')) {
              $body.removeClass('mod-capture');
              node.win.resizeTo(InfosFleet.fileDialog_export.data('windowWidth'), InfosFleet.fileDialog_export.data('windowHeight'));
              if (InfosFleet.fileDialog_export.data('isMaxmize')) node.win.maximize();
              InfosFleet.fileDialog_export.data({
                'windowWidth': null,
                'windowHeight': null,
                'isMaxmize': null
              });

              _g.zoom(Scale.cur);

              _menu.hideAll();
            }
          }
        }).appendTo(_frame.dom.hidden);
        $window.on('focus.resetCaptureMode', function () {
          if (InfosFleet.fileDialog_export_showing) setTimeout(function () {
            InfosFleet.fileDialog_export.trigger('resetCaptureMode');
            InfosFleet.fileDialog_export_showing = false;
          }, 1000);
        });
      }

      _g.zoom(1);

      var windowWidth = $window.width(),
          windowHeight = $window.height(),
          isMaxmize = $html.hasClass('window-maxmize');
      if (isMaxmize) node.win.unmaximize();
      $body.addClass('mod-capture');
      node.win.resizeTo(1280, 720);
      setTimeout(function () {
        InfosFleet.fileDialog_export.trigger('click', [windowWidth, windowHeight, isMaxmize]);
      }, 200);
    }
  }, {
    key: "remove",
    value: function remove() {
      InfosFleet.modalRemove_show(this);
    }
  }, {
    key: "_name",
    get: function get() {
      return this.data['name'];
    },
    set: function set(value) {
      this.data['name'] = value;
      this.save();
    }
  }, {
    key: "_theme",
    get: function get() {
      return this.data['theme'];
    },
    set: function set(value) {
      this.data['theme'] = value || 1;
      this.doms['theme'].val(this.data['theme']).attr('value', this.data['theme']);

      _frame.infos.dom.main.attr('data-theme', this.data['theme']);

      this.el.attr('data-theme', this.data['theme']);

      _frame.dom.layout.attr('data-theme', this.data['theme']);

      this.save();
    }
  }, {
    key: "_hqlv",
    get: function get() {
      if (this.data['hq_lv'] > 0) return this.data['hq_lv'];
      return 0;
    },
    set: function set(value) {
      value = parseInt(value);
      var last = this._hqlv;

      if (value && value > 0) {
        this.data['hq_lv'] = value;
        this.doms['hqlvOption'].val(value);
      } else {
        value = -1;
        this.data['hq_lv'] = -1;
        this.doms['hqlvOption'].val(Lockr.get('hqLvDefault', _g.defaultHqLv));
      }

      if (last != value) {
        var i = 0;

        while (i < 4) {
          this.fleets[i].summaryCalc(true);
          i++;
        }

        this.save();
      }
    }
  }, {
    key: "url",
    get: function get() {
      if (this.data._id) {
        var d = $.extend(true, {}, this.data),
            _id = d._id;
        delete d._id;
        delete d.time_create;
        delete d.time_modify;
        delete d.rating;
        delete d.user;
        return 'http://fleet.moe/fleets/build/?i=' + _id + '&d=' + LZString.compressToEncodedURIComponent(JSON.stringify(d));
      }
    }
  }]);

  return InfosFleet;
}();

InfosFleet.minSubFleetShipsCount = 6;

InfosFleet.modalExport = function (curval) {
  if (!InfosFleet.elModalExport) {
    InfosFleet.elModalExport = $('<div/>').append(InfosFleet.elModalExportTextarea = $('<textarea/>', {
      'readonly': true
    })).append($('<p class="note-codeusage"/>').html('* 该配置代码可用于<a href="http://www.kancolle-calc.net/deckbuilder.html">艦載機厨デッキビルダー</a>'));
    var btn = $('<button class="button">复制到剪切板</button>').appendTo(InfosFleet.elModalExport);
    new Clipboard(btn[0], {
      text: function text() {
        return InfosFleet.elModalExportTextarea.val();
      }
    });
  }

  InfosFleet.elModalExportTextarea.val(curval || '');
  return InfosFleet.elModalExport;
};

InfosFleet.modalExport_show = function (data) {
  data = InfosFleet.decompress(data.data || []);
  data = JSON.stringify(_g.kancolle_calc.encode(data));

  _frame.modal.show(InfosFleet.modalExport(data), '导出配置代码', {
    'classname': 'infos_fleet infos_fleet_export',
    'detach': true
  });
};

InfosFleet.modalExportText_show = function (data) {
  if (!data) return false;
  var text = '',
      fields = [],
      fleets = InfosFleet.decompress(data.data).filter(function (value) {
    _g.log(value);

    if (value && value.length) {
      return value.some(function (arr) {
        _g.log('* ', arr);

        if (arr && arr.length) {
          if (arr.some(function (item) {
            _g.log('  * ', item);

            switch (_typeof(item)) {
              case 'number':
              case 'string':
                return true;
            }
          })) return true;
          arr.some(function (item) {
            _g.log('  * ', item);

            if (item && item.length && item[0]) {
              fields.push(arr);
              return true;
            }
          });
        }

        return false;
      });
    }

    return false;
  }) || [];
  text += data.name || '';
  fleets.forEach(function (fleet, i) {
    text += (text ? '\n' : '') + (fleets.length > 1 ? '\n第 ' + (i + 1) + ' 舰队' : '');
    fleet.filter(function (value) {
      return value && value[0] && value.length > 0;
    }).forEach(function (ship, j) {
      text += '\n' + '(' + (i ? i + 1 + '-' : '') + (j + 1) + ') ' + _g.data.ships[ship[0]]._name + (ship[1] && ship[1][0] ? ' Lv.' + ship[1][0] : '');
      var equipments = ship[2] || [],
          stars = ship[3] || [],
          ranks = ship[4] || [];
      equipments.filter(function (value) {
        return value;
      }).forEach(function (equipment, k) {
        text += (!k ? ' | ' : ', ') + _g.data.items[equipment]._name + (stars[k] ? '★' + stars[k] : '') + (ranks[k] ? '[' + _g.textRank[ranks[k]] + ']' : '');
      });
    });
  });

  _g.log(fields);

  fields.forEach(function (field, i) {
    text += (text ? '\n' : '') + (field.length > 1 ? '\n第 ' + (i + 1) + ' 航空队' : '');
    field.filter(function (squard) {
      return squard && squard.length && squard[0];
    }).forEach(function (squard, j) {
      text += '\n' + '(' + (j + 1) + ') ' + _g.data.items[squard[0]]._name + (squard[1] ? ' [' + _g.textRank[squard[1]] + ']' : '');
    });
  });
  text += (text ? '\n\n' : '') + '* 创建自 是谁呼叫舰队 (fleet.moe)';

  _frame.modal.show(InfosFleet.modalExport(text), '导出配置文本', {
    'classname': 'infos_fleet infos_fleet_export mod-text',
    'detach': true
  });
};

InfosFleet.modalRemove_show = function (id, is_list) {
  if (typeof id == 'undefined') return;
  var infosFleet;

  if (id instanceof InfosFleet) {
    infosFleet = id;
    id = infosFleet.data._id;
  }

  if (!InfosFleet.elModalRemove) {
    InfosFleet.elModalRemove = $('<form/>').append(InfosFleet.elModalRemoveId = $('<input name="id" type="hidden"/>')).append($('<p/>').html('是否删除该舰队配置？')).append($('<p class="actions"/>').append($('<button/>', {
      'type': 'submit',
      'class': 'button',
      'html': '是'
    })).append($('<button/>', {
      'type': 'button',
      'class': 'button',
      'html': '否'
    }).on('click', function () {
      _frame.modal.hide();
    }))).on('submit', function (e) {
      e.preventDefault();

      var _id = InfosFleet.elModalRemoveId.val();

      if (_id) {
        _frame.app_main.loading_start('remove_fleet_' + _id, false);

        _db.fleets.remove({
          _id: _id
        }, {
          multi: true
        }, function (err, numRemoved) {
          _g.log('Fleet ' + _id + ' removed.');

          _frame.app_main.loading_complete('remove_fleet_' + _id);

          _frame.modal.hide();

          _g.badgeMsg('已删除配置');

          if (_typeof(is_list) === 'object' && is_list.refresh) {
            is_list.refresh();
          } else {
            _frame.dom.navs.fleets.click();
          }
        });
      }

      return false;
    });
  }

  InfosFleet.elModalRemoveId.val(id);

  _frame.modal.show(InfosFleet.elModalRemove, '删除配置', {
    'classname': 'infos_fleet infos_fleet_remove',
    'detach': true
  });
};

InfosFleet.clean = function (arr) {
  if (!arr) return;

  function _clean(array) {
    if (array && array.length) {
      array.forEach(function (v, i) {
        if (v && v.push) {
          _clean(v);
        } else if (i == array.length - 1 && v === null) {
          array.pop();

          _clean(array);
        }
      });
    }
  }

  _clean(arr);

  return arr;
};

InfosFleet.decompress = function (code) {
  if (code && !code.push) {
    try {
      code = JSON.parse(LZString.decompressFromEncodedURIComponent(code));
    } catch (e) {
      _g.error(e);
    }
  }

  return code;
};

InfosFleet.compress = function (code) {
  if (code && code.push) {
    try {
      code = LZString.compressToEncodedURIComponent(JSON.stringify(code));
    } catch (e) {
      _g.error(e);
    }
  }

  return code;
};

InfosFleet.compressMetaData = function (code) {
  if (code && code.data && code.data.push) {
    try {
      code.data = InfosFleet.compress(code.data);
    } catch (e) {
      _g.error(e);
    }
  }

  return code;
};

InfosFleet.decompressMetaData = function (code) {
  if (code && code.data && !code.data.push) {
    try {
      code.data = InfosFleet.decompress(code.data);
    } catch (e) {
      _g.error(e);
    }
  }

  return code;
};

var InfosFleetSubFleet = function () {
  function InfosFleetSubFleet(infosFleet, d, index, label) {
    var _this8 = this;

    _classCallCheck(this, InfosFleetSubFleet);

    d = d || [];
    this.data = d;
    this.infosFleet = infosFleet;
    this.el = $('<dl class="fleetships" scrollbody/>');
    this.label = label;
    this.ships = [];
    var i = 0;

    while (i < InfosFleet.minSubFleetShipsCount) {
      this.createShip(i);
      i++;
    }

    this.elSummary = $('<span class="summary"/>').appendTo(this.el).append($('<span class="btn-add-ship"/>').on('click', function () {
      _this8.createShip(_this8.ships.length);

      _this8.ships[_this8.ships.length - 1].el.trigger('click');
    })).append($('<span class="summary-item"/>').html('航速').append(this.elSummarySpeed = $('<strong/>').html('-'))).append($('<span class="summary-item"/>').html('制空战力').append(this.elSummaryFighterPower = $('<strong/>').html('-'))).append($('<span class="summary-item"/>').html('索敌能力').append(this.elSummaryLos = $('<strong/>').html('-'))).append($('<span class="summary-item summary-item-consummation"/>').html('总消耗').append(this.elSummaryConsummation = $('<strong/>').html('-'))).append(this.elSummaryTPcontainer = $('<span class="summary-item hide"/>').html('运输TP').append(this.elSummaryTP = $('<strong/>').html('-')));
    $body.on('update_defaultHqLv.fleet' + infosFleet.data._id + '-' + (index + 1), function () {
      if (this.infosFleet.is_showing) this.summaryCalc(true);
    }.bind(this));
  }

  _createClass(InfosFleetSubFleet, [{
    key: "createShip",
    value: function createShip(index) {
      if (this.ships[index]) return this.ships[index];
      this.ships[index] = new InfosFleetShip(this.infosFleet, this, index);

      if (this.elSummary) {
        return this.ships[index].getEl().insertBefore(this.elSummary);
      } else {
        return this.ships[index].getEl().appendTo(this.el);
      }
    }
  }, {
    key: "updateEl",
    value: function updateEl(d) {
      this.data = d || this.data;
      var count = 0;

      if (d) {
        d.forEach(function (sd, i) {
          if (!this.ships[i]) {
            this.createShip(i);
          }

          this.ships[i].updateEl(sd);
          if (sd && sd.push && sd[0]) count++;
        }, this);
      }

      if (count) {
        this.label.addClass('highlight');
      } else {
        this.label.removeClass('highlight');
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "getShipCount",
    value: function getShipCount() {
      var count = 0;
      if (this.data) this.data.forEach(function (dataShip) {
        if (dataShip && dataShip.push && dataShip[0]) count++;
      });
      return count;
    }
  }, {
    key: "summaryCalc",
    value: function summaryCalc(is_onlyHqLvChange) {
      if (this.summaryCalculating) return false;
      this.summaryCalculating = setTimeout(function () {
        if (!is_onlyHqLvChange) {
          var fighterPower = [0, 0],
              fleetSpeet = 1000,
              consumFuel = 0,
              consumAmmo = 0,
              tp = 0;
          this.ships.forEach(function (shipdata) {
            if (shipdata.data[0]) {
              var ship = _g.data.ships[shipdata.data[0]];
              fleetSpeet = Math.min(fleetSpeet, shipdata.stat.speed || ship.stat.speed);
              shipdata.calculate('fighterPower_v2').forEach(function (val, i) {
                fighterPower[i] += val > 0 ? val : 0;
              });
              consumFuel += ship.getAttribute('fuel', shipdata.shipLv) || 0;
              consumAmmo += ship.getAttribute('ammo', shipdata.shipLv) || 0;
              tp += shipdata.calculate('TP');
              tp += ship.tp || 0;
            }
          });
          this.elSummarySpeed.html(_g.getStatSpeed(fleetSpeet));

          if (Math.max(fighterPower[0], fighterPower[1]) > 0) {
            var val1 = Math.floor(fighterPower[0]),
                val2 = Math.floor(fighterPower[1]);
            this.elSummaryFighterPower.html(val1 == val2 ? val1 : val1 + '~' + val2);
            this.elSummaryFighterPower.removeClass('empty');
          } else {
            this.elSummaryFighterPower.html('-');
            this.elSummaryFighterPower.addClass('empty');
          }

          this.elSummaryConsummation.html(consumFuel || consumAmmo ? '<span class="fuel">' + consumFuel + '</span><span class="ammo">' + consumAmmo + '</span>' : '-');

          if (tp > 40) {
            var rS = Math.floor(tp),
                rA = Math.floor(rS * 0.7);
            this.elSummaryTPcontainer.removeClass('hide');
            this.elSummaryTP.html("A=".concat(rA, " / S=").concat(rS));
          } else {
            this.elSummaryTPcontainer.addClass('hide');
          }
        }

        var los = this.getShipCount() ? this.summaryCalcLos() : null;
        this.elSummaryLos.html(los ? los.toFixed(2) : '-');
        this.summaryCalculating = null;
      }.bind(this), 10);
    }
  }, {
    key: "summaryCalcLos",
    value: function summaryCalcLos() {
      var hq_lv = this.infosFleet.data.hq_lv || Lockr.get('hqLvDefault', _g.defaultHqLv);
      if (hq_lv < 0) hq_lv = Lockr.get('hqLvDefault', _g.defaultHqLv);
      return Formula.calcByFleet.los33(this.data, hq_lv);
    }
  }, {
    key: "save",
    value: function save() {
      var count = 0;
      this.data = this.data || [];
      this.ships.forEach(function (d, i) {
        this.data[i] = d.data;
        if (d.data && d.data[0]) count++;
      }, this);

      if (count) {
        this.label.addClass('highlight');
      } else {
        this.data = null;
        this.label.removeClass('highlight');
      }

      if (this.infosFleet) this.infosFleet.save();
    }
  }]);

  return InfosFleetSubFleet;
}();

var InfosFleetShip = function () {
  function InfosFleetShip(infosFleet, infosFleetSubFleet, index, d) {
    var _this9 = this;

    _classCallCheck(this, InfosFleetShip);

    if (this.el) return this.el;
    d = d || [null, [null, -1], [], [], []];
    this.data = d;
    this.infosFleet = infosFleet;
    this.infosFleetSubFleet = infosFleetSubFleet;
    this.equipments = [];
    this.index = index;
    this.stat = {};

    for (var _i4 = 0; _i4 < 4; _i4++) {
      this.equipments[_i4] = new InfosFleetShipEquipment(this, _i4);
    }

    if (!Array.isArray(InfosFleetShipEquipment.exslotTypes)) {
      InfosFleetShipEquipment.exslotTypes = [];

      for (var id in _g.data.item_types) {
        if (_g.data.item_types[id].equipable_exslot) InfosFleetShipEquipment.exslotTypes.push(parseInt(id));
      }
    }

    if (!Array.isArray(InfosFleetShipEquipment.exslotEquipments)) {
      InfosFleetShipEquipment.exslotEquipments = [];

      for (var _id2 in _g.data.items) {
        if (_g.data.items[_id2].equipable_exslot) InfosFleetShipEquipment.exslotEquipments.push(parseInt(_id2));
      }
    }

    this.equipments[4] = new InfosFleetShipEquipment(this, 4, 0, InfosFleetShipEquipment.exslotTypes, InfosFleetShipEquipment.exslotEquipments);
    this.el = $('<dd class="ship"/>').append($('<dt/>').append(this.elAvatar = $('<s touch-action="none"/>')).append(this.elInfos = $('<div/>').html('<span>' + (this.infosFleet.data._id ? '选择舰娘' : '无舰娘') + '...</span>').append(this.elInfosTitle = $('<div class="title"/>')).append($('<div class="info"/>').append($('<label/>').html('Lv.').append(this.elInputLevel = $('<input/>', {
      'type': 'number',
      'min': 0,
      'max': _g.shipMaxLv
    }).on({
      checkValue: function checkValue() {
        var value = _this9.elInputLevel.val();

        if ((typeof value == 'undefined' || value === '') && _this9.data[1][0]) _this9.shipLv = null;
        value = parseInt(value);
        var min = parseInt(_this9.elInputLevel.attr('min'));

        if (value < min) {
          value = min;

          _this9.elInputLevel.val(min);
        } else if (value > _g.shipMaxLv) {
          value = _g.shipMaxLv;

          _this9.elInputLevel.val(_g.shipMaxLv);
        }

        if (!isNaN(value) && _this9.data[1][0] != value) _this9.shipLv = value;
      },
      keydown: function keydown(e) {
        if (e.keyCode == 38 || e.keyCode == 40) _this9.elInputLevel.trigger('checkValue');
      },
      change: function change() {
        _this9.elInputLevel.trigger('checkValue');
      }
    }))).append(this.elInfosSpeed = $('<span/>')).append(this.elInfosType = $('<span/>'))))).append(this.elEquipments = $('<div class="equipments"/>').append(function () {
      var els = $();

      for (var _i5 = 0; _i5 < 4; _i5++) {
        els = els.add(this.equipments[_i5].el);
      }

      return els;
    }.bind(this))).append($('<div class="attributes"/>').append(this.elAttrShelling = $('<span class="shelling"/>')).append(this.elAttrTorpedo = $('<span class="torpedo"/>')).append(this.elAttrHitSum = $('<span class="hitsum"/>')).append(this.elAttrHp = $('<span class="hp"/>')).append(this.elAttrArmor = $('<span class="armor"/>')).append(this.elAttrEvasion = $('<span class="evasion"/>')).append(this.elAttrNightBattle = $('<span class="nightbattle" data-text="夜"/>')).append(_huCss.csscheck_full('mask-image') ? null : $('<div class="bg"/>'))).append($('<div class="options"/>').append(this.elBtnOptions = $('<button class="options"/>').on('click', function (e) {
      this.showMenu();
    }.bind(this)))).append(this.equipments[4].el.addClass('equipment-extra'));
    this.after = $('<s/>');
    this.els = this.el.add(this.after);

    if (this.infosFleet.data._id) {
      this.el.on({
        'click': function () {
          if (!this.data[0]) this.selectShipStart();
        }.bind(this),
        'pointerenter': function () {
          InfosFleetShip.dragEnter(this);
        }.bind(this),
        'touchmove': function touchmove(e) {
          InfosFleetShip.dragTouchmove(e);
        }
      });
      this.elAvatar.on({
        'pointerdown': function (e) {
          e.preventDefault();

          if (this.data[0]) {
            document.activeElement.blur();
            InfosFleetShip.dragStart(this);
          }
        }.bind(this)
      });
    } else {
      this.elInputLevel.prop('readonly', true);
    }

    if (!_huCss.csscheck_full('mask-image')) {
      this.el.addClass('mod-nomask');
    }
  }

  _createClass(InfosFleetShip, [{
    key: "getEl",
    value: function getEl() {
      return this.els;
    }
  }, {
    key: "selectShipStart",
    value: function selectShipStart() {
      _g.log('开始选择舰娘');

      _frame.app_main.load_page('ships', {
        callback_modeSelection_select: function (id) {
          history.back();
          this.shipId = id;
          this.shipLv = null;
          if (this.infosFleet) _frame.infos.dom.main.attr('data-theme', this.infosFleet.data['theme']);
        }.bind(this)
      });
    }
  }, {
    key: "changeLuck",
    value: function changeLuck(luck) {
      this.data[1][1] = luck || -1;
    }
  }, {
    key: "updateAttrs",
    value: function updateAttrs() {
      if (!this.shipId) return;
      var speed = this.calculate('speed');
      this.stat.speed = _g.getStatSpeedNumber(speed);
      this.elInfosSpeed.html(speed);
      if (_g.data.ships[this.shipId].stat.speed !== this.stat.speed) this.elInfosSpeed.attr('data-speed', this.stat.speed);else this.elInfosSpeed.removeAttr('data-speed');
      var damage = this.calculate('shellingDamage');
      this.elAttrShelling.html((damage !== '-' ? this.calculate('fireRange') + ' | ' : '') + damage);
      this.elAttrTorpedo.html(this.calculate('torpedoDamage'));
      var hitSum = this.calculate('addHit');
      if (hitSum >= 0) this.elAttrHitSum.removeClass('negative');else this.elAttrHitSum.addClass('negative');
      this.elAttrHitSum.html(hitSum);
      this.elAttrHp.html(this.calculate('attribute', 'hp'));
      this.elAttrArmor.html(this.calculate('attribute', 'armor') + this.calculate('addArmor'));
      var attrEvasion = this.shipLv ? this.calculate('attribute', 'evasion') : -1;
      this.elAttrEvasion.html(attrEvasion >= 0 ? attrEvasion + this.calculate('addEvasion') : '-');
      this.elAttrNightBattle.html(this.calculate('nightBattle'));
    }
  }, {
    key: "calculate",
    value: function calculate(type, attr) {
      if (!this.shipId) return '-';
      if (type == 'attribute') return _g.data.ships[this.shipId].getAttribute(attr, this.shipLv);

      if (Formula[type]) {
        switch (type) {
          case 'losPower':
            return Formula[type](this.shipId, this.data[2], this.data[3], this.data[4], {
              'hqLv': this.infosFleet.data.hq_lv,
              'shipLv': this.shipLv
            });

          default:
            return Formula[type](this.shipId, this.data[2], this.data[3], this.data[4]);
        }
      }

      if (Formula.calculate[type]) {
        return Formula.calculate(type, this.shipId, this.data[2], this.data[3], this.data[4]) || '-';
      }

      if (Formula.calcByShip[type]) {
        return Formula.calcByShip[type](_g.data.ships[this.shipId], this.data[2].map(function (id) {
          return _g.data.items[id];
        })) || 0;
      }

      return '-';
    }
  }, {
    key: "updateEl",
    value: function updateEl(d) {
      var _this10 = this;

      this._updating = true;
      this.data = d || this.data;
      if (typeof this.data[0] == 'string') this.data[0] = parseInt(this.data[0]);
      if (!this.data[2]) this.data[2] = [];
      if (!this.data[3]) this.data[3] = [];
      if (!this.data[4]) this.data[4] = [];

      if (this.data[0]) {
        this.shipId = this.data[0];
        if (this.data[1][0]) this.shipLv = this.data[1][0];
        this.equipments.forEach(function (equipment, i) {
          equipment.id = _this10.data[2][i];
          equipment.star = _this10.data[3][i];
          equipment.rank = _this10.data[4][i];
        });
        this.updateAttrs();
      }

      this._updating = false;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "showMenu",
    value: function showMenu() {
      InfosFleetShip.menuCurObj = this;

      if (!InfosFleetShip.menu) {
        InfosFleetShip.menuItems = [$('<menuitem class="move move-up"/>').html(' ').on({
          'click': function click(e) {
            InfosFleetShip.menuCurObj.moveUp();
          },
          'show': function show() {
            if (InfosFleetShip.menuCurObj.index) InfosFleetShip.menuItems[0].removeClass('disabled');else InfosFleetShip.menuItems[0].addClass('disabled');
          }
        }), $('<menuitem class="move move-down"/>').html(' ').on({
          'click': function click(e) {
            InfosFleetShip.menuCurObj.moveDown();
          },
          'show': function show() {
            if (InfosFleetShip.menuCurObj.index < InfosFleetShip.menuCurObj.infosFleetSubFleet.ships.length - 1) InfosFleetShip.menuItems[1].removeClass('disabled');else InfosFleetShip.menuItems[1].addClass('disabled');
          }
        }), $('<hr/>'), $('<menuitem/>').html('查看资料').on({
          'show': function show() {
            InfosFleetShip.menuItems[3].attr('data-infos', '[[SHIP::' + InfosFleetShip.menuCurObj.shipId + ']]');
          }
        }), $('<menuitem/>').html('查看装备属性加成...').on({
          'show': function show() {
            var $el = InfosFleetShip.menuItems[4];
            $el.off('click.fleet-ship-show-bonuses');
            $el.on('click.fleet-ship-show-bonuses', function () {
              modal.bonuses.show('ship', InfosFleetShip.menuCurObj.shipId);
            });
          }
        }), $('<menuitem/>').html('移除').on({
          'click': function click(e) {
            InfosFleetShip.menuCurObj.shipId = null;
          }
        }), $('<menuitem/>').html('替换为 ...').on({
          'click': function click(e) {
            InfosFleetShip.menuCurObj.selectShipStart();
          }
        }), $('<div/>').on('show', function () {
          var $div = InfosFleetShip.menuItems[7].empty();

          if (InfosFleetShip.menuCurObj.shipId) {
            var series = _g['data']['ships'][InfosFleetShip.menuCurObj.shipId].getSeriesData() || [];

            if (series.length > 1) {
              series.forEach(function (currentValue, i) {
                if (!i) $div.append($('<hr/>'));
                if (currentValue['id'] != InfosFleetShip.menuCurObj.shipId) $div.append($('<menuitem/>').html('替换为 ' + _g['data']['ships'][currentValue['id']].getName(true)).on({
                  'click': function click() {
                    InfosFleetShip.menuCurObj.shipId = currentValue['id'];
                  }
                }));
              });
            }
          }
        })];
        InfosFleetShip.menu = new _menu({
          'className': 'contextmenu-ship',
          'items': InfosFleetShip.menuItems
        });
      }

      InfosFleetShip.menu.show(this.elBtnOptions);
    }
  }, {
    key: "swap",
    value: function swap(target, save, callback) {
      if (InfosFleetShip.dragIsSwapping) return false;
      InfosFleetShip.dragIsSwapping = true;
      if (typeof target == 'number') target = this.infosFleetSubFleet.ships[target];

      if (this.index > target.index) {
        this.el.insertBefore(target.el);
      } else {
        this.el.insertAfter(target.after);
      }

      this.after.insertAfter(this.el);
      var newIndex_dragging = target.index,
          newIndex_enter = this.index;
      console.log(newIndex_dragging, newIndex_enter);
      this.index = newIndex_dragging;
      target.index = newIndex_enter;
      this.infosFleetSubFleet.ships[newIndex_dragging] = this;
      this.infosFleetSubFleet.ships[newIndex_enter] = target;
      if (save) this.save();
      setTimeout(function () {
        if (callback) callback();
        setTimeout(function () {
          InfosFleetShip.dragIsSwapping = false;
        }, 10);
      }, 10);
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (this.index <= 0) return;
      this.swap(this.index - 1, true);
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (this.index >= this.infosFleetSubFleet.ships.length - 1) return;
      this.swap(this.index + 1, true);
    }
  }, {
    key: "save",
    value: function save() {
      if (this._updating) return false;

      if (!this._updateTimeout) {
        this._updateTimeout = setTimeout(function () {
          this.updateAttrs();

          if (this.infosFleetSubFleet) {
            this.infosFleetSubFleet.summaryCalc();
            this.infosFleetSubFleet.save();
          }

          this._updateTimeout = null;
        }.bind(this), 50);
      }
    }
  }, {
    key: "shipId",
    get: function get() {
      return this.data[0];
    },
    set: function set(value) {
      var _this11 = this;

      if (value != this.data[0]) {
        this.data[0] = value;
        this.shipLv = null;
        delete this.stat.speed;
      }

      if (this.equipments.length > 5) {
        this.equipments.splice(5, this.equipments.length - 5).forEach(function (obj) {
          obj.el.remove();
        });
      }

      if (value) {
        var ship = _g.data.ships[value],
            suffix = ship.getSuffix(),
            speed = ship._speed,
            stype = ship._type;
        stype = stype.replace(speed, '');
        this.el.attr('data-shipId', value);
        this.elAvatar.html('<img src="' + ship.getPic(10, _g.imgExt) + '"/>');
        this.elInfosTitle.html('<h4 data-content="' + ship['name'][_g.lang] + '">' + ship['name'][_g.lang] + '</h4>' + (suffix ? '<h5 data-content="' + suffix + '">' + suffix + '</h5>' : ''));
        this.elInputLevel.attr('min', ship._minLv);
        this.elInfosSpeed.html(speed);
        this.elInfosType.html(stype);

        if (ship && Array.isArray(ship.slot) && ship.slot.length > 4) {
          for (var _i6 = 5; _i6 < ship.slot.length + 1; _i6++) {
            this.equipments[_i6] = new InfosFleetShipEquipment(this, _i6);

            this.equipments[_i6].el.appendTo(this.elEquipments);
          }
        }

        this.equipments.forEach(function (equipment, i) {
          if (i < 4) equipment.carry = ship.slot[i];else if (i === 4) equipment.carry = 0;else if (i > 4) equipment.carry = ship.slot[i - 1];

          if (!_this11._updating) {
            equipment.id = null;
            equipment.star = null;
            equipment.rank = null;
          }
        });
      } else {
        this.el.removeAttr('data-shipId');
        this.elInputLevel.attr('min', 0);
        this.elAvatar.html('');
        this.data[2] = [];
        this.data[3] = [];
        this.data[4] = [];

        if (this.index >= InfosFleet.minSubFleetShipsCount) {
          this.getEl().remove();
        }
      }

      this.save();
    }
  }, {
    key: "shipLv",
    get: function get() {
      return this.data[1][0];
    },
    set: function set(value) {
      this.data[1][0] = value || null;

      if (value && value > 0) {
        this.elInputLevel.val(value);
      } else {
        this.elInputLevel.val('');
      }

      this.save();
    }
  }]);

  return InfosFleetShip;
}();

InfosFleetShip.dragStart = function (infosFleetShip) {
  if (InfosFleetShip.dragging || !infosFleetShip) return false;
  InfosFleetShip.dragging = infosFleetShip;
  infosFleetShip.el.addClass('moving');

  if (!InfosFleetShip.isInit) {
    $body.on({
      'pointerup.InfosFleetShip_dragend pointercancel.InfosFleetShip_dragend': function pointerupInfosFleetShip_dragendPointercancelInfosFleetShip_dragend() {
        if (InfosFleetShip.dragging) {
          InfosFleetShip.dragging.el.removeClass('moving');
          InfosFleetShip.dragging.save();
          InfosFleetShip.dragging = null;
        }
      }
    });
    InfosFleetShip.isInit = true;
  }
};

InfosFleetShip.dragEnter = function (infosFleetShip_enter) {
  if (!InfosFleetShip.dragging || !infosFleetShip_enter || InfosFleetShip.dragging == infosFleetShip_enter) return false;
  InfosFleetShip.dragging.swap(infosFleetShip_enter);
};

InfosFleetShip.dragTouchGetPosition = function () {
  InfosFleetShip.draggingTouchPosition = [];
  if (!InfosFleetShip.dragging) return false;
  InfosFleetShip.draggingTouchPosition = InfosFleetShip.dragging.infosFleetSubFleet.ships.map(function (ship) {
    var offset = ship.el.offset();
    return {
      top: offset.top + 10,
      bottom: offset.top + ship.el.height() - 10,
      target: ship
    };
  });
  return InfosFleetShip.draggingTouchPosition;
};

InfosFleetShip.dragTouchmove = function (e) {
  if (!InfosFleetShip.dragging || InfosFleetShip.dragIsSwapping) return false;
  var touchlist = e.originalEvent.touches || e.originalEvent.changedTouches;
  if (!touchlist || !touchlist.length || touchlist.length > 1) return false;

  if (!InfosFleetShip.draggingTouch) {
    InfosFleetShip.dragTouchGetPosition();
    InfosFleetShip.draggingTouch = true;
  }

  var touchY = touchlist[0].clientY || touchlist[0].pageY || -1;
  InfosFleetShip.draggingTouchPosition.some(function (position) {
    if (InfosFleetShip.dragging == position.target) return false;
    var isIn = false;

    if (touchY >= position.top && touchY <= position.bottom) {
      isIn = position.target;
    }

    if (isIn) {
      InfosFleetShip.dragging.swap(isIn, false, InfosFleetShip.dragTouchGetPosition);
    }

    return isIn;
  });
};

var InfosFleetShipEquipment = function () {
  function InfosFleetShipEquipment(infosParent, index, carry, equipmentTypes, extraEquipments) {
    _classCallCheck(this, InfosFleetShipEquipment);

    this.index = index || 0;
    this.isParentAirfield = infosParent instanceof InfosFleetAirfield;
    this.infosParent = infosParent;
    if (this.el) return this.el;
    this.elBlurTimeout;
    this.el = $("<div class=\"equipment equipment-".concat(this.index, "\" tabindex=\"0\"/>")).on({
      'focus': function () {
        InfosFleetShipEquipment.cur = this.el.addClass('is-hover');
      }.bind(this),
      'blur': function () {
        var _this12 = this;

        this.elBlurTimeout = setTimeout(function () {
          _this12.el.removeClass('is-hover');

          InfosFleetShipEquipment.cur = null;
        }, 10);
      }.bind(this),
      'pointerenter': function (e) {
        var _this13 = this;

        if (e.originalEvent.pointerType != 'touch') {
          InfosFleetShipEquipment.cur = this.el.addClass('is-hover');

          if (this.index >= 4) {
            var tip = this.el.attr('data-tip');
            this.el.attr('data-tip', '');

            if (tip) {
              setTimeout(function () {
                _this13.el.attr('data-tip', tip);

                setTimeout(function () {
                  if (!_this13.el.data('tip-filtered_')) {
                    _p.tip.filters.forEach(function (filter) {
                      tip = filter(tip) || tip;
                    });

                    _this13.el.data({
                      'tip-filtered_': tip
                    });
                  }

                  _p.tip.show(_this13.el.data('tip-filtered_'), _this13.el, _this13.el.data('tip-position'));
                }, 100);
              }, 10);
            }
          }
        }
      }.bind(this),
      'pointerleave': function (e) {
        if (e.originalEvent.pointerType != 'touch') {
          this.el.removeClass('is-hover').blur();
          InfosFleetShipEquipment.cur = null;
        }
      }.bind(this)
    }).append(this.elCarry = $('<div class="equipment-layer equipment-add"/>').on('click', function () {
      this.selectEquipmentStart();
    }.bind(this))).append($('<div class="equipment-layer equipment-infos"/>').append(this.elName = $('<span class="equipment-name"/>')).append(this.elStar = $('<span class="equipment-star"/>').html(0)).append(this.elRank = $('<span class="equipment-rank"/>')).append(function () {
      var el = $('<span class="equipment-carry"/>').html(0);
      this.elCarry = this.elCarry.add(el);
      return el;
    }.bind(this))).append($('<div class="equipment-layer equipment-options"/>').append(this.elInputStar = $('<input/>', {
      'class': 'equipment-starinput',
      'type': 'number',
      'placeholder': 0,
      'min': 0,
      'max': 10
    }).on({
      'input': function () {
        var value = this.elInputStar.val();
        if ((typeof value == 'undefined' || value === '') && this.star) this.star = null;
        value = parseInt(value);
        if (!isNaN(value) && this.star != value) this.star = value;
      }.bind(this),
      'focus': function () {
        clearTimeout(this.elBlurTimeout);
        this.el.addClass('is-hover');
      }.bind(this),
      'blur': function () {
        setTimeout(function () {
          if (!this.el.is(':focus')) this.el.removeClass('is-hover');
        }.bind(this), 10);
      }.bind(this),
      'pointerdown': function (e) {
        var _this14 = this;

        console.log('pointerdown');

        if (e.originalEvent.pointerType == 'touch') {
          InfosFleetShipEquipment.cur = this.el.addClass('is-hover');
          clearTimeout(this.elBlurTimeout);
          setTimeout(function () {
            _this14.elInputStar.trigger('focus');
          }, 10);
        }
      }.bind(this),
      'pointerenter': function (e) {
        if (e.originalEvent.pointerType != 'touch') {
          InfosFleetShipEquipment.cur = this.el.addClass('is-hover');
          clearTimeout(this.elBlurTimeout);
        }
      }.bind(this),
      'mouseenter': function (e) {
        InfosFleetShipEquipment.cur = this.el.addClass('is-hover');
        clearTimeout(this.elBlurTimeout);
      }.bind(this)
    })).append(this.elSelectRank = $('<div/>', {
      'class': 'equipment-rankselect',
      'html': '<span>...</span>'
    }).on('click', function () {
      if (!this.el.hasClass('is-rankupgradable')) return;

      if (!InfosFleet.menuRankSelect) {
        InfosFleet.menuRankSelectItems = $('<div/>');

        var _loop3 = function _loop3(_i7) {
          $('<button class="rank-' + _i7 + '"/>').html(!_i7 ? '...' : '').on('click', function () {
            InfosFleet.menuRankSelectCur.rank = _i7;
          }).appendTo(InfosFleet.menuRankSelectItems);
        };

        for (var _i7 = 0; _i7 < 8; _i7++) {
          _loop3(_i7);
        }

        InfosFleet.menuRankSelect = new _menu({
          'className': 'contextmenu-infos_fleet_rank_select',
          'items': [InfosFleet.menuRankSelectItems]
        });
      }

      InfosFleet.menuRankSelectCur = this;
      InfosFleet.menuRankSelect.show(this.elSelectRank);
    }.bind(this))).append(this.elButtonInspect = $('<span class="button inspect" icon="search"/>').on('click', function () {
      if (this.id) _frame.infos.show('[[EQUIPMENT::' + this.id + ']]');
    }.bind(this))).append($('<span class="button change" icon="loop"/>').on('click', function () {
      this.selectEquipmentStart();
    }.bind(this))).append($('<span class="button remove"/>').on('click', function () {
      this.id = null;
    }.bind(this))));
    if (carry) this.carry = carry;
    if (equipmentTypes) this.equipmentTypes = equipmentTypes;
    this.extraEquipments = extraEquipments || [];
  }

  _createClass(InfosFleetShipEquipment, [{
    key: "getEl",
    value: function getEl() {
      return this.el;
    }
  }, {
    key: "selectEquipmentStart",
    value: function selectEquipmentStart() {
      _g.log('开始选择装备');

      _frame.app_main.load_page('equipments', {
        callback_modeSelection_select: function (id) {
          history.back();
          this.id = id;
          this.star = 0;
          this.rank = Lockr.get('fleetlist-option-aircraftdefaultmax') && id && _g.data.items[id].rankupgradable && $.inArray(_g.data.items[id].type, Formula.equipmentType.Aircrafts) > -1 ? 7 : 0;
          if (this.infosParent.infosFleet) _frame.infos.dom.main.attr('data-theme', this.infosParent.infosFleet.data['theme']);
        }.bind(this),
        callback_modeSelection_enter: function () {
          var shipId = this.infosParent.shipId;
          var ship = shipId && _g.data.ships[shipId];
          var shipExtraSlotExtra = shipId && ship.additional_exslot_item_ids;
          var shipCanEquip = shipId ? ship.getEquipmentTypes(this.index) : [];
          var types = shipId ? shipCanEquip : [];
          var isExtraSlot = false;

          if (this.equipmentTypes && this.equipmentTypes.length) {
            if (types.length) {
              var _types = [];
              this.equipmentTypes.forEach(function (v) {
                if (types.indexOf(v) > -1) _types.push(v);
              });
              types = _types;
              isExtraSlot = true;
            } else {
              types = this.equipmentTypes;
            }
          }

          TablelistEquipments.isExtraSlot = isExtraSlot;
          TablelistEquipments.types = types;
          TablelistEquipments.shipId = this.infosParent.shipId || 'FIELD';

          try {
            TablelistEquipments.currentSelected = this.infosParent.data[2] || [];
          } catch (e) {
            TablelistEquipments.currentSelected = [];
          }

          {
            TablelistEquipments.extraEquipments = this.extraEquipments ? this.extraEquipments.concat() : [];
            TablelistEquipments.extraEquipments = TablelistEquipments.extraEquipments.filter(function (eid) {
              console.log(TablelistEquipments.types, _g.data.items[eid].type);
              return shipCanEquip.indexOf(_g.data.items[eid].type) > -1;
            });

            if (ship && Array.isArray(ship.additional_items)) {
              TablelistEquipments.extraEquipments = TablelistEquipments.extraEquipments.concat(ship.additional_items);
            }
          }
          if (isExtraSlot && Array.isArray(shipExtraSlotExtra)) TablelistEquipments.extraEquipments = TablelistEquipments.extraEquipments.concat(shipExtraSlotExtra);

          _frame.app_main.page['equipments'].object.tablelistObj.apply_types();
        }.bind(this)
      });
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "save",
    value: function save() {
      if (this._updating) return false;

      if (this.infosParent) {
        this.infosParent.save();
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.isParentAirfield ? this.infosParent.data[this.index][0] : this.infosParent.data[2][this.index];
    },
    set: function set(value) {
      value = parseInt(value) || null;

      _p.tip.hide();

      this.el.removeData(['tip', 'tip-filtered', 'tip-filtered_']);
      if (!this.isParentAirfield && value != this.infosParent.data[2][this.index]) this.star = 0;

      if (value && !isNaN(value)) {
        if (this.isParentAirfield) this.infosParent.data[this.index][0] = value;else this.infosParent.data[2][this.index] = value;
        this.improvable = true;
        this.el.attr({
          'data-equipmentid': value,
          'data-tip': '[[EQUIPMENT::' + value + ']]',
          'touch-action': 'none'
        }).css('background-image', 'url(' + _g.data.items[value]._icon + ')');
        this.elName.html(_g.data.items[value]._name);

        if ($.inArray(_g.data.items[value].type, Formula.equipmentType.Aircrafts) > -1) {
          this.el.addClass('is-aircraft');
          if (_g.data.items[value].rankupgradable) this.el.addClass('is-rankupgradable');
        } else this.el.removeClass('is-aircraft is-rankupgradable');

        if (this.isParentAirfield) {
          this.carry = InfosFleetAirfield.getCarryFromType(_g.data.items[value].type);
        }
      } else {
        if (this.isParentAirfield) {
          this.infosParent.data[this.index][0] = null;
          this.carry = 18;
        } else this.infosParent.data[2][this.index] = null;

        this.improvable = true;
        this.el.removeAttr('data-equipmentId').removeAttr('data-tip').removeAttr('data-star').removeAttr('data-rank').removeAttr('touch-action').css('background-image', '').removeClass('is-aircraft is-rankupgradable');
        this.elName.html('');
      }

      if (this.isParentAirfield) this.infosParent.summaryCalc();else this.infosParent.infosFleetSubFleet.summaryCalc();
      this.save();
    }
  }, {
    key: "star",
    get: function get() {
      return this.infosParent.data[3][this.index];
    },
    set: function set(value) {
      var update = function (value) {
        if (this.isParentAirfield) this.infosParent.data[this.index][2] = value;else this.infosParent.data[3][this.index] = value;
      }.bind(this);

      if (this._improvable) {
        value = parseInt(value) || null;
        if (value > 10) value = 10;
        if (value < 0) value = 0;

        if (value) {
          update(value);
          this.elInputStar.val(value);
          this.elStar.html(value);
          this.el.attr('data-star', value);
        } else {
          update(null);
          this.elInputStar.val('');
          this.elStar.html(0);
          this.el.attr('data-star', '');
        }
      } else {
        update(null);
        this.el.removeAttr('data-star');
      }

      if (this.isParentAirfield) this.infosParent.summaryCalc();else this.infosParent.infosFleetSubFleet.summaryCalc();
      this.save();
    }
  }, {
    key: "rank",
    get: function get() {
      return this.isParentAirfield ? this.infosParent.data[this.index][1] : this.infosParent.data[4][this.index];
    },
    set: function set(value) {
      var update = function (value) {
        if (this.isParentAirfield) this.infosParent.data[this.index][1] = value;else this.infosParent.data[4][this.index] = value;
      }.bind(this);

      if (this.id && $.inArray(_g.data.items[this.id].type, Formula.equipmentType.Aircrafts) > -1) {
        value = parseInt(value) || null;
        if (value > 7) value = 7;
        if (value < 0) value = 0;

        if (value) {
          update(value);
          this.el.attr('data-rank', value);
        } else {
          update(null);
          this.el.attr('data-rank', '');
        }
      } else {
        update(null);
        this.el.removeAttr('data-rank');
      }

      if (this.isParentAirfield) this.infosParent.summaryCalc();else this.infosParent.infosFleetSubFleet.summaryCalc();
      this.save();
    }
  }, {
    key: "carry",
    set: function set(value) {
      if (typeof value == 'undefined') {
        this.el.removeAttr('data-carry');
        this.elCarry.html(0);
      } else {
        value = parseInt(value) || 0;
        this.el.attr('data-carry', value);
        this.elCarry.html(value);
      }
    }
  }, {
    key: "improvable",
    set: function set(value) {
      if (!value) {
        this.el.removeAttr('data-star');
        this.elInputStar.prop('disabled', true).attr('placeholder', '--');
        this._improvable = false;
      } else {
        this.el.attr('data-star', '');
        this.elInputStar.prop('disabled', false).attr('placeholder', '0');
        this._improvable = true;
      }
    }
  }]);

  return InfosFleetShipEquipment;
}();

InfosFleetShipEquipment.improvableExtra = [110];

var InfosFleetSubAirfield = function () {
  function InfosFleetSubAirfield(infosFleet, d, label) {
    _classCallCheck(this, InfosFleetSubAirfield);

    d = d || [];
    this.data = d;
    this.label = label;
    this.el = $('<dl class="fleetships fleetairfields"/>');
    this.container = $('<dl class="airfields"/>').appendTo(this.el);
    this.fields = [];
    var i = 0;

    while (i < 3) {
      this.fields[i] = new InfosFleetAirfield(infosFleet, this, i);
      this.fields[i].getEl().appendTo(this.container);
      i++;
    }

    $('<dl class="gap"/>').appendTo(this.el);
    var tips = ['“航程”决定了该航空队在出击时所能抵达的最远作战点，数值由航程属性最小的中队决定，侦察机也可以提高这一数值。', '“制空战力”表示该航空队执行出击任务时的制空能力，“防空战力”则表示防空任务能力。', '局地战斗机的“迎击”属性也可以提高制空战力。装备列表中局战的“回避”列数值即为“迎击”属性。', '除了局地战斗机的“迎击”和“对爆”属性外，在航空队种配置侦察机也可以有效提高防空战力。'];
    $('<dl class="tips"/>').html("\n                    <ul class=\"tip-content\">\n                        <h4 data-content=\"\u5C0F\u8D34\u58EB\">\u5C0F\u8D34\u58EB</h4>\n                        ".concat(tips.map(function (tip) {
      return "<li>".concat(tip, "</li>");
    }).join(''), "\n                    </ul>\n                ")).appendTo(this.el);
    this.infosFleet = infosFleet;
  }

  _createClass(InfosFleetSubAirfield, [{
    key: "updateEl",
    value: function updateEl(d) {
      var _this15 = this;

      this.data = d || this.data;
      var count = 0;
      if (d) d.forEach(function (fd, i) {
        this.fields[i].updateEl(fd);
        if (fd && fd.push) fd.forEach(function (a) {
          if (a && a.push && a[0]) count++;
        });
      }, this);

      if (this.infosFleet.data.name_airfields && this.infosFleet.data.name_airfields.push) {
        this.infosFleet.data.name_airfields.forEach(function (name, i) {
          _this15.fields[i].elTitle.html(name).trigger('namechange', [name]).trigger('blur');
        });
      }

      if (count) {
        this.label.addClass('highlight');
      } else {
        this.label.removeClass('highlight');
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "save",
    value: function save() {
      this.data = this.data || [];
      var count = 0,
          names = [];
      this.fields.forEach(function (field, i) {
        this.data[i] = field.data;
        if (field.data && field.data.push) field.data.forEach(function (a) {
          if (a && a.push && a[0]) count++;
        });
        names[i] = field.name || '';
      }, this);

      if (count) {
        this.label.addClass('highlight');
      } else {
        this.label.removeClass('highlight');
      }

      if (this.infosFleet) {
        this.infosFleet.data.name_airfields = names;
        this.infosFleet.save();
      }
    }
  }]);

  return InfosFleetSubAirfield;
}();

var InfosFleetAirfield = function () {
  function InfosFleetAirfield(infosFleet, infosParent, index, d) {
    var _this16 = this;

    _classCallCheck(this, InfosFleetAirfield);

    if (this.el) return this.el;
    d = d || [[], [], [], []];
    this.data = d;
    this.infosFleet = infosFleet;
    this.infosParent = infosParent;
    this.aircrafts = [];
    this.index = index;
    var no = ['一', '二', '三'];
    this.el = $('<dd class="airfield"/>').append(this.elTitle = new InfosFleetEditableTitle({
      tagName: 'h4',
      placeholder: "\u7B2C".concat(no[index], "\u822A\u7A7A\u961F"),
      onUpdate: function onUpdate(newContent) {
        _this16._name = newContent;
      }
    }).$el).append($('<div class="aircrafts"/>').append(function () {
      var els = $();

      for (var _i8 = 0; _i8 < 4; _i8++) {
        this.aircrafts[_i8] = new InfosFleetShipEquipment(this, _i8, 18, InfosFleetAirfield.equipmentTypes);
        els = els.add(this.aircrafts[_i8].el);
      }

      return els;
    }.bind(this)));
    this.elSummary = $('<span class="summary"/>').appendTo($('<div class="airfield-summary"/>').appendTo(this.el)).append($('<span class="summary-item"/>').html('航程').append(this.elSummaryDistance = $('<strong/>').html('-'))).append($('<span class="summary-item"/>').html('制空战力').append(this.elSummaryFighterPower = $('<strong/>').html('-'))).append($('<span class="summary-item"/>').html('防空战力').append(this.elSummaryFighterPowerAA = $('<strong/>').html('-')));
    this.els = this.el;
  }

  _createClass(InfosFleetAirfield, [{
    key: "getEl",
    value: function getEl() {
      return this.els;
    }
  }, {
    key: "updateEl",
    value: function updateEl(d) {
      this._updating = true;
      this.data = d || this.data;

      for (var _i9 = 0; _i9 < 4; _i9++) {
        if (!this.data[_i9]) this.data[_i9] = [];else {
          if (this.data[_i9][0]) this.aircrafts[_i9].id = this.data[_i9][0];
          if (this.data[_i9][1]) this.aircrafts[_i9].rank = this.data[_i9][1];
          if (this.data[_i9][2]) this.aircrafts[_i9].star = this.data[_i9][2];
        }
      }

      this._updating = false;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "getCarry",
    value: function getCarry(equipment) {
      return InfosFleetAirfield.getCarryFromType(equipment.type);
    }
  }, {
    key: "summaryCalc",
    value: function summaryCalc() {
      if (this.summaryCalculating || !this.data || !this.data.push) return false;
      this.summaryCalculating = setTimeout(function () {
        var fighterPower = [0, 0],
            distance = {
          min: 0,
          max: 0,
          recon: 0
        },
            fighterPowerAA = [0, 0],
            planes = [];
        this.data.forEach(function (d) {
          if (d[0]) {
            var e = _g.data.items[d[0]],
                carry = this.getCarry(e),
                _distance = e.stat.distance || 0;

            if (Formula.equipmentType.Recons.indexOf(e.type) > -1) {
              distance.recon = Math.max(distance.recon, _distance);
            } else {
              distance.min = distance.min <= 0 ? _distance : Math.min(distance.min, _distance);
              distance.max = Math.max(distance.max, _distance);
            }

            planes.push({
              equipment: e,
              rank: d[1],
              star: d[2],
              carry: carry
            });
          }
        }, this);
        fighterPower = Formula.calcByField.fighterPower(planes);
        fighterPowerAA = Formula.calcByField.fighterPowerAA(planes);

        var renderMinMax = function renderMinMax(data, dom) {
          if (Math.max(data[0], data[1]) > 0) {
            var val1 = Math.floor(data[0]),
                val2 = Math.floor(data[1]);
            dom.removeClass('empty').html(val1 == val2 ? val1 : val1 + '~' + val2);
          } else {
            dom.addClass('empty').html('-');
          }
        };

        renderMinMax(fighterPower, this.elSummaryFighterPower);
        renderMinMax(fighterPowerAA, this.elSummaryFighterPowerAA);

        if (distance.min + distance.recon > 0) {
          var val = distance.min;

          if (distance.recon) {
            val += Math.round(Math.min(3, Math.max(0, Math.sqrt(distance.recon - distance.min))));
          }

          this.elSummaryDistance.removeClass('empty').html(val);
        } else {
          this.elSummaryDistance.addClass('empty').html('-');
        }

        this.summaryCalculating = null;
      }.bind(this), 10);
      return true;
    }
  }, {
    key: "swap",
    value: function swap(target, save) {
      if (typeof target == 'number') target = this.infosFleetSubFleet.ships[target];

      if (this.index > target.index) {
        this.el.insertBefore(target.el);
      } else {
        this.el.insertAfter(target.after);
      }

      this.after.insertAfter(this.el);
      var newIndex_dragging = target.index,
          newIndex_enter = this.index;
      console.log(newIndex_dragging, newIndex_enter);
      this.index = newIndex_dragging;
      target.index = newIndex_enter;
      this.infosFleetSubFleet.ships[newIndex_dragging] = this;
      this.infosFleetSubFleet.ships[newIndex_enter] = target;
      if (save) this.save();
    }
  }, {
    key: "moveUp",
    value: function moveUp() {
      if (this.index <= 0) return;
      this.swap(this.index - 1, true);
    }
  }, {
    key: "moveDown",
    value: function moveDown() {
      if (this.index >= 5) return;
      this.swap(this.index + 1, true);
    }
  }, {
    key: "save",
    value: function save() {
      if (this._updating) return false;

      if (!this._updateTimeout) {
        this._updateTimeout = setTimeout(function () {
          if (this.infosParent) {
            this.infosParent.save();
          }

          this._updateTimeout = null;
        }.bind(this), 50);
      }
    }
  }, {
    key: "_name",
    get: function get() {
      return this.name;
    },
    set: function set(value) {
      this.name = value;
      this.save();
    }
  }]);

  return InfosFleetAirfield;
}();

InfosFleetAirfield.dragStart = function (InfosFleetAirfield) {
  if (InfosFleetAirfield.dragging || !InfosFleetAirfield) return false;
  InfosFleetAirfield.dragging = InfosFleetAirfield;
  InfosFleetAirfield.el.addClass('moving');

  if (!InfosFleetAirfield.isInit) {
    $body.on({
      'pointerup.InfosFleetAirfield_dragend pointercancel.InfosFleetAirfield_dragend': function pointerupInfosFleetAirfield_dragendPointercancelInfosFleetAirfield_dragend() {
        if (InfosFleetAirfield.dragging) {
          InfosFleetAirfield.dragging.el.removeClass('moving');
          InfosFleetAirfield.dragging.save();
          InfosFleetAirfield.dragging = null;
        }
      }
    });
    InfosFleetAirfield.isInit = true;
  }
};

InfosFleetAirfield.dragEnter = function (infosFleetAirfield_enter) {
  if (!InfosFleetAirfield.dragging || !infosFleetAirfield_enter || InfosFleetAirfield.dragging == infosFleetAirfield_enter) return false;
  InfosFleetAirfield.dragging.swap(infosFleetAirfield_enter);
};

InfosFleetAirfield.equipmentTypes = $.unique(Formula.equipmentType.LandBased.concat(Formula.equipmentType.Seaplanes).concat(Formula.equipmentType.CarrierBased).concat(Formula.equipmentType.Recons));

InfosFleetAirfield.getCarryFromType = function (equipmentType) {
  if (Formula.equipmentType.Recons.indexOf(equipmentType) > -1) return KC.planesPerSlotLBAS.recon;else if (Formula.equipmentType.LandBasedLarge.indexOf(equipmentType) > -1) return KC.planesPerSlotLBAS.large;else return KC.planesPerSlotLBAS.attacker;
};

_frame.infos.__fleet__OUTPUT = function (id) {
  return $('<div class="infos-fleet loading"/>').append($('<div class="loading-msg"/>').html('Loading...'));
};

_frame.infos.__ship = function (id) {
  var d = _g.data.ships[id];

  _g.log(d);

  function _val(val, show_zero) {
    if (typeof val != 'number') val = parseInt(val);
    if (isNaN(val) || val < 0) return '<small class="zero">?</small>';
    if (!show_zero && val == 0) return '<small class="zero">-</small>';
    return val;
  }

  function _add_stat(name, title, tar) {
    var val99, valMax;

    switch (name) {
      case 'hp':
        val99 = _val(d.getAttribute('hp', 99)) + '<sup>+' + (d.getStatExtraMax('hp', 99) || 0) + '</sup>';
        valMax = _val(d.getAttribute('hp', _g.shipMaxLv)) + '<sup>+' + (d.getStatExtraMax('hp', 100) || 0) + '</sup>';
        break;

      case 'asw':
        val99 = d.getAttribute('asw', 99);

        if (val99 || /^(5|8|9|12|24|30)$/.test(d['type'])) {
          var sup = '<sup>+' + (d.getStatExtraMax('asw') || 0) + '</sup>';
          val99 = _val(d.getAttribute('asw', 99), true) + sup;
          valMax = _val(d.getAttribute('asw', _g.shipMaxLv), true) + sup;
        } else {
          val99 = _val(0, false);
          valMax = _val(0, false);
        }

        break;

      case 'evasion':
      case 'los':
        val99 = _val(d.getAttribute(name, 99));
        valMax = _val(d.getAttribute(name, _g.shipMaxLv));
        break;

      case 'speed':
        val99 = _g.getStatSpeed(d['stat']['speed']);
        break;

      case 'range':
        val99 = _g.getStatRange(d['stat']['range']);
        break;

      case 'luck':
        val99 = d['stat']['luck'] + '<sup>' + _val(d['stat']['luck_max']) + '</sup>';
        valMax = d['stat']['luck'] + 3 + '<sup>' + _val(d['stat']['luck_max']) + '</sup>';
        break;

      case 'fuel':
      case 'ammo':
        val99 = _val(d.getAttribute(name, 99));
        valMax = _val(d.getAttribute(name, _g.shipMaxLv));
        break;

      default:
        val99 = _val(d.getAttribute(name, 99));
        break;
    }

    $('<span/>').html('<small class="stat-' + name + '">' + title + '</small>' + '<em' + (valMax ? ' class="lvl99"' : '') + '>' + val99 + '</em>' + (valMax ? '<em class="lvl150">' + valMax + '</em>' : '')).appendTo(tar);
  }

  var dom = $('<div class="infos-ship"/>').attr('data-infos-title', d._name + ' - 舰娘'),
      ship_name = d.getName(_g.joint) || '舰娘',
      illustrations = [],
      illustrationsExtra = [],
      has_no = d['no'] && parseInt(d['no']) < 500 ? true : false;
  {
    $('<div class="title"/>').html('<h2 data-content="' + ship_name + '">' + ship_name + '</h2>' + '<small>' + '<span data-tip="' + (has_no ? '图鉴编号' : '无图鉴编号') + '">No.' + (has_no ? d['no'] : '-') + '</span>' + (d['class'] ? _g['data']['ship_classes'][d['class']].name.zh_cn + '级' : '') + (d['class_no'] && !isNaN(d['class_no']) ? '<em>' + d['class_no'] + '</em>号舰' : '') + (d['type'] ? ' / ' + _g['data']['ship_types'][d['type']].name.zh_cn : '') + (d['class_no'] && isNaN(d['class_no']) ? ' /<em>' + d['class_no'] + '</em>' : '') + '</small>').appendTo(dom);
  }
  {
    var lvlRadio99_id = id + '_stat_lv_99',
        lvlRadio150_id = id + '_stat_lv_150',
        curLvl = parseInt(_config.get('ship_infos_lvl') || 99),
        stats = $('<div class="stats"/>').html('<div class="title">' + '<h4 data-content="基础属性">基础属性</h4>' + '<span>' + '<label for="' + lvlRadio99_id + '" class="lvl99">99</label>' + '<label for="' + lvlRadio150_id + '" class="lvl150">' + _g.shipMaxLv + '</label>' + '</span>' + '</div>').prepend($('<input type="radio" name="ship_infos_lvl_' + id + '" id="' + lvlRadio99_id + '" value="99" checked/>').prop('checked', curLvl == 99).on('change', function () {
      _config.set('ship_infos_lvl', 99);
    })).prepend($('<input type="radio" name="ship_infos_lvl_' + id + '" id="' + lvlRadio150_id + '" value="150"/>').prop('checked', curLvl == 150).on('change', function () {
      _config.set('ship_infos_lvl', 150);
    })).appendTo(dom),
        stat1 = $('<div class="stat"/>').appendTo(stats),
        stat2 = $('<div class="stat"/>').appendTo(stats),
        stat3 = $('<div class="stat"/>').appendTo(stats),
        stat_consum = $('<div class="stat consum"/>').appendTo(stats);
    _g.inputIndex += 2;

    _add_stat('hp', '耐久', stat1);

    _add_stat('armor', '装甲', stat1);

    _add_stat('evasion', '回避', stat1);

    _add_stat('carry', '搭载', stat1);

    _add_stat('fire', '火力', stat2);

    _add_stat('torpedo', '雷装', stat2);

    _add_stat('aa', '对空', stat2);

    _add_stat('asw', '对潜', stat2);

    _add_stat('speed', '航速', stat3);

    _add_stat('range', '射程', stat3);

    _add_stat('los', '索敌', stat3);

    _add_stat('luck', '运', stat3);

    _add_stat('fuel', '油耗', stat_consum);

    _add_stat('ammo', '弹耗', stat_consum);
  }
  {
    var equips = $('<div class="equipments"/>').html('<h4 data-content="初始装备 & 搭载量">初始装备 & 搭载量</h4>').appendTo(dom),
        i = 0;

    while (i < Math.max(4, d.slot.length)) {
      var equip = $('<a/>').appendTo(equips),
          icon = $('<i/>').appendTo(equip),
          name = $('<small/>').appendTo(equip),
          slot = $('<em/>').appendTo(equip);

      if (typeof d['slot'][i] == 'undefined') {
        equip.addClass('no');
      } else if (typeof d['equip'][i] == 'undefined' || !d['equip'][i] || d['equip'][i] === '') {
        equip.addClass('empty');
        name.html('--未装备--');
        slot.html(d['slot'][i]);
      } else {
        var equipmentId = _typeof(d.equip[i]) === 'object' ? d.equip[i].id : d.equip[i];
        var item_data = _g.data.items[equipmentId];
        var star = _typeof(d.equip[i]) === 'object' ? d.equip[i].star : undefined;
        equip.attr({
          'data-equipmentid': equipmentId,
          'data-tip-position': 'left',
          'data-infos': '[[EQUIPMENT::' + equipmentId + ']]',
          'data-tip': '[[EQUIPMENT::' + equipmentId + ']]',
          'href': '?infos=equipment&id=' + equipmentId
        });
        name.html(item_data.getName(true) + (star ? "<span class=\"star\">".concat(star, "</span>") : ''));
        slot.html(d['slot'][i]);
        icon.addClass('equiptypeicon mod-' + item_data.getIconId());
      }

      i++;
    }
  }
  {
    var modernization = $('<div class="modernization"/>').html('<h4 data-content="合成">合成</h4>').appendTo(equips),
        has_modernization = false;

    var _stats = $('<div class="stats"/>').appendTo(modernization);

    if (d['modernization']) d['modernization'].forEach(function (currentValue, i) {
      if (currentValue) {
        has_modernization = true;
        var stat;

        switch (i) {
          case 0:
            stat = 'fire';
            break;

          case 1:
            stat = 'torpedo';
            break;

          case 2:
            stat = 'aa';
            break;

          case 3:
            stat = 'armor';
            break;
        }

        $('<span class="stat-' + stat + '"/>').html('+' + currentValue).appendTo(_stats);
      }
    });
    if (d['id'] == 163) $('<span class="stat-luck"/>').html('+1.2').appendTo(_stats);
    if (d['id'] == 402) $('<span class="stat-luck"/>').html('+1.6').appendTo(_stats);
    if (!has_modernization) modernization.addClass('no').append($('<em/>').html('-'));
  }
  {
    var container = $('<div class="additionals"/>').appendTo(dom);
    {
      $('<button />', {
        type: 'button',
        "class": 'button button-viewbonuses',
        disabled: d.getBonuses().length <= 0,
        icon: 'search',
        html: '装备属性加成...',
        "data-ship-id": d.id
      }).appendTo(container);
    }
  }

  if (d['additional_item_types'] && d['additional_item_types'].length) {
    var additional_equipment_types = $('<div class="add_equip"/>').appendTo(dom),
        _additional_equipment_types = $('<div/>').html('<h4 data-content="额外装备类型">额外装备类型</h4>').appendTo(additional_equipment_types);

    d['additional_item_types'].forEach(function (currentValue) {
      var _d = _g['data']['item_types'][currentValue];

      _additional_equipment_types.append($('<span/>').html(_d['name'][_g.lang]).addClass('equiptypeicon mod-left mod-' + _d['icon']));
    });
  }

  if (d['additional_night_shelling']) {
    $('<div class="add_equip add_other"/>').html("<div>\n                    <h4 data-content=\"\u989D\u5916\u80FD\u529B\">\u989D\u5916\u80FD\u529B</h4>\n                    <span>\u591C\u6218\u70AE\u51FB</span>\n                </div>").appendTo(dom);
  }

  var cvId = d.getRel('cv'),
      illustratorId = d.getRel('illustrator'),
      cvLink = $('<a/>', {
    'class': 'entity'
  }).html('<strong>声优</strong>' + '<span>' + (d._cv || '?') + '</span>').appendTo(dom),
      illustratorLink = $('<a/>', {
    'class': 'entity'
  }).html('<strong>画师</strong>' + '<span>' + (d._illustrator || '?') + '</span>').appendTo(dom);
  if (cvId) cvLink.attr({
    'href': '?infos=entity&id=' + cvId,
    'data-infos': '[[ENTITY::' + cvId + ']]'
  });
  if (illustratorId) illustratorLink.attr({
    'href': '?infos=entity&id=' + illustratorId,
    'data-infos': '[[ENTITY::' + illustratorId + ']]'
  });
  var illusts = $('<aside class="illustrations"/>').appendTo(dom),
      illusts_wrapper = $('<div class="wrapper"/>').appendTo(illusts),
      illusts_container = $('<div class="body"/>').appendTo(illusts_wrapper);

  var remodels = $('<div class="remodels"/>').html('<h4 data-content="改造">改造</h4>').insertBefore(illusts),
      remodels_container = _p.el.flexgrid.create().appendTo(remodels),
      seriesData = d.getSeriesData();

  if (seriesData) {
    var check_append = function check_append(file, positionInPair) {
      try {
        var stat = node.fs.lstatSync(file);

        if (stat && stat.isFile()) {
          index++;
          var radioid = 'ship_' + d['id'] + '_illustrations_' + index;
          $('<input type="radio" name="ship_' + d['id'] + '_illustrations" id="' + radioid + '" value="' + index + '"' + (index == 1 ? ' checked' : '') + '/>').prop('checked', index == 1).insertBefore(illusts_wrapper);
          $('<label for="' + radioid + '"/>').insertBefore(illusts_wrapper);
          $('<span/>').html('<img src="' + file + '" data-filename="' + ship_name + ' - ' + index + '.webp"/>').appendTo(illusts_container);
        } else {}
      } catch (e) {}
    };

    seriesData.forEach(function (currentValue, i) {
      var remodel_ship_data = _g.data.ships[currentValue['id']],
          remodel_ship_name = remodel_ship_data.getName(_g.joint),
          tip = '<h3 class="shipinfo">' + '<strong data-content="' + remodel_ship_name + '">' + remodel_ship_name + '</strong>' + (remodel_ship_data['type'] ? '<small>' + _g['data']['ship_types'][remodel_ship_data['type']].name.zh_cn + '</small>' : '') + '</h3>',
          data_prev = i ? seriesData[i - 1] : null,
          remodel_lvl = data_prev ? data_prev['next_lvl'] : null,
          remodel_blueprint = data_prev ? data_prev['next_blueprint'] : null,
          remodel_catapult = data_prev ? data_prev['next_catapult'] : null,
          has_extra_illust = currentValue.illust_extra && currentValue.illust_extra.length && currentValue.illust_extra[0] ? true : false,
          flag = '';

      var getNavy = function getNavy() {
        if (remodel_ship_data.navy) return remodel_ship_data.navy;
        return remodel_ship_data["class"] ? _g.data.ship_classes[remodel_ship_data["class"]].navy || 'ijn' : 'ijn';
      };

      var navy = getNavy();

      if (navy && navy !== 'ijn') {
        flag += '<span class="flag-navy" data-navy="' + navy + '"></span>';
      }

      if (remodel_blueprint || remodel_catapult) {
        if (remodel_blueprint) tip += '<span class="requirement is-blueprint">需要：改装设计图</span>';
        if (remodel_catapult) tip += '<span class="requirement is-catapult">需要：试制甲板弹射器</span>';
      }

      if (!has_extra_illust && currentValue.illust_delete && data_prev) has_extra_illust = data_prev.illust_extra && data_prev.illust_extra.length && data_prev.illust_extra[0] ? true : false;
      remodels_container.appendDOM($('<a/>', {
        'class': 'unit' + (currentValue['id'] == d['id'] ? ' on' : '') + (remodel_blueprint ? ' mod-blueprint' : '') + (remodel_catapult ? ' mod-catapult' : ''),
        'href': '?infos=ship&id=' + currentValue['id'],
        'data-shipid': currentValue['id'],
        'data-infos': '[[SHIP::' + currentValue['id'] + ']]',
        'data-tip': tip,
        'data-infos-nohistory': true,
        'html': '<i><img src="' + KC.getFolderGroup(_g.path.pics.ships, currentValue['id']) + '/' + currentValue['id'] + '/0.webp"/></i>' + (remodel_lvl ? '<strong>' + _val(remodel_lvl) + '</strong>' : '') + (has_extra_illust ? '<em icon="hanger"></em>' : '') + flag
      }));
      if (currentValue.next_loop) remodels_container.appendDOM($('<span class="unit" icon="loop-alt3" data-tip="可在两个改造版本间切换"/>').html('&nbsp;'));

      if (currentValue['id'] == d['id']) {
        if (currentValue.illust_delete) {
          if (data_prev) {
            illustrations.push(data_prev['id']);

            if (data_prev.illust_extra && data_prev.illust_extra.length && data_prev.illust_extra[0]) {
              data_prev.illust_extra.forEach(function (cur) {
                illustrationsExtra.push(cur);
              });
            }
          }
        } else {
          illustrations.push(currentValue['id']);

          if (currentValue.illust_extra && currentValue.illust_extra.length && currentValue.illust_extra[0]) {
            currentValue.illust_extra.forEach(function (cur) {
              illustrationsExtra.push(cur);
            });
          }
        }
      }
    });
    var index = 0;
    illustrations.forEach(function (currentValue) {
      check_append(node.path.normalize(KC.getFolderGroup(_g.path.pics.ships, currentValue)) + currentValue + '/8.webp', 0);
      check_append(node.path.normalize(KC.getFolderGroup(_g.path.pics.ships, currentValue)) + currentValue + '/9.webp', 1);
    });
    illustrationsExtra.forEach(function (currentValue) {
      check_append(node.path.normalize(KC.getFolderGroup(_g.path.pics.shipsExtra, currentValue)) + currentValue + '/8.webp', 0);
      check_append(node.path.normalize(KC.getFolderGroup(_g.path.pics.shipsExtra, currentValue)) + currentValue + '/9.webp', 1);
    });
    if (index % 2) illusts.addClass('is-singlelast');
  }

  return dom;
};

_frame.infos.__ship_init = function ($el) {
  {
    $el.on('click.viewbonuses', '.button-viewbonuses', function (evt) {
      evt.preventDefault();
      if (evt.target.disabled) return;
      modal.bonuses.show('ship', evt.target.getAttribute('data-ship-id'));
    });
  }

  var x,
      originalX = -1,
      startX,
      startY,
      startTime,
      deltaX,
      deltaY,
      isPanning = false,
      isScrollSnap = _huCss.csscheck_full('scroll-snap-type') && !bFirefox,
      scrollLock = false,
      mouseWheelLock = false,
      illustMain = $el.find('.illustrations'),
      illust = illustMain.find('.body'),
      imgs = illust.children('span'),
      n = 'e' + _g.timeNow(),
      labels = illustMain.children('label'),
      inputs = illustMain.children('input[type="radio"]').on('change', function (e, scrollTime) {
    var i = parseInt(e.target.getAttribute('value')) - 1;

    if (!labels.eq(i).is(':visible')) {
      i--;
      inputs.eq(i).prop('checked', true);
    }

    if (isScrollSnap && !scrollLock) {
      scrollLock = true;
      illust.off('scroll').animate({
        scrollLeft: imgs.eq(i)[0].offsetLeft
      }, typeof scrollTime == 'undefined' ? 200 : scrollTime, function () {
        setTimeout(function () {
          scrollLock = false;
          illust.on('scroll', scrollHandler);
        }, 50);
      });
    } else {}
  }),
      illustWidth = 0,
      inputCur = 0,
      sCount = 1,
      extraCount = 0;

  function count() {
    inputCur = parseInt(inputs.filter(':checked').val()) - 1;
    sCount = Math.ceil(inputs.length / labels.filter(':visible').length);
    extraCount = illustMain.hasClass('is-singlelast') && sCount == 2 ? 1 : 0;
  }

  function countReset() {
    inputCur = 0;
    sCount = 0;
    extraCount = 0;
  }

  function scrollStart() {
    originalX = illust.scrollLeft();
    illustWidth = illust.width();
    count();
  }

  function scrollHandler() {
    if (originalX >= 0) {
      x = illust.scrollLeft();

      if (!isPanning) {
        requestAnimationFrame(scrollX);
      }

      isPanning = true;
    }
  }

  function scrollX() {
    var delta = x - originalX,
        pDelta = (Math.floor(Math.abs(delta) / illustWidth) + (Math.abs(delta % illustWidth) > illustWidth / 2 ? 1 : 0)) * (x < originalX ? -1 : 1);
    isPanning = false;

    if (delta !== 0) {
      var t = inputCur + pDelta * sCount;
      if (t < 0) t = 0;
      if (t + sCount > inputs.length + extraCount) t = inputs.length - sCount;
      inputs.eq(t).prop('checked', true);
    }
  }

  function _resized() {
    originalX = -1;
    inputs.filter(':checked').trigger('change', 0);
    if (isScrollSnap) scrollStart();
  }

  function _show(is_firsttime) {
    $window.on('resized.' + n, _resized);

    _resized();
  }

  function _hide() {
    $window.off('resized.' + n);
  }

  $el.on({
    'show': _show,
    'hidden': _hide
  });

  if (isScrollSnap) {
    illustMain.addClass('mod-scroll-snap');
    illust.on({
      'scroll': scrollHandler,
      'pointerdown': function pointerdown(e) {
        if (originalX < 0 && e.originalEvent.pointerType == 'touch') {
          scrollStart();
        }
      },
      'touchstart': function touchstart() {
        if (originalX < 0) {
          scrollStart();
        }
      }
    });
  } else {
    var panEnd = function panEnd() {
      illust.css('transform', '').removeClass('is-panning');
      originalX = 0;
      startX = 0;
      startY = 0;
      deltaX = 0;
      deltaY = 0;
      countReset();
      isActualPanning = false;
      $(document).off('touchmove.infosShipIllust touchend.infosShipIllust touchcancel.infosShipIllust');
    };

    var panX = function panX() {
      isPanning = false;
      var half = inputCur <= 0 && deltaX > 0 || inputCur >= inputs.length - sCount && deltaX < 0;
      illust.css('transform', 'translateX(' + (deltaX * (half ? 0.3333 : 1) + originalX) + 'px)');
    };

    var panHandler = function panHandler() {
      if (!isPanning) {
        requestAnimationFrame(panX);
      }

      isPanning = true;
    };

    var bodyTouchMove = function bodyTouchMove(e) {
      if (!isPanning && (startX || startY) && e.originalEvent.targetTouches.length == 1) {
        deltaX = e.originalEvent.targetTouches[0].clientX - startX;

        if (isActualPanning) {
          panHandler();
        } else {
          deltaY = e.originalEvent.targetTouches[0].clientY - startY;
          var absX = Math.abs(deltaX),
              absY = Math.abs(deltaY);

          if (absX < 20 && absY < 20 || absX > absY) {
            e.preventDefault();

            if (absX > absY) {
              isActualPanning = true;
              illust.addClass('is-panning');
              panHandler();
            }
          } else {
            panEnd();
          }
        }
      }
    };

    var bodyTouchEnd = function bodyTouchEnd(e) {
      requestAnimationFrame(function () {
        if (deltaX && (Math.abs(deltaX) > illustWidth / 3 || _g.timeNow() - startTime < 300)) {
          var t;

          if (deltaX < 0 && inputCur < inputs.length - 1) {
            t = inputCur + sCount;
          } else if (deltaX > 0 && inputCur > 0) {
            t = inputCur - 1;
          }

          if (t < 0) t = 0;
          if (t + sCount > inputs.length + extraCount) t = inputs.length - sCount;
          inputs.eq(t).prop('checked', true).trigger('change');
        }

        panEnd();
      });
    };

    var isActualPanning = false;
    illustMain.on({
      'touchstart': function touchstart(e) {
        if (e.originalEvent.targetTouches && e.originalEvent.targetTouches.length == 1) {
          var matrix = illust.css('transform').replace(/[^0-9\-.,]/g, '').split(',');
          originalX = parseInt(matrix[12] || matrix[4] || 0);
          startX = e.originalEvent.targetTouches[0].clientX;
          startY = e.originalEvent.targetTouches[0].clientY;
          startTime = _g.timeNow();
          count();
          illustWidth = illust.width();
          $(document).on({
            'touchmove.infosShipIllust': bodyTouchMove,
            'touchend.infosShipIllust': bodyTouchEnd,
            'touchcancel.infosShipIllust': bodyTouchEnd
          });
        }
      },
      'touchmove': function touchmove(e) {
        if (isActualPanning) e.preventDefault();
      }
    });
  }

  function illustShift(direction, jumpToAnotherEdge) {
    if (!direction || scrollLock) return;
    var t = -10;
    count();

    if (direction == 1) {
      t = inputCur + sCount;
    } else if (direction == -1) {
      t = inputCur - 1;
    }

    if (t < 0 && t > -10) {
      if (jumpToAnotherEdge) t = inputs.length - sCount;else t = 0;
    } else if (t + sCount > inputs.length + extraCount) {
      if (jumpToAnotherEdge) t = 0;else t = inputs.length - sCount;
    }

    countReset();

    if (t >= 0) {
      if (isScrollSnap) scrollStart();
      inputs.eq(t).prop('checked', true).trigger('change');
    }
  }

  illustMain.on('mousewheel', function (e) {
    if (mouseWheelLock || scrollLock || $el.get(0).scrollHeight > $el.get(0).clientHeight) return;
    var direction;
    if (isScrollSnap && e.originalEvent.deltaY) direction = e.originalEvent.deltaY < 0 ? -1 : 1;else if (e.originalEvent.wheelDelta) direction = e.originalEvent.wheelDelta > 0 ? -1 : 1;else if (e.originalEvent.deltaX) direction = e.originalEvent.deltaX < 0 ? -1 : 1;else if (e.originalEvent.deltaY) direction = e.originalEvent.deltaY < 0 ? -1 : 1;

    if (direction) {
      mouseWheelLock = true;
      illustShift(direction);
      setTimeout(function () {
        mouseWheelLock = false;
      }, 100);
    }
  });
  $('<button class="arrow prev" icon="arrow-left"/>').on('click', function () {
    illustShift(-1, true);
  }).insertBefore(inputs.eq(0));
  $('<button class="arrow next" icon="arrow-right"/>').on('click', function () {
    illustShift(1, true);
  }).insertAfter(labels.eq(labels.length - 1));
};

_frame.app_main.is_mode_selection = function () {
  return $html.hasClass('mode-selection') || _frame.dom.layout.hasClass('mode-selection');
};

_frame.app_main.mode_selection_callback = null;

_frame.app_main.mode_selection_on = function (callback) {
  if (!_frame.dom.navSelectionInfo) {
    _frame.dom.navSelectionInfo = $('<div class="selection-info"/>').html('请选择……').appendTo(_frame.dom.nav);
  }

  callback = callback || function () {};

  callback();

  _frame.dom.layout.addClass('mode-selection');
};

_frame.app_main.mode_selection_off = function () {
  if (this.cur_page) this.page_dom[this.cur_page].trigger('modeSelectionExit');

  _frame.dom.layout.removeClass('mode-selection');
};

if (typeof _p.tip != 'undefined') {
  _p.tip.filters.push(function (cont) {
    var exp = /^\[\[EQUIPMENT\:\:([0-9]+)\]\]$/.exec(cont);
    if (exp && exp.length > 1) return _p.tip.content_equipment(_g.data.items[parseInt(exp[1])]);
  });

  _p.tip.content_equipment = function (d) {
    function _stat(stat, title) {
      if (d['stat'][stat]) {
        if (Formula.equipmentType.Interceptors.indexOf(d.type) > -1) {
          switch (stat) {
            case 'hit':
              title = '对爆';
              break;

            case 'evasion':
              title = '迎击';
              break;
          }
        }

        switch (stat) {
          case 'range':
            return '<span>射程: ' + _g.getStatRange(d['stat'][stat]) + '</span>';

          case 'distance':
            return '<span>' + title + ': ' + d['stat'][stat] + '</span>';

          default:
            var val = parseInt(d['stat'][stat]);
            return '<span>' + (val > 0 ? '+' : '') + val + ' ' + title + '</span>';
        }
      } else {
        return '';
      }
    }

    var item_name = d.getName(),
        isAircraft = $.inArray(d.type, Formula.equipmentType.Aircrafts) > -1;
    return '<h3 class="itemstat">' + '<s class="equiptypeicon mod-' + d.getIconId() + '"></s>' + '<strong data-content="' + item_name + '">' + item_name + '</strong>' + '<small>' + _g.data.item_types[d['type']]['name']['zh_cn'] + '</small>' + '</h3>' + _stat('fire', '火力') + _stat('torpedo', '雷装') + _stat('aa', '对空') + _stat('asw', '对潜') + _stat('bomb', '爆装') + _stat('hit', '命中') + _stat('armor', '装甲') + _stat('evasion', '回避') + _stat('los', '索敌') + _stat('range', '射程') + (isAircraft ? _stat('distance', '航程') : '');
  };

  _p.tip.filters.push(function (cont) {
    var exp = /^\[\[EQUIPABLE\:\:([0-9]+)\]\]$/.exec(cont);
    if (exp && exp.length > 1) return _p.tip.content_equipable(_g.data.item_types[parseInt(exp[1])]);
  });

  _p.tip.content_equipable_results = {};

  _p.tip.content_equipable = function (d) {
    if (!_p.tip.content_equipable_results[d.id]) {
      var html = "<h4 class=\"item_equipable_on\">\u53EF\u88C5\u5907\u4E8E\u4EE5\u4E0B\u8230\u79CD</h4>",
          equipable_extra_ship = d.equipable_extra_ship || [];
      html += "<p>";

      if (d.equipable_on_type.length) {
        var types = [];

        _g.ship_type_order_full.forEach(function (ship_type) {
          if (d.equipable_on_type.indexOf(ship_type) > -1) types.push(ship_type);
        });

        html += types.map(function (ship_type) {
          var shipType = _g.data.ship_types[ship_type];
          return '<span>' + (shipType.name.zh_cn || shipType.name.ja_jp) + "(".concat(shipType.code, ")") + '</span>';
        }).join(' / ');
      } else {
        html += '无...';
      }

      html += "</p>";

      if (equipable_extra_ship.length) {
        html += "<h4 class=\"item_equipable_on\">\u4E5F\u53EF\u88C5\u5907\u4E8E\u4EE5\u4E0B\u8230\u5A18</h4>";
        html += d.equipable_extra_ship.map(function (shipId) {
          var ship = _g.data.ships[shipId],
              shipType = ship.getType();
          return "<span><a href=\"?infos=ship&id=".concat(shipId, "\" data-shipid=\"").concat(shipId, "\" data-infos=\"[[SHIP::").concat(shipId, "]]\" data-tip=\"[[SHIP::").concat(shipId, "]]\">") + (shipType ? "[".concat(shipType, "] ") : '') + ship.getName(_g.joint) + "</a></span>";
        }).join(' / ');
      }

      _p.tip.content_equipable_results[d.id] = html;
    }

    return _p.tip.content_equipable_results[d.id];
  };
}

if (typeof _p.tip != 'undefined') {
  _p.tip.filters.push(function (cont) {
    var exp = /^\[\[SHIP\:\:([0-9]+)\]\]$/.exec(cont);
    if (exp && exp.length > 1) return _p.tip.content_ship(_g.data.ships[parseInt(exp[1])]);
  });

  _p.tip.content_ship = function (d) {
    var ship_name = d.getName(_g.joint),
        html = '<h3 class="shipinfo">' + '<img src="' + KC.getFolderGroup(_g.path.pics.ships, d['id']) + '/' + d['id'] + '/0.webp" width="160" height="40"/>' + '<strong data-content="' + ship_name + '">' + ship_name + '</strong>' + (d['type'] ? '<small>' + _g['data']['ship_types'][d['type']].name.zh_cn + '</span>' : '') + '</h3>';
    return html;
  };
}

var modal = {};
modal.equipable = {
  'frames': {},
  'frame': function frame(typeId, equipmentId) {
    if (!typeId) return false;

    if (!this.frames[typeId]) {
      var container = $('<div/>');
      var equipType = _g.data.item_types[typeId],
          onType = equipType.equipable_on_type || [],
          extraShip = equipType.equipable_extra_ship || [],
          types = [];

      if (equipmentId && _g.data.items[equipmentId] && Array.isArray(_g.data.items[equipmentId].equipable_extra_ship)) {
        _g.data.items[equipmentId].equipable_extra_ship.forEach(function (shipId) {
          extraShip.push(shipId);
        });
      }

      _g.ship_type_order_full.forEach(function (ship_type) {
        if (onType.indexOf(ship_type) > -1) types.push(ship_type);
      });

      _p.el.flexgrid.create().appendTo(container).addClass('equipable-types').prepend($(_g.ship_type_order_full.map(function (shipTypeId) {
        var shipType = _g.data.ship_types[shipTypeId];
        if (shipType.hide || shipType.donotcompare) return '';
        return '<span class="unit' + (onType.indexOf(shipTypeId) > -1 ? ' on' : '') + '">' + (shipType.name.zh_cn || shipType.name.ja_jp) + " (".concat(shipType.code, ")") + '</span>';
      }).join(''))).appendTo(container);

      if (extraShip.length) {
        container.append('<p>以及以下舰娘...</p>');

        var containerExtraShip = _p.el.flexgrid.create().appendTo(container).addClass('list-ship equipable-extra-ships');

        extraShip.forEach(function (shipId) {
          containerExtraShip.appendDOM(_tmpl.link_ship(shipId).addClass('unit'));
        });
      }

      this.frames[typeId] = container;
    }

    return this.frames[typeId];
  },
  'show': function show(typeId, equipmentId) {
    return _frame.modal.show(this.frame(typeId, equipmentId), "".concat(_g.data.item_types[typeId].name.zh_cn, " \u53EF\u88C5\u5907\u4E8E..."), {
      'classname': 'modal-equipable',
      'detach': true
    });
  }
};

modal.bonuses = function () {
  return {
    show: function show(type, id) {
      this.type = undefined;
      this.ship = undefined;
      this.equipment = undefined;

      switch (type.toLowerCase()) {
        case 'ship':
          {
            this.type = 'ship';
            this.ship = _g.data.ships[id];
            break;
          }

        case 'equipment':
        case 'item':
          {
            this.type = 'equipment';
            this.equipment = _g.data.items[id];
            break;
          }
      }

      return _frame.modal.show(this.getFrame(), this.getTitle(), {
        'classname': "modal-bonuses modal-bonuses-".concat(this.type),
        'detach': true
      });
    },
    _cache: {
      ship: {},
      equipment: {}
    },
    getFrame: function getFrame() {
      var _this17 = this;

      var cache = this._cache[this.type];
      var obj = this.ship || this.equipment;
      var id = obj.id;
      if (cache[id]) return cache[id];
      cache[id] = $();
      var bonuses = {
        single: [],
        set: []
      };
      obj.getBonuses().forEach(function (bonus) {
        if (_typeof(bonus.equipments) === 'object') bonuses.set.push(bonus);else bonuses.single.push(bonus);
      });

      if (bonuses.single.length) {
        bonuses.single.forEach(function (bonus) {
          cache[id] = cache[id].add(_this17.renderBonusSingle(bonus));
        });
      }

      if (bonuses.set.length) {
        cache[id] = cache[id].add(this.renderSubTitle('set'));
        bonuses.set.forEach(function (bonus) {
          cache[id] = cache[id].add(_this17.renderBonusSet(bonus));
        });
      }

      if (!bonuses.single.length && !bonuses.set.length) {
        cache[id] = $('<span class="no-bonuses">无</span>');
      }

      return cache[id];
    },
    renderSubTitle: function renderSubTitle(type) {
      return $("<div class=\"bonus bonus-title\">" + (type === 'set' ? '套装加成<small>每一个条件的效果仅计算一次，多个条件的效果可叠加</small>' : '') + "</div>");
    },
    renderStat: function renderStat(bonus) {
      var r = '';

      _g.stats.forEach(function (arr) {
        var _arr2 = _slicedToArray(arr, 1),
            stat = _arr2[0];

        if (isNaN(bonus[stat]) || !bonus[stat]) return false;
        var value = bonus[stat];
        var content = '';

        switch (stat) {
          case 'range':
            {
              if (value <= 1) content = '射程提高一档';
              break;
            }
        }

        var classNames = ['stat'];
        if (typeof value === 'string') content += "+".concat(value, " (\u8BE5\u5C5E\u6027\u4E0D\u53E0\u52A0)");else if (value < 0) {
          content = "".concat(value);
          classNames.push('negative');
        } else content = "+".concat(value);
        r += "<span class=\"".concat(classNames.join(' '), "\" data-stat=\"").concat(stat, "\">").concat(content, "</span>");
      });

      return r;
    },
    renderConditionShips: function renderConditionShips(bonus) {
      var condition = '';

      if (typeof bonus.ship.isType !== 'undefined') {
        var types = Array.isArray(bonus.ship.isType) ? bonus.ship.isType : [bonus.ship.isType];
        condition += "<div class=\"condition\">" + types.map(function (typeId) {
          var type = _g.data.ship_types[parseInt(typeId)];

          return type.name.zh_cn || type.name.ja_jp;
        }).map(function (s) {
          return "<span class=\"item ship-class\">".concat(s, "</span>");
        }).join('') + "</div>";
      }

      if (typeof bonus.ship.isNotType !== 'undefined') {
        var _types2 = Array.isArray(bonus.ship.isNotType) ? bonus.ship.isNotType : [bonus.ship.isNotType];

        condition += "<div class=\"condition\">" + _types2.map(function (typeId) {
          var type = _g.data.ship_types[parseInt(typeId)];

          return type.name.zh_cn || type.name.ja_jp;
        }).map(function (s) {
          return "<span class=\"item ship-exclude\">".concat(s, "</span>");
        }).join('') + "</div>";
      }

      if (typeof bonus.ship.isClass !== 'undefined') {
        var classes = Array.isArray(bonus.ship.isClass) ? bonus.ship.isClass : [bonus.ship.isClass];
        condition += "<div class=\"condition\">" + classes.map(function (classId) {
          var d = _g.data.ship_classes[parseInt(classId)];

          var type = _g.data.ship_types[parseInt(d.ship_type_id)];

          return "".concat(d.name.zh_cn || d.name.ja_jp, "\u7EA7").concat(type.name.zh_cn || type.name.ja_jp);
        }).map(function (s) {
          return "<span class=\"item ship-class\">".concat(s, "</span>");
        }).join('') + "</div>";
      }

      if (typeof bonus.ship.isID !== 'undefined') {
        var ids = Array.isArray(bonus.ship.isID) ? bonus.ship.isID : [bonus.ship.isID];
        condition += "<div class=\"condition\">" + ids.map(function (shipId) {
          var ship = _g.data.ships[parseInt(shipId)];

          return "<a class=\"item ship ship-link\" href=\"".concat(_g.getLink('ships', ship.id), "\" data-shipid=\"").concat(ship.id, "\">") + "<em class=\"avatar\"><img src=\"".concat(ship.getPic(0, _g.imgExt), "\"/></em>") + "".concat(ship._name) + "</a>";
        }).join('') + "</div>";
      }

      if (typeof bonus.ship.isNotID !== 'undefined') {
        var _ids = Array.isArray(bonus.ship.isNotID) ? bonus.ship.isNotID : [bonus.ship.isNotID];

        condition += "<div class=\"condition\">" + _ids.map(function (shipId) {
          var ship = _g.data.ships[parseInt(shipId)];

          return "<span class=\"item ship-exclude\">" + "".concat(ship._name) + "</span>";
        }).join('') + "</div>";
      }

      if (condition) return "<div class=\"ships\">".concat(condition, "</div>");
      return '';
    },
    renderConditionEquipmentOneOf: function renderConditionEquipmentOneOf(equipments) {
      if (!Array.isArray(equipments) && equipments.length) return '';
      return "<div class=\"one-of\">" + "<span class=\"info\">\u4EC5\u9650\uFF1A</span>" + equipments.map(function (condition) {
        var id = condition.isID || condition;
        if (!isNaN(id)) return _tmpl.link_equipment(id, 'span', true);
        return '';
      }).join('') + "</div>" + "<div class=\"one-of-trail\"></div>";
    },
    renderConditionEquipmentOneOfForSet: function renderConditionEquipmentOneOfForSet(bonus) {
      if (!bonus.equipments || !Array.isArray(bonus.equipments.hasOneOf)) return '';
      return this.renderConditionEquipmentOneOf(bonus.equipments.hasOneOf);
    },
    renderBonusSingle: function renderBonusSingle(bonus) {
      var _this18 = this;

      var condition = '';
      var bonusStats = '';
      var bonusInfoText = '';

      switch (this.type) {
        case 'ship':
          {
            condition = "<div class=\"equipments\">" + _tmpl.link_equipment(bonus.equipment, undefined, true) + "</div>";
            break;
          }

        case 'equipment':
          {
            condition = this.renderConditionShips(bonus);
            var conditionKeys = _typeof(bonus.ship) === 'object' ? Object.keys(bonus.ship).filter(function (key) {
              return key.toLowerCase() !== 'canequip';
            }) : [];
            var hasNoCondition = _typeof(bonus.ship) === 'object' && conditionKeys.length === 0;
            var isOnlyNotType = _typeof(bonus.ship) === 'object' && conditionKeys.length === 1 && bonus.ship.isNotType !== 'undefined';

            bonusInfoText = function () {
              if (hasNoCondition) return '装备于任意舰娘时，';
              if (isOnlyNotType) return '';
              return '装备于以上舰娘时，';
            }();

            break;
          }
      }

      if (_typeof(bonus.bonusCount) === 'object') {
        bonusInfoText += "\u8BE5\u88C5\u5907\u6839\u636E\u6570\u91CF\u63D0\u4F9B\u5C5E\u6027\u52A0\u6210 (\u8D85\u989D\u7684\u90E8\u5206\u4E0D\u63D0\u4F9B\u52A0\u6210)</span>";
        Object.keys(bonus.bonusCount).sort(function (a, b) {
          return parseInt(a) - parseInt(b);
        }).forEach(function (count) {
          bonusStats += "<div class=\"has-extra\">" + "<div class=\"extra count\" data-count=\"".concat(count, "\">").concat(count, "</div>") + _this18.renderStat(bonus.bonusCount[count]) + "</div>";
        });
      } else if (_typeof(bonus.bonusImprove) === 'object') {
        bonusInfoText += "\u6BCF\u4E2A\u8BE5\u88C5\u5907\u6839\u636E\u6539\u4FEE\u661F\u7EA7\u63D0\u4F9B\u5C5E\u6027\u52A0\u6210";
        Object.keys(bonus.bonusImprove).sort(function (a, b) {
          return parseInt(a) - parseInt(b);
        }).forEach(function (star) {
          bonusStats += "<div class=\"has-extra\">" + "<div class=\"extra star\" data-star=\"".concat(star, "\">").concat(star, "</div>") + _this18.renderStat(bonus.bonusImprove[star]) + "</div>";
        });
      } else if (_typeof(bonus.bonusArea) === 'object') {
        bonusInfoText += "\u6BCF\u4E2A\u8BE5\u88C5\u5907\u6839\u636E\u6240\u5904\u6D77\u57DF\u63D0\u4F9B\u5C5E\u6027\u52A0\u6210";
        var areas = {
          north: '北方'
        };
        Object.keys(bonus.bonusArea).forEach(function (area) {
          bonusStats += "<div class=\"has-extra\">" + "<div class=\"extra area\">".concat(areas[area.toLowerCase()], "</div>") + _this18.renderStat(bonus.bonusArea[area]) + "</div>";
        });
      } else if (_typeof(bonus.bonus) === 'object') {
        bonusInfoText += "\u6BCF\u4E2A\u8BE5\u88C5\u5907\u63D0\u4F9B\u5C5E\u6027\u52A0\u6210";
        bonusStats = this.renderStat(bonus.bonus);
      }

      return $("<div class=\"bonus bonus-single\">" + condition + "<div class=\"stats\">" + "<span class=\"info\">".concat(bonusInfoText, "</span>") + bonusStats + "</div>" + "</div>");
    },
    renderBonusSet: function renderBonusSet(bonus) {
      var _this19 = this;

      var _this = this;

      var condition = '';
      var bonusStats = '';
      var bonusInfoText = '';
      var noNeedAdditionalList = false;

      switch (this.type) {
        case 'ship':
          {
            break;
          }

        case 'equipment':
          {
            condition = this.renderConditionShips(bonus);
            break;
          }
      }

      if (_typeof(bonus.bonus) === 'object') {
        bonusInfoText = '满足该条件时提供额外属性加成';
        bonusStats = this.renderStat(bonus.bonus);
      }

      var stars = bonus.listStar || [];
      console.log(bonus);
      return $("<div class=\"bonus bonus-set\">" + condition + "<div class=\"equipments\">" + bonus.list.map(function (item, index) {
        if (!isNaN(item)) return _tmpl.link_equipment(item, _this19.type === 'equipment' && item == _this19.equipment.id ? 'span' : undefined, true, stars[index] || undefined);

        if (Array.isArray(item)) {
          return item.map(function (item) {
            return _tmpl.link_equipment(item, _this19.type === 'equipment' && item == _this19.equipment.id ? 'span' : undefined, true);
          }).join(' / ');
        }

        if (_typeof(item) === 'object' && item.id) {
          return _tmpl.link_equipment(item.id, _this19.type === 'equipment' && item.id == _this19.equipment.id ? 'span' : undefined, true, item.star);
        }

        if (typeof item === 'string') {
          var iconId, name;
          var type = item;
          var ids = [];
          var matches = /([a-zA-Z0-9]+)\[([0-9,]+)\]/.exec(item);

          if (Array.isArray(matches) && matches.length > 2) {
            type = matches[1];
            ids = matches[2].split(',');
          }

          switch (type) {
            case 'SurfaceRadar':
              {
                iconId = 11;
                name = '对水面雷达/电探';
              }

            case 'AARadar':
              {
                iconId = 11;
                name = '对空雷达/电探';
              }

            default:
              {
                var typeId = KC.formula.equipmentType[item];

                if (typeId) {
                  var _type = _g.data.item_types[typeId];
                  iconId = _type.icon;
                  name = _type.name.zh_cn;
                }
              }
          }

          if (ids.length) noNeedAdditionalList = true;
          if (iconId && name) return "<span class=\"link_equipment\">" + "<i style=\"background-image:url(assets/images/itemicon/".concat(iconId, ".png)\"></i>") + "<span>".concat(name, "</span>") + "</span>" + (ids.length > 0 ? _this.renderConditionEquipmentOneOf(ids) : '');
        }
      }).map(function (item) {
        return "<div class=\"equipment\">".concat(item, "</div>");
      }).join('') + (noNeedAdditionalList ? '' : this.renderConditionEquipmentOneOfForSet(bonus)) + "</div>" + "<div class=\"stats\">" + "<span class=\"info\">".concat(bonusInfoText, "</span>") + bonusStats + "</div>" + "</div>");
    },
    getTitle: function getTitle() {
      switch (this.type) {
        case 'ship':
          {
            return $("<strong>".concat(this.ship._name, "</strong>") + "<span>\u88C5\u5907\u5C5E\u6027\u52A0\u6210</span>" + "<img src=\"".concat(this.ship.getPic(10, _g.imgExt), "\" />"));
          }

        case 'equipment':
          {
            return $("<strong>".concat(this.equipment._name, "</strong>") + "<span>\u5C5E\u6027\u52A0\u6210</span>" + "<i style=\"background-image:url(assets/images/itemicon/".concat(this.equipment.getIconId(), ".png)\"></i>"));
          }
      }
    }
  };
}();

_p.el.tablelist = {
  init_el: function init_el(el) {
    if (el.data('tablelist')) return true;
    if (el.hasClass('ships')) el.data({
      'tablelist': new TablelistShips(el)
    });else if (el.hasClass('tablelist-equipments')) el.data({
      'tablelist': new TablelistEquipments(el)
    });else if (el.hasClass('fleets')) el.data({
      'tablelist': new TablelistFleets(el)
    });else if (el.hasClass('entities')) el.data({
      'tablelist': new TablelistEntities(el)
    });
  },
  init: function init(tar, els) {
    tar = tar || $body;
    els = els || tar.find('.tablelist');
    els.each(function () {
      _p.el.tablelist.init_el($(this));
    });
  }
};

var Tablelist = function () {
  function Tablelist(container, options) {
    _classCallCheck(this, Tablelist);

    this.dom = {
      'container': container
    };
    options = options || {};
    this._index = Tablelist.index++;
    this.trIndex = 0;
    this.flexgrid_empty_count = options.flexgrid_empty_count || 8;
    this.sort_data_by_stat = options.sort_data_by_stat || {};
    this.sort_default_order_by_stat = options.sort_default_order_by_stat || {};
    container.on('mouseenter.hovercolumn', '.tablelist-body dd', this.hovercolumn_delegate.bind(this)).on('mouseleave.hovercolumn', '.tablelist-body dd', this.hovercolumn_delegate_leave.bind(this));
  }

  _createClass(Tablelist, [{
    key: "append_option",
    value: function append_option(type, name, label, value, suffix, options) {
      options = options || {};

      function gen_input() {
        var input,
            option_empty,
            o_el,
            id = Tablelist.genId();

        switch (type) {
          case 'text':
          case 'number':
          case 'hidden':
            input = $('<input type="' + type + '" name="' + name + '" id="' + id + '" />').val(value);
            break;

          case 'select':
            input = $('<select name="' + name + '" id="' + id + '" />');
            option_empty = $('<option value=""/>').html('').appendTo(input);
            value.forEach(function (currentValue, i) {
              if (_typeof(currentValue) == 'object') {
                o_el = $('<option value="' + (typeof currentValue.val == 'undefined' ? currentValue['value'] : currentValue.val) + '"/>').html(currentValue['title'] || currentValue['name']).appendTo(input);
              } else {
                o_el = $('<option value="' + currentValue + '"/>').html(currentValue).appendTo(input);
              }

              if (typeof options['default'] != 'undefined' && o_el.val() == options['default']) {
                o_el.prop('selected', true);
              }
            });

            if (!value || !value.length) {
              option_empty.remove();
              $('<option value=""/>').html('...').appendTo(input);
            }

            if (options['new']) {
              $('<option value=""/>').html('==========').insertAfter(option_empty);
              $('<option value="___new___"/>').html('+ 新建').insertAfter(option_empty);
              input.on('change.___new___', function () {
                var select = $(this);

                if (select.val() == '___new___') {
                  select.val('');
                  options['new'](input);
                }
              });
            }

            break;

          case 'checkbox':
            input = $('<input type="' + type + '" name="' + name + '" id="' + id + '" />').prop('checked', value);
            break;

          case 'radio':
            input = $();
            value.forEach(function (currentValue, i) {
              var title,
                  val,
                  checked = false;

              if (value[i].push) {
                val = value[i][0];
                title = value[i][1];
              } else {
                val = value[i].val || value[i].value;
                title = value[i].title || value[i].name;
              }

              if (options.radio_default && options.radio_default == val) checked = true;
              input = input.add($('<input type="radio" name="' + name + '" id="' + id + '-' + val + '" ischecked="' + checked + '" />').val(val).prop('checked', checked || !checked && i == 0));
              input = input.add($('<label for="' + id + '-' + val + '"/>').html(title));
            });
            break;
        }

        if (options.required) {
          input.prop('required', true);
        }

        if (options.onchange) {
          input.on('change.___onchange___', function (e) {
            options.onchange(e, $(this));
          });
          if (options['default']) input.trigger('change');
        }

        if (!name) input.attr('name', null);
        return input;
      }

      var line = $('<p/>').addClass(name).appendTo(this.dom.filters),
          input = gen_input().appendTo(line),
          id = input.attr('id') || Tablelist.genId();
      label = label ? $('<label' + (type == 'checkbox' ? ' class="checkbox"' : '') + ' for="' + id + '"/>').html(label).appendTo(line) : null;
      if (type == 'checkbox' && label) label.insertAfter(input);
      if (suffix) $('<label for="' + id + '"/>').html(suffix).appendTo(line);
      return line;
    }
  }, {
    key: "thead_redraw",
    value: function thead_redraw(timeout_duration) {}
  }, {
    key: "sort_column",
    value: function sort_column(nth, is_ascending, rows) {
      if (!rows) {
        var tbody = this.dom.tbody;
        if (!tbody || !tbody.length) tbody = this.dom.table.children('.tablelist-body');
        rows = tbody.children('dl:visible:not([data-donotcompare])');
      }

      nth = nth || 1;
      this._tmp_values = [];
      this._tmp_value_map_cell = {};
      rows.children('dd:nth-of-type(' + nth + ')').each(function (index, element) {
        var cell = $(element),
            val = cell.attr('value');
        val = parseFloat(val);
        if ($.inArray(val, this._tmp_values) < 0) this._tmp_values.push(val);
        if (!this._tmp_value_map_cell[val]) this._tmp_value_map_cell[val] = $();
        this._tmp_value_map_cell[val] = this._tmp_value_map_cell[val].add(cell);
      }.bind(this));

      this._tmp_values.sort(function (a, b) {
        if (is_ascending) return a - b;else return b - a;
      });

      var return_array = [];

      this._tmp_values.forEach(function (currentValue) {
        return_array.push(this._tmp_value_map_cell[currentValue]);
      }, this);

      delete this._tmp_values;
      delete this._tmp_value_map_cell;
      return return_array;
    }
  }, {
    key: "mark_high",
    value: function mark_high(cacheSortData) {
      var tbody = this.dom.tbody;
      if (!tbody || !tbody.length) tbody = this.dom.table.children('.tablelist-body');
      var rows = tbody.children('dl:visible:not([data-donotcompare])');
      rows.children('dd[value]').removeClass('sort-first sort-second');
      rows.eq(0).children('dd[value]').each(function (index, element) {
        var is_ascending = false,
            $this = $(element),
            stat = $this.attr('stat'),
            noMark = stat.match(/\b(speed|range|extra_illust)\b/);

        if (typeof this.sort_default_order_by_stat[stat] == 'undefined') {
          if (stat.match(/\b(consum_fuel|consum_ammo)\b/)) is_ascending = true;
          this.sort_default_order_by_stat[stat] = is_ascending ? 'asc' : 'desc';
        } else {
          is_ascending = this.sort_default_order_by_stat[stat] == 'asc' ? true : false;
        }

        var sort = this.sort_column(index + 1, is_ascending, rows),
            max = Math.min(6, Math.ceil(rows.length / 2) + 1);

        if (!noMark && sort.length > 1 && sort[0].length < max) {
          sort[0].addClass('sort-first');
          if (sort.length > 2 && sort[1].length < max) sort[1].addClass('sort-second');
        }

        if (cacheSortData) this.sort_data_by_stat[stat] = sort;else delete this.sort_data_by_stat[stat];
      }.bind(this));
      return rows;
    }
  }, {
    key: "sort_table_from_theadcell",
    value: function sort_table_from_theadcell(cell) {
      if (!cell) return;
      var stat = cell.attr('stat'),
          sortData = this.sort_data_by_stat[stat];
      if (!stat || !sortData) return false;

      if (stat != this.lastSortedStat) {
        if (this.lastSortedHeader) this.lastSortedHeader.removeClass('sorting desc asc');
        cell.addClass('sorting');
      }

      var order = stat == this.lastSortedStat && this.lastSortedOrder == 'obverse' ? 'reverse' : 'obverse',
          i = order == 'reverse' ? sortData.length - 1 : 0;

      if (this.sort_default_order_by_stat[stat]) {
        var reverse = this.sort_default_order_by_stat[stat] == 'asc' ? 'desc' : 'asc';

        if (order == 'obverse') {
          cell.removeClass(reverse).addClass(this.sort_default_order_by_stat[stat]);
        } else {
          cell.removeClass(this.sort_default_order_by_stat[stat]).addClass(reverse);
        }
      }

      this.sortedRow = $();

      while (sortData[i]) {
        this._tmpDOM = sortData[i].parent();
        this.sortedRow = this.sortedRow.add(this._tmpDOM);

        this._tmpDOM.appendTo(this.dom.tbody);

        i = order == 'reverse' ? i - 1 : i + 1;
      }

      this.dom.btn_compare_sort.removeClass('disabled').html('取消排序');
      this.lastSortedStat = stat;
      this.lastSortedOrder = order;
      this.lastSortedHeader = cell;
      delete this._tmpDOM;
    }
  }, {
    key: "sort_table_restore",
    value: function sort_table_restore() {
      if (!this.sortedRow) return true;
      var parent,
          arr = [];
      this.sortedRow.each(function (index, element) {
        var $this = $(element),
            trIndex = parseInt($this.attr('trindex'));
        parent = parent || $this.parent();
        arr.push({
          'index': trIndex,
          'el': $this,
          'prev': parent.children('[trindex="' + (trIndex - 1) + '"]')
        });
      });
      arr.sort(function (a, b) {
        return a['index'] - b['index'];
      });
      arr.forEach(function (currentValue) {
        currentValue.el.insertAfter(currentValue.prev);
      });
      this.dom.btn_compare_sort.addClass('disabled').html('点击表格标题可排序');
      this.lastSortedHeader.removeClass('sorting desc asc');
      delete this.sortedRow;
      delete this.lastSortedStat;
      delete this.lastSortedOrder;
      delete this.lastSortedHeader;
      return true;
    }
  }, {
    key: "hovercolumn_delegate",
    value: function hovercolumn_delegate(e) {
      if (!$body_preventMouseover && e && e.originalEvent.path && this.dom.tbody) {
        var index = e.currentTarget.getAttribute('data-index');

        if (!index) {
          var el = $(e.currentTarget);
          index = el.index();
          el.attr('data-index', index);
        } else {
          index = parseInt(index);
        }

        this.dom.tbody.find('dl:visible dd:nth-child(' + (index + 1) + ')').addClass('is-hover');
      }
    }
  }, {
    key: "hovercolumn_delegate_leave",
    value: function hovercolumn_delegate_leave(e) {
      if (!$body_preventMouseover && e && e.originalEvent.path && this.dom.tbody) {
        this.dom.tbody.find('dd.is-hover').removeClass('is-hover');
        _p.el.tablelist.hovercolumn_mouseleave_delay = null;
      }
    }
  }]);

  return Tablelist;
}();

Tablelist.index = 0;

Tablelist.genId = function (text) {
  var hash = 0,
      i,
      chr,
      len;
  text = text || new Date().toISOString() + _g.randInt(10000);
  if (text.length == 0) return hash;

  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }

  return 'tablelist' + hash;
};

var TablelistShips = function (_Tablelist) {
  _inherits(TablelistShips, _Tablelist);

  var _super4 = _createSuper(TablelistShips);

  function TablelistShips(container, options) {
    var _this20;

    _classCallCheck(this, TablelistShips);

    _this20 = _super4.call(this, container, options);
    _this20.columns = ['  ', ['火力', 'fire'], ['雷装', 'torpedo'], ['夜战', 'nightpower'], ['对空', 'aa'], ['对潜', 'asw'], ['耐久', 'hp'], ['装甲', 'armor'], ['回避', 'evasion'], ['搭载', 'carry'], ['航速', 'speed'], ['射程', 'range'], ['索敌', 'los'], ['运', 'luck'], ['油耗', 'consum_fuel'], ['弹耗', 'consum_ammo'], ['多立绘', 'extra_illust']];
    _this20.header_checkbox = [];
    _this20.mode_selection_filters = $();
    _this20.rows = $();
    _this20.rowsById = {};
    _this20.rowsByHeader = {};
    _this20.functionsOnEnter = [];
    _this20.functionsOnExit = [];

    _frame.app_main.loading.push('tablelist_' + _this20._index);

    _frame.app_main.is_loaded = false;
    _this20.initProgressMax = 0;
    _this20.initProgressCur = 0;

    _this20.dom.container.on({
      'initprogress': function initprogress(e, cur, max) {
        this.initProgressCur = cur || this.initProgressCur;
        this.initProgressMax = max || this.initProgressMax;
      }
    });

    if (container.children('.tablelist-container').length) {
      _this20.init_parse();
    }

    return _this20;
  }

  _createClass(TablelistShips, [{
    key: "compare_btn_show",
    value: function compare_btn_show(is_checked) {
      if (!is_checked && this.rows.filter('[compare="true"]').length || is_checked) {
        this.dom.msg_container.attr('data-msgs', 'comparestart');
      } else {
        this.dom.msg_container.removeAttr('data-msgs');
      }
    }
  }, {
    key: "compare_start",
    value: function compare_start() {
      this.dom.msg_container.removeAttr('data-msgs');
      this.last_viewtype = this.dom.filter_container.attr('viewtype');

      _config.set('shiplist-viewtype', this.last_viewtype);

      this.last_scrollTop = this.dom.tbody.scrollTop();
      this.dom.filter_container.attr('viewtype', 'compare');
      this.dom.tbody.scrollTop(0);
      this.dom.table.addClass('sortable');
      this.mark_high(true);
      this.thead_redraw(500);
    }
  }, {
    key: "compare_off",
    value: function compare_off() {
      this.dom.filter_container.attr('viewtype', this.last_viewtype);
      this.sort_table_restore();
      this.mark_high();
      this.thead_redraw(500);
      this.dom.tbody.scrollTop(this.last_scrollTop);
      this.dom.table.removeClass('sortable');
      delete this.last_viewtype;
      delete this.last_scrollTop;
    }
  }, {
    key: "compare_end",
    value: function compare_end() {
      this.rows.filter('[compare="true"]').each(function (i, el) {
        this.check(el, false);
      }.bind(this));
      this.dom.msg_container.removeAttr('data-msgs');
      this.compare_off();
    }
  }, {
    key: "compare_continue",
    value: function compare_continue() {
      this.dom.msg_container.attr('data-msgs', 'comparestart');
      this.compare_off();
    }
  }, {
    key: "contextmenu_show",
    value: function contextmenu_show($el, shipId, is_rightclick) {
      if (this.dom.filter_container.attr('viewtype') == 'compare' || $el.attr('data-donotcompare') == 'true') return false;

      if (!TablelistShips.contextmenu) {
        var createMenu = function () {
          var items = [$('<menuitem/>').html('选择').on({
            'click': function click(e) {
              if (_frame.app_main.is_mode_selection()) _frame.app_main.mode_selection_callback(TablelistShips.contextmenu._curid);
            },
            'show': function show() {
              if (_frame.app_main.is_mode_selection()) $(this).show();else $(this).hide();
            }
          }), $('<menuitem/>').html('查看资料').on({
            'click': function click(e) {
              TablelistShips.contextmenu._curel.trigger('click', [true]);
            }
          }), $('<menuitem/>').html('将该舰娘加入对比').on({
            'click': function (e) {
              this.check(this.rowsById[TablelistShips.contextmenu._curid]);
            }.bind(this),
            'show': function (e) {
              if (!TablelistShips.contextmenu._curid) return false;
              if (_g.data.ship_types[_g['data']['ships'][TablelistShips.contextmenu._curid]['type']]['donotcompare']) $(e.target).hide();else $(e.target).show();
              if (this.rowsById[TablelistShips.contextmenu._curid].attr('compare') === 'true') $(e.target).html('取消对比');else $(e.target).html('将该舰娘加入对比');
            }.bind(this)
          }), $('<div/>').on('show', function (e) {
            var $div = $(e.target).empty();

            if (TablelistShips.contextmenu._curid) {
              var series = _g['data']['ships'][TablelistShips.contextmenu._curid].getSeriesData() || [];
              series.forEach(function (currentValue, i) {
                if (!i) $div.append($('<hr/>'));
                var checkbox = null;

                try {
                  checkbox = this.rowsById[currentValue['id']];
                } catch (e) {}

                $div.append($('<div class="item"/>').html('<span>' + _g['data']['ships'][currentValue['id']].getName(true) + '</span>').append($('<div class="group"/>').append(function () {
                  var els = $();

                  if (_frame.app_main.is_mode_selection()) {
                    els = els.add($('<menuitem/>').html('选择').on({
                      'click': function click() {
                        if (_frame.app_main.is_mode_selection()) _frame.app_main.mode_selection_callback(currentValue['id']);
                      }
                    }));
                  }

                  return els;
                }).append($('<menuitem data-infos="[[SHIP::' + currentValue['id'] + ']]"/>').html('查看资料')).append($('<menuitem/>').html(checkbox && checkbox.attr('compare') === 'true' ? '取消对比' : '加入对比').on({
                  'click': function (e) {
                    if (checkbox) {
                      this.check(checkbox);
                    }
                  }.bind(this)
                }))));
              }, this);
            }
          }.bind(this))];

          if (TablelistShips.contextmenu) {
            if (TablelistShips.contextmenu.showing) {
              TablelistShips.contextmenu.hide(function () {
                TablelistShips.contextmenu.dom.body.empty();
                items.forEach(function (item) {
                  item.appendTo(TablelistShips.contextmenu.dom.body);
                });
                if (TablelistShips.contextmenu._is_rightclick) TablelistShips.contextmenu.show(TablelistShips.contextmenu._is_rightclick.x, TablelistShips.contextmenu._is_rightclick.y);else TablelistShips.contextmenu.show(TablelistShips.contextmenu._curel);
              });
            } else {
              TablelistShips.contextmenu.dom.body.empty();
              items.forEach(function (item) {
                item.appendTo(TablelistShips.contextmenu.dom.body);
              });
            }
          } else {
            TablelistShips.contextmenu = new _menu({
              'className': 'contextmenu-ship',
              'items': items
            });
          }

          return TablelistShips.contextmenu;
        }.bind(this);

        if (!this.is_init) {
          TablelistShips.contextmenu = new _menu({
            'className': 'contextmenu-ship',
            'items': [$('<menuitem/>').html('数据处理中，请稍候……　　')]
          });
          this.dom.container.on({
            'initprogress': function initprogress(e, cur, max) {
              if (TablelistShips.contextmenu.showing) {
                TablelistShips.contextmenu.dom.body.empty().append($('<menuitem/>').html("\u6570\u636E\u5904\u7406\u4E2D\uFF0C\u8BF7\u7A0D\u5019 (".concat((cur / max * 100).toFixed(1), "%)")));
              }
            },
            'initdone': function initdone() {
              createMenu();
            }
          });
        } else {
          createMenu();
        }
      }

      TablelistShips.contextmenu._curid = shipId || $el.data('shipid');
      TablelistShips.contextmenu._curel = $el;

      if (is_rightclick) {
        TablelistShips.contextmenu._is_rightclick = {
          'x': is_rightclick.clientX,
          'y': is_rightclick.clientY
        };
        TablelistShips.contextmenu.show(is_rightclick.clientX, is_rightclick.clientY);
      } else {
        TablelistShips.contextmenu._is_rightclick = false;
        TablelistShips.contextmenu.show($el);
      }
    }
  }, {
    key: "init_parse",
    value: function init_parse() {
      var _this21 = this;

      {
        this.dom.filter_container = this.dom.container.children('.options');
        this.dom.filters = this.dom.filter_container.children('.filters');
        this.dom.exit_compare = this.dom.filter_container.children('.exit_compare');
      }
      {
        this.dom.exit_compare.children('button[icon="arrow-set2-left"]').on('click', function () {
          this.compare_end();
        }.bind(this));
      }
      {
        this.dom.exit_compare.children('button[icon="checkbox-checked"]').on('click', function () {
          this.compare_continue();
        }.bind(this));
      }
      {
        this.dom.btn_compare_sort = this.dom.exit_compare.children('button[icon="sort-amount-desc"]').on('click', function () {
          if (!this.dom.btn_compare_sort.hasClass('disabled')) this.sort_table_restore();
        }.bind(this));
      }
      {
        this.dom.search = $('<p class="search"/>').prependTo(this.dom.filters).append(this.dom.searchInput = $('<input type="search" placeholder="搜索舰娘..."/>').on({
          'input': function (e) {
            clearTimeout(this.searchDelay);
            this.searchDelay = setTimeout(function () {
              this.search(e.target.value);
            }.bind(this), 100);
          }.bind(this),
          'focus': function () {
            this.dom.search.addClass('on');
          }.bind(this),
          'blur': function (e, force) {
            if (force || !this.dom.container.hasClass('mod-search')) this.dom.search.removeClass('on');
          }.bind(this)
        }));
      }
      {
        this.dom.btn_hide_premodel = this.dom.filters.find('[name="hide-premodel"]').prop('checked', _config.get('shiplist-filter-hide-premodel') === 'false' ? null : true).on('change', function (e) {
          _config.set('shiplist-filter-hide-premodel', this.dom.btn_hide_premodel.prop('checked'));

          this.dom.filter_container.attr('filter-hide-premodel', this.dom.btn_hide_premodel.prop('checked'));
          this.thead_redraw();
        }.bind(this));
      }
      {
        this.dom.filters.find('[name="viewtype"]').each(function (index, $el) {
          $el = $($el);
          var viewtype = _config.get('shiplist-viewtype') || 'card';
          if ($el.val() == viewtype) $el.prop('checked', true);
          $el.on('change', function (e) {
            if ($el.is(':checked')) {
              _config.set('shiplist-viewtype', $el.val());

              this.dom.filter_container.attr('viewtype', $el.val());
              this.thead_redraw();
            }
          }.bind(this));
        }.bind(this));
        this.dom.filters.find('input').trigger('change');
      }
      {
        this.dom.table = this.dom.container.children('.tablelist-container');
        this.dom.thead = this.dom.table.children('.tablelist-header').on('click', '[stat]', function (e) {
          this.sort_table_from_theadcell($(e.currentTarget));
        }.bind(this));
        this.dom.tbody = this.dom.table.children('.tablelist-body').on('contextmenu.contextmenu_ship', '[data-shipid]', function (e) {
          this.contextmenu_show($(e.currentTarget), null, e);
          e.preventDefault();
        }.bind(this)).on('click', '[data-shipid]', function (e, forceInfos) {
          if (e.target.tagName.toLowerCase() == 'label') {
            this.check(e.currentTarget);
            e.stopPropagation();
          } else if (e.target.tagName.toLowerCase() == 'em') {
            this.contextmenu_show($(e.target), e.currentTarget.getAttribute('data-shipid'));
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
          } else if (!forceInfos && _frame.app_main.is_mode_selection()) {
            e.preventDefault();
            e.stopImmediatePropagation();
            e.stopPropagation();
            if (!e.currentTarget.getAttribute('data-donotcompare')) _frame.app_main.mode_selection_callback(e.currentTarget.getAttribute('data-shipid'));
          }

          this.dom.searchInput.trigger('blur', [true]);
        }.bind(this));
      }
      {
        this.dom.msg_container = this.dom.container.children('.msgs');
        if (_config.get('hide-compareinfos')) this.dom.msg_container.removeAttr('data-msgs');else this.dom.msg_container.attr('data-msgs', 'compareinfos');
      }
      {
        this.parse_all_items();
      }
      var compareinfos = this.dom.msg_container.children('.compareinfos');
      compareinfos.children('button').on('click', function () {
        this.dom.msg_container.removeAttr('data-msgs');

        _config.set('hide-compareinfos', true);
      }.bind(this));
      this.dom.msg_container.children('.comparestart').on('click', function () {
        this.compare_start();
      }.bind(this));
      {
        var event;

        if (_g.getCurrentEvent().some(function (e) {
          if (e.code === 'leyteB') {
            event = e;
            return true;
          }

          return false;
        })) {
          var filters = [[false, '全部'], ['kurita', '栗田'], ['ozawa', '小泽'], ['nishimura', '西村'], ['shima', '志摩'], ['ta_go', '多号作战'], ['off', '无所属']];
          var els = {};

          var filter = function filter(_filter) {
            for (var key in els) {
              els[key].removeClass('on');
            }

            if (_filter) {
              els[_filter].addClass('on');

              _this21.dom.container.attr('data-leyte-fleet', _filter);
            } else {
              els._.addClass('on');

              _this21.dom.container.removeAttr('data-leyte-fleet');
            }
          };

          var container = $('<div class="event-container"/>').insertAfter(this.dom.filter_container);
          filters.forEach(function (o) {
            var type = o[0];
            var name = o[1];
            els[type || '_'] = $('<span/>', {
              "class": 'filter',
              'data-leyte-fleet': type || undefined,
              html: name
            }).on('click', function () {
              return filter(type);
            }).appendTo(container);
          });
          console.log(els);
          filter(false);
          {
            var reset = function reset() {
              filter(false);
            };

            reset();
          }
        }

        _g.getCurrentEvent().filter(function (event) {
          return Array.isArray(event.historicalFleets);
        }).forEach(function (event) {
          var historicalFleets = event.historicalFleets,
              code = event.code;
          var filters = [[false, '全部']];
          historicalFleets.forEach(function (fleet, index) {
            filters.push(['' + index, fleet]);
          });
          filters.push(['off', '无所属']);
          var attrName = "data-".concat(code, "-fleet");
          var els = {};

          var filter = function filter(_filter2) {
            for (var key in els) {
              els[key].removeClass('on');
            }

            if (_filter2) {
              els[_filter2].addClass('on');

              _this21.dom.container.attr(attrName, _filter2);
            } else {
              els._.addClass('on');

              _this21.dom.container.removeAttr(attrName);
            }
          };

          var container = $('<div class="event-container"/>').insertAfter(_this21.dom.filter_container).html("<strong>".concat(event.title.zh_cn, "</strong>"));
          filters.forEach(function (o) {
            var _$;

            var type = o[0];
            var name = o[1];
            els[type || '_'] = $('<span/>', (_$ = {
              "class": 'filter'
            }, _defineProperty(_$, attrName, type || undefined), _defineProperty(_$, "html", name), _$)).on('click', function () {
              return filter(type);
            }).appendTo(container);
          });
          console.log(els);
          filter(false);
          {
            var _reset = function _reset() {
              filter(false);
            };

            _reset();
          }
        });
      }
    }
  }, {
    key: "parse_all_items",
    value: function parse_all_items() {
      var deferred = Q.defer(),
          chain = Q.fcall(function () {}),
          trs = this.dom.tbody.children('h4, dl');
      trs.each(function (index, tr) {
        chain = chain.then(function () {
          tr = $(tr);
          tr.attr('trindex', index);
          var deferred = Q.defer();
          var ship_id = tr.attr('data-shipid');
          var header_index = tr.attr('data-header');
          if (!this.rowsByHeader[header_index]) this.rowsByHeader[header_index] = $();

          if (tr[0].tagName == 'H4') {
            var _checkbox = tr.find('input[type="checkbox"]').on({
              'change': function () {
                this.rowsByHeader[header_index].filter(':visible').each(function (i, el) {
                  this.check(el, _checkbox.prop('checked'), true);
                }.bind(this));
              }.bind(this),
              'docheck': function () {
                var trs = this.rowsByHeader[header_index].filter(':visible'),
                    checked = trs.filter('[compare="true"]');

                if (!checked.length) {
                  _checkbox.prop({
                    'checked': false,
                    'indeterminate': false
                  });
                } else if (checked.length < trs.length) {
                  _checkbox.prop({
                    'checked': false,
                    'indeterminate': true
                  });
                } else {
                  _checkbox.prop({
                    'checked': true,
                    'indeterminate': false
                  });
                }
              }.bind(this)
            });

            this.header_checkbox[header_index] = _checkbox;
            this.mode_selection_filters.add($('<input/>', {
              'value': header_index,
              'type': 'checkbox',
              'class': 'shiptype',
              'id': 'shiptype-' + header_index
            }).prop('checked', !header_index).prependTo(this.dom.container));
            $('<label/>', {
              'for': 'shiptype-' + header_index,
              'class': 'shiptype'
            }).prependTo(tr);
            tr.attr('inited', true);
          } else if (ship_id) {
            this.rowsByHeader[header_index] = this.rowsByHeader[header_index].add(tr);
            this.rowsById[ship_id] = tr;
            this.rows = this.rows.add(tr);
          }

          this.dom.container.trigger('initprogress', [index + 1, trs.length]);
          setTimeout(deferred.resolve, 0);
          return deferred.promise;
        }.bind(this));
      }.bind(this));
      chain = chain.then(function () {
        this.mark_high();
        this.thead_redraw();
        this.is_init = true;
        this.dom.container.trigger('initdone');
        deferred.resolve();
      }.bind(this))["catch"](function (err) {
        _g.log(err);
      });

      _frame.app_main.loaded('tablelist_' + this._index, true);

      return deferred.promise;
    }
  }, {
    key: "check",
    value: function check(row, checked, not_trigger_check) {
      if (row.length) row = row[0];
      if (typeof checked == 'undefined' || checked === null) checked = !(row.getAttribute('compare') == 'true');
      if (checked) row.setAttribute('compare', 'true');else row.removeAttribute('compare');
      this.compare_btn_show(checked);
      if (!not_trigger_check) this.header_checkbox[parseInt(row.getAttribute('data-header'))].trigger('docheck');
    }
  }, {
    key: "search",
    value: function search(query) {
      if (!this.dom.style) this.dom.style = $('<style/>').appendTo(this.dom.container);

      if (!query) {
        this.dom.container.removeClass('mod-search');
        this.dom.filter_container.attr('filter-hide-premodel', this.dom.btn_hide_premodel.prop('checked'));
        this.dom.style.empty();
        return query;
      }

      query = _g.search(query, 'ships');

      if (!query.length) {
        return query;
      }

      this.dom.container.addClass('mod-search');
      this.dom.filter_container.attr('filter-hide-premodel', false);
      var r = '.tablelist.ships .tablelist-body dl:not(:empty)';
      query.forEach(function (ship) {
        r += ":not([data-shipid=\"".concat(ship.id, "\"])");
      });
      r += "{display:none!important}";
      this.dom.style.html(r);
      return query;
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      console.log('tablelist-ship on-enter');
      this.functionsOnEnter.forEach(function (func) {
        if (typeof func === 'function') func();
      });
    }
  }, {
    key: "onExit",
    value: function onExit() {
      console.log('tablelist-ship on-exit');
      this.functionsOnExit.forEach(function (func) {
        if (typeof func === 'function') func();
      });
    }
  }]);

  return TablelistShips;
}(Tablelist);

var TablelistEquipments = function (_Tablelist2) {
  _inherits(TablelistEquipments, _Tablelist2);

  var _super5 = _createSuper(TablelistEquipments);

  function TablelistEquipments(container, options) {
    var _this22;

    _classCallCheck(this, TablelistEquipments);

    _this22 = _super5.call(this, container, options);
    _this22.columns = ['  ', ['火力', 'fire'], ['雷装', 'torpedo'], ['对空', 'aa'], ['对潜', 'asw'], ['爆装', 'bomb'], ['命中', 'hit'], ['装甲', 'armor'], ['回避', 'evasion'], ['索敌', 'los'], ['射程', 'range'], ['可改修', 'improvable']];
    _this22.equipmentsHasBonus = {};

    _frame.app_main.loading.push('tablelist_' + _this22._index);

    _frame.app_main.is_loaded = false;

    if (container.children('.tablelist-container').length) {
      _this22.init_parse();
    }

    return _this22;
  }

  _createClass(TablelistEquipments, [{
    key: "apply_types",
    value: function apply_types() {
      var _this23 = this;

      this.dom.filter_types.removeAttr('class');

      if (TablelistEquipments.types.length) {
        this.dom.filter_types.addClass('type' + TablelistEquipments.types.join(' type'));
        if (this.generated) this.apply_types_check();
      }

      this.dom.tbody.children('.extra').removeClass('extra').removeAttr('style');

      if (TablelistEquipments.shipId === 'FIELD') {
        this.dom.container.addClass('mod-field');
      } else {
        this.dom.container.removeClass('mod-field');
      }

      if (TablelistEquipments.extraEquipments) {
        TablelistEquipments.extraEquipments.forEach(function (id) {
          _this23.dom.tbody.children('[data-equipmentid="' + id + '"]').css({
            display: 'flex',
            opacity: 1
          }).addClass('extra');
        });
      }

      if (!TablelistEquipments.shipId || isNaN(TablelistEquipments.shipId)) {
        for (var id in this.equipmentsHasBonus) {
          this.equipmentsHasBonus[id].removeClass('disabled');
          this.equipmentsHasBonus[id].removeClass('is-negative');
        }
      } else {
        (function () {
          var count = {};

          if (Array.isArray(TablelistEquipments.currentSelected)) {
            TablelistEquipments.currentSelected.forEach(function (_id) {
              var id = parseInt(_id);
              if (typeof count[id] === 'undefined') count[id] = 0;
              count[id]++;
            });
          }

          var _loop4 = function _loop4(_id3) {
            var equipment = _g.data.items[_id3];
            var ship = _g.data.ships[TablelistEquipments.shipId];
            var filtered = equipment.getBonuses().filter(function (bonus) {
              if (!KC.check.ship(ship, bonus.ship)) return false;

              if (bonus.equipment && _typeof(bonus.bonusCount) === 'object') {
                var max = parseInt(Object.keys(bonus.bonusCount).sort(function (a, b) {
                  return parseInt(b) - parseInt(a);
                })[0]);
                var current = count[bonus.equipment] || 0;
                if (current >= max) return false;
              }

              return true;
            });

            if (filtered.length) {
              var mainAttribute = _g.data.item_types[equipment.type].main_attribute;
              var isNegative = filtered.every(function () {
                var o = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var bonus = o.bonus || {};
                var mainStat = bonus[mainAttribute] || 0;
                return mainStat < 0;
              });

              _this23.equipmentsHasBonus[_id3].removeClass('disabled');

              if (isNegative) {
                _this23.equipmentsHasBonus[_id3].addClass('is-negative');
              } else {
                _this23.equipmentsHasBonus[_id3].removeClass('is-negative');
              }
            } else {
              _this23.equipmentsHasBonus[_id3].addClass('disabled');
            }
          };

          for (var _id3 in _this23.equipmentsHasBonus) {
            _loop4(_id3);
          }
        })();
      }
    }
  }, {
    key: "apply_types_check",
    value: function apply_types_check() {
      var _this24 = this;

      if (TablelistEquipments.shipIdLast && TablelistEquipments.shipIdLast == TablelistEquipments.shipId) {
        if (this.dom && this.dom.container && this.dom.container.length) {
          this.dom.container.find('[scrollbody]').each(function (index, el) {
            var scrollTop = el.getAttribute('scrollbody');
            if (!isNaN(scrollTop)) el.scrollTop = scrollTop;
          });
        }

        return;
      }

      TablelistEquipments.shipIdLast = TablelistEquipments.shipId;

      if (!TablelistEquipments.isExtraSlot && TablelistEquipments.shipId && _g.data.ships[TablelistEquipments.shipId] && $.inArray(_g.data.ships[TablelistEquipments.shipId].type, [9, 10, 11, 30]) > -1) {
        var k = 0,
            el,
            t;

        while (this.dom.types[k++] && this.dom.types[k] && (this.dom.types[k].attr('data-equipmentcollection') != 3 || $.inArray(parseInt(this.dom.types[k].attr('data-type')) || null, TablelistEquipments.types) <= -1)) {
          el = this.dom.types[k + 1];
        }

        el = el || this.dom.types[0];
        this.dom.type_radios[3].prop('checked', true).trigger('change');
        t = el[0].offsetTop;
        if (t) t -= 32;
        this.dom.tbody.scrollTop(t || 0);
        return;
      }

      if (TablelistEquipments.shipId === 'FIELD') {
        this.dom.type_radios[3].prop('checked', true).trigger('change');
        var title;
        this.dom.types.some(function (obj) {
          if (obj.attr('data-type') == 45) {
            title = obj;
            return true;
          }

          return false;
        });
        var scrollTop = title[0].offsetTop;
        if (scrollTop) scrollTop -= 32;
        this.dom.tbody.scrollTop(scrollTop || 0);
        setTimeout(function () {
          if (!_this24.dom.tbody.attr('scrollbody') || _this24.dom.tbody.attr('scrollbody') < 10) {
            _this24.dom.tbody.scrollTop(scrollTop || 0);

            _this24.dom.tbody.attr('scrollbody', scrollTop || 0);
          }
        }, 100);
        return;
      }

      if (TablelistEquipments.types.length) {
        var _k = 0,
            _el,
            _t;

        while ($.inArray(parseInt(this.dom.types[_k++].attr('data-type')) || null, TablelistEquipments.types) <= -1) {
          _el = this.dom.types[_k];
        }

        _el = _el || this.dom.types[0];
        this.dom.type_radios[parseInt(_el.attr('data-equipmentcollection')) || 1].prop('checked', true).trigger('change');
        _t = _el[0].offsetTop;
        if (_t) _t -= 32;
        this.dom.tbody.scrollTop(_t || 0);
      }
    }
  }, {
    key: "reset_types",
    value: function reset_types() {
      this.dom.container.removeClass('mod-field');
    }
  }, {
    key: "init_parse",
    value: function init_parse() {
      this.dom.filter_container = this.dom.container.children('.options');
      this.dom.filters = this.dom.filter_container.children('.filters');
      this.dom.type_radios = {};
      this.dom.container.children('input[type="radio"][name="equipmentcollection"]').each(function (i, radio) {
        radio = $(radio);
        var val = parseInt(radio.val());
        this.dom.type_radios[val] = radio.prop('checked', val == 1).on('change', function () {
          this.dom.tbody.scrollTop(0);
          this.thead_redraw();
        }.bind(this));
      }.bind(this));
      this.dom.filter_types = this.dom.container.children('input[name="types"][type="hidden"]');
      this.dom.table = this.dom.container.children('.tablelist-container');
      this.dom.thead = this.dom.table.children('.tablelist-header');
      this.dom.tbody = this.dom.table.children('.tablelist-body');
      this.parse_all_items();
      this.dom.msg_container = this.dom.container.children('.msgs');
      if (!_config.get('hide-equipmentsinfos')) this.dom.msg_container.attr('data-msgs', 'equipmentsinfos');else this.dom.msg_container.removeAttr('data-msgs');
      var equipmentsinfos = this.dom.msg_container.children('.equipmentsinfos');
      equipmentsinfos.children('button').on('click', function () {
        this.dom.msg_container.removeAttr('data-msgs');

        _config.set('hide-equipmentsinfos', true);
      }.bind(this));
    }
  }, {
    key: "parse_all_items",
    value: function parse_all_items() {
      this.generated = false;
      this.dom.types = [];
      var header_index = -1;
      this.dom.tbody.children('h4, dl').each(function (index, tr) {
        var _this25 = this;

        tr = $(tr);

        if (tr[0].tagName == 'H4') {
          header_index++;
          this.dom.types[header_index] = tr;

          if (Formula.equipmentType.Interceptors.includes(tr.data('type'))) {
            var headerAlt = tr.next().clone();
            headerAlt.addClass('header-alt');
            headerAlt.removeAttr('data-equipmentid');
            headerAlt.removeAttr('data-infos');
            headerAlt.find('dt').empty();
            headerAlt.find('dd').empty().removeAttr('value');
            headerAlt.find('[stat="aa"]').html('<span>对空</span><sup>出击</sup><sub>防空</sub>');
            headerAlt.find('[stat="hit"]').text('对爆');
            headerAlt.find('[stat="evasion"]').text('迎击');
            headerAlt.insertAfter(tr);
          }
        } else {
          var etype = parseInt(tr.attr('data-equipmenttype')) || -1,
              eid = parseInt(tr.attr('data-equipmentid'));
          var equipment = _g.data.items[eid];

          var parse = function parse() {
            if (equipment) {
              var bonuses = equipment.getBonuses();

              if (Array.isArray(bonuses) && bonuses.length) {
                _this25.equipmentsHasBonus[eid] = tr;
                tr.addClass('has-bonus');
              }
            } else {
              setTimeout(parse, 100);
            }
          };

          parse();
          tr.on('click', function (e, forceInfos) {
            if (!forceInfos && _frame.app_main.is_mode_selection()) {
              e.preventDefault();
              e.stopImmediatePropagation();
              e.stopPropagation();

              if ($.inArray(etype, TablelistEquipments.types || []) > -1 || $.inArray(eid, TablelistEquipments.extraEquipments || []) > -1) {
                _frame.app_main.mode_selection_callback(eid);
              }

              setTimeout(function () {
                TablelistEquipments.types = [];
                TablelistEquipments.extraEquipments = [];
                TablelistEquipments.shipId = null;
                tr.removeAttr('style');

                _this25.reset_types();
              }, 20);
            }
          });

          if (Formula.equipmentType.Interceptors.includes(tr.data('equipmenttype'))) {
            tr.addClass('mod-interceptor');
            var cellAA = tr.find('[stat="aa"]');
            var valueAA = equipment.stat.aa || 0;
            cellAA.html("<span>".concat(valueAA, "</span>") + "<sup>".concat((equipment.stat.aa || 0) + (equipment.stat.evasion * 1.5 || 0), "</sup>") + "<sub>".concat((equipment.stat.aa || 0) + (equipment.stat.evasion || 0) + (equipment.stat.hit * 2 || 0), "</sub>"));
          }
        }
      }.bind(this));
      this.thead_redraw();
      this.generated = true;
      this.apply_types_check();

      _frame.app_main.loaded('tablelist_' + this._index, true);
    }
  }]);

  return TablelistEquipments;
}(Tablelist);

TablelistEquipments.gen_helper_equipable_on = function (type_id) {
  var equipable_on = '';

  _g.data.item_types[type_id]['equipable_on_type'].forEach(function (currentValue, i) {
    var item_type_id = _g.data.item_types[type_id]['equipable_on_type'][i];
    equipable_on += '<span>' + _g['data']['ship_types'][item_type_id].name.zh_cn + (i < _g.data.item_types[type_id]['equipable_on_type'].length - 1 ? ',&nbsp;' : '') + '</span>';
  });

  return '<em class="helper" data-tip="<h4 class=item_equipable_on>可装备于</h4>' + equipable_on + '">?</em>';
};

TablelistEquipments.types = [];
TablelistEquipments.shipId = null;
TablelistEquipments.shipIdLast = null;
TablelistEquipments.currentSelected = [];

var TablelistFleets = function (_Tablelist3) {
  _inherits(TablelistFleets, _Tablelist3);

  var _super6 = _createSuper(TablelistFleets);

  function TablelistFleets(container, options) {
    var _this26;

    _classCallCheck(this, TablelistFleets);

    _this26 = _super6.call(this, container, options);
    _this26.columns = ['  ', ['创建者', 'user'], ['修改时间', 'time_modify'], ['评价', 'rating'], ['', 'options']];
    _this26.kancolle_calc = {
      '_ApplicationId': 'l1aps8iaIfcq2ZzhOHJWNUU2XrNySIzRahodijXW',
      '_ClientVersion': 'js1.2.19',
      '_InstallationId': '62522018-ec82-b434-f5a5-08c3ab61d932',
      '_JavaScriptKey': 'xOrFpWEQZFxUDK2fN1DwbKoj3zTKAEkgJHzwTuZ4'
    };

    _frame.app_main.loading.push('tablelist_' + _this26._index);

    _frame.app_main.is_loaded = false;
    _this26.dom.filter_container = $('<div class="options" viewtype="card"/>').appendTo(_this26.dom.container);
    _this26.dom.filters = $('<div class="filters"/>').appendTo(_this26.dom.filter_container);
    _this26.dom.btn_new = $('<button class="new" icon="import"/>').html('新建/导入').on('click', function (e, target) {
      this.btn_new(target);
    }.bind(_assertThisInitialized(_this26))).appendTo(_this26.dom.filters);

    if (TablelistFleets.support.buildfile) {
      _this26.dom.btn_exportFile = $('<button class="export" icon="floppy-disk"/>').html('导出配置文件').on('click', function () {
        _db.fleets.persistence.compactDatafile();

        if (_g.isNWjs) {
          _g.save(_db.fleets.filename, 'fleets.json');
        } else {
          _frame.app_main.loading_start('tablelist_fleets_export', false);

          var data = '';

          _db.fleets.find({}, function (err, docs) {
            if (err) {
              _g.error(err);
            } else {
              docs.forEach(function (doc) {
                data += JSON.stringify(doc) + '\n';
              });
              var blob = new Blob([data], {
                type: "application/json"
              });

              _g.save(URL.createObjectURL(blob), 'fleets.json');
            }

            _frame.app_main.loading_complete('tablelist_fleets_export');
          });
        }
      }).appendTo(_this26.dom.filters);
    }

    _this26.dom.buttons_right = $('<div class="buttons_right"/>').appendTo(_this26.dom.filters);
    _this26.dom.setting_hqlv = $('<label/>', {
      'class': 'setting setting-hqlv',
      'html': '默认司令部等级',
      'data-tip': '如果舰队配置没有设置司令部等级，<br/>则会使用该默认数值<br/>司令部等级会影响索敌能力的计算'
    }).on({
      'mouseenter mouseleave': function (e) {
        if (_p.tip.is_showing && !_p.tip.timeout_fade && this.dom.setting_hqlv_input.is(':focus')) {
          e.stopImmediatePropagation();
          e.stopPropagation();
        }
      }.bind(_assertThisInitialized(_this26))
    }).append(_this26.dom.setting_hqlv_input = $('<input/>', {
      'type': 'number',
      'min': 0,
      'max': _g.hqMaxLv
    }).val(Lockr.get('hqLvDefault', _g.defaultHqLv)).on({
      'input': function () {
        _g.updateDefaultHqLv(this.dom.setting_hqlv_input.val());
      }.bind(_assertThisInitialized(_this26)),
      'focus.tipshow': function () {
        this.dom.setting_hqlv_input.trigger('tipshow');
      }.bind(_assertThisInitialized(_this26)),
      'blur.tiphide': function () {
        this.dom.setting_hqlv_input.trigger('tiphide');

        if (this.dom.setting_hqlv_input.val() > _g.hqMaxLv) {
          this.dom.setting_hqlv_input.val(_g.hqMaxLv);
          this.dom.setting_hqlv_input.trigger('input');
        }
      }.bind(_assertThisInitialized(_this26)),
      'click': function click(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
      }
    })).appendTo(_this26.dom.buttons_right);
    $body.on('update_defaultHqLv.update_fleets_hqlv_input', function (e, val) {
      this.dom.setting_hqlv_input.val(val);
    }.bind(_assertThisInitialized(_this26)));
    _this26.dom.btn_settings = $('<button icon="cog"/>').on('click', function () {
      this.btn_settings();
    }.bind(_assertThisInitialized(_this26))).appendTo(_this26.dom.buttons_right);
    _this26.dom.table = $('<div class="tablelist-container"/>').appendTo(_this26.dom.container);
    _this26.dom.thead = $('<dl/>').appendTo($('<div class="tablelist-header"/>').appendTo(_this26.dom.table));
    _this26.dom.tbody = $('<div class="tablelist-body" scrollbody/>').appendTo(_this26.dom.table).on('contextmenu.contextmenu_fleet', '[data-fleetid]', function (e) {
      this.contextmenu_show($(e.currentTarget), null, e);
      e.preventDefault();
    }.bind(_assertThisInitialized(_this26))).on('click.contextmenu_fleet', '[data-fleetid]>dt>em', function (e) {
      this.contextmenu_show($(e.currentTarget).parent().parent(), $(e.currentTarget));
      e.stopImmediatePropagation();
      e.stopPropagation();
    }.bind(_assertThisInitialized(_this26)));

    _this26.columns.forEach(function (v, i) {
      if (_typeof(v) == 'object') {
        $('<dd/>', {
          'stat': v[1],
          'html': v[0]
        }).appendTo(this.dom.thead);
      } else {
        $('<dt/>').html(v[0]).appendTo(this.dom.thead);
      }
    }.bind(_assertThisInitialized(_this26)));

    $('<div class="nocontent container"/>').append($($('<div/>').append($('<span>').html('暂无舰队配置')).append($('<button>').html('新建/导入').on('click', function (e) {
      this.dom.btn_new.trigger('click', [e]);
    }.bind(_assertThisInitialized(_this26)))))).appendTo(_this26.dom.table);

    _this26.dom.container.on('focus.number_input_select', 'input[type="number"]', function (e) {
      e.currentTarget.select();
    });

    _this26.genlist();

    return _this26;
  }

  _createClass(TablelistFleets, [{
    key: "new_data",
    value: function new_data(obj) {
      return $.extend({
        'data': [],
        'time_create': new Date().valueOf(),
        'time_modify': new Date().valueOf(),
        'hq_lv': -1,
        'name': '',
        'note': '',
        'user': {},
        'rating': -1,
        'theme': _g.randNumber(10)
      }, obj || {});
    }
  }, {
    key: "loaddata",
    value: function loaddata() {
      var deferred = Q.defer();

      _db.fleets.find({}).sort({
        name: 1
      }).exec(function (err, docs) {
        if (err) {
          deferred.resolve([]);
        } else {
          docs.forEach(function (doc) {
            doc.data = InfosFleet.decompress(doc['data']);
          });
          console.log(docs);
          deferred.resolve(docs);
        }
      });

      return deferred.promise;
    }
  }, {
    key: "validdata",
    value: function validdata(arr) {
      var deferred = Q.defer(),
          to_remove = [],
          i = 0,
          valid = function valid(fleetdata) {
        if (fleetdata['hq_lv'] > -1 || fleetdata['name'] || fleetdata['note'] || fleetdata['rating'] > -1) {
          return true;
        }

        if (!fleetdata.data || !fleetdata.data.length || !fleetdata.data.push) return false;
        var is_valid = false;

        var _iterator = _createForOfIteratorHelper(fleetdata.data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var fleet = _step.value;

            if (fleet && fleet.length && fleet.push) {
              var _iterator2 = _createForOfIteratorHelper(fleet),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var shipdata = _step2.value;
                  if (typeof shipdata != 'undefined' && shipdata && shipdata.push && typeof shipdata[0] != 'undefined' && shipdata[0]) is_valid = true;
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return is_valid;
      };

      while (i < arr.length) {
        if (valid(arr[i])) {
          i++;
        } else {
          to_remove.push(arr[i]._id);
          arr.splice(i, 1);
        }
      }

      if (to_remove.length) {
        _db.fleets.remove({
          _id: {
            $in: to_remove
          }
        }, {
          multi: true
        }, function (err, numRemoved) {
          deferred.resolve(arr);
        });
      } else {
        deferred.resolve(arr);
      }

      return deferred.promise;
    }
  }, {
    key: "datacheck",
    value: function datacheck(arr) {
      arr = arr || [];
      if (!arr.length) this.dom.container.addClass('nocontent');else this.dom.container.removeClass('nocontent');
      return arr;
    }
  }, {
    key: "append_all_items",
    value: function append_all_items(arr) {
      var _this27 = this;

      arr = arr || [];
      arr.sort(function (a, b) {
        if (a['name'] < b['name']) return -1;
        if (a['name'] > b['name']) return 1;
        return 0;
      });
      this.trIndex = 0;
      if (typeof Lockr.get('fleetlist-option-groupbytheme') == 'undefined') Lockr.set('fleetlist-option-groupbytheme', true);
      var deferred = Q.defer(),
          k = 0;

      if (Lockr.get('fleetlist-option-groupbytheme')) {
        (function () {
          var sorted = {},
              count = 0;
          arr.forEach(function (cur, i) {
            if (!sorted[cur.theme]) sorted[cur.theme] = [];
            sorted[cur.theme].push(i);
          });

          for (var _i10 in sorted) {
            k = 0;

            while (k < _this27.flexgrid_empty_count) {
              if (!k) _this27.flexgrid_ph = $('<dl data-fleetid trindex="99999"/>').appendTo(_this27.dom.tbody);else $('<dl data-fleetid trindex="99999"/>').appendTo(_this27.dom.tbody);
              k++;
            }

            sorted[_i10].forEach(function (index) {
              setTimeout(function (i) {
                this.append_item(arr[i]);
                count++;
                if (count >= arr.length - 1) deferred.resolve();
              }.bind(this)(index), 0);
            }.bind(_this27));

            $('<h4/>', {
              'trindex': ++_this27.trIndex,
              'html': '&nbsp;'
            }).appendTo(_this27.dom.tbody);
            _this27.trIndex++;
          }
        })();
      } else {
        while (k < this.flexgrid_empty_count) {
          if (!k) this.flexgrid_ph = $('<dl data-fleetid trindex="99999"/>').appendTo(this.dom.tbody);else $('<dl data-fleetid trindex="99999"/>').appendTo(this.dom.tbody);
          k++;
        }

        arr.forEach(function (currentValue, i) {
          setTimeout(function (i) {
            this.append_item(arr[i]);
            if (i >= arr.length - 1) deferred.resolve();
          }.bind(this)(i), 0);
        }.bind(this));
      }

      if (!arr.length) deferred.resolve();
      return deferred.promise;
    }
  }, {
    key: "append_item",
    value: function append_item(data, index, isPrepend) {
      if (!data) return false;

      if (typeof index == 'undefined') {
        index = this.trIndex;
        this.trIndex++;
      }

      var tr = $('<dl/>').attr({
        'trindex': index,
        'data-fleetid': data._id || 'PLACEHOLDER',
        'data-infos': '[[FLEET::' + data._id + ']]',
        'data-theme': data.theme,
        'class': 'link_fleet'
      }).data({
        'initdata': data
      });
      this.columns.forEach(function (column) {
        switch (column[1]) {
          case ' ':
            var ships = data['data'][0] || [],
                j = 0,
                count = Math.min(8, Math.max(6, ships.length)),
                html = "<i data-count=\"".concat(count, "\">");

            while (j < count) {
              if (ships[j] && ships[j][0]) html += '<img class="img' + (_huCss.csscheck_full('mask-image') ? '' : ' nomask') + '" src="' + KC.getFolderGroup(_g.path.pics.ships, ships[j][0]) + '/' + ships[j][0] + '/0' + TablelistFleets.avatarImgSuffix + '" contextmenu="disabled"' + '/>';else html += '<s class="img' + (_huCss.csscheck_full('mask-image') ? '' : ' nomask') + '"/>';
              j++;
            }

            html += '</i>';
            $('<dt/>').attr('value', data['name']).html(html + '<strong>' + data['name'] + '</strong>' + '<em></em>').appendTo(tr);
            break;

          default:
            var datavalue = data[column[1]];
            $('<dd/>').attr('value', datavalue).html(datavalue).appendTo(tr);
            break;
        }
      });
      if (isPrepend === true) return tr;
      if (isPrepend) tr.prependTo(this.dom.tbody);else tr.insertBefore(this.flexgrid_ph);
      return tr;
    }
  }, {
    key: "btn_new",
    value: function btn_new(target) {
      if (!this.menu_new) {
        var items = [$('<div class="menu-fleets-new"/>').append($('<menuitem/>').html('新建配置').on('click', function () {
          this.action_new();
        }.bind(this))).append($('<menuitem/>').html('导入配置代码').on('click', function () {
          if (!TablelistFleets.modalImport) {
            TablelistFleets.modalImport = $('<div/>').append(TablelistFleets.modalImportTextarea = $('<textarea/>', {
              'placeholder': '输入配置代码...'
            })).append($('<p/>').html('* 配置代码兼容<a href="http://www.kancolle-calc.net/deckbuilder.html">艦載機厨デッキビルダー</a>')).append($('<p class="aircraftimportmax"/>').append(TablelistFleets.modalImportCheckAircraftMax = $('<input/>', {
              'type': 'checkbox',
              'id': '_input_g' + _g.inputIndex
            }).prop('checked', Lockr.get('fleetlist-option-aircraftimportmax'))).append($('<label/>', {
              'class': 'checkbox',
              'for': '_input_g' + _g.inputIndex++,
              'html': '飞行器熟练度自动提升至'
            }))).append(TablelistFleets.modalImportBtn = $('<button class="button"/>').html('导入').on('click', function () {
              var val = TablelistFleets.modalImportTextarea.val();

              if (val) {
                val = JSON.parse(val);
                if (!val.length || !val.push) val = _g.kancolle_calc.decode(val);
                this.action_new({
                  'data': val
                }, {
                  'aircraftmax': TablelistFleets.modalImportCheckAircraftMax.prop('checked')
                });

                _frame.modal.hide();

                TablelistFleets.modalImportTextarea.val('');
              }
            }.bind(this)));
          }

          TablelistFleets.modalImportTextarea.val('');

          _frame.modal.show(TablelistFleets.modalImport, '导入配置代码', {
            'classname': 'infos_fleet infos_fleet_import',
            'detach': true
          });
        }.bind(this))).append(TablelistFleets.support.buildfile ? $('<menuitem class="import_file"/>').html('导入配置文件').on('click', function () {
          this.dbfile_selector.trigger('click');
        }.bind(this)) : null)];
        var event;

        if (_g.getCurrentEvent().some(function (e) {
          if (e.code === 'leyteB') {
            event = e;
            return true;
          }

          return false;
        })) {
          items.push($('<hr/>'));
          items.push($('<small class="subtitle">期间限定</small>'));
          items.push($("<div class=\"title\">".concat(event.title[_g.lang], "</div>")));
          items.push($('<menuitem class="shipavatar"/>').html('<small class="sup">新建配置</small>第一游击部队 第三部队（西村队）').on('click', function () {
            var data = {
              "version": 4,
              "f1": {
                "s1": {
                  "id": 411,
                  "luck": -1,
                  "items": {}
                },
                "s2": {
                  "id": 412,
                  "luck": -1,
                  "items": {}
                },
                "s3": {
                  "id": 73,
                  "luck": -1,
                  "items": {}
                },
                "s4": {
                  "id": 489,
                  "luck": -1,
                  "items": {}
                },
                "s5": {
                  "id": 327,
                  "luck": -1,
                  "items": {}
                },
                "s6": {
                  "id": 328,
                  "luck": -1,
                  "items": {}
                },
                "s7": {
                  "id": 145,
                  "luck": -1,
                  "items": {}
                }
              },
              "f2": {},
              "f3": {},
              "f4": {},
              "fField": {}
            };
            this.action_new({
              name: '第一游击部队 第三部队（西村队）',
              data: _g.kancolle_calc.decode(data)
            }, {
              'aircraftmax': Lockr.get('fleetlist-option-aircraftimportmax')
            });
          }.bind(this)));
          items.push($('<menuitem class="shipavatar"/>').html('<small class="sup">新建配置</small>第二游击部队（志摩队）').on('click', function () {
            var data = {
              "version": 4,
              "f1": {
                "s1": {
                  "id": 192,
                  "luck": -1,
                  "items": {}
                },
                "s2": {
                  "id": 193,
                  "luck": -1,
                  "items": {}
                },
                "s3": {
                  "id": 200,
                  "luck": -1,
                  "items": {}
                },
                "s4": {
                  "id": 231,
                  "luck": -1,
                  "items": {}
                },
                "s5": {
                  "id": 407,
                  "luck": -1,
                  "items": {}
                },
                "s6": {
                  "id": 226,
                  "luck": -1,
                  "items": {}
                },
                "s7": {
                  "id": 470,
                  "luck": -1,
                  "items": {}
                }
              },
              "f2": {},
              "f3": {},
              "f4": {},
              "fField": {}
            };
            this.action_new({
              name: '第二游击部队（志摩队）',
              data: _g.kancolle_calc.decode(data)
            }, {
              'aircraftmax': Lockr.get('fleetlist-option-aircraftimportmax')
            });
          }.bind(this)));
        }

        this.menu_new = new _menu({
          'target': this.dom.btn_new,
          'className': 'menu-fleets-new',
          items: items
        });
        this.dbfile_selector = $('<input type="file" class="none"/>').on('change', function (e) {
          return this.importBuilds(this.dbfile_selector);
        }.bind(this)).appendTo(this.dom.filters);
      }

      if (target && target.clientX) return this.menu_new.show(target.clientX, target.clientY);
      return this.menu_new.show(target);
    }
  }, {
    key: "btn_settings",
    value: function btn_settings() {
      TablelistFleets.menuOptions_show(this.dom.btn_settings, this);
    }
  }, {
    key: "action_new",
    value: function action_new(dataDefault, options) {
      dataDefault = dataDefault || {};
      options = options || {};

      if (dataDefault.data) {
        var _i11 = 0;
        dataDefault.data.forEach(function (fleet) {
          if (fleet && fleet.push) {
            if (_i11 < 4) {
              fleet.forEach(function (ship) {
                if (ship && ship.push) {
                  ship[2].forEach(function (equipmentId, index) {
                    if (equipmentId && $.inArray(_g.data.items[equipmentId].type, Formula.equipmentType.Aircrafts) > -1) {
                      if (_g.data.items[equipmentId].rankupgradable) {
                        if (options.aircraftmax) ship[4][index] = 7;
                      }
                    }
                  });
                }
              });
            } else {
              fleet.forEach(function (field) {
                if (field && field.push) {
                  field.forEach(function (aircraft, index) {
                    if (aircraft && aircraft[0] && $.inArray(_g.data.items[aircraft[0]].type, Formula.equipmentType.Aircrafts) > -1 && _g.data.items[aircraft[0]].rankupgradable && options.aircraftmax) {
                      aircraft[1] = 7;
                    }
                  });
                }
              });
            }

            _i11++;
          }
        });
        InfosFleet.clean(dataDefault.data);
      }

      _db.fleets.insert(this.new_data(dataDefault, options), function (err, newDoc) {
        console.log(err, newDoc);

        if (err) {
          _g.error(err);
        } else {
          if (_frame.app_main.cur_page == 'fleets') {
            _frame.infos.show('[[FLEET::' + newDoc['_id'] + ']]');

            this.menu_new.hide();
          }
        }
      }.bind(this));
    }
  }, {
    key: "parse_kancolle_calc_data",
    value: function parse_kancolle_calc_data(obj) {
      return this.new_data(obj);
    }
  }, {
    key: "contextmenu_show",
    value: function contextmenu_show($tr, $em, is_rightclick) {
      if (!TablelistFleets.contextmenu) {
        var items = [$('<menuitem/>').html('详情').on({
          'click': function click(e) {
            TablelistFleets.contextmenu.curel.trigger('click', [true]);
          }
        }), $('<menuitem/>').html('导出配置代码').on({
          'click': function click(e) {
            InfosFleet.modalExport_show(TablelistFleets.contextmenu.curel.data('initdata'));
          }
        }), $('<menuitem/>').html('导出配置文本').on({
          'click': function click(e) {
            InfosFleet.modalExportText_show(TablelistFleets.contextmenu.curel.data('initdata'));
          }
        }), $('<menuitem/>').html('移除').on({
          'click': function click(e) {
            var id = TablelistFleets.contextmenu.curel.attr('data-fleetid');

            if (id) {
              InfosFleet.modalRemove_show(id, TablelistFleets.contextmenu.curobject);
            }
          }
        }), $('<menuitem class="remove-all-same-theme"/>').html('<span class="theme-block"></span>移除所有该主题颜色的配置').on({
          'click': function click(e) {
            TablelistFleets.modalRemoveAllSameTheme_show(TablelistFleets.contextmenu.curobject);
          }
        })];
        TablelistFleets.contextmenu = new _menu({
          'className': 'contextmenu-fleet',
          items: items
        });
      }

      TablelistFleets.contextmenu.curobject = this;
      TablelistFleets.contextmenu.curel = $tr;
      TablelistFleets.contextmenu.dom.menu.attr('data-theme', $tr.data('theme'));
      if (is_rightclick) TablelistFleets.contextmenu.show(is_rightclick.clientX, is_rightclick.clientY);else TablelistFleets.contextmenu.show($em || $tr);
    }
  }, {
    key: "genlist",
    value: function genlist(callback) {
      Q.fcall(function () {}).then(function () {
        return this.loaddata();
      }.bind(this)).then(function (arr) {
        return this.validdata(arr);
      }.bind(this)).then(function (arr) {
        return this.datacheck(arr);
      }.bind(this)).then(function (arr) {
        return this.append_all_items(arr);
      }.bind(this)).then(function () {
        setTimeout(function () {
          _frame.app_main.loaded('tablelist_' + this._index, true);
        }.bind(this), 100);
      }.bind(this))["catch"](function (err) {
        _g.log(err);
      }).done(function () {
        if (callback) callback();

        _g.log('Fleets list DONE');
      });
    }
  }, {
    key: "refresh",
    value: function refresh() {
      console.log('refresh');
      this.dom.tbody.empty();
      this.genlist(function () {
        this.dom.tbody.scrollTop(this.dom.tbody.attr('scrollbody') || 0);
      }.bind(this));
    }
  }, {
    key: "importBuilds",
    value: function importBuilds($selector, filename) {
      $selector = $selector || this.dbfile_selector;

      _frame.app_main.loading_start('tablelist_fleets_import', false);

      $selector.prop('disabled', true);
      var master_deferred = Q.defer(),
          promise_chain = Q.fcall(function () {
        var deferred = Q.defer();

        if (_g.isNWjs && filename) {
          var val = $selector.val();
          if (val.indexOf(';') > -1) val = node.path.dirname(val.split(';')[0]);
          node.fs.readFile(node.path.join(val, filename), 'utf8', function (err, data) {
            if (err) deferred.reject('文件载入失败', new Error(err));else deferred.resolve(data);
          });
        } else {
          for (var _i12 = 0, f; f = $selector[0].files[_i12]; _i12++) {
            var reader = new FileReader();

            reader.onload = function (theFile) {
              return function (r) {
                return deferred.resolve(r.target.result);
              };
            }(f);

            reader.readAsText(f);
          }
        }

        return deferred.promise;
      });
      promise_chain = promise_chain.then(function (data) {
        $selector.val('');
        var array = [],
            deferred = Q.defer();
        data.split('\n').forEach(function (line) {
          if (line) {
            try {
              array.push(JSON.parse(line));
            } catch (e) {
              deferred.reject('文件格式错误', e);
            }

            deferred.resolve(array);
          } else {
            deferred.reject('文件无内容');
          }
        });
        return deferred.promise;
      }).then(function (array) {
        var deferred = Q.defer(),
            chain = Q();
        array.forEach(function (data) {
          chain = chain.then(function () {
            var deferred = Q.defer();

            _db.fleets.insert(data, function (err) {
              if (err) {
                if (err.errorType == "uniqueViolated") {
                  TablelistFleets.modalBuildConflictShow(data, deferred);
                } else {
                  deferred.reject(err);
                }
              } else {
                deferred.resolve();
              }
            });

            return deferred.promise;
          });
        });
        chain = chain.then(function () {
          deferred.resolve();
        })["catch"](function (err) {
          deferred.reject(err);
        }).done(function () {
          _frame.modal.hide();
        });
        return deferred.promise;
      });
      promise_chain = promise_chain.then(function () {
        this.refresh();

        _g.badgeMsg('成功导入配置');

        master_deferred.resolve();
      }.bind(this))["catch"](function (msg, err) {
        _g.log(msg);

        _g.error(err, '[舰队] 导入配置文件');

        _g.badgeError(msg);

        master_deferred.reject(msg, err);
      }).done(function () {
        _frame.app_main.loading_complete('tablelist_fleets_import');

        $selector.prop('disabled', false);
      });
      return master_deferred.promise;
    }
  }]);

  return TablelistFleets;
}(Tablelist);

TablelistFleets.support = {};
TablelistFleets.support.buildfile = _g.isNWjs || window.File && window.FileReader && window.FileList && window.Blob && window.URL ? true : false;
TablelistFleets.avatarImgSuffix = _huCss.csscheck_full('mask-image') ? '.' + _g.imgExt : '-2.png';

TablelistFleets.menuOptions_show = function ($el, $el_tablelist) {
  if (!TablelistFleets.menuOptions) {
    var items = [$('<menuitem class="mod-checkbox donot_hide option-in-tablelist option-groupbytheme"/>').append($('<input/>', {
      'type': 'checkbox',
      'id': '_input_g' + _g.inputIndex
    }).prop('checked', Lockr.get('fleetlist-option-groupbytheme')).on('change', function (e) {
      Lockr.set('fleetlist-option-groupbytheme', e.target.checked);

      if (TablelistFleets.menuOptions.curTablelist) {
        TablelistFleets.menuOptions.curTablelist.dom.tbody.empty();
        TablelistFleets.menuOptions.curTablelist.genlist();
      }
    })).append($('<label/>', {
      'for': '_input_g' + _g.inputIndex++,
      'html': '按主题颜色进行分组'
    })), $('<menuitem class="mod-checkbox donot_hide option-in-tablelist option-aircraftdefaultmax option-aircraftimportmax"/>').append($('<input/>', {
      'type': 'checkbox',
      'id': '_input_g' + _g.inputIndex
    }).prop('checked', Lockr.get('fleetlist-option-aircraftimportmax')).on('change', function (e) {
      Lockr.set('fleetlist-option-aircraftimportmax', e.target.checked);
    })).append($('<label/>', {
      'for': '_input_g' + _g.inputIndex++,
      'html': '导入配置时提升飞行器熟练度至'
    })), $('<menuitem class="mod-checkbox donot_hide option-aircraftdefaultmax"/>').append($('<input/>', {
      'type': 'checkbox',
      'id': '_input_g' + _g.inputIndex
    }).prop('checked', Lockr.get('fleetlist-option-aircraftdefaultmax')).on('change', function (e) {
      Lockr.set('fleetlist-option-aircraftdefaultmax', e.target.checked);
    })).append($('<label/>', {
      'for': '_input_g' + _g.inputIndex++,
      'html': '<span class="inline option-in-tablelist">配装时</span>新增飞行器熟练度默认为'
    })), $('<hr class="option-in-infos"/>'), $('<menuitem/>', {
      'class': 'option-in-infos',
      'html': '移除配置'
    }).on('click', function () {
      console.log(InfosFleet.cur);
      if (InfosFleet.cur) InfosFleet.cur.remove();
    })];

    if (_g.isNWjs) {
      items = items.concat(TablelistFleets.menuOptionsItemsBuildsLocation());
    }

    TablelistFleets.menuOptions = new _menu({
      'className': 'menu-tablelistfleets-options',
      'items': items
    });
  }

  TablelistFleets.menuOptions.curTablelist = $el_tablelist || null;
  if ($el_tablelist) TablelistFleets.menuOptions.dom.menu.addClass('is-tablelist');else TablelistFleets.menuOptions.dom.menu.removeClass('is-tablelist');
  TablelistFleets.menuOptions.show($el);
};

TablelistFleets.modalBuildConflictShow = function (data, deferred) {
  if (!data) return;

  if (!TablelistFleets.modalBuildConflict) {
    TablelistFleets.modalBuildConflict = $('<div/>').append($('<h4>原配置</h4>')).append(TablelistFleets.modalBuildConflictOld = $('<dl class="link_fleet"/>')).append($('<h4>新配置</h4>')).append(TablelistFleets.modalBuildConflictNew = $('<dl class="link_fleet"/>')).append($('<p class="actions"/>').append(TablelistFleets.modalBuildConflictButtonConfirm = $('<button/>', {
      'class': 'button',
      'html': '替换'
    })).append(TablelistFleets.modalBuildConflictButtonCancel = $('<button/>', {
      'class': 'button',
      'html': '跳过'
    })));
  }

  var dataOld,
      htmlFleet = function htmlFleet(data) {
    var html = '<i>',
        ships = InfosFleet.decompress(data.data)[0] || [],
        j = 0;

    while (j < 6) {
      if (ships[j] && ships[j][0]) html += '<img class="img' + (_huCss.csscheck_full('mask-image') ? '' : ' nomask') + '" src="' + KC.getFolderGroup(_g.path.pics.ships, ships[j][0]) + '/' + ships[j][0] + '/0' + TablelistFleets.avatarImgSuffix + '" contextmenu="disabled"' + '/>';else html += '<s class="img' + (_huCss.csscheck_full('mask-image') ? '' : ' nomask') + '"/>';
      j++;
    }

    html += '</i>';
    html = "<dt>".concat(html, "<strong>").concat(data['name'], "</strong></dt>") + "<span>\u6700\u540E\u66F4\u65B0: ".concat(new Date(data.time_modify).format('%Y年%m月%d日 %G:%i:%s'), "</span>");
    return html;
  };

  Q.fcall(function () {
    var _deferred = Q.defer();

    _db.fleets.find({
      _id: data._id
    }, function (err, docs) {
      if (err) {
        if (deferred) deferred.reject(err);else _g.log(err);
      } else {
        dataOld = docs[0];

        _deferred.resolve();
      }
    });

    return _deferred.promise;
  }).then(function () {
    TablelistFleets.modalBuildConflictButtonConfirm.off('click').on('click', function () {
      _db.fleets.update({
        _id: data._id
      }, data, {}, function (err, numReplaced) {
        if (err) {
          if (deferred) deferred.reject(err);else _g.log(err);
        } else {
          _g.log('build updated ' + numReplaced);

          if (_frame.infos.contentCache.fleet && _frame.infos.contentCache.fleet[data._id]) {
            _frame.infos.contentCache.fleet[data._id].remove();

            delete _frame.infos.contentCache.fleet[data._id];

            try {
              delete _frame.app_main.loading_state[_g.state2URI({
                'infos': 'fleet',
                'id': data._id
              })];
            } catch (e) {}
          }
        }

        if (deferred) deferred.resolve();
      });
    });

    if (data.time_modify > dataOld.time_modify) {
      TablelistFleets.modalBuildConflictButtonConfirm.trigger('click');
    } else if (data.time_modify < dataOld.time_modify) {
      TablelistFleets.modalBuildConflictOld.attr({
        'data-theme': dataOld.theme,
        'class': 'link_fleet'
      }).html(htmlFleet(dataOld));
      TablelistFleets.modalBuildConflictNew.attr({
        'data-theme': data.theme,
        'class': 'link_fleet'
      }).html(htmlFleet(data));
      TablelistFleets.modalBuildConflictButtonCancel.off('click').on('click', function () {
        if (deferred) deferred.resolve();
      });

      _frame.modal.show(TablelistFleets.modalBuildConflict, '配置冲突', {
        'classname': 'infos_fleet infos_fleet_import_conflict',
        'detach': true,
        'onClose': function onClose() {
          if (deferred) deferred.resolve();
        }
      });
    } else {
      if (deferred) deferred.resolve();
    }
  });
};

TablelistFleets.modalRemoveAllSameTheme_show = function (list) {
  var run = function run() {
    var theme = TablelistFleets.contextmenu.curel.data('theme');
    var loadingId = 'remove_fleet_same_theme_' + theme;

    _g.log("Removing all fleet in theme ".concat(theme, "..."));

    _frame.app_main.loading_start(loadingId, false);

    _db.fleets.remove({
      theme: parseInt(theme)
    }, {
      multi: true
    }, function (err, numRemoved) {
      _frame.app_main.loading_complete(loadingId);

      _frame.modal.hide();

      _g.badgeMsg('已删除配置');

      if (_typeof(list) === 'object' && list.refresh) {
        list.refresh();
      }
    });
  };

  if (!TablelistFleets.elModalRemoveAllSameTheme) {
    TablelistFleets.elModalRemoveAllSameTheme = $('<form/>').append($('<p/>').html('是否删除所有该主题颜色的舰队配置？')).append($('<p class="actions"/>').append($('<button/>', {
      'type': 'submit',
      'class': 'button',
      'html': '是'
    })).append($('<button/>', {
      'type': 'button',
      'class': 'button',
      'html': '否'
    }).on('click', function () {
      _frame.modal.hide();
    }))).on('submit', function (e) {
      e.preventDefault();
      run();
      return false;
    });
  }

  _frame.modal.show(TablelistFleets.elModalRemoveAllSameTheme, '删除配置', {
    'classname': 'infos_fleet infos_fleet_remove',
    'detach': true
  });
};

TablelistFleets.menuOptionsItemsBuildsLocation = function () {
  return [$('<hr class="option-in-tablelist"/>'), $('<div class="option-in-tablelist option-filelocation"/>').html('<span>配置文件位置</span>').append(TablelistFleets.filelocation_selector = $('<input type="file" class="none" webkitdirectory/>').on('change', function (e) {
    TablelistFleets.migrateBuilds(TablelistFleets.filelocation_selector.val());
  })).append($('<button type="button">还原</button>').on('click', function () {
    TablelistFleets.migrateBuilds(node.path.join(node.gui.App.dataPath, 'NeDB'));
  })).append($('<button type="button">选择</button>').on('click', function () {
    TablelistFleets.filelocation_selector.click();
  }))];
};

TablelistFleets.migrateBuilds = function (location) {
  if (!location) return;
  if (location.indexOf(';') > -1) location = node.path.dirname(location.split(';')[0]);
  var n = 'fleets.json',
      exist = false,
      oldPath = Lockr.get('fleets-builds-file', node.path.join(node.gui.App.dataPath, 'NeDB', 'fleets.json')),
      newPath = node.path.join(location, n),
      chain = Q();
  if (oldPath === newPath) return;

  _frame.app_main.loading_start('tablelist_fleets_newlocation', false);

  TablelistFleets.filelocation_selector.prop('disabled', true);

  try {
    exist = node.fs.lstatSync(node.path.join(location, n)) ? true : false;
  } catch (e) {}

  function _done() {
    _frame.app_main.loading_complete('tablelist_fleets_newlocation');

    TablelistFleets.filelocation_selector.prop('disabled', false);
    TablelistFleets.filelocation_selector.val('');
    TablelistFleets.menuOptions.curTablelist = null;

    _frame.modal.hide();
  }

  if (exist) {
    chain = chain.then(function () {
      var deferred = Q.defer();

      if (!TablelistFleets.modalMigrateBuilds) {
        TablelistFleets.modalMigrateBuilds = $('<div/>').html("\u5728\u76EE\u6807\u76EE\u5F55\u53D1\u73B0\u8230\u961F\u914D\u7F6E\u6587\u4EF6 <strong>fleets.json</strong>").append($('<p class="actions"/>').append(TablelistFleets.modalMigrateBuildsButtonMerge = $('<button/>', {
          'class': 'button',
          'html': '合并配置'
        })).append(TablelistFleets.modalMigrateBuildsButtonOver = $('<button/>', {
          'class': 'button',
          'html': '替换目标文件'
        })).append(TablelistFleets.modalMigrateBuildsButtonNew = $('<button/>', {
          'class': 'button',
          'html': '新建配置文件'
        })));
      }

      var j = 1,
          newName;

      while (exist) {
        newName = 'fleets-' + j++ + '.json';

        try {
          exist = node.fs.lstatSync(node.path.join(location, newName)) ? true : false;
        } catch (e) {
          exist = false;
        }
      }

      TablelistFleets.modalMigrateBuildsButtonMerge.off('click').on('click', function () {
        Q.fcall(function () {
          TablelistFleets.modalMigrateBuilds.detach();
          if (TablelistFleets.menuOptions.curTablelist) return TablelistFleets.menuOptions.curTablelist.importBuilds(TablelistFleets.filelocation_selector, n);
          return true;
        }).then(function () {
          deferred.resolve();
        });
      });
      TablelistFleets.modalMigrateBuildsButtonOver.off('click').on('click', function () {
        node.fs.unlink(node.path.join(location, n), function (err) {
          deferred.resolve();
        });
      });
      TablelistFleets.modalMigrateBuildsButtonNew.html("\u65B0\u5EFA ".concat(newName)).off('click').on('click', function () {
        n = newName;
        deferred.resolve();
      });

      _frame.modal.show(TablelistFleets.modalMigrateBuilds, '配置文件冲突', {
        'classname': 'infos_fleet infos_fleet_import',
        'detach': true,
        'onClose': function onClose() {
          _done();
        }
      });

      return deferred.promise;
    });
  }

  chain = chain.then(function () {
    newPath = node.path.join(location, n);

    _g.log("migrate to ".concat(newPath));

    Lockr.set('fleets-builds-file', newPath);
    _db.fleets = new node.nedb({
      filename: newPath
    });
    node.mkdirp.sync(location);
  }).then(function () {
    var deferred = Q.defer(),
        cbCalled = false,
        rd = node.fs.createReadStream(oldPath);
    rd.on("error", function (err) {
      done(err);
    });
    var wr = node.fs.createWriteStream(newPath);
    wr.on("error", function (err) {
      done(err);
    });
    wr.on("close", function (ex) {
      done();
    });
    rd.pipe(wr);

    function done(err) {
      if (!cbCalled) {
        deferred.resolve();
        cbCalled = true;
      }
    }

    return deferred.promise;
  }).then(function () {
    var deferred = Q.defer();

    _db.fleets.loadDatabase(function () {
      deferred.resolve();
    });

    return deferred.promise;
  })["catch"](function (err) {
    _g.err(err, '[舰队] 转移配置文件');
  }).done(_done);
};

var TablelistEntities = function (_Tablelist4) {
  _inherits(TablelistEntities, _Tablelist4);

  var _super7 = _createSuper(TablelistEntities);

  function TablelistEntities(container, options) {
    var _this28;

    _classCallCheck(this, TablelistEntities);

    _this28 = _super7.call(this, container, options);

    _frame.app_main.loading.push('tablelist_' + _this28._index);

    _frame.app_main.is_loaded = false;

    if (container.children('.tablelist-list').length) {
      _this28.init_parse();
    } else if (_this28.init_new) {
      _this28.init_new(options);
    }

    return _this28;
  }

  _createClass(TablelistEntities, [{
    key: "init_parse",
    value: function init_parse() {
      this.generated = true;

      _frame.app_main.loaded('tablelist_' + this._index, true);
    }
  }]);

  return TablelistEntities;
}(Tablelist);

TablelistEntities.prototype.append_item_cv = function (entity) {
  return _tmpl.link_entity(entity, null, false, entity.relation.cv.length).addClass('unit cv');
};

TablelistEntities.prototype.append_item_illustrator = function (entity) {
  return $('<a/>', {
    'class': 'unit illustrator',
    'href': '?infos=entity&id=' + entity.id,
    'html': entity._name + ' (' + entity.relation.illustrator.length + ')'
  });
};

TablelistEntities.prototype.append_items = function (title, arr, callback_append_item) {
  var container;
  this.dom.container.append($('<div/>', {
    'class': 'typetitle',
    'html': title
  })).append(container = _p.el.flexgrid.create().addClass('tablelist-list'));
  arr.forEach(function (item) {
    container.appendDOM(callback_append_item(item));
  }, this);
};

TablelistEntities.prototype.init_new = function (options) {
  options = options || {};
  var listCV = [],
      listIllustrator = [];

  for (var _i13 in _g.data.entities) {
    var entity = _g.data.entities[_i13];
    if (!entity.relation) continue;
    if (entity.relation.cv && entity.relation.cv.length) listCV.push(entity);
    if (entity.relation.illustrator && entity.relation.illustrator.length) listIllustrator.push(entity);
  }

  this.append_items('声优', listCV.sort(function (a, b) {
    return b.relation.cv.length - a.relation.cv.length;
  }), this.append_item_cv);
  this.append_items('画师', listIllustrator.sort(function (a, b) {
    return b.relation.illustrator.length - a.relation.illustrator.length;
  }), this.append_item_illustrator);
  this.generated = true;

  _frame.app_main.loaded('tablelist_' + this._index, true);
};

TablelistEquipments.prototype.append_item = function (equipment_data, collection_id) {
  var tr = $('<tr/>', {
    'class': 'row',
    'data-equipmentid': equipment_data['id'],
    'data-equipmentcollection': collection_id,
    'data-infos': '[[EQUIPMENT::' + equipment_data['id'] + ']]',
    'data-equipmentedit': this.dom.container.hasClass('equipmentlist-edit') ? 'true' : null,
    'data-equipmenttype': equipment_data.type
  }).on('click', function (e, forceInfos) {
    if (!forceInfos && _frame.app_main.is_mode_selection()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (TablelistEquipments.types.indexOf(equipment_data.type) > -1) _frame.app_main.mode_selection_callback(equipment_data['id']);
    }
  }).appendTo(this.dom.tbody);

  function _val(val, show_zero) {
    if (!show_zero && (val == 0 || val === '0' || val === '')) return '-';
    return val;
  }

  this.columns.forEach(function (currentValue) {
    switch (currentValue[1]) {
      case ' ':
        $('<th/>').html(equipment_data.getName()).appendTo(tr);
        break;

      case 'range':
        $('<td data-stat="range" data-value="' + equipment_data['stat']['range'] + '"/>').html(equipment_data['stat']['range'] ? _g.getStatRange(equipment_data['stat']['range']) : '<small class="zero">-</small>').appendTo(tr);
        break;

      case 'improvable':
        $('<td data-stat="range" data-value="' + (equipment_data['improvable'] ? '1' : '0') + '"/>').html(equipment_data['improvable'] ? '✓' : '<small class="zero">-</small>').appendTo(tr);
        break;

      default:
        $('<td data-stat="' + currentValue[1] + '" data-value="' + (equipment_data['stat'][currentValue[1]] || 0) + '"/>').addClass(equipment_data['stat'][currentValue[1]] < 0 ? 'negative' : '').html(_val(equipment_data['stat'][currentValue[1]])).appendTo(tr);
        break;
    }
  });
  return tr;
};

TablelistEquipments.prototype.append_all_items = function () {
  this.generated = false;
  this.dom.types = [];

  function _do(i, j) {
    if (_g.data.item_id_by_type[i]) {
      if (!j) {
        var data_equipmenttype = _g.data.item_types[_g.item_type_order[i]];
        this.dom.types.push($('<tr class="typetitle" data-equipmentcollection="' + _g.data.item_id_by_type[i]['collection'] + '" data-type="' + data_equipmenttype.id + '">' + '<th colspan="' + (this.columns.length + 1) + '">' + '<span style="background-image: url(../app/assets/images/itemicon/' + data_equipmenttype['icon'] + '.png)"></span>' + data_equipmenttype['name']['zh_cn'] + TablelistEquipments.gen_helper_equipable_on(data_equipmenttype['id']) + '</th></tr>').appendTo(this.dom.tbody));
      }

      this.append_item(_g.data.items[_g.data.item_id_by_type[i]['equipments'][j]], _g.data.item_id_by_type[i]['collection']);
      setTimeout(function () {
        if (j >= _g.data.item_id_by_type[i]['equipments'].length - 1) {
          _do(i + 1, 0);
        } else {
          _do(i, j + 1);
        }
      }, 0);
    } else {
      this.thead_redraw();
      this.generated = true;
      this.apply_types_check();

      _frame.app_main.loaded('tablelist_' + this._index, true);
    }
  }

  _do = _do.bind(this);

  _do(0, 0);
};

TablelistEquipments.prototype.init_new = function () {
  this.dom.filter_container = $('<div class="options"/>').appendTo(this.dom.container);
  this.dom.filters = $('<div class="filters"/>').appendTo(this.dom.filter_container);
  var checked = false;
  this.dom.type_radios = {};

  for (var i in _g.data.item_type_collections) {
    var radio_id = Tablelist.genId();
    this.dom.type_radios[i] = $('<input type="radio" name="equipmentcollection" id="' + radio_id + '" value="' + i + '"/>').prop('checked', !checked).on('change', function () {
      this.dom.table_container_inner.scrollTop(0);
      this.thead_redraw();
    }.bind(this)).prependTo(this.dom.container);
    $('<label class="tab container" for="' + radio_id + '" data-equipmentcollection="' + i + '"/>').html('<i></i>' + '<span>' + _g.data.item_type_collections[i]['name']['zh_cn'].replace(/\&/g, '<br/>') + '</span>').appendTo(this.dom.filters);
    checked = true;
  }

  this.dom.filter_types = $('<input name="types" type="hidden"/>').prependTo(this.dom.container);
  this.dom.table_container = $('<div class="fixed-table-container"/>').appendTo(this.dom.container);
  this.dom.table_container_inner = $('<div class="fixed-table-container-inner"/>').appendTo(this.dom.table_container);
  this.dom.table = $('<table class="equipments hashover hashover-column"/>').appendTo(this.dom.table_container_inner);

  function gen_thead(arr) {
    this.dom.thead = $('<thead/>');
    var tr = $('<tr/>').appendTo(this.dom.thead);
    arr.forEach(function (currentValue) {
      if (_typeof(currentValue) == 'object') {
        $('<td data-stat="' + currentValue[1] + '"/>').html('<div class="th-inner-wrapper"><span><span>' + currentValue[0] + '</span></span></div>').appendTo(tr);
      } else {
        $('<th/>').html('<div class="th-inner-wrapper"><span><span>' + currentValue[0] + '</span></span></div>').appendTo(tr);
      }
    });
    return this.dom.thead;
  }

  gen_thead = gen_thead.bind(this);
  gen_thead(this.columns).appendTo(this.dom.table);
  this.dom.tbody = $('<tbody/>').appendTo(this.dom.table);
  this.append_all_items();
  this.dom.msg_container = $('<div class="msgs"/>').appendTo(this.dom.container);
  if (!_config.get('hide-equipmentsinfos')) this.dom.msg_container.attr('data-msgs', 'equipmentsinfos');
  var equipmentsinfos = $('<div class="equipmentsinfos"/>').html('点击装备查询初装舰娘等信息').appendTo(this.dom.msg_container);
  $('<button/>').html('&times;').on('click', function () {
    this.dom.msg_container.removeAttr('data-msgs');

    _config.set('hide-equipmentsinfos', true);
  }.bind(this)).appendTo(equipmentsinfos);
};

TablelistShips.prototype.append_item = function (ship_data, header_index) {
  var donotcompare = _g.data.ship_types[ship_data['type']]['donotcompare'] ? true : false,
      tr = $('<tr/>', {
    'class': 'row',
    'data-shipid': ship_data['id'],
    'data-header': header_index,
    'data-trindex': this.trIndex,
    'data-infos': '[[SHIP::' + ship_data['id'] + ']]',
    'data-shipedit': this.dom.container.hasClass('shiplist-edit') ? 'true' : null,
    'data-donotcompare': donotcompare ? true : null
  }).on('click', function (e, forceInfos) {
    if (!forceInfos && e.target.tagName.toLowerCase() != 'em' && _frame.app_main.is_mode_selection()) {
      e.preventDefault();
      e.stopImmediatePropagation();
      e.stopPropagation();
      if (!donotcompare) _frame.app_main.mode_selection_callback(ship_data['id']);
    }
  }).insertAfter(this.last_item),
      name = ship_data['name'][_g.lang] + (ship_data['name']['suffix'] ? '<small>' + _g.data.ship_namesuffix[ship_data['name']['suffix']][_g.lang] + '</small>' : ''),
      checkbox = $('<input type="checkbox" class="compare"/>').prop('disabled', donotcompare).on('click, change', function (e, not_trigger_check) {
    if (checkbox.prop('checked')) tr.attr('compare-checked', true);else tr.removeAttr('compare-checked');
    this.compare_btn_show(checkbox.prop('checked'));
    if (!not_trigger_check) this.header_checkbox[header_index].trigger('docheck');
  }.bind(this)),
      label = checkbox.add($('<label class="checkbox"/>')),
      has_extra_illust = false,
      seriesData = ship_data.getSeriesData();
  seriesData.forEach(function (data_cur, i) {
    var data_prev = i ? seriesData[i - 1] : null;
    has_extra_illust = data_cur.illust_extra && data_cur.illust_extra.length && data_cur.illust_extra[0] ? true : false;
    if (!has_extra_illust && data_cur.illust_delete && data_prev) has_extra_illust = data_prev.illust_extra && data_prev.illust_extra.length && data_prev.illust_extra[0] ? true : false;
  });
  this.last_item = tr;
  this.trIndex++;
  this.header_checkbox[header_index].data('ships', this.header_checkbox[header_index].data('ships').add(tr));
  tr.data('checkbox', checkbox);
  this.checkbox[ship_data['id']] = checkbox;

  function _val(val, show_zero) {
    if (!show_zero && (val == 0 || val == '0')) return '-';
    if (val == -1 || val == '-1') return '?';
    return val;
  }

  this.columns.forEach(function (currentValue, i) {
    switch (currentValue[1]) {
      case ' ':
        $('<th/>').html('<a href="?infos=ship&id=' + ship_data['id'] + '"' + (has_extra_illust ? ' icon="hanger"' : '') + '>' + '<img src="../pics/ships/' + ship_data['id'] + '/0.webp" contextmenu="disabled"/>' + '<strong>' + name + '</strong>' + '</a>' + '<em></em>').prepend(label).appendTo(tr);
        break;

      case 'nightpower':
        var datavalue = /^(9|10|11)$/.test(ship_data['type']) ? 0 : parseInt(ship_data['stat']['fire_max'] || 0) + parseInt(ship_data['stat']['torpedo_max'] || 0);
        $('<td data-stat="nightpower"/>').attr('data-value', datavalue).html(_val(datavalue)).appendTo(tr);
        break;

      case 'asw':
        $('<td data-stat="asw" />').attr('data-value', ship_data['stat']['asw_max'] || 0).html(_val(ship_data['stat']['asw_max'], /^(5|8|9|12|24)$/.test(ship_data['type']))).appendTo(tr);
        break;

      case 'hp':
        $('<td data-stat="hp" data-value="' + (ship_data['stat']['hp'] || 0) + '"/>').html(_val(ship_data['stat']['hp'])).appendTo(tr);
        break;

      case 'carry':
        $('<td data-stat="carry" data-value="' + (ship_data['stat']['carry'] || 0) + '"/>').html(_val(ship_data['stat']['carry'])).appendTo(tr);
        break;

      case 'speed':
        $('<td data-stat="speed" data-value="' + (ship_data['stat']['speed'] || 0) + '"/>').html(_g.getStatSpeed(ship_data['stat']['speed'])).appendTo(tr);
        break;

      case 'range':
        $('<td data-stat="range" data-value="' + (ship_data['stat']['range'] || 0) + '"/>').html(_g.getStatRange(ship_data['stat']['range'])).appendTo(tr);
        break;

      case 'luck':
        $('<td data-stat="luck" data-value="' + (ship_data['stat']['luck'] || 0) + '"/>').html(ship_data['stat']['luck'] + '<sup>' + ship_data['stat']['luck_max'] + '</sup>').appendTo(tr);
        break;

      case 'consum_fuel':
        $('<td data-stat="consum_fuel"/>').attr('data-value', ship_data['consum']['fuel'] || 0).html(_val(ship_data['consum']['fuel'])).appendTo(tr);
        break;

      case 'consum_ammo':
        $('<td data-stat="consum_ammo"/>').attr('data-value', ship_data['consum']['ammo'] || 0).html(_val(ship_data['consum']['ammo'])).appendTo(tr);
        break;

      case 'extra_illust':
        $('<td data-stat="' + currentValue[1] + '" data-value="' + (has_extra_illust ? '1' : '0') + '"/>').html(has_extra_illust ? '✓' : '<small class="zero">-</small>').appendTo(tr);
        break;

      default:
        $('<td data-stat="' + currentValue[1] + '"/>').attr('data-value', ship_data['stat'][currentValue[1] + '_max'] || 0).html(_val(ship_data['stat'][currentValue[1] + '_max'])).appendTo(tr);
        break;
    }
  });

  if (ship_data.remodel && ship_data.remodel.next && _g.data.ships[ship_data.remodel.next] && _g.ship_type_order_map[ship_data['type']] == _g.ship_type_order_map[_g.data.ships[ship_data.remodel.next]['type']] && ship_data['name']['ja_jp'] == _g.data.ships[ship_data.remodel.next]['name']['ja_jp']) {
    tr.addClass('premodeled');
  }

  return tr;
};

TablelistShips.prototype.create_title_checkbox = function (checkbox_id, index) {
  return $('<input type="checkbox" id="' + checkbox_id + '"/>').prop('disabled', _g.data['ship_type_order'][index]['donotcompare'] ? true : false).data('ships', $()).on({
    'change': function change() {
      checkbox.data('ships').filter(':visible').each(function (_index, element) {
        $(element).data('checkbox').prop('checked', checkbox.prop('checked')).trigger('change', [true]);
      });
    },
    'docheck': function docheck() {
      var trs = checkbox.data('ships').filter(':visible'),
          checked = trs.filter('[compare-checked=true]');

      if (!checked.length) {
        checkbox.prop({
          'checked': false,
          'indeterminate': false
        });
      } else if (checked.length < trs.length) {
        checkbox.prop({
          'checked': false,
          'indeterminate': true
        });
      } else {
        checkbox.prop({
          'checked': true,
          'indeterminate': false
        });
      }
    }
  });
};

TablelistShips.prototype.append_all_items = function () {
  var _do = function _do(i, j) {
    if (_g.data.ship_id_by_type[i]) {
      if (!j) {
        var data_shiptype, _checkbox2;

        if (_typeof(_g.ship_type_order[i]) == 'object') {
          data_shiptype = _g.data.ship_types[_g.ship_type_order[i][0]];
        } else {
          data_shiptype = _g.data.ship_types[_g.ship_type_order[i]];
        }

        var checkbox_id = Tablelist.genId();
        _this29.last_item = $('<tr class="typetitle" data-trindex="' + _this29.trIndex + '">' + '<th colspan="' + (_this29.columns.length + 1) + '">' + '<label class="checkbox" for="' + checkbox_id + '">' + _g.data['ship_type_order'][i]['name']['zh_cn'] + (_g.data['ship_type_order'][i]['name']['zh_cn'] == data_shiptype.name.zh_cn ? '<small>[' + data_shiptype['code'] + ']</small>' : '') + '</label></th></tr>').appendTo(_this29.dom.tbody);
        _this29.trIndex++;
        var k = 0;

        while (k < _this29.flexgrid_empty_count) {
          var _index = _this29.trIndex + _g.data.ship_id_by_type[i].length + k;

          $('<tr class="empty" data-trindex="' + _index + '" data-shipid/>').appendTo(_this29.dom.tbody);
          k++;
        }

        _checkbox2 = _this29.create_title_checkbox(checkbox_id, i);
        _this29.header_checkbox[i] = _checkbox2;
      }

      _this29.append_item(_g.data.ships[_g.data.ship_id_by_type[i][j]], i);

      setTimeout(function () {
        if (j >= _g.data.ship_id_by_type[i].length - 1) {
          _this29.trIndex += _this29.flexgrid_empty_count;

          _do(i + 1, 0);
        } else {
          _do(i, j + 1);
        }
      }, 0);
    } else {
      _this29.mark_high();

      _this29.thead_redraw();

      _frame.app_main.loaded('tablelist_' + _this29._index, true);

      delete _this29.last_item;
    }
  };

  _do(0, 0);
};

TablelistShips.prototype.init_new = function () {
  if (!this || !this.dom) return;
  this.dom.filter_container = $('<div class="options"/>').appendTo(this.dom.container);
  this.dom.filters = $('<div class="filters"/>').appendTo(this.dom.filter_container);
  this.dom.exit_compare = $('<div class="exit_compare"/>').append($('<button icon="arrow-set2-left"/>').html('结束对比').on('click', function () {
    this.compare_end();
  }.bind(this))).append($('<button icon="checkbox-checked"/>').html('继续选择').on('click', function () {
    this.compare_continue();
  }.bind(this))).appendTo(this.dom.filter_container);
  this.dom.btn_compare_sort = $('<button icon="sort-amount-desc" class="disabled"/>').html('点击表格标题可排序').on('click', function () {
    if (!this.dom.btn_compare_sort.hasClass('disabled')) this.sort_table_restore();
  }.bind(this)).appendTo(this.dom.exit_compare);
  this.append_option('checkbox', 'hide-premodel', '仅显示同种同名舰最终版本', _config.get('shiplist-filter-hide-premodel') === 'false' ? null : true, null, {
    'onchange': function (e, input) {
      _config.set('shiplist-filter-hide-premodel', input.prop('checked'));

      this.dom.filter_container.attr('filter-hide-premodel', input.prop('checked'));
      this.thead_redraw();
    }.bind(this)
  });
  this.append_option('radio', 'viewtype', null, [['card', ''], ['list', '']], null, {
    'radio_default': _config.get('shiplist-viewtype'),
    'onchange': function (e, input) {
      if (input.is(':checked')) {
        _config.set('shiplist-viewtype', input.val());

        this.dom.filter_container.attr('viewtype', input.val());
        this.thead_redraw();
      }
    }.bind(this)
  }).attr('data-caption', '布局');
  this.dom.filters.find('input').trigger('change');
  this.dom.table_container = $('<div class="fixed-table-container"/>').appendTo(this.dom.container);
  this.dom.table_container_inner = $('<div class="fixed-table-container-inner"/>').appendTo(this.dom.table_container);
  this.dom.table = $('<table class="ships hashover hashover-column"/>').appendTo(this.dom.table_container_inner);

  function gen_thead(arr) {
    this.dom.thead = $('<thead/>');
    var tr = $('<tr/>').appendTo(this.dom.thead);
    arr.forEach(function (currentValue, i) {
      if (_typeof(currentValue) == 'object') {
        var td = $('<td data-stat="' + currentValue[1] + '"/>').html('<div class="th-inner-wrapper"><span><span>' + currentValue[0] + '</span></span></div>').on('click', function () {
          this.sort_table_from_theadcell(td);
        }.bind(this)).appendTo(tr);
      } else {
        $('<th/>').html('<div class="th-inner-wrapper"><span><span>' + currentValue[0] + '</span></span></div>').appendTo(tr);
      }
    }, this);
    return this.dom.thead;
  }

  gen_thead = gen_thead.bind(this);
  gen_thead(this.columns).appendTo(this.dom.table);
  this.dom.tbody = $('<tbody/>').appendTo(this.dom.table);
  this.dom.table.on('contextmenu.contextmenu_ship', 'tr[data-shipid]', function (e) {
    this.contextmenu_show($(e.currentTarget), null, e);
  }.bind(this)).on('click.contextmenu_ship', 'tr[data-shipid]>th em', function (e) {
    this.contextmenu_show($(e.currentTarget).parent().parent());
    e.stopImmediatePropagation();
    e.stopPropagation();
  }.bind(this));

  if (_g.data.ship_types) {
    this.append_all_items();
  } else {
    $('<p/>').html('暂无数据...').appendTo(this.dom.table_container_inner);
  }

  this.dom.msg_container = $('<div class="msgs"/>').appendTo(this.dom.container);
  if (!_config.get('hide-compareinfos')) this.dom.msg_container.attr('data-msgs', 'compareinfos');
  var compareinfos = $('<div class="compareinfos"/>').html('点击舰娘查询详细信息，勾选舰娘进行对比').appendTo(this.dom.msg_container);
  $('<button/>').html('&times;').on('click', function () {
    this.dom.msg_container.removeAttr('data-msgs');

    _config.set('hide-compareinfos', true);
  }.bind(this)).appendTo(compareinfos);
  $('<div class="comparestart"/>').html('开始对比').on('click', function () {
    this.compare_start();
  }.bind(this)).appendTo(this.dom.msg_container);
};