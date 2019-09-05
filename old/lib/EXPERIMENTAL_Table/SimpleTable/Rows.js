"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Row = require("./Row");

var _Row2 = _interopRequireDefault(_Row);

var _useTableContext2 = require("../hooks/useTableContext");

var _useTableContext3 = _interopRequireDefault(_useTableContext2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Component that maps items into Rows
 */
var Rows = function Rows() {
  var _useTableContext = (0, _useTableContext3.default)(),
      items = _useTableContext.items;

  return _react2.default.createElement(_react2.default.Fragment, null, items.map(function (data, index) {
    return _react2.default.createElement(_Row2.default, {
      key: "row-" + index,
      data: data,
      index: index
    });
  }));
};

exports.default = Rows;