"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Portal = require("./Portal");

var _Portal2 = _interopRequireDefault(_Portal);

var _hooks = require("./hooks");

var _tooltip = require("./tooltip.css");

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var OFFSET = 16;

var hasComputedDimensions = function hasComputedDimensions(rect) {
  return rect && rect.width && rect.height;
};

var propTypes = {
  /** Tooltip content */
  label: _propTypes2.default.node.isRequired,

  /** Tooltip position */
  position: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),

  /** Tooltip font size */
  size: _propTypes2.default.oneOf(['mini', 'small']),

  /** Fallback position (when the tooltip cannot appear in the original position) */
  fallbackPosition: _propTypes2.default.oneOf(['top', 'bottom', 'left', 'right']),

  /** Boolean to see if the popup should appear */
  visible: _propTypes2.default.bool,

  /** Delay to show the tooltip */
  delay: _propTypes2.default.number,

  /** Tooltip animation duration */
  duration: _propTypes2.default.number,

  /** Tooltip timming function used to animate the tooltip */
  timmingFn: _propTypes2.default.string,

  /** Child ref. Used to correctly position the tooltip */
  childRef: _propTypes2.default.shape({
    current: _propTypes2.default.instanceOf(HTMLElement)
  })
};
var defaultProps = {
  visible: false
};

var TooltipPopup = function TooltipPopup(_ref) {
  var position = _ref.position,
      size = _ref.size,
      fallbackPosition = _ref.fallbackPosition,
      label = _ref.label,
      visible = _ref.visible,
      delay = _ref.delay,
      duration = _ref.duration,
      timmingFn = _ref.timmingFn,
      childRef = _ref.childRef;

  var _useState = (0, _react.useState)(visible),
      showPopup = _useState[0],
      setShowPopup = _useState[1];

  var popupRef = (0, _react.useRef)();
  var childRect = (0, _hooks.useRect)(childRef, visible);
  var popupRect = (0, _hooks.useRect)(popupRef, visible);
  (0, _react.useEffect)(function () {
    if (visible) {
      setShowPopup(true);
    }
  }, [visible]);
  var popupClasses = (0, _classnames2.default)('absolute pv3 ph4 bg-base--inverted c-on-base--inverted br2 shadow-1 mw5 overflow-hidden', _tooltip2.default.popup, {
    dn: !visible && !showPopup || !childRect || !popupRect,
    'o-0': !visible || !hasComputedDimensions(popupRect),
    'o-100': visible && hasComputedDimensions(popupRect),
    't-mini': size === 'mini',
    't-small': size === 'small'
  });
  var positionStyle = getStyles(childRect, popupRect, position, fallbackPosition);
  return _react2.default.createElement(_Portal2.default, null, _react2.default.createElement("div", {
    role: "tooltip",
    className: popupClasses,
    style: _extends({}, positionStyle, {
      transition: "opacity " + duration + "ms " + timmingFn + " " + delay + "ms"
    }),
    ref: popupRef,
    onTransitionEnd: function onTransitionEnd() {
      return setShowPopup(visible);
    }
  }, label));
};

var getStyles = function getStyles(childRect, popupRect, position, fallbackPosition) {
  return childRect && popupRect && window && hasComputedDimensions(popupRect) ? getPopupPosition(childRect, popupRect, position, fallbackPosition) : {
    top: 0,
    left: 0
  };
};

var FALLBACK_POSITION = {
  top: 'right',
  right: 'bottom',
  bottom: 'left',
  left: 'top'
};

var getFallbackPosition = function getFallbackPosition(position, fallback) {
  return fallback || FALLBACK_POSITION[position];
};

var getPopupPosition = function getPopupPosition(childRect, popupRect, position, fallbackPosition) {
  return getPopupPositionRecursively(childRect, popupRect, position, fallbackPosition, position);
};

var getPopupPositionRecursively = function getPopupPositionRecursively(childRect, popupRect, position, fallbackPosition, originalPosition) {
  var horizontalMax = window.innerWidth + window.pageXOffset;
  var verticalMax = window.innerHeight + window.pageYOffset;
  var styles = {
    left: childRect.left + window.pageXOffset + (childRect.width - popupRect.width) / 2 + (position === 'right' ? (childRect.width + popupRect.width) / 2 + OFFSET : 0) - (position === 'left' ? (childRect.width + popupRect.width) / 2 + OFFSET : 0),
    top: childRect.top + window.pageYOffset - (position === 'top' ? popupRect.height + OFFSET : 0) + (position === 'bottom' ? childRect.height + OFFSET : 0) + (position === 'right' || position === 'left' ? (childRect.height - popupRect.height) / 2 : 0)
  };
  var collisions = {
    top: styles.top < window.pageYOffset,
    right: styles.left + popupRect.width > horizontalMax,
    bottom: styles.top + popupRect.height > verticalMax,
    left: styles.left < window.pageXOffset
  };

  if (collisions[position]) {
    fallbackPosition = getFallbackPosition(position, fallbackPosition); // If there is no place without collisions, it will not be shown

    return fallbackPosition === originalPosition ? null : getPopupPositionRecursively(childRect, popupRect, fallbackPosition, null, originalPosition);
  }

  var top = Math.max(window.pageYOffset + 1, Math.min(styles.top, verticalMax - popupRect.height - 1));
  var left = Math.max(window.pageXOffset + 1, Math.min(styles.left, horizontalMax - popupRect.width - 1));
  var transform = "translate3d(" + Math.round(left) + "px, -" + Math.round(document.body.offsetHeight - top) + "px, 0)";
  return {
    transform: transform,
    WebkitTransform: transform
  };
};

TooltipPopup.propTypes = propTypes;
TooltipPopup.defaultProps = defaultProps;
exports.default = TooltipPopup;