"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../Pagination/index");

var _index2 = _interopRequireDefault(_index);

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function Pagination(props) {
  return _react2.default.createElement("span", {
    id: _constants.NAMESPACES.PAGINATION,
    className: "order-2"
  }, _react2.default.createElement(_index2.default, props));
};

exports.default = Pagination;