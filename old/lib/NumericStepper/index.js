"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require("../Input/Input.css");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var normalizeMin = function normalizeMin(min) {
  return min == null ? -Infinity : min;
};

var normalizeMax = function normalizeMax(max) {
  return max == null ? Infinity : max;
};

var validateValue = function validateValue(value, min, max, defaultValue) {
  // This function always return a valid numeric value from the current input.
  // Compare with the function validateDisplayValue
  min = normalizeMin(min);
  max = normalizeMax(max);

  if (isNaN(value) || value == null) {
    if (defaultValue < min) return min;
    if (defaultValue > max) return max;
    return defaultValue;
  } else if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  }

  return parseInt(value, 10);
};

var validateDisplayValue = function validateDisplayValue(value, min, max) {
  // This function validates the input as the user types
  // It allows for temporarily invalid values (namely, empty string and minus sign without a number following it)
  // However, it prevents values out of boundaries, and invalid characters, e.g. letters
  min = normalizeMin(min);
  max = normalizeMax(max);
  var parsedValue = parseInt(value, 10);

  if (value === '') {
    return value;
  } // Only allows typing the negative sign if negative values are allowed


  if (value === '-' && min < 0) {
    return value;
  }

  if (isNaN(parsedValue)) {
    return '';
  } // Only limit by lower bounds if the min value is 1
  // Otherwise, it could prevent typing, for example, 10 if the min value is 2


  if (parsedValue < min && min === 1) {
    return min;
  }

  if (parsedValue > max) {
    return max;
  }

  return parsedValue;
};

