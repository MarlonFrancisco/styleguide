"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconBase = {
  width: 16,
  height: 16
};

var Info = function Info(_ref) {
  var color = _ref.color,
      size = _ref.size,
      block = _ref.block;
  var newSize = (0, _utils.calcIconSize)(iconBase, size);
  return _react2.default.createElement("svg", {
    className: (0, _utils.baseClassname)('info') + " " + (block ? 'db' : ''),
    width: newSize.width,
    height: newSize.height,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react2.default.createElement("path", {
    d: "M8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16ZM8 2C11.3 2 14 4.7 14 8C14 11.3 11.3 14 8 14C4.7 14 2 11.3 2 8C2 4.7 4.7 2 8 2Z",
    fill: color
  }), _react2.default.createElement("path", {
    d: "M7 12H9V7H7L7 12Z",
    fill: color
  }), _react2.default.createElement("path", {
    d: "M8 4C7.44772 4 7 4.44772 7 5C7 5.55228 7.44772 6 8 6C8.55228 6 9 5.55228 9 5C9 4.44772 8.55228 4 8 4Z",
    fill: color
  }));
};

Info.defaultProps = {
  color: 'currentColor',
  size: 16,
  block: false
};
Info.propTypes = {
  color: _propTypes2.default.string,
  size: _propTypes2.default.number,
  block: _propTypes2.default.bool
};
exports.default = Info;