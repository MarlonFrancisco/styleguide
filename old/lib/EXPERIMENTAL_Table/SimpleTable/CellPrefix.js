"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../icon/CaretRight/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../icon/CaretDown/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../ButtonWithIcon/index.js");

var _index6 = _interopRequireDefault(_index5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Arrow = function Arrow(_ref) {
  var active = _ref.active,
      onClick = _ref.onClick;
  var icon = active ? _react2.default.createElement(_index4.default, null) : _react2.default.createElement(_index2.default, null);
  return _react2.default.createElement(_index6.default, {
    size: "small",
    onClick: onClick,
    icon: icon,
    variation: "tertiary"
  });
};

var CellPrefix = function CellPrefix(_ref2) {
  var children = _ref2.children,
      width = _ref2.width;
  return _react2.default.createElement("span", {
    className: "dib tr pr2",
    style: {
      width: width
    }
  }, children);
};

CellPrefix.Arrow = Arrow;
exports.default = CellPrefix;