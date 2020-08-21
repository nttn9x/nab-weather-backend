"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = void 0;

var _nodeFetch = _interopRequireDefault(require("node-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getLocation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var weoid, cityName, url, _cityName, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            weoid = req.params.weoid;
            cityName = req.query.cityName;
            url = "".concat(process.env.WEATHER_API, "/location/").concat(weoid);

            if (!("cityName" in req.query)) {
              _context.next = 10;
              break;
            }

            _cityName = req.query.cityName;

            if (!(!_cityName || _cityName.length < 1)) {
              _context.next = 9;
              break;
            }

            res.send([]);
            return _context.abrupt("return");

          case 9:
            url = "".concat(url, "?query=").concat(_cityName);

          case 10:
            _context.next = 12;
            return (0, _nodeFetch["default"])(url).then(function (res) {
              return res.json();
            });

          case 12:
            data = _context.sent;
            res.send(data);
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));

  return function getLocation(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.getLocation = getLocation;
//# sourceMappingURL=weather.controller.js.map