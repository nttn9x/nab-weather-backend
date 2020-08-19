"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _weather = _interopRequireDefault(require("./weather"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.use("/weather", _weather["default"]);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map