"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UNSAFE_InputCustom = function UNSAFE_InputCustom(_ref) {
  var input = _ref.input;
  return _react2.default.createElement("span", {
    className: "order-0 w-40",
    id: _constants.NAMESPACES.TOOLBAR.INPUT_SEARCH
  }, input);
};

exports.default = UNSAFE_InputCustom;