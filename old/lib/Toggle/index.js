"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Deny = require("../icon/Deny");

var _Deny2 = _interopRequireDefault(_Deny);

var _Check = require("../icon/Check");

var _Check2 = _interopRequireDefault(_Check);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var Toggle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Toggle, _Component);

  function Toggle() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Toggle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.size === 'small') {
      console.warn('Toggle: value "small" for the prop "size" is deprecated—the default "regular" size is now equivalent to what the size "small" was previously.');
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        semantic = _this$props.semantic,
        disabled = _this$props.disabled,
        id = _this$props.id,
        checked = _this$props.checked,
        label = _this$props.label,
        size = _this$props.size,
        helpText = _this$props.helpText;
    var labelClass = disabled ? 'c-disabled ' : 'c-on-base ';
    var classes = 'flex items-center relative br4 ';
    var circleClasses = 'absolute br-100 ';
    var iconDenyClasses = 'absolute flex justify-center ';
    var iconCheckClasses = 'absolute flex justify-center ';
    var circleStyle = {
      boxShadow: disabled ? 'none' : '0 0 10px rgba(0,0,0,0.2)',
      transform: 'scale(0.8)',
      transition: 'all .1s ease-out'
    };
    var iconStyle = {
      transition: 'left .1s ease-out, opacity .1s ease-in-out' // Background

    };

    if (semantic) {
      if (!disabled) {
        iconCheckClasses += 'c-success ';
        iconDenyClasses += 'c-danger ';

        if (!checked) {
          classes += 'bg-danger ';
          iconDenyClasses += 'o-100 ';
          iconCheckClasses += 'o-0 ';
        } else {
          classes += 'bg-success ';
          iconDenyClasses += 'o-0 ';
          iconCheckClasses += 'o-100 ';
        }
      } else {
        classes += 'bg-disabled ';
        iconCheckClasses += 'c-on-disabled ';
        iconDenyClasses += 'c-on-disabled ';

        if (!checked) {
          iconDenyClasses += 'o-100 ';
          iconCheckClasses += 'o-0 ';
        } else {
          iconDenyClasses += 'o-0 ';
          iconCheckClasses += 'o-100 ';
        }
      }
    } else if (disabled) {
      classes += 'bg-disabled ';
    } else {
      if (!checked) {
        classes += 'bg-muted-2 ';
      }

      if (checked) {
        classes += 'bg-action-primary ';
      }
    } // Circle


    if (disabled) {
      circleClasses += 'bg-muted-3 ';
    } else {
      circleClasses += 'bg-base ';
    }

    var style = {
      transition: 'background 100ms ease-out'
    };
    var checkedOffset;

    switch (size) {
      case 'large':
        classes += 'h2 ';
        circleClasses += 'h2 w2 ';
        iconDenyClasses += 'w2 ';
        iconCheckClasses += 'w2 ';
        labelClass += 'ml5 ';
        style = _extends({}, style, {
          minWidth: '3.5rem'
        });
        circleStyle = _extends({}, circleStyle, {
          minWidth: '2rem'
        });
        checkedOffset = '1.5rem';
        break;

      default:
        style = _extends({}, style, {
          height: '1.25rem',
          width: '2.25rem',
          minWidth: '2.25rem'
        });
        circleStyle = _extends({}, circleStyle, {
          height: '1.25rem',
          width: '1.25rem',
          minWidth: '1.25rem'
        });
        iconStyle = _extends({}, iconStyle, {
          transform: 'scale(0.7)',
          width: '1.25rem'
        });
        labelClass += 'ml3 ';
        checkedOffset = '1rem';
    }

    var checkedStyle = {
      left: checked ? checkedOffset : 0
    };
    circleStyle = _extends({}, circleStyle, {}, checkedStyle);
    iconStyle = _extends({}, iconStyle, {}, checkedStyle);
    return _react2.default.createElement("label", {
      htmlFor: id
    }, _react2.default.createElement("div", {
      className: "flex flex-row items-center relative " + (!disabled && 'pointer')
    }, _react2.default.createElement("div", {
      className: "vtex-toggle " + classes,
      style: style
    }, _react2.default.createElement("div", {
      className: circleClasses,
      style: circleStyle
    }), semantic && _react2.default.createElement("div", {
      className: iconDenyClasses,
      style: iconStyle
    }, _react2.default.createElement(_Deny2.default, {
      size: size === 'regular' ? 14 : 12
    })), semantic && _react2.default.createElement("div", {
      className: iconCheckClasses,
      style: iconStyle
    }, _react2.default.createElement(_Check2.default, {
      size: size === 'regular' ? 15 : 13
    }))), _react2.default.createElement("input", {
      id: id,
      type: "checkbox",
      className: "h-100 w-100 absolute o-0 pointer",
      disabled: disabled,
      checked: checked,
      name: this.props.name,
      onClick: this.props.onClick,
      onChange: this.props.onChange,
      tabIndex: 0
    }), label && _react2.default.createElement("span", {
      className: labelClass
    }, label)), helpText && _react2.default.createElement("div", {
      className: "c-muted-1 t-small mt3 lh-title"
    }, helpText));
  };

  return Toggle;
}(_react.Component);

Toggle.defaultProps = {
  checked: false,
  disabled: false,
  semantic: false,
  label: '',
  size: 'regular'
};
Toggle.propTypes = {
  checked: _propTypes2.default.bool,
  semantic: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  name: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  size: _propTypes2.default.oneOf(['regular', 'large']),
  helpText: _propTypes2.default.node
};
exports.default = Toggle;