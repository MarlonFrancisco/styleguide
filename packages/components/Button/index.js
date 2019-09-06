"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _spinner = _interopRequireDefault(require("@vtex/spinner"));

var _withForwardedRef = require("@vtex/hocs/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Button =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Button, _Component);

  function Button() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      !_this.props.disabled && !_this.props.isLoading && _this.props.onClick && _this.props.onClick(event);
    });

    return _this;
  }

  var _proto = Button.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.icon) {
      console.warn('Button: The prop "icon" of the "Button" component has been deprecated, and will be removed in a future version. Please use the component "ButtonWithIcon" instead');
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        size = _this$props.size,
        block = _this$props.block,
        variation = _this$props.variation,
        icon = _this$props.icon,
        children = _this$props.children,
        isLoading = _this$props.isLoading,
        collapseLeft = _this$props.collapseLeft,
        collapseRight = _this$props.collapseRight,
        isGrouped = _this$props.isGrouped,
        isActiveOfGroup = _this$props.isActiveOfGroup,
        isFirstOfGroup = _this$props.isFirstOfGroup,
        isLastOfGroup = _this$props.isLastOfGroup,
        href = _this$props.href,
        target = _this$props.target,
        rel = _this$props.rel,
        referrerPolicy = _this$props.referrerPolicy,
        download = _this$props.download,
        noUpperCase = _this$props.noUpperCase,
        noWrap = _this$props.noWrap;
    var disabled = this.props.disabled || isLoading;
    var iconOnly = icon || this.props.iconOnly;
    var isTertiary = variation === 'tertiary' || variation === 'inverted-tertiary' || variation === 'danger-tertiary';
    var classes = 'vtex-button bw1 ba fw5 v-mid relative pa0 ';
    var labelClasses = 'flex items-center justify-center h-100 pv2 ';
    var loaderSize = 15;
    var horizontalPadding = 0;
    classes += !isGrouped ? 'br2 ' : '';
    classes += isFirstOfGroup ? 'br2 br--left ' : '';
    classes += isLastOfGroup ? 'br2 br--right ' : '';

    switch (size) {
      case 'small':
        classes += 'min-h-small t-action--small ';
        horizontalPadding = iconOnly ? 3 : 5;
        break;

      case 'large':
        classes += 'min-h-large t-action--large ';
        horizontalPadding = iconOnly ? 5 : 7;
        loaderSize = 25;
        break;

      default:
        classes += 'min-h-regular t-action ';
        horizontalPadding = iconOnly ? 4 : 6;
        loaderSize = 20;
        break;
    }

    if (!(isTertiary && (collapseLeft || collapseRight))) {
      labelClasses += "ph" + horizontalPadding + " ";
    }

    if (isTertiary && noUpperCase) {
      labelClasses += 'ttn ';
    }

    if (collapseLeft && isTertiary) {
      labelClasses += "nl1 ph1 " + (!disabled && 'hover-c-link') + " ";
    }

    if (collapseRight && isTertiary) {
      labelClasses += "nr1 ph1 " + (!disabled && 'hover-c-link') + " ";
    }

    if (noWrap) {
      labelClasses += 'nowrap ';
    }

    if (iconOnly) {
      classes += 'icon-button dib ';
    }

    var primaryEnabledClasses = 'bg-action-primary b--action-primary c-on-action-primary hover-bg-action-primary hover-b--action-primary hover-c-on-action-primary ';
    var secondaryEnabledClasses = 'bg-action-secondary b--action-secondary c-on-action-secondary hover-bg-action-secondary hover-b--action-secondary hover-c-on-action-secondary ';

    if (isGrouped && !disabled) {
      classes += isActiveOfGroup ? primaryEnabledClasses : secondaryEnabledClasses;
    } else {
      switch (variation) {
        default:
        case 'primary':
          {
            if (disabled) {
              classes += 'bg-disabled b--muted-5 c-on-disabled ';
            } else {
              classes += primaryEnabledClasses;
            }

            break;
          }

        case 'secondary':
          {
            if (disabled) {
              classes += 'bg-disabled b--muted-5 c-on-disabled ';
            } else {
              classes += secondaryEnabledClasses;
            }

            break;
          }

        case 'tertiary':
          {
            if (disabled) {
              classes += 'bg-transparent b--transparent c-disabled ';
            } else {
              classes += 'bg-transparent b--transparent c-action-primary hover-b--transparent ';
            }

            if (!disabled && !collapseLeft && !collapseRight) {
              classes += 'hover-bg-muted-5 ';
            }

            break;
          }

        case 'inverted-tertiary':
          {
            if (disabled) {
              classes += 'bg-transparent b--transparent c-disabled ';
            } else {
              classes += 'bg-transparent b--transparent c-on-base--inverted ';
            }

            break;
          }

        case 'danger':
          {
            if (disabled) {
              classes += 'bg-disabled b--muted-5 c-on-disabled ';
            } else {
              classes += 'bg-danger b--danger c-on-danger hover-bg-danger hover-b--danger hover-c-on-danger ';
            }

            break;
          }

        case 'danger-tertiary':
          {
            if (disabled) {
              classes += 'bg-transparent b--transparent c-disabled ';
            } else {
              classes += 'bg-transparent b--transparent c-danger hover-b--transparent hover-bg-muted-5 ';
            }

            break;
          }
      }
    }

    if (!disabled) {
      classes += 'pointer ';
    }

    if (block) {
      classes += 'w-100 ';
      labelClasses += 'w-100 border-box ';
    }

    if (href) {
      classes += 'inline-flex items-center no-underline ';
    }

    var style = {};

    if (iconOnly) {
      style.fontSize = 0;
    } // Active state receives the hover color of the Button.
    // No token available for this.


    if (isActiveOfGroup && !disabled) {
      style.backgroundColor = '#0c389f';
      style.borderColor = '#0c389f';
    }

    var linkModeProps = {
      target: target,
      rel: rel,
      referrerPolicy: referrerPolicy,
      download: download
    };
    var Element = href ? 'a' : 'button';
    return _react.default.createElement(Element, _extends({
      id: this.props.id,
      autoFocus: iconOnly ? undefined : this.props.autoFocus,
      disabled: iconOnly ? undefined : this.props.disabled,
      name: iconOnly ? undefined : this.props.name,
      value: iconOnly ? undefined : this.props.value,
      tabIndex: 0,
      className: classes,
      href: href,
      onClick: this.handleClick,
      onMouseEnter: this.props.onMouseEnter,
      onMouseLeave: this.props.onMouseLeave,
      onMouseOver: this.props.onMouseOver,
      onMouseOut: this.props.onMouseOut,
      onMouseUp: this.props.onMouseUp,
      onMouseDown: this.props.onMouseDown,
      onFocus: this.props.onFocus,
      onBlur: this.props.onBlur,
      ref: this.props.forwardedRef,
      style: style // Button-mode exclusive props
      ,
      type: href ? undefined : this.props.type // Link-mode exclusive props

    }, href && linkModeProps), isLoading ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("span", {
      className: "top-0 left-0 w-100 h-100 absolute flex justify-center items-center"
    }, _react.default.createElement(_spinner.default, {
      secondary: variation === 'primary' || variation === 'danger',
      size: loaderSize
    })), _react.default.createElement("span", {
      className: labelClasses + " o-0"
    }, children)) : _react.default.createElement("div", {
      className: labelClasses
    }, children));
  };

  return Button;
}(_react.Component);

