"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../ActionMenu/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../ButtonGroup/index.js");

var _index4 = _interopRequireDefault(_index3);

var _index5 = require("../../icon/Plus/index.js");

var _index6 = _interopRequireDefault(_index5);

var _Button = require("./Button");

var _Button2 = _interopRequireDefault(_Button);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ButtonNewLine = function ButtonNewLine(_ref) {
  var actions = _ref.actions,
      buttonProps = _objectWithoutPropertiesLoose(_ref, ["actions"]);

  var namespace = _constants.NAMESPACES.TOOLBAR.BUTTON_NEWLINE;
  return actions ? _react2.default.createElement(_index4.default, {
    buttons: [_react2.default.createElement(_Button2.default, _extends({
      isActiveOfGroup: true,
      id: namespace,
      key: namespace,
      variation: _constants.BUTTON.VARIATION.PRIMARY,
      icon: _react2.default.createElement(_index6.default, {
        solid: true,
        size: _constants.ICON_SIZE.LIGHT
      })
    }, buttonProps)), _react2.default.createElement(_index2.default, {
      isActiveOfGroup: true,
      id: namespace + "__action-menu",
      key: "actions-button",
      buttonProps: buttonProps,
      options: actions
    })]
  }) : _react2.default.createElement(_Button2.default, _extends({
    id: _constants.NAMESPACES.TOOLBAR.BUTTON_NEWLINE,
    icon: _react2.default.createElement(_index6.default, {
      solid: true,
      size: _constants.ICON_SIZE.LIGHT
    }),
    variation: _constants.BUTTON.VARIATION.PRIMARY
  }, buttonProps));
};

ButtonNewLine.defaultProps = {
  size: _constants.BUTTON.SIZE.SMALL
};
exports.default = ButtonNewLine;