"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Textarea =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Textarea, _Component);

  function Textarea(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.props.onChange && _this.props.onChange(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      _this.setState({
        active: true
      });

      _this.props.onFocus && _this.props.onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      _this.setState({
        active: false
      });

      _this.props.onBlur && _this.props.onBlur(event);
    });

    _this.state = {
      active: false
    };
    return _this;
  }

  var _proto = Textarea.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        errorMessage = _this$props.errorMessage,
        error = _this$props.error,
        label = _this$props.label,
        helpText = _this$props.helpText,
        dataAttributes = _this$props.dataAttributes,
        children = _this$props.children,
        maxLength = _this$props.maxLength,
        resize = _this$props.resize,
        size = _this$props.size;
    var active = this.state.active;
    var dataAttrs = {};

    for (var _i = 0, _Object$keys = Object.keys(dataAttributes); _i < _Object$keys.length; _i++) {
      var key = _Object$keys[_i];
      dataAttrs["data-" + key] = dataAttributes[key];
    }

    var widthClass = 'w-100';
    var box = 'ma0 border-box';
    var border = 'bw1 br2 b--solid outline-0';
    var typography = 'c-on-base t-small';
    var padding = 'pv3 ph5';
    var classes = widthClass + " " + box + " " + padding + " " + border + " " + typography + " ";
    var labelClasses = "vtex-textarea__label db mb3 w-100 ";

    if (active) {
      classes += 'b--muted-2 ';
    } else if (!error && !errorMessage) {
      classes += 'b--muted-4 ';

      if (!this.props.disabled) {
        classes += 'hover-b--muted-3 ';
      }
    }

    if (error || errorMessage) {
      classes += 'b--danger hover-b--danger ';
    }

    if (this.props.disabled) {
      classes += 'bg-disabled b--disabled c-disabled ';
    } else {
      classes += 'bg-base ';
    }

    switch (size) {
      case 'small':
        classes += 't-small ';
        labelClasses += 't-small ';
        break;

      case 'large':
        classes += 't-body ';
        labelClasses += 't-body ';
        break;

      default:
        classes += 't-body ';
        labelClasses += 't-body ';
        break;
    }

    return _react2.default.createElement("label", {
      className: "vtex-textarea"
    }, label && _react2.default.createElement("span", {
      className: labelClasses
    }, label), _react2.default.createElement("textarea", _extends({}, dataAttrs, {
      onBlur: this.handleBlur,
      onFocus: this.handleFocus,
      onChange: this.handleChange,
      className: classes,
      autoComplete: this.props.autoComplete,
      autoFocus: this.props.autoFocus,
      disabled: this.props.disabled,
      maxLength: this.props.maxLength,
      minLength: this.props.minLength,
      name: this.props.name,
      placeholder: this.props.placeholder,
      readOnly: this.props.readOnly,
      required: this.props.required,
      spellCheck: this.props.spellCheck,
      id: this.props.id,
      rows: this.props.rows,
      defaultValue: this.props.defaultValue,
      value: this.props.value,
      style: {
        resize: resize,
        WebkitAppearance: 'none'
      }
    }), children), _react2.default.createElement("div", {
      className: "flex justify-between"
    }, _react2.default.createElement("div", null, errorMessage && _react2.default.createElement("div", {
      className: "c-danger t-small mt2 lh-title"
    }, errorMessage), helpText && _react2.default.createElement("div", {
      className: "c-muted-1 t-small mt2 lh-title"
    }, helpText)), maxLength && _react2.default.createElement(Textarea.CharacterCountdown, {
      value: this.props.maxLength - this.props.value.length,
      text: this.props.characterCountdownText
    })));
  };

  return Textarea;
}(_react.Component);

_defineProperty(Textarea, "CharacterCountdown", function (props) {
  var classes = 't-small mt2 lh-title ';

  if (props.value <= 10) {
    classes += 'c-danger';
  } else {
    classes += 'c-muted-1';
  }

  return _react2.default.createElement("div", {
    className: classes
  }, props.value, " ", props.text);
});

Textarea.defaultProps = {
  autoFocus: false,
  dataAttributes: {},
  disabled: false,
  label: '',
  readOnly: false,
  resize: 'both',
  size: 'regular',
  error: false,
  characterCountdownText: 'characters left',
  rows: 5
};
Textarea.propTypes = {
  /** Content of the textarea */
  children: _propTypes2.default.string,

  /* Size of the textarea */
  size: _propTypes2.default.oneOf(['small', 'regular', 'large']),

  /** Controlled content of the textarea */
  value: _propTypes2.default.string,

  /** Default content of the textarea */
  defaultValue: _propTypes2.default.string,

  /** Error highlight */
  error: _propTypes2.default.bool,

  /** Error message */
  errorMessage: _propTypes2.default.string,

  /** Help text */
  helpText: _propTypes2.default.node,

  /** Label */
  label: _propTypes2.default.string,

  /** Spec attribute */
  autoComplete: _propTypes2.default.string,

  /** Spec attribute */
  autoFocus: _propTypes2.default.bool,

  /** Spec attribute */
  disabled: _propTypes2.default.bool,

  /** Spec attribute */
  id: _propTypes2.default.string,

  /** If defined, the textarea will have a character countdown at the bottom right */
  maxLength: _propTypes2.default.string,

  /** Spec attribute */
  minLength: _propTypes2.default.string,

  /** Spec attribute */
  name: _propTypes2.default.string,

  /** Spec attribute */
  placeholder: _propTypes2.default.string,

  /** Spec attribute */
  readOnly: _propTypes2.default.bool,

  /** Spec attribute */
  required: _propTypes2.default.string,

  /** Controls if Textarea is resizable and the resize direction. */
  resize: _propTypes2.default.oneOf(['both', 'horizontal', 'none', 'vertical']),

  /** Spec attribute */
  rows: _propTypes2.default.number,

  /** Spec attribute */
  spellCheck: _propTypes2.default.string,

  /** Spec attribute */
  wrap: _propTypes2.default.string,

  /** List of data attributes as a object like `{'locale': 'en-US'}` */
  dataAttributes: _propTypes2.default.object,

  /** onChange event */
  onChange: _propTypes2.default.func,

  /** onFocus event */
  onFocus: _propTypes2.default.func,

  /** onBlur event */
  onBlur: _propTypes2.default.func,

  /** Helper text for character countdown (X characters left) */
  characterCountdownText: _propTypes2.default.string
};
exports.default = Textarea;