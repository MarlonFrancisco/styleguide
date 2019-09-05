"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Button = require("../Button");

var _Button2 = _interopRequireDefault(_Button);

var _withForwardedRef = require("../../modules/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ButtonWithIcon =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ButtonWithIcon, _Component);

  function ButtonWithIcon() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ButtonWithIcon.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        icon = _this$props.icon,
        iconPosition = _this$props.iconPosition,
        size = _this$props.size,
        children = _this$props.children;
    var hasIconOnly = !children;
    var iconMargin;
    var paddingOffset;

    switch (size) {
      case 'small':
        iconMargin = 2;
        paddingOffset = 1;
        break;

      case 'large':
        iconMargin = 4;
        paddingOffset = 3;
        break;

      default:
        iconMargin = 3;
        paddingOffset = 2;
        break;
    }

    return _react2.default.createElement(_Button2.default, _extends({}, this.props, {
      icon: false,
      iconOnly: hasIconOnly
    }), hasIconOnly ? icon : _react2.default.createElement("span", {
      className: "flex items-center " + (iconPosition === 'left' ? "nr" + paddingOffset : "nl" + paddingOffset)
    }, icon && iconPosition === 'left' && _react2.default.createElement("div", {
      className: "mr" + iconMargin + " nl" + iconMargin + " flex items-center"
    }, icon), _react2.default.createElement("div", null, children), icon && iconPosition === 'right' && _react2.default.createElement("div", {
      className: "ml" + iconMargin + " nr" + iconMargin + " flex items-center"
    }, icon)));
  };

  return ButtonWithIcon;
}(_react.Component);

_defineProperty(ButtonWithIcon, "propTypes", {
  /** @ignore Button label */
  children: _propTypes2.default.node,

  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** The icon image */
  icon: _propTypes2.default.node,

  /** Position of the icon */
  iconPosition: _propTypes2.default.oneOf(['left', 'right']),

  /** @ignore Button size, used to calculate the margins of the icon.
   * It is then passed to the Button itself */
  size: _propTypes2.default.oneOf(['small', 'regular', 'large'])
});

_defineProperty(ButtonWithIcon, "defaultProps", {
  iconPosition: 'left'
});

exports.default = (0, _withForwardedRef.withForwardedRef)(ButtonWithIcon);