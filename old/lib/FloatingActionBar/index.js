"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require("../Button/index.js");

var _index2 = _interopRequireDefault(_index);

require("./action-bar.global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  /** The Save button props (label + Styleguide Button props) */
  save: _propTypes2.default.shape(_extends({
    /** Label to save button */
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
  }, _index2.default.propTypes)),

  /** The Cancel button props (label + Styleguide Button props) */
  cancel: _propTypes2.default.shape(_extends({
    /** Label to save button */
    label: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node])
  }, _index2.default.propTypes))
};
var defaultProps = {
  save: {},
  cancel: {}
};

var FloatingActionBar = function FloatingActionBar(_ref) {
  var _ref$save = _ref.save,
      saveLabel = _ref$save.label,
      saveProps = _objectWithoutPropertiesLoose(_ref$save, ["label"]),
      _ref$cancel = _ref.cancel,
      cancelLabel = _ref$cancel.label,
      cancelProps = _objectWithoutPropertiesLoose(_ref$cancel, ["label"]);

  return _react2.default.createElement("div", {
    className: "styleguide__floating-action-bar shadow-active w-100 bg-base tr pv5 pr7 absolute fixed bottom-0 left-0 z-2"
  }, _react2.default.createElement("span", {
    className: "mr5"
  }, _react2.default.createElement(_index2.default, _extends({
    variation: "tertiary"
  }, cancelProps), cancelLabel)), _react2.default.createElement("span", null, _react2.default.createElement(_index2.default, _extends({
    variation: "primary"
  }, saveProps), saveLabel)));
};

FloatingActionBar.propTypes = propTypes;
FloatingActionBar.defaultProps = defaultProps;
exports.default = FloatingActionBar;