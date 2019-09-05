"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../InputSearch/index");

var _index2 = _interopRequireDefault(_index);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputSearch = function InputSearch(_ref) {
  var onSubmit = _ref.onSubmit,
      inputProps = _objectWithoutPropertiesLoose(_ref, ["onSubmit"]);

  return _react2.default.createElement("form", {
    id: _constants.NAMESPACES.TOOLBAR.INPUT_SEARCH,
    className: "order-0 w-40",
    onSubmit: onSubmit
  }, _react2.default.createElement(_index2.default, inputProps));
};

exports.default = InputSearch;