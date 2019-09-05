"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Container = require("./Container");

var _Container2 = _interopRequireDefault(_Container);

var _ButtonGroup = require("./ButtonGroup");

var _ButtonGroup2 = _interopRequireDefault(_ButtonGroup);

var _InputSearch = require("./InputSearch");

var _InputSearch2 = _interopRequireDefault(_InputSearch);

var _InputCustom = require("./InputCustom");

var _InputCustom2 = _interopRequireDefault(_InputCustom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Toolbar = function Toolbar(_ref) {
  var children = _ref.children;

  var hasSearchBar = _react2.default.Children.toArray(children).some(function (child) {
    return child.type.name === 'InputSearch' || 'UNSAFE_InputCustom';
  });

  return _react2.default.createElement(_Container2.default, {
    justify: hasSearchBar ? 'between' : 'end'
  }, children);
};

Toolbar.InputSearch = _InputSearch2.default;
Toolbar.ButtonGroup = _ButtonGroup2.default;
Toolbar.UNSAFE_InputCustom = _InputCustom2.default;
exports.default = Toolbar;