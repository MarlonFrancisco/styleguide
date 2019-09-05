"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Header = require("./Header");

var _Header2 = _interopRequireDefault(_Header);

var _Rows = require("./Rows");

var _Rows2 = _interopRequireDefault(_Rows);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleTable = function SimpleTable() {
  return _react2.default.createElement("div", {
    id: _constants.NAMESPACES.TABLE,
    className: "order-1 mw-100"
  }, _react2.default.createElement("div", {
    className: "overflow-x-auto"
  }, _react2.default.createElement("div", {
    className: "dt w-100",
    style: {
      borderSpacing: 0
    }
  }, _react2.default.createElement(_Header2.default, null), _react2.default.createElement(_Rows2.default, null))));
};

exports.default = (0, _react.memo)(SimpleTable);