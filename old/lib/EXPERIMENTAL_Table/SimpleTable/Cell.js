"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _CellPrefix = require("./CellPrefix");

var _CellPrefix2 = _interopRequireDefault(_CellPrefix);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(_ref) {
  var id = _ref.id,
      children = _ref.children,
      isHeader = _ref.isHeader,
      width = _ref.width;
  return _react2.default.createElement("div", {
    id: _constants.NAMESPACES.CELL + "-" + id,
    style: {
      minWidth: width
    },
    className: "dtc truncate v-mid pa2 tl bb b--muted-4  " + (isHeader ? 'bt' : '')
  }, children);
};

Cell.Prefix = _CellPrefix2.default;
Cell.defaultProps = {
  isHeader: false
};
exports.default = Cell;