var NumericStepper =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NumericStepper, _Component);

  function NumericStepper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputFocused: false,
      // used for comparison whether to trigger onChange or not
      value: 0,
      // used for temporarily invalid values during typing--specifically, when it's empty
      displayValue: 0
    });

    _defineProperty(_assertThisInitialized(_this), "changeValue", function (value, event) {
      var parsedValue = parseInt(value, 10);
      var _this$props = _this.props,
          minValue = _this$props.minValue,
          maxValue = _this$props.maxValue,
          defaultValue = _this$props.defaultValue,
          onChange = _this$props.onChange;
      var validatedValue = validateValue(parsedValue, minValue, maxValue, defaultValue);
      var displayValue = validateDisplayValue(value, minValue, maxValue);

      _this.setState({
        value: validatedValue,
        displayValue: displayValue
      });

      if (_this.state.value !== validatedValue && onChange) {
        // React synthetic events are reused for performance reasons.
        // New properties added to it are never released.
        // Calling event.persist() releases the event from the pool
        // https://reactjs.org/docs/events.html#event-pooling
        event.persist();
        event.value = validatedValue;
        onChange(event);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTypeQuantity", function (event) {
      _this.changeValue(event.target.value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleIncreaseValue", function (event) {
      _this.changeValue(_this.state.value + 1, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleDecreaseValue", function (event) {
      _this.changeValue(_this.state.value - 1, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocusInput", function (e) {
      e.target.select();

      _this.setState({
        inputFocused: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlurInput", function () {
      _this.setState({
        displayValue: _this.state.value,
        inputFocused: false
      });
    });

    return _this;
  }

  var _proto = NumericStepper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.size === 'x-large') {
      console.warn('NumericStepper: The value "x-large" for the prop "size" is deprecated. In the next major version, it will be equivalent to "large", and removed altogether in future versions');
    }
  };

  NumericStepper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    var value = props.value,
        minValue = props.minValue,
        maxValue = props.maxValue,
        defaultValue = props.defaultValue;
    var validatedValue = validateValue(value, minValue, maxValue, defaultValue);
    return _extends({
      value: validatedValue
    }, !state.inputFocused && {
      displayValue: validateDisplayValue(value, minValue, maxValue)
    });
  };

  _proto.render = function render() {
    var _this$state = this.state,
        value = _this$state.value,
        displayValue = _this$state.displayValue;
    var _this$props2 = this.props,
        maxValue = _this$props2.maxValue,
        minValue = _this$props2.minValue,
        size = _this$props2.size,
        block = _this$props2.block,
        label = _this$props2.label,
        lean = _this$props2.lean;
    var isMin = value <= normalizeMin(minValue);
    var isMax = value >= normalizeMax(maxValue);
    var labelClasses = '';
    var buttonClasses = '';
    var inputClasses = '';

    switch (size) {
      case 'small':
        {
          buttonClasses += "h-small " + (lean ? 'f4' : 'f6') + " ";
          var inputWidth = lean ? 'w1' : 'w3';
          inputClasses += "h-small t-small " + (block ? 'flex-grow-1' : inputWidth) + " ";
          labelClasses += 't-small ';
          break;
        }

      case 'large':
        {
          buttonClasses += "h-large " + (lean ? 'f3' : 'f5') + " ";

          var _inputWidth = lean ? 'w2' : 'w3';

          inputClasses += "h-large t-body " + (block ? 'flex-grow-1' : _inputWidth) + " ";
          labelClasses += 't-body ';
          break;
        }

      case 'x-large':
        {
          // DEPRECATED
          buttonClasses += "pv5 " + (lean ? 'f2' : 'f4') + " ";

          var _inputWidth2 = lean ? 'w3' : 'w4';

          inputClasses += "pv5 t-body " + (block ? 'flex-grow-1' : _inputWidth2) + " ";
          labelClasses += 't-body ';
          break;
        }

      default:
        {
          buttonClasses += "h-regular " + (lean ? 'f4' : 'f6') + " ";

          var _inputWidth3 = lean ? 'w2' : 'w3';

          inputClasses += "h-regular t-small " + (block ? 'flex-grow-1' : _inputWidth3) + " ";
          labelClasses += 't-small ';
          break;
        }
    }

    if (lean) inputClasses += 'br2 hover-b--muted-4 ba outline-transparent';
    var borderClasses = lean ? 'b--transparent ' : 'ba b--muted-4 bw1 ';
    var buttonDisabledClasses = lean ? 'c-disabled bg-transparent ' : 'bg-muted-5 c-disabled o-100 ';
    var buttonEnabledClasses = "pointer bg-base c-action-primary " + (lean ? 'outline-0' : '') + " ";

    var content = _react2.default.createElement(_react2.default.Fragment, null, label && _react2.default.createElement("span", {
      className: "db mb3 w-100 c-on-base " + labelClasses
    }, label), _react2.default.createElement("div", {
      className: "flex self-start"
    }, _react2.default.createElement("input", {
      type: "tel",
      className: "z-1 order-1 tc bw1 " + borderClasses + " br0 " + inputClasses + " " + _Input2.default.hideDecorators,
      style: _extends({}, block && {
        width: 0
      }, {
        WebkitAppearance: 'none'
      }),
      value: displayValue,
      onChange: this.handleTypeQuantity,
      onFocus: this.handleFocusInput,
      onBlur: this.handleBlurInput
    }), _react2.default.createElement("div", {
      className: "z-2 order-2 flex-none"
    }, _react2.default.createElement("button", {
      type: "button",
      className: "br2 pa0 bl-0 flex items-center justify-center " + borderClasses + " " + buttonClasses + " " + (isMax ? buttonDisabledClasses : buttonEnabledClasses),
      style: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        width: lean ? '2em' : '3em',
        transition: 'opacity 150ms'
      },
      disabled: isMax,
      "aria-label": "+",
      tabIndex: 0,
      onClick: this.handleIncreaseValue
    }, _react2.default.createElement("div", {
      className: "b"
    }, "\uFF0B"))), _react2.default.createElement("div", {
      className: "z-2 order-0 flex-none"
    }, _react2.default.createElement("button", {
      type: "button",
      className: "br2 pa0 br-0 flex items-center justify-center " + borderClasses + " " + buttonClasses + " " + (isMin ? buttonDisabledClasses : buttonEnabledClasses),
      style: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        width: lean ? '2em' : '3em',
        transition: 'opacity 150ms'
      },
      disabled: isMin,
      "aria-label": "\u2212" // This is a minus sign (U+2212), not a regular hyphen (-, U+002D),
      // which is the default keyboard character.
      // Used for screen readers.
      ,
      tabIndex: 0,
      onClick: this.handleDecreaseValue
    }, _react2.default.createElement("span", {
      className: "b"
    }, "\uFF0D"))))); // Refrain from using label tag if not needed, to prevent
    // iOS from focusing on the text field and popping up the
    // keyboard when increment/decrement is pressed


    if (label && !lean) {
      return _react2.default.createElement("label", null, content);
    }

    return _react2.default.createElement("div", null, content);
  };

  return NumericStepper;
}(_react.Component);

NumericStepper.propTypes = {
  /** Value of the input */
  value: _propTypes2.default.number,

  /** onChange event handler */
  onChange: _propTypes2.default.func.isRequired,

  /** Minimum value (will be the default value in case of invalid input, e.g. letters).
    Set to null or -Infinity in case there is no miminum. Default is 0.
  */
  minValue: _propTypes2.default.number,

  /** Maximum value (null or Infinity in case there is no maximum. Default is Infinity) */
  maxValue: _propTypes2.default.number,

  /** Default value in case of invalid input (e.g. letters) and there is no minimum value */
  defaultValue: _propTypes2.default.number,

  /** Input size */
  size: _propTypes2.default.oneOf(['small', 'regular', 'large']),

  /** Block or default size. */
  block: _propTypes2.default.bool,

  /** Input label */
  label: _propTypes2.default.string,

  /** Lean mode, with subtler styling */
  lean: _propTypes2.default.bool
};
NumericStepper.defaultProps = {
  minValue: 0,
  maxValue: Infinity,
  defaultValue: 0,
  size: 'regular',
  block: false
};
exports.default = NumericStepper;