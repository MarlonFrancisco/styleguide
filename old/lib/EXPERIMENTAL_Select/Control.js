"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactSelect = require("react-select");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function heightClassFromSize(size) {
  var _size$large$small$siz;

  return (_size$large$small$siz = {}, _size$large$small$siz[size] = 'min-h-regular', _size$large$small$siz.large = 'min-h-large', _size$large$small$siz.small = 'min-h-small', _size$large$small$siz)[size];
}

var Control = function Control(_ref) {
  var size = _ref.size,
      props = _objectWithoutPropertiesLoose(_ref, ["size"]);

  return _react2.default.createElement("div", {
    className: "pa0 " + heightClassFromSize(size)
  }, _react2.default.createElement(_reactSelect.components.Control, props));
};

Control.propTypes = {
  errorMessage: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['large', 'regular', 'small'])
};
exports.default = Control;