"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _colorUtil = require("./colorUtil");

var _colorUtil2 = _interopRequireDefault(_colorUtil);

var _Input = require("./../../Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** HexInput Component */
var HexInput =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HexInput, _React$Component);

  function HexInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "state", {
      inputValue: '#000000',
      error: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      e.preventDefault();
      var inputValue = e.target.value;

      _this.setState({
        inputValue: inputValue
      });

      if (_this.validation(inputValue)) {
        var onChange = _this.props.onChange;

        var rgb = _colorUtil2.default.hex.to.rgb(inputValue);

        var hsv = _colorUtil2.default.rgb.to.hsv(rgb);

        onChange({
          rgb: rgb,
          hsv: hsv,
          hex: inputValue
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "validation", function (color) {
      var validColor = _colorUtil2.default.validateHex(color);

      _this.setState({
        error: !validColor
      });

      return validColor;
    });

    return _this;
  }

  var _proto = HexInput.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateInputValue();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.rgb !== this.props.rgb) {
      this.updateInputValue();
    }
  };

  _proto.updateInputValue = function updateInputValue() {
    var rgb = this.props.rgb;

    var color = _colorUtil2.default.rgb.to.hex(rgb);

    this.setState({
      inputValue: color
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        disabled = _this$props.disabled,
        errorMessage = _this$props.errorMessage;
    var _this$state = this.state,
        error = _this$state.error,
        inputValue = _this$state.inputValue;
    return _react2.default.createElement("div", {
      className: "mb5"
    }, _react2.default.createElement(_Input2.default, {
      error: error,
      label: "Hex",
      value: inputValue,
      size: "small",
      onChange: this.handleChange,
      errorMessage: error && errorMessage,
      disabled: disabled
    }));
  };

  return HexInput;
}(_react2.default.Component);
/** Default props values */


HexInput.defaultProps = {
  errorMessage: 'Invalid Hex Color',
  disable: false
};
HexInput.propTypes = {
  /** onChange event */
  onChange: _propTypes2.default.func,

  /** RGB color input */
  rgb: _propTypes2.default.object,

  /** Erro message */
  errorMessage: _propTypes2.default.string,

  /** Disable component */
  disabled: _propTypes2.default.bool
};
exports.default = HexInput;