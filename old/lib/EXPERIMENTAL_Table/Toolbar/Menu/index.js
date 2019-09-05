"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _context = require("./context");

var _useOutsideClick = require("../../hooks/useOutsideClick");

var _useOutsideClick2 = _interopRequireDefault(_useOutsideClick);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _Box = require("./Box");

var _Box2 = _interopRequireDefault(_Box);

var _Item = require("./Item");

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Menu = function Menu(_ref) {
  var button = _ref.button,
      box = _ref.box,
      children = _ref.children;

  var _useState = (0, _react.useState)(false),
      isBoxVisible = _useState[0],
      setBoxVisible = _useState[1];

  var buttonRef = (0, _react.useRef)(null);
  (0, _useOutsideClick2.default)(buttonRef, function () {
    return setBoxVisible(false);
  }, isBoxVisible);
  return _react2.default.createElement(_context.MenuProvider, {
    value: {
      isBoxVisible: isBoxVisible,
      setBoxVisible: setBoxVisible
    }
  }, _react2.default.createElement(_Button2.default, _extends({}, button, {
    ref: buttonRef,
    onClick: function onClick() {
      return setBoxVisible(!isBoxVisible);
    }
  }), isBoxVisible && _react2.default.createElement(_Box2.default, box, children)));
};

Menu.Item = _Item2.default;
exports.default = Menu;