"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require("./Input.css");

var _Input2 = _interopRequireDefault(_Input);

var _withForwardedRef = require("../../modules/withForwardedRef");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Input =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Input, _Component);

  function Input(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.props.onChange && _this.props.onChange(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyPress", function (event) {
      _this.props.onKeyPress && _this.props.onKeyPress(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (event) {
      _this.props.onKeyDown && _this.props.onKeyDown(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyUp", function (event) {
      _this.props.onKeyUp && _this.props.onKeyUp(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      if (!_this.props.readOnly) {
        _this.setState({
          active: true
        });

        _this.props.onFocus && _this.props.onFocus(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      if (!_this.props.readOnly) {
        _this.setState({
          active: false
        });

        _this.props.onBlur && _this.props.onBlur(event);
      }
    });

    _this.state = {
      active: false
    };
    return _this;
  }

  var _proto = Input.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.size === 'x-large') {
      console.warn('Input: The value "x-large" for the prop "size" is deprecated. In the next major version, it will be equivalent to "large", and removed altogether in future versions');
    }

    if (this.props.suffixIcon) {
      console.warn('The prop suffixIcon is deprecated and will be removed in the next major. Please use the prop suffix instead.');
    }

    if (this.props.prefix && this.props.suffix) {
      console.warn('You should not use both prefix and suffix props in the same input. ');
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        errorMessage = _this$props.errorMessage,
        error = _this$props.error,
        label = _this$props.label,
        size = _this$props.size,
        token = _this$props.token,
        helpText = _this$props.helpText,
        dataAttributes = _this$props.dataAttributes,
        prefix = _this$props.prefix,
        suffixProp = _this$props.suffix,
        suffixIcon = _this$props.suffixIcon,
        groupBottom = _this$props.groupBottom;
    var active = this.state.active;
    var suffix = suffixProp || suffixIcon;
    var dataAttrs = {};

    for (var _i = 0, _Object$keys = Object.keys(dataAttributes); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      dataAttrs["data-" + key] = dataAttributes[key];
    }

    var widthClass = 'w-100';
    var box = 'ma0 border-box';
    var borderRadiusBase = 'br2';
    var borderBase = "bw1 b--solid";
    var borderRadius = borderRadiusBase + " " + (prefix ? 'bl-0 br--right ' : '') + " " + (suffix ? 'br-0 br--left ' : '');
    var prefixClasses = borderRadiusBase + " br-0 br--left ";
    var suffixClasses = borderRadiusBase + " bl-0 br--right ";
    var classes = widthClass + " " + box + " " + _Input2.default.hideDecorators + " " + _Input2.default.noAppearance + " " + borderRadius + " bn outline-0 ";
    var labelClasses = 'vtex-input__label db mb3 w-100 c-on-base ';
    var prefixAndSuffixClasses = 'vtex-input__prefix c-muted-2 fw5 flex items-center c-muted-2 t-body ';
    var prefixSuffixGroupClasses = 'vtex-input-prefix__group flex flex-row items-stretch ';
    prefixSuffixGroupClasses += borderRadiusBase + " " + borderBase + " " + (groupBottom ? 'br--top ' : '');

    if (token) {
      classes += 'code ';
    }

    if (this.props.disabled) {
      classes += 'bg-disabled b--disabled c-disabled ';
      prefixAndSuffixClasses += 'bg-disabled  ';
      prefixSuffixGroupClasses += 'b--disabled c-disabled ';
    } else {
      classes += 'bg-base c-on-base ';
      prefixAndSuffixClasses += 'bg-base ';

      if (error || errorMessage) {
        classes += 'b--danger hover-b--danger ';
        prefixSuffixGroupClasses += 'b--danger hover-b--danger ';
      } else if (active) {
        classes += 'b--muted-2 ';
        prefixSuffixGroupClasses += 'b--muted-2 ';
      } else {
        classes += 'b--muted-4 ';
        prefixSuffixGroupClasses += 'b--muted-4 ';

        if (!this.props.readOnly) {
          classes += 'hover-b--muted-3 ';
          prefixSuffixGroupClasses += 'hover-b--muted-3 ';
        }
      }
    }

    switch (size) {
      case 'small':
        prefixSuffixGroupClasses += 'h-small ';
        classes += (!token ? 't-small' : '') + " ";
        classes += "" + (prefix && suffix ? '' : prefix ? 'pr5 ' : suffix ? 'pl5 ' : 'ph5 ');
        labelClasses += 't-small ';
        prefixClasses += 'pl5 pr3 ';
        suffixClasses += 'pr5 pl3 ';
        break;

      case 'large':
        prefixSuffixGroupClasses += 'h-large ';
        classes += (!token ? 't-body' : '') + " ";
        classes += "" + (prefix && suffix ? '' : prefix ? 'pr5 ' : suffix ? 'pl5 ' : 'ph5 ');
        labelClasses += 't-body ';
        prefixClasses += 'pl5 pr4 ';
        suffixClasses += 'pr5 pl4 ';
        break;

      case 'x-large':
        // DEPRECATED
        classes += (!token ? 't-body' : '') + " pv5 ";
        classes += "" + (prefix && suffix ? '' : prefix ? 'pr7 ' : suffix ? 'pl7 ' : 'ph7 ');
        labelClasses += 't-body ';
        prefixClasses += 'pl5 pr3 ';
        suffixClasses += 'pr5 pl3 ';
        break;

      default:
        prefixSuffixGroupClasses += 'h-regular ';
        classes += (!token ? 't-small' : '') + " ";
        classes += "" + (prefix && suffix ? '' : prefix ? 'pr5 ' : suffix ? 'pl5 ' : 'ph5 ');
        labelClasses += 't-small ';
        prefixClasses += 'pl5 pr3 ';
        suffixClasses += 'pr5 pl3 ';
        break;
    }

    return _react2.default.createElement("label", {
      className: "vtex-input w-100"
    }, label && _react2.default.createElement("span", {
      className: labelClasses
    }, label), _react2.default.createElement("div", {
      className: prefixSuffixGroupClasses
    }, prefix && _react2.default.createElement("span", {
      className: prefixAndSuffixClasses + " " + prefixClasses
    }, prefix), _react2.default.createElement("input", _extends({}, dataAttrs, {
      ref: this.props.forwardedRef,
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      onKeyPress: this.handleKeyPress,
      onKeyDown: this.handleKeyDown,
      onKeyUp: this.handleKeyUp,
      className: classes,
      disabled: this.props.disabled,
      accept: this.props.accept,
      autoComplete: this.props.autoComplete,
      autoCorrect: this.props.autoCorrect,
      autoFocus: this.props.autoFocus,
      autoSave: this.props.autoSave,
      defaultValue: this.props.defaultValue,
      inputMode: this.props.inputMode,
      list: this.props.list,
      max: this.props.max,
      maxLength: this.props.maxLength,
      min: this.props.min,
      minLength: this.props.minLength,
      multiple: this.props.multiple,
      name: this.props.name,
      pattern: this.props.pattern,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      required: this.props.required,
      spellCheck: this.props.spellCheck,
      src: this.props.src,
      step: this.props.step,
      tabIndex: this.props.tabIndex,
      type: this.props.type,
      value: this.props.value,
      id: this.props.id
    })), suffix && _react2.default.createElement("span", {
      className: prefixAndSuffixClasses + " " + suffixClasses
    }, suffix)), errorMessage && _react2.default.createElement("div", {
      className: "c-danger t-small mt3 lh-title"
    }, errorMessage), helpText && _react2.default.createElement("div", {
      className: "c-muted-1 t-small mt3 lh-title"
    }, helpText));
  };

  return Input;
}(_react.Component);

Input.defaultProps = {
  autoFocus: false,
  token: false,
  dataAttributes: {},
  disabled: false,
  label: '',
  multiple: false,
  readOnly: false,
  error: false,
  size: 'regular',
  prefix: '',
  type: 'text'
};
Input.propTypes = {
  /** Error highlight */
  error: _propTypes2.default.bool,

  /** Error message */
  errorMessage: _propTypes2.default.string,

  /** @ignore Forwarded Ref */
  forwardedRef: _withForwardedRef.refShape,

  /** If the input is an API Key, App Key or App Token */
  token: _propTypes2.default.bool,

  /** Help text */
  helpText: _propTypes2.default.node,

  /** Input size */
  size: _propTypes2.default.oneOf(['small', 'regular', 'large']),

  /** Label */
  label: _propTypes2.default.string,

  /** Prefix */
  prefix: _propTypes2.default.node,

  /** Spec attribute */
  accept: _propTypes2.default.string,

  /** Spec attribute */
  disabled: _propTypes2.default.bool,

  /** Spec attribute */
  autoComplete: _propTypes2.default.string,

  /** Spec attribute */
  autoCorrect: _propTypes2.default.string,

  /** Spec attribute */
  autoFocus: _propTypes2.default.bool,

  /** Spec attribute */
  autoSave: _propTypes2.default.string,

  /** List of data attributes as a object like `{'locale': 'en-US'}` */
  dataAttributes: _propTypes2.default.object,

  /** Spec attribute */
  defaultValue: _propTypes2.default.string,

  /** Whether the border should join with an element below */
  groupBottom: _propTypes2.default.bool,

  /** Spec attribute */
  id: _propTypes2.default.string,

  /** Spec attribute */
  inputMode: _propTypes2.default.string,

  /** Spec attribute */
  list: _propTypes2.default.string,

  /** Spec attribute */
  max: _propTypes2.default.string,

  /** Spec attribute */
  maxLength: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),

  /** Spec attribute */
  min: _propTypes2.default.string,

  /** Spec attribute */
  minLength: _propTypes2.default.string,

  /** Spec attribute */
  multiple: _propTypes2.default.bool,

  /** Spec attribute */
  name: _propTypes2.default.string,

  /** Spec attribute */
  pattern: _propTypes2.default.string,

  /** Spec attribute */
  placeholder: _propTypes2.default.string,

  /** Spec attribute */
  readOnly: _propTypes2.default.bool,

  /** Spec attribute */
  required: _propTypes2.default.bool,

  /** Spec attribute */
  spellCheck: _propTypes2.default.string,

  /** Spec attribute */
  src: _propTypes2.default.string,

  /** Spec attribute */
  step: _propTypes2.default.string,

  /** Suffix attribute */
  suffix: _propTypes2.default.node,

  /** DEPRECATED: Suffix icon attribute */
  suffixIcon: _propTypes2.default.element,

  /** Spec attribute */
  tabIndex: _propTypes2.default.string,

  /** Spec attribute */
  type: _propTypes2.default.string,

  /** Spec attribute */
  value: _propTypes2.default.string,

  /** onChange event */
  onChange: _propTypes2.default.func,

  /** onKeyDown event */
  onKeyDown: _propTypes2.default.func,

  /** onKeyPress event */
  onKeyPress: _propTypes2.default.func,

  /** onKeyUp event */
  onKeyUp: _propTypes2.default.func,

  /** onFocus event */
  onFocus: _propTypes2.default.func,

  /** onBlur event */
  onBlur: _propTypes2.default.func
};
exports.default = (0, _withForwardedRef.withForwardedRef)(Input);