"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _index = require("../../ActionMenu/index");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../icon/OptionsDots/index");

var _index4 = _interopRequireDefault(_index3);

var _constants = require("../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonExtraActions = function ButtonExtraActions(_ref) {
  var label = _ref.label,
      size = _ref.size,
      actions = _ref.actions;
  return _react2.default.createElement("div", {
    id: _constants.NAMESPACES.TOOLBAR.BUTTON_EXTRA_ACTIONS,
    title: label,
    className: "mh2 order-4"
  }, _react2.default.createElement(_index2.default, {
    hideCaretIcon: true,
    buttonProps: {
      variation: _constants.BUTTON.VARIATION.TERTIARY,
      icon: _react2.default.createElement("span", {
        className: "c-on-base"
      }, _react2.default.createElement(_index4.default, null)),
      size: size
    },
    options: actions.map(function (action) {
      return {
        label: action.label,
        onClick: action.onClick
      };
    })
  }));
};

ButtonExtraActions.defaultProps = {
  size: _constants.BUTTON.SIZE.SMALL
};
exports.default = ButtonExtraActions;