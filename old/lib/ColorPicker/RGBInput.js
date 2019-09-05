"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _colorUtil = require("./colorUtil");

var _colorUtil2 = _interopRequireDefault(_colorUtil);

var _Input = require("./../../Input");

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * RGBInput Component
 */
var RGBInput =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(RGBInput, _React$Component);

  function RGBInput() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "getValue", function (event) {
      var max = Number(event.target.max);
      var min = Number(event.target.min);
      var value = Number(event.target.value);
      if (value > max) value = max;
      if (value < min) value = min;
      return value;
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event, key) {
      var _extends2;

      var value = _this.getValue(event);

      var rgb = _extends({}, _this.props.color, (_extends2 = {}, _extends2[key] = value, _extends2));

      var hsv = _colorUtil2.default.rgb.to.hsv(rgb);

      var hex = _colorUtil2.default.rgb.to.hex(rgb);

      _this.props.onChange({
        hsv: hsv,
        hex: hex,
        rgb: rgb
      });
    });

    return _this;
  }

  var _proto = RGBInput.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return _react2.default.createElement("div", {
      className: "relative flex mv3"
    }, _react2.default.createElement("div", {
      className: "ph2 w-25"
    }, _react2.default.createElement(_Input2.default, {
      label: "R",
      size: "small",
      type: "number",
      min: "0",
      max: "255",
      value: this.props.color.r,
      onChange: function onChange(e) {
        return _this2.handleChange(e, 'r');
      }
    })), _react2.default.createElement("div", {
      className: "ph2 w-25"
    }, _react2.default.createElement(_Input2.default, {
      label: "G",
      size: "small",
      type: "number",
      min: "0",
      max: "255",
      value: this.props.color.g,
      onChange: function onChange(e) {
        return _this2.handleChange(e, 'g');
      }
    })), _react2.default.createElement("div", {
      className: "ph2 w-25"
    }, _react2.default.createElement(_Input2.default, {
      label: "B",
      size: "small",
      type: "number",
      min: "0",
      max: "255",
      value: this.props.color.b,
      onChange: function onChange(e) {
        return _this2.handleChange(e, 'b');
      }
    })), _react2.default.createElement("div", {
      className: "ph2 w-25"
    }, _react2.default.createElement(_Input2.default, {
      label: "A",
      size: "small",
      type: "number",
      min: "0",
      max: "1",
      step: "0.01",
      value: this.props.color.a,
      onChange: function onChange(e) {
        return _this2.handleChange(e, 'a');
      }
    })));
  };

  return RGBInput;
}(_react2.default.Component);

RGBInput.propTypes = {
  /** inChange event */
  onChange: _propTypes.PropTypes.func.isRequired,

  /** Color Input */
  color: _propTypes.PropTypes.object.isRequired
};
exports.default = RGBInput;