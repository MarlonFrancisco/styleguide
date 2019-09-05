"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../ButtonWithIcon/index.js");

var _index2 = _interopRequireDefault(_index);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ICON_OPTICAL_COMPENSATION = {
  marginTop: 1.5
};
var Button = (0, _react.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
      title = _ref.title,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      icon = _ref.icon,
      isLoading = _ref.isLoading,
      children = _ref.children,
      label = _ref.label,
      variation = _ref.variation,
      isActiveOfGroup = _ref.isActiveOfGroup,
      size = _ref.size;
  var isTertiary = variation === _constants.BUTTON.VARIATION.TERTIARY;
  return _react2.default.createElement("div", {
    id: id,
    title: title,
    ref: ref,
    className: "relative mh2"
  }, _react2.default.createElement(_index2.default, {
    icon: _react2.default.createElement("span", {
      className: "" + (isTertiary ? 'c-on-base mh2' : ''),
      style: ICON_OPTICAL_COMPENSATION
    }, icon),
    isActiveOfGroup: isActiveOfGroup,
    disabled: disabled,
    isLoading: isLoading,
    variation: variation,
    size: size,
    onClick: onClick
  }, label && _react2.default.createElement("span", {
    className: isTertiary ? 'c-on-base' : ''
  }, label)), children);
});
Button.defaultProps = {
  variation: _constants.BUTTON.VARIATION.TERTIARY,
  isActiveOfGroup: false,
  size: _constants.BUTTON.SIZE.SMALL
};
exports.default = Button;