"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ArrowDownIcon = require("../Dropdown/ArrowDownIcon");

var _ArrowDownIcon2 = _interopRequireDefault(_ArrowDownIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function paddingRightClassFromSize(size) {
  var _size$large$small$siz;

  return (_size$large$small$siz = {}, _size$large$small$siz[size] = 'pr4', _size$large$small$siz.large = 'pr5', _size$large$small$siz.small = 'pr3', _size$large$small$siz)[size];
}

var DropdownIndicator = function DropdownIndicator(_ref) {
  var innerProps = _ref.innerProps,
      selectProps = _ref.selectProps,
      size = _ref.size;
  var arrowColorClassName = selectProps.isDisabled ? 'c-disabled' : 'c-action-primary';
  return _react2.default.createElement("div", _extends({
    className: "flex items-center h-100 " + paddingRightClassFromSize(size) + " pointer " + arrowColorClassName
  }, innerProps), _react2.default.createElement(_ArrowDownIcon2.default, {
    size: 18
  }));
};

DropdownIndicator.propTypes = {
  getStyles: _propTypes2.default.func,
  innerProps: _propTypes2.default.object,
  size: _propTypes2.default.oneOf(['large', 'regular', 'small']),
  selectProps: _propTypes2.default.object.isRequired
};
exports.default = DropdownIndicator;