Button.defaultProps = {
  size: 'regular',
  block: false,
  variation: 'primary',
  disabled: false,
  autoFocus: false,
  icon: false,
  type: 'button',
  isLoading: false,
  isGrouped: false,
  isFirstOfGroup: false,
  isLastOfGroup: false,
  isActiveOfGroup: false
};
Button.propTypes = {
  /** Button size  */
  size: _propTypes.default.oneOf(['small', 'regular', 'large']),

  /** Button prominence variation */
  variation: _propTypes.default.oneOf(['primary', 'secondary', 'tertiary', 'inverted-tertiary', 'danger', 'danger-tertiary']),

  /** Block style */
  block: _propTypes.default.bool,

  /** Loading state */
  isLoading: _propTypes.default.bool,

  /** [DEPRECATED] If you are using just an Icon component inside, use this as true */
  icon: _propTypes.default.bool,

  /** @ignore For internal use
   * Sets reduced paddings in order to keep the button squareish if it
   * only has an icon  */
  iconOnly: _propTypes.default.bool,

  /** (Button spec attribute) */
  id: _propTypes.default.string,

  /** (Button spec attribute) */
  autoFocus: _propTypes.default.bool,

  /** (Button spec attribute) */
  autoComplete: _propTypes.default.string,

  /** (Button spec attribute) */
  disabled: _propTypes.default.bool,

  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** (Button spec attribute) */
  name: _propTypes.default.string,

  /** (Button spec attribute) */
  type: _propTypes.default.string,

  /** (Button spec attribute) */
  value: _propTypes.default.string,

  /** Label of the Button */
  children: _propTypes.default.node.isRequired,

  /** onClick event. */
  onClick: _propTypes.default.func,

  /** URL for link mode. Converts the button internally to a link. */
  href: _propTypes.default.string,

  /** onMouseEnter event */
  onMouseEnter: _propTypes.default.func,

  /** onMouseLeave event */
  onMouseLeave: _propTypes.default.func,

  /** onMouseOver event */
  onMouseOver: _propTypes.default.func,

  /** onMouseOut event */
  onMouseOut: _propTypes.default.func,

  /** onMouseUp event */
  onMouseUp: _propTypes.default.func,

  /** onMouseDown event */
  onMouseDown: _propTypes.default.func,

  /** onFocus event */
  onFocus: _propTypes.default.func,

  /** onBlur event */
  onBlur: _propTypes.default.func,

  /** Cancels out left padding */
  collapseLeft: _propTypes.default.bool,

  /** Cancels out right padding */
  collapseRight: _propTypes.default.bool,

  /** */
  isGrouped: _propTypes.default.bool,

  /** */
  isFirstOfGroup: _propTypes.default.bool,

  /** */
  isLastOfGroup: _propTypes.default.bool,

  /** */
  isActiveOfGroup: _propTypes.default.bool,

  /** Link spec */
  target: _propTypes.default.string,

  /** Link spec */
  rel: _propTypes.default.string,

  /** Link spec */
  referrerPolicy: _propTypes.default.string,

  /** Link spec */
  download: _propTypes.default.string,

  /** When terciary, the upper case can be prevented */
  noUpperCase: _propTypes.default.bool,

  /** Disables label wrapping */
  noWrap: _propTypes.default.bool
};

var _default = (0, _withForwardedRef.withForwardedRef)(Button);

exports.default = _default;