"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TooltipPopup = require("./TooltipPopup");

var _TooltipPopup2 = _interopRequireDefault(_TooltipPopup);

var _hooks = require("./hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Label to be shown. As element, can be a string, number...*/
  label: _propTypes2.default.node.isRequired,

  /** Tooltip position */
  position: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),

  /** Tooltip font size */
  size: _propTypes2.default.oneOf(['mini', 'small']),

  /** Fallback position. Used when the tooltip cannot be shown in the original position */
  fallbackPosition: _propTypes2.default.oneOf(['top', 'right', 'bottom', 'left']),

  /** Event to trigger the tooltip */
  trigger: _propTypes2.default.oneOf(['click', 'hover', 'focus']),

  /** Element that will trigger the event */
  children: _propTypes2.default.element.isRequired,

  /** Delay to show and hide the tooltip (ms) */
  delay: _propTypes2.default.number,

  /** Tooltip animation duration (ms) */
  duration: _propTypes2.default.number,

  /** Tooltip timming function used to animate the tooltip */
  timmingFn: _propTypes2.default.string
};
var defaultProps = {
  trigger: 'hover',
  position: 'top',
  size: 'mini',
  delay: 0,
  duration: 200,
  timmingFn: 'ease-in-out'
};

var Tooltip = function Tooltip(_ref) {
  var trigger = _ref.trigger,
      children = _ref.children,
      popupProps = _objectWithoutPropertiesLoose(_ref, ["trigger", "children"]);

  var _useTooltip = (0, _hooks.useTooltip)({
    trigger: trigger
  }),
      handleTooltip = _useTooltip[0],
      tooltip = _useTooltip[1];

  var child = _react.Children.only(children);

  return _react2.default.createElement(_react2.default.Fragment, null, _react2.default.createElement(_TooltipPopup2.default, _extends({}, tooltip, popupProps)), (0, _react.cloneElement)(child, handleTooltip(child)));
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
exports.default = Tooltip;