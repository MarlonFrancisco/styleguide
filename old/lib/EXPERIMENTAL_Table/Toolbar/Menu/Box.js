"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = function Box(_ref) {
  var alignMenu = _ref.alignMenu,
      height = _ref.height,
      width = _ref.width,
      noMargin = _ref.noMargin,
      borderClasses = _ref.borderClasses,
      children = _ref.children;
  var isAlignRight = alignMenu === _constants.BOX_ALIGNMENT.RIGHT;
  return _react2.default.createElement("div", {
    className: "absolute z-999 shadow-4 " + (isAlignRight ? 'right-0' : 'left-0') + " " + (borderClasses || 'b--muted-4 br2 ba') + " " + (noMargin ? '' : 'mt2 mh2'),
    style: {
      width: width
    }
  }, _react2.default.createElement("div", {
    className: "w-100 b2 br2 bg-base"
  }, _react2.default.createElement("div", {
    className: "overflow-auto",
    style: {
      height: height
    }
  }, children)));
};

exports.default = Box;